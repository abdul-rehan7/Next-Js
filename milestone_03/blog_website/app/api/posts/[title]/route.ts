import { NextResponse } from "next/server";
import data from "@/app/data.json";

export async function GET(request: Request, context: any) {
  const { params } = context;
  const user = data.filter((x) => params.title == x.title);

  return NextResponse.json({ user });
}

