// Yerel takvim günü (UTC değil). toISOString() UTC günü döndürdüğü için gece yarısından
// sonra (UTC+2/+3) streak/due/practicedToday bir gün kayıyordu — gece oynayan bir oyuncu
// için sistematik hata. Tek kaynak: karne.ts, progress.ts, DecisionJournal hepsi bunu kullanır.
export function localIsoDay(plusDays = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + plusDays);
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}
