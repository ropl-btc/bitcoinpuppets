import Link from "next/link";
import GalleryControls from "./GalleryControls";
import GalleryGrid from "./GalleryGrid";
import GalleryPagination from "./GalleryPagination";
import {
	fetchMagicEdenTokens,
	isMagicEdenSort,
	MAGIC_EDEN_SORT_OPTIONS,
} from "@/lib/magicEden";

const COLLECTIONS = [
  { symbol: "bitcoin-puppets", label: "Bitcoin Puppets" },
  { symbol: "opium", label: "OPIUM" },
] as const;

const DEFAULT_COLLECTION = "bitcoin-puppets";
const DEFAULT_SORT = MAGIC_EDEN_SORT_OPTIONS[0]?.value ?? "listedAtDesc";
const DEFAULT_PAGE = 1;
const PAGE_SIZE = 20;
const SEARCH_BATCH_SIZE = 100;
const COLLECTION_TOTALS: Record<string, number> = {
	"bitcoin-puppets": 10001,
	opium: 777,
};

type SearchParams = Record<string, string | string[] | undefined>;

type GalleryPageProps = {
  searchParams?: Promise<SearchParams>;
};

function getParam(searchParams: SearchParams | undefined, key: string) {
  const value = searchParams?.[key];
  if (Array.isArray(value)) return value[0];
  return value;
}

function resolveCollection(value?: string) {
  if (!value) return DEFAULT_COLLECTION;
  return COLLECTIONS.some((item) => item.symbol === value)
    ? value
    : DEFAULT_COLLECTION;
}

function resolvePage(value?: string) {
	const parsed = Number(value ?? DEFAULT_PAGE);
	if (!Number.isFinite(parsed) || parsed < 1) return DEFAULT_PAGE;
	return Math.floor(parsed);
}

function buildBaseQuery(searchParams: SearchParams | undefined) {
	const query = new URLSearchParams();
	if (searchParams) {
		Object.entries(searchParams).forEach(([key, value]) => {
			if (key === "page") return;
			const normalized = Array.isArray(value) ? value[0] : value;
			if (normalized) {
				query.set(key, normalized);
			}
		});
	}
	return query.toString();
}

function normalizeQuery(value: string) {
	return value.trim().toLowerCase();
}

