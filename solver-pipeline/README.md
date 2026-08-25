# Solver Pipeline — Dual-Lens Data Layer

Tasarım fazı (2026-08-25). **Kod henüz canlı app'e bağlı değil.** Bir örnek HRC
export'u gelince converter tamamlanıp `src/data/`'e beslenecek.

## Amaç

App'in aralık verisini iki lens'ten birden sunmak — tek veri modeli, iki mod:

| Mod | Öğretilen/puanlanan | Yanında gösterilen |
|---|---|---|
| **Disiplin (kitap-first)** | Kitabın exploit/disiplin range'i | Solver baseline = "neden" |
| **GTO (solver-first)** | Saf solver frekansı | Kitap = "neden/disiplin" notu |

Aynı JSON her iki modu da besler → hangi lens öne çıkarsa çıksın **rework yok**.

## Rol dağılımı (kaynaklar)

| Kaynak | Rol | Kural |
|---|---|---|
| **HRC v4 Pro** | Ana preflop chipEV + ICM üretici | Kendi solve'umuz + resmî export → JSON. **Ticari/public paylaşım iznini YAZILI teyit et** (app gh-pages'te canlı). |
| **PioSOLVER 3** | Postflop / SPR üretici | Kendi range+ağaç → kendi solve. Çıktı bizim, serbest. |
| **GTO Wizard** | Sadece manuel QC | **shipped data'ya ASLA girmez** — kopyalama/otomatik sorgu yok, EULA. Yalnız özel karşılaştırma. |
| **RYE / RIO** | Açıklama dili, drill tasarımı, **pedagojik model** | Frekans kaynağı DEĞİL. **Paywalled + telifli → içerik ASLA kopyalanmaz** (GTOW ile aynı disiplin); yalnız metodoloji ilhamı, kendi özgün çerçevemiz. |
| **PokerStars Live** | Turnuva yapısı/kuralları | Oyuncu sayısı, FT yapısı, starting stack. |

## Run It Once — metodoloji notları (2026-08-25 araştırma)

RIO'dan alınacak **veri değil, öğretme modeli** — ve ikisi de bizim tasarımı doğruluyor:

- **Galfond tezi: "solver gibi DÜŞÜN, solver gibi OYNAMA."** Çıktı ezberlemek zihinsel
  yük + paradoksal olarak sömürülme demektir. → Bizim **EV-loss skorlama + Disiplin/GTO
  iki-lens** kararımızın birebir gerekçesi. Chart ezberleten değil, "neden"i öğreten app.
- **Galfond "BRAIN Framework"** (Simplifying Solvers): solver çıktısını ezbersiz okuma
  adımları. İçeriği paywalled/telifli → **kopyalanmaz.** İlham: GTO modunun annotate
  katmanında "bu range neden böyle" için KENDİ özgün okuma-çerçevemizi yazarız.
- **Patrick Leonard ICM yaklaşımı:** ICM preflop/postflop gibi "çözülemez"; kavram
  (ICM Collision Effect) + gerçek final-table senaryolarıyla öğretilir. → Bizim kitabın
  **B12.5 "tam Nash yazılmaz, molada bakılır"** ve golden-spots'taki bubble/FT senaryo
  yaklaşımıyla AYNI. Leonard bizi doğruluyor: ICM = senaryo, çözülmüş chart değil.

**Guardrail:** RIO/RYE içeriği (video, framework adımları, range) shipped app'e ASLA
girmez — GTOW ile aynı disiplin. Sadece pedagojik yön: "why > chart", "senaryo > tablo".

## Çatışma kuralı (iki beyin kavga etmesin)

Solver frekansı ile kitabın (bilerek daha dar/exploit) range'i çakışacak. Kural:

> **Disiplin modunda öğretilen = kitabınki; solver sapmanın gerekçesini verir.
> GTO modunda öğretilen = solver; kitap disiplin notunu verir. Hiçbir modda
> solver, kitabın exploit range'ini SESSİZCE ezmez.** `(kalibre et)` slotları
> solver sayısıyla dolar ama kitabın "neden"i kaybolmaz.

