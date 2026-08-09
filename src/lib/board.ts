// Board doku/draw analizi — nesnel kart matematiği (GTO yorumu değil).
// Sadece suit'i belli kartlardan hesaplar; el kodu / kapalı kart varsa atlar.

const RVAL: Record<string, number> = {
  A: 14, K: 13, Q: 12, J: 11, T: 10, "9": 9, "8": 8, "7": 7, "6": 6, "5": 5, "4": 4, "3": 3, "2": 2,
};
const SUIT_SYM: Record<string, string> = { s: "♠", h: "♥", d: "♦", c: "♣" };

export interface Chip {
  label: string;
  wet: boolean; // ıslak (flush/bağlantılı) → amber; kuru → nötr
}

export function boardTexture(spec: string): Chip[] {
  const cards = spec
    .trim()
    .split(/[\s,]+/)
    .map((t) => t.match(/^([AKQJT2-9])([shdc])$/i))
    .filter(Boolean)
    .map((m) => ({ r: RVAL[m![1].toUpperCase()], s: m![2].toLowerCase() }));
  if (cards.length < 3) return [];

  const chips: Chip[] = [];

  // suit dokusu
  const bySuit: Record<string, number> = {};
  for (const c of cards) bySuit[c.s] = (bySuit[c.s] || 0) + 1;
  const [topSuit, topCount] = Object.entries(bySuit).sort((a, b) => b[1] - a[1])[0];
  if (topCount >= 3) chips.push({ label: `üç ${SUIT_SYM[topSuit]} — flush board`, wet: true });
  else if (topCount === 2) chips.push({ label: `iki ${SUIT_SYM[topSuit]} — flush draw'lı`, wet: true });
  else chips.push({ label: "rainbow", wet: false });

  // eşli
  const rc: Record<number, number> = {};
  for (const c of cards) rc[c.r] = (rc[c.r] || 0) + 1;
  if (Object.values(rc).some((n) => n >= 2)) chips.push({ label: "eşli", wet: false });

  // bağlantı (kent'li): rütbe açıklığı dar mı
  const ranks = [...new Set(cards.map((c) => c.r))].sort((a, b) => a - b);
  const span = ranks[ranks.length - 1] - ranks[0];
  if (span <= 4) chips.push({ label: "bağlantılı — kent'li", wet: true });
  else if (span >= 7) chips.push({ label: "kuru", wet: false });

  return chips;
}
