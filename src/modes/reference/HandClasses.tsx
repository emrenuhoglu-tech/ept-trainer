import { useMemo, useState } from "react";
import {
  marginalKQJMatrix,
  axOpenMatrix,
  axVsRaise,
  axShortRule,
  marginalOffsuitWhy,
  marginalPostflop,
  suitedBroadwayVsRaise,
  suitedBroadwayOpen,
} from "../../content/curriculum";

// El Sinifi Danismani — RangeAtlas aralik-once calisir (derinlik+aksiyon -> grid);
// bu ekran TERSI: elimdeki sinif -> hangi spotta ne yapiyorum.
// TUM poker degeri Bolum 4.9/4.10/4.11'den okunur; burada elle deger yazilmaz.

type Klass = "axs" | "axo" | "kqjs" | "kqjo" | "sbw";
type Spot = "firstin" | "raise" | "bb";

const KLASS: { id: Klass; label: string; sub: string }[] = [
  { id: "axs", label: "Ax suited", sub: "A2s–A9s" },
  { id: "axo", label: "Ax offsuit", sub: "A2o–AJo" },
  { id: "kqjs", label: "Kx/Qx/Jx suited", sub: "K3s–K6s, Q3s–Q6s, J3s–J6s" },
  { id: "kqjo", label: "Kx/Qx/Jx offsuit", sub: "aynı düşük gruplar" },
  { id: "sbw", label: "Suited broadway", sub: "KQs · KJs · QJs" },
];

const SPOT: { id: Spot; label: string; sub: string }[] = [
  { id: "firstin", label: "Kimse açmadı", sub: "önümde fold — first-in" },
  { id: "raise", label: "Biri açtı", sub: "önümde raise var" },
  { id: "bb", label: "BB'deyim", sub: "savunma kararı" },
];

/** 4.9 matrisinin satırlarını spot'a göre böl. */
const KQJ_ROWS: Record<Spot, RegExp> = {
  firstin: /first-in|HJ ve öncesi/i,
  raise: /raise'ine karşı/i,
  bb: /^BB vs/i,
};

