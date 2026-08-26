// Hatırlama (Range Recall) motoru — TAMAMEN offline, kitaba sadık. İki eksen:
// derinlik × (açan / pozisyon). Yalnız kitabın SOMUT bantları drill edilir:
// 100bb+ (Bölüm 4: 3-bet/call, 4-bet cevabı, squeeze) ve 25–30bb (Bölüm 5: açılış,
// jam, jam'e call). 40–100bb ve <25bb kitapta yönseldir (el listesi yok) → drill YOK.
// Doğru cevaplar HER ZAMAN curriculum getter'larından türetilir; hiçbir el uydurulmaz.
import {
  rangeGroups,
  fourBetRanges,
  squeezeRange,
  openRanges,
  jamRanges,
  jamCallRange,
} from "../../content/curriculum";
import { parseRange, cellCode } from "../../lib/handgrid";
import { flatText, flatScope } from "./quizEngine";
import { load, save } from "../../lib/storage";

export type RecallDepth = "derin" | "kisa";
export type RecallAction = "3bet" | "4bet" | "squeeze" | "acis" | "jam" | "jamcall";
export type RecallAnswer = "3bet" | "call" | "fold" | "4bet" | "value" | "blof" | "acis" | "jam";

export const DEPTH_ACTIONS: Record<RecallDepth, RecallAction[]> = {
  derin: ["3bet", "4bet", "squeeze"],
  kisa: ["acis", "jam", "jamcall"],
};

export interface RecallSel {
  depth: RecallDepth;
  action: RecallAction;
  openerIdx: number; // 3bet: rangeGroups; acis: openRanges; jam: jamRanges indexi
  posIdx: number; // yalnız 3bet: grup içindeki satır (hero pozisyonu)
}

export interface RecallQuestion {
  kavram: string; // parse edilebilir anahtar: recall:derin:UTG→BTN, recall:kisa:jam→... vb.
  hand: string;
  correct: RecallAnswer;
  answers: RecallAnswer[]; // gösterilecek butonlar
  value: string; // reveal grid girdileri — kitap metni olduğu gibi
  blof: string;
  flat: string;
  note: string; // kitaba dayalı kısa açıklama
}

// 169 el kodu (bir kez)
const ALL: string[] = [];
for (let r = 0; r < 13; r++) for (let c = 0; c < 13; c++) ALL.push(cellCode(r, c));

// Anti-ezber (ScenarioQuiz'in seen-map deseni): aynı spotta en az gösterilen eli seç.
const SEEN_KEY = "recall:seen";
type SeenMap = Record<string, number>;
function pickLeastSeen(kavram: string, pool: string[]): string {
  const seen = load<SeenMap>(SEEN_KEY, {});
  const count = (h: string) => seen[`${kavram}|${h}`] ?? 0;
  const min = Math.min(...pool.map(count));
  const fresh = pool.filter((h) => count(h) === min);
  const hand = fresh[Math.floor(Math.random() * fresh.length)];
  seen[`${kavram}|${hand}`] = count(hand) + 1;
  save(SEEN_KEY, seen);
  return hand;
}

interface Cat {
  cat: RecallAnswer;
  pool: string[];
  w: number;
}

// Ağırlıklı kategori seçimi (quizEngine'in 3:2:2 deseni) — boş havuzlar atlanır.
function weighted(cats: Cat[]): Cat | null {
  const avail = cats.filter((c) => c.pool.length > 0);
  if (!avail.length) return null;
  const bag: Cat[] = [];
  for (const c of avail) for (let i = 0; i < c.w; i++) bag.push(c);
  return bag[Math.floor(Math.random() * bag.length)];
}

// Fold havuzu SADAKAT bekçisi: aralıkta parse edilemeyen prose not varsa, o prose'un
// kapsadığı eller yanlışlıkla "fold" notlanabilir → fold sorusu üretme. Tek güvenli
// istisna "tüm A-x" (Bölüm 5.1 BTN): As içermeyen eller yine kesin fold'dur.
function safeFoldPool(taken: Set<string>, notes: string[]): string[] {
  const rest = ALL.filter((c) => !taken.has(c));
  if (!notes.length) return rest;
  if (notes.every((n) => /\bA[-–]?x\b/i.test(n))) return rest.filter((c) => c[0] !== "A");
  return [];
}

