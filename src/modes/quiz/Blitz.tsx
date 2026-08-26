import { useEffect, useState } from "react";
import { recallQuestion, type RecallQuestion } from "./recallEngine";
import { HandGlyph } from "../../components/Cards";
import { RangeGrid } from "../../components/RangeGrid";
import { recordQuiz } from "../../lib/progress";
import { recordResult } from "../../lib/karne";

// Blitz: 25–30bb jam bandında (Bölüm 5.2) SNAP jam/fold — 5 sn saat + seri.
// Tüm poker verisi recallQuestion'dan gelir (kitap aralıkları); burada sadece saat + seri var.
const CLOCK = 5;
type Pick = "jam" | "fold" | "timeout";

function nextQ(): RecallQuestion | null {
  // 3 "vs" satırından rastgele: erken / CO-BTN / chip-leader açılışı (Bölüm 5.2).
  const openerIdx = Math.floor(Math.random() * 3);
  return recallQuestion({ depth: "kisa", action: "jam", openerIdx, posIdx: 0 });
}

export function Blitz() {
  const [q, setQ] = useState<RecallQuestion | null>(() => nextQ());
  const [chosen, setChosen] = useState<Pick | null>(null);
  const [left, setLeft] = useState(CLOCK);
  const [streak, setStreak] = useState(0);
  const [best, setBest] = useState(0);

  const answered = chosen !== null;
  const correct = !!q && chosen === q.correct;
  const vs = q ? q.kavram.split("→")[1] ?? "" : "";

  function answer(a: Pick) {
    if (answered || !q) return;
    setChosen(a);
    const ok = a === q.correct;
    recordQuiz(ok);
    recordResult({
      kavram: q.kavram.replace(/^recall:/, "blitz:"),
      soru_ozeti: `${vs} · ${q.hand} — snap jam/fold`,
      sonuc: ok ? "correct" : "wrong",
      not: q.note,
    });
    setStreak((s) => {
      const n = ok ? s + 1 : 0;
      setBest((b) => (n > b ? n : b));
      return n;
    });
  }

  // Snap saati: süre biterse "donma" = yanlış (masada saat işler).
  useEffect(() => {
    if (answered) return;
    setLeft(CLOCK);
    const id = setInterval(() => {
      setLeft((l) => {
        if (l <= 1) {
          clearInterval(id);
          answer("timeout");
          return 0;
        }
        return l - 1;
      });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [q, answered]);

  function again() {
    setChosen(null);
    setQ(nextQ());
  }

  if (!q) {
    return <div className="p-6 text-sm text-neutral-400">Jam bandı verisi yüklenemedi (Bölüm 5.2).</div>;
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-500">⚡ 25–30bb · snap jam/fold</span>
        <span className="text-neutral-400">🔥 seri {streak} · en iyi {best}</span>
      </div>

      {!answered && (
        <div className="flex items-center gap-2">
          <span className={"text-xs font-semibold " + (left <= 2 ? "text-red-400" : "text-accent")}>
            ⏱ {left}s
          </span>
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-surface-3">
            <div
              className={"h-full rounded-full " + (left <= 2 ? "bg-red-400" : "bg-accent")}
              style={{ width: `${(left / CLOCK) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div key={`${vs}-${q.hand}`} className="card anim-fade p-4">
        <div className="text-sm text-neutral-400">
          Açan: <span className="font-semibold text-accent">{vs}</span>
        </div>
        <div className="mt-3 flex items-center gap-3">
          <HandGlyph code={q.hand} size="lg" />
          <div className="text-sm text-neutral-400">Elin. JAM mı FOLD mu?</div>
        </div>
      </div>

      {!answered && (
        <div className="grid grid-cols-2 gap-2">
          <button onClick={() => answer("jam")} className="btn-ghost py-4 text-base font-semibold">
            🟢 JAM
          </button>
          <button onClick={() => answer("fold")} className="btn-ghost py-4 text-base font-semibold">
            ⚪ FOLD
          </button>
        </div>
      )}

      {answered && (
        <div className="flex flex-col gap-3">
          <div
            className={
              "rounded-xl px-4 py-3 text-sm font-medium " +
              (correct
                ? "bg-emerald-500/15 text-emerald-300 ring-1 ring-emerald-500/40"
                : "bg-red-500/15 text-red-300 ring-1 ring-red-500/40")
            }
          >
            {correct
              ? "✓ Doğru — "
              : chosen === "timeout"
                ? "⏱ Donma — süre doldu. "
                : `✗ Yanlış — sen ${chosen === "jam" ? "JAM" : "FOLD"} dedin. `}
            Doğru: <b>{q.correct === "jam" ? "JAM" : "FOLD"}</b>. {q.note}
          </div>

          <div className="card p-3">
            <div className="mb-2 text-sm font-semibold text-neutral-100">{vs} · jam aralığı (Bölüm 5.2)</div>
            <RangeGrid value={q.value} highlight={q.hand} valueLabel="Jam" />
          </div>

          <button onClick={again} className="btn-accent py-3 text-base">
            Sonraki el →
          </button>
        </div>
      )}
    </div>
  );
}
