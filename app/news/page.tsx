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
import { Button } from "@/components/ui/button";
import { Newspaper, TrendingUp, AlertCircle, RefreshCw } from "lucide-react";
import { useEffect, useState } from "react";

interface NewsItem {
  news_object: {
    title: string;
    text: string;
    overall_sentiment: "positive" | "negative" | "neutral";
  };
  publish_date: number;
  category: string;
}

interface ApiResponse {
  success: boolean;
  count: number;
  news: NewsItem[];
}

export default function NewsPage() {
  const [news, setNews] = useState<NewsItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  const fetchNews = async () => {
    try {
      setIsRefreshing(true);
      setLoading(true);
      setError(null);

      const res = await fetch("/api/news", { cache: "no-store" });
      const data: ApiResponse = await res.json();

      if (data.success) {
        setNews(data.news);
      } else {
        setError("Failed to load news");
      }
    } catch (err) {
      setError("Network error. Please try again.");
      console.error("Fetch error:", err);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const formatDate = (timestamp: number) => {
    const date = new Date(timestamp);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  const getSentimentColor = (sentiment: string) => {
    switch (sentiment) {
      case "positive":
        return "text-green-600";
      case "negative":
        return "text-red-600";
      default:
        return "text-yellow-600";
    }
  };

  if (loading && !isRefreshing) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16 flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            <p className="mt-4 text-muted-foreground">Loading news...</p>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1 pt-16 flex items-center justify-center px-4">
          <div className="text-center max-w-md">
            <AlertCircle className="h-12 w-12 text-destructive mx-auto mb-4" />
            <p className="text-lg font-medium">{error}</p>
            <Button className="mt-4" onClick={fetchNews}>
              Retry
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />

      <main className="flex-1 pt-16">
        <div className="border-b bg-muted/50 py-12">
          <div className="container px-4">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <Newspaper className="h-8 w-8 text-primary" />
                <h1 className="text-4xl font-bold">Market News & Insights</h1>
              </div>

              <Button
                variant="outline"
                size="sm"
                onClick={fetchNews}
                disabled={isRefreshing}
                className="flex items-center gap-2"
              >
                <RefreshCw
                  className={`h-4 w-4 ${isRefreshing ? "animate-spin" : ""}`}
                />
                Refresh News
              </Button>
            </div>
            <p className="text-muted-foreground text-lg">
              Stay updated with the latest market developments and analysis
            </p>
          </div>
        </div>

        <div className="container space-y-6 py-8 px-4">
          {news.length === 0 ? (
            <Card>
              <CardContent className="text-center py-10">
                <p className="text-muted-foreground">
                  No news available at the moment.
                </p>
              </CardContent>
            </Card>
          ) : (
            news.map((item, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-start justify-between gap-4">
                    <div className="flex-1">
                      <CardTitle className="text-xl mb-2">
                        {item.news_object.title}
                      </CardTitle>
                      <div className="flex items-center gap-3 text-sm">
                        <CardDescription>
                          {formatDate(item.publish_date)}
                        </CardDescription>
                        <span
                          className={`font-medium ${getSentimentColor(
                            item.news_object.overall_sentiment
                          )}`}
                        >
                          • {item.news_object.overall_sentiment.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <TrendingUp className="h-5 w-5 text-primary flex-shrink-0" />
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4 line-clamp-3">
                    {item.news_object.text}
                  </p>
                  <Button variant="outline" size="sm">
                    Read More
                  </Button>
                </CardContent>
              </Card>
            ))
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}
