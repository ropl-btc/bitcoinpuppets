import type { Config } from "tailwindcss";

const config: Config = {
	content: ["./src/**/*.{ts,tsx,mdx}"],
	theme: {
		extend: {
			fontFamily: {
				comic: [
					"Comic Sans MS",
					"Comic Sans",
					"Comic Neue",
					"Chalkboard SE",
					"Marker Felt",
					"Trebuchet MS",
					"sans-serif",
				],
			},
			colors: {
				puppet: {
					blue: "#0b5fa5",
					yellow: "#f9d64a",
					pink: "#ff6bd6",
					green: "#8cff66",
					purple: "#6b5cff",
					gray: "#c9c9c9",
					ink: "#1a1a1a",
				},
			},
			boxShadow: {
				pixel: "4px 4px 0 #222222",
				press: "2px 2px 0 #222222",
			},
		},
	},
	plugins: [],
};

export default config;
