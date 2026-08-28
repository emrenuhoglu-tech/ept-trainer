import { squeezeRange } from "../../content/curriculum";

// Squeeze Karti — masada bakilacak yuzey. M43 ogretir, quiz tekrar ettirir, bu bakilir.
// Value/blof listesi KITAPTAN (4.6) okunur; boy ve unblock kurali 4.6 + 4.6-EK doktrini.

const STEPS: { n: string; title: string; body: string; tone?: "warn" | "ok" }[] = [
  {
    n: "1",
    title: "Tetik var mı?",
    body: "Açan + en az bir caller, sen henüz konuşmadın. Coldcall bir itiraftır: '3-bet edecek kadar iyi değilim.' Aralığı sıkı ama CAPPED.",
  },
  {
    n: "2",
    title: "Tek ön koşul: bu caller'lar fold ediyor mu?",
    body: "Evet → blöf kanadı açık. Hayır (balık, para koyunca atmıyor) → blöfü TAMAMEN kes, sadece value. İki fold etmeyen adam varsa spot senin değil.",
    tone: "warn",
  },
  {
    n: "3",
    title: "Boy: normal 3-bet'ten BÜYÜK",
    body: "IP ~4.5×, blind'lardan 5×+, her ek caller için yukarı. Küçük squeeze bu hamlenin en pahalı hatası — caller'a aradığı ucuz call'ı verir.",
  },
  {
    n: "4",
    title: "4-bet gelirse cevabın ne?",
    body: "Blöfse fold — bunu ŞİMDİ kabul et. Value'ysa derinliğe göre call/jam. Sığ derinlikte squeeze zaten commit yaratır: 'squeeze edip fold' çöker.",
    tone: "warn",
  },
];

export function SqueezeCard({ onDone }: { onDone: () => void }) {
  const r = squeezeRange();

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Referans
        </button>
        <span className="font-semibold text-neutral-100">🗜️ Squeeze Kartı</span>
        <span className="w-16" />
      </div>

      <div className="rounded-xl border border-dashed border-accent/50 bg-accent-soft px-4 py-3 text-sm text-accent">
        <div className="font-semibold">Elinin gücünden değil, rakibin yapısından kazanır.</div>
        <p className="mt-1 text-[13px] leading-relaxed text-accent/90">
          Potta ölü para var <b>ve</b> call eden 3-bet edebilecekken etmedi. Tek hamleyle iki zayıflığı birden
          vuruyorsun. Kitap bunu <b>“canlıda en kârlı tek hamle”</b> diye tanımlar.
        </p>
      </div>

      {STEPS.map((s) => (
        <section key={s.n} className="card p-4">
          <div className="flex items-start gap-3">
            <span
              className={
                "flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-[12px] font-bold " +
                (s.tone === "warn" ? "bg-amber-500/20 text-amber-300" : "bg-accent-soft text-accent")
              }
            >
              {s.n}
            </span>
            <div>
              <h2 className="text-[14px] font-semibold text-neutral-100">{s.title}</h2>
              <p className="mt-1 text-[13px] leading-relaxed text-neutral-300">{s.body}</p>
            </div>
          </div>
        </section>
      ))}

      {/* malzeme — kitaptan */}
      <section className="card p-4">
        <h2 className="mb-2 text-[14px] font-semibold text-neutral-100">Malzeme</h2>
        {r ? (
          <div className="space-y-2 text-[13px]">
            <div className="flex gap-2">
              <span className="shrink-0 rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
                Value
              </span>
              <span className="leading-relaxed text-neutral-100">{r.value}</span>
            </div>
            <div className="flex gap-2">
              <span className="shrink-0 rounded bg-amber-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-amber-300">
                Blöf
              </span>
              <span className="leading-relaxed text-neutral-100">{r.blof}</span>
            </div>
          </div>
        ) : (
          <p className="text-[13px] text-neutral-400">Bölüm 4.6 listesi okunamadı.</p>
        )}
        <p className="mt-3 text-[12px] leading-relaxed text-neutral-500">
          Bu liste coldcaller <b className="text-neutral-300">pozisyonda ve dar</b> olduğunda geçerli. Caller capped ve
          genişse blöf seçimi değişir — aşağıya bak.
        </p>
      </section>

      {/* 4.6-EK: unblock kurali */}
      <section className="card border border-amber-500/30 p-4">
        <h2 className="mb-2 text-[14px] font-semibold text-amber-200">
          İnce kural: rakibin FOLD bloğunu unblock et
        </h2>
        <p className="text-[13px] leading-relaxed text-neutral-300">
          Caller capped ve genişse, squeeze'ine en sık fold ettiği eller <b className="text-neutral-100">broadway'li</b>
          : ATo, KTo, QTo, JTo. O bloğu <b className="text-neutral-100">bloklamak istemezsin</b> — elinde tutarsan
          rakibin atacağı eller masada azalır.
        </p>
        <div className="mt-3 grid grid-cols-2 gap-2 text-[12px]">
          <div className="rounded-lg border border-emerald-500/30 bg-emerald-500/10 p-2.5">
            <div className="font-semibold text-emerald-300">İYİ blöf</div>
            <div className="mt-1 font-mono text-neutral-200">67s · 97s · 86s · 75s</div>
            <div className="mt-1 text-[11px] leading-snug text-neutral-400">
              Broadway'siz suited — fold bloğunu unblock eder.
            </div>
          </div>
          <div className="rounded-lg border border-red-500/30 bg-red-500/10 p-2.5">
            <div className="font-semibold text-red-300">KÖTÜ blöf</div>
            <div className="mt-1 font-mono text-neutral-200">T8s · J9s · KQs · AJs</div>
            <div className="mt-1 text-[11px] leading-snug text-neutral-400">
              O bloğu bizzat keser (dördü de T/broadway taşır).
            </div>
          </div>
        </div>
        <div className="mt-3 rounded-lg border border-dashed border-neutral-600 bg-surface-2 px-3 py-2 text-[12px] leading-relaxed text-neutral-300">
          <b className="text-neutral-100">Tek test:</b> “kimin bloğunu unblock ediyorum?” Blöfün, rakibin ATACAĞI
          elleri elinde tutmamalı.
        </div>
      </section>

      {/* ucuncu oyuncu tuzagi */}
      <div className="rounded-lg border border-dashed border-amber-500/40 bg-amber-500/10 px-3 py-2.5 text-[12px] leading-relaxed text-amber-200/90">
        <b>Üçüncü oyuncu tuzağı:</b> “raise + call var, JTs ile ben de bakayım.” Caller'ın KQs/QTs'i ve açanın
        JJ+/AJ'si seni domine eder. Havuzda caller'ın aralığında tepe genelde yoktur (premium'u hep 3-bet'ler) → cevap
        over-call değil, <b>squeeze ya da fold</b>.
      </div>

      <p className="px-1 text-[12px] leading-relaxed text-neutral-500">
        Öğrenme sırası: <b className="text-neutral-300">önce value kanadı</b>, sonra saha okuması, en son blöf seçimi.
        Ters sırayla başlarsan squeeze para kaybettirir.
      </p>
    </div>
  );
}
