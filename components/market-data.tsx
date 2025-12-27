"use client";

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
import { TrendingUp, TrendingDown, Activity } from "lucide-react";

// Dummy data for market indices
const marketIndices = [
  {
    name: "Nifty 50",
    price: "23,645.50",
    change: "+125.30",
    changePercent: "0.53",
    isPositive: true,
  },
  {
    name: "Sensex",
    price: "78,256.20",
    change: "-89.45",
    changePercent: "-0.11",
    isPositive: false,
  },
  {
    name: "Gold/10gm",
    price: "₹72,450",
    change: "+320",
    changePercent: "0.44",
    isPositive: true,
  },
  {
    name: "Silver/Kg",
    price: "₹85,200",
    change: "-150",
    changePercent: "-0.18",
    isPositive: false,
  },
];

// Dummy data for market indicators
const marketIndicators = [
  {
    label: "FII Outflow/Inflow",
    value: "₹2,450 Cr Outflow",
    trend: "negative",
    icon: TrendingDown,
  },
  {
    label: "DII Inflow/Outflow",
    value: "Net Outflow",
    trend: "negative",
    icon: TrendingDown,
  },
  {
    label: "Market Mood Index",
    value: "Cautiously Optimistic",
    trend: "neutral",
    icon: Activity,
  },
];

export function MarketData() {
  return (
    <div className="w-full space-y-6">
      <Card>
        <CardHeader>
          <CardTitle>Market Overview</CardTitle>
          <CardDescription>
            Real-time market indices and key indicators
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 lg:grid-cols-2">
            {/* Market Indices Section */}
            <div className="space-y-3">
              <div className="rounded-lg border">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Index</TableHead>
                      <TableHead className="text-right">Price</TableHead>
                      <TableHead className="text-right">Change</TableHead>
                      <TableHead className="text-right">Change %</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {marketIndices.map((index) => (
                      <TableRow key={index.name}>
                        <TableCell className="font-medium">
                          {index.name}
                        </TableCell>
                        <TableCell className="text-right font-semibold">
                          {index.price}
                        </TableCell>
                        <TableCell
                          className={`text-right font-medium ${
                            index.isPositive ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          {index.change}
                        </TableCell>
                        <TableCell
                          className={`text-right font-medium ${
                            index.isPositive ? "text-green-600" : "text-red-600"
                          }`}
                        >
                          <div className="flex items-center justify-end gap-1">
                            {index.isPositive ? (
                              <TrendingUp className="h-4 w-4" />
                            ) : (
                              <TrendingDown className="h-4 w-4" />
                            )}
                            {index.changePercent}%
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </div>
            </div>

            {/* Market Indicators Section */}
            <div className="space-y-3">
              <div className="space-y-3">
                {marketIndicators.map((indicator) => {
                  const Icon = indicator.icon;
                  return (
                    <Card
                      key={indicator.label}
                      className={`${
                        indicator.trend === "negative"
                          ? "border-red-200 bg-red-50/50 dark:border-red-900/30 dark:bg-red-950/20"
                          : indicator.trend === "positive"
                          ? "border-green-200 bg-green-50/50 dark:border-green-900/30 dark:bg-green-950/20"
                          : "border-blue-200 bg-blue-50/50 dark:border-blue-900/30 dark:bg-blue-950/20"
                      }`}
                    >
                      <CardContent className="flex items-center justify-between p-4">
                        <div className="flex-1">
                          <p className="text-sm font-medium text-muted-foreground">
                            {indicator.label}
                          </p>
                          <p className="text-lg font-bold mt-1">
                            {indicator.value}
                          </p>
                        </div>
                        <Icon
                          className={`h-8 w-8 ${
                            indicator.trend === "negative"
                              ? "text-red-600"
                              : indicator.trend === "positive"
                              ? "text-green-600"
                              : "text-blue-600"
                          }`}
                        />
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
