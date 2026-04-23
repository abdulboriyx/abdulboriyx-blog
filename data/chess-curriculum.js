const ytSearch = (query) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`UzChess ${query}`)}`;

export const CHESS_PLAYLIST_URL =
  "https://www.youtube.com/watch?v=paooGUj7xAo&list=PLux_HYHKPZYo5YQ4XvsHZKpnKGE0LLa0z";

export const chessCurriculum = [
  { title: "Shaxmat taxtasi va kataklar", level: "Boshlang'ich", url: ytSearch("shaxmat taxtasi kataklar"), source: "placeholder" },
  { title: "Donalar nomi va qiymati", level: "Boshlang'ich", url: ytSearch("donalar nomi qiymati"), source: "placeholder" },
  { title: "Piyoda yurishi", level: "Boshlang'ich", url: ytSearch("piyoda yurishi"), source: "placeholder" },
  { title: "Ot yurishi", level: "Boshlang'ich", url: ytSearch("ot yurishi"), source: "placeholder" },
  { title: "Fil yurishi", level: "Boshlang'ich", url: ytSearch("fil yurishi"), source: "placeholder" },
  { title: "Rux yurishi", level: "Boshlang'ich", url: ytSearch("rux yurishi"), source: "placeholder" },
  { title: "Farzin yurishi", level: "Boshlang'ich", url: ytSearch("farzin yurishi"), source: "placeholder" },
  { title: "Shoh yurishi", level: "Boshlang'ich", url: ytSearch("shoh yurishi"), source: "placeholder" },
  { title: "Boshlang'ich joylashuv", level: "Boshlang'ich", url: ytSearch("boshlang'ich joylashuv"), source: "placeholder" },
  { title: "Rokirovka", level: "Qoidalar", url: ytSearch("rokirovka"), source: "placeholder" },
  { title: "Shah va mot", level: "Qoidalar", url: ytSearch("shah va mot"), source: "placeholder" },
  { title: "Pat va durang", level: "Qoidalar", url: ytSearch("pat durang"), source: "placeholder" },
  { title: "Debyut tamoyillari", level: "Debyut", url: ytSearch("debyut tamoyillari"), source: "placeholder" },
  { title: "Markazni nazorat qilish", level: "Debyut", url: ytSearch("markazni nazorat qilish"), source: "placeholder" },
  { title: "Figuralarni rivojlantirish", level: "Debyut", url: ytSearch("figuralarni rivojlantirish"), source: "placeholder" },
  { title: "Ikki yurishli taktikalar", level: "Taktika", url: ytSearch("ikki yurishli taktikalar"), source: "placeholder" },
  { title: "Vilka", level: "Taktika", url: ytSearch("vilka taktika"), source: "placeholder" },
  { title: "Bog'lash", level: "Taktika", url: ytSearch("bog'lash taktika"), source: "placeholder" },
  { title: "Ochilgan hujum", level: "Taktika", url: ytSearch("ochilgan hujum"), source: "placeholder" },
  { title: "Endshpil asoslari", level: "Strategiya", url: ytSearch("endshpil asoslari"), source: "placeholder" },
  { title: "Shoh va rux bilan mot", level: "Strategiya", url: ytSearch("shoh rux bilan mot"), source: "placeholder" },
  { title: "Piyoda endshpili", level: "Strategiya", url: ytSearch("piyoda endshpili"), source: "placeholder" }
];
