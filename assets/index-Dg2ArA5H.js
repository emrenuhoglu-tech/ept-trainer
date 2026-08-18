const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/Quiz-CAIin5xD.js","assets/vendor-nf7bT_Uh.js","assets/quizEngine-Bf_XxqD1.js","assets/Drill-CDxNzo7n.js","assets/kavramlar-D96rNycD.js","assets/Simulator-CQYEdaOc.js","assets/Progress-CfIkYFqj.js","assets/QuickReference-DyJYP9GB.js","assets/Sentences-CTI8e9xs.js","assets/RangeAtlas-Be4gelL3.js","assets/EquityIntuition-DFj8sqCz.js","assets/BetTypes-DbbZWoWz.js","assets/QuestionBank-CLIF3yrO.js","assets/IcmCard-zxVUs1s_.js"])))=>i.map(i=>d[i]);
var da=Object.defineProperty;var ka=(a,n,r)=>n in a?da(a,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):a[n]=r;var Y=(a,n,r)=>ka(a,typeof n!="symbol"?n+"":n,r);import{r as c,a as ca,R as Ye}from"./vendor-nf7bT_Uh.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))i(l);new MutationObserver(l=>{for(const t of l)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function r(l){const t={};return l.integrity&&(t.integrity=l.integrity),l.referrerPolicy&&(t.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?t.credentials="include":l.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function i(l){if(l.ep)return;l.ep=!0;const t=r(l);fetch(l.href,t)}})();var Ve={exports:{}},ke={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ua=c,ma=Symbol.for("react.element"),ba=Symbol.for("react.fragment"),ya=Object.prototype.hasOwnProperty,pa=ua.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,fa={key:!0,ref:!0,__self:!0,__source:!0};function $e(a,n,r){var i,l={},t=null,s=null;r!==void 0&&(t=""+r),n.key!==void 0&&(t=""+n.key),n.ref!==void 0&&(s=n.ref);for(i in n)ya.call(n,i)&&!fa.hasOwnProperty(i)&&(l[i]=n[i]);if(a&&a.defaultProps)for(i in n=a.defaultProps,n)l[i]===void 0&&(l[i]=n[i]);return{$$typeof:ma,type:a,key:t,ref:s,props:l,_owner:pa.current}}ke.Fragment=ba;ke.jsx=$e;ke.jsxs=$e;Ve.exports=ke;var e=Ve.exports,ge={},Ee=ca;ge.createRoot=Ee.createRoot,ge.hydrateRoot=Ee.hydrateRoot;const ha="modulepreload",va=function(a){return"/ept-trainer/"+a},Re={},M=function(n,r,i){let l=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const s=document.querySelector("meta[property=csp-nonce]"),o=(s==null?void 0:s.nonce)||(s==null?void 0:s.getAttribute("nonce"));l=Promise.allSettled(r.map(d=>{if(d=va(d),d in Re)return;Re[d]=!0;const k=d.endsWith(".css"),m=k?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${d}"]${m}`))return;const u=document.createElement("link");if(u.rel=k?"stylesheet":ha,k||(u.as="script"),u.crossOrigin="",u.href=d,o&&u.setAttribute("nonce",o),document.head.appendChild(u),k)return new Promise((f,b)=>{u.addEventListener("load",f),u.addEventListener("error",()=>b(new Error(`Unable to preload CSS for ${d}`)))})}))}function t(s){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=s,window.dispatchEvent(o),!o.defaultPrevented)throw s}return l.then(s=>{for(const o of s||[])o.status==="rejected"&&t(o.reason);return n().catch(t)})},te=[{id:"M1",title:"Kök hata",chapter:"Bölüm 0 + Bölüm 7",minutes:6,slides:[{title:"Kök hata nedir",bullets:["Tek per, şişmiş potta bluff-catcher'dır — AA dahil.","River'da senden zayıf el ödemeyecekse, jam value değildir.","Chop'lar jam atmaz."],ruleBox:"Tek per, şişmiş potta bluff-catcher'dır — AA dahil. Kök hatan bu; üç elenme buradan geldi.",visuals:[{kind:"hand",cards:"AA",label:"Tek per — AA dahil"}],narration:"Bu modül tek bir hatanın etrafında dönüyor, çünkü seni üç kez eleyen şey hep aynıydı. Ona kök hata diyoruz. Cümlesi şu: tek per, şişmiş bir potta bir bluff-catcher'dır — as as dahil. Yani potun içinde çok para varken elinde sadece bir çift varsa, o el artık değer için değil, sadece rakibin blöfünü yakalamak için oynanır. Şunu kafana kazı: as as elinde diye o el şişmiş potta otomatik olarak canavar değildir; pot ne kadar büyükse rakibin seni geçmiş olma ihtimali de o kadar artar. İkinci cümle bunun river ayağı: river'da senden zayıf bir el seni ödemeyecekse, jam yani all-in value değildir. Value bet dediğin şey, senden zayıf bir eli ödetmek demek; ödeyecek zayıf el yoksa attığın all-in sadece güçlü elleri davet eder, seni geçenleri. Üçüncü cümle de bir okuma kısayolu: chop'lar jam atmaz. Yani ortada bölüşmeye, beraberliğe oynayan bir board varken rakip all-in geldiyse, o oyuncu bölüşen eli çoktan elinden çıkarmıştır — geldiği el bölüşen el değil, seni geçen eldir. Şimdi bu üç cümlenin masada nasıl para kaybettirdiğini üç gerçek vakada göreceğiz."},{title:"Vaka 1 — A4s river call",bullets:["$50K High Roller, WSOP 2026.","Chop mekaniğini doğru gördün, bir filtreyi atladın.","Chop'lar jam atmaz — mekaniği görmek yetmez."],visuals:[{kind:"hand",cards:"A4s",label:"Elin"}],narration:"Birinci vaka, elli bin dolarlık bir high roller. Board bölüşmeye açık, yani chop mekaniği masada. Ve sen bu mekaniği aslında doğru gördün — beraberlik ihtimalini fark ettin. Ama bir filtreyi atlayıp hero call yaptın ve ödedin. Atladığın filtre şuydu: chop'lar jam atmaz. Rakip sana all-in geldiyse, bölüşmeye oynayan eli aralığından çıkarmıştır; çünkü bölüşecek bir elle kimse tüm stack'ini ortaya sürmez, bölüşmek zaten paranı geri almak demektir, riske değmez. Yani onun jam'i, bölüşen elle değil, seni geçen bir elle geliyor. Buradan çıkan kural şu: bir mekaniği doğru görmek tek başına yeterli değildir. Board'da beraberlik var demek, işin yarısı. Diğer yarısı: rakibin hamlesi o mekanikle uyumlu mu? Beraberlik varsa ve rakip check'liyorsa, o beraberlik anlamlı. Ama beraberlik varken rakip jam'liyorsa, jam'in kendisi sana beraberliğin masadan kalktığını söylüyor. Hamleyi mekanikle birlikte oku."},{title:"Vaka 2 — KTo top pair check-raise all-in",bullets:["$10K 6-Handed. Islak board, top pair ile check-raise all-in.","Rakip flat'lediği QQ ile call etti.","Doğrusu: check-call, sonra değerlendir."],visuals:[{kind:"hand",cards:"KTo",label:"Elin (top pair)"},{kind:"hand",cards:"QQ",label:"Rakip (flat'lediği)"}],narration:"İkinci vaka, on bin dolarlık altı kişilik bir masa. Islak bir board, yani bağlantıların ve draw'ların bol olduğu bir zemin. Elinde top pair var, kral on ile bir kral flopladın diyelim, ve check-raise all-in yaptın. Rakip preflop flat'lediği kuvöz kuvöz ile seni ödedi ve elendin. Doğru oyun neydi? Check-call, sonra sokak sokak değerlendirmek. Top pair ıslak bir boardda büyük pot başlatıcı değildir. Neden? Çünkü sen tüm stack'i ortaya sürdüğünde, seni ödeyen aralık senden iyi. Zayıf eller, blöfler, draw'lar all-in'e call etmez, fold eder — seni sadece set'ler, üst çiftler, tamamlanmış eller öder. Yani stack'i sen başlattığın anda elini bir bluff-catcher'a çevirmiş oluyorsun ama bunu value oynuyormuş gibi yapıyorsun. Kural: tek per stack-off yakıtı değildir. Şişmiş pota giden yol, elinin sınıfını sessizce düşürür; sen hâlâ top pair'e bakıyorsun ama pot büyüdükçe o el bir bluff-catcher'a dönüşmüştür. Ödemek başka, başlatmak başka."},{title:"Vaka 3 — AA river jam",bullets:["PokerOK $108 Mystery Bounty, Temmuz 2026.","Board 2-4-5, river 6. Elin AA, rakip 66.","Flop ve turn value doğru — kötü river 6'da jam yanlış."],visuals:[{kind:"replay",replay:{hero:"AA",villain:"66",heroLabel:"Sen (AA)",villainLabel:"Rakip (66)",streets:[{name:"Preflop",note:"AA vs 66 — açık ara öndesin."},{name:"Flop",add:"2c 4d 5s",note:"Flop 2-4-5. AA hâlâ overpair ve önde; flop value doğru."},{name:"Turn",add:"??",note:"Turn (kitapta belirtilmemiş). Value almaya devam — buraya kadar oyun doğru."},{name:"River",add:"6h",note:"River 6 → 66 artık SET. Senden zayıf hiçbir el ödemez; jam value DEĞİL. Kök hata tam burada: kötü river'da overpair'i value gibi jam etmek."}]}}],narration:"Üçüncü vaka en taze ve en öğretici olanı. Board iki, dört, beş. Elinde as as, oyunun en güçlü başlangıç eli. Flop'ta value bet attın, doğru. Turn'de yine value bet attın, o da doğru — çünkü o ana kadar seni yedi, sekiz, dokuz gibi çiftlerden, zayıf ellerden para ödeyecek biri vardı. Sonra river altı geldi. Şimdi o board'a dikkatlice bak: iki, dört, beş ve şimdi altı. Bu kötü bir river, çünkü bu kartla senden zayıf hiçbir el seni ödemez. Düşün: elinde üç olan biri kenti tamamladı ve seni geçiyor; setler seni geçiyor — nitekim rakip river'da altı altı ile set yaptı. Senden zayıf olan her el, yani seni ödeyebilecek her el, ya pas geçiyor ya da o river'da seni geçmiş. Sen buna rağmen kalan stack'i jam ettin ve rakip river'da set yapan altı altı ile ödedi. Hata all-in'in kendisiydi. Value target yoktu. Kural net: river'da senden zayıf el ödemeyecekse jam value değildir. O kötü river'da elin hâlâ iyi görünüyor ama value'su bitmiş; küçük potta check-call edip ucuza showdown'a gidersin, büyük potta ise check-fold. As as'i bırakmak zor gelir ama bırakılması gereken yer tam burasıdır."},{title:"Üçünün tek kuralı",bullets:["Üç vakanın kök hatası aynı: tek per'in şişmiş/multiway potta yanlış sınıflandırılması.","Kötü river'da overpair: küçük pota check-call, büyük pota check-fold."],ruleBox:"River'da senden zayıf el ödemeyecekse jam value değildir. Kötü river'da overpair: küçük pota check-call, büyük pota check-fold.",narration:"Üç vakaya birlikte bak: farklı turnuvalar, farklı eller, farklı boardlar — ama kök hata bir tane. Tek per'in, as as dahil, şişmiş ya da çok kişili potta yanlış sınıflandırılması. Her seferinde elin sana güçlü göründü, ama pot büyüdükçe o el bir bluff-catcher'a dönüştü ve sen onu hâlâ value gibi oynadın. Masaya götüreceğin cümle şu: river'da senden zayıf bir el ödemeyecekse, jam value değildir. Ve pratik karşılığı: kötü bir river'da overpair'in varsa, küçük pota check-call yapıp ucuza görürsün, büyük pota ise check-fold. Bu modülü içine sindirirsen, seni eleyen o üç eli bir daha oynamazsın. Sıradaki modüllerde bu kök hatanın nereden doğduğunu — yani preflop'ta 3-bet aralıklarından — ve nasıl önleneceğini göreceğiz."}]},{id:"M2",title:"Blöf seçimi & board sahipliği",chapter:"Bölüm 1",minutes:6,slides:[{title:"Üç kriter",table:{section:"Bölüm 1",sub:"1.1",caption:"Biri eksikse blöf değil, sadece kaybedilen chip."},narration:"Blöf yapmak rastgele bir cesaret işi değil; bir eli blöf yakıtı yapan üç kriter var ve el bunların üçünden birden geçmeli. Birincisi bloker. Elindeki kart, rakibin en güçlü ellerini onun elinden alıyor mu? Mesela elinde maça as varsa, rakibin nut maça flush'ını bloke ediyorsun, yani onun en güçlü elini yapma ihtimalini azaltıyorsun. İkincisi bağlantı. El board'a temas ediyor, gelişebiliyor mu? Açık uçlu bir kent draw'u ya da flush draw'u gerçek bağlantıdır; sadece havada duran iki yüksek kart bağlantı değildir. Üçüncüsü board sahipliği. Bu board kimin aralığına çarpıyor? On dokuz sekiz gibi bir zemin genellikle savunan tarafın; as kral yedi gibi kuru bir zemin ise açan tarafın. Şimdi kritik nokta: bu üç kriterden biri bile eksikse, elin blöf değildir — sadece potun içine attığın ve kaybedeceğin chip'tir. Yani blöfe başlamadan önce üç soruyu da sor: bloke ediyor muyum, bağlanıyor muyum, board benim mi?"},{title:"J2s dersi — suited tuzağı",bullets:["Suited olmak bir eli blöf yakıtı yapmaz.","Aranan şey suited değil: bağlı ve bloker.","Offsuit broadway'de ters tuzak: KJo, QJo — bloker var, bağlantı yok."],visuals:[{kind:"hand",cards:"J2s KJo QJo",label:"Blöf yakıtı DEĞİL"}],narration:"Şimdi çok yaygın bir tuzağa bakalım: suited tuzağı. İnsanlar bir el suited diye onu otomatik olarak blöf için uygun sanıyor. Jek iki suited'i ele alalım. Bloker değeri var mı? Yok, kimsenin nut'ını almıyor, iki ve jek kimsenin güçlü elini bloke etmiyor. Bağlantısı var mı? Neredeyse yok, iki kartın arasında dokuz basamak boşluk var, düzgün bir kent draw'u yapması çok zor. Peki flush'ı tamamlansa? O zaman bile alt flush riski taşıyor, yani birileri daha yüksek bir flush'la seni ödeyebilir. Yani suited kelimesi seni kandırıyor; aradığın şey suited değil, bağlı ve bloker olan. Aynı tuzak offsuit broadway ellerde tam tersine çalışır. Kral jek offsuit, kız jek offsuit — bunların bloker değeri var, çünkü büyük kartları tutuyorlar, ama bağlantıları yok, board'a düzgün oturmuyorlar. Onlar da blöf yakıtı değil. Ders şu: ne suited olması ne de büyük kart olması tek başına bir eli blöfe uygun yapmaz; üç kriteri birlikte ara."},{title:"Board'un sahibi kim",bullets:["Check-raise blöf: SENİN aralığına çarpan boardlarda (T98, 765, J-orta).","Rakibin boardunda (A-K yüksek kuru): draw'lar sessizce call eder."],ruleBox:"Check-raise blöf SENİN aralığına çarpan boardlarda yapılır. Rakibin aralığına çarpan boardlarda (A-K yüksek kuru) draw'lar sessizce call eder.",visuals:[{kind:"board",cards:"Ts 9d 8c",label:"Senin boardun (T98) — check-raise blöf"},{kind:"board",cards:"7h 6s 5c",label:"Senin boardun (765)"},{kind:"board",cards:"Ah Kd 7c",label:"Rakibin boardu (A-K kuru) — call et"}],narration:"Diyelim üç kriterden geçen bir elin var. Yine de yanlış hamleyle oynayabilirsin, çünkü hamleyi board'un sahibi belirler. Kritik ayrım şu: check-raise blöfü, senin aralığına çarpan boardlarda yapılır — on dokuz sekiz, yedi altı beş, ortada jek olan bağlantılı zeminler. Bu boardlar savunan tarafın hikâyesine uyar, o yüzden check-raise'in inandırıcı olur. Ama board rakibin aralığına çarpıyorsa, mesela as kral yedi gibi yüksek ve kuru bir zemin, orada draw'ların sessizce call eder, check-raise etmez. Nedenini rakamla görelim. As kral yedi board'u, cut-off'un açılış aralığını ezer: as kral, as kız, as jek, kral kız, as yedi suited, yedi yedi, as as, kral kral — hepsi bu boarda çarpıyor. Peki senin büyük kör savunma aralığında kaç tane as-kral kombinasyonu var? Çok az. Yani sen bu boardda check-raise yaparsan, rakip 'bu adamın burada as-kral'ı olması zor' diye düşünür; inandırıcılığın düşüktür. Sonuç: iyi elleri fold ettiremezsin, onlar call eder; sadece zaten kazanamayacağın havayı fold ettirirsin. Havanın küçük potunu almak için gutshot'ını şişmiş potta riske atmış olursun. Bunun yerine call her şeyi çözer: ucuza bir turn görürsün, on gelirse gizli kentle tüm stack'i alırsın, maça gelirse agresifleşme opsiyonun doğar, boşsa da ucuza yoldan çekilirsin. Kuru, yüksek, rakibin boardunda: raise etme, call et."},{title:"Kime blöf yapılmaz",bullets:["Rec / station: fold etmez — value bet düşün.","Kısa stack: otomatik call bölgesinde.","Committed oyuncu: fold psikolojik olarak kapalı.","Bubble'da hayatta kalan büyük stack: bedavaya öder."],narration:"Son olarak, doğru el ve doğru board bile olsa, bazı rakiplere blöf yapılmaz. Birincisi rec ya da station tipi oyuncu; bu adam fold etmiyor, o yüzden ona blöf değil, value bet düşün — elin iyiyse ödet, kötüyse boşuna deneme. İkincisi kısa stack; call fiyatı onun stack'ine göre küçük kaldığından otomatik call bölgesindedir, blöfün onu atmaz. Üçüncüsü pota bağlanmış, committed oyuncu; belli bir noktadan sonra o oyuncuda fold psikolojik olarak kapanır, ne yaparsan yap öder. Ve dördüncüsü, bubble'da hayatta kalmaya oynayan büyük stack; o seni cezasız ödeyebilir, çünkü kaybetse bile turnuvadan düşmez, seni bedavaya ödemekten çekinmez. Blöf, doğru ele ek olarak doğru rakibi de ister. Yanlış kişiye yapılan mükemmel blöf, yine kaybedilen chip'tir."}]},{id:"M3",title:"Aldatıcı orta eller",chapter:"Bölüm 2",minutes:5,slides:[{title:"Küçük pot kazananı, büyük pot kaybedeni",bullets:["JTs, KQ, KJ, 97s.","Rolleri: open / flat / BB-defend.","Rolleri ASLA büyük pot başlatıcı (3-bet, stack-off) değil."],ruleBox:"JTs, KQ, KJ, 97s: küçük pot kazananı, büyük pot kaybedenidir. Rolleri open / flat / BB-defend; asla büyük pot başlatıcı değil.",visuals:[{kind:"hand",cards:"JTs KQ KJ 97s",label:"Aldatıcı orta eller"}],narration:"Bu modül bir grup elle ilgili: jek on suited, kral kız, kral jek, dokuz yedi suited. Bunlara aldatıcı orta eller diyoruz, çünkü iyi görünürler ama seni yanıltırlar. Tek cümlelik kimlikleri şu: küçük pot kazananı, büyük pot kaybedenidir. Rolleri open yapmak, flat yani call etmek, ya da büyük körden savunmaktır. Rolleri asla ama asla büyük pot başlatmak değildir — yani bunlarla 3-bet çekip stack ortaya sürmezsin. Bu eller potu küçük tutarsan senin dostundur; potu büyütürsen düşmanın olur. Neden böyle olduğunu bir sonraki slaytta açacağız, ama önce şunu içine yerleştir: bu elleri gördüğünde refleksin 'küçük pot' olmalı, 'stack' değil."},{title:"Neden dominate edilirler",bullets:["JTs top pair: kicker sorunu. KQ: AK/AQ gölgesinde. 97s iki per: üstü açık.","Küçük potta marjinal ellerden para sızdırır; büyükte karşı aralık daralır ve güçlenir."],narration:"Neden bu eller büyük potta kaybeder? Tek tek bak. Jek on suited ile top pair yaptığında bir kicker sorunun var; jek'i eşledin diyelim, seni ödeyen çoğu el daha iyi bir kicker taşır. Kral kız ile top pair yaptığında as kral ve as kızın gölgesindesin; kralı ya da kızı eşlersen bile seni dominate eden eller masada. Dokuz yedi suited ile iki per bile yapsan, boardun üstü açıktır, daha büyük iki per'ler ve kentler seni geçebilir. Şimdi bunu pot boyutuyla birleştir. Pot küçükken, yani tek raise'li bir pottayken, bu eller rakibin marjinal ellerinden yavaş yavaş para sızdırır — zayıf top pair'ler, ikinci çiftler sana ödeme yapar. Ama pot büyüdüğünde, yani 3-bet ve üstü seviyeye çıktığında, karşındaki aralık daralır ve güçlenir; artık sadece güçlü eller o kadar parayı ortaya koyar ve o güçlü aralık seni dominate eder. Tek cümlede: el aynı kalıyor, ama pot boyutu değişince kazanan taraf değişiyor. İşte aldatıcılıkları tam burada."},{title:"KQo vakası — equity vs oynanabilirlik",bullets:["42bb, HJ reg (~%22) açtı, sen CO'da KQo. Doğru: fold.","Ham equity ~%45 ama realize edemiyorsun.","En iyi floplar en pahalı tuzakların: K → AK'ye öder, Q → AQ'ya öder."],ruleBox:"Equity kâğıt üzerinde, para masada kazanılır.",visuals:[{kind:"hand",cards:"KQo",label:"Elin (CO) — 42bb, HJ reg açtı"}],narration:"Somut bir örnekle bitirelim. Kırk iki big blind derinliğindesin, day two. Reg bir oyuncu hijack'ten açtı, aralığı aşağı yukarı yüzde yirmi iki. Sen cut-off'ta kral kız offsuit'sin. Doğru karar fold. Neden fold, oysa el kötü görünmüyor? Çünkü ham equity ile oynanabilirlik iki ayrı şey. Kral kız offsuit'in bu yüzde yirmi iki aralığa karşı ham equity'si yaklaşık yüzde kırk beş; kâğıt üzerinde fena değil. Ama o equity'yi realize edemiyorsun. Rakibin aralığındaki as kral, as kız, kral kral, kız kız, as as senin en iyi floplarını mezara çevirir. Kralı flopladın, sevindin — ama as krala üç sokak ödersin. Kızı flopladın — as kıza ödersin. Yani senin en parlak senaryoların, aslında en pahalı tuzakların. Üstüne kırk iki big blind'de 3-bet edip 4-bet yersen devam edemezsin, call edip pozisyonsuz oynamak da seni inisiyatifsiz bırakır. Buradan çıkan altın cümle: equity kâğıt üzerinde, para masada kazanılır. Bir eli oynayıp oynamayacağına ham equity'ye değil, o equity'yi gerçekten cebe indirip indiremeyeceğine bakarak karar ver."}]},{id:"M4",title:"Stack modları & ICM",chapter:"Bölüm 3",minutes:5,slides:[{title:"Stack modları",table:{section:"Bölüm 3",caption:"Önce mod, sonra aralık."},narration:"Her elden önce sorman gereken ilk soru bir el sorusu değil, bir mod sorusudur: hangi stack modundayım? Aralığı ondan sonra seçersin. Modları gezelim. Seksen big blind ve üstü standart mod; normal chartlar geçerli, suited connector ve küçük çiftlerin değeri tavanda çünkü derinlik implied odds veriyor. Kırk ile altmış arası ilk daralma; açılış boyutun sabit kalır ama aralık kısılır, offsuit alt bant düşer — kral on offsuit, kız jek offsuit, jek dokuz offsuit gibi eller çöpe gider. Yirmi beş ile kırk arası ciddi bir mod değişimi; suited connector'lar değer kaybeder çünkü implied odds azalır, buna karşılık as-x elleri değer kazanır, ve her ele 'jam'e karşı net kararım ne' filtresini uygularsın. On beş ile yirmi beş arası open-jam sınırı; bazı pozisyonlardan iki kat açar, bazılarıyla direkt jam edersin. On beşin altında ise tek mod var: jam ya da fold; aralık dışı hiçbir hamle yok. Özet: elini görmeden önce stack'ine bak, çünkü aynı el farklı modlarda farklı bir eldir."},{title:"30bb altı orta çiftler",bullets:["77–TT, 30bb altında post-flop eli değil — jam-or-fold.","Set gelmezse üç sokak ödeyecek stack yok.","Gelirse de kısa stack'le maksimum alamazsın."],visuals:[{kind:"hand",cards:"77 88 99 TT",label:"30bb altı: jam-or-fold"}],narration:"Modların içinde özel bir eşik var, onu ayrıca vurgulamak gerek: otuz big blind altında orta çiftler. Yedi yedi, sekiz sekiz, dokuz dokuz, on on gibi eller otuz big blind altında post-flop oynanacak eller değildir; bunlar jam ya da fold elleridir. Neden? İki taraflı bir kısıt var. Bir: set-mining yapmak istiyorsun ama set gelmezse üç sokak baskı yiyip devam edecek stack'in yok, ilk baskıda zaten commit oluyorsun. İki: set gelse bile kısa stack'le rakipten maksimum değeri alamıyorsun, çünkü ortada zaten az para var. Yani bu çiftlerin klasik cazibesi olan 'ucuza set çekip stack alma' planı otuz big blind altında çalışmıyor. O yüzden bu derinlikte orta çiftle post-flop dans etmeye kalkma; ya jam et ya da at."},{title:"ICM katmanı",bullets:["Bubble'da 30bb ≠ Day 1'de 30bb.","Solunda kısa stack varsa: genişlet.","Solunda büyük stack varsa: daralt.","Bubble'da orta stack en kırılgan pozisyon — sabır."],ruleBox:"Bubble'da 30bb ≠ Day 1'de 30bb.",narration:"Stack modunun üstüne bir de ICM katmanı biner, yani para baskısı. Şu cümleyle başla: bubble'da otuz big blind, day one'daki otuz big blind ile aynı el değildir. Para yaklaşırken aynı stack aynı aralığı oynamaz, çünkü artık her chip'in değeri simetrik değil — kaybettiğin chip'ler, kazandıklarından daha çok acıtır. Masaya göre ayarlarsın. Solunda kısa stack'ler varsa açılış aralığını genişletirsin, çünkü onlar hayatta kalmaya oynuyor, kolay kolay karşılık vermezler. Solunda büyük stack'ler varsa daralırsın, çünkü onlar seni cezasız 3-bet edip zorlayabilir, sen de para baskısı altında fold etmek zorunda kalırsın. Ve en kritiği: bubble'da orta stack en kırılgan pozisyondur. Ne kısa stack gibi rahatça jam edebilirsin, ne de büyük stack gibi baskı kurabilirsin; iki arada kalırsın. Bu modun tek reçetesi sabır — pozisyonunu ve masanı okuyup doğru anı beklemek."}]},{id:"M5",title:"3-bet & call aralıkları",chapter:"Bölüm 4 ★",minutes:8,slides:[{title:"Bu bölümün mantığı",bullets:["Şişmiş pot %90 oranda 3-bet'li pottur.","3-bet aralığını doğru kurmak kök hatanın frekansını düşürür.","İki test: tek per rahat mıyım? OOP mu kalıyorum?"],narration:"Bu, kitabın kalbi. İlk modülde kök hatayı gördük: tek per'i şişmiş potta yanlış sınıflandırmak. O hata river'da patlıyor ama aslında preflop'ta doğuyor. Şöyle düşün: şişmiş pot dediğimiz şey yüzde doksan oranında bir 3-bet'li pottur. Yani river'daki o zor kararın kaynağı, çok önce, preflop'ta 3-bet aralığını yanlış kurmandır. Buradan çok güçlü bir sonuç çıkıyor: 3-bet aralığını doğru kurmak, kök hatanın frekansını düşürmenin en verimli yoludur — el okuma becerini geliştirmekten bile daha hızlı sonuç verir, çünkü sorunu doğduğu yerde kesersin. Her aralığı iki soruyla sınayacağız. Birinci soru: bu elle 3-bet edip flop görürsem, tek per yaptığımda rahat olacak mıyım? Rahat olmayacaksam o eli 3-bet etmem — ya flat ederim ya atarım. İkinci soru: pozisyonsuz mu kalacağım? Pozisyonsuz 3-bet potunda tek per, tanımı gereği bir bluff-catcher'dır. İşte bu yüzden pozisyonsuz aralıklar, pozisyonlu aralıklardan belirgin biçimde daha sıkıdır. Bu iki soruyu aklında tut, çünkü bütün tablolar bunların üstüne kurulu."},{title:"Canlı turnuva düzeltmesi",table:{section:"Bölüm 4",sub:"4.1",caption:"Canlıda para geniş value 3-bet'inden gelir."},ruleBox:"Canlıda para blöf 3-bet'ten değil, daha geniş value 3-bet'inden gelir.",narration:"Solver aralıklarını olduğu gibi masaya taşımayacaksın, çünkü canlı alan solver gibi oynamıyor. EPT sahasında üç sistematik sapma var, üçünü de kendi lehine düzelteceksin. Birincisi: canlı oyuncular 3-bet'e karşı çok az fold eder. Demek ki blöf 3-bet frekansını düşür, buna karşılık value 3-bet aralığını genişlet — çünkü seni ödeyecek bir alan var. İkincisi: canlıda 4-bet blöfü neredeyse yoktur. Yani biri sana 4-bet yaptığında bu gerçek bir eldir; kuvöz kuvöz ve altını bile ciddiye al, as kral'ı otomatik 5-bet çakma. Üçüncüsü: açılışlar geniş, coldcall yani düz call çok. Bu yüzden squeeze senin en kârlı hamlen olur, ve çok kişili potlarda blöf 3-bet'ini tamamen bırakırsın çünkü fold equity yoktur. Hepsini tek cümlede topla: canlıda para blöf 3-bet'ten değil, daha geniş value 3-bet'inden gelir. Teori seni dengeye zorluyor ama alan sana dengesizlikten kâr etme izni veriyor — bu izni kullan."},{title:"Boyutlandırma",table:{section:"Bölüm 4",sub:"4.2",caption:"Ezberle, düşünme."},narration:"Boyutları ezberleyeceksin ki masada düşünmeyesin. Pozisyonlu 3-bet, açılışın üç katı; canlıda üç buçuk kata kadar serbestsin. Pozisyonsuz 3-bet, körler dahil açılışın dört katı — pozisyonsuz olduğun için biraz daha büyük yaparsın ki zayıf ellere iyi fiyat vermeyesin. Masada araya coldcaller girdiyse, her coldcaller için bir açılış boyutu eklersin. Squeeze, yani açılışın üstüne bir de call varken çektiğin 3-bet, dört buçuk ile beş kat arası. 4-bet'lere gelince: pozisyonlu 4-bet, 3-bet'in iki virgül iki katı; pozisyonsuz 4-bet, iki virgül beş katı. Bu sayıları refleks hâline getir, çünkü boyut için düşünmeye başlarsan hem tempoyu kaçırır hem de boyutundan okuma verirsin."},{title:"Aralık tablosu (interaktif)",rangeMatrix:!0,narration:"Şimdi işin özüne, pozisyona göre 3-bet aralıklarına geliyoruz. Aşağıdaki tabloyu kendin kullan: önce üstten kim açtı onu seç, sonra kendi pozisyonuna dokun; o eşleşmenin value ve blöf aralığını, altında da flat notlarını göreceksin. Genel prensipleri aklında tut. Erken pozisyon açılışlarına karşı, yani yu ti ci ve yu ti ci artı bire karşı, disiplin bölgesindesin — value çok dar, kuvöz kuvöz ve üstü ile as kral, blöf ya yok ya çok seyrek. Açan pozisyon geç indikçe, mesela cut-off ya da button açtığında, hem value hem blöf aralığın genişler çünkü onların aralığı daha zayıf. En kârlı spot, smol blind açıp senin büyük körde olduğun durum; orada aralığın en geniş, çünkü rakibin aralığı çok geniş ve sen pozisyonlusun. Bir de şu uyarıyı unutma: blöf satırındaki eller blocker teorisi için değil, flop oynanabilirliği için seçildi — yani 3-bet'in call gelirse flop'ta rahat oynayabileceğin eller. Tabloyla oyna, eşleşmeleri kendi gözünle gör."},{title:"Coldcall'un üç şartı",bullets:["1) Pozisyon: IP'sin ya da BB'de aksiyonu kapatıyorsun.","2) Derinlik: efektif stack, call'un en az 15×'i.","3) Ödeyen rakip: set yapınca sana para verecek biri.","Üçü aynı anda sağlanmıyorsa flat etme."],narration:"3-bet'i konuştuk; şimdi coldcall, yani birinin açılışına 3-bet yapmadan düz call yapmak. Coldcall aslında 3-bet'ten daha zor bir karardır, çünkü inisiyatifi bırakıyorsun — potu sen kontrol etmiyorsun. Üç şart var ve üçü aynı anda sağlanmıyorsa flat etme. Birincisi pozisyon: ya pozisyonlusun, ya da büyük körde aksiyonu kapatıyorsun; ortada, arkanda oyuncu varken pozisyonsuz flat etme. İkincisi derinlik: set-mining yapıyorsan efektif stack, yaptığın call'un en az on beş katı olmalı. Yani yüz big blind'de üç big blind'lik bir call yapıyorsun ve arkanda kırk beş big blind'den fazla varsa, tamam. Ama kırk big blind'de aynı call'u yaparsan, oran tutmaz, set gelse bile kârını çıkaramazsın. Üçüncüsü ödeyen rakip: set yaptığında sana para verecek biri olmalı; sıkı bir reg karşısında set-mining kârsızdır çünkü set'i görünce durur. Bir de multiway uyarısı: arkanda 3-bet edebilecek agresif bir oyuncu varsa, sıkı bir elle flat etmek seni squeeze'e açık bırakır. O durumda ya 3-bet'e yükselt ya da eli at; ortada flat etme."},{title:"Squeeze — en kârlı tek hamle",bullets:["Coldcaller aralığı sıkı ama zayıf: 4-bet edemez, çoğunu fold eder.","VALUE: JJ+, AQs+, AKo. BLÖF: A5s–A4s, KQs, AJs.","Coldcaller balıksa blöfü kes — sadece value squeeze."],narration:"Canlı turnuvada en kârlı tek hamleyi ayrı bir slaytta hak ediyor: squeeze. Squeeze, biri açıp bir başkası call ettikten sonra senin çektiğin büyük 3-bet'tir. Neden bu kadar kârlı? Çünkü coldcaller'ın aralığı sıkı ama zayıftır — call ederek 'orta güçte bir elim var' demiştir; 4-bet edemez, ve baskı gelince çoğu eli fold eder. Value tarafın: kuvöz kuvöz ve üstü, as kız suited ve üstü, as kral offsuit. Blöf tarafın: as beş ve as dört suited, kral kız suited, as jek suited — bunlar hem blocker taşır hem de call gelirse oynanabilir. Boyut, pozisyonluysan dört buçuk kat, körlerden ise beş kat ve üstü. Bir ayar daha: coldcaller sıkıysa blöf tarafını genişlet, çünkü fold edecek. Ama coldcaller balıksa, yani fold etmiyorsa, blöfü tamamen kes ve sadece value squeeze at — balığa blöf yapılmaz, balık ödetilir."},{title:"Stack modu üst katmanı",table:{section:"Bölüm 4",sub:"4.7",caption:"45bb'de 130bb aralığı oynama."},ruleBox:"En sık hata: 45bb'de 130bb aralığı oynamak — küçük çiftle flat, suited connector'la 3-bet blöfü. İkisi de 45bb'de zarar.",narration:"Son olarak bütün bu aralıkların üstüne stack modu katmanını bindiriyoruz, çünkü aralık moda göre değişir. İki yüz big blind ve üstünde value ağırlıklı oynarsın, blöf azdır, flat en geniştir çünkü implied odds tavandadır. Yüz ile yüz elli arası standart mod; bu bölümdeki tablolar aynen geçerli. Altmış ile yüz arası daha polarize olursun, blöf artar ama flat daralır çünkü set-mining zayıflar. Kırk ile altmış arası lineer ya da merged oynarsın, flat neredeyse yok — ya 3-bet ya fold. Yirmi beş ile kırk arası 3-bet artık commit demektir; 3-bet edeceğin el, gelen 4-bet'e de devam edebilecek bir el olmalı. Yirmi beşin altında yapı basitleşir: jam ya da fold, 3-bet-fold diye bir şey yok. Ve en sık yapılan hatayı tekrar söylüyorum, çünkü çok pahalı: kırk beş big blind'de yüz otuz big blind aralığı oynamak. Küçük çiftle flat edip set arıyorsun ama derinlik yok; suited connector'la 3-bet blöfü çekiyorsun ama fold equity ve implied odds yok. İkisi de bu derinlikte doğrudan zarar. Önce mod, sonra aralık — bu modülün ve bir önceki modülün ortak cümlesi bu."}]},{id:"M6",title:"4-bet — 3-bet'e cevap",chapter:"Bölüm 4.5",minutes:4,slides:[{title:"Canlıda 4-bet",bullets:["Canlıda 4-bet blöfü neredeyse yoktur.","4-bet gördüğünde QQ ve altını bile ciddiye al.","AK otomatik 5-bet değildir."],ruleBox:"Canlıda 4-bet neredeyse hep gerçek eldir; kimse fold etmiyorsa blöf 4-bet para yakmaktır. AK'yı otomatik 5-bet'leme.",narration:"4-bet aralığına geçmeden önce canlı gerçeği koyalım, çünkü teoriyle canlı alan burada ayrışıyor. Canlıda 4-bet blöfü neredeyse yoktur; insanlar 4-bet'i gerçek elle çeker. Bunun senin için iki sonucu var. Birincisi: biri sana 4-bet yaptığında ciddiye al — kuvöz kuvöz ve altını bile hafife alma, çünkü karşındaki büyük ihtimalle gerçekten güçlü. As kral'ı görünce refleksle beş-bet çakma; canlıda o 4-bet çoğu zaman senden önde. İkincisi: sen 4-bet blöfü yaparken çok dikkatli ol; kimse fold etmiyorsa attığın blöf 4-bet sadece para yakmaktır. Yani hem savunmada hem hücumda kural aynı: canlıda 4-bet değerlidir, blöf değil."},{title:"3-bet'e cevabın (tablo)",table:{section:"Bölüm 4",sub:"4.5",caption:"4-bet'li pot şişmiş pottur."},visuals:[{kind:"range",value:"KK+, AKs, QQ (karışım), AKo (karışım)",blof:"A5s, A4s",flat:"JJ, TT, AQs, KQs",valueLabel:"4-bet value",blofLabel:"Blöf 4-bet",caption:"4-bet cevabın: value + karışım + blöf; flat IP 150bb+."}],ruleBox:"4-bet'li pot şişmiş pottur. AA ile flop+turn value alıp kötü river'da jam etmek, Vaka 3'ün birebir tekrarıdır.",narration:"Şimdi madalyonun öbür yüzü: sen açtın ve sana 3-bet geldi. Cevabın ne? Tabloyu takip et. 4-bet value: kral kral ve üstü, ve geç pozisyondan gelen 3-bet'e karşı as kral. 4-bet karışım: kuvöz kuvöz ve as kral offsuit'i geç pozisyon 3-bet'ine karşı bazen 4-bet'lersin ama erken pozisyona karşı 4-bet'lemezsin. 4-bet blöf as beş ve as dört suited ile mümkün ama canlıda çok çok seyrek; kimse fold etmiyorsa blöf 4-bet sadece para yakmaktır. Flat, yani 3-bet'i call etmek: pozisyonlu ve yüz elli big blind derinlikte kuvöz kuvöz, on on, as kız suited, kral kız suited; fiyat üç katın altındaysa suited connector'lar da eklenir. Ve fold: pozisyonsuz tüm offsuit broadway'ler — as jek, kral kız, as on — 3-bet'e karşı çöptür, atarsın. Şimdi en kritik uyarı: 4-bet'li pot şişmiş pottur. Orada as as ile flop ve turn value alıp, kötü bir river'da kalan stack'i jam etmek, birinci modüldeki üçüncü vakanın, o iki dört beş altı boardunun birebir tekrarıdır. Kural değişmiyor: river'da senden zayıf el ödemeyecekse jam value değildir. Preflop aralığını doğru kurmak, seni o river kararına hiç düşürmemenin yolu."},{title:"4-bet boyutu",bullets:["4-bet IP: 3-bet'in 2.2×","4-bet OOP: 3-bet'in 2.5×"],ruleBox:"Boyutu ezberle, masada düşünme.",narration:"Son olarak boyut. Pozisyonluysan 4-bet, 3-bet'in iki virgül iki katıdır. Pozisyonsuzsan biraz daha büyük yaparsın: 3-bet'in iki virgül beş katı. Pozisyonsuz daha büyük olmasının sebebi, zayıf ellere iyi fiyat verip onları potta tutmamak. Bu iki sayıyı refleks hâline getir; boyut için düşünmeye başlarsan hem tempoyu kaçırırsın hem de boyutundan okuma verirsin."}]},{id:"M7",title:"25–30bb bandı",chapter:"Bölüm 5 ★",minutes:6,slides:[{title:"Bandın karakteri",bullets:["Değer FOLD EQUITY'den gelir, kart tamamlamaktan değil.","Aradığın el 'gelişebilen' değil, şimdiden iyi olan: as, broadway, çift.","Karar sırası iki saniyede: MOD → POZİSYON → EL."],ruleBox:"25–30bb'de değer fold equity'den gelir, kart tamamlamaktan değil. 28bb'de suited connector geldiğinde üçüncü adıma (EL) bile geçmiyorsun.",visuals:[{kind:"hand",cards:"AK KQ 99",label:"Şimdiden iyi el: as / broadway / çift"}],narration:"Şimdi turnuvanın en sık yaşanan ve en çok chip kaybedilen bandına geliyoruz: yirmi beş, otuz big blind. Bir önceki modüldeki 3-bet tabloları yüz, yüz elli big blind içindi; bu derinlikte onlar geçersiz, çünkü oyunun motoru değişiyor. Tek cümlede: bu bantta değer, fold equity'den gelir, kart tamamlamaktan değil. Yani aradığın el 'gelişirse iyi olur' diyen bir el değil, şimdiden iyi olan bir el: bir as, bir broadway, bir çift. Neden? Çünkü spekülatif ellerin tek motoru olan implied odds yirmi sekiz big blind'de çalışmaz. Set ya da kent yaptığında sana ödeyecek stack yok; tamamlamadığın yüzde seksen beş durumda ise elinde hiçbir şey kalmıyor, çaresizsin. O yüzden karar sıranı iki saniyeye indir: önce mod, sonra pozisyon, sonra el. Bu bantta suited connector geldiğinde üçüncü adıma, yani 'elim ne' sorusuna bile geçmiyorsun — mod ve pozisyon zaten cevabı vermiş oluyor."},{title:"Açılış aralıkları (önünde kimse yok)",table:{section:"Bölüm 5",sub:"5.1",caption:"Boyut 2–2.2×. Bu derinlikte daha büyük açmanın anlamı yok."},narration:"Önünde kimse yokken açacağın aralıklar bunlar; boyut iki, iki virgül iki kat, daha büyük açmanın bu derinlikte anlamı yok. Tabloyu pozisyon pozisyon oku. Erken pozisyonda, yani yu ti ci ve artı birde, dar açarsın: yedi yedi ve üstü çiftler, as on suited ve üstü, as jek offsuit ve üstü, kral kız suited. Pozisyon geç indikçe aralık genişler; button'da neredeyse bütün as'leri, geniş suited kralları ve bağlı elleri açarsın. Dikkat: buradaki eller 'şimdiden iyi' eller ekseninde seçildi — as'ler, broadway'ler, çiftler ağırlıkta. Derin stack'te açtığın küçük suited connector'ların çoğu bu tabloda yok, çünkü onların motoru bu bantta durmuş durumda."},{title:"3-bet = JAM",table:{section:"Bölüm 5",sub:"5.2",caption:"Bu bantta FLAT YOK — ne SB'den, ne BB'den, ne IP'den."},visuals:[{kind:"range",value:"TT+, AQs+, AKo",valueLabel:"Jam",caption:"Erken pozisyon açılışına jam aralığı (örnek). Yeşil = doğrudan all-in."}],ruleBox:"Bu bantta 3-bet = commit. '3-bet edip fold' diye bir yapı yok; doğrudan all-in gidiyorsun. Flat yok.",narration:"Bu bantta 3-bet kelimesini kafandan sil, yerine tek kelime koy: jam. Yirmi sekiz big blind'de 3-bet yapmak commit olmak demektir; '3-bet edip sonra fold ederim' diye bir yapı yok, çünkü stack'in buna izin vermiyor. O yüzden 3-bet edeceğin her eli doğrudan all-in olarak düşün. Kime karşı ne jam ediyorsun? Erken pozisyon açılışına on on ve üstü, as kız suited ve üstü, as kral offsuit. Cut-off ya da button açılışına daha geniş: sekiz sekiz ve üstü, as on suited ve üstü, as kız offsuit ve üstü, kral kız suited. Ve masada geniş açıp jam'e fold eden bir chip leader varsa, ona karşı aralığını daha da genişletirsin: yedi yedi, as dokuz suited, as jek offsuit, kral kız suited. En kritik cümle: bu bantta flat yok. Ne smol blind'den, ne büyük körden, ne pozisyonlu. Bir önceki modülün o geniş flat tabloları yüz big blind üstü dünyaya ait; burada ya jam edersin ya fold."},{title:"Jam'e karşı call + fold listesi",bullets:["Jam'e karşı call: 99+, AJs+, AQo+. Bundan aşağısı call değil.","Otomatik fold: tüm suited connector'lar (T9s, 98s, 87s, 76s, 65s, 54s).","Otomatik fold: suited gapper'lar; zayıf offsuit broadway (KJo, QJo, JTo); küçük çiftle FLAT."],visuals:[{kind:"range",value:"99+, AJs+, AQo+",valueLabel:"Call (jam'e karşı)",caption:"Rakip all-in geldiğinde call sınırı — altı call değil."},{kind:"hand",cards:"T9s 87s KJo",label:"Bu bantta otomatik fold"}],ruleBox:"Rakip all-in geldiyse: 99+, AJs+, AQo+. Bundan aşağısı 28bb'de call değil — ya jam'i sen yaparsın ya fold.",narration:"İki yön kaldı: sana jam gelirse ne call edersin, ve hangi elleri gözü kapalı atarsın. Rakip all-in geldiğinde call aralığın dar: dokuz dokuz ve üstü çiftler, as jek suited ve üstü, as kız offsuit ve üstü. Bunun altındaki hiçbir el yirmi sekiz big blind'de call değil — orada seçim ya jam'i senin yapman ya da fold. Fold listesi ise ezber: bütün suited connector'lar, yani on dokuz, dokuz sekiz, sekiz yedi, yedi altı, altı beş, beş dört suited — hepsi kayıtsız şartsız fold. Suited gapper'lar aynı şekilde. Zayıf offsuit broadway'ler — kral jek, kız jek, jek on offsuit — fold. Ve küçük çiftle flat etmek de yok; jam ayrı konu ama flat asla. Bu listeyi fold etmek zayıflık değil, cephane biriktirmek: spekülatif eli attığın her el, gerçek elle jam yapacağın anda arkanda duran chip demek."},{title:"Saha vakası — GGMasters",table:{section:"Bölüm 5",sub:"5.5",caption:"Üçünde de doğru cevap fold; belirleyici olan el değil, moddu."},visuals:[{kind:"hand",cards:"T9s 54s 87s",label:"Üçü de FOLD (28bb)"}],ruleBox:"Soru 'bu el yeterince iyi mi' değil, 'bu el bu stack'te oynanabilir mi'. Spekülatif elleri fold etmek, gerçek elle jam yapacağın cephaneyi korur.",narration:"Bunu gerçek bir seansta görelim. Temmuz'daki bir GGMasters'ta, yirmi sekiz big blind bandında masa sana aynı soruyu üç farklı elle sordu. Smol blind'de on dokuz suited, kırk bine call teklifi, arkanda yirmi sekiz big blind — fold, çünkü smol blind'den flat kayıp pozisyon. Büyük körde beş dört suited, yetmiş üç binlik potta otuz bin ödeyeceksin — fold, çünkü implied odds motoru çalışmıyor. Yine büyük körde sekiz yedi suited, aynı durum — el biraz daha iyi ama karar aynı, fold. Üç el, üç fold, ve belirleyici olan el değil moddu. Aynı seanstan doğru karar örneği de var: on on ile button'dan yirmi üç big blind jam; bir milyonluk chip leader call düşündü ve fold etti, pot alındı. Bölüm 3'ün kuralı işledi — otuz big blind altında orta çift post-flop eli değil, jam-or-fold elidir. Masada seni bekleyen soru 'bu el yeterince iyi mi' değil; 'bu el bu stack'te oynanabilir mi'."},{title:"Rakip okuma notu",bullets:["Chip leader jam'e bir kez fold ettiyse: ona karşı jam aralığını genişlet.","Geniş açıp jam'e katlanan profil, bu bantta masadaki en kârlı hedeftir.","Öncelik: (1) o açtığında jam, (2) BTN/CO'dan açıp blindleri topla."],narration:"Son bir okuma notu, çünkü bu bantta kâr rakip seçiminden geçiyor. Bir chip leader'ın jam'e bir kez fold ettiğini gördüysen, o bilgiyi sakla: o oyuncunun açılışlarına karşı jam aralığını genişlet. Neden? Çünkü geniş açıp jam'e katlanan bir profil, bu bantta masadaki en kârlı hedeftir — bol açıyor ama baskıya dayanamıyor, sen de o baskıyı fold equity'ye çeviriyorsun. Öncelik sıran şu: birincisi, o oyuncu açtığında ona jam; ikincisi, button ya da cut-off'tan kendin açıp blindleri toplamak. Bu bantta beklemek de bir silah, ama beklerken doğru hedefi işaretlemiş ol."}]},{id:"M8",title:"Turn'de draw",chapter:"Bölüm 6",minutes:4,slides:[{title:"Fold equity var mı",bullets:["Station'a semi-bluff = para yakma → check, bedava kart.","Reg'e karşı ve board senin aralığına uygunsa → bet.","Bet'te iki kazanma yolu: fold ettirmek VEYA tamamlamak."],narration:"Pokerin en sık yaşanan turn sorusu şu: elimde bir draw var, turn'de bet mi atayım yoksa bedava river mı göreyim? Karar üç faktöre bağlı, ilki fold equity. Karşındaki station tipiyse, yani fold etmeyen biriyse, ona semi-bluff atmak para yakmaktır; adam fold etmez, sen de çıplak equity'nle kalırsın. O durumda check et, bedava kartı al, draw'ını bedavaya çekmeye çalış. Ama karşındaki bir reg'se ve board senin aralığına uygunsa, o zaman bet at. Çünkü bet attığında iki kazanma yolun olur: ya rakip fold eder ve potu hemen alırsın, ya da call eder ama sen draw'ını tamamlayıp büyük potu alırsın. İki yollu kazanç, tek yollu kazançtan her zaman iyidir — yeter ki karşında fold edebilecek biri olsun."},{title:"Draw'ın kalitesi",table:{section:"Bölüm 6",sub:"5.2",caption:"Tamamlanınca ödenir mi?"},visuals:[{kind:"hand",cards:"97s",label:"Düşük flush draw — check ağırlıklı"}],narration:"İkinci faktör draw'ın kalitesi, ve buradaki asıl soru şu: bu draw tamamlanınca bana ödeme yapılır mı? Nut flush draw'da bet ağırlıklı oynarsın; çünkü tamamlanınca action alırsın, üstelik blokerlerin güçlü olduğu için rakibin en iyi ellerini elinden alıyorsun. Düşük flush draw'da, mesela dokuz yedi suited'in flush draw'unda, check ağırlıklı oynarsın; çünkü tamamlansa bile daha üstün bir flush'a ödeme yapma riskin var, ikinci en iyi flush pahalı bir eldir. Açık uçlu kent draw'unda, düz bir boardda, hem bet hem check meşrudur; bu gizli bir güçtür, tamamlanınca çok ödenir, kararı rakibe göre verirsin. Gutshot'ta ise neredeyse hiçbir zaman semi-bluff yakıtı değildir; out'u az, gizliliği düşük, o yüzden check. Draw'ın rengine değil, tamamlandığında sana para getirip getirmeyeceğine bak."},{title:"IP / OOP ayrımı",bullets:["IP: check gerçekten bedava kart demek.","OOP: check bedava kart garantisi vermez.","OOP'ta draw'ı ya bet'le ya da call planıyla check et."],narration:"Üçüncü faktör pozisyon, ve bu çok önemli çünkü 'bedava kart' fikri pozisyona göre anlam değiştirir. Pozisyonluysan, yani son konuşan sensen, check etmek gerçekten bedava kart demektir; sen check edersin, rakip de check ederse river'ı hiç para vermeden görürsün. Ama pozisyonsuzsan, check bedava kart garantisi vermez; sen check edersin, rakip bet atar ve senin 'bedava göreceğim' planın çöker, şimdi para koymadan devam edemezsin. O yüzden pozisyonsuzken draw'ını ya bet'le, yani inisiyatifi al, ya da net bir call planıyla check et — 'nasılsa bedava görürüm' diyerek pasif check etme, çünkü o bedava çoğu zaman gelmez. Özetle: turn draw kararında üç şeyi sırayla sor — fold equity var mı, draw'ım tamamlanınca ödenir mi, ve pozisyonlu muyum."}]},{id:"M9",title:"PLO temelleri",chapter:"Bölüm 8",minutes:5,slides:[{title:"Zihniyet farkları",bullets:["Equity'ler yakın koşar — %60/%40 iyi favoriliktir.","Nut hakimiyeti her şeydir; ikinci en iyi el pahalıdır.","İki pot bet = stack ortada."],narration:"Şimdi farklı bir oyuna, Pot Limit Omaha'ya geçiyoruz; ama en çok işine yarayacak şey, NLH kafasıyla PLO oynamanın tuzaklarını bilmek. Önce zihniyet farkları. Birincisi: PLO'da equity'ler birbirine çok yakın koşar. NLH'de yüzde seksene yirmi favoriliğe alıştın; PLO'da yüzde altmışa kırk zaten iyi bir favoriliktir. Yani hiçbir el burada rahat değildir, kenarların incedir. İkincisi: PLO'da nut hakimiyeti her şeydir. İkinci en iyi el, yani nut'ın bir altı, PLO'da pahalı bir eldir; sürekli 'nut çekebiliyor muyum' diye sorarsın. Üçüncüsü: PLO'da pot çok hızlı büyür. İki pot bet üst üste geldiğinde stack zaten ortadadır; NLH'deki gibi yavaş şişme yok, üçüncü sokağa geldiğinde geri dönüşü olmayan bir noktaya gelirsin. Bu üç farkı içine yerleştir, çünkü NLH reflekslerin PLO'da seni yanıltacak."},{title:"El seçimi",table:{section:"Bölüm 8",sub:"7.2",caption:"Dört kart birlikte çalışmalı."},narration:"PLO'da el seçimi dört kartın birlikte çalışmasıyla ilgilidir. Dangler dediğimiz şey, dördüncü kartı diğerleriyle bağlantısız olan eldir; mesela as as yedi iki. Böyle bir el aslında üç kartlı bir eldir, dördüncü kart ölüdür, o yüzden çoğu zaman fold. Rundown, jek on dokuz sekiz gibi birbirine bağlı dört karttır; özellikle çift suited olduğunda, yani iki ayrı flush imkânı taşıdığında çok güçlüdür. Çıplak as as, yani yanında destek olmayan as as, PLO'da tek per muamelesi görür — NLH'deki gibi otomatik canavar değildir; nut potansiyeli yoksa büyük pot oynamaz. Ve gerçek silah: wrap artı flush draw. Wrap, boarda birden çok kartla bağlanıp on üç ve üzeri out veren dev bir kent draw'udur; üstüne flush draw da eklenince bu el agresif oynanır, çünkü equity'si dev ellerle bile başa baş koşar. El seçerken tek tek kartlara değil, dördünün birlikte ne yaptığına bak."},{title:"NLH oyuncusunun tuzakları",bullets:["AA'yı NLH gözüyle görmek — çift suited değilse sadece bir çift.","Top pair / top two ile stack-off — iki per neredeyse hiç nut değil.","Blöf frekansını NLH'den taşımak.","OOP 3-bet potu oynamak — şüphe hâlinde flat et."],narration:"Son olarak, NLH'den PLO'ya geçen bir oyuncunun düştüğü dört tuzak — bunlar senin uyarı levhaların. Birincisi as as'i NLH gözüyle görmek: PLO'da as as, çift suited değilse ve board'a bağlanmıyorsa, sadece bir çifttir; ona canavar muamelesi yaparsan büyük pot oynayıp kaybedersin. İkincisi top pair ya da top two ile stack-off etmek: PLO'da iki per neredeyse hiçbir zaman nut değildir; kentler, setler, flush'lar sürekli masadadır, iki per'le tüm stack'i ortaya sürmek hatadır. Üçüncüsü blöf frekansını NLH'den taşımak: PLO'da aralıklar daha bağlıdır, herkesin eli boarda daha çok temas eder, o yüzden blöf daha az geçer; NLH'deki blöf sıklığını buraya taşırsan yanarsın. Dördüncüsü pozisyonsuz 3-bet potu oynamak: bu PLO'nun en zor spotudur, çünkü equity'ler yakın ve pozisyonsuz karar vermek çok pahalı; şüphe hâlinde 3-bet'lemek yerine flat et. Bu dört tuzağı bilmek, PLO masasında NLH refleksinin seni batırmasını engeller."}]}];function ga(a){return te.find(n=>n.id===a)}const W="ept:";let Me=!1;function w(a,n){try{const r=localStorage.getItem(W+a);return r?JSON.parse(r):n}catch{return n}}function xa(a){try{return localStorage.getItem(W+a)}catch{return null}}function O(a,n){try{localStorage.setItem(W+a,JSON.stringify(n))}catch(r){console.warn("ept: localStorage.setItem başarısız — kayıt yapılamadı",r),Me||(Me=!0,typeof window<"u"&&window.dispatchEvent(new CustomEvent("ept:storage-fail")))}}function ar(){const a={};for(let n=0;n<localStorage.length;n++){const r=localStorage.key(n);if(r&&r.startsWith(W))try{a[r]=JSON.parse(localStorage.getItem(r))}catch{a[r]=localStorage.getItem(r)}}return JSON.stringify(a,null,2)}function nr(a){try{const n=JSON.parse(a);let r=0;for(const[i,l]of Object.entries(n))i.startsWith(W)&&(localStorage.setItem(i,typeof l=="string"?l:JSON.stringify(l)),r++);return{ok:r>0,count:r}}catch{return{ok:!1,count:0}}}const Ba=[{q:"Şişmiş potta AA'n var, kötü river geldi; senden zayıf hiçbir el ödemeyecek. Jam?",options:["Jam — value","Check — jam value değil"],correct:1,explain:"River'da senden zayıf el ödemeyecekse jam value değildir. Kök hata tam burada.",source:"Bölüm 0 / 7",kavram:"kök-hata"},{q:"Şişmiş potta (3-bet pot / stack'inin ~%40'ı ortada) tek per'in var. Rakibi 'zayıf görünüp' river'da blöfe itmek için ince (thin) value bet atsan?",options:["Thin bet — rakibi blöfe iter","Check — küçük pota call, büyük pota fold"],correct:1,explain:"Tek per şişmiş potta bluff-catcher (cümle 1). Cümle 2: kötü river'da küçük pota check-call, büyük pota check-fold — bet yok. İnce bet yakalamak istediğin blöfleri fold ettirir; check-call zaten blöf-indükleyen hattır.",source:"Bölüm 0.1 / 0.2",kavram:"kök-hata"},{q:"Islak boardda top pair'in var (KTo), OOP'sun, rakip cbet attı. Check-raise all-in?",options:["Check-raise all-in","Check-call, sonra değerlendir"],correct:1,explain:"Check-call. Top pair ıslak boardda büyük pot başlatıcı değildir; check-raise all-in seni QQ gibi flat'lenmiş ellere sokar. (Vaka 2 — gerçek elenme.)",source:"Bölüm 7 / Vaka 2",kavram:"kök-hata"},{q:"BB'de T6s, BTN min-raise call. Flop A-T-3, 1/3 pot call. Turn 5 check-check. River T (board A-T-3-5-T) → trip 10, kicker 6. Check ettin, BTN thin bet. Check-raise all-in?",options:["Check-raise all-in","Check-call — bluff-catcher"],correct:1,explain:"Senden zayıf el all-in'i ödemez: her 10 kicker'ını geçer, boat'lar önde. Trip'in bu runout'ta bluff-catcher → check-call. Raise blöfleri fold ettirir, seni yalnız geçen el öder (cümle 2). Senin gerçek elenmen (B7 Vaka 4).",source:"Bölüm 7 / Vaka 4",kavram:"kök-hata"},{q:"Board bölüşmeye açık ve rakip sana all-in geldi. Onun eli bölüşen bir el mi?",options:["Evet, bölüşmeye oynuyor","Hayır — chop'lar jam atmaz"],correct:1,explain:"Chop'lar jam atmaz; rakip bölüşen eli aralığından çıkarmıştır, jam seni geçen eldir.",source:"Bölüm 0 / 1",kavram:"chop"},{q:"Bir eli blöf yakıtı yapan üç kriter hangisi?",options:["Bloker, bağlantı, board sahipliği","Suited, yüksek kart, pozisyon"],correct:0,explain:"Üç kriter: bloker, bağlantı, board sahipliği. Biri eksikse blöf değil, kaybedilen chip.",source:"Bölüm 1.1",kavram:"blöf-kriter"},{q:"J2s (suited). Blöf yakıtı mı?",options:["Evet — suited","Hayır — bloker yok, bağlantı yok"],correct:1,explain:"Suited kandırır. Aranan bağlı ve bloker; J2s ikisinde de zayıf, üstelik alt flush riski.",source:"Bölüm 1.2",kavram:"suited-tuzağı"},{q:"Check-raise blöfü hangi boardda yaparsın?",options:["T98 — senin boardun","A-K-7 kuru — rakibin boardu"],correct:0,explain:"Check-raise blöf SENİN aralığına çarpan boardlarda (T98, 765). A-K kuruda call et.",source:"Bölüm 1.3",kavram:"board-sahipliği"},{q:"Station / rec tipi (fold etmeyen) rakibe ne yaparsın?",options:["Blöf","Value bet — fold etmez"],correct:1,explain:"Fold etmeyen oyuncuya blöf para yakmaktır; elin iyiyse ödet, kötüyse deneme.",source:"Bölüm 1.4",kavram:"kime-blöf"},{q:"JTs, KQ, KJ, 97s — bu ellerin rolü nedir?",options:["Büyük pot başlatıcı (3-bet / stack-off)","Open / flat / BB-defend"],correct:1,explain:"Aldatıcı orta eller: küçük pot kazananı, büyük pot kaybedeni. Asla büyük pot başlatıcı değil.",source:"Bölüm 2",kavram:"aldatıcı-eller"},{q:"42bb, HJ reg (~%22) açtı, sen CO'da KQo. Karar?",options:["3-bet","Call","Fold"],correct:2,explain:"Fold. Ham equity ~%45 ama realize edilemiyor; en iyi floplar en pahalı tuzaklar (K→AK, Q→AQ).",source:"Bölüm 2.1",kavram:"kqo-vaka"},{q:"Her elden önce sorulacak İLK soru nedir?",options:["Hangi el?","Hangi stack modundayım?"],correct:1,explain:"Önce mod, sonra aralık. Aynı el farklı modda farklı bir eldir.",source:"Bölüm 3",kavram:"stack-modu"},{q:"28bb, elinde 88. Nasıl oynarsın?",options:["Post-flop set-mining","Jam ya da fold"],correct:1,explain:"30bb altı orta çiftler jam-or-fold; set gelmezse devam stack'i yok, gelse maksimum alamazsın.",source:"Bölüm 3.1",kavram:"orta-çift-30bb"},{q:"Bubble, solunda büyük stack'ler var. Açılış aralığını?",options:["Genişlet","Daralt — seni cezasız 3-bet ederler"],correct:1,explain:"Solunda büyük stack varsa daralt. Bubble'da 30bb ≠ Day 1'de 30bb.",source:"Bölüm 3.2",kavram:"icm"},{q:"Canlı turnuvada kâr esas nereden gelir?",options:["Blöf 3-bet","Daha geniş value 3-bet"],correct:1,explain:"Alan 3-bet'e az fold eder; blöfü kıs, value 3-bet'i genişlet.",source:"Bölüm 4.1",kavram:"canlı-value"},{q:"Canlıda biri sana 4-bet yaptı, elinde AK. Ne yaparsın?",options:["Otomatik 5-bet","Ciddiye al — canlıda 4-bet blöfü yok"],correct:1,explain:"Canlıda 4-bet neredeyse hep gerçek eldir; QQ ve altını ciddiye al, AK otomatik 5-bet değil.",source:"Bölüm 4.1 / 4.5",kavram:"4bet-cevap"},{q:"Coldcall'un üç şartından (pozisyon, derinlik, ödeyen rakip) biri sağlanmıyor. Flat?",options:["Yine de flat","Flat etme"],correct:1,explain:"Üçü aynı anda sağlanmıyorsa flat etme; ya 3-bet'e yükselt ya at.",source:"Bölüm 4.4",kavram:"coldcall"},{q:"Biri açtı, bir başkası call etti (coldcaller). En kârlı hamlen?",options:["Flat","Squeeze"],correct:1,explain:"Coldcaller aralığı sıkı ama zayıf: 4-bet edemez, çoğunu fold eder. Squeeze en kârlı hamle.",source:"Bölüm 4.6",kavram:"squeeze"},{q:"OOP 3-bet aralığın, IP aralığına göre nasıl olmalı?",options:["Daha geniş","Belirgin daha sıkı"],correct:1,explain:"OOP şişmiş potta tek per bluff-catcher'dır; bu yüzden OOP aralıkları belirgin daha sıkı.",source:"Bölüm 0.8 / 4.0",kavram:"oop-sıkı"},{q:"Turn'de draw'ın var, karşında station (fold etmez). Semi-bluff bet?",options:["Bet — fold ettir","Check — bedava kart"],correct:1,explain:"Station fold etmez; semi-bluff para yakar. Check et, bedava river gör, draw'ı bedava çek.",source:"Bölüm 6",kavram:"turn-fold-equity"},{q:"PLO'da çıplak (nut potansiyeli olmayan) AA neye benzer?",options:["Canavar el","NLH'deki tek per — büyük pot oynamaz"],correct:1,explain:"PLO'da çıplak AA, NLH'deki tek per'dir. Nut potansiyeli yoksa el büyük pot oynamaz.",source:"Bölüm 0.10 / 8",kavram:"plo-aa"},{q:"25–30bb bandında değer esas nereden gelir?",options:["Kart tamamlamaktan (implied odds)","Fold equity'den"],correct:1,explain:"Bu bantta değer fold equity'den gelir. Aradığın el gelişebilen değil, şimdiden iyi olan: as, broadway, çift.",source:"Bölüm 5.0 / 0.11",kavram:"25-30bb-değer"},{q:"28bb, 3-bet etmek istiyorsun. Yapı nedir?",options:["3-bet edip fold'a hazır ol","3-bet = jam (commit)"],correct:1,explain:"Bu bantta 3-bet commit demektir; '3-bet edip fold' yok, doğrudan all-in. Bu bantta flat da yok.",source:"Bölüm 5.2",kavram:"3bet-jam"},{q:"28bb, SB'desin, elin T9s, BTN açtı, 40K'ya call teklifi var. Karar?",options:["Call","Fold"],correct:1,explain:"Fold — SB'den flat kayıp pozisyon, 28bb'de implied odds motoru çalışmaz. (GGMasters saha vakası)",source:"Bölüm 5.5",kavram:"25-30bb-fold"},{q:"28bb, elinde 87s (suited connector). Karar?",options:["Uygun spotta oyna","Otomatik fold"],correct:1,explain:"Bu bantta tüm suited connector'lar kayıtsız şartsız fold; motorları (implied odds) çalışmıyor.",source:"Bölüm 5.4",kavram:"suited-connector-fold"},{q:"28bb, sana jam geldi. Call sınırın nedir?",options:["Geniş: çoğu broadway","99+, AJs+, AQo+"],correct:1,explain:"Jam'e karşı call 99+, AJs+, AQo+; bundan aşağısı call değil — ya jam'i sen yaparsın ya fold.",source:"Bölüm 5.3",kavram:"jam-call"},{q:"Chip leader'ın jam'e bir kez fold ettiğini gördün. Ona karşı jam aralığın?",options:["Daralt","Genişlet"],correct:1,explain:"Geniş açıp jam'e katlanan profil bu bantta en kârlı hedeftir; ona karşı jam aralığını genişlet.",source:"Bölüm 5.6",kavram:"rakip-okuma"},{q:"52 BB stack'le CO'dan AA açtın. BTN'deki 48 BB'lik reg 3-bet yaptı, sen 4-bet ettin, call geldi. Pot ~44 BB, SPR ~1.3. Flop T♠ 9♠ 8♣. 1/3 pot c-bet attın, rakip RAISE yaptı. İçinden 'AA + SPR 1.3 = zaten bağlıyım' geçiyor. Aksiyonun?",options:["All-in — AA + SPR 1.3, zaten bağlısın; draw'lara bedava kart verme","Fold — pot 40 BB'yi geçti, tek pair alarm; T♠ 9♠ 8♣ üzerindeki raise aralığına karşı AA ile stack yarışı yok","Call, turn'de her barrele devam — pot oddsların call'ı zorunlu kılıyor","Küçük re-raise — bilgi al, rakibi teste çek"],correct:1,explain:"MW.9 kök hata: pot 40 BB'yi geçtiyse tek pair (AA dahil) = alarm; varsayılan pot kontrolü + bluff-catcher, stack yarışı değil. MW.6: 'pot büyüdü bağlandım' kök hatadır — SPR'nin düşük olması commit nedeni DEĞİLDİR. T♠ 9♠ 8♣ gibi ıslak board'da raise aralığı set/straight/kombo-draw ağırlıklıdır; AA burada tek pair'dir.",source:"Bölüm 17",kavram:"kök-hata"},{q:"34 BB'le BB'de KK. HJ'deki 38 BB'lik sıkı-pasif oyuncu open yaptı, sen 3-bet ettin, call geldi. Flop Q-J-T rainbow; c-bet attın, call geldi. Turn 9♦ (board Q-J-T-9). İçinden 'check-raise all-in ile inisiyatifi geri alayım' geçiyor. Doğru hat?",options:["Check-raise all-in — K-yüksek straight'in var, inisiyatifi geri al","Büyük bet — straight'ini koru, bedava kart verme","Check-fold — sıkı-pasifte AK kesin vardır","Check-call, river'da yeniden değerlendir — her K seninle chop, AK seni yener; sıkı-pasifin devam aralığı tam bu bölge"],correct:3,explain:"MW.9 kök hata korkuluğu: check-raise all-in dürtüsü (KTo dersi) — doğru hat check-call-sonra-değerlendir. Q-J-T-9'da KK ile K-yüksek straight'in var ama her tekli K chop, AK broadway ile seni yener; all-in yalnız seni yenen/chop eden ellerden aksiyon alır. MW.9 chop mekaniği: river'da/turn'de board'u yeniden oku.",source:"Bölüm 17",kavram:"kök-hata"},{q:"Bubble'a 25 kişi kaldı, stack'in 41 BB. Seni cover eden chip lideri (140 BB) BTN'den üst üste 3. kez open yaptı. BB'de QQ tutuyorsun. Planın ne; 3-bet'ine jam gelirse call var mı?",options:["3-bet (value); jam gelirse FOLD — bubble'da cover'a karşı tüm stack aralığı ~KK+; QQ, {KK+, AK} jam'ine karşı ICM'li eşiği tutmaz","3-bet ve jam'e call — QQ bubble'da fold edilmez, adam üst üste 3. kez açıyor","Sadece call — cover'a karşı 3-bet tamamen yasak, potu küçük tut","Fold — chip lideriyle hiçbir pot oynama, ondan uzak dur"],correct:0,explain:"MW.9 ICM eşikleri: QQ, cover'ın {KK+, AK} jam'ine ~%40 equity alır; bubble ICM primi %6–10 ile gereken ~%48–50 → FOLD. MW.8: 'Bubble'da cover'a karşı QQ bile 4-bet-call olmayabilir'; pratik kural tüm stack için KK+. QQ yine de value 3-bet'tir (MW.4: BB'den 99+, çok açan reg hedef); hata 3-bet'te değil jam'e call'dadır. Cover'dan tamamen kaçmak da strateji değildir (MW.9B). (17.4 'cover edene 3-bet YAPMA' BLÖF 3-bet içindir; value 3-bet — QQ, jam'e devam KK+ — serbest.)",source:"Bölüm 17 / 17.4",kavram:"icm-cover"},{q:"Derin ITM'desin. 3-bet potunda IP olarak TT ile oynuyorsun. Flop 8-6-2 rainbow'da c-bet'ine check-call geldi; turn 8 (board 8-6-2-8) check-check geçti. River A geldi ve rakip POT büyüklüğünde DONK bet attı. İçinden 'overpair'im vardı, A sadece korkutmaca' geçiyor. Kararın?",options:["Call — A korkutmaca, TT hâlâ 8'lerin ve altının önünde","Raise all-in — blöfü cezalandır, zayıf Ax'i fold'a zorla","Fold — overpair + kötü river + BÜYÜK bet; pot donk polarizedir ve senden kötü el bu boyutu betlemez","Call — pot oddsların ~%33, rakip yeterince sık blöf yapar"],correct:2,explain:"MW.6 river disiplini: overpair + kötü river → küçük bet'e check-call, BÜYÜK bet'e fold. A, TT için en kötü karttır ve pot donk polarize aralıktır (MW.9 online telafi: overbet/pot polarize = bluff-catcher matematiği); 'korkutmaca' rasyonalizasyonu MW.9 kök hata ailesindendir. Derin ITM'de MW.8 gereği ICM > chip-EV, fold daha da netleşir.",source:"Bölüm 17",kavram:"kök-hata"},{q:"47 BB'le BB'desin; BTN'in tek raise'ine A9o ile call ettin. Board A-9-4 iki kupa: check-raise yaptın, call geldi. Turn 6♥ ile flush tamamlandı; bet attın, rakip RAISE yaptı. 'İki pair'im var, güvendeyim' diyorsun. Kararın?",options:["3-bet all-in — iki pair önde, draw'ları ödet","Raise'e bir kez call — iki pair artık sadece bluff-catcher (+4 out boat); river'da geliştiremezsen büyük bet'e fold, stack yarışı yok","Call, river'da da her bet'e call — pot büyüdü, artık bağlısın","Fold — flush tamamlandıysa iki pair anında çöptür"],correct:1,explain:"MW.6/MW.9: flush tamamlayan 6♥ turn'ünde, check-raise'ine call etmiş rakipten gelen raise ağırlıkla tamamlanmış flush'tır — iki pair 'güvende' değil, bluff-catcher'a döner. Doğru hat eskalasyon değil call-sonra-değerlendir (MW.9 check-raise all-in dürtüsü dersi); jam draw'lara değil yapılmış ellere ödeme yapar. 'Pot büyüdü bağlandım' ise MW.6'daki kök hatadır.",source:"Bölüm 17",kavram:"kök-hata"},{q:"56 BB, Faz 1 (bubble uzak). HJ'den A9s açtın; BTN'deki 48 BB'lik reg ~3x 3-bet yaptı (postflop OOP kalacaksın). Aksiyonun?",options:["Call — suited as, pozisyonsuz da olsa flop'a bakılır","4-bet bluff — A bloker'ın var, reg'i test et","Jam — reg'in 3-bet'ini kır","Fold — OOP'de 3-bet'e devam aralığı dar: KK+ 4-bet, QQ/AK karışık, JJ–TT/AQs call; A9s bunun dışında"],correct:3,explain:"MW.5: open'ına OOP'de 3-bet gelince aralık daralır — KK+ 4-bet, QQ/AK karışık, JJ–TT/AQs call, gerisi fold; A9s 'gerisi'ndedir. 4-bet bluff cephanesi A5s–A4s ile sınırlı ve düşük frekanstır. Call ise MW.9B'nin uyardığı asıl tehlikedir: 3-bet call yiyip zayıf elle şişmiş pota girmek.",source:"Bölüm 17",kavram:"3bet-aralik"},{q:"38 BB stack'le (Mod B) CO'dasın, elinde 66; önün fold. Açar mısın? Açarsan BB'nin ~4x 3-bet'ine planın ne?",options:["Aç (CO aralığı 44+, 66 standart), 3-bet'e fold — Mod B'de flat call daralır, set-mine matematiği bozulur","Aç, 3-bet'e call — set tutarsan stack alırsın","Açma — 38 BB'de küçük çiftler open'dan düşer","Aç, 3-bet'e jam — 38 BB'de commit eşiği zaten geçildi"],correct:0,explain:"MW.7 Mod B (30–45 BB): open aralığı korunur (MW.3 CO %26 = 44+ dahil) ama flat call daralır — set-mine bozulur ve 3-bet potunda commit eşiği yakındır; 66 ile call plansız şişmiş pot doğurur. Doğru plan: aç, 3-bet'e fold. Jam ise Mod C/D eşiklerini 38 BB'ye taşıyan geçiş hatasıdır (MW.9B).",source:"Bölüm 17",kavram:"stack-modu"},{q:"Bubble'a 40 kişi kaldı. BTN'de KQo ile oturuyorsun; BB'de seni cover eden 130 BB'lik chip lideri var, önün fold. Ne yaparsın?",options:["Fold — cover'la pot açılmaz, ondan uzak dur","Aç ve 3-bet'e call — KQo bırakılamayacak kadar güzel bir el","Aç (2.1–2.3x) — KQo bir kademe daraltılmış BTN aralığında bile açılır; ama cover'ın 3-bet'ine fold","Limp — ucuza flop gör, cover'ı kızdırma"],correct:2,explain:"MW.8 Faz 2: cover'lara karşı tek fren 'bir kademe dar' oynamaktır; MW.9B: 'cover'dan kaçış strateji değil'. KQo, MW.3 BTN %40–44 aralığının daraltılmış halinde bile net open'dır. Asıl disiplin 3-bet gelince: MW.6 — 3-bet'e karşı offsuit broadway (KQo, AJo) çöptür, 'en pahalı güzel görünen el'; cover'dan 3-bet'e bir kademe daha dar devam edilir. Limp MW.3'te yoktur.",source:"Bölüm 17",kavram:"icm-cover"},{q:"Faz 2, stack'in 60 BB. SB'deki 22 BB'lik stack open yaptı; sen BB'de A5s tutuyorsun (postflop IP olacaksın). En kârlı hat?",options:["Call — A5s'i pozisyonla ucuza oyna","Fold — kısa stack'e bluff 3-bet yanar","Direkt jam — 22 BB'yi anında fold'a zorla","3-bet — Faz 2'nin özü 15–25 BB'likleri ezmek; A5s, A bloker'ı + oynanabilirliğiyle ideal baskı eli; jam gelirse çoğunlukla fold"],correct:3,explain:"MW.8 Faz 2: en kârlı faz — 15–25 BB'lik stacklerin open'larına 3-bet baskısı ana kâr kaynağıdır ve 22 BB tam hedef bölgededir (MW.4'ün 'bluff yanar' yasağı 20 BB ALTI içindir). MW.9B: baskı bluff'ları A5s/K9s gibi bloker'lı ellerle sınırlanır — A5s ders kitabı adayıdır. Jam'e gelirse 60 BB'lik stack'in yarışmaz; fiyat uymadıkça fold.",source:"Bölüm 17",kavram:"blof-secimi"},{q:"3-bet potunda OOP'sin, elinde QQ (overpair). Flop 9-7-5 iki maça; check ettin, rakip POT büyüklüğünde bet attı. Flop/turn/river planın ne?",options:["Flop'ta raise — overpair'i draw'lardan koru, gerekirse stack gitsin","Flop call; turn'de maça/straight tamamlayıp büyük barrel gelirse fold; river'da küçük bet'e call, büyük bet'e fold — overpair'i bluff-catcher'a çevir","Flop call, sonra her sokakta call — QQ premium, pot zaten büyüdü","Flop fold — pot bet'e overpair yetmez"],correct:1,explain:"MW.9: 40 BB'yi geçen şişmiş potta tek pair (QQ) = alarm; varsayılan pot kontrolü + bluff-catcher, stack yarışı değil. Sokak planı MW.6'dan: turn'de büyük barrel + flush/straight tamamlayan kart → tek pair biter; river'da küçük bet'e check-call, büyük bet'e check-fold. Her sokakta call etmek 'pot büyüdü bağlandım' kök hatasıdır.",source:"Bölüm 17",kavram:"kök-hata"},{q:"Para yeni girdi (Faz 3), ITM'nin ilk eli. UTG'deki 9 BB'lik stack jam yaptı; sen HJ'de ATo tutuyorsun ve arkanda 3 büyük stack var. Call var mı?",options:["Call — 9 BB'lik kamikaze jam'e karşı ATo fazlasıyla önde","İzole re-jam — arkadakileri at, kısayla baş başa kal","Fold — Faz 3'te ilk 3–4 el tight oynanır; kamikaze jam'ler premium ile karşılanır, ATo premium değil ve arkanda 3 büyük stack var","Call — pot oddsları neredeyse her iki karta call veriyor"],correct:2,explain:"MW.8 Faz 3: para girişinde 3–4 el tight — kısalar kamikaze jam atar ve bunlar yalnız PREMIUM ile karşılanır; ATo premium değildir. Arkadaki 3 büyük stack'in uyanma ihtimali denklemi daha da kötüleştirir. Chip-EV'de kârlı görünen call, faz disiplinini (ICM > chip-EV) bozan tipik hatadır.",source:"Bölüm 17",kavram:"kök-hata"},{q:"Elinde KK (overpair). Flop T-8-4 iki sinekti, c-bet'ine call gelmişti. Turn J♣ ile board T-8-4-J oldu ve sinek flush tamamlandı; rakip 3/4 pot ikinci barrel attı. Devam kriterin ne?",options:["Call — overpair bir barrel daha kaldırır, river'a bakarız","Raise — flush'ı test et","All-in — KK'yı koru, çekilişleri at","Fold — büyük turn barrel + flush tamamlayan board'da tek pair biter; devam ancak K♣ bloker gibi istisnai gerekçeyle düşünülür"],correct:3,explain:"MW.6 turn disiplini: 'büyük turn barrel + board dörtlü/flush tamamladı → tek pair biter.' 3/4 pot ikinci barrel bu tanımın tam içindedir ve KK bu board'da tek pair'dir → varsayılan fold. Devam etmek, MW.9'un uyardığı 'şişmiş potta tek pair ile stack yarışı' kök hatasının doğum yeridir; raise/all-in ise tamamlanmış ellere ödeme yapar.",source:"Bölüm 17",kavram:"kök-hata"},{q:"Mod D'desin: 17 BB, BTN'den ilk giren sensin, elinde A7o. Jam mi, open-fold mu, fold mu?",options:["Open 2.1x ve 3-bet'e fold — stack'i koru","Jam — Mod D'de BTN açılışının bir kısmı direkt jam'dir; A7o Nash'e yakın jam aralığında, open edersen 3-bet'e ya-jam-ya-fold ikileminde kalırsın","Fold — A7o domine olur, 17 BB'yle riske girme","Open 2.1x ve 3-bet'e call — A bloker'la flop görürüz"],correct:1,explain:"MW.7 Mod D (12–20 BB): açılışın bir kısmı SB/BTN'den DİREKT jam'dir ve aralık Nash'e yakındır — 17 BB'de BTN'den A7o bu sınıftadır. Open edersen kural nettir: 3-bet'e ya jam ya fold — A7o ile ikisi de kötüdür (domine yarış ya da equity yakma). Fold ise MW.9B'deki '20 BB panik jam/donma' geçiş hatasının pasif yüzüdür.",source:"Bölüm 17",kavram:"stack-modu"},{q:"Derin ITM, 3 masa kaldı. Seninle EŞİT stack'li (45 BB) rakip CO'dan open yaptı; sen SB'de AQo tutuyorsun. 3-bet boyutun ve 4-bet gelirse planın ne?",options:["OOP standart 3.8–4.2x 3-bet; 4-bet gelirse fold — derin ITM'de eşit stack'e karşı AQo ile stack yarışı yok ('eşitlerden kaç')","Küçük 3x 3-bet — ucuz olsun; 4-bet'e call","Flat call — SB'den potu küçük tut","4x 3-bet, 4-bet'e jam — AQo bloker'larıyla flip kabul"],correct:0,explain:"MW.4B boyut kuralı: OOP (SB) 3-bet 3.8–4.2x — küçük OOP 3-bet ucuz call verir ve plansız şişmiş OOP pot doğurur (kök hata doğum yeri). MW.4: SB'den flat YOK, 3-bet ya da fold; AQo CO open'ına value 3-bet'tir. 4-bet'e devam MW.5'te KK+ çekirdeklidir ve MW.8 Faz 4 'eşitlerden kaç' + MW.6 'aynı stack'le flip = son çare' → AQo fold.",source:"Bölüm 17",kavram:"boyut"},{q:"River'dayız; elinde AA, pot iyice şişmiş durumda. Board 2-4-5-9-6. Rakip sana check etti ve son söz sende. Bet var mı; varsa boyut ve hedef el ne?",options:["Pot bet — AA'yı ödet; Ax ve overpair'ler call eder","Overbet jam — polarize görün, iki pair'leri ödet","Bet yok, check geç — 'benden kötü hangi el öder?' sorusunun cevabı boş; bet'i ödeyecek eller (straight, set, iki pair) seni yener","1/3 pot ince value — KK/QQ tipi eller öder"],correct:2,explain:"MW.9 kök hata korkuluğu: 'AA river jam: senden kötü el ödemiyorsa jam değersiz — check.' MW.6 river kuralı aynı tek soruyu sorar. Board 2-4-5-9-6'da her 3 ve her 7-8 straight yapar; şişmiş potta bet'ine aksiyon verecek aralık ağırlıkla seni yenen bölgededir, kötü eller zaten fold eder. MW.9: şişmiş potta tek pair = pot kontrolü, value üretme yeri değil.",source:"Bölüm 17",kavram:"kök-hata"},{q:"3-bet potundasın (SPR ~2.5), elinde overpair KK. Flop geldi, tek per'in hâlâ en iyisi görünüyor. İçinden 'şişmiş pot, bağlıyım' geçiyor. Kitabın 'şişmiş pot' ölçüsü nedir?",options:["Bahis sayısı — 3-bet'liyse pot şişmiştir","SPR (stack ÷ pot); SPR 1–4 = bluff-catcher, büyük pot BAŞLATMA","Efektif stack — 100bb+ ise derin","Board dokusu — ıslaksa şişmiş"],correct:1,explain:"B11.0: 'Derinde şişmiş potu bet sayısı değil SPR tanımlar.' SPR 1–4 bandında tek per bluff-catcher'dır — büyük pot başlatma. Önce SPR'yi oku, sonra rolü ver; SPR<1 commit, SPR>8 ince value alınabilir ama re-raise gören pot aniden 1–4'e düşer.",source:"Bölüm 11.0",kavram:"kök-hata"},{q:"River geldi, elinde güçlü tek per (overpair). Rakip POT ÜSTÜ (overbet) bahis attı. Kararın?",options:["Call — overpair bluff-catcher, overbet'te blöf de var","Fold — overbet polarize (nut ya da hava); tek per fold, yalnız bloker tutan bluff-catcher call eder","Raise — polarize aralığı blöfe zorla","Duruma göre — board'a bak"],correct:1,explain:"B11.2: 'Boyut büyüdükçe rakip aralığı value'ya kayar; overbet = polarize oku, tek per netleşerek bluff-catcher'dan FOLD'a döner. Sadece bloker tutan bluff-catcher call eder.' Panik hero-call buranın hatasıdır (Vaka 1).",source:"Bölüm 11.2",kavram:"kök-hata"},{q:"River kuru board, top pair iyi kicker'ın var. Karşında rec/station (fold etmeyen) tip; sana check geldi. Bahis var mı?",options:["Check — showdown'a git, ince value riskli","Küçük value BET — 'benden zayıf hangi el öder?' cevabı VAR (rec öder); kaçan thin value chip kaybıdır","Pot bet — maksimum value","Check-raise'e hazırlan"],correct:1,explain:"B11.3: 'Ödeyen varsa İNCE value BET ET.' Filtre pozitif yönde: 'benden zayıf hangi el ödüyor?' cevabı varsa (rec/station öder), ince de olsa bet. Rec-ağırlıklı Main'de kaçan thin value doğrudan chip kaybıdır.",source:"Bölüm 11.3",kavram:"boyut"},{q:"Overpair'in var, pot şişmiş. River board 2-4-5'e 6 geldi (2-4-5-6). Rakip büyük bahis attı. Kitabın 'kötü river' kataloğunda bu kart hangi sınıfta ve kararın?",options:["Nötr kart — call","Kötü river (kent/set tamamlayan); büyük pota check-fold, JAM ASLA — jam value ancak senden zayıf el öderse vardır","Korkutmaca — raise","Küçük value bet"],correct:1,explain:"B11.4 kötü river kataloğu: 'alt kartların dördüncüsü / kent tamamlayan' (2-4-5'e 6 → 3'lü, kent, set hepsi seni geçmiş). Bu kartlarda küçük pota check-call, büyük pota check-fold; JAM ASLA. (Vaka 3.)",source:"Bölüm 11.4",kavram:"kök-hata"},{q:"Sert baloncuk. Seni COVER eden büyük stack geniş bir BvB jam attı (~22bb efektif), elinde A9s. Call?",options:["Call — A9s suited, baloncukta bile yeterince önde","Fold — cover + baloncuk: CALL = 88+/AJs+/AQo; A9s ters-domine, KQs ile birlikte fold","Jam'i sen yap — inisiyatif al","Duruma göre"],correct:1,explain:"B12.1 Emre kalibrasyonu (2026-08-10): sert baloncuk + seni cover eden geniş jam, ~22bb → CALL = 88+ · AJs+ · AQo; A9s/KQs FOLD. Sürücü: cover + baloncuk = kaybedersen bust €0, marjinal edge tournament life'a değmez (A9s ters-domine). İLK soru 'baloncuk mu' değil 'cover ediliyor muyum'.",source:"Bölüm 12.1",kavram:"icm-cover"},{q:"Baloncuk, 22bb BB'desin. Seni cover ETMEYEN kısa bir stack (senden kısa; kaybetsen de bust olmazsın) geniş 13bb BTN jam attı; elinde KTo. Refleksin 'range yetersiz, fold'. Doğrusu?",options:["Fold — baloncukta KTo çöp","Call — cover EDİLMİYORSAN çizgi çok daha geniş; KTo geniş 13bb jam'ine ~%54 alır, ~%44 gerekir","Jam'e re-jam","Yalnız premium call"],correct:1,explain:"B12.1 drill eklentisi (2026-08-10): leak'in yapışkan yarısı COVER EDİLMEYEN tarafta fold refleksi. Cover edilmiyorsan (jammer senden kısa) A9s ve KTo CALL — KTo ~%54 vs gereken ~%44. Cue: 'jam'e fold basmadan önce cover ediliyor muyum? Hayır ise call sandığından çok geniş.'",source:"Bölüm 12.1",kavram:"icm-cover"},{q:"FT, herkes birbirini kilitlemiş (masada senden kısa YOK, sen fiilen en kısasın, <15bb). 'ICM'de daralt' refleksin devrede. Doğru oyun?",options:["Daralt — ICM her zaman daraltır","GENİŞLET — herkes kilitliyken kimse seni ödemek istemez; 'genel daralt' bu bandda aktif olarak yanlış","Katlan, bust'ları bekle","Yalnız premium jam"],correct:1,explain:"B12.5 kısa stack ICM istisnası: '⚠ ICM'de daralt HER ZAMAN doğru değil. Herkes kilitliyken kısa stack'in doğru oyunu GENİŞLETMEKtir — kimse seni ödemek istemez.' 12.2: 'fiilen en kısasın → jam aralığını genişlet, katlanma.'",source:"Bölüm 12.5 / 12.2",kavram:"icm"},{q:"Bubble, sen büyük (cover eden) stack'sin. Masada kilitlenmiş bir orta stack ve birkaç kısa var. En kârlı hedefin kim?",options:["Kısa stack'ler — kolay fold","Kilitlenmiş orta stack — masadaki en kârlı hedef; open genişlet + 3-bet baskısı","Diğer büyük stack — çok chip'te","Kimse — bubble'da bekle"],correct:1,explain:"B12.4 bubble av haritası: 'kilitlenmiş orta stack masadaki en kârlı hedeftir.' Büyük stack olarak onu soy (open genişlet + 3-bet baskısı). Bubble savunma değil, DOĞRU tarafındaysan turnuvanın en yüksek chipEV penceresidir.",source:"Bölüm 12.4",kavram:"icm"},{q:"3+ kişilik (multiway) potta top pair'in var, flop'a birkaç kişi geldi. HU refleksinle value düşünüyorsun. Kitabın multiway kuralı?",options:["Value bet — top pair her zaman value","Bir sınıf düşer → check / pot kontrol; multiway her ek oyuncu value barını yükseltir","Fold — multiway'de top pair çöp","Overbet — kalabalığı at"],correct:1,explain:"B13.1 HU→3+ yollu geçiş: multiway'de top pair 'bir sınıf düşer → check/pot kontrol.' B13.0: 'her ek oyuncu value'nun barını YÜKSELTİR.' C-bet frekansı çöker (sadece güçlü value + gerçek nut-draw).",source:"Bölüm 13.1",kavram:"multiway"},{q:"Multiway potta blöf düşünüyorsun; elinde iyi bir bloker var. Pot kaç yollu olduğunda blöf hâlâ meşru? (kitabın 4. kriteri)",options:["4+ yollu bile — bloker yeter","3 yollu: sadece nut-bloker semi-bluff; 4+ yollu: blöf YOK; tek station bile blöfü öldürür","Her multiway'de standart blöf","Yalnız HU'da blöf"],correct:1,explain:"B13.3 dördüncü kriter: 'rakip sayısı = blöfün geçmesi gereken kapı sayısı.' HU=üç kriter, 3-yollu=sadece nut-bloker semi-bluff, 4+ yollu=YOK. B1.4 'kime blöf yapılmaz' listesine 'multiway pot (kim olursa olsun)' eklenir.",source:"Bölüm 13.3",kavram:"multiway"},{q:"40–60bb bandındasın (köprü band), 3-bet düşünüyorsun. Kitabın blöf 3-bet yönü ne?",options:["Blöfü genişlet — derinlik var","Blöfü NEREDEYSE KES — canlıda kimse fold etmiyor; 3-bet edeceğin el 4-bet/jam'e devam edebilmeli","Standart B4 aralığı — değişmez","Yalnız suited connector blöf"],correct:1,explain:"B14.1: '40–60bb: BLÖF neredeyse kes — canlıda kimse fold etmiyor.' Kural: 3-bet edeceğin el 4-bet/jam'e devam edebilmeli; edemiyorsa flat (IP/BB) ya da fold. '3-bet edip fold' yapısı 60bb altında zayıflar, 40bb'de biter (commit).",source:"Bölüm 14.1",kavram:"3bet-aralik"},{q:"€25K PLO HR, elinde 30bb ve çıplak AA. NLH refleksin '30bb altı → Bölüm 5 → 3-bet=JAM' diyor. PLO'da geçerli mi?",options:["Evet — 30bb her oyunda jam bandı","Hayır — PLO'da B5 GEÇERSİZ: jam yok, pot-raise var; çıplak AA postflop oynamaz, değeri pre-commit'te (3-bet→SPR≤1)","Fold — 30bb PLO'da AA oynanmaz","Limp-call"],correct:1,explain:"B15.1/15.0: 'B5'in NLH jam/fold refleksi PLO'da geçersiz — pot-limit'te jam yok, max pot-raise var.' 25–60bb PLO'da çıplak AA postflop oynamaz; değeri pre-commit'tedir (3-bet → SPR≤1). '30bb PLO ≠ 30bb NLH.'",source:"Bölüm 15.1 / 15.0",kavram:"plo"},{q:"Kısa PLO (<25bb), pot-raise yaptın. Bunun anlamı ne?",options:["Standart raise — flop'ta devam kararı ayrı","Pot-raise = COMMIT: kalan stack flop'ta otomatik gider; aralığı 'flop'ta stack ortaya girecek' varsayımıyla seç, dangler'lı her şeyi kes","Bilgi raise'i — ucuz","Fold'a hazır ol"],correct:1,explain:"B15.1: 'Kısa PLO'da pot-raise = commit. Aralığını flop'ta stack ortaya girecek varsayımıyla seç: çift-suited rundown, güçlü AAxx; dangler'lı her şeyi KES.' B15.2: PLO'da commit kararı flop'ta değil, potu şişirdiğin sokakta verilir.",source:"Bölüm 15.1 / 15.2",kavram:"plo"},{q:"SHR Day 1'de bust ettin, 5 dakika geçti, tilt hafif. Hemen re-entry (aynı event'e ikinci mermi) mantıklı mı?",options:["Evet — hemen gir, momentum kaybetme","Hayır — zorunlu 20 dk bekle, karar kartını doldur; SHR'de re-entry YOK (max 1 bullet); tilt hâlinde otomatik re-entry = kök hatanın bankroll ölçeği","Başka event'e geç","Günü bitir, yarın karar"],correct:1,explain:"B16.1: 'Serinin en pahalı tek kararı bustout sonrası 5 dakikada verilen re-entry.' Zorunlu bekleme: bustout → 20 dk masadan uzak → karar kartını doldur. SHR max 1 bullet (re-entry yok); tilt hâlinde otomatik re-entry = şişmiş 'seri yatırımında' tek bullet'a value muamelesi.",source:"Bölüm 16.1",kavram:"kök-hata"},{q:"Gün sonu otopsisi: bir eli kitabın kuralına UYARAK oynadın ama kaybettin (doğru jam, kötü sonuç). Yarın o spotta aralığını değiştirir misin?",options:["Evet — kaybettiysem bir şey yanlıştı, daralt","Hayır — 'uydum + kaybettim' = doğru karar, kötü sonuç; ARALIK DEĞİŞMEZ (aksi halde SHR ortasında B4-B5 tablolarını bozarsın)","Duruma göre — sonuca bak","Aralığı genişlet — daha agresif ol"],correct:1,explain:"B16.3 otopsi kuralı: 'Uydum + kaybettim → vaka defterine doğru karar/kötü sonuç, ARALIK DEĞİŞMEZ.' Bu filtre kalibrasyonu korur: SHR'de doğru jam'ler sık kaybedilir; filtre olmadan özenli tabloları turnuva ortasında bozarsın. (Yalnız kurala UYDUYSAN geçerli — kendini aklama kapısı değil.)",source:"Bölüm 16.3",kavram:"kök-hata"}],_e={M1:"kök-hata",M2:"blöf-kriter",M3:"aldatıcı-eller",M4:"stack-modu",M5:"canlı-value",M6:"4bet-cevap",M7:"25-30bb-değer",M8:"turn-fold-equity",M9:"plo-aa"};function za(a){const n=Ba.filter(r=>r.kavram===a&&!r.source.includes("Bölüm 17"));return n.length?n[Math.floor(Math.random()*n.length)]:null}function Aa({kavram:a,onStart:n}){const r=c.useMemo(()=>za(a),[a]),[i,l]=c.useState(null),t=i!==null;return r?e.jsxs("div",{className:"flex min-h-full flex-col justify-center gap-4 p-5",children:[e.jsx("div",{className:"text-center text-xs uppercase tracking-[0.18em] text-accent",children:"Önce tahmin et"}),e.jsx("p",{className:"text-center text-sm text-neutral-500",children:"Derse başlamadan önce dene. Yanılman serbest — puan yok. Ders senin cevabın."}),e.jsx("div",{className:"card p-4",children:e.jsx("p",{className:"text-[15px] leading-relaxed text-neutral-100",children:r.q})}),e.jsx("div",{className:"flex flex-col gap-2",children:r.options.map((s,o)=>{const d=o===r.correct,k=o===i;let m="btn-ghost";return t&&d?m="btn bg-emerald-500/20 text-emerald-200 ring-1 ring-emerald-500/50":t&&k&&!d&&(m="btn bg-red-500/20 text-red-200 ring-1 ring-red-500/50"),e.jsxs("button",{onClick:()=>!t&&l(o),disabled:t,className:m+" justify-start py-3 text-left text-[15px]",children:[t&&d?"✓ ":t&&k?"✗ ":"",s]},o)})}),t&&e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"rounded-xl bg-surface-1 px-4 py-3 text-sm leading-relaxed text-neutral-300",children:r.explain}),e.jsx("button",{onClick:n,className:"btn-accent py-3 text-base",children:"Derse başla →"})]}),!t&&e.jsx("button",{onClick:n,className:"text-center text-xs text-neutral-600",children:"geç, direkt derse başla"})]}):(n(),null)}const ze=[{id:"shr",name:"Super High Roller",format:"NLH",buyin:"€100K",start:"2026-08-21",end:"2026-08-23",days:"21–23 Ağu"},{id:"plo",name:"PLO High Roller",format:"PLO",buyin:"€25K",start:"2026-08-22",end:"2026-08-23",days:"22–23 Ağu"},{id:"main",name:"Main Event",format:"NLH",buyin:"€5.3K",start:"2026-08-22",end:"2026-08-29",days:"22–29 Ağu"},{id:"hr",name:"High Roller",format:"NLH",buyin:"€10.3K",start:"2026-08-27",end:"2026-08-29",days:"27–29 Ağu"},{id:"wsop",name:"WSOP Online ME Day 2",format:"NLH",buyin:"$5K",start:"2026-09-21",end:"2026-09-22",days:"21–22 Eyl"}];function Ae(a){return ze.filter(r=>r.end>=a).sort((r,i)=>r.start.localeCompare(i.start))[0]??null}function se(a,n){return Math.round((new Date(a+"T00:00:00").getTime()-new Date(n+"T00:00:00").getTime())/864e5)}function x(a=0){const n=new Date;n.setDate(n.getDate()+a);const r=n.getFullYear(),i=String(n.getMonth()+1).padStart(2,"0"),l=String(n.getDate()).padStart(2,"0");return`${r}-${i}-${l}`}const je="progress";function ce(){return w(je,{days:[],quizTotal:0,quizCorrect:0})}function ue(){const a=ce(),n=x(0);a.days.includes(n)||a.days.push(n),O(je,a)}function rr(a){const n=ce();n.quizTotal+=1,a&&(n.quizCorrect+=1);const r=x(0);n.days.includes(r)||n.days.push(r),O(je,n)}function ja(){const a=new Set(ce().days);let n=0,r=!0;for(let i=0;i<120;i++)if(a.has(x(-i)))n++;else if(i>0&&r)r=!1;else break;return n}function Na(){var n;const a=x(0);return se(((n=Ae(a))==null?void 0:n.start)??"2026-08-16",a)}function Ue(){const a=x(0);return ze.some(n=>se(n.start,a)<=6&&a<=n.end)}function Ta(){const a=ce();return{streak:ja(),practicedToday:a.days.includes(x(0)),quizTotal:a.quizTotal,quizCorrect:a.quizCorrect,totalDays:a.days.length}}const Ka=[{id:"S1-value-boyut",kavram:"boyut",soru_ozeti:"AK top pair kuru boardda river value boyutu",sonuc:"half",not:"Fold okuması doğru, yarım pot yerine 1/3 olmalıydı"},{id:"S2-ak-stack-call",kavram:"kök-hata",soru_ozeti:"3-bet potunda AK top pair, eşleşmiş riverda stack lead'ine call",sonuc:"wrong",not:"Pasiften agresife geçiş + eşleşmiş river = value"},{id:"S4-kjo-xr",kavram:"blof-secimi",soru_ozeti:"T94 boardda KJo gutshot ile check-raise",sonuc:"wrong",not:"Board sahipliği ≠ el sınıfı; gutshot bağlantı değil, showdown değeri blöfe çevrilmez"},{id:"S5-aa-fold-erken",kavram:"kök-hata",soru_ozeti:"T94 boardda AA'yı flop check-raise'ine fold",sonuc:"wrong",not:"Aşırı düzeltme; erken sokakta call, hikâye tamamlanınca fold"},{id:"S6-jt-60bb",kavram:"3bet-aralik",soru_ozeti:"60bb CO'da JTs vs LJ reg açılışı — cevaplanmadı",sonuc:"wrong",not:"Üç kez ertelendi; ilk seansta MUTLAKA sorulacak"}],ir="60bb, LJ'den reg açtı, sen CO'da JTs. 3-bet mi, call mi, fold mu? Ve neden diğer ikisi değil?",le="karne",Sa="karne:corrupt-backup";function wa(){var a;return((a=Ae(x(0)))==null?void 0:a.start)??""}function U(a){const n=wa();return!n||n<=x(0)?a:a>n?n:a}function Oa(a,n,r){if(a==="wrong")return U(x(1));if(a==="half")return U(x(r==="tournament_life"?1:2));const i=[3,7,14,30],l=i[Math.min(Math.max(n,1)-1,i.length-1)];return U(x(l))}function Ca(a,n){const r=new Set(n).size;return a>=3&&r>=3?"saglam":a>=2&&r>=2?"yetkin":a>=1?"asina":"gorundu"}function Ne(a,n){return{id:a,kavram:a,soru_ozeti:"",sonuc:"wrong",streak:0,reps:0,correctDays:[],tarih:x(0),due:x(0),mastery:"gorundu",...n}}function Pa(a){const n=String(a.kavram||a.id||"kök-hata"),r=a.correctDays;return{...Ne(n),...a,id:n,kavram:n,correctDays:Array.isArray(r)?r:[],reps:typeof a.reps=="number"?a.reps:0,streak:typeof a.streak=="number"?a.streak:0,due:U(String(a.due||x(0)))}}function Le(a){const n=new Map;for(const r of a){const i=String(r.kavram||"kök-hata"),l=n.get(i)||Ne(i);l.reps+=1,l.soru_ozeti=String(r.soru_ozeti||l.soru_ozeti),l.sonuc=r.sonuc||l.sonuc,l.not=r.not||l.not,l.tarih=String(r.tarih||l.tarih),l.due=U(String(r.due||l.due)),n.set(i,l)}return[...n.values()]}function I(){const a=xa(le);if(a!==null){let r;try{r=JSON.parse(a)}catch{r=void 0}if(Array.isArray(r)&&r.length){const i=r,l=typeof i[0].reps=="number"?i.map(Pa):Le(i);return O(le,l),l}a.trim()&&!(Array.isArray(r)&&r.length===0)&&O(Sa,a)}const n=Le(Ka);return O(le,n),n}function We(a,n,r){const i=I();let l=i.find(t=>t.kavram===a);if(l||(l=Ne(a),i.push(l)),l.reps+=1,l.soru_ozeti=n.soru_ozeti,l.sonuc=n.sonuc,l.not=n.not??l.not,l.severity=n.severity??l.severity,l.confidence=r!=null&&r.resetConfidence?void 0:n.confidence??l.confidence,l.streak=n.sonuc==="correct"?l.streak+1:0,n.sonuc==="correct"){const t=x(0);l.correctDays.includes(t)||l.correctDays.push(t)}l.tarih=x(0),l.due=Oa(n.sonuc,l.streak,l.severity),l.mastery=Ca(l.streak,l.correctDays),O(le,i),Ra()}function Ge(a){We(a.kavram,a)}function Ea(a,n){const r=I().find(i=>i.id===a||i.kavram===a);r&&We(r.kavram,{soru_ozeti:r.soru_ozeti,sonuc:n,not:r.not,severity:r.severity},{resetConfidence:!0})}const oe={tournament_life:0,major:1,minor:2};function Te(){const a=x(0);return I().filter(n=>n.due<=a).sort((n,r)=>oe[n.severity??"minor"]-oe[r.severity??"minor"]||n.due.localeCompare(r.due))}function Ze(){return I().filter(a=>a.sonuc==="wrong"&&(a.confidence??0)>=.8).sort((a,n)=>oe[a.severity??"minor"]-oe[n.severity??"minor"])}function lr(){const a=I().filter(r=>(r.confidence??0)>=.8&&r.reps>0);if(!a.length)return null;const n=a.filter(r=>r.sonuc==="correct").length;return{high:a.length,hit:n}}function tr(){const a={gorundu:0,asina:0,yetkin:0,saglam:0};for(const n of I())a[n.mastery]++;return a}const xe="karne:trend";function Ra(){const a=x(0),n=I(),r=n.filter(s=>s.due<=a).length,i=n.filter(s=>s.mastery==="saglam").length,l=w(xe,[]),t=l.findIndex(s=>s.day===a);t>=0?l[t]={day:a,due:r,saglam:i}:l.push({day:a,due:r,saglam:i}),O(xe,l.slice(-30))}function sr(){return w(xe,[])}function or(){const a=w("journal",[]);if(!a.length)return"";const n=[...new Set(a.map(i=>i.day))].sort().slice(-2),r=a.filter(i=>n.includes(i.day)).slice(0,6);return r.length?`

