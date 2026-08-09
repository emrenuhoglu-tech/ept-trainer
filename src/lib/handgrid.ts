// 13x13 poker el ızgarası + kitap notasyonunu SADIK biçimde hücrelere çeviren parser.
// KURAL: sadece metnin AÇIKÇA belirttiği elleri üret. Belirsiz/prose ifadeleri
// ("tüm suited connector'lar", "çoğu broadway") üretme — notes olarak döndür.

export const RANKS = ["A", "K", "Q", "J", "T", "9", "8", "7", "6", "5", "4", "3", "2"] as const;
export type Rank = (typeof RANKS)[number];
const IDX: Record<string, number> = Object.fromEntries(RANKS.map((r, i) => [r, i]));

export type Category = "value" | "blof" | "mix" | "flat";

// Bir hücrenin kanonik kodu: "AA" | "AKs" | "AKo"
export function cellCode(row: number, col: number): string {
  const hi = RANKS[Math.min(row, col)];
  const lo = RANKS[Math.max(row, col)];
  if (row === col) return `${hi}${lo}`; // çift
  if (row < col) return `${hi}${lo}s`; // suited = üst-sağ üçgen
  return `${hi}${lo}o`; // offsuit = alt-sol üçgen
}

// "AK" -> hi+lo normalize
function norm2(a: string, b: string): [string, string] {
  return IDX[a] <= IDX[b] ? [a, b] : [b, a];
}

// Tek token'ı hücre kodlarına aç. Çözemezse null (çağıran notes'a atar).
function expandToken(tokRaw: string): string[] | null {
  const tok = tokRaw.trim().replace(/[–—]/g, "-").replace(/\s+/g, "");
  if (!tok) return [];
  const R = "[AKQJT98765432]";

  // Çift +   88+
  let m = tok.match(new RegExp(`^(${R})\\1\\+$`));
  if (m) {
    const out: string[] = [];
    for (let i = 0; i <= IDX[m[1]]; i++) out.push(`${RANKS[i]}${RANKS[i]}`);
    return out;
  }
  // Çift aralık   TT-77
  m = tok.match(new RegExp(`^(${R})\\1-(${R})\\2$`));
  if (m) {
    const [a, b] = [IDX[m[1]], IDX[m[2]]];
    const out: string[] = [];
    for (let i = Math.min(a, b); i <= Math.max(a, b); i++) out.push(`${RANKS[i]}${RANKS[i]}`);
    return out;
  }
  // Tek çift   AA
  m = tok.match(new RegExp(`^(${R})\\1$`));
  if (m) return [`${m[1]}${m[1]}`];

  // Suited/offsuit +   AQs+  ATo+  KTs+
  m = tok.match(new RegExp(`^(${R})(${R})(s|o)\\+$`));
  if (m) {
    const [x, y, suf] = [m[1], m[2], m[3]];
    if (IDX[x] >= IDX[y]) return null; // x daha yüksek olmalı
    const out: string[] = [];
    for (let k = IDX[x] + 1; k <= IDX[y]; k++) out.push(`${x}${RANKS[k]}${suf}`);
    return out;
  }
  // Suited/offsuit aralık   A5s-A2s   K9s-K7s
  m = tok.match(new RegExp(`^(${R})(${R})(s|o)-(${R})(${R})(s|o)$`));
  if (m) {
    const [x1, y1, s1, x2, y2, s2] = [m[1], m[2], m[3], m[4], m[5], m[6]];
    if (x1 !== x2 || s1 !== s2) return null;
    const out: string[] = [];
    for (let k = Math.min(IDX[y1], IDX[y2]); k <= Math.max(IDX[y1], IDX[y2]); k++)
      out.push(`${x1}${RANKS[k]}${s1}`);
    return out;
  }
  // Tek suited/offsuit   AKs  AKo
  m = tok.match(new RegExp(`^(${R})(${R})(s|o)$`));
  if (m) {
    const [hi, lo] = norm2(m[1], m[2]);
    return [`${hi}${lo}${m[3]}`];
  }
  return null; // belirsiz/prose → notes
}

export interface ParsedRange {
  cells: Set<string>;
  notes: string[]; // grid'e basılamayan prose ("tüm suited connector'lar" vb.)
}

// "QQ+, AKs, AKo (JJ karışım), A5s" gibi bir metni açar.
// "karışım" işaretli eller mix olarak ayrıştırılır (mixOut'a yazılır).
export function parseRange(text: string, mixOut?: Set<string>): ParsedRange {
  const cells = new Set<string>();
  const notes: string[] = [];
  if (!text) return { cells, notes };

  let s = text.trim();
  const R = "[AKQJT98765432]";

  // "HAND (karışım)"  → HAND mix
  s = s.replace(new RegExp(`(${R}${R}[so]?)\\s*\\(\\s*kar[ıi]ş[ıi]m\\s*\\)`, "gi"), (_m, h) => {
    expandToken(h)?.forEach((c) => mixOut?.add(c));
    return " ";
  });
  // "(HAND karışım)" → HAND mix
  s = s.replace(new RegExp(`\\(\\s*(${R}${R}?[so]?)\\s*kar[ıi]ş[ıi]m\\s*\\)`, "gi"), (_m, h) => {
    expandToken(h)?.forEach((c) => mixOut?.add(c));
    return " ";
  });
  // kalan tüm parantezleri (açıklama) at
  s = s.replace(/\([^)]*\)/g, " ");

  for (const partRaw of s.split(",")) {
    const part = partRaw.trim().replace(/\.$/, "");
    if (!part || /^(yok|—|-)$/i.test(part)) continue;
    const ex = expandToken(part);
    if (ex) ex.forEach((c) => cells.add(c));
    else if (/[a-zçğıöşü]/i.test(part) && part.length > 3) notes.push(part); // prose
    else if (part.length > 1) notes.push(part); // tanımadığı kısa token — sadakat için not
  }
  return { cells, notes };
}
