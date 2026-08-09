// Range Quiz motoru — TAMAMEN offline, kitaba sadık. Doğru cevap rangeGroups()'tan
// (yani content/poker_cep_kitabi_v4.md 4.3) türetilir; hiçbir el uydurulmaz.
import { rangeGroups } from "../../content/curriculum";
import { parseRange, cellCode } from "../../lib/handgrid";

export type QAction = "3bet" | "call" | "fold";

export interface Question {
  opener: string; // "UTG", "LJ/HJ"...
  position: string; // "CO", "BTN"...
  hand: string; // "A5s"
  correct: QAction;
  value: string; // reveal grid
  blof: string;
  flat: string; // reveal grid (flat)
  note: string; // kısa açıklama (kitaba dayalı)
}

// 169 el kodu (bir kez)
const ALL: string[] = [];
for (let r = 0; r < 13; r++) for (let c = 0; c < 13; c++) ALL.push(cellCode(r, c));

// Grubun flat metnini derle: "Flat ...:" etiketini at; derinliğe KOŞULLU cümleleri
// (150bb+/200bb+ "... eklenir") ve grid'e açılamayan "ve tüm/çoğu ..." prose kuyruğunu
// çıkar — 100bb baz listesini bırak. Kitaptan hiçbir el uydurulmaz; koşullu/prose olanlar
// cell'e çevrilmez, not olarak kalır.
export function flatText(flats: string[]): string {
  return flats
    .map((f) => {
      let body = f.includes(":") ? f.slice(f.indexOf(":") + 1) : f;
      body = body
        .split(/\.\s+/)
        .filter((sent) => !/\d{2,3}\s*bb|\bise\b|eklenir/i.test(sent))
        .join(". ");
      return body.replace(/\s+ve\s+(tüm|çoğu)\b.*$/i, "").trim();
    })
    .filter(Boolean)
    .join(", ");
}

// Bir flat satırının kitapta hangi pozisyonları kapsadığını etiketten çöz:
// "yalnız IP"/"IP (CO/BTN)" → CO,BTN; "BTN flat" → BTN; "SB flat"/"BB flat" → o blind.
export function flatScope(label: string): string[] {
  const l = label.toLowerCase();
  if (l.includes("bb flat")) return ["BB"];
  if (l.includes("sb flat")) return ["SB"];
  if (l.includes("btn flat")) return ["BTN"];
  if (l.includes("co/btn") || /\bip\b/.test(l)) return ["CO", "BTN"];
  return ["CO", "BTN"]; // etiketsiz "Flat:" → kitapta flat kavramı IP'ye ait (Bölüm 4.4)
}

function pick<T>(arr: T[]): T {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function nextQuestion(weak?: { opener: string; position: string }[]): Question | null {
  const groups = rangeGroups().filter((g) => g.table && g.table.rows.length > 0);
  if (!groups.length) return null;

  let g = pick(groups);
  let row = pick(g.table.rows);

  // adaptif: %55 ihtimalle zayıf bir (opener, pozisyon) eşleşmesine yönel
  if (weak && weak.length && Math.random() < 0.55) {
    const w = pick(weak);
    const mg = groups.find((x) => x.opener === w.opener);
    const mr = mg?.table.rows.find((r) => r[0] === w.position);
    if (mg && mr) {
      g = mg;
      row = mr;
    }
  }
  const [position, value, blof] = row;

  const mix = new Set<string>();
  const v = parseRange(value || "", mix);
  const b = parseRange(blof || "");
  const set3 = new Set<string>([...v.cells, ...mix, ...b.cells]);

  // Kitapta flat listeleri pozisyona göre kapsamlıdır (yalnız IP / CO-BTN / BTN / SB / BB).
  // Grup flat'ini tüm satırlara körlemesine uygulamak SB/BB'yi yanlış "call" olarak notlardı
  // (kitap: SB flat = kayıp pozisyon, 3-bet ya fold). Sadece bu pozisyonu kapsayan satırları al.
  const applicableFlats = g.flats.filter((fl) => flatScope(fl).includes(position));
  const ft = flatText(applicableFlats);
  const f = parseRange(ft);
  const setFlat = new Set<string>([...f.cells].filter((c) => !set3.has(c)));

  // "BB flat: çok geniş" gibi prose flat grid'e açılmaz. O pozisyonda fold havuzu kitabın
  // geniş flat ellerini yanlışlıkla "fold" olarak notlar → fold sorusu üretme (yalnız 3-bet/blöf).
  const flatWide = setFlat.size === 0 && /geniş|tüm|çoğu/i.test(ft);

  const pool3 = [...set3];
  const poolFlat = [...setFlat];
  const poolFold = flatWide ? [] : ALL.filter((c) => !set3.has(c) && !setFlat.has(c));

  // ağırlıklı kategori seçimi (boş havuzları atla)
  const bag: QAction[] = [];
  if (pool3.length) bag.push("3bet", "3bet", "3bet");
  if (poolFlat.length) bag.push("call", "call");
  if (poolFold.length) bag.push("fold", "fold");
  const cat = pick(bag);

  const hand =
    cat === "3bet" ? pick(pool3) : cat === "call" ? pick(poolFlat) : pick(poolFold);

  const note =
    cat === "3bet"
      ? set3.has(hand) && mix.has(hand)
        ? "Karışım (bazen 3-bet) — kitap value satırında karışım işaretli."
        : b.cells.has(hand) && !v.cells.has(hand)
          ? "Blöf 3-bet — kitabın blöf satırında."
          : "Value 3-bet — kitabın value satırında."
      : cat === "call"
        ? "Flat / call — kitabın bu açılışa flat listesinde."
        : "3-bet aralığı dışında — flat listesinde de yok → fold.";

  return { opener: g.opener, position, hand, correct: cat, value, blof, flat: ft, note };
}

export const ACTION_LABEL: Record<QAction, string> = {
  "3bet": "3-bet",
  call: "Call",
  fold: "Fold",
};
