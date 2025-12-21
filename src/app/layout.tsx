import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
	title: "Bitcoin Puppets — Community Hub",
	description:
		"A community-led hub for the Bitcoin Puppets Ordinals collection. MS Paint vibes, world peace, and pure chaos.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<head>
				<link rel="icon" href="/favicon.ico" sizes="any"></link>
				<link rel="icon" href="/favicon-32x32.png" type="image/png" sizes="32x32"></link>
				<link rel="icon" href="/favicon-16x16.png" type="image/png" sizes="16x16"></link>
				<link rel="apple-touch-icon" href="/apple-touch-icon.png"></link>
				<link rel="manifest" href="/site.webmanifest"></link>
			</head>
			<body className="font-comic">{children}</body>
		</html>
	);
}
