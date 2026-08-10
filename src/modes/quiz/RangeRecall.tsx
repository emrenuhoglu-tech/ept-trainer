import { useLayoutEffect, useMemo, useState } from "react";
import { jamRanges, openRanges, rangeGroups } from "../../content/curriculum";
import { HandGlyph } from "../../components/Cards";
import { RangeGrid } from "../../components/RangeGrid";
import { recordResult } from "../../lib/karne";
import { recordQuiz } from "../../lib/progress";
import {
  DEPTH_ACTIONS,
  recallQuestion,
  type RecallAction,
  type RecallAnswer,
  type RecallDepth,
  type RecallQuestion,
  type RecallSel,
} from "./recallEngine";

// 🧠 Hatırlama drilli — seçtiğin (derinlik × açan/pozisyon) hücresinin aralığını elden
// geri çağır. Yalnız kitabın somut bantları (100bb+ ve 25–30bb) drill edilir; 40–100bb
// ve <25bb yönseldir (kitapta combo listesi yok) → seçici kilitli, drill üretilmez.

const DEPTHS: { id: RecallDepth | "orta" | "cokkisa"; label: string; drill: boolean }[] = [
  { id: "derin", label: "100bb+", drill: true },
  { id: "orta", label: "40–100bb", drill: false },
  { id: "kisa", label: "25–30bb", drill: true },
  { id: "cokkisa", label: "<25bb", drill: false },
];

const ACTION_LABEL: Record<RecallAction, string> = {
  "3bet": "3-bet",
  "4bet": "4-bet cevabı",
  squeeze: "Squeeze",
  acis: "Açılış",
  jam: "Jam",
  jamcall: "Jam'e call",
};

const ANSWER_LABEL: Record<RecallAnswer, string> = {
  "3bet": "3-bet",
  call: "Call",
  fold: "Fold",
  "4bet": "4-bet",
  value: "Value squeeze",
  blof: "Blöf squeeze",
  acis: "Aç",
  jam: "Jam",
};

const CONF = [
  { v: 0.6, label: "%60" },
  { v: 0.8, label: "%80" },
  { v: 0.95, label: "%95" },
];

