import { useMemo } from "react";
import { modules } from "../../data/modules";
import { MODULE_PRETEST } from "./ColdOpen";
import { daysUntilEPT, cornermanActive, getStats } from "../../lib/progress";
import { dueEntries, confidentWrong } from "../../lib/karne";
import { EVENTS, nextEvent, daysUntil } from "../../data/events";

// Bugün planı — mevcut sinyalleri (geri sayım, sıradaki event, due tekrarlar, en zayıf
// kavram→modül) tek karta dizer. SALT KOMPOZİSYON: yeni poker içeriği YOK; her şey
// kitaptan türeyen veriden gelir. Açılışta (varsayılan Ders sekmesinin tepesinde) görünür.

const isoToday = () => new Date().toISOString().slice(0, 10);

// kavram → modül çöz: ColdOpen'daki M→kavram haritasının tersi + birkaç önek kuralı.
const KAVRAM_MODULE: Record<string, string> = Object.fromEntries(
  Object.entries(MODULE_PRETEST).map(([m, k]) => [k, m]),
);
function moduleForKavram(kavram: string): { id: string; title: string } | null {
  let id = KAVRAM_MODULE[kavram];
  if (!id) {
    if (/^3-?bet|aralik|aralık|boyut/i.test(kavram)) id = "M5";
    else if (/bl[öo]f/i.test(kavram)) id = "M2";
    else if (/plo/i.test(kavram)) id = "M9";
    else if (/turn|draw/i.test(kavram)) id = "M8";
    else if (/stack|mod|icm/i.test(kavram)) id = "M4";
  }
  if (!id) return null;
  const m = modules.find((x) => x.id === id);
  return m ? { id: m.id, title: m.title } : null;
}

export function TodayPlan() {
  const plan = useMemo(() => {
    const today = isoToday();
    const due = dueEntries();
    const cw = confidentWrong();
    const weakK = (cw[0] || due[0])?.kavram; // önce emin-ama-yanlış, yoksa en ağır due
    const plo = EVENTS.find((e) => e.format === "PLO");
    const ploIn = plo ? daysUntil(plo.start, today) : 999;
    return {
      today,
      cornerman: cornermanActive(),
      days: daysUntilEPT(),
      ev: nextEvent(today),
      dueCount: due.length,
      topDue: due[0] ?? null,
      studyMod: weakK ? moduleForKavram(weakK) : null,
      ploRamp: ploIn >= 0 && ploIn <= 6,
      practiced: getStats().practicedToday,
    };
  }, []);

  const { today, cornerman, days, ev, dueCount, topDue, studyMod, ploRamp, practiced } = plan;
  const evIn = ev ? daysUntil(ev.start, today) : 0;

  return (
    <div className="card border-l-4 border-accent p-4">
      <div className="flex items-center justify-between">
        <span className="text-xs font-semibold uppercase tracking-wide text-accent">Bugün</span>
        <span className="text-xs text-neutral-500">
          {cornerman ? "EPT serisi CANLI 🎬" : days >= 0 ? `Day-1'e ${days} gün` : "seri bitti"}
        </span>
      </div>

      {ev && (
        <div className="mt-2 text-sm text-neutral-200">
          🎯 Sıradaki: <b>{ev.name}</b>{" "}
          <span className="text-neutral-500">
            ({ev.format} · {ev.buyin} · {ev.days})
          </span>
          {evIn > 0 ? ` — ${evIn} gün` : evIn === 0 ? " — bugün!" : " — sürüyor"}
        </div>
      )}
      {ploRamp && (
        <a href="#/ders/M9" className="mt-1 block text-xs text-accent">
          ↳ €25K PLO HR yaklaşıyor — M9 PLO temellerini tazele →
        </a>
      )}

      <div className="mt-3 flex flex-col gap-1.5 text-sm">
        {dueCount > 0 ? (
          <a href="#/ilerleme/tekrar" className="flex items-start gap-2 text-neutral-200">
            <span>🔁</span>
            <span>
              <b>{dueCount}</b> tekrar hazır
              {topDue?.severity === "tournament_life" ? " · ⚠ turnuva-bitiren var" : ""}
            </span>
          </a>
        ) : (
          <span className="text-neutral-500">🔁 Bugün vadesi gelen tekrar yok.</span>
        )}

        {studyMod && (
          <a href={`#/ders/${studyMod.id}`} className="flex items-start gap-2 text-neutral-200">
            <span>📚</span>
            <span>
              Bugün çalış: <b>{studyMod.title}</b>{" "}
              <span className="text-neutral-500">({studyMod.id})</span>
            </span>
          </a>
        )}

        <a href="#/drill" className="flex items-start gap-2 text-neutral-200">
          <span>🃏</span>
          <span>{practiced ? "Bugün çalıştın ✓ — bir drill daha?" : "Günün pratiği: 1 drill"}</span>
        </a>
      </div>
    </div>
  );
}
