import { MAGIC_EDEN_SORT_OPTIONS } from "@/lib/magicEden";

export const COLLECTIONS = [
  { symbol: "bitcoin-puppets", label: "Bitcoin Puppets" },
  { symbol: "opium", label: "OPIUM" },
] as const;

export const DEFAULT_COLLECTION = "bitcoin-puppets";
export const DEFAULT_SORT = MAGIC_EDEN_SORT_OPTIONS[2]?.value ?? "priceAsc";
export const DEFAULT_PAGE = 1;
export const PAGE_SIZE = 20;
export const SEARCH_BATCH_SIZE = 100;

export const COLLECTION_TOTALS: Record<string, number> = {
  "bitcoin-puppets": 10001,
  opium: 777,
};

export const SOCIAL_IMAGE = "/social_preview.png";
export const SITE_NAME = "Bitcoin Puppets";