export function RangeRecall() {
  const [sel, setSel] = useState<RecallSel>({ depth: "derin", action: "3bet", openerIdx: 0, posIdx: 0 });
  const [q, setQ] = useState<RecallQuestion | null>(null);
  // İlk soruyu render sırasında DEĞİL mount'ta üret: recallQuestion → pickLeastSeen localStorage
  // yazar; render fazında yan etki React'te yasaktır (StrictMode'da çift sayımı da önler).
  useLayoutEffect(() => {
    setQ(recallQuestion(sel));
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  const [chosen, setChosen] = useState<RecallAnswer | null>(null);
  const [conf, setConf] = useState(0.8);
  const [score, setScore] = useState({ ok: 0, total: 0 });

  const groups = useMemo(() => rangeGroups().filter((g) => g.table && g.table.rows.length > 0), []);
  const opens = useMemo(() => openRanges(), []);
  const jams = useMemo(() => jamRanges(), []);

  const answered = chosen !== null;
  const correct = answered && q !== null && chosen === q.correct;

  const g = groups[Math.min(sel.openerIdx, Math.max(groups.length - 1, 0))];
  const posRows = g?.table.rows ?? [];
  const posIdx = Math.min(sel.posIdx, Math.max(posRows.length - 1, 0));
  const pos = posRows[posIdx]?.[0] ?? "";
  const openIdx = Math.min(sel.openerIdx, Math.max(opens.length - 1, 0));
  const jamIdx = Math.min(sel.openerIdx, Math.max(jams.length - 1, 0));

  const headline =
    sel.action === "3bet"
      ? `${g?.opener ?? "?"} açtı — sen ${pos}'desin (100bb+).`
      : sel.action === "4bet"
        ? "100bb+ · Sen açtın, GEÇ pozisyon sana 3-bet etti."
        : sel.action === "squeeze"
          ? "100bb+ · Açan + 1 coldcaller — squeeze spotundasın."
          : sel.action === "acis"
            ? `25–30bb · ${opens[openIdx]?.position ?? ""} — önünde kimse yok.`
            : sel.action === "jam"
              ? `25–30bb · Rakip açılışı: ${jams[jamIdx]?.vs ?? ""}.`
              : "25–30bb · Rakip all-in geldi.";

  const revealTitle =
    sel.action === "3bet"
      ? `${pos} · ${g?.opener ?? ""} açılışına 3-bet aralığı`
      : sel.action === "4bet"
        ? "3-bet'e cevabın (Bölüm 4.5)"
        : sel.action === "squeeze"
          ? "Squeeze aralığı (Bölüm 4.6)"
          : sel.action === "acis"
            ? `${opens[openIdx]?.position ?? ""} açılış aralığı (Bölüm 5.1)`
            : sel.action === "jam"
              ? `Jam aralığı — ${jams[jamIdx]?.vs ?? ""} (Bölüm 5.2)`
              : "Jam'e call aralığı (Bölüm 5.3)";

  const gridLabels =
    sel.action === "4bet"
      ? { valueLabel: "4-bet value", blofLabel: "Blöf 4-bet" }
      : sel.action === "squeeze"
        ? { valueLabel: "Squeeze value", blofLabel: "Blöf squeeze" }
        : sel.action === "acis"
          ? { valueLabel: "Açılış" }
          : sel.action === "jam"
            ? { valueLabel: "Jam" }
            : sel.action === "jamcall"
              ? { valueLabel: "Call (jam'e karşı)" }
              : {};

  function update(patch: Partial<RecallSel>) {
    const next = { ...sel, ...patch };
    if (patch.depth !== undefined || patch.action !== undefined) {
      if (!DEPTH_ACTIONS[next.depth].includes(next.action)) next.action = DEPTH_ACTIONS[next.depth][0];
      if (patch.openerIdx === undefined) next.openerIdx = 0;
      next.posIdx = 0;
    }
    if (patch.openerIdx !== undefined && patch.posIdx === undefined) next.posIdx = 0;
    setSel(next);
    setChosen(null);
    setQ(recallQuestion(next));
  }

  function answer(a: RecallAnswer) {
    if (answered || !q) return;
    setChosen(a);
    const ok = a === q.correct;
    setScore((s) => ({ ok: s.ok + (ok ? 1 : 0), total: s.total + 1 }));
    recordQuiz(ok);
    recordResult({
      kavram: q.kavram,
      soru_ozeti: `${headline} ${q.hand}`,
      sonuc: ok ? "correct" : "wrong",
      not: `doğru: ${ANSWER_LABEL[q.correct]}`,
      confidence: conf,
    });
  }

  function again() {
    setChosen(null);
    setQ(recallQuestion(sel));
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-end text-sm">
        <span className="text-neutral-400">
          Seans {score.ok}/{score.total}
        </span>
      </div>

      {/* Derinlik seçici — yalnız kitabın somut bantları drill edilebilir */}
      <div>
        <div className="mb-1 text-[11px] uppercase tracking-wide text-neutral-500">Derinlik</div>
        <div className="grid grid-cols-4 gap-1.5">
          {DEPTHS.map((d) => (
            <button
              key={d.id}
              disabled={!d.drill}
              onClick={() => d.drill && update({ depth: d.id as RecallDepth })}
              className={
                "rounded-xl px-1 py-2 text-center " +
                (!d.drill
                  ? "bg-surface-2 text-neutral-600 opacity-60"
                  : d.id === sel.depth
                    ? "bg-accent text-black"
                    : "bg-surface-2 text-neutral-400")
              }
            >
              <div className="text-[13px] font-bold leading-tight">{d.label}</div>
            </button>
          ))}
        </div>
        <p className="mt-1 text-xs text-neutral-500">
          40–100bb ve {"<"}25bb: kitapta yönsel — combo listesi yok, drill üretilmez.
        </p>
      </div>

      {/* Aksiyon seçici */}
      <div className="flex flex-wrap gap-1.5">
        {DEPTH_ACTIONS[sel.depth].map((a) => (
          <button
            key={a}
            onClick={() => update({ action: a })}
            className={
              "rounded-full px-3 py-1.5 text-[13px] " +
              (a === sel.action
                ? "bg-accent-soft text-accent border border-accent"
                : "bg-surface-2 text-neutral-400 border border-surface-3")
            }
          >
            {ACTION_LABEL[a]}
          </button>
        ))}
      </div>

      {/* Alt seçici: açan / pozisyon */}
      {sel.action === "3bet" && (
        <div className="space-y-2">
          <div>
            <div className="mb-1 text-[11px] uppercase tracking-wide text-neutral-500">Açan pozisyon</div>
            <div className="flex flex-wrap gap-1.5">
              {groups.map((grp, i) => (
                <button key={i} onClick={() => update({ openerIdx: i })} className={pill(i === sel.openerIdx)}>
                  {grp.opener}
                </button>
              ))}
            </div>
          </div>
          <div>
            <div className="mb-1 text-[11px] uppercase tracking-wide text-neutral-500">Sen</div>
            <div className="flex flex-wrap gap-1.5">
              {posRows.map((r, i) => (
                <button key={i} onClick={() => update({ posIdx: i })} className={pill(i === posIdx)}>
                  {r[0]}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
      {sel.action === "acis" && (
        <div className="flex flex-wrap gap-1.5">
          {opens.map((r, i) => (
            <button key={i} onClick={() => update({ openerIdx: i })} className={pill(i === openIdx)}>
              {r.position}
            </button>
          ))}
        </div>
      )}
      {sel.action === "jam" && (
        <div className="flex flex-wrap gap-1.5">
          {jams.map((r, i) => (
            <button key={i} onClick={() => update({ openerIdx: i })} className={pill(i === jamIdx)}>
              {r.vs}
            </button>
          ))}
        </div>
      )}

      {!q && <div className="p-6 text-neutral-400">Bu spot için drill üretilemedi.</div>}

      {q && (
        <>
          {/* spot */}
          <div key={`${q.kavram}-${q.hand}-${score.total}`} className="card anim-fade p-4">
            <div className="text-sm text-neutral-400">{headline}</div>
            <div className="mt-3 flex items-center gap-3">
              <HandGlyph code={q.hand} size="lg" />
              <div className="text-sm text-neutral-400">
                {sel.action === "squeeze" ? "Bu el hangi listede?" : "Elin. Kararın?"}
              </div>
            </div>
          </div>

          {!answered && (
            <>
              <div className="flex items-center gap-2 text-xs text-neutral-500">
                Güven:
                {CONF.map((c) => (
                  <button
                    key={c.v}
                    onClick={() => setConf(c.v)}
                    className={
                      "rounded-full px-2.5 py-1 " +
                      (conf === c.v ? "bg-accent text-black font-semibold" : "bg-surface-2 text-neutral-400")
                    }
                  >
                    {c.label}
                  </button>
                ))}
              </div>
              <div className={"grid gap-2 " + (q.answers.length === 3 ? "grid-cols-3" : "grid-cols-2")}>
                {q.answers.map((a) => (
                  <button key={a} onClick={() => answer(a)} className="btn-ghost py-3 text-base">
                    {ANSWER_LABEL[a]}
                  </button>
                ))}
              </div>
            </>
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
                {correct ? "✓ Doğru — " : `✗ Yanlış — sen ${ANSWER_LABEL[chosen!]} dedin. `}
                Doğru cevap: <b>{ANSWER_LABEL[q.correct]}</b>. {q.note}
              </div>

              <div className="card p-3">
                <div className="mb-2 text-sm font-semibold text-neutral-100">{revealTitle}</div>
                <RangeGrid value={q.value} blof={q.blof} flat={q.flat} highlight={q.hand} {...gridLabels} />
              </div>

              <button onClick={again} className="btn-accent py-3 text-base">
                Sonraki soru →
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
}

function pill(active: boolean): string {
  return (
    "rounded-full px-2.5 py-1 text-xs " + (active ? "bg-sky-600 text-white" : "bg-surface-2 text-neutral-400")
  );
}