// ---- 100bb+ · 3-bet / call / fold (Bölüm 4.3) — quizEngine ile birebir aynı havuz kurulumu ----
function q3bet(sel: RecallSel): RecallQuestion | null {
  const groups = rangeGroups().filter((g) => g.table && g.table.rows.length > 0);
  if (!groups.length) return null;
  const g = groups[Math.min(sel.openerIdx, groups.length - 1)];
  const row = g.table.rows[Math.min(sel.posIdx, g.table.rows.length - 1)];
  const [position, value, blof] = row;

  const mix = new Set<string>();
  const v = parseRange(value || "", mix);
  const b = parseRange(blof || "");
  const set3 = new Set<string>([...v.cells, ...mix, ...b.cells]);
  const applicableFlats = g.flats.filter((fl) => flatScope(fl).includes(position));
  const ft = flatText(applicableFlats);
  const f = parseRange(ft);
  const setFlat = new Set<string>([...f.cells].filter((c) => !set3.has(c)));
  // Geniş-prose flat (ör. "…ve tüm 65s+ suited connector'lar") grid'e açılamaz ve flatText
  // tarafından atılır → kapsadığı eller yanlışlıkla fold havuzuna düşerdi. HAM flat metninde
  // geniş işareti varsa fold sorusu üretme. Ayrıca BB'nin ayrı flat listesi olmayan açılışlarda
  // (UTG/LJ-HJ/CO→BB) kitap "BB flat çok geniş" der → fold üretme (JJ/TT/AQs 'fold' notlanmasın).
  // quizEngine.buildPools ile birebir aynı guard — sadakat.
  const flatWide =
    (position === "BB" && applicableFlats.length === 0) ||
    /geniş|tüm|çoğu/i.test(applicableFlats.join(" "));
  const poolFold = flatWide ? [] : ALL.filter((c) => !set3.has(c) && !setFlat.has(c));

  const kavram = `recall:derin:${g.opener}→${position}`;
  const c = weighted([
    { cat: "3bet", pool: [...set3], w: 3 },
    { cat: "call", pool: [...setFlat], w: 2 },
    { cat: "fold", pool: poolFold, w: 2 },
  ]);
  if (!c) return null;
  const hand = pickLeastSeen(kavram, c.pool);
  const note =
    c.cat === "3bet"
      ? mix.has(hand)
        ? "Karışım (bazen 3-bet) — kitap value satırında karışım işaretli."
        : b.cells.has(hand) && !v.cells.has(hand)
          ? "Blöf 3-bet — kitabın blöf satırında."
          : "Value 3-bet — kitabın value satırında."
      : c.cat === "call"
        ? "Flat / call — kitabın bu açılışa flat listesinde."
        : "3-bet aralığı dışında — flat listesinde de yok → fold.";
  return { kavram, hand, correct: c.cat, answers: ["3bet", "call", "fold"], value, blof, flat: ft, note };
}

// ---- 100bb+ · 3-bet'e cevabın: 4-bet / call / fold (Bölüm 4.5) ----
function q4bet(): RecallQuestion | null {
  const fb = fourBetRanges();
  if (!fb) return null;
  const mix = new Set<string>();
  const v = parseRange(fb.value, mix);
  const b = parseRange(fb.blof);
  const set4 = new Set<string>([...v.cells, ...mix, ...b.cells]);
  const fl = parseRange(fb.flat);
  const setFlat = new Set<string>([...fl.cells].filter((c) => !set4.has(c)));
  // Fold: yalnız kitabın fold satırında AÇIKÇA adlandırılan eller (":" ile "—" arası).
  // Havuz 169'a genişletilmez — 100bb+ açılış aralığı kitapta liste değil; "sen açtın"
  // öncülü rastgele bir eli desteklemez.
  const seg = fb.foldNote.split("—")[0];
  const foldTxt = seg.includes(":") ? seg.slice(seg.indexOf(":") + 1) : "";
  const setFold = new Set<string>(
    [...parseRange(foldTxt).cells].filter((c) => !set4.has(c) && !setFlat.has(c)),
  );

  const kavram = "recall:derin:4bet";
  const c = weighted([
    { cat: "4bet", pool: [...set4], w: 3 },
    { cat: "call", pool: [...setFlat], w: 2 },
    { cat: "fold", pool: [...setFold], w: 2 },
  ]);
  if (!c) return null;
  const hand = pickLeastSeen(kavram, c.pool);
  const note =
    c.cat === "4bet"
      ? mix.has(hand)
        ? "Karışım — geç pozisyon 3-bet'ine evet, UTG'ye hayır (Bölüm 4.5)."
        : b.cells.has(hand) && !v.cells.has(hand)
          ? "Blöf 4-bet — canlıda ÇOK seyrek (Bölüm 4.5)."
          : "4-bet value — kitabın 4.5 tablosunda."
      : c.cat === "call"
        ? "Flat — kitapta IP + 150bb+ şartıyla (Bölüm 4.5)."
        : "Kitabın fold satırında: OOP offsuit broadway'ler 3-bet'e karşı çöp (Bölüm 4.5).";
  return {
    kavram,
    hand,
    correct: c.cat,
    answers: ["4bet", "call", "fold"],
    value: fb.value,
    blof: fb.blof,
    flat: fb.flat,
    note,
  };
}

