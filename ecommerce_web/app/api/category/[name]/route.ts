import { NextResponse } from "next/server";
import data from "@/app/data.json";

export async function GET(request: Request, context: any) {
  const { params } = context;
  console.log("Params received:", params);
  const item = data.filter((x) => params.name === x.category);
  console.log("Filtered items:", item);
  
  return NextResponse.json({ item });
}
