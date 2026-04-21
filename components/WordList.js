export default function WordList({ words = [] }) {
  if (!words.length) return null;

  return (
    <section className="lesson-frame rounded-md p-4">
      <h2 className="mb-4 text-xl font-semibold">Bugungi 15 ta so'z</h2>
      <div className="grid gap-3 md:grid-cols-2">
        {words.map((item, index) => (
          <div key={`${item.word}-${index}`} className="border-b border-line pb-3">
            <div className="flex items-baseline justify-between gap-3">
              <p className="text-lg font-semibold text-bluebook">{item.word}</p>
              <p className="text-sm text-ink/70">{item.uzbek}</p>
            </div>
            <p className="mt-1 text-sm leading-6 text-ink/80">{item.example}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
