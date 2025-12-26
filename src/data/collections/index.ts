import puppets from "./bitcoin-puppets.json";
import opium from "./opium.json";

export type CollectionIndexItem = {
  id: string;
  inscriptionNumber: number;
  displayName?: string;
  contentPreviewURI?: string;
};

export const COLLECTION_INDEXES: Record<string, CollectionIndexItem[]> = {
  "bitcoin-puppets": puppets as CollectionIndexItem[],
  opium: opium as CollectionIndexItem[],
};

const COLLECTION_INDEX_CACHE = new Map<string, CollectionIndexItem[]>();

export function getCollectionIndex(collection: string) {
  const cached = COLLECTION_INDEX_CACHE.get(collection);
  if (cached) return cached;
  const resolved = COLLECTION_INDEXES[collection] ?? [];
  COLLECTION_INDEX_CACHE.set(collection, resolved);
  return resolved;
}
