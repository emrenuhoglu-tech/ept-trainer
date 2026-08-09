// İlerleme: pratik günleri (streak) + quiz istatistiği. localStorage.
import { load, save } from "./storage";

interface ProgressData {
  days: string[]; // pratik yapılan ISO günler
  quizTotal: number;
  quizCorrect: number;
}

const KEY = "progress";

function isoDay(plus = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + plus);
  return d.toISOString().slice(0, 10);
}

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

// EPT Day-1'e (2026-08-16) kalan gün.
export function daysUntilEPT(): number {
  const day1 = new Date("2026-08-16T00:00:00");
  const today = new Date(isoDay(0) + "T00:00:00");
  return Math.round((day1.getTime() - today.getTime()) / 86400000);
}

// Cornerman modu: EPT serisi boyunca (15–29 Ağu) app öğretmenden köşe-adamına döner.
export function cornermanActive(): boolean {
  const t = isoDay(0);
  return t >= "2026-08-15" && t <= "2026-08-29";
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
