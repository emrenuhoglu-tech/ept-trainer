const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Quiz-lt1LMIlr.js","assets/vendor-nf7bT_Uh.js","assets/quizEngine-B0GBrO-h.js","assets/Drill-_ESqbV4B.js","assets/kavramlar-D96rNycD.js","assets/DepthContrast-ZNZxxOzx.js","assets/Simulator-Di0SHmn2.js","assets/Progress-D3eGhRCS.js","assets/QuickReference-Bc-tk_rs.js","assets/Sentences-CoP6Lslc.js","assets/RangeAtlas-BiKM250x.js","assets/EquityIntuition-BtcniaD6.js","assets/BetTypes-DaRd3yLb.js","assets/QuestionBank-1apyKi_5.js","assets/IcmCard-BAzQLb7s.js"])))=>i.map(i=>d[i]);
var ke=Object.defineProperty;var ue=(e,i,n)=>i in e?ke(e,i,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[i]=n;var q=(e,i,n)=>ue(e,typeof i!="symbol"?i+"":i,n);import{r as u,a as be,R as qa}from"./vendor-nf7bT_Uh.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))r(l);new MutationObserver(l=>{for(const t of l)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(l){const t={};return l.integrity&&(t.integrity=l.integrity),l.referrerPolicy&&(t.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?t.credentials="include":l.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(l){if(l.ep)return;l.ep=!0;const t=n(l);fetch(l.href,t)}})();var Ya={exports:{}},ka={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var me=u,ce=Symbol.for("react.element"),ye=Symbol.for("react.fragment"),pe=Object.prototype.hasOwnProperty,fe=me.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,he={key:!0,ref:!0,__self:!0,__source:!0};function Ua(e,i,n){var r,l={},t=null,s=null;n!==void 0&&(t=""+n),i.key!==void 0&&(t=""+i.key),i.ref!==void 0&&(s=i.ref);for(r in i)pe.call(i,r)&&!he.hasOwnProperty(r)&&(l[r]=i[r]);if(e&&e.defaultProps)for(r in i=e.defaultProps,i)l[r]===void 0&&(l[r]=i[r]);return{$$typeof:ce,type:e,key:t,ref:s,props:l,_owner:fe.current}}ka.Fragment=ye;ka.jsx=Ua;ka.jsxs=Ua;Ya.exports=ka;var a=Ya.exports,ga={},Ma=be;ga.createRoot=Ma.createRoot,ga.hydrateRoot=Ma.hydrateRoot;const ve="modulepreload",ge=function(e){return"/ept-trainer/"+e},Ra={},M=function(i,n,r){let l=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));l=Promise.allSettled(n.map(d=>{if(d=ge(d),d in Ra)return;Ra[d]=!0;const k=d.endsWith(".css"),m=k?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const b=document.createElement("link");if(b.rel=k?"stylesheet":ve,k||(b.as="script"),b.crossOrigin="",b.href=d,o&&b.setAttribute("nonce",o),document.head.appendChild(b),k)return new Promise((f,c)=>{b.addEventListener("load",f),b.addEventListener("error",()=>c(new Error(`Unable to preload CSS for ${d}`)))})}))}function t(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return l.then(s=>{for(const o of s||[])o.status==="rejected"&&t(o.reason);return i().catch(t)})},ta=[{id:"M1",title:"Kök hata",chapter:"Bölüm 0 + Bölüm 7",minutes:6,slides:[{title:"Kök hata nedir",bullets:["Tek per, şişmiş potta bluff-catcher'dır — AA dahil.","River'da senden zayıf el ödemeyecekse, jam value değildir.","Chop'lar jam atmaz."],ruleBox:"Tek per, şişmiş potta bluff-catcher'dır — AA dahil. Kök hatan bu; üç elenme buradan geldi.",visuals:[{kind:"hand",cards:"AA",label:"Tek per — AA dahil"}],narration:"Bu modül tek bir hatanın etrafında dönüyor, çünkü seni üç kez eleyen şey hep aynıydı. Ona kök hata diyoruz. Cümlesi şu: tek per, şişmiş bir potta bir bluff-catcher'dır — as as dahil. Yani potun içinde çok para varken elinde sadece bir çift varsa, o el artık değer için değil, sadece rakibin blöfünü yakalamak için oynanır. Şunu kafana kazı: as as elinde diye o el şişmiş potta otomatik olarak canavar değildir; pot ne kadar büyükse rakibin seni geçmiş olma ihtimali de o kadar artar. İkinci cümle bunun river ayağı: river'da senden zayıf bir el seni ödemeyecekse, jam yani all-in value değildir. Value bet dediğin şey, senden zayıf bir eli ödetmek demek; ödeyecek zayıf el yoksa attığın all-in sadece güçlü elleri davet eder, seni geçenleri. Üçüncü cümle de bir okuma kısayolu: chop'lar jam atmaz. Yani ortada bölüşmeye, beraberliğe oynayan bir board varken rakip all-in geldiyse, o oyuncu bölüşen eli çoktan elinden çıkarmıştır — geldiği el bölüşen el değil, seni geçen eldir. Şimdi bu üç cümlenin masada nasıl para kaybettirdiğini üç gerçek vakada göreceğiz."},{title:"Vaka 1 — A4s river call",bullets:["$50K High Roller, WSOP 2026.","Chop mekaniğini doğru gördün, bir filtreyi atladın.","Chop'lar jam atmaz — mekaniği görmek yetmez."],visuals:[{kind:"hand",cards:"A4s",label:"Elin"}],narration:"Birinci vaka, elli bin dolarlık bir high roller. Board bölüşmeye açık, yani chop mekaniği masada. Ve sen bu mekaniği aslında doğru gördün — beraberlik ihtimalini fark ettin. Ama bir filtreyi atlayıp hero call yaptın ve ödedin. Atladığın filtre şuydu: chop'lar jam atmaz. Rakip sana all-in geldiyse, bölüşmeye oynayan eli aralığından çıkarmıştır; çünkü bölüşecek bir elle kimse tüm stack'ini ortaya sürmez, bölüşmek zaten paranı geri almak demektir, riske değmez. Yani onun jam'i, bölüşen elle değil, seni geçen bir elle geliyor. Buradan çıkan kural şu: bir mekaniği doğru görmek tek başına yeterli değildir. Board'da beraberlik var demek, işin yarısı. Diğer yarısı: rakibin hamlesi o mekanikle uyumlu mu? Beraberlik varsa ve rakip check'liyorsa, o beraberlik anlamlı. Ama beraberlik varken rakip jam'liyorsa, jam'in kendisi sana beraberliğin masadan kalktığını söylüyor. Hamleyi mekanikle birlikte oku."},{title:"Vaka 2 — KTo top pair check-raise all-in",bullets:["$10K 6-Handed. Islak board, top pair ile check-raise all-in.","Rakip flat'lediği QQ ile call etti.","Doğrusu: check-call, sonra değerlendir."],visuals:[{kind:"hand",cards:"KTo",label:"Elin (top pair)"},{kind:"hand",cards:"QQ",label:"Rakip (flat'lediği)"}],narration:"İkinci vaka, on bin dolarlık altı kişilik bir masa. Islak bir board, yani bağlantıların ve draw'ların bol olduğu bir zemin. Elinde top pair var, kral on ile bir kral flopladın diyelim, ve check-raise all-in yaptın. Rakip preflop flat'lediği kuvöz kuvöz ile seni ödedi ve elendin. Doğru oyun neydi? Check-call, sonra sokak sokak değerlendirmek. Top pair ıslak bir boardda büyük pot başlatıcı değildir. Neden? Çünkü sen tüm stack'i ortaya sürdüğünde, seni ödeyen aralık senden iyi. Zayıf eller, blöfler, draw'lar all-in'e call etmez, fold eder — seni sadece set'ler, üst çiftler, tamamlanmış eller öder. Yani stack'i sen başlattığın anda elini bir bluff-catcher'a çevirmiş oluyorsun ama bunu value oynuyormuş gibi yapıyorsun. Kural: tek per stack-off yakıtı değildir. Şişmiş pota giden yol, elinin sınıfını sessizce düşürür; sen hâlâ top pair'e bakıyorsun ama pot büyüdükçe o el bir bluff-catcher'a dönüşmüştür. Ödemek başka, başlatmak başka."},{title:"Vaka 3 — AA river jam",bullets:["PokerOK $108 Mystery Bounty, Temmuz 2026.","Board 2-4-5, river 6. Elin AA, rakip 66.","Flop ve turn value doğru — kötü river 6'da jam yanlış."],visuals:[{kind:"replay",replay:{hero:"AA",villain:"66",heroLabel:"Sen (AA)",villainLabel:"Rakip (66)",streets:[{name:"Preflop",note:"AA vs 66 — açık ara öndesin."},{name:"Flop",add:"2c 4d 5s",note:"Flop 2-4-5. AA hâlâ overpair ve önde; flop value doğru."},{name:"Turn",add:"??",note:"Turn (kitapta belirtilmemiş). Value almaya devam — buraya kadar oyun doğru."},{name:"River",add:"6h",note:"River 6 → 66 artık SET. Senden zayıf hiçbir el ödemez; jam value DEĞİL. Kök hata tam burada: kötü river'da overpair'i value gibi jam etmek."}]}}],narration:"Üçüncü vaka en taze ve en öğretici olanı. Board iki, dört, beş. Elinde as as, oyunun en güçlü başlangıç eli. Flop'ta value bet attın, doğru. Turn'de yine value bet attın, o da doğru — çünkü o ana kadar seni yedi, sekiz, dokuz gibi çiftlerden, zayıf ellerden para ödeyecek biri vardı. Sonra river altı geldi. Şimdi o board'a dikkatlice bak: iki, dört, beş ve şimdi altı. Bu kötü bir river, çünkü bu kartla senden zayıf hiçbir el seni ödemez. Düşün: elinde üç olan biri kenti tamamladı ve seni geçiyor; setler seni geçiyor — nitekim rakip river'da altı altı ile set yaptı. Senden zayıf olan her el, yani seni ödeyebilecek her el, ya pas geçiyor ya da o river'da seni geçmiş. Sen buna rağmen kalan stack'i jam ettin ve rakip river'da set yapan altı altı ile ödedi. Hata all-in'in kendisiydi. Value target yoktu. Kural net: river'da senden zayıf el ödemeyecekse jam value değildir. O kötü river'da elin hâlâ iyi görünüyor ama value'su bitmiş; küçük potta check-call edip ucuza showdown'a gidersin, büyük potta ise check-fold. As as'i bırakmak zor gelir ama bırakılması gereken yer tam burasıdır."},{title:"Üçünün tek kuralı",bullets:["Üç vakanın kök hatası aynı: tek per'in şişmiş/multiway potta yanlış sınıflandırılması.","Kötü river'da overpair: küçük pota check-call, büyük pota check-fold."],ruleBox:"River'da senden zayıf el ödemeyecekse jam value değildir. Kötü river'da overpair: küçük pota check-call, büyük pota check-fold.",narration:"Üç vakaya birlikte bak: farklı turnuvalar, farklı eller, farklı boardlar — ama kök hata bir tane. Tek per'in, as as dahil, şişmiş ya da çok kişili potta yanlış sınıflandırılması. Her seferinde elin sana güçlü göründü, ama pot büyüdükçe o el bir bluff-catcher'a dönüştü ve sen onu hâlâ value gibi oynadın. Masaya götüreceğin cümle şu: river'da senden zayıf bir el ödemeyecekse, jam value değildir. Ve pratik karşılığı: kötü bir river'da overpair'in varsa, küçük pota check-call yapıp ucuza görürsün, büyük pota ise check-fold. Bu modülü içine sindirirsen, seni eleyen o üç eli bir daha oynamazsın. Sıradaki modüllerde bu kök hatanın nereden doğduğunu — yani preflop'ta 3-bet aralıklarından — ve nasıl önleneceğini göreceğiz."}]},{id:"M2",title:"Blöf seçimi & board sahipliği",chapter:"Bölüm 1",minutes:6,slides:[{title:"Üç kriter",table:{section:"Bölüm 1",sub:"1.1",caption:"Biri eksikse blöf değil, sadece kaybedilen chip."},narration:"Blöf yapmak rastgele bir cesaret işi değil; bir eli blöf yakıtı yapan üç kriter var ve el bunların üçünden birden geçmeli. Birincisi bloker. Elindeki kart, rakibin en güçlü ellerini onun elinden alıyor mu? Mesela elinde maça as varsa, rakibin nut maça flush'ını bloke ediyorsun, yani onun en güçlü elini yapma ihtimalini azaltıyorsun. İkincisi bağlantı. El board'a temas ediyor, gelişebiliyor mu? Açık uçlu bir kent draw'u ya da flush draw'u gerçek bağlantıdır; sadece havada duran iki yüksek kart bağlantı değildir. Üçüncüsü board sahipliği. Bu board kimin aralığına çarpıyor? On dokuz sekiz gibi bir zemin genellikle savunan tarafın; as kral yedi gibi kuru bir zemin ise açan tarafın. Şimdi kritik nokta: bu üç kriterden biri bile eksikse, elin blöf değildir — sadece potun içine attığın ve kaybedeceğin chip'tir. Yani blöfe başlamadan önce üç soruyu da sor: bloke ediyor muyum, bağlanıyor muyum, board benim mi?"},{title:"J2s dersi — suited tuzağı",bullets:["Suited olmak bir eli blöf yakıtı yapmaz.","Aranan şey suited değil: bağlı ve bloker.","Offsuit broadway'de ters tuzak: KJo, QJo — bloker var, bağlantı yok."],visuals:[{kind:"hand",cards:"J2s KJo QJo",label:"Blöf yakıtı DEĞİL"}],narration:"Şimdi çok yaygın bir tuzağa bakalım: suited tuzağı. İnsanlar bir el suited diye onu otomatik olarak blöf için uygun sanıyor. Jek iki suited'i ele alalım. Bloker değeri var mı? Yok, kimsenin nut'ını almıyor, iki ve jek kimsenin güçlü elini bloke etmiyor. Bağlantısı var mı? Neredeyse yok, iki kartın arasında dokuz basamak boşluk var, düzgün bir kent draw'u yapması çok zor. Peki flush'ı tamamlansa? O zaman bile alt flush riski taşıyor, yani birileri daha yüksek bir flush'la seni ödeyebilir. Yani suited kelimesi seni kandırıyor; aradığın şey suited değil, bağlı ve bloker olan. Aynı tuzak offsuit broadway ellerde tam tersine çalışır. Kral jek offsuit, kız jek offsuit — bunların bloker değeri var, çünkü büyük kartları tutuyorlar, ama bağlantıları yok, board'a düzgün oturmuyorlar. Onlar da blöf yakıtı değil. Ders şu: ne suited olması ne de büyük kart olması tek başına bir eli blöfe uygun yapmaz; üç kriteri birlikte ara."},{title:"Board'un sahibi kim",bullets:["Check-raise blöf: SENİN aralığına çarpan boardlarda (T98, 765, J-orta).","Rakibin boardunda (A-K yüksek kuru): draw'lar sessizce call eder."],ruleBox:"Check-raise blöf SENİN aralığına çarpan boardlarda yapılır. Rakibin aralığına çarpan boardlarda (A-K yüksek kuru) draw'lar sessizce call eder.",visuals:[{kind:"board",cards:"Ts 9d 8c",label:"Senin boardun (T98) — check-raise blöf"},{kind:"board",cards:"7h 6s 5c",label:"Senin boardun (765)"},{kind:"board",cards:"Ah Kd 7c",label:"Rakibin boardu (A-K kuru) — call et"}],narration:"Diyelim üç kriterden geçen bir elin var. Yine de yanlış hamleyle oynayabilirsin, çünkü hamleyi board'un sahibi belirler. Kritik ayrım şu: check-raise blöfü, senin aralığına çarpan boardlarda yapılır — on dokuz sekiz, yedi altı beş, ortada jek olan bağlantılı zeminler. Bu boardlar savunan tarafın hikâyesine uyar, o yüzden check-raise'in inandırıcı olur. Ama board rakibin aralığına çarpıyorsa, mesela as kral yedi gibi yüksek ve kuru bir zemin, orada draw'ların sessizce call eder, check-raise etmez. Nedenini rakamla görelim. As kral yedi board'u, cut-off'un açılış aralığını ezer: as kral, as kız, as jek, kral kız, as yedi suited, yedi yedi, as as, kral kral — hepsi bu boarda çarpıyor. Peki senin büyük kör savunma aralığında kaç tane as-kral kombinasyonu var? Çok az. Yani sen bu boardda check-raise yaparsan, rakip 'bu adamın burada as-kral'ı olması zor' diye düşünür; inandırıcılığın düşüktür. Sonuç: iyi elleri fold ettiremezsin, onlar call eder; sadece zaten kazanamayacağın havayı fold ettirirsin. Havanın küçük potunu almak için gutshot'ını şişmiş potta riske atmış olursun. Bunun yerine call her şeyi çözer: ucuza bir turn görürsün, on gelirse gizli kentle tüm stack'i alırsın, maça gelirse agresifleşme opsiyonun doğar, boşsa da ucuza yoldan çekilirsin. Kuru, yüksek, rakibin boardunda: raise etme, call et."},{title:"Kime blöf yapılmaz",bullets:["Rec / station: fold etmez — value bet düşün.","Kısa stack: otomatik call bölgesinde.","Committed oyuncu: fold psikolojik olarak kapalı.","Bubble'da hayatta kalan büyük stack: bedavaya öder."],narration:"Son olarak, doğru el ve doğru board bile olsa, bazı rakiplere blöf yapılmaz. Birincisi rec ya da station tipi oyuncu; bu adam fold etmiyor, o yüzden ona blöf değil, value bet düşün — elin iyiyse ödet, kötüyse boşuna deneme. İkincisi kısa stack; call fiyatı onun stack'ine göre küçük kaldığından otomatik call bölgesindedir, blöfün onu atmaz. Üçüncüsü pota bağlanmış, committed oyuncu; belli bir noktadan sonra o oyuncuda fold psikolojik olarak kapanır, ne yaparsan yap öder. Ve dördüncüsü, bubble'da hayatta kalmaya oynayan büyük stack; o seni cezasız ödeyebilir, çünkü kaybetse bile turnuvadan düşmez, seni bedavaya ödemekten çekinmez. Blöf, doğru ele ek olarak doğru rakibi de ister. Yanlış kişiye yapılan mükemmel blöf, yine kaybedilen chip'tir."}]},{id:"M3",title:"Aldatıcı orta eller",chapter:"Bölüm 2",minutes:5,slides:[{title:"Küçük pot kazananı, büyük pot kaybedeni",bullets:["JTs, KQ, KJ, 97s.","Rolleri: open / flat / BB-defend.","Rolleri ASLA büyük pot başlatıcı (3-bet, stack-off) değil."],ruleBox:"JTs, KQ, KJ, 97s: küçük pot kazananı, büyük pot kaybedenidir. Rolleri open / flat / BB-defend; asla büyük pot başlatıcı değil.",visuals:[{kind:"hand",cards:"JTs KQ KJ 97s",label:"Aldatıcı orta eller"}],narration:"Bu modül bir grup elle ilgili: jek on suited, kral kız, kral jek, dokuz yedi suited. Bunlara aldatıcı orta eller diyoruz, çünkü iyi görünürler ama seni yanıltırlar. Tek cümlelik kimlikleri şu: küçük pot kazananı, büyük pot kaybedenidir. Rolleri open yapmak, flat yani call etmek, ya da büyük körden savunmaktır. Rolleri asla ama asla büyük pot başlatmak değildir — yani bunlarla 3-bet çekip stack ortaya sürmezsin. Bu eller potu küçük tutarsan senin dostundur; potu büyütürsen düşmanın olur. Neden böyle olduğunu bir sonraki slaytta açacağız, ama önce şunu içine yerleştir: bu elleri gördüğünde refleksin 'küçük pot' olmalı, 'stack' değil."},{title:"Neden dominate edilirler",bullets:["JTs top pair: kicker sorunu. KQ: AK/AQ gölgesinde. 97s iki per: üstü açık.","Küçük potta marjinal ellerden para sızdırır; büyükte karşı aralık daralır ve güçlenir."],narration:"Neden bu eller büyük potta kaybeder? Tek tek bak. Jek on suited ile top pair yaptığında bir kicker sorunun var; jek'i eşledin diyelim, seni ödeyen çoğu el daha iyi bir kicker taşır. Kral kız ile top pair yaptığında as kral ve as kızın gölgesindesin; kralı ya da kızı eşlersen bile seni dominate eden eller masada. Dokuz yedi suited ile iki per bile yapsan, boardun üstü açıktır, daha büyük iki per'ler ve kentler seni geçebilir. Şimdi bunu pot boyutuyla birleştir. Pot küçükken, yani tek raise'li bir pottayken, bu eller rakibin marjinal ellerinden yavaş yavaş para sızdırır — zayıf top pair'ler, ikinci çiftler sana ödeme yapar. Ama pot büyüdüğünde, yani 3-bet ve üstü seviyeye çıktığında, karşındaki aralık daralır ve güçlenir; artık sadece güçlü eller o kadar parayı ortaya koyar ve o güçlü aralık seni dominate eder. Tek cümlede: el aynı kalıyor, ama pot boyutu değişince kazanan taraf değişiyor. İşte aldatıcılıkları tam burada."},{title:"KQo vakası — equity vs oynanabilirlik",bullets:["42bb, HJ reg (~%22) açtı, sen CO'da KQo. Doğru: fold.","Ham equity ~%45 ama realize edemiyorsun.","En iyi floplar en pahalı tuzakların: K → AK'ye öder, Q → AQ'ya öder."],ruleBox:"Equity kâğıt üzerinde, para masada kazanılır.",visuals:[{kind:"hand",cards:"KQo",label:"Elin (CO) — 42bb, HJ reg açtı"}],narration:"Somut bir örnekle bitirelim. Kırk iki big blind derinliğindesin, day two. Reg bir oyuncu hijack'ten açtı, aralığı aşağı yukarı yüzde yirmi iki. Sen cut-off'ta kral kız offsuit'sin. Doğru karar fold. Neden fold, oysa el kötü görünmüyor? Çünkü ham equity ile oynanabilirlik iki ayrı şey. Kral kız offsuit'in bu yüzde yirmi iki aralığa karşı ham equity'si yaklaşık yüzde kırk beş; kâğıt üzerinde fena değil. Ama o equity'yi realize edemiyorsun. Rakibin aralığındaki as kral, as kız, kral kral, kız kız, as as senin en iyi floplarını mezara çevirir. Kralı flopladın, sevindin — ama as krala üç sokak ödersin. Kızı flopladın — as kıza ödersin. Yani senin en parlak senaryoların, aslında en pahalı tuzakların. Üstüne kırk iki big blind'de 3-bet edip 4-bet yersen devam edemezsin, call edip pozisyonsuz oynamak da seni inisiyatifsiz bırakır. Buradan çıkan altın cümle: equity kâğıt üzerinde, para masada kazanılır. Bir eli oynayıp oynamayacağına ham equity'ye değil, o equity'yi gerçekten cebe indirip indiremeyeceğine bakarak karar ver."}]},{id:"M4",title:"Stack modları & ICM",chapter:"Bölüm 3",minutes:5,slides:[{title:"Stack modları",table:{section:"Bölüm 3",caption:"Önce mod, sonra aralık."},narration:"Her elden önce sorman gereken ilk soru bir el sorusu değil, bir mod sorusudur: hangi stack modundayım? Aralığı ondan sonra seçersin. Modları gezelim. Seksen big blind ve üstü standart mod; normal chartlar geçerli, suited connector ve küçük çiftlerin değeri tavanda çünkü derinlik implied odds veriyor. Kırk ile altmış arası ilk daralma; açılış boyutun sabit kalır ama aralık kısılır, offsuit alt bant düşer — kral on offsuit, kız jek offsuit, jek dokuz offsuit gibi eller çöpe gider. Yirmi beş ile kırk arası ciddi bir mod değişimi; suited connector'lar değer kaybeder çünkü implied odds azalır, buna karşılık as-x elleri değer kazanır, ve her ele 'jam'e karşı net kararım ne' filtresini uygularsın. On beş ile yirmi beş arası open-jam sınırı; bazı pozisyonlardan iki kat açar, bazılarıyla direkt jam edersin. On beşin altında ise tek mod var: jam ya da fold; aralık dışı hiçbir hamle yok. Özet: elini görmeden önce stack'ine bak, çünkü aynı el farklı modlarda farklı bir eldir."},{title:"30bb altı orta çiftler",bullets:["77–TT, 30bb altında post-flop eli değil — jam-or-fold.","Set gelmezse üç sokak ödeyecek stack yok.","Gelirse de kısa stack'le maksimum alamazsın."],visuals:[{kind:"hand",cards:"77 88 99 TT",label:"30bb altı: jam-or-fold"}],narration:"Modların içinde özel bir eşik var, onu ayrıca vurgulamak gerek: otuz big blind altında orta çiftler. Yedi yedi, sekiz sekiz, dokuz dokuz, on on gibi eller otuz big blind altında post-flop oynanacak eller değildir; bunlar jam ya da fold elleridir. Neden? İki taraflı bir kısıt var. Bir: set-mining yapmak istiyorsun ama set gelmezse üç sokak baskı yiyip devam edecek stack'in yok, ilk baskıda zaten commit oluyorsun. İki: set gelse bile kısa stack'le rakipten maksimum değeri alamıyorsun, çünkü ortada zaten az para var. Yani bu çiftlerin klasik cazibesi olan 'ucuza set çekip stack alma' planı otuz big blind altında çalışmıyor. O yüzden bu derinlikte orta çiftle post-flop dans etmeye kalkma; ya jam et ya da at."},{title:"ICM katmanı",bullets:["Bubble'da 30bb ≠ Day 1'de 30bb.","Solunda kısa stack varsa: genişlet.","Solunda büyük stack varsa: daralt.","Bubble'da orta stack en kırılgan pozisyon — sabır."],ruleBox:"Bubble'da 30bb ≠ Day 1'de 30bb.",narration:"Stack modunun üstüne bir de ICM katmanı biner, yani para baskısı. Şu cümleyle başla: bubble'da otuz big blind, day one'daki otuz big blind ile aynı el değildir. Para yaklaşırken aynı stack aynı aralığı oynamaz, çünkü artık her chip'in değeri simetrik değil — kaybettiğin chip'ler, kazandıklarından daha çok acıtır. Masaya göre ayarlarsın. Solunda kısa stack'ler varsa açılış aralığını genişletirsin, çünkü onlar hayatta kalmaya oynuyor, kolay kolay karşılık vermezler. Solunda büyük stack'ler varsa daralırsın, çünkü onlar seni cezasız 3-bet edip zorlayabilir, sen de para baskısı altında fold etmek zorunda kalırsın. Ve en kritiği: bubble'da orta stack en kırılgan pozisyondur. Ne kısa stack gibi rahatça jam edebilirsin, ne de büyük stack gibi baskı kurabilirsin; iki arada kalırsın. Bu modun tek reçetesi sabır — pozisyonunu ve masanı okuyup doğru anı beklemek."}]},{id:"M5",title:"3-bet & call aralıkları",chapter:"Bölüm 4 ★",minutes:8,slides:[{title:"Bu bölümün mantığı",bullets:["Şişmiş pot %90 oranda 3-bet'li pottur.","3-bet aralığını doğru kurmak kök hatanın frekansını düşürür.","İki test: tek per rahat mıyım? OOP mu kalıyorum?"],narration:"Bu bölüm kitabın kalbi. Kök hatayı hatırla: tek per'i şişmiş potta yanlış sınıflandırmak. O hata river'da patlar ama preflop'ta doğar. Nedeni basit: şişmiş pot dediğimiz şey, yüzde doksan oranında 3-bet'li pottur. Yani river'daki zor kararın kökü, çok önce 3-bet aralığını yanlış kurmandır. Sonuç şu: 3-bet aralığını doğru kurmak, kök hatayı azaltmanın en hızlı yolu. El okumayı geliştirmekten bile hızlı, çünkü sorunu doğduğu yerde kesersin. Her aralığı iki soruyla test et. Bir: bu elle 3-bet edip flop görürsem, tek per yaptığımda rahat mıyım? Rahat değilsem 3-bet etmem — ya flat ederim ya atarım. İki: pozisyonsuz mu kalacağım? Pozisyonsuz 3-bet potunda tek per, tanımı gereği bluff-catcher'dır. O yüzden pozisyonsuz aralıklar daha sıkıdır. Bu iki soru bütün tabloların temeli."},{title:"Canlı turnuva düzeltmesi",table:{section:"Bölüm 4",sub:"4.1",caption:"Canlıda para geniş value 3-bet'inden gelir."},ruleBox:"Canlıda para blöf 3-bet'ten değil, daha geniş value 3-bet'inden gelir.",narration:"Solver aralıklarını aynen masaya taşıma; canlı alan solver gibi oynamaz. EPT sahasında üç sistematik sapma var, üçünü de lehine çevir. Bir: canlı oyuncu 3-bet'e az fold eder. O yüzden blöf 3-bet'i azalt, value 3-bet'i genişlet — çünkü seni ödeyecek bir alan var. İki: canlıda 4-bet blöfü neredeyse yok. Biri 4-bet yaparsa gerçek eli vardır; kuvöz kuvöz ve altını bile ciddiye al, as kral'ı otomatik 5-bet çakma. Üç: açılışlar geniş, düz call çok. O yüzden squeeze en kârlı hamlen olur; çok kişili potlarda blöf 3-bet'ini tamamen bırak, çünkü fold equity yok. Tek cümleyle: canlıda para blöf 3-bet'ten değil, daha geniş value 3-bet'inden gelir. Teori seni dengeye zorlar; alan sana dengesizlikten kâr etme izni verir. Bu izni kullan."},{title:"Boyutlandırma",table:{section:"Bölüm 4",sub:"4.2",caption:"Ezberle, düşünme."},narration:"Boyutları ezberle ki masada düşünmeyesin. Pozisyonlu 3-bet: açılışın üç katı, canlıda üç buçuğa kadar serbest. Pozisyonsuz 3-bet: körler dahil açılışın dört katı — daha büyük yaparsın ki zayıf ele iyi fiyat vermeyesin. Araya coldcaller girdiyse, her biri için bir açılış boyutu ekle. Squeeze, yani açılış üstüne call varken çektiğin 3-bet: dört buçuk ile beş kat. 4-bet: pozisyonluysan 3-bet'in iki virgül iki katı, pozisyonsuzsan iki virgül beş katı. Bu sayıları refleks yap. Boyut için düşünürsen hem tempoyu kaçırırsın hem boyutundan okuma verirsin."},{title:"Aralık tablosu (interaktif)",rangeMatrix:!0,narration:"Şimdi işin özü: pozisyona göre 3-bet aralıkları. Aşağıdaki tabloyu kendin kullan. Önce üstten kim açtı onu seç, sonra kendi pozisyonuna dokun; o eşleşmenin value ve blöf aralığını, altında flat notlarını görürsün. Genel prensip şu. Erken pozisyon açılışına karşı — yani yu ti ci ve yu ti ci artı bire karşı — disiplin bölgesindesin: value çok dar, kuvöz kuvöz ve üstü ile as kral; blöf ya yok ya çok seyrek. Açan pozisyon geç indikçe, mesela cut-off ya da button açınca, hem value hem blöf genişler, çünkü onların aralığı zayıf. En kârlı spot: smol blind açar, sen büyük kördesin. Orada aralığın en geniş, çünkü rakip çok geniş açtı ve sen pozisyonlusun. Bir uyarı: blöf satırındaki eller blocker için değil, flop oynanabilirliği için seçildi — call gelirse flop'ta rahat oynayacağın eller. Tabloyla oyna, eşleşmeleri gözünle gör."},{title:"Coldcall'un üç şartı",bullets:["1) Pozisyon: IP'sin ya da BB'de aksiyonu kapatıyorsun.","2) Derinlik: efektif stack, call'un en az 15×'i.","3) Ödeyen rakip: set yapınca sana para verecek biri.","Üçü aynı anda sağlanmıyorsa flat etme."],narration:"3-bet'i konuştuk; şimdi coldcall, yani açılışa 3-bet yapmadan düz call. Coldcall 3-bet'ten daha zor bir karar, çünkü inisiyatifi bırakırsın. Üç şart var; üçü birden yoksa flat etme. Bir, pozisyon: ya pozisyonlusun ya büyük körde aksiyonu kapatıyorsun. Ortada, arkanda oyuncu varken pozisyonsuz flat etme. İki, derinlik: set arıyorsan efektif stack, call'un en az on beş katı olmalı. Yüz big blind'de üç big blind call yapıyorsan ve arkanda kırk beş big blind'den fazla varsa tamam. Kırk big blind'de aynı call tutmaz — set gelse bile kârını çıkaramazsın. Üç, ödeyen rakip: set yaptığında sana para verecek biri olmalı. Sıkı bir reg set'i görünce durur, orada set-mining kârsız. Bir de multiway uyarısı: arkanda 3-bet edebilecek agresif biri varsa, sıkı elle flat seni squeeze'e açık bırakır. O durumda ya 3-bet'e yükselt ya at — ortada flat etme."},{title:"Squeeze — en kârlı tek hamle",bullets:["Coldcaller aralığı sıkı ama zayıf: 4-bet edemez, çoğunu fold eder.","VALUE: JJ+, AQs+, AKo. BLÖF: A5s–A4s, KQs, AJs.","Coldcaller balıksa blöfü kes — sadece value squeeze."],narration:"Canlıda en kârlı tek hamle kendi slaytını hak ediyor: squeeze. Squeeze, biri açıp başka biri call ettikten sonra senin çektiğin büyük 3-bet. Neden bu kadar kârlı? Çünkü coldcaller'ın aralığı sıkı ama zayıf. Call ederek 'orta güçte elim var' demiştir; 4-bet edemez, baskı gelince çoğu eli fold eder. Value tarafın: kuvöz kuvöz ve üstü, as kız suited ve üstü, as kral offsuit. Blöf tarafın: as beş ve as dört suited, kral kız suited, as jek suited — hem blocker taşırlar hem call gelirse oynanır. Boyut: pozisyonluysan dört buçuk kat, körlerden beş kat ve üstü. Bir ayar: coldcaller sıkıysa blöfü genişlet, fold edecek. Ama coldcaller balıksa, yani fold etmiyorsa, blöfü tamamen kes — sadece value squeeze at. Balığa blöf yapılmaz, balık ödetilir."},{title:"Stack modu üst katmanı",table:{section:"Bölüm 4",sub:"4.7",caption:"45bb'de 130bb aralığı oynama."},ruleBox:"En sık hata: 45bb'de 130bb aralığı oynamak — küçük çiftle flat, suited connector'la 3-bet blöfü. İkisi de 45bb'de zarar.",narration:"Son olarak bütün aralıkların üstüne stack modu katmanını bindir, çünkü aralık moda göre değişir. İki yüz big blind ve üstü: value ağırlıklı oyna, blöf az, flat en geniş — implied odds tavanda. Yüz ile yüz elli arası: standart mod, bu tablolar aynen geçerli. Altmış ile yüz arası: daha polarize, blöf artar ama flat daralır, set-mining zayıflar. Kırk ile altmış arası: lineer oyna, flat neredeyse yok — ya 3-bet ya fold. Yirmi beş ile kırk arası: 3-bet artık commit demek; 3-bet edeceğin el, gelen 4-bet'e de devam edebilmeli. Yirmi beşin altı: jam ya da fold, 3-bet-fold yok. En pahalı hatayı tekrar söylüyorum: kırk beş big blind'de yüz otuz big blind aralığı oynamak. Küçük çiftle flat edip set ararsın ama derinlik yok; suited connector'la 3-bet blöfü çekersin ama fold equity ve implied odds yok. İkisi de bu derinlikte zarar. Önce mod, sonra aralık."}]},{id:"M6",title:"4-bet — 3-bet'e cevap",chapter:"Bölüm 4.5",minutes:4,slides:[{title:"Canlıda 4-bet",bullets:["Canlıda 4-bet blöfü neredeyse yoktur.","4-bet gördüğünde QQ ve altını bile ciddiye al.","AK otomatik 5-bet değildir."],ruleBox:"Canlıda 4-bet neredeyse hep gerçek eldir; kimse fold etmiyorsa blöf 4-bet para yakmaktır. AK'yı otomatik 5-bet'leme.",narration:"4-bet aralığına geçmeden canlı gerçeği koyalım, çünkü teori ile canlı burada ayrışır. Canlıda 4-bet blöfü neredeyse yok; insanlar 4-bet'i gerçek elle çeker. Bunun iki sonucu var. Bir: biri sana 4-bet yaptığında ciddiye al. Kuvöz kuvöz ve altını hafife alma, karşındaki büyük ihtimalle gerçekten güçlü. As kral'ı görünce refleksle beş-bet çakma; o 4-bet çoğu zaman senden önde. İki: sen 4-bet blöfü yaparken çok dikkatli ol. Kimse fold etmiyorsa attığın blöf 4-bet sadece para yakmaktır. Hem savunmada hem hücumda kural aynı: canlıda 4-bet değerlidir, blöf değil."},{title:"3-bet'e cevabın (tablo)",table:{section:"Bölüm 4",sub:"4.5",caption:"4-bet'li pot şişmiş pottur."},visuals:[{kind:"range",value:"KK+, AKs, QQ (karışım), AKo (karışım)",blof:"A5s, A4s",flat:"JJ, TT, AQs, KQs",valueLabel:"4-bet value",blofLabel:"Blöf 4-bet",caption:"4-bet cevabın: value + karışım + blöf; flat IP 150bb+."}],ruleBox:"4-bet'li pot şişmiş pottur. AA ile flop+turn value alıp kötü river'da jam etmek, Vaka 3'ün birebir tekrarıdır.",narration:"Şimdi madalyonun öbür yüzü: sen açtın, sana 3-bet geldi. Cevabın ne? Tabloyu takip et. 4-bet value: kral kral ve üstü, ve geç pozisyondan gelen 3-bet'e karşı as kral. 4-bet karışım: kuvöz kuvöz ve as kral offsuit'i geç pozisyon 3-bet'ine karşı bazen 4-bet'lersin, erken pozisyona karşı 4-bet'lemezsin. 4-bet blöf: as beş ve as dört suited ile mümkün ama canlıda çok seyrek — kimse fold etmiyorsa para yakmaktır. Flat, yani 3-bet'i call etmek: pozisyonlu ve yüz elli big blind derinlikte kuvöz kuvöz, on on, as kız suited, kral kız suited; fiyat üç katın altındaysa suited connector'lar da girer. Fold: pozisyonsuz tüm offsuit broadway'ler — as jek, kral kız, as on — 3-bet'e karşı çöp, atarsın. En kritik uyarı: 4-bet'li pot şişmiş pottur. Orada as as ile flop ve turn value alıp kötü bir river'da kalan stack'i jam etmek, birinci modüldeki üçüncü vakanın — o iki dört beş altı boardunun — birebir tekrarı. Kural değişmez: river'da senden zayıf el ödemeyecekse jam value değildir. Preflop aralığını doğru kur ki o river kararına hiç düşmeyesin."},{title:"4-bet boyutu",bullets:["4-bet IP: 3-bet'in 2.2×","4-bet OOP: 3-bet'in 2.5×"],ruleBox:"Boyutu ezberle, masada düşünme.",narration:"Son olarak boyut. Pozisyonluysan 4-bet, 3-bet'in iki virgül iki katı. Pozisyonsuzsan biraz daha büyük: 3-bet'in iki virgül beş katı. Pozisyonsuz daha büyük olmasının sebebi, zayıf ele iyi fiyat verip onu potta tutmamak. Bu iki sayıyı refleks yap. Boyut için düşünmeye başlarsan hem tempoyu kaçırırsın hem boyutundan okuma verirsin."},{title:"5-bet — 4-bet'e cevap",bullets:["5-bet = 4-bet'e tekrar yükseltmek; bu derinlikte pratikte all-in (jam).","Value: KK+ her zaman. QQ/AK rakibe göre — agresöre jam, nit'e fold.","Canlıda 5-bet blöfü ~yok — seni 4-bet'leyen genelde önde."],ruleBox:"4-bet ettiğin HER el, gelen 5-bet jam'e karşı planı önceden belli olmalı. '4-bet edip bakarız' yok.",narration:"Madalyonun son yüzü: 4-bet ettin ve rakip tekrar yükseltti, yani 5-bet geldi. Bu derinlikte 5-bet pratikte all-in demektir. Kural yine canlı gerçeğinden çıkar: 4-bet blöfü neredeyse olmadığı için, seni 4-bet'leyen ya da 5-bet'leyen genelde gerçekten öndedir. O yüzden 5-bet value içindir. Value jam'in: kral kral ve üstü her zaman. Kuvöz kuvöz ve as kral rakibe göre — agresif bir oyuncuya jam edersin, ama sıkı bir nit 4-bet'lediyse, ki onun aralığı as as ve kral kral'dır, kuvöz kuvöz ve as kral'ı foldlarsın. 5-bet blöfü canlıda neredeyse yoktur; kimse fold etmiyorsa blöf 5-bet tüm stack'ini yakar. Altın kural: 4-bet ettiğin her el, gelen 5-bet jam'e karşı planı önceden belli olmalı. Elli altı big blind derinlikte 4-bet zaten yirmi big blind civarı, yani commit eşiği; 4-bet'e bastığın anda 5-bet'e ne yapacağını biliyor olmalısın."}]},{id:"M7",title:"25–30bb bandı",chapter:"Bölüm 5 ★",minutes:6,slides:[{title:"Bandın karakteri",bullets:["Değer FOLD EQUITY'den gelir, kart tamamlamaktan değil.","Aradığın el 'gelişebilen' değil, şimdiden iyi olan: as, broadway, çift.","Karar sırası iki saniyede: MOD → POZİSYON → EL."],ruleBox:"25–30bb'de değer fold equity'den gelir, kart tamamlamaktan değil. 28bb'de suited connector geldiğinde üçüncü adıma (EL) bile geçmiyorsun.",visuals:[{kind:"hand",cards:"AK KQ 99",label:"Şimdiden iyi el: as / broadway / çift"}],narration:"Şimdi turnuvanın en sık yaşanan ve en çok chip kaybedilen bandına geliyoruz: yirmi beş, otuz big blind. Bir önceki modüldeki 3-bet tabloları yüz, yüz elli big blind içindi; bu derinlikte onlar geçersiz, çünkü oyunun motoru değişiyor. Tek cümlede: bu bantta değer, fold equity'den gelir, kart tamamlamaktan değil. Yani aradığın el 'gelişirse iyi olur' diyen bir el değil, şimdiden iyi olan bir el: bir as, bir broadway, bir çift. Neden? Çünkü spekülatif ellerin tek motoru olan implied odds yirmi sekiz big blind'de çalışmaz. Set ya da kent yaptığında sana ödeyecek stack yok; tamamlamadığın yüzde seksen beş durumda ise elinde hiçbir şey kalmıyor, çaresizsin. O yüzden karar sıranı iki saniyeye indir: önce mod, sonra pozisyon, sonra el. Bu bantta suited connector geldiğinde üçüncü adıma, yani 'elim ne' sorusuna bile geçmiyorsun — mod ve pozisyon zaten cevabı vermiş oluyor."},{title:"Açılış aralıkları (önünde kimse yok)",table:{section:"Bölüm 5",sub:"5.1",caption:"Boyut 2–2.2×. Bu derinlikte daha büyük açmanın anlamı yok."},narration:"Önünde kimse yokken açacağın aralıklar bunlar; boyut iki, iki virgül iki kat, daha büyük açmanın bu derinlikte anlamı yok. Tabloyu pozisyon pozisyon oku. Erken pozisyonda, yani yu ti ci ve artı birde, dar açarsın: yedi yedi ve üstü çiftler, as on suited ve üstü, as jek offsuit ve üstü, kral kız suited. Pozisyon geç indikçe aralık genişler; button'da neredeyse bütün as'leri, geniş suited kralları ve bağlı elleri açarsın. Dikkat: buradaki eller 'şimdiden iyi' eller ekseninde seçildi — as'ler, broadway'ler, çiftler ağırlıkta. Derin stack'te açtığın küçük suited connector'ların çoğu bu tabloda yok, çünkü onların motoru bu bantta durmuş durumda."},{title:"3-bet = JAM",table:{section:"Bölüm 5",sub:"5.2",caption:"Bu bantta FLAT YOK — ne SB'den, ne BB'den, ne IP'den."},visuals:[{kind:"range",value:"TT+, AQs+, AKo",valueLabel:"Jam",caption:"Erken pozisyon açılışına jam aralığı (örnek). Yeşil = doğrudan all-in."}],ruleBox:"Bu bantta 3-bet = commit. '3-bet edip fold' diye bir yapı yok; doğrudan all-in gidiyorsun. Flat yok.",narration:"Bu bantta 3-bet kelimesini kafandan sil, yerine tek kelime koy: jam. Yirmi sekiz big blind'de 3-bet yapmak commit olmak demektir; '3-bet edip sonra fold ederim' diye bir yapı yok, çünkü stack'in buna izin vermiyor. O yüzden 3-bet edeceğin her eli doğrudan all-in olarak düşün. Kime karşı ne jam ediyorsun? Erken pozisyon açılışına on on ve üstü, as kız suited ve üstü, as kral offsuit. Cut-off ya da button açılışına daha geniş: sekiz sekiz ve üstü, as on suited ve üstü, as kız offsuit ve üstü, kral kız suited. Ve masada geniş açıp jam'e fold eden bir chip leader varsa, ona karşı aralığını daha da genişletirsin: yedi yedi, as dokuz suited, as jek offsuit, kral kız suited. En kritik cümle: bu bantta flat yok. Ne smol blind'den, ne büyük körden, ne pozisyonlu. Bir önceki modülün o geniş flat tabloları yüz big blind üstü dünyaya ait; burada ya jam edersin ya fold."},{title:"Jam'e karşı call + fold listesi",bullets:["Jam'e karşı call: 99+, AJs+, AQo+. Bundan aşağısı call değil.","Otomatik fold: tüm suited connector'lar (T9s, 98s, 87s, 76s, 65s, 54s).","Otomatik fold: suited gapper'lar; zayıf offsuit broadway (KJo, QJo, JTo); küçük çiftle FLAT."],visuals:[{kind:"range",value:"99+, AJs+, AQo+",valueLabel:"Call (jam'e karşı)",caption:"Rakip all-in geldiğinde call sınırı — altı call değil."},{kind:"hand",cards:"T9s 87s KJo",label:"Bu bantta otomatik fold"}],ruleBox:"Rakip all-in geldiyse: 99+, AJs+, AQo+. Bundan aşağısı 28bb'de call değil — ya jam'i sen yaparsın ya fold.",narration:"İki yön kaldı: sana jam gelirse ne call edersin, ve hangi elleri gözü kapalı atarsın. Rakip all-in geldiğinde call aralığın dar: dokuz dokuz ve üstü çiftler, as jek suited ve üstü, as kız offsuit ve üstü. Bunun altındaki hiçbir el yirmi sekiz big blind'de call değil — orada seçim ya jam'i senin yapman ya da fold. Fold listesi ise ezber: bütün suited connector'lar, yani on dokuz, dokuz sekiz, sekiz yedi, yedi altı, altı beş, beş dört suited — hepsi kayıtsız şartsız fold. Suited gapper'lar aynı şekilde. Zayıf offsuit broadway'ler — kral jek, kız jek, jek on offsuit — fold. Ve küçük çiftle flat etmek de yok; jam ayrı konu ama flat asla. Bu listeyi fold etmek zayıflık değil, cephane biriktirmek: spekülatif eli attığın her el, gerçek elle jam yapacağın anda arkanda duran chip demek."},{title:"Saha vakası — GGMasters",table:{section:"Bölüm 5",sub:"5.5",caption:"Üçünde de doğru cevap fold; belirleyici olan el değil, moddu."},visuals:[{kind:"hand",cards:"T9s 54s 87s",label:"Üçü de FOLD (28bb)"}],ruleBox:"Soru 'bu el yeterince iyi mi' değil, 'bu el bu stack'te oynanabilir mi'. Spekülatif elleri fold etmek, gerçek elle jam yapacağın cephaneyi korur.",narration:"Bunu gerçek bir seansta görelim. Temmuz'daki bir GGMasters'ta, yirmi sekiz big blind bandında masa sana aynı soruyu üç farklı elle sordu. Smol blind'de on dokuz suited, kırk bine call teklifi, arkanda yirmi sekiz big blind — fold, çünkü smol blind'den flat kayıp pozisyon. Büyük körde beş dört suited, yetmiş üç binlik potta otuz bin ödeyeceksin — fold, çünkü implied odds motoru çalışmıyor. Yine büyük körde sekiz yedi suited, aynı durum — el biraz daha iyi ama karar aynı, fold. Üç el, üç fold, ve belirleyici olan el değil moddu. Aynı seanstan doğru karar örneği de var: on on ile button'dan yirmi üç big blind jam; bir milyonluk chip leader call düşündü ve fold etti, pot alındı. Bölüm 3'ün kuralı işledi — otuz big blind altında orta çift post-flop eli değil, jam-or-fold elidir. Masada seni bekleyen soru 'bu el yeterince iyi mi' değil; 'bu el bu stack'te oynanabilir mi'."},{title:"Rakip okuma notu",bullets:["Chip leader jam'e bir kez fold ettiyse: ona karşı jam aralığını genişlet.","Geniş açıp jam'e katlanan profil, bu bantta masadaki en kârlı hedeftir.","Öncelik: (1) o açtığında jam, (2) BTN/CO'dan açıp blindleri topla."],narration:"Son bir okuma notu, çünkü bu bantta kâr rakip seçiminden geçiyor. Bir chip leader'ın jam'e bir kez fold ettiğini gördüysen, o bilgiyi sakla: o oyuncunun açılışlarına karşı jam aralığını genişlet. Neden? Çünkü geniş açıp jam'e katlanan bir profil, bu bantta masadaki en kârlı hedeftir — bol açıyor ama baskıya dayanamıyor, sen de o baskıyı fold equity'ye çeviriyorsun. Öncelik sıran şu: birincisi, o oyuncu açtığında ona jam; ikincisi, button ya da cut-off'tan kendin açıp blindleri toplamak. Bu bantta beklemek de bir silah, ama beklerken doğru hedefi işaretlemiş ol."}]},{id:"M8",title:"Turn'de draw",chapter:"Bölüm 6",minutes:4,slides:[{title:"Fold equity var mı",bullets:["Station'a semi-bluff = para yakma → check, bedava kart.","Reg'e karşı ve board senin aralığına uygunsa → bet.","Bet'te iki kazanma yolu: fold ettirmek VEYA tamamlamak."],narration:"Pokerin en sık yaşanan turn sorusu şu: elimde bir draw var, turn'de bet mi atayım yoksa bedava river mı göreyim? Karar üç faktöre bağlı, ilki fold equity. Karşındaki station tipiyse, yani fold etmeyen biriyse, ona semi-bluff atmak para yakmaktır; adam fold etmez, sen de çıplak equity'nle kalırsın. O durumda check et, bedava kartı al, draw'ını bedavaya çekmeye çalış. Ama karşındaki bir reg'se ve board senin aralığına uygunsa, o zaman bet at. Çünkü bet attığında iki kazanma yolun olur: ya rakip fold eder ve potu hemen alırsın, ya da call eder ama sen draw'ını tamamlayıp büyük potu alırsın. İki yollu kazanç, tek yollu kazançtan her zaman iyidir — yeter ki karşında fold edebilecek biri olsun."},{title:"Draw'ın kalitesi",table:{section:"Bölüm 6",sub:"5.2",caption:"Tamamlanınca ödenir mi?"},visuals:[{kind:"hand",cards:"97s",label:"Düşük flush draw — check ağırlıklı"}],narration:"İkinci faktör draw'ın kalitesi, ve buradaki asıl soru şu: bu draw tamamlanınca bana ödeme yapılır mı? Nut flush draw'da bet ağırlıklı oynarsın; çünkü tamamlanınca action alırsın, üstelik blokerlerin güçlü olduğu için rakibin en iyi ellerini elinden alıyorsun. Düşük flush draw'da, mesela dokuz yedi suited'in flush draw'unda, check ağırlıklı oynarsın; çünkü tamamlansa bile daha üstün bir flush'a ödeme yapma riskin var, ikinci en iyi flush pahalı bir eldir. Açık uçlu kent draw'unda, düz bir boardda, hem bet hem check meşrudur; bu gizli bir güçtür, tamamlanınca çok ödenir, kararı rakibe göre verirsin. Gutshot'ta ise neredeyse hiçbir zaman semi-bluff yakıtı değildir; out'u az, gizliliği düşük, o yüzden check. Draw'ın rengine değil, tamamlandığında sana para getirip getirmeyeceğine bak."},{title:"IP / OOP ayrımı",bullets:["IP: check gerçekten bedava kart demek.","OOP: check bedava kart garantisi vermez.","OOP'ta draw'ı ya bet'le ya da call planıyla check et."],narration:"Üçüncü faktör pozisyon, ve bu çok önemli çünkü 'bedava kart' fikri pozisyona göre anlam değiştirir. Pozisyonluysan, yani son konuşan sensen, check etmek gerçekten bedava kart demektir; sen check edersin, rakip de check ederse river'ı hiç para vermeden görürsün. Ama pozisyonsuzsan, check bedava kart garantisi vermez; sen check edersin, rakip bet atar ve senin 'bedava göreceğim' planın çöker, şimdi para koymadan devam edemezsin. O yüzden pozisyonsuzken draw'ını ya bet'le, yani inisiyatifi al, ya da net bir call planıyla check et — 'nasılsa bedava görürüm' diyerek pasif check etme, çünkü o bedava çoğu zaman gelmez. Özetle: turn draw kararında üç şeyi sırayla sor — fold equity var mı, draw'ım tamamlanınca ödenir mi, ve pozisyonlu muyum."}]},{id:"M9",title:"PLO temelleri",chapter:"Bölüm 8",minutes:5,slides:[{title:"Zihniyet farkları",bullets:["Equity'ler yakın koşar — %60/%40 iyi favoriliktir.","Nut hakimiyeti her şeydir; ikinci en iyi el pahalıdır.","İki pot bet = stack ortada."],narration:"Şimdi farklı bir oyuna, Pot Limit Omaha'ya geçiyoruz; ama en çok işine yarayacak şey, NLH kafasıyla PLO oynamanın tuzaklarını bilmek. Önce zihniyet farkları. Birincisi: PLO'da equity'ler birbirine çok yakın koşar. NLH'de yüzde seksene yirmi favoriliğe alıştın; PLO'da yüzde altmışa kırk zaten iyi bir favoriliktir. Yani hiçbir el burada rahat değildir, kenarların incedir. İkincisi: PLO'da nut hakimiyeti her şeydir. İkinci en iyi el, yani nut'ın bir altı, PLO'da pahalı bir eldir; sürekli 'nut çekebiliyor muyum' diye sorarsın. Üçüncüsü: PLO'da pot çok hızlı büyür. İki pot bet üst üste geldiğinde stack zaten ortadadır; NLH'deki gibi yavaş şişme yok, üçüncü sokağa geldiğinde geri dönüşü olmayan bir noktaya gelirsin. Bu üç farkı içine yerleştir, çünkü NLH reflekslerin PLO'da seni yanıltacak."},{title:"El seçimi",table:{section:"Bölüm 8",sub:"7.2",caption:"Dört kart birlikte çalışmalı."},narration:"PLO'da el seçimi dört kartın birlikte çalışmasıyla ilgilidir. Dangler dediğimiz şey, dördüncü kartı diğerleriyle bağlantısız olan eldir; mesela as as yedi iki. Böyle bir el aslında üç kartlı bir eldir, dördüncü kart ölüdür, o yüzden çoğu zaman fold. Rundown, jek on dokuz sekiz gibi birbirine bağlı dört karttır; özellikle çift suited olduğunda, yani iki ayrı flush imkânı taşıdığında çok güçlüdür. Çıplak as as, yani yanında destek olmayan as as, PLO'da tek per muamelesi görür — NLH'deki gibi otomatik canavar değildir; nut potansiyeli yoksa büyük pot oynamaz. Ve gerçek silah: wrap artı flush draw. Wrap, boarda birden çok kartla bağlanıp on üç ve üzeri out veren dev bir kent draw'udur; üstüne flush draw da eklenince bu el agresif oynanır, çünkü equity'si dev ellerle bile başa baş koşar. El seçerken tek tek kartlara değil, dördünün birlikte ne yaptığına bak."},{title:"NLH oyuncusunun tuzakları",bullets:["AA'yı NLH gözüyle görmek — çift suited değilse sadece bir çift.","Top pair / top two ile stack-off — iki per neredeyse hiç nut değil.","Blöf frekansını NLH'den taşımak.","OOP 3-bet potu oynamak — şüphe hâlinde flat et."],narration:"Son olarak, NLH'den PLO'ya geçen bir oyuncunun düştüğü dört tuzak — bunlar senin uyarı levhaların. Birincisi as as'i NLH gözüyle görmek: PLO'da as as, çift suited değilse ve board'a bağlanmıyorsa, sadece bir çifttir; ona canavar muamelesi yaparsan büyük pot oynayıp kaybedersin. İkincisi top pair ya da top two ile stack-off etmek: PLO'da iki per neredeyse hiçbir zaman nut değildir; kentler, setler, flush'lar sürekli masadadır, iki per'le tüm stack'i ortaya sürmek hatadır. Üçüncüsü blöf frekansını NLH'den taşımak: PLO'da aralıklar daha bağlıdır, herkesin eli boarda daha çok temas eder, o yüzden blöf daha az geçer; NLH'deki blöf sıklığını buraya taşırsan yanarsın. Dördüncüsü pozisyonsuz 3-bet potu oynamak: bu PLO'nun en zor spotudur, çünkü equity'ler yakın ve pozisyonsuz karar vermek çok pahalı; şüphe hâlinde 3-bet'lemek yerine flat et. Bu dört tuzağı bilmek, PLO masasında NLH refleksinin seni batırmasını engeller."}]},{id:"M10",title:"Şişmiş pot: SPR ve icra",chapter:"Bölüm 11 ★",minutes:7,slides:[{title:"Şişmiş potu SPR tanımlar",bullets:["SPR = stack ÷ pot. Bet sayısı değil, oran belirler.","SPR 1–4 (100bb 3-bet'li pot): tek per bluff-catcher.","Önce SPR'yi oku, sonra tek per'in rolünü ver."],table:{section:"Bölüm 11",sub:"11.0",caption:"Önce SPR, sonra rol."},ruleBox:"Derinde şişmiş potu bet sayısı değil SPR tanımlar.",narration:"Kök hatanın teşhisini önceki modüllerde koyduk: tek per'i şişmiş potta yanlış sınıflandırmak. Bu modül teşhisten sonrasını verir — icra. İlk mesele: 'şişmiş pot' nedir, nasıl ölçülür? Cevap bet sayısı değil, stack pot oranı. Flopta kalan stack'i pota böl. Oran küçükse pot şişmiştir, büyükse değil. Bir'in altında karar zaten preflop verildi, commit'sin. Bir ile dört arası — mesela yüz big blind derinlikte üç bet'li pot — tek per'in bir bluff-catcher'dır; burada büyük pot başlatma. Dört ile sekiz arası iki sokak value alıp kontrol edersin, üçüncü sokakta dikkat. Sekizin üstünde ince value alınabilir, ama biri re-raise ederse pot aniden bir-dört bandına düşer ve tek per yine bluff-catcher olur. Kural tek cümle: önce stack pot oranını oku, sonra tek per'e rol ver. Derinde tek per'i erken bluff-catcher'a düşürüp value kaçırmak da hata; orta-sığda eski derin refleksle tüm stack'i ortaya sürmek de."},{title:"SPR'yi say — örnek + committed matematiği",bullets:["SPR = en küçük kalan stack ÷ pot (flop anında yuvarla).","Single-raised pot ~SPR 8–10; 3-bet'li pot ~SPR 3.","Commitment his değil, orandır."],ruleBox:"Flop'a her girişte SPR'ı yuvarla; 3+ ise tek pair'le büyük pot yok — karar ağacın baştan sadeleşir.",narration:"Bandları öğrendik; şimdi tek bakışta saymayı öğrenelim. Stack pot oranı, en küçük kalan stack'i pota bölmektir — ikinizden kısa olanın stack'i, çünkü ortaya en fazla o kadar girebilir. Somut örnek: iki bin, dört bin blindde sen iki buçuk kat açtın, büyük kör call etti, pot yaklaşık yirmi dört bin. İkinizin de arkasında iki yüz kırk bin varsa oran on — yani derin, tek pair'le büyük pot yok. Ama aynı el 3-bet'li potta oynansaydı, pot altmış bin ve arkada yüz seksen bin kalsaydı, oran üçe iner — işte as as'in 3-bet'li potta stack koyması bu yüzden doğru. Ve buradan kök hatanın matematiksel tanımı çıkıyor: senin 'pot büyüdü, artık committed'im' hissin aslında bir stack pot oranı okuma hatasıdır. Diyelim on on'un var, flopta oran yaklaşık yedi, sekizdi; o derinlikte çift artı draw bile jam için marjinaldi, tek pair olsa net fold bölgesiydi. His 'pot büyük' diyor, ama oran 'hayır, stack hâlâ pota göre derin' diyor. Şunu kafana kaz: committed olmak bir his değil, bir orandır. Pratikte flop'a her girişte oranı kabaca yuvarla; üçün üstündeyse tek pair'le büyük pot oynamayacaksın ve karar ağacın daha başında sadeleşir."},{title:"Turn disiplini — ikinci fıçı",table:{section:"Bölüm 11",sub:"11.1",caption:"Boyutlar kalibre; yön sabit."},ruleBox:"İkinci fıçıyı atmadan sor: river planımı söyleyebiliyor muyum? Kötü river'da check-fold edebileceğim pot bırakıyor muyum?",narration:"Kök hata çoğu zaman turn'de doğar: potu ikinci fıçıyla kendin şişirir, river'a bluff-catcher olarak kalırsın. O yüzden turn kararı kritik. Tabloya bak. Overpair'in varsa boş ya da düşük turn'de kontrollü bet, sana overcard gelince stack pot oranını say ve dikkatli ol, board eşleşince check eğilimi, draw tamamlayan kartta check ya da boyutu düşür. Top pair iyi kicker daha pasif: ince bet ya da check-call, kötü kartta check-fold eğilimi. Top pair zayıf kicker çoğu turn'de check. Havayla bloker taşıyorsan boş turn'ler barrel adayı, ama kart gelince bırak. Boyutlar senin icra verinle kalibre edilecek, ama yön sabittir: potu her büyüttüğünde river'da check-fold etme lüksünü satın alma gücün azalır. İkinci fıçıyı atmadan iki soruyu cevapla — river planımı söyleyebiliyor muyum, ve kötü bir river'da check-fold edebileceğim pot bırakıyor muyum? Turn'de attığın boyut, river'da vereceğin kararın fiyatıdır."},{title:"River — bluff-catch: hangi fiyata call",table:{section:"Bölüm 11",sub:"11.2",caption:"Boyut + hangi blöf + bloker."},narration:"River'da rakip bet attı ve elin bir bluff-catcher — sadece blöfleri yenen, value'ları yenemeyen bir el. Karar 'küçük pota call, büyük pota fold' kaba eğiliminden daha ince; üç değişkene iner. Bir: rakibin boyutu. Küçük boyut daha çok blöf ve ince value içerir, büyük boyut polarizedir — ya çok güçlü ya blöf. İki: bu boyutu senden zayıf hangi value atardı? Cevap 'hiçbiri' ise karşındaki ya nut ya blöftür, ve o zaman call'ını onun blöf frekansı belirler. Üç: bloker. Elin rakibin value kombinasyonlarını kesiyorsa call'a daha yatkınsın; onun blöflerini kesiyorsan tam tersi. Bu üçünü birlikte oku, tek başına pot boyutuna bakma. Şüphede pusulan şu: bu boyutu benden zayıf bir el ödemek için mi atıyor, yoksa beni attırmak için mi?"},{title:"Kötü river kataloğu — jam ASLA",bullets:["Alt kartların 4.'sü / kent tamamlayan kart","Üçüncü flush kartı (senin elinde flush yoksa)","Board eşleşmesi (set / full house kapısı)","Üstüne overcard (rakip top pair'i geçer)"],ruleBox:"Bu kartlarda: küçük pota check-call, büyük pota check-fold. Jam ASLA — jam value ancak senden zayıf bir el ödeyecekse vardır.",narration:"Son olarak, overpair ya da güçlü tek per'le elinde tuttuğun bir alarm listesi: 'value target yok' kartları. Alt kartların dördüncüsü ya da kenti tamamlayan kart — üçüncü modüldeki as as elenmesi tam buydu, iki dört beşe river altı geldi, üçlü de kent de set de seni geçmişti. İkincisi üçüncü flush kartı, senin elinde flush yoksa. Üçüncüsü board'un eşleşmesi, ki set ya da full house kapısını açar. Dördüncüsü board'a gelen overcard, ki rakibin top pair'i senin overpair'ini geçebilir. Bu kartlar geldiğinde kural nettir: küçük pota check-call, büyük pota check-fold, ve jam asla. Jam ancak senden zayıf bir el ödeyecekse value'dur; bu kartlarda ödeyecek zayıf el yoktur. Bu modülün tamamı kök hatanın icra katmanı: preflop aralığı hatanın sıklığını düşürür, bu bölüm ise hata anına gelindiğinde doğru icrayı verir."}]},{id:"M11",title:"ICM eşikleri ve final table",chapter:"Bölüm 12 ★",minutes:7,slides:[{title:"ICM ne zaman açılır",table:{section:"Bölüm 12",sub:"12.0",caption:"Event'e göre — lobiden doğrula."},ruleBox:"Karar sırasına 0. adım: bu event'te ICM açık mı?",narration:"ICM, yani Independent Chip Model, chip'lerinin gerçek para değerini ölçer — ve turnuvada chip para değildir, kaybettiğin chip kazandığından daha çok acıtır. Ama ICM her masada aynı sıkılıkta açık değildir. Aynı yirmi sekiz big blind, aynı el, aynı pozisyon: küçük sahalı yüksek stakes'te ICM kararıdır, büyük sahalı Main event'in ilk gününde saf chip kararıdır. Tabloya bak: küçük saha ve dik ödeme olan event'lerde ICM erken açılır, neredeyse her Day 2 kararı ICM altındadır; Main gibi büyük rec-ağırlıklı sahada geç açılır. Bu ayrımı masada değil, önceden yapmış ol. Saha boyutunu ve ödeme yüzdelerini uydurma — kayıt sayısına göre lobiden oku. Ve karar sırana sıfırıncı adımı ekle: bu event'te ICM açık mı? Cevap hayırsa saf chip oyna; evetse aşağıdaki risk düzeltmelerini uygula."},{title:"Risk premium — asıl soru: cover ediliyor muyum",table:{section:"Bölüm 12",sub:"12.1",caption:"Jam ve call aralığı ICM'de ayrışır."},ruleBox:"Call spot'unda İLK soru 'baloncuk mu?' değil, 'cover ediliyor muyum?'dur.",narration:"ICM'nin bir numaralı asimetrisi şu: jam etmek, call etmekten çok daha ucuzdur. Çünkü jam ederken senin fold equity'n var — rakip atabilir; call ederken yok, kartını açmak zorundasın. Bu yüzden ICM altında jam aralığın ve call aralığın ayrışır; simetri sadece bir chip varsayımıdır. Buradan en kritik masa sorusu çıkar. Bir call kararında ilk soru 'baloncuk mu?' değildir; ilk soru 'cover ediliyor muyum?'dur. Seni sıkan şey bubble değil, cover edilmektir — yani kaybedersen elenirsin. Seni cover eden bir chip leader'ın jam'ine karşı call aralığın sert daralır. Ama seni cover etmeyen, senden kısa birinin jam'ine karşı — kaybetsen bile sıfırlanmazsın — baloncukta bile geniş call edersin. İşte kalibre edilecek sızıntın: bu ikisini 'baloncuk demek ki sık' diye aynı kefeye koymak. Değiller. Kademe içerikleri drill'de ICMIZER ile netleşir; uydurma eşik yok."},{title:"Senin kalibren — cover / cover değil",bullets:["Cover EDİLİYORSAN (chip leader jam'i, 22bb, sert baloncuk): CALL = 88+, AJs+, AQo. A9s ve KQs FOLD.","Sürücü: kaybedersen bust; A9s ters-domine, KQs flip — tournament life'a değmez.","Cover EDİLMİYORSAN (jammer senden kısa): çok daha geniş call — A9s ve KTo dahil.","Leak'in yapışkan yarısı: cover edilmezken bile fold reflexi."],ruleBox:"Masa cue'su: jam'e fold basmadan önce 'cover ediliyor muyum?' — Hayır ise call sandığından çok daha geniş.",narration:"Şimdi senin kendi kalibre eşiklerin — genel teori değil, senin verin. Cover ediliyorsan, yani seni geçen bir chip leader yirmi iki big blind civarı sert baloncukta sana jam attıysa: call aralığın sekiz sekiz ve üstü, as jek suited ve üstü, ve as kız offsuit. As dokuz suited ve kral kız suited'i foldlarsın. Sebep açık: kaybedersen elenirsin, sıfır euro; as dokuz suited ters-domine, kral kız bir flip — marjinal kenar tournament life'a değmez. Ama madalyonun asıl yüzü, senin sızıntının yaşadığı taraf: cover edilmiyorsan. Jammer senden kısaysa, yani kaybetsen bile elenmeyeceksen, çizgin çok daha geniştir — as dokuz suited ve kral on offsuit bile call'dır. Drill verinde bunları bile foldladın, 'range yetersiz' diye; oysa kral on offsuit geniş bir on üç big blind jam'ine yaklaşık yüzde elli dört equity'ye sahip, fiyat için yüzde kırk dört yeter. Yani hata call değil, fold reflexidir — ve covered'la not-covered'ı yan yana gördükten sonra bile sürdü. Masa cue'sunu ezberle: jam'e fold basmadan önce bir saniye dur ve sor, cover ediliyor muyum? Hayırsa, call aralığın sandığından çok daha geniş."},{title:"Final table — rol matrisi",table:{section:"Bölüm 12",sub:"12.2",caption:"Doğru davranış el'e değil, stack rolüne bağlı."},narration:"Final table'da doğru davranışı elin değil, stack rolün belirler. Kısaysan, yani on beş big blind altındaysan ve masada senden de kısa biri varsa, ilk jam'ci sen ol ve ladder'ı gözle; ama senden kısa yoksa katlanma — doğru jam'i yap, çünkü kilitlenip blind'lere yenilmek de bir busttur. Orta stacksin — en kırılgan rol: kimin bust'ını beklediğini bil, seni cover edenle pot açma. Ama masada fiilen en kısaysan, yani herkes senden derinse, on ikinci bölümün beşinci kuralı devreye girer: herkes kilitliyken jam aralığını genişlet, katlanma. Cover eden derin stacksin — agresyon serbest: kısa ve orta stackleri cezasız ez, ama başka bir chip leader'la ego savaşına girme. Özet: önce masadaki stack dağılımına ve kendi rolüne bak, sonra el oyna. Final table'da el ikinci plandadır."}]},{id:"M12",title:"Multiway pot doktrini",chapter:"Bölüm 13 ★",minutes:6,slides:[{title:"Çekirdek — her ek oyuncu ne değiştirir",bullets:["Her ek oyuncu blöfün fiyatını KATLAR.","Value'nun barını YÜKSELTİR (top pair bir sınıf düşer).","Nut'un değerini ARTIRIR."],ruleBox:"Her ek oyuncu blöfün fiyatını katlar, value'nun barını yükseltir, nut'un değerini artırır.",narration:"Kök hatanın tanımı 'şişmiş veya multiway potta tek per'i yanlış sınıflandırmak'tı; bu modül o tanımın multiway yarısını verir. Rec-ağırlıklı Main'de potların çoğu çok kişilidir, yani en uzun süre bu dokuda oynayacaksın. Tek kural her şeyi özetler: her ek oyuncu blöfün fiyatını katlar, value'nun barını yükseltir, nut'un değerini artırır. Sebebi bileşik olasılık: masadaki rakip sayısı arttıkça, birinin iki per artı ya da set olma ihtimali katlanarak büyür. Bu yüzden multiway şişmiş pot, tek per'i heads-up şişmiş pottan bile daha net bir bluff-catcher yapar. Heads-up'ta value olan bir el, üç kişi flopu gördüğünde bir sınıf aşağı iner. Aklında tek cümle taşı: multiway'de tek per, heads-up'takinden bir sınıf aşağıdadır."},{title:"Heads-up → 3+ yollu geçiş",table:{section:"Bölüm 13",sub:"13.1",caption:"Aynı el, kişi sayısına göre bir sınıf düşer."},narration:"Şimdi elini heads-up'tan çok kişili pota taşıdığında ne değiştiğine bak. C-bet frekansın çöker: heads-up'ta yüksek basarsın, üç ve üstü yolluda sadece güçlü value ve gerçek nut-draw ile devam edersin. Top pair heads-up'ta value'ydu; multiway'de bir sınıf düşer, check ya da pot kontrolüne döner. Overpair heads-up'ta büyük pot adayıydı; multiway'de iki sokak value alıp kontrol edersin ve stack pot oranını sayarsın. Blöf heads-up'ta üç kritere bağlıydı; multiway'de neredeyse yok — sadece nut-bloker taşıyan bir semi-bluff. Nut flush draw'ı bet'lemeye devam edersin, çünkü fiyat iyi ve tamamlanınca çok ödenir. Ama nut olmayan flush draw ya da gutshot multiway'de check'e döner ya da ölür. Özet: kişi sayısı arttıkça agresyonun daralır, sadece en güçlü value ve nut-draw ayakta kalır."},{title:"Multiway'de blöf — dördüncü kriter",table:{section:"Bölüm 13",sub:"13.3",caption:"Rakip sayısı = blöfün geçmesi gereken kapı."},ruleBox:"'Kime blöf yapılmaz' listesine eklenir: Multiway pot (kim olursa olsun). Tek station bile blöfü öldürür.",narration:"İkinci modülde blöfün üç kriterini öğrendik: bloker, bağlantı, board sahipliği — ama bunlar tek rakibe kurgulanmıştı. Multiway'de dördüncü bir değişken devreye girer: rakip sayısı, yani blöfün geçmesi gereken kapı sayısı. Her ek oyuncu bir kapı daha ekler ve tek bir station bile o kapıyı kapatıp blöfü öldürür. Tabloya bak: heads-up'ta üç kriter geçerli, üç yolluda sadece nut-bloker semi-bluff, dört ve üstü yolluda blöf yok. Kimden korkacağın da önemli: preflop caller'ların hepsinden değil, flop'ta hâlâ duran en sıkı aralıktan. Birinin bet'ine, aradaki call'dan sonra gelen raise neredeyse her zaman nut'tır; orada tek per'le devam yoktur. Kısaca ikinci modülün 'kime blöf yapılmaz' listesine yeni bir madde ekle: multiway pot, kim olursa olsun."}]},{id:"M13",title:"40–70bb köprü bandı",chapter:"Bölüm 14 ★",minutes:5,slides:[{title:"Bandın karakteri",bullets:["3-bet giderek commit'e yaklaşır (40bb'de tam commit).","Flat penceresi daralır ama sıfır değil — IP ve BB'de dar flat.","Offsuit broadway / dominate edilebilir eller düşer; oynanabilirlik önde."],narration:"Dördüncü bölüm yüz ile yüz elli big blind için, beşinci bölüm yirmi beş ile otuz big blind için tablo verdi; arası, yani kırk ile yetmiş big blind bandı, tek satırlık notlarla kalıyordu. Oysa Main Day 2 ve tüm High Roller'ların orta fazı ağırlıkla bu bandda oynanır — en çok elde bulunacağın derinlik. Bandın karakteri şu. Bir: 3-bet giderek commit'e yaklaşır; altmışta değil ama kırkta tam commit'sindir. İki: flat penceresi daralır ama beşinci bölümdeki gibi sıfır değildir — pozisyonlu ve büyük körde dar bir flat yaşar. Üç: offsuit broadway ve dominate edilebilir eller dörde göre düşer; bu bandda oynanabilirlik öndedir. Tek cümle: mod önce gelir, aralık sonra — ve bu band iki uç arasındaki köprüdür."},{title:"3-bet çerçevesi (40–70bb)",table:{section:"Bölüm 14",sub:"14.1",caption:"Yeni liste değil — B4'ten yön."},ruleBox:"3-bet edeceğin el 4-bet/jam'e devam edebilmeli — edemiyorsa flat (IP/BB) ya da fold.",narration:"Bu bandda yeni bir kombo listesi ezberlemiyorsun; dördüncü bölümün kalibre aralıklarının bu derinlikte hangi yönde daraldığını alıyorsun. Tabloya bak. Altmış ile yetmiş big blind arası: value tarafın dördüncü bölümle neredeyse aynı, ama blöf tarafın daha polarize — blöfü en iyi bloker ve oynanabilirlik ellerine daralt. Kırk ile altmış arası: value'nun zayıf uçlarını kes, blöfü neredeyse tamamen bırak çünkü canlıda kimse fold etmiyor, ve 3-bet commit'e yaklaşır. Altın kural: yaklaşık altmış big blind'in altında '3-bet edip fold' yapısı zayıflar, kırkta biter. O yüzden 3-bet edeceğin el, gelen 4-bet ya da jam'e devam edebilecek bir el olmalı; devam edemiyorsa o eli ya flat edersin ya atarsın, boşuna 3-bet'leyip fold etme."},{title:"60 → 40bb geçiş işaretleri",bullets:["Tablodan ilk çıkanlar: suited connector'la 3-bet blöfü","Küçük çiftle spekülatif flat","Offsuit broadway coldcall"],ruleBox:"45bb'de 130bb aralığı oynamak en pahalı alışkanlıktır.",narration:"Son olarak, banttan aşağı düşerken tablodan ilk çıkması gereken elleri bil, çünkü bunlar derinlik azalınca doğrudan zarara döner. Birincisi suited connector'la 3-bet blöfü: derinlik olmadan ne fold equity'si ne implied odds'u kalır. İkincisi küçük çiftle spekülatif flat: set arıyorsun ama ödeme derinliği yok. Üçüncüsü offsuit broadway coldcall: zaten dominate edilen bir eli pozisyonsuz oynamak. Sıfırıncı cümlenin uyarısı burada somutlaşır: kırk beş big blind'de yüz otuz big blind aralığı oynamak en pahalı alışkanlıktır. Yanlış-mod-aralığı, şişmiş pot üretmenin bir numaralı kaynağıdır — yani kök hatanın preflop kaynağı. Önce mod, sonra aralık: bu köprü bandı o omurgayı iki uç arasında tamamlar."}]},{id:"M14",title:"PLO turnuva katmanı",chapter:"Bölüm 15 ★",minutes:6,slides:[{title:"Neden ayrı bir katman",bullets:["Pot-limit'te 'jam' yok — max pot-raise var.","Equity'ler yakın koşar → fold equity doktrini zayıflar.","'30bb PLO' ≠ '30bb NLH' — B5 jam/fold refleksi geçersiz."],narration:"PLO temellerini dokuzuncu modülde gördük; bu modül turnuva katmanını ekliyor, çünkü yirmi beş bin euroluk PLO High Roller ayrı bir event. Önce neden ayrı bir katmana ihtiyaç var? Çünkü beşinci bölümün NLH jam-fold refleksi PLO'da geçersizdir. Bir: pot-limit'te 'jam' diye bir şey yok, sadece maksimum pot-raise var; stack'i tek hamlede ortaya süremezsin. İki: PLO'da equity'ler birbirine çok yakın koşar, o yüzden fold equity'ye dayanan doktrin — rakibi atma gücün — PLO'da zayıflar; kimse kolay atmaz. Sonuç: otuz big blind PLO, otuz big blind NLH ile aynı şey değildir. NLH'deki 'kısa stack, 3-bet eşittir jam' refleksini PLO'ya taşırsan yanarsın. Bu modül o çelişkiyi kapatır: aynı derinlik, tamamen farklı icra."},{title:"PLO stack modları",table:{section:"Bölüm 15",sub:"15.1",caption:"Kısa PLO'da pot-raise = commit."},narration:"PLO'da stack modları NLH'den farklı çalışır. Altmış big blind ve üstünde standart PLO oynarsın: implied odds tavandadır, rundown ve çift-suited ellerin değeri zirvededir. Yirmi beş ile altmış arası kritik bant: beşinci bölüm burada geçersizdir, çünkü jam yok, pot-raise var. Bu bantta nut-odaklı oynarsın; çıplak as as postflop oynanmaz, değeri pre-commit'tedir — yani 3-bet edip stack pot oranını bir'e ya da altına indirmekte. Yirmi beşin altında pot-raise zaten kalan stack'i flop'ta otomatik ortaya sürer; bunu bir jam say ve aralığını ona göre seç. Kural tek cümle: kısa PLO'da pot-raise commit demektir. Aralığını 'flop'ta stack ortaya girecek' varsayımıyla seç — çift-suited rundown ve güçlü as as'li eller; dangler'lı, yani dördüncü kartı kopuk her şeyi kes."},{title:"Commit eşiği — SPR",table:{section:"Bölüm 15",sub:"15.2",caption:"Commit, potu şişirdiğin sokakta verilir."},ruleBox:"PLO'da commit kararı flop'ta değil, pot'u şişirdiğin sokakta verilir.",narration:"PLO'da şişmiş pot NLH'den iki sokak erken oluşur, o yüzden commit kararını pot şişmeden önce bil. Tabloya bak, ölçü yine stack pot oranı. Oran ikinin altındaysa sadece nut artı güçlü redraw ile stack ortaya girer — nut set artı flush draw, ya da wrap artı nut flush draw gibi. Çıplak as as ya da tek yönlü bir el bu oranda stack-off etmez. İki ile dört arası: yapılmış nut el ve güçlü kombo draw devam eder; ikinci nut ve non-nut draw etmez. Dörtün üstünde: nut potansiyeli yüksek elleri sokak sokak inşa edersin, ama non-nut tamamlanmış el burada bir tuzaktır. Bir istisna: potu sen preflop şişirdiysen, yani 3-bet'li pot ve stack pot oranı bir'in altındaysa, çıplak as as overpair commit'tir — bu kök hata değil, preflop equity kararıdır. Yasak olan, postflop şişmiş potta tek yönlü elle stack-off. Özet: PLO'da commit kararını flop'ta değil, potu şişirdiğin sokakta verirsin."},{title:"Out sayımı — nut out",bullets:["Ham out yanıltır; stack-off eşiği NUT out'la ölçülür.","'Wrap + FD: 13 out' — yarısı non-nut ise silah değil, tuzak.","Gerçek silah: nut-uçlu wrap + nut flush draw."],ruleBox:"Stack-off için ham out değil, NUT out say.",narration:"Son olarak out sayımı — ve PLO'da en pahalı yanılgı burada. Ham out seni yanıltır; stack-off eşiğini nut out ile ölçmen gerekir. 'Wrap artı flush draw, on üç out' cümlesi iskonto edilmeden tehlikelidir: eğer o on üç out'un yarısı non-nut ise, elinde gerçek bir silah değil bir tuzak vardır — tamamlanınca bile ikinci en iyi eli yapıp stack kaybedersin. Dokuzuncu modülün 'gerçek silah' etiketi yalnız nut flush draw'lı wrap için geçerli kalır. Kural nettir: stack-off kararı için ham out değil, nut out say. Kaç out'un seni gerçekten öne geçirir, kaçı seni ikinci en iyiye götürür — ayrımı yapmadan tüm stack'i ortaya sürme. Bu, dokuzuncu modülün 'çıplak as as tek per'dir' kuralının draw'lara ve derinliğe genişletilmiş hâlidir."}]},{id:"M15",title:"Zihinsel omurga: tilt, otopsi, re-entry",chapter:"Bölüm 16 ★",minutes:6,slides:[{title:"Bustout + re-entry kartı",table:{section:"Bölüm 16",sub:"16.1",caption:"Bustout → 20 dk uzak → doldur → karar."},ruleBox:"Serinin en pahalı kararı bir el değil: bustout sonrası 5 dakikada verilen re-entry kararı. Tilt'te otomatik re-entry = kök hatanın bankroll ölçeği.",narration:"Kitap şimdiye kadar yüzde yüz teknikti. Ama yirmi bir ile yirmi dokuz Ağustos bir dayanıklılık yarışı: SHR, PLO, sekiz günlük Main ve High Roller, üstüne event çakışmaları. Teknik ne kadar iyi olursa olsun, onu uygulayacak karar-durumunu — yorgunluk, tilt, re-entry baskısı — yöneten tek satır yoktu. Bu modül o kartları veriyor. En pahalı tek karar bir el değildir: bustout sonrası beş dakikada verilen re-entry kararıdır. Tilt hâlinde otomatik re-entry basmak, kök hatanın bankroll ölçeğidir — şişmiş bir seri yatırımında tek bullet'a value muamelesi. Zorunlu bekleme şu: bustout, yirmi dakika masadan uzak, sonra karttaki soruları doldur, sonra karar. Tabloya bak: elenme kötü bir karar mıydı yoksa varyans mıydı, sonraki bullet hangi flight'ı yiyor, toplam seri maruz kalman ön-limitin içinde mi, fiziksel durumun yeşil mi. Ve senin kalibren, event başına maksimum bullet: SHR bir, PLO iki, Main iki, HR iki. SHR yüz binde re-entry yok — orada ikinci mermi tek başına artı yüz bin euro, disiplin dışı."},{title:"Tilt kartı",table:{section:"Bölüm 16",sub:"16.2",caption:"Önce tilt FARK edilir, sonra hamle."},ruleBox:"Tilt'te alınan karar aralıktan değil, yaradan çıkar — önce yara etiketlenir.",narration:"Kök hata soğuk kanla nadiren yapılır; tipik olarak bir tetikleyiciyi izleyen ellerde ortaya çıkar. O yüzden tilt'teyken ezber cümle okunmaz — önce tilt'in kendisi fark edilir. Tabloya bak, üç tetikleyici ve anında hamlesi: bad beat ya da büyük pot kaybı, belirtisi kötü ellerle kovalama, hamlesi derin nefes. Uzun card-dead ve aksiyon açlığı, belirtisi daha hızlı ve snap oynama, hamlesi bir orbit boyunca elini kilitlemek. Blöf gösterilmesi ya da ego, belirtisi telefona sarılma, hamlesi su içmek ve ayağa kalkmak. Senin belirtilerin, kalibrende, üçü de sende var ve tek baskın tetikleyici yok: daha hızlı snap oynama, telefona sarılma, kötü ellerle kovalama. Bu üçünden herhangi biri belirdiğinde alarm çalsın; hangi tetikleyici olduğunu teşhis etmeye durma, belirtiyi fark et ve o satırın hamlesini uygula. Kural: tilt'te alınan karar aralıktan değil yaradan çıkar — o yüzden önce yarayı etiketle."},{title:"Otopsi kuralı",table:{section:"Bölüm 16",sub:"16.3",caption:"Doğru karar + kötü sonuç → aralık DEĞİŞMEZ."},ruleBox:"Kurala uyduysan ve kaybettiysen: 'doğru karar, kötü sonuç' — ARALIK DEĞİŞMEZ.",narration:"Son kart otopsi kuralı, ve bu senin kalibrasyonunu koruyan filtredir. Ne zaman otopsi yaparsın? El bittiği an değil — gün bittikten sonra. Masada sadece eli not al, çözümlemeyi akşama bırak. İki soru sorarsın: bir, karar anında bildiklerimle kitaptaki kural neydi? İki, o kurala uydum mu? Eğer uyduysan ve yine de kaybettiysen, vaka defterine 'doğru karar, kötü sonuç' yaz — ve aralığını değiştirme. Bu filtre neden kritik? Çünkü SHR'de doğru jam'ler sık kaybedilecek; bu filtre olmadan, dördüncü ve beşinci bölümün özenle kalibre edilmiş tablolarını turnuva ortasında bozmaya başlarsın. Tek uyarı: 'doğruydu, varyanstı' etiketi kendini aklama kapısına dönüşmesin — yalnız kurala gerçekten uyduysan geçerlidir. Sonuç değil, karar değerlendirilir."}]},{id:"M16",title:"WSOP Day 2 — 56bb restart planı",chapter:"Bölüm 17",minutes:8,slides:[{title:"Bu turnuva neden ayrı bir modül",table:{section:"Bölüm 17",sub:"17.1",caption:"Day 2 profili — 56bb, freezeout, re-entry yok"},bullets:["Freezeout + re-entry yok — tek mermin var, bustout kesin.","25 dakikalık seviye hızlı: 56bb, üç saat pasif oyunla 25bb'ye erir.","El sayısında geniş, stack riskinde dar."],ruleBox:"Pasiflik bu yapıda güvenli değil — yavaş elenmedir.",narration:"Bu senin turnuvan: WSOP Online Main Event, day two restart, elli altı big blind. Neden genel doktrinin dışında ayrı bir modül? Çünkü üç yapısal gerçek her kararı büker. Bir: bu bir freezeout ve re-entry yok — elenirsen bittin, ikinci mermi yok. İki: seviyeler yirmi beş dakika, yani çok hızlı; blindler saatte yaklaşık iki buçuk kat artıyor, elli altı big blind sadece üç saat pasif oyunla yirmi beş big blind'e eriyor. Yani bu yapıda hiçbir şey yapmadan beklemek güvenli değil, tersine yavaş bir elenmedir. Üç: para henüz garantide değil, bubble öncesi bir masaya oturur gibi oturuyorsun. Bu üçünün toplamı tek bir profil veriyor: el sayısında geniş, stack riskinde dar. Yani küçük potlarda sürekli aktif olacaksın — çalacaksın, baskı yapacaksın — ama tüm stack'ini yalnızca net bir planla ve güçlü bir el kombinasyonuyla ortaya süreceksin. Şişmiş potta tek per, as as dahil, hâlâ bir bluff-catcher; kök hata kuralı bu turnuvada da bire bir geçerli."},{title:"Açılış aralıkları (8-handed, ~50bb)",table:{section:"Bölüm 17",sub:"17.3",caption:"Pozisyona göre open — 2.1–2.3x, ante var"},bullets:["Ante olduğu için çalmak hâlâ çok kârlı.","Erken pozisyon dar (%13–15); button geniş (%40–44).","35bb altına düşersen bu tablo geçmez → stack modları."],visuals:[{kind:"range",value:"22+, A2s+, K5s+, Q7s+, J7s+, T7s+, 96s+, 86s+, 75s+, 65s, 54s, A4o+, K9o+, Q9o+, J9o+, T9o",valueLabel:"Button açılış",caption:"Button ~%40 open aralığı",compact:!0}],narration:"Açılış aralıkların; boyut iki nokta bir ile iki nokta üç kat arası, daha büyük açmanın bu derinlikte anlamı yok. Tabloyu pozisyon pozisyon oku. Erken pozisyonda, yani yu ti ci ve yu ti ci artı birde, dar açarsın: yedi yedi ve üstü çiftler, as on suited ve üstü, kral jek suited, kız jek suited, as jek offsuit ve üstü, kral kız offsuit. Orta ve geç pozisyonda aralık genişler; button'da neredeyse bütün suited as'leri, geniş suited kralları ve bağlı elleri açarsın, yaklaşık yüzde kırk. Online sahada rakipler blind savunmasını daha doğru yapıyor, o yüzden erken pozisyonu biraz daha dar tut; ama ante ortada durduğu için çalmak hâlâ çok kârlı. Bir masa ayarı: büyük körde çok sık fold eden sıkı bir oyuncu varsa button ve cut-off aralığını yüzde on genişlet. Ve şu eşiği unutma: otuz beş big blind altına düşersen bu tablo geçerliliğini yitirir, bir sonraki slaytın stack modlarına geçersin."},{title:"3-bet: kime evet, kime asla",table:{section:"Bölüm 17",sub:"17.4",caption:"3-bet value + blöf; boyut IP 3x, OOP 4x"},bullets:["Kime 3-bet: 30–50bb orta stackler (bubble baskısını en çok onlar hisseder) + çok açan regler.","Kime BLUFF 3-bet YAPMA: seni cover eden büyük stackler + 20bb altı.","Value 3-bet her zaman serbest — yasak olan sadece bluff 3-bet."],ruleBox:"Cover'a karşı yanan şey bluff 3-bet'tir; value 3-bet (kuvöz+/AK) serbest.",narration:"3-bet aralıkların. Boyut: pozisyondayken open'ın üç katı, pozisyon dışındayken dört katı; elli altı big blind'de 3-bet potları zaten stack'in yarısını görür, o yüzden aralığın polarize. Asıl mesele kime 3-bet, kime asla. Bluff 3-bet'i iki hedefe yönelt: otuz ile elli big blind arasındaki orta stackler, çünkü bubble baskısını en çok onlar hisseder ve fold ederler; ve masayı çok açan regler. Kime bluff 3-bet YAPMA: bir, seni cover eden büyük stackler — bubble yaklaşırken onların tek cevabı jam'dir ve bluff'un yanar; iki, yirmi big blind altındaki kısalar, onların da tek cevabı jam. Ama dikkat: burada yasaklanan bluff 3-bet, value değil. Kuvöz kuvöz ve üstü ile as krala her zaman value 3-bet atarsın; cover eden birinin jam'ine devam etmek ayrı bir karar, onu ICM eşikleri slaytında konuşacağız. Boyutunu da elden ele değiştirme: as as ile de as beş suited ile de aynı boyut, çünkü boyut-tell online sahada canlıdan bile pahalıdır."},{title:"4-bet ve commit eşiği",table:{section:"Bölüm 17",sub:"17.6",caption:"4-bet = 3-bet'in ~2.2–2.4x'i; 56bb'de ~20bb = commit"},bullets:["56bb'de 4-bet ~20–22bb = commit eşiği; 4-bet'e devam eden artık fold edemez.","4-bet value: KK+; AK karışık; QQ rakibe göre.","3-bet yersen: QQ–99/AQs/AJs/KQs call; A9o tipi offsuit kenar fold."],ruleBox:`4-bet ettiğin her el, 5-bet jam'e karşı planı önceden belli olmalı. "4-bet edip bakarız" yok.`,narration:"4-bet ve 3-bet yediğinde ne yapacağın. Önce boyut: 4-bet, 3-bet'in yaklaşık iki nokta iki ile iki nokta dört katı. Elli altı big blind'de bu yaklaşık yirmi, yirmi iki big blind eder — ve bu bir commit eşiğidir; 4-bet'e devam eden artık fold edemez, o yüzden 4-bet ettiğin her elin beş-bet jam'e karşı planı önceden belli olmalı, dört-bet edip bakarız diye bir şey yok. Value tarafı: kral kral ve üstü net value; as kral karışık, jam ve dört-bet arası; kuvöz kuvöz rakibe göre — nit bir oyuncuya kuvözü fold edebilirsin, agresif birine jam. Şimdi ters durum, sen açtın ve arkadan 3-bet geldi. Pozisyondaysan: kral kral ve üstü ile dört-bet value; as beş, as dört suited ile düşük frekans bluff dört-bet, çünkü as'i blokluyorsun. Call edeceğin bant: kuvöz kuvözden dokuz dokuza, as kız suited, as jek suited, kral kız suited. Fold: as dokuz offsuit gibi dominate edilen offsuit kenarlar ve düşük suited gapper'lar. Pozisyon dışındaysan tüm bu bandı bir kademe daralt."},{title:"Stack modları A–E",table:{section:"Bölüm 17",sub:"17.8",caption:"Her elden önce: hangi moddayım?"},bullets:["Mod A (45bb+): tam aralıklar, postflop manevra.","Mod B (30–45bb): flat daralır, commit yaklaşır, value artar.","Mod C/D (12–30bb): 3-bet çoğu jam; A5s–A2s jam cephanesine döner."],ruleBox:"45bb'de 130bb aralığı oynamak en pahalı alışkanlık — mod-önce-aralık.",narration:"Her elden önceki ilk soru bir el sorusu değil, bir mod sorusu: hangi stack modundayım? Aralığı ondan sonra seçersin. Mod A, kırk beş big blind ve üstü: tam aralıklar, postflop manevra, suited connector ve küçük çiftler tam değer. Mod B, otuz ile kırk beş arası: açılış korunur ama flat call daralır çünkü set-mining bozulur, commit eşiği yaklaşır, bluff 3-bet düşer, value artar. Mod C, yirmi ile otuz arası: açılış yüzde on beş, yirmiye iner, 3-bet çoğunlukla jam ya da küçük-commit, ve as beşten as ikiye suited aslar artık jam cephanesine döner. Mod D, on iki ile yirmi arası: bazı pozisyonlardan direkt jam, açtıysan 3-bet'e ya jam ya fold, Nash'e yakın. Mod E, on ikinin altı: saf jam ya da fold. En pahalı hatanın adı burada: kırk beş big blind'de yüz otuz big blind aralığı oynamak. Geçişleri ezberle — elli altıdan otuz beşe inince flat call alışkanlığını bırak, otuz beşten yirmiye inince commit eşiği öne kayar."},{title:"Faz planı, ICM eşikleri, guardraillar",bullets:["Faz 2 (bubble yakın) = en kârlı faz: kısalar taş kesilir, sen 3-bet/float ile ez.","ICM eşiği: bubble'da cover'ın 4-bet jam'ine karşı tüm stack aralığın = KK+.","AK: cover'ın sıkı jam'ine fold; ≤20bb jam'ine her zaman call."],ruleBox:"Şişmiş potta tek pair = alarm — AA dahil. Pot 40bb'yi geçtiyse: pot kontrolü + bluff-catcher.",visuals:[{kind:"hand",cards:"AA",label:"Şişmiş potta tek per — alarm"}],narration:"Son slayt: faz planı, ICM eşikleri ve kök hata korkulukları. Faz olarak dört evre var. Bubble uzakken Mod A'da kal, stack'i elli big blind üstünde tut, büyüklerle gereksiz savaşma. Bubble yaklaşırken — en kârlı fazın bu — on beş ile yirmi beş big blind'likler taş kesilir; onların açılışına 3-bet, blindlerine open, c-bet'lerine float. Tek frenin: seni cover edenler, onlara karşı bir kademe dar. Para girdiği an üç dört el sıkı oyna, kısalar kamikaze jam atar, premium ile karşıla, sonra normale dön. Derin para içinde ve final table'da ladder devasa: ICM chip-EV'yi geçer, kısaları ez, eşitlerden kaç, büyüklere premium. Şimdi sayısal ICM eşiği, ezberle: bubble'da seni cover eden birinin dört-bet jam'ine karşı kuvöz kuvöz bile fold — çünkü kral kral ve as krala karşı yaklaşık yüzde kırk equity'n var, üstüne bubble ICM primi biner, gereken equity yüzde kırk sekize çıkar. Pratik kural: bubble'da cover'a karşı tüm stack için aralığın kral kral ve üstü. As kral, cover'ın sıkı jam'ine fold ama yirmi big blind altı bir jam'e her zaman call. Ve değişmeyen korkuluk: şişmiş potta tek pair, as as dahil, alarmdır — pot kırk big blind'i geçtiyse varsayılanın pot kontrolü ve bluff-catcher, stack yarışı değil."}]},{id:"M17",title:"Preflop mantığı: boyut ve rol",chapter:"Bölüm 3 + Bölüm 4",minutes:7,slides:[{title:"Neden küçük aç (2.2–2.5x)",bullets:["Ante potun tabanını şişirir — potta zaten büyük ölü para var.","Küçük open = ucuz pozisyonel savaş; kâr preflop fold'dan değil, postflop pozisyondan gelir.","Büyüt (2.8–3.5x): pasif saha fold etmiyorsa, limpli isolate, ya da 25–35bb'de SPR'ı tek karara indirmek."],ruleBox:"Küçük open, BB'nin call'ını engellemek için değil — ucuz pozisyonel savaş satın almak için.",narration:"Preflop'un iki ayrı sorusu var; bu modül ikisini ayırıyor. Birincisi boyut. Neden herkes iki nokta iki, iki nokta beş kat gibi küçük açıyor? Cevap ante. Ante potun tabanını baştan şişirir; iki bin, dört bin blindde ante'yle potta zaten on bir bin civarı ölü para durur. Küçük bir open bile o potu almaya değer kılar — yani risk ödül oranını sen belirlersin: on bin riske atıp on bir binlik potu kovalarsın. Üç buçuk kat açsan aynı potu on dört bin riskle kovalarsın; blindler zaten savunacaksa fazladan koyduğun her chip kötü fiyata yatırımdır. Peki büyük kör her elde call ediyorsa bu open'ı bozmaz mı? Bozmaz, çünkü pozisyon sende. Büyük kör geniş bir aralıkla giriyor ama floptan sonra her sokakta pozisyonsuz ve zayıf ortalama elle oynuyor; senin kârın preflop fold'dan değil, postflop pozisyon avantajından geliyor. Küçük boyut sayesinde onun call'ı hata olmaktan çıkar ama senin yatırımın da küçük kalır — kimse büyük hata yapmaz, kâr marjı postflop beceriye kayar. Boyutu ne zaman büyütürsün? Üç durumda: masada zayıf ve pasif oyuncular flopa çok gelip fold etmiyorsa value ellerinde potu erken şişirmek için; limpli bir potta isolate ederken; ve stack yirmi beş, otuz beş big blind'e inince stack pot oranını tek karara indirmek için. Bunun dışında, özellikle elit bir masada, sabit kal — büyük open bu seviyede anında value ağırlıklı diye okunur, boyut deviasyonun bilgi sızdırır."},{title:"Open range = lineer",table:{section:"Bölüm 3",caption:"Açılış: moda göre eşik kayar, yapı hep tepeden aşağı."},bullets:["Open sorusu tek: 'bu el kârlı açılır mı?' — lineer, en iyiden aşağı kesintisiz iner.","AA'dan başlar, pozisyona göre 87s / A9o gibi kenarlarda biter."],ruleBox:"Open = 'elim yeter mi?' Kesintisiz, tepeden aşağı.",narration:"İkinci soru rol; önce open range'i netleştirelim. Open range, önünde kimse yokken sorduğun 'bu el kârlı oynanır mı' sorusudur ve lineerdir: en iyi elden başlar, kesintisiz aşağı iner. As astan başlar, pozisyona göre sekiz yedi suited ya da as dokuz offsuit gibi kenarlarda biter. Lineer demek, aradan el atlamazsın demek — belli bir eşiğin üstündeki her şeyi açarsın, altındaki her şeyi atarsın. Tablodaki modlara bak: seksen big blind üstünde geniş açarsın, derinlik azaldıkça eşik yukarı kayar ama yapı hep aynı, tepeden aşağı kesintisiz. Open'ın tek sorusu şu: elim yeter mi? Rakibin ne yaptığıyla ilgilenmezsin çünkü henüz kimse aksiyon almadı."},{title:"3-bet range = polarize",table:{section:"Bölüm 4",sub:"4.3",caption:"Value + blöf; ortası flat'e gider."},bullets:["3-bet çoğu pozisyonda polarize: value (kuvöz+, AK) + blöf (A5s–A2s); ortası call.","KQs, 99, AJs open'ın göbeğinde ama 3-bet'te YOK — onlar flat (100bb+).","A5s bluff seçilir: A blocker + fold'a kıyılmaz + call'da wheel/suited potansiyel. A9o daha güçlü ama playability kötü → bluff değil."],ruleBox:"3-bet = rakibin range'ine karşı elin en kârlı rolü: value mı, blöf mü, call mı, fold mu?",narration:"Şimdi kritik fark. 3-bet range, birinin açılışına verdiğin cevaptır ve çoğu pozisyonda polarizedir: en üstte value oynarsın — kuvöz kuvöz ve üstü ile as kral — en altta blöf oynarsın — as beşten as ikiye gibi eller — ve ortayı 3-bet etmezsin, flat call edersin. İşte can alıcı nokta burada: kral kız suited, dokuz dokuz, as jek suited gibi eller open range'inin tam göbeğindedir, ama 3-bet range'inde yoktur; onlar yüz big blind derinlikte flat call'dır. Peki as beş suited neden hem open'da hem 3-bet blöfünde? Sebepler farklı. Open olarak yeterince equity ve oynanabilirliği var, kârlı açılır. 3-bet blöfü olarak ise üç nedenle seçilir: as'i blokluyor, yani rakibin as as ve as kral kombinasyonlarını azaltıyor; fold edince kaybın az çünkü el zaten marjinal; ve call yersen suited ve wheel potansiyeliyle oynanabilir. Yani as beş iyi bir el olduğu için değil, fold etmeye kıyamadığın ama flat'i de tatsız olan, üstelik blocker taşıyan bir el olduğu için blöfe seçilir. Buna karşılık as dokuz offsuit ondan daha güçlüdür ama 3-bet blöfüne girmez: blocker aynı ama oynanabilirliği kötü ve dominasyon riski yüksek. Demek ki 3-bet'in sorusu open'ınkinden bambaşka: elim yeter mi değil, rakibin aralığına karşı bu elin en kârlı rolü ne — value mı, blöf mü, call mı, fold mu?"},{title:"Aynı el, farklı rol",table:{section:"Bölüm 4",sub:"4.7",caption:"Derinlik rolü kaydırır: polarize → merged/lineer."},bullets:["Pratik kural: open = 'elim yeter mi', 3-bet = 'bu elin en kârlı rolü ne'.","İstisna: BB vs SB lineer kurulur (AJs, KQs value'ya döner) — SB range'i geniş.","Derinlik/rakip kaydırır: 40–60bb'de merged; geniş açan agresif rege karşı AQo/99–TT value 3-bet olur."],ruleBox:"Aynı el pozisyona, derinliğe ve rakibe göre rol değiştirir — ezber değil, rol düşün.",narration:"Toparlayalım. Aynı el, iki listede farklı rol oynar çünkü sorular farklı. Open'da soru 'elim yeter mi', 3-bet'te soru 'bu elin bu rakibe karşı en kârlı rolü ne'. Ters örnek de aydınlatıcı: button'dan yedi altı suited açarsın, ama erken pozisyonun açılışına karşı aynı yedi altı suited çoğu zaman fold ya da flat'tir, 3-bet değil. İki istisnayı da bil. Birincisi, büyük kör smol blind'e karşı 3-bet'i polarize değil lineer kurar — as jek suited, kral kız suited gibi eller de value'ya döner — çünkü smol blind'in aralığı çok geniş ve ortadaki eller ona karşı value kazanır. İkincisi derinlik ve rakip rolü kaydırır: kırk ile altmış big blind arası aralık merged'e döner, flat neredeyse kalmaz; ve masada çok geniş açan agresif bir reg varsa ona karşı da linearleşirsin — as kız offsuit, dokuz dokuz, on on bile value 3-bet olur. Kısacası ezberleme, rol düşün: aynı el pozisyona, derinliğe ve rakibe göre rolünü değiştirir."}]},{id:"M18",title:"Day 2 icra: 50bb dinamikleri",chapter:"Bölüm 14 + Bölüm 17",minutes:8,slides:[{title:"50bb = B/C sınırı: ne açılır, ne kapalı",table:{section:"Bölüm 14",sub:"14.1",caption:"40–60bb köprü: 3-bet yeniden açılır, commit'e yaklaşır."},bullets:["YENİDEN AÇILAN: normal 3-bet (~7bb, jam değil) value + A5s bluff; IP flat/set-mine; gerçek SPR postflop.","KAPALI KALAN: şişmiş potta tek pair stack-off ASLA (hiçbir derinlikte açılmaz).","50bb'de 4-bet ≈ commit — 4-bet bluff'a dikkat."],ruleBox:"50bb en esnek bölge: 3-bet ve set-mine geri gelir; ama tek-pair stack-off ve pervasız 4-bet bluff kapalı.",narration:"Bu modül ikinci aşamaya, yani day two'ya ve elli big blind civarı oyuna odaklanıyor. Önce stack modun: elli big blind seni B ile C modunun sınırına, yani kırk ile altmış big blind bandına geri koyuyor. Bu aslında turnuva pokerinin en esnek bölgesi, çünkü kısa stack kısıtları henüz yok ama derin stack lüksü de yok. Neler yeniden açılıyor? Bir: normal 3-bet'ler. Artık her şey jam değil; value ellerinle ve as beş tipi blöflerinle yaklaşık yedi big blind'e 3-bet atabilirsin. İki: pozisyonda flat call'lar; çiftlerle ve suited broadway'lerle set-mining matematiği bu derinlikte yine çalışıyor. Üç: gerçek stack pot oranı kararlarıyla postflop oyun. Peki neler kapalı kalıyor? Birincisi ve en önemlisi: şişmiş potta tek pair'le stack-off. Bu hiçbir derinlikte açılmaz, elli big blind'de de açılmaz — kök hata kuralı sabit. İkincisi: 4-bet blöflerine dikkat. Elli big blind'de bir 4-bet seni pratikte commit eder; devam edersen artık geri dönüşün yok. Yani elli big blind özgürleştiren bir derinlik ama iki kapı hâlâ kilitli."},{title:"Day 2 üç faz + savaşçı/hayatta-kalan ayrımı",bullets:["Erken: masa yeniden çekildi, kimsede okuma yok. İlk saat sağlam ABC; ilk 30 dk'da masayı savaşçı/hayatta-kalan diye ayır.","Paraya yaklaşırken: orta stackler taş kesilir — onlara karşı neredeyse her iki kartla aç; büyüklerle kavga etme, kaptandan kaç.","ITM: bubble sonrası saha anında gevşer, min-casher'lar püskürür — value ağırlıklı dön, daha hafif call'la."],ruleBox:"Hayatta-kalanlardan çal; savaşçılara karşı sadece malla otur. Bag koruyanlar senin steal hedefin.",narration:"Day two üç fazda oynanır ve her fazın farklı bir modu var. Erken faz, yani şimdi: masalar yeniden çekildi, kimsede henüz okuma yok. İlk bir saat sağlam, standart ABC oyna ve bu sırada asıl işini yap — ilk otuz dakikada masanı ikiye ayır: savaşçılar ve hayatta-kalanlar. Hayatta-kalanlar bag'ini, yani günü kapattığı stack'ini korumaya oynayan, sıkılaşan oyunculardır; onlar senin steal hedefin, blindlerine acımasızca saldır. Savaşçılar karşılık verenlerdir; onlara karşı sadece gerçek elle, malla ortaya çık. İkinci faz, paraya yaklaşırken: işte elli big blind burada bir silaha dönüşür. Orta stackler bubble'a yakın dramatik biçimde sıkılaşır; onlara karşı neredeyse her iki kartla açabilirsin. Ama büyük stackler karşılık verir — kavgayı orta stacklerle seç, masanın kaptanından uzak dur. Üçüncü faz, para içinde: bubble patlayınca saha anında gevşer, sadece min-cash için bekleyenler püskürmeye başlar. O an value ağırlıklı oyuna dön ve daha hafif ellerle call'a in. Tek meta kural: hayatta-kalandan çal, savaşçıya karşı malla otur."},{title:"Postflop 50bb: doku + SPR kontrastı",table:{section:"Bölüm 11",sub:"11.0",caption:"SPR kararı: 3-bet potta commit, SRP'de derin."},bullets:["Single-raised PFR: kuru boardda 33% c-bet neredeyse hep; ıslak orta boardda (T87, 976) havayla check-back, value+draw ile büyük bet (66–75%).","3-bet pot SPR ~2.5–3: TPTK artık stack-off eli — düşük-SPR commit, kök hatanın istisnası DEĞİL.","SRP SPR 8+: eski kural aynen — tek pair asla stack-off."],ruleBox:"Tek fark derinlik: 3-bet potta (SPR ~3) TPTK commit; SRP'de (SPR 8+) tek pair bluff-catcher.",narration:"Elli big blind'de postflop icra. Önce single-raised pot, sen açan taraf. Kuru boardlarda, yani bağlantısız kartlarda, neredeyse her zaman üçte bir pot c-bet at; bu ucuz ve range'in için baskı kurar. Islak orta boardlarda ise — on sekiz yedi, dokuz yedi altı gibi — havayla check-back et, ama value ve draw'larınla büyük bas, üçte iki ile dörtte üç pot arası. Şimdi kritik kısım, stack pot oranı kontrastı. 3-bet'li bir potta stack pot oranı yaklaşık iki buçuk, üç olur; bu derinlikte top pair iyi kicker artık bir stack-off elidir. Dikkat: bu kök hatanın istisnası değil — düşük stack pot oranı commit matematiğinin ta kendisi; pot zaten stack'e göre büyük olduğu için top pair'le girmek doğru. Buna karşılık single-raised potta stack pot oranı sekiz ve üstüdür; orada eski kural birebir geçerli, tek pair asla stack-off etmez, bluff-catcher kalır. Yani tek değişken derinlik: aynı top pair, 3-bet potta commit, single-raised potta fren. Bir de check-raise: single-raised potta check-raise yersen, draw'suz tek pair'i at, çift artı draw'la devam et, top pair iyi kicker'ı bluff-catcher'a düşür — flop'ta call, turn'de yeniden değerlendir, büyük river'a fold. Ve korku kartları: c-bet'in call yediyse, turn'de gelen as ya da kral gibi overcard'ları hayatta-kalanlara karşı yaklaşık yüzde yetmiş beş barrel et, savaşçılara karşı kapat."},{title:"Stack trigger noktaları (ezberle)",table:{section:"Bölüm 17",sub:"17.8",caption:"Derinlik düştükçe karar ağacı sadeleşir."},bullets:["60bb+ tam playbook · 40bb: 4-bet bluff'ı öldür, EP'yi iki kademe daralt.","30bb: dünkü Mod C — resteal jam (77+/AT+/KQ geç açışlara) · 20bb: jam-first, BB dışı flat yok.","12bb ve altı: sadece push/fold."],ruleBox:"Her elden önce trigger'a bak: stack hangi bandda, karar ağacı ona göre kısalır.",narration:"Son olarak stack trigger noktaları — bunları ezberle, çünkü hangi bandda olduğun bütün karar ağacını belirler. Altmış big blind üstünde yukarıdaki tam playbook geçerli. Kırk big blind'e inince: 4-bet blöflerini tamamen öldür ve erken pozisyon aralığını iki kademe daralt, çünkü bu derinlikte 4-bet zaten commit. Otuz big blind: dünkü Mod C'ye dön — resteal jam'ler devrede, yani yedi yedi ve üstü, as on ve üstü, kral kız gibi ellerle geç açışlara yeniden-jam. Yirmi big blind: jam-first ağacına geç, büyük kör dışında flat yok. On iki big blind ve altı: sadece push fold chartları, başka hamle yok. Pratik hedef: day two başında ortalama muhtemelen altmış ile seksen big blind arası olacak; sen ortalamaya yakınsın, aceleye ve paniğe gerek yok. Bir double seni ilk yüzde yirmiye taşır. Kendi oyununu oyna, önce fazı sonra stack'i oku."}]},{id:"M19",title:"50bb aralık kartı: aç / flat / 3-bet / BB savun",chapter:"Bölüm 17 + Bölüm 4",minutes:8,slides:[{title:"Açılış: pozisyona göre (dar → geniş)",table:{section:"Bölüm 17",sub:"17.3",caption:"8-handed ~50bb open, 2.1–2.3x."},visuals:[{kind:"range",value:"77+, ATs+, KJs+, QJs, JTs, T9s, AJo+, KQo",valueLabel:"UTG/UTG+1",caption:"Erken ~%13: dar + güçlü"},{kind:"range",value:"22+, A2s+, K5s+, Q7s+, J7s+, T7s+, 96s+, 86s+, 75s+, 65s, 54s, A4o+, K9o+, Q9o+, J9o+, T9o",valueLabel:"BTN",caption:"Button ~%40: geniş steal"}],bullets:["UTG/UTG+1 ~%13: 77+, ATs+, KJs+, QJs, JTs, T9s, AJo+, KQo","LJ/MP ~%17: 66+, A9s+, A5s, KTs+, QTs+, J9s+, T9s, 98s, ATo+, KJo+","HJ ~%20: 55+, A8s+, A4s–A5s, K9s+, Q9s+, J9s+, T8s+, 98s, 87s, ATo+, KJo+, QJo","CO ~%26: 44+, A2s+, K8s+, Q9s+, J8s+, T8s+, 97s+, 87s, 76s, A9o+, KTo+, QTo+, JTo","BTN ~%40: 22+, suited Ax, K5s+, Q7s+, J7s+, T7s+, 96s+, 86s+, 75s+, 65s, 54s, A4o+, K9o+, Q9o+, J9o+, T9o · SB %35 raise-only","Exploit: yetkin sahaya karşı EP'den offsuit broadway'i (AJo, KQo) kes — domine olur, realize zor. SB: fold'a kadar gelirse ~%40 3x; tight BB'ye genişle, manyak BB'ye ~%30 daralt."],ruleBox:"Erken dar-güçlü, geç genişler. 35bb altına düşersen bu tablo geçmez (→ M18 stack trigger).",narration:"Bu bir tekrar ve referans modülü: elli big blind day two için açılış, flat, 3-bet ve büyük kör savunması aralıklarını pozisyon pozisyon ayrı ayrı topluyoruz — çünkü aynı aralığı farklı bir çerçevede tekrar görmek onu ezbere değil, sezgiye çevirir. Önce açılış. Tek prensip: erken pozisyon dar ve güçlü, pozisyon geç indikçe aralık genişler. Erken pozisyonda, yani yu ti ci ve artı birde, yaklaşık yüzde on üç: yedi yedi ve üstü çiftler, as on suited ve üstü, kral jek suited ve üstü, birkaç bağlı suited ve üstteki offsuit broadway'ler. Buradaki her el bir 3-bet'e ya da flop baskısına devam edebilir — açtığın hiçbir şey seni zor durumda bırakmamalı. Orta pozisyonlarda aralık kademe kademe açılır; as beş suited, suited connector'lar, alt offsuit broadway'ler sırayla eklenir. Button'da yaklaşık yüzde kırk: bütün suited as'ler, geniş suited krallar ve dallar, bağlı eller — çünkü arkanda sadece iki kör var ve pozisyon senin. Smol blind folda kadar gelirse yüzde otuz beş sadece raise, limp yok. Grid'lere bak: solda dar erken aralık, sağda geniş button — ikisi arasındaki fark tüm açılış mantığını özetliyor. İki exploit ayarını da ekle. Bir: yetkin, blindini doğru savunan bir sahaya karşı erken pozisyonun offsuit broadway'lerini — as jek offsuit, kral kız offsuit — kes; bunlar kolay domine olur ve pozisyonsuz realize etmesi zordur, kitap aralığının en zayıf açılışlarıdır. İki: smol blind açılışını rakibe göre ayarla — folda kadar geldiğinde yaklaşık yüzde kırk, üç kat aç; büyük körde sıkı ve çok fold eden biri varsa daha da genişle, agresif ve manyak biri varsa yaklaşık yüzde otuza daralt. Ve şu eşiği unutma: otuz beş big blind altına düşersen bu tablo geçmez, stack trigger'larına geçersin."},{title:"3-bet: kime, nasıl (value + blöf)",table:{section:"Bölüm 4",sub:"4.3",caption:"Pozisyon eşleşmeleri: value + blöf."},visuals:[{kind:"range",value:"TT+, AJs+, AQo+, KQs",blof:"A5s-A2s, KTs, QTs, J9s, T8s",valueLabel:"value",blofLabel:"blöf",caption:"CO açışına karşı (BTN'den)"},{kind:"range",value:"99+, ATs+, AQo+, KQs, KJs",blof:"A5s-A3s, K9s-K7s, QTs, J9s, T8s, 76s",valueLabel:"value",blofLabel:"blöf",caption:"BTN açışına karşı (BB'den) — sert döv"}],bullets:["Boyut: IP open'ın 3x'i (~7bb), OOP 4x'i (~8.5bb).","vs EP: QQ+/AK value; A5s ara sıra blöf. Hepsi bu.","vs LJ/HJ: TT+/AQs+/AKo value; blöf A5s–A3s, KJs, QJs.","vs SB (BB'den) lineer+geniş: 88+, A9s+, ATo+, KTs+, QTs+, JTs value; K7s+, Q8s+, J8s+ blöf."],ruleBox:"3-bet edeceğin el 4-bet/jam'e devam edebilmeli; edemiyorsa flat (IP/BB) ya da fold.",narration:"Şimdi 3-bet: kime ve nasıl. Boyut önce: pozisyondayken açılışın üç katı, yaklaşık yedi big blind; pozisyon dışındayken dört katı, yaklaşık sekiz buçuk. Kime 3-bet, kimin aralığına göre değişir. Erken pozisyon açışına karşı disiplin bölgesindesin: kuvöz kuvöz ve üstü ile as kral value, ve sadece ara sıra as beş suited blöf — hepsi bu, erken pozisyondan blöf 3-bet'i zorlamıyorsun. Açan pozisyon geç indikçe hem value hem blöf genişler. Cut-off açışına button'dan: on on ve üstü, as jek suited ve üstü, as kız offsuit ve üstü, kral kız suited value; blöf tarafı as beşten as ikiye, kral on suited, kız on suited, jek dokuz suited, on sekiz suited. Button açışına büyük körden: burada button'ı sert dövüyorsun çünkü day two steal'cileri orada yaşıyor — dokuz dokuz ve üstü, as on suited ve üstü value, geniş suited bloker blöfleri. Ve smol blind açışına büyük körden aralık lineerleşir ve genişler, çünkü onun aralığı çok geniş. Grid'lerdeki yeşil value ve turuncu blöf ayrımını gözünle gör. Altın kural sabit: 3-bet edeceğin el gelen 4-bet ya da jam'e devam edebilmeli; edemiyorsa o eli flat et ya da at."},{title:"Flat call: yalnız IP, set-mine matematiği",visuals:[{kind:"range",flat:"99-22, AJs, ATs, KQs, KJs, KTs, QJs, QTs, JTs, T9s, 98s, 87s, 76s",caption:"IP flat (CO/BTN) — LJ/HJ açışına karşı"}],bullets:["IP (CO/BTN) flat: 99-22 set-mine (50bb'de implied odds geri geldi) + AJs, ATs, KQs, KJs, KTs, QJs, QTs, JTs, T9s, 98s, 87s, 76s.","SB'den ASLA cold-call — 3-bet ya da fold (100bb'de flat kayıp pozisyon).","Coldcall'un 3 şartı (Bölüm 4.4): pozisyon (IP/BB) + derinlik (call'un 15x'i arkada) + ödeyen rakip. Üçü yoksa flat etme.","Domine offsuit broadway (AJo, KQo, KJo) UTG açışına coldcall YOK — 3-bet ya da fold."],ruleBox:"Flat sadece pozisyondayken; OOP tek per 3-bet potta zaten bluff-catcher.",narration:"Üçüncü kart: flat call, yani 3-bet etmeden sadece call. İki temel kural. Bir: flat yalnızca pozisyondayken. Cut-off ya da button'da, senden erken açan birine karşı, iki iki'den on on'a kadar çiftlerle set-mining yaparsın — ve elli big blind bu matematiği geri getiriyor, çünkü set çektiğinde ödeyecek yeterli derinlik var; yüz big blind kadar olmasa da implied odds yeniden çalışıyor. Bunun üstüne as jek suited, as on suited, kral kız suited gibi oynanabilir suited eller ekleyebilirsin, özellikle gevşek açanlara karşı. İki: smol blind'den asla cold-call yok — oradan ya 3-bet ya fold, çünkü flat seni kalıcı olarak pozisyonsuz bırakır. Coldcall'un üç şartını hatırla: pozisyon, derinlik, ve ödeyen rakip; üçü aynı anda yoksa flat etme. Ve domine edilen offsuit broadway'leri — as jek offsuit, kral kız offsuit, kral jek offsuit — erken açışa coldcall etme; bunlar ya 3-bet ya fold elleridir, ortada oynanan hâlleri tam da kök hatayı yaşatan ellerdir."},{title:"BB savunması: ante'li fiyat",table:{section:"Bölüm 4",sub:"4.8",caption:"Ante potu şişirir → geniş defend, ~%21 equity yeter."},visuals:[{kind:"range",value:"99+, ATs+, AQo+, KQs, KJs",blof:"A5s-A3s, K9s-K7s, QTs, J9s, T8s, 76s",valueLabel:"3-bet value",blofLabel:"3-bet blöf",caption:"BB'den BTN'ye 3-bet (üstü); gerisi call"}],bullets:["Fiyat: 2.25x açışa ~%21 equity yeter (2500/12000) — neredeyse her iki kart geçer.","Call (defend): tüm suited (T3s dahil), bağlı/1-gap offsuit (86o, 97o, J8o), tüm Ax, Kx'in çoğu, 22+ → ~%55-60.","Fold: J3o, Q4o, K2o–K5o, 92o — hem kopuk hem domine çöp.","Ucuz girmek ≠ ucuz devam: flopta ikinci per 'zaten pottayım' = kök hatanın BB versiyonu. Multiway'de daralt."],ruleBox:"Fiyat equity'yi kurtarır, oynanabilirliği kurtarmaz — zayıf offsuit'i fiyat olsa bile at.",narration:"Son kart: büyük kör savunması, ve burası matematiğin en cömert yeri. Ante olduğu için potta zaten çok para var, senin eklemen az; iki nokta yirmi beş katlık bir açışa karşı yaklaşık yüzde yirmi bir equity yeter, ki neredeyse her iki kart bu eşiği geçer. O yüzden büyük körden defend aralığın çok geniş: tüm suited eller, tüm çiftler, bağlı ve tek boşluklu offsuit'ler, bütün as'ler, kralların çoğu — kabaca elinin yüzde elli beş, altmışı call. Neyi atarsın? Hem kopuk hem domine çöpü: jek üç offsuit, kız dört offsuit, kral iki'den kral beşe offsuit, dokuz iki offsuit. Fiyat equity'yi kurtarır ama oynanabilirliği kurtarmaz — o yüzden zayıf offsuit'i fiyat cazip olsa bile at. Üstteki elleri call yerine 3-bet'e yükseltirsin; grid'de gösterilen dokuz dokuz ve üstü, as on suited ve üstü value, bloker blöfler. Ama en kritik uyarı şu: ucuz girmek ucuz devam etmek değildir. İki bin beş yüze girip flopta ikinci per yakalayınca 'zaten pottayım' moduna geçmek, kök hatanın büyük kör versiyonudur; giriş fiyatın flop sonrası kararlarını etkilemez, her sokak yeni bir karardır. Ve multiway'de bu geniş defend'i daralt — domine eller çok yollu potta değer kaybeder."}]},{id:"M20",title:"20–30bb: jam ya da fold",chapter:"Bölüm 5",minutes:7,slides:[{title:"Bandın karakteri: değer fold equity'den",bullets:["Değer kart tamamlamaktan değil, FOLD EQUITY'den gelir.","Aranan el 'gelişebilen' değil, ŞİMDİDEN İYİ: as, broadway, çift.","Karar sırası 2 saniyede: MOD → POZİSYON → EL. Suited connector'da 3. adıma bile geçme."],ruleBox:"Soru 'bu el yeterince iyi mi' değil — 'bu el bu stack'te oynanabilir mi'.",narration:"Bu modül yirmi ile otuz big blind bandı, yani jam ya da fold bölgesi — ve turnuvada en çok bu bantta kalıyorsun, o yüzden tekrar da olsa netleştiriyoruz. Bandın tek cümlelik karakteri şu: bu derinlikte değer, kart tamamlamaktan değil, fold equity'den gelir. Yani parayı, rakibi preflop fold ettirerek kazanırsın, flopta el yaparak değil. Bunun sonucu el seçimini baştan değiştirir: aradığın el gelişebilen bir el değil, şimdiden iyi olan bir el — as, broadway, ya da çift. Spekülatif ellerin motoru olan implied odds bu derinlikte çalışmaz; set ya da kent yaptığında ödetecek stack yok, tamamlamadığın seksen beş durumda ise çaresizsin. O yüzden karar sıran iki saniyede işler: önce mod, sonra pozisyon, sonra el. Yirmi sekiz big blind'de elinde suited connector gördüğünde üçüncü adıma, yani ele bakmaya bile geçmiyorsun — mod ve pozisyon zaten cevabı vermiş oluyor. Kısacası bu bantta soru 'bu el yeterince iyi mi' değil, 'bu el bu stack'te oynanabilir mi'."},{title:"Açılış (open) aralıkları",table:{section:"Bölüm 5",sub:"5.1",caption:"Boyut 2–2.2x; daha büyük açmanın anlamı yok."},visuals:[{kind:"range",value:"77+, ATs+, AJo+, KQs",valueLabel:"UTG/UTG+1",caption:"Erken: dar"},{kind:"range",value:"22+, A2s+, A2o+, K7s+, K9o+, Q9s+, J9s+, T9s",valueLabel:"BTN",caption:"Button: geniş çal"}],bullets:["UTG/UTG+1: 77+, ATs+, AJo+, KQs","LJ/HJ: 55+, A8s+, ATo+, KTs+, QJs","CO: 33+, A5s+, A9o+, K9s+, QTs+, JTs","BTN: 22+, tüm A-x, K7s+, K9o+, Q9s+, J9s+, T9s","SB: 22+, A2s+, A7o+, K9s+, KTo+, QTs+"],ruleBox:"İlk giren avantajı senin — açtığında blindleri toplamayı hedefle.",narration:"Açılış aralıkları, önünde kimse yokken. Boyut iki ile iki nokta iki kat; bu derinlikte daha büyük açmanın anlamı yok çünkü zaten stack'inin büyük kısmını ortaya koyuyorsun. Tabloyu pozisyon pozisyon oku, ama mantık tek: erken dar, geç geniş. Erken pozisyonda yedi yedi ve üstü, as on suited ve üstü, as jek offsuit ve üstü, kral kız suited — dar ve güçlü. Orta pozisyonlarda as sekiz suited, as on offsuit, kral on suited gibi eller eklenir. Cut-off'ta üç üç ve üstü çiftler, as beş suited, as dokuz offsuit, kral dokuz suited. Button'da en geniş: iki iki ve üstü tüm çiftler, bütün as'ler, kral yedi suited ve üstü, geniş offsuit krallar, ve birkaç bağlı el — çünkü arkanda sadece iki kör var. Smol blind'den de yirmi iki ve üstü, tüm suited as'ler, as yedi offsuit ve üstü, doğrudan raise. Grid'lerde solda dar erken, sağda geniş button. İlk giren avantajı senin; açtığında amacın showdown değil, blindleri ve ante'yi toplamak."},{title:"3-bet = JAM (flat yok)",table:{section:"Bölüm 5",sub:"5.2",caption:"3-bet commit demek; doğrudan all-in."},visuals:[{kind:"range",value:"88+, ATs+, AQo+, KQs",valueLabel:"3-bet JAM",caption:"CO/BTN açışına karşı"}],bullets:["vs EP açılış: TT+, AQs+, AKo jam.","vs CO/BTN açılış: 88+, ATs+, AQo+, KQs jam.","vs chip leader / jam'e fold eden: 77+, A9s+, AJo+, KQs (genişletilmiş).","FLAT YOK — ne SB'den, ne BB'den, ne IP'den. Geniş flat 100bb+ dünyası."],ruleBox:"Bu bantta 3-bet = commit = all-in. '3-bet edip fold' diye bir yapı yok.",narration:"Şimdi en kritik fark: bu bantta 3-bet, commit demektir. Yani birinin açışına 3-bet'liyorsan, doğrudan all-in gidiyorsun; 'üç-bet edip fold' diye bir yapı bu derinlikte yok, çünkü 3-bet'e koyduğun chip zaten stack'ine göre commit seviyesinde. Kime jam'liyorsun? Erken pozisyon açışına karşı dar: on on ve üstü, as kız suited ve üstü, as kral offsuit. Cut-off ya da button açışına karşı biraz geniş: sekiz sekiz ve üstü, as on suited ve üstü, as kız offsuit ve üstü, kral kız suited. Ve masada jam'e fold ettiğini gördüğün bir chip leader ya da sıkı oyuncuya karşı aralığı genişlet: yedi yedi ve üstü, as dokuz suited ve üstü, as jek offsuit ve üstü. En önemli kural: bu bantta flat yok — ne smol blind'den, ne büyük körden, ne pozisyondan. Dördüncü bölümün o geniş flat tabloları yüz big blind ve üstü dünyasına ait; burada geçersiz. Ya jam, ya fold, ya da açan sensen open."},{title:"Jam'e call + kayıtsız fold + 20bb altı",visuals:[{kind:"range",value:"99+, AJs+, AQo+",valueLabel:"jam'e call",caption:"Bundan aşağısı 28bb'de call değil"}],bullets:["Rakip all-in geldiyse call: 99+, AJs+, AQo+. Aşağısı: ya sen jam, ya fold.","Kayıtsız fold: tüm suited connector (T9s–54s), suited gapper, zayıf offsuit broadway (KJo, QJo, JTo), küçük çiftle FLAT.","20bb altı (Mod D): jam-first ağacı — açılışın bir kısmı direkt jam, BB dışı flat yok.","12bb altı (Mod E): saf jam/fold; ilk giren avantajı, limp üstüne izole jam."],ruleBox:"Spekülatif eli fold etmek, gerçek elle jam yapacağın cephaneyi korur.",narration:"Son olarak jam'e karşı call ve kayıtsız fold listesi. Rakip sana all-in geldiyse call aralığın dar: dokuz dokuz ve üstü, as jek suited ve üstü, as kız offsuit ve üstü. Bunun aşağısı yirmi sekiz big blind'de call değildir — o eli ya sen jam'leyeceksin, ya fold edeceksin; jam ve call ayrı kararlardır, çünkü jam'de fold equity'n var, call'da yok. Kayıtsız şartsız fold listesi: bütün suited connector'lar, yani on dokuz suited'den beş dört suited'e kadar; tüm suited gapper'lar; zayıf offsuit broadway'ler, yani kral jek offsuit, kız jek offsuit, jek on offsuit; ve küçük çiftle flat — çiftle jam ayrı konu ama flat yok. Yirmi big blind altına indiğinde Mod D'ye geçersin: jam-first ağacı, yani açılışın bir kısmı direkt jam ve büyük kör dışında flat yok. On iki big blind altında ise saf jam ya da fold, ilk giren avantajı ve limp üstüne izole jam. Tek cümle: spekülatif eli fold etmek, gerçek elle jam yapacağın cephaneyi korur."}]},{id:"M21",title:"Final masası: 4/3/HU nasıl oynanır",chapter:"Bölüm 12",minutes:8,slides:[{title:"FT omurgası: el değil, stack rolü",table:{section:"Bölüm 12",sub:"12.2",caption:"Doğru davranış EL'e değil STACK ROLÜNE bağlı."},bullets:["Kısa (<15bb): ilk jam'ci ol, ladder'ı gözle; kilitlenmek de bir busttur.","Orta: en kırılgan — kimin bust'ını beklediğini bil, cover edenle pot açma.","Cover eden derin: agresyon serbest, cezasız ez; ama chip-leader'la ego savaşı yok."],ruleBox:"FT'de soru 'elim ne' değil, 'stack rolüm ne'. ICM açıksa jam ≠ call (asimetri).",narration:"Turnuvanın son aşaması: final masası, ve giderek küçülen masa — dört kişi, üç kişi, ve heads-up. Önce değişmeyen omurga: final masasında doğru davranış elinle değil, stack rolünle belirlenir. Aynı el, kısa stack'te bir şey, cover eden derin stack'te başka bir şeydir. Tabloya bak, üç rol var. Kısaysan, on beş big blind altında: ilk jam'ci sen ol, hamle başlatanın avantajını al, ve ladder'ı yani ödeme merdivenini gözle; ama şunu unutma, kilitlenip blindlere erimek de bir bust'tır, katlanmak her zaman doğru değil. Orta stack'sen: masanın en kırılgan pozisyonundasın — ne kısa gibi rahat jam edebilirsin, ne büyük gibi baskı kurabilirsin; kimin bust'ını beklediğini bil ve seni cover eden biriyle gereksiz pot açma. Cover eden derin stack'sen: agresyonun serbest, kısaları ve orta stackleri cezasız ez; tek yasak, eşit derin bir chip-leader'la ego savaşına girmek. Ve ICM açıkken kritik asimetri: jam etmek call etmekten çok daha ucuzdur, çünkü jam'de fold equity'n var, call'da yok — o yüzden jam ve call aralıkların ayrışır."},{title:"4-handed: rol + ICM hâlâ dişli",table:{section:"Bölüm 12",sub:"12.4",caption:"Kilitli orta stack = en kârlı hedef."},visuals:[{kind:"range",value:"22+, A2s+, K4s+, Q7s+, J7s+, T7s+, 96s+, 86s+, 75s+, 65s, 54s, A2o+, K8o+, Q9o+, J9o+, T9o",valueLabel:"4-handed BTN ~%45",caption:"Baseline — tam Nash molada kalibre"}],bullets:["Baseline açılış: 4-handed BTN ~%45, ilk pozisyon (CO) ~%25.","Masa küçüldü, blindler daha sık vurur → açılış aralığı genişler.","Ama ICM hâlâ dişli: pay-jump'lar yakın, cover edilirken marjinal flip = fold.","Hedef: kilitlenmiş orta stack (soy); cover edenle ego savaşı yok."],ruleBox:"Genişle ama rol-gated: cover ediliyorsan daralt, cover ediyorsan ez.",narration:"Dört kişi kaldığında ne değişir? İki şey aynı anda. Bir: masa küçüldüğü için blindler ve ante sana çok daha sık vurur, her orbit'te daha büyük bir stack yüzdesi ödersin; bu yüzden hayatta kalmak için açılış aralığını genişletmek zorundasın, bekleyerek erirsin. İki: buna rağmen ICM hâlâ dişli, çünkü pay-jump'lar, yani ödeme sıçramaları artık çok yakın ve büyük. Bu ikisini birlikte yönetirsin: genişlersin ama rol-gated, yani rolüne göre. Seni cover eden biri varsa marjinal spotları daraltırsın, çünkü kaybedersen bust olursun; sen cover ediyorsan ezersin. En kârlı hedef sabit: kilitlenmiş, yani ödeme atlamayı korumak için sıkılaşmış orta stack — onu soyarsın. Ve eşit derin büyük stack'lerle ego savaşına girmezsin; dört kişide bir yanlış flip seni dördüncülüğe gönderir. Somut bir baseline: dört kişide button açılışın yaklaşık yüzde kırk beş, ilk pozisyon yaklaşık yüzde yirmi beş; grid'de button aralığını görüyorsun. Tam Nash bu derinlikte molada, drill'de kalibre edilir — bu bir başlangıç çizgisi."},{title:"3-handed: pozisyon patlar",visuals:[{kind:"range",value:"22+, A2s+, K2s+, Q6s+, J7s+, T7s+, 96s+, 85s+, 75s+, 64s+, 54s, A2o+, K7o+, Q8o+, J8o+, T8o+, 98o",valueLabel:"3-handed BTN ~%50",caption:"Baseline — SB ~%45 raise"}],bullets:["Baseline: 3-handed BTN ~%50, SB ~%45 (raise).","Pozisyon değeri patlar — button çok güçlü, blind savaşı sıklaşır.","Aralıklar iyice geniş: button'dan agresif aç, SB/BB'yi bas.","ICM yumuşar ama pay-jump varsa hâlâ rol-gated; kısaysan ilk jam'ci ol."],ruleBox:"3-handed'de button = kâr merkezi; geniş aç, ama pay-jump dişliyse cover'a saygı.",narration:"Üç kişi kaldığında oyun bir kez daha hızlanır ve pozisyonun değeri patlar. Artık her elde ya button'dasın, ya smol blind, ya büyük kör; button son derece güçlü çünkü iki rakibin de önünde aksiyon alıyorsun ve postflop pozisyon sende. Aralıkların iyice genişler: button'dan agresif açarsın, blind savaşları sıklaşır, ve baskıyı sen kurarsın. ICM bu noktada yumuşamaya başlar çünkü daha az oyuncu kaldı ve herkes zaten iyi para kilitledi; ama eğer büyük bir pay-jump hâlâ varsa — mesela birincilik ikinciliğin çok üstündeyse — karar hâlâ rol-gated kalır. Kısaysan ilk jam'ci olma prensibin sürer; derinsen iki rakibini de basarsın. Özet: üç kişide button senin kâr merkezin, geniş ve agresif oyna, ama pay-jump dişliyse cover edilene saygı göster. Somut baseline: üç kişide button yaklaşık yüzde elli, smol blind yaklaşık yüzde kırk beş raise; grid button'ı gösteriyor. Yine tam aralık drill'de kalibre."},{title:"Heads-up: ICM biter, chipEV başlar",visuals:[{kind:"range",value:"22+, A2s+, K2s+, Q2s+, J2s+, T3s+, 94s+, 84s+, 74s+, 63s+, 53s+, 43s, A2o+, K2o+, Q4o+, J6o+, T6o+, 96o+, 85o+, 75o+, 64o+, 54o",valueLabel:"HU button aç ~%82",caption:"Neredeyse her el"},{kind:"range",value:"77+, A9s+, KTs+, QTs+, JTs, ATo+, KJo+",valueLabel:"HU BB 3-bet value",caption:"re-steal çekirdek ~%15"}],bullets:["Button = smol blind: ilk aksiyon + postflop pozisyon sende.","İki ödül kilitli → ICM çözüldü, saf chipEV oyna.","Button çok geniş aç (~%82), BB defend ~%65 (call+3-bet), 3-bet value 77+/A9s+/KTs+/ATo+.","Bunlar baseline — tam Nash bu derinlikte molada/drill'de kalibre (kitap 12.5)."],ruleBox:"HU'da ICM biter, chipEV başlar; button = SB, inisiyatif + pozisyon sende.",narration:"Ve son perde: heads-up, iki kişi. Burada mekanik tümüyle değişir. Birincisi, button artık smol blind'dir; yani hem preflop ilk aksiyonu sen alırsın, hem de postflop pozisyon sende olur — button devasa bir avantaj. İkincisi ve en önemlisi: sadece iki ödül kaldığı için ICM pratikte çözülmüştür; ikinci ödül garanti, birincilik için oynuyorsun, o yüzden artık saf chipEV oynarsın, ICM daralması biter. Bunun sonucu agresif bir oyun: button'dan çok geniş açarsın, yaklaşık yüzde seksen ve üstü; büyük körden de çok geniş defend edersin; ve kazanan, en iyi eli bekleyen değil, postflop en iyi oynayan ve baskıyı sürekli kuran olur. Sana somut bir baseline veriyorum: button'dan yaklaşık yüzde seksen iki açarsın, yani neredeyse her el; büyük körden yaklaşık yüzde altmış beş savunursun, call ve 3-bet karışık; 3-bet value çekirdeğin yedi yedi ve üstü, as dokuz suited ve üstü, kral on suited ve üstü, as on offsuit ve üstü. Grid'lerde button açılışını ve büyük kör 3-bet value'sunu görüyorsun. Ama şu notu unutma: bunlar başlangıç çizgisi; tam Nash aralıkları bu derinlikte molada, drill'de kalibre edilir — kitabın on iki nokta beş felsefesi bu, ezber tablo değil. Aklında kalması gereken tek cümle: heads-up'ta ICM biter, chipEV başlar; button smol blind'dir, inisiyatif ve pozisyon sende."}]},{id:"M22",title:"C-bet & barreling: flop → turn → river",chapter:"Bölüm 18 ★",minutes:9,slides:[{title:"Tez: c-bet bir sebep için — value ya da fold equity",table:{section:"Bölüm 18",sub:"18.1",caption:"Rec sahada ağırlık value'ya kayar."},bullets:["Preflop boyut (B4.2): IP 3-bet 3×, OOP 4×, coldcaller başına +1×, squeeze 4.5–5×.","C-bet iki nedenden atılır: value (öderler) VEYA fold equity (atarlar).","Rec sahada fold equity düşük → default c-bet GTO'nun ~%10–15 altı.","İkisi de 'hayır' ise check. Havayla range-bet refleksi para yakar."],ruleBox:"Rec sahada c-bet bir SEBEP için atılır — otomatik range-bet refleksi için değil.",narration:"Bu modül dağınık bir konuyu tek yere topluyor: bahis boyutları ve c-bet, yani süreklilik bahsi. Önce boyut haritası. Preflop tarafı kitapta net ve ezber: pozisyon içindeyken 3-bet açılışın üç katı, pozisyon dışındayken dört katı, her cold-caller için bir açılış boyutu ekle, squeeze dört buçuk beş kat. Şimdi asıl kafa karıştıran taraf: flop c-bet. Buradaki tek soru şu, c-bet neden atılır? İki neden var. Bir: value, yani senden zayıf bir el ödeyecek. İki: fold equity, yani daha iyi bir el atacak ya da bir draw call'ı bırakacak. Tabloya bak. Senin sahanda, yani rec-ağırlıklı Main ve EPT masalarında rakip çoğu zaman station'dır, kolay kolay fold etmez. Bu da fold equity'yi düşürür. Sonuç: senin default c-bet frekansın çözücünün önerdiğinin yaklaşık yüzde on, yüzde on beş altında olmalı; çözücü dengeli bir rakibe göre konuşur, senin rakibin dengeli değil. Pusula tek cümle: c-bet bir sebep için atılır, öderler mi yoksa gerçekten atarlar mı? İkisinin de cevabı hayırsa check et. Havayla otomatik range-bet refleksi station'a karşı para yakmaktır; üstelik call yiyince kendi şişirdiğin pota bluff-catcher olarak girersin, kök hatanın ta kendisi."},{title:"Flop: board dokusu frekansı ve boyutu belirler",table:{section:"Bölüm 18",sub:"18.2",caption:"Board setler boyutu, elin değil."},visuals:[{kind:"board",cards:"As 7d 2c",label:"Kuru — üçte bir, range-bet"},{kind:"board",cards:"9s 8s 7d",label:"Islak — üçte iki polarize / gerisi check"}],bullets:["Kuru yüksek-kart (A-7-2): range avantajı sende → 1/3 yüksek frekans range-bet.","Islak bağlantılı (9-8-7): range avantajı BB'de → 2/3 polarize, gerisi check.","Kuru eşleşmiş (8-8-3): ucuz fold equity → küçük bet.","Multiway her board: frekans çöker (B13)."],ruleBox:"Kuru = küçük boyut, geniş aralık. Islak = büyük boyut, dar aralık.",narration:"Flop c-bet'in birinci belirleyicisi board dokusudur, elin değil board. Çünkü boyutu ve frekansı board belirler. Anahtar kavram range avantajı: preflop açan sensin, o yüzden yüksek kartlı kuru bir board senin aralığına yarar, düşük ve bağlantılı bir board ise call eden büyük körün aralığına yarar. Üç ana durumu ayır. Bir: kuru, yüksek kartlı, bağlantısız board, mesela as yedi iki ya da kral sekiz üç. Range avantajı sende, o yüzden aralığının tamamıyla küçük bir c-bet atarsın, üçte bir pot, yüksek frekans; buna range-bet denir, ucuzdur ve elin hakkında bilgi taşımaz. İki: ıslak, bağlantılı board, mesela dokuz sekiz yedi ya da yedi altı beş. Burada range avantajı sende değil, herkes bir şey yakalar; o yüzden seçici ol, polarize oyna, güçlü value ve gerçek nut-draw'la üçte iki pot at, gerisini check et, havayla barrel atma. Üç: kuru eşleşmiş board, mesela sekiz sekiz üç. Kimse eşleşmeyi çok tutmaz, fold equity ucuzdur, küçük bir bet yüksek frekans çalışır. Ve şu istisnayı unutma: üç ya da daha çok kişilik potta bu bölüm askıya alınır, c-bet frekansı çöker, bunu on üçüncü bölümde işledik. Tek cümle: kuru board küçük boyut geniş aralık, ıslak board büyük boyut dar aralık."},{title:"Hangi elle c-bet — dört sınıf, üç boyut",table:{section:"Bölüm 18",sub:"18.3",caption:"Value / draw / hava / marjinal × kuru / ıslak."},bullets:["Value (top pair+/overpair/set): kuru 1/3, ıslak 2/3 — şişirmek istediğin el.","Gerçek/nut draw: semi-bluff bet, ıslakta büyük (tamamlanınca ödenir).","Hava + bloker: SADECE kuru board range-bet parçası; ıslakta check-fold.","Marjinal showdown (2. per): ıslakta check-back, pot kontrol."],ruleBox:"Boyut = river planının fiyatı. 2/3 attıysan havayla o yola girme (B11.1).",narration:"Board'u okuduktan sonra ikinci soru: hangi elle c-bet atarım ve hangi boyutta? Dört sınıfa ayır. Birinci sınıf, value: top pair ve üstü, overpair, set, iki per. Bunlarla bet atarsın; kuru board'da üçte bir, ince value dahil; ıslak board'da üçte iki, çünkü bunlar potu şişirmek istediğin ellerdir. İkinci sınıf, gerçek ya da nut draw: nut flush draw, iki uçlu açık draw artı overcard. Bunlarla semi-bluff bet atarsın; ıslak board'da büyük, çünkü tamamlanınca çok ödenir. Üçüncü sınıf, hava artı bloker: bunu sadece kuru board'da, range-bet'in bir parçası olarak küçük atarsın; ıslak board'da bırak, check-fold, çünkü board rakibe yaradı ve havanın fold equity'si yok. Dördüncü sınıf, marjinal showdown value: ikinci per, zayıf top pair. Bunları ıslak board'da check-back edersin, pot kontrolü için; kuru board'da öderse küçük bir value bet, ödemezse check. Ve buradaki köprü kuralı on birinci bölüme bağlanır: attığın boyut river planının fiyatıdır. Flop'ta üçte iki attıysan turn ve river'ın stack-pot oranını daralttın; havayla o yola girme."},{title:"2. fıçı (turn): river planım var mı?",table:{section:"Bölüm 11",sub:"11.1",caption:"Elim × turn kartı — yön sabit, boyut kalibre."},bullets:["Overpair: boş turn kontrollü bet; overcard SPR say; board eşleşti/draw geldi → check.","Top pair iyi kicker: ince bet / check-call; kötü kartta check-fold.","Hava + bloker: boş turn barrel adayı; korkutucu kart gelince BIRAK.","Potu her büyüttüğünde river'da check-fold lüksün azalır."],ruleBox:"İkinci fıçıyı atmadan sor: river planımı söyleyebiliyor muyum?",narration:"C-bet atıldı, call geldi. Şimdi ikinci fıçı, turn. Kök hata çoğu zaman tam burada doğar: potu ikinci fıçıyla kendin şişirir, river'a bluff-catcher olarak kalırsın. Tabloya bak, elin ve gelen turn kartına göre. Overpair'in varsa: boş ya da düşük turn'de kontrollü bet; sana overcard geldiyse stack-pot oranını say ve dikkatli ol; board eşleştiyse ya da draw tamamlandıysa check eğilimi. Top pair iyi kicker: ince bet ya da check-call, kötü kartta check-fold. Hava artı bloker: boş turn'ler barrel adayı, ama korkutucu bir kart gelince bırak. Boyutlar senin icra verinle kalibre; ama yön sabittir, potu her büyüttüğünde river'da check-fold etme lüksünü satın alma gücün azalır. İkinci fıçıyı atmadan önce iki soruyu cevapla: river planımı şimdiden söyleyebiliyor muyum, ve kötü bir river geldiğinde check-fold edebileceğim bir pot boyutu bırakıyor muyum? Turn'de attığın boyut, river'da vereceğin kararın fiyatıdır."},{title:"3. fıçı (river): value mı, bırak mı",table:{section:"Bölüm 11",sub:"11.2",caption:"Boyut büyüdükçe rakip value'ya kayar."},bullets:["Bluff-catch: ≤%50 call yönü; overbet polarize → tek per fold.","Thin value (11.3): senden zayıf el ödüyorsa ince de olsa BET.","Kötü river (11.4): alt kartın 4.'sü / 3. flush / board eşleşme → jam ASLA.","Multiway (13.1): blöf yok, tek per bir sınıf aşağı — sadece value/nut."],ruleBox:"River'da jam ancak senden zayıf bir el ödeyecekse value'dur.",narration:"Ve üçüncü fıçı, river. Burada iki farklı koltuk var. Birincisi, rakip bet attı ve elin bir bluff-catcher: karar rakibin boyutuna bağlı. Yüzde elli ve altı boyutlar daha çok blöf ve ince value içerir, call yönü; overbet ise polarizedir, ya nut ya hava, ve orada tek per fold yönüne döner, panik hero-call değil. İkincisi, sıra sende ve value için mi bet atmalısın? Kural: senden zayıf bir el ödeyecekse, ince de olsa bet et; rec-ağırlıklı sahada kaçan thin value doğrudan chip kaybıdır. Ama bir alarm listesi var, kötü river kataloğu: alt kartların dördüncüsü ya da kenti tamamlayan kart, üçüncü flush kartı, board'un eşleşmesi, ya da üstüne gelen overcard. Bu kartlarda value hedefin yoktur; küçük pota check-call, büyük pota check-fold, ve jam asla, çünkü jam ancak senden zayıf bir el ödeyecekse value'dur. Son olarak multiway: üç ya da daha çok kişilik potta blöf yok, tek per heads-up'takinden bir sınıf aşağı, sadece güçlü value ve gerçek nut için bet. Bu üç sokak bir zincir: flop c-bet kararı şişmiş potun tohumunu ya keser ya eker, turn onu büyütür ya da frenler, river icrayı verir."}]},{id:"M23",title:"İnisiyatif hatları: donk, probe, stab, float, blocker",chapter:"Bölüm 19 ★",minutes:11,slides:[{title:"İnisiyatif: lead belirsizken kim bet atar",bullets:["Altı akraba hat: donk, gecikmiş c-bet, probe, stab, turn float, river blocker.","Hepsi lead belirsizken çıkar: potu al mı, elimi bedavaya realize mi et?","İnisiyatif 3 şart birdense: (a) biri zayıf gösterdi + (b) board senin + (c) check daha kârlı değil.","Ortak tuzak: marjinal yapılı eli inisiyatif diye şişirmek = kök hata."],ruleBox:"Guard: kim zayıf gösterdi + board kimin + elimi realize mi etmeliyim — üçü yoksa check.",narration:"Bu modül dağınık ama akraba altı hattı tek çatı altında topluyor: donk, gecikmiş c-bet, probe, stab, turn float ve river blocker-bet. Ortak noktaları şu: hepsi lead'in, yani inisiyatifin belirsiz olduğu anlarda çıkar — kimse potu net sahiplenmemiştir ve soru şudur, potu ben mi alayım yoksa elimi bedavaya showdown'a mı taşıyayım? Rec-ağırlıklı sahanda varsayılan cevap net: uydurma agresyon yok. İnisiyatif ancak üç şart birden varsa alınır. Bir: biri zayıflık gösterdi. İki: board senin aralığına yarıyor. Üç: elini check'le realize etmek daha kârlı değil. Üçü birden yoksa check edersin. Ve her hattın 'ne zaman yapılmaz' sütunu, 'ne zaman yapılır'dan daha önemli, çünkü ortak tuzak hep aynı: check'le showdown'a götürmen gereken marjinal bir eli inisiyatif diye bet'e sokmak. Bu, float'ı da probe'u da stab'ı da kök hataya çevirir. Guard cümlesi bu modülün omurgası: kim zayıflık gösterdi, board kimin, elimi realize mi etmeliyim — üçü yoksa check."},{title:"Donk bet — OOP, PFR'a önden çıkış",table:{section:"Bölüm 19",sub:"19.1",caption:"Sadece SENİN board'unda; yüksek board'da yasak."},visuals:[{kind:"board",cards:"7h 6s 4d",label:"Senin board'un (7-6-4) — donk adayı"},{kind:"board",cards:"As Kd 8c",label:"PFR'ın board'u (A-K-8) — donk atma"}],bullets:["Varsayılan: donk ATMA — açana check standart; donk telegraf + OOP bloat.","Pencere: düşük-bağlantılı BB board'u (7-6-4, 5-5-2) → senin aralığın çarpar.","Küçük donk PFR'a bedava check-back'i vermez, equity'sini fiyatlar.","Değil: yüksek board / station / multiway / tek per'le büyük donk (kök hata)."],ruleBox:"Donk sadece senin board'unda + küçük; yüksek board açanın arazisidir.",narration:"Birinci hat: donk bet. Donk, OOP'ken preflop açana check yerine önden bet atmaktır; 'PFR bet atar' konvansiyonunu kırar. Varsayılan nettir: donk atma, açana check standarttır — donk çoğu zaman elini telegraf eder ve seni pozisyonsuz şişmiş pota sokar, yani kök hata arazisine. Peki pencere ne zaman açılır? Tek şey: board senin aralığına çarpıyorsa. Somut olarak, büyük körden savunduğun düşük ve bağlantılı board'lar, mesela yedi altı dört ya da beş beş iki. Bu board'lar senin savunma aralığına, açanın yüksek-kart aralığından çok daha fazla çarpar; sende daha çok iki-per, set, kent vardır. Küçük bir donk, açana bedava check-back hakkını vermez ve equity'sini fiyatlar. Görselde iki board var: yedi altı dört senin board'un, donk adayı; as kral sekiz ise açanın board'u, orada donk açanın arazisine bet'tir, atma. Ne zaman değil: yüksek board, donk'a asla fold etmeyen station, multiway, ve tek per'le büyük donk — sonuncusu doğrudan kök hata."},{title:"PFR zayıflık gösterdi: gecikmiş c-bet & probe",table:{section:"Bölüm 19",sub:"19.3",caption:"PFR flop'u bıraktı = capped; turn'de al."},bullets:["Gecikmiş c-bet (sen PFR): flop check-back → turn'de SEBEP varsa bet.","Sebep: geliştin / villain 2. kez check / turn kartı sana yaradı.","Probe (sen OOP): flop check-check → açan capped → turn/river'da bet.","'Flop cc → çalınır mı' = EVET, capped aralığa. Değil: tuzak / kötü turn / SD value."],ruleBox:"PFR flop'ta güçlüyle bet ederdi; check-back = capped → capped'a inisiyatif al.",narration:"İkinci ve üçüncü hat aynı temaya bağlı: PFR zayıflık gösterdiğinde onun capped aralığını cezalandırmak. İki versiyonu var. Bir, gecikmiş c-bet: sen açansın, flop'u check-back ettin — pot kontrol ya da vazgeçtin — ve turn'de bet ediyorsun. Bu, otomatik flop c-bet refleksinin disiplinli zıddıdır: geniş c-bet'i atlarsın, turn'de bir sebep çıkınca bet edersin. Sebep üç tanedir: turn'de geliştin, ya da villain ikinci kez check edip zayıflık gösterdi, ya da turn kartı senin aralığına yaradı. Sebepsizse, flop'taki vazgeçişi turn'de bloat'a çevirme. İki, probe bet: bu senin sorduğun spot — flop check-check gitti. Sen OOP'sun, açan flop'u check-back etti; bu ne demek? Güçlü ellerin çoğu flop'ta bet ederdi, demek ki açanın aralığı capped, tavanlı. O yüzden turn'de bu capped aralığa OOP bet atıp inisiyatifi alırsın. Cevap net: evet, flop check-check sonrası turn ve river çalınır, capped aralığa karşı. Ne zaman değil: açan tuzak için güçlüyle check-back ediyorsa, turn senin aralığını ıskaladıysa, ya da elinde check-call ile realize edilecek marjinal bir yapılı el varsa — onu şişirme."},{title:"Stab — IP, check gelince potu al",table:{section:"Bölüm 19",sub:"19.4",caption:"En düşük riskli inisiyatif; sana check = herkes zayıf."},bullets:["IP'sin, herkes sana check etti (flop/turn) → küçük bet ile al.","Herhangi equity/fold equity yeter; sana check geldiyse herkes zayıf gösterdi.","Değil: multiway (tuzak) / check-raise eğilimli villain.","Değil: board checker'lara çarpıyor / SD value'lu el bedava showdown istiyor."],ruleBox:"Stab küçük; kimsenin sahiplenmediği potu ucuza topla, HU'da serbest.",narration:"Dördüncü hat: stab. En temel ve en düşük riskli inisiyatif aracı. IP'sin ve herkes sana check etti, flop'ta ya da turn'de. Sana check geldiyse zaten herkes zayıflık gösterdi; kimsenin istemediği potu küçük bir bet ile alırsın. Herhangi bir equity ya da fold equity yeter. Ne zaman değil: multiway, çünkü biri tuzakta olabilir; check-raise eğilimli bir villain varsa; board checker'ların aralığına sert çarpıyorsa; ya da elinde showdown value olan bir el varsa ve bedava showdown senin lehineyse. Boyut küçük — stab pahalı olmak zorunda değil, amaç kimsenin sahiplenmediği potu ucuza toplamak."},{title:"Turn float — pozisyonel gecikmiş agresyon",table:{section:"Bölüm 19",sub:"19.5",caption:"IP + planlı; float turn'de biter."},bullets:["Flop c-bet'i IP call → villain turn'ü check ederse potu al (gecikmiş blöf).","IP + backdoor/overcard/bloker (planlı) + turn'ü bırakan villain + kuru-ımsı flop.","İcra: turn check gelirse bet al; villain 2. fıçı atarsa BIRAK.","Değil: OOP / barrel atan villain / ıslak board / multiway."],ruleBox:"Float turn'de biter: ya bet atıp alırsın ya bırakırsın; sürüklenip ödemek kök hatadır.",narration:"Beşinci hat: turn float. Float, flop c-bet'ini pozisyonda call edip villain turn'ü check ettiğinde potu almaktır — amaç showdown değil, gecikmiş blöf. Şartlar dar. Pozisyon: sadece IP, çünkü ancak pozisyonda potu temiz alırsın; OOP float asla. Rakip: flop'u geniş c-bet'leyip turn'ü bırakan tip; ikinci fıçıyı atan station ya da agresif reg'e float atma. Elin: saf hava değil, planlı — backdoor draw, overcard ya da bloker. Board: villain'in range-bet'lediği kuru-ımsı flop; ıslak board'da villain barrel atar, orada float ölür. Ve icranın altın kuralı: float turn'de biter. Turn'de sana check gelirse bet atıp alırsın; villain ikinci fıçıyı atarsa bırakırsın. Sen check için float'ladın, iki fıçı ödemek için değil. Float'ı call-call-call'a sürüklersen, o artık float değil, kök hatadır."},{title:"River blocker-bet — istisna, default 11.2",table:{section:"Bölüm 19",sub:"19.6",caption:"Varsayılan check-call/check-fold; blocker dar sapma."},bullets:["Varsayılan = 11.2 (check-call/check-fold). Blocker DAR bir sapma.","Station'a check-call daha iyi: indirim yapmaz, value'yla öder, raise ederse batarsın.","Pencere: capped+agresif villain + ince bluff-catcher + kuru/statik river + küçük boyut.","Bunların hepsi yoksa blocker YOK → 11.2. Büyük blocker çelişkidir."],ruleBox:"Blocker yalnız capped+agresif rakibe; station'a ASLA — default 11.2.",narration:"Altıncı hat: river blocker-bet, ve buna en sert uyarıyla giriyoruz. Bu spotun varsayılanı bu modül değil, on bir nokta iki'dir: check-call ya da check-fold. Blocker-bet, river'da OOP küçük bir bluff-catcher'la küçük bet atıp villain'in büyük polarize bet'ini engellemek, ucuz bir showdown satın almaktır. Ama station'a karşı neredeyse her zaman check-call daha iyidir; station küçük bet'e indirim yapmaz, seni yine value'yla öder, üstelik raise ederse batarsın. Pencere sadece şu dar durumda açılır: villain capped ve agresif, yani check gelseydi polarize basardı; senin elin ince bir bluff-catcher, blöfü yenen ama value'ya kaybeden; river kuru ve statik, villain'in aralığı belli; ve boyut küçük, yüzde yirmi ile otuz üç arası. Bunların hepsi yoksa blocker yok, on bir nokta iki'ye dön, check-call ya da check-fold. Büyük blocker zaten bir çelişkidir."},{title:"Özet: 6 hat tek kartta",table:{section:"Bölüm 19",sub:"19.8",caption:"Kim zayıf gösterdi → aç → kapat (default)."},bullets:["Donk: senin board'un + küçük. Gecikmiş c-bet: turn'de sebep.","Probe: capped'a turn bet. Stab: herkes check → küçük al.","Turn float: IP + plan. River blocker: capped+agresif, yoksa 11.2.","Hepsini tek guard yönetir: kim zayıf + board kimin + realize mi."],ruleBox:"İnisiyatif bir hak değil kazanılan fırsattır; doğru alınırsa anti-bloat, yanlış alınırsa kök hata.",narration:"Son olarak altı hattı tek kartta topluyoruz. Her satırda önce 'kim zayıflık gösterdi', sonra 'ne zaman aç', sonra 'ne zaman kapat' var. Donk: board avantajı senin — senin board'unda küçük aç, yüksek board'da ya da station'a kapat. Gecikmiş c-bet: sen flop'u bıraktın — turn'de sebep varsa aç. Probe: açan flop'u check-back etti — capped aralığa turn'de bet. Stab: herkes check etti — küçük bet ile al. Turn float: villain turn'ü check etti — IP ve planlıysan al. River blocker: villain check gelseydi basardı — capped ve agresifse, ince bluff-catcher'la, küçük; değilse on bir nokta iki. Hepsini tek guard cümlesi yönetir: kim zayıflık gösterdi, board kimin, elimi realize mi etmeliyim — üçü birden yoksa check. İnisiyatif bir hak değil, kazanılan bir fırsattır; doğru alınırsa potu ucuza bitirir, yanlış alınırsa kök hatanın yeni kapısıdır."}]},{id:"M24",title:"Risk Premium: ICM'in sayısı",chapter:"Bölüm 20 ★",minutes:8,slides:[{title:"ICM'in fiyatı bir sayıdır",bullets:["Risk premium = chipEV eşiğine ICM'in eklediği ekstra gereken equity.","'Cover ediliyorsan daralt' = 'gereken equity'ye risk primini ekle.'","B12 ne yapacağını söyler; B20 neden ve ne kadarını ölçer.","chipEV'de rahat call olan el, ICM baskısında fold'a dönebilir."],ruleBox:"ICM'in fiyatı bir sayıdır: chipEV eşiğine eklenen ekstra gereken equity.",narration:"Bu modül kitabın en soyut disiplinini somut bir sayıya bağlıyor: risk premium, yani risk primi. Şimdiye kadar ICM'i hisle verdik: cover ediliyorsan daralt, bubble'da kuvöz kuvöz bile fold olabilir. Ama 'ne kadar daraltayım' sorusunun sayısal bir cevabı var. ICM'in fiyatı bir sayıdır: chipEV'de gereken equity'nin üstüne ICM'in eklediği ekstra yüzde. Yani 'cover ediliyorsan daralt' cümlesinin matematiksel karşılığı şudur: gereken equity'ye risk primini ekle. On ikinci bölüm sana ne yapacağını söyledi; bu bölüm neden ve ne kadar olduğunu ölçüyor. Çünkü chipEV'de rahat call olan bir el, ICM baskısı altında fold'a dönebilir, ve aradaki fark attığın her fold'un gizli fiyatıdır."},{title:"İki tanım + worked example",table:{section:"Bölüm 20",sub:"20.1",caption:"Bubble factor ve risk premium."},bullets:["Bubble factor = chip kaybının maliyeti ÷ kazancının değeri (chipEV'de 1.0).","chipEV: call için pot odds %37.5 → %37.5 equity yeter.","Bubble'da aynı call (kayıp=bust): ~%47 gerekir (temsili) → prim ~%9–10.","Sonuç: A9s (B12.4'te not-cover call'dı) cover EDENE karşı bubble'da fold."],ruleBox:"chipEV'de yeten equity, ICM'de yetmez; aradaki fark risk primidir (kesin sayı kalibre).",narration:"İki tanımla başlayalım. Birincisi bubble factor: chip kaybının maliyetinin, chip kazancının değerine oranı. chipEV'de, yani cash oyununda, bu oran birdir — kaybettiğin chip kazandığınla aynı değerde. İkincisi risk premium: chipEV eşiğinin üstüne ICM'in eklediği ekstra gereken equity; cash'te sıfırdır. Şimdi somut örnek. chipEV'de jam'e call için pot odds diyelim yüzde otuz yedi buçuk gerektiriyor, yani yüzde otuz yedi buçuk equity yeterli. Aynı call'ı bubble'da düşün, kaybetmek bust demek: gereken equity yaklaşık yüzde kırk yediye çıkar. Bu temsili bir sayı, kesin değeri kalibre edilir. Aradaki fark, yaklaşık yüzde dokuz on, işte risk primidir. Sonucu gör: chipEV'de rahat call olan bir el, mesela as dokuz suited, ki on iki nokta dört bölümünde cover edilmeyene geniş call'dı, seni cover eden birine karşı bubble'da fold'a döner. En yüksek primde kuvöz kuvöz bile marjinalleşir."},{title:"Prim ne zaman büyür",table:{section:"Bölüm 20",sub:"20.3",caption:"Asimetri = risk premium."},bullets:["Payout sıçraması yakın (bubble/FT basamağı) → büyür.","Rakip seni COVER ediyor (kaybedince bust) → EN BÜYÜK.","Rakip cover ETMİYOR (kısa jam, 0'lanmıyorsun) → küçük → geniş call.","Bu, B12.4 cover/not-cover asimetrisinin ta kendisi."],ruleBox:"Cover edene prim yüksek → daral; cover etmeyene prim ~0 → genişle.",narration:"Prim sabit değil; neye göre büyür? Tabloya bak. Bir: payout sıçraması yakınsa, bubble ya da final table basamağı, prim büyür çünkü elenmek çok pahalı. İki, ve en önemlisi: rakip seni cover ediyorsa, yani kaybedince bust oluyorsan, prim en yüksek seviyededir. Üç: rakip seni cover etmiyorsa, mesela kısa bir stack sana jam etti ve kaybetsen de sıfırlanmıyorsun, prim küçüktür ya da ihmal edilir ve geniş call edersin. Dört: az oyuncu ve sığ para primi sertleştirir. Şunu fark et: bu tablo aslında on iki nokta dört bölümündeki cover, not-cover asimetrisinin ta kendisi. Asimetri, risk premium'un kendisidir. Cover edene karşı prim yüksek, daralırsın; cover etmeyene karşı prim sıfıra yakın, genişlersin."},{title:"Masada nasıl kullanılır",bullets:["1) chipEV'de kaç equity gerekiyordu (pot odds).","2) Üstüne risk primini ekle (cover mu? bubble mı? → yüksek).","3) Elim ICM eşiğini geçiyor mu? Geçmiyorsa fold.","JAM primden az etkilenir (fold equity var) → jam kalır, call daralır."],ruleBox:"Jam aralığın KALIR, call aralığın DARALIR (B17); risk premium bu asimetrinin temelidir.",narration:"Masada üç adımda uygula. Bir: chipEV'de kaç equity gerekiyordu, pot odds'u oku. İki: üstüne risk primini ekle, cover ediliyor muyum, bubble mı sorusuna göre prim yüksekse eşiği yukarı çek. Üç: elim bu ICM eşiğini geçiyor mu? Geçmiyorsa fold. Ve kritik bir asimetri: jam atmak, call etmekten primden çok daha az etkilenir, çünkü jam'de fold equity'n var, rakip fold edebilir. Bu yüzden jam aralığın kalır ama call aralığın daralır. On yedinci bölümde gördüğün 'jam kalır, call daralır' kuralının sayısal temeli tam olarak budur. Risk premium, o asimetrinin altındaki matematiktir."},{title:"İki yönlü leak + cheat",table:{section:"Bölüm 20",sub:"20.7",caption:"Durum → prim → aksiyon."},bullets:["Cover edilmeyeni cover edilen sanmak = fazla fold (B12.4 A9s/KTo leak'i).","Cover edeni cover edilmeyen sanmak = primi atla = fazla call → bust.","Doğru soru: cover ediliyor muyum + payout sıçraması ne kadar yakın?","B12 yönü verir, B20 fiyatı ölçer — nitel + nicel."],ruleBox:"Cover ediliyor muyum? Cevap primi, prim eşiği, eşik kararı verir.",narration:"Son olarak iki yönlü tuzak, çünkü prim iki yöne de hata yaptırır. Birinci yön: cover edilmeyeni cover edilen sanmak, olmayan bir primi eklersin, fazla fold edersin. On iki nokta dört bölümündeki as dokuz suited ve kral on offsuit leak'i tam buydu, kısa jam'e karşı gereksiz fold. İkinci yön: cover edeni cover edilmeyen sanmak, primi atlarsın, fazla call edersin ve bust olursun. Doğru soru hep aynı: cover ediliyor muyum, ve payout sıçraması ne kadar yakın? Cheat kartını aklında tut: para uzaksa prim sıfır, normal pot odds. Cover etmeyen kısa jam'e prim sıfır, geniş call. Bubble'da nötr, orta prim, marjinali kes. Cover eden artı bubble ya da final table, yüksek prim, sert daral, kuvöz kuvöz bile marjinal olabilir. Özet: on ikinci bölüm ICM'in yönünü verir, yirminci bölüm fiyatını ölçer; ikisi aynı disiplinin nitel ve nicel yarılarıdır."}]},{id:"M25",title:"ICM altında postflop: bir kademe indir",chapter:"Bölüm 21 ★",minutes:8,slides:[{title:"Tez: cover ediliyorsan bir kademe indir",bullets:["ICM baskısında (cover ediliyorken) her agresif hattı bir kademe İNDİR.","bet→check, raise→call, büyük→küçük, thin-value→check-back, hero-call→fold.","Cover EDİYORSAN (lider) tersi: bir kademe YUKARI (barrel, baskı).","Yön = cover haritasının işareti; risk primi (B20) postflop'a taşınır."],ruleBox:"Cover ediliyorsan bir kademe indir; cover ediyorsan bir kademe yukarı.",narration:"Bu modül iki disiplini birleştiriyor: on sekiz ve on dokuzuncu bölümlerin postflop inisiyatifi ile on iki ve yirminci bölümlerin ICM'i. Kesişim tek cümle: ICM baskısı altındayken, yani seni cover eden birine karşı, her agresif postflop hattını bir kademe indir. Bet yerine check, raise yerine call, büyük boyut yerine küçük, ince değer yerine check-back, hero-call yerine fold. Ama dikkat, bu başlık cover EDİLENin kuralıdır. Eğer sen cover ediyorsan, yani chip lidersin ve kaybetsen de yaşıyorsan, tersini yaparsın: bir kademe yukarı, daha çok barrel, daha çok baskı. Yön her zaman cover haritasının işaretidir. Yirminci bölümde risk primini preflop call ve jam'de gösterdik; bu bölüm onu flop, turn ve river'a taşıyor, çünkü prim her sokakta yeniden birikir."},{title:"Neden call-off en pahalı — kural tablosu",table:{section:"Bölüm 21",sub:"21.2",caption:"chipEV hattı → ICM baskısında (cover ediliyorken)."},bullets:["En çok chip riske atan hat: büyük bet/raise'e call/hero-call.","Bet/barrel'ın fold equity'si var → prim onu az cezalandırır.","Call-off'un fold equity'si yok → tüm chip showdown'a bağlı, tam ICM cezası.","Sonuç: bluff-catch aralığın DARALIR; value bet aynı kalır."],ruleBox:"Call-off en ICM-vergili aksiyon: fold equity yok → şişmiş potta chip'i bağlama.",narration:"Neden postflop'ta call-off en pahalı aksiyon? Çünkü chip'i en çok riske atan hat, büyük bir bet'e ya da raise'e call ya da hero-call yapmaktır — potun şiştiği, kaybın bust'a yaklaştığı yer. Prim en çok burayı vurur. Karşılaştır: bet ya da barrel'ın fold equity'si vardır, rakip fold edebilir, o yüzden prim onu daha az cezalandırır. Ama call-off'un fold equity'si yoktur; tüm chip'ini showdown'a bağlarsın ve ICM cezası tam gelir. Sonuç şu: ICM baskısında blöf-yakalama aralığın daralır, fazla per'i bırakırsın, ama değer için bet'lemen aynı kalır. On bir nokta iki'deki 'tek per eşittir bluff-catcher' kuralı ICM'de daha da fold-eğilimlidir. Tablodaki her satır aynı yönü söylüyor: potu küçült, chip'i showdown'a bağlama, marjinali kes. O kademe, risk priminin kendisidir."},{title:"İki koltuk — cover asimetrisi",table:{section:"Bölüm 21",sub:"21.3",caption:"Cover ediliyorsun → indir; cover ediyorsun → yukarı."},bullets:["Cover EDİLİYORsun (kaybedince bust) → prim yüksek → bir kademe İNDİR.","Cover EDİYORsun (lider, yaşarsın) → prim düşük/negatif → bir kademe YUKARI.","Chip lider baskıyı SATAR; kısa/orta stack baskıyı YER.","Başlık 'indir' cover EDİLENin kuralı; cover EDEN tersini yapar."],ruleBox:"Aynı spot iki oyuncuya zıt talimat verir; işaret = cover haritası.",narration:"Kritik nokta: yön mutlak değildir, cover haritasının işaretine bağlıdır, ve aynı spot iki oyuncuya tam zıt talimat verir. Eğer cover ediliyorsan, yani kaybedince bust oluyorsan, primin yüksektir, bir kademe indirirsin: check, call, küçük, fold. Ama eğer cover ediyorsan, yani chip lidersin ve kaybetsen bile yaşıyorsan, primin düşük hatta negatiftir, bir kademe yukarı çıkarsın: barrel, baskı, büyük boyut. Bu yirmi nokta üç tablosunun postflop yüzüdür. Chip lider baskıyı satar, çünkü rakip için her pot bir bust riskidir; kısa ya da orta stack o baskıyı yer ve daralır. O yüzden başlıktaki 'bir kademe indir' cümlesi cover EDİLENin kuralıdır; cover EDEN tam tersini yapar. Masada ilk soru hep şu: bu potta ben mi cover ediyorum, ben mi cover ediliyorum?"},{title:"MDF ICM'de çöker + korunma",bullets:["MDF bir chipEV kavramı; cash + ICM-baskısız MTT'de geçer, para sıçramasında çöker.","chipEV: ⅔ pot bet → MDF ~%60 savun; ICM'de savunma oranın çok düşebilir.","Para sıçraması yakınken MDF altında fold LEAK değil, doğru.","Protection-first: ince değeri bırak (check); kırılgan value'yu KORU (bet)."],ruleBox:"ICM'de MDF çöker: yakın payout'ta MDF altında fold doğrudur; kırılgan value yine bet.",narration:"Şimdi önemli bir ince ayar: minimum savunma frekansı, yani MDF, ICM'de çöker. MDF bir chipEV kavramıdır; cash oyununda ve ICM baskısı olmayan MTT spotlarında geçerlidir, ama para sıçraması yakınken çöker. Örnek: villain üçte iki pot bet'lerse chipEV'de MDF yaklaşık yüzde altmıştır, aralığının yüzde altmışını savunman gerekir yoksa blöfe açıksın. Ama cover edildiğin bir ICM spotunda, aynı bet'e karşı savunma oranın çok daha düşük olabilir; buradaki over-fold bir exploit değil, doğru oyundur. Yani 'MDF altında fold eşittir leak' kuralı ICM'de tersine döner: para sıçraması yakınken MDF'in altında fold etmek doğrudur, çünkü villain'in blöfle çalması senin ICM primini geri ödemez. İkinci refleks: önce korunma. ICM'de ince değeri bırakırsın, check-back edersin; ama kırılgan value'yu, yani önde olduğun ama board'un tehdit ettiği eli, korumak için yine bet'lersin. İnce ile kırılganı ayır: ince, zaten öndesin ve kartı umursamıyorsun, check; kırılgan, öndesin ama board seni tehdit ediyor, bet — ucuz kart vermemek için, showdown'u bağlamak için değil."},{title:"Cheat kartı + drill",table:{section:"Bölüm 21",sub:"21.7",caption:"Spot → cover ediliyorsun / cover ediyorsun."},bullets:["Thin value: cover ediliyorsan check-back, ediyorsan bet.","Marjinal bluff-catch: ediliyorsan fold, ediyorsan call.","Boyut: ediliyorsan küçük, ediyorsan büyük/polarize.","Kırılgan value İKİ tarafta da bet — korunma primden bağımsız."],ruleBox:"Tek guard: cover ediliyor muyum? Evetse indir + call-off'u en sert kes; hayırsa yukarı.",narration:"Son olarak cheat kartı ve drill. Kartı satır satır oku: ince değer, cover ediliyorsan check-back, cover ediyorsan bet ile ince değeri al. Marjinal bluff-catch, cover ediliyorsan fold, cover ediyorsan call, çünkü baskıyı yiyebilirsin. Barrel kararı, cover ediliyorsan tek fıçı ya da vazgeç, cover ediyorsan iki üç fıçı ile baskı. Boyut, cover ediliyorsan küçük, cover ediyorsan büyük ya da polarize. Ve tek istisna: kırılgan value her iki tarafta da bet, çünkü korunma primden bağımsızdır. Hepsini tek guard yönetir: cover ediliyor muyum? Evetse her agresif hattı bir kademe indir ve call-off'u en sert kes. Hayır, ben cover ediyorsam, bir kademe yukarı. Drill için üç spot: birinci, bubble'da seni cover eden villain'e karşı river'da ince bluff-catcher, chipEV'de call'du, ICM'de ne yaparsın? İkinci, final table'da chip lidersin, turn'de sana check geldi, iyi ama nut olmayan el, kademe hangi yöne? Üçüncü, cover edildiğin spotta villain üçte iki pot bet attı, MDF yüzde altmış diyor ama para sıçraması çok yakın, fold leak mi doğru mu?"}]},{id:"M26",title:"ICM ne zaman ve kime: zaman çizelgesi + laddering",chapter:"Bölüm 22 ★",minutes:8,slides:[{title:"Prim bir eğri — kişi ekseni faz'ın önünde",bullets:["Risk primi sabit değil, eğri: bubble'da tavan, ITM'de dip, FT'de tekrar yükselir.","Kişiye: seni cover eden derine yüksek; cover ETMEYEN alt stack'e ~0.","Kişi ekseni faz ekseninin ÖNÜNE geçer.","Faz primin tavanını belirler; cover haritası kime uygulanacağını."],ruleBox:"Faz tavanı verir, cover haritası kime'yi verir — kişi ekseni önce.",narration:"Yirminci bölüm risk primini bir tanım ve yön olarak verdi: cover edende en yüksek, cover etmeyen kısaya sıfıra yakın. Bu modül o primin ne zaman ve kime değiştiğini ekliyor. Önce şunu kavra: prim bir sabit değil, bir eğridir. Zamanla değişir: bubble'a yaklaşırken tavan yapar, para geçilince gevşer, final table'a yaklaşırken yeniden yükselir, her para sıçramasından sonra bir tık düşer. Ama daha kritik ikinci eksen kişidir: seni cover eden derin bir stack'e karşı prim yüksek, seni cover etmeyen bir alt stack'e karşı sıfıra yakın. Ve altın kural: kişi ekseni faz ekseninin önüne geçer. Yani faz primin tavanını belirler, ama cover haritası o primin kime uygulanacağını belirler. Bubble'da bile, seni cover etmeyen kısa bir stack'e karşı primin sıfırdır."},{title:"Primin dört fazı",table:{section:"Bölüm 22",sub:"22.2",caption:"Faz → prim (cover edene) → mod."},bullets:["Onset: kalan oyuncu ≈ ödenen yer sayısının ~3 katına indiğinde ICM başlar.","Bubble yaklaşımı: prim tavan → sıkı call, cover ETMEYENlere agresif steal.","Bubble patladı/erken ITM: prim dip → gaz, biriktir.","FT yaklaşımı: prim yüksek → ikinci fren; her sıçramadan sonra bir tık gevşe."],ruleBox:"Öncelik kuralı: faz primi yalnız seni COVER edenlere; cover etmeyen kısa jam'e her fazda ~0.",narration:"Primin dört fazını gör. ICM hissedilmeden önce, turnuvanın derininde, para uzakken prim zaten sıfırdır. Kaba onset kuralı: kalan oyuncu sayısı, ödenen yer sayısının yaklaşık üç katına indiğinde ICM hissedilmeye başlar. Bu bir kalibre değeri, yapıya bağlı. Birinci faz, bubble yaklaşımı: prim tavanda. Kısa'ların call aralığı kilitlenir ama jam'i kalır, on yedinci bölüm. Büyük stack'ler en çok baskıyı satar, orta stack'ler en çok yer. Sıkı call, ama cover etmeyenlere agresif steal. İkinci faz, bubble patladı ya da erken ITM: prim döngüde en düşük, chipEV'ye en yakın oynadığın pencere, gaz ver ve chip biriktir. Üçüncü faz, final table yaklaşımı: prim yeniden yükselir, ikinci fren. Ve dördüncü: her elemeden sonra prim bir tık düşer, sonra masa kısaldıkça yeniden gaz. Kritik öncelik kuralı: faz primi yalnızca seni cover edenlere uygulanır. Seni cover etmeyen kısa bir jam'e karşı prim her fazda sıfıra yakındır, bubble'da bile geniş call edersin."},{title:"Laddering + short stack: call daralır, jam kalır",bullets:["Laddering orta-stack disiplini: lider özgür, orta cover ediliyor (ladder equity en yüksek).","Cover ETMEYEN alt stack'e saldır, lidere değil.","Short stack: CALL'ı daralır, JAM'i KALIR (B17) — nit olma.","'Paraya fold'la girme' yalnız uç spotta (başka mikro bust olurken)."],ruleBox:"Short stack jam'i geniş kalır (fold equity); daralan CALL aralığıdır — jam'i kesme.",narration:"Laddering, yani basamak atlama, her eleme bir para sıçramasıyken sırf hayatta kalarak üst basamağa tırmanmaktır. Bir orta-stack disiplinidir: lider için prim düşük, özgürdür; orta stack cover edilir ve ladder equity'si en yüksektir. Stack taramasında iki refleks. Bir: cover etmeyen bir alt stack'e saldır, lidere değil; senden kısa olan seni cover etmiyor, ona baskı ucuz. İki, ve bu kritik: short stack'in call aralığı daralır ama jam aralığı kalır, on yedinci bölüm. Kısa olmak her şeyi atmak değil ama nit olmak da değil. Cover baskısında sert daralan şey call aralığındır; unopened jam aralığın fold equity sayesinde geniş kalır, cover edenlere karşı yalnız bir tık sıkılır. Paraya fold'la girme, yani jam'i kesme, yalnızca uç bir spotta doğrudur: başka bir mikro tam da bust olmak üzereyken. Onun dışında jam'lemesi gereken eli fold eden kısa stack blind-out olur, ladder'ını yakar."},{title:"İki yönlü leak",table:{section:"Bölüm 22",sub:"22.5",caption:"Over/under-ladder + short-panik/short-nit."},bullets:["Over-ladder: sağlıklı stack'i nitlemek → biriktirmeyi kaçır, blind'e eri.","Under-ladder: seni cover eden mega ile flip → cover edilirken bust.","Short-panik: jam'i kalibresiz şişir → fold equity ziyan; düzelt: jam'i KORU, call'ı daralt.","Short-nit: jam'lemesi gereken eli fold → blind-out; düzelt: jam'i geniş tut."],ruleBox:"Homojen stack'te asimetri kaybolur ama prim kaybolmaz — herkes herkesi cover eder, masa sıkı.",narration:"Dört leak tablosu. Over-ladder: sağlıklı bir stack'i sırf ladder için nitlersin, chip biriktirme fırsatını kaçırır blind'lere erirsin; düzeltmesi primin olmadığı yerde gaz vermek. Under-ladder: seni cover eden bir mega ile gereksiz flip'e girersin, cover edilirken bust olursun; düzeltmesi cover haritasını okuyup primi eklemek. Short-panik: jam aralığını kalibresiz şişirirsin, fold equity'yi ziyan eder bust olursun; düzeltmesi jam'i korumak, call'ı daraltmak. Short-nit: jam'lemesi gereken eli fold edersin, blind-out olur ladder'ı yakarsın; düzeltmesi jam aralığını geniş tutmak. Ve bir uyarı: masadaki bir outlier, mega ya da mikro, ICM'i keskinleştirir ve asimetri yaratır. Ama homojen stack'lerde asimetri kaybolur, prim kaybolmaz: herkes herkesi cover ettiği için çatışma primi karşılıklı yüksektir. Klasik eşit-stack satellite spotu, as as bile fold, tam olarak budur; homojen bubble masası herkes için sıkı oynanır."},{title:"Cheat + Day 2 uygulaması",table:{section:"Bölüm 22",sub:"22.8",caption:"Sinyal → oku → aksiyon."},bullets:["Bubble + seni cover eden → prim tavan → sıkı call, saygı.","Bubble + cover ETMEYEN kısa jam → prim ~0 → geniş call.","~12-15 kala restart (WSOP Online Main Day 2) = FT-yaklaşımı, prim yüksek.","Steal hedefin: seni cover ETMEYEN oyuncular; her sıçramadan sonra bir tık gevşe."],ruleBox:"Sinyali cover haritasıyla oku: aynı bubble, cover edene sıkı, cover etmeyene geniş.",narration:"Cheat kartını ve senin somut durumunu bağlayalım. Kartı cover haritasıyla oku: bubble yakın ve rakip seni cover ediyorsa prim tavandadır, sıkı call ve saygı. Ama bubble yakın ve seni cover ETMEYEN kısa bir stack jam ettiyse prim sıfıra yakındır, geniş call, yirminci bölüm. Yeni ITM'de prim dip, gaz ve biriktir. Final table yaklaşımında prim yüksek, daral ve ladder'ı koru. Sen liderken bir alt stack karşındaysa primin düşük, baskı sat. Şimdi senin durumun: yaklaşık on iki on beş kala restart ediyorsan, örneğin WSOP Online Main Day 2 gibi, online yapıda alan birkaç masaya iner, kalan oyuncu ödenen yerin çok altındadır, tam final table yaklaşımı fazındasın, prim yüksek. Seni cover etmeyen kısa ve orta stack'lere karşı ladder değerin büyük ve prim sıfıra yakın, geniş call ve steal; seni cover eden lidere karşı prim tavanda, saygı ve daral. Her para sıçramasından sonra bir tık gevşe. Steal hedefin her zaman: seni cover etmeyen oyuncular. Drill: bubble yeni patladı orta stack'sin, döngüde chipEV'ye en yakın faz hangisi; bubble'da senden kısa cover etmeyen jam etti artı seni cover eden lider de masada, kısa jam'e call eşiğin ne lidere karşı ne; kısa stack bubble, jam mı call mı daralır."}]},{id:"M27",title:"Saha okuma: rakip tipleri ve exploit",chapter:"Bölüm 23 ★",minutes:8,slides:[{title:"Default vs exploit — üç soru",bullets:["GTO seni yenilmez yapar; exploit seni kârlı yapar.","Üç soru: tip ne? ICM'i hissediyor mu? hangi yöne hata (gevşek/sıkı/pasif)?","Sapma bu üç okumadan çıkar.","Okuma yoksa default'a (dengeli) dön."],ruleBox:"Exploit = default'tan bilinçli sapma; okuma yoksa dengeye dön.",narration:"Bu modül kitaba dağılmış exploit notlarını tek yere topluyor. Şunu kavra: GTO, yani dengeli oyun, seni yenilmez yapar; ama seni kârlı yapan şey exploittir, rakibin hatasından para almaktır. Sahada üç soru sorarsın. Bir: bu rakip hangi tip? İki: ICM'i hissediyor mu? Üç: hangi yöne hata yapıyor, çok mu gevşek, çok mu sıkı, çok mu pasif? Sapma bu üç okumadan çıkar. Ve en önemli guard: okuma yoksa default'a, yani dengeli oyuna dönersin. Exploit bir bilinçli sapmadır, dengeden ayrılmaktır; okuman yoksa dengede kal, çünkü yanlış okumada exploit geri teper."},{title:"Beş rakip tipi",table:{section:"Bölüm 23",sub:"23.2",caption:"Tip → hatası → exploit yön."},bullets:["Nit: fazla fold → çal + agresyonuna saygı (nadiren blöf).","Station: fazla call → blöf YOK + value'yu büyüt/overbet.","LAG: fazla agresyon → bluff-catch aç + value şişir.","Reg: dengeli oyna, baskı sat; Whale: value-ağır, göster ödesin."],ruleBox:"Her tip bir yöne hata yapar; exploit o hatanın tersine yaslanmaktır.",narration:"Beş rakip tipi ve her birine tek-satır exploit. Nit, aşırı sıkı oyuncu: açarsa ya da raise ederse nuts'a yakındır. Exploit: bet ve raise'ine saygı göster, nadiren blöftür, bluff-catch'i bırak; ama pot'larını sık çal çünkü fold eder. Station, çağıran: her şeyle call eder, fold etmez. Exploit: asla blöf yapma, blöf station'a para vermektir; güçlü value'yu büyük boyut ya da overbet ile boz, çünkü boyuta duyarsızdır, her şeyle öder; yalnız en ince value elinde boyutu küçült. LAG, gevşek-agresif: çok açar çok barrel'lar, aralığı zayıftır. Exploit: daha çok call ve bluff-catch, value'yu şişir, blöfüne fold etme. TAG ya da reg: dengeli ve düşünür, exploit azdır; dengeli oyna, ICM'i o hisseder, ona baskı sat. Whale ya da rec, eğlence oyuncusu: öngörülemez ama büyük ellerle büyük öder. Exploit: value-ağırlıklı oyna, ince blöfü az tut, elini göster ki ödesin."},{title:"ICM hissediyor mu — ama kendi primin bakidir",bullets:["ICM baskısı SATMAK yalnız rakip ICM'i hissediyorsa işe yarar.","ICM-körü rec/whale: baskı satma (fold etmez) → value al.","AMA kendi risk primin (B17/B20/B21) rakip ICM-körü olsa da bakidir.","Sapma = value BET'i genişlet; cover'lıyken call-off gevşetmek DEĞİL."],ruleBox:"Whale'e baskı satma, value al — ama cover ediliyorken call-off eşiğin yine yüksek.",narration:"Kritik bir ayrım: ICM baskısı satmak yalnız rakip ICM'i hissediyorsa işe yarar. Bir reg bubble'da doğru daralır, ona baskı satabilirsin, steal ve üç-bet blöfü çalışır. Ama bir rec ya da whale ICM'i bilmez, bubble'da bile fold etmez. Ona karşı baskı satmak boşadır; onun yerine value alırsın, geniş value. Ama şimdi çok dikkat: kendi risk primin, on yedi, yirmi ve yirmi birinci bölümler, rakip ICM-körü olsa bile bakidir. Yani sapma yönü sadece şudur: baskı satma, onun yerine value bet'ini genişlet. Sapma, cover ediliyorken call-off'unu ya da stack-off'unu gevşetmek değildir. Whale bile olsa, sen cover ediliyorken bubble'da hafif stack-off yapmazsın. Onun ICM'i bilmemesi, senin kendi bust riskini ortadan kaldırmaz. Cheat: ICM-körü rec'e baskı satma value al, ama cover'lıyken call-off eşiğin yine yüksek kalır."},{title:"Station playbook — boyut ve pasif river",bullets:["Blöf YOK, sıfır. İnce value ez (check'leyeceğin ellerle bet al).","Boyut: güçlü value BÜYÜK/overbet (boyuta duyarsız); yalnız en ince value'da küçült.","River RAISE ≈ nuts → ince value fold.","River LEAD boyuta bağlı: küçük lead'e iyi top pair genelde call; büyük/tuhaf lead'e daral."],ruleBox:"Station'a value'yu BÜYÜLT; raise ≈ nuts (fold) ama küçük lead'e iyi top pair call.",narration:"Station en sık ve en kârlı hedeftir, playbook'u net. Bir: blöf yok, sıfır blöf, çünkü blöf station'a para vermektir. İki: ince value ez, normalde check'leyeceğin ellerle bile bet al. Üç, ve burası önemli: boyut. Güçlü value'yu büyük boyut ya da overbet ile boz, çünkü station boyuta duyarsızdır, büyük bet call'ını sıkmaz, her şeyle öder; küçük boyut sadece boyuta duyarlı rakiplerde mantıklı, station değil. Yalnız en ince value elinde boyutu küçültmeyi düşün. Dört: pasif river ayrımı, ve bu iki ayrı durum. Station'ın river raise'i neredeyse her zaman nuts'tır, ince value'nu fold et. Ama river lead, yani donk bet, boyuta bağlıdır: station'lar river'ı zayıf ve merged ellerle sık donk'lar, o yüzden küçük bir lead'e iyi bir top pair çoğu zaman call'dır; büyük ya da tuhaf bir lead'e ise daral."},{title:"Cheat + drill",table:{section:"Bölüm 23",sub:"23.8",caption:"Okuma → default'tan sapma."},bullets:["Station: blöfü kes, value'yu büyüt. Nit: çal, hero-call bırak.","LAG: bluff-catch aç, value şişir. Reg: dengeye dön, baskı sat.","ICM-körü rec: baskı satma, value al (call-off eşiği yüksek kalır).","Guard: tip + ICM-hissi + hata yönü — üçü netse sap, değilse dengede kal."],ruleBox:"Guard: tip + ICM-hissi + hata yönü net → sap; değilse default (denge).",narration:"Cheat kartıyla kapatalım. Station: blöfü kes, value'yu büyüt ya da overbet. Nit: çal, hero-call'u bırak. LAG: bluff-catch'i aç, value'yu şişir. ICM-körü rec: baskı satma, value al, ama cover'lıyken call-off eşiğin yüksek kalır. Reg: dengeye dön, ona baskı sat. Hepsini tek guard yönetir: tip, ICM-hissi ve hata yönü. Üçü de netse sap; net değilse default'a, dengeye dön. Drill için üç spot: bir, station her flop ve turn call etti, river'da küçük bir lead aldı, elinde iyi top pair, call mı fold mu, ya raise etseydi ne yapardın? İki, bubble'da rakip belli bir rec ya da whale, ICM umursamıyor, steal blöfü mü value mı, ve cover ediliyorsan call-off'un değişir mi? Üç, nit UTG açtı, sende orta el, exploit yön ne, call mı fold mu, ve neden onun pot'larını çalarsın?"}]},{id:"M28",title:"Edge premium: ne zaman gamble ETME",chapter:"Bölüm 24 ★",minutes:7,slides:[{title:"İki prim: risk + edge",bullets:["Risk premium: kaybedersem ICM'de ne kaybederim (B20).","Edge premium: riske atmasam edge'imle sonra daha fazla kazanır mıyım?","Edge büyükse (soft/derin/yavaş) marjinal flip'i PAS geç.","Edge yoksa (tough/sığ/hızlı) ICM-ayarlı +EV al — beklemek işe yaramaz. -EV asla."],ruleBox:"Edge var → marjinali pas; edge yok → ICM-ayarlı +EV al; -EV asla.",narration:"Yirminci ve yirmi ikinci bölüm risk primini verdi: ICM'in primi. Bu modül ikinci bir prim ekliyor: edge premium, yani beceri primi. Marjinal bir gamble'da, bir flip ya da ince artı-EV spotunda, iki prim aynı anda çalışır. Birincisi risk premium: kaybedersem ICM'de ne kaybederim? İkincisi edge premium: bu chip'leri şimdi riske atmasam, beceri edge'imle sonra daha fazlasını kazanır mıyım? Kural şu: edge'in büyükse, yani saha soft, stack derin, yapı yavaşsa, marjinal flip'i pas geç, çünkü sonra daha iyi spot gelecek. Edge'in yoksa, yani tough sahada underdog'san, sığsan, yapı hızlıysa, ICM-ayarlı artı-EV gamble'ı al, çünkü beklemek işe yaramaz. Ama tek mutlak kural: eksi-EV asla. Edge primi yalnızca artı-EV ve marjinal spotları filtreler, eksi-EV bir gamble'ı asla haklı çıkarmaz."},{title:"4-soru filtresi",table:{section:"Bölüm 24",sub:"24.3",caption:"Soru → gamble PAS / AL."},bullets:["Derinlik: derin=outplay alanı=PAS; sığ=AL.","Yapı: yavaş=edge zamana yayılır=PAS; hızlı/turbo=erir=AL.","Edge: soft saha=büyük edge=PAS; tough(underdog)=+EV AL.","ICM: cover ediliyorsun=PAS (istisna: kimseyi cover etmeyen en kısa stack ~0)."],ruleBox:"Dört soru: derinlik + yapı hızı + senin edge'in + cover haritası.",narration:"Marjinal bir gamble'dan önce dört soru sor. Bir, stack derinliği: derin misin? Derinsen outplay edecek alanın var, edge'in realize olur, pas geç; sığsan alan yok, al. İki, yapı hızı: yapı yavaş mı? Yavaşsa edge'in zamana yayılır, pas; hızlı ya da turbo ise edge erir, al. Üç, senin edge'in: saha soft mu? Soft sahada edge'in büyük, marjinali pas geç; tough sahada underdog'san edge'in yok, artı-EV'yi al. Dört, cover haritası, yani ICM: cover mı ediliyorsun? Ediliyorsan risk primi de pas der. Ama bir istisna: kimseyi cover etmeyen en kısa stack'te prim sıfıra yakındır, o satırda al. Cover ediyorsan agresif ol. Dört soru: derinlik, yapı, edge ve cover."},{title:"İki primin etkileşimi + survival",bullets:["Çoğu zaman aynı yön: soft + cover ediliyorken marjinal flip iki kez PAS.","Gerçek çatışma: orta-kısa (büyükler seni cover, sen de altını cover), edge yok, hızlı.","Çözüm: en iyi fold-equity spotu (JAM, call değil — B17); pasif flip'ten kaçın.","En kısa (kimseyi cover etmeyen) stack: prim ~0, çatışma yok — yine jam seç."],ruleBox:"Survival'da bile: fold-equity'li jam seç, pasif call-flip değil (B17); -EV asla.",narration:"İki prim çoğu zaman aynı yöne iter: soft sahada ve cover ediliyorken marjinal flip iki kez pastır. Ama çatışabilirler ve gerçek çatışma dar bir spotta doğar: orta-kısa stack'sin, büyük stack'ler seni cover ediyor, yani risk primi pas der; ama sen de altındaki kısaları cover ediyorsun, edge'in yok ve yapı hızlı, yani edge primi bekleme chip lazım der. Çözüm: en iyi fold-equity'li spotu seç, yani call değil jam, on yedinci bölüm; pasif bir flip'e sürüklenme. Bir de şu ince nokta: kimseyi cover etmeyen en kısa stack'te risk primi zaten sıfıra yakındır, orada çatışma yok, iki prim de al der, ama tek ders yine aynı: fold-equity'li jam'i seç. Ve mutlak sınır: survival gerekçesiyle bile eksi-EV bir gamble'a girme."},{title:"Senin sidebar'ın: Main vs SHR",bullets:["€5.3K Main: edge'in VAR (saha geniş/soft) → marjinal flip'leri PAS geç, sabırlı.","€100K SHR: edge'in YOK (dünyanın en iyileri) → +EV marjinali almaktan çekinme.","Aynı el, iki turnuvada zıt karar — fark senin edge'in.","SHR'de bile ICM katmanı ayrı: +$EV (ICM düşülünce) şart."],ruleBox:"€5K Main: sabırlı, flip'i pas. €100K SHR: +$EV marjinali al — edge yok.",narration:"Şimdi bunu senin Barcelona programına bağlayalım. Beş bin üç yüz euroluk Main event'te edge'in var, çünkü saha daha geniş ve daha soft; orada marjinal flip'leri pas geç, sabırlı oyna, edge'in sonra daha güvenli EV üretecek. Ama yüz bin euroluk süper high roller'da edge'in yok ya da çok az, çünkü karşında dünyanın en iyileri; orada beklemenin primi düşük, ICM düşüldükten sonra hâlâ artı-dolar-EV olan marjinal spotları almaktan çekinme. Aynı el, iki turnuvada tam zıt karar verir, ve aradaki tek fark senin edge'in. Tabii süper high roller'da bile ICM katmanı ayrı çalışır: bir spot ancak risk primi düşüldükten sonra hâlâ artı-EV ise alınır."},{title:"Cheat + drill",table:{section:"Bölüm 24",sub:"24.7",caption:"Durum → karar."},bullets:["Soft+derin+cover ediliyorsun → marjinal flip PAS (iki prim).","Tough+sığ+hızlı → +EV AL (cover'a bak, $EV).","Edge yok+survival → en iyi fold-equity jam'ı al.","Guard: edge'im var mı + cover ediliyor muyum? İkisi evetse pas."],ruleBox:"Guard: edge var mı + cover ediliyor muyum? İkisi evet → pas; edge yok+mecbur → jam.",narration:"Cheat kartıyla kapatalım. Soft saha, derin ve cover ediliyorsan marjinal flip'i pas geç, iki prim de pas der. Tough saha, sığ ve hızlıysa artı-EV'yi al, ama cover'a bak, dolar-EV pozitif olmalı. Edge'in yok ve survival gerekiyorsa en iyi fold-equity'li jam'i al. Edge'in var ama cover ediyorsan seçici agresif ol. Hepsini tek guard yönetir: edge'im var mı ve cover ediliyor muyum? İkisi de evetse marjinali pas geç; edge yok ve mecbursan en iyi fold-equity spotunu al; ama eksi-EV asla. Drill: beş bin euroluk Main, derin, erken, marjinal flip, al mı pas mı ve hangi iki soru belirler; yüz bin süper high roller, sığ-orta, aynı flip, karar değişir mi neden; orta-kısa stack seni büyükler cover ediyor ama sen de altını cover ediyorsun, edge yok hızlı yapı, pasif call-flip mi fold-equity jam mı?"}]},{id:"M29",title:"Kafamdaki hikaye: kanıt mı anlatı mı",chapter:"Bölüm 25 ★",minutes:7,slides:[{title:"Tez: kanıt mı hikaye mi",bullets:["Hero-call/büyük fold öncesi sor: okuma KANITA mı HİKAYEye mi dayanıyor?","Kanıt = aksiyon dizisi, boyut, timing, pozisyon, tip (B23).","Hikaye = duygu, momentum, ego. Hikayeyse default'a dön (B11.2).","B23 okumasını (kanıt) B16 otopsisine bağlayan köprü."],ruleBox:"Hero-call'dan önce: kanıt mı hikaye mi? Hikayeyse default'a dön (B11.2).",narration:"Bu bölüm kitabın en soyut ama en pahalı katmanına, mental oyuna, tek somut araç ekliyor. Teknik doğru olsa bile mental leak parayı geri verir. Araç şu: bir hero-call ya da büyük bir fold'dan önce bir saniye dur ve sor, bu okuma kanıta mı yoksa kafamdaki hikayeye mi dayanıyor? Kanıt somuttur: villain'in aksiyon dizisi, bet-bet-bet mi check-call mi, boyutları, timing'i, pozisyonu, tipi, yani yirmi üçüncü bölümün okuma araçları. Hikaye ise duygudur: bana blöf yapıyor gibi hissediyorum, az önce beni soydu şimdi yakalarım, bu el hep kaybeder. Kanıta dayanıyorsa güven; hikayeye dayanıyorsa default'a dön, on bir nokta iki bluff-catch disiplini. Bu bölüm yirmi üçüncü bölümün rakip okumasını, yani kanıtı, on altıncı bölümün otopsisine bağlayan köprüdür."},{title:"Test: kanıt cover'ı yenmez",bullets:["Kanıta dayanıyorsa güven — AMA kanıt cover'ı yenmez.","Cover ediliyorken hero-call yine fold (B21.2), kanıt olsa bile.","Hikaye seni HEM gereksiz hero-call'a HEM gereksiz fold'a sürükler.","İkisi de aynı kök hatanın yüzü: duygu > aralık."],ruleBox:"Kanıt cover'ı yenmez: cover ediliyorken hero-call yine fold (B21.2).",narration:"Testin kritik bir sınırı var: kanıta dayanıyorsan güven, ama kanıt cover'ı yenmez. Yani okuman ne kadar sağlam olursa olsun, cover ediliyorken bir hero-call yine fold'dur, yirmi bir nokta iki. ICM primi kanıttan bağımsız çalışır; şişmiş potta cover edildiğin bir call-off en pahalı aksiyondur ve güçlü bir okuma bile onu haklı çıkarmaz. İkinci nokta: hikaye seni tek yöne değil, iki yöne birden sürükler. Hem gereksiz bir hero-call'a, blöfü yakalayacağım hikayesiyle, hem de gereksiz bir fold'a, bu el hep kaybeder hikayesiyle. İkisi de aynı kök hatanın iki yüzüdür: duygunun aralığın önüne geçmesi. O yüzden guard tek: kanıt mı hikaye mi."},{title:"Hikaye ↔ tilt: önce yarayı etiketle",bullets:["Hikaye çoğu zaman tilt'in ürünü (bad-beat/ego tetikleyicisi, B16.2).","Sıralama B16'nın: önce belirtiyi FARK et → fiziksel hamle, sonra karar.","Fiziksel hamle: derin nefes / 1 orbit VPIP kilidi / su iç (B16.2).","Tilt'liyken 'kanıt mı hikaye mi' testini bile güvenilir yapamazsın."],ruleBox:"Tilt belirtisinde önce fiziksel hamle (B16.2), sonra karar — yarayı etiketle.",narration:"Hikaye çoğu zaman tilt'in ürünüdür. Az önce beni soydu şimdi yakalarım cümlesi bir bad-beat ya da ego tetikleyicisinden gelir, on altı nokta iki tilt kartı. O yüzden sıralama on altıncı bölümün sıralamasıdır: önce belirtiyi fark et, hızlanıyor musun, telefona mı sarıldın, kötü ellerle mi kovalıyorsun, sonra fiziksel hamleyi uygula, derin nefes, bir orbit VPIP kilidi, su iç ya da ayağa kalk, ve ancak ondan sonra karar ver. Çünkü tilt'liyken kanıt mı hikaye mi testini bile güvenilir yapamazsın; önce yarayı etiketlersin, sonra kanıta bakarsın. Yaranın kavramı sıfırıncı bölüm cümle on beş, uygulama kartı on altı nokta iki."},{title:"Puanlama = B16.3 otopsisi, hikaye merceğiyle",bullets:["El bitince puanlama B16.3'te: GÜN SONUNDA (masada sadece not).","İki soru: kural neydi + uydum mu. Bu bölüm 'kanıt mı hikaye mi'yi ekler.","Doğru kural + kötü sonuç = İYİ karar — ama yalnız kurala UYDUYSAN.","Hikayeye dayanıp kazanmak = LEAK (sonuç ödüllendirdi, süreç hatalı)."],ruleBox:"İYİ karar etiketi yalnız kurala uyduysan geçerli (B16.3) — kendini aklama kapısı değil.",narration:"El bittiğinde puanlamayı nasıl yaparsın? Yeni bir sistem değil, on altı nokta üç otopsisi. Zamanı kritik: el bittiği an değil, gün bittikten sonra; masada sadece eli not al. İki soru sorarsın: karar anında bildiklerimle kitaptaki kural neydi, ve o kurala uydum mu. Bu bölüm o otopsiye tek bir mercek ekler: kararım kanıta mı hikayeye mi dayanıyordu? Doğru kural artı kötü sonuç eşittir iyi karar, aralık değişmez; ama dikkat, bu etiket yalnız kurala gerçekten uyduysan geçerlidir. Doğruydu, varyanstı cümlesi kendini aklama kapısına dönüşmesin. Tersi de var: hikayeye dayanıp kazanmak bir leak'tir, çünkü sonuç seni ödüllendirdi ama süreç hataliydi, tekrar edersen yakarsın."},{title:"En pahalı kararlar + cheat + drill",table:{section:"Bölüm 25",sub:"25.6",caption:"Durum → doğru refleks."},bullets:["Hikaye-hatası her yerde eşit pahalı değil; FT/ICM'de tek karar çok buy-in.","Enerjini pahalı spota sakla: bubble/FT büyük pot, cover edildiğin call-off (B21).","Ucuz kararda mükemmeli kovalama — rutinle oyna.","Guard: kanıt mı hikaye mi + kurala uydum mu (B16.3)."],ruleBox:"Guard: kanıt mı hikaye mi + kurala uydum mu — enerjini pahalı spota sakla.",narration:"Son slayt: enerjiyi nereye harcayacağın. Bir hikaye-hatası her yerde eşit pahalı değildir. Final table'da ya da ICM baskısında tek bir karar çok buy-in değerindedir; şişmiş potta call-off en pahalı aksiyondur, yirmi bir nokta bir, ve cover edildiğin bluff-catch fold'dur, yirmi bir nokta iki. O yüzden mental enerjini oraya sakla: bubble ve final table'ın büyük potları, cover edildiğin call-off'lar. Ucuz kararlarda, küçük pot, para uzak, mükemmeli kovalama, rutinle oyna ve enerjiyi pahalı spota biriktir. Hepsini iki soruluk guard yönetir: kanıt mı hikaye mi, ve kurala uydum mu. Drill: river'da büyük bet, blöfçü hissediyorsun ama aksiyon dizisi value'ye uyuyor, hangi gerekçe; bad beat yedin eller hızlanıyor telefona sarıldın, sıradaki hero-call'da önce ne yaparsın sonra hangi test; ve gün sonu otopsi, cover ediliyorken hero-call yaptın blöfü yakaladın, yirmi bir nokta iki artı on altı nokta üç merceğiyle nasıl puanlarsın."}]},{id:"M30",title:"WSOP Day 1A — Kendi Ellerin (Pasiflik Aynası)",chapter:"Bölüm 7 ★",minutes:6,slides:[{title:"Ayna sızıntı: az oynamak",bullets:["İlk dört vaka kök hatanın 'fazla oyna' yüzüydü; bunlar tersi.","Kök hata bu turnuvada yüksek-şiddette YOK — frenlerin çalıştı.","Asıl kaçan para: güçlü eli AZ oynamak (değer almamak)."],ruleBox:"İyi elde son sokakta check'leme: 'benden kötü bir el bu bahsi öder mi?' — Evet ise BET.",narration:"Bu modül senin kendi oyunun; WSOP Online Main Event birinci gününden. Yetmiş beş karar elini baştan sona taradık, bağımsız bir ikinci göz de teyit etti. Önce iyi haber: agresif tarafın çok sağlam. Blöflerin, üç-bet'lerin, büyük premium'ları oynayışın ve zor yerlerdeki büyük fold'ların neredeyse hep doğru. Kök hatan, yani şişmiş potta tek per'le batmak, bu turnuvada yüksek şiddette yok; frenlerin çalışmış. Ama tekrar eden bir sızıntı var ve bu kök hatanın tam tersi: güçlü eli az oynamak. Top pair, iki per, hatta set ve full house yaptığın ellerde son sokakta bahis atmak yerine check'liyorsun. Masada tek soru şu olmalı: benden kötü bir el bu bahsi öder mi? Cevap evet ise bahis at. Şimdi üç ele tek tek bakalım."},{title:"Vaka 5 — Set'i üç sokak check'lemek",bullets:["5-bet potu, SPR bir buçuk. Flop J-T-Q → orta set (TT).","Flop check, turn check, river Q → tens full → yine check.","Villain iki per ile showdown'a bedava geldi. ~30-80K bırakıldı."],visuals:[{kind:"hand",cards:"TT",label:"Elin — set floplandı"},{kind:"board",cards:"Jd Ts Qh Ac Qs",label:"River: tens full (TTT+QQ)"}],ruleBox:"Set ve full house küçük-SPR'li 4-bet/5-bet potunda ASLA check'lenmez.",narration:"Birinci el. Beş-bet'li bir pot; stack'e göre pot oranı bir buçuk, yani çok sığ, para ortada. Flop jack-ten-queen geliyor, elinde onlu çift, ortada set floplamışsın. Bu neredeyse en güçlü el. Ama flop check, turn check, river queen ile tens full yapıyorsun ve yine check. Sonunda kazandın ama postflop sıfır çip aldın; villain iki per ile showdown'a bedava geldi. Doğrusu: bu SPR'de set ile flop'ta bet ya da jam şart, çünkü as-as bile fold etmez. En geç river'da tens full ile jam'lersin; ace-king, as-as, king-king, queen-queen ve iki per öder. Benden kötü el öder mi? Kesinlikle evet. Bu tek elde tahminen otuz ila seksen bin çip masada bıraktın; batch'in en pahalı eli. Kural: set ve full house, küçük SPR'li potta asla check'lenmez."},{title:"Vaka 6 — Nut kenti check'leyip potu bırakmak",bullets:["BB defend, flop A-4-3 → floplanan tekerlek (nut düz).","Flop call, turn check (bedava kart), river A → check-FOLD.","Nut elden sıfır değer VE pot terk edildi — Vaka 5'in beteri."],visuals:[{kind:"hand",cards:"5h 2c",label:"52o — nut düz floplandı"},{kind:"board",cards:"Ac 4d 3s 5s Ah",label:"Turn 5 bedava, river A"}],ruleBox:"Nut/çok güçlü elle turn'de MUTLAKA bahis — bedava kart verme.",narration:"İkinci el, ve bu birincisinden bile beter. Büyük blind'de beş-iki elini savunmuşsun, flop as-dört-üç geliyor; elinde floplanan tekerlek, yani nut düz. Bundan güçlüsü neredeyse yok. Flop'ta sadece call, turn'de check; rakip de check ediyor, yani ona bedava bir kart vermiş oldun. River as geliyor ve sen check-fold yapıyorsun. Bir düşün: turnuvanın en güçlü ellerinden birini floplayıp önce sıfır değer aldın, sonra o eli bluff-catcher'a çevirip potu da attın. Pasif hat bu felaketi kendi üretti. Doğrusu: flop'ta check-raise ya da en geç turn'de yüzde altmış-yetmiş value bet; her as, her dörtlü ve üçlü, karo draw'lar öder, ve river'da inisiyatif sende kalır. Nut elle bedava kart verme; değeri kendin al."},{title:"Vaka 7 — Kök hata KURULUMU (frenli, 183K)",bullets:["60bb OOP, 3-bet'e TT ile FLAT → şişmiş-pot-tek-per kurulumu.","Postflop kusursuz: eşleşen turn'de check-fold (fren çalıştı).","Ama flat'in kendisi 183K'ya mal oldu — günün en büyük kaybı."],visuals:[{kind:"hand",cards:"TT",label:"60bb OOP, 3-bet'e flat"},{kind:"board",cards:"7s Ks 8s 7h",label:"Monoton flop, eşleşen turn"}],ruleBox:"Kök hata 'yok' değil FRENLİ. Frene güvenme, KURULUMU engelle: orta çiftle OOP flat'i azalt.",narration:"Üçüncü el, ve bu senin en pahalı kaybın: yüz seksen üç bin çip. Elli üç big blind derinlikte, cutoff üç-bet'ine onlu çift ile pozisyon dışı flat call yapıyorsun. Monoton yedi-king-eight flop'unda çift artı floş draw ile check-call, board eşleşen turn'de ikinci barrel'a fold. Şunu net söyleyeyim: postflop oyunun kusursuzdu; eşleşen turn'de check-fold, kitabın on bir nokta iki modelinin ta kendisi. Fren çalıştı ve seni daha büyük kayıptan kurtardı. Hata preflop'ta: altmış big blind pozisyon dışında onlu çift ile üç-bet'e flat, tam da kitabın uyardığı şişmiş-pot-tek-per kurulumunu davet ediyor. Doğrusu dört-bet-jam ya da fold. Ders şu: kök hata bu turnuvada yok değil, frenli. Frenlerin mükemmel ama frene güvenme; kurulumu engelle. Kaçan para frende değil, kurulumda."},{title:"Böyle devam — model eller",bullets:["78o: flopta trips → check-raise → turn pot → river overbet (kusursuz value).","AA ×2: 4-bet/5-bet all-in, ikisi de doğru.","Büyük ve DOĞRU fold'lar (TT 406K pot turn check-fold)."],visuals:[{kind:"hand",cards:"7h 8d",label:"78o — value merdiveni"},{kind:"hand",cards:"AA",label:"Premium stack-off"}],ruleBox:"Value merdivenin (78o) zaten kusursuz — o refleksi güçlü made-hand'lerin HEPSİNE taşı.",narration:"Şimdi iyi haberi pekiştirelim, çünkü çoğu elini kusursuz oynadın; yetmiş beş elin kırk yedisi model. En güzeli: büyük blind'de yedi-sekiz offsuit savunmuşsun, flop yedi-üç-yedi, trips. Check-raise, turn'de pot boyu bahis, river'da overbet. Kusursuz bir value merdiveni. İşte mesele tam bu: draw'lı ve trips'li ellerde bu agresyonu zaten yapıyorsun, ama set, full house, top pair gibi sessiz güçlü ellerde check'e kayıyorsun. As-as'leri iki kez kusursuz batırdın, büyük ve doğru fold'lar yaptın; onlu çift ile dört yüz altı bin çipli potta turn'de check-fold, kitabın kalbi. Yani disiplinin de agresyonun da var. Tek yapman gereken: yedi-sekiz offsuit ile gösterdiğin o value refleksini, güçlü made-hand'lerinin hepsine taşımak."},{title:"Tek kural — masada tek soru",bullets:["Soru: 'Benden kötü bir el bu bahsi öder mi?'","Evet → BET (top pair, iki per, set, full house — hepsi).","Hayır → check (sadece o zaman)."],ruleBox:"İyi elde son sokakta elini kontrol etmeyi bırak, DEĞERİNİ AL. Kök-hatanın tersi de leak.",narration:"Kapanış. Bu turnuvadan tek bir alışkanlık değişecek: iyi elde son sokakta elini kontrol etmeyi bırak, değerini al. Masada tek soru: benden kötü bir el bu bahsi öder mi? Evet ise bahis at; top pair, iki per, set, full house, hepsi. Hayır ise, ancak o zaman check. Bunu bir alışkanlık yaparsan Day birinci günündeki kaçan parayı doğrudan geri kazanırsın, üstelik sıfır ek riskle, çünkü bu ellerin hiçbiri seni riske atmıyordu. Ve unutma: kök hata da yok değil, frenli; o yüzden orta çiftle pozisyon dışı flat gibi kurulumları azalt. Disiplin artı bu tek value düzeltmesi, seni ikinci güne çok daha keskin götürür."}]}];function ze(e){return ta.find(i=>i.id===e)}const _="ept:";let wa=!1;function N(e,i){try{const n=localStorage.getItem(_+e);return n?JSON.parse(n):i}catch{return i}}function Be(e){try{return localStorage.getItem(_+e)}catch{return null}}function C(e,i){try{localStorage.setItem(_+e,JSON.stringify(i))}catch(n){console.warn("ept: localStorage.setItem başarısız — kayıt yapılamadı",n),wa||(wa=!0,typeof window<"u"&&window.dispatchEvent(new CustomEvent("ept:storage-fail")))}}function en(){const e={};for(let i=0;i<localStorage.length;i++){const n=localStorage.key(i);if(n&&n.startsWith(_))try{e[n]=JSON.parse(localStorage.getItem(n))}catch{e[n]=localStorage.getItem(n)}}return JSON.stringify(e,null,2)}function nn(e){try{const i=JSON.parse(e);let n=0;for(const[r,l]of Object.entries(i))r.startsWith(_)&&(localStorage.setItem(r,typeof l=="string"?l:JSON.stringify(l)),n++);return{ok:n>0,count:n}}catch{return{ok:!1,count:0}}}const Ga=[{q:"Şişmiş potta AA'n var, kötü river geldi; senden zayıf hiçbir el ödemeyecek. Jam?",options:["Jam — value","Check — jam value değil"],correct:1,explain:"River'da senden zayıf el ödemeyecekse jam value değildir. Kök hata tam burada.",source:"Bölüm 0 / 7",kavram:"kök-hata"},{q:"Şişmiş potta (3-bet pot / stack'inin ~%40'ı ortada) tek per'in var. Rakibi 'zayıf görünüp' river'da blöfe itmek için ince (thin) value bet atsan?",options:["Thin bet — rakibi blöfe iter","Check — küçük pota call, büyük pota fold"],correct:1,explain:"Tek per şişmiş potta bluff-catcher (cümle 1). Cümle 2: kötü river'da küçük pota check-call, büyük pota check-fold — bet yok. İnce bet yakalamak istediğin blöfleri fold ettirir; check-call zaten blöf-indükleyen hattır.",source:"Bölüm 0.1 / 0.2",kavram:"kök-hata"},{q:"Islak boardda top pair'in var (KTo), OOP'sun, rakip cbet attı. Check-raise all-in?",options:["Check-raise all-in","Check-call, sonra değerlendir"],correct:1,explain:"Check-call. Top pair ıslak boardda büyük pot başlatıcı değildir; check-raise all-in seni QQ gibi flat'lenmiş ellere sokar. (Vaka 2 — gerçek elenme.)",source:"Bölüm 7 / Vaka 2",kavram:"kök-hata"},{q:"BB'de T6s, BTN min-raise call. Flop A-T-3, 1/3 pot call. Turn 5 check-check. River T (board A-T-3-5-T) → trip 10, kicker 6. Check ettin, BTN thin bet. Check-raise all-in?",options:["Check-raise all-in","Check-call — bluff-catcher"],correct:1,explain:"Senden zayıf el all-in'i ödemez: her 10 kicker'ını geçer, boat'lar önde. Trip'in bu runout'ta bluff-catcher → check-call. Raise blöfleri fold ettirir, seni yalnız geçen el öder (cümle 2). Senin gerçek elenmen (B7 Vaka 4).",source:"Bölüm 7 / Vaka 4",kavram:"kök-hata"},{q:"Board bölüşmeye açık ve rakip sana all-in geldi. Onun eli bölüşen bir el mi?",options:["Evet, bölüşmeye oynuyor","Hayır — chop'lar jam atmaz"],correct:1,explain:"Chop'lar jam atmaz; rakip bölüşen eli aralığından çıkarmıştır, jam seni geçen eldir.",source:"Bölüm 0 / 1",kavram:"chop"},{q:"Bir eli blöf yakıtı yapan üç kriter hangisi?",options:["Bloker, bağlantı, board sahipliği","Suited, yüksek kart, pozisyon"],correct:0,explain:"Üç kriter: bloker, bağlantı, board sahipliği. Biri eksikse blöf değil, kaybedilen chip.",source:"Bölüm 1.1",kavram:"blöf-kriter"},{q:"J2s (suited). Blöf yakıtı mı?",options:["Evet — suited","Hayır — bloker yok, bağlantı yok"],correct:1,explain:"Suited kandırır. Aranan bağlı ve bloker; J2s ikisinde de zayıf, üstelik alt flush riski.",source:"Bölüm 1.2",kavram:"suited-tuzağı"},{q:"Check-raise blöfü hangi boardda yaparsın?",options:["T98 — senin boardun","A-K-7 kuru — rakibin boardu"],correct:0,explain:"Check-raise blöf SENİN aralığına çarpan boardlarda (T98, 765). A-K kuruda call et.",source:"Bölüm 1.3",kavram:"board-sahipliği"},{q:"Station / rec tipi (fold etmeyen) rakibe ne yaparsın?",options:["Blöf","Value bet — fold etmez"],correct:1,explain:"Fold etmeyen oyuncuya blöf para yakmaktır; elin iyiyse ödet, kötüyse deneme.",source:"Bölüm 1.4",kavram:"kime-blöf"},{q:"JTs, KQ, KJ, 97s — bu ellerin rolü nedir?",options:["Büyük pot başlatıcı (3-bet / stack-off)","Open / flat / BB-defend"],correct:1,explain:"Aldatıcı orta eller: küçük pot kazananı, büyük pot kaybedeni. Asla büyük pot başlatıcı değil.",source:"Bölüm 2",kavram:"aldatıcı-eller"},{q:"42bb, HJ reg (~%22) açtı, sen CO'da KQo. Karar?",options:["3-bet","Call","Fold"],correct:2,explain:"Fold. Ham equity ~%45 ama realize edilemiyor; en iyi floplar en pahalı tuzaklar (K→AK, Q→AQ).",source:"Bölüm 2.1",kavram:"kqo-vaka"},{q:"Her elden önce sorulacak İLK soru nedir?",options:["Hangi el?","Hangi stack modundayım?"],correct:1,explain:"Önce mod, sonra aralık. Aynı el farklı modda farklı bir eldir.",source:"Bölüm 3",kavram:"stack-modu"},{q:"28bb, elinde 88. Nasıl oynarsın?",options:["Post-flop set-mining","Jam ya da fold"],correct:1,explain:"30bb altı orta çiftler jam-or-fold; set gelmezse devam stack'i yok, gelse maksimum alamazsın.",source:"Bölüm 3.1",kavram:"orta-çift-30bb"},{q:"Bubble, solunda büyük stack'ler var. Açılış aralığını?",options:["Genişlet","Daralt — seni cezasız 3-bet ederler"],correct:1,explain:"Solunda büyük stack varsa daralt. Bubble'da 30bb ≠ Day 1'de 30bb.",source:"Bölüm 3.2",kavram:"icm"},{q:"Canlı turnuvada kâr esas nereden gelir?",options:["Blöf 3-bet","Daha geniş value 3-bet"],correct:1,explain:"Alan 3-bet'e az fold eder; blöfü kıs, value 3-bet'i genişlet.",source:"Bölüm 4.1",kavram:"canlı-value"},{q:"Canlıda biri sana 4-bet yaptı, elinde AK. Ne yaparsın?",options:["Otomatik 5-bet","Ciddiye al — canlıda 4-bet blöfü yok"],correct:1,explain:"Canlıda 4-bet neredeyse hep gerçek eldir; QQ ve altını ciddiye al, AK otomatik 5-bet değil.",source:"Bölüm 4.1 / 4.5",kavram:"4bet-cevap"},{q:"Coldcall'un üç şartından (pozisyon, derinlik, ödeyen rakip) biri sağlanmıyor. Flat?",options:["Yine de flat","Flat etme"],correct:1,explain:"Üçü aynı anda sağlanmıyorsa flat etme; ya 3-bet'e yükselt ya at.",source:"Bölüm 4.4",kavram:"coldcall"},{q:"Biri açtı, bir başkası call etti (coldcaller). En kârlı hamlen?",options:["Flat","Squeeze"],correct:1,explain:"Coldcaller aralığı sıkı ama zayıf: 4-bet edemez, çoğunu fold eder. Squeeze en kârlı hamle.",source:"Bölüm 4.6",kavram:"squeeze"},{q:"OOP 3-bet aralığın, IP aralığına göre nasıl olmalı?",options:["Daha geniş","Belirgin daha sıkı"],correct:1,explain:"OOP şişmiş potta tek per bluff-catcher'dır; bu yüzden OOP aralıkları belirgin daha sıkı.",source:"Bölüm 0.8 / 4.0",kavram:"oop-sıkı"},{q:"Turn'de draw'ın var, karşında station (fold etmez). Semi-bluff bet?",options:["Bet — fold ettir","Check — bedava kart"],correct:1,explain:"Station fold etmez; semi-bluff para yakar. Check et, bedava river gör, draw'ı bedava çek.",source:"Bölüm 6",kavram:"turn-fold-equity"},{q:"PLO'da çıplak (nut potansiyeli olmayan) AA neye benzer?",options:["Canavar el","NLH'deki tek per — büyük pot oynamaz"],correct:1,explain:"PLO'da çıplak AA, NLH'deki tek per'dir. Nut potansiyeli yoksa el büyük pot oynamaz.",source:"Bölüm 0.10 / 8",kavram:"plo-aa"},{q:"25–30bb bandında değer esas nereden gelir?",options:["Kart tamamlamaktan (implied odds)","Fold equity'den"],correct:1,explain:"Bu bantta değer fold equity'den gelir. Aradığın el gelişebilen değil, şimdiden iyi olan: as, broadway, çift.",source:"Bölüm 5.0 / 0.11",kavram:"25-30bb-değer"},{q:"28bb, 3-bet etmek istiyorsun. Yapı nedir?",options:["3-bet edip fold'a hazır ol","3-bet = jam (commit)"],correct:1,explain:"Bu bantta 3-bet commit demektir; '3-bet edip fold' yok, doğrudan all-in. Bu bantta flat da yok.",source:"Bölüm 5.2",kavram:"3bet-jam"},{q:"28bb, SB'desin, elin T9s, BTN açtı, 40K'ya call teklifi var. Karar?",options:["Call","Fold"],correct:1,explain:"Fold — SB'den flat kayıp pozisyon, 28bb'de implied odds motoru çalışmaz. (GGMasters saha vakası)",source:"Bölüm 5.5",kavram:"25-30bb-fold"},{q:"28bb, elinde 87s (suited connector). Karar?",options:["Uygun spotta oyna","Otomatik fold"],correct:1,explain:"Bu bantta tüm suited connector'lar kayıtsız şartsız fold; motorları (implied odds) çalışmıyor.",source:"Bölüm 5.4",kavram:"suited-connector-fold"},{q:"28bb, sana jam geldi. Call sınırın nedir?",options:["Geniş: çoğu broadway","99+, AJs+, AQo+"],correct:1,explain:"Jam'e karşı call 99+, AJs+, AQo+; bundan aşağısı call değil — ya jam'i sen yaparsın ya fold.",source:"Bölüm 5.3",kavram:"jam-call"},{q:"Chip leader'ın jam'e bir kez fold ettiğini gördün. Ona karşı jam aralığın?",options:["Daralt","Genişlet"],correct:1,explain:"Geniş açıp jam'e katlanan profil bu bantta en kârlı hedeftir; ona karşı jam aralığını genişlet.",source:"Bölüm 5.6",kavram:"rakip-okuma"},{q:"52 BB stack'le CO'dan AA açtın. BTN'deki 48 BB'lik reg 3-bet yaptı, sen 4-bet ettin, call geldi. Pot ~44 BB, SPR ~1.3. Flop T♠ 9♠ 8♣. 1/3 pot c-bet attın, rakip RAISE yaptı. İçinden 'AA + SPR 1.3 = zaten bağlıyım' geçiyor. Aksiyonun?",options:["All-in — AA + SPR 1.3, zaten bağlısın; draw'lara bedava kart verme","Fold — pot 40 BB'yi geçti, tek pair alarm; T♠ 9♠ 8♣ üzerindeki raise aralığına karşı AA ile stack yarışı yok","Call, turn'de her barrele devam — pot oddsların call'ı zorunlu kılıyor","Küçük re-raise — bilgi al, rakibi teste çek"],correct:1,explain:"17.10 kök hata: pot 40 BB'yi geçtiyse tek pair (AA dahil) = alarm; varsayılan pot kontrolü + bluff-catcher, stack yarışı değil. 17.7: 'pot büyüdü bağlandım' kök hatadır — SPR'nin düşük olması commit nedeni DEĞİLDİR. T♠ 9♠ 8♣ gibi ıslak board'da raise aralığı set/straight/kombo-draw ağırlıklıdır; AA burada tek pair'dir.",source:"Bölüm 17",kavram:"kök-hata"},{q:"34 BB'le BB'de KK. HJ'deki 38 BB'lik sıkı-pasif oyuncu open yaptı, sen 3-bet ettin, call geldi. Flop Q-J-T rainbow; c-bet attın, call geldi. Turn 9♦ (board Q-J-T-9). İçinden 'check-raise all-in ile inisiyatifi geri alayım' geçiyor. Doğru hat?",options:["Check-raise all-in — K-yüksek straight'in var, inisiyatifi geri al","Büyük bet — straight'ini koru, bedava kart verme","Check-fold — sıkı-pasifte AK kesin vardır","Check-call, river'da yeniden değerlendir — her K seninle chop, AK seni yener; sıkı-pasifin devam aralığı tam bu bölge"],correct:3,explain:"17.10 kök hata korkuluğu: check-raise all-in dürtüsü (KTo dersi) — doğru hat check-call-sonra-değerlendir. Q-J-T-9'da KK ile K-yüksek straight'in var ama her tekli K chop, AK broadway ile seni yener; all-in yalnız seni yenen/chop eden ellerden aksiyon alır. 17.10 chop mekaniği: river'da/turn'de board'u yeniden oku.",source:"Bölüm 17",kavram:"kök-hata"},{q:"Bubble'a 25 kişi kaldı, stack'in 41 BB. Seni cover eden chip lideri (140 BB) BTN'den üst üste 3. kez open yaptı. BB'de QQ tutuyorsun. Planın ne; 3-bet'ine jam gelirse call var mı?",options:["3-bet (value); jam gelirse FOLD — bubble'da cover'a karşı tüm stack aralığı ~KK+; QQ, {KK+, AK} jam'ine karşı ICM'li eşiği tutmaz","3-bet ve jam'e call — QQ bubble'da fold edilmez, adam üst üste 3. kez açıyor","Sadece call — cover'a karşı 3-bet tamamen yasak, potu küçük tut","Fold — chip lideriyle hiçbir pot oynama, ondan uzak dur"],correct:0,explain:"17.10 ICM eşikleri: QQ, cover'ın {KK+, AK} jam'ine ~%40 equity alır; bubble ICM primi %6–10 ile gereken ~%48–50 → FOLD. 17.9: 'Bubble'da cover'a karşı QQ bile 4-bet-call olmayabilir'; pratik kural tüm stack için KK+. QQ yine de value 3-bet'tir (17.4: BB'den 99+, çok açan reg hedef); hata 3-bet'te değil jam'e call'dadır. Cover'dan tamamen kaçmak da strateji değildir (17.11). (17.4 'cover edene 3-bet YAPMA' BLÖF 3-bet içindir; value 3-bet — QQ, jam'e devam KK+ — serbest.)",source:"Bölüm 17 / 17.4",kavram:"icm-cover"},{q:"Derin ITM'desin. 3-bet potunda IP olarak TT ile oynuyorsun. Flop 8-6-2 rainbow'da c-bet'ine check-call geldi; turn 8 (board 8-6-2-8) check-check geçti. River A geldi ve rakip POT büyüklüğünde DONK bet attı. İçinden 'overpair'im vardı, A sadece korkutmaca' geçiyor. Kararın?",options:["Call — A korkutmaca, TT hâlâ 8'lerin ve altının önünde","Raise all-in — blöfü cezalandır, zayıf Ax'i fold'a zorla","Fold — overpair + kötü river + BÜYÜK bet; pot donk polarizedir ve senden kötü el bu boyutu betlemez","Call — pot oddsların ~%33, rakip yeterince sık blöf yapar"],correct:2,explain:"17.7 river disiplini: overpair + kötü river → küçük bet'e check-call, BÜYÜK bet'e fold. A, TT için en kötü karttır ve pot donk polarize aralıktır (17.10 online telafi: overbet/pot polarize = bluff-catcher matematiği); 'korkutmaca' rasyonalizasyonu 17.10 kök hata ailesindendir. Derin ITM'de 17.9 gereği ICM > chip-EV, fold daha da netleşir.",source:"Bölüm 17",kavram:"kök-hata"},{q:"47 BB'le BB'desin; BTN'in tek raise'ine A9o ile call ettin. Board A-9-4 iki kupa: check-raise yaptın, call geldi. Turn 6♥ ile flush tamamlandı; bet attın, rakip RAISE yaptı. 'İki pair'im var, güvendeyim' diyorsun. Kararın?",options:["3-bet all-in — iki pair önde, draw'ları ödet","Raise'e bir kez call — iki pair artık sadece bluff-catcher (+4 out boat); river'da geliştiremezsen büyük bet'e fold, stack yarışı yok","Call, river'da da her bet'e call — pot büyüdü, artık bağlısın","Fold — flush tamamlandıysa iki pair anında çöptür"],correct:1,explain:"17.7/17.10: flush tamamlayan 6♥ turn'ünde, check-raise'ine call etmiş rakipten gelen raise ağırlıkla tamamlanmış flush'tır — iki pair 'güvende' değil, bluff-catcher'a döner. Doğru hat eskalasyon değil call-sonra-değerlendir (17.10 check-raise all-in dürtüsü dersi); jam draw'lara değil yapılmış ellere ödeme yapar. 'Pot büyüdü bağlandım' ise 17.7'daki kök hatadır.",source:"Bölüm 17",kavram:"kök-hata"},{q:"56 BB, Faz 1 (bubble uzak). HJ'den A9s açtın; BTN'deki 48 BB'lik reg ~3x 3-bet yaptı (postflop OOP kalacaksın). Aksiyonun?",options:["Call — suited as, pozisyonsuz da olsa flop'a bakılır","4-bet bluff — A bloker'ın var, reg'i test et","Jam — reg'in 3-bet'ini kır","Fold — OOP'de 3-bet'e devam aralığı dar: KK+ 4-bet, QQ/AK karışık, JJ–TT/AQs call; A9s bunun dışında"],correct:3,explain:"17.6: open'ına OOP'de 3-bet gelince aralık daralır — KK+ 4-bet, QQ/AK karışık, JJ–TT/AQs call, gerisi fold; A9s 'gerisi'ndedir. 4-bet bluff cephanesi A5s–A4s ile sınırlı ve düşük frekanstır. Call ise 17.11'nin uyardığı asıl tehlikedir: 3-bet call yiyip zayıf elle şişmiş pota girmek.",source:"Bölüm 17",kavram:"3bet-aralik"},{q:"38 BB stack'le (Mod B) CO'dasın, elinde 66; önün fold. Açar mısın? Açarsan BB'nin ~4x 3-bet'ine planın ne?",options:["Aç (CO aralığı 44+, 66 standart), 3-bet'e fold — Mod B'de flat call daralır, set-mine matematiği bozulur","Aç, 3-bet'e call — set tutarsan stack alırsın","Açma — 38 BB'de küçük çiftler open'dan düşer","Aç, 3-bet'e jam — 38 BB'de commit eşiği zaten geçildi"],correct:0,explain:"17.8 Mod B (30–45 BB): open aralığı korunur (17.3 CO %26 = 44+ dahil) ama flat call daralır — set-mine bozulur ve 3-bet potunda commit eşiği yakındır; 66 ile call plansız şişmiş pot doğurur. Doğru plan: aç, 3-bet'e fold. Jam ise Mod C/D eşiklerini 38 BB'ye taşıyan geçiş hatasıdır (17.11).",source:"Bölüm 17",kavram:"stack-modu"},{q:"Bubble'a 40 kişi kaldı. BTN'de KQo ile oturuyorsun; BB'de seni cover eden 130 BB'lik chip lideri var, önün fold. Ne yaparsın?",options:["Fold — cover'la pot açılmaz, ondan uzak dur","Aç ve 3-bet'e call — KQo bırakılamayacak kadar güzel bir el","Aç (2.1–2.3x) — KQo bir kademe daraltılmış BTN aralığında bile açılır; ama cover'ın 3-bet'ine fold","Limp — ucuza flop gör, cover'ı kızdırma"],correct:2,explain:"17.9 Faz 2: cover'lara karşı tek fren 'bir kademe dar' oynamaktır; 17.11: 'cover'dan kaçış strateji değil'. KQo, 17.3 BTN %40–44 aralığının daraltılmış halinde bile net open'dır. Asıl disiplin 3-bet gelince: 17.7 — 3-bet'e karşı offsuit broadway (KQo, AJo) çöptür, 'en pahalı güzel görünen el'; cover'dan 3-bet'e bir kademe daha dar devam edilir. Limp 17.3'te yoktur.",source:"Bölüm 17",kavram:"icm-cover"},{q:"Faz 2, stack'in 60 BB. SB'deki 22 BB'lik stack open yaptı; sen BB'de A5s tutuyorsun (postflop IP olacaksın). En kârlı hat?",options:["Call — A5s'i pozisyonla ucuza oyna","Fold — kısa stack'e bluff 3-bet yanar","Direkt jam — 22 BB'yi anında fold'a zorla","3-bet — Faz 2'nin özü 15–25 BB'likleri ezmek; A5s, A bloker'ı + oynanabilirliğiyle ideal baskı eli; jam gelirse çoğunlukla fold"],correct:3,explain:"17.9 Faz 2: en kârlı faz — 15–25 BB'lik stacklerin open'larına 3-bet baskısı ana kâr kaynağıdır ve 22 BB tam hedef bölgededir (17.4'ün 'bluff yanar' yasağı 20 BB ALTI içindir). 17.11: baskı bluff'ları A5s/K9s gibi bloker'lı ellerle sınırlanır — A5s ders kitabı adayıdır. Jam'e gelirse 60 BB'lik stack'in yarışmaz; fiyat uymadıkça fold.",source:"Bölüm 17",kavram:"blof-secimi"},{q:"3-bet potunda OOP'sin, elinde QQ (overpair). Flop 9-7-5 iki maça; check ettin, rakip POT büyüklüğünde bet attı. Flop/turn/river planın ne?",options:["Flop'ta raise — overpair'i draw'lardan koru, gerekirse stack gitsin","Flop call; turn'de maça/straight tamamlayıp büyük barrel gelirse fold; river'da küçük bet'e call, büyük bet'e fold — overpair'i bluff-catcher'a çevir","Flop call, sonra her sokakta call — QQ premium, pot zaten büyüdü","Flop fold — pot bet'e overpair yetmez"],correct:1,explain:"17.10: 40 BB'yi geçen şişmiş potta tek pair (QQ) = alarm; varsayılan pot kontrolü + bluff-catcher, stack yarışı değil. Sokak planı 17.7'dan: turn'de büyük barrel + flush/straight tamamlayan kart → tek pair biter; river'da küçük bet'e check-call, büyük bet'e check-fold. Her sokakta call etmek 'pot büyüdü bağlandım' kök hatasıdır.",source:"Bölüm 17",kavram:"kök-hata"},{q:"Para yeni girdi (Faz 3), ITM'nin ilk eli. UTG'deki 9 BB'lik stack jam yaptı; sen HJ'de ATo tutuyorsun ve arkanda 3 büyük stack var. Call var mı?",options:["Call — 9 BB'lik kamikaze jam'e karşı ATo fazlasıyla önde","İzole re-jam — arkadakileri at, kısayla baş başa kal","Fold — Faz 3'te ilk 3–4 el tight oynanır; kamikaze jam'ler premium ile karşılanır, ATo premium değil ve arkanda 3 büyük stack var","Call — pot oddsları neredeyse her iki karta call veriyor"],correct:2,explain:"17.9 Faz 3: para girişinde 3–4 el tight — kısalar kamikaze jam atar ve bunlar yalnız PREMIUM ile karşılanır; ATo premium değildir. Arkadaki 3 büyük stack'in uyanma ihtimali denklemi daha da kötüleştirir. Chip-EV'de kârlı görünen call, faz disiplinini (ICM > chip-EV) bozan tipik hatadır.",source:"Bölüm 17",kavram:"kök-hata"},{q:"Elinde KK (overpair). Flop T-8-4 iki sinekti, c-bet'ine call gelmişti. Turn J♣ ile board T-8-4-J oldu ve sinek flush tamamlandı; rakip 3/4 pot ikinci barrel attı. Devam kriterin ne?",options:["Call — overpair bir barrel daha kaldırır, river'a bakarız","Raise — flush'ı test et","All-in — KK'yı koru, çekilişleri at","Fold — büyük turn barrel + flush tamamlayan board'da tek pair biter; devam ancak K♣ bloker gibi istisnai gerekçeyle düşünülür"],correct:3,explain:"17.7 turn disiplini: 'büyük turn barrel + board dörtlü/flush tamamladı → tek pair biter.' 3/4 pot ikinci barrel bu tanımın tam içindedir ve KK bu board'da tek pair'dir → varsayılan fold. Devam etmek, 17.10'un uyardığı 'şişmiş potta tek pair ile stack yarışı' kök hatasının doğum yeridir; raise/all-in ise tamamlanmış ellere ödeme yapar.",source:"Bölüm 17",kavram:"kök-hata"},{q:"Mod D'desin: 17 BB, BTN'den ilk giren sensin, elinde A7o. Jam mi, open-fold mu, fold mu?",options:["Open 2.1x ve 3-bet'e fold — stack'i koru","Jam — Mod D'de BTN açılışının bir kısmı direkt jam'dir; A7o Nash'e yakın jam aralığında, open edersen 3-bet'e ya-jam-ya-fold ikileminde kalırsın","Fold — A7o domine olur, 17 BB'yle riske girme","Open 2.1x ve 3-bet'e call — A bloker'la flop görürüz"],correct:1,explain:"17.8 Mod D (12–20 BB): açılışın bir kısmı SB/BTN'den DİREKT jam'dir ve aralık Nash'e yakındır — 17 BB'de BTN'den A7o bu sınıftadır. Open edersen kural nettir: 3-bet'e ya jam ya fold — A7o ile ikisi de kötüdür (domine yarış ya da equity yakma). Fold ise 17.11'deki '20 BB panik jam/donma' geçiş hatasının pasif yüzüdür.",source:"Bölüm 17",kavram:"stack-modu"},{q:"Derin ITM, 3 masa kaldı. Seninle EŞİT stack'li (45 BB) rakip CO'dan open yaptı; sen SB'de AQo tutuyorsun. 3-bet boyutun ve 4-bet gelirse planın ne?",options:["OOP standart 3.8–4.2x 3-bet; 4-bet gelirse fold — derin ITM'de eşit stack'e karşı AQo ile stack yarışı yok ('eşitlerden kaç')","Küçük 3x 3-bet — ucuz olsun; 4-bet'e call","Flat call — SB'den potu küçük tut","4x 3-bet, 4-bet'e jam — AQo bloker'larıyla flip kabul"],correct:0,explain:"17.5 boyut kuralı: OOP (SB) 3-bet 3.8–4.2x — küçük OOP 3-bet ucuz call verir ve plansız şişmiş OOP pot doğurur (kök hata doğum yeri). 17.4: SB'den flat YOK, 3-bet ya da fold; AQo CO open'ına value 3-bet'tir. 4-bet'e devam 17.6'te KK+ çekirdeklidir ve 17.9 Faz 4 'eşitlerden kaç' + 17.7 'aynı stack'le flip = son çare' → AQo fold.",source:"Bölüm 17",kavram:"boyut"},{q:"River'dayız; elinde AA, pot iyice şişmiş durumda. Board 2-4-5-9-6. Rakip sana check etti ve son söz sende. Bet var mı; varsa boyut ve hedef el ne?",options:["Pot bet — AA'yı ödet; Ax ve overpair'ler call eder","Overbet jam — polarize görün, iki pair'leri ödet","Bet yok, check geç — 'benden kötü hangi el öder?' sorusunun cevabı boş; bet'i ödeyecek eller (straight, set, iki pair) seni yener","1/3 pot ince value — KK/QQ tipi eller öder"],correct:2,explain:"17.10 kök hata korkuluğu: 'AA river jam: senden kötü el ödemiyorsa jam değersiz — check.' 17.7 river kuralı aynı tek soruyu sorar. Board 2-4-5-9-6'da her 3 ve her 7-8 straight yapar; şişmiş potta bet'ine aksiyon verecek aralık ağırlıkla seni yenen bölgededir, kötü eller zaten fold eder. 17.10: şişmiş potta tek pair = pot kontrolü, value üretme yeri değil.",source:"Bölüm 17",kavram:"kök-hata"},{q:"3-bet potundasın (SPR ~2.5), elinde overpair KK. Flop geldi, tek per'in hâlâ en iyisi görünüyor. İçinden 'şişmiş pot, bağlıyım' geçiyor. Kitabın 'şişmiş pot' ölçüsü nedir?",options:["Bahis sayısı — 3-bet'liyse pot şişmiştir","SPR (stack ÷ pot); SPR 1–4 = bluff-catcher, büyük pot BAŞLATMA","Efektif stack — 100bb+ ise derin","Board dokusu — ıslaksa şişmiş"],correct:1,explain:"B11.0: 'Derinde şişmiş potu bet sayısı değil SPR tanımlar.' SPR 1–4 bandında tek per bluff-catcher'dır — büyük pot başlatma. Önce SPR'yi oku, sonra rolü ver; SPR<1 commit, SPR>8 ince value alınabilir ama re-raise gören pot aniden 1–4'e düşer.",source:"Bölüm 11.0",kavram:"kök-hata"},{q:"River geldi, elinde güçlü tek per (overpair). Rakip POT ÜSTÜ (overbet) bahis attı. Kararın?",options:["Call — overpair bluff-catcher, overbet'te blöf de var","Fold — overbet polarize (nut ya da hava); tek per fold, yalnız bloker tutan bluff-catcher call eder","Raise — polarize aralığı blöfe zorla","Duruma göre — board'a bak"],correct:1,explain:"B11.2: 'Boyut büyüdükçe rakip aralığı value'ya kayar; overbet = polarize oku, tek per netleşerek bluff-catcher'dan FOLD'a döner. Sadece bloker tutan bluff-catcher call eder.' Panik hero-call buranın hatasıdır (Vaka 1).",source:"Bölüm 11.2",kavram:"kök-hata"},{q:"River kuru board, top pair iyi kicker'ın var. Karşında rec/station (fold etmeyen) tip; sana check geldi. Bahis var mı?",options:["Check — showdown'a git, ince value riskli","Küçük value BET — 'benden zayıf hangi el öder?' cevabı VAR (rec öder); kaçan thin value chip kaybıdır","Pot bet — maksimum value","Check-raise'e hazırlan"],correct:1,explain:"B11.3: 'Ödeyen varsa İNCE value BET ET.' Filtre pozitif yönde: 'benden zayıf hangi el ödüyor?' cevabı varsa (rec/station öder), ince de olsa bet. Rec-ağırlıklı Main'de kaçan thin value doğrudan chip kaybıdır.",source:"Bölüm 11.3",kavram:"boyut"},{q:"Overpair'in var, pot şişmiş. River board 2-4-5'e 6 geldi (2-4-5-6). Rakip büyük bahis attı. Kitabın 'kötü river' kataloğunda bu kart hangi sınıfta ve kararın?",options:["Nötr kart — call","Kötü river (kent/set tamamlayan); büyük pota check-fold, JAM ASLA — jam value ancak senden zayıf el öderse vardır","Korkutmaca — raise","Küçük value bet"],correct:1,explain:"B11.4 kötü river kataloğu: 'alt kartların dördüncüsü / kent tamamlayan' (2-4-5'e 6 → 3'lü, kent, set hepsi seni geçmiş). Bu kartlarda küçük pota check-call, büyük pota check-fold; JAM ASLA. (Vaka 3.)",source:"Bölüm 11.4",kavram:"kök-hata"},{q:"Sert baloncuk. Seni COVER eden büyük stack geniş bir BvB jam attı (~22bb efektif), elinde A9s. Call?",options:["Call — A9s suited, baloncukta bile yeterince önde","Fold — cover + baloncuk: CALL = 88+/AJs+/AQo; A9s ters-domine, KQs ile birlikte fold","Jam'i sen yap — inisiyatif al","Duruma göre"],correct:1,explain:"B12.1 Emre kalibrasyonu (2026-08-10): sert baloncuk + seni cover eden geniş jam, ~22bb → CALL = 88+ · AJs+ · AQo; A9s/KQs FOLD. Sürücü: cover + baloncuk = kaybedersen bust €0, marjinal edge tournament life'a değmez (A9s ters-domine). İLK soru 'baloncuk mu' değil 'cover ediliyor muyum'.",source:"Bölüm 12.1",kavram:"icm-cover"},{q:"Baloncuk, 22bb BB'desin. Seni cover ETMEYEN kısa bir stack (senden kısa; kaybetsen de bust olmazsın) geniş 13bb BTN jam attı; elinde KTo. Refleksin 'range yetersiz, fold'. Doğrusu?",options:["Fold — baloncukta KTo çöp","Call — cover EDİLMİYORSAN çizgi çok daha geniş; KTo geniş 13bb jam'ine ~%54 alır, ~%44 gerekir","Jam'e re-jam","Yalnız premium call"],correct:1,explain:"B12.1 drill eklentisi (2026-08-10): leak'in yapışkan yarısı COVER EDİLMEYEN tarafta fold refleksi. Cover edilmiyorsan (jammer senden kısa) A9s ve KTo CALL — KTo ~%54 vs gereken ~%44. Cue: 'jam'e fold basmadan önce cover ediliyor muyum? Hayır ise call sandığından çok geniş.'",source:"Bölüm 12.1",kavram:"icm-cover"},{q:"FT, herkes birbirini kilitlemiş (masada senden kısa YOK, sen fiilen en kısasın, <15bb). 'ICM'de daralt' refleksin devrede. Doğru oyun?",options:["Daralt — ICM her zaman daraltır","GENİŞLET — herkes kilitliyken kimse seni ödemek istemez; 'genel daralt' bu bandda aktif olarak yanlış","Katlan, bust'ları bekle","Yalnız premium jam"],correct:1,explain:"B12.5 kısa stack ICM istisnası: '⚠ ICM'de daralt HER ZAMAN doğru değil. Herkes kilitliyken kısa stack'in doğru oyunu GENİŞLETMEKtir — kimse seni ödemek istemez.' 12.2: 'fiilen en kısasın → jam aralığını genişlet, katlanma.'",source:"Bölüm 12.5 / 12.2",kavram:"icm"},{q:"Bubble, sen büyük (cover eden) stack'sin. Masada kilitlenmiş bir orta stack ve birkaç kısa var. En kârlı hedefin kim?",options:["Kısa stack'ler — kolay fold","Kilitlenmiş orta stack — masadaki en kârlı hedef; open genişlet + 3-bet baskısı","Diğer büyük stack — çok chip'te","Kimse — bubble'da bekle"],correct:1,explain:"B12.4 bubble av haritası: 'kilitlenmiş orta stack masadaki en kârlı hedeftir.' Büyük stack olarak onu soy (open genişlet + 3-bet baskısı). Bubble savunma değil, DOĞRU tarafındaysan turnuvanın en yüksek chipEV penceresidir.",source:"Bölüm 12.4",kavram:"icm"},{q:"3+ kişilik (multiway) potta top pair'in var, flop'a birkaç kişi geldi. HU refleksinle value düşünüyorsun. Kitabın multiway kuralı?",options:["Value bet — top pair her zaman value","Bir sınıf düşer → check / pot kontrol; multiway her ek oyuncu value barını yükseltir","Fold — multiway'de top pair çöp","Overbet — kalabalığı at"],correct:1,explain:"B13.1 HU→3+ yollu geçiş: multiway'de top pair 'bir sınıf düşer → check/pot kontrol.' B13.0: 'her ek oyuncu value'nun barını YÜKSELTİR.' C-bet frekansı çöker (sadece güçlü value + gerçek nut-draw).",source:"Bölüm 13.1",kavram:"multiway"},{q:"Multiway potta blöf düşünüyorsun; elinde iyi bir bloker var. Pot kaç yollu olduğunda blöf hâlâ meşru? (kitabın 4. kriteri)",options:["4+ yollu bile — bloker yeter","3 yollu: sadece nut-bloker semi-bluff; 4+ yollu: blöf YOK; tek station bile blöfü öldürür","Her multiway'de standart blöf","Yalnız HU'da blöf"],correct:1,explain:"B13.3 dördüncü kriter: 'rakip sayısı = blöfün geçmesi gereken kapı sayısı.' HU=üç kriter, 3-yollu=sadece nut-bloker semi-bluff, 4+ yollu=YOK. B1.4 'kime blöf yapılmaz' listesine 'multiway pot (kim olursa olsun)' eklenir.",source:"Bölüm 13.3",kavram:"multiway"},{q:"40–60bb bandındasın (köprü band), 3-bet düşünüyorsun. Kitabın blöf 3-bet yönü ne?",options:["Blöfü genişlet — derinlik var","Blöfü NEREDEYSE KES — canlıda kimse fold etmiyor; 3-bet edeceğin el 4-bet/jam'e devam edebilmeli","Standart B4 aralığı — değişmez","Yalnız suited connector blöf"],correct:1,explain:"B14.1: '40–60bb: BLÖF neredeyse kes — canlıda kimse fold etmiyor.' Kural: 3-bet edeceğin el 4-bet/jam'e devam edebilmeli; edemiyorsa flat (IP/BB) ya da fold. '3-bet edip fold' yapısı 60bb altında zayıflar, 40bb'de biter (commit).",source:"Bölüm 14.1",kavram:"3bet-aralik"},{q:"€25K PLO HR, elinde 30bb ve çıplak AA. NLH refleksin '30bb altı → Bölüm 5 → 3-bet=JAM' diyor. PLO'da geçerli mi?",options:["Evet — 30bb her oyunda jam bandı","Hayır — PLO'da B5 GEÇERSİZ: jam yok, pot-raise var; çıplak AA postflop oynamaz, değeri pre-commit'te (3-bet→SPR≤1)","Fold — 30bb PLO'da AA oynanmaz","Limp-call"],correct:1,explain:"B15.1/15.0: 'B5'in NLH jam/fold refleksi PLO'da geçersiz — pot-limit'te jam yok, max pot-raise var.' 25–60bb PLO'da çıplak AA postflop oynamaz; değeri pre-commit'tedir (3-bet → SPR≤1). '30bb PLO ≠ 30bb NLH.'",source:"Bölüm 15.1 / 15.0",kavram:"plo"},{q:"Kısa PLO (<25bb), pot-raise yaptın. Bunun anlamı ne?",options:["Standart raise — flop'ta devam kararı ayrı","Pot-raise = COMMIT: kalan stack flop'ta otomatik gider; aralığı 'flop'ta stack ortaya girecek' varsayımıyla seç, dangler'lı her şeyi kes","Bilgi raise'i — ucuz","Fold'a hazır ol"],correct:1,explain:"B15.1: 'Kısa PLO'da pot-raise = commit. Aralığını flop'ta stack ortaya girecek varsayımıyla seç: çift-suited rundown, güçlü AAxx; dangler'lı her şeyi KES.' B15.2: PLO'da commit kararı flop'ta değil, potu şişirdiğin sokakta verilir.",source:"Bölüm 15.1 / 15.2",kavram:"plo"},{q:"SHR Day 1'de bust ettin, 5 dakika geçti, tilt hafif. Hemen re-entry (aynı event'e ikinci mermi) mantıklı mı?",options:["Evet — hemen gir, momentum kaybetme","Hayır — zorunlu 20 dk bekle, karar kartını doldur; SHR'de re-entry YOK (max 1 bullet); tilt hâlinde otomatik re-entry = kök hatanın bankroll ölçeği","Başka event'e geç","Günü bitir, yarın karar"],correct:1,explain:"B16.1: 'Serinin en pahalı tek kararı bustout sonrası 5 dakikada verilen re-entry.' Zorunlu bekleme: bustout → 20 dk masadan uzak → karar kartını doldur. SHR max 1 bullet (re-entry yok); tilt hâlinde otomatik re-entry = şişmiş 'seri yatırımında' tek bullet'a value muamelesi.",source:"Bölüm 16.1",kavram:"kök-hata"},{q:"Gün sonu otopsisi: bir eli kitabın kuralına UYARAK oynadın ama kaybettin (doğru jam, kötü sonuç). Yarın o spotta aralığını değiştirir misin?",options:["Evet — kaybettiysem bir şey yanlıştı, daralt","Hayır — 'uydum + kaybettim' = doğru karar, kötü sonuç; ARALIK DEĞİŞMEZ (aksi halde SHR ortasında B4-B5 tablolarını bozarsın)","Duruma göre — sonuca bak","Aralığı genişlet — daha agresif ol"],correct:1,explain:"B16.3 otopsi kuralı: 'Uydum + kaybettim → vaka defterine doğru karar/kötü sonuç, ARALIK DEĞİŞMEZ.' Bu filtre kalibrasyonu korur: SHR'de doğru jam'ler sık kaybedilir; filtre olmadan özenli tabloları turnuva ortasında bozarsın. (Yalnız kurala UYDUYSAN geçerli — kendini aklama kapısı değil.)",source:"Bölüm 16.3",kavram:"kök-hata"},{q:"PLO'da elinde çıplak AA var (çift suited değil, board'a bağlanmadı). Şişmiş pota tüm stack'i sürer misin?",options:["Evet — AA overpair, stack-off","Hayır — çıplak AA tek per muamelesi"],correct:1,explain:"Çıplak AA nut potansiyeli yoksa PLO'da sadece bir çifttir; büyük pot oynamaz. AA'yı NLH gözüyle görmek klasik tuzak — iki per bile neredeyse hiç nut değil.",source:"Bölüm 8.2 / 8.3",kavram:"plo-aa"},{q:"PLO el seçimi: AA72 (dördüncü kart bağlantısız 'dangler'). Nasıl değerlendirilir?",options:["Güçlü — çift as var","Zayıf — dangler, pratikte üç kartlı el"],correct:1,explain:"Dördüncü kart bağlantısızsa el pratikte üç kartlıdır; AA72 oynanmaz. Öncelik rundown ve çift suited ellerde (JT98, wrap + flush draw).",source:"Bölüm 8.2",kavram:"plo"},{q:"PLO'da flopta top two pair yaptın, rakip şişmiş pota itiyor. Stack-off doğru mu?",options:["Evet — top two güçlü","Hayır — PLO'da iki per neredeyse hiç nut değil"],correct:1,explain:"PLO'da ikinci en iyi el pahalıdır; iki per neredeyse hiç nut değildir. Equity'ler de yakın koşar (%60/%40 iyi favori) — NLH stack-off refleksini taşıma.",source:"Bölüm 8.1 / 8.3",kavram:"plo"},{q:"PLO'da pozisyon DIŞI 3-bet potu oynamak en zor spot. Elin marjinal, şüphedesin. Ne yaparsın?",options:["3-bet — inisiyatif al","Flat et — OOP 3-bet potu en zor spot"],correct:1,explain:"PLO'da OOP 3-bet potu en zor spottur; şüphe hâlinde flat et. İki pot bet = stack ortada, üçüncü sokakta geri dönüş yok — pot şişmesini kontrol et.",source:"Bölüm 8.3",kavram:"plo"},{q:"Köprü bandında (40–70bb) '3-bet edip fold' yapısı ne zaman biter?",options:["70bb'de biter","≈60bb altında zayıflar, 40bb'de tam commit'e döner"],correct:1,explain:"≈60bb altında '3-bet-fold' zayıflar, 40bb'de commit'e döner (tam eşik kalibrasyonda). 3-bet edeceğin el 4-bet/jam'e devam edebilmeli — edemiyorsa flat (IP/BB) ya da fold.",source:"Bölüm 14.1",kavram:"3bet-aralik"},{q:"45bb'ye düştün. Köprü bandının bir numaralı 'en pahalı alışkanlık'ı nedir?",options:["Çok fold etmek","45bb'de 130bb aralığı oynamak"],correct:1,explain:"'45bb'de 130bb aralığı oynamak en pahalı alışkanlık.' Mod-önce-aralık; yanlış-mod-aralığı şişmiş pot üretiminin bir numaralı kaynağıdır. İlk çıkanlar: SC 3-bet blöfü, küçük çift spekülatif flat, offsuit broadway coldcall.",source:"Bölüm 14.2",kavram:"stack-modu"},{q:"Köprü bandında bir eli 3-bet mi flat mı diye seçerken tek belirleyici kural nedir?",options:["Her zaman 3-bet — inisiyatif","3-bet edeceğin el 4-bet/jam'e devam edebilmeli"],correct:1,explain:"Bantta 3-bet giderek commit'e yaklaşır; 3-bet edeceğin el 4-bet/jam'e devam edebilmeli. Edemiyorsa IP/BB'de dar flat ya da fold. Offsuit broadway ve dominate edilebilir eller bu bantta düşer.",source:"Bölüm 14.1",kavram:"3bet-aralik"},{q:"Ante'li yapıda BB her elde defend ediyor. Neden yine de küçük (2.2–2.5x) açarsın?",options:["Büyük aç — BB'yi fold'a zorla","Küçük aç — kâr postflop pozisyondan gelir, yatırımın küçük kalır"],correct:1,explain:"Küçük open BB'nin call'ını engellemek için değil; ucuz pozisyonel savaş satın alır. Ante potu şişirdiği için küçük open bile potu almaya değer; kâr preflop fold'dan değil postflop pozisyondan gelir. Büyüt: pasif saha fold etmiyorsa / limp isolate / 25–35bb SPR.",source:"Bölüm 4.8 / 3",kavram:"boyut"},{q:"100bb'de birinin open'ına karşı elinde KQs var — open range'inin göbeğinde bir el. 3-bet mi?",options:["3-bet — güçlü el","Flat call — KQs 3-bet range'inin ortası, value da değil bluff da"],correct:1,explain:"3-bet range çoğu pozisyonda polarize: value (QQ+, AK) + bluff (A5s–A2s), ortası flat. KQs/99/AJs open'ın göbeğinde ama 3-bet'te yok — 100bb+ flat call. İstisna: BB vs SB lineer, orada KQs value'ya döner.",source:"Bölüm 4.3",kavram:"3bet-aralik"},{q:"TT'n var, single-raised pot, flopta SPR ~8. His 'pot büyüdü, committed'im' diyor. Doğru mu?",options:["Evet — committed","Hayır — SPR 8'de tek pair'le büyük pot yok; committed his değil orandır"],correct:1,explain:"Committed olmak his değil, orandır. SPR = en küçük kalan stack ÷ pot. SPR 3+ ise tek pair'le büyük pot yok; 8'de çift+draw bile jam için marjinal, tek pair net fold. Şişmiş 3-bet potta (SPR 1–4) tek pair bluff-catcher'a düşer — büyük pot başlatma (B11.0); commit yalnız SPR<1.",source:"Bölüm 11.0",kavram:"kök-hata"},{q:"Day 2, bubble yaklaşıyor. Masayı nasıl kullanırsın?",options:["Herkese eşit baskı yap","Faz 2 avı: taş kesilen 15–25 BB'likleri hedefle (open'a 3-bet, blind'e open, c-bet'e float); tek fren seni cover edenler"],correct:1,explain:"B17.9 Faz 2 en kârlı fazdır: bubble yaklaşınca 15–25 BB'likler taş kesilir — open'larına 3-bet, blind'lerine open, c-bet'lerine float. Tek istisna seni COVER edenler (bir kademe dar; cover'a karşı QQ bile 4-bet-call olmayabilir). 'Her iki kartla aç' değil — B17.11 geniş açmayı 15–25 BB'lerin BB'sine %60'la sınırlar, bluff 3-bet'i bloker'lı ellere (A5s, K9s) kısar.",source:"Bölüm 17.9 / 17.11",kavram:"rakip-okuma"},{q:"3-bet potta SPR ~3, top pair iyi kicker'ın var. Stack-off doğru mu? Ya single-raised potta (SPR 8+)?",options:["3-bet potta stack-off DOĞRU (düşük-SPR commit); SRP'de tek pair asla","Stack-off yok: SPR 1–4 bluff-catcher (büyük pot başlatma), SPR 8+ ince value; commit yalnız SPR<1"],correct:1,explain:"Kitap B11.0: SPR 1–4 (100bb 3-bet pot, ~3 dahil) tek pair BLUFF-CATCHER — büyük pot BAŞLATMA; SPR 1–4'te stack-off tam olarak kök hatadır (B17.10: şişmiş potta tek pair, AA dahil, bluff-catcher). SPR 8+'da ince value alınır ama stack-off yok (erken bluff-catcher'a düşürüp value kaçırmak da hata — B11.0 satır 608); re-raise gelirse pot 1–4 bandına düşer. Tek pair commit YALNIZ SPR<1'de.",source:"Bölüm 11.0 / 17.10",kavram:"kök-hata"},{q:"50bb'de A5s ile 4-bet bluff cephaneliğin var. 40bb'ye düşünce ne değişir?",options:["Aynı kalır","40bb'de 4-bet bluff'ı öldür + EP'yi iki kademe daralt (4-bet = commit)"],correct:1,explain:"Stack trigger: 60bb+ tam playbook; 40bb'de 4-bet bluff'ı öldür ve EP'yi iki kademe daralt çünkü 4-bet zaten commit; 30bb Mod C resteal jam; 20bb jam-first (BB dışı flat yok); 12bb altı push/fold.",source:"Bölüm 17.8",kavram:"stack-modu"},{q:"IP, tek-raise'li pot, kuru board A-7-2 rainbow. Aralığının tamamıyla flop planın?",options:["2/3 pot polarize c-bet","1/3 pot yüksek frekans range-bet (aralığın çoğu)"],correct:1,explain:"Kuru yüksek-kart board = range avantajı sende (PFR). Küçük boyut (1/3) yüksek frekans range-bet; ucuz, bilgi taşımaz, river'da check-fold lüksünü korur. 2/3 polarize ıslak board içindir.",source:"Bölüm 18.2",kavram:"c-bet"},{q:"IP, 3-bet potu, KK, ıslak board 9-8-7 iki renk (SPR ~3). C-bet mi, boyut ne?",options:["Check — board çok tehlikeli","2/3 value bet: ıslak board'da overpair value bunu ister — draw'ları ücretlendir, değer al (B18.3)"],correct:1,explain:"B18.3: ıslak board'da value (overpair) 2/3 basar — draw'ları ücretlendir, değer al. AMA düşük SPR bir COMMIT gerekçesi DEĞİL: raise gelirse KK bluff-catcher'a döner (B11.0: SPR 1–4 tek pair, overpair dahil, büyük pot başlatma değil), stack-off yok; river planını bet atmadan kur (B11.1). Check pasif oynar, value kaçırır.",source:"Bölüm 18.2 / 18.3",kavram:"c-bet"},{q:"OOP (SB'den 3-bet, BTN call), AK, kuru board Q-6-3 rainbow — hiçbir şey yakalamadın. Hat?",options:["Havayla 1/3 range c-bet at","Check — OOP havayla range-bet tuzak; check-call/check-fold, iki overcard showdown value"],correct:1,explain:"OOP havayla otomatik range-bet TUZAK (B18.5): seni pozisyonsuz şişmiş pota sokar. AK'da iki overcard + backdoor equity var; check-call ya da check-fold hattı station'a value kesmez ama kendini bloated pota atmaz.",source:"Bölüm 18.5",kavram:"c-bet"},{q:"3 yollu pot, IP, top pair iyi kicker (AJ), board J-9-4 iki renk. Frekans/boyut nasıl değişir?",options:["HU gibi 2/3 value bet","Frekans çöker (B13): tek per bir sınıf aşağı; küçük value/kontrol, şişirme yok"],correct:1,explain:"Multiway'de flop c-bet frekansı çöker (B13.1). Top pair HU'da value; 3 yollu bir sınıf düşer → pot kontrol, küçük value ya da check. İki oyuncuyu birden geçmesi gereken value barı yükselir; havayla range-bet yok.",source:"Bölüm 18.6 / 13.1",kavram:"c-bet"},{q:"BB savundun, flop 7-6-4 iki renk, PFR karşında. Donk bet mi check mi?",options:["Check — donk her zaman telegraf eder","Küçük donk: bu board (7-6-4) senin BB aralığına PFR'ın yüksek-kart aralığından çok çarpar"],correct:1,explain:"Donk varsayılanı check'tir AMA istisna board avantajı: düşük-bağlantılı 7-6-4 senin savunma aralığına (iki-per/set/kent) PFR'ın yüksek-kart aralığından çok daha fazla çarpar → küçük donk equity'sini fiyatlar. Yüksek board'da (A-K-x) donk atma.",source:"Bölüm 19.1",kavram:"donk"},{q:"IP PFR, flop A-9-4, KJ ile check-back ettin. Turn K (top pair). Bet mi, adı ne?",options:["Yine check — inisiyatif riskli","Gecikmiş c-bet: turn'de geliştin (sebep var) → ince value bet"],correct:1,explain:"Gecikmiş c-bet: flop'u check-back edip turn'de bir SEBEP çıkınca bet. Turn K ile top pair'e geliştin (sebep = geliştin). Sebepsiz turn bet flop give-up'ını bloat'a çevirir; sebepli bet inisiyatifi alır.",source:"Bölüm 19.2",kavram:"gecikmis-cbet"},{q:"OOP, flop check-check gitti (PFR capped), turn kartıyla QJ gutshot'a döndü. Probe bet mi?",options:["Check — OOP bet riskli","Evet, probe: PFR check-back = capped; capped aralığa turn bet + equity var"],correct:1,explain:"Flop check-check → PFR güçlüyle bet ederdi, check-back = capped aralık. OOP turn probe ile capped'a inisiyatifi al; gutshot equity + fold equity var. Değil: PFR tuzağı / kötü turn / check-call'la realize edilecek yapılı el.",source:"Bölüm 19.3",kavram:"probe"},{q:"IP, flop herkes check, turn sana yine check geldi, elinde ace-high (SD value düşük). Stab mı check mi?",options:["Check — ace-high showdown'a gitsin","Stab: sana check = herkes zayıf; küçük bet ile potu al (fold equity yüksek)"],correct:1,explain:"Stab en düşük riskli inisiyatif: sana check geldiyse herkes zayıflık gösterdi. Ace-high'ın showdown value'su zayıf, en iyi kullanımı fold equity → küçük stab. Değil: multiway / check-raise villain / board checker'lara çarpıyor.",source:"Bölüm 19.4",kavram:"stab"},{q:"IP, kuru flop, villain c-bet, sende backdoor flush + overcard. Float call ettin. Turn planın?",options:["Turn ne gelirse call devam","Turn check gelirse bet al; villain 2. fıçı atarsa BIRAK"],correct:1,explain:"Float turn'de biter: check gelirse bet atıp al (villain turn'ü bıraktı = capped), 2. fıçı gelirse bırak — sen check için float'ladın, iki fıçı ödemek için değil. Call-call sürüklenmesi float değil kök hatadır.",source:"Bölüm 19.5",kavram:"float"},{q:"OOP river, ince bluff-catcher, villain agresif reg + kuru/capped board. Blocker-bet mi check-call mı?",options:["Her durumda check-call (11.2)","Bu dar pencerede küçük blocker OK; ama villain station olsa → check-call (11.2)"],correct:1,explain:"Default 11.2 (check-call/check-fold). Blocker yalnız capped+agresif villain + ince bluff-catcher + kuru river + küçük boyutta açılır (villain check gelseydi polarize basardı). Villain STATION ise pencere kapanır → check-call; station indirim yapmaz, raise ederse batarsın.",source:"Bölüm 19.6",kavram:"blocker-bet"},{q:"chipEV'de %37.5 gereken bir call; bubble'da seni COVER eden bir stack jam etti. A9s call mı?",options:["Evet, %37.5'i geçiyor → call","Fold: risk primi eşiği ~%47'ye çeker; cover edende prim en yüksek, A9s marjinal → fold"],correct:1,explain:"Cover edende risk primi en yüksek: chipEV %37.5 eşiği ICM'de ~%47'ye çıkar (temsili). A9s bu eşiği geçmez → fold. Prim = 'cover ediliyorsan daralt'ın sayısı.",source:"Bölüm 20.2",kavram:"risk-premium"},{q:"Aynı bubble, ama jam eden seni COVER ETMİYOR (sen daha derinsin, kaybetsen 0'lanmıyorsun). Prim ve aralık?",options:["Yine daralt, bubble = sıkı","Prim ~0 → geniş call; cover edilmeyen jam'e bubble'da bile genişle"],correct:1,explain:"Cover edilmiyorsan kaybetsen de bust olmazsın → risk primi ~0/ihmal → GENİŞ call. Bubble'ı otomatik 'sıkı' sanmak B12.4 leak'i; asıl soru cover mı.",source:"Bölüm 20.3",kavram:"risk-premium"},{q:"FT'de sen chip lidersin, kısa stack sana jam etti (kaybetsen de lidersin). Primin ne, call aralığın?",options:["Yüksek prim, daralt","Prim düşük (bust yok) → call aralığın GENİŞLER; lider olarak kısa jam'leri ez"],correct:1,explain:"Kaybetsen de elenmiyorsun (lidersin) → senin risk primin düşük → geniş call. Cover EDEN sensin, prim baskısı kısa stack'te. Lider = cover eden derin, agresyon serbest.",source:"Bölüm 20.3",kavram:"risk-premium"},{q:"Bubble, seni COVER eden villain'e karşı river; elinde ince bir bluff-catcher, villain küçük bet. chipEV'de call'du. ICM'de?",options:["chipEV'de call'du → yine call","Fold: cover ediliyorsun → bir kademe indir; call-off fold equity'siz en pahalı aksiyon"],correct:1,explain:"ICM baskısında (cover ediliyorken) her agresif hattı bir kademe indir; call-off en ICM-vergili aksiyondur (fold equity yok, tüm chip showdown'a bağlı). İnce bluff-catcher hero-call'dan fold'a düşer. Villain cover ETMESEYDİ call'a dönerdi.",source:"Bölüm 21.1",kavram:"postflop-icm"},{q:"FT'de sen chip lidersin; orta stack flop check-call, turn'de sana check geldi, elin iyi ama nut değil. Kademe hangi yöne?",options:["Cover ediliyor gibi indir → check","Cover EDİYORsun → bir kademe YUKARI: value/baskı için bet (lider baskıyı satar)"],correct:1,explain:"Cover EDEN sensin (kaybetsen de lidersin) → primin düşük/negatif → bir kademe yukarı. Chip lider baskıyı satar; rakip için her pot bust riski. 'Bir kademe indir' cover EDİLENin kuralı; sen tersini yaparsın.",source:"Bölüm 21.3",kavram:"postflop-icm"},{q:"Cover edildiğin spotta villain ⅔ pot bet; MDF ~%60 diyor ama para sıçraması çok yakın, elin savunma sınırında. Fold leak mi?",options:["Evet, MDF altında fold = blöfe açık = leak","Doğru: MDF chipEV kavramı, para sıçramasında çöker → MDF altında fold doğru"],correct:1,explain:"MDF bir chipEV kavramıdır (cash + ICM-baskısız MTT); para sıçraması yakınken çöker. Cover edildiğin ICM spotunda over-fold exploit değil doğru oyundur — villain'in blöf çalması ICM primini geri ödemez.",source:"Bölüm 21.4",kavram:"postflop-icm"},{q:"Bubble yeni patladı, orta stack'sin. Döngü içinde chipEV'ye en yakın (prim en düşük) faz hangisi ve ne yaparsın?",options:["FT yaklaşımı — daral","Bubble patladı/erken ITM: prim döngüde en düşük → gaz, chip biriktir"],correct:1,explain:"Bubble patlayınca min-cash garanti, sıradaki sıçramalar stack değerine göre küçük → prim döngüde en düşük, chipEV'ye en yakın pencere. Gaz ver, biriktir. FT yaklaşımı tam tersi (ikinci fren).",source:"Bölüm 22.1",kavram:"icm-zaman"},{q:"Bubble, senden kısa (seni cover ETMEYEN) bir stack jam etti; seni cover eden lider de masada. Kısa jam'e call eşiğin?",options:["Bubble = sıkı, ikisine de daralt","Kısa jam'e prim ~0 → geniş call; lidere karşı prim tavan → daral"],correct:1,explain:"Öncelik kuralı: faz primi yalnız seni COVER edenlere. Cover ETMEYEN kısa jam'e prim her fazda ~0 → bubble'da bile geniş call (B20). Seni cover eden lidere karşı prim tavanda → saygı, daral. Faz tavanı, cover haritası kime'yi belirler.",source:"Bölüm 22.2",kavram:"icm-zaman"},{q:"Kısa stack'sin, bubble, cover baskısı var. Jam aralığın mı call aralığın mı daralır; 'en iyi ellerle gir' hangisi için doğru?",options:["Jam daralır — sadece premiumla it","CALL daralır, JAM KALIR (B17, fold equity); 'en iyi ellerle' CALL için"],correct:1,explain:"B17: kısa stack'in unopened JAM aralığı fold equity ile geniş kalır (cover edene bir tık sıkılır); sert daralan CALL aralığıdır. Jam'lemesi gereken eli fold etmek = short-nit leak (blind-out). 'Paraya fold'la girme' yalnız uç spotta (başka mikro bust olurken).",source:"Bölüm 22.4",kavram:"icm-zaman"},{q:"Station her flop/turn call etti, river'da KÜÇÜK lead aldı; elinde iyi top pair. Call mı fold mu? Ya raise etseydi?",options:["Küçük lead ≈ nuts → fold","Küçük lead'e call (station merged/zayıf donk); RAISE olsaydı ≈ nuts → fold"],correct:1,explain:"Station river'ı zayıf/merged ellerle sık donk'lar → küçük lead'e iyi top pair çoğu zaman call. Ama pasif station'ın RAISE'i ≈ nuts → orada ince value fold. Lead ≠ raise; boyut ve aksiyon ayrımı kritik.",source:"Bölüm 23.5",kavram:"saha-okuma"},{q:"Bubble, rakip belli bir rec/whale, ICM umursamıyor. Steal blöfü mü value mı — ve cover ediliyorsan call-off'un değişir mi?",options:["Baskı sat, bubble'da fold eder","Value al (baskı boşa); AMA cover'lıyken kendi call-off eşiğin yine yüksek"],correct:1,explain:"ICM-körü rec fold etmez → baskı satma, geniş value al. Ama kendi risk primin (B17/B20/B21) rakip ICM-körü olsa da bakidir: sapma value BET'i genişletmek, cover'lıyken call-off/stack-off gevşetmek DEĞİL. Whale'e bile cover edilirken hafif stack-off yok.",source:"Bölüm 23.3",kavram:"saha-okuma"},{q:"Nit UTG açtı, sende orta el (KJo). Exploit yön ne — ve neden onun pot'larını çalarsın?",options:["Call/3-bet, aralığı geniş","Fold (nit açılışı nuts'a yakın); ama sonraki pot'larını sık çal — fold eder"],correct:1,explain:"Nit açılışı/agresyonu nadiren blöf, nuts'a yakın → orta ele saygı, fold (bluff-catch bırak). Exploit onun fold-eğiliminde: pot'larını sık çal, steal'e fazla fold eder. Hata yönü (fazla fold) → çal.",source:"Bölüm 23.1",kavram:"saha-okuma"},{q:"€5K Main, derin stack, erken seviye; marjinal bir flip (ince +EV) önünde. AL mı PAS mı, ne belirler?",options:["AL — +EV her spot alınır","PAS: edge'in var (soft/derin) → marjinal flip'i pas geç, sonra daha iyi spot gelir"],correct:1,explain:"Edge premium: soft sahada + derin stack'te edge'in büyük → marjinal flip'i variance'a çevirme, pas geç. İki soru belirler: senin edge'in (soft=büyük) + derinlik (derin=outplay alanı). Sonra edge'in daha güvenli EV üretir.",source:"Bölüm 24.2",kavram:"edge-premium"},{q:"€100K SHR, dünyanın en iyileri, sığ-orta; AYNI marjinal +EV flip. Karar değişir mi?",options:["Yine pas — flip variance'tır","Değişir → AL: edge'in yok (underdog) → beklemenin değeri yok, ICM-ayarlı +$EV al"],correct:1,explain:"Edge yoksa (tough saha, underdog) beklemenin primi düşük → ICM düşülünce hâlâ +$EV olan marjinal spotu al, flip dahil. Aynı el, iki turnuvada zıt karar; fark senin edge'in. (-EV yine asla.)",source:"Bölüm 24.5",kavram:"edge-premium"},{q:"Orta-kısa stack: seni büyükler cover ediyor ama sen de altındakileri cover ediyorsun; edge yok, yapı hızlı. Pasif call-flip mi, jam mı?",options:["Pasif call-flip — chip lazım","Fold-equity'li JAM (B17): risk primi 'pas' derken edge primi 'chip lazım' der → en iyi FE spotu"],correct:1,explain:"Gerçek prim-çatışması: cover ediliyorsun (risk primi pas) + edge yok/hızlı (edge primi bekleme). Çözüm pasif flip değil, fold-equity'li JAM (B17: jam kalır, fold equity var). -EV asla; +EV FE spotunu al.",source:"Bölüm 24.4",kavram:"edge-premium"},{q:"River'da büyük bet; 'bu adam blöfçü' hissediyorsun ama aksiyon dizisi (bet-bet-bet, polarize) value'ye uyuyor. Hangi gerekçe?",options:["His → hero-call (blöfçü gibi)","Kanıt kazanır: aksiyon dizisi value → fold; 'blöfçü' bir HİKAYE, default'a dön (B11.2)"],correct:1,explain:"Kanıt (aksiyon dizisi, polarize boyut) hikayeyi ('blöfçü gibi hissediyorum') yener. Kanıt value diyorsa fold; his değil kanıt. Hikaye seni gereksiz hero-call'a sürükler — default B11.2.",source:"Bölüm 25.1",kavram:"kafamdaki-hikaye"},{q:"Bad beat yedin, eller hızlanıyor, telefona sarıldın. Sıradaki büyük hero-call kararında ÖNCE ne yaparsın?",options:["Hemen 'kanıt mı hikaye mi' testini yap","ÖNCE fiziksel hamle (B16.2: nefes/VPIP kilidi/su), SONRA kanıt-hikaye testi"],correct:1,explain:"Sıralama B16'nın: tilt belirtisinde (hızlanma/telefon/kovalama) önce yarayı etiketle + fiziksel hamle (B16.2), çünkü tilt'liyken testi bile güvenilir yapamazsın. Yara sakinleşince kanıt mı hikaye mi testine geç.",source:"Bölüm 25.2",kavram:"kafamdaki-hikaye"},{q:"Gün sonu otopsi: cover EDİLİYORken hero-call yaptın, blöfü yakaladın, pot senin. Kararı nasıl puanlarsın?",options:["İYİ karar — kazandım, okuma tuttu","LEAK: B21.2 cover ediliyorken hero-call=fold olmalıydı; kazanmak süreci düzeltmez"],correct:1,explain:"Sonuç-bağımsız puanlama (B16.3): kural neydi + uydum mu. B21.2 → cover ediliyorken hero-call fold olmalıydı, kanıt olsa bile. Kurala uymadın → LEAK; kazanmak (iyi sonuç) kötü kararı gizler. Puanı sonuç değil kural belirler.",source:"Bölüm 25.3",kavram:"kafamdaki-hikaye"}];function rn(e){const i=Ga.find(r=>r.kavram===e),n=i?/(?:B[öo]l[üu]m|Chapter)\s*(\d+)/i.exec(i.source||""):null;return n?Number(n[1]):null}const $a={M1:"kök-hata",M2:"blöf-kriter",M3:"aldatıcı-eller",M4:"stack-modu",M5:"canlı-value",M6:"4bet-cevap",M7:"25-30bb-değer",M8:"turn-fold-equity",M9:"plo-aa"};function xe(e){const i=Ga.filter(n=>n.kavram===e&&!n.source.includes("Bölüm 17"));return i.length?i[Math.floor(Math.random()*i.length)]:null}function Ae({kavram:e,onStart:i}){const n=u.useMemo(()=>xe(e),[e]),[r,l]=u.useState(null),t=r!==null;return n?a.jsxs("div",{className:"flex min-h-full flex-col justify-center gap-4 p-5",children:[a.jsx("div",{className:"text-center text-xs uppercase tracking-[0.18em] text-accent",children:"Önce tahmin et"}),a.jsx("p",{className:"text-center text-sm text-neutral-500",children:"Derse başlamadan önce dene. Yanılman serbest — puan yok. Ders senin cevabın."}),a.jsx("div",{className:"card p-4",children:a.jsx("p",{className:"text-[15px] leading-relaxed text-neutral-100",children:n.q})}),a.jsx("div",{className:"flex flex-col gap-2",children:n.options.map((s,o)=>{const d=o===n.correct,k=o===r;let m="btn-ghost";return t&&d?m="btn bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-500/50":t&&k&&!d&&(m="btn bg-red-500/20 text-red-200 ring-1 ring-red-500/50"),a.jsxs("button",{onClick:()=>!t&&l(o),disabled:t,className:m+" justify-start py-3 text-left text-[15px]",children:[t&&d?"✓ ":t&&k?"✗ ":"",s]},o)})}),t&&a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"rounded-xl bg-surface-1 px-4 py-3 text-sm leading-relaxed text-neutral-300",children:n.explain}),a.jsx("button",{onClick:i,className:"btn-accent py-3 text-base",children:"Derse başla →"})]}),!t&&a.jsx("button",{onClick:i,className:"text-center text-xs text-neutral-600",children:"geç, direkt derse başla"})]}):(i(),null)}const xa=[{id:"shr",name:"Super High Roller",format:"NLH",buyin:"€100K",start:"2026-08-21",end:"2026-08-23",days:"21–23 Ağu"},{id:"plo",name:"PLO High Roller",format:"PLO",buyin:"€25K",start:"2026-08-22",end:"2026-08-23",days:"22–23 Ağu"},{id:"main",name:"Main Event",format:"NLH",buyin:"€5.3K",start:"2026-08-22",end:"2026-08-29",days:"22–29 Ağu"},{id:"hr",name:"High Roller",format:"NLH",buyin:"€10.3K",start:"2026-08-27",end:"2026-08-29",days:"27–29 Ağu"},{id:"wsop",name:"WSOP Online ME Day 2",format:"NLH",buyin:"$5K",start:"2026-09-21",end:"2026-09-22",days:"21–22 Eyl"}];function Aa(e){return xa.filter(n=>n.end>=e).sort((n,r)=>n.start.localeCompare(r.start))[0]??null}function sa(e,i){return Math.round((new Date(e+"T00:00:00").getTime()-new Date(i+"T00:00:00").getTime())/864e5)}function z(e=0){const i=new Date;i.setDate(i.getDate()+e);const n=i.getFullYear(),r=String(i.getMonth()+1).padStart(2,"0"),l=String(i.getDate()).padStart(2,"0");return`${n}-${r}-${l}`}const ja="progress";function ua(){return N(ja,{days:[],quizTotal:0,quizCorrect:0})}function ba(){const e=ua(),i=z(0);e.days.includes(i)||e.days.push(i),C(ja,e)}function ln(e){const i=ua();i.quizTotal+=1,e&&(i.quizCorrect+=1);const n=z(0);i.days.includes(n)||i.days.push(n),C(ja,i)}function je(){const e=new Set(ua().days);let i=0,n=!0;for(let r=0;r<120;r++)if(e.has(z(-r)))i++;else if(r>0&&n)n=!1;else break;return i}function Ke(){var i;const e=z(0);return sa(((i=Aa(e))==null?void 0:i.start)??"2026-08-16",e)}function _a(){const e=z(0);return xa.some(i=>sa(i.start,e)<=6&&e<=i.end)}function Te(){const e=ua();return{streak:je(),practicedToday:e.days.includes(z(0)),quizTotal:e.quizTotal,quizCorrect:e.quizCorrect,totalDays:e.days.length}}const Ee=[{id:"S1-value-boyut",kavram:"boyut",soru_ozeti:"AK top pair kuru boardda river value boyutu",sonuc:"half",not:"Fold okuması doğru, yarım pot yerine 1/3 olmalıydı"},{id:"S2-ak-stack-call",kavram:"kök-hata",soru_ozeti:"3-bet potunda AK top pair, eşleşmiş riverda stack lead'ine call",sonuc:"wrong",not:"Pasiften agresife geçiş + eşleşmiş river = value"},{id:"S4-kjo-xr",kavram:"blof-secimi",soru_ozeti:"T94 boardda KJo gutshot ile check-raise",sonuc:"wrong",not:"Board sahipliği ≠ el sınıfı; gutshot bağlantı değil, showdown değeri blöfe çevrilmez"},{id:"S5-aa-fold-erken",kavram:"kök-hata",soru_ozeti:"T94 boardda AA'yı flop check-raise'ine fold",sonuc:"wrong",not:"Aşırı düzeltme; erken sokakta call, hikâye tamamlanınca fold"},{id:"S6-jt-60bb",kavram:"3bet-aralik",soru_ozeti:"60bb CO'da JTs vs LJ reg açılışı — cevaplanmadı",sonuc:"wrong",not:"Üç kez ertelendi; ilk seansta MUTLAKA sorulacak"}],tn="60bb, LJ'den reg açtı, sen CO'da JTs. 3-bet mi, call mi, fold mu? Ve neden diğer ikisi değil?",la="karne",Se="karne:corrupt-backup";function Ne(){var e;return((e=Aa(z(0)))==null?void 0:e.start)??""}function $(e){const i=Ne();return!i||i<=z(0)?e:e>i?i:e}function Ce(e,i,n){if(e==="wrong")return $(z(1));if(e==="half")return $(z(n==="tournament_life"?1:2));const r=[3,7,14,30],l=r[Math.min(Math.max(i,1)-1,r.length-1)];return $(z(l))}function Pe(e,i){const n=new Set(i).size;return e>=3&&n>=3?"saglam":e>=2&&n>=2?"yetkin":e>=1?"asina":"gorundu"}function Ka(e,i){return{id:e,kavram:e,soru_ozeti:"",sonuc:"wrong",streak:0,reps:0,correctDays:[],tarih:z(0),due:z(0),mastery:"gorundu",...i}}function Oe(e){const i=String(e.kavram||e.id||"kök-hata"),n=e.correctDays;return{...Ka(i),...e,id:i,kavram:i,correctDays:Array.isArray(n)?n:[],reps:typeof e.reps=="number"?e.reps:0,streak:typeof e.streak=="number"?e.streak:0,due:$(String(e.due||z(0)))}}function Ia(e){const i=new Map;for(const n of e){const r=String(n.kavram||"kök-hata"),l=i.get(r)||Ka(r);l.reps+=1,l.soru_ozeti=String(n.soru_ozeti||l.soru_ozeti),l.sonuc=n.sonuc||l.sonuc,l.not=n.not||l.not,l.tarih=String(n.tarih||l.tarih),l.due=$(String(n.due||l.due)),i.set(r,l)}return[...i.values()]}function H(){const e=Be(la);if(e!==null){let n;try{n=JSON.parse(e)}catch{n=void 0}if(Array.isArray(n)&&n.length){const r=n,l=typeof r[0].reps=="number"?r.map(Oe):Ia(r);return C(la,l),l}e.trim()&&!(Array.isArray(n)&&n.length===0)&&C(Se,e)}const i=Ia(Ee);return C(la,i),i}function Za(e,i,n){const r=H();let l=r.find(t=>t.kavram===e);if(l||(l=Ka(e),r.push(l)),l.reps+=1,l.soru_ozeti=i.soru_ozeti,l.sonuc=i.sonuc,l.not=i.not??l.not,l.severity=i.severity??l.severity,l.confidence=n!=null&&n.resetConfidence?void 0:i.confidence??l.confidence,l.streak=i.sonuc==="correct"?l.streak+1:0,i.sonuc==="correct"){const t=z(0);l.correctDays.includes(t)||l.correctDays.push(t)}l.tarih=z(0),l.due=Ce(i.sonuc,l.streak,l.severity),l.mastery=Pe(l.streak,l.correctDays),C(la,r),Re()}function Wa(e){Za(e.kavram,e)}function Me(e,i){const n=H().find(r=>r.id===e||r.kavram===e);n&&Za(n.kavram,{soru_ozeti:n.soru_ozeti,sonuc:i,not:n.not,severity:n.severity},{resetConfidence:!0})}const oa={tournament_life:0,major:1,minor:2};function Ta(){const e=z(0);return H().filter(i=>i.due<=e).sort((i,n)=>oa[i.severity??"minor"]-oa[n.severity??"minor"]||i.due.localeCompare(n.due))}function Xa(){return H().filter(e=>e.sonuc==="wrong"&&(e.confidence??0)>=.8).sort((e,i)=>oa[e.severity??"minor"]-oa[i.severity??"minor"])}function sn(){const e=H().filter(n=>(n.confidence??0)>=.8&&n.reps>0);if(!e.length)return null;const i=e.filter(n=>n.sonuc==="correct").length;return{high:e.length,hit:i}}function on(){const e={gorundu:0,asina:0,yetkin:0,saglam:0};for(const i of H())e[i.mastery]++;return e}const za="karne:trend";function Re(){const e=z(0),i=H(),n=i.filter(s=>s.due<=e).length,r=i.filter(s=>s.mastery==="saglam").length,l=N(za,[]),t=l.findIndex(s=>s.day===e);t>=0?l[t]={day:e,due:n,saglam:r}:l.push({day:e,due:n,saglam:r}),C(za,l.slice(-30))}function dn(){return N(za,[])}function kn(){const e=N("journal",[]);if(!e.length)return"";const i=[...new Set(e.map(r=>r.day))].sort().slice(-2),n=e.filter(r=>i.includes(r.day)).slice(0,6);return n.length?`

Masadan getirdiği son eller (ertesi-gün tohumu — bu spotları yeni bir kılıkta tekrar sor):
`+n.map(r=>{const l=typeof r.guven=="number"?` [%${Math.round(r.guven*100)} güven]`:"";return`- [${r.day}] ${r.el} → ${r.aksiyon}${r.gerekce?" ("+r.gerekce+")":""}${l}`}).join(`
`):""}function un(){const e=Ta(),i=(e.length?e:H()).slice(0,10);return i.length?i.map(n=>{const r=n.severity==="tournament_life"?" ⚠tournament_life":"",l=(n.confidence??0)>=.8&&n.sonuc==="wrong"?" (emin-ama-yanlış)":"";return`- [${n.sonuc}${r}${l}] ${n.kavram}: ${n.soru_ozeti}${n.not?" — "+n.not:""} (due ${n.due})`}).join(`
`):"(karne boş)"}const we=()=>new Date().toISOString().slice(0,10),Ie=Object.fromEntries(Object.entries($a).map(([e,i])=>[i,e]));function De(e){let i=Ie[e];if(i||(/^3-?bet|aralik|aralık|boyut/i.test(e)?i="M5":/bl[öo]f/i.test(e)?i="M2":/plo/i.test(e)?i="M9":/turn|draw/i.test(e)?i="M8":/stack|mod|icm/i.test(e)&&(i="M4")),!i)return null;const n=ta.find(r=>r.id===i);return n?{id:n.id,title:n.title}:null}function Le(){const e=u.useMemo(()=>{var B;const f=we(),c=Ta(),y=(B=Xa()[0]||c[0])==null?void 0:B.kavram,x=xa.find(R=>R.format==="PLO"),T=x?sa(x.start,f):999,I=Aa(f);return{today:f,cornerman:_a(),days:Ke(),ev:I,dueCount:c.length,topDue:c[0]??null,studyMod:y?De(y):null,ploRamp:T>=0&&T<=6,wsopRamp:(I==null?void 0:I.id)==="wsop",practiced:Te().practicedToday}},[]),{today:i,cornerman:n,days:r,ev:l,dueCount:t,topDue:s,studyMod:o,ploRamp:d,wsopRamp:k,practiced:m}=e,b=l?sa(l.start,i):0;return a.jsxs("div",{className:"card border-l-4 border-accent p-4",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"text-xs font-semibold uppercase tracking-wide text-accent",children:"Bugün"}),a.jsx("span",{className:"text-xs text-neutral-500",children:n?"EPT serisi CANLI 🎬":r>=0?`Day-1'e ${r} gün`:"seri bitti"})]}),l&&a.jsxs("div",{className:"mt-2 text-sm text-neutral-200",children:["🎯 Sıradaki: ",a.jsx("b",{children:l.name})," ",a.jsxs("span",{className:"text-neutral-500",children:["(",l.format," · ",l.buyin," · ",l.days,")"]}),b>0?` — ${b} gün`:b===0?" — bugün!":" — sürüyor"]}),d&&a.jsx("a",{href:"#/ders/M9",className:"mt-1 block text-xs text-accent",children:"↳ €25K PLO HR yaklaşıyor — M9 PLO temellerini tazele →"}),k&&a.jsx("a",{href:"#/referans/bolum/17",className:"mt-1 block text-xs text-accent",children:"↳ WSOP Online ME Day 2 yaklaşıyor — Bölüm 17'yi tazele →"}),a.jsxs("div",{className:"mt-3 flex flex-col gap-1.5 text-sm",children:[t>0?a.jsxs("a",{href:"#/ilerleme/tekrar",className:"flex items-start gap-2 text-neutral-200",children:[a.jsx("span",{children:"🔁"}),a.jsxs("span",{children:[a.jsx("b",{children:t})," tekrar hazır",(s==null?void 0:s.severity)==="tournament_life"?" · ⚠ turnuva-bitiren var":""]})]}):a.jsx("span",{className:"text-neutral-500",children:"🔁 Bugün vadesi gelen tekrar yok."}),o&&a.jsxs("a",{href:`#/ders/${o.id}`,className:"flex items-start gap-2 text-neutral-200",children:[a.jsx("span",{children:"📚"}),a.jsxs("span",{children:["Bugün çalış: ",a.jsx("b",{children:o.title})," ",a.jsxs("span",{className:"text-neutral-500",children:["(",o.id,")"]})]})]}),a.jsxs("a",{href:"#/drill",className:"flex items-start gap-2 text-neutral-200",children:[a.jsx("span",{children:"🃏"}),a.jsx("span",{children:m?"Bugün çalıştın ✓ — bir drill daha?":"Günün pratiği: 1 drill"})]})]})]})}function Fe({onOpen:e}){const i=N("lessons:done",[]);return a.jsxs("div",{className:"space-y-3 px-4 py-5",children:[a.jsx("h1",{className:"text-2xl font-bold",children:"Ders Modu"}),a.jsxs("p",{className:"text-sm text-neutral-400",children:[ta.length," modül · slayt + sesli anlatım"]}),a.jsx(Le,{}),a.jsxs("button",{onClick:()=>e("otopsi"),className:"card flex w-full items-center gap-3 border-l-4 border-red-400/60 p-4 text-left active:scale-[0.99]",children:[a.jsx("div",{className:"text-2xl",children:"🔬"}),a.jsxs("div",{className:"min-w-0 flex-1",children:[a.jsx("div",{className:"font-semibold",children:"Bustout Otopsisi"}),a.jsx("div",{className:"truncate text-xs text-neutral-500",children:"4 elenme eli (3 kitaptan + 1 senin) — önce sen karar ver"})]}),a.jsx("div",{className:"shrink-0 text-neutral-600",children:"→"})]}),a.jsx("div",{className:"space-y-2 pt-2",children:ta.map(n=>{const r=i.includes(n.id);return a.jsxs("button",{onClick:()=>e(n.id),className:"card flex w-full items-center gap-3 p-4 text-left active:scale-[0.99]",children:[a.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-sm font-bold text-accent",children:n.id}),a.jsxs("div",{className:"min-w-0 flex-1",children:[a.jsx("div",{className:"font-semibold",children:n.title}),a.jsxs("div",{className:"truncate text-xs text-neutral-500",children:[n.chapter," · ",n.minutes," dk"]})]}),a.jsx("div",{className:"shrink-0 text-lg",children:r?a.jsx("span",{className:"text-accent",children:"✓"}):a.jsx("span",{className:"text-neutral-600",children:"→"})})]},n.id)})})]})}const He=`# POKER CEP KİTABI v5

**EPT Barcelona Edition**
16–29 Ağustos 2026

Emre Nuhoğlu
*Ağustos 2026 — turnuva-kazanma sürümü*

## v5'te ne değişti

*Omurga aynı: "şişmiş potta tek per = bluff-catcher" (kök hata). v5 kitabın PREFLOP gücünü korur ve teşhisin eksik yarısını — postflop/ICM/multiway icrasını — ekler. Mevcut bölümlerin (B0–B10) tabloları kişisel olarak kalibre; v4'ten AYNEN korundu, yalnız v3→v4 renumber'ından kalan alt-numara hataları düzeltildi. Yeni bölümler numara kaydırmamak için SONA eklendi. Her yeni sayı \`(kalibre et)\` slotudur — uydurma aralık/SPR/yüzde yok.*

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

### 5.2 3-bet = JAM

Bu bantta 3-bet commit demektir. "3-bet edip fold" diye bir yapı yok — doğrudan all-in gidiyorsun.

| Kime karşı | Jam aralığı |
|---|---|
| **Erken pozisyon açılışı** | TT+, AQs+, AKo |
| **CO / BTN açılışı** | 88+, ATs+, AQo+, KQs |
| **Chip leader / jam'e fold eden** | 77+, A9s+, AJo+, KQs (genişletilmiş) |

**Bu bantta FLAT YOK.** Ne SB'den, ne BB'den, ne IP'den. Bölüm 4'ün geniş flat tabloları 100bb+ dünyasına aittir.

### 5.3 Jam'e karşı call

Rakip all-in geldiyse: 99+, AJs+, AQo+. Bundan aşağısı 28bb'de call değil — ya jam'i sen yapacaksın ya fold edeceksin.

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

### 11.3 River — thin value: kim öder

Kitabın tüm value filtreleri şimdiye kadar NEGATİF idi ("ödemezse jam etme"). Pozitif komut eksikti: ödeyen varsa İNCE value BET ET. Bu, B0 c.2'nin öbür yüzü — filtre aynı, yön ters.

| El sınıfım | Rec / station | Reg |
|---|---|---|
| **Top pair iyi kicker** | Küçük value bet (öder) | İnce bet / check-call |
| **İkinci per** | Küçük value bet | Check-call |
| **İki per, küçük board** | Value bet | Check-call — reg bu boyutu daha iyisiyle öder |

**Kural:** "Benden zayıf hangi el ödüyor?" sorusunun cevabı VARSA — ince de olsa — bet. Rec-ağırlıklı Main'de kaçan thin value doğrudan chip kaybıdır.

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

**Drill eklentisi (2026-08-10, 2. seans)** — leak'in asıl yaşadığı COVER EDİLMEYEN taraf: cover edilmiyorsun, 22bb BB, baloncuk, geniş kısa jam — **A9s ve KTo'yu da** foldladın ("range yetersiz"). İkisi de call (KTo, geniş 13bb BTN jam'ine ~%54, fiyat için ~%44 gerekir; A9s daha da net). **Cover edilmeyen fold reflexi leak'in yapışkan yarısı** — aynı seansta covered/not-covered kontrastından sonra bile sürdü. Yani cover edilmeyen CALL tabanı *en az* buradaki A9s/KTo kadar geniş; tam aralık hâlâ \`(kalibre et)\` (ICMIZER), ama hata call değil fold reflexi. Masa cue'su: **jam'e fold basmadan önce "cover ediliyor muyum?" — Hayır ise call sandığından çok daha geniş.**

### 12.2 Final table — rol matrisi

FT'de doğru davranış EL'e değil STACK ROLÜNE bağlıdır.

| Rolüm | Masada benden kısa VAR | Masada benden kısa YOK |
|---|---|---|
| **Kısa (<15bb)** | İlk jam'ci ol, ladder'ı gözle | Katlanma — doğru jam; kilitlenme de bir busttur (blind'lere) |
| **Orta** | En kırılgan — kimin bust'ını beklediğini bil, cover edenle pot açma | Fiilen en kısasın — 12.5: herkes kilitliyse jam aralığını GENİŞLET, katlanma |
| **Cover eden derin** | Agresyon serbest — cezasız ez | Chip-leader'la ego savaşına girme |

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

**Kural:** Stack-off için ham out değil, NUT out say. *(Örnek el: Emre'nin kendi PLO elinden vaka gelince işlenecek — uydurma yok.)*

*NOT: Pozisyona göre PLO açılış/3-bet chartı BİLİNÇLİ yazılmadı — Emre'nin PLO icra verisi yok, generic chart de-kalibre eder. Bu katman drill'de sınıf-bazlı kalibre edilir.*

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

### 18.1 İki neden — c-bet neden atılır

| Neden | Ne zaman geçerli | Rec sahada |
|---|---|---|
| **Value** | Senden zayıf el ödeyecek | Güçlü — station öder, ince value bile alınır |
| **Fold equity** | Daha iyi el atar / draw call'ı bırakır | ZAYIF — station atmaz |

Rec sahada c-bet'in ağırlık merkezi value'ya kayar. "Fold equity için" c-bet'i yalnız gerçek katlanabilir eller (agresör reg, kuru board, sıkı BB) için sakla.

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

### 18.3 Hangi elle c-bet — dört sınıf

| El sınıfı | Kuru board | Islak board |
|---|---|---|
| **Value (top pair+, overpair, set, iki per)** | Bet (1/3, ince value dahil) | Bet (2/3, potu şişirmek istediğin el) |
| **Gerçek/nut draw (nut FD, OESD+overcard)** | Bet (semi-bluff, 1/3) | Bet (2/3, tamamlanınca çok ödenir) |
| **Hava + backdoor/bloker** | Küçük range-bet (aralığın parçası) | BIRAK — check-fold; board rakibe yaradı |
| **Marjinal showdown (2. per, zayıf top pair)** | Öderse küçük bet, yoksa check-back | Check-back — pot kontrol |

Islak board'a havayla barrel = kök hatanın flop tohumu. Board rakibin aralığına yaradıysa, senin havanın fold equity'si yoktur; küçük value + gerçek draw dışında check.

### 18.4 Boyut mantığı — 1/3, 2/3, check-back

- **1/3 (küçük):** kuru board range-bet; ucuz fold equity + ince value; **river'da check-fold lüksünü korur** (B11: potu her büyüttüğünde bu lüksü satın alma gücün azalır — bu B11 kuralı flop'ta başlar).
- **2/3+ (büyük):** ıslak board polarize; yalnız potu şişirmek İSTEDİĞİN eller — güçlü value + nut-draw.
- **Check-back:** marjinal showdown value; ıslak/multiway board; pot kontrol + bedava kart hakkı.

> **Boyut = river planının fiyatı. Flop'ta 2/3 attıysan turn'de ikinci fıçının ve river'ın SPR'ını daralttın; havayla o yola girme (B11.1).**

### 18.5 IP vs OOP

| Durum | IP (pozisyon sende) | OOP (pozisyon rakipte) |
|---|---|---|
| **C-bet serbestliği** | Daha serbest — kontrol + equity realize | Daha seçici |
| **Tercih hattı** | Kuru board range-bet, ıslak board polarize | Check-call / check-raise'i tercih et; OOP havayla range-bet TUZAK |
| **Kök hata riski** | Düşük | Yüksek — OOP şişmiş pot en kötü bluff-catcher noktası |

OOP c-bet, station'a value keser ama agresöre kapıyı kapatmaz; marjinal ellerle check-call, güçlülerle check-raise daha sağlamdır. OOP havayla c-bet, seni pozisyonsuz şişmiş pota sokar — kök hatanın ta kendisi.

### 18.6 Multiway istisnası

3+ yollu potta bu bölüm askıya alınır: **flop c-bet frekansı ÇÖKER** (B13.1). Range-bet multiway yok; yalnız güçlü value + gerçek nut-draw. Ayrıntı Bölüm 13.

### 18.7 Kalibrasyon

*(kalibre et: son 20 elini üç board dokusuna ayır — kuru/orta/ıslak — ve her dokuda kendi c-bet frekansını çıkar. Rec-ağırlıklı masada GTO baseline'ının ~%10–15 altını hedefle; fold equity düşük çünkü.)*

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

### 19.2 Gecikmiş c-bet — PFR flop check, turn bet

Gecikmiş c-bet: PFR'sın, flop'u check-back ettin (pot kontrol / bıraktın / tuzak), turn'de bet. Bu, B18'in otomatik c-bet refleksinin DİSİPLİNLİ zıddıdır: geniş flop c-bet'i atlayıp turn'de bir SEBEP çıkınca bet edersin.

| Turn'de bet et — sebep | Bet etme |
|---|---|
| Turn'de geliştin (per/draw yakaladın) | Sebepsiz — flop give-up'ını turn'de bloat'a çevirme |
| Villain ikinci kez check etti (zayıflık) | Villain turn'de lead/check-raise eğilimli |
| Turn kartı senin aralığına yaradı | Equity yok + fold equity yok |

Marjinal yapılı elle: flop check → turn ince value bet (sana check gelirse). Küçük boyut.

### 19.3 Probe bet — flop check-check sonrası OOP bet

Probe: flop check-check gitti (OOP'sun, PFR flop'u check-back etti = zayıflık, aralığı capped). Turn'de (ya da river'da) sen bet atarsın.

> **PFR flop'u bıraktıysa güçlü ellerin çoğu flop'ta bet ederdi → aralığı capped. Turn'de bu capped aralığa OOP bet ile inisiyatifi al.**

| Probe AÇIK | KAPALI (→ check) |
|---|---|
| PFR check-back'i zayıflık (rec norm) | PFR güçlüyle tuzak için check-back (nadir, kurnaz reg) |
| Turn kartı senin aralığına yaradı | Turn kötü, aralığını ıskaladı |
| Elin showdown value'suz (bet en iyi kullanım) | Marjinal yapılı el → check-call ile realize et |

Boyut: küçük-orta. "Flop check-check → turn/river çalınır mı" sorusunun cevabı: evet, capped aralığa karşı.

### 19.4 Stab — IP, check gelince potu al

Stab: IP'sin, herkes sana check etti (flop ya da turn). Kimsenin istemediği potu küçük bet ile al. En temel, en düşük riskli inisiyatif aracı — sana check geldiyse herkes zaten zayıflık gösterdi.

| Stab AÇIK | KAPALI |
|---|---|
| HU, sana check geldi, herhangi equity/fold equity | Multiway (biri tuzakta) |
| Checker'ların ıskaladığı board | Checker'ların aralığına çarpan board |
| Boyut küçük | Check-raise eğilimli villain / SD value'lu el bedava showdown istiyor |

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

Her satır aynı yönü söyler: potu küçült, chip'i showdown'a bağlama, marjinali kes. Kademe = risk primi.

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

### 26.1 Eşik, KENDİ aralık kompozisyonunla kalibre olur

"Her per call, her draw devam" ezberi bağlantılı board'da otomatik over-defense üretir — ve sebep yalnız rakibin güçlenmesi değil, SENİN devam edebilir kombolarının çoğalmasıdır. Bağlantı arttıkça eşik yükselir çünkü kendi draw sayın artar; eşik kalibrasyonunun yarısı rakip, yarısı kendi kompozisyonun.

### 26.2 Check-raise adayı: net-kararlı runout ara

Check-raise büyük pot kurar; büyük pot net-kararlı runout ister:

- Domine EDEN draw'lar (üstten çift + FD tipleri) call'da kalır — pahalı pot kurmadan realize eder.
- Per yakalayınca no-man's land'e düşecek marjinal adaylar raise'lenmez.
- Dezavantaj board'unda hiçbir el value-raise'e hevesli değilse raise düğümünü komple kapat (rakip fark edip uyum yapana dek) — B18-tarafındaki "boyu ağaçtan at"ın savunma yüzü.

### 26.3 Notları board'a göre değil YÜZLEŞİLEN BOYA göre tut

Farklı c-bet boylarına karşı savunmalar birbiriyle kıyaslanamaz; desen ancak aynı boya karşı board'lar yan yana konunca çıkar. Flop'ta yüzleşilen boy turn eşiklerini belirlediğinden, notlar sokak değil HAT bazlı tutulur: "flop-1/3 → turn-2/3" ayrı bir kutu, "flop-2/3 → turn-jam" ayrı.

### 26.4 River savunması: frekans-önce, kombo-sonra

River'da devam kararı iki eksenlidir; B11.2 yalnız fiyat eksenini verdi, ikincisi eksikti:

1. **Fiyat ekseni (B11.2):** boyut → gereken devam %'si.
2. **Frekans ekseni (yeni):** gereken %'yi kendi aralığındaki sınıf-yüzdelerine eşle — "top-pair+ elimin yarısıysa hepsiyle call; üçte-ikisiyse bir sınıf buda." Frekansı sınıf-%'yle tuttur; sınıf İÇİ seçimi bloker kuralı belirler (value-bloke → call, blöf-bloke → fold), read ancak bunun üstüne gelir.

> **River'da fiyat "ne kadar savunmam gerek"i, frekans "elimin neresinden keseceğim"i söyler. B11.2'nin eksik yarısı ikincisidir.**

### 26.5 Kalibrasyon + Cheat kartı

*(kalibre et: üç eşik — devam / value-raise / blöf-raise — board-boy hattına göre solver'dan çıkar; kullandığın solver'da caller (savunan taraf) düğümünü locate et.)*

| Yüzleşilen boy | Oku | Not tutumu |
|---|---|---|
| **Flop 1/3 (range-bet)** | Geniş devam eşiği; check-raise SIK/geniş (rakip aralığı geniş-zayıf) | Kendi draw sayınla kalibre |
| **Flop 2/3 (polarize)** | Dar devam; check-raise dar/polarize; value-raise eşiği net | Hat bazlı ("2/3 → turn ?") |
| **River (herhangi)** | Fiyat + frekans iki eksen | Sınıf-% eşleme |
| **Dezavantaj board** | Raise düğümünü kapat | Bilinçli maliyet notu |

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

## Bölüm 28 — PKO / Bounty: Ödülü Çipe Çevir, Aralığı Koru

*Kitap klasik NLH/ICM ekseninde; bounty (PKO) katmanı yoktu. PKO'da ikinci bir para birimi vardır — kelle — ve o birim her preflop kararı değiştirir. Sayısal her slot \`(kalibre et)\`.*

### 28.0 Çekirdek: kelleyi HER kararda çipe çevir

Her elde kellenin o anki çip-değerini yeniden hesapla, bir elde yapıp diğerinde unutma — PKO'da ROI'yi en ucuz artıran şey preflop'a daha çok zaman ayırmaktır. Çipe çevrilmiş kelle, cover ettiğin oyuncuya karşı **negatif risk primi** üretir (B12'nin tersi): onu elemek çip + kelle kazandırır, o yüzden ona karşı call/agresyon eşiğin DÜŞER.

> **PKO'da cover ettiğin oyuncu senin için NEGATİF prim taşır: onu elemeye chipEV'den daha gevşek oynarsın. ICM'in aynası — orada busta kaybını, burada kelle-kazancını fiyatlarsın.**

### 28.1 Cover eden VPIP'i genişler — ama solver'ın uç flat'lerini alma

Bounty-farkındalı solver'lar kelleyi prim gibi modeller ve popülasyonun çok üstünde gevşek flat'ler (normalde flat edilmeyecek çok zayıf suited eller) verir. Prensibi al (genişle), spesifik gevşek kombo'yu alma — canlı saha o gevşekliği ödüllendirmez.

### 28.2 Geniş flat/limp aralığını NUT'la koru — "dead money olma"

Arkanda reopen/squeeze edebilen varsa, geniş VPIP aralığına AA/KK/AK gibi nut'lar koy ki squeeze seni cezalandıramasın. Bu, B4.4 "3-bet ya da fold" refleksine PKO istisnasıdır: kelle avlamak için geniş girersin ama aralık korunmuş olmalı.

### 28.3 Cover ediyorsan LIMP-ağırlıklı VPIP

Limp daha az çip riske atar → daha çok el oyna → daha çok kelle avla. Raise yalnız fold equity üretiyorsa mantıklı; çok kısa/kelleli stack arkandayken raise fold equity üretmez (çok kısa stack'ler jam'le çok sık reopen eder — kalibre et), o yüzden limp baskın. Limp aralığı geniş ama korunmuş (28.2).

### 28.4 "Kellesi ≈ kendi stack'i" çok kısa stack = ekstrem izolasyon dinamiği

Herkes planını onu izole etmek üzere kurar. Kısa stack'in POZİSYONU stratejini belirler:

- **BB'deyse** (aksiyonu kapatır, reopen ihtimali en düşük) → önündekiler daha çok 3-bet edebilir.
- **SB/erken pozisyondaysa** (jam'le reopen eder) → önündekiler flat aralığını nut'la korur.

İzolasyon boyu kendi derinliğine bağlı: derinsen "first-raise" (kısa reopen edemesin diye gereği kadar büyük — reopen'ı reddet); sığsan min-raise (kısanın jam'le reopen'ına izin ver, çek).

### 28.5 Mystery bounty = preflop oyunu / sandbox

Devasa varyans (büyük roll şart), popülasyon postflop clueless. Ana edge: IP geniş limp + korunmuş aralık; insanlar limp düğümünü kötü oynar. Kelle değeri ITM boyunca DEĞİŞİR (büyük kelleler çekildikçe düşer); kaba hesap = canlı kelle toplamı / kalan oyuncu.

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

Pair+FD, combo draw — ince tek-pair'den DEĞİL (deep'te üç sokak value alamaz). Set'leri slowplay = numaradan değil, aralığın bir kısmı turn baskısını kaldıramadığı için range-koruması.

### 29.4 Deep two-pair savunması: seni cep çifti değil, temiz iki-per korur

Derinde seni bluff-catcher pocket pair değil, düz tamamlamayan / cooler'lanmayan iki-per savunur. Turn/river'da "bu iki-per temiz mi?" diye sor — bağlantısız, kart-vermeyen bir yapı mı *(kalibre et)*.

### 29.5 Deep exploit: float → turn check-through → river stab

Zayıf/nitty deep rakibin flop c-bet'ini call'la (float); turn check-check geldiğinde ve rakip preflop çok sıkı savunmuşsa (orta-el check-call'ları yok → river'da overfold'a yatkın) river'da küçük IP stab (delayed stab) kötü-kurulmuş savunmaya over-perform eder. *(kalibre et — genel prensip; spesifik el kopyalanmaz.)*

*Kök hata bağı: derin oyun kök hatanın en pahalı sürümüdür — yüksek SPR'de tek perle stack-off, en çok chip'i en yanlış yere bağlar. Guard: SPR>8'de top per/overpair varsayılanı pot-kontrol.*

---

## Bölüm 30 — Micro Stack 4-12bb: Jam/Fold İnceltmeleri ve Eşitsiz-Masa Overlay

*B3 <15bb jam/fold'u verir; bu bölüm 4-12bb bandını ve EŞİTSİZ masada (biri seni cover, biri senden kısa) ortaya çıkan overlay dinamiğini inceltir. Doktrin B3'ün kendisi: bu bantta açış = jam ya da fold, flat-call ağaca girmez.*

### 30.0 4-12bb açış = JAM ya da fold (küçük-RFI yok)

Bu derinlikte ince-boy açış tablosu yoktur — açtığında ya jam'lersin ya fold. Küçük çiftler (22-66) bu bandın EN DERİN yaşayan JAM'lerindendir *(derinliği kalibre et)*, DEFEND edilmez. Fold-equity + çağrılınca canlı equity ikisi de gerçek; jam'i "polarize spew" sanmak MTT refleksi hatasıdır.

### 30.1 Raise+ ile karşılaşınca: jam-or-fold, flat DEĞİL

Fringe eller (Q9s/J9s/QTo tipi orta-broadway/zayıf-suited sınır elleri) bu derinlikte CALL değil **jam-or-fold**'dur — ~10-12bb'de re-jam min-raise üstünde gerçek fold-equity taşır; 4-8bb'de jam canlı equity + ölü parayla çalışır, fold-equity beklenmez. Micro stack'in büyük bir kısmını "flop görmek için" fringe'le call etmek, jam/fold doktrininin tam önlediği klasik hatadır.

> **Micro stack'te "her şeye committed"sin ama bu "flop görmek için call et" demek değil — commit'ini JAM olarak al: fold-equity + canlı equity birlikte çalışır; flat-call fold-equity'yi tamamen bırakır, canlı equity'ni ise kısa stack'le kötü realize eder.**

### 30.2 Bu bantta BB min-raise'e karşı geniş savunur — ama savunma = jam/fold kararı

Deep ters-implied cezası olmadığından BB fiyatı iyidir; ama "savunma" burada da jam-ya-fold ekseninde okunur (uygun elle re-jam, gerisi fold), sokak sokak flat-call postflop değil. *(kalibre et — eşik sizing'e bağlı.)*

### 30.3 Eşitsiz stack: tek-aralığa-karşı-büyük-pot etkisi

Jam et, biri call diğerleri fold → tek aralığa karşı büyük pot. Caller arkadaki reopen/squeeze tehdidiyle daha sıkı call ettiği için jam aralığın GENİŞLER; etki derinlik arttıkça büyür (genel ICM/multiway baskı mantığı).

### 30.4 Bu bantta flat/trap YOK

4-12bb'de flat-call ağaca girmediği için flat>3-bet trap'i de yoktur (trap/flat hatları 30bb+ derin oyuna aittir; B5'in 25-30bb bandı da jam/fold'dur). Arkanda kısa bir jam-happy stack olsa bile plan jam-or-fold'dur; "yem yutulsun diye" flat'lemek kök-hatanın micro sürümüdür (fold-equity'siz çip bağlama).

*Kök hata bağı: micro bantta tehlike fazla stack-off değil, fazla FOLD (jam/re-jam yeterince geniş değil) ve fringe'le flat-call. Fringe-JAM standart jam/fold doktrinidir, leak değil — leak flat-call/limp hatlarıdır.*

---

## Bölüm 31 — BB-Ante Heads-Up ve HU-vs-GTO

*Kitapta HU/3-handed sıfır satır — oysa her turnuvanın en pahalı iki-üç saati (HU + short-handed FT) bu dinamiktir; SHR/HR final'lerinin doğrudan parası.*

### 31.0 BB-ante HU'da BTN %100 VPIP

Ölü ante sayesinde yarım BB'yle ~3BB'lik pota IP giriyorsun — pokerin en iyi fiyatlarından; hiçbir el fold edilmez. Rakibin bir BTN fold'u görmek başlı başına tell: çöpü aralığından çıkmış + HU tecrübesizliğini ilan etmiş demektir.

### 31.1 Derinlik-orantılı limp/raise — orta-sığ derinliğin üstünde IP jam kaybolur

HU BTN stratejisi derinlikle kayar: derinleştikçe raise payı büyür (çok derin ~raise-only), sığlaştıkça limp ağırlıklaşır *(kalibre et)*. Kritik sürpriz: orta-sığ derinliğin üstünde IP jam kaybolur, limp öne geçer *(eşiği kalibre et; ~15-16bb civarı)*; çok sığda bile polar limp aralığı var — trap + çöp *(derinliği kalibre et)*. Pasif rakibe karşı dengeyi bırak: çöpü limp'le, iyiyi raise'le.

### 31.2 Capped kalmanın gerçek maliyeti

Trips/nut'un bir kısmını check-call'da bırakma sebebi over-bluff korkusu DEĞİL: capped olduğunu bilen rakip value HACMİNİ ve BOYUNU büyütür (ince value'yla overbet/jam açılır) + o hacme eşlik eden blöfleri ekler → EV iki kanaldan birden akmayı keser. Uncapped check-call her iki kapıyı kapatır.

> **Capped kalmanın cezası "blöf yerim" değil, "rakip hem daha çok hem daha büyük value bet'ler + yanına blöf ekler"dir. Uncapped aralık iki kapıyı birden kapatır.**

### 31.3 Check-back inşası: gecikmiş blöf zorunluluğu

HU'da flop check-back MTT'den kat kat sık; check-back aralığına bilinçli sıfır-showdown aday koymazsan river'a hep A-high/per taşırsın → aralığın value-oriented olur, rakip sana blöf atmayı KESER (blöf iştahı aralığının şeklinin fonksiyonu) ve kendi value'n ödeme bulamaz. Gecikmiş blöfü rakibin fold'larını unblock eden ellerden seç; gizli tuzak: run-out'a düşen orta kart (9 gibi) rakibin A9/K9 check-back sınıfına sessiz per verebilir — o board'larda blöfü kıs; ama elinde 9 varsa tam tersine o kombolar bloke olur (rakibin A9/K9'u azalır), blöf adayın güçlenir.

### 31.4 HU'da lead/donk YOK — asimetri ölçüsü (B19.1'in HU teyidi)

MTT'de lead'i doğuran aralık ASİMETRİSİdir; HU'da iki taraf aynı geniş aralıkla oynar → düşük/bağlantılı board "senin" değildir, lead aralığı kurulamaz. Preflop yüzü: HU BTN limp'ine iso ≠ BvB SB-limp'ine iso'nun aynası (pozisyonlar ters, OOP iso daha güçlü el ister). B19'un ICM-lead istisnaları ring içindir; HU'ya taşınmaz.

### 31.5 Rainbow = büyük boy evi (B18.2 istisna kutusu — HU)

Büyük c-bet boyları en çok RAINBOW/statik board'da toplanır, flush-draw'lu board'da değil. Geniş-aralıklı HU/blind-savaşı potlarında overpair/en-iyi-Tx avantajın büyükse kuru board'da büyük-polar boy doğru — B18.2'nin "kuru=1/3" ezberi burada equity-edge'i masada bırakır. (B18.2-EK ile aynı düzeltmenin HU uygulaması.)

### 31.6 Hızlandırılmış tell/meta döngüsü

VPIP ~%100 olduğu için eğilimler birkaç elde açığa çıkar; TEK data-point'ten agresif projeksiyon meşru. Teller üç kategoride okunur — timing (snap vs tank), sizing (küçük/orta/büyük), hat (hangi sokakta pasif/agresif) — her birinden bir okuma: derin stack'te bir çifti düşünmeden flat'leyen pot-kontrol ilan etmiştir (timing); A-high ince value'yu check eden rakibin OOP aralığı olması gerekenden güçlüdür, kendi ince value'nu kıs (hat); river'da seni pota iten snap-call "raise menümde yok" itirafıdır, OOP ince value boyunu büyüt (timing+sizing). Üst kural: MTT eliti bile HU'da göreli acemi; ama senin basitleştirmelerini de senden tecrübeli biri aynı şekilde avlar.

### 31.7 Küçük çift jam derinde yaşar + orta boy yasağı

BB'den open'a karşı küçük çiftler HU'da beklenenden derin stack'lerde jam adayı kalır — rejam-vs-open hesaplarında şaşırtıcı derinliğe kadar +EV *(hangi çift hangi derinliğe kadar — kendi solver'ında kalibre et)*; ama tam stratejide ~20-25bb üstünde jam yerine raise standarttır *(kalibre et)*. Yine de MTT refleksiyle "bu derinlikte çiftle jam mi?" şaşkınlığı HU push/fold bandında leak. "Kabiliyetli ama ileri olmayan" oyuncunun sık görülen bir teli makul-orta boy (yarım-pot): ya minik (geniş zayıf-value) ya büyük/polar (nut+blöf) — ortası iki işlevi de öldürür.

*Kök hata bağı: HU/short-handed FT kitabın en büyük yapısal boşluğuydu; komple yeni bölüm. Kök hata omurgası burada da geçerli (capped kalma + tek per disiplini), yalnız aralıklar HU-geniş.*
`;function S(e){return e.replace(/\*\*(.+?)\*\*/g,"$1").replace(/`(.+?)`/g,"$1").replace(/\*(.+?)\*/g,"$1").trim()}function Je(e){const i=l=>l.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(t=>S(t)),n=i(e[0]),r=e.slice(2).map(i);return{headers:n,rows:r}}function D(e){const i=He.split(`
`),n=[];let r=!1;for(const l of i){if(l.startsWith("## ")&&!l.startsWith("### ")){if(l.slice(3).trim().startsWith(e)){r=!0;continue}if(r)break}r&&n.push(l)}return n.join(`
`)}function bn(){const e=D("Bölüm 0"),i=[];let n=null;for(const r of e.split(`
`)){const l=r.match(/^\s*(\d+)\.\s+\*\*(.+?)\*\*\s*$/);l?(n&&i.push(n),n={n:Number(l[1]),rule:S(l[2]),context:""}):n&&r.trim()&&!r.trim().startsWith("#")&&!r.trim().startsWith("*")&&(n.context=(n.context+" "+S(r.trim())).trim())}return n&&i.push(n),i.filter(r=>r.n>=1&&r.n<=15)}function ae(e){const i=e.split(`
`),n=[];let r=null;for(const l of i)l.startsWith("### ")?(r&&n.push({title:r.title,body:r.body.join(`
`)}),r={title:l.slice(4).trim(),body:[]}):r&&r.body.push(l);return r&&n.push({title:r.title,body:r.body.join(`
`)}),n}function K(e,i){const n=ae(e).find(r=>r.title.startsWith(i));return n?n.body:""}function F(e){const i=e.split(`
`),n=[];for(const r of i)if(r.trim().startsWith("|"))n.push(r);else if(n.length)break;return n.length>=2?Je(n):null}function da(e,i){const n=i?/^\s*\d+\.\s+(.*)$/:/^\s*[-*]\s+(.*)$/;return e.split(`
`).map(r=>r.match(n)).filter(r=>!!r).map(r=>S(r[1]))}function Ve(){const e=D("Bölüm 4"),n=K(e,"4.3").split(`
`),r=[];let l=null;const t=()=>{var k,m,b,f,c;if(!l)return;const s=l.buf.join(`
`);let o=F(s),d=[];if(o)d=l.buf.filter(p=>/^\*\*[^*]*flat/i.test(p.trim())).map(p=>S(p));else{const p=(k=s.match(/VALUE:\*\*\s*(.+)/i))==null?void 0:k[1],y=(m=s.match(/BL[ÖO]F:\*\*\s*(.+)/i))==null?void 0:m[1];if(p||y){const x=((f=(b=/yaln[ıi]z\s+(BB|SB|BTN|CO)/i.exec(l.label))==null?void 0:b[1])==null?void 0:f.toUpperCase())||"BB";o={headers:["Pozisyon","VALUE","BLÖF"],rows:[[x,S(p||""),S(y||"")]]};const T=(c=s.match(/Flat:\*\*\s*(.+)/i))==null?void 0:c[1];T&&(d=[`${x} flat: ${S(T)}`])}}o&&r.push({opener:Qe(l.label),label:l.label,table:o,flats:d}),l=null};for(const s of n){const o=s.trim().match(/^\*\*(.+?açılışına karşı.*?)\*\*$/);o?(t(),l={label:o[1],buf:[]}):l&&l.buf.push(s)}return t(),r}function Qe(e){return e.split("açılışına")[0].trim().replace(/\s*\/\s*/g,"/")}function mn(){const e=D("Hızlı Referans");return{decisionOrder:da(K(e,"Karar sırası"),!0),sizes:F(K(e,"Boyutlar")),band2530:F(K(e,"25")),postflop:F(K(e,"Postflop")),icm:F(K(e,"ICM")),multiway:F(K(e,"Multiway")),tilt:F(K(e,"Tilt")),redFlags:da(K(e,"Kırmızı bayraklar"),!1)}}function cn(){const e=D("Bölüm 10");return ae(e).map(i=>({title:i.title,questions:da(i.body,!0)})).filter(i=>i.questions.length>0)}function P(e,i){const n=D(e),r=i?K(n,i):n;return F(r)}function yn(){const e=P("Bölüm 5","5.1");return e?e.rows.map(i=>({position:i[0],range:i[1]})):[]}function pn(){const e=P("Bölüm 5","5.2");return e?e.rows.map(i=>({vs:i[0],range:i[1]})):[]}function fn(){const i=K(D("Bölüm 5"),"5.3").match(/geldiyse:\s*([^.]+)\./);return i?S(i[1]):""}function hn(){const e=P("Bölüm 4","4.5");if(!e)return null;const i=k=>{const m=e.rows.find(b=>b[0].toLowerCase().startsWith(k));return m?m[1]:""},n=k=>k.split(/[—;:]/)[0].trim(),r=n(i("4-bet value")),l=n(i("4-bet karışım")),t=n(i("4-bet blöf")),s=n(i("flat")),o=i("fold"),d=l?l.split(",").map(k=>`${k.trim()} (karışım)`).join(", "):"";return{value:d?`${r}, ${d}`:r,blof:t,flat:s,foldNote:o}}function vn(){const e=K(D("Bölüm 4"),"4.6"),i=e.match(/VALUE:\*\*\s*(.+)/i),n=e.match(/BLÖF:\*\*\s*(.+)/i);return!i&&!n?null:{value:i?S(i[1]):"",blof:n?S(n[1]):""}}function gn(){return P("Bölüm 4","4.7")}function zn(){return P("Bölüm 14","14.1")}function Bn(){const i=K(D("Bölüm 14"),"14.1").match(/\*\*Kural:\*\*\s*(.+)/);return i?S(i[1]):""}function xn(){return P("Bölüm 11","11.1")}function An(){return P("Bölüm 6","6.2")}function jn(){return P("Bölüm 11","11.2")}function Kn(){return P("Bölüm 11","11.3")}function Tn(){return da(K(D("Bölüm 11"),"11.4"),!1)}function En(){return P("Bölüm 13","13.1")}function Sn(){return P("Bölüm 15","15.2")}const qe=[[/\bcheck-?raise\b/gi,"çek reyz"],[/\bcheck-?call\b/gi,"çek kol"],[/\bcheck-?fold\b/gi,"çek fold"],[/\bstack-?off\b/gi,"stek of"],[/\bsemi-?bluff\b/gi,"semi blaf"],[/\bbluff-?catcher\b/gi,"blaf keçır"],[/\bcoldcall\b/gi,"kold kol"],[/\bcbet\b/gi,"si bet"],[/\b5-?bet\b/gi,"beş bet"],[/\b4-?bet\b/gi,"dört bet"],[/\b3-?bet\b/gi,"üç bet"],[/(\d)\s?bb\b/gi,"$1 big blaynd"],[/\bOOP\b/g,"o o pi"],[/\bIP\b/g,"ay pi"],[/\bICM\b/g,"ay si em"],[/\bPLO\b/g,"pi el o"],[/\bNLH\b/g,"en el eyç"],[/\bBB\b/g,"big blaynd"],[/\bSB\b/g,"smol blaynd"],[/\bBTN\b/g,"batın"],[/\bUTG\b/g,"yu ti ci"],[/\bbluff\b/gi,"blaf"],[/\bvalue\b/gi,"velyu"],[/\bboard\b/gi,"bord"],[/\bflat\b/gi,"flet"],[/\bflop\b/gi,"flop"],[/\briver\b/gi,"rivır"],[/\bturn\b/gi,"törn"],[/\bcall\b/gi,"kol"],[/\braise\b/gi,"reyz"],[/\bsqueeze\b/gi,"skuiz"],[/\bgutshot\b/gi,"gatşat"],[/\brakeback\b/gi,"reykbek"],[/\bstack\b/gi,"stek"],[/\bbubble\b/gi,"babıl"],[/\bnut\b/gi,"nat"],[/\bkicker\b/gi,"kikır"],[/\brundown\b/gi,"randaun"],[/\bdangler\b/gi,"denglır"],[/\bwrap\b/gi,"rep"],[/\bstation\b/gi,"steyşın"],[/\bshowdown\b/gi,"şovdaun"],[/\bequity\b/gi,"ekvıti"]];function Ye(e){let i=e;for(const[n,r]of qe)i=i.replace(n,r);return i}class Ue{constructor(){q(this,"supported",typeof window<"u"&&"speechSynthesis"in window);q(this,"voice",null);this.supported&&(this.pickVoice(),window.speechSynthesis.onvoiceschanged=()=>this.pickVoice())}pickVoice(){const i=window.speechSynthesis.getVoices();this.voice=i.find(n=>n.lang==="tr-TR")||i.find(n=>n.lang.startsWith("tr"))||null}speak(i,n=1){return this.supported?(window.speechSynthesis.cancel(),new Promise(r=>{const l=new SpeechSynthesisUtterance(Ye(i));l.lang="tr-TR",this.voice&&(l.voice=this.voice),l.rate=n,l.pitch=1,l.onend=()=>r(),l.onerror=()=>r(),window.speechSynthesis.speak(l)})):Promise.resolve()}stop(){this.supported&&window.speechSynthesis.cancel()}}function Da(){return localStorage.getItem("ept:tts:mode")||"hd"}function Nn(e){localStorage.setItem("ept:tts:mode",e)}function Ge(e){let i=5381;for(let n=0;n<e.length;n++)i=i*33^e.charCodeAt(n);return"a"+(i>>>0).toString(36)}function ee(){return new Promise((e,i)=>{const n=indexedDB.open("ept-tts",1);n.onupgradeneeded=()=>n.result.createObjectStore("audio"),n.onsuccess=()=>e(n.result),n.onerror=()=>i(n.error)})}async function $e(e){try{const i=await ee();return await new Promise(n=>{const r=i.transaction("audio").objectStore("audio").get(e);r.onsuccess=()=>n(r.result||null),r.onerror=()=>n(null)})}catch{return null}}async function _e(e,i){try{(await ee()).transaction("audio","readwrite").objectStore("audio").put(i,e)}catch{}}async function Ze(e){try{const n=await fetch(`${typeof import.meta<"u"&&"/ept-trainer/"||"/"}tts/${e}.mp3`);if(!n.ok)return null;const r=await n.blob();return r.size<256||r.type&&!/audio|mpeg|octet/.test(r.type)?null:r}catch{return null}}async function ie(e){const i=Ge("v1|"+e);let n=await $e(i);if(n)return n;if(n=await Ze(i),!n)try{const r=await fetch("/api/tts",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:e})});r.ok&&(n=await r.blob())}catch{}return n&&_e(i,n),n}class We{constructor(){q(this,"web",new Ue);q(this,"audio",null)}get supported(){return this.web.supported||Da()==="hd"}stopAudio(){this.audio&&(this.audio.pause(),this.audio.src="",this.audio=null)}async speak(i,n=1){if(Da()!=="hd")return this.web.speak(i,n);const r=await ie(i);if(!r)return this.web.speak(i,n);await new Promise(l=>{this.stopAudio();const t=new Audio(URL.createObjectURL(r));t.playbackRate=n,t.onended=()=>l(),t.onerror=()=>l(),this.audio=t,t.play().catch(()=>l())})}stop(){this.stopAudio(),this.web.stop()}}let fa=null;function Xe(){return fa||(fa=new We),fa}function ai(e){return(e.match(/[^.!?]+[.!?]*/g)||[e]).map(i=>i.trim()).filter(Boolean)}async function ei(e,i){let n=0,r=0;const l=e.length;for(let t=0;t<e.length;t++)await ie(e[t])?n++:r++,i==null||i(t+1,l);return{ok:n,fail:r}}function ii({table:e}){return a.jsx("div",{className:"overflow-x-auto rounded-xl border border-surface-3",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{children:a.jsx("tr",{className:"bg-surface-2 text-left text-neutral-300",children:e.headers.map((i,n)=>a.jsx("th",{className:"px-3 py-2 font-medium",children:i},n))})}),a.jsx("tbody",{children:e.rows.map((i,n)=>a.jsx("tr",{className:"border-t border-surface-3 align-top",children:i.map((r,l)=>a.jsx("td",{className:l===0?"px-3 py-2 font-semibold text-neutral-100 whitespace-nowrap":"px-3 py-2 text-neutral-300",children:r},l))},n))})]})})}const w=["A","K","Q","J","T","9","8","7","6","5","4","3","2"],E=Object.fromEntries(w.map((e,i)=>[e,i]));function ni(e,i){const n=w[Math.min(e,i)],r=w[Math.max(e,i)];return e===i?`${n}${r}`:e<i?`${n}${r}s`:`${n}${r}o`}function ri(e,i){return E[e]<=E[i]?[e,i]:[i,e]}function ha(e){const i=e.trim().replace(/[–—]/g,"-").replace(/\s+/g,"");if(!i)return[];const n="[AKQJT98765432]";let r=i.match(new RegExp(`^(${n})\\1\\+$`));if(r){const l=[];for(let t=0;t<=E[r[1]];t++)l.push(`${w[t]}${w[t]}`);return l}if(r=i.match(new RegExp(`^(${n})\\1-(${n})\\2$`)),r){const[l,t]=[E[r[1]],E[r[2]]],s=[];for(let o=Math.min(l,t);o<=Math.max(l,t);o++)s.push(`${w[o]}${w[o]}`);return s}if(r=i.match(new RegExp(`^(${n})\\1$`)),r)return[`${r[1]}${r[1]}`];if(r=i.match(new RegExp(`^(${n})(${n})(s|o)\\+$`)),r){const[l,t,s]=[r[1],r[2],r[3]];if(E[l]>=E[t])return null;const o=[];for(let d=E[l]+1;d<=E[t];d++)o.push(`${l}${w[d]}${s}`);return o}if(r=i.match(new RegExp(`^(${n})(${n})(s|o)-(${n})(${n})(s|o)$`)),r){const[l,t,s,o,d,k]=[r[1],r[2],r[3],r[4],r[5],r[6]];if(l!==o||s!==k)return null;const m=[];for(let b=Math.min(E[t],E[d]);b<=Math.max(E[t],E[d]);b++)m.push(`${l}${w[b]}${s}`);return m}if(r=i.match(new RegExp(`^(${n})(${n})(s|o)$`)),r){const[l,t]=ri(r[1],r[2]);return[`${l}${t}${r[3]}`]}return null}function va(e,i){const n=new Set,r=[];if(!e)return{cells:n,notes:r};let l=e.trim();const t="[AKQJT98765432]";l=l.replace(new RegExp(`(${t}${t}[so]?)\\s*\\(\\s*kar[ıi]ş[ıi]m\\s*\\)`,"gi"),(s,o)=>{var d;return(d=ha(o))==null||d.forEach(k=>i==null?void 0:i.add(k))," "}),l=l.replace(new RegExp(`\\(\\s*(${t}${t}?[so]?)\\s*kar[ıi]ş[ıi]m\\s*\\)`,"gi"),(s,o)=>{var d;return(d=ha(o))==null||d.forEach(k=>i==null?void 0:i.add(k))," "}),l=l.replace(/\([^)]*\)/g," ");for(const s of l.split(",")){const o=s.trim().replace(/\.$/,"");if(!o||/^(yok|—|-)$/i.test(o))continue;const d=ha(o);d?d.forEach(k=>n.add(k)):(/[a-zçğıöşü]/i.test(o)&&o.length>3||o.length>1)&&r.push(o)}return{cells:n,notes:r}}const li={value:"bg-emerald-500 text-black font-semibold",mix:"bg-emerald-500/35 text-emerald-50 ring-1 ring-inset ring-emerald-400/70",blof:"bg-accent text-black font-semibold",flat:"bg-sky-600 text-white",fold:"bg-surface-2 text-neutral-600"};function ne({value:e,blof:i,flat:n,caption:r,compact:l,highlight:t,valueLabel:s,blofLabel:o}){const{catOf:d,notes:k}=u.useMemo(()=>{const c=new Set,p=va(e||"",c),y=va(i||""),x=va(n||""),T=[...p.notes,...y.notes,...x.notes];return{catOf:B=>p.cells.has(B)?"value":c.has(B)?"mix":y.cells.has(B)?"blof":x.cells.has(B)?"flat":"fold",notes:T}},[e,i,n]),m=[];for(let c=0;c<13;c++)for(let p=0;p<13;p++){const y=ni(c,p);m.push({code:y,label:w[Math.min(c,p)]+w[Math.max(c,p)],cat:d(y),pair:c===p})}const b=c=>m.some(p=>p.cat===c),f=l?"text-[7px]":"text-[9px] sm:text-[11px]";return a.jsxs("div",{children:[a.jsx("div",{className:"grid gap-[2px] rounded-lg bg-surface-3 p-[2px]",style:{gridTemplateColumns:"repeat(13, minmax(0, 1fr))"},children:m.map(c=>a.jsx("div",{title:c.code,className:"flex aspect-square items-center justify-center rounded-[3px] leading-none "+f+" "+li[c.cat]+(t&&c.code===t?" ring-2 ring-white ring-offset-1 ring-offset-surface-3 z-10 scale-110":c.pair?" ring-1 ring-inset ring-white/25":""),children:c.label},c.code))}),a.jsxs("div",{className:"mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-neutral-300",children:[b("value")&&a.jsx(ia,{cls:"bg-emerald-500",label:s||"Value 3-bet"}),b("mix")&&a.jsx(ia,{cls:"bg-emerald-500/35 ring-1 ring-inset ring-emerald-400/70",label:"Karışım"}),b("blof")&&a.jsx(ia,{cls:"bg-accent",label:o||"Blöf 3-bet"}),b("flat")&&a.jsx(ia,{cls:"bg-sky-600",label:"Flat (call)"}),!l&&a.jsx("span",{className:"text-neutral-500",children:"↗ suited · ↙ offsuit · köşegen çift"})]}),r&&a.jsx("p",{className:"mt-2 text-xs text-neutral-500",children:r}),k.length>0&&a.jsxs("p",{className:"mt-1 text-xs text-neutral-400",children:[a.jsx("span",{className:"text-neutral-500",children:"+ kitap notu:"})," ",k.join(", ")]})]})}function ia({cls:e,label:i}){return a.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[a.jsx("span",{className:"inline-block h-3 w-3 rounded-[3px] "+e}),i]})}const ti={A:14,K:13,Q:12,J:11,T:10,9:9,8:8,7:7,6:6,5:5,4:4,3:3,2:2},La={s:"♠",h:"♥",d:"♦",c:"♣"};function si(e){const i=e.trim().split(/[\s,]+/).map(k=>k.match(/^([AKQJT2-9])([shdc])$/i)).filter(Boolean).map(k=>({r:ti[k[1].toUpperCase()],s:k[2].toLowerCase()}));if(i.length<3)return[];const n=[],r={};for(const k of i)r[k.s]=(r[k.s]||0)+1;const[l,t]=Object.entries(r).sort((k,m)=>m[1]-k[1])[0];t>=3?n.push({label:`üç ${La[l]} — flush board`,wet:!0}):t===2?n.push({label:`iki ${La[l]} — flush draw'lı`,wet:!0}):n.push({label:"rainbow",wet:!1});const s={};for(const k of i)s[k.r]=(s[k.r]||0)+1;Object.values(s).some(k=>k>=2)&&n.push({label:"eşli",wet:!1});const o=[...new Set(i.map(k=>k.r))].sort((k,m)=>k-m),d=o[o.length-1]-o[0];return d<=4?n.push({label:"bağlantılı — kent'li",wet:!0}):d>=7&&n.push({label:"kuru",wet:!1}),n}const Fa=new Set(["A","K","Q","J","T","9","8","7","6","5","4","3","2"]),Ha={s:{sym:"♠",color:"#141414"},h:{sym:"♥",color:"#e5484d"},d:{sym:"♦",color:"#2f6df6"},c:{sym:"♣",color:"#1f9d55"}},re={sm:{w:34,r:12,big:18},md:{w:46,r:15,big:26},lg:{w:64,r:20,big:38}};function Ba({rank:e,suit:i,size:n="md"}){const r=Ha[i]||Ha.s,l=re[n],t=r.color;return a.jsxs("div",{className:"relative inline-flex shrink-0 flex-col items-center justify-center rounded-lg bg-white shadow-md",style:{width:l.w,height:Math.round(l.w*1.4)},children:[a.jsx("span",{className:"absolute left-1 top-0.5 font-bold leading-none",style:{fontSize:l.r,color:t},children:e}),a.jsx("span",{style:{fontSize:l.big,color:t,lineHeight:1},children:r.sym})]})}function oi({size:e="md"}){const i=re[e];return a.jsx("div",{className:"inline-flex shrink-0 items-center justify-center rounded-lg border border-surface-3 bg-surface-2 text-neutral-500",style:{width:i.w,height:Math.round(i.w*1.4),fontSize:i.r},title:"kitapta belirtilmemiş",children:"?"})}function di(e){return e.length>=3&&e[2]==="s"?["s","s"]:e.length>=3&&e[2]==="o"?["s","h"]:["s","h"]}function ki({code:e,size:i="md"}){const n=e.trim(),[r,l]=[n[0],n[1]],[t,s]=di(n),o=n[2]==="s",d=n[2]==="o";return a.jsxs("span",{className:"inline-flex items-end gap-1.5",children:[a.jsxs("span",{className:"flex gap-1",children:[a.jsx(Ba,{rank:r,suit:t,size:i}),a.jsx(Ba,{rank:l,suit:s,size:i})]}),(o||d)&&a.jsx("span",{className:"mb-1 rounded px-1.5 py-0.5 text-[10px] font-semibold "+(o?"bg-emerald-500/20 text-emerald-300":"bg-neutral-500/20 text-neutral-300"),children:o?"suited":"offsuit"})]})}function V({spec:e,size:i="md",label:n,texture:r}){const l=e.trim().split(/[\s,]+/).filter(Boolean),t=r?si(e):[];return a.jsxs("div",{children:[n&&a.jsx("div",{className:"mb-1 text-xs uppercase tracking-wide text-neutral-500",children:n}),a.jsx("div",{className:"flex flex-wrap items-end gap-1.5",children:l.map((s,o)=>{if(s==="??"||s==="?")return a.jsx(oi,{size:i},o);if(s.length>=2&&Fa.has(s[0])&&Fa.has(s[1]))return a.jsx(ki,{code:s,size:i},o);const d=s.match(/^([AKQJT2-9])([shdc])$/i);return d?a.jsx(Ba,{rank:d[1].toUpperCase(),suit:d[2].toLowerCase(),size:i},o):a.jsx("span",{className:"text-sm text-neutral-500",children:s},o)})}),t.length>0&&a.jsx("div",{className:"mt-1.5 flex flex-wrap gap-1.5",children:t.map((s,o)=>a.jsx("span",{className:"rounded-full px-2 py-0.5 text-[11px] "+(s.wet?"bg-accent-soft text-accent":"bg-surface-2 text-neutral-400"),children:s.label},o))})]})}function ui({data:e}){const[i,n]=u.useState(0),r=e.streets.slice(0,i+1).map(t=>t.add).filter(Boolean).join(" "),l=e.streets[i];return a.jsxs("div",{className:"card p-4",children:[a.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[a.jsx("span",{className:"text-sm font-semibold text-neutral-100",children:"🎬 Vaka oynatıcı"}),a.jsxs("span",{className:"text-xs text-neutral-500",children:[i+1,"/",e.streets.length," · ",l.name]})]}),r?a.jsx(V,{spec:r,size:"md",label:"Board",texture:!0}):a.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-600",children:"Board (preflop)"}),a.jsxs("div",{className:"mt-3 flex flex-wrap gap-4",children:[a.jsx(V,{spec:e.hero,size:"sm",label:e.heroLabel??"Sen"}),e.villain&&a.jsx(V,{spec:e.villain,size:"sm",label:e.villainLabel??"Rakip"})]}),a.jsx("p",{className:"mt-3 rounded-lg bg-surface-2 px-3 py-2 text-sm leading-relaxed text-neutral-200",children:l.note}),a.jsxs("div",{className:"mt-3 flex items-center gap-2",children:[a.jsx("button",{onClick:()=>n(t=>Math.max(0,t-1)),disabled:i===0,className:"btn-ghost px-3 py-1.5 text-sm",children:"← Geri"}),a.jsx("button",{onClick:()=>n(t=>Math.min(e.streets.length-1,t+1)),disabled:i===e.streets.length-1,className:"btn-accent px-3 py-1.5 text-sm",children:"Sonraki sokak →"})]})]})}function bi({v:e}){switch(e.kind){case"hand":return a.jsx(V,{spec:e.cards,size:e.size||"lg",label:e.label});case"board":return a.jsx(V,{spec:e.cards,size:e.size||"md",label:e.label??"Board",texture:!0});case"range":return a.jsx(ne,{value:e.value,blof:e.blof,flat:e.flat,caption:e.caption,compact:e.compact,valueLabel:e.valueLabel,blofLabel:e.blofLabel});case"replay":return a.jsx(ui,{data:e.replay})}}function mi({items:e}){return!e||e.length===0?null:a.jsx("div",{className:"space-y-4",children:e.map((i,n)=>a.jsx(bi,{v:i},n))})}function ci(){const e=u.useMemo(()=>Ve(),[]),[i,n]=u.useState(0),[r,l]=u.useState(0);if(e.length===0)return a.jsx("p",{className:"text-sm text-neutral-400",children:"Aralık grupları yüklenemedi."});const t=e[i];return a.jsxs("div",{className:"space-y-3",children:[a.jsxs("div",{children:[a.jsx("div",{className:"mb-1 text-xs uppercase tracking-wide text-neutral-500",children:"Kim açtı?"}),a.jsx("div",{className:"flex flex-wrap gap-2",children:e.map((s,o)=>a.jsx("button",{onClick:()=>{n(o),l(0)},className:o===i?"btn-accent px-3 py-1.5 text-sm":"btn-ghost px-3 py-1.5 text-sm",children:s.opener},o))})]}),a.jsx("div",{className:"text-xs text-neutral-500",children:t.label}),a.jsx("div",{className:"overflow-hidden rounded-xl border border-surface-3",children:a.jsxs("table",{className:"w-full text-sm",children:[a.jsx("thead",{children:a.jsx("tr",{className:"bg-surface-2 text-left text-neutral-300",children:t.table.headers.map((s,o)=>a.jsx("th",{className:"px-3 py-2 font-medium",children:s},o))})}),a.jsx("tbody",{children:t.table.rows.map((s,o)=>{const d=o===r;return a.jsx("tr",{onClick:()=>l(d?null:o),className:"cursor-pointer border-t border-surface-3 align-top transition "+(d?"bg-accent-soft ring-1 ring-accent":"hover:bg-surface-2"),children:s.map((k,m)=>a.jsx("td",{className:m===0?"px-3 py-2 font-semibold text-neutral-100 whitespace-nowrap":"px-3 py-2 "+(d?"text-neutral-100":"text-neutral-300"),children:k},m))},o)})})]})}),a.jsx("p",{className:"text-xs text-neutral-500",children:"Kendi pozisyonuna dokun — value ve blöf aralığın 13×13 grid'de renklensin."}),r!==null&&t.table.rows[r]&&a.jsxs("div",{className:"rounded-xl border border-surface-3 bg-surface-1 p-3",children:[a.jsxs("div",{className:"mb-2 text-sm font-semibold text-neutral-100",children:[t.table.rows[r][0]," · 3-bet aralığı"]}),a.jsx(ne,{value:t.table.rows[r][1],blof:t.table.rows[r][2]})]}),t.flats.length>0&&a.jsx("ul",{className:"space-y-1 text-xs text-neutral-400",children:t.flats.map((s,o)=>a.jsxs("li",{children:["• ",s]},o))})]})}const U=Xe(),yi=[.8,1,1.25,1.5],na=999;function pi(e){var i,n;return(((i=e.bullets)==null?void 0:i.length)??0)+((n=e.visuals)!=null&&n.length?1:0)+(e.table?1:0)+(e.rangeMatrix?1:0)+(e.ruleBox?1:0)}function fi({moduleId:e,onBack:i}){var Ca,Pa;const n=u.useMemo(()=>ze(e),[e]),[r,l]=u.useState(0),[t,s]=u.useState(!1),[o,d]=u.useState(!0),[k,m]=u.useState(1),[b,f]=u.useState(na),[c,p]=u.useState(-1),[y,x]=u.useState({i:0,n:0}),[T,I]=u.useState(()=>{const h=$a[e];return h&&!N("coldopen:done",[]).includes(e)?h:null}),B=u.useRef(!1),R=u.useRef(k),Z=u.useRef(o),ma=u.useRef(null);if(R.current=k,Z.current=o,u.useEffect(()=>()=>{B.current=!1,U.stop()},[]),u.useEffect(()=>{if(c<0||!ma.current)return;const h=ma.current.querySelector('[data-active="true"]');h==null||h.scrollIntoView({block:"center",behavior:"smooth"})},[c]),!n)return a.jsxs("div",{className:"p-4",children:[a.jsx("button",{className:"btn-ghost",onClick:i,children:"← Geri"}),a.jsx("p",{className:"mt-4 text-neutral-400",children:"Modül bulunamadı."})]});if(T)return a.jsx(Ae,{kavram:T,onStart:()=>{const h=N("coldopen:done",[]);h.includes(e)||C("coldopen:done",[...h,e]),I(null)}});const L=n.slides,A=L[r],se=r===L.length-1;let W=((Ca=A.bullets)==null?void 0:Ca.length)??0;const X=(Pa=A.visuals)!=null&&Pa.length?W++:-1,ca=A.table?W++:-1,ya=A.rangeMatrix?W++:-1,aa=A.ruleBox?W++:-1,Y=h=>h>=0&&h<b,j=h=>t&&h===c,Ea=h=>{if(h!==L.length-1)return;const g=N("lessons:done",[]);g.includes(n.id)||C("lessons:done",[...g,n.id])},Sa=()=>{B.current=!1,U.stop(),s(!1),p(-1),f(na)},oe=async h=>{B.current=!0,s(!0);for(let g=h;g<L.length&&B.current;g++){l(g),Ea(g);const Q=ai(L[g].narration),pa=pi(L[g]);f(0),p(-1);for(let J=0;J<Q.length&&B.current;J++){Q[J+1]&&ei([Q[J+1]]);const Oa=pa===0?-1:Math.min(pa-1,Math.floor(J/Q.length*pa));p(Oa),f(de=>Math.max(de,Oa+1)),x({i:J+1,n:Q.length}),await U.speak(Q[J],R.current)}if(f(na),p(-1),!B.current||!Z.current)break}B.current=!1,s(!1),x({i:0,n:0})},Na=h=>{Sa();const g=Math.min(Math.max(h,0),L.length-1);l(g),f(na),Ea(g)},ea=h=>"reveal-in transition-all duration-300 "+(t?h?"opacity-100":"opacity-40":"opacity-100");return a.jsxs("div",{className:"flex min-h-full flex-col",children:[a.jsxs("div",{className:"flex items-center gap-3 px-4 pt-4",children:[a.jsxs("button",{className:"btn-ghost px-3 py-1.5 text-sm",onClick:i,children:["← ",n.id]}),a.jsxs("div",{className:"min-w-0",children:[a.jsx("div",{className:"truncate text-sm font-semibold",children:n.title}),a.jsxs("div",{className:"text-xs text-neutral-500",children:[n.chapter," · ",n.minutes," dk"]})]})]}),a.jsx("div",{className:"flex gap-1 px-4 pt-3",children:L.map((h,g)=>a.jsx("div",{className:"h-1 flex-1 rounded-full "+(g<=r?"bg-accent":"bg-surface-3")},g))}),a.jsxs("div",{ref:ma,className:"flex-1 space-y-4 px-4 py-5",children:[a.jsx("h2",{className:"anim-fade text-xl font-bold",children:A.title}),a.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.jsx("button",{onClick:()=>t?Sa():oe(r),className:t?"btn-ghost":"btn-accent",disabled:!U.supported,children:t?"⏸ Durdur":"▶ Anlat"}),a.jsxs("button",{onClick:()=>d(h=>!h),className:"btn px-3 py-2 text-sm "+(o?"bg-accent-soft text-accent border border-accent":"bg-surface-2 text-neutral-400 border border-surface-3"),title:"Slaytları otomatik ilerlet",children:["⟳ Oto ",o?"açık":"kapalı"]}),a.jsx("div",{className:"flex overflow-hidden rounded-xl border border-surface-3",children:yi.map(h=>a.jsxs("button",{onClick:()=>m(h),className:"min-h-[44px] px-3.5 py-2.5 text-xs "+(h===k?"bg-accent text-black":"bg-surface-2 text-neutral-400"),children:[h,"×"]},h))})]}),t&&y.n>0&&a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"live-pulse text-xs text-accent",children:"● anlatılıyor"}),a.jsx("div",{className:"h-1 flex-1 overflow-hidden rounded-full bg-surface-3",children:a.jsx("div",{className:"h-full rounded-full bg-accent transition-all duration-300",style:{width:`${y.i/y.n*100}%`}})})]}),!U.supported&&a.jsx("p",{className:"text-xs text-neutral-500",children:"Bu tarayıcı sesli anlatımı desteklemiyor."}),A.bullets&&a.jsx("ul",{className:"space-y-2",children:A.bullets.map((h,g)=>Y(g)?a.jsxs("li",{"data-active":j(g),className:"reveal-in flex gap-2 rounded-lg px-2 py-1 text-[15px] leading-relaxed transition-all duration-300 "+(j(g)?"bg-accent-soft ring-1 ring-accent/40":t?"opacity-40":""),children:[a.jsx("span",{className:"mt-1 "+(j(g)?"text-accent":"text-accent/70"),children:j(g)?"▶":"•"}),a.jsx("span",{children:h})]},g):null)}),A.visuals&&Y(X)&&a.jsx("div",{"data-active":j(X),className:ea(j(X))+(j(X)?" rounded-xl ring-1 ring-accent/30 -mx-1 px-1 py-1":""),children:a.jsx(mi,{items:A.visuals})}),A.table&&Y(ca)&&a.jsx("div",{"data-active":j(ca),className:ea(j(ca)),children:a.jsx(hi,{table:A.table})}),A.rangeMatrix&&Y(ya)&&a.jsx("div",{"data-active":j(ya),className:ea(j(ya)),children:a.jsx(ci,{})}),A.ruleBox&&Y(aa)&&a.jsxs("div",{"data-active":j(aa),className:ea(j(aa))+" rounded-xl border-l-4 border-accent bg-accent-soft px-4 py-3 text-[15px] font-medium leading-relaxed"+(j(aa)?" ring-1 ring-accent/50":""),children:["📌 ",A.ruleBox]})]}),a.jsxs("div",{className:"flex items-center justify-between gap-3 px-4 pb-4",children:[a.jsx("button",{className:"btn-ghost",onClick:()=>Na(r-1),disabled:r===0,children:"← Önceki"}),a.jsxs("span",{className:"text-xs text-neutral-500",children:[r+1," / ",L.length]}),se?a.jsx("button",{className:"btn-accent",onClick:i,children:"Bitir ✓"}):a.jsx("button",{className:"btn-accent",onClick:()=>Na(r+1),children:"Sonraki →"})]})]})}function hi({table:e}){const i=u.useMemo(()=>P(e.section,e.sub),[e.section,e.sub]);return a.jsxs("div",{className:"space-y-2",children:[i?a.jsx(ii,{table:i}):a.jsx("p",{className:"text-sm text-neutral-500",children:"Tablo yüklenemedi."}),e.caption&&a.jsx("p",{className:"text-xs italic text-neutral-500",children:e.caption})]})}function vi({onDone:e}){const i=u.useMemo(()=>Ta(),[]),[n,r]=u.useState(0),[l,t]=u.useState(!1),[s,o]=u.useState(0);if(i.length===0)return a.jsxs("div",{className:"flex flex-col items-center gap-4 p-8 text-center",children:[a.jsx("div",{className:"text-4xl",children:"👍"}),a.jsx("p",{className:"text-neutral-300",children:"Bugün tekrar zamanı gelen konu yok."}),a.jsx("button",{onClick:e,className:"btn-accent px-4 py-2",children:"İlerlemeye dön"})]});if(n>=i.length)return a.jsxs("div",{className:"flex flex-col items-center gap-4 p-8 text-center",children:[a.jsx("div",{className:"text-4xl",children:"🎉"}),a.jsxs("p",{className:"text-neutral-200",children:["Bugünlük tekrar bitti — ",s," konu."]}),a.jsx("button",{onClick:e,className:"btn-accent px-4 py-2",children:"İlerlemeye dön"})]});const d=i[n];function k(m){Me(d.id,m),ba(),o(b=>b+1),t(!1),r(b=>b+1)}return a.jsxs("div",{className:"flex flex-col gap-4 p-4",children:[a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("button",{onClick:e,className:"text-neutral-400",children:"← İlerleme"}),a.jsxs("span",{className:"text-neutral-500",children:[n+1," / ",i.length]})]}),a.jsx("div",{className:"h-1 overflow-hidden rounded bg-surface-2",children:a.jsx("div",{className:"h-full bg-accent transition-all",style:{width:`${n/i.length*100}%`}})}),a.jsxs("div",{className:"card min-h-[180px] p-5",children:[a.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:d.kavram}),a.jsx("p",{className:"mt-2 text-lg leading-relaxed text-neutral-100",children:d.soru_ozeti}),l&&a.jsxs("div",{className:"mt-4 border-t border-surface-3 pt-3",children:[a.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:"Not / doğru"}),a.jsxs("p",{className:"mt-1 text-sm text-neutral-300",children:[d.not||"—",a.jsxs("span",{className:"ml-2 text-neutral-500",children:["(son sonuç: ",d.sonuc,")"]})]})]})]}),l?a.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[a.jsx("button",{onClick:()=>k("wrong"),className:"btn-ghost py-3 text-red-300",children:"✗ Bilemedim"}),a.jsx("button",{onClick:()=>k("half"),className:"btn-ghost py-3 text-accent",children:"◐ Yarım"}),a.jsx("button",{onClick:()=>k("correct"),className:"btn-ghost py-3 text-emerald-300",children:"✓ Bildim"})]}):a.jsx("button",{onClick:()=>t(!0),className:"btn-accent py-3 text-base",children:"Göster"})]})}const gi=[{n:7,short:"Vaka Otopsileri (+WSOP Day 1A)"},{n:11,short:"Şişmiş Pot · Turn · River"},{n:12,short:"ICM & Final Table"},{n:13,short:"Multiway Pot"},{n:14,short:"40–70bb Köprü"},{n:15,short:"PLO Turnuva Katmanı"},{n:16,short:"Zihinsel Omurga"},{n:17,short:"WSOP Online ME Day 2 ★"},{n:18,short:"Flop C-bet"},{n:19,short:"İnisiyatif Hatları"},{n:20,short:"Risk Premium"},{n:21,short:"ICM Postflop"},{n:22,short:"ICM Ladder & Zaman"},{n:23,short:"Saha Okuma & Exploit"},{n:24,short:"Edge Premium"},{n:25,short:"Kanıt mı Anlatı mı"},{n:26,short:"C-bet'e Karşı: Caller Disiplini"},{n:27,short:"Solver'ı Çalışmak"},{n:28,short:"PKO / Bounty Doktrini"},{n:29,short:"Deep Stack & Yüksek-SPR"},{n:30,short:"Micro Stack 4-12bb"},{n:31,short:"BB-Ante Heads-Up"}];function zi(e){const i=e.split(`
`),n=[];let r=[];const l=()=>{const s=r.join(" ").trim();s&&n.push({k:"p",text:s}),r=[]};let t=0;for(;t<i.length;){const s=i[t].trim();if(s===""||s==="---")l(),t++;else if(s.startsWith("### "))l(),n.push({k:"h3",text:s.slice(4).trim()}),t++;else if(s.startsWith("|")){l();const o=[];for(;t<i.length&&i[t].trim().startsWith("|");)o.push(i[t++].trim());const d=k=>k.replace(/^\|/,"").replace(/\|$/,"").split("|").map(m=>S(m));n.push({k:"table",headers:d(o[0]),rows:o.slice(2).map(d)})}else if(s.startsWith("> "))l(),n.push({k:"quote",text:s.slice(2).trim()}),t++;else if(/^([-*]|\d+\.)\s/.test(s)){l();const o=[];for(;t<i.length&&/^([-*]|\d+\.)\s/.test(i[t].trim());)o.push(i[t++].trim().replace(/^([-*]|\d+\.)\s/,""));n.push({k:"list",items:o})}else r.push(s),t++}return l(),n}function ra({text:e}){const i=e.split(/(\*\*[^*]+?\*\*|\*[^*]+?\*)/g).filter(Boolean);return a.jsx(a.Fragment,{children:i.map((n,r)=>n.startsWith("**")&&n.endsWith("**")?a.jsx("b",{children:n.slice(2,-2)},r):n.startsWith("*")&&n.endsWith("*")?a.jsx("i",{className:"text-neutral-400",children:n.slice(1,-1)},r):a.jsx("span",{children:n},r))})}function Bi({title:e,onDone:i}){const n=u.useMemo(()=>zi(D(e)),[e]);return a.jsxs("div",{className:"flex flex-col gap-3 p-4",children:[a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("button",{onClick:i,className:"text-neutral-400",children:"← Bölümler"}),a.jsx("span",{className:"font-semibold text-neutral-100",children:"📖 Kitap"}),a.jsx("span",{className:"w-16"})]}),a.jsx("h1",{className:"text-base font-semibold leading-snug text-neutral-100",children:e}),n.map((r,l)=>r.k==="h3"?a.jsx("h2",{className:"mt-2 text-sm font-semibold text-accent",children:r.text},l):r.k==="quote"?a.jsx("blockquote",{className:"border-l-2 border-accent bg-accent-soft px-3 py-2 text-[13px] font-medium leading-relaxed text-accent",children:a.jsx(ra,{text:r.text})},l):r.k==="list"?a.jsx("ul",{className:"ml-1 space-y-1",children:r.items.map((t,s)=>a.jsxs("li",{className:"flex gap-2 text-[13px] leading-snug text-neutral-200",children:[a.jsx("span",{className:"shrink-0 text-accent",children:"•"}),a.jsx("span",{children:a.jsx(ra,{text:t})})]},s))},l):r.k==="table"?a.jsx("div",{className:"overflow-x-auto",children:a.jsxs("table",{className:"w-full border-collapse text-[12px]",children:[a.jsx("thead",{children:a.jsx("tr",{children:r.headers.map((t,s)=>a.jsx("th",{className:"border border-surface-3 bg-surface-2 px-2 py-1 text-left font-semibold text-neutral-300",children:t},s))})}),a.jsx("tbody",{children:r.rows.map((t,s)=>a.jsx("tr",{children:t.map((o,d)=>a.jsx("td",{className:"border border-surface-3 px-2 py-1 align-top text-neutral-200",children:a.jsx(ra,{text:o})},d))},s))})]})},l):a.jsx("p",{className:"text-[13px] leading-relaxed text-neutral-300",children:a.jsx(ra,{text:r.text})},l))]})}const le="leakcard:date";function xi(){var i;const e=((i=Xa()[0])==null?void 0:i.kavram)||"";return/icm|cover/i.test(e)?"cover":"pot"}function te(){return new Date().toISOString().slice(0,10)}function Ai(){return N(le,"")===te()}function Ja(){const e=Math.random()<.45,i=4+Math.floor(Math.random()*60),n=8+Math.floor(Math.random()*90),r=i/(i+n),l=e||r>=.4;return{potBb:i,behindBb:n,threeBet:e,bloated:l}}function ji(){const[e,i]=u.useState(Ai()?"hidden":"card"),[n]=u.useState(()=>xi()),r=u.useRef(null);if(u.useEffect(()=>{var t,s;e!=="hidden"&&((s=(t=r.current)==null?void 0:t.querySelector("button"))==null||s.focus())},[e]),e==="hidden")return null;const l=()=>{C(le,te()),ba(),i("hidden")};return a.jsx("div",{ref:r,role:"dialog","aria-modal":"true","aria-label":"Günün kartı",onKeyDown:t=>{var k;if(t.key!=="Tab")return;const s=(k=r.current)==null?void 0:k.querySelectorAll("button, input, textarea, a[href]");if(!s||s.length===0)return;const o=s[0],d=s[s.length-1];t.shiftKey&&document.activeElement===o?(t.preventDefault(),d.focus()):!t.shiftKey&&document.activeElement===d&&(t.preventDefault(),o.focus())},className:"fixed inset-0 z-50 flex flex-col bg-surface-0/95 backdrop-blur",children:a.jsx("div",{className:"mx-auto flex h-full w-full max-w-md flex-col",children:e==="card"?n==="cover"?a.jsx(Ti,{onDrill:()=>i("drill"),onDone:l}):a.jsx(Ki,{onDrill:()=>i("drill"),onDone:l}):n==="cover"?a.jsx(Ei,{onDone:l}):a.jsx(Si,{onDone:l})})})}function Ki({onDrill:e,onDone:i}){return a.jsxs("div",{className:"flex flex-1 flex-col justify-center gap-6 p-6",children:[a.jsx("div",{className:"text-center text-xs uppercase tracking-[0.2em] text-accent",children:"Günün kartı"}),a.jsx("div",{className:"card border-l-4 border-accent p-6",children:a.jsxs("p",{className:"text-lg leading-relaxed",children:[a.jsx("b",{className:"text-accent",children:"EĞER"})," pot şişmiş (3-bet+ pot ya da stack'imin ~%40'ı ortada)"," ",a.jsx("b",{className:"text-accent",children:"VE"})," elimde tek per var,",a.jsx("br",{}),a.jsx("b",{className:"text-accent",children:"O ZAMAN"})," içimden ",a.jsx("b",{children:'"bluff-catcher"'})," derim: check/call ya da fold —"," ",a.jsx("b",{children:"asla value raise."})]})}),a.jsx("p",{className:"text-center text-[11px] text-neutral-600",children:"Kitabın tanımı: şişmiş = 3-bet+ pot. “~%40 stack ortada” pratik bir sezgi (kitap dışı)."}),a.jsx("p",{className:"text-center text-sm text-neutral-500",children:"Yüksek sesle bir kez oku. Masada bu cümle otomatik ateşlenecek."}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("button",{onClick:i,className:"btn-accent w-full py-3 text-base",children:"Prova ettim ✓"}),a.jsx("button",{onClick:e,className:"btn-ghost w-full py-3",children:"⏱ 90sn cue drill →"})]})]})}function Ti({onDrill:e,onDone:i}){return a.jsxs("div",{className:"flex flex-1 flex-col justify-center gap-6 p-6",children:[a.jsx("div",{className:"text-center text-xs uppercase tracking-[0.2em] text-accent",children:"Günün kartı"}),a.jsx("div",{className:"card border-l-4 border-accent p-6",children:a.jsxs("p",{className:"text-lg leading-relaxed",children:[a.jsx("b",{className:"text-accent",children:"EĞER"})," jam'e fold basmak üzereysem,",a.jsx("br",{}),a.jsx("b",{className:"text-accent",children:"O ZAMAN"})," önce sınıflarım: ",a.jsx("b",{children:"seni cover eden mi, senin cover ettiğin mi?"})," Cover edilmiyorsam → ",a.jsx("b",{children:"call çok daha geniş."})]})}),a.jsx("p",{className:"text-center text-[11px] text-neutral-600",children:"Kitap (B12): cover'sız aralık cover'lıdan asla sıkı olamaz — kaybetsen de bust olmazsın."}),a.jsx("p",{className:"text-center text-sm text-neutral-500",children:"Yüksek sesle bir kez oku. Masada bu cümle otomatik ateşlenecek."}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("button",{onClick:i,className:"btn-accent w-full py-3 text-base",children:"Prova ettim ✓"}),a.jsx("button",{onClick:e,className:"btn-ghost w-full py-3",children:"⏱ 90sn cue drill →"})]})]})}const O=12;function Va(){const e=12+Math.floor(Math.random()*60),i=3+Math.floor(Math.random()*40),n=Math.random()<.5?e+i:Math.max(3,e-i);return{heroBb:e,jammerBb:n,covered:n>=e}}function Ei({onDone:e}){const[i,n]=u.useState(0),[r,l]=u.useState(()=>Va()),[t,s]=u.useState(null),[o,d]=u.useState(0),k=t===r.covered,m=i>=O;function b(c){s(c),c===r.covered&&d(p=>p+1)}function f(){if(i+1>=O){n(O);return}n(c=>c+1),l(Va()),s(null)}return m?a.jsxs("div",{className:"flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center",children:[a.jsx("div",{className:"text-5xl",children:"🎯"}),a.jsxs("p",{className:"text-lg text-neutral-100",children:[o,"/",O," doğru"]}),a.jsx("p",{className:"text-sm text-neutral-500",children:"Jam'e fold basmadan önce: cover ediliyor muyum? Hayır → call çok daha geniş."}),a.jsx("button",{onClick:e,className:"btn-accent px-6 py-3",children:"Bitir ✓"})]}):a.jsxs("div",{className:"flex flex-1 flex-col gap-5 p-6",children:[a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("span",{className:"text-neutral-500",children:"Cue drill"}),a.jsxs("span",{className:"text-neutral-400",children:[i+1," / ",O]})]}),a.jsxs("div",{className:"card p-5",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("span",{className:"rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent",children:["Sende ",r.heroBb,"bb"]}),a.jsxs("span",{className:"text-sm text-neutral-400",children:["jam atan ",r.jammerBb,"bb"]})]}),a.jsx("div",{className:"mt-3 text-sm text-neutral-400",children:"Bubble. Jam sana geldi."})]}),t===null?a.jsxs("div",{children:[a.jsx("div",{className:"mb-2 text-center text-[15px] font-medium",children:"Sınıfla: bu jam…"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("button",{onClick:()=>b(!0),className:"btn-ghost py-4 text-base",children:"Beni cover ediyor"}),a.jsx("button",{onClick:()=>b(!1),className:"btn-ghost py-4 text-base",children:"Ben cover ediyorum"})]})]}):a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx("div",{className:"rounded-xl px-4 py-3 text-sm font-medium "+(k?"bg-emerald-500/15 text-emerald-300":"bg-red-500/15 text-red-300"),children:r.covered?"Cover ediliyorsun — kaybedersen bust. Call sert daralır.":"Cover edilmiyorsun — kaybetsen de bust olmazsın. Call sandığından çok daha geniş."}),a.jsx("button",{onClick:f,className:"btn-accent py-3 text-base",children:i+1>=O?"Bitir":"Sonraki →"})]}),a.jsx("button",{onClick:e,className:"btn-ghost mt-auto w-full py-3",children:"atla"})]})}function Si({onDone:e}){const[i,n]=u.useState(0),[r,l]=u.useState(()=>Ja()),[t,s]=u.useState("pot"),[o,d]=u.useState(null),[k,m]=u.useState(null),[b,f]=u.useState(0),c=o===r.bloated,p=k===r.bloated,y=c&&p,x=i>=O;function T(R){d(R),s("class")}function I(R){m(R),c&&R===r.bloated&&f(Z=>Z+1),s("fb")}function B(){if(i+1>=O){n(O);return}n(R=>R+1),l(Ja()),d(null),m(null),s("pot")}return x?a.jsxs("div",{className:"flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center",children:[a.jsx("div",{className:"text-5xl",children:"🎯"}),a.jsxs("p",{className:"text-lg text-neutral-100",children:[b,"/",O," doğru"]}),a.jsx("p",{className:"text-sm text-neutral-500",children:"Şişmiş potta tek per = bluff-catcher. Bu refleksi masaya götür."}),a.jsx("button",{onClick:e,className:"btn-accent px-6 py-3",children:"Bitir ✓"})]}):a.jsxs("div",{className:"flex flex-1 flex-col gap-5 p-6",children:[a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("span",{className:"text-neutral-500",children:"Cue drill"}),a.jsxs("span",{className:"text-neutral-400",children:[i+1," / ",O]})]}),a.jsxs("div",{className:"card p-5",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("span",{className:"rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent",children:["Pot ",r.potBb,"bb"]}),a.jsxs("span",{className:"text-sm text-neutral-400",children:["arkanda ",r.behindBb,"bb"]})]}),r.threeBet&&a.jsx("div",{className:"mt-2 inline-block rounded-full bg-red-500/15 px-2 py-0.5 text-xs text-red-300",children:"3-bet'li pot"}),a.jsx("div",{className:"mt-3 text-sm text-neutral-400",children:"Elin: tek per (overpair)"})]}),t==="pot"&&a.jsxs("div",{children:[a.jsx("div",{className:"mb-2 text-center text-[15px] font-medium",children:"Pot şişmiş mi?"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("button",{onClick:()=>T(!0),className:"btn-ghost py-4 text-base",children:"Evet, şişmiş"}),a.jsx("button",{onClick:()=>T(!1),className:"btn-ghost py-4 text-base",children:"Hayır"})]})]}),t==="class"&&a.jsxs("div",{children:[a.jsx("div",{className:"mb-2 text-center text-[15px] font-medium",children:"Tek per'in sınıfı?"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("button",{onClick:()=>I(!0),className:"btn-ghost py-4 text-base",children:"Bluff-catcher"}),a.jsx("button",{onClick:()=>I(!1),className:"btn-ghost py-4 text-base",children:"Value"})]})]}),t==="fb"&&a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("div",{className:"rounded-xl px-4 py-3 text-sm font-medium "+(y?"bg-emerald-500/15 text-emerald-300":"bg-red-500/15 text-red-300"),children:[a.jsx("div",{children:r.bloated?"Şişmiş pot → tek per BLUFF-CATCHER.":"Şişmemiş → tek per hâlâ value/showdown."}),!y&&a.jsx("div",{className:"mt-1 font-normal opacity-90",children:c?`Pot okuman doğru, sınıflama yanlış: ${r.bloated?"bluff-catcher":"value/showdown"}.`:p?"Sınıflaman doğru, pot okuması yanlıştı.":"Pot okuması da sınıflama da yanlıştı."})]}),a.jsx("button",{onClick:B,className:"btn-accent py-3 text-base",children:i+1>=O?"Bitir":"Sonraki →"})]}),a.jsx("button",{onClick:e,className:"btn-ghost mt-auto w-full py-3",children:"atla"})]})}const G=[{id:"vaka1",title:"Vaka 1 — A4s river call",setup:"$50K High Roller. Board bölüşmeye açık — chop mekaniği masada. River'da rakip all-in geldi. Elin A4s.",hero:"A4s",board:"",options:["Hero-call","Fold"],correct:1,rule:"Chop'lar jam atmaz: rakip all-in geldiyse bölüşen eli aralığından çıkarmıştır — jam seni geçen eldir. Bir mekaniği görmek yetmez; rakibin hamlesi o mekanikle uyumlu mu diye sor. 📌 Chop varken jam = seni geçmiş el.",selfExplain:"Chop mekaniğini doğru gördün — peki hangi filtreyi atladın?",concept:"kök-hata"},{id:"vaka2",title:"Vaka 2 — KTo top pair",setup:"$10K 6-max. Islak board, top pair (KT) flopladın. OOP'sun, rakip cbet attı. Sıra sende.",hero:"KTo",board:"",options:["Check-raise all-in","Check-call, sonra değerlendir"],correct:1,rule:"Tek per stack-off yakıtı değil. Islak boardda top pair büyük pot başlatıcı değildir; stack'i sen başlatınca seni ödeyen aralık senden iyi. Şişmiş pota giden yol elini bluff-catcher'a çevirir. 📌 Top pair islak boardda: check-call, başlatma.",selfExplain:"Top pair güçlü göründü — pot büyüyünce elinin sınıfı ne oldu?",concept:"kök-hata"},{id:"vaka3",title:"Vaka 3 — AA river jam",setup:"Board 2-4-5, flop+turn value bet (ikisi de doğruydu). River 6 geldi — senden zayıf hiçbir el artık ödemez. Elin AA. Rakip check etti.",hero:"AA",board:"2c 4d 5s ?? 6h",options:["Kalan stack'i jam","Check"],correct:1,rule:"River'da senden zayıf el ödemeyecekse jam value değildir. O river'da 3'lü/kent/set seni geçmiş, tek per pas — value target yok. Kötü river'da overpair: küçük pota check-call, büyük pota check-fold. 📌 Ödeyecek zayıf el yoksa jam yok.",selfExplain:"Flop+turn value doğruydu — river 6'da tam olarak ne değişti?",concept:"kök-hata"},{id:"vaka4",title:"Vaka 4 — Senin elin (dün)",setup:"6-max. BB'de T6s, BTN min-raise, call. Flop A-T-3, BTN 1/3 pot, call (çift 10). Turn 5, check-check. River T → board A-T-3-5-T, sende trip 10 ama kicker 6. Check ettin, BTN thin bet. Sıra sende.",hero:"Th 6h",board:"Ac Ts 3d 5c Td",options:["Check-raise all-in","Check-call — bluff-catcher"],correct:1,rule:"Senden zayıf hiçbir el all-in'i ödemez: her 10 senin 6 kicker'ını geçer, boat'lar zaten önde. Bu runout'ta trip'in bluff-catcher — check-call, blöfleri içeride tut. Check-raise all-in blöfleri fold ettirir, seni yalnız geçen el öder. 📌 Ödeyecek zayıf el yoksa raise yok (cümle 2 = Vaka 2).",selfExplain:"Trip 10 güçlü hissettirdi — o board'da kaç el senin 6 kicker'ını GEÇİYOR, kaçı GERİDE kalıp öder?",concept:"kök-hata",beyondBook:!0}];function Ni({onBack:e}){const[i,n]=u.useState(0),[r,l]=u.useState(null),[t]=u.useState(()=>N("autopsy:done",!1)),s=G[i],o=r!==null,d=i>=G.length;function k(b){if(o||(l(b),t))return;const f=b===s.correct;ba(),Wa({kavram:s.concept,soru_ozeti:`Otopsi: ${s.title}`,sonuc:f?"correct":"wrong",not:s.rule,severity:"tournament_life"})}function m(){l(null),i+1>=G.length&&!t&&C("autopsy:done",!0),n(b=>b+1)}return d?a.jsxs("div",{className:"flex flex-col items-center gap-4 p-8 text-center",children:[a.jsx("div",{className:"text-5xl",children:"🔬"}),a.jsx("p",{className:"text-neutral-200",children:"Vakalar işlendi. Kök hata hep aynıydı."}),a.jsx("p",{className:"text-sm text-neutral-500",children:"Tek per'in şişmiş/multiway potta yanlış sınıflandırılması. Masaya bu refleksi götür."}),a.jsx("button",{onClick:e,className:"btn-accent px-6 py-3",children:"← Derse dön"})]}):a.jsxs("div",{className:"flex min-h-full flex-col gap-4 p-4",children:[a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("button",{onClick:e,className:"text-neutral-400",children:"← Ders"}),a.jsxs("span",{className:"text-neutral-500",children:[i+1," / ",G.length]})]}),t&&a.jsx("div",{className:"rounded-lg bg-surface-2 px-3 py-2 text-xs text-neutral-400",children:"Tekrar oynatım — puanlanmaz; kendine açıklamaya odaklan."}),a.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.jsx("h1",{className:"text-xl font-bold",children:s.title}),s.beyondBook?a.jsx("span",{className:"rounded border border-dashed border-accent/50 bg-accent-soft px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent",children:"Kitap dışı · senin elin"}):a.jsx("span",{className:"rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300",children:"Kitaptan · Bölüm 7"})]}),a.jsxs("div",{className:"card p-4",children:[a.jsx("div",{className:"flex items-center justify-between gap-3",children:a.jsx(V,{spec:s.hero,size:"md",label:"Elin"})}),s.board&&a.jsx("div",{className:"mt-3",children:a.jsx(V,{spec:s.board,size:"sm",label:"Board",texture:!0})}),a.jsx("p",{className:"mt-3 text-[15px] leading-relaxed text-neutral-200",children:s.setup})]}),o?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"rounded-xl px-4 py-3 text-sm font-medium "+(r===s.correct?"bg-emerald-500/15 text-emerald-300":"bg-red-500/15 text-red-300"),children:[r===s.correct?"✓ Doğru — ":"✗ ","Doğru hat: ",a.jsx("b",{children:s.options[s.correct]})]}),a.jsx("div",{className:"rounded-xl border-l-4 border-accent bg-accent-soft px-4 py-3 text-sm leading-relaxed",children:s.rule}),a.jsxs("div",{className:"card p-3",children:[a.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:"Kendine açıkla"}),a.jsx("p",{className:"mt-1 text-sm text-neutral-300",children:s.selfExplain}),a.jsx("textarea",{rows:2,placeholder:"Sesli ya da yazılı — hangi ipucunu kaçırdın?",className:"mt-2 w-full resize-none rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"})]}),a.jsx(Pi,{hand:s},s.id),a.jsx("button",{onClick:m,className:"btn-accent py-3 text-base",children:i+1>=G.length?"Bitir":"Sonraki vaka →"})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"text-center text-sm text-neutral-500",children:"Önce SEN karar ver:"}),a.jsx("div",{className:"grid grid-cols-1 gap-2",children:s.options.map((b,f)=>a.jsx("button",{onClick:()=>k(f),className:"btn-ghost py-3 text-[15px]",children:b},f))})]})]})}function Ci(e){return e<1?0:e<=4?1:e<=8?2:3}function Pi({hand:e}){const[i,n]=u.useState(""),[r,l]=u.useState(""),[t,s]=u.useState(()=>{const m=N("spr-kalibrasyon",[]).find(b=>b.id===e.id);return m?m.spr:null}),o=u.useMemo(()=>P("Bölüm 11","11.0"),[]);function d(){const m=Number(i),b=Number(r);if(!isFinite(m)||m<=0||!isFinite(b)||b<0)return;const f=Math.round(b/m*10)/10;s(f);const c=N("spr-kalibrasyon",[]).filter(p=>p.id!==e.id);C("spr-kalibrasyon",[...c,{id:e.id,pot:m,stack:b,spr:f}]),Wa({kavram:"spr-kalibrasyon",soru_ozeti:`SPR biç: ${e.title}`,sonuc:"correct",not:`flop pot ${m}bb, kalan stack ${b}bb → SPR ${f}`})}const k=t!==null&&o?o.rows[Ci(t)]:null;return a.jsxs("div",{className:"card p-3",children:[a.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:"SPR biç (B11.0 · isteğe bağlı)"}),a.jsx("p",{className:"mt-1 text-xs text-neutral-500",children:"Hafızandan gir: floptaki pot ve arkanda kalan stack (bb). Hatırlamıyorsan boş bırak — sayı uydurma."}),a.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[a.jsx("input",{value:i,onChange:m=>n(m.target.value),inputMode:"decimal",placeholder:"flop pot (bb)",className:"w-full min-w-0 rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),a.jsx("input",{value:r,onChange:m=>l(m.target.value),inputMode:"decimal",placeholder:"kalan stack (bb)",className:"w-full min-w-0 rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),a.jsx("button",{onClick:d,className:"btn-ghost shrink-0 px-3 py-2 text-sm",children:"Hesapla"})]}),t!==null&&a.jsxs("div",{className:"mt-3 text-sm",children:[a.jsxs("div",{className:"font-semibold text-accent",children:["SPR ≈ ",t]}),k?a.jsxs("div",{className:"mt-1 rounded-lg bg-surface-2 px-3 py-2 text-xs leading-relaxed text-neutral-300",children:[a.jsx("b",{children:k[0]})," · ",k[1]," → ",k[2]]}):a.jsx("p",{className:"mt-1 text-xs text-neutral-500",children:"Bant tablosu yüklenemedi (B11.0)."})]})]})}const Qa="journal",Oi=[{v:.6,label:"%60"},{v:.8,label:"%80"},{v:.95,label:"%95"}];function Mi({onDone:e}){const[i,n]=u.useState(()=>N(Qa,[])),[r,l]=u.useState(""),[t,s]=u.useState(""),[o,d]=u.useState(""),[k,m]=u.useState(.8),[b,f]=u.useState(null),c=i.filter(y=>y.day===z(-1)).length;function p(){if(!r.trim()||!t.trim()){f({ok:!1,text:"El ve Aksiyon zorunlu — ikisini de doldur."});return}const y=[{day:z(0),el:r,aksiyon:t,gerekce:o,guven:k},...i];n(y),C(Qa,y),ba(),l(""),s(""),d(""),f({ok:!0,text:"Kaydedildi ✓"})}return a.jsxs("div",{className:"flex flex-col gap-4 p-4",children:[a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("button",{onClick:e,className:"text-neutral-400",children:"← İlerleme"}),a.jsx("span",{className:"font-semibold text-neutral-100",children:"🗒 Karar günlüğü"}),a.jsx("span",{className:"w-12"})]}),_a()&&a.jsx("div",{className:"rounded-xl border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent",children:"🥊 Cornerman modu açık. Taper: hacmi düşür, yoğunluğu koru. Gece geç çalışma yok — uyku tilt'i büyütür."}),a.jsx("p",{className:"text-sm text-neutral-500",children:"Sonucu bilmeden yaz. İyi karar kötü sonuç = doğru. Ertesi gün süreç puanlanır, sonuç değil."}),c>0&&a.jsxs("a",{href:"#/drill",className:"rounded-xl border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent",children:["Dün masadan ",c," el getirdin → Drill'de puanla"]}),a.jsxs("div",{className:"card space-y-2 p-4",children:[a.jsx("input",{value:r,onChange:y=>l(y.target.value),placeholder:"El / spot (ör. 42bb CO KQo, HJ açtı)",className:"w-full rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),a.jsx("input",{value:t,onChange:y=>s(y.target.value),placeholder:"Aksiyon (fold / 3-bet 9bb / check-call…)",className:"w-full rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),a.jsx("textarea",{value:o,onChange:y=>d(y.target.value),rows:2,placeholder:"Gerekçe (neden?)",className:"w-full resize-none rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-xs text-neutral-500",children:"Güven:"}),Oi.map(y=>a.jsx("button",{onClick:()=>m(y.v),className:"rounded-full px-2.5 py-1 text-xs "+(k===y.v?"bg-accent text-black font-semibold":"bg-surface-2 text-neutral-400"),children:y.label},y.v)),a.jsx("button",{onClick:p,className:"btn-accent ml-auto px-4 py-2 text-sm",children:"Kaydet"})]}),b&&a.jsx("div",{className:"text-xs "+(b.ok?"text-emerald-400":"text-red-400"),children:b.text})]}),i.length===0?a.jsx("p",{className:"text-center text-sm text-neutral-600",children:"Henüz kayıt yok."}):a.jsx("div",{className:"space-y-2",children:i.map((y,x)=>a.jsxs("div",{className:"card p-3 text-sm",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"font-semibold text-neutral-100",children:y.el}),a.jsx("span",{className:"text-xs text-neutral-500",children:y.day})]}),a.jsxs("div",{className:"text-accent",children:[y.aksiyon," · %",Math.round(y.guven*100)]}),y.gerekce&&a.jsx("div",{className:"mt-1 text-neutral-400",children:y.gerekce})]},x))})]})}const Ri=u.lazy(()=>M(()=>import("./Quiz-lt1LMIlr.js"),__vite__mapDeps([0,1,2])).then(e=>({default:e.Quiz}))),wi=u.lazy(()=>M(()=>import("./Drill-_ESqbV4B.js"),__vite__mapDeps([3,1,4])).then(e=>({default:e.Drill}))),Ii=u.lazy(()=>M(()=>import("./DepthContrast-ZNZxxOzx.js"),__vite__mapDeps([5,1])).then(e=>({default:e.DepthContrast}))),Di=u.lazy(()=>M(()=>import("./Simulator-Di0SHmn2.js"),__vite__mapDeps([6,1,4])).then(e=>({default:e.Simulator}))),Li=u.lazy(()=>M(()=>import("./Progress-D3eGhRCS.js"),__vite__mapDeps([7,1])).then(e=>({default:e.Progress}))),Fi=u.lazy(()=>M(()=>import("./QuickReference-Bc-tk_rs.js"),__vite__mapDeps([8,1])).then(e=>({default:e.QuickReference}))),Hi=u.lazy(()=>M(()=>import("./Sentences-CoP6Lslc.js"),__vite__mapDeps([9,1])).then(e=>({default:e.Sentences}))),Ji=u.lazy(()=>M(()=>import("./RangeAtlas-BiKM250x.js"),__vite__mapDeps([10,1,2])).then(e=>({default:e.RangeAtlas}))),Vi=u.lazy(()=>M(()=>import("./EquityIntuition-BtcniaD6.js"),__vite__mapDeps([11,1])).then(e=>({default:e.EquityIntuition}))),Qi=u.lazy(()=>M(()=>import("./BetTypes-DaRd3yLb.js"),__vite__mapDeps([12,1])).then(e=>({default:e.BetTypes}))),qi=u.lazy(()=>M(()=>import("./QuestionBank-1apyKi_5.js"),__vite__mapDeps([13,1])).then(e=>({default:e.QuestionBank}))),Yi=u.lazy(()=>M(()=>import("./IcmCard-BAzQLb7s.js"),__vite__mapDeps([14,1])).then(e=>({default:e.IcmCard})));function Ui(){const[e,i]=u.useState(()=>window.location.hash);return u.useEffect(()=>{const n=()=>i(window.location.hash);return window.addEventListener("hashchange",n),()=>window.removeEventListener("hashchange",n)},[]),e}function v(e){window.location.hash=e}const Gi=[{id:"ders",label:"Ders",icon:"📚"},{id:"quiz",label:"Quiz",icon:"🎯"},{id:"drill",label:"Drill",icon:"🃏"},{id:"ilerleme",label:"İlerleme",icon:"📊"},{id:"referans",label:"Referans",icon:"⚡"}];function $i(){return a.jsx("div",{className:"flex h-full items-center justify-center text-sm text-neutral-500",children:"Yükleniyor…"})}function _i(){const i=Ui().replace(/^#\/?/,"").split("/").filter(Boolean),r=new Set(["ders","quiz","drill","ilerleme","referans"]).has(i[0])?i[0]:"ders",l=i[1],t=u.useRef(null),[s,o]=u.useState(!1);return u.useEffect(()=>{var d;(d=t.current)==null||d.scrollTo(0,0)},[i[0],i[1]]),u.useEffect(()=>{const d=()=>o(!0);return window.addEventListener("ept:storage-fail",d,{once:!0}),()=>window.removeEventListener("ept:storage-fail",d)},[]),a.jsxs("div",{className:"mx-auto flex h-[100dvh] max-w-md flex-col bg-surface-0 pt-[env(safe-area-inset-top)]",children:[a.jsx(ji,{}),s&&a.jsxs("div",{className:"flex items-center justify-between gap-3 bg-red-900/80 px-4 py-2 text-[13px] text-red-100",children:[a.jsx("span",{children:"Kayıt yapılamıyor — depolama dolu/kısıtlı"}),a.jsx("button",{"aria-label":"Kapat",className:"px-1 font-semibold",onClick:()=>o(!1),children:"✕"})]}),a.jsx("main",{ref:t,className:"flex-1 overflow-y-auto",children:a.jsxs(u.Suspense,{fallback:a.jsx($i,{}),children:[r==="ders"&&(l==="otopsi"?a.jsx(Ni,{onBack:()=>v("#/ders")}):l?a.jsx(fi,{moduleId:l,onBack:()=>v("#/ders")}):a.jsx(Fe,{onOpen:d=>v("#/ders/"+d)})),r==="quiz"&&a.jsx(Ri,{}),r==="drill"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"flex gap-2 px-4 pt-4",children:[a.jsx("button",{onClick:()=>v("#/drill"),className:"btn px-3 py-2 text-sm "+(i[1]!=="masa"&&i[1]!=="derinlik"?"bg-accent-soft text-accent border border-accent":"bg-surface-2 text-neutral-400 border border-surface-3"),children:"🃏 Soru drill"}),a.jsx("button",{onClick:()=>v("#/drill/masa"),className:"btn px-3 py-2 text-sm "+(i[1]==="masa"?"bg-accent-soft text-accent border border-accent":"bg-surface-2 text-neutral-400 border border-surface-3"),children:"🎲 Masa (el sim)"}),a.jsx("button",{onClick:()=>v("#/drill/derinlik"),className:"btn px-3 py-2 text-sm "+(i[1]==="derinlik"?"bg-accent-soft text-accent border border-accent":"bg-surface-2 text-neutral-400 border border-surface-3"),children:"🪜 Derinlik"})]}),i[1]==="masa"?a.jsx(Di,{}):i[1]==="derinlik"?a.jsx(Ii,{}):a.jsx(wi,{})]}),r==="ilerleme"&&(i[1]==="tekrar"?a.jsx(vi,{onDone:()=>v("#/ilerleme")}):i[1]==="gunluk"?a.jsx(Mi,{onDone:()=>v("#/ilerleme")}):a.jsx(Li,{onReview:()=>v("#/ilerleme/tekrar"),onJournal:()=>v("#/ilerleme/gunluk")})),r==="referans"&&(i[1]==="cumleler"?a.jsx(Hi,{onDone:()=>v("#/referans")}):i[1]==="araliklar"?a.jsx(Ji,{onDone:()=>v("#/referans")}):i[1]==="equity"?a.jsx(Vi,{onDone:()=>v("#/referans")}):i[1]==="bahis"?a.jsx(Qi,{onDone:()=>v("#/referans")}):i[1]==="sorubankasi"?a.jsx(qi,{onDone:()=>v("#/referans")}):i[1]==="icmkart"?a.jsx(Yi,{onDone:()=>v("#/referans")}):i[1]==="bolum"&&i[2]?a.jsx(Bi,{title:"Bölüm "+i[2],onDone:()=>v("#/referans/bolum")}):i[1]==="bolum"?a.jsxs("div",{className:"flex flex-col gap-3 p-4",children:[a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("button",{onClick:()=>v("#/referans"),className:"text-neutral-400",children:"← Referans"}),a.jsx("span",{className:"font-semibold text-neutral-100",children:"📖 Yeni Bölümler (v5)"}),a.jsx("span",{className:"w-16"})]}),a.jsx("p",{className:"text-[13px] leading-relaxed text-neutral-400",children:"Turnuva-kazanma bölümleri — doğrudan kitaptan. Molada telefondan tabloya bak."}),gi.map(d=>a.jsxs("button",{onClick:()=>v("#/referans/bolum/"+d.n),className:"card flex items-center justify-between p-3 text-left",children:[a.jsxs("span",{className:"text-[14px] text-neutral-100",children:[a.jsxs("span",{className:"font-mono text-neutral-500",children:["B",d.n]})," · ",d.short]}),a.jsx("span",{className:"text-accent",children:"→"})]},d.n))]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"grid grid-cols-2 gap-2 p-4 pb-0",children:[a.jsx("button",{onClick:()=>v("#/referans/araliklar"),className:"btn-accent py-2.5",children:"🗂️ Aralık Rehberi →"}),a.jsx("button",{onClick:()=>v("#/referans/cumleler"),className:"btn-ghost py-2.5",children:"🧠 15 Cümle ezber →"}),a.jsx("button",{onClick:()=>v("#/referans/equity"),className:"btn-ghost col-span-2 py-2.5",children:"📐 Equity Sezgisi (bonus · kitap dışı) →"}),a.jsx("button",{onClick:()=>v("#/referans/bahis"),className:"btn-ghost col-span-2 py-2.5",children:"🎯 Bahis Tipleri (value/bluff/thin/overbet) →"}),a.jsx("button",{onClick:()=>v("#/referans/sorubankasi"),className:"btn-ghost col-span-2 py-2.5",children:"📝 Soru Bankası (Bölüm 10 · 37 soru) →"}),a.jsx("button",{onClick:()=>v("#/referans/icmkart"),className:"btn-ghost col-span-2 py-2.5",children:"🧮 ICM Kartım (ladder + <15bb jam · Bölüm 12) →"}),a.jsx("button",{onClick:()=>v("#/referans/bolum"),className:"btn-accent col-span-2 py-2.5",children:"📖 Yeni Bölümler v5 (ICM · River · Multiway…) →"})]}),a.jsx(Fi,{})]}))]})}),a.jsx("nav",{"aria-label":"Ana sekmeler",className:"grid grid-cols-5 border-t border-surface-3 bg-surface-1 pb-[env(safe-area-inset-bottom)]",children:Gi.map(d=>{const k=d.id===r;return a.jsxs("button",{"aria-current":k?"page":void 0,onClick:()=>v("#/"+d.id),className:"flex flex-col items-center gap-0.5 py-2.5 text-xs transition "+(k?"text-accent":"text-neutral-500"),children:[a.jsx("span",{className:"text-lg",children:d.icon}),d.label]},d.id)})})]})}class Zi extends qa.Component{constructor(){super(...arguments);q(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(n){console.error("EPT ErrorBoundary:",n)}async resetData(){const n=Object.keys(localStorage).filter(l=>l.startsWith("ept:")),r=Object.fromEntries(n.map(l=>[l,localStorage.getItem(l)]));try{await navigator.clipboard.writeText(JSON.stringify(r,null,2))}catch{}n.forEach(l=>localStorage.removeItem(l)),location.reload()}render(){return this.state.hasError?a.jsxs("div",{className:"mx-auto flex h-[100dvh] max-w-md flex-col items-center justify-center gap-4 bg-surface-0 p-6 text-center",children:[a.jsx("p",{className:"text-lg font-semibold text-neutral-100",children:"Bir şeyler ters gitti."}),a.jsx("button",{className:"btn-accent",onClick:()=>location.reload(),children:"Yeniden yükle"}),a.jsx("button",{className:"btn-ghost text-sm",onClick:()=>this.resetData(),children:"Verileri sıfırla (önce JSON kopyala)"})]}):this.props.children}}ga.createRoot(document.getElementById("root")).render(a.jsx(qa.StrictMode,{children:a.jsx(Zi,{children:a.jsx(_i,{})})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/ept-trainer/sw.js").catch(()=>{})});export{cn as $,ba as A,dn as B,V as C,Re as D,xa as E,tn as F,Da as G,ki as H,sn as I,on as J,Ke as K,_a as L,rn as M,Nn as N,ta as O,ai as P,ei as Q,ne as R,Ga as S,en as T,nn as U,mn as V,ii as W,bn as X,gn as Y,zn as Z,Bn as _,Wa as a,vn as b,Xa as c,Ta as d,Ve as e,hn as f,pn as g,fn as h,ni as i,a as j,An as k,N as l,jn as m,Kn as n,yn as o,va as p,Tn as q,ln as r,C as s,xn as t,En as u,Sn as v,Te as w,H as x,un as y,kn as z};
