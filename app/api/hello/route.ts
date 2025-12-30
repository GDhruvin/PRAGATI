import { NextResponse } from "next/server";

export async function GET() {
  return NextResponse.json({
    message: "Hello from P₹AGATI Fund Dashboard API 👋",
    status: "success",
  });
}
