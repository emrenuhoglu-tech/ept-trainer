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
    minutes: 10,
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
      {
        "title": "EK: Tek per bluff-catcher — rolü izler, pozisyonu değil",
        "bullets": [
          "'OOP 3-bet potunda tek per bluff-catcher' preflop aralık-inşa kuralıdır; postflop'ta sınır ROLÜ izler.",
          "Capped taraf: sığda (SPR ~1–2, kalibre et) top pair call-off'a iner, jam'e katlamaz; derinde bluff-catcher.",
          "Şişiren 3-bettor'ın overpair/TPTK'sı sığda (30–45bb, SPR ≲2, orta-bağlantılı) jam sınıfı; underpair değil.",
          "SPR ~3–4+: flop-jam çoğunlukla yok; kuru/düşük (8-6-2) overpair stack-off, bağlantılı broadway'de yeniden bak."
        ],
        "ruleBox": "Lisans SPR'ye VE dokuya bağlıdır: derinde, nut avantajının eridiği dokuda tek perle dokudan bağımsız stack-off = kök hata.",
        "narration": "Pozisyon dışı üç-bet potunda tek per tanım gereği bluff-catcher'dır cümlesi preflop aralık-inşa kuralıdır; pozisyon dışı üç-bet aralığını sıkı tutmanın gerekçesi. Postflop'ta sınır pozisyonu değil rolü izler. Capped, call eden taraf için bu sınır derinde geçerlidir; pot sığlaştıkça onun üst peri de çoğunlukla call-off sınıfına iner, potu yine başlatmaz ama jam'e katlamaz; eşiği kendi solver'ında kalibre et. Aralık ve nut avantajıyla potu şişiren üç-bettor'ın overpair'i ya da iyi kicker'lı üst peri, sığda, otuz ile kırk beş big blind bandında, orta-bağlantılı dokuda çoğunlukla jam sınıfıdır; underpair girmez. Oran üç-dörde çıkınca flop-jam sınıfı çoğunlukla yoktur ama doku konuşur: kuru ya da düşük dokuda, sekiz-altı-iki gibi, overpair çoğunlukla hâlâ stack-off elidir; bağlantılı iki-broadway dokuda nut avantajı erir, overpair bet artı yeniden değerlendirme ya da pot kontrol sınıfına iner; eşiği kendi solver'ında kalibre et. Kök hata bozulmaz ve şişirenindir: derinde, nut avantajının eridiği dokuda tek perle dokudan bağımsız stack-off eden üç-bettor kök hatayı yapar."
      }
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
    minutes: 10,
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
      {
        "title": "EK: SB satırı BvB'de raise aralığıdır — zayıf Ax/Kx limp",
        "bullets": [
          "5.1 SB satırı raise-or-fold okunur; BvB'de tablonun altındaki zayıf offsuit Ax/Kx fold değil LİMP malzemesi.",
          "~25bb: blocker limp-jam yaşar; ~30bb: limp-jam aşırı overbet → limp-call'a döner (küçük limp-3-bet YOK).",
          "Limp-3-bet = commit (jam ya da fold edilmeyecek boy); limp-call, 'flat yok'un BvB-limp'e özgü istisnası.",
          "Küçük çiftler kısmen limp'e kayar; premium çoğunlukla raise'de. Satır = SB'nin RAISE aralığı, tüm oyunu değil."
        ],
        "ruleBox": "SB tablosu raise aralığıdır; BvB'de altında kalanlar limp malzemesi — limp-3-bet commit'tir, fold edilebilir küçük boy yok.",
        "narration": "Small blind satırını raise ya da fold diye okumaya devam et; ama blind'e karşı blind düğümünde tablonun altında kalan ellere fold yazma. Tekerlek kicker'lı en zayıf offsuit as'lar ve alt-orta offsuit krallar bu düğümde limp malzemesidir. Bandın hangi ucundaysan içerik değişir: yirmi beş big blind civarında blocker'lı limp-jam yaşar; otuz big blind'e yaklaştıkça limp-jam potun kat kat üstünde bir overbet olur ve malzeme limp-call'a döner. Limp-jam kabaca yirmi beş big blind ve altına aittir; sınırı kendi solver'ında kalibre et. Limp-üç-bet bu bantta da commit'tir: ya jam, ya fold edilmeyecek boy, arkada kalan pot kadar. Fold edilebilir küçük limp-üç-bet yoktur; üç-bet eşittir jam doktrini limp düğümünde de geçerli. Limp-call ise flat yok kuralının bu düğüme özgü istisnasıdır: aksiyonu kapatan son karar ve küçük iso'ya fiyat; açılışa karşı flat yasağı aynen durur. Küçük çiftler satırda raise görünür ama bu derinlikte kısmen limp'e kayar; premium çoğunlukla raise'de kalır. Kural: satırı small blind'in raise aralığı olarak oku, tüm oyunu olarak değil."
      },
      {
        "title": "EK: SB'nin büyük non-all-in 3-bet'ine BTN'den 4-bet jam",
        "bullets": [
          "~30bb'de SB'nin doğru 3-bet'i çoğunlukla ALL-IN; havuz jam'lemesi gereken elleri büyük non-all-in 3-bet'ler.",
          "Aralık polar, çoğunlukla TEPESİZ: AK/orta-yüksek çift + offsuit broadway/suited Kx; AA-KK jam'de ya da küçük.",
          "Kâr üç kalem: blöf yarısının fold'u + ölü para + tepesiz aralığa karşı canlı equity; K/Q canlı overcard.",
          "Geniş 4-bet jam: suited Ax/Kx, çiftler, broadway'ler — SB'de AA/KK tam frekansta görünce genişlemeyi geri al."
        ],
        "ruleBox": "SB'nin büyük non-all-in 3-bet'i tepesizse BTN'den 4-bet jam aralığını geniş kur; 3-bet küçük ya da jam'se 5.3'e dön.",
        "visuals": [
          {
            "kind": "hand",
            "cards": "Kh 9h",
            "label": "Suited Kx: canlı overcard + bloker → jam adayı"
          }
        ],
        "narration": "Otuz big blind bandında small blind'in doğru üç-bet'i çoğunlukla all-in'dir; büyük non-all-in üç-bet dengede seyrektir. Havuz tersini yapar: jam'lemesi gereken elleri büyük üç-bet'ler. O aralık polar ve çoğunlukla tepesizdir; value tarafı as-kral ve orta-yüksek çiftler, blöf tarafı offsuit broadway'ler ve suited krallar; en büyük çiftler ya jam'lenmiş ya küçük boyda gitmiştir. Boy büyüdükçe ölü para artar ama small blind de bağlanır; fold equity küçük üç-bet'e göre azalır ama sıfırlanmaz. Kâr üç kalemin toplamıdır: blöf yarısının fold'u, ölü para ve ödendiğinde tepesiz aralığa karşı canlı equity; tepesizlik iddiası şartlı, gözlemle. Aralıkta büyük çift azsa kral orta çiftlere canlı ama as-krala domine, kız iki tarafa da canlıdır; suited krallar ve kızlar beklenenden iyi jam'ler. Kural: button'dan dört-bet jam aralığını geniş kur; suited as'lar ve krallar, çiftler, broadway'ler; sınırı kendi solver'ında kalibre et. Üç-bet küçük boysa standart dört-bet-jam ile call karışımına, all-in'se jam'e karşı call hattına dön. Havuz exploitidir: büyük üç-bet'te en büyük çiftleri tam frekansla gördüğün an genişlemeyi geri al."
      }
    ],
  },
  {
    id: "M8",
    title: "Turn'de draw",
    chapter: "Bölüm 6",
    minutes: 5,
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
          sub: "6.2",
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
      {
        "title": "EK: Gutshot → check kuralı iki polar düğümde askıda",
        "bullets": [
          "6.2 'gutshot → check' genel turn-draw kuralıdır: fold equity belirsizken draw tek başına yakıt değil.",
          "Askı 1 — efektif-nut overbet: overcard'lı gutshot TPTK/overpair'i bloklar (iki-per'i değil), per katlatır.",
          "Askı 2 — akışkan turn: semi-blöf jam; zayıf per/overcard katlanır, domine draw ancak yüksek SPR'de.",
          "Şart: düğüm gerçekten polar + rakibin fold katmanı geniş. Station'a / orta boylu bet düğümünde gutshot check."
        ],
        "ruleBox": "İlk düğümde gutshot'un işi devam sınıfını bloklamak, ikincisinde zayıf eli katlatıp equity reddetmek — kenti tamamlamak değil.",
        "visuals": [
          {
            "kind": "hand",
            "cards": "Qs Jd",
            "label": "Overcard'lı gutshot — polar düğümün doğal blöfü"
          },
          {
            "kind": "board",
            "cards": "9h 8c 3d",
            "label": "Rakibin top-pair/overpair'ini bloklar, iki-per'i değil"
          }
        ],
        "narration": "Altıncı bölümün gutshot ise check kuralı genel turn-draw kararı içindir: fold equity belirsizken bir draw tek başına yakıt değildir. Bu kural iki düğümde askıya alınır: ilkinde gutshot'un işi rakibin devam sınıfını bloklamak, ikincisinde zayıf per, overcard ve zayıf draw'ları katlatarak fold equity taşımak; ikisinde de kentini tamamlamak değil. Birinci düğüm efektif-nut overbet'i: overcard taşıyan gutshot, rakibin iyi kicker'lı üst perini ve overpair'ini bloklar; iki-peri bloklamaz, onun için board kartı tutman gerekir. Per'lerini ve zayıf draw'larını katlatır; polar overbet aralığının doğal blöfüdür. İkinci düğüm check-raise sonrası akışkan turn: burada gutshot semi-blöf jam adayıdır; zayıf per, overcard ve zayıf draw'ları katlatıp equity reddeder, seni domine eden draw'ı ancak stack pot oranı yeterince yüksekken katlatır. İki şart var: düğüm gerçekten polar olmalı ve rakibin fold'a giden katmanı geniş olmalı; kendi solver'ında kalibre et. Station'a karşı ve orta boylu bet düğümünde eski kural aynen durur: gutshot check."
      }
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
          sub: "8.2",
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
    minutes: 11,
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
      {
        "title": "EK: SPR 1–4 satırı capped taraf içindir; commit ≠ jam",
        "bullets": [
          "'SPR 1–4' satırı capped taraf içindir; sığda (SPR ~1–2, kalibre et) onun top pair'i de call-off'a iner.",
          "3-bettor (aralık+nut avantajı): SPR ≲2'de top pair/overpair commit sınıfı; 100bb'de iki sokak + river kontrol.",
          "Turn SPR≈1'de value ile JAM değil yarı–üçte-iki pot: alt/orta per, gutshot, overcard jam'e snap katlanır.",
          "Korkutucu turn'de de varsayılan yarı-stack; jam yalnız draw-AĞIRLIKLI aralığa oran vermemek için, sınırda."
        ],
        "ruleBox": "Commit paranın gireceğini söyler, hangi sokakta hangi boyla girdiğini değil — turn'de yarı-stack bet, jam değil.",
        "narration": "Şişmiş pot tablosunun bir ile dört arası satırı, tek per bluff-catcher'dır, potu şişirilen ve capped kalan taraf içindir; ama derindeyken. Pot sığlaştıkça capped tarafın üst peri de çoğunlukla call-off sınıfına iner: potu başlatmaz ama jam'e katlamaz. İnce nokta: commit, paranın eninde sonunda gireceğini söyler; hangi sokakta hangi boyla girdiğini söylemez. Turn'de oran bir civarındayken overpair'le zaten committed'im diye jam'lemek çoğunlukla hatadır; varsayılan yarı-stack, jam sınırda istisnadır. Flop bet'ine call eden aralık alt per ve zayıf orta perle doludur; jam'e bu eller anında katlanır. Potun yarısı ile üçte ikisi arası bet o sınıfı kayıtsızlığa iter. Koruma kaybı sınırdadır: yarı-pot draw'a daha iyi direkt oran verir ama implied odds'u zaten küçüktür, geride yalnız yarı-stack kaldı; flush draw çoğunlukla kayıtsız kalır. Korkutucu turn'de de varsayılan yarı-stack. Jam tek gerekçeyle: rakibin devam aralığı draw-ağırlıklı ve yarı-pot ona direkt oran verecek, tipik olarak turn birden fazla canlı draw açınca; azınlık, sınırda, kendi solver'ında kalibre et."
      },
      {
        "title": "EK: Turn overbet — efektif nut, blöfü boşluk seçer",
        "bullets": [
          "Kaldıraç gerçek nut değil EFEKTİF nut: rakibin 3-bet/check-raise'e gitmiş sınıfının boşluğunu dolduran el.",
          "Overbet kartı 3-bet'e giden sınıfı tamamlar, capped'e eklemez: K-8-x'e A (AA/AK sende, BB'de top pair).",
          "Kapatan kart (K-Q-x'e A/J/T, flush kartı, 9-9-4'e 4): frekans VE boy düşer; kalan bet MERGED.",
          "Blöfü boşluk seçer: turned alt-per, overcard'lı gutshot; orta-kuvvet el ne katlatır ne önde → küçük/check."
        ],
        "ruleBox": "Overbet kartı rakibin 3-bet'e gitmiş sınıfını tamamlayıp capped sınıfına hiçbir şey eklemeyen karttır; boy küçüldükçe aralık polar değil merged.",
        "visuals": [
          {
            "kind": "board",
            "cards": "Kd 8s 3h Ah",
            "label": "K-8-x'e A: AA/AK sende, BB'de A yalnız top pair → overbet"
          },
          {
            "kind": "board",
            "cards": "Kd Qs 6h Ah",
            "label": "K-Q-x'e A: KAPATAN kart — BB'nin JT'si kent → check/merged"
          }
        ],
        "narration": "Bu ek turn kartı mekaniğini verir. Overbet'in kaldıracı gerçek nut değil efektif nut'tur: rakibin aralığında seni yenen elin bulunmadığı el. Tek kural: overbet kartı, rakipte üç-bet'e ya da check-raise'e gitmiş sınıfı tamamlayan, kalan capped sınıfına bir şey eklemeyen karttır. Yüksek artı düşük kopuk flop'a kent tamamlamayan ikinci yüksek kart, kral-sekiz-iks'e as: as-as ve as-kral sende, big blind'de as yalnız üst per. Negatifi kapatan karttır: rakibin capped olmayan sınıfını tamamlayan kart; iki yüksek kartlı flop'a üçüncü broadway, kral-kız-iks'e as bile; flush kartı; eşleşmiş flop'ta düşük kartın eşleşmesi, dokuz-dokuz-dört'e dört, çünkü check-call'daki dörtler full olur. Kapatan kartta frekansı ve boyu düşür, çok check et; bahis kalırsa aralık merged olur: nut artı hâlâ önde olan set, iki-per, güçlü üst per artı az blöfle küçük ya da orta boy; boy küçüldükçe merged. Blöfü nut değil boşluk seçer: orta-kuvvet el ne katlatır ne öndedir, küçük boya ya da check'e; blöf adayı turned alt-per ve overcard'lı gutshot; kendi solver'ında kalibre et."
      },
      {
        "title": "EK: Kart-eşleme blöfü + katman-hedefli boy flop'ta",
        "bullets": [
          "Saldırı yüzü = kart-eşleme: overbet blöfünü rakibin premium bluff-catcher'ının taşıdığı kartla at.",
          "Flush GELEN mono'da alt cep + flush kartı doğal overbet blöfü; kaçan flush'ta flush kartlı blöf en SONDA.",
          "3-bet potu flop'unda da önce 'hangi sınıfı katlatmak istiyorum', sonra 'o sınıf hangi boyda kayıtsız'.",
          "9-7-7 (trips olası): orta katman ~yarım potta kayıtsız (kalibre et); A-J-J: küçük boya zaten katlanır."
        ],
        "ruleBox": "Saldırıda bloker kart-eşlemedir, boyda hedef katmandır: kartı rakibin call kombosundan, boyu katlatmak istediğin sınıftan seç.",
        "visuals": [
          {
            "kind": "board",
            "cards": "9s 7h 7d",
            "label": "Caller'da trips olası — orta katman yarım potta kayıtsız"
          }
        ],
        "narration": "Bloker mekaniğinin savunma yüzünü biliyorsun: rakibin blöfleri senin call aralığını bloklar. Aynı mekanik saldırıda kart-eşlemedir. Overbet blöfünü rakibin premium bluff-catcher'ının taşıdığı kartla at; o kartı tutmak rakibin eşleşen call kombinasyonlarını azaltır, kalan aralığın katlanma payını çoğunlukla yükseltir. Flush gelen tek renkli board'da alt cep artı flush kartı bu yüzden doğal overbet blöfüdür; flush kaçtığında ise flush kartı taşıyan blöfler listenin sonundadır, çünkü rakibin katlanacak kaçmış draw'larını bloklar; bloklamayan aday varsa önce onu seç. İkinci ek boy hakkında. Boy, rakip aralığının hangi katmanını kayıtsızlığa itmek istediğini seçer kuralı üç-bet potunun flop'unda da geçerlidir. Sıra hep aynı: önce hangi sınıfı katlatmak istiyorum, sonra o sınıf hangi boyda kayıtsız. Caller'da trips'in olası olduğu dokuz-yedi-yedi tipi eşleşmiş board'da caller'ın orta katmanı küçük bete çoğunlukla call eder, yarım pot civarında kayıtsızlığa yaklaşır. Yüksek tek kartı senin aralığında olan as-vale-vale tipi board'da ise orta katman küçük boya zaten katlanır, büyümene gerek yok. Eşiği kendi solver'ında kalibre et."
      }
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
      {
        "title": "EK: Kısa-orta BB'nin FT altını — soğuk 4-bet jam penceresi",
        "bullets": [
          "'Açan var, 3-bet var, kısayım → fold' refleksi bu üçlüde para bırakır.",
          "Üç bacak: açıcı orta stack, ICM altında (tepesiz) · 3-bet'çi cover eden büyük stack, polar · sen kısa-orta.",
          "Jam'inle 3-bet'çi blöflerini atar, açıcı sandviçte katlanır; bir kademe uzun stack'te pencere kapanır.",
          "Malzeme: suited Ax/Kx, çiftler, broadway. Premium open-jam görülmediyse suited Ax/Kx + QQ+/AK kalır."
        ],
        "ruleBox": "Dengeden sapmadır: tetikleyici iki gözlem — büyük stack aynı orta stack'e üst üste 3-bet VE orta stack premium'unu open-jam'liyor.",
        "narration": "Final masasında kısa-orta stack'le big blind'de soğuk dört-bet jam penceresi vardır. Pencere üç bacaklıdır. Birincisi: açıcı orta stack ve ICM baskısı altında; en güçlü ellerini büyük stack'in üç-bet'ine karşı zaten open-jam'liyor, açılış aralığı tepesiz. İkincisi: üç-bet'çi onu cover eden büyük stack, polar. Üçüncüsü: sen kısa-ortasın; ölü para stack'ine göre büyük, ama üç-bet'çinin nasılsa ucuz diye blöfle ödeyemeyeceği kadar uzunsun. Jam'inle üç-bet'çi blöflerini atar, açıcı neredeyse hiç ödemez: tepesi zaten jam'e gitti, kalanı sandviçte katlanır. Malzeme suited as'lar ve krallar, çiftler, güçlü broadway'ler; üç-bet'çi küçük ya da lineerse ya da çok kısaysan pencere yok. Bu dengeden sapmadır ve tetikleyicisi iki gözlemdir: büyük stack aynı orta stack'e üst üste üç-bet ediyor ve orta stack premium'larını open-jam'liyor. İkinci gözlem eksikse açıcı büyük çiftleri ve as-kralı hâlâ raise'liyor olabilir ve soğuk jam'i öder; o zaman malzemeyi suited as ve kral blokerlerine indir, küçük ve orta çiftleri ve broadway'leri düş; büyük çiftler ve as-kral zaten value, jam'de kalır. Eşikleri kendi solver'ında kalibre et."
      }
    ],
  },
  {
    id: "M12",
    title: "Multiway pot doktrini",
    chapter: "Bölüm 13 ★",
    minutes: 3,
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
    minutes: 6,
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
      {
        "title": "EK: 40bb squeeze-jam — bloker HANGİ aralığı kesiyor",
        "bullets": [
          "A/K bloker ödeyen aralığı (AA/AK/AQ/KK) inceltir → fold equity yükselir; ödenince suited Ax canlı.",
          "J/T bloker zaten katlanan elleri (JTs/KJs) siler → ödeyen payı büyür, fold equity düşer, AK/JJ+ domine eder.",
          "Test: 'kartım rakibin CALL aralığından mı FOLD aralığından mı kombo siliyor?' Call'dan siliyorsa jam.",
          "40bb'de squeezer geniş öder; TT–JJ coinflip ama jam çoğunlukla +EV: blöf yarısı fold + ölü para (sınırda)."
        ],
        "ruleBox": "Aynı As iki yöne çeker: suited düşük Ax jam, offsuit AJ sınırda (A iter, J frenler) — bloker rakibin CALL aralığından kombo silmeli.",
        "visuals": [
          {
            "kind": "hand",
            "cards": "As 5s",
            "label": "Call aralığından kombo siler → jam"
          },
          {
            "kind": "hand",
            "cards": "Kh Jd",
            "label": "Fold aralığından siler → jam değil"
          }
        ],
        "narration": "Squeeze-jam'in değeri iki kaynaktan gelir: fold ettirilen eller ve ödenince kalan equity. As ve kral blokeri ödeyen aralığı inceltir, fold equity yükselir, ödenince suited as'ın canlı kalır. Vale ve onlu blokeri ise zaten katlanacak suited broadway'leri siler; ödeyen payı büyür, fold equity düşer, ödenince domine edilirsin. Test: kartım rakibin call aralığından mı, fold aralığından mı kombo siliyor; call'dan siliyorsa jam. Açıcı olarak polar squeeze'e karşı: kırk big blind'de squeezer koyduğu paraya göre jam'e iyi fiyat alır ve fiyattan geniş öder, dokuzlu çift üstü, as-kız, suited as-vale tipi; o ödeyen aralığa karşı onlu ve vale çiftleri favori değildir, kabaca coinflip; jam'i çoğunlukla artı değer yapan ödenince önde olmak değil, polar squeeze'in blöf yarısının fold'u ve potta biriken ölü paradır; sınırda. Yalnız senden iyiler öder cümlesi yüz big blind mantığıdır, bu banda taşıma. Call daha çok sekizli ve dokuzlu çiftler için, squeeze blind'lardan geldiyse ve arkada kapaklı sandviç caller varsa; kendi solver'ında kalibre et."
      },
      {
        "title": "EK: Köprü bandında 3-bet'in postflop tehdidi",
        "bullets": [
          "40bb 3-bet potunda flop SPR ≲2: flop call fiilen stack-off; flop bet + turn jam çekilişi kayıtsız bırakır.",
          "100bb'de tehdit kalkmaz, gecikir: turn jam overbet olur, caller çekilişini flop'ta commit olmadan taşır.",
          "J-T-x: derinlikle boy küçülür (kalibre et); üç-broadway'de caller'ın iki-per/düz payı boyu hep küçük tutar.",
          "3-bet edeceğin el postflop'ta jam/check ağacını taşıyabilmeli."
        ],
        "ruleBox": "Köprü bandında 3-bet preflop'ta bitmez — commit'e yakın SPR postflop tehdidi flop'a taşır; eli o ağaca göre seç.",
        "narration": "Kırk ile yetmiş big blind arasındaki köprü bandında üç-bet'in commit'e yaklaşması preflop'ta kalmaz. Kırk big blind civarında üç-bet potunun flop stack pot oranı iki civarında ya da altındadır; flop'ta call etmek çoğunlukla fiilen stack-off'tur ve flop bet artı turn jam tehdidi caller'ın çekilişlerini kayıtsız bırakabilir: draw'ıyla devam etse de flop'ta commit olmadan taşıyamaz. Yüz big blind'de bu tehdit ortadan kalkmaz, gecikir. Turn jam'i bir overbet'e döner, çünkü turn'de oran hâlâ birin üstündedir; caller çekilişini flop'ta bağlanmadan turn'e taşıyabilir. Aynı dinamik vale-onlu-iks tipi yüksek board'da kırk big blind'de büyük boy, yüz big blind'de pot boyu verir; üç-broadway board'da ise caller'ın yoğun iki-per ve kent payı, yani ince nut avantajı, boyu her derinlikte küçüğe iter; boyları kendi solver'ında kalibre et. Pratik sonuç preflop'ta başlar: üç-bet edeceğin el postflop'ta jam ya da check ağacını taşıyabilmeli. Flop'ta ne jam'e ne check'e yakışan bir elle bu bantta üç-bet, kendi kendine commit tuzağı kurmaktır."
      }
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
    minutes: 4,
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
    minutes: 10,
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
      {
        "title": "EK: 'SB raise-only' bağlam şartıdır, BvB doktrini değil",
        "bullets": [
          "17.3 SB satırı (%35 raise-only, limp yok, 3x) ~50bb online sahaya özel.",
          "BB pasif iso yapıyorsa tuzak payı düşer AMA marjinal elin ucuz-flop değeri artar → raise-only haklı çıkmaz.",
          "BB sert iso/3-bet'liyorsa zayıf limp kesilir ama premium'un limp-reraise payı büyür → raise-only EV bırakır.",
          "Raise-only ancak BB raise'e belirgin over-fold ediyorsa ya da limp ağacını yönetemiyorsan kabul edilebilir."
        ],
        "ruleBox": "Raise-only iki BB rejiminde de EV bırakır; yalnız BB raise'e over-fold ediyorsa ya da limp ağacını yönetemiyorsan sadeleştirme olarak tut.",
        "narration": "Bu turnuvanın small blind satırı raise-only der: limp yok, üç kat aç. Bunu evrensel blind'e karşı blind doktrini sanma; yaklaşık elli big blind'lik online sahaya özel bir bağlam şartıdır. Big blind limp'e seyrek ya da pasif izolasyon yapıyorsa limp-reraise tuzağının payı düşer; ama aynı anda marjinal ellerin ucuz flop görme değeri artar. Bu rejim raise-only'yi haklı çıkarmaz. Big blind limp'e yüksek oranda iso ya da üç-bet yapıyorsa zayıf limp'ler kesilir, ama premium'un limp-reraise payı büyür; o sahada da raise-only para bırakır. Raise-only ancak iki koşulda kabul edilebilir bir sadeleştirmedir: big blind raise'e belirgin over-fold ediyorsa ya da oyuncu limp ağacını yönetemiyorsa; sınırı kendi solver'ında kalibre et. Genel blind'e karşı blind'de aynı derinlik derin ile orta katmanın sınırındadır ve small blind'in limp payı hangi motorun çalıştığına göre değişir: stack pot oranı kapanı, polarize iso; premium'un limp-reraise dilimi dahil; jam motoru kısa katmana aittir. Kural: hangi rejimin çalıştığını tablo etiketine değil big blind'in iso ve üç-bet davranışına göre seç."
      }
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
    minutes: 6,
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
    minutes: 6,
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
    minutes: 10,
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
      {
        "title": "EK: 3-bet potu — caller over-fold, koruma gerçek neden",
        "bullets": [
          "'Station atmaz' tek-raise kuralı; 3-bet potunda dar caller ıskalayınca çoğunlukla fazla atar (havuz sapması).",
          "Gerekçe aralık avantajı + düşük SPR: küçük bet bile stack-off baskısı kurar, caller'ın raise'i commit olur.",
          "Koruma paradoksu YÜKSEK SPR'de (commit uzak); sığ 3-bet potunda sınırı SPR çizer, nut avantajı eksen değil.",
          "Kırılgan overpair (77–JJ, kopuk): koruma GERÇEK neden; alt çift boyu, aralık avantajı frekansı seçer."
        ],
        "ruleBox": "3-bet potunda koruma 'erimeden önce alınan value'dur; sınırı SPR çizer, boyu alt-çift pusulası, frekansı aralık avantajı seçer.",
        "narration": "Station atmaz cümlesi tek-raise'li potun kuralıdır. Üç-bet potunda teori küçük bete karşı geniş savunma ister, çünkü fiyat ucuzdur; ama sahada caller'ın dar ve orta-güçte aralığı flop'u ıskalayınca çoğunlukla fazla atar. Popülasyon sapmasıdır, teori değil. Havayla c-bet kısıtlamasının üç-bet potunda gevşemesinin teorik gerekçesi ise aralık avantajı artı düşük stack pot oranıdır: düşük oranda küçük bet bile stack-off baskısı kurar ve caller'ın raise'le cezalandırması commit anlamına geldiği için zorlaşır. İkinci ek koruma hakkında. Koruma paradoksu yüksek oranda, yani tek-raise'li potta, commit uzakken geçerlidir; nut avantajı bu sınırın ekseni değildir, sığ üç-bet potunda sınırı stack pot oranı çizer. Üç-bettor'ın aralık avantajlı ama nut'u çoğunlukla caller'da olan kırılgan overpair kütlesinde, düşük kopuk board'da yedili ile vale arası çiftlerde, koruma-value gerçek nedendir: sığ oranda erimeden önce paranın girmesi; adı erimeden önce alınan value'dur. Alt çiftler boyun tavanını koyar, tabanını değil: alt çift bet istiyorsa lineer küçük, istemiyorsa polar büyük ve alt çift check; pusula boyu seçer, frekansı aralık avantajı seçer; kendi solver'ında kalibre et."
      },
      {
        "title": "EK: 3-bet potunda A-high, monotone ve OOP range-bet",
        "bullets": [
          "A-high üç kova: kopuk → tam-aralık küçük · A+broadway → alt-çift pusulası · wheel-bağlantılı → check artar.",
          "Mono: A+iki düşük → check · A-yok kopuk orta → küçük · T-9-8 (nut caller'da), K-high (non-nut yoğun) → check.",
          "'OOP range-bet TUZAK' tek-raise için; 3-bet potunda OOP 3-bettor kopuk A-high'da range-bet = baseline.",
          "Ayna: düşük bağlantılı (7-6-5) board'da OOP 3-bettor çoğunlukla check; IP caller nut avantajlı → stab artar."
        ],
        "ruleBox": "Mono kovaları NUT-flush sahipliğiyle bölünür; bağlantı ve caller'ın flush yoğunluğu (non-nut dahil) arttıkça check payı büyür.",
        "visuals": [
          {
            "kind": "board",
            "cards": "Ah 7h 3h",
            "label": "A + iki düşük mono → check ağırlıklı"
          },
          {
            "kind": "board",
            "cards": "Th 9h 8h",
            "label": "Nut-flush payı caller'da → check ağırlıklı"
          }
        ],
        "narration": "Flop dokusu tablosu tek-raise'li pot içindir; üç-bet potunda iki satır açılır. Birincisi as-yüksek, tek kova değil: kopuk as-yüksek board'da tam-aralık küçük bet; as artı ikinci broadway'de alt-çift pusulası büyük ile küçük arasında karar verir; tekerlek-bağlantılı as-yüksek'te derinde check payı artar. İkincisi tek renkli board, ayırıcı nut-flush sahipliği. As artı iki düşük tek renkli board'da check ağırlıklı. As'sız kopuk orta tek renkli board'da üç-bettor'da suited as nut-flush ve draw payı vardır, çoğunlukla küçük. Bağlantılı orta tek renkli board'da nut kent ve flush payı caller'a kayar: check ağırlıklı. Kral-yüksek tek renkli board'da nut-flush payı sende kalır ama caller'ın non-nut flush yoğunluğu ve overpair'in değer kaybı yine check ağırlıklı tutar. Pozisyon dışı üç-bettor kopuk as-yüksek'te tam-aralık küçük bet atar, tuzak değil baseline; as'sız kopuk orta tek renkli board'da çoğunlukla küçük, bağlantı ve caller'ın non-nut dahil flush yoğunluğu arttıkça check payı büyür. Ayna yüzü: düşük bağlantılı board'da pozisyon dışı üç-bettor çoğunlukla check eder, pozisyondaki caller nut avantajlı; kendi solver'ında kalibre et."
      }
    ],
  },
  {
    id: "M23",
    title: "İnisiyatif hatları: donk, probe, stab, float, blocker",
    chapter: "Bölüm 19 ★",
    minutes: 12,
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
      {
        "title": "EK: Donk ve stab — sığ ve 3-bet-pot istisnaları",
        "bullets": [
          "≤15bb BB, yüksek KURU board (K-9-4): jam değil KÜÇÜK donk — IP'nin check-back katmanı K-x'ine öder.",
          "≤15bb düşük/orta board: lead çoğunlukla JAM ya da CHECK, küçük lead sınırda (bkz. M35). 30bb+'da 19.1 aynen.",
          "Stab 1: IP caller, düşük board, 3-bettor check → küçük, ~tam-aralık; 9-8-2 seçici, 9-5-2 serbest.",
          "Stab 2: K-Q-x bağlantılı board'da OOP check'e KÜÇÜK stab verimsiz → ~yarım pot + düşük Ax blöfleri."
        ],
        "ruleBox": "Sığda yüksek kuru board'da donk var jam yok; 3-bet potunda stab boyu board'a göre: düşük board küçük-geniş, K-Q-x'te yarım pot.",
        "visuals": [
          {
            "kind": "board",
            "cards": "Kh 9d 4c",
            "label": "Sığ BB: küçük donk, jam değil"
          }
        ],
        "narration": "Donk tablosunun varsayılanı otuz big blind ve üstü içindir. On beş big blind ve altında, rakip daha derin açmışken big blind'de iki şey değişir. Yüksek kartlı kuru board'da, mesela kral-dokuz-dört rainbow, üst perin kırılgan değildir; koruma değil value ister. Sığda rakip ikinci per ve as-yüksek ile check-back ağırlıklıysa o katman kral'ına öder; jam onu katlatır, küçük-orta lead içeride tutar. Düşük ve orta board'da ise lead çoğunlukla jam ya da check. Stab tablosuna da üç-bet-pot satırı geliyor. Bir: caller pozisyonda, düşük board, üç-bettor check etti; küçük stab neredeyse tam-aralık, çünkü üç-bettor'ın broadway'leri hiçtir. Sınır sorusu, üç-bettor'ın broadway kesimi düz çekilişi alıyor mu: iki üst kartı ardışık dokuz-sekiz-iki gibi board'da vale-onlu ve kız-vale çekiliş alır, evetse seçici; dokuz-beş-iki gibi gerçek kopuksa serbest. İki: kral-kız-iks tipi bağlantılı yüksek board'da pozisyon dışı check'e küçük stab verimsizdir; cep çiftleri ve gutshot'lı broadway'ler katlanmaz. Orada yarım pot civarı ve düşük as blöfleri; kendi solver'ında kalibre et."
      },
      {
        "title": "EK: Turn lead — avantajın türü boyu seçer",
        "bullets": [
          "Flop'ta bet-call SONRASI turn lead: equity avantajı ile nut avantajı farklı boy ister.",
          "Orta-düşük turn BB'ye per/draw ekler → equity sana; nut ONDA: overpair/set duruyor, tepen kısmen raise'de.",
          "ÇOK küçük lead, GENİŞ aralık (orta per, zayıf top-pair, draw); büyük bete havası katlanır, ödeyen geçer.",
          "Lead aralığı = flop'ta raise'lemediklerin; çok raise'ledinse daralır; turn'de NUT'a dönen sınıf → büyük-dar."
        ],
        "ruleBox": "Equity avantajı küçük-geniş lead, nut avantajı büyük-dar lead ister; ikisi de yoksa check.",
        "visuals": [
          {
            "kind": "board",
            "cards": "Th 8c 3d 7s",
            "label": "Orta-düşük turn: BB aralığına per/draw ekler"
          }
        ],
        "narration": "Probe'dan farkı şu: flop'ta rakip bet attı, sen call ettin, turn'de pozisyon dışında lead düşünüyorsun. Equity avantajı ile nut avantajı farklı boy ister. Flop'ta büyük bete call ettin; aralığının altı katlandı, rakip hâlâ blöflerini taşıyor. Orta-düşük turn big blind aralığının yoğunlaştığı bölgeye düşer ve sana yeni per ya da draw ekler, onun overcard-blöflerine değil; equity sana kayar. Ama nut onda: overpair'leri ve set'leri bozulmadan duruyor, senin en güçlü ellerinin bir kısmı flop'ta check-raise'e gitti; aralığın kısmen kapaklı, onunki değil. Büyük bet yanlıştır: havası katlanır, ödeyen seni geçer. Araç çok küçük lead ve geniş aralık: orta per, zayıf üst per, iyileşen draw. Lead aralığın flop'ta raise'lemediklerindir. Büyük flop bet'e call-ağırlıklı savundun, aralığın bozulmadı, küçük-geniş lead alanı geniş. Küçük flop bet'e çok raise'ledin, aralık elendi, lead daralır. Kalan yer, turn'de nut'a dönen sınıf, tipik olarak alt ya da orta kartın eşleşmesi; orada daha büyük boy, daha dar aralık. İkisi de yoksa check; kendi solver'ında kalibre et."
      }
    ],
  },
  {
    id: "M24",
    title: "Risk Premium: ICM'in sayısı",
    chapter: "Bölüm 20 ★",
    minutes: 6,
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
        "title": "EK: PKO ≠ ICM — kapsananın indirimi fold equity kaybı",
        "bullets": [
          "21.2/21.7 satırları ICM içindir; PKO'da kapsananın pozitif risk primi yoktur (ICM bileşeni ayrı).",
          "Kapsananı 'pasif' yapan bust korkusu değil, karşısındaki cover edenin kelle için geniş ödemesi.",
          "Geniş ödeyene blöf ölür, value yaşar: ince value daha çok ödenir; value aralığı iki yönde ~aynı, blöf az.",
          "Kapsanınca blöf/barrel kademesini indir, value'yu indirme; semi-blöfü fold equity'siz, equity'yle fiyatla."
        ],
        "ruleBox": "'Cover ediliyorum → thin value check-back' ICM kuralıdır, kelle kuralı değil; FT'de iki indirimi ayrı hesapla.",
        "narration": "Bu modülün kademe tabloları ICM içindir. PKO'da kapsanınca aynı refleksi, yani ince value'yu check-back edip boyu küçültmeyi uygulamak yanlıştır; PKO'da kapsananın pozitif risk primi yoktur, ICM bileşeni ayrı hesaplanır. Kapsananı pasif yapan şey bust korkusu değil, karşısındaki cover edenin kelle için geniş ödemesidir. Geniş ödeyen rakibe karşı blöf ölür, value yaşar: ince value daha çok ödenir; kapsananın value aralığı iki yönde de kabaca aynıdır, blöfü daha azdır. Kural: kapsanınca blöf ve barrel kademesini indir, value kademesini indirme; semi-blöfleri fold equity beklemeden salt equity'yle fiyatla. Cover ediliyorum, öyleyse ince value'yu check-back ederim cümlesi ICM kuralıdır, kelle kuralı değil. Final masasında ikisi birlikteyse iki indirimi ayrı hesapla: ICM primi ince value'yu keser, kelle indirimi blöfü keser; ikisini tek bir kademe indir'e çevirme. Cover eden tarafın flop'u ve kapsananın pozisyondaki oyunu PKO modülünde; sınırları kendi solver'ında kalibre et."
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
        "title": "EK: Çarpışma etkisi — fold'un gizli EV'si",
        "bullets": [
          "FT/para yakını: 'chipEV'de kârlı → açarım' arkandakilerin BİRBİRİYLE çarpışmasını fiyatlamaz.",
          "Fold EV ≈ P(arkada çarpışma) × P(bust) × basamak değeri; çarpım büyükse marjinal açılış altında kalır.",
          "SAYIYLA ölçeklenir: en yüksek erken pozisyon, BTN'den tek yol SB-BB, SB'den sıfır; harita = savunma genişliği.",
          "Kaçış (~20–25bb): 3-bet'e devam +1 kademe; AK ile fold opsiyonlu RAISE — jam/fold bandında kapı kapalı."
        ],
        "ruleBox": "Üç soru — fold'lasam arkadakiler (geç pozisyonda SB) itiyor mu, ödeyen var mı, basamak stack'ime göre büyük mü — üçü evetse sınır eli AÇMA.",
        "narration": "ICM açık. Chip cinsinden kârlı açılış cümlesi arkadakilerin birbiriyle çarpışma olasılığını fiyatlamaz. En net hâli blind'e karşı blind: fold edersen small blind kısa ya da agresifse big blind'e geniş jam'ler, big blind geniş öder, biri bust olur ve basamak sana yazılır. Fold'un değeri çarpışma ve bust olasılıklarının çarpımı çarpı basamağın değeridir; büyükse marjinal açılışı geçer. Etki arkanda kalan oyuncu sayısı ve profiliyle ölçeklenir: en yüksek erken pozisyondan; button'dan tek yol kalır, doğrudan blind savaşı; small blind'den sıfır, çarpışacak üçüncü yoktur. Kaçış kapısı: çarpışma masasında üç-bet'e devam eşiğini bir kademe yukarı al; orta-kısa bantta, kabaca yirmi ile yirmi beş big blind, raise stack'in küçük bir dilimiyken ve arkanda iki agresif oyuncu varken as-kral tipi elle open-jam yerine fold opsiyonu satın alan raise, biri itip öbürü yeniden ittiğinde katlanıp basamağı alırsın; jam ya da fold bandında bu kapı kapalıdır, as-kralı it ya da at. Eşikleri kendi solver'ında kalibre et."
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
    minutes: 9,
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
        "title": "EK: Havuzun 3-bet açığı — geniş aç, 3-bet'e DAR devam",
        "bullets": [
          "Blind'lar geç açılışa dengeden belirgin az 3-bet eder — eksik hep mix'li kombolar ('düşük frekans = sıfır').",
          "BTN/CO açılışını solver'ın üstüne genişlet: cezalandırmıyor + flop/turn'de overfold ediyor.",
          "3-bet yediğinde aralık nut-ağırlıklı → 4-bet-jam blöfü (A5s) çöker; zayıf suited Kx/Qx ile call da kötü.",
          "Sen 3-bet ederken aynı kısayolu YAPMA: mix'li komboyu sabitle, sıfırlama. Agresif 3-bettor okuması → baseline."
        ],
        "ruleBox": "Solver'ın 3-bet frekansını rakibin de oynadığını varsayma: geniş aç, 3-bet'e dar devam et, 4-bet-jam blöfünü kapat.",
        "narration": "Blind'lar geç pozisyon açılışına dengeden belirgin az üç-bet eder; sığ bantta jam'ler farkı kapatır, derinde açılır. Eksik olan hep mix'li kombolardır; havuz düşük frekans demek sıfır demek kısayolunu kullanır. Solver'ın üç-bet frekansını rakibin de oynadığını varsaymak iki hata üretir: geç pozisyondan solver aralığını açmak ve üç-bet yiyince solver'ın dört-bet-jam blöflerini basmak. Üç sonuç. Bir: button ve cutoff açılışını solver'ın üstüne genişlet; blind'lar cezalandırmıyor, üstüne flop ve turn'de overfold ediyor, sınır eller postflop'ta kazanç toplar. Canlı düzeltmesinin mekanizması budur. İki: üç-bet yediğinde aralık nut-ağırlıklıdır; blokerli suited as ile dört-bet-jam blöfünün fold equity'si çöker, dengeden ağır kaybeder; zayıf suited kral ve kız ile üç-bet'e call da kötüdür. Geniş aç, üç-bet'e dar devam et. Üç: sen üç-bet ederken aynı kısayolu yapma; mix'li komboları solver modülündeki yöntemle sabitle, sıfırlama. Sapma notu: bu havuz ortalamasıdır; agresif üç-bettor okuması varsa baseline'a dön, stake yükseldikçe fark daralır; oranı kendi solver'ında kalibre et."
      },
      {
        "title": "EK: BB'nin iki bant hatası — kısada fazla jam, ortada pasif",
        "bullets": [
          "İlke tek: oynanabilir el CALL eder, equity'yi fold ettirmek isteyen el JAM'ler.",
          "Kısa bant: güçlü suited broadway CALL; alt ucunda ATs/KQs de jam'e kayar, derinleştikçe call (kalibre et).",
          "Zayıf suited Ax/küçük çift JAM; orta bant: jam değil küçük non-all-in 3-bet, orta SC CALL eli.",
          "Fazla jam'leyen BB'nin önünde: fold equity aynı, realizasyon düşer → sınır elleri raise-fold'a göre fiyatla."
        ],
        "ruleBox": "'İyi el = jam' ezberini bırak: kısa bantta call, orta bantta non-all-in 3-bet — jam yalnız equity fold ettirmek isteyen ele.",
        "narration": "Kök hata: iyi el eşittir jam ezberi. İlke: oynanabilir el call eder, fold ettirmek isteyen el jam'ler. Kısa bantta yalnız domine ettiğini katlatan yüksek-kart eller, güçlü suited broadway'ler, çoğunlukla call'ı tercih eder: domine ettiği elleri potta tutar, equity'yi daha çok realize eder. Zayıf suited as'lar ve küçük çiftler ise çoğunlukla jam. Bandın alt ucunda suited as-onlu, kral-kız tipi eller de çoğunlukla jam'e kayar; call tercihi bant derinleştikçe belirginleşir, geçiş noktasını kendi solver'ında kalibre et. Orta bantta jam birkaç big blind'lik pot için tüm stack'i riske atmaktır; doğru agresyon küçük, all-in olmayan üç-bet; orta suited connector call eli, blokerli krallar ve offsuit broadway'ler üç-bet malzemesi. Havuz hipotezi: big blind kısada fazla jam'ler, ortada üç-bet'i bulamaz. Sen kısada call'ı, ortada üç-bet aralığını genişlet. Fazla jam'leyen big blind'in önünde açan olarak fold equity'n değişmez; değişen, pozisyonla flop oynayıp equity realize etme şansının düşmesi ve raise-fold maliyetinin artmasıdır: sınır elleri raise-fold'a göre fiyatla; showdown'la doğrula, kendi solver'ında kalibre et."
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
    minutes: 5,
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
  {
    id: "M30",
    title: "WSOP Day 1A — Kendi Ellerin (Pasiflik Aynası)",
    chapter: "Bölüm 7 ★",
    minutes: 6,
    slides: [
      {
        title: "Ayna sızıntı: az oynamak",
        bullets: [
          "İlk dört vaka kök hatanın 'fazla oyna' yüzüydü; bunlar tersi.",
          "Kök hata bu turnuvada yüksek-şiddette YOK — frenlerin çalıştı.",
          "Asıl kaçan para: güçlü eli AZ oynamak (değer almamak).",
        ],
        ruleBox:
          "İyi elde son sokakta check'leme: 'benden kötü bir el bu bahsi öder mi?' — Evet ise BET.",
        narration:
          "Bu modül senin kendi oyunun; WSOP Online Main Event birinci gününden. Yetmiş beş karar elini baştan sona taradık, bağımsız bir ikinci göz de teyit etti. Önce iyi haber: agresif tarafın çok sağlam. Blöflerin, üç-bet'lerin, büyük premium'ları oynayışın ve zor yerlerdeki büyük fold'ların neredeyse hep doğru. Kök hatan, yani şişmiş potta tek per'le batmak, bu turnuvada yüksek şiddette yok; frenlerin çalışmış. Ama tekrar eden bir sızıntı var ve bu kök hatanın tam tersi: güçlü eli az oynamak. Top pair, iki per, hatta set ve full house yaptığın ellerde son sokakta bahis atmak yerine check'liyorsun. Masada tek soru şu olmalı: benden kötü bir el bu bahsi öder mi? Cevap evet ise bahis at. Şimdi üç ele tek tek bakalım.",
      },
      {
        title: "Vaka 5 — Set'i üç sokak check'lemek",
        bullets: [
          "5-bet potu, SPR bir buçuk. Flop J-T-Q → orta set (TT).",
          "Flop check, turn check, river Q → tens full → yine check.",
          "Villain iki per ile showdown'a bedava geldi. ~30-80K bırakıldı.",
        ],
        visuals: [
          { kind: "hand", cards: "TT", label: "Elin — set floplandı" },
          { kind: "board", cards: "Jd Ts Qh Ac Qs", label: "River: tens full (TTT+QQ)" },
        ],
        ruleBox:
          "Set ve full house küçük-SPR'li 4-bet/5-bet potunda ASLA check'lenmez.",
        narration:
          "Birinci el. Beş-bet'li bir pot; stack'e göre pot oranı bir buçuk, yani çok sığ, para ortada. Flop jack-ten-queen geliyor, elinde onlu çift, ortada set floplamışsın. Bu neredeyse en güçlü el. Ama flop check, turn check, river queen ile tens full yapıyorsun ve yine check. Sonunda kazandın ama postflop sıfır çip aldın; villain iki per ile showdown'a bedava geldi. Doğrusu: bu SPR'de set ile flop'ta bet ya da jam şart, çünkü as-as bile fold etmez. En geç river'da tens full ile jam'lersin; ace-king, as-as, king-king, queen-queen ve iki per öder. Benden kötü el öder mi? Kesinlikle evet. Bu tek elde tahminen otuz ila seksen bin çip masada bıraktın; batch'in en pahalı eli. Kural: set ve full house, küçük SPR'li potta asla check'lenmez.",
      },
      {
        title: "Vaka 6 — Nut kenti check'leyip potu bırakmak",
        bullets: [
          "BB defend, flop A-4-3 → floplanan tekerlek (nut düz).",
          "Flop call, turn check (bedava kart), river A → check-FOLD.",
          "Nut elden sıfır değer VE pot terk edildi — Vaka 5'in beteri.",
        ],
        visuals: [
          { kind: "hand", cards: "5h 2c", label: "52o — nut düz floplandı" },
          { kind: "board", cards: "Ac 4d 3s 5s Ah", label: "Turn 5 bedava, river A" },
        ],
        ruleBox: "Nut/çok güçlü elle turn'de MUTLAKA bahis — bedava kart verme.",
        narration:
          "İkinci el, ve bu birincisinden bile beter. Büyük blind'de beş-iki elini savunmuşsun, flop as-dört-üç geliyor; elinde floplanan tekerlek, yani nut düz. Bundan güçlüsü neredeyse yok. Flop'ta sadece call, turn'de check; rakip de check ediyor, yani ona bedava bir kart vermiş oldun. River as geliyor ve sen check-fold yapıyorsun. Bir düşün: turnuvanın en güçlü ellerinden birini floplayıp önce sıfır değer aldın, sonra o eli bluff-catcher'a çevirip potu da attın. Pasif hat bu felaketi kendi üretti. Doğrusu: flop'ta check-raise ya da en geç turn'de yüzde altmış-yetmiş value bet; her as, her dörtlü ve üçlü, karo draw'lar öder, ve river'da inisiyatif sende kalır. Nut elle bedava kart verme; değeri kendin al.",
      },
      {
        title: "Vaka 7 — Kök hata KURULUMU (frenli, 183K)",
        bullets: [
          "60bb OOP, 3-bet'e TT ile FLAT → şişmiş-pot-tek-per kurulumu.",
          "Postflop kusursuz: eşleşen turn'de check-fold (fren çalıştı).",
          "Ama flat'in kendisi 183K'ya mal oldu — günün en büyük kaybı.",
        ],
        visuals: [
          { kind: "hand", cards: "TT", label: "60bb OOP, 3-bet'e flat" },
          { kind: "board", cards: "7s Ks 8s 7h", label: "Monoton flop, eşleşen turn" },
        ],
        ruleBox:
          "Kök hata 'yok' değil FRENLİ. Frene güvenme, KURULUMU engelle: orta çiftle OOP flat'i azalt.",
        narration:
          "Üçüncü el, ve bu senin en pahalı kaybın: yüz seksen üç bin çip. Elli üç big blind derinlikte, cutoff üç-bet'ine onlu çift ile pozisyon dışı flat call yapıyorsun. Monoton yedi-king-eight flop'unda çift artı floş draw ile check-call, board eşleşen turn'de ikinci barrel'a fold. Şunu net söyleyeyim: postflop oyunun kusursuzdu; eşleşen turn'de check-fold, kitabın on bir nokta iki modelinin ta kendisi. Fren çalıştı ve seni daha büyük kayıptan kurtardı. Hata preflop'ta: altmış big blind pozisyon dışında onlu çift ile üç-bet'e flat, tam da kitabın uyardığı şişmiş-pot-tek-per kurulumunu davet ediyor. Doğrusu dört-bet-jam ya da fold. Ders şu: kök hata bu turnuvada yok değil, frenli. Frenlerin mükemmel ama frene güvenme; kurulumu engelle. Kaçan para frende değil, kurulumda.",
      },
      {
        title: "Böyle devam — model eller",
        bullets: [
          "78o: flopta trips → check-raise → turn pot → river overbet (kusursuz value).",
          "AA ×2: 4-bet/5-bet all-in, ikisi de doğru.",
          "Büyük ve DOĞRU fold'lar (TT 406K pot turn check-fold).",
        ],
        visuals: [
          { kind: "hand", cards: "7h 8d", label: "78o — value merdiveni" },
          { kind: "hand", cards: "AA", label: "Premium stack-off" },
        ],
        ruleBox:
          "Value merdivenin (78o) zaten kusursuz — o refleksi güçlü made-hand'lerin HEPSİNE taşı.",
        narration:
          "Şimdi iyi haberi pekiştirelim, çünkü çoğu elini kusursuz oynadın; yetmiş beş elin kırk yedisi model. En güzeli: büyük blind'de yedi-sekiz offsuit savunmuşsun, flop yedi-üç-yedi, trips. Check-raise, turn'de pot boyu bahis, river'da overbet. Kusursuz bir value merdiveni. İşte mesele tam bu: draw'lı ve trips'li ellerde bu agresyonu zaten yapıyorsun, ama set, full house, top pair gibi sessiz güçlü ellerde check'e kayıyorsun. As-as'leri iki kez kusursuz batırdın, büyük ve doğru fold'lar yaptın; onlu çift ile dört yüz altı bin çipli potta turn'de check-fold, kitabın kalbi. Yani disiplinin de agresyonun da var. Tek yapman gereken: yedi-sekiz offsuit ile gösterdiğin o value refleksini, güçlü made-hand'lerinin hepsine taşımak.",
      },
      {
        title: "Tek kural — masada tek soru",
        bullets: [
          "Soru: 'Benden kötü bir el bu bahsi öder mi?'",
          "Evet → BET (top pair, iki per, set, full house — hepsi).",
          "Hayır → check (sadece o zaman).",
        ],
        ruleBox:
          "İyi elde son sokakta elini kontrol etmeyi bırak, DEĞERİNİ AL. Kök-hatanın tersi de leak.",
        narration:
          "Kapanış. Bu turnuvadan tek bir alışkanlık değişecek: iyi elde son sokakta elini kontrol etmeyi bırak, değerini al. Masada tek soru: benden kötü bir el bu bahsi öder mi? Evet ise bahis at; top pair, iki per, set, full house, hepsi. Hayır ise, ancak o zaman check. Bunu bir alışkanlık yaparsan Day birinci günündeki kaçan parayı doğrudan geri kazanırsın, üstelik sıfır ek riskle, çünkü bu ellerin hiçbiri seni riske atmıyordu. Ve unutma: kök hata da yok değil, frenli; o yüzden orta çiftle pozisyon dışı flat gibi kurulumları azalt. Disiplin artı bu tek value düzeltmesi, seni ikinci güne çok daha keskin götürür.",
      },
    ],
  },
  {
    id: "M31",
    title: "C-bet'e Karşı: Eşik Disiplini",
    chapter: "Bölüm 26 ★",
    minutes: 12,
    slides: [
      {
        title: "Frekans Değil, Eşik Çalış",
        bullets: [
          "Yanlış soru: \"aralığımın %kaçını savunayım?\" — doğru soru: \"hangi sınıfın ALTINI bırakayım?\"",
          "Sim'den 3 çizgi çıkar: devam eşiği, value-raise eşiği, blöf-raise adayları",
          "Blöf-raise nitelikleri (board sahipliği + bloker) birkaç board sonra tekrar eder → ezber"
        ],
        ruleBox: "Devam ve value-raise eşiğini OKU; blöf-raise'i birkaç board sonra ezberden uygula — çalışma zamanı eşik çizgisine gider, kombo seçimine değil.",
        narration: "C-bet yediğinde çoğu oyuncunun aklına gelen ilk soru yanlış sorudur: aralığımın yüzde kaçını savunmalıyım? Frekans ezberlenmez; eşik çalışılır. Sim'den çıkaracağın şey üç çizgi. Birincisi devam eşiği, yani call edebilen en zayıf el; onun altı fold. İkincisi value-raise eşiği, yani check-raise'i değer için basabilen en zayıf el. Üçüncüsü blöf-raise adayları; ama şunu göreceksin, birkaç board sonra bu adım kendini tekrar etmeye başlar, çünkü board sahipliği ve bloker nitelikleri hep aynı kalıba oturur — yani onu ezberlersin. Çalışma zamanını eşik çizgisine harca, tek tek kombo seçimine değil."
      },
      {
        title: "Eşik Kendi Aralığınla Kalibre Olur",
        bullets: [
          "\"Her per call, her draw devam\" ezberi = bağlantılı board'da otomatik over-defense",
          "Sebep sadece rakibin güçlenmesi değil: SENİN devam edebilir kombon da çoğalıyor",
          "Bağlantı arttıkça eşik yükselir — en zayıf devam elini bir sınıf yukarı çek"
        ],
        ruleBox: "Eşik kalibrasyonunun yarısı rakibin aralığı, öbür yarısı KENDİ kompozisyonun.",
        visuals: [
          {
            kind: "board",
            cards: "Ts 9d 8c",
            label: "Bağlantılı board — kendi draw'ların çoğalır, eşik yükselir"
          }
        ],
        narration: "Her per call, her draw devam ezberi kulağa disiplinli geliyor ama bağlantılı board'da seni otomatik olarak fazla savunmaya iter. İşin ilginç yanı şu: sebep yalnızca rakibin aralığının güçlenmesi değil. On-dokuz-sekiz gibi bir board'da senin devam edebilir kombon da çoğalır; draw'lar, per artı ekstralar derken hepsiyle devam edersen aralığın şişer. O yüzden bağlantı arttıkça eşik yükselir; en zayıf devam elini bir sınıf yukarı çekersin. Eşik kalibrasyonunun yarısı rakibin aralığı, öbür yarısı senin kendi kompozisyonun. Kendi elini saymadan çizilen eşik, eşik değildir."
      },
      {
        title: "Check-Raise: Net-Kararlı Runout Ara",
        bullets: [
          "Domine eden draw'lar (üst per + FD tipleri) call'da kalır — pahalı pot kurmadan realize eder",
          "Per yakalayınca no-man's land'e düşecek marjinal el raise'lenmez",
          "Dezavantaj board'unda hiçbir el hevesli değilse raise düğümünü komple kapat"
        ],
        ruleBox: "Check-raise büyük pot kurar; büyük potu ancak net-kararlı runout'u olan el kaldırır.",
        visuals: [
          {
            kind: "hand",
            cards: "Jh Th",
            label: "Üst per + flush draw — raise değil, call"
          },
          {
            kind: "board",
            cards: "Th 8h 3c",
            label: "Domine eden draw call'da kalır"
          }
        ],
        narration: "Check-raise büyük pot kurar, büyük pot da net karar verebileceğin runout'lar ister. Bu yüzden domine eden draw'lar — mesela üst per artı flush draw tipi eller — call'da kalır; pahalı bir pot kurmadan değerini kendisi realize eder. Asıl tehlike marjinal adaylarda: perini yakaladığında no-man's land'e düşecek bir eli raise'lersen, potu kendi elinle şişirip içinde tek per'le bluff-catcher kalırsın. Bu, kitabın kök hatasının ta kendisi — ve bu sefer suç tamamen sende, çünkü o potu sen kurdun. Dezavantaj board'unda daha da sert ol: hiçbir elin value-raise'e hevesli değilse raise düğümünü komple kapat. Rakip bunu fark edip uyum yapana kadar bu sana bedavaya yakın bir sadelik kazandırır."
      },
      {
        title: "Notlar Board'a Değil, Yüzleşilen Boya Göre",
        bullets: [
          "Farklı boylara karşı savunmalar kıyaslanamaz — desen aynı boyda yan yana çıkar",
          "Hat bazlı kutular: \"flop-1/3 → turn-2/3\" ayrı, \"flop-2/3 → turn-jam\" ayrı",
          "1/3 range-bet: geniş devam + sık check-raise; 2/3 polarize: dar devam + dar raise"
        ],
        ruleBox: "Notlar sokak değil HAT bazlı tutulur: flop'ta yüzleşilen boy, turn eşiklerini belirler.",
        narration: "Not tutarken en sık yapılan hata board'a göre dosyalamak. Farklı c-bet boylarına karşı savunmalar birbiriyle kıyaslanamaz; desen ancak aynı boya karşı board'ları yan yana koyunca ortaya çıkar. Üstelik flop'ta yüzleştiğin boy, turn eşiklerini de belirler. O yüzden notlar sokak bazlı değil hat bazlı tutulur: flop üçte bir sonrası turn üçte iki ayrı bir kutu, flop üçte iki sonrası turn jam apayrı bir kutu. Kaba harita da şu: üçte birlik range-bet'e karşı geniş devam eşiği ve sık, geniş check-raise — çünkü rakibin aralığı geniş ve zayıf. Üçte ikilik polarize bete karşıysa dar devam, dar ve polarize check-raise, net bir value-raise eşiği."
      },
      {
        title: "River: Fiyat + Frekans, İki Eksen",
        bullets: [
          "Fiyat ekseni (B11.2): bet boyu → gereken devam %'si",
          "Frekans ekseni (yeni): gereken %'yi aralığındaki sınıf-%'lerine eşle",
          "Sınıf İÇİ seçim: value-bloke → call, blöf-bloke → fold; read ancak bunun üstüne"
        ],
        ruleBox: "Fiyat \"ne kadar savunmam gerek\"i, frekans \"elimin neresinden keseceğim\"i söyler.",
        narration: "River'da devam kararı iki eksenlidir. Fiyat eksenini zaten biliyorsun: bet boyu sana toplamda ne kadar savunman gerektiğini söyler. Eksik olan ikinci eksen frekans: o gereken yüzdeyi kendi aralığındaki sınıf yüzdelerine eşlersin. Mesela top-pair ve üstü, elinin yarısıysa hepsiyle call edersin; ama aralığının üçte ikisiyse bir sınıf budarsın. Frekansı sınıf yüzdesiyle tuttur; sınıfın içinde hangi komboyla devam edeceğini ise bloker kuralı söyler: rakibin value'sunu bloke ediyorsan call, blöfünü bloke ediyorsan fold. Read ancak bunun üstüne gelir. Şişmiş potta tek per'le kararsız kalmanın panzehiri de bu: fiyat kaç savunacağını, frekans nereden keseceğini söyler — tahmin değil, sistem."
      },
      {
        title: "Eşik neden sağlam — çizgiyi puanla, etiketi değil",
        bullets: [
          "Sim'de aralığı oynat: kombolar raise ile call arasında savrulur ama DEVAM çizgisi az kıpırdar.",
          "Öğrenilecek sağlam nesne ÇİZGİDİR (devam mı, değil mi), aksiyon-etiketi (raise mı call mı) değil.",
          "Drill'i buna göre puanla: doğru tarafta devam = doğru; aksiyon ıskasına üzülmek hata bütçeni gürültüye harcar."
        ],
        ruleBox: "Sağlam nesne çizgidir, etiket değil — drill'de devam yönü doğruysa puanı ver.",
        narration: "Frekans değil eşik çalış emrinin arkasındaki gerekçe şudur. Simülatörde aralığı ve stack'i oynattığında, tek tek kombolar raise ile call arasında sürekli savrulur; ama devam edip etmeme çizgisi çok az kıpırdar. Karşılaştığın boy büyüdükçe eşik biraz daralır, fakat raise mı call mı sorusunun cevabı bundan çok daha gürültülüdür. Bu yüzden öğrenilecek sağlam nesne çizgidir, yani devam mı ediyorum etmiyor muyum; aksiyon etiketi, yani raise mı call mı, kaygan zemindir. Hazırlık drill'ini de böyle puanla: doğru tarafta devam ettiysen bu doğrudur. Solver bu eli raise ederken sen call ettin diye üzülmek, hata bütçeni gürültüye harcamaktır."
      },
      {
        title: "Raise düğümünün üç kuralı",
        bullets: [
          "Call kıtlığı yasası: call bulamadığın board'da hem hedefin ÜSTÜNDE fold hem geniş raise edersin — value'yu orta per'e indir, blöfü ona oranla ekle.",
          "Raise-sonrasını çalış: raise'in call yediği düğümde turn value eşiğini + CHECK kolonunu oku — güçlü sınıfların bir payı orada durur, korunmamışsa check aralığını onar.",
          "Bloker kilit-testi: rakip value çekirdeğini senin kilit-kartından arındırabiliyorsa kural raf-ömürsüzdür → sınıf-yüzdesine yaslan."
        ],
        ruleBox: "Call kıtsa savunma raise'den toplanır; ama value bütçesine bakmadan blöf-raise eklemek over-bluff'un savunma-tarafı kök hatasıdır.",
        narration: "Bir raise düğümünde üç kural işler. Birincisi call kıtlığı yasası. Call edecek doğal bir el bulamadığın bir board'da çıktıyı yanlış okumak kolaydır: hem savunma hedefinin üstünde fold edersin, hem de aşırı geniş raise'lersin; bunlar aynı yasanın iki yüzüdür. Doğal call kıtsa savunma frekansını raise'den toplarsın: value tanımını orta per sınıflarına kadar indir ve blöfü o genişliğe oranla ekle. Tersi de yasadır; büyük boya karşı value-raise aralığın daraldıkça blöf-raise sayın da onunla düşer. Value bütçesine bakmadan blöf-raise eklemek, aşırı blöfün savunma tarafındaki kök hatasıdır. İkinci kural: raise'i seçtiysen raise sonrasını da çalış. Raise'in call yediği düğümü ileri oynat, turn value eşiğini oku, sonra check kolonuna bak; en güçlü sınıflarının önemli bir payının orada durduğunu göreceksin. Geniş raise elimi açık eder korkusu bu kolonda ölür: check aralığın korunmuşsa küçük betlere per sınıflarınla devam edersin ve kimse seni cezalandıramaz; korunmamışsa raise aralığını değil, check aralığını onar. Üçüncü kural: bloker kilit testi. Hiçbir bloker kuralını test etmeden ezbere alma; tek soru şu: rakip value çekirdeğini senin kilit kartından arındırabilir mi. Çekirdeği yapısal olarak o karttan geçiyorsa kural kilitlidir, ezberle ve uygula. Arındırabiliyorsa kuralın raf ömrü kısadır; blokere değil sınıf yüzdesine yaslan ve okumayı onun üstüne koy."
      },
      {
        "title": "EK: Check-raise sonrası turn — kilitli DOWNBET, akışkan JAM",
        "bullets": [
          "Flop check-raise + call sonrası SPR düşük; turn ağacı iki boy: KÜÇÜK ya da JAM, orta boy çoğunlukla yok.",
          "Tek soru: check-raise aralığımın nut sınıfı bu turn'de KİLİTLİ mi?",
          "Kilitli (kent geldi, flush draw yok, kenti taşıyorsun; alt kart eşleşti + alt per) → downbet, jam nadir.",
          "Akışkan → value + semi-blöf jam; hedef zayıf per/overcard/zayıf draw, domine draw'ı ancak yüksek SPR katlatır."
        ],
        "ruleBox": "Kilit flop check-raise kompozisyonuna bağlıdır: alt-per/backdoor koruması eklemek turn kilidini satın alır.",
        "visuals": [
          {
            "kind": "board",
            "cards": "9s 7h 4d 8c",
            "label": "Kilitli: kent tamamlandı, flush draw yok → downbet"
          }
        ],
        "narration": "Flop check-raise'i call yedikten sonra stack pot oranı düşüktür ve turn ağacı iki boya iner: potun küçük bir dilimi ya da jam; orta boy çoğunlukla yok. Tek soru seçer: check-raise aralığımın nut sınıfı bu turn'de kilitli mi. Kilitli demek river'ın geçmesi zor ve nut hâlâ sende: kent tamamlandı, flush draw yok ve aralığın o kenti taşıyor; yoksa kent call edene kaymıştır, check ağırlıklı. Ya da alt kart eşleşti ve check-raise'de alt per'ler vardı. Kilitliyse downbet ağırlıklı, jam nadir; oran yükseldikçe orta boy açılır. Akışkan demek iki flush draw açıldı, bağlantılı turn, üst per kırılgan: güçlü eller parayı river değişmeden koymak ister, jam ağırlığı artar; semi-blöf jam de buradan, ama stack pot oranı düştükçe fold equity düşer. Jam'in hedefi zayıf per, overcard ve zayıf draw'ları katlatıp equity reddetmektir; seni domine eden draw'ı katlatmak ancak oran yeterince yüksekken mümkündür, sınırda. Kilit flop kompozisyonuna bağlıdır: alt-per ve backdoor koruması eklemek turn kilidini satın alır; kendi solver'ında kalibre et."
      },
      {
        "title": "EK: Turn kartını üç katmanda oku — kart KİMİ kilitledi",
        "bullets": [
          "Üç katman: ne tamamladı · hâlâ canlı draw var mı · tamamlanan draw rakipte de var mı.",
          "Kent + rainbow → downbet; canlı flush draw → kilit açık, jam artar; flush iki tarafta → downbet, jam çok dar.",
          "Rakibi kilitleyen kart → check/kontrol; dar sınıf (As'ta set/iki-per, üst kart eşleşince boat/quads) büyük.",
          "Alt kart eşleşince tersi: alt per → trips, alt iki-per → boat, alt set → quads; kilit sende, o sınıf bet."
        ],
        "ruleBox": "Havuz downbet'e overfold eder ve turn raise'i bulamaz: downbet ile check arasında kaldıysan downbet.",
        "visuals": [
          {
            "kind": "board",
            "cards": "Tc 6d 2s Ah",
            "label": "As turn'ü rakibin aralığını kilitler → check"
          }
        ],
        "narration": "Turn kartını üç katmanda oku: ne tamamladı, canlı draw kaldı mı, tamamlanan draw rakipte de var mı. Kent tamamlayan düşük turn rainbow'da saf downbet; canlı flush draw varsa kilit açık kalır, jam payı artar. Flush iki tarafta da varsa iki taraf kilitli: downbet, jam çok dar. As turn'ü senin değil rakibin aralığını kilitler; downbet'in ödeyeceği katman artık seni geçer. Üst kartı eşleyen turn'de açıcının üst peri trips oldu, kimse küçük bete katlanmaz. Bu turn'lerde aralık çoğunlukla check ya da kontrol. As turn'ünde dar güçlü sınıf, set ve iki-per, rakibin üst perinden değer için büyük bet; downbet ancak merged kurulursa, nut artı orta el artı az blöf. Üst kart eşleşmesinde dar boat ve quads sınıfı trips'ten değer için büyük bet ya da jam. Alt kartı eşleyen turn tersidir: check-raise'deki alt per trips, alt iki-per boat, alt set quads olur; kilit sende, o sınıf bet. Havuz downbet'e overfold eder: downbet ile check arasında kaldıysan downbet; kendi solver'ında kalibre et."
      },
      {
        "title": "EK: 3-bet potu — yan kart bloker testi ve mono flop",
        "bullets": [
          "40bb J-T-x, 3-bettor jam'i: ikinci per yan kartla karar — Q, QQ + AQ/KQ'yu; K, KK + KQ/AK'yı keser.",
          "Kilit-testi call'u SINIRDA yapar; kombo say, yeniden say. J8 grup dışı: 8 blokeri ihmal edilebilir.",
          "Mono flop küçük bete: flush kartlı per call; overpair/top pair da call (4. flush kartında yeniden bak).",
          "Raise adayı: flop rengindeki K/Q'lı draw + bloker; kartsız SC raise DEĞİL — 3-bettor NUT-flush ağırlıklı."
        ],
        "ruleBox": "Yan kart value'yu da semi-blöfü de keser, o yüzden sınırda; mono'da kovayı oku — 3-bettor'ın NUT-flush payı (sayısı değil) kovaya göre değişir.",
        "visuals": [
          {
            "kind": "board",
            "cards": "Jd Tc 4s",
            "label": "Sığ SPR J-T-x: 3-bettor jam'i"
          },
          {
            "kind": "hand",
            "cards": "Qs Th",
            "label": "İkinci per + Q yan kart: iki yönde keser"
          }
        ],
        "narration": "Kırk big blind'de, vale-onlu-iks board'unda üç-bettor jam'ledi ve elinde ikinci per var. Karar yan karttan gelir ama iki yönde: kız yan kartı kız-kız value'sunu ve as-kız, kral-kız semi-blöflerini keser; kral yan kartı kral-kral'ı ve kral-kız, as-kral'ı keser; iki etki çekişir. Bu yüzden kilit-testi call'u rahat değil sınırda yapar. Hangi yön ağır basar, kombo say; jam aralığı değişince yeniden say. Vale-sekiz gruba girmez: üst perdir, sekizin bloker etkisi ihmal edilebilir, karar el gücünden gelir. İkinci ek, tek renkli flop: Flush kartlı per call sınıfı; overpair ve üst per flush kartsız da call, dördüncü flush kartında yeniden değerlendir. Raise adayı flopun rengindeki kral ya da kızı taşıyan draw artı bloker ellerdir; flush kartsız suited connector raise değildir, çünkü üç-bettor'ın aralığında nut flush ve nut draw payı yüksektir; nut oranı, toplam sayısı değil. Önce hangi kovada olduğunu oku: as artı düşük, as'sız kopuk orta, nut-flush payı caller'da; üç-bettor'ın nut payı kovaya göre değişir; kendi solver'ında kalibre et."
      }
    ]
  },
  {
    id: "M32",
    title: "Solver'ı Çalışmak",
    chapter: "Bölüm 27 ★",
    minutes: 16,
    slides: [
      {
        title: "Temel duruş: kopyalama, sorgula",
        bullets: [
          "Pokerde geri bildirim zayıf — yanlış varsayımla yıllarca EV kanatabilirsin.",
          "Çıktıyı NEDEN'ini anlamadan taşıma: mekanizma çıkar, ezber değil.",
          "Bu, B16.3 otopsinin solver tarafıdır."
        ],
        ruleBox: "Solver öğrenme aracıdır, kopya kaynağı değil — NEDEN'i yoksa çıktı masaya taşınmaz.",
        narration: "Bu modülde hazırlık drill'ini ve el otopsini solver masasına bağlıyoruz. Ama önce temel duruş: solver bir öğrenme aracıdır, kopya kaynağı değil. Pokerde geri bildirim çok zayıftır; yanlış bir varsayımla yıllarca EV kanatırsın ve bunu hiç fark etmeyebilirsin. İşte bu yüzden solver'ın bir şeyi neden yaptığını anlamadan o çıktıyı masaya taşıma. Senin işin ezberlemek değil, mekanizmayı söküp çıkarmak. Bu da otopsi rutininin solver tarafıdır: her çıktının arkasındaki nedeni bulmadan defteri kapatma."
      },
      {
        title: "Board'ları kova kova çalış",
        bullets: [
          "İzole board değil doku-kovası: paired / monotone / bağlantılı / kuru-yüksek.",
          "Bir kova = TEK strateji; sadece gerçekten farklı davranan alt-sınıfı ayır.",
          "B9 drill'ini board-verimli yapar."
        ],
        ruleBox: "Board'ları tek tek değil KOVA halinde çalış — bir kovaya tek strateji.",
        visuals: [
          {
            kind: "board",
            cards: "Qh Qd 6c",
            label: "Paired kova"
          },
          {
            kind: "board",
            cards: "Kh 9h 4h",
            label: "Monotone kova"
          },
          {
            kind: "board",
            cards: "Ts 9d 8c",
            label: "Bağlantılı kova"
          },
          {
            kind: "board",
            cards: "Ad 7c 2s",
            label: "Kuru-yüksek kova"
          }
        ],
        narration: "Her board'u sıfırdan düşünmek en büyük zaman tuzağıdır. Bunun yerine doku kovaları kur: per'li board'lar, tek renkli board'lar, bağlantılı board'lar ve kuru yüksek board'lar. Bir kovaya tek bir strateji ata; alt sınıfı ancak gerçekten farklı davranıyorsa ayır. Tek renkli bir board'la kuru as-yüksek bir board aynı kovada yaşamaz elbette, ama birbirine benzeyen iki bağlantılı board için iki ayrı ezber tutmana da gerek yok. Bu yaklaşım hazırlık drill'ini board-verimli yapar: masada yeni bir board gördüğünde onu sıfırdan çözmezsin, kovasını tanırsın ve kovanın stratejisini uygularsın."
      },
      {
        title: "Blöf sayımı ve node-lock",
        bullets: [
          "River: value kombolarını say, boyun value:blöf oranına kadar blöf ekle.",
          "Value sınıfı daraldıkça boy büyür — kendi elinle say, hazır tablodan değil.",
          "Node-lock: tek boya sadeleştir, EV kaybını KENDİ çalıştırmanda ölç."
        ],
        ruleBox: "Blöf sayısı düz aritmetiktir; sadeleştirme ancak ölçtüğün EV kaybı azsa masaya taşınır.",
        narration: "River'a geldiğinde blöf sayısı bir sır değil, düz aritmetiktir. Önce value kombolarını sayarsın, sonra seçtiğin boyun gerektirdiği value-blöf oranına kadar blöf eklersin. Şunu da kendi elinle sayarak gör: value'lanabilir sınıf daraldıkça, yani elinde yalnız çok güçlü eller kaldıkça, boy büyür. Bunu başkasının hazır tablosundan değil, kendi sayımından öğren. Sadeleştirme tarafında da aynı disiplin geçerli: node-lock ile bir boyu kilitle ve EV kaybını ölç. Tek boya inmek az EV kaybettiriyorsa o sadeleştirme masaya taşınabilir; çok kaybettiriyorsa taşınmaz. Ve sonucu mutlaka kendi çalıştırmanda gör — başkasının aralık kovaya yakınsar iddiasını olgu gibi alma."
      },
      {
        title: "Desen + Neden + Sınır Koşulu",
        bullets: [
          "Her kural 3 parça: desen + neden + SINIR KOŞULU.",
          "Sınır koşulsuz heuristic yanlış genellenir → kök hatanın masabaşı kaynağı.",
          "Teşvik testi: \"rakibin en kârlı cevabı ne?\" — cevap dejenereyse strateji yanlış."
        ],
        ruleBox: "Sınır koşulu yazılmayan heuristic yanlış genellenir — üç parçası olmayan kural, kural değildir.",
        narration: "Şimdi bu bölümün kalbi. Solver'dan çektiğin her kural üç parça taşır: desen, yani ne gözlediğin; neden, yani arkadaki mekanizma; ve sınır koşulu, yani kuralın nerede geçersiz olduğu. Sınır koşulu yazılmayan heuristic yanlış genellenir. Kitabın kök hatasını hatırla: sınırı çizilmemiş bir kuralı her yere taşımak kök hatayı besler; sınır koşulu ise kök hatayı daha çalışma masasındayken önlemenin motorudur. Üstüne bir de öz-denetim testi koy: buna karşı rakibin en kârlı cevabı ne? Cevap dejenere bir şeyse stratejin yanlıştır. Sömürülebilirliği MDF ezberiyle değil, rakibin teşvikiyle test et."
      },
      {
        title: "Seans mühendisliği ve üçüncü soru",
        bullets: [
          "Kısa, zaman-kutulu seans; seans başına TEK önceden tanımlı hedef.",
          "Yoğun solver yalnız OYNANMAYAN günün sabahına; oyun günü öncesi zihin işi yasak.",
          "Otopsiye 3. soru: \"SINIFIM ne yapıyordu?\" — tek kombo mix'te yanıltır."
        ],
        ruleBox: "Oyun günü seans öncesi yoğun zihinsel iş yok; otopside ders SINIF seviyesinden çıkar, tek kombodan değil.",
        narration: "Çalışmanın içeriği kadar mühendisliği de önemli. Seansların kısa ve zaman kutulu olsun; süreyi kendine göre kalibre et. Her seansta önceden tanımlanmış tek bir hedef olsun ve sıfır dikkat dağıtıcı — şu hedefsiz bir saat solver açayım yaklaşımı bu yöntemin baş düşmanıdır. Zamanlama kuralı da net: yoğun solver çalışması yalnız oynanmayan günün sabahına konur, çünkü oyun günü seans öncesi zihinsel iş performansını düşürür. Video ya da drill gibi düşük yoğunluklu işleri seans sonrasına bırak. Otopsine de üçüncü bir soru ekle: sınıfım ne yapıyordu? Çünkü mix'li bir node'da senin kombonun solver'la eşleşmesi yanıltıcıdır; kombon sınıfının outlier'ı olabilir. Ders sınıf seviyesinden çıkar, tek kombodan değil."
      },
      {
        title: "Dört karar-filtresi",
        bullets: [
          "Sim'de izinli ≠ iyi oynadın: eş-EV hattın EV'si HANGİ rakip-cevap düğümünden?",
          "Kaçınılmazlık: her hatta zaten stack'leniyorsan o dal düşer → equity-reddi RAISE.",
          "3-bet kimliği (flat var → polar-BÜYÜK / flat yok → lineer-KÜÇÜK) + derinlik bandını koru."
        ],
        ruleBox: "Eş-EV hattın EV'si SENİN havuzunda gerçekleşmeyen bir rakip cevabından geliyorsa, o hat pratikte kaybeder.",
        narration: "Kapanışta dört karar filtresi var. Bir: EV-kaynağı takibi — sim'de izinli olmak iyi oynadığın anlamına gelmez; eş-EV bir hattın EV'si hangi rakip-cevap düğümünden geliyor ve senin havuzun o cevabı gerçekten veriyor mu? Limp-reraise'in EV'si rakibin çöple dört-bet jam yapmasından geliyorsa ve havuzun bunu yapmıyorsa, jam üstündür. İki: kaçınılmazlık ilkesi — beni ezen el zaten her hatta beni stack'liyorsa o dal karardan düşer; karar kalan aralığa karşı verilir ve çoğu kez korku call'u değil, equity reddi için raise çıkar. Üç: üç-bet boy kimliği — aralığında anlamlı flat varsa üç-bet polar'dır ve büyük olur; flat kapalıysa tüm oynanabilir eller üç-bet'e gider, lineer'dir ve küçük olur; iki kısa stack belirince de orta stack'ler lineer-küçükten polar-büyüğe kayar. Dört: stack bandı koruması — edge'in belirli bir derinlik bandında yaşıyorsa, blind artışı öncesi iki big blind'lik spekülatif bir flat bile seni o bandın altına düşürebilir; yakın kararda fold edip bandı garanti et. Bu dört filtre, sınır-koşullu heuristic'lerinle birlikte kök hatayı daha çalışma masasındayken öldürür."
      },
      {
        title: "Çıktıyı okuma protokolü: eşik önce",
        bullets: [
          "İlk okuyuşta frekans değil EŞİK oku: bu boyla value'lanan en zayıf el / bete fold etmeyen en zayıf el ne?",
          "Agresör flop çıktısında CHECK kolonundan başla — en çok check isteyen sınıf bile bet'e mix ediyorsa gerisi zaten bet'i tercih eder.",
          "Bet frekansının düştüğü yeri tek okunabilir kart-özelliğine bağla; keyfî çizgi kusur değil, masada icra edilebilir olması."
        ],
        ruleBox: "Frekans ezberi taşınmaz, eşik taşınır — okumaya check kolonundan başla, sınırı tek kart-özelliğine bağla.",
        narration: "Solver çıktısını ilk açtığında frekansları ezberlemeye çalışma; eşiği oku. Her boy için tek bir soru sor: bu boyla value'lanabilen en zayıf el hangisi, ya da bir bete karşı fold etmeyen en zayıf el hangisi. Karışım yüzdeleri dengede eş değerdir, ezberi taşımaz; taşınan şey eşiktir. Eşiğin üstü yapabilirdir, sıklığını sonra sınıf seviyesinde ayarlarsın. Agresörün flop çıktısında okuma sırası da bellidir: bet kolonundan değil, check kolonundan başla. En çok check isteyen sınıfı bul; o sınıf bile bete karışıyorsa onun için check ile bet eş değerdir, kalan sınıflar zaten beti tercih eder. Bet frekansının düştüğü yeri tek bir okunabilir kart özelliğine bağla, mesela en düşük kart şu rankın üstündeyse bet, altındaysa check. Çizginin biraz keyfî olması bir kusur değil, tam tersine bir özelliktir; sınır elleri zaten eş değerdir ve keyfî bir çizgi masada gerçekten uygulanabilir."
      },
      {
        title: "Aralık aritmetiği ve imkânsızlık testi",
        bullets: [
          "Kombodan yüzdeye: sınıfın kombo sayısını topla, toplam kombinasyona böl, rakip aralığının genişliğinin tersiyle ölçekle.",
          "Her pot-bet call'u aralığı yarılar → seni yenen pay sokak başına kabaca ikiye katlanır; çalışmaya river'dan başlayıp geri sar.",
          "İmkânsızlık testi: aralığının yarısından fazlasıyla büyük boy atıyorsan value eşiğin DÜŞÜKTÜR — rakibin daha kötü elle CALL teşviki ölmüştür."
        ],
        ruleBox: "Strateji değil ARALIK ezberle; yarıdan fazlasıyla büyük-bet dengede value değildir — eşiği yükselt.",
        narration: "Solver ezberi seni yalnız gördüğün board'da taşır; aralık aritmetiği her board'da taşır. Bir sınıfın payını çıkarmak üç adımdır: o sınıfın kombinasyon sayısını topla, tüm kombinasyonların sayısına böl, sonra rakip aralığının genişliğinin tersiyle ölçekle; aralık ne kadar darsa pay o kadar büyür. Sokak ilerledikçe yeniden say: aralığın zayıf yarısı düşüp güçlü sınıf hep kalıyorsa, o sınıfın payı her sokakta kabaca ikiye katlanır. Çalışmaya river'dan başla ve geriye sar, çünkü river'da neyin value'landığı turn aralığını, turn de flop'u belirler. Şimdi kendi aralığına aynı haritayı tut ve imkânsızlık testini uygula: elinden iyisi aralığının aşağı yukarı yarısındaysa ve büyük boy atıyorsan, blöf payıyla birlikte toplam bet frekansın aralığının büyük kısmına yayılır. O zaman rakibin daha kötü bir elle seni ödeme teşviki ölür; eşikteki value betlerini yalnız senden iyi eller öder, yani onlar value değildir. Böyle bir çıktı dengede yoktur. Kural nettir: rakibin bet etme opsiyonu olan bir düğümde aralığının yarısından fazlasıyla büyük boy atıyorsan value eşiğin çok düşüktür, onu yükselt."
      },
      {
        title: "Karışık strateji: mix = bedava karar",
        bullets: [
          "Solver bir eli karıştırıyorsa iki aksiyon arası KAYITSIZDIR — mix ancak EV farkı sıfıra yakınken meşru.",
          "Masa çevirisi: mix'li el bedava karardır → tek tarafa sabitle; yönü read söyler, read yoksa EV-kaynağı filtresi.",
          "Denge yalnız seni izleyen iyi rakibe; rec'e karşı saf oyna, exploit'i al. Sabitlemeyi node-lock ile sına."
        ],
        ruleBox: "Mix eş-EV'dir, eş-EV karar bedavadır — rec'e karşı sabitle ve exploit'i al; dengeyi yalnız sayana sakla.",
        narration: "Solver bir eli karıştırıyorsa, o el iki aksiyon arasında kayıtsız demektir; karışım ancak iki hattın beklenen değeri neredeyse eşitken meşrudur. Masaya çevirisi çok pratiktir: karışık bir el bedava karardır. Onu tek bir tarafa sabitle. Hangi tarafa sabitleyeceğini okuman söyler; okuman yoksa beklenen değerin kaynağı filtresine dön. Sabitlemeni node-lock ile sına: karışımı tek tarafa kilitle ve beklenen değer kaybını ölç; kayıp küçükse masaya taşınır, kural budur. Karıştırmanın kapısı rakip kalitesidir. Frekansını saymayan zayıf rakibe karşı saf oyna ve sömürüyü al. Denge yalnız seni gerçekten izleyen iyi rakibe karşı gerekir, ve orada bile seyrek doz yeter; pasif hattında ara sıra güçlü el göster ki karşı uyum kapısı kapansın. Canlı oyunda araca da dikkat et: saate yalnız sınır ellerinde bakıyorsan, o bakış elini ele verir. Karıştırman gerekiyorsa bir kart özelliği kuralı kullan, mesela bugünün agresif rengi, ve kuralı her gün değiştir."
      },
      {
        title: "Turn kovaları ve sadeleştirme borç-defteri",
        bullets: [
          "Turn'ü board değil GELEN KART olarak çalış: dört kova — flush-tamamlayan / blank / board-eşleyen / straight-üstkart — artı en fazla bir özel kart.",
          "Flop'taki tam-aralık lüksü turn'de istisnadır; varsayılan bölünmüş aralıktır — çalışman bölünmüş aralığın eşiğini aramakla başlar.",
          "Her sadeleştirme sonraki sokağa BORÇ yazar: tam-aralık check probe savunması borçlar, tam-aralık bet barrel eşiğini sıkılaştırır."
        ],
        ruleBox: "Turn'de tam-aralık bet istisnadır; her kısayolun borcunu yanına yaz, yoksa iki sokak sonra kaynağı unutulmuş kaçak olur.",
        narration: "Turn'ü bir board olarak değil, gelen kart olarak çalış; bu, flop kova mantığının sokak halidir. Turn kartını dört kovaya ayır: flush tamamlayan kartlar, tamamen boş kartlar, board'u eşleyen kartlar, ve straight ya da üst kart getirenler; buna en fazla bir özel kart ekle. Aykırı görünen bir kartı ayrı bir plana bağlamadan önce test et: onu kovanın tek boyuna zorla ve check frekansını kovayla karşılaştır; yakınsıyorsa yut, aradaki farkı bilinçli bir maliyet olarak yaz. Ve şunu ezberle: flop'ta sahip olduğun tam aralık lüksü turn'de bir istisnadır. Varsayılan bölünmüş aralıktır; aralığı sert kayıran nadir turn'ler dışında turn aralığı böler, ve çalışman bölünmüş aralığın eşiğini aramakla başlar. Son olarak sadeleştirme bedava değildir; faturası bir sonraki sokakta kesilir. Her kısayolun yanına borcunu yaz. Bir dokuyu tam aralık check'e indirdiysen turn'de güçlü bir check aralığı bırakırsın ve probe'a fazladan savunma borçlusun. Tam aralık bete indirdiğin dokuda ise turn bet aralığın sulanır, o yüzden barrel eşiğini sıkılaştırman gerekir. Borcu yazılmayan sadeleştirme, iki sokak sonra kaynağı unutulmuş bir kaçağa dönüşür; bu, kök hatanın çalışma masası versiyonudur."
      },
      {
        title: "İş-akışı: teşhis merdiveni ve kontrast çifti",
        bullets: [
          "Anlaşılmayan çıktıya bakakalma, merdivene gir: aksiyonu stratejiden ÇIKAR → komşu board'da aç → boy kimi kaldıraçlıyor → teşvik testi.",
          "Kural çekerken tek node'a bakma; asgari-kontrast çifti kur: TEK değişkeni değiştir, deltayı oku — 'neden'i iki düğüm arası fark söyler.",
          "Anlamadığın node'a tavan koy, dolunca bırak — bırakmak pes değil kuluçkadır. İki-seçenek kuralı: bu iş ya da hiçbir şey; boş oturmak serbest, üçüncü seçenek yok."
        ],
        ruleBox: "'Neden'i düğüm değil iki düğüm arasındaki fark söyler; ilerleme mükemmellikten önce gelir.",
        narration: "Anlamadığın bir çıktıya dakikalarca bakakalma; onun yerine bir teşhis merdivenine gir. Birinci basamak: aksiyonu stratejiden çıkar ve sor, hangi aralık hangi runout'ta çıplak kalıyor. İkinci basamak: aynı hattı komşu bir board'da aç; strateji tutuyorsa mekanizma board'dan bağımsızdır, değişiyorsa nedeni iki board arasındaki avantaj farkıdır. Üçüncü basamak: bu boy kimin gücünü kaldıraçlıyor, kimin boşluğunu hedefliyor. Dördüncü basamak: teşvik testi, yani rakibin en kârlı cevabı ne. Bir kural çekerken de tek bir düğüme bakma; asgari kontrast çifti kur. Tek bir değişkeni değiştir, mesela aynı board'da farklı hat, ya da aynı hatta farklı board, ve iki sonucun farkını oku. Nedeni sana düğümün kendisi değil, iki düğüm arasındaki fark söyler; ve bu kontrastın öbür yarısı, kuralının sınır koşulunu doldurur. Anlamadığın bir düğüme zaman tavanı koy; tavan dolunca bırak. Bırakmak pes etmek değil, kuluçkaya yatırmaktır; birkaç gün sonra döndüğünde çoğu kilit kendiliğinden açılır. Bir de iki seçenek kuralını benimse: bu iş ya da hiçbir şey; boş oturmak serbesttir ama üçüncü bir seçenek yoktur, çünkü kaçacak kapı bulamayan dikkat derinleşir. Ölçerini de oku: arada bir karışıklık normaldir, ama sık oluyorsa sorun eksik bir düğümde değil temelindedir, o zaman yalnız çalışmayı bırak ve düğümü bir ortakla çöz. İlerleme her zaman mükemmellikten önce gelir."
      },
      {
        "title": "EK: Node-lock'un 3-bet-pot uygulaması",
        "bullets": [
          "Sığ SPR 3-bet potunda 'ara boyları at, jam/check'e indir' = node-lock prosedürünün somut hâli.",
          "100bb'de 'iki boy (küçük + büyük)' de aynı: ara boyu kilitle, EV kaybını ölç, ~sıfırsa masaya taşı.",
          "Başkasının 'EV kaybı sıfır' iddiasını olgu gibi alma — kendi ağacında ölç."
        ],
        "ruleBox": "Sadeleştirme bir iddia değil bir ölçümdür: ara boyu kilitle, kaybı oku, sıfıra yakınsa taşı.",
        "narration": "Node-lock prosedürünü soyut bir solver alıştırması sanma; iki sadeleştirmeyi bu prosedürle üretirsin. Birincisi sığ stack pot oranlı üç-bet potu: ara boyları at, ağacı jam ile check'e indir. İkincisi yüz big blind derinliği: iki boy, küçük ve büyük. İkisi de aynı adımlardan çıkar. Ara boyu kilitle, yani stratejiden çıkar; solver'ı yeniden çöz; kilitli ağacın değer kaybını kilitsiz ağaca göre ölç; kayıp sıfıra yakınsa sadeleştirmeyi masaya taşı, değilse ara boy gerçekten iş yapıyordur ve onu tutarsın. Ölçüm kendi ağacında, kendi aralıklarınla yapılır; sınır değerini kendi solver'ında kalibre et. Bir de disiplin notu: başkasının bu boyu atmak hiçbir şey kaybettirmiyor iddiasını olgu gibi alma. O iddia belirli bir aralık ve derinlikte, belirli bir boy ağacında ölçülmüştür; senin ağacın farklıysa sonuç da farklı olabilir. Sadeleştirme bir iddia değil bir ölçümdür."
      },
      {
        title: "Cheat: Solver çalışma kartı",
        bullets: [
          "Duruş: mekanizma çıkar, kopyalama. Kova: board'ları doku-kovasıyla çalış. Okuma: eşik önce, check kolonu önce.",
          "Aritmetik: kombo→pay, sokak başına yenilme ~ikiye katlanır. Aralık ezberle, strateji değil. Mix = bedava karar → sabitle+exploit.",
          "Node-lock EV-kaybıyla sına; her sadeleştirme sonraki sokağa borç yazar; otopside soru 'SINIFIM ne yapıyordu?'"
        ],
        ruleBox: "Dört filtre: EV-kaynağı · kaçınılmazlık · 3-bet kimliği (flat var→polar-büyük) · stack-bandı.",
        narration: "Kapanış özeti, bölümün cep kartı. Duruş: solver'dan mekanizma çıkar, çıktı kopyalama. Board'ları tek tek değil doku kovalarıyla çalış. Okumaya eşikten ve check kolonundan başla. Aritmetik tarafında bir sınıfın payını kombinasyonlardan çıkar, ve her sokakta seni yenen payın kabaca ikiye katlandığını unutma. Strateji değil aralık ezberle. Karışık el bedava karardır; tek tarafa sabitle ve zayıf rakibi sömür, dengeyi yalnız seni sayana sakla. Her sadeleştirmeyi node-lock ile beklenen değer kaybına vurarak sına, ve her kısayolun bir sonraki sokağa yazdığı borcu defterine işle. Otopside üçüncü soruyu sor: benim sınıfım ne yapıyordu. Ve dört karar filtresini elinde tut: beklenen değerin kaynağı, kaçınılmazlık, üç-bet kimliği; aralığında flat varsa polar ve büyük, yoksa lineer ve küçük; ve stack bandı koruması."
      }
    ]
  },
  {
    id: "M33",
    title: "PKO / Bounty: Ödülü Çipe Çevir, Aralığı Koru",
    chapter: "Bölüm 28 ★",
    minutes: 25,
    slides: [
      {
        title: "Kelle ikinci para birimidir — her elde çipe çevir",
        bullets: [
          "PKO'da 2 para birimi: çip + kelle; kellenin çip-değerini HER elde yeniden hesapla.",
          "Cover ettiğin oyuncu = NEGATİF risk primi → call/agresyon eşiğin düşer.",
          "ROI'yi en ucuz artıran şey: preflop'a daha çok zaman."
        ],
        ruleBox: "Cover ettiğin oyuncu negatif prim taşır — onu elemeye chipEV'den daha gevşek oyna.",
        narration: "PKO'da masada iki para birimi var: çipler ve kelleler. İşin sırrı şu: kellenin o anki çip-değerini her elde yeniden hesaplayacaksın — bir elde yapıp sonra unutmak olmaz. Neden bu kadar önemli? Çünkü PKO'da getirini en ucuza artıran şey, preflop kararlarına daha çok zaman ayırmak. Çipe çevrilmiş kelle, cover ettiğin oyuncuya karşı sana negatif risk primi verir: onu elersen hem çip hem kelle kazanırsın, o yüzden ona karşı call ve agresyon eşiğin düşer. Bunu ICM'in aynası gibi düşün — orada busta gitmenin kaybını fiyatlıyordun, burada kelle kazancını fiyatlıyorsun."
      },
      {
        title: "Cover eden genişler — ama solver'ın uç flat'lerini kopyalama",
        bullets: [
          "Bounty-farkındalı solver kelleyi prim gibi modeller → aşırı gevşek flat'ler önerir.",
          "Prensibi al: cover ederken VPIP genişlet.",
          "Spesifik zayıf suited flat'i kopyalama — canlı saha ödüllendirmez."
        ],
        ruleBox: "Yön doğru, doz değil: genişle ama solver'ın uç zayıf flat kombolarını alma.",
        narration: "Kelleye duyarlı solver'lar kelleyi bir prim gibi modeller ve ortaya popülasyonun çok üstünde gevşek flat'ler çıkar — normalde asla flat etmeyeceğin çok zayıf suited eller. Burada ince bir çizgi var. Prensibi al: cover ediyorsan aralığın genişler, bu doğru. Ama solver'ın o uç gevşek kombosunu birebir kopyalama. Canlı saha o gevşekliği ödüllendirmez; rakiplerin solver gibi oynamıyor. Yani ders şu: yön doğru, ama doz solver'ınki değil."
      },
      {
        title: "Geniş aralığı NUT'la koru — dead money olma",
        bullets: [
          "Arkanda reopen/squeeze edebilen varsa korunmasız geniş aralık = bedava para.",
          "AA/KK/AK'yı flat/limp aralığının İÇİNE koy.",
          "\"3-bet ya da fold\" refleksine PKO istisnası."
        ],
        ruleBox: "Geniş gir ama aralığa AA/KK/AK koy — squeeze seni cezalandıramasın.",
        visuals: [
          {
            kind: "hand",
            cards: "As Ah",
            label: "AA — limp aralığının koruması"
          }
        ],
        narration: "Geniş girmenin bir bedeli var: arkanda reopen ya da squeeze edebilen biri varsa, korunmasız geniş aralık onun için bedava para gibidir. Çözüm basit: o geniş flat ve limp aralığının içine as-as, papaz-papaz, as-papaz gibi nut elleri de koy. Böylece biri squeeze'e kalkıştığında aralığın dişli çıkar ve seni cezalandıramaz. Bu, normaldeki üç-bet ya da fold refleksine bir PKO istisnası: kelle avlamak için geniş girersin, ama aralık korunmuş olmak zorunda. Dead money olma — geniş ama dişli oyna."
      },
      {
        title: "Cover ediyorsan LIMP-ağırlıklı oyna",
        bullets: [
          "Limp = daha az çip riski → daha çok el → daha çok kelle avı.",
          "Raise yalnız fold equity üretiyorsa mantıklı.",
          "Çok kısa/kelleli stack arkadaysa raise FE üretmez → limp baskın."
        ],
        ruleBox: "Cover ederken limp-ağırlıklı VPIP; raise'i yalnız fold equity varken kullan.",
        narration: "Cover ediyorsan giriş şeklin de değişir: limp-ağırlıklı oyna. Mantık net: limp daha az çip riske atar, daha az riskle daha çok el oynarsın, daha çok el de daha çok kelle avı demek. Peki raise ne zaman mantıklı? Sadece fold equity üretiyorsa. Ama arkanda çok kısa, kelleli stack'ler varsa raise fold equity üretmez — çünkü o kısa stack'ler jam'le çok sık reopen eder ve sen raise'ini yakmış olursun. O yüzden bu masalarda limp baskın seçenek. Tabii önceki dersi unutma: limp aralığı geniş ama korunmuş olacak."
      },
      {
        title: "Kellesi ≈ kendi stack'i olan kısa: pozisyona bak",
        bullets: [
          "Kısa BB'deyse (reopen en düşük) → önündekiler daha çok 3-bet eder.",
          "Kısa SB/erken pozisyondaysa (jam'le reopen) → flat aralığını nut'la koru.",
          "Derinsen büyük first-raise (reopen'ı reddet); sığsan min-raise (jam'i çek)."
        ],
        ruleBox: "Kısa stack'in POZİSYONU planını belirler: BB'de 3-bet artar, SB/erkende nut-korumalı flat.",
        narration: "Şimdi en sıcak senaryo: kellesi neredeyse kendi stack'i kadar olan çok kısa bir stack var masada. Herkes planını onu izole etmek üzerine kurar — ve senin stratejin o kısanın pozisyonuna göre değişir. Kısa büyük blind'deyse aksiyonu kapatır, reopen ihtimali en düşüktür; o yüzden önündeki oyuncular daha rahat üç-bet edebilir. Kısa small blind'de ya da erken pozisyondaysa jam'le reopen edebilir; o zaman önündekiler flat aralıklarını nut'la korur. İzolasyonun boyu da senin derinliğine bağlı: derinsen, kısa reopen edemesin diye gereği kadar büyük bir first-raise yap ve reopen'ı reddet. Sığsan min-raise yap, kısanın jam'ini bilerek üstüne çek."
      },
      {
        title: "Mystery bounty + kök hata bağı",
        bullets: [
          "Mystery: devasa varyans (büyük roll şart); edge = IP geniş limp + korunmuş aralık.",
          "Kaba kelle değeri = canlı kelle toplamı / kalan oyuncu; beklenen ortalama SABİT — büyük zarf çekildikçe düşer, çekilmedikçe yükselir.",
          "Geniş VPIP kök hatayı davet eder: şişmiş potta tek per hâlâ bluff-catcher."
        ],
        ruleBox: "Geniş gir ama: (a) aralığı nut'la koru, (b) şişmiş potta tek per = sadece bluff-catcher.",
        visuals: [
          {
            kind: "hand",
            cards: "Ah Jd",
            label: "Top per — geniş girişin tipik sonucu"
          },
          {
            kind: "board",
            cards: "Jc 8s 4h",
            label: "Şişmiş potta hâlâ bluff-catcher"
          }
        ],
        narration: "Son olarak mystery bounty ve büyük uyarı. Mystery formatta varyans devasa, büyük bir roll şart; ama popülasyon postflop'ta çaresiz. Ana edge'in pozisyonda geniş limp artı korunmuş aralık — insanlar limp düğümünü çok kötü oynar. Kelle değeri de sabit değil: büyük kelleler çekildikçe ortalama düşer; kaba hesap, canlı kelle toplamını kalan oyuncu sayısına bölmek. Ve işte kitabın omurgasına bağlanıyoruz: PKO'nun geniş VPIP'i kök hatayı davet eder — geniş girip korunmasız aralıkla şişmiş pota düşersin ve orada elindeki tek per'le kahraman olmaya kalkarsın. Guard iki adım: geniş gir ama nut'la koru, ve postflop'ta kural değişmedi — şişmiş potta tek per hâlâ sadece bluff-catcher'dır."
      },
      {
        title: "Net Prim: İki Primi Tek Sayıya İndir",
        bullets: [
          "Net prim = ICM primi − kelle indirimi",
          "Negatif prim ÇAĞRI primidir, blöf primi değil",
          "İndirim yalnız cover edende — kapsanan indirim almaz"
        ],
        ruleBox: "Kelle indirimi yalnız cover edende işler; negatif prim call'ı genişletir, blöfü değil.",
        narration: "ICM'i ve kelleyi iki ayrı ders gibi öğrenip masada ayrı ayrı hissetme; tek sayı tut. Net prim, ICM priminden kelle indirimini çıkardığında elinde kalan sayıdır: hedefin kellesini güncel çevrimle büyük kör cinsine çevir ve efektif stack'le kıyasla. Kelle stack'e yaklaştıysa net prim derin negatiftir ve herhangi-iki bölgesindesin; kelle birkaç büyük köre eridiyse el kellesiz ICM'dir, standart matrisin aynen geçerli. İşareti de doğru oku: negatif prim çağrı primidir, blöf primi değil. Çünkü indirim yalnız cover edende olur — kelleli kısaya üç-bet-fold yoktur, jam'ine karşı kelle oddsuyla sen hep ödersin. Blöf fold equity'n ise yalnız seni cover eden rakiplere karşı düşer: cover ettiğinde genişlemeni lineer ellerle ve call'la yap, blöf-jam'i kellesiz turnuvaya sakla."
      },
      {
        title: "Cover Yönü Jam Dokusunu Seçer",
        bullets: [
          "Kapsanan: lineer jam, yüksek kart it — suited connector çöpe",
          "Cover eden: suited-bağlantılı jam altın, kısa dar öder",
          "3-bet boyutu yalnız derinliğe değil cover yönüne DE bağlı"
        ],
        ruleBox: "Jam listesi sabit değildir: kapsanıyorsan yüksek kartı, cover ediyorsan suited-bağlantılıyı it.",
        visuals: [
          {
            kind: "hand",
            cards: "Ah Kc",
            label: "Kapsananın jam'i: domine eden yüksek kart"
          },
          {
            kind: "hand",
            cards: "8s 7s",
            label: "Cover edenin jam'i: suited connector"
          }
        ],
        narration: "Her all-in'e aynı el listesiyle gitme; jam yelpazesinin dokusu cover yönüne göre tersine döner. Kapsanıyorsan rakip kellen için zaten ödeyecek — jam'i doğrusallaştır, geniş call menzilini domine eden yüksek kartı it; flip satın alan suited connector'ı ve kimseyi katlatmayan blöf jam'ini çöpe at. Cover edensen ayna döner: kısa senin kelleni kazanamaz, o yüzden dar öder — yüksek kartla gelir, iyi suited'larını katlar. Şimdi suited-bağlantılı jam altındır: dar call menzilinin yüksek kartları suited-bağlantılıyı domine edemez, çağrıldığında equity'n canlı kalır; arkandaki çöp ise katlanıp ölü para bırakır ve jam'in tam o parayı toplar. Üç-bet boyutunu da yalnız derinliğe değil cover yönüne de bağla: seni cover eden açıcıya karşı büyük git, sen cover ediyorsan küçük ve lineer kur. Son kural kompozisyon: jam'e karşı katlayacağın eli hiç üç-bet'leme — üç-bet'i, kısa ittiğinde tereddütsüz ödeyeceğin ellerden kur."
      },
      {
        title: "Kapsananın Ağacı: Ya Jam Ya Call",
        bullets: [
          "Jam aralığı DAR — kellen fold equity'ni çökertti",
          "Stack-off eşiği GENİŞ — ödediğin ICM primi normalin altında",
          "Non-all-in 3-bet ve tuzak ölür; ağaç ikiye iner"
        ],
        ruleBox: "Kapsanan kısa dar jam'ler ama geniş öder: kelle jam'i elinden alır, karşılığında çağrıyı verir.",
        narration: "Kapsanan kısanın en pahalı cümlesi şudur: baskım düşük, öyleyse geniş jam'lerim. Yön ters: kellen rakiplerin ödeme eşiğini düşürür, fold equity çöker ve jam aralığın kellesiz balondakinden bile dar olmalı. Makasın öbür ağzı ise lehine işler: biri sana jam'lediğinde ödediğin ICM primi normalin altındadır, yani stack-off eşiğin geniştir. Kelle elinden jam'i alır, karşılığında çağrıyı verir. Ağaç da ikiye iner: kapsananın küçük üç-bet'i blöf değil bağıştır, çünkü kimse kelleni masada bırakıp katlanmaz; arkadan squeeze gelecek masada canavarla tuzak kurmak da aynı kök hatanın süslüsüdür. Tepeni doğrusal jam'le, kalanını call defterine yaz — kapsananın lüksü yok, tahsilatı var."
      },
      {
        title: "Kelle Enflasyonu ve Balon Paradoksu",
        bullets: [
          "Aynı kelle geç fazda daha çok chip eder — çevrimi her büyük kararda tazele",
          "Saha hakem: dev sahada kelle silinir, küçük sahada konuşur",
          "Balonda kelleli kısa DAHA SIKI jam'ler — kellen fold equity'ni eritir"
        ],
        ruleBox: "Kelleyi bir kez çevirip taşıma; kafandaki kelle seni genişletmez, rakibin call'ını genişletir.",
        narration: "Kelleyi çipe bir kez çevirip turnuva boyunca sabit taşımak kök hatadır. Kelle havuzu sahadan yavaş erir; aynı kelle geç fazda erken fazdan daha çok chip eder, çünkü havuz dağıldıkça chip'in doları düşer — çevrimi her büyük kararda tazele. Saha büyüklüğü iki primin hakemidir: dev sahada geç aşamada en şişkin kelle bile birkaç büyük kördür, terimi sil ve kellesiz ICM oyna; küçük sahada kelle ortalama stack'in ciddi parçasıdır, net prim aşağı iner, kelle konuşur. Balonda ise paradoksu ezberle: risk primim düşük, öyleyse geniş jam çıkarımı yanlıştır. Primi düşüren mekanizmanın kendisi — kafandaki kelle — rakiplerin call aralığını genişletir; fold equity'n erir, seni her zamankinden çok öderler. Sonuç net: balonda kelleli kısa, kellesiz turnuvadakinden daha sıkı jam'ler; marjinal spotu ancak double-up sonrası ekstra oyuncuları cover edecek olman haklı çıkarır."
      },
      {
        title: "Cover'ın Kalitesi ve Cold-Call Kapısı",
        bullets: [
          "Cover skaler değil: cover × pozisyon — arkadaki tek coverer, blind'daki ikiden ağır basar",
          "Kıl payı cover kaybedilebilir statü — en ince jam'leri kes",
          "Cold-call kapısı: açanı ya da 3-bet'çiyi cover etmiyorsan girme"
        ],
        ruleBox: "Kimsenin kellesini alamıyorsan aynı el fold'dur; kapı açıksa el konuşur.",
        narration: "Cover'ı kaç kişinin kapsadığını sayarak ölçme; cover çarpı pozisyondur. Arkanda pozisyonlu tek coverer açılış aralığını kısar; blind'lardaki iki coverer neredeyse hiç kısmaz, çünkü flop'u pozisyonda oynarsın. İkinci test kalınlık: masayı kıl payı kapsıyorsan cover kaybedilebilir bir statüdür — tek all-in'de söner ve prim ödeyen tarafa düşersin; en ince jam'leri marjinal cover'da kes, tam genişliği kalın cover'a sakla. Üç-bet'li potta ise karara elinden değil stack'lerden başla: açanı ya da üç-bet'çiyi, en az birini cover etmiyorsan girme — kimsenin kellesini alamıyorsan aynı el fold'dur. Flat kararında arka zinciri oku: açıcı arkandaki muhtemel squeezer'ı cover ediyorsa squeezer kelepçelidir, squeeze gelmez, flat aralığın genişler. Blöfü de fold equity'nin öldüğü yere taşıma: seni cover eden rakip geniş öder — blocker'lı çöple değil, flop'ta bir şeye dönüşen suited-bağlantılı ellerle blöfle."
      },
      {
        title: "Ölü Ante Limp'i ve Multiway Matematiği",
        bullets: [
          "Ultra-kısa kelle = ölü ante: izolasyon ölür, range-limp gelir",
          "Multiway: yalnız SENİN cover ettiğin jam'lerin kellesini pota yaz",
          "El seçimi yelpaze sayısına bağlı: teke karşı yüksek kart, çoka karşı suited-bağlantılı"
        ],
        ruleBox: "Kazanamayacağın kelle hesaba girmez; kazanabildiğini ölü para olarak pota yaz, oranı ondan sonra kur.",
        visuals: [
          {
            kind: "hand",
            cards: "7d 6d",
            label: "Çok yelpazeye karşı nefes alan el"
          }
        ],
        narration: "Primi stack'inin katlarına varmış kısayı büyük raise'le izole etmeye çalışma; o kelle ölü antedir ve hangi boyutu seçersen seç yarım düzgün el tutan herkes fiyat alır. Rejimi değiştir: bütün oynanabilir aralığını limp'le, multiway'i kucakla, kısa ittiğinde sürüyle üstüne çök. Multiway all-in'de oranı sadece çiplerle kurma: yalnız senin cover ettiğin jam'lerin kellesini güncel çevrimle büyük kör cinsine çevir — seni cover eden yığının kellesini kazanamazsın, o hesaba girmez. Kazanabildiğin kelleleri ölü para olarak pota yaz, oranı ondan sonra hesapla; o fark orta suited elleri fold'dan call'a taşır. El seçiminde soru elim güçlü mü değil, kaç yelpazeye karşıyım sorusudur: tek yelpazeye karşı yüksek kart öder, suited connector atarsın. Birden çok yelpazeye karşı ise denge döner: offsuit yüksek kart ve zayıf as sürekli domine edilir, suited-bağlantılılar ve küçük çiftler nefes alır."
      },
      {
        title: "Mystery: Fiyat Yapı Sayfasında",
        bullets: [
          "Üç kalem: faz başlangıcı, havuz bölüşümü, overlay — faz öncesi zarf yok",
          "Çekiliş rejimi: sonda açılıyorsa beklenen kelle sabit, canlı açılıyorsa panoyu izle",
          "Genişleyen taraf = oranın lehine döndüğü taraf; kellen büyükse jam'i daralt"
        ],
        ruleBox: "Zarfın fiyatı çekilişte değil yapı sayfasında belirlenir; genişleme hakkı oranı taşıyanındır.",
        narration: "Her mystery'yi aynı agresyonla oynama; zarfın fiyatı çekilişte değil yapı sayfasında belirlenir. Üç kalemi oku: faz ne zaman başlıyor, havuzun ne kadarı kelleye gidiyor, overlay var mı — aynı buy-in'de ortalama zarfı katlara varan farkla oynatırlar. Faz başlamadan zarf yoktur ve eleme hiçbir şey ödemez: faz öncesini normal turnuva gibi oyna, kelle agresyonunu faz kapısında aç. Sonra çekiliş rejimini oku: zarflar sonda açılıyorsa beklenen kelle bitişe kadar sabittir, hesabı bir kez yap; canlı açılıyorsa panoya bak — büyük zarflar çekildikçe kalan ortalama düşer, küçükler süpürüldükçe yükselir, hiç çekiliş yoksa yerinden oynamaz. Son kural yön kuralıdır: kelle var diye genişleyen sen değilsin; genişleyen taraf, oranın lehine döndüğü taraftır. Kellen kendi yığınına yaklaştıysa fold equity'n öldü ve herkes seni geniş öder — jam'i daralt, yüksek-kart ağırlıklı kur; çok yönlü spotta parası gerçekten sayılan tek rakibi bul, spotu ona indirge, aralığını ona karşı fiyatla."
      },
      {
        "title": "Kelle etkisi flop'ta yaşar; turn/river'da SPR'ye bağlı söner",
        "bullets": [
          "Kök hata (derin potta): cover haritasını her sokakta yeniden uygulamak — kapsanınca kes, cover edince büyüt",
          "Cover eden flop'u geniş devam eder → turn'e çok otomatik-fold'la gelir; kapsanan o fold'larla normal barrel",
          "Ayna: kapsanan flop'u dar devam etti → barrel'a fold yok. Sönme SPR'ı yüksek kalan barrel'da (kalibre et)",
          "30-60bb'de bet-call sonrası turn SPR ~1 → asimetri kalır: cover eden geniş öder, kapsanan blöf-jam kısar"
        ],
        "ruleBox": "PKO ayarını ağırlıkla flop düğümüne yükle; bahis sonrası SPR yüksek kalıyorsa turn/river'ı kellesiz standardınla oyna, stack bağlanan turn düğümünde asimetri kalır ve kelle pot-odds'ta kalır.",
        "narration": "Kök hata derin potta cover haritasını her sokakta uygulamaktır: kapsanınca her fıçıyı kesmek, cover edince büyütmek. Cover eden flop'u daha geniş devam eder, turn'e daha çok otomatik fold'la gelir. Kapsanan o fold'ların hesabıyla normal frekansta barrel'lar. Ayna: cover eden barrel ister ama kapsanan flop'u dar devam etmiştir, fold yoktur. İki kuvvet birbirini siler, ama yalnız bahis sonrası SPR'ın yüksek kaldığı, stack'i bağlamayan turn ve river barrel'larında: orada bet frekansı, boyu ve bluff-catch eşiği iki yönde neredeyse aynıdır. Otuz ile altmış big blind baseline'ında flop bet-call sonrası turn barrel'ı SPR'ı çoğunlukla bir civarına çeker; turn stack'i bağlayan düğümdür, orada sönme yoktur: kelle pot oranında kalır, SPR düştükçe ağırlığı büyür. Cover eden kapsananın jam'ine bir kademe geniş bluff-catch eder, value jam'ini inceltir; kapsanan blöf jam'ini kısar, value jam'i standart ya da ince, cover edenin jam'ine el için katlanır. Kural: PKO ayarını ağırlıkla flop düğümüne yükle; bahis sonrası SPR yüksek kalıyorsa turn ve river'ı kellesiz standardınla oyna, stack bağlanan düğümde asimetri kalır."
      },
      {
        "title": "Cover eden flop'u: IP aralık-bet, OOP nut-devam",
        "bullets": [
          "IP: negatif prim = 'equity'ni pota daha çok it' — check-back → aralık-bet, küçük → orta boy; blöf artışı DEĞİL",
          "Artan şey aralık-bet frekansı + kalın value (kellesizde check-back edilen elle üç sokak); soru 'hangi boy'",
          "Check-raise gelince ağaç bet-call/fold: geniş devamları koruyan yol call, 3-bet'i nut'a sakla",
          "OOP (BB): eklenen devam per değil nut'a dönen çizgi (gutshot, backdoor); az fold, çok x/r, kombo draw jam"
        ],
        "ruleBox": "Kelleyi çekilişi olan ele bağla, bluff-catcher'a değil: filtre 'nut yapabilir mi?'",
        "visuals": [
          {
            "kind": "hand",
            "cards": "Jh 9h",
            "label": "OOP cover eden: nut'a dönen çizgi → check-raise/jam"
          }
        ],
        "narration": "Cover eden tarafın flop'u iki koltukta farklı çalışır. Pozisyondaysan negatif prim equity'ni pota daha çok it demektir: check-back'ler aralık-bet'e, küçük boy orta boya, equity avantajı belirginse büyük boya kayar; kademeleri kendi solver'ında kalibre et. Bu blöf artışı değildir: kapsanan rakibin aralığı kelle teşviksizdir, normal katlanır. Artan şey aralık-bet frekansı ve daha kalın value'dur; kellesizde check-back ettiğin elle üç sokak ince value alırsın. Soru check-back mi değil, hangi boy; orta boy varsayılandır, kuru yüksek kart board'da bile. Check-raise gelince ağaç bet-call ya da fold'dur: geniş yüksek kart artı backdoor devamlarını koruyan yol call'dır, üç-bet değil; üç-bet'i nut'a sakla. Pozisyon dışı big blind'daysan eklenen devamlar per değil, nut'a dönüşebilen çizgilerdir: gutshot, backdoor flush ve straight, bunları taşıyan persiz yüksek kartlar. Kelle ancak rakibi stack-off'a sokan bir el yaparsan tahsil edilir: daha az katla, daha çok check-raise, güçlü ve kombo draw'la daha çok jam, yavaş oyunu azalt. Filtre tek: nut yapabilir mi. Kelleyi çekilişi olan ele bağla, bluff-catcher'a değil."
      },
      {
        "title": "Kapsanan IP: nut avantajı equity'yi ezer",
        "bullets": [
          "Kök hata: dar açtın, equity avantajı hissettin, düşük eşleşmiş/bağlantılı board'da aralık-bet bastın",
          "Cover eden OOP orada çok geniş x/r eder (backdoor'lu suited, iki yüksek + backdoor, orta çift): kelle yolu",
          "Kapsanan IP o x/r'a çoğunlukla bet-fold'a düşer → equity avantajı büyük olsa da bet frekansı çoğunlukla DÜŞER",
          "Önce 'nut kimde?'; nut rakipteyse check-back + polar bet; A/K-high kuruda aralık-bet GERİ, bağlantılıda yok"
        ],
        "ruleBox": "Kapsananın kesilen şeyi blöftür, value değil: blöf hacmini düşür, value'yu koru, semi-blöfü equity'yle fiyatla.",
        "narration": "Kapsanan olarak pozisyondaysan kök hata şudur: dar açtığın için equity avantajını hissedip düşük eşleşmiş ya da düşük bağlantılı board'da aralık-bet basmak. Cover eden pozisyon dışı bu board'larda çok geniş check-raise eder, backdoor'lu suited eller, iki yüksek kart artı backdoor, orta çiftler, çünkü kelleye giden yol oradan geçer. Kapsanan pozisyondaki taraf o check-raise'e aralığının büyük kısmıyla bet-fold'a düşer, dar check-raise'e bile daha çok katlanır; kalibre et. Equity avantajı büyük olsa da bet frekansı çoğunlukla düşer. Kural: kapsanan pozisyonda olarak nut kimde sorusunu equity'den önce sor. Nut rakipteyse check-back oranını yükselt, bet'i polar tut, küçük aralık-bet'i çoğunlukla bırak; yüksek ve kuru board'da, nut dar aralığında sendeyken, aralık-bet'i geri getir; orta ve bağlantılı board'da check-back'i koru. Check-raise yiyince bet-fold'u kabul et, offsuit broadway'i bet-call'a zorlama. Kesilen blöftür, value değil: blöf hacmini düşür, value'yu koru, semi-blöfü fold equity beklemeden equity'yle fiyatla. Cover eden pozisyon dışı olarak aynı board'larda check-raise frekansını aç ve hedefini bil: kapsanan pozisyondaki katlanır, cover eden pozisyondaki katlanmaz."
      },
      {
        "title": "Aralık dokusu cover yönünü ezer",
        "bullets": [
          "'Cover eden daha çok bet'ler' ezberini board'dan bağımsız uygulama — cover ayarı preflop aralığını biçimler",
          "A/K-yüksek dar-kapsanana iyi → KÜÇÜK aralık-bet; nut derinse polar, blöf payını kapsanan RİSK KONUMUN kısar",
          "Düşük/bağlantılı: cover edenin geniş aralığı bağlanır → aralık-bet, sığda flop-jam; dar-kapsanan check'e yakın",
          "Stab: cover eden geniş caller polar-büyük, kapsanan yoğun caller sık-küçük (kalibre et)"
        ],
        "ruleBox": "İki soru sırayla: (1) aralığım bu board'a nasıl çarptı → frekansın ana sürücüsü; (2) cover yönü → boyu VE frekansı ikinci derecede ayarlar: blöf payı kapsananda kısılır, cover edende açılır.",
        "visuals": [
          {
            "kind": "board",
            "cards": "Ah Kd 6c",
            "label": "Dar-kapsanan aralığa iyi: kapsanan küçük aralık-bet"
          },
          {
            "kind": "board",
            "cards": "8s 7d 4c",
            "label": "Cover edenin geniş aralığı bağlanır"
          }
        ],
        "narration": "Cover eden daha çok bet'ler ezberini board'dan bağımsız uygulama. Cover ayarı preflop aralığını biçimlendirir: kapsanan dar ve yüksek kart ağırlıklı, cover eden geniş ve suited-bağlantılı açar. As ya da papaz yüksek board dar-kapsanana daha iyidir: kapsanan orada küçük aralık-bet atar; nut derinse frekansı düşürüp boyu büyütür, blöf payını kısar; kısan şey polar boyun blöf oranı değil, kapsanan risk konumudur. Düşük ya da orta-bağlantılı board tam tersi: cover edenin geniş aralığı bağlanır, aralık-bet atar; SPR düşükse, kısa-orta stack'te, kırılgan çift ve backdoor'lu yüksek kartla flop jam'e kadar gider, derinde jam sınıf değildir; dar-kapsanan aynı board'da check'e yakındır. Stab: cover eden geniş caller'a polar büyük, kapsanan yoğun caller'a sık küçük; kalibre et. Kural iki soru sırayla: aralığım bu board'a nasıl çarptı, sonra cover yönü; birincisi frekansın ana sürücüsü, ikincisi boyu ve frekansı ikinci derecede ayarlar, blöf payını kapsananda kısar, cover edende açar. Cover ediyorum cümlesi bet hakkı vermez, aralığın verir. Aralıklar cover'a göre değiştiyse doku baskındır; aynıysa cover etkisi saftır."
      },
      {
        "title": "Kelle stack'i aştıysa jam değil MIN-RAISE",
        "bullets": [
          "Kısa: 'herkes beni öder → jam' potu çok yönlü yapar (herkes kelle oddsuyla öder) → aralık çoğunlukla MİN-RAISE",
          "Min-raise (raise-fold çoğunlukla yok) zinciri değiştirir: flat'ler, biri jam'ler, flat'ler katlanır → ölü para",
          "Tek bant: prime yaklaşırken jam-ya-fold; net AŞIP kısaysa MIN-RAISE; raise-fold çoğunlukla yok, kalibre et",
          "BB cover ederken: önce kısanın jam DOKUSUNU gör; Ax'siz jam'e Ax'i geniş öde (kelle oddsu kicker'ı ezer)"
        ],
        "ruleBox": "Kelle stack'i aşınca raise-ya-fold değil jam-ya-min-raise: min-raise raise-fold değil, jam'in zincir-değiştiren varyantıdır — fold dalı çoğunlukla yok.",
        "narration": "Kellen stack'ini aştığında refleks şudur: herkes beni öder, öyleyse jam. Min-raise zinciri değiştirir: flat'ler gelir, biri jam'ler, flat'ler katlanır, o para ölü kalır. Aralık çoğunlukla min-raise; solver çok yönlü potta iyi tutan çiftleri jam'de bırakabilir, izolasyon isteyen as'ler min-raise'dedir. Tek bant: prim stack'e yaklaştıkça limp azalır, hat jam-ya-fold'a gider; prim stack'i belirgin aşıp stack de kısaysa hat min-raise'e kayar; raise-fold iki bantta da yok, sınırı kalibre et; stack kısa değilse normal open. PKO'da min-raise'in çektiği flat'ler ve tek jam, mıknatıs, burada istenen şeydir; EV farkı küçük ama tutarlı. ICM'de bu rejim yok: kelle oddsu olmadığından jam varsayılan kalır. Kapsananın ya jam ya call ağacına tek istisna: bu min-raise jam'in zincir değiştiren varyantıdır, fold dalı çoğunlukla yok. Big blind'da cover ederken as'i ne kadar geniş ödeyeceğin kısanın jam dokusuna bağlıdır. Kısa aralığını bölüyorsa, jam orta çift ve seçili suited'a sıkışmışsa, zayıf as domine değildir; as'i geniş öde, heads-up'ta kelle oddsu kicker'ı büyük ölçüde ezer. As'siz jam showdown'da görülmeden ezberi bozma."
      },
      {
        "title": "Zarfın çip fiyatı sahayla katlanır",
        "bullets": [
          "Kök hata: kellenin dolarını bulup çip değerini de sabit sanmak — havuz ödendikçe çipin doları düşer",
          "Sürücü oyuncu sayısı değil kalan saha YÜZDESİ: saha her yarılandığında çip-değeri bir basamak sıçrar",
          "Molada 4 adım: kelle $ = kelle havuzu ÷ oyuncu; çip $ = kalan toplam ödül ÷ oyundaki çip; böl, BB'ye çevir",
          "Masada 'saha yüzde kaç kaldı?' → başlangıç-stack tablosundan oku; BB cinsi ayrı soru (hızlı yapı uyarısı)"
        ],
        "ruleBox": "'Hesabı bir kez yap' DOLAR içindir; çip karşılığı her ödeme basamağında tazelenir.",
        "narration": "Kök hata kellenin dolar değerini bulup çip değerini de sabit sanmaktır. Havuz her elemeyle ödenip küçülür, oyundaki çip sabit kalır; bir çipin doları düşer ve sabit dolarlı kelle daha çok çip eder. Sürücü kalan oyuncu sayısı değil, kalan saha yüzdesidir: saha her yarılandığında zarfın çip değeri bir basamak sıçrar; eşikleri ve çarpanları kalibre et. Canlı çekilişte büyük zarflar çekilirse artış yavaşlar, küçükler süpürülürse hızlanır. Büyük sahada final masasında zarf daha çok başlangıç stack'i eder; big blind cinsinden ayrı soru, hızlı yapıda birkaç big blind uyarısı kalır. Prosedür molada dört adım. Bir: kelle doları, kalan kelle havuzu bölü kalan oyuncu; çekilenleri düş. İki: kalan toplam ödül, normal havuz artı kelle havuzu. Üç: çip doları, kalan toplam bölü oyundaki çip. Dört: kelle çipi, birinci adımdaki kelle dolarını üçüncü adımdaki çip dolarına böl, sonra big blind'a böl. Masada: saha yüzde kaç kaldı diye sor, başlangıç stack tablosundan oku. Hesabı bir kez yap kuralı dolar içindir; geç fazda daha çok çip prensibinin mekanizması budur."
      },
      {
        "title": "EK: Yapısal PKO indirimi — prim herkes için düşer",
        "bullets": [
          "Yapısal indirim: kelle havuzu ICM'lenmez (chip-lineer) → chipEV üstü PRİM yalnız ICM'lenen paydan doğar.",
          "Aynı stack dağılımında prim kellesiz turnuvaya göre belirgin düşer — KAPSANAN için de, kimseyi elemese bile.",
          "Kapsanan hâlâ prim öder (daha az), cover eden iki indirim alır. Net = ICM primi × çarpan − kelle indirimi.",
          "Derin PKO FT'de aralıklar ~chipEV; sapma kısa/kelleli yığın çevresinde. Cover eden blind flat'liyorsa aç."
        ],
        "ruleBox": "'FT'deyim, sık' refleksi PKO'da yok — prim yapısal olarak düşük; ICM refleksini yalnız kendi kellen stack'ine yaklaşınca aç.",
        "narration": "Kelle indirimi yalnız cover edende, doğru; ama ikinci, yapıdan gelen bir indirim daha var. Havuzun bir kısmı kelle havuzudur ve ICM'le dağıtılmaz. Chip değerinin üstündeki prim yalnız ICM'lenen havuz payından doğar; kelle payı kabaca chip-lineer olduğundan prim eklemez. Aynı stack dağılımında prim kellesiz turnuvaya göre belirgin düşer; kapsanan için de, kimseyi elemese bile. Yön korunur: kapsanan hâlâ prim öder ama daha az; cover eden iki indirimi üst üste alır. Net prim, ICM primi çarpı yapısal çarpan eksi kelle indirimidir; çarpanı kendi solver'ında kalibre et. Derin PKO final masasında preflop aralık şekilleri çoğunlukla chip cinsine yakın kalır; final masasındayım, sıkı oynayayım refleksi yok. Sapma yalnız kısa ve kelleli yığın çevresinde açılır; kendi kellen stack'ine yaklaştığında ICM refleksini aç. Seni cover eden blind üç-bet yerine flat'liyorsa açılışı genişlet; kapsananın sıkılığının sebebi üç-bet baskısıdır. Gelecek-oyun iki yönde: sınırdaki cover-eden call'larda bir tık gevşek ol; ama şişkin kelleli kısa varken cover'ını söndürecek marjinal gamble'dan pas."
      },
      {
        title: "Cheat: PKO / kelle kartı",
        bullets: [
          "Net prim: ICM primi eksi kelle indirimi; indirim yalnız COVER edende. Negatif prim çağrı primidir, blöf değil.",
          "Cover ediyorsan eşik düşer (nut'la koru); kapsanıyorsan ağaç ikiye iner — jam DAR, stack-off eşiği GENİŞ, küçük 3-bet bağıştır.",
          "Kelle sabit değil, çevrimi tazele; balonda kelleli kısa DAHA SIKI jam'ler (fold-equity erir); mystery'yi yapı sayfası fiyatlar."
        ],
        ruleBox: "İki primi tek sayıya indir: net prim. Geniş gir ama nut'la koru — postflop'ta tek per hâlâ bluff-catcher.",
        narration: "PKO cep kartı. Önce iki para birimini tek sayıya indir: net prim, yani ICM primi eksi kelle indirimi; ve o indirim yalnızca cover eden tarafta çalışır. Net prim negatifse bu bir çağrı primidir, blöf primi değil; genişlemeyi lineer ve call ağırlıklı yap. Cover ediyorsan call eşiğin düşer, ama aralığını en güçlü ellerle koru. Kapsanıyorsan ağacın ikiye iner, ya jam ya call; jam'in dar olur çünkü fold equity çöker, stack-off eşiğin ise genişler, ve küçük bir üç-bet burada bağıştır. Kelleyi sabit sanma; aynı kelle geç fazda daha çok chip eder, o yüzden çevrimini her büyük kararda tazele. Balon paradoksunu hatırla: kellen rakiplerin çağrısını genişlettiği için fold equity erir, bu yüzden balonda kelleli kısa, kellesizden daha sıkı jam'ler. Ve mystery bounty'de agresyonu çekiliş değil, yapı sayfası fiyatlar."
      }
    ]
  },
  {
    id: "M34",
    title: "Deep Stack ve Yüksek-SPR: Kök Hatanın En Pahalı Bandı",
    chapter: "Bölüm 29 ★",
    minutes: 6,
    slides: [
      {
        title: "Kök hatanın en pahalı sahnesi",
        bullets: [
          "200bb+ başlangıçlar: süper derin high-roller formatları, Main Day 1 (200-250bb).",
          "SPR yükseldikçe tek per DAHA ERKEN bluff-catcher olur (SPR>8).",
          "Derin oyun = kök hatanın en pahalı sürümü."
        ],
        ruleBox: "SPR ne kadar yüksekse, tek per o kadar erken bluff-catcher — deep bunun en pahalı bandıdır.",
        narration: "Kitap boyunca peşine düştüğümüz kök hata neydi? Şişmiş potta tek per'le bluff-catcher'a dönüşmek. Derin stack, işte bu hatanın en pahalı sahnesidir. İki yüz big blind ve üzeri başlangıçlar — süper derin high-roller formatları ya da Main Event birinci gün gibi iki yüz ila iki yüz elli big blind açılışlar — hep bu banda girer. Kural basit: SPR ne kadar yüksekse, tek per o kadar erken bluff-catcher olur. SPR sekizin üzerine çıktığında top per artık bir stack-off eli değildir. Bu bölümde derin oyunun preflop'unu ve yüksek SPR postflop'unu bu omurgaya bağlayacağız."
      },
      {
        title: "Aralık genişlemez, KARIŞIR",
        bullets: [
          "Flat aralığı deep'te de EN geniş kalır — bu değişmez.",
          "Güçlü eller flat/3-bet hatlarına mix'lenir → her hatta okunamazsın.",
          "İmplied odds küçük çift + suited connector'ı SINIRLI ekler; VPIP patlatmak değil."
        ],
        ruleBox: "Derinlikte aralık genişlemez, karışır — flat yine en geniş, 3-bet yine value-ağırlıklı.",
        narration: "Derinleşince çoğu oyuncunun ilk refleksi aralığı genişletmek olur. Yanlış. Derinlikte aralık genişlemez, karışır. Yani aynı güçlü eli bazen flat, bazen üç-bet hattında oynarsın; böylece hangi hatta ne tuttuğun okunamaz hale gelir. Flat aralığın yine en geniş aralığın olarak kalır — bu kural derinlikte de bozulmaz. İki yüz big blind üstünde implied odds, küçük çiftleri ve suited connector'ları flat'e sınırlı ölçüde ekler; ama bu VPIP patlatmak için bir bahane değil. Toplam üç-bet aralığın yine value-ağırlıklı kalır, her elin karışım frekansı düşüktür. Ve şunu unutma: sığ stack için kurduğun çarpan-bazlı sabit üç-bet tablosu bu derinlikte çöker."
      },
      {
        title: "3-bet aralığına orta cep koy",
        bullets: [
          "Deep 3-bet potunda düşük board + cep yok → board oynanamaz, rakip lead'le soyar.",
          "Orta cepler karışıma girince düşük boardlar da kapsanır.",
          "Nitty 3-bet → kötü flopta güçlü eller check zorunda → sonraki sokaklarda yanış."
        ],
        ruleBox: "Preflop çeşitlilik yük taşıyan direktir — orta cepsiz 3-bet aralığı düşük boardda soyulur.",
        visuals: [
          {
            kind: "hand",
            cards: "8h 8d",
            label: "Orta cep — 3-bet karışımına"
          },
          {
            kind: "board",
            cards: "7s 5c 2d",
            label: "Düşük board — cep kapsar"
          }
        ],
        narration: "Şimdi derin oyunun en az konuşulan preflop detayı: üç-bet aralığına orta cepleri koymak. Neden? Deep bir üç-bet potunda flop düşük geldiğinde — yedi-beş-iki gibi — elinde pocket pair yoksa o board'u oynayamazsın. Rakip bunu bilir ve seni lead'le soyar. Orta cepleri karışıma dahil edersen düşük board'ları da kapsarsın. Buradaki asıl ders şu: preflop'ta bıraktığın aralık boşluğu postflop'a taşar. Sadece premium el üç-bet'leyen nitty oyuncu, kötü flopta güçlü ellerini bile check etmek zorunda kalır ve sonraki sokaklarda yanar. Preflop çeşitlilik, postflop'un yükünü taşıyan direktir."
      },
      {
        title: "Yüksek SPR'de stack-off eşikleri çöker",
        bullets: [
          "Top per/overpair = pot-kontrol/check — stack-off DEĞİL.",
          "Check-raise'ler polar (semi-bluff + nut) → pot turn/river'da patlar.",
          "İyi rakibe IP daha AZ c-bet; zayıf rakibe daha ÇOK (deep check-raise bulamaz)."
        ],
        ruleBox: "Yüksek SPR'de top per/overpair varsayılanı pot-kontrol; nut avantajında geometrik overbet deep'in ANA silahıdır.",
        visuals: [
          {
            kind: "hand",
            cards: "Ah Kd",
            label: "Top per — stack-off eli değil"
          },
          {
            kind: "board",
            cards: "Kh 7d 3c",
            label: "Yüksek SPR: pot-kontrol hattı"
          }
        ],
        narration: "Gel şimdi işin kalbine: yüksek SPR'de stack-off eşikleri çöker. Sığ oyunda stack'i gömdüğün top per ve overpair, derinde pot-kontrol ve check elleridir. Check-raise aralıkları derinde polarize olur — semi-bluff artı nut — ve pot turn ile river'da patlar. Bunun pratik sonucu şu: iyi rakibe karşı pozisyonda daha az c-bet at; aralığının ortasını o polar check-raise'in içine sokma. Zayıf rakibe karşıysa daha çok c-bet at, çünkü onlar deep check-raise'i bulamazlar. Bir uyarı daha: ince value'da ve okumasız spotlarda overbet'e kendini zorlama. Ama nut avantajın varsa geometrik overbet deep'in ana silahıdır — iki yüz big blind'i potun içine sokmak erken ve büyük boy ister."
      },
      {
        title: "Check-raise equity'den, savunma temiz iki per'den",
        bullets: [
          "Deep check-raise değeri: per+FD, combo draw — ince tek per DEĞİL (3 sokak value yok).",
          "Set slowplay = numara değil, range koruması.",
          "Seni cep çifti değil, düz tamamlamayan/cooler'lanmayan TEMİZ iki per savunur."
        ],
        ruleBox: "Deep check-raise'i equity-güdümlü elle yap; savunmanı cep çifti değil temiz iki per taşır.",
        visuals: [
          {
            kind: "hand",
            cards: "9h 8h",
            label: "Per + flush draw — check-raise adayı"
          },
          {
            kind: "board",
            cards: "9c 6h 2h",
            label: "Equity'li baskı boardu"
          }
        ],
        narration: "Peki derinde check-raise'in değeri nereden gelir? Equity-güdümlü ellerden: per artı flush draw, combo draw gibi eller. İnce tek per'den değil — çünkü deep'te ince tek per üç sokak value alamaz. Set'leri slowplay etmek de numaradan değildir; aralığının bir kısmı turn baskısını kaldıramadığı için bu bir range korumasıdır. Savunma tarafında da kritik bir ayrım var: derinde seni bluff-catcher pocket pair değil, temiz iki per savunur. Temiz derken düz tamamlamayan, cooler'lanmayan iki per'den bahsediyorum. Turn ve river'da kendine sor: bu iki per temiz mi? Board bağlantısız, kart vermeyen bir yapı mı?"
      },
      {
        title: "Deep exploit ve kapanış: float → gecikmeli stab",
        bullets: [
          "Zayıf/nitty deep rakibin flop c-bet'ini float'la.",
          "Turn check-check + sıkı preflop savunma → river'da küçük IP stab over-perform eder.",
          "Guard: SPR>8'de top per/overpair varsayılanı POT-KONTROL."
        ],
        ruleBox: "SPR>8'de top per/overpair varsayılanı pot-kontrol — deep'te tek per'le stack-off, en çok chip'i en yanlış yere bağlar.",
        narration: "Son olarak deep'e özel bir exploit ve kapanış. Zayıf ya da nitty bir deep rakibin flop c-bet'ini call'la — buna float diyoruz. Turn check-check geçtiyse ve rakip preflop çok sıkı savunmuşsa, elinde orta güçte check-call elleri yoktur; river'da overfold'a yatkındır. Orada pozisyondan küçük bir gecikmeli stab, kötü kurulmuş savunmaya karşı fazlasıyla iş görür. Ama bunu bir prensip olarak al, ezber bir el olarak değil; rakibe göre kalibre et. Ve büyük resim: derin oyun kök hatanın en pahalı sürümüdür. Yüksek SPR'de tek per'le stack-off, en çok chip'i en yanlış yere bağlar. Guard'ın net: SPR sekizin üstündeyse top per ve overpair'in varsayılanı pot-kontroldür."
      },
      {
        title: "Cheat: Deep / yüksek-SPR kartı",
        bullets: [
          "Preflop aralık GENİŞLEMEZ, karışır — flat yine en geniş. 3-bet'e orta cepleri kat (düşük board kapsaması).",
          "Yüksek SPR: top pair/overpair = pot-kontrol, stack-off DEĞİL; overbet yalnız nut avantajında (geometrik overbet deep'in ana silahı).",
          "C-bet: iyi rakibe AZ, zayıfa ÇOK. Check-raise equity-güdümlü ellerden. Seni cep çifti değil TEMİZ iki-per korur."
        ],
        ruleBox: "SPR ne kadar yüksekse tek per o kadar erken bluff-catcher — derinde varsayılan pot-kontrol.",
        narration: "Deep ve yüksek SPR cep kartı. Derinlikte aralık genişlemez, karışır; flat aralığın yine en geniştir, güçlü eller flat ile üç-bet arasına dağılır. Üç-bet aralığına orta cepleri kat, yoksa düşük board'da kapsaman olmaz ve rakip seni lead'le soyar. Yüksek SPR'de top pair ve overpair pot kontrol elidir, stack-off eli değil; overbet'i yalnız gerçek nut avantajında kullan, ve unutma ki geometrik overbet deep oyunun ana silahıdır. C-bet'i iyi rakibe az, zayıf rakibe çok yap: iyi oyuncu seni polar check-raise'le cezalandırır, zayıf oyuncu deep check-raise'i bulamaz. Check-raise'lerini equity güdümlü ellerden kur, ince tek perlerden değil. Ve derinde seni bir cep çifti değil, temiz bir iki-per korur; her turn ve river'da sor, bu iki-per hâlâ temiz mi."
      }
    ]
  },
  {
    id: "M35",
    title: "Micro Stack 4-12bb — Jam/Fold İnceltmeleri ve Eşitsiz Masa",
    chapter: "Bölüm 30 ★",
    minutes: 10,
    slides: [
      {
        title: "4-12bb: Açış ya Jam ya Fold",
        bullets: [
          "Bu derinlikte ince-boy açış tablosu yok: aç = jam, ya da fold.",
          "Küçük çiftler (22-66) bandın en derin yaşayan jam'lerinden — defend edilmez.",
          "Jam = fold-equity + çağrılınca canlı equity; 'polarize spew' değil."
        ],
        ruleBox: "4-12bb'de açış kararı ikilidir: JAM ya da FOLD — küçük-raise ağaca girmez.",
        visuals: [
          {
            kind: "hand",
            cards: "5s 5d",
            label: "55 — bandın en derin yaşayan jam'lerinden"
          }
        ],
        narration: "Micro stack bandındayız: dört ila on iki big blind. Bu derinlikte açış tablon tek satıra iner; ya her şeyini ortaya koyarsın ya da pas geçersin, ince-boy raise diye bir seçenek yok. İkililerden altılılara kadar olan küçük çiftler bu bandın en derin yaşayan jam'lerindendir — bunlarla defend edilmez, derinliğini kalibre edip jam'lersin. Sakın bu jam'i polarize saçmalık sanma; o bir MTT refleksi hatası. Jam'in iki gerçek motoru var: rakipler fold ederse fold-equity kazanırsın, çağrılırsan da elinin canlı equity'si devreye girer. İkisi birlikte çalıştığı için bu jam'ler matematiksel olarak yaşar."
      },
      {
        title: "Raise Görünce: Jam-or-Fold, Flat Değil",
        bullets: [
          "Fringe eller (Q9s/J9s/QTo) bu derinlikte CALL değil, jam-or-fold.",
          "~10-12bb: min-raise üstüne re-jam gerçek fold-equity taşır.",
          "4-8bb: jam canlı equity + ölü parayla çalışır; fold-equity bekleme."
        ],
        ruleBox: "Fringe elle 'flop görmek için' call etme — kararın jam ya da fold.",
        visuals: [
          {
            kind: "hand",
            cards: "Qh 9h",
            label: "Q9s — fringe el: jam ya da fold"
          }
        ],
        narration: "Önünde bir raise var ve elinde kız-dokuz suited, vale-dokuz suited ya da kız-on offsuit gibi bir sınır eli. Bu derinlikte bu ellerle call diye bir hat yok; karar jam ya da fold. On ila on iki big blind civarındaysan min-raise'in üstüne re-jam hâlâ gerçek fold-equity taşır; rakip açtığı ellerin bir kısmını bırakmak zorunda kalır. Dört ila sekiz big blind'a düştüğünde ise fold-equity bekleme; orada jam, canlı equity artı ortadaki ölü parayla çalışır. En klasik hata, stack'inin büyük kısmını bir flop göreyim diye fringe elle call etmek. Jam-fold doktrini tam olarak bu hatayı önlemek için var. Evet, micro stack'te her şeye committed'sın — ama commit'ini JAM olarak alırsın, call olarak değil; flat-call fold-equity'yi tamamen bırakır ve kısa stack'le canlı equity'ni de kötü realize edersin."
      },
      {
        title: "BB Savunması da Jam/Fold Ekseninde",
        bullets: [
          "Deep ters-implied cezası yok → BB min-raise'e karşı geniş savunur.",
          "Ama 'savunma' = uygun elle re-jam, gerisi fold — sokak sokak flat değil.",
          "Eşik sizing'e bağlı — kalibre et."
        ],
        ruleBox: "BB'de genişlik jam genişliğidir: re-jam ya da fold, postflop flat-call değil.",
        narration: "Big blind'dayken min-raise'e karşı fiyatın gerçekten iyi, çünkü bu derinlikte deep oyunun ters-implied cezası yok; kimse seni sonraki sokaklarda büyük potlarla cezalandıramaz. Bu yüzden genişçe savunursun, orası doğru. Ama buradaki savunma kelimesini yanlış okuma. Savunma demek, uygun elle re-jam, geri kalanıyla fold demek. Sokak sokak flat-call'layıp postflop oynamak demek değil. Eşiğin tam nerede durduğu rakibin sizing'ine bağlı; onu kalibre edersin ama eksen hep aynı kalır: jam ya da fold."
      },
      {
        title: "Eşitsiz Masa: Tek Aralığa Karşı Büyük Pot",
        bullets: [
          "Jam et → biri call, diğerleri fold: tek aralığa karşı büyük pot.",
          "Caller, arkadaki reopen/squeeze tehdidiyle daha sıkı call eder.",
          "Sonuç: jam aralığın GENİŞLER; etki derinlikle büyür."
        ],
        ruleBox: "Arkadaki squeeze tehdidi caller'ı sıkılaştırır — bu senin jam aralığını genişletir.",
        narration: "Şimdi eşitsiz masa dinamiği: biri seni cover ediyor, biri senden kısa. Jam'lediğinde tipik senaryo şu; bir oyuncu call eder, diğerleri fold — ve el, tek bir aralığa karşı büyük bir pota dönüşür. İşin sana çalışan tarafı şu: call etmeyi düşünen oyuncu, arkasındaki oyuncuların potu yeniden açma ve squeeze tehdidini hesaba katmak zorunda; bu yüzden normalden daha sıkı call eder. Rakibin sıkı call etmesi ne demek? Senin jam aralığının genişlemesi demek. Bu etki derinlik arttıkça büyür; genel ICM ve multiway baskı mantığının aynısı."
      },
      {
        title: "Trap Yok — Kök Hatanın Micro Sürümü",
        bullets: [
          "4-12bb'de flat yok → flat>3-bet trap'i de yok (trap 30bb+ derin oyuna ait).",
          "Arkanda jam-happy kısa stack olsa bile plan jam-or-fold.",
          "Asıl tehlike fazla stack-off değil: fazla FOLD ve fringe'le flat-call."
        ],
        ruleBox: "'Yem yutulsun' diye flat'leme — fold-equity'siz çip bağlamak kök hatanın micro sürümüdür.",
        narration: "Son ders kitabın omurgasına bağlanıyor. Dört ila on iki big blind'da flat-call ağaca hiç girmediği için trap diye bir hat da yok; flat'leyip üç-bet bekleyen tuzak hatları otuz big blind ve üzeri derin oyuna aittir — yirmi beş ila otuz big blind bandı bile jam-fold'dur. Arkanda jam'lemeye meraklı kısa bir stack var diye yem yutulsun hesabıyla flat'lemek, kök hatanın micro sürümüdür: fold-equity'siz çip bağlarsın. Şişmiş potta tek per'le bluff-catcher'a dönüşen oyuncuyla aynı filmdesin; inisiyatifsiz, plansız para yatırıyorsun. Ve şunu iyi kavra: bu bantta asıl tehlike fazla stack-off etmek değil, fazla fold etmek. Jam ve re-jam aralığını dar tutmak ile fringe'le flat call'lamak — leak bunlar. Fringe elle jam'lemek leak değil; standart doktrinin ta kendisi."
      },
      {
        "title": "EK: 'Küçük RFI yok' cover-edilen-masa varsayımıdır",
        "bullets": [
          "30.0'ın '4–12bb açış = jam ya da fold' kuralı masanın seni cover ettiği varsayımıyla yazıldı.",
          "Arkandakiler belirgin KISA ise ~12bb'de küçük raise-fold + AJs/AQs sınıfıyla raise (jam değil) sınırda yaşar.",
          "Mekanizma: kısanın jam'i tüm stack'i, geniş call bulur → fold equity düşük → rejam daralır, raise-fold yaşar.",
          "Arkası derinse tersi: rejam onlara ucuz, reshove genişler → jam-or-fold sertleşir; 4–8bb'de doktrin aynen."
        ],
        "ruleBox": "İstisna bandın üst ucuna ve cover ettiğin masaya özgüdür; cover eden rahat rejam'ler, cover edilen primli.",
        "narration": "Dört ile on iki big blind arasında açılış ya jam ya fold kuralı, masanın seni cover ettiği varsayımıyla yazıldı. Arkandakiler belirgin kısaysa, yani sen onları cover ediyorsan, on iki big blind civarında küçük raise-fold ve as-vale, as-kız suited sınıfıyla jam yerine raise sınırda yaşar; kendi solver'ında kalibre et. Mekanizma şu: kısanın jam'i tüm stack'idir ve karşısında geniş call bulur, çünkü kalan stack'inle çoğu jam'i ödersin. Fold equity'si düşük, rejam aralığı daralır ve senin küçük raise-fold'un nefes alır. Arkandakiler derinse tersi olur: rejam onlara yalnız efektif on iki big blind'e mal olur, reshove genişler, jam ya da fold daha da sertleşir. Yirmi big blind civarında derin masanın call'ı tercih ettiği alan burada daralır: pozisyondaki call neredeyse kapanır, yalnız big blind fiyatla flat edebilir; rejam ana silah olur. İstisna bandın üst ucuna özgüdür; dört ile sekiz big blind arasında doktrin aynen durur. Yön hep aynı: cover eden rahat rejam'ler, cover edilen prim öder; efektif stack mekanizması budur."
      },
      {
        "title": "EK: ≤5bb BB, jam'e karşı — neredeyse her iki kart CALL",
        "bullets": [
          "Pot-odds: gereken equity = kalan ÷ (2×(kalan+BB) + SB + ante); jam'ci SB ise SB'yi ekleme (eşlemenin içinde).",
          "Tepesiz aralık bonus bacak (sınırda): arkasında oyuncu varsa (CO/BTN) tepe non-all-in açılır; SB→BB'de düşer.",
          "Gelecek-oyun: fold → sıradaki SB + ante seni 3bb altına iter (ölü stack); call + kazanç → diri stack.",
          "Fold yalnız ölü offsuit çöpe; min-raise'e 3–4bb'de fold yok JAM; stack arttıkça call daralır (kalibre et)."
        ],
        "ruleBox": "≤5bb BB'de jam'e varsayılan CALL — karar pot-odds ve gelecek-oyuna yaslanır; önce 'sıradaki BB'ye kaç bb'yle giriyorum?' diye sor.",
        "narration": "Beş big blind'de jam'e elim yok diye fold etmek kök hatadır. Üç mekanizma üst üste biner. Bir, pot-odds: big blind ve ante zaten pottadır, kalan stack'in küçük, small blind ve ante ölü para; jam'ci small blind ise onun blind'i eşlemenin içindedir, ayrıca ekleme; gereken equity'yi kendi elinle hesapla. İki, jam aralığı çoğunlukla tepesizdir; sınırda bonus bacak: jam'cinin arkasında hâlâ fold'a zorlanacak oyuncu varken raise opsiyonu olan stack en güçlü ellerini çoğunlukla all-in olmadan açar. Small blind'den big blind'e ya da tek rakipli jam'de bu bacak düşer, aralık tepelidir; karar birinci ve üçüncü bacağa yaslanır. Üç, gelecek-oyun: fold edersen sıradaki blind ve ante seni üç big blind'in altına iter, oradan double bile ölü stack; call edip kazanırsan diri stack. Kural: beş big blind ve altında jam'e varsayılan call; fold yalnız ölü offsuit çöpe, önce sıradaki big blind'e kaç big blind'le giriyorum diye sor. Min-raise'e karşı pot-odds'un çöktüğü bantta fold yok, jam; kendi solver'ında kalibre et."
      },
      {
        "title": "EK: ≤15bb BB postflop — düşük board'da lead JAM ya da CHECK",
        "bullets": [
          "Sığda KORUMA ve FOLD ETTİRME ele geçirir; bare overcard/gutshot KATLANIR, overcard'lı üst kent draw ÖDER.",
          "Ağaç üç düğüm: jam / küçük / check. Jam sınıfı: top/orta per, overcard'lı kent draw, gutshot + overcard.",
          "Tuzak: iki per, kent, set, güçlü top-pair kısmen CHECK'te — test: 'kötü turn'den korkuyor mu?' Korkuyorsa jam.",
          "EP açıcı: overpair-yoğun aralık ıskalamaz, BB avantajı NUT → KONTROL: check ağırlıklı, jam nut + iyi draw."
        ],
        "ruleBox": "Flop jam aralığın yoksa IP her eliyle bedava turn'e geçer — sığda ilk parayı koyan olmak pozisyondan değerlidir.",
        "visuals": [
          {
            "kind": "board",
            "cards": "8c 6d 3h",
            "label": "BTN açıcıya karşı düşük-orta board: jam / küçük / check"
          },
          {
            "kind": "hand",
            "cards": "9h 8h",
            "label": "Kırılgan top pair → jam sınıfı"
          }
        ],
        "narration": "On beş big blind ve altında, rakip daha derin açtı, big blind'de flat'ledin. Sığda hesabı iki şey ele geçirir: korumak ve fold ettirmek; alt per bile on big blind civarında çoğunlukla stack-off sınıfıdır. Jam'in fold equity kaynağı bare overcard'lar ve gutshot ya da tek overcard'lı zayıf draw'lardır; overcard'lı üst kent draw'ları öder, onlara karşı jam'in değeri bedava kart vermeyip equity'yi anında realize etmektir. Ağaç üç düğüm: jam, küçük, check; jam sınıfı üst ve orta per, overcard'lı kent draw. Tuzak: iki per, kent, set ve güçlü üst perin bir kısmı check'te, yoksa check aralığın çıplak kalır; test: kötü turn kartından korkuyor mu, korkuyorsa jam. Erken pozisyon açıcının overpair-yoğun dar aralığı düşük board'u ıskalamaz; equity avantajı onda kalır, big blind'in avantajı nut'tur. Overpair'ler katlanmaz, küçük ve sık lead değil kontrol: aralık çoğunlukla check, jam yalnız nut'a yakın sınıf ve en iyi kent draw'larına; küçük lead nut-ağırlıklı ve seyrek. Sınırları kendi solver'ında kalibre et."
      },
      {
        title: "Cheat: Micro 4-12bb kartı",
        bullets: [
          "Açış JAM ya da fold — küçük-RFI tablosu YOK. Küçük çiftler bandın en derin yaşayan jam'lerinden, DEFEND edilmez.",
          "Raise+'a karşı fringe: jam-or-fold, flat değil (yeterli derinlikte re-jam fold-equity taşır, çok kısada canlı equity+ölü para).",
          "Eşitsiz masa: arkadaki reopen/squeeze caller'ı sıkar → jam aralığın GENİŞLER. Asıl leak fazla stack-off değil, fazla FOLD."
        ],
        ruleBox: "Fringe-JAM doktrindir, spew değil — trap-flat yok; BB'nin min-raise'e kapatan flat'i ayrı, o savunma.",
        narration: "Micro stack cep kartı, dört ile on iki büyük kör arası. Bu bantta açış jam ya da fold'dur; ince boy açış tablosu yoktur. Küçük çiftler bu bandın en derin yaşayan jam'lerindendir ve defend edilmez. Bir raise ya da üstüyle karşılaşınca fringe ellerin cevabı da flat değil, jam ya da fold'dur: yeterli derinlikte re-jam gerçek fold equity taşır, çok kısada ise jam canlı equity ve ölü parayla çalışır. Eşitsiz masada, arkadaki yeniden-açış ya da squeeze tehdidi caller'ı sıktığı için jam aralığın genişler, ve bu etki derinlikle büyür. Bu bantta asıl leak fazla stack-off değil, fazla fold etmek ve fringe ellerle flat-call'dur. Fringe jam bir doktrindir, spew değil. Trap için flat de yoktur; büyük körün min-raise'e karşı aksiyonu kapatan flat'i ise bundan ayrıdır, o bir savunmadır."
      }
    ]
  },
  {
    id: "M36",
    title: "BB-Ante Heads-Up",
    chapter: "Bölüm 31 ★",
    minutes: 9,
    slides: [
      {
        title: "BTN'den %100 VPIP — fiyatın hakkı",
        bullets: [
          "Ölü ante: yarım BB ile ~3BB'lik pota IP giriş — pokerin en iyi fiyatlarından.",
          "BTN'den hiçbir el fold edilmez → %100 VPIP.",
          "Rakibin bir BTN fold'u başlı başına tell: çöp atmış + HU acemisi."
        ],
        ruleBox: "BB-ante HU'da BTN'den hiçbir el fold edilmez — %100 VPIP bu fiyatın hakkıdır.",
        visuals: [
          {
            kind: "hand",
            cards: "7h 2c",
            label: "En kötü el bile oynanır"
          }
        ],
        narration: "Heads-up'a geldiğinde ilk kural, fiyatı görmek. Big blind ante yapısında buton'dan yarım big blind ekleyerek yaklaşık üç big blind'lik pota pozisyonlu giriyorsun; bu, pokerin sana sunduğu en iyi fiyatlardan biri. O yüzden buton'dan hiçbir el fold edilmez — yüzde yüz oynuyorsun, yedi-iki dahil. Bunun bir de istihbarat tarafı var: rakibin bir kez buton fold'ladığını görürsen bu başlı başına bir tell. Hem çöpü aralığından atmış hem de heads-up tecrübesizliğini ilan etmiş demektir. Sen o hatayı yapma; ölü antenin parasını masada bırakma."
      },
      {
        title: "Derinliğe göre limp/raise",
        bullets: [
          "Derin → raise ağırlıklı (çok derin ~raise-only); sığ → limp ağırlıklı.",
          "~15-16bb üstünde IP jam kaybolur, limp öne geçer (eşiği kalibre et).",
          "Çok sığda polar limp: trap + çöp; pasif rakibe dengeyi bırak."
        ],
        ruleBox: "Derinleştikçe raise, sığlaştıkça limp; orta-sığ derinliğin üstünde IP jam kaybolur — eşikleri kendi solver'ında kalibre et.",
        visuals: [
          {
            kind: "hand",
            cards: "Ah Ad",
            label: "Polar limp: trap"
          },
          {
            kind: "hand",
            cards: "8h 3d",
            label: "Polar limp: çöp"
          }
        ],
        narration: "Buton stratejin derinlikle birlikte kayar. Çok derinken neredeyse sadece raise ediyorsun; stack kısaldıkça limp ağırlık kazanıyor. Asıl sürpriz şurada: orta-sığ derinliğin üstünde, aşağı yukarı on beş ila on altı big blind civarının üzerinde, pozisyonlu jam stratejiden kayboluyor ve limp öne geçiyor. Çok sığ stack'lerde bile polar bir limp aralığı var: tuzak eller artı çöp. Bu eşikler yön gösterir, nokta atışı değildir — kendi solver çalışmanla kalibre et. Bir de pratik taraf: pasif bir rakibe karşı dengeyi tamamen bırak; çöpünü limp'le, iyi elini raise'le, kimse fark etmeyecek."
      },
      {
        title: "Capped kalmanın gerçek maliyeti",
        bullets: [
          "Capped rakibe karşı value HACMİ ve BOYU büyür — ince value'yla overbet/jam açılır.",
          "O hacme eşlik eden blöfler de eklenir → EV iki kanaldan kesilir.",
          "Trips/nut'un bir kısmı check-call'da kalır → aralık uncapped."
        ],
        ruleBox: "Capped kalmanın cezası \"blöf yerim\" değil, \"rakip hem daha çok hem daha büyük value bet'ler + yanına blöf ekler\" — uncapped check-call iki kapıyı birden kapatır.",
        visuals: [
          {
            kind: "hand",
            cards: "9d 8d",
            label: "Trips check-call'da → uncapped"
          },
          {
            kind: "board",
            cards: "9s 9c 4h",
            label: "Eşli board"
          }
        ],
        narration: "Şimdi kitabın omurgasına bağlanıyoruz. Trips'inin ve nut'larının bir kısmını check-call hattında tutmanın sebebi 'rakip bana çok blöf atar' korkusu değil. Asıl mesele şu: capped olduğunu bilen rakip value bahis hacmini de boyunu da büyütür; ince value'yla bile overbet ve jam kapısı açılır, üstüne o hacme eşlik eden blöfler eklenir. Yani cezayı iki kanaldan birden yersin, EV akışı tamamen kesilir. Check-call aralığını uncapped tuttuğunda o iki kapıyı birden kapatıyorsun. Kök hatayı hatırla: şişmiş potta tek per'le bluff-catcher kalmak. Heads-up'ta da aynı disiplin geçerli; tek fark, aralıkların çok daha geniş olması."
      },
      {
        title: "Check-back inşası ve gecikmiş blöf",
        bullets: [
          "HU'da flop check-back MTT'den kat kat sık — bilinçli inşa şart.",
          "Sıfır-showdown aday yoksa river hep A-high/per → rakip sana blöf atmayı keser.",
          "Run-out'taki orta kart (ör. 9): board'a düşerse blöfü kıs; elindeyse blocker avantajı."
        ],
        ruleBox: "Check-back aralığına bilinçli sıfır-showdown aday koy — yoksa rakip sana blöf atmayı keser ve value'n ödeme bulamaz.",
        visuals: [
          {
            kind: "hand",
            cards: "Th 9h",
            label: "Elinde 9 → rakibin A9/K9'u bloke"
          },
          {
            kind: "board",
            cards: "Kd 7c 2s 9s",
            label: "Turn'de orta kart 9"
          }
        ],
        narration: "Heads-up'ta flop check-back, tam masaya göre kat kat daha sık ve burada bilinçli bir inşa gerekiyor. Check-back aralığına sıfır-showdown-değerli adaylar koymazsan river'a hep as-yüksek ve tek per taşırsın. O zaman aralığın value ağırlıklı görünür ve rakip sana blöf atmayı keser — çünkü blöf iştahı, senin aralığının şeklinin bir fonksiyonu — üstelik kendi value elin de ödeme bulamaz. Gecikmiş blöfünü, rakibin fold edeceği elleri unblock eden adaylardan seç. Bir de gizli tuzak var: run-out'a düşen dokuz gibi bir orta kart, rakibin as-dokuz ve papaz-dokuz tipi check-back sınıfına sessizce per verebilir; o board'larda blöfü kıs. Ama elinde bir dokuz varsa iş tersine döner: o kombolar bloke olur, blöf adayın güçlenir."
      },
      {
        title: "Lead yok, rainbow'da büyük boy",
        bullets: [
          "HU'da iki taraf aynı geniş aralıkla oynar → lead/donk aralığı kurulamaz.",
          "ICM lead istisnaları ring içindir; HU'ya taşınmaz.",
          "Büyük c-bet boyunun evi rainbow/statik board — 'kuru = 1/3' ezberi edge'i masada bırakır."
        ],
        ruleBox: "HU'da lead yoktur; büyük c-bet boyları flush-draw'lu değil, RAINBOW/statik board'da toplanır.",
        visuals: [
          {
            kind: "hand",
            cards: "Qs Qc",
            label: "Overpair — büyük polar boy"
          },
          {
            kind: "board",
            cards: "Td 7s 2h",
            label: "Rainbow, statik board"
          }
        ],
        narration: "İki ders aynı kökten geliyor: heads-up'ta iki taraf da aynı geniş aralıkla oynar, yani aralık asimetrisi yok. Tam masada lead'i doğuran şey asimetriydi; düşük ve bağlantılı board 'senin' sayılırdı. Heads-up'ta öyle bir board yok, dolayısıyla lead aralığı kurulamaz; ring oyunundaki ICM lead istisnaları da buraya taşınmaz. İkinci ders bahis boyu: büyük c-bet boylarının asıl evi rainbow ve statik board'lardır, flush-draw'lı board'lar değil. Geniş aralıklı potlarda overpair ya da en iyi tepe per avantajın büyükse, kuru board'da büyük polar boy doğrudur. 'Kuru board eşittir üçte bir pot' ezberi burada equity avantajını masada bırakır."
      },
      {
        title: "Hızlı tell döngüsü ve küçük çift jam",
        bullets: [
          "VPIP ~%100 → tek data-point'ten agresif projeksiyon meşru (timing/sizing/hat).",
          "Küçük çiftler derinde bile rejam adayı; ~20-25bb üstünde jam değil raise (kalibre et).",
          "Yarım-pot orta boy teli: ne geniş-value ne polar — iki işlevi de öldürür."
        ],
        ruleBox: "Orta boy (yarım-pot) iki işlevi de öldürür — ya minik ya büyük/polar; ve tek data-point'ten okuma HU'da meşrudur.",
        visuals: [
          {
            kind: "hand",
            cards: "4h 4d",
            label: "Küçük çift — derinde bile rejam adayı"
          }
        ],
        narration: "Son parça, hızlandırılmış okuma döngüsü. VPIP yüzde yüz olduğu için eğilimler birkaç elde açığa çıkar; tek data-point'ten agresif projeksiyon burada meşru. Telleri üç kanaldan oku: timing, sizing ve hat. Derin stack'te bir çifti düşünmeden flat'leyen rakip pot kontrolü ilan etmiştir; river'da seni pota iten snap-call ise 'raise menümde yok' itirafıdır, pozisyonsuz ince value boyunu büyüt. Preflop tarafında bir MTT refleksini kır: küçük çiftler open'a karşı şaşırtıcı derinliğe kadar rejam adayı kalır, ama yirmi ila yirmi beş big blind üstünde jam yerine raise standarttır; eşiği kendi solver'ında kalibre et. Bir tell daha: yarım-pot orta boyu seven oyuncu genelde kabiliyetli ama ileri değildir — doğru boylar ya miniktir ya büyük ve polardır, ortası iki işlevi de öldürür. Son uyarı: MTT eliti bile heads-up'ta göreli acemidir; ama senin basitleştirmelerini de senden tecrübelisi aynı şekilde avlar."
      },
      {
        "title": "EK: Pozisyon aynası — 'derinleştikçe raise' BvB SB'de de",
        "bullets": [
          "31.1 derinlik eğrisi IP limp içindir (HU-BTN limp'ini OOP rakip iso eder).",
          "SB limp'i OOP, iso IP'den gelir, derinlikle büyür → yön aynı: derinde raise-first, sığda limp, ~12bb altı jam.",
          "Fark seviye/doku: raise'in çağrılma dalı OOP pahalı → SB daha geniş, MERGED limp'ler; limp-reraise sınırda.",
          "Değişen yön değil MOTOR: IP'de 'ucuz flop görme', OOP'ta 'raise'in çağrılma dalından kaçınma + SPR kapanı'."
        ],
        "ruleBox": "Aynalanan eğri değil, pozisyon ve motordur: yön aynı kalır, değişen seviye ve doku — SB daha geniş ve merged limp'ler, limp-reraise dilimi sınırda.",
        "narration": "Bu modülün derinlik eğrisi pozisyondaki limp içindir. Blind'e karşı blind'de small blind limp'i pozisyon dışıdır, iso pozisyondan gelir ve pozisyondaki iso derinlikle çoğunlukla büyür. Dolayısıyla eğri çoğunlukla tersine dönmez, aynı yönde kalır: derin uçta small blind de limp payını küçültüp raise-first'e kayar; sığlaştıkça, kabaca on iki ile on beş big blind'e kadar, limp ağırlıklaşır; daha altında limp yerini open-jam'e bırakır. Fark limp-reraise'in varlığı değil, eğrinin seviyesi ve limp'in dokusudur. Raise-fold'un preflop maliyeti iki tarafta aynıdır; fark raise'in çağrıldığı dalda çıkar: pozisyon dışı raise çağrılınca büyümüş potta pozisyon dışı kalırsın, bu yüzden small blind aynı derinlikte heads-up button'dan çoğunlukla daha fazla limp'ler. Fazlalık raise-fold'dan kaçan orta ellerdir; derin uçta small blind'in limp dilimi daha geniş ve daha merged'dır, limp-reraise dilimi korunur ama oransal payı büyük değildir, sınırda. Derin kolda limp sıfıra inmez; kendi solver'ında kalibre et. Değişen yön değil, motor ve seviyedir: pozisyonda ucuz flop görme, pozisyon dışında raise'in çağrılma dalından kaçınma artı stack pot oranı kapanı."
      },
      {
        title: "Cheat: BB-ante HU kartı",
        bullets: [
          "BTN preflop %100 VPIP — hiç fold yok: derinleştikçe raise, sığlaştıkça limp. Pasife karşı dengeyi bırak (çöpü limp, iyiyi raise).",
          "Capped kalma çift-cezalı → check-back adayı koy (uncapped kal). Lead/donk YOK — aralıklar simetrik, 'senin board'un' kurulamaz.",
          "Boy: rainbow/statik = büyük-polar boy evi; makul-orta boy acemi telidir. Küçük çift BTN-açışına karşı BB'den şaşırtıcı derinliğe rejam."
        ],
        ruleBox: "HU'da 'kuru = üçte bir' ezberi equity-edge'i masada bırakır; boylar ya minik ya büyük-polar.",
        narration: "Heads-up ve büyük kör ante cep kartı. Buton'da preflop yüzde yüz VPIP oynarsın, hiçbir el fold değildir: derinleştikçe raise'e, sığlaştıkça limp'e kayarsın. Pasif rakibe karşı dengeyi bırak, çöpü limp'le, iyi eli raise'le. Capped kalmak çift cezalıdır, çünkü rakip hem value hacmini hem boyunu büyütür ve yanına blöf ekler; bu yüzden bilinçli bir check-back adayı koy ve uncapped kal. Lead ya da donk yoktur, çünkü aralıklar simetriktir ve senin board'un diye bir şey kurulamaz. Boy tarafında rainbow ve statik board'lar büyük ve polar boyun evidir; makul orta boy, yani yaklaşık yarım pot, çoğu zaman acemi telidir, boylar ya minik ya büyük ve polar olur. Ve küçük çiftler, buton açışına karşı büyük körden şaşırtıcı derinliklere kadar yeniden jam adayıdır."
      }
    ]
  },
  {
    "id": "M37",
    "title": "3-bet Pot Postflop",
    "chapter": "Bölüm 32 ★",
    "minutes": 14,
    "slides": [
      {
        "title": "Tez: boyu board değil, el sınıfı seçer",
        "bullets": [
          "3-bet potunda boyu board dokusu tek başına değil; dokunun ıskalattığı blok + el sınıfı seçer",
          "Kök hata (nut avantajının eridiği dokuda tek perle stack-off) ŞİŞİRENİN hatasıdır: lisans SPR + dokuya bağlı",
          "3-bettor'ın Ax'i oranca yoğun, sınıfça uç-ağırlıklı (AA/AK/AQ + suited tekerlek); caller'ınki orta, geniş",
          "Fold: offsuit broadway + suited çöp. A-high'da büyük boy gereksiz: Ax'i katlatmaz, blöfü pahalatır"
        ],
        "ruleBox": "Her flop'ta soru: hangi blok ıskaladı, hangi boy onu katlatır?",
        "narration": "Üç-bet potunda boyu board dokusu tek başına seçmez; dokunun hangi bloğu ıskalattığı ve el sınıfı seçer. Şişmiş potta tek perle stack-off yapmak şişirenin hatasıdır. Aralık ve nut avantajı ona sığ SPR'de jam, derin SPR'de polar boy lisansı verir; lisansı SPR'ye ve dokuya bakmadan kullanmak kök hatanın ta kendisidir. Kuru düşük dokuda overpair derinde de çoğunlukla stack-off elidir; eriyen yer bağlantılı iki-broadway dokudur. Üç-bet eden as'li elle doludur cümlesi eksiktir. Üç-bet edenin as'i oran olarak yoğun ama sınıf olarak dar ve uç ağırlıklıdır: as çifti, as-papaz, as-kız ve suited tekerlek blöfleri. Caller'ınki orta sınıf, geniş ve dominedir. İki sonuç: fold blokları offsuit broadway ve suited çöp; her flop'ta sor, hangi blok ıskaladı, hangi boy onu katlatır. Ve as-yüksek board'da caller'ın as'lerini azımsama: küçük bet ucuz olduğu için verimlidir; büyük bet caller'ın as'ini yine katlatmaz, yalnız blöflerin fiyatını artırır ve senin dar as'lerini polar bir ağaca zorlar; as-yüksek'te büyük boy çoğunlukla gereksiz."
      },
      {
        "title": "Sığ SPR ağacı: jam ya da check",
        "bullets": [
          "~40bb, orta-bağlantılı board (T-9-x): iki aralık da ıskalamaz; caller'ın 'bir şeyi' zayıf ama katlanamaz",
          "Jam: top pair, overpair, iki-overcard + draw. Check: alt per, zayıf Ax, çekilişsiz AK, top set tuzağı",
          "Ara boylar aynı elleri düşük frekansta oynatan kopya; atınca EV kaybı ~sıfır (node-lock, kalibre et)",
          "SPR ~3-4+ (kalibre et): flop jam çoğunlukla sınıf değil → iki boy; J-T-x en yakını, büyük boy sınırda"
        ],
        "ruleBox": "SPR ≲2 orta-bağlantılı board'da ağaç iki dallı: jam ya da check — ara boy yok; daha sığda caller'ın top pair'i de çoğunlukla call-off'a iner (kalibre et).",
        "visuals": [
          {
            "kind": "board",
            "cards": "Ts 9d 4c",
            "label": "Orta-bağlantılı, sığ SPR: jam ya da check"
          }
        ],
        "narration": "Kırk big blind civarında, orta-bağlantılı bir board düşün: onlu-dokuz-x. İki aralık da neredeyse ıskalamaz. Caller'da orta ve alt perler, düz çekilişleri var; sende top pair, overpair ve iki overcard'lı çekilişler. Caller'ın eli seninkinden zayıftır ama katlanamayacak kadar equity taşır. Flop jam'i bunu paraya çevirir: equity'ni tamamen realize edersin, geride-ama-equity'li elleri katlatırsın. Ağaç iki dallı. Jam dalında top pair, overpair ve overcard'lı güçlü çekilişler. Check dalında alt per, zayıf as'ler, çekilişsiz as-papaz ve tuzak olarak top set. Ara boylar kopyadır; kendi solver'ında kilitleyip at, EV kaybı neredeyse sıfır çıkar. Capped caller için tek per bluff-catcher satırı SPR iki civarında geçerlidir; daha sığda onun top pair'i de çoğunlukla call-off'a iner, potu başlatmaz ama jam'e katlamaz. Sınırı unutma: SPR üç-dört ve üstünde flop jam çoğunlukla hiçbir board'da sınıf olarak kalmaz; yerini küçük ve büyük olmak üzere iki boy alır. Jam'e en yakın doku, overcard'larının nut gutshot aldığı vale-on-x tipi board'dur: büyük boy artı turn stack-off ağırlığı, ama sınırda; kalibre et."
      },
      {
        "title": "Derinlik ve alt-çift pusulası",
        "bullets": [
          "40bb: Ax top pair her runout'ta stack-off → flop bet. 100bb: üç sokak = tek perle stack → atlanan sokak RIVER",
          "Alt-çift pusulası: flop'ta sor 'TT-QQ bet istiyor mu?' — boyu value'nun en KIRILGAN katmanı seçer",
          "A-K-x: alt çift check; Ax + gutshot blöf polar → büyük boy, frekans YÜKSEK kalır. A-J-x: küçük, tam-aralık",
          "A-J-x + fd: istemez (A-K-x gibi). Pusula BOYU seçer, frekansı aralık avantajı; alt çift tavan, SPR taban"
        ],
        "ruleBox": "Alt çift bet istiyorsa lineer küçük; istemiyorsa polar büyük + alt çift check — pusula boyu seçer, frekansı aralık avantajı; alt çift tavanı, SPR tabanı koyar.",
        "visuals": [
          {
            "kind": "board",
            "cards": "Ah Kd 4c",
            "label": "Alt çift check → aralık polar"
          },
          {
            "kind": "board",
            "cards": "Ah Jd 4c",
            "label": "Alt çift küçük value → tam-aralık"
          }
        ],
        "narration": "Derinlik top pair'in sokak sayısını belirler. Kırk big blind'da as'li top pair her runout'ta stack-off eder. Yüz big blind'da üç sokak, stack'i river'da tek perle içeri sokmaktır; çoğu river'da jam value değildir. Atlanan sokak flop değildir: as'li top pair flop'ta çoğunlukla bet eder, atlanan river, bazen turn; zayıf kicker daha çok kontrol eder, kalibre et. As'li top pair çoğunlukla iki sokak artı river kontrolü elidir; bet-bet-jam kırk big blind refleksidir. Pusula: boyu value'nun en kırılgan katmanı seçer; flop'ta sor, alt çiftlerim bet istiyor mu. As-papaz-x'te istemez: caller'ın papazı geçmiş, katlattığı geride, çağırdığı daha iyi per; alt çift check; as'ler ve gutshot blöfler polar, büyük boy, frekans yine yüksek: aralık avantajı tepe yapar, yalnız alt çift katmanı düşer. As-vale-x'te ister: papaz ve kız persiz overcard'dır, küçük bete katlanır ya da call eder; küçük boy, tam aralık. Flush draw eklenince as-vale de istemez: turn'de blöf atabilecek çekiliş artar. Pusula boyu seçer, frekansı aralık avantajı; alt çift boyun tavanını koyar, tabanını SPR."
      },
      {
        "title": "Board sınıfları I: üç sürücü, A-high, broadway",
        "bullets": [
          "Üç sürücü: nut kimde (dokuyu bu ayırır); SPR (≲2 jam/check, ~3-4 iki-boy, kalibre et); turn-jam tehdidi",
          "A-6-2 kopuk: tam-aralık küçük. A-3-2 wheel 100bb: check payı artar — caller'ın wheel/set payı değerlenir",
          "A + broadway: pusula — A-K-x Ax polar büyük, frekans yüksek; A-J-x lineer küçük; 100bb'de Ax kısmen check",
          "Dinamik J-T-x: sığda tehdit flop boyunun işini yapar (büyük/jam), derinde pot-boy. K-Q-T HER derinlikte küçük"
        ],
        "ruleBox": "Sınıfı board etiketi değil 'nut kimde + SPR + turn-jam tehdidi' verir: sığda dinamik dokuda tehdit flop boyunun işini yapar, derinde yalnız pot-boy'la korunur.",
        "narration": "Sınıfları ezberleme, üç sürücüden türet. Bir: nut kimde; yalnız yüksek kartlı dokularda sende; caller'daysa boy küçülür ya da check artar. İki: SPR; sığda jam ya da check, yüz big blind'da iki boy, flop jam çoğunlukla yok. Üç: turn jam tehdidi, doku koşulludur; sığda dinamik dokuda tehdit flop boyunun işini yapar, çıplak çekilişi kayıtsız bırakır, büyük boy ya da jam çalışır; derinde yalnız pot boy flop'la korunur, dinamik dokuda pot boy; ince nut dokuda her derinlikte küçük. As-yüksek kopuk: her derinlikte tam aralık küçük. Wheel-bağlantılı as-yüksek sınırdır: caller'da düşük set ve wheel var; yüz big blind'da check payı artar; sığda düşük SPR bunu bastırır. As artı broadway alt çift pusulasıyla oynar: as-papaz-x'te as'ler polar büyük ve frekans yüksek, alt çift check; as-vale-x'te lineer küçük. Vale-on-x'te yüz big blind'da jam yok; nut gutshot'lı bu dinamik dokuda pot boy, büyük boy sınırda. Üç broadway'de her derinlikte küçük: caller'da iki per ve düz yoğun, nut avantajı ince; büyük boy onların kesimine commit olmaktır."
      },
      {
        "title": "Board sınıfları II: düşük, eşleşmiş, mono",
        "bullets": [
          "Düşük kopuk (6-5-2): aralık/overpair avantajı sende, NUT (set/iki-per) caller'da → nut avantajı yok",
          "Sığda büyük (commit + erime); 100bb merged → küçük-orta, kırılgan overpair bir kademe büyük (kalibre et)",
          "Eşleşmiş: trips caller'da (9-7-7) → jam/check, 100bb orta (kalibre et); tek yüksek kart sende (A-J-J) → küçük",
          "Mono 'nut flush kimde?': A+düşük check ağırlıklı; A-yok kopuk orta küçük; bağlantılı/K-high check ağırlıklı"
        ],
        "ruleBox": "Düşük kopukta nut caller'da: sığda büyük, 100bb küçük-orta; eşleşmiş/mono'da soru 'trips / nut flush kimde?'",
        "visuals": [
          {
            "kind": "board",
            "cards": "6h 5d 2c",
            "label": "Düşük kopuk: sığda büyük, 100bb küçük-orta"
          },
          {
            "kind": "board",
            "cards": "9s 7s 2s",
            "label": "Mono, A yok, kopuk: çoğunlukla küçük"
          }
        ],
        "narration": "Düşük kopuk board: aralık ve overpair avantajı sende ama nut caller'da. Sığda boy büyüktür: SPR commit ettirir, overpair erimeden value alır. Yüz big blind'da kütle merged'dır: küçük-orta boy, yüksek frekans; kırılgan overpair bir kademe büyük, as ve papaz cepleri değil. Eşleşmiş board'da soru trips kimde. Caller'da trips olası dokuz-yedi-yedi'de sığda jam ya da check, yüz big blind'da orta boy; orta katman küçüğe tam call eder. Tek yüksek kart sendeyse, as-vale-vale, küçük. Mono'da soru nut flush kimde. As artı iki düşükte nut flush draw avantajın yok, caller'ın düşük suited kombolarıyla flush yoğunluğu fazla; check ağırlıklı, küçük karışık. As'sız kopuk orta mono'da suited as'lerin nut flush ya da flush draw olarak kaldı, çoğunlukla küçük; caller'ın flush yoğunluğu büyüdükçe check payı büyür. Bağlantılı orta mono'da suited as'lerin yine sende, ama caller'ın nut olmayan flush ve kent yoğunluğu büyür, overpair'in kent karşısında değer kaybeder; check ağırlıklı, sınırda küçük dürtme. Papaz-yüksek mono'da da caller'ın nut olmayan flush yoğunluğu check ağırlıklı tutar; yüksek broadway mono sınırda."
      },
      {
        "title": "Boyut: kayıtsızlık fiyatı ve polar pot-boy",
        "bullets": [
          "Önce 'hangi sınıfı katlatmak istiyorum?', sonra 'hangi boyda kayıtsız?' — trips-olası eşleşmişte yarım pot",
          "İki yüksek kart (K-Q-6): pot-boy polar; value TPTK + overpair; blöf ALT PER (asız 6x) + yüksek gutshot + fd",
          "Check: ikinci per + alt cep. Frekansı VALUE sayısı tavanlar; fazla blöf adayı yalnız seçilen blöfü değiştirir",
          "Kırılgan overpair: boyu SPR + erime seçer, nut kıtlığı değil. Turn SPR: pot-boy → <1 jam/check; yarım → ~1.5"
        ],
        "ruleBox": "Boyu hedef katmanın kayıtsızlık fiyatı seçer; iki-yüksek-kart board'da blöf alt perden gelir.",
        "visuals": [
          {
            "kind": "board",
            "cards": "Kd Qc 6h",
            "label": "İki yüksek kart: pot-boy polar"
          },
          {
            "kind": "hand",
            "cards": "6h 5h",
            "label": "Asız 6x blöf (65s/64s): 66/K6/Q6'yı bloklar, cepleri/Ax'i değil"
          }
        ],
        "narration": "Boyu hedef katmanın kayıtsızlık fiyatı seçer. Önce hangi sınıfı katlatmak istediğini sor, sonra o sınıfın hangi boyda kayıtsız kaldığını. Caller'da trips olası eşleşmişte orta katman küçüğe çoğunlukla call eder, yarım potta kayıtsızlaşır; tek yüksek kartlı eşleşmişte caller'ın katmanı küçüğe zaten katlanır, boy büyütme. İki yüksek kartlı board'da, papaz-kız-altı gibi, pot boy polar. Caller'ın kızları ve orta cepleri yarım pota tam call eder; pot boy alt cepleri katlatır, kızı sınıra iter. Value, güçlü kicker'lı top pair ve overpair. Blöf alt perden gelir, as'sız altılı: caller'ın altılı çiftini, kız-altı ve papaz-altı'sını bloklar ama katlatmak istediğin cepleri ve as'leri bloklamaz; yanına yüksek gutshot ve flush draw. İkinci per ve alt cep check'te kalır. Bet frekansını value sayısı tavanlar; fazla blöf adayı frekansı değil hangi blöfün seçildiğini değiştirir. Düşük kopukta kırılgan overpair'in boyunu SPR ve erime seçer, nut kıtlığı değil; nut caller'dadır. Turn SPR'sini önceden gör: pot boydan sonra jam ya da check, yarım pottan sonra turn yarım pot, river jam."
      },
      {
        "title": "IP/OOP ve check-node hatları",
        "bullets": [
          "OOP 3-bettor'ın tam-aralık küçük bet'i meşru: kopuk A-high tam-aralık; A-yok kopuk mono ÇOĞUNLUKLA küçük",
          "Turn JAM tehdidi: dinamik J-T-x'te sığda büyük, derinde pot-boy; K-Q-T çoğunlukla küçük (nut ince)",
          "IP check-node (K-Q-x): OOP check aralığı nut + korunmuş orta → küçük stab az katlatır → yarım pot (kalibre et)",
          "Caller'san bağlantılıda stab çoğunlukla geniş (kalibre et); overcard düz çeker mi? 8-7-6 seçici, 9-5-2 serbest"
        ],
        "ruleBox": "DÜŞÜK/bağlantılı board'da OOP 3-bettor çoğunlukla check eder, IP caller stab eder; K-Q-x check-node'da yarım pot, blöf düşük Ax, açık çekiliş check-back.",
        "narration": "Pozisyon dışı tam aralık küçük bet meşrudur. Aralık avantajlı üç-bettor kopuk as-yüksek'te tam aralık küçük atar; as'sız kopuk orta mono'da çoğunlukla küçük; caller'ın flush yoğunluğu büyüdükçe check payı büyür, nut flush payı çoğunlukla sende kalır. Çekilişi kayıtsız bırakan şey flop boyu değil turn jam tehdididir: dinamik vale-on-x'te sığda flop bet artı turn jam çıplak flush draw'ı ya da tek gutshot'ı sınırda call-off'a zorlar, büyük boy çalışır; derinde tehdit gecikir, yalnız pot boy flop'la korunur. Üç broadway'de çoğunlukla küçük: nut avantajı ince, büyük boy caller'ın iki per ve düz kesimine commit olmaktır; Pozisyondaki check-node'da küçük stab az şey katlatır: check aralığı nut'lar ve korunmuş orta katmandır. Doğru boy yarım pot civarı, kalibre et; value top pair, blöf düşük as'ler: orta perleri bloklamaz, as gelince value jam olur. Açık çekiliş çoğunlukla check-back. Caller'san düşük bağlantılı board'da üç-bettor çoğunlukla check eder; küçük stab çoğunlukla geniş, kalibre et. Sınır: üç-bettor'ın overcard kesimi düz çekiyor mu; bağlantılı sekiz-yedi-altı'da evet, seçici; kopuk dokuz-beş-iki'de hayır, serbest."
      },
      {
        "title": "Turn/river: polarlaşma ve kart-eşleme",
        "bullets": [
          "Küçük flop bet call yedikten sonra turn çoğu kartta polarlaşır; düz/orta-per ekleyen turn'de lineer küçük",
          "Blöf seçimi = bugünkü fold equity + yarınki value-jam kapasitesi (düşük Ax); açık çekiliş bedava realize eder",
          "River overbet: rakibin PREMIUM bluff-catcher kartını taşı — 'eşleşen' call azalır, fold payı çoğunlukla artar",
          "Flush GELEN mono'da alt cep + flush kartı doğal overbet blöfü; KAÇAN flush'ta flush kartlı blöf en sonda"
        ],
        "ruleBox": "Blokeri 'nut'u bloklar mı' diye değil, rakibin premium bluff-catcher'ının kartını taşıyor mu diye seç.",
        "visuals": [
          {
            "kind": "hand",
            "cards": "8s 8h",
            "label": "Alt cep + flush kartı: flush GELEN river'da doğal overbet blöfü"
          }
        ],
        "narration": "Küçük flop bet'in call yedikten sonra turn çoğu kartta polarlaşır: büyük boy, orta katman check. Düz ya da orta per ekleyen turn'de lineer küçüğe dönersin. Blöf seçiminin iki bileşeni var: bugünkü fold equity ve yarınki value jam kapasitesi; orta perleri bloklamayan düşük as öne çıkar, açık çekiliş fold equity'ye muhtaç değildir, bedava realize eder. River overbet blöfünde blokeri yalnız nut'u bloklar mı diye seçme. Rakip bluff-catch kararını value aralığınla eşleşen kartlara göre verir: flush gelen board'da value'n orta kart ve flush kartı taşıyorsa, o kartı tutan bluff-catcher eşleştirdim diye call eder, tutmayan fold eder. Kritik özellik, rakibin premium bluff-catcher'ının kartını senin de taşımandır; eşleşen call sınıfı azalır, kalanın katlanma payı çoğunlukla yükselir. Alt cep artı flush kartı bu yüzden flush gelen mono'da doğal overbet blöfüdür; kaçan flush'ta flush kartı taşıyan blöfler çoğunlukla listenin sonundadır, zaten katlanacak ıskalamış çekilişi bloklarsın; bloklamayan aday varsa onu seç. Value iki boy: en üst as rakipteyse zayıf ve orta as küçük, flush ve üstü büyük."
      },
      {
        "title": "Kalibrasyon: 3-bettor düğümünü kendin çöz",
        "bullets": [
          "Solver: jam frekansı + check sınıfı (40bb T-9-x); 100bb J-T-x'te büyük boy / turn stack-off payı",
          "Alt-çift bet/check EV farkı (A-K-x vs A-J-x); kayıtsızlık boyu (9-7-7); iki-boya indirmenin EV kaybı",
          "100bb A-high top pair turn/river kontrol oranı; düşük kopukta 100bb overpair boyu; IP check-node boyu",
          "Saha: son 30 adet 3-bet potunda caller'ın küçük bete fold oranı"
        ],
        "ruleBox": "Kitap yönü verir, sayıyı sen verirsin: her hücreyi kendi solver'ında ve sahada ölç.",
        "narration": "Bu bölümün sayıları kalibre edilir; kendi solver'ında üç-bettor düğümünü aç. Ölçeceklerin şunlar. Bir: jam frekansı ve check sınıfı, kırk big blind'da onlu-dokuz-x board'unda. İki: yüz big blind'da vale-on-x'te büyük boyun ve turn stack-off'un payı. Üç: alt çiftin bet ve check EV farkı, as-papaz-x ile as-vale-x karşılaştırmasında. Dört: kayıtsızlık boyu, dokuz-yedi-yedi gibi caller'da trips olası eşleşmiş board'da. Beş: ara boyları kilitleyip iki boya indirmenin EV kaybı; başkasının sıfır iddiasını olgu gibi alma, kendin ölç. Altı: yüz big blind as-yüksek potunda top pair'in turn ve river kontrol oranı. Yedi: düşük kopuk board'da yüz big blind overpair boyu. Sekiz: pozisyondaki check-node boyu. Sahada da bir sayaç tut: son otuz adet üç-bet potunda caller küçük bete ne oranda katlandı. Bu oran teorinin üstündeyse tam aralık küçük bet daha çok kazanır, altındaysa frekansı kıs, kalan betleri daha büyük ve value ağırlıklı kur. Sayıyı kitap değil senin sahan verir."
      },
      {
        "title": "Cheat: 3-bet pot postflop kartı",
        "bullets": [
          "Boyu ıskalayan blok + el sınıfı seçer; 3-bettor Ax'i uç-ağırlıklı, caller'ınki orta-sınıf ve geniş",
          "SPR ≲2 jam/check; ~3-4+ flop jam YOK, J-T-x pot-boy sınırda; K-Q-T her derinlikte küçük; kök hata şişirenin",
          "Alt çift ister → lineer küçük, istemez → polar (frekans yüksek); K-Q-x pot-boy; düşük kopuk 100bb küçük-orta",
          "Eşleşmiş/mono 'trips/nut flush kimde?'; check-node yarım pot + düşük Ax; bağlantılı düşükte stab, kopukta bet"
        ],
        "ruleBox": "Guard: boyu board'a değil 'hangi blok ıskaladı + alt çiftim bet istiyor mu + top pair'im kaç sokak taşıyor'a sor.",
        "narration": "Üç-bet pot postflop cep kartı. Boyu ıskalayan blok ve el sınıfı seçer; üç-bet edenin as'i yoğun ama uç ağırlıklı, caller'ınki orta ve geniş. Kök hata şişirenindir. Sığ SPR'de jam ya da check; yüz big blind'da flop jam çoğunlukla yok, vale-on-x'te pot boy, büyük boy sınırda. As-yüksek potunda top pair iki sokak artı river kontrolü; atlanan sokak flop değil. Alt çift bet istiyorsa lineer küçük, istemiyorsa polar büyük, frekans yüksek kalır. İki yüksek kartlı board'da pot boy polar, blöf alt perden. Üç broadway'de her derinlikte küçük; as-yüksek'te büyük boy çoğunlukla gereksiz, caller'ın as'ini katlatmaz. Caller'da trips olası eşleşmişte yarım pot, tek yüksek kart sendeyse küçük; mono'da nut flush kimde. Pozisyondaki check-node'da yarım pot ve düşük as blöfü; bağlantılı düşükte stab, kopuk düşükte c-bet. River overbet blöfünde rakibin premium bluff-catcher'ının kartını taşı, flush kartını yalnız flush gelen river'da. Guard: boyu board etiketine değil, hangi blok ıskaladı, alt çiftim bet istiyor mu, top pair'im kaç sokak taşıyor sorularına sor."
      }
    ]
  },
  {
    "id": "M38",
    "title": "Blind-vs-Blind",
    "chapter": "Bölüm 33 ★",
    "minutes": 16,
    "slides": [
      {
        "title": "Tez: limp zayıf değil — hangi motor çalışıyor?",
        "bullets": [
          "BvB en geniş aralıklı, derinlikle en çok değişen düğüm; SB OOP, BB IP — 'limp = zayıf' değil 'hangi motor?'",
          "Ham limp sığlaştıkça büyür; İÇİ U çizer: derinde premium dilimi limp-reraise, ortada ince kapak, sığda jam",
          "HU aynası: 'ucuz flop' motoru → 'çağrılan raise'de OOP kalmama + SPR kapanı'; yön aynı, SB daha çok limp"
        ],
        "ruleBox": "BvB'de soru 'elim güçlü mü' değil, 'bu derinlikte hangi motor çalışıyor'dur.",
        "narration": "Blind'a karşı blind, masanın derinlikle en çok şekil değiştiren düğümüdür. Limp zayıf, raise güçlü ezberi burada çalışmaz; doğru soru hangi motorun çalıştığıdır. Small blind'ın ham limp payı heads-up'taki gibi jam eşiğine kadar sığlaştıkça büyür, daha altında jam'e devrilir; U çizen şey limp'in içidir: derinde premium'un bir diliminin limp-reraise tuzağı, ortada ince kapak ve all-in olmayan blocker blöfü, jam eşiğine yakın sığda blocker limp-jam. Kelle turnuvasının limp'i kelle motoruyla çalışır; o ezberi buraya taşıma. Heads-up buton limp'inin pozisyon aynasıdır: orada limp pozisyondan yapılır, burada pozisyon dışından; ucuz flop görme motoru burada çağrılan raise'de pozisyon dışı kalmaktan kaçınma ve SPR kapanı motoruna dönüşür. Raise-fold'un preflop maliyeti iki tarafta aynıdır; fark raise'in çağrıldığı ya da üç-bet yediği dalda çıkar: buton raise'le pozisyonunu parayla büyütür, small blind'ın raise'i çağrılınca büyümüş potta pozisyon dışı kalır; limp ise ucuz flop ve limp-reraise'le SPR kapanı verir. Eğri de kayar: yön aynıdır ama aynı derinlikte small blind çoğunlukla daha fazla limp'ler; fark derinde açılır, sığda kapanır."
      },
      {
        "title": "U eğrisi: üç motor + pozisyon aynası",
        "bullets": [
          "Derin (≈50-60bb+): premium çoğunlukla RAISE-first, bir dilim LIMP → büyük reraise; limp geniş/merged",
          "Orta (≈30-50bb): BB iso'su polarize → limp-reraise hedefi DAR; premium RAISE; limp = çöp + ince kapak/blocker",
          "Sığ (≈20-30bb): raise üstü jam ucuz → raise-fold pahalı; büyük çift RAISE; limp-jam döner (≤25bb, kalibre et)",
          "Ayna: yön aynı (derinleştikçe raise), seviye kayar — çağrılan raise'de OOP kalan SB daha çok limp'ler (merged)"
        ],
        "ruleBox": "Katmanı efektif bb/SPR seçer; üç soru katman-içi eşikleri ve geçiş bandını (≈45-60bb, kalibre et) ayarlar — ters dönen yön değil, motor ve seviye.",
        "narration": "Üç katman, üç motor. Derin katmanda motor SPR kapanıdır: premium'un gövdesi raise-first'te kalır, aralık capped olmaz; bir dilimi limp'ler ve iso'ya büyük reraise atar. Limp payı derinleştikçe daralır ama sıfıra inmez; heads-up butona göre daha geniş ve merged'dır. Orta katmanda big blind'ın iso'su polarize olur, limp-reraise hedefi daralır; premium çoğunlukla raise, limp'te çöp artı ince premium kapağı ve blocker blöfü kalır; limp-jam yok. Sığ katmanda big blind'ın raise üstü jam'i ucuzdur, raise-fold pahalı; büyük çift yine raise, as-papaz sınırda; limp en kalın, blocker limp-jam'i geri gelir, yarı-blöf olarak. Katmanı efektif big blind ve SPR seçer; üç soru katman içi eşikleri ve geçiş bandını ayarlar; eşikleri kendi solver'ında kalibre et. Pozisyon dışı derin potu hem raise'le hem kapanla büyütür, kapan payı derinlikle artar. Aynada yön iki yerde de derinleştikçe raise, seviye kayar: çağrılan raise'de pozisyon dışı kaldığı için small blind aynı derinlikte daha çok limp'ler, limp daha geniş ve merged olur, eğri düzleşir. Ters dönen yön değil, motor ve seviyedir."
      },
      {
        "title": "SB derin: premium dilimi limp-reraise, kova inşası",
        "bullets": [
          "Gövde RAISE-first (capped kalmaz); bir dilim LIMP: raise+call'da BB'nin connector'ı tek per yakalar, kaçar",
          "Büyük limp-reraise SPR'yi düşürür → aynı flopta tek per çoğunlukla stack-off'a gider; reraise value-ağırlıklı",
          "Kova: limp-fold / limp-call / tepe. Sığmayan orta Qx/Jx offsuit, boşluklu suited = raise-fold malzemesi",
          "Suited limp → iso'ya çoğunlukla fold YOK (en düşük istisna); sınır eli karıştırma: iyisi raise, zayıfı limp"
        ],
        "ruleBox": "Derinde EV çöpü katlatmaktan değil, limp'e iso eden orta banttan gelir; reraise'i value-ağırlıklı tut.",
        "visuals": [
          {
            "kind": "hand",
            "cards": "As Ad",
            "label": "Derin: gövde RAISE; bir dilim LIMP → iso'ya büyük reraise"
          },
          {
            "kind": "hand",
            "cards": "Qd Tc",
            "label": "Limp-call: iso'ya rahat devam"
          }
        ],
        "narration": "Derinde premium'un bir dilimi limp'lenir; gövde raise-first'te kalır, aralık capped olmaz. Small blind raise eder, big blind call ederse flop'a çok yüksek SPR'yle gidersin; big blind'ın orta suited connector'ı üstüne vuran flopta tek per yakalar ve kolayca uzaklaşır. Limp ise big blind'ı raise'e çoğunlukla üç-bet etmeyen ama limp'i çoğunlukla izole eden orta bantla pozisyona davet eder: orta suited connector, offsuit broadway. Büyük limp-reraise SPR'yi birkaç kat düşürür, aynı flopta aynı tek per çoğunlukla stack-off'a gider. EV çöpü katlatmaktan değil, o banttan gelir; yapışkan bant value'ya öder, blöfe değil. Kova inşası: her eli limp sonrası iso'ya vereceği cevaba göre koy. Limp-fold en zayıf offsuit ve en düşük suited; limp-call iso'ya rahat devam eden kız-on, kız-vale tipi ve suited orta broadway; tepe limp-reraise ya da raise. Kovaya sığmayan orta offsuit'ler ve boşluklu suited'lar raise-fold malzemesidir. Kural: suited limp'ledinse tek iso'ya çoğunlukla fold yok, en düşük suited istisnadır; onun dışında fold edeceksen raise-fold et. Sınır elini karıştırma: iyisi raise, zayıfı limp."
      },
      {
        "title": "SB sığ: limp-jam ve iso üstü jam",
        "bullets": [
          "Sığda BÜYÜK ÇİFT raise'de kalır: BB jam aralığı > limp-jam'e call aralığı; AK sınırda (raise / iso-üstü jam)",
          "Limp-jam (alt uç, kalibre et): zayıf offsuit Ax, alt-orta Kx, küçük çift; üst uç limp-call; limp-3-bet COMMIT",
          "İso üstü jam: 'kim call eder, domine ediyor muyum?' Büyük offsuit As altın; suited orta broadway → limp-call",
          "Havuz iso'ya/reraise'e teoriden çok jam'ler → jam'e katlayacağın orta elle non-all-in reraise yapma"
        ],
        "ruleBox": "Sığda büyük çift raise, limp-jam blocker'a: jam'i 'elim güçlü mü' değil 'kim öder, domine ediyor muyum' seçer.",
        "visuals": [
          {
            "kind": "hand",
            "cards": "Ah 3c",
            "label": "Limp-jam blocker: iso çöpünü katlatır"
          },
          {
            "kind": "hand",
            "cards": "Ad Jc",
            "label": "İso üstü jam: domine çağrı bulur"
          }
        ],
        "narration": "Sığ katmanda büyük çift raise'de kalır. Big blind limp'e sık ve küçük iso eder; limp-jam'i call ettiği aralık, raise'e jam'lediği aralıktan dardır. Raise, big blind'ın limp-jam'i call etmeyeceği elleri de jam'e getirir; büyük çifti limp-jam'lersen o geniş çağrıyı kaybedersin. As-papaz sınırdadır: raise de olur, iso üstü jam de. Limp-jam malzemesi en zayıf offsuit as, alt-orta offsuit papaz ve küçük çift: iso çöpünü katlatır, call aralığını bloklar, çağrılınca canlı equity taşır. Limp-jam bandın alt ucuna aittir; üst ucunda overbet olur, malzeme limp-call'a döner; sınırı kalibre et. Limp-üç-bet bu bantta commit'tir, fold edilmez. İso üstü jam'de soru elim güçlü mü değil, kim call eder ve onu domine ediyor muyum sorusudur. Büyük offsuit as'ler altındır: iso'daki orta suited as ve güçlü broadway sınıfı hem iso eder hem call eder, postflop oynanabilirliği düşüktür. Suited orta broadway tersi: jam'lersen sadece üstün öder, domine ettiğin papazlar katlanır; limp-call'a koy. Havuz iso'ya ve reraise'e teoriden çok jam'ler; jam'e katlayacağın orta elle all-in olmayan reraise yapma."
      },
      {
        "title": "Orta stack: BB'nin iso'su polarize olur",
        "bullets": [
          "Derinde BB depolarize iso eder, çoğu limp-reraise'e call eder; ortada aralık ikiye bölünür",
          "En güçlüler reraise üstüne JAM, offsuit çöp iso-fold, ortadaki suited eller iso etmeyip CHECK",
          "Limp-reraise hedefi DAR: reraise'e çoğunlukla ya jam ya fold; limp-call potu premium için çok küçük bırakır",
          "KQs/QJs/QTs ortada çoğunlukla RAISE (kalibre et): 'check eden suited orta' banda para koy; limp = bedava flop"
        ],
        "ruleBox": "Ortada premium limp 'trap için fazla derin, reraise için fazla sığ' — limp-reraise dilimi küçülür ama value+blöf karışık: ince premium kapağı + blocker blöfü; limp-jam sığa ait.",
        "visuals": [
          {
            "kind": "hand",
            "cards": "Kh Qh",
            "label": "Orta stack: RAISE, limp değil"
          }
        ],
        "narration": "Orta derinlikte big blind'ın iso'su polarize olur, premium limp'in hedefi daralır. Derinde big blind depolarize iso eder, çoğu limp-reraise'e call eder. Ortada aynı aralık ikiye bölünür: en güçlüleri reraise üstüne jam'ler, offsuit çöpü iso-fold eder, ortadaki suited elleri iso etmeyip check eder. Limp-reraise'in hedefi daralır: reraise'e çoğunlukla ya jam gelir ya fold; limp-call ise potu premium için çok küçük bırakır. Premium limp'i ortada tuzak için fazla derin, reraise için fazla sığdır. Aynı sebeple papaz-kız suited, kız-vale suited, kız-on suited ortada çoğunlukla raise ister: raise'e fold etmeyen ama limp'i iso etmeyen o check eden suited orta banda karşı para koymak zorundasın; limp'lersen bedava flop görür. Ortada limp-reraise dilimi küçülür ama value ve blöf karışık kalır: birkaç all-in olmayan blocker as ve papaz blöfüne kapak olarak ince bir premium dilimi limp-reraise'de kalır, aksi halde big blind'ın reraise üstü jam'i sınırsızlaşır. Limp-jam bu derinlikte overbet olur, sığa aittir. Offsuit büyük as'ler fast-play; orta suited bağlantılılar oynanabilirlik hattında; sınırı kendi solver'ında kalibre et."
      },
      {
        "title": "BB'nin limp'e yanıtı ve SB'nin jam'e call'ı",
        "bullets": [
          "İso: offsuit broadway (KJo/QTo) en pahalı — limp-reraise'in hedefi tam o bant; düşük suited ucuz iso",
          "Az-reraise havuza DAHA KÜÇÜK + DAHA GENİŞ iso; ante genişletir; IP-BB iso'su HU-OOP iso'sundan geniş",
          "İso-jam (~30bb): K5o/K6o blocker + orta suited connector; suited orta broadway jam'lenmez",
          "Limp'e jam: ham equity + pot oranı — dar value-yoğun jam'e 98s iyi, KTo kötü; geniş jam'e yüksek kart öne"
        ],
        "ruleBox": "Refleks iso yok; jam'e call'ı ham equity + pot oranı verir, doku seçer — eşik sığlaştıkça kademe kademe genişler.",
        "visuals": [
          {
            "kind": "hand",
            "cards": "9s 8s",
            "label": "Jam'e CALL: dar value-yoğun jam'e canlı"
          },
          {
            "kind": "hand",
            "cards": "Kd Tc",
            "label": "Dar jam'e FOLD: domine; geniş jam'de sınırda"
          }
        ],
        "narration": "Önce big blind'ın iso'su. Her elle aynı boyla refleks iso etme. En pahalı grup offsuit broadway'lerdir, papaz-vale, kız-on gibi: iso etmek doğal gelir ama limp-reraise'in hedefi tam bu banttır. Düşük suited eller ucuz iso'dur: reraise'e katlanır. Az reraise eden havuza küçük ve geniş iso. İso-jam malzemesi limp-jam'in aynasıdır: papaz-beş tipi blocker'lar ve orta suited connector'lar; suited orta broadway jam'lenmez. Şimdi small blind'ın call'ı, limp'ine jam geldi. All-in'de yalnız aralığa karşı ham equity ve pot oranı sayar; domine sezgisi ham equity'yi yenmez. Jam dokusu as ve çift ağırlıklı, dar ve value yoğunsa canlı orta suited connector domine zayıf as'lerden ve offsuit broadway'den daha iyi call adayıdır. Doku broadway ve connector'la genişse yüksek kart equity'si öne geçer, as-iki suited ve papaz-on offsuit sınırda call'a döner. Havuz jam'i en zayıf as'ten başlatır; havuza karşı connector call'ı görece iyi. Dar value yoğun jam'e karşı iki sınıf da çoğunlukla fold. Limp-call tuzağı yalnız jam aralığını domine eden elle. Call eşiği sığlaştıkça kademe kademe genişler."
      },
      {
        "title": "Popülasyon sapması: üç exploit",
        "bullets": [
          "Havuz derinde limp'e teorinin çok altında iso eder; SB raise'ine boydan bağımsız aynı oranda katlanır",
          "1) SB'den derinde fold yok — dip aralık cezalandırılmıyor",
          "2) OOP en zor oynanan dip çöp KÜÇÜK raise-fold'a döner — yalnız bilinmeyen/pasif rakibe; value raise'i büyüt",
          "3) Value limp-reraise'i DARALT: yalnız premium (kabaca QQ+/AK, kalibre et); KQs/AJo/ATs tipi açılış raise'ine"
        ],
        "ruleBox": "Havuz fiyat okumuyor, 'bu eli oynarım' diyor: derinde fold yok, küçük raise-fold, value limp-reraise DARALIR.",
        "narration": "Havuz derinde limp'e teorinin çok altında iso eder ve small blind raise'ine boydan bağımsız aynı oranda katlanır. Fiyat okumuyor; bu eli oynarım diyor. Bundan üç exploit çıkar. Birincisi, small blind'dan derinde fold yok: dip aralık cezalandırılmıyorsa her el oynanır. İkincisi, pozisyon dışı en zor oynanan dip çöp küçük raise-fold'a döner; fold oranı boydan bağımsızsa pahalı blöfün anlamı yoktur, aynı sapma value raise'ini de büyütür. Yalnız bilinmeyen ya da pasif rakibe; iyi oyuncuya kova mantığı aynen. Üçüncüsü, value limp-reraise'ini daralt: havuz güçlü elleri sık, zayıfları seyrek iso eder, limp-reraise'in karşısındaki devam aralığı da güçlüdür; yalnız premium, kabaca kız çifti ve üstü ile as-papaz, reraise value'dur. Papaz-kız suited, as-vale offsuit, as-on suited sınıfı o aralığa domine olur, reraise value değil ince blöf olur; limp'ten çıkar, açılış raise'ine taşı. Limp'lendiyse limp-call, reraise değil. Oranları ve reraise sınırını kendi sahanda kalibre et. Big blind aynası: havuz derinde pasifse küçük potları sen kap, image'ini orada kur; büyük potta ödeme o image'den gelir."
      },
      {
        "title": "Asimetrik stack I: kısa açıcı ve kısa sen",
        "bullets": [
          "ChipEV kapsamı: rejam efektif stack'le fiyatlanır, derinin rejam'i ucuzlamaz; PKO/ICM primi ayrı slide",
          "Kısa (10-15bb) açtı, sen derin IP, arkada derin blind'lar → call DARALIR: squeeze/jam kapısı + equity payı",
          "Küçük commit-3-bet: kısanın polar aralığının çöpünü katlatır; value'suna suited As/broadway equity'si yeter",
          "Kısa SENSEN (~20bb), masa derin → chipEV'de RFI sınırda genişler (ICM'de daralır); ~12bb'de jam-or-fold"
        ],
        "ruleBox": "Kısa açıcıya derin IP call'ı daraltır: çoğunlukla küçük commit-3-bet ya da fold, sınırda eller call; kısa sensen masa derinse chipEV'de sınırda aç, ICM'de daral.",
        "visuals": [
          {
            "kind": "hand",
            "cards": "Ah Ts",
            "label": "Kısa açıcıya derin IP: commit-3-bet, call değil"
          }
        ],
        "narration": "Bu bölüm chipEV'de konuşur, ICM baskısı yokken; kelle yoktur, cover mantığını taşıma. ChipEV'de rejam efektif stack'le fiyatlanır, derinin rejam'i çoğunlukla ne ucuzlar ne pahalanır; ICM'de kapsananın primi yükselir, derinin rejam'i ucuzlar, kısa açıcı daralır. İlk durum: kısa stack açtı, sen pozisyonda derinsin, arkada derin blind'lar var. Call daralır: derin blind'lar squeeze ya da jam'le cezalandırır ve kısaya karşı equity payını paylaşır. Kısanın aralığı polardır, nut'lar artı raise-fold çöpü; onu commit eden küçük üç-bet çöpü katlatır, value'suna karşı suited as ve suited broadway'in equity'si yeter. Pozisyonda sınırdaki eller call kalır. Kısa olan sensen ve masa derinse chipEV'de açılışı sınırda genişlet: yirmi big blind civarında açıyorsun, arkadakiler derin; rejam onlara yalnız efektif stack'e mal olur, iştahı düşüren birden çok derin arkadayken rejam'cinin sıkışmasıdır; derinin call'ı tercih etmesi saha okumasıdır. Efektif stack on iki big blind civarına inince call kalkar, derinin reshove'u genişler, jam ya da fold; arkadakiler senden kısaysa tersi, küçük raise-fold sınırda yaşar. Eşikleri kendi solver'ında kalibre et."
      },
      {
        "title": "Asimetrik stack II: derin sen, derin blind'lar",
        "bullets": [
          "Derin sen, arkada kısalar → open daralt; open-JAM: orta/küçük çift, suited Ax, suited broadway (rejam'i siler)",
          "Tepe (büyük çift, büyük offsuit As) MIN-RAISE-call: domine rejam'i indükler; domine offsuit broadway min-raise",
          "Derin blind'lar + kısa açıcı → call rejimi: BTN call genişler; 3-bet KÜÇÜK, fold domine offsuit, call suited",
          "Squeeze = kısanın kalan stack'ini COMMIT eden boy (kalibre et): 4-bet-jam FE'si sıfır; kısaya call = stack-off"
        ],
        "ruleBox": "SB kısa açıcının stack'ine göre değil, arkadaki derin BB'ye karşı efektif stack mantığıyla oynar.",
        "narration": "İkinci durum: derin sensin, arkada kısalar. Küçük open kısanın jam'ine açıktır; çöp düşer. Orta ve küçük çift, suited as ve suited broadway open-jam olur: kısanın fold equity'li rejam'ini siler; bedeli domine rejam'lerin value'sunu feda etmektir. Tepe, büyük çift ve büyük offsuit as, min-raise-call oynar: domine rejam'i katlatmak değil indüklemek ister. Domine olabilen offsuit broadway min-raise'de kalır: jam'e fold, call'da pozisyonda oynanır. Üçüncü durum: blind'lar derin, açıcı kısa. Blind'lar ucuza jam'leyemez, buton call aralığı genişler; jam domine çağrı bulan ellere ve orta çiftlere iner. All-in olmayan üç-bet küçük: büyük boy kısaya bedava dört-bet-jam fiyatı verir. Üç-bet-fold domine olabilen offsuit, üç-bet-call suited as. Squeeze boyu kısanın kalan stack'ini commit eden boydur, kalibre et: kısa jam'lerse pot oranı seni call'a bağlar, dört-bet-jam'in fold equity'si kalkar, small blind jam ya da fold'a zorlanır. Kısa için call fiilen stack-off'tur: yalnız all-in'e karşı kârlı eller devam eder; büyük çift ve as-papaz çoğunlukla stack-off, orta çift ve güçlü suited broadway sınırda, küçük çift çoğunlukla fold; kalibre et."
      },
      {
        "title": "Kalibrasyon: segment tut, bb/SPR geçirir, gözlem kaydırır",
        "bullets": [
          "Stratejiyi SEGMENT'te tut: derin/orta/sığ; katman geçişini efektif bb/SPR tetikler, her bb'ye tepki verme",
          "Gözlem katman-İÇİ eşikleri kaydırır (limp-jam alt sınırı, jam'e call, iso boyu); ne etiketi ne gözlemi bekle",
          "Derin fazda küçük-potlu agresyon ucuz → tester at; parayı sığ fazın jam kararlarında kullan",
          "Slotlar: katman eşikleri, limp-reraise/iso boyu, limp-jam/iso-jam/jam'e call, commit-3-bet, commit squeeze"
        ],
        "ruleBox": "Havuz derinde çok az 3-bet, orta-sığda çok az jam eder — iki katmanı neredeyse aynı oynar; okumayı derinde al, sığda harca.",
        "narration": "Stratejiyi segmentlerde tut: derin, orta ve sığ blok. Blok içinde her big blind değişimine tepki verme; katman geçişini efektif big blind ve SPR tetiklesin. Gözlem katman içi eşikleri kaydırsın: limp-jam alt sınırı, jam'e call genişliği, iso boyu. Ne chart etiketini ne gözlemi bekle. Havuz derinde çok az üç-bet, orta ve sığda çok az jam eder; iki katmanı neredeyse aynı oynar. Derin fazda küçük potlu agresyon ucuzdur: ilk ellerde tester at, raise'e üç-bet geliyor mu, iso'ya hep fold mu; okumayı buradan al, parayı sığ fazın jam kararlarında kullan. Rakip erken fazda agresif ya da yapışkansa sığ fazın eşiklerini ona göre kaydır. Kalibrasyon slotların şunlar, kendi solver'ında ve sahanda doldur: katman eşikleri; limp-reraise ve iso boyu, derinde SPR'yi kaç kat düşürdüğü; limp-jam, iso-jam ve jam'e call için blocker as ve papaz alt sınırı, küçük çift eşiği, referans big blind ve kademe kaydırması; commit üç-bet ve kısayı commit eden squeeze boyunun kısa açıcının stack'ine oranı."
      },
      {
        "title": "Cheat: Blind-vs-Blind kartı",
        "bullets": [
          "Katmanı efektif bb/SPR seçer; üç soru (suited call? kim iso? jam?) katman-içi eşikleri + geçiş bandını ayarlar",
          "Derin premium RAISE-first + dilim LIMP → büyük reraise; orta RAISE (ince kapak); sığ büyük çift RAISE",
          "Suited limp → çoğunlukla fold yok; BB iso: offsuit broadway pahalı, düşük suited ucuz; jam'e call ham equity",
          "Havuz: derinde fold yok, küçük raise-fold, value limp-reraise DARALT; kısa açıcıya derin IP: commit-3-bet"
        ],
        "ruleBox": "BvB kök hatası preflop'ta doğar: derinde premium'u raise edip OOP tek pere yapışmak, sığda raise-fold'u BB'nin jam'ine hediye etmek.",
        "narration": "Blind'a karşı blind cep kartı. Katmanı efektif big blind ve SPR seçer; üç soru katman içi eşikleri ve geçiş bandını ayarlar. Derinde premium'un gövdesi raise-first'te kalır, aralık capped olmaz; bir dilimi limp'lenir, iso'ya büyük value ağırlıklı reraise. Ortada premium ve papaz-kız suited raise ister: big blind'ın iso'su polarize, limp-reraise hedefi dar; ince premium kapağı ve blocker blöfü limp-reraise'de kalır. Sığda büyük çift yine raise, as-papaz sınırda; limp-jam malzemesi en zayıf offsuit as ve alt-orta papazlarla küçük çift. Suited limp'e tek iso'ya çoğunlukla fold yok; big blind iso'sunda offsuit broadway pahalı. Limp'e jam geldiğinde ham equity ve pot oranı karar verir: dar value yoğun jam'e dokuz-sekiz suited iyi, papaz-on offsuit kötü; geniş jam'e yüksek kart öne geçer. Havuz derinde small blind'dan fold yok, küçük raise-fold, value limp-reraise daralır. Kısa açıcıya derin pozisyonda call daralır, küçük commit üç-bet. Kök hata preflop'ta doğar: derinde premium'u raise edip pozisyon dışı tek pere yapışmak, sığda raise-fold'u big blind'ın jam'ine hediye etmek."
      }
    ]
  },
  {
    id: "M39",
    title: "Marjinal eller: biri açtı mı, açmadı mı",
    chapter: "Bölüm 4 ★",
    minutes: 7,
    slides: [
      {
        title: "Masadaki gerçek soru chart değil",
        bullets: [
          "Chart ezberi masada donduruyor: aynı el, iki farklı spotta iki farklı karar.",
          "Önce TEK soru sor: önümde fold mu var, raise mi var?",
          "Cevap değişince el aynı kalsa bile doğru hamle değişir — bu kafa karışıklığı değil, oyunun kendisi.",
          "Üçüncü durum ayrı tutulur: BB'deysen karar el gücü değil FİYAT işidir.",
        ],
        ruleBox: "İki soru: (1) önümde raise var mı? (2) BB'de miyim? Bu ikisi cevaplanmadan el sınıfı tek başına bir şey söylemez.",
        narration:
          "Masada chart'ı hatırlamaya çalışmak seni donduruyor, çünkü chart tek bir spotu anlatır ama sen her el farklı bir spotta oturuyorsun. Bunun yerine tek bir soruyla başla: önümde fold mu var, yoksa biri açtı mı? Cevap değiştiğinde elin aynı kalsa bile doğru hamle tamamen değişir. Bu senin kafanın karışması değil, oyunun kendisi. Üçüncü bir durum daha var, onu ayrı tut: big blind'daysan karar elin gücüyle değil fiyatla ilgilidir, çünkü zaten paranın bir kısmını koymuşsun. Yani önce iki soruyu cevapla: önümde raise var mı, big blind'da mıyım. Bu ikisi netleşmeden elin sınıfı tek başına sana bir şey söylemez.",
      },
      {
        title: "Kimse açmadıysa: as suited ile as offsuit aynı el değil",
        bullets: [
          "As suited erken pozisyondan bile açılır; as offsuit çoğunlukla açılmaz.",
          "A2s, UTG'den A8o'dan daha değerlidir — sezgiye ters ama doğru.",
          "Sebep: suited olan renk yapar, wheel yapar, sonradan blöf malzemesi olur.",
          "Offsuit as bunların hiçbirini taşımaz; en sık ürettiği şey domine edilmiş zayıf top pair.",
        ],
        ruleBox: "Kısa hali: CO'da A2s ve üstü, A8o ve üstü. BTN ve SB'de bütün as'lar.",
        narration:
          "Kimse açmadıysa, elindeki as'ın renkli olup olmaması her şeyi değiştirir. As suited erken pozisyondan bile açılabilir; as offsuit çoğunlukla açılmaz. Şunu duymak sezgiye ters gelir ama doğrudur: as-iki suited, en erken pozisyonda, as-sekiz offsuit'ten daha değerlidir. Sebebi basit. Suited olan el renk yapar, tekerlek düzü yapar, ve elin gücü tutmadığında bile sana blöf malzemesi verir; as'ı elinde tuttuğun için rakibin en güçlü ellerini bloklarsın. Offsuit as bunların hiçbirini taşımaz. Onun en sık ürettiği şey, domine edilmeye açık zayıf bir top pair'dir; yani en çok kazandığını sandığın anda en çok kaybettiğin el. Kısa hali şu: cut-off'ta as-iki suited ve üstü, as-sekiz offsuit ve üstü açılır. Buton ve small blind'da as'ların hepsi oynanır.",
      },
      {
        title: "Kimse açmadıysa: düşük papaz, kız, vale grupları",
        bullets: [
          "K3s–K6s, Q3s–Q6s, J3s–J6s: tek pratik kural — AÇILIR ya da FOLD.",
          "Buton'dan geniş açılır, CO'dan daralır, HJ ve öncesinden çoğu fold.",
          "SB'de fold yok: hepsi limp ya da raise (ağır ICM ayrı konu).",
          "Offsuit versiyonları çok daha sert: CO ve öncesinden tamamı fold.",
        ],
        ruleBox: "Bu gruplarda ara yol yoktur: ya açarsın ya atarsın. Ortada 'idare eder' diye bir kutu yok.",
        narration:
          "Şimdi düşük papaz, kız ve vale gruplarına gelelim; papaz-üç suited'dan papaz-altı suited'a, aynı şekilde kız ve vale için. Bu ellerin turnuvada tek pratik kuralı var: ya açarsın ya atarsın. Butondan geniş açılır, cut-off'tan daralır, hijack ve daha erken pozisyonlardan çoğu fold'dur. Small blind bir istisna: orada fold yok, hepsi ya limp'lenir ya raise edilir, çünkü sadece bir kişi kaldı arkanda. Ağır ICM varsa en dipteki elleri orada da atarsın. Offsuit versiyonları çok daha serttir; cut-off ve daha erken pozisyonlardan tamamı fold. Buradaki kritik nokta şu: bu gruplarda ara yol yoktur. Kafan karıştığında akla gelen o üçüncü seçenek, yani idare eder deyip flat geçmek, tam olarak yapılmaması gereken şeydir.",
      },
      {
        title: "Biri açtıysa: flat YOK — en pahalı hata bu",
        bullets: [
          "Pozisyonda bir raise'e karşı düşük Kx/Qx/Jx'i flat'lemek en kötü kullanımlarıdır.",
          "Doğru ayrım: suited olanların bir kısmı 3-bet BLÖFÜ, gerisi fold.",
          "Offsuit versiyonları neredeyse saf fold — iyi 3-bet blöfü bile değiller.",
          "Yani fold etmen yanlış değil; flat etmen yanlış.",
        ],
        ruleBox: "Biri açtıysa düşük suited grup ya 3-bet blöfüdür ya çöptür. Arada flat kutusu yoktur.",
        narration:
          "Şimdi en pahalı hataya geldik. Biri açtı, sen pozisyondasın ve elinde düşük bir suited papaz ya da kız var. Bunu call etmek, yani flat geçmek, o elin en kötü kullanımıdır. Sebebi şu: flat ettiğinde eli sadece izleyici yaparsın; ne rakibi katlatırsın ne de yeterince sık iyi el yaparsın. Doğru ayrım ikili: bu ellerin bir kısmı üç-bet blöfü olur, çünkü papazı elinde tutmak rakibin en güçlü ellerini bloklar; geri kalanı fold'dur. Offsuit versiyonları için durum daha da net, onlar neredeyse tamamen fold, çünkü iyi bir üç-bet blöfü bile değiller. Buradan çıkması gereken cümle şu: bu spotta fold etmen yanlış değil. Yanlış olan flat etmen. Kafan karıştığında en güvenli hareket fold'dur, orta yol değil.",
      },
      {
        title: "Biri açtıysa: düşük as suited senin blöf malzemen",
        bullets: [
          "Düşük suited as, raise karşısında EN İYİ 3-bet blöf adayı.",
          "Üç sebep birden: as bloker + nut renk + tekerlek düzü.",
          "Düşük OFFSUIT as, BB dışında çoğunlukla fold — flat edilmez.",
          "AQo 3-bet/call karışımı, AK value 3-bet'tir; bunlar ayrı sınıf.",
        ],
        ruleBox: "Aynı görünen iki el: A5s raise'e karşı silah, A5o çöp. Fark tek harf değil, tüm plan.",
        narration:
          "Biri açtığında düşük as'lar ikiye ayrılır. Düşük suited as, özellikle as-iki'den as-beş'e kadar olanlar, elindeki en iyi üç-bet blöf adaylarıdır. Üç sebep aynı anda çalışır: as'ı tuttuğun için rakibin as-as ve as-papaz gibi ellerini bloklarsın, renk geldiğinde en üstteki rengi yaparsın, ve tekerlek düzü ihtimalin vardır. Düşük offsuit as ise tam tersi. O, big blind dışında çoğunlukla fold'dur ve asla flat edilmez, çünkü saydığım üç özelliğin hiçbirini taşımaz. Burada dikkat et: as-kız offsuit ve as-papaz bambaşka bir sınıftır; as-kız üç-bet ile call arasında karışır, as-papaz zaten değer için üç-bet'lenir. Yani aynı görünen iki el, as-beş suited ve as-beş offsuit, senin için tamamen farklı iki plandır.",
      },
      {
        title: "BB'deysen kural değişir: bu bir fiyat kararı",
        bullets: [
          "BB'de zaten para koymuşsun — bedava görmüyorsun ama indirimli görüyorsun.",
          "Butona ve CO'ya karşı küçük açışta düşük gruplar büyük ölçüde savunulur.",
          "Erken pozisyon açışına ve büyük boya karşı aynı eller fold olur.",
          "Yani BB'de 'bu el iyi mi' değil, 'bu fiyat iyi mi' diye sor.",
        ],
        ruleBox: "BB savunması el sınıfı işi değil fiyat işidir: açan kim, boy ne kadar, ICM var mı.",
        narration:
          "Big blind bambaşka bir dünyadır ve karışıklığın büyük kısmı burada doğar. Big blind'da zaten paranın bir kısmını koymuşsun, yani eli bedava görmüyorsun ama indirimli görüyorsun. Bu yüzden soru değişir. Butondan ya da cut-off'tan küçük bir açış geldiyse, o düşük papaz ve kız grupları büyük ölçüde savunulur; hatta offsuit olanların çoğu bile butona karşı call edilir. Ama aynı eller, erken pozisyondan gelen bir açışa ya da büyük bir boya karşı fold olur. Dikkat et, elin değişmedi; açan kişi ve fiyat değişti. Yani big blind'da kendine bu el iyi mi diye sorma. Bu fiyat iyi mi diye sor. Açan kim, boy ne kadar, masada ICM baskısı var mı. Cevap bu üçünden çıkar.",
      },
      {
        title: "Suited broadway ayrı bir sınıftır",
        bullets: [
          "KQs, KJs, QJs: üçü de HER pozisyondan açılır — burada tereddüt yok.",
          "Pozisyon açılışı değil, açılıştan SONRAKİ cevabı belirler.",
          "BTN/CO'da erken açışa karşı: KQs/KJs 3-bet ile flat karışır, QJs çoğunlukla flat.",
          "SB'de flat yok: KQs 3-bet, QJs erken açışa fold.",
        ],
        ruleBox: "Bunları düşük gruplarla karıştırma: suited broadway açılış sorusu değil, 3-bet'e cevap sorusudur.",
        narration:
          "Papaz-kız suited, papaz-vale suited ve kız-vale suited üçlüsünü diğerlerinden ayrı tut. Bunlar her pozisyondan açılır, sekiz kişilik masada en erken koltuk dahil. Yani açılış tarafında tereddüt etmene gerek yok. Pozisyon bu ellerde açıp açmayacağını değil, açtıktan sonra gelen üç-bet'e ne diyeceğini belirler. Biri açtığında ise pozisyon her şeydir. Butonda ya da cut-off'ta, erken bir açışa karşı papaz-kız ve papaz-vale suited üç-bet ile flat arasında karışır; kız-vale suited çoğunlukla flat kalır, çünkü pozisyonda ucuza görüp iyi board'larda para kazanır. Small blind'da ise flat yoktur: papaz-kız suited üç-bet'lenir, kız-vale suited erken açışa atılır. Kural olarak aklında şu kalsın: bu eller açılış sorusu değil, üç-bet'e cevap sorusudur.",
      },
      {
        title: "Postflop kimliği: bunlar top pair eli DEĞİL",
        bullets: [
          "Düşük suited gruplar renk çekilişi ve blöf elleridir — çift yapmak asıl işleri değil.",
          "K6s ile K-yüksek flopta tek çiftle büyük pota gitmezsin.",
          "Ama her zaman blöfe de çevrilmez: küçük pot, pot kontrolü, bluff-catch de seçenek.",
          "Zayıf kicker'lı as ile A-yüksek flopta üç sokak para koymak klasik kök hata.",
        ],
        ruleBox: "Bu ellerle kazanılan potlar ya küçüktür ya renk gelmiştir. Ortada büyük pot arıyorsan yanlış elle arıyorsun.",
        narration:
          "Şimdi en çok para kaybettiren kısma geldik: bu elleri flop'tan sonra ne sanıyorsun. Düşük suited gruplar renk çekilişi ve blöf elleridir. Çift yapmak onların asıl işi değildir, yan üründür. Papaz-altı suited ile papaz yüksek bir flopta tek çift yaptın diye yüz big blind'lık potun ortasına gitmezsin. Ama dikkat, bunun tersi de yanlış: bu eller her zaman blöfe de çevrilmez. Küçük potta pot kontrolü yapmak, hatta bluff-catch etmek de meşru seçeneklerdir. Aynı şey zayıf kicker'lı as için de geçerli. As yüksek bir flopta zayıf kicker'la üç sokak boyunca para koymak klasik kök hatadır; top pair var ama kicker zayıf, ve iki büyük bahisle pot gereksiz şişer. Aklında kalsın: bu ellerle kazandığın potlar ya küçüktür ya renk gelmiştir. Büyük pot arıyorsan yanlış elle arıyorsun.",
      },
      {
        title: "Cheat: masada iki soru, üç kutu",
        bullets: [
          "Soru 1 — önümde raise var mı? Yoksa: pozisyona göre aç ya da at, flat kutusu yok.",
          "Soru 2 — BB'de miyim? Evetse: fiyat kararı; açan kim, boy ne, ICM var mı.",
          "Raise varsa: suited düşük = 3-bet blöfü ya da fold; offsuit düşük = fold.",
          "Düşük suited as = en iyi blöf malzemesi. Düşük offsuit as = BB dışında fold.",
        ],
        ruleBox: "Kafan karıştığında kaçınacağın tek hamle flat'tir. Fold ya da agresyon; ikisi de flat'ten iyidir.",
        narration:
          "Cep kartı. Masada iki soru sor, üç kutudan birine düş. Birinci soru: önümde raise var mı? Yoksa pozisyonuna göre ya aç ya at; bu gruplarda flat diye bir kutu yok. İkinci soru: big blind'da mıyım? Evetse bu bir fiyat kararıdır; açan kim, boy ne kadar, masada ICM baskısı var mı, ona bak. Eğer önünde raise varsa ayrım şu: düşük suited eller ya üç-bet blöfüdür ya fold; düşük offsuit eller neredeyse tamamen fold. As'larda düşük suited as senin en iyi blöf malzemen, düşük offsuit as ise big blind dışında fold. Hepsinin altında tek bir cümle var: kafan karıştığında kaçınman gereken tek hamle flat'tir. Fold da agresyon da flat'ten iyidir. Şunu unutma, bu sınırlar ante'li sekiz kişilik masada, otuz ile altmış big blind arasında, ağır ICM yokken geçerli güvenli çalışma sınırlarıdır; solver kanunu değil. ICM ve büyük boy hepsini daha da sıkar.",
      },
    ],
  },
  {
    id: "M40",
    title: "Polarize ne demek — ve neden elin açık oluyor",
    chapter: "Bölüm 18 + Bölüm 11",
    minutes: 5,
    slides: [
      {
        title: "Polarize, elin değil ARALIĞIN özelliğidir",
        bullets: [
          "Soru şu değil: 'elim polarize mi?' Öyle bir şey yok.",
          "Soru şu: bu bahsi yaptığım TÜM eller listesinde ne var?",
          "Polarize = uçlar var, orta yok. Merged = tepeden aşağı süreklilik var.",
          "Tek bir eli görüp polarize diyemezsin; bahsin içindeki listeye bakarsın.",
        ],
        ruleBox: "Polarize bir el sıfatı değil, aralık sıfatıdır. 'Bu elle polarize oynuyorum' cümlesi anlamsızdır.",
        narration:
          "Önce en sık yapılan kavram hatasını temizleyelim. Polarize bir elin özelliği değildir. Elim polarize mi diye soramazsın, öyle bir şey yok. Polarize, senin o bahsi yaptığın tüm ellerin listesinin özelliğidir. Şöyle düşün: bu boyu bu spotta hangi ellerle yapıyorum diye bir liste çıkar. O listede sadece çok güçlü eller ve blöfler varsa, ortada hiçbir şey yoksa, aralığın polarizedir. Yani iki uçta toplanmıştır. Eğer listede en güçlüden aşağı doğru bir süreklilik varsa, iyi eller, orta iyi eller, biraz da blöf, o zaman aralığın merged'dir; Türkçesiyle birleşik ya da lineer. Bu ayrımı bir kez oturttuğunda boyut seçimi kendiliğinden gelir, çünkü ikisi ayrı ayrı seçilen şeyler değil, aynı kararın iki yüzüdür.",
      },
      {
        title: "Polarize → büyük boy. Sebebi mekanik.",
        bullets: [
          "Aralığında sadece nut'lar ve blöfler varsa orta eli bahse koymamışsındır.",
          "Orta eller check/call tarafında kalır — orası onların doğru yeri.",
          "Rakibe pahalı bir soru sorarsın: nut'a mı blöfe mi bakıyorum?",
          "Overbet bunun uç örneğidir: pottan büyük bahis, ortada el yok.",
        ],
        ruleBox: "Büyük boy orta eli taşımaz. Büyük boyla orta el gösterirsen kendi kendine tuzak kurmuş olursun.",
        narration:
          "Polarize aralık büyük boyla gider ve bunun sebebi tamamen mekaniktir. Aralığında sadece çok güçlü eller ve blöfler varsa, orta güçteki ellerini o bahse koymamışsın demektir. Onlar check ve call tarafında kalır, ki zaten doğru yerleri orasıdır; orta el ne rakibin daha iyisini katlatır ne daha kötüsünden para alır. Bahsi büyük yaptığında rakibe pahalı bir soru sorarsın: karşımda nut mu var, blöf mü? Yanlış cevap ona çok pahalıya patlar. Overbet, yani pottan büyük bahis, bunun uç örneğidir; orada ortada hiç el yoktur. Buradan çıkan pratik kural şu: büyük boy orta eli taşımaz. Eğer büyük boyla orta güçte bir el gösteriyorsan kendi kendine tuzak kurmuşsundur, çünkü sadece senden iyi eller ödeyecektir.",
      },
      {
        title: "Merged → küçük boy. Amaç ucuza geniş ödetmek.",
        bullets: [
          "Merged aralıkta blöf dilimi incedir; iyi ellerin çoğunluktadır.",
          "Küçük boy rakibin geniş aralığından ucuz ödeme toplar.",
          "Downbet, yani küçük bahis, merged aralığın işaretidir.",
          "Küçük boyla saf nut oynarsan masada para bırakırsın.",
        ],
        ruleBox: "Kitabın kısa hali: overbet polarize, downbet merged. Boyu görünce aralığın adını koyabilirsin.",
        narration:
          "Merged aralık ise tam tersidir. Blöf dilimi incedir, ellerin çoğunluğu gerçekten iyidir ama nut değildir. Bu aralık küçük boyla gider, çünkü amaç rakibi katlatmak değil, geniş aralığından ucuza para toplamaktır. Küçük bahis, yani downbet, merged aralığın tipik işaretidir. Burada da simetrik bir hata var: küçük boyla saf nut oynarsan masada para bırakırsın, çünkü rakip ucuza görüp kurtulur. Kitabın kısa hali şu iki kelimeyle akılda kalır: overbet polarize, downbet merged. Bu cümlenin güzelliği şu, tersten de çalışır. Masada rakibin boyunu gördüğünde onun aralığının adını koyabilirsin: büyük bahis geldiyse karşındaki ya çok güçlü ya blöf; küçük bahis geldiyse karşında geniş ve orta ağırlıklı bir aralık var.",
      },
      {
        title: "Hangisini seçerim? Rakibin call oranına bak.",
        bullets: [
          "Az call eden rakibe karşı: polarize ve büyük — fold equity çalışıyor.",
          "Çok call eden rakibe karşı: merged ve küçük — blöf işlemez, değer al.",
          "Board da konuşur: nut avantajı sende ve rakip capped ise polarize.",
          "Islak, bağlantılı board ve multiway'de merged tarafa kay.",
        ],
        ruleBox: "Polarlığı senin elin değil rakibin devam aralığı seçer. Önce 'bu adam ne kadar call ediyor?' diye sor.",
        narration:
          "Peki masada hangisini seçeceğine nasıl karar verirsin? Tek soruyla: bu rakip bu spotta ne kadar call ediyor? Az call eden birine karşı polarize ve büyük oynarsın, çünkü fold equity'n gerçekten çalışıyor; blöflerin para kazanıyor. Çok call eden birine karşı merged ve küçük oynarsın, çünkü blöf işlemez, orada işin değer almaktır. Board da konuşur. Nut avantajı sendeyse, yani senin aralığın o board'un en güçlü ellerini içeriyor ve rakibinki içermiyorsa, polarize oynayabilirsin. Islak ve bağlantılı board'da ya da çok kişili potlarda merged tarafa kayarsın, çünkü orada rakip geniş devam eder. Aklında tutulacak cümle şu: polarlığı senin elin seçmez, rakibin devam aralığı seçer.",
      },
      {
        title: "'Standart oynuyorum, elim açık oluyor' — asıl teşhis",
        bullets: [
          "Sorun ellerin değil; her boyla tek tip aralık göstermen.",
          "Büyük boy hep nut, küçük boy hep orta el olursa rakip elini bedavaya okur.",
          "Çözüm: aynı boyda hem değer hem blöf taşı — o zaman doğru fold edemez.",
          "Bu 'daha çok blöf yap' demek değil; her boyun içine iki taraf da koy demek.",
        ],
        ruleBox: "Okunabilirlik el seçiminden değil, boy-aralık eşleşmenin sabitlenmesinden doğar.",
        narration:
          "Şimdi asıl derdine gelelim. Standart oynuyorum, elim açık oluyor diyorsun. Teşhis şu: sorun oynadığın eller değil, her boyla tek tip aralık göstermen. Eğer büyük bahsin her zaman gerçekten güçlü bir el, küçük bahsin her zaman orta güçte bir el anlamına geliyorsa, rakip elini bedavaya okur. Hiçbir şeyi yanlış oynamıyor olabilirsin ve yine de tahmin edilebilirsin, çünkü boyların bilgi sızdırıyor. Çözüm de basit ama disiplin ister: aynı boyun içine hem değer ellerini hem blöflerini koy. Büyük bahis yaptığında bunu bazen nut'la bazen blöfle yap. O zaman rakip doğru fold edemez, çünkü hangi tarafta olduğunu bilemez. Dikkat, bu daha çok blöf yap demek değil. Her boyun içine iki tarafı da koy demek. Blöf oranını board ve rakip belirler; senin işin, boy ile aralık arasındaki sabit eşleşmeyi kırmak.",
      },
    ],
  },
  {
    id: "M41",
    title: "SB'de multiway: biri açtı, iki kişi gördü",
    chapter: "Bölüm 4.4 + Bölüm 13",
    minutes: 7,
    slides: [
      {
        title: "Spot: açan var, iki caller var, sen SB'desin",
        bullets: [
          "Bu masadaki en kötü koltuktasın — üç rakibe karşı da pozisyon dışısın.",
          "Üstelik aksiyonu KAPATMIYORSUN: BB hâlâ arkanda ve squeeze edebilir.",
          "Fiyat cazip görünür çünkü zaten yarım blind koymuşsun.",
          "'Fold ediyordum ama görmek lazım' hissi tam burada doğar — ve çoğunlukla yanlıştır.",
        ],
        ruleBox: "SB'de multiway flat, pokerdeki en pahalı 'ucuz' karardır: iyi fiyat, en kötü koltuk.",
        narration:
          "Spotu netleştirelim. Biri açtı, arkasından iki kişi call etti, sıra sana geldi ve sen small blind'dasın. Şunu baştan gör: bu el boyunca masadaki en kötü koltuktasın. Üç rakibin de arkanda oturuyor, yani flop, turn ve river'da her zaman ilk sen konuşacaksın. Dahası, aksiyonu kapatmıyorsun; big blind hâlâ arkanda ve senin call'ını görüp squeeze edebilir. Buna rağmen fiyat cazip görünür, çünkü zaten yarım blind koymuşsun ve potta üç kişinin parası var. İşte fold ediyordum ama görmek lazım hissi tam buradan doğar. O his gerçek, matematiğin bir kısmı da gerçek, ama sonuç çoğunlukla yanlış. Şimdi neden yanlış olduğuna bakalım.",
      },
      {
        title: "Kitabın üç şartı: SB burada BİRİNCİ şartta çakılıyor",
        bullets: [
          "Coldcall'un üç şartı: pozisyon, derinlik, ödeyen rakip. Üçü birden yoksa flat yok.",
          "1. Pozisyon: ya IP olacaksın ya aksiyonu kapatacaksın (BB). SB ikisini de sağlamıyor.",
          "2. Derinlik: set-mining için call'un en az on beş katı arkanda kalmalı.",
          "3. Ödeyen rakip: tutturduğunda sana parayı verecek biri masada olmalı.",
          "SB multiway spotu birinci şartı YAPISAL olarak sağlayamaz — el ne olursa olsun.",
        ],
        ruleBox: "Üç şart bir 've' listesidir, 'veya' değil. Biri eksikse el ne kadar güzel görünürse görünsün flat yok.",
        narration:
          "Kitap coldcall'u üç şarta bağlar ve bunlar bir ve listesidir, veya listesi değil. Üçü aynı anda sağlanmıyorsa flat etmezsin. Birinci şart pozisyon: ya pozisyonda olacaksın ya da aksiyonu kapatacaksın, yani big blind olacaksın. İkinci şart derinlik: set için oynuyorsan, koyduğun paranın en az on beş katı arkanda kalmalı. Üçüncü şart ödeyen rakip: elini tutturduğunda sana para verecek biri olmalı, sıkı bir rege karşı set aramak kârsızdır. Şimdi bak: small blind'da multiway bir potta birinci şartı sağlaman mümkün değil. Pozisyonda değilsin ve aksiyonu da kapatmıyorsun. Bu bir el seçimi meselesi değil, koltuğun yapısal özelliği. Yani elin ne olursa olsun o şart açık kalıyor.",
      },
      {
        title: "Derinlik şartı da genelde tutmaz",
        bullets: [
          "Turnuva bandında (30–60bb) call'un on beş katı çoğu zaman arkanda kalmaz.",
          "Örnek: kırk big blind'sın, üç big blind'lık call yapıyorsun → arkanda otuz yedi kalır.",
          "Otuz yedi bölü üç yaklaşık on iki — on beş şartının altında.",
          "Yani sadece pozisyon değil, derinlik de çoğu zaman 'hayır' diyor.",
        ],
        ruleBox: "Yüz big blind'de üç big blind call için kırk beş big blind arkada olmalı. Kırk big blind'de aynı call bu şartı sağlamaz.",
        narration:
          "İkinci şarta bakalım, çünkü çoğu oyuncu burada da kendini kandırır. Set-mining için call'un en az on beş katı arkanda kalmalı. Yüz big blind derinlikte üç big blind'lık bir call yapıyorsan, arkanda kırk beş big blind ve üstü kalmalı; bu tamam. Ama sen turnuvadasın ve sık sık otuz ile altmış big blind arasındasın. Kırk big blind'ken üç big blind call edersen arkanda otuz yedi kalır; otuz yedi bölü üç yaklaşık on iki eder, yani on beş şartının altında. Sonuç şu: küçük çiftle set aramak için gereken derinlik bile çoğu zaman yok. Yani small blind'daki bu spotta sadece pozisyon şartı değil, derinlik şartı da genellikle hayır diyor. İki şart birden düştüğünde geriye tartışacak bir şey kalmaz.",
      },
      {
        title: "İyi fiyat, kötü realizasyon: ikisi aynı şey değil",
        bullets: [
          "Pot oranı sana sadece CALL'ın fiyatını söyler — elin tamamının fiyatını değil.",
          "Equity realization = o equity'nin kaçını gerçekten tahsil edebildiğin.",
          "Üç rakibe karşı pozisyon dışıyken realizasyonun masadaki EN DÜŞÜK olanıdır.",
          "İyi fiyat çarpı kötü realizasyon, yine kötü bir karardır.",
        ],
        ruleBox: "Pot oranı 'girmeye değer mi' sorusunun yarısıdır. Diğer yarısı: girdikten sonra bu eli oynayabilecek miyim?",
        narration:
          "Şimdi görmek lazım hissinin altındaki matematiği düzeltelim. Pot oranı sana bir şey söyler: bu call'ın fiyatı nedir. Ama sana elin tamamının fiyatını söylemez. Aradaki fark equity realization'dır, yani kâğıt üstündeki equity'nin ne kadarını gerçekten tahsil edebildiğin. Pozisyon dışıyken ve üç rakibe karşıyken realizasyonun masadaki en düşük olanıdır. Her sokakta ilk sen konuşursun, blöf yapman zorlaşır, orta güçteki ellerinle kaç sokak ödeyeceğini bilemezsin ve arkanda hâlâ bir big blind vardır. Yani formül şu: iyi fiyat çarpı kötü realizasyon, yine kötü bir karar eder. Üç kişi potta diye girdiğin el, tam da üç kişi potta olduğu için oynanamaz hale gelir. Bu iki cümleyi ayırdığın gün bu spot senin için biter.",
      },
      {
        title: "Multiway matrisi: tam da o eller değer kaybediyor",
        bullets: [
          "Üç+ yollu potta top pair BİR SINIF düşer → check / pot kontrol.",
          "Blöf neredeyse yok olur — sadece nut-bloker'lı semi-bluff yaşar.",
          "Non-nut renk çekilişi ve gutshot: check'e döner ya da ölür.",
          "Connector ve Jx suited'in ürettiği şey tam olarak bunlar: ikinci en iyi el ve nut olmayan çekiliş.",
        ],
        ruleBox: "Multiway'de yaşayan tek çekiliş NUT çekilişidir. İkinci en iyi renk multiway'de kâr değil, gider kalemidir.",
        narration:
          "Şimdi işin asıl acı kısmına gelelim: multiway'de tam olarak senin görmek istediğin eller değer kaybeder. Kitabın heads-up'tan üç yollu potlara geçiş matrisi şunu söylüyor. Üç ya da daha çok kişi varken top pair bir sınıf düşer, artık değer eli değil check ve pot kontrol elidir. Blöf neredeyse tamamen ortadan kalkar; sadece nut bloker taşıyan semi-blöfler yaşar. Nut olmayan renk çekilişi ve gutshot ya check'e döner ya tamamen ölür. Şimdi kendine sor: connector ve düşük vale suited eller sana ne üretir? İkinci en iyi el ve nut olmayan çekiliş. Yani multiway'de en çok değer kaybeden iki kategori. Nut renk çekilişi ise matriste yerini korur, bet edilmeye devam eder, çünkü tamamlandığında çok ödenir. Bu ayrımı aklında tut, birazdan istisnanın temeli bu olacak.",
      },
      {
        title: "Kaçırdığın hamle call değil: SQUEEZE",
        bullets: [
          "Coldcaller'ın aralığı sıkı AMA zayıftır: 4-bet edemez, çoğu eli fold eder.",
          "Kitap squeeze'i 'canlıda en kârlı tek hamle' diye tanımlar.",
          "Blind'lardan boyut: açılışın beş katı ve üstü — iki caller varsa daha da yukarı.",
          "Value: JJ+, AQs+, AKo. Blöf: A5s–A4s, KQs, AJs (bloker + oynanabilirlik).",
        ],
        ruleBox: "SB'de üçüncü kutu flat değil squeeze'dir. Potta iki caller'ın ölü parası varken en çok kazanan hamle budur.",
        narration:
          "Şimdi asıl cevaba geliyoruz. Sen bu spotta iki seçenek görüyorsun, fold ya da call. Kaçırdığın üçüncü seçenek call değil, squeeze. Kitap squeeze'i canlı oyunda en kârlı tek hamle diye tanımlar ve sebebi şu: coldcaller'ların aralığı sıkı ama zayıftır. O iki kişi call ettiyse dört-bet edebilecek elleri yok demektir; büyük bir raise gördüklerinde çoğu elini atarlar. Üstelik potta artık üç kişinin ölü parası var ve sen o parayı tek hamlede alabilirsin. Boyut önemli: blind'lardan squeeze açılışın beş katı ve üstüdür, iki caller varken daha da yukarı çıkarsın. Değer tarafı vale-vale ve üstü, as-kız suited ve üstü, as-papaz offsuit. Blöf tarafı as-beş ve as-dört suited, papaz-kız suited, as-vale suited; bunlar hem bloker taşır hem çağrıldığında oynanabilir. Yani cevabın fold ya da squeeze; ortadaki flat kutusu yine yok.",
      },
      {
        title: "Squeeze'i NE ZAMAN kesersin — tek soru",
        bullets: [
          "Coldcaller sıkıysa: blöf tarafını genişlet, fold equity yüksek.",
          "Coldcaller balıksa (fold etmiyorsa): blöfü TAMAMEN kes, sadece value squeeze.",
          "Yani squeeze otomatik değil; rakibin fold etme yeteneğine bağlı.",
          "Fold etmeyen iki kişi varsa spot geri fold'a döner — çünkü blöf de call de çalışmıyor.",
        ],
        ruleBox: "Squeeze'in yakıtı fold equity'dir. Karşındakiler fold etmiyorsa squeeze blöfü değil, sadece value kalır.",
        narration:
          "Squeeze'i otomatik bir refleks yapma; tek bir soruya bağlı. O coldcaller'lar fold ediyor mu? Sıkı oyunculara karşı blöf tarafını genişletirsin, çünkü fold equity'n yüksek ve zaten kaybedecekleri bir şey olmadığı için kolay atarlar. Ama karşındakiler balıksa, yani bir kere para koyduktan sonra fold etmiyorlarsa, blöf tarafını tamamen kesersin; geriye sadece değer squeeze'i kalır. Bu ayrımın pratik sonucu şu: masada fold etmeyen iki kişi varsa bu spot senin için tekrar fold'a döner. Çünkü blöf çalışmıyor, call zaten pozisyon yüzünden çalışmıyor, geriye sadece gerçek elle değer almak kalıyor. Bu kötü bir haber değil; bu, o elleri neden atman gerektiğinin ikinci sebebi. Bir spotta hem blöfün hem call'ın çalışmıyorsa, o spot senin spotun değildir.",
      },
      {
        title: "Peki hiç mi görmüyorum? İstisna dar ve şartlı",
        bullets: [
          "Nut potansiyeli olan suited Ax: multiway'de yaşayan tek çekiliş sınıfı.",
          "Küçük çift: SADECE derinlik on beş katı sağlıyorsa ve ödeyen rakip varsa.",
          "İki şart daha: BB'nin squeeze'i tehdit değilse ve boy gerçekten küçükse.",
          "Connector ve düşük Jx suited bu istisnanın İÇİNDE değil — onlar nut yapmaz.",
        ],
        ruleBox: "İstisnanın testi 'ucuz mu' değil, 'nut yapabiliyor muyum'. Nut yapamayan el multiway'de ikinci olmak için para koyar.",
        narration:
          "Peki hiç mi flop görmüyorsun? Görüyorsun ama istisna dar ve şartlı. Birinci sınıf, nut potansiyeli olan suited as'lar. Bunlar multiway'de yaşayan tek çekiliş sınıfıdır, çünkü renk geldiğinde en üstteki rengi yaparsın; matris de nut renk çekilişinin değerini koruduğunu söylüyor. İkinci sınıf küçük çiftler, ama sadece derinlik on beş katı şartını gerçekten sağlıyorsa ve masada tutturduğunda ödeyecek biri varsa. Bunlara iki şart daha eklenir: big blind'ın squeeze'i ciddi bir tehdit olmamalı ve açılış boyu gerçekten küçük olmalı. Şimdi dikkat: connector'lar ve düşük vale suited eller bu istisnanın içinde değil. Sebebi basit, onlar nut yapmaz. Testin ucuz mu değil, nut yapabiliyor muyum. Nut yapamayan bir el multiway pota ikinci en iyi olmak için para koyar.",
      },
      {
        title: "Cheat: SB multiway kartı",
        bullets: [
          "Varsayılan FOLD. Bu bir zayıflık değil, koltuğun matematiği.",
          "Güçlü elle: squeeze (beş kat ve üstü) — flat değil.",
          "Nut potansiyeli + iyi fiyat + BB sakin + derinlik tamam → dar bir flat penceresi.",
          "Coldcaller'lar fold etmiyorsa: blöfü kes, spot fold'a döner.",
          "Connector / düşük Jx suited: bu spotun eli değil. Onları BTN ve CO'da oyna.",
        ],
        ruleBox: "SB multiway'de üç kutu var: fold, squeeze, ve çok dar bir nut-potansiyelli flat. Ortada 'ucuz gördüm' kutusu yok.",
        narration:
          "Cep kartı. Small blind'da biri açtı ve arkasından call'lar geldiyse varsayılanın fold. Bu zayıf oynamak değil, koltuğun matematiği; pozisyon dışısın ve aksiyonu kapatmıyorsun. Elin gerçekten güçlüyse hamlen squeeze, açılışın beş katı ve üstü; flat değil. Flat penceresi çok dar ve dört şartı birden ister: elin nut potansiyeli olacak, yani suited as; fiyat gerçekten iyi olacak; big blind squeeze tehdidi olmayacak; ve derinlik on beş katı sağlayacak. Coldcaller'lar fold etmeyen tiplerse blöf squeeze'ini kes, spot yine fold'a döner. Son olarak şunu net söyleyeyim: connector'lar ve düşük vale suited eller bu spotun eli değildir. Onlar pozisyonda parlar; butonda ve cut-off'ta oyna. Small blind'da onlarla flop görmek, üç rakibe karşı pozisyon dışı ikinci en iyi eli aramak demektir.",
      },
    ],
  },
  {
    id: "M42",
    title: "BB savunması: 'zaten ante koydum' nerede biter",
    chapter: "Bölüm 4.8 ⊕ kitap dışı sentez",
    minutes: 7,
    slides: [
      {
        title: "Sezgin kısmen DOĞRU — fiyat gerçekten iyi",
        bullets: [
          "BB-ante formatında 2x'e karşı aksiyonu KAPATIYORSUN: son sözü sen söylüyorsun.",
          "Kabaca yüzde on sekiz ile yirmi iki arası equity yeter — neredeyse her iki kart ham olarak bunu taşır.",
          "Butonun min-raise'ine karşı savunma gerçekten çok geniş: ellerin üçte ikisi civarı.",
          "Yani 'zaten ante koydum, bakarım' sezgisi çöp değil — bir yere kadar doğru.",
        ],
        ruleBox: "Bu modül seni geniş savunmaktan vazgeçirmek için değil; geniş savunmanın NEREDE bittiğini göstermek için.",
        narration:
          "Önce hakkını verelim: senin sezgin kısmen doğru. Big blind ante formatında, iki katlık bir açışa karşı aksiyonu kapatıyorsun, yani son sözü sen söylüyorsun ve arkanda kimse kalmıyor. Fiyat gerçekten çok iyi; kabaca yüzde on sekiz ile yirmi iki arasında bir equity yeterli oluyor ve neredeyse her iki kart ham olarak bu kadarını taşır. Butondan gelen bir min-raise'e karşı doğru savunma gerçekten çok geniştir; ellerinin üçte ikisi civarı. Yani zaten ante koydum, bakarım cümlesi çöp bir cümle değil. Ama bir yere kadar doğru. Bu modülün amacı seni geniş savunmaktan vazgeçirmek değil; geniş savunmanın tam olarak nerede bittiğini göstermek. O sınırı bilmediğin sürece doğru sezginin bedelini yanlış spotlarda ödersin.",
      },
      {
        title: "Ama pot oranı call'ı fiyatlar, ELİ fiyatlamaz",
        bullets: [
          "Ham equity ile tahsil ettiğin equity aynı şey değil — aradaki fark realizasyon.",
          "BB'de her sokakta OOP'sin: blöf zor, orta elle kaç sokak ödeyeceğin belirsiz.",
          "Çöp offsuit eller ham equity'lerinin belki üçte ikisini tahsil eder.",
          "Yani gerçek savunma eşiği, pot oranının söylediğinden YUKARIDA.",
        ],
        ruleBox: "Pot oranı 'girmeye değer mi'nin yarısı. Diğer yarısı: girdikten sonra bu eli oynayabilecek miyim?",
        narration:
          "Şimdi düzeltmemiz gereken ilk şey. Pot oranı sana bir şey söyler: bu call'ın fiyatı nedir. Ama elin tamamının fiyatını söylemez. Kâğıt üstündeki ham equity ile masada gerçekten tahsil ettiğin equity aynı şey değildir; aradaki farka equity realization diyoruz. Big blind'da her sokakta pozisyon dışısın. Blöf yapman zorlaşır, orta güçteki ellerinle kaç sokak ödeyeceğini bilemezsin, ve elini gerçekleştirmek için gereken kartları gördüğünde bile inisiyatif karşındadır. Çöp offsuit eller bu yüzden ham equity'lerinin belki üçte ikisini tahsil eder. Sonuç şu: gerçek savunma eşiği, pot oranının söylediği eşiğin yukarısındadır. Savunma geniştir, ama her iki kart değildir. Bu ikisi arasındaki mesafe senin masada kaybettiğin yer.",
      },
      {
        title: "Asıl ayrım: KİM min-raise etti?",
        bullets: [
          "'Hep min-raise geliyor' cümlesi açanı ayırmıyor — fiyat aynı, ARALIK aynı değil.",
          "BTN/CO min-raise: geniş aralık, zayıf tepe → geniş savun. Sezgin burada çalışıyor.",
          "UTG/EP min-raise: dar ve güçlü aralık → çok daha dar savun.",
          "Küçük boy bir davet değildir; erken pozisyondan küçük boy 'ucuza güçlü aralık' demektir.",
        ],
        ruleBox: "Aynı fiyat, iki ayrı karar. Savunma genişliğini boy değil AÇAN belirler.",
        narration:
          "Şimdi en önemli slayta geldik. Hep min-raise geliyor diyorsun ama bu cümle kimin min-raise ettiğini ayırmıyor. Fiyat aynı olabilir; aralık asla aynı değil. Butondan ya da cut-off'tan gelen bir min-raise geniş bir aralıktır ve tepesi zayıftır; ona karşı gerçekten çok geniş savunursun, sezgin burada birebir çalışır. Ama en erken pozisyonlardan gelen bir min-raise dar ve güçlü bir aralıktır. Aynı ucuz fiyata, çok daha kötü bir aralığa karşı oynuyorsun. Şunu net söyleyeyim: küçük boy bir davet değildir. Erken pozisyondan gelen küçük boy, ucuza güçlü aralık demektir; rakip seni içeride tutmak istiyor olabilir. Yani savunma genişliğini bahsin boyu değil, o bahsi yapan koltuk belirler. Bu tek ayrımı masaya taşırsan bu modülün parasını çıkarırsın.",
      },
      {
        title: "Domine olmak: ucuz fiyattan pahalı el satın almak",
        bullets: [
          "Erken açışa karşı Q7o, K5o gibi eller 'ucuz' ama domine edilmeye açık.",
          "Çift yaptığında bile en sık senden iyi bir kicker'a karşı çift yapmış olursun.",
          "En çok kaybettiğin eller tutturamadıkların değil — ikinci en iyi olduklarındır.",
          "Ters implied odds: ucuz girdiğin el, pahalı sokaklarda seni bırakmıyor.",
        ],
        ruleBox: "Fiyat girişi ucuzlatır, çıkışı değil. Domine el ucuz girer, pahalı çıkar.",
        narration:
          "Bu slayt bir öncekinin mekaniği. Erken pozisyondan bir açışa karşı kız-yedi offsuit ya da papaz-beş offsuit gibi elleri savunduğunda ucuz bir el aldığını sanırsın. Aslında domine edilmeye açık bir el aldın. Bu ellerin sorunu tutturamamak değil; asıl sorun tutturduklarında ortaya çıkar. Papazın geldi, üst çift yaptın, ve tam da bunu istediğin an karşındaki adamın papaz-kız ya da as-papaz olma ihtimali yüksek. Yani en çok para kaybettiğin eller kaçırdıkların değil, ikinci en iyi olduklarındır. Buna ters implied odds diyoruz: ucuz girdiğin el, pahalı sokaklarda seni bırakmıyor, çünkü elinde bir şey var ve atmak zor geliyor. Aklında kalsın: fiyat girişi ucuzlatır, çıkışı ucuzlatmaz.",
      },
      {
        title: "Araya caller girdiyse: fiyat İYİLEŞİR, aralık DARALIR",
        bullets: [
          "Açan + caller varken pot oranın daha da iyi görünür — tuzak burada.",
          "Artık tek bir aralığı değil, iki ya da üç aralığı birden geçmen gerekiyor.",
          "Multiway'de bağlantı değil NUT potansiyeli değer kazanır.",
          "Suited Ax ve çiftler öne geçer; offsuit broadway ve zayıf bağlantılılar düşer.",
        ],
        ruleBox: "Multiway'de 'daha iyi fiyat' daha geniş savunma demek değildir. Daha çok rakip = daha yüksek eşik.",
        narration:
          "Şimdi araya caller girdiği durum. Açan var, bir ya da iki kişi call etti ve sen big blind'dasın. Pot oranın daha da iyi görünür ve tuzak tam burada. Fiyat gerçekten iyileşti, ama artık tek bir aralığı değil, iki ya da üç aralığı birden geçmen gerekiyor. Bir eli kazanma ihtimalin, rakip sayısı arttıkça hızla düşer. Bu yüzden multiway'de savunma aralığın genişlemez, daralır; ve sadece daralmaz, dokusu da değişir. Bağlantı değil nut potansiyeli değer kazanır. Suited as'lar ve çiftler öne geçer, çünkü ilki en üstteki rengi yapar ve ikincisi set yapar. Offsuit broadway ve zayıf bağlantılı eller düşer, çünkü onların ürettiği şey multiway'de ikinci en iyi eldir. Kural olarak şunu tut: daha çok rakip, daha yüksek eşik.",
      },
      {
        title: "ICM katmanı: balonda geniş savunma pahalıdır",
        bullets: [
          "Risk primi varken marjinal spotlara OOP girmek çipten fazlasına mal olur.",
          "Geniş savunma seni capped bir aralıkla zor kararların içine sokar.",
          "Seni cover eden biri açtıysa eşik daha da yukarı çıkar.",
          "chipEV'de doğru olan savunma genişliği, balonda otomatik doğru değildir.",
        ],
        ruleBox: "ICM savunmayı iki yönden sıkar: hem eşiği yükseltir hem de yanlış karar verdiğinde bedeli büyütür.",
        narration:
          "Bir katman daha var: ICM. Ödeme sınırına yaklaşıyorken ya da masada gerçek sıçramalar varken, marjinal spotlara pozisyon dışı girmek sana sadece çip kaybettirmez; hayatta kalma değerini de yakar. Geniş savunma seni capped bir aralıkla zor kararların içine sokar; yani elinde en güçlü eller yokken büyük bahislerle karşılaşırsın ve doğru cevabı bulmak pahalıdır. Seni cover eden biri açtıysa eşik daha da yukarı çıkar, çünkü elenme riski gerçek. Buradaki kural basit ama sık unutulur: chip EV'de doğru olan savunma genişliği, balonda otomatik olarak doğru değildir. Aynı el, aynı fiyat, aynı pozisyon; ama masadaki para yapısı değişince cevap değişir. ICM savunmayı iki yönden sıkar: eşiği yükseltir ve yanlış karar verdiğinde bedeli büyütür.",
      },
      {
        title: "Geniş savunmanın bedeli FLOPTA ödenir",
        bullets: [
          "Geniş savunmanın EV'si, c-bet'e ÇOK fold edebilme disiplininden gelir.",
          "Savunup sonra flopta yapışırsan teorideki kâr pratikte zarara döner.",
          "İki kart aldın diye o pota sahip değilsin — çoğu flopta hiçbir şeyin olmayacak.",
          "Geniş savunma bir hak değil, bir yükümlülüktür.",
        ],
        ruleBox: "Geniş savunmayı hak eden şey preflop cesaretin değil, postflop fold disiplinin.",
        narration:
          "Şimdi en çok atlanan kısım. Geniş savunmanın kârı preflop'ta doğmaz, flopta doğar. Ve o kâr tek bir beceriden gelir: c-bet'e çok fold edebilmek. Geniş savunduğunda floplarının büyük çoğunluğunda hiçbir şeyin olmayacak, bu normaldir ve planın parçasıdır. Ama savunup sonra her flopta bir bahane bulup devam edersen, teorideki kâr pratikte zarara döner. Aslında geniş savunan ve sonra fold edemeyen bir oyuncu, dar savunan bir oyuncudan çok daha fazla kaybeder. Şunu net söyleyeyim: iki kart aldın diye o pota sahip değilsin. Geniş savunma bir hak değil, bir yükümlülüktür; yükümlülük de fold disiplinidir. Kendine dürüst bir soru sor: geçen ay big blind'da savunduğun çöp ellerin kaçında flopta gerçekten atabildin? Cevap düşükse sorunun savunma genişliğinde değil, orada.",
      },
      {
        title: "Ve senin şikâyetine bağlanıyor: her şeyi call etmek CAPPED aralık kurar",
        bullets: [
          "Sadece call ederek savunursan aralığında en güçlü eller hiç olmaz.",
          "Rakip bunu görür: büyük bahse karşı seni capped kabul edip baskı yapar.",
          "'Elim açık oluyor' şikâyetinin preflop kaynağı tam olarak budur.",
          "Panzehir: savunma aralığının bir kısmını 3-bet koluna taşı.",
        ],
        ruleBox: "Geniş call + hiç 3-bet = tanımı gereği capped. Aralığa tepe koymanın tek yolu bazı elleri raise etmektir.",
        narration:
          "Son olarak, bu modülü senin kendi şikâyetine bağlayalım. Elim açık oluyor diyordun. Big blind savunmasının bir kaynağı var. Eğer her şeyi sadece call ederek savunuyorsan, aralığında en güçlü eller hiç bulunmaz; çünkü onları da call etmişsindir ya da zaten üç-bet'lemişsindir. Yani call aralığın tanımı gereği capped'dir, tepesi yoktur. İyi bir rakip bunu görür ve büyük bahislerle seni sıkıştırır, çünkü senin çok güçlü bir el tutma ihtimalinin düşük olduğunu bilir. Panzehir savunmayı daraltmak değil; savunma aralığının bir kısmını üç-bet koluna taşımak. Big blind'dan üç-bet, hem ölü parayı hemen alır hem de call aralığına saygı kazandırır. Yani geniş savunmaya devam et, ama hepsini aynı kapıdan geçirme.",
      },
      {
        title: "Cheat: BB savunma kartı",
        bullets: [
          "Önce AÇANA bak, boya değil: BTN/CO → çok geniş; UTG/EP → belirgin dar.",
          "Araya caller girdiyse daralt ve dokuyu değiştir: nut potansiyeli > bağlantı.",
          "ICM varsa bir kademe daha sık; seni cover eden açtıysa bir kademe daha.",
          "Savunduğun ellerin bir kısmını 3-bet'e taşı — capped kalma.",
          "Ve asıl iş flopta: c-bet'e çok fold et. Savunmanın kârı orada.",
        ],
        ruleBox: "'Zaten ante koydum' cümlesi butona karşı doğru, UTG'ye karşı pahalı. Fiyat değil aralık konuşur.",
        narration:
          "Cep kartı. Big blind'da savunma kararı verirken önce açana bak, bahsin boyuna değil. Butondan ya da cut-off'tan geldiyse çok geniş savun; sezgin orada çalışıyor. En erken pozisyonlardan geldiyse belirgin şekilde daralt, çünkü aynı fiyata çok daha güçlü bir aralığa karşı oynuyorsun. Araya caller girdiyse savunmanı daralt ve dokusunu değiştir; multiway'de bağlantı değil nut potansiyeli kazanır. ICM baskısı varsa bir kademe daha sıkı ol, seni cover eden biri açtıysa bir kademe daha. Savunduğun ellerin bir kısmını üç-bet koluna taşı ki aralığın capped kalmasın. Ve en önemlisi: asıl iş flopta. C-bet'e çok fold edebiliyorsan geniş savunma sana para kazandırır; edemiyorsan aynı genişlik seni yakar. Kısacası zaten ante koydum cümlesi butona karşı doğru, en erken pozisyona karşı pahalıdır. Fiyat değil aralık konuşur.",
      },
    ],
  },
  {
    id: "M43",
    title: "Squeeze: masadaki en kârlı tek hamle",
    chapter: "Bölüm 4.6 ★",
    minutes: 8,
    slides: [
      {
        title: "Neden bu kadar kârlı: iki tür ölü para",
        bullets: [
          "Açan var, bir ya da iki kişi call etti, sen henüz konuşmadın: potta hazır para var.",
          "O parayı almak için kimseyi yenmene gerek yok — sadece katlatman yeterli.",
          "İki katman avantaj: potta ölü para VE karşındakilerin zayıf aralığı.",
          "Kitap bunu 'canlıda en kârlı tek hamle' diye tanımlar; abartı değil.",
        ],
        ruleBox: "Squeeze, elinin gücünden değil rakiplerin yapısal zayıflığından para kazanan bir hamledir.",
        narration:
          "Squeeze neden bu kadar önemli, önce onu oturtalım. Durum şu: biri açtı, arkasından bir ya da iki kişi call etti ve sıra sana geldi. Potta artık üç kişinin parası var ve bunların hiçbiri henüz gerçek bir taahhüt vermedi. O parayı almak için kimseyi yenmene gerek yok; sadece hepsini katlatman yeterli. Burada iki katman avantaj birden çalışıyor. Birincisi potta hazır bekleyen ölü para. İkincisi ve daha önemlisi, karşındakilerin aralıklarının yapısal olarak zayıf olması. Kitap squeeze'i canlı oyunda en kârlı tek hamle diye tanımlıyor ve bu bir abartı değil. Şunu iyi anla: squeeze elinin gücünden para kazanan bir hamle değildir. Rakiplerin yapısal zayıflığından para kazanan bir hamledir. Bu yüzden hangi elle yaptığın, kime karşı yaptığından daha az önemlidir.",
      },
      {
        title: "Coldcaller neden zayıf: kendi eliyle itiraf etmiştir",
        bullets: [
          "Call eden oyuncu 3-bet edebilirdi ama etmedi — yani tepe eller aralığında SEYREK.",
          "Aralığı sıkı ama capped: 4-bet edemez, büyük bir raise'e çoğu elini atar.",
          "Açan da zor durumda: arkasında caller varken bir raise'e cevap vermek pahalı.",
          "Yani tek hamleyle iki farklı zayıflığı aynı anda vuruyorsun.",
        ],
        ruleBox: "Coldcall bir bilgi sızıntısıdır: 'elim 3-bet edecek kadar iyi değil' demektir. Squeeze o itirafı ücretlendirir.",
        narration:
          "Şimdi mekanizmanın kalbine gelelim. O call eden oyuncu ne yaptı? Üç-bet etme imkânı vardı ve kullanmadı. Bu bir bilgi sızıntısıdır; elim üç-bet edecek kadar iyi değil demektir. Yani onun aralığında en güçlü eller seyrektir, aralığı capped'dir. Sıkıdır ama zayıftır; bu ikisi aynı anda doğru olabilir. Sonuç olarak dört-bet edemez ve büyük bir raise gördüğünde çoğu elini atar. Açan oyuncu da rahat değil. Arkasında bir caller varken bir raise'e cevap vermek onun için de pahalı, çünkü sadece seni değil, arkadaki adamı da hesaba katmak zorunda. Yani sen tek bir hamleyle iki farklı zayıflığı aynı anda vuruyorsun. Squeeze'in gücü buradan gelir, elinden değil. Coldcall bir itiraftır; squeeze o itirafı ücretlendirir.",
      },
      {
        title: "Boyut: normal 3-bet'ten BÜYÜK — ve caller başına artar",
        bullets: [
          "Pozisyondayken açılışın kabaca dört buçuk katı; blind'lardan beş kat ve üstü.",
          "Her ek caller için boyu yukarı taşı — daha çok ölü para, daha çok katlatılacak kişi.",
          "Küçük squeeze en pahalı hatadır: caller'a tam da aradığı ucuz call'ı verir.",
          "Boy sadece fold ettirmek için değil; çağrıldığında SPR'yi kontrol etmek için de.",
        ],
        ruleBox: "Squeeze'de küçük boy yoktur. Küçük yapacaksan hiç yapma — davetiye göndermiş olursun.",
        narration:
          "Boyut. Bu hamlede en sık yapılan hata boyu küçük tutmak, o yüzden net konuşalım. Squeeze normal bir üç-bet'ten büyüktür. Pozisyondayken açılışın kabaca dört buçuk katı, blind'lardan ise beş kat ve üstü. Ve her ek caller için boyu yukarı taşırsın, çünkü hem potta daha çok ölü para var hem de katlatman gereken kişi sayısı arttı. Küçük squeeze bu hamlenin en pahalı hatasıdır; caller'a tam da aradığı ucuz call'ı verirsin ve pozisyon dışı, kalabalık bir potta sıkışırsın. Boyun ikinci bir işlevi daha var: çağrıldığında stack-pot oranını kontrol etmek. Büyük squeeze flopta düşük bir oran bırakır, bu da senin lehinedir çünkü inisiyatif sende. Kural şu: squeeze'de küçük boy diye bir şey yok. Küçük yapacaksan hiç yapma, çünkü davetiye göndermiş olursun.",
      },
      {
        title: "Value malzemesi: net ve dar",
        bullets: [
          "Value tarafı: vale-vale ve üstü çiftler, as-kız suited ve üstü, as-papaz offsuit.",
          "Bu eller çağrıldığında da iyi durumda — squeeze'in 'kaybetmeyen' kanadı.",
          "Value squeeze her sahada çalışır: fold ederlerse alırsın, call ederlerse öndesin.",
          "Kararsızsan value tarafından başla; blöf tarafı saha bilgisi ister.",
        ],
        ruleBox: "Value squeeze hiçbir zaman kötü bir karar değildir. Blöf squeeze koşulludur — ayrımı karıştırma.",
        narration:
          "Value tarafı net ve dardır. Vale-vale ve üstü çiftler, as-kız suited ve üstü, as-papaz offsuit. Bu ellerin ortak özelliği şu: çağrıldıklarında da iyi durumdalar. Yani squeeze'in kaybetmeyen kanadı bunlar. Fold ederlerse ölü parayı alırsın, call ederlerse aralık olarak öndesin. Bu yüzden value squeeze her sahada çalışır; sıkı masada da, balık dolu masada da. Buradan çıkarman gereken pratik kural şu: eğer masayı henüz okuyamadıysan ya da kararsızsan, squeeze'i value tarafından öğrenmeye başla. Blöf tarafı saha bilgisi ister, value tarafı istemez. Çok oyuncu squeeze'i duyduğu an blöf yapmayı dener ve yanar; oysa bu hamlenin garantili parası value kanadındadır. Value squeeze hiçbir zaman kötü bir karar değildir.",
      },
      {
        title: "Blöf malzemesi: rakibin FOLD ettiği bloğu unblock et",
        bullets: [
          "Klasik liste (A5s, KQs, AJs) coldcaller pozisyonda VE dar olduğunda doğrudur.",
          "Ama caller capped ve geniş ise fold ettiği eller broadway'lidir: ATo, KTo, QTo, JTo.",
          "O bloğu bloklamayan elleri seç: 67s, 97s, 86s, 75s gibi broadway'siz suited'lar.",
          "T8s ve J9s tam tersini yapar — onlar o fold bloğunu bizzat bloklar.",
        ],
        ruleBox: "Tek test: 'kimin bloğunu unblock ediyorum?' Blöf, rakibin ATACAĞI elleri elinde tutmamalıdır.",
        narration:
          "Şimdi bu modülün en ince ve en değerli kısmı. Blöf malzemesi seçerken çoğu oyuncu tek bir mantık kullanır: bloker taşıyayım. As-beş suited as-as'ı bloklar, papaz-kız suited papaz-papaz'ı bloklar. Bu doğru, ama sadece coldcaller pozisyondayken ve dar bir aralığa sahipken doğru. Şimdi diğer duruma bak. Caller'ın aralığı capped ve genişse, senin squeeze'ine en sık fold ettiği eller hangileri? As-on offsuit, papaz-on offsuit, kız-on offsuit, vale-on offsuit gibi broadway'li eller. Yani onun fold bloğu broadway ve on'larla dolu. Şimdi kritik soru: sen o bloğu bloklamak mı istersin, unblock etmek mi? Unblock etmek istersin, çünkü o eller elindeyse rakibin onları tutma ihtimali düşer ve fold etmesini istediğin eller masada azalır. Bu yüzden bu düğümde iyi blöfler altı-yedi suited, dokuz-yedi suited, sekiz-altı suited gibi broadway'siz suited ellerdir. On-sekiz suited ve vale-dokuz suited ise tam tersini yapar; ikisi de on taşır ve rakibin atacağı elleri bizzat bloklar. Tek test şu: kimin bloğunu unblock ediyorum?",
      },
      {
        title: "Ne zaman YAPMA: fold etmeyen coldcaller",
        bullets: [
          "Squeeze'in yakıtı fold equity'dir. Fold etmeyen rakibe karşı blöf kanadı yanar.",
          "Caller balıksa (para koyduktan sonra atmıyorsa): blöfü TAMAMEN kes, sadece value.",
          "İki tane fold etmeyen adam varsa spot senin spotun değildir.",
          "Caller sıkıysa tersi: blöf tarafını genişlet, fold equity'n yüksek.",
        ],
        ruleBox: "Squeeze'i el değil rakip seçer. 'Kim fold ediyor?' sorusu bu hamlenin tek ön koşuludur.",
        narration:
          "Şimdi bu hamleyi ne zaman yapmayacağına gelelim, çünkü squeeze otomatik bir refleks olursa para kaybettirir. Squeeze'in yakıtı fold equity'dir. Karşındaki oyuncular fold etmiyorsa blöf kanadı yanar. Somut olarak: caller balıksa, yani bir kere para koyduktan sonra atmıyorsa, blöf tarafını tamamen kes ve sadece value squeeze yap. Masada iki tane fold etmeyen adam varsa o spot senin spotun değildir; ne blöf çalışır ne de kalabalık pota kötü bir elle girmek mantıklıdır. Tersi de doğru: caller sıkıysa ve büyük raise'lere saygı gösteriyorsa blöf tarafını genişlet, çünkü fold equity'n yüksek. Buradaki asıl ders şu: squeeze'i senin elin seçmez, rakibin seçer. Kim fold ediyor sorusu bu hamlenin tek ön koşuludur. Elini o sorudan sonra seç, önce değil.",
      },
      {
        title: "Squeeze etmeden önce cevabı hazır olsun: 4-bet gelirse ne yapıyorum?",
        bullets: [
          "Squeeze büyük bir boydur; stack'inin ciddi bir kısmını ortaya koyar.",
          "Blöfle squeeze ettiysen 4-bet'e cevabın fold — bunu ÖNCEDEN kabul et.",
          "Value'yla squeeze ettiysen derinliğe göre call ya da jam; kararını baştan ver.",
          "Sığ derinlikte squeeze commit yaratır: 'squeeze edip fold' yapısı çöker.",
        ],
        ruleBox: "Hamleyi yapmadan önce bir sonraki sokağın cevabını bilmiyorsan, o hamleyi yapmıyorsun demektir.",
        narration:
          "Squeeze etmeden önce cevaplaman gereken bir soru daha var: dört-bet gelirse ne yapacağım? Squeeze büyük bir boydur ve stack'inin ciddi bir kısmını ortaya koyar; bu yüzden bir sonraki sokak hayali değil, çok muhtemel bir gerçektir. Blöfle squeeze ettiysen dört-bet'e cevabın fold'dur ve bunu hamleyi yapmadan önce kabul etmelisin. Sonradan pişman olup call etmek, blöfün bütün kârını silen şeydir. Value'yla squeeze ettiysen derinliğe göre ya call edersin ya jam'lersin; ama bu kararı da baştan ver, dört-bet'i gördükten sonra değil. Bir de derinlik uyarısı: sığ stack'te squeeze seni fiilen commit eder. Yani squeeze edip fold etme yapısı çöker; o derinlikte ya squeeze etmezsin ya da all-in'e gitmeyi kabul etmişsindir. Genel kural şu: bir hamleyi yapmadan önce bir sonraki sokağın cevabını bilmiyorsan, o hamleyi yapmıyorsun demektir.",
      },
      {
        title: "Üçüncü oyuncu tuzağı: 'raise + call var, ben de bakayım'",
        bullets: [
          "Raise ve call gördükten sonra vale-on suited ile over-call klasik tuzaktır.",
          "Caller'ın papaz-kız suited'ı ve açanın vale-vale/as-vale'si seni domine eder.",
          "Önce sor: caller'ın aralığında gerçekten TEPE var mı?",
          "Havuzda genelde yoktur — premium'u hep 3-bet'ler. O zaman over-call değil AGRESYON.",
        ],
        ruleBox: "Üçüncü oyuncu olmak seni ucuza değil, iki aralığın arasına sokar. Kalabalık pot ucuz pot değildir.",
        narration:
          "Son bir tuzak. Raise gördün, arkasından call gördün ve elinde vale-on suited gibi güzel görünen bir el var. Ben de bakayım demek klasik tuzaktır. Sebebi şu: caller'ın papaz-kız suited ve kız-on suited gibi elleri, açanın da vale-vale, as-vale gibi elleri seni domine eder. Sen iki aralığın arasına sıkışırsın ve pozisyon da genelde sende değildir. Kendine önce şunu sor: bu caller'ın aralığında gerçekten tepe var mı? Dengeli oynayan biri bazı premium ellerini flat edebilir. Ama sahadaki tipik oyuncu bunu yapmaz; premium'unu neredeyse her zaman üç-bet'ler ve call aralığı küçük çiftlerle suited broadway'lere iner. Yani karşında tepe yok. Tepe yoksa doğru cevap over-call değil, agresyondur; ya squeeze ya fold. Kalabalık pot ucuz pot değildir.",
      },
      {
        title: "Cheat: squeeze kartı",
        bullets: [
          "Tetik: açan + en az bir caller, sen henüz konuşmadın.",
          "Önce tek soru: bu caller'lar fold ediyor mu? Hayırsa sadece value.",
          "Boy: IP dört buçuk kat, blind'lardan beş kat ve üstü; caller başına yukarı.",
          "Value: JJ+, AQs+, AKo. Blöf: rakibin FOLD bloğunu unblock eden suited'lar.",
          "4-bet'e cevabını önceden ver. Sığ derinlikte squeeze = commit.",
        ],
        ruleBox: "Squeeze'i öğrenmenin sırası: önce value kanadı, sonra saha okuması, en son blöf seçimi.",
        narration:
          "Cep kartı. Tetik basit: biri açtı, en az bir kişi call etti ve sen henüz konuşmadın. Önce tek soru sor: bu caller'lar fold ediyor mu? Cevap hayırsa sadece value squeeze yap, blöfü kes. Boy pozisyondayken açılışın dört buçuk katı, blind'lardan beş kat ve üstü, ve her ek caller için yukarı. Value tarafın vale-vale ve üstü, as-kız suited ve üstü, as-papaz offsuit. Blöf tarafında ise elinin bloklamasını değil, unblock etmesini istiyorsun: rakibin fold edeceği broadway'li elleri elinde tutma, broadway'siz suited'ları seç. Dört-bet gelirse ne yapacağını hamleden önce karara bağla; blöfse fold, value'ysa derinliğe göre. Sığ derinlikte squeeze seni commit eder, onu bilerek gir. Ve öğrenme sırası şu olsun: önce value kanadı, sonra saha okuması, en son blöf seçimi. Bu sırayla gidersen squeeze sana para kazandırır; ters giderek başlarsan kaybettirir.",
      },
    ],
  },
];

export function moduleById(id: string): Module | undefined {
  return modules.find((m) => m.id === id);
}
