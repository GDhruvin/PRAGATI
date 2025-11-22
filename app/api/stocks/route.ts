import { NextResponse } from 'next/server';

// Indian stock symbols
const INDIAN_STOCKS: Record<string, string> = {
  "SBIN": "SBIN.NS",
  "RELIANCE": "RELIANCE.NS",
  "NH": "NATIONALUM.NS",
  "LT": "LT.NS",
  "ICICIBANK": "ICICIBANK.NS",
  "HDFCBANK": "HDFCBANK.NS",
  "ITC": "ITC.NS",
  "EICHERMOT": "EICHERMOT.NS",
  "TCS": "TCS.NS",
  "TRENT": "TRENT.NS",
  "HINDUNILVR": "HINDUNILVR.NS",
  "SBICARD": "SBICARD.NS",
  "TITAN": "TITAN.NS",
  "NTPC": "NTPC.NS"
};

const COMPANY_NAMES: Record<string, string> = {
  "SBIN": "State Bank of India",
  "RELIANCE": "Reliance Industries Ltd",
  "NH": "National Aluminium Company",
  "LT": "Larsen & Toubro Ltd",
  "ICICIBANK": "ICICI Bank Ltd",
  "HDFCBANK": "HDFC Bank Ltd",
  "ITC": "ITC Ltd",
  "EICHERMOT": "Eicher Motors Ltd",
  "TCS": "Tata Consultancy Services",
  "TRENT": "Trent Ltd",
  "HINDUNILVR": "Hindustan Unilever Ltd",
  "SBICARD": "SBI Cards & Payment Services",
  "TITAN": "Titan Company Ltd",
  "NTPC": "NTPC Ltd"
};

const SECTOR_MAPPING: Record<string, string> = {
  "SBIN": "Financial Services",
  "RELIANCE": "Energy",
  "NH": "Metals & Mining",
  "LT": "Construction",
  "ICICIBANK": "Financial Services",
  "HDFCBANK": "Financial Services",
  "ITC": "Consumer Goods",
  "EICHERMOT": "Automobile",
  "TCS": "IT Services",
  "TRENT": "Retail",
  "HINDUNILVR": "Consumer Goods",
  "SBICARD": "Financial Services",
  "TITAN": "Consumer Goods",
  "NTPC": "Utilities"
};

function formatNumber(num: number | null | undefined): string {
  if (num === null || num === undefined) {
    return 'N/A';
  }

  try {
    if (num >= 1e12) { // Trillion
      return `₹${(num / 1e12).toFixed(2)}T`;
    } else if (num >= 1e7) { // Crore
      return `₹${(num / 1e7).toFixed(2)}Cr`;
    } else if (num >= 1e5) { // Lakh
      return `₹${(num / 1e5).toFixed(2)}L`;
    } else {
      return `₹${num.toLocaleString('en-IN', { maximumFractionDigits: 0 })}`;
    }
  } catch {
    return 'N/A';
  }
}

