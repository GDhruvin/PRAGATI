"use client";

import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Table, TableBody, TableCell, TableRow } from "@/components/ui/table";
import { FileText, TrendingDown, TrendingUp, AlertCircle } from "lucide-react";

const fundStats = [
  { metric: "Total AUM", value: "₹85.6 Cr" },
  { metric: "Beta", value: "0.90" },
  { metric: "P/E Ratio", value: "34.13" },
  { metric: "P/B Ratio", value: "7.28" },
  { metric: "Div Yield", value: "1.06%" },
  { metric: "Std Dev", value: "16.25%" },
];

const keyMetrics = [
  { item: "FII outflows", value: "₹30,000+ crores", negative: true },
  { item: "DII inflows", value: "₹60,000+ crores", negative: false },
  { item: "Rupee (all-time low)", value: "88.8/USD", negative: true },
  { item: "Gold", value: "₹1.17 lakh", negative: false },
  { item: "Silver", value: "₹1,44,200", negative: false },
];

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

        <div className="space-y-8 py-8 px-4">
          {/* Existing Market Commentary */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">
                October 2025 Market Analysis
              </CardTitle>
              <CardDescription>
                Monthly performance review and market insights
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="prose prose-slate dark:prose-invert max-w-none">
                <p className="text-muted-foreground leading-relaxed">
                  Indian equities staged a strong rebound in October 2025, with
                  the Nifty 50 and Sensex rising about 4.5%, marking their best
                  monthly gain since March...
                </p>
                {/* Rest of your commentary */}
              </div>

              {/* Key Market Movements card remains unchanged */}
              <Card className="bg-muted/50 border-2">
                <CardHeader>
                  <CardTitle className="text-lg">
                    Key Market Movements
                  </CardTitle>
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
            </CardContent>
          </Card>

          {/* ==================== NEW SECTIONS FROM FACTSHEET ==================== */}

          {/* Investment Objective */}
          <Card>
            <CardHeader>
              <CardTitle>Investment Objective</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground leading-relaxed">
                To provide our investors with an opportunity of long-term
                capital appreciation by investing in a diversified portfolio
                comprising of Large and Mid-Cap Securities.
              </p>
            </CardContent>
          </Card>

          {/* Portfolio Statistics + Key Facts – Side by Side */}
          <div className="grid gap-8 md:grid-cols-2">
            {/* Portfolio Statistics – Left */}
            <Card>
              <CardHeader>
                <CardTitle>Portfolio Statistics</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">
                        Number of Holdings
                      </TableCell>
                      <TableCell className="text-right">36</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Portfolio Beta
                      </TableCell>
                      <TableCell className="text-right">0.91</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Portfolio Std Dev (Annualised)
                      </TableCell>
                      <TableCell className="text-right">16.10%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Dividend Yield (TTM)
                      </TableCell>
                      <TableCell className="text-right">0.89%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Portfolio P/E
                      </TableCell>
                      <TableCell className="text-right">36.45</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Portfolio P/B
                      </TableCell>
                      <TableCell className="text-right">7.32</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Top 5 Holdings
                      </TableCell>
                      <TableCell className="text-right">32.32%</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        Benchmark Index
                      </TableCell>
                      <TableCell className="text-right">Nifty 50</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Key Facts – Right */}
            <Card>
              <CardHeader>
                <CardTitle>Key Facts</CardTitle>
              </CardHeader>
              <CardContent>
                <Table>
                  <TableBody>
                    <TableRow>
                      <TableCell className="font-medium">Launch Date</TableCell>
                      <TableCell className="text-right">
                        26 August 2019
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        First Purchase Date
                      </TableCell>
                      <TableCell className="text-right">
                        1 October 2019
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">Domicile</TableCell>
                      <TableCell className="text-right">India</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        NAV Publication
                      </TableCell>
                      <TableCell className="text-right">Monthly</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className="font-medium">
                        NAV Estimation
                      </TableCell>
                      <TableCell className="text-right">Weekly</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>

          {/* Capital Structure and Fees */}
          <Card>
            <CardHeader>
              <CardTitle>Capital Structure and Fees</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <p className="font-medium">Annual Management Fee</p>
                <p className="text-muted-foreground">
                  There is no annual management fee payable.
                </p>
              </div>
              <div>
                <p className="font-medium">Performance Fee</p>
                <p className="text-muted-foreground">
                  There is no performance fee payable.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Full Disclaimer */}
          <Card className="border-amber-500/50 bg-amber-50/10">
            <CardHeader>
              <div className="flex items-center gap-2">
                <AlertCircle className="h-5 w-5 text-amber-600" />
                <CardTitle>Disclaimer</CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Members of The Finance Club may/may not hold a stake in the
                companies mentioned.
                <br />
                <br />
                We may / may not have traded in the mentioned companies in the
                last 3 months.
                <br />
                <br />
                We are not SEBI registered research analyst.
                <br />
                <br />
                Buy / Sell securities after thorough analysis and at your own
                risk.
              </p>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
