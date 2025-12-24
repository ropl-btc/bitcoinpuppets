import { fetchMagicEdenTokens, isMagicEdenSort } from "@/lib/magicEden";
import {
  COLLECTIONS,
  COLLECTION_TOTALS,
  DEFAULT_SORT,
  PAGE_SIZE,
  SEARCH_BATCH_SIZE,
} from "./constants";
import { SearchParams } from "./types";
import {
  buildBaseQuery,
  extractSearchNumber,
  getParam,
  matchesTokenQuery,
  resolveCollection,
  resolvePage,
} from "./utils";

type Token = Awaited<ReturnType<typeof fetchMagicEdenTokens>>["tokens"][0];

interface SearchCollectionTokensParams {
  collection: string;
  query: string;
  page: number;
  pageSize: number;
  listedOnly: boolean;
}

// Internal helper for client-side filtering over paginated API
async function searchCollectionTokens({
  collection,
  query,
  page,
  pageSize,
  listedOnly,
}: SearchCollectionTokensParams) {
  const desiredOffset = (page - 1) * pageSize;
  const number = extractSearchNumber(query);
  const totalForCollection = COLLECTION_TOTALS[collection];
  const totalPages = totalForCollection
    ? Math.ceil(totalForCollection / SEARCH_BATCH_SIZE)
    : 1;
  let matchedCount = 0;
  let hasNext = false;
  const results: Token[] = [];

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

export async function getGalleryData(searchParams: SearchParams | undefined) {
  const collection = resolveCollection(getParam(searchParams, "collection"));
  const sortByParam = getParam(searchParams, "sortBy");
  const sortBy = isMagicEdenSort(sortByParam) ? sortByParam : DEFAULT_SORT;
  const listedOnly = getParam(searchParams, "listed") === "true";
  const rawQuery = getParam(searchParams, "q")?.trim() ?? "";
  const page = resolvePage(getParam(searchParams, "page"));
  const offset = (page - 1) * PAGE_SIZE;

  const activeCollection = COLLECTIONS.find(
    (item) => item.symbol === collection
  );

  let tokens: Token[] = [];
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
  const baseQuery = buildBaseQuery(searchParams);
  const totalForCollection = COLLECTION_TOTALS[collection];
  const lastPage =
    !query && !listedOnly && totalForCollection
      ? Math.ceil(totalForCollection / PAGE_SIZE)
      : null;
  const totalPages =
    !query && !listedOnly && totalForCollection
      ? Math.ceil(totalForCollection / PAGE_SIZE)
      : null;

  return {
    tokens,
    collection,
    activeCollection,
    sortBy,
    listedOnly,
    query,
    filters: {
      collection,
      sortBy,
      listedOnly,
      query,
    },
    pagination: {
      page,
      nextPage,
      previousPage,
      lastPage,
      totalPages,
      baseQuery,
    },
    errorMessage,
    hasSearchMatch,
  };
}
