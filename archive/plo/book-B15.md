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

### 15.2-EK Value planı river'dan geriye kurulur — sokak çarpımı
Rakip her pot-boy bet'e kabaca yarı aralığıyla devam eder; yani turn'de bet ettiğin el river'a rakibin en güçlü yarısına karşı gider. Bunun çarpımı acımasızdır: iki sokak pot atacaksan turn'deki yenilme payın, river eşiğinin kabaca yarısı kadar olmalı — turn'de "iyi görünen" el, çarpım sonrası river'da sınırın altına düşebilir. PLO'da çoğunlukla iki sokak value edebilen el turn'de bet eder; edemeyen check edip değerini river'da alır — NLH'deki ince turn bet alışkanlığını taşıma. Commit kararı gibi value planı da pot şişmeden önce, geriye doğru kurulur.

**Kural:** Turn bet'inden önce çarpımı yap: "rakip yarısını atınca river'da hâlâ net önde miyim?" — hayırsa turn'de check.

### 15.2-EK-2 Equity sıklığı, polarite boyu, pozisyon şekli seçer
Postflop agresyonun üç ayrı kaynağı vardır ve her biri farklı bir kararı yönetir: equity avantajı (aralığının rakibinkinden güçlü olması) bet SIKLIĞINI artırır — küçük boy, geniş aralık; polarite avantajı (nut yoğunluğunun rakibinkinden fazla olması) BOYU büyütür — az frekans, büyük boy. Equity düşük SPR'de (sokak azaldıkça rakibin toparlanma şansı kalmaz) baskındır, polarite ise SPR yükseldikçe (birden çok sokakta baskı kurma fırsatı arttıkça) baskın hâle gelir. Pozisyon avantajı ise sıklığı ya da boyu değil ARALIK ŞEKLİNİ polarize eder — özellikle river'da IP oyuncusu ya değer ya blöf atar, orta gücü genelde showdown'a taşır.

**Kural:** Düşük SPR'de equity'ye güven (sık ve küçük), yüksek SPR'de polariteye güven (nadir ve büyük).

### 15.3 Out sayımı — ham vs nut

PLO'da ham out yanıltır; stack-off eşiği NUT out'la ölçülür. "Wrap + FD: 13+ out" iskonto edilmeden tehlikeli — 13 out'un yarısı non-nut ise gerçek silah değil, tuzaktır. B8'in "gerçek silah" etiketi NUT-FD'li wrap için geçerli KALIR — buradaki kural yalnız stack-off eşiğini nut-out sayımına bağlar.

**Kural:** Stack-off için ham out değil, NUT out say. *(Örnek eller artık var — 15.4-15.6 PLO-6 cash katmanı, Emre'nin 2.100 el verisinden; uydurma yok.)*

*NOT: Tam frekans-bazlı PLO açılış chartı hâlâ yazılmadı, ama icra verisi GELDİ (2.100 el) — sınıf-bazlı açılış disiplini artık var (15.6: CO = UTG + %10, dangler'lı el UTG/CO'dan açılmaz). Kalan çizelge drill'de kalibre edilir.*

### 15.3-EK Pot odds yeterli görünse de equity'yi gerçekten kullanabilecek misin diye sor
15.3 ham-vs-nut out ayrımını yapar; buna ek bir eksen var: elinin equity'si pot odds'u karşılıyor gibi görünse bile, sonraki sokaklarda o equity'yi gerçekten kullanabilecek misin sorusu ayrı bir kontroldür. Rakibin flop'ta büyük boy attığı ve sonraki sokakların çoğunda seni jam ile equity'nden koparabildiği durumlarda (özellikle derin/yüksek SPR'li tek-raise potlarında; 3-bet potunda SPR≤1 olduğu için flop call'ı zaten commit'tir — 15.2 İstisna — ve orada soru gerçekleşme değil, 15.3'ün nut-out eşiğini geçip geçmediğindir), ham equity yüzdesi anlamını yitirir — çünkü river'ı görme olasılığın matematiksel equity'nden bağımsız biçimde düşüktür.

**Kural:** Pot odds yeterli görünse de derin/yüksek SPR'li potta, "bu equity'yi kaç sokak sonra gerçekten kullanabileceğim" sorusunu sormadan call verme; SPR≤1'de (3-bet potu) bu soru düşer — orada flop call'ı zaten tüm sokakları satın alır, ama eşik yine 15.3'ün nut-out sayımıdır.

### 15.3-EK-2 İki-per değeri board'daki canlı kent sayısına göre ölçeklenir
Aynı iki-per elinin value-bet kalitesi, board'da kaç farklı kent kombinasyonunun zaten mümkün olduğuna göre büyük fark yaratır. Tek bir kent hattı açık olan board'da rakip nadiren iki-per'e sahip olur, o yüzden iki-per geniş biçimde bahis alır. Birden çok kent hattı açık (çok bağlantılı) board'da rakibin iki-per ve kent kombinasyon sayısı patlar; aynı iki-per artık yalnızca en güçlü redraw'lı kombolarla bahis atar, zayıfı çeker.

**Kural:** İki-per'i her board'da aynı kalitede sayma — board'da kaç kent hattının açık olduğunu say, sayı arttıkça value eşiğini yükselt.

### 15.4 Kök hatanın PLO-6 versiyonu

*(Kaynak: Emre'nin $10/$20 6-kart 5-max cash verisi, 2.100 el — 15.3'ün beklediği icra verisi.)*

NLH kök hatası: bloated potta tek pair'i (AA dahil) yanlış sınıflandırma. PLO-6'da aynı hata üç biçimde çıkar: (1) **turn fold** — flopta pair/zayıf draw ile call, turn pot bet'e fold; (2) **river non-nut call** — non-nut straight / alt flush / bottom straight ile ödeme; (3) **naked AA / top-two stack-off** — derin stack'te AA 4-bet + pot c-bet, ya da 3-way check-raise'e top-two ile jam. Üçünün ortak noktası: el gücü flopta okunur, turn/river'da güncellenmez. Altı kartlı oyunda her villain'in elinde ortalama on beş iki-kart kombinasyonu var; flopta "iyi" olan el turn'de nadiren hâlâ iyidir.

**Kural:** PLO-6'da orta el yoktur. Bir el ya nut'tur (veya nut redraw'ı vardır) ya da bloated potta chip koymaz. Turn'de fold etmek ile river'da non-nut ile call etmek aynı hatanın iki yüzüdür.

### 15.4-EK Value tabanını gerçekte ulaşılabilen elden kur
Check-raise ya da blöf için "ideal" el şablonunu (nut+redraw) kör kör uygulama — önce preflop aralığının bu noktaya gerçekten hangi el sınıflarını taşıyabildiğini kontrol et. Bazı board'larda "ideal" şablon aralığında yapısal olarak yoktur: premium kombinasyonların tamamı zaten preflop 3-bet/4-bet'e gittiyse, postflop check-raise value tabanı bir kademe iner — ama yalnız nut sınıfları İÇİNDE: nut+redraw yerine aralığının o board'da gerçekten kurabildiği en iyi nut sınıfı (set, nut FD'li iki çift, nut redraw taşıyan kombinasyon) value tabanı olur; blöf tabanı da buna göre genişler. Taban nut sınıfının altına — üst çift/overpair'e — İNMEZ: 15.4'e göre PLO-6'da orta el yoktur, check-raise ise tam da bloated pot üreten aksiyondur. Aralığın o board'da hiçbir nut sınıfı taşımıyorsa value check-raise'i kurmaya çalışma, hattı bırak. Bu, kök hatanın (el gücünü sokak sokak güncellememe) bir üst katmanıdır: el gücünü yalnız board'a değil, kendi aralığının o board'a ne taşıyabildiğine göre oku.

**Kural:** "İdeal" değer elini değil, aralığının o noktaya gerçekten taşıdığı en iyi NUT sınıfını value tabanı yap; taban nut'un altına inecekse value check-raise yoktur.

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

### 15.5-EK "Teoride asla fold değil" bir garanti değildir — blocker-ağırlıklı river'larda özellikle
15.5 L6 river'da non-nut call için rakibin somut bir blöf aralığı olması gerektiğini söylüyor; bunun bir adım gerisi var. Bir elin solver'a göre "asla fold değil" olması, rakibin GTO frekansında blöf yaptığı varsayımına dayanır. Gerçek rakipler, özellikle kendi blocker'larına bağımlı river'larda (yalnız kendi elinde "temiz" bir kart varken blöf yapma eğilimi), sistematik olarak az blöfler — yani tam da "hiç fold edilmez" denen, en çok blocker'a dayalı spotlar, pratikte en çok altından oyulan (rakip yeterince az blöflediği için call'un para kaybettirdiği) spotlardır.

**Kural:** "Teoride asla fold değil" ifadesini garanti sanma — blocker-ağırlıklı river spotlarında gerçek rakibin blöf sıklığını ayrıca sorgula.

