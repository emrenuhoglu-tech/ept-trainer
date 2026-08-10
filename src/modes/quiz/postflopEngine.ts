// Turn & River karar drill'i — TAMAMEN offline, kitaba sadık. Her doğru cevap Bölüm 6 (turn'de
// draw) veya Bölüm 11 (turn disiplini / river icrası) tablosundan bir hücredir. Kitap boyutu
// yalnız (kalibre et) verdiği için drill YÖNÜ (bet/check/call/fold) sorar, asla boyut. Okumaya
// bağlı hücreler ("dikkat — SPR", "ikisi de meşru", "sınırda") ATLANIR, uydurma cevaba
// çevrilmez — preflop drill'lerdeki doktrinin aynısı.
import {
  turnBarrelMatrix,
  drawTurnMatrix,
  riverBluffCatch,
  badRiverCatalog,
  type MdTable,
} from "../../content/curriculum";

export type PostflopAction = "bet" | "check" | "checkcall" | "checkfold" | "call" | "fold";
export type PostflopStreet = "turn" | "river";

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
  bet: "Bet / Barrel",
  check: "Check",
  checkcall: "Check-call",
  checkfold: "Check-fold",
  call: "Call",
  fold: "Fold",
};

// --- Hücre → yön sınıflandırıcıları. Okumaya bağlı hücre için null döner (atla = drill yok).
// Token'lar hem TR hem EN kitabı kapsar ki iki motor sessizce ayrışmasın.

function classifyTurn(cell: string): PostflopAction | null {
  const c = cell.toLowerCase();
  if (/\bspr\b|careful|dikkat/.test(c)) return null; // SPR'ye bağlı → net yön değil
  if (/check-call/.test(c)) return "checkcall";
  if (/check-fold/.test(c)) return "checkfold";
  if (/give up|bırak/.test(c)) return "checkfold"; // blöfü bırakmak = check-fold
  if (/barrel|bet/.test(c)) return "bet"; // "İnce bet", "Bet (kontrollü)", "Barrel adayı"
  if (/check/.test(c)) return "check";
  return null;
}

function classifyDraw(cell: string): PostflopAction | null {
  const c = cell.toLowerCase();
  if (/both|ikisi de|meşru/.test(c)) return null; // "ikisi de meşru / both are legitimate" → okuma
  // Not: JS "İ"yi "i"+birleşik-noktaya çevirir; bu yüzden noktasız-güvenli "meşru" token'ı esas.
  if (/bet/.test(c)) return "bet";
  if (/check/.test(c)) return "check";
  return null;
}

function classifyRiver(cell: string): PostflopAction | null {
  const c = cell.toLowerCase();
  if (/borderline|sınırda/.test(c)) return null; // "bloker belirler" → sınır kutbunu atla
  if (/fold/.test(c)) return "fold";
  if (/call/.test(c)) return "call";
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
      const a = classifyTurn(t.rows[r][c] || "");
      if (a) crisp.push({ r, c, a });
    }
  if (!crisp.length) return null;
  const p = pick(crisp);
  return {
    kavram: "postflop:turn:barrel",
    street: "turn",
    headline: `Turn — 3-bet potu. Elin sınıfı: ${t.rows[p.r][0]}. Turn kartı: ${t.headers[p.c]}.`,
    prompt: "İkinci fıçı — ne yaparsın?",
    answers: ["bet", "check", "checkcall", "checkfold"],
    correct: p.a,
    note: `Kitap 11.1: "${t.rows[p.r][p.c]}". Atmadan önce river planını söyle — koyduğun her chip, kötü river'da check-fold lüksünü azaltır.`,
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
    .filter((x): x is { i: number; a: PostflopAction } => x.a !== null);
  if (!crisp.length) return null;
  const p = pick(crisp);
  return {
    kavram: "postflop:turn:draw",
    street: "turn",
    headline: `Turn — elinde ${t.rows[p.i][0]} var. Rakip bir REG (station değil) ve board senin aralığına uygun.`,
    prompt: "Draw'ı bet mi, check mi?",
    answers: ["bet", "check"],
    correct: p.a,
    note: `Kitap 6.2: "${t.rows[p.i][1]}" — ${t.rows[p.i][2]}.`,
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
    .filter((x): x is { i: number; a: PostflopAction } => x.a !== null);
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

function qBadRiver(): PostflopQuestion | null {
  const items = badRiverCatalog();
  if (!items.length) return null;
  const item = pick(items);
  return {
    kavram: "postflop:river:badcard",
    street: "river",
    headline: `Elinde overpair var. Flop ve turn'de value bet attın. River geldi: ${item}. Rakip check.`,
    prompt: "Kalanı value için jam eder misin?",
    answers: ["bet", "check"],
    answerLabels: { bet: "Jam (value)", check: "Check (jam yok)" },
    correct: "check",
    note: `Kitap 11.4: burada ASLA jam etme — jam value ancak senden zayıf bir el ödeyecekse vardır. Kötü river'da küçük pota check-call, büyük pota check-fold.`,
    table: null,
    catalog: items,
    source: "11.4",
  };
}

const TURN_GENS = [qTurnBarrel, qDrawTurn];
const RIVER_GENS = [qRiverSize, qBadRiver];

/** Seçilen street için bir postflop sorusu üretir ("all" turn + river karışır). */
export function postflopQuestion(street: "all" | PostflopStreet): PostflopQuestion | null {
  const gens =
    street === "turn" ? TURN_GENS : street === "river" ? RIVER_GENS : [...TURN_GENS, ...RIVER_GENS];
  for (const g of [...gens].sort(() => Math.random() - 0.5)) {
    const q = g();
    if (q) return q;
  }
  return null;
}
