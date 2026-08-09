import { useEffect, useMemo, useState } from "react";
import { SCENARIOS, type Scenario } from "./scenarios";
import { recordResult } from "../../lib/karne";
import { recordQuiz } from "../../lib/progress";
import { load, save } from "../../lib/storage";

const SHOT_SECS = 20; // masa modu karar saati
// Masa-modu atmosfer çerçeveleri — stack derinliği KASTEN yok: her senaryo kendi
// derinliğini metninde söylüyor, buraya bb yazmak onunla çelişirdi.
const FRAMES = [
  "Day 2 · bubble'a 2 kişi",
  "Final table · göz önündesin",
  "Day 1 · derin masa",
  "ITM sonrası · chip leader solunda",
];

// Senaryo quiz: kitabın tüm bölümlerinden karar soruları.
// + Güven (reveal öncesi) + hypercorrection (emin-ama-yanlış → aynı kavram yeni kılıkta)
// + varyasyon guard: 2 kez görülen senaryo geri plana atılır (yüzeysel ezberi engeller).
const SEEN_KEY = "scenario:seen";
const CONF = [
  { v: 0.6, label: "%60" },
  { v: 0.8, label: "%80" },
  { v: 0.95, label: "%95" },
];

type SeenMap = Record<string, number>;

function pickScenario(biasKavram?: string): Scenario {
  const seen = load<SeenMap>(SEEN_KEY, {});
  const count = (s: Scenario) => seen[s.q] ?? 0;
  let pool = biasKavram ? SCENARIOS.filter((s) => s.kavram === biasKavram) : SCENARIOS;
  if (!pool.length) pool = SCENARIOS;
  const min = Math.min(...pool.map(count));
  const fresh = pool.filter((s) => count(s) === min);
  return fresh[Math.floor(Math.random() * fresh.length)];
}

function markSeen(q: string) {
  const seen = load<SeenMap>(SEEN_KEY, {});
  seen[q] = (seen[q] ?? 0) + 1;
  save(SEEN_KEY, seen);
}

