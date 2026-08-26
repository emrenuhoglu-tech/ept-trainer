import { useState } from "react";
import { load, save } from "../../lib/storage";

// ICM Kartım — Bölüm 12'nin BİLEREK boş bırakılan kartlarının doldurulabilir hâli:
// 12.3 ladder "(doldur — lobiden)" + 12.5 <15bb jam kartı "(kalibre et — ICMIZER)".
// Kitaptan hiçbir aralık/eşik üretilmez — yalnız SENİN girdiğin değerler localStorage'da durur.
// ≤6 satır sınırı kitabın karakteridir: tam Nash tablosu YAZILMAZ (12.5).

interface LadderRow {
  sira: string;
  odul: string;
}

// Ödül metnini sayıya çevir ($, K/M/B, virgül, "+" toleranslı) — yalnız SENİN girdiğin değerler.
function money(s: string): number | null {
  const m = s.replace(/[\s,$€]/g, "").match(/^([0-9]*\.?[0-9]+)([kmb]?)\+?$/i);
  if (!m) return null;
  let n = parseFloat(m[1]);
  const suf = m[2].toLowerCase();
  if (suf === "k") n *= 1e3;
  else if (suf === "m") n *= 1e6;
  else if (suf === "b") n *= 1e9;
  return n;
}
function fmtMoney(n: number): string {
  if (n >= 1e6) return "$" + (n / 1e6).toFixed(n >= 1e7 ? 1 : 2).replace(/\.?0+$/, "") + "M";
  if (n >= 1e3) return "$" + Math.round(n / 1e3) + "K";
  return "$" + Math.round(n);
}

interface JamRow {
  poz: string;
  chipev: string;
  icm: string;
}

const JAM_MAX = 6;
// 12.5: "yalnız BTN/SB/BB + 'ilk giren'" — satır etiketleri kitabın kendisinden.
const JAM_SEED: JamRow[] = [
  { poz: "BTN", chipev: "", icm: "" },
  { poz: "SB", chipev: "", icm: "" },
  { poz: "BB", chipev: "", icm: "" },
];

const INPUT =
  "w-full rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent";

