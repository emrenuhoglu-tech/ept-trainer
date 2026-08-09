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
      "Senden zayıf el all-in'i ödemez: her 10 kicker'ını geçer, boat'lar önde. Trip'in bu runout'ta bluff-catcher → check-call. Raise blöfleri fold ettirir, seni yalnız geçen el öder (cümle 2). Senin gerçek elenmen — Vaka 2'nin aynısı.",
    source: "Bölüm 0.2 / Vaka 2",
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
];

export function randomScenario(): Scenario {
  return SCENARIOS[Math.floor(Math.random() * SCENARIOS.length)];
}
