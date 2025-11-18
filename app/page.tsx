"use client";

import { useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { Ticker } from "@/components/ticker";
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
import { TrendingUp, TrendingDown } from "lucide-react";

export default function Home() {
  const [portfolioData, setPortfolioData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const navPerformanceData = [
    { date: "Aug 19", PRAGATI: 10.0, Nifty50: 100.0 },
    { date: "Sep 19", PRAGATI: 10.3, Nifty50: 101.2 },
    { date: "Oct 19", PRAGATI: 10.8, Nifty50: 102.8 },
    { date: "Nov 19", PRAGATI: 11.1, Nifty50: 104.5 },
    { date: "Dec 19", PRAGATI: 11.6, Nifty50: 106.1 },
    { date: "Jan 20", PRAGATI: 11.4, Nifty50: 103.8 }, // COVID dip start
    { date: "Feb 20", PRAGATI: 10.9, Nifty50: 98.5 },
    { date: "Mar 20", PRAGATI: 9.2, Nifty50: 85.3 }, // Crash
    { date: "Apr 20", PRAGATI: 10.8, Nifty50: 94.2 },
    { date: "May 20", PRAGATI: 11.5, Nifty50: 96.8 },
    { date: "Jun 20", PRAGATI: 12.7, Nifty50: 102.4 },
    { date: "Jul 20", PRAGATI: 13.9, Nifty50: 108.1 },
    { date: "Aug 20", PRAGATI: 14.6, Nifty50: 110.9 },
    { date: "Sep 20", PRAGATI: 14.3, Nifty50: 109.7 },
    { date: "Oct 20", PRAGATI: 15.1, Nifty50: 112.3 },
    { date: "Nov 20", PRAGATI: 16.8, Nifty50: 119.8 },
    { date: "Dec 20", PRAGATI: 18.2, Nifty50: 128.6 },
    { date: "Jan 21", PRAGATI: 17.8, Nifty50: 125.4 },
    { date: "Feb 21", PRAGATI: 18.5, Nifty50: 130.2 },
    { date: "Mar 21", PRAGATI: 19.3, Nifty50: 134.1 },
    { date: "Apr 21", PRAGATI: 19.0, Nifty50: 132.8 },
    { date: "May 21", PRAGATI: 20.1, Nifty50: 138.9 },
    { date: "Jun 21", PRAGATI: 20.8, Nifty50: 141.2 },
    { date: "Jul 21", PRAGATI: 21.4, Nifty50: 143.7 },
    { date: "Aug 21", PRAGATI: 22.6, Nifty50: 148.3 },
    { date: "Sep 21", PRAGATI: 22.1, Nifty50: 146.9 },
    { date: "Oct 21", PRAGATI: 23.5, Nifty50: 152.1 },
    { date: "Nov 21", PRAGATI: 22.9, Nifty50: 149.8 },
    { date: "Dec 21", PRAGATI: 23.8, Nifty50: 153.4 },
    { date: "Jan 22", PRAGATI: 23.2, Nifty50: 150.1 },
    { date: "Feb 22", PRAGATI: 24.1, Nifty50: 154.7 },
    { date: "Mar 22", PRAGATI: 25.3, Nifty50: 160.2 },
    { date: "Apr 22", PRAGATI: 24.7, Nifty50: 157.8 },
    { date: "May 22", PRAGATI: 24.1, Nifty50: 154.3 },
    { date: "Jun 22", PRAGATI: 23.6, Nifty50: 151.9 },
    { date: "Jul 22", PRAGATI: 25.2, Nifty50: 158.6 },
    { date: "Aug 22", PRAGATI: 26.8, Nifty50: 164.2 },
    { date: "Sep 22", PRAGATI: 26.1, Nifty50: 161.4 },
    { date: "Oct 22", PRAGATI: 27.4, Nifty50: 166.8 },
    { date: "Nov 22", PRAGATI: 28.3, Nifty50: 170.5 },
    { date: "Dec 22", PRAGATI: 27.9, Nifty50: 168.9 },
    { date: "Jan 23", PRAGATI: 27.3, Nifty50: 165.2 },
    { date: "Feb 23", PRAGATI: 28.1, Nifty50: 169.1 },
    { date: "Mar 23", PRAGATI: 28.9, Nifty50: 172.4 },
    { date: "Apr 23", PRAGATI: 30.2, Nifty50: 178.3 },
    { date: "May 23", PRAGATI: 31.1, Nifty50: 182.7 },
    { date: "Jun 23", PRAGATI: 32.5, Nifty50: 188.9 },
    { date: "Jul 23", PRAGATI: 33.8, Nifty50: 194.2 },
    { date: "Aug 23", PRAGATI: 32.9, Nifty50: 190.1 },
    { date: "Sep 23", PRAGATI: 34.2, Nifty50: 195.8 },
    { date: "Oct 23", PRAGATI: 33.6, Nifty50: 192.4 },
    { date: "Nov 23", PRAGATI: 35.1, Nifty50: 198.7 },
    { date: "Dec 23", PRAGATI: 37.2, Nifty50: 206.3 },
    { date: "Jan 24", PRAGATI: 36.5, Nifty50: 202.1 },
    { date: "Feb 24", PRAGATI: 38.1, Nifty50: 209.8 },
    { date: "Mar 24", PRAGATI: 39.8, Nifty50: 216.4 },
    { date: "Apr 24", PRAGATI: 38.9, Nifty50: 212.3 },
    { date: "May 24", PRAGATI: 40.2, Nifty50: 218.9 },
    { date: "Jun 24", PRAGATI: 41.8, Nifty50: 225.6 },
    { date: "Jul 24", PRAGATI: 40.9, Nifty50: 221.4 },
    { date: "Aug 24", PRAGATI: 42.3, Nifty50: 228.1 },
    { date: "Sep 24", PRAGATI: 41.6, Nifty50: 224.7 },
    { date: "Oct 24", PRAGATI: 20.8, Nifty50: 132.5 }, // Switch to absolute NAV in 2024
    { date: "Nov 24", PRAGATI: 21.3, Nifty50: 135.8 },
    { date: "Dec 24", PRAGATI: 21.9, Nifty50: 139.2 },
    { date: "Jan 25", PRAGATI: 20.7, Nifty50: 134.6 },
    { date: "Feb 25", PRAGATI: 21.5, Nifty50: 138.9 },
    { date: "Mar 25", PRAGATI: 22.4, Nifty50: 143.1 },
    { date: "Apr 25", PRAGATI: 21.8, Nifty50: 140.2 },
    { date: "May 25", PRAGATI: 22.7, Nifty50: 145.8 },
    { date: "Jun 25", PRAGATI: 23.6, Nifty50: 150.3 },
    { date: "Jul 25", PRAGATI: 22.9, Nifty50: 147.1 },
    { date: "Aug 25", PRAGATI: 23.8, Nifty50: 152.7 },
    { date: "Sep 25", PRAGATI: 21.2, Nifty50: 138.4 },
    { date: "Oct 25", PRAGATI: 22.1, Nifty50: 142.6 },
  ];
  const returnsComparisonData = [
    { period: "1 Month", PRAGATI: 4.5, Nifty50: 3.8 },
    { period: "3 Months", PRAGATI: 12.3, Nifty50: 10.1 },
    { period: "6 Months", PRAGATI: 18.7, Nifty50: 16.4 },
    { period: "1 Year", PRAGATI: 32.8, Nifty50: 28.9 },
    { period: "Since Inception", PRAGATI: 121.0, Nifty50: 42.6 },
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

  console.log("portfolioData", portfolioData);

  const sectorData = (() => {
    if (!portfolioData || portfolioData.length === 0) return [];

    const industryCounts: Record<string, number> = {};
    portfolioData.forEach((item) => {
      if (item.industry) {
        industryCounts[item.industry] =
          (industryCounts[item.industry] || 0) + 1;
      }
    });

    const total = Object.values(industryCounts).reduce((a, b) => a + b, 0);

    const COLORS = [
      "#3b82f6",
      "#8b5cf6",
      "#10b981",
      "#f59e0b",
      "#ef4444",
      "#06b6d4",
      "#6366f1",
      "#84cc16",
      "#ec4899",
    ];

    return Object.entries(industryCounts).map(([name, count], index) => ({
      name,
      value: Number(((count / total) * 100).toFixed(1)),
      color: COLORS[index % COLORS.length],
    }));
  })();

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <Ticker />

        <div className="w-full space-y-8 py-8 px-6">
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
              <CardDescription>
                Current positions and performance
              </CardDescription>
            </CardHeader>
            <CardContent>
              {loading ? (
                <p>Loading portfolio...</p>
              ) : (
                <div className="overflow-x-auto">
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Stock Symbol</TableHead>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Sector</TableHead>
                        <TableHead className="text-right">
                          Current Price (₹)
                        </TableHead>
                        <TableHead className="text-right">
                          RSI (Strength)
                        </TableHead>
                        <TableHead className="text-right">
                          MACD (Trend)
                        </TableHead>
                        <TableHead className="text-right">
                          EMA 20-Day Avg
                        </TableHead>
                        <TableHead className="text-right">
                          SMA 50-Day Avg
                        </TableHead>
                        <TableHead className="text-right">Signal</TableHead>
                      </TableRow>
                    </TableHeader>

                    <TableBody>
                      {portfolioData.map((item) => (
                        <TableRow key={item.symbol}>
                          <TableCell className="font-medium">
                            {item.symbol}
                          </TableCell>
                          <TableCell>{item.company}</TableCell>
                          <TableCell>{item.industry}</TableCell>
                          <TableCell className="text-right">
                            {item.price ? item.price.toFixed(2) : "—"}
                          </TableCell>
                          <TableCell className="text-right">
                            {item.RSI ? item.RSI.toFixed(2) : "—"}
                          </TableCell>
                          <TableCell className="text-right">
                            {item.MACD !== null && item.MACD !== undefined ? (
                              <span
                                className={
                                  item.MACD > 0
                                    ? "text-green-600 font-medium"
                                    : item.MACD < 0
                                    ? "text-red-600 font-medium"
                                    : "text-gray-500"
                                }
                              >
                                {item.MACD.toFixed(2)}
                              </span>
                            ) : (
                              "—"
                            )}
                          </TableCell>
                          <TableCell className="text-right">
                            {item.ema20 ? item.ema20.toFixed(2) : "—"}
                          </TableCell>
                          <TableCell className="text-right">
                            {item.sma50 ? item.sma50.toFixed(2) : "—"}
                          </TableCell>
                          <TableCell className="text-right">
                            <span
                              className={`flex items-center justify-end gap-1 ${
                                item.recommendation > 0
                                  ? "text-green-600"
                                  : item.recommendation < 0
                                  ? "text-red-600"
                                  : "text-gray-500"
                              }`}
                            >
                              {item.recommendation > 0 ? (
                                <TrendingUp className="h-3 w-3" />
                              ) : item.recommendation < 0 ? (
                                <TrendingDown className="h-3 w-3" />
                              ) : null}
                              {item.recommendation
                                ? item.recommendation.toFixed(2)
                                : "—"}
                            </span>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </div>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Sector Allocation</CardTitle>
              <CardDescription>
                Portfolio diversification across sectors
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="h-[400px] sm:h-[450px] md:h-[500px]">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={sectorData}
                      cx="50%"
                      cy="50%"
                      labelLine={false}
                      label={({ name, value }) => `${name}: ${value}%`}
                      outerRadius="60%"
                      fill="#8884d8"
                      dataKey="value"
                    >
                      {sectorData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                    <Legend wrapperStyle={{ fontSize: "12px" }} iconSize={10} />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* NAV Performance vs Benchmark */}
          <Card>
            <CardHeader>
              <CardTitle>NAV Performance vs Benchmark</CardTitle>
              <CardDescription>
                PRAGATI Fund vs Nifty 50 (Indexed to 100 at inception)
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
                    <YAxis tick={{ fontSize: 12 }} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: "rgba(255,255,255,0.95)",
                        border: "1px solid #e5e7eb",
                        borderRadius: "8px",
                      }}
                      formatter={(value: number) => value.toFixed(2)}
                    />
                    <Legend verticalAlign="top" height={36} iconType="line" />

                    {/* PRAGATI Fund – Green (Winner) */}
                    <Line
                      type="monotone"
                      dataKey="PRAGATI"
                      stroke="#10b981"
                      strokeWidth={4}
                      activeDot={{ r: 8, stroke: "#10b981", strokeWidth: 3 }}
                      name="PRAGATI Fund"
                    />

                    {/* Nifty 50 – Red (Benchmark) */}
                    <Line
                      type="monotone"
                      dataKey="Nifty50"
                      stroke="#ef4444"
                      strokeWidth={3}
                      activeDot={{ r: 7, stroke: "#ef4444", strokeWidth: 2 }}
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
                      dataKey="PRAGATI"
                      fill="#8b5cf6"
                      radius={[8, 8, 0, 0]}
                      name="PRAGATI Fund"
                    />
                    <Bar
                      dataKey="Nifty50"
                      fill="#93c5fd"
                      radius={[8, 8, 0, 0]}
                      name="Nifty 50"
                    />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  );
}
