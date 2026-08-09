// Drill karnesi 2.0 — localStorage. Kavram BAŞINA tek kayıt (konsolide).
// Aralıklar başarıyla genişler (wrong+1 / half+2 / correct 3→7→14), EPT Day-1'e
// (2026-08-16) geri-planlı olarak Ağu 14'ü geçmez. Severity + confidence + mastery.
import { KARNE_SEED } from "../data/karne_seed";
import { load, save } from "./storage";

export type Sonuc = "wrong" | "half" | "correct";
export type Severity = "minor" | "major" | "tournament_life";
export type Mastery = "gorundu" | "asina" | "yetkin" | "saglam";

export interface KarneEntry {
  id: string; // = kavram (konsolide)
  kavram: string;
  soru_ozeti: string; // en son
  sonuc: Sonuc; // en son
  not?: string;
  severity?: Severity;
  confidence?: number; // son güven (0.6 / 0.8 / 0.95)
  streak: number; // ardışık doğru
  reps: number; // toplam deneme
  correctDays: string[]; // doğru cevaplanan ayrı günler (mastery için)
  tarih: string;
  due: string;
  mastery: Mastery;
}

const KEY = "karne";
const DUE_CAP = "2026-08-14"; // hiçbir tekrar bunu geçmez (Day-1 öncesi son retrieval)

function isoDay(plusDays = 0): string {
  const d = new Date();
  d.setDate(d.getDate() + plusDays);
  return d.toISOString().slice(0, 10);
}

function capDue(iso: string): string {
  return iso > DUE_CAP ? DUE_CAP : iso;
}

// Doğru için genişleyen aralık; severity ağır olan yanlışlar ertesi güne çekilir.
function computeDue(sonuc: Sonuc, streak: number, severity?: Severity): string {
  if (sonuc === "wrong") return capDue(isoDay(1));
  if (sonuc === "half") return capDue(isoDay(severity === "tournament_life" ? 1 : 2));
  const steps = [3, 7, 14];
  const off = steps[Math.min(Math.max(streak, 1) - 1, steps.length - 1)];
  return capDue(isoDay(off));
}

function computeMastery(streak: number, correctDays: string[]): Mastery {
  const days = new Set(correctDays).size;
  if (streak >= 3 && days >= 3) return "saglam";
  if (streak >= 2 && days >= 2) return "yetkin";
  if (streak >= 1) return "asina";
  return "gorundu";
}

function fresh(kavram: string, base?: Partial<KarneEntry>): KarneEntry {
  return {
    id: kavram,
    kavram,
    soru_ozeti: "",
    sonuc: "wrong",
    streak: 0,
    reps: 0,
    correctDays: [],
    tarih: isoDay(0),
    due: isoDay(0),
    mastery: "gorundu",
    ...base,
  };
}

// Eski (v1, kavram-başına-çok-satır) veriyi kavrama göre KONSOLİDE et.
function migrate(rows: Record<string, unknown>[]): KarneEntry[] {
  const byK = new Map<string, KarneEntry>();
  for (const r of rows) {
    const kavram = String(r.kavram || "kök-hata");
    const cur = byK.get(kavram) || fresh(kavram);
    cur.reps += 1;
    cur.soru_ozeti = String(r.soru_ozeti || cur.soru_ozeti);
    cur.sonuc = (r.sonuc as Sonuc) || cur.sonuc;
    cur.not = (r.not as string) || cur.not;
    cur.tarih = String(r.tarih || cur.tarih);
    cur.due = capDue(String(r.due || cur.due));
    byK.set(kavram, cur);
  }
  return [...byK.values()];
}

export function loadKarne(): KarneEntry[] {
  const existing = load<Record<string, unknown>[] | null>(KEY, null);
  if (existing && existing.length) {
    // v2 mi (reps alanı var)? değilse migrate et.
    if (typeof existing[0].reps === "number") return existing as unknown as KarneEntry[];
    const migrated = migrate(existing);
    save(KEY, migrated);
    return migrated;
  }
  const seeded = migrate(KARNE_SEED as unknown as Record<string, unknown>[]);
  save(KEY, seeded);
  return seeded;
}

