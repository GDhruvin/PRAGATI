"use client"

import { TrendingUp, TrendingDown } from "lucide-react"

const tickerData = [
  { symbol: "SBIN", price: "₹821.10", change: "+1.2%", positive: true },
  { symbol: "RELIANCE", price: "₹2,451.30", change: "-0.5%", positive: false },
  { symbol: "NH", price: "₹1,120.40", change: "+0.3%", positive: true },
  { symbol: "L&T", price: "₹3,405.20", change: "+0.7%", positive: true },
  { symbol: "ICICIBANK", price: "₹1,015.50", change: "+0.9%", positive: true },
  { symbol: "HDFCBANK", price: "₹1,650.10", change: "-0.2%", positive: false },
  { symbol: "CAPLIN", price: "₹840.30", change: "+1.5%", positive: true },
  { symbol: "ITC", price: "₹475.20", change: "+0.6%", positive: true },
]

export function Ticker() {
  const doubledData = [...tickerData, ...tickerData]

  return (
    <div className="w-full overflow-hidden border-b bg-muted/50 py-3">
      <div className="flex animate-[ticker_30s_linear_infinite] whitespace-nowrap">
        {doubledData.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-2 px-6 text-sm font-medium"
          >
            <span className="font-bold text-foreground">{item.symbol}</span>
            <span className="text-muted-foreground">{item.price}</span>
            <span
              className={`flex items-center gap-1 ${
                item.positive ? "text-green-600" : "text-red-600"
              }`}
            >
              {item.positive ? (
                <TrendingUp className="h-3 w-3" />
              ) : (
                <TrendingDown className="h-3 w-3" />
              )}
              {item.change}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
