import { useState } from "react";
import { CardRow } from "../../components/Cards";
import { recordResult } from "../../lib/karne";
import { recordPractice } from "../../lib/progress";

// Bustout Otopsisi — üç gerçek elenme eli (Bölüm 7), karar-önce-cevap-sonra.
// İçerik kitaptan (uydurma yok): önce SEN karar ver, sonra kitabın hattı + kural +
// self-explanation ("neyi value sandın?"). Worked example + self-explain.
interface Hand {
  id: string;
  title: string;
  setup: string;
  hero: string;
  board: string;
  options: string[];
  correct: number;
  rule: string;
  selfExplain: string;
  concept: string;
}

const HANDS: Hand[] = [
  {
    id: "vaka1",
    title: "Vaka 1 — A4s river call",
    setup:
      "$50K High Roller. Board bölüşmeye açık — chop mekaniği masada. River'da rakip all-in geldi. Elin A4s.",
    hero: "A4s",
    board: "",
    options: ["Hero-call", "Fold"],
    correct: 1,
    rule: "Chop'lar jam atmaz: rakip all-in geldiyse bölüşen eli aralığından çıkarmıştır — jam seni geçen eldir. Bir mekaniği görmek yetmez; rakibin hamlesi o mekanikle uyumlu mu diye sor. 📌 Chop varken jam = seni geçmiş el.",
    selfExplain: "Chop mekaniğini doğru gördün — peki hangi filtreyi atladın?",
    concept: "kök-hata",
  },
  {
    id: "vaka2",
    title: "Vaka 2 — KTo top pair",
    setup:
      "$10K 6-max. Islak board, top pair (KT) flopladın. OOP'sun, rakip cbet attı. Sıra sende.",
    hero: "KTo",
    board: "",
    options: ["Check-raise all-in", "Check-call, sonra değerlendir"],
    correct: 1,
    rule: "Tek per stack-off yakıtı değil. Islak boardda top pair büyük pot başlatıcı değildir; stack'i sen başlatınca seni ödeyen aralık senden iyi. Şişmiş pota giden yol elini bluff-catcher'a çevirir. 📌 Top pair islak boardda: check-call, başlatma.",
    selfExplain: "Top pair güçlü göründü — pot büyüyünce elinin sınıfı ne oldu?",
    concept: "kök-hata",
  },
  {
    id: "vaka3",
    title: "Vaka 3 — AA river jam",
    setup:
      "Board 2-4-5, flop+turn value bet (ikisi de doğruydu). River 6 geldi — senden zayıf hiçbir el artık ödemez. Elin AA. Rakip check etti.",
    hero: "AA",
    board: "2c 4d 5s ?? 6h",
    options: ["Kalan stack'i jam", "Check"],
    correct: 1,
    rule: "River'da senden zayıf el ödemeyecekse jam value değildir. O river'da 3'lü/kent/set seni geçmiş, tek per pas — value target yok. Kötü river'da overpair: küçük pota check-call, büyük pota check-fold. 📌 Ödeyecek zayıf el yoksa jam yok.",
    selfExplain: "Flop+turn value doğruydu — river 6'da tam olarak ne değişti?",
    concept: "kök-hata",
  },
  {
    id: "vaka4",
    title: "Vaka 4 — Senin elin (dün)",
    setup:
      "6-max. BB'de T6s, BTN min-raise, call. Flop A-T-3, BTN 1/3 pot, call (çift 10). Turn 5, check-check. River T → board A-T-3-5-T, sende trip 10 ama kicker 6. Check ettin, BTN thin bet. Sıra sende.",
    hero: "Th 6h",
    board: "Ac Ts 3d 5c Td",
    options: ["Check-raise all-in", "Check-call — bluff-catcher"],
    correct: 1,
    rule: "Senden zayıf hiçbir el all-in'i ödemez: her 10 senin 6 kicker'ını geçer, boat'lar zaten önde. Bu runout'ta trip'in bluff-catcher — check-call, blöfleri içeride tut. Check-raise all-in blöfleri fold ettirir, seni yalnız geçen el öder. 📌 Ödeyecek zayıf el yoksa raise yok (cümle 2 = Vaka 2).",
    selfExplain: "Trip 10 güçlü hissettirdi — o board'da kaç el senin 6 kicker'ını GEÇİYOR, kaçı GERİDE kalıp öder?",
    concept: "kök-hata",
  },
];

