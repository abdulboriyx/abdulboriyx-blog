"use client";

import { useEffect, useMemo, useState } from "react";
import { chessCurriculum, CHESS_PLAYLIST_URL } from "@/data/chess-curriculum";
import { mathCurriculum, START_DATE } from "@/data/math-curriculum";
import { getDayNumber } from "@/lib/date";
import { getPlaylistId } from "@/lib/youtube";
import GrammarLesson from "@/components/GrammarLesson";
import QuizBlock from "@/components/QuizBlock";
import VideoEmbed from "@/components/VideoEmbed";
import WordList from "@/components/WordList";

const tabs = [
  { id: "english", label: "Ingliz tili" },
  { id: "math", label: "Matematika" },
  { id: "chess", label: "Shaxmat" }
];

const fallbackEnglish = {
  topic: "Salomlashish va oddiy narsalar",
  vocabulary: [
    { word: "hello", uzbek: "salom", example: "Hello, Ali." },
    { word: "book", uzbek: "kitob", example: "This is a book." },
    { word: "pen", uzbek: "ruchka", example: "I have a pen." },
    { word: "desk", uzbek: "parta", example: "The desk is brown." },
    { word: "chair", uzbek: "stul", example: "This chair is small." },
    { word: "teacher", uzbek: "o'qituvchi", example: "My teacher is kind." },
    { word: "student", uzbek: "o'quvchi", example: "I am a student." },
    { word: "school", uzbek: "maktab", example: "We go to school." },
    { word: "bag", uzbek: "sumka", example: "My bag is black." },
    { word: "red", uzbek: "qizil", example: "It is red." },
    { word: "blue", uzbek: "ko'k", example: "The pen is blue." },
    { word: "one", uzbek: "bir", example: "I have one book." },
    { word: "two", uzbek: "ikki", example: "I see two pens." },
    { word: "good", uzbek: "yaxshi", example: "This is good." },
    { word: "yes", uzbek: "ha", example: "Yes, I am ready." }
  ],
  grammar: {
    title: "This is ...",
    explanation: "'This is ...' yaqin turgan bitta narsani tanishtirish uchun ishlatiladi.",
    examples: ["This is a book.", "This is a pen.", "This is my bag."]
  },
  quiz: [
    { type: "fill-blank", prompt: "This is a ____.", answer: "book" },
    { type: "fill-blank", prompt: "Hello so'zining ma'nosi nima?", answer: "salom" },
    {
      type: "matching",
      prompt: "So'zlarni moslang",
      pairs: [
        { left: "pen", right: "ruchka" },
        { left: "school", right: "maktab" },
        { left: "teacher", right: "o'qituvchi" },
        { left: "blue", right: "ko'k" },
        { left: "two", right: "ikki" },
        { left: "yes", right: "ha" },
        { left: "student", right: "o'quvchi" },
        { left: "chair", right: "stul" }
      ]
    }
  ]
};

const fallbackMathQuiz = (topics) => ({
  topic: topics.join(", "),
  quiz: [
    { type: "multiple-choice", prompt: "2 + 3 nechiga teng?", options: ["4", "5", "6", "7"], answer: "5" },
    { type: "multiple-choice", prompt: "5 dan keyin qaysi son keladi?", options: ["4", "5", "6", "7"], answer: "6" },
    { type: "multiple-choice", prompt: "3 ta olma va 1 ta olma jami nechta?", options: ["2", "3", "4", "5"], answer: "4" },
    { type: "multiple-choice", prompt: "10 ichida eng katta son qaysi?", options: ["7", "8", "9", "10"], answer: "10" },
    { type: "multiple-choice", prompt: "1, 2, 3, __. Bo'sh joyga qaysi son yoziladi?", options: ["4", "5", "6", "7"], answer: "4" },
    { type: "multiple-choice", prompt: "6 - 2 nechiga teng?", options: ["3", "4", "5", "6"], answer: "4" },
    { type: "multiple-choice", prompt: "Qaysi biri kichik?", options: ["2", "5", "7", "9"], answer: "2" },
    { type: "multiple-choice", prompt: "4 + 0 nechiga teng?", options: ["0", "3", "4", "5"], answer: "4" },
    { type: "multiple-choice", prompt: "8 dan oldin qaysi son keladi?", options: ["6", "7", "8", "9"], answer: "7" },
    { type: "multiple-choice", prompt: "2 va 2 ni qo'shsak nima bo'ladi?", options: ["3", "4", "5", "6"], answer: "4" }
  ]
});

