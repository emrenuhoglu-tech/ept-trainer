// Equity Sezgisi — KİTAP DIŞI bonus. Sadece kaba equity matematiği (sayı hissi).
// Karar her zaman kitaptan gelir (cümle 6: "Equity kâğıt üzerinde, para masada kazanılır").
// Karne/mastery'ye bağlı DEĞİL; drill üretmez. Amaç: masada saatte hesap yapmamak için
// "ne kadar önde/geride" sezgisini otomatikleştirmek.

const DRAWS: [string, string, string][] = [
  ["Gutshot (iç boşluk)", "4", "~%17"],
  ["İki over kart", "6", "~%24"],
  ["Açık uç (OESD)", "8", "~%32"],
  ["Flush draw", "9", "~%35"],
  ["FD + gutshot", "12", "~%45"],
  ["FD + açık uç (monster)", "15", "~%54"],
];

const MATCHUPS: [string, string, string][] = [
  ["Overpair vs underpair", "AA vs KK", "~82 / 18"],
  ["Çift vs 2 alt kart", "TT vs 76s", "~65 / 35"],
  ["Dominant vs domine", "AK vs AQ", "~72 / 28"],
  ["Çift vs 2 over (coinflip)", "QQ vs AK", "~55 / 45"],
  ["İki over vs küçük çift", "AK vs 22", "~50 / 50"],
  ["SC vs overpair", "87s vs AA", "~22 / 78"],
];

function Row({ cols, accent }: { cols: string[]; accent?: boolean }) {
  return (
    <div className="grid grid-cols-[1fr_auto_auto] items-center gap-2 border-b border-surface-3 py-2 text-sm last:border-0">
      <span className="text-neutral-200">{cols[0]}</span>
      <span className="font-mono text-xs text-neutral-500">{cols[1]}</span>
      <span className={"text-right font-mono tabular-nums " + (accent ? "text-accent" : "text-emerald-300")}>
        {cols[2]}
      </span>
    </div>
  );
}

export function EquityIntuition({ onDone }: { onDone: () => void }) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Referans
        </button>
        <span className="font-semibold text-neutral-100">📐 Equity Sezgisi</span>
        <span className="w-16" />
      </div>

      {/* kitap-dışı çerçeve — cümle 6 ile bağla */}
      <div className="rounded-xl border border-dashed border-accent/50 bg-accent-soft px-4 py-3 text-sm text-accent">
        <div className="font-semibold">Bonus — kitabın parçası değil.</div>
        <p className="mt-1 text-[13px] leading-relaxed text-accent/90">
          <b>"Equity kâğıt üzerinde, para masada kazanılır."</b> (Bölüm 0.6) Karar her zaman kitaptan
          gelir. Bu kart sadece sayı sezgisi — "ne kadar önde/geride"yi masada saniyede hissetmek için.
        </p>
      </div>

      {/* tek alet: 2 & 4 kuralı */}
      <section className="card p-4">
        <h2 className="mb-2 font-semibold">Tek alet: 2 &amp; 4 kuralı</h2>
        <div className="space-y-2 text-sm text-neutral-300">
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-accent">×2</span>
            <span>
              <b>1 sokak</b> kaldıysa (turn <i>veya</i> river): out sayını 2 ile çarp ≈ tutma %'n.
            </span>
          </div>
          <div className="flex items-baseline gap-3">
            <span className="text-2xl font-bold text-accent">×4</span>
            <span>
              <b>2 sokak</b> varsa (flop'ta all-in, turn+river gelecek): out × 4 ≈ river'a kadar tutma %.
            </span>
          </div>
        </div>
        <p className="mt-2 text-[11px] text-neutral-500">
          8+ out'ta ×4 biraz şişer (gerçeğin ~%2-3 üstü). Kaba sezgi için yeter.
        </p>
      </section>

      {/* draw → out → river% */}
      <section className="card p-4">
        <h2 className="mb-1 font-semibold">Draw → out → river'a kadar</h2>
        <p className="mb-2 text-[11px] text-neutral-500">Flop'ta, iki kart görecekmiş gibi (kaba).</p>
        <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-surface-3 pb-1 text-[10px] uppercase tracking-wide text-neutral-500">
          <span>Draw</span>
          <span>out</span>
          <span className="text-right">tutar</span>
        </div>
        {DRAWS.map((d) => (
          <Row key={d[0]} cols={d} />
        ))}
      </section>

      {/* preflop all-in kaba */}
      <section className="card p-4">
        <h2 className="mb-1 font-semibold">Preflop all-in (kaba)</h2>
        <p className="mb-2 text-[11px] text-neutral-500">Favori / underdog — yüzde yerine "hangi taraftayım".</p>
        <div className="grid grid-cols-[1fr_auto_auto] gap-2 border-b border-surface-3 pb-1 text-[10px] uppercase tracking-wide text-neutral-500">
          <span>Durum</span>
          <span>örnek</span>
          <span className="text-right">%</span>
        </div>
        {MATCHUPS.map((m) => (
          <Row key={m[0]} cols={m} accent />
        ))}
      </section>

      <p className="px-1 text-[12px] leading-relaxed text-neutral-500">
        Sayı seni önde/geride tutar; <b className="text-neutral-300">kararı yine kitap verir</b>. Coinflip'te
        önde olmak, ICM'de doğru fold'u değiştirmez. Sezgi otomatikleşince masada hesap değil, refleks
        çalışır — asıl kazandıran o.
      </p>
    </div>
  );
}