function extractSearchNumber(query: string) {
	const match = query.match(/#?\s*(\d{1,10})/);
	if (!match) return null;
	const parsed = Number(match[1]);
	return Number.isFinite(parsed) ? parsed : null;
}

function matchesTokenQuery(token: { id: string; displayName?: string; inscriptionNumber: number }, query: string, number: number | null) {
	const normalized = normalizeQuery(query);
	if (!normalized) return false;
	if (token.id.toLowerCase() === normalized) return true;
	if (token.id.toLowerCase().includes(normalized)) return true;
	if (token.displayName?.toLowerCase().includes(normalized)) return true;
	if (number !== null && token.inscriptionNumber === number) return true;
	if (number !== null && token.displayName?.toLowerCase().includes(`#${number}`)) return true;
	return false;
}

async function searchCollectionTokens({
	collection,
	query,
	page,
	pageSize,
	listedOnly,
}: {
	collection: string;
	query: string;
	page: number;
	pageSize: number;
	listedOnly: boolean;
}) {
	const desiredOffset = (page - 1) * pageSize;
	const number = extractSearchNumber(query);
	const totalForCollection = COLLECTION_TOTALS[collection];
	const totalPages = totalForCollection
		? Math.ceil(totalForCollection / SEARCH_BATCH_SIZE)
		: 1;
	let matchedCount = 0;
	let hasNext = false;
	const results: Awaited<ReturnType<typeof fetchMagicEdenTokens>>["tokens"] = [];

	for (let index = 0; index < totalPages; index += 1) {
		const offset = index * SEARCH_BATCH_SIZE;
		const { tokens } = await fetchMagicEdenTokens({
			collectionSymbol: collection,
			sortBy: "inscriptionNumberAsc",
			listed: listedOnly ? true : undefined,
			limit: SEARCH_BATCH_SIZE,
			offset,
		});

		for (const token of tokens) {
			if (!matchesTokenQuery(token, query, number)) continue;
			matchedCount += 1;
			if (matchedCount > desiredOffset && results.length < pageSize) {
				results.push(token);
			}
			if (matchedCount > desiredOffset + pageSize) {
				hasNext = true;
				break;
			}
		}

		if (hasNext) break;
		if (tokens.length < SEARCH_BATCH_SIZE) break;
	}

	return { results, hasNext };
}

export default async function GalleryPage({ searchParams }: GalleryPageProps) {
	const resolvedSearchParams = searchParams ? await searchParams : undefined;
	const collection = resolveCollection(
		getParam(resolvedSearchParams, "collection")
	);
	const sortByParam = getParam(resolvedSearchParams, "sortBy");
	const sortBy = isMagicEdenSort(sortByParam) ? sortByParam : DEFAULT_SORT;
	const listedOnly = getParam(resolvedSearchParams, "listed") === "true";
	const rawQuery = getParam(resolvedSearchParams, "q")?.trim() ?? "";
	const page = resolvePage(getParam(resolvedSearchParams, "page"));
	const offset = (page - 1) * PAGE_SIZE;

  const activeCollection = COLLECTIONS.find(
    (item) => item.symbol === collection
  );

	let tokens: Awaited<ReturnType<typeof fetchMagicEdenTokens>>["tokens"] = [];
	let errorMessage: string | null = null;
	let hasSearchMatch = false;
	let nextPage: number | null = null;
	const query = rawQuery.trim();
	const tokenIdCandidates = query
		.split(/[,\s]+/)
		.map((value) => value.trim())
		.filter(Boolean);
	const tokenIdsParam =
		tokenIdCandidates.length > 0 &&
		tokenIdCandidates.every((value) => /^[0-9a-f]{64}i\d+$/i.test(value))
			? tokenIdCandidates.join(",")
			: undefined;

	try {
		if (query && tokenIdsParam) {
			const response = await fetchMagicEdenTokens({
				collectionSymbol: collection,
				tokenIds: tokenIdsParam,
				limit: PAGE_SIZE,
			});
			tokens = response.tokens;
			hasSearchMatch = tokens.length > 0;
			nextPage = null;
		} else if (query) {
			const response = await searchCollectionTokens({
				collection,
				query,
				page,
				pageSize: PAGE_SIZE,
				listedOnly,
			});
			tokens = response.results;
			hasSearchMatch = tokens.length > 0;
			nextPage = response.hasNext ? page + 1 : null;
		} else {
			const response = await fetchMagicEdenTokens({
				collectionSymbol: collection,
				tokenIds: tokenIdsParam,
				sortBy,
				listed: listedOnly ? true : undefined,
				limit: PAGE_SIZE,
				offset,
			});
			tokens = response.tokens;
			nextPage = tokens.length === PAGE_SIZE ? page + 1 : null;
		}
	} catch (error) {
    errorMessage =
      error instanceof Error ? error.message : "Unable to load gallery.";
  }

	const previousPage = page > 1 ? page - 1 : null;
	const baseQuery = buildBaseQuery(resolvedSearchParams);
	const totalForCollection = COLLECTION_TOTALS[collection];
	const lastPage =
		!query && !listedOnly && totalForCollection
			? Math.ceil(totalForCollection / PAGE_SIZE)
			: null;
	const totalPages =
		!query && !listedOnly && totalForCollection
			? Math.ceil(totalForCollection / PAGE_SIZE)
			: null;

	return (
    <div className="relative min-h-screen pb-20">
      <div className="window-titlebar marquee border-b-4 border-black">
        <span className="text-sm md:text-base font-bold tracking-wide">
          bj bj bj ✦ MAGIC EDEN GALLERY ✦ WORLD PEACE ONLY ✦ CHAOTIC PIXEL ENERGY
          ✦ bj bj bj
        </span>
      </div>

      <main className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-4 pt-10 sm:px-6">
        <div className="flex items-center justify-between gap-3">
          <Link
            href="/"
            className="pixel-border bg-white px-3 py-2 text-xs font-bold uppercase text-black hover:-translate-y-0.5 hover:shadow-press transition"
          >
            Back to HQ
          </Link>
          <div className="pixel-border bg-black px-3 py-2 text-xs font-bold uppercase text-white">
            {activeCollection?.label ?? "Gallery"}
          </div>
        </div>

        <section className="pixel-border bg-white/90 p-6 text-black">
          <div className="window-titlebar mb-4 px-3 py-2 text-sm font-bold uppercase">
            {activeCollection?.label ?? "Gallery"} Gallery
          </div>
          <p className="text-sm leading-relaxed">
            Pulling live ordinals data from Magic Eden. Use the controls to sort,
            filter, and inspect each puppet up close.
          </p>
        </section>

		<GalleryControls
			collection={collection}
			sortBy={sortBy}
			listedOnly={listedOnly}
			query={query}
		/>

		<section className="pixel-border bg-white/95 p-6 text-black">
			<div className="window-titlebar mb-4 flex items-center justify-between px-3 py-2 text-sm font-bold uppercase">
				<span>Results</span>
				<span className="text-xs">
					Page {page}
					{totalPages ? ` of ${totalPages}` : ""}
					{listedOnly ? " · Listed" : ""}
					{query ? " · Search" : ""}
				</span>
			</div>
			{query ? (
				<div className="mb-4 flex flex-wrap items-center gap-3 text-xs font-bold uppercase">
					<div className="pixel-border bg-white px-3 py-2">
						Results for: <span className="text-puppet-purple">{query}</span>
					</div>
					<Link
						href={`/gallery?${new URLSearchParams({
							collection,
							sortBy,
							...(listedOnly ? { listed: "true" } : {}),
						}).toString()}`}
						className="pixel-border bg-puppet-pink px-3 py-2 text-xs font-bold uppercase text-black hover:-translate-y-0.5 hover:shadow-press transition"
					>
						Clear
					</Link>
				</div>
			) : null}

			{errorMessage ? (
            <div className="pixel-border bg-puppet-pink px-4 py-3 text-sm font-bold uppercase text-black">
              {errorMessage}
            </div>
				) : tokens.length ? (
					<GalleryGrid
						tokens={tokens}
						collectionLabel={activeCollection?.label ?? "Gallery"}
					/>
				) : (
					<div className="pixel-border bg-white px-4 py-3 text-sm">
						{query && !hasSearchMatch
							? "No results on this page. Try another page or clear search."
							: "No puppets found for these filters."}
					</div>
				)}

			<div className="mt-6 flex flex-wrap items-center justify-between gap-3">
				<div className="text-xs font-bold uppercase">
					Showing {tokens.length} items
				</div>
			</div>
			<GalleryPagination
				baseQuery={baseQuery}
				page={page}
				hasNext={Boolean(nextPage)}
				hasPrev={Boolean(previousPage)}
				lastPage={lastPage}
				totalPages={totalPages}
			/>
		</section>
	</main>
    </div>
  );
}
