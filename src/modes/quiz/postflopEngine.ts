// Turn & River karar drill'i — TAMAMEN offline, kitaba sadık. Her doğru cevap Bölüm 6 (turn'de
// draw) veya Bölüm 11 (turn disiplini / river icrası) tablosundan bir hücredir. Kitap boyutu
// yalnız (kalibre et) verdiği için YÖNÜ sorarız ve — kitap işaretlediği yerde — bir bet'in VALUE
// mi BLÖF mü olduğunu. Okumaya bağlı hücreler ("dikkat — SPR", "ikisi de meşru", "sınırda",
// "ince bet / check-call") ATLANIR, uydurma cevaba çevrilmez — preflop drill'lerdeki doktrin.
import {
  turnBarrelMatrix,
  drawTurnMatrix,
  riverBluffCatch,
  riverThinValue,
  badRiverCatalog,
  multiwayMatrix,
  type MdTable,
} from "../../content/curriculum";

// Bir bet asla isimsiz değildir: kitap her birini value (overpair/TPGK/thin value) ya da blöf
// (hava+bloker barrel, semi-bluff draw) olarak işaretler. Bu ayrım drill'in bel kemiği.
export type PostflopAction =
  | "betvalue"
  | "betbluff"
  | "check"
  | "checkcall"
  | "checkfold"
  | "call"
  | "fold";
export type PostflopStreet = "turn" | "river" | "multiway";

export interface PostflopQuestion {
  kavram: string;
  street: PostflopStreet;
  headline: string;
  prompt: string;
  answers: PostflopAction[];
  answerLabels?: Partial<Record<PostflopAction, string>>;
  correct: PostflopAction;
  note: string;
  table: MdTable | null;
  catalog?: string[];
  highlightRow?: number;
  source: string;
}

export const POSTFLOP_LABEL: Record<PostflopAction, string> = {
  betvalue: "Value bet",
  betbluff: "Blöf bet",
  check: "Check",
  checkcall: "Check-call",
  checkfold: "Check-fold",
  call: "Call",
  fold: "Fold",
};

// --- Hücre → yön sınıflandırıcıları. classify* HAM yön döner; "bet" satıra göre value/blöf'e
// (betType) çözülür. Okumaya bağlı hücre için null (atla = drill yok). Token'lar hem TR hem EN
// kitabı kapsar ki iki motor sessizce ayrışmasın.

type RawDir = "bet" | "check" | "checkcall" | "checkfold";

/** Hava+bloker satırından bir bet blöf barrel'dir; diğer her bahis eli value'dur.
 *  Kelime-sınırlı: çıplak /air/ "Overp-air" ve "Top p-air"i yakalar, value bet'leri yanlış etiketler. */
export function betType(rowLabel: string): PostflopAction {
  return /\bair\b|\bhava\b|blocker|bloker/i.test(rowLabel) ? "betbluff" : "betvalue";
}

function classifyTurn(cell: string): RawDir | null {
  const c = cell.toLowerCase();
  if (/\bspr\b|careful|dikkat/.test(c)) return null; // SPR'ye bağlı → net yön değil
  if (/reduce size|boyut düşür/.test(c)) return null; // "check / boyut düşür" = iki yönlü (check YA DA küçük bet) → atla
  if (/check-call/.test(c)) return "checkcall";
  if (/check-fold/.test(c)) return "checkfold";
  if (/give up|bırak/.test(c)) return "checkfold"; // blöfü bırakmak = check-fold
  if (/barrel|bet/.test(c)) return "bet"; // "İnce bet", "Bet (kontrollü)", "Barrel adayı"
  if (/check/.test(c)) return "check";
  return null;
}

function classifyDraw(cell: string): "bet" | "check" | null {
  const c = cell.toLowerCase();
  if (/both|ikisi de|meşru/.test(c)) return null; // "ikisi de meşru / both are legitimate" → okuma
  // Not: JS "İ"yi "i"+birleşik-noktaya çevirir; bu yüzden noktasız-güvenli "meşru" token'ı esas.
  if (/bet/.test(c)) return "bet";
  if (/check/.test(c)) return "check";
  return null;
}

function classifyRiver(cell: string): "call" | "fold" | null {
  const c = cell.toLowerCase();
  if (/borderline|sınırda/.test(c)) return null; // "bloker belirler" → sınır kutbunu atla
  if (/fold/.test(c)) return "fold";
  if (/call/.test(c)) return "call";
  return null;
}

