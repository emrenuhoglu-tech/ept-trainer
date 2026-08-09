# POKER CEP KİTABI v3

**EPT Barcelona Edition**
16–29 Ağustos 2026

Emre Nuhoğlu
*Temmuz 2026 — birleştirilmiş sürüm*

## v3'te ne değişti

- **YENİ Bölüm 4:** Pozisyona göre 3-bet ve call aralıkları (canlı düzeltmesi, boyut tablosu, 5 pozisyon eşleşmesi, coldcall'un üç şartı, 3-bet'e karşı cevaplar, squeeze)
- **Bölüm 0 genişletildi:** 7 cümle → 10 cümle
- **Bölüm 6'ya Vaka 3** (AA river jam) tam otopsi olarak yerleştirildi
- **Soru bankası** 10 → 18 soru

---

## İçindekiler

- Bölüm 0 — Masaya götürülecek 10 cümle
- Bölüm 1 — Blöf seçimi: hangi ellerle, kime, hangi hamleyle
- Bölüm 2 — Aldatıcı orta eller (JTs, KQ, KJ, 97s)
- Bölüm 3 — Stack modları ve açılış aralıkları (+ ICM katmanı)
- Bölüm 4 — Pozisyona göre 3-bet ve call aralıkları **YENİ ★**
- Bölüm 5 — Turn'de draw ile: bet mi, bedava river mı
- Bölüm 6 — Vaka otopsileri: A4s, KTo, AA river jam
- Bölüm 7 — PLO temelleri
- Bölüm 8 — Antrenman protokolü ("beni hazırla")
- Bölüm 9 — Soru bankası (18 soru)
- Hızlı Referans — molada telefondan bakılacak sayfa

---

## Bölüm 0 — Masaya Götürülecek 10 Cümle

*Bunları ezberle. Masada düşünecek vakit olmadığında karar bu on cümleden çıkar.*

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

---

## Bölüm 5 — Turn'de Draw: Bet mi, Bedava River mı

*Pokerin en sık yaşanan turn sorusu. Karar üç faktöre bağlı.*

### 5.1 Fold equity var mı

- Station tipine semi-bluff = para yakma. Fold etmez, çıplak equity'nle kalırsın → check, bedava kart al.
- Reg'e karşı ve board senin aralığına uygunsa → bet. İki kazanma yolun olur: fold ettirmek VEYA tamamlamak.

### 5.2 Draw'ın kalitesi — tamamlanınca ödenir mi

| Draw | Karar | Gerekçe |
|---|---|---|
| **Nut flush draw** | Bet ağırlıklı | Tamamlanınca action alırsın, blokerlerin güçlü |
| **Düşük flush draw (97s)** | Check ağırlıklı | Tamamlansa bile üstün flush'a ödeme riski |
| **Açık kent (OESD), düz board** | İkisi de meşru | Gizli güç — tamamlanınca çok ödenir. Rakibe göre seç |
| **Gutshot** | Check | Neredeyse hiç semi-bluff yakıtı değil |

### 5.3 IP / OOP ayrımı

- **IP:** check etmek gerçekten bedava kart demektir — rakip de check ederse river'ı ücretsiz gördün.
- **OOP:** check bedava kart garantisi vermez. Rakip bet atarsa 'bedava' plan çöker. OOP'ta draw'ı ya bet'le ya da call planıyla check et — 'bedava görürüm' diye check etme.

---

## Bölüm 6 — Vaka Otopsileri

> **Üç vakanın kök hatası aynı:**
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

---

## Bölüm 7 — PLO Temelleri

### 7.1 Zihniyet farkları

- **Equity'ler yakın koşar.** PLO'da %60/%40 iyi bir favoriliktir; NLH'deki %80 rahatlığı yok.
- **Nut hakimiyeti her şeydir.** İkinci en iyi el PLO'da pahalı bir eldir.
- **İki pot bet = stack ortada.** Pot büyümesi NLH'den çok hızlıdır; üçüncü sokağa geldiğinde geri dönüş yok.

### 7.2 El seçimi

| Kavram | Kural |
|---|---|
| **Dangler** | Dördüncü kartı bağlantısız el (AA72) — fold. Pratikte üç kartlı el oynuyorsun |
| **Rundown** | JT98, KQJT gibi bağlı eller — özellikle çift suited olduğunda güçlü |
| **Çıplak AA** | Tek per muamelesi. Nut potansiyeli yoksa büyük pot oynamaz |
| **Wrap + FD** | Gerçek silah. 13+ out artı flush draw — agresif oynanır |

### 7.3 NLH oyuncusunun tuzakları

- **AA'yı NLH gözüyle görmek:** PLO'da AA çift suited değilse ve board'a bağlanmıyorsa sadece bir çifttir.
- **Top pair / top two ile stack-off:** PLO'da iki per neredeyse hiç nut değildir.
- **Blöf frekansını NLH'den taşımak:** PLO'da aralıklar daha bağlı, blöf daha az geçer.
- **OOP 3-bet potu oynamak:** PLO'da en zor spot. Şüphe hâlinde flat et.

---

## Bölüm 8 — Antrenman Protokolü

> **Komut: "beni hazırla" / "drill" / "soru sor"**
> Sokratik Q&A başlar: 5–8 karar sorusu, tek tek, cevabın gelmeden sonraki soru sorulmaz.

### 8.1 Soru karışımı

| Ağırlık | Konu |
|---|---|
| **%40** | Kök hata — tek per / şişmiş pot sınıflandırması |
| **%30** | Stack modu ve aralık seçimi (Bölüm 3 + Bölüm 4) |
| **%20** | PLO |
| **%10** | Blöf seçimi ve draw kararları |

### 8.2 Kurallar

- Yanlış cevaplanan sorular 1–2 gün sonra farklı kılıkta tekrar sorulur.
- Masadan getirdiğin eller vaka olarak işlenir ve Bölüm 6'ya eklenir.
- Cevap doğruysa gerekçe de sorulur — doğru karar yanlış gerekçeyle yarım puandır.
- Kamp Ağustos başında açılır; EPT 16 Ağustos'ta başlıyor.

---

## Bölüm 9 — Soru Bankası

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

---

## Hızlı Referans

*Molada telefondan bakılacak sayfa.*

### Karar sırası

1. Stack modum ne? (Bölüm 3)
2. Pozisyonum ve rakibin pozisyonu ne? (Bölüm 4)
3. Bu el 3-bet mi, flat mi, fold mu?
4. Flop görürsem tek per yaparsam rahat mıyım?
5. OOP mu kalıyorum?

### Boyutlar

| Hamle | Boyut |
|---|---|
| **IP 3-bet** | 3–3.5× |
| **OOP 3-bet** | 4× |
| **Coldcaller başına** | +1× |
| **Squeeze** | 4.5–5× |
| **4-bet IP / OOP** | 2.2× / 2.5× |

### Kırmızı bayraklar — dur ve düşün

- Şişmiş potta tek per ile büyük karar veriyorum → bluff-catcher olarak sınıflandır.
- River'da jam düşünüyorum → benden zayıf hangi el ödüyor? Cevap yoksa jam yok.
- Rakip all-in geldi ve ben chop hesaplıyorum → chop'lar jam atmaz.
- 45bb'deyim ama küçük çiftle flat ediyorum → mod hatası.
- OOP'tan blöf 3-bet yapıyorum → çoğu zaman hata.
- PLO'da çıplak AA ile pot şişiriyorum → tek per muamelesi.

---

*Poker Cep Kitabı v3 — EPT Barcelona Edition · Temmuz 2026*
