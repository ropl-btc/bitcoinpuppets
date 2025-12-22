export const runtime = "edge";

const ALLOWED_HOSTS = new Set(["ordpuppetinuundoxxedmillionaires.com"]);
const ALLOWED_FITS = new Set(["contain", "cover", "crop", "pad", "scale-down"]);

const clampNumber = (value: number, min: number, max: number) =>
	Math.min(Math.max(value, min), max);

const parseNumber = (value: string | null) => {
	if (!value) return undefined;
	const parsed = Number(value);
	return Number.isFinite(parsed) ? parsed : undefined;
};

export async function GET(request: Request) {
	const url = new URL(request.url);
	const src = url.searchParams.get("src");

	if (!src) {
		return new Response("Missing src parameter.", { status: 400 });
	}

	let target: URL;
	try {
		target = new URL(src);
	} catch {
		return new Response("Invalid src parameter.", { status: 400 });
	}

	if (!["http:", "https:"].includes(target.protocol)) {
		return new Response("Invalid src protocol.", { status: 400 });
	}

	if (!ALLOWED_HOSTS.has(target.hostname)) {
		return new Response("Source host not allowed.", { status: 403 });
	}

	const width = parseNumber(url.searchParams.get("w"));
	const height = parseNumber(url.searchParams.get("h"));
	const quality = parseNumber(url.searchParams.get("q"));
	const fit = url.searchParams.get("fit");
	const normalizedFit = fit && ALLOWED_FITS.has(fit) ? fit : "contain";

	const imageOptions: Record<string, number | string> = {
		fit: normalizedFit,
		format: "auto",
	};

	if (width) {
		imageOptions.width = clampNumber(width, 16, 2400);
	}

	if (height) {
		imageOptions.height = clampNumber(height, 16, 2400);
	}

	if (quality) {
		imageOptions.quality = clampNumber(quality, 40, 90);
	}

	const response = await fetch(target.toString(), {
		cf: {
			image: imageOptions,
		},
	});

	const headers = new Headers(response.headers);
	if (response.ok) {
		headers.set("Cache-Control", "public, max-age=31536000, immutable");
	}

	return new Response(response.body, {
		status: response.status,
		statusText: response.statusText,
		headers,
	});
}
