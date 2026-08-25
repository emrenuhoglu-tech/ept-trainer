# Dış Metodoloji Çıkarımı — public/ücretsiz kaynak taraması (2026-08-25)

**Guardrail:** Aşağıdakiler kamuya açık, yaygın öğretilen KAVRAMLAR (risk premium,
G-Bucks, ICM). Kaynakların branded çerçeveleri (Galfond "BRAIN", Leonard senaryoları)
**kopyalanmaz** — yalnız kavram ilhamı, kendi özgün dilimizle, Emre'nin sahasına
kalibre. Frekans/range/video içeriği shipped app'e girmez.

## 1. Risk Premium — en değerli çıkarım (nitel → ölçülebilir)

Kitabın ICM disiplini ("cover ediliyorsan daralt", "bubble'da QQ bile fold olabilir")
şu ana kadar **nitel**. Risk premium onu **sayı** yapar:

- **Bubble factor** = chip kaybının maliyeti ÷ chip kazancının değeri.
- **Risk premium** = ICM yüzünden all-in call'a eklenen ekstra gerekli equity.
- Örnek: cash'te %37.5 equity yeten call, bubble'da ~**%47** gerektirir → **%9.5 risk primi.**
  Para yakını + final table'da bu prim çok sertleşir; cover eden'e karşı en yüksek.

**App'e etkisi:** solver pipeline'ın ICM modu + EV-loss puanlaması buradan beslenir.
Kitabın `(kalibre et)` ICM slotları (B12, B17.10) gerçek "gereken equity" sayısına döner:
kullanıcıya "bu call ICM'de %47 istiyor, elin %43 → fold" diye **gradeable** hale gelir.
→ **Öneri: kitaba kısa bir "Risk Premium" bölümü** (B12'yi sayısallaştırır; onay-kapılı draft).

## 2. G-Bucks / range-vs-range (Galfond, ~15 yıllık public kavram)

Equity'ni rakibin TEK ELİNE değil, RANGE'ine karşı ölç. Kitap zaten range-tabanlı
("şişmiş potta tek per = bluff-catcher" bir range ifadesidir) ama kavramı hiç
**adlandırmıyor.** Küçük kazanç: temel bir "neden tek ele bakma" çıpası eklenebilir.
Düşük öncelik (kitap zaten yaşıyor bunu).

## 3. Yapısal "neden" okuması (GTO modu annotate katmanı için)

Galfond'un solver-okuma yöntemi (BRAIN akronimi + "Value/Sizing/River first" hiyerarşisi)
ezber yerine "solver neden böyle seçti"yi yapılandırır. **BRAIN branded → kopyalanmaz.**
İlham: GTO modunda bir range gösterirken "neden" için KENDİ özgün okuma-adımlarımızı
yazarız (board dokusu → range avantajı → her tarafın range'i ne istiyor → gerisini boşver).
Bu, dual-lens'in "solver = neden" tarafının pedagojik iskeleti.

## 4. MTT beceri önceliği (Leonard/RIO topluluk sıralaması) — bizi doğruluyor

Sıralama: **Volume(1) > ICM(2) > Fitness(3) > Mental(4) > Heads-Up(5, EN AZ).**

- **ICM #2** → app'in en büyük modüllerinin (M11 ICM, stack-modları, disiplin) doğru öncelik olduğunu doğrular.
- **HU EN AZ** → M21'in HU'yu bilerek **hafif/framework** tutması (B12.5: tam Nash molada) doğru karar. Over-invest etme.
- Nüans: Leonard HU çalışmanın genel cEV/postflop sezgisini bilediğini söylüyor — değersiz değil, düşük doğrudan-ROI.

## 5. Leonard: "ICM çözülmez, senaryo" — golden-spots'u doğruluyor

ICM'i preflop/postflop gibi tek chart'a çözmez; kavram (ICM Collision Effect) + gerçek
final-table senaryolarıyla öğretir. → Bizim `golden-spots.json` bubble/FT senaryo
yaklaşımı + kitap B12.5 ile aynı. Chart değil senaryo.

## Sonuç — aksiyon

1. **Risk Premium bölümü** (kitap, onay-kapılı) — en yüksek değer; ICM'i gradeable yapar.
2. Range-vs-range çıpası — opsiyonel, düşük öncelik.
3. GTO-modu "neden" okuması — kendi özgün adımlarımız (pipeline'la birlikte, Barcelona sonrası).
4. HU'yu hafif tut, ICM'e ağırlık ver — mevcut denge doğru, değiştirme.

Kaynaklar (public): thepokerbank/pokerstrategy (G-Bucks), gtowizard/bbzpoker/pokercoaching
(risk premium & bubble factor), pokernews/gipsyteam (Leonard), pokerfuse/RIO (Galfond framework).
