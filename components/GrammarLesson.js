export default function GrammarLesson({ lesson }) {
  if (!lesson) return null;

  return (
    <section className="lesson-frame rounded-md p-4">
      <h2 className="text-xl font-semibold">{lesson.title}</h2>
      <p className="mt-3 leading-7 text-ink/85">{lesson.explanation}</p>
      {lesson.examples?.length ? (
        <div className="mt-4 space-y-2">
          <h3 className="text-sm font-semibold uppercase tracking-wide text-ink/60">Misollar</h3>
          <ul className="space-y-2">
            {lesson.examples.map((example, index) => (
              <li key={`${example}-${index}`} className="border-l-2 border-sage pl-3 text-sm leading-6">
                {example}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
