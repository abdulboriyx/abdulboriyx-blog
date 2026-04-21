export function getYouTubeId(url = "") {
  if (!url || typeof url !== "string") return "";

  try {
    const parsed = new URL(url);
    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.replace("/", "");
    }

    if (parsed.hostname.includes("youtube.com")) {
      if (parsed.pathname.startsWith("/embed/")) {
        return parsed.pathname.split("/embed/")[1]?.split("/")[0] || "";
      }
      return parsed.searchParams.get("v") || "";
    }
  } catch {
    return "";
  }

  return "";
}

export function getPlaylistId(url = "") {
  if (!url || typeof url !== "string") return "";

  try {
    const parsed = new URL(url);
    return parsed.searchParams.get("list") || "";
  } catch {
    return "";
  }
}
