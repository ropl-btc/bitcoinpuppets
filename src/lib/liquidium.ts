export const DURATIONS = [5, 10, 16, 30];

export interface LiquidiumLoan {
  id: string;
  accepted_date: string;
  principal_amount_sats: number;
  lender_id: string;
  borrower_id: string;
  duration: number; // Injected
}

type LiquidiumLoanApi = Omit<LiquidiumLoan, "duration">;

export async function fetchLiquidiumActiveLoans(): Promise<LiquidiumLoan[]> {
  try {
    const requests = DURATIONS.map((d) =>
      fetch(
        `https://app.liquidium.wtf/api/collections/order-book/bitcoin-puppets-[${d}]-instant`,
        {
          headers: {
            Referer: "https://app.liquidium.wtf/borrow/ordinals",
          },
          next: { revalidate: 1800 },
        },
      ).then(async (res) => {
        if (!res.ok) return [];
        const data = (await res.json()) as { loans?: LiquidiumLoanApi[] };
        return (data.loans || []).map((loan) => ({
          id: loan.id,
          accepted_date: loan.accepted_date,
          principal_amount_sats: loan.principal_amount_sats,
          lender_id: loan.lender_id,
          borrower_id: loan.borrower_id,
          duration: d,
        }));
      }),
    );

    const results = await Promise.all(requests);
    return results.flat();
  } catch (error) {
    console.error("Error in fetchLiquidiumActiveLoans:", error);
    return [];
  }
}
