# POKER CEP KİTABI v5

**EPT Barcelona Edition**
16–29 Ağustos 2026

Emre Nuhoğlu
*Ağustos 2026 — turnuva-kazanma sürümü*

## v5'te ne değişti

*Omurga aynı: "şişmiş potta tek per = bluff-catcher" (kök hata). v5 kitabın PREFLOP gücünü korur ve teşhisin eksik yarısını — postflop/ICM/multiway icrasını — ekler. Mevcut bölümlerin (B0–B10) tabloları kişisel olarak kalibre; v4'ten AYNEN korundu, yalnız v3→v4 renumber'ından kalan alt-numara hataları düzeltildi. Yeni bölümler numara kaydırmamak için SONA eklendi. Her yeni sayı `(kalibre et)` slotudur — uydurma aralık/SPR/yüzde yok.*

- **YENİ Bölüm 11 — Şişmiş Pot, Turn Disiplini ve River İcrası:** kök hatanın eksik yarısı — "şişmiş pot"un SPR tanımı, turn barrel kriteri, river bluff-catch + thin value çerçevesi
- **YENİ Bölüm 12 — ICM ve Final Table Savaş Planı:** B5 jam/call tablolarına risk-premium düzeltmesi, FT rol matrisi, pay-jump/ladder, bubble av haritası, event-bazlı ICM haritası
- **YENİ Bölüm 13 — Multiway Pot Doktrini:** B7'nin adlandırdığı ama yazmadığı yarı — value daralt / blöf öl / nut-odak
- **YENİ Bölüm 14 — 40–70bb Köprü Bandı:** B4 (100–150bb) ile B5 (25–30bb) arasındaki tablosuz band
- **YENİ Bölüm 15 — PLO Turnuva Katmanı:** stack-modu + pot-geometri/SPR (B5 "3-bet=JAM" pot-limit'te geçersiz çelişkisi kapatıldı)
- **YENİ Bölüm 16 — Zihinsel Omurga:** bustout/re-entry karar kartı, tilt, otopsi zamanlaması, 8 günlük seri planı ve çakışma ön-kararları
- **B0 11→15 cümle:** B11/B12/B13/B16'nın aday cümleleri Emre onayıyla çekirdeğe işlendi (2026-08-10)
- **Alt-numara senkronu:** B6 (5.x→6.x), B8 (7.x→8.x), B9 (8.x→9.x) düzeltildi
- **Hızlı Referans** genişletildi: ICM/FT kartı, Multiway kartı, Tilt kartı, Postflop boyutlar, yorgunluk bayrakları
- **Soru bankası** 24 → yeni bölüm soruları eklendi

---

## İçindekiler

- Bölüm 0 — Masaya götürülecek 15 cümle
- Bölüm 1 — Blöf seçimi: hangi ellerle, kime, hangi hamleyle
- Bölüm 2 — Aldatıcı orta eller (JTs, KQ, KJ, 97s)
- Bölüm 3 — Stack modları ve açılış aralıkları (+ ICM katmanı)
- Bölüm 4 — Pozisyona göre 3-bet ve call aralıkları (100–150bb)
- Bölüm 5 — 25–30bb Bandı: Savaş Planı
- Bölüm 6 — Turn'de draw ile: bet mi, bedava river mı
- Bölüm 7 — Vaka otopsileri: A4s, KTo, AA river jam + WSOP Day 1A (pasiflik aynası)
- Bölüm 8 — PLO temelleri
- Bölüm 9 — Antrenman protokolü ("beni hazırla")
- Bölüm 10 — Soru bankası
- Bölüm 11 — Şişmiş Pot, Turn Disiplini ve River İcrası **YENİ ★**
- Bölüm 12 — ICM ve Final Table Savaş Planı **YENİ ★**
- Bölüm 13 — Multiway Pot Doktrini **YENİ ★**
- Bölüm 14 — 40–70bb Köprü Bandı **YENİ ★**
- Bölüm 15 — PLO Turnuva Katmanı: stack-modu, SPR, multiway **YENİ ★**
- Bölüm 16 — Zihinsel Omurga: bustout/re-entry, tilt, otopsi, seri planı **YENİ ★**
- Hızlı Referans — molada telefondan bakılacak sayfa
- Bölüm 17 — ÖZEL MODÜL: WSOP Online Main Event Day 2 **YENİ ★**
- Bölüm 18 — Flop C-bet: frekans, board dokusu, boyut **YENİ ★**
- Bölüm 19 — İnisiyatif Hatları: donk / probe / stab / float **YENİ ★**
- Bölüm 20 — Risk Premium: ICM'in sayısı **YENİ ★**
- Bölüm 21 — ICM Altında Postflop: her agresif hattı bir kademe indir **YENİ ★**
- Bölüm 22 — ICM Ne Zaman ve Kime: zaman çizelgesi + laddering **YENİ ★**
- Bölüm 23 — Saha Okuma: rakip tipleri ve exploit **YENİ ★**
- Bölüm 24 — Edge Premium: ne zaman gamble ETME (ve ne zaman mecbursun) **YENİ ★**
- Bölüm 25 — Kafamdaki Hikaye: kanıt mı anlatı mı **YENİ ★**
- Bölüm 26 — C-bet'e Karşı: caller disiplini ve eşik çalışması **YENİ ★**
- Bölüm 27 — Solver'ı Çalışmak: drill'i ve otopsiyi solvere bağla **YENİ ★**
- Bölüm 28 — PKO / Bounty: ödülü çipe çevir, aralığı koru **YENİ ★**
- Bölüm 29 — Deep Stack ve Yüksek-SPR: kök hatanın en pahalı bandı **YENİ ★**
- Bölüm 30 — Micro Stack 4-12bb: jam/fold inceltmeleri + eşitsiz-masa **YENİ ★**
- Bölüm 31 — BB-Ante Heads-Up ve HU-vs-GTO **YENİ ★**
- Bölüm 32 — 3-bet Pot Postflop: boyu board değil, el sınıfı ve ıskalayan blok seçer **YENİ ★**
- Bölüm 33 — Blind-vs-Blind: limp, raise ve jam'in derinlik katmanları + asimetrik stack **YENİ ★**

---

## Bölüm 0 — Masaya Götürülecek 15 Cümle

*Bunları ezberle. Masada düşünecek vakit olmadığında karar bu on beş cümleden çıkar. İlk 11 çekirdek; 12–15 v5'te turnuva-icrasından işlendi.*

1. **Tek per, şişmiş potta bluff-catcher'dır — AA dahil.**
   Kök hatan bu. Üç elenme buradan geldi.

2. **River'da senden zayıf el ödemeyecekse, jam value değildir.**
   Kötü river'da overpair: küçük pota check-call, büyük pota check-fold.

3. **Chop'lar jam atmaz.**
   Rakip all-in geldiyse bölüşmeye oynayan eli elinden çıkarmıştır.

4. **Blöf üç kriterden geçer: bloker, bağlantı, board sahipliği.**
   Üçünden geçmek 'blöf edilebilir' demek; hamleyi board'un sahibi seçer.

5. **Aldatıcı orta eller küçük pot kazananı, büyük pot kaybedenidir.**
   JTs, KQ, KJ, 97s. Rolü open/flat/BB-defend; asla büyük pot başlatıcı değil.

6. **Equity kâğıt üzerinde, para masada kazanılır.**
   Oynanabilirlik equity'den önce gelir. KQo'nun %45'i realize edilemiyorsa fold'dur.

7. **Her elden önce stack modu, sonra aralık.**
   45bb'de 130bb aralığı oynamak en pahalı alışkanlık.

8. **OOP 3-bet aralığım IP aralığımdan belirgin sıkıdır.**
   Çünkü OOP şişmiş potta tek per bluff-catcher'dır. Bölüm 1'e bağlanır.

9. **Canlıda kâr blöf 3-bet'ten değil, geniş value 3-bet'inden gelir.**
   Alan fold etmiyor. Dengeyi bırak, dengesizlikten kâr et.

10. **PLO'da çıplak AA, NLH'deki tek per'dir.**
    Nut potansiyeli yoksa el büyük pot oynamaz.

11. **25–30bb'de değer fold equity'den gelir, kart tamamlamaktan değil.**
    Aradığın el gelişebilen değil, şimdiden iyi olan: as, broadway, çift. Bölüm 5.

12. **Turn'de attığın boyut, river'da vereceğin kararın fiyatıdır.**
    İkinci fıçı, river'da check-fold lüksünü satın alır. Bölüm 11.

13. **ICM'de marjinal call = kök hatanın turnuva-hayatı sürümüdür.**
    Risk premium, bluff-catcher'ın ödeme eşiğini yükseltir. Bölüm 12.

14. **Multiway'de tek per, HU'dakinden bir sınıf aşağıdır.**
    Her ek oyuncu birinin nut olma ihtimalini katlar. Bölüm 13.

15. **Tilt'te alınan karar aralıktan değil, yaradan çıkar — önce yara etiketlenir.**
    Diğer kurallar ancak fark edilen tilt'te devreye girer. Bölüm 16.

---

## Bölüm 1 — Blöf Seçimi

### 1.1 Üç kriter

Bir el blöf yakıtı olacaksa şu üçünden geçmeli. Biri eksikse blöf değil, sadece kaybedilen chip.

| Kriter | Ne arıyorsun | Örnek |
|---|---|---|
| **Bloker** | Rakibin en güçlü ellerini elinden alan kart | A♠ tut: nut flush'ı bloke ediyorsun |
| **Bağlantı** | Board'a temas eden, gelişebilen yapı | OESD veya FD — sadece 'iki yüksek kart' değil |
| **Board sahipliği** | Board kimin aralığına çarpıyor | T98, 765 senin; A-K-7 kuru rakibin |

### 1.2 J2s dersi — suited tuzağı

Suited olmak bir eli blöf yakıtı yapmaz. J2s'in bloker değeri yok (kimsenin nut'ını almıyor), bağlantısı zayıf (iki kart arasında 9 boşluk), ve tamamlandığında bile alt flush riski taşıyor. Suited kelimesi seni kandırıyor: aranan şey suited değil, bağlı ve bloker.

Aynı tuzak offsuit broadway'lerde tersine işler: KJo, QJo — bloker değeri var ama bağlantı yok. Bunlar da blöf yakıtı değil.

### 1.3 Hamle seçimi: board'un sahibi kim

Üç kriterden geçen el bile yanlış hamleyle oynanabilir. Kritik ayrım:

> **Check-raise blöf, SENİN aralığına çarpan boardlarda yapılır** (T98, 765, J-orta bağlantılı).
> **Rakibin aralığına çarpan boardlarda** (A-K yüksek kuru) draw'lar sessizce call eder.

Neden: A♦ K♠ 7♣ CO'nun open aralığını ezer (AK, AQ, AJ, KQ, A7s, 77, AA, KK). Senin BB savunma aralığında kaç A-K kombinasyonu var? Az. Check-raise'in inandırıcılığı düşük → iyi eller call eder, sadece hava fold eder. Havanın potunu almak için gutshot'ını şişmiş potta riske atmış olursun. Call ise her şeyi çözer: ucuza turn, T gelirse gizli kentle stack, spade gelirse agresifleşme opsiyonu, boşsa ucuz çıkış.

### 1.4 Kime blöf yapılmaz

- **Rec / station tipi:** fold etmez. Blöf değil, value bet düşün.
- **Kısa stack:** call fiyatı stack'ine göre küçük, otomatik call bölgesinde.
- **Pota bağlanmış oyuncu (committed):** psikolojik olarak fold kapalı.
- **Bubble'da hayatta kalmaya oynayan büyük stack:** seni bedavaya ödeyecek.

---

### 1.5 İstisna: pot check-down'la geldiyse blöfü DİPTEN seç

B1.1 bloker-önce kriteri, para giren düğümler içindir. Ama pot iki tarafın da zayıflık gösterdiği bir check-down'la geç sokağa geldiyse (flop check-check, turn check → river), IP tarafında kriter tersine döner:

- Rakibin aralığı capped ve blöf-yakalayıcı-ağırlıklı → onu fold ettirmek için en iyi blokere ihtiyacın yok.
- Aralığının EN DİBİNİ (showdown değeri sıfır, blokersiz çöp) blöfe seç; bloker taşıyan marjinal ellerini check'le showdown'a götür (bazen kazanırlar).

> **Para giren düğümde blöf yakıtını B1.1 üçlüsü (bloker / bağlantı / board sahipliği) seçer; check-down RIVER düğümünde blöfü showdown-değersizliği seçer.**

Capped-aralık mantığı iki tarafta da işler: IP flop+turn'ü iki kez check-back ettiği için onun aralığı da capped'dir → OOP de bu düğümde blöfü showdown-değersizliğiyle seçer, bloker'la değil. Bloker her iki tarafta yalnızca eşitlik-bozucudur (showdown değeri denk iki çöp arasında tercih). Bu, B19.3-19.4 (probe/stab) hatlarının el-seçim katmanıdır.

## Bölüm 2 — Aldatıcı Orta Eller

> **JTs, KQ, KJ, 97s: küçük pot kazananı, büyük pot kaybedenidir.**
> Rolleri open / flat / BB-defend. Rolleri ASLA büyük pot başlatıcı (3-bet, stack-off yakıtı) değil.

Neden: JTs top pair yaptığında kicker sorunu var. KQ top pair yaptığında AK/AQ gölgesinde. 97s iki per yaptığında bile üstü açık. Bu eller pot küçükken (tek raise'li) rakibin marjinal ellerinden para sızdırır; pot büyüdüğünde (3-bet+) karşılarındaki aralık daralır ve güçlenir — dominate edilirler.

**Tek cümle:** *El aynı, pot boyutu değişince kazanan taraf değişir.*

### 2.1 KQo vakası — equity ile oynanabilirlik farkı

**42bb, Day 2. HJ (reg, ~%22) açtı, sen CO'da KQo. Doğru karar: fold.**

KQo'nun HJ'nin %22 aralığına karşı ham equity'si ~%45 — fena değil. Ama o equity'yi realize edemiyorsun:

- HJ aralığındaki AK, AQ, KK, QQ, AA senin en iyi floplarını mezara çevirir: K flopladın → AK'ye üç sokak ödersin. Q flopladın → AQ'ya ödersin.
- Yani en iyi senaryoların en pahalı tuzaklarındır.
- 42bb'de 3-bet edip 4-bet yersen devam edemezsin; call edip OOP oynamak da inisiyatifsiz.

**Ders: equity kâğıt üzerinde, para masada kazanılır.**

---

## Bölüm 3 — Stack Modları ve Açılış Aralıkları

*Bir elden önce sorulacak ilk soru: hangi moddayım? Aralık ondan sonra seçilir.*

| Mod | Karakter | Ne düşer / ne yükselir |
|---|---|---|
| **80bb+** | Standart chartlar. LJ ~%18 → BTN ~%45 | Suited connector ve küçük çift değeri tavan |
| **40–60bb** | İlk daralma. Boyut sabit, aralık kısılır | Offsuit alt bant düşer (KTo, QJo, J9o) |
| **25–40bb** | Ciddi mod değişimi | Suited connector değer kaybeder, A-x değer kazanır. 'Jam'e karşı net karar' filtresi |
| **15–25bb** | Open-jam sınırı | Bazı pozisyonlardan 2x açılır, bazılarıyla direkt jam |
| **<15bb** | Jam / fold | Aralık dışı hiçbir hamle yok |

### 3.1 Kritik eşik: 30bb altı orta çiftler

30bb altında 77–TT gibi orta çiftler post-flop oynanacak eller değil — jam-or-fold ellerdir. Set gelmezse üç sokak ödeyecek stack'in yok; gelirse de zaten kısa stack'le maksimum alamazsın.

### 3.2 ICM katmanı

> **Bubble'da 30bb ≠ Day 1'de 30bb.**
> Para yaklaşırken aynı stack aynı aralığı oynamaz. Sol tarafındaki kısa stack'ler seni koruyor, büyük stack'ler seni sıkıştırıyor.

- Solunda kısa stack'ler varsa: açılış aralığını genişlet, onlar hayatta kalmaya oynuyor.
- Solunda büyük stack'ler varsa: daralt, seni cezasız 3-bet edebilirler.
- Bubble'da orta stack en kırılgan pozisyondur — ne kısa gibi jam edebilirsin, ne büyük gibi baskı kurabilirsin. Bu modda sabır.

---

## Bölüm 4 — Pozisyona Göre 3-bet ve Call Aralıkları

*★ v3'te eklendi. 100–150bb, 8 kişilik masa varsayımıyla yazıldı.*

### 4.0 Bu bölümün mantığı

Kök hatan şişmiş potta tek per'i yanlış sınıflandırmak. O hata river'da ortaya çıkıyor ama preflop'ta doğuyor: şişmiş pot dediğimiz şey %90 oranda 3-bet'li pottur. Yani 3-bet aralığını doğru kurmak, kök hatanın FREKANSINI düşürmenin en verimli yolu — el okuma becerisini geliştirmekten daha hızlı sonuç verir.

**Her aralık iki soruyla sınanır:**

1. 3-bet edip flop görürsem, tek per yaptığımda rahat olacak mıyım? Olmayacaksam 3-bet etmiyorum — flat ediyorum veya atıyorum.
2. OOP mu kalacağım? OOP 3-bet potunda tek per tanım gereği bluff-catcher'dır. OOP aralıkları bu yüzden IP aralıklarından belirgin daha sıkıdır.

### 4.0-EK 3-bet potunda "tek per bluff-catcher" sınırı
"OOP 3-bet potunda tek per tanım gereği bluff-catcher'dır" cümlesi preflop aralık-inşa kuralıdır (OOP 3-bet aralığını sıkı tutar). Postflop'ta bluff-catcher sınırı pozisyonu değil ROLÜ izler: capped/call eden taraf için SPR ≳2'de geçerlidir (SPR ≲1.5'te onun top pair'i de çoğunlukla call-off sınıfına iner — potu başlatmaz ama jam'e katlamaz; bkz. 11.0-EK-2) — 3-bettor OOP iken (blind vs geç pozisyon, en sık durum) call eden IP'dir ve sınır ona uygulanır. Aralık + nut avantajıyla potu şişiren 3-bettor'ın overpair/TPTK'sı ise sığ SPR'de (30-45bb, SPR ≲2; orta-bağlantılı, nut avantajının sende olduğu dokular) çoğunlukla jam sınıfıdır *(kalibre et)*; underpair bu sınıfa girmez. SPR ~3-4 ve üstünde (100bb'de ≳4-5) flop-jam sınıfı çoğunlukla yoktur; kuru/düşük dokularda (8-6-2 / K-7-2 tipi) overpair çoğunlukla hâlâ stack-off elidir *(kalibre et)*, bağlantılı iki-broadway dokularda nut avantajı erir → overpair/TPTK bet + yeniden değerlendirme / pot-kontrol sınıfıdır *(stack-off eşiği: kalibre et)*. Kök hata bozulmaz ve şişirenindir: lisans SPR'ye ve dokuya bağlıdır; derinde, nut avantajının eridiği dokuda tek perle dokudan bağımsız stack-off eden 3-bettor kök hatayı yapar (bkz. B32.1, B32.3).

### 4.1 Canlı turnuva düzeltmesi

Solver aralıklarını olduğu gibi uygulamayacaksın. EPT alanında üç sistematik sapma var:

| Canlı oyuncu davranışı | Senin düzeltmen |
|---|---|
| 3-bet'e karşı çok az fold eder | Blöf 3-bet frekansını düşür, VALUE 3-bet'i genişlet |
| 4-bet blöfü neredeyse yoktur | 4-bet gördüğünde QQ ve altını ciddiye al; AK otomatik 5-bet değil |
| Açılışlar geniş, coldcall çok | Squeeze en kârlı hamlen; multiway potlarda blöf 3-bet'i bırak |

> **Canlıda para blöf 3-bet'ten değil, daha geniş value 3-bet'inden gelir.**
> Teori seni dengeye zorluyor; alan sana dengesizlikten kâr etme izni veriyor.

### 4.2 Boyutlandırma — ezberle, düşünme

| Durum | Boyut |
|---|---|
| **IP 3-bet** | Açılışın 3× (canlıda 3.5× serbest) |
| **OOP 3-bet (blinds dahil)** | Açılışın 4× |
| **Her coldcaller için** | +1 açılış boyutu ekle |
| **Squeeze (açılış + 1 caller)** | 4.5–5× |
| **4-bet IP** | 3-bet'in 2.2× |
| **4-bet OOP** | 3-bet'in 2.5× |

### 4.3 3-bet aralıkları — pozisyon eşleşmeleri

*Blöf satırındaki eller flop oynanabilirliği için seçildi, blocker teorisi için değil.*

**UTG / UTG+1 açılışına karşı — disiplin bölgesi**

| Pozisyon | VALUE | BLÖF |
|---|---|---|
| LJ / HJ | QQ+, AKs, AKo | yok |
| CO | QQ+, AKs, AKo (JJ karışım) | A5s |
| BTN | JJ+, AKs, AKo, AQs (karışım) | A5s, A4s |
| SB | QQ+, AKs, AKo | yok |
| BB | QQ+, AKs, AKo | A5s (seyrek) |

**Flat (yalnız IP, 100bb+):** TT–77, AQs, AJs, ATs, KQs, KJs, QJs, JTs, T9s, 98s. 150bb+ ise 66–22 ve 87s, 76s eklenir.

**Yapmayacağın şey:** UTG açılışına AJo, KQo, KJo ile coldcall. Bu eller ya 3-bet ya fold — ortada oynanan hâlleri tam olarak kök hatayı yaşatan ellerdir.

**LJ / HJ açılışına karşı**

| Pozisyon | VALUE | BLÖF |
|---|---|---|
| CO | JJ+, AQs+, AKo | A5s, A4s |
| BTN | TT+, AQs+, AKo, AQo (karışım) | A5s–A3s, KJs, QJs |
| SB | JJ+, AQs+, AKo | A5s, A4s |
| BB | TT+, AQs+, AKo, AQo | A5s–A3s, KJs, T9s (seyrek) |

**Flat IP (CO/BTN):** 99–22, AJs, ATs, KQs, KJs, KTs, QJs, QTs, JTs, T9s, 98s, 87s, 76s

**CO açılışına karşı**

| Pozisyon | VALUE | BLÖF |
|---|---|---|
| BTN | TT+, AJs+, AQo+, KQs | A5s–A2s, KTs, QTs, J9s, T8s |
| SB | JJ+, AJs+, AQo+, KQs | A5s–A3s, KJs |
| BB | TT+, ATs+, AQo+, KQs, KJs | A5s–A2s, K9s, QTs, J9s |

**BTN flat:** 99–22, AJo, KJo, KTs, QJs, QTs, JTs ve tüm 65s+ suited connector'lar

**BTN açılışına karşı — steal savunması**

| Pozisyon | VALUE | BLÖF |
|---|---|---|
| SB | 88+, ATs+, AJo+, KJs+, QJs | A5s–A2s, K9s, Q9s, J9s, T8s, 87s |
| BB | 99+, ATs+, AQo+, KQs, KJs | A5s–A3s, K9s–K7s, QTs, J9s, T8s, 76s |

**SB flat: neredeyse yok.** SB'den flat 100bb'de kayıp pozisyondur — 3-bet ya da fold. İstisna: 200bb+ ve zayıf, ödeyen bir BTN varsa 66–22 ve suited connector'larla flat kabul edilebilir.

**BB flat: çok geniş.** Aksiyonu kapatıyorsun, fiyat iyi. Tüm suited eller, tüm çiftler, çoğu broadway, tüm suited connector'lar.

**SB açılışına karşı (yalnız BB) — alanın en kârlı 3-bet spotu**

- **VALUE:** 88+, A9s+, ATo+, KTs+, QTs+, JTs
- **BLÖF:** K7s+, Q8s+, J8s+, T8s, 97s, 86s, 65s
- **Flat:** kalan her oynanabilir el. SB aralığı geniş, sen IP'sin — fold sebebi az.

### 4.4 Coldcall'un üç şartı

Coldcall 3-bet'ten daha zor bir karardır çünkü inisiyatifi bırakıyorsun. Üçü aynı anda sağlanmıyorsa flat etme:

1. **Pozisyon:** IP'sin ya da aksiyonu kapatıyorsun (BB).
2. **Derinlik:** set-mining için efektif stack, call'un en az 15×'i. 100bb'de 3bb call → 45bb+ arkada: tamam. 40bb'de aynı call: değil.
3. **Ödeyen rakip:** set yaptığında sana para verecek biri. Sıkı bir regi karşısında set-mining kârsızdır.

**Multiway uyarısı:** arkanda 3-bet edebilecek agresif oyuncu varsa sıkı bir elle flat etmek seni squeeze'e açık bırakır. O durumda ya 3-bet'e yükselt ya at.

### 4.5 3-bet'e karşı senin cevabın

| Cevap | Eller |
|---|---|
| **4-bet value** | KK+, AKs (geç pozisyon 3-bettor'a karşı) |
| **4-bet karışım** | QQ, AKo — geç pozisyondan gelen 3-bet'e evet, UTG'ye hayır |
| **4-bet blöf** | A5s, A4s — canlıda ÇOK seyrek. Kimse fold etmiyorsa blöf 4-bet para yakmaktır |
| **Flat (IP, 150bb+)** | JJ, TT, AQs, KQs; fiyat 3× altındaysa suited connector |
| **Fold** | OOP tüm offsuit broadway'ler: AJo, KQo, ATo — 3-bet'e karşı çöp |

> **4-bet'li pot şişmiş pottur.**
> Orada AA ile flop+turn value alıp kötü river'da jam etmek, Vaka 3'ün (245 boardu) birebir tekrarıdır. Kural değişmiyor: river'da senden zayıf el ödemeyecekse jam value değildir.

### 4.6 Squeeze — canlıda en kârlı tek hamle

Coldcaller'ın aralığı sıkı ama zayıftır: 4-bet edemez, çoğu eli fold eder.

- **VALUE:** JJ+, AQs+, AKo
- **BLÖF:** A5s–A4s, KQs, AJs (blocker + oynanabilirlik)
- **BOYUT:** 4.5× IP, blinds'ten 5×+

Coldcaller sıkıysa blöf tarafını genişlet. Coldcaller balıksa (fold etmiyorsa) blöfü tamamen kes — sadece value squeeze.

### 4.7 Stack modu üst katmanı

| Mod | 3-bet karakteri | Flat | Not |
|---|---|---|---|
| **200bb+** | Value ağırlıklı, blöf az | En geniş | Implied odds tavan. Offsuit broadway değeri minimum |
| **100–150bb** | Tablolar aynen geçerli | Geniş | Standart mod |
| **60–100bb** | Daha polarize, blöf artar | Daralır | Set-mining zayıflar |
| **40–60bb** | Lineer / merged | Neredeyse yok | 3-bet ya da fold |
| **25–40bb** | 3-bet = commit demektir | Yok | 3-bet edeceğin el 4-bet'e devam edebilmeli |
| **<25bb** | Jam / fold | Yok | 3-bet-fold yapısı yok |

**En sık yapılan hata:** 45bb'de 130bb aralığı oynamak — küçük çiftle flat, suited connector'la 3-bet blöfü. İkisi de 45bb'de zarar.

### 4.8 BB Savunması — Ante'li Fiyat

Ante'li yapıda BB savunması matematiğin en cömert yeridir: potta zaten çok para var, senin eklemen az. Bu yüzden BB'den defend aralığı çok geniştir — ama "ucuz girmek" postflop disiplininin yerine geçmez.

**Fiyat hesabı (örnek: 2.25× open, ante'li):** 2.000 BB, 4.500 open → potta zaten 4.500 (open) + 2.000 (senin BB) + 1.000 (SB) + ~2.000 (ante) ≈ 9.500. Senin eklemen gereken 2.500. → 2.500 / 12.000 ≈ **%21 equity yeter.** Neredeyse her iki kart bu ham eşiği geçer.

| Karar (2.25× açışa karşı) | Eller |
|---|---|
| **Call (defend)** | Tüm suited (T3s dahil), bağlantılı/1-gap offsuit (86o, 97o, J8o), tüm Ax, Kx'in çoğu, 22+ — kabaca elinin %55–60'ı |
| **Fold** | J3o, Q4o, K2o–K5o, 92o — hem kopuk hem domine çöp. Fiyat equity'yi kurtarır, oynanabilirliği kurtarmaz |
| **Call yerine 3-bet** | 4.3'teki blöf tarafı (A5s–A2s, K8s–K6s tipi) + value. Geç açışlara bu ataklığı koru; ante potları çalmaya değer |

**İki kritik nüans:**

1. **Ucuz girmek ≠ ucuz devam etmek.** 2.500'e girip flopta ikinci per yakalayınca "zaten pottayım" moduna geçmek kök hatanın BB versiyonudur. Giriş fiyatı flop sonrası kararları etkilemez — her sokak yeni karar.
2. **Multiway'de daralt.** Open + bir caller varsa fiyat yine iyi ama domine eller (A7o, K9o) değer kaybeder; suited/bağlantılı tarafı tut, zayıf offsuit Ax'leri at.

Stack 40bb altına düşünce (Mod C/D) bu geniş defend kısılır — ucuz flop görüp fold etmeye stack dayanmaz, "call'dan jam'e" geçiş başlar. 56bb restart'ında bu tablo geçerli.

### 4.9 Marjinal suited/offsuit gruplar (Kx/Qx/Jx): aç ya da fold, flat yalnız BB

Düşük suited grup — K3s–K6s, Q3s–Q6s, J3s–J6s — turnuva NLH'de tek pratik kural taşır: **açılır ya da fold; flat yalnız BB'den.** Pozisyonda bir raise'e karşı bu elleri flat'lemek en kötü kullanımlarıdır. *(Yaklaşık baseline: ante'li 8-max, 30–60bb, ağır ICM yok — ICM ve büyük sizing sınırı daha da sıkar; bunlar solver kanunu değil, güvenli çalışma sınırı.)*

| Spot | Suited (düşük Kx/Qx/Jx) | Offsuit (aynı) |
|---|---|---|
| BTN first-in | Mix/açılır: K2s+, Q4s+, J5s+ (Q2s/Q3s, J3s/J4s sınırda) | K6o açılır, K5o sınırda; K3o-K4o ve Qxo/Jxo çoğu fold |
| CO first-in | K5s/K6s, Q6s (Q7s/Q8s daha güvenli sınır), J7s+ açılır; gerisi fold | Tamamı fold |
| HJ ve öncesi | K6s sınırda, gerisi fold | Fold |
| SB first-in | Hepsi limp/raise (fold yok); dip Qxs/Jxs ICM'de fold | K3o-K6o limp/raise; Q5o/Q6o, J5o/J6o mix; dip fold/mix |
| BTN/CO raise'ine karşı | **Flat YOK:** K5s/K6s bir kısmı 3-bet bluff (K blocker), gerisi fold | Neredeyse pure fold — suited kadar iyi 3-bet bluff değiller |
| BB vs BTN/CO 2x | Büyük kısmı savunulur (call) | K3o-K6o çoğu call (vs BTN); Qxo/Jxo daralır (opener/sizing/ICM) |
| BB vs erken/UTG-HJ | Sizing büyüdükçe Q3s/Q4s, J3s/J4s fold olabilir | Tamamı default fold |

**Neden offsuit çok daha sert:** suited versiyon flush + güçlü draw üretir, equity realization yüksek, K-blocker + oynanabilirlik onu makul 3-bet bluff yapar. Offsuit bunların hiçbirini taşımaz; en sık ürettiği el domine edilmeye açık zayıf top pair'dir. **Kısa stack:** 20bb altı BTN/SB'den jam adayı (suited daha derin yaşar) — ama 15bb BTN'de düşük Kxs'leri OTOMATİK jam yapma (çoğunlukla minraise/fold + bazı jam); Q3s/J3s 10bb'de bile otomatik jam değil.

**Postflop — kök hatanın adresi:** bu eller flush-draw ve bluff elleridir, top pair elleri değil. K6s ile K-high flopta tek pair 100bb potuna GİTMEZ — otomatik stack-off değil, ama her zaman bluff'a da çevrilmez (küçük pot, pot-control, bluff-catch). Suited olmayan versiyon doğal bluff adayı bile değildir.

### 4.10 Ax ayrımı: suited erken açılır, offsuit AJo+/ATo+

Temel fark: **erken pozisyonda düşük suited Ax açılabilir; düşük offsuit Ax çoğunlukla fold.** A2s erken pozisyonda A8o'dan çoğu zaman daha değerlidir — nut flush, wheel ve 3-bet/4-bet bluff imkânı taşır; offsuit bunları taşımaz.

| Pozisyon (first-in) | Suited Ax | Offsuit Ax |
|---|---|---|
| UTG | A2s-A5s open/mix, A6s-A8s mix, A9s+ open | AJo+ open, ATo mix; A9o ve altı fold |
| UTG+1/LJ | A2s+ açılır | ATo+ açılır, A9o sınırda |
| HJ | A2s+ açılır | A9o+ açılır, A8o mix |
| CO | A2s+ açılır | A8o+ açılır (A7o mix, altı rakibe bağlı) |
| BTN | Bütün suited Ax | Neredeyse bütün Ax (A2o-A5o bazı çözümde mix) |
| SB | Tamamı limp/raise | Tamamına yakını; en zayıflar ICM'de fold |

**Raise karşısında:** düşük suited Ax (özellikle A2s-A5s) en iyi 3-bet bluff adaylarıdır — ace blocker + nut-flush + wheel; BTN'de bazen flat de. Düşük OFFSUIT Ax raise karşısında BB dışında çoğunlukla fold — flat edilmez. AQo 3-bet/call mix, AK value 3-bet. **Kısa stack:** 10-15bb'de güçlü offsuit Ax'in ham equity + blocker değeri artar, solver bir kısmını jam'ler — ama "UTG'den her Ax jam" yanlış.

**Postflop:** A-high flopta düşük kicker'lı Ax çoğunlukla küçük bet/check ve pot-control elidir; zayıf Ax ile otomatik üç sokak veya 100bb stack-off yok. Day 1A'deki **A5o, AT2-J boardda %75 flop + %75 turn** tam kaçınılması gereken örnekti (B7 Vaka 9): top pair var ama kicker zayıf, iki büyük bahisle pot gereksiz şişti.

**Kısa kural:** CO: A2s+ / A8o+. BTN/SB: bütün Ax. Raise karşısında düşük suited Ax call/3-bet mix, düşük offsuit Ax BB dışında fold. Top pair düşük kicker ile potu kontrollü büyüt.

### 4.11 Suited broadway'ler (KQs/KJs/QJs) ve PLO-6 KQJ notu

**Açılış:** KQs, KJs, QJs üçü de HER pozisyondan açılır (8-max UTG dahil; QJs UTG'de sınırda ama solver hâlâ açar). Pozisyon açıp-açmamayı değil, açtıktan sonra 3-bet'e cevabı belirler.

**Raise karşısında — pozisyon her şey:**
- **BTN/CO'da erken açışa karşı:** KQs/KJs 3-bet–flat mix, QJs çoğunlukla flat. 100bb'de KQs'i 3-bet'e ağırlık ver (AK/AQ'ya domine olsa da fold-equity + pozisyon karşılar). KJs/QJs pozisyonda flat için en iyi eller: pot kontrolü, implied odds, board coverage.
- **Blind'lardan:** BB'de üçü de savunulur (KQs 3-bet/call, KJs/QJs call). SB'de flat YOK — KQs 3-bet, KJs sınır, QJs erken açışa fold / BTN açışına 3-bet.
- **OOP erken açışa karşı (MP/HJ, UTG açtı):** KQs 3-bet-ya-fold (flat en zayıf), KJs/QJs genelde fold. Bu, WSOP AQs bust'ının (B7 Vaka 8) alt versiyonu: OOP flat "bir flop göreyim" elidir, o flop nadiren kolaydır.

**3-bet'e cevap (sen açtın):** pozisyondaysan üçüyle de call (100bb). OOP'de KQs call, KJs/QJs boyuta göre call/fold; 4-bet hiçbiriyle yok — 4-bet bluff rolü A-blocker'lı ellerde (A5s/A4s). **Turnuva ayarı (<40bb):** flat kaybolur, KQs 3-bet/jam'e döner, KJs/QJs pozisyonda call, OOP fold.

**PLO-6 notu:** tek başına KQJ'nin suit'i olması bir şey ifade etmez; kalan üç kartın ne yaptığı belirler. KQJ + iki ds + bağlı kart CO/BTN açılış, 3-bet'e call; **KQJ + dangler'lar CO'dan bile fold** — CO'da −$13.5K'yı yapan tam bu "yarısı güzel" ellerdir (B15.5 L1/L2).

---

## Bölüm 5 — 25–30bb Bandı: Savaş Planı

*★ v4'te eklendi. Turnuvanın en sık yaşanan ve en çok chip kaybedilen bandı. Bölüm 4'ün tabloları 100–150bb içindi; bu bölüm o tablolar geçersizleştiğinde ne oynayacağını söyler.*

### 5.0 Bandın karakteri

> **Bu bantta değer FOLD EQUITY'den gelir, kart tamamlamaktan değil.**
> Aradığın el "gelişebilen" değil, ŞİMDİDEN İYİ OLAN: as, broadway, çift. Spekülatif ellerin motoru (implied odds) 28bb'de çalışmaz — set veya kent yaptığında ödetecek stack yok, tamamlamadığın %85 durumda ise çaresizsin.

Karar sırası iki saniyede: MOD → POZİSYON → EL. 28bb'de suited connector geldiğinde üçüncü adıma bile geçmiyorsun.

### 5.1 Açılış aralıkları (önünde kimse yoksa)

*Boyut 2–2.2×. Bu derinlikte daha büyük açmanın anlamı yok.*

| Pozisyon | Açılış aralığı |
|---|---|
| **UTG / UTG+1** | 77+, ATs+, AJo+, KQs |
| **LJ / HJ** | 55+, A8s+, ATo+, KTs+, QJs |
| **CO** | 33+, A5s+, A9o+, K9s+, QTs+, JTs |
| **BTN** | 22+, tüm A-x, K7s+, K9o+, Q9s+, J9s+, T9s |
| **SB** | 22+, A2s+, A7o+, K9s+, KTo+, QTs+ |

### 5.1-EK SB satırı BvB'de şartlıdır: zayıf Ax/Kx ve küçük çift fold değil, limp malzemesi

5.1'in SB satırı (22+, A2s+, A7o+, K9s+, KTo+, QTs+) raise-or-fold okunur; BvB düğümünde tablonun altında kalan en zayıf offsuit Ax (tekerlek kicker'lı) ve alt-orta offsuit Kx fold değil, **limp** malzemesidir *(kalibre et)*. Bandın 25–30bb'si B33.1'in sığ katmanının üst ucudur: alt ucunda (~25bb) blocker limp-jam'i yaşar; üst ucunda limp-jam potun çok katı overbet olur, malzeme limp-call'a döner — limp-jam kabaca ≤25bb'ye aittir *(kalibre et)*. Limp-3-bet bu bantta da commit'tir: ya jam ya fold edilmeyecek boy (arkada kalan ≈ pot) *(kalibre et)* — fold edilebilir küçük limp-3-bet yok, 5.2'nin "3-bet = JAM" doktrini limp düğümünde de geçerli. Limp-call ise 5.2'nin "flat yok" kuralının BvB-limp düğümüne özgü istisnasıdır (aksiyonu kapatan son karar + küçük iso'ya fiyat); açılışa karşı flat yasağı aynen geçerli. Küçük çiftler satırda raise görünür ama bu derinlikte BvB'de kısmen limp'e kayar *(kalibre et)*. Premium çoğunlukla raise'de kalır; limp aralığını korumak için düşük frekansta tuzak limp sınırda *(kalibre et)*. Satırı "raise aralığı" olarak oku, "SB'nin tüm oyunu" olarak değil; limp'in içeriği için bkz. B33.1 sığ katman ve B33.2.

### 5.2 3-bet = JAM

Bu bantta 3-bet commit demektir. "3-bet edip fold" diye bir yapı yok — doğrudan all-in gidiyorsun.

| Kime karşı | Jam aralığı |
|---|---|
| **Erken pozisyon açılışı** | TT+, AQs+, AKo |
| **CO / BTN açılışı** | 88+, ATs+, AQo+, KQs |
| **Chip leader / jam'e fold eden** | 77+, A9s+, AJo+, KQs (genişletilmiş) |

**Bu bantta FLAT YOK.** Ne SB'den, ne BB'den, ne IP'den. Bölüm 4'ün geniş flat tabloları 100bb+ dünyasına aittir.

### 5.2-EK Rakip jam'lemediyse: SB'nin BÜYÜK non-all-in 3-bet'ine BTN'den 4-bet jam

~30bb efektifte SB'nin doğru 3-bet'i çoğunlukla ALL-IN'dir (5.2); büyük boylu non-all-in 3-bet dengede seyrek olmalı. Havuz tersini yapar: jam'lemesi gereken elleri büyük 3-bet'ler. O aralık polar ve çoğunlukla **tepesizdir** — value tarafı AK/orta-yüksek çift, blöf tarafı offsuit broadway/suited Kx; AA-KK çoğunlukla ya jam'lenmiş ya küçük boy gitmiştir *(sınırda — bazıları AA'yı da büyük 3-bet'ler, gözle)*. Boy büyüdükçe ölü para artar ama SB de bağlanır — kalan stack/pot düşer, fold equity küçük 3-bet'e göre AZALIR ama sıfırlanmaz; kâr, blöf yarısının fold'u + ölü para + ödendiğinde AA/KK'sız (tepesiz) aralığa karşı canlı equity'nin toplamından gelir — tepesizlik iddiası şartlı, gözlemle *(sınırda — kalibre et)*. Aralıkta AA/KK/QQ azsa elindeki K ve Q canlı overcard'dır; suited Kx/Qx beklenenden iyi jam'ler.

**Kural:** 30bb bandında SB'den büyük non-all-in 3-bet gördüğünde BTN'den 4-bet jam aralığını geniş kur — suited Ax/Kx, çiftler, broadway'ler *(sınır: kalibre et)*. SB'nin 3-bet'i küçük boy ya da jam'se 5.3'e dön. Havuz exploitidir: SB'nin büyük non-all-in 3-bet'inde AA/KK'yı tam frekansla gördüğün an genişlemeyi geri al.

### 5.3 Jam'e karşı call

Rakip all-in geldiyse: 99+, AJs+, AQo+. Bundan aşağısı 28bb'de call değil — ya jam'i sen yapacaksın ya fold edeceksin.

### 5.4 Fold listesi

**Bu bantta kayıtsız şartsız fold:**

- Tüm suited connector'lar: T9s, 98s, 87s, 76s, 65s, 54s
- Tüm suited gapper'lar
- Zayıf offsuit broadway'ler: KJo, QJo, JTo
- Küçük çiftlerle FLAT (jam ayrı konu)

### 5.5 Saha vakası — üç el, tek kalıp (GGMasters $150, Temmuz 2026)

28bb bandında masa aynı soruyu üç farklı elle sordu. Üçünde de doğru cevap fold'du ve belirleyici olan el değil moddu.

| El | Pozisyon | Durum | Karar |
|---|---|---|---|
| **T9s** | SB | 40K'ya call teklifi, 28bb arkada | FOLD — SB'den flat kayıp pozisyon |
| **54s** | BB | 73K potta 30K, 28bb arkada | FOLD — implied odds motoru çalışmıyor |
| **87s** | BB | 73K potta 30K, 28bb arkada | FOLD — el daha iyi, karar aynı |

**Aynı seanstan doğru karar örneği:** TT ile BTN'den ~23bb jam. Chip leader (1.08M) call düşündü ve fold etti; pot alındı. Bölüm 3'ün kuralı uygulandı — 30bb altında orta çiftler post-flop eli değil, jam-or-fold elidir.

> **Kural: Bu bantta seni bekleyen soru "bu el yeterince iyi mi" değil, "bu el bu stack'te oynanabilir mi"dır.**
> Spekülatif elleri fold etmek, gerçek elle jam yapacağın cephaneyi korur.

### 5.6 Rakip okuma notu

Chip leader'ın jam'e fold ettiğini bir kez gördüysen, o oyuncunun açılışlarına karşı jam aralığını genişlet. Geniş açıp jam'e katlanan profil, bu bantta masadaki en kârlı hedeftir. Öncelik sırası: (1) o oyuncu açtığında jam, (2) BTN/CO'dan açıp blindleri toplamak.

---

## Bölüm 6 — Turn'de Draw: Bet mi, Bedava River mı

*Pokerin en sık yaşanan turn sorusu. Karar üç faktöre bağlı.*

### 6.1 Fold equity var mı

- Station tipine semi-bluff = para yakma. Fold etmez, çıplak equity'nle kalırsın → check, bedava kart al.
- Reg'e karşı ve board senin aralığına uygunsa → bet. İki kazanma yolun olur: fold ettirmek VEYA tamamlamak.

### 6.2 Draw'ın kalitesi — tamamlanınca ödenir mi

| Draw | Karar | Gerekçe |
|---|---|---|
| **Nut flush draw** | Bet ağırlıklı | Tamamlanınca action alırsın, blokerlerin güçlü |
| **Düşük flush draw (97s)** | Check ağırlıklı | Tamamlansa bile üstün flush'a ödeme riski |
| **Açık kent (OESD), düz board** | İkisi de meşru | Gizli güç — tamamlanınca çok ödenir. Rakibe göre seç |
| **Gutshot** | Check | Neredeyse hiç semi-bluff yakıtı değil |

### 6.2-EK Gutshot satırı iki polar düğümde ASKIDA — draw'ın işi tamamlamak değil, bloklamak

6.2'nin "gutshot → check" kuralı genel turn-draw kararı içindir: fold equity belirsiz, draw tek başına yakıt değil. İki düğümde askıya alınır; ilkinde gutshot'un işi rakibin devam sınıfını bloklamak (TPGK/overpair), ikincisinde zayıf per/overcard/zayıf draw'ları katlatarak fold equity taşımak — ikisinde de kentini tamamlamak değil:

- **Efektif-nut overbet (11.1-EK):** overcard'lı gutshot rakibin top-pair-iyi-kicker ve overpair kombolarını bloklar (iki-per'i BLOKLAMAZ — onun için board rank'i tutman gerekir), per'lerini ve zayıf draw'larını katlatır — polar overbet aralığının doğal blöfü.
- **x/r sonrası akışkan turn (26.6):** semi-blöf jam adayı — zayıf per/overcard/zayıf draw'ları katlatıp equity reddeder; seni domine eden draw'ı ancak SPR yeterince yüksekken katlatır *(sınırda)*.

Şart: düğüm gerçekten polar ve rakibin fold'a giden katmanı geniş olmalı *(kalibre et)*. Station'a karşı ve orta boylu bet düğümünde 6.2 aynen durur: gutshot check.

### 6.3 IP / OOP ayrımı

- **IP:** check etmek gerçekten bedava kart demektir — rakip de check ederse river'ı ücretsiz gördün.
- **OOP:** check bedava kart garantisi vermez. Rakip bet atarsa 'bedava' plan çöker. OOP'ta draw'ı ya bet'le ya da call planıyla check et — 'bedava görürüm' diye check etme.

---

## Bölüm 7 — Vaka Otopsileri

> **Dört vakanın kök hatası aynı:**
> Tek per'in (AA dahil) şişmiş veya multiway potta yanlış sınıflandırılması.

### Vaka 1 — A4s river call ($50K High Roller, WSOP 2026)

**Ne oldu:** Chop mekaniğini doğru gördün, ama bir filtreyi atladın ve hero call yaptın.

**Atlanan filtre:** Chop'lar jam atmaz. Rakip all-in geldiyse bölüşmeye oynayan eli aralığından çıkarmıştır.

**Kural:** Bir mekaniği doğru görmek yeterli değil — rakibin hamlesinin o mekanikle uyumlu olup olmadığını da sor.

### Vaka 2 — KTo top pair check-raise all-in ($10K 6-Handed)

**Ne oldu:** Islak boardda top pair ile check-raise all-in; rakip flat'lediği QQ ile call etti.

**Doğru oyun:** Check-call, sonra değerlendir. Top pair islak boardda büyük pot başlatıcı değildir.

**Kural:** Tek per stack-off yakıtı değil. Şişmiş pota giden yol, elini bluff-catcher'a dönüştürür.

### Vaka 3 — AA river jam (PokerOK $108 Mystery Bounty, Temmuz 2026)

**Board:** 2-4-5, river 6. Elin AA. Rakip 66 (river set).

**Doğru olan:** Flop ve turn value bet — ikisi de doğruydu.

**Hata:** Kötü river 6'da kalan stack'i jam etmek. O river'da senden zayıf hiçbir el ödemiyor — 3'lü, kent, set hepsi seni geçmiş; tek per pas geçiyor. Value target yok.

> **Kural: river'da senden zayıf el ödemeyecekse jam value değildir.**
> Kötü river'da overpair: küçük pota check-call, büyük pota check-fold.

*Bölüm 4 bağlantısı: bu elin şişmiş pot olma sebebi preflop'ta doğdu. 3-bet aralığını doğru kurmak, bu vakanın tekrar etme olasılığını doğrudan düşürüyor.*

### Vaka 4 — T6s trip-ten river check-raise all-in (WSOP Online ME Day 2 hazırlığı)

**Ne oldu:** BB'de T6s, BTN min-raise'ine call. Flop A-T-3, 1/3 pot call. Turn 5 check-check. River T (board A-T-3-5-T) → trip 10, kicker 6. Check ettin, BTN ince (thin) bet attı, sen check-raise all-in.

**Doğru oyun:** Check-call. Bu runout'ta trip'in bluff-catcher: senden zayıf el all-in'i ödemez (her 10 senin kicker'ını geçer, boat'lar önde); raise blöfleri fold ettirir, seni yalnız geçen el öder.

**Kural:** İyi görünen tek/güçlü el (trip dahil), eşleşmiş/şişmiş board'da bluff-catcher'a döner — Vaka 2'nin (KTo) aynısı. (B9.2 protokolü: masadan gelen bu el vakaya işlendi.)

---

> **Vaka 5–7: AYNA sızıntı — WSOP Online Main Event Day 1A (kendi oyunun, 2026).**
> İlk dört vaka kök hatanın "FAZLA oyna" yüzü (tek per'i şişmiş potta batırmak). Aşağıdaki üç vaka TERS yüz: güçlü eli AZ oynamak. 75 karar eli tarandı (bağımsız grader teyidi); kök hata bu turnuvada yüksek-şiddette YOKtu — frenlerin çalıştı. Asıl kaçan para (a) pasiflikte ve (b) bir kök-hata KURULUMUNDA.

### Vaka 5 — TT ile 5-bet potunda set→full house, üç sokak check (WSOP Online ME Day 1A)

**Ne oldu:** 5-bet potunda (SPR ~1.4) J-T-Q flop → orta SET. Flop check, turn check, river T → TENS FULL → yine check. Villain A3s iki per ile showdown'a bedava geldi; kazandın ama postflop sıfır çip aldın.

**Doğru oyun:** SPR 1.4'te set ile flop bet/jam şart (AA/KK asla fold etmez). En geç river'da tens-full ile jam — AK/AA/KK/QQ/iki per öder. "Benden kötü el bu bahsi öder mi?" → EVET. Tahmini 30–80K bırakıldı.

**Kural:** Set ve full house küçük-SPR'li 4-bet/5-bet potunda ASLA check'lenmez. Kök hatanın tersi de bir leak: değerini almamak.

### Vaka 6 — 52o floplanan nut kent, check + potu bırakma (WSOP Online ME Day 1A)

**Ne oldu:** BB defend, flop A-4-3 → floplanan tekerlek (nut düz). Flop sadece call, turn check (bedava kart), river A → check-fold. Nut elden sıfır değer VE pot terk edildi.

**Doğru oyun:** Flopta check-raise ya da en geç turn'de %60–70 value bet (Ax/44/33/karo draw öder) + river'da inisiyatifi koru. Nut elle bedava kart verme.

**Kural:** Nut/çok güçlü elle turn'de MUTLAKA bahis. Pasif hat, nut eli önce değersizleştirir sonra bluff-catcher'a çevirip elden çıkartır — Vaka 5'in daha beteri.

### Vaka 7 — TT'yi 60bb OOP, 3-bet'e flat → 183K (kök-hata KURULUMU, frenli)

**Ne oldu:** 53bb efektif, CO 3-bet'ine TT ile OOP FLAT. Monoton 7-K-8 flopta pair+FD ile check-call, board eşleşen turn'de ikinci barrel'a fold. 183K kayıp — turnuvanın en büyük tek kaybı.

**Doğru oyun:** Postflop kusursuzdu (eşleşen turn'de check-fold = B11.2 modeli, fren çalıştı). Hata PREFLOP: 60bb OOP'ta TT vs 3-bet flat, şişmiş-pot-tek-per kurulumunu davet eder. Doğrusu 4-bet-jam ya da fold (B14).

**Kural:** Kök hata "yok" değil, FRENLİ. Fren (turn fold) seni yüksek-şiddetten korur ama kurulum pahalı — orta çiftle OOP 3-bet'e flat'i azalt; kaçan para frende değil, KURULUMDA.

### Vaka 8 — AQs 4-bet/call → 5-bet jam'e call → bust (WSOP Online ME Day 1B)

**Ne oldu:** 68bb, UTG+1 AQs açış → HJ call → 287bb chip leader 3-bet → Hero 4-bet 24.3K → leader 5-bet all-in → Hero call 56.7K. Villain KK, board 8-3-8-T-6, eleniş. Pot oranı 2.2:1, gereken equity %31; 5-bet jam aralığına (QQ+/AK) karşı AQs ~%30, KK'ya karşı %18 — sınırda bile değil.

**Doğru oyun:** Tercih sırası: (1) 3-bet'e fold — UTG+1, OOP, 68bb, 287bb'lik rakip; (2) 3-bet'e call, flopta pot kontrolü; (3) 4-bet edildiyse 5-bet'e fold, 24K'yı kabul et. Call hiçbir sıralamada yok. 68bb'de AQs OOP = 4-bet/**fold** elidir, 4-bet/call değil. 4-bet ile stack'in %30'u masaya konur; jam gelince "pot oranı var" hissi call'a iter.

**Kural:** AQ bir high-card elidir; 3-bet potunda güçlü görünür, 5-bet potunda tek pair'e bile ulaşmamıştır — Vaka 1 (A4s river) ve Vaka 3 (AA river jam) ile aynı sınıflandırma hatası: potun büyüklüğü elin sınıfını değiştirmez. 287bb'lik chip leader'ın 5-bet jam'i, 30bb'lik oyuncunun jam'inden farklıdır (aralığı dar: KK+, belki AK; kaybedecek şeyi yok) — ona karşı 4-bet zaten gereksizdi. 4-bet yalnız fold edebileceğin miktarla yapılır.

| Stack | AQs/AJs/KQs vs 3-bet (OOP) | vs 4-bet | vs 5-bet jam |
|---|---|---|---|
| 25–40bb | 3-bet'e jam veya fold | — | — |
| 40–60bb | call veya fold; 4-bet = jam (AK/QQ+) | fold | — |
| 60–80bb | call veya fold; 4-bet/fold mümkün | fold | **fold (bu el)** |
| 80bb+ | call; 4-bet/fold | fold | fold |

Bu el sınıfı hiçbir stack derinliğinde 5-bet jam'e call etmez.

### Vaka 9 — Seans-düzeyi bulgular: WSOP ME 1A + 1B (387 + 84 el)

**Ne oldu:** Day 1A 60K→784K (+724K, karar notu B+); Day 1B 60K→116K zirve→eleniş (karar notu B−). İki büyük jam call (KQs, AQs) toplam kaliteyi düşürdü; rutin kararlar temizdi. Day 1A all-in koşusu ~+50K EV, Day 1B ~−59K — varyans yönü sert döndü, ama esas mesele varyans değil, birkaç yapısal eğilim.

**Tekrar eden leak'ler (iki seans ortak):**
- **River ince value eksiği** — pozisyonda check edildiğinde value bet frekansı çok düşük. Düzeltme: check-back öncesi "hangi daha kötü el call eder?" sorusu; uygun spotlarda %25–40 pot ince value.
- **Multiway c-bet fazlalığı** — otomatik multiway c-bet + düşük-equity elle büyük sizing. Düzeltme: multiway otomatik c-bet'i azalt, büyük sizing'i polar value + güçlü draw'a ayır.
- **Flop raise sizing** — flopta bahisle karşılaşınca çok sık ve çok büyük raise (dört-altı kat). Düzeltme: top pair/set dahil standart raise'lerde üç-dört kat bandı; daha büyüğü özel exploit'e sakla.
- **30–70bb jam disiplini** — suited broadway'i (KQs/AQs) etiketiyle otomatik stack-off. Düzeltme: her call'da önce pot odds, sonra rakip range'i.

**Kural:** Sonuca bakıp yanlış etiketleme — 88'in shove'a call'ı 66'ya kaybetmesi tam doğru cooler; AK ile river'da 82'ye kaybedilen call standart (top pair/top kicker fold edilemez). Leak ile cooler'ı ayır: leak tekrar eden yapısal eğilimdir, cooler tek elin varyansı (B25 kanıt vs hikaye).

---

## Bölüm 8 — PLO Temelleri

### 8.1 Zihniyet farkları

- **Equity'ler yakın koşar.** PLO'da %60/%40 iyi bir favoriliktir; NLH'deki %80 rahatlığı yok.
- **Nut hakimiyeti her şeydir.** İkinci en iyi el PLO'da pahalı bir eldir.
- **İki pot bet = stack ortada.** Pot büyümesi NLH'den çok hızlıdır; üçüncü sokağa geldiğinde geri dönüş yok.

### 8.2 El seçimi

| Kavram | Kural |
|---|---|
| **Dangler** | Dördüncü kartı bağlantısız el (AA72) — fold. Pratikte üç kartlı el oynuyorsun |
| **Rundown** | JT98, KQJT gibi bağlı eller — özellikle çift suited olduğunda güçlü |
| **Çıplak AA** | Tek per muamelesi. Nut potansiyeli yoksa büyük pot oynamaz |
| **Wrap + FD** | Gerçek silah. 13+ out artı flush draw — agresif oynanır |

### 8.3 NLH oyuncusunun tuzakları

- **AA'yı NLH gözüyle görmek:** PLO'da AA çift suited değilse ve board'a bağlanmıyorsa sadece bir çifttir.
- **Top pair / top two ile stack-off:** PLO'da iki per neredeyse hiç nut değildir.
- **Blöf frekansını NLH'den taşımak:** PLO'da aralıklar daha bağlı, blöf daha az geçer.
- **OOP 3-bet potu oynamak:** PLO'da en zor spot. Şüphe hâlinde flat et.

---

## Bölüm 9 — Antrenman Protokolü

> **Komut: "beni hazırla" / "drill" / "soru sor"**
> Sokratik Q&A başlar: 5–8 karar sorusu, tek tek, cevabın gelmeden sonraki soru sorulmaz.

### 9.1 Soru karışımı

| Ağırlık | Konu |
|---|---|
| **%40** | Kök hata — tek per / şişmiş pot sınıflandırması |
| **%30** | Stack modu ve aralık seçimi (Bölüm 3, 4, 5) |
| **%20** | PLO |
| **%10** | Blöf seçimi ve draw kararları |

### 9.2 Kurallar

- Yanlış cevaplanan sorular 1–2 gün sonra farklı kılıkta tekrar sorulur.
- Masadan getirdiğin eller vaka olarak işlenir ve Bölüm 7'ye eklenir.
- Bu bölümlerin aday cümleleri B0'a c.12–15 olarak işlendi; masadan gelen yeni kalıcı kurallar B0'a eklenir, başlık güncellenir.
- Cevap doğruysa gerekçe de sorulur — doğru karar yanlış gerekçeyle yarım puandır.
- Kamp Ağustos başında açılır; EPT 16 Ağustos'ta başlıyor.

---

### 9.3 Drill'in iki modu ve A-oyun günlüğü

**Preflop hacim, postflop merak-kesmesi.** Preflop drill'i hacimle dön — telefon, düşük enerji, soru sorma. Postflop'ta kural ters: her yanlış VE her şaşırtan doğru drill'i DURDURUR — sınıf görünümünü aç, aksiyonun döndüğü eşiği bul, üç-parça formatında yaz (27.4), sonra devam et. "Kombom doğru oynamış, geçtim" drill'in kök hatasıdır — hiçbir şey öğrenmedin.

**A-oyun günlüğü.** Seri boyunca her seansın sonunda iki satır: nasıl oynadım (not artı bir sayı), o gün ne yaptım (uyku, seans öncesi kafa yükü, saat). Amaç sağlık takibi değil, A-oyununun girdilerini yakalamak — birkaç günde tekrarlayan iki-üç değişken kalır *(kalibre et: sende farklı çıkabilir)*. Bulduğun yasayı seri planına (B16.4) yaz ve ihlal etme.

## Bölüm 10 — Soru Bankası

*Cevaplar kasten yazılmadı. Drill sırasında sözlü işlenir.*

### Çekirdek sorular (v2)

1. 40bb, HJ açtı, sen CO'da KQo. Karar ve gerekçe?
2. Board A♦ K♠ 7♣, sen BB'desin, gutshot'ın var, CO cbet attı. Check-raise mi call mi — neden?
3. 28bb, elinde 99, UTG açtı. Karar? Bu 90bb'de aynı mı?
4. Turn'de nut flush draw'ın var, rakip station tipi. Bet mi check mi?
5. A4s ile river'da all-in yedin ve chop mekaniği var. Hangi filtreyi uygulayacaksın?
6. Islak boardda top pair, OOP, rakip cbet attı. Check-raise all-in neden yanlış?
7. AA, board 2-4-5, turn'de value aldın, river 6 geldi. Rakip check etti. Sen? (Vaka 3)
8. Bubble, 30bb, solunda iki kısa stack. Açılış aralığın Day 1'deki 30bb'den nasıl farklı?
9. PLO, elinde AA72 rainbow, LJ açtı, sen BTN'desin. Karar?
10. PLO, wrap + nut flush draw ile turn'de pot bet yedin. Stack derinliğine göre karar ağacın?

### Bölüm 4 soruları (v3'te eklendi)

11. 8 kişilik masa, 180bb. UTG açtı, sen BTN'desin, elin AQo. Karar?
12. 130bb. HJ açtı, CO flat etti, sen BB'desin, elin KQs. Karar ve boyut?
13. 45bb. BTN açtı, sen SB'desin, elin 76s. Karar? Bu el 130bb'de aynı mı?
14. 200bb. UTG açtı, sen CO'dasın, elin 44. Coldcall'un üç şartını tek tek uygula.
15. 120bb. Sen CO'dan AKo ile açtın, BTN 3-bet etti. Karar? 3-bet eden UTG olsaydı değişir miydi?
16. 90bb. 4-bet'li pot, elin KK, flop K-7-2 rainbow, turn 9, river A. Rakip check etti. Sen?
17. PLO, 100bb. LJ açtı, elin AA J7 rainbow, sen SB'desin. Karar ve gerekçe?
18. 30bb. CO açtı, sen BTN'desin, elin AJs. 3-bet mi jam mı flat mı — ve neden diğer ikisi değil?

### Bölüm 5 soruları — 25–30bb bandı (v4'te eklendi)

19. 28bb. Sen SB'desin, elin T9s, BTN açtı ve 40K'ya call teklifi var. Karar? Aynı el 150bb'de ne olurdu?
20. 28bb. BB'desin, 73K potta 30K ödeyeceksin, elin 87s. Karar? Bölüm 4'ün 'BB flat çok geniş' satırı neden burada geçerli değil?
21. 26bb. Chip leader (senin 4 katın) CO'dan açtı, sen BTN'desin, elin A9s. Karar ve boyut?
22. 28bb. Aynı chip leader'ın jam'e bir kez fold ettiğini gördün. Ona karşı jam aralığın nasıl değişir — ve neden bu masadaki en kârlı spot?
23. 23bb. Sen BTN'desin, elin TT, önünde kimse yok. Karar? Sonuç fold gelirse veya AK'ye call yersen değerlendirmen değişir mi?
24. 27bb. UTG açtı, sen HJ'desin, elin 66. Jam, flat, fold — hangisi ve neden diğer ikisi değil?

### Bölüm 11–16 soruları (v5'te eklendi)

25. 100bb 3-bet'li potta overpair'in var, flop kuru. SPR kaç, tek per'in rolü ne? Aynı el 250bb tek-raise'li potta değişir mi? (Bölüm 11)
26. Turn'de top pair iyi kicker, board eşleşti. İkinci fıçı mı check mi — ve "river planım var mı" ne demek? (Bölüm 11)
27. River'da overpair, rakip overbet attı. Call mı fold mu? Boyut yarım pot olsaydı değişir miydi? (Bölüm 11)
28. River'da top pair iyi kicker, rakip rec-station, check etti. Bet mi check mi — thin value ne zaman? (Bölüm 11)
29. SHR, 28bb, para iki el ötede. Jam'e AJs ile call teklifi. Aynı el Main Day 1'de ne olurdu? (Bölüm 12)
30. Final table, orta stack, masada senden kısa iki oyuncu var. Temel duruşun ne, kimi hedeflersin? (Bölüm 12)
31. Bubble, büyük stacksin, solunda kilitlenmiş orta stack. En kârlı hamlen ne ve neden? (Bölüm 12)
32. Rec-ağırlıklı Main, 3 kişi flop gördü, elinde top pair. HU'da value olan bu el şimdi ne? (Bölüm 13)
33. 4 yollu potta board sahipliği sende, OESD'in var. Blöf üç kriterden geçiyor — yine de neden blöf yok? (Bölüm 13)
34. 50bb. CO açtı, sen BTN'desin, elin AJs. 3-bet çerçeven B4'ten (130bb) nasıl farklı? (Bölüm 14)
35. PLO, 30bb, LJ açtı, elin çift-suited rundown. "Bölüm 5: 3-bet=jam" refleksin neden geçersiz, ne yaparsın? (Bölüm 15)
36. PLO, flop'ta wrap + FD, 13 out sayıyorsun. Stack-off etmeden önce hangi soruyu sorarsın? (Bölüm 15)
37. SHR'de doğru bir jam'le elendin. Re-entry basmadan önceki 20 dakikada hangi iki soruyu cevaplarsın? (Bölüm 16)

---

## Bölüm 11 — Şişmiş Pot, Turn Disiplini ve River İcrası

*★ v5. Kök hatanın EKSİK YARISI. B0/B4/B7 "şişmiş potta tek per = bluff-catcher" TEŞHİSİNİ koyar; bu bölüm teşhis konduktan sonra elin nasıl oynanacağını verir: potun ne zaman "şişmiş" olduğu, turn'de fıçının atılıp atılmayacağı, river'da hangi fiyata call/value. Üç belgelenmiş elenmenin üçü de bu bölümün konusu.*

### 11.0 "Şişmiş pot" — sayısal tanım

Şimdiye kadar "şişmiş pot" nitel kullanıldı (≈ 3-bet'li pot). Derinlik değişince bu sezgi yanılır: 250bb'de tek-raise'li pot turn'e gelince stack-off bölgesine girebilir; 100bb'de 3-bet'li pot zaten oradadır. Doğru ölçü SPR (stack ÷ pot).

> **Derinde şişmiş potu bet sayısı değil SPR tanımlar.**

| SPR (flopta) | Tipik pot | Tek per'in rolü |
|---|---|---|
| **< 1** | 4-bet'li / kısa stack | Karar preflop verildi — commit |
| **1–4** | 100bb 3-bet'li pot | Bluff-catcher. Büyük pot BAŞLATMA |
| **4–8** | 40–70bb tek-raise'li / canlı multiway şişkin açılış | İki sokak value + kontrol; üçüncü sokak dikkat |
| **> 8** | 100bb+ standart tek-raise'li pot (200–300bb Main Day 1 dahil) | İnce value alınabilir — ama re-raise gören pot aniden 1–4 bandına düşer |

SPR aritmetiktir, evrensel. Hangi TAM el sınıfının hangi SPR'de stack-off edeceği senin icra verinle netleşir — *(kalibre et: 3 elenme eline SPR biç)*.

**Kural:** Önce SPR'yi oku, sonra rolü ver. Derinde (SPR>8) tek per'i erken bluff-catcher'a düşürüp value kaçırmak da hata; orta-sığda (SPR 1–4) eski derin refleksle stack-off etmek de.

### 11.0-EK Şişirmek değil, PLANSIZ şişirmek

> **Kök hatayı yapan potu şişirmek değil, KAPANIŞ PLANI olmadan şişirmektir.**

Turn'de potu büyütmenin kendisi hata değil — hangi river'da ne yapacağını önceden bilmeden büyütmek hatadır. Ayrım BOYDA değil PLANDA (planlı bir orta-boy iki-fıçı da meşru, plansız bir overbet de hatadır):

- **Plansız iki-fıçı:** orta boyla turn + river'a "bakarız" diye sündürmek → her kirli river'da bluff-catcher olarak sıkışırsın, check-raise'e açıksın. Kök hata budur.
- **Planlı tek-sokak:** equity'nin temiz olduğu dinamik board'da turn'ü tek büyük boyla (overbet dahil) atıp HER river'ı önceden KARARA kilitlemek. IP'de rakip check ederse check-back ile el kapanır; lead ederse cevabın (call/fold eşiği) da turn'de önceden kilitlenmiş olmalı — "karar yok" değil, "her karar önceden verilmiş". OOP'de "check" tek başına yetmez: bete karşı cevabın da (call/fold eşiği) turn'de önceden kilitlenmiş olmalı, yoksa tam da B11.1'in uyardığı bluff-catcher spotuna düşersin. Boy her iki durumda da river planını taşır.

Ayrım şu soruyla test edilir (B11.1 ikinci fıçı kriteri): *"River planımı ŞİMDİ söyleyebiliyor muyum?"* Cevap IP'de "check gelirse check-back, lead gelirse şu boya call / şu boya fold", OOP'de "şu boya call / şu boya fold" ise büyük tek boy meşrudur; cevap "duruma bakarım" ise potu şişirme.

### 11.0-EK-2 SPR 1-4 satırı capped taraf içindir; 3-bettor'ın top pair'i derinlikle sokak sayar
B11.0 tablosunun "SPR 1-4: tek per bluff-catcher, büyük pot BAŞLATMA" satırı potu şişirilen, capped taraf için SPR ≳2'de geçerlidir; SPR ≲1.5'te (30-60bb baseline'ında 3-bet potları çoğunlukla SPR ~1.5-3 bandına iner; ≲1.5 yalnız ~30-40bb ve OOP 3-bet boyunda — *kalibre et*) capped tarafın top pair'i de çoğunlukla call-off sınıfına iner — eşik iki taraf için düşer; capped taraf yine potu BAŞLATMAZ ama jam'e karşı katlamaz *(kalibre et)*. Aralık + nut avantajlı 3-bettor için SPR ≲2'de orta-bağlantılı board'da top pair/overpair çoğunlukla jam sınıfıdır (bkz. B32.1); 100bb'de (SPR ≳4-5 OOP 3-bet boyunda — satırın üst sınırında; IP 3-bet potunda ~5'i aşar ve satırın dışına çıkabilir — *kalibre et*) A-high 3-bet potunda top pair çoğunlukla "iki sokak + river kontrol" elidir (en iyi kicker + capped rakipte üç sokak sınırdadır) — üç sokak, stack'i tek perle içeri sokmaktır ve B11.4 kataloğu üç sokak boyunca uygulanır (bkz. B32.2). Bluff-catcher tanımı şişirenin top pair'ine B11.4 kartının düştüğü sokakta (turn dahil) ya da raise yediği anda geri döner; river'da ise plan gereği zaten kontrol/bluff-catch modundadır.

### 11.0-EK-3 SPR≈1 satırının TURN hâli: value ile JAM değil, yarı-stack bet

11.0 tablosu SPR<1'de "commit" der — doğru, ama boyu söylemez. Turn'de SPR 1 civarında overpair/güçlü top-pair ile "zaten committed'im" diye jam'lemek hatadır; özellikle tek başına overcard açıldı ya da bir draw açıldı diye "korkutucu kart, hemen koy" refleksi. Commit, paranın eninde sonunda gireceğini söyler; HANGİ sokakta, HANGİ boyla girdiği rakibin devam aralığını değiştirir. Flop bet'ine call eden aralık alt per, zayıf orta per (bet küçükse gutshot ve overcard-high da) ile doludur; jam'e bu eller snap katlanır — tam senin ezdiğin sınıf. Potun yarısı–üçte-ikisi *(kalibre et)* o sınıfı kayıtsızlığa iter: bir kısmı öder (value'n), bir kısmı katlanır (blöflerin için fold equity). Koruma kaybı sınırda: yarı-pot draw'a jam'den daha iyi direkt oran verir; implied odds'u ise geride yalnız yarı-stack kaldığı için zaten küçük — river'da o kalanı ona ödersin ama toplam sınırlı; flush draw çoğunlukla kayıtsız kalır — stack'in yarısı turn'de girince river'da her kartta jam'sin, geometri seni zaten bağladı. Overcard turn'ü de bozmaz: o aralık o kartı çoğunlukla taşımaz.

Korkutucu turn'de de varsayılan yarı-stack (koruma + ince value). Jam yalnız tek gerekçeyle: rakibin devam aralığı draw-AĞIRLIKLI ve yarı-pot o aralığa direkt oran verecek — tipik olarak turn aralığa BİRDEN FAZLA canlı draw eklediğinde (flush + çift kent), OOP + SPR≤1'de daha sık; turn flush'ı TAMAMLIYORSA 11.1 tablosu: check / boy düşür, jam değil. Azınlık *(sınırda — kalibre et)*. Blöf tarafı: rakibin devam aralığına karşı en çok equity taşıyan overcard+draw kombolar — SPR 1'de sık ödenirsin, bloker değil equity seç; turn kartını tutan el zaten top-pair'dir, value hattında.

**Kapsam:** B21.5'in "sığ SPR'de ara boyut chip bağlar → jam ya fold" kuralı ICM + savunma/float bağlamı içindir; bu madde chipEV'de value-agresörün turn'üdür. Farklı koltuk, çelişki yok.

### 11.1 Turn disiplini — ikinci fıçı kriteri

B6 turn'ü sadece DRAW için işledi. Value/marjinal ellerin turn kararı buraya. Kök hata çoğu zaman turn'de doğar: potu ikinci fıçıyla kendin şişirir, river'da bluff-catcher olarak kalırsın (Vaka 3'te turn bet DOĞRUYDU — B7; ama o bet'le pot şişti — ikinci fıçıyı atarken river planın önceden hazır olmalı).

| Elim | Boş / düşük turn | Bana overcard | Board eşleşti | Draw tamamlayan |
|---|---|---|---|---|
| **Overpair** | Bet (kontrollü) | Dikkat — SPR'yi say | Check eğilimi | Check / boyut düşür |
| **Top pair iyi kicker** | İnce bet | Check-call | Check | Check-fold eğilimi |
| **Top pair zayıf kicker** | Check | Check | Check-fold | Check-fold |
| **Hava + bloker** | Barrel adayı | Barrel adayı | Bırak | Bırak (kart geldi) |

Boyutlar *(kalibre et)* — ama yön sabit: potu her büyüttüğünde river'da check-fold lüksünü satın alma gücün azalır.

> **İkinci fıçıyı atmadan önce sor: river planımı söyleyebiliyor muyum? Kötü river'da check-fold edebileceğim pot boyutu bırakıyor muyum?**

**B0 c.12:** *Turn'de attığın boyut, river'da vereceğin kararın fiyatıdır.*

### 11.1-EK Turn overbet — PFR IP, flop c-bet call yedikten sonra: EFEKTİF nut ve blöf seçimi

18.2-EK "nut avantajı + capped → overbet" dedi; bu madde turn-kart mekaniğini verir. Overbet'in kaldıracı gerçek nut değil efektif nut'tur — rakibin aralığında seni yenen elin yapısal olarak bulunmadığı el. BB, preflop'ta 3-bet'lediği ve flop'ta check-raise'lediği kombolardan büyük ölçüde arınmış gelir (bir kısım set/iki-per slow-play'de, bir kısım büyük çift flat'te kalır — efektif nut mutlak değil, aralık-göreli); senin AK/AQ'n, overpair'in, üst per'in o boşluğu dolduran turn'de "yenilmez" oynar. Tek kural: **overbet kartı, rakipte 3-bet'e/x-r'a gitmiş sınıfı tamamlayan, kalan (capped) sınıfına ise bir şey eklemeyen karttır.** Örn.: yüksek+düşük kopuk flop'a kent tamamlamayan ikinci yüksek kart (K-8-x'e A: AA/AK sende — BB'ninki çoğunlukla 3-bet'e gitti; BB'de Ax yalnız top-pair, kent yok); düşük flop'a rakibin ıskaladığı yüksek kart (o kartla flop'ta katlandı, sen c-bet attın); orta-yüksek flop'a düşük blank (rakibin o kartla iki-per'i yok, overpair'i çoğunlukla 3-bet'te) *(derin, tek-raise'li pot, IP PFR; kalibre et)*. Aynı kuralın negatifi kapatan karttır — rakibin capped OLMAYAN sınıfını tamamlayan kart: iki yüksek kartlı flop'a üçüncü Broadway — K-Q-x'e A/J/T dahil (BB'nin flat'lediği JT/QT/AT/KJ tipi kombolar kent ya da iki-per olur; A bile JT'nin Broadway'ini tamamlar; yalnız 3-bet-aralığı kombosuyla nut kent yapılan hâl sınırdadır), A-x-x'e düşük kent-tamamlayıcı, flush-tamamlayıcı, eşleşmiş flop'ta eşleşmemiş düşük kartın eşleşmesi (9-9-4'e 4: check-call'daki 4x full olur; K-7-7'ye K ise PFR'ın AK/KQ'sünü büyük full yapar — kapatan değil). Kapatan kartta frekansı VE boyu düşür — çok check; bahis kalırsa aralık MERGED olur: nut + hâlâ önde olan set/iki-per/güçlü top-pair değeri + rakibin tamamlanan sınıfını bloklayan az blöfle küçük/orta boy *(kalibre et)* — boy küçüldükçe polar değil merged (18.2-EK'in overbet-polar / küçük-merged ekseni); 11.3-EK'in turn hâli. Frekans yalnız aralık avantajının sürdüğü brick'te korunur.

**Blöfü nut değil BOŞLUK seçer.** Overbet polar: orta-kuvvet el (turned ikinci per, zayıf top-pair) ne katlatır ne öndedir — küçük boya ya da check'e. Blöf adayı rakibin katlayacağı elleri bloklamasın, tuttuğu güçlü sınıfı bloklasın, call yiyince temiz out'u olsun — en iyi sınıf **turned alt-per** ve overcard'lı gutshot (6.2-EK). Tek büyük boy yeter *(kalibre et)*; makas equity'den değil fold ettirilen equity'den açılır.

### 11.2 River — bluff-catch: hangi fiyata call

B0 c.2 "küçük pota check-call, büyük pota check-fold" der — kaba bir eğilim. Rakip bet attığında karar üç değişkene iner:

| Rakip boyutu | Hangi blöfleri var? | Benden zayıf hangi value bu boyutu atar? | Bloker | Eğilim |
|---|---|---|---|---|
| **≤ %50 pot** | Çok (ince value + blöf) | Bir sürü | Az önemli | Call yönü |
| **%50–100** | Azalıyor | Daralıyor | Önemli | Sınırda — bloker belirler |
| **Overbet** | Polarize: nut veya hava | Neredeyse yok | Kritik | Tek per → fold; sadece bloker tutan bluff-catcher call |

**Kural:** Boyut büyüdükçe rakip aralığı value'ya kayar, tek per netleşerek bluff-catcher'dan FOLD'a döner. "Reg overbet attı" = polarize oku; panik hero-call ve chop'ları unutmak (Vaka 1) buranın hatasıdır.

### 11.2-EK İki düğümde fiyat-eşiği ASKIYA alınır (chipEV'de bile)

B11.2 boyut→call-yönü tablosu tek bir varsayıma dayanır: rakibin BAHİS aralığında bu boyu atan bir blöf sınıfı VAR (kayıtsızlık = bluff-catcher'ı ödemekle fold arasındaki denge). İki düğümde kayıtsızlık kurulamaz: blöf sınıfı ya yapısal olarak yoktur (tükenmiş) ya da vardır ama senin call aralığını bloklar — fiyat-eşiği her iki halde de geçersizleşir — ICM olmadan da:

- **Blöfü tükenmiş river:** river tüm draw'ları tamamladıysa (blöf adayları value'ya döndü) ya da rakibin bu hattı yapısal olarak blöf adayı içermiyorsa, river'da attığı bet aralığı neredeyse saf value'dur. Rakip yine BAHİS atar ama içinde blöf kalmadığı için ödeme sana kayıtsızlık değil net kayıp verir → B11.2 fiyat-call'u uygulanmaz, teorik fold oranı ezici.
- **Bloker-yoğun / monotone büyük-para düğümü:** rakibin doğal blöfleri senin güçlü/call aralığının ihtiyaç duyduğu kartı taşıyorsa (monotone board, tek flush kartını RAKİP tutuyor), rakip blöf tuttuğunda senin güçlü-el olasılığın DÜŞER — ihtiyacın olan kartı o tutar. Blöfleri call aralığını blokladığı için normalden sık başarılı olur → teoride bile MDF'in ALTINDA savunmak doğru. B21.4 bunu ICM için verdi; blok mekaniğiyle bu düğümde chipEV'de de geçerli.

> **Fiyat eşiği "bu boyu atan bir blöf sınıfı var" varsayar. Rakibin bahsi blöfsüzse (tükenmiş) ya da blöfleri senin call'ını blokluyorsa, ucuz fiyat bile tuzaktır.**

### 11.2-EK-2 Bloker mekaniğinin saldırı yüzü
B11.2-EK'in ikinci düğümü (rakibin blöfleri senin call aralığını bloklar) savunma tarafını anlatır. Aynı mekanik saldırıda "kart-eşleme"dir: overbet blöfünü rakibin premium bluff-catcher'ının taşıdığı kartla at — o kartı tutmak rakibin "eşleşen" call kombinasyonlarını azaltır, kalan aralığın katlanma payını çoğunlukla yükseltir (fold equity artar, garanti değil). Flush GELEN mono board'da alt cep + flush kartı bu yüzden doğal overbet blöfüdür; kaçan flush'ta flush kartı taşıyan blöfler çoğunlukla listenin sonundadır — rakibin katlanacak kaçmış draw'larını bloklar; önce bloklamayan aday varsa onu seç (bkz. B32.6).

### 11.3 River — thin value: kim öder

Kitabın tüm value filtreleri şimdiye kadar NEGATİF idi ("ödemezse jam etme"). Pozitif komut eksikti: ödeyen varsa İNCE value BET ET. Bu, B0 c.2'nin öbür yüzü — filtre aynı, yön ters.

| El sınıfım | Rec / station | Reg |
|---|---|---|
| **Top pair iyi kicker** | Küçük value bet (öder) | İnce bet / check-call |
| **İkinci per** | Küçük value bet | Check-call |
| **İki per, küçük board** | Value bet | Check-call — reg bu boyutu daha iyisiyle öder |

**Kural:** "Benden zayıf hangi el ödüyor?" sorusunun cevabı VARSA — ince de olsa — bet. Rec-ağırlıklı Main'de kaçan thin value doğrudan chip kaybıdır.

### 11.3-EK Katman-hedefli boy: nut katmanı rakipteyse küçül

Value kütlen orta katmandaysa ve nut katmanı rakipteyse boyu KÜÇÜLT: küçük boy rakibin zayıf-per/çekiliş katmanından ödeme alır, set/iki-per (nut) katmanına karşı kaybı sınırlar ve raise kaldıracını keser — şişmiş potu sen BAŞLATMAMIŞ olursun. Bu boyu nut'un dahil tüm bet aralığına TEK boy olarak uygula ki aralığın raise'e karşı korunsun. Ezber değil pusula: boy, rakip aralığının hangi katmanını kayıtsızlığa itmek istediğini seçer *(kalibre et)*.

### 11.3-EK-2 Katman-hedefli boyun flop ikizi
"Boy, rakip aralığının hangi katmanını kayıtsızlığa itmek istediğini seçer" kuralı 3-bet potunun flop'unda da geçerlidir: önce "hangi sınıfı katlatmak istiyorum?", sonra "o sınıf hangi boyda kayıtsız?" Caller'da trips olası eşleşmiş board'da (9-7-7 tipi) caller'ın orta katmanı küçük bete çoğunlukla call eder, yarım pot civarında *(kalibre et)* kayıtsızlığa yaklaşır; yüksek tek kartı senin aralığında olan eşleşmiş board'da (A-J-J tipi) küçük boya çoğunlukla zaten katlanır (bkz. B32.4).

### 11.4 Kötü river kataloğu

Overpair/güçlü tek per ile bu kartlar geldiğinde "value target yok" alarmı çalar:

- **Alt kartların dördüncüsü / kent tamamlayan** (Vaka 3: 2-4-5'e river 6 — 3'lü, kent, set hepsi seni geçmiş)
- **Üçüncü flush kartı** (senin elinde flush yoksa)
- **Board eşleşmesi** (set / full house kapısı)
- **Üstüne overcard** (rakip top pair'i geçer)

Bu kartlarda: küçük pota check-call, büyük pota check-fold. **Jam ASLA** — jam value ancak senden zayıf bir el ödeyecekse vardır.

*Kök hata bağı: bu bölümün tamamı B0 c.1-2'nin icra katmanıdır. B4 hatanın FREKANSINI preflop'ta düşürür; B11 hata anına gelindiğinde İCRAYI verir.*

---

## Bölüm 12 — ICM ve Final Table Savaş Planı

*★ v5. B3.2'nin 6 satırlık "ICM katmanı"nı taşıyan omurgaya terfi ettirir. SHR €100K ve HR €10.3K küçük saha + dik ödeme: neredeyse her Day 2 kararı ICM altında. En pahalı ICM hatası tam olarak KÖK HATANIN kendisidir — şişmiş potta tek per ile call-off, chipEV'de yanlışken ICM altında katlanarak yanlış.*

### 12.0 Bu turnuvada ICM ne zaman açılır

Aynı 28bb, aynı el, aynı pozisyon: SHR'de ICM kararı, Main Day 1'de saf chipEV kararıdır. Bu ayrımı MASADA değil, önceden yapmış ol.

| Event | Saha karakteri | ICM fiilen ne zaman açılır | Bubble ≈ FT mi? |
|---|---|---|---|
| **SHR €100K** | Reg-ağırlıklı, çok küçük saha *(masada doğrula)* | Erken — Day 1 ortasından | Evet, iç içe |
| **PLO HR €25K** | Küçük saha | Erken–orta | Yakın |
| **HR €10.3K** | Reg-ağırlıklı, küçük saha | Orta — para yaklaşınca dik | Yakın |
| **Main €5.3K** | Rec-ağırlıklı, büyük saha | Geç — Day 3'e kadar chipEV | Hayır, ayrı |

Saha boyutu/ödeme yüzdeleri UYDURULMAZ — kayıt sayısına göre lobiden oku. Karar sırasına 0. adım eklenir: **"Bu event'te ICM açık mı?"**

### 12.1 Risk-premium — B5 jam/call tablolarına ICM düzeltmesi

B5.2/5.3 aralıkları saf chipEV. ICM'nin bir numaralı asimetrisi: **jam etmek, call etmekten çok daha ucuzdur** (jam'de fold equity'n var; call'da yok).

> **Call spot'unda İLK soru "baloncuk mu?" değil, "COVER ediliyor muyum?"dur.** Seni sıkan bubble değil, cover edilmek (kaybedince bust). Cover eden'e (chip leader) karşı call SERT daralır; cover ETMEYEN kısa bir jam'e karşı (kaybetsen de 0'lanmazsın) baloncukta bile GENİŞ call edersin. *(Emre'nin kalibre edilecek sızıntısı: ikisini "baloncuk = sık" diye aynı kefeye koymak.)*

| Durum | JAM aralığı | CALL aralığı (jam'e karşı) | Chip-leader'a jam |
|---|---|---|---|
| **ICM kapalı (12.0'a göre)** | B5 aynen | B5 aynen (99+/AJs+/AQo+) | B5 aynen |
| **Bubble / para yakını** | Bir kademe daralt | İKİ kademe daralt | Genişlet (kilitliyse) |
| **FT pay-jump aktif** | İki kademe daralt | En sıkı — cover edilen katlan | Rol'e bağlı (12.2) |

Kademe içerikleri drill'de ICMIZER/solver ile *(kalibre et)* — uydurma eşik yok.

> **Jam ve call aralığı ICM'de AYRIŞIR. Simetri bir chipEV varsayımıdır.**

**Emre kalibrasyonu (2026-08-10)** — sert baloncuk, seni cover eden geniş BvB jam, ~22bb: **CALL = 88+ · AJs+ · AQo; A9s / KQs FOLD.** Sürücü: cover + baloncuk = kaybedersen bust €0, marjinal edge tournament life'a değmez (A9s ters-domine, KQs flip). *Cover EDİLMİYORSAN (jammer senden kısa, kaybetsen de bust olmazsın) çizgi çok daha geniş; jammer daralırsa call daha da sıkı. Tam eşik lobiden ICMIZER ile doğrulanır.*

**Drill eklentisi (2026-08-10, 2. seans)** — leak'in asıl yaşadığı COVER EDİLMEYEN taraf: cover edilmiyorsun, 22bb BB, baloncuk, geniş kısa jam — **A9s ve KTo'yu da** foldladın ("range yetersiz"). İkisi de call (KTo, geniş 13bb BTN jam'ine ~%54, fiyat için ~%44 gerekir; A9s daha da net). **Cover edilmeyen fold reflexi leak'in yapışkan yarısı** — aynı seansta covered/not-covered kontrastından sonra bile sürdü. Yani cover edilmeyen CALL tabanı *en az* buradaki A9s/KTo kadar geniş; tam aralık hâlâ `(kalibre et)` (ICMIZER), ama hata call değil fold reflexi. Masa cue'su: **jam'e fold basmadan önce "cover ediliyor muyum?" — Hayır ise call sandığından çok daha geniş.**

### 12.2 Final table — rol matrisi

FT'de doğru davranış EL'e değil STACK ROLÜNE bağlıdır.

| Rolüm | Masada benden kısa VAR | Masada benden kısa YOK |
|---|---|---|
| **Kısa (<15bb)** | İlk jam'ci ol, ladder'ı gözle | Katlanma — doğru jam; kilitlenme de bir busttur (blind'lere) |
| **Orta** | En kırılgan — kimin bust'ını beklediğini bil, cover edenle pot açma | Fiilen en kısasın — 12.5: herkes kilitliyse jam aralığını GENİŞLET, katlanma |
| **Cover eden derin** | Agresyon serbest — cezasız ez | Chip-leader'la ego savaşına girme |

### 12.2-EK Kısa-orta BB'nin en kârlı FT spotu: soğuk 4-bet jam penceresi

"Açan var, 3-bet eden var, ben kısayım → fold" refleksi bu üçlüde para bırakır. Pencere üç bacaklı: (1) açıcı orta stack ve ICM baskısı altında — en güçlü ellerini büyük stack'in 3-bet'ine karşı zaten open-jam'liyor, açılış aralığı **tepesiz**; (2) 3-bet'çi onu cover eden büyük stack, büyük boy ve polar — value azınlık, offsuit çöp çoğunluk; (3) sen BB'de kısa-orta: ölü para stack'ine göre büyük, ama stack'in 3-bet'çinin blöfle "nasılsa ucuz" diye ödeyemeyeceği kadar uzun *(alt eşik: kalibre et)*. Jam'inle 3-bet'çi blöflerini atar, açıcı neredeyse hiç ödemez — tepesi zaten open-jam'e gitti, kalan aralık arkasında 3-bet'çi varken sandviçte katlanır. Bir kademe uzun stack'te pencere kapanır: ölü para küçülür, jam value'ya döner *(üst eşik: kalibre et)*.

Malzeme: suited Ax/Kx (A/K bloker 3-bet'çinin az value kombosunu inceltir), çiftler (blöflerde çift yok, açıcının call'ı dar), güçlü broadway'ler. 3-bet'çi küçük boy/lineer ise ya da çok kısaysan pencere yok.

**Kapsam:** 22.8-EK'in "küçük ICM 3-bet'e jam-or-fold, QQ+" satırı kapsanan AÇICI'nın cevabıdır; burada sen üçüncü koltuktasın ve 3-bet BÜYÜK-polar — "3-bet gördüm → dar" refleksi bu pencereyi öldürmesin. Dengeden sapmadır: gözlenen dinamik (büyük stack aynı orta stack'e üst üste 3-bet VE orta stack'in premium'larını open-jam'lediği — raise aralığının tepesiz olduğu — görülmüş) yoksa uygulama; ikinci gözlem eksikse açıcı QQ+/AK'yı hâlâ raise'liyor olabilir ve soğuk jam'i öder → malzemeyi suited Ax/Kx blokerlerine indir, küçük/orta çiftleri ve broadway'leri düş (QQ+/AK zaten value, jam kalır).

### 12.3 Ladder — ne zaman gerçek para

Bir sonraki pay-jump stack'ine oranla BÜYÜKSE ve masada senden kısa varsa: bekle, jump'ı ladder'la. Jump mikroysa: chipEV oyna.

Ödeme merdiveni *(lobiden doldur — eşik sayısı uydurulmaz)*:

| Sıra | Ödül | Bir önceki sıraya fark |
|---|---|---|
| *(doldur)* | *(doldur)* | *(doldur)* |

### 12.4 Bubble av haritası

Bubble savunma değil, turnuvanın en yüksek chipEV penceresidir — DOĞRU tarafındaysan.

| Benim stack'im | Kilitli orta stack | Kısa stack | Beni cover eden büyük |
|---|---|---|---|
| **Büyük (cover eden)** | Soy — open genişlet + 3-bet baskısı | Normal | Ego yok — blöf 3-bet kapalı |
| **Orta** | Seçici soy — YALNIZ cover ettiğin kilitli orta; değilse B3.2: sabır | Normal | Kaç |
| **Kısa** | — | — | Kaç, doğru jam'i bekle |

Kural: **kilitlenmiş orta stack masadaki en kârlı hedeftir.** Rec/reg saha farkı: Main'de hedef bol; SHR/HR'de herkes bunu bildiği için hedef seçici (B5.6 rakip-okuma kalıbının aynısı).

### 12.5 Kısa stack ICM istisnası — DİKKAT

⚠️ **"ICM'de daralt" HER ZAMAN doğru değil.** Herkes kilitliyken kısa stack'in doğru oyunu GENİŞLETMEKtir — kimse seni ödemek istemez. Bu bandda "genel daralt" refleksi aktif olarak yanlış tavsiyedir.

**<15bb jam kartı** *(kalibre et — ≤6 satır: yalnız BTN/SB/BB + "ilk giren"; chipEV jam aralığı + ICM düzeltme sütunu; tam Nash tablosu yazılmaz, "molada bakılır" karakteri korunur)*.

**B0 c.13:** *ICM'de marjinal call = kök hatanın turnuva-hayatı sürümü.*

---

## Bölüm 13 — Multiway Pot Doktrini

*★ v5. B7 kök hatayı "şişmiş VEYA MULTIWAY potta yanlış sınıflandırma" diye tanımlar ama gövdede tek multiway postflop kuralı yoktu. Bu bölüm o borcu öder. Main (€5.3K) rec-ağırlıklı: geniş açılış + çok coldcall = potların çoğu multiway. 4 event içinde en uzun süre geçireceğin doku.*

### 13.0 Çekirdek

> **Her ek oyuncu blöfün fiyatını KATLAR, value'nun barını YÜKSELTİR, nut'un değerini ARTIRIR.**

Sebep bileşik olasılık: rakip sayısı arttıkça birinin iki-per+/set olma ihtimali katlanır. Bu yüzden multiway şişmiş pot, tek per'i HU şişmiş pottan bile daha net bluff-catcher yapar.

### 13.1 HU → 3+ yollu geçiş

| Durum | Heads-up | 3+ yollu |
|---|---|---|
| **C-bet frekansı** | Yüksek | Çöker — sadece güçlü value + gerçek nut-draw |
| **Top pair** | Value | Bir sınıf düşer → check / pot kontrol |
| **Overpair** | Büyük pot adayı | İki sokak + kontrol; SPR'yi say (B11) |
| **Blöf** | Üç kriter (B1) | Neredeyse yok — sadece nut-bloker semi-bluff |
| **Nut FD** | Bet | Bet kalır (fiyat iyi, tamamlanınca çok ödenir) |
| **Non-nut FD / gutshot** | Duruma göre | Check'e döner / ölür |

### 13.2 Kimden korkuyorum

Preflop caller'ların hepsi değil — **flop'ta hâlâ DURAN en sıkı aralık.** Birinin bet'ine aradaki call'dan sonra gelen raise = neredeyse her zaman nut; tek perle devam yok.

### 13.3 Multiway'de blöf — dördüncü kriter

B1'in üç kriteri (bloker/bağlantı/board sahipliği) tek rakibe kurgulandı. Multiway'de dördüncü değişken: **rakip sayısı = blöfün geçmesi gereken kapı sayısı.** Tek station bile blöfü öldürür.

| Rakip sayısı | Blöf modu |
|---|---|
| **HU** | Üç kriter (B1) |
| **3 yollu** | Sadece nut-bloker semi-bluff |
| **4+ yollu** | Yok |

B1.4 "kime blöf yapılmaz" listesine eklenir: **Multiway pot (kim olursa olsun).**

### 13.4 Multiway PLO

Canlı PLO'nun varsayılan hâli multiway (limp/çoklu-call normu). "İkinci en iyi el pahalıdır" kuralı multiway'de "ikinci en iyi el stack'ini kaybettirir"e döner. Non-nut flush draw multiway'de ödeme makinesidir; nut-uçlu wrap değeri artar (tamamlanınca çok yönlü ödenir). Sadece NUT'a oyna. (Ayrıntı B15.)

**B0 c.14:** *Multiway'de tek per, HU'dakinden bir sınıf aşağıdır.*

*Kök hata bağı: doğrudan güçlendirme. B7 başlığının yazılmamış yarısını doldurur; mevcut hiçbir aralığa dokunmaz.*

---

## Bölüm 14 — 40–70bb Köprü Bandı

*★ v5. B4 100–150bb, B5 25–30bb için tablo verir; arası B4.7'nin tek satırlık karakter notlarıyla kalıyordu. Main Day 2+ ve tüm High Roller'ların orta fazı ağırlıkla 40–70bb'de oynanır — en çok elde bulunacağın band. Soru bankası 13 ve 34 bu bandı sorar; bu bölüm B4.7 satırlarını tabloya açar.*

### 14.0 Bandın karakteri

B0 c.7'nin ("her elden önce stack modu") iki uç arasındaki tamamlanması. Bu bantta:

- 3-bet giderek COMMIT'e yaklaşır (60bb'de değil, 40bb'de tam commit).
- Flat penceresi daralır ama B5'teki gibi sıfır değil — IP ve BB'de dar bir flat yaşar.
- Offsuit broadway ve dominate edilebilir eller B4'e göre düşer; oynanabilirlik önde.

### 14.1 3-bet çerçevesi — B4'ten YÖN olarak türet

*Yeni kombo listesi yazmıyoruz; B4'ün KALİBRE aralıklarından bu bandda hangi yönde daraldığını veriyoruz. Tam eşik drill'de (kalibre et).*

| Band | VALUE 3-bet | BLÖF 3-bet | Jam'e devam | Flat istisnası |
|---|---|---|---|---|
| **60–70bb** | B4 VALUE ≈ aynı | B4.7 yönü: daha polarize — blöfü en iyi bloker+oynanabilirlik ellerine daralt *(kalibre et)* | 4-bet'e devam edebilen value | IP: dar; BB: dar |
| **40–60bb** | B4 VALUE − zayıf uçlar | Neredeyse kes — canlıda kimse fold etmiyor | commit'e YAKLAŞIR; tam commit 40bb altında (B4.7) | Neredeyse yok |

**Kural:** ≈60bb altında "3-bet edip fold" yapısı zayıflamaya başlar, 40bb'de biter — tam eşik drill'de *(kalibre et)*. 3-bet edeceğin el 4-bet/jam'e devam edebilmeli — edemiyorsa flat (IP/BB) ya da fold.

### 14.1-EK Köprü bandında 3-bet'in postflop tehdidi
Bu bantta 3-bet'in commit'e yaklaşması preflop'ta kalmaz: 40bb civarı 3-bet potunda flop SPR ≲2'dir, flop call çoğunlukla fiilen stack-off'tur ve flop bet + turn jam tehdidi caller'ın çekilişlerini kayıtsız bırakabilir. 100bb'de bu tehdit ortadan kalkmaz, gecikir: turn jam overbet olur (turn SPR ≳1.5) ve caller çekilişini flop'ta commit olmadan taşıyabilir. Aynı dinamik yüksek board'da (J-T-x tipi) 40bb büyük boy bu yüzdendir, 100bb'de pot-boy; üç-broadway'de ise caller'ın yoğun iki-per/düz payı (ince nut avantajı) boyu her derinlikte küçüğe iter *(kalibre et)* (bkz. B32.3, B32.5). 3-bet edeceğin el postflop'ta jam/check ağacını taşıyabilmeli.

### 14.1-EK-2 40bb squeeze-jam: bloker HANGİ aralığı kesiyor — ve polar squeeze'e karşı 4-bet

Squeeze-jam'in EV'si iki kaynaktan gelir: fold ettirilen eller + ödenince equity. **A/K bloker** ödeyen aralığı (AA/AK/AQ/KK) inceltir → fold equity yükselir, ödenince suited Ax canlı — iyi çalışır. **J/T bloker** rakiplerin ZATEN katlayacağı elleri (JTs/QJs/KJs) siler → kalan aralıkta ödeyen payı büyür, fold equity düşer; ödenince AK/AQ/JJ+ domine eder. Aynı As iki zıt karar üretir: suited düşük Ax jam, offsuit AJ sınırda/karışık — A-blokeri jam'e iter, J-blokeri frenler; pozisyon ve açıcı aralığına göre *(kalibre et)*. Omurga orta-yüksek çiftler + AK/AQ, blöf tarafı suited düşük Ax; A/K-yüksek suited broadway (AKs/AQs/KQs) jam'e girer, J/T'li suited broadway (KJs/QJs/JTs) bu bantta çoğunlukla jam değil call/fold; suited düşük Kx sınırda *(kalibre et)*. Test: "kartım rakibin CALL aralığından mı, FOLD aralığından mı kombo siliyor?" Call'dan siliyorsa jam.

**Açıcı olarak polar squeeze'e karşı:** 40bb'de squeezer koyduğu paraya göre jam'e iyi fiyat alır (kabaca 2:1'e yakın — kendi boyunla hesapla) → fiyattan geniş öder: 99+/AQ/AJs/KQs tipi *(kalibre et)*; o ödeyen aralığa karşı TT–JJ favori DEĞİL, kabaca coinflip/hafif altında *(kalibre et)*; jam'i çoğunlukla +EV yapan, ödenince önde olmak değil, polar squeeze'in blöf yarısının fold'u + potta biriken ölü paradır — sınırda, kalibre et. "Yalnız senden iyiler öder, yendiğin blöfler katlanır" 100bb mantığıdır, bu banda taşıma. Call daha çok orta çiftler (88–99 tipi) ve sınırda TT için *(kalibre et)* — squeeze blind'lerden geldiyse (squeezer'a IP) ve sandviç caller'ın overcall olasılığı düşükse; sandviç caller hâlâ arkada olduğundan call aksiyonu hiçbir senaryoda kapatmaz, geç pozisyon squeeze'ine karşı OOP'sen jam/fold ağırlığı artar. A-blokerli suited Ax ve AK jam. Küçük çiftler karışık.

**Boy:** sandviç caller aksiyonu kapatır ama 40bb'de squeeze boyu stack'e göre büyük ve aralığı kapaklı; call, SPR≈1–2 çok-yönlü pot bırakır → çoğunlukla fold/jam'e düşer, flat nadir → onu fiyattan mahrum etmek için büyümene gerek yok; açıcıya göre orta boy *(kalibre et)*. B4.2'nin "her coldcaller +1 boy" kuralı 100bb+ içindir, 40bb'de gevşer.

### 14.2 60bb → 40bb geçiş işaretleri

Banttan düşerken tablodan ilk çıkanlar: suited connector'la 3-bet blöfü, küçük çiftle spekülatif flat, offsuit broadway coldcall. B0 c.7'nin uyarısı (B4.7'de de tekrarlanır) burada somutlaşır: **"45bb'de 130bb aralığı oynamak en pahalı alışkanlık."**

*Kök hata bağı: mod-önce-aralık omurgasını (B0 c.7) iki uç band arasında tamamlar; yanlış-mod-aralığı, şişmiş pot üretiminin bir numaralı kaynağıdır.*

---

## Bölüm 15 — PLO Turnuva Katmanı: Stack-Modu, SPR, Multiway

*★ v5. B8 zihniyet + el seçimi verir ama derinlik/turnuva boyutu yoktu. Kritik çelişki: Hızlı Referans "30bb altındaysam Bölüm 5'e git" ve B5'in "3-bet = JAM" doktrini POT-LIMIT'te icra edilemez. €25K PLO HR ayrı bir event (bütçenin ~%18'i); bu bölüm o çelişkiyi kapatır.*

### 15.0 Neden ayrı bir katman

B5'in NLH jam/fold refleksi PLO'da geçersiz: pot-limit'te "jam" yok, max pot-raise var; ve equity'ler yakın koştuğu için fold equity doktrini (B0 c.11) PLO'da zayıflar. Yani "30bb PLO" ≠ "30bb NLH".

### 15.1 PLO stack modları

| Mod | NLH'den fark | Karakter |
|---|---|---|
| **60bb+** | Implied odds tavan; rundown/çift-suited değeri zirve | Standart PLO |
| **25–60bb** | B5 GEÇERSİZ — jam yok, pot-raise var | Nut-odak; çıplak AA postflop oynamaz — değeri pre-commit'te (3-bet → SPR≤1) |
| **<25bb** | Pot-raise → kalan stack flop'ta otomatik gider | Bu bir "jam" sayılır; aralığı ona göre seç |

**Kural:** Kısa PLO'da pot-raise = commit. Aralığını "flop'ta stack ortaya girecek" varsayımıyla seç: çift-suited rundown, güçlü AAxx; dangler'lı her şeyi KES.

### 15.2 Pot-geometri ve commit eşiği

B8 "iki pot bet = stack ortada" der (uyarı) ama mekaniği vermedi. PLO'da "şişmiş pot" NLH'den iki sokak erken oluşur; commit kararını pot şişmeden ÖNCE bil.

| SPR (flopta) | Stack-off EDEBİLEN | Edemeyen |
|---|---|---|
| **< 2** | Nut + güçlü redraw (nut set + FD, wrap + nut FD) | Çıplak AA (postflop), tek yönlü el |
| **2–4** | Nut yapılmış el, güçlü kombo draw | İkinci nut, non-nut draw |
| **> 4** | Nut potansiyeli yüksek eller — sokak sokak inşa | Non-nut tamamlanmış el (tuzak) |

**İstisna:** Potu SEN preflop şişirdiysen (3-bet pot → SPR≤1) çıplak AA overpair commit'tir — bu kök hata değil, preflop equity kararıdır. Yasak olan, POSTFLOP şişmiş potta tek-per stack-off'tur.

El-sınıfı eşikleri B8 doktrinine ("nut potansiyeli yoksa büyük pot yok") dayanır; SPR band kenarları (2/4) dahil tam sınırlar başlangıç iskeleti — *(kalibre et)*.

> **PLO'da commit kararı flop'ta değil, pot'u şişirdiğin sokakta verilir.** (B8.1: "iki pot bet = stack ortada"nın mekanik hâli.)

### 15.3 Out sayımı — ham vs nut

PLO'da ham out yanıltır; stack-off eşiği NUT out'la ölçülür. "Wrap + FD: 13+ out" iskonto edilmeden tehlikeli — 13 out'un yarısı non-nut ise gerçek silah değil, tuzaktır. B8'in "gerçek silah" etiketi NUT-FD'li wrap için geçerli KALIR — buradaki kural yalnız stack-off eşiğini nut-out sayımına bağlar.

**Kural:** Stack-off için ham out değil, NUT out say. *(Örnek eller artık var — 15.4-15.6 PLO-6 cash katmanı, Emre'nin 2.100 el verisinden; uydurma yok.)*

*NOT: Tam frekans-bazlı PLO açılış chartı hâlâ yazılmadı, ama icra verisi GELDİ (2.100 el) — sınıf-bazlı açılış disiplini artık var (15.6: CO = UTG + %10, dangler'lı el UTG/CO'dan açılmaz). Kalan çizelge drill'de kalibre edilir.*

### 15.4 Kök hatanın PLO-6 versiyonu

*(Kaynak: Emre'nin $10/$20 6-kart 5-max cash verisi, 2.100 el — 15.3'ün beklediği icra verisi.)*

NLH kök hatası: bloated potta tek pair'i (AA dahil) yanlış sınıflandırma. PLO-6'da aynı hata üç biçimde çıkar: (1) **turn fold** — flopta pair/zayıf draw ile call, turn pot bet'e fold; (2) **river non-nut call** — non-nut straight / alt flush / bottom straight ile ödeme; (3) **naked AA / top-two stack-off** — derin stack'te AA 4-bet + pot c-bet, ya da 3-way check-raise'e top-two ile jam. Üçünün ortak noktası: el gücü flopta okunur, turn/river'da güncellenmez. Altı kartlı oyunda her villain'in elinde ortalama on beş iki-kart kombinasyonu var; flopta "iyi" olan el turn'de nadiren hâlâ iyidir.

**Kural:** PLO-6'da orta el yoktur. Bir el ya nut'tur (veya nut redraw'ı vardır) ya da bloated potta chip koymaz. Turn'de fold etmek ile river'da non-nut ile call etmek aynı hatanın iki yüzüdür.

### 15.5 Yedi leak, yedi kural (PLO-6 cash)

| # | Leak | Kural |
|---|---|---|
| L1 | 3-bet call → flop call → turn fold | 3-bet'e call = yalnız nut potansiyeli: AAxx, KK ds, bağlı 4+ rundown+suit. Dangler'lı el fold. Flop call'dan önce "turn'de hangi kartta devam?" — somut cevap yoksa call da yok. |
| L2 | Preflop genişlik (CO/BB açık) | CO aralığı = UTG + %10 (BTN değil — arkanda üç oyuncu, 3-bet oradan). BB'de call yok: 3-bet ya fold; sebep el gücü olmalı, "OOP oynamak istemiyorum" değil. |
| L3 | Non-AA ile 4-bet/5-bet savaşı | 100bb'de 4-bet ≈ AA. 4-bet'e karşı KKxx / A-rundown: call veya fold, 5-bet değil. 5-bet jam yalnız AAxx. |
| L4 | Redraw'suz nut = call | 6-kartta turn'de redraw'suz çıplak nut straight ile derin yığın koyma; villain neredeyse hep aynı straight + redraw. "Villain aynı ele sahipse ne kazanıyorum?" → "hiçbir şey" ise call. |
| L5 | Derin stack'te naked AA | Stack 300bb'yi geçince AA 4-bet'ten çıkar, call'a geçer; 3-bet potunda flopta pot c-bet yok. Daha iyi: 300bb'de masadan kalk, yeni masaya 100bb otur. |
| L6 | River'da non-nut call | River'da pot bet'e non-nut = fold. Call için iki şart birden: (1) villain'in somut bluff aralığı var, (2) elin o aralığı yeniyor. "Belki bluff'luyordur" bir aralık değildir. |
| L7 | Kendi kartın kendi outunu öldürür | Elde üçlü/dörtlü kart varsa el bir kademe aşağı: AAA = AA değil, tek pair. Monoton flopta flush'suz pair ile barrel yok. |

Yedi leak'in ortak matematiği 15.4: hepsi el gücünü flopta dondurup turn/river'da güncellememekten doğar — bu, kök hatanın PLO formudur.

### 15.6 PLO-6 masa-öncesi kontrol listesi

Oturmadan önce dokuz satır: (1) açılış — UTG dar, CO = UTG + %10, BTN geniş, dangler'lı el UTG/CO'dan açılmaz; (2) 3-bet'e call yalnız AAxx / KK ds / bağlı rundown; (3) 4-bet'e 5-bet yalnız AAxx; (4) BB: call yok, 3-bet veya fold; (5) flop call'dan önce turn planı — "hangi kartta devam?" cevabı yoksa fold; (6) turn'de redraw'suz nut = call, raise için redraw şart; (7) river'da pot bet'e non-nut = fold; (8) elde üçlü kart = bir kademe aşağı; (9) stack > 300bb: AA call'a düşer, c-bet yok, tercihen masa değiştir. Seans kuralı: gece geç saat kapanışı sabit tut, iki büyük kayıp üst üste = on beş dakika ara (bkz. B16.5).

*Kök hata bağı: B0 c.10 ("PLO'da çıplak AA = tek per") draw'lara ve derinliğe genişletilmiş hâli — non-nut'la şişirilen pot, kök hatanın PLO formudur.*

---

## Bölüm 16 — Zihinsel Omurga: Bustout/Re-entry, Tilt, Otopsi, Seri Planı

*★ v5. Kitap şimdiye kadar %100 teknikti. Ama 21–29 Ağustos bir dayanıklılık yarışı (SHR + PLO + Main 8 gün + HR) ve event çakışmaları var. Teknik doktrin ne kadar iyi olursa olsun, onu uygulayacak karar-durumunu (yorgunluk, tilt, re-entry baskısı) yöneten tek satır yoktu. Kısa KART formatı — textbook değil.*

### 16.1 Bustout + re-entry karar kartı

Serinin en pahalı tek kararı bir el değil: bustout sonrası 5 dakikada verilen re-entry kararı. Tilt hâlinde otomatik re-entry = kök hatanın bankroll ölçeği (şişmiş "seri yatırımında" tek bullet'a value muamelesi).

**Zorunlu bekleme:** Bustout → 20 dk *(varsayılan)* masadan uzak → aşağıyı doldur → sonra karar.

| Soru | Evet | Hayır |
|---|---|---|
| Elenme kötü KARAR mıydı? (kötü sonuç değil) | 16.3'ün İKİ SORUSUNU şimdi sor — tam otopsi gün sonuna | Varyans — devam edilebilir |
| Sonraki bullet hangi Day 1 flight'ını / event'i yiyor? | Takvimi kontrol et (16.4) | Serbest |
| Toplam seri maruz kalması ön-limitin içinde mi? | Devam | DUR |
| Fiziksel durumum (uyku/saat) yeşil mi? | Devam | DUR — yarın gir |

**Event-başına max bullet** *(kalibre 2026-08-10)*: SHR: **1** · PLO: **2** · Main: **2** · HR: **2** — toplam max maruz kalma ~€181K (tek-mermi tabanı €140.6K). SHR €100K'da re-entry yok: ikinci mermi hakkı orada tek başına +€100K, disiplin dışı.

### 16.2 Tilt kartı

Kök hata soğuk kanla nadiren yapılır; tipik olarak bir tetikleyiciyi izleyen ellerde *(kalibre — B7 vakalarından süreyi işaretle)*. Tilt'teyken ezber cümle okunmaz — önce tilt FARK edilir.

| Tetikleyici *(3'ü de Emre'de — 2026-08-10)* | Belirti | Anında hamle |
|---|---|---|
| Bad beat / büyük pot kaybı | Kötü ellerle kovalama | Derin nefes |
| Uzun card-dead → aksiyon açlığı | Daha hızlı / snap oynama | 1 orbit VPIP kilidi |
| Blöf gösterildi / ego | Telefona sarılma | Su iç / ayağa kalk |

*Emre belirtileri (2026-08-10) — çapraz-kesen, tek baskın tetikleyici yok: **daha hızlı / snap oynama**, **telefona sarılma**, **kötü ellerle kovalama**. Üçünden HERHANGİ biri belirdiğinde alarm — hangi tetikleyici olduğunu teşhis etmeye durma; belirtiyi fark et, o satırın hamlesini uygula. Yukarıdaki eşleşme en-iyi-uyum; her belirti her tetikleyiciden gelebilir.*

Tetikleyici satırları üç elenme vakandan (B7) geri-referanslı doldurulur — generic tilt listesi yazılmaz.

**B0 c.15:** *Tilt'te alınan karar aralıktan değil, yaradan çıkar — önce yara etiketlenir.*

### 16.2-EK Dördüncü tetikleyici: pozitif-arousal (coşku tilt'i)

B16.2'nin üç tetikleyicisi de negatif duygudan gelir; ama derin-run/FT COŞKUSU da tilt üretir — bozuk uyku + sıcak kart + yükselen imaj over-agresyona döner ve punt'la biter.

| Tetikleyici | Belirti | Anında hamle |
|---|---|---|
| **Coşku / derin-run heyecanı** | Frekanslar sürekli yüksek + "şimdi her spot oynanır" hissi | Karar hızını düşür ve baseline (varsayılan) frekanslara dön; marjinal 4/5-bet düğümünde bir kademe indir |

**Masayı domine eden, dikkat emen konuşkan rakip (B23 eki):** böyle bir rakip senin akışını kırarsa asıl leak konsantrasyon kaybıdır — belirti: kararların yüzeyselleşir, preflop okuman bayatlar. Kök-hata bağı: dikkat dağınıkken aralık disiplini duyguya/otomatiğe düşer. Exploit: kendi tarafında akışa dönüş ritüeli (kulak tıkacı/nefes) kur; masada herkes akıştan çıktığı için okumalar kolaylaşır ve onun aşırı-geniş çipi saldırıya açıktır. Saati ÇAĞIR (zaman-istismarcısına pasiflik doğrudan EV kaybı); el uzadıkça preflop okuman bayatlar — her sokak başında bilinçli tazele.

### 16.3 Otopsi kuralı

| Adım | Kural |
|---|---|
| **Ne zaman** | El bittiği an DEĞİL — gün bittikten sonra. Masada sadece eli not al. *İstisna: bustout+re-entry — yalnız iki soru anında (16.1), yazılı otopsi yine gün sonunda* |
| **İki soru** | (1) Karar anında bildiklerimle kitaptaki kural neydi? (2) Kurala uydum mu? |
| **Uydum + kaybettim** | Vaka defterine "doğru karar, kötü sonuç" — **ARALIK DEĞİŞMEZ** |

Bu filtre kalibrasyonu KORUR: SHR'de doğru jam'ler sık kaybedilecek; filtre olmadan B4-B5'in özenli tablolarını turnuva ortasında bozarsın. Uyarı: "doğruydu, varyanstı" etiketi kendini aklama kapısına dönüşmesin — yalnız kurala UYDUYSAN geçerli. Örnek: B5.5'teki TT jam (Soru 23).

### 16.4 Seri planı ve çakışma ön-kararları

| Tarih | Event / Day | Tahmini bitiş | Uyku hedefi | Ertesi gün riski |
|---|---|---|---|---|
| 21 Ağu | SHR Day 1 | *(doldur)* | *(doldur)* | Main 1A 22'de |
| 22 Ağu | SHR D2 · PLO HR D1 · Main 1A | üçlü çakışma | — | SHR yaşıyorsa Main 1A yanar |
| 23 Ağu | SHR Final · PLO D2 · Main 1B | çakışma | — | Main girişi bugün KAPANIR — son mermi |
| 24–26 Ağu | Main grind | *(doldur)* | *(doldur)* | — |
| 27–29 Ağu | HR €10.3K · Main D5–Final | çakışma | — | Main derindeyse HR taze girme |

**Çakışma ön-kararları** *(sabit öncelik YOK — o anki stack/ICM'e göre karar; kural aşağıda)*:

**Karar kuralı:** Çakışan iki event'ten hangisinde stack'in daha derin ve ödemeye/ICM-avantajına daha yakınsan ONA kal, diğerini feda et. Belirleyen buy-in büyüklüğü değil, o anki KAZANMA beklentin (stack derinliği × saha × ödeme yakınlığı) — mod-önce omurgasının (c.7) event ölçeği.

- SHR Day 2'ye kalırsam Main flight'ı → SHR stack'im ort. üstüyse SHR'de kal, Main'i son mermiye (1B, 23 Ağu) bırak; SHR kısaysa Main 1A'ya geç.
- Main'de derinken HR başlarsa → Main'de ort. üstü + ödemeye yakınsam Main'de kal, HR'yi atla; Main kısaysa HR'ye taze gir.

**Mola rutini:** her molada 3 madde — (1) yürü, (2) ye/su, (3) Hızlı Referans'a bak. Telefonda sosyal medya YOK.

### 16.5 Büyük kayıp sonrası 5-el kuralı

Otopsi #4'ün (AQs bust, B7 Vaka 8) asıl bulgusu zamanlama: yaklaşık 34K chip kaybeden 88 elinden İKİ DAKİKA sonra, seansta ilk kez stack'in %70'iyle preflop call-off geldi. Ondan önceki seksen elde benzer spot yok. Aynı kalıp cash serisinde de görünür: altı dakikada üç büyük pot, birkaç bin dolar. Mekanizma aynı — büyük kayıptan hemen sonra karar kalitesi düşer ve düşüş en pahalı elde gerçekleşir.

**Kural:** Büyük bir pot kaybettikten sonraki 5 el: yalnız premium (QQ+, AK) ile preflop all-in; 4-bet yapılmış her el 5-bet'e fold edilir. "Büyük pot" turnuvada = stack'in %25'i, cash'te = 100bb. Bu, 16.2 tilt kartının el-sayacı somutlaması: tilt'i hissetmeyi beklemez, kayıptan sonra otomatik devreye girer — hikâye-bazlı "telafi" kararını (B25) doğmadan keser.

*Kök hata bağı: yorgunluk ve tilt kök hatanın frekans ÇARPANIDIR — B4'ün "frekansı preflop'ta düşür" mantığının gün-planı ölçeğindeki paraleli (hatayı el içinde değil, takvimde önle).*

---

## Hızlı Referans

*Molada telefondan bakılacak sayfa.*

### Karar sırası

0. Bu event'te ICM açık mı? (Bölüm 12) — açıksa jam/call aralığını daralt
1. Stack modum ne? (Bölüm 3) — 30bb altındaysam Bölüm 5'e git (**PLO'da Bölüm 15** — jam yok)
2. Pozisyonum ve rakibin pozisyonu ne? (Bölüm 4; 40–70bb ise Bölüm 14)
3. Pot kaç yollu? 3+ ise Multiway kartına git (Bölüm 13)
4. Bu el 3-bet mi, flat mi, fold mu?
5. Flop görürsem tek per yaparsam rahat mıyım? (SPR'yi say — Bölüm 11)
6. OOP mu kalıyorum?

### Boyutlar

| Hamle | Boyut |
|---|---|
| **IP 3-bet** | 3–3.5× |
| **OOP 3-bet** | 4× |
| **Coldcaller başına** | +1× |
| **Squeeze** | 4.5–5× |
| **4-bet IP / OOP** | 2.2× / 2.5× |

### 25–30bb kartı

| Durum | Ne yapıyorsun |
|---|---|
| **Açılış boyutu** | 2–2.2× |
| **3-bet** | Yok — JAM. Erken poz.'a TT+/AQs+/AKo; CO-BTN'e 88+/ATs+/AQo+/KQs |
| **Chip leader'a jam** | 77+, A9s+, AJo+, KQs (genişletilmiş) |
| **Jam'e karşı call** | 99+, AJs+, AQo+ |
| **Flat** | YOK — hiçbir pozisyondan |
| **Otomatik fold** | Tüm suited connector'lar, suited gapper'lar, KJo/QJo/JTo |

### Postflop boyutlar (Bölüm 11)

| Durum | Yön |
|---|---|
| **Turn ikinci fıçı** | River planım var mı? Kötü river'da check-fold pot'u bırak *(boyut kalibre)* |
| **River value rec'e** | Öder → ince de olsa BET; ince el küçük, güçlü el büyüt (11.3) |
| **River value reg'e** | İnce / check-call |
| **Rakip overbet** | Polarize oku: tek per → fold yönü |
| **Overbet (kendi)** | YALNIZ nut + derin + rakip capped — tek per ASLA |

### ICM / Final Table kartı (Bölüm 12)

| Durum | Ne yapıyorsun |
|---|---|
| **Event ICM açık mı** | SHR/HR erken · Main geç (12.0) |
| **Para yakını** | JAM ≈ kalır, CALL daralır — cover edilen katlan |
| **FT rolüm** | Kısa: ladder · Orta: en kırılgan, sabır · Cover eden: ez |
| **Bubble avı** | Kilitli orta stack = en kârlı hedef |
| **<15bb + herkes kilitli** | GENİŞLET, daraltma |

### Multiway kartı (Bölüm 13)

| Durum | 3+ yollu |
|---|---|
| **C-bet** | Frekans çöker — güçlü value + nut-draw |
| **Tek per** | Bir sınıf aşağı → bluff-catcher'a yaklaşır |
| **Blöf** | 3 yollu: sadece nut-bloker · 4+: yok |
| **Non-nut draw** | Check'e döner / ölür |

### Tilt kartı (Bölüm 16)

| Tetikleyici | Anında hamle |
|---|---|
| Bad beat / büyük kayıp | Derin nefes |
| Card-dead → aksiyon açlığı | 1 orbit VPIP kilidi |
| Blöf gösterildi / ego | Su iç / ayağa kalk |

### Kırmızı bayraklar — dur ve düşün

- Şişmiş potta tek per ile büyük karar veriyorum → bluff-catcher olarak sınıflandır.
- River'da jam düşünüyorum → benden zayıf hangi el ödüyor? Cevap yoksa jam yok.
- Rakip all-in geldi ve ben chop hesaplıyorum → chop'lar jam atmaz.
- 45bb'deyim ama küçük çiftle flat ediyorum → mod hatası.
- OOP'tan blöf 3-bet yapıyorum → çoğu zaman hata.
- PLO'da çıplak AA ile pot şişiriyorum → tek per muamelesi.
- 28bb'deyim ve suited connector ile pota giriyorum → Bölüm 5, otomatik fold.
- Turn'de ikinci fıçıyı atıyorum ama river planım yok → Bölüm 11, potu şişirme.
- 3+ kişilik potta HU gibi c-bet/value düşünüyorum → Bölüm 13, bir sınıf aşağı.
- Para yakınında jam'e AJs+ ile call ediyorum → Bölüm 12, call daralır (cover?).
- Son 2 kararımı hatırlamıyorum / saat 01:00+ ve marjinal spot → yorgunluk, Bölüm 16.
- Bustout oldu, 5 dakikada re-entry basıyorum → Bölüm 16, 20 dk bekle.

---

*Poker Cep Kitabı v5 — EPT Barcelona Edition · Ağustos 2026*

## Bölüm 17 — ÖZEL MODÜL: WSOP Online Main Event Day 2

> WSOP Online #28 — $5.000 MAIN EVENT, $25M GTD · Day 2 Oyun Planı ve Aralık (Range) Rehberi. Muzun · 784.748 chip (56 BB) · Restart: 21 Eylül 2026, 20:00. Bu bölüm, EPT Barcelona sonrası (1–20 Eylül) çalışılacak turnuvaya-özel bir modüldür; genel doktrini (Bölüm 0–16) bu spesifik yapıya uyarlar.

### 17.1 Turnuva profili ve gerçek durum

Bu bir **freezeout** ve **re-entry yok**. Day 1'ler 21 Eylül'e kadar her gün devam ediyor; Day 2 başlangıcında tahminen 600–900 oyuncu olacak. **Para henüz garantide değil** — restart'a bubble öncesi bir turnuvaya oturur gibi oturuyorsun.

| Kalem | Değer | Kalem | Değer |
| --- | --- | --- | --- |
| Stack | 784.748 (56 BB) | Blindler | 7.000/14.000 (1.750) |
| Format | 8-handed, freezeout | Seviye süresi | 25 dk (hızlı!) |
| Ödül havuzu | $25.000.000+ | Birincilik | ~$5.000.000 |
| Deal | Yasak (FT dahil) | FT | 9 kişi, ertesi gün |

**Kritik yapısal gerçek:** 25 dakikalık seviyelerde blindler saatte ~2,4 kat artar. 56 BB, üç saat pasif oyunla 25 BB'ye düşer. Pasiflik bu yapıda "güvenli" değil, **yavaş elenmedir**.

### 17.2 Temel felsefe: tight değil, seçici agresif

**Premium bekleyerek oynamayacağız.** Doğru profil ikili bir ayrıma dayanır:

- **Küçük potlarda aktif:** Pozisyonel open'lar, blind çalma, c-bet baskısı, kısa/orta stacklere 3-bet baskısı. Chip'in ana kaynağı budur — showdown'a gitmeden kazanılan potlar.
- **Büyük potlarda disiplinli:** Stack'in tamamı sadece net plan + güçlü el kombinasyonuyla ortaya girer. Şişmiş potta tek pair (AA dahil) ile stack riske edilmez — kök hata kuralı bu turnuvada da bire bir geçerli.

Kısacası: **el sayısında geniş, stack riskinde dar.**

### 17.3 Açılış aralıkları (8-handed, ~50 BB, 2.1–2.3x open)

Online sahada rakipler blind savunmasını daha doğru yapar; erken pozisyon biraz daha dar, geç pozisyon standarttır. Ante olduğu için çalmak hâlâ çok kârlı.

| Pozisyon | Aralık (~%) | Eller |
| --- | --- | --- |
| UTG / UTG+1 | %13–15 | 77+, ATs+, KJs+, QJs, JTs, T9s, AJo+, KQo |
| LJ (MP) | %17 | 66+, A9s+, A5s, KTs+, QTs+, J9s+, T9s, 98s, ATo+, KJo+ |
| HJ | %20 | 55+, A8s+, A4s–A5s, K9s+, Q9s+, J9s+, T8s+, 98s, 87s, ATo+, KJo+, QJo |
| CO | %26 | 44+, A2s+, K8s+, Q9s+, J8s+, T8s+, 97s+, 87s, 76s, A9o+, KTo+, QTo+, JTo |
| BTN | %40–44 | 22+, tüm suited aslar, K5s+, Q7s+, J7s+, T7s+, 96s+, 86s+, 75s+, 65s, 54s, A4o+, K9o+, Q9o+, J9o+, T9o |
| SB | %35 (raise-only) | BTN aralığının hafif darı; limp yok, 3x aç |

- **Masa ayarı:** BB'de tight bir oyuncu (fold %60+) varsa BTN/CO aralığını %10 genişlet. Solunda 3-bet'çi bir reg varsa CO'yu daralt, BTN'yi koru.
- **Stack düşerse:** 35 BB altında bu tablo geçerliliğini yitirir — 17.8'deki stack modlarına geç.

### 17.3-EK "SB raise-only" bu turnuvanın bağlam şartıdır, BvB doktrini değil

17.3'ün "SB %35 (raise-only), limp yok, 3x aç" satırı ~50bb online sahaya özeldir: BB limp'e seyrek/pasif iso yapıyorsa tuzak (limp-reraise) payı düşer ama marjinal ellerin ucuz flop görme değeri artar — bu rejim raise-only'yi haklı çıkarmaz; BB limp'e yüksek oranda iso/jam yapıyorsa zayıf limp'ler kesilir ama premium'un limp-reraise payı büyür — o sahada da raise-only EV bırakır. Raise-only ancak BB raise'e belirgin over-fold ediyorsa (raise'in fold-equity'si limp'in ucuz-flop değerini aşar, *kalibre et*) ya da oyuncu limp ağacını yönetemiyorsa kabul edilebilir bir sadeleştirmedir. Genel BvB'de aynı derinlik derin/orta katman sınırındadır ve SB'nin limp payı hangi motorun çalıştığına (SPR kapanı / polarize iso / jam) göre değişir — premium'un limp-reraise dilimi dahil. Hangi rejimin çalıştığını tablo etiketine değil BB'nin iso/jam davranışına göre seç (bkz. B33.1, B33.7).

### 17.4 3-Bet aralıkları

**Boyut:** Pozisyonda (IP) open'ın ~3x'i, pozisyon dışı (OOP) ~4x. 56 BB derinlikte 3-bet potları zaten stack'in yarısını görür — 3-bet aralığın polarize ama bluff tarafı "iyi bloker + oynanabilirlik" ister.

| Senaryo | Value | Bluff / Semi-bluff |
| --- | --- | --- |
| EP open'a karşı (IP) | QQ+, AK | A5s–A4s, KQs (düşük frekans) |
| MP/HJ open'a karşı (IP) | TT+, AQs+, AKo | A5s–A3s, KJs, QJs, 76s–65s (karışık) |
| CO/BTN open'a karşı | 99+, AJs+, KQs, AQo+ | A5s–A2s, K9s–KTs, QTs, J9s, T9s, 87s |
| SB'den BTN open'a | TT+, AQ+ value; geniş bluff | A2s–A5s, K9s+, Q9s+, suited connectorlar — SB'den flat yok, 3-bet ya da fold |
| BB'den BTN/SB'ye | 99+, AQ+ | A5s tipi + KTs/QTs/JTs; geri kalanla defend (call) |

- **Kime 3-bet:** 30–50 BB'lik orta stackler (bubble baskısını en çok onlar hisseder) ve çok açan regler.
- **Kime BLUFF 3-bet YAPMA:** Seni cover eden büyük stackler (bubble yaklaşırken) ve 20 BB altı — tek cevabı jam'dir, bluff 3-bet'in yanar. **Value 3-bet serbesttir** (QQ+/AK 3-bet); cover'ın jam'ine devam yalnız KK+, QQ ise 3-bet-fold (bkz. 17.10 ICM eşikleri). Yasak olan bluff 3-bet, value değil.

### 17.5 3-Bet boyutları (IP ve OOP)

OOP oynamak dezavantajdır → OOP 3-bet daha büyük olur (call fiyatını yükseltir, SPR'yi düşürür). IP'de pozisyon zaten baskı üretir, küçük boyut yeter.

| Senaryo | Boyut | Örnek (2.2x open'a karşı) |
| --- | --- | --- |
| IP 3-bet (BTN vs CO) | open'ın 3.0–3.3x'i | 2.2 BB → 7 BB |
| IP 3-bet (vs EP) | open'ın ~3x'i | 2.3 BB → 7 BB |
| OOP 3-bet (SB vs BTN) | open'ın 3.8–4.2x'i | 2.2 BB → 8.5–9 BB |
| OOP 3-bet (BB vs BTN/SB) | open'ın 3.6–4x'i | 2.2 BB → 8–8.5 BB |
| Squeeze IP (open + caller) | 4x + caller başına 1 open | 2.2 + 1 call → ~11 BB |
| Squeeze OOP | 5x + caller başına 1 open | 2.2 + 1 call → ~13 BB |
| 20–25 BB | 3-bet ≈ jam / küçük-commit (~2.5x, fold yok) | planı preflop bitir |

**Boyutunu ellere göre değiştirme:** AA ile de A5s ile de aynı boyut. Boyut-tell online sahada canlıdan pahalıdır.

### 17.6 4-Bet ve 3-bet'e karşı oyun

**Boyut:** 4-bet = 3-bet'in ~2.2–2.4x'i (IP), OOP ~2.5x. 56 BB'de 4-bet ~20–22 BB = commit eşiği; 4-bet'e devam eden fold edemez.

| Senaryo | Aksiyon | Eller |
| --- | --- | --- |
| Open'a 3-bet (IP) | 4-bet value | KK+, (AK jam/4-bet karışık); QQ rakibe göre |
| Open'a 3-bet (IP) | 4-bet bluff | A5s–A4s (As bloker), düşük frekans, agresif 3-bet'çilere |
| Open'a 3-bet (IP) | Call | QQ–99, AQs, AJs, KQs, JJ–TT, suited broadway |
| Open'a 3-bet (IP) | Fold | A9o tipi offsuit kenar, düşük suited gapper |
| Open'a 3-bet (OOP) | Daha dar | KK+ 4-bet; QQ/AK karışık; JJ–TT, AQs call; gerisi fold |
| 4-bet'e karşı | Jam / call | KK+ her zaman; QQ/AK rakibe göre (nit'e QQ fold, agresöre jam) |

**Altın kural:** 4-bet ettiğin her el, 5-bet jam'e karşı planı önceden belli olmalı. "4-bet edip bakarız" yok.

### 17.7 Fold disiplini

- **Preflop:** 3-bet'e karşı offsuit broadway (KQo, AJo) çöpe. Cover eden stack'ten 3-bet = bir kademe dar.
- **Flop:** Multiway tek pair ile raise'e devam etme. Check-raise + overpair'den azı + ıslak board = fold gündemde.
- **Turn:** Büyük turn barrel + board dörtlü/flush tamamladıysa tek pair biter. "Pot büyüdü, bağlandım" = kök hata; pot büyüklüğü commit nedeni değildir.
- **River:** Overpair + kötü river → küçük bet'e check-call, büyük bet'e check-fold. Jam öncesi tek soru: "Benden kötü hangi el ödeme yapıyor?" Cevap boşsa jam değersiz — check.
- **ICM fold'ları:** Bubble ve büyük ladder'da chip-EV marjinal kârlı call bile fold. Aynı stackli rakiple flip = son çare, asla plan.

### 17.8 Stack modları

| Mod | Stack | Oyun |
| --- | --- | --- |
| Mod A — Standart | 45 BB+ | Tam aralıklar; postflop manevra; suited connector + küçük çift tam değer |
| Mod B — Sıkışık orta | 30–45 BB | Open korunur, flat call daralır (set-mine bozulur); commit eşiği yakın, bluff 3-bet düşer, value artar |
| Mod C — Baskı | 20–30 BB | Open %15–20'ye iner, 2.1x. 3-bet çoğunlukla jam/küçük-commit. A5s–A2s jam-3bet cephanesine döner |
| Mod D — Jam/Fold | 12–20 BB | Açılışın bir kısmı direkt jam (SB/BTN). Open ettiysen 3-bet'e ya jam ya fold. Nash'e yakın, ICM hafif daraltır |
| Mod E — Kısa | <12 BB | Saf jam/fold; ilk giren avantajı; limp üstüne izole jam |

### 17.9 Faz planı ve ICM

- **Faz 1 (bubble uzak):** Mod A. Stack'i 50 BB üstünde tut, pasiflerden çal, büyüklerle gereksiz savaş yok.
- **Faz 2 (bubble yaklaşırken):** En kârlı faz. 15–25 BB'likler taş kesilir: open'a 3-bet, blind'e open, c-bet'e float. Tek fren: seni cover edenler (bir kademe dar). **Bubble'da cover'a karşı QQ bile 4-bet-call olmayabilir.**
- **Faz 3 (para girişi):** 3–4 el tight (kısalar kamikaze jam atar, premium ile karşıla), sonra normale dön.
- **Faz 4 (derin ITM / FT):** Ladder devasa: $227K → $346K → $631K → $1M+. ICM > chip-EV. **Kısaları ez, eşitlerden kaç, büyüklere premium.** FT 9 kişi, deal yasak. FT'ye kısa gitmek hiç gitmemekten iyidir; son 2 masada hayatta kalma önceliklidir.

### 17.10 Kök hata korkulukları (guardrails)

- **Şişmiş potta tek pair = alarm.** AA dahil. Pot 40 BB'yi geçtiyse ve tek pair varsa varsayılan = pot kontrolü + bluff-catcher, stack yarışı değil.
- **AA river jam:** senden kötü el ödemiyorsa jam değersiz — check.
- **Check-raise all-in dürtüsü** (KTo dersi): doğru hat check-call-sonra-değerlendir.
- **Chop mekaniği:** river'da board'u yeniden oku (A4s vakası).
- **Tilt protokolü:** kötü el sonrası 2 el otomatik fold (premium hariç).

### 17.11 Koç notları — plandaki kör noktalar

- **BTN %40 open canlı varsayımıdır.** Online reg'e karşı %33–35'e in, offsuit çöpü (Q9o, J9o) at; zayıflara karşı %40+ kalır.
- **Orta stack 3-bet baskısı incelmiş exploit'tir.** Bluff 3-bet'leri bloker'lı ellere sınırla (A5s, K9s). Asıl tehlike: 3-bet call yiyip flop'ta overpair'le şişmiş pota girmek.
- **Cover'dan "kaçış" strateji değildir.** Dar ama kararlı savunma; cover'a karşı her elin sokak sokak planı yazılı.
- **Geçiş hataları:** 56→35 flat call alışkanlığı (40 BB altı 3-bet-veya-fold); 35→20 bağlanma eşiği öne kayar (commit preflop SPR planıyla); 20 BB panik jam/donma (Mod C/D eşikleri ezber — 20 BB'de A5s resteal-jam, ATo BTN'den min-raise).
- **ICM eşikleri:** QQ vs cover'ın 4-bet jam'i {KK+, AK}'ya ~%40 equity + bubble ICM primi %6–10 → gereken ~%48–50 → **FOLD**; agresif reg'e (TT+, AQ+) ~%54 → call. AK: cover'ın sıkı jam'ine fold, ≤20 BB jam'ine her zaman call. Pratik: bubble'da cover'a karşı tüm stack için aralık **KK+**. Sen cover'ken tersine döner (15–25 BB'lerin BB'sine open %60'a kadar).
- **Online telafi:** min-3-bet = value-ağır; river overbet = polarize (bluff-catcher matematiği); 1/3 flop = range-bet, bilgi taşımaz. Timing zayıf sinyaldir. Not sistemi: her showdown 5sn etiket. 14 saat protokolü: 55dk molada kalk; kafein 8. saatten sonra kes.

### 17.12 Sokratik tuzak seti (S-T1–S-T5)

Her senaryoda yanlışa çeken bir "his" var. Sokak sokak plan yaz, otopsi sonra.

1. **S-T1.** 52 BB, CO'dan AA açtın, BTN reg (48 BB) 3-bet, sen 4-bet, call. Pot ~44 BB, SPR ~1.3. Flop T♠ 9♠ 8♣. C-bet 1/3, rakip RAISE. His: "AA + SPR 1.3 = zaten bağlıyım." Aksiyon?
2. **S-T2.** 34 BB, BB'de KK. HJ (38 BB, sıkı-pasif) open, 3-bet, call. Flop Q-J-T rainbow, bet, call. Turn 9♦. His: "check-raise all-in ile inisiyatif geri al." Ne yapıyorsun, neden?
3. **S-T3.** Bubble'a 25 kişi, 41 BB. Chip lideri (140 BB) BTN'den 3. kez üst üste açtı. BB'de QQ. 3-bet mi call mi? 3-bet'e jam geldi — call var mı?
4. **S-T4.** Derin ITM, 3-bet potu, IP, TT. Board 8-6-2r, rakip check-call. Turn 8, check. River A, rakip POT DONK. His: "overpair'im vardı, A korkutmaca." Karar?
5. **S-T5.** 47 BB, BB vs BTN tek raise'li pot, A9o, board A-9-4 iki kupa. Check-raise, call. Turn 6♥ (flush tamam). Bet, RAISE geldi. "İki pair'im var, güvendeyim"... öyle mi? Karar ve gerekçe.

### 17.13 Drill seti — 10 soru (bu turnuvaya özel)

Restart haftasında "beni hazırla" dediğinde bu setten çalışacağız. Cevap anahtarı ayrı; önce kendin karar ver.

1. **S1.** 56 BB, Faz 1. HJ'den A9s açtın, BTN'deki 48 BB'lik reg 3-bet yaptı. Aksiyonun?
2. **S2.** 38 BB'ye düştün (Mod B). CO'dan 66 açmalı mısın? Açtıysan BB'nin 3-bet'ine planın ne?
3. **S3.** Bubble'a 40 kişi. BB'de 130 BB'lik chip lideri, sen BTN'de KQo. Open?
4. **S4.** Faz 2, sende 60 BB. SB'deki 22 BB open yaptı, BB'de A5s'sin. En kârlı hat?
5. **S5.** 3-bet potu, OOP, QQ'n var. Flop 9-7-5 iki maça, rakip pot bet. Plan (flop/turn/river)?
6. **S6.** Para girdi, ilk el. 9 BB'lik UTG jam, HJ'de ATo, arkanda 3 büyük stack. Call?
7. **S7.** Turn'de overpair KK, board T-8-4-J iki sinek tamamlandı, rakip 3/4 pot ikinci barrel. Devam kriterin ne?
8. **S8.** Mod D (17 BB), BTN'den A7o. Jam mi, open-fold mu, fold mu? Neden?
9. **S9.** Derin ITM, 3 masa kaldı. Eşit stackli (45 BB) rakip CO'dan açtı, SB'de AQo. 3-bet boyutun ve 4-bet'e planın?
10. **S10.** River'da AA, pot şişti, board 2-4-5-9-6. Rakip check etti. Bet var mı? Hangi boyut, hangi hedef ele?

### 17.14 Hazırlık takvimi

| Dönem | Odak | Not |
| --- | --- | --- |
| 17–29 Ağustos | EPT Barcelona | Bu turnuvayı düşünme; tüm odak canlı seride |
| 1–10 Eylül | Haftada 2 drill | ICM/bubble ağırlıklı + stack modu geçişleri |
| 11–18 Eylül | Haftada 3 drill | Bu setin türevleri; yanlışlar 1–2 gün sonra farklı formda geri gelir |
| 19–20 Eylül | Hafif tekrar | Aralık tabloları + guardrail'ler; yeni kavram yok |
| 21 Eylül 20:00 | RESTART | Masa draw'u açıklanınca rakip analizi; dinlenmiş otur — 14+ saat sürebilir |


---

### 17.11-EK Online'da timing: B17.11'i güncelleyen doktrin — sizing'le okunacak BİRİNCİL kanal

**Doktrin güncellemesi (B17.11 revizyonu):** B17.11 "timing zayıf sinyaldir" der; bu CANLI için geçerli kalır (fiziksel teller daha zengin). Ama ONLINE'da fiziksel tell yoktur — elindeki gerçek-zamanlı tek veri timing + sizing'dir. Bu yüzden online modülde timing "zayıf sinyal" değil, sizing'le ZİNCİR halinde okunacak BİRİNCİL rakip-okuma kanalıdır (tek data-point'e değil, tekrar eden desene komite ol):

- **Hızlı check-call + hızlı check** = orta/capped aralık eğilimi → saldır (turn/river barrel).
- **Büyük-para river snap-jam** = önceden-planlı, polar hat; spontane blöf oranı düşük → bluff-catch'ini SIKILAŞTIR (lean-fold), hero-call'a gitme.
- **Snap-call** = "raise menümde yok" itirafı → OOP ince value boyunu korkusuzca büyüt.
- **Uzun tank + küçük/orta bet** = zayıflık/karar-zorluğu → hafif blöf-baskısı ekle.

> **Canlıda timing zayıf sinyaldir (B17.11 orada durur); ONLINE'da timing+sizing zinciri rakip okumasının ana silahıdır. WSOP Online Day 2'de bu zincir birincil kanaldır — tek tell'e değil, tekrar eden desene oyna.**

*(Not: B17 WSOP Online modülü olduğundan bu ek oraya; B0-B16 canlı doktrinini değiştirmez.)*

## Bölüm 18 — Flop C-bet: Frekans, Board Dokusu, Boyut

*★ v6. Kök hatanın DOĞDUĞU sokak. B4.2 preflop boyutu, B11 turn/river icrayı, B13 multiway'i verdi; ama flop c-bet kararının kendisi — hangi board'a, hangi frekansta, hangi boyutta — dağınıktı (yalnız 17.11 "1/3 flop = range-bet" tohumu vardı). Bu bölüm o tohumu açar. Flop c-bet, şişmiş potun tohumunun atıldığı yerdir: yanlış c-bet → kendi şişirdiğin pot → turn/river'da bluff-catcher (B11). Doğru c-bet, hatayı flop'ta keser.*

### 18.0 Tek cümlelik tez

> **Rec-ağırlıklı sahada default c-bet frekansı GTO'nun ALTINDADIR. C-bet bir SEBEP için atılır — value ya da gerçek fold equity — otomatik "range-bet" refleksi için değil.**

GTO çözücü birçok board'da yüksek frekans c-bet der; çünkü dengeli bir rakip fold eder. Main/EPT sahasında rakip station'dır — fold equity düşer. Station'a havayla c-bet = para yakmak; üstelik call yiyince kendi şişirdiğin pota bluff-catcher olarak girmenin kök hatasıdır. Pusula: **öderler mi (value), yoksa gerçekten atarlar mı (fold equity)?** İkisi de "hayır" ise check.

### 18.0-EK İki katman: önce teori-baseline, SONRA rec-sapması

B18.0 "otomatik range-bet yasak" der; bu doğru ama eksik okunursa solver-onaylı tek-boy sadeleştirmesini de yasaklıyormuş gibi durur. İkisi çelişmez — ayrı katmanlardır:

1. **Katman 1 (teori-baseline):** solver-onaylı kuru board'larda tam-aralık tek küçük boy, öğrenmesi kolay + icra hatasız + exploit yüzeyi küçük bir SADELEŞTİRMEDİR. Bunu kur ve toplam-parayla doğrula: tek küçük boya inersen frekansı artır ki ortaya koyduğun toplam para (sıklık × boy) solver'ın koyduğuna yakın kalsın.
2. **Katman 2 (rec-exploit sapması):** B18.0'ın "GTO altı frekans"ı bu baseline'ın ÜSTÜNE eklenen sapmadır — fold equity düşük olduğu için hava-c-bet'lerini kısarsın.

> **Yasak olan solver-onaylı baseline değil, board'a bakmadan REFLEKS range-bet. Rec sahada default ASLA otomatik range-bet değildir — baseline'ı tek-boyla kur, sonra B18.7 gereği frekansı %10-15 ALTINA çek. İki katmanı karıştırmak, iki kuralın birbirini iptal ettiği hissini verir.**

### 18.0-EK-2 3-bet potu istisnası: caller küçük bete over-fold eder
"Rec sahada fold equity düşük, station atmaz" tek-raise'li potun kuralıdır. 3-bet potunda teori küçük bete karşı geniş savunma ister (ucuz fiyat); ama sahada caller'ın dar, orta-güçte aralığı flop'u ıskalayınca ÇOĞUNLUKLA fazla atar *(kalibre et)* — bu bir popülasyon sapmasıdır, teori değil. Hava-c-bet kısıtlamasının 3-bet potunda gevşemesinin teorik gerekçesi ise aralık avantajı + düşük SPR'dir (düşük SPR'de küçük bet bile stack-off baskısı kurar ve caller'ın raise'le cezalandırması commit anlamına geldiği için zorlaşır); tam-aralık küçük bet'in koşulları B32.3'te (bkz. B32.0, B32.3).

### 18.1 İki neden — c-bet neden atılır

| Neden | Ne zaman geçerli | Rec sahada |
|---|---|---|
| **Value** | Senden zayıf el ödeyecek | Güçlü — station öder, ince value bile alınır |
| **Fold equity** | Daha iyi el atar / draw call'ı bırakır | ZAYIF — station atmaz |

Rec sahada c-bet'in ağırlık merkezi value'ya kayar. "Fold equity için" c-bet'i yalnız gerçek katlanabilir eller (agresör reg, kuru board, sıkı BB) için sakla.

### 18.1-EK İnşa sırası: boyu value seçer — ve koruma paradoksu

Aralığı hep aynı sırayla kur: önce hangi eller value'lar, sonra o value'nun istediği boy, sonra coverage, EN SON blöfler — blöfler value'nun seçtiği boya biner, boyu asla blöfler seçmez. 18.1'in iki-neden tablosuna sokulmaya çalışılan üçüncü sahte nedeni de bu sıra süzer: "koruma için bet". Koruma betleyebilen her eli betlersen korumasız kalan aralık CHECK aralığındır — kök hata orada doğar.

### 18.1-EK-2 "Koruma sahte nedendir"in sınırı + alt-çift pusulası
Koruma paradoksu yüksek SPR'de (tek-raise'li pot, commit uzak) geçerlidir; nut avantajı bu sınırın ekseni değildir — sığ 3-bet potunda sınırı SPR çizer. 3-bettor'ın ARALIK (overpair) avantajlı ama nut'u çoğunlukla CALLER'da olan (set/iki-per) kırılgan overpair kütlesinde — düşük kopuk board'da 77-JJ tipi — koruma-value gerçek nedendir: nut avantajından değil, sığ SPR'de erimeden önce paranın girmesinden; adı "erimeden önce alınan value"dur (bkz. B32.4). Boyu ise kırılganlık değil SPR büyütür: bu kütle merged'dır, 100bb'de boy küçülür, frekans büyür; sığda büyüklük geometrik/commit boyundan gelir *(kalibre et)*. "Boyu value seçer" cümlesinin 3-bet-pot uygulaması da buradadır: alt çiftler boyun TAVANINI koyar, tabanını değil — alt çift bet istiyorsa lineer küçük, istemiyorsa polar büyük + alt çift check; pusula boyu seçer, frekansı aralık avantajı seçer (bkz. B32.2).

### 18.2 Board dokusu → frekans ve boyut

Sen preflop açansın (PFR), IP. Board'un kime yaradığını "range avantajı" belirler: yüksek kartlı kuru board senin açış aralığına yarar; düşük-bağlantılı board call eden BB'ye yarar.

| Board tipi | Örnek | Range avantajı | Frekans | Boyut |
|---|---|---|---|---|
| **Kuru, yüksek-kart, bağlantısız** | A-7-2 r, K-8-3 r, Q-9-4 r | Sende | Yüksek — range-bet | **1/3** |
| **Kuru eşleşmiş** | 8-8-3 r, K-K-4 | Sende | Yüksek (ucuz fold eq) | **1/3** |
| **Orta, tek draw** | J-9-6 r, T-8-5 tek renk | Karışık | Seçici | 1/3–1/2 |
| **Islak, bağlantılı** | 9-8-7, T-9-6 iki renk, 7-6-5 | Sende DEĞİL | Düşük, polarize | **2/3** (value+nut-draw), gerisi check |
| **Monotone** | K-8-3 tek renk | Belirsiz | Düşük, dikkat | küçük / check |
| **Düşük-bağlantılı (BB board'u)** | 7-6-4, 6-5-3 | BB'de | Check eğilimi | çoğu el check |

> **Kuru board = küçük boyut, geniş aralık. Islak board = büyük boyut, dar aralık. Boyutu board belirler, elin değil.**

### 18.2-EK Boyut ezberinin iki kör noktası

B18.2 sağlam bir başlangıç kuralı ama iki yerde ters çalışır:

1. **Nedensellik: boyu board değil, VALUE'nun ihtiyacı belirler.** "Boyutu board belirler" bir vekildir — asıl belirleyen (a) value aralığının kaç sokak taşınacağı ve (b) nut avantajının KİMDE olduğudur; board dokusu bunların temsilcisi. Kör nokta: tablo boyu yalnız board-dokusundan okur, KİMİN aralığının board lehine olduğunu ve pozisyonu görmez. "Kuru → 1/3" satırı sıkı EP aralığında (tüm overpair'ler tam ağırlıkta) doğru tutar — ama aynı kuru dokuyu BB-lehine oynayan bir düğümde (geniş BB defense aralığı) o küçük bet aşırı-c-bet olur; check artmalı (kalan betler polarlaşır, boy küçülmez). Tablo iki durumu ayıramaz çünkü sadece "kuru mu ıslak mı"ya bakar. Önce "value'm kaç sokak + board kimin lehine?" diye sor, boyu ondan türet.

2. **Rainbow = büyük boy evi (geniş-aralıklı potlarda).** EN BÜYÜK (overbet/geometrik) c-bet boyları en çok RAINBOW/statik board'da toplanır, flush-draw'lu board'da değil — çoğu oyuncu tersini sanır (ıslak→2/3 varsayılanı dinamik dokularda geçerli kalır; statik board'a taşınan aile overbet sınıfıdır). Geniş-aralıklı potlarda (HU, blind savaşları, BB defense) overpair/en-iyi-Tx avantajın büyükse kuru rainbow board'da büyük-polar boy doğrudur; "kuru = 1/3" ezberi bu potlarda equity-edge'i masada bırakır.

> **Kuru board'da küçük boy varsayılan KALIR — ama sebebi "board kuru" değil "avantaj aralığın geneline yayılmış, nut'ta yoğunlaşmamış"; nut avantajın büyük VE rakip capped ise kuru board dev (overbet) boyun evidir.**

### 18.2-EK-2 3-bet potunda A-high ve monotone satırları
B18.2 tablosu tek-raise'li pot içindir. 3-bet potunda A-high tek kova değildir: kopuk A-high tam-aralık küçük, A + ikinci broadway alt-çift pusulasıyla büyük/küçük ayrımı, wheel-bağlantılı A-high'da 100bb'de check payı artar, küçük-bet sıklığı düşer *(kalibre et)* — caller'ın wheel/set payı derinlikte değerlenir (bkz. B32.3). Monotone satırı ("belirsiz / küçük-check") 3-bet potunda (3-bettor OOP) üç kovaya açılır ve ayırıcı NUT-flush sahipliğidir: A + iki düşük mono check ağırlıklı / küçük karışık *(kalibre et)*; A-yok kopuk orta mono, 3-bettor'da A♠x nut-flush/fd payı var → çoğunlukla küçük; caller'ın yapılı non-nut flush + düz/kombo-çekiliş yoğunluğunun arttığı (T-9-8 tipi bağlantılı orta; A♠x nut-fd payı yine sende) → check ağırlıklı, sınırda küçük dürtme; K-high mono'da nut-fd/nut-flush payı sende kalır, caller'ın non-nut flush yoğunluğu + overpair'in değer kaybı yine check ağırlıklı tutar *(kalibre et)* (bkz. B32.3).

### 18.3 Hangi elle c-bet — dört sınıf

| El sınıfı | Kuru board | Islak board |
|---|---|---|
| **Value (top pair+, overpair, set, iki per)** | Bet (1/3, ince value dahil) | Bet (2/3, potu şişirmek istediğin el) |
| **Gerçek/nut draw (nut FD, OESD+overcard)** | Bet (semi-bluff, 1/3) | Bet (2/3, tamamlanınca çok ödenir) |
| **Hava + backdoor/bloker** | Küçük range-bet (aralığın parçası) | BIRAK — check-fold; board rakibe yaradı |
| **Marjinal showdown (2. per, zayıf top pair)** | Öderse küçük bet, yoksa check-back | Check-back — pot kontrol |

Islak board'a havayla barrel = kök hatanın flop tohumu. Board rakibin aralığına yaradıysa, senin havanın fold equity'si yoktur; küçük value + gerçek draw dışında check.

### 18.3-EK İnce value eşiği rakip-aralıktan türetilir — sınıf adına değil dağılımına bak

İnce value kararı his değil geriye-sarımdır: boyunun dayattığı devam-yüzdesini yaz, son çağıran aralığın yarısından iyisini yenmen gerektiğini kabul et, bunu turn eşiğine geri çevir *(kalibre et)*. Ve sınıf İÇİNDE say: tipik aralıklar AXs'i her kicker'la oynadığından rakip aralığındaki flush sınıfının üst ucu kombinatorik olarak kalabalıktır — A-high kombolar düşük flush'lardan belirgin fazladır — rakip "her flush'la öder" olsa bile ortalamasını yenemeyebilirsin. Kök hata burada doğar: sınıf adına bakıp bet'lersin, sınıf-içi dağılıma bakıp check etmeliydin.

### 18.4 Boyut mantığı — 1/3, 2/3, check-back

- **1/3 (küçük):** kuru board range-bet; ucuz fold equity + ince value; **river'da check-fold lüksünü korur** (B11: potu her büyüttüğünde bu lüksü satın alma gücün azalır — bu B11 kuralı flop'ta başlar).
- **2/3+ (büyük):** ıslak board polarize; yalnız potu şişirmek İSTEDİĞİN eller — güçlü value + nut-draw.
- **Check-back:** marjinal showdown value; ıslak/multiway board; pot kontrol + bedava kart hakkı.

> **Boyut = river planının fiyatı. Flop'ta 2/3 attıysan turn'de ikinci fıçının ve river'ın SPR'ını daralttın; havayla o yola girme (B11.1).**

### 18.4-EK Boy ailesi eklemenin gizli maliyeti

Boy ailesi eklemek bedava değildir: en güçlü ellerini overbet hattına taşıdığında küçük bet'in korumasız kalır — rakip ince value ve blöf raise'ini o hatta açar, ince value EV'in oradan sızar. Tek-boy sadeleştirmesinin gizli faydası budur: her sınıf aynı hatta durduğu için raise caydırılmıştır. 18.2-EK'in overbet ailesini açacaksan maliyetiyle aç *(kalibre et)* — kazandığın polar EV, küçük bete kestiğin korumadan büyük olmalı.

### 18.5 IP vs OOP

| Durum | IP (pozisyon sende) | OOP (pozisyon rakipte) |
|---|---|---|
| **C-bet serbestliği** | Daha serbest — kontrol + equity realize | Daha seçici |
| **Tercih hattı** | Kuru board range-bet, ıslak board polarize | Check-call / check-raise'i tercih et; OOP havayla range-bet TUZAK |
| **Kök hata riski** | Düşük | Yüksek — OOP şişmiş pot en kötü bluff-catcher noktası |

OOP c-bet, station'a value keser ama agresöre kapıyı kapatmaz; marjinal ellerle check-call, güçlülerle check-raise daha sağlamdır. OOP havayla c-bet, seni pozisyonsuz şişmiş pota sokar — kök hatanın ta kendisi.

### 18.5-EK OOP range-bet tuzağının sınırı: 3-bet potunda 3-bettor
"OOP havayla range-bet TUZAK" satırı tek-raise'li potta PFR OOP içindir. 3-bet potunda aralık avantajlı OOP 3-bettor kopuk A-high'da tam-aralık küçük bet atar — orada tuzak değil, baseline'dır; A-yok kopuk orta mono board'da ÇOĞUNLUKLA küçük bet (bağlantı arttıkça, caller'ın flush yoğunluğu (non-nut dahil) büyüdükçe check payı büyür — nut-flush payı Axs ile çoğunlukla sende kalır — *kalibre et*). Ayna yüzü de geçerlidir: düşük bağlantılı board'da (7-6-5) OOP 3-bettor çoğunlukla check eder (overpair'lerin bir kısmı hâlâ bet), IP caller'ın nut avantajı olduğu için stab frekansı yükselir (bkz. B32.5).

### 18.6 Multiway istisnası

3+ yollu potta bu bölüm askıya alınır: **flop c-bet frekansı ÇÖKER** (B13.1). Range-bet multiway yok; yalnız güçlü value + gerçek nut-draw. Ayrıntı Bölüm 13.

### 18.7 Kalibrasyon

*(kalibre et: son 20 elini üç board dokusuna ayır — kuru/orta/ıslak — ve her dokuda kendi c-bet frekansını çıkar. Rec-ağırlıklı masada GTO baseline'ının ~%10–15 altını hedefle; fold equity düşük çünkü.)*

### 18.8 Cheat kartı

| Board | Frekans | Boyut | Hava ne olur |
|---|---|---|---|
| **Kuru yüksek/eşleşmiş** | Yüksek | 1/3 | range-bet parçası |
| **Orta tek-draw** | Seçici | 1/3–1/2 | çoğu bırak |
| **Islak bağlantılı** | Düşük polarize | 2/3 | check-fold |
| **Multiway (her board)** | Çöker | value/nut | yok |

### 18.9 Drill — flop c-bet (4 soru)

1. **F1.** IP, tek-raise'li pot, board A-7-2 rainbow. Aralığının tamamıyla ne yapıyorsun, hangi boyut, neden?
2. **F2.** IP, 3-bet'li pot, KK, board 9-8-7 iki renk. C-bet mi check mi? Boyut ve gerekçe (SPR'yi say — B11).
3. **F3.** OOP (SB'den 3-bet, BTN call), AK, board Q-6-3 rainbow — hiçbir şey yakalamadın. Hat?
4. **F4.** 3 yollu pot, IP, top pair iyi kicker, board J-9-4 iki renk. Frekans ve boyut nasıl değişir (B13)?

*Kök hata bağı: bu bölüm hatanın DOĞDUĞU sokağı disipline eder. B4 hatanın frekansını preflop düşürür; B18 flop c-bet kararıyla şişmiş potun tohumunu keser; B11 hata anına gelinirse icrayı verir. Üçü bir zincir.*


---

## Bölüm 19 — İnisiyatif Hatları: Lead Belirsizken Kim Bet Atar

*★ v6. B18 flop c-bet'in "lead sende" hâlini verdi. Bu bölüm lead'in BELİRSİZ olduğu altı hattı toplar: donk, gecikmiş c-bet, probe, stab, turn float, river blocker-bet. Hepsi kitabın bilerek hafif tuttuğu ileri agresyon bölgesi; o yüzden hepsi DAR çerçeveyle, ortak bir teşhisle ve sert bir "ne zaman DEĞİL" ile verilir. Doğru inisiyatif potu ucuza bitirir (anti-bloat); yanlış inisiyatif kök hatanın yeni kapısıdır.*

### 19.0 Ortak teşhis

Altı hat da tek soruya iner: lead belirsizken potu almak mı, yoksa elimi bedavaya realize etmek mi?

> **Rec sahada varsayılan = uydurma agresyon YOK. İnisiyatif ancak (a) biri zayıflık gösterdiyse VE (b) board senin aralığına yarıyorsa VE (c) elini check'le realize etmek daha kârlı değilse alınır. Üçü birden yoksa: check.**

Her hattın "ne zaman DEĞİL" sütunu "ne zaman"dan önemlidir. Ortak tuzak: marjinal bir yapılı eli (check'le showdown'a götürmen gerekeni) inisiyatif diye bet'e sokmak — bu float/probe/stab'ı kök hataya çevirir.

### 19.1 Donk bet — OOP, PFR'a önden çıkış

Donk: OOP, preflop açana check yerine önden bet. "PFR bet atar" konvansiyonunu kırar.

> **Varsayılan: donk ATMA — PFR'a check standarttır. Donk çoğu zaman telegraf eder ve OOP pot şişirir (kök hata arazisi).**

| Değişken | Donk AÇIK | Donk KAPALI (→ check) |
|---|---|---|
| **Board** | SENİN aralığına çarpan: düşük, bağlantılı, düşük-eşleşmiş (BB savunduğun 7-6-4, 5-5-2) | Yüksek-kart board (PFR'ın aralığı) |
| **Rakip** | Board'u ıskaladığında check-fold eden | Donk'a asla fold etmeyen station |
| **Elim** | İki-per/set/kent avantajı + küçük boyut | Tek per (büyük donk = kök hata) |
| **Oyuncu sayısı** | HU | Multiway |

**Mantık:** düşük-bağlantılı board senin BB savunma aralığına PFR'ın yüksek-kart aralığından çok daha fazla çarpar; küçük donk PFR'a bedava check-back'i vermez, equity'sini fiyatlar. Yüksek board'da donk PFR'ın arazisine bet'tir — atma.

### 19.1-EK Sığ istisna (≤15bb): yüksek board'da KÜÇÜK donk, düşük board'da JAM

19.1 varsayılanı 30bb+ içindir. ≤15bb BB'de (rakip daha derin açtı) iki şey değişir:

- **Yüksek-kart KURU board'da donk VAR, jam DEĞİL.** K-9-4 rainbow tipi board'da top-pair'in kırılgan değildir; koruma değil VALUE ister. Sorun IP'nin cevabı: rakip sığda ikinci per, alt per, alt cep ve A-high'la check-back ağırlıklıysa bu senin K-x'ine ödeyecek katmandır ve check ettiğinde bedava turn görür — jam o katmanı katlatır, yalnız seni geçen kalır; küçük-orta lead katmanı içeride tutar. Rakip sığda küçük range-bet atıyorsa lead gereksiz: check-call / check-jam *(kalibre et)*. Kombo: ödeyecek katmanı (9-x, orta cepler, A-high) BLOKLAMAYAN zayıf-kicker K-x lead, o katmanı bloklayan K-9/K-4 tipi check-tuzak *(kalibre et)*. Bağlantılı K-Q-9'da koruma ihtiyacı geri döner — bu satır oraya taşınmaz.
- **Düşük/orta board'da lead çoğunlukla JAM ya da CHECK,** küçük lead sınırda *(kalibre et)* — mekanizma 30.7'de.

19.1'in "tek per ile büyük donk = kök hata" satırı 30bb+'da aynen durur; sığda düşük/orta board'da orta per'in (sınırda alt per'in) jam'i kök hatanın anti-tezidir. Stack eşiği açıkça yazılı ki 30–60bb'ye sızmasın.

### 19.2 Gecikmiş c-bet — PFR flop check, turn bet

Gecikmiş c-bet: PFR'sın, flop'u check-back ettin (pot kontrol / bıraktın / tuzak), turn'de bet. Bu, B18'in otomatik c-bet refleksinin DİSİPLİNLİ zıddıdır: geniş flop c-bet'i atlayıp turn'de bir SEBEP çıkınca bet edersin.

| Turn'de bet et — sebep | Bet etme |
|---|---|
| Turn'de geliştin (per/draw yakaladın) | Sebepsiz — flop give-up'ını turn'de bloat'a çevirme |
| Villain ikinci kez check etti (zayıflık) | Villain turn'de lead/check-raise eğilimli |
| Turn kartı senin aralığına yaradı | Equity yok + fold equity yok |

Marjinal yapılı elle: flop check → turn ince value bet (sana check gelirse). Küçük boyut.

### 19.3 Probe bet — flop check-check sonrası OOP bet

Probe: flop check-check gitti (OOP'sun, PFR flop'u check-back etti = zayıflık, aralığı capped). Turn'de (ya da river'da) sen bet atarsın.

> **PFR flop'u bıraktıysa güçlü ellerin çoğu flop'ta bet ederdi → aralığı capped. Turn'de bu capped aralığa OOP bet ile inisiyatifi al.**

| Probe AÇIK | KAPALI (→ check) |
|---|---|
| PFR check-back'i zayıflık (rec norm) | PFR güçlüyle tuzak için check-back (nadir, kurnaz reg) |
| Turn kartı senin aralığına yaradı | Turn kötü, aralığını ıskaladı |
| Elin showdown value'suz (bet en iyi kullanım) | Marjinal yapılı el → check-call ile realize et |

Boyut: küçük-orta. "Flop check-check → turn/river çalınır mı" sorusunun cevabı: evet, capped aralığa karşı.

### 19.4 Stab — IP, check gelince potu al

Stab: IP'sin, herkes sana check etti (flop ya da turn). Kimsenin istemediği potu küçük bet ile al. En temel, en düşük riskli inisiyatif aracı — sana check geldiyse herkes zaten zayıflık gösterdi.

| Stab AÇIK | KAPALI |
|---|---|
| HU, sana check geldi, herhangi equity/fold equity | Multiway (biri tuzakta) |
| Checker'ların ıskaladığı board | Checker'ların aralığına çarpan board |
| Boyut küçük | Check-raise eğilimli villain / SD value'lu el bedava showdown istiyor |

### 19.4-EK Stab tablosuna 3-bet-pot satırı
3-bet potunda iki stab hattı vardır. (1) Caller IP, düşük board (7-6-5 / 6-5-4), 3-bettor check etti: küçük stab neredeyse tam-aralık — 3-bettor'ın broadway'leri hiçtir; sınır sorusu "3-bettor'ın overcard/broadway kesimi düz çekilişi alıyor mu?" (8-7-6 / 9-8-7 ve iki üst kartı ardışık 9-8-2 / 8-7-3 tipi — 9-8-2'de JT/QJ, 8-7-3'te T9/JT çekiliş alır — evet → seçici; 9-5-2 / 8-4-2 tipi gerçek kopuk hayır → serbest; *kalibre et*). (2) Yüksek-kart bağlantılı (K-Q-x tipi) board'da OOP check'ine karşı KÜÇÜK stab verimsizdir — check aralığının çoğunu (cep çiftleri, gutshot'lı broadway'ler) katlatmaz, yalnız zaten en zayıf eller düşer; yarım pot civarı + A taşımayan düşük suited bağlantılı / gutshot blöfler (düşük Ax katlanan A-high bloğunu bloklar, listenin sonunda) (bkz. B32.5). Tablonun "boyut küçük" hücresi ikinci hatta geçerli değildir *(kalibre et)*.

### 19.5 Turn float — pozisyonel gecikmiş agresyon

Float: flop c-bet'ini pozisyonda call edip, villain turn'ü check ettiğinde potu almak. Amaç showdown değil, gecikmiş blöf.

| Değişken | Float ET | Float ETME |
|---|---|---|
| **Pozisyon** | IP (temiz alma) | OOP — asla |
| **Rakip** | Flop'u geniş c-bet'leyip turn'ü bırakan | İkinci fıçıyı atan (station/agresif reg) |
| **Elim** | Backdoor draw / overcard / bloker — planlı | Saf hava, plansız |
| **Board** | Villain'in range-bet'lediği kuru-ımsı flop | Islak — villain barrel atar |
| **Oyuncu sayısı** | HU | Multiway |

**İcra:** turn'de check gelirse bet at al; villain ikinci fıçı atarsa BIRAK.

> **Float turn'de biter: ya bet atıp alırsın ya bırakırsın. Sürüklenip ödemek float değil, kök hatadır.**

### 19.6 River blocker-bet — istisna, default değil

Blocker-bet: river'da OOP, ince bir bluff-catcher'la KÜÇÜK bet — villain'in büyük polarize bet'ini engelle, ucuz showdown al.

> **UYARI: bu spotun varsayılanı 11.2'dir — check-call / check-fold. Blocker-bet dar bir sapmadır. Station'a karşı check-call daha iyidir; station küçük bet'e indirim yapmaz, seni yine value'yla öder, raise ederse batarsın.**

| Değişken | Pencere AÇIK | KAPALI (→ 11.2) |
|---|---|---|
| **Rakip** | Capped + agresif/bluffy | Station |
| **Elim** | İnce bluff-catcher (blöfü yener, value'ya kaybeder) | Net güçlü ya da net çöp |
| **River** | Kuru/statik, range belli | Islak/dinamik, villain uncapped |
| **Boyut** | Küçük (~%20–33) | Büyük blocker = çelişki |

### 19.7 Kalibrasyon

*(kalibre et: her hat bir rakip-etiketine bağlıdır. Donk & probe & float: villain'in "zayıflık gösterip bırakma" oranı yüksek olanlara aç. Blocker-bet: yalnız capped+agresif etiketli rakibe, station'a ASLA. Stab & delayed c-bet: düşük risk, HU'da serbest. Etiket yoksa hepsinde default = pasif hat / 11.2.)*

### 19.8 Cheat kartı

| Hat | Kim zayıf gösterdi | Aç | Kapat (default) |
|---|---|---|---|
| **Donk** | — (board avantajı) | Senin board'un + küçük | Yüksek board / station / multiway |
| **Delayed c-bet** | PFR flop'u bıraktı (sen) | Turn'de sebep + küçük | Sebepsiz / lead eden villain |
| **Probe** | PFR flop check-back | Capped aralığa turn bet | PFR tuzak / kötü turn / SD value |
| **Stab** | Herkes check | Küçük bet al | Multiway / check-raise / SD value |
| **Turn float** | Villain turn check | IP + plan | OOP / barrel / multiway |
| **River blocker** | Villain check gelince basardı | Capped+agresif + ince BC + küçük | Station / uncapped → 11.2 |

### 19.9 Drill (6 soru)

1. **F5.** BB savundun, flop 7-6-4 iki renk, PFR sende değil. Donk mı check mi? Board neden fark eder?
2. **F6.** IP PFR, flop A-9-4, KJ'in var, check-back ettin. Turn K. Bet mi? Bunun adı ne, sebep sütunun hangisi?
3. **F7.** OOP, flop check-check, turn'de PFR hâlâ capped, elin QJ (gutshot'a döndü). Çalar mısın, boyut?
4. **F8.** IP, flop herkes check, turn sana yine check geldi, elinde ace-high. Stab mı check mi?
5. **F9.** IP, kuru flop, villain c-bet, sende backdoor flush + overcard. Float; turn'de check ve ikinci fıçı ayrı ayrı planın?
6. **F10.** OOP river, ince bluff-catcher, villain agresif reg + kuru/capped board. Blocker mı check-call mı? Villain station olsa ne değişir?

*Kök hata bağı: altı hat da inisiyatif araçlarıdır — doğru kullanıldığında potu ucuza bitirir ya da capped aralığı cezalandırır (anti-bloat). Yanlış kullanıldığında hepsi aynı kapıya çıkar: marjinal eli inisiyatif diye şişirip bluff-catcher olarak kalmak. Guard: kim zayıf gösterdi + board kimin + elimi realize mi etmeliyim. Üçü yoksa check.*

### 19.10 İnisiyatif hatları ICM altında — lead ne zaman AÇILIR, ne zaman KAPANIR

B19 lead/donk'u chipEV'de dar tuttu (varsayılan: atma). ICM bu hattı simetrik değil, **KİM cover ediyor** eksenine göre iki yönde ayarlar — ve bu, B21.0'ın "cover ediliyorken bir kademe indir" kuralının OOP tamamlayıcısıdır, onunla çelişmez.

Önce risk-primi yönünü düzelt: primi taşıyan, potta **ELENEBİLEN (cover EDİLEN)** taraftır — o, chipEV'de kârlı stack-off'ları bile katlar. Seni **cover EDEN** büyük stack elenemez, primi ~yoktur, chipEV'e yakın call-off eder. İki hat bu asimetriden doğar:

- **SEN cover EDİYORSAN (primin düşük, rakip kısa ve korkak) → lead/donk AÇILIR.** Cover ettiğin oyuncu overpair/TPTK'sını mutlu stack-off edemez (primi onu iter); onun bu pasifliği sana agresyon lisansı verir. Düşük-bağlantılı board'da küçük donk, chipEV'dekinden daha sık doğru (equity'ni fiyatlar, rakibin risksiz realize'ini keser); check-raise'in fold equity'si de artar, çünkü rakip call-off'unu daraltmıştır.
- **SEN cover EDİLİYORSAN (primin yüksek) → lead/donk KAPANIR (B21.0).** Kendin stack-off riskini alamadığın için barrel'ı geniş taşıyamazsın: lead frekansı ve boyu DARALIR; check-raise aralığı ince/lineer value'dan (AJ, orta per → check-call/pot-control) nutted value + en güçlü draw'lara sıkışır.

> **Agresyon lisansı cover EDENe aittir, cover edilene değil. Sen cover ediyorsan lead/check-raise GENİŞLER (rakip stack-off edemez); sen cover ediliyorsan B21.0 uyarınca bir kademe İNDİR.**

Sınır: bu yalnız ICM AÇIKken (B12.0) ve board senin aralığına çarpıyorken geçerli; yüksek-kart board'da ve ICM-körü station'a karşı B19.1 varsayılanı (donk atma) durur. *(kalibre et: lead frekansı risk primi kademesiyle ölçeklenir — B20.6.)*


---

### 19.11 Flop-3-bet düğümü (c-bet raise yediğinde)

Kitap flop'ta c-bet → raise → **3-bet** düğümünü hiç işlemedi; iki yönlü para taşır:

- **Saldırıda:** rakibin c-bet'ine flop-raise atmak ucuzdur çünkü havuz flop-3-bet'i neredeyse hiç bulamaz — 3-bet yemeden turn görürsün, blöflerin equity'sinden koparılmaz (raise ucuza realize eder); raise frekansın teoriden birkaç kat yüksek olabilir *(kalibre et)*.
- **Savunmada:** kendi c-bet'in raise yediğinde senin de bir flop-3-bet aralığın olmalı, yoksa aynı exploit'i sen yersin. Aralık: güçlü value + düşük-frekans düşük-equity blöfler; offsuit eller 12 kombo taşıdığı için düşük frekansta bile yük taşır — tam kompozisyon *(kalibre et)*.

> **C-bet'ine raise yiyince "call veya fold" ikilisi eksiktir — flop-3-bet üçüncü seçenektir: havuz onu neredeyse hiç ATMADIĞI için hem rakibin c-bet'ine raise atmak hem de raise yediğinde kendi flop-3-bet aralığını kurmak kârlıdır. Ama havuzdan NADİREN gelen flop-3-bet aşırı value-ağırlıktır → ona karşı overfold et.**

### 19.12 Turn lead (flop'ta bet-call SONRASI): avantajın TÜRÜ boyu seçer

19.3 probe'dan farkı: flop'ta rakip BET attı, sen call ettin, turn'de OOP lead düşünüyorsun. **Equity avantajı** ile **nut avantajı** farklı boy ister.

Flop'ta büyük bet'e call ettin → aralığının altı katlandı, rakip hâlâ blöflerini taşıyor. Orta-düşük turn (BB aralığının yoğunlaştığı bölge) orta-düşük kartla dolu aralığına yeni per/draw ekler (board eşleşirse trips/iki-per), onun overcard-blöflerine değil → equity sana kayar *(kalibre et)*; ama nut ONDA: overpair/set'leri aralığında bozulmadan duruyor, senin en güçlü ellerinin bir KISMI flop'ta x/r'a gitti — aralığın kısmen kapaklı, onunki değil. Büyük bet yanlış — havası katlanır, ödeyen seni geçer. Araç: ÇOK küçük lead *(kalibre et)*, GENİŞ aralık (orta per, zayıf top-pair, iyileşen draw). Test: rakip "küçük bete hiç katlanmam" dese memnun musun? Evet → küçük lead. "Her şeyle all-in olsak" dese? Hayır → büyük bet yok.

**Lead aralığın = flop'ta RAISE'lemediklerin.** Büyük flop bet → call-ağırlıklı savunma → sınıfı bozulmamış geniş aralık → küçük-geniş lead alanı geniş. Küçük flop bet → çok raise'ledin (top-pair, kent draw, alt-per koruması) → elenmiş aralık → lead daralır; kent tamamlansa bile çoğunlukla lead vermez, kent draw'larının büyük kısmı flop'ta raise'e gitmişti *(kalibre et)*. Kalan lead yeri: raise'lemediğin ama turn'de NUT'a dönen sınıf — tipik olarak board'un alt/orta kartının eşleşmesi → daha büyük boy, daha dar aralık *(kalibre et)*. İkisi de yoksa check. Exploit: havuz küçük lead'e overcard-çöpünü katlar, nadiren raise eder.

## Bölüm 20 — Risk Premium: ICM'in Sayısı

*★ v6. B12 ICM'i NİTEL verdi ("cover ediliyorsan daralt", "bubble'da QQ bile fold"). Bu bölüm o disiplinin SAYISINI verir: risk premium. B12 "ne yapacağını" söyler; B20 "neden ve ne kadar"ı ölçer. chipEV'de yeten el ICM'de yetmez — aradaki fark, her fold'un gizli fiyatı.*

### 20.0 Tez

> **ICM'in fiyatı bir sayıdır: risk premium. chipEV'de gereken equity'nin üstüne ICM'in eklediği ekstra yüzde. "Cover ediliyorsan daralt" = "gereken equity'ye risk primini ekle."**

Kitap şimdiye kadar ICM'i his ve yönle verdi. Ama "ne kadar daraltayım?" sorusunun sayısal bir cevabı var ve masada kademeyle tahmin edilebilir.

### 20.1 İki tanım

| Kavram | Tanım | chipEV'de |
|---|---|---|
| **Bubble factor** | Chip kaybının maliyeti ÷ kazancının değeri | 1.0 |
| **Risk premium** | chipEV eşiğine ICM'in eklediği ekstra gereken equity | 0 |

Bubble factor 1.0'ın üstüne çıktıkça (bubble, FT ladder, seni cover eden rakip) risk primi büyür. İkisi aynı gerçeği söyler: ICM'de chip kaybı kazançtan pahalıdır.

### 20.2 Worked example — primi gör

- **chipEV (cash gibi):** jam'e call için pot odds %37.5 → **%37.5 equity** yeter.
- **Bubble'da aynı call** (kayıp = bust): gereken equity ~**%47**'ye çıkar *(temsili — kesin sayı 20.6 / kalibre et)* → **risk primi ~%9–10.**

Sonuç: chipEV'de rahat call olan bir el — mesela A9s (B12.4'te cover EDİLMEYENE geniş call'dı) — cover EDENE karşı bubble'da **fold**'a döner; en yüksek primde QQ bile marjinalleşir. B12.4 ve 17.10'un sayısal örneği budur.

### 20.3 Prim ne zaman büyür

| Faktör | Prim |
|---|---|
| **Payout sıçraması yakın** (bubble, FT basamağı) | Büyür |
| **Rakip seni COVER ediyor** (kaybedince bust) | **En büyük** |
| **Rakip cover ETMİYOR** (kısa jam, 0'lanmıyorsun) | Küçük/ihmal → **geniş call** |
| **Az oyuncu, sığ para** | Sertleşir |

Bu tablo B12.4'ün cover/not-cover asimetrisinin ta kendisi: **asimetri = risk premium.** Cover edene karşı prim yüksek (daral); cover etmeyene karşı prim ~0 (genişle).

### 20.4 Masada nasıl kullanılır

1. chipEV'de kaç equity gerekiyordu? (pot odds)
2. Üstüne risk primini ekle (cover mu? bubble mı? → yüksek).
3. Elim bu ICM eşiğini geçiyor mu? Geçmiyorsa fold.

> **JAM atmak primden daha az etkilenir — fold equity'n var. Bu yüzden jam aralığın KALIR, call aralığın DARALIR (B17 asimetrisi). Risk premium bu asimetrinin sayısal temelidir.**

### 20.5 İki yönlü leak (kök hata bağı)

- **Cover edilmeyeni cover edilen sanmak** = olmayan primi eklemek = **fazla fold** (B12.4 drill'deki A9s/KTo leak'i).
- **Cover edeni cover edilmeyen sanmak** = primi atlamak = **fazla call → bust.**

### 20.6 Kalibrasyon

*(kalibre et: kesin risk primini ICMIZER/HRC verir — stack dağılımı, payout, kalan oyuncuya göre. App'te bu slot solver pipeline ICM modundan dolar; masada "yüksek/orta/düşük prim" üç kademeyle tahmin et, tam sayıyı molada doğrula.)*

### 20.7 Cheat kartı

| Durum | Prim | Aksiyon |
|---|---|---|
| **chipEV / para uzak** | ~0 | Normal pot odds |
| **Cover ETMEYEN kısa jam** | ~0 / negatif | Geniş call |
| **Bubble, nötr** | Orta | Eşiğe ekle, marjinali kes |
| **Cover EDEN + bubble/FT** | Yüksek | Sert daral; QQ bile marjinal olabilir |

### 20.8 Drill (3 soru)

1. **R1.** chipEV'de %37.5 gereken bir call; bubble'da cover eden bir stack jam etti. Eşiğin nasıl değişir, A9s call mı?
2. **R2.** Aynı bubble, ama jam eden seni cover ETMİYOR (sen daha derinsin). Prim ne olur, aralığın nasıl değişir?
3. **R3.** FT'de sen chip lidersin, kısa stack sana jam etti. Primin ne (kaybetsen de lidersin)? Call aralığın genişler mi daralır mı?

*Kök hata bağı: risk premium, "cover ediliyor muyum" leak'inin (B12.4) sayısal motorudur. B12 yönü verir, B20 fiyatı ölçer. İkisi ICM disiplininin nitel ve nicel yarılarıdır.*


---

## Bölüm 21 — ICM Altında Postflop: Her Agresif Hattı Bir Kademe İndir

*★ v6. B18/B19 postflop inisiyatifi (c-bet, barrel, blöf, bluff-catch) chipEV'de verdi; B12/B20 ICM'i verdi. Bu bölüm kesişimdir: aynı postflop hatları ICM baskısı altında nasıl kayar. Risk premium (B20) preflop call/jam'de gösterildi; burada flop-turn-river'a taşınır — çünkü prim her sokakta yeniden birikir.*

### 21.0 Tez

> **ICM baskısı altındayken — yani seni COVER eden birine karşı — her agresif postflop hattı bir kademe İNDİR: bet→check, raise→call, büyük→küçük, thin-value→check-back, hero-call→fold. Cover EDİYORSAN (chip lidersin) tersi: bir kademe YUKARI — daha çok barrel, daha çok baskı. Yön, cover haritasının işaretidir; başlık cover EDİLENin kuralıdır.**

B20 risk primini sayı olarak verdi ama preflop call/jam'de gösterdi. Postflop'ta prim her sokakta yeniden birikir: şişmiş potta call-off en pahalı aksiyondur. Bu bölüm primi flop-turn-river'a taşır.

### 21.1 Neden call-off en çok ICM-vergili aksiyon

Postflop'ta chip'i en çok riske atan hat, büyük bir bet'e ya da raise'e call/hero-call'dur — potun şiştiği ve kaybın bust'a yaklaştığı yer. Prim en çok burayı vurur:

- **Bet/barrel'ın fold equity'si vardır** → prim onu daha az cezalandırır (B20.4 asimetrisi postflop'ta da geçer).
- **Call-off'un fold equity'si yoktur** → tüm chip'i showdown'a bağlarsın, ICM cezası tam gelir.

Sonuç: ICM baskısında blöf-yakalama aralığın DARALIR (fazla per'i bırak), ama değer için bet'lemen aynı kalır. "Tek per = bluff-catcher" kuralı (B11.2) ICM'de daha da fold-eğilimlidir.

### 21.2 Bir kademe indir — kural tablosu

| chipEV hattı | ICM baskısında (cover ediliyorken) |
|---|---|
| **Thin value bet** | Check-back (ince değeri kesme) |
| **2. fıçı (barrel) blöf** | Tek fıçı / vazgeç |
| **Büyük boyut** | Küçük boyut |
| **Raise (value)** | Call (potu şişirme) |
| **Hero-call / bluff-catch** | Fold |
| **Check-raise blöf** | Düz call ya da fold |

Her satır aynı yönü söyler: potu küçült, chip'i showdown'a bağlama, marjinali kes. Kademe = risk primi. Bu tablo ICM içindir; PKO kelle katmanı için bkz. 21.3-EK.

### 21.2-EK "Bir kademe indir" MARJİNAL bölgenin kuralıdır — iki istisna

B21.2 tablosu güçlü bir varsayılan ama iki durumda boy-küçültme YANLIŞ olur; ikisi de aynı sebeple: kademe-indirme ince/marjinal aralığın kuralıdır, güçlü-yoğun aralığın değil.

1. **Nut-yoğun river:** cover edilen kısa stack bile river value'su nut'a yoğunlaştığında (full-house + nut-flush) büyük boy/overbet jam KALIR — teoride doğrudur. "ICM'de her şeyi küçült" tünel-görüşü burada başlı başına sızıntıdır. Test: bu boyun value aralığı marjinal mi yoksa nut-polarize mi? Nut-polarize ise kademe uygulanmaz.
2. **Hafif-ICM ilk dokunuşu:** geç kayıt yeni kapanmış, para hâlâ uzakken ICM'nin postflop'a İLK etkisi ince value bet'lerin çekilmesidir — kalan bet aralığı güçlendiği için boy KÜÇÜLMEZ, hatta büyüyebilir. B21.2'nin küçültme satırı COVER-baskısı içindir; hafif-ICM'de yanlış küçültme.

> **Kademe-indirme marjinali kırpar, nut'u değil. "Cover ediliyorum → küçült" ancak boyun value aralığı marjinalse geçerli; nut-yoğun bir aralıkla küçük atmak parayı masada bırakır.**

### 21.3 İki koltuk — cover asimetrisi

Yön mutlak değil; cover haritasının işaretine bağlıdır. Aynı spot iki oyuncuya zıt talimat verir:

| Sen | Prim | Postflop yön |
|---|---|---|
| **Cover EDİLİYORsun** (kaybedince bust) | Yüksek | Bir kademe İNDİR — check, call, küçük, fold |
| **Cover EDİYORsun** (chip lider, kaybetsen de yaşarsın) | Düşük/negatif | Bir kademe YUKARI — barrel, baskı, büyük |

Bu B20.3 tablosunun postflop yüzüdür. Chip lider baskıyı satar (rakip için her pot bust riski); kısa/orta stack baskıyı yer (daralır). **Başlık "bir kademe indir" cover EDİLENin kuralı; cover EDEN tersini yapar.**

### 21.3-EK PKO ≠ ICM: kapsananın indirimi korku değil, fold equity kaybı

21.2/21.7 satırları ICM içindir. PKO'da kapsanınca aynı refleksi (ince value → check-back, boy küçült) uygulamak yanlış: PKO'da kapsananın pozitif risk primi yoktur *(ICM bileşeni ayrı — kalibre et)*. Onu "pasif" yapan bust korkusu değil, karşısındaki cover edenin KELLE için geniş ödemesidir. Geniş ödeyen rakibe karşı blöf ölür, value yaşar — ince value daha çok ödenir; kapsananın value aralığı iki yönde de kabaca aynı, blöfü daha az *(çoğunlukla)*.

**Kural:** kapsanınca blöf/barrel kademesini indir, value kademesini indirme; semi-blöfleri fold equity beklemeden equity'yle fiyatla. "Cover ediliyorum → thin value check-back" ICM kuralıdır, kelle kuralı değil. FT'de ikisi birlikteyse iki indirimi ayrı hesapla: ICM primi ince value'yu keser, kelle indirimi blöfü keser — tek "bir kademe indir"e çevirme. Cover eden tarafın flop'u için 28.20; kapsanan IP için 28.21.

### 21.4 MDF ICM'de çöker

Minimum savunma frekansı (MDF) bir **chipEV** kavramıdır — cash'te ve ICM-baskısız MTT spotlarında geçerli; ama para sıçraması yakınken çöker. Chip kaybı kazançtan pahalı olduğu için, MDF'in söylediği savunma oranının ALTINDA suçsuzca fold edersin.

- **chipEV:** villain ⅔ pot bet'lerse MDF ~%60 → aralığının %60'ını savun (yoksa blöfe açıksın).
- **Cover edildiğin ICM spotu:** aynı bet'e savunma oranın çok daha düşük olabilir; over-fold burada exploit değil, doğru oyundur.

Yani "MDF altında fold = leak" kuralı ICM'de tersine döner: para sıçraması yakınken MDF'in altında fold etmek doğrudur. Villain'in blöf çalması senin ICM primini geri ödemez.

### 21.5 Önce korunma + kısa stack flop-jam

- **Protection-first:** ICM'de ince değeri bırakırsın (check-back), ama gerçek equity'ni korumak için bet aynı kalır. İnce ≠ kırılgan: ince = zaten önde, kart umursamaz → check; kırılgan = önde ama board tehdit ediyor → bet (ucuz kart vermemek için, showdown'u bağlamak için değil).
- **Kısa stack flop-jam:** sığ SPR'de (kalan stack ≤ pot) blöf-yakala/float yok; ya flop'ta jam ya fold. Ara boyut chip'i bağlar, fold equity'yi öldürür. ICM'de sığken hat ikiye iner: jam ya bırak.

### 21.6 Kalibrasyon

*(kalibre et: kademe miktarı = risk primi (B20.6); stack dağılımı/payout/kalan oyuncuya göre HRC/ICMIZER verir. App'te bu slot solver pipeline ICM modundan dolar; masada "yüksek/orta/düşük prim" üç kademeyle tahmin et. MDF'in tam çöküş noktası da payout yakınlığına bağlı — molada doğrula.)*

### 21.7 Cheat kartı

| Spot | Cover ediliyorsun | Cover ediyorsun (lider) |
|---|---|---|
| **Thin value** | Check-back | Bet (ince değeri al) |
| **Marjinal bluff-catch** | Fold | Call (baskıyı yer) |
| **Barrel kararı** | Tek fıçı / vazgeç | 2-3 fıçı, baskı |
| **Boyut** | Küçük | Büyük / polarize |
| **Kırılgan value** | Bet (korunma) | Bet (korunma) |

Kırılgan value satırı iki tarafta da bet — korunma primden bağımsızdır.

### 21.8 Drill (3 soru)

1. **P1.** Bubble, seni cover eden villain'e karşı river, elinde ince bir bluff-catcher, villain küçük bet. chipEV'de call'du. ICM'de ne yaparsın, neden?
2. **P2.** FT'de chip lidersin, orta stack flop'ta check-call yaptı, turn'de sana check geldi, elinde iyi ama nut olmayan bir el. Kademe hangi yöne, ne yaparsın?
3. **P3.** Cover edildiğin bir spotta villain ⅔ pot bet attı, MDF ~%60 diyor ama para sıçraması çok yakın, elin savunma sınırında. Fold leak mi, doğru mu?

*Kök hata bağı: bu bölüm B18/B19 postflop inisiyatifini B12/B20 ICM'iyle birleştirir. Tek guard: cover ediliyor muyum? Evetse her agresif hattı bir kademe indir, call-off'u en sert kes. Hayır/cover ediyorsam bir kademe yukarı. Risk primi (B20) postflop'ta her sokakta yeniden birikir; en pahalı aksiyon şişmiş potta call-off'tur.*


---

## Bölüm 22 — ICM Ne Zaman ve Kime: Zaman Çizelgesi + Laddering

*★ v6. B20 risk priminin TANIMINI ve yönünü verdi (cover edende en yüksek, cover etmeyen kısaya ~0; kesin değer kalibre/HRC). Ama prim sabit değil: turnuva boyunca açılıp kapanır (zaman çizelgesi) ve masadaki stack dağılımına göre kime uygulanacağı değişir (laddering). B22 o primin ne zaman ve kime değiştiğini verir.*

### 22.0 Tez

> **Risk primi bir sabit değil, bir eğridir. Zamanla: bubble'a yaklaşırken tavan yapar, para geçilince gevşer, FT'ye yaklaşırken yeniden yükselir, her sıçramadan sonra bir tık düşer. Kişiye: seni cover eden derin stack'e karşı yüksek, cover ETMEYEN alt stack'e karşı ~0. Kişi ekseni faz ekseninin ÖNÜNE geçer: faz primin tavanını, cover haritası kime uygulanacağını belirler.**

### 22.1 Zaman çizelgesi — primin dört fazı

ICM hissedilmeden önce (derin turnuva, para uzak) prim zaten ~0'dır; döngü bubble yaklaşımıyla başlar. Kaba onset: **kalan oyuncu ≈ ödenen yer sayısının ~3 katına indiğinde** ICM hissedilmeye başlar *(kalibre et — yapı ve payout eğrisine bağlı)*.

1. **Bubble yaklaşımı** — prim tavanda. Kısa'ların CALL'ı kilitlenir (jam'i KALIR — B17); büyük stack'ler (herkesi cover eden) en çok baskı satar, orta stack'ler en çok baskı YER. Call, seni cover edene karşı en sıkı; en agresif steal'i büyük stack'ler cover ETTİKLERİ kısalara satar.
2. **Bubble patladı / erken ITM** — prim, döngü içinde en düşük noktada. Min-cash garanti, sıradaki sıçramalar stack değerine göre küçük; bu pencerede chipEV'ye en yakın oynarsın. Gaz: chip biriktir.
3. **FT yaklaşımı** — prim yeniden yükselir (2-3 masa kala, sonra FT bubble). Her eleme büyük para. İkinci fren.
4. **Her sıçramadan sonra gevşe** — biri elendiğinde (bir basamak geçilince) prim bir tık düşer; masa kısaldıkça ve para kilitlendikçe yeniden gaz.

### 22.2 Faz tablosu

| Faz | Prim (cover edene) | Mod |
|---|---|---|
| **Bubble yaklaşımı** | Tavan | Sıkı call (seni cover edene); agresif steal (cover ETMEYENlere) |
| **Bubble patladı / erken ITM** | Döngüde en düşük | Gaz — biriktir |
| **FT yaklaşımı** | Yüksek | İkinci fren — daral |
| **Her eleme sonrası** | Bir tık düşer | Kısa gevşe, sonra gaz |

> **Öncelik kuralı (B12.4): faz primi yalnızca seni COVER edenlere uygulanır. Cover ETMEYEN kısa bir jam'e karşı prim her fazda ~0'dır (B20) → bubble'da bile geniş call. Faz primin tavanını, cover haritası kime uygulanacağını belirler.**

### 22.2-EK Kısa stack: bubble'da CALL-kilitli, FT'de göreli serbest (tersinme YOK)

Yaygın bir yanlış: "kısa stack'in primi bubble'da orta'dan yüksek." DEĞİL. ICM'de ham prim sıralaması her iki fazda da aynı: **kısa < orta.** Kısanın primi düşüktür çünkü double onun için EN ÇOK şeyi değiştirir (min-cash'ten kurtulup gerçek stack olur); orta stack en yüksek primi taşır (double az şey ekler, bust neredeyse-kesin cash'i öldürür — B3.2 doğru, ham prim için de). Doğru fark **sıralamada değil, kısanın iki fazdaki DURUŞUNDA**:

- **Stone bubble'da:** kısanın primi düşük OLSA DA >1'dir → chipEV'de kârlı marjinal call'lar bile eksiye döner; bu yüzden kısa gerçekten "taş kesilir" (CALL kilidi B22.1). Kilit, primin ortadan yüksek olmasından değil, prim>1 + min-cash kilidinden gelir.
- **FT'de:** para girildi, min-cash kilidi kalktı → kısanın primi görece gevşer, orta'dan daha serbest gamble eder. Ama "kaybedecek şeyi yok" değil: arkasında daha kısa bir stack ve büyük ladder basamağı varsa kısanın jam'i de sıkılaşır (B12.2 — ilk jam'ci ol ama ladder gözle).

> **"Bubble'da orta en kırılgan" hem stratejik sıkışma hem ham prim için doğru: orta en yüksek primi taşır. Kısa her iki fazda da ORTADAN düşük primli — farkı yaratan, bubble'daki min-cash kilidi (CALL daralır) ile FT'de o kilidin kalkması.**

### 22.3 Laddering nedir

Laddering, her eleme bir para sıçramasıyken sırf hayatta kalarak üst basamağa tırmanmaktır. Bir **orta-stack disiplinidir**: lider için prim düşük (özgür, baskı satar), orta stack cover ediliyor (ladder equity'si en yüksek). İki leak:

- **Over-ladder:** sağlıklı bir stack'i sırf ladder için nitlemek — chip biriktirme fırsatını kaçır, blind'lere eri.
- **Under-ladder:** ladder'ı hiç saymayıp seni cover eden mega ile gereksiz flip — cover edilirken bust.

### 22.4 Stack-tarama: kime baskı, kime saygı

- **Cover ETMEYEN bir alt stack'e saldır, lidere değil.** Senden kısa seni cover etmiyor → ona baskı ucuz (prim ~0). Lider seni cover ediyor → prim yüksek, saygı.
- **Short stack: CALL'ı daralır, JAM'i KALIR (B17).** Kısa olmak "her şeyi at" değil ama nit de olmak değil: cover baskısında sert daralan şey CALL aralığındır; unopened JAM aralığın fold equity sayesinde geniş kalır, cover edenlere karşı yalnız bir tık sıkılır. "Paraya fold'la girme" (jam'i kesme) yalnızca uç spotta doğrudur: başka bir mikro tam da bust olmak üzereyken (doğrudan ladder) *(kalibre et)*.
- **Outlier ICM'i keskinleştirir ve asimetri yaratır** (mega kimi ezer, mikro kime ladder belli). **Homojen stack'lerde asimetri kaybolur ama prim kaybolmaz:** herkes herkesi cover ettiği için çatışma primi karşılıklı yüksektir → homojen bubble masası herkes için sıkı oynanır (klasik eşit-stack "AA bile fold" satellite spotu).

### 22.5 İki yönlü leak tablosu

| Leak | Ne yaparsın | Neden yanlış | Düzeltme |
|---|---|---|---|
| **Over-ladder** | Sağlıklı stack'i nitlersin | Chip biriktirmeyi kaçır, blind'e eri | Primi olmayan yerde gaz |
| **Under-ladder** | Seni cover eden mega ile flip | Cover edilirken bust | Cover haritasını oku, primi ekle |
| **Short-panik** | Jam aralığını kalibresiz şişir | Fold equity'yi ziyan, bust | Jam'i KORU, CALL'ı daralt (B17) |
| **Short-nit** | Jam'lemesi gereken eli fold | Blind-out, ladder'ı yakar | Jam aralığını geniş tut |

### 22.6 Day 2 / bubble uygulaması

Somut: ~12-15 kala restart ediyorsan (ör. WSOP Online Main Day 2 — online yapıda alan birkaç masaya iner), kalan oyuncu ödenen yer sayısının çok altında → tam FT-yaklaşımı fazındasın, prim yüksek. Cover ETMEYEN kısa/orta'ya karşı ladder değerin büyük ve prim ~0 (geniş call/steal); seni cover eden lidere karşı prim tavanda (saygı, daral). Her sıçramadan sonra bir tık gevşe. Steal hedefin: seni cover ETMEYEN oyuncular.

### 22.7 Kalibrasyon

*(kalibre et: onset eşiği (~3x ödenen yer), her fazın tam prim değeri ve ladder sınırı yapıya/payout eğrisine/kalan oyuncuya bağlıdır; HRC/ICMIZER verir. App'te solver pipeline ICM modu + turnuva yapısı bu slotu doldurur. Masada faz + stack haritasını üç kademeyle (tavan/orta/düşük) tahmin et; cover haritasını her el yeniden oku.)*

### 22.8 Cheat kartı

| Sinyal | Oku | Aksiyon |
|---|---|---|
| **Bubble yakın + seni COVER eden** | Prim tavan | Sıkı call, saygı |
| **Bubble yakın + cover ETMEYEN kısa jam** | Prim ~0 | Geniş call (B20) |
| **Yeni ITM** | Prim dip | Gaz, biriktir |
| **FT yaklaşımı** | Prim yüksek | Daral, ladder koru |
| **Sen liderken alt stack karşında** | Prim düşük | Baskı sat |

### 22.8-EK İki AYARTICI düğüm — ve neden "FLAT YOK" yine de geçerli

İki düğüm flat/geniş-call'a davet eder gibi görünür; ikisinde de doğru cevap yine kitabın kuralıdır (B5.2 "FLAT YOK", B22.4 "cover ETMEYENe saldır"). Ayartıyı tanı, kurala uy:

1. **Bubble'da geniş-açan lidere karşı OOP (cover ediliyorken):** "Lider çöp açıyor, ucuz flat'le postflop edge alırım" YANLIŞ — seni cover edene karşı OOP, equity realize'in EN KÖTÜ olduğu yerdir (cezasız barrel yersin, her sokak overfold'a mahkumsun). Zayıf açış aralığı bunu kurtarmaz. Doğrusu: **shove / click-raise / fold** — lideri preflop baskıyla cezalandır, postflop'u ona verme. Asıl baskı hedefin cover ETMEYEN stack'ler (B22.4).
2. **Küçük-boylu ICM 3-bet'e karşı (cover ediliyorken):** küçük boy sana "ucuz call" satmaz, rakibe ucuz fold-equity satın alır. Küçük ICM 3-bet tam da cover edilenin postflop under-realize'inden kâr eder → doğru exploit geniş call değil, **jam-or-fold** (yalnız premium value ile jam — QQ+ civarı *(kalibre et)*; marjinaller fold).

> **"FLAT YOK" boy-bağımsız, cover-İLİŞKİSİNE bağlı bir kuraldır: cover ediliyorken flat yok — boy küçülse de lider çöp açsa da. Ayartıyı gördüğünde kurala DAHA sıkı yapış.**

### 22.9 Drill (3 soru)

1. **T1.** Bubble yeni patladı, orta stack'sin; döngü içinde chipEV'ye en yakın faz hangisi ve ne yaparsın?
2. **T2.** Bubble, senden kısa (seni cover ETMEYEN) bir stack sana jam etti; ayrıca seni cover eden lider de masada. Kısa jam'e call eşiğin ne, lidere karşı ne?
3. **T3.** Kısa stack'sin, bubble. Jam aralığın mı call aralığın mı daralır; "en iyi ellerle gir" hangisi için doğru?

*Kök hata bağı: B20 primin TANIMINI ve yönünü verdi; B22 o primin zamanla (faz) ve kişiye (stack haritası) nasıl değiştiğini verir. Faz tavanı belirler, cover haritası kime uygulanacağını. Over-ladder ve under-ladder, cover-okuma leak'inin (B12.4) zaman/stack eksenindeki iki yüzüdür; short-panik ve short-nit ise B17 jam/call ayrımının iki yüzü.*


---

### 22.10 Gelecek-oyun: blind-geometrisi ICM'i iki yönde düzeltir

ICM tek-el statik bir modeldir — kimin bir sonraki elde blind'e gireceğini görmez. İki düzeltme masada para eder:

1. **Kendi blind'in yaklaşıyorsa GENİŞLE:** kısa stack, blinds'e girmeden hemen önceki elde ICM sim'inin verdiğinden belirgin daha geniş jam'ler — yaklaşan zorunlu blind-erimesi "bekle" opsiyonunu öldürür. Tam-BB ante (bugün canlıda da online'da da standart) erimeyi tek ele yoğunlaştırıp bu genişlemeyi sertleştirir (UTG'den bile).
2. **Kısa RAKİP'in blind'i yaklaşıyorsa SIKIŞ:** kısa rakip sıradaki el BB'ye giriyorsa, senin ona karşı jam-blöf ve call aralığın ICM'den DE sıkı olur — onun zorunlu erimesini bekle, fold'la ladder'ı bedava tırman.

**Overcall hijyeni (hata-asimetrisi):** kısa jam + arkanda oyuncu varken eş-EV görünen spotta — sonraki all-in'e cevabını KESİN biliyorsan call (sıfır kayıp + bilgi opsiyonu); bilmiyorsan kendin jam'le. Yanlış jam küçük hata, yanlış overcall dev torch. Minik stack farkları bu düğümü çevirir → robust hattı seç.

> **ICM tek-el resmidir; masa bir film. Kendi blind'in yaklaşırken genişle, kısanın blind'i yaklaşırken sıkış. Ve belirsiz overcall'da: eminsen call, değilsen jam — yanlış overcall en pahalı FT hatasıdır.**

*(kalibre et: genişleme/sıkışma eşikleri stack + blind mesafesi + payout'a bağlı; gelecek-eli modelleyebilen bir ICM simülatörüyle doğrula.)*

### 22.11 Çarpışma etkisi: fold'un gizli EV'si açılışın EV'sini geçer

Bağlam: FT/para yakını, ICM açık. "ChipEV'de kârlı açılış → açarım" arkanda kalan oyuncuların BİRBİRİYLE çarpışma olasılığını fiyatlamaz. Pota girersen çarpışma ya olmaz (geç pozisyondan blind'lar çoğunlukla sana fold eder) ya da seni içine alır; fold edersen arkadakiler birbirine kalır — en net hâli BvB: SB kısa/agresifse BB'ye geniş jam'ler, BB geniş öder, biri bust olur — basamak sana yazılır. Fold'un EV'si ≈ P(arkada çarpışma) × P(bust) × sıradaki basamağın değeri (BTN'den: P(SB jam) × P(BB call) × P(bust)); çarpım büyükse marjinal açılışın küçük EV'si altında kalır. Yalnız marjinal ellerde karar değişir. Etki her açık pozisyonda var ve büyüklüğü arkanda kalan oyuncu SAYISI ve profiliyle ölçeklenir: en yüksek erken pozisyondan (arkada çarpışabilecek çok oyuncu, çok yol), BTN'den tek yol kalır — doğrudan SB-BB savaşı — ama SB kısa/agresifken o tek yol kalındır; SB'den sıfır (BB'ye karşı tek başınasın, çarpışacak üçüncü yok). Üç soru: fold'lasam arkadakiler (geç pozisyonda: SB) itiyor mu? Ödeyen (BB) var mı? Basamak stack'ime göre büyük mü? Üçü evetse sınır elleri AÇMA *(eşikler: kalibre et)*.

**Harita kısa stack değil, savunma genişliğidir.** Geniş savunup flop'ta çift/draw'la stack-off eden BB herkesle çarpışır → önünde marjinal açılışı kes; fold-fold-fold BB'nin önünde sınır elle bile aç (23.1: station = yüksek, nit = düşük çarpışma). Chip liderine marjinal 3-bet de aynı haritaya tabi — arkada aynı fırsatı gören 4-5 oyuncu varsa çarpışmayı onlara bırak.

**Kaçış kapısı:** çarpışma masasında 3-bet'çinin aralığı da sıkışır → 3-bet'e devam eşiğini bir kademe yukarı *(sınırda)*. Orta-kısa stack'te *(≈15–25bb, kalibre et)*, raise stack'in küçük bir dilimi kalacak kadar küçükken, arkanda iki agresif/kısa oyuncu varken AK tipi güçlü-ama-nut-olmayan elle open-jam yerine fold opsiyonu satın alan RAISE: biri itip öbürü yeniden ittiğinde katlanıp basamağı alırsın (12.4, 22.10). Jam/fold bandında (≈≤12bb) bu kapı kapalı — AK'yı it ya da at.

## Bölüm 23 — Saha Okuma: Rakip Tipleri ve Exploit

*★ v6. Kitap şimdiye kadar dengeli/GTO-yakını default verdi (B7-B21). Ama canlı sahada asıl para dengeden değil, rakibin hatasından gelir. Bu bölüm kitaba dağılmış exploit notlarını tek yere toplar: rakip tipini oku, onun ICM-hissini oku, default'tan sapma yönünü seç.*

### 23.0 Tez

> **GTO seni yenilmez yapar; exploit seni kârlı yapar. Sahada üç soru: (1) Bu rakip hangi tip? (2) ICM'i hissediyor mu? (3) Hangi yöne hata yapıyor — çok mu gevşek, çok mu sıkı, çok mu pasif? Sapma bu üç okumadan çıkar. Okuma yoksa default'a (dengeli) dön.**

### 23.1 Beş rakip tipi

- **Nit (aşırı sıkı):** açarsa/raise ederse nuts'a yakın. Exploit: bet/raise'ine saygı (nadiren blöf), bluff-catch'i bırak, ama pot'larını sık çal (fold eder).
- **Station (çağıran):** her şeyle call, fold etmez. Exploit: ASLA blöf yapma; güçlü value'yu BÜYÜK boyut/overbet ile boz (boyuta duyarsız, her şeyle öder); yalnız en ince value elinde boyutu küçült.
- **LAG (gevşek-agresif):** çok açar, çok barrel'lar. Exploit: daha çok call/bluff-catch (aralığı zayıf), value'yu şişir, blöfüne fold etme.
- **TAG / reg:** dengeli, düşünen. Exploit az; dengeli oyna, ICM'i o hisseder, ona baskı sat.
- **Whale / rec (eğlence):** öngörülemez, büyük ellerle büyük öder. Exploit: value-ağırlıklı, ince blöf az, elini göster ödesin.

### 23.2 Taksonomi tablosu

| Tip | Hatası | Exploit yön |
|---|---|---|
| **Nit** | Fazla fold | Çal + agresyonuna saygı |
| **Station** | Fazla call | Blöf yok + value'yu büyüt/overbet |
| **LAG** | Fazla agresyon | Bluff-catch + value şişir |
| **TAG/reg** | Az hata | Dengeli + baskı sat |
| **Whale** | Kontrolsüz | Value-ağır, göster ödesin |

### 23.3 Villain ICM'i hissediyor mu?

ICM baskısı SATMAK yalnız rakip ICM'i HİSSEDİYORSA işe yarar. Bir reg bubble'da doğru daralır — ona baskı satabilirsin. Ama bir rec/whale ICM'i bilmez; bubble'da bile fold etmez. Ona karşı: baskı satma (fold etmez) → value al. ICM-körü rakibe steal/3-bet blöf boşa gider; onun yerine geniş value.

Ama dikkat — **kendi risk primin (B17/B20/B21) rakip ICM-körü olsa da bakidir.** Sapma yönü "baskı satma → value BET'i genişlet"tir; cover ediliyorken call-off/stack-off'u gevşetmek DEĞİL. Whale bile olsa, cover edilirken bubble'da hafif stack-off yok. Reg'e karşı tersi: ICM'i hisseder → steal/baskı primi çalışır.

### 23.4 Havuz-okuması sapması (showdown-first)

Havuzun çoğunluğu showdown'a fazla gider (merak + fold-etmeme). Bu da bir okumadır — havuz seviyesinde; reg payı arttıkça dengeye döner (bkz 23.6). Sapma: blöf frekansını düşür (çağırırlar); ince value'yu artır (kötü ellerle öderler). Low/mid stakes rec-havuzunun tek en kârlı sapması *(kalibre et — havuza göre)*.

### 23.5 Station playbook

- **Blöf yok, sıfır** (blöf station'a para vermektir).
- **İnce value ez:** normalde check'leyeceğin ellerle bet al.
- **Boyut:** güçlü value BÜYÜK/overbet (station boyuta duyarsız, call'ı sıkmaz); yalnız en ince value'da küçült.
- **Pasif river ayrımı:** station'ın river RAISE'i ≈ nuts → ince value'nu fold et. Ama river LEAD boyuta bağlı: küçük lead'e iyi top pair çoğu zaman call (station merged/zayıf donk'lar); büyük/tuhaf lead'e daral.

### 23.6 Reg / TAG'e karşı

Denge burada kalkan: reg dengesizliğini cezalandırır. Dengeli aralıkla oyna, ICM baskısını ONA sat (o hisseder), ince exploitleri sakla. Reg payı arttıkça (yüksek stake) exploit azalır, GTO-yakını artar.

### 23.7 Kalibrasyon

*(kalibre et: her tipin tam sapma miktarı (blöf %, value eşiği, value boyutu) havuza ve stake'e bağlıdır. App'te tip etiketi + not alanı bu sapmayı taşır; masada üç kademeyle (çok gevşek/dengeli/çok sıkı) etiketle. Solver default'u verir, exploit sapmayı sen eklersin.)*

### 23.8 Cheat kartı

| Okuma | Default'tan sapma |
|---|---|
| **Station** | Blöfü kes, value'yu büyüt/overbet |
| **Nit** | Çal, hero-call'u bırak |
| **LAG** | Bluff-catch aç, value şişir |
| **ICM-körü rec** | Baskı satma, value al (ama cover'lıyken call-off eşiğin yüksek kalır) |
| **Reg** | Dengeye dön, baskı sat |

### 23.8-EK ICM altında spewy oyuncuya karşı VPIP DARALIR

B23 "rec gördüm → value al" doğrudur ama VPIP yönünü açık söylemez; FT-ICM'de refleks ters çalışabilir: para saçan/spewy oyuncuya karşı exploit daha SIK iyi el tutmaktır —

- VPIP'i hafif DARALT (gevşeyip onunla varyansa girme).
- İyi elle pot kur (o zaten çipini sana verecek).
- Blöf tarafını lineer/oynanabilir kur, polarize değil (blöfün fold bulmaz zaten).

> **Spewy rakip "daha çok el oyna" demek değildir; "daha çok iyi el, onun spew'ini value ile karşıla" demektir. ICM'de onunla gevşeyip flip'e girmek onun leak'ini senin leak'ine çevirir.**

### 23.9 Drill (3 soru)

1. **E1.** Station her flop/turn call etti, river'da KÜÇÜK lead aldı, elinde iyi top pair. Tip ne, ne yaparsın — call mı fold mu? Ya raise etseydi?
2. **E2.** Bubble, rakip belli bir rec/whale, ICM umursamıyor. Steal blöfü mü value mı? Cover ediliyorsan call-off'un değişir mi?
3. **E3.** Nit UTG açtı, sende orta el. Exploit yön ne — call mı fold mu, ve neden pot'larını çalarsın?

*Kök hata bağı: default (denge) seni kayıptan korur; sapma (exploit) kârı üretir ama YANLIŞ okumada geri teper. Guard: tip + ICM-hissi + hata yönü — üçü netse sap, değilse dengede kal. Station'a blöf (ve ona küçük value), rec'e baskı satmak: saha-okuma leak'inin klasik yüzleri.*


---

### 23.10 Node-taksonomisi: üç hat, iki zıt havuz sapması, bir saha-şartı

Postflop agresyon-hatları havuza göre ZIT sapma taşır; tek bir "pasif hat = overfold" kuralı üçünü birden yanlış genelletir:

| Hat | Havuz sapması | Doğru tepki |
|---|---|---|
| **Kesilen agresyon** (bet-sonra-check) | Under-bluff (reg) → over-fold | Blöfle / catch'i bırak |
| **Gecikmiş agresyon** (check-back → turn+river barrel) | OVER-bluff (havuz "check-back=capped" dersini öğrendi, o aralığa saldırır) | Catcher'a eğil |
| **Rec-yoğun saha, herhangi pasif hat** | Rec river'da YAPIŞKAN; fold'unu TURN'de verir | Blöf hacmini river'dan TURN'e taşı |

> **"Check-back = capped" dersi öğrenildiği an, check-back'e saldırı OVER-bluff'a döner. Kesilen agresyonu (fold ettir) gecikmiş agresyonla (catch et) karıştırma — ve rec-yoğun Main'de her ikisinin de fold penceresi TURN'dedir, river değil.**

### 23.11 Pasif havuza karşı value üçlüsü

Pasif/call-ağırlıklı (foldlamayan) havuz, B18'in bazı varsayılanlarını tersine çevirir:

1. **Küçük c-bet'in gizli EV'si rakibin check-raise düğümünde yatar** — dengede küçük bete devamların bir kısmı raise'dir *(kalibre et; ~%15-20)*; küçük bet pot-büyütmeyi rakibin raise'ine havale eder. Havuz az + fazla-güçlü check-raise eder → değerli elle (TPTK+) küçük bet yerine büyük boyu KENDİN bas.
2. **Gecikmiş value çöker → turn'de al** — turn check-back'in EV'si rakibin river'da senin yerine para koymasına dayanır; havuz turn'de "equity'yle call"u sever, river'ı check-fold → iki-per tipi elle turn bet'ini ŞİMDİ al, parayı öne yükle.
3. **Station/pasif-havuz çift ayarı (B23.5)** — pasif/call-ağırlıklı havuza karşı: ince value'yu GENİŞLET (kötü elle öder) VE blöf frekansını DARALT (foldlamaz). Tek okuma, iki ayar — birini unutmak leak.

> **Pasif havuz "küçük bet hep güvenli" ve "turn'ü check-back'le" ezberlerini bozar: değerini kendin, büyük ve erken al — çünkü rakip senin yerine pot büyütmez.**

### 23.12 Üç saha-şartlı carve-out (B18.2 · B3.2 · BvB)

- **B18.2 düşük-board ICM'de tersine döner:** para derinleştikçe BB düşük kartları aralığından siler → 7-5-3 tipi board artık açanındır, küçük c-bet açılır. "Düşük-bağlantılı = BB board → check" ancak chipEV'de; ICM derinliğinde açanın board'u.
- **B3.2 "solunda büyük → daralt" soft sahada over-nit üretir:** düşük/orta stake'te cover-eden-sol teorinin öngördüğü baskıyı SATMAZ; kanıt gelmeden önlem-nitliği chip yakar. Varsayılan normal VPIP; daraltma gözlenen agresyona TEPKİ, ön-önlem değil.
- **BvB "asla fold etme" yapışkanlığı pozisyon-çifti şartlıdır:** BvB'de yerleşik "pair/backdoor asla fold etme" doktrini GENİŞ-aralık düğümüne özgüdür; sıkı EP aralığına karşı orta boardda zayıf üçüncü per küçük bete disiplinli fold'dur. İki kural yan yana yazılmazsa BvB yapışkanlığı EP'ye karşı over-call üretir.

### 23.13 Havuzun 3-bet açığı: geç açılışı GENİŞLET, 4-bet-jam blöfünü KAPAT

Blind'lar geç açılışa dengeden belirgin az 3-bet eder *(oran: kalibre et; sığ bantta jam'ler farkı kapatır, derinde açılır)* — eksik olan hep mix'li kombolardır, "düşük frekans = sıfır" kısayolu. Solver'ın 3-bet frekansını rakibin de oynadığını varsayan iki hata: geç pozisyondan solver aralığını açmak ve 3-bet yiyince solver'ın 4-bet-jam blöflerini basmak.

Üç sonuç: (1) BTN/CO açılışını solver'ın üstüne genişlet — blind'lar cezalandırmıyor, üstüne flop/turn'de overfold ediyor, sınır eller çoğunlukla postflop'ta EV toplar (havuz sapması yeterince büyükse) (B17.11 "BTN %40 open" ve B4.1 canlı düzeltmesinin mekanizması). (2) 3-bet yediğinde aralık nut-ağırlıklıdır → 4-bet-jam blöfünün (A5s tipi) fold equity'si çöker, blokerli suited Ax jam'i dengeden ağır kaybeder *(kalibre et)*; zayıf suited Kx/Qx ile 3-bet'e call da kötü. **Geniş aç, 3-bet'e DAR devam** — B4.5'in "4-bet blöf çok seyrek" satırı buradan. (3) Sen 3-bet ederken aynı kısayolu YAPMA — mix'li komboları 27.12'ye göre sabitle, sıfırlama.

Sapma notu: havuz ortalamasıdır; agresif 3-bettor okuması varsa baseline'a dön. Stake yükseldikçe fark daralır. 22.11'in çarpışma filtresi ICM açıkken bu genişlemenin üstüne biner.

### 23.14 BB'nin iki bant hatası: kısa bantta fazla JAM, orta bantta fazla PASİF

Kök hata: BB'den geç açılışa "iyi el = jam" ezberi. İlke tek: **oynanabilir el CALL eder, equity'yi fold ettirmek isteyen el JAM'ler.** Kısa bantta *(kabaca 15–25bb; bant sınırı: kalibre et)* jam'lenince yalnız domine ettiğini katlatıp yalnız seni yenenden ödeme alan yüksek-kart eller — güçlü suited broadway: ATs/AJs, KQs/KJs tipi (AQs/AKs hariç — onlar daha kötüden ödeme aldığı için çoğunlukla value jam/3-bet) — çoğunlukla CALL'ı tercih eder: domine ettiği elleri potta tutar, flop'a küçük bete devam eder, yüksek-kart runout'ta rakibin blöfünü yakalar → equity'yi jam'den fazla realize eder. Zayıf suited Ax ve küçük çiftler ise çoğunlukla JAM: bloker + equity-reddi, ödenince canlı *(eşik: kalibre et)*. Bandın alt ucunda (≤~17bb, OOP düşük SPR) ATs/AJs/KQs tipi eller de çoğunlukla jam'e kayar; call tercihi ~20bb'den itibaren belirginleşir *(kalibre et)*. Orta bantta *(kabaca 25–30bb)* jam, birkaç bb'lik pot için tüm stack'i riske atmaktır — doğru agresyon küçük, all-in OLMAYAN 3-bet; orta suited connector burada agresyon değil CALL elidir (equity'yi en iyi realize eden sınıf), 3-bet malzemesi suited düşük Kx / offsuit broadway tipi blokerli eller *(kalibre et)*.

**Havuz okuması (hipotez — showdown'la doğrula, kalibre et):** havuz BB'si kısa bantta call'ı tercih etmesi gereken yüksek-kart elleri jam'ler (fazla jam), orta bantta non-all-in 3-bet'i bulamaz (fazla pasif). Sen BB'deyken kısa bantta call'ı, orta bantta non-all-in 3-bet aralığını genişlet. Rakip BB'nin jam'ine karşı ezber yok: gördüğün showdown'lardan kalibre et.

**Kapsam (B17.11):** "sen cover'ken 15–25bb BB'sine %60'a kadar open" bu okumayla gerilimli — havuz BB'si kısa bantta call yerine jam'i fazla buluyorsa geniş açılışın jam'lenme sıklığı beklenenden yüksek olur; BB'nin fold sıklığı (senin fold equity'n) değişmez, değişen şey açanın pozisyonla flop oynayıp equity realize etme şansının düşmesi ve raise-fold maliyetinin artmasıdır → sınır elleri raise-fold'a göre fiyatla: re-jam'e katlanacağın elleri daralt, re-jam'i ödeyebileceğin ellerle genişle; genişliği orta (pasif) banda kaydırmak daha güvenli, kısa bandı showdown'la kalibre et.

## Bölüm 24 — Edge Premium: Ne Zaman Gamble ETME (ve Ne Zaman Mecbursun)

*★ v6. B20/B22 risk primini verdi — ICM'in primi. Bu bölüm ikinci bir prim ekler: edge premium (beceri primi). Edge'in varsa marjinal variance'tan kaçın; edge'in yoksa ICM-ayarlı +EV gamble'ı al. Risk premium kaybı, edge premium sonraki kazancı tartar.*

### 24.0 Tez

> **Marjinal bir gamble'da (flip, ince +EV) iki prim çalışır. Risk premium: kaybedersem ICM'de ne kaybederim. Edge premium: bu chip'leri riske atmasam edge'imle sonra daha fazlasını kazanır mıyım? Edge'in büyükse (soft saha, derin, yavaş yapı) marjinal flip'i PAS geç. Edge'in yoksa (tough saha, sığ, hızlı yapı) ICM-ayarlı +EV gamble'ı AL — beklemek işe yaramaz. -EV asla; edge primi yalnız +EV/marjinal spotları filtreler.**

### 24.1 Edge premium nedir

Soft bir sahada beceri edge'in büyükse, her elde otomatik olarak para kazanıyorsun demektir. Marjinal bir coin-flip bu edge'i variance'a çevirir: %50 kaybedip masayı terk edersin, oysa oynamaya devam etsen edge'in daha güvenli EV üretecekti. Bu yüzden edge'li oyuncu marjinal flip'i pas geçer — sonra daha iyi spot gelir. Tersi de doğru: edge'in yoksa (underdog'sun, ör. dünyanın en iyileriyle) beklemenin değeri yok; +EV (risk primi düşüldükten sonra, yani ICM-ayarlı $EV) her spotu, flip dahil, al — zaman senin aleyhine.

### 24.2 4-soru filtresi

Marjinal bir gamble'dan önce dört soru:

1. **Stack derinliği:** Derin misin? Derin = outplay edecek alan = edge realize olur = PAS. Sığ = alan yok = AL.
2. **Yapı hızı:** Yapı yavaş mı? Yavaş = edge zamana yayılır = PAS. Hızlı/turbo = edge erir = AL.
3. **Senin edge'in:** Saha soft mu? Soft = büyük edge = marjinali PAS. Tough (underdog) = edge yok = +EV AL.
4. **Cover haritası (ICM):** Cover mı ediliyorsun (B20/B22)? Evet = risk primi de PAS der (istisna: kimseyi cover etmeyen EN kısa stack'te prim ~0). Cover ediyorsan = agresif.

### 24.3 Filtre tablosu

| Soru | Gamble PAS | Gamble AL |
|---|---|---|
| **Derinlik** | Derin | Sığ |
| **Yapı** | Yavaş | Hızlı/turbo |
| **Edge** | Soft saha | Tough (underdog) |
| **ICM** | Cover ediliyorsun | Cover ediyorsun |

*(ICM istisnası: kimseyi cover etmeyen en kısa stack'te prim ~0 → o satırda "al".)*

### 24.4 İki primin etkileşimi

Edge premium ve risk premium çoğu zaman aynı yöne iter: soft saha + cover ediliyorken marjinal flip iki kez PAS. Gerçek çatışma dar bir spotta doğar: **orta-kısa stack'sin — büyük stack'ler seni cover ediyor (risk primi "pas" der) ama sen de altındaki kısaları cover ediyorsun, edge'in yok, yapı hızlı (edge primi "bekleme, chip lazım" der).** Çözüm: en iyi fold-equity'li spotu seç (jam, call değil; B17), pasif flip'ten kaçın, gerekli +EV riski al. Not: kimseyi cover ETMEYEN en kısa stack'te risk primi ~0'dır (B20) — orada çatışma yok, iki prim de "al" der, tek ders B17 spot-seçimidir. **-EV'yi survival gerekçesiyle bile alma.**

### 24.5 Senin sidebar'ın (Barcelona)

Somut: €5.3K Main'de edge'in var (saha daha geniş/soft) → marjinal flip'leri **PAS geç, sabırlı oyna** (edge'in sonra daha güvenli EV üretecek). €100K SHR'de edge'in yok/az (dünyanın en iyileri) → beklemenin primi düşük, +EV marjinal spotları (ICM düşülünce hâlâ +$EV ise) almaktan çekinme. Aynı el, iki turnuvada zıt karar: fark senin edge'in.

### 24.6 Kalibrasyon

*(kalibre et: edge'in ne kadar büyük — saha, stake, senin geçmişin — sayısal değil, üç kademe (büyük/orta/yok) tahmin et. Derinlik ve yapı hızı eşikleri turnuvaya bağlı. ICM katmanı B20/B22 primiyle birleşir.)*

### 24.7 Cheat kartı

| Durum | Karar |
|---|---|
| **Soft + derin + cover ediliyorsun** | Marjinal flip PAS (iki prim) |
| **Tough + sığ + hızlı** | +EV AL (cover'a bak, $EV) |
| **Edge yok + survival** | En iyi fold-equity jam'ı al |
| **Edge var ama cover ediyorsun** | Seçici agresyon |

### 24.8 Drill (3 soru)

1. **G1.** €5K Main, derin stack, erken; marjinal bir flip. AL mı PAS mı, hangi iki soru belirler?
2. **G2.** €100K SHR, dünyanın en iyileri, sığ-orta; aynı marjinal +EV flip. Karar değişir mi, neden?
3. **G3.** Orta-kısa stack: seni büyükler cover ediyor ama sen de altındakileri cover ediyorsun; edge yok, yapı hızlı. Pasif call-flip mi, fold-equity'li jam mı?

*Kök hata bağı: risk premium (B20) "kaybı" tartar, edge premium "gelecekteki kazancı". İkisi de çoğu zaman "marjinali pas geç" der ama edge yoksa ve survival gerekiyorsa beklemenin değeri düşer. Guard: edge'im var mı + cover ediliyor muyum? İkisi de evetse pas; edge yok + mecbursam en iyi fold-equity spotunu al. -EV asla.*


---

## Bölüm 25 — Kafamdaki Hikaye: Kanıt mı Anlatı mı

*★ v6. B16 tilt'i ve otopsiyi verdi (gün-sonu vaka defteri). Bu bölüm onların ÖNÜNE bir el-içi filtre koyar: büyük bir bluff-catch/fold'dan önce "bu okuma kanıta mı hikayeye mi dayanıyor". B23 rakip okumasını (kanıt) B16 otopsisine (sonuç-bağımsız puanlama) bağlayan köprü.*

### 25.0 Tez

> **Bir hero-call ya da büyük fold'dan önce sor: bu okuma KANITA mı (aksiyon dizisi, boyut, timing, pozisyon, tip — B23) yoksa kafamdaki HİKAYEye mi (duygu, momentum, ego) dayanıyor? Hikayeyse default'a dön (B11.2). Bu, B16 tilt-kartının bir el-içi versiyonu: tilt duyguyu yaralar, hikaye kararı çarpıtır.**

### 25.1 "Kafamdaki hikaye" testi

Büyük bir bluff-catch ya da ince fold'dan önce bir saniye dur. Gerekçen iki türden hangisi:

- **Kanıt:** villain'in aksiyon dizisi (bet-bet-bet mi, check-call mi), boyutları (polarize/bloklu), timing, pozisyon, tipi (B23). Somut, masada gördüğün.
- **Hikaye:** "bana blöf yapıyor gibi hissediyorum", "az önce beni soydu, şimdi yakalarım", "bu el hep kaybeder". Duygu ve anlatı.

Kanıta dayanıyorsa güven — ama kanıt cover'ı yenmez: cover ediliyorken hero-call yine fold (B21.2). Hikayeye dayanıyorsa default'a dön: B11.2 (tek per = bluff-catcher, uncapped'e saygı). Hikaye seni hem gereksiz hero-call'a hem gereksiz fold'a sürükler; ikisi de aynı kök hatanın (duygu > aralık) yüzleri.

### 25.2 Hikaye ↔ tilt bağı

Hikaye çoğu zaman tilt'in ürünüdür: "az önce soydu, şimdi yakalarım" bir bad-beat/ego tetikleyicisinden gelir (B16.2). Sıralama B16'nın sıralamasıdır: önce belirtiyi FARK et (B16.2 — hızlanma, telefona sarılma, kovalama → fiziksel hamle: derin nefes / VPIP kilidi / su), sonra karar. Tilt'liyken "kanıt mı hikaye mi" testini bile güvenilir yapamazsın; önce yarayı etiketle (B16.2 kartı; yara kavramı B0 c.15), sonra kanıta bak.

### 25.3 Sonuç-bağımsız puanlama = B16.3 otopsisi, hikaye merceğiyle

El bittiğinde puanlama B16.3'te: **gün sonunda** (masada sadece not al), iki soru — karar anında kitaptaki kural neydi + uydum mu. Bu bölüm o otopsiye tek bir mercek ekler: **kararım kanıta mı hikayeye mi dayanıyordu?**

- Doğru kural + kötü sonuç = İYİ karar — **ama yalnız kurala/range'e gerçekten uyduysan (B16.3); "doğruydu, varyanstı" kendini aklama kapısı değil.**
- Hikayeye dayanıp kazanmak = LEAK (sonuç ödüllendirdi, süreç hatalıydı; tekrar edersen yakarsın).

B25 yeni bir otopsi katmanı açmaz; B16.3 otopsisine "kanıt mı hikaye mi" sorusunu ekler.

### 25.4 En pahalı kararlara dikkat

Bir hikaye-hatası her yerde eşit pahalı değil. FT/ICM'de tek karar çok buy-in değerinde: şişmiş potta call-off en pahalı aksiyon (B21.1), cover edildiğin bluff-catch (B21.2 → fold). Mental enerjini oraya sakla: bubble/FT büyük potları, cover edildiğin call-off'lar. Ucuz kararlarda (küçük pot, para uzak) mükemmeli kovalama — rutinle oyna, enerjiyi pahalı spota biriktir.

### 25.5 Kalibrasyon

*(kalibre et: "kanıt mı hikaye mi" eşiği kişisel — kendi geçmiş hero-call'larını B16.3 otopsisinde gözden geçir, hangisi kanıttı hangisi hikaye. App karne'si sonuç-bağımsız puanlar: doğru kavramı seçtin mi, sonucu değil.)*

### 25.6 Cheat kartı

| Durum | Doğru refleks |
|---|---|
| **Hero-call öncesi** | Kanıt mı hikaye mi? Hikayeyse default'a dön (B11.2) |
| **Büyük fold öncesi** | Aynı test — hikayeyle fold da leak |
| **Tilt belirtisi** | Önce fiziksel hamle (B16.2), sonra karar |
| **Gün sonu otopsi** | B16.3 iki soru + "kanıt mıydı hikaye mi" |
| **Pahalı spot (FT/cover)** | Enerjini sakla; ucuz kararda mükemmeli kovalama |

### 25.7 Drill (3 soru)

1. **M1.** River'da büyük bir bet; "bu adam blöfçü" hissediyorsun ama aksiyon dizisi (bet-bet-bet, polarize) value'ye uyuyor. Hangi gerekçeye güvenirsin, call mı fold mu?
2. **M2.** Bir bad beat yedin, eller hızlanıyor, telefona sarıldın. Sıradaki büyük hero-call kararında ÖNCE ne yaparsın (B16.2), sonra hangi test?
3. **M3.** Gün sonu otopsi: cover EDİLİYORken bir hero-call yaptın, blöfü yakaladın, pot senin. B21.2 + B16.3 + hikaye merceğiyle bu kararı nasıl puanlarsın?

*Kök hata bağı: hikaye-bazlı karar, aralık disiplinini (B11.2/B12) duyguyla ezer — tilt'in (B16.2) karar-katmanındaki yüzü. Guard: kanıt mı hikaye mi + kurala uydum mu (B16.3). B25, B16'nın önüne el-içi bir filtre, ardına bir otopsi merceği koyar; yeni bir kural değil, mevcut disiplinin tetikleyicisi.*

---

## Bölüm 26 — C-bet'e Karşı: Caller Disiplini ve Eşik Çalışması

*B18 c-bet ATAN tarafı, B11.2 river bluff-catch'i verdi; ama flop-turn'de c-bet'e KARŞI (call eden taraf) hangi eşikle devam edeceğin, ne zaman check-raise'e geçeceğin dağınıktı. Bu bölüm o boşluğu kapatır. Çalışma iskeleti solver-pipeline'a doğrudan girer.*

### 26.0 Çekirdek: savunma frekans değil, EŞİK çalışılır

C-bet'e karşı doğru soru "aralığımın yüzde kaçını savunayım" değil, "hangi el sınıfından AŞAĞISINI bırakayım"dır. Sim'den çıkardığın şey frekans değil üç eşiktir:

1. **Devam eşiği** — minimum call eli (bu sınıfın altı fold).
2. **Value-raise eşiği** — minimum check-raise-for-value eli.
3. **Blöf-raise adayları** — ve birkaç board sonra bu adım TAMAMEN atlanır: blöf-raise nitelikleri (board sahipliği + bloker) tekrar eder, ezberlersin.

> **Devam ve value-raise eşiğini oku; blöf-raise'i ilk birkaç board'dan sonra ezberden uygula. Çalışma zamanı eşik çizgisine harcanır, kombo-seçimine değil.**

### 26.0-EK Eşik neden sağlam — ve drill'i buna göre puanla

26.0'ın "frekans değil eşik" emrinin gerekçesi şudur: sim'de aralığı ve stack'i oynat — kombolar raise'le call arasında savrulur, devam çizgisi az kıpırdar. Karşılaştığın boy büyüdükçe eşik pot-odds gereği daralır *(kalibre et)*, ama raise-mi-call-mı ondan çok daha gürültülüdür. Öğrenilecek sağlam nesne ÇİZGİDİR, aksiyon-etiketi değil. B9 drill'ini de böyle puanla: doğru tarafta devam = doğru; aksiyon ıskasına üzülmek, hata bütçeni gürültüye harcamaktır.

### 26.1 Eşik, KENDİ aralık kompozisyonunla kalibre olur

"Her per call, her draw devam" ezberi bağlantılı board'da otomatik over-defense üretir — ve sebep yalnız rakibin güçlenmesi değil, SENİN devam edebilir kombolarının çoğalmasıdır. Bağlantı arttıkça eşik yükselir çünkü kendi draw sayın artar; eşik kalibrasyonunun yarısı rakip, yarısı kendi kompozisyonun.

### 26.2 Check-raise adayı: net-kararlı runout ara

Check-raise büyük pot kurar; büyük pot net-kararlı runout ister:

- Domine EDEN draw'lar (üstten çift + FD tipleri) call'da kalır — pahalı pot kurmadan realize eder.
- Per yakalayınca no-man's land'e düşecek marjinal adaylar raise'lenmez.
- Dezavantaj board'unda hiçbir el value-raise'e hevesli değilse raise düğümünü komple kapat (rakip fark edip uyum yapana dek) — B18-tarafındaki "boyu ağaçtan at"ın savunma yüzü.

### 26.2-EK Raise düğümünün üç kuralı: call kıtlığı, raise-sonrası, bloker kilidi

**Call kıtlığı yasası.** Call edecek el bulamadığın board'da çıktıyı yanlış okuma: hem hedefin ÜSTÜNDE fold edersin (savunman MDF hedefinin altında kalır) hem geniş raise'lersin — ikisi aynı yasanın iki yüzüdür. Doğal call kıtsa savunma frekansı raise'den toplanır: value tanımını orta per sınıflarına kadar indir, blöfü o genişliğe oranla ekle *(oranı kalibre et)*. Tersi de yasadır: büyük boya karşı value-raise aralığın daraldıkça blöf-raise sayın onunla birlikte düşer. Value bütçesine bakmadan blöf-raise eklemek, over-bluff'un savunma-tarafı kök hatasıdır.

**Raise'i seçtiysen raise-SONRASINI da çalış.** Raise'in call yediği düğümü ileri oynat: turn value eşiğini oku, sonra check kolonuna bak — en güçlü sınıflarının önemli bir payının orada durduğunu gör *(payı kalibre et)*. "Geniş raise elimi açık eder" korkusu bu kolonda ölür: check aralığın korunmuşsa küçük betlere per sınıflarınla devam edersin, kimse seni cezalandıramaz. Korunmamışsa raise aralığını değil check aralığını onar.

**Bloker kilit-testi.** Hiçbir bloker kuralı test edilmeden ezbere alınmaz; soru tek: rakip value çekirdeğini senin kilit-kartından arındırabilir mi? Çekirdeği yapısal olarak o karttan geçiyorsa kural kilitlidir — ezberle ve uygula. Arındırabiliyorsa raf ömrü kısadır: blokere değil sınıf-yüzdesine yaslan (26.4), read'i onun üstüne koy.

### 26.2-EK-2 Bloker kilit-testine 3-bet-pot örneği: yan kart
40bb efektifte (3-bet potunda SPR ≲2, sığ) J-T-x'te 3-bettor'ın jam'ine karşı caller'ın ikinci peri (QT/KT) yan kartıyla karar verir — ama iki yönde: Q yan kart QQ'yu (value) ve AQ/KQ'yu (semi-blöf) keser; K yan kart KK'yı (value) ve KQ/AK'yı (semi-blöf) keser; iki etki çekişir. Bloker kilit-testi burada call'u "rahat" değil "sınırda" yapar; hangi yönün ağır bastığını kombo sayarak belirle, 3-bettor'ın jam aralığı değişince yeniden say *(kalibre et)*. J8 bu gruba girmez: top pair'dir, 8'in bloker etkisi ihmal edilebilir düzeydedir (yalnız ender 98 tipi 3-bet-blöf kombolarına dokunur), karar yan karttan değil el gücünden gelir. Kilit-testini B26.2-EK'in sorusuyla, dokuyu B32.3 ile kontrol et (bkz. B32.3).

### 26.3 Notları board'a göre değil YÜZLEŞİLEN BOYA göre tut

Farklı c-bet boylarına karşı savunmalar birbiriyle kıyaslanamaz; desen ancak aynı boya karşı board'lar yan yana konunca çıkar. Flop'ta yüzleşilen boy turn eşiklerini belirlediğinden, notlar sokak değil HAT bazlı tutulur: "flop-1/3 → turn-2/3" ayrı bir kutu, "flop-2/3 → turn-jam" ayrı.

### 26.4 River savunması: frekans-önce, kombo-sonra

River'da devam kararı iki eksenlidir; B11.2 yalnız fiyat eksenini verdi, ikincisi eksikti:

1. **Fiyat ekseni (B11.2):** boyut → gereken devam %'si.
2. **Frekans ekseni (yeni):** gereken %'yi kendi aralığındaki sınıf-yüzdelerine eşle — "top-pair+ elimin yarısıysa hepsiyle call; üçte-ikisiyse bir sınıf buda." Frekansı sınıf-%'yle tuttur; sınıf İÇİ seçimi bloker kuralı belirler (value-bloke → call, blöf-bloke → fold), read ancak bunun üstüne gelir.

> **River'da fiyat "ne kadar savunmam gerek"i, frekans "elimin neresinden keseceğim"i söyler. B11.2'nin eksik yarısı ikincisidir.**

### 26.6 Raise-sonrası turn (x/r + call): kilitli nut → DOWNBET, akışkan nut → JAM, orta boy çoğunlukla yok

26.2-EK "raise-sonrasını çalış" dedi; mekanik budur. 11.1 tablosu IP PFR'ın value turn'üdür; bu bölüm OOP x/r'cının turn'ü. Flop x/r + call sonrası SPR düşüktür; turn ağacı iki boya iner: KÜÇÜK (potun küçük dilimi *(kalibre et)*) ya da JAM. Tek soru seçer: **x/r aralığımın nut sınıfı bu turn'de KİLİTLİ mi?**

- **Kilitli** (river'ın geçmesi zor VE nut hâlâ sende: kent tamamlandı, flush draw yok ve x/r aralığın o kenti taşıyor — flop'ta OESD/gutshot semi-blöf x/r'ı vardıysa; yoksa kent call edene kaymıştır, kilitli değilsin → check ağırlıklı; alt kart eşleşti ve x/r'da alt per'ler vardı; A-x-x düşük board'a wheel'i TAMAMLAMAYAN düşük turn — tamamlıyorsa kent kuralı geçerli, x/r aralığın wheel-draw taşımıyorsa kilitli değilsin) → koruma isteyen de jam isteyen de yok → TÜM aralık downbet: overcard'lar, alt per'ler, tek-kart draw'lar ucuza ödemeye devam eder; ince value + blöf aynı boyda.
- **Akışkan** (iki flush draw açıldı; orta-bağlantılı board'a bağlantılı turn; üst per kırılgan) → güçlü eller parayı river değişmeden koymak ister → jam ağırlığı artar; semi-blöf jam de buradan — ama SPR düştükçe fold equity düşer: seni domine eden draw düşük SPR'de fiyatını alıp çoğunlukla öder, jam'in hedefi zayıf per/overcard/zayıf draw'ları katlatıp equity reddetmektir, ödenince out'un vardır; domine eden draw'ı katlatmak ancak SPR yeterince yüksekken / yeterli fold equity varken mümkündür *(sınırda — kalibre et)*.

Kilit FLOP x/r kompozisyonuna bağlıdır: alt kartla koruma-x/r'ı bulmuyorsan alt kart eşleşince kilitli değilsin. x/r aralığına alt-per/backdoor koruması eklemek turn kilidini satın alır. Kilitli → downbet ağırlıklı, jam nadir (SPR yükseldikçe orta boy açılır, kalibre et); değil → güçlü value + en iyi semi-blöfler jam, ortası check *(sınıf listesi: kalibre et)*.

### 26.7 Turn kartını üç katmanda oku — ve kart KİMİ kilitledi

**Üç katman:** (1) kart ne tamamladı; (2) board'da hâlâ canlı draw var mı; (3) tamamlanan draw rakibin aralığında da var mı. Kent tamamlayan düşük turn RAINBOW board'da saf downbet'e yakın. Aynı kart flop'ta canlı flush draw varsa kilidi açık bırakır: kent/iki-per/set river'da flush'a yenilir → jam payı görünür artar *(oran: kalibre et)*. Flush TAMAMLANDI, x/r aralığında flush'lar var ve x/r'ı CALL eden aralıkta da flush draw'lar vardı (flop'ta FD ile call standart) → iki taraf da kilitli; kilitliye kilitli jam ölü paradır (ödeyen yalnız flush) → aralık downbet'e döner, jam çok dar sınıfa *(kalibre et)*.

**Kart rakibi kilitlediyse bet düğümü kapanır.** BB x/r aralığın A-x'ten görece fakirdir — güçlü A-x 3-bet'e, orta A-x flop call'a gitti, kalan A-x çoğunlukla gutshot/backdoor blöfü; açıcınınki A-x/K-x'le dolu. As turn'ü senin değil RAKİBİN aralığını kilitler: downbet'in ödeyeceği katman artık seni geçer. Üst kartı eşleyen turn'de de aynı: açıcının top-pair'i trips oldu, kimse küçük bete katlanmaz. Bu turn'lerde aralık çoğunlukla check/kontrol; As turn'ünde dar güçlü sınıf (set/iki-per) A-x top pair'den değer için büyük bet — downbet ancak MERGED kurulursa (nut + koruma isteyen orta el + az blöf), tek başına dar sınıfla değil *(kalibre et)*; üst-kart eşleşmesinde ise dar sınıf (boat/quads) trips'ten değer için büyük bet/jam — downbet oraya değer bırakır *(kalibre et)*. Alt kartı eşleyen turn tersidir — x/r'daki alt per trips, alt iki-per boat, alt set quads olur, kilit sende: o sınıf bet.

**x/r'ın EV'si turn'de yaşar:** turn planı olmayan x/r, 11.0-EK "plansız şişirme"nin savunma yüzüdür — eşiği bilmediğin board'da x/r frekansını düşür. Exploit: havuz downbet'e overfold eder ve turn raise'i bulamaz → downbet ile check arasında kaldıysan downbet; rakip raise bulmuyorsa boyu ihtiyaç seçer — koruma isteyen el jam, orta el downbet.

### 26.5 Kalibrasyon + Cheat kartı

*(kalibre et: üç eşik — devam / value-raise / blöf-raise — board-boy hattına göre solver'dan çıkar; kullandığın solver'da caller (savunan taraf) düğümünü locate et.)*

| Yüzleşilen boy | Oku | Not tutumu |
|---|---|---|
| **Flop 1/3 (range-bet)** | Geniş devam eşiği; check-raise SIK/geniş (rakip aralığı geniş-zayıf) | Kendi draw sayınla kalibre |
| **Flop 2/3 (polarize)** | Dar devam; check-raise dar/polarize; value-raise eşiği net | Hat bazlı ("2/3 → turn ?") |
| **River (herhangi)** | Fiyat + frekans iki eksen | Sınıf-% eşleme |
| **Dezavantaj board** | Raise düğümünü kapat | Bilinçli maliyet notu |

### 26.5-EK Mono flop'ta küçük bete karşı (3-bet potu)
3-bet potunda mono flop'ta 3-bettor'ın küçük bet'ini yedin: flush kartı TAŞIYAN per call sınıfı; overpair / top pair flush kartı olmasa da küçük bete call (turn'de dördüncü flush kartı gelince yeniden değerlendir); flush kartsız düşük/orta çift ve overcard'lar çoğunlukla fold. Raise adayı flopun rengindeki yüksek kartı (K/Q) taşıyan draw + bloker ellerdir; flush kartsız suited connector raise DEĞİL — 3-bettor'ın aralığında nut flush/nut fd PAYI yüksektir (toplam flush sayısı değil, nut oranı — caller aralığı çoğu kovada daha çok flush taşır) *(kalibre et)*. Önce hangi mono kovasında olduğunu oku (A + düşük / A-yok kopuk orta / caller'ın yapılı flush+düz kütlesi büyük) — 3-bettor'ın nut-flush payı ve caller'ın yapılı-el kütlesi kovaya göre değişir (bkz. B32.3).

---

## Bölüm 27 — Solver'ı Çalışmak: B9 Drill'ini ve B16.3 Otopsiyi Solvere Bağlamak

*B9 "beni hazırla" drill'ini ve B16.3 otopsiyi verdi; bu bölüm o iki iskeleti solver çalışmasına bağlar. Amaç solver'ı KOPYALAMAK değil — kendi solver çıktından sınır-koşullu kural çıkarmak. (Ayrıntılı okuma-protokolü kendi solver export'undan gelir; burada yalnız genel çalışma çerçevesi.)*

### 27.0 Temel duruş: solver öğrenme aracı, kopya-kaynağı değil

Pokerde geri-bildirim zayıftır — yanlış bir varsayımla yıllarca EV kanatıp hiç fark etmeyebilirsin. Bu yüzden solver'ın bir şeyi NEDEN yaptığını anlamadan çıktıyı taşıma (mekanizma çıkar, ezber değil). Bu, B16.3 otopsinin solver-tarafıdır.

### 27.1 Board'ları tek tek değil KOVA halinde çalış

İzole board yerine doku-kovaları kur (paired / monotone / bağlantılı / kuru-yüksek) ve bir kovaya tek strateji ata; yalnız gerçekten farklı davranan alt-sınıfı ayır. Bu, B9 drill'ini board-verimli yapar — her board'u sıfırdan düşünmezsin.

### 27.2 Blöf sayımı = düz aritmetik (kendi elinle yap)

River'da value kombolarını say, boyun gerektirdiği value:blöf oranına kadar blöf ekle — bu aritmetiktir, ezber değil. Value'lanabilir sınıf daraldıkça (yalnız güçlü eller kaldıkça) boy büyür; bunu kendi elinle sayarak gör, başkasının hazır tablosundan değil.

### 27.3 Node-lock ile sadeleştirmeyi SINA

Node-locking bilinen bir solver özelliğidir: bir boyu/aksiyonu kilitleyip EV kaybını ölç. Basit bir sadeleştirme (tek boy) az EV kaybediyorsa masaya taşınabilir; çok kaybediyorsa taşınmaz. Sonucu KENDİ çalıştırmanda gör *(kalibre et)* — başkasının "aralık kovaya yakınsar" iddiasını olgu gibi alma.

### 27.3-EK Node-lock'un 3-bet-pot uygulaması
Sığ SPR 3-bet potunda "ara boyları at, jam/check'e indir" ve 100bb'de "iki boy (küçük + büyük)" sadeleştirmeleri bu prosedürün somut uygulamasıdır: ara boyu kilitle, EV kaybını ölç, ~sıfırsa masaya taşı (bkz. B32.1). Başkasının "EV kaybı sıfır" iddiasını olgu gibi alma.

### 27.4 Heuristic formatı: desen + neden + SINIR KOŞULU

Solver'dan çektiğin her kuralı üç parçalı yaz: (1) **desen** — gözlenen; (2) **neden** — mekanizma; (3) **sınır koşulu** — nerede GEÇERSİZ.

> **Sınır koşulu yazılmayan heuristic yanlış genellenir. Solver-pipeline çıktısının her satırı bu üç parçayı taşır.**

### 27.5 Öz-denetim: teşvik sanity-check'i

Masada da çalışmada da: "buna karşı rakibin en kârlı cevabı ne?" Cevap dejenereyse strateji yanlıştır. Sömürülebilirliği MDF ezberiyle değil, rakibin TEŞVİKİYLE test et.

### 27.6 Seans mühendisliği + oyun-öncesi beyin yasağı

- Kısa, zaman-kutulu seans (süreyi kendine göre kalibre et), seans başına TEK önceden tanımlı hedef, sıfır dikkat-dağıtıcı (hedefsiz "1 saat solver açayım" yönteminin baş düşmanı).
- Yoğun solver çalışması yalnız OYNANMAYAN günün sabahına; oyun günü seans öncesi zihinsel iş performans düşürür (B16.4'e satır). Düşük-yoğunluk (video/drill) seans sonrası.

### 27.7 Otopsiye üçüncü soru (B16.3'e ek)

Kendi kombonun solver'la eşleşmesi mix'li node'da yanıltıcıdır — kombo sınıfının outlier'ı olabilir. B16.3'ün iki sorusuna ekle: **"SINIFIM ne yapıyordu?"** Ders sınıf seviyesinden çıkar, tek kombodan değil.

*Kök hata bağı: bu çerçeve B9 drill'ini ve otopsini solvere bağlar; sınır-koşullu heuristic, kök hatayı çalışma masasında önlemenin motorudur. Ayrıntılı okuma-protokolü kendi solver export'undan türetilecek (solver-pipeline).*

---

### 27.8 Dört karar-filtresi

- **EV-kaynağı takibi (B9/B27):** "sim'de izinli" ≠ "iyi oynadın". Eş-EV aksiyonların EV'si HANGİ rakip-cevap düğümünden geliyor, o düğüm SENİN havuzunda gerçekleşecek mi? Gerçekleşmiyorsa hat pratikte kaybeder (limp-reraise EV'si rakibin çöple 4-bet-jam'inden geliyorsa ve havuz yapmıyorsa, jam üstün). Otopsinin ve solver-pipeline'ın eksik halkası.
- **Kaçınılmazlık ilkesi (B25 eki):** tuhaf hatla karşılaşınca ilk soru — beni ezen el beni ZATEN her hatta stack'liyor mu? Evetse o dal karardan DÜŞER, karar kalan aralığa karşı verilir → çoğu kez equity-reddi için RAISE (korku-call değil). Dengesiz tuhaf hatlar equity-güdümlüdür, nut değil. B25'in kanıt-testine masada-10-saniye filtre.
- **3-bet boy kimliği (B14/B12):** aralıkta anlamlı flat varsa 3-bet polar → BÜYÜK; flat kapalıysa tüm VPIP 3-bet → lineer → KÜÇÜK. İki kısa stack belirince orta-stack'ler arası strateji lineer-küçükten polar-büyük+flat'e kayar. Sabit çarpan tablosuna kimlik kuralı.
- **Stack-bandı koruma (B24/B22):** edge belirli bir derinlik bandında yaşıyorsa (flats-vs-open oynayabilmek), blind artışı öncesi 2bb spekülatif flat bile seni bandın altına düşürebilir → yakın kararda fold edip bandı garanti et. B24 edge-premium'a somut mekanik: edge soyut değil, derinlik-bandı.

---

### 27.9 Çıktıyı okuma protokolü: eşik önce, check kolonu önce

Solver çıktısını ilk okuyuşta frekans OKUMA — eşik oku. Her boy için tek soru: bu boyla value'lanabilen en zayıf el ne; bete karşı: fold etmeyen en zayıf el ne? Mix yüzdeleri dengede eş-EV'dir, ezberi taşımaz — eşik taşır; eşiğin üstü "yapabilir"dir, sıklığı sonra sınıf seviyesinde kalibre edersin *(kalibre et)*.

Agresör flop çıktısında sıra da bellidir: bet kolonundan değil CHECK kolonundan başla. En çok check isteyen sınıfı bul — o bile bet'e mix ediyorsa o sınıf için check ve bet eş-EV'dir, kalan sınıflar bet'i zaten tercih eder: tam aralığı tek küçük boyla bet etmek flop'ta EV kaybettirmez ama bedava değildir — tam-aralık bet de turn'e borç yazar (27.13); istisna turn range-bet'idir, turn planını buna göre kur. Bet frekansının düştüğü yerde sınırı tek okunabilir kart özelliğine bağla — "en düşük kart şu rankın üstündeyse bet, altındaysa check" *(rankı kalibre et)*. Çizginin keyfî olması kusur değil özelliktir: sınır elleri zaten eş-EV ve keyfî çizgi masada icra edilir.

> **Frekans ezberi taşınmaz; eşik taşınır. Okumaya check kolonundan başla, sınırı tek kart-özelliğine bağla.**

### 27.10 Aralık aritmetiği: kombodan yüzdeye, sokak katlanması, river'dan geri sarım

Kombodan yüzdeye üç adım: sınıfın kombo sayısını yaz, 1326'ya böl, rakibin aralık-genişliğinin tersiyle çarp (%20 aralıkta ×5). Sokak ilerledikçe yeniden say: aralığın zayıf yarısı düşüyor ve güçlü sınıf hep kalıyorsa, o sınıfın payı sokak başına kabaca ikiye katlanır *(kalibre et)*. Dar aralıkta bu yüzdeler board'dan board'a savrulur, geniş aralıkta stabildir — ezber bütçeni dar-aralık düğümlerine harca. Solver ezberi seni yalnız gördüğün board'da taşır; bu aritmetik her board'da.

Çalışmaya river'dan başla ve geriye sar: river'da neyin value'landığı turn aralığını, turn flop'u belirler. River eşiği aritmetiktir: pot betine rakip yaklaşık yarısını savunur → value bet için aralığının ÇOĞUNU geçmen gerekir; raise ihtimali ve bloker payı eşiği yukarı iter *(kalibre et)*. Katlanma kuralı: her pot-bet call'u aralığı yarılar, seni yenen payın oranı kabaca İKİYE katlanır — iki büyük sokak value istiyorsan turn'de yenilme payın buna göre küçük olmalı *(kalibre et)*.

*Kök hata bağı: şişmiş potta tek per'in neden bluff-catcher'a düştüğünün aritmetiği bu katlanmadır — sokak başına ikiye katlanan yenilme payını saymayan el, potu kendi büyütür.*

### 27.11 Strateji değil ARALIK ezberle — ve kendi-aralık imkânsızlık testi

Strateji ezberleme; ARALIK ezberle. Doku ailesi başına rakip aralığındaki draw, set, iki-per paylarını ballpark çıkar ve ezberle *(kalibre et: kendi sim'lerinden)*; masada her call'da haritayı kabaca yarıla, fold/raise'e giden sınıfları düş. Dar aralıklarda paylar sert oynar, geniş aralıklarda az — sıkı pozisyonlar için ayrı harita tut. 27.10'un eşik aritmetiği bu haritayla çalışır; haritasız eşik, pusulasız harita gibidir.

Aynı haritayı kendi aralığına da tut — imkânsızlık testi (27.5 teşvik testinin aritmetik hali): elinden iyisi aralığının kabaca yarısındaysa ve büyük boy atıyorsan, blöf payıyla toplam bet frekansın aralığının büyük kısmına dayanır — rakibin daha kötü elle CALL teşviki ölür (eşikteki "value" betlerini yalnız senden iyiler öder, yani value değildir), böyle bir çıktı dengede yoktur. Kural: rakibin bet opsiyonu olan düğümde aralığının yarıdan fazlasıyla büyük boy atıyorsan value eşiğin düşüktür — yükselt *(kalibre et)*.

### 27.12 Karışık strateji: mix = kayıtsızlık = bedava karar

Solver bir eli karıştırıyorsa o iki aksiyon arasında kayıtsızdır; karışım ancak EV farkı sıfıra yakınken meşrudur. Masa çevirisi: mix'li el BEDAVA karardır — tek tarafa sabitle; hangi tarafa, read'in söyler, read yoksa EV-kaynağı filtresi (27.8). Sabitlemeni node-lock ile sına (27.3): mix'i tek tarafa kilitle, EV kaybını ölç *(kalibre et)* — küçükse masaya taşınır, kural budur.

Karıştırmanın kapısı rakip kalitesidir: frekansını saymayan rec'e karşı saf oyna, exploit'i al. Denge yalnız seni izleyen iyi rakibe karşı gerekir — ve orada seyrek doz yeter: pasif hattında ara sıra güçlü el göster ki karşı-uyum kapısı kapansın. Canlıda araca dikkat: saate yalnız sınır elde bakıyorsan, saat elini anons eder — karıştırman gerekiyorsa kart-özelliği kuralı kullan ("bugünün agresif rengi") ve kuralı gün başına değiştir.

> **Mix ancak eş-EV'de meşrudur; eş-EV karar bedavadır. Rec'e karşı sabitle ve exploit'i al; dengeyi yalnız sayana sakla.**

### 27.13 Sokak-bazlı prosedür: turn kovaları ve sadeleştirme borç-defteri

Turn'ü board olarak değil GELEN KART olarak çalış (27.1'in sokak hali): dört kova — flush-tamamlayan, blank, board-eşleyen, straight/üst-kart — artı en fazla BİR özel kart. Aykırı görünen kartı ayırmadan önce test et: kovanın tek boyuna zorla ve check-frekansını kovayla kıyasla; yakınsıyorsa yut, farkı bilinçli maliyet olarak yaz *(EV farkını kalibre et)*. Ve ezberle: flop'ta var olan tam-aralık lüksü turn'de istisnadır — varsayılan bölünmedir; aralığı sert kayıran nadir turn'ler dışında turn aralığı böler, çalışman da bölünmüş aralığın eşiğini aramakla başlar.

Sadeleştirme bedava değildir; faturası bir sonraki sokakta kesilir — her kısayolun yanına borcunu yaz. Tam-aralık check'e indirdiğin doku, turn'de solver'dan güçlü bir check aralığı bırakır: probe'a fazladan savunma borçlusun. Tam-aralık bet'e indirdiğin doku da borç yazar: turn bet aralığın solver'ınkinden sulanmış olduğundan barrel eşiğini sıkılaştırman gerekir; bu borç yalnızca solver'ın zaten neredeyse tam bet ettiği dokularda ihmal edilebilir *(frekans eşiğini kalibre et)*. Borcu yazılmayan sadeleştirme, iki sokak sonra kaynağı unutulmuş bir kaçak olur — kök hatanın çalışma-masası versiyonu.

> **Turn'de tam-aralık bet istisnadır; ve her sadeleştirme sonraki sokağa borç yazar — borcu defterine işle.**

### 27.14 Çalışma iş-akışı: teşhis merdiveni, kontrast çifti, kuluçka, zorluk ayarı

Anlaşılmayan çıktıya bakmayı bırak, merdivene gir: **Bir** — aksiyonu stratejiden ÇIKAR: hangi aralık hangi runout'ta çıplak kalıyor? **İki** — aynı hattı komşu board'da aç: strateji tutuyorsa mekanizma board'dan bağımsızdır; değişiyorsa neden, iki board arasındaki avantaj farkıdır. **Üç** — bu boy kimin gücünü kaldıraçlıyor, kimin boşluğunu hedefliyor? **Dört** — teşvik testi (27.5).

Kural çekerken tek node'a bakma — asgari-kontrast çifti kur: TEK değişken değiştir (aynı board farklı hat / aynı hat farklı board / aynı boy farklı düğüm), deltayı oku. "Neden"i sana düğüm değil, iki düğüm arasındaki fark söyler; kontrastın öbür yarısı 27.4'ün üçüncü satırını — sınır koşulunu — doldurur.

Anlamadığın node'a tavan koy *(kalibre et — dakika)*; tavan dolunca bırak. Bırakmak pes değil kuluçkadır: birkaç gün sonra dön, çoğu kilit kendiliğinden açılır. Ölçeri oku: karışıklık arada olur; SIK oluyorsa eksik node'da değil temelindedir — yalnız çalışmayı bırak, düğümü bir ortakla çöz. İlerleme mükemmellikten önce gelir.

Seans hedefini beceri seviyene ayarla (27.6'ya ek): ne rutin kadar kolay, ne ilk-kez-görülen kadar ağır — çok kolay dalgınlık, çok zor donma üretir. Ve iki-seçenek kuralı: bu iş ya da hiçbir şey — boş oturmak serbesttir, üçüncü seçenek yoktur. Kaçacak kapı bulamayan dikkat derinleşir.

### 27.15 Cheat kartı

*(kalibre et: seans süresi, node-lock EV-kayıp eşiği, karışım frekansları, eşik yüzdeleri — hepsi kendi çalıştırmandan.)*

| İlke | Kural |
|---|---|
| **Duruş** | Mekanizma çıkar, kopyalama; her kural = desen + neden + SINIR KOŞULU — sınırsız heuristic yanlış genellenir |
| **Kova** | Board'ları doku-kovasıyla çalış (paired / monotone / bağlantılı / kuru-yüksek); kovaya TEK strateji, yalnız farklı davranan alt-sınıfı ayır |
| **Blöf sayımı** | River'da value kombolarını say, boyun oranına kadar blöf ekle — düz aritmetik, kendi elinle; hazır tablodan değil |
| **Node-lock** | Sadeleştirmeyi EV kaybıyla SINA *(kalibre et)*: az kayıp → masaya, çok kayıp → taşınmaz; başkasının iddiasını olgu alma |
| **Öz-denetim** | "Buna karşı rakibin en kârlı cevabı ne?" — cevap dejenereyse strateji yanlış; teşvikle test, MDF ezberiyle değil |
| **Seans** | Kısa, zaman-kutulu, TEK önceden tanımlı hedef; oyun günü seans öncesi yoğun solver YASAK — yalnız oynanmayan günün sabahına |
| **Otopsi** | Tek kombo mix'li node'da yanıltır — üçüncü soru: "SINIFIM ne yapıyordu?" Ders sınıf seviyesinden |
| **Okuma** *(27.9)* | Eşik oku, frekans değil; agresör-flopta CHECK kolonundan başla, sınırı tek kart-özelliğine bağla |
| **Aritmetik** *(27.10)* | Kombo/1326 × aralık-genişliği tersi; sokak başına yenilme payı ~ikiye katlanır; river'dan geri sar |
| **Aralık haritası** *(27.11)* | Strateji değil ARALIK ezberle (doku başına draw/set/iki-per payı); yarıdan fazlasıyla büyük-bet = value değil |
| **Karışık** *(27.12)* | Mix = eş-EV = bedava karar → rec'e karşı sabitle+exploit; dengeyi yalnız sayana sakla; canlıda araç tell'dir |
| **Sokak** *(27.13)* | Turn'de tam-aralık bet istisna (dört-kova çalış); her sadeleştirme sonraki sokağa BORÇ yazar |
| **İş-akışı** *(27.14)* | Anlamadığına teşhis merdiveni + asgari-kontrast çifti; konfüzyon bütçesi/kuluçka; iki-seçenek kuralı |

Dört filtre (27.8): **EV-kaynağı** ("sim'de izinli" ≠ iyi — EV'nin geldiği rakip-cevap düğümü senin havuzunda var mı?) · **Kaçınılmazlık** (beni ezen el her hatta zaten stack'liyorsa o dal düşer → çoğu kez raise) · **3-bet kimliği** (flat varsa polar-BÜYÜK, flat kapalıysa lineer-KÜÇÜK) · **Stack-bandı** (edge'in yaşadığı derinlik bandını yakın kararda fold'la garanti et).

## Bölüm 28 — PKO / Bounty: Ödülü Çipe Çevir, Aralığı Koru

*Kitap klasik NLH/ICM ekseninde; bounty (PKO) katmanı yoktu. PKO'da ikinci bir para birimi vardır — kelle — ve o birim her preflop kararı değiştirir. Sayısal her slot `(kalibre et)`.*

### 28.0 Çekirdek: kelleyi HER kararda çipe çevir

Her elde kellenin o anki çip-değerini yeniden hesapla, bir elde yapıp diğerinde unutma — PKO'da ROI'yi en ucuz artıran şey preflop'a daha çok zaman ayırmaktır. Çipe çevrilmiş kelle, cover ettiğin oyuncuya karşı **negatif risk primi** üretir (B12'nin tersi): onu elemek çip + kelle kazandırır, o yüzden ona karşı call/agresyon eşiğin DÜŞER.

> **PKO'da cover ettiğin oyuncu senin için NEGATİF prim taşır: onu elemeye chipEV'den daha gevşek oynarsın. ICM'in aynası — orada busta kaybını, burada kelle-kazancını fiyatlarsın.**

### 28.1 Cover eden VPIP'i genişler — ama solver'ın uç flat'lerini alma

Bounty-farkındalı solver'lar kelleyi prim gibi modeller ve popülasyonun çok üstünde gevşek flat'ler (normalde flat edilmeyecek çok zayıf suited eller) verir. Prensibi al (genişle), spesifik gevşek kombo'yu alma — canlı saha o gevşekliği ödüllendirmez.

### 28.2 Geniş flat/limp aralığını NUT'la koru — "dead money olma"

Arkanda reopen/squeeze edebilen varsa, geniş VPIP aralığına AA/KK/AK gibi nut'lar koy ki squeeze seni cezalandıramasın. Bu, B4.4 "3-bet ya da fold" refleksine PKO istisnasıdır: kelle avlamak için geniş girersin ama aralık korunmuş olmalı.

### 28.3 Cover ediyorsan LIMP-ağırlıklı VPIP

Limp daha az çip riske atar → daha çok el oyna → daha çok kelle avla. Raise yalnız fold equity üretiyorsa mantıklı; çok kısa/kelleli stack arkandayken raise fold equity üretmez (çok kısa stack'ler jam'le çok sık reopen eder — kalibre et), o yüzden limp baskın. Limp aralığı geniş ama korunmuş (28.2).

### 28.4 "Kellesi ≈ kendi stack'i" çok kısa stack = ekstrem izolasyon dinamiği

Herkes planını onu izole etmek üzere kurar. Kısa stack'in POZİSYONU stratejini belirler:

- **BB'deyse** (aksiyonu kapatır, reopen ihtimali en düşük) → önündekiler daha çok 3-bet edebilir.
- **SB/erken pozisyondaysa** (jam'le reopen eder) → önündekiler flat aralığını nut'la korur.

İzolasyon boyu kendi derinliğine bağlı: derinsen "first-raise" (kısa reopen edemesin diye gereği kadar büyük — reopen'ı reddet); sığsan min-raise (kısanın jam'le reopen'ına izin ver, çek).

### 28.5 Mystery bounty = preflop oyunu / sandbox

Devasa varyans (büyük roll şart), popülasyon postflop clueless. Ana edge: IP geniş limp + korunmuş aralık; insanlar limp düğümünü kötü oynar. Kelle değeri ITM boyunca DEĞİŞİR (büyük kelleler çekildikçe düşer); kaba hesap = canlı kelle toplamı / kalan oyuncu.

### 28.6 Net prim: iki primi tek sayıya indir

Kök hata, ICM'i ve kelleyi iki ayrı ders gibi öğrenip masada ayrı ayrı "hissetmek". Tek sayı tut: net prim = ICM-primi − kelle indirimi; indirimi ölçmek için hedefin kellesini güncel çevrimle BB'ye çevir ve efektif stack'le kıyasla (kalibre et). Kelle stack'e yaklaştıysa net prim derin negatiftir, herhangi-iki bölgesindesin; kelle birkaç BB'ye eridiyse (kalibre et) el kellesiz ICM'dir, standart matrisin aynen geçerli. İşareti de doğru oku: negatif prim ÇAĞRI primidir, blöf primi değil — indirim yalnız cover edende olur: kelleli kısaya 3-bet-fold yoktur çünkü jam'ine karşı kelle oddsuyla sen hep ödersin, ama blöf fold equity'n yalnız SENİ cover eden rakiplere karşı düşer. Cover ettiğinde genişlemeni lineer ve call'la yap; blöf-jam'i kellesiz turnuvaya sakla.

### 28.6-EK Yapısal PKO indirimi: prim HERKES için düşer — derin FT'de matris chipEV'ye yaklaşır

28.6'nın kelle indirimi yalnız cover edende. İkinci, yapıdan gelen bir indirim daha var: havuzun bir kısmı kelle havuzudur ve ICM'le dağıtılmaz; bust'ın toplam $ maliyeti kelle equity'sini de içerir, ama chipEV üstü PRİM yalnız ICM'lenen havuz payından doğar — kelle payı kabaca chip-lineer olduğundan prim eklemez → aynı stack dağılımında prim kellesiz turnuvaya göre belirgin düşer — KAPSANAN için de, kimseyi elemese bile *(kabaca yarıya; kelle payına bağlı, kalibre et)*. Yön korunur: kapsanan hâlâ prim öder, daha az; cover eden iki indirimi üst üste alır. Net prim = (ICM primi × yapısal çarpan) − kelle indirimi.

**Derin PKO FT'de sonuç:** preflop aralık şekilleri çoğunlukla chipEV'ye yakın kalır — 3-bet/flat/limp-raise dokusu dahil *(şekil ve bb bandı: kalibre et)*; "FT'deyim, sık" refleksi yok. Sapma yalnız kısa ve kelleli yığın çevresinde açılır; kendi kellen stack'ine yaklaştığında ICM refleksini aç. Seni cover eden blind 3-bet yerine flat'liyorsa açılışı genişlet — kapsananın tightlığının sebebi 3-bet baskısıdır.

**Gelecek-oyun iki yönde:** solver double-up sonrası cover kazancını saymaz → sınırdaki cover-eden call'larda bir tık gevşek *(sınırda)*; ama masada şişkin kelleli kısa varken kaybedince cover'ını söndürecek marjinal gamble'dan pas (28.11) — "kazansam kimi cover ediyorum, kaybetsem kimi edemiyorum, bekleyen kelle var mı?" (B24.2'ye beşinci soru).

### 28.7 Cover yönü preflop malzemesini seçer

Kök hata, her all-in'e aynı el listesiyle gitmek: jam yelpazesinin dokusu cover yönüne göre tersine döner. Kapsanıyorsan rakip kellen için zaten ödeyecek — jam'i doğrusallaştır: geniş call menzilini domine eden yüksek kartı it; flip satın alan suited connector'ı ve kimseyi katlatmayan blocker-jam'i çöpe at. Cover edensen ayna döner: kısa senin kelleni kazanamaz, o yüzden dar öder — yüksek kartla gelir, iyi suited'larını katlar; şimdi suited-bağlantılı jam altındır: dar call menzilinin yüksek kartları suited-bağlantılıyı domine edemez, çağrıldığında equity'n canlı kalır; arkandaki çöp ise katlanıp ölü para bırakır — jam'in tam o ölü parayı toplar. 3-bet'te boyutu yalnız derinliğe değil cover yönüne de bağla: seni cover eden açıcıya küçük boyut bedava kârdır, büyük git; sen cover ediyorsan küçük-lineer kur (kalibre et). Kompozisyon da yön ister: jam'e karşı katlayacağın eli hiç 3-bet'leme — suited asları call defterine geçir, 3-bet'i kısa ittiğinde tereddütsüz ödeyeceğin ellerden kur.

### 28.8 Kapsananın çöken ağacı: ya jam ya call

Kök hata: kapsanan kısanın "baskım düşük, geniş jam'lerim" demesi — yön ters. Kellen rakiplerin ödeme eşiğini düşürür; fold equity çökünce jam aralığın kellesiz bubble'dakinden bile DAR olmalı (kalibre et). Makasın öbür ağzı lehine işler: biri sana jam'lediğinde ödediğin ICM-primi normalin altındadır — stack-off eşiğin GENİŞ; kelle elinden jam'i alır, karşılığında çağrıyı verir. Ağaç da ikiye iner: kapsananın küçük 3-bet'i blöf değil bağıştır — kimse kelleni masada bırakıp katlanmaz — ve arkadan squeeze gelecek masada canavarla tuzak kurmak kök hatanın kendisidir. Tepeni doğrusal jam'le, kalanını call defterine yaz; kapsananın lüksü yok, tahsilatı var.

### 28.9 Kelle sabit değil: enflasyon, saha, çevrim

Kök hata: kelleyi çipe bir kez çevirip turnuva boyunca sabit taşımak. Kelle havuzu sahadan yavaş erir; aynı kelle geç fazda erken fazdan daha çok chip eder (kalibre et) — çevrimi her büyük kararda tazele, çünkü havuz dağıldıkça chip'in doları düşer. Saha büyüklüğü iki primin hakemidir: dev sahada geç aşamada en şişkin kelle bile birkaç BB'dir (kalibre et) — terimi sil, kellesiz ICM oyna; küçük sahada kelle ortalama stack'in ciddi parçasıdır — net prim aşağı iner, kelle konuşur. Kısa jam'e karşı eşik ayrıca kayar: aynı kelle daha az riskle alınır, oran lehine döner — call eşiğini düz-ortalama hesabın söylediğinden de aşağı çek (kalibre et). Oturmadan önce tek kontrol: en büyük kelle kaç BB ve ortalama stack'in ne kadarı?

### 28.10 Balon paradoksu: kellen fold equity'ni eritir

Kök hata: "risk primim düşük, öyleyse balonda geniş jam" çıkarımı. Primi düşüren mekanizmanın kendisi — kafandaki kelle — rakiplerin call aralığını genişletir; fold equity'n erir, seni her zamankinden çok öderler. Sonuç paradoks ama net: balonda kelleli kısa stack, kellesiz turnuvadakinden DAHA SIKI jam'ler (kalibre et). Marjinal spotu ancak double-up sonrası ekstra oyuncuları cover edecek olman haklı çıkarır.

### 28.11 Cover'ın kalitesi: pozisyon çarpanı, kırılgan statü

Kök hata: cover'ı skaler sanmak — kaç kişinin kapsadığını saymak. Cover çarpı pozisyondur: arkanda pozisyonlu tek coverer açılış aralığını kısar (kalibre et); blind'lardaki iki coverer neredeyse hiç kısmaz, flop'u pozisyonda oynarsın. İkinci kalite testi kalınlık: masayı kıl payı kapsıyorsan cover kaybedilebilir bir statüdür — tek all-in'de söner ve prim ödeyen tarafa düşersin; solver future-game'i görmez diye sen de görmezlik etme. Marjinal cover'da en ince jam'leri kes, tam genişliği kalın cover'a sakla (kalibre et); kelleler stack'lere göre sığken bu tartışma zaten kapanır.

### 28.12 Cold-call kapısı ve kelepçeli squeeze

Kök hata: 3-bet'li potta karara elinden başlamak — önce stack'lere bak. Cold-call kapısı: açanı ya da 3-bet'çiyi, en az birini cover etmiyorsan girme; kimsenin kellesini alamıyorsan aynı el fold'dur, kapı açıksa el konuşur. Flat kararında arka zinciri oku: açıcı arkandaki muhtemel squeezer'ı cover ediyorsa squeezer kelepçelidir — squeeze gelmez, flop'u ucuza görürsün, flat aralığın genişler (kalibre et). Blöf malzemesi de buradan çıkar: seni cover eden rakip geniş call verir, fold gelmeyecek — blocker'lı offsuit çöple değil, flop'ta bir şeye dönüşen suited-bağlantılı ellerle blöfle; polar blöf refleksini fold equity'nin öldüğü yere taşıma.

### 28.13 Kelle ölü antedir: limp rejimi

Kök hata: primi stack'inin katlarına varmış kısayı büyük raise'le "izole etmeye" çalışmak — o kelle ölü antedir, hangi boyutu seçersen seç yarım düzgün el tutan herkes fiyat alır. Rejimi değiştir: bütün oynanabilir aralığını limp'le, multiway'i kucakla, kısa ittiğinde sürüyle üstüne çök; senden sonra limp'ler yığıldıkça value-jam aralığını genişlet (kalibre et). Kendi kellen için ayna eşik var: prim stack'inin küçük parçasıyken limp yaşar, prim stack'e yaklaştıkça limp her seferinde jam yer — kes; eşitlendiği an saf jam-ya-fold (kalibre et), geç pozisyonda cover altındayken de raise jam mıknatısıdır — limp'le ya da direkt it. Tek monoton bant: prim stack'e yaklaştıkça limp azalır, hat jam-ya-fold'a gider; prim stack'i belirgin AŞIP stack de kısaysa aynı mıknatıs istenen şeye döner, hat min-raise'e kayar — limp küçük iso çeker ve flat'ler 1bb'yle ucuz kalır, min-raise izolatörü jam'e zorlar ve katlanan flat'lerin ölü parasını büyütür; raise-fold iki bantta da yok, geçiş sınırı kalibre et (28.23). Masanın öbür yanındaysan panzehiri bil: limp yelpazesi çöp değil, suited ve yapışkandır — küçük iso kimseyi katlatmaz, cezalandıracaksan büyük bas (kalibre et); rakipler limp'lere küçük iso basıyorsa limp senin için bedava paradır, frekansı aç.

### 28.14 Multiway all-in: önce kelleleri pota yaz

Kök hata: multiway all-in'de oranı sadece çiplerle kurmak. Prosedür: yalnız SENİN cover ettiğin jam'lerin kellesini güncel çevrimle BB'ye çevir — seni cover eden yığının kellesini kazanamazsın, o hesaba girmez (kalibre et); kazanabildiğin kelleleri ölü para olarak pota yaz, oranı ondan sonra hesapla — "öde-kazan" sandığın yer "öde, artı senin alabileceğin kelleler kazan"dır ve o fark orta suited elleri fold'dan call'a taşır. El seçiminde soru "elim güçlü mü" değil, "kaç yelpazeye karşıyım": tek yelpazeye karşı yüksek kart öder, suited connector atarsın; birden çok yelpazeye karşı tersine döner — offsuit yüksek kart ve zayıf Ax sürekli domine edilir, suited-bağlantılılar ve küçük çiftler nefes alır (kalibre et). Tek istisna ezber: mikro yığınların üstüne bir dev cover jam'i geldiyse mikroların yalnız YELPAZELERİNİ equity hesabından çıkar (elini devin yelpazesine karşı fiyatla) — ama çiplerini ve kazanabileceğin kellelerini ölü para olarak potta tut, hepsini yenersen o kelleler senindir; equity'de yine yüksek kart kazanır.

### 28.15 Mikronun fold opsiyonu senin jam hakkını çevirir

Kök hata: "masada mikro var, herkes basamağa sıkıştı, ben jam'lerim" ezberi. Mikro zorunlu all-in'se basamak herkese bedavadır ve orta stack'ler seni rahat öder — jam'i kes, aralığını daralt. Mikro hâlâ katlanabiliyorsa (kalibre et) denge döner: seni ödeyecek oyuncu kaybederse basamağı mikroya kaptıracağı için daha dar ödemeye iter — ama bu "dar ödeme" mutlak değil; ancak basamak/ICM riski senin kelle-primini aştığında geçerli. Seni kaplayan oyuncu kelleni de kazanacağından jam hakkın kellenin büyüklüğüyle TERS orantılıdır — kellen ne kadar büyükse seni o kadar geniş öderler. Karar ağacının ilk sorusu yine de stack değil, opsiyon: mikro katlanabiliyor mu?

### 28.16 Mystery'yi yapı sayfası fiyatlar

Kök hata: her mystery'yi aynı agresyonla oynamak — zarfın fiyatı çekilişte değil, yapı sayfasında belirlenir. Üç kalemi oku: faz ne zaman başlıyor, havuzun ne kadarı kelleye gidiyor, overlay var mı — aynı buy-in'de ortalama zarfı katlara varan farkla oynatırlar (kalibre et); faz başlamadan zarf yoktur, eleme hiçbir şey ödemez — faz öncesini normal turnuva gibi oyna, kelle agresyonunu faz kapısında aç. Sonra çekiliş rejimini oku: zarflar sonda açılıyorsa beklenen kelle DOLAR olarak bitişe kadar sabittir — çip karşılığı değil: havuz ödendikçe çipin doları düşer, çevrimi tazele (28.24); canlı açılıyorsa panoya bak — büyük zarflar çekildikçe kalan ortalama düşer, küçükler süpürüldükçe yükselir, hiç çekiliş yoksa yerinden oynamaz. Geç kayıt da aynı fiyat okumasıdır: normal kelleli turnuvada erimiş havuza tam fiyat ödersin — saha belirli ölçüde eridiyse oturma (kalibre et); mystery'de zarf fazı başlamadıysa havuz tamdır, ceza büyük ölçüde silinir.

### 28.17 Mystery aralıkları: oranı kim taşıyor

Kök hata: "kelle var, genişle" ezberi — genişleyen taraf, oranın lehine döndüğü taraftır, sen değil. Kelle kural değil soru verir: kimin kellesi, kimin yığınına göre büyük? Kellen kendi yığınına yaklaştıysa fold equity'n öldü, herkes seni geniş öder: jam'i daralt, yüksek-kart ağırlıklı kur — masadaki oran ne derse desin any-two jam yok. Çok yönlü spotta da denklemi sadeleştir: parası gerçekten sayılan tek rakibi bul, spotu ona indirge, aralığını ona karşı fiyatla.

### 28.19 Kelle etkisi flop'ta yaşar; turn/river'da yalnız stack bağlanmıyorsa söner

Kök hata: derin pot'ta cover haritasını her sokakta yeniden uygulamak — kapsanınca her fıçıyı kesmek, cover edince her fıçıyı büyütmek. Mekanizma: cover eden flop'u daha geniş devam eder (draw kovalar, nut peşindedir), bu yüzden turn'e daha çok otomatik-fold'la gelir; kapsanan, blöf isteksizliğine rağmen o fold'ların hesabıyla normal frekansta barrel'lar. Ayna da işler: cover edenin barrel iştahı yüksek ama kapsanan flop'u dar devam etti, turn aralığı yoğun → bulacak fold yok. İki kuvvet birbirini siler — ama yalnız bahis sonrası SPR'ın hâlâ yüksek kaldığı (~2+, kalibre et), stack'i BAĞLAMAYAN turn/river barrel'larında: orada bet frekansı, boyu ve bluff-catch eşiği iki yönde neredeyse aynıdır *(sapma birkaç puan — kalibre et)*. Kitabın 30–60bb baseline'ında flop bet-call sonrası turn barrel'ı çoğunlukla SPR'ı ~1 civarına ya da altına (60bb'de ~1.5) çeker (kalibre et) — yani turn bahsi fiilen stack'i bağlayan düğümdür ve orada sönme yok: kelle pot-odds'a girmeye devam eder, SPR düştükçe ağırlığı büyür — cover eden kapsananın jam'ine bir kademe geniş bluff-catch eder, kapsanan blöf-jam'ini bir kademe kısar, value-jam'i standart ya da bir kademe ince (geniş ödendiği için) *(kalibre et)*.

**Kural:** PKO postflop ayarının tamamını flop c-bet / flop savunma düğümüne yükle (28.20–28.22); bahis sonrası SPR yüksek kalıyorsa (derin pot) turn ve river'ı kellesiz standardınla oyna — cover haritasını orada "yeniden uygulama", aralıklara zaten gömülü. Turn/river'da kalan fark stack'i bağlayan düğümlerdedir (30–60bb'de flop bet-call sonrası turn çoğunlukla budur): cover eden temiz runout'ta value-jam'i bir kademe inceltir ve kapsananın jam'ini geniş öder; kapsanan blöf-jam'ini kısar, value-jam'ini standart ya da bir kademe ince tutar *(kalibre et)* — cover edenin jam'ine kelle için değil el için katlanır. Postflop kelle çözücüsü yok; bunlar sınır koşullu prensiplerdir, solver kuralı değil.

### 28.20 Cover eden flop'u: IP'de aralık-bet (blöf değil), OOP'de nut-potansiyeli devam

**IP:** negatif prim "equity'ni pota daha çok it" demektir; check-back'ler aralık-bet'e, küçük boy orta boya, equity avantajı belirginse büyük boya kayar *(kademeler: kalibre et)*. Bu blöf artışı DEĞİL: kapsanan rakibin aralığı kelle teşviksizdir, normal katlanır; artan şey aralık-bet frekansı ve daha kalın value'dur — kellesizde check-back edilen elle üç sokak ince value. Soru "check-back mi" değil "hangi boy"; orta boy varsayılan, kuru yüksek-kart board'da bile *(kalibre et)*. Check-raise gelince ağaç bet-call/fold: geniş yüksek-kart+backdoor devamlarını koruyan yol call'dır, 3-bet değil — 3-bet'i nut'a sakla.

**OOP (BB):** eklenen devamlar per değil, nut'a dönüşebilen çizgilerdir — gutshot, backdoor flush/straight, bunları taşıyan per'siz yüksek kartlar. Kelle ancak rakibi stack-off'a sokan bir el yaparsan tahsil edilir: daha az katla, daha çok check-raise, güçlü/kombo draw'la daha çok jam (kellesizde check-call'lanan combo draw burada stack'e gider *(eşik: kalibre et)*), yavaş oyunu azalt. Filtre: "nut yapabilir mi?" — kelleyi çekilişi olan ele bağla, bluff-catcher'a değil. Kapsanan taraf için 28.21.

### 28.21 Kapsanan IP: nut avantajı equity avantajını ezer — aralık-bet çoğunlukla yok, bet-fold'u kabul et

Kök hata: kapsanan olarak dar açtığın için equity avantajını hissedip düşük eşleşmiş / düşük bağlantılı board'da aralık-bet basmak. Cover eden OOP bu board'larda çok geniş check-raise eder — backdoor'lu suited eller, iki yüksek kart + backdoor, orta çiftler — çünkü kelleye giden yol oradan geçer; kapsanan IP ise o check-raise'e karşı aralığının büyük kısmıyla bet-fold'a düşer, daha dar check-raise'e bile daha çok katlanır *(fold oranı farkı: kalibre et)*. Equity avantajı büyük olsa da bet frekansı çoğunlukla DÜŞER.

**Kural:** kapsanan IP olarak "nut kimde" sorusunu equity'den önce sor; nut rakipteyse check-back oranını yükselt *(kalibre et)*, bet'i polar tut, küçük aralık-bet'i çoğunlukla bırak, sınırda tut *(kalibre et)*; yüksek/kuru board'da (A/K-high, nut dar aralığında sende) aralık-bet'i geri getir, orta/bağlantılı board'da check-back'i koru. Check-raise yiyince bet-fold'u kabul et, offsuit broadway'i bet-call'a zorlama. Kesilen blöftür, value değil (21.3-EK): blöf hacmini düşür, value'yu koru, semi-blöfü equity'yle fiyatla. Cover eden OOP olarak aynı board'larda check-raise frekansını aç — hedefini bil: kapsanan IP katlanır, cover eden IP katlanmaz.

### 28.22 Aralık dokusu cover yönünü ezer — kim nereyi bet'ler

"Cover eden daha çok bet'ler" ezberini board'dan bağımsız uygulama. Cover ayarı preflop'ta aralığı yeniden biçimlendirir: kapsanan dar ve yüksek-kart ağırlıklı açar, cover eden geniş ve suited-bağlantılı ağırlıklı açar; cover eden derin caller "BB gibi" geniş flat'ler. Bu doku flop'ta cover yönünü tersine çevirebilir:

- **A/K-yüksek board** dar-kapsanan aralığa daha iyi → kapsanan orada küçük boy aralık-bet; nut avantajı derinse frekansı düşürüp boyu büyüt (polar), blöf payını kapsanan olduğun için (ICM/PKO kesimi) kıs — polar boyun kendi blöf oranı değil, senin risk konumun kısıyor; cover edenin suited-bağlantılıları bricklemiştir → check artar.
- **Düşük/orta-bağlantılı board** tam tersi: cover edenin geniş aralığı bağlanır → aralık-bet, kırılgan çift ve backdoor'lu yüksek kartla flop-jam'e kadar gider (kısa kapsanan caller'ın yüksek-kart/suited-A çöpünü katlatır); dar-kapsanan aynı board'da check'e yakın.
- **Stab:** cover eden geniş caller polar-büyük, kapsanan yoğun caller sık-küçük *(kalibre et)*.

**Kural:** iki soru sırayla — (1) aralığım bu board'a nasıl çarptı, (2) cover yönü. (1) frekansın ana sürücüsüdür; (2) boyu ve frekansı ikinci derecede ayarlar — blöf payını kapsananda kısar, cover edende (PKO) açar. "Cover ediyorum" bet hakkı vermez; aralığın verir. Aralıklar cover'a göre değiştiyse doku baskındır; aynı tutulduysa cover etkisi saftır (28.20).

### 28.23 Kelle stack'ini aştıysa jam değil MIN-RAISE — ve BB'de bu kısanın jam'ine Ax'i geniş öde

**Kısa olarak (kapsanan, kellen stack'ini aşmış):** "herkes beni öder → jam" refleksi potu çok yönlü yapar — herkes kelle oddsuyla re-jam/over-call eder, equity'n bölünür. Min-raise aynı parayı riske atar — raise-fold çoğunlukla yok, hemen hiçbir elle katlanmazsın — ama zinciri değiştirir: arkadan flat'ler gelir, biri jam'ler, flat'ler katlanır; o para pota ölü kalır, sen daha az rakibe karşı daha büyük pota oynarsın. Aralık çoğunlukla min-raise; solver karışımı bir dilimi jam'de bırakabilir — çok yönlü potta iyi tutan çiftler jam'e, izolasyon isteyen Ax/yüksek-kart min-raise'e eğilimli *(hangi el sınıfları / bölüm: kalibre et)*. İki parametre BİRLİKTE gerekir: kelle > stack VE kısa stack *(kaç kat / üst bant: kalibre et)*. Tek monoton bant (28.13): prim stack'e yaklaştıkça limp azalır, hat jam-ya-fold'a gider; prim stack'i belirgin AŞIP stack de kısaysa hat min-raise'e kayar — raise-fold iki bantta da yok, geçiş sınırı kalibre et; stack kısa değilse normal open (raise-fold var), jam değil. ICM'de bu rejim yok: kelle oddsu olmadığından çok yönlü over-call problemi doğmaz, kısa için jam (fold equity) varsayılan kalır; yalnız izolasyon dinamiği benzer (büyük izole eder, orta basamak korkusuyla çekilir). 28.13'ün "limp jam yer → kes; raise jam mıknatısıdır" satırıyla aynı rejim: limp küçük iso çeker ve flat'ler 1bb'yle ucuz kalır, min-raise izolatörü jam'e zorlar ve katlanan flat'lerin ölü parasını büyütür — mıknatıs burada tam istediğin şeydir; kelle > stack VE kısa bandında 28.13'ün jam-ya-fold satırının yerini bu min-raise alır, EV farkı küçük ama tutarlı *(kalibre et)*. 28.8'in kapsanan için "ya jam ya call" ağacına tek istisna budur: bu bantta kapsanan kısanın min-raise'i raise-fold değil, jam'in zincir-değiştiren varyantıdır — fold dalı yine yok; 28.8'in "küçük 3-bet bağıştır" satırı aynen durur (bu bir OPEN'dır).

**BB olarak (cover ederken):** Ax'i ne kadar geniş ödeyeceğin kısanın JAM DOKUSUNA bağlıdır — önce dokuyu gözle. Kısa, aralığını yukarıdaki gibi bölüyorsa (oynanabilir Ax min-raise'e gitmiş, jam orta çift + seçili suited'a sıkışmış) zayıf Ax o jam'e karşı domine değildir: çifte karşı kicker çiftin üstündeyse ~flip, altındaysa belirgin geride *(kalibre et)*; suited'a önde; kelle pota ekli → Ax'i normalden geniş öde — HU'da kelle oddsu kicker'ı büyük ölçüde ezer; kicker'a göre bölme ancak pot çok yönlüyken (arkada over-caller varken) ya da kelle stack'e yakın-ama-küçükken *(kalibre et)*. "Ax'siz jam" showdown'da GÖRÜLMEDEN ezberi bozma: kısa jam'ine her Ax'i basıyorsa (dar-ama-Ax'li jam) standart savunma aynen durur *(sınırda — solver doğrulaması ister)*.

### 28.24 Zarfın çip fiyatı sahayla katlanır — dolar sabit olsa bile

Kök hata: kellenin dolar değerini bulup çip değerini de sabit sanmak. Havuz her elemeyle ödenip küçülür, oyundaki çip sabit kalır → bir çipin doları düşer → sabit dolarlı kelle daha çok çip eder. Sürücü kalan oyuncu sayısı değil, kalan saha YÜZDESİDİR: saha her yarılandığında zarfın çip-değeri bir basamak sıçrar (tek çipin doları düşer) *(basamak eşikleri ve çarpanları: kalibre et)*; canlı çekilişte büyük zarfların çekilmesi yavaşlatır, küçüklerin süpürülmesi hızlandırır. Büyük sahada aynı yüzde FT'den uzaktır → FT'ye gelindiğinde zarf daha çok başlangıç stack'i eder *(kalibre et)* — başlangıç-stack cinsinden; BB cinsinden ayrı soru: blind'lar hızlı büyüyorsa 28.9'un "birkaç BB" uyarısı geçerli kalır *(kalibre et)*.

**Prosedür (molada, dört adım):** (1) kelle $ = kalan kelle havuzu ÷ kalan oyuncu (canlı çekilişte çekilenleri düş); (2) kalan toplam ödül = kalan normal havuz + kalan kelle havuzu; (3) çip $ = kalan toplam ÷ oyundaki toplam çip; (4) kelle çip = (1) ÷ (3), BB'ye böl. Masada yaklaşık: "saha yüzde kaç kaldı?" → kendi yapıların için önceden çıkardığın başlangıç-stack tablosundan oku *(kalibre et)*. 28.16'nın "hesabı bir kez yap"ı DOLAR içindir; 28.9'un "geç fazda daha çok chip" prensibinin mekanizması budur. PKO'da aynı etki var, büyüyen kellede daha silik.

### 28.18 Cheat kartı

*(kalibre et: kelle→BB çevrimini her büyük kararda tazele; tüm eşikler kendi sahandan.)*

| Durum | Kural |
|---|---|
| **Net prim** | Tek sayı: ICM primi − kelle indirimi; indirim yalnız cover edende. Negatif prim ÇAĞRI primidir, blöf primi değil — genişlemeyi lineer + call'la yap |
| **Cover ediyorsan** | Eşik DÜŞER: limp-ağırlıklı geniş VPIP, aralığı NUT'la koru (AA/KK/AK); kısaya karşı suited-bağlantılı jam altın — dar call onu domine edemez |
| **Kapsanıyorsan** | Ağaç ikiye iner: ya jam ya call. Jam DAR (fold equity çökük), stack-off eşiği GENİŞ; küçük 3-bet bağıştır, trap kök hatadır |
| **Kelle sabit değil** | Aynı kelle geç fazda daha çok chip eder — çevrimi tazele. Dev sahada geç faz: kelle birkaç BB → terimi sil, kellesiz ICM oyna |
| **Balon paradoksu** | Kellen rakiplerin call'ını genişletir → fold equity erir: balonda kelleli kısa, kellesizden DAHA SIKI jam'ler *(kalibre et)* |
| **Cover kalitesi** | Cover × pozisyon: arkada pozisyonlu tek coverer aralığı kısar, blind'daki iki coverer kısmaz. Kıl-payı cover kırılgan — ince jam'leri kes |
| **Cold-call kapısı** | Açanı ya da 3-bet'çiyi cover etmiyorsan girme. Açıcı squeezer'ı cover ediyorsa squeeze kelepçeli → flat genişler |
| **Ölü-ante limp** | Kellesi şişmiş kısayı raise'le izole ETME — herkes fiyat alır. Limp'le, multiway'i kucakla, kısa ittiğinde sürüyle çök; kendi primin stack'ine yaklaştıkça limp azalır, eşitlenince saf jam-ya-fold; prim stack'i belirgin AŞIP stack de kısaysa hat min-raise'e kayar (mıknatıs istenen) — raise-fold iki bantta da yok, geçiş sınırı kalibre et (28.13/28.23) |
| **Multiway all-in** | Yalnız SENİN cover ettiğin kelleleri ölü para olarak pota yaz. Çok yelpazeye karşı suited-bağlantılı/küçük çift nefes alır, offsuit yüksek kart boğulur |
| **Mikro fold-opsiyonu** | İlk soru stack değil opsiyon: mikro katlanabiliyor mu? Zorunlu all-in'se basamak herkese bedava → jam'i kes; jam hakkın kellenle TERS orantılı |
| **Mystery** | Zarfı yapı sayfası fiyatlar (faz başlangıcı / kelle payı / overlay); faz öncesi normal turnuva oyna. Kellen stack'ine yaklaştıysa any-two jam yok — yüksek-kart ağırlıklı daralt |

*Kök hata bağı: PKO geniş VPIP'i kök hatayı DAVET eder — geniş girip korunmasız aralıkla şişmiş pota düşmek. Guard: geniş gir ama (a) nut'la koru, (b) postflop'ta hâlâ "tek per = bluff-catcher".*

---

## Bölüm 29 — Deep Stack ve Yüksek-SPR: Kök Hatanın En Pahalı Bandı

*B4.7 200bb+'ı tek satırla geçiştirir (value-ağırlıklı, blöf az, en geniş flat); bu bölüm o bandı ve yüksek-SPR postflop'unu detaylandırır. Süper derin başlangıçlı high-roller formatları ve Main Day 1 gibi 200-250bb açılışlar buraya girer. Omurga kök hata: SPR ne kadar yüksekse tek per o kadar erken bluff-catcher (B11.0 SPR>8).*

### 29.0 Çeşitlendir — ama flat yine en geniş (B4.7 korunur)

Derinlikte aralık GENİŞLEMEZ, KARIŞIR: aynı eli farklı hatlarda (flat / 3-bet) oynayıp her hatta okunamaz olursun. B4.7 doğru kalır — flat aralığı yine en geniştir; "genişleme" BAŞLICA 3-bet bandından mix'e taşınan güçlü ellerle olur; 200bb+ implied-odds bazı spekülatif elleri (küçük çift, suited connector/gapper) flat'e sınırlı ölçüde ekler *(kalibre et)* — ama VPIP patlatmak değil. Her elin hangi hatta düştüğü (pure mı mix mi) *(kalibre et)*; toplam 3-bet aralığı yine value-ağırlıklı kalır (per-el mix düşük frekans). B4'ün çarpan-bazlı sabit 3-bet tablosu bu derinlikte çöker.

### 29.1 3-bet aralığına orta CEP koymak — düşük board kapsaması

Deep 3-bet potunda düşük board gelince pocket pair'in yoksa board oynanamaz → rakip seni lead'le soyar. Orta cepleri 3-bet karışımına dahil et (hangi bant *(kalibre et)*); preflop aralık-boşluğu postflop'a cascade eder: nitty 3-bet → kötü flopta güçlü elleri check zorunda → sonraki sokaklarda scorch. **Preflop çeşitlilik yük taşıyan direktir.**

### 29.2 Yüksek SPR'de stack-off eşikleri çöker

Top pair/overpair = pot-control/check, stack-off değil; check-raise'ler polar (semi-bluff + nut) → pot turn/river'da patlar. Sonuç iyi rakibe karşı IP **daha az c-bet** (aralığın ortasını polar check-raise'e sokma); zayıf rakibe karşı **daha çok c-bet** (deep check-raise bulamazlar).

> **SPR ne kadar yüksekse, tek per o kadar erken bluff-catcher (kök hata). İnce value'da ve okumasız spotlarda overbet'e zorlama — ama nut avantajında geometrik overbet deep'in ANA silahıdır (200bb'i sokmak erken ve büyük boy ister).**

### 29.3 Deep check-raise değeri equity-güdümlü ellerden gelir

Pair+FD, combo draw — ince tek-pair'den DEĞİL (deep'te üç sokak value alamaz). Set'leri slowplay = numaradan değil, aralığın bir kısmı turn baskısını kaldıramadığı için range-koruması.

### 29.4 Deep two-pair savunması: seni cep çifti değil, temiz iki-per korur

Derinde seni bluff-catcher pocket pair değil, düz tamamlamayan / cooler'lanmayan iki-per savunur. Turn/river'da "bu iki-per temiz mi?" diye sor — bağlantısız, kart-vermeyen bir yapı mı *(kalibre et)*.

### 29.5 Deep exploit: float → turn check-through → river stab

Zayıf/nitty deep rakibin flop c-bet'ini call'la (float); turn check-check geldiğinde ve rakip preflop çok sıkı savunmuşsa (orta-el check-call'ları yok → river'da overfold'a yatkın) river'da küçük IP stab (delayed stab) kötü-kurulmuş savunmaya over-perform eder. *(kalibre et — genel prensip; spesifik el kopyalanmaz.)*

### 29.6 Cheat kartı

*(kalibre et: hangi el hangi hatta pure/mix, orta-cep bandı, "temiz iki-per" tanımı — kendi solver'ından.)*

| Konu | Kural |
|---|---|
| **Preflop** | Aralık GENİŞLEMEZ, KARIŞIR — flat yine en geniş; güçlü eller flat/3-bet mix'e, implied-odds spekülatifleri sınırlı ekler *(kalibre et)* |
| **3-bet kurulumu** | Orta CEP'leri karışıma koy — düşük board kapsaman yoksa rakip seni lead'le soyar; preflop boşluk postflop'a cascade eder |
| **Tek per / boy** | SPR>8: top pair/overpair = pot-kontrol, stack-off DEĞİL. Overbet yalnız nut avantajında — geometrik overbet deep'in ANA silahı |
| **C-bet** | İyi rakibe AZ (aralığın ortasını polar check-raise'e sokma); zayıf rakibe ÇOK (deep check-raise bulamaz) |
| **Check-raise** | Equity-güdümlü ellerden: pair+FD, combo draw — ince tek-pair'den değil; set slowplay = range koruması, numara değil |
| **Savunma** | Seni cep çifti değil TEMİZ iki-per korur — turn/river sorusu: "bu iki-per temiz mi?" *(kalibre et)* |
| **Exploit** | Nitty deep rakibe: flop c-bet'ini float et → turn check-check → river küçük IP stab (overfold'a over-perform eder) |

*Kök hata bağı: derin oyun kök hatanın en pahalı sürümüdür — yüksek SPR'de tek perle stack-off, en çok chip'i en yanlış yere bağlar. Guard: SPR>8'de top per/overpair varsayılanı pot-kontrol.*

---

## Bölüm 30 — Micro Stack 4-12bb: Jam/Fold İnceltmeleri ve Eşitsiz-Masa Overlay

*B3 <15bb jam/fold'u verir; bu bölüm 4-12bb bandını ve EŞİTSİZ masada (biri seni cover, biri senden kısa) ortaya çıkan overlay dinamiğini inceltir. Doktrin B3'ün kendisi: bu bantta açış = jam ya da fold, flat-call ağaca girmez.*

### 30.0 4-12bb açış = JAM ya da fold (küçük-RFI yok)

Bu derinlikte ince-boy açış tablosu yoktur — açtığında ya jam'lersin ya fold. Küçük çiftler (22-66) bu bandın EN DERİN yaşayan JAM'lerindendir *(derinliği kalibre et)*, DEFEND edilmez. Fold-equity + çağrılınca canlı equity ikisi de gerçek; jam'i "polarize spew" sanmak MTT refleksi hatasıdır.

### 30.0-EK "Küçük-RFI yok" cover-edilen-masa varsayımıdır — arkadakiler senden kısaysa ~12bb raise-fold sınırda yaşar

30.0'ın "4–12bb açış = jam ya da fold" kuralı masanın seni cover ettiği varsayımıyla yazıldı. Arkandakiler belirgin KISA ise (sen cover ediyorsan) ~12bb'de küçük raise-fold ve AJs/AQs sınıfıyla raise (jam değil) sınırda tutar *(kalibre et)*: kısanın jam'i tüm stack'idir ve karşısında geniş call bulur (kalan stack'inle çoğu jam'i ödersin) → fold-equity düşük → rejam daralır, küçük raise-fold nefes alır. Arkandakiler derinse tersi: rejam onlara yalnız efektif ~12bb'ye mal olur, reshove genişler — jam-or-fold daha da sertleşir; ~20bb'deki "derin masa call'ı tercih eder" alanı (B33.6) burada kapanır, call seçeneği yoktur. İstisna bandın üst ucuna özgüdür; 4–8bb'de doktrin aynen. Cover eden rahat rejam'ler, cover edilen primli — B33.6'nın efektif-stack mekanizmasıyla aynı yön.

### 30.1 Raise+ ile karşılaşınca: jam-or-fold, flat DEĞİL

Fringe eller (Q9s/J9s/QTo tipi orta-broadway/zayıf-suited sınır elleri) bu derinlikte CALL değil **jam-or-fold**'dur — ~10-12bb'de re-jam min-raise üstünde gerçek fold-equity taşır; 4-8bb'de jam canlı equity + ölü parayla çalışır, fold-equity beklenmez. Micro stack'in büyük bir kısmını "flop görmek için" fringe'le call etmek, jam/fold doktrininin tam önlediği klasik hatadır.

> **Micro stack'te "her şeye committed"sin ama bu "flop görmek için call et" demek değil — commit'ini JAM olarak al: fold-equity + canlı equity birlikte çalışır; flat-call fold-equity'yi tamamen bırakır, canlı equity'ni ise kısa stack'le kötü realize eder.**

### 30.2 Bu bantta BB min-raise'e karşı geniş savunur — ama savunma = jam/fold kararı

Deep ters-implied cezası olmadığından BB fiyatı iyidir; ama "savunma" burada da jam-ya-fold ekseninde okunur (uygun elle re-jam, gerisi fold), sokak sokak flat-call postflop değil. *(kalibre et — eşik sizing'e bağlı.)*

### 30.3 Eşitsiz stack: tek-aralığa-karşı-büyük-pot etkisi

Jam et, biri call diğerleri fold → tek aralığa karşı büyük pot. Caller arkadaki reopen/squeeze tehdidiyle daha sıkı call ettiği için jam aralığın GENİŞLER; etki derinlik arttıkça büyür (genel ICM/multiway baskı mantığı).

### 30.4 Bu bantta flat/trap YOK

4-12bb'de flat-call ağaca girmediği için flat>3-bet trap'i de yoktur (trap/flat hatları 30bb+ derin oyuna aittir; B5'in 25-30bb bandı da jam/fold'dur). Arkanda kısa bir jam-happy stack olsa bile plan jam-or-fold'dur; "yem yutulsun diye" flat'lemek kök-hatanın micro sürümüdür (fold-equity'siz çip bağlama).

### 30.6 ≤5bb BB, jam'e karşı: neredeyse her iki kart CALL

Kök hata: 5bb'de BB'den jam'e "elim yok" diye fold — hele hızlı yapıda. Üç mekanizma üst üste biner:

1. **Pot-odds:** BB + ante zaten pottadır, kalan stack'in küçük; gereken equity = kalan ÷ (2×(kalan + BB) + SB + ante) — rakip toplam stack'ini eşler, SB ve ante ölü para; jam'ci SB ise SB'nin 0.5bb'si eşlemenin içindedir, ayrıca ekleme — payda 2×(kalan + BB) + ante olur; kendi elinle hesapla.
2. **Jam aralığı çoğunlukla tepesizdir (sınırda — bonus, taşıyıcı bacak değil):** jam'cinin arkasında hâlâ fold'a zorlanacak oyuncu varken (CO/BTN jam'i) raise opsiyonu olan stack *(kabaca 12–20bb, kalibre et)* en güçlü ellerini çoğunlukla non-all-in açar (QQ+ *(kalibre et)*); jam aralığı küçük çift + suited Ax + offsuit yüksek kart + bazı suited Kx/Qx → küçük suited connector/gapper ve bağlantılı offsuit'ler nadiren domine edilir, büyük çifte seyrek çarpar; küçük çifte karşı equity'leri canlı kalır *(kalibre et)* — tepenin non-all-in açılması fiyatını sınırda daha da iyileştirir. SB→BB ya da tek-rakip jam'inde bacak düşer: sen zaten her şeyle ödüyorsan jam'cinin primini jam dışında tutmasının maliyeti yok, aralık tepelidir; çok kısa jam'ciye (raise opsiyonu yok) karşı da düşer — karar 1 ve 3'e yaslanır.
3. **Gelecek-oyun (22.10):** fold edersen sıradaki SB + ante seni 3bb altına iter, oradan double bile ölü stack üretir; call edip kazanırsan diri stack'e çıkarsın. Kazanç/kayıp oranı bandın üst ucunda kabaca 2–2.5:1, ~3.5bb ve altında 3:1'i geçer *(ante yapısına göre, bacak 1'in formülünden türet — kalibre et)*; gelecek-oyun ağırlığı bunu daha da yukarı iter, gereken equity daha da iner.

**Kural:** ≤5bb BB'de jam'e varsayılan CALL; fold'u yalnız ölü offsuit çöpe sakla, önce "sıradaki BB'ye kaç bb'yle giriyorum?" diye sor. Min-raise'e karşı kalan stack'in pot-odds'unun çöktüğü bant — kabaca 3–4bb *(kalibre et)* — fold yok, jam. Bir bant üstte (~7bb) call aralığı sert daralır *(kırılma: kalibre et)*. Havuz bu bantta çok sıkı öder — jam tarafında bunu bil, BB'deyken kopyalama. 30.2'nin sayısal ucu.

### 30.7 Postflop ≤15bb BB (bandın üst ucu): düşük board'da lead = JAM ya da CHECK

≤15bb, rakip daha derin açtı, BB'de flat'ledin. Kök hata: 40–60bb refleksiyle alt/orta per'i check-call'a taşımak. Sığda flop potu stack'e göre o kadar büyüktür ki hesabı iki şey ele geçirir: equity'ni bedava kart vermeden KORUMAK ve rakibin equity'sini FOLD ETTİRMEK; alt per bile çoğunlukla stack-off sınıfına girer (10bb civarı), 15bb'de sınırda. Jam'in fold equity kaynağı: bare overcard'lar (kabaca çeyrek equity) ve gutshot / tek-overcard'lı zayıf draw'lar katlanır; overcard'lı üst kent draw'ları (çoğu per'e karşı önde) ödeyecektir — onlara karşı jam'in değeri fold değil, bedava kart vermeyip equity'yi anında realize etmektir. Flop jam aralığın YOKSA IP her eliyle bedava turn'e geçer — sığda ilk parayı koyan olmak pozisyondan değerlidir *(kalibre et)*.

**Ağaç en fazla üç düğüm: jam / küçük / check.** BTN açıcıya karşı düşük-orta bağlantılı board: jam sınıfı = top/orta per, overcard'lı kent draw, gutshot+overcard. **Tuzak sığda:** iki per, kent, set, güçlü top-pair'in bir kısmı CHECK'te — jam aralığı zaten kırılgan ellerle dolu, nut'u eklersen check aralığın çıplak kalır; test: "bu el kötü turn kartından korkuyor mu?" — korkuyorsa jam. **10→15bb:** jam frekansı bir miktar düşer, küçük/check-jam pay alır; asıl değişim sınıfın kayması — dinamik dokuda alt per check'e, overcard'lı draw'lar jam'e *(kalibre et)*. **EP açıcı (dar aralık):** overpair-yoğun dar aralık düşük board'u ISKALAMAZ — equity avantajı overpair'lerle EP'de kalır; BB'nin avantajı NUT'tur (iki per/kent/alt set — EP'de yok). Overpair'ler katlanmaz (az fold equity) → küçük/sık lead değil, KONTROL: aralık çoğunlukla check, jam yalnız nut/nut'a yakın sınıf + en iyi kent draw'larına (semi-blöf) saklanır; küçük lead ancak nut-ağırlıklı ve seyrek *(kalibre et)*. Yüksek board için 19.1-EK.

### 30.5 Cheat kartı

*(kalibre et: küçük-çift jam derinliği, BB re-jam eşiği — sizing'e bağlı.)*

| Durum | Kural |
|---|---|
| **Açış** | JAM ya da fold — bu bantta küçük-RFI tablosu YOK |
| **Küçük çiftler (22-66)** | Bandın en derin yaşayan JAM'lerinden *(kalibre et)*; DEFEND edilmez |
| **Raise+'a karşı fringe** | Jam-or-fold, flat DEĞİL: yeterli derinlikte re-jam gerçek fold-equity taşır, çok kısada jam canlı equity + ölü parayla çalışır *(bant sınırları: kalibre et)* |
| **BB savunması** | Min-raise'e geniş savun: sığ uçta re-jam/fold ekseni; derin uçta (min-raise'e kapatan) preflop flat izinli — ama flatleyip postflop sokak-sokak oynama *(kalibre et)* |
| **Eşitsiz masa** | Arkadaki reopen/squeeze tehdidi caller'ı sıkar → jam aralığın GENİŞLER; etki derinlikle büyür |
| **Trap-flat** | YOK — jam-happy kısaya karşı bile premium'u "yem" diye flat'leme: jam aralığın zaten geniş, premium jam'le ödenir; flat, jam gelmezse şişmiş/çok-yönlü pota döner (kök hatanın micro sürümü). BB'nin min-raise'e kapatan flat'i ayrı — o savunma |
| **Asıl leak** | Fazla stack-off değil fazla FOLD + fringe flat-call; fringe-JAM doktrindir, spew değil |

*Kök hata bağı: micro bantta tehlike fazla stack-off değil, fazla FOLD (jam/re-jam yeterince geniş değil) ve fringe'le flat-call. Fringe-JAM standart jam/fold doktrinidir, leak değil — leak flat-call/limp hatlarıdır.*

---

## Bölüm 31 — BB-Ante Heads-Up ve HU-vs-GTO

*Kitapta HU/3-handed sıfır satır — oysa her turnuvanın en pahalı iki-üç saati (HU + short-handed FT) bu dinamiktir; SHR/HR final'lerinin doğrudan parası.*

### 31.0 BB-ante HU'da BTN %100 VPIP

Ölü ante sayesinde yarım BB'yle ~3BB'lik pota IP giriyorsun — pokerin en iyi fiyatlarından; hiçbir el fold edilmez. Rakibin bir BTN fold'u görmek başlı başına tell: çöpü aralığından çıkmış + HU tecrübesizliğini ilan etmiş demektir.

### 31.1 Derinlik-orantılı limp/raise — orta-sığ derinliğin üstünde IP jam kaybolur

HU BTN stratejisi derinlikle kayar: derinleştikçe raise payı büyür (çok derin ~raise-only), sığlaştıkça limp ağırlıklaşır *(kalibre et)*. Kritik sürpriz: orta-sığ derinliğin üstünde IP jam kaybolur, limp öne geçer *(eşiği kalibre et; ~15-16bb civarı)*; çok sığda bile polar limp aralığı var — trap + çöp *(derinliği kalibre et)*. Pasif rakibe karşı dengeyi bırak: çöpü limp'le, iyiyi raise'le.

### 31.1-EK Pozisyon aynası: "derinleştikçe raise" yönü BvB SB'de de geçerlidir — aynalanan eğri değil, pozisyon ve motor

31.1'in derinlik eğrisi IP limp içindir: HU-BTN limp'ini OOP rakip iso eder. 8-max BvB'de SB limp'i OOP'dir, iso IP'den (BB) gelir ve IP iso derinlikle çoğunlukla büyür — eğri BvB'de çoğunlukla tersine dönmez, aynı yönde kalır: derin uçta SB de limp payını küçültüp raise-first'e kayar, sığlaştıkça (kabaca 12–15bb'ye kadar) limp ağırlıklaşır; daha altında limp yerini open-jam'e bırakır *(kalibre et)*. Fark limp-reraise'in varlığı değil eğrinin seviyesi ve limp'in dokusu: raise-fold'un preflop maliyeti iki tarafta aynıdır, fark raise'in çağrıldığı dalda çıkar — OOP raise'i çağrılınca büyümüş potta pozisyon dışı kaldığı için SB aynı derinlikte HU-BTN'den çoğunlukla daha fazla limp'ler; fazlalık raise-fold'dan kaçan orta ellerdir, derin uçta SB'nin limp dilimi HU-BTN'e göre daha geniş ve daha merged'dir; limp-reraise dilimi korunur (premium'un bir kısmı + birkaç blocker) ama oransal payı büyük değildir, sınırda *(kalibre et)* — derin kolda limp sıfıra inmez, eğri çoğunlukla düzleşir. B33.1'in "U"su frekans değil içerik eğrisidir (limp'in limp-reraise/limp-jam dilimi: derinde premium tuzağı, sığda blocker yarı-blöfü). Değişen yön değil, motor ve seviye: IP'de "ucuz flop görme", OOP'ta "raise'in çağrılma dalından kaçınma + SPR kapanı". HU için bu satır, BvB için bkz. B33.1 (pozisyon aynası kutusu).

### 31.2 Capped kalmanın gerçek maliyeti

Trips/nut'un bir kısmını check-call'da bırakma sebebi over-bluff korkusu DEĞİL: capped olduğunu bilen rakip value HACMİNİ ve BOYUNU büyütür (ince value'yla overbet/jam açılır) + o hacme eşlik eden blöfleri ekler → EV iki kanaldan birden akmayı keser. Uncapped check-call her iki kapıyı kapatır.

> **Capped kalmanın cezası "blöf yerim" değil, "rakip hem daha çok hem daha büyük value bet'ler + yanına blöf ekler"dir. Uncapped aralık iki kapıyı birden kapatır.**

### 31.3 Check-back inşası: gecikmiş blöf zorunluluğu

HU'da flop check-back MTT'den kat kat sık; check-back aralığına bilinçli sıfır-showdown aday koymazsan river'a hep A-high/per taşırsın → aralığın value-oriented olur, rakip sana blöf atmayı KESER (blöf iştahı aralığının şeklinin fonksiyonu) ve kendi value'n ödeme bulamaz. Gecikmiş blöfü rakibin fold'larını unblock eden ellerden seç; gizli tuzak: run-out'a düşen orta kart (9 gibi) rakibin A9/K9 check-back sınıfına sessiz per verebilir — o board'larda blöfü kıs; ama elinde 9 varsa tam tersine o kombolar bloke olur (rakibin A9/K9'u azalır), blöf adayın güçlenir.

### 31.4 HU'da lead/donk YOK — asimetri ölçüsü (B19.1'in HU teyidi)

MTT'de lead'i doğuran aralık ASİMETRİSİdir; HU'da iki taraf aynı geniş aralıkla oynar → düşük/bağlantılı board "senin" değildir, lead aralığı kurulamaz. Preflop yüzü: HU BTN limp'ine iso ≠ BvB SB-limp'ine iso'nun aynası (pozisyonlar ters, OOP iso daha güçlü el ister). B19'un ICM-lead istisnaları ring içindir; HU'ya taşınmaz.

### 31.5 Rainbow = büyük boy evi (B18.2 istisna kutusu — HU)

Büyük c-bet boyları en çok RAINBOW/statik board'da toplanır, flush-draw'lu board'da değil. Geniş-aralıklı HU/blind-savaşı potlarında overpair/en-iyi-Tx avantajın büyükse kuru board'da büyük-polar boy doğru — B18.2'nin "kuru=1/3" ezberi burada equity-edge'i masada bırakır. (B18.2-EK ile aynı düzeltmenin HU uygulaması.)

### 31.6 Hızlandırılmış tell/meta döngüsü

VPIP ~%100 olduğu için eğilimler birkaç elde açığa çıkar; TEK data-point'ten agresif projeksiyon meşru. Teller üç kategoride okunur — timing (snap vs tank), sizing (küçük/orta/büyük), hat (hangi sokakta pasif/agresif) — her birinden bir okuma: derin stack'te bir çifti düşünmeden flat'leyen pot-kontrol ilan etmiştir (timing); A-high ince value'yu check eden rakibin OOP aralığı olması gerekenden güçlüdür, kendi ince value'nu kıs (hat); river'da seni pota iten snap-call "raise menümde yok" itirafıdır, OOP ince value boyunu büyüt (timing+sizing). Üst kural: MTT eliti bile HU'da göreli acemi; ama senin basitleştirmelerini de senden tecrübeli biri aynı şekilde avlar.

### 31.7 Küçük çift jam derinde yaşar + orta boy yasağı

BB'den open'a karşı küçük çiftler HU'da beklenenden derin stack'lerde jam adayı kalır — rejam-vs-open hesaplarında şaşırtıcı derinliğe kadar +EV *(hangi çift hangi derinliğe kadar — kendi solver'ında kalibre et)*; ama tam stratejide ~20-25bb üstünde jam yerine raise standarttır *(kalibre et)*. Yine de MTT refleksiyle "bu derinlikte çiftle jam mi?" şaşkınlığı HU push/fold bandında leak. "Kabiliyetli ama ileri olmayan" oyuncunun sık görülen bir teli makul-orta boy (yarım-pot): ya minik (geniş zayıf-value) ya büyük/polar (nut+blöf) — ortası iki işlevi de öldürür.

### 31.8 Cheat kartı

*(kalibre et: limp/raise geçiş derinlikleri, küçük-çift jam eşiği — kendi solver'ından.)*

| Konu | Kural |
|---|---|
| **BTN preflop** | %100 VPIP — hiçbir el fold yok; derinleştikçe raise, sığlaştıkça limp, ~15-16bb üstü IP jam kaybolur *(kalibre et)*. Rakibin BTN fold'u başlı başına tell |
| **Pasife karşı** | Dengeyi bırak: çöpü limp'le, iyiyi raise'le |
| **Capped kalma** | Ceza çift kanal: rakip value hacmini VE boyunu büyütür + yanına blöf ekler → trips/nut'un bir kısmı check-call'da (uncapped kal) |
| **Check-back** | Bilinçli sıfır-showdown aday koy — yoksa rakip sana blöfü keser, value'n ödeme bulamaz; gecikmiş blöfü rakibin fold'larını unblock eden ellerden seç |
| **Lead/donk** | YOK — aralıklar simetrik, "senin board'un" kurulamaz; ICM-lead istisnaları ring içindir, HU'ya taşınmaz |
| **Boy** | Rainbow/statik board = büyük-polar boy evi; "kuru=1/3" ezberi HU'da equity-edge'i masada bırakır |
| **Tell döngüsü** | Tek data-point'ten projeksiyon meşru: timing / sizing / hat üçlüsünü oku; makul-orta boy (yarım-pot) acemi telidir — boylar ya minik ya büyük/polar |
| **Küçük çift** | BB'den open'a karşı rejam şaşırtıcı derinliğe kadar +EV *(kalibre et)*; tam stratejide ~20-25bb üstü jam yerine raise standart |

*Kök hata bağı: HU/short-handed FT kitabın en büyük yapısal boşluğuydu; komple yeni bölüm. Kök hata omurgası burada da geçerli (capped kalma + tek per disiplini), yalnız aralıklar HU-geniş.*

---

## Bölüm 32 — 3-bet Pot Postflop: Boyu Board Değil, El Sınıfı ve Iskalayan Blok Seçer

*B4 3-bet aralığını, B11 şişmiş potun icrasını, B18 tek-raise'li flop'u, B26 caller tarafını verdi; 3-bet EDENİN postflop hatları yoktu. Baseline: HU, 3-bettor OOP (SB/BB), caller IP (BTN); ante'li 8-max, ICM yok. İki kolon: SPR ≲2 (30-45bb) ve SPR ~3-4 (~55-70bb); metindeki "100bb" örnekleri ikinci ağacın derin ucudur — 100bb'de SPR ≳4-5, ağaç değişir (32.1) *(kalibre et)*. Sen caller'san B26/B11 geçerli; buradaki hatlar şişirenindir (32.5 stab hariç).*

### 32.0 Tek cümlelik tez

> **3-bet potunda boyu board dokusu tek başına değil; dokunun hangi bloğu ıskalattığı + el sınıfı seçer. Kök hata (şişmiş potta tek per) şişirenin — 3-bettor'ın — hatasıdır: aralık + nut avantajı ona sığ SPR'de jam, derin SPR'de polar boy lisansı verir; lisansı SPR'ye ve dokuya bakmadan kullanmak (100bb'de nut avantajının eridiği bağlantılı dokuda tek perle stack-off) kök hatanın ta kendisidir. Capped caller'ın tek peri zaten bluff-catcher'dır (B26).**

"3-bet eden = Ax'i bol" eksiktir: 3-bettor'ın Ax'i oran olarak yoğun ama sınıf olarak dar ve uç-ağırlıklıdır (AA/AK/AQ + suited tekerlek blöfleri), caller'ınki orta-sınıf, geniş ve dominedir (AJ/AT/A9s tipi) — suited Ax'in çoğu ve offsuit AT-AJ caller'da kalır (AQo çoğunlukla 3-bettor'da, derin stack'te kısmen caller'da — *kalibre et*). Offsuit broadway kesiminin (KQ/KJ/QJ) büyük payı da caller'dadır; KT/QT/JT derin stack'te ya da küçük 3-bet'e karşı gelir, 30-40bb'de çoğunlukla fold *(kompozisyon: B4, kalibre et)*. İki sonuç: (1) hedeflediğin iki fold bloğu var — offsuit broadway ve suited Kx/Qx/Ax çöp; her flop'ta soru "hangi blok ıskaladı, hangi boy onu katlatır?" (2) A-high board'da caller'ın Ax'ini azımsama: küçük bet ucuz olduğu için verimlidir; büyük bet caller'ın Ax'ini yine katlatmaz, yalnız blöflerin fiyatını artırır ve senin dar/uç Ax'ini polar (nut vs hava) bir ağaca zorlar — A-high'da büyük boy çoğunlukla gereksiz *(kalibre et)*.

### 32.1 Sığ SPR ağacı: jam ya da check

40bb civarı, orta-bağlantılı board (T-9-x / J-9-x): iki aralık da neredeyse ıskalamaz. Caller'da orta/alt per + düz çekilişi; sende top pair + overpair + iki-overcard-çekiliş. Caller'ın "bir şeyi" seninkinden zayıftır ama katlanamayacak kadar equity taşır. Flop jam'i bunu paraya çevirir: kendi equity'ni tamamen realize edersin, geride-ama-equity'li elleri (suited Kx/Qx, offsuit broadway, düşük per) katlatırsın, çekilişleri geride call ettirirsin.

Ağaç iki dallı: **jam** (top pair, overpair, iki-overcard + düz/backdoor-flush, güçlü draw) / **check** (para koymak istemeyen alt per ve zayıf Ax; çekilişsiz AK — check-call/check-jam; tuzak — top set). Ara boylar aynı elleri düşük frekansta oynatan kopyalardır; atıldığında EV kaybı ~sıfır *(node-lock — B27.3)*. A-high + fd + iki broadway'de (A-Q-T fd) de aynı ağaç: flush kartsız AK/AT hızlı oynar. **Sınır:** SPR ~3-4 ve üstünde (100bb'de ≳4-5) flop jam çoğunlukla hiçbir board'da sınıf olarak kalmaz — jam potun 3-4 katıdır; yerini iki-boy (küçük + büyük) alır. Jam'e en yakın doku, overcard'larının (AK/AQ) nut-gutshot aldığı en bağlantılı yüksek board'lardır (J-T-x tipi): büyük boy + turn stack-off ağırlığı, sınırda *(hangi board'lar, hangi frekans: kalibre et; 32.3)*. B11.0'ın "SPR 1-4: tek per bluff-catcher" satırı capped caller için SPR ≳2'de geçerlidir (SPR ≲1.5'te onun top pair'i de çoğunlukla call-off'a iner — potu başlatmaz ama jam'e katlamaz; 11.0-EK-2); nut avantajlı 3-bettor'da SPR ≲2'de top pair/overpair çoğunlukla jam sınıfıdır *(frekans: kalibre et)*, 100bb'de satır 3-bettor'a da geri döner (32.2).

### 32.2 Mekanizma: derinlik ve alt-çift pusulası

**Derinlik top pair'in sokak sayısını belirler.** 40bb'de Ax top pair hemen her runout'ta stack-off eder → flop'ta bet. 100bb'de üç sokak, stack'i river'da tek perle içeri sokmaktır; çoğu river'da (B11.4 kataloğu üç sokak boyunca çalışır) jam value değildir. Ama atlanan sokak flop değildir: Ax top pair flop'ta çoğunlukla bet ile devam eder (boyu alt-çift pusulası seçer, aşağıda), atlanan sokak river — bazen turn; zayıf kicker turn/river'da daha çok kontrol eder *(kalibre et)*. 100bb A-high potunda Ax top pair çoğunlukla "iki sokak + river kontrol" elidir; "bet-bet-jam" 40bb refleksidir.

**Alt-çift pusulası.** Boyu value'nun en KIRILGAN katmanı seçer. Flop'ta sor: "alt çiftlerim (TT-QQ) bet istiyor mu?"

- **A-K-x:** istemez — caller'ın Kx'i geçmiş, katlattığı zaten geride, çağırdığı daha iyi per → alt çift check; Ax/Kx + gutshot blöfler polar → büyük boy, frekans yine yüksek (aralık avantajı burada tepe yapar — yalnız alt çift katmanı düşer).
- **A-J-x:** ister — Kx/Qx persiz overcard, küçük bete katlanır ya da geride call eder → alt çift küçük value, aralık eşlik eder → tek küçük boy, tam-aralık.
- **A-J-x + fd:** bu kez istemez (A-K-x gibi) — turn'de blöf atabilecek çekiliş artar *(kalibre et)*.

Kural: alt çift bet istiyorsa lineer küçük; istemiyorsa polar büyük + alt çift check — pusula boyu seçer, frekansı aralık avantajı seçer; alt çift boyun TAVANINI koyar, tabanını SPR koyar. B18.1-EK "boyu value seçer"in 3-bet-pot uygulaması.

### 32.3 Board sınıfları

*(boylar/frekanslar kalibre et; yön sabit)*

Sınıfları ezberleme, üç sürücüden türet: **(a) nut avantajı kimde?** — aralık avantajı çoğu board'da 3-bettor'da, nut avantajı yalnız yüksek kartlı / A-high dokularda; nut caller'daysa boy küçülür ya da check artar. **(b) SPR** — ≲2'de jam/check ağacı; ~3-4'te iki-boy ağacı, flop jam çoğunlukla yok; 100bb'de SPR ≳4-5, ağaç değişir (32.1). **(c) Turn-jam tehdidi** — doku-koşulludur: sığda dinamik dokuda (J-T-x tipi) turn-jam tehdidi flop boyunun işini yapar, çıplak çekilişi kayıtsız bırakır → büyük boy / jam ağacı çalışır; derinde tehdit yalnız pot-boy flop'la korunur → J-T-x tipinde pot-boy; ince-nut dokuda (üç-broadway) her derinlikte küçük, gerisi turn'e (32.5). Aynı SPR'de iki dokuyu (c) değil (a) ayırır. Altı doku ailesi bu üç sürücünün işlenmiş örnekleridir:

| Aile | SPR ≲2 (30-45bb) | SPR ~3-4 (baseline ~55-70bb; 100bb'de SPR ≳4-5, ağaç değişir — 32.1) | Sürücü / neden |
|---|---|---|---|
| **A-high kopuk** (A-6-2 r tipi) | Tam-aralık küçük | Tam-aralık küçük | (a) Nut + aralık sende; caller'ın broadway/suited Kx bloğu tutunmaz, alt cep ince value. Wheel-bağlantılı A-high (A-3-2 tipi) sınır: caller'da 22/33 + A5s-A4s/54s tipi wheel/set VAR; 100bb'de derinlik caller'ın nut payını değerli kılar → check payı artar, küçük-bet sıklığı düşer; sığda düşük SPR + aralık avantajı bunu bastırır → tam-aralık küçük *(kalibre et)* |
| **A + broadway** (A-J-x, A-K-x tipi) | Alt-çift pusulası (32.2): A-K-x'te Ax polar büyük, alt çift check; A-J-x'te lineer küçük | Aynı; Ax'in bir kısmı check *(kalibre et)* | (a) Kx/Qx pere döndü → hedef katman değişti; A-K-x'te QQ/JJ/TT tipi alt cebin bir kısmı büyük BLÖF adayı (caller'ın KJ/QJ/JT'sini bloklar), 99 ve altı bloklamaz → check. Sticky rakipte tüm Ax büyük |
| **İki yüksek bağlantılı kart / üç broadway** (K-Q-x, J-T-x, K-Q-T tipi) | Jam/check; J-T-x tipi dinamikte büyük — (c) turn jam çıplak çekilişi kayıtsız bırakır; üç-broadway'de (K-Q-T) küçük — (a) nut avantajı ince, büyük boy caller'ın iki-per/düz kesimine commit olmaktır *(kalibre et)* | Pot-boy polar (32.4). Flop jam yok; jam'e en yakın doku overcard'ların nut-gutshot aldığı J-T-x tipi: büyük boy + turn stack-off ağırlığı, sınırda *(kalibre et)*. Üç-broadway'de (K-Q-T) küçük — (a) caller'da AJ/JT/iki-per/set yoğun, nut avantajı ince *(kalibre et)* | (a) Nut avantajı ince: üst overpair'ler sende, caller'ın iki-per/düz kombinasyonları yoğun, overpair'i az (QQ hariç capped). İkinci-per yığını yarım pota tam call eder; domine ikinci per (QJ tipi) check |
| **Orta bağlantılı** (T-9-x, J-9-x, 9-8-7 tipi) | Jam/check (32.1) | Pot-boy; 9-8-7 tipi tam bağlantılıda check/küçük | (b) İki aralık da ıskalamaz. Overcard'ların gutshot'ı yok, düz kartı (Q) caller'ın KJ'sini tamamlar → dikkat. 9-8-7'de caller'da düz/iki-per/set BOL; TT/JJ büyük bete yalnız kendini yenen elden call alır (koruma satın alınamaz) |
| **Düşük kopuk** (6-5-2, 7-6-5 tipi) | Büyük / geometrik — SPR zaten commit ettirir, overpair erimeden value | Overpair kütlesi merged → küçük-orta, yüksek frekans; kırılgan overpair bir kademe büyük *(kalibre et)* | (a) Aralık/overpair avantajı sende, nut (set/iki-per: 22/55/66) CALLER'da → nut avantajı yok. Blöf: 99-JJ'yi bloklayan T9/J9 tipi. Bağlantılı düşükte (7-6-5) OOP çoğunlukla check, IP stab (32.5) |
| **Eşleşmiş ve mono** — "trips/flush kimde?" | Caller'da trips olası eşleşmiş (9-7-7 tipi): jam/check. Yüksek tek kartı senin aralığında eşleşmiş (A-J-J tipi): küçük. Mono (3-bettor OOP): A + iki düşük check ağırlıklı / küçük karışık; A-yok kopuk orta (T-6-5 tipi; A♠x nut-fd payı sende) çoğunlukla küçük; caller'ın yapılı non-nut flush + düz/kombo-çekiliş yoğunluğunun arttığı (T-9-8 tipi; A♠x nut-fd payı yine sende) check ağırlıklı, sınırda küçük dürtme; K-high mono'da nut-fd payı sende kalır ama caller'ın non-nut flush yoğunluğu + overpair'in değer kaybı yine check ağırlıklı tutar *(kalibre et)* | Trips-olası eşleşmişte yarım pot civarı *(kalibre et)*; gerisi aynı | Kayıtsızlık fiyatı (32.4): orta katman küçüğe tam call eder / hedef katman küçüğe zaten katlanır. Mono'da ayırıcı nut-flush sahipliği: A + iki düşükte senin flush'ın az, caller'ın suited Kx-Tx'i flush; A-yok kopukta suited Ax'lerin nut flush/fd; caller'ın yapılı flush/düz kütlesi büyüdüğünde (suited non-nut flush + düz/kombo-çekilişleri yoğun; A♠x nut-fd payı sende kalsa da) yalnız overpair equity avantajı kalır → potu büyütme. Yüksek broadway mono (A-Q-T tipi) sınırda *(kalibre et)* |

### 32.4 Boyut: kayıtsızlık fiyatı, polar/lineer, kırılgan value

**Boyu hedef katmanın kayıtsızlık fiyatı seçer.** Önce "hangi sınıfı katlatmak istiyorum?", sonra "o sınıf hangi boyda kayıtsız?" Caller'da trips olası eşleşmiş board'da (9-7-7 tipi) caller'ın orta katmanı (offsuit broadway, backdoor Kx/Qx, gutshot, alt cep) küçüğe çoğunlukla call eder, yarım pot civarında kayıtsızlığa yaklaşır; yüksek tek kartı senin aralığında olan eşleşmiş board'da (A-J-J tipi) küçüğe zaten katlanır. B11.3-EK'in flop ikizi *(kalibre et)*.

**İki-yüksek-kart board'da pot-boy polar — blöf ALT PERden gelir.** K-Q-6'da yarım pot orta çiftleri ve alt cepleri çoğunlukla içeride tutar; pot-boy alt cepleri katlatır, Qx'i sınıra iter *(kalibre et)*. **Value** = güçlü-kicker top pair + overpair; **blöf** = alt per + yüksek gutshot (AT/AJ) + fd; **check** = ikinci per ve alt cep — pot-boyla yalnız daha iyi ele izole olurlar. Alt per blöfü asız 6x'tir (65s/64s tipi, aralıkta varsa): 66/Q6/K6'yı bloklar, katlatmak istediğin 7-J ceplerini ve Ax'i bloklamaz. A6s ise katlanan Ax'i de devam eden AQ/AK'yi de bloklar — net etki sınırda. A-K-x aynı kova. Bet frekansını value sayısı tavanlar; fazla blöf adayı frekansı değil hangi blöfün seçildiğini değiştirir (en iyi blokerli) — A-K-6 ile A-K-4 farkı marjinaldir *(kalibre et)*.

**Kırılgan overpair kütlesi: boyu SPR ve erime seçer, nut kıtlığı değil.** 6-5-2'de 77-JJ'ye karşı caller iki-overcard + backdoor ile call eder, her overcard turn'ü tehdittir. Caller'ın nut'u mutlak sayıda az ama seninkinden fazla — setler (22/55/66) onda; sende aralık/overpair avantajı var, nut avantajı yok. Sığda boyun büyüklüğü SPR'nin zaten commit ettirmesinden + erimeden önce alınan value'dan gelir; suited Tx/9x'i pot-boyla katlatırsın. 100bb'de aynı kütle merged'dır → boy küçülür, frekans büyür; kırılganlık boyu bir kademe yukarı iter, AA/KK'yı değil — korunma ihtiyacına göre böl *(kalibre et)*. B18.1-EK "koruma sahte nedendir" burada sınır bulur: bu kütlede koruma "erimeden önce alınan value"dur — boyun tabanını SPR koyar, tavanını alt çift (32.2).

**Turn SPR:** pot-boy sonrası SPR <1 → turn jam/check; yarım pot sonrası SPR ~1.5 → turn yarım pot, river jam.

### 32.5 IP/OOP ve check-node hatları

**OOP 3-bettor'ın tam-aralık küçük bet'i meşrudur.** B18.5 "OOP havayla range-bet TUZAK" tek-raise'li PFR OOP içindir; aralık avantajlı 3-bettor kopuk A-high'da tam-aralık küçük atar; A-yok kopuk orta mono'da ÇOĞUNLUKLA küçük (bağlantı arttıkça, caller'ın flush yoğunluğu (non-nut dahil) büyüdükçe check payı büyür — nut-flush payı Axs ile çoğunlukla sende kalır — *kalibre et*).

**Turn-jam tehdidi.** Çekilişi kayıtsız bırakan flop boyu değil turn JAM tehdididir. Dinamik dokuda (J-T-x tipi) 40bb'de flop bet + turn jam çıplak fd / tek gutshot'ı sınırda call-off'a zorlar → büyük boy çalışır. 100bb'de tehdit ortadan kalkmaz, gecikir: turn jam overbet olur (turn SPR ≳1.5), caller çekilişini flop'ta commit olmadan taşır → tehdit yalnız pot-boy flop'la korunur; J-T-x tipinde pot-boy bunu yapar. Üç-broadway'de (K-Q-T) ise her derinlikte KÜÇÜK: nut avantajı ince (32.3 a), büyük boy caller'ın iki-per/düz kesimine commit olmaktır — otomatik-fold bloğunu ucuza topla, gerisini turn'e taşı *(kalibre et)*.

**Yüksek-kart bağlantılı board'da IP check-node: küçük stab az şey katlatır.** OOP 3-bettor'ın check aralığı nut'lar + korunmuş orta katman (ikinci per, orta cep çiftleri, gutshot'lı broadway) + give-up'lardır; küçük bet bu aralığın çoğunu katlatmaz, yalnız zaten en zayıf eller düşer. Boyu büyüt — yarım pot civarı *(kalibre et)*. Value = top pair; blöf adayı = orta perleri bloklamayan VE rakibin katlanan A-high bloğunu bloklamayan eller — A taşımayan düşük suited bağlantılı / gutshot; düşük Ax stab listesinin sonundadır (katlanan Ax'i bloklar; A runout'unda value-jam'e dönüşebilir ama A'nın düz tamamladığı iki-broadway dokuda (K-Q-x'e A → JT, Q-J-T'ye A) bu kapasite de düşer, *kalibre et*). Yüksek-equity açık çekiliş fold equity'ye muhtaç değildir: bedava realize eder, check-raise jam'e karşı kırılgandır → çoğunlukla check-back *(kalibre et)*.

**Düşük board'da IP stab (sen caller'san).** 7-6-5 / 6-5-4'te 3-bettor'ın offsuit broadway'i hiç, 9x/8x az, overpair üç sokak istemez → çoğunlukla check eder ve check aralığı zayıftır (overpair'lerin bir kısmı hâlâ bet). "Tuzak" diye check-back etme; küçük stab neredeyse tam-aralık — pratikte 3-bettor bu elleri teoriden de sık atar *(kalibre et)*. Sınır sorusu: **3-bettor'ın overcard/broadway kesimi bu dokuda düz çekilişi alıyor mu?** 8-7-6 / 9-8-7 (ve 9-8-2 / 8-7-3 gibi iki üst kartı ardışık olanlar — 9-8-2'de JT/QJ, 8-7-3'te T9/JT çekiliş alır) evet → seçici; 9-5-2 / 8-4-2 tipi gerçek kopuk hayır → serbest *(sınır board'ları kalibre et)*. B19.4'ün 3-bet-pot satırı, B18.5'in aynası: DÜŞÜK/bağlantılı board'da OOP 3-bettor çoğunlukla check eder, IP stab eder (A-high kopuk'ta tam-aralık, A-yok kopuk mono'da çoğunlukla küçük bet kalır).

### 32.6 Turn/river: polarlaşma ve kart-eşleme

Küçük flop bet'i call yedikten sonra turn çoğu kartta polarlaşır (büyük boy, orta katman check); düz/orta-per ekleyen turn'de lineer küçüğe döner *(kalibre et)*. **Blöf seçimi = bugünkü fold equity + yarınki value-jam kapasitesi** — orta perleri bloklamayan düşük Ax tipi unblocker öne çıkar; yüksek-equity çekiliş fold equity'ye muhtaç değildir, bedava realize eder. River: OOP, blöfü Ax-ağırlıklı IP'ye karşı AQ'yu FOLD, QJ'yi CALL eder — AQ blöfleri bloklar (B26.4).

**River overbet blöfünde kart-eşleme.** Blokeri yalnız "nut'u bloklar mı" diye seçme. Rakip bluff-catch kararını senin VALUE aralığınla eşleşen kartlara göre verir: flush GELEN board'da value'n orta kart + flush kartı taşıyorsa, o kartı tutan bluff-catcher (Ax + flush kartı) "eşleştirdim" diye CALL eder, tutmayan FOLD. Blöf adayının kritik özelliği rakibin premium bluff-catcher'ının kartını senin de taşımandır — "eşleşen" call sınıfını azaltır, kalanın katlanma payı çoğunlukla yükselir (fold equity artar, garanti değil). Alt cep + flush kartı bu yüzden flush gelen mono board'da doğal overbet blöfüdür; kaçan flush'ta flush kartı taşıyan blöfler çoğunlukla listenin sonundadır — rakibin zaten katlanacak ıskalamış çekilişini bloklarsın; bloklamayan aday varsa onu seç. Value iki boy: en üst Ax rakipteyse zayıf-orta Ax küçük, flush+ büyük. B11.2-EK'in saldırı yüzü *(kalibre et)*.

### 32.7 Kalibrasyon

*(kalibre et: kendi solver'ında 3-bettor düğümü — jam frekansı ve check sınıfı (40bb T-9-x); 100bb J-T-x'te büyük boy / turn stack-off payı; alt-çift bet/check EV farkı (A-K-x vs A-J-x); kayıtsızlık boyu (9-7-7); iki-boya indirmenin EV kaybı (B27.3); 100bb A-high top pair turn/river kontrol oranı; düşük kopuk board'da 100bb overpair boyu; IP check-node boyu. Saha: son 30 3-bet potunda caller'ın küçük bete fold oranı.)*

### 32.8 Cheat kartı

| Konu | Kural |
|---|---|
| **Tez + aralık** | Boyu doku tek başına değil, ıskalayan blok + el sınıfı seçer; 3-bettor'ın Ax'i oran olarak yoğun ama sınıf olarak dar/uç-ağırlıklı, caller'ınki orta-sınıf, geniş ve domine; iki fold bloğu: offsuit broadway + suited Kx/Qx/Ax çöp. Kök hata şişirenindir: lisans SPR + dokuya bağlı |
| **Jam ağacı** | SPR ≲2 (30-45bb) orta-bağlantılı: jam ya da check, ara boy yok. SPR ~3-4 ve üstünde (100bb'de ≳4-5) flop jam yok; en bağlantılı yüksek board'larda (overcard'lar nut-gutshot alıyorsa) büyük boy + turn stack-off ağırlığı, bir kademe altı çoğunlukla pot-boy *(hangileri: kalibre et)* |
| **100bb A-high** | Top pair çoğunlukla 2 sokak + river kontrol (atlanan sokak flop değil); wheel A-high'da check payı artar, küçük-bet sıklığı düşer — caller'ın wheel/set payı derinlikte değerlenir *(kalibre et)* |
| **Alt-çift pusulası** | TT-QQ bet istiyorsa lineer küçük; istemiyorsa polar büyük + alt çift check (frekans yüksek kalır — pusula boyu, aralık avantajı frekansı seçer) — alt çift tavanı, SPR tabanı koyar |
| **İki yüksek kart** | Çoğunlukla pot-boy polar *(kalibre et)*: value ≈ TPTK + overpair; blöf adayı ≈ alt per (showdown zayıf, cepleri bloklamaz) + yüksek gutshot; ikinci per / alt cep ağırlıkla check |
| **Düşük kopuk** | Aralık/overpair avantajı sende, nut caller'da; sığda büyük (commit + erime), 100bb'de merged → küçük-orta, kırılgan overpair bir kademe büyük *(kalibre et)*; 9-8-7 tipi check/küçük |
| **Eşleşmiş / mono** | Caller'da trips olası (9-7-7) → yarım pot civarı — nut onda ama orta katmanı küçüğe tam call eder, kayıtsızlık fiyatı (32.4); yüksek tek kart sende (A-J-J) → küçük, hedef katman küçüğe zaten katlanır; mono'da "nut flush kimde?" — A+düşük check ağırlıklı/küçük karışık, A-yok kopuk orta çoğunlukla küçük, caller'ın yapılı flush/düz kütlesi büyüdüyse (T-9-8 tipi; nut-fd payı yine sende) check ağırlıklı |
| **Üç broadway** | Her derinlikte küçük (nut avantajı ince — caller'da iki-per/düz yoğun, büyük boy onların kesimine commit olmaktır; kalibre et). Büyük boy / jam ağacı dinamik yüksek dokunun (J-T-x tipi): sığda flop bet + turn jam çıplak çekilişi kayıtsız bırakır, 100bb'de pot-boy |
| **IP check-node** | Yüksek/broadway board'da küçük stab verimsiz; yarım pot civarı, blöf adayı A taşımayan düşük suited bağlantılı / gutshot (rakibin katlanan A-high bloğunu bloklamaz); düşük Ax stab listesinin sonunda *(kalibre et)* |
| **Düşük board stab** | Bağlantılı düşükte (7-6-5 tipi) 3-bettor'ın ıskalayan broadway bloğu + overpair'in bir kısmı check eder → check-node'da küçük stab; kopuk düşükte (6-5-2) varsayılan c-bet (Düşük kopuk satırı). "Overcard kesimi düz çekilişi alıyor mu?" evetse seçici |
| **River overbet blöf** | Rakibin premium bluff-catcher'ının kartını taşı; alt cep — flush kartı yalnız flush GELEN river'da (kaçan flush'ta flush kartlı blöf listenin sonunda) |

### 32.9 Drill (5 soru)

1. 40bb, SB 3-bet, BTN call, flop T♠9♦4♣, elin A♠T♦. Hat?
   → **Jam.** Sığ SPR + orta-bağlantılı board + aralık avantajı: geride-ama-equity'li elleri katlatırsın; ara boy kopya (32.1).
2. Aynı el, aynı board, 100bb. Ne değişti?
   → **Jam yok; pot-boy/check.** 100bb'de flop jam çoğunlukla sınıf değil (SPR ≳4-5; ~3-4'te de iki-boy ağacı). T-9-x'te AK/AQ'nun nut-gutshot'ı yok, Q'da caller'ın KJ'si düz → pot-boy. Büyük boya en yakın doku, overcard'ların nut-gutshot aldığı J-T-x tipi board'dur *(kalibre et)* (32.3).
3. 100bb, A-K-4 rainbow'da TT: bet mi check mi? A-J-4'te?
   → **A-K-4 check, A-J-4 küçük bet.** Kx seni geçmiş → alt çift check, aralık polar; A-J-x'te Kx/Qx persiz overcard → lineer küçük (32.2).
4. 100bb, K-Q-6 rainbow, elin 7♥6♥. Blöf mü, hangi boy?
   → **Pot-boy blöf adayı.** Asız 6x: 6, 66/K6/Q6'yı bloklar; katlatmak istediğin 88-JJ ceplerini bloklamaz (7, 77'yi yarı-bloklar — ihmal edilebilir); Qx check'te kalır (32.4).
5. 3-bet'e call ettin, 100bb, flop 7-6-5 r, 3-bettor check, elin K♣J♦. Stab? 8-7-6 olsa?
   → **7-6-5 küçük stab; 8-7-6 seçici.** 7-6-5'te 3-bettor'ın check aralığı zayıf; 8-7-6'da overcard/Tx kesimi düz çekilişi alır (32.5).

*Kök hata bağı: B4 hatanın frekansını düşürür, B18 tek-raise'li flop'u, B11 şişmiş potun icrasını verir; B32 şişmiş potu KURANIN hatlarını verir. Kök hata değişmez ve şişirenindir: lisans sığ SPR + nut avantajlı dokuyla sınırlıdır, derinde, nut avantajının eridiği dokuda tek perle dokudan bağımsız stack-off eden 3-bettor kök hatayı yapar; capped caller'ın tek peri zaten bluff-catcher'dır. Guard: boyu board etiketine değil "hangi blok ıskaladı + alt çiftim bet istiyor mu + top pair'im kaç sokak taşıyor"a sor.*

---

## Bölüm 33 — Blind-vs-Blind: Limp, Raise ve Jam'in Derinlik Katmanları

*Kitapta BvB satırı yoktu: B4.3, B5.1 ve B23.12 kenarlarına dokunur, SB limp'inin mekanizmasını hiçbiri vermez. Baseline: ante'li 8-max, 30–60bb, ICM yok. B28.13'ün limp rejimi kelle motoruyla çalışır; buradaki limp SPR ve polarizasyon motoruyla — "limp = kelle avı" ezberini BvB'ye taşıma.*

### 33.0 Tez

> **BvB masanın en geniş aralıklı ve derinlikle en çok şekil değiştiren düğümüdür. SB OOP, BB pozisyonda. Ezber "limp = zayıf, raise = güçlü" değil, "hangi motor çalışıyor"dur.**

SB'nin limp'i derinlikle tek yönlü değişmez: ham limp payı HU'daki gibi jam/fold eşiğine kadar sığlaştıkça büyür, kabaca 12–15bb altında jam'e devrilerek küçülür *(kalibre et)*; limp'in İÇİ — limp-reraise/limp-jam dilimi — çoğunlukla U çizer *(kalibre et)*: derinde premium'un bir diliminin limp-reraise tuzağı, ortada incelir (ince premium kapağı + blocker blöfü), sığda blocker limp-jam'i. İki kolun içeriği farklıdır, her kolun motoru ayrıdır. HU-BTN'nin (B31.1) pozisyon-aynasıdır: orada limp IP'den yapılır, burada OOP'tan — oradaki "limp = ucuz flop görme" motoru burada çoğunlukla "OOP raise'in çağrılma dalından kaçınma + SPR kapanı" motoruna dönüşür. Gerekçe değişir ve eğri de kayar: yön aynıdır ama aynı derinlikte OOP SB, IP HU-BTN'den çoğunlukla daha fazla limp'ler. Raise-fold'un preflop maliyeti iki tarafta aynıdır; fark raise'in çağrıldığı ya da 3-bet yediği dalda çıkar: BTN raise'le pozisyonunu parayla büyütür (çağrılınca IP oynar), SB'nin raise'i çağrılınca büyümüş potta OOP kalır, 3-bet yediğinde fold pahalı, call pozisyon dışıdır — limp ise OOP'ye ucuz flop ve limp-reraise'le SPR kapanı verir. Fark derinde açılır, sığda kapanır *(kalibre et)*.

### 33.1 Derinlik katmanları — U eğrisi ve üç motor

| Katman *(kalibre et)* | Motor | SB premium | SB limp'in içeriği |
|---|---|---|---|
| **Derin** (kabaca 50–60bb üstü; 45–60bb orta→derin geçiş bandı) | SPR: limp-reraise kapanı premium'un bir dilimi için; gövde raise-first'te *(kalibre et)* | Karışık: çoğunlukla RAISE-first (aralık capped kalmaz), bir dilimi LIMP → iso'ya büyük reraise *(kalibre et)* | Derinleştikçe daralır ama sıfıra inmez; HU-BTN'e göre daha geniş ve merged (raise-fold'dan kaçan orta eller); limp-reraise dilimi korunur: premium'un bir kısmı + birkaç blocker blöfü *(kalibre et)* |
| **Orta** (kabaca 30–50bb) | BB iso'su polarize → limp-reraise hedefi dar | Çoğunlukla RAISE; ince limp-reraise kapağı | Limp-call gövdesi (suited/bağlı/küçük çift/zayıf Ax — iso'ya karşı fiyatla devam) + limp-fold kuyruğu (çöp) + küçük limp-reraise dilimi (ince premium kapağı + blocker blöfü, non-all-in); tuzak dilimi dipte |
| **Sığ** (kabaca 20–30bb) | BB'nin raise üstü jam'i ucuz → raise-fold pahalı | Büyük çift RAISE (yine); AK sınırda | Limp-call gövdesi (suited/bağlı/küçük çift/zayıf Ax — iso'ya karşı fiyatla devam) + limp-fold kuyruğu (çöp) + limp-jam dilimi (blocker Ax/Kx + küçük çift) buraya döner — derin kolun premium tuzağı değil, yarı-blöf; limp payı en kalın |

Katmanı efektif bb/SPR seçer; üç soru katmanın İÇİNDEKİ eşikleri kaydırır ve geçiş bandında (45–60bb) hangi tarafta oynayacağını belirler: "BB limp-reraise'ime suited elle call eder mi?" (derin) · "BB limp'ime çöple mi, suited elle mi iso ediyor?" (orta) · "BB raise'ime jam'ler mi?" (sığ). Derinleştikçe SB limp payını küçültür, raise-first'e kayar — premium'un gövdesi raise-first'te kalır, aralık capped olmaz; kalan limp'in içinde limp-reraise payı büyür — OOP derin potu hem raise'le hem kapanla büyütür, kapan payı derinlikle artar *(kalibre et)*. Sığlaştıkça limp kalınlaşır: iyi el raise-ve-al (blind+ante stack'e oranla büyük ödül), gerisi limp / limp-jam. Dördüncü katman — çok sığ (kabaca ≤15bb): raise-fold yok, 3-bet = jam, premium raise-call/jam, limp = limp-jam ağırlıklı, çöp fold — B3/B30'un jam-fold doktrinidir, bu bölümün dışında kalır *(kalibre et)*.

> **Pozisyon aynası (B31.1 ↔ B33.1).** Aynalanan pozisyondur, eğri değil. HU-BTN limp'i IP'dir, iso'yu OOP rakip yapar; BvB SB limp'i OOP'dir, iso'yu IP rakip (BB) yapar ve IP iso derinlikle çoğunlukla büyür. "Derinleştikçe raise, sığlaştıkça limp" yönü iki yerde de aynıdır; seviye ve içerik kayar: OOP raise'i çağrılınca büyümüş potta pozisyon dışı kaldığı için SB aynı derinlikte HU-BTN'den çoğunlukla daha fazla limp'ler — fazlalık raise-fold'dan kaçan orta ellerdir, limp dilimi daha geniş ve daha merged olur; limp-reraise dilimi korunur (premium'un bir kısmı + birkaç blocker), oransal payı HU-BTN'e göre sınırda *(kalibre et)* → eğri çoğunlukla düzleşir, derin kolda limp sıfıra inmez. Ters dönen yön değil; değişen motor ve eğrinin seviyesidir. HU için B31.1, BvB için burası.

### 33.2 SB'nin eli: derinde limp-reraise, sığda limp-jam

**Derin: premium'un bir dilimi limp'ler.** Gövde raise-first'te kalır (aralık capped olmaz); tuzağa giden dilimi kalibre et. Mekanizma: SB raise + BB call, flopa yüksek SPR'yle gider; BB'nin orta suited connector'ı üstüne vuran flopta tek per yakalar, kolayca uzaklaşır. Limp ise BB'yi raise'e çoğunlukla 3-bet etmeyen ama limp'i çoğunlukla izole eden **orta bant**la (orta suited connector, offsuit broadway) pozisyona davet eder; büyük limp-reraise *(kalibre et)* SPR'yi birkaç kat düşürür, aynı flopta aynı tek per çoğunlukla stack-off'a gider. EV çöpü katlatmaktan değil, o banttan gelir. Reraise'i value-ağırlıklı tut: hedef bant yapışkandır, yapışkanlık value'ya öder, blöfe değil.

**Kova inşası.** Her eli limp sonrası iso'ya vereceği cevaba göre koy: limp-fold (en zayıf offsuit, en düşük suited) · limp-call (iso'ya rahat devam eden QT/QJ tipi, suited orta broadway) · tepe (limp-reraise ya da raise). Kovaya sığmayan grup — orta Qx/Jx offsuit, boşluklu orta suited — **raise-fold'un doğal malzemesi**dir. Limp aşağıdan yukarı kurulur: önce raise-EV'si en düşük offsuit'ler, sonra "oynanabilir ama 3-bet yemek istemeyen" kalkan katmanı (düşük suited Kx/Qx, boşluklu düşük suited). Kural: **suited limp'ledinse tek iso'ya çoğunlukla fold yok** — en düşük suited istisnadır *(kalibre et)*; onun dışında fold edeceksen raise-fold et. İki sınır eli 50/50 karıştırma: iyisi raise, zayıfı limp. OOP olduğun için kalkan katmanı HU-BTN'den kalın olmalı *(kalibre et)*.

**Sığ: büyük çift raise'de kalır** *(kalibre et)*. BB limp'e sık ve küçük iso eder; limp-jam'i call ettiği aralık, raise'ime jam'lediği aralıktan dardır. Raise, BB'nin limp-jam'i call etmeyeceği elleri de jam'e getirir (jam aralığı > call aralığı) — büyük çift limp-jam'lerse o geniş çağrıyı kaybeder. AK sınırdadır: raise de olur, iso-üstü jam de (aşağıda). Limp-jam malzemesi en zayıf offsuit Ax (tekerlek kicker'lı), alt-orta offsuit Kx ve küçük çift *(sınırlar: kalibre et)*: iso'nun çöpünü katlatır, BB'nin call aralığını bloke eder, çağrılınca canlı equity taşır.

**İso üstü jam.** Soru "elim güçlü mü" değil, "kim call eder, onu domine ediyor muyum". Büyük offsuit As (AJ/AQ; AK sınırda, iki yön de olur) altındır: iso'daki orta suited As / güçlü broadway sınıfı hem iso eder hem call eder, postflop oynanabilirliği düşük. Suited orta broadway (KTs/KQs) tersi: jam'lersen sadece üstün öder, domine ettiğin Kx katlanır → limp-call (ortada zaten raise, 33.3) *(sınırlar: kalibre et)*. Havuz iso'ya/reraise'e teoriden çok jam'ler *(kalibre et)* → jam'e katlayacağın orta elle non-all-in reraise yapma.

### 33.3 Orta stack: BB'nin iso'su polarize olur — premium limp hedefi daralır, gövde raise'e kayar ("trap için fazla derin, reraise için fazla sığ")

Derinde BB limp'e depolarize iso eder; büyük çoğunluğu limp-reraise'e call eder. Orta derinlikte aynı BB aralığı ikiye böler: en güçlüleri reraise üstüne JAM'ler, offsuit çöpü iso-fold eder, **ortadaki suited elleri iso etmeyip check eder**. Limp-reraise'in hedefi daralır — reraise'e çoğunlukla ya jam gelir ya fold; limp-call ise potu premium için çok küçük bırakır. Aynı sebeple KQs/QJs/QTs ortada çoğunlukla RAISE'e kayar: raise'e fold etmeyen ama limp'i iso etmeyen o "check eden suited orta" banda karşı para koymak zorundasın; limp'lersen bedava flop görür. Ortada limp-reraise dilimi küçülür ama value+blöf karışık kalır: birkaç non-all-in blocker Ax/Kx blöfüne kapak olarak ince bir premium dilimi (en büyük çiftlerin bir kısmı) limp-reraise'de kalır — aksi halde BB'nin reraise üstü jam'i sınırsızlaşır; premium'un gövdesi raise'e kayar *(kalibre et)*. Limp-jam bu derinlikte overbet olur, sığ katmana aittir (33.2). Offsuit büyük As fast-play; daha zayıf suited broadway/bağlantılı (QTs altı: JTs, J9s, T9s tipi) oynanabilirlik hattında — sınır karışık *(kalibre et)*.

### 33.4 BB'nin limp'e yanıtı: iso, iso-jam — ve SB'nin jam'e call'ı

**İso.** Her elle aynı boyla refleks iso etme. En pahalı grup offsuit broadway'lerdir (KJo/QTo): iso etmek doğal gelir ama limp-reraise'in hedefi tam bu banttır. Düşük suited eller ucuz iso'dur: reraise'e katlanır, iso tutarsa pozisyonla oynar. Rakibin limp-reraise sıklığı boyu ve genişliği seçer: az ve küçük reraise eden havuza DAHA KÜÇÜK ve DAHA GENİŞ iso *(kalibre et)*; yetkin limp-reraiser'a offsuit broadway iso'larını kırp. Ante potu şişirdikçe hem limp hem iso ucuzlar — iso genişliği ante'siz ezberden geniştir *(kalibre et)*. IP-BB iso'su HU-OOP iso'sundan (B31.4) belirgin geniştir; iki ezberi karıştırma.

**İso-jam** *(~30bb, kalibre et)*. Malzeme 33.2'nin aynası: K5o/K6o tipi blocker (domine EDEN Kx'leri katlatır, çağrılınca yaşar) ve orta suited connector (non-all-in iso'ya limp-jam yemek istemez → direkt jam). Suited orta broadway jam'lenmez. Jam preflop all-in olduğu için pozisyondan bağımsızdır; non-all-in iso genişliği pozisyona bağlıdır.

**SB'nin call'ı — limp'e jam geldi.** All-in'de yalnız aralığa karşı ham equity + pot oranı sayar; "domine" sezgisi ham equity'yi yenmez. BB'nin jam dokusu Ax/çift ağırlıklı ve dar (value-yoğun) ise canlı orta suited connector (98s tipi), domine edilebilen zayıf suited Ax / offsuit broadway'den daha iyi call adayıdır; doku broadway ve connector'la genişse yüksek kart equity'si öne geçer, zayıf Ax / offsuit broadway sınırda call'a döner — eşik pot-oddsa ve derinliğe bağlı *(kalibre et)*. Havuz jam'i zayıf offsuit Ax'ten başlar, suited connector'a geç gelir *(kalibre et)* → havuza karşı connector call'ı görece iyi, offsuit broadway call'ı görece kötü; dar value-yoğun jam'e karşı iki sınıf da çoğunlukla fold. Limp-call tuzağı yalnız jam aralığını DOMİNE eden elle: K7s civarı ve üstü olabilir *(kalibre et)*, K2s olamaz — "gitmesi sorun değil ama domine etmiyor" elleri kendin jam'le. Call eşiği her bb sığlaştıkça yaklaşık bir kademe genişler *(kalibre et)* — tek referans ezberle, kaydır.

### 33.5 Popülasyon sapması — üç exploit

Havuz derinde limp'e teorinin çok altında iso eder ve SB raise'ine boydan bağımsız aynı oranda katlanır *(kalibre et)* — fiyat okumuyor, "bu eli oynarım/oynamam" diyor. Üç sonuç:

1. **SB'den derinde fold yok** — dip aralık cezalandırılmıyorsa her el oynanır.
2. **Limp sonrası OOP en zor oynanan dip çöp küçük raise-fold'a döner** *(kalibre et)* — fold oranı boydan bağımsızsa pahalı blöfün anlamı yok; aynı sapma value raise'ini büyütmeyi de öder. Yalnız bilinmeyen/pasif rakibe; iyi oyuncuya kova mantığı aynen.
3. **Value limp-reraise'i DARALT** — havuz güçlü elleri teoriden sık, zayıfları seyrek iso eder → limp-reraise'in karşısındaki devam aralığı da güçlü → yalnız premium (kabaca QQ+/AK, kalibre et) reraise-value. KQs/AJo/ATs sınıfı bu aralığa domine olur, reraise value değil ince blöf olur → limp'ten çıkar, açılış raise'ine taşı (limp seyrek iso yediği için tuzak da çalışmaz); limp'lendiyse limp-call kalır, reraise değil.

BB aynası: havuz derinde pasif → küçük potları sen kap, image'i orada kur; büyük pot geldiğinde ödeme o image'den gelir.

### 33.6 Asimetrik ve karışık stack

ChipEV/efektif-stack mekanizması; kelle yoktur, B28 cover mantığı buraya taşınmaz. Ortak ilke: rejam efektif stack'le fiyatlanır — derinin rejam'i ne ucuzlar ne pahalanır, kısanın rejam'i tüm stack'idir. Spotlar açıcı-vs-arka içindir; BvB yansıması: efektif stack kısanınkidir — kısa SB 20bb chart'ıyla, derin BB ona karşı aynı derinlik mantığıyla oynar; derin SB kısa BB'ye küçük open yerine open-jam düşünür.

**Kısa açıcıya karşı derin IP, arkada derin blind'lar → call DARALIR, çoğunlukla küçük commit-3-bet.** Kısa (~10–15bb, kalibre et) açtı, elin orta-iyi. Call'ı iki şey daraltır: kısayı commit eden 3-bet çok ucuz olduğu için flat'i domine eder; derin blind'lar ise non-all-in squeeze ile flat'i ezer ve kısaya karşı equity payını paylaşır. Kısanın aralığı polarizedir (nuts + raise-fold çöpü); onu commit eden küçük 3-bet *(kalibre et)* çöpü katlatır, value'suna karşı suited As/suited broadway'in equity'si yeter. Kısanın cevabı çoğunlukla fold, suited As'la jam, call neredeyse yok. Pozisyonda sınırda eller call kalır *(kalibre et)*. Hipotez: havuz burada çoğunlukla over-call eder *(showdown'la doğrula, kalibre et)* — over-call ediyorsa sapma senin lehine.

**Kısa sensen, masa derin → RFI'ı sınırda GENİŞLET.** ~20bb *(kalibre et)* açıyorsun, arkadakiler derin. Rejam onlara yalnız efektif ~20bb'ye mal olur — ICM yokken derinin rejam'i ne ucuzlar ne pahalanır; iştahı düşüren, derinin pozisyonda call'ı ve postflop'u tercih etmesi + birden çok derin arkadayken rejam'cinin cold-4-bet/call tehdidiyle sıkışmasıdır *(kalibre et)*. Call'a kayan masa küçük çift, küçük suited connector, orta suited Kx/Qx'e realize alanı açar → open olarak EV kazanır. Masa derinken (ör. turnuva başı) sık düşer. Efektif ~12bb'ye inince call seçeneği kalkar, derinin efektif-stack fiyatlı reshove'u küçük raise-fold'u yaşatmaz → jam-or-fold (B30.0-EK).

**Derin sensen, arkada kısalar → open daralt, open-JAM ekle.** Küçük open kısanın jam'ine açık → düşük suited Kx, boşluklu suited, zayıf offsuit broadway düşer; orta/küçük çift, suited Ax, suited broadway sınıfı open-jam olur *(sınırlar: kalibre et)* — open-jam kısanın fold-equity'li rejam'ini siler, raise-fold'u ortadan kaldırır; bedeli domine rejam'lerin value'sunu bilerek feda etmektir. O yüzden aralığın tepesi (büyük çift, büyük offsuit As) hâlâ min-raise-call oynar: domine rejam'i (domine offsuit broadway, orta Ax) katlatmak değil, indüklemek ister. Domine olabilen offsuit broadway min-raise'de kalır — kısa jam'lerse fold, call ederse pozisyonda oynanır *(kalibre et)*. Havuz kısa olarak açışa karşı call'ı neredeyse hiç, rejam'i tek hat olarak kullanır *(kalibre et)*.

**Derin blind'lar + kısa açıcı → call rejimi ve küçük 3-bet-fold geri gelir.** BTN/SB/BB birbirine derin (~35–45bb), açıcı kısa (~20bb) *(kalibre et)*. Kısayı commit eden 3-bet artık pahalı (açıcı ~20bb → commit boyu flat'i domine etmez) ve blind'lar BTN'nin call'ı üstüne ucuza jam'leyemez → BTN call aralığı genişler; jam "domine çağrı bulan" ellere (büyük offsuit As, güçlü suited broadway) + ORTA çiftlere iner *(kalibre et)* — küçük çift jam'ini arkadaki her büyük çift öder. Non-all-in 3-bet KÜÇÜK boy ister *(kalibre et)*: büyük boy kısaya bedava 4-bet-jam fiyatı verir. 3-bet-fold = domine olabilen offsuit eller; 3-bet-call = suited As ve equity'si yeten suited broadway *(sınırlar: kalibre et)*. SB kısa açıcıya 20bb chart'ıyla değil, BB'ye karşı 40bb mantığıyla oynar. SB call ettikten sonra BB'nin squeeze boyu kısanın kalan stack'ine göre seçilir: kısayı fiilen commit eden bir boy (yaklaşık BB stack'inin yarısı, *kalibre et*) 4-bet-jam fold-equity'sini kaldırır ve SB'yi tuzağı olmayan call aralığıyla jam-ya-fold'a zorlar. Kısa için call fiilen stack-off'tur: küçük çift fold, orta çift sınırda; stack-off eşiği büyük çift + AK, güçlü suited broadway sınırda *(eşikler: kalibre et)*.

### 33.7 Kalibrasyon

Stratejiyi SEGMENT'lerde tut: derin / orta / sığ blok. Blok içinde her bb değişimine tepki verme; katman geçişini efektif bb/SPR tetiklesin (raise-fold/limp-fold'un stack'e maliyeti rakibin daha önce jam'lemiş olmasına bağlı değil), gözlem katman İÇİ eşikleri kaydırsın (limp-jam alt sınırı, jam'e call genişliği, iso boyu) — chart etiketini de gözlemi de bekleme (çoğunlukla). Havuz derinde çok az 3-bet, orta-sığda çok az jam eder *(kalibre et)* — iki katmanı neredeyse aynı oynar. Derin fazda küçük-potlu agresyon ucuzdur → ilk ellerde tester at (raise'e 3-bet geliyor mu, iso'ya hep fold mu), okumayı buradan al, parayı sığ fazın jam kararlarında kullan. Rakip erken fazda agresif/yapışkansa sığ fazda limp-jam ve jam-üstü call eşiklerini ona göre kaydır.

| Slot | *(kalibre et)* |
|---|---|
| Katman eşikleri | derin / orta / sığ bb sınırları — kendi solver'ında |
| Limp-reraise ve iso boyu | derinde SPR'yi kaç kat düşürüyor; az-reraise havuza küçük+geniş iso |
| Limp-jam / iso-jam / jam'e call | blocker Ax/Kx alt sınırı, küçük çift eşiği, referans bb + kademe/bb kaydırma |
| Commit-3-bet, kısayı commit eden squeeze boyu (33.6'nın çok-yönlü spotu; saf BvB'de squeeze yok) | kısa açıcının stack'ine oran |

### 33.8 Cheat kartı

| Konu | Kural |
|---|---|
| **Katman seçimi** | Efektif bb/SPR seçer; üç soru katman-içi eşikleri ve geçiş bandını (45–60bb) ayarlar: reraise'ime suited call var mı (derin) / limp'ime kim iso ediyor (orta) / raise'ime jam var mı (sığ) |
| **Derin premium** | Çoğunlukla RAISE-first (aralık capped kalmaz); bir dilimi LIMP → iso'ya büyük reraise tuzağı *(kalibre et)*; küçük raise potu/SPR'yi yüksek bırakır, büyük reraise SPR'yi düşürür → reraise value-ağırlıklı |
| **Orta premium + KQs/QJs** | Çoğunlukla RAISE — BB iso'su polarize, limp-reraise hedefi dar; ince premium kapağı + blocker blöfü limp-reraise'de kalır *(kalibre et)*; limp-jam sığ katmana ait |
| **Sığ premium / limp-jam** | Büyük çift RAISE (jam aralığı > limp-jam'e call aralığı); AK sınırda — raise ya da iso-üstü jam; limp-jam malzemesi en zayıf offsuit Ax/Kx + küçük çift *(kalibre et)* |
| **Suited limp** | Tek iso'ya çoğunlukla fold YOK (en düşük suited istisna, kalibre et) — fold edeceksen raise-fold et |
| **Raise-fold / limp-fold malzemesi** | Kovaya sığmayan orta Qx/Jx offsuit, boşluklu suited → raise-fold; sınırdaki iki elden iyisi raise, zayıfı limp — karıştırma yok |
| **BB iso** | Offsuit broadway pahalı, düşük suited ucuz; az-reraise havuza küçük+geniş; ante genişletir; HU-OOP iso'dan geniş |
| **İso üstü jam** | Domine çağrı bulan (büyük offsuit As); suited orta broadway jam'lenmez |
| **Limp'e jam geldi** | Ham equity + pot oranı karar verir *(kalibre et)*: Ax/çift-ağırlıklı dar (value-yoğun) jam'e canlı orta suited connector iyi, domine zayıf Ax / offsuit broadway kötü; geniş jam'e yüksek kart öne geçer; tuzak yalnız jam aralığını domine eden el |
| **Havuz** | Derinde SB fold yok; dip çöp küçük raise-fold; value limp-reraise'i DARALT (yalnız premium), KQs/AJo/ATs açılış raise'ine |
| **Kısa açıcı, sen derin IP** | Call DARALIR — çoğunlukla küçük commit-3-bet ya da fold; pozisyonda sınırda eller call kalır |
| **Derin blind'lar + kısa açıcı** | Call rejimi + küçük 3-bet-fold; kısayı commit eden squeeze boyu (≈BB stack'inin yarısı, kalibre et) SB'yi jam-ya-fold'a zorlar, kısa için call = stack-off |

### 33.9 Drill (5 soru)

1. **BV1.** Derin BvB *(kalibre et; kabaca 70bb+)*, SB'de AA. Gövde raise-first'te kalırken hangi dilim limp-reraise tuzağına gider, neden aralık capped kalmamalı? BB'nin hangi bandı raise'e call, limp'e iso eder — EV oradan nasıl gelir?
2. **BV2.** ~40bb, SB'de KQs. Limp mi raise mi? BB'nin iso aralığı bu derinlikte nasıl bölünür ve bu neden kararı belirler?
3. **BV3.** ~25bb, SB'de A3o. Limp-call/limp-fold mu, limp-jam mi, raise-fold mu — fold masada yok? AA olsaydı hangi hatlar açık kalır; A3o'nun limp-jam'i neden sınırda bir hattır ve ağırlıkla fold-equity'ye yaslanır (çağrılınca yalnız canlı equity), raise-fold'u BB'nin jam sıklığı nasıl fiyatlar?
4. **BV4.** SB'den limp'ledin, BB ~15–20bb ile jam'ledi *(kalibre et)*. 98s ve KTo — jam dokusu Ax/çift-ağırlıklı dar (value-yoğun) bir aralıksa hangisi call; doku broadway'le genişlerse karar nasıl döner? Ham equity + pot oranından çık.
5. **BV5.** SB ~12bb min-raise açtı, sen BB'de derinsin, elinde ATs. Call mı jam mı? Kısanın polar aralığına (nuts + raise-fold çöpü) karşı jam çöpü katlatıp value'suna equity taşır; call açıcıyı her flopta commit bırakır — hangi hat, neden? (33.6'nın derin-IP mantığının BvB yansıması.)

*Kök hata bağı: BvB'de kök hata preflop'ta doğar — derinde premium'u raise edip OOP şişmiş potta tek per'le stack-off etmek (raise'in kendisi değil, per'e yapışmak hatadır), ya da sığda "limp = zayıf" ezberiyle raise-fold'u BB'nin jam'ine hediye etmek. B31.1'in pozisyon-aynası, B5.1 ve B17.3'ün şartlandırması; postflop yapışkanlık B23.12'ye bağlanır.*
