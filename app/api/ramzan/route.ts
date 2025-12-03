import { NextResponse } from "next/server";
import { getRamzanContent } from "@/lib/ramzan.service";

export async function GET() {
  try {
    const ramzan = await getRamzanContent();

    return NextResponse.json(
      {
        ok: true,
        message: "Fetched Ramzan row.",
        ramzan,
      },
      { status: 200 }
    );
  } catch (error: any) {
    console.error("[ramzan] Error fetching Ramzan content:", error);

    return NextResponse.json(
      {
        ok: false,
        message: "Failed to fetch Ramzan content.",
        error: error?.message ?? String(error),
      },
      { status: 500 }
    );
  }
}


