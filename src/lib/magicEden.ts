const MAGIC_EDEN_BASE_URL = "https://api-mainnet.magiceden.dev/v2/ord/btc";
const MAGIC_EDEN_DEFAULT_LIMIT = 20;
const MAGIC_EDEN_MAX_LIMIT = 100;
const MAGIC_EDEN_LIMIT_STEP = 20;

export const MAGIC_EDEN_SORT_OPTIONS = [
  { value: "listedAtDesc", label: "Newest listed" },
  { value: "listedAtAsc", label: "Oldest listed" },
  { value: "priceAsc", label: "Price: low to high" },
  { value: "priceDesc", label: "Price: high to low" },
  { value: "inscriptionNumberAsc", label: "Inscription: low to high" },
  { value: "inscriptionNumberDesc", label: "Inscription: high to low" },
] as const;

export type MagicEdenSort = (typeof MAGIC_EDEN_SORT_OPTIONS)[number]["value"];

export type MagicEdenToken = {
  id: string;
  contentURI: string;
  contentPreviewURI: string;
  contentType: string;
  displayName: string;
  inscriptionNumber: number;
  listed: boolean;
  listedAt?: string;
  listedPrice?: number;
  lastSalePrice?: number;
  owner?: string;
  satRarity?: string;
};

type MagicEdenTokensResponse = {
  tokens: MagicEdenToken[];
};

export type MagicEdenTokensParams = {
  collectionSymbol?: string;
  tokenIds?: string;
  sortBy?: MagicEdenSort;
  listed?: boolean;
  limit?: number;
  offset?: number;
};

export function isMagicEdenSort(value?: string): value is MagicEdenSort {
  return MAGIC_EDEN_SORT_OPTIONS.some((option) => option.value === value);
}

function clampLimit(limit?: number) {
  if (!limit) return MAGIC_EDEN_DEFAULT_LIMIT;
  if (limit < MAGIC_EDEN_LIMIT_STEP) return MAGIC_EDEN_DEFAULT_LIMIT;
  if (limit > MAGIC_EDEN_MAX_LIMIT) return MAGIC_EDEN_MAX_LIMIT;
  if (limit % MAGIC_EDEN_LIMIT_STEP !== 0) {
    return MAGIC_EDEN_DEFAULT_LIMIT;
  }
  return limit;
}

function getApiKey() {
  const apiKey = process.env.MAGIC_EDEN_API_KEY;
  if (!apiKey) {
    throw new Error("MAGIC_EDEN_API_KEY is not configured.");
  }
  return apiKey;
}

export async function fetchMagicEdenTokens(params: MagicEdenTokensParams) {
  const apiKey = getApiKey();
  const limit = clampLimit(params.limit);
  const offset = params.offset && params.offset > 0 ? params.offset : 0;

  const search = new URLSearchParams();
  if (params.collectionSymbol) {
    search.set("collectionSymbol", params.collectionSymbol);
  }
  if (params.tokenIds) {
    search.set("tokenIds", params.tokenIds);
  }
  if (params.sortBy) {
    search.set("sortBy", params.sortBy);
  }
  if (typeof params.listed === "boolean") {
    search.set("listed", String(params.listed));
  }
  search.set("limit", String(limit));
  if (offset > 0) {
    search.set("offset", String(offset));
  }

  const url = `${MAGIC_EDEN_BASE_URL}/tokens?${search.toString()}`;
  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: "application/json",
    },
    next: { revalidate: 300 },
  });

  const json = (await response.json()) as MagicEdenTokensResponse & {
    error?: Array<{ message?: string }>;
  };

  if (!response.ok) {
    const message = json.error?.[0]?.message ?? "Magic Eden request failed.";
    throw new Error(message);
  }

  if (!json.tokens) {
    throw new Error("Magic Eden response did not include tokens.");
  }

  return {
    tokens: json.tokens,
    limit,
    offset,
  };
}
