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

### 1.6 Algılanan blöf ≠ gerçek blöf — blöfü rakibin "bloklıyorum" listesinin DIŞINDAN seç

1.1 blokeri rakibin en güçlü ellerine karşı seçer. River jam'inde ikinci bir liste devreye girer: rakibin SENİN blöf sınıfın sandığı eller. K-Q-T-3-x hattında üç sokak bet + river jam: OOP'nin dengede call etmesi gereken zayıf Q9/T7 tipi eller "bu adam AT/AQ ile blöfler" diye T/Q'yu bloker sayar ve fold'a eğilir (blöfü bloklıyorum → aralığı value-ağır → fold); A5s/A4s tipi gerçek blöfü ise hiçbir catcher bloklamadığı için bu fold'lar blöfünü öder.

İki liste tut: (a) rakibin blöf sandığı sınıf; (b) gerçekten blöflediklerin. (b)'yi (a)'nın dışından kur — onun "bloklıyorum" fold'u blöfünü, "bloklayamıyorum" call'ı value'nu öder; AT/AQ'yu blöfe daha az çevir. 32.6'nın kart-eşleme kuralının aynası: orada rakibin premium bluff-catcher'ının kartını TAŞIRSIN, burada onun bloker sandığı kartı TAŞIMAZSIN. Havuza karşı çoğunlukla; heuristiği sayan reg'e karşı sınırda *(fold oranı: kalibre et)*.

> **Gerçek blöf aralığın, rakibin bluff-catch heuristiğinin dışında durur.**

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

### 4.2-EK 100bb ante'li blind düğümü: SB 3-bet orta boy + yüksek equity, BB büyük — ve SB flat'in gerçek yeri

4.2'nin "OOP 4×" satırı iki blind'e tek boy verir; 100bb ante'li MTT'de ikisi ayrışır *(çarpanlar: kalibre et)*:

- **SB 3-bet'i orta boy.** Arkasında BB var ve BB'nin SB 3-bet'ine cevabı pratikte 4-bet-ya-fold — iki aralıkla yüzleşen SB büyük boya gitmez; orta boy BB'nin orta çiftlerini/zayıf suited broadway'lerini zaten ucuza katlatır. Malzeme: aralığın tepesi + T9s tipi yüksek-equity suited bağlantılar + orta çift mix *(tam liste: kalibre et)*. Aralığın dibi — J7s tipi düşük-kicker suited — 3-bet DEĞİL, düşük equity'yle para zorlanmaz; ATo/KJo tipi offsuit broadway ise flat değil 3-bet-fold mix'ine gider *(kalibre et)*.
- **BB 3-bet'i büyük.** Tek aralığa (BTN) karşı AK/AQ/KK–TT tam boyu kullanır; 5–6× arası EV yakın — havuz boydan görece bağımsız (inelastik) aşırı katlanıyorsa blöfü küçük boyla ucuza, value'yu büyük boyla almak çoğunlukla doğru; boy-tell'dir, fiyat okuyan reg'e karşı sömürülebilir *(kalibre et)*.
- **SB flat.** 4.3'ün "SB flat neredeyse yok" satırı disiplin olarak durur; ante'li 100bb'de teorik SB flat vardır ama flat = yukarıdaki DİP eller, 3-bet = yüksek equity. "Call aralığımın dibi → dengeli olsun diye 3-bet" ezberi ters yönde leak *(sınırda — kendi sim'inde koştur)*. 40bb'de SB flat aralığı vardır; postflop icrası 26.5-EK-3.

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

### 4.6-EK Squeeze'in iki yüzü: blöf malzemesi rakibin FOLD bloğunu unblock eder; üçüncü oyuncuyken tuzak eli düğüme göre

**Malzeme.** 4.6'nın A5s/KQs/AJs listesi coldcaller IP ve dar olduğunda doğrudur. SB call'ı üstüne BB squeeze'inde (100bb) hedef SB'nin capped aralığıdır — offsuit broadway + suited orta — ve sık katlanır; boy yine de tek-rakip 3-bet'inden BÜYÜK: potta ölü para var, katlatılacak iki rakip var, caller başına boyut eklenir — küçük squeeze SB'ye tam da aradığı ucuz call'ı verir. Blöf, SB'nin squeeze'e en sık FOLD eden kombolarını (open'a flat ettiği ATo/KTo/QTo/JTo) UNBLOCK eden 67s/97s/86s/75s tipi broadway'siz suited'lardan + biraz offsuit Ax'ten. T8s/J9s o bloğu bizzat bloklar (dördü de T'li; J9s JTo'yu keser), KQs/AJs de bloklar. Test: "kimin bloğunu unblock ediyorum?" Havuz bu squeeze'i az bulur, SB'den fazla sıkı oynar *(kalibre et)*.

**Üçüncü oyuncu.** "Raise + call var, JTs ile over-call" tuzaktır: cold-caller'ın KQs–QTs'i ve açıcının JJ+/AJ'si seni domine eder. Önce sor: cold-caller'ın aralığında TEPE var mı? Dengede CO, LJ açılışına AK/QQ/JJ/TT'nin bir kısmını flat eder — tuzak eli en güçlü değil, agresyonun en az ödüllendirdiği premium'dur (JJ 3-bet'lenince aralık aleyhine iyileşir; AA'ya KQ/AQ devam eder). Havuz CO'da tuzağı yapmaz: premium'u %100 3-bet'ler, call aralığı 22–99 + suited broadway'e iner → tepe YOK → orta suited bağlantılıyla over-call değil JAM (14.1-EK-3). Ters düğüm: BTN 100bb'de BB squeeze'ine AA flat, JJ/QQ 4-bet — SB'nin ucuz üçüncü-oyuncu call'ını reddeder *(frekanslar: kalibre et)*.

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

### 5.1-EK-2 ICM katmanı: cover eden agresif BB'ye karşı limp dilimi KAPANIR; kısa BB'ye açılış boyu min-raise değil 2.2–2.5x
5.1-EK'in limp malzemesi chipEV BvB içindir. İki ICM düzeltmesi; B3/B5 tabloları değişmez.

- **Limp kapanır.** Solunda seni cover eden agresif BB varken ve ICM açıkken SB'nin limp'i aralık genişletme aracı değil, büyük stack'e iso + capped-aralık cezası açan kapıdır → raise-only, tight; zayıf Ax/Kx ve küçük çift limp'e değil, kısa efektifte (≈≤15bb) open-jam dilimine, daha derinde fold'a gider — ağaç 12.2-EK-4'te. Kısa BB varsa limp ikinci kez yasak: kısa, capped limp'e geniş jam basar, sen katlarsın — üstüne bedava flop da vermiş olursun. Limp yalnız BB zayıf ve pasifse yaşar *(kalibre et)*.
- **Kısa BB'ye boy.** BB ≤5bb ise min-raise fold equity'sizdir — fiyatla her eliyle öder (30.6'nın öbür yüzü); 2.2–2.5x BB aralığının bir dilimini katlatmaya başlar, SB'yi de sıkar. Pozisyona göre kademeli (BTN en büyük), aralık bir tık DAR — geniş aralık + büyük boy değil; 3x sınırda *(kalibre et)*. B3'ün açılış-boyu satırlarına tek not: kısa-BB istisnası 12.2-EK-5.

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

### 5.2-EK-2 BB KISAYSA SB'ye 3-bet-FOLD lisansı doğar — eşit stack'lerde olmayan dilim
5.2'nin "3-bet = JAM"ı eşit stack'ler içindir: SB'nin non-all-in 3-bet'i BTN'den de BB'den de jam yer, fold edilemez. BB KISAYSA hesap değişir: BB'nin jam'ine SB fiyatla neredeyse her eliyle öder (efektif küçük); tek gerçek tehdit BTN'nin 4-bet jam'idir — BB, BTN'den önce davrandığı için 4-bet düğümünde çoğunlukla çoktan katlanmıştır. Sonuç: eşit stack'te jam'lenen düşük-EV eller (A7o/K9o/QJo tipi *(kalibre et)*) 3-bet-FOLD dilimine geçer; value 3-bet (QQ+/AK) blöf dilimi onu dengelediği için daha çok kazanır. Lisansın sınırı da BTN'dir: 3-bet-fold dilimini koklayan BTN'nin 4-bet jam'i fold-equity kazanıp GENİŞLER — BTN yeterince jam'lemedikçe lisans geçerli, uyum sağlayana karşı blöf dilimini kıs *(kalibre et)*. Yan etki: SB'nin marjinal flat'leri (küçük suited bağlantı, orta offsuit broadway) düşer — flat'i kısa BB jam'le cezalandırır; yüksek kartlı flat'ler kalır. BTN tarafı: bu 3-bet'e overcall yok, ya jam ya fold — 3-bet'te blöf çok olduğundan jam aralığını "3-bet = value" diye daraltma. CO açışında aynı mekanizma: SB 3-bet + jam karışımı, flat daha da az. 22.11'in kaçış kapısıyla akraba — fold opsiyonu satın alan raise; kısa BB o opsiyonun fiyatını düşürür *(sınır: kalibre et)*.

### 5.2-EK-3 "FLAT YOK"un iki dipnotu: 3-handed ICM'de SB call dilimi (sınırda) — ve 5.2-EK'in havuz koşulu
Kural durur; iki dipnot.

1. **3-handed + ~30bb SB + aşırı geniş açan BTN (ICM):** BTN seni cover ediyor, lider BB arkada — yine de ICM sim'i SB'ye suited broadway / küçük çift / bazı suited Ax ile CALL verir: açıcı bu kadar genişken jam'in riske attığı stack ölü paraya göre büyüktür (12.1-EK), call ise sığ SPR'de flop görür. *Sınırda — kalibre et.* 22.8-EK'e DOKUNMAZ: o, aksiyonu kapatan BB'nin lidere karşı kuralıdır; burada koltuk SB ve arkada bir oyuncu var. 8-max'ta ve normal açıcıya karşı FLAT YOK aynen.
2. **5.2-EK'in genişletilmiş 4-bet jam'i havuza bağlıdır.** "SB'nin büyük non-all-in 3-bet'ine BTN'den çiftler dahil geniş jam" havuz 3-bet'inin tepesiz olmasına dayanır. 3-bet aralığı dengeli/polar ve premium tam frekanstaysa (HU'da, iyi reg'de) orta çiftin jam'i düşer: çoğunlukla 66–88 slow, 22–44 ve 99–JJ jam, QQ+ slow *(kalibre et)* — bkz. B31.7-EK. Aynı el, iki koşul, iki cevap; showdown'da AA/KK'yı büyük 3-bet'te görmeye başladığın an 5.2-EK'i kapat.

### 5.3 Jam'e karşı call

Rakip all-in geldiyse: 99+, AJs+, AQo+. Bundan aşağısı 28bb'de call değil — ya jam'i sen yapacaksın ya fold edeceksin.

### 5.3-EK Sıkı rejam'e call'u OFFSUIT value kombo sayısı fiyatlar — ATs/KQs fold

5.3'ün çizgisi (99+/AJs+/AQo+) durur; gerekçesi kombo sayımıdır. Havuzun ~30bb rejam'i teoriden sıkıdır (tipik olarak orta çiftler + güçlü offsuit broadway + A-bloker suited'lar ≈ %7 *(kalibre et)*). "Aralığında KTs/QJs/A5s var, ATs iyi durur" hesabı yanlış sayar: suited blöfler 4'er kombo, ATs'i domine eden offsuit AJ/AQ/AK 12'şer kombo + çiftler. Seni yalnız offsuit'lerin domine ettiği el (ATs/KQs tipi) sıkı jam'e fold'dur — jam'ci suited malzemeyi genişletse bile; KQs'in kaybı 88'in kazancının iki katı *(kalibre et)*. Açıcı/flatter çizgisi bir kademe geniş — 88+/AJs/AQo civarı *(kalibre et)*; AJo fold, 88 sınırda.

Döngü: havuz sıkı jam'ledikçe çağıranlar sıkılaşır; sıkılaşan çağırana karşı jam'e blöf eklemek kârlıdır (14.1-EK-2). AA/KK'yı non-all-in 3-bet'leyen rakibin jam'i tepesizdir → call açılır (5.2-EK'in aynası).

> **Jam'e call ederken suited blöfleri değil offsuit value kombolarını say.**

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

### 11.0-EK-4 SPR merdiveninin üst basamağı: turn SPR 1.5–2'de value 2/3 — rakip kalanı SENİN yerine koyar

11.0-EK-3 SPR≈1'i verdi: fold equity yok, yarı-stack, blöfü equity seçer. Bir basamak üstte (turn SPR ~1.5–2; ≈30bb, büyük c-bet call'landı, tek flush draw açıldı) varsayılan **2/3** — yarısı değil, jam de değil *(bant sınırı: kalibre et)*:

- **Jam'in gerekçesi sahtedir.** "Onun top pair'ini stack'lemek" — 2/3'ten sonra kalan min-raise'den az; top pair call da etse jam de etse kalan küçük olduğundan para çoğunlukla nehirde girer.
- **Jam'in kaybettirdiği katman:** 2/3'e call edip jam'e katlanan alt cep / tekerlek Ax / turn'de gutshot alan broadway — tam ezdiğin sınıf. Backdoor'suz overcard'ları (KTo/ATo) küçük boy zaten siler.
- **Sınıf içi kayma:** en iyi kicker'lı top pair büyük; zayıf kicker'lı küçük; yüksek flush kartını taşıyan overpair küçüğe çeker — domine ettiği draw'ı (QJ♦ tipi) içeride tutmak ister; o kartı taşımayan overpair draw'ı ücretlendirmek için büyüğe/jam'e kayar *(kalibre et)*.
- **Blöf:** fold equity var → rakibin CALL sınıfının (flush draw) kartını taşıyan overcard; bloklamadığın ıskalamış Kx/Qx katlanır. 11.0-EK-3'te equity seçerdi, bu basamakta bloker — merdiven budur.

Kırılma: SPR ≲1 ya da turn İKİNCİ draw'ı açınca jam ağırlığı belirir *(sınırda)* — 26.6'nın "akışkan nut → jam"ıyla aynı mekanizma, farklı koltuk.

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

### 11.1-EK-3 C-bet call yedikten sonra turn: dört ters-sezgili kural — mono dördüncü renk, büyük flop → küçük turn, A turn'üne barrel, turned-pair blöfü
B18'in flop boyları turn'de 11.1 tablosunun dışına düşen dört kural doğurur *(hepsi kalibre et)*:

