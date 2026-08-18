import { useMemo } from "react";
import { RANKS, cellCode, parseRange } from "../lib/handgrid";

// Standart 13x13 poker el ızgarası. Kitaptaki value/blöf/flat metnini
// renkli hücrelere çevirir. Hücre etiketi iki rütbe (AK, AA) — suited/offsuit
// konumdan (üst-sağ = suited) belli. Kitapta olmayan el basılmaz.
export interface RangeGridProps {
  value?: string;
  blof?: string;
  flat?: string;
  caption?: string;
  compact?: boolean;
  highlight?: string; // tek bir hücreyi belirgin çerçevele (quiz)
  valueLabel?: string; // yeşil kategori etiketi (varsayılan "Value 3-bet"; 25-30bb'de "Jam"/"Açılış")
  blofLabel?: string; // amber kategori etiketi (varsayılan "Blöf 3-bet"; 4-bet'te "Blöf 4-bet")
}

type Cat = "value" | "mix" | "blof" | "flat" | "fold";

const CAT_CLASS: Record<Cat, string> = {
  value: "bg-emerald-500 text-black font-semibold",
  mix: "bg-emerald-500/35 text-emerald-50 ring-1 ring-inset ring-emerald-400/70",
  blof: "bg-accent text-black font-semibold",
  flat: "bg-sky-600 text-white",
  fold: "bg-surface-2 text-neutral-600",
};

export function RangeGrid({ value, blof, flat, caption, compact, highlight, valueLabel, blofLabel }: RangeGridProps) {
  const { catOf, notes } = useMemo(() => {
    const mix = new Set<string>();
    const val = parseRange(value || "", mix);
    const blf = parseRange(blof || "");
    const flt = parseRange(flat || "");
    const notes = [...val.notes, ...blf.notes, ...flt.notes];
    const catOf = (code: string): Cat => {
      if (val.cells.has(code)) return "value";
      if (mix.has(code)) return "mix";
      if (blf.cells.has(code)) return "blof";
      if (flt.cells.has(code)) return "flat";
      return "fold";
    };
    return { catOf, notes };
  }, [value, blof, flat]);

  const cells: { code: string; label: string; cat: Cat; pair: boolean }[] = [];
  for (let r = 0; r < 13; r++) {
    for (let c = 0; c < 13; c++) {
      const code = cellCode(r, c);
      cells.push({
        code,
        label: RANKS[Math.min(r, c)] + RANKS[Math.max(r, c)],
        cat: catOf(code),
        pair: r === c,
      });
    }
  }

  const has = (cat: Cat) => cells.some((x) => x.cat === cat);
  const font = compact ? "text-[7px]" : "text-[9px] sm:text-[11px]";

  return (
    <div>
      <div
        className="grid gap-[2px] rounded-lg bg-surface-3 p-[2px]"
        style={{ gridTemplateColumns: "repeat(13, minmax(0, 1fr))" }}
      >
        {cells.map((x) => (
          <div
            key={x.code}
            title={x.code}
            className={
              "flex aspect-square items-center justify-center rounded-[3px] leading-none " +
              font +
              " " +
              CAT_CLASS[x.cat] +
              (highlight && x.code === highlight
                ? " ring-2 ring-white ring-offset-1 ring-offset-surface-3 z-10 scale-110"
                : x.pair
                  ? " ring-1 ring-inset ring-white/25"
                  : "")
            }
          >
            {x.label}
          </div>
        ))}
      </div>

      <div className="mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-neutral-300">
        {has("value") && <Legend cls="bg-emerald-500" label={valueLabel || "Value 3-bet"} />}
        {has("mix") && <Legend cls="bg-emerald-500/35 ring-1 ring-inset ring-emerald-400/70" label="Karışım" />}
        {has("blof") && <Legend cls="bg-accent" label={blofLabel || "Blöf 3-bet"} />}
        {has("flat") && <Legend cls="bg-sky-600" label="Flat (call)" />}
        {!compact && <span className="text-neutral-500">↗ suited · ↙ offsuit · köşegen çift</span>}
      </div>

      {caption && <p className="mt-2 text-xs text-neutral-500">{caption}</p>}

      {notes.length > 0 && (
        <p className="mt-1 text-xs text-neutral-400">
          <span className="text-neutral-500">+ kitap notu:</span> {notes.join(", ")}
        </p>
      )}
    </div>
  );
}

function Legend({ cls, label }: { cls: string; label: string }) {
  return (
    <span className="inline-flex items-center gap-1.5">
      <span className={"inline-block h-3 w-3 rounded-[3px] " + cls} />
      {label}
    </span>
  );
}
