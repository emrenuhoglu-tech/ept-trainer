import { useState } from "react";
import { load, save } from "../../lib/storage";
import { recordPractice } from "../../lib/progress";

// Leak Card — açılışta bir kez: kişisel if-then planı + 90sn cue-detection drill.
// İçerik kitabın kök kuralı (cümle 1+2); GTO uydurulmaz. Cue drill nesnel:
// "pot şişmiş mi?" (pot/stack matematiği) + tek per sınıfı (kitap kuralı).
const KEY = "leakcard:date";

function today(): string {
  return new Date().toISOString().slice(0, 10);
}

function seenToday(): boolean {
  return load<string>(KEY, "") === today();
}

interface Spot {
  potBb: number;
  behindBb: number;
  threeBet: boolean;
  bloated: boolean;
}

function genSpot(): Spot {
  const threeBet = Math.random() < 0.45;
  const potBb = 4 + Math.floor(Math.random() * 60);
  const behindBb = 8 + Math.floor(Math.random() * 90);
  const share = potBb / (potBb + behindBb);
  const bloated = threeBet || share >= 0.4;
  return { potBb, behindBb, threeBet, bloated };
}

export function LeakCard() {
  const [view, setView] = useState<"card" | "drill" | "hidden">(seenToday() ? "hidden" : "card");
  if (view === "hidden") return null;

  return (
    <div className="fixed inset-0 z-50 flex flex-col bg-surface-0/95 backdrop-blur">
      <div className="mx-auto flex h-full w-full max-w-md flex-col">
        {view === "card" ? (
          <CardView onDrill={() => setView("drill")} onDone={() => { save(KEY, today()); recordPractice(); setView("hidden"); }} />
        ) : (
          <DrillView onDone={() => { save(KEY, today()); recordPractice(); setView("hidden"); }} />
        )}
      </div>
    </div>
  );
}

function CardView({ onDrill, onDone }: { onDrill: () => void; onDone: () => void }) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-6 p-6">
      <div className="text-center text-xs uppercase tracking-[0.2em] text-accent">Günün kartı</div>
      <div className="card border-l-4 border-accent p-6">
        <p className="text-lg leading-relaxed">
          <b className="text-accent">EĞER</b> pot şişmiş (3-bet+ pot ya da stack'imin ~%40'ı ortada){" "}
          <b className="text-accent">VE</b> elimde tek per var,
          <br />
          <b className="text-accent">O ZAMAN</b> içimden <b>"bluff-catcher"</b> derim: check/call ya da fold —{" "}
          <b>asla value raise.</b>
        </p>
      </div>
      <p className="text-center text-sm text-neutral-500">
        Yüksek sesle bir kez oku. Masada bu cümle otomatik ateşlenecek.
      </p>
      <div className="flex flex-col gap-2">
        <button onClick={onDone} className="btn-accent w-full py-3 text-base">
          Prova ettim ✓
        </button>
        <button onClick={onDrill} className="btn-ghost w-full py-3">
          ⏱ 90sn cue drill →
        </button>
      </div>
    </div>
  );
}

const N = 12;

function DrillView({ onDone }: { onDone: () => void }) {
  const [i, setI] = useState(0);
  const [spot, setSpot] = useState<Spot>(() => genSpot());
  const [step, setStep] = useState<"pot" | "class" | "fb">("pot");
  const [potAns, setPotAns] = useState<boolean | null>(null);
  const [ok, setOk] = useState(0);
  const potCorrect = potAns === spot.bloated;

  const done = i >= N;

  function answerPot(b: boolean) {
    setPotAns(b);
    setStep("class");
  }
  function answerClass(bluffCatcher: boolean) {
    // kitap kuralı: şişmiş → bluff-catcher; değilse → value/showdown
    const classCorrect = bluffCatcher === spot.bloated;
    const both = potCorrect && classCorrect;
    if (both) setOk((x) => x + 1);
    setStep("fb");
  }
  function next() {
    if (i + 1 >= N) {
      setI(N);
      return;
    }
    setI((x) => x + 1);
    setSpot(genSpot());
    setPotAns(null);
    setStep("pot");
  }

  if (done) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
        <div className="text-5xl">🎯</div>
        <p className="text-lg text-neutral-100">
          {ok}/{N} doğru
        </p>
        <p className="text-sm text-neutral-500">
          Şişmiş potta tek per = bluff-catcher. Bu refleksi masaya götür.
        </p>
        <button onClick={onDone} className="btn-accent px-6 py-3">
          Bitir ✓
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-1 flex-col gap-5 p-6">
      <div className="flex items-center justify-between text-sm">
        <span className="text-neutral-500">Cue drill</span>
        <span className="text-neutral-400">{i + 1} / {N}</span>
      </div>

      <div className="card p-5">
        <div className="flex items-center justify-between">
          <span className="rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent">
            Pot {spot.potBb}bb
          </span>
          <span className="text-sm text-neutral-400">arkanda {spot.behindBb}bb</span>
        </div>
        {spot.threeBet && (
          <div className="mt-2 inline-block rounded-full bg-red-500/15 px-2 py-0.5 text-xs text-red-300">
            3-bet'li pot
          </div>
        )}
        <div className="mt-3 text-sm text-neutral-400">Elin: tek per (overpair)</div>
      </div>

      {step === "pot" && (
        <div>
          <div className="mb-2 text-center text-[15px] font-medium">Pot şişmiş mi?</div>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => answerPot(true)} className="btn-ghost py-4 text-base">Evet, şişmiş</button>
            <button onClick={() => answerPot(false)} className="btn-ghost py-4 text-base">Hayır</button>
          </div>
        </div>
      )}

      {step === "class" && (
        <div>
          <div className="mb-2 text-center text-[15px] font-medium">Tek per'in sınıfı?</div>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => answerClass(true)} className="btn-ghost py-4 text-base">Bluff-catcher</button>
            <button onClick={() => answerClass(false)} className="btn-ghost py-4 text-base">Value</button>
          </div>
        </div>
      )}

      {step === "fb" && (
        <div className="flex flex-col gap-3">
          <div
            className={
              "rounded-xl px-4 py-3 text-sm font-medium " +
              (potCorrect
                ? "bg-emerald-500/15 text-emerald-300"
                : "bg-red-500/15 text-red-300")
            }
          >
            {spot.bloated ? "Şişmiş pot → tek per BLUFF-CATCHER." : "Şişmemiş → tek per hâlâ value/showdown."}
          </div>
          <button onClick={next} className="btn-accent py-3 text-base">
            {i + 1 >= N ? "Bitir" : "Sonraki →"}
          </button>
        </div>
      )}

      <button onClick={onDone} className="mt-auto text-center text-xs text-neutral-600">
        atla
      </button>
    </div>
  );
}

