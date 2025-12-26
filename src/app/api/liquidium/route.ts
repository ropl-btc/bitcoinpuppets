import { NextResponse } from "next/server";

export async function GET() {
  const apiKey = process.env.LIQUIDIUM_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { activeCount: 0, error: "API Key not configured" },
      { status: 200 },
    );
  }

  try {
    const response = await fetch(
      "https://api.liquidium.wtf/api/v1/borrower/collateral/ordinals/bitcoin-puppets?include_active_count=true",
      {
        headers: {
          Authorization: `Bearer ${apiKey}`,
        },
        next: { revalidate: 3600 }, // Cache for 1 hour
      },
    );

    if (!response.ok) {
      throw new Error(`Liquidium API returned ${response.status}`);
    }

    const data = (await response.json()) as {
      ordinal_details?: { active_offers_count?: number };
    };
    const activeCount = data.ordinal_details?.active_offers_count ?? 0;

    return NextResponse.json({ activeCount });
  } catch (error) {
    console.error("Error fetching Liquidium active loans:", error);
    return NextResponse.json({ activeCount: 0 }, { status: 200 });
  }
}