1. **Mono flop + dördüncü renk (IP vs BB):** aralık polarlaşır — nut flush büyük boy; karşısına per BLOKLAMAYAN hava (rakibin katlanacak 8-x/5-x/Q-x'ini tutmayan) aynı boyla blöf; per tutan el (K-8 tipi) blöf değil, onun fold'unu bloklar. Havuz bu turn'ü ağır under-bluff eder. OOP PFR vs BTN'de tersi: dördüncü renk → aralık check; brick → ikinci per/orta cep dahil ince KÜÇÜK value — havuz polarlaşıp ince value'yu atlar (18.2-EK-9).
2. **A-high'da büyük flop bet call yedi → turn KÜÇÜK:** hedef kalan alt/orta per'ler; "büyük attım, büyük devam" refleksi yanlış (18.2-EK-8).
3. **Kuru-orta board'a büyük c-bet call yedi, turn A → çoğunlukla BARREL:** büyük flop bet zayıf Ax'i caller'dan süpürdü — A agresörün kartıdır, aralık avantajı sende; Ax value dahil barrel'a devam, küçük-orta boy yeter (9x/TT öder). Check'e giden Ax değil, A altında ikinci-per'e düşen overpair/9x'tir; Ax'le check-call yalnız düşük-frekans karışım *(kalibre et)*.
4. **Yüksek board'a düşük turn — blöf sırası turned-pair > yüksek gutshot > alt cep:** turn kartını tutan çöp rakibin yeni iki-per'ini bloklar; alt cep onun ilk katlanan bloğunu (zayıf per+gutshot) bloklar — havuz alt cebi aşırı blöfler. River value dar (iki-per+/düz) → tek boy all-in; board'da K yokken (Q-T yüksek runout tipi) blöf K-x'ten: premium catcher'ı (K-Q) bloklar, T-x fold'unu bloklamaz (B1'e "turned pair blöfü" satırı; catcher yüzü 26.4-EK).

### 11.1-EK-2 "Ödeyen sınıf kendisi bet eder mi?" — nut'la check'in iki düğümü (reg'e karşı)

Bet'in ödeyeni check'ime zaten bet edecekse, bet etmek yalnız onun blöflerinin parasını kaybettirir. Test tek soru; iki düğüm:

- **Nut'un ortaklaştığı turn (IP).** K-J-T'de KQ küçük bet call yedi, turn A: Broadway var ama AQ'yla chop; rakibin ikinci-en-iyi sınıfı (AK/AJ/set) river'da kendisi büyük bet ister, T9/J8'ini blöfe çevirir. AK'ya karşı ne yaparsan yap tek sokak alacaksın — o sokak river'da onun boyuyla ve iki kaynaklı gelir → KQ/AQ, iki-per'ler turn'de çoğunlukla CHECK *(kalibre et)*.
- **Küçük turn lead sonrası aralığına en kötü river (OOP).** K-7-3 küçük c-bet call, turn 5 küçük lead call, river A: Ax onda (seninki flop'ta raise'e gitti). Kent (6-4) dahil aralık CHECK: Ax check'ine bet eder → raise; ıskalayan Q9/QT-suited büyük blöfler → yalnız check'te toplanır; jam'lesen yalnız Ax öder — o zaten bet edecekti.

**Sınır (23.11):** rakip river'da bet etmiyorsa (pasif havuz/station) iki düğüm kapanır — gecikmiş value çöker, parayı turn'de al. Cevabı rakip tipi verir, board değil.

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

### 11.3-EK-3 River'da IP boy: aksiyonu KİME açıyorsun — orta el check ya da 2/3+, nut'a 2/3 ya da all-in

11.3 tablosunun rec sütunu "küçük value bet" der; reg sütununun mekanizması şudur.

**Orta elle üçte-bir yok.** Pot 10, bet 3, çağıran aralığa karşı %60 → kazanç potun ~%6'sı — en iyi hâl. Küçük bet reg'e raise düğümü açar; küçük aralığın zayıf value + blöf → raise'e en açık aralık, kazanç %2–1'e iner. Solver'da bet-check-bet ve bet-bet-bet hatlarında IP'nin river boyu 2/3 ya da all-in; üçte-bir ~sıfır *(kalibre et)*. Orta el: check ya da 2/3+. İstisna: raise etmeyen station (11.3'ün küçük bet'i); 19.6 blocker-bet OOP'nin sapmasıdır.

**Nut'la boyu rakibin RAISE kapasitesi seçer.** "2/3'e kim raise eder?" — aralığında "yenilmez" sandığı güçlü catcher (overpair/set) varsa o kendisi jam'ler, orta Ax 2/3'e call edip jam'e katlanır → 2/3 ikisini toplar. Raise etmeyen pasif rakipte parayı SEN koyarsın → all-in *(derinlik eşiği: kalibre et)*.

**Tavan boy üç şartla:** çok blöfle geliyorsun (flop büyük call, turn check-through) + rakip capped catcher'la geliyor + value'n onun catcher'larının hepsini yeniyor → all-in, 2.5–4× dahil; blöf çokluğu boyu küçültmez, BÜYÜTÜR. 11.4'ün "jam ASLA"sı tek per içindir, bu nut/polar value. Ağacında all-in yoksa flop/turn boyların da yalan söyler (29.2).

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

### 12.1-EK-3 ≥20bb'de arkadakiler seni cover ediyorsa open-jam aralığı YOK — tepesi raise-call'a gidince jam aralığı ölür
"20bb'de jam ya da raise" diye iki aralığı yan yana kurma. Koşul: ICM açık, kısa masa (3-handed tipi), blind'ler seni cover ediyor, ante küçük. Raise-call aralığın (aralığının tepesi — SB jam'ine; BB jam'ine bir kademe geniş *(çizgiler: kalibre et)*) tepeni raise'e taşır; geriye kalan jam aralığı (orta suited Ax / küçük çift tipi adaylar) TEPESİZDİR ve rakipler ona belirgin geniş öder *(kalibre et)* → her jam eksi. Sonuç: open-jam sıfır; raise payı küçük *(frekans: kalibre et)*, tepesi raise-call, gerisi raise-fold — 2bb riskle ölü paraya oynarsın, 20bb'yi riske sokmazsın. İki ayna: (a) rakibin koltuğunda raise aralığı varsa jam'i tepesizdir → jam'ine call'un genişler *(kalibre et)*; (b) sen jam aralığı taşımıyorsan SB'nin marjinal re-jam'i kârsızdır — raise-fold, rakiplerin jam aralığını da daraltır. Ante büyüdükçe, stack kısaldıkça, arkadakiler senden kısa oldukça jam aralığı geri gelir. B3'ün "15–25bb: bazılarıyla direkt jam" satırı ve 17.8 Mod D'nin "açılışın bir kısmı direkt jam"i chipEV / cover-eden bağlamındadır; bu koşul listesinde kapanır — tablolar değişmez.

### 12.1-EK 30bb kapısı — fold equity jam lisansı değildir; lisansı riske atılan stack'in ödüle ORANI verir

"Rakip çok geniş açıyor, jam'ime %90 katlanıyor → geniş it" bir chipEV sezgisidir. ICM'de cover edilirken jam'in EV'sini raise-fold makası değil, riske atılan stack'in ödüle ORANI sınırlar: kaybedersen turnuva hayatın gider, kazanınca aldığın ölü para stack'ine göre küçüktür. Aynı geniş açıcıya, aynı dar call aralığına karşı jam genişliği stack bandıyla açılır: ~30bb'de dar (orta çift üstü + en iyi Ax/broadway), ~25bb'de bir kademe, ~20bb altında sert, ~15bb'de geniş — ICM'de yine de "her iki kart" değil, çoğunlukla *(sınırlar: kalibre et)*. Kural: geniş açıcıya karşı jam genişliğini ÖNCE stack bandından oku, SONRA fold equity'den. 25bb üstü cover ediliyorken %90 katlansa bile jam İLK seçenek değildir — jam EV+ olabilir, ama aynı fold'u çok daha az stack riskiyle alan non-all-in 3-bet (12.2-EK-2) onu domine eder; ICM primi bu farkı büyütür. O bantta ağaç non-all-in 3-bet'e ve seçici call'a kayar; fold equity'nin tek başına lisans olduğu yer ~20bb altıdır. Sınırda not: 30bb "hiç jam yok" değil "az jam"dır — çoğunlukla. 12.1 tablosunun "bir/iki kademe daralt" satırı bant içinde böyle okunur; tablo değişmez.

### 12.1-EK-2 Jam dokusu → call malzemesi: any-two jam'e karşı ÇİFT, dar/bloker jam'e karşı Ax

"7-2s bile itiyor, AQ'yla nasıl katlanırım?" Çok geniş jam aralığının büyük kısmı düşük-bağlantısız çöptür; o dokuya karşı orta-yüksek çift iki kartı da domine eder, AK/AQ da iki canlı alt karta karşı ~%60-65 favoridir (çiftin alt kartlara karşı ~%70'inin altında — ama flip değil); geniş aralıktaki çöp AK'yı domine edecek el vermez. ICM (kayıp = bust) sıralamayı büyütür: yüksek çiftin call EV'si AK'nınkinin üstüne çıkabilir *(kalibre et)*; asıl düşenler küçük çift (22-66) ve AJo/ATo/KQ'dur. Jam dokusu Ax/Kx-ağırlıklı bloker karışımına kaydıkça tablo döner: yüksek Ax domine ettiği el bulur, çiftler flip'e iner → AQ/AK call'da değerlenir; dar ve ÇİFT-ağırlıklı (TT+/AK) jam'de ise AQ ve orta çift birlikte düşer. "Rakip ne kadar geniş, ben o kadar geniş" ezberi eşik için doğru, sıralama için eksiktir: genişleyen jam'de çiftler Ax'tan daha hızlı yükselir. 12.1'in "88+/AJs+/AQo" satırı tek doku içindir; iki sütun oku: geniş/any-two jam'ci → 88+/AK/AQo tut, küçük çifti (22-66) ve AJo/ATo/KQ'yu düşür; dar/bloker (Ax/Kx) jam'ci → Ax-ağırlıklı, küçük-orta çifti düşür. Cover haritası önce gelir (12.1): bu ayrım aralığın İÇİNİ düzenler, eşiğini değil.

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

### 12.2-EK-2 ICM'de BB'nin 3-bet defteri iki koltukta: cover ederken blöf offsuit dipten; cover edilirken value KK+, premium FLAT

Orta stack 3-bet'e çoğunlukla jam/fold ya da flat'le cevap verir, küçük 4-bet nadirdir; bu gerçek iki koltuğu şekillendirir.

**Cover EDEN BB (derin, açıcı orta):** value tepe dar (KK+/AK civarı *(kalibre et)*), blöf en DİPTEKİ offsuit'ten. İki sebep: suited eller cover edilen rakibe karşı equity'lerini fazlasıyla realize eder (21.3-EK-2) → call defterinde daha değerli, blöfe harcanmaz; rakibin raise-fold aralığı çoğunlukla suited Ax/Kx'tir → onu bloklamayan küçük offsuit el iyi blöftür. A-bloker ise sınırda: A hem fold aralığını (Axs) hem jam aralığını (AA/AK) keser, net etki başa baş — "A tutuyorum → blöf" refleksi burada otomatik değil.

**Cover EDİLEN orta BB (30-50bb, açıcı lider):** indüksiyon yoktur — TT-QQ/AQ ile 3-bet, jam gelince stack-off'u kendinden iyiye satın alır. Value fiilen KK+ *(kalibre et)* (AK sınırda, çoğunlukla flat); QQ-TT/AQ FLAT — 22.8-EK'in "marjinalle flat yok"u değil, aralığı koruyan PREMİUM flat. Blöf dilimi neredeyse kapalı *(tek hane: kalibre et)*. Bant *(eşikler: kalibre et)*: 25bb üstü rejam az; 20-25bb yüksek çiftler + AK/AQs jam'e — suited Ax/Kx ve küçük çiftler SINIRDA, lider açıcıya karşı ICM primi bunların çoğunu düşürür; ~15bb altı suited Kx de düşer — cover edilen kısa stack'in risk primi rejam eşiğini yukarı iter. Açıcı çok geniş açsa da value dilimi çoğunlukla sabit kalır (QQ/AK sınırda geri girebilir); asıl değişen blöf dilimidir.

### 12.2-EK-3 ICM'de küçük-orta çift (66-88, sınırda 99) rejam / 3-bet-fold defterinde ölür — Ax bloker onu geçer

"88/99 iyi el, iterim / 3-bet'lerim" refleksi ICM'de en pahalı malzemeyi seçer. Açıcıya rejam'de küçük-orta çift hiçbir iyi eli katlatmaz (tepe zaten öder), kötü elleri de ödetmez: çağrıldığında overpair'e ezilir, overcard'lı Ax'e flip'tir; katlattığı yalnız KQ/AJs tipi bloker elleridir. Aynı spotta A4o/A9o: overpair'lere canlı equity + açıcının çağıran tepesini (AA/AK/AQ) bloke eder, katlanan dilimini unblock eder → daha çok fold; ICM baskısı yüksek ve sığ spotlarda Ax bloker'ın rejam EV'si çoğunlukla küçük-orta çifti geçer *(kalibre et)*. 3-bet-fold da aynı: hedef rakibin raise-fold tepesini (ATs/KQs) katlatmaktır; çiftin postflop değeri şişmiş 3-bet potunda ve overcard board'larda büyük ölçüde erir. Kural: ICM'de küçük-orta çift CALL defterinde yaşar (flop görür, overcard'a katlanabilir), rejam/3-bet-fold defterinde ölür; o defterin malzemesi Ax bloker + en yüksek çiftler (TT ve üstü bu tarafta — TT rejam malzemesi olarak kalır). İstisna *(sınırda)*: açıcının aralığı küçük çift/suited connector'la dolmuşsa orta çift value-rejam'e döner. Çelişki yok: 12.2-EK'te çiftler soğuk 4-bet jam malzemesidir çünkü potta ölü para (open + 3-bet) fazladır, fold başına kazanç büyür ve polar 3-bet aralığının blöf oranı açıcının fold dilimine göre yüksektir; ilk-giren open-jam ayrı defter (12.2-EK-4); 22.11 kaçış kapısının "AK tipi" raise-fold dilimi orta çifti kapsamaz.

### 12.2-EK-4 Sıkışan orta stack'in ağacı RAISE-ONLY — limp aralık genişletme aracıdır, tight modda yasak

ICM'de tight oynamak isteyen orta stack limp'e kaçar — yanlış. Limp aralık GENİŞLETMEK için vardır (chipEV'de kârlı zayıf elleri ucuza sokar); tight mod raise-only'dir, çünkü raise fold equity taşır, limp ise arkadaki agresif büyük stack'e iso + postflop capped-aralık cezası açar. Kısa BB varsa limp ikinci kez yasak: kısa, capped limp'e geniş jam basar, sen katlarsın — üstüne bedava flop da vermiş olursun. Ağaç üç dilim: (1) raise-call yalnız JJ/QQ+ *(kalibre et)*; (2) OPEN-JAM (~15-25bb etkin; 30bb+ ise bu dilim raise-fold/fold'a döner) = rejam'e katlanmak İSTEMEDİĞİN güçlü-ama-nut-olmayan eller (AQ/AJ/AT, 88-TT tipi *(kalibre et)*) — raise'lersen agresif SB rejam'ler, sen katlarsın, equity ziyan; jam'le bitir; (3) raise-fold neredeyse yok. VPIP kabaca yarılanır *(kalibre et)*; kalan EV çarpışma etkisinden (22.11) gelir. Boy: raise dilimi KÜÇÜK (min-raise ~2x *(kalibre et)*) — dilim JJ/QQ+'dan ibaretken fold istemek jam diliminin işidir, raise diliminin değil; prim eller agresif SB/BB'nin rejam'ini davet eder. Chip lideri tersini yapar — orta stack'in limp'ini suited bağlantılıyla iso'la (limp-jam yemeyen eller), offsuit çöple değil; 28.3'ün kelle limp'i ayrı bağlam. 5.1-EK'in BvB limp satırı chipEV içindir; cover eden agresif BB + ICM'de o dilim kapanır.

### 12.2-EK-5 BB ≤5bb ise açılış boyu min-raise DEĞİL 2.2-2.5x — "nasılsa committed'im" yanlış

"Min-raise yeter, nasılsa jam'ine öderim" fold equity'yi sıfırlar: ≤5bb BB min-raise'e fiyat gereği hemen her eliyle öder (30.6'nın öbür yüzü). Boy 2.2-2.5x'e çıkınca BB aralığının bir dilimi *(kabaca beşte biri — kalibre et)* katlanmaya başlar; SB de daha sıkı savunur (BB'nin reopen tehdidi). Pozisyona göre kademelendir: geç pozisyon bandın üstüne, erken pozisyon altına yakın *(uçlar: kalibre et)* — arkada jam'leyebilecek oyuncu arttıkça büyük boyun "jam yeme" maliyeti artar. Aralık boyla birlikte bir tık DARALIR (ICM zaten daraltır): dar aralık + büyük boy; geniş aralık + büyük boy değil. 3x ve üstü sınırda — saha 3x'e aşırı katlanır, 2.5x'e gerektiği kadar; psikolojik eşik, kalibre et. Kural: BB "her şeyle ödeyecek" bandındaysa boyu büyüt, aralığı daralt, limp yok (12.2-EK-4). B3 açılış boyu tabloları değişmez; bu satır yalnız kısa-BB istisnasıdır.

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

### 12.4-EK "Soy"un icrası: cover eden büyük stack'in üç kaldıracı — ve ödeme merdivenini RAKİP için oku
12.4'ün "soy — open genişlet + 3-bet baskısı" hücresi üç somut kola iner *(hepsi kalibre et)*:

1. **Boy.** Kısa BB'ye (≲12bb) boyu, BB'nin min-raise'e CALL'ı olup olmadığı seçer: fiyatla her eliyle call edip flop'ta commit olan kısaya min-raise değil 2.5–3x — jam (rejam) oranı boydan bağımsızdır, büyük boy min-raise'in davet ettiği ucuz call'ları fold'a çevirir (12.2-EK-5); salt jam-or-fold oynayan (call'ı hiç olmayan) kısaya boy küçük kalır — büyük boy fold'u artırmaz, yalnız jam yediğinde fazladan kaybettirir. ICM'le kilitli ORTA stack'lere karşı da baskı boyla değil frekansla satılır (21.7-EK).
2. **Malzeme = arkadakilerin cevabı.** Arkadakiler jam-or-fold ise bloker offsuit (K6o/Q8o tipi — flop oynanmayacak, bloker fold-equity alır); arkada derin caller varsa suited/oynanabilir (K5s > K9o).
3. **Geniş flat masayı dondurur.** Cover eden derinin CO'dan spekülatif flat'i (53s tipi) BTN/SB squeeze'ini kendi risk primiyle pahalandırır → çoğunlukla IP flop + BB'ye üç sokak baskı lisansı. İkinci stack'in açılışına 3-bet value KK+ (QQ/JJ flat — onun 4-bet-jam'i suited Ax/AK/KK+); aralığı suited Ax'in 5-bet-jam'i korur. Postflop kademeli: flop küçük, turn yarım, river jam.

**Hedef seçimi:** 12.3'ün merdivenini kendin için değil RAKİP için oku — basamağın onun bankroll'una ve stack'ine göre büyüklüğü kimin taş kesileceğini söyler (16.6'nın beşinci adımı); taş kesilen kilitli orta stack en kârlı hedeftir.

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

### 14.1-EK-4 Squeeze-jam'i el değil BB'nin STACK'İ ve derinlik fiyatlar (30–45bb; loose açıcı + geniş flatter)

14.1-EK bloker testini verdi; ikinci eksen arkadaki stack. HJ geniş açıyor (loose açıcı; *çizgiler: kalibre et*), BTN geniş flat, sen SB:

- **BB seni cover ediyor mu?** BB seni cover etmiyorsa jam aralığı belirgin genişler; cover ediyorsa sert daralır *(eşikler: kalibre et)* — spekülatif suited Ax/düşük bağlantılılar cover eden BB'ye karşı EV kaybeder, yalnız premium çekirdek her koşulda kârlı kalır *(sınır eller: kalibre et)*. Cover edilmeyen stack'e karşı spekülatifler yaşar, cover edene karşı ölür (12.4 asimetrisinin jam yüzü).
- **Herkes derin mi?** Derinlik arttıkça jam aralığı daralır; çağıranların premium çift + en güçlü broadway'e sıkışması daralmayı kısmen telafi eder — 30bb'deki kadar geniş değil, yine de oynanabilir *(kalibre et)*.
- **Malzeme:** suited broadway omurga (QTs/KTs/KJs/T9s), suited Ax/Kx gövde — K7s'in K'sı AK/KK call kombolarını azaltır; küçük çift 77'den kötü değil.
- **Gambler freni:** rakip JTs/QTs ile call'lıyorsa çizgi hızla daralır; en loose'a saldır — nit flatter'a karşı bile jam frekansı sanıldığından yüksek kalır *(kalibre et)*.

**14.1-EK ile sınır:** orada standart açıcı + bloker analizi J/T'li suited broadway'i jam'den çıkarır; burada loose açıcı + geniş flatter (ölü para büyük, çağıranlar göreli sıkı) onları omurga yapar — koşul farkı, çelişki değil *(sınırda — kalibre et)*.

### 14.1-EK-3 Bloker testinin iki uzantısı: capped cold-caller'a 60bb jam (T9s) — ve reshove'da çiftin blokeri yoktur

**Capped cold-caller.** Havuz CO'da premium'u %100 3-bet'ler (4.6-EK) → call aralığı 22–99 + suited broadway; 60bb jam'e yalnız 99/AQs civarıyla öder → SB'den T9s/J9s/JTs jam'i +EV *(kalibre et)*. T9s en iyi aday: ödeyen 99'u bloklar, katlanan KQ/KJ/QJ/Axs fold'larını unblock eder — T'nin JTs/QTs/KTs fold'larını kesmesi küçük bir eksi, net yine artı. Bloker kuralı burada 14.1-EK'in tersine döner: J/T blokeri frenler — domine-eden broadway'i ödeyen aralıkta bırakırsa; iter — ödeyen aralık çiftlerden ibaretse. Kartın hangi aralıktan kombo sildiği cold-caller'ın kompozisyonuna bağlıdır. İki şart: cold-caller premium'larının bir kısmını slow-play'lemeye başlayınca pencere hızla kapanır — eşik frekans *(kalibre et)*; açıcı da premium dışını jam'e katlıyorsa pencere açık *(devamı: kalibre et)*, geniş ödüyorsa jam düşer. Sıkı açıcı + sıkı cold-caller'a K6s/K5s, K8s'ten iyi (8x onlarda). BB, raise+call+SB over-call sonrası daha geniş jam'ler — over-call ölü paradır.

**Reshove'da orta çift ≈ küçük çift.** Sıkı EP açıcı (77+/AJs+/AK) reshove'a TT+/AK/AQs ile öder; o aralığa karşı 99 ile 55 aynı equity — 55 raise-fold'dan (77/88/AJs) hiçbir kombo silmez, 99 yalnız açıcının katlanan 99'unu siler (küçük bir eksi). A5s ise AK/AA'yı bloklar, ödendiğinde canlı → çiftlerin üstüne çıkar *(sıralama: kalibre et)*. Reshove aralığı çift-ağır değil bloker-ağır: 99/TT sınırda, 55–88 çoğunlukla fold.

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

### 16.6 Büyük-spot hazırlığı: haftayı EV'ye geriye planla, Day 3 / FT öncesi bir saatlik protokol

Turnuva EV'si saatlere eşit dağılmaz: derin run'ın son iki masası ve FT, serinin EV'sinin büyük kısmını birkaç geç-gece saatine sıkıştırır. 16.4'ün seri planına üç sütun: **en pahalı saat dilimi → uyku penceresi** (kritik günden önceki gece, bitiş saatinden geriye sayarak geç yat / geç kalk — 03:00'te "sabah" tazeliği *(kronotipine kalibre et)*) **→ gece-öncesi lojistik ✔** (yiyecek/su/kıyafet hazır, sosyal takvim serinin dışına ÖNCEDEN taşınmış). Çalışma malzemesi seans içinde işaretlenen 20–25 el (9.3).

**Bir saatlik protokol** (Day 3 / son 2–3 masa / FT öncesi, yazılı):
1. Lobiyi stack ve bb olarak yaz; dağılımı yorumla — çok kısa + küçük ara basamaklar = hızlı başlangıç → ilk 30–60 dk sıkı; derin dağılım → chipEV'ye yakın.
2. Her rakip için iki satır: ben onu nasıl görüyorum + **o beni nasıl görüyor** (blöf gösterdim → beni blöfe yatkın görür, bana daha hafif bluff-catch yapar → ona daha az blöf, daha ince value; ICM'i bildiğimi biliyor → baskı satar). En pahalı satır budur.
3. Çalışma saatini P(bu rakiple büyük pot) ile ağırlıklandır: büyük stack'lere saat, kısalara dakika.
4. Gördüğün showdown'lardan varsayımsal aralık kur, birkaç stack senaryosunda reshove eşiklerini önceden çıkar.
5. Ödeme merdivenini RAKİP için oku: basamağın onun bankroll'una göre büyüklüğü kimin taş kesileceğini söyler (12.3).

### 16.7 Varyans okuryazarlığı ve maruz-kalma planı — 16.1'in limiti buradan türer

Seri sonucu beceri ölçüsü değildir; plansız tam maruz-kalma da plan değildir. Seri öncesi üç satır:

1. **Yatırım hedefi → toplam limit.** "İstikrarlı akış" düşük varyans ister (küçük saha, yüksek hacim, kısmi satış); "büyük vuruş" yüksek (büyük saha, tam maruz-kalma). ICM'in bankroll sürümü: hayattaki stack rolün stratejini seçer. ROI'yi kötümser tahmin et — tahminin yarısıyla planla.
2. **Varyansı say** (kendi parametrelerinle bir varyans hesaplayıcısında): ~800 kişilik sahada %10 ROI, yılda 5000 turnuva → kayıp yıl ~%20, kayıp ay ~%40+, kayıp oturum ~%70; %20 ROI kayıp yılı ~%2'ye indirir ama kayıp oturumu neredeyse değiştirmez *(temsili — kalibre et)*. İstikrar isteyene: edge'i değil hacmi/saha boyutunu ayarla.
3. **Event başına dilim.** ABI'nin ~10 katı buy-in'de yılda 200 turnuva, %20 ROI'de bile hatırı sayılır bir olasılıkla *(temsilî: ~⅓ — kalibre et)* küçük-buy-in kârını siler. %20 ROI'li bilet nominalin ~1.2 katı değerdedir → 1.1 mark-up'la yarısını satmak swing'i (standart sapmayı) yarılar, prim yaratır; swap çoğunlukla kötü. Dik ödeme + büyük saha = en yüksek varyans → kısmi maruz-kalma.

Otopsi (16.3) "kurala uydum mu"dur: %20 ROI'de bile bir serinin kayıpla bitmesi ÇOĞUNLUKLA olağandır; kalibrasyonu sonuç değil kural ihlali değiştirir. Batmanın alt-sınırı vardır: kanıtlanmış geçmişle sermaye bulunur.

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

### 17.11-EK-2 Koç notlarının genel hâlleri: "bubble'da KK+" → 12.2-EK-2; "%60 open" → 12.4-EK; Mod D direkt jam → 12.1-EK-3
17.11'in üç satırı bu turnuvaya özel yazıldı; genel doktrin sonradan B12/B21'e girdi, çapraz oku:

- **"Bubble'da cover'a karşı tüm stack için KK+"** — FT/orta-stack genelleştirmesi 12.2-EK-2: cover EDİLEN orta BB'nin value 3-bet'i fiilen KK+ (AK sınırda), QQ–TT/AQ ise fold değil PREMİUM FLAT — aralığı koruyan flat; blöf dilimi neredeyse kapalı. Cover EDEN BB'de tersi: value tepe dar, blöf offsuit dipten.
- **"Sen cover'ken 15–25bb BB'sine %60'a kadar open"** — boy ve malzeme katmanı 12.4-EK: cevabı boya inelastik (salt jam-or-fold oynayan) kısa BB'ye boy küçük kalır (~min-raise *(kalibre et)*) — büyük boy fold'u artırmaz, jam yediğinde fazladan kaybettirir; 2.5–3x ancak BB min-raise'e fiyatla CALL edebiliyorken anlam kazanır, ucuz call'ı keser (12.2-EK-5). Malzemeyi arkadakilerin cevabı seçer (bloker offsuit vs suited). Kilitli orta stack'lere baskı ise BOYLA değil FREKANSLA satılır (21.7-EK) — geniş açılışın boyu küçük kalabilir *(kalibre et)*. 23.14'ün "havuz BB'si kısa bantta fazla jam'ler" gerilimi aynen geçerli.
- **17.8 Mod D "açılışın bir kısmı direkt jam"** — ≥20bb'de arkadakiler seni cover ediyorsa open-jam aralığı kapanır, raise-call + raise-fold kalır (12.1-EK-3); direkt jam yalnız cover-eden / ante-büyük bağlamda.

B17 modülü değişmez; bu ek yalnız adres verir.

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

### 18.0-EK-3 Geniş aralığın DİBİNE karşı küçük bet: frekans GTO'nun ÜSTÜNE çıkar
18.0 "rec sahada frekans GTO'nun altında" der; 18.0-EK-2 3-bet potunda caller'ın küçük bete over-fold ettiğini ekledi. Tek-raise'li potun da aynı sapması var ve 18.0'ı sınırlar. Station'ın yapışkanlığı çiftlerde ve Ax'te yaşar, aralığın dibinde değil. Geniş savunma aralığının dibi — backdoor'suz suited K9/Q9/J9, renk-dışı suited çöp, KJo/QTo tipi offsuit — küçük bete teoride sık devam etmelidir; havuz bunu yapmaz, katlar *(kalibre et)*. Dip katlanınca "bet mi check mi" farkı zaten küçük olan her elin (backdoor'lu hava, zayıf Ax, orta cep) bet EV'si yükselir → küçük-bet frekansı teorik karışımın üstüne çıkar, düşük/orta BAĞLANTISIZ (kuru) board'da neredeyse range-bet. Bağlantılı düşük board hariç: orada geniş aralık board'u ıskalamaz, vurur (konektör, küçük çift) → 18.0 geçerli kalır, check artar.

Koşul üçlü: (a) rakibin aralığı GENİŞ — tek-raise'li potta blind savunması (BTN/CO açışına BB'nin flat'i, blind savaşında SB-vs-BB); 3-bet potu bu maddenin konusu değil, o 18.0-EK-2'de; (b) board rakibin kütlesini ıskalamış (düşük/orta BAĞLANTISIZ, düşük mono, eşleşmiş); (c) boy KÜÇÜK. Üçü yoksa 18.0 döner: dar EP-vs-BTN flat aralığının dibi çift ve suited Ax'tir, katlanan yoktur.

> **Aralık genişledikçe küçük-bet frekansı teorinin üstüne, daraldıkça altına. 18.0'ın "GTO altı"sı dar/yapılı aralığa ve dinamik board'a karşı doğrudur; statik/eşleşmiş/mono board'da geniş aralığın dibine karşı yanlıştır.**

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

### 18.2-EK-3 Derinlik ↔ boy: yön dokuya bağlıdır
18.2 tablosunun boyları 60bb+ / IP-vs-BB için okunur; derinlik değişince boy dokuya göre TERS yönlere gider. Mekanizma rakibin raise kapasitesidir.

- **Kuru/eşleşmiş (8-8-3 r tipi):** derinde BB'nin devamı raise-ağırlıklıdır (backdoor'lu çöp bile raise'ler) → küçük bet + yüksek check. Sığlaştıkça raise-fold adayı azalır, kalan raise çoğunlukla jam'e döner → orta/büyük boy çoğunlukla güvenlidir, zayıf Ax/Kx'ten ince value alınır *(kalibre et)*. Tablonun "1/3"ü derin içindir.
- **Islak/bağlantılı (9-8-6 r tipi):** derinde yarım-pot civarı polar bet check-raise yese bile turn jam'i çoğunlukla pot-üstü overbet ister — nadirdir. 40bb'de aynı boy + check-raise → turn SPR≈1 → BB açık kent/overcard-draw'ını jam'ler, sen equity'li ellerini katlarsın → boyu KÜÇÜLT ki check-raise de küçük gelsin, turn'de jam değil üçte-bir bet yesin. Tablonun "2/3 polar"ı 30–60bb baseline'ında ters çalışabilir; 40bb'de küçük *(kalibre et)*.

Test cümlesi iki koşullu: *"Rakibin equity taşıyan raise'i SIK mı — ve raise sonrası turn'de jam geliyor mu?"* — ikisi de evetse flop boyunu düşür (ıslak doku); raise adayı zaten azsa (kuru/eşleşmiş, sığ) test tetiklenmez (18.4'ün "boyut = river planının fiyatı" satırı derinlikle okunur).

> **Çoğunlukla: kuru/eşleşmiş → sığlaştıkça boy BÜYÜR; ıslak/bağlantılı → sığlaştıkça boy KÜÇÜLÜR. İkisini tek "kuru küçük / ıslak büyük" satırına sıkıştırma.**

### 18.2-EK-4 Büyük boyun evi dar tanımlıdır: üst kart Q'nun altında + BB'de flop düzü yok
18.2-EK madde 2 "rainbow = büyük boy evi"ni geniş-aralıklı potla sınırladı; sınır pot tipi değil board'dur, BTN/CO-vs-BB'de de açılır *(kalibre et)*. İki koşul: (1) üst kart Q'nun ALTINDA *(kalibre et; sınır J/T arasında oynar)* (T-7-3 / J-8-4 / 9-6-2 r tipi) → QQ-AA overpair kütlesi tam ağırlıkta ama kırılgan, top pair da üç sokak taşımaz → ikisi de parayı şimdi ister. K-yüksek board'da (K-8-4 tipi) tek overpair AA, Q-yüksek'te AA-KK'dır — overpair kütlesi ince, top pair üç sokak taşır → küçük range-bet kalır. (2) BB bu board'a düz floplayamıyor; T-9-7'de offsuit düzler BB'de → boy büyümez, check büyür.

İkinci mekanizma temizleme: büyük flop bet Q-J / K-J tipi iki-overcard'ı katlatır → J turn'ünde senin J-8 tipi blöfün top pair olur VE rakibin J'si azalmıştır; küçük flop bet aynı turn'de aralığı check'e iter. Bu yüzden büyük-boy blöfü iki-overcard broadway değil, tek overcard + backdoor'dur (A-5s / K-7s tipi): K-Q'nun Q-8'den call alması iyidir → küçük boy; A-5s'nin A-8 / Q-8'i katlatması gerekir → büyük boy. Küçük aralıkta Q-T / J-T top pair kalır ki raise yiyince devam edebilsin.

> **Büyük boy = "üst kart < Q *(kalibre et; sınır J/T arasında oynar)*, BB'de flop düzü yok"; blöfünü tek-overcard+backdoor'dan ver. Havuzda boyu hedef sınıfı katlatan en küçük boy seçer *(kalibre et)*.**

### 18.2-EK-5 Düşük board'da boyu doku değil KÜTLE seçer: rainbow büyük, iki-renk küçük
18.2 düşük-bağlantılı board'u "BB board'u → check" der; bu BB'ye karşı IP içindir. OOP PFR'ken ve caller BTN'yken (aralığı BB'den dar ve yapılı) boy şu soruyla seçilir: **rakibin hangi kütlesi zaten katlanıyor, hangisi kayıtsızlık fiyatı istiyor?**

- **İki-renkli düşük (6-4-2 fd tipi):** caller'ın renk-dışı suited'ları ve backdoor'suz offsuit'leri her boya katlanır → küçük boy; frekans ise rainbow'a göre DÜŞER — fd kütlesi caller'ın equity'sini artırır, "geniş" olan yalnız bet'lenen ellerin dağılımıdır *(kalibre et)*. Büyük bet bedava fold'u pahalı satın alır.
- **Rainbow düşük (6-4-2 r tipi):** caller'ın neredeyse her eli backdoor fd + iki overcard taşır; küçük bet hiçbirini kayıtsızlaştırmaz → pot-boy civarı *(kalibre et)*. "Kuru → 1/3" ezberinin en pahalı kör noktası; 18.2-EK-4'ün ikinci sebebi.
- **Hedefi rakibin en kalabalık offsuit overcard bloğu seçer:** hedef o bloktaki en zayıf kombolardır; blok ne kadar geniş ve kayıtsızlığa yakınsa boy o kadar büyür — Ax bloğu kalabalıksa pot civarı, Ax-hafif dokuda Kx/Qx bloğu hedefse daha küçük (2/3) yeter *(kalibre et)*.
- **Top pair'in senin aralığında olması boyu değil FREKANSI yükseltir:** 7-x-x'te HJ/CO'nun 7x'i (77, 76s, 87s, 97s, A7s) var → frekans yükselir; 4-x-x'te (4-3-2 tipi) 4x neredeyse yok (44, 54s, A4s dışı) → çöker.
- **Check-raise value'yu yemez:** düşük rainbow'da overpair'i check'e koymak value kaybettirmez — BTN'nin orta çiftleri check'ine stab eder; value'yu x/r'la al *(kalibre et)*.

> **Otomatik-fold kütlesi büyükse küçük, backdoor/gutshot kütlesi büyükse pot-boy. Rainbow düşük board ÇOĞUNLUKLA büyük boyun evi; iki-renk düşük çoğunlukla küçüğün *(kalibre et)*.**

### 18.2-EK-6 Orta board'da bağlantı boyu tersine çevirir: 9-8-7 küçük-sık, 9-5-2 büyük-seyrek
18.2'nin "ıslak bağlantılı (9-8-7) → 2/3 polar" satırı IP-vs-BB içindir ve board'un BB'nin geniş aralığına yaradığı varsayımına dayanır. Nut'un PAYLAŞILDIĞI yapılı-aralık düğümünde (OOP PFR vs BTN flat; 3-bet potunda B32.3'ün "tam bağlantılı → check/küçük" satırı) ayrım "ıslak mı" değil **"nut paylaşılıyor mu"**dur:

- **Orta-bağlantılı (9-8-7 / T-9-8 tipi):** set, düz, iki-per iki aralıkta da var; overpair'in kendisi büyük pot istemez, en yüksek EV'si küçük bettedir *(kalibre et)*. Board'a herhangi bir bağı olan her el (gutshot'lı broadway, backdoor'lu overcard, per, overpair) küçük bet → rakip az katlanır ama kıl payı equity üstünlüğünü paraya çevirirsin. Bağsız overcard check-fold. 8-7-6'ya inince offsuit broadway'in bağı düşer → frekans da düşer, AA bile check'e kayar.
- **Orta-kopuk (9-5-2 / 9-4-2 / T-5-2 tipi):** overpair'ler nut-benzeri, rakibin devamı overcard + backdoor → büyük bet ya da check; küçük yok. Boy, backdoor'suz offsuit broadway'i (KQo/KJo/AJo tipi) katlatan boydur *(kalibre et)*; blöf 9x'i saran Tx/8x tipi.

> **Küçük avantaj + paylaşılan nut = küçük bet, yüksek frekans. Büyük avantaj + sende yoğun nut = büyük bet, düşük frekans. Refleks bunun tersidir; tersini yapan bağlantılı orta board'da overpair'ini kendi eliyle bluff-catcher'a çevirir (B11).**

### 18.2-EK-7 Üç-broadway / A + iki broadway (tek-raise'li): küçük boy hiçbir şey katlatmaz
18.2'nin "kuru yüksek → 1/3" satırı A-7-2 / K-8-3 tipi tek-broadway içindir. K-Q-J fd tipi üç-broadway board'da BB'nin devamı Q-x / J-x per'leri ve T-x / A-x çekilişleridir (KQJ'de T-x OESD, A-x'in TÜMÜ gutshot'lı); küçük bete hiçbiri katlanmaz. Boy Q-x'i kayıtsızlığa iten boydur — pot civarı; 2/3 sadeleştirmesi EV kaybetmez *(kalibre et)*. Pot-boya karşı T-x (OESD) sınırda devam eder, kicker'sız Q-x sınırda, A-x (gutshot) sınırda; ilk katlanan blok offsuit 8-x / 7-x'tir (9-x, T'ye gutshot'la devam eder). A-Q-J ayrı okunur: A-x top per (düşmez), K-x per değil gutshot, T-x yalnız gutshot (katlanır), ilk katlanan blok 9-x / 8-x.

Rakip bu boya fazla call ediyorsa flop boyunu değil TURN planını değiştir: aralığın büyük kısmıyla pot-boy turn — K-x kayıtsız, kalan Q-x/T-x/gutshot düşer; fazla flop call'ı turn'de kârdır. Blöf inşası: 6-6 / 7-7 tipi orta cep kötü blöf (daha iyiyi katlatmaz, kötüden call almaz); iki-sokaklı düşük eller (5-4s / 6-4s tipi) daha iyi — BB'nin ilk katlanan bloğu offsuit 8-x / 7-x'tir, onları bloklamaz. 40bb'de "büyük" bir kademe düşer (BB Q-T / kombo çekilişi fast-play'e başlar) ama küçük yine açılmaz; 15bb'de check büyür (KQJ'de K-x = nut, jam'ler; bkz. 18.10).

> **Tek-raise'li yüksek-broadway board'da küçük boy yok; Q-x'i kayıtsız bırakan tek boy + turn'de pot. B32.5'in "üç-broadway her derinlikte KÜÇÜK" satırıyla çelişmez — 3-bet potunda nut avantajı ince; tek-raise'li potta BB nut uçta capped değildir (nut-düz T9/KT komboları BB'de bile fazladır), ama devamı küçüğe katlanmayan per/çekilişte yoğun → bet frekansı düşer, boy büyür.**

### 18.2-EK-8 A-yüksek board'da boyu ikinci kart seçer
Tüm A-high board'ları "A-7-2 → 1/3" kovasına atma; soru **"BB'nin alt per'inin YANINDA bir şey var mı?"**

- **Tekerlek-A (A-4-2 / A-3-2 tipi):** BB'nin alt per'i per + gutshot'tır, wheel düzleri ve 2-2/3-3 setleri BB'de → büyük bet alt per'i katlatmaz, BB turn'de düz/per çevirip aralığını blöfe döndürerek equity'sini yüksek realize eder → küçük boy, hedef otomatik fold'lar.
- **Orta-A (A-9-4 / A-8-5 tipi):** BB'nin alt per'inin yanında hiçbir şey yok — ama alt per küçük bete zaten kayıtsızdır → çoğunlukla küçük/aralık-bet; büyük boy, IP'nin KK-TT/AQ+ yoğunluğu yüksek ve BB'nin 9x/8x orta-per kalabalığı belirginken karışıma girer *(kalibre et)*.
- **A-K-x:** büyük boy, ama K-x ve Q-Q/J-J tipi alt çift CHECK — bet'lerse yalnız daha iyi el öder, katlanan zaten geride. Büyük boy A-x + J-T / Q-T tipi gutshot blöflere kalır (zayıf-kicker K-x ve Q-x'i flop'ta, K-Q / K-J'yi ancak turn-river baskısıyla katlatır). A-K'nin check-back payı tuzak değil aralık aritmetiğidir: rakibin blöfe dönecek çekilişlerini bloklamaz, check-check river'da yakalar.

Turn ters sezgilidir: büyük flop bet call yedikten sonra turn'de KÜÇÜK boy — hedef orta per ve zayıf A-x'ten ince value + K/Q-high'a ucuz baskı; "büyük attım, büyük devam" refleksi otomatik değil, blank turn'de büyük devam da karışımda *(kalibre et; B11.1)*.

> **A-high'da ikinci kart soruyu sorar: BB'nin alt per'inin yanında bir şey var mı? Var (tekerlek/bağlantı) → küçük ve daha seyrek; yok (orta-A) → aralık-bet küçük; ikinci kart broadway (A-K / A-Q / A-J) → büyük. 3-bet-pot sürümü 18.2-EK-2 / B32.3.**

### 18.2-EK-9 Mono flop: tek küçük boy; frekansı "board rakibin flush'ını yaktı mı" seçer
18.2 "Monotone → belirsiz, küçük/check" tek kovadır; 18.2-EK-2 3-bet potunda kovayı nut-flush sahipliğiyle açtı. Tek-raise'li potta iki ayırıcı var:

- **Boy (IP vs BB):** BB'nin cevabını renk kartı böler — renksiz overcard/gutshot/zayıf per katlanır; renk kartlılar ve renksiz top pair çoğunlukla call. Büyük boya gerek yok (katlanacaklar küçüğe de katlanıyor), derinde kimse AA/set'le pot büyütmek istemez (ikinci-nut sık) → tek küçük boy, neredeyse tam aralık; boyu "renksiz hava/zayıf per'in katlandığı en küçük boy" seçer *(kalibre et)*. Havuz BB'si renksiz elini teoriden sık atar → frekans GTO'nun üstüne (18.0-EK-3).
- **Frekans (OOP PFR vs BTN):** kural sayımdır — board, rakibin yüksek suited kombinasyonlarından (broadway + Ax-suit) kaçını KENDİSİ yaktı? Çoğu per'e dönüştüyse flush sayısı az → yüksek frekans küçük bet, raise az (K-T-8 mono: KT/K8/T8-suit artık per); hiçbiri yanmadıysa (düşük mono) → check-ağırlıklı *(kalibre et)*. Sayım tek başına yetmez: düşük suited connector'lar yanmaz ve bağlantılı mono'da hem flush hem düz/iki-per olarak ağırlıkları artar → bağlantılı orta mono en check-ağır uçtur; bet edersen yine küçük, renk kartı taşıyan AK/AQ karışıma girer *(kalibre et)*.

Derinlik: derinleştikçe BB yüksek renk kartını fast-play'e başlar → check payın artar; kısa stack'te renksiz A-x de check'e kayar *(eşikler: kalibre et)*. Turn (dördüncü renk / brick) B11.1'de.

> **Mono flop'ta ilk soru "kimde nut flush" değil (3-bet potunun sorusu), "board rakibin yüksek suited'ını (broadway + Ax) yaktı mı?" — yaktıysa bet, yakmadıysa check; boy her hâlde küçük-tek.**

### 18.2-EK-10 Trips board: rakibin nut'u board tarafından seyreltilmiştir
18.2'nin "kuru eşleşmiş → 1/3" satırı çift board içindir; trips board'da mekanizma değişir: board üç kicker'ı kendisi silmiştir — eşleşen her kicker boat'tır, rakibin boat payı düşüktür ve kicker seyreltmesi yüzünden aralık avantajı nut avantajına dönüşmez *(kalibre et)*. Boyu "savunanın katlanmayan kütlesi Ax mi, broadway mi?" sorusu seçer.

- **IP, BB'ye karşı:** güçlü eller ve overpair'ler küçük ister; overcard'ları katlatmak isteyen hava daha büyük ister ama iki boyun EV farkı ihmal edilebilir → çoğunlukla tek orta-küçük boy. Boy ailesi yalnız büyük tarafı gerçekten büyükse açılır; "biraz daha büyük" istiyorsa boyu küçült, aileyi açma (18.4-EK). Yüksek trips (K-K-K tipi) düşük trips'ten iyi range-bet evidir: rakibin Kx komboları (AK/KQ/KJ dahil) board'a yandı; Ax ise katlanmayan üst kicker katmanıdır, fold payı artışı alt kicker'larda ve bağlantısız kombolarda *(kalibre et)*. Rec sahada orta kicker / suited bağlantılı eller küçük bete teoriden çok katlanır → tam-aralık küçük.
- **OOP, sıkı BTN flat aralığına karşı, düşük trips (7-7-7 tipi):** BTN'nin kütlesi offsuit broadway'dir; Ax katlanmaz → hedef Ax dışını kayıtsız kılmak → büyük eğilimli boy (2/3 civarı, *kalibre et*). Yüksek trips'te yine küçük: board rakibin broadway kütlesinin bir bacağını kendisi bloklar, hedef katman küçüğe zaten katlanır. Bu düğümde OOP'nin EV'si çoğunlukla IP'den yüksektir — tek-raise'li potta nadir bir tersine dönüş *(kalibre et)*.

Savunma tarafı (kicker canlılığı eşiği) B26.1'de.

> **Trips board'da boy çoğunlukla küçülür, frekans yükselir. Tek istisna sıkı-aralık OOP düşük trips — orada offsuit broadway kütlesini kayıtsızlaştıran büyük eğilimli boy *(kalibre et)*.**

### 18.2-EK-11 A-high board'da OOP AÇICI (tek-raise'li, ~30bb): Ax avantajı var, realizasyonu yok — A-düşük check, A+broadway tam-aralık küçük, A-orta+fd 2/3
Üç koltuk, üç cevap — 18.2 IP PFR, 32.3 3-bettor, bu madde OOP açıcı vs IP caller *(frekanslar: kalibre et)*. "A-high, açıcının board'u → bet" refleksi koltuğu karıştırır.

- **A-düşük (A-5-2 / A-6-2 r):** açıcının Ax dışı aralığı ölüdür — KTo/QJo/JTo'nun ne peri ne çekilişi var; caller'ın cep-yoğun aralığı 2'yi 6'yı bağlar, 44/55/66 bete katlanmaz. Bet edecek el az, katlatacak el az → check-ağırlık (kabaca üçte iki). Check'ine karşı caller'ın stab'i ve cevabın 19.4-EK-2'de.
- **A + broadway (A-J-6 / A-T-8):** her şey döner — açıcının bütün aralığı per ya da gutshot alır, caller'ın cep-yoğun aralığı ölür (77'nin EV'si sıfıra yakın) → tam-aralığa yakın küçük bet.
- **A-orta + fd (A-8-6 fd):** boy 2/3'e çıkar — küçük bet backdoor-fd kombolarını (Q9♣/J9♣ tipi) her zaman içeride tutar, 2/3 kayıtsızlığa iter; A-6-2 rainbow'da o kombolar zaten katlanır, küçük yeter. Orta kart caller'ın suited bloğunu eşliyorsa (A-8-6'da 8x) boy büyür; A-7-6 daha pasif.

> **Soru "A bende mi?" değil, "Ax'siz aralığım bu board'da ne yapıyor?"**

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

### 18.3-EK-2 Rakibin devamı raise ise bet "anti-koruma"dır: yüksek eşleşmiş board'da ham-equity eller check-back
18.3'ün "kuru board → hava küçük range-bet" sütunu, rakibin devamının CALL-ağırlıklı olduğunu varsayar. K-K-x / Q-Q-x / K-5-5 tipi yüksek-kartlı eşleşmiş board'da BB'nin doğal call'ı kıttır (board'a çarpan az el, kalanı ya çöp ya trips) → devam aralığı ağırlıkla RAISE'dir *(kalibre et)*. Raise-ağırlıklı düğüme orta elle küçük bet attığında iki neden birden ölür: ince value yok (senden kötü el call etmiyor, katlıyor ya da raise'liyor), koruma yok (raise'i yiyince en iyi eli sen bırakıyorsun). Orta elle bet, çipi ortaya koyup çaldırmaktır.

Devam = raise ise bet POLARLAŞIR: raise'e devam edebilen değer + raise yiyince ucuza pes eden hava — sıfır showdown'lu el küçük bet'le sık fold alır, raise yerse yalnız küçük bet'i kaybeder. Kesilen yalnız orta/ham-equity eldir: Q-J / A-high / alt cep check-back'e gider, turn'de rakibin küçük bet'ine call'la realize eder. Pozisyonla ölçeklenir: BB, EP açıcısına karşı check-raise'i dar tutar, BTN açıcısına karşı top pair'le stack-off'a hazırdır → BTN'den alt cep/orta el check payı artar. Sıkı check-raiser'a karşı cep çiftlerinle raise'e call ETME — nit'e ödeme bu düğümün klasik sızıntısıdır. 18.2'nin "K-K-4 → 1/3" satırı boyu doğru verir; bu -EK frekansın hangi elden kesileceğini söyler.

> **Bet'in sebebi rakibin devam ARALIĞININ ŞEKLİNDEN türetilir; devam = raise ise bet polarlaşır — raise'e devam edebilen değer + ucuza pes eden hava, orta el check-back. Düşük eşleşmiş (3-3-2 tipi) ve A'lı eşleşmiş (A-Q-Q tipi — BB'nin Ax'i top-per call bloğudur) board'da call bloğu vardır, orada range-bet kalır — "eşleşmiş" tek kova değildir.**

### 18.3-EK-3 Islak orta board'da bet lisansı kicker değil YAN-EQUITY'dir
18.3'ün "marjinal showdown → öderse küçük bet" satırı kuru board için durur. Islak orta board'da (8-6-5 fd tipi) "top pair = bet" ezberi K-8/Q-8 ile bet'leyip check-raise yiyince ne fold ne call rahat — iki-sokak bluff-catcher olmaktır. Doğru ayırıcı el gücü değil **"raise'e devam edebilir miyim"** sorusudur: 7-8/9-8 tipi top pair + düz çekilişi (OESD/gutshot) raise'e call eder (turn'ün orta kartları onu iyileştirir, yüksek kartlar rakibi iyileştirmez) → bet; Q-8/K-8'in check-raise'e karşı yapacak bir şeyi yok → check-back, bedava turn. Aynı süzgeç yüksek kartlara da işler: A-K/K-Q tipi hava yenildiği ellerden call/raise yer, katlattığı eller zaten geçtiği ellerdir → bet'in blöf değeri yok, check.

Overpair'de derinliğe bağlı dönüş: 100bb'de AA/KK bet-raise düğümünde value'ya karşı ölü, blöfe karşı sınırda; 9-9/T-T ise koruma ister ve value'yu bloklar (9-9 ayrıca 7'ye gutshot + 9x blocker taşır); check-raise'e karşı o da AA/KK gibi sınırdadır — fark devam rahatlığı değil koruma ihtiyacı → orta cep bet, en büyük çift tuzak/check payı taşır *(kalibre et)*; 40bb ve altında AA/KK stack-off'a razı olduğu için bet'e döner (18.2-EK-3).

> **Islak orta board'da bet aralığını "raise gelirse devam eden" elden kur; top pair'in kicker'ı değil ekstra equity'si karar verir. Rakip agresifse zayıf çekilişleri check'e, nut-fd/güçlü top pair'i bet'e; rakip pasifse zayıf çekilişleri de bet'e ekle.**

### 18.3-EK-4 Düşük board'da blöf adayı "en iyi hava" değil, "daha iyi havayı katlatan hava"dır
5-4-2 r tipi düşük board'da K-Q / K-J / A-J ile "iki güçlü overcard" diye c-bet: bu eller bet'lediğinde katlanan yalnız zaten çöptür; A-high ve daha iyi K-x devam eder → daha iyi eli katlatmadığın, daha kötüden ödeme almadığın bet. K-6 / K-7 / Q-8 tipi orta-yüksek kartlar ise bet'ler: kendinden İYİ havayı katlatır (K-6/K-7 → K-9/K-T'yi, Q-8 → Q-J/Q-T'yi), board'a karşı canlı equity taşır, alt kartlarla rakibin devam aralığını hafif bloklar. Piramit ters kurulur: en güçlü hava check'te realize eder (turn'de per/A gelince value'ya döner), orta hava bet'ler *(çoğunlukla — kalibre et)*.

Havuz notu: BB geç açılışa K-Qo/K-Jo tipi elleri dengeden az 3-bet'ler → bu eller BB aralığında teoriden fazladır → orta-yüksek kart blöfün katlattığı blok teoriden büyüktür *(kalibre et)*. B1'in "blöfü kime, hangi elle" sorusunun flop c-bet sürümü budur; B1.5'in "dipten seç" ilkesiyle aynı yönde.

> **Düşük board'da c-bet blöfünü "hangi daha iyi havayı katlatıyorum?" sorusuyla seç; cevap "hiçbirini" ise en güçlü overcard'larla check.**

### 18.4 Boyut mantığı — 1/3, 2/3, check-back

- **1/3 (küçük):** kuru board range-bet; ucuz fold equity + ince value; **river'da check-fold lüksünü korur** (B11: potu her büyüttüğünde bu lüksü satın alma gücün azalır — bu B11 kuralı flop'ta başlar).
- **2/3+ (büyük):** ıslak board polarize; yalnız potu şişirmek İSTEDİĞİN eller — güçlü value + nut-draw.
- **Check-back:** marjinal showdown value; ıslak/multiway board; pot kontrol + bedava kart hakkı.

> **Boyut = river planının fiyatı. Flop'ta 2/3 attıysan turn'de ikinci fıçının ve river'ın SPR'ını daralttın; havayla o yola girme (B11.1).**

### 18.4-EK Boy ailesi eklemenin gizli maliyeti

Boy ailesi eklemek bedava değildir: en güçlü ellerini overbet hattına taşıdığında küçük bet'in korumasız kalır — rakip ince value ve blöf raise'ini o hatta açar, ince value EV'in oradan sızar. Tek-boy sadeleştirmesinin gizli faydası budur: her sınıf aynı hatta durduğu için raise caydırılmıştır. 18.2-EK'in overbet ailesini açacaksan maliyetiyle aç *(kalibre et)* — kazandığın polar EV, küçük bete kestiğin korumadan büyük olmalı.

### 18.4-EK-2 Polar büyük bet aksiyonu dondurur — rakip raise'lemiyorsa polar'ı bırak, boyu büyüt
18.4'ün "2/3+ yalnız potu şişirmek istediğin eller" satırının iki yüzü var. Polar büyük bet'e karşı rakibin reopen'ı kârsızdır: raise'i nut'a çarpar, blöf raise'i equity'li blöfe çarpar → call/fold'a sıkışır, top pair'iyle bile yavaşlar. Sıkı IP caller için de aynı: büyük c-bet'e raise aralığı teoride neredeyse boştur (çekilişi call için yeterli equity taşır, set/iki-per fıçına karşı yavaş oynar) → büyük bete gelen raise value-yoğun, overpair'le devam sınırda *(kalibre et)*; küçük bete gelen raise'de B19.11 mantığı döner.

Orta eller de içeri girince (88 / A-J tipi ile "büyük range-bet") aralık polar olmaktan çıkar → rakibin en iyi cevabı call'ı büyük ölçüde kısıp raise'i çoğaltmaktır (çoğunlukla); 18.4-EK'in "boy ailesi maliyeti"nin ikizi. Saldırı yüzü: rakip büyük bet'e HİÇ raise'lemiyorsa (havuzun çoğu) check-back'in sebebi kalkar — 88 / A-J'nin check'i raise korkusundandı, call aralığına karşı bet'leri daha yüksek EV'lidir → her şeyi bet'le; AA/KK ise boyu büyütür — rakip senin yerine para koymayacaksa parayı sen koy, overbet sınıfı açılır *(kalibre et; B23.11 ile aynı yön)*.

> **Büyük boy polar kalır (orta eller check); rakip raise'lemiyorsa polar'ı bırak, tümüyle bet'le ve boyu nut'larla yükselt (orta eller küçük/orta boy). Büyük c-bet'e gelen raise = çoğunlukla value.**

### 18.5 IP vs OOP

| Durum | IP (pozisyon sende) | OOP (pozisyon rakipte) |
|---|---|---|
| **C-bet serbestliği** | Daha serbest — kontrol + equity realize | Daha seçici |
| **Tercih hattı** | Kuru board range-bet, ıslak board polarize | Check-call / check-raise'i tercih et; OOP havayla range-bet TUZAK |
| **Kök hata riski** | Düşük | Yüksek — OOP şişmiş pot en kötü bluff-catcher noktası |

OOP c-bet, station'a value keser ama agresöre kapıyı kapatmaz; marjinal ellerle check-call, güçlülerle check-raise daha sağlamdır. OOP havayla c-bet, seni pozisyonsuz şişmiş pota sokar — kök hatanın ta kendisi.

### 18.5-EK OOP range-bet tuzağının sınırı: 3-bet potunda 3-bettor
"OOP havayla range-bet TUZAK" satırı tek-raise'li potta PFR OOP içindir. 3-bet potunda aralık avantajlı OOP 3-bettor kopuk A-high'da tam-aralık küçük bet atar — orada tuzak değil, baseline'dır; A-yok kopuk orta mono board'da ÇOĞUNLUKLA küçük bet (bağlantı arttıkça, caller'ın flush yoğunluğu (non-nut dahil) büyüdükçe check payı büyür — nut-flush payı Axs ile çoğunlukla sende kalır — *kalibre et*). Ayna yüzü de geçerlidir: düşük bağlantılı board'da (7-6-5) OOP 3-bettor çoğunlukla check eder (overpair'lerin bir kısmı hâlâ bet), IP caller'ın nut avantajı olduğu için stab frekansı yükselir (bkz. B32.5).

### 18.5-EK-2 OOP c-bet'in gizli değişkeni: caller BTN ise açıcı kim?
18.5 tablosu OOP'yi tek satırda "daha seçici" der; 18.2-EK "kimin aralığı board lehine" diye sorar ama açıcı pozisyonunu saymaz. BTN'ye karşı OOP PFR'ken bu değişken frekansı ters çevirir:

- **BTN'nin flat aralığı BB'ninki değildir.** 30bb civarı BTN, EP açışına karşı neredeyse hiç 3-bet blöfü bulmaz; çiftleri, suited broadway'i, AJo tipi elleri flat'ler — dar ve yapılı. "8-2s, J-3o" kütlesi yok → "geniş-zayıf aralığa range-bet" mantığı çalışmaz (18.0-EK-3'ün (a) koşulu düşer). B5.2'nin "flat yok"u SENİN reçetendir; rakip flat'lediğinde bu -EK.
- **EP açıcı:** sıkı yüksek-kart aralığı bu flat aralığına karşı equity'de öndedir, OOP olmasına rağmen realize kaybı küçüktür *(kalibre et)* → yüksek/broadway board'larda sık c-bet, gerektiğinde 2/3; düşük/orta board'da 18.2-EK-5/6.
- **CO açıcı:** geniş aralık, daha geniş ama yine yapılı bir flat aralığına karşı equity'de geride; OOP realize belirgin düşer *(kalibre et)*. Lisans board'a göre bölünür: kuru A/K-high board'da nut avantajı yine CO'da (BTN premium'ları 3-bet'lenmişti) → sık küçük c-bet; bağlantılı broadway/orta board'da (K-Q-J / Q-J-T / J-T-9 tipi) BTN'nin flat aralığı daha iyi vurur → check-ağırlıklı, iyi bir check aralığı kurup check-call/check-raise oynamak sıkı-aralık numarası yapan c-bet'ten iyidir. Düşük board'larda ikisi de check-ağırlıklı — CO'nun 7x/6x'i orada frekansı biraz geri alır.

> **OOP c-bet lisansı board'dan önce "açış aralığım BTN'nin flat aralığından güçlü mü?" sorusuyla verilir. EP: çoğunlukla evet. CO: çoğunlukla hayır → check-ağırlıklı — ama equity geride olsa da nut avantajı kuru yüksek board'da lisans verir; bağlantılı board'da aralığı check kolonunda koru.**

### 18.5-EK-3 OOP c-bet frekansını board değil kendi aralığındaki TOZ oranı seçer — EP range-bet eder, CO check eder
18.5'in "OOP havayla range-bet TUZAK" satırı CO/BTN açıcısı için kalır; EP için "tozsuz aralık" şartıyla kalkar. 18.5-EK-2 açıcı pozisyonunu sordu; mekanizması budur *(oranlar: kalibre et)*. 30bb tek-raise'li, açıcı OOP, BTN caller, K-J-8 / K-T-7 tipi yüksek board:

- **EP:** aralıkta toz yok — 66/77 bile backdoor'la yaşar, kalan her şey board'a bağlanır; BTN'nin EP'ye karşı call aralığı KTo/QTo/JTo taşımaz (3-bet'e ya da fold'a gitti), suited Ax + alt cep yoğun → küçük bete belirgin katlanır → EP tam-aralık 1/3, realizasyon belirgin yükselir. Overpair T-9-x'te 2/3'le para yığar. Range-bet'in evi kuru yüksek board'dur (K-8-3 / A-J-4 tipi); K-T-9 / Q-J-9 gibi bağlantılı board'da BTN'nin aralığı da sert bağlanır (kancalar, suited bağlantılılar, set/iki-per) → EP bile check karıştırır, boyu böler.
- **CO:** aralık toz dolu — A7o/A5o, 65s/54s, K4s/Q6s; BTN'nin CO'ya karşı aralığında offsuit broadway tam frekans → aynı bete az katlanır, orta katmanı call eder → CO ağırlıkla CHECK, aralığı check kolonunda korur. Overpair'i de check'e koyar: BTN zayıf aralığa sık stab atar, overpair EV'sini x/r'dan alır.

Test cümlesi: *"Aralığımın kaçta kaçı toz — bet atmak istemeyen, katlanınca üzülmeyen el?"* Toz oranı yüksekse aralık kendi zayıflarını taşıyamaz, frekans çöker. 18.2-EK'in "kuru board BB-lehine → check" satırının aralık-kompozisyon yüzü.

### 18.6 Multiway istisnası

3+ yollu potta bu bölüm askıya alınır: **flop c-bet frekansı ÇÖKER** (B13.1). Range-bet multiway yok; yalnız güçlü value + gerçek nut-draw. Ayrıntı Bölüm 13.

### 18.7 Kalibrasyon

*(kalibre et: son 20 elini üç board dokusuna ayır — kuru/orta/ıslak — ve her dokuda kendi c-bet frekansını çıkar. Rec-ağırlıklı masada hedef board sınıfına ve rakip aralığına göre iki yönlüdür: dinamik board'da ve dar/yapılı aralığa karşı GTO baseline'ının ~%10–15 altı (fold equity düşük); statik/eşleşmiş/düşük-mono board'da geniş aralığın dibine karşı küçük boyla baseline'ın ÜSTÜ — bkz. 18.0-EK-3.)*

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

### 18.10 Sığ bant (15–25bb) IP c-bet: bet ancak jam'e devam edebilen elle
Bu bölümün tabloları 30bb+ içindir. 15–25bb'de BB'nin cevabı yığınla jam'dir (havuz Qx, çekiliş, per+çekilişle küçük bete de orta bete de jam'ler; teori çoğunu call'da tutar) → bet lisansın "jam'e devam edebilir miyim"e iner. B3'ün jam/fold doktrini açıcı için ≤12bb'de kesindir; 15bb BTN min-raise ağacı yaşar *(kalibre et)*. B19.1-EK ve B30.7'nin IP aynası.

**Check frekansı iki yöne gider; yönü orta katmanın jam'e karşı durumu belirler.**
- **Düşük board (5-4-2 r tipi):** A-x offsuit bile jam'e call eder (per'e karşı iki overcard + backdoor ≈ sınırda) → derinde check eden A-x sığda bet'e girer → check DÜŞER.
- **Orta/yüksek dinamik board (T-8-3 / 9-8-6 / K-Q-J fd tipi):** BB top pair'ini ve çekilişini jam'ler; senin Q-x / A-high / zayıf çekilişin jam'e ne call ne fold ister → check YÜKSELİR; 40bb'de range-bet olan board 15bb'de yarı-check olur *(kalibre et)*.

**Dinamik board'da üç kova (Q-7-6 iki-renk tipi):** bet-fold'dan gocunmayan eller (backdoor'lu hava, zayıf per) küçük; bet-call eller (top pair, güçlü çekiliş) orta; A-high / alt cep / JJ tipi alt-overpair check-back — AK/AJ küçük bete jam yiyince call belirgin eksi, bet-fold da pahalı. Top pair'in boyu KÜÇÜLÜR: parayı rakip koyar; rakip Qx ile flat'liyorsa büyük boy geri gelir — boyu rakibin raise sıklığı seçer. Çekiliş-değer dönüşü: derinde çekilişi bet'le, top pair'i yavaş oyna; sığda tersi — top pair "nut", fast-play; çekiliş jam'e call edemiyorsa check. Havuz sığda jam'i teoriden sık bulur → check payını bir kademe daha artır *(kalibre et)*.

> **Sığda bet ancak jam'e devam edebilen elle. Orta katmanın rakibin jam aralığına karşı sınırda-önde ise (düşük board) check azalır; geride ise (dinamik orta/yüksek board) check artar. Bu üçlü 30bb+'ya taşınmaz — orada 18.3 aynen durur.**

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

### 19.1-EK-2 20–30bb bandı: düşük-bağlantılı board'da lead aralık-genişliğine yaklaşır — boyu ikinci kartın geleceği seçer

19.1 varsayılanı 30bb+ ve yüksek board içindir; 19.1-EK ≤15bb'yi jam/check'e bağladı. Aradaki bant — baseline'ın altı — kendi kuralını taşır:

- **Board:** 7-high ve altı, üç düşük kart yakın (6-5-4, 7-6-5, 7-6-4). BB aralığı kent/iki-per/set/düşük per yığını; EP/HJ'ninki offsuit broadway + cep çift. 8/9-high'da frekans hızla erir, A/K-high'da sıfıra yakın *(kalibre et)*.
- **Ne kadar:** 20bb'de ağırlıkla küçük boyla tam aralığa yakın (kombo top pair tabloya göre büyük/jam'e ayrılır); 30bb'de kabaca üçte-iki; 60bb'de yarının altı *(kalibre et)*. Lead'in parası rakibin fold'undan değil kötü fiyata devamından gelir; frekansı en çok IP'nin overcard-Ax blöf-raise'i düşürür — havuz onu atmaz, eğri düzleşir. Raise yersen 20bb'de per+gutshot kombosu (ve daha iyisi) devam — salt gutshot ve zayıf tek per raise'e atılır; 30bb'de zayıf top pair bet-fold.
- **Boy:** 19.1'in "tek per büyük donk = kök hata"sı 30bb+'da durur; burada top pair ikiye ayrılır *(kalibre et)*:

| Top pair | Boy | Neden |
|---|---|---|
| Per + ikinci kart çalışıyor (7-6, 8-6, 6-3) | Büyük, sınırda jam | Gelişince aksiyon ölür ya da kente yenilir — para ŞİMDİ |
| Per + yüksek kicker (K-6, Q-6) | Küçük | KQ/KJ'yi içeride tut, turn'de per yapsın — cooler parası |

BTN'e karşı boy büyür (offsuit 9x/Tx/zayıf Ax bloğu). 60bb'de tablo kapanır: 7x "üç sokak küçük-orta" elidir.

### 19.1-EK-3 Lead call yedi, turn: boyu kartın yüksekliği TERS seçer — river geometrisi asıl seçici (20–30bb)

Hedef hep aynı: IP'nin flop'ta devam eden offsuit broadway bloğu. Boy, o bloğun turn'de ne yaptığına göre:

- **Yüksek turn (Q/K/J):** bloğun bir kısmı eşleşti (ödeyen sınıf), kalanı (eşleşmeyen broadway'ler; örn. Q turn'de KT/JT) küçük bete de katlanır → KÜÇÜK verimli. Havuz "korkutucu kart, range-check" yapar — sen yarıdan fazla FREKANSLA (küçük boyla) bet et *(kalibre et)*.
- **Düşük/eşleşen turn (6/4/2):** blok eşleşmedi ama overcard'larıyla küçüğe devam eder → BÜYÜK, üçte-iki civarı *(kalibre et)*. Blöf: bloğu bloklamayan düşük kartlar (9-2/5-2 tipi); K/Q taşıyan blöf onun fold'unu bloklar, T taşıyan KT/JT'yi keser — o da aday değil.
- Flop'ta büyük lead attıysan blok zaten düştü → yüksek turn'de bile bet.

**River geometrisi:** düşük turn + büyük bet → SPR ~1, hemen her river'da 7x/6x'in çoğuyla pot-jam, çoğunlukla tek boy. Yüksek turn + küçük bet → river'a çok orta el taşınır, value-jam sınıfı erir, boy üçe bölünür. Turn boyunu "river'da kaç value-jam'im olacak?" seçer. 11.1 tablosu elin sınıfına, bu madde rakibin bloğuna göre seçer — lead-call sonrası ikisi de okunur.

**Sınır:** küçük-küçük-jam sığda çalışır; ~50bb+'da rakibin overfold'unu sağmak river'da büyük bet'i kaybettirir → derinde flop/turn'ü geometriye göre büyüt *(kalibre et)*. Aynı kural IP c-bet'e de taşınır.

### 19.1-EK-4 İkinci tetikleyici: rakibin c-bet İSTEKSİZLİĞİ — dinamik orta board'da overpair en sık lead eli

19.1 lead'i board sahipliğine bağlar. Bağımsız ikinci tetikleyici: doku IP'nin aralığının büyük kısmını bet'ten caydırıyorsa (orta-bağlantılı iki renkli 8-7-5 / 9-7-5: Ax/KQ/KJ bet edince katlattığı az, check-raise'e açık; zayıf per ve orta Qx bet istemez) check'in bedeli bedava turn'dür — ona da sana da. Soru "board benim mi" değil "rakip bu dokuda bet ister mi".

- **Aralık:** neredeyse tam. Overpair EN SIK lead eli *(kalibre et)* — check-call'a taşımak en zayıf kullanım: rakip check-back'le 9x/5x'ini bedava realize eder. Top pair koruma için biraz büyük, zayıf per küçük, T9/J9 overcard'ları equity'yle. Bu nut avantajı iddiası değil, rakibin bet istememesidir (19.12 ayrımı korunur).
- **Turn (overcard K):** ~%40 boyla devam *(kalibre et)*; overpair'i çoğunlukla bet et — K, IP'nin KQ/KJ devamlarını güçlendirdiğinden bir kısmı check-call'a kayar — 5x/7x check'e çekilir → aralık polarlaşır. IP'nin A-high'ı teoride bile fold — havuz call eder, senin value'n.
- **River (nötr-kötü Q):** overpair CHECK — rakibin blöf adaylarını unblock ediyorsan onu blöfe bırak (11.1-EK-2); value-jam Kx/kent'te.
- **IP dersi:** dinamik board'da bet-bet'e A-high'la turn call kötü — river'da blöf kapısı yok, A river'ında lead'ci zaten check eder.

Sığ-orta stack (~25–35bb) örneği; derinlikte mekanizma aynı, frekans düşer *(kalibre et)*.

### 19.2 Gecikmiş c-bet — PFR flop check, turn bet

Gecikmiş c-bet: PFR'sın, flop'u check-back ettin (pot kontrol / bıraktın / tuzak), turn'de bet. Bu, B18'in otomatik c-bet refleksinin DİSİPLİNLİ zıddıdır: geniş flop c-bet'i atlayıp turn'de bir SEBEP çıkınca bet edersin.

| Turn'de bet et — sebep | Bet etme |
|---|---|
| Turn'de geliştin (per/draw yakaladın) | Sebepsiz — flop give-up'ını turn'de bloat'a çevirme |
| Villain ikinci kez check etti (zayıflık) | Villain turn'de lead/check-raise eğilimli |
| Turn kartı senin aralığına yaradı | Equity yok + fold equity yok |

Marjinal yapılı elle: flop check → turn ince value bet (sana check gelirse). Küçük boyut.

### 19.2-EK "İkinci check = zayıflık" yalnız LEAD ATAN rakipte — lead aralığı olmayanın check'i tüm aralığıdır (AA ile bile check-back)

19.3 "PFR flop'u check-back ettiyse capped" der — doğru, güçlü elleri flop'ta bet ederdi. Aynı mantık OOP'nin turn check'ine otomatik taşınmaz: havuzun çoğunun turn lead aralığı YOKTUR. 19.2 tablosunun "villain ikinci kez check etti" hücresi bu şarta bağlıdır.

- **Lead atan reg** (19.12'yi oynayan): K-7-3-7'de 7x/güçlü Kx/kent draw'la lead eder → check'i capped → 19.2: ince value + blöf.
- **Lead aralığı olmayan havuz:** check'i tüm aralığı — 7x, Kx, 54/65 semi-blöf, QT/T8 ıskalaması. PFR IP'nin cevabı neredeyse tam aralık CHECK-BACK, AA dahil *(kalibre et)*. Neden: (a) flop küçük bet offsuit broadway bloğunu zaten katlattı, kalan aralık board'a yoğun; (b) 9x/QJ ile bet 7x'ten VE semi-blöften check-raise yer; (c) check-back'in EV'si river'da doğar — QT/65 blöfler, zayıf Kx blok-bet atar → raise'lersin. 9-7-3-7'de biraz bet açılır (TT/JJ tipi orta cep perleri hedef).

**Exploit:** havuz IP bu turn'de ince bet + fazla blöf yapar → orta-kart-eşleşen turn'de OOP check-raise ve river blöf hacmini aç. 11.1 "board eşleşti → overpair check" satırının mekanizması budur.

### 19.3 Probe bet — flop check-check sonrası OOP bet

Probe: flop check-check gitti (OOP'sun, PFR flop'u check-back etti = zayıflık, aralığı capped). Turn'de (ya da river'da) sen bet atarsın.

> **PFR flop'u bıraktıysa güçlü ellerin çoğu flop'ta bet ederdi → aralığı capped. Turn'de bu capped aralığa OOP bet ile inisiyatifi al.**

| Probe AÇIK | KAPALI (→ check) |
|---|---|
| PFR check-back'i zayıflık (rec norm) | PFR güçlüyle tuzak için check-back (nadir, kurnaz reg) |
| Turn kartı senin aralığına yaradı | Turn kötü, aralığını ıskaladı |
| Elin showdown value'suz (bet en iyi kullanım) | Marjinal yapılı el → check-call ile realize et |

Boyut: küçük-orta. "Flop check-check → turn/river çalınır mı" sorusunun cevabı: evet, capped aralığa karşı.

### 19.3-EK Probe boyu: turn'ün SANA verdiği sınıf + rakibin c-bet frekansı seçer — "küçük-orta" yalnız geniş-zayıf check-back içindir

**Kovalar** *(kalibre et)*:

| Turn sana ne verdi | Örnek | Boy |
|---|---|---|
| Orta-value yığını (offsuit Qx'in tamamı sende; 6-6-3-Q'da trips'ten kat kat fazla) | 6-6-3-Q, 8-5-2-Q | Küçük merged (~üçte-bir): A/K-high öder, raise'e açılmaz; river'da büyür |
| Ara: overcard bloğu hedef | 7-6-4-9 | Yarım pot — "AQ hangi boya katlanır?" |
| Nut + hava (value ~nut; blöf adayı bol: offsuit Ax, 5x, gutshot, FD) | 7-6-4-4, T-9-3-6, K-Q-5-2 | Büyük polar 1.2–1.5×: küçüğe katlanmayan orta katman büyüğe katlanır (7644/T936'da hedef AK/AQ/cep çift; KQ52'de A-high + cep çift — AK/AQ orada per) |
| Nut ona geçti | 7-6-4-A | Aralık check |

26.6'nın yüksek-SPR akrabası: orada büyük kova jam, burada overbet. River onun aralığını eşliyorsa (K-J-7-3-T) 2/3–pot'a in.

**Rakibin c-bet frekansı.** Aralık-bet'i bilmeyen IP birinci/ikinci katmanı bet eder, üçüncüyü (A-high, K-high, underpair, zayıf Jx) "bet'in ne işi var" diye check eder → düşük c-bet frekansı tuzak değil "üçüncü katman check-back"idir; o katman büyüğe katlanır, küçüğe öder → probe BÜYÜK ve tam aralığa yakın *(kalibre et)*. Yüksek-frekanslı reg'in nadir check-back'i ayrı hayvandır → tabloya dön. 23.10'un over-bluff uyarısı IP-barrel içindir; bu madde OOP probe — ama düşük-c-bet etiketi olmadan probe'u büyütmek tam o over-bluff'tur.

### 19.3-EK-2 River probe (x/c flop, x/x turn): güçlü sınıf 2× pot, jam sınırda — sıkı aralığa tek boy, genişe blok + 2×

19.3'ün "(ya da river'da)" parantezi. BB vs EP 60bb, 6-5-3'e küçük c-bet call, turn T check-check, river 6 (SPR ~4–5). IP'nin turn boyları bu düğümde pot ve üstü (polar) → check-back'i overpair'siz, güçlü Tx'siz, set'siz gelir; kalan A-high catcher'lar (AK/AQ/AJ), 77–99, birkaç zayıf Tx. Zayıf ama boş değil — "fiyata göre öder" aralığı.

- **Boy:** 6x trips / 7-4 / boat için **2× pot** *(kalibre et)*: Tx ve çiftler öder, iyi A-high catcher'lar (A5/A3) call. **Jam (5× pot) sınırda:** ona A5/A3 de 88 de katlanır, ödeyen yalnız 6x — fazladan kazanç yok, kaybedilen catcher var. 11.2'nin "overbet" satırı 5× potu kapsamaz; catcher yüzünde 2×'e iyi catcher call, 5×'e fold. Blöf 2×'te: 6x'i (A6 kicker'ını) bloklayan adaylar listenin BAŞINDA — rakibin call'larını azaltır; K7-suited tipi 7x de iyi (77 catcher'ını bloklar); rakibin fold ettiği A-high'ları bloklayanlar listenin sonunda.
- **Rakip pozisyonu:** EP'ye tek boy (ince value ödeyeni yok, blok'un hedefi yok); CO'ya iki boy — 3x/5x/Tx ile küçük blok + zayıf 6x dahil 6x/74/boat ile 2× *(kalibre et)*.
- **Dipnot:** turn'de IP polar büyük bet atar → check-call aralığına boş river'ı savunacak çift bırak. Havuz hipotezi: bu düğümde havuz over-call eder → value'ya yaslan, blöfü kıs *(showdown'la doğrula)*.

### 19.4 Stab — IP, check gelince potu al

Stab: IP'sin, herkes sana check etti (flop ya da turn). Kimsenin istemediği potu küçük bet ile al. En temel, en düşük riskli inisiyatif aracı — sana check geldiyse herkes zaten zayıflık gösterdi.

| Stab AÇIK | KAPALI |
|---|---|
| HU, sana check geldi, herhangi equity/fold equity | Multiway (biri tuzakta) |
| Checker'ların ıskaladığı board | Checker'ların aralığına çarpan board |
| Boyut küçük | Check-raise eğilimli villain / SD value'lu el bedava showdown istiyor |

### 19.4-EK Stab tablosuna 3-bet-pot satırı
3-bet potunda iki stab hattı vardır. (1) Caller IP, düşük board (7-6-5 / 6-5-4), 3-bettor check etti: küçük stab neredeyse tam-aralık — 3-bettor'ın broadway'leri hiçtir; sınır sorusu "3-bettor'ın overcard/broadway kesimi düz çekilişi alıyor mu?" (8-7-6 / 9-8-7 ve iki üst kartı ardışık 9-8-2 / 8-7-3 tipi — 9-8-2'de JT/QJ, 8-7-3'te T9/JT çekiliş alır — evet → seçici; 9-5-2 / 8-4-2 tipi gerçek kopuk hayır → serbest; *kalibre et*). (2) Yüksek-kart bağlantılı (K-Q-x tipi) board'da OOP check'ine karşı KÜÇÜK stab verimsizdir — check aralığının çoğunu (cep çiftleri, gutshot'lı broadway'ler) katlatmaz, yalnız zaten en zayıf eller düşer; yarım pot civarı + A taşımayan düşük suited bağlantılı / gutshot blöfler (düşük Ax katlanan A-high bloğunu bloklar, listenin sonunda) (bkz. B32.5). Tablonun "boyut küçük" hücresi ikinci hatta geçerli değildir *(kalibre et)*.

### 19.4-EK-3 3-bet potunda IP stab'ın ikinci sokağı: flop küçük, turn ÇOK küçük — jam bu hattın parçası değil
19.4-EK ve 32.5 flop stab'ı verdi; hat orada bitmez. OOP 3-bettor'ın range-bet etmesi gereken orta-düşük board'u (9-6-4 tipi) check ettiği düğümde *(kalibre et)*:

- **Flop küçük stab** — hedef, range-bet'i atlayan orta-zayıf eller (KJ/KT/A5 tipi, value görmeyen AJ/AQ). OOP'nin cevabı ikiye ayrılır: çiftler ve overpair'ler x/r; A-high (AK/AQ/AJ, backdoor'lu KQ) check-call.
- **Turn brick, yine check → ÇOK küçük (min'e yakın) bet** *(boy: kalibre et)*. Check-call bloğu A-high'dır; küçük bete teoride kısmen, havuzda büyük ölçüde katlanır. "SPR ~1, jam doğal" refleksi aynı bloğu daha pahalı katlatır ve x/r'a gitmeyip check-call'da kalmış çiftlere karşı riski büyütür.
- **Flop'ta x/r yedin → per, fold.** Rakibin x/r aralığı per-ağır; stab'ın per'siz blöfleri (QJ/T8s/87s tipi backdoor+gutter) burada biter, T9/86s tipi ince value/protection stab'ları da bet-fold olur.
- **Derinlik:** 40bb'de çalışır, derinde daha kârlı — turn küçük bet'in ardından river'da hâlâ fold equity kalır.

OOP tarafı (hangi 3-bet aralığıyla check yerine küçük range-bet) 32.5-EK-2'de.

### 19.4-EK-2 A-düşük board'da OOP check'ine IP tam-frekans stab — OOP'nin cevabı ince VALUE x/r, bluff-catch değil (tek-raise'li, 30bb)

Havuz iki koltukta da teoriden pasiftir ve her pasiflik ayrı exploit açar. A-5-2 / A-6-2 rainbow'da OOP açıcı check etti (Ax'siz aralığı ölü — c-bet yüzü B18'de):

- **IP (caller):** "onun board'u" diye check-back etme. Teoride OOP'nin check aralığı küçük stab'e çoğunlukla ~%25–30 katlanır *(kalibre et)*; havuz J9/Q9/K8s/98s tipi her şeyi katlar → %40+ *(kalibre et)*. Her karışık blöf adayı (J9s/T8s/K9s/Q9s) tam frekansa çıkar; tablonun "boyut küçük" hücresi burada aynen geçerli.
- **OOP (açıcı):** stab'e karşı "bluff-catch aralığımı koruyayım" diye AQ/AJ'yi call'da tutma. Teori x/r'ı dar tutar çünkü zayıf call'ları (J9/Q9) korumak ister; havuzda o call'lar zaten yok ve IP'nin stab'i teoriden az blöf, çok equity taşır → en yüksek EV cevap AQ/AJ/AK/set ile İNCE value x/r; bluff-catch genişletmek değil.
- **A-K-x rainbow:** havuz alt ceplerini (22–99) fazla katlar → onları bloklamayan QT/JT tam-frekans blöf; Kx'i daha az bet — kötüler zaten katlanıyor, ince value/koruma EV'si düşer (üstelik K'n rakibin ödeyen Kx'lerini bloklar).

23.8 cheat kartına "A-düşük OOP-check düğümü" satırı adayı.

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

### 19.11-EK Düğümün iki sınırı: büyük c-bet'e IP raise teoride çoğunlukla YOK (gelirse value) — raise-happy rakibe küçük boy + flop-3-bet
19.11'in "raise ucuz" satırı rakibin KÜÇÜK bet'ine karşıdır; iki uç onu sınırlar *(kalibre et)*.

**Büyük polar c-bet'e reopen kârsız.** Sıkı IP caller'ın büyük bete raise aralığı teoride neredeyse boştur — çoğunlukla call'a çöker: çekilişi call için yeterli equity taşır, jam'lenmek istemez; set/iki-per fıçına karşı yavaş oynar; raise-fold edecek eli yok. Raise yalnız küçük bete açılır (per+gutshot, backdoor'lu Ax, AA/KK hızlı). → Büyük c-bet'ine gelen raise value-yoğun, overpair'le devam sınırda; küçük bete gelende 26.2 döner. Turn/river devamı 11.1-EK-3 ve 26.4-EK'te; saldırı yüzü 18.4-EK-2.

**Raise-happy rakip (B23 etiketi):** küçük bete deli gibi raise'leyene "büyük bas" değil, raise'leyeceği düğümü VER — AA/QQ/AQ'yu küçük boya taşı, rakip potu kursun, sonra flop-3-bet/jam (≤40bb standart; derinde non-all-in, aynı yön). Teşhis ikiye ayrılır: (a) ince value'yu da (Q-9 tipi top pair) gutshot'ları da raise'liyorsa → alt cep/A-high bet-fold da bet-call da istemez → check artar, bet küçük-only; (b) yalnız blöf/gutshot raise'liyor, ince value'yu call'da tutuyorsa → tam-aralık küçük bet + per/gutshot/top pair'le 3-bet jam — raise-call'a mecbur el bulamaz. Turn — (a) profili: ince value'yu flop raise'ine harcadığı için call aralığı turn'de capped → büyük turn bet aralığın çoğuyla; (b) profilinde call aralığı ince/güçlü value içerir — capped varsayma. 19.11'in "havuz flop-3-bet bulmaz"ının ters profili: bu rakibe flop-3-bet'i SEN bul.

### 19.12 Turn lead (flop'ta bet-call SONRASI): avantajın TÜRÜ boyu seçer

19.3 probe'dan farkı: flop'ta rakip BET attı, sen call ettin, turn'de OOP lead düşünüyorsun. **Equity avantajı** ile **nut avantajı** farklı boy ister.

Flop'ta büyük bet'e call ettin → aralığının altı katlandı, rakip hâlâ blöflerini taşıyor. Orta-düşük turn (BB aralığının yoğunlaştığı bölge) orta-düşük kartla dolu aralığına yeni per/draw ekler (board eşleşirse trips/iki-per), onun overcard-blöflerine değil → equity sana kayar *(kalibre et)*; ama nut ONDA: overpair/set'leri aralığında bozulmadan duruyor, senin en güçlü ellerinin bir KISMI flop'ta x/r'a gitti — aralığın kısmen kapaklı, onunki değil. Büyük bet yanlış — havası katlanır, ödeyen seni geçer. Araç: ÇOK küçük lead *(kalibre et)*, GENİŞ aralık (orta per, zayıf top-pair, iyileşen draw). Test: rakip "küçük bete hiç katlanmam" dese memnun musun? Evet → küçük lead. "Her şeyle all-in olsak" dese? Hayır → büyük bet yok.

**Lead aralığın = flop'ta RAISE'lemediklerin.** Büyük flop bet → call-ağırlıklı savunma → sınıfı bozulmamış geniş aralık → küçük-geniş lead alanı geniş. Küçük flop bet → çok raise'ledin (top-pair, kent draw, alt-per koruması) → elenmiş aralık → lead daralır; kent tamamlansa bile çoğunlukla lead vermez, kent draw'larının büyük kısmı flop'ta raise'e gitmişti *(kalibre et)*. Kalan lead yeri: raise'lemediğin ama turn'de NUT'a dönen sınıf — tipik olarak board'un alt/orta kartının eşleşmesi → daha büyük boy, daha dar aralık *(kalibre et)*. İkisi de yoksa check. Exploit: havuz küçük lead'e overcard-çöpünü katlar, nadiren raise eder.

### 19.12-EK Nudge bir hat değil üç şartın buluşmasıdır — 3-bet potunun caller'ı, SB flat'i ve multiway de nudge'lar

19.12 mekanizmayı BB-vs-geç-pozisyon örneğiyle verdi. Üç şart; sağlanan her düğüm nudge evidir:

1. **Senin aralığın "güçlü-zayıf"** — çok orta per, çok draw, az hava.
2. **Rakibin aralığı uçlu** — hem daha çok hava hem daha çok nut → equity sende, nut onda → küçük boy.
3. **Rakibin turn-raise güdüsü sıfıra yakın** — lead'in maliyeti yok.

| Ev | Neden | Lead |
|---|---|---|
| BB vs CO/BTN, flop bet-call | Klasik (19.12) | ~%10–15 |
| 3-bet potu, OOP caller (T-4-2 / K-Q-x, küçük c-bet'e x/c, boş turn) | 3-bettor'ın overpair'i raise'e muhtaç değil, AK/KQ'su raise'le kimseyi katlatamaz; check-back'i A/K-high yığını | ~%20 *(kalibre et)*: A/K-high'dan ödeme, Ax'in büyük boyunu keser; raise gelirse ucuz bilgi |
| SB flat → BTN range-bet'e x/c → boş turn | Aralığın cep+per+draw; onun K/A-high check-back'i bol | Küçük: ıskalayan KJ'yi katlatır |
| Multiway, range-bet'çiye x/c, flush-ağırlıklı aralık | Check-call'da flush/per/set, hava yok | Küçük; blöf-raise riski sıfır |

Havuz tepkisi ortak: pasif ve dürüst — AT/KJ ile call, raise'i yalnız nut'la; solver'ın karışık lead'i rakibin raise'i kısıtlanınca tam aralığa yaklaşır *(kalibre et)*. Nudge sonrası kötü river: 11.1-EK-2.

### 19.13 Lead'e karşı IP: boyu oku, sonra aralığının DİBİNE karşı oyna

19.12 lead ATAN tarafı verdi; lead YİYEN taraf üç düğümdür ve tek soruyla açılır: lead'in boyu ne diyor?

1. **Küçük lead (~%10–15) = check gibi.** 40bb CO vs BB, T-6-4'e büyük c-bet call, turn 5, BB küçük lead: equity onda, nut sende. Solver'da IP'nin bu lead'e cevabı check'e cevabıyla kombo-kombo örtüşür *(kalibre et)*: check'e barrel'layacağın QJ/KQs → raise; check-back edeceğin K-high/zayıf 6x → call; fold birkaç saf çöp. Havuz IP sersemler — raise'i keser, broadway'i katlar, "kent olabilir" diye orta eli pasif oynar. Lead'cinin çoğu eli tek per ya da draw: dibine karşı oyna, tepesine değil.
2. **Üçte-bir lead = gerçek bet.** Doğru oynayan BB üçte-biri polar atar (kent/güçlü Tx/iki-per/seçili blöf) → offsuit broadway ve zayıf A-high fold'a döner *(kalibre et)*. Burada "check gibi" oynamak kök hatadır.
3. **Üçte-biri TÜM aralıkla atan = jam düğümü.** Lead'i öğrenmiş, boyu öğrenmemiş rakip 4x/5x/zayıf Tx/draw'ı da üçte-bire sokar → tüm Tx, 7x+overcard, A8 tipiyle JAM — per+draw'ı bu SPR'de bet-fold edemez; QJ/AQ orta eller fold. Etiketi not et.

**Sen lead atarken aynı yasa:** aralık-lead'in boyu gerçekten küçük olmalı; üçte-bir polar lead'in boyudur.

### 19.14 Probe'a karşı IP: check-back kapak değil, raise düğümü — büyük polar'a raise yok, küçük-orta'ya ~%15–20 raise

Flop'u check-back ettin, OOP turn'de probe attı. Havuz IP "kapaklandım, o biliyor" korkusuyla neredeyse hiç raise etmez. Düğüm probe'un BOYUNA göre ikiye ayrılır (19.3-EK'in aynası):

- **Büyük polar probe (pot+ / 1.2–1.5×) → raise ~%0–5.** 7-6-4-4, T-9-3-6, K-Q-5-2'de rakip nut+hava ile potu kendisi kurdu; check-back'teki AA'n onun value'sunu (4x/7x, Kx) yenmiyor, blöfünü koparmak için raise gerekmez → call/fold *(kalibre et)*.
- **Küçük-orta probe → check-back aralığının ~%15–20'siyle raise** *(kalibre et)*: rakip ince value'suyla potu büyütmedi VE sende onu yenen el var.

| Board | Value raise | Blöf raise |
|---|---|---|
| 7-6-4-9 (yarım) | A9 %100, K9 %50, Q9 %25; T8 | KT/QT/JT: overcard+gutshot, out'u temiz |
| T-9-3-Q (küçük) | Qx üstü iki-per, güçlü Qx | Kx: KQ/KJ'yi bloklar, kent out'u |
| 6-6-3-Q (küçük) | iki-per/trips — DAR (onun AA/KK'sı raise'ini bekler) | 8-7 sınırda |
| 7-6-4-A (küçük) | güçlü Ax, iki-per | flop'ta bet-fold'a girmemiş 5x/8x/J5 |

Raise boyu küçük (~2.5× bet); frekans merdiveni %100/%50/%25 — sırayı tut. OOP yüzü: küçük probe'a nut raise etmez, senin blöf-raise'ini ister → küçük probe'u yığın-ağırlıklı at.

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

### 21.3-EK-2 Cover eden BB %90-100 savunur — rakibin primi senin realizasyonun; lider river'da boy kaldıracı kullanır

Derin BB'de "ICM → daralt" refleksiyle marjinal suited/bağlantılı elleri min-raise'e katlamak yanlış koltuğun kuralıdır. Seni cover ETMEYEN açıcının her postflop chip'i bust riski taşır → büyük flop boyu, agresif barrel, hero-call yapamaz. chipEV'de büyük boyla ezilen alt-per/backdoor eller burada equity'lerini FAZLASIYLA realize eder; üstüne flop lead gibi chipEV'de kapalı araçlar açılır. Sonuç: cover edilirken daralan savunma, cover ederken genişler — derinde %90-100'e yaklaşır *(kalibre et)*; 3-bet value dilimi ise dar kalır (12.2-EK-2). İkinci kol — boy kaldıracı: rakip ICM'le kilitliyse (over-fold'a mahkûm) lider chipEV'ye yakın oynar ve river'da chipEV'de saçma görünen aşırı boyları (potun katları *(kalibre et)*) kullanır — kaybettiği dilim stack'ine göre küçük, rakip için bust. 21.3'ün "bir kademe yukarı"sı iki somut kola iner: preflop savunma genişliği + river boy kaldıracı; 21.7 kartı bu iki satırla okunur. Sınır: iki büyük stack birbirine karşı — kaldıraç kapanır, prim karşılıklı (22.4).

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

### 21.7-EK "Boyut: büyük/polarize" satırının sınırı — kilitli rakibe baskı BOYLA değil FREKANSLA satılır
21.7'nin lider sütunundaki "boyut büyük/polarize" rakibin fiyat okuduğunu varsayar. ICM'le kilitli rakip fiyat okumaz: offsuit 8x/3x'ini, zayıf per'ini boydan bağımsız katlar → fold oranı boydan bağımsızsa aynı fold'u en ucuz boy alır — küçük c-bet, küçük lead, küçük ICM squeeze/3-bet (22.8-EK'in "küçük ICM 3-bet ucuz fold-equity satın alır" satırının lider tarafı). Baskı, boyu değil FREKANSI yükselterek satılır: daha çok el aç, daha sık bet, her biri küçük *(sapma: kalibre et — sınırda)*. İstisna iki yönlü: (a) jam-or-fold bandındaki kısa BB min-raise'e fiyatla call ediyorsa boy o call'ı kesmek için BÜYÜR (12.4-EK, 12.2-EK-5); (b) kilitli değil fiyat okuyan reg'e karşı 21.7 aynen — value'yu büyük boyla al. İlke: rec'e / kilitliye karşı boyu ELİNLE seç (rakip fiyat okumuyorsa elin ne istiyorsa o), reg'e karşı ARALIĞINLA (27.12, 23.6-EK). Kilitli hedefi 12.4 seçer, bu satır fiyatını.

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

### 22.1-EK-3 Bubble-factor eğrisi: balon zirve → ITM çöküş → FT BAŞI en yüksek; ilk faz liderin hasat penceresidir
22.1'in dört fazı yönü verir; eğrinin ŞEKLİ üç sonuç ekler *(hepsi kalibre et)*. Prim balonda zirve yapar, ITM'de çöker, FT'nin başında döngünün EN yüksek noktasına çıkar — balondan bile yüksek: her basamak stack'e göre büyük, herkes birbirini cover ediyor.

1. **Hasat penceresi.** FT'nin ilk fazında (ilk eleme ya da ilk kısa bust'lara kadar; süresi masaya göre) herkes sıkı → lider cezasız soyar; pencere ilk bust'la daralır, her elemeyle prim bir tık düşer (22.1 madde 4). Kısa/orta için aynı faz en dar fazdır — 22.2-EK aynen.
2. **ICM sim'i future-game'i görmez.** Lider olarak sınırda genişlemeyi suited-yakın, oynanabilir ellerle yap; offsuit broadway'le değil — sim'in eşit gördüğü iki elden postflop realize eden kazanır (22.10'un lider hâli).
3. **Pasif sahada squeeze yok → geniş flat.** Masa squeeze bulmuyorsa liderin IP flat'i cezasızdır (12.4-EK "masayı dondur"); squeeze bulan reg masasında tersi.

28.6-EK'in "FT'deyim, sık" refleksinin ters yüzü: FT başı liderin en geniş, kapsananın en dar fazıdır.

### 22.1-EK Bubble tek faz değil, eleme-başına kademedir — jam'ci alt katmanı keser, cover eden caller sabit kalır; liderin silahı call değil baskı

"23 kaldı, 20 ödeniyor → bubble'dayım" da, "daha 3 kişi var → chipEV" de yanlış; prim eleme-başına birikir. Üç parça: (1) Jam'ci (cover edilen) — ödeme sınırına yaklaşan her elemede marjinal jam'lerin EV'si belirgin düşer *(miktar: kalibre et)*; tepe (AK/QQ) neredeyse etkilenmez, silinen hep alt katmandır (küçük-orta çift, offsuit A-yüksek, orta suited broadway) — 22.1'in faz priminin eleme-başına okunuşu; cover eden jam'cide katman bu kadar silinmez. Pure bubble'da o katman büyük ölçüde fold'a döner. (2) Cover eden caller — kaybetse de paraya fold'layabilen stack'in call aralığı bubble yaklaşırken NEREDEYSE değişmez (orta çift + A-yüksek çekirdek *(kalibre et)*; cover edenin primi ~0 — B20); alt sınır bir çift oynar, "6'lı çiftler / KQs girer" çoğunlukla olmaz. (3) Pure bubble'da lider — masanın GÖRELİ en geniş call'ı yine herkesi cover eden stack'tedir (kaybetse de paraya girer); ama düz ICM'de gereken call equity'si balona yaklaşırken hafif YÜKSELİR ve jam'cinin aralığı da daraldığı için liderin mutlak eşiği bile bir tık DARALIR *(kalibre et)* — "pure bubble'da lider açar" ezberi yanlış; liderin bubble avantajı call tarafında değil, call edemeyen stack'lere jam/raise ederek baskı tarafındadır. Kural: kaç kişi kaldığını değil, "ben mi elemeyi bekliyorum, beni mi bekliyorlar"ı güncelle — jam'ciysen alt katmanı her elemede kes, cover eden caller'san aralığı sabit tut (pure bubble'da sınırda bir tık daralt), baskıyı call'la değil jam/raise'le sat. 22.2 tablosu değişmez.

### 22.1-EK-2 Yumuşak bubble testi — "bu stack'le paraya fold'layabilir miyim?" ve saha büyüklüğü

Kalan/ödenen ORANINA bakıp her sahada aynı bubble aralığını oynamak iki şeyi kaçırır. (1) Saha büyüklüğü: küçük-orta sahalar (birkaç yüz kişiye kadar) benzer call aralığı verir; saha bir eşiği geçince *(kalibre et)* pure-bubble call aralığı belirgin sıkılaşır — kalan masalarda başkalarının hata hacmi büyür, edge primi (B24) kalınlaşır. FT'de küçük stack-EV'yle alınan spot, dev saha bubble'ında stack'e göre büyük bir kazanç *(kalibre et)* ister; 24.2-EK'in saha çarpanı budur. (2) Yumuşak bubble: paradan ~%20 uzakta küçük sahada call aralığı pure-bubble'a göre çok geniştir (chipEV'nin bir kademe altı); büyük sahada aynı yüzde daha da GENİŞ gelir — 15bb o kadar elemeyi fold'layarak bekleyemez. Test: "paraya fold'layabilir miyim?" HAYIR → yumuşak bubble gamble fazıdır: hard bubble'a stack'le gelmek (30bb ile bubble'ı ezmek) küçük call'ları pas geçmekten değerlidir. EVET → pas geç; aynı rakip sonra geniş açacak, rejam'in daha değerli olacak (22.2-EK-2). Eşiği iki soruyla kur: saha kaç masa, stack'im fold'la paraya yetiyor mu. 12.0 tablosu değişmez; "saha karakteri" sütunu bu sıkılıkla okunur.

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

### 22.2-EK-2 Prim ≠ double'ın gelecek-oyun değeri — varış rolü: "kazanırsam KİM oluyorum?"

22.2-EK "kısa için double en çok şeyi değiştirir" der — ham PRİM (call eşiği) için doğru. Double'ın GELECEK-OYUN değeri başka ölçüyle ölçülür: vardığın rol. 30bb'den 60'a giden masayı domine eder (herkesi cover eder, bubble avcısı olur); 20bb'den 40'a giden hâlâ cover edilen bir orta stack'tir. Hesap iki katmanlı: ICM primi orta-derin'i kısadan daha çok frenler (cover edilenin primi yüksek, kaybedecek $EV'si fazla); double'ın gelecek-oyun değeri bu farkı DARALTIR — ICM'e duyarsız masalarda tersine çevirebilir *(kalibre et)*. Kısa yalnızca masada daha kısalar varsa min-cash'e sıkışır. Popülasyon hatası: kısa fazla iter, orta-derin gelecek-oyun değerini prime katmayı unutur; cover eden büyük ise kısaya karşı sabit aralıkla öder (22.1-EK). Üç uygulama: (1) 3-handed'da double edince LİDER olacak stack (hangi koltukta olursa olsun), shove'a call/rejam aralığını double edince hâlâ cover edilecek stack'e göre belirgin genişletir — kazanınca baskı koltuğu; (2) bu değer büyük stack'i iyi oynadığına inanıyorsan artar, rakipler ICM'e duyarsızsa azalır (B24 edge primi); (3) kısa için 8→16bb "yaşayan stack" (bir double daha = kazanma şansı), 3→6 "ölü stack" — ilk double'ı geniş al, blind-out sonrası double işe yaramaz. 24.2'ye beşinci soru: "kazanırsam KİM oluyorum?" (24.2-EK).

### 22.2-EK-3 ITM sonrası "gaz" fazı, herkes gaz veriyorsa büyük stack için FREN fazıdır

22.2'nin "bubble patladı → gaz, biriktir" satırı masadan bağımsız değildir; popülasyonun DA gaz vermediğini varsayar. Faz primi düşüktür, doğru; ama sahanın yarısı 20bb altındayken ve herkes aynı dersi bilip patlarken, cover eden derin stack'in en yüksek EV'si ÇARPIŞMAYI beklemektir: her el birkaç kişi bust olur, sıradaki basamak sana yaklaşır, chip'ini riske atmadan ladder'larsın (22.11'in ITM uygulaması). Fren "nit" değil: pozisyonda ve amatöre karşı her dağıtılan el +EV kalır (over-realize, 21.3-EK-2) — kesilen, agresif reg'lere karşı marjinal 3-bet/flip'tir. Test: "masada benim yerime birbirini elemeye hazır iki+ oyuncu var mı?" EVET → fren, seçici; HAYIR (masa pasif/homojen) → 22.2 gaz aynen. Gün sonuna yakınsa ikinci kat: ertesi güne derin gelmek, gece patlayan sahanın ürettiği basamakları bedava alır. Faz tablosu değişmez; bu satır "gaz"ın masa-koşullu istisnasıdır — kısa ve orta stack için gaz satırı olduğu gibi kalır.

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

### 22.8-EK-2 FT'de orta-vs-orta ~30bb: flat TUZAĞI çöker — TT/99 flat değil, jam değil, FOLD
22.8-EK "OOP marjinalle flat yok" dedi; bu madde IP flat'in de çöktüğü düğümü verir ve 12.1'in "FT: jam iki kademe daralt" satırına flat sütunu ekler. ChipEV'de açılışa CO/HJ'den TT/99/AQs/KQs flat'in yarısı tuzaktır: arkadan reshove gelince rahat call. FT'de orta stack'ler birbirini cover ederken jam'e call'ın primi büyür → TT/99 "reshove'a katlanacak flat"e döner; jam'lemek ise 22.11'in çarpışma primini öder ve açıcının tepesiz-olmayan aralığına karşı flip'tir → sonuç FOLD. Flat aralığı JJ/QQ/AQs/AKs/KQs'e iner *(eşikler: kalibre et — stack dağılımına bağlı)*; iki seçenek kalır: "reshove'a call edebilecek kadar güçlü mü?" evet → flat/3-bet; hayır → fold. ~50bb'de aynı el biraz daha geç pozisyondan pure call'a döner — reshove primi düştüğü için tuzak yeniden çalışır. Yan etki: dar flat arkadakilere "saldırılmaz düğüm" sinyali verir. 5.2'nin "EP açılışına TT+ jam"i ICM-kapalı içindir; 12.2-EK-3'ün "orta çift call defterinde yaşar"ı cover EDİLMEYEN düğümdür — burada cover karşılıklı, defter kapanır.

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

### 22.10-EK Kısa jam'e karşı derin (≥~22bb) stack: varsayılan CALL, rejam değil — overcall hijyeni daralır; SB tek istisna

6-12bb'lik jam'e karşı 25-35bb ile "ya jam ya fold" oynamak A9o/77 tipi eli katlatır — yanlış. Kısanın jam aralığı zayıf Ax/küçük çift/suited Kx yoğundur; orta çift ve A-yüksek onu domine eder → CALL +EV. REJAM ise stack'ini arkadaki aralıklara karşı riske atar; arkadakiler küçük çiftle ödemez, overpair'le katlanmaz → çağrıldığında ezilirsin. Call ağacı, rejam-only ağacına göre devam aralığını belirgin GENİŞLETİR *(kabaca beşte bir — kalibre et)* ve arkadan jam gelince alt katmanı bırakma opsiyonu verir: yalnız güçlü dilimle devam. Arkada oyuncu azaldıkça (BTN) call bir kademe genişler. Tek istisna SB: arkasındaki BB rejam'e katlanabilecek kadar derinse (fold equity VAR) jam-only — flat call BB'ye pozisyonlu ucuz overcall/squeeze verir; committed kısa BB'ye karşı call ve rejam eşdeğerdir. İkinci katman: derin rejam arkadaki call aralıklarını daraltır → CO/BTN rejam'i biraz genişler *(A9s/ATo — kalibre et)*, yalnız arkadakiler gerçekten dar öderken. **22.10 overcall satırı daralır:** ≥~22bb'de *(kalibre et)* belirsizlikte varsayılan CALL, arkadan jam'e dar devam; "bilmiyorsan jam" yalnız SB'de, arkadaki BB fold edebilecek kadar derinken. "Yanlış overcall dev torch" gerekçesi korunur. Ayna kural: kısa blind'lardan YENİ geçti (UTG/erken pozisyon) → jam'i dar → ona karşı geniş aç; kısa CO/BTN'de blind'lara giriyor → marjinalle iter → arkanda böyle bir kısa varken daha DAR aç.

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

### 23.1-EK Balina limp'ine karşı karışık stack: üç soru — "Whale: value-ağırlıklı"nın preflop icrası

"Balinaya karşı ne olsa raise/jam" refleksi iso aralığını lineer-geniş kurup arkadaki üç oyuncunun jam/3-bet'ine açık bırakır. Limp'e cevap üç soruyla *(eşikler: kalibre et)*:

1. **Stack'im jam'e sığıyor mu (≤20bb)?** Balina raise'e domine ellerle CALL eder, jam'e etmez → KTs/QTs/A9s–AQ RAISE (jam'lersen domine call'ı atarsın), 75s/85s tipi JAM — 23.14'ün "oynanabilir el call, equity-reddi jam" ilkesinin limp aynası. SB 15bb: tepeyi raise, 77–TT ve suited Ax'ı BvB'ye göre daha çok jam.
2. **Arkada jam'leyebilen kaç kişi var?** CO 18bb: 3× iso (3.5× değil) TT+/AJs+ value; iso blöfü suited connector değil bloker offsuit (KTo/QTo/JTo) — arkada jam'leyen varsa fold equity bloker ister. BTN over-call ediyorsa blind'lar T8s tipiyle jam'ler — over-call ölü paradır.
3. **Arkadakilerle derin miyim?** BTN ~50bb vs limp + 18bb iso: 45bb jam'in kazanımı yok → commit eden non-all-in 3-bet tüm aralıkla (99 dahil); balinanın nadir tuzağına ve arkadaki 15–20bb'lere karşı jam yalnız kaybettirir.

**Sıkı balina (~%12 raise):** 18–20bb'de 55–22/A2s fold; BTN 40bb'de K5s–K8s fold, AKo bile flat (dar aralığa 3-bet edilmez); BB savunması sert daralır — "her suited el defend" leak. 33.6 karışık-stack mantığının limp düğümü.

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

### 23.6-EK Reg-yoğun FT'de küçük-boylu agresyonu düşür, check-call/check-raise'i artır

23.6 "dengeye dön" der; reg-yoğun masada denge YÖN de verir. Herkes yapışkan ve küçük bete raise/float, lead'e raise sıktır → küçük c-bet ve BB lead'in gizli EV'si (rakibin overfold'u) çöker: küçük-boylu agresyonu (küçük c-bet, küçük lead, probe) DÜŞÜR; check-call ve check-raise payını artır — rakibin agresyonuna karşı realize et, ona küçük bete raise lisansı verme. 23.11'in pasif-havuz üçlüsünün ters yüzü: orada değerini büyük ve erken alırsın, burada rakibin bet'ini bekleyip raise'lersin *(kalibre et)*. Boy ilkesi: rec'e karşı boyu elinle, reg'e karşı aralığınla seç (27.12).

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

### 23.14-EK "Oynanabilir el CALL, equity-reddi JAM"ın motoru: jam katmanı açıcının pozisyonuyla bir kademe kayar; call/jam'i domine ettiğin kütle seçer
20bb BB'de tek jam listesiyle her açılışa aynı cevap kök hatadır. Jam'in EV'si "katlattığım daha iyi el" + "call aldığım daha kötü el"den gelir. Açıcı ERKEN pozisyondaysa aralığı dar ve güçlü → jam'e K-Qo / A-To katlanır → suited T-x / J-x tipi yüksek-suited eller jam'de değerlenir; açıcı GEÇ pozisyondaysa aynı eller artık katlanmıyor → jam bir kademe aşağı iner (suited 9-x, sonra 8-x), üst katman call'a geçer *(kademe: kalibre et)*. Aynı motor "A-Js call / A-7s jam" paradoksunu çözer: A-Js jam'lediğinde A-Q hiç katlanmaz, A-T hiç call etmez; call'da ise K-J / Q-J / zayıf A-x'i domine eder, flop'ta küçük bete devam eder → call daha çok kazanır. A-7s'nin domine ettiği kütle yok, jam'de A-8/A-9/A-T'yi katlatır → jam. Soru "iyi el mi?" değil: **"domine ettiğim kütle call'da mı, jam'de mi para öder?"** Havuz suited broadway'i jam'lemekte tutuktur → geç açılışın bu jam'e çarpma riski teoriden az, açılış bir kademe genişler *(kalibre et)*. 5.3'ün call tablosu değişmez; bu madde BB'nin jam listesine pozisyon kademesi ekler.

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

### 24.2-EK Beşinci soru: "kazanırsam KİM oluyorum?" — ve saha çarpanı

24.2'nin dört sorusu gamble'ın FİYATINI tartar; iki ek ölçü VARIŞ noktasını ve edge kademesini tartar.

**5. Varış rolü:** aynı double iki stack'e farklı şey verir — 30→60bb masayı domine eden lider, 20→40bb hâlâ cover edilen orta stack (22.2-EK-2). "Kazanırsam kim oluyorum?" cevabı "herkesi cover eden" ise marjinal gamble AL'a bir kademe yaklaşır; "yine orta" ise PAS'a. Bu kademe büyük stack'i iyi oynadığına inanıyorsan büyür, rakipler ICM'e duyarsızsa (baskı satılamıyorsa) küçülür — edge priminin varış hâli.

**Saha çarpanı (24.6 kalibrasyonuna):** edge kademesi saha büyüklüğüyle kalınlaşır. Küçük saha / FT'de ICM düşüldükten SONRA yüzde birkaç $EV kalan spot alınır; dev saha bubble'ında kalan masalarda başkalarının hata hacmi büyüdüğü için aynı spot stack'e göre belirgin büyük kazanç *(kalibre et)* ister — pure-bubble call aralığı orada sıkılaşır (22.1-EK-2). Tough küçük saha (SHR) ↔ soft dev saha (Main) zıt uçlar: 24.5'in sidebar'ı bu çarpanla okunur. Filtre tablosu değişmez; iki satır -EK olarak okunur.

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

### 26.1-EK Trips board'da devam eşiği: per değil KİCKER canlılığı + backdoor
6-6-6 / Q-Q-Q tipi board'da "her per call" ezberi ters çalışır: eşleşen her kicker boat'tır ve rakibin boat payı düşüktür *(kalibre et)* → eşiği per değil kicker'ın canlılığı + backdoor çizer. İki overcard + backdoor fd taşıyan düşük suited (J2s tipi) offsuit broadway'den (JTo tipi) daha iyi call'dır: JTo'nun tek canlı kartını rakip daha sık tutar; J2s'nin düşük kicker'ı daha sık gelir ve geldiğinde çoğunlukla öndesin. 26.1'in "eşik kendi kompozisyonunla kalibre olur" kuralının somut hâli: trips board'da devam edebilir komboların per'lerden değil kicker'lardan sayılır. Aralık koşulu: sıkı EP aralığına karşı eşik sertleşir — backdoor'lu iki overcard bile sınırda, suited çöp çoğunlukla fold; BTN/BB geniş aralığına karşı tersi, düşük suited'ler geniş call. Saldırı tarafı (boy küçük, frekans yüksek; sıkı-aralık OOP düşük trips 2/3) 18.2-EK-10'da.

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

### 26.2-EK-4 Raise düğümünün üç havuz katmanı: büyük range-bet'e call yok · value-kıt board'da x/r polar-büyük, blöf-raise UNBLOCK'tan · çekiliş-ağır turn bet'ine "yapıştırma" küçük x/r
26.2 teori-baseline'dır; üç rakip-etiketli katman yanına gelir *(hepsi kalibre et)*.

1. **Büyük range-bet'e karşı call yok — raise ya da fold.** Polar büyük bete reopen kârsızdır (nut'a çarpar); ama rakip büyük boyla ORTA elleri de bet'liyorsa (showdown'da 88 / A-Q) aralık polar değildir → call aralığını min-raise aralığına dönüştür: showdown'u olanla koruma-raise, blöfle equity-raise; boy 26.5-EK-2'nin ≈2×'i. 19.11'in "raise ucuz"u küçük bete karşıdır; büyük bete raise'i bu etiket açar (18.4-EK-2, 23.11).
2. **Value kıtsa slowplay yok.** A-T-2 tipi board'da BB'nin value'su kıt (en iyi A-x, alt set, alt iki-per) → x/r aralığını beslemek için tuzak lüksü yok: value tam frekans, boy büyük, ince x/r yok. Blöf-raise'i rakibin BET-FOLD bloğunu (9-x/8-x/7-x) tutmayan elden seç — T-2s, T-6s'den iyi raise-blöfüdür. Havuz BB'si bu x/r'ı bulmaz; sen her alt per'le x/r. 26.5'in "1/3 → x/r geniş" hücresi "value-kıt → tam-frekans polar" okunur.
3. **Yapıştırma raise'i — yalnız yapışkan profil.** Havuz turn'de ikinci flush draw açılınca tüm çekilişlerini büyük bet'ler, top pair'ini turn'e taşımaz → turn bet aralığı çekiliş-ağır. Buna karşı KÜÇÜK x/r: orta per+çekiliş, gutshot, non-nut fd raise'i öder; büyük raise/jam onları katlatır. Raise aralığı domine eden sınıf (top pair, nut fd, board'a bağlı orta cep); blöf x/r yok. Fold-eğilimli rakibe 26.2 aynen.

### 26.2-EK-3 Raise'in gerekçesi EV'dir — nut büyük polar bete CALL eder ("koruma" değil), draw'ın jam'i domine EDENİ katlatıyorsa jam

**Nut'un call'ı.** 80–100bb, OOP açıcı check → IP büyük polar bet (alt cepler + gutshot'lı broadway blöfleri + yüksek value). AA'nın call EV'si raise'inkinden yüksek: call, 55/66/JT'nin turn'de de barrel'lamasına izin verir; raise onları katlar, yalnız seni yeneni tutar. "Aralık koruma" sonuçtur, sebep değil — 29.3'ün "set slowplay = range koruması" cümlesi sonucu anlatır, sebep EV'dir. Turn'de büyük bete yine call. Raise düğümü combo draw'a aittir (K♦9♦ tipi: Ax'i ve alt cepleri katlatır). River düşük SPR'de bluff-catch sıralaması bloker kilit-testiyle (26.4): A tek başına AQ/AJ/A4'ü keser → call; KQ hem value'yu hem blöfü keser → sınırda; QJ blöfü (JT) bloklar → fold.

**Draw'ın jam'i (IP, 3-bet/squeeze potu, 100bb+ — baseline dışı).** J-9-7 fd'ye squeezer yarım pot: 8-6ss (OESD+FD) saf CALL — jam'in katlattığı hiçbir el onu domine etmez, ödeyenler overpair/üst draw. KTss/QTss JAM — KQ♥/KJ♥ tipi domine eden per+draw'ları katlatır. Test: "jam'im çağrılmayan elleri katlatıyor, onlar beni domine ediyor muydu?" Evet → jam; hayır → call (EV yakın). Derin squeeze potunda yarım pota AQ♠♠/A8♥♥ çoğunlukla fold — over-defense yok. 26.2 "domine EDEN draw call'da kalır"ın IP aynası; 6.3'e çapraz.

### 26.3 Notları board'a göre değil YÜZLEŞİLEN BOYA göre tut

Farklı c-bet boylarına karşı savunmalar birbiriyle kıyaslanamaz; desen ancak aynı boya karşı board'lar yan yana konunca çıkar. Flop'ta yüzleşilen boy turn eşiklerini belirlediğinden, notlar sokak değil HAT bazlı tutulur: "flop-1/3 → turn-2/3" ayrı bir kutu, "flop-2/3 → turn-jam" ayrı.

### 26.4 River savunması: frekans-önce, kombo-sonra

River'da devam kararı iki eksenlidir; B11.2 yalnız fiyat eksenini verdi, ikincisi eksikti:

1. **Fiyat ekseni (B11.2):** boyut → gereken devam %'si.
2. **Frekans ekseni (yeni):** gereken %'yi kendi aralığındaki sınıf-yüzdelerine eşle — "top-pair+ elimin yarısıysa hepsiyle call; üçte-ikisiyse bir sınıf buda." Frekansı sınıf-%'yle tuttur; sınıf İÇİ seçimi bloker kuralı belirler (value-bloke → call, blöf-bloke → fold), read ancak bunun üstüne gelir.

> **River'da fiyat "ne kadar savunmam gerek"i, frekans "elimin neresinden keseceğim"i söyler. B11.2'nin eksik yarısı ikincisidir.**

### 26.4-EK Bloker kuralının üç catcher örneği: unblock catcher > bloker catcher · K9 > KK · mono turn'de AA/KK call, TT/JJ fold
26.4 "value-bloke → call, blöf-bloke → fold" dedi; üç düğüm kuralı somutlar *(kalibre et)*.

1. **Yüksek board river all-in'ine karşı (A-Q-J-x-x tipi):** K-Q, Q-T'den iyi catcher'dır — K rakibin K-x blöfünü bloklar. A-x ise ikisinden de iyidir: rakibin T-x blöflerini UNBLOCK eder; catcher'ı bloker değil unblock seçer. Saldırı yüzü 11.1-EK-3 (blöf K-x'ten).
2. **Büyük c-bet'e raise sonrası river (9-8-5 tipi, sıkı IP caller):** "büyük çift" sırası yanlış. KK rakibin hiçbir blöfünü ve value'sunu bloklamaz (caller'da AK yok); K9/Q9 tipi orta per set ve iki-per'i bloklar → K9 call, KK fold. Value-bloke kuralı yüksek çifti geçer (19.11-EK).
3. **Mono board'da turn polar bet'e karşı (3-bet potu, sen IP overpair):** rakibin bet'i flush + set + düz-çekilişi blöfleri (65s/JT/QT tipi) → renk kartsız TT/JJ/QQ fold, renk kartlı call; AA/KK CALL — rakibin blöf kombolarını bloklamaz, TT/JJ bloklar. "Overpair" tek sınıf değil, bloker sınıfıdır (32.3-EK-2).

Ortak ders: catcher'ı elin rütbesi değil, rakibin blöf listesine dokunup dokunmadığı seçer; bloker kilit-testi (26.2-EK) üçünde de geçer — rakip value'sunu o karttan arındıramaz.

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

### 26.5-EK-2 Büyük polar c-bet'e check-raise boyu MİN-RAISE — hedef onun HAVA bloğu; havuz o bloğu katladığı an saf x/r

26.5'in "flop 2/3 → x/r dar/polarize" satırı teori (~%9–13); bu EK boy + havuz katmanı. Büyük polar bet aralığı iki bloktur: value (overpair/top pair — hiçbir boya katlanmaz) ve hava (K8s/Q5s/backdoor — HER boya katlanır). Boyu büyütmek value bloğundan bir şey satın almaz, havanın fold'unu pahalıya alır. ≈50bb, CO vs BB, 9-7-4 / 8-6-3 tipi kopuk board, IP %75: çözücü ≈2× seçer — hava en ucuza katlanır, 3-bet'i de kapanır *(kalibre et)*.

**Kompozisyon:** value = üst-kicker top pair (A9/K9; zayıf 9x x/r'lanmaz — polar aralığa karşı "çağıracak daha kötü" yok); 9-7 iki-per slow-play (onun overpair'i turn'de kendi barrel'lar); JTs nut-gutshot+overcard jam; alt-per koruması (43s/76s) x/r — bloker seçimi "rakibin BET-FOLD aralığıyla etkileşmeyen kart": 4/3 dokunmaz, J onun JT/QJ bet-fold'unu keser → 43s > J9.

**Exploit:** havuz min x/r'a offsuit K/Q-high'ını ve K6s/Q8s'i katlar (teoride ~%33 fold → gerçekte %45–50) → K2s/J6/55/K8'de x/r EV'si call'ın çok üstünde → aralığın tamamıyla x/r *(sapma ölçüsü: kalibre et)*. 2.2× "misclick" görüntüsünü siler. Rakip boyu ikiye bölüyorsa küçük boya da x/r. 19.11 "havuz flop-3-bet bulamaz" ile aynı yön.

### 26.5-EK-3 SB flat sonrası kuru yüksek board: havuzun %100 c-bet'ine check-raise, blöf suited Ax (40bb, tek-raise'li)

SB'den geç açılışa 40bb'de flat'ledin (offsuit broadway, suited Kx/Qx, 77+, suited Ax — 3-bet'e gitmeyen gövde; 4.2-EK). Flop Q-6-2 / K-5-3 rainbow, IP küçük c-bet. Teoride her şey karışıktır — Qx'in yarısı raise, suited Ax'in yarısı raise; ezber yok *(kalibre et)*. Havuz iki yerde sapar ve ikisi çarpışır: (1) IP aralık-bet'ler — denge K-5-3'te ~%44 check verir; (2) IP check-raise'e overfold eder — zayıf Qx/Jx/backdoor'suz suited'ı %100 katlar. Fold equity dengenin çok üstünde.

- **Value:** Qx/Kx üstü (KQ, QJs, set).
- **Blöf: suited Ax** — overcard; 6'nın/5'in etrafında turn'de kent/flush draw (K-7s 6'ya kent çeviremez → K-suited aday değil); rakibin katlayacağı Q-J-T-9-8-7 sınıfını bloklamaz. Raise'e devam eden 7x/8x/Jx bet-call'ları — SB flat'te seyrek, onun fold'u temiz.
- **Küçük çift (44/55):** turn'de kent açabildiği için sınırda raise; 77–99 çoğunlukla call.

**Ayna (sen IP'yken):** K-5-3'te ~%44 check — 9-7s, suited Ax, cep 4/2'yi check-back et; "SB flat = zayıf" diye range-bet'leyen olma. BB over-call ederse 13'e dön. 23.12'ye dördüncü carve-out adayı.

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

### 27.12-EK Sabitleme aralık ölçeğinde NÖTR olmalı — 60bb 3-bet düğümünde mix'i tek tarafa çekmek 4-bet-jam kapısını açar

27.12'nin "mix = bedava karar, sabitle" kuralı kompozisyonu değiştirmeyen düğümler içindir (postflop tek el; aralık ölçeğinde nötr sabitleme). Sınır: 60bb 3-bet düğümünde sınır komboları (KJs/QJs/QTs/JTs/ATo/A9s) %100 3-bet'e çekersen 3-bet aralığının ortalama gücü düşer, call-off aralığın (AQ+/77+ civarı) sabit kalır → BTN'nin 60bb 4-bet-jam'i hemen her iki kartla kârlı olur, 3-bet'in kendisi eksiye döner. Aynı kompozisyon 100bb'de sorun değildir (4-bet-jam pahalı, BTN non-all-in 4-bet'e mahkûm). Kural: 60bb'de sınır komboları mix'te TUT ya da sabitlerken toplamı koru — birini 3-bet'e çekiyorsan başkasını flat/fold'a it (14.1'in 60–70bb satırına not).

60bb "frekansta derin, boyda sığ"dır: check sıklığı, realizasyon ve c-bet frekansı 100bb'ye yakın; boy repertuarı 40bb'ye — yarım pot / %60 sık, pot-boy yalnız iki-yüksek-bağlantılı fd board'da *(kalibre et)*. Yan sonuç: 60bb'de SB flat'i AJ/KJ/QJ tipiyle biraz genişler (BB squeeze'ine kalkan); 100bb'de bu eller value 3-bet'e kayar *(sınırda)*. T-9-x'te 60bb flop jam sınıfı AK/AQ değil top pair (AT/KT/QT) + broadway'i unblock eden T8s; AA/KK daha küçük gider *(kalibre et)*.

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

### 28.1-EK Cover eden SB OOP'ta genişlemez, SERTLEŞİR — flat → lineer 3-bet

Kök hata: 28.1'in "cover eden VPIP'i genişler" satırını OOP'ye taşıyıp cover eden SB olarak butona karşı zayıf suited / offsuit Kx'le flat'lemek. Mekanizma: buton, kendisini cover eden SB'ye karşı daha dar açar (kapsanan refleksi, 28.8); aralık-vs-aralık fringe suited ellerin equity'si düşer ve orta-derin stack'te OOP fringe flat kimseyi stack'lemez — kelle "büyük el yapıp tahsil" ister, fringe flat onu üretmez. Ne değişir: flat payı düşer, 3-bet payı yükselir (kalibre et); 3-bet dokusu LİNEER — chipEV'nin düşük suited polar blöfleri PKO'da yok, çünkü buton pozisyonda geniş çağırır ve fold'a düşen çöple pot şişirmek kelle vermez. Ayna: kapsanan SB aynı spotta limp yığını ve az 3-bet oynar (28.25/28.26) — iki SB'nin dokusu cover yönüyle yer değiştirir. Boy notu kelleden bağımsızdır (B29/B32): orta derinlikte büyük 3-bet + iki-sokak planı; çok derinde OOP 3-bet küçülür, önce offsuit auto-fold'ları al.

**Kural:** cover eden SB OOP'ta VPIP'i değil agresyonu genişlet — fringe flat kes, lineer 3-bet aç; "cover ediyorum → daha çok el" refleksi pozisyona bağlıdır.

### 28.2 Geniş flat/limp aralığını NUT'la koru — "dead money olma"

Arkanda reopen/squeeze edebilen varsa, geniş VPIP aralığına AA/KK/AK gibi nut'lar koy ki squeeze seni cezalandıramasın. Bu, B4.4 "3-bet ya da fold" refleksine PKO istisnasıdır: kelle avlamak için geniş girersin ama aralık korunmuş olmalı.

### 28.2-EK Nut-koruma cover-şartlıdır — arkadakini kapsıyorsan AK FLAT, kapsanıyorsan 3-bet

Kök hata: 28.2'yi "geniş flat'i her zaman nut'la koru" ya da "geniş açan lidere karşı AK'yı 3-bet'le, domine ediyorum" diye okumak. Üç parça. (1) Pozisyonda geniş açan cover edene karşı geniş flat (kalibre et) doğrudur — mesele kelle değil, aralık-vs-aralık; geniş açana karşı senin flat'in hâlâ sıkı taraftır. (2) O flat aralığı ARKADAKİ blind'ı sen kapsıyorsan AK/AQs/QQ+ ile korunur: blind geniş-açılış + geniş-flat gördüğünde lineer jam'ler; aralığında güçlü el yoksa neredeyse value-jam'e döner ve sen hep katlanırsın. Güçlü eller varsa rüya spot: blind jam'ler, açıcı katlanır, kelleyi sen alırsın. Arkadakiler seni kapsıyorsa rüya yok → AK 3-bet'e döner, flat aralığı daralır (kalibre et). (3) AK'yı geniş açıcıya 3-bet'lemek "equity itmek" değildir: onun genişlemesi suited çöptedir, domine ettiğin offsuit Ax 3-bet'e katlanır — kaçmasını istemediğin tam o eller kaçar. Flat, o offsuit çöpü potta tutar. Fren: nut'la korunmuş aralık bile iki jam'e karşı çoğunlukla katlanır — "üç kelle var" diye suited bağlantılıyla gamble yok.

**Kural:** geniş flat'i nut'la koru (28.2) AMA rüya yalnız arkadakini kapsıyorsan; kapsanıyorsan AK'yı 3-bet'e taşı.

### 28.3 Cover ediyorsan LIMP-ağırlıklı VPIP

Limp daha az çip riske atar → daha çok el oyna → daha çok kelle avla. Raise yalnız fold equity üretiyorsa mantıklı; çok kısa/kelleli stack arkandayken raise fold equity üretmez (çok kısa stack'ler jam'le çok sık reopen eder — kalibre et), o yüzden limp baskın. Kellesiz ICM'de liderin limp/iso'su ayrı motordur — orta stack'in limp'ini suited bağlantılıyla iso'la, offsuit çöple değil (12.2-EK-4). Limp aralığı geniş ama korunmuş (28.2). Bant: orta-derin stack ve kelleli-kısa-arkada; sığ HU-BvB'de tersi — limp değil jam (28.3-EK).

### 28.3-EK Sığ HU-BvB'de kelle limp-tuzağını siler — cover eden SB limp'lemez, jam'ler

Kök hata: ICM'in sığ BvB "limp-ağırlıklı" dokusunu PKO'ya taşımak — ya da 28.3'ü "cover ediyorsan her derinlikte limp" diye okumak. Mekanizma: ICM'de sığ SB limp'ler, çünkü jam'lediği ellerin equity'si yetmez ve tepeyi limp-call-all-in tuzağıyla korur. PKO'da cover eden SB için kelle o equity açığını kapatır: BB'nin standart call aralığına karşı ham equity + kelle jam'i öder → "oynanmaya değer" her el jam'e gider, tuzak dilimi gereksizleşir. Tuzak yoksa dip de limp'leyemez (korumasız limp her iso'ya katlanır) → limp çöker, aralık SIKI ama JAM-ağırlıklı: kellesizden daha az el, daha çok all-in (kabaca 12–20bb bandı, kalibre et). Ters sezgi ama yön nettir. İki ek: (a) domine eden yüksek suited / Kx-Qx tepeyi jam'leme — non-all-in raise, BB'nin domine ettiğin call'ları potta kalsın (28.7); (b) havuz "limp'e kimse jam'lemez" sanıp dipten genişler — o limp yığını küçük iso'ya (kalibre et) katlanır, bedava paradır. Bant: 28.3'ün limp rejimi daha derin ve kelleli-kısa-arkada bandındadır; sığ HU-BvB'de tersi çalışır.

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

Kök hata, her all-in'e aynı el listesiyle gitmek: jam yelpazesinin dokusu cover yönüne göre tersine döner. Kapsanıyorsan rakip kellen için zaten ödeyecek — jam'i doğrusallaştır: geniş call menzilini domine eden yüksek kartı it; flip satın alan suited connector'ı ve kimseyi katlatmayan blocker-jam'i çöpe at. Cover edensen ayna döner: kısa senin kelleni kazanamaz, o yüzden dar öder — yüksek kartla gelir, iyi suited'larını katlar; şimdi suited-bağlantılı jam altındır: dar call menzilinin yüksek kartları suited-bağlantılıyı domine edemez, çağrıldığında equity'n canlı kalır; arkandaki çöp ise katlanıp ölü para bırakır — jam'in tam o ölü parayı toplar. 3-bet'te boyutu yalnız derinliğe değil cover yönüne de bağla: seni cover eden açıcıya küçük boyut bedava kârdır, büyük git; sen cover ediyorsan küçük-lineer kur (kalibre et) — lineer ama alt ucu kaymış: value orta çiftlere iner, merge dilimi (KQ/AJ/suited Ax) 3-bet yerine flat'e gider (28.8-EK). Kompozisyon da yön ister: jam'e karşı katlayacağın eli hiç 3-bet'leme — suited asları call defterine geçir, 3-bet'i kısa ittiğinde tereddütsüz ödeyeceğin ellerden kur.

### 28.8 Kapsananın çöken ağacı: ya jam ya call

Kök hata: kapsanan kısanın "baskım düşük, geniş jam'lerim" demesi — yön ters. Kellen rakiplerin ödeme eşiğini düşürür; fold equity çökünce jam aralığın kellesiz bubble'dakinden bile DAR olmalı (kalibre et). Makasın öbür ağzı lehine işler: biri sana jam'lediğinde ödediğin ICM-primi normalin altındadır — stack-off eşiğin GENİŞ; kelle elinden jam'i alır, karşılığında çağrıyı verir. Ağaç da ikiye iner: kapsananın küçük 3-bet'i normal genişlikte açan cover edene karşı blöf değil bağıştır (ultra-geniş açan lider istisnası: 28.8-EK) — kimse kelleni masada bırakıp katlanmaz — ve arkadan squeeze gelecek masada canavarla tuzak kurmak kök hatanın kendisidir. Tepeni doğrusal jam'le, kalanını call defterine yaz; kapsananın lüksü yok, tahsilatı var.

### 28.8-EK Cover edenin 3-bet'i aşağı genişler → 4-bet jam eşiğin iner; istisna: ultra-geniş lidere küçük POLAR 3-bet

İki parça. **(A)** Kelleli kısa olarak açıp 3-bet yiyince "3-bet = QQ+/AK + polar blöf" okuması PKO'da yanlıştır. Seni cover eden 3-bet'çi kelle için value'sunu aşağı çeker: orta çiftler (88/99) ve AJs sınıfı artık value 3-bet'tir, jam'ine kelle oddsuyla ödemeye hazırdır (kalibre et); kellesizde merge 3-bet'lenen KQ/AJ/suited Ax flat'e kayar. Sonuç: value-ağırlıklı ama ince 3-bet aralığı — JJ/TT senin için 4-bet jam'dir, katlanacak el değil; 99'dan çağrı bulman fiyatın parçası. **(B)** 28.8'in "küçük 3-bet bağıştır"ı normal genişlikte açan cover eden içindir. Bağış, rakibin kellen için ÖDEYEBİLECEĞİ ele sahip olmasını gerektirir; açılışın büyük kısmıyla (kabaca %70+, kalibre et) giren lider aralığının çoğuyla 3-bet'e otomatik katlanır, 4-bet jam'i dar ve tahmin edilebilirdir. Orta-iyi stack'le jam de bozuk: kazanç birkaç bb, risk tüm stack ve pozisyon. Küçük polar 3-bet (~2x, kalibre et) onu iki hataya zorlar — ya çok katlanır ya çok 4-bet blöfler. Malzeme: fold'a düşen A-blocker'lı offsuit çöp (A7o/A5o tipi) — merge el değil; jam gelince katlan. Şart üçlü: ultra-geniş açan + dar 4-bet jam + jam'i pahalı kılan stack.

### 28.9 Kelle sabit değil: enflasyon, saha, çevrim

Kök hata: kelleyi çipe bir kez çevirip turnuva boyunca sabit taşımak. Kelle havuzu sahadan yavaş erir; aynı kelle geç fazda erken fazdan daha çok chip eder (kalibre et) — çevrimi her büyük kararda tazele, çünkü havuz dağıldıkça chip'in doları düşer. Saha büyüklüğü iki primin hakemidir: dev sahada geç aşamada en şişkin kelle bile birkaç BB'dir (kalibre et) — terimi sil, kellesiz ICM oyna; küçük sahada kelle ortalama stack'in ciddi parçasıdır — net prim aşağı iner, kelle konuşur. Kısa jam'e karşı eşik ayrıca kayar: aynı kelle daha az riskle alınır, oran lehine döner — call eşiğini düz-ortalama hesabın söylediğinden de aşağı çek (kalibre et). Oturmadan önce tek kontrol: en büyük kelle kaç BB ve ortalama stack'in ne kadarı?

### 28.10 Balon paradoksu: kellen fold equity'ni eritir

Kök hata: "risk primim düşük, öyleyse balonda geniş jam" çıkarımı. Primi düşüren mekanizmanın kendisi — kafandaki kelle — rakiplerin call aralığını genişletir; fold equity'n erir, seni her zamankinden çok öderler. Sonuç paradoks ama net: balonda kelleli kısa stack, kellesiz turnuvadakinden DAHA SIKI jam'ler (kalibre et). Marjinal spotu ancak double-up sonrası ekstra oyuncuları cover edecek olman haklı çıkarır.

### 28.11 Cover'ın kalitesi: pozisyon çarpanı, kırılgan statü

Kök hata: cover'ı skaler sanmak — kaç kişinin kapsadığını saymak. Cover çarpı pozisyondur: arkanda pozisyonlu tek coverer açılış aralığını kısar (kalibre et); blind'lardaki iki coverer neredeyse hiç kısmaz, flop'u pozisyonda oynarsın. İkinci kalite testi kalınlık: masayı kıl payı kapsıyorsan cover kaybedilebilir bir statüdür — tek all-in'de söner ve prim ödeyen tarafa düşersin; solver future-game'i görmez diye sen de görmezlik etme. Marjinal cover'da en ince jam'leri kes, tam genişliği kalın cover'a sakla (kalibre et); kelleler stack'lere göre sığken bu tartışma zaten kapanır.

### 28.11-EK Cover kaybını ağırlıklandır — tiebreaker'dır, karar değil

Kök hata: 28.11'in "kırılgan cover" uyarısını her karara sabit ağırlıkla sokmak — "bu call'ı kaybedersem X'i kapsamam" diye net +EV spotu atmak ya da kaybedince kapsamayı bırakacağın oyuncuyu hiç saymamak. Mekanizma: cover kaybının değeri, o oyuncuyla gerçekten stack-off olma olasılığıyla çarpılır. Kelleli rakip orta stack'teyse ve masa doluysa o all-in seyrek gelir → ağırlık düşük; rakip jam bandına inmişse jam'i her orbit gelir → ağırlık yüksek (kalibre et). İkinci kural: ağırlık yalnız SINIRDAKİ kararda işler — eş-EV'ye yakın turn call/fold'da "call edersem dört kişiyi kapsamayı bırakıyorum" fold'a devirir; net +EV spotta cover kaybı fold gerekçesi değildir. Prosedür: (1) karar sınırda mı? değilse cover'ı unut; (2) sınırdaysa kaybedince kapsamayı bırakacağın oyuncuları say; (3) her birini onunla stack-off olasılığıyla ağırlıkla — kısa ve kelleli sayılır, derin sayılmaz. 28.6-EK'nin beşinci sorusunun kalibrasyonu budur.

### 28.12 Cold-call kapısı ve kelepçeli squeeze

Kök hata: 3-bet'li potta karara elinden başlamak — önce stack'lere bak. Cold-call kapısı: açanı ya da 3-bet'çiyi, en az birini cover etmiyorsan girme; kimsenin kellesini alamıyorsan aynı el fold'dur, kapı açıksa el konuşur. Flat kararında arka zinciri oku: açıcı arkandaki muhtemel squeezer'ı cover ediyorsa squeezer kelepçelidir — squeeze gelmez, flop'u ucuza görürsün, flat aralığın genişler (kalibre et). Blöf malzemesi de buradan çıkar: seni cover eden rakip geniş call verir, fold gelmeyecek — blocker'lı offsuit çöple değil, flop'ta bir şeye dönüşen suited-bağlantılı ellerle blöfle; polar blöf refleksini fold equity'nin öldüğü yere taşıma.

### 28.12-EK Re-jam kapısı: kısanın jam'ine karşı genişliği kısa değil, aradaki flat'çi seçer

Kök hata: "açtım, biri flat'ledi, kısa jam'ledi → kısaya karşı elim yeter mi?" diye kısaya bakmak. Re-jam'in kısayı değil flat'çiyi çağırır; karar seninle flat'çi arasındaki cover ilişkisine bağlıdır. Flat'çi seni cover ediyorsa senin kellen için geniş over-call eder (çiftleri, broadway'i bırakmaz) — re-jam'in tüm stack'ini iki yelpazeye karşı bağlar. Sen flat'çiyi cover ediyorsan o dar öder ya da katlanır; jam'in çoğunlukla kısaya karşı HU kalır ve kısanın kellesi zaten ölü paradır. Aynı düğümde yön çevrilince aralık uçtan uca değişir: kapsanıyorsan re-jam çift + suited broadway'e sıkışır (kalibre et) — düşük suited Ax en kötü malzeme: kısanın lineer jam yelpazesi Ax doludur, flat'çinin çiftleri onu ezer; suited broadway hem çiftle hem Ax'le flip eder. Kapsıyorsan re-jam açılış aralığının büyük kısmına yaklaşır (kalibre et) — flat'çi çağırırsa onu da kelle oddsuyla oynarsın.

**Kural:** kısa ittiğinde önce "flat'çi beni mi kapsıyor, ben mi onu?" — kapsanıyorsan çift/suited broadway ile re-jam, suited Ax fold; kapsıyorsan geniş re-jam, çünkü riskin kısanın stack'idir, flat'çinin değil.

### 28.13 Kelle ölü antedir: limp rejimi

Kök hata: primi stack'inin katlarına varmış kısayı büyük raise'le "izole etmeye" çalışmak — o kelle ölü antedir, hangi boyutu seçersen seç yarım düzgün el tutan herkes fiyat alır. Rejimi değiştir: bütün oynanabilir aralığını limp'le, multiway'i kucakla, kısa ittiğinde sürüyle üstüne çök; senden sonra limp'ler yığıldıkça value-jam aralığını genişlet (kalibre et). Kendi kellen için ayna eşik var: prim stack'inin küçük parçasıyken limp yaşar, prim stack'e yaklaştıkça limp her seferinde jam yer — kes; eşitlendiği an saf jam-ya-fold (kalibre et), geç pozisyonda cover altındayken de raise jam mıknatısıdır — limp'le ya da direkt it. Tek monoton bant: prim stack'e yaklaştıkça limp azalır, hat jam-ya-fold'a gider; prim stack'i belirgin AŞIP stack de kısaysa aynı mıknatıs istenen şeye döner, hat min-raise'e kayar — limp küçük iso çeker ve flat'ler 1bb'yle ucuz kalır, min-raise izolatörü jam'e zorlar ve katlanan flat'lerin ölü parasını büyütür; raise-fold iki bantta da yok, geçiş sınırı kalibre et (28.23). Masanın öbür yanındaysan panzehiri bil: limp yelpazesi çöp değil, suited ve yapışkandır — küçük iso kimseyi katlatmaz, cezalandıracaksan büyük bas (kalibre et); rakipler limp'lere küçük iso basıyorsa limp senin için bedava paradır, frekansı aç.

### 28.14 Multiway all-in: önce kelleleri pota yaz

Kök hata: multiway all-in'de oranı sadece çiplerle kurmak. Prosedür: yalnız SENİN cover ettiğin jam'lerin kellesini güncel çevrimle BB'ye çevir — seni cover eden yığının kellesini kazanamazsın, o hesaba girmez (kalibre et); kazanabildiğin kelleleri ölü para olarak pota yaz, oranı ondan sonra hesapla — "öde-kazan" sandığın yer "öde, artı senin alabileceğin kelleler kazan"dır ve o fark orta suited elleri fold'dan call'a taşır. El seçiminde soru "elim güçlü mü" değil, "kaç yelpazeye karşıyım": tek yelpazeye karşı yüksek kart öder, suited connector atarsın; birden çok yelpazeye karşı tersine döner — offsuit yüksek kart ve zayıf Ax sürekli domine edilir, suited broadway/çift ve suited-bağlantılılar nefes alır — düşük suited Ax en kötü sınıftır (kalibre et). Tek istisna ezber: mikro yığınların üstüne bir dev cover jam'i geldiyse mikroların yalnız YELPAZELERİNİ equity hesabından çıkar (elini devin yelpazesine karşı fiyatla) — ama çiplerini ve kazanabileceğin kellelerini ölü para olarak potta tut, hepsini yenersen o kelleler senindir; equity'de yine yüksek kart kazanır.

### 28.14-EK Multiway all-in yön kuralı: her ek KAPSANAN jam over-call'ı genişletir, seni kapsayan daraltır — ICM kesintisi sırayla katlanır

Kök hata: "üçüncü all-in geldi, spot ağırlaştı, daralayım" refleksi. Yön kapsama ilişkisine bağlı: ikinci ve üçüncü jam'ci senden kısaysa over-call aralığın GENİŞLER — kısanın equity eşiği düşük, yelpazesi zayıf, kellesi ve stack'i pota ölü para; 28.14'ün "kaç yelpazeye karşıyım" sorusu lehine çalışır (sınırda geniş, kalibre et). Aynı jam seni kapsıyorsa tersi: over-call belirgin daralır — kelle almadığın bir yelpazeye stack'ini bağlarsın. Ortadaki oyuncu için ayna: kısanın jam'i üstüne re-jam'lediğinde arkanda seni cover eden açıcıya senin + kısanın kellesini TEK pota koyarsın — call eşiği iki kelleyle çöker, fold equity'n silinir; kapsanan orta stack olarak re-jam yerine call/fold ekseninde kal (kalibre et). İkinci katman ICM: aynı spotta ilk jam'cinin aralığı neredeyse değişmez (fold equity'si var), kapsanan re-jam'ci biraz daralır, over-call'cı en çok daralır (kalibre et) — paradan uzakta bile.

**Kural:** multiway all-in'de önce yönü say (kapsanan ek jam = genişle, kapsayan ek jam = daral), sonra rolünü: jam'ci ICM'i en az öder, over-call'cı en çok — over-call'da chipEV aralığını bir kademe kırp.

### 28.15 Mikronun fold opsiyonu senin jam hakkını çevirir

Kök hata: "masada mikro var, herkes basamağa sıkıştı, ben jam'lerim" ezberi. Mikro zorunlu all-in'se basamak herkese bedavadır ve orta stack'ler seni rahat öder — jam'i kes, aralığını daralt. Mikro hâlâ katlanabiliyorsa (kalibre et) denge döner: seni ödeyecek oyuncu kaybederse basamağı mikroya kaptıracağı için daha dar ödemeye iter — ama bu "dar ödeme" mutlak değil; ancak basamak/ICM riski senin kelle-primini aştığında geçerli. Seni kaplayan oyuncu kelleni de kazanacağından jam hakkın kellenin büyüklüğüyle TERS orantılıdır — kellen ne kadar büyükse seni o kadar geniş öderler. Karar ağacının ilk sorusu yine de stack değil, opsiyon: mikro katlanabiliyor mu?

### 28.16 Mystery'yi yapı sayfası fiyatlar

Kök hata: her mystery'yi aynı agresyonla oynamak — zarfın fiyatı çekilişte değil, yapı sayfasında belirlenir. Üç kalemi oku: faz ne zaman başlıyor, havuzun ne kadarı kelleye gidiyor, overlay var mı — aynı buy-in'de ortalama zarfı katlara varan farkla oynatırlar (kalibre et); faz başlamadan zarf yoktur, eleme hiçbir şey ödemez — faz öncesini normal turnuva gibi oyna, kelle agresyonunu faz kapısında aç. Sonra çekiliş rejimini oku: zarflar sonda açılıyorsa beklenen kelle DOLAR olarak bitişe kadar sabittir — çip karşılığı değil: havuz ödendikçe çipin doları düşer, çevrimi tazele (28.24); canlı açılıyorsa panoya bak — büyük zarflar çekildikçe kalan ortalama düşer, küçükler süpürüldükçe yükselir, hiç çekiliş yoksa yerinden oynamaz. Geç kayıt da aynı fiyat okumasıdır: normal kelleli turnuvada erimiş havuza tam fiyat ödersin — saha belirli ölçüde eridiyse oturma (kalibre et); mystery'de zarf fazı başlamadıysa havuz tamdır, ceza büyük ölçüde silinir.

### 28.17 Mystery aralıkları: oranı kim taşıyor

Kök hata: "kelle var, genişle" ezberi — genişleyen taraf, oranın lehine döndüğü taraftır, sen değil. Kelle kural değil soru verir: kimin kellesi, kimin yığınına göre büyük? Kellen kendi yığınına yaklaştıysa fold equity'n öldü, herkes seni geniş öder: jam'i daralt, yüksek-kart ağırlıklı kur — masadaki oran ne derse desin any-two jam yok. Çok yönlü spotta da denklemi sadeleştir: parası gerçekten sayılan tek rakibi bul, spotu ona indirge, aralığını ona karşı fiyatla.

### 28.19 Kelle etkisi flop'ta yaşar; turn/river'da yalnız stack bağlanmıyorsa söner

Kök hata: derin pot'ta cover haritasını her sokakta yeniden uygulamak — kapsanınca her fıçıyı kesmek, cover edince her fıçıyı büyütmek. Mekanizma: cover eden flop'u daha geniş devam eder (draw kovalar, nut peşindedir), bu yüzden turn'e daha çok otomatik-fold'la gelir; kapsanan, blöf isteksizliğine rağmen o fold'ların hesabıyla normal frekansta barrel'lar. Ayna da işler: cover edenin barrel iştahı yüksek ama kapsanan flop'u dar devam etti, turn aralığı yoğun → bulacak fold yok. İki kuvvet birbirini siler — ama yalnız bahis sonrası SPR'ın hâlâ yüksek kaldığı (~2+, kalibre et), stack'i BAĞLAMAYAN turn/river barrel'larında: orada bet frekansı, boyu ve bluff-catch eşiği iki yönde neredeyse aynıdır *(sapma birkaç puan — kalibre et)*. Kitabın 30–60bb baseline'ında flop bet-call sonrası turn barrel'ı çoğunlukla SPR'ı ~1 civarına ya da altına (60bb'de ~1.5) çeker (kalibre et) — yani turn bahsi fiilen stack'i bağlayan düğümdür ve orada sönme yok: kelle pot-odds'a girmeye devam eder, SPR düştükçe ağırlığı büyür — cover eden kapsananın jam'ine bir kademe geniş bluff-catch eder, kapsanan blöf-jam'ini bir kademe kısar, value-jam'i standart ya da bir kademe ince (geniş ödendiği için) *(kalibre et)*.

**Kural:** PKO postflop ayarının tamamını flop c-bet / flop savunma düğümüne yükle (28.20–28.22); bahis sonrası SPR yüksek kalıyorsa (derin pot) turn ve river'ı kellesiz standardınla oyna — cover haritasını orada "yeniden uygulama", aralıklara zaten gömülü. Turn/river'da kalan fark stack'i bağlayan düğümlerdedir (30–60bb'de flop bet-call sonrası turn çoğunlukla budur): cover eden temiz runout'ta value-jam'i bir kademe inceltir ve kapsananın jam'ini geniş öder; kapsanan blöf-jam'ini kısar, value-jam'ini standart ya da bir kademe ince tutar *(kalibre et)* — cover edenin jam'ine kelle için değil el için katlanır. Postflop kelle çözücüsü yok; bunlar sınır koşullu prensiplerdir, solver kuralı değil.

### 28.19-EK PKO'da polar river boyu: JAM ya da check — ve cover edenin çökük river aralığına value'yu küçült

Kök hata: kellesiz turnuvanın polar river dokusunu (büyük non-all-in + bloklu küçük + "birkaç bb geride bırak") PKO'ya taşımak. Üç mekanizma. (1) Kapsanan olarak polar river'da büyük boy çoğunlukla JAM'dir — value'n (kelle için geniş ödendiğinden per+ dahil) jam'e gider, blöfün de fold equity için jam'e gitmek zorundadır; havuz PKO'da jam'e karşı call dengesini kuramaz. Eşik derinlik: orta stack'e kadar jam, üstünde büyük non-all-in (kalibre et); kelle ne kadar ilgiliyse eşik o kadar yukarı. (2) "Son birkaç bb'yi geride bırak" hilesi teoride bluff-catcher'a kötü fiyat verir, ama PKO'da rakibin kelle oddsu değişir ve havuz tepkisi rastgeleleşir — jam'le; blöf frekansını kelleye göre ayarla, boyu değil (sınırda). (3) Cover eden flop'u kelle için geniş c-bet eder (28.20) → check-check'le river'a gelen aralığı kellesizden ZAYIFTIR; kapsanan olarak nut'unla jam standart, güçlü-ama-nut-olmayan value'yla bir boy küçük — o zayıf aralıktan daha geniş çağrı alırsın (kalibre et).

**Kural:** kapsanan river polar → jam-ya-check, boy oyunu yok; value boyunu yalnız cover edenin çökük river aralığına karşı küçült.

### 28.20 Cover eden flop'u: IP'de aralık-bet (blöf değil), OOP'de nut-potansiyeli devam

**IP:** negatif prim "equity'ni pota daha çok it" demektir; check-back'ler aralık-bet'e, küçük boy orta boya, equity avantajı belirginse büyük boya kayar *(kademeler: kalibre et)*. Bu blöf artışı DEĞİL: kapsanan rakibin aralığı kelle teşviksizdir, normal katlanır; artan şey aralık-bet frekansı ve daha kalın value'dur — kellesizde check-back edilen elle üç sokak ince value. Soru "check-back mi" değil "hangi boy"; orta boy varsayılan, kuru yüksek-kart board'da bile *(kalibre et)*. Check-raise gelince ağaç bet-call/fold: geniş yüksek-kart+backdoor devamlarını koruyan yol call'dır, 3-bet değil — 3-bet'i nut'a sakla.

**OOP (BB):** eklenen devamlar per değil, nut'a dönüşebilen çizgilerdir — gutshot, backdoor flush/straight, bunları taşıyan per'siz yüksek kartlar. Kelle ancak rakibi stack-off'a sokan bir el yaparsan tahsil edilir: daha az katla, daha çok check-raise, güçlü/kombo draw'la daha çok jam (kellesizde check-call'lanan combo draw burada stack'e gider *(eşik: kalibre et)*), yavaş oyunu azalt. Filtre: "nut yapabilir mi?" — kelleyi çekilişi olan ele bağla, bluff-catcher'a değil. Kapsanan taraf için 28.21.

### 28.21 Kapsanan IP: nut avantajı equity avantajını ezer — aralık-bet çoğunlukla yok, bet-fold'u kabul et

Kök hata: kapsanan olarak dar açtığın için equity avantajını hissedip düşük eşleşmiş / düşük bağlantılı board'da aralık-bet basmak. Cover eden OOP bu board'larda çok geniş check-raise eder — backdoor'lu suited eller, iki yüksek kart + backdoor, orta çiftler — çünkü kelleye giden yol oradan geçer; kapsanan IP ise o check-raise'e karşı aralığının büyük kısmıyla bet-fold'a düşer, daha dar check-raise'e bile daha çok katlanır *(fold oranı farkı: kalibre et)*. Equity avantajı büyük olsa da bet frekansı çoğunlukla DÜŞER.

**Kural:** kapsanan IP olarak "nut kimde" sorusunu equity'den önce sor; nut rakipteyse check-back oranını yükselt *(kalibre et)*, bet'i polar tut, küçük aralık-bet'i çoğunlukla bırak, sınırda tut *(kalibre et)*; yüksek/kuru board'da (A/K-high, nut dar aralığında sende) aralık-bet'i geri getir, orta/bağlantılı board'da check-back'i koru. Check-raise yiyince bet-fold'u kabul et, offsuit broadway'i bet-call'a zorlama. Kesilen blöftür, value değil (21.3-EK): blöf hacmini düşür, value'yu koru, semi-blöfü equity'yle fiyatla. Cover eden OOP olarak aynı board'larda check-raise frekansını aç — hedefini bil: kapsanan IP katlanır, cover eden IP katlanmaz.

### 28.21-EK Kapsananın blöfü ölmez, adres değiştirir — hero-fold'a değil auto-fold'a

Kök hata: 21.3-EK/28.21'i "kapsanıyorum → blöf yok" diye okumak. Mekanizma: cover edenin kelle için geniş ödemesi ELİ olduğunda çalışır; eli yoksa kelle onu ödetmez. Çok geniş açan cover eden kilitli düşük-orta board'da (A74 kuru tipi) aralık-bet basıyorsa aralığının büyük kısmı otomatik-fold'dur — kelle motivasyonu K9o'yu check-raise'e karşı tutamaz; hero-fold beklemezsin, auto-fold alırsın. Kapsanan BB olarak orada küçük check-raise'i (min-raise'in biraz üstü, kalibre et) geniş kurabilirsin; malzeme, rakibin katlanacak ellerini BLOKE ETMEYEN çöp (board kartlarını ve Kx/Qx'i tutmayan). Aynı hat bağlantılı board'da (T96, 985 tipi) ölür — geniş aralık orada per/draw'la devam eder, kelle motivasyonu devreye girer, 28.21 aynen geçerli. Ters yüz: seni izole edip kelleni almak isteyen rakip senden agresyon beklemez — kısa stack'in check-raise'ini gerçek okur.

**Kural:** kapsanan olarak blöf hacmini düşür (21.3-EK) ama sıfırlama; kalan blöfü rakibin aralığının ele sahip OLMADIĞI board'lara taşı — izni cover haritası değil, board dokusu verir.

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

### 28.25 Limp pompası: kapsananın limp-reraise'i tuzak değil, pompadır

Kök hata: 28.8'in "tuzak kök hatadır" satırını limp'e de uygulamak — ya da B33.5'in "value limp-reraise'i daralt" havuz kuralını seni cover eden agresif rakibe karşı sürdürmek. Mekanizma: seni cover eden agresif rakip limp'ine limp-behind yapmaz, izole eder — HU kalıp SPR'yi düşürmek ve kelleni kovalamak için; iso aralığı lineer ve geniştir (suited eller, çiftler, offsuit As, broadway). Büyük limp-reraise'ine (SPR'yi bir-iki sokağa indiren boy, kalibre et) kelle motivasyonu onu geniş ÇAĞIRTIR: orta suited bağlantılı, AJ/ATs sınıfı, orta çift katlanmaz. Sonuç: raise-call-call'lı küçük multiway pot yerine domine ettiğin aralığa karşı düşük-SPR HU pot. Malzeme aralığının tepesi — TT+/AQ+ sınıfı, çoğu limp-reraise; chipEV'deki "premium'un bir dilimi" değil (kalibre et). Bant geniştir, kabaca 15bb'den derin stack'e (kalibre et), pozisyondan bağımsız. Tetik zorunlu: rakip agresif ETİKETLİ ve seni kapsıyor. Limp-behind yapan sakin cover edene karşı limp yalnız ucuz floptur, pompa değil — iso gelmiyorsa hattı kapat. B33'ün chipEV BvB'sinde kelle yoktur (33.6); bu, o katmanın PKO kolu.

**Kural:** kapsanan olarak agresif cover edene karşı tepeyi raise değil limp-reraise'le oyna — kellen, rakibin iso'sunu ve call'ını senin için genişletir.

### 28.26 Kapsanan SB'de B33 katmanları kayar: cover eden BB jam'lemez, iso eder

Kök hata: B33.2/33.3'ün chipEV katmanlarını kelle yönü değişince aynen taşımak. Dört kayma. (1) Seni cover eden derin BB raise'ine 3-bet-jam'lemez — pozisyonda flat'ler, büyük el yapıp kelleni almak ister; 3-bet'i yalnız tepe + çöp blöftür. Raise-fold korkusu düşer → güçlü suited (KQs/QJs/JTs sınıfı) çoğunlukla RAISE. (2) BB'nin iso'su kelle için genişler: kellesizde check edilen zayıf Ax izole eder → offsuit güçlü As (AJ/AQ/AK) ve çiftlerin limp-jam'i B33.2'nin blocker yarı-blöfü olmaktan çıkıp yarı-VALUE olur — domine ettiğin Ax'ten çağrı bulur; limp-jam ayrıca tüm limp aralığını iso'dan korur. (3) Non-all-in limp-reraise dilimi semi-value'dur (A9o/Q8s tipi): kötüden çağrı alır, iyiyi katlatmaz — B33.3'ün blocker-blöf kapağı değil. (4) Tepe (AA–JJ) raise, boy chipEV'den BÜYÜK (kalibre et): BB pozisyonda geniş öder, kellen masada — fiyatı sen kesersin. Zayıf offsuit broadway limp-call; equity itmez, raise değil.

**Kural:** kapsanan SB'de "kim jam'ler, kim iso eder" sorusunu kelle yönüyle yeniden sor — suited güçlüyü raise'e, offsuit güçlüyü limp-jam'e, tepeyi büyük raise'e yaz.

### 28.18 Cheat kartı

*(kalibre et: kelle→BB çevrimini her büyük kararda tazele; tüm eşikler kendi sahandan.)*

| Durum | Kural |
|---|---|
| **Net prim** | Tek sayı: ICM primi − kelle indirimi; indirim yalnız cover edende. Negatif prim ÇAĞRI primidir, blöf primi değil — genişlemeyi lineer + call'la yap |
| **Cover ediyorsan** | Eşik DÜŞER: limp-ağırlıklı geniş VPIP, aralığı NUT'la koru (AA/KK/AK); kısaya karşı suited-bağlantılı jam altın — dar call onu domine edemez |
| **Kapsanıyorsan** | Ağaç ikiye iner: ya jam ya call. Jam DAR (fold equity çökük), stack-off eşiği GENİŞ; küçük 3-bet bağıştır (ultra-geniş lidere polar istisna: 28.8-EK), trap kök hatadır — ama agresif cover edene karşı tepe limp-reraise'le pompa (28.25) |
| **Kelle sabit değil** | Aynı kelle geç fazda daha çok chip eder — çevrimi tazele. Dev sahada geç faz: kelle birkaç BB → terimi sil, kellesiz ICM oyna |
| **Balon paradoksu** | Kellen rakiplerin call'ını genişletir → fold equity erir: balonda kelleli kısa, kellesizden DAHA SIKI jam'ler *(kalibre et)* |
| **Cover kalitesi** | Cover × pozisyon: arkada pozisyonlu tek coverer aralığı kısar, blind'daki iki coverer kısmaz. Kıl-payı cover kırılgan — ince jam'leri kes |
| **Cold-call kapısı** | Açanı ya da 3-bet'çiyi cover etmiyorsan girme. Açıcı squeezer'ı cover ediyorsa squeeze kelepçeli → flat genişler |
| **Ölü-ante limp** | Kellesi şişmiş kısayı raise'le izole ETME — herkes fiyat alır. Limp'le, multiway'i kucakla, kısa ittiğinde sürüyle çök; kendi primin stack'ine yaklaştıkça limp azalır, eşitlenince saf jam-ya-fold; prim stack'i belirgin AŞIP stack de kısaysa hat min-raise'e kayar (mıknatıs istenen) — raise-fold iki bantta da yok, geçiş sınırı kalibre et (28.13/28.23) |
| **Multiway all-in** | Yalnız SENİN cover ettiğin kelleleri ölü para olarak pota yaz. Çok yelpazeye karşı suited broadway/çift ve suited-bağlantılı nefes alır, offsuit yüksek kart ve düşük suited Ax boğulur; her ek KAPSANAN jam over-call'ı genişletir, kapsayan daraltır (28.14-EK) |
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

Pair+FD, combo draw — ince tek-pair'den DEĞİL (deep'te üç sokak value alamaz). Set'leri slowplay = numaradan değil, aralığın bir kısmı turn baskısını kaldıramadığı için range-koruması — ama koruma SONUÇTUR, sebep EV: bet'i ödeyecek el gitmiş ve rakip check'e blöf atacaksa check daha çok kazanır (32.6-EK-2, 26.2-EK-3); check'e blöf atmayan station'a karşı bet geri gelir.

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

### 30.0-EK-2 Dipnot: ICM'de derin rakipler kısa açıcıya rejam'i kendi aralarındaki prim yüzünden biraz kısabilir — sınırda
30.0-EK "arkadakiler derinse reshove genişler → jam-or-fold sertleşir" der; solver-türevi, korunur. Canlı sezgi tersini fısıldar: "15bb ile açıyorum, solumdaki iki agresif derin stack bana rahat rejam edemez — kendi aralarındaki risk primi 3-bet-call'larını sıkar → geniş açarım; herkes 15bb olsaydı kaldıraç onlarda olurdu." ICM'de bunun bir payı var: derin rakip rejam'i sana değil, arkasındaki öbür derine karşı riske atar (22.11'in çarpışma primi onun için de çalışır) → rejam bir tık dar gelebilir *(sınırda — kalibre et; gözlemle, ezberleme)*. Ama chipEV'de ve ante büyükken 30.0-EK ağır basar: rejam onlara efektif ~12bb'ye mal olur, ucuz. Kural: derin masada kısa açıcı olarak varsayılan jam-or-fold; küçük raise-fold'u yalnız ICM açık + arkadakiler birbirini cover ediyor + rejam'in seyrek olduğunu GÖRDÜN şartıyla dene. Derin tarafın kuralı (kısa jam'e ≥~22bb ile call, rejam değil) 22.10-EK'te; 30.3 köprüsü orada.

### 30.1 Raise+ ile karşılaşınca: jam-or-fold, flat DEĞİL

Fringe eller (Q9s/J9s/QTo tipi orta-broadway/zayıf-suited sınır elleri) bu derinlikte CALL değil **jam-or-fold**'dur — ~10-12bb'de re-jam min-raise üstünde gerçek fold-equity taşır; 4-8bb'de jam canlı equity + ölü parayla çalışır, fold-equity beklenmez. Micro stack'in büyük bir kısmını "flop görmek için" fringe'le call etmek, jam/fold doktrininin tam önlediği klasik hatadır.

> **Micro stack'te "her şeye committed"sin ama bu "flop görmek için call et" demek değil — commit'ini JAM olarak al: fold-equity + canlı equity birlikte çalışır; flat-call fold-equity'yi tamamen bırakır, canlı equity'ni ise kısa stack'le kötü realize eder.**

### 30.2 Bu bantta BB min-raise'e karşı geniş savunur — ama savunma = jam/fold kararı

Deep ters-implied cezası olmadığından BB fiyatı iyidir; ama "savunma" burada da jam-ya-fold ekseninde okunur (uygun elle re-jam, gerisi fold), sokak sokak flat-call postflop değil. *(kalibre et — eşik sizing'e bağlı.)*

### 30.3 Eşitsiz stack: tek-aralığa-karşı-büyük-pot etkisi

Jam et, biri call diğerleri fold → tek aralığa karşı büyük pot. Caller arkadaki reopen/squeeze tehdidiyle daha sıkı call ettiği için jam aralığın GENİŞLER; etki derinlik arttıkça büyür (genel ICM/multiway baskı mantığı). Derin tarafın hâli — kısa jam'e karşı ≥~22bb ile varsayılan CALL, rejam değil; SB tek istisna — 22.10-EK'te.

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

### 31.1-EK2 Tuzak testi ve üç kova: limp'in EV'si "limp'e para koyup raise'e koymayacak el"den gelir

Tuzak testi: limp'ime saldıran küme, raise'ime saldıran kümeden farklı mı? Küme derinlikle tek yönlü değişmez — orta derinlikte kaybolur, sığ uçta açılır, en sığ uçta yeniden kapanır *(kalibre et)*. Sığ uçta (kabaca 15bb, *kalibre et*) gerçekten farklıdır: A'lar/K'lar zaten raise'e de jam'ler (yıkanmış), asıl kâr iki düşük kartla non-all-in iso edenden gelir — QQ küçük SPR'de ödenir. Orta uçta (kabaca 25bb, *kalibre et*) küme kaybolur: raise'e call edecek eller limp'e check'ler, limp'e jam'leyen ≈ raise'e jam'leyen → limp EV üretmez, raise'in çağrılma gelirini (kabaca ¾ çağrılır, *kalibre et*) bırakır. Çok sığda (kabaca 12–13bb, *kalibre et*) BTN limp'inde tuzak dilimi çoğunlukla sıfıra yakındır — BB'nin limp'e jam aralığı raise'e jam aralığından dar. Kural: limp'e ekstra aksiyon veren elin adını koyamıyorsan en yüksek-EV elini RAISE'le; "raise'de daha az kazanan" orta broadway'ler limp gövdesine iner *(hangileri: kalibre et)*.

Üç kova — 31.1'in "sığlaştıkça limp" düşüşü her ele orantılı dağılmaz; kova eli değil, elin limp'e gelen ekstra aksiyona vereceği cevabı ayırır (B33.2'nin kova inşası): (a) iki düşük offsuit kart (82o tipi) her derinlikte saf limp — raise-EV'si sıfıra yakın, yüksek-kart raise'lerini sulandırır; (b) iyi suited / suited broadway (JTs tipi) raise-fold edemez, tuzak için zayıf → limp-call gövdesi; (c) yüksek-kart offsuit (K5o tipi) raise-fold'un doğal malzemesi — jam yiyince katlanmak acıtmaz, blocker taşır *(sınırlar: kalibre et)*. Sığlaştıkça yalnız (c) limp'e iner; derinleştikçe (c) raise-fold'a geri çıkar, (a) ve (b) yerinde kalır *(kalibre et)*. Rakip tepeden çok jam'liyorsa (b)'yi genişlet, (c)'yi kıs; pasifse tersi. B33.2 kova iskeletinin HU-IP hâli: (b) BvB-SB'den geniş, (c) daha dar.

### 31.2 Capped kalmanın gerçek maliyeti

Trips/nut'un bir kısmını check-call'da bırakma sebebi over-bluff korkusu DEĞİL: capped olduğunu bilen rakip value HACMİNİ ve BOYUNU büyütür (ince value'yla overbet/jam açılır) + o hacme eşlik eden blöfleri ekler → EV iki kanaldan birden akmayı keser. Uncapped check-call her iki kapıyı kapatır.

> **Capped kalmanın cezası "blöf yerim" değil, "rakip hem daha çok hem daha büyük value bet'ler + yanına blöf ekler"dir. Uncapped aralık iki kapıyı birden kapatır.**

### 31.3 Check-back inşası: gecikmiş blöf zorunluluğu

HU'da flop check-back MTT'den kat kat sık; check-back aralığına bilinçli sıfır-showdown aday koymazsan river'a hep A-high/per taşırsın → aralığın value-oriented olur, rakip sana blöf atmayı KESER (blöf iştahı aralığının şeklinin fonksiyonu) ve kendi value'n ödeme bulamaz. Gecikmiş blöfü rakibin fold'larını unblock eden ellerden seç — HU'da blöf çoğunlukla bloker'ı değil unblock'u seçer (aralık geniş, çöp çok: T6o'nun KT'yi bloklaması küçük kazanç, suited Tx fold'larını bloklaması daha büyük kayıp); gizli tuzak: run-out'a düşen orta kart (9 gibi) rakibin A9/K9 check-back sınıfına sessiz per verebilir — o board'larda blöfü kıs; ama elinde 9 varsa tam tersine o kombolar bloke olur (rakibin A9/K9'u azalır), blöf adayın güçlenir.

### 31.4 HU'da lead/donk YOK — asimetri ölçüsü (B19.1'in HU teyidi)

MTT'de lead'i doğuran aralık ASİMETRİSİdir; HU'da iki taraf aynı geniş aralıkla oynar → düşük/bağlantılı board "senin" değildir, lead aralığı varsayılan olarak kurulamaz. Ana kapı *(çoğunlukla)*: IP küçük c-bet attı, sen geniş call ettin, turn board'u eşledi ya da düşük geldi — asimetri o düğümde BB'ye geçer (31.4-EK); aynı mantık küçük turn bet'ini geniş call'ladıktan sonra river'da da geçerlidir. Preflop yüzü: HU BTN limp'ine iso ≠ BvB SB-limp'ine iso'nun aynası (pozisyonlar ters); OOP iso lineer dilimde daha dar, polar büyük-boy diliminde ve sığda geniştir (31.9, 31.12). B19'un ICM-lead istisnaları ring içindir; HU'ya taşınmaz."senin" değildir, lead aralığı kurulamaz. Preflop yüzü: HU BTN limp'ine iso ≠ BvB SB-limp'ine iso'nun aynası (pozisyonlar ters, OOP iso daha güçlü el ister). B19'un ICM-lead istisnaları ring içindir; HU'ya taşınmaz.

### 31.4-EK Lead'in başlıca kapısı: küçük c-bet'e geniş call + eşleşen/düşük turn

31.4'ün gerekçesi aralık simetrisidir; simetriyi bozan şey flop'taki KÜÇÜK c-bet + geniş call'dır. J-7-7 rainbow'da BTN ~⅓ atar, BB neredeyse tüm Q/K-high'ı ve her çekilişi savunur *(sınır: kalibre et)* — call aralığı per + zayıf A-high + çekiliş etrafında yoğunlaşır. Turn J: BB'nin Jx'i jacks-full (en üst), 7x'i (flop'ta check-raise etmeyenler) sevens-full — Jx'in altında ama IP'nin çöpünü ezer —, düşük Ax'i board two pair + A kicker'la bet'in havasına karşı önde; IP'nin aralığı flop'u range-bet ettiği için hâlâ 8-high çöpü taşır. Asimetri artık BB'dedir → lead: Jx, kalan 7x, ZAYIF Ax (A6 tipi ince value/deny; A9/AT daha çok check, *kalibre et*), showdown'sız çekilişler. Flop c-bet'i büyük olsaydı IP'nin aralığı polar/güçlü kalır, BB'nin call aralığı capped olurdu (7x'in bir kısmı flop'ta zaten check-raise ederdi) → turn lead payı çoğunlukla AZALIR *(kalibre et)*. Aynı mekanizma turn düşük kartı eşlediğinde de çalışır: küçük/büyük lead karışımı — büyük lead'i tek başına yapma, küçük flop bet'i üst kart per'ini de kapsar. Küçük turn lead'ine IP'nin fold oranı çok düşük olmalı *(kalibre et)*; havuz iki canlı kartla da fazla katlanır. Kapı KAPALI: IP polar/büyük başladıysa ve turn IP'nin aralığını kuran orta/yüksek kartsa lead yok; düşük-kopuk dokuda düşük turn'de açılır. Kural: HU'da lead varsayılan değil; lead'i B19'un asimetrisi doğurur, asimetriyi HU'da IP'nin küçük c-bet'i üretir.

### 31.5 Rainbow = büyük boy evi (B18.2 istisna kutusu — HU)

Büyük c-bet boyları en çok RAINBOW/statik board'da toplanır, flush-draw'lu board'da değil. Geniş-aralıklı HU/blind-savaşı potlarında overpair/en-iyi-Tx avantajın büyükse kuru board'da büyük-polar boy doğru — B18.2'nin "kuru=1/3" ezberi burada equity-edge'i masada bırakır. (B18.2-EK ile aynı düzeltmenin HU uygulaması.)

### 31.5-EK Büyük boyun frekansı ve küçük check-raise cevabı

31.5'in "rainbow = büyük boy evi"ni range-bet'e çevirme. Derin HU'da (kabaca 100bb, *kalibre et*) düşük, kopuk, rainbow board'da büyük boy doğrudur — bağlantılı ve monotone dokular hariç *(kalibre et)* — ama büyük boy aralığın YARISINDAN AZI içindir (kabaca %40 bet / %60 check, *kalibre et*): orta overpair'ler, iyi kicker'lı top pair ve overcard-çekilişleri büyük atar, gerisi check *(hangi kombolar: kalibre et)*. Havuz her şeyi "bet" der; range-bet + büyük boy = kendi şişirdiğin potta seyrelmiş (ortalaması zayıf) aralıkla check-raise'e karşı MDF'yi karşılayamamak. Karşı yüz: büyük polar c-bet'e cevap ya check-call ya 3x+ check-raise değil. Polar büyük bet'in gövdesi az value + ÇOK hava kombosudur → KÜÇÜK check-raise (bet'in ~2.2 katı, *kalibre et*) o yığına savunulamaz fiyat açar; havuzun 3x+ polar raise'i fazla para koyar, çoğunlukla saf call'dan kötüdür. Solver'ına küçük raise boyu vermezsen bu düğüm görünmez (B27.3'ün boy-kısıtlama hatası). Sığ aynası (sığ limp-check potu, *kalibre et*): IP'nin yarım-pot c-bet'ine, bet aralığındaki alt-kart havayı hedefleyen overcard + backdoor tipi zayıf elle MİN check-raise — bet aralığı üst/orta kart per'lerini + alt-kart havayı taşır, min-raise tam o havayı hedefler *(kalibre et)*. Kural: büyük boy = seyrek + geniş check; büyük polar bete küçük raise; raise boyu rakibin bet aralığındaki hava oranıyla küçülür.

### 31.6 Hızlandırılmış tell/meta döngüsü

VPIP ~%100 olduğu için eğilimler birkaç elde açığa çıkar; TEK data-point'ten agresif projeksiyon meşru. Teller üç kategoride okunur — timing (snap vs tank), sizing (küçük/orta/büyük), hat (hangi sokakta pasif/agresif) — her birinden bir okuma: derin stack'te bir çifti düşünmeden flat'leyen pot-kontrol ilan etmiştir (timing); A-high ince value'yu check eden rakibin OOP aralığı olması gerekenden güçlüdür, kendi ince value'nu kıs (hat); river'da seni pota iten snap-call "raise menümde yok" itirafıdır, OOP ince value boyunu büyüt (timing+sizing). Üst kural: MTT eliti bile HU'da göreli acemi; ama senin basitleştirmelerini de senden tecrübeli biri aynı şekilde avlar.

### 31.7 Küçük çift jam derinde yaşar + orta boy yasağı

BB'den open'a karşı küçük çiftler HU'da beklenenden derin stack'lerde jam adayı kalır — rejam-vs-open hesabında şaşırtıcı derinliğe kadar +EV kalabilir *(çıpa kabaca ~40bb civarı: hangi çift hangi derinliğe kadar, kendi solver'ında kalibre et; 31.7-EK)*; ama tam stratejide çıpanın üstünde jam yerine call/non-all-in 3-bet çoğunlukla daha yüksek EV'dir — jam aşağı bantta ağır basar, yukarıda sınırda seçenek olarak kalır *(kalibre et)*. Yine de MTT refleksiyle "bu derinlikte çiftle jam mi?" şaşkınlığı HU push/fold bandında leak. "Kabiliyetli ama ileri olmayan" oyuncunun sık görülen bir teli polar spot'ta makul-orta boy (yarım-pot): ya minik (geniş zayıf-value) ya büyük/polar (nut+blöf) — ortası iki işlevi de öldürür. HU river'ı istisnadır: aralık o kadar geniştir ki tek 2x-pot polar boy yetmez, ince value (eşleşmiş board'da zayıf-kicker'lı top pair tipi) ikinci, orta bir value boyu ister — "ince value'yu feda et, tek boy oyna" MTT sadeleştirmesidir, HU'da çalışmaz *(sınırda, kalibre et)*."bu derinlikte çiftle jam mi?" şaşkınlığı HU push/fold bandında leak. "Kabiliyetli ama ileri olmayan" oyuncunun sık görülen bir teli makul-orta boy (yarım-pot): ya minik (geniş zayıf-value) ya büyük/polar (nut+blöf) — ortası iki işlevi de öldürür.

### 31.7-EK Jam'in amacı testi: çift ve offsuit Ax derinlikle döner

Aynı eli her derinlikte aynı hatla oynama; her jam'i üç soru fiyatlar — daha iyi eli katlatıyor mu, katlattığının equity'si var mı, çağrılınca ne oluyor. (1) Offsuit ATo/A9o 3-bet-jam'i ~40bb'de "daha iyi öder, hiçbir şey katlatmaz" → call ya da non-all-in; ~30bb'de jam'e döner, T8s/T9o tipi canlı equity katlanır *(kalibre et)*. (2) Küçük çift BB'den raise'e: derin uçta (kabaca 50bb) CALL (overpair'e 4-bet-jam yemek istemez), çıpa civarında (kabaca 40bb) jam ağır basar — 31.7'nin çıpası *(kalibre et)*. (3) BTN'de ~50bb non-all-in 3-bet yedin: küçük çiftle 4-bet-jam YOK — öden aralık ya overpair (ezer) ya AK/AQ tipi (coinflip); 50bb riske ikisi de fold-equity'yi karşılamaz → flat; 4-bet-jam orta çiftler, premium çift + en güçlü suited As non-all-in *(sınırlar: kalibre et)*. (4) ~25bb'de dengeli polar non-all-in 3-bet'e (equity'siz offsuit blöf + orta-yüksek çift / iyi Ax karışımı): premium çiftler slow-play — polar aralık zaten parayı koyar; en küçük çiftler 4-bet-jam (oynanabilirlik yok, fold-equity var); orta çiftler slow — jam'in katlattığı el aynı, fark call alternatifinin değerinde: call edip blöf yakalar, düşük board'da overpair kalır; yüksek çiftler jam (equity denial) *(bant sınırları: kalibre et)*. 5.2-EK'nin havuz koşulunda (3-bet'te premium eksik, 8-max BvB) orta çiftler de jam'e döner. (5) ~40bb 3-bet-JAM yedin: jam aralığının tepesi yoktur, TT+ non-all-in 3-bet'tedir (B30.6'nın "jam tepesiz" mekanizması) → yüksek-kart suited, orta suited connector, küçük çift ve zayıf suited Ax sınıfı call'a döner *(kalibre et)*; havuz bunları katlar → BB'yken jam adaylarını tam frekansla jam'le. Kural: jam'in gerekçesi "elim güçlü" değil "katlattığımın adı"dır.

### 31.9 BB'nin limp'e iso'su iki boydur: lineer küçük + polar büyük

Derin-orta HU'da (kabaca 50–60bb, *kalibre et*) BTN'nin limp gövdesi tam olarak "küçük iso'ya rahat call eden orta eller"dir (J7s/T5s, Q9o/K7o/A7o tipi). Tek küçük iso *(~3–4x, kalibre et)* o gövdeyi cezalandırmaz, sadece pot kurar. İkinci, çok daha büyük boy *(kalibre et)* gövdeyi katlatır ve iki dilim açar: (a) check-back EV'si düşük dip suited çöp (62s/73s/92s) blöf olarak raise edilir — her biri kendi üst-kartının offsuit bloğunu katlatır (73s, 7x offsuit'i düşürür; check-back'te aynı ellere domine olacaktın); (b) sokak sokak eriyen orta-premium (JJ/AQ/AK) büyük boyla 88/99/AQ sınıfını jam'e zorlar — kart açıldıkça değer kaybedecek eli preflop'ta çözer. Küçük boy lineer kalır: oynanabilir suited gövde, çiftler, en güçlü broadway — "çağrılırsam sorun değil" sınıfı. Tek küçük iso'yla dip çöp raise edilemez (fold-equity'si gövdeyi katlatmaya yetmez, seni domine eden limp-caller'lar call eder ve sen ödersin), JJ/AQ erir. Havuz büyük boya teoriden çok jam'ler ve teoriden çok katlanır — iki sapma da boyun lehine. Aynası BTN'de: J9s tipi "limp-reraise için zayıf, tuzak için güçlü" el saf raise'dir; premium'un bir dilimi büyük iso'ya limp-reraise için limp'lenir — 31.1'in polar limp'inin derin-orta uygulaması.

### 31.10 Raise-only rakip: BB'nin any-two jam penceresi

HU'da %100 VPIP'in şartı limp'tir; hiç limp'lemeyen BTN çoğunlukla ya çok açıp (kabaca %80, *kalibre et*) jam'e teoriden çok dar call eder, ya da açışını daraltıp dip aralığı bedava bırakır — ama üçüncü ihtimal de var: geniş açıp jam'e teorik genişlikte (hatta gördükçe daha geniş) call etmek; pencere yalnız ilk hâlde açılır, o yüzden gözlem şarttır. Raise-only + jam'e dar call gözlemi varsa 30–40bb'de BB'den raise'e her iki kart jam çoğunlukla +EV'dir *(kendi solver'ında geniş open / dar call modeliyle doğrula)*. Protokol: (1) ilk birkaç button'u izle (31.6: HU'da tek data-point yeter; *pencereyi kalibre et*) — limp yoksa raise-only varsay. (2) Sonra raise'e jam — aralığın tamamı; kill-switch limp gövdesi değil, jam'in call yeme oranıdır: call oranı eşiği geçerse ya da rakip jam'e genişlerse any-two'yu bırak, jam aralığını daralt *(eşik: kalibre et)*, limp'i bekleme. (3) Rakip non-all-in 3-bet'e de fazla katlanıyorsa en düşük-EV jam'leri (T2s/J6o sınıfı) non-all-in 3-bet blöfüne çevir. (4) Raise'ini karıştırmayan (JTs/98s'i hep raise'leyen) rakibe non-all-in 3-bet zayıftır — çağrılır ya da jam yer; all-in ise aralığının yarısını katlatır. Rakip "3-bet yedim → jam" refleksine dönerse daha iyi: inşa edilmiş stratejiye karşı daha çok kaybeder. Amaç onu limp'lemeye zorlamak değil; limp gövdesi gelince chart'a dön. Ölçüm çıpası: BB'de plain call ≈ sıfır noktası; jam'i ona karşı fiyatla, "fold'dan iyi" yetmez. Sınır: 50bb+'ta jam'in risk/ödülü bozulur — polar non-all-in 3-bet + DAR jam kovası (rakibin jam-call aralığına karşı equity'si iyi ama postflop oynaması kötü eller: orta çift, suited As sınıfı; derinlik arttıkça küçülür) + gerisi call planı öne geçer *(kalibre et)*.

### 31.11 Polar iso'ya IP'den küçük limp-reraise — jam'in giremediği boşluk

Orta stack'te (kabaca 30bb, *kalibre et*) limp'ledin, BB iso etti; elinde ne tuzak ne jam malzemesi var → limp-fold ya da isteksiz limp-call. Teknik, BB'nin limp'e cevabının gerçekten POLAR olduğu düğüm içindir: tepe (çift/Ax/orta suited connector) iso-jam'de, non-all-in iso'nun gövdesi 82s/T4s/Q8o tipi çöp, orta suited'ler check'te (B33.3'ün aynası). Cevabı merged'se — non-all-in iso'da çift/Ax/broadway de varsa — öncül düşer, teknik çalışmaz; o zaman düğüm iso'nun gerçekten jam-ağırlıklı olduğu daha sığ banda kayar *(kalibre et)*. Polar aralığa limp-jam gereksiz pahalıdır: çöp gövde küçük reraise'e de katlanır, tuzak her iki boya da parayı koyar — jam aynı katlamayı bütün stack'i riske ederek alır; üstelik bu derinlikte limp-jam zaten overbet'tir, sığ katmana aittir (B33.3). KÜÇÜK non-all-in limp-reraise *(kalibre et)* ise çöp gövdesini katlatır: iso'nun büyük çoğunluğu OOP'de küçük reraise'e bile devam etmek istemez. Malzeme: en düşük-EV limp-call'lar (K5o/T7o/97o sınıfı — zaten isteksiz devam edenler); kapak olarak premium'un limp'lenen dilimi (AA/KK/JJ) az EV kaybeder, polar tepe yine parayı koyar. Çoğu çözümde bu düğüm seçenek olarak yoktur; OOP call bulamayan rakibe karşı yapısaldır. Doz: aşırı kullanırsan BB iso'sunu merged'e çevirip üstüne jam'ler — kapağı ve göstergeyi (küçük reraise'e call bulmaya başladı mı) koru. Aynası (sen BB'sin, havuz erken limp-reraise etti): şüpheli — havuz bunu çoğunlukla tuzakla yapar (B33.5'in notu HU'da da geçerli); devam edeceksen "az şey ters gidebilecek" ellerle (54s/66), domine olabilen suited Kx/offsuit Ax'le değil.

### 31.12 Sığ BB: As jam'ler, Papaz raise'ler — limp-call potu A'sızdır

~15bb HU'da *(kalibre et)* BB'nin limp'e "iyi el jam, orta el check" ikilisi OOP pasifliğidir; sığ OOP iso'su dar değil GENİŞtir. (a) Kart ayrımı: Ax bu derinlikte ya BTN'nin open-jam/limp-jam'i ya BB'nin iso-jam'idir — limp-call potuna A neredeyse girmez. KQs/KJs/KTs tipi suited Kx ise NON-ALL-IN iso'dur ve raise-call'a yeter; K8o tipi offsuit Kx de iso'dur ama raise-FOLD olarak *(kalibre et)* — ikisi de limp-call eden A'sız orta aralığı postflop kicker'la domine eder, EV fold'dan değil limp-call potundan gelir. Sonuç: iso aralığında suited Ax az, Kx çok; hemen her offsuit el bir şey yapar *(kalibre et)*. (b) Pasifliğin çift bedeli: BTN'nin dip limp'i bedava realize eder, check hattın çöple dolar → limp potunda IP üç sokak bet eder. Aynası (sen BTN'sin, limp'ledin, iso-jam geldi): jam aralığı Ax/çift/blocker ağırlıklı, Kx/broadway non-all-in'de → orta suited bağlantılılar ve zayıf-kicker'lı suited Kx/Qx limp-CALL'dır; domine olmayan bağlantılı, domine olan suited broadway'den (ör. 98s vs QTs) bazen daha iyi call'dır *(kalibre et)*. Havuz teoriden çok limp-fold eder ve Ax'ini open-jam'lediği için limp-call aralığı korumasız → BB'den limp'e jam daha iyi çalışır; BTN'de limp-call eşiğini teorinin altına çek. Havuz jam'e sıkı call ediyorsa en güçlü suited broadway'leri jam yerine raise'e, orta suited bağlantılıları jam'e kaydır — toplam jam frekansı yaklaşık sabit kalır, içerik kayar *(hangi eller: kalibre et)*.

### 31.13 3-bet blöfünün derinlik anahtarı: derinde suited, sığda aynı rütbelerin offsuit'i

BB'den 3-bet blöfünü her derinlikte aynı elden seçme. Derinde (kabaca 50bb) 3-bet çoğunlukla ÇAĞRILIR *(kalibre et)* → oynanabilirlik ve board coverage para eder → K2s/Q2s/J4s/64s sınıfı; düşük-frekans offsuit blöfleri (J9o/K7o) at — edge'in varsa varyansı düşürür, ROI kaybı küçük. Sığda (kabaca 25bb) non-all-in 3-bet'e cevap çoğunlukla ya jam ya fold'dur (az miktarda call) → oynanabilirlik neredeyse sıfır, yalnız blocker + fold sayılır → aynı rütbelerin OFFSUIT'i (K2o–K4o, Q2o–Q4o, J2o–J6o, *kalibre et*); suited'ler artık limp-call/flat olarak fazla değerlidir, blöfe yakılmaz. Geçiş bandında (~40bb) ikisi karışır. İkinci ölçü: blöf domine EDENİ katlatır — 64s'nin 3-bet'i 86o/K6o/Q4o'yu düşürür; HU'da per-vs-per domine olmak en pahalı kayıptır, blöfün asıl geliri bu fold'lardır. 4-bet blöfünde de K2/K3, K7/Q8'den iyidir ama gerekçe kicker'dadır: rakibin derin 3-bet blöfleri orta-kicker'lı Kx/Qx ve 7'li/8'li suited connector ağırlıklıdır — K7/Q8 tam o blöfleri bloklar (katlanmasını istediğin elleri eksiltir), 2'li kombolar blöf aralığında neredeyse yoktur → K2 blöfe dokunmaz, yalnız KK/AK'yı bloklar. Value tarafında ATo/KQo/KJo derinde yüksek-EV 3-bet-FOLD'dur: EV'si 4-bet-jam'e call'dan değil, çağrılıp domine ettiği ellerden gelir *(kalibre et)*. B4'ün "45bb'de suited connector'la 3-bet blöfü zarar" satırı ring içindir — HU'da aynı el derinde en iyi blöf, sığda offsuit'e devrolur.

### 31.14 Open boyu = rakibin cevabı

HU'da tek open boyu yok. Open'ın maliyeti 3-bet/jam sıklığıyla, geliri call sıklığıyla çarpılır; HU BB'nin call oranı 3-bet oranından çok büyüktür *(kalibre et)* → boyun asıl işi J4o'yu savunmaya çalışan aralığı ŞARJ etmektir, 3-bet'ten kaçmak değil. Yön doktrindir, sayılar değil: derinde daha büyük, orta bantta küçülür, jam tehdidi başlayınca min — boylar ve eşikler *(kalibre et)*. Limp'lediğin oranda raise aralığın 3-bet'e daha az açıktır → biraz büyük boy taşınır. Havuz sapması boyu iki yönde kaydırır: orta bantta havuz teoriden AZ jam'ler (teorinin jam'lediği zayıf suited / blocker-ağırlıklı elleri bulmaz, *kalibre et*) → orta boy yaşar; sığ bantta teoriden ÇOK jam'ler ("blocker var, jam") → min. BB open'a overfold ediyorsa (Q5o/düşük suited'i katlıyorsa) → min-raise %100, karmaşıklaştırma. Her derinlikte aynı ilke: cevap "az call, çok 3-bet"e kayarsa küçült; "çok call, az 3-bet"e kayarsa büyüt — postflop edge'in varsa büyük boy pot payını da büyütür. Derin-underdog notu: "dar aralık + büyük boy" fikri boyu rakip cevabına göre seçmenin yerini tutmaz (31.15).

### 31.15 Underdog ve edge: sıkı olabilirsin, pasif olamazsın

Derin HU'da (kabaca 100bb) senden iyi rakibe karşı "potu küçük tut, rahat derinliğe inene kadar bekle" diye 3-bet'i kısmak yanlış kapıdır. 3-bet, HU aralığının büyük bir dilimidir (100bb'de kabaca ¼, *kalibre et*); onu üçte birine çekmenin EV maliyeti büyüktür ve BTN'yi %100 VPIP'le bastırmaya bırakırsın — "rahat derinliğe" geride inersin, orada edge olmaz. Meşru sıkılık: biraz daha open-fold, biraz daha check-fold. Meşru olmayan: agresyon dilimini (3-bet, iso, barrel) satmak. Derin fazda pahalı pot yoksa okuma da yok — B33.7'nin "tester"i HU'da 3-bet'le atılır. Sığ ucun aynası (kabaca 6–8bb): "büyük edge'im var, iyi elle yakalarım" refleksi iflas eder — sokak yok, edge yok, kalan tek edge jam'in fold-equity'sidir. Havuz bu bantta jam'e teoriden dar call eder (J7o/86s/T6s'i katlar, *kalibre et*) → her ince jam'i al; BB'de de dip %10'u katlama (Q2s/98s/J8o ~8bb'de call, *kalibre et*), yoksa rakibe any-two jam hediye edersin — B30.6'nın ≤5bb kuralının 6–8bb uzantısı. Ortak kural: derinde de sığda da HU edge'i agresyondan gelir; pasiflik edge'i değil varyansı satın alır.

### 31.8 Cheat kartı

*(kalibre et: limp/raise geçiş derinlikleri, küçük-çift jam eşiği — kendi solver'ından.)*

| Konu | Kural |
|---|---|
| **BTN preflop** | %100 VPIP — hiçbir el fold yok; derinleştikçe raise, sığlaştıkça limp, ~15-16bb üstü IP jam kaybolur *(kalibre et)*. Rakibin BTN fold'u başlı başına tell |
| **Pasife karşı** | Dengeyi bırak: çöpü limp'le, iyiyi raise'le |
| **Capped kalma** | Ceza çift kanal: rakip value hacmini VE boyunu büyütür + yanına blöf ekler → trips/nut'un bir kısmı check-call'da (uncapped kal) |
| **Check-back** | Bilinçli sıfır-showdown aday koy — yoksa rakip sana blöfü keser, value'n ödeme bulamaz; gecikmiş blöfü rakibin fold'larını unblock eden ellerden seç |
| **Lead/donk** | Varsayılan YOK — aralıklar simetrik, "senin board'un" kurulamaz; başlıca kapı *(çoğunlukla)*: küçük c-bet'e geniş call + düşük kartı eşleyen/düşük turn (eşli board'da üst kartı eşleyen turn de açar — 31.4-EK); ICM-lead istisnaları ring içindir, HU'ya taşınmaz |"senin board'un" kurulamaz; ICM-lead istisnaları ring içindir, HU'ya taşınmaz |
| **Boy** | Rainbow/statik board = büyük-polar boy evi; "kuru=1/3" ezberi HU'da equity-edge'i masada bırakır |
| **Tell döngüsü** | Tek data-point'ten projeksiyon meşru: timing / sizing / hat üçlüsünü oku; makul-orta boy (yarım-pot) polar spot'ta acemi telidir — boylar ya minik ya büyük/polar; HU river'da ince value ikinci (orta) boyu ister *(sınırda)* |
| **Küçük çift** | BB'den open'a karşı rejam şaşırtıcı derinliğe kadar +EV — çıpa ~40bb civarı *(kalibre et)*: altında jam ağır basar, üstünde call/raise'e kayar; jam'in gerekçesi "katlattığımın adı" (31.7-EK) |
| **BB iso (limp'e)** | İki boy: lineer küçük (gövde) + polar büyük (eriyen premium + dip suited çöp) *(kalibre et)*; sığda en güçlü yüksek-kart bloklu eller jam, bir kademe altı non-all-in raise *(hangi rütbe hangi kovaya: kalibre et)* — sığ OOP iso geniş |
| **Raise-only rakip** | Hiç limp'lemeyen rakibe karşı orta derinlikte jam aralığını belirgin genişlet — şart: jam'e dar call gözlemi; kill-switch jam'in call yeme oranı; derinleştikçe jam'in değeri düşer; sıfır noktası plain call *(eşikler ve gözlem penceresi: kalibre et)* |
| **Polar iso'ya (IP)** | KÜÇÜK non-all-in limp-reraise (en düşük-EV limp-call'lar + premium kapak); limp-jam aynı fold'u tüm stack'i riske ederek alır |
| **Tuzak testi** | Limp'e ekstra aksiyon veren elin adı yoksa RAISE; orta derinlikte tuzak ölü, sığ uçta iki-düşük-kart iso'sundan yaşar, en sığda yeniden kapanır *(derinlikler: kalibre et)* |
| **Üç kova** | Kova eli değil, elin limp'e gelen ekstra aksiyona vereceği cevabı ayırır (fold/call/raise — B33.2): iki-düşük offsuit saf limp · iyi suited/broadway limp-call · yüksek-kart offsuit raise-fold *(sınırlar: kalibre et)*; sığlaştıkça yalnız üçüncüsü limp'e iner, derinleştikçe raise-fold'a döner |
| **3-bet blöfü** | Derinde suited (K2s/64s), sığda aynı rütbelerin offsuit'i (K2o/Q3o); blöf domine EDENİ katlatır |
| **Open boyu** | Az call/çok 3-bet → küçült; çok call/az 3-bet → büyüt; overfold → min %100 |
| **Underdog** | Sıkı evet (open-fold/check-fold), pasif hayır (3-bet/iso/barrel satılmaz); 6–8bb'de tek edge jam |
| **Büyük c-bet** | Seyrek (aralığın yarısından azı) + geniş check; büyük polar bete KÜÇÜK check-raise (~2.2x, *kalibre et*) |
| **Katman geçişi (HU-BTN)** | Default'u bb, exploit'i rakibin ilk jam'i/iso'su tetikler — kırılmadıysa tamir etme (33.7-EK) |

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

### 32.3-EK-2 Mono satırının IP 3-bettor sürümü: overpair check-back, blöf renk-kartlı overcard — ve üç-broadway'de caller BB ise yarım pot sınırda
32.3'ün mono satırı OOP 3-bettor içindir. IP 3-bettor (BTN'den 3-bet, erken açıcı call, derin) 9-8-4 mono tipi orta board'da üç şey değişir *(kalibre et)*:

- **Overpair'ler ağırlıkla check-back.** Caller'ın aralığı suited-ağır (Ax/Kx suit, çiftler), offsuit broadway'i az → mono'da ya flush'ı var ya hava. Overpair'le para koyunca ödeyen çoğunlukla flush, katlanan zaten hava. Alt-overpair ve set bile yarı yarıya check'te — set top pair call'larını bloklar (32.6-EK-2).
- **Blöf adayı JT değil A♠x / K♠x:** rakibin ceplerine overcard taşır, nut/ikinci-nut fd ile kendisi realize eder. JT ne overcard ne renk → check.
- **Turn'de caller'ın bet'i polar ve büyük** (flush + set + düz-çekilişi blöfleri; 9x check'te): overpair'i rütbe değil bloker ayırır — 26.4-EK madde 3. River: rakip range-check ediyorsa value boyun büyür, block-bet atıyorsa küçülür (32.6 kart-eşleme).

**Üç-broadway notu (32.3 hücresine):** "her derinlikte küçük" SB-vs-BTN içindir; 40bb SB-vs-BB'de caller BB ve aralığı suited Kx/Qx/Jx çöpü taşıyorsa tek boy olarak yarım pot sınırda — küçük o çöpü (K5s tipi) katlatmaz, yarım pot katlatır *(kalibre et)*. Derinde ve BTN'ye karşı küçük aynen.

### 32.3-EK 100bb sütunu: OOP 3-bettor'ın check payı ikiden fazla katlanır — A-düşük ve düşük board "tam-aralık küçük" olmaktan çıkar

32.3 tablosunun "A-high kopuk: tam-aralık küçük" ve "Düşük kopuk: merged → küçük-orta, yüksek frekans" hücreleri SPR ~3–4 (55–70bb) içindir; 100bb'de (SB vs BTN) ikisi de "kova check"e döner *(kendi sim'inde kalibre et)*:

- **İki asimetri.** (1) Sığda OOP'nin realizasyonu flop jam'lerinden gelir; 100bb'de jam sınıfı yok olunca ham equity biraz artsa da realizasyon belirgin düşer, IP'ninki yükselir — pozisyonun değeri SPR'yle büyür. (2) IP 100bb'de A-düşük board'da AQ/AJ ile slow-play yerine raise bulur (sığda para zaten girer, derinde büyütmesi gerekir) → A-düşük'e raise sıklığı katlanır; diğer dokularda c-bet'e raise sıklığı derinlikle çoğunlukla DEĞİŞMEZ — "IP derinde her yerde agresif" ezberi yanlış.
- **Sonuç:** A-düşük kopukta check payı ~sıfırdan üçte bire; düşük board kovasında üçte ikiye yaklaşır (kopuk-düşük ile bağlantılı-düşüğü ayrı kalibre et); üç-broadway ve A+broadway'de fark küçük. Kuru eşleşmişte (T-7-7 / 9-4-3) yarım pot, yüksek-eşleşmişte (A-A-x) küçük kalır.
- **İcra:** check aralığını KK/QQ/JJ + zayıf Ax'le kur (polar bet, orta katman check); IP'nin A-düşük raise'ine karşı orta Ax ile bet-fold değil check-call planla. Tam-aralık küçük 40–60bb'nin lisansıdır.

32.7'ye ölçüm: 100bb A-düşük check payı ve IP raise sıklığı. 29.2 ile aynı yön.

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

### 32.5-EK-2 Düşük board'da OOP 3-bettor'ın hattını board değil 3-bet aralığının BLÖF kompozisyonu seçer — orta suited bağlantılı varsa küçük range-bet, yoksa check
32.5'in "düşük bağlantılı board'da OOP çoğunlukla check, IP stab" satırı SB'nin BTN'ye karşı dar, broadway-ağır 3-bet aralığı içindir. BB'nin BTN'ye karşı 3-bet aralığı blöfünü orta suited bağlantılıdan (98s/T8s/T7s tipi) + orta çiftlerden alır; o aralıkla 7-6-5 / 6-5-4 SENİN board'undur *(kalibre et)*:

- **Küçük tam-aralık bet, yüksek frekans:** iki-per/düz/set + overpair kütlesi sende; caller'ın offsuit broadway'i (KQo/KJo/JTo) otomatik katlanır, havuz backdoor'suz K9s/Q9s'ini de atar. Büyük boy gereksiz — katlanan zaten katlanıyor, kalan aralık güçlü; 99/TT'nin büyük bet EV'si küçüğe yakın.
- **Aralığında orta suited bağlantılı YOKSA** (SB-vs-BTN, premium-ağır BB 3-bet'i): 32.5 aynen — check, IP stab'a bırak.
- **Sınır kartı:** 8-7-6 / 9-8-7'de caller'ın Tx/JT gutshot'ı açılır → frekans düşer (32.5'in "overcard kesimi çekiliş alıyor mu" sorusunun aynası).

32.9 Drill 5'in cevabı ("7-6-5 küçük stab") SB-vs-BTN için doğru kalır; BB-vs-BTN'de OOP daha seyrek check ettiği için stab düğümü daha az açılır — drill'e "3-bettor kim?" sorusu. IP stab'ın turn devamı 19.4-EK-3'te.

### 32.5-EK IP 3-bettor ağacı (BTN 3-bet vs CO, 50–60bb): düşük board'da range-bet YOK — yüksek-equity orta broadway CHECK, bet = güçlü + düşük-equity blöf

IP 3-bettor'ken "agresörüm, 6-5-2'de küçük range-bet" refleksi kök hatadır. Düşük board'da OOP caller'ın aralığı (60bb'de bol suited connector/küçük çift) check-raise için doğal value (overpair, 54/65, 77–TT, set) + doğal blöf (K8/A7 backdoor) taşır. KQ/AJ/AT bet'lenince daha kötü el katlanmıyor, daha iyi el ödüyor, blöf-raise'e katlanıyor — bet-fold ettiğin el rakibi yeniyordu. Check-back edilince turn K/Q/J'de kicker tavanı sende → cooler'ı sen kurarsın. Bet: güçlü eller + JT tipi düşük-equity blöf (raise yerse kayıp küçük, KJ/QJ'yi katlatır).

- **A-düşük (A-5-2):** KK/QQ/KQs check-back — 6x/Ax katlanmaz, KJ/KT katlanır; check-back payı beşte bir civarı *(kalibre et)*.
- **Orta (9-8-3):** 8x ve çekilişsiz AK/AQ'nun bir kısmı check-back — raise yiyince pure call'a, turn'de OOP jam'ine mahkûm.
- **Yüksek board:** tersine küçük ve sık — ölçü "küçük boy suited Ax'i katlatıyor mu?" (J-9-7'de A5s backdoor katlanır, 9-7-3'te katlanmaz). K-Q-T'de nut turn'de değişir → flop küçük, para turn'de. Mono'da overcard'ın değeri "check-check sonrası rakip blöfler mi?"ye bağlı *(sınırda)*.

**Karşı-exploit (sen OOP caller'san):** havuz IP A-x-x düşükte range-bet'e yatkındır → küçük (~2.3×) check-raise'i 5x/Ax koruma + 8-7/8-6 wrap'lerle GENİŞ kullan; K8s/Q9s/T7s backdoor'ları katlanır *(kalibre et)* — 26.5 "flop 1/3 → x/r sık" satırının 3-bet-pot uygulaması.

### 32.6 Turn/river: polarlaşma ve kart-eşleme

Küçük flop bet'i call yedikten sonra turn çoğu kartta polarlaşır (büyük boy, orta katman check); düz/orta-per ekleyen turn'de lineer küçüğe döner *(kalibre et)*. **Blöf seçimi = bugünkü fold equity + yarınki value-jam kapasitesi** — orta perleri bloklamayan düşük Ax tipi unblocker öne çıkar; yüksek-equity çekiliş fold equity'ye muhtaç değildir, bedava realize eder. River: OOP, blöfü Ax-ağırlıklı IP'ye karşı AQ'yu FOLD, QJ'yi CALL eder — AQ blöfleri bloklar (B26.4).

**River overbet blöfünde kart-eşleme.** Blokeri yalnız "nut'u bloklar mı" diye seçme. Rakip bluff-catch kararını senin VALUE aralığınla eşleşen kartlara göre verir: flush GELEN board'da value'n orta kart + flush kartı taşıyorsa, o kartı tutan bluff-catcher (Ax + flush kartı) "eşleştirdim" diye CALL eder, tutmayan FOLD. Blöf adayının kritik özelliği rakibin premium bluff-catcher'ının kartını senin de taşımandır — "eşleşen" call sınıfını azaltır, kalanın katlanma payı çoğunlukla yükselir (fold equity artar, garanti değil). Alt cep + flush kartı bu yüzden flush gelen mono board'da doğal overbet blöfüdür; kaçan flush'ta flush kartı taşıyan blöfler çoğunlukla listenin sonundadır — rakibin zaten katlanacak ıskalamış çekilişini bloklarsın; bloklamayan aday varsa onu seç. Value iki boy: en üst Ax rakipteyse zayıf-orta Ax küçük, flush+ büyük. B11.2-EK'in saldırı yüzü *(kalibre et)*.

### 32.6-EK-2 En güçlü elin turn check'i: aralık koruması değil, blöf İNDÜKSİYONU — station'a karşı bet geri gelir
32.6 küçük flop bet call'landıktan sonra turn'ün polarlaştığını söyledi; tepenin neden check'te durduğunu söylemedi. Sebep koruma değildir:

- **Bet-bet-bet'in muhatabı gitti.** Küçük flop bet caller'ın havasını katlattı; kalan aralık per/çekiliş-ağır. Zayıf per'i (6x/5x) bet-bet-bet'e iyi fiyata rağmen katlanır — havuz "flop'ta top pair'dim" diye bile bırakır. Güçlü per'i (9x) check'ine kendisi bet eder — value kaçmaz. Havası/gutshot'ı (T8/Q8/K8 tipi) check'ine büyük blöf atar — AA hiçbirini bloklamaz. Üçü toplanınca AA'nın check EV'si bet EV'sini geçer *(kalibre et)*.
- **Mono board'da top set aynı kova** (IP 3-bettor, 9-8-4 mono): 99 rakibin top pair call'larını bloklar, bet'e ödeyecek el az; check-back rakibin polar düz-çekilişi blöflerini ve orta flush'larını indükler (32.3-EK-2).
- **Sınır:** rakip check'e blöf atmıyorsa (rec station) indüksiyon yok → bet geri gelir. Rakip river'da range-check ediyorsa river value boyun büyür; block-bet atıyorsa küçülür.

Gerekçe sınırı belirler: "koruma" rakipten bağımsız hep check der, "indüksiyon" station'a karşı bet'i geri getirir. 29.3'ün "set slowplay = range koruması" cümlesi mekanizmanın adını yanlış koyar — 26.2-EK-3 ile aynı köprü: koruma sonuçtur, sebep EV.

### 32.6-EK IP 3-bettor turn boyu kart yüksekliğiyle TERS — düşük/blank turn BÜYÜK, yüksek turn KÜÇÜK; blöf, "üç river'da value bet" elinden

32.6 "çoğu kartta polarlaşır" dedi; IP 3-bettor'da yön kartla ters çalışır. Küçük flop bet (J-9-7 / 9-8-3 / 6-5-2) call yedi:

- **Düşük/blank turn (3, 4, T):** rakibin devam aralığı suited-Ax backdoor, KQ/KJ, alt cep, gutshot — bu katman ~%65 pot ve üstüne katlanır, küçüğe katlanmaz; küçük boy onu bedava river'a taşır → BÜYÜK, efektif stack'in üçte biri civarı *(kalibre et)*. "Blank turn → küçük devam beti" ezberi burada yanlış.
- **Yüksek turn (K/Q):** senin aralığın o kartla yoğun (KQ/KJ/AK/QT/JT) → "neredeyse her şey" küçük ve sık; rakibin AQo/AJo ve alt cepleri küçüğe katlanır, per'ler zaten katlanmaz.
- **Blöf seçimi** — 32.6'nın "yarınki value-jam kapasitesi" ilkesi: K7/K6/K5 tipi (KQ/KJ'yi katlatır, K river'ında value), Q9 (QJ/KQ/AQ'yu katlatır); T7/98 gibi "gelince bile value beti şüpheli" eller turn'ü bet'lemez. Ölçü: "bu blöf en az üç river'da value bet'e dönüşüyor mu?" *(kalibre et)*. Havuz tersini yapar: JT'yi bet'ler, KJo/KTo'yu bet'lemez — 3-bet potunda en pahalı el-seçim hatası.
- **River jam blöfünde** ikinci liste: rakibin senin blöf sınıfın SANDIĞI eller — gerçek blöfü onun dışından seç (1.6); kart-eşlemeyle (32.6) birlikte okunur.

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

### 33.1-EK 10bb BvB push/call cep ezberi — dördüncü katmanın cebe sığan hâli

SB push *(kalibre et)*: offsuit'te her Kx ve her Qx (Q2o ≈ sıfır ama havuz fazla katlar → push); Q'dan J'ye BÜYÜK düşüş: J7o+, sonra paralel T7o/97o/87o; 6x offsuit ve altı fold. Suited'te bir yüksek kart taşıyan her suited (T2s+, 92s sınırda); düşük suited'lerde bağlantı şart (74s/64s/65s push, kopuk en düşük suited fold). BB call *(kalibre et)*: her Ax, her Kx; K'den Q'ya büyük düşüş: Q8o+, J9o+, orta suited broadway. Ezber çıpası: push eşiği Q→J'de, call eşiği K→Q'da kırılır; ikisini karıştırma. Sınırdaki call çoğunlukla +EV — koşul havuzun limp-tuzaklamasıdır: havuzun jam aralığı dengeden daha az premium içerir (AA/KK'yı ara sıra limp'ler) → chart'tan az tepelidir, sınır call'ı "yumruk tokuşturma" olur, fold görece büyük hata; premium'unu da jam'leyen rakibe karşı aynı call sınıra/−EV'ye döner. Havuz kendi tarafında chart'ın sınırındaki call'ları (orta Qx-o / Jx-o ve zayıf suited broadway) çoğunlukla katlar → SB'nin en ince push'ları geçer; sen de at *(kendi havuz verinle kalibre et)*. HU chart'ını buraya taşıma: HU-BTN 10bb'de limp'i olduğu için open-jam'i dardır (B31.1), BvB SB OOP olduğu için jam iştahı yüksektir — iki jam aralığı da, call eşiği de ayrı ezberlenir. Bant altı: 8bb'de gamble belirgin genişler, 5→7bb geçişi en büyük sıçrama, ≤3bb her iki kart (B30.6).

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
3. **Value limp-reraise'i DARALT** — havuz güçlü elleri teoriden sık, zayıfları seyrek iso eder → limp-reraise'in karşısındaki devam aralığı da güçlü → yalnız premium (kabaca QQ+/AK, kalibre et) reraise-value. KQs/AJo/ATs sınıfı bu aralığa domine olur, reraise value değil ince blöf olur → limp'ten çıkar, açılış raise'ine taşı (limp seyrek iso yediği için tuzak da çalışmaz); limp'lendiyse limp-call kalır, reraise değil. Koşul: havuz limp'e seyrek iso ediyorsa; seni kapsayan AGRESİF iso'cuya karşı PKO'da tersine döner — TT+/AQ+ limp-reraise genişler (28.25). Kalibrasyon notu: havuz BB'si SB raise'ine 40–60bb'de teorinin kabaca yarısı kadar 3-bet eder; derin/orta katman sınırı havuzda ~45bb'ye iner — 60bb'yi derin gibi oyna *(kalibre et)*.

BB aynası: havuz derinde pasif → küçük potları sen kap, image'i orada kur; büyük pot geldiğinde ödeme o image'den gelir.

### 33.5-EK Sığ havuz (15–20bb): limp'e çok jam, az iso

33.5'in derin sapmasını (az iso) sığa taşıma. 15–20bb BvB'de havuz SB limp'ine teorinin birkaç katı jam'ler ve teorinin yarısı kadar non-all-in iso eder *(kalibre et)* — jam'i "iyi el"den seçer, iso'yu neredeyse hiçbir şeyden. Sonuç kitabın satırlarına şöyle iner:

**33.5'in "derinde SB'den fold yok" satırı sığa da geçer.** Cezalandırılmayan limp ekstra realize eder → 20bb'de en zayıf offsuit eller bile fold değil, limp.

**33.3'ün "orta suited raise'e kayar" satırı burada tersine döner.** Orta suited broadway iki yönde sıkışır — raise'e fazla jam gelir, limp'e az non-all-in iso gelir (jam gelirse yalnız 1bb'lik limp'i kaybedersin) → LİMP: postflop OK, tuzak payı var, güçlü iso aralığı zayıf limp-call'ını ezmez çünkü iso etmiyor.

**33.2'nin "limp-jam malzemesi küçük çift" satırının havuz düzeltmesi.** Küçük çiftin limp-jam EV'si iso'nun fold'undan gelir; iso gelmiyorsa en küçük çiftler OPEN-JAM'e döner (fold + canlı equity), orta çiftler limp'te kalır *(sınır: kalibre et)*.

**Jam ve raise setleri** *(sınırlar: kalibre et)*. Jam: offsuit Ax, en küçük çiftler, düşük/orta suited bağlantılılar — çağrılınca yüksek karta karşı canlı, domine edenleri katlatır. Non-all-in raise: tepe (havuz suited Ax'e geniş jam'ler, raise-call kârlı) ve yüksek-kart offsuit blocker sınıfı raise-fold; suited blöfler ve orta suited bağlantılılar sınırda — raise-fold ya da limp. Büyük çiftler limp-tuzak değil raise: 20bb'de dip aralığı katlatmak için jam'lemenin anlamı yok (B31.1-EK2).

**33.4'ün "her bb bir kademe" kuralına havuz indirimi.** Havuz limp'e teoriden GENİŞ jam'liyor → havuz jam'ine call aralığın da teoriden geniş olur, eşik aşağı iner *(kalibre et)*.

### 33.6 Asimetrik ve karışık stack

ChipEV/efektif-stack mekanizması; kelle yoktur, B28 cover mantığı buraya taşınmaz. Ortak ilke: rejam efektif stack'le fiyatlanır — derinin rejam'i ne ucuzlar ne pahalanır, kısanın rejam'i tüm stack'idir. Spotlar açıcı-vs-arka içindir; BvB yansıması: efektif stack kısanınkidir — kısa SB 20bb chart'ıyla, derin BB ona karşı aynı derinlik mantığıyla oynar; derin SB kısa BB'ye küçük open yerine open-jam düşünür.

**Kısa açıcıya karşı derin IP, arkada derin blind'lar → call DARALIR, çoğunlukla küçük commit-3-bet.** Kısa (~10–15bb, kalibre et) açtı, elin orta-iyi. Call'ı iki şey daraltır: kısayı commit eden 3-bet çok ucuz olduğu için flat'i domine eder; derin blind'lar ise non-all-in squeeze ile flat'i ezer ve kısaya karşı equity payını paylaşır. Kısanın aralığı polarizedir (nuts + raise-fold çöpü); onu commit eden küçük 3-bet *(kalibre et)* çöpü katlatır, value'suna karşı suited As/suited broadway'in equity'si yeter. Kısanın cevabı çoğunlukla fold, suited As'la jam, call neredeyse yok. Pozisyonda sınırda eller call kalır *(kalibre et)*. Hipotez: havuz burada çoğunlukla over-call eder *(showdown'la doğrula, kalibre et)* — over-call ediyorsa sapma senin lehine.

**Kısa sensen, masa derin → RFI'ı sınırda GENİŞLET.** ~20bb *(kalibre et)* açıyorsun, arkadakiler derin. Rejam onlara yalnız efektif ~20bb'ye mal olur — ICM yokken derinin rejam'i ne ucuzlar ne pahalanır; iştahı düşüren, derinin pozisyonda call'ı ve postflop'u tercih etmesi + birden çok derin arkadayken rejam'cinin cold-4-bet/call tehdidiyle sıkışmasıdır *(kalibre et)*. Call'a kayan masa küçük çift, küçük suited connector, orta suited Kx/Qx'e realize alanı açar → open olarak EV kazanır. Masa derinken (ör. turnuva başı) sık düşer. Efektif ~12bb'ye inince call seçeneği kalkar, derinin efektif-stack fiyatlı reshove'u küçük raise-fold'u yaşatmaz → jam-or-fold (B30.0-EK).

**Derin sensen, arkada kısalar → open daralt, open-JAM ekle.** Küçük open kısanın jam'ine açık → düşük suited Kx, boşluklu suited, zayıf offsuit broadway düşer; orta/küçük çift, suited Ax, suited broadway sınıfı open-jam olur *(sınırlar: kalibre et)* — open-jam kısanın fold-equity'li rejam'ini siler, raise-fold'u ortadan kaldırır; bedeli domine rejam'lerin value'sunu bilerek feda etmektir. O yüzden aralığın tepesi (büyük çift, büyük offsuit As) hâlâ min-raise-call oynar: domine rejam'i (domine offsuit broadway, orta Ax) katlatmak değil, indüklemek ister. Domine olabilen offsuit broadway min-raise'de kalır — kısa jam'lerse fold, call ederse pozisyonda oynanır *(kalibre et)*. Havuz kısa olarak açışa karşı call'ı neredeyse hiç, rejam'i tek hat olarak kullanır *(kalibre et)*.

**Derin blind'lar + kısa açıcı → call rejimi ve küçük 3-bet-fold geri gelir.** BTN/SB/BB birbirine derin (~35–45bb), açıcı kısa (~20bb) *(kalibre et)*. Kısayı commit eden 3-bet artık pahalı (açıcı ~20bb → commit boyu flat'i domine etmez) ve blind'lar BTN'nin call'ı üstüne ucuza jam'leyemez → BTN call aralığı genişler; jam "domine çağrı bulan" ellere (büyük offsuit As, güçlü suited broadway) + ORTA çiftlere iner *(kalibre et)* — küçük çift jam'ini arkadaki her büyük çift öder. Non-all-in 3-bet KÜÇÜK boy ister *(kalibre et)*: büyük boy kısaya bedava 4-bet-jam fiyatı verir. 3-bet-fold = domine olabilen offsuit eller; 3-bet-call = suited As ve equity'si yeten suited broadway *(sınırlar: kalibre et)*. SB kısa açıcıya 20bb chart'ıyla değil, BB'ye karşı 40bb mantığıyla oynar. SB call ettikten sonra BB'nin squeeze boyu kısanın kalan stack'ine göre seçilir: kısayı fiilen commit eden bir boy (yaklaşık BB stack'inin yarısı, *kalibre et*) 4-bet-jam fold-equity'sini kaldırır ve SB'yi tuzağı olmayan call aralığıyla jam-ya-fold'a zorlar. Kısa için call fiilen stack-off'tur: küçük çift fold, orta çift sınırda; stack-off eşiği büyük çift + AK, güçlü suited broadway sınırda *(eşikler: kalibre et)*.

### 33.6-EK Çapraz harita: kelle katmanı B28'de, balina-limp düğümü 23.1-EK'te
33.6'nın "kelle yoktur, B28 cover mantığı buraya taşınmaz" kuralı gövdede durur; eksik olan adres tablosudur. Aynı koltuklar kelle girince yön değiştirir — chipEV'de "efektif stack kısanınki" olan mekanizma PKO'da "kim kimi kapsıyor + kelle kimde" olur:

- **Kapsanan SB** (cover eden agresif BB'ye karşı): B33.2/33.3 katmanları kayar — cover eden BB raise'e jam'lemez, flat'ler ve iso eder; suited güçlü RAISE, offsuit güçlü As + çift LİMP-JAM (yarı-value), tepe büyük raise (28.26); tepenin limp-reraise'i tuzak değil pompa (28.25).
- **Cover eden SB, sığ HU-BvB (12–20bb):** ICM'in limp-ağırlıklı dokusu tersine döner — kelle equity açığını kapatır, tuzak gereksizleşir → limp çöker, aralık sıkı ama JAM-ağırlıklı (28.3-EK).
- **Cover eden SB, derin OOP:** VPIP değil agresyon genişler — fringe flat kesilir, lineer 3-bet açılır (28.1-EK).
- **Balina limp'i, karışık stack (kellesiz):** 33.6'nın "kısa açıcıya derin IP" mantığının limp düğümü 23.1-EK'te — stack'im jam'e sığıyor mu, arkada jam'leyen kaç kişi, arkadakilerle derin miyim.

Kural: BvB'de önce "kelle var mı?" — yoksa 33.6, varsa yukarıdaki adresler; kelle teşviki yalnız cover EDENDE, kapsananın kesilen şeyi blöftür.

### 33.7 Kalibrasyon

Stratejiyi SEGMENT'lerde tut: derin / orta / sığ blok. Blok içinde her bb değişimine tepki verme; katman geçişini efektif bb/SPR tetiklesin (raise-fold/limp-fold'un stack'e maliyeti rakibin daha önce jam'lemiş olmasına bağlı değil), gözlem katman İÇİ eşikleri kaydırsın (limp-jam alt sınırı, jam'e call genişliği, iso boyu) — chart etiketini de gözlemi de bekleme (çoğunlukla). Havuz derinde çok az 3-bet, orta-sığda çok az jam eder *(kalibre et)* — iki katmanı neredeyse aynı oynar. Derin fazda küçük-potlu agresyon ucuzdur → ilk ellerde tester at (raise'e 3-bet geliyor mu, iso'ya hep fold mu), okumayı buradan al, parayı sığ fazın jam kararlarında kullan. Rakip erken fazda agresif/yapışkansa sığ fazda limp-jam ve jam-üstü call eşiklerini ona göre kaydır.

| Slot | *(kalibre et)* |
|---|---|
| Katman eşikleri | derin / orta / sığ bb sınırları — kendi solver'ında |
| Limp-reraise ve iso boyu | derinde SPR'yi kaç kat düşürüyor; az-reraise havuza küçük+geniş iso |
| Limp-jam / iso-jam / jam'e call | blocker Ax/Kx alt sınırı, küçük çift eşiği, referans bb + kademe/bb kaydırma |
| Commit-3-bet, kısayı commit eden squeeze boyu (33.6'nın çok-yönlü spotu; saf BvB'de squeeze yok) | kısa açıcının stack'ine oran |

### 33.7-EK HU-BTN için katman geçişi: default'u bb seçer, exploit'i rakibin ilk jam'i/iso'su

33.7'nin "katman geçişini efektif bb tetiklesin, gözlemi bekleme" kuralı BvB default'u içindir ve HU'da da default'u seçer. HU-BTN'de üstüne bir exploit katmanı biner; onun tetiği bb değil rakibin cevabıdır: 40→30bb'ye indin, chart limp'e geçmeni söylüyor, ama rakip raise'ine hâlâ jam'lemiyor ve limp'ine saldırmıyorsa raise stratejisini koru — "kırılmadıysa tamir etme". Asıl kırılma noktası rakibin cevabının değiştiği yerdir: raise'e ilk jam gelince limp payını chart seviyesine çek; limp'e ilk iso-jam gelince limp-fold payını kırp ve limp-call aralığını chart seviyesine — çoğunlukla daha geniş olana — çek (31.12), çünkü genişleyen jam aralığı daha çok elle call'ı fiyatlar. 31.6'nın tek-data-point kuralı burada geçerli: bir jam yeter, ikincisini bekleme. Sınır: exploit katmanı default'un altına inemez — rakip pasif diye 20bb'de raise-only oynamak, jam gelmeye başladığında raise-fold'u pahalı bırakır (33.1'in sığ motoru). Okuma yoksa (yeni rakip, ilk birkaç el) default katman; okuma gelince exploit; okuma bozulunca (rakip limp'lemeye/jam'lemeye başladı) tekrar default. B33.7 BvB için, bu satır HU-BTN için.

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
