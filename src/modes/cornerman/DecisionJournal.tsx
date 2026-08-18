import { useState } from "react";
import { load, save } from "../../lib/storage";
import { recordPractice, cornermanActive } from "../../lib/progress";
import { localIsoDay } from "../../lib/date";

// Karar günlüğü — sonucu bilmeden ÖNCE yaz. Süreç puanla: iyi girip kaybetmek doğrudur.
// EPT serisi boyunca masadan getirdiğin leak'ler ertesi gün drill tohumu olur.
interface JEntry {
  day: string;
  el: string;
  aksiyon: string;
  gerekce: string;
  guven: number;
}

const KEY = "journal";
const CONF = [
  { v: 0.6, label: "%60" },
  { v: 0.8, label: "%80" },
  { v: 0.95, label: "%95" },
];

export function DecisionJournal({ onDone }: { onDone: () => void }) {
  const [list, setList] = useState<JEntry[]>(() => load<JEntry[]>(KEY, []));
  const [el, setEl] = useState("");
  const [aksiyon, setAksiyon] = useState("");
  const [gerekce, setGerekce] = useState("");
  const [guven, setGuven] = useState(0.8);
  const [msg, setMsg] = useState<{ ok: boolean; text: string } | null>(null);
  // "Ertesi gün süreç puanlanır" sözünü kapat: dünün elleri drill tohumudur.
  const dunkuEl = list.filter((e) => e.day === localIsoDay(-1)).length;

  function add() {
    if (!el.trim() || !aksiyon.trim()) {
      setMsg({ ok: false, text: "El ve Aksiyon zorunlu — ikisini de doldur." });
      return;
    }
    const next = [{ day: localIsoDay(0), el, aksiyon, gerekce, guven }, ...list];
    setList(next);
    save(KEY, next);
    recordPractice();
    setEl("");
    setAksiyon("");
    setGerekce("");
    setMsg({ ok: true, text: "Kaydedildi ✓" });
  }

  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← İlerleme
        </button>
        <span className="font-semibold text-neutral-100">🗒 Karar günlüğü</span>
        <span className="w-12" />
      </div>

      {cornermanActive() && (
        <div className="rounded-xl border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent">
          🥊 Cornerman modu açık. Taper: hacmi düşür, yoğunluğu koru. Gece geç çalışma yok — uyku tilt'i büyütür.
        </div>
      )}

      <p className="text-sm text-neutral-500">
        Sonucu bilmeden yaz. İyi karar kötü sonuç = doğru. Ertesi gün süreç puanlanır, sonuç değil.
      </p>

      {dunkuEl > 0 && (
        <a
          href="#/drill"
          className="rounded-xl border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent"
        >
          Dün masadan {dunkuEl} el getirdin → Drill'de puanla
        </a>
      )}

      <div className="card space-y-2 p-4">
        <input
          value={el}
          onChange={(e) => setEl(e.target.value)}
          placeholder="El / spot (ör. 42bb CO KQo, HJ açtı)"
          className="w-full rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <input
          value={aksiyon}
          onChange={(e) => setAksiyon(e.target.value)}
          placeholder="Aksiyon (fold / 3-bet 9bb / check-call…)"
          className="w-full rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <textarea
          value={gerekce}
          onChange={(e) => setGerekce(e.target.value)}
          rows={2}
          placeholder="Gerekçe (neden?)"
          className="w-full resize-none rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"
        />
        <div className="flex items-center gap-2">
          <span className="text-xs text-neutral-500">Güven:</span>
          {CONF.map((c) => (
            <button
              key={c.v}
              onClick={() => setGuven(c.v)}
              className={
                "rounded-full px-2.5 py-1 text-xs " +
                (guven === c.v ? "bg-accent text-black font-semibold" : "bg-surface-2 text-neutral-400")
              }
            >
              {c.label}
            </button>
          ))}
          <button onClick={add} className="btn-accent ml-auto px-4 py-2 text-sm">
            Kaydet
          </button>
        </div>
        {msg && (
          <div className={"text-xs " + (msg.ok ? "text-emerald-400" : "text-red-400")}>
            {msg.text}
          </div>
        )}
      </div>

      {list.length === 0 ? (
        <p className="text-center text-sm text-neutral-600">Henüz kayıt yok.</p>
      ) : (
        <div className="space-y-2">
          {list.map((e, i) => (
            <div key={i} className="card p-3 text-sm">
              <div className="flex items-center justify-between">
                <span className="font-semibold text-neutral-100">{e.el}</span>
                <span className="text-xs text-neutral-500">{e.day}</span>
              </div>
              <div className="text-accent">{e.aksiyon} · %{Math.round(e.guven * 100)}</div>
              {e.gerekce && <div className="mt-1 text-neutral-400">{e.gerekce}</div>}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