export function BustoutAutopsy({ onBack }: { onBack: () => void }) {
  const [i, setI] = useState(0);
  const [chosen, setChosen] = useState<number | null>(null);
  const h = HANDS[i];
  const answered = chosen !== null;
  const done = i >= HANDS.length;

  function answer(idx: number) {
    if (answered) return;
    setChosen(idx);
    const ok = idx === h.correct;
    recordPractice();
    recordResult({
      kavram: h.concept,
      soru_ozeti: `Otopsi: ${h.title}`,
      sonuc: ok ? "correct" : "wrong",
      not: h.rule,
      severity: "tournament_life",
    });
  }
  function next() {
    setChosen(null);
    setI((x) => x + 1);
  }

  if (done) {
    return (
      <div className="flex flex-col items-center gap-4 p-8 text-center">
        <div className="text-5xl">🔬</div>
        <p className="text-neutral-200">Vakalar işlendi. Kök hata hep aynıydı.</p>
        <p className="text-sm text-neutral-500">
          Tek per'in şişmiş/multiway potta yanlış sınıflandırılması. Masaya bu refleksi götür.
        </p>
        <button onClick={onBack} className="btn-accent px-6 py-3">
          ← Derse dön
        </button>
      </div>
    );
  }

  return (
    <div className="flex min-h-full flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onBack} className="text-neutral-400">
          ← Ders
        </button>
        <span className="text-neutral-500">{i + 1} / {HANDS.length}</span>
      </div>

      <h1 className="text-xl font-bold">{h.title}</h1>

      <div className="card p-4">
        <div className="flex items-center justify-between gap-3">
          <CardRow spec={h.hero} size="md" label="Elin" />
        </div>
        {h.board && (
          <div className="mt-3">
            <CardRow spec={h.board} size="sm" label="Board" texture />
          </div>
        )}
        <p className="mt-3 text-[15px] leading-relaxed text-neutral-200">{h.setup}</p>
      </div>

      {!answered ? (
        <>
          <div className="text-center text-sm text-neutral-500">Önce SEN karar ver:</div>
          <div className="grid grid-cols-1 gap-2">
            {h.options.map((o, idx) => (
              <button key={idx} onClick={() => answer(idx)} className="btn-ghost py-3 text-[15px]">
                {o}
              </button>
            ))}
          </div>
        </>
      ) : (
        <>
          <div
            className={
              "rounded-xl px-4 py-3 text-sm font-medium " +
              (chosen === h.correct
                ? "bg-emerald-500/15 text-emerald-300"
                : "bg-red-500/15 text-red-300")
            }
          >
            {chosen === h.correct ? "✓ Doğru — " : "✗ "}
            Doğru hat: <b>{h.options[h.correct]}</b>
          </div>
          <div className="rounded-xl border-l-4 border-accent bg-accent-soft px-4 py-3 text-sm leading-relaxed">
            {h.rule}
          </div>
          <div className="card p-3">
            <div className="text-xs uppercase tracking-wide text-neutral-500">Kendine açıkla</div>
            <p className="mt-1 text-sm text-neutral-300">{h.selfExplain}</p>
            <textarea
              rows={2}
              placeholder="Sesli ya da yazılı — hangi ipucunu kaçırdın?"
              className="mt-2 w-full resize-none rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"
            />
          </div>
          <button onClick={next} className="btn-accent py-3 text-base">
            {i + 1 >= HANDS.length ? "Bitir" : "Sonraki vaka →"}
          </button>
        </>
      )}
    </div>
  );
}
