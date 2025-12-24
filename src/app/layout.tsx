import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Bitcoin Puppets — Community Hub";
const siteDescription =
  "A community-led hub for the Bitcoin Puppets Ordinals collection. Good vibes, world peace, and pure chaos.";
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ?? "https://bitcoinpuppets.community";
const socialImage = "/social_preview.png";

export const metadata: Metadata = {
  title: {
    default: siteTitle,
    template: "%s — Bitcoin Puppets",
  },
  description: siteDescription,
  metadataBase: new URL(siteUrl),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    url: "/",
    siteName: "Bitcoin Puppets",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: socialImage,
        width: 1200,
        height: 630,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [socialImage],
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: [
      {
        url: "/favicons/favicon.png",
        sizes: "118x118",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicons/favicon-dark.png",
        sizes: "118x118",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicons/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicons/favicon-32x32-dark.png",
        sizes: "32x32",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicons/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
        media: "(prefers-color-scheme: light)",
      },
      {
        url: "/favicons/favicon-16x16-dark.png",
        sizes: "16x16",
        type: "image/png",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicons/favicon-dark.ico",
        sizes: "any",
        media: "(prefers-color-scheme: dark)",
      },
      {
        url: "/favicons/favicon.ico",
        sizes: "any",
        media: "(prefers-color-scheme: light)",
      },
    ],
    apple: [
      {
        url: "/favicons/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/favicons/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-comic">{children}</body>
    </html>
  );
}
