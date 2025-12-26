import { getCollectionIndex } from "@/data/collections";
import { fetchMagicEdenTokens, isMagicEdenSort } from "@/lib/magicEden";
import {
  COLLECTIONS,
  COLLECTION_TOTALS,
  DEFAULT_SORT,
  PAGE_SIZE,
  SEARCH_MAX_MATCHES,
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
}

function searchCollectionIndex({
  collection,
  query,
  page,
  pageSize,
}: SearchCollectionTokensParams) {
  const number = extractSearchNumber(query);
  const index = getCollectionIndex(collection);
  const matches: typeof index = [];
  let capped = false;

  for (const token of index) {
    if (!matchesTokenQuery(token, query, number)) continue;
    matches.push(token);
    if (matches.length >= SEARCH_MAX_MATCHES) {
      capped = true;
      break;
    }
  }

  const start = (page - 1) * pageSize;
  const end = start + pageSize;
  const results = matches.slice(start, end);
  const hasNext = capped ? end < SEARCH_MAX_MATCHES : matches.length > end;

  return { results, hasNext };
}

function orderTokensById(tokens: Token[], order: string[]) {
  const ordering = new Map(order.map((id, index) => [id, index]));
  return [...tokens].sort((a, b) => {
    const aIndex = ordering.get(a.id) ?? Number.MAX_SAFE_INTEGER;
    const bIndex = ordering.get(b.id) ?? Number.MAX_SAFE_INTEGER;
    return aIndex - bIndex;
  });
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
    (item) => item.symbol === collection,
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
      if (listedOnly) {
        tokens = tokens.filter((token) => token.listed);
      }
      hasSearchMatch = tokens.length > 0;
      nextPage = null;
    } else if (query) {
      const response = searchCollectionIndex({
        collection,
        query,
        page,
        pageSize: PAGE_SIZE,
      });
      const tokenIds = response.results.map((token) => token.id);

      if (tokenIds.length === 0) {
        tokens = [];
        hasSearchMatch = false;
        nextPage = null;
      } else {
        const apiResponse = await fetchMagicEdenTokens({
          collectionSymbol: collection,
          tokenIds: tokenIds.join(","),
          limit: PAGE_SIZE,
        });
        tokens = orderTokensById(apiResponse.tokens, tokenIds);
        if (listedOnly) {
          tokens = tokens.filter((token) => token.listed);
        }
        hasSearchMatch = tokens.length > 0;
        nextPage = response.hasNext ? page + 1 : null;
      }
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
