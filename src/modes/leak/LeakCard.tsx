import { useEffect, useRef, useState } from "react";
import { load, save } from "../../lib/storage";
import { recordPractice } from "../../lib/progress";
import { confidentWrong } from "../../lib/karne";

// Leak Card — açılışta bir kez: kişisel if-then planı + 90sn cue-detection drill.
// İçerik kitabın kök kuralı (cümle 1+2) ya da B12 cover kuralı; GTO uydurulmaz.
// Cue drill nesnel: pot/stack matematiği + tek sınıf sorusu (kitap kuralı).
// Günün kartı #1 leak'e bağlı: emin-ama-yanlış listesinin başı ICM/cover ise
// cover kartı, değilse şişmiş-pot kartı.
const KEY = "leakcard:date";

type Variant = "pot" | "cover";

function todaysVariant(): Variant {
  const top = confidentWrong()[0]?.kavram || "";
  return /icm|cover/i.test(top) ? "cover" : "pot";
}

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
  const [variant] = useState<Variant>(() => todaysVariant());
  const boxRef = useRef<HTMLDivElement>(null);

  // Dialog açılınca / görünüm değişince odak ilk butona gitsin.
  useEffect(() => {
    if (view === "hidden") return;
    boxRef.current?.querySelector<HTMLElement>("button")?.focus();
  }, [view]);

  if (view === "hidden") return null;

  const done = () => {
    save(KEY, today());
    recordPractice();
    setView("hidden");
  };

  return (
    <div
      ref={boxRef}
      role="dialog"
      aria-modal="true"
      aria-label="Günün kartı"
      onKeyDown={(e) => {
        // Basit focus-trap: Tab ilk/son eleman arasında döner.
        if (e.key !== "Tab") return;
        const els = boxRef.current?.querySelectorAll<HTMLElement>("button, input, textarea, a[href]");
        if (!els || els.length === 0) return;
        const first = els[0];
        const last = els[els.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }}
      className="fixed inset-0 z-50 flex flex-col bg-surface-0/95 backdrop-blur"
    >
      <div className="mx-auto flex h-full w-full max-w-md flex-col">
        {view === "card" ? (
          variant === "cover" ? (
            <CoverCardView onDrill={() => setView("drill")} onDone={done} />
          ) : (
            <CardView onDrill={() => setView("drill")} onDone={done} />
          )
        ) : variant === "cover" ? (
          <CoverDrillView onDone={done} />
        ) : (
          <DrillView onDone={done} />
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
      <p className="text-center text-[11px] text-neutral-600">
        Kitabın tanımı: şişmiş = 3-bet+ pot. “~%40 stack ortada” pratik bir sezgi (kitap dışı).
      </p>
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

// Cover kartı (B12): if-then + sınıflama cue'su. Kitap cue'su: "jam'e fold basmadan
// önce: cover ediliyor muyum? Hayır → call çok daha geniş." Yeni doktrin yok.
function CoverCardView({ onDrill, onDone }: { onDrill: () => void; onDone: () => void }) {
  return (
    <div className="flex flex-1 flex-col justify-center gap-6 p-6">
      <div className="text-center text-xs uppercase tracking-[0.2em] text-accent">Günün kartı</div>
      <div className="card border-l-4 border-accent p-6">
        <p className="text-lg leading-relaxed">
          <b className="text-accent">EĞER</b> jam'e fold basmak üzereysem,
          <br />
          <b className="text-accent">O ZAMAN</b> önce sınıflarım: <b>seni cover eden mi, senin cover
          ettiğin mi?</b> Cover edilmiyorsam → <b>call çok daha geniş.</b>
        </p>
      </div>
      <p className="text-center text-[11px] text-neutral-600">
        Kitap (B12): cover'sız aralık cover'lıdan asla sıkı olamaz — kaybetsen de bust olmazsın.
      </p>
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

interface CoverSpot {
  heroBb: number;
  jammerBb: number;
  covered: boolean; // jammer stack'i seninkini kapsıyor → kaybedersen bust
}

function genCoverSpot(): CoverSpot {
  const heroBb = 12 + Math.floor(Math.random() * 60);
  const delta = 3 + Math.floor(Math.random() * 40);
  const jammerBb = Math.random() < 0.5 ? heroBb + delta : Math.max(3, heroBb - delta);
  return { heroBb, jammerBb, covered: jammerBb >= heroBb };
}

// Cover cue drill — nesnel sınıflama: iki stack sayısı, tek soru.
function CoverDrillView({ onDone }: { onDone: () => void }) {
  const [i, setI] = useState(0);
  const [spot, setSpot] = useState<CoverSpot>(() => genCoverSpot());
  const [ans, setAns] = useState<boolean | null>(null);
  const [ok, setOk] = useState(0);
  const correct = ans === spot.covered;

  const done = i >= N;

  function answer(covered: boolean) {
    setAns(covered);
    if (covered === spot.covered) setOk((x) => x + 1);
  }
  function next() {
    if (i + 1 >= N) {
      setI(N);
      return;
    }
    setI((x) => x + 1);
    setSpot(genCoverSpot());
    setAns(null);
  }

  if (done) {
    return (
      <div className="flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center">
        <div className="text-5xl">🎯</div>
        <p className="text-lg text-neutral-100">
          {ok}/{N} doğru
        </p>
        <p className="text-sm text-neutral-500">
          Jam'e fold basmadan önce: cover ediliyor muyum? Hayır → call çok daha geniş.
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
            Sende {spot.heroBb}bb
          </span>
          <span className="text-sm text-neutral-400">jam atan {spot.jammerBb}bb</span>
        </div>
        <div className="mt-3 text-sm text-neutral-400">Bubble. Jam sana geldi.</div>
      </div>

      {ans === null ? (
        <div>
          <div className="mb-2 text-center text-[15px] font-medium">Sınıfla: bu jam…</div>
          <div className="grid grid-cols-2 gap-2">
            <button onClick={() => answer(true)} className="btn-ghost py-4 text-base">Beni cover ediyor</button>
            <button onClick={() => answer(false)} className="btn-ghost py-4 text-base">Ben cover ediyorum</button>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          <div
            className={
              "rounded-xl px-4 py-3 text-sm font-medium " +
              (correct ? "bg-emerald-500/15 text-emerald-300" : "bg-red-500/15 text-red-300")
            }
          >
            {spot.covered
              ? "Cover ediliyorsun — kaybedersen bust. Call sert daralır."
              : "Cover edilmiyorsun — kaybetsen de bust olmazsın. Call sandığından çok daha geniş."}
          </div>
          <button onClick={next} className="btn-accent py-3 text-base">
            {i + 1 >= N ? "Bitir" : "Sonraki →"}
          </button>
        </div>
      )}

      <button onClick={onDone} className="btn-ghost mt-auto w-full py-3">
        atla
      </button>
    </div>
  );
}

function DrillView({ onDone }: { onDone: () => void }) {
  const [i, setI] = useState(0);
  const [spot, setSpot] = useState<Spot>(() => genSpot());
  const [step, setStep] = useState<"pot" | "class" | "fb">("pot");
  const [potAns, setPotAns] = useState<boolean | null>(null);
  const [classAns, setClassAns] = useState<boolean | null>(null);
  const [ok, setOk] = useState(0);
  const potCorrect = potAns === spot.bloated;
  const classCorrect = classAns === spot.bloated;
  const bothOk = potCorrect && classCorrect;

  const done = i >= N;

  function answerPot(b: boolean) {
    setPotAns(b);
    setStep("class");
  }
  function answerClass(bluffCatcher: boolean) {
    // kitap kuralı: şişmiş → bluff-catcher; değilse → value/showdown
    setClassAns(bluffCatcher);
    if (potCorrect && bluffCatcher === spot.bloated) setOk((x) => x + 1);
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
    setClassAns(null);
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
              (bothOk
                ? "bg-emerald-500/15 text-emerald-300"
                : "bg-red-500/15 text-red-300")
            }
          >
            <div>
              {spot.bloated ? "Şişmiş pot → tek per BLUFF-CATCHER." : "Şişmemiş → tek per hâlâ value/showdown."}
            </div>
            {!bothOk && (
              <div className="mt-1 font-normal opacity-90">
                {potCorrect
                  ? `Pot okuman doğru, sınıflama yanlış: ${spot.bloated ? "bluff-catcher" : "value/showdown"}.`
                  : classCorrect
                    ? "Sınıflaman doğru, pot okuması yanlıştı."
                    : "Pot okuması da sınıflama da yanlıştı."}
              </div>
            )}
          </div>
          <button onClick={next} className="btn-accent py-3 text-base">
            {i + 1 >= N ? "Bitir" : "Sonraki →"}
          </button>
        </div>
      )}

      <button onClick={onDone} className="btn-ghost mt-auto w-full py-3">
        atla
      </button>
    </div>
  );
}

