import { useMemo, useState } from "react";
import {
  rangeGroups,
  fourBetRanges,
  squeezeRange,
  openRanges,
  jamRanges,
  jamCallRange,
  stackLayer,
  bridgeBand,
  bridgeRule,
} from "../../content/curriculum";
import { flatText, flatScope } from "../quiz/quizEngine";
import { parseRange } from "../../lib/handgrid";
import { RangeGrid } from "../../components/RangeGrid";
import { DataTable } from "../../components/DataTable";

// Aralık Rehberi — kitapta AÇIKÇA verili aralıkları derinlik × aksiyon olarak dizer.
// Kitap yalnız 100–150bb (Bölüm 4) ve 25–30bb (Bölüm 5) için el listesi verir;
// ara/uç derinliklerde 4.7 karakter tablosu + nitel yönerge gösterilir (grid UYDURULMAZ).

type Depth = "derin" | "orta" | "kisa" | "cokkisa";
type Action = "acis" | "3bet" | "call" | "4bet" | "squeeze" | "jam" | "jamcall";

const DEPTHS: { id: Depth; label: string; sub: string; actions: Action[] }[] = [
  { id: "derin", label: "100bb+", sub: "Derin · Bölüm 4", actions: ["acis", "3bet", "call", "4bet", "squeeze"] },
  { id: "orta", label: "40–100bb", sub: "Orta · geçiş", actions: [] },
  { id: "kisa", label: "25–30bb", sub: "Kısa · Bölüm 5 ★", actions: ["acis", "jam", "jamcall"] },
  { id: "cokkisa", label: "<25bb", sub: "Çok kısa", actions: [] },
];

const ACTION_LABEL: Record<Action, string> = {
  acis: "Açış",
  "3bet": "3-bet",
  call: "Call",
  "4bet": "4-bet",
  squeeze: "Squeeze",
  jam: "Jam",
  jamcall: "Jam'e call",
};

export function RangeAtlas({ onDone }: { onDone: () => void }) {
  const [depth, setDepth] = useState<Depth>("derin");
  const cfg = DEPTHS.find((d) => d.id === depth)!;
  const [action, setAction] = useState<Action>("3bet");
  const [openerIdx, setOpenerIdx] = useState(0);

  const groups = useMemo(() => rangeGroups(), []);
  const act: Action = cfg.actions.includes(action) ? action : cfg.actions[0] ?? "3bet";

  return (
    <div className="flex flex-col gap-3 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Referans
        </button>
        <span className="font-semibold text-neutral-100">🗂️ Aralık Rehberi</span>
        <span className="w-12" />
      </div>

      {/* Derinlik seçici */}
      <div>
        <div className="mb-1 text-[11px] uppercase tracking-wide text-neutral-500">Derinlik</div>
        <div className="grid grid-cols-4 gap-1.5">
          {DEPTHS.map((d) => (
            <button
              key={d.id}
              onClick={() => setDepth(d.id)}
              className={
                "rounded-xl px-1 py-2 text-center " +
                (d.id === depth ? "bg-accent text-black" : "bg-surface-2 text-neutral-400")
              }
            >
              <div className="text-[13px] font-bold leading-tight">{d.label}</div>
            </button>
          ))}
        </div>
        <p className="mt-1 text-xs text-neutral-500">{cfg.sub}</p>
      </div>

      {/* Aksiyon seçici (yalnız el listesi olan derinliklerde) */}
      {cfg.actions.length > 0 && (
        <div className="flex flex-wrap gap-1.5">
          {cfg.actions.map((a) => (
            <button
              key={a}
              onClick={() => setAction(a)}
              className={
                "rounded-full px-3 py-1.5 text-[13px] " +
                (a === act
                  ? "bg-accent-soft text-accent border border-accent"
                  : "bg-surface-2 text-neutral-400 border border-surface-3")
              }
            >
              {ACTION_LABEL[a]}
            </button>
          ))}
        </div>
      )}

      {/* İçerik */}
      {depth === "derin" && (
        <DerinBody act={act} groups={groups} openerIdx={openerIdx} setOpenerIdx={setOpenerIdx} />
      )}
      {depth === "kisa" && <KisaBody act={act} />}
      {(depth === "orta" || depth === "cokkisa") && <NitelBody depth={depth} />}
    </div>
  );
}