export function HandClasses({ onDone }: { onDone: () => void }) {
  const [klass, setKlass] = useState<Klass>("axs");
  const [spot, setSpot] = useState<Spot>("firstin");

  const kqj = useMemo(() => marginalKQJMatrix(), []);
  const ax = useMemo(() => axOpenMatrix(), []);
  const sbwBullets = useMemo(() => suitedBroadwayVsRaise(), []);

  const isAx = klass === "axs" || klass === "axo";
  const isKqj = klass === "kqjs" || klass === "kqjo";
  const col = klass === "axs" || klass === "kqjs" ? 1 : 2; // suited = 1, offsuit = 2

  // Gosterilecek satirlar (kitap tablosundan filtrelenir)
  const rows = useMemo(() => {
    if (isKqj && kqj) return kqj.rows.filter((r) => KQJ_ROWS[spot].test(r[0]));
    if (isAx && ax && spot === "firstin") return ax.rows;
    return [];
  }, [isKqj, isAx, kqj, ax, spot]);

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Referans
        </button>
        <span className="font-semibold text-neutral-100">🃏 El Sınıfı Danışmanı</span>
        <span className="w-16" />
      </div>

      <p className="text-[13px] leading-relaxed text-neutral-400">
        Aralık Rehberi aralıktan ele bakar. Bu ekran tersi: <b className="text-neutral-200">elimdeki sınıfı seç</b>,
        spotu seç, kitabın o satırını gör. Değerler Bölüm 4.9–4.11'den okunur.
      </p>

      {/* el sinifi */}
      <div className="grid grid-cols-2 gap-2">
        {KLASS.map((k) => (
          <button
            key={k.id}
            onClick={() => setKlass(k.id)}
            className={
              "rounded-lg border px-3 py-2 text-left transition " +
              (klass === k.id
                ? "border-accent bg-accent-soft text-accent"
                : "border-neutral-700 bg-surface-2 text-neutral-300")
            }
          >
            <div className="text-[13px] font-semibold">{k.label}</div>
            <div className="mt-0.5 font-mono text-[11px] opacity-70">{k.sub}</div>
          </button>
        ))}
      </div>

      {/* spot */}
      <div className="grid grid-cols-3 gap-2">
        {SPOT.map((s) => (
          <button
            key={s.id}
            onClick={() => setSpot(s.id)}
            className={
              "rounded-lg border px-2 py-2 text-center transition " +
              (spot === s.id
                ? "border-accent bg-accent-soft text-accent"
                : "border-neutral-700 bg-surface-2 text-neutral-300")
            }
          >
            <div className="text-[12px] font-semibold leading-tight">{s.label}</div>
            <div className="mt-0.5 text-[10px] leading-tight opacity-70">{s.sub}</div>
          </button>
        ))}
      </div>

      {/* cevap */}
      <section className="card p-4">
        {rows.length > 0 && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-[12px]">
              <thead>
                <tr className="border-b border-neutral-700 text-left text-neutral-400">
                  <th className="py-1.5 pr-3 font-medium">{isAx ? "Pozisyon" : "Spot"}</th>
                  <th className="py-1.5 font-medium">
                    {isAx ? (klass === "axs" ? "Suited Ax" : "Offsuit Ax") : klass === "kqjs" ? "Suited" : "Offsuit"}
                  </th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr key={r[0]} className="border-b border-neutral-800 last:border-0 align-top">
                    <td className="whitespace-nowrap py-2 pr-3 font-mono text-[11px] text-neutral-400">{r[0]}</td>
                    <td className="py-2 leading-relaxed text-neutral-100">{r[col]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {isAx && spot === "raise" && (
          <p className="text-[13px] leading-relaxed text-neutral-100">{axVsRaise()}</p>
        )}
        {isAx && spot === "bb" && (
          <p className="text-[13px] leading-relaxed text-neutral-300">
            Bölüm 4.10 Ax için ayrı bir BB satırı vermez — BB savunması fiyat işidir, sınıf işi değil:{" "}
            <b className="text-neutral-100">Bölüm 4.8 (BB Savunması — Ante'li Fiyat)</b>. Raise karşısındaki genel
            kural yine geçerli: {axVsRaise()}
          </p>
        )}

        {klass === "sbw" && (
          <div className="space-y-2 text-[13px] leading-relaxed">
            {spot === "firstin" ? (
              <p className="text-neutral-100">{suitedBroadwayOpen()}</p>
            ) : (
              sbwBullets.map((b, i) => (
                <p key={i} className="text-neutral-100">
                  • {b}
                </p>
              ))
            )}
          </div>
        )}
      </section>

      {/* sinifa ozel kalici uyarilar */}
      {isKqj && (
        <div className="rounded-lg border border-dashed border-amber-500/40 bg-amber-500/10 px-3 py-2.5 text-[12px] leading-relaxed text-amber-200/90">
          <b>Neden offsuit çok daha sert:</b> {marginalOffsuitWhy()}
        </div>
      )}
      {isKqj && (
        <div className="rounded-lg border border-dashed border-neutral-600 bg-surface-2 px-3 py-2.5 text-[12px] leading-relaxed text-neutral-300">
          <b className="text-neutral-100">Postflop — kök hatanın adresi:</b> {marginalPostflop()}
        </div>
      )}
      {isAx && (
        <div className="rounded-lg border border-dashed border-neutral-600 bg-surface-2 px-3 py-2.5 text-[12px] leading-relaxed text-neutral-300">
          <b className="text-neutral-100">Kısa kural:</b> {axShortRule()}
        </div>
      )}

      <p className="px-1 text-[12px] leading-relaxed text-neutral-500">
        Baseline: ante'li 8-max, 30–60bb, ağır ICM yok. Bunlar solver kanunu değil, güvenli çalışma sınırı — ICM ve
        büyük sizing hepsini daha da sıkar.
      </p>
    </div>
  );
}
