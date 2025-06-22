import { auth } from "@/auth";
import { NextResponse } from "next/server";

export const GET = auth(function GET() {
  console.log("Hello world from app/api/admin/route.ts");
  return NextResponse.json({ message: "Hello world" });
});
