import { useMemo, useRef } from "react";
import { chapterTitles, sectionBlock, stripInline } from "../../content/curriculum";

// Genel bölüm görüntüleyici — herhangi bir "## Bölüm N" bölümünü ham MD'den parse edip
// mobilde okunur render eder. Poker içeriği ELLE yazılmaz; doğrudan
// content/poker_cep_kitabi_v5.md'den gelir (fidelity). v5'te eklenen B11–B16 bu görünümle
// yüzeye çıkar (app'te daha önce hiç görünmüyorlardı).

// Navigasyon listesi ARTIK kitaptan turetilir (elle liste = bolum dusme riski; D-audit).
// Baslik metni kitabin kendi H2'sinden gelir, poker icerigi elle yazilmaz.
export const NEW_CHAPTERS: { n: number; short: string }[] = chapterTitles().map((c) => ({
  n: c.n,
  short: c.short,
}));

/** Bolumun kitaptaki tam basligi (App/ChapterView alt-baslik olarak gosterir). */
export function chapterHeading(n: number): string {
  return chapterTitles().find((c) => c.n === n)?.title || "";
}

type Block =
  | { k: "h3"; text: string }
  | { k: "table"; headers: string[]; rows: string[][] }
  | { k: "quote"; text: string }
  | { k: "list"; items: string[] }
  | { k: "p"; text: string };

function parseBlocks(md: string): Block[] {
  const lines = md.split("\n");
  const blocks: Block[] = [];
  let para: string[] = [];
  const flush = () => {
    const text = para.join(" ").trim();
    if (text) blocks.push({ k: "p", text });
    para = [];
  };
  let i = 0;
  while (i < lines.length) {
    const t = lines[i].trim();
    if (t === "" || t === "---") {
      flush();
      i++;
    } else if (t.startsWith("### ")) {
      flush();
      blocks.push({ k: "h3", text: t.slice(4).trim() });
      i++;
    } else if (t.startsWith("|")) {
      flush();
      const tbl: string[] = [];
      while (i < lines.length && lines[i].trim().startsWith("|")) tbl.push(lines[i++].trim());
      const cells = (l: string) =>
        l.replace(/^\|/, "").replace(/\|$/, "").split("|").map((c) => stripInline(c));
      blocks.push({ k: "table", headers: cells(tbl[0]), rows: tbl.slice(2).map(cells) });
    } else if (t.startsWith("> ")) {
      flush();
      blocks.push({ k: "quote", text: t.slice(2).trim() });
      i++;
    } else if (/^([-*]|\d+\.)\s/.test(t)) {
      flush();
      const items: string[] = [];
      while (i < lines.length && /^([-*]|\d+\.)\s/.test(lines[i].trim()))
        items.push(lines[i++].trim().replace(/^([-*]|\d+\.)\s/, ""));
      blocks.push({ k: "list", items });
    } else {
      para.push(t);
      i++;
    }
  }
  flush();
  return blocks;
}

// **kalın** ve *italik* için minik inline render (parse'tan gelen düz metne uygulanır).
function Inline({ text }: { text: string }) {
  const parts = text.split(/(\*\*[^*]+?\*\*|\*[^*]+?\*)/g).filter(Boolean);
  return (
    <>
      {parts.map((p, i) => {
        if (p.startsWith("**") && p.endsWith("**")) return <b key={i}>{p.slice(2, -2)}</b>;
        if (p.startsWith("*") && p.endsWith("*"))
          return (
            <i key={i} className="text-neutral-400">
              {p.slice(1, -1)}
            </i>
          );
        return <span key={i}>{p}</span>;
      })}
    </>
  );
}

export function ChapterView({ title, onDone }: { title: string; onDone: () => void }) {
  const blocks = useMemo(() => parseBlocks(sectionBlock(title)), [title]);
  const heading = useMemo(() => chapterHeading(Number(title.replace(/\D+/g, ""))), [title]);
  const rootRef = useRef<HTMLDivElement>(null);
  const subs = useMemo(
    () => blocks.map((b, i) => (b.k === "h3" ? { i, text: b.text } : null)).filter(Boolean) as { i: number; text: string }[],
    [blocks],
  );
  const goto = (i: number) =>
    rootRef.current?.querySelector(`#sec-${i}`)?.scrollIntoView({ block: "start", behavior: "smooth" });

  if (blocks.length === 0)
    return (
      <div className="flex flex-col gap-3 p-4">
        <button onClick={onDone} className="text-left text-sm text-neutral-400">
          ← Bölümler
        </button>
        <p className="text-[13px] text-neutral-300">Bölüm bulunamadı: {title}</p>
      </div>
    );

  return (
    <div ref={rootRef} className="flex flex-col gap-3 p-4">
      <div className="sticky top-0 -mx-4 -mt-4 flex items-center justify-between bg-surface-0 px-4 py-3 text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Bölümler
        </button>
        <span className="font-semibold text-neutral-100">📖 Kitap</span>
        <span className="w-16" />
      </div>
      <h1 className="text-base font-semibold leading-snug text-neutral-100">
        {title}
        {heading && <span className="block text-[13px] font-normal text-neutral-400">{heading}</span>}
      </h1>

      {subs.length >= 4 && (
        <details className="card p-3">
          <summary className="cursor-pointer text-[13px] font-semibold text-neutral-200">
            İçindekiler ({subs.length} başlık)
          </summary>
          <ul className="mt-2 space-y-1">
            {subs.map((s) => (
              <li key={s.i}>
                <button onClick={() => goto(s.i)} className="text-left text-[12px] leading-snug text-accent">
                  {s.text}
                </button>
              </li>
            ))}
          </ul>
        </details>
      )}

      {blocks.map((b, i) => {
        if (b.k === "h3")
          return (
            <h2 key={i} id={`sec-${i}`} className="mt-2 scroll-mt-14 text-sm font-semibold text-accent">
              {b.text}
            </h2>
          );
        if (b.k === "quote")
          return (
            <blockquote
              key={i}
              className="border-l-2 border-accent bg-accent-soft px-3 py-2 text-[13px] font-medium leading-relaxed text-accent"
            >
              <Inline text={b.text} />
            </blockquote>
          );
        if (b.k === "list")
          return (
            <ul key={i} className="ml-1 space-y-1">
              {b.items.map((it, j) => (
                <li key={j} className="flex gap-2 text-[13px] leading-snug text-neutral-200">
                  <span className="shrink-0 text-accent">•</span>
                  <span>
                    <Inline text={it} />
                  </span>
                </li>
              ))}
            </ul>
          );
        if (b.k === "table")
          return (
            <div key={i} className="-mx-1 overflow-x-auto px-1">
              <table
                className={`border-collapse text-[12px] ${b.headers.length >= 4 ? "min-w-[640px]" : "w-full"}`}
              >
                <thead>
                  <tr>
                    {b.headers.map((h, j) => (
                      <th
                        key={j}
                        className="border border-surface-3 bg-surface-2 px-2 py-1 text-left font-semibold text-neutral-300"
                      >
                        {h}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {b.rows.map((r, ri) => (
                    <tr key={ri}>
                      {r.map((c, ci) => (
                        <td
                          key={ci}
                          className={`border border-surface-3 px-2 py-1 align-top text-neutral-200 ${
                            ci === 0 && b.headers.length >= 4 ? "whitespace-nowrap" : ""
                          }`}
                        >
                          <Inline text={c} />
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        return (
          <p key={i} className="text-[13px] leading-relaxed text-neutral-300">
            <Inline text={b.text} />
          </p>
        );
      })}
    </div>
  );
}