// ---- 100bb+ · Squeeze: value mi blöf mü? (Bölüm 4.6) ----
// Kitap 4.6'da fold/coldcall listesi VERMEZ → fold sorusu üretilmez (sadakat).
// Drill: elin kitabın VALUE listesinde mi BLÖF listesinde mi olduğunu geri çağır.
function qSqueeze(): RecallQuestion | null {
  const sq = squeezeRange();
  if (!sq) return null;
  const v = parseRange(sq.value);
  const b = parseRange(sq.blof);
  const poolB = [...b.cells].filter((c) => !v.cells.has(c));
  const kavram = "recall:derin:squeeze";
  const c = weighted([
    { cat: "value", pool: [...v.cells], w: 1 },
    { cat: "blof", pool: poolB, w: 1 },
  ]);
  if (!c) return null;
  const hand = pickLeastSeen(kavram, c.pool);
  const note =
    c.cat === "value"
      ? "Squeeze VALUE listesinde (Bölüm 4.6) · boyut 4.5× IP, blinds'ten 5×+."
      : "Squeeze BLÖF listesinde — blocker + oynanabilirlik (Bölüm 4.6).";
  return {
    kavram,
    hand,
    correct: c.cat,
    answers: ["value", "blof"],
    value: sq.value,
    blof: sq.blof,
    flat: "",
    note,
  };
}

// ---- 25–30bb · Açılış: aç / fold (Bölüm 5.1) ----
function qOpen(sel: RecallSel): RecallQuestion | null {
  const rows = openRanges();
  if (!rows.length) return null;
  const r = rows[Math.min(sel.openerIdx, rows.length - 1)];
  const p = parseRange(r.range);
  if (!p.cells.size) return null;
  const kavram = `recall:kisa:acis→${r.position}`;
  const c = weighted([
    { cat: "acis", pool: [...p.cells], w: 3 },
    { cat: "fold", pool: safeFoldPool(p.cells, p.notes), w: 2 },
  ]);
  if (!c) return null;
  const hand = pickLeastSeen(kavram, c.pool);
  const note =
    c.cat === "acis"
      ? "Bu pozisyonun 25–30bb açılış aralığında (Bölüm 5.1) · boyut 2–2.2×."
      : "Açılış aralığının dışında (Bölüm 5.1) → fold.";
  return { kavram, hand, correct: c.cat, answers: ["acis", "fold"], value: r.range, blof: "", flat: "", note };
}

// ---- 25–30bb · Açılışa karşı: jam / fold (Bölüm 5.2 — bu bantta FLAT YOK) ----
function qJam(sel: RecallSel): RecallQuestion | null {
  const rows = jamRanges();
  if (!rows.length) return null;
  const r = rows[Math.min(sel.openerIdx, rows.length - 1)];
  const p = parseRange(r.range);
  if (!p.cells.size) return null;
  const kavram = `recall:kisa:jam→${r.vs}`;
  const c = weighted([
    { cat: "jam", pool: [...p.cells], w: 3 },
    { cat: "fold", pool: safeFoldPool(p.cells, p.notes), w: 2 },
  ]);
  if (!c) return null;
  const hand = pickLeastSeen(kavram, c.pool);
  const note =
    c.cat === "jam"
      ? "Jam aralığında (Bölüm 5.2) — bu bantta 3-bet = commit, doğrudan all-in."
      : "Jam aralığının dışında — bu bantta flat de yok (Bölüm 5.2) → fold.";
  return { kavram, hand, correct: c.cat, answers: ["jam", "fold"], value: r.range, blof: "", flat: "", note };
}

// ---- 25–30bb · Jam'e karşı: call / fold (Bölüm 5.3) ----
function qJamCall(): RecallQuestion | null {
  const jc = jamCallRange();
  if (!jc) return null;
  const p = parseRange(jc);
  if (!p.cells.size) return null;
  const kavram = "recall:kisa:jamcall";
  const c = weighted([
    { cat: "call", pool: [...p.cells], w: 3 },
    { cat: "fold", pool: safeFoldPool(p.cells, p.notes), w: 2 },
  ]);
  if (!c) return null;
  const hand = pickLeastSeen(kavram, c.pool);
  const note =
    c.cat === "call"
      ? "Jam'e call sınırının içinde (Bölüm 5.3)."
      : "Sınırın altı 28bb'de call değil — ya jam'i sen yaparsın ya fold (Bölüm 5.3).";
  return { kavram, hand, correct: c.cat, answers: ["call", "fold"], value: jc, blof: "", flat: "", note };
}

export function recallQuestion(sel: RecallSel): RecallQuestion | null {
  if (sel.depth === "derin") {
    if (sel.action === "4bet") return q4bet();
    if (sel.action === "squeeze") return qSqueeze();
    return q3bet(sel);
  }
  if (sel.action === "jam") return qJam(sel);
  if (sel.action === "jamcall") return qJamCall();
  return qOpen(sel);
}