function readJson(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

async function loadGeneratedContent({ subject, day, topics }) {
  const cacheKey = `content_${subject}_day_${day}`;
  const cached = readJson(cacheKey, null);
  if (cached) return cached;

  const previousTopics = readJson(`used_topics_${subject}`, []);
  const response = await fetch("/api/generate", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ subject, day, topics, previousTopics })
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.error || "Claude javob bermadi.");
  }

  const data = await response.json();
  localStorage.setItem(cacheKey, JSON.stringify(data));

  const nextTopic = data.topic || topics.join(", ");
  localStorage.setItem(
    `used_topics_${subject}`,
    JSON.stringify(Array.from(new Set([...previousTopics, nextTopic])).slice(-120))
  );

  return data;
}

export default function HomePage() {
  const [activeTab, setActiveTab] = useState("english");
  const [day, setDay] = useState(1);
  const [english, setEnglish] = useState(null);
  const [math, setMath] = useState(null);
  const [englishError, setEnglishError] = useState("");
  const [mathError, setMathError] = useState("");
  const [loadingEnglish, setLoadingEnglish] = useState(true);
  const [loadingMath, setLoadingMath] = useState(true);

  useEffect(() => {
    setDay(getDayNumber());
  }, []);

  const mathDay = useMemo(() => {
    const index = Math.min(day, mathCurriculum.length) - 1;
    return mathCurriculum[index] || mathCurriculum[0];
  }, [day]);

  const mathTopics = useMemo(() => mathDay.topics.map((topic) => topic.title), [mathDay]);

  useEffect(() => {
    let cancelled = false;

    async function loadEnglish() {
      setLoadingEnglish(true);
      setEnglishError("");
      try {
        const data = await loadGeneratedContent({ subject: "english", day, topics: [] });
        if (!cancelled) setEnglish(data);
      } catch (error) {
        if (!cancelled) {
          setEnglish(fallbackEnglish);
          setEnglishError(error.message);
        }
      } finally {
        if (!cancelled) setLoadingEnglish(false);
      }
    }

    if (day) loadEnglish();
    return () => {
      cancelled = true;
    };
  }, [day]);

  useEffect(() => {
    let cancelled = false;

    async function loadMath() {
      setLoadingMath(true);
      setMathError("");
      try {
        const data = await loadGeneratedContent({ subject: "math", day, topics: mathTopics });
        if (!cancelled) setMath(data);
      } catch (error) {
        if (!cancelled) {
          setMath(fallbackMathQuiz(mathTopics));
          setMathError(error.message);
        }
      } finally {
        if (!cancelled) setLoadingMath(false);
      }
    }

    if (day && mathTopics.length) loadMath();
    return () => {
      cancelled = true;
    };
  }, [day, mathTopics]);

  const playlistId = getPlaylistId(CHESS_PLAYLIST_URL);

  return (
    <main className="min-h-screen bg-paper">
      <header className="border-b border-line">
        <div className="mx-auto flex max-w-6xl flex-col gap-5 px-4 py-6 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-ink/55">
              Boshlanish sanasi: {START_DATE}
            </p>
            <h1 className="mt-2 text-3xl font-bold md:text-5xl">Tartibli o'qish</h1>
            <p className="mt-3 max-w-2xl leading-7 text-ink/75">
              Har kuni ingliz tili va matematikadan belgilangan darslar ochiladi. Shaxmat darslari doim ochiq.
            </p>
          </div>
          <div className="rounded-md border border-line bg-white px-5 py-4">
            <p className="text-sm text-ink/60">Bugungi kun</p>
            <p className="text-4xl font-bold text-sage">{day}</p>
          </div>
        </div>
      </header>

      <div className="mx-auto max-w-6xl px-4 py-5">
        <nav className="grid grid-cols-3 gap-2 rounded-md border border-line bg-white p-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              type="button"
              onClick={() => setActiveTab(tab.id)}
              className={`rounded px-3 py-2 text-sm font-semibold ${
                activeTab === tab.id ? "bg-ink text-white" : "text-ink hover:bg-paper"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </nav>

        {activeTab === "english" ? (
          <section className="mt-6 space-y-5">
            <div className="lesson-frame rounded-md p-4">
              <h2 className="text-2xl font-semibold">Ingliz tili - {day}-kun</h2>
              <p className="mt-2 leading-7 text-ink/75">
                Bugun 15 ta so'z, bitta grammatika darsi va bitta quiz bajariladi.
              </p>
              {loadingEnglish ? <p className="mt-3 text-sm text-ink/60">Claude kontent tayyorlamoqda...</p> : null}
              {englishError ? (
                <p className="mt-3 text-sm text-brick">
                  Claude chaqiruvi ishlamadi: {englishError}. Hozir namunaviy dars ko'rsatildi.
                </p>
              ) : null}
            </div>
            <WordList words={english?.vocabulary} />
            <GrammarLesson lesson={english?.grammar} />
            <QuizBlock
              title="Ingliz tili quiz"
              storageKey={`quiz_english_day_${day}`}
              questions={english?.quiz || []}
              subjectLabel="English"
              day={day}
            />
          </section>
        ) : null}

        {activeTab === "math" ? (
          <section className="mt-6 space-y-5">
            <div className="lesson-frame rounded-md p-4">
              <h2 className="text-2xl font-semibold">Matematika - {day}-kun</h2>
              <p className="mt-2 leading-7 text-ink/75">
                Bugun 2 ta mavzu va 10 savollik quiz. 60 kundan keyin oxirgi takror darsi ko'rsatiladi.
              </p>
              {loadingMath ? <p className="mt-3 text-sm text-ink/60">Claude quiz tayyorlamoqda...</p> : null}
              {mathError ? (
                <p className="mt-3 text-sm text-brick">
                  Claude chaqiruvi ishlamadi: {mathError}. Hozir namunaviy quiz ko'rsatildi.
                </p>
              ) : null}
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              {mathDay.topics.map((topic) => (
                <VideoEmbed key={topic.title} {...topic} />
              ))}
            </div>
            <QuizBlock
              title="Matematika quiz"
              storageKey={`quiz_math_day_${day}`}
              questions={math?.quiz || []}
              subjectLabel="Math"
              day={day}
            />
          </section>
        ) : null}

        {activeTab === "chess" ? (
          <section className="mt-6 space-y-5">
            <div className="lesson-frame rounded-md p-4">
              <h2 className="text-2xl font-semibold">Shaxmat</h2>
              <p className="mt-2 leading-7 text-ink/75">
                Shaxmat bo'limi to'liq ochiq. Kunlik cheklov va quiz yo'q.
              </p>
              {!CHESS_PLAYLIST_URL ? (
                <p className="mt-3 text-sm text-brick">
                  UzChess playlist havolasi hali kiritilmagan. Uni data/chess-curriculum.js faylidagi
                  CHESS_PLAYLIST_URL qiymatiga qo'ying.
                </p>
              ) : null}
            </div>

            {playlistId ? (
              <div className="lesson-frame aspect-video overflow-hidden rounded-md bg-black">
                <iframe
                  className="h-full w-full"
                  src={`https://www.youtube.com/embed/videoseries?list=${playlistId}`}
                  title="UzChess playlist"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                />
              </div>
            ) : null}

            <div className="grid gap-4 md:grid-cols-2">
              {chessCurriculum.map((video, index) => (
                <div key={video.title} className="space-y-2">
                  <p className="text-sm font-semibold text-ink/60">
                    {index + 1}. {video.level}
                  </p>
                  <VideoEmbed {...video} />
                </div>
              ))}
            </div>
          </section>
        ) : null}
      </div>
    </main>
  );
}