### 15.5-EK-2 OOP'ta top pair/overpair'de check-call fazlalığı
OOP oyuncu, üstüne bet gelen bir board'da yalnızca top pair ya da overpair taşıyan (ikinci boyutu — nut redraw, iki-çift/set potansiyeli — olmayan) elini refleksle check-call ile devam ettirir; check-call bu sınıfta fazla kullanılan, EV kaybettiren orta yoldur. PLO-6'da doğru cevap fold'dur: 15.4'e göre nut olmayan ve nut redraw taşımayan el bloated potta chip koymaz, check-raise ise tam da bloated pot üreten aksiyondur — tek boyutlu bir üst çift ne value check-raise tabanı olabilir (bkz. 15.4-EK) ne de iyi bir blöftür (kendi showdown değerini yakar, yalnız daha kötüsünü fold ettirir). Check-raise ancak el ikinci bir boyut kazandığında — nut redraw taşıdığında, yani artık "tek boyutlu top pair" olmaktan çıktığında — masaya gelir. Bu ayrım dört kartlı PLO'da da geçerlidir ama altı kartta daha keskindir: PLO-6'da iki-çift/set yoğunluğu çok daha yüksek olduğu için "top pair/overpair" dört-kart sezgisinin sandığından daha aşağı bir sınıfa düşer — check-call eşiğini buna göre daha sıkı tut.

**Kural:** Tek boyutlu top pair/overpair'de refleks check-call yok — PLO-6'da varsayılan fold'dur; check-raise ancak el nut redraw taşıyorsa vardır.

### 15.6 PLO-6 masa-öncesi kontrol listesi

Oturmadan önce dokuz satır: (1) açılış — UTG dar, CO = UTG + %10, BTN geniş, dangler'lı el UTG/CO'dan açılmaz; (2) 3-bet'e call yalnız AAxx / KK ds / bağlı rundown; (3) 4-bet'e 5-bet yalnız AAxx; (4) BB: call yok, 3-bet veya fold; (5) flop call'dan önce turn planı — "hangi kartta devam?" cevabı yoksa fold; (6) turn'de redraw'suz nut = call, raise için redraw şart; (7) river'da pot bet'e non-nut = fold; (8) elde üçlü kart = bir kademe aşağı; (9) stack > 300bb: AA call'a düşer, c-bet yok, tercihen masa değiştir. Seans kuralı: gece geç saat kapanışı sabit tut, iki büyük kayıp üst üste = on beş dakika ara (bkz. B16.5).

### 15.6-EK Rakip sızıntısını iki eksende oku, aralığını o eksende kaydır
Masaya oturunca izlenecek şey rakibin hangi YÖNE saptığıdır; kapalı bir profil listesi değil, iki bağımsız eksen. Birincisi rakibin bet aralığı: belirli el kategorilerini sırf oynaması kolay diye otomatik ince value bet eden oyuncunun bet aralığı zayıftır, dolayısıyla senin marjinal ellerinin call değeri ARTAR — call eşiğini indir. Bu gevşetme tabanın üstünde çalışır, tabanı delmez: L6 / 15.6-(7) gereği river'da pot bet'e non-nut call için rakibin somut blöf aralığı şartı kalkmaz. İkincisi rakibin check-raise'e tepkisi: check-raise'e inanmayan/aşırı call edene karşı kendi check-raise'ini value ağırlıklı tut ve blöf oranını düşür; check-raise'e aşırı fold edene karşı blöf check-raise frekansını artır. İki ekseni karıştırma — call eşiğin rakibin BET aralığına, check-raise blöf frekansın rakibin RAISE'e fold oranına bakar; birinden diğerine gerekçe taşıma.

**Kural:** Rakibi hazır bir profil listesine oturtma; bet aralığı zayıfladıkça call eşiğini indir (river non-nut tabanı saklı), raise'e fold oranı arttıkça blöf check-raise'ini artır.

### 15.6-EK-2 Sınırdaki elde hızlı olmak doğru olmaktan iyidir
Bet mi check mi diye uzun süre kararsız kaldığın el, tanımı gereği iki hatta da benzer EV taşır — üzerinde dakika yakmak kazandırmaz, bandwidth tüketir. Standart açılış boyları, c-bet boyları ve rutin sınıf kararları masaya oturmadan otomatik olmalı; zihnin masada rakip okumaya ve frekans saymaya kalsın. Otomatikleşmiş rutinin bir yan faydası daha var: yorgunken ve tilt'teyken bozulmayan tek şey odur.

**Kural:** Sınırdaki elde hızlı seç ve geç; düşünme bütçeni EV'si gerçekten ayrışan kararlara sakla.

### 15.7 Flop c-bet: değer, doku ve basitleştirme

Board dokusu ve el sınıfı flop c-bet kararının iki ana ekseni; aşağıdaki dokuz ilke boy seçimini,
değer/blöf dengesini ve pratik basitleştirmeyi kapsar.

- **Boy value'dan çıkar.** Flop c-bet planına blöften değil değerden başla: bu board'da hangi eller
  kaç sokak para koymak istiyor, boyu onların isteği belirler; blöfler seçilen boya uyum sağlar.
  "Küçük bet blöflerime ucuz" diye boy seçme — o boyda value bet edecek elin yoksa o boyda aralığın
  da yoktur. Solver bir spotta betle check'i tek tarafa yoğun yığıyorsa (~%80-90, *kalibre et*) tam
  aralığa yuvarla (gerekirse boyu bir kademe küçülterek); iki boyu benzer frekansla karıştırıyorsa
  çoğunlukla tek ve büyük boya sadeleş. **Kural:** Önce value aralığını kur; boyu value ellerin
  seçer, kararsızlıkta tek ve büyük boya sadeleş.

- **Board dokusu ana eksen.** Flop c-bet kararı önce elin gücünden değil, board'un statik mi dinamik
  mi olduğundan başlar. Kuru, az bağlantılı board'larda aralığının neredeyse tamamını tek boyla
  basabilirsin — rakip aralığı da zayıf olduğu için değer eşiğin düşer. Board ıslaklaştıkça hem
  değer basma eşiğin hem blöf basma eşiğin birlikte yükselir: "iyi ama nut olmayan" el de, zayıf
  draw da checke düşer. **Kural:** Board ıslaklaştıkça değer VE blöf eşiğin birlikte yükselir —
  sadece değer eşiğini değil.

