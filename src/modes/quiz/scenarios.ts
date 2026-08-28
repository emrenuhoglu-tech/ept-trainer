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
    options: ["Evet — suited el, blöf yakıtı", "Hayır — bloker ve bağlantı yok"],
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
    options: ["Blöf yap — potu anında al", "Value bet — fold etmez"],
    correct: 1,
    explain: "Fold etmeyen oyuncuya blöf para yakmaktır; elin iyiyse ödet, kötüyse deneme.",
    source: "Bölüm 1.4",
    kavram: "kime-blöf",
  },
  {
    q: "JTs, KQ, KJ, 97s — bu ellerin rolü nedir?",
    options: ["Büyük pot başlatıcı — 3-bet/stack-off", "Open / flat / BB-defend"],
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
    options: ["Genişlet — solundakiler fold eder", "Daralt — solundakiler cezasız 3-bet eder"],
    correct: 1,
    explain:
      "Solunda büyük stack varsa daralt: seni cezasız 3-bet ederler. Bubble'da 30bb ≠ Day 1'de 30bb.",
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
    options: ["Otomatik 5-bet — AK'yı bırakma", "Ciddiye al — 4-bet blöfü yok"],
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
    options: ["Canavar el — stack'i ortaya sür", "Tek per gibi — büyük pot oynamaz"],
    correct: 1,
    explain: "PLO'da çıplak AA, NLH'deki tek per'dir. Nut potansiyeli yoksa el büyük pot oynamaz.",
    source: "Bölüm 0.10 / 8",
    kavram: "plo-aa",
  },
  {
    q: "25–30bb bandında değer esas nereden gelir?",
    options: ["Kart tamamlamaktan — implied odds", "Fold equity'den — baskı kurarak"],
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
    options: [
      "All-in — SPR düşük, zaten bağlısın",
      "Fold — şişmiş potta tek pair",
      "Call — turn'de her barrele devam",
      "Küçük re-raise — bilgi al",
    ],
    correct: 1,
    explain:
      "17.10 kök hata: pot 40 BB'yi geçtiyse tek pair (AA dahil) = alarm; varsayılan pot kontrolü + bluff-catcher, stack yarışı değil. 17.7: 'pot büyüdü bağlandım' kök hatadır — SPR'nin düşük olması commit nedeni DEĞİLDİR. T♠ 9♠ 8♣ gibi ıslak board'da raise aralığı set/straight/kombo-draw ağırlıklıdır; AA burada tek pair'dir.",
    source: "Bölüm 17",
    kavram: "kök-hata",
  },
  {
    q: "34 BB'le BB'de KK. HJ'deki 38 BB'lik sıkı-pasif oyuncu open yaptı, sen 3-bet ettin, call geldi. Flop Q-J-T rainbow; c-bet attın, call geldi. Turn 9♦ (board Q-J-T-9). İçinden 'check-raise all-in ile inisiyatifi geri alayım' geçiyor. Doğru hat?",
    options: [
      "Check-raise all-in — inisiyatifi al",
      "Büyük bet — straight'ini koru",
      "Check-fold — AK kesin vardır",
      "Check-call — river'da yeniden değerlendir",
    ],
    correct: 3,
    explain:
      "17.10 kök hata korkuluğu: check-raise all-in dürtüsü (KTo dersi) — doğru hat check-call-sonra-değerlendir. Q-J-T-9'da KK ile K-yüksek straight'in var ama her tekli K chop, AK broadway ile seni yener; all-in yalnız seni yenen/chop eden ellerden aksiyon alır. 17.10 chop mekaniği: river'da/turn'de board'u yeniden oku.",
    source: "Bölüm 17",
    kavram: "kök-hata",
  },
  {
    q: "Bubble'a 25 kişi kaldı, stack'in 41 BB. Seni cover eden chip lideri (140 BB) BTN'den üst üste 3. kez open yaptı. BB'de QQ tutuyorsun. Planın ne; 3-bet'ine jam gelirse call var mı?",
    options: [
      "3-bet value; jam gelirse fold",
      "3-bet; jam'e call — QQ atılmaz",
      "Sadece call — potu küçük tut",
      "Fold — chip liderinden uzak dur",
    ],
    correct: 0,
    explain:
      "17.10 ICM eşikleri: QQ, cover'ın {KK+, AK} jam'ine ~%40 equity alır; bubble ICM primi %6–10 ile gereken ~%48–50 → FOLD. 17.9: 'Bubble'da cover'a karşı QQ bile 4-bet-call olmayabilir'; pratik kural tüm stack için KK+. QQ yine de value 3-bet'tir (17.4: BB'den 99+, çok açan reg hedef); hata 3-bet'te değil jam'e call'dadır. Cover'dan tamamen kaçmak da strateji değildir (17.11). (17.4 'cover edene 3-bet YAPMA' BLÖF 3-bet içindir; value 3-bet — QQ, jam'e devam KK+ — serbest.)",
    source: "Bölüm 17 / 17.4",
    kavram: "icm-cover",
  },
  {
    q: "Derin ITM'desin. 3-bet potunda IP olarak TT ile oynuyorsun. Flop 8-6-2 rainbow'da c-bet'ine check-call geldi; turn 8 (board 8-6-2-8) check-check geçti. River A geldi ve rakip POT büyüklüğünde DONK bet attı. İçinden 'overpair'im vardı, A sadece korkutmaca' geçiyor. Kararın?",
    options: [
      "Call — A korkutmaca, TT önde",
      "Raise all-in — blöfü cezalandır",
      "Fold — kötü river, pot donk polarize",
      "Call — pot oddsları ~%33 veriyor",
    ],
    correct: 2,
    explain:
      "17.7 river disiplini: overpair + kötü river → küçük bet'e check-call, BÜYÜK bet'e fold. A, TT için en kötü karttır ve pot donk polarize aralıktır (17.10 online telafi: overbet/pot polarize = bluff-catcher matematiği); 'korkutmaca' rasyonalizasyonu 17.10 kök hata ailesindendir. Derin ITM'de 17.9 gereği ICM > chip-EV, fold daha da netleşir.",
    source: "Bölüm 17",
    kavram: "kök-hata",
  },
  {
    q: "47 BB'le BB'desin; BTN'in tek raise'ine A9o ile call ettin. Board A-9-4 iki kupa: check-raise yaptın, call geldi. Turn 6♥ ile flush tamamlandı; bet attın, rakip RAISE yaptı. 'İki pair'im var, güvendeyim' diyorsun. Kararın?",
    options: [
      "3-bet all-in — draw'ları ödet",
      "Bir kez call — sonra değerlendir",
      "Call — her bet'e call devam",
      "Fold — flush geldi, iki pair çöp",
    ],
    correct: 1,
    explain:
      "17.7/17.10: flush tamamlayan 6♥ turn'ünde, check-raise'ine call etmiş rakipten gelen raise ağırlıkla tamamlanmış flush'tır — iki pair 'güvende' değil, bluff-catcher'a döner. Doğru hat eskalasyon değil call-sonra-değerlendir (17.10 check-raise all-in dürtüsü dersi); jam draw'lara değil yapılmış ellere ödeme yapar. 'Pot büyüdü bağlandım' ise 17.7'daki kök hatadır.",
    source: "Bölüm 17",
    kavram: "kök-hata",
  },
  {
    q: "56 BB, Faz 1 (bubble uzak). HJ'den A9s açtın; BTN'deki 48 BB'lik reg ~3x 3-bet yaptı (postflop OOP kalacaksın). Aksiyonun?",
    options: [
      "Call — suited as, flop'a bak",
      "4-bet bluff — A bloker'ın var",
      "Jam — reg'in 3-bet'ini kır",
      "Fold — OOP devam aralığı dar",
    ],
    correct: 3,
    explain:
      "17.6: open'ına OOP'de 3-bet gelince aralık daralır — KK+ 4-bet, QQ/AK karışık, JJ–TT/AQs call, gerisi fold; A9s 'gerisi'ndedir. 4-bet bluff cephanesi A5s–A4s ile sınırlı ve düşük frekanstır. Call ise 17.11'nin uyardığı asıl tehlikedir: 3-bet call yiyip zayıf elle şişmiş pota girmek.",
    source: "Bölüm 17",
    kavram: "3bet-aralik",
  },
  {
    q: "38 BB stack'le (Mod B) CO'dasın, elinde 66; önün fold. Açar mısın? Açarsan BB'nin ~4x 3-bet'ine planın ne?",
    options: [
      "Aç; 3-bet'e fold — flat yok",
      "Aç; 3-bet'e call — set-mine yap",
      "Açma — 66 open'dan düşer",
      "Aç; 3-bet'e jam — commit",
    ],
    correct: 0,
    explain:
      "17.8 Mod B (30–45 BB): open aralığı korunur (17.3 CO %26 = 44+ dahil) ama flat call daralır — set-mine bozulur ve 3-bet potunda commit eşiği yakındır; 66 ile call plansız şişmiş pot doğurur. Doğru plan: aç, 3-bet'e fold. Jam ise Mod C/D eşiklerini 38 BB'ye taşıyan geçiş hatasıdır (17.11).",
    source: "Bölüm 17",
    kavram: "stack-modu",
  },
  {
    q: "Bubble'a 40 kişi kaldı. BTN'de KQo ile oturuyorsun; BB'de seni cover eden 130 BB'lik chip lideri var, önün fold. Ne yaparsın?",
    options: [
      "Fold — cover'dan uzak dur",
      "Aç; 3-bet'e call — KQo güzel",
      "Aç 2.1–2.3x, sonra 3-bet'e fold",
      "Limp — ucuza flop gör",
    ],
    correct: 2,
    explain:
      "17.9 Faz 2: cover'lara karşı tek fren 'bir kademe dar' oynamaktır; 17.11: 'cover'dan kaçış strateji değil'. KQo, 17.3 BTN %40–44 aralığının daraltılmış halinde bile net open'dır. Asıl disiplin 3-bet gelince: 17.7 — 3-bet'e karşı offsuit broadway (KQo, AJo) çöptür, 'en pahalı güzel görünen el'; cover'dan 3-bet'e bir kademe daha dar devam edilir. Limp 17.3'te yoktur.",
    source: "Bölüm 17",
    kavram: "icm-cover",
  },
  {
    q: "Faz 2, stack'in 60 BB. SB'deki 22 BB'lik stack open yaptı; sen BB'de A5s tutuyorsun (postflop IP olacaksın). En kârlı hat?",
    options: [
      "Call — pozisyonla ucuza oyna",
      "Fold — kısa stack'e bluff yanar",
      "Direkt jam — anında fold'a zorla",
      "3-bet baskı; jam gelirse fold",
    ],
    correct: 3,
    explain:
      "17.9 Faz 2: en kârlı faz — 15–25 BB'lik stacklerin open'larına 3-bet baskısı ana kâr kaynağıdır ve 22 BB tam hedef bölgededir (17.4'ün 'bluff yanar' yasağı 20 BB ALTI içindir). 17.11: baskı bluff'ları A5s/K9s gibi bloker'lı ellerle sınırlanır — A5s ders kitabı adayıdır. Jam'e gelirse 60 BB'lik stack'in yarışmaz; fiyat uymadıkça fold.",
    source: "Bölüm 17",
    kavram: "blof-secimi",
  },
  {
    q: "3-bet potunda OOP'sin, elinde QQ (overpair). Flop 9-7-5 iki maça; check ettin, rakip POT büyüklüğünde bet attı. Flop/turn/river planın ne?",
    options: [
      "Flop raise — overpair'i koru",
      "Flop call — sonra bluff-catcher",
      "Flop call, her sokakta call",
      "Flop fold — overpair yetmez",
    ],
    correct: 1,
    explain:
      "17.10: 40 BB'yi geçen şişmiş potta tek pair (QQ) = alarm; varsayılan pot kontrolü + bluff-catcher, stack yarışı değil. Sokak planı 17.7'dan: turn'de büyük barrel + flush/straight tamamlayan kart → tek pair biter; river'da küçük bet'e check-call, büyük bet'e check-fold. Her sokakta call etmek 'pot büyüdü bağlandım' kök hatasıdır.",
    source: "Bölüm 17",
    kavram: "kök-hata",
  },
  {
    q: "Para yeni girdi (Faz 3), ITM'nin ilk eli. UTG'deki 9 BB'lik stack jam yaptı; sen HJ'de ATo tutuyorsun ve arkanda 3 büyük stack var. Call var mı?",
    options: [
      "Call — ATo kamikaze jam'e önde",
      "İzole re-jam — arkadakileri at",
      "Fold — ATo premium değil, bekle",
      "Call — pot oddsları yetiyor",
    ],
    correct: 2,
    explain:
      "17.9 Faz 3: para girişinde 3–4 el tight — kısalar kamikaze jam atar ve bunlar yalnız PREMIUM ile karşılanır; ATo premium değildir. Arkadaki 3 büyük stack'in uyanma ihtimali denklemi daha da kötüleştirir. Chip-EV'de kârlı görünen call, faz disiplinini (ICM > chip-EV) bozan tipik hatadır.",
    source: "Bölüm 17",
    kavram: "kök-hata",
  },
  {
    q: "Elinde KK (overpair). Flop T-8-4 iki sinekti, c-bet'ine call gelmişti. Turn J♣ ile board T-8-4-J oldu ve sinek flush tamamlandı; rakip 3/4 pot ikinci barrel attı. Devam kriterin ne?",
    options: [
      "Call — bir barrel daha kaldırır",
      "Raise — flush'ı test et",
      "All-in — KK'yı koru",
      "Fold — tek pair burada biter",
    ],
    correct: 3,
    explain:
      "17.7 turn disiplini: 'büyük turn barrel + board dörtlü/flush tamamladı → tek pair biter.' 3/4 pot ikinci barrel bu tanımın tam içindedir ve KK bu board'da tek pair'dir → varsayılan fold. Devam etmek, 17.10'un uyardığı 'şişmiş potta tek pair ile stack yarışı' kök hatasının doğum yeridir; raise/all-in ise tamamlanmış ellere ödeme yapar.",
    source: "Bölüm 17",
    kavram: "kök-hata",
  },
  {
    q: "Mod D'desin: 17 BB, BTN'den ilk giren sensin, elinde A7o. Jam mi, open-fold mu, fold mu?",
    options: [
      "Open 2.1x; 3-bet'e fold",
      "Jam — Nash jam aralığında",
      "Fold — A7o domine olur, riske girme",
      "Open 2.1x; 3-bet'e call",
    ],
    correct: 1,
    explain:
      "17.8 Mod D (12–20 BB): açılışın bir kısmı SB/BTN'den DİREKT jam'dir ve aralık Nash'e yakındır — 17 BB'de BTN'den A7o bu sınıftadır. Open edersen kural nettir: 3-bet'e ya jam ya fold — A7o ile ikisi de kötüdür (domine yarış ya da equity yakma). Fold ise 17.11'deki '20 BB panik jam/donma' geçiş hatasının pasif yüzüdür.",
    source: "Bölüm 17",
    kavram: "stack-modu",
  },
  {
    q: "Derin ITM, 3 masa kaldı. Seninle EŞİT stack'li (45 BB) rakip CO'dan open yaptı; sen SB'de AQo tutuyorsun. 3-bet boyutun ve 4-bet gelirse planın ne?",
    options: [
      "3.8–4.2x 3-bet; 4-bet'e fold",
      "3x 3-bet; 4-bet'e call",
      "Flat call — potu küçük tut",
      "4x 3-bet; 4-bet'e jam",
    ],
    correct: 0,
    explain:
      "17.5 boyut kuralı: OOP (SB) 3-bet 3.8–4.2x — küçük OOP 3-bet ucuz call verir ve plansız şişmiş OOP pot doğurur (kök hata doğum yeri). 17.4: SB'den flat YOK, 3-bet ya da fold; AQo CO open'ına value 3-bet'tir. 4-bet'e devam 17.6'te KK+ çekirdeklidir ve 17.9 Faz 4 'eşitlerden kaç' + 17.7 'aynı stack'le flip = son çare' → AQo fold.",
    source: "Bölüm 17",
    kavram: "boyut",
  },
  {
    q: "River'dayız; elinde AA, pot iyice şişmiş durumda. Board 2-4-5-9-6. Rakip sana check etti ve son söz sende. Bet var mı; varsa boyut ve hedef el ne?",
    options: [
      "Pot bet — Ax ve overpair öder",
      "Overbet jam — iki pair'leri ödet",
      "Check — ödeyen zayıf el yok",
      "1/3 ince value — KK/QQ öder",
    ],
    correct: 2,
    explain:
      "17.10 kök hata korkuluğu: 'AA river jam: senden kötü el ödemiyorsa jam değersiz — check.' 17.7 river kuralı aynı tek soruyu sorar. Board 2-4-5-9-6'da her 3 ve her 7-8 straight yapar; şişmiş potta bet'ine aksiyon verecek aralık ağırlıkla seni yenen bölgededir, kötü eller zaten fold eder. 17.10: şişmiş potta tek pair = pot kontrolü, value üretme yeri değil.",
    source: "Bölüm 17",
    kavram: "kök-hata",
  },
  // === Bölüm 11–16 senaryoları (v5 turnuva-kazanma bölümleri; cevaplar birebir kitap tablolarından) ===
  {
    q: "3-bet potundasın (SPR ~2.5), elinde overpair KK. Flop geldi, tek per'in hâlâ en iyisi görünüyor. İçinden 'şişmiş pot, bağlıyım' geçiyor. Kitabın 'şişmiş pot' ölçüsü nedir?",
    options: [
      "Bahis sayısı — 3-bet'liyse şişmiş",
      "SPR — stack bölü pot oranı",
      "Efektif stack — 100bb+ derin",
      "Board dokusu — ıslaksa şişmiş",
    ],
    correct: 1,
    explain:
      "B11.0: 'Derinde şişmiş potu bet sayısı değil SPR tanımlar.' SPR 1–4 bandında tek per bluff-catcher'dır — büyük pot başlatma. Önce SPR'yi oku, sonra rolü ver; SPR<1 commit, SPR>8 ince value alınabilir ama re-raise gören pot aniden 1–4'e düşer.",
    source: "Bölüm 11.0",
    kavram: "kök-hata",
  },
  {
    q: "River geldi, elinde güçlü tek per (overpair). Rakip POT ÜSTÜ (overbet) bahis attı. Kararın?",
    options: [
      "Call — overbet'te blöf de var",
      "Fold — overbet polarize okunur",
      "Raise — blöfe zorla",
      "Duruma göre — board'a bak",
    ],
    correct: 1,
    explain:
      "B11.2: 'Boyut büyüdükçe rakip aralığı value'ya kayar; overbet = polarize oku, tek per netleşerek bluff-catcher'dan FOLD'a döner. Sadece bloker tutan bluff-catcher call eder.' Panik hero-call buranın hatasıdır (Vaka 1).",
    source: "Bölüm 11.2",
    kavram: "kök-hata",
  },
  {
    q: "River kuru board, top pair iyi kicker'ın var. Karşında rec/station (fold etmeyen) tip; sana check geldi. Bahis var mı?",
    options: [
      "Check — showdown'a git",
      "Küçük value bet — rec öder",
      "Pot bet — maksimum value",
      "Check-raise'e hazırlan",
    ],
    correct: 1,
    explain:
      "B11.3: 'Ödeyen varsa İNCE value BET ET.' Filtre pozitif yönde: 'benden zayıf hangi el ödüyor?' cevabı varsa (rec/station öder), ince de olsa bet. Rec-ağırlıklı Main'de kaçan thin value doğrudan chip kaybıdır.",
    source: "Bölüm 11.3",
    kavram: "boyut",
  },
  {
    q: "Overpair'in var, pot şişmiş. River board 2-4-5'e 6 geldi (2-4-5-6). Rakip büyük bahis attı. Kitabın 'kötü river' kataloğunda bu kart hangi sınıfta ve kararın?",
    options: [
      "Nötr kart — sakin call",
      "Kötü river — büyük pota fold",
      "Korkutmaca — raise ile cezalandır",
      "Küçük value bet — ince ödet",
    ],
    correct: 1,
    explain:
      "B11.4 kötü river kataloğu: 'alt kartların dördüncüsü / kent tamamlayan' (2-4-5'e 6 → 3'lü, kent, set hepsi seni geçmiş). Bu kartlarda küçük pota check-call, büyük pota check-fold; JAM ASLA. (Vaka 3.)",
    source: "Bölüm 11.4",
    kavram: "kök-hata",
  },
  {
    q: "Sert baloncuk. Seni COVER eden büyük stack geniş bir BvB jam attı (~22bb efektif), elinde A9s. Call?",
    options: [
      "Call — A9s suited, önde",
      "Fold — cover + baloncuk eşiği dar",
      "Jam'i sen yap — inisiyatif al",
      "Duruma göre — spota bak",
    ],
    correct: 1,
    explain:
      "B12.1 Emre kalibrasyonu (2026-08-10): sert baloncuk + seni cover eden geniş jam, ~22bb → CALL = 88+ · AJs+ · AQo; A9s/KQs FOLD. Sürücü: cover + baloncuk = kaybedersen bust €0, marjinal edge tournament life'a değmez (A9s ters-domine). İLK soru 'baloncuk mu' değil 'cover ediliyor muyum'.",
    source: "Bölüm 12.1",
    kavram: "icm-cover",
  },
  {
    q: "Baloncuk, 22bb BB'desin. Seni cover ETMEYEN kısa bir stack (senden kısa; kaybetsen de bust olmazsın) geniş 13bb BTN jam attı; elinde KTo. Refleksin 'range yetersiz, fold'. Doğrusu?",
    options: [
      "Fold — baloncukta KTo çöp",
      "Call — cover edilmiyorsun",
      "Re-jam ile karşılık ver",
      "Yalnız premium ile call",
    ],
    correct: 1,
    explain:
      "B12.1 drill eklentisi (2026-08-10): leak'in yapışkan yarısı COVER EDİLMEYEN tarafta fold refleksi. Cover edilmiyorsan (jammer senden kısa) A9s ve KTo CALL — KTo ~%54 vs gereken ~%44. Cue: 'jam'e fold basmadan önce cover ediliyor muyum? Hayır ise call sandığından çok geniş.'",
    source: "Bölüm 12.1",
    kavram: "icm-cover",
  },
  {
    q: "FT, herkes birbirini kilitlemiş (masada senden kısa YOK, sen fiilen en kısasın, <15bb). 'ICM'de daralt' refleksin devrede. Doğru oyun?",
    options: [
      "Daralt — ICM her zaman daraltır",
      "Genişlet — kimse seni ödemez",
      "Katlan, bust'ları bekle",
      "Yalnız premium ile jam",
    ],
    correct: 1,
    explain:
      "B12.5 kısa stack ICM istisnası: '⚠ ICM'de daralt HER ZAMAN doğru değil. Herkes kilitliyken kısa stack'in doğru oyunu GENİŞLETMEKtir — kimse seni ödemek istemez.' 12.2: 'fiilen en kısasın → jam aralığını genişlet, katlanma.'",
    source: "Bölüm 12.5 / 12.2",
    kavram: "icm",
  },
  {
    q: "Bubble, sen büyük (cover eden) stack'sin. Masada kilitlenmiş bir orta stack ve birkaç kısa var. En kârlı hedefin kim?",
    options: [
      "Kısa stack'ler — kolay fold",
      "Kilitlenmiş orta stack — en kârlı",
      "Diğer büyük stack — çok chip'te",
      "Kimse — bubble'da bekle",
    ],
    correct: 1,
    explain:
      "B12.4 bubble av haritası: 'kilitlenmiş orta stack masadaki en kârlı hedeftir.' Büyük stack olarak onu soy (open genişlet + 3-bet baskısı). Bubble savunma değil, DOĞRU tarafındaysan turnuvanın en yüksek chipEV penceresidir.",
    source: "Bölüm 12.4",
    kavram: "icm",
  },
  {
    q: "3+ kişilik (multiway) potta top pair'in var, flop'a birkaç kişi geldi. HU refleksinle value düşünüyorsun. Kitabın multiway kuralı?",
    options: [
      "Value bet — top pair her zaman value",
      "Bir sınıf düşer — check/pot kontrol",
      "Fold — multiway'de top pair çöp",
      "Overbet — kalabalığı at",
    ],
    correct: 1,
    explain:
      "B13.1 HU→3+ yollu geçiş: multiway'de top pair 'bir sınıf düşer → check/pot kontrol.' B13.0: 'her ek oyuncu value'nun barını YÜKSELTİR.' C-bet frekansı çöker (sadece güçlü value + gerçek nut-draw).",
    source: "Bölüm 13.1",
    kavram: "multiway",
  },
  {
    q: "Multiway potta blöf düşünüyorsun; elinde iyi bir bloker var. Pot kaç yollu olduğunda blöf hâlâ meşru? (kitabın 4. kriteri)",
    options: [
      "4+ yolluda bile blöf — bloker yeter",
      "3 yolluda nut-bloker; 4+ yolluda yok",
      "Her multiway'de standart blöf serbest",
      "Yalnız HU'da blöf yapılır",
    ],
    correct: 1,
    explain:
      "B13.3 dördüncü kriter: 'rakip sayısı = blöfün geçmesi gereken kapı sayısı.' HU=üç kriter, 3-yollu=sadece nut-bloker semi-bluff, 4+ yollu=YOK. B1.4 'kime blöf yapılmaz' listesine 'multiway pot (kim olursa olsun)' eklenir.",
    source: "Bölüm 13.3",
    kavram: "multiway",
  },
  {
    q: "40–60bb bandındasın (köprü band), 3-bet düşünüyorsun. Kitabın blöf 3-bet yönü ne?",
    options: [
      "Blöfü genişlet — derinlik var",
      "Blöfü neredeyse kes — canlıda fold yok",
      "Standart B4 aralığı — değişmez",
      "Yalnız suited connector'la blöf",
    ],
    correct: 1,
    explain:
      "B14.1: '40–60bb: BLÖF neredeyse kes — canlıda kimse fold etmiyor.' Kural: 3-bet edeceğin el 4-bet/jam'e devam edebilmeli; edemiyorsa flat (IP/BB) ya da fold. '3-bet edip fold' yapısı 60bb altında zayıflar, 40bb'de biter (commit).",
    source: "Bölüm 14.1",
    kavram: "3bet-aralik",
  },
  {
    q: "€25K PLO HR, elinde 30bb ve çıplak AA. NLH refleksin '30bb altı → Bölüm 5 → 3-bet=JAM' diyor. PLO'da geçerli mi?",
    options: [
      "Evet — 30bb her oyunda jam bandıdır",
      "Hayır — PLO'da jam yok, pot-raise",
      "Fold — 30bb PLO'da AA oynanmaz",
      "Limp-call — ucuza flop gör",
    ],
    correct: 1,
    explain:
      "B15.1/15.0: 'B5'in NLH jam/fold refleksi PLO'da geçersiz — pot-limit'te jam yok, max pot-raise var.' 25–60bb PLO'da çıplak AA postflop oynamaz; değeri pre-commit'tedir (3-bet → SPR≤1). '30bb PLO ≠ 30bb NLH.'",
    source: "Bölüm 15.1 / 15.0",
    kavram: "plo",
  },
  {
    q: "Kısa PLO (<25bb), pot-raise yaptın. Bunun anlamı ne?",
    options: [
      "Standart raise — devam kararı ayrı",
      "Pot-raise = commit demek",
      "Bilgi raise'i — ucuz test",
      "Fold'a hazır ol — ucuz çıkış",
    ],
    correct: 1,
    explain:
      "B15.1: 'Kısa PLO'da pot-raise = commit. Aralığını flop'ta stack ortaya girecek varsayımıyla seç: çift-suited rundown, güçlü AAxx; dangler'lı her şeyi KES.' B15.2: PLO'da commit kararı flop'ta değil, potu şişirdiğin sokakta verilir.",
    source: "Bölüm 15.1 / 15.2",
    kavram: "plo",
  },
  {
    q: "SHR Day 1'de bust ettin, 5 dakika geçti, tilt hafif. Hemen re-entry (aynı event'e ikinci mermi) mantıklı mı?",
    options: [
      "Evet — hemen gir, momentum kaybetme",
      "Hayır — 20 dk bekle, karar kartını doldur",
      "Başka event'e geç — kafa dağılsın",
      "Günü bitir, yarın karar ver",
    ],
    correct: 1,
    explain:
      "B16.1: 'Serinin en pahalı tek kararı bustout sonrası 5 dakikada verilen re-entry.' Zorunlu bekleme: bustout → 20 dk masadan uzak → karar kartını doldur. SHR max 1 bullet (re-entry yok); tilt hâlinde otomatik re-entry = şişmiş 'seri yatırımında' tek bullet'a value muamelesi.",
    source: "Bölüm 16.1",
    kavram: "kök-hata",
  },
  {
    q: "Gün sonu otopsisi: bir eli kitabın kuralına UYARAK oynadın ama kaybettin (doğru jam, kötü sonuç). Yarın o spotta aralığını değiştirir misin?",
    options: [
      "Evet — kaybettim, daralt",
      "Hayır — aralık değişmez",
      "Duruma göre — sonuca bak",
      "Aralığı genişlet — daha agresif ol",
    ],
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
    options: ["Güçlü — çift as var, premium", "Zayıf — dangler, üç kartlı el"],
    correct: 1,
    explain:
      "Dördüncü kart bağlantısızsa el pratikte üç kartlıdır; AA72 oynanmaz. Öncelik rundown ve çift suited ellerde (JT98, wrap + flush draw).",
    source: "Bölüm 8.2",
    kavram: "plo",
  },
  {
    q: "PLO'da flopta top two pair yaptın, rakip şişmiş pota itiyor. Stack-off doğru mu?",
    options: ["Evet — top two güçlü, stack-off", "Hayır — iki per nut değil"],
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
    options: ["70bb'de biter — daha derinde sürer", "60bb'de zayıflar, 40bb'de commit"],
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
    options: ["Her zaman 3-bet — inisiyatif al", "El, 4-bet/jam'e devam edebilmeli"],
    correct: 1,
    explain:
      "Bantta 3-bet giderek commit'e yaklaşır; 3-bet edeceğin el 4-bet/jam'e devam edebilmeli. Edemiyorsa IP/BB'de dar flat ya da fold. Offsuit broadway ve dominate edilebilir eller bu bantta düşer.",
    source: "Bölüm 14.1",
    kavram: "3bet-aralik",
  },
  {
    q: "Ante'li yapıda BB her elde defend ediyor. Neden yine de küçük (2.2–2.5x) açarsın?",
    options: ["Büyük aç — BB'yi fold etmeye zorla", "Küçük aç — ucuz pozisyon satın al"],
    correct: 1,
    explain:
      "Küçük open BB'nin call'ını engellemek için değil; ucuz pozisyonel savaş satın alır. Ante potu şişirdiği için küçük open bile potu almaya değer; kâr preflop fold'dan değil postflop pozisyondan gelir. Büyüt: pasif saha fold etmiyorsa / limp isolate / 25–35bb SPR.",
    source: "Bölüm 4.8 / 3",
    kavram: "boyut",
  },
  {
    q: "100bb'de birinin open'ına karşı elinde KQs var — open range'inin göbeğinde bir el. 3-bet mi?",
    options: ["3-bet — güçlü el, baskıyı kur", "Flat call — range'in ortası"],
    correct: 1,
    explain:
      "3-bet range çoğu pozisyonda polarize: value (QQ+, AK) + bluff (A5s–A2s), ortası flat. KQs/99/AJs open'ın göbeğinde ama 3-bet'te yok — 100bb+ flat call. İstisna: BB vs SB lineer, orada KQs value'ya döner.",
    source: "Bölüm 4.3",
    kavram: "3bet-aralik",
  },
  {
    q: "TT'n var, single-raised pot, flopta SPR ~8. His 'pot büyüdü, committed'im' diyor. Doğru mu?",
    options: ["Evet — pot büyüdü, committed'im", "Hayır — SPR 8'de tek pair'le pot yok"],
    correct: 1,
    explain:
      "Committed olmak his değil, orandır. SPR = en küçük kalan stack ÷ pot. SPR 3+ ise tek pair'le büyük pot yok; 8'de çift+draw bile jam için marjinal, tek pair net fold. Şişmiş 3-bet potta (SPR 1–4) tek pair bluff-catcher'a düşer — büyük pot başlatma (B11.0); commit yalnız SPR<1.",
    source: "Bölüm 11.0",
    kavram: "kök-hata",
  },
  {
    q: "Day 2, bubble yaklaşıyor. Masayı nasıl kullanırsın?",
    options: ["Herkese eşit baskı yap, ayrım yapma", "15–25 BB'likleri hedefle"],
    correct: 1,
    explain:
      "B17.9 Faz 2 en kârlı fazdır: bubble yaklaşınca 15–25 BB'likler taş kesilir — open'larına 3-bet, blind'lerine open, c-bet'lerine float. Tek istisna seni COVER edenler (bir kademe dar; cover'a karşı QQ bile 4-bet-call olmayabilir). 'Her iki kartla aç' değil — B17.11 geniş açmayı 15–25 BB'lerin BB'sine %60'la sınırlar, bluff 3-bet'i bloker'lı ellere (A5s, K9s) kısar.",
    source: "Bölüm 17.9 / 17.11",
    kavram: "rakip-okuma",
  },
  {
    q: "3-bet potta SPR ~3, top pair iyi kicker'ın var. Stack-off doğru mu? Ya single-raised potta (SPR 8+)?",
    options: ["Stack-off doğru — düşük SPR'de commit", "Stack-off yok — commit yalnız SPR<1"],
    correct: 1,
    explain:
      "Kitap B11.0: SPR 1–4 (100bb 3-bet pot, ~3 dahil) tek pair BLUFF-CATCHER — büyük pot BAŞLATMA; SPR 1–4'te stack-off tam olarak kök hatadır (B17.10: şişmiş potta tek pair, AA dahil, bluff-catcher). SPR 8+'da ince value alınır ama stack-off yok (erken bluff-catcher'a düşürüp value kaçırmak da hata — B11.0 satır 608); re-raise gelirse pot 1–4 bandına düşer. Tek pair commit YALNIZ SPR<1'de.",
    source: "Bölüm 11.0 / 17.10",
    kavram: "kök-hata",
  },
  {
    q: "50bb'de A5s ile 4-bet bluff cephaneliğin var. 40bb'ye düşünce ne değişir?",
    options: ["Aynı kalır — playbook değişmez", "4-bet bluff biter, EP daralır"],
    correct: 1,
    explain:
      "Stack trigger: 60bb+ tam playbook; 40bb'de 4-bet bluff'ı öldür ve EP'yi iki kademe daralt çünkü 4-bet zaten commit; 30bb Mod C resteal jam; 20bb jam-first (BB dışı flat yok); 12bb altı push/fold.",
    source: "Bölüm 17.8",
    kavram: "stack-modu",
  },
  {
    q: "IP, tek-raise'li pot, kuru board A-7-2 rainbow. Aralığının tamamıyla flop planın?",
    options: ["2/3 pot polarize c-bet", "1/3 pot yüksek frekans range-bet"],
    correct: 1,
    explain:
      "Kuru yüksek-kart board = range avantajı sende (PFR). Küçük boyut (1/3) yüksek frekans range-bet; ucuz, bilgi taşımaz, river'da check-fold lüksünü korur. 2/3 polarize ıslak board içindir.",
    source: "Bölüm 18.2",
    kavram: "c-bet",
  },
  {
    q: "IP, 3-bet potu, KK, ıslak board 9-8-7 iki renk (SPR ~3). C-bet mi, boyut ne?",
    options: ["Check — board çok tehlikeli, pot kontrol", "2/3 value bet — draw'ları ücretlendir"],
    correct: 1,
    explain:
      "B18.3: ıslak board'da value (overpair) 2/3 basar — draw'ları ücretlendir, değer al. AMA düşük SPR bir COMMIT gerekçesi DEĞİL: raise gelirse KK bluff-catcher'a döner (B11.0: SPR 1–4 tek pair, overpair dahil, büyük pot başlatma değil), stack-off yok; river planını bet atmadan kur (B11.1). Check pasif oynar, value kaçırır.",
    source: "Bölüm 18.2 / 18.3",
    kavram: "c-bet",
  },
  {
    q: "OOP (SB'den 3-bet, BTN call), AK, kuru board Q-6-3 rainbow — hiçbir şey yakalamadın. Hat?",
    options: ["Havayla 1/3 pot range c-bet at", "Check — sonra call ya da fold"],
    correct: 1,
    explain:
      "OOP havayla otomatik range-bet TUZAK (B18.5): seni pozisyonsuz şişmiş pota sokar. AK'da iki overcard + backdoor equity var; check-call ya da check-fold hattı station'a value kesmez ama kendini bloated pota atmaz.",
    source: "Bölüm 18.5",
    kavram: "c-bet",
  },
  {
    q: "3 yollu pot, IP, top pair iyi kicker (AJ), board J-9-4 iki renk. Frekans/boyut nasıl değişir?",
    options: ["HU gibi 2/3 pot value bet", "Frekans çöker — küçük value/kontrol"],
    correct: 1,
    explain:
      "Multiway'de flop c-bet frekansı çöker (B13.1). Top pair HU'da value; 3 yollu bir sınıf düşer → pot kontrol, küçük value ya da check. İki oyuncuyu birden geçmesi gereken value barı yükselir; havayla range-bet yok.",
    source: "Bölüm 18.6 / 13.1",
    kavram: "c-bet",
  },
  {
    q: "BB savundun, flop 7-6-4 iki renk, PFR karşında. Donk bet mi check mi?",
    options: ["Check — donk her zaman telegraf eder", "Küçük donk — board avantajı sende"],
    correct: 1,
    explain:
      "Donk varsayılanı check'tir AMA istisna board avantajı: düşük-bağlantılı 7-6-4 senin savunma aralığına (iki-per/set/kent) PFR'ın yüksek-kart aralığından çok daha fazla çarpar → küçük donk equity'sini fiyatlar. Yüksek board'da (A-K-x) donk atma.",
    source: "Bölüm 19.1",
    kavram: "donk",
  },
  {
    q: "IP PFR, flop A-9-4, KJ ile check-back ettin. Turn K (top pair). Bet mi, adı ne?",
    options: ["Yine check — inisiyatif almak riskli", "Gecikmiş c-bet — turn'de geliştin"],
    correct: 1,
    explain:
      "Gecikmiş c-bet: flop'u check-back edip turn'de bir SEBEP çıkınca bet. Turn K ile top pair'e geliştin (sebep = geliştin). Sebepsiz turn bet flop give-up'ını bloat'a çevirir; sebepli bet inisiyatifi alır.",
    source: "Bölüm 19.2",
    kavram: "gecikmis-cbet",
  },
  {
    q: "OOP, flop check-check gitti (PFR capped), turn kartıyla QJ gutshot'a döndü. Probe bet mi?",
    options: ["Check — OOP'de bet riskli", "Probe bet — PFR capped, equity var"],
    correct: 1,
    explain:
      "Flop check-check → PFR güçlüyle bet ederdi, check-back = capped aralık. OOP turn probe ile capped'a inisiyatifi al; gutshot equity + fold equity var. Değil: PFR tuzağı / kötü turn / check-call'la realize edilecek yapılı el.",
    source: "Bölüm 19.3",
    kavram: "probe",
  },
  {
    q: "IP, flop herkes check, turn sana yine check geldi, elinde ace-high (SD value düşük). Stab mı check mi?",
    options: ["Check — ace-high showdown'a gitsin", "Stab — küçük bet, potu al"],
    correct: 1,
    explain:
      "Stab en düşük riskli inisiyatif: sana check geldiyse herkes zayıflık gösterdi. Ace-high'ın showdown value'su zayıf, en iyi kullanımı fold equity → küçük stab. Değil: multiway / check-raise villain / board checker'lara çarpıyor.",
    source: "Bölüm 19.4",
    kavram: "stab",
  },
  {
    q: "IP, kuru flop, villain c-bet, sende backdoor flush + overcard. Float call ettin. Turn planın?",
    options: ["Turn ne gelirse call ile devam", "Check gelirse bet, 2. fıçıda bırak"],
    correct: 1,
    explain:
      "Float turn'de biter: check gelirse bet atıp al (villain turn'ü bıraktı = capped), 2. fıçı gelirse bırak — sen check için float'ladın, iki fıçı ödemek için değil. Call-call sürüklenmesi float değil kök hatadır.",
    source: "Bölüm 19.5",
    kavram: "float",
  },
  {
    q: "OOP river, ince bluff-catcher, villain agresif reg + kuru/capped board. Blocker-bet mi check-call mı?",
    options: ["Her durumda check-call — varsayılan hat", "Küçük blocker-bet — dar pencere"],
    correct: 1,
    explain:
      "Default 11.2 (check-call/check-fold). Blocker yalnız capped+agresif villain + ince bluff-catcher + kuru river + küçük boyutta açılır (villain check gelseydi polarize basardı). Villain STATION ise pencere kapanır → check-call; station indirim yapmaz, raise ederse batarsın.",
    source: "Bölüm 19.6",
    kavram: "blocker-bet",
  },
  {
    q: "chipEV'de %37.5 gereken bir call; bubble'da seni COVER eden bir stack jam etti. A9s call mı?",
    options: ["Call — %37.5 eşiğini geçiyor, yeter", "Fold — prim eşiği ~%47'ye çıkar"],
    correct: 1,
    explain:
      "Cover edende risk primi en yüksek: chipEV %37.5 eşiği ICM'de ~%47'ye çıkar (temsili). A9s bu eşiği geçmez → fold. Prim = 'cover ediliyorsan daralt'ın sayısı.",
    source: "Bölüm 20.2",
    kavram: "risk-premium",
  },
  {
    q: "Aynı bubble, ama jam eden seni COVER ETMİYOR (sen daha derinsin, kaybetsen 0'lanmıyorsun). Prim ve aralık?",
    options: ["Yine daralt — bubble = sıkı", "Prim ~0 → geniş call"],
    correct: 1,
    explain:
      "Cover edilmiyorsan kaybetsen de bust olmazsın → risk primi ~0/ihmal → GENİŞ call. Bubble'ı otomatik 'sıkı' sanmak B12.4 leak'i; asıl soru cover mı.",
    source: "Bölüm 20.3",
    kavram: "risk-premium",
  },
  {
    q: "FT'de sen chip lidersin, kısa stack sana jam etti (kaybetsen de lidersin). Primin ne, call aralığın?",
    options: ["Yüksek prim — daralt", "Prim düşük — call aralığı genişler"],
    correct: 1,
    explain:
      "Kaybetsen de elenmiyorsun (lidersin) → senin risk primin düşük → geniş call. Cover EDEN sensin, prim baskısı kısa stack'te. Lider = cover eden derin, agresyon serbest.",
    source: "Bölüm 20.3",
    kavram: "risk-premium",
  },
  {
    q: "Bubble, seni COVER eden villain'e karşı river; elinde ince bir bluff-catcher, villain küçük bet. chipEV'de call'du. ICM'de?",
    options: ["Call — chipEV'de call'du", "Fold — bir kademe indir"],
    correct: 1,
    explain:
      "ICM baskısında (cover ediliyorken) her agresif hattı bir kademe indir; call-off en ICM-vergili aksiyondur (fold equity yok, tüm chip showdown'a bağlı). İnce bluff-catcher hero-call'dan fold'a düşer. Villain cover ETMESEYDİ call'a dönerdi.",
    source: "Bölüm 21.1",
    kavram: "postflop-icm",
  },
  {
    q: "FT'de sen chip lidersin; orta stack flop check-call, turn'de sana check geldi, elin iyi ama nut değil. Kademe hangi yöne?",
    options: ["Bir kademe indir — check geç", "Bir kademe yukarı — bet at"],
    correct: 1,
    explain:
      "Cover EDEN sensin (kaybetsen de lidersin) → primin düşük/negatif → bir kademe yukarı. Chip lider baskıyı satar; rakip için her pot bust riski. 'Bir kademe indir' cover EDİLENin kuralı; sen tersini yaparsın.",
    source: "Bölüm 21.3",
    kavram: "postflop-icm",
  },
  {
    q: "Cover edildiğin spotta villain ⅔ pot bet; MDF ~%60 diyor ama para sıçraması çok yakın, elin savunma sınırında. Fold leak mi?",
    options: ["Leak — MDF altında fold", "Leak değil — MDF ICM'de çöker"],
    correct: 1,
    explain:
      "MDF bir chipEV kavramıdır (cash + ICM-baskısız MTT); para sıçraması yakınken çöker. Cover edildiğin ICM spotunda over-fold exploit değil doğru oyundur — villain'in blöf çalması ICM primini geri ödemez.",
    source: "Bölüm 21.4",
    kavram: "postflop-icm",
  },
  {
    q: "Bubble yeni patladı, orta stack'sin. Döngü içinde chipEV'ye en yakın (prim en düşük) faz hangisi ve ne yaparsın?",
    options: ["FT yaklaşımı — daral ve bekle, koru", "Bubble patladı — gaz ver, biriktir"],
    correct: 1,
    explain:
      "Bubble patlayınca min-cash garanti, sıradaki sıçramalar stack değerine göre küçük → prim döngüde en düşük, chipEV'ye en yakın pencere. Gaz ver, biriktir. FT yaklaşımı tam tersi (ikinci fren).",
    source: "Bölüm 22.1",
    kavram: "icm-zaman",
  },
  {
    q: "Bubble, senden kısa (seni cover ETMEYEN) bir stack jam etti; seni cover eden lider de masada. Kısa jam'e call eşiğin?",
    options: ["Bubble sıkı — ikisine de daralt", "Kısa jam'e geniş, lidere dar"],
    correct: 1,
    explain:
      "Öncelik kuralı: faz primi yalnız seni COVER edenlere. Cover ETMEYEN kısa jam'e prim her fazda ~0 → bubble'da bile geniş call (B20). Seni cover eden lidere karşı prim tavanda → saygı, daral. Faz tavanı, cover haritası kime'yi belirler.",
    source: "Bölüm 22.2",
    kavram: "icm-zaman",
  },
  {
    q: "Kısa stack'sin, bubble, cover baskısı var. Jam aralığın mı call aralığın mı daralır; 'en iyi ellerle gir' hangisi için doğru?",
    options: ["Jam daralır — premiumla it", "Call daralır, jam aralığı kalır"],
    correct: 1,
    explain:
      "B17: kısa stack'in unopened JAM aralığı fold equity ile geniş kalır (cover edene bir tık sıkılır); sert daralan CALL aralığıdır. Jam'lemesi gereken eli fold etmek = short-nit leak (blind-out). 'Paraya fold'la girme' yalnız uç spotta (başka mikro bust olurken).",
    source: "Bölüm 22.4",
    kavram: "icm-zaman",
  },
  {
    q: "Station her flop/turn call etti, river'da KÜÇÜK lead aldı; elinde iyi top pair. Call mı fold mu? Ya raise etseydi?",
    options: ["Küçük lead ≈ nuts → hemen fold et", "Küçük lead'e call; raise'e fold"],
    correct: 1,
    explain:
      "Station river'ı zayıf/merged ellerle sık donk'lar → küçük lead'e iyi top pair çoğu zaman call. Ama pasif station'ın RAISE'i ≈ nuts → orada ince value fold. Lead ≠ raise; boyut ve aksiyon ayrımı kritik.",
    source: "Bölüm 23.5",
    kavram: "saha-okuma",
  },
  {
    q: "Bubble, rakip belli bir rec/whale, ICM umursamıyor. Steal blöfü mü value mı — ve cover ediliyorsan call-off'un değişir mi?",
    options: ["Baskı sat — bubble'da fold eder", "Value al — call-off yine dar"],
    correct: 1,
    explain:
      "ICM-körü rec fold etmez → baskı satma, geniş value al. Ama kendi risk primin (B17/B20/B21) rakip ICM-körü olsa da bakidir: sapma value BET'i genişletmek, cover'lıyken call-off/stack-off gevşetmek DEĞİL. Whale'e bile cover edilirken hafif stack-off yok.",
    source: "Bölüm 23.3",
    kavram: "saha-okuma",
  },
  {
    q: "Nit UTG açtı, sende orta el (KJo). Exploit yön ne — ve neden onun pot'larını çalarsın?",
    options: ["Call/3-bet — aralığı geniş", "Fold; sonraki pot'larını sık çal"],
    correct: 1,
    explain:
      "Nit açılışı/agresyonu nadiren blöf, nuts'a yakın → orta ele saygı, fold (bluff-catch bırak). Exploit onun fold-eğiliminde: pot'larını sık çal, steal'e fazla fold eder. Hata yönü (fazla fold) → çal.",
    source: "Bölüm 23.1",
    kavram: "saha-okuma",
  },
  {
    q: "€5K Main, derin stack, erken seviye; marjinal bir flip (ince +EV) önünde. AL mı PAS mı, ne belirler?",
    options: ["Al — her +EV spot alınır, kaçırma", "Pas — edge'in var, bekle"],
    correct: 1,
    explain:
      "Edge premium: soft sahada + derin stack'te edge'in büyük → marjinal flip'i variance'a çevirme, pas geç. İki soru belirler: senin edge'in (soft=büyük) + derinlik (derin=outplay alanı). Sonra edge'in daha güvenli EV üretir.",
    source: "Bölüm 24.2",
    kavram: "edge-premium",
  },
  {
    q: "€100K SHR, dünyanın en iyileri, sığ-orta; AYNI marjinal +EV flip. Karar değişir mi?",
    options: ["Yine pas — flip variance'tır", "Değişir, al — edge'in yok"],
    correct: 1,
    explain:
      "Edge yoksa (tough saha, underdog) beklemenin primi düşük → ICM düşülünce hâlâ +$EV olan marjinal spotu al, flip dahil. Aynı el, iki turnuvada zıt karar; fark senin edge'in. (-EV yine asla.)",
    source: "Bölüm 24.5",
    kavram: "edge-premium",
  },
  {
    q: "Orta-kısa stack: seni büyükler cover ediyor ama sen de altındakileri cover ediyorsun; edge yok, yapı hızlı. Pasif call-flip mi, jam mı?",
    options: ["Pasif call-flip — chip lazım", "Fold equity'li jam — FE spotu"],
    correct: 1,
    explain:
      "Gerçek prim-çatışması: cover ediliyorsun (risk primi pas) + edge yok/hızlı (edge primi bekleme). Çözüm pasif flip değil, fold-equity'li JAM (B17: jam kalır, fold equity var). -EV asla; +EV FE spotunu al.",
    source: "Bölüm 24.4",
    kavram: "edge-premium",
  },
  {
    q: "River'da büyük bet; 'bu adam blöfçü' hissediyorsun ama aksiyon dizisi (bet-bet-bet, polarize) value'ye uyuyor. Hangi gerekçe?",
    options: ["His kazanır — hero-call yap", "Kanıt kazanır — fold"],
    correct: 1,
    explain:
      "Kanıt (aksiyon dizisi, polarize boyut) hikayeyi ('blöfçü gibi hissediyorum') yener. Kanıt value diyorsa fold; his değil kanıt. Hikaye seni gereksiz hero-call'a sürükler — default B11.2.",
    source: "Bölüm 25.1",
    kavram: "kafamdaki-hikaye",
  },
  {
    q: "Bad beat yedin, eller hızlanıyor, telefona sarıldın. Sıradaki büyük hero-call kararında ÖNCE ne yaparsın?",
    options: ["Önce kanıt-hikaye testini uygula", "Önce fiziksel hamle, sonra test"],
    correct: 1,
    explain:
      "Sıralama B16'nın: tilt belirtisinde (hızlanma/telefon/kovalama) önce yarayı etiketle + fiziksel hamle (B16.2), çünkü tilt'liyken testi bile güvenilir yapamazsın. Yara sakinleşince kanıt mı hikaye mi testine geç.",
    source: "Bölüm 25.2",
    kavram: "kafamdaki-hikaye",
  },
  {
    q: "Gün sonu otopsi: cover EDİLİYORken hero-call yaptın, blöfü yakaladın, pot senin. Kararı nasıl puanlarsın?",
    options: ["İyi karar — kazandım, okuma tuttu", "Leak — cover'lıyken fold olmalıydı"],
    correct: 1,
    explain:
      "Sonuç-bağımsız puanlama (B16.3): kural neydi + uydum mu. B21.2 → cover ediliyorken hero-call fold olmalıydı, kanıt olsa bile. Kurala uymadın → LEAK; kazanmak (iyi sonuç) kötü kararı gizler. Puanı sonuç değil kural belirler.",
    source: "Bölüm 25.3",
    kavram: "kafamdaki-hikaye",
  },
  {
    q: "68bb, UTG+1'den AQs açtın, HJ call, 287bb'lik chip leader 3-bet. Fold / call / 4-bet — ve 4-bet seçersen 5-bet'e planın ne?",
    options: [
      "4-bet; jam gelirse pot oranıyla call",
      "Fold ya da call; 4-bet edersen 5-bet'e fold",
      "Jam — 68bb'de AQs OOP commit eli",
    ],
    correct: 1,
    explain:
      "Tercih sırası: (1) fold — UTG+1, OOP, 287bb'lik rakip; (2) call, flopta pot kontrolü; (3) 4-bet edildiyse 5-bet'e fold — 4-bet yalnız fold edebileceğin miktarla yapılır. Call hiçbir sıralamada yok: chip leader'ın 5-bet jam aralığı dar (KK+, belki AK), kaybedecek şeyi yok, ona karşı 4-bet zaten gereksizdi. Bu el sınıfı hiçbir derinlikte 5-bet jam'e call etmez.",
    source: "Bölüm 7 / Vaka 8",
    kavram: "stack-modu",
  },
  {
    q: "Az önce stack'inin %30'unu kaybettin. Sonraki elde AQs ile 4-bet ettin, 5-bet jam geldi; pot oranı 2,2:1 (gereken ekvite %31). Karar?",
    options: ["Call — 2,2:1 var, %31 ekvite yeter", "Fold — bu el sınıfına pot oranı yetmez"],
    correct: 1,
    explain:
      "5-bet jam aralığına (QQ+/AK) karşı AQs ~%30, KK'ya karşı %18 — sınırda bile değil; AQ high-card elidir, potun büyüklüğü sınıfını değiştirmez. Üstelik 5-el kuralı devrede: büyük kayıptan sonraki 5 elde yalnız QQ+/AK ile preflop all-in, 4-bet yapılmış her el 5-bet'e fold. Gerçek bust (2 dakika sonra, stack'in %70'i).",
    source: "Bölüm 16.5",
    kavram: "kök-hata",
  },
  {
    q: "88 ile 3-bet ettin, CO'dan 28bb cold 4-bet jam geldi, açan oyuncu (UTG+1) jam'i CALL etti. Pot oranı 2,7:1. 88 ile ekviten kaç, açanın call'ı neyi değiştirdi?",
    options: [
      "~%45 — açanın call'ı jam aralığını genişletir",
      "~%33 three-way — açanın call'ı ekviteni düşürür",
    ],
    correct: 1,
    explain:
      "Villain'ler AQs (jam) ve AK (call): 88 three-way ~%33 ile önde ama gereken %27'ye yakın — chip-EV marjinal, hata değil; fold da savunulabilirdi. Tehlike sinyali: açanın 31K'yı senden önce call etmesi jam'in aralığını genişletmez, senin ekviteni düşürür; sadece pot oranı büyür. Her call'da önce pot odds, sonra rakip aralığı.",
    source: "Bölüm 7 / Vaka 9",
    kavram: "3bet-aralik",
  },
  {
    q: "PLO-6 cash: CO'dan Jh As 9s 2c 8s 5c ile açtın, BTN pot 3-bet. Karar?",
    options: ["Call — A ve üç spade var, flop'a bak", "Fold — dangler, tek suit, A bağlantısız"],
    correct: 1,
    explain:
      "3-bet'e call yalnız nut potansiyeli olan eller: AAxx, KK ds, bağlı 4+ rundown + suit; bu elin (2c dangler, tek suit) 3-bet potunda nut yapma yolu yok. Dangler'lı el 3-bet'e fold — L1'in tipik giriş kapısı: flop'ta pair ile call, turn'de pot bet'e fold (142 el, -$43.9K).",
    source: "Bölüm 15.5",
    kavram: "plo",
  },
  {
    q: "PLO-6 cash, CO, 100bb. Hangisi açılır? (a) Tc 5h 6c 3c 8d Ac  (b) 9h 8h 7c 6c Ad Kd  (c) Kh Kc 7d 2s 9h 4c",
    options: ["(b) ve (c) — KK de açılır", "Sadece (b) — ds rundown + AK"],
    correct: 1,
    explain:
      "CO aralığı = UTG + %10, BTN aralığı değil — arkanda üç oyuncu var, 3-bet'ler oradan gelir. (a) dangler'lı ve düşük, (c) KK ama kalan dört kart kopuk: dangler'lı el UTG/CO'dan açılmaz, (c) CO'dan marjinal, UTG'den fold. CO'daki 119 açılışın neti -$10.6K; Seri 2'nin tüm kaybı bu 'yarısı güzel' ellerden.",
    source: "Bölüm 15.6",
    kavram: "plo",
  },
  {
    q: "PLO-6: turn'de nut straight'in var, redraw yok, board iki renkli. Villain pot bet. Raise mi call mı?",
    options: ["Raise — nut'un var, value al", "Call — villain'de aynı straight + redraw"],
    correct: 1,
    explain:
      "Raise ile sadece redraw'lı elden para alırsın, redraw'suz elle chop — hiçbir senaryoda kazanç yok; 6 kartlı oyunda villain neredeyse her zaman aynı straight + redraw'a sahiptir, sen freeroll edilirsin. Yığın koymadan önce: 'villain aynı ele sahipse ben ne kazanıyorum?' — 'hiçbir şey' ise call. En büyük tek el kaybı (-$4.147, 415bb pot) jam'de değil turn'deki ilk raise'de doğdu.",
    source: "Bölüm 15.5",
    kavram: "plo",
  },
  {
    q: "PLO-6 cash: 420bb derinsin, AAxx tek suit. UTG açtı, sen 3-bet ettin, 4-bet geldi. Karar?",
    options: ["5-bet — AA, ekvite avantajı var", "Call — 420bb'de AA tek pair, flop'ta check"],
    correct: 1,
    explain:
      "5-bet ile potu şişirmek villain'in AA/rundown+ds aralığına karşı ekvite avantajını sıfırlar: stack 300bb'yi geçince AA 4-bet'ten çıkar, call'a geçer; 3-bet potunda flop'ta pot c-bet yok, check-call/check-fold. AA'nın toplam neti +$10.9K ama 300bb+ derinlikte 3-bet/4-bet potlarındaki AA'lar -$5.4K. Daha iyisi: 300bb'de masadan kalk, yeni masaya 100bb otur.",
    source: "Bölüm 15.5",
    kavram: "plo-aa",
  },
  {
    q: "PLO-6: river board Ks Jc Th 7d 5d, sende 98 (J-high straight). Villain pot bet. Villain'in bluff aralığını somut tarif edebiliyor musun? Edemiyorsan karar ne?",
    options: ["Call — straight var, belki bluff'luyordur", "Fold — somut bluff kombosu sayılamıyor"],
    correct: 1,
    explain:
      "Bluff adayları kaçan dd ve Q-high/9-high draw'lar; ama villain K-J-T board'da AQ'yu aralığında tutuyor ve pot bet ediyor. River'da pot bet'e non-nut = fold; call için iki şart birden: villain'in somut bluff aralığı var VE senin elin onu yeniyor — 'belki bluff'luyordur' bir aralık değildir. Gerçek el: villain AQ nut straight (-$1.603); iki seride 45 river call, 15 kazanç, -$14.4K.",
    source: "Bölüm 15.5",
    kavram: "plo",
  },
  {
    q: "PLO-6: Ac 8c 7d Ah As Qd — bu elin gerçek sınıfı nedir?",
    options: ["AA — premium, 3-bet/4-bet eli", "Tek pair — üçüncü As kendi outunu öldürür"],
    correct: 1,
    explain:
      "Üçüncü As destede tek As bırakır: set ekvitesi ~%0, blocker değeri villain'i değil kendi aralığını daraltır. Elde üçlü/dörtlü kart varsa el preflop bir kademe aşağı (AAA = AA değil, tek pair). Gerçek el: 5s Ts 9s monoton flop'ta flush'sız pair ile üç sokak barrel, villain K-high flush (-$1.970) — monoton flop'ta flush'sız pair ile barrel yok.",
    source: "Bölüm 15.5",
    kavram: "plo",
  },
  {
    q: "PLO-6, 3-way pot, flop A-T-2; sende A-T + zayıf yan kartlar (top two, redraw yok). Pot check-raise geldi. Jam / call / fold?",
    options: [
      "Jam — top two, 3-way'de inisiyatifi al",
      "Call ya da fold; jam asla",
      "Fold — top two PLO'da hiç devam etmez",
    ],
    correct: 1,
    explain:
      "Check-raise karşısında redraw'suz top two, set ve wrap+FD'nin gerisinde — NLH kök hatasının birebir kopyası: 3-way bloated potta top two'yu nut gibi sınıflandırma. Call ile turn'de bilgi alınır; jam ile sadece daha iyi ellerden call alınır (gerçek el: villain AAxx set, -$2.055). PLO-6'da orta el yoktur — ya nut/nut redraw, ya bloated potta chip yok.",
    source: "Bölüm 15.4",
    kavram: "plo",
  },
  {
    q: "PLO-6 cash, 100bb, sende Kh Kc Ad 7d 7s Js. 3-bet ettin, 4-bet geldi. 5-bet'te AA'ya karşı ekviten kaç, karar ne?",
    options: ["~%45 — KK + A blocker, 5-bet jam", "~%33–36 — fold ya da call, 5-bet değil"],
    correct: 1,
    explain:
      "100bb'de 4-bet ≈ AA; 4-bet karşısında KKxx ve A-rundown call veya fold, 5-bet jam yalnız AAxx. Gerçek el: 5-bet $2.150, villain jam, AA99xx (-$2.208); ikinci örnek A-rundown ile 5-bet all-in, villain AA (-$2.399) — her ikisinde ekvite %30–38.",
    source: "Bölüm 15.5",
    kavram: "plo",
  },
  {
    q: "PLO-6 cash: saat 23:10, stack $9.400 (470bb), son iki elde $3K kazandın. Ne yapıyorsun?",
    options: ["Devam — seri sıcak, masa iyi", "Kalk — üç kural birden tetiklendi"],
    correct: 1,
    explain:
      "Stack 300bb'yi geçti, saat 23:00'ü geçti, iki büyük pot üst üste — üçü de kalkma kuralı. 300bb üstünde AA bile call'a düşer ve give-back riski kanıtlı: 23 Ağustos'ta 22:52'de $13.047 (650bb), 23:56'da $2.000. 23:00 sonrası iki seri toplamı ≈ -$25K, sabah seansları pozitif; masa değiştirmenin maliyeti sıfır.",
    source: "Bölüm 15.6",
    kavram: "plo",
  },
  {
    q: "PLO-6 cash: BB'de 8c Qd 6h 2h Ts 5d, BTN raise. 3-bet / call / fold — ve 3-bet'in bir sebebi olabilir mi?",
    options: [
      "3-bet — OOP call istemiyorum, inisiyatif",
      "Call — BB'de indirim var, flop'a bak",
      "Fold — 3-bet'in tek sebebi el gücüdür",
    ],
    correct: 2,
    explain:
      "BB'de call yok: 3-bet ya fold — ve 'OOP oynamak istemiyorum' bir 3-bet sebebi değildir, el gücü olmalı. Bu elle 3-bet potuna girip 8-high board'da pair + gutter ile turn pot call, river'da monoton board'da 6-high straight ile all-in call = L1 + L6'nın birleşimi (gerçek el, villain As Qs flush, -$2.000). Her sokakta fold doğruydu.",
    source: "Bölüm 15.5",
    kavram: "plo",
  },
];

