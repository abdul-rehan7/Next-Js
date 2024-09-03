import { NextResponse } from "next/server";
import data from "@/app/data.json";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const item = data.filter((x) => params.name == x.name);
  console.log("Filtered items:", item);
  return NextResponse.json({ item });
}

