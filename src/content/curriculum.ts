// Tek dogruluk kaynagi: content/poker_cep_kitabi_v4.md
// Bu modul MD'yi ham okuyup yapiya cevirir. Hicbir poker degeri burada ELLE yazilmaz;
// tablolar, listeler ve aralik gruplari dogrudan MD'den parse edilir.
import raw from "../../content/poker_cep_kitabi_v4.md?raw";

export const rawMarkdown = raw;

/** Satir ici markdown'i (kalin, kod) duz metne indir. */
export function stripInline(s: string): string {
  return s
    .replace(/\*\*(.+?)\*\*/g, "$1")
    .replace(/`(.+?)`/g, "$1")
    .replace(/\*(.+?)\*/g, "$1")
    .trim();
}

export interface MdTable {
  headers: string[];
  rows: string[][];
}

function parseTableLines(lines: string[]): MdTable {
  const cells = (line: string) =>
    line
      .trim()
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => stripInline(c));
  const headers = cells(lines[0]);
  const rows = lines.slice(2).map(cells); // [0]=baslik, [1]=--- ayirici
  return { headers, rows };
}

/** "## Baslik" ile baslayan bolumun ham govdesini dondurur (bir sonraki ## veya ### 'e kadar degil,
 *  tam o ## bloguna kadar; alt ### basliklar dahil). */
export function sectionBlock(headingStartsWith: string): string {
  const lines = raw.split("\n");
  const out: string[] = [];
  let capturing = false;
  for (const line of lines) {
    const isH2 = line.startsWith("## ") && !line.startsWith("### ");
    if (isH2) {
      const title = line.slice(3).trim();
      if (title.startsWith(headingStartsWith)) {
        capturing = true;
        continue;
      }
      if (capturing) break; // sonraki ## bolumu -> dur
    }
    if (capturing) out.push(line);
  }
  return out.join("\n");
}

export interface Sentence {
  n: number;
  rule: string; // kalın ana cümle
  context: string; // altındaki açıklama
}

/** Bölüm 0'daki "Masaya Götürülecek 11 Cümle"yi parse eder (MD'den, elle yazılmaz). */
export function tenSentences(): Sentence[] {
  const block = sectionBlock("Bölüm 0");
  const out: Sentence[] = [];
  let cur: Sentence | null = null;
  for (const raw of block.split("\n")) {
    const m = raw.match(/^\s*(\d+)\.\s+\*\*(.+?)\*\*\s*$/);
    if (m) {
      if (cur) out.push(cur);
      cur = { n: Number(m[1]), rule: stripInline(m[2]), context: "" };
    } else if (cur && raw.trim() && !raw.trim().startsWith("#") && !raw.trim().startsWith("*")) {
      cur.context = (cur.context + " " + stripInline(raw.trim())).trim();
    }
  }
  if (cur) out.push(cur);
  return out.filter((s) => s.n >= 1 && s.n <= 11);
}

/** Verilen ham blok icindeki ### alt-baslikli parcalari dondurur: { title, body }. */
function subsections(block: string): { title: string; body: string }[] {
  const lines = block.split("\n");
  const res: { title: string; body: string }[] = [];
  let cur: { title: string; body: string[] } | null = null;
  for (const line of lines) {
    if (line.startsWith("### ")) {
      if (cur) res.push({ title: cur.title, body: cur.body.join("\n") });
      cur = { title: line.slice(4).trim(), body: [] };
    } else if (cur) {
      cur.body.push(line);
    }
  }
  if (cur) res.push({ title: cur.title, body: cur.body.join("\n") });
  return res;
}

function findSub(block: string, titleStartsWith: string): string {
  const s = subsections(block).find((x) => x.title.startsWith(titleStartsWith));
  return s ? s.body : "";
}

/** Bir blok govdesindeki ILK markdown tablosunu parse eder. */
function firstTable(body: string): MdTable | null {
  const lines = body.split("\n");
  const tbl: string[] = [];
  for (const line of lines) {
    if (line.trim().startsWith("|")) tbl.push(line);
    else if (tbl.length) break;
  }
  return tbl.length >= 2 ? parseTableLines(tbl) : null;
}

/** Bir blok govdesindeki liste ogelerini dondurur (sirali veya sirasiz). */
function listItems(body: string, ordered: boolean): string[] {
  const re = ordered ? /^\s*\d+\.\s+(.*)$/ : /^\s*[-*]\s+(.*)$/;
  return body
    .split("\n")
    .map((l) => l.match(re))
    .filter((m): m is RegExpMatchArray => !!m)
    .map((m) => stripInline(m[1]));
}

// ---- Bolum 4.3 — pozisyona gore 3-bet aralik gruplari (M5 interaktif tablosu) ----

export interface RangeGroup {
  opener: string; // kisa: "UTG", "LJ/HJ", "CO", "BTN"
  label: string; // tam baslik
  table: MdTable; // Pozisyon | VALUE | BLOF
  flats: string[]; // grubun flat notlari
}

