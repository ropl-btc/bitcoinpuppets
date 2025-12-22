import type { MetadataRoute } from "next";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bitcoinpuppets.community";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = new URL(siteUrl);

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
      },
    ],
    sitemap: new URL("/sitemap.xml", baseUrl).href,
    host: baseUrl.origin,
  };
}
