// EPT Barcelona 2026 — Emre'nin oynayacağı 4 event. HARİCİ OLGUSAL TAKVİM (poker
// stratejisi DEĞİL — kitaba dokunmaz). Kaynak: 2026-07-27 kilitli slate. Tarihler ISO.
export interface EptEvent {
  id: string;
  name: string;
  format: "NLH";
  buyin: string;
  start: string; // ISO başlangıç günü
  end: string; // ISO son gün
  days: string; // insancıl aralık
}

export const EVENTS: EptEvent[] = [
  { id: "shr", name: "Super High Roller", format: "NLH", buyin: "€100K", start: "2026-08-21", end: "2026-08-23", days: "21–23 Ağu" },
  { id: "main", name: "Main Event", format: "NLH", buyin: "€5.3K", start: "2026-08-22", end: "2026-08-29", days: "22–29 Ağu" },
  { id: "hr", name: "High Roller", format: "NLH", buyin: "€10.3K", start: "2026-08-27", end: "2026-08-29", days: "27–29 Ağu" },
  { id: "wsop", name: "WSOP Online ME Day 2", format: "NLH", buyin: "$5K", start: "2026-09-21", end: "2026-09-22", days: "21–22 Eyl" },
];

// Bugün (dahil) itibarıyla henüz bitmemiş, en erken başlayan event.
export function nextEvent(todayIso: string): EptEvent | null {
  const upcoming = EVENTS.filter((e) => e.end >= todayIso).sort((a, b) => a.start.localeCompare(b.start));
  return upcoming[0] ?? null;
}

// iso gününe kalan tam gün (negatifse geçmiş).
export function daysUntil(iso: string, todayIso: string): number {
  return Math.round(
    (new Date(iso + "T00:00:00").getTime() - new Date(todayIso + "T00:00:00").getTime()) / 86400000,
  );
}