function upsert(
  kavram: string,
  patch: { soru_ozeti: string; sonuc: Sonuc; not?: string; severity?: Severity; confidence?: number },
): void {
  const k = loadKarne();
  let e = k.find((x) => x.kavram === kavram);
  if (!e) {
    e = fresh(kavram);
    k.push(e);
  }
  e.reps += 1;
  e.soru_ozeti = patch.soru_ozeti;
  e.sonuc = patch.sonuc;
  e.not = patch.not ?? e.not;
  e.severity = patch.severity ?? e.severity;
  e.confidence = patch.confidence ?? e.confidence;
  e.streak = patch.sonuc === "correct" ? e.streak + 1 : 0;
  if (patch.sonuc === "correct") {
    const today = isoDay(0);
    if (!e.correctDays.includes(today)) e.correctDays.push(today);
  }
  e.tarih = isoDay(0);
  e.due = computeDue(patch.sonuc, e.streak, e.severity);
  e.mastery = computeMastery(e.streak, e.correctDays);
  save(KEY, k);
}

export function recordResult(r: {
  kavram: string;
  soru_ozeti: string;
  sonuc: Sonuc;
  not?: string;
  severity?: Severity;
  confidence?: number;
}): void {
  upsert(r.kavram, r);
}

// Review döngüsü — kavrama göre yerinde günceller (id = kavram).
export function reviewEntry(id: string, sonuc: Sonuc): void {
  const e = loadKarne().find((x) => x.id === id || x.kavram === id);
  if (!e) return;
  upsert(e.kavram, { soru_ozeti: e.soru_ozeti, sonuc, not: e.not, severity: e.severity });
}

const SEV_RANK: Record<Severity, number> = { tournament_life: 0, major: 1, minor: 2 };

export function dueEntries(): KarneEntry[] {
  const today = isoDay(0);
  return loadKarne()
    .filter((e) => e.due <= today && e.mastery !== "saglam")
    .sort(
      (a, b) =>
        (SEV_RANK[a.severity ?? "minor"] - SEV_RANK[b.severity ?? "minor"]) ||
        a.due.localeCompare(b.due),
    );
}

// Emin-ama-yanlış: en tehlikeli (turnuva-bitiren) hatalar önce.
export function confidentWrong(): KarneEntry[] {
  return loadKarne()
    .filter((e) => e.sonuc === "wrong" && (e.confidence ?? 0) >= 0.8)
    .sort((a, b) => SEV_RANK[a.severity ?? "minor"] - SEV_RANK[b.severity ?? "minor"]);
}

// Kalibrasyon: yüksek-güven (≥%80) cevaplarda gerçek isabet.
export function calibration(): { high: number; hit: number } | null {
  const k = loadKarne().filter((e) => (e.confidence ?? 0) >= 0.8 && e.reps > 0);
  if (!k.length) return null;
  const hit = k.filter((e) => e.sonuc === "correct").length;
  return { high: k.length, hit };
}

export function masteryCounts(): Record<Mastery, number> {
  const out: Record<Mastery, number> = { gorundu: 0, asina: 0, yetkin: 0, saglam: 0 };
  for (const e of loadKarne()) out[e.mastery]++;
  return out;
}

// Karar günlüğünden (cornerman) son 2 günün elleri — drill/sim'e "ertesi-gün tohumu"
// olarak gider (kitabın Bölüm 9 protokolü: masadan gelen eller vaka olur). Yalnız Emre'nin
// kendi elleri; değerlendirme yine kitap-temelli LLM prompt'unda kalır. Kayıt yoksa boş.
interface JournalRow { day: string; el: string; aksiyon: string; gerekce?: string }
export function journalForModel(): string {
  const rows = load<JournalRow[]>("journal", []);
  if (!rows.length) return "";
  const days = [...new Set(rows.map((r) => r.day))].sort().slice(-2); // son 2 gün
  const recent = rows.filter((r) => days.includes(r.day)).slice(0, 6);
  if (!recent.length) return "";
  return (
    "\n\nMasadan getirdiği son eller (ertesi-gün tohumu — bu spotları yeni bir kılıkta tekrar sor):\n" +
    recent
      .map((r) => `- [${r.day}] ${r.el} → ${r.aksiyon}${r.gerekce ? " (" + r.gerekce + ")" : ""}`)
      .join("\n")
  );
}

// Modele gidecek kısa karne metni: due + severity + confidence ipuçları.
export function karneForModel(): string {
  const due = dueEntries();
  const list = (due.length ? due : loadKarne()).slice(0, 10);
  if (!list.length) return "(karne boş)";
  return list
    .map((e) => {
      const sev = e.severity === "tournament_life" ? " ⚠tournament_life" : "";
      const conf = (e.confidence ?? 0) >= 0.8 && e.sonuc === "wrong" ? " (emin-ama-yanlış)" : "";
      return `- [${e.sonuc}${sev}${conf}] ${e.kavram}: ${e.soru_ozeti}${e.not ? " — " + e.not : ""} (due ${e.due})`;
    })
    .join("\n");
}