export function rangeGroups(): RangeGroup[] {
  const b4 = sectionBlock("Bölüm 4");
  const body = findSub(b4, "4.3");
  const lines = body.split("\n");

  const groups: RangeGroup[] = [];
  let cur: { label: string; buf: string[] } | null = null;
  const push = () => {
    if (!cur) return;
    const chunk = cur.buf.join("\n");
    const table = firstTable(chunk);
    if (table) {
      const flats = cur.buf
        .filter((l) => /^\*\*[^*]*flat/i.test(l.trim()))
        .map((l) => stripInline(l));
      groups.push({
        opener: shortOpener(cur.label),
        label: cur.label,
        table,
        flats,
      });
    }
    cur = null;
  };

  for (const line of lines) {
    const m = line.trim().match(/^\*\*(.+?açılışına karşı.*?)\*\*$/);
    if (m) {
      push();
      cur = { label: m[1], buf: [] };
    } else if (cur) {
      cur.buf.push(line);
    }
  }
  push();
  return groups;
}

function shortOpener(label: string): string {
  const head = label.split("açılışına")[0].trim();
  return head.replace(/\s*\/\s*/g, "/");
}

// ---- Hizli Referans ----

export interface QuickRef {
  decisionOrder: string[];
  sizes: MdTable | null;
  band2530: MdTable | null; // 25–30bb kartı (v4)
  redFlags: string[];
}

export function quickReference(): QuickRef {
  const block = sectionBlock("Hızlı Referans");
  return {
    decisionOrder: listItems(findSub(block, "Karar sırası"), true),
    sizes: firstTable(findSub(block, "Boyutlar")),
    band2530: firstTable(findSub(block, "25")),
    redFlags: listItems(findSub(block, "Kırmızı bayraklar"), false),
  };
}

// ---- Genel yardimci: bir ## bolumundeki ilk tabloyu getir (ders slaytlari icin) ----

export function tableFromSection(
  h2StartsWith: string,
  subStartsWith?: string,
): MdTable | null {
  const block = sectionBlock(h2StartsWith);
  const body = subStartsWith ? findSub(block, subStartsWith) : block;
  return firstTable(body);
}

// ---- Aralık Rehberi: derinliğe göre kitapta AÇIKÇA verili aralıklar ----
// (Ara/uç derinliklerde kitap el listesi vermez; oralarda yalnız 4.7 karakter
//  tablosu ve nitel yönerge gösterilir — uydurma grid ÜRETİLMEZ.)

/** 25–30bb açılış aralıkları (Bölüm 5.1). */
export function openRanges(): { position: string; range: string }[] {
  const t = tableFromSection("Bölüm 5", "5.1");
  return t ? t.rows.map((r) => ({ position: r[0], range: r[1] })) : [];
}

/** 25–30bb jam aralıkları (Bölüm 5.2). */
export function jamRanges(): { vs: string; range: string }[] {
  const t = tableFromSection("Bölüm 5", "5.2");
  return t ? t.rows.map((r) => ({ vs: r[0], range: r[1] })) : [];
}

/** 25–30bb jam'e karşı call aralığı (Bölüm 5.3, prose). */
export function jamCallRange(): string {
  const body = findSub(sectionBlock("Bölüm 5"), "5.3");
  const m = body.match(/geldiyse:\s*([^.]+)\./);
  return m ? stripInline(m[1]) : "";
}

/** 3-bet'e karşı senin 4-bet cevabın (Bölüm 4.5). value + (karışım) + blöf + flat. */
export function fourBetRanges():
  | { value: string; blof: string; flat: string; foldNote: string }
  | null {
  const t = tableFromSection("Bölüm 4", "4.5");
  if (!t) return null;
  const cell = (key: string) => {
    const row = t.rows.find((r) => r[0].toLowerCase().startsWith(key));
    return row ? row[1] : "";
  };
  const firstSeg = (s: string) => s.split(/[—;:]/)[0].trim(); // el token'ları prose'dan önce
  const value = firstSeg(cell("4-bet value"));
  const karisim = firstSeg(cell("4-bet karışım"));
  const blof = firstSeg(cell("4-bet blöf"));
  const flat = firstSeg(cell("flat"));
  const foldNote = cell("fold");
  const mix = karisim
    ? karisim.split(",").map((h) => `${h.trim()} (karışım)`).join(", ")
    : "";
  return { value: mix ? `${value}, ${mix}` : value, blof, flat, foldNote };
}

/** Squeeze aralığı (Bölüm 4.6). */
export function squeezeRange(): { value: string; blof: string } | null {
  const body = findSub(sectionBlock("Bölüm 4"), "4.6");
  const v = body.match(/VALUE:\*\*\s*(.+)/i);
  const b = body.match(/BLÖF:\*\*\s*(.+)/i);
  if (!v && !b) return null;
  return { value: v ? stripInline(v[1]) : "", blof: b ? stripInline(b[1]) : "" };
}

/** Stack modu üst katmanı (Bölüm 4.7) — derinliğe göre nitel ayar tablosu. */
export function stackLayer(): MdTable | null {
  return tableFromSection("Bölüm 4", "4.7");
}
