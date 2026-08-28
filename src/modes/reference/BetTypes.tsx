// Bahis Tipleri — value / bluff / thin value / overbet tek referans kartinda:
// nerede, nasil (boyut), hangi durumda.
//   value + bluff  -> KITAPTAN (birebir alinti, bolum referansli).
//   thin + overbet -> KITAP DISI genel teori (Equity Sezgisi gibi acikca etiketli).
// Her kitap-disi kart bir KITAP UYARISI/KOPRUSU ile kitabin doktrinine baglanir;
// karar belirsizse kitap kazanir. Poker degeri burada "iyilestirilmez".

type Src = "book" | "ext";

interface BetCard {
  name: string;
  glyph: string;
  ne: string; // tek cumle: bu bahis nedir
  src: Src;
  cite: string; // kitap bolumleri veya "genel teori"
  nasil: string[]; // boyut / mekanik
  durum: string[]; // hangi durumda (veya yapilmaz)
  note?: { kind: "kopru" | "uyari"; text: string };
}

const CARDS: BetCard[] = [
  {
    name: "Value bet",
    glyph: "💰",
    ne: "Senden ZAYIF bir eli ödetmek. Ödeyecek zayıf el yoksa value yoktur.",
    src: "book",
    cite: "Bölüm 0.2 · Bölüm 6 · Vaka 3 · Hızlı Ref",
    nasil: [
      "Filtre (her value kararının önünde): “Benden zayıf hangi el ödüyor?” Cevap yoksa bahis value değil.",
      "Flop + turn’de net favoriysen value bet doğru (Vaka 3: “ikisi de doğruydu”).",
      "Kötü river’da overpair: küçük pota check-call, büyük pota check-fold — value target kalktıysa şişirme.",
      "Preflop’ta value, geniş value 3-bet’inden gelir; boyutlar Hızlı Referans’taki tablodan.",
    ],
    durum: [
      "Station / rec tipine karşı: fold etmez → blöf değil, value bet düşün (Bölüm 1.4).",
      "Reg’e karşı board senin açılış aralığına uyuyorsa (Bölüm 6.1).",
      "Şişmiş potta tek per ile DEĞİL — orada el bluff-catcher’dır (kök hata).",
    ],
  },
  {
    name: "Bluff bet",
    glyph: "🎭",
    ne: "Üç kriterden geçen elle blöf yakıtı. Biri eksikse blöf değil, kaybedilen chip.",
    src: "book",
    cite: "Bölüm 1 (1.1–1.4) · Bölüm 6",
    nasil: [
      "Üç kriter: bloker + bağlantı + board sahipliği (Bölüm 1.1).",
      "Hamleyi board’un sahibi seçer: check-raise blöf, SENİN aralığına çarpan boardlarda (T98, 765, J-orta) — Bölüm 1.3.",
      "Suited tuzağı: J2s blöf yakıtı değil (bloker yok, bağlantı zayıf). Aranan “suited” değil, bağlı + bloker (Bölüm 1.2).",
    ],
    durum: [
      "YAPILMAZ — station / rec’e blöf: fold etmez (Bölüm 1.4).",
      "YAPILMAZ — OOP blöf 3-bet: çoğu zaman hata (Kırmızı bayrak).",
      "YAPILMAZ — station’a semi-bluff = para yakma; board senin aralığına çarpmıyorsa inandırıcılık düşük (Bölüm 6.1).",
    ],
  },
  {
    name: "Thin value bet",
    glyph: "🪶",
    ne: "Marjinal-güçlü eli (zayıf top pair, iyi kicker’lı orta çift) rakibin DAHA zayıf ama ödeyen aralığına karşı küçük değer için betlemek.",
    src: "ext",
    cite: "genel teori",
    nasil: [
      "Küçük boyut: ~¼–⅓ pot. Merged (polarize DEĞİL) — orta güçteki eli ödetmek istiyorsun.",
      "Genelde IP ve tek-raise’li KÜÇÜK pot. Amaç: check’lersen masada bırakacağın parayı almak.",
    ],
    durum: [
      "Rakip station / geniş caller; board kuru-ish; elin showdown value taşıyor ama net favori değil.",
    ],
    note: {
      kind: "uyari",
      text: "Kitap köprüsü: kitap “thin value” terimini kullanmaz ama ruhu Bölüm 2’de var — “el aynı, pot küçükken marjinal ellerden para sızdırır”. Uyarı: thin value SADECE küçük pota aittir. Pot şiştiyse thin value arama; orada tek per bluff-catcher’dır (kök hata) → check.",
    },
  },
  {
    name: "Overbet",
    glyph: "🔨",
    ne: "Pottan büyük bahis (>1× pot), polarize aralıkla: ya nut’lar ya blöfler — orta el yok.",
    src: "ext",
    cite: "genel teori",
    nasil: [
      "Boyut: ~1.25–2× pot. Sadece polarize; blöf tarafında bloker’ların olsun.",
      "Board’da nut avantajın olmalı: senin aralığın nut’ları içeriyor, rakibinki capped (içermiyor). Genelde river / çok kuru turn.",
    ],
    durum: [
      "Net value target VAR ve zayıf el ödeyebilir; ya da güvenilir blöf (bloker + board sahipliği).",
    ],
    note: {
      kind: "uyari",
      text: "Kitap uyarısı: overbet = büyük value bet, aynı filtre geçerli — “river’da senden zayıf el ödemeyecekse value değildir” (Bölüm 0.2 / Vaka 3). Belirsizse kitabın kuralına dön: büyük pota check-fold, küçük pota check-call. PLO’da “iki pot bet = stack ortada” (Bölüm 8).",
    },
  },
  {
    name: "Polarize vs Merged",
    glyph: "⚖️",
    ne: "Bahsin İÇİNDE hangi eller var sorusu. Polarize = uçlar (nut + blöf), orta el yok. Merged = tepeden aşağı süreklilik, blöf az.",
    src: "ext",
    cite: "genel teori · terim tanımı",
    nasil: [
      "Polarize → BÜYÜK boy. Orta elini bahse koymazsın; onlar check/call aralığında kalır. Rakip pahalı bir karar verir: nut’a mı blöfe mi bakıyorum?",
      "Merged (lineer) → KÜÇÜK boy. Tepeden aşağı iyi ellerin devam eder, blöf dilimi incedir. Amaç ucuza geniş ödetmek.",
      "Boy ile aralık aynı anda seçilir: büyük boy + orta el = kendi kendine tuzak. Küçük boy + saf nut = para masada kalır.",
      "Hangisi? Rakibin devam aralığına bak: az call ediyorsa polar-büyük; çok call ediyorsa merged-küçük.",
    ],
    durum: [
      "Polar: nut avantajın var, rakip capped, board senin aralığını taşıyor (Bölüm 18.2 · Bölüm 11).",
      "Merged: rakip geniş devam ediyor, aralığın nut ağırlıklı değil ama iyi tarafta — ıslak/bağlantılı board, multiway.",
      "Yapılmaz: aynı boyu her elle kullanmak. Aralığın açık olmasının sebebi budur — büyük boy hep nut, küçük boy hep orta el demeye başlarsan rakip elini ücretsiz okur.",
    ],
    note: {
      kind: "kopru",
      text: "Kitap köprüsü: kitap terimi tanımlamaz ama doktrini her yerde kullanır — “overbet polar, downbet merged” (Bölüm 18.2 / 11.1). “Standart oynuyorum, elim açık oluyor” şikâyetinin cevabı burada: sorun ellerin değil, her boyla tek tip aralık göstermen. Aynı boyda hem value hem blöf taşıdığında rakip doğru fold edemez.",
    },
  },
];