## EV-loss skorlama (frekans değil)

Kullanıcı **tam frekansa göre değil, EV kaybına göre** puanlanır:
`evLoss = maxActionEV − chosenActionEV`.

| evLoss (bb/100 veya %pot) | Sonuç |
|---|---|
| ≈ 0 (near-tie) | Doğru — "yanlış" DEME |
| küçük | Kabul, ince kayıp notu |
| büyük | Leak — asıl öğretilecek hata |

Solver `%55 call / %45 raise` gösteriyorsa iki aksiyon da ~eşit EV → ikisi de
doğru. Bu, kitabın zaten söylediği ilkedir.

## Veri modeli (superset — TS referansı)

```ts
interface SolvedSpot {
  id: string;                       // "rfi_btn_40_chipev"
  provenance: {
    engine: "HRC" | "PioSOLVER";
    version: string;                // "4.x"
    calculatedAt: string;           // ISO "2026-09-05"
    format: string;                 // "NLHE_MTT_8MAX_BB_ANTE"
    mode: "chipEV" | "ICM";
    icmContext: "chipEV" | "bubble" | "final_table";
    effectiveStackBB: number;
    treeConfigId: string;           // "mtt40_v1"
    validation: { crossCheckedWith?: string; status: "passed"|"pending"|"flagged" };
  };
  spot: { seat: string; action: Action; vs?: string };   // Action = RFI|vs_open|3bet|4bet|squeeze|BvB
  solver: {                         // GTO lens (truth)
    strategy: Record<string, {      // hand -> mixed strategy + per-action EV
      freq: Record<string, number>; // {"raise":1,"call":0,"fold":0}
      ev:   Record<string, number>; // {"raise":0.42,"call":0.41,"fold":0}
    }>;
    sizings: Record<string, number>; // action -> bb or pot fraction
  };
  doctrine: {                       // book/discipline lens
    bookSlot: string;               // "B4.3" / "17.3" — which (kalibre et) slot
    taughtRange?: string;           // handgrid string (kitabın exploit range'i)
    exploitNote?: string;           // solver'dan neden sapıyoruz (rec saha)
  };
  liveExploit?: {                   // AYRI katman — solver'a asla karışmaz
    pool: string;                   // "EPT_Barcelona_2026"
    note: string;
    handHistoryRef?: string;
  };
}
```

App tarafı: Disiplin modu `doctrine.taughtRange`'e göre gradeler (sapma açıklanır);
GTO modu `solver.strategy`'ye göre EV-loss ile gradeler. Her mod diğerini annotate
gösterir. `liveExploit` yalnız Disiplin modunda, ayrı rozet olarak.

## Pipeline akışı

```
HRC solve  ──export──►  raw JSON  ──convert-hrc.mjs──►  SolvedSpot[]  ──validate──►  src/data/solver/
   (sen)                                  (bu klasör)                    (schema.json)      (app)
                                                                             ▲
                                            GTO Wizard ── manuel QC ─────────┘  (status: passed, veri girmez)
```

## Sıradaki adım

1. **Barcelona bitince** (29 Ağu+): sen HRC'den **tek bir örnek export** ver.
2. Örneğe göre `convert-hrc.mjs`'teki alan eşlemesini kesinleştiririm.
3. 50 golden-spot'u (`golden-spots.json`) solve et → converter → validate → app.
4. App'e mod toggle + EV-loss grader eklenir (iki repo, kitap-slot bağlı).

## Dosyalar

- `README.md` — bu tasarım
- `schema.json` — SolvedSpot JSON Schema (doğrulama)
- `golden-spots.json` — 50 golden-spot spesifikasyonu (solve listesi)
- `convert-hrc.mjs` — HRC export → SolvedSpot converter + validator (iskelet;
  alan eşlemesi örnek export'la kesinleşecek)