export function randomScenario(): Scenario {
  return SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
}

// Şık sırası: soru metninden türeyen DETERMİNİSTİK permütasyon. Veride doğru cevap neredeyse
// hep aynı indekste duruyordu (77 iki-şıklının 75'i) → quiz pokerden değil biçimden çözülüyordu.
// Deterministik olması reveal/karne davranışını ve selfcheck kapısını stabil tutar (D-audit).
export function optionOrder(q: string, n: number): number[] {
  let h = 2166136261;
  for (let i = 0; i < q.length; i++) {
    h ^= q.charCodeAt(i);
    h = Math.imul(h, 16777619) >>> 0;
  }
  const idx = Array.from({ length: n }, (_, i) => i);
  for (let i = n - 1; i > 0; i--) {
    h = (Math.imul(h, 48271) + 11) >>> 0;
    const j = h % (i + 1);
    [idx[i], idx[j]] = [idx[j], idx[i]];
  }
  return idx;
}

// Kavramın KANONİK kitap bölümü. Önce açık harita (drill/sim slug'ları senaryo source'undan
// türetilince yanlış bölüme gidiyordu — D-audit), yoksa senaryo source'una düş.
const KAVRAM_BOLUM: Record<string, number> = {
  "kök-hata": 0,
  "stack-modu": 3,
  "3bet-aralik": 4,
  "blof-secimi": 1,
  draw: 6,
  plo: 15,
  boyut: 18,
  icm: 12,
  "icm-cover": 12,
  multiway: 13,
};

export function kavramChapter(kavram: string): number | null {
  if (kavram in KAVRAM_BOLUM) return KAVRAM_BOLUM[kavram];
  const s = SCENARIOS.find((x) => x.kavram === kavram);
  const m = s ? /(?:B[öo]l[üu]m|Chapter)\s*(\d+)/i.exec(s.source || "") : null;
  return m ? Number(m[1]) : null;
}