function classifyThin(cell: string): "betvalue" | "checkcall" | null {
  const c = cell.toLowerCase();
  if (/check-call/.test(c) && /\bbet\b/.test(c)) return null; // "ince bet / check-call" → sınırda, atla
  // \bbet\b: "…reg bu boyutu daha iyisiyle öder" gibi net check-call hücresi "bet" alt-dizisine takılmasın.
  if (/check-call/.test(c)) return "checkcall";
  if (/value|bet/.test(c)) return "betvalue";
  return null;
}

/** Multiway (13.1) 3+ hücresi → yön. Okumaya bağlı ("Duruma göre"/SPR) ve frekans/koşul
 *  cümleleri ("Çöker…", "Neredeyse yok…") tek aksiyona çevrilmez → atla. */
function classifyMultiway(cell: string): "bet" | "check" | null {
  const c = cell.toLowerCase();
  if (/duruma göre|depends|\bspr\b/.test(c)) return null;
  if (/çöker|collapses|neredeyse yok|almost none/.test(c)) return null;
  if (/check/.test(c)) return "check";
  if (/\bbet\b/.test(c)) return "bet";
  return null;
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

// --- Üreteçler. Tablo yoksa veya net hücre yoksa null döner.

function qTurnBarrel(): PostflopQuestion | null {
  const t = turnBarrelMatrix();
  if (!t || t.rows.length === 0) return null;
  const crisp: { r: number; c: number; a: PostflopAction }[] = [];
  for (let r = 0; r < t.rows.length; r++)
    for (let c = 1; c < t.headers.length; c++) {
      const raw = classifyTurn(t.rows[r][c] || "");
      if (!raw) continue;
      crisp.push({ r, c, a: raw === "bet" ? betType(t.rows[r][0]) : raw });
    }
  if (!crisp.length) return null;
  const p = pick(crisp);
  const isBet = p.a === "betvalue" || p.a === "betbluff";
  const why = isBet
    ? p.a === "betbluff"
      ? "hava + bloker = BLÖF barrel (blöf seçimi: Bölüm 1)."
      : "VALUE bet — atmadan önce river planını söyle."
    : "pot kontrol — kârlı bitiremeyeceğin potu büyütme.";
  return {
    kavram: "postflop:turn:barrel",
    street: "turn",
    headline: `Turn — 3-bet potu. Elin sınıfı: ${t.rows[p.r][0]}. Turn kartı: ${t.headers[p.c]}.`,
    prompt: "İkinci fıçı — ne yaparsın?",
    answers: ["betvalue", "betbluff", "check", "checkcall", "checkfold"],
    correct: p.a,
    note: `Kitap 11.1: "${t.rows[p.r][p.c]}" — ${why}`,
    table: t,
    highlightRow: p.r,
    source: "11.1",
  };
}

function qDrawTurn(): PostflopQuestion | null {
  const t = drawTurnMatrix();
  if (!t) return null;
  const crisp = t.rows
    .map((row, i) => ({ i, a: classifyDraw(row[1] || "") }))
    .filter((x): x is { i: number; a: "bet" | "check" } => x.a !== null);
  if (!crisp.length) return null;
  const p = pick(crisp);
  // Draw henüz tamamlanmadı — onu bet'lemek SEMI-BLUFF'tır, asla value değil.
  const correct: PostflopAction = p.a === "bet" ? "betbluff" : "check";
  return {
    kavram: "postflop:turn:draw",
    street: "turn",
    headline: `Turn — elinde ${t.rows[p.i][0]} var. Rakip bir REG (station değil) ve board senin aralığına uygun.`,
    prompt: "Draw'ı bet mi, check mi?",
    answers: ["betvalue", "betbluff", "check"],
    correct,
    note: `Kitap 6.2: "${t.rows[p.i][1]}" — ${t.rows[p.i][2]}. Draw'ı bet'lemek semi-bluff'tır: fold ettirerek VEYA tamamlayarak kazanırsın (6.1) — asla value bet değil.`,
    table: t,
    highlightRow: p.i,
    source: "6.2",
  };
}

function qRiverSize(): PostflopQuestion | null {
  const t = riverBluffCatch();
  if (!t) return null;
  const last = t.headers.length - 1;
  const crisp = t.rows
    .map((row, i) => ({ i, a: classifyRiver(row[last] || "") }))
    .filter((x): x is { i: number; a: "call" | "fold" } => x.a !== null);
  if (!crisp.length) return null;
  const p = pick(crisp);
  return {
    kavram: "postflop:river:bluffcatch",
    street: "river",
    headline: `River — elinde TEK PER var (bluff-catcher). Rakip ${t.rows[p.i][0]} bet atıyor.`,
    prompt: "Call mı, fold mı?",
    answers: ["call", "fold"],
    correct: p.a,
    note: `Kitap 11.2: boyut büyüdükçe rakip aralığı value'ya kayar ve tek per, bluff-catcher'dan fold'a döner. Overbet = polarize (nut ya da hava).`,
    table: t,
    highlightRow: p.i,
    source: "11.2",
  };
}

function qThinValue(): PostflopQuestion | null {
  const t = riverThinValue();
  if (!t || t.rows.length === 0) return null;
  const crisp: { r: number; c: number; a: PostflopAction }[] = [];
  for (let r = 0; r < t.rows.length; r++)
    for (let c = 1; c < t.headers.length; c++) {
      const a = classifyThin(t.rows[r][c] || "");
      if (a) crisp.push({ r, c, a });
    }
  if (!crisp.length) return null;
  const p = pick(crisp);
  return {
    kavram: "postflop:river:thinvalue",
    street: "river",
    headline: `River — elinde ${t.rows[p.r][0]} var. Rakip tipi: ${t.headers[p.c]}. Sana check geldi.`,
    prompt: "İnce value bet mi, check-call mı?",
    answers: ["betvalue", "checkcall"],
    correct: p.a,
    note: `Kitap 11.3: "benden zayıf hangi el ödüyor?" sorusunun cevabı VARSA — ince de olsa — BET et. Rec-ağırlıklı Main'de kaçan thin value doğrudan chip kaybı.`,
    table: t,
    highlightRow: p.r,
    source: "11.3",
  };
}

function qBadRiver(): PostflopQuestion | null {
  const items = badRiverCatalog();
  if (!items.length) return null;
  const item = pick(items);
  return {
    kavram: "postflop:river:badcard",
    street: "river",
    headline: `Elinde overpair var. Flop ve turn'de value bet attın. River geldi: ${item}. Rakip check.`,
    prompt: "Kalanı value için jam eder misin?",
    answers: ["betvalue", "check"],
    answerLabels: { betvalue: "Jam (value)", check: "Check (jam yok)" },
    correct: "check",
    note: `Kitap 11.4: burada jam VALUE iddia eder ama senden zayıf hiçbir el ödemez → value değildir. ASLA jam etme — kötü river'da küçük pota check-call, büyük pota check-fold.`,
    table: null,
    catalog: items,
    source: "11.4",
  };
}

function qMultiway(): PostflopQuestion | null {
  const t = multiwayMatrix();
  if (!t || t.rows.length === 0) return null;
  const last = t.headers.length - 1; // "3+ yollu" kolonu = doğru cevap; HU kolonu bağlam
  const crisp = t.rows
    .map((row, i) => ({ i, a: classifyMultiway(row[last] || "") }))
    .filter((x): x is { i: number; a: "bet" | "check" } => x.a !== null);
  if (!crisp.length) return null;
  const p = pick(crisp);
  const row = t.rows[p.i];
  // Draw satırından bet semi-bluff'tır (6.1 doktrini — asla value); diğer bet'ler satıra göre.
  const correct: PostflopAction =
    p.a === "bet" ? (/\bfd\b|draw/i.test(row[0]) ? "betbluff" : betType(row[0])) : "check";
  return {
    kavram: "postflop:multiway",
    street: "multiway",
    headline: `Multiway — pot 3+ yollu. Elin sınıfı: ${row[0]}. (HU olsaydı: ${row[1]}.)`,
    prompt: "3+ yollu potta ne yaparsın?",
    answers: ["betvalue", "betbluff", "check"],
    correct,
    note: `Kitap 13.1: "${row[last]}" — her ek oyuncu blöfün fiyatını katlar, value'nun barını yükseltir (13.0).`,
    table: t,
    highlightRow: p.i,
    source: "13.1",
  };
}


const TURN_GENS = [qTurnBarrel, qDrawTurn];
const RIVER_GENS = [qRiverSize, qThinValue, qBadRiver];

/** Seçilen street için bir postflop sorusu üretir ("all" turn + river karışır;
 *  "multiway" B13.1'den ayrı üretir — turn/river davranışı değişmez). */
export function postflopQuestion(street: "all" | PostflopStreet): PostflopQuestion | null {
  if (street === "multiway") return qMultiway();
  const gens =
    street === "turn" ? TURN_GENS : street === "river" ? RIVER_GENS : [...TURN_GENS, ...RIVER_GENS];
  for (const g of [...gens].sort(() => Math.random() - 0.5)) {
    const q = g();
    if (q) return q;
  }
  return null;
}