function SrcBadge({ src, cite }: { src: Src; cite: string }) {
  return src === "book" ? (
    <span className="shrink-0 rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300">
      Kitaptan · {cite}
    </span>
  ) : (
    <span className="shrink-0 rounded border border-dashed border-accent/50 bg-accent-soft px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent">
      Kitap dışı · genel teori
    </span>
  );
}

function Block({ label, items, danger }: { label: string; items: string[]; danger?: boolean }) {
  return (
    <div>
      <h3 className="mb-1 text-[10px] font-semibold uppercase tracking-wide text-neutral-500">{label}</h3>
      <ul className="space-y-1">
        {items.map((t, i) => (
          <li key={i} className="flex gap-1.5 text-[13px] leading-snug text-neutral-300">
            <span className={"mt-0.5 " + (danger ? "text-red-400" : "text-accent")}>{danger ? "✕" : "•"}</span>
            <span>{t}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export function BetTypes({ onDone }: { onDone: () => void }) {
  return (
    <div className="flex flex-col gap-4 p-4">
      <div className="flex items-center justify-between text-sm">
        <button onClick={onDone} className="text-neutral-400">
          ← Referans
        </button>
        <span className="font-semibold text-neutral-100">🎯 Bahis Tipleri</span>
        <span className="w-16" />
      </div>

      <div className="rounded-xl border border-dashed border-accent/50 bg-accent-soft px-4 py-3 text-sm text-accent">
        <div className="font-semibold">İkisi kitaptan, üçü kitap dışı.</div>
        <p className="mt-1 text-[13px] leading-relaxed text-accent/90">
          <b className="text-emerald-300">Value</b> ve <b className="text-emerald-300">Bluff</b> birebir kitaptan
          (bölüm referanslı). <b>Thin value</b>, <b>Overbet</b> ve <b>Polarize vs Merged</b> kitapta ayrı başlık
          değil — genel teori olarak eklendi ve her biri bir <b>kitap kuralıyla</b> sınırlandı. Karar belirsizse
          kitap kazanır.
        </p>
      </div>

      {CARDS.map((c) => (
        <section key={c.name} className="card p-4">
          <div className="mb-2">
            <h2 className="font-semibold">
              {c.glyph} {c.name}
            </h2>
            <div className="mt-1.5">
              <SrcBadge src={c.src} cite={c.cite} />
            </div>
          </div>
          <p className="mb-3 text-[13px] italic leading-snug text-neutral-400">{c.ne}</p>
          <div className="space-y-3">
            <Block label="Nasıl (boyut / mekanik)" items={c.nasil} />
            <Block label="Hangi durumda" items={c.durum} danger={c.name === "Bluff bet"} />
          </div>
          {c.note && (
            <div
              className={
                "mt-3 rounded-lg border border-dashed px-3 py-2 text-[12px] leading-relaxed " +
                (c.note.kind === "uyari"
                  ? "border-amber-500/40 bg-amber-500/10 text-amber-200/90"
                  : "border-neutral-600 bg-surface-2 text-neutral-300")
              }
            >
              {c.note.text}
            </div>
          )}
        </section>
      ))}

      <p className="px-1 text-[12px] leading-relaxed text-neutral-500">
        Dört tip de aynı soruya bağlanır: <b className="text-neutral-300">“benden zayıf hangi el ödüyor / iyi el fold
        eder mi?”</b> Value ödetir, bluff fold ettirir; thin value küçük pota, overbet net target’a aittir. Cevap yoksa
        bahis yok — <b className="text-neutral-300">kitabın kuralı</b>.
      </p>
    </div>
  );
}
