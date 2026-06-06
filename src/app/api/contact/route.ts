import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    console.log("Contact form submission:", { name, email, phone, service, message });

    return NextResponse.json({ success: true, message: "Thank you! We'll get back to you shortly." });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
