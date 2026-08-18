// İlerleme: pratik günleri (streak) + quiz istatistiği. localStorage.
import { load, save } from "./storage";
import { EVENTS, nextEvent, daysUntil } from "../data/events";
import { localIsoDay as isoDay } from "./date";

interface ProgressData {
  days: string[]; // pratik yapılan ISO günler
  quizTotal: number;
  quizCorrect: number;
}

const KEY = "progress";

function read(): ProgressData {
  return load<ProgressData>(KEY, { days: [], quizTotal: 0, quizCorrect: 0 });
}

export function recordPractice(): void {
  const p = read();
  const today = isoDay(0);
  if (!p.days.includes(today)) p.days.push(today);
  save(KEY, p);
}

export function recordQuiz(ok: boolean): void {
  const p = read();
  p.quizTotal += 1;
  if (ok) p.quizCorrect += 1;
  const today = isoDay(0);
  if (!p.days.includes(today)) p.days.push(today);
  save(KEY, p);
}

// bugünden geriye seri — haftada 1 "streak shield" (tek boş gün tolere edilir).
export function streak(): number {
  const days = new Set(read().days);
  let n = 0;
  let grace = true; // bir kez boş gün atlanabilir
  for (let i = 0; i < 120; i++) {
    if (days.has(isoDay(-i))) {
      n++;
    } else if (i > 0 && grace) {
      grace = false; // kalkanı kullan, seriyi kırma
    } else {
      break;
    }
  }
  return n;
}

// Sıradaki event'in başlangıcına kalan gün (event kalmadıysa EPT Day-1 2026-08-16'ya düşer).
export function daysUntilEPT(): number {
  const t = isoDay(0);
  return daysUntil(nextEvent(t)?.start ?? "2026-08-16", t);
}

// Cornerman modu: herhangi bir event penceresinde (başlangıç−6 gün → bitiş) app
// öğretmenden köşe-adamına döner.
export function cornermanActive(): boolean {
  const t = isoDay(0);
  return EVENTS.some((e) => daysUntil(e.start, t) <= 6 && t <= e.end);
}

export interface Stats {
  streak: number;
  practicedToday: boolean;
  quizTotal: number;
  quizCorrect: number;
  totalDays: number;
}

export function getStats(): Stats {
  const p = read();
  return {
    streak: streak(),
    practicedToday: p.days.includes(isoDay(0)),
    quizTotal: p.quizTotal,
    quizCorrect: p.quizCorrect,
    totalDays: p.days.length,
  };
}