// ---- 100bb+ (Bölüm 4) ----
function DerinBody({
  act,
  groups,
  openerIdx,
  setOpenerIdx,
}: {
  act: Action;
  groups: ReturnType<typeof rangeGroups>;
  openerIdx: number;
  setOpenerIdx: (n: number) => void;
}) {
  if (act === "acis")
    return (
      <Note>
        Kitap 100bb+ açılışını yüzdeyle veriyor: <b>LJ ~%18 → BTN ~%45</b> (Bölüm 3). Pozisyona göre
        açık el listesi yalnız 25–30bb bandında verili — <b>Kısa → Açış</b>'a bak.
      </Note>
    );

  if (act === "4bet") {
    const fb = fourBetRanges();
    if (!fb) return <Note>4-bet tablosu okunamadı.</Note>;
    return (
      <div className="space-y-2">
        <RangeGrid
          value={fb.value}
          blof={fb.blof}
          flat={fb.flat}
          valueLabel="4-bet value"
          blofLabel="Blöf 4-bet"
          caption="3-bet'e cevabın (Bölüm 4.5) · 4-bet'li pot = şişmiş pot"
        />
        {fb.foldNote && (
          <p className="text-xs text-neutral-400">
            <span className="text-neutral-500">Fold:</span> {fb.foldNote}
          </p>
        )}
      </div>
    );
  }

  if (act === "squeeze") {
    const sq = squeezeRange();
    if (!sq) return <Note>Squeeze tablosu okunamadı.</Note>;
    return (
      <RangeGrid
        value={sq.value}
        blof={sq.blof}
        valueLabel="Squeeze value"
        caption="Açan + 1 caller varken (Bölüm 4.6) · boyut 4.5–5×"
      />
    );
  }

  // 3bet / call → önce açan pozisyon seç
  const g = groups[Math.min(openerIdx, groups.length - 1)];
  return (
    <div className="space-y-3">
      <div>
        <div className="mb-1 text-[11px] uppercase tracking-wide text-neutral-500">Açan pozisyon</div>
        <div className="flex flex-wrap gap-1.5">
          {groups.map((grp, i) => (
            <button
              key={i}
              onClick={() => setOpenerIdx(i)}
              className={
                "rounded-full px-2.5 py-1 text-xs " +
                (i === openerIdx ? "bg-sky-600 text-white" : "bg-surface-2 text-neutral-400")
              }
            >
              {grp.opener}
            </button>
          ))}
        </div>
        <p className="mt-1 text-xs text-neutral-500">{g?.label}</p>
      </div>

      {act === "3bet" &&
        (g?.table.rows ?? []).map((row, i) => (
          <div key={i}>
            <div className="mb-1 text-xs font-semibold text-neutral-300">Sen: {row[0]}</div>
            <RangeGrid value={row[1]} blof={row[2]} compact />
          </div>
        ))}

      {act === "call" && <CallBody flats={g?.flats ?? []} />}
    </div>
  );
}

function CallBody({ flats }: { flats: string[] }) {
  if (!flats.length) return <Note>Bu açılışa flat notu bu grupta verilmemiş.</Note>;
  return (
    <div className="space-y-3">
      {flats.map((f, i) => {
        // flatText: koşullu (150bb+) cümleleri ve grid'e açılamayan prose kuyruğu atar —
        // cümle kuyruğuna yapışan 98s/JTs kurtulur. Atılan kısım not olarak yüzeyde kalır.
        const body = (f.includes(":") ? f.slice(f.indexOf(":") + 1) : f).trim();
        const cleaned = flatText([f]);
        const griddable = parseRange(cleaned).cells.size > 0;
        const rest =
          griddable && body.startsWith(cleaned)
            ? body.slice(cleaned.length).replace(/^[.,\s]+/, "")
            : "";
        return (
          <div key={i}>
            <div className="mb-1 text-xs font-semibold text-neutral-300">
              Sen: {flatScope(f).join(" / ")}
            </div>
            {griddable ? (
              <>
                <RangeGrid flat={cleaned} valueLabel="Flat" caption="Flat / call aralığı (Bölüm 4.3)" />
                {rest && <p className="mt-1 text-xs text-neutral-400">{rest}</p>}
              </>
            ) : (
              // Prose flat ("çok geniş" / "neredeyse yok") grid'e açılmaz — kitabın cümlesi not olarak.
              <Note>{body}</Note>
            )}
          </div>
        );
      })}
    </div>
  );
}