export function IcmCard({ onDone }: { onDone: () => void }) {
  const [ladder, setLadder] = useState<LadderRow[]>(() =>
    load<LadderRow[]>("icm:ladder", [{ sira: "", odul: "" }]),
  );
  const [jam, setJam] = useState<JamRow[]>(() => load<JamRow[]>("icm:jam", JAM_SEED));

  function setL(next: LadderRow[]) {
    setLadder(next);
    save("icm:ladder", next);
  }
  function setJ(next: JamRow[]) {
    setJam(next);
    save("icm:jam", next);
  }
  function upL(i: number, k: keyof LadderRow, v: string) {
    setL(ladder.map((r, j) => (j === i ? { ...r, [k]: v } : r)));
  }
  function upJ(i: number, k: keyof JamRow, v: string) {
    setJ(jam.map((r, j) => (j === i ? { ...r, [k]: v } : r)));
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Referans
        </button>
        <span className="font-semibold text-neutral-100">🧮 ICM Kartım</span>
        <span className="w-12" />
      </div>

      <p className="text-[13px] leading-relaxed text-neutral-400">
        Kitap bu kartları BİLEREK boş bırakır: ladder lobiden okunur (12.3), jam kartı ICMIZER ile
        kalibre edilir (12.5). Buraya yalnız kendi girdiğin değerler kaydedilir — uydurma eşik yok.
      </p>

      <section className="card space-y-2 p-4">
        <h2 className="text-sm font-semibold text-neutral-100">Ödeme merdiveni (12.3)</h2>
        <p className="text-xs text-neutral-500">
          Jump stack'ine oranla BÜYÜKSE ve masada senden kısa varsa: bekle, ladder'la. Mikroysa chipEV.
          Ödülleri sırayla gir (üst = yüksek); bir üst sıraya sıçrama ($ + %) otomatik hesaplanır.
        </p>
        <div className="grid grid-cols-[0.8fr_1.3fr_1.5fr_auto] gap-1.5 text-xs text-neutral-500">
          <span>Sıra</span>
          <span>Ödül</span>
          <span>↑ Sıçrama</span>
          <span className="w-6" />
        </div>
        {ladder.map((r, i) => {
          // Bu sıra ile bir üst sıra (daha yüksek ödül) arasındaki sıçrama = yukarı çıkmanın $ değeri.
          const cur = money(r.odul);
          const up = i > 0 ? money(ladder[i - 1].odul) : null;
          const jump = cur != null && up != null ? Math.abs(up - cur) : null;
          const base = cur != null && up != null ? Math.min(cur, up) : null;
          const pct = jump != null && base ? Math.round((jump / base) * 100) : null;
          return (
            <div key={i} className="grid grid-cols-[0.8fr_1.3fr_1.5fr_auto] items-center gap-1.5">
              <input value={r.sira} onChange={(e) => upL(i, "sira", e.target.value)} placeholder="(doldur)" className={INPUT} />
              <input value={r.odul} onChange={(e) => upL(i, "odul", e.target.value)} placeholder="(doldur)" className={INPUT} />
              <span
                className={
                  "px-1 text-xs tabular-nums " + (jump == null ? "text-neutral-600" : "text-neutral-300")
                }
              >
                {jump == null ? "—" : `+${fmtMoney(jump)} (+${pct}%)`}
              </span>
              <button
                aria-label="Satırı sil"
                onClick={() => setL(ladder.filter((_, j) => j !== i))}
                className="w-6 text-neutral-500"
              >
                ✕
              </button>
            </div>
          );
        })}
        <button
          onClick={() => setL([...ladder, { sira: "", odul: "" }])}
          className="btn-ghost w-full py-2 text-sm"
        >
          + Satır ekle
        </button>
      </section>

      <section className="card space-y-2 p-4">
        <h2 className="text-sm font-semibold text-neutral-100">&lt;15bb jam kartı (12.5)</h2>
        <p className="text-xs text-neutral-500">
          Yalnız BTN/SB/BB + "ilk giren". Maks {JAM_MAX} satır — tam Nash tablosu yazılmaz,
          "molada bakılır" karakteri korunur.
        </p>
        <div className="grid grid-cols-[0.7fr_1.4fr_1.4fr_auto] gap-1.5 text-xs text-neutral-500">
          <span>Poz.</span>
          <span>chipEV jam</span>
          <span>ICM düzeltme</span>
          <span className="w-6" />
        </div>
        {jam.map((r, i) => (
          <div key={i} className="grid grid-cols-[0.7fr_1.4fr_1.4fr_auto] items-center gap-1.5">
            <input value={r.poz} onChange={(e) => upJ(i, "poz", e.target.value)} placeholder="BTN" className={INPUT} />
            <input
              value={r.chipev}
              onChange={(e) => upJ(i, "chipev", e.target.value)}
              placeholder="(kalibre et — ICMIZER)"
              className={INPUT}
            />
            <input
              value={r.icm}
              onChange={(e) => upJ(i, "icm", e.target.value)}
              placeholder="(kalibre et — ICMIZER)"
              className={INPUT}
            />
            <button
              aria-label="Satırı sil"
              onClick={() => setJ(jam.filter((_, j) => j !== i))}
              className="w-6 text-neutral-500"
            >
              ✕
            </button>
          </div>
        ))}
        {jam.length < JAM_MAX && (
          <button
            onClick={() => setJ([...jam, { poz: "", chipev: "", icm: "" }])}
            className="btn-ghost w-full py-2 text-sm"
          >
            + Satır ekle ({jam.length}/{JAM_MAX})
          </button>
        )}
      </section>
    </div>
  );
}
