import { NextResponse } from "next/server";
import { fetchLiquidiumActiveLoans } from "@/lib/liquidium";

export async function GET() {
  try {
    const loans = await fetchLiquidiumActiveLoans();
    return NextResponse.json({
      activeCount: loans.length,
      loans: loans,
    });
  } catch (error) {
    console.error("Error fetching Liquidium.WTF public stats:", error);
    return NextResponse.json({ activeCount: 0, loans: [] }, { status: 200 });
  }
}
