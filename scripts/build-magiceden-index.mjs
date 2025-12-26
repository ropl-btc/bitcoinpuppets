import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";

const MAGIC_EDEN_BASE_URL = "https://api-mainnet.magiceden.dev/v2/ord/btc";
const LIMIT = 100;
const OUTPUT_DIR = path.resolve(process.cwd(), "src/data/collections");

const collections = ["bitcoin-puppets", "opium"];

const apiKey = process.env.MAGIC_EDEN_API_KEY;
if (!apiKey) {
  console.error("Missing MAGIC_EDEN_API_KEY in environment.");
  process.exit(1);
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function toIndexItem(token) {
  const item = {
    id: token.id,
    inscriptionNumber: token.inscriptionNumber,
  };
  if (token.displayName) item.displayName = token.displayName;
  if (token.contentPreviewURI) item.contentPreviewURI = token.contentPreviewURI;
  return item;
}

async function fetchBatch(collectionSymbol, offset) {
  const url = new URL(`${MAGIC_EDEN_BASE_URL}/tokens`);
  url.searchParams.set("collectionSymbol", collectionSymbol);
  url.searchParams.set("sortBy", "inscriptionNumberAsc");
  url.searchParams.set("limit", String(LIMIT));
  if (offset > 0) url.searchParams.set("offset", String(offset));

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${apiKey}`,
      Accept: "application/json",
    },
  });

  const json = await response.json();
  if (!response.ok) {
    const message = json?.error?.[0]?.message ?? "Magic Eden request failed.";
    throw new Error(message);
  }

  if (!Array.isArray(json.tokens)) {
    throw new Error("Magic Eden response did not include tokens.");
  }

  return json.tokens;
}

async function buildCollectionIndex(collectionSymbol) {
  const items = [];
  let offset = 0;

  for (;;) {
    const tokens = await fetchBatch(collectionSymbol, offset);
    items.push(...tokens.map(toIndexItem));

    if (tokens.length < LIMIT) break;
    offset += LIMIT;
    await sleep(150);
  }

  return items;
}

async function main() {
  await mkdir(OUTPUT_DIR, { recursive: true });

  for (const collection of collections) {
    console.log(`Building index for ${collection}...`);
    const items = await buildCollectionIndex(collection);
    const outputPath = path.join(OUTPUT_DIR, `${collection}.json`);
    await writeFile(outputPath, `${JSON.stringify(items, null, 2)}\n`, "utf8");
    console.log(`Wrote ${items.length} items to ${outputPath}`);
  }
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
