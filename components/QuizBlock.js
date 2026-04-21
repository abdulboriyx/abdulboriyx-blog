"use client";

import { useEffect, useMemo, useState } from "react";
import CopyResultsButton from "./CopyResultsButton";
import { formatLocalDate } from "@/lib/date";

function normalize(value) {
  return String(value || "").trim().toLowerCase();
}

function expandQuestions(questions = []) {
  return questions.flatMap((question, questionIndex) => {
    if (question.type !== "matching") return [{ ...question, originalIndex: questionIndex }];

    return (question.pairs || []).map((pair, pairIndex) => ({
      type: "matching",
      prompt: `${pair.left} - mos javobni tanlang`,
      options: (question.pairs || []).map((item) => item.right),
      answer: pair.right,
      originalIndex: questionIndex,
      pairIndex
    }));
  });
}

export default function QuizBlock({ title, storageKey, questions = [], subjectLabel, day }) {
  const expanded = useMemo(() => expandQuestions(questions), [questions]);
  const [answers, setAnswers] = useState({});
  const [saved, setSaved] = useState(null);

  useEffect(() => {
    const raw = localStorage.getItem(storageKey);
    setSaved(raw ? JSON.parse(raw) : null);
  }, [storageKey]);

  const locked = Boolean(saved);
  const currentAnswers = locked ? saved.answers : answers;
  const score = saved?.score ?? 0;
  const total = expanded.length;

  function setAnswer(index, value) {
    if (locked) return;
    setAnswers((current) => ({ ...current, [index]: value }));
  }

  function submitQuiz(event) {
    event.preventDefault();

    let nextScore = 0;
    expanded.forEach((question, index) => {
      if (normalize(answers[index]) === normalize(question.answer)) nextScore += 1;
    });

    const result = {
      score: nextScore,
      total,
      answers,
      submittedAt: new Date().toISOString()
    };

    localStorage.setItem(storageKey, JSON.stringify(result));
    setSaved(result);
  }

  const resultText = `Day ${day} ${subjectLabel}: ${score}/${total} - ${formatLocalDate()}`;

  if (!expanded.length) return null;

  return (
    <section className="lesson-frame rounded-md p-4">
      <div className="flex flex-col gap-3 border-b border-line pb-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h2 className="text-xl font-semibold">{title}</h2>
          <p className="mt-1 text-sm text-ink/65">
            {locked ? "Javoblar saqlangan. Endi faqat ko'rib chiqish mumkin." : "Bir marta topshiriladi."}
          </p>
        </div>
        {locked ? (
          <div className="flex flex-wrap items-center gap-3">
            <p className="text-lg font-semibold text-sage">
              Natija: {score}/{total}
            </p>
            <CopyResultsButton text={resultText} />
          </div>
        ) : null}
      </div>

      <form onSubmit={submitQuiz} className="mt-4 space-y-5">
        {expanded.map((question, index) => {
          const isCorrect = locked && normalize(currentAnswers?.[index]) === normalize(question.answer);

          return (
            <div key={`${question.prompt}-${index}`} className="border-b border-line pb-4">
              <label className="block font-semibold">
                {index + 1}. {question.prompt}
              </label>

              {question.type === "multiple-choice" || question.type === "matching" ? (
                <select
                  disabled={locked}
                  value={currentAnswers?.[index] || ""}
                  onChange={(event) => setAnswer(index, event.target.value)}
                  className="mt-3 w-full rounded-md border border-line bg-white px-3 py-2 text-sm disabled:bg-paper"
                >
                  <option value="">Javobni tanlang</option>
                  {(question.options || []).map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              ) : (
                <input
                  disabled={locked}
                  value={currentAnswers?.[index] || ""}
                  onChange={(event) => setAnswer(index, event.target.value)}
                  className="mt-3 w-full rounded-md border border-line bg-white px-3 py-2 text-sm disabled:bg-paper"
                  placeholder="Javob"
                />
              )}

              {locked ? (
                <div className="mt-3 text-sm leading-6">
                  <p className={isCorrect ? "font-semibold text-sage" : "font-semibold text-brick"}>
                    {isCorrect ? "To'g'ri" : "Noto'g'ri"}
                  </p>
                  <p>To'g'ri javob: {question.answer}</p>
                </div>
              ) : null}
            </div>
          );
        })}

        {!locked ? (
          <button
            type="submit"
            className="rounded-md bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-ink/85"
          >
            Quizni topshirish
          </button>
        ) : null}
      </form>
    </section>
  );
}
