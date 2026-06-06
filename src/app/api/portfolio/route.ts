import { NextResponse } from "next/server";
import { portfolioItems } from "@/lib/data";

export async function GET() {
  return NextResponse.json(portfolioItems);
}
