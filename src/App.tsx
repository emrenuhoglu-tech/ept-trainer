import { useEffect, useState } from "react";
import { LessonList } from "./modes/lessons/LessonList";
import { LessonPlayer } from "./modes/lessons/LessonPlayer";
import { QuickReference } from "./modes/reference/QuickReference";
import { Drill } from "./modes/drill/Drill";
import { Simulator } from "./modes/sim/Simulator";
import { Quiz } from "./modes/quiz/Quiz";
import { Progress } from "./modes/progress/Progress";
import { Review } from "./modes/review/Review";
import { Sentences } from "./modes/cards/Sentences";
import { RangeAtlas } from "./modes/ranges/RangeAtlas";
import { EquityIntuition } from "./modes/reference/EquityIntuition";
import { BetTypes } from "./modes/reference/BetTypes";
import { LeakCard } from "./modes/leak/LeakCard";
import { BustoutAutopsy } from "./modes/autopsy/BustoutAutopsy";
import { DecisionJournal } from "./modes/cornerman/DecisionJournal";

type Tab = "ders" | "quiz" | "drill" | "ilerleme" | "referans";

function useHash(): string {
  const [hash, setHash] = useState(() => window.location.hash);
  useEffect(() => {
    const on = () => setHash(window.location.hash);
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return hash;
}

function nav(to: string) {
  window.location.hash = to;
}

const TABS: { id: Tab; label: string; icon: string }[] = [
  { id: "ders", label: "Ders", icon: "📚" },
  { id: "quiz", label: "Quiz", icon: "🎯" },
  { id: "drill", label: "Drill", icon: "🃏" },
  { id: "ilerleme", label: "İlerleme", icon: "📊" },
  { id: "referans", label: "Referans", icon: "⚡" },
];

export default function App() {
  const hash = useHash();
  const segs = hash.replace(/^#\/?/, "").split("/").filter(Boolean);
  const tab = (segs[0] as Tab) || "ders";
  const lessonId = segs[1];

  return (
    <div className="mx-auto flex h-[100dvh] max-w-md flex-col bg-surface-0">
      <LeakCard />
      <main className="flex-1 overflow-y-auto">
        {tab === "ders" &&
          (lessonId === "otopsi" ? (
            <BustoutAutopsy onBack={() => nav("#/ders")} />
          ) : lessonId ? (
            <LessonPlayer moduleId={lessonId} onBack={() => nav("#/ders")} />
          ) : (
            <LessonList onOpen={(id) => nav("#/ders/" + id)} />
          ))}
        {tab === "quiz" && <Quiz />}
        {tab === "drill" && (
          <>
            <div className="flex gap-2 px-4 pt-4">
              <button
                onClick={() => nav("#/drill")}
                className={
                  "btn px-3 py-2 text-sm " +
                  (segs[1] !== "masa"
                    ? "bg-accent-soft text-accent border border-accent"
                    : "bg-surface-2 text-neutral-400 border border-surface-3")
                }
              >
                🃏 Soru drill
              </button>
              <button
                onClick={() => nav("#/drill/masa")}
                className={
                  "btn px-3 py-2 text-sm " +
                  (segs[1] === "masa"
                    ? "bg-accent-soft text-accent border border-accent"
                    : "bg-surface-2 text-neutral-400 border border-surface-3")
                }
              >
                🎲 Masa (el sim)
              </button>
            </div>
            {segs[1] === "masa" ? <Simulator /> : <Drill />}
          </>
        )}
        {tab === "ilerleme" &&
          (segs[1] === "tekrar" ? (
            <Review onDone={() => nav("#/ilerleme")} />
          ) : segs[1] === "gunluk" ? (
            <DecisionJournal onDone={() => nav("#/ilerleme")} />
          ) : (
            <Progress
              onReview={() => nav("#/ilerleme/tekrar")}
              onJournal={() => nav("#/ilerleme/gunluk")}
            />
          ))}
        {tab === "referans" &&
          (segs[1] === "cumleler" ? (
            <Sentences onDone={() => nav("#/referans")} />
          ) : segs[1] === "araliklar" ? (
            <RangeAtlas onDone={() => nav("#/referans")} />
          ) : segs[1] === "equity" ? (
            <EquityIntuition onDone={() => nav("#/referans")} />
          ) : segs[1] === "bahis" ? (
            <BetTypes onDone={() => nav("#/referans")} />
          ) : (
            <>
              <div className="grid grid-cols-2 gap-2 p-4 pb-0">
                <button
                  onClick={() => nav("#/referans/araliklar")}
                  className="btn-accent py-2.5"
                >
                  🗂️ Aralık Rehberi →
                </button>
                <button
                  onClick={() => nav("#/referans/cumleler")}
                  className="btn-ghost py-2.5"
                >
                  🧠 11 Cümle ezber →
                </button>
                <button
                  onClick={() => nav("#/referans/equity")}
                  className="btn-ghost col-span-2 py-2.5"
                >
                  📐 Equity Sezgisi (bonus · kitap dışı) →
                </button>
                <button
                  onClick={() => nav("#/referans/bahis")}
                  className="btn-ghost col-span-2 py-2.5"
                >
                  🎯 Bahis Tipleri (value/bluff/thin/overbet) →
                </button>
              </div>
              <QuickReference />
            </>
          ))}
      </main>

      <nav className="grid grid-cols-5 border-t border-surface-3 bg-surface-1">
        {TABS.map((t) => {
          const active = t.id === tab;
          return (
            <button
              key={t.id}
              onClick={() => nav("#/" + t.id)}
              className={
                "flex flex-col items-center gap-0.5 py-2.5 text-xs transition " +
                (active ? "text-accent" : "text-neutral-500")
              }
            >
              <span className="text-lg">{t.icon}</span>
              {t.label}
            </button>
          );
        })}
      </nav>
    </div>
  );
}
