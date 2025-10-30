import { NextResponse } from "next/server";

// List of stock symbols to fetch
const STOCK_SYMBOLS = [
  "SBIN",
  "RELIANCE",
  "NH",
  "LT",
  "ICICIBANK",
  "HDFCBANK",
  "ITC",
  "EICHERMOT",
  "TCS",
  "TRENT",
  "HINDUNILVR",
  "SBICARD",
  "TITAN",
  "NTPC",
];

// Add metadata for each stock
const SYMBOL_META: Record<string, { company: string; industry: string }> = {
  SBIN: { company: "State Bank of India", industry: "Banking" },
  RELIANCE: { company: "Reliance Industries", industry: "Energy" },
  NH: { company: "Narayana Hrudayalaya", industry: "Healthcare" },
  LT: { company: "Larsen & Toubro (L&T)", industry: "Infrastructure" },
  ICICIBANK: { company: "ICICI Bank", industry: "Banking" },
  HDFCBANK: { company: "HDFC Bank", industry: "Banking" },
  ITC: { company: "ITC Ltd", industry: "FMCG" },
  EICHERMOT: { company: "Eicher Motors", industry: "Automobile" },
  TCS: { company: "Tata Consultancy Services", industry: "IT Services" },
  TRENT: { company: "Trent Ltd", industry: "Retail" },
  HINDUNILVR: { company: "Hindustan Unilever", industry: "FMCG" },
  SBICARD: { company: "SBI Cards", industry: "Finance" },
  TITAN: { company: "Titan Company", industry: "Consumer Goods" },
  NTPC: { company: "NTPC Ltd", industry: "Power" },
};

export async function GET() {
  try {
    // Fetch data for all symbols in parallel
    const results = await Promise.all(
      STOCK_SYMBOLS.map(async (symbol) => {
        const res = await fetch(
          `https://api.tradient.org/v1/api/market/technicals?symbol=${symbol}&duration=1`
        );

        if (!res.ok) throw new Error(`Failed to fetch ${symbol}`);

        const data = await res.json();
        const meta = SYMBOL_META[symbol] || {
          company: symbol,
          industry: "Unknown",
        };

        // Extract key fields from API response + merge meta
        return {
          symbol,
          company: meta.company,
          industry: meta.industry,
          price: data?.["close|1"] ?? null,
          RSI: data?.["RSI|1"] ?? null,
          MACD: data?.["MACD.macd|1"] ?? null,
          recommendation: data?.["Recommend.All|1"] ?? null,
          ema20: data?.["EMA20|1"] ?? null,
          sma50: data?.["SMA50|1"] ?? null,
        };
      })
    );

    return NextResponse.json({
      success: true,
      count: results.length,
      data: results,
    });
  } catch (error: any) {
    console.error("Error fetching stock data:", error);
    return NextResponse.json(
      {
        success: false,
        message: "Failed to fetch stock data",
        error: error.message,
      },
      { status: 500 }
    );
  }
}