Masadan getirdiği son eller (ertesi-gün tohumu — bu spotları yeni bir kılıkta tekrar sor):
`+r.map(i=>{const l=typeof i.guven=="number"?` [%${Math.round(i.guven*100)} güven]`:"";return`- [${i.day}] ${i.el} → ${i.aksiyon}${i.gerekce?" ("+i.gerekce+")":""}${l}`}).join(`
`):""}function dr(){const a=Te(),n=(a.length?a:I()).slice(0,10);return n.length?n.map(r=>{const i=r.severity==="tournament_life"?" ⚠tournament_life":"",l=(r.confidence??0)>=.8&&r.sonuc==="wrong"?" (emin-ama-yanlış)":"";return`- [${r.sonuc}${i}${l}] ${r.kavram}: ${r.soru_ozeti}${r.not?" — "+r.not:""} (due ${r.due})`}).join(`
`):"(karne boş)"}const Ma=()=>new Date().toISOString().slice(0,10),La=Object.fromEntries(Object.entries(_e).map(([a,n])=>[n,a]));function Da(a){let n=La[a];if(n||(/^3-?bet|aralik|aralık|boyut/i.test(a)?n="M5":/bl[öo]f/i.test(a)?n="M2":/plo/i.test(a)?n="M9":/turn|draw/i.test(a)?n="M8":/stack|mod|icm/i.test(a)&&(n="M4")),!n)return null;const r=te.find(i=>i.id===n);return r?{id:r.id,title:r.title}:null}function Ja(){const a=c.useMemo(()=>{var B;const f=Ma(),b=Te(),y=(B=Ze()[0]||b[0])==null?void 0:B.kavram,z=ze.find(E=>E.format==="PLO"),T=z?se(z.start,f):999,L=Ae(f);return{today:f,cornerman:Ue(),days:Na(),ev:L,dueCount:b.length,topDue:b[0]??null,studyMod:y?Da(y):null,ploRamp:T>=0&&T<=6,wsopRamp:(L==null?void 0:L.id)==="wsop",practiced:Ta().practicedToday}},[]),{today:n,cornerman:r,days:i,ev:l,dueCount:t,topDue:s,studyMod:o,ploRamp:d,wsopRamp:k,practiced:m}=a,u=l?se(l.start,n):0;return e.jsxs("div",{className:"card border-l-4 border-accent p-4",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"text-xs font-semibold uppercase tracking-wide text-accent",children:"Bugün"}),e.jsx("span",{className:"text-xs text-neutral-500",children:r?"EPT serisi CANLI 🎬":i>=0?`Day-1'e ${i} gün`:"seri bitti"})]}),l&&e.jsxs("div",{className:"mt-2 text-sm text-neutral-200",children:["🎯 Sıradaki: ",e.jsx("b",{children:l.name})," ",e.jsxs("span",{className:"text-neutral-500",children:["(",l.format," · ",l.buyin," · ",l.days,")"]}),u>0?` — ${u} gün`:u===0?" — bugün!":" — sürüyor"]}),d&&e.jsx("a",{href:"#/ders/M9",className:"mt-1 block text-xs text-accent",children:"↳ €25K PLO HR yaklaşıyor — M9 PLO temellerini tazele →"}),k&&e.jsx("a",{href:"#/referans/bolum/17",className:"mt-1 block text-xs text-accent",children:"↳ WSOP Online ME Day 2 yaklaşıyor — Bölüm 17'yi tazele →"}),e.jsxs("div",{className:"mt-3 flex flex-col gap-1.5 text-sm",children:[t>0?e.jsxs("a",{href:"#/ilerleme/tekrar",className:"flex items-start gap-2 text-neutral-200",children:[e.jsx("span",{children:"🔁"}),e.jsxs("span",{children:[e.jsx("b",{children:t})," tekrar hazır",(s==null?void 0:s.severity)==="tournament_life"?" · ⚠ turnuva-bitiren var":""]})]}):e.jsx("span",{className:"text-neutral-500",children:"🔁 Bugün vadesi gelen tekrar yok."}),o&&e.jsxs("a",{href:`#/ders/${o.id}`,className:"flex items-start gap-2 text-neutral-200",children:[e.jsx("span",{children:"📚"}),e.jsxs("span",{children:["Bugün çalış: ",e.jsx("b",{children:o.title})," ",e.jsxs("span",{className:"text-neutral-500",children:["(",o.id,")"]})]})]}),e.jsxs("a",{href:"#/drill",className:"flex items-start gap-2 text-neutral-200",children:[e.jsx("span",{children:"🃏"}),e.jsx("span",{children:m?"Bugün çalıştın ✓ — bir drill daha?":"Günün pratiği: 1 drill"})]})]})]})}function Qa({onOpen:a}){const n=w("lessons:done",[]);return e.jsxs("div",{className:"space-y-3 px-4 py-5",children:[e.jsx("h1",{className:"text-2xl font-bold",children:"Ders Modu"}),e.jsxs("p",{className:"text-sm text-neutral-400",children:[te.length," modül · slayt + sesli anlatım"]}),e.jsx(Ja,{}),e.jsxs("button",{onClick:()=>a("otopsi"),className:"card flex w-full items-center gap-3 border-l-4 border-red-400/60 p-4 text-left active:scale-[0.99]",children:[e.jsx("div",{className:"text-2xl",children:"🔬"}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("div",{className:"font-semibold",children:"Bustout Otopsisi"}),e.jsx("div",{className:"truncate text-xs text-neutral-500",children:"4 elenme eli (3 kitaptan + 1 senin) — önce sen karar ver"})]}),e.jsx("div",{className:"shrink-0 text-neutral-600",children:"→"})]}),e.jsx("div",{className:"space-y-2 pt-2",children:te.map(r=>{const i=n.includes(r.id);return e.jsxs("button",{onClick:()=>a(r.id),className:"card flex w-full items-center gap-3 p-4 text-left active:scale-[0.99]",children:[e.jsx("div",{className:"flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-surface-2 text-sm font-bold text-accent",children:r.id}),e.jsxs("div",{className:"min-w-0 flex-1",children:[e.jsx("div",{className:"font-semibold",children:r.title}),e.jsxs("div",{className:"truncate text-xs text-neutral-500",children:[r.chapter," · ",r.minutes," dk"]})]}),e.jsx("div",{className:"shrink-0 text-lg",children:i?e.jsx("span",{className:"text-accent",children:"✓"}):e.jsx("span",{className:"text-neutral-600",children:"→"})})]},r.id)})})]})}const Ia=`# POKER CEP KİTABI v5

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
- Bölüm 7 — Vaka otopsileri: A4s, KTo, AA river jam
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
`;function S(a){return a.replace(/\*\*(.+?)\*\*/g,"$1").replace(/`(.+?)`/g,"$1").replace(/\*(.+?)\*/g,"$1").trim()}function Fa(a){const n=l=>l.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(t=>S(t)),r=n(a[0]),i=a.slice(2).map(n);return{headers:r,rows:i}}function D(a){const n=Ia.split(`
`),r=[];let i=!1;for(const l of n){if(l.startsWith("## ")&&!l.startsWith("### ")){if(l.slice(3).trim().startsWith(a)){i=!0;continue}if(i)break}i&&r.push(l)}return r.join(`
`)}function kr(){const a=D("Bölüm 0"),n=[];let r=null;for(const i of a.split(`
`)){const l=i.match(/^\s*(\d+)\.\s+\*\*(.+?)\*\*\s*$/);l?(r&&n.push(r),r={n:Number(l[1]),rule:S(l[2]),context:""}):r&&i.trim()&&!i.trim().startsWith("#")&&!i.trim().startsWith("*")&&(r.context=(r.context+" "+S(i.trim())).trim())}return r&&n.push(r),n.filter(i=>i.n>=1&&i.n<=15)}function Xe(a){const n=a.split(`
`),r=[];let i=null;for(const l of n)l.startsWith("### ")?(i&&r.push({title:i.title,body:i.body.join(`
`)}),i={title:l.slice(4).trim(),body:[]}):i&&i.body.push(l);return i&&r.push({title:i.title,body:i.body.join(`
`)}),r}function N(a,n){const r=Xe(a).find(i=>i.title.startsWith(n));return r?r.body:""}function Q(a){const n=a.split(`
`),r=[];for(const i of n)if(i.trim().startsWith("|"))r.push(i);else if(r.length)break;return r.length>=2?Fa(r):null}function de(a,n){const r=n?/^\s*\d+\.\s+(.*)$/:/^\s*[-*]\s+(.*)$/;return a.split(`
`).map(i=>i.match(r)).filter(i=>!!i).map(i=>S(i[1]))}function Ha(){const a=D("Bölüm 4"),r=N(a,"4.3").split(`
`),i=[];let l=null;const t=()=>{var k,m,u,f,b;if(!l)return;const s=l.buf.join(`
`);let o=Q(s),d=[];if(o)d=l.buf.filter(p=>/^\*\*[^*]*flat/i.test(p.trim())).map(p=>S(p));else{const p=(k=s.match(/VALUE:\*\*\s*(.+)/i))==null?void 0:k[1],y=(m=s.match(/BL[ÖO]F:\*\*\s*(.+)/i))==null?void 0:m[1];if(p||y){const z=((f=(u=/yaln[ıi]z\s+(BB|SB|BTN|CO)/i.exec(l.label))==null?void 0:u[1])==null?void 0:f.toUpperCase())||"BB";o={headers:["Pozisyon","VALUE","BLÖF"],rows:[[z,S(p||""),S(y||"")]]};const T=(b=s.match(/Flat:\*\*\s*(.+)/i))==null?void 0:b[1];T&&(d=[`${z} flat: ${S(T)}`])}}o&&i.push({opener:qa(l.label),label:l.label,table:o,flats:d}),l=null};for(const s of r){const o=s.trim().match(/^\*\*(.+?açılışına karşı.*?)\*\*$/);o?(t(),l={label:o[1],buf:[]}):l&&l.buf.push(s)}return t(),i}function qa(a){return a.split("açılışına")[0].trim().replace(/\s*\/\s*/g,"/")}function cr(){const a=D("Hızlı Referans");return{decisionOrder:de(N(a,"Karar sırası"),!0),sizes:Q(N(a,"Boyutlar")),band2530:Q(N(a,"25")),postflop:Q(N(a,"Postflop")),icm:Q(N(a,"ICM")),multiway:Q(N(a,"Multiway")),tilt:Q(N(a,"Tilt")),redFlags:de(N(a,"Kırmızı bayraklar"),!1)}}function ur(){const a=D("Bölüm 10");return Xe(a).map(n=>({title:n.title,questions:de(n.body,!0)})).filter(n=>n.questions.length>0)}function C(a,n){const r=D(a),i=n?N(r,n):r;return Q(i)}function mr(){const a=C("Bölüm 5","5.1");return a?a.rows.map(n=>({position:n[0],range:n[1]})):[]}function br(){const a=C("Bölüm 5","5.2");return a?a.rows.map(n=>({vs:n[0],range:n[1]})):[]}function yr(){const n=N(D("Bölüm 5"),"5.3").match(/geldiyse:\s*([^.]+)\./);return n?S(n[1]):""}function pr(){const a=C("Bölüm 4","4.5");if(!a)return null;const n=k=>{const m=a.rows.find(u=>u[0].toLowerCase().startsWith(k));return m?m[1]:""},r=k=>k.split(/[—;:]/)[0].trim(),i=r(n("4-bet value")),l=r(n("4-bet karışım")),t=r(n("4-bet blöf")),s=r(n("flat")),o=n("fold"),d=l?l.split(",").map(k=>`${k.trim()} (karışım)`).join(", "):"";return{value:d?`${i}, ${d}`:i,blof:t,flat:s,foldNote:o}}function fr(){const a=N(D("Bölüm 4"),"4.6"),n=a.match(/VALUE:\*\*\s*(.+)/i),r=a.match(/BLÖF:\*\*\s*(.+)/i);return!n&&!r?null:{value:n?S(n[1]):"",blof:r?S(r[1]):""}}function hr(){return C("Bölüm 4","4.7")}function vr(){return C("Bölüm 14","14.1")}function gr(){const n=N(D("Bölüm 14"),"14.1").match(/\*\*Kural:\*\*\s*(.+)/);return n?S(n[1]):""}function xr(){return C("Bölüm 11","11.1")}function Br(){return C("Bölüm 6","6.2")}function zr(){return C("Bölüm 11","11.2")}function Ar(){return C("Bölüm 11","11.3")}function jr(){return de(N(D("Bölüm 11"),"11.4"),!1)}function Nr(){return C("Bölüm 13","13.1")}function Tr(){return C("Bölüm 15","15.2")}const Ya=[[/\bcheck-?raise\b/gi,"çek reyz"],[/\bcheck-?call\b/gi,"çek kol"],[/\bcheck-?fold\b/gi,"çek fold"],[/\bstack-?off\b/gi,"stek of"],[/\bsemi-?bluff\b/gi,"semi blaf"],[/\bbluff-?catcher\b/gi,"blaf keçır"],[/\bcoldcall\b/gi,"kold kol"],[/\bcbet\b/gi,"si bet"],[/\b5-?bet\b/gi,"beş bet"],[/\b4-?bet\b/gi,"dört bet"],[/\b3-?bet\b/gi,"üç bet"],[/(\d)\s?bb\b/gi,"$1 big blaynd"],[/\bOOP\b/g,"o o pi"],[/\bIP\b/g,"ay pi"],[/\bICM\b/g,"ay si em"],[/\bPLO\b/g,"pi el o"],[/\bNLH\b/g,"en el eyç"],[/\bBB\b/g,"big blaynd"],[/\bSB\b/g,"smol blaynd"],[/\bBTN\b/g,"batın"],[/\bUTG\b/g,"yu ti ci"],[/\bbluff\b/gi,"blaf"],[/\bvalue\b/gi,"velyu"],[/\bboard\b/gi,"bord"],[/\bflat\b/gi,"flet"],[/\bflop\b/gi,"flop"],[/\briver\b/gi,"rivır"],[/\bturn\b/gi,"törn"],[/\bcall\b/gi,"kol"],[/\braise\b/gi,"reyz"],[/\bsqueeze\b/gi,"skuiz"],[/\bgutshot\b/gi,"gatşat"],[/\brakeback\b/gi,"reykbek"],[/\bstack\b/gi,"stek"],[/\bbubble\b/gi,"babıl"],[/\bnut\b/gi,"nat"],[/\bkicker\b/gi,"kikır"],[/\brundown\b/gi,"randaun"],[/\bdangler\b/gi,"denglır"],[/\bwrap\b/gi,"rep"],[/\bstation\b/gi,"steyşın"],[/\bshowdown\b/gi,"şovdaun"],[/\bequity\b/gi,"ekvıti"]];function Va(a){let n=a;for(const[r,i]of Ya)n=n.replace(r,i);return n}class $a{constructor(){Y(this,"supported",typeof window<"u"&&"speechSynthesis"in window);Y(this,"voice",null);this.supported&&(this.pickVoice(),window.speechSynthesis.onvoiceschanged=()=>this.pickVoice())}pickVoice(){const n=window.speechSynthesis.getVoices();this.voice=n.find(r=>r.lang==="tr-TR")||n.find(r=>r.lang.startsWith("tr"))||null}speak(n,r=1){return this.supported?(window.speechSynthesis.cancel(),new Promise(i=>{const l=new SpeechSynthesisUtterance(Va(n));l.lang="tr-TR",this.voice&&(l.voice=this.voice),l.rate=r,l.pitch=1,l.onend=()=>i(),l.onerror=()=>i(),window.speechSynthesis.speak(l)})):Promise.resolve()}stop(){this.supported&&window.speechSynthesis.cancel()}}function De(){return localStorage.getItem("ept:tts:mode")||"hd"}function Kr(a){localStorage.setItem("ept:tts:mode",a)}function _a(a){let n=5381;for(let r=0;r<a.length;r++)n=n*33^a.charCodeAt(r);return"a"+(n>>>0).toString(36)}function ea(){return new Promise((a,n)=>{const r=indexedDB.open("ept-tts",1);r.onupgradeneeded=()=>r.result.createObjectStore("audio"),r.onsuccess=()=>a(r.result),r.onerror=()=>n(r.error)})}async function Ua(a){try{const n=await ea();return await new Promise(r=>{const i=n.transaction("audio").objectStore("audio").get(a);i.onsuccess=()=>r(i.result||null),i.onerror=()=>r(null)})}catch{return null}}async function Wa(a,n){try{(await ea()).transaction("audio","readwrite").objectStore("audio").put(n,a)}catch{}}async function Ga(a){try{const r=await fetch(`${typeof import.meta<"u"&&"/ept-trainer/"||"/"}tts/${a}.mp3`);if(!r.ok)return null;const i=await r.blob();return i.size<256||i.type&&!/audio|mpeg|octet/.test(i.type)?null:i}catch{return null}}async function aa(a){const n=_a("v1|"+a);let r=await Ua(n);if(r)return r;if(r=await Ga(n),!r)try{const i=await fetch("/api/tts",{method:"POST",headers:{"content-type":"application/json"},body:JSON.stringify({text:a})});i.ok&&(r=await i.blob())}catch{}return r&&Wa(n,r),r}class Za{constructor(){Y(this,"web",new $a);Y(this,"audio",null)}get supported(){return this.web.supported||De()==="hd"}stopAudio(){this.audio&&(this.audio.pause(),this.audio.src="",this.audio=null)}async speak(n,r=1){if(De()!=="hd")return this.web.speak(n,r);const i=await aa(n);if(!i)return this.web.speak(n,r);await new Promise(l=>{this.stopAudio();const t=new Audio(URL.createObjectURL(i));t.playbackRate=r,t.onended=()=>l(),t.onerror=()=>l(),this.audio=t,t.play().catch(()=>l())})}stop(){this.stopAudio(),this.web.stop()}}let fe=null;function Xa(){return fe||(fe=new Za),fe}function en(a){return(a.match(/[^.!?]+[.!?]*/g)||[a]).map(n=>n.trim()).filter(Boolean)}async function an(a,n){let r=0,i=0;const l=a.length;for(let t=0;t<a.length;t++)await aa(a[t])?r++:i++,n==null||n(t+1,l);return{ok:r,fail:i}}function nn({table:a}){return e.jsx("div",{className:"overflow-x-auto rounded-xl border border-surface-3",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsx("tr",{className:"bg-surface-2 text-left text-neutral-300",children:a.headers.map((n,r)=>e.jsx("th",{className:"px-3 py-2 font-medium",children:n},r))})}),e.jsx("tbody",{children:a.rows.map((n,r)=>e.jsx("tr",{className:"border-t border-surface-3 align-top",children:n.map((i,l)=>e.jsx("td",{className:l===0?"px-3 py-2 font-semibold text-neutral-100 whitespace-nowrap":"px-3 py-2 text-neutral-300",children:i},l))},r))})]})})}const R=["A","K","Q","J","T","9","8","7","6","5","4","3","2"],K=Object.fromEntries(R.map((a,n)=>[a,n]));function rn(a,n){const r=R[Math.min(a,n)],i=R[Math.max(a,n)];return a===n?`${r}${i}`:a<n?`${r}${i}s`:`${r}${i}o`}function ln(a,n){return K[a]<=K[n]?[a,n]:[n,a]}function he(a){const n=a.trim().replace(/[–—]/g,"-").replace(/\s+/g,"");if(!n)return[];const r="[AKQJT98765432]";let i=n.match(new RegExp(`^(${r})\\1\\+$`));if(i){const l=[];for(let t=0;t<=K[i[1]];t++)l.push(`${R[t]}${R[t]}`);return l}if(i=n.match(new RegExp(`^(${r})\\1-(${r})\\2$`)),i){const[l,t]=[K[i[1]],K[i[2]]],s=[];for(let o=Math.min(l,t);o<=Math.max(l,t);o++)s.push(`${R[o]}${R[o]}`);return s}if(i=n.match(new RegExp(`^(${r})\\1$`)),i)return[`${i[1]}${i[1]}`];if(i=n.match(new RegExp(`^(${r})(${r})(s|o)\\+$`)),i){const[l,t,s]=[i[1],i[2],i[3]];if(K[l]>=K[t])return null;const o=[];for(let d=K[l]+1;d<=K[t];d++)o.push(`${l}${R[d]}${s}`);return o}if(i=n.match(new RegExp(`^(${r})(${r})(s|o)-(${r})(${r})(s|o)$`)),i){const[l,t,s,o,d,k]=[i[1],i[2],i[3],i[4],i[5],i[6]];if(l!==o||s!==k)return null;const m=[];for(let u=Math.min(K[t],K[d]);u<=Math.max(K[t],K[d]);u++)m.push(`${l}${R[u]}${s}`);return m}if(i=n.match(new RegExp(`^(${r})(${r})(s|o)$`)),i){const[l,t]=ln(i[1],i[2]);return[`${l}${t}${i[3]}`]}return null}function ve(a,n){const r=new Set,i=[];if(!a)return{cells:r,notes:i};let l=a.trim();const t="[AKQJT98765432]";l=l.replace(new RegExp(`(${t}${t}[so]?)\\s*\\(\\s*kar[ıi]ş[ıi]m\\s*\\)`,"gi"),(s,o)=>{var d;return(d=he(o))==null||d.forEach(k=>n==null?void 0:n.add(k))," "}),l=l.replace(new RegExp(`\\(\\s*(${t}${t}?[so]?)\\s*kar[ıi]ş[ıi]m\\s*\\)`,"gi"),(s,o)=>{var d;return(d=he(o))==null||d.forEach(k=>n==null?void 0:n.add(k))," "}),l=l.replace(/\([^)]*\)/g," ");for(const s of l.split(",")){const o=s.trim().replace(/\.$/,"");if(!o||/^(yok|—|-)$/i.test(o))continue;const d=he(o);d?d.forEach(k=>r.add(k)):(/[a-zçğıöşü]/i.test(o)&&o.length>3||o.length>1)&&i.push(o)}return{cells:r,notes:i}}const tn={value:"bg-emerald-500 text-black font-semibold",mix:"bg-emerald-500/35 text-emerald-50 ring-1 ring-inset ring-emerald-400/70",blof:"bg-accent text-black font-semibold",flat:"bg-sky-600 text-white",fold:"bg-surface-2 text-neutral-600"};function na({value:a,blof:n,flat:r,caption:i,compact:l,highlight:t,valueLabel:s,blofLabel:o}){const{catOf:d,notes:k}=c.useMemo(()=>{const b=new Set,p=ve(a||"",b),y=ve(n||""),z=ve(r||""),T=[...p.notes,...y.notes,...z.notes];return{catOf:B=>p.cells.has(B)?"value":b.has(B)?"mix":y.cells.has(B)?"blof":z.cells.has(B)?"flat":"fold",notes:T}},[a,n,r]),m=[];for(let b=0;b<13;b++)for(let p=0;p<13;p++){const y=rn(b,p);m.push({code:y,label:R[Math.min(b,p)]+R[Math.max(b,p)],cat:d(y),pair:b===p})}const u=b=>m.some(p=>p.cat===b),f=l?"text-[7px]":"text-[9px] sm:text-[11px]";return e.jsxs("div",{children:[e.jsx("div",{className:"grid gap-[2px] rounded-lg bg-surface-3 p-[2px]",style:{gridTemplateColumns:"repeat(13, minmax(0, 1fr))"},children:m.map(b=>e.jsx("div",{title:b.code,className:"flex aspect-square items-center justify-center rounded-[3px] leading-none "+f+" "+tn[b.cat]+(t&&b.code===t?" ring-2 ring-white ring-offset-1 ring-offset-surface-3 z-10 scale-110":b.pair?" ring-1 ring-inset ring-white/25":""),children:b.label},b.code))}),e.jsxs("div",{className:"mt-2 flex flex-wrap gap-x-3 gap-y-1 text-[11px] text-neutral-300",children:[u("value")&&e.jsx(ne,{cls:"bg-emerald-500",label:s||"Value 3-bet"}),u("mix")&&e.jsx(ne,{cls:"bg-emerald-500/35 ring-1 ring-inset ring-emerald-400/70",label:"Karışım"}),u("blof")&&e.jsx(ne,{cls:"bg-accent",label:o||"Blöf 3-bet"}),u("flat")&&e.jsx(ne,{cls:"bg-sky-600",label:"Flat (call)"}),!l&&e.jsx("span",{className:"text-neutral-500",children:"↗ suited · ↙ offsuit · köşegen çift"})]}),i&&e.jsx("p",{className:"mt-2 text-xs text-neutral-500",children:i}),k.length>0&&e.jsxs("p",{className:"mt-1 text-xs text-neutral-400",children:[e.jsx("span",{className:"text-neutral-500",children:"+ kitap notu:"})," ",k.join(", ")]})]})}function ne({cls:a,label:n}){return e.jsxs("span",{className:"inline-flex items-center gap-1.5",children:[e.jsx("span",{className:"inline-block h-3 w-3 rounded-[3px] "+a}),n]})}const sn={A:14,K:13,Q:12,J:11,T:10,9:9,8:8,7:7,6:6,5:5,4:4,3:3,2:2},Je={s:"♠",h:"♥",d:"♦",c:"♣"};function on(a){const n=a.trim().split(/[\s,]+/).map(k=>k.match(/^([AKQJT2-9])([shdc])$/i)).filter(Boolean).map(k=>({r:sn[k[1].toUpperCase()],s:k[2].toLowerCase()}));if(n.length<3)return[];const r=[],i={};for(const k of n)i[k.s]=(i[k.s]||0)+1;const[l,t]=Object.entries(i).sort((k,m)=>m[1]-k[1])[0];t>=3?r.push({label:`üç ${Je[l]} — flush board`,wet:!0}):t===2?r.push({label:`iki ${Je[l]} — flush draw'lı`,wet:!0}):r.push({label:"rainbow",wet:!1});const s={};for(const k of n)s[k.r]=(s[k.r]||0)+1;Object.values(s).some(k=>k>=2)&&r.push({label:"eşli",wet:!1});const o=[...new Set(n.map(k=>k.r))].sort((k,m)=>k-m),d=o[o.length-1]-o[0];return d<=4?r.push({label:"bağlantılı — kent'li",wet:!0}):d>=7&&r.push({label:"kuru",wet:!1}),r}const Qe=new Set(["A","K","Q","J","T","9","8","7","6","5","4","3","2"]),Ie={s:{sym:"♠",color:"#141414"},h:{sym:"♥",color:"#e5484d"},d:{sym:"♦",color:"#2f6df6"},c:{sym:"♣",color:"#1f9d55"}},ra={sm:{w:34,r:12,big:18},md:{w:46,r:15,big:26},lg:{w:64,r:20,big:38}};function Be({rank:a,suit:n,size:r="md"}){const i=Ie[n]||Ie.s,l=ra[r],t=i.color;return e.jsxs("div",{className:"relative inline-flex shrink-0 flex-col items-center justify-center rounded-lg bg-white shadow-md",style:{width:l.w,height:Math.round(l.w*1.4)},children:[e.jsx("span",{className:"absolute left-1 top-0.5 font-bold leading-none",style:{fontSize:l.r,color:t},children:a}),e.jsx("span",{style:{fontSize:l.big,color:t,lineHeight:1},children:i.sym})]})}function dn({size:a="md"}){const n=ra[a];return e.jsx("div",{className:"inline-flex shrink-0 items-center justify-center rounded-lg border border-surface-3 bg-surface-2 text-neutral-500",style:{width:n.w,height:Math.round(n.w*1.4),fontSize:n.r},title:"kitapta belirtilmemiş",children:"?"})}function kn(a){return a.length>=3&&a[2]==="s"?["s","s"]:a.length>=3&&a[2]==="o"?["s","h"]:["s","h"]}function cn({code:a,size:n="md"}){const r=a.trim(),[i,l]=[r[0],r[1]],[t,s]=kn(r),o=r[2]==="s",d=r[2]==="o";return e.jsxs("span",{className:"inline-flex items-end gap-1.5",children:[e.jsxs("span",{className:"flex gap-1",children:[e.jsx(Be,{rank:i,suit:t,size:n}),e.jsx(Be,{rank:l,suit:s,size:n})]}),(o||d)&&e.jsx("span",{className:"mb-1 rounded px-1.5 py-0.5 text-[10px] font-semibold "+(o?"bg-emerald-500/20 text-emerald-300":"bg-neutral-500/20 text-neutral-300"),children:o?"suited":"offsuit"})]})}function H({spec:a,size:n="md",label:r,texture:i}){const l=a.trim().split(/[\s,]+/).filter(Boolean),t=i?on(a):[];return e.jsxs("div",{children:[r&&e.jsx("div",{className:"mb-1 text-xs uppercase tracking-wide text-neutral-500",children:r}),e.jsx("div",{className:"flex flex-wrap items-end gap-1.5",children:l.map((s,o)=>{if(s==="??"||s==="?")return e.jsx(dn,{size:n},o);if(s.length>=2&&Qe.has(s[0])&&Qe.has(s[1]))return e.jsx(cn,{code:s,size:n},o);const d=s.match(/^([AKQJT2-9])([shdc])$/i);return d?e.jsx(Be,{rank:d[1].toUpperCase(),suit:d[2].toLowerCase(),size:n},o):e.jsx("span",{className:"text-sm text-neutral-500",children:s},o)})}),t.length>0&&e.jsx("div",{className:"mt-1.5 flex flex-wrap gap-1.5",children:t.map((s,o)=>e.jsx("span",{className:"rounded-full px-2 py-0.5 text-[11px] "+(s.wet?"bg-accent-soft text-accent":"bg-surface-2 text-neutral-400"),children:s.label},o))})]})}function un({data:a}){const[n,r]=c.useState(0),i=a.streets.slice(0,n+1).map(t=>t.add).filter(Boolean).join(" "),l=a.streets[n];return e.jsxs("div",{className:"card p-4",children:[e.jsxs("div",{className:"mb-3 flex items-center justify-between",children:[e.jsx("span",{className:"text-sm font-semibold text-neutral-100",children:"🎬 Vaka oynatıcı"}),e.jsxs("span",{className:"text-xs text-neutral-500",children:[n+1,"/",a.streets.length," · ",l.name]})]}),i?e.jsx(H,{spec:i,size:"md",label:"Board",texture:!0}):e.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-600",children:"Board (preflop)"}),e.jsxs("div",{className:"mt-3 flex flex-wrap gap-4",children:[e.jsx(H,{spec:a.hero,size:"sm",label:a.heroLabel??"Sen"}),a.villain&&e.jsx(H,{spec:a.villain,size:"sm",label:a.villainLabel??"Rakip"})]}),e.jsx("p",{className:"mt-3 rounded-lg bg-surface-2 px-3 py-2 text-sm leading-relaxed text-neutral-200",children:l.note}),e.jsxs("div",{className:"mt-3 flex items-center gap-2",children:[e.jsx("button",{onClick:()=>r(t=>Math.max(0,t-1)),disabled:n===0,className:"btn-ghost px-3 py-1.5 text-sm",children:"← Geri"}),e.jsx("button",{onClick:()=>r(t=>Math.min(a.streets.length-1,t+1)),disabled:n===a.streets.length-1,className:"btn-accent px-3 py-1.5 text-sm",children:"Sonraki sokak →"})]})]})}function mn({v:a}){switch(a.kind){case"hand":return e.jsx(H,{spec:a.cards,size:a.size||"lg",label:a.label});case"board":return e.jsx(H,{spec:a.cards,size:a.size||"md",label:a.label??"Board",texture:!0});case"range":return e.jsx(na,{value:a.value,blof:a.blof,flat:a.flat,caption:a.caption,compact:a.compact,valueLabel:a.valueLabel,blofLabel:a.blofLabel});case"replay":return e.jsx(un,{data:a.replay})}}function bn({items:a}){return!a||a.length===0?null:e.jsx("div",{className:"space-y-4",children:a.map((n,r)=>e.jsx(mn,{v:n},r))})}function yn(){const a=c.useMemo(()=>Ha(),[]),[n,r]=c.useState(0),[i,l]=c.useState(0);if(a.length===0)return e.jsx("p",{className:"text-sm text-neutral-400",children:"Aralık grupları yüklenemedi."});const t=a[n];return e.jsxs("div",{className:"space-y-3",children:[e.jsxs("div",{children:[e.jsx("div",{className:"mb-1 text-xs uppercase tracking-wide text-neutral-500",children:"Kim açtı?"}),e.jsx("div",{className:"flex flex-wrap gap-2",children:a.map((s,o)=>e.jsx("button",{onClick:()=>{r(o),l(0)},className:o===n?"btn-accent px-3 py-1.5 text-sm":"btn-ghost px-3 py-1.5 text-sm",children:s.opener},o))})]}),e.jsx("div",{className:"text-xs text-neutral-500",children:t.label}),e.jsx("div",{className:"overflow-hidden rounded-xl border border-surface-3",children:e.jsxs("table",{className:"w-full text-sm",children:[e.jsx("thead",{children:e.jsx("tr",{className:"bg-surface-2 text-left text-neutral-300",children:t.table.headers.map((s,o)=>e.jsx("th",{className:"px-3 py-2 font-medium",children:s},o))})}),e.jsx("tbody",{children:t.table.rows.map((s,o)=>{const d=o===i;return e.jsx("tr",{onClick:()=>l(d?null:o),className:"cursor-pointer border-t border-surface-3 align-top transition "+(d?"bg-accent-soft ring-1 ring-accent":"hover:bg-surface-2"),children:s.map((k,m)=>e.jsx("td",{className:m===0?"px-3 py-2 font-semibold text-neutral-100 whitespace-nowrap":"px-3 py-2 "+(d?"text-neutral-100":"text-neutral-300"),children:k},m))},o)})})]})}),e.jsx("p",{className:"text-xs text-neutral-500",children:"Kendi pozisyonuna dokun — value ve blöf aralığın 13×13 grid'de renklensin."}),i!==null&&t.table.rows[i]&&e.jsxs("div",{className:"rounded-xl border border-surface-3 bg-surface-1 p-3",children:[e.jsxs("div",{className:"mb-2 text-sm font-semibold text-neutral-100",children:[t.table.rows[i][0]," · 3-bet aralığı"]}),e.jsx(na,{value:t.table.rows[i][1],blof:t.table.rows[i][2]})]}),t.flats.length>0&&e.jsx("ul",{className:"space-y-1 text-xs text-neutral-400",children:t.flats.map((s,o)=>e.jsxs("li",{children:["• ",s]},o))})]})}const $=Xa(),pn=[.8,1,1.25,1.5],re=999;function fn(a){var n,r;return(((n=a.bullets)==null?void 0:n.length)??0)+((r=a.visuals)!=null&&r.length?1:0)+(a.table?1:0)+(a.rangeMatrix?1:0)+(a.ruleBox?1:0)}function hn({moduleId:a,onBack:n}){var Oe,Ce;const r=c.useMemo(()=>ga(a),[a]),[i,l]=c.useState(0),[t,s]=c.useState(!1),[o,d]=c.useState(!0),[k,m]=c.useState(1),[u,f]=c.useState(re),[b,p]=c.useState(-1),[y,z]=c.useState({i:0,n:0}),[T,L]=c.useState(()=>{const h=_e[a];return h&&!w("coldopen:done",[]).includes(a)?h:null}),B=c.useRef(!1),E=c.useRef(k),G=c.useRef(o),me=c.useRef(null);if(E.current=k,G.current=o,c.useEffect(()=>()=>{B.current=!1,$.stop()},[]),c.useEffect(()=>{if(b<0||!me.current)return;const h=me.current.querySelector('[data-active="true"]');h==null||h.scrollIntoView({block:"center",behavior:"smooth"})},[b]),!r)return e.jsxs("div",{className:"p-4",children:[e.jsx("button",{className:"btn-ghost",onClick:n,children:"← Geri"}),e.jsx("p",{className:"mt-4 text-neutral-400",children:"Modül bulunamadı."})]});if(T)return e.jsx(Aa,{kavram:T,onStart:()=>{const h=w("coldopen:done",[]);h.includes(a)||O("coldopen:done",[...h,a]),L(null)}});const J=r.slides,A=J[i],ta=i===J.length-1;let Z=((Oe=A.bullets)==null?void 0:Oe.length)??0;const X=(Ce=A.visuals)!=null&&Ce.length?Z++:-1,be=A.table?Z++:-1,ye=A.rangeMatrix?Z++:-1,ee=A.ruleBox?Z++:-1,V=h=>h>=0&&h<u,j=h=>t&&h===b,Ke=h=>{if(h!==J.length-1)return;const g=w("lessons:done",[]);g.includes(r.id)||O("lessons:done",[...g,r.id])},Se=()=>{B.current=!1,$.stop(),s(!1),p(-1),f(re)},sa=async h=>{B.current=!0,s(!0);for(let g=h;g<J.length&&B.current;g++){l(g),Ke(g);const q=en(J[g].narration),pe=fn(J[g]);f(0),p(-1);for(let F=0;F<q.length&&B.current;F++){q[F+1]&&an([q[F+1]]);const Pe=pe===0?-1:Math.min(pe-1,Math.floor(F/q.length*pe));p(Pe),f(oa=>Math.max(oa,Pe+1)),z({i:F+1,n:q.length}),await $.speak(q[F],E.current)}if(f(re),p(-1),!B.current||!G.current)break}B.current=!1,s(!1),z({i:0,n:0})},we=h=>{Se();const g=Math.min(Math.max(h,0),J.length-1);l(g),f(re),Ke(g)},ae=h=>"reveal-in transition-all duration-300 "+(t?h?"opacity-100":"opacity-40":"opacity-100");return e.jsxs("div",{className:"flex min-h-full flex-col",children:[e.jsxs("div",{className:"flex items-center gap-3 px-4 pt-4",children:[e.jsxs("button",{className:"btn-ghost px-3 py-1.5 text-sm",onClick:n,children:["← ",r.id]}),e.jsxs("div",{className:"min-w-0",children:[e.jsx("div",{className:"truncate text-sm font-semibold",children:r.title}),e.jsxs("div",{className:"text-xs text-neutral-500",children:[r.chapter," · ",r.minutes," dk"]})]})]}),e.jsx("div",{className:"flex gap-1 px-4 pt-3",children:J.map((h,g)=>e.jsx("div",{className:"h-1 flex-1 rounded-full "+(g<=i?"bg-accent":"bg-surface-3")},g))}),e.jsxs("div",{ref:me,className:"flex-1 space-y-4 px-4 py-5",children:[e.jsx("h2",{className:"anim-fade text-xl font-bold",children:A.title}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("button",{onClick:()=>t?Se():sa(i),className:t?"btn-ghost":"btn-accent",disabled:!$.supported,children:t?"⏸ Durdur":"▶ Anlat"}),e.jsxs("button",{onClick:()=>d(h=>!h),className:"btn px-3 py-2 text-sm "+(o?"bg-accent-soft text-accent border border-accent":"bg-surface-2 text-neutral-400 border border-surface-3"),title:"Slaytları otomatik ilerlet",children:["⟳ Oto ",o?"açık":"kapalı"]}),e.jsx("div",{className:"flex overflow-hidden rounded-xl border border-surface-3",children:pn.map(h=>e.jsxs("button",{onClick:()=>m(h),className:"min-h-[44px] px-3.5 py-2.5 text-xs "+(h===k?"bg-accent text-black":"bg-surface-2 text-neutral-400"),children:[h,"×"]},h))})]}),t&&y.n>0&&e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"live-pulse text-xs text-accent",children:"● anlatılıyor"}),e.jsx("div",{className:"h-1 flex-1 overflow-hidden rounded-full bg-surface-3",children:e.jsx("div",{className:"h-full rounded-full bg-accent transition-all duration-300",style:{width:`${y.i/y.n*100}%`}})})]}),!$.supported&&e.jsx("p",{className:"text-xs text-neutral-500",children:"Bu tarayıcı sesli anlatımı desteklemiyor."}),A.bullets&&e.jsx("ul",{className:"space-y-2",children:A.bullets.map((h,g)=>V(g)?e.jsxs("li",{"data-active":j(g),className:"reveal-in flex gap-2 rounded-lg px-2 py-1 text-[15px] leading-relaxed transition-all duration-300 "+(j(g)?"bg-accent-soft ring-1 ring-accent/40":t?"opacity-40":""),children:[e.jsx("span",{className:"mt-1 "+(j(g)?"text-accent":"text-accent/70"),children:j(g)?"▶":"•"}),e.jsx("span",{children:h})]},g):null)}),A.visuals&&V(X)&&e.jsx("div",{"data-active":j(X),className:ae(j(X))+(j(X)?" rounded-xl ring-1 ring-accent/30 -mx-1 px-1 py-1":""),children:e.jsx(bn,{items:A.visuals})}),A.table&&V(be)&&e.jsx("div",{"data-active":j(be),className:ae(j(be)),children:e.jsx(vn,{table:A.table})}),A.rangeMatrix&&V(ye)&&e.jsx("div",{"data-active":j(ye),className:ae(j(ye)),children:e.jsx(yn,{})}),A.ruleBox&&V(ee)&&e.jsxs("div",{"data-active":j(ee),className:ae(j(ee))+" rounded-xl border-l-4 border-accent bg-accent-soft px-4 py-3 text-[15px] font-medium leading-relaxed"+(j(ee)?" ring-1 ring-accent/50":""),children:["📌 ",A.ruleBox]})]}),e.jsxs("div",{className:"flex items-center justify-between gap-3 px-4 pb-4",children:[e.jsx("button",{className:"btn-ghost",onClick:()=>we(i-1),disabled:i===0,children:"← Önceki"}),e.jsxs("span",{className:"text-xs text-neutral-500",children:[i+1," / ",J.length]}),ta?e.jsx("button",{className:"btn-accent",onClick:n,children:"Bitir ✓"}):e.jsx("button",{className:"btn-accent",onClick:()=>we(i+1),children:"Sonraki →"})]})]})}function vn({table:a}){const n=c.useMemo(()=>C(a.section,a.sub),[a.section,a.sub]);return e.jsxs("div",{className:"space-y-2",children:[n?e.jsx(nn,{table:n}):e.jsx("p",{className:"text-sm text-neutral-500",children:"Tablo yüklenemedi."}),a.caption&&e.jsx("p",{className:"text-xs italic text-neutral-500",children:a.caption})]})}function gn({onDone:a}){const n=c.useMemo(()=>Te(),[]),[r,i]=c.useState(0),[l,t]=c.useState(!1),[s,o]=c.useState(0);if(n.length===0)return e.jsxs("div",{className:"flex flex-col items-center gap-4 p-8 text-center",children:[e.jsx("div",{className:"text-4xl",children:"👍"}),e.jsx("p",{className:"text-neutral-300",children:"Bugün tekrar zamanı gelen konu yok."}),e.jsx("button",{onClick:a,className:"btn-accent px-4 py-2",children:"İlerlemeye dön"})]});if(r>=n.length)return e.jsxs("div",{className:"flex flex-col items-center gap-4 p-8 text-center",children:[e.jsx("div",{className:"text-4xl",children:"🎉"}),e.jsxs("p",{className:"text-neutral-200",children:["Bugünlük tekrar bitti — ",s," konu."]}),e.jsx("button",{onClick:a,className:"btn-accent px-4 py-2",children:"İlerlemeye dön"})]});const d=n[r];function k(m){Ea(d.id,m),ue(),o(u=>u+1),t(!1),i(u=>u+1)}return e.jsxs("div",{className:"flex flex-col gap-4 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("button",{onClick:a,className:"text-neutral-400",children:"← İlerleme"}),e.jsxs("span",{className:"text-neutral-500",children:[r+1," / ",n.length]})]}),e.jsx("div",{className:"h-1 overflow-hidden rounded bg-surface-2",children:e.jsx("div",{className:"h-full bg-accent transition-all",style:{width:`${r/n.length*100}%`}})}),e.jsxs("div",{className:"card min-h-[180px] p-5",children:[e.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:d.kavram}),e.jsx("p",{className:"mt-2 text-lg leading-relaxed text-neutral-100",children:d.soru_ozeti}),l&&e.jsxs("div",{className:"mt-4 border-t border-surface-3 pt-3",children:[e.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:"Not / doğru"}),e.jsxs("p",{className:"mt-1 text-sm text-neutral-300",children:[d.not||"—",e.jsxs("span",{className:"ml-2 text-neutral-500",children:["(son sonuç: ",d.sonuc,")"]})]})]})]}),l?e.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[e.jsx("button",{onClick:()=>k("wrong"),className:"btn-ghost py-3 text-red-300",children:"✗ Bilemedim"}),e.jsx("button",{onClick:()=>k("half"),className:"btn-ghost py-3 text-accent",children:"◐ Yarım"}),e.jsx("button",{onClick:()=>k("correct"),className:"btn-ghost py-3 text-emerald-300",children:"✓ Bildim"})]}):e.jsx("button",{onClick:()=>t(!0),className:"btn-accent py-3 text-base",children:"Göster"})]})}const xn=[{n:11,short:"Şişmiş Pot · Turn · River"},{n:12,short:"ICM & Final Table"},{n:13,short:"Multiway Pot"},{n:14,short:"40–70bb Köprü"},{n:15,short:"PLO Turnuva Katmanı"},{n:16,short:"Zihinsel Omurga"},{n:17,short:"WSOP Online ME Day 2 ★"}];function Bn(a){const n=a.split(`
`),r=[];let i=[];const l=()=>{const s=i.join(" ").trim();s&&r.push({k:"p",text:s}),i=[]};let t=0;for(;t<n.length;){const s=n[t].trim();if(s===""||s==="---")l(),t++;else if(s.startsWith("### "))l(),r.push({k:"h3",text:s.slice(4).trim()}),t++;else if(s.startsWith("|")){l();const o=[];for(;t<n.length&&n[t].trim().startsWith("|");)o.push(n[t++].trim());const d=k=>k.replace(/^\|/,"").replace(/\|$/,"").split("|").map(m=>S(m));r.push({k:"table",headers:d(o[0]),rows:o.slice(2).map(d)})}else if(s.startsWith("> "))l(),r.push({k:"quote",text:s.slice(2).trim()}),t++;else if(/^([-*]|\d+\.)\s/.test(s)){l();const o=[];for(;t<n.length&&/^([-*]|\d+\.)\s/.test(n[t].trim());)o.push(n[t++].trim().replace(/^([-*]|\d+\.)\s/,""));r.push({k:"list",items:o})}else i.push(s),t++}return l(),r}function ie({text:a}){const n=a.split(/(\*\*[^*]+?\*\*|\*[^*]+?\*)/g).filter(Boolean);return e.jsx(e.Fragment,{children:n.map((r,i)=>r.startsWith("**")&&r.endsWith("**")?e.jsx("b",{children:r.slice(2,-2)},i):r.startsWith("*")&&r.endsWith("*")?e.jsx("i",{className:"text-neutral-400",children:r.slice(1,-1)},i):e.jsx("span",{children:r},i))})}function zn({title:a,onDone:n}){const r=c.useMemo(()=>Bn(D(a)),[a]);return e.jsxs("div",{className:"flex flex-col gap-3 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("button",{onClick:n,className:"text-neutral-400",children:"← Bölümler"}),e.jsx("span",{className:"font-semibold text-neutral-100",children:"📖 Kitap"}),e.jsx("span",{className:"w-16"})]}),e.jsx("h1",{className:"text-base font-semibold leading-snug text-neutral-100",children:a}),r.map((i,l)=>i.k==="h3"?e.jsx("h2",{className:"mt-2 text-sm font-semibold text-accent",children:i.text},l):i.k==="quote"?e.jsx("blockquote",{className:"border-l-2 border-accent bg-accent-soft px-3 py-2 text-[13px] font-medium leading-relaxed text-accent",children:e.jsx(ie,{text:i.text})},l):i.k==="list"?e.jsx("ul",{className:"ml-1 space-y-1",children:i.items.map((t,s)=>e.jsxs("li",{className:"flex gap-2 text-[13px] leading-snug text-neutral-200",children:[e.jsx("span",{className:"shrink-0 text-accent",children:"•"}),e.jsx("span",{children:e.jsx(ie,{text:t})})]},s))},l):i.k==="table"?e.jsx("div",{className:"overflow-x-auto",children:e.jsxs("table",{className:"w-full border-collapse text-[12px]",children:[e.jsx("thead",{children:e.jsx("tr",{children:i.headers.map((t,s)=>e.jsx("th",{className:"border border-surface-3 bg-surface-2 px-2 py-1 text-left font-semibold text-neutral-300",children:t},s))})}),e.jsx("tbody",{children:i.rows.map((t,s)=>e.jsx("tr",{children:t.map((o,d)=>e.jsx("td",{className:"border border-surface-3 px-2 py-1 align-top text-neutral-200",children:e.jsx(ie,{text:o})},d))},s))})]})},l):e.jsx("p",{className:"text-[13px] leading-relaxed text-neutral-300",children:e.jsx(ie,{text:i.text})},l))]})}const ia="leakcard:date";function An(){var n;const a=((n=Ze()[0])==null?void 0:n.kavram)||"";return/icm|cover/i.test(a)?"cover":"pot"}function la(){return new Date().toISOString().slice(0,10)}function jn(){return w(ia,"")===la()}function Fe(){const a=Math.random()<.45,n=4+Math.floor(Math.random()*60),r=8+Math.floor(Math.random()*90),i=n/(n+r),l=a||i>=.4;return{potBb:n,behindBb:r,threeBet:a,bloated:l}}function Nn(){const[a,n]=c.useState(jn()?"hidden":"card"),[r]=c.useState(()=>An()),i=c.useRef(null);if(c.useEffect(()=>{var t,s;a!=="hidden"&&((s=(t=i.current)==null?void 0:t.querySelector("button"))==null||s.focus())},[a]),a==="hidden")return null;const l=()=>{O(ia,la()),ue(),n("hidden")};return e.jsx("div",{ref:i,role:"dialog","aria-modal":"true","aria-label":"Günün kartı",onKeyDown:t=>{var k;if(t.key!=="Tab")return;const s=(k=i.current)==null?void 0:k.querySelectorAll("button, input, textarea, a[href]");if(!s||s.length===0)return;const o=s[0],d=s[s.length-1];t.shiftKey&&document.activeElement===o?(t.preventDefault(),d.focus()):!t.shiftKey&&document.activeElement===d&&(t.preventDefault(),o.focus())},className:"fixed inset-0 z-50 flex flex-col bg-surface-0/95 backdrop-blur",children:e.jsx("div",{className:"mx-auto flex h-full w-full max-w-md flex-col",children:a==="card"?r==="cover"?e.jsx(Kn,{onDrill:()=>n("drill"),onDone:l}):e.jsx(Tn,{onDrill:()=>n("drill"),onDone:l}):r==="cover"?e.jsx(Sn,{onDone:l}):e.jsx(wn,{onDone:l})})})}function Tn({onDrill:a,onDone:n}){return e.jsxs("div",{className:"flex flex-1 flex-col justify-center gap-6 p-6",children:[e.jsx("div",{className:"text-center text-xs uppercase tracking-[0.2em] text-accent",children:"Günün kartı"}),e.jsx("div",{className:"card border-l-4 border-accent p-6",children:e.jsxs("p",{className:"text-lg leading-relaxed",children:[e.jsx("b",{className:"text-accent",children:"EĞER"})," pot şişmiş (3-bet+ pot ya da stack'imin ~%40'ı ortada)"," ",e.jsx("b",{className:"text-accent",children:"VE"})," elimde tek per var,",e.jsx("br",{}),e.jsx("b",{className:"text-accent",children:"O ZAMAN"})," içimden ",e.jsx("b",{children:'"bluff-catcher"'})," derim: check/call ya da fold —"," ",e.jsx("b",{children:"asla value raise."})]})}),e.jsx("p",{className:"text-center text-[11px] text-neutral-600",children:"Kitabın tanımı: şişmiş = 3-bet+ pot. “~%40 stack ortada” pratik bir sezgi (kitap dışı)."}),e.jsx("p",{className:"text-center text-sm text-neutral-500",children:"Yüksek sesle bir kez oku. Masada bu cümle otomatik ateşlenecek."}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("button",{onClick:n,className:"btn-accent w-full py-3 text-base",children:"Prova ettim ✓"}),e.jsx("button",{onClick:a,className:"btn-ghost w-full py-3",children:"⏱ 90sn cue drill →"})]})]})}function Kn({onDrill:a,onDone:n}){return e.jsxs("div",{className:"flex flex-1 flex-col justify-center gap-6 p-6",children:[e.jsx("div",{className:"text-center text-xs uppercase tracking-[0.2em] text-accent",children:"Günün kartı"}),e.jsx("div",{className:"card border-l-4 border-accent p-6",children:e.jsxs("p",{className:"text-lg leading-relaxed",children:[e.jsx("b",{className:"text-accent",children:"EĞER"})," jam'e fold basmak üzereysem,",e.jsx("br",{}),e.jsx("b",{className:"text-accent",children:"O ZAMAN"})," önce sınıflarım: ",e.jsx("b",{children:"seni cover eden mi, senin cover ettiğin mi?"})," Cover edilmiyorsam → ",e.jsx("b",{children:"call çok daha geniş."})]})}),e.jsx("p",{className:"text-center text-[11px] text-neutral-600",children:"Kitap (B12): cover'sız aralık cover'lıdan asla sıkı olamaz — kaybetsen de bust olmazsın."}),e.jsx("p",{className:"text-center text-sm text-neutral-500",children:"Yüksek sesle bir kez oku. Masada bu cümle otomatik ateşlenecek."}),e.jsxs("div",{className:"flex flex-col gap-2",children:[e.jsx("button",{onClick:n,className:"btn-accent w-full py-3 text-base",children:"Prova ettim ✓"}),e.jsx("button",{onClick:a,className:"btn-ghost w-full py-3",children:"⏱ 90sn cue drill →"})]})]})}const P=12;function He(){const a=12+Math.floor(Math.random()*60),n=3+Math.floor(Math.random()*40),r=Math.random()<.5?a+n:Math.max(3,a-n);return{heroBb:a,jammerBb:r,covered:r>=a}}function Sn({onDone:a}){const[n,r]=c.useState(0),[i,l]=c.useState(()=>He()),[t,s]=c.useState(null),[o,d]=c.useState(0),k=t===i.covered,m=n>=P;function u(b){s(b),b===i.covered&&d(p=>p+1)}function f(){if(n+1>=P){r(P);return}r(b=>b+1),l(He()),s(null)}return m?e.jsxs("div",{className:"flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center",children:[e.jsx("div",{className:"text-5xl",children:"🎯"}),e.jsxs("p",{className:"text-lg text-neutral-100",children:[o,"/",P," doğru"]}),e.jsx("p",{className:"text-sm text-neutral-500",children:"Jam'e fold basmadan önce: cover ediliyor muyum? Hayır → call çok daha geniş."}),e.jsx("button",{onClick:a,className:"btn-accent px-6 py-3",children:"Bitir ✓"})]}):e.jsxs("div",{className:"flex flex-1 flex-col gap-5 p-6",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("span",{className:"text-neutral-500",children:"Cue drill"}),e.jsxs("span",{className:"text-neutral-400",children:[n+1," / ",P]})]}),e.jsxs("div",{className:"card p-5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent",children:["Sende ",i.heroBb,"bb"]}),e.jsxs("span",{className:"text-sm text-neutral-400",children:["jam atan ",i.jammerBb,"bb"]})]}),e.jsx("div",{className:"mt-3 text-sm text-neutral-400",children:"Bubble. Jam sana geldi."})]}),t===null?e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 text-center text-[15px] font-medium",children:"Sınıfla: bu jam…"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>u(!0),className:"btn-ghost py-4 text-base",children:"Beni cover ediyor"}),e.jsx("button",{onClick:()=>u(!1),className:"btn-ghost py-4 text-base",children:"Ben cover ediyorum"})]})]}):e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsx("div",{className:"rounded-xl px-4 py-3 text-sm font-medium "+(k?"bg-emerald-500/15 text-emerald-300":"bg-red-500/15 text-red-300"),children:i.covered?"Cover ediliyorsun — kaybedersen bust. Call sert daralır.":"Cover edilmiyorsun — kaybetsen de bust olmazsın. Call sandığından çok daha geniş."}),e.jsx("button",{onClick:f,className:"btn-accent py-3 text-base",children:n+1>=P?"Bitir":"Sonraki →"})]}),e.jsx("button",{onClick:a,className:"btn-ghost mt-auto w-full py-3",children:"atla"})]})}function wn({onDone:a}){const[n,r]=c.useState(0),[i,l]=c.useState(()=>Fe()),[t,s]=c.useState("pot"),[o,d]=c.useState(null),[k,m]=c.useState(null),[u,f]=c.useState(0),b=o===i.bloated,p=k===i.bloated,y=b&&p,z=n>=P;function T(E){d(E),s("class")}function L(E){m(E),b&&E===i.bloated&&f(G=>G+1),s("fb")}function B(){if(n+1>=P){r(P);return}r(E=>E+1),l(Fe()),d(null),m(null),s("pot")}return z?e.jsxs("div",{className:"flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center",children:[e.jsx("div",{className:"text-5xl",children:"🎯"}),e.jsxs("p",{className:"text-lg text-neutral-100",children:[u,"/",P," doğru"]}),e.jsx("p",{className:"text-sm text-neutral-500",children:"Şişmiş potta tek per = bluff-catcher. Bu refleksi masaya götür."}),e.jsx("button",{onClick:a,className:"btn-accent px-6 py-3",children:"Bitir ✓"})]}):e.jsxs("div",{className:"flex flex-1 flex-col gap-5 p-6",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("span",{className:"text-neutral-500",children:"Cue drill"}),e.jsxs("span",{className:"text-neutral-400",children:[n+1," / ",P]})]}),e.jsxs("div",{className:"card p-5",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsxs("span",{className:"rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent",children:["Pot ",i.potBb,"bb"]}),e.jsxs("span",{className:"text-sm text-neutral-400",children:["arkanda ",i.behindBb,"bb"]})]}),i.threeBet&&e.jsx("div",{className:"mt-2 inline-block rounded-full bg-red-500/15 px-2 py-0.5 text-xs text-red-300",children:"3-bet'li pot"}),e.jsx("div",{className:"mt-3 text-sm text-neutral-400",children:"Elin: tek per (overpair)"})]}),t==="pot"&&e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 text-center text-[15px] font-medium",children:"Pot şişmiş mi?"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>T(!0),className:"btn-ghost py-4 text-base",children:"Evet, şişmiş"}),e.jsx("button",{onClick:()=>T(!1),className:"btn-ghost py-4 text-base",children:"Hayır"})]})]}),t==="class"&&e.jsxs("div",{children:[e.jsx("div",{className:"mb-2 text-center text-[15px] font-medium",children:"Tek per'in sınıfı?"}),e.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[e.jsx("button",{onClick:()=>L(!0),className:"btn-ghost py-4 text-base",children:"Bluff-catcher"}),e.jsx("button",{onClick:()=>L(!1),className:"btn-ghost py-4 text-base",children:"Value"})]})]}),t==="fb"&&e.jsxs("div",{className:"flex flex-col gap-3",children:[e.jsxs("div",{className:"rounded-xl px-4 py-3 text-sm font-medium "+(y?"bg-emerald-500/15 text-emerald-300":"bg-red-500/15 text-red-300"),children:[e.jsx("div",{children:i.bloated?"Şişmiş pot → tek per BLUFF-CATCHER.":"Şişmemiş → tek per hâlâ value/showdown."}),!y&&e.jsx("div",{className:"mt-1 font-normal opacity-90",children:b?`Pot okuman doğru, sınıflama yanlış: ${i.bloated?"bluff-catcher":"value/showdown"}.`:p?"Sınıflaman doğru, pot okuması yanlıştı.":"Pot okuması da sınıflama da yanlıştı."})]}),e.jsx("button",{onClick:B,className:"btn-accent py-3 text-base",children:n+1>=P?"Bitir":"Sonraki →"})]}),e.jsx("button",{onClick:a,className:"btn-ghost mt-auto w-full py-3",children:"atla"})]})}const _=[{id:"vaka1",title:"Vaka 1 — A4s river call",setup:"$50K High Roller. Board bölüşmeye açık — chop mekaniği masada. River'da rakip all-in geldi. Elin A4s.",hero:"A4s",board:"",options:["Hero-call","Fold"],correct:1,rule:"Chop'lar jam atmaz: rakip all-in geldiyse bölüşen eli aralığından çıkarmıştır — jam seni geçen eldir. Bir mekaniği görmek yetmez; rakibin hamlesi o mekanikle uyumlu mu diye sor. 📌 Chop varken jam = seni geçmiş el.",selfExplain:"Chop mekaniğini doğru gördün — peki hangi filtreyi atladın?",concept:"kök-hata"},{id:"vaka2",title:"Vaka 2 — KTo top pair",setup:"$10K 6-max. Islak board, top pair (KT) flopladın. OOP'sun, rakip cbet attı. Sıra sende.",hero:"KTo",board:"",options:["Check-raise all-in","Check-call, sonra değerlendir"],correct:1,rule:"Tek per stack-off yakıtı değil. Islak boardda top pair büyük pot başlatıcı değildir; stack'i sen başlatınca seni ödeyen aralık senden iyi. Şişmiş pota giden yol elini bluff-catcher'a çevirir. 📌 Top pair islak boardda: check-call, başlatma.",selfExplain:"Top pair güçlü göründü — pot büyüyünce elinin sınıfı ne oldu?",concept:"kök-hata"},{id:"vaka3",title:"Vaka 3 — AA river jam",setup:"Board 2-4-5, flop+turn value bet (ikisi de doğruydu). River 6 geldi — senden zayıf hiçbir el artık ödemez. Elin AA. Rakip check etti.",hero:"AA",board:"2c 4d 5s ?? 6h",options:["Kalan stack'i jam","Check"],correct:1,rule:"River'da senden zayıf el ödemeyecekse jam value değildir. O river'da 3'lü/kent/set seni geçmiş, tek per pas — value target yok. Kötü river'da overpair: küçük pota check-call, büyük pota check-fold. 📌 Ödeyecek zayıf el yoksa jam yok.",selfExplain:"Flop+turn value doğruydu — river 6'da tam olarak ne değişti?",concept:"kök-hata"},{id:"vaka4",title:"Vaka 4 — Senin elin (dün)",setup:"6-max. BB'de T6s, BTN min-raise, call. Flop A-T-3, BTN 1/3 pot, call (çift 10). Turn 5, check-check. River T → board A-T-3-5-T, sende trip 10 ama kicker 6. Check ettin, BTN thin bet. Sıra sende.",hero:"Th 6h",board:"Ac Ts 3d 5c Td",options:["Check-raise all-in","Check-call — bluff-catcher"],correct:1,rule:"Senden zayıf hiçbir el all-in'i ödemez: her 10 senin 6 kicker'ını geçer, boat'lar zaten önde. Bu runout'ta trip'in bluff-catcher — check-call, blöfleri içeride tut. Check-raise all-in blöfleri fold ettirir, seni yalnız geçen el öder. 📌 Ödeyecek zayıf el yoksa raise yok (cümle 2 = Vaka 2).",selfExplain:"Trip 10 güçlü hissettirdi — o board'da kaç el senin 6 kicker'ını GEÇİYOR, kaçı GERİDE kalıp öder?",concept:"kök-hata",beyondBook:!0}];function On({onBack:a}){const[n,r]=c.useState(0),[i,l]=c.useState(null),[t]=c.useState(()=>w("autopsy:done",!1)),s=_[n],o=i!==null,d=n>=_.length;function k(u){if(o||(l(u),t))return;const f=u===s.correct;ue(),Ge({kavram:s.concept,soru_ozeti:`Otopsi: ${s.title}`,sonuc:f?"correct":"wrong",not:s.rule,severity:"tournament_life"})}function m(){l(null),n+1>=_.length&&!t&&O("autopsy:done",!0),r(u=>u+1)}return d?e.jsxs("div",{className:"flex flex-col items-center gap-4 p-8 text-center",children:[e.jsx("div",{className:"text-5xl",children:"🔬"}),e.jsx("p",{className:"text-neutral-200",children:"Vakalar işlendi. Kök hata hep aynıydı."}),e.jsx("p",{className:"text-sm text-neutral-500",children:"Tek per'in şişmiş/multiway potta yanlış sınıflandırılması. Masaya bu refleksi götür."}),e.jsx("button",{onClick:a,className:"btn-accent px-6 py-3",children:"← Derse dön"})]}):e.jsxs("div",{className:"flex min-h-full flex-col gap-4 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("button",{onClick:a,className:"text-neutral-400",children:"← Ders"}),e.jsxs("span",{className:"text-neutral-500",children:[n+1," / ",_.length]})]}),t&&e.jsx("div",{className:"rounded-lg bg-surface-2 px-3 py-2 text-xs text-neutral-400",children:"Tekrar oynatım — puanlanmaz; kendine açıklamaya odaklan."}),e.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[e.jsx("h1",{className:"text-xl font-bold",children:s.title}),s.beyondBook?e.jsx("span",{className:"rounded border border-dashed border-accent/50 bg-accent-soft px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent",children:"Kitap dışı · senin elin"}):e.jsx("span",{className:"rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300",children:"Kitaptan · Bölüm 7"})]}),e.jsxs("div",{className:"card p-4",children:[e.jsx("div",{className:"flex items-center justify-between gap-3",children:e.jsx(H,{spec:s.hero,size:"md",label:"Elin"})}),s.board&&e.jsx("div",{className:"mt-3",children:e.jsx(H,{spec:s.board,size:"sm",label:"Board",texture:!0})}),e.jsx("p",{className:"mt-3 text-[15px] leading-relaxed text-neutral-200",children:s.setup})]}),o?e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"rounded-xl px-4 py-3 text-sm font-medium "+(i===s.correct?"bg-emerald-500/15 text-emerald-300":"bg-red-500/15 text-red-300"),children:[i===s.correct?"✓ Doğru — ":"✗ ","Doğru hat: ",e.jsx("b",{children:s.options[s.correct]})]}),e.jsx("div",{className:"rounded-xl border-l-4 border-accent bg-accent-soft px-4 py-3 text-sm leading-relaxed",children:s.rule}),e.jsxs("div",{className:"card p-3",children:[e.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:"Kendine açıkla"}),e.jsx("p",{className:"mt-1 text-sm text-neutral-300",children:s.selfExplain}),e.jsx("textarea",{rows:2,placeholder:"Sesli ya da yazılı — hangi ipucunu kaçırdın?",className:"mt-2 w-full resize-none rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"})]}),e.jsx(Pn,{hand:s},s.id),e.jsx("button",{onClick:m,className:"btn-accent py-3 text-base",children:n+1>=_.length?"Bitir":"Sonraki vaka →"})]}):e.jsxs(e.Fragment,{children:[e.jsx("div",{className:"text-center text-sm text-neutral-500",children:"Önce SEN karar ver:"}),e.jsx("div",{className:"grid grid-cols-1 gap-2",children:s.options.map((u,f)=>e.jsx("button",{onClick:()=>k(f),className:"btn-ghost py-3 text-[15px]",children:u},f))})]})]})}function Cn(a){return a<1?0:a<=4?1:a<=8?2:3}function Pn({hand:a}){const[n,r]=c.useState(""),[i,l]=c.useState(""),[t,s]=c.useState(()=>{const m=w("spr-kalibrasyon",[]).find(u=>u.id===a.id);return m?m.spr:null}),o=c.useMemo(()=>C("Bölüm 11","11.0"),[]);function d(){const m=Number(n),u=Number(i);if(!isFinite(m)||m<=0||!isFinite(u)||u<0)return;const f=Math.round(u/m*10)/10;s(f);const b=w("spr-kalibrasyon",[]).filter(p=>p.id!==a.id);O("spr-kalibrasyon",[...b,{id:a.id,pot:m,stack:u,spr:f}]),Ge({kavram:"spr-kalibrasyon",soru_ozeti:`SPR biç: ${a.title}`,sonuc:"correct",not:`flop pot ${m}bb, kalan stack ${u}bb → SPR ${f}`})}const k=t!==null&&o?o.rows[Cn(t)]:null;return e.jsxs("div",{className:"card p-3",children:[e.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:"SPR biç (B11.0 · isteğe bağlı)"}),e.jsx("p",{className:"mt-1 text-xs text-neutral-500",children:"Hafızandan gir: floptaki pot ve arkanda kalan stack (bb). Hatırlamıyorsan boş bırak — sayı uydurma."}),e.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[e.jsx("input",{value:n,onChange:m=>r(m.target.value),inputMode:"decimal",placeholder:"flop pot (bb)",className:"w-full min-w-0 rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),e.jsx("input",{value:i,onChange:m=>l(m.target.value),inputMode:"decimal",placeholder:"kalan stack (bb)",className:"w-full min-w-0 rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),e.jsx("button",{onClick:d,className:"btn-ghost shrink-0 px-3 py-2 text-sm",children:"Hesapla"})]}),t!==null&&e.jsxs("div",{className:"mt-3 text-sm",children:[e.jsxs("div",{className:"font-semibold text-accent",children:["SPR ≈ ",t]}),k?e.jsxs("div",{className:"mt-1 rounded-lg bg-surface-2 px-3 py-2 text-xs leading-relaxed text-neutral-300",children:[e.jsx("b",{children:k[0]})," · ",k[1]," → ",k[2]]}):e.jsx("p",{className:"mt-1 text-xs text-neutral-500",children:"Bant tablosu yüklenemedi (B11.0)."})]})]})}const qe="journal",En=[{v:.6,label:"%60"},{v:.8,label:"%80"},{v:.95,label:"%95"}];function Rn({onDone:a}){const[n,r]=c.useState(()=>w(qe,[])),[i,l]=c.useState(""),[t,s]=c.useState(""),[o,d]=c.useState(""),[k,m]=c.useState(.8),[u,f]=c.useState(null),b=n.filter(y=>y.day===x(-1)).length;function p(){if(!i.trim()||!t.trim()){f({ok:!1,text:"El ve Aksiyon zorunlu — ikisini de doldur."});return}const y=[{day:x(0),el:i,aksiyon:t,gerekce:o,guven:k},...n];r(y),O(qe,y),ue(),l(""),s(""),d(""),f({ok:!0,text:"Kaydedildi ✓"})}return e.jsxs("div",{className:"flex flex-col gap-4 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("button",{onClick:a,className:"text-neutral-400",children:"← İlerleme"}),e.jsx("span",{className:"font-semibold text-neutral-100",children:"🗒 Karar günlüğü"}),e.jsx("span",{className:"w-12"})]}),Ue()&&e.jsx("div",{className:"rounded-xl border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent",children:"🥊 Cornerman modu açık. Taper: hacmi düşür, yoğunluğu koru. Gece geç çalışma yok — uyku tilt'i büyütür."}),e.jsx("p",{className:"text-sm text-neutral-500",children:"Sonucu bilmeden yaz. İyi karar kötü sonuç = doğru. Ertesi gün süreç puanlanır, sonuç değil."}),b>0&&e.jsxs("a",{href:"#/drill",className:"rounded-xl border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent",children:["Dün masadan ",b," el getirdin → Drill'de puanla"]}),e.jsxs("div",{className:"card space-y-2 p-4",children:[e.jsx("input",{value:i,onChange:y=>l(y.target.value),placeholder:"El / spot (ör. 42bb CO KQo, HJ açtı)",className:"w-full rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),e.jsx("input",{value:t,onChange:y=>s(y.target.value),placeholder:"Aksiyon (fold / 3-bet 9bb / check-call…)",className:"w-full rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),e.jsx("textarea",{value:o,onChange:y=>d(y.target.value),rows:2,placeholder:"Gerekçe (neden?)",className:"w-full resize-none rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),e.jsxs("div",{className:"flex items-center gap-2",children:[e.jsx("span",{className:"text-xs text-neutral-500",children:"Güven:"}),En.map(y=>e.jsx("button",{onClick:()=>m(y.v),className:"rounded-full px-2.5 py-1 text-xs "+(k===y.v?"bg-accent text-black font-semibold":"bg-surface-2 text-neutral-400"),children:y.label},y.v)),e.jsx("button",{onClick:p,className:"btn-accent ml-auto px-4 py-2 text-sm",children:"Kaydet"})]}),u&&e.jsx("div",{className:"text-xs "+(u.ok?"text-emerald-400":"text-red-400"),children:u.text})]}),n.length===0?e.jsx("p",{className:"text-center text-sm text-neutral-600",children:"Henüz kayıt yok."}):e.jsx("div",{className:"space-y-2",children:n.map((y,z)=>e.jsxs("div",{className:"card p-3 text-sm",children:[e.jsxs("div",{className:"flex items-center justify-between",children:[e.jsx("span",{className:"font-semibold text-neutral-100",children:y.el}),e.jsx("span",{className:"text-xs text-neutral-500",children:y.day})]}),e.jsxs("div",{className:"text-accent",children:[y.aksiyon," · %",Math.round(y.guven*100)]}),y.gerekce&&e.jsx("div",{className:"mt-1 text-neutral-400",children:y.gerekce})]},z))})]})}const Mn=c.lazy(()=>M(()=>import("./Quiz-CAIin5xD.js"),__vite__mapDeps([0,1,2])).then(a=>({default:a.Quiz}))),Ln=c.lazy(()=>M(()=>import("./Drill-CDxNzo7n.js"),__vite__mapDeps([3,1,4])).then(a=>({default:a.Drill}))),Dn=c.lazy(()=>M(()=>import("./Simulator-CQYEdaOc.js"),__vite__mapDeps([5,1,4])).then(a=>({default:a.Simulator}))),Jn=c.lazy(()=>M(()=>import("./Progress-CfIkYFqj.js"),__vite__mapDeps([6,1])).then(a=>({default:a.Progress}))),Qn=c.lazy(()=>M(()=>import("./QuickReference-DyJYP9GB.js"),__vite__mapDeps([7,1])).then(a=>({default:a.QuickReference}))),In=c.lazy(()=>M(()=>import("./Sentences-CTI8e9xs.js"),__vite__mapDeps([8,1])).then(a=>({default:a.Sentences}))),Fn=c.lazy(()=>M(()=>import("./RangeAtlas-Be4gelL3.js"),__vite__mapDeps([9,1,2])).then(a=>({default:a.RangeAtlas}))),Hn=c.lazy(()=>M(()=>import("./EquityIntuition-DFj8sqCz.js"),__vite__mapDeps([10,1])).then(a=>({default:a.EquityIntuition}))),qn=c.lazy(()=>M(()=>import("./BetTypes-DbbZWoWz.js"),__vite__mapDeps([11,1])).then(a=>({default:a.BetTypes}))),Yn=c.lazy(()=>M(()=>import("./QuestionBank-CLIF3yrO.js"),__vite__mapDeps([12,1])).then(a=>({default:a.QuestionBank}))),Vn=c.lazy(()=>M(()=>import("./IcmCard-zxVUs1s_.js"),__vite__mapDeps([13,1])).then(a=>({default:a.IcmCard})));function $n(){const[a,n]=c.useState(()=>window.location.hash);return c.useEffect(()=>{const r=()=>n(window.location.hash);return window.addEventListener("hashchange",r),()=>window.removeEventListener("hashchange",r)},[]),a}function v(a){window.location.hash=a}const _n=[{id:"ders",label:"Ders",icon:"📚"},{id:"quiz",label:"Quiz",icon:"🎯"},{id:"drill",label:"Drill",icon:"🃏"},{id:"ilerleme",label:"İlerleme",icon:"📊"},{id:"referans",label:"Referans",icon:"⚡"}];function Un(){return e.jsx("div",{className:"flex h-full items-center justify-center text-sm text-neutral-500",children:"Yükleniyor…"})}function Wn(){const n=$n().replace(/^#\/?/,"").split("/").filter(Boolean),i=new Set(["ders","quiz","drill","ilerleme","referans"]).has(n[0])?n[0]:"ders",l=n[1],t=c.useRef(null),[s,o]=c.useState(!1);return c.useEffect(()=>{var d;(d=t.current)==null||d.scrollTo(0,0)},[n[0],n[1]]),c.useEffect(()=>{const d=()=>o(!0);return window.addEventListener("ept:storage-fail",d,{once:!0}),()=>window.removeEventListener("ept:storage-fail",d)},[]),e.jsxs("div",{className:"mx-auto flex h-[100dvh] max-w-md flex-col bg-surface-0 pt-[env(safe-area-inset-top)]",children:[e.jsx(Nn,{}),s&&e.jsxs("div",{className:"flex items-center justify-between gap-3 bg-red-900/80 px-4 py-2 text-[13px] text-red-100",children:[e.jsx("span",{children:"Kayıt yapılamıyor — depolama dolu/kısıtlı"}),e.jsx("button",{"aria-label":"Kapat",className:"px-1 font-semibold",onClick:()=>o(!1),children:"✕"})]}),e.jsx("main",{ref:t,className:"flex-1 overflow-y-auto",children:e.jsxs(c.Suspense,{fallback:e.jsx(Un,{}),children:[i==="ders"&&(l==="otopsi"?e.jsx(On,{onBack:()=>v("#/ders")}):l?e.jsx(hn,{moduleId:l,onBack:()=>v("#/ders")}):e.jsx(Qa,{onOpen:d=>v("#/ders/"+d)})),i==="quiz"&&e.jsx(Mn,{}),i==="drill"&&e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"flex gap-2 px-4 pt-4",children:[e.jsx("button",{onClick:()=>v("#/drill"),className:"btn px-3 py-2 text-sm "+(n[1]!=="masa"?"bg-accent-soft text-accent border border-accent":"bg-surface-2 text-neutral-400 border border-surface-3"),children:"🃏 Soru drill"}),e.jsx("button",{onClick:()=>v("#/drill/masa"),className:"btn px-3 py-2 text-sm "+(n[1]==="masa"?"bg-accent-soft text-accent border border-accent":"bg-surface-2 text-neutral-400 border border-surface-3"),children:"🎲 Masa (el sim)"})]}),n[1]==="masa"?e.jsx(Dn,{}):e.jsx(Ln,{})]}),i==="ilerleme"&&(n[1]==="tekrar"?e.jsx(gn,{onDone:()=>v("#/ilerleme")}):n[1]==="gunluk"?e.jsx(Rn,{onDone:()=>v("#/ilerleme")}):e.jsx(Jn,{onReview:()=>v("#/ilerleme/tekrar"),onJournal:()=>v("#/ilerleme/gunluk")})),i==="referans"&&(n[1]==="cumleler"?e.jsx(In,{onDone:()=>v("#/referans")}):n[1]==="araliklar"?e.jsx(Fn,{onDone:()=>v("#/referans")}):n[1]==="equity"?e.jsx(Hn,{onDone:()=>v("#/referans")}):n[1]==="bahis"?e.jsx(qn,{onDone:()=>v("#/referans")}):n[1]==="sorubankasi"?e.jsx(Yn,{onDone:()=>v("#/referans")}):n[1]==="icmkart"?e.jsx(Vn,{onDone:()=>v("#/referans")}):n[1]==="bolum"&&n[2]?e.jsx(zn,{title:"Bölüm "+n[2],onDone:()=>v("#/referans/bolum")}):n[1]==="bolum"?e.jsxs("div",{className:"flex flex-col gap-3 p-4",children:[e.jsxs("div",{className:"flex items-center justify-between text-sm",children:[e.jsx("button",{onClick:()=>v("#/referans"),className:"text-neutral-400",children:"← Referans"}),e.jsx("span",{className:"font-semibold text-neutral-100",children:"📖 Yeni Bölümler (v5)"}),e.jsx("span",{className:"w-16"})]}),e.jsx("p",{className:"text-[13px] leading-relaxed text-neutral-400",children:"Turnuva-kazanma bölümleri — doğrudan kitaptan. Molada telefondan tabloya bak."}),xn.map(d=>e.jsxs("button",{onClick:()=>v("#/referans/bolum/"+d.n),className:"card flex items-center justify-between p-3 text-left",children:[e.jsxs("span",{className:"text-[14px] text-neutral-100",children:[e.jsxs("span",{className:"font-mono text-neutral-500",children:["B",d.n]})," · ",d.short]}),e.jsx("span",{className:"text-accent",children:"→"})]},d.n))]}):e.jsxs(e.Fragment,{children:[e.jsxs("div",{className:"grid grid-cols-2 gap-2 p-4 pb-0",children:[e.jsx("button",{onClick:()=>v("#/referans/araliklar"),className:"btn-accent py-2.5",children:"🗂️ Aralık Rehberi →"}),e.jsx("button",{onClick:()=>v("#/referans/cumleler"),className:"btn-ghost py-2.5",children:"🧠 15 Cümle ezber →"}),e.jsx("button",{onClick:()=>v("#/referans/equity"),className:"btn-ghost col-span-2 py-2.5",children:"📐 Equity Sezgisi (bonus · kitap dışı) →"}),e.jsx("button",{onClick:()=>v("#/referans/bahis"),className:"btn-ghost col-span-2 py-2.5",children:"🎯 Bahis Tipleri (value/bluff/thin/overbet) →"}),e.jsx("button",{onClick:()=>v("#/referans/sorubankasi"),className:"btn-ghost col-span-2 py-2.5",children:"📝 Soru Bankası (Bölüm 10 · 37 soru) →"}),e.jsx("button",{onClick:()=>v("#/referans/icmkart"),className:"btn-ghost col-span-2 py-2.5",children:"🧮 ICM Kartım (ladder + <15bb jam · Bölüm 12) →"}),e.jsx("button",{onClick:()=>v("#/referans/bolum"),className:"btn-accent col-span-2 py-2.5",children:"📖 Yeni Bölümler v5 (ICM · River · Multiway…) →"})]}),e.jsx(Qn,{})]}))]})}),e.jsx("nav",{"aria-label":"Ana sekmeler",className:"grid grid-cols-5 border-t border-surface-3 bg-surface-1 pb-[env(safe-area-inset-bottom)]",children:_n.map(d=>{const k=d.id===i;return e.jsxs("button",{"aria-current":k?"page":void 0,onClick:()=>v("#/"+d.id),className:"flex flex-col items-center gap-0.5 py-2.5 text-xs transition "+(k?"text-accent":"text-neutral-500"),children:[e.jsx("span",{className:"text-lg",children:d.icon}),d.label]},d.id)})})]})}class Gn extends Ye.Component{constructor(){super(...arguments);Y(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r){console.error("EPT ErrorBoundary:",r)}async resetData(){const r=Object.keys(localStorage).filter(l=>l.startsWith("ept:")),i=Object.fromEntries(r.map(l=>[l,localStorage.getItem(l)]));try{await navigator.clipboard.writeText(JSON.stringify(i,null,2))}catch{}r.forEach(l=>localStorage.removeItem(l)),location.reload()}render(){return this.state.hasError?e.jsxs("div",{className:"mx-auto flex h-[100dvh] max-w-md flex-col items-center justify-center gap-4 bg-surface-0 p-6 text-center",children:[e.jsx("p",{className:"text-lg font-semibold text-neutral-100",children:"Bir şeyler ters gitti."}),e.jsx("button",{className:"btn-accent",onClick:()=>location.reload(),children:"Yeniden yükle"}),e.jsx("button",{className:"btn-ghost text-sm",onClick:()=>this.resetData(),children:"Verileri sıfırla (önce JSON kopyala)"})]}):this.props.children}}ge.createRoot(document.getElementById("root")).render(e.jsx(Ye.StrictMode,{children:e.jsx(Gn,{children:e.jsx(Wn,{})})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/ept-trainer/sw.js").catch(()=>{})});export{ue as A,sr as B,H as C,Ra as D,ze as E,ir as F,De as G,cn as H,lr as I,tr as J,Na as K,Ue as L,Kr as M,te as N,en as O,an as P,ar as Q,na as R,Ba as S,nr as T,cr as U,nn as V,kr as W,hr as X,vr as Y,gr as Z,ur as _,Ge as a,fr as b,Ze as c,Te as d,Ha as e,pr as f,br as g,yr as h,rn as i,e as j,Br as k,w as l,zr as m,Ar as n,mr as o,ve as p,jr as q,rr as r,O as s,xr as t,Nr as u,Tr as v,Ta as w,I as x,dr as y,or as z};
