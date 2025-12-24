export type SearchParams = Record<string, string | string[] | undefined>;

export type GalleryPageProps = {
  searchParams?: Promise<SearchParams>;
};

export type GalleryMetadataProps = {
  searchParams?: Promise<SearchParams>;
};