- **Üç sokak testi.** Flop'ta şu an en iyi el olsan da, turn ve river'da değer basmaya devam edebilme
  olasılığın düşükse (redraw'suz orta-güç bir el) check-back aralığına gider — büyük pot inşa edip
  sonra basamayacağın bir elle kalman, küçük pot içinde aynı equity'yi realize etmekten daha
  kötüdür. Test sorusu: "istediğim kart gelirse, flop'ta bastığım için mutlu mu olurum üzgün mü?"
  Cevap "pek fark etmiyor, zaten basamıyorum" ise el check-back adayıdır. **Kural:** Flop bahsini
  "şu an kazanıyor muyum" değil, "bu el üç sokak boyunca basabilir mi" sorusuyla seç.

- **Nut'u bazen check-back, sonra temsil et.** Board'un nut'unun river'a kadar aynı kalma ihtimali
  yüksekse (paired, monoton, kuru ace-high) aralığının bir kısmı olarak flop'ta gerçek nut'u da
  check-back yapman gerekir — yoksa aralığın şeffaflaşır ve rakip seni okuyup ekstra agresif
  oynar. Bedeli var: o check-back'lediğin nut'u zaman zaman gerçekten river'da raise ederek temsil
  etmen lazım, yoksa "check-back sonrası hiç saldırmayan" bir kalıba düşer, okunursun. **Kural:**
  Nut'u check-back yapmanın bedeli, onu bazen sonradan gerçekten agresif temsil etmektir — yoksa
  denge sahte kalır.

- **Statik board'da kutuplaş.** Bu madde, yukarıdaki "Board dokusu ana eksen" maddesinin paired/
  monoton istisnasıdır — o madde bağlantısız-rainbow kuru board'u (K-8-3r gibi) hedefler, bu madde
  farklı bir statiklik türünü. Board ne kadar statikse (paired, monoton, flush/straight imkansız),
  üst tabakan alt tabakalarına göre daha az rakip tarafından yakalanır — alt tabakan pot inşa etmeye
  daha az istekli olmalı, üst tabakan çekinmeden büyük basmalı. Pratik sonucu: statik (paired/
  monoton) board'da aralığını "hemen hemen herkes küçük bas" yerine "çoğu check, en tepe büyük bas"
  şeklinde kutuplaştırmak daha yüksek getiri verir. **Kural:** Board statikleştikçe aralığını ortadan ikiye
  ayır — çoğu check, en güçlüsü büyük bas; ortada gezinme.

- **Hangi bloker, "var mı" değil.** C-bet blöfü için el seçerken tek soru "bir blokerim var mı"
  değil, "hangi bloker." Rakibin devam aralığının tepesini (nut draw, nut yapılmış el) bloke eden
  bir kart, sadece hacim bloke eden düşük bir karttan çok daha değerlidir — tepe blokajı hem
  rakibin en sık çağıracağı/raise edeceği elleri azaltır hem senin elinin equity'sini daha az
  yer. **Kural:** Blöf seçerken "bloker var mı" değil "hangi kategori aralığının tepesini bloke
  ediyor" diye sor.

- **Uç frekansta saf strateji.** Bir board'da bir el sınıfının bahis sıklığı çok yüksek veya çok
  düşükse (örnek eşik ~%70/30, *kalibre et*), pratikte o board'da aralığını tamamen bas ya da
  tamamen check et — kayıp değer küçüktür ama aralığını yanlış bölme riskini ortadan kaldırırsın.
  Bu basitleştirme özellikle çoklu masa ya da uzun seansta değerlidir; asıl kayıp frekans
  hatasından değil, karışık bir aralığı dengesiz inşa etmekten gelir. **Kural:** Bir board'da bahis
  sıklığı belirgin yüksek ya da belirgin düşükse, o board'da saf bas ya da saf check'e yuvarla —
  ortada gezinme daha çok hata üretir.

- **Dengelenemeyen spotta rakip yüz değerindedir.** Bazı turn/river spotları solver için bile aşırı
  karışık — bu tip spotlarda insan rakipler neredeyse hiçbir zaman gerçekten karışık oynamaz, o
  çizgiyi seçtiren tek bir el kategorisiyle oradadırlar. Kendi stratejini basitleştirirken aynı
  mantığı rakibin okumasında da kullan. **Kural:** Dengelemesi insan için imkansız olan spotlarda
  rakibin bahsi genelde tam temsil ettiği eldir — okumanı ona göre keskinleştir.

- **Basma isteği üstteki tabakaya bağlı.** Bir elin basma isteği yalnız kendi gücüne değil,
  aralığında ONUN ÜSTÜNDE hangi tabakanın olduğuna bağlıdır. Flush'ın mümkün olduğu board'da set ve
  straight'in basma isteği düşer çünkü rakibin fold aralığı zaten flush'a karşı ölü, kalan çağırma
  aralığı flush'a karşı equity kaybettiriyor; flush'ın imkansız olduğu kuru board'da aynı
  set/straight çok daha istekli baser çünkü artık en tepedeki tabaka onlar. **Kural:** Bir elin flop
  basma isteğini kendi gücü değil, aralığında üstünde duran tabaka belirler.

### 15.8 C-bet'e karşı savunma: call, check-raise, float

C-bet'e karşı OOP'nin araç seti — devam eşiği, check-raise genişliği ve float — tek tek elin
gücünden çok board dokusuna ve rakibin devam aralığına göre şekillenir.

- **Savunma eşiği draw yoğunluğuyla kayar.** C-bet'e karşı devam eşiğin elin mutlak gücüne değil, o
  board'da aralığındaki daha iyi devam adaylarının sayısına bağlıdır. Draw-zengin board'da aralığın
  açık uçlu ve kombo draw'la dolu olduğundan pair + gutshot tipi kırıntılar fold olur; draw-fakir
  board'da aynı kategori savunmanın omurgasıdır. Aynı mantık range avantajına da uyar: avantajlı
  taraf aynı kategorileri sınırda daha agresif oynar, dezavantajlı taraf daha erken bırakır.
  **Kural:** "Bu elle call ederim" değil, "bu board'da benden iyi kaç devam adayım var" diye sor;
  eşik dokusuyla birlikte kayar.

- **Check-raise genişliğini board belirler.** Check-raise (OOP) aralığının genişliği senin elden çok
  board'un dokusuna bağlıdır. Monoton ve yüksek-kart paired board'larda (K-K-x, A-A-x gibi) doğru
  check-raise aralığı neredeyse sıfıra iner — nut flop'ta neyse river'da da genelde odur ve IP
  çoğunlukla range/nut avantajına sahiptir. Kuru, tek-yönlü straight board'larda aralık dar kalır:
  hemen hemen sadece nut + birkaç set. Dinamik, çok draw'lu iki-tonlu board'larda ve düşük/orta
  kartlı paired board'larda aralık hem value hem blöf içerecek şekilde meşru biçimde genişler.
  **Kural:** Check-raise aralığı kurma kararını önce board dokusuyla ver — kuru/yüksek-paired/
  monoton → dar ya da sıfır, dinamik/çok-draw'lı → geniş.

- **En sağlam value'yu yavaşlat.** En sağlam, en az yaralanabilir value elini check-raise etmek
  çoğunlukla yanlış yöndür — bu tip eller check-call ile daha çok kazanır, çünkü raise seni
  ödeyecek ikinci-en-iyi elleri masadan atar. Check-raise, asıl korumaya ihtiyacı olan orta-güçlü
  value'dan (ikinci/üçüncü set) gelmelidir — ama koruma ancak redraw nut'a yakınsa
  işler: redraw ne kadar nut'a yakınsa check-raise (yani stack-off) o kadar meşrudur; redraw zayıf
  ya da dominated ise aynı el check-call'a, gerekirse fold'a düşer, çünkü raise seni tam olarak
  aynı eli daha iyi redraw'la tutan rakibe karşı şişmiş pota sokar. **Kural:** En invulnerable
  value elini yavaşlat; check-raise'i korumaya muhtaç ama nut'a yakın redraw'ı olan orta-value'ya
  ayır — dominated redraw'la raise etme, check-call et.

- **Call edemeyeceğin eli raise etme.** *(plo6-uyarlanmış — altı kartta her elin neredeyse her
  zaman bir miktar backup equity taşıması yüzünden gerçek sıfır-equity blöf adayı dört karttakinden
  de nadirdir; kural bu yüzden PLO-6'da daha bağlayıcı hale gelir.)* Blöf check-raise için hangi
  zayıf eli seçeceğine karar verirken önce sor: "Bu eli check-call olarak da oynayabilir miydim?"
  Cevap hayırsa, çoğunlukla raise de değildir — sağlıklı bir raise aralığı neredeyse tamamen call
  aralığıyla aynı havuzdan gelir. Altı kartlı elde
  neredeyse her kombinasyon bir miktar redraw taşıdığından, "call edemeyecek kadar zayıf ama raise
  edilecek kadar iyi" el dört karda olduğundan daha da az bulunur. **Kural:** Call edemeyeceğin bir
  eli blöf-raise etmeden önce iki kez düşün — bu, PLO-6'da dört karda olduğundan daha sıkı bir
  sınırdır.

- **Blocker'ı devam aralığına göre tart.** Check-raise blöfü için hangi zayıf eli seçeceğine karar
  verirken "hangi kart rakibin fold edeceği eli bloklar" değil, "hangi kart rakibin devam edeceği
  (call/raise) elini bloklar" sorusunu sor. Elindeki ekstra bir suit kartı ya da ekstra bir kombo
  genelde ham equity'den çok, rakibin call aralığını daraltması yüzünden değerlidir. **Kural:**
  Blöf seçiminde blocker'ı rakibin fold aralığına göre değil, devam aralığına göre tart.

- **Float fırsatı board dokusuna bağlı.** 3-bet potunda OOP'nin flop'ta çekilme (float fırsatı)
  sıklığı board dokusuna göre keskin değişir ve ekseni tek soru belirler: board OOP'nin (3-bettor)
  range'ine oturuyor mu? Kuru, yüksek-kartlı, statik board'lar 3-bet range'inin merkezidir
  (AAxx/KKxx/broadway ağırlıklı) — OOP orada neredeyse tüm aralığıyla basar ve IP'nin float alanı
  daralır. Bağlantılı, düşük/orta kartlı board'lar caller'ın rundown'larını vurur; OOP orada çok
  daha sık çekilir ve float alanı asıl orada büyür. Flush'ı tamamlayan board da aynı mekanizmanın
  bir örneğidir, istisna değil: OOP orada da sık bet atar, çünkü 3-bettor olarak daha yüksek
  suited-kombo yoğunluğundan gelen bir equity tavanı vardır — board yine OOP'nin range'ine
  oturuyordur, float alanı yine dar kalır. **Kural:** Float alanını board'un OOP'nin 3-bet range'ine
  ne kadar KÖTÜ oturduğuna göre bekle — bağlantılı/düşük-kartlı board'da geniş; kuru-yüksek ve
  flush-tamamlayan board'da dar.

### 15.8-EK Float'ta value/blöf seçimini bloker yapar, ham güç değil

**Value/bluff seçimi önce bloker sorusuyla başlar.** Float bet'inde hangi eli value, hangisini
bluff olarak seçeceğin neredeyse tamamen bloker etrafında döner: aynı ham güçteki iki el arasında
rakibin nut/ikinci-nut kombinasyonunu bloke eden el bahis alır, bloke etmeyen çeker. Bu, güçlü elde
bile geçerlidir (bloke eden top pair bahis, bloke etmeyen top pair çoğunlukla çek) — ham güç tek
başına yeterli filtre değildir. **Kural:** Eşit ham güçte iki elden hangisini float'layacağını
seçerken önce "rakibin devam ettiği kombinasyonu bloke ediyor muyum" sorusunu sor, ham gücü ikinci
sıraya koy.

### 15.8-EK-3 Bet-check-bet hattının kendi blöf bütçesi vardır

**Bet-check-bet hattının kendi blöf bütçesi vardır.** Flop bet, turn çek, sonra tekrar saldırma
(bet-check-bet) hattına koyduğun blöf sayısı doğal olarak azdır, çünkü bu hat dar bir gerçek-el
kümesinden geliyormuş gibi okunur ("flop'ta bastım ama turn'de vazgeçtim"). Bu hatta çok fazla
blöf sokarsan hat inanılırlığını kaybeder ve deneyimli rakip seni sık çağırır ya da raise'ler.
**Kural:** Bet-check-bet hattındaki blöf sayısını, o hattı gerçekten value ile de oynadığın
kombinasyon sayısına göre sınırla — hat kendi bütçesini taşır, genel blöf frekansından ayrı düşün.

### 15.8-EK-4 Zayıf backdoor'u şimdi harca, nut backdoor'u sakla

**Zayıf backdoor'u şimdi harca, nut backdoor'u sakla.** Elinde iki karşılaştırılabilir backdoor
(renk taslağı) varsa — biri nut'a giden, diğeri zayıf — flop'ta zayıf olanı blöf yakıtı olarak
harca, nut'a giden olanı çek. Sebep: renk tamamlanan bir turn/river geldiğinde çek-geri
range'inde gerçek nut kombinasyonların bulunması o range'i inanılır kılar ve rakibin geniş
stack-off yapmasını engeller; zayıf backdoor'u flop'ta harcamak bu korumayı bozmaz, çünkü o kart
tamamlansa bile zaten ikinci sınıf bir el olacaktı. **Kural:** İki backdoor'dan nut'a gideni sakla,
zayıf olanı şimdi yak — ikisini aynı torbaya koyup rastgele seçme.

### 15.8-EK-5 Çiftli board'da trips'te önce unblock, sonra kicker

**Çiftli board'da trips'te önce "unblock", sonra kicker.** *(plo6-uyarlanmış)* Çiftli yüksek
board'da (K-K-x, Q-Q-x) trips'i bahis için seçerken kickerin ham gücünden önce ne bloke ettiğine
bak: value bahsini ödeyecek olan rakibin devam eden overpair'leridir (AA/KK), dolayısıyla o
kartları elinde tutmayan — yani rakibin devam aralığını bloke ETMEYEN — kicker daha iyidir; kicker
onların call'unu elinden alıyorsa bahsin daha az ödeme görür. Bu, 15.8'in blocker kuralının value
tarafıdır: blöfte rakibin devam aralığını bloke etmek istersin, value'da tam tersi. PLO-6'da bu
soruyu sor ama kickeri tamamen yok sayma: altı kartta oyuncu başına düşen kombinasyon sayısı
arttığından rakibin board çiftine eşleşen trips'i dört karttakinden belirgin biçimde sık gelir,
yani kicker savaşı gerçek bir risktir. Bahis için gereken kicker eşiği *(kalibre et)*. **Kural:**
Trips'i bahis için seçerken önce "kickerim rakibin devam eden AA/KK overpair'lerini bloke ediyor
mu" diye sor — bloke etmeyeni seç; PLO-6'da ayrıca kicker-savaşı ihtimalini hesaba kat, kickeri
tamamen yok sayma.

### 15.8-EK-6 Board çiftinin rütbesi agresyonla ters orantılı

**Board çiftinin rütbesi agresyonla ters orantılı.** Çiftli board'larda (6-6-x, Q-Q-x gibi) IP'nin
float agresyonu, board'daki çiftin rütbesiyle ters orantılıdır: çift ne kadar düşükse rakibin o
çiftle eşleşen trips'e sahip olma ihtimali o kadar düşer ve range'i o kadar zayıflar, IP neredeyse
tüm range'iyle agresif olabilir. Çift yükseldikçe rakibin o karta bağlanma ihtimali (özellikle
preflop'ta hep devam eden AA/KK aralığından) artar, IP'nin bahis frekansı düşer ve seçicilik
artar. **Kural:** Board'daki çiftin rütbesi ne kadar düşükse float'ta o kadar geniş ol; rütbe
yükseldikçe daralt.

### 15.8-EK-7 Redraw tehdidi altındaki eli bas, tehdit azsa sakla

**Redraw tehdidi altındaki eli bas, tehdit azsa sakla.** Flush ve straight board'larında set ve
iki-per çoğunlukla bahis alır çünkü turn'de gelen bir kent veya renk taslağına karşı redraw
tehdidi altındadırlar — çekilirse "ikinci sınıf" hâle düşme riskleri yüksektir. Tamamlanmış
flush'lar bu board'larda daha sık çekilir, çünkü nadiren kötüleşirler; gelecekte kötüleşme riski
düşük bir eli hemen basmanın getirisi azdır, o yüzden bazen saklanıp sonraki sokakta
değerlendirilebilir. **Kural:** Gelecekte redraw'a yenilme riski taşıyan eli şimdi bas, riski
düşük eli bazen sakla.

### 15.8-EK-8 Popülasyona sık bas ama ince gitme — ikisi birlikte olmaz

**Popülasyona karşı sık bas ama ince gitme — ikisi birlikte olmaz.** Float spotlarında (özellikle
flush ve düşük straight board'larında) teori çok ince value bet önerir, ama gerçek rakipler
flop'ta çektikten sonra genelde daha kalın ve daha az dengeli bir aralıkla check-call yapar. Bu,
river'da teorinin önerdiği kadar ince gidemeyeceğin, ama flop/turn'de teoriden daha sık bahis
atabileceğin anlamına gelir, çünkü çoğu rakip bu spotlarda yeterince savunmuyor. **Kural:** Bu
spotlarda teoriden sık bas ama river'da teorinin ima ettiği kadar ince gitme — ikisini aynı anda
uygulama.

### 15.8-EK-9 Tek zayıf bloker varsa blöfü sonraki sokağa ertele

**Tek zayıf bloker varsa blöfü sonraki sokağa ertele.** Sadece zayıf tek bir bloker (düşük renk
kartı gibi) taşıyan ve başka hiçbir eşitliği olmayan eller için flop'ta hemen bahis atmak yerine
çekip ilk blöfü turn ya da river'a ertelemek genelde daha ucuzdur: flop'ta iki sokak taşıyacak
gücün yoksa, tek sokakta blöf atıp fold yemek yerine rakibin range'i daha da daraldığı sonraki
sokakta tek atışlık blöfe girmek daha güvenilir. **Kural:** Tek zayıf bloker + ekstra eşitlik
yoksa, blöfü flop'ta değil sonraki sokakta yap.

### 15.9 Probe fırsatı — rakip flop'u check'lediğinde pot senin
Rakip pozisyonda flop'ta c-bet atmayıp check'lediğinde range'ini kısmen cap'lemiştir; turn'de OOP'nin bet atma hakkı ("probe") doğar. Dinamik board'da (straight yok, flush yok, per yok — top set nut) probe'u tek büyük boyutla (pot civarı) oyna: bu board'larda kovalanacak çok draw vardır, hem değer hem semi-blöf pahalı devam ettirmek ister; küçük boyut eklemek EV'ye kayda değer bir şey katmaz ama icrayı zorlaştırır. Board'ın nut yapısı kilitlendikçe (straight/flush/per geldikçe) frekans ve boyut değişir — önce board sınıfını, sonra eli seç.

**Kural:** Probe stratejisini elden değil board sınıfından başlat: dinamik board = tek büyük boyut; kilitli board = ayrı plan.

### 15.9-EK Sizing şeması değil, o şemaya konan eller
Aynı değer-blöf aralığını pot yerine üçte-bir potla bet'lersen matematik çöker: küçük bet rakibe muazzam pot odds verir, aynı blöf sayısı artık devasa overbluff'tur ve rakip her şeyle call ederek seni cezalandırır. Farklı sizing şemaları birbirine yakın EV üretir; asıl fark her boyuta o boyutun kaldırabileceği eli koymakta. Küçük boyut, rakibin fold'larını domine eden "combo" ellere; büyük boyut, polar değer + blöfe aittir.

**Kural:** Hangi sizing şemasını seçtiğin ikincil — her boyutun değer eşiğini ve blöf oranını o boyuta göre yeniden kurman şart.

### 15.9-EK-2 Probe eşiği turn kartıyla oynar
Aynı el farklı turn kartında farklı aksiyon alır. Turn, flop'u check'leyen rakibin range'ine vuran bir overcard'sa değer eşiğin yükselir: düşük turn'de rahat bet'lediğin two-pair sınıfı, overcard turn'de check-call'a düşer. Turn senin tarafına vuruyorsa (rakibin check-back'ine bağlanmayan düşük kart) eşik düşer, frekans artar. Aynı mantık savunmada da geçerli: overcard turn'lerde rakip daha sık ve genelde küçük boyutla gecikmiş c-bet atar — sen de o kartlarda check'ten sonra mutlak güç eşiğini düşürüp daha zayıf ellerle savunursun. Savunmayı genişleten frekanstır, boyut değil: boyut büyüdükçe savunma yüzdesi daralır.

**Kural:** Probe kararında ilk soru el değil: "bu turn kartı kimin range'ini güçlendirdi?"

### 15.9-EK-3 İki-sokak değer testi — pot-pot matematiği
Bet'ine call eden aralık, bet öncesi aralıktan güçlüdür; iki büyük bet sonrası rakibin devam aralığındaki nut oranı başlangıçtakinin birkaç katıdır. Bu yüzden straight ihtimalli board'da set pot-pot gidemez: turn'ü pot'layıp river'ı da pot'ladığında artık çoğunlukla straight'e ödeme yapıyorsundur. Böyle eller ya küçük boyutla iki sokak alır ya büyük boyutla tek sokak durur. Bet'e basmadan önce eli sokakla sınıfla: "bu el hangi boyutla kaç sokak değer alabilir?" Eşiklerin tam yeri formata göre oynar *(kalibre et)*.

**Kural:** Değer eşiğini sokakla tanımla: pot-pot gidemeyen el ya boyut küçültür ya tek sokakta susar.

### 15.9-EK-4 Probe check-raise'i — kuru nut bet, redraw'lı nut check-raise
Probe spotunda güçlü ellerini ikiye böl: ek equity'si olmayan set/two-pair çoğunlukla bet (değerini şimdi al; kötü river'lar eli düşürür), redraw'lı veya kombo-draw'lı set check-raise'e gider. Bunun görünmez faydası range koruması: check-raise aralığında board per'ini yakalayan el yoksa, per river'larında cap'lisindir ve rakip her per kartını pot'layarak seni ezer. Check-raise blöflerini de aynı simetriyle kur: pair+draw ve flush'a dönmeyen yüksek-kart blöfleri ekle ki check-raise sonrası her river'da kapsaman olsun.

**Kural:** Kuru nut bet eder, redraw'lı nut check-raise eder — ve check-raise aralığında per river'larını yakalayan el bulundur.

### 15.9-EK-5 Out'un değeri, geldiğinde bet'lenebilir olması
Zayıf two-pair'le probe kararında ham out sayısı yanıltır: "iyileşme" out'larının çoğu geldiğinde bile bet edemeyeceğin kartlardır — board'u kilitler ya da rakibin range'ine daha iyi vurur. Bet etmeden önce somut soru: "hangi river kartlarında ikinci bet'i basabiliyorum?" Cevap kabaca birkaç karttan azsa el bet değil check-call'dur. 15.5 L1'in aynadaki hali: orada call için turn planı isteniyordu, burada bet için river planı.

**Kural:** Probe value bet'ini bet'lenebilir river sayısıyla gerekçelendir — out geldiğinde susacaksan şimdi de sus.

### 15.9-EK-6 Flush + straight aynı board'da — polar oyna, straight bet etmez
Board'da hem flush hem birden fazla straight varsa probe polar'laşır: değer aralığı esasen flush'lardır, blöfler onun etrafına dizilir, tek büyük boyut yeter. Straight'in bet etme sebebi yoktur — flush'a karşı ölü çeker, flush ve daha yüksek straight dışındaki her şeyi zaten ezer; yani ödeme yapan neredeyse yalnız kendisini yenen ellerdir. Two-pair'in de yoktur. Frekansın düşer ve pasifleşirsin; bu zayıflık değil board'un dayattığı geometri. Küçük boyut ancak flush turn'de yeni geldiyse VE set/two-pair avantajı sendeyse geri gelir — bu, range avantajı ile nut avantajının aynı şey olmadığının sahadaki hali.

**Kural:** Flush + çoklu straight board'da probe = flush'lar + blöf, tek büyük boyut; straight ve two-pair check'e oturur.

### 15.9-EK-7 Blöfü gelen straight sayısı seçer
Turn'de tek straight geldiyse board hâlâ dinamik gibi oynar: blöfü equity'yle seç (draw'lar), blocker ikincil — rakip nadiren o straight'i tutar. Üç straight geldiyse denklem tersine döner: değer aralığın straight'lerdir, blöfün de straight blocker'ı taşımalıdır. Rainbow ve kuru board'larda blöfü kazıyarak bulursun — gut shot + gelecekteki river blocker'ları yeterli malzemedir; bu board'larda blöf bulamamak aralığını value-heavy yapıp rakibe bedava fold verir. Tek sokaklık blöfü de unutma: turn'de bet'leyip blocker'ların kötüleştiği river'da vazgeçmek meşru bir hattır.

**Kural:** Bir straight = equity blöfü, üç straight = blocker blöfü; kuru board'da blöfü kaz — bulamıyorsan value-heavy'sindir.

### 15.9-EK-8 Probe aralığın, check aralığının aynasıdır
Her orta-kuvvet eli probe'a taşırsan check aralığın çöp + tuzaksız kalır; rakip bunu gecikmiş c-bet'le ezer ve sen her check'ten sonra fold'lamak zorunda kalırsın. Probe seçerken iki listeyi aynı anda yaz: bet'e gidenler ve check'te kalıp savunacaklar. Check aralığına bilinçli olarak güçlü el bırak — hem check-call'lık hem check-raise'lik; bunlar olmadan "check = zayıf" diye okunursun.

**Kural:** Probe'u seçerken check'te ne bıraktığına bak: check aralığında savunulabilir el kalmıyorsa fazla probe ediyorsun.

### 15.9-EK-9 Küçük probe'a karşı neredeyse her şeyle devam
Pozisyonda küçük (üçte-bir pot civarı) probe'la karşılaştığında fold eşiğin çok düşüktür: verilen pot odds'ta pair, gut shot, üstü kart — hemen hepsi devam eder; katlanan yalnız en çıplak eller *(kalibre et)*. "Bu kadar geniş call ediyorsam blöfü nasıl cezalandıracağım" diye rahatsız olma: küçük bet zaten blöf değil equity itmesidir, sen de neredeyse tüm equity'nle karşılık verirsin. Büyük probe'a karşı ise OOP'nin polar aralığına ekstra fold etmek normaldir — blocker'ı kötü bluff-catcher'ları bırak.

**Kural:** Probe boyutu küçüldükçe savunma genişler: küçük bet'e karşı fold istisnadır, büyük bet'e karşı disiplindir.

### 15.9-EK-10 Probe'u raise etmek rakibi seni ezen aralığa daraltır
Draw'la probe raise'i cazip görünür — daha iyi draw'ları fold'latırsın — ama madalyonun öbür yüzü: call eden aralık artık seni ezen ellerde yoğunlaşmıştır ve rakibin dominated bloflarını pottan kovmuşsundur. Çoğunlukla düz call üstündür: blöfleri içeride tutar, pozisyonu river'a taşırsın. Raise'i iki sınıfa sakla: (1) değer + güçlü redraw, (2) rakibin değer aralığını vuran kilit blocker'lı semi-blöf. Blocker'sız orta draw'la raise-fold iki hatanın bileşkesidir: fazla ödersin ve en iyi senaryoda bile blöf kovalamışsındır.

**Kural:** Probe'a karşı raise istisna, call kaidedir: raise ya redraw'lı değerle ya kilit blocker'la gelir.

### 15.9-EK-11 Polar bet'e karşı call'u blocker seçer, el gücü değil
Rakibin hattı polar bir aralık anlatıyorsa (probe-pot, pot-pot gibi) elindeki çoğu şey bluff-catcher'dır ve hangisiyle call edeceğini mutlak el gücü değil kart seçimi belirler. İyi call: rakibin değer kombolarını bloklayan, blöf adaylarını bloklamayan el. En kötü call: rakibin bloflarını bloklayan el — "aralığımın tepesindeyim" hissi vermesine rağmen. 15.5 L6'nın iki şartına üçüncü ayar: blöf aralığı var, onu yeniyorsun VE onu bloklamıyorsun.

**Kural:** Bluff-catcher seçerken soru "elim ne kadar güçlü" değil, "hangi kartları tutuyorum".

### 15.9-EK-12 İnce değere giden read, blöfü de genişletir
"Rakipte nut yok, ikinci-üçüncü nut'la raise edebilirim" read'i tek başına yarım karardır: değer aralığını genişletip blöf aralığını sabit bırakırsan hattın value-heavy okunur ve sadece seni yenen eller ödeme yapar. Read simetrik uygulanır — thin value'ya iznin varsa aynı spotta blöf sayını da artır. Tersi de geçerli: tek showdown read'i bozmaz. Rakip en iyi blöf kombosuyla blöf gösterdiyse bu "demek blöf yapıyormuş" değil, "demek doğru kombolarla blöf yapıyor" demektir; underbluff read'in ayakta kalır.

**Kural:** Değer eşiğini düşüren her read blöf sayını artırmalı; tek showdown'la read değiştirme.

### 15.9-EK-13 Aşırı-fold sigortası — yüzde yüz değil, kabaca beşte dört
"Bu spotta rakip blöf bulamaz" diye okuduğunda bile aralığının tamamını fold etme; en iyi blocker'lı üst dilimi call'da tut ve kabaca beşte dört fold'la yetin *(kalibre et)*. İki sebep: read yanlışsa kaybın sınırlı kalır; ve call ettiğin eller showdown göstererek read'ini test eder — hep fold'layan oyuncu yanıldığını asla öğrenemez. Uzun seansta bu bilginin kendisi EV'dir.

**Kural:** Underbluff read'inde bile aralığın en iyi call'larını canlı tut: aşırı-fold'u sınırla, bilgiyi satın al.

### 15.9-EK-14 Sadece check-raise'e yeniliyorsan bet et — ama boyutu düşür
Probe sonrası river'da rakip check ettiğinde iki soru: check-call aralığını yeniyor muyum, sadece check-raise'e mi yeniliyorum? Check-call'ların hepsini yenen el çoğunlukla bet'tir — "raise yerim" korkusuyla check'lemek, ödeyecek ellerden bedava kaçmaktır. İkinci kural bunu dengeler: value bet'lediğin aralık, aynı bet'i call edebilecek aralığından genişse rakibi slow-play ve check-raise'e davet ediyorsun demektir; bu spotlarda boyutu düşür (yarım pot) — ama sebebi caydırma değil maliyet: küçük bet daha SIK check-raise yer (blöf-raise ucuzlar, küçük boy zaten geniş/cap'li aralık ilan eder), buna karşılık raise geldiğinde daha az ödersin ve aralığının daha fazlasıyla devam edebilirsin.

**Kural:** Check-call'ları yeniyorsan bet; ama value aralığın call aralığından genişse küçült — küçük bet daha sık raise yer, ama raise geldiğinde seni daha az cezalandırır.

### 15.10 Mix'i zarla değil kategoriyle çöz
Solver bir el sınıfını turn'de %60 bet / %40 check karıştırıyorsa bunu kombo kombo taklit etmeye çalışma — frekansı tutturamazsın ve masada bandwidth yakarsın. Sınıfı yan-equity'ye göre ikiye böl: nut-redraw'lı versiyonları (nut flush draw, nut açık uçlu) check'e ve check-raise'e ayır, çıplak ya da non-nut-draw'lı versiyonları bet et. Kabaca doğru frekansa kendiliğinden oturursun, her iki hatta da sınıf temsil edilir ve hangi kombonun ne yaptığını masada bir saniyede bilirsin. Aynı kalıp probe, gecikmiş c-bet ve check-raise aralıklarının tümünde çalışır.

**Kural:** Frekans karışımını kategoriye çevir: nut-redraw'lı dilim check(-raise), kalanı bet — zar yok, ezber yok.

### 15.10-EK Tek boyut seç, iki boyutu masada dengede tutmaya çalışma
Bir turn/river spotunda iki farklı bahis boyutu (örn. yarım pot + pot) arasında teorik olarak küçük bir EV farkı olsa da, ikisini aynı anda hangi elin hangi boyuta gideceğini şaşırmadan yürütmek pratikte zordur ve yanlışlıkla elini ifşa etme riski taşır. Tek boyut seçmek küçük bir teorik EV kaybına mal olur ama zihinsel kapasiteni el okumaya ve rakip profiline ayırmanı sağlar. Bir spotta iki boyutun kullanım oranı çok dengesizse (biri diğerinin ufak bir kısmıysa), azınlıktaki boyutu tamamen atıp tek boyuta geçmek makul bir basitleştirmedir.

**Kural:** Karar anında iki boyut arasında gerçek zamanlı denge kurmaya çalışmak yerine, spota önceden tek bir varsayılan boyut ata.

### 15.10-EK-2 Sulu board, korumayı değil eşiği yükseltir
Board draw-heavy oldukça, zayıf iki per ya da orta tek per gibi ellerin bahis için ihtiyaç duyduğu ekstra equity artar — azalmaz. Yaygın refleks "board sulu, elimi korumam lazım, bas" şeklindedir; oysa board sulandıkça rakibin range'i de nut'a ya da güçlü draw'a doğru kutuplaşır ve senin orta-kalite elinin bahis karşısındaki göreli avantajı incelir. Altı kartlı PLO'da bu etki dört kartlıya göre daha belirgindir, çünkü daha fazla kombinasyon nut'a ya da nut-draw'a ulaşır.

**Kural:** Board sulandıkça "orta iyi" elin check aralığı genişler, bahis aralığı daralır — koruma refleksiyle ters yönde hareket ettiğini fark et.

### 15.10-EK-3 Slow-play'in amacı kişisel bluff yakalamak değil, range'i korumaktır
Bir el sınıfının güçlü kombolarından bir kısmını check-back bırakmanın asıl işlevi "river'da bluff yakalamak" değildir — asıl işlev, rakibin sonraki sokaklarda o el sınıfının ALTINDAKİ kombolarla ince value-raise ya da value-bet yapmasını engellemektir. Check-back'e giren kombo senin range'inin tamamını korur, sadece kendisini değil. Bu yüzden bir sınıfı bahis/check diye ikiye bölerken en GÜÇLÜ komboları değil, bahisten en AZ KAZANAN (check'e konduğunda en az EV kaybeden) komboları check'e ayırmak daha doğrudur — böylece bahis aralığının value yoğunluğu korunur.

**Kural:** Check-back'e giden komboyu "hangisi en güçlü" değil "hangisi bahisten en az kazanıyor" sorusuna göre seç.

### 15.10-EK-4 İnce value eşiğini sayarak bul, hissederek değil
Sınırda bir elin (zayıf iki per, ince trips vb.) belirli bir boyutla value-bet edilip edilemeyeceğini anlamanın pratik yolu, rakibin o boyutu çağıracağı aralıkta seni kaç kombinasyonun geçtiğini kabaca saymaktır — mutlak el gücüne değil, rakibin ÇAĞIRMA aralığındaki göreli sıralamana bakılır. Boyut küçüldükçe rakip daha geniş çağırır ve bu eşik daha da hassaslaşır; kesin yüzdeler masaya göre değişir (kalibre et), ama yöntem sabittir: önce rakibin o boyutu neyle çağırdığını listele, sonra kendi elinin o listede kaçıncı sırada olduğuna bak.

**Kural:** İnce value kararını "elim güçlü mü" değil "rakibin bu boyutu çağıran aralığında kaçıncı sıradayım" sorusuyla ver.

### 15.10-EK-5 Range avantajı sokak sırasına göre değişir, flop okuması otomatik taşınmaz
Aynı board dokusu farklı sırayla tamamlandığında (nut turn'de mi geldi, river'da mı geldi) hangi tarafın range/nut avantajına sahip olduğu kökten değişebilir — flop'ta kimin önde olduğu bilgisi bir sonraki sokağa otomatik taşınmaz, her sokakta yeniden hesaplanmalıdır. Altı kartlı PLO'da bu sallantı dört karta göre daha şiddetlidir: tamamlayıcı bir kart, her iki tarafın range'inde de çok daha fazla yeni nut kombinasyonu doğurur, çünkü altı karttan seçilebilecek iki-kartlık kombinasyon sayısı dört karta göre kat kat fazladır. Bu yüzden "flop'ta ondeydim" varsayımıyla turn/river'a girmek altı kartta özellikle riskli bir alışkanlıktır.

**Kural:** Her yeni kartta "range avantajı şu an kimde" sorusunu sıfırdan sor — sıralamanın kendisi bile bir sokaktan diğerine dönebilir.

### 15.10-EK-6 Boyutu range'inin ortalama gücüne değil, hangi katmanda öndeysen ona göre seç
Bahis boyutu seçimi sadece "range'im genel olarak güçlü mü" sorusuna değil, "range'imin HANGİ KATMANINDA gerçek avantajım var" sorusuna dayanmalı. Nut'ların üstünde rakiple eşit güçteysen ama orta katmanda (tek per, zayıf iki per) büyük bir avantajın varsa, büyük/polar boyut yerine küçük-tek-boyut seçmek o orta katmanı korur ve value'ya çevirir; büyük boyuta gidersen sadece nut'ların istediği boyutu seçmiş, orta katmanın avantajını masaya koyamamış olursun. Altı kartlı PLO'da nut-katman zaten dört karta göre daha kalabalıktır, bu yüzden "hangi katmanda gerçekten öndeyim" sorusunu atlayıp doğrudan büyük boyuta gitmek dört kart alışkanlığından taşınan bir hatadır.

**Kural:** Boyutu range'inin ortalama gücüne değil, hangi katmanda gerçek avantajın olduğuna göre seç.

### 15.11 Beklenmeyen çizgide hangi el gerçekten oradadır
Rakip "olması beklenmeyen" bir agresif çizgi atarsa (teorik olarak lead/check-raise range'i olmayan bir spotta bahis gibi), önce kendi elini bir kenara koyup "bu çizgiyi GERÇEKTEN atmak isteyen el sınıfı hangisi" diye sor. Cevap neredeyse hep iki uçtan biridir: ya saf air (hiçbir şey kazanamayacağını görüp "deneyeyim" diyen el) ya da dar bir tek value kombosu; orta katman (check-raise edilebilir ama edilmemiş orta güçte eller) neredeyse boştur çünkü o eller zaten normal çizgiyi (check-raise, iki kez value bas) tercih eder.

**Kural:** Rakibin "atmaması gereken" bir çizgisini gördüğünde kendi elini değil, o çizgiyi gerçekten seçecek el sınıflarını say — sayı azsa fold eşiğini sıkılaştır.

### 15.11-EK Value büyür blöf büyümez — river underbluff mekanizması
Bir river kartı board'un büyük kısmını tamamladığında (birden fazla düz/renk gelir) sezgi "artık herkes blöf atar" der, ama gerçek genelde tersidir. Sebep: value range'i o karttan orantılı büyür, ama BLÖF adayı sayısı aynı oranda büyümez — blöf adayı olmak için hem "elim şimdi hiçbir işe yaramıyor" hem "geçmiş sokaklarda bu ele mantıklı biçimde ulaşmış olmalıyım" şartlarının ikisi birden gerekir, bu nadir bir kesişimdir. Sonuç: pot-odds'un gerektirdiği value:blöf oranı tutturulamaz, spot yapısal olarak underbluff olur. Altı kartta kombinasyon havuzu daha zengin olduğu için bu sıkışıklık bir miktar hafifleyebilir, ama mekanizma aynı kalır *(kalibre et)*.

**Kural:** "Çok şey tamamlandı" river'ında blöf sıklığını yükseltme refleksini bastır — value range'in orantılı büyüyüp büyümediğini, blöf adayının GERÇEKTEN büyüyüp büyümediğini ayrı ayrı say.

### 15.11-EK-2 Lineerlik çökünce bloker devreye girer
River blöf seçiminde iki yöntem var: lineerlik ("range'imin dibindeyim, showdown value'm yok, o yüzden blöflerim") ve bloker seçimi ("hangi kombo rakibin call aralığını en çok kesiyor"). Lineerlik ancak rakibin gerçekten showdown-value'suz elle bu river'a ulaşması mümkünse işler; rakip neredeyse her zaman en azından bir çift/gutshot gibi bir şeyle geliyorsa, lineer mantık çöker ve seçim tamamen blokere kaymalıdır. Altı kartlı oyunda range dibi bile daha sık showdown value taşır, bu yüzden bloker-öncelikli seçim dört karda olduğundan daha sık gereklidir.

**Kural:** Blöf seçmeden önce sor: "Rakip bu river'a gerçekten sıfır showdown-value'lu bir elle gelebilir mi?" Cevap hayırsa range dibini değil blokeri seçim kriteri yap.

### 15.11-EK-3 Turn'de gelecek blokere güvenerek call — yanılgı testi
Flop'ta bir bloker call kararını meşrulaştırabilir çünkü önünde birden fazla sokak var ve o bloker gelecekteki bir blöf fırsatının değerini taşır. Turn'de (tek kart kalmışken) bu mantık çöker: elindeki bloker kartı YOKMUŞ gibi düşün — o haliyle call açık bir fold ise, blokerli haliyle de fold'dur. Bloker'ın "belki river'da bununla blöf atarım" potansiyeli, turn call'unu tek başına +EV yapacak kadar büyük değildir; bu ayrım altı kartta daha da keskindir çünkü tek bir kartın blokaj gücü on beş komboluk bir range üzerinde dört kartlıdakinden daha küçük bir pay tutar.

**Kural:** Tek sokak kalan bir call kararında "bu bloker olmasa yine call eder miydim" diye sor — hayırsa, bloker varken de fold.

### 15.11-EK-4 Redraw'suz nütte tuzak dürtüsüne direnç
Turn'de redraw'suz nütü (ör. çıplak düz, ek çekiliş yok) yakaladığında "tuzak kurayım, küçük oynayıp rakibi agresif bir hataya çekeyim" dürtüsü cazip gelir, ama genelde yanlıştır. Sebep: range'inin başka kısımlarında zaten check-raise/slowplay elleri vardır — bu elin o boşluğu doldurmak için fedakârlık yapmasına gerek yoktur — ve redraw olmadığı için ek sokakta kazanacağın bir şey de yoktur. Ama PLO-6 kaydını atlama: buradaki tek soru "rakip şimdi mi sonra mı öder" değildir; asıl risk kolu, aynı düzü redraw'la tutan rakibin raise'idir ve o kolda kayıp asimetriktir (iyi ihtimalle chop, kötüsünde freeroll'un yanlış tarafı). O yüzden tuzak kurma — bas, ama potu stack-off boyuna şişirmeyen bir boyla; raise geldiğinde redraw'un yoksa devam etme (15.5-L4: "6-kartta turn'de redraw'suz çıplak nut straight ile derin yığın koyma"; 15.6-(6): "turn'de redraw'suz nut = call, raise için redraw şart").

**Kural:** Redraw'suz nüt + zaten dolu bir check-raise range'in varsa, tuzak kurmaya çalışma — bas, ama stack-off boyunda değil; raise gelirse redraw'suz devam yok. Tuzak stokunu range'inin başka yerinde bul.

### 15.11-EK-5 Boyutlandırma bir sonraki sokağın bloker penceresini belirler
Turn'de küçük boy seçmek sadece "bugün az risk almak" değildir — SPR'yi yüksek tutarak river'da bloker-temelli manevra (ince value, seçici blöf) yapma imkânını canlı tutar. Turn'de büyük basıp SPR'yi düşürürsen river'da genelde tek seçenek jam/fold kalır ve bloker'ların ince ayar gücü kaybolur. "Bu elle iki sokak boyunca küçük bas" kararı çoğu zaman "range'imin nütü river'da hâlâ manevra yapabilsin" stratejik tercihidir, sadece o anki elin gücüyle açıklanmaz.

**Kural:** Turn boyutunu seçerken sadece bugünün eline değil, "bu boy river'da bloker kullanma alanımı ne kadar bırakıyor" sorusuna da bak.

### 15.11-EK-6 River'da bet'i "yüzde kaç yenigim" sayısı seçer
River'da pot bet'e karşı rakip kabaca yarı aralığıyla devam eder; bunun aritmetiği pot-boy value bet için taban olarak rakip aralığının kabaca dörtte üçünü yenmeni ister — pratikte raise ihtimali ve blocker'lar eşiği daha da sıkar (kalibre et). Hesabı tersinden yap: en üst sınıftan aşağı inerek "beni yenen eller toplam yüzde kaç?" diye say; kaba tahmin yeter, amaç sınırın çok ötesinde pot atmamaktır. Eşiğe yaklaştıkça küçük boy pot'tan yüksek EV olur; ama o hatta hiç küçük boy kullanmıyorsan elini okutmamak için pot'ta kal — el hâlâ bet edebiliyorsa boy tek başına küçülmez. Altı kartta rakip nut'a çok daha sık ulaştığından aynı mutlak el gücü daha sık yeniktir; eşikleri PLO-6 frekanslarıyla yeniden kalibre et.

**Kural:** Rahat öndeysen büyük bet, sınıra yaklaştıkça küçül (o boy şemanda varsa), sınırı geçtiysen check.

### 15.11-EK-7 Checked-down river'da IP range'in dibinden, OOP blocker'dan bluff seçer
Checked-down ya da kaçırılmış turn c-bet sonrası river'da, pozisyon bluff seçim mantığını değiştirir. Pozisyondaki oyuncu genelde range'inin EN ALTINDAN (mutlak gösteri değeri en düşük elinden) bluff seçer, çünkü karşısındaki OOP range'i geniş ve çoğunlukla havadır — geniş bir aralığı topluca fold ettirmek öncelik. OOP ise blocker kalitesine göre bluff seçer, çünkü onun check-call aralığında gerçek showdown value bulunur ve rakibin spesifik value kombolarını dışarı atmak doğru blocker gerektirir. Bu ayrım gözden kaçtığında OOP'ta da IP mantığıyla (sadece mutlak el gücüne göre) bluff seçilir ve elde blocker olduğu halde boşa harcanır.

**Kural:** IP river bluff'unda "en zayıf elim hangisi", OOP river bluff'unda "en iyi blocker'ım hangisi" diye sor — ikisi aynı soru değildir.

### 15.11-EK-8 "Hiç bluflamıyor" bluff-raise için sebep değil, uyarıdır
Bir check-raise bluff'unun kârlılığı rakibin bluff'larını yenmenden değil, rakibin VALUE elini fold ettirebilmenden gelir. "Rakip burada hiç bluflamıyor, o yüzden call yapamam, bari raise'e çevireyim" mantığı tersine döner: rakip gerçekten hiç bluflamıyorsa bu, bluff-raise için daha KÖTÜ bir spottur — zaten sana kaybedecek elleri (bluff'ları) fold ettirmenin sana katkısı sıfırdır, kazancın tamamı rakibin gerçek value elini kırabilmene bağlıdır ve "hiç bluflamayan" bir rakip genelde value'sunu da bırakmaz.

**Kural:** Bluff-raise kararını rakibin bluff sıklığına değil, rakibin value elini fold edip etmeyeceğine göre ver.

### 15.11-EK-9 Aynı el sınıfını bölerken blocker'lı komboyu check'e, blocker'sızı bahse yaz
Sınırda bir el sınıfını (bahis mi check mi) ikiye bölerken — burada "blocker" = rakibin VALUE/çağırma aralığından kombo silen kart — o blocker'ı taşıyan komboları CHECK (check-call) aralığına, taşımayanları BAHİS aralığına koymak dengeleyici bir kısayoldur. Mantık ters gibi görünür ama işler: blocker'lı kombo check-call'da daha iyi bir bluff-catcher'dır, çünkü rakibin value kombolarını sen tutuyorsun — o bahis attığında aralığında kalan value payı küçülür, blöf payı görece büyür. (Kazanç rakibin senin spesifik komboya göre "daha geniş oynamasından" gelmez; rakip hangi komboyu tuttuğunu bilmez, kazanç yalnız onun aralığının bileşiminden gelir.) Blocker'sız kombo ise rakibin çağırma aralığını unblock ettiği için daha sık ödenir — bahse onu yaz; gerekçe fold ettirme gücü değil, call alma sıklığıdır. Bu bölme, ayrımı zaten yapılmış bir made-hand sınıfı içindir; blöf seçimi 15.11-EK-7 / EK-12'ye tabidir.

**Kural:** Aynı made-hand sınıfını bölerken rakibin value/çağırma aralığını bloklayan komboyu check-call'a (daha iyi bluff-catcher), bloklamayanı bahse (daha sık ödenir) yaz — sezgisel tam tersini değil.

### 15.11-EK-10 Value-bet blocker'ı rakibin elini bloklar, bluff-raise blocker'ı rakibin bluff'unu serbest bırakır
Value-bet ederken rakibin senin elini yenen/chop eden kombolarını bloklamak istersin. Ama bluff-raise (check-raise bluff) yaparken mantık tersine döner: rakibin VALUE kombolarını blokla, ama mümkünse rakibin BLUFF kombolarını UNBLOK et — çünkü rakibin zaten fold edecek olan bluff'unu bloklamak sana hiçbir şey kazandırmaz, sadece rakibin elinde fold edecek daha fazla bluff kombosu kalma ihtimalini azaltır. Asıl kâr, rakibin elinde tuttuğu value kombolarını fold ettirmekten gelir.

**Kural:** Value bet'te rakibin seni yenen ellerini blokla; bluff-raise'de rakibin value'sunu blokla ama bluff'unu serbest bırak.

### 15.11-EK-11 River donk mimarisi — IP'nin value rahatlığı testi
OOP'nin (out of position) river'da lead (donk) atıp atmayacağını belirleyen temel soru "elim güçlü mü" değildir — şudur: "IP (in position), bu river'da kendi TİPİK value elleriyle (set, üst çift vb.) hâlâ rahatça value bet basabilir mi?" IP hâlâ basabiliyorsa OOP'nin lead atmaya ihtiyacı yoktur, check-call yeterlidir çünkü value zaten karşı taraftan gelecektir. Ama river kartı IP'nin o value ellerini DEVALÜE ederse (üçüncü bir düz olasılığı açılırsa, ya da board pair olup set avantajı OOP'ye geçerse), IP kendi value'sunu basmaktan çekinir ve tam bu boşlukta OOP'nin lead range'i EV kazanır.

**Kural:** River lead range'ini kendi el gücünle değil, o river'ın IP'nin tipik value ellerini hâlâ bastırıp bastıramadığıyla kur — IP hâlâ rahatsa lead'e gerek yok.

### 15.11-EK-12 Bloker yönü testi river bet/raise'e taşınır
Preflop squeeze için kullanılan "bu kart rakibin CALL aralığından mı FOLD aralığından mı kombo siliyor" testi river bet/raise seçiminde de birebir işler. Bir blöf/raise adayının elindeki kart rakibin zaten katlayacağı elleri (FOLD aralığını) siliyorsa, o kart blöfü güçlendirmez — kalan aralıkta ödeyen payı büyür. Asıl aranan kart, rakibin ÖDEME/value aralığından kombo silen karttır; bu, "hangi renk/düz blokluyorum" sorusundan önce sorulmalıdır.

**Kural:** River blöf/raise seçerken önce "bu bloker rakibin FOLD'undan mı CALL'ından mı kombo siliyor" diye sor — call'undan siliyorsa blöfü güçlendirir, fold'undan siliyorsa zayıflatır.

### 15.12 Multiway'de bahis sıklığı ve boyu neden küçülür
Multiway'de bahis sıklığı ve boyu küçülür çünkü rakip sayısı arttıkça "profitable bahis" için gereken el gücü eşiği yükselir — daha fazla range aynı anda seni yenebilecek durumda olduğundan, ortalama elin bahis için yeterli olma olasılığı düşer. Küçük boy bu sorunu kısmen çözer: boy küçüldükçe daha zayıf ellerin de bahsi +EV atması mümkün hale gelir, bu da bahis SIKLIĞINI yükseltir — yüksek sıklık ise aradaki her rakibi aynı anda "sandviç"e sokup ucuz equity toplamanı sağlar. Sonuç: multiway'de küçük-boy + yüksek-sıklık kombinasyonu, büyük-boy + düşük-sıklıktan genelde daha çok pot payı toplar.

**Kural:** Multiway'de bahis boyunu düşürmek zayıflık değildir — sıklığı yükseltip her rakibi aynı anda sıkıştırmanın aracıdır; büyük-nadir yerine küçük-sık düşün.

### 15.12-EK Sandviç etkisi — tek tek fold artar, toplam fold equity düşer
Multiway'de ilk hareket eden oyuncunun bahis/raise'i, aradaki her rakibi hem ARKASINDAKİ (henüz karar vermemiş) hem ÖNÜNDEKİ (zaten oynamış ama hâlâ pota bağlı) tehdide karşı aynı anda katlanmaya zorlar — buna sandviç etkisi denir. Bu yüzden HER RAKİP TEK TEK daha sık fold eder: iki rakip birbirini fold ettirme sorumluluğunu paylaştığı için, heads-up'ta rahat çağıracak bir el bile multiway'de fold eşiğinin altına düşebilir. Ama buradan "multiway'de daha çok blöf" ÇIKMAZ: blöfün tutması için hepsinin AYNI ANDA fold etmesi gerekir, yani toplam fold equity heads-up'takinden DÜŞÜKTÜR (iki rakip × %60 tek tek fold ≈ %36 toplam). PLO'da equity'ler yakın koştuğu için (15.0: "fold equity doktrini PLO'da zayıflar") sapma daha da büyür. Sandviç etkisinin verdiği şey blöf sıklığı değil, blöf SEÇİCİLİĞİDİR: kime (en sıkışan, en dar devam aralıklı rakibe) ve hangi boyla baskı yapacağın. Range avantajı ile nut avantajı burada da ayrı şeylerdir.

**Kural:** Multiway'de ilk hareket ederken tek tek fold sıklıklarını değil ÇARPIMLARINI hesapla — toplam fold equity heads-up'takinden düşüktür; sandviç blöf sıklığını yükseltmenin değil, kime/hangi boyla baskı yapacağını seçmenin gerekçesidir.

### 15.13 3-bet'li multiway potta ortadaki oyuncu en az bahis atar
Preflop 3-bet sonrası iki (veya daha fazla) çağıran varsa, postflop'ta ilk hareket eden oyuncunun check range'i genelde GENİŞTİR: donk-lead yok denecek kadar azdır, orta güçteki eller potu şişirmeden check'e düşer, nut'lar da check-raise için orada bekletilir. Yani o check zayıflık sinyali değil, neredeyse aralığın tamamıdır. Bu geniş check'e karşı, ARADA kalan oyuncu (3-bet eden, hâlâ arkasında bir çağıran varken) yapısal olarak en az bahis atan taraftır: önündeki aralık check-raise'i içeride tutuyor, arkasındaki çağıran hâlâ canlı, ve 3-bet potu zaten düşük SPR'li olduğundan (15.2: "3-bet pot → SPR≤1") orta bir elle potu şişirmek onu kendi aleyhine commit eder — PLO-6'da orta el bloated potta chip koymaz (15.4). Bahis çoğunlukla son harekete geçen (pozisyonda) oyuncudan gelir.

**Kural:** 3-bet'li multiway potta "ortadaki" oyuncuysan varsayılan olarak en az bahis atan taraf sensin — önündeki check zayıflık değil (aralığın tamamı orada, check-raise dahil); bahis basmak için ekstra sebep (bloker + equity) iste, sadece "3-bet ettim" yeterli değildir.

### 15.13-EK Sandviç call tehlikesi — heads-up +EV, multiway -EV
Bir rakibin shove'una karşı heads-up hesapladığında ufak da olsa +EV bir call, üçüncü bir oyuncu hâlâ elindeyken tamamen farklı bir karardır. Sebep chip asimetrisi DEĞİLDİR: riske ettiğin miktar iki dalda da aynı call'dır ve üçüncü oyuncu da girerse onun chipleri pota eklendiğinden kazandığında daha AZ değil, daha ÇOK kazanırsın. Sebep aralıktır: seni overcall eden oyuncunun aralığı dar, güçlü ve seninkiyle korelelidir (PLO'da çoğu zaman aynı nut'a çekiliyorsunuzdur, üstelik kartların birbirinizin outlarını siler), yani üç-yönlü potta equity payın, ölü parayla zaten düşen ~1/3 eşiğinin de altına iner. "Azınlıkta equity" tek başına diskalifiye değildir — üç-yönlü potta yaklaşık eşit katkıyla %33 yeter; diskalifiye eden şey korele-güçlü overcall aralığıdır. Turnuvada asıl asimetriyi bunun üstüne bustout/ICM ekler: elenirsen kalan seriyi de kaybedersin. Bu yüzden üçüncü bir oyuncu hâlâ hareket edecekken call/shove eşiği heads-up eşiğinden belirgin biçimde sıkı tutulmalıdır.

**Kural:** Shove'a karşı call kararı verirken "üçüncü oyuncu hâlâ hareket edecek mi" sorusunu equity hesabından önce sor — canlıysa eşiği heads-up'takinden belirgin sıkılaştır; sebep riske ettiğin chip değil, overcall aralığının dar/güçlü + seninkiyle korele olması ve bustout/ICM'dir.

### 15.13-EK-2 Dry side-pot'ta nütü gizleme, büyük oyna
Bir rakip all-in olup kalan iki oyuncu arasında "dry" (ekstra para eklenmeyen) bir side pot oluştuğunda, nüt eli SPR düşükse yavaş oynamak (tuzak kurmak) genelde işe yaramaz. Sebep: side-pot rakibinin seni bluff'la yenebilmesi için hem all-in olan oyuncunun elini hem de senin elini aynı anda geçmesi gerekir — bu, tek bir bluff çizgisiyle nadiren tutan çift bir koşuldur. Bu yüzden dry side-pot'ta düşük SPR'de nütü saklamak yerine büyük oynamak çoğunlukla daha çok EV getirir; saklama planı ancak SPR yüksekse ve side-pot rakibinin gerçekten manevra alanı varsa mantıklı olur.

**Kural:** Dry side-pot'ta düşük SPR'de nütü gizleme — rakibinin seni yenmesi için iki elin aynı anda geçmesi gerektiğinden, büyük oynamak neredeyse her zaman daha iyidir.

*Kök hata bağı: B0 c.10 ("PLO'da çıplak AA = tek per") draw'lara ve derinliğe genişletilmiş hâli — non-nut'la şişirilen pot, kök hatanın PLO formudur.*

---

