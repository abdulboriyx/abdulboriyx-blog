import { NextResponse } from "next/server";
import { generateClaudeContent } from "@/lib/claude";

export async function POST(request) {
  try {
    const body = await request.json();
    const subject = body.subject === "math" ? "math" : "english";
    const day = Number(body.day || 1);

    const content = await generateClaudeContent({
      subject,
      day,
      topics: Array.isArray(body.topics) ? body.topics : [],
      previousTopics: Array.isArray(body.previousTopics) ? body.previousTopics : []
    });

    return NextResponse.json(content);
  } catch (error) {
    return NextResponse.json(
      { error: error.message || "Kontent yaratishda xatolik yuz berdi." },
      { status: 500 }
    );
  }
}
