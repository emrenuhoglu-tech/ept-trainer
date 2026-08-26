// Moduller — elle yapilandirildi. Slaytlarin TABLO icerigi curriculum uzerinden
// content/poker_cep_kitabi_v4.md'den gelir; poker DEGERI burada elle yazilmaz.
// narration = hoca anlatimi (slaytin okunusu DEGIL): konusma dili, sen-dili,
// modul basina 4-8 dakika. Icerik dokumandan; yalnizca konusma diline cevrildi.

import type { Visual } from "../components/SlideVisual";

export interface SlideTableRef {
  section: string;
  sub?: string;
  caption?: string;
}

export interface Slide {
  title: string;
  bullets?: string[];
  table?: SlideTableRef;
  rangeMatrix?: boolean;
  ruleBox?: string;
  visuals?: Visual[]; // bildirimsel görseller (kart/board/range/video)
  narration: string;
}

export interface Module {
  id: string;
  title: string;
  chapter: string;
  minutes: number;
  slides: Slide[];
}

export const modules: Module[] = [
  {
    id: "M1",
    title: "Kök hata",
    chapter: "Bölüm 0 + Bölüm 7",
    minutes: 6,
    slides: [
      {
        title: "Kök hata nedir",
        bullets: [
          "Tek per, şişmiş potta bluff-catcher'dır — AA dahil.",
          "River'da senden zayıf el ödemeyecekse, jam value değildir.",
          "Chop'lar jam atmaz.",
        ],
        ruleBox:
          "Tek per, şişmiş potta bluff-catcher'dır — AA dahil. Kök hatan bu; üç elenme buradan geldi.",
        visuals: [{ kind: "hand", cards: "AA", label: "Tek per — AA dahil" }],
        narration:
          "Bu modül tek bir hatanın etrafında dönüyor, çünkü seni üç kez eleyen şey hep aynıydı. Ona kök hata diyoruz. Cümlesi şu: tek per, şişmiş bir potta bir bluff-catcher'dır — as as dahil. Yani potun içinde çok para varken elinde sadece bir çift varsa, o el artık değer için değil, sadece rakibin blöfünü yakalamak için oynanır. Şunu kafana kazı: as as elinde diye o el şişmiş potta otomatik olarak canavar değildir; pot ne kadar büyükse rakibin seni geçmiş olma ihtimali de o kadar artar. İkinci cümle bunun river ayağı: river'da senden zayıf bir el seni ödemeyecekse, jam yani all-in value değildir. Value bet dediğin şey, senden zayıf bir eli ödetmek demek; ödeyecek zayıf el yoksa attığın all-in sadece güçlü elleri davet eder, seni geçenleri. Üçüncü cümle de bir okuma kısayolu: chop'lar jam atmaz. Yani ortada bölüşmeye, beraberliğe oynayan bir board varken rakip all-in geldiyse, o oyuncu bölüşen eli çoktan elinden çıkarmıştır — geldiği el bölüşen el değil, seni geçen eldir. Şimdi bu üç cümlenin masada nasıl para kaybettirdiğini üç gerçek vakada göreceğiz.",
      },
      {
        title: "Vaka 1 — A4s river call",
        bullets: [
          "$50K High Roller, WSOP 2026.",
          "Chop mekaniğini doğru gördün, bir filtreyi atladın.",
          "Chop'lar jam atmaz — mekaniği görmek yetmez.",
        ],
        visuals: [{ kind: "hand", cards: "A4s", label: "Elin" }],
        narration:
          "Birinci vaka, elli bin dolarlık bir high roller. Board bölüşmeye açık, yani chop mekaniği masada. Ve sen bu mekaniği aslında doğru gördün — beraberlik ihtimalini fark ettin. Ama bir filtreyi atlayıp hero call yaptın ve ödedin. Atladığın filtre şuydu: chop'lar jam atmaz. Rakip sana all-in geldiyse, bölüşmeye oynayan eli aralığından çıkarmıştır; çünkü bölüşecek bir elle kimse tüm stack'ini ortaya sürmez, bölüşmek zaten paranı geri almak demektir, riske değmez. Yani onun jam'i, bölüşen elle değil, seni geçen bir elle geliyor. Buradan çıkan kural şu: bir mekaniği doğru görmek tek başına yeterli değildir. Board'da beraberlik var demek, işin yarısı. Diğer yarısı: rakibin hamlesi o mekanikle uyumlu mu? Beraberlik varsa ve rakip check'liyorsa, o beraberlik anlamlı. Ama beraberlik varken rakip jam'liyorsa, jam'in kendisi sana beraberliğin masadan kalktığını söylüyor. Hamleyi mekanikle birlikte oku.",
      },
      {
        title: "Vaka 2 — KTo top pair check-raise all-in",
        bullets: [
          "$10K 6-Handed. Islak board, top pair ile check-raise all-in.",
          "Rakip flat'lediği QQ ile call etti.",
          "Doğrusu: check-call, sonra değerlendir.",
        ],
        visuals: [
          { kind: "hand", cards: "KTo", label: "Elin (top pair)" },
          { kind: "hand", cards: "QQ", label: "Rakip (flat'lediği)" },
        ],
        narration:
          "İkinci vaka, on bin dolarlık altı kişilik bir masa. Islak bir board, yani bağlantıların ve draw'ların bol olduğu bir zemin. Elinde top pair var, kral on ile bir kral flopladın diyelim, ve check-raise all-in yaptın. Rakip preflop flat'lediği kuvöz kuvöz ile seni ödedi ve elendin. Doğru oyun neydi? Check-call, sonra sokak sokak değerlendirmek. Top pair ıslak bir boardda büyük pot başlatıcı değildir. Neden? Çünkü sen tüm stack'i ortaya sürdüğünde, seni ödeyen aralık senden iyi. Zayıf eller, blöfler, draw'lar all-in'e call etmez, fold eder — seni sadece set'ler, üst çiftler, tamamlanmış eller öder. Yani stack'i sen başlattığın anda elini bir bluff-catcher'a çevirmiş oluyorsun ama bunu value oynuyormuş gibi yapıyorsun. Kural: tek per stack-off yakıtı değildir. Şişmiş pota giden yol, elinin sınıfını sessizce düşürür; sen hâlâ top pair'e bakıyorsun ama pot büyüdükçe o el bir bluff-catcher'a dönüşmüştür. Ödemek başka, başlatmak başka.",
      },
      {
        title: "Vaka 3 — AA river jam",
        bullets: [
          "PokerOK $108 Mystery Bounty, Temmuz 2026.",
          "Board 2-4-5, river 6. Elin AA, rakip 66.",
          "Flop ve turn value doğru — kötü river 6'da jam yanlış.",
        ],
        visuals: [
          {
            kind: "replay",
            replay: {
              hero: "AA",
              villain: "66",
              heroLabel: "Sen (AA)",
              villainLabel: "Rakip (66)",
              streets: [
                {
                  name: "Preflop",
                  note: "AA vs 66 — açık ara öndesin.",
                },
                {
                  name: "Flop",
                  add: "2c 4d 5s",
                  note: "Flop 2-4-5. AA hâlâ overpair ve önde; flop value doğru.",
                },
                {
                  name: "Turn",
                  add: "??",
                  note: "Turn (kitapta belirtilmemiş). Value almaya devam — buraya kadar oyun doğru.",
                },
                {
                  name: "River",
                  add: "6h",
                  note: "River 6 → 66 artık SET. Senden zayıf hiçbir el ödemez; jam value DEĞİL. Kök hata tam burada: kötü river'da overpair'i value gibi jam etmek.",
                },
              ],
            },
          },
        ],
        narration:
          "Üçüncü vaka en taze ve en öğretici olanı. Board iki, dört, beş. Elinde as as, oyunun en güçlü başlangıç eli. Flop'ta value bet attın, doğru. Turn'de yine value bet attın, o da doğru — çünkü o ana kadar seni yedi, sekiz, dokuz gibi çiftlerden, zayıf ellerden para ödeyecek biri vardı. Sonra river altı geldi. Şimdi o board'a dikkatlice bak: iki, dört, beş ve şimdi altı. Bu kötü bir river, çünkü bu kartla senden zayıf hiçbir el seni ödemez. Düşün: elinde üç olan biri kenti tamamladı ve seni geçiyor; setler seni geçiyor — nitekim rakip river'da altı altı ile set yaptı. Senden zayıf olan her el, yani seni ödeyebilecek her el, ya pas geçiyor ya da o river'da seni geçmiş. Sen buna rağmen kalan stack'i jam ettin ve rakip river'da set yapan altı altı ile ödedi. Hata all-in'in kendisiydi. Value target yoktu. Kural net: river'da senden zayıf el ödemeyecekse jam value değildir. O kötü river'da elin hâlâ iyi görünüyor ama value'su bitmiş; küçük potta check-call edip ucuza showdown'a gidersin, büyük potta ise check-fold. As as'i bırakmak zor gelir ama bırakılması gereken yer tam burasıdır.",
      },
      {
        title: "Üçünün tek kuralı",
        bullets: [
          "Üç vakanın kök hatası aynı: tek per'in şişmiş/multiway potta yanlış sınıflandırılması.",
          "Kötü river'da overpair: küçük pota check-call, büyük pota check-fold.",
        ],
        ruleBox:
          "River'da senden zayıf el ödemeyecekse jam value değildir. Kötü river'da overpair: küçük pota check-call, büyük pota check-fold.",
        narration:
          "Üç vakaya birlikte bak: farklı turnuvalar, farklı eller, farklı boardlar — ama kök hata bir tane. Tek per'in, as as dahil, şişmiş ya da çok kişili potta yanlış sınıflandırılması. Her seferinde elin sana güçlü göründü, ama pot büyüdükçe o el bir bluff-catcher'a dönüştü ve sen onu hâlâ value gibi oynadın. Masaya götüreceğin cümle şu: river'da senden zayıf bir el ödemeyecekse, jam value değildir. Ve pratik karşılığı: kötü bir river'da overpair'in varsa, küçük pota check-call yapıp ucuza görürsün, büyük pota ise check-fold. Bu modülü içine sindirirsen, seni eleyen o üç eli bir daha oynamazsın. Sıradaki modüllerde bu kök hatanın nereden doğduğunu — yani preflop'ta 3-bet aralıklarından — ve nasıl önleneceğini göreceğiz.",
      },
    ],
  },
  {
    id: "M2",
    title: "Blöf seçimi & board sahipliği",
    chapter: "Bölüm 1",
    minutes: 6,
    slides: [
      {
        title: "Üç kriter",
        table: {
          section: "Bölüm 1",
          sub: "1.1",
          caption: "Biri eksikse blöf değil, sadece kaybedilen chip.",
        },
        narration:
          "Blöf yapmak rastgele bir cesaret işi değil; bir eli blöf yakıtı yapan üç kriter var ve el bunların üçünden birden geçmeli. Birincisi bloker. Elindeki kart, rakibin en güçlü ellerini onun elinden alıyor mu? Mesela elinde maça as varsa, rakibin nut maça flush'ını bloke ediyorsun, yani onun en güçlü elini yapma ihtimalini azaltıyorsun. İkincisi bağlantı. El board'a temas ediyor, gelişebiliyor mu? Açık uçlu bir kent draw'u ya da flush draw'u gerçek bağlantıdır; sadece havada duran iki yüksek kart bağlantı değildir. Üçüncüsü board sahipliği. Bu board kimin aralığına çarpıyor? On dokuz sekiz gibi bir zemin genellikle savunan tarafın; as kral yedi gibi kuru bir zemin ise açan tarafın. Şimdi kritik nokta: bu üç kriterden biri bile eksikse, elin blöf değildir — sadece potun içine attığın ve kaybedeceğin chip'tir. Yani blöfe başlamadan önce üç soruyu da sor: bloke ediyor muyum, bağlanıyor muyum, board benim mi?",
      },
      {
        title: "J2s dersi — suited tuzağı",
        bullets: [
          "Suited olmak bir eli blöf yakıtı yapmaz.",
          "Aranan şey suited değil: bağlı ve bloker.",
          "Offsuit broadway'de ters tuzak: KJo, QJo — bloker var, bağlantı yok.",
        ],
        visuals: [{ kind: "hand", cards: "J2s KJo QJo", label: "Blöf yakıtı DEĞİL" }],
        narration:
          "Şimdi çok yaygın bir tuzağa bakalım: suited tuzağı. İnsanlar bir el suited diye onu otomatik olarak blöf için uygun sanıyor. Jek iki suited'i ele alalım. Bloker değeri var mı? Yok, kimsenin nut'ını almıyor, iki ve jek kimsenin güçlü elini bloke etmiyor. Bağlantısı var mı? Neredeyse yok, iki kartın arasında dokuz basamak boşluk var, düzgün bir kent draw'u yapması çok zor. Peki flush'ı tamamlansa? O zaman bile alt flush riski taşıyor, yani birileri daha yüksek bir flush'la seni ödeyebilir. Yani suited kelimesi seni kandırıyor; aradığın şey suited değil, bağlı ve bloker olan. Aynı tuzak offsuit broadway ellerde tam tersine çalışır. Kral jek offsuit, kız jek offsuit — bunların bloker değeri var, çünkü büyük kartları tutuyorlar, ama bağlantıları yok, board'a düzgün oturmuyorlar. Onlar da blöf yakıtı değil. Ders şu: ne suited olması ne de büyük kart olması tek başına bir eli blöfe uygun yapmaz; üç kriteri birlikte ara.",
      },
      {
        title: "Board'un sahibi kim",
        bullets: [
          "Check-raise blöf: SENİN aralığına çarpan boardlarda (T98, 765, J-orta).",
          "Rakibin boardunda (A-K yüksek kuru): draw'lar sessizce call eder.",
        ],
        ruleBox:
          "Check-raise blöf SENİN aralığına çarpan boardlarda yapılır. Rakibin aralığına çarpan boardlarda (A-K yüksek kuru) draw'lar sessizce call eder.",
        visuals: [
          { kind: "board", cards: "Ts 9d 8c", label: "Senin boardun (T98) — check-raise blöf" },
          { kind: "board", cards: "7h 6s 5c", label: "Senin boardun (765)" },
          { kind: "board", cards: "Ah Kd 7c", label: "Rakibin boardu (A-K kuru) — call et" },
        ],
        narration:
          "Diyelim üç kriterden geçen bir elin var. Yine de yanlış hamleyle oynayabilirsin, çünkü hamleyi board'un sahibi belirler. Kritik ayrım şu: check-raise blöfü, senin aralığına çarpan boardlarda yapılır — on dokuz sekiz, yedi altı beş, ortada jek olan bağlantılı zeminler. Bu boardlar savunan tarafın hikâyesine uyar, o yüzden check-raise'in inandırıcı olur. Ama board rakibin aralığına çarpıyorsa, mesela as kral yedi gibi yüksek ve kuru bir zemin, orada draw'ların sessizce call eder, check-raise etmez. Nedenini rakamla görelim. As kral yedi board'u, cut-off'un açılış aralığını ezer: as kral, as kız, as jek, kral kız, as yedi suited, yedi yedi, as as, kral kral — hepsi bu boarda çarpıyor. Peki senin büyük kör savunma aralığında kaç tane as-kral kombinasyonu var? Çok az. Yani sen bu boardda check-raise yaparsan, rakip 'bu adamın burada as-kral'ı olması zor' diye düşünür; inandırıcılığın düşüktür. Sonuç: iyi elleri fold ettiremezsin, onlar call eder; sadece zaten kazanamayacağın havayı fold ettirirsin. Havanın küçük potunu almak için gutshot'ını şişmiş potta riske atmış olursun. Bunun yerine call her şeyi çözer: ucuza bir turn görürsün, on gelirse gizli kentle tüm stack'i alırsın, maça gelirse agresifleşme opsiyonun doğar, boşsa da ucuza yoldan çekilirsin. Kuru, yüksek, rakibin boardunda: raise etme, call et.",
      },
      {
        title: "Kime blöf yapılmaz",
        bullets: [
          "Rec / station: fold etmez — value bet düşün.",
          "Kısa stack: otomatik call bölgesinde.",
          "Committed oyuncu: fold psikolojik olarak kapalı.",
          "Bubble'da hayatta kalan büyük stack: bedavaya öder.",
        ],
        narration:
          "Son olarak, doğru el ve doğru board bile olsa, bazı rakiplere blöf yapılmaz. Birincisi rec ya da station tipi oyuncu; bu adam fold etmiyor, o yüzden ona blöf değil, value bet düşün — elin iyiyse ödet, kötüyse boşuna deneme. İkincisi kısa stack; call fiyatı onun stack'ine göre küçük kaldığından otomatik call bölgesindedir, blöfün onu atmaz. Üçüncüsü pota bağlanmış, committed oyuncu; belli bir noktadan sonra o oyuncuda fold psikolojik olarak kapanır, ne yaparsan yap öder. Ve dördüncüsü, bubble'da hayatta kalmaya oynayan büyük stack; o seni cezasız ödeyebilir, çünkü kaybetse bile turnuvadan düşmez, seni bedavaya ödemekten çekinmez. Blöf, doğru ele ek olarak doğru rakibi de ister. Yanlış kişiye yapılan mükemmel blöf, yine kaybedilen chip'tir.",
      },
    ],
  },
  {
    id: "M3",
    title: "Aldatıcı orta eller",
    chapter: "Bölüm 2",
    minutes: 5,
    slides: [
      {
        title: "Küçük pot kazananı, büyük pot kaybedeni",
        bullets: [
          "JTs, KQ, KJ, 97s.",
          "Rolleri: open / flat / BB-defend.",
          "Rolleri ASLA büyük pot başlatıcı (3-bet, stack-off) değil.",
        ],
        ruleBox:
          "JTs, KQ, KJ, 97s: küçük pot kazananı, büyük pot kaybedenidir. Rolleri open / flat / BB-defend; asla büyük pot başlatıcı değil.",
        visuals: [{ kind: "hand", cards: "JTs KQ KJ 97s", label: "Aldatıcı orta eller" }],
        narration:
          "Bu modül bir grup elle ilgili: jek on suited, kral kız, kral jek, dokuz yedi suited. Bunlara aldatıcı orta eller diyoruz, çünkü iyi görünürler ama seni yanıltırlar. Tek cümlelik kimlikleri şu: küçük pot kazananı, büyük pot kaybedenidir. Rolleri open yapmak, flat yani call etmek, ya da büyük körden savunmaktır. Rolleri asla ama asla büyük pot başlatmak değildir — yani bunlarla 3-bet çekip stack ortaya sürmezsin. Bu eller potu küçük tutarsan senin dostundur; potu büyütürsen düşmanın olur. Neden böyle olduğunu bir sonraki slaytta açacağız, ama önce şunu içine yerleştir: bu elleri gördüğünde refleksin 'küçük pot' olmalı, 'stack' değil.",
      },
      {
        title: "Neden dominate edilirler",
        bullets: [
          "JTs top pair: kicker sorunu. KQ: AK/AQ gölgesinde. 97s iki per: üstü açık.",
          "Küçük potta marjinal ellerden para sızdırır; büyükte karşı aralık daralır ve güçlenir.",
        ],
        narration:
          "Neden bu eller büyük potta kaybeder? Tek tek bak. Jek on suited ile top pair yaptığında bir kicker sorunun var; jek'i eşledin diyelim, seni ödeyen çoğu el daha iyi bir kicker taşır. Kral kız ile top pair yaptığında as kral ve as kızın gölgesindesin; kralı ya da kızı eşlersen bile seni dominate eden eller masada. Dokuz yedi suited ile iki per bile yapsan, boardun üstü açıktır, daha büyük iki per'ler ve kentler seni geçebilir. Şimdi bunu pot boyutuyla birleştir. Pot küçükken, yani tek raise'li bir pottayken, bu eller rakibin marjinal ellerinden yavaş yavaş para sızdırır — zayıf top pair'ler, ikinci çiftler sana ödeme yapar. Ama pot büyüdüğünde, yani 3-bet ve üstü seviyeye çıktığında, karşındaki aralık daralır ve güçlenir; artık sadece güçlü eller o kadar parayı ortaya koyar ve o güçlü aralık seni dominate eder. Tek cümlede: el aynı kalıyor, ama pot boyutu değişince kazanan taraf değişiyor. İşte aldatıcılıkları tam burada.",
      },
      {
        title: "KQo vakası — equity vs oynanabilirlik",
        bullets: [
          "42bb, HJ reg (~%22) açtı, sen CO'da KQo. Doğru: fold.",
          "Ham equity ~%45 ama realize edemiyorsun.",
          "En iyi floplar en pahalı tuzakların: K → AK'ye öder, Q → AQ'ya öder.",
        ],
        ruleBox: "Equity kâğıt üzerinde, para masada kazanılır.",
        visuals: [{ kind: "hand", cards: "KQo", label: "Elin (CO) — 42bb, HJ reg açtı" }],
        narration:
          "Somut bir örnekle bitirelim. Kırk iki big blind derinliğindesin, day two. Reg bir oyuncu hijack'ten açtı, aralığı aşağı yukarı yüzde yirmi iki. Sen cut-off'ta kral kız offsuit'sin. Doğru karar fold. Neden fold, oysa el kötü görünmüyor? Çünkü ham equity ile oynanabilirlik iki ayrı şey. Kral kız offsuit'in bu yüzde yirmi iki aralığa karşı ham equity'si yaklaşık yüzde kırk beş; kâğıt üzerinde fena değil. Ama o equity'yi realize edemiyorsun. Rakibin aralığındaki as kral, as kız, kral kral, kız kız, as as senin en iyi floplarını mezara çevirir. Kralı flopladın, sevindin — ama as krala üç sokak ödersin. Kızı flopladın — as kıza ödersin. Yani senin en parlak senaryoların, aslında en pahalı tuzakların. Üstüne kırk iki big blind'de 3-bet edip 4-bet yersen devam edemezsin, call edip pozisyonsuz oynamak da seni inisiyatifsiz bırakır. Buradan çıkan altın cümle: equity kâğıt üzerinde, para masada kazanılır. Bir eli oynayıp oynamayacağına ham equity'ye değil, o equity'yi gerçekten cebe indirip indiremeyeceğine bakarak karar ver.",
      },
    ],
  },
  {
    id: "M4",
    title: "Stack modları & ICM",
    chapter: "Bölüm 3",
    minutes: 5,
    slides: [
      {
        title: "Stack modları",
        table: { section: "Bölüm 3", caption: "Önce mod, sonra aralık." },
        narration:
          "Her elden önce sorman gereken ilk soru bir el sorusu değil, bir mod sorusudur: hangi stack modundayım? Aralığı ondan sonra seçersin. Modları gezelim. Seksen big blind ve üstü standart mod; normal chartlar geçerli, suited connector ve küçük çiftlerin değeri tavanda çünkü derinlik implied odds veriyor. Kırk ile altmış arası ilk daralma; açılış boyutun sabit kalır ama aralık kısılır, offsuit alt bant düşer — kral on offsuit, kız jek offsuit, jek dokuz offsuit gibi eller çöpe gider. Yirmi beş ile kırk arası ciddi bir mod değişimi; suited connector'lar değer kaybeder çünkü implied odds azalır, buna karşılık as-x elleri değer kazanır, ve her ele 'jam'e karşı net kararım ne' filtresini uygularsın. On beş ile yirmi beş arası open-jam sınırı; bazı pozisyonlardan iki kat açar, bazılarıyla direkt jam edersin. On beşin altında ise tek mod var: jam ya da fold; aralık dışı hiçbir hamle yok. Özet: elini görmeden önce stack'ine bak, çünkü aynı el farklı modlarda farklı bir eldir.",
      },
      {
        title: "30bb altı orta çiftler",
        bullets: [
          "77–TT, 30bb altında post-flop eli değil — jam-or-fold.",
          "Set gelmezse üç sokak ödeyecek stack yok.",
          "Gelirse de kısa stack'le maksimum alamazsın.",
        ],
        visuals: [{ kind: "hand", cards: "77 88 99 TT", label: "30bb altı: jam-or-fold" }],
        narration:
          "Modların içinde özel bir eşik var, onu ayrıca vurgulamak gerek: otuz big blind altında orta çiftler. Yedi yedi, sekiz sekiz, dokuz dokuz, on on gibi eller otuz big blind altında post-flop oynanacak eller değildir; bunlar jam ya da fold elleridir. Neden? İki taraflı bir kısıt var. Bir: set-mining yapmak istiyorsun ama set gelmezse üç sokak baskı yiyip devam edecek stack'in yok, ilk baskıda zaten commit oluyorsun. İki: set gelse bile kısa stack'le rakipten maksimum değeri alamıyorsun, çünkü ortada zaten az para var. Yani bu çiftlerin klasik cazibesi olan 'ucuza set çekip stack alma' planı otuz big blind altında çalışmıyor. O yüzden bu derinlikte orta çiftle post-flop dans etmeye kalkma; ya jam et ya da at.",
      },
      {
        title: "ICM katmanı",
        bullets: [
          "Bubble'da 30bb ≠ Day 1'de 30bb.",
          "Solunda kısa stack varsa: genişlet.",
          "Solunda büyük stack varsa: daralt.",
          "Bubble'da orta stack en kırılgan pozisyon — sabır.",
        ],
        ruleBox: "Bubble'da 30bb ≠ Day 1'de 30bb.",
        narration:
          "Stack modunun üstüne bir de ICM katmanı biner, yani para baskısı. Şu cümleyle başla: bubble'da otuz big blind, day one'daki otuz big blind ile aynı el değildir. Para yaklaşırken aynı stack aynı aralığı oynamaz, çünkü artık her chip'in değeri simetrik değil — kaybettiğin chip'ler, kazandıklarından daha çok acıtır. Masaya göre ayarlarsın. Solunda kısa stack'ler varsa açılış aralığını genişletirsin, çünkü onlar hayatta kalmaya oynuyor, kolay kolay karşılık vermezler. Solunda büyük stack'ler varsa daralırsın, çünkü onlar seni cezasız 3-bet edip zorlayabilir, sen de para baskısı altında fold etmek zorunda kalırsın. Ve en kritiği: bubble'da orta stack en kırılgan pozisyondur. Ne kısa stack gibi rahatça jam edebilirsin, ne de büyük stack gibi baskı kurabilirsin; iki arada kalırsın. Bu modun tek reçetesi sabır — pozisyonunu ve masanı okuyup doğru anı beklemek.",
      },
    ],
  },
  {
    id: "M5",
    title: "3-bet & call aralıkları",
    chapter: "Bölüm 4 ★",
    minutes: 8,
    slides: [
      {
        title: "Bu bölümün mantığı",
        bullets: [
          "Şişmiş pot %90 oranda 3-bet'li pottur.",
          "3-bet aralığını doğru kurmak kök hatanın frekansını düşürür.",
          "İki test: tek per rahat mıyım? OOP mu kalıyorum?",
        ],
        narration:
          "Bu bölüm kitabın kalbi. Kök hatayı hatırla: tek per'i şişmiş potta yanlış sınıflandırmak. O hata river'da patlar ama preflop'ta doğar. Nedeni basit: şişmiş pot dediğimiz şey, yüzde doksan oranında 3-bet'li pottur. Yani river'daki zor kararın kökü, çok önce 3-bet aralığını yanlış kurmandır. Sonuç şu: 3-bet aralığını doğru kurmak, kök hatayı azaltmanın en hızlı yolu. El okumayı geliştirmekten bile hızlı, çünkü sorunu doğduğu yerde kesersin. Her aralığı iki soruyla test et. Bir: bu elle 3-bet edip flop görürsem, tek per yaptığımda rahat mıyım? Rahat değilsem 3-bet etmem — ya flat ederim ya atarım. İki: pozisyonsuz mu kalacağım? Pozisyonsuz 3-bet potunda tek per, tanımı gereği bluff-catcher'dır. O yüzden pozisyonsuz aralıklar daha sıkıdır. Bu iki soru bütün tabloların temeli.",
      },
      {
        title: "Canlı turnuva düzeltmesi",
        table: {
          section: "Bölüm 4",
          sub: "4.1",
          caption: "Canlıda para geniş value 3-bet'inden gelir.",
        },
        ruleBox:
          "Canlıda para blöf 3-bet'ten değil, daha geniş value 3-bet'inden gelir.",
        narration:
          "Solver aralıklarını aynen masaya taşıma; canlı alan solver gibi oynamaz. EPT sahasında üç sistematik sapma var, üçünü de lehine çevir. Bir: canlı oyuncu 3-bet'e az fold eder. O yüzden blöf 3-bet'i azalt, value 3-bet'i genişlet — çünkü seni ödeyecek bir alan var. İki: canlıda 4-bet blöfü neredeyse yok. Biri 4-bet yaparsa gerçek eli vardır; kuvöz kuvöz ve altını bile ciddiye al, as kral'ı otomatik 5-bet çakma. Üç: açılışlar geniş, düz call çok. O yüzden squeeze en kârlı hamlen olur; çok kişili potlarda blöf 3-bet'ini tamamen bırak, çünkü fold equity yok. Tek cümleyle: canlıda para blöf 3-bet'ten değil, daha geniş value 3-bet'inden gelir. Teori seni dengeye zorlar; alan sana dengesizlikten kâr etme izni verir. Bu izni kullan.",
      },
      {
        title: "Boyutlandırma",
        table: { section: "Bölüm 4", sub: "4.2", caption: "Ezberle, düşünme." },
        narration:
          "Boyutları ezberle ki masada düşünmeyesin. Pozisyonlu 3-bet: açılışın üç katı, canlıda üç buçuğa kadar serbest. Pozisyonsuz 3-bet: körler dahil açılışın dört katı — daha büyük yaparsın ki zayıf ele iyi fiyat vermeyesin. Araya coldcaller girdiyse, her biri için bir açılış boyutu ekle. Squeeze, yani açılış üstüne call varken çektiğin 3-bet: dört buçuk ile beş kat. 4-bet: pozisyonluysan 3-bet'in iki virgül iki katı, pozisyonsuzsan iki virgül beş katı. Bu sayıları refleks yap. Boyut için düşünürsen hem tempoyu kaçırırsın hem boyutundan okuma verirsin.",
      },
      {
        title: "Aralık tablosu (interaktif)",
        rangeMatrix: true,
        narration:
          "Şimdi işin özü: pozisyona göre 3-bet aralıkları. Aşağıdaki tabloyu kendin kullan. Önce üstten kim açtı onu seç, sonra kendi pozisyonuna dokun; o eşleşmenin value ve blöf aralığını, altında flat notlarını görürsün. Genel prensip şu. Erken pozisyon açılışına karşı — yani yu ti ci ve yu ti ci artı bire karşı — disiplin bölgesindesin: value çok dar, kuvöz kuvöz ve üstü ile as kral; blöf ya yok ya çok seyrek. Açan pozisyon geç indikçe, mesela cut-off ya da button açınca, hem value hem blöf genişler, çünkü onların aralığı zayıf. En kârlı spot: smol blind açar, sen büyük kördesin. Orada aralığın en geniş, çünkü rakip çok geniş açtı ve sen pozisyonlusun. Bir uyarı: blöf satırındaki eller blocker için değil, flop oynanabilirliği için seçildi — call gelirse flop'ta rahat oynayacağın eller. Tabloyla oyna, eşleşmeleri gözünle gör.",
      },
      {
        title: "Coldcall'un üç şartı",
        bullets: [
          "1) Pozisyon: IP'sin ya da BB'de aksiyonu kapatıyorsun.",
          "2) Derinlik: efektif stack, call'un en az 15×'i.",
          "3) Ödeyen rakip: set yapınca sana para verecek biri.",
          "Üçü aynı anda sağlanmıyorsa flat etme.",
        ],
        narration:
          "3-bet'i konuştuk; şimdi coldcall, yani açılışa 3-bet yapmadan düz call. Coldcall 3-bet'ten daha zor bir karar, çünkü inisiyatifi bırakırsın. Üç şart var; üçü birden yoksa flat etme. Bir, pozisyon: ya pozisyonlusun ya büyük körde aksiyonu kapatıyorsun. Ortada, arkanda oyuncu varken pozisyonsuz flat etme. İki, derinlik: set arıyorsan efektif stack, call'un en az on beş katı olmalı. Yüz big blind'de üç big blind call yapıyorsan ve arkanda kırk beş big blind'den fazla varsa tamam. Kırk big blind'de aynı call tutmaz — set gelse bile kârını çıkaramazsın. Üç, ödeyen rakip: set yaptığında sana para verecek biri olmalı. Sıkı bir reg set'i görünce durur, orada set-mining kârsız. Bir de multiway uyarısı: arkanda 3-bet edebilecek agresif biri varsa, sıkı elle flat seni squeeze'e açık bırakır. O durumda ya 3-bet'e yükselt ya at — ortada flat etme.",
      },
      {
        title: "Squeeze — en kârlı tek hamle",
        bullets: [
          "Coldcaller aralığı sıkı ama zayıf: 4-bet edemez, çoğunu fold eder.",
          "VALUE: JJ+, AQs+, AKo. BLÖF: A5s–A4s, KQs, AJs.",
          "Coldcaller balıksa blöfü kes — sadece value squeeze.",
        ],
        narration:
          "Canlıda en kârlı tek hamle kendi slaytını hak ediyor: squeeze. Squeeze, biri açıp başka biri call ettikten sonra senin çektiğin büyük 3-bet. Neden bu kadar kârlı? Çünkü coldcaller'ın aralığı sıkı ama zayıf. Call ederek 'orta güçte elim var' demiştir; 4-bet edemez, baskı gelince çoğu eli fold eder. Value tarafın: kuvöz kuvöz ve üstü, as kız suited ve üstü, as kral offsuit. Blöf tarafın: as beş ve as dört suited, kral kız suited, as jek suited — hem blocker taşırlar hem call gelirse oynanır. Boyut: pozisyonluysan dört buçuk kat, körlerden beş kat ve üstü. Bir ayar: coldcaller sıkıysa blöfü genişlet, fold edecek. Ama coldcaller balıksa, yani fold etmiyorsa, blöfü tamamen kes — sadece value squeeze at. Balığa blöf yapılmaz, balık ödetilir.",
      },
      {
        title: "Stack modu üst katmanı",
        table: {
          section: "Bölüm 4",
          sub: "4.7",
          caption: "45bb'de 130bb aralığı oynama.",
        },
        ruleBox:
          "En sık hata: 45bb'de 130bb aralığı oynamak — küçük çiftle flat, suited connector'la 3-bet blöfü. İkisi de 45bb'de zarar.",
        narration:
          "Son olarak bütün aralıkların üstüne stack modu katmanını bindir, çünkü aralık moda göre değişir. İki yüz big blind ve üstü: value ağırlıklı oyna, blöf az, flat en geniş — implied odds tavanda. Yüz ile yüz elli arası: standart mod, bu tablolar aynen geçerli. Altmış ile yüz arası: daha polarize, blöf artar ama flat daralır, set-mining zayıflar. Kırk ile altmış arası: lineer oyna, flat neredeyse yok — ya 3-bet ya fold. Yirmi beş ile kırk arası: 3-bet artık commit demek; 3-bet edeceğin el, gelen 4-bet'e de devam edebilmeli. Yirmi beşin altı: jam ya da fold, 3-bet-fold yok. En pahalı hatayı tekrar söylüyorum: kırk beş big blind'de yüz otuz big blind aralığı oynamak. Küçük çiftle flat edip set ararsın ama derinlik yok; suited connector'la 3-bet blöfü çekersin ama fold equity ve implied odds yok. İkisi de bu derinlikte zarar. Önce mod, sonra aralık.",
      },
    ],
  },
  {
    id: "M6",
    title: "4-bet — 3-bet'e cevap",
    chapter: "Bölüm 4.5",
    minutes: 4,
    slides: [
      {
        title: "Canlıda 4-bet",
        bullets: [
          "Canlıda 4-bet blöfü neredeyse yoktur.",
          "4-bet gördüğünde QQ ve altını bile ciddiye al.",
          "AK otomatik 5-bet değildir.",
        ],
        ruleBox:
          "Canlıda 4-bet neredeyse hep gerçek eldir; kimse fold etmiyorsa blöf 4-bet para yakmaktır. AK'yı otomatik 5-bet'leme.",
        narration:
          "4-bet aralığına geçmeden canlı gerçeği koyalım, çünkü teori ile canlı burada ayrışır. Canlıda 4-bet blöfü neredeyse yok; insanlar 4-bet'i gerçek elle çeker. Bunun iki sonucu var. Bir: biri sana 4-bet yaptığında ciddiye al. Kuvöz kuvöz ve altını hafife alma, karşındaki büyük ihtimalle gerçekten güçlü. As kral'ı görünce refleksle beş-bet çakma; o 4-bet çoğu zaman senden önde. İki: sen 4-bet blöfü yaparken çok dikkatli ol. Kimse fold etmiyorsa attığın blöf 4-bet sadece para yakmaktır. Hem savunmada hem hücumda kural aynı: canlıda 4-bet değerlidir, blöf değil.",
      },
      {
        title: "3-bet'e cevabın (tablo)",
        table: {
          section: "Bölüm 4",
          sub: "4.5",
          caption: "4-bet'li pot şişmiş pottur.",
        },
        visuals: [
          {
            kind: "range",
            value: "KK+, AKs, QQ (karışım), AKo (karışım)",
            blof: "A5s, A4s",
            flat: "JJ, TT, AQs, KQs",
            valueLabel: "4-bet value",
            blofLabel: "Blöf 4-bet",
            caption: "4-bet cevabın: value + karışım + blöf; flat IP 150bb+.",
          },
        ],
        ruleBox:
          "4-bet'li pot şişmiş pottur. AA ile flop+turn value alıp kötü river'da jam etmek, Vaka 3'ün birebir tekrarıdır.",
        narration:
          "Şimdi madalyonun öbür yüzü: sen açtın, sana 3-bet geldi. Cevabın ne? Tabloyu takip et. 4-bet value: kral kral ve üstü, ve geç pozisyondan gelen 3-bet'e karşı as kral. 4-bet karışım: kuvöz kuvöz ve as kral offsuit'i geç pozisyon 3-bet'ine karşı bazen 4-bet'lersin, erken pozisyona karşı 4-bet'lemezsin. 4-bet blöf: as beş ve as dört suited ile mümkün ama canlıda çok seyrek — kimse fold etmiyorsa para yakmaktır. Flat, yani 3-bet'i call etmek: pozisyonlu ve yüz elli big blind derinlikte kuvöz kuvöz, on on, as kız suited, kral kız suited; fiyat üç katın altındaysa suited connector'lar da girer. Fold: pozisyonsuz tüm offsuit broadway'ler — as jek, kral kız, as on — 3-bet'e karşı çöp, atarsın. En kritik uyarı: 4-bet'li pot şişmiş pottur. Orada as as ile flop ve turn value alıp kötü bir river'da kalan stack'i jam etmek, birinci modüldeki üçüncü vakanın — o iki dört beş altı boardunun — birebir tekrarı. Kural değişmez: river'da senden zayıf el ödemeyecekse jam value değildir. Preflop aralığını doğru kur ki o river kararına hiç düşmeyesin.",
      },
      {
        title: "4-bet boyutu",
        bullets: ["4-bet IP: 3-bet'in 2.2×", "4-bet OOP: 3-bet'in 2.5×"],
        ruleBox: "Boyutu ezberle, masada düşünme.",
        narration:
          "Son olarak boyut. Pozisyonluysan 4-bet, 3-bet'in iki virgül iki katı. Pozisyonsuzsan biraz daha büyük: 3-bet'in iki virgül beş katı. Pozisyonsuz daha büyük olmasının sebebi, zayıf ele iyi fiyat verip onu potta tutmamak. Bu iki sayıyı refleks yap. Boyut için düşünmeye başlarsan hem tempoyu kaçırırsın hem boyutundan okuma verirsin.",
      },
      {
        title: "5-bet — 4-bet'e cevap",
        bullets: [
          "5-bet = 4-bet'e tekrar yükseltmek; bu derinlikte pratikte all-in (jam).",
          "Value: KK+ her zaman. QQ/AK rakibe göre — agresöre jam, nit'e fold.",
          "Canlıda 5-bet blöfü ~yok — seni 4-bet'leyen genelde önde.",
        ],
        ruleBox:
          "4-bet ettiğin HER el, gelen 5-bet jam'e karşı planı önceden belli olmalı. '4-bet edip bakarız' yok.",
        narration:
          "Madalyonun son yüzü: 4-bet ettin ve rakip tekrar yükseltti, yani 5-bet geldi. Bu derinlikte 5-bet pratikte all-in demektir. Kural yine canlı gerçeğinden çıkar: 4-bet blöfü neredeyse olmadığı için, seni 4-bet'leyen ya da 5-bet'leyen genelde gerçekten öndedir. O yüzden 5-bet value içindir. Value jam'in: kral kral ve üstü her zaman. Kuvöz kuvöz ve as kral rakibe göre — agresif bir oyuncuya jam edersin, ama sıkı bir nit 4-bet'lediyse, ki onun aralığı as as ve kral kral'dır, kuvöz kuvöz ve as kral'ı foldlarsın. 5-bet blöfü canlıda neredeyse yoktur; kimse fold etmiyorsa blöf 5-bet tüm stack'ini yakar. Altın kural: 4-bet ettiğin her el, gelen 5-bet jam'e karşı planı önceden belli olmalı. Elli altı big blind derinlikte 4-bet zaten yirmi big blind civarı, yani commit eşiği; 4-bet'e bastığın anda 5-bet'e ne yapacağını biliyor olmalısın.",
      },
    ],
  },
  {
    id: "M7",
    title: "25–30bb bandı",
    chapter: "Bölüm 5 ★",
    minutes: 6,
    slides: [
      {
        title: "Bandın karakteri",
        bullets: [
          "Değer FOLD EQUITY'den gelir, kart tamamlamaktan değil.",
          "Aradığın el 'gelişebilen' değil, şimdiden iyi olan: as, broadway, çift.",
          "Karar sırası iki saniyede: MOD → POZİSYON → EL.",
        ],
        ruleBox:
          "25–30bb'de değer fold equity'den gelir, kart tamamlamaktan değil. 28bb'de suited connector geldiğinde üçüncü adıma (EL) bile geçmiyorsun.",
        visuals: [
          { kind: "hand", cards: "AK KQ 99", label: "Şimdiden iyi el: as / broadway / çift" },
        ],
        narration:
          "Şimdi turnuvanın en sık yaşanan ve en çok chip kaybedilen bandına geliyoruz: yirmi beş, otuz big blind. Bir önceki modüldeki 3-bet tabloları yüz, yüz elli big blind içindi; bu derinlikte onlar geçersiz, çünkü oyunun motoru değişiyor. Tek cümlede: bu bantta değer, fold equity'den gelir, kart tamamlamaktan değil. Yani aradığın el 'gelişirse iyi olur' diyen bir el değil, şimdiden iyi olan bir el: bir as, bir broadway, bir çift. Neden? Çünkü spekülatif ellerin tek motoru olan implied odds yirmi sekiz big blind'de çalışmaz. Set ya da kent yaptığında sana ödeyecek stack yok; tamamlamadığın yüzde seksen beş durumda ise elinde hiçbir şey kalmıyor, çaresizsin. O yüzden karar sıranı iki saniyeye indir: önce mod, sonra pozisyon, sonra el. Bu bantta suited connector geldiğinde üçüncü adıma, yani 'elim ne' sorusuna bile geçmiyorsun — mod ve pozisyon zaten cevabı vermiş oluyor.",
      },
      {
        title: "Açılış aralıkları (önünde kimse yok)",
        table: {
          section: "Bölüm 5",
          sub: "5.1",
          caption: "Boyut 2–2.2×. Bu derinlikte daha büyük açmanın anlamı yok.",
        },
        narration:
          "Önünde kimse yokken açacağın aralıklar bunlar; boyut iki, iki virgül iki kat, daha büyük açmanın bu derinlikte anlamı yok. Tabloyu pozisyon pozisyon oku. Erken pozisyonda, yani yu ti ci ve artı birde, dar açarsın: yedi yedi ve üstü çiftler, as on suited ve üstü, as jek offsuit ve üstü, kral kız suited. Pozisyon geç indikçe aralık genişler; button'da neredeyse bütün as'leri, geniş suited kralları ve bağlı elleri açarsın. Dikkat: buradaki eller 'şimdiden iyi' eller ekseninde seçildi — as'ler, broadway'ler, çiftler ağırlıkta. Derin stack'te açtığın küçük suited connector'ların çoğu bu tabloda yok, çünkü onların motoru bu bantta durmuş durumda.",
      },
      {
        title: "3-bet = JAM",
        table: {
          section: "Bölüm 5",
          sub: "5.2",
          caption: "Bu bantta FLAT YOK — ne SB'den, ne BB'den, ne IP'den.",
        },
        visuals: [
          {
            kind: "range",
            value: "TT+, AQs+, AKo",
            valueLabel: "Jam",
            caption: "Erken pozisyon açılışına jam aralığı (örnek). Yeşil = doğrudan all-in.",
          },
        ],
        ruleBox:
          "Bu bantta 3-bet = commit. '3-bet edip fold' diye bir yapı yok; doğrudan all-in gidiyorsun. Flat yok.",
        narration:
          "Bu bantta 3-bet kelimesini kafandan sil, yerine tek kelime koy: jam. Yirmi sekiz big blind'de 3-bet yapmak commit olmak demektir; '3-bet edip sonra fold ederim' diye bir yapı yok, çünkü stack'in buna izin vermiyor. O yüzden 3-bet edeceğin her eli doğrudan all-in olarak düşün. Kime karşı ne jam ediyorsun? Erken pozisyon açılışına on on ve üstü, as kız suited ve üstü, as kral offsuit. Cut-off ya da button açılışına daha geniş: sekiz sekiz ve üstü, as on suited ve üstü, as kız offsuit ve üstü, kral kız suited. Ve masada geniş açıp jam'e fold eden bir chip leader varsa, ona karşı aralığını daha da genişletirsin: yedi yedi, as dokuz suited, as jek offsuit, kral kız suited. En kritik cümle: bu bantta flat yok. Ne smol blind'den, ne büyük körden, ne pozisyonlu. Bir önceki modülün o geniş flat tabloları yüz big blind üstü dünyaya ait; burada ya jam edersin ya fold.",
      },
      {
        title: "Jam'e karşı call + fold listesi",
        bullets: [
          "Jam'e karşı call: 99+, AJs+, AQo+. Bundan aşağısı call değil.",
          "Otomatik fold: tüm suited connector'lar (T9s, 98s, 87s, 76s, 65s, 54s).",
          "Otomatik fold: suited gapper'lar; zayıf offsuit broadway (KJo, QJo, JTo); küçük çiftle FLAT.",
        ],
        visuals: [
          {
            kind: "range",
            value: "99+, AJs+, AQo+",
            valueLabel: "Call (jam'e karşı)",
            caption: "Rakip all-in geldiğinde call sınırı — altı call değil.",
          },
          { kind: "hand", cards: "T9s 87s KJo", label: "Bu bantta otomatik fold" },
        ],
        ruleBox:
          "Rakip all-in geldiyse: 99+, AJs+, AQo+. Bundan aşağısı 28bb'de call değil — ya jam'i sen yaparsın ya fold.",
        narration:
          "İki yön kaldı: sana jam gelirse ne call edersin, ve hangi elleri gözü kapalı atarsın. Rakip all-in geldiğinde call aralığın dar: dokuz dokuz ve üstü çiftler, as jek suited ve üstü, as kız offsuit ve üstü. Bunun altındaki hiçbir el yirmi sekiz big blind'de call değil — orada seçim ya jam'i senin yapman ya da fold. Fold listesi ise ezber: bütün suited connector'lar, yani on dokuz, dokuz sekiz, sekiz yedi, yedi altı, altı beş, beş dört suited — hepsi kayıtsız şartsız fold. Suited gapper'lar aynı şekilde. Zayıf offsuit broadway'ler — kral jek, kız jek, jek on offsuit — fold. Ve küçük çiftle flat etmek de yok; jam ayrı konu ama flat asla. Bu listeyi fold etmek zayıflık değil, cephane biriktirmek: spekülatif eli attığın her el, gerçek elle jam yapacağın anda arkanda duran chip demek.",
      },
      {
        title: "Saha vakası — GGMasters",
        table: {
          section: "Bölüm 5",
          sub: "5.5",
          caption: "Üçünde de doğru cevap fold; belirleyici olan el değil, moddu.",
        },
        visuals: [
          { kind: "hand", cards: "T9s 54s 87s", label: "Üçü de FOLD (28bb)" },
        ],
        ruleBox:
          "Soru 'bu el yeterince iyi mi' değil, 'bu el bu stack'te oynanabilir mi'. Spekülatif elleri fold etmek, gerçek elle jam yapacağın cephaneyi korur.",
        narration:
          "Bunu gerçek bir seansta görelim. Temmuz'daki bir GGMasters'ta, yirmi sekiz big blind bandında masa sana aynı soruyu üç farklı elle sordu. Smol blind'de on dokuz suited, kırk bine call teklifi, arkanda yirmi sekiz big blind — fold, çünkü smol blind'den flat kayıp pozisyon. Büyük körde beş dört suited, yetmiş üç binlik potta otuz bin ödeyeceksin — fold, çünkü implied odds motoru çalışmıyor. Yine büyük körde sekiz yedi suited, aynı durum — el biraz daha iyi ama karar aynı, fold. Üç el, üç fold, ve belirleyici olan el değil moddu. Aynı seanstan doğru karar örneği de var: on on ile button'dan yirmi üç big blind jam; bir milyonluk chip leader call düşündü ve fold etti, pot alındı. Bölüm 3'ün kuralı işledi — otuz big blind altında orta çift post-flop eli değil, jam-or-fold elidir. Masada seni bekleyen soru 'bu el yeterince iyi mi' değil; 'bu el bu stack'te oynanabilir mi'.",
      },
      {
        title: "Rakip okuma notu",
        bullets: [
          "Chip leader jam'e bir kez fold ettiyse: ona karşı jam aralığını genişlet.",
          "Geniş açıp jam'e katlanan profil, bu bantta masadaki en kârlı hedeftir.",
          "Öncelik: (1) o açtığında jam, (2) BTN/CO'dan açıp blindleri topla.",
        ],
        narration:
          "Son bir okuma notu, çünkü bu bantta kâr rakip seçiminden geçiyor. Bir chip leader'ın jam'e bir kez fold ettiğini gördüysen, o bilgiyi sakla: o oyuncunun açılışlarına karşı jam aralığını genişlet. Neden? Çünkü geniş açıp jam'e katlanan bir profil, bu bantta masadaki en kârlı hedeftir — bol açıyor ama baskıya dayanamıyor, sen de o baskıyı fold equity'ye çeviriyorsun. Öncelik sıran şu: birincisi, o oyuncu açtığında ona jam; ikincisi, button ya da cut-off'tan kendin açıp blindleri toplamak. Bu bantta beklemek de bir silah, ama beklerken doğru hedefi işaretlemiş ol.",
      },
    ],
  },
  {
    id: "M8",
    title: "Turn'de draw",
    chapter: "Bölüm 6",
    minutes: 4,
    slides: [
      {
        title: "Fold equity var mı",
        bullets: [
          "Station'a semi-bluff = para yakma → check, bedava kart.",
          "Reg'e karşı ve board senin aralığına uygunsa → bet.",
          "Bet'te iki kazanma yolu: fold ettirmek VEYA tamamlamak.",
        ],
        narration:
          "Pokerin en sık yaşanan turn sorusu şu: elimde bir draw var, turn'de bet mi atayım yoksa bedava river mı göreyim? Karar üç faktöre bağlı, ilki fold equity. Karşındaki station tipiyse, yani fold etmeyen biriyse, ona semi-bluff atmak para yakmaktır; adam fold etmez, sen de çıplak equity'nle kalırsın. O durumda check et, bedava kartı al, draw'ını bedavaya çekmeye çalış. Ama karşındaki bir reg'se ve board senin aralığına uygunsa, o zaman bet at. Çünkü bet attığında iki kazanma yolun olur: ya rakip fold eder ve potu hemen alırsın, ya da call eder ama sen draw'ını tamamlayıp büyük potu alırsın. İki yollu kazanç, tek yollu kazançtan her zaman iyidir — yeter ki karşında fold edebilecek biri olsun.",
      },
      {
        title: "Draw'ın kalitesi",
        table: {
          section: "Bölüm 6",
          sub: "5.2",
          caption: "Tamamlanınca ödenir mi?",
        },
        visuals: [{ kind: "hand", cards: "97s", label: "Düşük flush draw — check ağırlıklı" }],
        narration:
          "İkinci faktör draw'ın kalitesi, ve buradaki asıl soru şu: bu draw tamamlanınca bana ödeme yapılır mı? Nut flush draw'da bet ağırlıklı oynarsın; çünkü tamamlanınca action alırsın, üstelik blokerlerin güçlü olduğu için rakibin en iyi ellerini elinden alıyorsun. Düşük flush draw'da, mesela dokuz yedi suited'in flush draw'unda, check ağırlıklı oynarsın; çünkü tamamlansa bile daha üstün bir flush'a ödeme yapma riskin var, ikinci en iyi flush pahalı bir eldir. Açık uçlu kent draw'unda, düz bir boardda, hem bet hem check meşrudur; bu gizli bir güçtür, tamamlanınca çok ödenir, kararı rakibe göre verirsin. Gutshot'ta ise neredeyse hiçbir zaman semi-bluff yakıtı değildir; out'u az, gizliliği düşük, o yüzden check. Draw'ın rengine değil, tamamlandığında sana para getirip getirmeyeceğine bak.",
      },
      {
        title: "IP / OOP ayrımı",
        bullets: [
          "IP: check gerçekten bedava kart demek.",
          "OOP: check bedava kart garantisi vermez.",
          "OOP'ta draw'ı ya bet'le ya da call planıyla check et.",
        ],
        narration:
          "Üçüncü faktör pozisyon, ve bu çok önemli çünkü 'bedava kart' fikri pozisyona göre anlam değiştirir. Pozisyonluysan, yani son konuşan sensen, check etmek gerçekten bedava kart demektir; sen check edersin, rakip de check ederse river'ı hiç para vermeden görürsün. Ama pozisyonsuzsan, check bedava kart garantisi vermez; sen check edersin, rakip bet atar ve senin 'bedava göreceğim' planın çöker, şimdi para koymadan devam edemezsin. O yüzden pozisyonsuzken draw'ını ya bet'le, yani inisiyatifi al, ya da net bir call planıyla check et — 'nasılsa bedava görürüm' diyerek pasif check etme, çünkü o bedava çoğu zaman gelmez. Özetle: turn draw kararında üç şeyi sırayla sor — fold equity var mı, draw'ım tamamlanınca ödenir mi, ve pozisyonlu muyum.",
      },
    ],
  },
  {
    id: "M9",
    title: "PLO temelleri",
    chapter: "Bölüm 8",
    minutes: 5,
    slides: [
      {
        title: "Zihniyet farkları",
        bullets: [
          "Equity'ler yakın koşar — %60/%40 iyi favoriliktir.",
          "Nut hakimiyeti her şeydir; ikinci en iyi el pahalıdır.",
          "İki pot bet = stack ortada.",
        ],
        narration:
          "Şimdi farklı bir oyuna, Pot Limit Omaha'ya geçiyoruz; ama en çok işine yarayacak şey, NLH kafasıyla PLO oynamanın tuzaklarını bilmek. Önce zihniyet farkları. Birincisi: PLO'da equity'ler birbirine çok yakın koşar. NLH'de yüzde seksene yirmi favoriliğe alıştın; PLO'da yüzde altmışa kırk zaten iyi bir favoriliktir. Yani hiçbir el burada rahat değildir, kenarların incedir. İkincisi: PLO'da nut hakimiyeti her şeydir. İkinci en iyi el, yani nut'ın bir altı, PLO'da pahalı bir eldir; sürekli 'nut çekebiliyor muyum' diye sorarsın. Üçüncüsü: PLO'da pot çok hızlı büyür. İki pot bet üst üste geldiğinde stack zaten ortadadır; NLH'deki gibi yavaş şişme yok, üçüncü sokağa geldiğinde geri dönüşü olmayan bir noktaya gelirsin. Bu üç farkı içine yerleştir, çünkü NLH reflekslerin PLO'da seni yanıltacak.",
      },
      {
        title: "El seçimi",
        table: {
          section: "Bölüm 8",
          sub: "7.2",
          caption: "Dört kart birlikte çalışmalı.",
        },
        narration:
          "PLO'da el seçimi dört kartın birlikte çalışmasıyla ilgilidir. Dangler dediğimiz şey, dördüncü kartı diğerleriyle bağlantısız olan eldir; mesela as as yedi iki. Böyle bir el aslında üç kartlı bir eldir, dördüncü kart ölüdür, o yüzden çoğu zaman fold. Rundown, jek on dokuz sekiz gibi birbirine bağlı dört karttır; özellikle çift suited olduğunda, yani iki ayrı flush imkânı taşıdığında çok güçlüdür. Çıplak as as, yani yanında destek olmayan as as, PLO'da tek per muamelesi görür — NLH'deki gibi otomatik canavar değildir; nut potansiyeli yoksa büyük pot oynamaz. Ve gerçek silah: wrap artı flush draw. Wrap, boarda birden çok kartla bağlanıp on üç ve üzeri out veren dev bir kent draw'udur; üstüne flush draw da eklenince bu el agresif oynanır, çünkü equity'si dev ellerle bile başa baş koşar. El seçerken tek tek kartlara değil, dördünün birlikte ne yaptığına bak.",
      },
      {
        title: "NLH oyuncusunun tuzakları",
        bullets: [
          "AA'yı NLH gözüyle görmek — çift suited değilse sadece bir çift.",
          "Top pair / top two ile stack-off — iki per neredeyse hiç nut değil.",
          "Blöf frekansını NLH'den taşımak.",
          "OOP 3-bet potu oynamak — şüphe hâlinde flat et.",
        ],
        narration:
          "Son olarak, NLH'den PLO'ya geçen bir oyuncunun düştüğü dört tuzak — bunlar senin uyarı levhaların. Birincisi as as'i NLH gözüyle görmek: PLO'da as as, çift suited değilse ve board'a bağlanmıyorsa, sadece bir çifttir; ona canavar muamelesi yaparsan büyük pot oynayıp kaybedersin. İkincisi top pair ya da top two ile stack-off etmek: PLO'da iki per neredeyse hiçbir zaman nut değildir; kentler, setler, flush'lar sürekli masadadır, iki per'le tüm stack'i ortaya sürmek hatadır. Üçüncüsü blöf frekansını NLH'den taşımak: PLO'da aralıklar daha bağlıdır, herkesin eli boarda daha çok temas eder, o yüzden blöf daha az geçer; NLH'deki blöf sıklığını buraya taşırsan yanarsın. Dördüncüsü pozisyonsuz 3-bet potu oynamak: bu PLO'nun en zor spotudur, çünkü equity'ler yakın ve pozisyonsuz karar vermek çok pahalı; şüphe hâlinde 3-bet'lemek yerine flat et. Bu dört tuzağı bilmek, PLO masasında NLH refleksinin seni batırmasını engeller.",
      },
    ],
  },
  {
    id: "M10",
    title: "Şişmiş pot: SPR ve icra",
    chapter: "Bölüm 11 ★",
    minutes: 7,
    slides: [
      {
        title: "Şişmiş potu SPR tanımlar",
        bullets: [
          "SPR = stack ÷ pot. Bet sayısı değil, oran belirler.",
          "SPR 1–4 (100bb 3-bet'li pot): tek per bluff-catcher.",
          "Önce SPR'yi oku, sonra tek per'in rolünü ver.",
        ],
        table: { section: "Bölüm 11", sub: "11.0", caption: "Önce SPR, sonra rol." },
        ruleBox: "Derinde şişmiş potu bet sayısı değil SPR tanımlar.",
        narration:
          "Kök hatanın teşhisini önceki modüllerde koyduk: tek per'i şişmiş potta yanlış sınıflandırmak. Bu modül teşhisten sonrasını verir — icra. İlk mesele: 'şişmiş pot' nedir, nasıl ölçülür? Cevap bet sayısı değil, stack pot oranı. Flopta kalan stack'i pota böl. Oran küçükse pot şişmiştir, büyükse değil. Bir'in altında karar zaten preflop verildi, commit'sin. Bir ile dört arası — mesela yüz big blind derinlikte üç bet'li pot — tek per'in bir bluff-catcher'dır; burada büyük pot başlatma. Dört ile sekiz arası iki sokak value alıp kontrol edersin, üçüncü sokakta dikkat. Sekizin üstünde ince value alınabilir, ama biri re-raise ederse pot aniden bir-dört bandına düşer ve tek per yine bluff-catcher olur. Kural tek cümle: önce stack pot oranını oku, sonra tek per'e rol ver. Derinde tek per'i erken bluff-catcher'a düşürüp value kaçırmak da hata; orta-sığda eski derin refleksle tüm stack'i ortaya sürmek de.",
      },
      {
        title: "SPR'yi say — örnek + committed matematiği",
        bullets: [
          "SPR = en küçük kalan stack ÷ pot (flop anında yuvarla).",
          "Single-raised pot ~SPR 8–10; 3-bet'li pot ~SPR 3.",
          "Commitment his değil, orandır.",
        ],
        ruleBox:
          "Flop'a her girişte SPR'ı yuvarla; 3+ ise tek pair'le büyük pot yok — karar ağacın baştan sadeleşir.",
        narration:
          "Bandları öğrendik; şimdi tek bakışta saymayı öğrenelim. Stack pot oranı, en küçük kalan stack'i pota bölmektir — ikinizden kısa olanın stack'i, çünkü ortaya en fazla o kadar girebilir. Somut örnek: iki bin, dört bin blindde sen iki buçuk kat açtın, büyük kör call etti, pot yaklaşık yirmi dört bin. İkinizin de arkasında iki yüz kırk bin varsa oran on — yani derin, tek pair'le büyük pot yok. Ama aynı el 3-bet'li potta oynansaydı, pot altmış bin ve arkada yüz seksen bin kalsaydı, oran üçe iner — işte as as'in 3-bet'li potta stack koyması bu yüzden doğru. Ve buradan kök hatanın matematiksel tanımı çıkıyor: senin 'pot büyüdü, artık committed'im' hissin aslında bir stack pot oranı okuma hatasıdır. Diyelim on on'un var, flopta oran yaklaşık yedi, sekizdi; o derinlikte çift artı draw bile jam için marjinaldi, tek pair olsa net fold bölgesiydi. His 'pot büyük' diyor, ama oran 'hayır, stack hâlâ pota göre derin' diyor. Şunu kafana kaz: committed olmak bir his değil, bir orandır. Pratikte flop'a her girişte oranı kabaca yuvarla; üçün üstündeyse tek pair'le büyük pot oynamayacaksın ve karar ağacın daha başında sadeleşir.",
      },
      {
        title: "Turn disiplini — ikinci fıçı",
        table: { section: "Bölüm 11", sub: "11.1", caption: "Boyutlar kalibre; yön sabit." },
        ruleBox:
          "İkinci fıçıyı atmadan sor: river planımı söyleyebiliyor muyum? Kötü river'da check-fold edebileceğim pot bırakıyor muyum?",
        narration:
          "Kök hata çoğu zaman turn'de doğar: potu ikinci fıçıyla kendin şişirir, river'a bluff-catcher olarak kalırsın. O yüzden turn kararı kritik. Tabloya bak. Overpair'in varsa boş ya da düşük turn'de kontrollü bet, sana overcard gelince stack pot oranını say ve dikkatli ol, board eşleşince check eğilimi, draw tamamlayan kartta check ya da boyutu düşür. Top pair iyi kicker daha pasif: ince bet ya da check-call, kötü kartta check-fold eğilimi. Top pair zayıf kicker çoğu turn'de check. Havayla bloker taşıyorsan boş turn'ler barrel adayı, ama kart gelince bırak. Boyutlar senin icra verinle kalibre edilecek, ama yön sabittir: potu her büyüttüğünde river'da check-fold etme lüksünü satın alma gücün azalır. İkinci fıçıyı atmadan iki soruyu cevapla — river planımı söyleyebiliyor muyum, ve kötü bir river'da check-fold edebileceğim pot bırakıyor muyum? Turn'de attığın boyut, river'da vereceğin kararın fiyatıdır.",
      },
      {
        title: "River — bluff-catch: hangi fiyata call",
        table: { section: "Bölüm 11", sub: "11.2", caption: "Boyut + hangi blöf + bloker." },
        narration:
          "River'da rakip bet attı ve elin bir bluff-catcher — sadece blöfleri yenen, value'ları yenemeyen bir el. Karar 'küçük pota call, büyük pota fold' kaba eğiliminden daha ince; üç değişkene iner. Bir: rakibin boyutu. Küçük boyut daha çok blöf ve ince value içerir, büyük boyut polarizedir — ya çok güçlü ya blöf. İki: bu boyutu senden zayıf hangi value atardı? Cevap 'hiçbiri' ise karşındaki ya nut ya blöftür, ve o zaman call'ını onun blöf frekansı belirler. Üç: bloker. Elin rakibin value kombinasyonlarını kesiyorsa call'a daha yatkınsın; onun blöflerini kesiyorsan tam tersi. Bu üçünü birlikte oku, tek başına pot boyutuna bakma. Şüphede pusulan şu: bu boyutu benden zayıf bir el ödemek için mi atıyor, yoksa beni attırmak için mi?",
      },
      {
        title: "Kötü river kataloğu — jam ASLA",
        bullets: [
          "Alt kartların 4.'sü / kent tamamlayan kart",
          "Üçüncü flush kartı (senin elinde flush yoksa)",
          "Board eşleşmesi (set / full house kapısı)",
          "Üstüne overcard (rakip top pair'i geçer)",
        ],
        ruleBox:
          "Bu kartlarda: küçük pota check-call, büyük pota check-fold. Jam ASLA — jam value ancak senden zayıf bir el ödeyecekse vardır.",
        narration:
          "Son olarak, overpair ya da güçlü tek per'le elinde tuttuğun bir alarm listesi: 'value target yok' kartları. Alt kartların dördüncüsü ya da kenti tamamlayan kart — üçüncü modüldeki as as elenmesi tam buydu, iki dört beşe river altı geldi, üçlü de kent de set de seni geçmişti. İkincisi üçüncü flush kartı, senin elinde flush yoksa. Üçüncüsü board'un eşleşmesi, ki set ya da full house kapısını açar. Dördüncüsü board'a gelen overcard, ki rakibin top pair'i senin overpair'ini geçebilir. Bu kartlar geldiğinde kural nettir: küçük pota check-call, büyük pota check-fold, ve jam asla. Jam ancak senden zayıf bir el ödeyecekse value'dur; bu kartlarda ödeyecek zayıf el yoktur. Bu modülün tamamı kök hatanın icra katmanı: preflop aralığı hatanın sıklığını düşürür, bu bölüm ise hata anına gelindiğinde doğru icrayı verir.",
      },
    ],
  },
  {
    id: "M11",
    title: "ICM eşikleri ve final table",
    chapter: "Bölüm 12 ★",
    minutes: 7,
    slides: [
      {
        title: "ICM ne zaman açılır",
        table: { section: "Bölüm 12", sub: "12.0", caption: "Event'e göre — lobiden doğrula." },
        ruleBox: "Karar sırasına 0. adım: bu event'te ICM açık mı?",
        narration:
          "ICM, yani Independent Chip Model, chip'lerinin gerçek para değerini ölçer — ve turnuvada chip para değildir, kaybettiğin chip kazandığından daha çok acıtır. Ama ICM her masada aynı sıkılıkta açık değildir. Aynı yirmi sekiz big blind, aynı el, aynı pozisyon: küçük sahalı yüksek stakes'te ICM kararıdır, büyük sahalı Main event'in ilk gününde saf chip kararıdır. Tabloya bak: küçük saha ve dik ödeme olan event'lerde ICM erken açılır, neredeyse her Day 2 kararı ICM altındadır; Main gibi büyük rec-ağırlıklı sahada geç açılır. Bu ayrımı masada değil, önceden yapmış ol. Saha boyutunu ve ödeme yüzdelerini uydurma — kayıt sayısına göre lobiden oku. Ve karar sırana sıfırıncı adımı ekle: bu event'te ICM açık mı? Cevap hayırsa saf chip oyna; evetse aşağıdaki risk düzeltmelerini uygula.",
      },
      {
        title: "Risk premium — asıl soru: cover ediliyor muyum",
        table: { section: "Bölüm 12", sub: "12.1", caption: "Jam ve call aralığı ICM'de ayrışır." },
        ruleBox: "Call spot'unda İLK soru 'baloncuk mu?' değil, 'cover ediliyor muyum?'dur.",
        narration:
          "ICM'nin bir numaralı asimetrisi şu: jam etmek, call etmekten çok daha ucuzdur. Çünkü jam ederken senin fold equity'n var — rakip atabilir; call ederken yok, kartını açmak zorundasın. Bu yüzden ICM altında jam aralığın ve call aralığın ayrışır; simetri sadece bir chip varsayımıdır. Buradan en kritik masa sorusu çıkar. Bir call kararında ilk soru 'baloncuk mu?' değildir; ilk soru 'cover ediliyor muyum?'dur. Seni sıkan şey bubble değil, cover edilmektir — yani kaybedersen elenirsin. Seni cover eden bir chip leader'ın jam'ine karşı call aralığın sert daralır. Ama seni cover etmeyen, senden kısa birinin jam'ine karşı — kaybetsen bile sıfırlanmazsın — baloncukta bile geniş call edersin. İşte kalibre edilecek sızıntın: bu ikisini 'baloncuk demek ki sık' diye aynı kefeye koymak. Değiller. Kademe içerikleri drill'de ICMIZER ile netleşir; uydurma eşik yok.",
      },
      {
        title: "Senin kalibren — cover / cover değil",
        bullets: [
          "Cover EDİLİYORSAN (chip leader jam'i, 22bb, sert baloncuk): CALL = 88+, AJs+, AQo. A9s ve KQs FOLD.",
          "Sürücü: kaybedersen bust; A9s ters-domine, KQs flip — tournament life'a değmez.",
          "Cover EDİLMİYORSAN (jammer senden kısa): çok daha geniş call — A9s ve KTo dahil.",
          "Leak'in yapışkan yarısı: cover edilmezken bile fold reflexi.",
        ],
        ruleBox:
          "Masa cue'su: jam'e fold basmadan önce 'cover ediliyor muyum?' — Hayır ise call sandığından çok daha geniş.",
        narration:
          "Şimdi senin kendi kalibre eşiklerin — genel teori değil, senin verin. Cover ediliyorsan, yani seni geçen bir chip leader yirmi iki big blind civarı sert baloncukta sana jam attıysa: call aralığın sekiz sekiz ve üstü, as jek suited ve üstü, ve as kız offsuit. As dokuz suited ve kral kız suited'i foldlarsın. Sebep açık: kaybedersen elenirsin, sıfır euro; as dokuz suited ters-domine, kral kız bir flip — marjinal kenar tournament life'a değmez. Ama madalyonun asıl yüzü, senin sızıntının yaşadığı taraf: cover edilmiyorsan. Jammer senden kısaysa, yani kaybetsen bile elenmeyeceksen, çizgin çok daha geniştir — as dokuz suited ve kral on offsuit bile call'dır. Drill verinde bunları bile foldladın, 'range yetersiz' diye; oysa kral on offsuit geniş bir on üç big blind jam'ine yaklaşık yüzde elli dört equity'ye sahip, fiyat için yüzde kırk dört yeter. Yani hata call değil, fold reflexidir — ve covered'la not-covered'ı yan yana gördükten sonra bile sürdü. Masa cue'sunu ezberle: jam'e fold basmadan önce bir saniye dur ve sor, cover ediliyor muyum? Hayırsa, call aralığın sandığından çok daha geniş.",
      },
      {
        title: "Final table — rol matrisi",
        table: { section: "Bölüm 12", sub: "12.2", caption: "Doğru davranış el'e değil, stack rolüne bağlı." },
        narration:
          "Final table'da doğru davranışı elin değil, stack rolün belirler. Kısaysan, yani on beş big blind altındaysan ve masada senden de kısa biri varsa, ilk jam'ci sen ol ve ladder'ı gözle; ama senden kısa yoksa katlanma — doğru jam'i yap, çünkü kilitlenip blind'lere yenilmek de bir busttur. Orta stacksin — en kırılgan rol: kimin bust'ını beklediğini bil, seni cover edenle pot açma. Ama masada fiilen en kısaysan, yani herkes senden derinse, on ikinci bölümün beşinci kuralı devreye girer: herkes kilitliyken jam aralığını genişlet, katlanma. Cover eden derin stacksin — agresyon serbest: kısa ve orta stackleri cezasız ez, ama başka bir chip leader'la ego savaşına girme. Özet: önce masadaki stack dağılımına ve kendi rolüne bak, sonra el oyna. Final table'da el ikinci plandadır.",
      },
    ],
  },
  {
    id: "M12",
    title: "Multiway pot doktrini",
    chapter: "Bölüm 13 ★",
    minutes: 6,
    slides: [
      {
        title: "Çekirdek — her ek oyuncu ne değiştirir",
        bullets: [
          "Her ek oyuncu blöfün fiyatını KATLAR.",
          "Value'nun barını YÜKSELTİR (top pair bir sınıf düşer).",
          "Nut'un değerini ARTIRIR.",
        ],
        ruleBox:
          "Her ek oyuncu blöfün fiyatını katlar, value'nun barını yükseltir, nut'un değerini artırır.",
        narration:
          "Kök hatanın tanımı 'şişmiş veya multiway potta tek per'i yanlış sınıflandırmak'tı; bu modül o tanımın multiway yarısını verir. Rec-ağırlıklı Main'de potların çoğu çok kişilidir, yani en uzun süre bu dokuda oynayacaksın. Tek kural her şeyi özetler: her ek oyuncu blöfün fiyatını katlar, value'nun barını yükseltir, nut'un değerini artırır. Sebebi bileşik olasılık: masadaki rakip sayısı arttıkça, birinin iki per artı ya da set olma ihtimali katlanarak büyür. Bu yüzden multiway şişmiş pot, tek per'i heads-up şişmiş pottan bile daha net bir bluff-catcher yapar. Heads-up'ta value olan bir el, üç kişi flopu gördüğünde bir sınıf aşağı iner. Aklında tek cümle taşı: multiway'de tek per, heads-up'takinden bir sınıf aşağıdadır.",
      },
      {
        title: "Heads-up → 3+ yollu geçiş",
        table: { section: "Bölüm 13", sub: "13.1", caption: "Aynı el, kişi sayısına göre bir sınıf düşer." },
        narration:
          "Şimdi elini heads-up'tan çok kişili pota taşıdığında ne değiştiğine bak. C-bet frekansın çöker: heads-up'ta yüksek basarsın, üç ve üstü yolluda sadece güçlü value ve gerçek nut-draw ile devam edersin. Top pair heads-up'ta value'ydu; multiway'de bir sınıf düşer, check ya da pot kontrolüne döner. Overpair heads-up'ta büyük pot adayıydı; multiway'de iki sokak value alıp kontrol edersin ve stack pot oranını sayarsın. Blöf heads-up'ta üç kritere bağlıydı; multiway'de neredeyse yok — sadece nut-bloker taşıyan bir semi-bluff. Nut flush draw'ı bet'lemeye devam edersin, çünkü fiyat iyi ve tamamlanınca çok ödenir. Ama nut olmayan flush draw ya da gutshot multiway'de check'e döner ya da ölür. Özet: kişi sayısı arttıkça agresyonun daralır, sadece en güçlü value ve nut-draw ayakta kalır.",
      },
      {
        title: "Multiway'de blöf — dördüncü kriter",
        table: { section: "Bölüm 13", sub: "13.3", caption: "Rakip sayısı = blöfün geçmesi gereken kapı." },
        ruleBox:
          "'Kime blöf yapılmaz' listesine eklenir: Multiway pot (kim olursa olsun). Tek station bile blöfü öldürür.",
        narration:
          "İkinci modülde blöfün üç kriterini öğrendik: bloker, bağlantı, board sahipliği — ama bunlar tek rakibe kurgulanmıştı. Multiway'de dördüncü bir değişken devreye girer: rakip sayısı, yani blöfün geçmesi gereken kapı sayısı. Her ek oyuncu bir kapı daha ekler ve tek bir station bile o kapıyı kapatıp blöfü öldürür. Tabloya bak: heads-up'ta üç kriter geçerli, üç yolluda sadece nut-bloker semi-bluff, dört ve üstü yolluda blöf yok. Kimden korkacağın da önemli: preflop caller'ların hepsinden değil, flop'ta hâlâ duran en sıkı aralıktan. Birinin bet'ine, aradaki call'dan sonra gelen raise neredeyse her zaman nut'tır; orada tek per'le devam yoktur. Kısaca ikinci modülün 'kime blöf yapılmaz' listesine yeni bir madde ekle: multiway pot, kim olursa olsun.",
      },
    ],
  },
  {
    id: "M13",
    title: "40–70bb köprü bandı",
    chapter: "Bölüm 14 ★",
    minutes: 5,
    slides: [
      {
        title: "Bandın karakteri",
        bullets: [
          "3-bet giderek commit'e yaklaşır (40bb'de tam commit).",
          "Flat penceresi daralır ama sıfır değil — IP ve BB'de dar flat.",
          "Offsuit broadway / dominate edilebilir eller düşer; oynanabilirlik önde.",
        ],
        narration:
          "Dördüncü bölüm yüz ile yüz elli big blind için, beşinci bölüm yirmi beş ile otuz big blind için tablo verdi; arası, yani kırk ile yetmiş big blind bandı, tek satırlık notlarla kalıyordu. Oysa Main Day 2 ve tüm High Roller'ların orta fazı ağırlıkla bu bandda oynanır — en çok elde bulunacağın derinlik. Bandın karakteri şu. Bir: 3-bet giderek commit'e yaklaşır; altmışta değil ama kırkta tam commit'sindir. İki: flat penceresi daralır ama beşinci bölümdeki gibi sıfır değildir — pozisyonlu ve büyük körde dar bir flat yaşar. Üç: offsuit broadway ve dominate edilebilir eller dörde göre düşer; bu bandda oynanabilirlik öndedir. Tek cümle: mod önce gelir, aralık sonra — ve bu band iki uç arasındaki köprüdür.",
      },
      {
        title: "3-bet çerçevesi (40–70bb)",
        table: { section: "Bölüm 14", sub: "14.1", caption: "Yeni liste değil — B4'ten yön." },
        ruleBox:
          "3-bet edeceğin el 4-bet/jam'e devam edebilmeli — edemiyorsa flat (IP/BB) ya da fold.",
        narration:
          "Bu bandda yeni bir kombo listesi ezberlemiyorsun; dördüncü bölümün kalibre aralıklarının bu derinlikte hangi yönde daraldığını alıyorsun. Tabloya bak. Altmış ile yetmiş big blind arası: value tarafın dördüncü bölümle neredeyse aynı, ama blöf tarafın daha polarize — blöfü en iyi bloker ve oynanabilirlik ellerine daralt. Kırk ile altmış arası: value'nun zayıf uçlarını kes, blöfü neredeyse tamamen bırak çünkü canlıda kimse fold etmiyor, ve 3-bet commit'e yaklaşır. Altın kural: yaklaşık altmış big blind'in altında '3-bet edip fold' yapısı zayıflar, kırkta biter. O yüzden 3-bet edeceğin el, gelen 4-bet ya da jam'e devam edebilecek bir el olmalı; devam edemiyorsa o eli ya flat edersin ya atarsın, boşuna 3-bet'leyip fold etme.",
      },
      {
        title: "60 → 40bb geçiş işaretleri",
        bullets: [
          "Tablodan ilk çıkanlar: suited connector'la 3-bet blöfü",
          "Küçük çiftle spekülatif flat",
          "Offsuit broadway coldcall",
        ],
        ruleBox: "45bb'de 130bb aralığı oynamak en pahalı alışkanlıktır.",
        narration:
          "Son olarak, banttan aşağı düşerken tablodan ilk çıkması gereken elleri bil, çünkü bunlar derinlik azalınca doğrudan zarara döner. Birincisi suited connector'la 3-bet blöfü: derinlik olmadan ne fold equity'si ne implied odds'u kalır. İkincisi küçük çiftle spekülatif flat: set arıyorsun ama ödeme derinliği yok. Üçüncüsü offsuit broadway coldcall: zaten dominate edilen bir eli pozisyonsuz oynamak. Sıfırıncı cümlenin uyarısı burada somutlaşır: kırk beş big blind'de yüz otuz big blind aralığı oynamak en pahalı alışkanlıktır. Yanlış-mod-aralığı, şişmiş pot üretmenin bir numaralı kaynağıdır — yani kök hatanın preflop kaynağı. Önce mod, sonra aralık: bu köprü bandı o omurgayı iki uç arasında tamamlar.",
      },
    ],
  },
  {
    id: "M14",
    title: "PLO turnuva katmanı",
    chapter: "Bölüm 15 ★",
    minutes: 6,
    slides: [
      {
        title: "Neden ayrı bir katman",
        bullets: [
          "Pot-limit'te 'jam' yok — max pot-raise var.",
          "Equity'ler yakın koşar → fold equity doktrini zayıflar.",
          "'30bb PLO' ≠ '30bb NLH' — B5 jam/fold refleksi geçersiz.",
        ],
        narration:
          "PLO temellerini dokuzuncu modülde gördük; bu modül turnuva katmanını ekliyor, çünkü yirmi beş bin euroluk PLO High Roller ayrı bir event. Önce neden ayrı bir katmana ihtiyaç var? Çünkü beşinci bölümün NLH jam-fold refleksi PLO'da geçersizdir. Bir: pot-limit'te 'jam' diye bir şey yok, sadece maksimum pot-raise var; stack'i tek hamlede ortaya süremezsin. İki: PLO'da equity'ler birbirine çok yakın koşar, o yüzden fold equity'ye dayanan doktrin — rakibi atma gücün — PLO'da zayıflar; kimse kolay atmaz. Sonuç: otuz big blind PLO, otuz big blind NLH ile aynı şey değildir. NLH'deki 'kısa stack, 3-bet eşittir jam' refleksini PLO'ya taşırsan yanarsın. Bu modül o çelişkiyi kapatır: aynı derinlik, tamamen farklı icra.",
      },
      {
        title: "PLO stack modları",
        table: { section: "Bölüm 15", sub: "15.1", caption: "Kısa PLO'da pot-raise = commit." },
        narration:
          "PLO'da stack modları NLH'den farklı çalışır. Altmış big blind ve üstünde standart PLO oynarsın: implied odds tavandadır, rundown ve çift-suited ellerin değeri zirvededir. Yirmi beş ile altmış arası kritik bant: beşinci bölüm burada geçersizdir, çünkü jam yok, pot-raise var. Bu bantta nut-odaklı oynarsın; çıplak as as postflop oynanmaz, değeri pre-commit'tedir — yani 3-bet edip stack pot oranını bir'e ya da altına indirmekte. Yirmi beşin altında pot-raise zaten kalan stack'i flop'ta otomatik ortaya sürer; bunu bir jam say ve aralığını ona göre seç. Kural tek cümle: kısa PLO'da pot-raise commit demektir. Aralığını 'flop'ta stack ortaya girecek' varsayımıyla seç — çift-suited rundown ve güçlü as as'li eller; dangler'lı, yani dördüncü kartı kopuk her şeyi kes.",
      },
      {
        title: "Commit eşiği — SPR",
        table: { section: "Bölüm 15", sub: "15.2", caption: "Commit, potu şişirdiğin sokakta verilir." },
        ruleBox: "PLO'da commit kararı flop'ta değil, pot'u şişirdiğin sokakta verilir.",
        narration:
          "PLO'da şişmiş pot NLH'den iki sokak erken oluşur, o yüzden commit kararını pot şişmeden önce bil. Tabloya bak, ölçü yine stack pot oranı. Oran ikinin altındaysa sadece nut artı güçlü redraw ile stack ortaya girer — nut set artı flush draw, ya da wrap artı nut flush draw gibi. Çıplak as as ya da tek yönlü bir el bu oranda stack-off etmez. İki ile dört arası: yapılmış nut el ve güçlü kombo draw devam eder; ikinci nut ve non-nut draw etmez. Dörtün üstünde: nut potansiyeli yüksek elleri sokak sokak inşa edersin, ama non-nut tamamlanmış el burada bir tuzaktır. Bir istisna: potu sen preflop şişirdiysen, yani 3-bet'li pot ve stack pot oranı bir'in altındaysa, çıplak as as overpair commit'tir — bu kök hata değil, preflop equity kararıdır. Yasak olan, postflop şişmiş potta tek yönlü elle stack-off. Özet: PLO'da commit kararını flop'ta değil, potu şişirdiğin sokakta verirsin.",
      },
      {
        title: "Out sayımı — nut out",
        bullets: [
          "Ham out yanıltır; stack-off eşiği NUT out'la ölçülür.",
          "'Wrap + FD: 13 out' — yarısı non-nut ise silah değil, tuzak.",
          "Gerçek silah: nut-uçlu wrap + nut flush draw.",
        ],
        ruleBox: "Stack-off için ham out değil, NUT out say.",
        narration:
          "Son olarak out sayımı — ve PLO'da en pahalı yanılgı burada. Ham out seni yanıltır; stack-off eşiğini nut out ile ölçmen gerekir. 'Wrap artı flush draw, on üç out' cümlesi iskonto edilmeden tehlikelidir: eğer o on üç out'un yarısı non-nut ise, elinde gerçek bir silah değil bir tuzak vardır — tamamlanınca bile ikinci en iyi eli yapıp stack kaybedersin. Dokuzuncu modülün 'gerçek silah' etiketi yalnız nut flush draw'lı wrap için geçerli kalır. Kural nettir: stack-off kararı için ham out değil, nut out say. Kaç out'un seni gerçekten öne geçirir, kaçı seni ikinci en iyiye götürür — ayrımı yapmadan tüm stack'i ortaya sürme. Bu, dokuzuncu modülün 'çıplak as as tek per'dir' kuralının draw'lara ve derinliğe genişletilmiş hâlidir.",
      },
    ],
  },
  {
    id: "M15",
    title: "Zihinsel omurga: tilt, otopsi, re-entry",
    chapter: "Bölüm 16 ★",
    minutes: 6,
    slides: [
      {
        title: "Bustout + re-entry kartı",
        table: { section: "Bölüm 16", sub: "16.1", caption: "Bustout → 20 dk uzak → doldur → karar." },
        ruleBox:
          "Serinin en pahalı kararı bir el değil: bustout sonrası 5 dakikada verilen re-entry kararı. Tilt'te otomatik re-entry = kök hatanın bankroll ölçeği.",
        narration:
          "Kitap şimdiye kadar yüzde yüz teknikti. Ama yirmi bir ile yirmi dokuz Ağustos bir dayanıklılık yarışı: SHR, PLO, sekiz günlük Main ve High Roller, üstüne event çakışmaları. Teknik ne kadar iyi olursa olsun, onu uygulayacak karar-durumunu — yorgunluk, tilt, re-entry baskısı — yöneten tek satır yoktu. Bu modül o kartları veriyor. En pahalı tek karar bir el değildir: bustout sonrası beş dakikada verilen re-entry kararıdır. Tilt hâlinde otomatik re-entry basmak, kök hatanın bankroll ölçeğidir — şişmiş bir seri yatırımında tek bullet'a value muamelesi. Zorunlu bekleme şu: bustout, yirmi dakika masadan uzak, sonra karttaki soruları doldur, sonra karar. Tabloya bak: elenme kötü bir karar mıydı yoksa varyans mıydı, sonraki bullet hangi flight'ı yiyor, toplam seri maruz kalman ön-limitin içinde mi, fiziksel durumun yeşil mi. Ve senin kalibren, event başına maksimum bullet: SHR bir, PLO iki, Main iki, HR iki. SHR yüz binde re-entry yok — orada ikinci mermi tek başına artı yüz bin euro, disiplin dışı.",
      },
      {
        title: "Tilt kartı",
        table: { section: "Bölüm 16", sub: "16.2", caption: "Önce tilt FARK edilir, sonra hamle." },
        ruleBox: "Tilt'te alınan karar aralıktan değil, yaradan çıkar — önce yara etiketlenir.",
        narration:
          "Kök hata soğuk kanla nadiren yapılır; tipik olarak bir tetikleyiciyi izleyen ellerde ortaya çıkar. O yüzden tilt'teyken ezber cümle okunmaz — önce tilt'in kendisi fark edilir. Tabloya bak, üç tetikleyici ve anında hamlesi: bad beat ya da büyük pot kaybı, belirtisi kötü ellerle kovalama, hamlesi derin nefes. Uzun card-dead ve aksiyon açlığı, belirtisi daha hızlı ve snap oynama, hamlesi bir orbit boyunca elini kilitlemek. Blöf gösterilmesi ya da ego, belirtisi telefona sarılma, hamlesi su içmek ve ayağa kalkmak. Senin belirtilerin, kalibrende, üçü de sende var ve tek baskın tetikleyici yok: daha hızlı snap oynama, telefona sarılma, kötü ellerle kovalama. Bu üçünden herhangi biri belirdiğinde alarm çalsın; hangi tetikleyici olduğunu teşhis etmeye durma, belirtiyi fark et ve o satırın hamlesini uygula. Kural: tilt'te alınan karar aralıktan değil yaradan çıkar — o yüzden önce yarayı etiketle.",
      },
      {
        title: "Otopsi kuralı",
        table: { section: "Bölüm 16", sub: "16.3", caption: "Doğru karar + kötü sonuç → aralık DEĞİŞMEZ." },
        ruleBox: "Kurala uyduysan ve kaybettiysen: 'doğru karar, kötü sonuç' — ARALIK DEĞİŞMEZ.",
        narration:
          "Son kart otopsi kuralı, ve bu senin kalibrasyonunu koruyan filtredir. Ne zaman otopsi yaparsın? El bittiği an değil — gün bittikten sonra. Masada sadece eli not al, çözümlemeyi akşama bırak. İki soru sorarsın: bir, karar anında bildiklerimle kitaptaki kural neydi? İki, o kurala uydum mu? Eğer uyduysan ve yine de kaybettiysen, vaka defterine 'doğru karar, kötü sonuç' yaz — ve aralığını değiştirme. Bu filtre neden kritik? Çünkü SHR'de doğru jam'ler sık kaybedilecek; bu filtre olmadan, dördüncü ve beşinci bölümün özenle kalibre edilmiş tablolarını turnuva ortasında bozmaya başlarsın. Tek uyarı: 'doğruydu, varyanstı' etiketi kendini aklama kapısına dönüşmesin — yalnız kurala gerçekten uyduysan geçerlidir. Sonuç değil, karar değerlendirilir.",
      },
    ],
  },
  {
    id: "M16",
    title: "WSOP Day 2 — 56bb restart planı",
    chapter: "Bölüm 17",
    minutes: 8,
    slides: [
      {
        title: "Bu turnuva neden ayrı bir modül",
        table: { section: "Bölüm 17", sub: "17.1", caption: "Day 2 profili — 56bb, freezeout, re-entry yok" },
        bullets: [
          "Freezeout + re-entry yok — tek mermin var, bustout kesin.",
          "25 dakikalık seviye hızlı: 56bb, üç saat pasif oyunla 25bb'ye erir.",
          "El sayısında geniş, stack riskinde dar.",
        ],
        ruleBox: "Pasiflik bu yapıda güvenli değil — yavaş elenmedir.",
        narration:
          "Bu senin turnuvan: WSOP Online Main Event, day two restart, elli altı big blind. Neden genel doktrinin dışında ayrı bir modül? Çünkü üç yapısal gerçek her kararı büker. Bir: bu bir freezeout ve re-entry yok — elenirsen bittin, ikinci mermi yok. İki: seviyeler yirmi beş dakika, yani çok hızlı; blindler saatte yaklaşık iki buçuk kat artıyor, elli altı big blind sadece üç saat pasif oyunla yirmi beş big blind'e eriyor. Yani bu yapıda hiçbir şey yapmadan beklemek güvenli değil, tersine yavaş bir elenmedir. Üç: para henüz garantide değil, bubble öncesi bir masaya oturur gibi oturuyorsun. Bu üçünün toplamı tek bir profil veriyor: el sayısında geniş, stack riskinde dar. Yani küçük potlarda sürekli aktif olacaksın — çalacaksın, baskı yapacaksın — ama tüm stack'ini yalnızca net bir planla ve güçlü bir el kombinasyonuyla ortaya süreceksin. Şişmiş potta tek per, as as dahil, hâlâ bir bluff-catcher; kök hata kuralı bu turnuvada da bire bir geçerli.",
      },
      {
        title: "Açılış aralıkları (8-handed, ~50bb)",
        table: { section: "Bölüm 17", sub: "17.3", caption: "Pozisyona göre open — 2.1–2.3x, ante var" },
        bullets: [
          "Ante olduğu için çalmak hâlâ çok kârlı.",
          "Erken pozisyon dar (%13–15); button geniş (%40–44).",
          "35bb altına düşersen bu tablo geçmez → stack modları.",
        ],
        visuals: [
          {
            kind: "range",
            value: "22+, A2s+, K5s+, Q7s+, J7s+, T7s+, 96s+, 86s+, 75s+, 65s, 54s, A4o+, K9o+, Q9o+, J9o+, T9o",
            valueLabel: "Button açılış",
            caption: "Button ~%40 open aralığı",
            compact: true,
          },
        ],
        narration:
          "Açılış aralıkların; boyut iki nokta bir ile iki nokta üç kat arası, daha büyük açmanın bu derinlikte anlamı yok. Tabloyu pozisyon pozisyon oku. Erken pozisyonda, yani yu ti ci ve yu ti ci artı birde, dar açarsın: yedi yedi ve üstü çiftler, as on suited ve üstü, kral jek suited, kız jek suited, as jek offsuit ve üstü, kral kız offsuit. Orta ve geç pozisyonda aralık genişler; button'da neredeyse bütün suited as'leri, geniş suited kralları ve bağlı elleri açarsın, yaklaşık yüzde kırk. Online sahada rakipler blind savunmasını daha doğru yapıyor, o yüzden erken pozisyonu biraz daha dar tut; ama ante ortada durduğu için çalmak hâlâ çok kârlı. Bir masa ayarı: büyük körde çok sık fold eden sıkı bir oyuncu varsa button ve cut-off aralığını yüzde on genişlet. Ve şu eşiği unutma: otuz beş big blind altına düşersen bu tablo geçerliliğini yitirir, bir sonraki slaytın stack modlarına geçersin.",
      },
      {
        title: "3-bet: kime evet, kime asla",
        table: { section: "Bölüm 17", sub: "17.4", caption: "3-bet value + blöf; boyut IP 3x, OOP 4x" },
        bullets: [
          "Kime 3-bet: 30–50bb orta stackler (bubble baskısını en çok onlar hisseder) + çok açan regler.",
          "Kime BLUFF 3-bet YAPMA: seni cover eden büyük stackler + 20bb altı.",
          "Value 3-bet her zaman serbest — yasak olan sadece bluff 3-bet.",
        ],
        ruleBox: "Cover'a karşı yanan şey bluff 3-bet'tir; value 3-bet (kuvöz+/AK) serbest.",
        narration:
          "3-bet aralıkların. Boyut: pozisyondayken open'ın üç katı, pozisyon dışındayken dört katı; elli altı big blind'de 3-bet potları zaten stack'in yarısını görür, o yüzden aralığın polarize. Asıl mesele kime 3-bet, kime asla. Bluff 3-bet'i iki hedefe yönelt: otuz ile elli big blind arasındaki orta stackler, çünkü bubble baskısını en çok onlar hisseder ve fold ederler; ve masayı çok açan regler. Kime bluff 3-bet YAPMA: bir, seni cover eden büyük stackler — bubble yaklaşırken onların tek cevabı jam'dir ve bluff'un yanar; iki, yirmi big blind altındaki kısalar, onların da tek cevabı jam. Ama dikkat: burada yasaklanan bluff 3-bet, value değil. Kuvöz kuvöz ve üstü ile as krala her zaman value 3-bet atarsın; cover eden birinin jam'ine devam etmek ayrı bir karar, onu ICM eşikleri slaytında konuşacağız. Boyutunu da elden ele değiştirme: as as ile de as beş suited ile de aynı boyut, çünkü boyut-tell online sahada canlıdan bile pahalıdır.",
      },
      {
        title: "4-bet ve commit eşiği",
        table: { section: "Bölüm 17", sub: "17.6", caption: "4-bet = 3-bet'in ~2.2–2.4x'i; 56bb'de ~20bb = commit" },
        bullets: [
          "56bb'de 4-bet ~20–22bb = commit eşiği; 4-bet'e devam eden artık fold edemez.",
          "4-bet value: KK+; AK karışık; QQ rakibe göre.",
          "3-bet yersen: QQ–99/AQs/AJs/KQs call; A9o tipi offsuit kenar fold.",
        ],
        ruleBox: "4-bet ettiğin her el, 5-bet jam'e karşı planı önceden belli olmalı. \"4-bet edip bakarız\" yok.",
        narration:
          "4-bet ve 3-bet yediğinde ne yapacağın. Önce boyut: 4-bet, 3-bet'in yaklaşık iki nokta iki ile iki nokta dört katı. Elli altı big blind'de bu yaklaşık yirmi, yirmi iki big blind eder — ve bu bir commit eşiğidir; 4-bet'e devam eden artık fold edemez, o yüzden 4-bet ettiğin her elin beş-bet jam'e karşı planı önceden belli olmalı, dört-bet edip bakarız diye bir şey yok. Value tarafı: kral kral ve üstü net value; as kral karışık, jam ve dört-bet arası; kuvöz kuvöz rakibe göre — nit bir oyuncuya kuvözü fold edebilirsin, agresif birine jam. Şimdi ters durum, sen açtın ve arkadan 3-bet geldi. Pozisyondaysan: kral kral ve üstü ile dört-bet value; as beş, as dört suited ile düşük frekans bluff dört-bet, çünkü as'i blokluyorsun. Call edeceğin bant: kuvöz kuvözden dokuz dokuza, as kız suited, as jek suited, kral kız suited. Fold: as dokuz offsuit gibi dominate edilen offsuit kenarlar ve düşük suited gapper'lar. Pozisyon dışındaysan tüm bu bandı bir kademe daralt.",
      },
      {
        title: "Stack modları A–E",
        table: { section: "Bölüm 17", sub: "17.8", caption: "Her elden önce: hangi moddayım?" },
        bullets: [
          "Mod A (45bb+): tam aralıklar, postflop manevra.",
          "Mod B (30–45bb): flat daralır, commit yaklaşır, value artar.",
          "Mod C/D (12–30bb): 3-bet çoğu jam; A5s–A2s jam cephanesine döner.",
        ],
        ruleBox: "45bb'de 130bb aralığı oynamak en pahalı alışkanlık — mod-önce-aralık.",
        narration:
          "Her elden önceki ilk soru bir el sorusu değil, bir mod sorusu: hangi stack modundayım? Aralığı ondan sonra seçersin. Mod A, kırk beş big blind ve üstü: tam aralıklar, postflop manevra, suited connector ve küçük çiftler tam değer. Mod B, otuz ile kırk beş arası: açılış korunur ama flat call daralır çünkü set-mining bozulur, commit eşiği yaklaşır, bluff 3-bet düşer, value artar. Mod C, yirmi ile otuz arası: açılış yüzde on beş, yirmiye iner, 3-bet çoğunlukla jam ya da küçük-commit, ve as beşten as ikiye suited aslar artık jam cephanesine döner. Mod D, on iki ile yirmi arası: bazı pozisyonlardan direkt jam, açtıysan 3-bet'e ya jam ya fold, Nash'e yakın. Mod E, on ikinin altı: saf jam ya da fold. En pahalı hatanın adı burada: kırk beş big blind'de yüz otuz big blind aralığı oynamak. Geçişleri ezberle — elli altıdan otuz beşe inince flat call alışkanlığını bırak, otuz beşten yirmiye inince commit eşiği öne kayar.",
      },
      {
        title: "Faz planı, ICM eşikleri, guardraillar",
        bullets: [
          "Faz 2 (bubble yakın) = en kârlı faz: kısalar taş kesilir, sen 3-bet/float ile ez.",
          "ICM eşiği: bubble'da cover'ın 4-bet jam'ine karşı tüm stack aralığın = KK+.",
          "AK: cover'ın sıkı jam'ine fold; ≤20bb jam'ine her zaman call.",
        ],
        ruleBox: "Şişmiş potta tek pair = alarm — AA dahil. Pot 40bb'yi geçtiyse: pot kontrolü + bluff-catcher.",
        visuals: [{ kind: "hand", cards: "AA", label: "Şişmiş potta tek per — alarm" }],
        narration:
          "Son slayt: faz planı, ICM eşikleri ve kök hata korkulukları. Faz olarak dört evre var. Bubble uzakken Mod A'da kal, stack'i elli big blind üstünde tut, büyüklerle gereksiz savaşma. Bubble yaklaşırken — en kârlı fazın bu — on beş ile yirmi beş big blind'likler taş kesilir; onların açılışına 3-bet, blindlerine open, c-bet'lerine float. Tek frenin: seni cover edenler, onlara karşı bir kademe dar. Para girdiği an üç dört el sıkı oyna, kısalar kamikaze jam atar, premium ile karşıla, sonra normale dön. Derin para içinde ve final table'da ladder devasa: ICM chip-EV'yi geçer, kısaları ez, eşitlerden kaç, büyüklere premium. Şimdi sayısal ICM eşiği, ezberle: bubble'da seni cover eden birinin dört-bet jam'ine karşı kuvöz kuvöz bile fold — çünkü kral kral ve as krala karşı yaklaşık yüzde kırk equity'n var, üstüne bubble ICM primi biner, gereken equity yüzde kırk sekize çıkar. Pratik kural: bubble'da cover'a karşı tüm stack için aralığın kral kral ve üstü. As kral, cover'ın sıkı jam'ine fold ama yirmi big blind altı bir jam'e her zaman call. Ve değişmeyen korkuluk: şişmiş potta tek pair, as as dahil, alarmdır — pot kırk big blind'i geçtiyse varsayılanın pot kontrolü ve bluff-catcher, stack yarışı değil.",
      },
    ],
  },
  {
    id: "M17",
    title: "Preflop mantığı: boyut ve rol",
    chapter: "Bölüm 3 + Bölüm 4",
    minutes: 7,
    slides: [
      {
        title: "Neden küçük aç (2.2–2.5x)",
        bullets: [
          "Ante potun tabanını şişirir — potta zaten büyük ölü para var.",
          "Küçük open = ucuz pozisyonel savaş; kâr preflop fold'dan değil, postflop pozisyondan gelir.",
          "Büyüt (2.8–3.5x): pasif saha fold etmiyorsa, limpli isolate, ya da 25–35bb'de SPR'ı tek karara indirmek.",
        ],
        ruleBox:
          "Küçük open, BB'nin call'ını engellemek için değil — ucuz pozisyonel savaş satın almak için.",
        narration:
          "Preflop'un iki ayrı sorusu var; bu modül ikisini ayırıyor. Birincisi boyut. Neden herkes iki nokta iki, iki nokta beş kat gibi küçük açıyor? Cevap ante. Ante potun tabanını baştan şişirir; iki bin, dört bin blindde ante'yle potta zaten on bir bin civarı ölü para durur. Küçük bir open bile o potu almaya değer kılar — yani risk ödül oranını sen belirlersin: on bin riske atıp on bir binlik potu kovalarsın. Üç buçuk kat açsan aynı potu on dört bin riskle kovalarsın; blindler zaten savunacaksa fazladan koyduğun her chip kötü fiyata yatırımdır. Peki büyük kör her elde call ediyorsa bu open'ı bozmaz mı? Bozmaz, çünkü pozisyon sende. Büyük kör geniş bir aralıkla giriyor ama floptan sonra her sokakta pozisyonsuz ve zayıf ortalama elle oynuyor; senin kârın preflop fold'dan değil, postflop pozisyon avantajından geliyor. Küçük boyut sayesinde onun call'ı hata olmaktan çıkar ama senin yatırımın da küçük kalır — kimse büyük hata yapmaz, kâr marjı postflop beceriye kayar. Boyutu ne zaman büyütürsün? Üç durumda: masada zayıf ve pasif oyuncular flopa çok gelip fold etmiyorsa value ellerinde potu erken şişirmek için; limpli bir potta isolate ederken; ve stack yirmi beş, otuz beş big blind'e inince stack pot oranını tek karara indirmek için. Bunun dışında, özellikle elit bir masada, sabit kal — büyük open bu seviyede anında value ağırlıklı diye okunur, boyut deviasyonun bilgi sızdırır.",
      },
      {
        title: "Open range = lineer",
        table: { section: "Bölüm 3", caption: "Açılış: moda göre eşik kayar, yapı hep tepeden aşağı." },
        bullets: [
          "Open sorusu tek: 'bu el kârlı açılır mı?' — lineer, en iyiden aşağı kesintisiz iner.",
          "AA'dan başlar, pozisyona göre 87s / A9o gibi kenarlarda biter.",
        ],
        ruleBox: "Open = 'elim yeter mi?' Kesintisiz, tepeden aşağı.",
        narration:
          "İkinci soru rol; önce open range'i netleştirelim. Open range, önünde kimse yokken sorduğun 'bu el kârlı oynanır mı' sorusudur ve lineerdir: en iyi elden başlar, kesintisiz aşağı iner. As astan başlar, pozisyona göre sekiz yedi suited ya da as dokuz offsuit gibi kenarlarda biter. Lineer demek, aradan el atlamazsın demek — belli bir eşiğin üstündeki her şeyi açarsın, altındaki her şeyi atarsın. Tablodaki modlara bak: seksen big blind üstünde geniş açarsın, derinlik azaldıkça eşik yukarı kayar ama yapı hep aynı, tepeden aşağı kesintisiz. Open'ın tek sorusu şu: elim yeter mi? Rakibin ne yaptığıyla ilgilenmezsin çünkü henüz kimse aksiyon almadı.",
      },
      {
        title: "3-bet range = polarize",
        table: { section: "Bölüm 4", sub: "4.3", caption: "Value + blöf; ortası flat'e gider." },
        bullets: [
          "3-bet çoğu pozisyonda polarize: value (kuvöz+, AK) + blöf (A5s–A2s); ortası call.",
          "KQs, 99, AJs open'ın göbeğinde ama 3-bet'te YOK — onlar flat (100bb+).",
          "A5s bluff seçilir: A blocker + fold'a kıyılmaz + call'da wheel/suited potansiyel. A9o daha güçlü ama playability kötü → bluff değil.",
        ],
        ruleBox:
          "3-bet = rakibin range'ine karşı elin en kârlı rolü: value mı, blöf mü, call mı, fold mu?",
        narration:
          "Şimdi kritik fark. 3-bet range, birinin açılışına verdiğin cevaptır ve çoğu pozisyonda polarizedir: en üstte value oynarsın — kuvöz kuvöz ve üstü ile as kral — en altta blöf oynarsın — as beşten as ikiye gibi eller — ve ortayı 3-bet etmezsin, flat call edersin. İşte can alıcı nokta burada: kral kız suited, dokuz dokuz, as jek suited gibi eller open range'inin tam göbeğindedir, ama 3-bet range'inde yoktur; onlar yüz big blind derinlikte flat call'dır. Peki as beş suited neden hem open'da hem 3-bet blöfünde? Sebepler farklı. Open olarak yeterince equity ve oynanabilirliği var, kârlı açılır. 3-bet blöfü olarak ise üç nedenle seçilir: as'i blokluyor, yani rakibin as as ve as kral kombinasyonlarını azaltıyor; fold edince kaybın az çünkü el zaten marjinal; ve call yersen suited ve wheel potansiyeliyle oynanabilir. Yani as beş iyi bir el olduğu için değil, fold etmeye kıyamadığın ama flat'i de tatsız olan, üstelik blocker taşıyan bir el olduğu için blöfe seçilir. Buna karşılık as dokuz offsuit ondan daha güçlüdür ama 3-bet blöfüne girmez: blocker aynı ama oynanabilirliği kötü ve dominasyon riski yüksek. Demek ki 3-bet'in sorusu open'ınkinden bambaşka: elim yeter mi değil, rakibin aralığına karşı bu elin en kârlı rolü ne — value mı, blöf mü, call mı, fold mu?",
      },
      {
        title: "Aynı el, farklı rol",
        table: { section: "Bölüm 4", sub: "4.7", caption: "Derinlik rolü kaydırır: polarize → merged/lineer." },
        bullets: [
          "Pratik kural: open = 'elim yeter mi', 3-bet = 'bu elin en kârlı rolü ne'.",
          "İstisna: BB vs SB lineer kurulur (AJs, KQs value'ya döner) — SB range'i geniş.",
          "Derinlik/rakip kaydırır: 40–60bb'de merged; geniş açan agresif rege karşı AQo/99–TT value 3-bet olur.",
        ],
        ruleBox:
          "Aynı el pozisyona, derinliğe ve rakibe göre rol değiştirir — ezber değil, rol düşün.",
        narration:
          "Toparlayalım. Aynı el, iki listede farklı rol oynar çünkü sorular farklı. Open'da soru 'elim yeter mi', 3-bet'te soru 'bu elin bu rakibe karşı en kârlı rolü ne'. Ters örnek de aydınlatıcı: button'dan yedi altı suited açarsın, ama erken pozisyonun açılışına karşı aynı yedi altı suited çoğu zaman fold ya da flat'tir, 3-bet değil. İki istisnayı da bil. Birincisi, büyük kör smol blind'e karşı 3-bet'i polarize değil lineer kurar — as jek suited, kral kız suited gibi eller de value'ya döner — çünkü smol blind'in aralığı çok geniş ve ortadaki eller ona karşı value kazanır. İkincisi derinlik ve rakip rolü kaydırır: kırk ile altmış big blind arası aralık merged'e döner, flat neredeyse kalmaz; ve masada çok geniş açan agresif bir reg varsa ona karşı da linearleşirsin — as kız offsuit, dokuz dokuz, on on bile value 3-bet olur. Kısacası ezberleme, rol düşün: aynı el pozisyona, derinliğe ve rakibe göre rolünü değiştirir.",
      },
    ],
  },
  {
    id: "M18",
    title: "Day 2 icra: 50bb dinamikleri",
    chapter: "Bölüm 14 + Bölüm 17",
    minutes: 8,
    slides: [
      {
        title: "50bb = B/C sınırı: ne açılır, ne kapalı",
        table: { section: "Bölüm 14", sub: "14.1", caption: "40–60bb köprü: 3-bet yeniden açılır, commit'e yaklaşır." },
        bullets: [
          "YENİDEN AÇILAN: normal 3-bet (~7bb, jam değil) value + A5s bluff; IP flat/set-mine; gerçek SPR postflop.",
          "KAPALI KALAN: şişmiş potta tek pair stack-off ASLA (hiçbir derinlikte açılmaz).",
          "50bb'de 4-bet ≈ commit — 4-bet bluff'a dikkat.",
        ],
        ruleBox:
          "50bb en esnek bölge: 3-bet ve set-mine geri gelir; ama tek-pair stack-off ve pervasız 4-bet bluff kapalı.",
        narration:
          "Bu modül ikinci aşamaya, yani day two'ya ve elli big blind civarı oyuna odaklanıyor. Önce stack modun: elli big blind seni B ile C modunun sınırına, yani kırk ile altmış big blind bandına geri koyuyor. Bu aslında turnuva pokerinin en esnek bölgesi, çünkü kısa stack kısıtları henüz yok ama derin stack lüksü de yok. Neler yeniden açılıyor? Bir: normal 3-bet'ler. Artık her şey jam değil; value ellerinle ve as beş tipi blöflerinle yaklaşık yedi big blind'e 3-bet atabilirsin. İki: pozisyonda flat call'lar; çiftlerle ve suited broadway'lerle set-mining matematiği bu derinlikte yine çalışıyor. Üç: gerçek stack pot oranı kararlarıyla postflop oyun. Peki neler kapalı kalıyor? Birincisi ve en önemlisi: şişmiş potta tek pair'le stack-off. Bu hiçbir derinlikte açılmaz, elli big blind'de de açılmaz — kök hata kuralı sabit. İkincisi: 4-bet blöflerine dikkat. Elli big blind'de bir 4-bet seni pratikte commit eder; devam edersen artık geri dönüşün yok. Yani elli big blind özgürleştiren bir derinlik ama iki kapı hâlâ kilitli.",
      },
      {
        title: "Day 2 üç faz + savaşçı/hayatta-kalan ayrımı",
        bullets: [
          "Erken: masa yeniden çekildi, kimsede okuma yok. İlk saat sağlam ABC; ilk 30 dk'da masayı savaşçı/hayatta-kalan diye ayır.",
          "Paraya yaklaşırken: orta stackler taş kesilir — onlara karşı neredeyse her iki kartla aç; büyüklerle kavga etme, kaptandan kaç.",
          "ITM: bubble sonrası saha anında gevşer, min-casher'lar püskürür — value ağırlıklı dön, daha hafif call'la.",
        ],
        ruleBox:
          "Hayatta-kalanlardan çal; savaşçılara karşı sadece malla otur. Bag koruyanlar senin steal hedefin.",
        narration:
          "Day two üç fazda oynanır ve her fazın farklı bir modu var. Erken faz, yani şimdi: masalar yeniden çekildi, kimsede henüz okuma yok. İlk bir saat sağlam, standart ABC oyna ve bu sırada asıl işini yap — ilk otuz dakikada masanı ikiye ayır: savaşçılar ve hayatta-kalanlar. Hayatta-kalanlar bag'ini, yani günü kapattığı stack'ini korumaya oynayan, sıkılaşan oyunculardır; onlar senin steal hedefin, blindlerine acımasızca saldır. Savaşçılar karşılık verenlerdir; onlara karşı sadece gerçek elle, malla ortaya çık. İkinci faz, paraya yaklaşırken: işte elli big blind burada bir silaha dönüşür. Orta stackler bubble'a yakın dramatik biçimde sıkılaşır; onlara karşı neredeyse her iki kartla açabilirsin. Ama büyük stackler karşılık verir — kavgayı orta stacklerle seç, masanın kaptanından uzak dur. Üçüncü faz, para içinde: bubble patlayınca saha anında gevşer, sadece min-cash için bekleyenler püskürmeye başlar. O an value ağırlıklı oyuna dön ve daha hafif ellerle call'a in. Tek meta kural: hayatta-kalandan çal, savaşçıya karşı malla otur.",
      },
      {
        title: "Postflop 50bb: doku + SPR kontrastı",
        table: { section: "Bölüm 11", sub: "11.0", caption: "SPR kararı: 3-bet potta commit, SRP'de derin." },
        bullets: [
          "Single-raised PFR: kuru boardda 33% c-bet neredeyse hep; ıslak orta boardda (T87, 976) havayla check-back, value+draw ile büyük bet (66–75%).",
          "3-bet pot SPR ~2.5–3: TPTK artık stack-off eli — düşük-SPR commit, kök hatanın istisnası DEĞİL.",
          "SRP SPR 8+: eski kural aynen — tek pair asla stack-off.",
        ],
        ruleBox:
          "Tek fark derinlik: 3-bet potta (SPR ~3) TPTK commit; SRP'de (SPR 8+) tek pair bluff-catcher.",
        narration:
          "Elli big blind'de postflop icra. Önce single-raised pot, sen açan taraf. Kuru boardlarda, yani bağlantısız kartlarda, neredeyse her zaman üçte bir pot c-bet at; bu ucuz ve range'in için baskı kurar. Islak orta boardlarda ise — on sekiz yedi, dokuz yedi altı gibi — havayla check-back et, ama value ve draw'larınla büyük bas, üçte iki ile dörtte üç pot arası. Şimdi kritik kısım, stack pot oranı kontrastı. 3-bet'li bir potta stack pot oranı yaklaşık iki buçuk, üç olur; bu derinlikte top pair iyi kicker artık bir stack-off elidir. Dikkat: bu kök hatanın istisnası değil — düşük stack pot oranı commit matematiğinin ta kendisi; pot zaten stack'e göre büyük olduğu için top pair'le girmek doğru. Buna karşılık single-raised potta stack pot oranı sekiz ve üstüdür; orada eski kural birebir geçerli, tek pair asla stack-off etmez, bluff-catcher kalır. Yani tek değişken derinlik: aynı top pair, 3-bet potta commit, single-raised potta fren. Bir de check-raise: single-raised potta check-raise yersen, draw'suz tek pair'i at, çift artı draw'la devam et, top pair iyi kicker'ı bluff-catcher'a düşür — flop'ta call, turn'de yeniden değerlendir, büyük river'a fold. Ve korku kartları: c-bet'in call yediyse, turn'de gelen as ya da kral gibi overcard'ları hayatta-kalanlara karşı yaklaşık yüzde yetmiş beş barrel et, savaşçılara karşı kapat.",
      },
      {
        title: "Stack trigger noktaları (ezberle)",
        table: { section: "Bölüm 17", sub: "17.8", caption: "Derinlik düştükçe karar ağacı sadeleşir." },
        bullets: [
          "60bb+ tam playbook · 40bb: 4-bet bluff'ı öldür, EP'yi iki kademe daralt.",
          "30bb: dünkü Mod C — resteal jam (77+/AT+/KQ geç açışlara) · 20bb: jam-first, BB dışı flat yok.",
          "12bb ve altı: sadece push/fold.",
        ],
        ruleBox: "Her elden önce trigger'a bak: stack hangi bandda, karar ağacı ona göre kısalır.",
        narration:
          "Son olarak stack trigger noktaları — bunları ezberle, çünkü hangi bandda olduğun bütün karar ağacını belirler. Altmış big blind üstünde yukarıdaki tam playbook geçerli. Kırk big blind'e inince: 4-bet blöflerini tamamen öldür ve erken pozisyon aralığını iki kademe daralt, çünkü bu derinlikte 4-bet zaten commit. Otuz big blind: dünkü Mod C'ye dön — resteal jam'ler devrede, yani yedi yedi ve üstü, as on ve üstü, kral kız gibi ellerle geç açışlara yeniden-jam. Yirmi big blind: jam-first ağacına geç, büyük kör dışında flat yok. On iki big blind ve altı: sadece push fold chartları, başka hamle yok. Pratik hedef: day two başında ortalama muhtemelen altmış ile seksen big blind arası olacak; sen ortalamaya yakınsın, aceleye ve paniğe gerek yok. Bir double seni ilk yüzde yirmiye taşır. Kendi oyununu oyna, önce fazı sonra stack'i oku.",
      },
    ],
  },
  {
    id: "M19",
    title: "50bb aralık kartı: aç / flat / 3-bet / BB savun",
    chapter: "Bölüm 17 + Bölüm 4",
    minutes: 8,
    slides: [
      {
        title: "Açılış: pozisyona göre (dar → geniş)",
        table: { section: "Bölüm 17", sub: "17.3", caption: "8-handed ~50bb open, 2.1–2.3x." },
        visuals: [
          { kind: "range", value: "77+, ATs+, KJs+, QJs, JTs, T9s, AJo+, KQo", valueLabel: "UTG/UTG+1", caption: "Erken ~%13: dar + güçlü" },
          { kind: "range", value: "22+, A2s+, K5s+, Q7s+, J7s+, T7s+, 96s+, 86s+, 75s+, 65s, 54s, A4o+, K9o+, Q9o+, J9o+, T9o", valueLabel: "BTN", caption: "Button ~%40: geniş steal" },
        ],
        bullets: [
          "UTG/UTG+1 ~%13: 77+, ATs+, KJs+, QJs, JTs, T9s, AJo+, KQo",
          "LJ/MP ~%17: 66+, A9s+, A5s, KTs+, QTs+, J9s+, T9s, 98s, ATo+, KJo+",
          "HJ ~%20: 55+, A8s+, A4s–A5s, K9s+, Q9s+, J9s+, T8s+, 98s, 87s, ATo+, KJo+, QJo",
          "CO ~%26: 44+, A2s+, K8s+, Q9s+, J8s+, T8s+, 97s+, 87s, 76s, A9o+, KTo+, QTo+, JTo",
          "BTN ~%40: 22+, suited Ax, K5s+, Q7s+, J7s+, T7s+, 96s+, 86s+, 75s+, 65s, 54s, A4o+, K9o+, Q9o+, J9o+, T9o · SB %35 raise-only",
          "Exploit: yetkin sahaya karşı EP'den offsuit broadway'i (AJo, KQo) kes — domine olur, realize zor. SB: fold'a kadar gelirse ~%40 3x; tight BB'ye genişle, manyak BB'ye ~%30 daralt.",
        ],
        ruleBox: "Erken dar-güçlü, geç genişler. 35bb altına düşersen bu tablo geçmez (→ M18 stack trigger).",
        narration:
          "Bu bir tekrar ve referans modülü: elli big blind day two için açılış, flat, 3-bet ve büyük kör savunması aralıklarını pozisyon pozisyon ayrı ayrı topluyoruz — çünkü aynı aralığı farklı bir çerçevede tekrar görmek onu ezbere değil, sezgiye çevirir. Önce açılış. Tek prensip: erken pozisyon dar ve güçlü, pozisyon geç indikçe aralık genişler. Erken pozisyonda, yani yu ti ci ve artı birde, yaklaşık yüzde on üç: yedi yedi ve üstü çiftler, as on suited ve üstü, kral jek suited ve üstü, birkaç bağlı suited ve üstteki offsuit broadway'ler. Buradaki her el bir 3-bet'e ya da flop baskısına devam edebilir — açtığın hiçbir şey seni zor durumda bırakmamalı. Orta pozisyonlarda aralık kademe kademe açılır; as beş suited, suited connector'lar, alt offsuit broadway'ler sırayla eklenir. Button'da yaklaşık yüzde kırk: bütün suited as'ler, geniş suited krallar ve dallar, bağlı eller — çünkü arkanda sadece iki kör var ve pozisyon senin. Smol blind folda kadar gelirse yüzde otuz beş sadece raise, limp yok. Grid'lere bak: solda dar erken aralık, sağda geniş button — ikisi arasındaki fark tüm açılış mantığını özetliyor. İki exploit ayarını da ekle. Bir: yetkin, blindini doğru savunan bir sahaya karşı erken pozisyonun offsuit broadway'lerini — as jek offsuit, kral kız offsuit — kes; bunlar kolay domine olur ve pozisyonsuz realize etmesi zordur, kitap aralığının en zayıf açılışlarıdır. İki: smol blind açılışını rakibe göre ayarla — folda kadar geldiğinde yaklaşık yüzde kırk, üç kat aç; büyük körde sıkı ve çok fold eden biri varsa daha da genişle, agresif ve manyak biri varsa yaklaşık yüzde otuza daralt. Ve şu eşiği unutma: otuz beş big blind altına düşersen bu tablo geçmez, stack trigger'larına geçersin.",
      },
      {
        title: "3-bet: kime, nasıl (value + blöf)",
        table: { section: "Bölüm 4", sub: "4.3", caption: "Pozisyon eşleşmeleri: value + blöf." },
        visuals: [
          { kind: "range", value: "TT+, AJs+, AQo+, KQs", blof: "A5s-A2s, KTs, QTs, J9s, T8s", valueLabel: "value", blofLabel: "blöf", caption: "CO açışına karşı (BTN'den)" },
          { kind: "range", value: "99+, ATs+, AQo+, KQs, KJs", blof: "A5s-A3s, K9s-K7s, QTs, J9s, T8s, 76s", valueLabel: "value", blofLabel: "blöf", caption: "BTN açışına karşı (BB'den) — sert döv" },
        ],
        bullets: [
          "Boyut: IP open'ın 3x'i (~7bb), OOP 4x'i (~8.5bb).",
          "vs EP: QQ+/AK value; A5s ara sıra blöf. Hepsi bu.",
          "vs LJ/HJ: TT+/AQs+/AKo value; blöf A5s–A3s, KJs, QJs.",
          "vs SB (BB'den) lineer+geniş: 88+, A9s+, ATo+, KTs+, QTs+, JTs value; K7s+, Q8s+, J8s+ blöf.",
        ],
        ruleBox: "3-bet edeceğin el 4-bet/jam'e devam edebilmeli; edemiyorsa flat (IP/BB) ya da fold.",
        narration:
          "Şimdi 3-bet: kime ve nasıl. Boyut önce: pozisyondayken açılışın üç katı, yaklaşık yedi big blind; pozisyon dışındayken dört katı, yaklaşık sekiz buçuk. Kime 3-bet, kimin aralığına göre değişir. Erken pozisyon açışına karşı disiplin bölgesindesin: kuvöz kuvöz ve üstü ile as kral value, ve sadece ara sıra as beş suited blöf — hepsi bu, erken pozisyondan blöf 3-bet'i zorlamıyorsun. Açan pozisyon geç indikçe hem value hem blöf genişler. Cut-off açışına button'dan: on on ve üstü, as jek suited ve üstü, as kız offsuit ve üstü, kral kız suited value; blöf tarafı as beşten as ikiye, kral on suited, kız on suited, jek dokuz suited, on sekiz suited. Button açışına büyük körden: burada button'ı sert dövüyorsun çünkü day two steal'cileri orada yaşıyor — dokuz dokuz ve üstü, as on suited ve üstü value, geniş suited bloker blöfleri. Ve smol blind açışına büyük körden aralık lineerleşir ve genişler, çünkü onun aralığı çok geniş. Grid'lerdeki yeşil value ve turuncu blöf ayrımını gözünle gör. Altın kural sabit: 3-bet edeceğin el gelen 4-bet ya da jam'e devam edebilmeli; edemiyorsa o eli flat et ya da at.",
      },
      {
        title: "Flat call: yalnız IP, set-mine matematiği",
        visuals: [
          { kind: "range", flat: "99-22, AJs, ATs, KQs, KJs, KTs, QJs, QTs, JTs, T9s, 98s, 87s, 76s", caption: "IP flat (CO/BTN) — LJ/HJ açışına karşı" },
        ],
        bullets: [
          "IP (CO/BTN) flat: 99-22 set-mine (50bb'de implied odds geri geldi) + AJs, ATs, KQs, KJs, KTs, QJs, QTs, JTs, T9s, 98s, 87s, 76s.",
          "SB'den ASLA cold-call — 3-bet ya da fold (100bb'de flat kayıp pozisyon).",
          "Coldcall'un 3 şartı (Bölüm 4.4): pozisyon (IP/BB) + derinlik (call'un 15x'i arkada) + ödeyen rakip. Üçü yoksa flat etme.",
          "Domine offsuit broadway (AJo, KQo, KJo) UTG açışına coldcall YOK — 3-bet ya da fold.",
        ],
        ruleBox: "Flat sadece pozisyondayken; OOP tek per 3-bet potta zaten bluff-catcher.",
        narration:
          "Üçüncü kart: flat call, yani 3-bet etmeden sadece call. İki temel kural. Bir: flat yalnızca pozisyondayken. Cut-off ya da button'da, senden erken açan birine karşı, iki iki'den on on'a kadar çiftlerle set-mining yaparsın — ve elli big blind bu matematiği geri getiriyor, çünkü set çektiğinde ödeyecek yeterli derinlik var; yüz big blind kadar olmasa da implied odds yeniden çalışıyor. Bunun üstüne as jek suited, as on suited, kral kız suited gibi oynanabilir suited eller ekleyebilirsin, özellikle gevşek açanlara karşı. İki: smol blind'den asla cold-call yok — oradan ya 3-bet ya fold, çünkü flat seni kalıcı olarak pozisyonsuz bırakır. Coldcall'un üç şartını hatırla: pozisyon, derinlik, ve ödeyen rakip; üçü aynı anda yoksa flat etme. Ve domine edilen offsuit broadway'leri — as jek offsuit, kral kız offsuit, kral jek offsuit — erken açışa coldcall etme; bunlar ya 3-bet ya fold elleridir, ortada oynanan hâlleri tam da kök hatayı yaşatan ellerdir.",
      },
      {
        title: "BB savunması: ante'li fiyat",
        table: { section: "Bölüm 4", sub: "4.8", caption: "Ante potu şişirir → geniş defend, ~%21 equity yeter." },
        visuals: [
          { kind: "range", value: "99+, ATs+, AQo+, KQs, KJs", blof: "A5s-A3s, K9s-K7s, QTs, J9s, T8s, 76s", valueLabel: "3-bet value", blofLabel: "3-bet blöf", caption: "BB'den BTN'ye 3-bet (üstü); gerisi call" },
        ],
        bullets: [
          "Fiyat: 2.25x açışa ~%21 equity yeter (2500/12000) — neredeyse her iki kart geçer.",
          "Call (defend): tüm suited (T3s dahil), bağlı/1-gap offsuit (86o, 97o, J8o), tüm Ax, Kx'in çoğu, 22+ → ~%55-60.",
          "Fold: J3o, Q4o, K2o–K5o, 92o — hem kopuk hem domine çöp.",
          "Ucuz girmek ≠ ucuz devam: flopta ikinci per 'zaten pottayım' = kök hatanın BB versiyonu. Multiway'de daralt.",
        ],
        ruleBox: "Fiyat equity'yi kurtarır, oynanabilirliği kurtarmaz — zayıf offsuit'i fiyat olsa bile at.",
        narration:
          "Son kart: büyük kör savunması, ve burası matematiğin en cömert yeri. Ante olduğu için potta zaten çok para var, senin eklemen az; iki nokta yirmi beş katlık bir açışa karşı yaklaşık yüzde yirmi bir equity yeter, ki neredeyse her iki kart bu eşiği geçer. O yüzden büyük körden defend aralığın çok geniş: tüm suited eller, tüm çiftler, bağlı ve tek boşluklu offsuit'ler, bütün as'ler, kralların çoğu — kabaca elinin yüzde elli beş, altmışı call. Neyi atarsın? Hem kopuk hem domine çöpü: jek üç offsuit, kız dört offsuit, kral iki'den kral beşe offsuit, dokuz iki offsuit. Fiyat equity'yi kurtarır ama oynanabilirliği kurtarmaz — o yüzden zayıf offsuit'i fiyat cazip olsa bile at. Üstteki elleri call yerine 3-bet'e yükseltirsin; grid'de gösterilen dokuz dokuz ve üstü, as on suited ve üstü value, bloker blöfler. Ama en kritik uyarı şu: ucuz girmek ucuz devam etmek değildir. İki bin beş yüze girip flopta ikinci per yakalayınca 'zaten pottayım' moduna geçmek, kök hatanın büyük kör versiyonudur; giriş fiyatın flop sonrası kararlarını etkilemez, her sokak yeni bir karardır. Ve multiway'de bu geniş defend'i daralt — domine eller çok yollu potta değer kaybeder.",
      },
    ],
  },
  {
    id: "M20",
    title: "20–30bb: jam ya da fold",
    chapter: "Bölüm 5",
    minutes: 7,
    slides: [
      {
        title: "Bandın karakteri: değer fold equity'den",
        bullets: [
          "Değer kart tamamlamaktan değil, FOLD EQUITY'den gelir.",
          "Aranan el 'gelişebilen' değil, ŞİMDİDEN İYİ: as, broadway, çift.",
          "Karar sırası 2 saniyede: MOD → POZİSYON → EL. Suited connector'da 3. adıma bile geçme.",
        ],
        ruleBox: "Soru 'bu el yeterince iyi mi' değil — 'bu el bu stack'te oynanabilir mi'.",
        narration:
          "Bu modül yirmi ile otuz big blind bandı, yani jam ya da fold bölgesi — ve turnuvada en çok bu bantta kalıyorsun, o yüzden tekrar da olsa netleştiriyoruz. Bandın tek cümlelik karakteri şu: bu derinlikte değer, kart tamamlamaktan değil, fold equity'den gelir. Yani parayı, rakibi preflop fold ettirerek kazanırsın, flopta el yaparak değil. Bunun sonucu el seçimini baştan değiştirir: aradığın el gelişebilen bir el değil, şimdiden iyi olan bir el — as, broadway, ya da çift. Spekülatif ellerin motoru olan implied odds bu derinlikte çalışmaz; set ya da kent yaptığında ödetecek stack yok, tamamlamadığın seksen beş durumda ise çaresizsin. O yüzden karar sıran iki saniyede işler: önce mod, sonra pozisyon, sonra el. Yirmi sekiz big blind'de elinde suited connector gördüğünde üçüncü adıma, yani ele bakmaya bile geçmiyorsun — mod ve pozisyon zaten cevabı vermiş oluyor. Kısacası bu bantta soru 'bu el yeterince iyi mi' değil, 'bu el bu stack'te oynanabilir mi'.",
      },
      {
        title: "Açılış (open) aralıkları",
        table: { section: "Bölüm 5", sub: "5.1", caption: "Boyut 2–2.2x; daha büyük açmanın anlamı yok." },
        visuals: [
          { kind: "range", value: "77+, ATs+, AJo+, KQs", valueLabel: "UTG/UTG+1", caption: "Erken: dar" },
          { kind: "range", value: "22+, A2s+, A2o+, K7s+, K9o+, Q9s+, J9s+, T9s", valueLabel: "BTN", caption: "Button: geniş çal" },
        ],
        bullets: [
          "UTG/UTG+1: 77+, ATs+, AJo+, KQs",
          "LJ/HJ: 55+, A8s+, ATo+, KTs+, QJs",
          "CO: 33+, A5s+, A9o+, K9s+, QTs+, JTs",
          "BTN: 22+, tüm A-x, K7s+, K9o+, Q9s+, J9s+, T9s",
          "SB: 22+, A2s+, A7o+, K9s+, KTo+, QTs+",
        ],
        ruleBox: "İlk giren avantajı senin — açtığında blindleri toplamayı hedefle.",
        narration:
          "Açılış aralıkları, önünde kimse yokken. Boyut iki ile iki nokta iki kat; bu derinlikte daha büyük açmanın anlamı yok çünkü zaten stack'inin büyük kısmını ortaya koyuyorsun. Tabloyu pozisyon pozisyon oku, ama mantık tek: erken dar, geç geniş. Erken pozisyonda yedi yedi ve üstü, as on suited ve üstü, as jek offsuit ve üstü, kral kız suited — dar ve güçlü. Orta pozisyonlarda as sekiz suited, as on offsuit, kral on suited gibi eller eklenir. Cut-off'ta üç üç ve üstü çiftler, as beş suited, as dokuz offsuit, kral dokuz suited. Button'da en geniş: iki iki ve üstü tüm çiftler, bütün as'ler, kral yedi suited ve üstü, geniş offsuit krallar, ve birkaç bağlı el — çünkü arkanda sadece iki kör var. Smol blind'den de yirmi iki ve üstü, tüm suited as'ler, as yedi offsuit ve üstü, doğrudan raise. Grid'lerde solda dar erken, sağda geniş button. İlk giren avantajı senin; açtığında amacın showdown değil, blindleri ve ante'yi toplamak.",
      },
      {
        title: "3-bet = JAM (flat yok)",
        table: { section: "Bölüm 5", sub: "5.2", caption: "3-bet commit demek; doğrudan all-in." },
        visuals: [
          { kind: "range", value: "88+, ATs+, AQo+, KQs", valueLabel: "3-bet JAM", caption: "CO/BTN açışına karşı" },
        ],
        bullets: [
          "vs EP açılış: TT+, AQs+, AKo jam.",
          "vs CO/BTN açılış: 88+, ATs+, AQo+, KQs jam.",
          "vs chip leader / jam'e fold eden: 77+, A9s+, AJo+, KQs (genişletilmiş).",
          "FLAT YOK — ne SB'den, ne BB'den, ne IP'den. Geniş flat 100bb+ dünyası.",
        ],
        ruleBox: "Bu bantta 3-bet = commit = all-in. '3-bet edip fold' diye bir yapı yok.",
        narration:
          "Şimdi en kritik fark: bu bantta 3-bet, commit demektir. Yani birinin açışına 3-bet'liyorsan, doğrudan all-in gidiyorsun; 'üç-bet edip fold' diye bir yapı bu derinlikte yok, çünkü 3-bet'e koyduğun chip zaten stack'ine göre commit seviyesinde. Kime jam'liyorsun? Erken pozisyon açışına karşı dar: on on ve üstü, as kız suited ve üstü, as kral offsuit. Cut-off ya da button açışına karşı biraz geniş: sekiz sekiz ve üstü, as on suited ve üstü, as kız offsuit ve üstü, kral kız suited. Ve masada jam'e fold ettiğini gördüğün bir chip leader ya da sıkı oyuncuya karşı aralığı genişlet: yedi yedi ve üstü, as dokuz suited ve üstü, as jek offsuit ve üstü. En önemli kural: bu bantta flat yok — ne smol blind'den, ne büyük körden, ne pozisyondan. Dördüncü bölümün o geniş flat tabloları yüz big blind ve üstü dünyasına ait; burada geçersiz. Ya jam, ya fold, ya da açan sensen open.",
      },
      {
        title: "Jam'e call + kayıtsız fold + 20bb altı",
        visuals: [
          { kind: "range", value: "99+, AJs+, AQo+", valueLabel: "jam'e call", caption: "Bundan aşağısı 28bb'de call değil" },
        ],
        bullets: [
          "Rakip all-in geldiyse call: 99+, AJs+, AQo+. Aşağısı: ya sen jam, ya fold.",
          "Kayıtsız fold: tüm suited connector (T9s–54s), suited gapper, zayıf offsuit broadway (KJo, QJo, JTo), küçük çiftle FLAT.",
          "20bb altı (Mod D): jam-first ağacı — açılışın bir kısmı direkt jam, BB dışı flat yok.",
          "12bb altı (Mod E): saf jam/fold; ilk giren avantajı, limp üstüne izole jam.",
        ],
        ruleBox: "Spekülatif eli fold etmek, gerçek elle jam yapacağın cephaneyi korur.",
        narration:
          "Son olarak jam'e karşı call ve kayıtsız fold listesi. Rakip sana all-in geldiyse call aralığın dar: dokuz dokuz ve üstü, as jek suited ve üstü, as kız offsuit ve üstü. Bunun aşağısı yirmi sekiz big blind'de call değildir — o eli ya sen jam'leyeceksin, ya fold edeceksin; jam ve call ayrı kararlardır, çünkü jam'de fold equity'n var, call'da yok. Kayıtsız şartsız fold listesi: bütün suited connector'lar, yani on dokuz suited'den beş dört suited'e kadar; tüm suited gapper'lar; zayıf offsuit broadway'ler, yani kral jek offsuit, kız jek offsuit, jek on offsuit; ve küçük çiftle flat — çiftle jam ayrı konu ama flat yok. Yirmi big blind altına indiğinde Mod D'ye geçersin: jam-first ağacı, yani açılışın bir kısmı direkt jam ve büyük kör dışında flat yok. On iki big blind altında ise saf jam ya da fold, ilk giren avantajı ve limp üstüne izole jam. Tek cümle: spekülatif eli fold etmek, gerçek elle jam yapacağın cephaneyi korur.",
      },
    ],
  },
  {
    id: "M21",
    title: "Final masası: 4/3/HU nasıl oynanır",
    chapter: "Bölüm 12",
    minutes: 8,
    slides: [
      {
        title: "FT omurgası: el değil, stack rolü",
        table: { section: "Bölüm 12", sub: "12.2", caption: "Doğru davranış EL'e değil STACK ROLÜNE bağlı." },
        bullets: [
          "Kısa (<15bb): ilk jam'ci ol, ladder'ı gözle; kilitlenmek de bir busttur.",
          "Orta: en kırılgan — kimin bust'ını beklediğini bil, cover edenle pot açma.",
          "Cover eden derin: agresyon serbest, cezasız ez; ama chip-leader'la ego savaşı yok.",
        ],
        ruleBox: "FT'de soru 'elim ne' değil, 'stack rolüm ne'. ICM açıksa jam ≠ call (asimetri).",
        narration:
          "Turnuvanın son aşaması: final masası, ve giderek küçülen masa — dört kişi, üç kişi, ve heads-up. Önce değişmeyen omurga: final masasında doğru davranış elinle değil, stack rolünle belirlenir. Aynı el, kısa stack'te bir şey, cover eden derin stack'te başka bir şeydir. Tabloya bak, üç rol var. Kısaysan, on beş big blind altında: ilk jam'ci sen ol, hamle başlatanın avantajını al, ve ladder'ı yani ödeme merdivenini gözle; ama şunu unutma, kilitlenip blindlere erimek de bir bust'tır, katlanmak her zaman doğru değil. Orta stack'sen: masanın en kırılgan pozisyonundasın — ne kısa gibi rahat jam edebilirsin, ne büyük gibi baskı kurabilirsin; kimin bust'ını beklediğini bil ve seni cover eden biriyle gereksiz pot açma. Cover eden derin stack'sen: agresyonun serbest, kısaları ve orta stackleri cezasız ez; tek yasak, eşit derin bir chip-leader'la ego savaşına girmek. Ve ICM açıkken kritik asimetri: jam etmek call etmekten çok daha ucuzdur, çünkü jam'de fold equity'n var, call'da yok — o yüzden jam ve call aralıkların ayrışır.",
      },
      {
        title: "4-handed: rol + ICM hâlâ dişli",
        table: { section: "Bölüm 12", sub: "12.4", caption: "Kilitli orta stack = en kârlı hedef." },
        visuals: [
          { kind: "range", value: "22+, A2s+, K4s+, Q7s+, J7s+, T7s+, 96s+, 86s+, 75s+, 65s, 54s, A2o+, K8o+, Q9o+, J9o+, T9o", valueLabel: "4-handed BTN ~%45", caption: "Baseline — tam Nash molada kalibre" },
        ],
        bullets: [
          "Baseline açılış: 4-handed BTN ~%45, ilk pozisyon (CO) ~%25.",
          "Masa küçüldü, blindler daha sık vurur → açılış aralığı genişler.",
          "Ama ICM hâlâ dişli: pay-jump'lar yakın, cover edilirken marjinal flip = fold.",
          "Hedef: kilitlenmiş orta stack (soy); cover edenle ego savaşı yok.",
        ],
        ruleBox: "Genişle ama rol-gated: cover ediliyorsan daralt, cover ediyorsan ez.",
        narration:
          "Dört kişi kaldığında ne değişir? İki şey aynı anda. Bir: masa küçüldüğü için blindler ve ante sana çok daha sık vurur, her orbit'te daha büyük bir stack yüzdesi ödersin; bu yüzden hayatta kalmak için açılış aralığını genişletmek zorundasın, bekleyerek erirsin. İki: buna rağmen ICM hâlâ dişli, çünkü pay-jump'lar, yani ödeme sıçramaları artık çok yakın ve büyük. Bu ikisini birlikte yönetirsin: genişlersin ama rol-gated, yani rolüne göre. Seni cover eden biri varsa marjinal spotları daraltırsın, çünkü kaybedersen bust olursun; sen cover ediyorsan ezersin. En kârlı hedef sabit: kilitlenmiş, yani ödeme atlamayı korumak için sıkılaşmış orta stack — onu soyarsın. Ve eşit derin büyük stack'lerle ego savaşına girmezsin; dört kişide bir yanlış flip seni dördüncülüğe gönderir. Somut bir baseline: dört kişide button açılışın yaklaşık yüzde kırk beş, ilk pozisyon yaklaşık yüzde yirmi beş; grid'de button aralığını görüyorsun. Tam Nash bu derinlikte molada, drill'de kalibre edilir — bu bir başlangıç çizgisi.",
      },
      {
        title: "3-handed: pozisyon patlar",
        visuals: [
          { kind: "range", value: "22+, A2s+, K2s+, Q6s+, J7s+, T7s+, 96s+, 85s+, 75s+, 64s+, 54s, A2o+, K7o+, Q8o+, J8o+, T8o+, 98o", valueLabel: "3-handed BTN ~%50", caption: "Baseline — SB ~%45 raise" },
        ],
        bullets: [
          "Baseline: 3-handed BTN ~%50, SB ~%45 (raise).",
          "Pozisyon değeri patlar — button çok güçlü, blind savaşı sıklaşır.",
          "Aralıklar iyice geniş: button'dan agresif aç, SB/BB'yi bas.",
          "ICM yumuşar ama pay-jump varsa hâlâ rol-gated; kısaysan ilk jam'ci ol.",
        ],
        ruleBox: "3-handed'de button = kâr merkezi; geniş aç, ama pay-jump dişliyse cover'a saygı.",
        narration:
          "Üç kişi kaldığında oyun bir kez daha hızlanır ve pozisyonun değeri patlar. Artık her elde ya button'dasın, ya smol blind, ya büyük kör; button son derece güçlü çünkü iki rakibin de önünde aksiyon alıyorsun ve postflop pozisyon sende. Aralıkların iyice genişler: button'dan agresif açarsın, blind savaşları sıklaşır, ve baskıyı sen kurarsın. ICM bu noktada yumuşamaya başlar çünkü daha az oyuncu kaldı ve herkes zaten iyi para kilitledi; ama eğer büyük bir pay-jump hâlâ varsa — mesela birincilik ikinciliğin çok üstündeyse — karar hâlâ rol-gated kalır. Kısaysan ilk jam'ci olma prensibin sürer; derinsen iki rakibini de basarsın. Özet: üç kişide button senin kâr merkezin, geniş ve agresif oyna, ama pay-jump dişliyse cover edilene saygı göster. Somut baseline: üç kişide button yaklaşık yüzde elli, smol blind yaklaşık yüzde kırk beş raise; grid button'ı gösteriyor. Yine tam aralık drill'de kalibre.",
      },
      {
        title: "Heads-up: ICM biter, chipEV başlar",
        visuals: [
          { kind: "range", value: "22+, A2s+, K2s+, Q2s+, J2s+, T3s+, 94s+, 84s+, 74s+, 63s+, 53s+, 43s, A2o+, K2o+, Q4o+, J6o+, T6o+, 96o+, 85o+, 75o+, 64o+, 54o", valueLabel: "HU button aç ~%82", caption: "Neredeyse her el" },
          { kind: "range", value: "77+, A9s+, KTs+, QTs+, JTs, ATo+, KJo+", valueLabel: "HU BB 3-bet value", caption: "re-steal çekirdek ~%15" },
        ],
        bullets: [
          "Button = smol blind: ilk aksiyon + postflop pozisyon sende.",
          "İki ödül kilitli → ICM çözüldü, saf chipEV oyna.",
          "Button çok geniş aç (~%82), BB defend ~%65 (call+3-bet), 3-bet value 77+/A9s+/KTs+/ATo+.",
          "Bunlar baseline — tam Nash bu derinlikte molada/drill'de kalibre (kitap 12.5).",
        ],
        ruleBox: "HU'da ICM biter, chipEV başlar; button = SB, inisiyatif + pozisyon sende.",
        narration:
          "Ve son perde: heads-up, iki kişi. Burada mekanik tümüyle değişir. Birincisi, button artık smol blind'dir; yani hem preflop ilk aksiyonu sen alırsın, hem de postflop pozisyon sende olur — button devasa bir avantaj. İkincisi ve en önemlisi: sadece iki ödül kaldığı için ICM pratikte çözülmüştür; ikinci ödül garanti, birincilik için oynuyorsun, o yüzden artık saf chipEV oynarsın, ICM daralması biter. Bunun sonucu agresif bir oyun: button'dan çok geniş açarsın, yaklaşık yüzde seksen ve üstü; büyük körden de çok geniş defend edersin; ve kazanan, en iyi eli bekleyen değil, postflop en iyi oynayan ve baskıyı sürekli kuran olur. Sana somut bir baseline veriyorum: button'dan yaklaşık yüzde seksen iki açarsın, yani neredeyse her el; büyük körden yaklaşık yüzde altmış beş savunursun, call ve 3-bet karışık; 3-bet value çekirdeğin yedi yedi ve üstü, as dokuz suited ve üstü, kral on suited ve üstü, as on offsuit ve üstü. Grid'lerde button açılışını ve büyük kör 3-bet value'sunu görüyorsun. Ama şu notu unutma: bunlar başlangıç çizgisi; tam Nash aralıkları bu derinlikte molada, drill'de kalibre edilir — kitabın on iki nokta beş felsefesi bu, ezber tablo değil. Aklında kalması gereken tek cümle: heads-up'ta ICM biter, chipEV başlar; button smol blind'dir, inisiyatif ve pozisyon sende.",
      },
    ],
  },
  {
    id: "M22",
    title: "C-bet & barreling: flop → turn → river",
    chapter: "Bölüm 18 ★",
    minutes: 9,
    slides: [
      {
        title: "Tez: c-bet bir sebep için — value ya da fold equity",
        table: { section: "Bölüm 18", sub: "18.1", caption: "Rec sahada ağırlık value'ya kayar." },
        bullets: [
          "Preflop boyut (B4.2): IP 3-bet 3×, OOP 4×, coldcaller başına +1×, squeeze 4.5–5×.",
          "C-bet iki nedenden atılır: value (öderler) VEYA fold equity (atarlar).",
          "Rec sahada fold equity düşük → default c-bet GTO'nun ~%10–15 altı.",
          "İkisi de 'hayır' ise check. Havayla range-bet refleksi para yakar.",
        ],
        ruleBox: "Rec sahada c-bet bir SEBEP için atılır — otomatik range-bet refleksi için değil.",
        narration:
          "Bu modül dağınık bir konuyu tek yere topluyor: bahis boyutları ve c-bet, yani süreklilik bahsi. Önce boyut haritası. Preflop tarafı kitapta net ve ezber: pozisyon içindeyken 3-bet açılışın üç katı, pozisyon dışındayken dört katı, her cold-caller için bir açılış boyutu ekle, squeeze dört buçuk beş kat. Şimdi asıl kafa karıştıran taraf: flop c-bet. Buradaki tek soru şu, c-bet neden atılır? İki neden var. Bir: value, yani senden zayıf bir el ödeyecek. İki: fold equity, yani daha iyi bir el atacak ya da bir draw call'ı bırakacak. Tabloya bak. Senin sahanda, yani rec-ağırlıklı Main ve EPT masalarında rakip çoğu zaman station'dır, kolay kolay fold etmez. Bu da fold equity'yi düşürür. Sonuç: senin default c-bet frekansın çözücünün önerdiğinin yaklaşık yüzde on, yüzde on beş altında olmalı; çözücü dengeli bir rakibe göre konuşur, senin rakibin dengeli değil. Pusula tek cümle: c-bet bir sebep için atılır, öderler mi yoksa gerçekten atarlar mı? İkisinin de cevabı hayırsa check et. Havayla otomatik range-bet refleksi station'a karşı para yakmaktır; üstelik call yiyince kendi şişirdiğin pota bluff-catcher olarak girersin, kök hatanın ta kendisi.",
      },
      {
        title: "Flop: board dokusu frekansı ve boyutu belirler",
        table: { section: "Bölüm 18", sub: "18.2", caption: "Board setler boyutu, elin değil." },
        visuals: [
          { kind: "board", cards: "As 7d 2c", label: "Kuru — üçte bir, range-bet" },
          { kind: "board", cards: "9s 8s 7d", label: "Islak — üçte iki polarize / gerisi check" },
        ],
        bullets: [
          "Kuru yüksek-kart (A-7-2): range avantajı sende → 1/3 yüksek frekans range-bet.",
          "Islak bağlantılı (9-8-7): range avantajı BB'de → 2/3 polarize, gerisi check.",
          "Kuru eşleşmiş (8-8-3): ucuz fold equity → küçük bet.",
          "Multiway her board: frekans çöker (B13).",
        ],
        ruleBox: "Kuru = küçük boyut, geniş aralık. Islak = büyük boyut, dar aralık.",
        narration:
          "Flop c-bet'in birinci belirleyicisi board dokusudur, elin değil board. Çünkü boyutu ve frekansı board belirler. Anahtar kavram range avantajı: preflop açan sensin, o yüzden yüksek kartlı kuru bir board senin aralığına yarar, düşük ve bağlantılı bir board ise call eden büyük körün aralığına yarar. Üç ana durumu ayır. Bir: kuru, yüksek kartlı, bağlantısız board, mesela as yedi iki ya da kral sekiz üç. Range avantajı sende, o yüzden aralığının tamamıyla küçük bir c-bet atarsın, üçte bir pot, yüksek frekans; buna range-bet denir, ucuzdur ve elin hakkında bilgi taşımaz. İki: ıslak, bağlantılı board, mesela dokuz sekiz yedi ya da yedi altı beş. Burada range avantajı sende değil, herkes bir şey yakalar; o yüzden seçici ol, polarize oyna, güçlü value ve gerçek nut-draw'la üçte iki pot at, gerisini check et, havayla barrel atma. Üç: kuru eşleşmiş board, mesela sekiz sekiz üç. Kimse eşleşmeyi çok tutmaz, fold equity ucuzdur, küçük bir bet yüksek frekans çalışır. Ve şu istisnayı unutma: üç ya da daha çok kişilik potta bu bölüm askıya alınır, c-bet frekansı çöker, bunu on üçüncü bölümde işledik. Tek cümle: kuru board küçük boyut geniş aralık, ıslak board büyük boyut dar aralık.",
      },
      {
        title: "Hangi elle c-bet — dört sınıf, üç boyut",
        table: { section: "Bölüm 18", sub: "18.3", caption: "Value / draw / hava / marjinal × kuru / ıslak." },
        bullets: [
          "Value (top pair+/overpair/set): kuru 1/3, ıslak 2/3 — şişirmek istediğin el.",
          "Gerçek/nut draw: semi-bluff bet, ıslakta büyük (tamamlanınca ödenir).",
          "Hava + bloker: SADECE kuru board range-bet parçası; ıslakta check-fold.",
          "Marjinal showdown (2. per): ıslakta check-back, pot kontrol.",
        ],
        ruleBox: "Boyut = river planının fiyatı. 2/3 attıysan havayla o yola girme (B11.1).",
        narration:
          "Board'u okuduktan sonra ikinci soru: hangi elle c-bet atarım ve hangi boyutta? Dört sınıfa ayır. Birinci sınıf, value: top pair ve üstü, overpair, set, iki per. Bunlarla bet atarsın; kuru board'da üçte bir, ince value dahil; ıslak board'da üçte iki, çünkü bunlar potu şişirmek istediğin ellerdir. İkinci sınıf, gerçek ya da nut draw: nut flush draw, iki uçlu açık draw artı overcard. Bunlarla semi-bluff bet atarsın; ıslak board'da büyük, çünkü tamamlanınca çok ödenir. Üçüncü sınıf, hava artı bloker: bunu sadece kuru board'da, range-bet'in bir parçası olarak küçük atarsın; ıslak board'da bırak, check-fold, çünkü board rakibe yaradı ve havanın fold equity'si yok. Dördüncü sınıf, marjinal showdown value: ikinci per, zayıf top pair. Bunları ıslak board'da check-back edersin, pot kontrolü için; kuru board'da öderse küçük bir value bet, ödemezse check. Ve buradaki köprü kuralı on birinci bölüme bağlanır: attığın boyut river planının fiyatıdır. Flop'ta üçte iki attıysan turn ve river'ın stack-pot oranını daralttın; havayla o yola girme.",
      },
      {
        title: "2. fıçı (turn): river planım var mı?",
        table: { section: "Bölüm 11", sub: "11.1", caption: "Elim × turn kartı — yön sabit, boyut kalibre." },
        bullets: [
          "Overpair: boş turn kontrollü bet; overcard SPR say; board eşleşti/draw geldi → check.",
          "Top pair iyi kicker: ince bet / check-call; kötü kartta check-fold.",
          "Hava + bloker: boş turn barrel adayı; korkutucu kart gelince BIRAK.",
          "Potu her büyüttüğünde river'da check-fold lüksün azalır.",
        ],
        ruleBox: "İkinci fıçıyı atmadan sor: river planımı söyleyebiliyor muyum?",
        narration:
          "C-bet atıldı, call geldi. Şimdi ikinci fıçı, turn. Kök hata çoğu zaman tam burada doğar: potu ikinci fıçıyla kendin şişirir, river'a bluff-catcher olarak kalırsın. Tabloya bak, elin ve gelen turn kartına göre. Overpair'in varsa: boş ya da düşük turn'de kontrollü bet; sana overcard geldiyse stack-pot oranını say ve dikkatli ol; board eşleştiyse ya da draw tamamlandıysa check eğilimi. Top pair iyi kicker: ince bet ya da check-call, kötü kartta check-fold. Hava artı bloker: boş turn'ler barrel adayı, ama korkutucu bir kart gelince bırak. Boyutlar senin icra verinle kalibre; ama yön sabittir, potu her büyüttüğünde river'da check-fold etme lüksünü satın alma gücün azalır. İkinci fıçıyı atmadan önce iki soruyu cevapla: river planımı şimdiden söyleyebiliyor muyum, ve kötü bir river geldiğinde check-fold edebileceğim bir pot boyutu bırakıyor muyum? Turn'de attığın boyut, river'da vereceğin kararın fiyatıdır.",
      },
      {
        title: "3. fıçı (river): value mı, bırak mı",
        table: { section: "Bölüm 11", sub: "11.2", caption: "Boyut büyüdükçe rakip value'ya kayar." },
        bullets: [
          "Bluff-catch: ≤%50 call yönü; overbet polarize → tek per fold.",
          "Thin value (11.3): senden zayıf el ödüyorsa ince de olsa BET.",
          "Kötü river (11.4): alt kartın 4.'sü / 3. flush / board eşleşme → jam ASLA.",
          "Multiway (13.1): blöf yok, tek per bir sınıf aşağı — sadece value/nut.",
        ],
        ruleBox: "River'da jam ancak senden zayıf bir el ödeyecekse value'dur.",
        narration:
          "Ve üçüncü fıçı, river. Burada iki farklı koltuk var. Birincisi, rakip bet attı ve elin bir bluff-catcher: karar rakibin boyutuna bağlı. Yüzde elli ve altı boyutlar daha çok blöf ve ince value içerir, call yönü; overbet ise polarizedir, ya nut ya hava, ve orada tek per fold yönüne döner, panik hero-call değil. İkincisi, sıra sende ve value için mi bet atmalısın? Kural: senden zayıf bir el ödeyecekse, ince de olsa bet et; rec-ağırlıklı sahada kaçan thin value doğrudan chip kaybıdır. Ama bir alarm listesi var, kötü river kataloğu: alt kartların dördüncüsü ya da kenti tamamlayan kart, üçüncü flush kartı, board'un eşleşmesi, ya da üstüne gelen overcard. Bu kartlarda value hedefin yoktur; küçük pota check-call, büyük pota check-fold, ve jam asla, çünkü jam ancak senden zayıf bir el ödeyecekse value'dur. Son olarak multiway: üç ya da daha çok kişilik potta blöf yok, tek per heads-up'takinden bir sınıf aşağı, sadece güçlü value ve gerçek nut için bet. Bu üç sokak bir zincir: flop c-bet kararı şişmiş potun tohumunu ya keser ya eker, turn onu büyütür ya da frenler, river icrayı verir.",
      },
    ],
  },
  {
    id: "M23",
    title: "İnisiyatif hatları: donk, probe, stab, float, blocker",
    chapter: "Bölüm 19 ★",
    minutes: 11,
    slides: [
      {
        title: "İnisiyatif: lead belirsizken kim bet atar",
        bullets: [
          "Altı akraba hat: donk, gecikmiş c-bet, probe, stab, turn float, river blocker.",
          "Hepsi lead belirsizken çıkar: potu al mı, elimi bedavaya realize mi et?",
          "İnisiyatif 3 şart birdense: (a) biri zayıf gösterdi + (b) board senin + (c) check daha kârlı değil.",
          "Ortak tuzak: marjinal yapılı eli inisiyatif diye şişirmek = kök hata.",
        ],
        ruleBox: "Guard: kim zayıf gösterdi + board kimin + elimi realize mi etmeliyim — üçü yoksa check.",
        narration:
          "Bu modül dağınık ama akraba altı hattı tek çatı altında topluyor: donk, gecikmiş c-bet, probe, stab, turn float ve river blocker-bet. Ortak noktaları şu: hepsi lead'in, yani inisiyatifin belirsiz olduğu anlarda çıkar — kimse potu net sahiplenmemiştir ve soru şudur, potu ben mi alayım yoksa elimi bedavaya showdown'a mı taşıyayım? Rec-ağırlıklı sahanda varsayılan cevap net: uydurma agresyon yok. İnisiyatif ancak üç şart birden varsa alınır. Bir: biri zayıflık gösterdi. İki: board senin aralığına yarıyor. Üç: elini check'le realize etmek daha kârlı değil. Üçü birden yoksa check edersin. Ve her hattın 'ne zaman yapılmaz' sütunu, 'ne zaman yapılır'dan daha önemli, çünkü ortak tuzak hep aynı: check'le showdown'a götürmen gereken marjinal bir eli inisiyatif diye bet'e sokmak. Bu, float'ı da probe'u da stab'ı da kök hataya çevirir. Guard cümlesi bu modülün omurgası: kim zayıflık gösterdi, board kimin, elimi realize mi etmeliyim — üçü yoksa check.",
      },
      {
        title: "Donk bet — OOP, PFR'a önden çıkış",
        table: { section: "Bölüm 19", sub: "19.1", caption: "Sadece SENİN board'unda; yüksek board'da yasak." },
        visuals: [
          { kind: "board", cards: "7h 6s 4d", label: "Senin board'un (7-6-4) — donk adayı" },
          { kind: "board", cards: "As Kd 8c", label: "PFR'ın board'u (A-K-8) — donk atma" },
        ],
        bullets: [
          "Varsayılan: donk ATMA — açana check standart; donk telegraf + OOP bloat.",
          "Pencere: düşük-bağlantılı BB board'u (7-6-4, 5-5-2) → senin aralığın çarpar.",
          "Küçük donk PFR'a bedava check-back'i vermez, equity'sini fiyatlar.",
          "Değil: yüksek board / station / multiway / tek per'le büyük donk (kök hata).",
        ],
        ruleBox: "Donk sadece senin board'unda + küçük; yüksek board açanın arazisidir.",
        narration:
          "Birinci hat: donk bet. Donk, OOP'ken preflop açana check yerine önden bet atmaktır; 'PFR bet atar' konvansiyonunu kırar. Varsayılan nettir: donk atma, açana check standarttır — donk çoğu zaman elini telegraf eder ve seni pozisyonsuz şişmiş pota sokar, yani kök hata arazisine. Peki pencere ne zaman açılır? Tek şey: board senin aralığına çarpıyorsa. Somut olarak, büyük körden savunduğun düşük ve bağlantılı board'lar, mesela yedi altı dört ya da beş beş iki. Bu board'lar senin savunma aralığına, açanın yüksek-kart aralığından çok daha fazla çarpar; sende daha çok iki-per, set, kent vardır. Küçük bir donk, açana bedava check-back hakkını vermez ve equity'sini fiyatlar. Görselde iki board var: yedi altı dört senin board'un, donk adayı; as kral sekiz ise açanın board'u, orada donk açanın arazisine bet'tir, atma. Ne zaman değil: yüksek board, donk'a asla fold etmeyen station, multiway, ve tek per'le büyük donk — sonuncusu doğrudan kök hata.",
      },
      {
        title: "PFR zayıflık gösterdi: gecikmiş c-bet & probe",
        table: { section: "Bölüm 19", sub: "19.3", caption: "PFR flop'u bıraktı = capped; turn'de al." },
        bullets: [
          "Gecikmiş c-bet (sen PFR): flop check-back → turn'de SEBEP varsa bet.",
          "Sebep: geliştin / villain 2. kez check / turn kartı sana yaradı.",
          "Probe (sen OOP): flop check-check → açan capped → turn/river'da bet.",
          "'Flop cc → çalınır mı' = EVET, capped aralığa. Değil: tuzak / kötü turn / SD value.",
        ],
        ruleBox: "PFR flop'ta güçlüyle bet ederdi; check-back = capped → capped'a inisiyatif al.",
        narration:
          "İkinci ve üçüncü hat aynı temaya bağlı: PFR zayıflık gösterdiğinde onun capped aralığını cezalandırmak. İki versiyonu var. Bir, gecikmiş c-bet: sen açansın, flop'u check-back ettin — pot kontrol ya da vazgeçtin — ve turn'de bet ediyorsun. Bu, otomatik flop c-bet refleksinin disiplinli zıddıdır: geniş c-bet'i atlarsın, turn'de bir sebep çıkınca bet edersin. Sebep üç tanedir: turn'de geliştin, ya da villain ikinci kez check edip zayıflık gösterdi, ya da turn kartı senin aralığına yaradı. Sebepsizse, flop'taki vazgeçişi turn'de bloat'a çevirme. İki, probe bet: bu senin sorduğun spot — flop check-check gitti. Sen OOP'sun, açan flop'u check-back etti; bu ne demek? Güçlü ellerin çoğu flop'ta bet ederdi, demek ki açanın aralığı capped, tavanlı. O yüzden turn'de bu capped aralığa OOP bet atıp inisiyatifi alırsın. Cevap net: evet, flop check-check sonrası turn ve river çalınır, capped aralığa karşı. Ne zaman değil: açan tuzak için güçlüyle check-back ediyorsa, turn senin aralığını ıskaladıysa, ya da elinde check-call ile realize edilecek marjinal bir yapılı el varsa — onu şişirme.",
      },
      {
        title: "Stab — IP, check gelince potu al",
        table: { section: "Bölüm 19", sub: "19.4", caption: "En düşük riskli inisiyatif; sana check = herkes zayıf." },
        bullets: [
          "IP'sin, herkes sana check etti (flop/turn) → küçük bet ile al.",
          "Herhangi equity/fold equity yeter; sana check geldiyse herkes zayıf gösterdi.",
          "Değil: multiway (tuzak) / check-raise eğilimli villain.",
          "Değil: board checker'lara çarpıyor / SD value'lu el bedava showdown istiyor.",
        ],
        ruleBox: "Stab küçük; kimsenin sahiplenmediği potu ucuza topla, HU'da serbest.",
        narration:
          "Dördüncü hat: stab. En temel ve en düşük riskli inisiyatif aracı. IP'sin ve herkes sana check etti, flop'ta ya da turn'de. Sana check geldiyse zaten herkes zayıflık gösterdi; kimsenin istemediği potu küçük bir bet ile alırsın. Herhangi bir equity ya da fold equity yeter. Ne zaman değil: multiway, çünkü biri tuzakta olabilir; check-raise eğilimli bir villain varsa; board checker'ların aralığına sert çarpıyorsa; ya da elinde showdown value olan bir el varsa ve bedava showdown senin lehineyse. Boyut küçük — stab pahalı olmak zorunda değil, amaç kimsenin sahiplenmediği potu ucuza toplamak.",
      },
      {
        title: "Turn float — pozisyonel gecikmiş agresyon",
        table: { section: "Bölüm 19", sub: "19.5", caption: "IP + planlı; float turn'de biter." },
        bullets: [
          "Flop c-bet'i IP call → villain turn'ü check ederse potu al (gecikmiş blöf).",
          "IP + backdoor/overcard/bloker (planlı) + turn'ü bırakan villain + kuru-ımsı flop.",
          "İcra: turn check gelirse bet al; villain 2. fıçı atarsa BIRAK.",
          "Değil: OOP / barrel atan villain / ıslak board / multiway.",
        ],
        ruleBox: "Float turn'de biter: ya bet atıp alırsın ya bırakırsın; sürüklenip ödemek kök hatadır.",
        narration:
          "Beşinci hat: turn float. Float, flop c-bet'ini pozisyonda call edip villain turn'ü check ettiğinde potu almaktır — amaç showdown değil, gecikmiş blöf. Şartlar dar. Pozisyon: sadece IP, çünkü ancak pozisyonda potu temiz alırsın; OOP float asla. Rakip: flop'u geniş c-bet'leyip turn'ü bırakan tip; ikinci fıçıyı atan station ya da agresif reg'e float atma. Elin: saf hava değil, planlı — backdoor draw, overcard ya da bloker. Board: villain'in range-bet'lediği kuru-ımsı flop; ıslak board'da villain barrel atar, orada float ölür. Ve icranın altın kuralı: float turn'de biter. Turn'de sana check gelirse bet atıp alırsın; villain ikinci fıçıyı atarsa bırakırsın. Sen check için float'ladın, iki fıçı ödemek için değil. Float'ı call-call-call'a sürüklersen, o artık float değil, kök hatadır.",
      },
      {
        title: "River blocker-bet — istisna, default 11.2",
        table: { section: "Bölüm 19", sub: "19.6", caption: "Varsayılan check-call/check-fold; blocker dar sapma." },
        bullets: [
          "Varsayılan = 11.2 (check-call/check-fold). Blocker DAR bir sapma.",
          "Station'a check-call daha iyi: indirim yapmaz, value'yla öder, raise ederse batarsın.",
          "Pencere: capped+agresif villain + ince bluff-catcher + kuru/statik river + küçük boyut.",
          "Bunların hepsi yoksa blocker YOK → 11.2. Büyük blocker çelişkidir.",
        ],
        ruleBox: "Blocker yalnız capped+agresif rakibe; station'a ASLA — default 11.2.",
        narration:
          "Altıncı hat: river blocker-bet, ve buna en sert uyarıyla giriyoruz. Bu spotun varsayılanı bu modül değil, on bir nokta iki'dir: check-call ya da check-fold. Blocker-bet, river'da OOP küçük bir bluff-catcher'la küçük bet atıp villain'in büyük polarize bet'ini engellemek, ucuz bir showdown satın almaktır. Ama station'a karşı neredeyse her zaman check-call daha iyidir; station küçük bet'e indirim yapmaz, seni yine value'yla öder, üstelik raise ederse batarsın. Pencere sadece şu dar durumda açılır: villain capped ve agresif, yani check gelseydi polarize basardı; senin elin ince bir bluff-catcher, blöfü yenen ama value'ya kaybeden; river kuru ve statik, villain'in aralığı belli; ve boyut küçük, yüzde yirmi ile otuz üç arası. Bunların hepsi yoksa blocker yok, on bir nokta iki'ye dön, check-call ya da check-fold. Büyük blocker zaten bir çelişkidir.",
      },
      {
        title: "Özet: 6 hat tek kartta",
        table: { section: "Bölüm 19", sub: "19.8", caption: "Kim zayıf gösterdi → aç → kapat (default)." },
        bullets: [
          "Donk: senin board'un + küçük. Gecikmiş c-bet: turn'de sebep.",
          "Probe: capped'a turn bet. Stab: herkes check → küçük al.",
          "Turn float: IP + plan. River blocker: capped+agresif, yoksa 11.2.",
          "Hepsini tek guard yönetir: kim zayıf + board kimin + realize mi.",
        ],
        ruleBox: "İnisiyatif bir hak değil kazanılan fırsattır; doğru alınırsa anti-bloat, yanlış alınırsa kök hata.",
        narration:
          "Son olarak altı hattı tek kartta topluyoruz. Her satırda önce 'kim zayıflık gösterdi', sonra 'ne zaman aç', sonra 'ne zaman kapat' var. Donk: board avantajı senin — senin board'unda küçük aç, yüksek board'da ya da station'a kapat. Gecikmiş c-bet: sen flop'u bıraktın — turn'de sebep varsa aç. Probe: açan flop'u check-back etti — capped aralığa turn'de bet. Stab: herkes check etti — küçük bet ile al. Turn float: villain turn'ü check etti — IP ve planlıysan al. River blocker: villain check gelseydi basardı — capped ve agresifse, ince bluff-catcher'la, küçük; değilse on bir nokta iki. Hepsini tek guard cümlesi yönetir: kim zayıflık gösterdi, board kimin, elimi realize mi etmeliyim — üçü birden yoksa check. İnisiyatif bir hak değil, kazanılan bir fırsattır; doğru alınırsa potu ucuza bitirir, yanlış alınırsa kök hatanın yeni kapısıdır.",
      },
    ],
  },
  {
    id: "M24",
    title: "Risk Premium: ICM'in sayısı",
    chapter: "Bölüm 20 ★",
    minutes: 8,
    slides: [
      {
        title: "ICM'in fiyatı bir sayıdır",
        bullets: [
          "Risk premium = chipEV eşiğine ICM'in eklediği ekstra gereken equity.",
          "'Cover ediliyorsan daralt' = 'gereken equity'ye risk primini ekle.'",
          "B12 ne yapacağını söyler; B20 neden ve ne kadarını ölçer.",
          "chipEV'de rahat call olan el, ICM baskısında fold'a dönebilir.",
        ],
        ruleBox: "ICM'in fiyatı bir sayıdır: chipEV eşiğine eklenen ekstra gereken equity.",
        narration:
          "Bu modül kitabın en soyut disiplinini somut bir sayıya bağlıyor: risk premium, yani risk primi. Şimdiye kadar ICM'i hisle verdik: cover ediliyorsan daralt, bubble'da kuvöz kuvöz bile fold olabilir. Ama 'ne kadar daraltayım' sorusunun sayısal bir cevabı var. ICM'in fiyatı bir sayıdır: chipEV'de gereken equity'nin üstüne ICM'in eklediği ekstra yüzde. Yani 'cover ediliyorsan daralt' cümlesinin matematiksel karşılığı şudur: gereken equity'ye risk primini ekle. On ikinci bölüm sana ne yapacağını söyledi; bu bölüm neden ve ne kadar olduğunu ölçüyor. Çünkü chipEV'de rahat call olan bir el, ICM baskısı altında fold'a dönebilir, ve aradaki fark attığın her fold'un gizli fiyatıdır.",
      },
      {
        title: "İki tanım + worked example",
        table: { section: "Bölüm 20", sub: "20.1", caption: "Bubble factor ve risk premium." },
        bullets: [
          "Bubble factor = chip kaybının maliyeti ÷ kazancının değeri (chipEV'de 1.0).",
          "chipEV: call için pot odds %37.5 → %37.5 equity yeter.",
          "Bubble'da aynı call (kayıp=bust): ~%47 gerekir (temsili) → prim ~%9–10.",
          "Sonuç: A9s (B12.4'te not-cover call'dı) cover EDENE karşı bubble'da fold.",
        ],
        ruleBox: "chipEV'de yeten equity, ICM'de yetmez; aradaki fark risk primidir (kesin sayı kalibre).",
        narration:
          "İki tanımla başlayalım. Birincisi bubble factor: chip kaybının maliyetinin, chip kazancının değerine oranı. chipEV'de, yani cash oyununda, bu oran birdir — kaybettiğin chip kazandığınla aynı değerde. İkincisi risk premium: chipEV eşiğinin üstüne ICM'in eklediği ekstra gereken equity; cash'te sıfırdır. Şimdi somut örnek. chipEV'de jam'e call için pot odds diyelim yüzde otuz yedi buçuk gerektiriyor, yani yüzde otuz yedi buçuk equity yeterli. Aynı call'ı bubble'da düşün, kaybetmek bust demek: gereken equity yaklaşık yüzde kırk yediye çıkar. Bu temsili bir sayı, kesin değeri kalibre edilir. Aradaki fark, yaklaşık yüzde dokuz on, işte risk primidir. Sonucu gör: chipEV'de rahat call olan bir el, mesela as dokuz suited, ki on iki nokta dört bölümünde cover edilmeyene geniş call'dı, seni cover eden birine karşı bubble'da fold'a döner. En yüksek primde kuvöz kuvöz bile marjinalleşir.",
      },
      {
        title: "Prim ne zaman büyür",
        table: { section: "Bölüm 20", sub: "20.3", caption: "Asimetri = risk premium." },
        bullets: [
          "Payout sıçraması yakın (bubble/FT basamağı) → büyür.",
          "Rakip seni COVER ediyor (kaybedince bust) → EN BÜYÜK.",
          "Rakip cover ETMİYOR (kısa jam, 0'lanmıyorsun) → küçük → geniş call.",
          "Bu, B12.4 cover/not-cover asimetrisinin ta kendisi.",
        ],
        ruleBox: "Cover edene prim yüksek → daral; cover etmeyene prim ~0 → genişle.",
        narration:
          "Prim sabit değil; neye göre büyür? Tabloya bak. Bir: payout sıçraması yakınsa, bubble ya da final table basamağı, prim büyür çünkü elenmek çok pahalı. İki, ve en önemlisi: rakip seni cover ediyorsa, yani kaybedince bust oluyorsan, prim en yüksek seviyededir. Üç: rakip seni cover etmiyorsa, mesela kısa bir stack sana jam etti ve kaybetsen de sıfırlanmıyorsun, prim küçüktür ya da ihmal edilir ve geniş call edersin. Dört: az oyuncu ve sığ para primi sertleştirir. Şunu fark et: bu tablo aslında on iki nokta dört bölümündeki cover, not-cover asimetrisinin ta kendisi. Asimetri, risk premium'un kendisidir. Cover edene karşı prim yüksek, daralırsın; cover etmeyene karşı prim sıfıra yakın, genişlersin.",
      },
      {
        title: "Masada nasıl kullanılır",
        bullets: [
          "1) chipEV'de kaç equity gerekiyordu (pot odds).",
          "2) Üstüne risk primini ekle (cover mu? bubble mı? → yüksek).",
          "3) Elim ICM eşiğini geçiyor mu? Geçmiyorsa fold.",
          "JAM primden az etkilenir (fold equity var) → jam kalır, call daralır.",
        ],
        ruleBox: "Jam aralığın KALIR, call aralığın DARALIR (B17); risk premium bu asimetrinin temelidir.",
        narration:
          "Masada üç adımda uygula. Bir: chipEV'de kaç equity gerekiyordu, pot odds'u oku. İki: üstüne risk primini ekle, cover ediliyor muyum, bubble mı sorusuna göre prim yüksekse eşiği yukarı çek. Üç: elim bu ICM eşiğini geçiyor mu? Geçmiyorsa fold. Ve kritik bir asimetri: jam atmak, call etmekten primden çok daha az etkilenir, çünkü jam'de fold equity'n var, rakip fold edebilir. Bu yüzden jam aralığın kalır ama call aralığın daralır. On yedinci bölümde gördüğün 'jam kalır, call daralır' kuralının sayısal temeli tam olarak budur. Risk premium, o asimetrinin altındaki matematiktir.",
      },
      {
        title: "İki yönlü leak + cheat",
        table: { section: "Bölüm 20", sub: "20.7", caption: "Durum → prim → aksiyon." },
        bullets: [
          "Cover edilmeyeni cover edilen sanmak = fazla fold (B12.4 A9s/KTo leak'i).",
          "Cover edeni cover edilmeyen sanmak = primi atla = fazla call → bust.",
          "Doğru soru: cover ediliyor muyum + payout sıçraması ne kadar yakın?",
          "B12 yönü verir, B20 fiyatı ölçer — nitel + nicel.",
        ],
        ruleBox: "Cover ediliyor muyum? Cevap primi, prim eşiği, eşik kararı verir.",
        narration:
          "Son olarak iki yönlü tuzak, çünkü prim iki yöne de hata yaptırır. Birinci yön: cover edilmeyeni cover edilen sanmak, olmayan bir primi eklersin, fazla fold edersin. On iki nokta dört bölümündeki as dokuz suited ve kral on offsuit leak'i tam buydu, kısa jam'e karşı gereksiz fold. İkinci yön: cover edeni cover edilmeyen sanmak, primi atlarsın, fazla call edersin ve bust olursun. Doğru soru hep aynı: cover ediliyor muyum, ve payout sıçraması ne kadar yakın? Cheat kartını aklında tut: para uzaksa prim sıfır, normal pot odds. Cover etmeyen kısa jam'e prim sıfır, geniş call. Bubble'da nötr, orta prim, marjinali kes. Cover eden artı bubble ya da final table, yüksek prim, sert daral, kuvöz kuvöz bile marjinal olabilir. Özet: on ikinci bölüm ICM'in yönünü verir, yirminci bölüm fiyatını ölçer; ikisi aynı disiplinin nitel ve nicel yarılarıdır.",
      },
    ],
  },
  {
    id: "M25",
    title: "ICM altında postflop: bir kademe indir",
    chapter: "Bölüm 21 ★",
    minutes: 8,
    slides: [
      {
        title: "Tez: cover ediliyorsan bir kademe indir",
        bullets: [
          "ICM baskısında (cover ediliyorken) her agresif hattı bir kademe İNDİR.",
          "bet→check, raise→call, büyük→küçük, thin-value→check-back, hero-call→fold.",
          "Cover EDİYORSAN (lider) tersi: bir kademe YUKARI (barrel, baskı).",
          "Yön = cover haritasının işareti; risk primi (B20) postflop'a taşınır.",
        ],
        ruleBox: "Cover ediliyorsan bir kademe indir; cover ediyorsan bir kademe yukarı.",
        narration:
          "Bu modül iki disiplini birleştiriyor: on sekiz ve on dokuzuncu bölümlerin postflop inisiyatifi ile on iki ve yirminci bölümlerin ICM'i. Kesişim tek cümle: ICM baskısı altındayken, yani seni cover eden birine karşı, her agresif postflop hattını bir kademe indir. Bet yerine check, raise yerine call, büyük boyut yerine küçük, ince değer yerine check-back, hero-call yerine fold. Ama dikkat, bu başlık cover EDİLENin kuralıdır. Eğer sen cover ediyorsan, yani chip lidersin ve kaybetsen de yaşıyorsan, tersini yaparsın: bir kademe yukarı, daha çok barrel, daha çok baskı. Yön her zaman cover haritasının işaretidir. Yirminci bölümde risk primini preflop call ve jam'de gösterdik; bu bölüm onu flop, turn ve river'a taşıyor, çünkü prim her sokakta yeniden birikir.",
      },
      {
        title: "Neden call-off en pahalı — kural tablosu",
        table: { section: "Bölüm 21", sub: "21.2", caption: "chipEV hattı → ICM baskısında (cover ediliyorken)." },
        bullets: [
          "En çok chip riske atan hat: büyük bet/raise'e call/hero-call.",
          "Bet/barrel'ın fold equity'si var → prim onu az cezalandırır.",
          "Call-off'un fold equity'si yok → tüm chip showdown'a bağlı, tam ICM cezası.",
          "Sonuç: bluff-catch aralığın DARALIR; value bet aynı kalır.",
        ],
        ruleBox: "Call-off en ICM-vergili aksiyon: fold equity yok → şişmiş potta chip'i bağlama.",
        narration:
          "Neden postflop'ta call-off en pahalı aksiyon? Çünkü chip'i en çok riske atan hat, büyük bir bet'e ya da raise'e call ya da hero-call yapmaktır — potun şiştiği, kaybın bust'a yaklaştığı yer. Prim en çok burayı vurur. Karşılaştır: bet ya da barrel'ın fold equity'si vardır, rakip fold edebilir, o yüzden prim onu daha az cezalandırır. Ama call-off'un fold equity'si yoktur; tüm chip'ini showdown'a bağlarsın ve ICM cezası tam gelir. Sonuç şu: ICM baskısında blöf-yakalama aralığın daralır, fazla per'i bırakırsın, ama değer için bet'lemen aynı kalır. On bir nokta iki'deki 'tek per eşittir bluff-catcher' kuralı ICM'de daha da fold-eğilimlidir. Tablodaki her satır aynı yönü söylüyor: potu küçült, chip'i showdown'a bağlama, marjinali kes. O kademe, risk priminin kendisidir.",
      },
      {
        title: "İki koltuk — cover asimetrisi",
        table: { section: "Bölüm 21", sub: "21.3", caption: "Cover ediliyorsun → indir; cover ediyorsun → yukarı." },
        bullets: [
          "Cover EDİLİYORsun (kaybedince bust) → prim yüksek → bir kademe İNDİR.",
          "Cover EDİYORsun (lider, yaşarsın) → prim düşük/negatif → bir kademe YUKARI.",
          "Chip lider baskıyı SATAR; kısa/orta stack baskıyı YER.",
          "Başlık 'indir' cover EDİLENin kuralı; cover EDEN tersini yapar.",
        ],
        ruleBox: "Aynı spot iki oyuncuya zıt talimat verir; işaret = cover haritası.",
        narration:
          "Kritik nokta: yön mutlak değildir, cover haritasının işaretine bağlıdır, ve aynı spot iki oyuncuya tam zıt talimat verir. Eğer cover ediliyorsan, yani kaybedince bust oluyorsan, primin yüksektir, bir kademe indirirsin: check, call, küçük, fold. Ama eğer cover ediyorsan, yani chip lidersin ve kaybetsen bile yaşıyorsan, primin düşük hatta negatiftir, bir kademe yukarı çıkarsın: barrel, baskı, büyük boyut. Bu yirmi nokta üç tablosunun postflop yüzüdür. Chip lider baskıyı satar, çünkü rakip için her pot bir bust riskidir; kısa ya da orta stack o baskıyı yer ve daralır. O yüzden başlıktaki 'bir kademe indir' cümlesi cover EDİLENin kuralıdır; cover EDEN tam tersini yapar. Masada ilk soru hep şu: bu potta ben mi cover ediyorum, ben mi cover ediliyorum?",
      },
      {
        title: "MDF ICM'de çöker + korunma",
        bullets: [
          "MDF bir chipEV kavramı; cash + ICM-baskısız MTT'de geçer, para sıçramasında çöker.",
          "chipEV: ⅔ pot bet → MDF ~%60 savun; ICM'de savunma oranın çok düşebilir.",
          "Para sıçraması yakınken MDF altında fold LEAK değil, doğru.",
          "Protection-first: ince değeri bırak (check); kırılgan value'yu KORU (bet).",
        ],
        ruleBox: "ICM'de MDF çöker: yakın payout'ta MDF altında fold doğrudur; kırılgan value yine bet.",
        narration:
          "Şimdi önemli bir ince ayar: minimum savunma frekansı, yani MDF, ICM'de çöker. MDF bir chipEV kavramıdır; cash oyununda ve ICM baskısı olmayan MTT spotlarında geçerlidir, ama para sıçraması yakınken çöker. Örnek: villain üçte iki pot bet'lerse chipEV'de MDF yaklaşık yüzde altmıştır, aralığının yüzde altmışını savunman gerekir yoksa blöfe açıksın. Ama cover edildiğin bir ICM spotunda, aynı bet'e karşı savunma oranın çok daha düşük olabilir; buradaki over-fold bir exploit değil, doğru oyundur. Yani 'MDF altında fold eşittir leak' kuralı ICM'de tersine döner: para sıçraması yakınken MDF'in altında fold etmek doğrudur, çünkü villain'in blöfle çalması senin ICM primini geri ödemez. İkinci refleks: önce korunma. ICM'de ince değeri bırakırsın, check-back edersin; ama kırılgan value'yu, yani önde olduğun ama board'un tehdit ettiği eli, korumak için yine bet'lersin. İnce ile kırılganı ayır: ince, zaten öndesin ve kartı umursamıyorsun, check; kırılgan, öndesin ama board seni tehdit ediyor, bet — ucuz kart vermemek için, showdown'u bağlamak için değil.",
      },
      {
        title: "Cheat kartı + drill",
        table: { section: "Bölüm 21", sub: "21.7", caption: "Spot → cover ediliyorsun / cover ediyorsun." },
        bullets: [
          "Thin value: cover ediliyorsan check-back, ediyorsan bet.",
          "Marjinal bluff-catch: ediliyorsan fold, ediyorsan call.",
          "Boyut: ediliyorsan küçük, ediyorsan büyük/polarize.",
          "Kırılgan value İKİ tarafta da bet — korunma primden bağımsız.",
        ],
        ruleBox: "Tek guard: cover ediliyor muyum? Evetse indir + call-off'u en sert kes; hayırsa yukarı.",
        narration:
          "Son olarak cheat kartı ve drill. Kartı satır satır oku: ince değer, cover ediliyorsan check-back, cover ediyorsan bet ile ince değeri al. Marjinal bluff-catch, cover ediliyorsan fold, cover ediyorsan call, çünkü baskıyı yiyebilirsin. Barrel kararı, cover ediliyorsan tek fıçı ya da vazgeç, cover ediyorsan iki üç fıçı ile baskı. Boyut, cover ediliyorsan küçük, cover ediyorsan büyük ya da polarize. Ve tek istisna: kırılgan value her iki tarafta da bet, çünkü korunma primden bağımsızdır. Hepsini tek guard yönetir: cover ediliyor muyum? Evetse her agresif hattı bir kademe indir ve call-off'u en sert kes. Hayır, ben cover ediyorsam, bir kademe yukarı. Drill için üç spot: birinci, bubble'da seni cover eden villain'e karşı river'da ince bluff-catcher, chipEV'de call'du, ICM'de ne yaparsın? İkinci, final table'da chip lidersin, turn'de sana check geldi, iyi ama nut olmayan el, kademe hangi yöne? Üçüncü, cover edildiğin spotta villain üçte iki pot bet attı, MDF yüzde altmış diyor ama para sıçraması çok yakın, fold leak mi doğru mu?",
      },
    ],
  },
  {
    id: "M26",
    title: "ICM ne zaman ve kime: zaman çizelgesi + laddering",
    chapter: "Bölüm 22 ★",
    minutes: 8,
    slides: [
      {
        title: "Prim bir eğri — kişi ekseni faz'ın önünde",
        bullets: [
          "Risk primi sabit değil, eğri: bubble'da tavan, ITM'de dip, FT'de tekrar yükselir.",
          "Kişiye: seni cover eden derine yüksek; cover ETMEYEN alt stack'e ~0.",
          "Kişi ekseni faz ekseninin ÖNÜNE geçer.",
          "Faz primin tavanını belirler; cover haritası kime uygulanacağını.",
        ],
        ruleBox: "Faz tavanı verir, cover haritası kime'yi verir — kişi ekseni önce.",
        narration:
          "Yirminci bölüm risk primini bir tanım ve yön olarak verdi: cover edende en yüksek, cover etmeyen kısaya sıfıra yakın. Bu modül o primin ne zaman ve kime değiştiğini ekliyor. Önce şunu kavra: prim bir sabit değil, bir eğridir. Zamanla değişir: bubble'a yaklaşırken tavan yapar, para geçilince gevşer, final table'a yaklaşırken yeniden yükselir, her para sıçramasından sonra bir tık düşer. Ama daha kritik ikinci eksen kişidir: seni cover eden derin bir stack'e karşı prim yüksek, seni cover etmeyen bir alt stack'e karşı sıfıra yakın. Ve altın kural: kişi ekseni faz ekseninin önüne geçer. Yani faz primin tavanını belirler, ama cover haritası o primin kime uygulanacağını belirler. Bubble'da bile, seni cover etmeyen kısa bir stack'e karşı primin sıfırdır.",
      },
      {
        title: "Primin dört fazı",
        table: { section: "Bölüm 22", sub: "22.2", caption: "Faz → prim (cover edene) → mod." },
        bullets: [
          "Onset: kalan oyuncu ≈ ödenen yer sayısının ~3 katına indiğinde ICM başlar.",
          "Bubble yaklaşımı: prim tavan → sıkı call, cover ETMEYENlere agresif steal.",
          "Bubble patladı/erken ITM: prim dip → gaz, biriktir.",
          "FT yaklaşımı: prim yüksek → ikinci fren; her sıçramadan sonra bir tık gevşe.",
        ],
        ruleBox: "Öncelik kuralı: faz primi yalnız seni COVER edenlere; cover etmeyen kısa jam'e her fazda ~0.",
        narration:
          "Primin dört fazını gör. ICM hissedilmeden önce, turnuvanın derininde, para uzakken prim zaten sıfırdır. Kaba onset kuralı: kalan oyuncu sayısı, ödenen yer sayısının yaklaşık üç katına indiğinde ICM hissedilmeye başlar. Bu bir kalibre değeri, yapıya bağlı. Birinci faz, bubble yaklaşımı: prim tavanda. Kısa'ların call aralığı kilitlenir ama jam'i kalır, on yedinci bölüm. Büyük stack'ler en çok baskıyı satar, orta stack'ler en çok yer. Sıkı call, ama cover etmeyenlere agresif steal. İkinci faz, bubble patladı ya da erken ITM: prim döngüde en düşük, chipEV'ye en yakın oynadığın pencere, gaz ver ve chip biriktir. Üçüncü faz, final table yaklaşımı: prim yeniden yükselir, ikinci fren. Ve dördüncü: her elemeden sonra prim bir tık düşer, sonra masa kısaldıkça yeniden gaz. Kritik öncelik kuralı: faz primi yalnızca seni cover edenlere uygulanır. Seni cover etmeyen kısa bir jam'e karşı prim her fazda sıfıra yakındır, bubble'da bile geniş call edersin.",
      },
      {
        title: "Laddering + short stack: call daralır, jam kalır",
        bullets: [
          "Laddering orta-stack disiplini: lider özgür, orta cover ediliyor (ladder equity en yüksek).",
          "Cover ETMEYEN alt stack'e saldır, lidere değil.",
          "Short stack: CALL'ı daralır, JAM'i KALIR (B17) — nit olma.",
          "'Paraya fold'la girme' yalnız uç spotta (başka mikro bust olurken).",
        ],
        ruleBox: "Short stack jam'i geniş kalır (fold equity); daralan CALL aralığıdır — jam'i kesme.",
        narration:
          "Laddering, yani basamak atlama, her eleme bir para sıçramasıyken sırf hayatta kalarak üst basamağa tırmanmaktır. Bir orta-stack disiplinidir: lider için prim düşük, özgürdür; orta stack cover edilir ve ladder equity'si en yüksektir. Stack taramasında iki refleks. Bir: cover etmeyen bir alt stack'e saldır, lidere değil; senden kısa olan seni cover etmiyor, ona baskı ucuz. İki, ve bu kritik: short stack'in call aralığı daralır ama jam aralığı kalır, on yedinci bölüm. Kısa olmak her şeyi atmak değil ama nit olmak da değil. Cover baskısında sert daralan şey call aralığındır; unopened jam aralığın fold equity sayesinde geniş kalır, cover edenlere karşı yalnız bir tık sıkılır. Paraya fold'la girme, yani jam'i kesme, yalnızca uç bir spotta doğrudur: başka bir mikro tam da bust olmak üzereyken. Onun dışında jam'lemesi gereken eli fold eden kısa stack blind-out olur, ladder'ını yakar.",
      },
      {
        title: "İki yönlü leak",
        table: { section: "Bölüm 22", sub: "22.5", caption: "Over/under-ladder + short-panik/short-nit." },
        bullets: [
          "Over-ladder: sağlıklı stack'i nitlemek → biriktirmeyi kaçır, blind'e eri.",
          "Under-ladder: seni cover eden mega ile flip → cover edilirken bust.",
          "Short-panik: jam'i kalibresiz şişir → fold equity ziyan; düzelt: jam'i KORU, call'ı daralt.",
          "Short-nit: jam'lemesi gereken eli fold → blind-out; düzelt: jam'i geniş tut.",
        ],
        ruleBox: "Homojen stack'te asimetri kaybolur ama prim kaybolmaz — herkes herkesi cover eder, masa sıkı.",
        narration:
          "Dört leak tablosu. Over-ladder: sağlıklı bir stack'i sırf ladder için nitlersin, chip biriktirme fırsatını kaçırır blind'lere erirsin; düzeltmesi primin olmadığı yerde gaz vermek. Under-ladder: seni cover eden bir mega ile gereksiz flip'e girersin, cover edilirken bust olursun; düzeltmesi cover haritasını okuyup primi eklemek. Short-panik: jam aralığını kalibresiz şişirirsin, fold equity'yi ziyan eder bust olursun; düzeltmesi jam'i korumak, call'ı daraltmak. Short-nit: jam'lemesi gereken eli fold edersin, blind-out olur ladder'ı yakarsın; düzeltmesi jam aralığını geniş tutmak. Ve bir uyarı: masadaki bir outlier, mega ya da mikro, ICM'i keskinleştirir ve asimetri yaratır. Ama homojen stack'lerde asimetri kaybolur, prim kaybolmaz: herkes herkesi cover ettiği için çatışma primi karşılıklı yüksektir. Klasik eşit-stack satellite spotu, as as bile fold, tam olarak budur; homojen bubble masası herkes için sıkı oynanır.",
      },
      {
        title: "Cheat + Day 2 uygulaması",
        table: { section: "Bölüm 22", sub: "22.8", caption: "Sinyal → oku → aksiyon." },
        bullets: [
          "Bubble + seni cover eden → prim tavan → sıkı call, saygı.",
          "Bubble + cover ETMEYEN kısa jam → prim ~0 → geniş call.",
          "~12-15 kala restart (WSOP Online Main Day 2) = FT-yaklaşımı, prim yüksek.",
          "Steal hedefin: seni cover ETMEYEN oyuncular; her sıçramadan sonra bir tık gevşe.",
        ],
        ruleBox: "Sinyali cover haritasıyla oku: aynı bubble, cover edene sıkı, cover etmeyene geniş.",
        narration:
          "Cheat kartını ve senin somut durumunu bağlayalım. Kartı cover haritasıyla oku: bubble yakın ve rakip seni cover ediyorsa prim tavandadır, sıkı call ve saygı. Ama bubble yakın ve seni cover ETMEYEN kısa bir stack jam ettiyse prim sıfıra yakındır, geniş call, yirminci bölüm. Yeni ITM'de prim dip, gaz ve biriktir. Final table yaklaşımında prim yüksek, daral ve ladder'ı koru. Sen liderken bir alt stack karşındaysa primin düşük, baskı sat. Şimdi senin durumun: yaklaşık on iki on beş kala restart ediyorsan, örneğin WSOP Online Main Day 2 gibi, online yapıda alan birkaç masaya iner, kalan oyuncu ödenen yerin çok altındadır, tam final table yaklaşımı fazındasın, prim yüksek. Seni cover etmeyen kısa ve orta stack'lere karşı ladder değerin büyük ve prim sıfıra yakın, geniş call ve steal; seni cover eden lidere karşı prim tavanda, saygı ve daral. Her para sıçramasından sonra bir tık gevşe. Steal hedefin her zaman: seni cover etmeyen oyuncular. Drill: bubble yeni patladı orta stack'sin, döngüde chipEV'ye en yakın faz hangisi; bubble'da senden kısa cover etmeyen jam etti artı seni cover eden lider de masada, kısa jam'e call eşiğin ne lidere karşı ne; kısa stack bubble, jam mı call mı daralır.",
      },
    ],
  },
  {
    id: "M27",
    title: "Saha okuma: rakip tipleri ve exploit",
    chapter: "Bölüm 23 ★",
    minutes: 8,
    slides: [
      {
        title: "Default vs exploit — üç soru",
        bullets: [
          "GTO seni yenilmez yapar; exploit seni kârlı yapar.",
          "Üç soru: tip ne? ICM'i hissediyor mu? hangi yöne hata (gevşek/sıkı/pasif)?",
          "Sapma bu üç okumadan çıkar.",
          "Okuma yoksa default'a (dengeli) dön.",
        ],
        ruleBox: "Exploit = default'tan bilinçli sapma; okuma yoksa dengeye dön.",
        narration:
          "Bu modül kitaba dağılmış exploit notlarını tek yere topluyor. Şunu kavra: GTO, yani dengeli oyun, seni yenilmez yapar; ama seni kârlı yapan şey exploittir, rakibin hatasından para almaktır. Sahada üç soru sorarsın. Bir: bu rakip hangi tip? İki: ICM'i hissediyor mu? Üç: hangi yöne hata yapıyor, çok mu gevşek, çok mu sıkı, çok mu pasif? Sapma bu üç okumadan çıkar. Ve en önemli guard: okuma yoksa default'a, yani dengeli oyuna dönersin. Exploit bir bilinçli sapmadır, dengeden ayrılmaktır; okuman yoksa dengede kal, çünkü yanlış okumada exploit geri teper.",
      },
      {
        title: "Beş rakip tipi",
        table: { section: "Bölüm 23", sub: "23.2", caption: "Tip → hatası → exploit yön." },
        bullets: [
          "Nit: fazla fold → çal + agresyonuna saygı (nadiren blöf).",
          "Station: fazla call → blöf YOK + value'yu büyüt/overbet.",
          "LAG: fazla agresyon → bluff-catch aç + value şişir.",
          "Reg: dengeli oyna, baskı sat; Whale: value-ağır, göster ödesin.",
        ],
        ruleBox: "Her tip bir yöne hata yapar; exploit o hatanın tersine yaslanmaktır.",
        narration:
          "Beş rakip tipi ve her birine tek-satır exploit. Nit, aşırı sıkı oyuncu: açarsa ya da raise ederse nuts'a yakındır. Exploit: bet ve raise'ine saygı göster, nadiren blöftür, bluff-catch'i bırak; ama pot'larını sık çal çünkü fold eder. Station, çağıran: her şeyle call eder, fold etmez. Exploit: asla blöf yapma, blöf station'a para vermektir; güçlü value'yu büyük boyut ya da overbet ile boz, çünkü boyuta duyarsızdır, her şeyle öder; yalnız en ince value elinde boyutu küçült. LAG, gevşek-agresif: çok açar çok barrel'lar, aralığı zayıftır. Exploit: daha çok call ve bluff-catch, value'yu şişir, blöfüne fold etme. TAG ya da reg: dengeli ve düşünür, exploit azdır; dengeli oyna, ICM'i o hisseder, ona baskı sat. Whale ya da rec, eğlence oyuncusu: öngörülemez ama büyük ellerle büyük öder. Exploit: value-ağırlıklı oyna, ince blöfü az tut, elini göster ki ödesin.",
      },
      {
        title: "ICM hissediyor mu — ama kendi primin bakidir",
        bullets: [
          "ICM baskısı SATMAK yalnız rakip ICM'i hissediyorsa işe yarar.",
          "ICM-körü rec/whale: baskı satma (fold etmez) → value al.",
          "AMA kendi risk primin (B17/B20/B21) rakip ICM-körü olsa da bakidir.",
          "Sapma = value BET'i genişlet; cover'lıyken call-off gevşetmek DEĞİL.",
        ],
        ruleBox: "Whale'e baskı satma, value al — ama cover ediliyorken call-off eşiğin yine yüksek.",
        narration:
          "Kritik bir ayrım: ICM baskısı satmak yalnız rakip ICM'i hissediyorsa işe yarar. Bir reg bubble'da doğru daralır, ona baskı satabilirsin, steal ve üç-bet blöfü çalışır. Ama bir rec ya da whale ICM'i bilmez, bubble'da bile fold etmez. Ona karşı baskı satmak boşadır; onun yerine value alırsın, geniş value. Ama şimdi çok dikkat: kendi risk primin, on yedi, yirmi ve yirmi birinci bölümler, rakip ICM-körü olsa bile bakidir. Yani sapma yönü sadece şudur: baskı satma, onun yerine value bet'ini genişlet. Sapma, cover ediliyorken call-off'unu ya da stack-off'unu gevşetmek değildir. Whale bile olsa, sen cover ediliyorken bubble'da hafif stack-off yapmazsın. Onun ICM'i bilmemesi, senin kendi bust riskini ortadan kaldırmaz. Cheat: ICM-körü rec'e baskı satma value al, ama cover'lıyken call-off eşiğin yine yüksek kalır.",
      },
      {
        title: "Station playbook — boyut ve pasif river",
        bullets: [
          "Blöf YOK, sıfır. İnce value ez (check'leyeceğin ellerle bet al).",
          "Boyut: güçlü value BÜYÜK/overbet (boyuta duyarsız); yalnız en ince value'da küçült.",
          "River RAISE ≈ nuts → ince value fold.",
          "River LEAD boyuta bağlı: küçük lead'e iyi top pair genelde call; büyük/tuhaf lead'e daral.",
        ],
        ruleBox: "Station'a value'yu BÜYÜLT; raise ≈ nuts (fold) ama küçük lead'e iyi top pair call.",
        narration:
          "Station en sık ve en kârlı hedeftir, playbook'u net. Bir: blöf yok, sıfır blöf, çünkü blöf station'a para vermektir. İki: ince value ez, normalde check'leyeceğin ellerle bile bet al. Üç, ve burası önemli: boyut. Güçlü value'yu büyük boyut ya da overbet ile boz, çünkü station boyuta duyarsızdır, büyük bet call'ını sıkmaz, her şeyle öder; küçük boyut sadece boyuta duyarlı rakiplerde mantıklı, station değil. Yalnız en ince value elinde boyutu küçültmeyi düşün. Dört: pasif river ayrımı, ve bu iki ayrı durum. Station'ın river raise'i neredeyse her zaman nuts'tır, ince value'nu fold et. Ama river lead, yani donk bet, boyuta bağlıdır: station'lar river'ı zayıf ve merged ellerle sık donk'lar, o yüzden küçük bir lead'e iyi bir top pair çoğu zaman call'dır; büyük ya da tuhaf bir lead'e ise daral.",
      },
      {
        title: "Cheat + drill",
        table: { section: "Bölüm 23", sub: "23.8", caption: "Okuma → default'tan sapma." },
        bullets: [
          "Station: blöfü kes, value'yu büyüt. Nit: çal, hero-call bırak.",
          "LAG: bluff-catch aç, value şişir. Reg: dengeye dön, baskı sat.",
          "ICM-körü rec: baskı satma, value al (call-off eşiği yüksek kalır).",
          "Guard: tip + ICM-hissi + hata yönü — üçü netse sap, değilse dengede kal.",
        ],
        ruleBox: "Guard: tip + ICM-hissi + hata yönü net → sap; değilse default (denge).",
        narration:
          "Cheat kartıyla kapatalım. Station: blöfü kes, value'yu büyüt ya da overbet. Nit: çal, hero-call'u bırak. LAG: bluff-catch'i aç, value'yu şişir. ICM-körü rec: baskı satma, value al, ama cover'lıyken call-off eşiğin yüksek kalır. Reg: dengeye dön, ona baskı sat. Hepsini tek guard yönetir: tip, ICM-hissi ve hata yönü. Üçü de netse sap; net değilse default'a, dengeye dön. Drill için üç spot: bir, station her flop ve turn call etti, river'da küçük bir lead aldı, elinde iyi top pair, call mı fold mu, ya raise etseydi ne yapardın? İki, bubble'da rakip belli bir rec ya da whale, ICM umursamıyor, steal blöfü mü value mı, ve cover ediliyorsan call-off'un değişir mi? Üç, nit UTG açtı, sende orta el, exploit yön ne, call mı fold mu, ve neden onun pot'larını çalarsın?",
      },
    ],
  },
  {
    id: "M28",
    title: "Edge premium: ne zaman gamble ETME",
    chapter: "Bölüm 24 ★",
    minutes: 7,
    slides: [
      {
        title: "İki prim: risk + edge",
        bullets: [
          "Risk premium: kaybedersem ICM'de ne kaybederim (B20).",
          "Edge premium: riske atmasam edge'imle sonra daha fazla kazanır mıyım?",
          "Edge büyükse (soft/derin/yavaş) marjinal flip'i PAS geç.",
          "Edge yoksa (tough/sığ/hızlı) ICM-ayarlı +EV al — beklemek işe yaramaz. -EV asla.",
        ],
        ruleBox: "Edge var → marjinali pas; edge yok → ICM-ayarlı +EV al; -EV asla.",
        narration:
          "Yirminci ve yirmi ikinci bölüm risk primini verdi: ICM'in primi. Bu modül ikinci bir prim ekliyor: edge premium, yani beceri primi. Marjinal bir gamble'da, bir flip ya da ince artı-EV spotunda, iki prim aynı anda çalışır. Birincisi risk premium: kaybedersem ICM'de ne kaybederim? İkincisi edge premium: bu chip'leri şimdi riske atmasam, beceri edge'imle sonra daha fazlasını kazanır mıyım? Kural şu: edge'in büyükse, yani saha soft, stack derin, yapı yavaşsa, marjinal flip'i pas geç, çünkü sonra daha iyi spot gelecek. Edge'in yoksa, yani tough sahada underdog'san, sığsan, yapı hızlıysa, ICM-ayarlı artı-EV gamble'ı al, çünkü beklemek işe yaramaz. Ama tek mutlak kural: eksi-EV asla. Edge primi yalnızca artı-EV ve marjinal spotları filtreler, eksi-EV bir gamble'ı asla haklı çıkarmaz.",
      },
      {
        title: "4-soru filtresi",
        table: { section: "Bölüm 24", sub: "24.3", caption: "Soru → gamble PAS / AL." },
        bullets: [
          "Derinlik: derin=outplay alanı=PAS; sığ=AL.",
          "Yapı: yavaş=edge zamana yayılır=PAS; hızlı/turbo=erir=AL.",
          "Edge: soft saha=büyük edge=PAS; tough(underdog)=+EV AL.",
          "ICM: cover ediliyorsun=PAS (istisna: kimseyi cover etmeyen en kısa stack ~0).",
        ],
        ruleBox: "Dört soru: derinlik + yapı hızı + senin edge'in + cover haritası.",
        narration:
          "Marjinal bir gamble'dan önce dört soru sor. Bir, stack derinliği: derin misin? Derinsen outplay edecek alanın var, edge'in realize olur, pas geç; sığsan alan yok, al. İki, yapı hızı: yapı yavaş mı? Yavaşsa edge'in zamana yayılır, pas; hızlı ya da turbo ise edge erir, al. Üç, senin edge'in: saha soft mu? Soft sahada edge'in büyük, marjinali pas geç; tough sahada underdog'san edge'in yok, artı-EV'yi al. Dört, cover haritası, yani ICM: cover mı ediliyorsun? Ediliyorsan risk primi de pas der. Ama bir istisna: kimseyi cover etmeyen en kısa stack'te prim sıfıra yakındır, o satırda al. Cover ediyorsan agresif ol. Dört soru: derinlik, yapı, edge ve cover.",
      },
      {
        title: "İki primin etkileşimi + survival",
        bullets: [
          "Çoğu zaman aynı yön: soft + cover ediliyorken marjinal flip iki kez PAS.",
          "Gerçek çatışma: orta-kısa (büyükler seni cover, sen de altını cover), edge yok, hızlı.",
          "Çözüm: en iyi fold-equity spotu (JAM, call değil — B17); pasif flip'ten kaçın.",
          "En kısa (kimseyi cover etmeyen) stack: prim ~0, çatışma yok — yine jam seç.",
        ],
        ruleBox: "Survival'da bile: fold-equity'li jam seç, pasif call-flip değil (B17); -EV asla.",
        narration:
          "İki prim çoğu zaman aynı yöne iter: soft sahada ve cover ediliyorken marjinal flip iki kez pastır. Ama çatışabilirler ve gerçek çatışma dar bir spotta doğar: orta-kısa stack'sin, büyük stack'ler seni cover ediyor, yani risk primi pas der; ama sen de altındaki kısaları cover ediyorsun, edge'in yok ve yapı hızlı, yani edge primi bekleme chip lazım der. Çözüm: en iyi fold-equity'li spotu seç, yani call değil jam, on yedinci bölüm; pasif bir flip'e sürüklenme. Bir de şu ince nokta: kimseyi cover etmeyen en kısa stack'te risk primi zaten sıfıra yakındır, orada çatışma yok, iki prim de al der, ama tek ders yine aynı: fold-equity'li jam'i seç. Ve mutlak sınır: survival gerekçesiyle bile eksi-EV bir gamble'a girme.",
      },
      {
        title: "Senin sidebar'ın: Main vs SHR",
        bullets: [
          "€5.3K Main: edge'in VAR (saha geniş/soft) → marjinal flip'leri PAS geç, sabırlı.",
          "€100K SHR: edge'in YOK (dünyanın en iyileri) → +EV marjinali almaktan çekinme.",
          "Aynı el, iki turnuvada zıt karar — fark senin edge'in.",
          "SHR'de bile ICM katmanı ayrı: +$EV (ICM düşülünce) şart.",
        ],
        ruleBox: "€5K Main: sabırlı, flip'i pas. €100K SHR: +$EV marjinali al — edge yok.",
        narration:
          "Şimdi bunu senin Barcelona programına bağlayalım. Beş bin üç yüz euroluk Main event'te edge'in var, çünkü saha daha geniş ve daha soft; orada marjinal flip'leri pas geç, sabırlı oyna, edge'in sonra daha güvenli EV üretecek. Ama yüz bin euroluk süper high roller'da edge'in yok ya da çok az, çünkü karşında dünyanın en iyileri; orada beklemenin primi düşük, ICM düşüldükten sonra hâlâ artı-dolar-EV olan marjinal spotları almaktan çekinme. Aynı el, iki turnuvada tam zıt karar verir, ve aradaki tek fark senin edge'in. Tabii süper high roller'da bile ICM katmanı ayrı çalışır: bir spot ancak risk primi düşüldükten sonra hâlâ artı-EV ise alınır.",
      },
      {
        title: "Cheat + drill",
        table: { section: "Bölüm 24", sub: "24.7", caption: "Durum → karar." },
        bullets: [
          "Soft+derin+cover ediliyorsun → marjinal flip PAS (iki prim).",
          "Tough+sığ+hızlı → +EV AL (cover'a bak, $EV).",
          "Edge yok+survival → en iyi fold-equity jam'ı al.",
          "Guard: edge'im var mı + cover ediliyor muyum? İkisi evetse pas.",
        ],
        ruleBox: "Guard: edge var mı + cover ediliyor muyum? İkisi evet → pas; edge yok+mecbur → jam.",
        narration:
          "Cheat kartıyla kapatalım. Soft saha, derin ve cover ediliyorsan marjinal flip'i pas geç, iki prim de pas der. Tough saha, sığ ve hızlıysa artı-EV'yi al, ama cover'a bak, dolar-EV pozitif olmalı. Edge'in yok ve survival gerekiyorsa en iyi fold-equity'li jam'i al. Edge'in var ama cover ediyorsan seçici agresif ol. Hepsini tek guard yönetir: edge'im var mı ve cover ediliyor muyum? İkisi de evetse marjinali pas geç; edge yok ve mecbursan en iyi fold-equity spotunu al; ama eksi-EV asla. Drill: beş bin euroluk Main, derin, erken, marjinal flip, al mı pas mı ve hangi iki soru belirler; yüz bin süper high roller, sığ-orta, aynı flip, karar değişir mi neden; orta-kısa stack seni büyükler cover ediyor ama sen de altını cover ediyorsun, edge yok hızlı yapı, pasif call-flip mi fold-equity jam mı?",
      },
    ],
  },
  {
    id: "M29",
    title: "Kafamdaki hikaye: kanıt mı anlatı mı",
    chapter: "Bölüm 25 ★",
    minutes: 7,
    slides: [
      {
        title: "Tez: kanıt mı hikaye mi",
        bullets: [
          "Hero-call/büyük fold öncesi sor: okuma KANITA mı HİKAYEye mi dayanıyor?",
          "Kanıt = aksiyon dizisi, boyut, timing, pozisyon, tip (B23).",
          "Hikaye = duygu, momentum, ego. Hikayeyse default'a dön (B11.2).",
          "B23 okumasını (kanıt) B16 otopsisine bağlayan köprü.",
        ],
        ruleBox: "Hero-call'dan önce: kanıt mı hikaye mi? Hikayeyse default'a dön (B11.2).",
        narration:
          "Bu bölüm kitabın en soyut ama en pahalı katmanına, mental oyuna, tek somut araç ekliyor. Teknik doğru olsa bile mental leak parayı geri verir. Araç şu: bir hero-call ya da büyük bir fold'dan önce bir saniye dur ve sor, bu okuma kanıta mı yoksa kafamdaki hikayeye mi dayanıyor? Kanıt somuttur: villain'in aksiyon dizisi, bet-bet-bet mi check-call mi, boyutları, timing'i, pozisyonu, tipi, yani yirmi üçüncü bölümün okuma araçları. Hikaye ise duygudur: bana blöf yapıyor gibi hissediyorum, az önce beni soydu şimdi yakalarım, bu el hep kaybeder. Kanıta dayanıyorsa güven; hikayeye dayanıyorsa default'a dön, on bir nokta iki bluff-catch disiplini. Bu bölüm yirmi üçüncü bölümün rakip okumasını, yani kanıtı, on altıncı bölümün otopsisine bağlayan köprüdür.",
      },
      {
        title: "Test: kanıt cover'ı yenmez",
        bullets: [
          "Kanıta dayanıyorsa güven — AMA kanıt cover'ı yenmez.",
          "Cover ediliyorken hero-call yine fold (B21.2), kanıt olsa bile.",
          "Hikaye seni HEM gereksiz hero-call'a HEM gereksiz fold'a sürükler.",
          "İkisi de aynı kök hatanın yüzü: duygu > aralık.",
        ],
        ruleBox: "Kanıt cover'ı yenmez: cover ediliyorken hero-call yine fold (B21.2).",
        narration:
          "Testin kritik bir sınırı var: kanıta dayanıyorsan güven, ama kanıt cover'ı yenmez. Yani okuman ne kadar sağlam olursa olsun, cover ediliyorken bir hero-call yine fold'dur, yirmi bir nokta iki. ICM primi kanıttan bağımsız çalışır; şişmiş potta cover edildiğin bir call-off en pahalı aksiyondur ve güçlü bir okuma bile onu haklı çıkarmaz. İkinci nokta: hikaye seni tek yöne değil, iki yöne birden sürükler. Hem gereksiz bir hero-call'a, blöfü yakalayacağım hikayesiyle, hem de gereksiz bir fold'a, bu el hep kaybeder hikayesiyle. İkisi de aynı kök hatanın iki yüzüdür: duygunun aralığın önüne geçmesi. O yüzden guard tek: kanıt mı hikaye mi.",
      },
      {
        title: "Hikaye ↔ tilt: önce yarayı etiketle",
        bullets: [
          "Hikaye çoğu zaman tilt'in ürünü (bad-beat/ego tetikleyicisi, B16.2).",
          "Sıralama B16'nın: önce belirtiyi FARK et → fiziksel hamle, sonra karar.",
          "Fiziksel hamle: derin nefes / 1 orbit VPIP kilidi / su iç (B16.2).",
          "Tilt'liyken 'kanıt mı hikaye mi' testini bile güvenilir yapamazsın.",
        ],
        ruleBox: "Tilt belirtisinde önce fiziksel hamle (B16.2), sonra karar — yarayı etiketle.",
        narration:
          "Hikaye çoğu zaman tilt'in ürünüdür. Az önce beni soydu şimdi yakalarım cümlesi bir bad-beat ya da ego tetikleyicisinden gelir, on altı nokta iki tilt kartı. O yüzden sıralama on altıncı bölümün sıralamasıdır: önce belirtiyi fark et, hızlanıyor musun, telefona mı sarıldın, kötü ellerle mi kovalıyorsun, sonra fiziksel hamleyi uygula, derin nefes, bir orbit VPIP kilidi, su iç ya da ayağa kalk, ve ancak ondan sonra karar ver. Çünkü tilt'liyken kanıt mı hikaye mi testini bile güvenilir yapamazsın; önce yarayı etiketlersin, sonra kanıta bakarsın. Yaranın kavramı sıfırıncı bölüm cümle on beş, uygulama kartı on altı nokta iki.",
      },
      {
        title: "Puanlama = B16.3 otopsisi, hikaye merceğiyle",
        bullets: [
          "El bitince puanlama B16.3'te: GÜN SONUNDA (masada sadece not).",
          "İki soru: kural neydi + uydum mu. Bu bölüm 'kanıt mı hikaye mi'yi ekler.",
          "Doğru kural + kötü sonuç = İYİ karar — ama yalnız kurala UYDUYSAN.",
          "Hikayeye dayanıp kazanmak = LEAK (sonuç ödüllendirdi, süreç hatalı).",
        ],
        ruleBox: "İYİ karar etiketi yalnız kurala uyduysan geçerli (B16.3) — kendini aklama kapısı değil.",
        narration:
          "El bittiğinde puanlamayı nasıl yaparsın? Yeni bir sistem değil, on altı nokta üç otopsisi. Zamanı kritik: el bittiği an değil, gün bittikten sonra; masada sadece eli not al. İki soru sorarsın: karar anında bildiklerimle kitaptaki kural neydi, ve o kurala uydum mu. Bu bölüm o otopsiye tek bir mercek ekler: kararım kanıta mı hikayeye mi dayanıyordu? Doğru kural artı kötü sonuç eşittir iyi karar, aralık değişmez; ama dikkat, bu etiket yalnız kurala gerçekten uyduysan geçerlidir. Doğruydu, varyanstı cümlesi kendini aklama kapısına dönüşmesin. Tersi de var: hikayeye dayanıp kazanmak bir leak'tir, çünkü sonuç seni ödüllendirdi ama süreç hataliydi, tekrar edersen yakarsın.",
      },
      {
        title: "En pahalı kararlar + cheat + drill",
        table: { section: "Bölüm 25", sub: "25.6", caption: "Durum → doğru refleks." },
        bullets: [
          "Hikaye-hatası her yerde eşit pahalı değil; FT/ICM'de tek karar çok buy-in.",
          "Enerjini pahalı spota sakla: bubble/FT büyük pot, cover edildiğin call-off (B21).",
          "Ucuz kararda mükemmeli kovalama — rutinle oyna.",
          "Guard: kanıt mı hikaye mi + kurala uydum mu (B16.3).",
        ],
        ruleBox: "Guard: kanıt mı hikaye mi + kurala uydum mu — enerjini pahalı spota sakla.",
        narration:
          "Son slayt: enerjiyi nereye harcayacağın. Bir hikaye-hatası her yerde eşit pahalı değildir. Final table'da ya da ICM baskısında tek bir karar çok buy-in değerindedir; şişmiş potta call-off en pahalı aksiyondur, yirmi bir nokta bir, ve cover edildiğin bluff-catch fold'dur, yirmi bir nokta iki. O yüzden mental enerjini oraya sakla: bubble ve final table'ın büyük potları, cover edildiğin call-off'lar. Ucuz kararlarda, küçük pot, para uzak, mükemmeli kovalama, rutinle oyna ve enerjiyi pahalı spota biriktir. Hepsini iki soruluk guard yönetir: kanıt mı hikaye mi, ve kurala uydum mu. Drill: river'da büyük bet, blöfçü hissediyorsun ama aksiyon dizisi value'ye uyuyor, hangi gerekçe; bad beat yedin eller hızlanıyor telefona sarıldın, sıradaki hero-call'da önce ne yaparsın sonra hangi test; ve gün sonu otopsi, cover ediliyorken hero-call yaptın blöfü yakaladın, yirmi bir nokta iki artı on altı nokta üç merceğiyle nasıl puanlarsın.",
      },
    ],
  },
];

export function moduleById(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}
