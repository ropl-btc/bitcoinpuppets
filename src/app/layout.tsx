import type { Metadata } from "next";
import "./globals.css";

const siteTitle = "Bitcoin Puppets — Community Hub";
const siteDescription =
  "A community-led hub for the Bitcoin Puppets Ordinals collection. Good vibes, world peace, and pure chaos.";
const socialImage = "/social_preview.png";

export const metadata: Metadata = {
  title: siteTitle,
  description: siteDescription,
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
  ),
  openGraph: {
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: socialImage,
        width: 2752,
        height: 1536,
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="/favicon.png"
          type="image/png"
          sizes="118x118"
          media="(prefers-color-scheme: light)"
        ></link>
        <link
          rel="icon"
          href="/favicon-dark.png"
          type="image/png"
          sizes="118x118"
          media="(prefers-color-scheme: dark)"
        ></link>
        <link
          rel="icon"
          href="/favicon-32x32.png"
          type="image/png"
          sizes="32x32"
          media="(prefers-color-scheme: light)"
        ></link>
        <link
          rel="icon"
          href="/favicon-32x32-dark.png"
          type="image/png"
          sizes="32x32"
          media="(prefers-color-scheme: dark)"
        ></link>
        <link
          rel="icon"
          href="/favicon-16x16.png"
          type="image/png"
          sizes="16x16"
          media="(prefers-color-scheme: light)"
        ></link>
        <link
          rel="icon"
          href="/favicon-16x16-dark.png"
          type="image/png"
          sizes="16x16"
          media="(prefers-color-scheme: dark)"
        ></link>
        <link
          rel="icon"
          href="/favicon.ico"
          sizes="any"
          media="(prefers-color-scheme: light)"
        ></link>
        <link
          rel="icon"
          href="/favicon-dark.ico"
          sizes="any"
          media="(prefers-color-scheme: dark)"
        ></link>
        <link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
        <link rel="manifest" href="/site.webmanifest"></link>
      </head>
      <body className="font-comic">{children}</body>
    </html>
  );
}
