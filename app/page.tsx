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
} from "recharts";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function Home() {
  const [portfolioData, setPortfolioData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

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
        </div>
      </main>

      <Footer />
    </div>
  );
}
