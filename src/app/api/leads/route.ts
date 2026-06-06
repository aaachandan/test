import { NextResponse } from "next/server";

export async function GET() {
  const leads = [
    { id: 1, name: "Rahul Sharma", email: "rahul@example.com", phone: "+91-9876543210", service: "Web Development", date: "2025-12-10", status: "New" },
    { id: 2, name: "Priya Patel", email: "priya@example.com", phone: "+91-9876543211", service: "Digital Marketing", date: "2025-12-09", status: "Contacted" },
  ];
  return NextResponse.json(leads);
}
