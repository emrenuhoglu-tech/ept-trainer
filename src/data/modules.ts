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
];

export function moduleById(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}
