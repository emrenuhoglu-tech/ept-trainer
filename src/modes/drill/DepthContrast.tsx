import { useState } from "react";
import { recordPractice } from "../../lib/progress";

// Derinlik-kontrast çiftleri: AYNI spot, stack derinliği doğru aksiyonu ÇEVİRİR.
// İçerik adversarial verify'dan geçti (poker-doğruluk + book anchor). Sayılar temsili.
interface Leg {
  bb: string; // "25bb"
  tag: string; // "sığ" / "derin"
  options: [string, string];
  correct: number;
  action: string; // kontrast satırındaki kısa etiket
}
interface DepthPair {
  spot: string;
  shallow: Leg;
  deep: Leg;
  flip: string;
  chapter: number; // #/referans/bolum/N
}

const PAIRS: DepthPair[] = [
  {
    spot: "Soft saha, ICM baskısı yok. Marjinal +EV bir flip önünde.",
    shallow: { bb: "25bb", tag: "sığ", options: ["Pas geç", "Al"], correct: 1, action: "AL" },
    deep: { bb: "80bb", tag: "derin", options: ["Pas geç", "Al"], correct: 0, action: "PAS" },
    flip: "Derinlik edge-realize alanıdır (B24.2): derinde marjinal variance'a girme (pas); sığda outplay alanı yok → +EV'yi al.",
    chapter: 24,
  },
  {
    spot: "A5s, CO. Katlanmış masaya ilk giren sensin.",
    shallow: { bb: "12bb", tag: "sığ", options: ["Min-raise aç", "Jam"], correct: 1, action: "JAM" },
    deep: { bb: "60bb", tag: "derin", options: ["Min-raise aç", "Jam"], correct: 0, action: "AÇ" },
    flip: "Sığda jam (fold equity + kısa stack postflop realize edemez); derinde aç, postflop oyna. <15bb ilk-giren = push/fold bölgesi (B12).",
    chapter: 12,
  },
  {
    spot: "55, BTN. UTG (erken) 2.2bb açtı, sana geldi.",
    shallow: { bb: "15bb", tag: "sığ", options: ["Call (set ara)", "Jam ya da fold"], correct: 1, action: "JAM/FOLD" },
    deep: { bb: "80bb", tag: "derin", options: ["Call (set ara)", "Jam ya da fold"], correct: 0, action: "CALL" },
    flip: "Küçük per implied odds ister: derinde set-mine call; sığda implied odds yok → jam/fold (derinlik filtresi, B24.2).",
    chapter: 24,
  },
];

type Phase = "shallow" | "deep" | "contrast";

export function DepthContrast() {
  const [i, setI] = useState(0);
  const [phase, setPhase] = useState<Phase>("shallow");
  const [sa, setSa] = useState<number | null>(null);
  const [da, setDa] = useState<number | null>(null);
  const p = PAIRS[i % PAIRS.length];

  function pick(idx: number) {
    if (phase === "shallow") {
      setSa(idx);
      setPhase("deep");
    } else if (phase === "deep") {
      setDa(idx);
      setPhase("contrast");
      recordPractice();
    }
  }
  function next() {
    setI((x) => (x + 1) % PAIRS.length);
    setPhase("shallow");
    setSa(null);
    setDa(null);
  }

  const leg = phase === "deep" ? p.deep : p.shallow;
  const bothOk = sa === p.shallow.correct && da === p.deep.correct;

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-500">🪜 Derinlik kontrastı</span>
        <span className="text-neutral-400">{(i % PAIRS.length) + 1} / {PAIRS.length}</span>
      </div>

      <div className="card p-4">
        <p className="text-[15px] leading-relaxed text-neutral-100">{p.spot}</p>
      </div>

      {phase !== "contrast" ? (
        <>
          <div className="flex items-center gap-2">
            <span className="rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
              {leg.bb} · {leg.tag}
            </span>
            {phase === "deep" && (
              <span className="text-xs text-neutral-500">Aynı spot, şimdi derin. Karar değişir mi?</span>
            )}
          </div>
          <div className="flex flex-col gap-2">
            {leg.options.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => pick(idx)}
                className="btn-ghost justify-start py-3 text-left text-[15px]"
              >
                {opt}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="grid grid-cols-2 gap-2">
            <ContrastCol leg={p.shallow} chosen={sa} />
            <ContrastCol leg={p.deep} chosen={da} />
          </div>
          <div className="rounded-xl border border-accent/40 bg-accent-soft px-4 py-3 text-sm font-medium text-accent">
            🔀 Derinlik cevabı çevirdi: {p.shallow.tag} → <b>{p.shallow.action}</b>, {p.deep.tag} →{" "}
            <b>{p.deep.action}</b>.
          </div>
          <div className="rounded-xl bg-surface-1 px-4 py-3 text-sm leading-relaxed text-neutral-300">
            {p.flip}
          </div>
          <div
            className={
              "rounded-xl px-4 py-2 text-sm font-medium " +
              (bothOk ? "bg-emerald-500/15 text-emerald-300" : "bg-red-500/15 text-red-300")
            }
          >
            {bothOk ? "İkisini de bildin ✓" : "Derinlik seni yakaladı — tekrar bak."}
          </div>
          <a
            href={`#/referans/bolum/${p.chapter}`}
            className="btn-ghost w-full justify-start py-2.5 text-sm"
          >
            📖 Bölüm {p.chapter} — kitaptan oku →
          </a>
          <button onClick={next} className="btn-accent py-3 text-base">
            Sonraki çift →
          </button>
        </>
      )}
    </div>
  );
}

function ContrastCol({ leg, chosen }: { leg: Leg; chosen: number | null }) {
  const ok = chosen === leg.correct;
  return (
    <div className="card p-3">
      <div className="text-xs font-semibold text-accent">{leg.bb} · {leg.tag}</div>
      <div className="mt-1 text-[15px] font-bold text-neutral-100">{leg.action}</div>
      <div className={"mt-1 text-xs " + (ok ? "text-emerald-400" : "text-red-400")}>
        {ok ? "✓ bildin" : "✗ senin: " + (chosen != null ? leg.options[chosen] : "—")}
      </div>
    </div>
  );
}
