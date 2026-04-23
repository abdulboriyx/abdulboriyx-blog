import { getYouTubeId } from "@/lib/youtube";

export default function VideoEmbed({ title, url, source }) {
  const videoId = source === "real" ? getYouTubeId(url) : "";
  const isPlaceholder = source === "placeholder";
  const isKhan = source === "khan";

  return (
    <div className="lesson-frame overflow-hidden rounded-md">
      <div className="border-b border-line px-4 py-3">
        <h3 className="text-base font-semibold text-ink">{title}</h3>
      </div>
      {videoId ? (
        <div className="aspect-video w-full bg-black">
          <iframe
            className="h-full w-full"
            src={`https://www.youtube.com/embed/${videoId}`}
            title={title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
      ) : (
        <div className="space-y-3 px-4 py-5 text-sm leading-6 text-ink">
          <p>
            {isKhan
              ? "Bu mavzu Khan Academy Uzbek darsi orqali o'qiladi."
              : isPlaceholder
                ? "Vaqtincha qidiruv havolasi. Aniq YouTube video URL qo'yilganda shu joyda iframe ochiladi."
                : "Video havolasi hali kiritilmagan."}
          </p>
          {url ? (
            <a className="font-semibold text-bluebook underline" href={url} target="_blank" rel="noreferrer">
              {isKhan ? "Khan Academy darsini ochish" : isPlaceholder ? "Mos darsni YouTube'da qidirish" : "Videoni ochish"}
            </a>
          ) : null}
        </div>
      )}
    </div>
  );
}
