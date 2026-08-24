// Senaryo soruları — TÜM kitabı test eder. Her soru ve cevabı kitabın kendi
// ifadesinden alındı (GTO uydurması yok); doğru şık kitabın verdiği karardır.
export interface Scenario {
  q: string;
  options: string[];
  correct: number;
  explain: string;
  source: string;
  kavram: string;
}

export const SCENARIOS: Scenario[] = [
  {
    q: "Şişmiş potta AA'n var, kötü river geldi; senden zayıf hiçbir el ödemeyecek. Jam?",
    options: ["Jam — value", "Check — jam value değil"],
    correct: 1,
    explain: "River'da senden zayıf el ödemeyecekse jam value değildir. Kök hata tam burada.",
    source: "Bölüm 0 / 7",
    kavram: "kök-hata",
  },
  {
    q: "Şişmiş potta (3-bet pot / stack'inin ~%40'ı ortada) tek per'in var. Rakibi 'zayıf görünüp' river'da blöfe itmek için ince (thin) value bet atsan?",
    options: ["Thin bet — rakibi blöfe iter", "Check — küçük pota call, büyük pota fold"],
    correct: 1,
    explain:
      "Tek per şişmiş potta bluff-catcher (cümle 1). Cümle 2: kötü river'da küçük pota check-call, büyük pota check-fold — bet yok. İnce bet yakalamak istediğin blöfleri fold ettirir; check-call zaten blöf-indükleyen hattır.",
    source: "Bölüm 0.1 / 0.2",
    kavram: "kök-hata",
  },
  {
    q: "Islak boardda top pair'in var (KTo), OOP'sun, rakip cbet attı. Check-raise all-in?",
    options: ["Check-raise all-in", "Check-call, sonra değerlendir"],
    correct: 1,
    explain:
      "Check-call. Top pair ıslak boardda büyük pot başlatıcı değildir; check-raise all-in seni QQ gibi flat'lenmiş ellere sokar. (Vaka 2 — gerçek elenme.)",
    source: "Bölüm 7 / Vaka 2",
    kavram: "kök-hata",
  },
  {
    q: "BB'de T6s, BTN min-raise call. Flop A-T-3, 1/3 pot call. Turn 5 check-check. River T (board A-T-3-5-T) → trip 10, kicker 6. Check ettin, BTN thin bet. Check-raise all-in?",
    options: ["Check-raise all-in", "Check-call — bluff-catcher"],
    correct: 1,
    explain:
      "Senden zayıf el all-in'i ödemez: her 10 kicker'ını geçer, boat'lar önde. Trip'in bu runout'ta bluff-catcher → check-call. Raise blöfleri fold ettirir, seni yalnız geçen el öder (cümle 2). Senin gerçek elenmen (B7 Vaka 4).",
    source: "Bölüm 7 / Vaka 4",
    kavram: "kök-hata",
  },
  {
    q: "Board bölüşmeye açık ve rakip sana all-in geldi. Onun eli bölüşen bir el mi?",
    options: ["Evet, bölüşmeye oynuyor", "Hayır — chop'lar jam atmaz"],
    correct: 1,
    explain: "Chop'lar jam atmaz; rakip bölüşen eli aralığından çıkarmıştır, jam seni geçen eldir.",
    source: "Bölüm 0 / 1",
    kavram: "chop",
  },
  {
    q: "Bir eli blöf yakıtı yapan üç kriter hangisi?",
    options: ["Bloker, bağlantı, board sahipliği", "Suited, yüksek kart, pozisyon"],
    correct: 0,
    explain: "Üç kriter: bloker, bağlantı, board sahipliği. Biri eksikse blöf değil, kaybedilen chip.",
    source: "Bölüm 1.1",
    kavram: "blöf-kriter",
  },
  {
    q: "J2s (suited). Blöf yakıtı mı?",
    options: ["Evet — suited", "Hayır — bloker yok, bağlantı yok"],
    correct: 1,
    explain: "Suited kandırır. Aranan bağlı ve bloker; J2s ikisinde de zayıf, üstelik alt flush riski.",
    source: "Bölüm 1.2",
    kavram: "suited-tuzağı",
  },
  {
    q: "Check-raise blöfü hangi boardda yaparsın?",
    options: ["T98 — senin boardun", "A-K-7 kuru — rakibin boardu"],
    correct: 0,
    explain: "Check-raise blöf SENİN aralığına çarpan boardlarda (T98, 765). A-K kuruda call et.",
    source: "Bölüm 1.3",
    kavram: "board-sahipliği",
  },
  {
    q: "Station / rec tipi (fold etmeyen) rakibe ne yaparsın?",
    options: ["Blöf", "Value bet — fold etmez"],
    correct: 1,
    explain: "Fold etmeyen oyuncuya blöf para yakmaktır; elin iyiyse ödet, kötüyse deneme.",
    source: "Bölüm 1.4",
    kavram: "kime-blöf",
  },
  {
    q: "JTs, KQ, KJ, 97s — bu ellerin rolü nedir?",
    options: ["Büyük pot başlatıcı (3-bet / stack-off)", "Open / flat / BB-defend"],
    correct: 1,
    explain: "Aldatıcı orta eller: küçük pot kazananı, büyük pot kaybedeni. Asla büyük pot başlatıcı değil.",
    source: "Bölüm 2",
    kavram: "aldatıcı-eller",
  },
  {
    q: "42bb, HJ reg (~%22) açtı, sen CO'da KQo. Karar?",
    options: ["3-bet", "Call", "Fold"],
    correct: 2,
    explain: "Fold. Ham equity ~%45 ama realize edilemiyor; en iyi floplar en pahalı tuzaklar (K→AK, Q→AQ).",
    source: "Bölüm 2.1",
    kavram: "kqo-vaka",
  },
  {
    q: "Her elden önce sorulacak İLK soru nedir?",
    options: ["Hangi el?", "Hangi stack modundayım?"],
    correct: 1,
    explain: "Önce mod, sonra aralık. Aynı el farklı modda farklı bir eldir.",
    source: "Bölüm 3",
    kavram: "stack-modu",
  },
  {
    q: "28bb, elinde 88. Nasıl oynarsın?",
    options: ["Post-flop set-mining", "Jam ya da fold"],
    correct: 1,
    explain: "30bb altı orta çiftler jam-or-fold; set gelmezse devam stack'i yok, gelse maksimum alamazsın.",
    source: "Bölüm 3.1",
    kavram: "orta-çift-30bb",
  },
  {
    q: "Bubble, solunda büyük stack'ler var. Açılış aralığını?",
    options: ["Genişlet", "Daralt — seni cezasız 3-bet ederler"],
    correct: 1,
    explain: "Solunda büyük stack varsa daralt. Bubble'da 30bb ≠ Day 1'de 30bb.",
    source: "Bölüm 3.2",
    kavram: "icm",
  },
  {
    q: "Canlı turnuvada kâr esas nereden gelir?",
    options: ["Blöf 3-bet", "Daha geniş value 3-bet"],
    correct: 1,
    explain: "Alan 3-bet'e az fold eder; blöfü kıs, value 3-bet'i genişlet.",
    source: "Bölüm 4.1",
    kavram: "canlı-value",
  },
  {
    q: "Canlıda biri sana 4-bet yaptı, elinde AK. Ne yaparsın?",
    options: ["Otomatik 5-bet", "Ciddiye al — canlıda 4-bet blöfü yok"],
    correct: 1,
    explain: "Canlıda 4-bet neredeyse hep gerçek eldir; QQ ve altını ciddiye al, AK otomatik 5-bet değil.",
    source: "Bölüm 4.1 / 4.5",
    kavram: "4bet-cevap",
  },
  {
    q: "Coldcall'un üç şartından (pozisyon, derinlik, ödeyen rakip) biri sağlanmıyor. Flat?",
    options: ["Yine de flat", "Flat etme"],
    correct: 1,
    explain: "Üçü aynı anda sağlanmıyorsa flat etme; ya 3-bet'e yükselt ya at.",
    source: "Bölüm 4.4",
    kavram: "coldcall",
  },
  {
    q: "Biri açtı, bir başkası call etti (coldcaller). En kârlı hamlen?",
    options: ["Flat", "Squeeze"],
    correct: 1,
    explain: "Coldcaller aralığı sıkı ama zayıf: 4-bet edemez, çoğunu fold eder. Squeeze en kârlı hamle.",
    source: "Bölüm 4.6",
    kavram: "squeeze",
  },
  {
    q: "OOP 3-bet aralığın, IP aralığına göre nasıl olmalı?",
    options: ["Daha geniş", "Belirgin daha sıkı"],
    correct: 1,
    explain: "OOP şişmiş potta tek per bluff-catcher'dır; bu yüzden OOP aralıkları belirgin daha sıkı.",
    source: "Bölüm 0.8 / 4.0",
    kavram: "oop-sıkı",
  },
  {
    q: "Turn'de draw'ın var, karşında station (fold etmez). Semi-bluff bet?",
    options: ["Bet — fold ettir", "Check — bedava kart"],
    correct: 1,
    explain: "Station fold etmez; semi-bluff para yakar. Check et, bedava river gör, draw'ı bedava çek.",
    source: "Bölüm 6",
    kavram: "turn-fold-equity",
  },
  {
    q: "PLO'da çıplak (nut potansiyeli olmayan) AA neye benzer?",
    options: ["Canavar el", "NLH'deki tek per — büyük pot oynamaz"],
    correct: 1,
    explain: "PLO'da çıplak AA, NLH'deki tek per'dir. Nut potansiyeli yoksa el büyük pot oynamaz.",
    source: "Bölüm 0.10 / 8",
    kavram: "plo-aa",
  },
  {
    q: "25–30bb bandında değer esas nereden gelir?",
    options: ["Kart tamamlamaktan (implied odds)", "Fold equity'den"],
    correct: 1,
    explain:
      "Bu bantta değer fold equity'den gelir. Aradığın el gelişebilen değil, şimdiden iyi olan: as, broadway, çift.",
    source: "Bölüm 5.0 / 0.11",
    kavram: "25-30bb-değer",
  },
  {
    q: "28bb, 3-bet etmek istiyorsun. Yapı nedir?",
    options: ["3-bet edip fold'a hazır ol", "3-bet = jam (commit)"],
    correct: 1,
    explain:
      "Bu bantta 3-bet commit demektir; '3-bet edip fold' yok, doğrudan all-in. Bu bantta flat da yok.",
    source: "Bölüm 5.2",
    kavram: "3bet-jam",
  },
  {
    q: "28bb, SB'desin, elin T9s, BTN açtı, 40K'ya call teklifi var. Karar?",
    options: ["Call", "Fold"],
    correct: 1,
    explain:
      "Fold — SB'den flat kayıp pozisyon, 28bb'de implied odds motoru çalışmaz. (GGMasters saha vakası)",
    source: "Bölüm 5.5",
    kavram: "25-30bb-fold",
  },
  {
    q: "28bb, elinde 87s (suited connector). Karar?",
    options: ["Uygun spotta oyna", "Otomatik fold"],
    correct: 1,
    explain:
      "Bu bantta tüm suited connector'lar kayıtsız şartsız fold; motorları (implied odds) çalışmıyor.",
    source: "Bölüm 5.4",
    kavram: "suited-connector-fold",
  },
  {
    q: "28bb, sana jam geldi. Call sınırın nedir?",
    options: ["Geniş: çoğu broadway", "99+, AJs+, AQo+"],
    correct: 1,
    explain:
      "Jam'e karşı call 99+, AJs+, AQo+; bundan aşağısı call değil — ya jam'i sen yaparsın ya fold.",
    source: "Bölüm 5.3",
    kavram: "jam-call",
  },
  {
    q: "Chip leader'ın jam'e bir kez fold ettiğini gördün. Ona karşı jam aralığın?",
    options: ["Daralt", "Genişlet"],
    correct: 1,
    explain:
      "Geniş açıp jam'e katlanan profil bu bantta en kârlı hedeftir; ona karşı jam aralığını genişlet.",
    source: "Bölüm 5.6",
    kavram: "rakip-okuma",
  },
  // === Bölüm 17 — WSOP Online ME Day 2 (özel modül drill'leri, S1-S10 + S-T1-5) ===
  {
    q: "52 BB stack'le CO'dan AA açtın. BTN'deki 48 BB'lik reg 3-bet yaptı, sen 4-bet ettin, call geldi. Pot ~44 BB, SPR ~1.3. Flop T♠ 9♠ 8♣. 1/3 pot c-bet attın, rakip RAISE yaptı. İçinden 'AA + SPR 1.3 = zaten bağlıyım' geçiyor. Aksiyonun?",
    options: ["All-in — AA + SPR 1.3, zaten bağlısın; draw'lara bedava kart verme", "Fold — pot 40 BB'yi geçti, tek pair alarm; T♠ 9♠ 8♣ üzerindeki raise aralığına karşı AA ile stack yarışı yok", "Call, turn'de her barrele devam — pot oddsların call'ı zorunlu kılıyor", "Küçük re-raise — bilgi al, rakibi teste çek"],
    correct: 1,
    explain:
      "MW.9 kök hata: pot 40 BB'yi geçtiyse tek pair (AA dahil) = alarm; varsayılan pot kontrolü + bluff-catcher, stack yarışı değil. MW.6: 'pot büyüdü bağlandım' kök hatadır — SPR'nin düşük olması commit nedeni DEĞİLDİR. T♠ 9♠ 8♣ gibi ıslak board'da raise aralığı set/straight/kombo-draw ağırlıklıdır; AA burada tek pair'dir.",
    source: "Bölüm 17",
    kavram: "kök-hata",
  },
  {
    q: "34 BB'le BB'de KK. HJ'deki 38 BB'lik sıkı-pasif oyuncu open yaptı, sen 3-bet ettin, call geldi. Flop Q-J-T rainbow; c-bet attın, call geldi. Turn 9♦ (board Q-J-T-9). İçinden 'check-raise all-in ile inisiyatifi geri alayım' geçiyor. Doğru hat?",
    options: ["Check-raise all-in — K-yüksek straight'in var, inisiyatifi geri al", "Büyük bet — straight'ini koru, bedava kart verme", "Check-fold — sıkı-pasifte AK kesin vardır", "Check-call, river'da yeniden değerlendir — her K seninle chop, AK seni yener; sıkı-pasifin devam aralığı tam bu bölge"],
    correct: 3,
    explain:
      "MW.9 kök hata korkuluğu: check-raise all-in dürtüsü (KTo dersi) — doğru hat check-call-sonra-değerlendir. Q-J-T-9'da KK ile K-yüksek straight'in var ama her tekli K chop, AK broadway ile seni yener; all-in yalnız seni yenen/chop eden ellerden aksiyon alır. MW.9 chop mekaniği: river'da/turn'de board'u yeniden oku.",
    source: "Bölüm 17",
    kavram: "kök-hata",
  },
  {
    q: "Bubble'a 25 kişi kaldı, stack'in 41 BB. Seni cover eden chip lideri (140 BB) BTN'den üst üste 3. kez open yaptı. BB'de QQ tutuyorsun. Planın ne; 3-bet'ine jam gelirse call var mı?",
    options: ["3-bet (value); jam gelirse FOLD — bubble'da cover'a karşı tüm stack aralığı ~KK+; QQ, {KK+, AK} jam'ine karşı ICM'li eşiği tutmaz", "3-bet ve jam'e call — QQ bubble'da fold edilmez, adam üst üste 3. kez açıyor", "Sadece call — cover'a karşı 3-bet tamamen yasak, potu küçük tut", "Fold — chip lideriyle hiçbir pot oynama, ondan uzak dur"],
    correct: 0,
    explain:
      "MW.9 ICM eşikleri: QQ, cover'ın {KK+, AK} jam'ine ~%40 equity alır; bubble ICM primi %6–10 ile gereken ~%48–50 → FOLD. MW.8: 'Bubble'da cover'a karşı QQ bile 4-bet-call olmayabilir'; pratik kural tüm stack için KK+. QQ yine de value 3-bet'tir (MW.4: BB'den 99+, çok açan reg hedef); hata 3-bet'te değil jam'e call'dadır. Cover'dan tamamen kaçmak da strateji değildir (MW.9B). (17.4 'cover edene 3-bet YAPMA' BLÖF 3-bet içindir; value 3-bet — QQ, jam'e devam KK+ — serbest.)",
    source: "Bölüm 17 / 17.4",
    kavram: "icm-cover",
  },
  {
    q: "Derin ITM'desin. 3-bet potunda IP olarak TT ile oynuyorsun. Flop 8-6-2 rainbow'da c-bet'ine check-call geldi; turn 8 (board 8-6-2-8) check-check geçti. River A geldi ve rakip POT büyüklüğünde DONK bet attı. İçinden 'overpair'im vardı, A sadece korkutmaca' geçiyor. Kararın?",
    options: ["Call — A korkutmaca, TT hâlâ 8'lerin ve altının önünde", "Raise all-in — blöfü cezalandır, zayıf Ax'i fold'a zorla", "Fold — overpair + kötü river + BÜYÜK bet; pot donk polarizedir ve senden kötü el bu boyutu betlemez", "Call — pot oddsların ~%33, rakip yeterince sık blöf yapar"],
    correct: 2,
    explain:
      "MW.6 river disiplini: overpair + kötü river → küçük bet'e check-call, BÜYÜK bet'e fold. A, TT için en kötü karttır ve pot donk polarize aralıktır (MW.9 online telafi: overbet/pot polarize = bluff-catcher matematiği); 'korkutmaca' rasyonalizasyonu MW.9 kök hata ailesindendir. Derin ITM'de MW.8 gereği ICM > chip-EV, fold daha da netleşir.",
    source: "Bölüm 17",
    kavram: "kök-hata",
  },
  {
    q: "47 BB'le BB'desin; BTN'in tek raise'ine A9o ile call ettin. Board A-9-4 iki kupa: check-raise yaptın, call geldi. Turn 6♥ ile flush tamamlandı; bet attın, rakip RAISE yaptı. 'İki pair'im var, güvendeyim' diyorsun. Kararın?",
    options: ["3-bet all-in — iki pair önde, draw'ları ödet", "Raise'e bir kez call — iki pair artık sadece bluff-catcher (+4 out boat); river'da geliştiremezsen büyük bet'e fold, stack yarışı yok", "Call, river'da da her bet'e call — pot büyüdü, artık bağlısın", "Fold — flush tamamlandıysa iki pair anında çöptür"],
    correct: 1,
    explain:
      "MW.6/MW.9: flush tamamlayan 6♥ turn'ünde, check-raise'ine call etmiş rakipten gelen raise ağırlıkla tamamlanmış flush'tır — iki pair 'güvende' değil, bluff-catcher'a döner. Doğru hat eskalasyon değil call-sonra-değerlendir (MW.9 check-raise all-in dürtüsü dersi); jam draw'lara değil yapılmış ellere ödeme yapar. 'Pot büyüdü bağlandım' ise MW.6'daki kök hatadır.",
    source: "Bölüm 17",
    kavram: "kök-hata",
  },
  {
    q: "56 BB, Faz 1 (bubble uzak). HJ'den A9s açtın; BTN'deki 48 BB'lik reg ~3x 3-bet yaptı (postflop OOP kalacaksın). Aksiyonun?",
    options: ["Call — suited as, pozisyonsuz da olsa flop'a bakılır", "4-bet bluff — A bloker'ın var, reg'i test et", "Jam — reg'in 3-bet'ini kır", "Fold — OOP'de 3-bet'e devam aralığı dar: KK+ 4-bet, QQ/AK karışık, JJ–TT/AQs call; A9s bunun dışında"],
    correct: 3,
    explain:
      "MW.5: open'ına OOP'de 3-bet gelince aralık daralır — KK+ 4-bet, QQ/AK karışık, JJ–TT/AQs call, gerisi fold; A9s 'gerisi'ndedir. 4-bet bluff cephanesi A5s–A4s ile sınırlı ve düşük frekanstır. Call ise MW.9B'nin uyardığı asıl tehlikedir: 3-bet call yiyip zayıf elle şişmiş pota girmek.",
    source: "Bölüm 17",
    kavram: "3bet-aralik",
  },
  {
    q: "38 BB stack'le (Mod B) CO'dasın, elinde 66; önün fold. Açar mısın? Açarsan BB'nin ~4x 3-bet'ine planın ne?",
    options: ["Aç (CO aralığı 44+, 66 standart), 3-bet'e fold — Mod B'de flat call daralır, set-mine matematiği bozulur", "Aç, 3-bet'e call — set tutarsan stack alırsın", "Açma — 38 BB'de küçük çiftler open'dan düşer", "Aç, 3-bet'e jam — 38 BB'de commit eşiği zaten geçildi"],
    correct: 0,
    explain:
      "MW.7 Mod B (30–45 BB): open aralığı korunur (MW.3 CO %26 = 44+ dahil) ama flat call daralır — set-mine bozulur ve 3-bet potunda commit eşiği yakındır; 66 ile call plansız şişmiş pot doğurur. Doğru plan: aç, 3-bet'e fold. Jam ise Mod C/D eşiklerini 38 BB'ye taşıyan geçiş hatasıdır (MW.9B).",
    source: "Bölüm 17",
    kavram: "stack-modu",
  },
  {
    q: "Bubble'a 40 kişi kaldı. BTN'de KQo ile oturuyorsun; BB'de seni cover eden 130 BB'lik chip lideri var, önün fold. Ne yaparsın?",
    options: ["Fold — cover'la pot açılmaz, ondan uzak dur", "Aç ve 3-bet'e call — KQo bırakılamayacak kadar güzel bir el", "Aç (2.1–2.3x) — KQo bir kademe daraltılmış BTN aralığında bile açılır; ama cover'ın 3-bet'ine fold", "Limp — ucuza flop gör, cover'ı kızdırma"],
    correct: 2,
    explain:
      "MW.8 Faz 2: cover'lara karşı tek fren 'bir kademe dar' oynamaktır; MW.9B: 'cover'dan kaçış strateji değil'. KQo, MW.3 BTN %40–44 aralığının daraltılmış halinde bile net open'dır. Asıl disiplin 3-bet gelince: MW.6 — 3-bet'e karşı offsuit broadway (KQo, AJo) çöptür, 'en pahalı güzel görünen el'; cover'dan 3-bet'e bir kademe daha dar devam edilir. Limp MW.3'te yoktur.",
    source: "Bölüm 17",
    kavram: "icm-cover",
  },
  {
    q: "Faz 2, stack'in 60 BB. SB'deki 22 BB'lik stack open yaptı; sen BB'de A5s tutuyorsun (postflop IP olacaksın). En kârlı hat?",
    options: ["Call — A5s'i pozisyonla ucuza oyna", "Fold — kısa stack'e bluff 3-bet yanar", "Direkt jam — 22 BB'yi anında fold'a zorla", "3-bet — Faz 2'nin özü 15–25 BB'likleri ezmek; A5s, A bloker'ı + oynanabilirliğiyle ideal baskı eli; jam gelirse çoğunlukla fold"],
    correct: 3,
    explain:
      "MW.8 Faz 2: en kârlı faz — 15–25 BB'lik stacklerin open'larına 3-bet baskısı ana kâr kaynağıdır ve 22 BB tam hedef bölgededir (MW.4'ün 'bluff yanar' yasağı 20 BB ALTI içindir). MW.9B: baskı bluff'ları A5s/K9s gibi bloker'lı ellerle sınırlanır — A5s ders kitabı adayıdır. Jam'e gelirse 60 BB'lik stack'in yarışmaz; fiyat uymadıkça fold.",
    source: "Bölüm 17",
    kavram: "blof-secimi",
  },
  {
    q: "3-bet potunda OOP'sin, elinde QQ (overpair). Flop 9-7-5 iki maça; check ettin, rakip POT büyüklüğünde bet attı. Flop/turn/river planın ne?",
    options: ["Flop'ta raise — overpair'i draw'lardan koru, gerekirse stack gitsin", "Flop call; turn'de maça/straight tamamlayıp büyük barrel gelirse fold; river'da küçük bet'e call, büyük bet'e fold — overpair'i bluff-catcher'a çevir", "Flop call, sonra her sokakta call — QQ premium, pot zaten büyüdü", "Flop fold — pot bet'e overpair yetmez"],
    correct: 1,
    explain:
      "MW.9: 40 BB'yi geçen şişmiş potta tek pair (QQ) = alarm; varsayılan pot kontrolü + bluff-catcher, stack yarışı değil. Sokak planı MW.6'dan: turn'de büyük barrel + flush/straight tamamlayan kart → tek pair biter; river'da küçük bet'e check-call, büyük bet'e check-fold. Her sokakta call etmek 'pot büyüdü bağlandım' kök hatasıdır.",
    source: "Bölüm 17",
    kavram: "kök-hata",
  },
  {
    q: "Para yeni girdi (Faz 3), ITM'nin ilk eli. UTG'deki 9 BB'lik stack jam yaptı; sen HJ'de ATo tutuyorsun ve arkanda 3 büyük stack var. Call var mı?",
    options: ["Call — 9 BB'lik kamikaze jam'e karşı ATo fazlasıyla önde", "İzole re-jam — arkadakileri at, kısayla baş başa kal", "Fold — Faz 3'te ilk 3–4 el tight oynanır; kamikaze jam'ler premium ile karşılanır, ATo premium değil ve arkanda 3 büyük stack var", "Call — pot oddsları neredeyse her iki karta call veriyor"],
    correct: 2,
    explain:
      "MW.8 Faz 3: para girişinde 3–4 el tight — kısalar kamikaze jam atar ve bunlar yalnız PREMIUM ile karşılanır; ATo premium değildir. Arkadaki 3 büyük stack'in uyanma ihtimali denklemi daha da kötüleştirir. Chip-EV'de kârlı görünen call, faz disiplinini (ICM > chip-EV) bozan tipik hatadır.",
    source: "Bölüm 17",
    kavram: "kök-hata",
  },
  {
    q: "Elinde KK (overpair). Flop T-8-4 iki sinekti, c-bet'ine call gelmişti. Turn J♣ ile board T-8-4-J oldu ve sinek flush tamamlandı; rakip 3/4 pot ikinci barrel attı. Devam kriterin ne?",
    options: ["Call — overpair bir barrel daha kaldırır, river'a bakarız", "Raise — flush'ı test et", "All-in — KK'yı koru, çekilişleri at", "Fold — büyük turn barrel + flush tamamlayan board'da tek pair biter; devam ancak K♣ bloker gibi istisnai gerekçeyle düşünülür"],
    correct: 3,
    explain:
      "MW.6 turn disiplini: 'büyük turn barrel + board dörtlü/flush tamamladı → tek pair biter.' 3/4 pot ikinci barrel bu tanımın tam içindedir ve KK bu board'da tek pair'dir → varsayılan fold. Devam etmek, MW.9'un uyardığı 'şişmiş potta tek pair ile stack yarışı' kök hatasının doğum yeridir; raise/all-in ise tamamlanmış ellere ödeme yapar.",
    source: "Bölüm 17",
    kavram: "kök-hata",
  },
  {
    q: "Mod D'desin: 17 BB, BTN'den ilk giren sensin, elinde A7o. Jam mi, open-fold mu, fold mu?",
    options: ["Open 2.1x ve 3-bet'e fold — stack'i koru", "Jam — Mod D'de BTN açılışının bir kısmı direkt jam'dir; A7o Nash'e yakın jam aralığında, open edersen 3-bet'e ya-jam-ya-fold ikileminde kalırsın", "Fold — A7o domine olur, 17 BB'yle riske girme", "Open 2.1x ve 3-bet'e call — A bloker'la flop görürüz"],
    correct: 1,
    explain:
      "MW.7 Mod D (12–20 BB): açılışın bir kısmı SB/BTN'den DİREKT jam'dir ve aralık Nash'e yakındır — 17 BB'de BTN'den A7o bu sınıftadır. Open edersen kural nettir: 3-bet'e ya jam ya fold — A7o ile ikisi de kötüdür (domine yarış ya da equity yakma). Fold ise MW.9B'deki '20 BB panik jam/donma' geçiş hatasının pasif yüzüdür.",
    source: "Bölüm 17",
    kavram: "stack-modu",
  },
  {
    q: "Derin ITM, 3 masa kaldı. Seninle EŞİT stack'li (45 BB) rakip CO'dan open yaptı; sen SB'de AQo tutuyorsun. 3-bet boyutun ve 4-bet gelirse planın ne?",
    options: ["OOP standart 3.8–4.2x 3-bet; 4-bet gelirse fold — derin ITM'de eşit stack'e karşı AQo ile stack yarışı yok ('eşitlerden kaç')", "Küçük 3x 3-bet — ucuz olsun; 4-bet'e call", "Flat call — SB'den potu küçük tut", "4x 3-bet, 4-bet'e jam — AQo bloker'larıyla flip kabul"],
    correct: 0,
    explain:
      "MW.4B boyut kuralı: OOP (SB) 3-bet 3.8–4.2x — küçük OOP 3-bet ucuz call verir ve plansız şişmiş OOP pot doğurur (kök hata doğum yeri). MW.4: SB'den flat YOK, 3-bet ya da fold; AQo CO open'ına value 3-bet'tir. 4-bet'e devam MW.5'te KK+ çekirdeklidir ve MW.8 Faz 4 'eşitlerden kaç' + MW.6 'aynı stack'le flip = son çare' → AQo fold.",
    source: "Bölüm 17",
    kavram: "boyut",
  },
  {
    q: "River'dayız; elinde AA, pot iyice şişmiş durumda. Board 2-4-5-9-6. Rakip sana check etti ve son söz sende. Bet var mı; varsa boyut ve hedef el ne?",
    options: ["Pot bet — AA'yı ödet; Ax ve overpair'ler call eder", "Overbet jam — polarize görün, iki pair'leri ödet", "Bet yok, check geç — 'benden kötü hangi el öder?' sorusunun cevabı boş; bet'i ödeyecek eller (straight, set, iki pair) seni yener", "1/3 pot ince value — KK/QQ tipi eller öder"],
    correct: 2,
    explain:
      "MW.9 kök hata korkuluğu: 'AA river jam: senden kötü el ödemiyorsa jam değersiz — check.' MW.6 river kuralı aynı tek soruyu sorar. Board 2-4-5-9-6'da her 3 ve her 7-8 straight yapar; şişmiş potta bet'ine aksiyon verecek aralık ağırlıkla seni yenen bölgededir, kötü eller zaten fold eder. MW.9: şişmiş potta tek pair = pot kontrolü, value üretme yeri değil.",
    source: "Bölüm 17",
    kavram: "kök-hata",
  },
  // === Bölüm 11–16 senaryoları (v5 turnuva-kazanma bölümleri; cevaplar birebir kitap tablolarından) ===
  {
    q: "3-bet potundasın (SPR ~2.5), elinde overpair KK. Flop geldi, tek per'in hâlâ en iyisi görünüyor. İçinden 'şişmiş pot, bağlıyım' geçiyor. Kitabın 'şişmiş pot' ölçüsü nedir?",
    options: ["Bahis sayısı — 3-bet'liyse pot şişmiştir", "SPR (stack ÷ pot); SPR 1–4 = bluff-catcher, büyük pot BAŞLATMA", "Efektif stack — 100bb+ ise derin", "Board dokusu — ıslaksa şişmiş"],
    correct: 1,
    explain:
      "B11.0: 'Derinde şişmiş potu bet sayısı değil SPR tanımlar.' SPR 1–4 bandında tek per bluff-catcher'dır — büyük pot başlatma. Önce SPR'yi oku, sonra rolü ver; SPR<1 commit, SPR>8 ince value alınabilir ama re-raise gören pot aniden 1–4'e düşer.",
    source: "Bölüm 11.0",
    kavram: "kök-hata",
  },
  {
    q: "River geldi, elinde güçlü tek per (overpair). Rakip POT ÜSTÜ (overbet) bahis attı. Kararın?",
    options: ["Call — overpair bluff-catcher, overbet'te blöf de var", "Fold — overbet polarize (nut ya da hava); tek per fold, yalnız bloker tutan bluff-catcher call eder", "Raise — polarize aralığı blöfe zorla", "Duruma göre — board'a bak"],
    correct: 1,
    explain:
      "B11.2: 'Boyut büyüdükçe rakip aralığı value'ya kayar; overbet = polarize oku, tek per netleşerek bluff-catcher'dan FOLD'a döner. Sadece bloker tutan bluff-catcher call eder.' Panik hero-call buranın hatasıdır (Vaka 1).",
    source: "Bölüm 11.2",
    kavram: "kök-hata",
  },
  {
    q: "River kuru board, top pair iyi kicker'ın var. Karşında rec/station (fold etmeyen) tip; sana check geldi. Bahis var mı?",
    options: ["Check — showdown'a git, ince value riskli", "Küçük value BET — 'benden zayıf hangi el öder?' cevabı VAR (rec öder); kaçan thin value chip kaybıdır", "Pot bet — maksimum value", "Check-raise'e hazırlan"],
    correct: 1,
    explain:
      "B11.3: 'Ödeyen varsa İNCE value BET ET.' Filtre pozitif yönde: 'benden zayıf hangi el ödüyor?' cevabı varsa (rec/station öder), ince de olsa bet. Rec-ağırlıklı Main'de kaçan thin value doğrudan chip kaybıdır.",
    source: "Bölüm 11.3",
    kavram: "boyut",
  },
  {
    q: "Overpair'in var, pot şişmiş. River board 2-4-5'e 6 geldi (2-4-5-6). Rakip büyük bahis attı. Kitabın 'kötü river' kataloğunda bu kart hangi sınıfta ve kararın?",
    options: ["Nötr kart — call", "Kötü river (kent/set tamamlayan); büyük pota check-fold, JAM ASLA — jam value ancak senden zayıf el öderse vardır", "Korkutmaca — raise", "Küçük value bet"],
    correct: 1,
    explain:
      "B11.4 kötü river kataloğu: 'alt kartların dördüncüsü / kent tamamlayan' (2-4-5'e 6 → 3'lü, kent, set hepsi seni geçmiş). Bu kartlarda küçük pota check-call, büyük pota check-fold; JAM ASLA. (Vaka 3.)",
    source: "Bölüm 11.4",
    kavram: "kök-hata",
  },
  {
    q: "Sert baloncuk. Seni COVER eden büyük stack geniş bir BvB jam attı (~22bb efektif), elinde A9s. Call?",
    options: ["Call — A9s suited, baloncukta bile yeterince önde", "Fold — cover + baloncuk: CALL = 88+/AJs+/AQo; A9s ters-domine, KQs ile birlikte fold", "Jam'i sen yap — inisiyatif al", "Duruma göre"],
    correct: 1,
    explain:
      "B12.1 Emre kalibrasyonu (2026-08-10): sert baloncuk + seni cover eden geniş jam, ~22bb → CALL = 88+ · AJs+ · AQo; A9s/KQs FOLD. Sürücü: cover + baloncuk = kaybedersen bust €0, marjinal edge tournament life'a değmez (A9s ters-domine). İLK soru 'baloncuk mu' değil 'cover ediliyor muyum'.",
    source: "Bölüm 12.1",
    kavram: "icm-cover",
  },
  {
    q: "Baloncuk, 22bb BB'desin. Seni cover ETMEYEN kısa bir stack (senden kısa; kaybetsen de bust olmazsın) geniş 13bb BTN jam attı; elinde KTo. Refleksin 'range yetersiz, fold'. Doğrusu?",
    options: ["Fold — baloncukta KTo çöp", "Call — cover EDİLMİYORSAN çizgi çok daha geniş; KTo geniş 13bb jam'ine ~%54 alır, ~%44 gerekir", "Jam'e re-jam", "Yalnız premium call"],
    correct: 1,
    explain:
      "B12.1 drill eklentisi (2026-08-10): leak'in yapışkan yarısı COVER EDİLMEYEN tarafta fold refleksi. Cover edilmiyorsan (jammer senden kısa) A9s ve KTo CALL — KTo ~%54 vs gereken ~%44. Cue: 'jam'e fold basmadan önce cover ediliyor muyum? Hayır ise call sandığından çok geniş.'",
    source: "Bölüm 12.1",
    kavram: "icm-cover",
  },
  {
    q: "FT, herkes birbirini kilitlemiş (masada senden kısa YOK, sen fiilen en kısasın, <15bb). 'ICM'de daralt' refleksin devrede. Doğru oyun?",
    options: ["Daralt — ICM her zaman daraltır", "GENİŞLET — herkes kilitliyken kimse seni ödemek istemez; 'genel daralt' bu bandda aktif olarak yanlış", "Katlan, bust'ları bekle", "Yalnız premium jam"],
    correct: 1,
    explain:
      "B12.5 kısa stack ICM istisnası: '⚠ ICM'de daralt HER ZAMAN doğru değil. Herkes kilitliyken kısa stack'in doğru oyunu GENİŞLETMEKtir — kimse seni ödemek istemez.' 12.2: 'fiilen en kısasın → jam aralığını genişlet, katlanma.'",
    source: "Bölüm 12.5 / 12.2",
    kavram: "icm",
  },
  {
    q: "Bubble, sen büyük (cover eden) stack'sin. Masada kilitlenmiş bir orta stack ve birkaç kısa var. En kârlı hedefin kim?",
    options: ["Kısa stack'ler — kolay fold", "Kilitlenmiş orta stack — masadaki en kârlı hedef; open genişlet + 3-bet baskısı", "Diğer büyük stack — çok chip'te", "Kimse — bubble'da bekle"],
    correct: 1,
    explain:
      "B12.4 bubble av haritası: 'kilitlenmiş orta stack masadaki en kârlı hedeftir.' Büyük stack olarak onu soy (open genişlet + 3-bet baskısı). Bubble savunma değil, DOĞRU tarafındaysan turnuvanın en yüksek chipEV penceresidir.",
    source: "Bölüm 12.4",
    kavram: "icm",
  },
  {
    q: "3+ kişilik (multiway) potta top pair'in var, flop'a birkaç kişi geldi. HU refleksinle value düşünüyorsun. Kitabın multiway kuralı?",
    options: ["Value bet — top pair her zaman value", "Bir sınıf düşer → check / pot kontrol; multiway her ek oyuncu value barını yükseltir", "Fold — multiway'de top pair çöp", "Overbet — kalabalığı at"],
    correct: 1,
    explain:
      "B13.1 HU→3+ yollu geçiş: multiway'de top pair 'bir sınıf düşer → check/pot kontrol.' B13.0: 'her ek oyuncu value'nun barını YÜKSELTİR.' C-bet frekansı çöker (sadece güçlü value + gerçek nut-draw).",
    source: "Bölüm 13.1",
    kavram: "multiway",
  },
  {
    q: "Multiway potta blöf düşünüyorsun; elinde iyi bir bloker var. Pot kaç yollu olduğunda blöf hâlâ meşru? (kitabın 4. kriteri)",
    options: ["4+ yollu bile — bloker yeter", "3 yollu: sadece nut-bloker semi-bluff; 4+ yollu: blöf YOK; tek station bile blöfü öldürür", "Her multiway'de standart blöf", "Yalnız HU'da blöf"],
    correct: 1,
    explain:
      "B13.3 dördüncü kriter: 'rakip sayısı = blöfün geçmesi gereken kapı sayısı.' HU=üç kriter, 3-yollu=sadece nut-bloker semi-bluff, 4+ yollu=YOK. B1.4 'kime blöf yapılmaz' listesine 'multiway pot (kim olursa olsun)' eklenir.",
    source: "Bölüm 13.3",
    kavram: "multiway",
  },
  {
    q: "40–60bb bandındasın (köprü band), 3-bet düşünüyorsun. Kitabın blöf 3-bet yönü ne?",
    options: ["Blöfü genişlet — derinlik var", "Blöfü NEREDEYSE KES — canlıda kimse fold etmiyor; 3-bet edeceğin el 4-bet/jam'e devam edebilmeli", "Standart B4 aralığı — değişmez", "Yalnız suited connector blöf"],
    correct: 1,
    explain:
      "B14.1: '40–60bb: BLÖF neredeyse kes — canlıda kimse fold etmiyor.' Kural: 3-bet edeceğin el 4-bet/jam'e devam edebilmeli; edemiyorsa flat (IP/BB) ya da fold. '3-bet edip fold' yapısı 60bb altında zayıflar, 40bb'de biter (commit).",
    source: "Bölüm 14.1",
    kavram: "3bet-aralik",
  },
  {
    q: "€25K PLO HR, elinde 30bb ve çıplak AA. NLH refleksin '30bb altı → Bölüm 5 → 3-bet=JAM' diyor. PLO'da geçerli mi?",
    options: ["Evet — 30bb her oyunda jam bandı", "Hayır — PLO'da B5 GEÇERSİZ: jam yok, pot-raise var; çıplak AA postflop oynamaz, değeri pre-commit'te (3-bet→SPR≤1)", "Fold — 30bb PLO'da AA oynanmaz", "Limp-call"],
    correct: 1,
    explain:
      "B15.1/15.0: 'B5'in NLH jam/fold refleksi PLO'da geçersiz — pot-limit'te jam yok, max pot-raise var.' 25–60bb PLO'da çıplak AA postflop oynamaz; değeri pre-commit'tedir (3-bet → SPR≤1). '30bb PLO ≠ 30bb NLH.'",
    source: "Bölüm 15.1 / 15.0",
    kavram: "plo",
  },
  {
    q: "Kısa PLO (<25bb), pot-raise yaptın. Bunun anlamı ne?",
    options: ["Standart raise — flop'ta devam kararı ayrı", "Pot-raise = COMMIT: kalan stack flop'ta otomatik gider; aralığı 'flop'ta stack ortaya girecek' varsayımıyla seç, dangler'lı her şeyi kes", "Bilgi raise'i — ucuz", "Fold'a hazır ol"],
    correct: 1,
    explain:
      "B15.1: 'Kısa PLO'da pot-raise = commit. Aralığını flop'ta stack ortaya girecek varsayımıyla seç: çift-suited rundown, güçlü AAxx; dangler'lı her şeyi KES.' B15.2: PLO'da commit kararı flop'ta değil, potu şişirdiğin sokakta verilir.",
    source: "Bölüm 15.1 / 15.2",
    kavram: "plo",
  },
  {
    q: "SHR Day 1'de bust ettin, 5 dakika geçti, tilt hafif. Hemen re-entry (aynı event'e ikinci mermi) mantıklı mı?",
    options: ["Evet — hemen gir, momentum kaybetme", "Hayır — zorunlu 20 dk bekle, karar kartını doldur; SHR'de re-entry YOK (max 1 bullet); tilt hâlinde otomatik re-entry = kök hatanın bankroll ölçeği", "Başka event'e geç", "Günü bitir, yarın karar"],
    correct: 1,
    explain:
      "B16.1: 'Serinin en pahalı tek kararı bustout sonrası 5 dakikada verilen re-entry.' Zorunlu bekleme: bustout → 20 dk masadan uzak → karar kartını doldur. SHR max 1 bullet (re-entry yok); tilt hâlinde otomatik re-entry = şişmiş 'seri yatırımında' tek bullet'a value muamelesi.",
    source: "Bölüm 16.1",
    kavram: "kök-hata",
  },
  {
    q: "Gün sonu otopsisi: bir eli kitabın kuralına UYARAK oynadın ama kaybettin (doğru jam, kötü sonuç). Yarın o spotta aralığını değiştirir misin?",
    options: ["Evet — kaybettiysem bir şey yanlıştı, daralt", "Hayır — 'uydum + kaybettim' = doğru karar, kötü sonuç; ARALIK DEĞİŞMEZ (aksi halde SHR ortasında B4-B5 tablolarını bozarsın)", "Duruma göre — sonuca bak", "Aralığı genişlet — daha agresif ol"],
    correct: 1,
    explain:
      "B16.3 otopsi kuralı: 'Uydum + kaybettim → vaka defterine doğru karar/kötü sonuç, ARALIK DEĞİŞMEZ.' Bu filtre kalibrasyonu korur: SHR'de doğru jam'ler sık kaybedilir; filtre olmadan özenli tabloları turnuva ortasında bozarsın. (Yalnız kurala UYDUYSAN geçerli — kendini aklama kapısı değil.)",
    source: "Bölüm 16.3",
    kavram: "kök-hata",
  },
  {
    q: "PLO'da elinde çıplak AA var (çift suited değil, board'a bağlanmadı). Şişmiş pota tüm stack'i sürer misin?",
    options: ["Evet — AA overpair, stack-off", "Hayır — çıplak AA tek per muamelesi"],
    correct: 1,
    explain:
      "Çıplak AA nut potansiyeli yoksa PLO'da sadece bir çifttir; büyük pot oynamaz. AA'yı NLH gözüyle görmek klasik tuzak — iki per bile neredeyse hiç nut değil.",
    source: "Bölüm 8.2 / 8.3",
    kavram: "plo-aa",
  },
  {
    q: "PLO el seçimi: AA72 (dördüncü kart bağlantısız 'dangler'). Nasıl değerlendirilir?",
    options: ["Güçlü — çift as var", "Zayıf — dangler, pratikte üç kartlı el"],
    correct: 1,
    explain:
      "Dördüncü kart bağlantısızsa el pratikte üç kartlıdır; AA72 oynanmaz. Öncelik rundown ve çift suited ellerde (JT98, wrap + flush draw).",
    source: "Bölüm 8.2",
    kavram: "plo",
  },
  {
    q: "PLO'da flopta top two pair yaptın, rakip şişmiş pota itiyor. Stack-off doğru mu?",
    options: ["Evet — top two güçlü", "Hayır — PLO'da iki per neredeyse hiç nut değil"],
    correct: 1,
    explain:
      "PLO'da ikinci en iyi el pahalıdır; iki per neredeyse hiç nut değildir. Equity'ler de yakın koşar (%60/%40 iyi favori) — NLH stack-off refleksini taşıma.",
    source: "Bölüm 8.1 / 8.3",
    kavram: "plo",
  },
  {
    q: "PLO'da pozisyon DIŞI 3-bet potu oynamak en zor spot. Elin marjinal, şüphedesin. Ne yaparsın?",
    options: ["3-bet — inisiyatif al", "Flat et — OOP 3-bet potu en zor spot"],
    correct: 1,
    explain:
      "PLO'da OOP 3-bet potu en zor spottur; şüphe hâlinde flat et. İki pot bet = stack ortada, üçüncü sokakta geri dönüş yok — pot şişmesini kontrol et.",
    source: "Bölüm 8.3",
    kavram: "plo",
  },
  {
    q: "Köprü bandında (40–70bb) '3-bet edip fold' yapısı ne zaman biter?",
    options: ["70bb'de biter", "≈60bb altında zayıflar, 40bb'de tam commit'e döner"],
    correct: 1,
    explain:
      "≈60bb altında '3-bet-fold' zayıflar, 40bb'de commit'e döner (tam eşik kalibrasyonda). 3-bet edeceğin el 4-bet/jam'e devam edebilmeli — edemiyorsa flat (IP/BB) ya da fold.",
    source: "Bölüm 14.1",
    kavram: "3bet-aralik",
  },
  {
    q: "45bb'ye düştün. Köprü bandının bir numaralı 'en pahalı alışkanlık'ı nedir?",
    options: ["Çok fold etmek", "45bb'de 130bb aralığı oynamak"],
    correct: 1,
    explain:
      "'45bb'de 130bb aralığı oynamak en pahalı alışkanlık.' Mod-önce-aralık; yanlış-mod-aralığı şişmiş pot üretiminin bir numaralı kaynağıdır. İlk çıkanlar: SC 3-bet blöfü, küçük çift spekülatif flat, offsuit broadway coldcall.",
    source: "Bölüm 14.2",
    kavram: "stack-modu",
  },
  {
    q: "Köprü bandında bir eli 3-bet mi flat mı diye seçerken tek belirleyici kural nedir?",
    options: ["Her zaman 3-bet — inisiyatif", "3-bet edeceğin el 4-bet/jam'e devam edebilmeli"],
    correct: 1,
    explain:
      "Bantta 3-bet giderek commit'e yaklaşır; 3-bet edeceğin el 4-bet/jam'e devam edebilmeli. Edemiyorsa IP/BB'de dar flat ya da fold. Offsuit broadway ve dominate edilebilir eller bu bantta düşer.",
    source: "Bölüm 14.1",
    kavram: "3bet-aralik",
  },
  {
    q: "Ante'li yapıda BB her elde defend ediyor. Neden yine de küçük (2.2–2.5x) açarsın?",
    options: ["Büyük aç — BB'yi fold'a zorla", "Küçük aç — kâr postflop pozisyondan gelir, yatırımın küçük kalır"],
    correct: 1,
    explain:
      "Küçük open BB'nin call'ını engellemek için değil; ucuz pozisyonel savaş satın alır. Ante potu şişirdiği için küçük open bile potu almaya değer; kâr preflop fold'dan değil postflop pozisyondan gelir. Büyüt: pasif saha fold etmiyorsa / limp isolate / 25–35bb SPR.",
    source: "Bölüm 4.8 / 3",
    kavram: "boyut",
  },
  {
    q: "100bb'de birinin open'ına karşı elinde KQs var — open range'inin göbeğinde bir el. 3-bet mi?",
    options: ["3-bet — güçlü el", "Flat call — KQs 3-bet range'inin ortası, value da değil bluff da"],
    correct: 1,
    explain:
      "3-bet range çoğu pozisyonda polarize: value (QQ+, AK) + bluff (A5s–A2s), ortası flat. KQs/99/AJs open'ın göbeğinde ama 3-bet'te yok — 100bb+ flat call. İstisna: BB vs SB lineer, orada KQs value'ya döner.",
    source: "Bölüm 4.3",
    kavram: "3bet-aralik",
  },
  {
    q: "TT'n var, single-raised pot, flopta SPR ~8. His 'pot büyüdü, committed'im' diyor. Doğru mu?",
    options: ["Evet — committed", "Hayır — SPR 8'de tek pair'le büyük pot yok; committed his değil orandır"],
    correct: 1,
    explain:
      "Committed olmak his değil, orandır. SPR = en küçük kalan stack ÷ pot. SPR 3+ ise tek pair'le büyük pot yok; 8'de çift+draw bile jam için marjinal, tek pair net fold. 3-bet potta (SPR ~3) ise AA stack koyar.",
    source: "Bölüm 11.0",
    kavram: "kök-hata",
  },
  {
    q: "Day 2 ilk 30 dakikada masayı nasıl kullanırsın?",
    options: ["Herkese eşit baskı yap", "Savaşçı/hayatta-kalan diye ayır: hayatta-kalandan çal, savaşçıya malla otur"],
    correct: 1,
    explain:
      "İlk 30 dk masayı ikiye ayır. Hayatta-kalanlar (bag koruyan, sıkılaşan) steal hedefin — blindlerine saldır. Savaşçılara sadece gerçek elle ortaya çık. Paraya yaklaşırken 50bb silaha döner: orta stacklere neredeyse her iki kartla aç, kaptandan kaç.",
    source: "Bölüm 17.9",
    kavram: "rakip-okuma",
  },
  {
    q: "3-bet potta SPR ~3, top pair iyi kicker'ın var. Stack-off doğru mu? Ya single-raised potta (SPR 8+)?",
    options: ["İkisinde de fold — tek pair asla", "3-bet potta stack-off DOĞRU (düşük-SPR commit); SRP'de (SPR 8+) tek pair asla"],
    correct: 1,
    explain:
      "Tek fark derinlik. 3-bet potta SPR ~2.5–3 → TPTK stack-off eli; bu kök hatanın istisnası değil, düşük-SPR commit matematiği. Single-raised potta SPR 8+ → eski kural aynen, tek pair bluff-catcher, asla stack-off.",
    source: "Bölüm 11.0",
    kavram: "kök-hata",
  },
  {
    q: "50bb'de A5s ile 4-bet bluff cephaneliğin var. 40bb'ye düşünce ne değişir?",
    options: ["Aynı kalır", "40bb'de 4-bet bluff'ı öldür + EP'yi iki kademe daralt (4-bet = commit)"],
    correct: 1,
    explain:
      "Stack trigger: 60bb+ tam playbook; 40bb'de 4-bet bluff'ı öldür ve EP'yi iki kademe daralt çünkü 4-bet zaten commit; 30bb Mod C resteal jam; 20bb jam-first (BB dışı flat yok); 12bb altı push/fold.",
    source: "Bölüm 17.8",
    kavram: "stack-modu",
  },
];

export function randomScenario(): Scenario {
  return SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
}
