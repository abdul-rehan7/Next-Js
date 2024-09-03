import { NextResponse } from "next/server";
import data from "@/app/data.json";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const item = data.filter((x) => params.name == x.category);

  return NextResponse.json({ item });
}

