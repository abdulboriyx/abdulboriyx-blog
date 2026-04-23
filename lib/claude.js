import Anthropic from "@anthropic-ai/sdk";

const MODEL = "claude-sonnet-4-20250514";

function extractJson(text) {
  const trimmed = text.trim();
  if (trimmed.startsWith("{")) return JSON.parse(trimmed);

  const match = trimmed.match(/\{[\s\S]*\}/);
  if (!match) throw new Error("Claude javobida JSON topilmadi.");
  return JSON.parse(match[0]);
}

function buildSystemPrompt() {
  return [
    "Sen ikki nafar 12 yoshli o'zbek boshlang'ich o'quvchisi uchun o'qituvchisan.",
    "Barcha matnlar o'zbek tilida bo'lsin. Inglizcha so'z va gaplar kerak joyda inglizcha yozilsin.",
    "Javob faqat JSON bo'lsin. Markdown, izoh yoki kod bloki qo'shma.",
    "Quiz savollari aniq, yoshga mos, qisqa va tekshirish oson bo'lsin."
  ].join(" ");
}

function buildUserPrompt({ subject, day, topics = [], previousTopics = [] }) {
  if (subject === "english") {
    return JSON.stringify({
      vazifa: "Kunlik ingliz tili darsi yarat.",
      day,
      previousTopics,
      difficulty: "Day 1 mutlaq beginner. Har kuni sekin murakkablashsin.",
      schema: {
        topic: "string",
        vocabulary: [{ word: "string", uzbek: "string", example: "string" }],
        grammarTopics: [
          { title: "string", explanation: "string", examples: ["string"] },
          { title: "string", explanation: "string", examples: ["string"] }
        ],
        quiz: [
          { type: "fill-blank", prompt: "string", answer: "string" },
          { type: "matching", prompt: "string", pairs: [{ left: "string", right: "string" }] }
        ]
      },
      talablar: [
        "15 ta vocabulary word",
        "2 ta grammar topic",
        "Har bir grammar topic uchun qisqa tushuntirish va 3 ta oddiy misol ber",
        "10 ballik quiz: 4 ta fill-blank savol va 1 ta matching savol, matching ichida 6 ta pair bo'lsin",
        "fill-blank javoblari qisqa bo'lsin; matching right qiymatlari bir-biridan farqli bo'lsin",
        "oldingi mavzularni takrorlama"
      ]
    });
  }

  return JSON.stringify({
    vazifa: "Kunlik matematika quizini yarat.",
    day,
    topics,
    previousTopics,
    schema: {
      topic: "string",
      quiz: [
        {
          type: "multiple-choice",
          prompt: "string",
          options: ["string", "string", "string", "string"],
          answer: "string"
        }
      ]
    },
    talablar: [
      "Jami 10 savol: har bir mavzudan 5 tadan",
      "Boshlang'ich daraja, lekin kun raqamiga mos ravishda murakkablashsin",
      "Savollarda faqat bitta to'g'ri javob bo'lsin",
      "Javoblar string sifatida options ichidagi qiymat bilan aynan bir xil bo'lsin",
      "Faqat multiple-choice savollar qaytar"
    ]
  });
}

export async function generateClaudeContent({ subject, day, topics, previousTopics }) {
  if (!process.env.ANTHROPIC_API_KEY) {
    throw new Error("ANTHROPIC_API_KEY .env.local faylida topilmadi.");
  }

  const anthropic = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY
  });

  const message = await anthropic.messages.create({
    model: MODEL,
    max_tokens: subject === "english" ? 3200 : 1700,
    temperature: 0.4,
    system: buildSystemPrompt(),
    messages: [
      {
        role: "user",
        content: buildUserPrompt({ subject, day, topics, previousTopics })
      }
    ]
  });

  const text = message.content
    .filter((item) => item.type === "text")
    .map((item) => item.text)
    .join("\n");

  return extractJson(text);
}
