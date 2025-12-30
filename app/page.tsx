"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Ticker } from "@/components/ticker";
import { FactSheetHeader } from "@/components/fact-sheet-header";
import { MarketData } from "@/components/market-data";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  PieChart,
  Pie,
  Cell,
  ResponsiveContainer,
  Legend,
  Tooltip,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  BarChart,
  Bar,
} from "recharts";
import { TrendingUp, TrendingDown, FileText, AlertCircle, Loader2 } from "lucide-react";

const keyMetrics = [
  { item: "FII outflows", value: "₹30,000+ crores", negative: true },
  { item: "DII inflows", value: "₹60,000+ crores", negative: false },
  { item: "Rupee (all-time low)", value: "88.8/USD", negative: true },
  { item: "Gold", value: "₹1.17 lakh", negative: false },
  { item: "Silver", value: "₹1,44,200", negative: false },
];

export default function Home() {
  const [portfolioData, setPortfolioData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const navPerformanceData = [
    { date: "Oct-2019", "P₹AGATI": 0.0, Nifty50: 0.0 },
    { date: "Dec-2019", "P₹AGATI": 8.0, Nifty50: 5.0 },
    { date: "Feb-2020", "P₹AGATI": -1.0, Nifty50: -5.0 },
    { date: "Mar-2020", "P₹AGATI": -2.0, Nifty50: -28.0 },
    { date: "Apr-2020", "P₹AGATI": 0.0, Nifty50: -15.0 },
    { date: "Jun-2020", "P₹AGATI": 5.0, Nifty50: 5.0 },
    { date: "Aug-2020", "P₹AGATI": 8.0, Nifty50: 10.0 },
    { date: "Oct-2020", "P₹AGATI": 10.0, Nifty50: 15.0 },
    { date: "Dec-2020", "P₹AGATI": 18.0, Nifty50: 25.0 },
    { date: "Feb-2021", "P₹AGATI": 22.0, Nifty50: 28.0 },
    { date: "Apr-2021", "P₹AGATI": 23.0, Nifty50: 29.0 },
    { date: "Jun-2021", "P₹AGATI": 30.0, Nifty50: 35.0 },
    { date: "Aug-2021", "P₹AGATI": 32.0, Nifty50: 38.0 },
    { date: "Oct-2021", "P₹AGATI": 42.0, Nifty50: 52.0 },
    { date: "Dec-2021", "P₹AGATI": 40.0, Nifty50: 50.0 },
    { date: "Feb-2022", "P₹AGATI": 38.0, Nifty50: 48.0 },
    { date: "Apr-2022", "P₹AGATI": 38.0, Nifty50: 48.0 },
    { date: "Jun-2022", "P₹AGATI": 30.0, Nifty50: 40.0 },
    { date: "Aug-2022", "P₹AGATI": 35.0, Nifty50: 50.0 },
    { date: "Oct-2022", "P₹AGATI": 38.0, Nifty50: 55.0 },
    { date: "Dec-2022", "P₹AGATI": 36.0, Nifty50: 52.0 },
    { date: "Feb-2023", "P₹AGATI": 35.0, Nifty50: 52.0 },
    { date: "Apr-2023", "P₹AGATI": 45.0, Nifty50: 60.0 },
    { date: "Jun-2023", "P₹AGATI": 52.0, Nifty50: 65.0 },
    { date: "Aug-2023", "P₹AGATI": 55.0, Nifty50: 68.0 },
    { date: "Oct-2023", "P₹AGATI": 55.0, Nifty50: 65.0 },
    { date: "Dec-2023", "P₹AGATI": 65.0, Nifty50: 80.0 },
    { date: "Feb-2024", "P₹AGATI": 75.0, Nifty50: 90.0 },
    { date: "Apr-2024", "P₹AGATI": 85.0, Nifty50: 95.0 },
    { date: "Jun-2024", "P₹AGATI": 100.0, Nifty50: 110.0 },
    { date: "Aug-2024", "P₹AGATI": 110.0, Nifty50: 120.0 },
    { date: "Oct-2024", "P₹AGATI": 115.0, Nifty50: 125.0 },
    { date: "Dec-2024", "P₹AGATI": 105.0, Nifty50: 115.0 },
    { date: "Feb-2025", "P₹AGATI": 95.0, Nifty50: 105.0 },
    { date: "Apr-2025", "P₹AGATI": 105.0, Nifty50: 115.0 },
    { date: "Jun-2025", "P₹AGATI": 115.0, Nifty50: 120.0 },
    { date: "Aug-2025", "P₹AGATI": 112.0, Nifty50: 115.0 },
    { date: "Oct-2025", "P₹AGATI": 120.0, Nifty50: 125.0 },
  ];
  const returnsComparisonData = [
    { period: "Overall", "P₹AGATI": 120.97, Nifty50: 126.43 },
    { period: "Last Year", "P₹AGATI": 6.13, Nifty50: 6.27 },
    { period: "Last 3 Months", "P₹AGATI": 3.84, Nifty50: 3.85 },
    { period: "Last Month", "P₹AGATI": 4.43, Nifty50: 4.51 },
  ];

  useEffect(() => {
    const fetchPortfolio = async () => {
      try {
        const res = await fetch("/api/stocks");
        const data = await res.json();
        if (data.success) {
          setPortfolioData(data.data);
        }
      } catch (err) {
        console.error("Failed to fetch portfolio:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPortfolio();
  }, []);

  const sectorData = (() => {
    if (!portfolioData || portfolioData.length === 0) return [];

    const industryCounts: Record<string, number> = {};
    portfolioData.forEach((item) => {
      if (item.sector) {
        industryCounts[item.sector] =
          (industryCounts[item.sector] || 0) + 1;
      }
    });

    const total = Object.values(industryCounts).reduce((a, b) => a + b, 0);

    // Initial base color: #396893 (RGB: 57, 104, 147)
    // We want to generate progressively lighter shades.
    // Simple approach: Mix with white.
    const baseColor = { r: 57, g: 104, b: 147 };

    return Object.entries(industryCounts)
      .sort(([, a], [, b]) => b - a) // Sort by value desc to have consistent gradient
      .map(([name, count], index, array) => {
        // Calculate lightness factor based on index
        // 0 -> 0% mix (base color)
        // last -> 80% mix (very light)
        const step = index / (array.length - 1 || 1);
        const mix = step * 0.8; // Max 80% white mix

        const r = Math.round(baseColor.r + (255 - baseColor.r) * mix);
        const g = Math.round(baseColor.g + (255 - baseColor.g) * mix);
        const b = Math.round(baseColor.b + (255 - baseColor.b) * mix);

        const color = `rgb(${r}, ${g}, ${b})`;

        return {
          name,
          value: Number(((count / total) * 100).toFixed(1)),
          color: color,
        };
      });
  })();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <FactSheetHeader />
        <Ticker data={portfolioData} />

        <div className="w-full space-y-8 py-8 px-6">
          <MarketData />

          <Card id="portfolio">
            <CardHeader>
              <CardTitle>Live Portfolio Holdings</CardTitle>
              <CardDescription>
                Current positions and performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex h-40 w-full items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Stock Symbol</TableHead>
                        <TableHead>Company Name</TableHead>
                        <TableHead className="text-right">Price</TableHead>
                        <TableHead className="text-right">Change</TableHead>
                        <TableHead className="text-right">Change %</TableHead>
                        <TableHead className="text-right">Volume</TableHead>
                        <TableHead className="text-right">Day Range</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {portfolioData.map((item) => (
                        <TableRow key={item.symbol}>
                          <TableCell className="font-medium">
                            {item.symbol}
                          </TableCell>
                          <TableCell>{item.companyName}</TableCell>
                          <TableCell className="text-right">
                            {item.formattedPrice}
                          </TableCell>
                          <TableCell className={`text-right ${item.isPositive ? "text-green-600" : "text-red-600"}`}>
                            {item.formattedChange}
                          </TableCell>
                          <TableCell className={`text-right ${item.isPositive ? "text-green-600" : "text-red-600"}`}>
                            {item.isPositive ? <TrendingUp className="inline h-3 w-3 mr-1" /> : <TrendingDown className="inline h-3 w-3 mr-1" />}
                            {item.changePercent}%
                          </TableCell>
                          <TableCell className="text-right">
                            {item.formattedVolume}
                          </TableCell>
                          <TableCell className="text-right">
                            {item.formattedDayRange}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>

          {/* NAV Performance vs Benchmark */}
          <Card id="fund-performance">
            <CardHeader>
              <CardTitle>NAV Performance vs Benchmark</CardTitle>
              <CardDescription>
                P₹AGATI Fund vs Nifty 50 (Indexed to 100 at inception)
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart
                    data={navPerformanceData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
                  >
                    <CartesianGrid strokeDasharray="4 4" stroke="black" />
                    <XAxis
                      dataKey="date"
                      tick={{ fontSize: 11 }}
                      angle={-45}
                      textAnchor="end"
                      height={60}
                    />
                    <YAxis
                      tick={{ fontSize: 12 }}
                      tickFormatter={(value) => `${value}%`}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255,255,255,0.95)",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => `${value.toFixed(1)}%`}
                    />
                    <Legend verticalAlign="top" height={36} iconType="line" />

                    {/* "P₹AGATI" Fund – #4070c3 (Winner/Main) */}
                    <Line
                      type="monotone"
                      dataKey="P₹AGATI"
                      stroke="#4070c3"
                      strokeWidth={4}
                      activeDot={{ r: 8, stroke: "#4070c3", strokeWidth: 3 }}
                      name="P₹AGATI Fund"
                    />

                    {/* Nifty 50 – #d8e1f0 (Benchmark) */}
                    <Line
                      type="monotone"
                      dataKey="Nifty50"
                      stroke="#d8e1f0"
                      strokeWidth={3}
                      activeDot={{ r: 7, stroke: "#d8e1f0", strokeWidth: 2 }}
                      name="Nifty 50"
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Fund Return vs Nifty 50 */}
          <Card>
            <CardHeader>
              <CardTitle>Fund Return vs Nifty 50</CardTitle>
              <CardDescription>
                Performance comparison across time periods
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={returnsComparisonData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 40 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                    <XAxis
                      dataKey="period"
                      angle={-45}
                      textAnchor="end"
                      height={80}
                      tick={{ fontSize: 13 }}
                    />
                    <YAxis
                      tick={{ fontSize: 12 }}
                      label={{
                        value: "Return (%)",
                        angle: -90,
                        position: "insideLeft",
                      }}
                    />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255,255,255,0.95)",
                        border: "1px solid #ccc",
                      }}
                      formatter={(value: number) => `${value.toFixed(1)}%`}
                    />
                    <Legend />
                    <Bar
                      dataKey="P₹AGATI"
                      fill="#4070c3"
                      radius={[8, 8, 0, 0]}
                      name="P₹AGATI Fund"
                    />
                    <Bar
                      dataKey="Nifty50"
                      fill="#d8e1f0"
                      radius={[8, 8, 0, 0]}
                      name="Nifty 50"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Sector Allocation */}
          <Card>
            <CardHeader>
              <CardTitle>Sector Allocation</CardTitle>
              <CardDescription>
                Distribution of holdings by sector
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <div className="flex h-[400px] w-full items-center justify-center">
                  <Loader2 className="h-8 w-8 animate-spin text-muted-foreground" />
                </div>
              ) : (
                <div className="h-[400px] w-full">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={sectorData}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={150}
                        fill="#8884d8"
                        dataKey="value"
                        label={({ name, percent }) =>
                          `${name} ${(percent * 100).toFixed(0)}%`
                        }
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
              )}
            </CardContent>
          </Card>
        </div>

        {/* Monthly Commentary Section */}
        <div className="border-t border-white/20 py-12">
          <div className="container px-4 mx-auto">
            <div className="flex items-center gap-3 mb-8">
              <FileText className="h-8 w-8 text-primary" />
              <div>
                <h2 className="text-3xl font-bold">Monthly Commentary</h2>
                <p className="text-muted-foreground text-lg">
                  Detailed market analysis and fund performance review
                </p>
              </div>
            </div>

            <div className="space-y-8">
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
                      Indian equities staged a strong rebound in October 2025,
                      with the Nifty 50 and Sensex rising about 4.5%, marking
                      their best monthly gain since March...
                    </p>
                  </div>

                  {/* Key Market Movements card */}
                  <Card className="border-2 border-white/20">
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
                              <p className="text-lg font-bold mt-1">
                                {item.value}
                              </p>
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
                          <TableCell className="font-medium">
                            Launch Date
                          </TableCell>
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
              <Card className="border-amber-500/50 bg-amber-50/20">
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
                    We may / may not have traded in the mentioned companies in
                    the last 3 months.
                    <br />
                    <br />
                    We are not SEBI registered research analyst.
                    <br />
                    <br />
                    Buy / Sell securities after thorough analysis and at your
                    own risk.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}
