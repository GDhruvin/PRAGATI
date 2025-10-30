"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { FileText, TrendingDown, TrendingUp } from "lucide-react"

const fundStats = [
  { metric: "Total AUM", value: "₹85.6 Cr" },
  { metric: "Beta", value: "0.90" },
  { metric: "P/E Ratio", value: "34.13" },
  { metric: "P/B Ratio", value: "7.28" },
  { metric: "Div Yield", value: "1.06%" },
  { metric: "Std Dev", value: "16.25%" },
]

const keyMetrics = [
  { item: "FII outflows", value: "₹30,000+ crores", negative: true },
  { item: "DII inflows", value: "₹60,000+ crores", negative: false },
  { item: "Rupee (all-time low)", value: "88.8/USD", negative: true },
  { item: "Gold", value: "₹1.17 lakh", negative: false },
  { item: "Silver", value: "₹1,44,200", negative: false },
]

export default function CommentaryPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <div className="border-b bg-muted/50 py-12">
          <div className="container px-4">
            <div className="flex items-center gap-3 mb-3">
              <FileText className="h-8 w-8 text-primary" />
              <h1 className="text-4xl font-bold">Monthly Commentary</h1>
            </div>
            <p className="text-muted-foreground text-lg">
              Detailed market analysis and fund performance review
            </p>
          </div>
        </div>

        <div className="container space-y-8 py-8 px-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">September 2025 Market Analysis</CardTitle>
              <CardDescription>Monthly performance review and market insights</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  September 2025 proved to be a volatile month for Indian equities. After gaining over 3% by
                  mid-September, both the Nifty and Sensex lost momentum, ultimately closing the month with a
                  marginal decline of <span className="text-red-600 font-semibold">-0.1%</span>.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  Selling pressure was pronounced in consumer, realty, and IT sectors, though autos, banks, and
                  metals provided some cushion. Meanwhile, precious metals surged to historic highs, reflecting
                  strong safe-haven demand.
                </p>
              </div>

              <Card className="bg-muted/50 border-2">
                <CardHeader>
                  <CardTitle className="text-lg">Key Market Movements</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
                    {keyMetrics.map((item) => (
                      <div
                        key={item.item}
                        className="flex items-start justify-between gap-3 p-3 rounded-lg bg-background"
                      >
                        <div className="flex-1">
                          <p className="text-sm font-medium">{item.item}</p>
                          <p className="text-lg font-bold mt-1">{item.value}</p>
                        </div>
                        {item.negative ? (
                          <TrendingDown className="h-5 w-5 text-red-600 flex-shrink-0" />
                        ) : (
                          <TrendingUp className="h-5 w-5 text-green-600 flex-shrink-0" />
                        )}
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              <div className="prose prose-slate dark:prose-invert max-w-none">
                <h3 className="text-xl font-semibold text-foreground mt-6 mb-3">Market Outlook</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Looking ahead, market sentiment remains cautious as investors await clearer signals on monetary
                  policy and global economic trends. The sustained domestic institutional support continues to
                  provide a floor to the markets, even as foreign investors remain net sellers.
                </p>

                <p className="text-muted-foreground leading-relaxed">
                  The PRAGATI Fund maintained its disciplined approach to portfolio construction, focusing on
                  quality businesses with strong fundamentals. Our diversified sector allocation helped mitigate
                  volatility during the month.
                </p>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Fund Statistics</CardTitle>
              <CardDescription>Key performance and risk metrics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead className="w-1/2">Metric</TableHead>
                      <TableHead className="text-right">Value</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {fundStats.map((stat) => (
                      <TableRow key={stat.metric}>
                        <TableCell className="font-medium">{stat.metric}</TableCell>
                        <TableCell className="text-right text-lg font-semibold">
                          {stat.value}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </CardContent>
          </Card>

          <Card className="border-primary/50">
            <CardContent className="pt-6">
              <div className="flex items-start gap-3">
                <FileText className="h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="font-medium mb-1">Disclaimer</p>
                  <p className="text-sm text-muted-foreground">
                    This commentary is for informational purposes only and should not be construed as
                    investment advice. Past performance is not indicative of future results. All investments
                    involve risk, and the value of investments may fluctuate.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
