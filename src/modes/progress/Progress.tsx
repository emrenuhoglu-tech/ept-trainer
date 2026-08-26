import { useMemo, useRef, useState } from "react";
import {
  dueEntries,
  confidentWrong,
  calibration,
  masteryCounts,
  type Sonuc,
  type Mastery,
} from "../../lib/karne";
import { getStats, daysUntilEPT, cornermanActive } from "../../lib/progress";
import { modules } from "../../data/modules";
import { kavramChapter } from "../quiz/scenarios";
import { prefetchHd, sentencesOf, getTtsMode, setTtsMode, type TtsMode } from "../../lib/speech";
import { exportAll, importAll } from "../../lib/storage";
import { KarneTrend } from "../../components/KarneTrend";

const DOT: Record<Sonuc, string> = {
  correct: "text-emerald-400",
  half: "text-accent",
  wrong: "text-red-400",
};

const MASTERY: { key: Mastery; label: string; cls: string }[] = [
  { key: "saglam", label: "Sağlam", cls: "text-emerald-400" },
  { key: "yetkin", label: "Yetkin", cls: "text-sky-400" },
  { key: "asina", label: "Aşina", cls: "text-accent" },
  { key: "gorundu", label: "Görüldü", cls: "text-neutral-400" },
];

export function Progress({ onReview, onJournal }: { onReview?: () => void; onJournal?: () => void }) {
  const [dl, setDl] = useState<{ running: boolean; done: number; total: number; msg?: string }>({
    running: false,
    done: 0,
    total: 0,
  });
  const [tts, setTts] = useState<TtsMode>(() => getTtsMode());
  const [bkMsg, setBkMsg] = useState<string | null>(null);
  const fileRef = useRef<HTMLInputElement>(null);

  function pickTts(m: TtsMode) {
    setTtsMode(m);
    setTts(m);
  }

  function downloadBackup() {
    const blob = new Blob([exportAll()], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "ept-yedek.json";
    a.click();
    URL.revokeObjectURL(url);
  }

  async function onBackupFile(input: HTMLInputElement) {
    const f = input.files?.[0];
    input.value = "";
    if (!f) return;
    const res = importAll(await f.text());
    if (res.ok) {
      location.reload();
    } else {
      setBkMsg("Yedek okunamadı — dosya geçerli bir EPT yedeği değil.");
    }
  }

  async function downloadAudio() {
    // Oynatma cümle cümle konuşur (LessonPlayer) → prefetch de AYNI cümle
    // anahtarlarını üretmeli, yoksa çevrimdışı cache ıskalar.
    const texts = modules.flatMap((m) => m.slides.flatMap((s) => sentencesOf(s.narration)));
    setDl({ running: true, done: 0, total: texts.length });
    const res = await prefetchHd(texts, (done, total) => setDl({ running: true, done, total }));
    setDl({
      running: false,
      done: res.ok,
      total: texts.length,
      msg: res.fail ? `${res.ok} indirildi, ${res.fail} atlandı (proxy/anahtar?).` : `${res.ok} ses hazır — çevrimdışı çalışır.`,
    });
  }

  const { stats, due, cwrong, cal, mastery, acc, eptDays } = useMemo(() => {
    const stats = getStats();
    const due = dueEntries();
    const cwrong = confidentWrong().slice(0, 6);
    const cal = calibration();
    const mastery = masteryCounts();
    const acc = stats.quizTotal ? Math.round((stats.quizCorrect / stats.quizTotal) * 100) : null;
    return { stats, due, cwrong, cal, mastery, acc, eptDays: daysUntilEPT() };
  }, []);

  return (
    <div className="flex flex-col gap-4 p-4">
      <h1 className="text-lg font-bold">📊 İlerleme</h1>

      {/* geri sayım / cornerman */}
      {cornermanActive() ? (
        <div className="rounded-xl border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent">
          🥊 Cornerman modu — seri günü. Taper: az ama sert. Leak card + karar günlüğü.
        </div>
      ) : (
        eptDays > 0 && (
          <div className="rounded-xl border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent">
            🃏 EPT Day-1'e <b>{eptDays} gün</b> — her gün 1 drill yeter.
          </div>
        )
      )}

      {/* üst istatistik şeridi */}
      <div className="grid grid-cols-3 gap-2">
        <Stat big={`🔥 ${stats.streak}`} label="gün seri" />
        <Stat big={`${stats.totalDays}`} label="çalışılan gün" />
        <Stat big={acc === null ? "—" : `%${acc}`} label="quiz doğruluk" />
      </div>
      {!stats.practicedToday && (
        <div className="rounded-xl bg-surface-1 px-4 py-3 text-sm text-neutral-300">
          Bugün henüz çalışmadın — bir Quiz ya da Drill yeter. (Seri kalkanın var: tek boş gün seriyi kırmaz.)
        </div>
      )}
      {onJournal && (
        <button onClick={onJournal} className="btn-ghost w-full py-2.5 text-sm">
          🗒 Karar günlüğü →
        </button>
      )}

      {/* hazırlık panosu (mastery) */}
      <section className="card p-4">
        <h2 className="mb-2 font-semibold">Hazırlık panosu</h2>
        <div className="grid grid-cols-4 gap-2 text-center">
          {MASTERY.map((m) => (
            <div key={m.key} className="rounded-lg bg-surface-2 py-2">
              <div className={"text-lg font-bold " + m.cls}>{mastery[m.key]}</div>
              <div className="text-[10px] text-neutral-500">{m.label}</div>
            </div>
          ))}
        </div>
        <p className="mt-2 text-[11px] text-neutral-500">
          Sağlam = 3 farklı kılıkta, ≥3 ayrı günde doğru. Tek kaçırış seriyi sıfırlar — kademe en baştan kurulur.
        </p>
      </section>

      {/* ilerleme trendi (sparkline) */}
      <KarneTrend />

      {/* kalibrasyon + emin-ama-yanlış */}
      {(cal || cwrong.length > 0) && (
        <section className="card p-4">
          <h2 className="mb-2 font-semibold">Kalibrasyon</h2>
          {cal && (
            <p className="text-sm text-neutral-300">
              Yüksek güvenle (≥%80) verdiğin cevaplarda gerçek isabet:{" "}
              <b className={cal.hit / cal.high >= 0.85 ? "text-emerald-400" : "text-accent"}>
                %{Math.round((cal.hit / cal.high) * 100)}
              </b>{" "}
              <span className="text-neutral-500">({cal.hit}/{cal.high})</span>
            </p>
          )}
          {cwrong.length > 0 && (
            <>
              <div className="mt-3 text-xs uppercase tracking-wide text-red-300">
                Emin-ama-yanlış (en tehlikeli)
              </div>
              <p className="mt-0.5 text-[11px] text-neutral-600">Kavrama dokun → o bölümü tekrar oku.</p>
              <ul className="mt-1 space-y-1.5">
                {cwrong.map((e) => (
                  <li key={e.id} className="flex items-center gap-2 text-sm">
                    <span className="text-red-400">●</span>
                    <KavramLink kavram={e.kavram} />
                    {e.severity === "tournament_life" && (
                      <span className="rounded-full bg-red-500/20 px-2 py-0.5 text-[10px] text-red-300">
                        turnuva-hayatı
                      </span>
                    )}
                  </li>
                ))}
              </ul>
            </>
          )}
        </section>
      )}

      {/* bugün tekrar */}
      <section className="card p-4">
        <div className="mb-2 flex items-center justify-between">
          <h2 className="font-semibold">Bugün tekrar</h2>
          <span className="text-sm text-neutral-400">{due.length} konu</span>
        </div>
        {due.length === 0 ? (
          <p className="text-sm text-neutral-500">Tekrar zamanı gelen konu yok. 👍</p>
        ) : (
          <ul className="space-y-2">
            {due.slice(0, 8).map((e) => (
              <li key={e.id} className="flex gap-2 text-sm">
                <span className={DOT[e.sonuc]}>●</span>
                <span>
                  <KavramLink kavram={e.kavram} />
                  <span className="text-neutral-500"> — {e.soru_ozeti}</span>
                </span>
              </li>
            ))}
          </ul>
        )}
        {due.length > 0 && onReview && (
          <button onClick={onReview} className="btn-accent mt-3 w-full py-2.5">
            Bugün tekrar et → ({due.length})
          </button>
        )}
      </section>

      {/* çevrimdışı / ses */}
      <section className="card p-4">
        <h2 className="mb-1 font-semibold">Çevrimdışı ses</h2>
        <p className="mb-3 text-sm text-neutral-500">
          Tüm ders anlatımlarını HD sesle önceden indir — sonra internetsiz, beklemesiz çalışır.
        </p>
        <div className="mb-3 flex items-center gap-2">
          <span className="text-xs text-neutral-500">Ses:</span>
          <div className="flex overflow-hidden rounded-full border border-surface-3">
            {(["hd", "web"] as TtsMode[]).map((m) => (
              <button
                key={m}
                onClick={() => pickTts(m)}
                className={
                  "px-3.5 py-1.5 text-xs " +
                  (tts === m ? "bg-accent font-semibold text-black" : "bg-surface-2 text-neutral-400")
                }
              >
                {m === "hd" ? "HD" : "Cihaz"}
              </button>
            ))}
          </div>
          <span className="text-[11px] text-neutral-600">
            {tts === "hd" ? "proxy /api/tts" : "tarayıcı sesi"}
          </span>
        </div>
        <button
          onClick={downloadAudio}
          disabled={dl.running}
          className="btn-ghost w-full py-2.5 disabled:opacity-50"
        >
          {dl.running ? `İndiriliyor… ${dl.done}/${dl.total}` : "🔊 HD sesleri indir"}
        </button>
        {dl.msg && <p className="mt-2 text-xs text-neutral-400">{dl.msg}</p>}
      </section>

      {/* yedek */}
      <section className="card p-4">
        <h2 className="mb-1 font-semibold">Yedek</h2>
        <p className="mb-3 text-sm text-neutral-500">
          Karne, seri ve günlük bu cihazın tarayıcısında durur. Dosya olarak indir; başka
          cihazda geri yükle.
        </p>
        <div className="grid grid-cols-2 gap-2">
          <button onClick={downloadBackup} className="btn-ghost py-2.5">
            ⬇ Yedek indir
          </button>
          <button onClick={() => fileRef.current?.click()} className="btn-ghost py-2.5">
            ⬆ Yedek yükle
          </button>
        </div>
        <input
          ref={fileRef}
          type="file"
          accept="application/json,.json"
          className="hidden"
          onChange={(e) => void onBackupFile(e.currentTarget)}
        />
        {bkMsg && <p className="mt-2 text-xs text-red-300">{bkMsg}</p>}
      </section>
    </div>
  );
}

// Tekrar-oku linki: zayıf kavramı kitap bölümüne bağlar (yoksa düz metin).
function KavramLink({ kavram }: { kavram: string }) {
  const ch = kavramChapter(kavram);
  if (ch == null) return <span className="text-neutral-200">{kavram}</span>;
  return (
    <a
      href={`#/referans/bolum/${ch}`}
      className="text-neutral-200 underline decoration-dotted decoration-neutral-600 underline-offset-2 hover:text-accent hover:decoration-accent"
    >
      {kavram} <span className="text-[10px] text-neutral-500">Böl. {ch} ↗</span>
    </a>
  );
}

function Stat({ big, label }: { big: string; label: string }) {
  return (
    <div className="card flex flex-col items-center justify-center py-3">
      <div className="text-xl font-bold text-neutral-100">{big}</div>
      <div className="text-[11px] text-neutral-500">{label}</div>
    </div>
  );
}
