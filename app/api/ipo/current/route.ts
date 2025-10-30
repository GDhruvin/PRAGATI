import { NextResponse } from "next/server";

export async function GET() {
  try {
    const res = await fetch("https://www.nseindia.com/api/ipo-current-issue", {
      headers: {
        "User-Agent": "Mozilla/5.0",
        "Accept-Language": "en-US,en;q=0.9",
        Accept: "application/json",
      },
      cache: "no-store",
    });

    if (!res.ok) {
      return NextResponse.json(
        { success: false, message: "Failed to fetch current IPOs" },
        { status: res.status }
      );
    }

    const data = await res.json();

    return NextResponse.json({ success: true, ipos: data });
  } catch (err) {
    return NextResponse.json({
      success: false,
      message: (err as Error).message,
    });
  }
}