async function getComprehensiveStockData(symbol: string) {
  try {
    const yahooSymbol = INDIAN_STOCKS[symbol];
    const apiUrl = `https://query1.finance.yahoo.com/v8/finance/chart/${yahooSymbol}?range=1d&interval=1m`;

    const response = await fetch(apiUrl, {
      headers: {
        "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
      },
      next: { revalidate: 60 } // Cache for 60 seconds
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();

    if (!data.chart || !data.chart.result || !data.chart.result.length) {
      return { error: `No data found for ${symbol}` };
    }

    const result = data.chart.result[0];
    const meta = result.meta;

    // Calculate additional metrics
    const currentPrice = meta.regularMarketPrice || 0;
    const previousClose = meta.previousClose || 0;
    const change = currentPrice - previousClose;
    const changePercent = previousClose ? (change / previousClose) * 100 : 0;

    // Get volume data
    const volume = meta.regularMarketVolume || 0;

    // Get day high and low
    const dayHigh = meta.regularMarketDayHigh || 0;
    const dayLow = meta.regularMarketDayLow || 0;

    // Get 52-week high and low
    const fiftyTwoWeekHigh = meta.fiftyTwoWeekHigh || 0;
    const fiftyTwoWeekLow = meta.fiftyTwoWeekLow || 0;

    // Determine market sentiment
    const isPositive = change >= 0;
    const trend = isPositive ? "up" : "down";

    // Format profit/loss percentage with sign
    const profitLossPercent = `${isPositive ? '+' : ''}${changePercent.toFixed(2)}%`;

    return {
      // Column 1: Stock - symbol + companyName
      symbol: symbol,
      companyName: COMPANY_NAMES[symbol] || symbol,
      sector: SECTOR_MAPPING[symbol] || "Other",

      // Column 2: Price - currentPrice (₹)
      currentPrice: Number(currentPrice.toFixed(2)),
      formattedPrice: `₹${currentPrice.toFixed(2)}`,

      // Column 3: Previous Close - previousClose (₹)
      previousClose: Number(previousClose.toFixed(2)),
      formattedPreviousClose: `₹${previousClose.toFixed(2)}`,

      // Column 4: Change - change (₹) + changePercent (%)
      change: Number(change.toFixed(2)),
      changePercent: Number(changePercent.toFixed(2)),
      formattedChange: `₹${change.toFixed(2)}`,
      formattedChangeWithPercent: `₹${change.toFixed(2)} (${changePercent > 0 ? '+' : ''}${changePercent.toFixed(2)}%)`,

      // Column 5: Profit/Loss - in percentage with colored indicators
      profitLossPercent: profitLossPercent,
      isPositive: isPositive,
      trend: trend,
      profitLossColor: isPositive ? "green" : "red",

      // Column 6: Volume - formattedVolume
      volume: volume,
      formattedVolume: formatNumber(volume),

      // Column 7: Day Range - dayHigh / dayLow
      dayHigh: Number(dayHigh.toFixed(2)),
      dayLow: Number(dayLow.toFixed(2)),
      formattedDayRange: `₹${dayLow.toFixed(2)} - ₹${dayHigh.toFixed(2)}`,

      // Additional data
      fiftyTwoWeekHigh: Number(fiftyTwoWeekHigh.toFixed(2)),
      fiftyTwoWeekLow: Number(fiftyTwoWeekLow.toFixed(2)),
      marketCap: formatNumber(meta.marketCap),
      timestamp: new Date().toISOString().replace('T', ' ').split('.')[0]
    };

  } catch (e: any) {
    console.error(`Error fetching ${symbol}: ${e.message}`);
    return {
      symbol: symbol,
      error: true,
      message: `Failed to fetch data: ${e.message}`,
      companyName: symbol,
      currentPrice: 0,
      formattedPrice: "₹0",
      previousClose: 0,
      formattedPreviousClose: "₹0",
      change: 0,
      changePercent: 0,
      formattedChange: "₹0",
      formattedChangeWithPercent: "₹0 (0.00%)",
      profitLossPercent: "0.00%",
      isPositive: true,
      trend: "neutral",
      profitLossColor: "gray",
      volume: 0,
      formattedVolume: "₹0",
      dayHigh: 0,
      dayLow: 0,
      formattedDayRange: "₹0 - ₹0"
    };
  }
}

export async function GET() {
  const results = [];

  for (const symbol of Object.keys(INDIAN_STOCKS)) {
    const stockData = await getComprehensiveStockData(symbol);
    results.push(stockData);

    // Add small delay to avoid rate limiting, similar to Python version
    await new Promise(resolve => setTimeout(resolve, 500));
  }

  // Calculate summary statistics
  const successfulStocks = results.filter(s => !s.error);
  const totalStocks = results.length;
  const successfulCount = successfulStocks.length;

  let avgChangePercent = 0;
  let greenStocks = 0;
  let redStocks = 0;
  let avgProfitLoss = "0.00%";

  if (successfulCount > 0) {
    const totalChangePercent = successfulStocks.reduce((sum, stock) => sum + (stock.changePercent || 0), 0);
    avgChangePercent = totalChangePercent / successfulCount;
    greenStocks = successfulStocks.filter(stock => stock.isPositive).length;
    redStocks = successfulCount - greenStocks;
    avgProfitLoss = `${avgChangePercent >= 0 ? '+' : ''}${avgChangePercent.toFixed(2)}%`;
  }

  return NextResponse.json({
    success: true,
    summary: {
      totalStocks,
      successful: successfulCount,
      failed: totalStocks - successfulCount,
      greenStocks,
      redStocks,
      averageProfitLoss: avgProfitLoss,
      averageChangePercent: Number(avgChangePercent.toFixed(2))
    },
    data: results,
    lastUpdated: new Date().toISOString().replace('T', ' ').split('.')[0],
  });
}
