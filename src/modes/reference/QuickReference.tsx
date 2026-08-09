import { useMemo } from "react";
import { quickReference } from "../../content/curriculum";
import { DataTable } from "../../components/DataTable";

// Molada bakilan tek ekran. Icerik MD "Hizli Referans" bolumunden gelir.
export function QuickReference() {
  const qr = useMemo(() => quickReference(), []);

  return (
    <div className="space-y-3.5 px-4 py-4">
      <h1 className="text-xl font-bold">Hızlı Referans</h1>

      <section>
        <h2 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
          Karar sırası
        </h2>
        <ol className="space-y-0.5">
          {qr.decisionOrder.map((d, i) => (
            <li key={i} className="flex gap-2 text-sm">
              <span className="font-bold text-neutral-500">{i + 1}.</span>
              <span>{d}</span>
            </li>
          ))}
        </ol>
      </section>

      <section>
        <h2 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
          Boyutlar
        </h2>
        {qr.sizes && <DataTable table={qr.sizes} />}
      </section>

      {qr.band2530 && (
        <section>
          <h2 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
            25–30bb kartı
          </h2>
          <DataTable table={qr.band2530} />
        </section>
      )}

      <section>
        <h2 className="mb-1.5 text-xs font-semibold uppercase tracking-wide text-accent">
          Kırmızı bayraklar
        </h2>
        <ul className="space-y-1">
          {qr.redFlags.map((f, i) => (
            <li
              key={i}
              className="flex gap-2 text-[13px] leading-snug text-neutral-300"
            >
              <span className="mt-0.5 text-red-400">⚑</span>
              <span>{f}</span>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
