// Çeldirici gerekçeleri: her YANLIŞ şık için tek satır "neden kaybeder".
// Reveal'da senaryonun altında çıkar → her kaçırma mikro-derse döner.
// Anahtar = senaryonun q metni (seen-map ile aynı anahtar). Dizi options ile hizalı;
// doğru şık indeksi "" (boş) — UI onu göstermez. İçerik senaryonun kendi explain'inden
// sıkıştırıldı (yeni iddia yok); adversarial verify'dan geçti.
// Kapsam: Bölüm 17 (WSOP ME Day-2) + Bölüm 2.1 (KQo) + Bölüm 11–16 (v5) çok-şıklı senaryolar.
export const WHY_WRONG: Record<string, string[]> = {
  "52 BB stack'le CO'dan AA açtın. BTN'deki 48 BB'lik reg 3-bet yaptı, sen 4-bet ettin, call geldi. Pot ~44 BB, SPR ~1.3. Flop T♠ 9♠ 8♣. 1/3 pot c-bet attın, rakip RAISE yaptı. İçinden 'AA + SPR 1.3 = zaten bağlıyım' geçiyor. Aksiyonun?":
    [
      "SPR düşüklüğü commit nedeni değil (MW.6); T98 ıslak board'da raise aralığı set/kent/kombo-draw — AA tek pair.",
      "",
      "Pot oddsları tek pair'i şişmiş pota bağlamaz; call-call sürüklenmesi MW.6 'pot büyüdü bağlandım' kök hatası.",
      "Bilgi raise'i parayı şişirir, net cevap alamaz; ıslak board'da doğru hat pot kontrolü/fold, teste çekme değil.",
    ],
  "34 BB'le BB'de KK. HJ'deki 38 BB'lik sıkı-pasif oyuncu open yaptı, sen 3-bet ettin, call geldi. Flop Q-J-T rainbow; c-bet attın, call geldi. Turn 9♦ (board Q-J-T-9). İçinden 'check-raise all-in ile inisiyatifi geri alayım' geçiyor. Doğru hat?":
    [
      "Her tekli K seninle chop, AK broadway seni yener; all-in yalnız seni yenen/chop eden elden aksiyon alır.",
      "Koruma gereksiz — board dört karta straight; bet yalnız seni yenen (AK) ya da chop eden (Kx) ellerden call toplar, zayıfı fold ettirir.",
      "Aşırı-fold: her K ile chop'ı ve zayıf değeri atarsın; doğru hat check-call, kör fold değil.",
      "",
    ],
  "Bubble'a 25 kişi kaldı, stack'in 41 BB. Seni cover eden chip lideri (140 BB) BTN'den üst üste 3. kez open yaptı. BB'de QQ tutuyorsun. Planın ne; 3-bet'ine jam gelirse call var mı?":
    [
      "",
      "QQ, {KK+,AK} jam'ine ~%40 alır; bubble primi gereken eşiği ~%48-50'ye çıkarır, QQ altında kalır → jam'e call ICM-negatif.",
      "Yasak olan BLÖF 3-bet (17.4); QQ value 3-bet'tir, sadece flat çok açan reg'e value kaçırır.",
      "Cover'dan tam kaçış strateji değil (MW.9B); QQ value elini bubble'da atmak chip yakar.",
    ],
  "Derin ITM'desin. 3-bet potunda IP olarak TT ile oynuyorsun. Flop 8-6-2 rainbow'da c-bet'ine check-call geldi; turn 8 (board 8-6-2-8) check-check geçti. River A geldi ve rakip POT büyüklüğünde DONK bet attı. İçinden 'overpair'im vardı, A sadece korkutmaca' geçiyor. Kararın?":
    [
      "'A korkutmaca' rasyonalizasyonu MW.9 kök hata; pot donk polarize, senden zayıf el bu boyutu betlemez.",
      "Bluff-catch spotunda raise yalnız seni yenen değerden call alır, blöfü fold ettirir — kendine zarar.",
      "",
      "Pot donk aralığı yeterince blöf içermez; overbet/pot boyutu = bluff-catcher matematiği, ~%33 tuzak.",
    ],
  "47 BB'le BB'desin; BTN'in tek raise'ine A9o ile call ettin. Board A-9-4 iki kupa: check-raise yaptın, call geldi. Turn 6♥ ile flush tamamlandı; bet attın, rakip RAISE yaptı. 'İki pair'im var, güvendeyim' diyorsun. Kararın?":
    [
      "6♥ flush'ı tamamladı; jam draw'a değil yapılmış flush'a öder, iki pair artık bluff-catcher.",
      "",
      "'Pot büyüdü bağlandım' MW.6 kök hata; geliştiremezsen river büyük bet'e fold, kör call değil.",
      "Aşırı-fold: boat'a geliştirme şansın var ve raise blöf/zayıf two pair de içerir — bir call doğru, anında pes değil.",
    ],
  "56 BB, Faz 1 (bubble uzak). HJ'den A9s açtın; BTN'deki 48 BB'lik reg ~3x 3-bet yaptı (postflop OOP kalacaksın). Aksiyonun?":
    [
      "OOP 3-bet call'ı zayıf elle şişmiş pota sokar (MW.9B tehlikesi); A9s OOP devam aralığında yok.",
      "4-bet bluff cephanesi A5s-A4s ile sınırlı, düşük frekans; A9s value da bluff de değil.",
      "Bu derinlikte A9s jam aşırı; reg'in KK+ çekirdeğine equity yakar, fold equity de yeterli değil.",
      "",
    ],
  "38 BB stack'le (Mod B) CO'dasın, elinde 66; önün fold. Açar mısın? Açarsan BB'nin ~4x 3-bet'ine planın ne?":
    [
      "",
      "Mod B'de flat daralır, set-mine matematiği bozulur; 66 ile call plansız şişmiş pot doğurur.",
      "CO aralığı 44+ (MW.3); 66 standart open, katlamak açık kârı bırakır.",
      "38BB'de jam, Mod C/D eşiğini yukarı taşıma hatası (MW.9B); 66 ile jam'e call range'i yenmez.",
    ],
  "Bubble'a 40 kişi kaldı. BTN'de KQo ile oturuyorsun; BB'de seni cover eden 130 BB'lik chip lideri var, önün fold. Ne yaparsın?":
    [
      "Cover'dan kaçış strateji değil (MW.9B); KQo daraltılmış BTN aralığında bile net open.",
      "3-bet'e offsuit broadway çöptür (MW.6) — 'en pahalı güzel görünen el'; call cover'a karşı ICM yakar.",
      "",
      "Limp MW.3 aralığında yok; inisiyatifi bırakıp cover'a bedava realize hediye eder.",
    ],
  "Faz 2, stack'in 60 BB. SB'deki 22 BB'lik stack open yaptı; sen BB'de A5s tutuyorsun (postflop IP olacaksın). En kârlı hat?":
    [
      "Faz 2'nin özü 15-25BB'yi ezmek; flat baskıyı bırakır, A5s'in fold equity'sini boşa harcar.",
      "'Bluff yanar' yasağı 20BB ALTI için; 22BB tam hedef, A5s bloker'lı ideal baskı eli.",
      "60BB stack'le jam aşırı; 3-bet baskısı çok daha kârlı, jam call'a equity yakar.",
      "",
    ],
  "3-bet potunda OOP'sin, elinde QQ (overpair). Flop 9-7-5 iki maça; check ettin, rakip POT büyüklüğünde bet attı. Flop/turn/river planın ne?":
    [
      "40BB'yi geçen potta tek pair alarm (MW.9); raise QQ'yu stack yarışına sokar, draw korkusu commit nedeni değil.",
      "",
      "'Pot büyüdü bağlandım' kök hata; turn scare + büyük barrel'de tek pair biter, kör call değil.",
      "Aşırı-fold: SPR henüz commit değil, overpair flop'ta bluff-catcher olarak call eder, hemen pes etmez.",
    ],
  "Para yeni girdi (Faz 3), ITM'nin ilk eli. UTG'deki 9 BB'lik stack jam yaptı; sen HJ'de ATo tutuyorsun ve arkanda 3 büyük stack var. Call var mı?":
    [
      "Chip-EV'de kârlı görünür ama Faz 3 disiplini ICM>chip-EV; kamikaze jam yalnız premium ile karşılanır.",
      "Re-jam arkadaki 3 büyük stack'i her zaman atmaz; uyanan premium'a ATo ile bağlanırsın.",
      "",
      "Pot oddsları chip-EV mantığı; para girişinde faz primi call eşiğini premium'a çeker.",
    ],
  "Elinde KK (overpair). Flop T-8-4 iki sinekti, c-bet'ine call gelmişti. Turn J♣ ile board T-8-4-J oldu ve sinek flush tamamlandı; rakip 3/4 pot ikinci barrel attı. Devam kriterin ne?":
    [
      "Büyük turn barrel + flush tamamlayan board'da tek pair biter (MW.6); call sürüklenmesi kök hata doğurur.",
      "Raise yalnız tamamlanmış flush'tan aksiyon alır, zayıfı fold ettirir — test değil kendine zarar.",
      "Koruma geç: flush zaten geldi; jam yapılmış ellere öder, KK bu board'da tek pair.",
      "",
    ],
  "Mod D'desin: 17 BB, BTN'den ilk giren sensin, elinde A7o. Jam mi, open-fold mu, fold mu?":
    [
      "17BB'de open-fold equity yakar; Mod D'de BTN açılışının bir kısmı direkt jam, A7o o sınıfta.",
      "",
      "Fold, MW.9B'nin '20BB donma' geçiş hatasının pasif yüzü; A7o Nash jam aralığında.",
      "17BB'de 3-bet'e call yok: Mod D'de open sonrası kural ya-jam-ya-fold, call plansız commit.",
    ],
  "Derin ITM, 3 masa kaldı. Seninle EŞİT stack'li (45 BB) rakip CO'dan open yaptı; sen SB'de AQo tutuyorsun. 3-bet boyutun ve 4-bet gelirse planın ne?":
    [
      "",
      "Küçük OOP 3-bet ucuz call verir → plansız şişmiş OOP pot (kök hata doğum yeri); 4-bet'e call daha kötü.",
      "SB'den flat YOK (MW.4): 3-bet ya da fold; flat realize edilemeyen OOP pot açar.",
      "Derin ITM eşit stack'e flip son çare (MW.6 / Faz 4 'eşitlerden kaç'); AQo jam ICM'de pahalı.",
    ],
  "River'dayız; elinde AA, pot iyice şişmiş durumda. Board 2-4-5-9-6. Rakip sana check etti ve son söz sende. Bet var mı; varsa boyut ve hedef el ne?":
    [
      "'Benden kötü hangi el öder?' cevabı boş; bet'i ödeyen straight/set/iki pair zaten seni yener.",
      "Şişmiş potta jam yalnız seni yenen aralıktan aksiyon alır; kötü eller zaten fold eder.",
      "",
      "2-4-5-9-6'da overpair aralığı seyrek; ince value'yu ödeyecek zayıf el yok, bet value üretmez.",
    ],
  "42bb, HJ reg (~%22) açtı, sen CO'da KQo. Karar?":
    [
      "3-bet KQo'yu blöfe çevirir ama reg'in devam aralığı (AQ/AK/QQ+) KQo'yu domine eder — value yok, fold equity zayıf.",
      "Call: ham ~%45 equity realize edilemez; en iyi floplar (K→AK, Q→AQ) en pahalı tuzaklardır.",
      "",
    ],
  "3-bet potundasın (SPR ~2.5), elinde overpair KK. Flop geldi, tek per'in hâlâ en iyisi görünüyor. İçinden 'şişmiş pot, bağlıyım' geçiyor. Kitabın 'şişmiş pot' ölçüsü nedir?":
    [
      "Bahis sayısı şişmişliği tanımlamaz (B11.0); SPR düşükse tek 3-bet bile commit, yüksekse çok bet bile değil.",
      "",
      "Efektif stack tek başına yetmez; asıl ölçü stack÷pot (SPR) — derin stack'te bile SPR düşükse commit'sin.",
      "Board dokusu rolü (value/bluff-catch) etkiler ama 'şişmiş pot' ölçüsü değil; ölçü SPR.",
    ],
  "River geldi, elinde güçlü tek per (overpair). Rakip POT ÜSTÜ (overbet) bahis attı. Kararın?":
    [
      "Overbet polarize (nut ya da hava); yalnız bloker tutan bluff-catcher call eder, çıplak overpair fold'dur — panik hero-call B11.2 hatası.",
      "",
      "Raise polarize aralığı blöfe zorlamaz — value zaten call/jam eder, blöf zaten fold; kendine zarar.",
      "'Duruma göre' değil: overbet boyutu tanımı gereği polarize okunur, karar nettir.",
    ],
  "River kuru board, top pair iyi kicker'ın var. Karşında rec/station (fold etmeyen) tip; sana check geldi. Bahis var mı?":
    [
      "Check kaçırma: 'benden zayıf hangi el öder?' cevabı VAR (rec öder) — kaçan thin value doğrudan chip kaybı.",
      "",
      "Pot bet fazla: top pair thin value; büyük boyut yalnız seni yeneni ödetir, zayıf ödeyeni fold ettirir.",
      "Check-raise plansız: sana check geldi, value BET eden sensin; check-raise beklemek value'yu bırakır.",
    ],
  "Overpair'in var, pot şişmiş. River board 2-4-5'e 6 geldi (2-4-5-6). Rakip büyük bahis attı. Kitabın 'kötü river' kataloğunda bu kart hangi sınıfta ve kararın?":
    [
      "Kart nötr değil: 2-4-5'e 6 kent/set/3'lü tamamlar (B11.4 kataloğu) — call bu runout'ta bluff-catcher tuzağı.",
      "",
      "'Korkutmaca' sanıp raise, seni yenen tamamlanmış ellerden call alır — kök hata ailesinden.",
      "Küçük value bet yok: senden zayıf el bu kötü river'da ödemez, value üretilecek yer değil.",
    ],
  "Sert baloncuk. Seni COVER eden büyük stack geniş bir BvB jam attı (~22bb efektif), elinde A9s. Call?":
    [
      "Cover + baloncukta CALL = 88+/AJs+/AQo; A9s bu eşiğin altında ve ters-domine — 'suited önde' yanılgısı.",
      "",
      "Jam'i sen yapamazsın: villain ZATEN jam attı, karar call/fold; 'inisiyatif' seçeneği spotta yok.",
      "'Duruma göre' değil: ilk soru 'cover ediliyor muyum' — evet → net eşik (88+/AJs+/AQo), A9s dışında.",
    ],
  "Baloncuk, 22bb BB'desin. Seni cover ETMEYEN kısa bir stack (senden kısa; kaybetsen de bust olmazsın) geniş 13bb BTN jam attı; elinde KTo. Refleksin 'range yetersiz, fold'. Doğrusu?":
    [
      "Fold refleksi leak'in yapışkan yarısı: cover EDİLMİYORSAN (jammer senden kısa) KTo ~%54 alır, ~%44 gerekir → call.",
      "",
      "Re-jam yok: villain zaten all-in; karar sadece call ya da fold.",
      "Yalnız premium fazla dar: cover edilmeyen kısa stack jam'ine KTo bile kârlı call, premium beklemek EV bırakır.",
    ],
  "FT, herkes birbirini kilitlemiş (masada senden kısa YOK, sen fiilen en kısasın, <15bb). 'ICM'de daralt' refleksin devrede. Doğru oyun?":
    [
      "'ICM her zaman daraltır' yanlış (B12.5); herkes kilitliyken kimse seni ödemek istemez → genişlet.",
      "",
      "Katlanıp bust beklemek blind-out; en kısayken jam aralığını genişletmen gerek, pasif ölüm değil.",
      "Yalnız premium fazla dar: kimse ödemek istemezken geniş jam fold equity'yle chip toplar.",
    ],
  "Bubble, sen büyük (cover eden) stack'sin. Masada kilitlenmiş bir orta stack ve birkaç kısa var. En kârlı hedefin kim?":
    [
      "Kısa stack'ler zaten jam/fold moduna geçti — baskıya en az açık grup; asıl hedef kilitlenmiş orta stack.",
      "",
      "Diğer büyük stack sana ciddi hasar verebilecek tek oyuncu — onunla çatışmak riskli; kârlı hedef kilitlenmiş orta stack.",
      "Bubble'da beklemek DOĞRU tarafındayken en yüksek chipEV penceresini kaçırır.",
    ],
  "3+ kişilik (multiway) potta top pair'in var, flop'a birkaç kişi geldi. HU refleksinle value düşünüyorsun. Kitabın multiway kuralı?":
    [
      "'Top pair her zaman value' değil (B13.1); multiway her ek oyuncu value barını yükseltir → bir sınıf düşer.",
      "",
      "Fold fazla: top pair çöp değil, pot-kontrol/check ile showdown value'yu korur.",
      "Overbet ters: multiway'de value barı yüksek, overbet yalnız seni yeneni ödetir, potu şişirir.",
    ],
  "Multiway potta blöf düşünüyorsun; elinde iyi bir bloker var. Pot kaç yollu olduğunda blöf hâlâ meşru? (kitabın 4. kriteri)":
    [
      "4+ yollu blöf YOK (B13.3): bloker tek başına yetmez, blöfün geçmesi gereken kapı sayısı fazla.",
      "",
      "'Her multiway'de standart blöf' yanlış: HU=üç kriter, 3-yollu=yalnız nut-bloker, 4+=hiç.",
      "Yalnız HU fazla dar: 3 yollu potta nut-bloker semi-bluff hâlâ meşru; blöf sadece 4+ yolluda biter.",
    ],
  "40–60bb bandındasın (köprü band), 3-bet düşünüyorsun. Kitabın blöf 3-bet yönü ne?":
    [
      "'Derinlik var, genişlet' yanlış (B14.1): 40-60bb'de canlıda kimse fold etmiyor, blöf 3-bet yanar.",
      "",
      "Standart B4 aralığı değişmez sanmak leak: bu bantta 3-bet commit'e yaklaşır, blöf kısmı çöker.",
      "Suited connector blöf tam da kesilen el: 4-bet/jam'e devam edemez, bu bantta uygun değil.",
    ],
  "€25K PLO HR, elinde 30bb ve çıplak AA. NLH refleksin '30bb altı → Bölüm 5 → 3-bet=JAM' diyor. PLO'da geçerli mi?":
    [
      "'30bb her oyunda jam' yanlış: PLO pot-limit, jam yok — B5'in NLH jam/fold refleksi PLO'da geçersiz.",
      "",
      "Fold fazla: çıplak AA oynanır ama değeri pre-commit'te (3-bet→SPR≤1), postflop değil; atmak değil.",
      "Limp-call PLO'da AA'nın değerini bırakır: pot-raise ile SPR'yi düşürüp pre-commit et.",
    ],
  "Kısa PLO (<25bb), pot-raise yaptın. Bunun anlamı ne?":
    [
      "'Devam kararı ayrı' değil: kısa PLO'da pot-raise = commit, kalan stack flop'ta otomatik gider.",
      "",
      "Bilgi raise'i ucuz değil: pot-raise stack'i taahhüt eder; aralığı 'flop'ta stack girecek' varsayımıyla seç.",
      "'Fold'a hazır ol' commit'le çelişir: pot-raise attıysan dangler'sız güçlü elle girmiş olmalısın, geri dönüş yok.",
    ],
  "SHR Day 1'de bust ettin, 5 dakika geçti, tilt hafif. Hemen re-entry (aynı event'e ikinci mermi) mantıklı mı?":
    [
      "'Hemen gir' serinin en pahalı kararı (B16.1): SHR tek bullet, tilt'le karar = kök hatanın bankroll ölçeği.",
      "",
      "'Başka event'e geç' de tilt kararı; önce zorunlu 20 dk + karar kartı, event seçimi sonra.",
      "Kural 20 dk + karar kartı; günü/yarını beklemek de disiplinli süreç değil, kaçış.",
    ],
  "Gün sonu otopsisi: bir eli kitabın kuralına UYARAK oynadın ama kaybettin (doğru jam, kötü sonuç). Yarın o spotta aralığını değiştirir misin?":
    [
      "'Kaybettiysem yanlıştı' sonuç-yanılgısı (B16.3): uydum+kaybettim = doğru karar/kötü sonuç, aralık değişmez.",
      "",
      "'Sonuca bak' tam da yasak: puanı sonuç değil kural belirler; SHR'de doğru jam'ler sık kaybedilir.",
      "Genişletmek de sonuç-tepkisi: kurala uyduysan tablo doğru, tek kötü sonuç için B4-B5'i bozma.",
    ],
};
