export const START_DATE = "2026-04-19";

const search = (query) =>
  `https://www.youtube.com/results?search_query=${encodeURIComponent(`Khan Academy Uzbek ${query}`)}`;

export const mathCurriculum = [
  {
    day: 1,
    topics: [
      { title: "Kategoriya bo'yicha sanash", url: search("kategoriya bo'yicha sanash"), source: "placeholder" },
      { title: "5 tadan o'tib sanash", url: search("5 tadan o'tib sanash"), source: "placeholder" }
    ]
  },
  {
    day: 2,
    topics: [
      { title: "1 dan 20 gacha sonlar", url: search("1 dan 20 gacha sonlar"), source: "placeholder" },
      { title: "Sonlarni tartib bilan aytish", url: search("sonlarni tartib bilan aytish"), source: "placeholder" }
    ]
  },
  {
    day: 3,
    topics: [
      { title: "Narsalarni sanash", url: search("narsalarni sanash"), source: "placeholder" },
      { title: "Kichik sonlarni qiyoslash", url: search("kichik sonlarni qiyoslash"), source: "placeholder" }
    ]
  },
  {
    day: 4,
    topics: [
      { title: "Son o'qida sonlarni taqqoslash", url: search("son o'qida sonlarni taqqoslash"), source: "placeholder" },
      { title: "10 gacha sonlarni taqqoslash", url: search("10 gacha sonlarni taqqoslash"), source: "placeholder" }
    ]
  },
  {
    day: 5,
    topics: [
      { title: "Qo'shish bilan tanishuv", url: search("qo'shish bilan tanishuv"), source: "placeholder" },
      { title: "Rasmlar yordamida qo'shish", url: search("rasmlar yordamida qo'shish"), source: "placeholder" }
    ]
  },
  {
    day: 6,
    topics: [
      { title: "0 bilan qo'shish", url: search("0 bilan qo'shish"), source: "placeholder" },
      { title: "1 va 2 ni qo'shish", url: search("1 va 2 ni qo'shish"), source: "placeholder" }
    ]
  },
  {
    day: 7,
    topics: [
      { title: "Ayirish bilan tanishuv", url: search("ayirish bilan tanishuv"), source: "placeholder" },
      { title: "Rasmlar yordamida ayirish", url: search("rasmlar yordamida ayirish"), source: "placeholder" }
    ]
  },
  {
    day: 8,
    topics: [
      { title: "10 ichida qo'shish", url: search("10 ichida qo'shish"), source: "placeholder" },
      { title: "10 ichida ayirish", url: search("10 ichida ayirish"), source: "placeholder" }
    ]
  },
  {
    day: 9,
    topics: [
      { title: "Qo'shish va ayirishni bog'lash", url: search("qo'shish ayirish bog'lash"), source: "placeholder" },
      { title: "Yetishmayotgan sonni topish", url: search("yetishmayotgan sonni topish"), source: "placeholder" }
    ]
  },
  {
    day: 10,
    topics: [
      { title: "20 ichida qo'shish", url: search("20 ichida qo'shish"), source: "placeholder" },
      { title: "20 ichida ayirish", url: search("20 ichida ayirish"), source: "placeholder" }
    ]
  },
  {
    day: 11,
    topics: [
      { title: "O'nlik va birlik", url: search("o'nlik birlik"), source: "placeholder" },
      { title: "Ikki xonali sonlarni o'qish", url: search("ikki xonali sonlarni o'qish"), source: "placeholder" }
    ]
  },
  {
    day: 12,
    topics: [
      { title: "Sonlarni xona birliklariga ajratish", url: search("xona birliklariga ajratish"), source: "placeholder" },
      { title: "Ikki xonali sonlarni taqqoslash", url: search("ikki xonali sonlarni taqqoslash"), source: "placeholder" }
    ]
  },
  {
    day: 13,
    topics: [
      { title: "10 tadan o'tib sanash", url: search("10 tadan o'tib sanash"), source: "placeholder" },
      { title: "100 gacha sanash", url: search("100 gacha sanash"), source: "placeholder" }
    ]
  },
  {
    day: 14,
    topics: [
      { title: "100 ichida qo'shish", url: search("100 ichida qo'shish"), source: "placeholder" },
      { title: "100 ichida ayirish", url: search("100 ichida ayirish"), source: "placeholder" }
    ]
  },
  {
    day: 15,
    topics: [
      { title: "O'nlikdan o'tib qo'shish", url: search("o'nlikdan o'tib qo'shish"), source: "placeholder" },
      { title: "O'nlikdan o'tib ayirish", url: search("o'nlikdan o'tib ayirish"), source: "placeholder" }
    ]
  },
  {
    day: 16,
    topics: [
      { title: "Ikki xonali sonlarni qo'shish", url: search("ikki xonali sonlarni qo'shish"), source: "placeholder" },
      { title: "Ikki xonali sonlarni ayirish", url: search("ikki xonali sonlarni ayirish"), source: "placeholder" }
    ]
  },
  {
    day: 17,
    topics: [
      { title: "Ustun shaklida qo'shish", url: search("ustun shaklida qo'shish"), source: "placeholder" },
      { title: "Ustun shaklida ayirish", url: search("ustun shaklida ayirish"), source: "placeholder" }
    ]
  },
  {
    day: 18,
    topics: [
      { title: "Qo'shishga oid matnli masalalar", url: search("qo'shishga oid matnli masalalar"), source: "placeholder" },
      { title: "Ayirishga oid matnli masalalar", url: search("ayirishga oid matnli masalalar"), source: "placeholder" }
    ]
  },
  {
    day: 19,
    topics: [
      { title: "1000 gacha sonlar", url: search("1000 gacha sonlar"), source: "placeholder" },
      { title: "Yuzlik, o'nlik va birlik", url: search("yuzlik o'nlik birlik"), source: "placeholder" }
    ]
  },
  {
    day: 20,
    topics: [
      { title: "1000 ichida qo'shish", url: search("1000 ichida qo'shish"), source: "placeholder" },
      { title: "1000 ichida ayirish", url: search("1000 ichida ayirish"), source: "placeholder" }
    ]
  },
  {
    day: 21,
    topics: [
      { title: "Ko'paytirish bilan tanishuv", url: search("ko'paytirish bilan tanishuv"), source: "placeholder" },
      { title: "Teng guruhlar", url: search("teng guruhlar ko'paytirish"), source: "placeholder" }
    ]
  },
  {
    day: 22,
    topics: [
      { title: "2 ga ko'paytirish", url: search("2 ga ko'paytirish"), source: "placeholder" },
      { title: "5 ga ko'paytirish", url: search("5 ga ko'paytirish"), source: "placeholder" }
    ]
  },
  {
    day: 23,
    topics: [
      { title: "10 ga ko'paytirish", url: search("10 ga ko'paytirish"), source: "placeholder" },
      { title: "3 ga ko'paytirish", url: search("3 ga ko'paytirish"), source: "placeholder" }
    ]
  },
  {
    day: 24,
    topics: [
      { title: "4 ga ko'paytirish", url: search("4 ga ko'paytirish"), source: "placeholder" },
      { title: "6 ga ko'paytirish", url: search("6 ga ko'paytirish"), source: "placeholder" }
    ]
  },
  {
    day: 25,
    topics: [
      { title: "7 ga ko'paytirish", url: search("7 ga ko'paytirish"), source: "placeholder" },
      { title: "8 va 9 ga ko'paytirish", url: search("8 9 ga ko'paytirish"), source: "placeholder" }
    ]
  },
  {
    day: 26,
    topics: [
      { title: "Ko'paytirish jadvali", url: search("ko'paytirish jadvali"), source: "placeholder" },
      { title: "Ko'paytirish xossalari", url: search("ko'paytirish xossalari"), source: "placeholder" }
    ]
  },
  {
    day: 27,
    topics: [
      { title: "Bo'lish bilan tanishuv", url: search("bo'lish bilan tanishuv"), source: "placeholder" },
      { title: "Teng bo'lib taqsimlash", url: search("teng bo'lib taqsimlash"), source: "placeholder" }
    ]
  },
  {
    day: 28,
    topics: [
      { title: "Ko'paytirish va bo'lish aloqasi", url: search("ko'paytirish bo'lish aloqasi"), source: "placeholder" },
      { title: "Bo'lish jadvali", url: search("bo'lish jadvali"), source: "placeholder" }
    ]
  },
  {
    day: 29,
    topics: [
      { title: "Qoldiqsiz bo'lish", url: search("qoldiqsiz bo'lish"), source: "placeholder" },
      { title: "Qoldiqli bo'lish", url: search("qoldiqli bo'lish"), source: "placeholder" }
    ]
  },
  {
    day: 30,
    topics: [
      { title: "Ko'paytirishga oid masalalar", url: search("ko'paytirishga oid masalalar"), source: "placeholder" },
      { title: "Bo'lishga oid masalalar", url: search("bo'lishga oid masalalar"), source: "placeholder" }
    ]
  },
  {
    day: 31,
    topics: [
      { title: "Amallar tartibi", url: search("amallar tartibi"), source: "placeholder" },
      { title: "Qavslar bilan ishlash", url: search("qavslar amallar tartibi"), source: "placeholder" }
    ]
  },
  {
    day: 32,
    topics: [
      { title: "Sonli ifodalar", url: search("sonli ifodalar"), source: "placeholder" },
      { title: "Noma'lum sonli tenglamalar", url: search("noma'lum sonli tenglamalar"), source: "placeholder" }
    ]
  },
  {
    day: 33,
    topics: [
      { title: "Tenglamalarni yechish: qo'shish", url: search("tenglamalarni yechish qo'shish"), source: "placeholder" },
      { title: "Tenglamalarni yechish: ayirish", url: search("tenglamalarni yechish ayirish"), source: "placeholder" }
    ]
  },
  {
    day: 34,
    topics: [
      { title: "Tenglamalarni yechish: ko'paytirish", url: search("tenglamalarni yechish ko'paytirish"), source: "placeholder" },
      { title: "Tenglamalarni yechish: bo'lish", url: search("tenglamalarni yechish bo'lish"), source: "placeholder" }
    ]
  },
  {
    day: 35,
    topics: [
      { title: "Kasrlar bilan tanishuv", url: search("kasrlar bilan tanishuv"), source: "placeholder" },
      { title: "Butunning teng qismlari", url: search("butunning teng qismlari kasr"), source: "placeholder" }
    ]
  },
  {
    day: 36,
    topics: [
      { title: "Kasrlarni o'qish", url: search("kasrlarni o'qish"), source: "placeholder" },
      { title: "Kasrlarni son o'qida ko'rsatish", url: search("kasrlarni son o'qida"), source: "placeholder" }
    ]
  },
  {
    day: 37,
    topics: [
      { title: "Teng kasrlar", url: search("teng kasrlar"), source: "placeholder" },
      { title: "Kasrlarni taqqoslash", url: search("kasrlarni taqqoslash"), source: "placeholder" }
    ]
  },
  {
    day: 38,
    topics: [
      { title: "Bir xil maxrajli kasrlarni qo'shish", url: search("bir xil maxrajli kasrlarni qo'shish"), source: "placeholder" },
      { title: "Bir xil maxrajli kasrlarni ayirish", url: search("bir xil maxrajli kasrlarni ayirish"), source: "placeholder" }
    ]
  },
  {
    day: 39,
    topics: [
      { title: "Aralash sonlar", url: search("aralash sonlar"), source: "placeholder" },
      { title: "Noto'g'ri kasrlar", url: search("noto'g'ri kasrlar"), source: "placeholder" }
    ]
  },
  {
    day: 40,
    topics: [
      { title: "O'nli kasrlar bilan tanishuv", url: search("o'nli kasrlar bilan tanishuv"), source: "placeholder" },
      { title: "O'ndan birlar va yuzdan birlar", url: search("o'ndan birlar yuzdan birlar"), source: "placeholder" }
    ]
  },
  {
    day: 41,
    topics: [
      { title: "O'nli kasrlarni taqqoslash", url: search("o'nli kasrlarni taqqoslash"), source: "placeholder" },
      { title: "O'nli kasrlarni yaxlitlash", url: search("o'nli kasrlarni yaxlitlash"), source: "placeholder" }
    ]
  },
  {
    day: 42,
    topics: [
      { title: "Uzunlik o'lchovlari", url: search("uzunlik o'lchovlari"), source: "placeholder" },
      { title: "Uzunlikni o'lchash", url: search("uzunlikni o'lchash"), source: "placeholder" }
    ]
  },
  {
    day: 43,
    topics: [
      { title: "Massa o'lchovlari", url: search("massa o'lchovlari"), source: "placeholder" },
      { title: "Hajm o'lchovlari", url: search("hajm o'lchovlari"), source: "placeholder" }
    ]
  },
  {
    day: 44,
    topics: [
      { title: "Vaqtni aytish", url: search("vaqtni aytish"), source: "placeholder" },
      { title: "Soat va daqiqa", url: search("soat va daqiqa"), source: "placeholder" }
    ]
  },
  {
    day: 45,
    topics: [
      { title: "Pul sanash", url: search("pul sanash"), source: "placeholder" },
      { title: "Pulga oid masalalar", url: search("pulga oid masalalar"), source: "placeholder" }
    ]
  },
  {
    day: 46,
    topics: [
      { title: "Jadvaldan ma'lumot o'qish", url: search("jadvaldan ma'lumot o'qish"), source: "placeholder" },
      { title: "Rasmli grafiklar", url: search("rasmli grafiklar"), source: "placeholder" }
    ]
  },
  {
    day: 47,
    topics: [
      { title: "Ustunli diagrammalar", url: search("ustunli diagrammalar"), source: "placeholder" },
      { title: "Chiziqli grafiklar", url: search("chiziqli grafiklar"), source: "placeholder" }
    ]
  },
  {
    day: 48,
    topics: [
      { title: "Nuqta, chiziq va kesma", url: search("nuqta chiziq kesma"), source: "placeholder" },
      { title: "Burchaklar bilan tanishuv", url: search("burchaklar bilan tanishuv"), source: "placeholder" }
    ]
  },
  {
    day: 49,
    topics: [
      { title: "Uchburchaklar", url: search("uchburchaklar"), source: "placeholder" },
      { title: "To'rtburchaklar", url: search("to'rtburchaklar"), source: "placeholder" }
    ]
  },
  {
    day: 50,
    topics: [
      { title: "Aylana va doira", url: search("aylana doira"), source: "placeholder" },
      { title: "Shakllarni tasniflash", url: search("shakllarni tasniflash"), source: "placeholder" }
    ]
  },
  {
    day: 51,
    topics: [
      { title: "Perimetr", url: search("perimetr"), source: "placeholder" },
      { title: "To'g'ri to'rtburchak perimetri", url: search("to'g'ri to'rtburchak perimetri"), source: "placeholder" }
    ]
  },
  {
    day: 52,
    topics: [
      { title: "Yuza bilan tanishuv", url: search("yuza bilan tanishuv"), source: "placeholder" },
      { title: "To'g'ri to'rtburchak yuzasi", url: search("to'g'ri to'rtburchak yuzasi"), source: "placeholder" }
    ]
  },
  {
    day: 53,
    topics: [
      { title: "Koordinata tekisligi", url: search("koordinata tekisligi"), source: "placeholder" },
      { title: "Nuqtalarni joylashtirish", url: search("koordinata nuqtalarni joylashtirish"), source: "placeholder" }
    ]
  },
  {
    day: 54,
    topics: [
      { title: "Simmetriya", url: search("simmetriya"), source: "placeholder" },
      { title: "Shakllarni aks ettirish", url: search("shakllarni aks ettirish"), source: "placeholder" }
    ]
  },
  {
    day: 55,
    topics: [
      { title: "Natural sonlarni yaxlitlash", url: search("natural sonlarni yaxlitlash"), source: "placeholder" },
      { title: "Taxminiy hisoblash", url: search("taxminiy hisoblash"), source: "placeholder" }
    ]
  },
  {
    day: 56,
    topics: [
      { title: "Katta sonlarni qo'shish", url: search("katta sonlarni qo'shish"), source: "placeholder" },
      { title: "Katta sonlarni ayirish", url: search("katta sonlarni ayirish"), source: "placeholder" }
    ]
  },
  {
    day: 57,
    topics: [
      { title: "Ko'p xonali sonni bir xonali songa ko'paytirish", url: search("ko'p xonali sonni bir xonali songa ko'paytirish"), source: "placeholder" },
      { title: "Ko'p xonali sonni bir xonali songa bo'lish", url: search("ko'p xonali sonni bir xonali songa bo'lish"), source: "placeholder" }
    ]
  },
  {
    day: 58,
    topics: [
      { title: "Nisbat bilan tanishuv", url: search("nisbat bilan tanishuv"), source: "placeholder" },
      { title: "Oddiy foiz tushunchasi", url: search("oddiy foiz tushunchasi"), source: "placeholder" }
    ]
  },
  {
    day: 59,
    topics: [
      { title: "Aralash amalli masalalar", url: search("aralash amalli masalalar"), source: "placeholder" },
      { title: "Matnli masalani reja bilan yechish", url: search("matnli masalani reja bilan yechish"), source: "placeholder" }
    ]
  },
  {
    day: 60,
    topics: [
      { title: "Boshlang'ich matematika takrori", url: search("boshlang'ich matematika takror"), source: "placeholder" },
      { title: "Yakuniy aralash mashqlar", url: search("yakuniy aralash mashqlar"), source: "placeholder" }
    ]
  }
];