// ---- 25–30bb (Bölüm 5) ----
function KisaBody({ act }: { act: Action }) {
  if (act === "acis") {
    const rows = openRanges();
    return (
      <div className="space-y-3">
        <Note>Önünde kimse yok · boyut 2–2.2× (Bölüm 5.1).</Note>
        {rows.map((r, i) => (
          <div key={i}>
            <div className="mb-1 text-xs font-semibold text-neutral-300">{r.position}</div>
            <RangeGrid value={r.range} valueLabel="Açış" compact />
          </div>
        ))}
      </div>
    );
  }
  if (act === "jam") {
    const rows = jamRanges();
    return (
      <div className="space-y-3">
        <Note>
          Bu bantta <b>3-bet = jam</b> (commit). Flat yok — ne SB'den, ne BB'den, ne IP'den (Bölüm 5.2).
        </Note>
        <Note>
          <b>PLO'da bu kart geçersiz</b> — pot-limit'te jam yok, pot-raise var; 25–60bb'de B5 GEÇERSİZ
          (Bölüm 15.1).
        </Note>
        {rows.map((r, i) => (
          <div key={i}>
            <div className="mb-1 text-xs font-semibold text-neutral-300">{r.vs}</div>
            <RangeGrid value={r.range} valueLabel="Jam" compact />
          </div>
        ))}
      </div>
    );
  }
  // jamcall
  const jc = jamCallRange();
  return (
    <div className="space-y-2">
      <Note>Rakip all-in geldiğinde call sınırı. Altı call değil — ya jam'i sen yaparsın ya fold (Bölüm 5.3).</Note>
      <RangeGrid value={jc} valueLabel="Call (jam'e karşı)" />
    </div>
  );
}

// ---- Ara / uç derinlikler: kitapta el listesi YOK, nitel ayar ----
function NitelBody({ depth }: { depth: Depth }) {
  const t = stackLayer();
  const bb = depth === "orta" ? bridgeBand() : null;
  const rule = depth === "orta" ? bridgeRule() : "";
  return (
    <div className="space-y-3">
      <Note>
        Kitap bu derinlik için <b>ayrı el listesi vermiyor.</b> Taban aralık 100bb+ (Bölüm 4)
        tablolarıdır; aşağıdaki YÖN tablolarına göre <b>ayarlarsın</b> — grid uydurulmaz.
      </Note>
      {depth === "orta" ? (
        <>
          {bb && <DataTable table={bb} />}
          {rule && <p className="text-sm leading-relaxed text-neutral-300">{rule}</p>}
        </>
      ) : (
        <>
          <p className="text-sm leading-relaxed text-neutral-300">
            25–40bb: 3-bet = commit demektir (3-bet edeceğin el 4-bet'e devam edebilmeli). <b>&lt;25bb: jam /
            fold</b>, 3-bet-fold yapısı yok. En yakın el referansı: <b>25–30bb → Jam</b>.
          </p>
          <button
            onClick={() => (window.location.hash = "#/referans/icmkart")}
            className="btn-ghost w-full py-2.5 text-sm"
          >
            🧮 ICM Kartım — ladder + &lt;15bb jam kartı (Bölüm 12) →
          </button>
        </>
      )}
      {t && <DataTable table={t} />}
      <p className="text-xs text-neutral-500">
        {depth === "orta" ? "Bölüm 4.7 + Bölüm 14 — köprü bandı yön çerçevesi." : "Bölüm 4.7 — Stack modu üst katmanı."}
      </p>
    </div>
  );
}

function Note({ children }: { children: React.ReactNode }) {
  return (
    <p className="rounded-xl border-l-4 border-accent/60 bg-accent-soft px-3 py-2 text-[13px] leading-relaxed text-neutral-200">
      {children}
    </p>
  );
}
