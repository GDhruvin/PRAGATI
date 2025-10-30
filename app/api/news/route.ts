import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://api.tradient.org/v1/api/market/news");
    const data = await res.json();

    const latestNews = data["data"]["latest_news"] || [];

    return NextResponse.json({
      success: true,
      count: latestNews.length,
      news: latestNews, // Only the array is passed here
    });
  } catch (error) {
    console.error("Error fetching news:", error);
    return NextResponse.json(
      { success: false, message: "Failed to fetch news" },
      { status: 500 }
    );
  }
}
