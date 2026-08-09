import { useMemo, useState } from "react";
import { rangeGroups } from "../../content/curriculum";
import { RangeGrid } from "../../components/RangeGrid";

// M5 interaktif aralik tablosu.
// 1) Ustten "kim acti" (opener) secilir -> o grubun tablosu gelir.
// 2) Kendi pozisyonuna dokununca o satir (value/blof araligi) vurgulanir.
export function RangeTable() {
  const groups = useMemo(() => rangeGroups(), []);
  const [gi, setGi] = useState(0);
  const [row, setRow] = useState<number | null>(0);

  if (groups.length === 0) {
    return (
      <p className="text-sm text-neutral-400">
        Aralık grupları yüklenemedi.
      </p>
    );
  }

  const g = groups[gi];

  return (
    <div className="space-y-3">
      <div>
        <div className="mb-1 text-xs uppercase tracking-wide text-neutral-500">
          Kim açtı?
        </div>
        <div className="flex flex-wrap gap-2">
          {groups.map((grp, i) => (
            <button
              key={i}
              onClick={() => {
                setGi(i);
                setRow(0);
              }}
              className={
                i === gi
                  ? "btn-accent px-3 py-1.5 text-sm"
                  : "btn-ghost px-3 py-1.5 text-sm"
              }
            >
              {grp.opener}
            </button>
          ))}
        </div>
      </div>

      <div className="text-xs text-neutral-500">{g.label}</div>

      <div className="overflow-hidden rounded-xl border border-surface-3">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-surface-2 text-left text-neutral-300">
              {g.table.headers.map((h, i) => (
                <th key={i} className="px-3 py-2 font-medium">
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {g.table.rows.map((r, ri) => {
              const active = ri === row;
              return (
                <tr
                  key={ri}
                  onClick={() => setRow(active ? null : ri)}
                  className={
                    "cursor-pointer border-t border-surface-3 align-top transition " +
                    (active
                      ? "bg-accent-soft ring-1 ring-accent"
                      : "hover:bg-surface-2")
                  }
                >
                  {r.map((c, ci) => (
                    <td
                      key={ci}
                      className={
                        ci === 0
                          ? "px-3 py-2 font-semibold text-neutral-100 whitespace-nowrap"
                          : "px-3 py-2 " +
                            (active ? "text-neutral-100" : "text-neutral-300")
                      }
                    >
                      {c}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <p className="text-xs text-neutral-500">
        Kendi pozisyonuna dokun — value ve blöf aralığın 13×13 grid'de renklensin.
      </p>

      {row !== null && g.table.rows[row] && (
        <div className="rounded-xl border border-surface-3 bg-surface-1 p-3">
          <div className="mb-2 text-sm font-semibold text-neutral-100">
            {g.table.rows[row][0]} · 3-bet aralığı
          </div>
          <RangeGrid
            value={g.table.rows[row][1]}
            blof={g.table.rows[row][2]}
          />
        </div>
      )}

      {g.flats.length > 0 && (
        <ul className="space-y-1 text-xs text-neutral-400">
          {g.flats.map((f, i) => (
            <li key={i}>• {f}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
