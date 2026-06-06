import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, position, experience, message } = body;

    if (!name || !email || !phone || !position) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("Career application:", { name, email, phone, position, experience, message });

    return NextResponse.json({ success: true, message: "Application submitted successfully!" });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
