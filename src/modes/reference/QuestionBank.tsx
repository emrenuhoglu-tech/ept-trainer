import { useMemo } from "react";
import { questionBank } from "../../content/curriculum";

// Soru Bankası — Bölüm 10'un 24 sorusu (3 alt-bölüm), doğrudan kitaptan parse edilir.
// Kitabın tasarımı: cevaplar YAZILMAZ, drill'de sözlü işlenir. Bu görünüm soruları
// okunur/gezilebilir yapar (daha önce app'te hiç görünmüyorlardı) ve Drill'e köprü kurar.

export function QuestionBank({ onDone }: { onDone: () => void }) {
  const sections = useMemo(() => questionBank(), []);
  const total = sections.reduce((n, s) => n + s.questions.length, 0);
  // kitabın sürekli 1–24 numaralandırmasını koru (bölümler arası sıfırlanmasın)
  const offsets: number[] = [];
  sections.reduce((acc, s, i) => ((offsets[i] = acc), acc + s.questions.length), 0);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Referans
        </button>
        <span className="font-semibold text-neutral-100">📝 Soru Bankası</span>
        <span className="w-16" />
      </div>

      <div className="rounded-xl border border-dashed border-accent/50 bg-accent-soft px-4 py-3 text-sm text-accent">
        <div className="font-semibold">Bölüm 10 · {total} soru</div>
        <p className="mt-1 text-[13px] leading-relaxed text-accent/90">
          Kitabın tasarımı: <b>cevaplar yazılmadı — Drill'de sözlü işlenir.</b> Bir soruyu oku,
          kararını ve gerekçeni kur, sonra Drill'de sesli çalış.
        </p>
        <a href="#/drill" className="mt-2 inline-block rounded-lg bg-accent px-3 py-1.5 text-xs font-semibold text-black">
          🃏 Drill'e geç →
        </a>
      </div>

      {sections.map((s, si) => (
        <section key={s.title} className="card p-4">
          <h2 className="mb-2 text-xs font-semibold uppercase tracking-wide text-accent">{s.title}</h2>
          <ol className="space-y-2">
            {s.questions.map((q, i) => (
              <li key={i} className="flex gap-2 text-[13px] leading-snug text-neutral-200">
                <span className="shrink-0 font-mono text-neutral-500">{offsets[si] + i + 1}.</span>
                <span>{q}</span>
              </li>
            ))}
          </ol>
        </section>
      ))}
    </div>
  );
}