export function ScenarioQuiz() {
  const [s, setS] = useState<Scenario>(() => pickScenario());
  const [chosen, setChosen] = useState<number | null>(null);
  const [conf, setConf] = useState(0.8);
  const [score, setScore] = useState({ ok: 0, total: 0 });
  const [table, setTable] = useState(false);
  const [left, setLeft] = useState(SHOT_SECS);
  const [frameI, setFrameI] = useState(0);

  const answered = chosen !== null;
  const correct = chosen === s.correct;
  const confWrong = answered && !correct && conf >= 0.8;
  const timedOut = answered && chosen === -1;
  const overseen = useMemo(() => {
    const seen = load<SeenMap>(SEEN_KEY, {});
    return SCENARIOS.every((x) => (seen[x.q] ?? 0) >= 2);
  }, [s]);

  // Masa modu shot-clock: süre biterse karar = yanlış (turnuvada saat işler).
  useEffect(() => {
    if (!table || answered) return;
    setLeft(SHOT_SECS);
    const id = setInterval(() => {
      setLeft((l) => {
        if (l <= 1) {
          clearInterval(id);
          answer(-1);
          return 0;
        }
        return l - 1;
      });
    }, 1000);
    return () => clearInterval(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [table, s, answered]);

  function answer(idx: number) {
    if (answered) return;
    setChosen(idx);
    const ok = idx === s.correct;
    markSeen(s.q);
    setScore((v) => ({ ok: v.ok + (ok ? 1 : 0), total: v.total + 1 }));
    recordQuiz(ok);
    recordResult({
      kavram: s.kavram,
      soru_ozeti: s.q,
      sonuc: ok ? "correct" : "wrong",
      not: s.explain,
      confidence: conf,
    });
  }

  function again() {
    // emin-ama-yanlışsa aynı kavramı farklı kılıkta tekrar sor (hypercorrection)
    const next = pickScenario(confWrong ? s.kavram : undefined);
    setChosen(null);
    setS(next);
    setFrameI((x) => (x + 1) % FRAMES.length);
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-500">{s.source}</span>
        <div className="flex items-center gap-2">
          <button
            onClick={() => setTable((t) => !t)}
            className={
              "rounded-full px-2.5 py-1 text-xs " +
              (table ? "bg-accent text-black font-semibold" : "bg-surface-2 text-neutral-400")
            }
          >
            ⏱ Masa
          </button>
          <span className="text-neutral-400">
            {score.ok}/{score.total}
          </span>
        </div>
      </div>

      {table && !answered && (
        <div className="flex items-center gap-2">
          <span className={"text-xs font-semibold " + (left <= 5 ? "text-red-400" : "text-accent")}>
            ⏱ {left}s
          </span>
          <div className="h-1 flex-1 overflow-hidden rounded-full bg-surface-3">
            <div
              className={"h-full rounded-full " + (left <= 5 ? "bg-red-400" : "bg-accent")}
              style={{ width: `${(left / SHOT_SECS) * 100}%` }}
            />
          </div>
        </div>
      )}

      <div className="card p-4">
        {table && (
          <div className="mb-2 text-xs font-medium text-accent">🎰 {FRAMES[frameI]}</div>
        )}
        <p className="text-[15px] leading-relaxed text-neutral-100">{s.q}</p>
      </div>

      {!answered && (
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-500">Ne kadar eminsin?</span>
          {CONF.map((c) => (
            <button
              key={c.v}
              onClick={() => setConf(c.v)}
              className={
                "rounded-full px-2.5 py-1 text-xs " +
                (conf === c.v ? "bg-accent text-black font-semibold" : "bg-surface-2 text-neutral-400")
              }
            >
              {c.label}
            </button>
          ))}
        </div>
      )}

      <div className="flex flex-col gap-2">
        {s.options.map((opt, idx) => {
          const isCorrect = idx === s.correct;
          const isChosen = idx === chosen;
          let cls = "btn-ghost";
          if (answered && isCorrect) cls = "btn bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-500/50";
          else if (answered && isChosen && !isCorrect)
            cls = "btn bg-red-500/20 text-red-200 ring-1 ring-red-500/50";
          return (
            <button
              key={idx}
              onClick={() => answer(idx)}
              disabled={answered}
              className={cls + " justify-start py-3 text-left text-[15px]"}
            >
              {answered && isCorrect ? "✓ " : answered && isChosen ? "✗ " : ""}
              {opt}
            </button>
          );
        })}
      </div>

      {answered && (
        <>
          {timedOut && (
            <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              ⏱ Süre doldu — karar verememek de bir karardır ve masada kayıptır.
            </div>
          )}
          {confWrong && (
            <div className="rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3 text-sm text-red-200">
              ⚠ <b>%{Math.round(conf * 100)} emindin</b> ama yanlıştı. Masada asla sorgulamayacağın hata sınıfı bu —
              aynı kavramı hemen farklı kılıkta tekrar soracağım.
            </div>
          )}
          <div className="rounded-xl bg-surface-1 px-4 py-3 text-sm leading-relaxed text-neutral-300">
            {correct ? "Doğru. " : "Yanlış. "}
            {s.explain}
          </div>
          {overseen && (
            <div className="rounded-xl bg-accent-soft px-4 py-2 text-xs text-accent">
              Tüm senaryoları en az 2 kez gördün — artık yüzeysel ezber riski var. Bu kavramları
              <b> Drill</b>'de farklı kılıkta çalış (yeni spot üretir).
            </div>
          )}
          <button onClick={again} className="btn-accent py-3 text-base">
            {confWrong ? "Aynı kavram, yeni spot →" : "Sonraki soru →"}
          </button>
        </>
      )}
    </div>
  );
}
