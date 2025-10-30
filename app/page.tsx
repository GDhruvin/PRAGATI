"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Ticker } from "@/components/ticker"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from "recharts"
import { TrendingUp, TrendingDown } from "lucide-react"

const portfolioData = [
  { symbol: "SBIN", company: "SBI", price: "₹821.10", change: "+1.2%", industry: "Banking", weight: "10%", ytd: "+15%", positive: true },
  { symbol: "RELIANCE", company: "Reliance Industries", price: "₹2,451.30", change: "-0.5%", industry: "Energy", weight: "12%", ytd: "+9%", positive: false },
  { symbol: "NH", company: "Narayana Hrudayalaya", price: "₹1,120.40", change: "+0.3%", industry: "Healthcare", weight: "6%", ytd: "+18%", positive: true },
  { symbol: "LT", company: "L&T", price: "₹3,405.20", change: "+0.7%", industry: "Infrastructure", weight: "8%", ytd: "+11%", positive: true },
  { symbol: "ICICIBANK", company: "ICICI Bank", price: "₹1,015.50", change: "+0.9%", industry: "Banking", weight: "10%", ytd: "+14%", positive: true },
  { symbol: "HDFCBANK", company: "HDFC Bank", price: "₹1,650.10", change: "-0.2%", industry: "Banking", weight: "10%", ytd: "+13%", positive: false },
  { symbol: "CAPLIN", company: "Caplin", price: "₹840.30", change: "+1.5%", industry: "Pharma", weight: "5%", ytd: "+19%", positive: true },
  { symbol: "ITC", company: "ITC Ltd", price: "₹475.20", change: "+0.6%", industry: "FMCG", weight: "5%", ytd: "+12%", positive: true },
  { symbol: "EICHERMOT", company: "Eicher Motors", price: "₹3,670.40", change: "+0.8%", industry: "Auto", weight: "5%", ytd: "+17%", positive: true },
  { symbol: "TCS", company: "TCS", price: "₹3,038.50", change: "-0.4%", industry: "IT", weight: "7%", ytd: "+10%", positive: false },
  { symbol: "TRENT", company: "Trent", price: "₹4,200.80", change: "+1.1%", industry: "Retail", weight: "4%", ytd: "+20%", positive: true },
  { symbol: "HINDUNILVR", company: "HUL Ltd", price: "₹2,470.70", change: "-0.3%", industry: "FMCG", weight: "4%", ytd: "+8%", positive: false },
  { symbol: "SBICARD", company: "SBI Cards", price: "₹930.60", change: "+0.5%", industry: "Finance", weight: "4%", ytd: "+11%", positive: true },
  { symbol: "TITAN", company: "Titan", price: "₹3,850.90", change: "+0.2%", industry: "Consumer", weight: "3%", ytd: "+9%", positive: true },
  { symbol: "NTPC", company: "NTPC", price: "₹310.50", change: "+0.4%", industry: "Power", weight: "7%", ytd: "+16%", positive: true },
]

const sectorData = [
  { name: "Banking", value: 30, color: "#3b82f6" },
  { name: "FMCG", value: 15, color: "#8b5cf6" },
  { name: "IT", value: 10, color: "#10b981" },
  { name: "Infra", value: 10, color: "#f59e0b" },
  { name: "Auto", value: 10, color: "#ef4444" },
  { name: "Pharma", value: 10, color: "#06b6d4" },
  { name: "Others", value: 15, color: "#6366f1" },
]

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <Ticker />

        <div className="container space-y-8 py-8 px-4">
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="md:col-span-2">
              <CardHeader>
                <CardTitle className="text-3xl">₹21.18</CardTitle>
                <CardDescription className="flex items-center gap-2 text-base">
                  <span className="flex items-center gap-1 text-red-600">
                    <TrendingDown className="h-4 w-4" />
                    ₹-0.03 (-0.13%)
                  </span>
                  from previous day
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Last Updated: 14th Oct 2025, 3:30 PM IST
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Market Status</CardTitle>
                <CardDescription>Current Session</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Status</span>
                    <span className="font-medium text-green-600">Open</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Day Range</span>
                    <span className="font-medium">₹21.05 - ₹21.32</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Live Portfolio Holdings</CardTitle>
              <CardDescription>Current positions and performance</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Symbol</TableHead>
                      <TableHead>Company</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-right">% Change</TableHead>
                      <TableHead>Industry</TableHead>
                      <TableHead className="text-right">Weight</TableHead>
                      <TableHead className="text-right">YTD</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {portfolioData.map((item) => (
                      <TableRow key={item.symbol}>
                        <TableCell className="font-medium">{item.symbol}</TableCell>
                        <TableCell>{item.company}</TableCell>
                        <TableCell className="text-right">{item.price}</TableCell>
                        <TableCell className="text-right">
                          <span
                            className={`flex items-center justify-end gap-1 ${
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
                        </TableCell>
                        <TableCell>{item.industry}</TableCell>
                        <TableCell className="text-right font-medium">{item.weight}</TableCell>
                        <TableCell className="text-right text-green-600 font-medium">
                          {item.ytd}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sector Allocation</CardTitle>
              <CardDescription>Portfolio diversification across sectors</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sectorData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius={120}
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {sectorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
