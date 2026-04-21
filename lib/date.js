import { START_DATE } from "@/data/math-curriculum";

export function getDayNumber(today = new Date()) {
  const start = new Date(`${START_DATE}T00:00:00`);
  const current = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  const startDay = new Date(start.getFullYear(), start.getMonth(), start.getDate());
  const diff = current.getTime() - startDay.getTime();
  return Math.max(1, Math.floor(diff / 86400000) + 1);
}

export function formatLocalDate(date = new Date()) {
  return new Intl.DateTimeFormat("uz-UZ", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit"
  }).format(date);
}
