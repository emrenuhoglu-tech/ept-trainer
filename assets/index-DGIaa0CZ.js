const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/LessonList-CK0fmWjR.js","assets/modules-D97ODb-_.js","assets/vendor-nf7bT_Uh.js","assets/ColdOpen-DVbp_hCN.js","assets/scenarios-BBMh1vwf.js","assets/LessonPlayer-DKBODJnc.js","assets/speech-Bwk-CfD9.js","assets/DataTable-CPP2buZI.js","assets/RangeGrid-D0N9b-HU.js","assets/Quiz-Cp2g9oxl.js","assets/quizEngine-MqPmXEBB.js","assets/Drill-BD4PzR82.js","assets/kavramlar-iae67Qki.js","assets/DepthContrast-roS9cGjY.js","assets/Simulator-C9pgEJrM.js","assets/Progress-D7aNMpj8.js","assets/QuickReference-DrEu1Nzd.js","assets/Sentences-CS5daga6.js","assets/RangeAtlas-DBcDrU_F.js","assets/SqueezeCard-EwfVYbJT.js","assets/HandClasses-BRJqCS_B.js","assets/EquityIntuition-fPRyxwEm.js","assets/BetTypes-DPLqrx73.js","assets/QuestionBank-BZcY2vF2.js","assets/IcmCard-C-Fk5wB4.js"])))=>i.map(i=>d[i]);
var Ea=Object.defineProperty;var xa=(e,i,r)=>i in e?Ea(e,i,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[i]=r;var Z=(e,i,r)=>xa(e,typeof i!="symbol"?i+"":i,r);import{r as b,a as Ta,R as sa}from"./vendor-nf7bT_Uh.js";(function(){const i=document.createElement("link").relList;if(i&&i.supports&&i.supports("modulepreload"))return;for(const l of document.querySelectorAll('link[rel="modulepreload"]'))n(l);new MutationObserver(l=>{for(const t of l)if(t.type==="childList")for(const k of t.addedNodes)k.tagName==="LINK"&&k.rel==="modulepreload"&&n(k)}).observe(document,{childList:!0,subtree:!0});function r(l){const t={};return l.integrity&&(t.integrity=l.integrity),l.referrerPolicy&&(t.referrerPolicy=l.referrerPolicy),l.crossOrigin==="use-credentials"?t.credentials="include":l.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(l){if(l.ep)return;l.ep=!0;const t=r(l);fetch(l.href,t)}})();var oa={exports:{}},D={};/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Sa=b,Pa=Symbol.for("react.element"),Na=Symbol.for("react.fragment"),Oa=Object.prototype.hasOwnProperty,Ia=Sa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,Ra={key:!0,ref:!0,__self:!0,__source:!0};function ba(e,i,r){var n,l={},t=null,k=null;r!==void 0&&(t=""+r),i.key!==void 0&&(t=""+i.key),i.ref!==void 0&&(k=i.ref);for(n in i)Oa.call(i,n)&&!Ra.hasOwnProperty(n)&&(l[n]=i[n]);if(e&&e.defaultProps)for(n in i=e.defaultProps,i)l[n]===void 0&&(l[n]=i[n]);return{$$typeof:Pa,type:e,key:t,ref:k,props:l,_owner:Ia.current}}D.Fragment=Na;D.jsx=ba;D.jsxs=ba;oa.exports=D;var a=oa.exports,H={},$=Ta;H.createRoot=$.createRoot,H.hydrateRoot=$.hydrateRoot;const Ca="modulepreload",Ma=function(e){return"/ept-trainer/"+e},W={},z=function(i,r,n){let l=Promise.resolve();if(r&&r.length>0){document.getElementsByTagName("link");const k=document.querySelector("meta[property=csp-nonce]"),d=(k==null?void 0:k.nonce)||(k==null?void 0:k.getAttribute("nonce"));l=Promise.allSettled(r.map(s=>{if(s=Ma(s),s in W)return;W[s]=!0;const o=s.endsWith(".css"),u=o?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${u}`))return;const y=document.createElement("link");if(y.rel=o?"stylesheet":Ca,o||(y.as="script"),y.crossOrigin="",y.href=s,d&&y.setAttribute("nonce",d),document.head.appendChild(y),o)return new Promise((p,v)=>{y.addEventListener("load",p),y.addEventListener("error",()=>v(new Error(`Unable to preload CSS for ${s}`)))})}))}function t(k){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=k,window.dispatchEvent(d),!d.defaultPrevented)throw k}return l.then(k=>{for(const d of k||[])d.status==="rejected"&&t(d.reason);return i().catch(t)})},Ja=[{id:"S1-value-boyut",kavram:"boyut",soru_ozeti:"AK top pair kuru boardda river value boyutu",sonuc:"half",not:"Fold okuması doğru, yarım pot yerine 1/3 olmalıydı"},{id:"S2-ak-stack-call",kavram:"kök-hata",soru_ozeti:"3-bet potunda AK top pair, eşleşmiş riverda stack lead'ine call",sonuc:"wrong",not:"Pasiften agresife geçiş + eşleşmiş river = value"},{id:"S4-kjo-xr",kavram:"blof-secimi",soru_ozeti:"T94 boardda KJo gutshot ile check-raise",sonuc:"wrong",not:"Board sahipliği ≠ el sınıfı; gutshot bağlantı değil, showdown değeri blöfe çevrilmez"},{id:"S5-aa-fold-erken",kavram:"kök-hata",soru_ozeti:"T94 boardda AA'yı flop check-raise'ine fold",sonuc:"wrong",not:"Aşırı düzeltme; erken sokakta call, hikâye tamamlanınca fold"},{id:"S6-jt-60bb",kavram:"3bet-aralik",soru_ozeti:"60bb CO'da JTs vs LJ reg açılışı — cevaplanmadı",sonuc:"wrong",not:"Üç kez ertelendi; ilk seansta MUTLAKA sorulacak"}],De="60bb, LJ'den reg açtı, sen CO'da JTs. 3-bet mi, call mi, fold mu? Ve neden diğer ikisi değil?",M="ept:";let X=!1;function x(e,i){try{const r=localStorage.getItem(M+e);return r?JSON.parse(r):i}catch{return i}}function Qa(e){try{return localStorage.getItem(M+e)}catch{return null}}function E(e,i){try{localStorage.setItem(M+e,JSON.stringify(i))}catch(r){console.warn("ept: localStorage.setItem başarısız — kayıt yapılamadı",r),X||(X=!0,typeof window<"u"&&window.dispatchEvent(new CustomEvent("ept:storage-fail")))}}function Ve(){const e={};for(let i=0;i<localStorage.length;i++){const r=localStorage.key(i);if(r&&r.startsWith(M))try{e[r]=JSON.parse(localStorage.getItem(r))}catch{e[r]=localStorage.getItem(r)}}return JSON.stringify(e,null,2)}function Fe(e){try{const i=JSON.parse(e);let r=0;for(const[n,l]of Object.entries(i))n.startsWith(M)&&(localStorage.setItem(n,typeof l=="string"?l:JSON.stringify(l)),r++);return{ok:r>0,count:r}}catch{return{ok:!1,count:0}}}function h(e=0){const i=new Date;i.setDate(i.getDate()+e);const r=i.getFullYear(),n=String(i.getMonth()+1).padStart(2,"0"),l=String(i.getDate()).padStart(2,"0");return`${r}-${n}-${l}`}const ua=[{id:"shr",name:"Super High Roller",format:"NLH",buyin:"€100K",start:"2026-08-21",end:"2026-08-23",days:"21–23 Ağu"},{id:"main",name:"Main Event",format:"NLH",buyin:"€5.3K",start:"2026-08-22",end:"2026-08-29",days:"22–29 Ağu"},{id:"hr",name:"High Roller",format:"NLH",buyin:"€10.3K",start:"2026-08-27",end:"2026-08-29",days:"27–29 Ağu"},{id:"wsop",name:"WSOP Online ME Day 2",format:"NLH",buyin:"$5K",start:"2026-09-21",end:"2026-09-22",days:"21–22 Eyl"}];function ya(e){return ua.filter(r=>r.end>=e).sort((r,n)=>r.start.localeCompare(n.start))[0]??null}function ma(e,i){return Math.round((new Date(e+"T00:00:00").getTime()-new Date(i+"T00:00:00").getTime())/864e5)}const w="karne",wa="karne:corrupt-backup";function La(){var e;return((e=ya(h(0)))==null?void 0:e.start)??""}function R(e){const i=La();return!i||i<=h(0)?e:e>i?i:e}function Da(e,i,r){if(e==="wrong")return R(h(1));if(e==="half")return R(h(r==="tournament_life"?1:2));const n=[3,7,14,30],l=n[Math.min(Math.max(i,1)-1,n.length-1)];return R(h(l))}function Va(e,i){const r=new Set(i).size;return e>=3&&r>=3?"saglam":e>=2&&r>=2?"yetkin":e>=1?"asina":"gorundu"}function U(e,i){return{id:e,kavram:e,soru_ozeti:"",sonuc:"wrong",streak:0,reps:0,correctDays:[],tarih:h(0),due:h(0),mastery:"gorundu",...i}}function Fa(e){const i=String(e.kavram||e.id||"kök-hata"),r=e.correctDays;return{...U(i),...e,id:i,kavram:i,correctDays:Array.isArray(r)?r:[],reps:typeof e.reps=="number"?e.reps:0,streak:typeof e.streak=="number"?e.streak:0,due:R(String(e.due||h(0)))}}function aa(e){const i=new Map;for(const r of e){const n=String(r.kavram||"kök-hata"),l=i.get(n)||U(n);l.reps+=1,l.soru_ozeti=String(r.soru_ozeti||l.soru_ozeti),l.sonuc=r.sonuc||l.sonuc,l.not=r.not||l.not,l.tarih=String(r.tarih||l.tarih),l.due=R(String(r.due||l.due)),i.set(n,l)}return[...i.values()]}function S(){const e=Qa(w);if(e!==null){let r;try{r=JSON.parse(e)}catch{r=void 0}if(Array.isArray(r)&&r.length){const n=r,l=typeof n[0].reps=="number"?n.map(Fa):aa(n);return E(w,l),l}e.trim()&&!(Array.isArray(r)&&r.length===0)&&E(wa,e)}const i=aa(Ja);return E(w,i),i}function ca(e,i,r){const n=S();let l=n.find(t=>t.kavram===e);if(l||(l=U(e),n.push(l)),l.reps+=1,l.soru_ozeti=i.soru_ozeti,l.sonuc=i.sonuc,l.not=i.not??l.not,l.severity=i.severity??l.severity,l.confidence=r!=null&&r.resetConfidence?void 0:i.confidence??l.confidence,l.streak=i.sonuc==="correct"?l.streak+1:0,i.sonuc==="correct"){const t=h(0);l.correctDays.includes(t)||l.correctDays.push(t)}l.tarih=h(0),l.due=Da(i.sonuc,l.streak,l.severity),l.mastery=Va(l.streak,l.correctDays),E(w,n),Ya()}function pa(e){ca(e.kavram,e)}function Ha(e,i){const r=S().find(n=>n.id===e||n.kavram===e);r&&ca(r.kavram,{soru_ozeti:r.soru_ozeti,sonuc:i,not:r.not,severity:r.severity},{resetConfidence:!0})}const L={tournament_life:0,major:1,minor:2};function fa(){const e=h(0);return S().filter(i=>i.due<=e).sort((i,r)=>L[i.severity??"minor"]-L[r.severity??"minor"]||i.due.localeCompare(r.due))}function qa(){return S().filter(e=>e.sonuc==="wrong"&&(e.confidence??0)>=.8).sort((e,i)=>L[e.severity??"minor"]-L[i.severity??"minor"])}function He(){const e=S().filter(r=>(r.confidence??0)>=.8&&r.reps>0);if(!e.length)return null;const i=e.filter(r=>r.sonuc==="correct").length;return{high:e.length,hit:i}}function qe(){const e={gorundu:0,asina:0,yetkin:0,saglam:0};for(const i of S())e[i.mastery]++;return e}const q="karne:trend";function Ya(){const e=h(0),i=S(),r=i.filter(k=>k.due<=e).length,n=i.filter(k=>k.mastery==="saglam").length,l=x(q,[]),t=l.findIndex(k=>k.day===e);t>=0?l[t]={day:e,due:r,saglam:n}:l.push({day:e,due:r,saglam:n}),E(q,l.slice(-30))}function Ye(){return x(q,[])}function Ue(){const e=x("journal",[]);if(!e.length)return"";const i=[...new Set(e.map(n=>n.day))].sort().slice(-2),r=e.filter(n=>i.includes(n.day)).slice(0,6);return r.length?`

Masadan getirdiği son eller (ertesi-gün tohumu — bu spotları yeni bir kılıkta tekrar sor):
`+r.map(n=>{const l=typeof n.guven=="number"?` [%${Math.round(n.guven*100)} güven]`:"";return`- [${n.day}] ${n.el} → ${n.aksiyon}${n.gerekce?" ("+n.gerekce+")":""}${l}`}).join(`
`):""}function Ge(){const e=fa(),i=(e.length?e:S()).slice(0,10);return i.length?i.map(r=>{const n=r.severity==="tournament_life"?" ⚠tournament_life":"",l=(r.confidence??0)>=.8&&r.sonuc==="wrong"?" (emin-ama-yanlış)":"";return`- [${r.sonuc}${n}${l}] ${r.kavram}: ${r.soru_ozeti}${r.not?" — "+r.not:""} (due ${r.due})`}).join(`
`):"(karne boş)"}const G="progress";function V(){return x(G,{days:[],quizTotal:0,quizCorrect:0})}function F(){const e=V(),i=h(0);e.days.includes(i)||e.days.push(i),E(G,e)}function _e(e){const i=V();i.quizTotal+=1,e&&(i.quizCorrect+=1);const r=h(0);i.days.includes(r)||i.days.push(r),E(G,i)}function Ua(){const e=new Set(V().days);let i=0,r=!0;for(let n=0;n<120;n++)if(e.has(h(-n)))i++;else if(n>0&&r)r=!1;else break;return i}function Ze(){var i;const e=h(0);return ma(((i=ya(e))==null?void 0:i.start)??"2026-08-16",e)}function Ga(){const e=h(0);return ua.some(i=>ma(i.start,e)<=6&&e<=i.end)}function $e(){const e=V();return{streak:Ua(),practicedToday:e.days.includes(h(0)),quizTotal:e.quizTotal,quizCorrect:e.quizCorrect,totalDays:e.days.length}}function _a({onDone:e}){const i=b.useMemo(()=>fa(),[]),[r,n]=b.useState(0),[l,t]=b.useState(!1),[k,d]=b.useState(0);if(i.length===0)return a.jsxs("div",{className:"flex flex-col items-center gap-4 p-8 text-center",children:[a.jsx("div",{className:"text-4xl",children:"👍"}),a.jsx("p",{className:"text-neutral-300",children:"Bugün tekrar zamanı gelen konu yok."}),a.jsx("button",{onClick:e,className:"btn-accent px-4 py-2",children:"İlerlemeye dön"})]});if(r>=i.length)return a.jsxs("div",{className:"flex flex-col items-center gap-4 p-8 text-center",children:[a.jsx("div",{className:"text-4xl",children:"🎉"}),a.jsxs("p",{className:"text-neutral-200",children:["Bugünlük tekrar bitti — ",k," konu."]}),a.jsx("button",{onClick:e,className:"btn-accent px-4 py-2",children:"İlerlemeye dön"})]});const s=i[r];function o(u){Ha(s.id,u),F(),d(y=>y+1),t(!1),n(y=>y+1)}return a.jsxs("div",{className:"flex flex-col gap-4 p-4",children:[a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("button",{onClick:e,className:"text-neutral-400",children:"← İlerleme"}),a.jsxs("span",{className:"text-neutral-500",children:[r+1," / ",i.length]})]}),a.jsx("div",{className:"h-1 overflow-hidden rounded bg-surface-2",children:a.jsx("div",{className:"h-full bg-accent transition-all",style:{width:`${r/i.length*100}%`}})}),a.jsxs("div",{className:"card min-h-[180px] p-5",children:[a.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:s.kavram}),a.jsx("p",{className:"mt-2 text-lg leading-relaxed text-neutral-100",children:s.soru_ozeti}),l&&a.jsxs("div",{className:"mt-4 border-t border-surface-3 pt-3",children:[a.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:"Not / doğru"}),a.jsxs("p",{className:"mt-1 text-sm text-neutral-300",children:[s.not||"—",a.jsxs("span",{className:"ml-2 text-neutral-500",children:["(son sonuç: ",s.sonuc,")"]})]})]})]}),l?a.jsxs("div",{className:"grid grid-cols-3 gap-2",children:[a.jsx("button",{onClick:()=>o("wrong"),className:"btn-ghost py-3 text-red-300",children:"✗ Bilemedim"}),a.jsx("button",{onClick:()=>o("half"),className:"btn-ghost py-3 text-accent",children:"◐ Yarım"}),a.jsx("button",{onClick:()=>o("correct"),className:"btn-ghost py-3 text-emerald-300",children:"✓ Bildim"})]}):a.jsx("button",{onClick:()=>t(!0),className:"btn-accent py-3 text-base",children:"Göster"})]})}const ha=`# POKER CEP KİTABI v5

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
- Bölüm 17 — ÖZEL MODÜL: WSOP Online Main Event Day 2 **YENİ ★**
- Bölüm 18 — Flop C-bet: frekans, board dokusu, boyut **YENİ ★**
- Bölüm 19 — İnisiyatif Hatları: donk / probe / stab / float **YENİ ★**
- Bölüm 20 — Risk Premium: ICM'in sayısı **YENİ ★**
- Bölüm 21 — ICM Altında Postflop: her agresif hattı bir kademe indir **YENİ ★**
- Bölüm 22 — ICM Ne Zaman ve Kime: zaman çizelgesi + laddering **YENİ ★**
- Bölüm 23 — Saha Okuma: rakip tipleri ve exploit **YENİ ★**
- Bölüm 24 — Edge Premium: ne zaman gamble ETME (ve ne zaman mecbursun) **YENİ ★**
- Bölüm 25 — Kafamdaki Hikaye: kanıt mı anlatı mı **YENİ ★**
- Bölüm 26 — C-bet'e Karşı: caller disiplini ve eşik çalışması **YENİ ★**
- Bölüm 27 — Solver'ı Çalışmak: drill'i ve otopsiyi solvere bağla **YENİ ★**
- Bölüm 28 — PKO / Bounty: ödülü çipe çevir, aralığı koru **YENİ ★**
- Bölüm 29 — Deep Stack ve Yüksek-SPR: kök hatanın en pahalı bandı **YENİ ★**
- Bölüm 30 — Micro Stack 4-12bb: jam/fold inceltmeleri + eşitsiz-masa **YENİ ★**
- Bölüm 31 — BB-Ante Heads-Up ve HU-vs-GTO **YENİ ★**
- Bölüm 32 — 3-bet Pot Postflop: boyu board değil, el sınıfı ve ıskalayan blok seçer **YENİ ★**
- Bölüm 33 — Blind-vs-Blind: limp, raise ve jam'in derinlik katmanları + asimetrik stack **YENİ ★**

---

## Bölüm 0 — Masaya Götürülecek 14 Cümle

*Bunları ezberle. Masada düşünecek vakit olmadığında karar bu on dört cümleden çıkar. İlk 10 çekirdek; 11–14 v5'te turnuva-icrasından işlendi.*

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


10. **25–30bb'de değer fold equity'den gelir, kart tamamlamaktan değil.**
    Aradığın el gelişebilen değil, şimdiden iyi olan: as, broadway, çift. Bölüm 5.

11. **Turn'de attığın boyut, river'da vereceğin kararın fiyatıdır.**
    İkinci fıçı, river'da check-fold lüksünü satın alır. Bölüm 11.

12. **ICM'de marjinal call = kök hatanın turnuva-hayatı sürümüdür.**
    Risk premium, bluff-catcher'ın ödeme eşiğini yükseltir. Bölüm 12.

13. **Multiway'de tek per, HU'dakinden bir sınıf aşağıdır.**
    Her ek oyuncu birinin nut olma ihtimalini katlar. Bölüm 13.

14. **Tilt'te alınan karar aralıktan değil, yaradan çıkar — önce yara etiketlenir.**
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

### 1.6 Algılanan blöf ≠ gerçek blöf — blöfü rakibin "bloklıyorum" listesinin DIŞINDAN seç

1.1 blokeri rakibin en güçlü ellerine karşı seçer. River jam'inde ikinci bir liste devreye girer: rakibin SENİN blöf sınıfın sandığı eller. K-Q-T-3-x hattında üç sokak bet + river jam: OOP'nin dengede call etmesi gereken zayıf Q9/T7 tipi eller "bu adam AT/AQ ile blöfler" diye T/Q'yu bloker sayar ve fold'a eğilir (blöfü bloklıyorum → aralığı value-ağır → fold); A5s/A4s tipi gerçek blöfü ise hiçbir catcher bloklamadığı için bu fold'lar blöfünü öder.

İki liste tut: (a) rakibin blöf sandığı sınıf; (b) gerçekten blöflediklerin. (b)'yi (a)'nın dışından kur — onun "bloklıyorum" fold'u blöfünü, "bloklayamıyorum" call'ı value'nu öder; AT/AQ'yu blöfe daha az çevir. 32.6'nın kart-eşleme kuralının aynası: orada rakibin premium bluff-catcher'ının kartını TAŞIRSIN, burada onun bloker sandığı kartı TAŞIMAZSIN. Havuza karşı çoğunlukla; heuristiği sayan reg'e karşı sınırda *(fold oranı: kalibre et)*.

> **Gerçek blöf aralığın, rakibin bluff-catch heuristiğinin dışında durur.**

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

### 4.0-EK 3-bet potunda "tek per bluff-catcher" sınırı
"OOP 3-bet potunda tek per tanım gereği bluff-catcher'dır" cümlesi preflop aralık-inşa kuralıdır (OOP 3-bet aralığını sıkı tutar). Postflop'ta bluff-catcher sınırı pozisyonu değil ROLÜ izler: capped/call eden taraf için SPR ≳2'de geçerlidir (SPR ≲1.5'te onun top pair'i de çoğunlukla call-off sınıfına iner — potu başlatmaz ama jam'e katlamaz; bkz. 11.0-EK-2) — 3-bettor OOP iken (blind vs geç pozisyon, en sık durum) call eden IP'dir ve sınır ona uygulanır. Aralık + nut avantajıyla potu şişiren 3-bettor'ın overpair/TPTK'sı ise sığ SPR'de (30-45bb, SPR ≲2; orta-bağlantılı, nut avantajının sende olduğu dokular) çoğunlukla jam sınıfıdır *(kalibre et)*; underpair bu sınıfa girmez. SPR ~3-4 ve üstünde (100bb'de ≳4-5) flop-jam sınıfı çoğunlukla yoktur; kuru/düşük dokularda (8-6-2 / K-7-2 tipi) overpair çoğunlukla hâlâ stack-off elidir *(kalibre et)*, bağlantılı iki-broadway dokularda nut avantajı erir → overpair/TPTK bet + yeniden değerlendirme / pot-kontrol sınıfıdır *(stack-off eşiği: kalibre et)*. Kök hata bozulmaz ve şişirenindir: lisans SPR'ye ve dokuya bağlıdır; derinde, nut avantajının eridiği dokuda tek perle dokudan bağımsız stack-off eden 3-bettor kök hatayı yapar (bkz. B32.1, B32.3).

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

### 4.2-EK 100bb ante'li blind düğümü: SB 3-bet orta boy + yüksek equity, BB büyük — ve SB flat'in gerçek yeri

4.2'nin "OOP 4×" satırı iki blind'e tek boy verir; 100bb ante'li MTT'de ikisi ayrışır *(çarpanlar: kalibre et)*:

- **SB 3-bet'i orta boy.** Arkasında BB var ve BB'nin SB 3-bet'ine cevabı pratikte 4-bet-ya-fold — iki aralıkla yüzleşen SB büyük boya gitmez; orta boy BB'nin orta çiftlerini/zayıf suited broadway'lerini zaten ucuza katlatır. Malzeme: aralığın tepesi + T9s tipi yüksek-equity suited bağlantılar + orta çift mix *(tam liste: kalibre et)*. Aralığın dibi — J7s tipi düşük-kicker suited — 3-bet DEĞİL, düşük equity'yle para zorlanmaz; ATo/KJo tipi offsuit broadway ise flat değil 3-bet-fold mix'ine gider *(kalibre et)*.
- **BB 3-bet'i büyük.** Tek aralığa (BTN) karşı AK/AQ/KK–TT tam boyu kullanır; 5–6× arası EV yakın — havuz boydan görece bağımsız (inelastik) aşırı katlanıyorsa blöfü küçük boyla ucuza, value'yu büyük boyla almak çoğunlukla doğru; boy-tell'dir, fiyat okuyan reg'e karşı sömürülebilir *(kalibre et)*.
- **SB flat.** 4.3'ün "SB flat neredeyse yok" satırı disiplin olarak durur; ante'li 100bb'de teorik SB flat vardır ama flat = yukarıdaki DİP eller, 3-bet = yüksek equity. "Call aralığımın dibi → dengeli olsun diye 3-bet" ezberi ters yönde leak *(sınırda — kendi sim'inde koştur)*. 40bb'de SB flat aralığı vardır; postflop icrası 26.5-EK-3.

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

### 4.6-EK Squeeze'in iki yüzü: blöf malzemesi rakibin FOLD bloğunu unblock eder; üçüncü oyuncuyken tuzak eli düğüme göre

**Malzeme.** 4.6'nın A5s/KQs/AJs listesi coldcaller IP ve dar olduğunda doğrudur. SB call'ı üstüne BB squeeze'inde (100bb) hedef SB'nin capped aralığıdır — offsuit broadway + suited orta — ve sık katlanır; boy yine de tek-rakip 3-bet'inden BÜYÜK: potta ölü para var, katlatılacak iki rakip var, caller başına boyut eklenir — küçük squeeze SB'ye tam da aradığı ucuz call'ı verir. Blöf, SB'nin squeeze'e en sık FOLD eden kombolarını (open'a flat ettiği ATo/KTo/QTo/JTo) UNBLOCK eden 67s/97s/86s/75s tipi broadway'siz suited'lardan + biraz offsuit Ax'ten. T8s/J9s o bloğu bizzat bloklar (dördü de T'li; J9s JTo'yu keser), KQs/AJs de bloklar. Test: "kimin bloğunu unblock ediyorum?" Havuz bu squeeze'i az bulur, SB'den fazla sıkı oynar *(kalibre et)*.

**Üçüncü oyuncu.** "Raise + call var, JTs ile over-call" tuzaktır: cold-caller'ın KQs–QTs'i ve açıcının JJ+/AJ'si seni domine eder. Önce sor: cold-caller'ın aralığında TEPE var mı? Dengede CO, LJ açılışına AK/QQ/JJ/TT'nin bir kısmını flat eder — tuzak eli en güçlü değil, agresyonun en az ödüllendirdiği premium'dur (JJ 3-bet'lenince aralık aleyhine iyileşir; AA'ya KQ/AQ devam eder). Havuz CO'da tuzağı yapmaz: premium'u %100 3-bet'ler, call aralığı 22–99 + suited broadway'e iner → tepe YOK → orta suited bağlantılıyla over-call değil JAM (14.1-EK-3). Ters düğüm: BTN 100bb'de BB squeeze'ine AA flat, JJ/QQ 4-bet — SB'nin ucuz üçüncü-oyuncu call'ını reddeder *(frekanslar: kalibre et)*.

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

### 4.9 Marjinal suited/offsuit gruplar (Kx/Qx/Jx): aç ya da fold, flat yalnız BB

Düşük suited grup — K3s–K6s, Q3s–Q6s, J3s–J6s — turnuva NLH'de tek pratik kural taşır: **açılır ya da fold; flat yalnız BB'den.** Pozisyonda bir raise'e karşı bu elleri flat'lemek en kötü kullanımlarıdır. *(Yaklaşık baseline: ante'li 8-max, 30–60bb, ağır ICM yok — ICM ve büyük sizing sınırı daha da sıkar; bunlar solver kanunu değil, güvenli çalışma sınırı.)*

| Spot | Suited (düşük Kx/Qx/Jx) | Offsuit (aynı) |
|---|---|---|
| BTN first-in | Mix/açılır: K2s+, Q4s+, J5s+ (Q2s/Q3s, J3s/J4s sınırda) | K6o açılır, K5o sınırda; K3o-K4o ve Qxo/Jxo çoğu fold |
| CO first-in | K5s/K6s, Q6s (Q7s/Q8s daha güvenli sınır), J7s+ açılır; gerisi fold | Tamamı fold |
| HJ ve öncesi | K6s sınırda, gerisi fold | Fold |
| SB first-in | Hepsi limp/raise (fold yok); dip Qxs/Jxs ICM'de fold | K3o-K6o limp/raise; Q5o/Q6o, J5o/J6o mix; dip fold/mix |
| BTN/CO raise'ine karşı | **Flat YOK:** K5s/K6s bir kısmı 3-bet bluff (K blocker), gerisi fold | Neredeyse pure fold — suited kadar iyi 3-bet bluff değiller |
| BB vs BTN/CO 2x | Büyük kısmı savunulur (call) | K3o-K6o çoğu call (vs BTN); Qxo/Jxo daralır (opener/sizing/ICM) |
| BB vs erken/UTG-HJ | Sizing büyüdükçe Q3s/Q4s, J3s/J4s fold olabilir | Tamamı default fold |

**Neden offsuit çok daha sert:** suited versiyon flush + güçlü draw üretir, equity realization yüksek, K-blocker + oynanabilirlik onu makul 3-bet bluff yapar. Offsuit bunların hiçbirini taşımaz; en sık ürettiği el domine edilmeye açık zayıf top pair'dir. **Kısa stack:** 20bb altı BTN/SB'den jam adayı (suited daha derin yaşar) — ama 15bb BTN'de düşük Kxs'leri OTOMATİK jam yapma (çoğunlukla minraise/fold + bazı jam); Q3s/J3s 10bb'de bile otomatik jam değil.

**Postflop — kök hatanın adresi:** bu eller flush-draw ve bluff elleridir, top pair elleri değil. K6s ile K-high flopta tek pair 100bb potuna GİTMEZ — otomatik stack-off değil, ama her zaman bluff'a da çevrilmez (küçük pot, pot-control, bluff-catch). Suited olmayan versiyon doğal bluff adayı bile değildir.

### 4.10 Ax ayrımı: suited erken açılır, offsuit AJo+/ATo+

Temel fark: **erken pozisyonda düşük suited Ax açılabilir; düşük offsuit Ax çoğunlukla fold.** A2s erken pozisyonda A8o'dan çoğu zaman daha değerlidir — nut flush, wheel ve 3-bet/4-bet bluff imkânı taşır; offsuit bunları taşımaz.

| Pozisyon (first-in) | Suited Ax | Offsuit Ax |
|---|---|---|
| UTG | A2s-A5s open/mix, A6s-A8s mix, A9s+ open | AJo+ open, ATo mix; A9o ve altı fold |
| UTG+1/LJ | A2s+ açılır | ATo+ açılır, A9o sınırda |
| HJ | A2s+ açılır | A9o+ açılır, A8o mix |
| CO | A2s+ açılır | A8o+ açılır (A7o mix, altı rakibe bağlı) |
| BTN | Bütün suited Ax | Neredeyse bütün Ax (A2o-A5o bazı çözümde mix) |
| SB | Tamamı limp/raise | Tamamına yakını; en zayıflar ICM'de fold |

**Raise karşısında:** düşük suited Ax (özellikle A2s-A5s) en iyi 3-bet bluff adaylarıdır — ace blocker + nut-flush + wheel; BTN'de bazen flat de. Düşük OFFSUIT Ax raise karşısında BB dışında çoğunlukla fold — flat edilmez. AQo 3-bet/call mix, AK value 3-bet. **Kısa stack:** 10-15bb'de güçlü offsuit Ax'in ham equity + blocker değeri artar, solver bir kısmını jam'ler — ama "UTG'den her Ax jam" yanlış.

**Postflop:** A-high flopta düşük kicker'lı Ax çoğunlukla küçük bet/check ve pot-control elidir; zayıf Ax ile otomatik üç sokak veya 100bb stack-off yok. Day 1A'deki **A5o, AT2-J boardda %75 flop + %75 turn** tam kaçınılması gereken örnekti (B7 Vaka 9): top pair var ama kicker zayıf, iki büyük bahisle pot gereksiz şişti.

**Kısa kural:** CO: A2s+ / A8o+. BTN/SB: bütün Ax. Raise karşısında düşük suited Ax call/3-bet mix, düşük offsuit Ax BB dışında fold. Top pair düşük kicker ile potu kontrollü büyüt.

### 4.11 Suited broadway'ler (KQs/KJs/QJs) ve PLO-6 KQJ notu

**Açılış:** KQs, KJs, QJs üçü de HER pozisyondan açılır (8-max UTG dahil; QJs UTG'de sınırda ama solver hâlâ açar). Pozisyon açıp-açmamayı değil, açtıktan sonra 3-bet'e cevabı belirler.

**Raise karşısında — pozisyon her şey:**
- **BTN/CO'da erken açışa karşı:** KQs/KJs 3-bet–flat mix, QJs çoğunlukla flat. 100bb'de KQs'i 3-bet'e ağırlık ver (AK/AQ'ya domine olsa da fold-equity + pozisyon karşılar). KJs/QJs pozisyonda flat için en iyi eller: pot kontrolü, implied odds, board coverage.
- **Blind'lardan:** BB'de üçü de savunulur (KQs 3-bet/call, KJs/QJs call). SB'de flat YOK — KQs 3-bet, KJs sınır, QJs erken açışa fold / BTN açışına 3-bet.
- **OOP erken açışa karşı (MP/HJ, UTG açtı):** KQs 3-bet-ya-fold (flat en zayıf), KJs/QJs genelde fold. Bu, WSOP AQs bust'ının (B7 Vaka 8) alt versiyonu: OOP flat "bir flop göreyim" elidir, o flop nadiren kolaydır.

**3-bet'e cevap (sen açtın):** pozisyondaysan üçüyle de call (100bb). OOP'de KQs call, KJs/QJs boyuta göre call/fold; 4-bet hiçbiriyle yok — 4-bet bluff rolü A-blocker'lı ellerde (A5s/A4s). **Turnuva ayarı (<40bb):** flat kaybolur, KQs 3-bet/jam'e döner, KJs/QJs pozisyonda call, OOP fold.

**PLO-6 notu:** tek başına KQJ'nin suit'i olması bir şey ifade etmez; kalan üç kartın ne yaptığı belirler. KQJ + iki ds + bağlı kart CO/BTN açılış, 3-bet'e call; **KQJ + dangler'lar CO'dan bile fold** — CO'da −$13.5K'yı yapan tam bu "yarısı güzel" ellerdir (B15.5 L1/L2).

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

### 5.1-EK SB satırı BvB'de şartlıdır: zayıf Ax/Kx ve küçük çift fold değil, limp malzemesi

5.1'in SB satırı (22+, A2s+, A7o+, K9s+, KTo+, QTs+) raise-or-fold okunur; BvB düğümünde tablonun altında kalan en zayıf offsuit Ax (tekerlek kicker'lı) ve alt-orta offsuit Kx fold değil, **limp** malzemesidir *(kalibre et)*. Bandın 25–30bb'si B33.1'in sığ katmanının üst ucudur: alt ucunda (~25bb) blocker limp-jam'i yaşar; üst ucunda limp-jam potun çok katı overbet olur, malzeme limp-call'a döner — limp-jam kabaca ≤25bb'ye aittir *(kalibre et)*. Limp-3-bet bu bantta da commit'tir: ya jam ya fold edilmeyecek boy (arkada kalan ≈ pot) *(kalibre et)* — fold edilebilir küçük limp-3-bet yok, 5.2'nin "3-bet = JAM" doktrini limp düğümünde de geçerli. Limp-call ise 5.2'nin "flat yok" kuralının BvB-limp düğümüne özgü istisnasıdır (aksiyonu kapatan son karar + küçük iso'ya fiyat); açılışa karşı flat yasağı aynen geçerli. Küçük çiftler satırda raise görünür ama bu derinlikte BvB'de kısmen limp'e kayar *(kalibre et)*. Premium çoğunlukla raise'de kalır; limp aralığını korumak için düşük frekansta tuzak limp sınırda *(kalibre et)*. Satırı "raise aralığı" olarak oku, "SB'nin tüm oyunu" olarak değil; limp'in içeriği için bkz. B33.1 sığ katman ve B33.2.

### 5.1-EK-2 ICM katmanı: cover eden agresif BB'ye karşı limp dilimi KAPANIR; kısa BB'ye açılış boyu min-raise değil 2.2–2.5x
5.1-EK'in limp malzemesi chipEV BvB içindir. İki ICM düzeltmesi; B3/B5 tabloları değişmez.

- **Limp kapanır.** Solunda seni cover eden agresif BB varken ve ICM açıkken SB'nin limp'i aralık genişletme aracı değil, büyük stack'e iso + capped-aralık cezası açan kapıdır → raise-only, tight; zayıf Ax/Kx ve küçük çift limp'e değil, kısa efektifte (≈≤15bb) open-jam dilimine, daha derinde fold'a gider — ağaç 12.2-EK-4'te. Kısa BB varsa limp ikinci kez yasak: kısa, capped limp'e geniş jam basar, sen katlarsın — üstüne bedava flop da vermiş olursun. Limp yalnız BB zayıf ve pasifse yaşar *(kalibre et)*.
- **Kısa BB'ye boy.** BB ≤5bb ise min-raise fold equity'sizdir — fiyatla her eliyle öder (30.6'nın öbür yüzü); 2.2–2.5x BB aralığının bir dilimini katlatmaya başlar, SB'yi de sıkar. Pozisyona göre kademeli (BTN en büyük), aralık bir tık DAR — geniş aralık + büyük boy değil; 3x sınırda *(kalibre et)*. B3'ün açılış-boyu satırlarına tek not: kısa-BB istisnası 12.2-EK-5.

### 5.2 3-bet = JAM

Bu bantta 3-bet commit demektir. "3-bet edip fold" diye bir yapı yok — doğrudan all-in gidiyorsun.

| Kime karşı | Jam aralığı |
|---|---|
| **Erken pozisyon açılışı** | TT+, AQs+, AKo |
| **CO / BTN açılışı** | 88+, ATs+, AQo+, KQs |
| **Chip leader / jam'e fold eden** | 77+, A9s+, AJo+, KQs (genişletilmiş) |

**Bu bantta FLAT YOK.** Ne SB'den, ne BB'den, ne IP'den. Bölüm 4'ün geniş flat tabloları 100bb+ dünyasına aittir.

### 5.2-EK Rakip jam'lemediyse: SB'nin BÜYÜK non-all-in 3-bet'ine BTN'den 4-bet jam

~30bb efektifte SB'nin doğru 3-bet'i çoğunlukla ALL-IN'dir (5.2); büyük boylu non-all-in 3-bet dengede seyrek olmalı. Havuz tersini yapar: jam'lemesi gereken elleri büyük 3-bet'ler. O aralık polar ve çoğunlukla **tepesizdir** — value tarafı AK/orta-yüksek çift, blöf tarafı offsuit broadway/suited Kx; AA-KK çoğunlukla ya jam'lenmiş ya küçük boy gitmiştir *(sınırda — bazıları AA'yı da büyük 3-bet'ler, gözle)*. Boy büyüdükçe ölü para artar ama SB de bağlanır — kalan stack/pot düşer, fold equity küçük 3-bet'e göre AZALIR ama sıfırlanmaz; kâr, blöf yarısının fold'u + ölü para + ödendiğinde AA/KK'sız (tepesiz) aralığa karşı canlı equity'nin toplamından gelir — tepesizlik iddiası şartlı, gözlemle *(sınırda — kalibre et)*. Aralıkta AA/KK/QQ azsa elindeki K ve Q canlı overcard'dır; suited Kx/Qx beklenenden iyi jam'ler.

**Kural:** 30bb bandında SB'den büyük non-all-in 3-bet gördüğünde BTN'den 4-bet jam aralığını geniş kur — suited Ax/Kx, çiftler, broadway'ler *(sınır: kalibre et)*. SB'nin 3-bet'i küçük boy ya da jam'se 5.3'e dön. Havuz exploitidir: SB'nin büyük non-all-in 3-bet'inde AA/KK'yı tam frekansla gördüğün an genişlemeyi geri al.

### 5.2-EK-2 BB KISAYSA SB'ye 3-bet-FOLD lisansı doğar — eşit stack'lerde olmayan dilim
5.2'nin "3-bet = JAM"ı eşit stack'ler içindir: SB'nin non-all-in 3-bet'i BTN'den de BB'den de jam yer, fold edilemez. BB KISAYSA hesap değişir: BB'nin jam'ine SB fiyatla neredeyse her eliyle öder (efektif küçük); tek gerçek tehdit BTN'nin 4-bet jam'idir — BB, BTN'den önce davrandığı için 4-bet düğümünde çoğunlukla çoktan katlanmıştır. Sonuç: eşit stack'te jam'lenen düşük-EV eller (A7o/K9o/QJo tipi *(kalibre et)*) 3-bet-FOLD dilimine geçer; value 3-bet (QQ+/AK) blöf dilimi onu dengelediği için daha çok kazanır. Lisansın sınırı da BTN'dir: 3-bet-fold dilimini koklayan BTN'nin 4-bet jam'i fold-equity kazanıp GENİŞLER — BTN yeterince jam'lemedikçe lisans geçerli, uyum sağlayana karşı blöf dilimini kıs *(kalibre et)*. Yan etki: SB'nin marjinal flat'leri (küçük suited bağlantı, orta offsuit broadway) düşer — flat'i kısa BB jam'le cezalandırır; yüksek kartlı flat'ler kalır. BTN tarafı: bu 3-bet'e overcall yok, ya jam ya fold — 3-bet'te blöf çok olduğundan jam aralığını "3-bet = value" diye daraltma. CO açışında aynı mekanizma: SB 3-bet + jam karışımı, flat daha da az. 22.11'in kaçış kapısıyla akraba — fold opsiyonu satın alan raise; kısa BB o opsiyonun fiyatını düşürür *(sınır: kalibre et)*.

### 5.2-EK-3 "FLAT YOK"un iki dipnotu: 3-handed ICM'de SB call dilimi (sınırda) — ve 5.2-EK'in havuz koşulu
Kural durur; iki dipnot.

1. **3-handed + ~30bb SB + aşırı geniş açan BTN (ICM):** BTN seni cover ediyor, lider BB arkada — yine de ICM sim'i SB'ye suited broadway / küçük çift / bazı suited Ax ile CALL verir: açıcı bu kadar genişken jam'in riske attığı stack ölü paraya göre büyüktür (12.1-EK), call ise sığ SPR'de flop görür. *Sınırda — kalibre et.* 22.8-EK'e DOKUNMAZ: o, aksiyonu kapatan BB'nin lidere karşı kuralıdır; burada koltuk SB ve arkada bir oyuncu var. 8-max'ta ve normal açıcıya karşı FLAT YOK aynen.
2. **5.2-EK'in genişletilmiş 4-bet jam'i havuza bağlıdır.** "SB'nin büyük non-all-in 3-bet'ine BTN'den çiftler dahil geniş jam" havuz 3-bet'inin tepesiz olmasına dayanır. 3-bet aralığı dengeli/polar ve premium tam frekanstaysa (HU'da, iyi reg'de) orta çiftin jam'i düşer: çoğunlukla 66–88 slow, 22–44 ve 99–JJ jam, QQ+ slow *(kalibre et)* — bkz. B31.7-EK. Aynı el, iki koşul, iki cevap; showdown'da AA/KK'yı büyük 3-bet'te görmeye başladığın an 5.2-EK'i kapat.

### 5.3 Jam'e karşı call

Rakip all-in geldiyse: 99+, AJs+, AQo+. Bundan aşağısı 28bb'de call değil — ya jam'i sen yapacaksın ya fold edeceksin.

### 5.3-EK Sıkı rejam'e call'u OFFSUIT value kombo sayısı fiyatlar — ATs/KQs fold

5.3'ün çizgisi (99+/AJs+/AQo+) durur; gerekçesi kombo sayımıdır. Havuzun ~30bb rejam'i teoriden sıkıdır (tipik olarak orta çiftler + güçlü offsuit broadway + A-bloker suited'lar ≈ %7 *(kalibre et)*). "Aralığında KTs/QJs/A5s var, ATs iyi durur" hesabı yanlış sayar: suited blöfler 4'er kombo, ATs'i domine eden offsuit AJ/AQ/AK 12'şer kombo + çiftler. Seni yalnız offsuit'lerin domine ettiği el (ATs/KQs tipi) sıkı jam'e fold'dur — jam'ci suited malzemeyi genişletse bile; KQs'in kaybı 88'in kazancının iki katı *(kalibre et)*. Açıcı/flatter çizgisi bir kademe geniş — 88+/AJs/AQo civarı *(kalibre et)*; AJo fold, 88 sınırda.

Döngü: havuz sıkı jam'ledikçe çağıranlar sıkılaşır; sıkılaşan çağırana karşı jam'e blöf eklemek kârlıdır (14.1-EK-2). AA/KK'yı non-all-in 3-bet'leyen rakibin jam'i tepesizdir → call açılır (5.2-EK'in aynası).

> **Jam'e call ederken suited blöfleri değil offsuit value kombolarını say.**

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

### 6.2-EK Gutshot satırı iki polar düğümde ASKIDA — draw'ın işi tamamlamak değil, bloklamak

6.2'nin "gutshot → check" kuralı genel turn-draw kararı içindir: fold equity belirsiz, draw tek başına yakıt değil. İki düğümde askıya alınır; ilkinde gutshot'un işi rakibin devam sınıfını bloklamak (TPGK/overpair), ikincisinde zayıf per/overcard/zayıf draw'ları katlatarak fold equity taşımak — ikisinde de kentini tamamlamak değil:

- **Efektif-nut overbet (11.1-EK):** overcard'lı gutshot rakibin top-pair-iyi-kicker ve overpair kombolarını bloklar (iki-per'i BLOKLAMAZ — onun için board rank'i tutman gerekir), per'lerini ve zayıf draw'larını katlatır — polar overbet aralığının doğal blöfü.
- **x/r sonrası akışkan turn (26.6):** semi-blöf jam adayı — zayıf per/overcard/zayıf draw'ları katlatıp equity reddeder; seni domine eden draw'ı ancak SPR yeterince yüksekken katlatır *(sınırda)*.

Şart: düğüm gerçekten polar ve rakibin fold'a giden katmanı geniş olmalı *(kalibre et)*. Station'a karşı ve orta boylu bet düğümünde 6.2 aynen durur: gutshot check.

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

### Vaka 8 — AQs 4-bet/call → 5-bet jam'e call → bust (WSOP Online ME Day 1B)

**Ne oldu:** 68bb, UTG+1 AQs açış → HJ call → 287bb chip leader 3-bet → Hero 4-bet 24.3K → leader 5-bet all-in → Hero call 56.7K. Villain KK, board 8-3-8-T-6, eleniş. Pot oranı 2.2:1, gereken equity %31; 5-bet jam aralığına (QQ+/AK) karşı AQs ~%30, KK'ya karşı %18 — sınırda bile değil.

**Doğru oyun:** Tercih sırası: (1) 3-bet'e fold — UTG+1, OOP, 68bb, 287bb'lik rakip; (2) 3-bet'e call, flopta pot kontrolü; (3) 4-bet edildiyse 5-bet'e fold, 24K'yı kabul et. Call hiçbir sıralamada yok. 68bb'de AQs OOP = 4-bet/**fold** elidir, 4-bet/call değil. 4-bet ile stack'in %30'u masaya konur; jam gelince "pot oranı var" hissi call'a iter.

**Kural:** AQ bir high-card elidir; 3-bet potunda güçlü görünür, 5-bet potunda tek pair'e bile ulaşmamıştır — Vaka 1 (A4s river) ve Vaka 3 (AA river jam) ile aynı sınıflandırma hatası: potun büyüklüğü elin sınıfını değiştirmez. 287bb'lik chip leader'ın 5-bet jam'i, 30bb'lik oyuncunun jam'inden farklıdır (aralığı dar: KK+, belki AK; kaybedecek şeyi yok) — ona karşı 4-bet zaten gereksizdi. 4-bet yalnız fold edebileceğin miktarla yapılır.

| Stack | AQs/AJs/KQs vs 3-bet (OOP) | vs 4-bet | vs 5-bet jam |
|---|---|---|---|
| 25–40bb | 3-bet'e jam veya fold | — | — |
| 40–60bb | call veya fold; 4-bet = jam (AK/QQ+) | fold | — |
| 60–80bb | call veya fold; 4-bet/fold mümkün | fold | **fold (bu el)** |
| 80bb+ | call; 4-bet/fold | fold | fold |

Bu el sınıfı hiçbir stack derinliğinde 5-bet jam'e call etmez.

### Vaka 9 — Seans-düzeyi bulgular: WSOP ME 1A + 1B (387 + 84 el)

**Ne oldu:** Day 1A 60K→784K (+724K, karar notu B+); Day 1B 60K→116K zirve→eleniş (karar notu B−). İki büyük jam call (KQs, AQs) toplam kaliteyi düşürdü; rutin kararlar temizdi. Day 1A all-in koşusu ~+50K EV, Day 1B ~−59K — varyans yönü sert döndü, ama esas mesele varyans değil, birkaç yapısal eğilim.

**Tekrar eden leak'ler (iki seans ortak):**
- **River ince value eksiği** — pozisyonda check edildiğinde value bet frekansı çok düşük. Düzeltme: check-back öncesi "hangi daha kötü el call eder?" sorusu; uygun spotlarda %25–40 pot ince value.
- **Multiway c-bet fazlalığı** — otomatik multiway c-bet + düşük-equity elle büyük sizing. Düzeltme: multiway otomatik c-bet'i azalt, büyük sizing'i polar value + güçlü draw'a ayır.
- **Flop raise sizing** — flopta bahisle karşılaşınca çok sık ve çok büyük raise (dört-altı kat). Düzeltme: top pair/set dahil standart raise'lerde üç-dört kat bandı; daha büyüğü özel exploit'e sakla.
- **30–70bb jam disiplini** — suited broadway'i (KQs/AQs) etiketiyle otomatik stack-off. Düzeltme: her call'da önce pot odds, sonra rakip range'i.

**Kural:** Sonuca bakıp yanlış etiketleme — 88'in shove'a call'ı 66'ya kaybetmesi tam doğru cooler; AK ile river'da 82'ye kaybedilen call standart (top pair/top kicker fold edilemez). Leak ile cooler'ı ayır: leak tekrar eden yapısal eğilimdir, cooler tek elin varyansı (B25 kanıt vs hikaye).

---

## Bölüm 9 — Antrenman Protokolü

> **Komut: "beni hazırla" / "drill" / "soru sor"**
> Sokratik Q&A başlar: 5–8 karar sorusu, tek tek, cevabın gelmeden sonraki soru sorulmaz.

### 9.1 Soru karışımı

| Ağırlık | Konu |
|---|---|
| **%50** | Kök hata — tek per / şişmiş pot sınıflandırması |
| **%35** | Stack modu ve aralık seçimi (Bölüm 3, 4, 5) |
| **%15** | Blöf seçimi ve draw kararları |

### 9.2 Kurallar

- Yanlış cevaplanan sorular 1–2 gün sonra farklı kılıkta tekrar sorulur.
- Masadan getirdiğin eller vaka olarak işlenir ve Bölüm 7'ye eklenir.
- Bu bölümlerin aday cümleleri B0'a c.12–15 olarak işlendi; masadan gelen yeni kalıcı kurallar B0'a eklenir, başlık güncellenir.
- Cevap doğruysa gerekçe de sorulur — doğru karar yanlış gerekçeyle yarım puandır.
- Kamp Ağustos başında açılır; EPT 16 Ağustos'ta başlıyor.

---

### 9.3 Drill'in iki modu ve A-oyun günlüğü

**Preflop hacim, postflop merak-kesmesi.** Preflop drill'i hacimle dön — telefon, düşük enerji, soru sorma. Postflop'ta kural ters: her yanlış VE her şaşırtan doğru drill'i DURDURUR — sınıf görünümünü aç, aksiyonun döndüğü eşiği bul, üç-parça formatında yaz (27.4), sonra devam et. "Kombom doğru oynamış, geçtim" drill'in kök hatasıdır — hiçbir şey öğrenmedin.

**A-oyun günlüğü.** Seri boyunca her seansın sonunda iki satır: nasıl oynadım (not artı bir sayı), o gün ne yaptım (uyku, seans öncesi kafa yükü, saat). Amaç sağlık takibi değil, A-oyununun girdilerini yakalamak — birkaç günde tekrarlayan iki-üç değişken kalır *(kalibre et: sende farklı çıkabilir)*. Bulduğun yasayı seri planına (B16.4) yaz ve ihlal etme.

### 9.3-EK Aralık geri-çağırma ritüeli — önce "oynuyor muyum", en son frekans
Preflop drill'inin ve her postflop seansının açılışı iki dakikalık kör geri-çağırmadır: pozisyonu söyle, gözünü kapa, aralığı grid sırasıyla oku — offsuit Ax → Kx → Qx → Tx → çiftler → suited — ve her el için İLK soru "bu eli oynuyor muyum?" olsun, "% kaç 3-bet?" değil. İkinci katman: "bu elin 3-bet primi var mı, hangi kriterden?" Frekans hassasiyeti en son katmandır; katman sırası bozulursa yüzde ezberi karar sınıfı ezberinin yerine geçer ve masada geri çağrılamaz. Aynı ritüel rakip tarafına da uygulanır: "açan CO — hangi elleri oynuyor?" sorusuna cevap veremiyorsan o spotu drill'lemeye hazır değilsin, önce chart'a dön.

**Kural:** Drill'de sıralama sabittir: oynuyor muyum → primi ne → frekans; ilk ikisini bilen üçüncüyü bilmeden de az hata yapar, üçüncüyü ezberleyip ilk ikisini bilmeyen masada çöker.

### 9.3-EK-2 Offsuit-taban çıpası — her pozisyonu tek satırla hatırla, blöfü bir-iki pip altından seç
Bir açılış aralığını komple ezberlemenin kısa yolu, aralığın en alttaki offsuit serisini çıpa yapmaktır: kabaca LJ offsuit Tx'te, HJ offsuit 9x'te, CO offsuit 8x'te biter; BTN'de taban pratikte kalkar — neredeyse bütün offsuit Ax açılır (dip A2o-A5o mix) *(taban satırları: kalibre et; bkz. 4.10)*. Bu tek satır postflop'ta rakibin hava/blöf bloğunun nereden geldiğini de söyler — K-2-6 gibi kuru yüksek-kart board'da CO taban satırındaki offsuit 8x'i yüksek frekansla c-bet eder *(frekans: kalibre et)*; senin 8x'in o bloğu kesiyorsa check-raise adayın bir kademe aşağı kayar. Üçüncü kullanım preflop blöf seçimi: 3-bet/squeeze blöf adayların çoğunlukla o tabanın bir-iki pip ALTINDAKİ kicker'lardan gelir (HJ tabanı 9x ise A8s/A7s tipi), çünkü test şudur: "call'da beni domine edecek eli fold'luyor muyum?" — evet ise blöf kazançlıdır, çöp değil.

**Kural:** Pozisyon başına bir offsuit-taban satırı ezberle; rakibin havasını, kendi check-raise kademeni ve 3-bet blöf adaylarını hep o satırdan türet.

### 9.3-EK-3 Drill skoru termometre değil — yön ve boy sınıfı hatasında dur, RNG farkında durma
9.3 postflop'ta her sürprizde durdur der; bunun aynası da leak'tir — solver'ın karışık (mix) düğümünde "yanlış" tarafı seçtin diye duran, skoru 95'e çıkarmaya çalışan çalışma ormanı ağaca satar. Postflop pack'te 80'li skorlar sağlıklı başlangıçtır *(kalibre et)*; kovalanan rakam değil resimdir: bu boardda range'im kabaca ne sıklıkla, hangi boy sınıfıyla bet ediyor, check'inde ne taşıyor. Durduran şey yön hatası (bet/check, call/raise) ve boy SINIFI hatası olsun; mix'in yüzde farkı değil. Turn/river'ı iyi oynatan da frekans ezberi değil, flop resminin hafızasıdır — "bu flopta range'imin yarısıyla bet etmiştim" bilgisi sonraki sokakta iki aralığı da sana söyler.

**Kural:** Drill'de yön ve boy sınıfı hatasında dur; mix/RNG farkında durma — biriktirdiğin skor değil, "range'im bu boardda ne yapıyor" resmidir.

### 9.4 Rapor okuma protokolü — uçlardan başla, hipotezle diff'le, null testi yap
Solver raporunda binlerce board'u sırayla gezmek çalışma değil, gezintidir. Protokol: (1) Önce TAHMİN — preflop aralıklara bak, "hangi board sınıfı kimin?" diye yaz, raporu sonra aç. (2) Uçlardan başla: "hiç check etmediğim" ve "en çok check ettiğim" boardlar — leak neredeyse hep uçlardadır, orta frekanslı boardlar zaten hissettiğin gibi oynanır. (3) İki derinliği ya da pozisyonu karşılaştırırken tüm boardları tarama: hipotez kur ("30bb'de A-high değişmiş olmalı"), filtreyle yalnız o sınıfa bak, ve bir de değişmemesi gereken sınıfı doğrula (null test) — iki rakam yan yana, fark tek bakışta. (4) Çıktı tahminini tutmadıysa çerçeveyi çöpe atma; "hangi tek faktör boyu/frekansı kaydırdı?" sorusuyla o değişkeni bul.

**Kural:** Rapora tahminsiz girme, uçlar dışında oyalanma; fark ararken hipotez + karşı-test, tam tarama değil.

### 9.4-EK ICM raporunda equity realizasyonu %100'e toplanmak zorunda değil (3+ handed)
cEV agregat raporunda iki oyuncunun equity realizasyonu matematiksel olarak birbirini tamamlar — biri %100'ün altındaysa öbürü üstündedir, sıfır toplamlı bir oyundur. ICM postflop raporunda bu, masada elin dışında en az bir oyuncu varken (3+ handed) kırılır: board'ların çoğunda HER İKİ taraf da %100'ün altında equity realize eder, kendine çok iyi giden bazı board'larda ise TEK taraf %100'ün üstüne çıkabilir — çünkü fark masadaki elin dışındaki oyunculara sızar, iki taraf arasında paylaşılmaz. Raporu bu beklentiyle oku: "ikisi de düşük çıktı, bir hata mı var?" diye şüphelenme — bu ICM postflop'un normal imzasıdır, sıfır-toplamlı cEV sezgisini oraya taşıma. HU final table'da (yalnız 2 oyuncu kaldığında) sızacak üçüncü taraf yoktur — orada ICM de $EV'de doğrusal-tümleyendir, cEV'deki gibi ikisi birden %100'ün altına düşmesi şüphelenilmesi gereken bir işarettir.

**Kural:** ICM postflop agregat raporunda equity realizasyonu toplamının %100 etmemesi — masada elin dışında en az bir oyuncu varken — hata değildir; HU'da bu kural geri döner, sıfır-toplamlı okuma geçerlidir.

### 9.4-EK-2 Sapmayı masaya taşımadan önce ağaçtan buda
Bir ICM postflop düğümünde büyük boy/shove'u bırakıp daha küçük, düşük varyanslı bir çizgiye geçmeyi düşünüyorsan, bunu "hissediyorum" ile masaya taşımadan önce raporda test et: o büyük boyu ağaçtan komple çıkar, geri kalan stratejinin EV'sini el sınıfı bazında (gridde) eskisiyle karşılaştır. Beklentini önceden yaz: aralığının ALT kısmı (zayıf eller) küçük bir EV kazanır, TEPESİ (overpair, top-pair gibi kırılgan-güçlü eller) daha büyüğünü kaybeder ve net range EV'si düşer — hangi sınıfın ne kadar kaybettiğini kendi ağacında ölç, sonucu kalibre et. Sapma gerçekten tek bir el sınıfını (örn. belirli bir marjinal value eli) hedefliyorsa zarar küçük kalabilir; "genel olarak daha küçük oynayayım" gibi kapsayıcı bir politika değişikliği ise gridde çoğunlukla tepe ellerinin cebinden çıkar *(kalibre et)*.

**Kural:** Bir boy/çizgi değişikliğini masaya taşımadan önce o seçeneği ağaçtan çıkarıp tahminini yaz — alt aralık az kazanır, tepe daha çok kaybeder — sonra hangi el sınıfının ne kadar kazanıp kaybettiğini kendi gridinde doğrula (9.4'ün tahmin + karşı-test omurgası).

### 9.5 Aralık karşılaştırmasında kütle önceliği — offsuit bloklar + çiftler; oran ve saturasyon
İki aralığı karşılaştırırken göz suited merdivene kayar; kütle orada değildir. Offsuit kombolar 12'şer, çiftler 6'şar gelir — iki aralığın farkını neredeyse her zaman offsuit bloklar ve çiftler yazar; suited farklar çoğunlukla 1-4 komboluktur, postflop iğneyi oynatmaz. İki düzeltme daha: (a) mutlak kombo değil ORAN düşün — "%6'ya karşı %2.5" küçük görünür ama 2.5 kat demektir; (b) saturasyon — dar aralık her ortak eli daha büyük payla taşır: iki oyuncu da 66'yı hiç atmıyorsa, yarı genişlikte oynayan onu kabaca iki kat sık tutar. Board'un kime çalıştığını bu üçlü söyler: kimin offsuit bloğu bağlandı, oran kaç, kimde daha yoğun.

**Kural:** Aralık farkını suited köşede arama — kütle offsuit bloklarda ve çiftlerdedir; farkı oranla ve saturasyonla oku.

### 9.6 Durum-duyarlı ICM spotları için kendi kısayol-formülünü molada inşa et
Bazı ICM durumları — özellikle bubble'a yakın, sahanın küçük bir yüzde değişikliğinin cevabı sert kaydırdığı spotlar — sim-sim gezinerek örüntü çıkarmaya dayanıklı değildir: iki-üç benzer sim yan yana konduğunda çıktı o kadar sıçrar ki "örüntü" göze görünmez, tek bir spotun cevabını öğrenmiş olursun ama komşu spota taşıyamazsın. Bu tip durumlarda molada farklı bir şey yap: gerçek yapı sayfasından (ödeme merdiveninin TAMAMI — her ödenen yerin tutarı, yalnız toplam ödül değil — + toplam chip) kendi DUMMY yığın dağılımını kur — toplamı gerçek chip sayısına eşitle, birkaç büyük + bir grup ortalama + birkaç kısa yığın koy — bunu bir ICM hesaplayıcıdan bir kez geçir ve çıkan $EV sayılarından masada elle uygulanabilir bir kısayol formülü türet (bkz. 20.6-EK-4). Toplam ödül + ödenen yer sayısı tek başına yeterli girdi değildir: ICM baskısını asıl sürükleyen merdivenin YASSILIĞIDIR — aynı toplam ve aynı yer sayısı çok farklı basamak şekilleri verebilir, düz/lineer merdiven primi yükseltir, tepe-ağırlıklı merdiven düşürür (bkz. 20.3-EK-3). Bu, tek bir spotun cevabını ezberlemekten farklıdır: masada tekrar tekrar kullanılabilir bir ARAÇ üretir, tek kullanımlık bir CEVAP değil.

**Kural:** Örüntü-eşleme çöktüğü (küçük durum değişikliği cevabı sert kaydırdığı) ICM spotlarında tek tek sim gezme — kendi dummy-yığın tablonu ödeme merdiveninin TAMAMIYLA kur, bir kez hesaplattır, oradan elle kullanılabilir bir formül çıkar ve onu masada tekrar kullan.

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

### 11.0-EK-2 SPR 1-4 satırı capped taraf içindir; 3-bettor'ın top pair'i derinlikle sokak sayar
B11.0 tablosunun "SPR 1-4: tek per bluff-catcher, büyük pot BAŞLATMA" satırı potu şişirilen, capped taraf için SPR ≳2'de geçerlidir; SPR ≲1.5'te (30-60bb baseline'ında 3-bet potları çoğunlukla SPR ~1.5-3 bandına iner; ≲1.5 yalnız ~30-40bb ve OOP 3-bet boyunda — *kalibre et*) capped tarafın top pair'i de çoğunlukla call-off sınıfına iner — eşik iki taraf için düşer; capped taraf yine potu BAŞLATMAZ ama jam'e karşı katlamaz *(kalibre et)*. Aralık + nut avantajlı 3-bettor için SPR ≲2'de orta-bağlantılı board'da top pair/overpair çoğunlukla jam sınıfıdır (bkz. B32.1); 100bb'de (SPR ≳4-5 OOP 3-bet boyunda — satırın üst sınırında; IP 3-bet potunda ~5'i aşar ve satırın dışına çıkabilir — *kalibre et*) A-high 3-bet potunda top pair çoğunlukla "iki sokak + river kontrol" elidir (en iyi kicker + capped rakipte üç sokak sınırdadır) — üç sokak, stack'i tek perle içeri sokmaktır ve B11.4 kataloğu üç sokak boyunca uygulanır (bkz. B32.2). Bluff-catcher tanımı şişirenin top pair'ine B11.4 kartının düştüğü sokakta (turn dahil) ya da raise yediği anda geri döner; river'da ise plan gereği zaten kontrol/bluff-catch modundadır.

### 11.0-EK-3 SPR≈1 satırının TURN hâli: value ile JAM değil, yarı-stack bet

11.0 tablosu SPR<1'de "commit" der — doğru, ama boyu söylemez. Turn'de SPR 1 civarında overpair/güçlü top-pair ile "zaten committed'im" diye jam'lemek hatadır; özellikle tek başına overcard açıldı ya da bir draw açıldı diye "korkutucu kart, hemen koy" refleksi. Commit, paranın eninde sonunda gireceğini söyler; HANGİ sokakta, HANGİ boyla girdiği rakibin devam aralığını değiştirir. Flop bet'ine call eden aralık alt per, zayıf orta per (bet küçükse gutshot ve overcard-high da) ile doludur; jam'e bu eller snap katlanır — tam senin ezdiğin sınıf. Potun yarısı–üçte-ikisi *(kalibre et)* o sınıfı kayıtsızlığa iter: bir kısmı öder (value'n), bir kısmı katlanır (blöflerin için fold equity). Koruma kaybı sınırda: yarı-pot draw'a jam'den daha iyi direkt oran verir; implied odds'u ise geride yalnız yarı-stack kaldığı için zaten küçük — river'da o kalanı ona ödersin ama toplam sınırlı; flush draw çoğunlukla kayıtsız kalır — stack'in yarısı turn'de girince river'da her kartta jam'sin, geometri seni zaten bağladı. Overcard turn'ü de bozmaz: o aralık o kartı çoğunlukla taşımaz.

Korkutucu turn'de de varsayılan yarı-stack (koruma + ince value). Jam yalnız tek gerekçeyle: rakibin devam aralığı draw-AĞIRLIKLI ve yarı-pot o aralığa direkt oran verecek — tipik olarak turn aralığa BİRDEN FAZLA canlı draw eklediğinde (flush + çift kent), OOP + SPR≤1'de daha sık; turn flush'ı TAMAMLIYORSA 11.1 tablosu: check / boy düşür, jam değil. Azınlık *(sınırda — kalibre et)*. Blöf tarafı: rakibin devam aralığına karşı en çok equity taşıyan overcard+draw kombolar — SPR 1'de sık ödenirsin, bloker değil equity seç; turn kartını tutan el zaten top-pair'dir, value hattında.

**Kapsam:** B21.5'in "sığ SPR'de ara boyut chip bağlar → jam ya fold" kuralı ICM + savunma/float bağlamı içindir; bu madde chipEV'de value-agresörün turn'üdür. Farklı koltuk, çelişki yok.

### 11.0-EK-4 SPR merdiveninin üst basamağı: turn SPR 1.5–2'de value 2/3 — rakip kalanı SENİN yerine koyar

11.0-EK-3 SPR≈1'i verdi: fold equity yok, yarı-stack, blöfü equity seçer. Bir basamak üstte (turn SPR ~1.5–2; ≈30bb, büyük c-bet call'landı, tek flush draw açıldı) varsayılan **2/3** — yarısı değil, jam de değil *(bant sınırı: kalibre et)*:

- **Jam'in gerekçesi sahtedir.** "Onun top pair'ini stack'lemek" — 2/3'ten sonra kalan min-raise'den az; top pair call da etse jam de etse kalan küçük olduğundan para çoğunlukla nehirde girer.
- **Jam'in kaybettirdiği katman:** 2/3'e call edip jam'e katlanan alt cep / tekerlek Ax / turn'de gutshot alan broadway — tam ezdiğin sınıf. Backdoor'suz overcard'ları (KTo/ATo) küçük boy zaten siler.
- **Sınıf içi kayma:** en iyi kicker'lı top pair büyük; zayıf kicker'lı küçük; yüksek flush kartını taşıyan overpair küçüğe çeker — domine ettiği draw'ı (QJ♦ tipi) içeride tutmak ister; o kartı taşımayan overpair draw'ı ücretlendirmek için büyüğe/jam'e kayar *(kalibre et)*.
- **Blöf:** fold equity var → rakibin CALL sınıfının (flush draw) kartını taşıyan overcard; bloklamadığın ıskalamış Kx/Qx katlanır. 11.0-EK-3'te equity seçerdi, bu basamakta bloker — merdiven budur.

Kırılma: SPR ≲1 ya da turn İKİNCİ draw'ı açınca jam ağırlığı belirir *(sınırda)* — 26.6'nın "akışkan nut → jam"ıyla aynı mekanizma, farklı koltuk.

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

### 11.1-EK Turn overbet — PFR IP, flop c-bet call yedikten sonra: EFEKTİF nut ve blöf seçimi

18.2-EK "nut avantajı + capped → overbet" dedi; bu madde turn-kart mekaniğini verir. Overbet'in kaldıracı gerçek nut değil efektif nut'tur — rakibin aralığında seni yenen elin yapısal olarak bulunmadığı el. BB, preflop'ta 3-bet'lediği ve flop'ta check-raise'lediği kombolardan büyük ölçüde arınmış gelir (bir kısım set/iki-per slow-play'de, bir kısım büyük çift flat'te kalır — efektif nut mutlak değil, aralık-göreli); senin AK/AQ'n, overpair'in, üst per'in o boşluğu dolduran turn'de "yenilmez" oynar. Tek kural: **overbet kartı, rakipte 3-bet'e/x-r'a gitmiş sınıfı tamamlayan, kalan (capped) sınıfına ise bir şey eklemeyen karttır.** Örn.: yüksek+düşük kopuk flop'a kent tamamlamayan ikinci yüksek kart (K-8-x'e A: AA/AK sende — BB'ninki çoğunlukla 3-bet'e gitti; BB'de Ax yalnız top-pair, kent yok); düşük flop'a rakibin ıskaladığı yüksek kart (o kartla flop'ta katlandı, sen c-bet attın); orta-yüksek flop'a düşük blank (rakibin o kartla iki-per'i yok, overpair'i çoğunlukla 3-bet'te) *(derin, tek-raise'li pot, IP PFR; kalibre et)*. Aynı kuralın negatifi kapatan karttır — rakibin capped OLMAYAN sınıfını tamamlayan kart: iki yüksek kartlı flop'a üçüncü Broadway — K-Q-x'e A/J/T dahil (BB'nin flat'lediği JT/QT/AT/KJ tipi kombolar kent ya da iki-per olur; A bile JT'nin Broadway'ini tamamlar; yalnız 3-bet-aralığı kombosuyla nut kent yapılan hâl sınırdadır), A-x-x'e düşük kent-tamamlayıcı, flush-tamamlayıcı, eşleşmiş flop'ta eşleşmemiş düşük kartın eşleşmesi (9-9-4'e 4: check-call'daki 4x full olur; K-7-7'ye K ise PFR'ın AK/KQ'sünü büyük full yapar — kapatan değil). Kapatan kartta frekansı VE boyu düşür — çok check; bahis kalırsa aralık MERGED olur: nut + hâlâ önde olan set/iki-per/güçlü top-pair değeri + rakibin tamamlanan sınıfını bloklayan az blöfle küçük/orta boy *(kalibre et)* — boy küçüldükçe polar değil merged (18.2-EK'in overbet-polar / küçük-merged ekseni); 11.3-EK'in turn hâli. Frekans yalnız aralık avantajının sürdüğü brick'te korunur.

**Blöfü nut değil BOŞLUK seçer.** Overbet polar: orta-kuvvet el (turned ikinci per, zayıf top-pair) ne katlatır ne öndedir — küçük boya ya da check'e. Blöf adayı rakibin katlayacağı elleri bloklamasın, tuttuğu güçlü sınıfı bloklasın, call yiyince temiz out'u olsun — en iyi sınıf **turned alt-per** ve overcard'lı gutshot (6.2-EK). Tek büyük boy yeter *(kalibre et)*; makas equity'den değil fold ettirilen equity'den açılır.

### 11.1-EK-3 C-bet call yedikten sonra turn: dört ters-sezgili kural — mono dördüncü renk, büyük flop → küçük turn, A turn'üne barrel, turned-pair blöfü
B18'in flop boyları turn'de 11.1 tablosunun dışına düşen dört kural doğurur *(hepsi kalibre et)*:

1. **Mono flop + dördüncü renk (IP vs BB):** aralık polarlaşır — nut flush büyük boy; karşısına per BLOKLAMAYAN hava (rakibin katlanacak 8-x/5-x/Q-x'ini tutmayan) aynı boyla blöf; per tutan el (K-8 tipi) blöf değil, onun fold'unu bloklar. Havuz bu turn'ü ağır under-bluff eder. OOP PFR vs BTN'de tersi: dördüncü renk → aralık check; brick → ikinci per/orta cep dahil ince KÜÇÜK value — havuz polarlaşıp ince value'yu atlar (18.2-EK-9).
2. **A-high'da büyük flop bet call yedi → turn KÜÇÜK:** hedef kalan alt/orta per'ler; "büyük attım, büyük devam" refleksi yanlış (18.2-EK-8).
3. **Kuru-orta board'a büyük c-bet call yedi, turn A → çoğunlukla BARREL:** büyük flop bet zayıf Ax'i caller'dan süpürdü — A agresörün kartıdır, aralık avantajı sende; Ax value dahil barrel'a devam, küçük-orta boy yeter (9x/TT öder). Check'e giden Ax değil, A altında ikinci-per'e düşen overpair/9x'tir; Ax'le check-call yalnız düşük-frekans karışım *(kalibre et)*.
4. **Yüksek board'a düşük turn — blöf sırası turned-pair > yüksek gutshot > alt cep:** turn kartını tutan çöp rakibin yeni iki-per'ini bloklar; alt cep onun ilk katlanan bloğunu (zayıf per+gutshot) bloklar — havuz alt cebi aşırı blöfler. River value dar (iki-per+/düz) → tek boy all-in; board'da K yokken (Q-T yüksek runout tipi) blöf K-x'ten: premium catcher'ı (K-Q) bloklar, T-x fold'unu bloklamaz (B1'e "turned pair blöfü" satırı; catcher yüzü 26.4-EK).

### 11.1-EK-2 "Ödeyen sınıf kendisi bet eder mi?" — nut'la check'in iki düğümü (reg'e karşı)

Bet'in ödeyeni check'ime zaten bet edecekse, bet etmek yalnız onun blöflerinin parasını kaybettirir. Test tek soru; iki düğüm:

- **Nut'un ortaklaştığı turn (IP).** K-J-T'de KQ küçük bet call yedi, turn A: Broadway var ama AQ'yla chop; rakibin ikinci-en-iyi sınıfı (AK/AJ/set) river'da kendisi büyük bet ister, T9/J8'ini blöfe çevirir. AK'ya karşı ne yaparsan yap tek sokak alacaksın — o sokak river'da onun boyuyla ve iki kaynaklı gelir → KQ/AQ, iki-per'ler turn'de çoğunlukla CHECK *(kalibre et)*.
- **Küçük turn lead sonrası aralığına en kötü river (OOP).** K-7-3 küçük c-bet call, turn 5 küçük lead call, river A: Ax onda (seninki flop'ta raise'e gitti). Kent (6-4) dahil aralık CHECK: Ax check'ine bet eder → raise; ıskalayan Q9/QT-suited büyük blöfler → yalnız check'te toplanır; jam'lesen yalnız Ax öder — o zaten bet edecekti.

**Sınır (23.11):** rakip river'da bet etmiyorsa (pasif havuz/station) iki düğüm kapanır — gecikmiş value çöker, parayı turn'de al. Cevabı rakip tipi verir, board değil.

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

### 11.2-EK-2 Bloker mekaniğinin saldırı yüzü
B11.2-EK'in ikinci düğümü (rakibin blöfleri senin call aralığını bloklar) savunma tarafını anlatır. Aynı mekanik saldırıda "kart-eşleme"dir: overbet blöfünü rakibin premium bluff-catcher'ının taşıdığı kartla at — o kartı tutmak rakibin "eşleşen" call kombinasyonlarını azaltır, kalan aralığın katlanma payını çoğunlukla yükseltir (fold equity artar, garanti değil). Flush GELEN mono board'da alt cep + flush kartı bu yüzden doğal overbet blöfüdür; kaçan flush'ta flush kartı taşıyan blöfler çoğunlukla listenin sonundadır — rakibin katlanacak kaçmış draw'larını bloklar; önce bloklamayan aday varsa onu seç (bkz. B32.6).

### 11.2-EK-3 "Check etseydi ne yapardım" testi — küçük bete raise kararı
B11.2 boyut büyüdükçe fiyat-eşiğinin nasıl kaydığını verir; küçük bir bete (özellikle blocker-bet büyüklüğünde) RAISE edip etmeme kararı için ayrı bir kestirme var: "rakip check etseydi, ben ne yapardım?" diye sor. Cevap check'e karşı net bir VALUE bet'iyse (check'e karşı tereddütsüz bet — river'da koruma diye bir motivasyon yoktur, gelecek kart yok) VE raise'imi benden zayıf hangi ellerin ödeyebileceği belliyse, rakibin küçük bet'i o bet'i yalnızca ATLAMIŞTIR — kendi hattını uygula, raise'le. Cevap check'e karşı da yalnız İNCE bir bet'se (ancak biraz daha büyük atmak isterdin) ya da raise'imi ödeyecek zayıf el yoksa, rakibin küçük bet'ini de sadece ÇAĞIR — raise edersem beni yalnızca daha iyi eller ödemeye devam eder, rakibin blöflerini ve zayıf call'larını ise potadan atarım.

**Kural:** Küçük bir bete raise kararında iki soru sor: "check etseydi ne yapardım" ve "raise'imi benden zayıf hangi eller öder" — ikisi de netse raise'le, biri bile belirsizse çağır.

### 11.3 River — thin value: kim öder

Kitabın tüm value filtreleri şimdiye kadar NEGATİF idi ("ödemezse jam etme"). Pozitif komut eksikti: ödeyen varsa İNCE value BET ET. Bu, B0 c.2'nin öbür yüzü — filtre aynı, yön ters.

| El sınıfım | Rec / station | Reg |
|---|---|---|
| **Top pair iyi kicker** | Küçük value bet (öder) | İnce bet / check-call |
| **İkinci per** | Küçük value bet | Check-call |
| **İki per, küçük board** | Value bet | Check-call — reg bu boyutu daha iyisiyle öder |

**Kural:** "Benden zayıf hangi el ödüyor?" sorusunun cevabı VARSA — ince de olsa — bet. Rec-ağırlıklı Main'de kaçan thin value doğrudan chip kaybıdır.

### 11.3-EK Katman-hedefli boy: nut katmanı rakipteyse küçül

Value kütlen orta katmandaysa ve nut katmanı rakipteyse boyu KÜÇÜLT: küçük boy rakibin zayıf-per/çekiliş katmanından ödeme alır, set/iki-per (nut) katmanına karşı kaybı sınırlar ve raise kaldıracını keser — şişmiş potu sen BAŞLATMAMIŞ olursun. Bu boyu nut'un dahil tüm bet aralığına TEK boy olarak uygula ki aralığın raise'e karşı korunsun. Ezber değil pusula: boy, rakip aralığının hangi katmanını kayıtsızlığa itmek istediğini seçer *(kalibre et)*.

### 11.3-EK-2 Katman-hedefli boyun flop ikizi
"Boy, rakip aralığının hangi katmanını kayıtsızlığa itmek istediğini seçer" kuralı 3-bet potunun flop'unda da geçerlidir: önce "hangi sınıfı katlatmak istiyorum?", sonra "o sınıf hangi boyda kayıtsız?" Caller'da trips olası eşleşmiş board'da (9-7-7 tipi) caller'ın orta katmanı küçük bete çoğunlukla call eder, yarım pot civarında *(kalibre et)* kayıtsızlığa yaklaşır; yüksek tek kartı senin aralığında olan eşleşmiş board'da (A-J-J tipi) küçük boya çoğunlukla zaten katlanır (bkz. B32.4).

### 11.3-EK-3 River'da IP boy: aksiyonu KİME açıyorsun — orta el check ya da 2/3+, nut'a 2/3 ya da all-in

11.3 tablosunun rec sütunu "küçük value bet" der; reg sütununun mekanizması şudur.

**Orta elle üçte-bir yok.** Pot 10, bet 3, çağıran aralığa karşı %60 → kazanç potun ~%6'sı — en iyi hâl. Küçük bet reg'e raise düğümü açar; küçük aralığın zayıf value + blöf → raise'e en açık aralık, kazanç %2–1'e iner. Solver'da bet-check-bet ve bet-bet-bet hatlarında IP'nin river boyu 2/3 ya da all-in; üçte-bir ~sıfır *(kalibre et)*. Orta el: check ya da 2/3+. İstisna: raise etmeyen station (11.3'ün küçük bet'i); 19.6 blocker-bet OOP'nin sapmasıdır.

**Nut'la boyu rakibin RAISE kapasitesi seçer.** "2/3'e kim raise eder?" — aralığında "yenilmez" sandığı güçlü catcher (overpair/set) varsa o kendisi jam'ler, orta Ax 2/3'e call edip jam'e katlanır → 2/3 ikisini toplar. Raise etmeyen pasif rakipte parayı SEN koyarsın → all-in *(derinlik eşiği: kalibre et)*.

**Tavan boy üç şartla:** çok blöfle geliyorsun (flop büyük call, turn check-through) + rakip capped catcher'la geliyor + value'n onun catcher'larının hepsini yeniyor → all-in, 2.5–4× dahil; blöf çokluğu boyu küçültmez, BÜYÜTÜR. 11.4'ün "jam ASLA"sı tek per içindir, bu nut/polar value. Ağacında all-in yoksa flop/turn boyların da yalan söyler (29.2).

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

### 12.0-EK Geç kayıt iki yüzlü — açıkken prim hesaplayıcının söylediğinden DÜŞÜK; kapanırken oturmanın dolar-EV'si buy-in'den YÜKSEK olabilir

Kök hata: (a) geç kayıt sürerken hesaplayıcının primini olduğu gibi almak, (b) geç kayıt kararını "geç kalırsam kısa yığınla oynarım" diye refleksle reddetmek. (a) Hesaplayıcı sahayı kapanmış sayar; kayıt açıkken gelecek oyuncular havuzu ve ödenen yeri büyütür, bubble'ı uzaklaştırır — gerçek prim gösterilenden bir tık düşük *(kalibre et)*. Düzeltme: nihai saha büyüklüğünü ve nihai ödeme tablosunu varsayarak hesapla, ya da gösterilen primden bir kademe düş. (b) Mekanizma prim mekaniğinin ta kendisidir: her eleme hayatta kalanların yığın-dolarını yükseltir — geç oturan, herkesle aynı buy-in'e aynı chip'i ama elenmiş sahanın yükselttiği değerle alır *(kabaca birkaç yüzde; kalibre et)*. Lehe: sahanın çoğu elenmiş, chip'ler tek devde toplanmış (iki orta lider yerine tek büyük lider EV'yi belirgin artırır), düz ödeme / büyük min-cash, ön-kayıt teşviki yok, freezeout. Aleyhe: tepe-ağır ödeme, yüksek rake, ön-kayıt chip bonusu, çok sayıda başka geç kayıtçı (her ek geç oturan senin payını eritir) — ve kendi edge'in: kısa yığınla edge realize olmaz, bubble'a kısa gelirsin. Kural: geç kayıt yapı sayfasında bir sayıdır, his değil — molada hesapla; edge'in büyük ve yapı yavaşsa baştan otur (24.2), edge'in küçük ve iki event çakışıyorsa geç oturmanın dolar-EV'si genelde pozitif *(kalibre et)*.

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

### 12.1-EK-3 ≥20bb'de arkadakiler seni cover ediyorsa open-jam aralığı YOK — tepesi raise-call'a gidince jam aralığı ölür
"20bb'de jam ya da raise" diye iki aralığı yan yana kurma. Koşul: ICM açık, kısa masa (3-handed tipi), blind'ler seni cover ediyor, ante küçük. Raise-call aralığın (aralığının tepesi — SB jam'ine; BB jam'ine bir kademe geniş *(çizgiler: kalibre et)*) tepeni raise'e taşır; geriye kalan jam aralığı (orta suited Ax / küçük çift tipi adaylar) TEPESİZDİR ve rakipler ona belirgin geniş öder *(kalibre et)* → her jam eksi. Sonuç: open-jam sıfır; raise payı küçük *(frekans: kalibre et)*, tepesi raise-call, gerisi raise-fold — 2bb riskle ölü paraya oynarsın, 20bb'yi riske sokmazsın. İki ayna: (a) rakibin koltuğunda raise aralığı varsa jam'i tepesizdir → jam'ine call'un genişler *(kalibre et)*; (b) sen jam aralığı taşımıyorsan SB'nin marjinal re-jam'i kârsızdır — raise-fold, rakiplerin jam aralığını da daraltır. Ante büyüdükçe, stack kısaldıkça, arkadakiler senden kısa oldukça jam aralığı geri gelir. B3'ün "15–25bb: bazılarıyla direkt jam" satırı ve 17.8 Mod D'nin "açılışın bir kısmı direkt jam"i chipEV / cover-eden bağlamındadır; bu koşul listesinde kapanır — tablolar değişmez.

### 12.1-EK 30bb kapısı — fold equity jam lisansı değildir; lisansı riske atılan stack'in ödüle ORANI verir

"Rakip çok geniş açıyor, jam'ime %90 katlanıyor → geniş it" bir chipEV sezgisidir. ICM'de cover edilirken jam'in EV'sini raise-fold makası değil, riske atılan stack'in ödüle ORANI sınırlar: kaybedersen turnuva hayatın gider, kazanınca aldığın ölü para stack'ine göre küçüktür. Aynı geniş açıcıya, aynı dar call aralığına karşı jam genişliği stack bandıyla açılır: ~30bb'de dar (orta çift üstü + en iyi Ax/broadway), ~25bb'de bir kademe, ~20bb altında sert, ~15bb'de geniş — ICM'de yine de "her iki kart" değil, çoğunlukla *(sınırlar: kalibre et)*. Kural: geniş açıcıya karşı jam genişliğini ÖNCE stack bandından oku, SONRA fold equity'den. 25bb üstü cover ediliyorken %90 katlansa bile jam İLK seçenek değildir — jam EV+ olabilir, ama aynı fold'u çok daha az stack riskiyle alan non-all-in 3-bet (12.2-EK-2) onu domine eder; ICM primi bu farkı büyütür. O bantta ağaç non-all-in 3-bet'e ve seçici call'a kayar; fold equity'nin tek başına lisans olduğu yer ~20bb altıdır. Sınırda not: 30bb "hiç jam yok" değil "az jam"dır — çoğunlukla. 12.1 tablosunun "bir/iki kademe daralt" satırı bant içinde böyle okunur; tablo değişmez.

### 12.1-EK-2 Jam dokusu → call malzemesi: any-two jam'e karşı ÇİFT, dar/bloker jam'e karşı Ax

"7-2s bile itiyor, AQ'yla nasıl katlanırım?" Çok geniş jam aralığının büyük kısmı düşük-bağlantısız çöptür; o dokuya karşı orta-yüksek çift iki kartı da domine eder, AK/AQ da iki canlı alt karta karşı ~%60-65 favoridir (çiftin alt kartlara karşı ~%70'inin altında — ama flip değil); geniş aralıktaki çöp AK'yı domine edecek el vermez. ICM (kayıp = bust) sıralamayı büyütür: yüksek çiftin call EV'si AK'nınkinin üstüne çıkabilir *(kalibre et)*; asıl düşenler küçük çift (22-66) ve AJo/ATo/KQ'dur. Jam dokusu Ax/Kx-ağırlıklı bloker karışımına kaydıkça tablo döner: yüksek Ax domine ettiği el bulur, çiftler flip'e iner → AQ/AK call'da değerlenir; dar ve ÇİFT-ağırlıklı (TT+/AK) jam'de ise AQ ve orta çift birlikte düşer. "Rakip ne kadar geniş, ben o kadar geniş" ezberi eşik için doğru, sıralama için eksiktir: genişleyen jam'de çiftler Ax'tan daha hızlı yükselir. 12.1'in "88+/AJs+/AQo" satırı tek doku içindir; iki sütun oku: geniş/any-two jam'ci → 88+/AK/AQo tut, küçük çifti (22-66) ve AJo/ATo/KQ'yu düşür; dar/bloker (Ax/Kx) jam'ci → Ax-ağırlıklı, küçük-orta çifti düşür. Cover haritası önce gelir (12.1): bu ayrım aralığın İÇİNİ düzenler, eşiğini değil.

### 12.1-EK-4 Küçük prim aralığı nasıl biçimlendirir — flat ilk kurban, trap kapanır, 3-bet'in dokusunu rakibin CALL oranı seçer

Kök hata: "Prim %2, ihmal ederim." Küçük prim önce rakiplerin 3-bet'e devam aralığını keser; bu, 3-bet'e chip başına daha çok fold equity verir. Sonuçlar birlikte gelir: (a) flat her koltukta ilk düşen dilimdir — 3-bet frekansı sabit ya da yukarı, fold yukarı; (b) trap kapanır — büyük çiftler flat/jam yerine non-all-in 3-bet'e döner, çünkü rakip stack-off'u daralttığı için indüklenecek şey azalır ve arkadan squeeze yemek prim öder; (c) 3-bet'in bloğu değişir — orta value (orta-yüksek çift, iyi suited broadway) 3-bet'ten call'a iner, çünkü stack-off eşiği yükselmiştir; suited bağlantılılar equity'lerini call'da fazlasıyla realize ettikleri için call'a iner, blöf dilimi tek-yüksek-kart offsuit bloker'a kayar; boy büyür. Ama polarlığı seçen prim değil, rakibin 3-bet'e CALL oranıdır: derin ve primli spotta call oranı çöktüğü için polar; sığ-orta spotta rakip hâlâ geniş call ediyorsa (kendi primi küçük, flat ucuz) blöfler lineer kalır — flat'lenemeyecek en güçlü eller, dip Ax değil. Kural: 3-bet'i kurmadan önce "rakip 3-bet'ime kaç call ediyor?" — az call → polar-büyük, offsuit bloker blöf; çok call → lineer-küçük, blöfler flat'lenemeyen güçlü ellerden. Prim yalnız o oranı aşağı iterek dolaylı polarleştirir.

### 12.1-EK-5 Aynı kısanın JAM'ine geniş, NON-ALL-IN 3-bet'ine dar — çift defteri dokuyla döner; ICM "committed"i çözer

Kök hata: rakibin all-in'ine ve küçük 3-bet'ine aynı el listesiyle cevap vermek. Kısanın jam aralığı orta bloğu taşır (orta çift, orta suited, geniş Ax) → orta-yüksek çift onu domine eder, call defterinde yaşar. Aynı kısanın non-all-in 3-bet'i polardır: tepe + katlanabilen bloker; orta çift ya domine edilir ya kimseyi katlatmaz ve fold'ları da bloklar → aynı el jam'e call, 3-bet'e FOLD — paradoks görünür ama dokudan gelir. İkinci kat, arkanda seni cover eden dev varken: chipEV'de call ettiğin an committed olan eller ICM'de committed değildir — orta çiftle kısanın jam'ini öde, dev yeniden itince kat; devin ise seni katlayacak yığınla itmesi gerekir, bu yüzden aralığı senin call'ından sonra daralır (tepe ödeme sınırı yukarı). Kural: kısaya karşı önce aksiyonun türünü oku — all-in → çift-ağırlıklı geniş call; küçük 3-bet → tepe + fold; arkada cover eden varken "call → rejam gelirse fold" defteri ayrı bir hattır, chipEV'nin "call ettiysem giderim" refleksi burada bust'tır.

### 12.1-EK-6 Pozisyon etiketi değil AÇILIŞ YÜZDESİ — %39 açtıysan BTN'sin, SB rejam'ine öyle öde; "value raise → jam'e fold" tutarsızlık değil

Kök hata: "HJ'den açtım, SB itti, KQo HJ aralığı için zayıf → fold". Mekanizma: pre-FT'de tüm masa kısa/primliyken HJ açılışı fiilen BTN aralığıdır (~%39); SB (kısa, sana karşı primi düşük — sana %3, ona %11 *(kalibre et)*) jam'ini SENİN AÇILIŞ YÜZDENE göre kurar: her çift, suited broadway, A5o, KJo, KQo. Sen ona karşı chipEV'ye yakınsın → call defteri geniş: KQo, A8o, K9s/Q9s, her çift *(kalibre et)*. Etiketle oynarsan over-fold edersin, SB seni soyar. Rakip teoriden dar itiyorsa (A5o/22'yi bulmuyorsa) dip call'ları kes, gövdeyi koru. İkinci kol: ICM'de raise aralığı "committed" değildir — AT/KQs/A9o gibi eller CALL aralığını domine ettiği için raise'lenir (iso ya da open), rakibin polar JAM'i gelince katlanır; aynı elin iki düğümde iki cevabı vardır, "raise ettim, ödemem lazım" yok. Bu düğümde el "harcamak" normaldir; raise-fold value dilimi ICM'de chipEV'den kalındır *(kalibre et)*. 22.11 kaçış kapısının (AK ile fold opsiyonu satın alan raise) geniş-aralık hâli.

### 12.1-EK-7 Derin ICM jam'i rakibin CALL'ına aşırı kırılgan — birkaç kombo geniş ödeyen blind, jam aralığını sıfırlar; jam gidince OPEN de daralmak zorunda

Kök hata: solver'ın "37bb'yle %25 open-jam" çıktısını masaya taşımak. Mekanizma: derin open-jam (30–40bb, lineer ödeme, arkada tavan primli blind'lar) teoride çalışır çünkü blind'lar QQ/AKs'yi bile katlar *(kalibre et)*. Ama o call aralığı gerçek değil: QQ/JJ ile öderse çoğunlukla domine ediyor ve kazanınca kaçak lider oluyor (22.2-EK-2 varış rolü) — pratikte ve future-EV'de doğru olan biraz daha geniş call. Blind'lara JJ+/AKs/bazı TT eklemek — iki-üç kombo — jam frekansını %25'ten sıfıra indirir *(kalibre et)*. Zincir: jam gidince o eller raise-fold'a düşer; raise-call/raise-fold makası açılır, arkadakiler kârlı rejam'ler → open aralığı da daralmak zorunda (fold oranı kabaca %43'ten %60'a *(kalibre et)*). Q4s/Q5s jam'i yoksa J4o/T4o da açılamaz. Kural: derin stack'le "arkadakiler katlanmak zorunda" jam'i yalnız arkadakilerin gerçekten taş olduğunu GÖRDÜYSEN; bir kombo bile geniş ödeyen rakibe karşı jam'i kes VE open'ı bir kademe daralt — ikisi birlikte. 12.1-EK'in 30bb kapısı "jam az"dır; bu satır neden "az"ın kırılgan olduğunu ve open'ı da sürüklediğini verir. Aynı uyarı kısa-SB'nin 60bb'lik "capped flat'e karşı squeeze-jam"i için: teoride her suited Ax, pratikte rakip QQ/AK'yı flat'lemiyorsa o jam yok.

### 12.1-EK-8 Benzer kısa stack'ler + kaçak lider = birbirine chipEV — jam'e call aralığı jam FREKANSINA değil DOKUSUNA göre; A8o flat, A5o jam değil

Kök hata: "kısa-kısa, prim düşük → chipEV chart'ı aç" — doğru yön, yanlış kalibrasyon. Mekanizma: iki benzer kısa, lider uzakta → aralarındaki prim ~sıfır (uydu masası); ama üç düzeltme. (1) Ödeme lineerse ve sofrada bir üçüncü, daha kısa stack varsa prim yeniden yükselir (%4'ten %11'e *(kalibre et)*) — "kısa-kısa = sıfır prim" değil, "kısa-kısa + başka kısa yok + tepe-ağırlıklı = sıfır". (2) Jam'e call'ı jam'in yüzdesine değil içine göre kur: %36 jam'leyen ama A9s/KJs/AQ taşıyan güçlü-geniş aralığa %16 call; %18 jam'leyen ama tepesi raise'de olan zayıf-dar aralığa %21 call *(kalibre et)* — frekans yüksek diye aralık zayıf değildir. (3) BB'nin BTN açışına cevabı, açan kısa-benzer stack'in aralığı %22 (BTN değil lojack aralığı) ise: A8o FLAT (jam için fazla zayıf, blöf için fazla güçlü), jam malzemesi orta çift/AQo/suited broadway'in kötüsü, blöf 3-bet A2o/A3o/K5o, offsuit Ax'in geri kalanı fold. Kural: benzer kısalar arasında chipEV'ye yaklaş ama üç şeyi kontrol et: masada daha kısa var mı, ödeme lineer mi, jam'cinin aralığının içinde ne var — üçü de "evet/güçlü" ise chipEV chart'ından iki kademe sıkı. 12.1-EK-2'nin "jam dokusu → call malzemesi" satırının FT-kısa-kısa uygulaması.

### 12.1-EK-9 Pahalı jam aralığı "ya hep ya hiç" — arkadakiler bir tık geniş öderse sıfıra düşer; kesilen jam raise'e değil FOLD'a gider

Kök hata: open-jam aralığını sabit sanmak; "sim şu kadar jam diyor" deyip arkadakilerin call disiplinini gözlemeden itmek. Mekanizma: jam'in riski (stack × prim) büyükken — orta-derin stack, arkada yüksek primli ama seni cover eden oyuncular — kâr marjı incecik; arkadan TEK oyuncunun TEK kombo (JJ/AK) geniş call'ı jam dilimini sıfıra indirir *(kalibre et)*. Risk/ödül iyiyse (kısa stack, arkadakiler de kısa, ölü para stack'e göre büyük) aynı geniş call jam'i yalnız inceltir — kabaca üçte bir *(kalibre et)* — en kârlı jam'ler kalır. İkinci kol: jam'den düşen eller RAISE'e taşınmaz. Taşınırsa raise-call/raise-fold makası açılır, arkadakiler rejam'le cezasız ezer → o eller fold'a gider, toplam fold birkaç puan artar *(kalibre et)*. Üçüncü kol: geniş call'a karşı jam DOKUSU döner — blöf-jam'ler (küçük suited Ax, suited broadway, 55) silinir; "kötüden çağrılan" orta value (orta çift, AT) jam'de kalır. Yani geniş ödeyen rakibe karşı jam aralığı küçülürken value-yoğunlaşır. **Kural:** pahalı jam'den önce tek soru — "arkada bir tık geniş ödeyen var mı?" Evet ya da bilmiyorum → marjinal dilimi jam'den FOLD'a al (raise'e değil), value-jam'i koru, blöf-jam'i kes. Fazla fold ucuz, yanlış jam bust'tır.

### 12.2 Final table — rol matrisi

FT'de doğru davranış EL'e değil STACK ROLÜNE bağlıdır.

| Rolüm | Masada benden kısa VAR | Masada benden kısa YOK |
|---|---|---|
| **Kısa (<15bb)** | İlk jam'ci ol, ladder'ı gözle | Katlanma — doğru jam; kilitlenme de bir busttur (blind'lere) |
| **Orta** | En kırılgan — kimin bust'ını beklediğini bil, cover edenle pot açma | Fiilen en kısasın — 12.5: herkes kilitliyse jam aralığını GENİŞLET, katlanma |
| **Cover eden derin** | Agresyon serbest — cezasız ez | Chip-leader'la ego savaşına girme |

### 12.2-EK Kısa-orta BB'nin en kârlı FT spotu: soğuk 4-bet jam penceresi

"Açan var, 3-bet eden var, ben kısayım → fold" refleksi bu üçlüde para bırakır. Pencere üç bacaklı: (1) açıcı orta stack ve ICM baskısı altında — en güçlü ellerini büyük stack'in 3-bet'ine karşı zaten open-jam'liyor, açılış aralığı **tepesiz**; (2) 3-bet'çi onu cover eden büyük stack, büyük boy ve polar — value azınlık, offsuit çöp çoğunluk; (3) sen BB'de kısa-orta: ölü para stack'ine göre büyük, ama stack'in 3-bet'çinin blöfle "nasılsa ucuz" diye ödeyemeyeceği kadar uzun *(alt eşik: kalibre et)*. Jam'inle 3-bet'çi blöflerini atar, açıcı neredeyse hiç ödemez — tepesi zaten open-jam'e gitti, kalan aralık arkasında 3-bet'çi varken sandviçte katlanır. Bir kademe uzun stack'te pencere kapanır: ölü para küçülür, jam value'ya döner *(üst eşik: kalibre et)*.

Malzeme: suited Ax/Kx (A/K bloker 3-bet'çinin az value kombosunu inceltir), çiftler (blöflerde çift yok, açıcının call'ı dar), güçlü broadway'ler. 3-bet'çi küçük boy/lineer ise ya da çok kısaysan pencere yok.

**Kapsam:** 22.8-EK'in "küçük ICM 3-bet'e jam-or-fold, QQ+" satırı kapsanan AÇICI'nın cevabıdır; burada sen üçüncü koltuktasın ve 3-bet BÜYÜK-polar — "3-bet gördüm → dar" refleksi bu pencereyi öldürmesin. Dengeden sapmadır: gözlenen dinamik (büyük stack aynı orta stack'e üst üste 3-bet VE orta stack'in premium'larını open-jam'lediği — raise aralığının tepesiz olduğu — görülmüş) yoksa uygulama; ikinci gözlem eksikse açıcı QQ+/AK'yı hâlâ raise'liyor olabilir ve soğuk jam'i öder → malzemeyi suited Ax/Kx blokerlerine indir, küçük/orta çiftleri ve broadway'leri düş (QQ+/AK zaten value, jam kalır).

### 12.2-EK-2 ICM'de BB'nin 3-bet defteri iki koltukta: cover ederken blöf offsuit dipten; cover edilirken value KK+, premium FLAT

Orta stack 3-bet'e çoğunlukla jam/fold ya da flat'le cevap verir, küçük 4-bet nadirdir; bu gerçek iki koltuğu şekillendirir.

**Cover EDEN BB (derin, açıcı orta):** value tepe dar (KK+/AK civarı *(kalibre et)*), blöf en DİPTEKİ offsuit'ten. İki sebep: suited eller cover edilen rakibe karşı equity'lerini fazlasıyla realize eder (21.3-EK-2) → call defterinde daha değerli, blöfe harcanmaz; rakibin raise-fold aralığı çoğunlukla suited Ax/Kx'tir → onu bloklamayan küçük offsuit el iyi blöftür. A-bloker ise sınırda: A hem fold aralığını (Axs) hem jam aralığını (AA/AK) keser, net etki başa baş — "A tutuyorum → blöf" refleksi burada otomatik değil.

**Cover EDİLEN orta BB (30-50bb, açıcı lider):** indüksiyon yoktur — TT-QQ/AQ ile 3-bet, jam gelince stack-off'u kendinden iyiye satın alır. Value fiilen KK+ *(kalibre et)* (AK sınırda, çoğunlukla flat); QQ-TT/AQ FLAT — 22.8-EK'in "marjinalle flat yok"u değil, aralığı koruyan PREMİUM flat. Blöf dilimi neredeyse kapalı *(tek hane: kalibre et)*. Bant *(eşikler: kalibre et)*: 25bb üstü rejam az; 20-25bb yüksek çiftler + AK/AQs jam'e — suited Ax/Kx ve küçük çiftler SINIRDA, lider açıcıya karşı ICM primi bunların çoğunu düşürür; ~15bb altı suited Kx de düşer — cover edilen kısa stack'in risk primi rejam eşiğini yukarı iter. Açıcı çok geniş açsa da value dilimi çoğunlukla sabit kalır (QQ/AK sınırda geri girebilir); asıl değişen blöf dilimidir.

### 12.2-EK-3 ICM'de küçük-orta çift (66-88, sınırda 99) rejam / 3-bet-fold defterinde ölür — Ax bloker onu geçer

"88/99 iyi el, iterim / 3-bet'lerim" refleksi ICM'de en pahalı malzemeyi seçer. Açıcıya rejam'de küçük-orta çift hiçbir iyi eli katlatmaz (tepe zaten öder), kötü elleri de ödetmez: çağrıldığında overpair'e ezilir, overcard'lı Ax'e flip'tir; katlattığı yalnız KQ/AJs tipi bloker elleridir. Aynı spotta A4o/A9o: overpair'lere canlı equity + açıcının çağıran tepesini (AA/AK/AQ) bloke eder, katlanan dilimini unblock eder → daha çok fold; ICM baskısı yüksek ve sığ spotlarda Ax bloker'ın rejam EV'si çoğunlukla küçük-orta çifti geçer *(kalibre et)*. 3-bet-fold da aynı: hedef rakibin raise-fold tepesini (ATs/KQs) katlatmaktır; çiftin postflop değeri şişmiş 3-bet potunda ve overcard board'larda büyük ölçüde erir. Kural: ICM'de küçük-orta çift CALL defterinde yaşar (flop görür, overcard'a katlanabilir), rejam/3-bet-fold defterinde ölür; o defterin malzemesi Ax bloker + en yüksek çiftler (TT ve üstü bu tarafta — TT rejam malzemesi olarak kalır). İstisna *(sınırda)*: açıcının aralığı küçük çift/suited connector'la dolmuşsa orta çift value-rejam'e döner. Çelişki yok: 12.2-EK'te çiftler soğuk 4-bet jam malzemesidir çünkü potta ölü para (open + 3-bet) fazladır, fold başına kazanç büyür ve polar 3-bet aralığının blöf oranı açıcının fold dilimine göre yüksektir; ilk-giren open-jam ayrı defter (12.2-EK-4); 22.11 kaçış kapısının "AK tipi" raise-fold dilimi orta çifti kapsamaz.

### 12.2-EK-4 Sıkışan orta stack'in ağacı RAISE-ONLY — limp aralık genişletme aracıdır, tight modda yasak

ICM'de tight oynamak isteyen orta stack limp'e kaçar — yanlış. Limp aralık GENİŞLETMEK için vardır (chipEV'de kârlı zayıf elleri ucuza sokar); tight mod raise-only'dir, çünkü raise fold equity taşır, limp ise arkadaki agresif büyük stack'e iso + postflop capped-aralık cezası açar. Kısa BB varsa limp ikinci kez yasak: kısa, capped limp'e geniş jam basar, sen katlarsın — üstüne bedava flop da vermiş olursun. Ağaç üç dilim: (1) raise-call yalnız JJ/QQ+ *(kalibre et)*; (2) OPEN-JAM (~15-25bb etkin; 30bb+ ise bu dilim raise-fold/fold'a döner) = rejam'e katlanmak İSTEMEDİĞİN güçlü-ama-nut-olmayan eller (AQ/AJ/AT, 88-TT tipi *(kalibre et)*) — raise'lersen agresif SB rejam'ler, sen katlarsın, equity ziyan; jam'le bitir; (3) raise-fold neredeyse yok. VPIP kabaca yarılanır *(kalibre et)*; kalan EV çarpışma etkisinden (22.11) gelir. Boy: raise dilimi KÜÇÜK (min-raise ~2x *(kalibre et)*) — dilim JJ/QQ+'dan ibaretken fold istemek jam diliminin işidir, raise diliminin değil; prim eller agresif SB/BB'nin rejam'ini davet eder. Chip lideri tersini yapar — orta stack'in limp'ini suited bağlantılıyla iso'la (limp-jam yemeyen eller), offsuit çöple değil; 28.3'ün kelle limp'i ayrı bağlam. 5.1-EK'in BvB limp satırı chipEV içindir; cover eden agresif BB + ICM'de o dilim kapanır.

### 12.2-EK-5 BB ≤5bb ise açılış boyu min-raise DEĞİL 2.2-2.5x — "nasılsa committed'im" yanlış

"Min-raise yeter, nasılsa jam'ine öderim" fold equity'yi sıfırlar: ≤5bb BB min-raise'e fiyat gereği hemen her eliyle öder (30.6'nın öbür yüzü). Boy 2.2-2.5x'e çıkınca BB aralığının bir dilimi *(kabaca beşte biri — kalibre et)* katlanmaya başlar; SB de daha sıkı savunur (BB'nin reopen tehdidi). Pozisyona göre kademelendir: geç pozisyon bandın üstüne, erken pozisyon altına yakın *(uçlar: kalibre et)* — arkada jam'leyebilecek oyuncu arttıkça büyük boyun "jam yeme" maliyeti artar. Aralık boyla birlikte bir tık DARALIR (ICM zaten daraltır): dar aralık + büyük boy; geniş aralık + büyük boy değil. 3x ve üstü sınırda — saha 3x'e aşırı katlanır, 2.5x'e gerektiği kadar; psikolojik eşik, kalibre et. Kural: BB "her şeyle ödeyecek" bandındaysa boyu büyüt, aralığı daralt, limp yok (12.2-EK-4). B3 açılış boyu tabloları değişmez; bu satır yalnız kısa-BB istisnasıdır.

### 12.2-EK-6 Lineer küçük 3-bet'e karşı cold 4-bet NON-ALL-IN — ve orta çift/AQ'yla 4-bet-fold *(sınırda)*

Kök hata: "3-bet yedim, orta çiftle ya jam ya fold." Orta fazda kısa BTN, açıcıya küçük 3-bet'ler; sen SB'de büyüksün ama BB seni cover ediyor. Kısanın küçük 3-bet'i açıcıya karşı fold equity taşımaz → aralığı lineer ve güçlü, suited bağlantılı blöf yok. Buna karşı senin devam aralığın daha da lineer (tepe onda bir) ve non-all-in olmalı: kısanın 4-bet'e cevabı ya orta ellerle call ya da polar jam'dir — jam'i heads-up'taki rejam'den güçlüdür (büyük çift + AK + suited Ax). O jam'e orta çift ve AQ chipEV'de asla katlanmazken burada 4-bet-fold olur; yalnız en yüksek çiftler stack-off. Kural: küçük-lineer 3-bet'çiye karşı 4-bet'i "fold opsiyonu satın alan" boyda yap, en tepeyle öde, orta çift/AQ'yu 4-bet-fold'a yaz — 12.2-EK'in polar-büyük 3-bet'çiye karşı cold jam penceresinin aynasıdır: orada 3-bet blöf-ağırlıklı olduğu için jam; burada 3-bet lineer olduğu için raise + fold. *(Sınırda — solver doğrulaması ister; arkadaki cover eden BB kalkarsa 4-bet-fold dilimi daralır.)*

### 12.2-EK-7 Polar açıcıya (jam'i orta, raise'i tepe+çöp) karşı çiftle rejam yok — geniş flat + bol 3-bet blöf; any-two JAM'e cover edilirken bile K-yüksek call

Kök hata: primli kısa/orta stack min-raise'ledi, "88 iyi el → it". Mekanizma: yüksek primli kısa/orta açıcı orta ellerini (orta çift, suited Ax, suited broadway) open-JAM'ler; raise aralığı iki uçlu kalır — tepe (99+/AQ+) ve raise-fold çöpü (K4s/Q5s/J3o tipi). Bu aralığa karşı çift rejam'i iki türlü ölür: üst dilim çağırır (ya eziliyorsun ya büyük favorisin — inkâr edecek el yok), alt dilim zaten katlanır; küçük çift üstüne çöpü BLOKLAR (22 tutunca 72o/62o azalır, tepe payı artar). Doğru ağaç: (1) jam neredeyse sıfır — ne çift ne suited Kx; (2) geniş FLAT (K7s/Q8s/J8s — ucuz, çöp postflop katlanır); (3) 3-bet blöfü NORMALDEN GENİŞ (K4/K5/Q2/J2 tipi tam frekans — *kalibre et*): prim makası sende, rakip raise-fold çöpünü non-all-in 3-bet'e de katlar; value dilimi TT+/AQ 3-bet-call. Karşı el: aynı açıcı any-two JAM'lediğinde cover EDİLİRKEN bile call geniştir — pot odds (~%43) + prim (~%15) = ~%58; K-yüksek suited any-two'ya karşı ~%60 → KTs/KJo/A7o/66 call *(kalibre et)*. "Cover eden → sert daral" aralık-kördür; eşik aralığa karşı equity'yle kıyaslanır. FT bubble'da aynı polar SB raise'ine karşı BB'de 44-TT CALL (jam yalnız domine ettiğini katlatır, çağrılınca ezilir — call'ın EV'si jam'in belirgin üstünde), jam malzemesi düşük çift + offsuit Ax + J8/T9 (K8/Q8 raise'ini katlatır). 12.2-EK-3 "orta çift rejam'de ölür"ün mekanizması farklıdır (iyi el katlatmaz); buradaki motor açıcının polarlığı + çöp bloklama, cevabı da farklı: flat + overbluff.

### 12.2-EK-8 Suited Ax mı, suited broadway/çift mi jam'lenir — rakibin 3-bet-CALL aralığının genişliği seçer; ve "bir pip" duyarlılığı

Kök hata: "A tutuyorum → bloker → jam" ezberi (ya da tersi, "A5s hep blöf-jam'dir"). Mekanizma: rejam/4-bet-jam'in kârı iki parça — çağrılınca equity + rakibin CALL aralığını bloklama. Rakibin 3-bet-call aralığı GENİŞSE (99/TT/AQ dahil — orta prim, cover eden 3-bet'çi) A bloker az value bloklar, çok blöf bloklar (blöfleri zaten Ax'tir); çağrılınca A5s her şeye domine, JTs/QTs ise TT/AQ'ya flip → suited broadway + çift jam'ler, suited Ax click/flat. Rakibin call aralığı DAR olduğunda (KK+/AK; stone bubble'da CO'nun JJ/TT/AQ'yu bile katladığı spot) tablo döner: A5s AA/AK'yı bloklar, KK'ya canlı; AJo ise fold aralığını (AJ/AT/KQ) bloklar, çağrılınca hiç flip'lemez → suited Ax saf jam, AJo/KQo/suited Kx FOLD. Duyarlılık: dar-call spotunda rakip bir pip geniş öderse (TT/JJ/AQs ekler — *kalibre et*) suited-Ax blöf-jam dilimi TAMAMEN kapanır, jam yalnız value'ya (JJ+) iner. Popülasyon dar-call spotlarında teoriden geniş öder → insanlara karşı Ax-bloker jam'ini değil lineer value-jam'i oyna; Ax-bloker jam'i yalnız rakibin fold disiplinini gördüğünde. Aynı kural en sığda (~8bb): nasılsa çağrılacaksın → lineer jam (A9s dahil), bloker ağırlığı sıfır. İki çift eşit flip'lemez: TT AK'ya karşı 77'den birkaç puan iyidir; primli spotta o fark jam/fold sınırıdır *(kalibre et)*.

### 12.2-EK-9 Cover eden 3-bet'çi — boy KÜÇÜK, blöf malzemesi "kârlı flat olmayan en iyi eller" + offsuit Ax; iyi flat'ler 3-bet'e harcanmaz

Kök hata: ICM'de 3-bet'i büyütmek ("baskı → büyük boy") ve AQ/AJ/KQ ile 3-bet-fold. Mekanizma: prim makası sende (rakibin primi seninkinin 2-3 katı) → rakip küçük 3-bet'e de aynı oranda katlanır; büyük boy yalnız kendi riskini büyütür. ICM hesaplayıcı min-raise üstüne ~2x-2.4x boyu (~6bb) 8-10bb'ye açıkça tercih eder *(kalibre et)*. Malzeme: (a) offsuit Ax (A2o-A7o) tam frekans — value bloklar, oynanabilirliği düşük, flat'e yazık değil; (b) "kârlı flat'in HEMEN altı" — KTo/QTo/JTo, K5s/J7s/Q7s: flat kâr etmez, 3-bet'te bloker + fold equity; (c) AQ/AJ/KQ/K7s/Q8s tipi KÂRLI flat'ler 3-bet'e HARCANMAZ — domine ettiği aralığı içeride tutar. Karşı koltuk (cover edilen açıcı, orta prim ~%10): küçük 3-bet'e over-fold yok — jam dilimi geniş (suited/offsuit Ax, çiftler), fiyat + düşük prim call'ı da açar (J9o/K9o/T8o sınırda — *kalibre et*); suited Ax IP FLAT'ler (rakibin Ax blöflerini domine eder, KK'ya out'u var) — jam değil. İki derin stack karşılıklı çift-hane primle: 3-bet value KK+/AK, QQ 3-bet'e ve 4-bet'e FLAT, 4-bet AA/KK + suited Ax blöfü; AA jam/trap değil CLICK — KK'yı stack-off'a çek, kombinatorik olarak elinde en çok o var.

### 12.2-EK-10 Blöf kicker'ı — yüksek kart rakibin VALUE'sunu bloklasın, düşük kart FOLD aralığını bloklamasın; ama rakibin DEVAM ettiği düşük kartı blokla

Kök hata: "A5o daha iyi el, A2o'dan iyi blöf". Mekanizma: blöf-jam/3-bet'in EV'si rakibin FOLD sıklığından gelir; ikinci kartın rakibin katlayacağı elleri BLOKLAMAMASI gerekir. Limp'çiye karşı A2o > A5o: rakip 72o/62o'yu zaten limp-fold'lar, 2 bunları bloklamaz; 5 ise 75s/65s'i (limp-call edeceği) bloklar — fark küçük, yönü net *(kalibre et)*. Aynı sebeple açıcıya 3-bet blöfü A3o/A4o/K4o; AT/QT 3-bet blöfü ayrı kulvar — AJ/QJ'yi (fold eden broadway'i) katlattığı için. Tersi: rakip düşük bağlantılıyı raise-JAM'liyorsa (12bb açıcı 87s/76s'i raise→jam, 54s'i raise-fold) A8/A7 > A5/A4: 8/7 onun devam aralığını bloklar, 5 yalnız raise-fold'una dokunur. Kural: 3-bet/jam blöfünde ikinci kartı rakibin fold aralığından değil DEVAM aralığından seç — her iki yönde de soru "hangi kartlarla devam ediyor?". B1 blöf seçimi ve B32'nin "fold'larını unblock et" satırlarının ICM-preflop hâli.

### 12.2-EK-11 ICM'de jam yerine KÜÇÜK 4-bet ("click") — 15bb'de bile; blöf-jam'i indükler, iki jam'e karşı fold satın alır

Kök hata: 3-bet yiyince güçlü elle refleks all-in — "nasılsa committed'im". Mekanizma: rakibin ICM 3-bet'i polardır (dar value + çok offsuit blöf). Jam'lersen value öder, blöf katlanır — jam'in kazancı yalnız blöfün fold'udur. Küçük 4-bet'e ise value yine öder AMA blöf dilimi jam'e katlanacağı yerde 5-bet-blöf-jam'e döner (K7o/A3o tipi) — jam'in asla ödetemeyeceği para. Polar 3-bet aralığı click'e neredeyse hiç call etmez, o yüzden click "ucuz flop görme" riski taşımaz. İkinci kazanç çok-yollu: QQ ile click → tek jam gelirse call, iki jam gelirse (biri iter, öbürü yeniden iter) fold — aralıklar o kadar AA/KK'ya yığılır ki QQ/AK bile atılır; jam'leseydin o opsiyon yoktu (22.11 kaçış kapısının 3-bet düğümü). Malzeme: value QQ+/AK, blöf click offsuit Ax (raise'lediğin A-yüksek'ler); "boy stack'in yarısına yakın" *(kalibre et)*. Koşul: rakip 5-bet blöf-jam BULUYOR olmalı — bulmayan (ya katlanan ya yalnız value ile iten) rakibe karşı click indüklemez, kendin jam'le ki ara sıra gelen AQs call'ı kaçmasın. Kural: ICM'de "ya jam ya fold" değil "click ya da fold" — jam yalnız pasif rakibe ve pot-committed sığlıkta. 12.2-EK-2 BB'nin 3-bet defteridir; bu satır AÇICININ 3-bet'e cevabıdır; 22.8-EK'in "jam-or-fold" satırı cover EDİLEN kısa içindir, benzer stack'te ağaç click'e döner.

### 12.2-EK-12 Dar-polar açıcıya karşı jam SIFIR — 3-bet-veya-call; TT/AJo bile 3-bet-CALL, çünkü jam ile 3-bet aynı devam aralığını üretir

Kök hata: "13bb'yim, AK'yı nasıl jam'lemem?" — kısa stack refleksi. Mekanizma: açıcı çok dar açıyorsa (erken pozisyon, çok covering stack, %10 civarı *(kalibre et)*) ve aralığının ORTASI zaten open-jam'e gitmişse, kalan raise aralığı "tepe + raise-fold çöpü"dür. Bu aralığa jam'in katlattığı el yoktur: tepe her hâlükârda öder, çöp küçük 3-bet'e de katlanır. Jam'in tek etkisi, 3-bet'e 4-bet-blöf-jam'leyecek elleri (AQ/A5s tipi) masadan kaçırmaktır — domine ettiğin parayı. O yüzden kısa BB de, pozisyondaki kısa da jam oynamaz: value 3-bet (JJ+/AK) + 3-bet-CALL TT/99/AJo (jam'lesen hiçbir şey katlatmaz; 3-bet'e call edersen açıcının çöpü katlanır, jam gelirse tepeyle karşılaşırsın — ama zaten karşılaşacaktın) + blöf yüksek-kart (KQs/KJs/KQo — açıcının raise-fold'u Ax'ten gelir, Ax bloklama). Aynı sebeple çok kısa BB (8–9bb) polar min-raise'e orta çiftleri (55–JJ) CALL eder, jam'lemez: çift tüm blöf-raise'leri domine eder, jam onları katlatır. Kural: "koltuk BTN ama aralık %10" — pozisyona değil aralığa oyna: polar-dar açıcıya jam yok, click + call; jam yalnız lineer-geniş aralığa (equity denial). Aralık lineerleşince (orta eller raise'de) tam tersi: orta çift ve suited broadway jam'e döner, geniş açıcının tüm orta elini katlatmak için.

### 12.2-EK-13 Prim %20+ ve benzer büyük stack'ler: 3-bet = yalnız AA (KK FLAT), boy dev, blöf offsuit Ax — AK 36bb'de bile open-JAM

Kök hata: derin FT'de "KK/QQ 3-bet-value, AK 3-bet-call" chipEV ezberi. Mekanizma: cover eden benzer büyük stack'e karşı prim tavana yakınken (%20+ *(kalibre et)*) 3-bet-call edebildiğin el yalnız AA'dır — KK bile A5s'e karşı %70'lik stack-off'u istemez, o yüzden KK FLAT; QQ/JJ flat. Value tek else boy DEV olur (stack'in kabaca üçte biri *(kalibre et)*): rakibi ya katlar ya commit eder, ortası yok. Blöf: 3-bet-call edemediğin offsuit Ax (A-bloker + katlanınca ucuz). AK'nın ağacı kapalıdır: flat'i zayıf, 3-bet-call'ı flip → 36bb'de bile open-JAM; jam'e bir tutam A2s/A3s kapak. Açıcının cevabı simetrik: dev polar 3-bet'e KQs/99 FOLD, ATo/AJo/A9s CALL (blöf Ax'lerini domine eder, AA'yı bloke eder), 4-bet-jam suited Ax (AA blokeri + overcard), KK/QQ jam'lemez (ya fold ya AA — click'e call). Jam'e karşı JJ/QQ call sınırda başabaş — lider için flip alıp kısa olmak future-EV'de eksi, çoğunlukla fold. Kural: benzer büyük stack'ler prim tavandayken "flat ya da AA": 3-bet'in adı AA, jam'in adı AK, gerisi flat/fold; boy dev. 12.2-EK-2'nin "value KK+, AK sınırda flat" satırı orta primin (30–50bb, cover edilen) hâlidir; prim %20'yi geçince KK de flat'e iner, AK flat'ten jam'e çıkar.

### 12.2-EK-14 3-bet BOYU prim ilişkisine göre — lidere dev, eşite orta, cover ettiğin kısaya minimum; boy küçüldükçe value genişler, blöf yüksek-karta döner

Kök hata: tek 3-bet boyu ("3x, her yerde"). Mekanizma: boy, rakibin sana karşı primiyle senin ona karşı priminin FARKINI fiyatlar. (1) Seni cover eden lidere karşı (senin primin onunkinden yüksek): value AA'ya sıkışmış, blöf offsuit Ax → dev boy (stack'in üçte biri civarı *(kalibre et)*) — küçük boy ona ucuz call + pozisyon verir, sen realize edemezsin. (2) Prim yakın/senin lehine orta stack'e karşı: boy orta (kabaca stack'in dörtte biri *(kalibre et)*), KK value'ya girer, blöf Ax'i çoğaltır — rakip 3-bet'e senden fazla katlanmak zorunda, kombo-bazında over-bluff meşru. (3) Cover ettiğin kısa açıcıya karşı (onun primi seninkinden yüksek): mümkün olan EN KÜÇÜK boy — cevabı zaten jam-ya-fold, küçük boy fold-equity'yi bedava alır, katlanınca ucuz; value 99+/AQ'ya kadar genişler, blöf yüksek-kart (AT/KQ/KJ/QJ — açıcının 4-bet-jam çiftlerini bloklar, raise-fold'u Ax'ten gelir), flat aralığı DARALIR (düşük SPR'de güçlüler 3-bet-call'a gittiği için zayıf flat korunmasız kalır). Kural: 3-bet boyu = prim farkının işareti: prim aleyhine → büyüt ve value'yu AA'ya indir; prim lehine → küçült ve value'yu 99/AQ'ya genişlet. Bu tam olarak 21.3-EK-2'nin river boy kaldıracının preflop yüzüdür.

### 12.2-EK-15 4-bet-jam malzemesi 3-bet'çinin CALL aralığına kilitli — dar (AA/KK/AK) → suited Ax; geniş (99/TT/AQ) → suited broadway, suited Ax "kötü"

Kök hata: "her spotta A4s'yle 4-bet-jam" alışkanlığı. Mekanizma: 4-bet-jam'in EV'si iki şeyden gelir — ne katlatıyor, katlanmayınca ne oluyor. 3-bet'çinin call aralığı DAR ve tepeden (AA/KK/AK, derin ve yüksek prim): A-bloker o aralığın büyük kısmını siler (AA + AK), çağrılınca overcard var → suited Ax jam'ler; suited broadway ise KK/AK'ya ezilir. 3-bet'çinin call aralığı GENİŞ ve lineer (99/TT/JJ/AQ — sığ, prim lehine, kısa açıcıya 3-bet): A-bloker artık az value bloklar ama rakibin blöflerinin çoğu Ax'tir → suited Ax onun FOLD'larını bloklar ve çağrılınca 99'a bile domine; KJs/KQs ise KK/AK'yı bloklar, Ax blöflerini unblock eder, çiftlere flip → suited broadway jam'ler, AJs katlanır ama KJs iter *(kalibre et)*. Ayna: 3-bet BLÖF seçimi de aynı kilide bağlı — derinde suited Ax (bloke ettiği AA/AK ağır basar), sığda offsuit broadway/AT (açıcının 4-bet-jam çiftlerini bloklar, katlanınca ucuz); orta suited Ax (A7–A9s) iki dünyada da kötü: çok raise-fold bloklar. Kural: jam'lemeden önce rakibin CALL aralığının adını koy: "AA/KK/AK" ise A tut, "99/AQ" ise K/Q tut. 12.2-EK-2'nin "20–25bb suited Ax/Kx jam" bandı dar-call hâlidir; geniş-call hâlinde Ax düşer.

### 12.2-EK-16 Çiftin RÜTBESİ rakibin raise-fold'larını bloke ediyorsa jam kötüleşir — 99 < 66; "9 call'ı bloke eder, 8 fold'u" → K9s jam, K8s call

Kök hata: jam'i yalnız çağrılan aralığa karşı equity'yle fiyatlamak. Mekanizma: jam'in gizli değişkeni "rakibin FOLD'larından kaç kombo bende". Geniş açıcının raise-fold dilimi A9o/K9o/Q9o/J9o gibi orta-yüksek offsuit'lerden kuruluysa 99 o fold'ların çoğunu bloklar → jam'in fold-equity'si erir, 99 jam'de 66'dan KÖTÜ; 44/55 jam'ler, 66/77 katlanır çünkü açıcı A6o/A7o raise-fold'luyor ama A4o/A5o'yu jam'liyor *(kalibre et — kombo-bazlı, spota özel)*. Aynı yasa Kx'te tersine döner: açıcı 9x'i raise-CALL (K9/Q9/J9 öder) ama 8x'i raise-FOLD (K8o katlanır) ediyorsa 9, call aralığını bloklar (iyi), 8 fold'ları bloklar (kötü) → K9s JAM, K8s CALL — ikisi "aynı el" gibi görünür, değildir. Üçüncü yüz: kısa BB'nin geniş büyük-stack açışına jam'i — JTo/T9s/Q4o jam (KT/QT/A9 gibi domine edenleri katlatır), KTo/K9s CALL (açıcı domine ettiğin Kx'i katlar, yalnız iyisini öder); K2s jam'ler, K9s jam'lemez — "Kx'in KÖTÜSÜ jam'ler, iyisi flop görür". Kural: jam adayının her kartına sor: rakibin call'ını mı bloke ediyor (iyi), fold'unu mu (kötü)? Ele değil, o iki listeye göre sırala. Tam kombo masada bulunmaz; "orta çift raise-fold'larını bloklar" ve "kötü Kx jam, iyi Kx call" iki ezber yeter.

### 12.2-EK-17 Açıcı "tepe + saf çöp" oynuyorsa (orta jam'de) bloker mantığı TERS döner — 3-bet blöfü 52o, A2o'nun 2'si bloker olur, tuzak kapanır

Kök hata: 3-bet blöfünü her spotta A/K bloker'dan seçmek, tuzağı her spotta kurmak. Mekanizma: cover eden büyük stack kısa/kilitli blind'lara açarken aralığı üç parçadır — tepe raise-call, orta OPEN-JAM, dip (62o/72o/T3o) raise-fold. Bu aralığa karşı: (1) K/Q/J blokeri yalnız raise-FOLD'ları bloklar (tepe AA/KK, çöp yüksek kartsız) → 3-bet blöfü 52o/42o/63o gibi fold aralığını UNBLOCK eden düşük kartlardan, value yalnız Ax (AA'yı bloke); çiftler 66–KK 3-bet'lemez, FLAT — "AA ya fold" aralığına 3-bet anlamsız, flat ise çöpü flop'ta ezer, savunma çok geniş (53o'ya kadar *(kalibre et)*). (2) A2o'nun "2 fold'ları bloklamaz" ezberi biter: açıcı deuce'lerini raise-fold'luyorsa 2 tam da o fold'ları bloklar → A2o katlanır, A7s/A8s 3-bet'ler (çağrılınca daha iyi kicker); açıcı %60+ açıp her deuce'ü raise'liyorsa 2'nin payı düşer, A2o 3-bet'e döner *(kalibre et)*. (3) Kısa-kısa çok sığda (8–9bb) polar min-raise'e her Ax VE her Kx jam — K blöfü bloklamaz, açıcı Kx'ini kendi jam'liyor; Q2o/J2o bile jam çünkü Q/J raise-fold'ları bloklar ve çağrılınca overcard *(kalibre et)*. (4) Tuzak: polar raise aralığı per'le stack-off ETMEZ (K5o top pair yakalasa da ödemez) → AA/KK trap'in değeri düşer, 3-bet'le bitir; lineer aralığa (KTs/JTs raise'de) tuzak geri gelir. Genel yasa: prim yükseldikçe tepe aralığı daha az tuzakla. Kural: rakibin raise-fold dilimini oku — yüksek kartlıysa A/K bloker blöfü, çöpse düşük-kart unblock blöfü; orta elleri jam'liyorsa çiftlere 3-bet yok, flat.

### 12.2-EK-18 Cover eden büyük stack kısa açıcıya karşı IP — geniş FLAT (over-realize + squeeze koruması); karşı yüz: capped flat aralığına derin SB boy-bağımsız squeeze-jam'ler

Kök hata: "ICM'de flat yok" kuralını (22.8-EK, cover EDİLEN içindir) cover EDEN koltuğa taşımak; ya da liderken kısaya 3-bet'lemek. Mekanizma: kısa açıcının sana karşı primi yüksek, seninki ~0 → flop'ta o check-fold'a mahkûm, sen bet'le realize edersin; squeeze de gelmez — arkadakilerin FLATTER'a (sana) karşı primi var, açıcı dar → küçük squeeze'e sen güçlü aralıkla call edersin, büyük squeeze onları kısaya karşı commit eder → herkes susar. Sonuç: büyük 3x boya karşı bile suited connector, suited 9x, tüm çiftler, offsuit broadway'ler flat *(kalibre et)*; 3-bet'e sadece flat'lenemeyen çöp (AT/KJ/QTo değil — bunlar flat'te para kazanır — QTo/KTo/A9o sınıfı). Şart: gerçekten KAÇAK lider olmak (rakibin birkaç katı); 50bb'lik "büyük" stack bu flat'in yarısını bulamaz *(kalibre et)*. SB aynası: lider olmayan ama yüksek primli SB, geniş-zayıf-polar BTN açışına TT/JJ/AQs/AJs'i FLAT'ler — stack-off edemez, ama aralık zayıf ve flat squeeze'den korunur (12.2-EK-2 premium flat'inin SB hâli). Karşı yüz (sen açıcı, arkadaki kısa senin open'ını flat'ledi): flat aralığı CAPPED (QQ+/AK 3-bet'te) ise arkadaki derin SB "iki ölü BB'ye karşı" squeeze-JAM'ler — boyu ne olursa olsun (60bb'lik jam bile) çünkü flatter asla ödemez, açıcının call aralığı minik *(kalibre et)*; en kısa BB de o jam'e geniş over-call eder (77/AJs), çünkü arkada kimse ödemeyecek. Kural: kısa açıcıya karşı lider IP flat'ler, 3-bet'lemez; flat'in kapağı (premium'un bir dilimi) yoksa derin SB'ye bedava squeeze-jam verirsin — kapağı koru ya da flat'i kıs.

### 12.2-EK-19 Polar kısa açıcıya karşı BB'nin doğru cevabı sıfır jam; BB yine de jam'liyorsa açıcı "ateşe su" — daralt, orta çifti indüksiyona al

Kök hata: cover eden BB'nin, kısa/orta açıcının open'ına refleks 3-bet-jam'i (küçük çift, Ax, suited Kx) — kapsananı "korkutmak" için. Mekanizma: yüksek primli kapsanan açıcının aralığı yapısal olarak polardır — orta dilim (küçük çift, suited broadway, orta Ax) zaten open-JAM'e gitmiş, raise'de tepe + dip kalmıştır. Polar aralığa jam'in fold equity'si yoktur (tepe öder, dip zaten katlanır) → BB'nin teorik cevabı non-all-in 3-bet (value dar, blöf dip offsuit — 12.2-EK-2) + çok geniş call; jam neredeyse sıfır. Popülasyon bunu yapmaz, jam'ler. Açıcının doğru ayarı agresyona agresyon değil daralmadır: (1) oynanan aralığı bir kademe daralt — suited Ax dipi, suited 9x, Q7s tipi eller equity'sini realize edemez; (2) orta çiftleri (88-TT) open-jam'den RAISE-CALL'a taşı — BB'nin jam'i küçük çift/A5 ağırlıklıysa orta çift domine ederek çağrılır, jam'lemek o EV'yi ziyan eder; (3) orta çift jam'den çıkınca blöf-jam'ler de çıkar (A3s/A4s/ATo) — koruyacak value kalmadı, fold. BB üstüne geniş call'a da başlarsa (K6s, T8o) daralma sertleşir: aralık kabaca üçte bir küçülür *(kalibre et)*, raise-call orta çift+/ATs'e genişler, raise-fold neredeyse yok olur — fold equity yok, jam yeme sık. **Kural:** kapsanan açıcı olarak rakip fazla jam'liyor ya da fazla ödüyorsa fold equity'n erimiştir → daha az el, daha çok indüksiyon, sıfır blöf-jam. İstisna *(sınırda)*: BB'nin jam'i suited Kx/broadway'e kadar açıldıysa KQs tipi el kendisi jam'e döner — jam'lemezse jam yer.

### 12.3 Ladder — ne zaman gerçek para

Bir sonraki pay-jump stack'ine oranla BÜYÜKSE ve masada senden kısa varsa: bekle, jump'ı ladder'la. Jump mikroysa: chipEV oyna.

Ödeme merdiveni *(lobiden doldur — eşik sayısı uydurulmaz)*:

| Sıra | Ödül | Bir önceki sıraya fark |
|---|---|---|
| *(doldur)* | *(doldur)* | *(doldur)* |

### 12.3-EK Merdiveni basamak değil EĞRİ olarak oku — düz merdiven ladder'a, tepe-dik eğri tepeye uzanan stack'i birinciliğe oynatır

12.3 tek jump'ın stack'ine oranını sorar; molada bir adım daha at ve ARDIŞIK jump oranlarını karşılaştır. İki tipik profil: her basamak bir öncekinin ~%30'u kadar artan düz merdiven (çoğunlukla online yapılar) ve ortada %20-25'lik basamaklarla ilerleyip son iki basamakta %45-55'e dikleşen eğri (çoğunlukla canlı yapılar) *(oranlar: lobiden oku, kalibre et)*. Düz merdivende her basamak gerçek paradır — ladder disiplini kârlıdır; tepe-dik eğride, son iki basamağa gerçekten uzanabilen stack'te küçük basamağı feda edip birincilik shot'ı almak çoğunlukla doğrudur, çünkü asıl para son iki jump'ta oturur. Aynı FT'de iki oyuncu iki farklı doğru stil oynayabilir — ama eğri ikisi için de aynıdır; farkı stack'in eğrinin NERESİNDE durduğu seçer: aynı tepe-dik eğride sıradaki basamak stack'ine oranla hâlâ devse kısa yine ladder'lar (12.3: masada senden kısa varken bekle), tepeye uzanan cover eden lider birinciliği fiyatlar.

**Kural:** FT molasında iki soru SIRAYLA: (1) sıradaki jump stack'ime oranla büyük mü (12.3) — büyükse eğri ne şekilde olursa olsun ladder; (2) değilse eğri nerede dikleşiyor — dikleşme tepedeyse ve stack'in oraya uzanıyorsa ladder'ı değil birinciliği fiyatla.

### 12.4 Bubble av haritası

Bubble savunma değil, turnuvanın en yüksek chipEV penceresidir — DOĞRU tarafındaysan.

| Benim stack'im | Kilitli orta stack | Kısa stack | Beni cover eden büyük |
|---|---|---|---|
| **Büyük (cover eden)** | Soy — open genişlet + 3-bet baskısı | Normal | Ego yok — blöf 3-bet kapalı |
| **Orta** | Seçici soy — YALNIZ cover ettiğin kilitli orta; değilse B3.2: sabır | Normal | Kaç |
| **Kısa** | — | — | Kaç, doğru jam'i bekle |

Kural: **kilitlenmiş orta stack masadaki en kârlı hedeftir.** Rec/reg saha farkı: Main'de hedef bol; SHR/HR'de herkes bunu bildiği için hedef seçici (B5.6 rakip-okuma kalıbının aynısı).

### 12.4-EK "Soy"un icrası: cover eden büyük stack'in üç kaldıracı — ve ödeme merdivenini RAKİP için oku
12.4'ün "soy — open genişlet + 3-bet baskısı" hücresi üç somut kola iner *(hepsi kalibre et)*:

1. **Boy.** Kısa BB'ye (≲12bb) boyu, BB'nin min-raise'e CALL'ı olup olmadığı seçer: fiyatla her eliyle call edip flop'ta commit olan kısaya min-raise değil 2.5–3x — jam (rejam) oranı boydan bağımsızdır, büyük boy min-raise'in davet ettiği ucuz call'ları fold'a çevirir (12.2-EK-5); salt jam-or-fold oynayan (call'ı hiç olmayan) kısaya boy küçük kalır — büyük boy fold'u artırmaz, yalnız jam yediğinde fazladan kaybettirir. ICM'le kilitli ORTA stack'lere karşı da baskı boyla değil frekansla satılır (21.7-EK).
2. **Malzeme = arkadakilerin cevabı.** Arkadakiler jam-or-fold ise bloker offsuit (K6o/Q8o tipi — flop oynanmayacak, bloker fold-equity alır); arkada derin caller varsa suited/oynanabilir (K5s > K9o).
3. **Geniş flat masayı dondurur.** Cover eden derinin CO'dan spekülatif flat'i (53s tipi) BTN/SB squeeze'ini kendi risk primiyle pahalandırır → çoğunlukla IP flop + BB'ye üç sokak baskı lisansı. İkinci stack'in açılışına 3-bet value KK+ (QQ/JJ flat — onun 4-bet-jam'i suited Ax/AK/KK+); aralığı suited Ax'in 5-bet-jam'i korur. Postflop kademeli: flop küçük, turn yarım, river jam.

**Hedef seçimi:** 12.3'ün merdivenini kendin için değil RAKİP için oku — basamağın onun bankroll'una ve stack'ine göre büyüklüğü kimin taş kesileceğini söyler (16.6'nın beşinci adımı); taş kesilen kilitli orta stack en kârlı hedeftir.

### 12.4-EK-2 Overfold'un ikinci dalgası — rakip jam'e bir kademe fazla katlanınca yalnız jam artmaz, LİMP ölür

Kök hata: "BB jam'e fazla katlanıyor → biraz daha geniş iterim" ile durmak. Cover eden SB'nin ICM'deki limp aralığı, ne raise'lenmek ne jam'lenmek isteyen orta suited eller için vardır (jam'i domine edilir, raise'i jam yer). BB jam'e bir kademe fazla katlanmaya başlayınca *(kalibre et)* tam o orta eller kârlı jam'e döner — limp'in var olma sebebi kalkar; boşalan raise dilimi value ve çöple dolar, strateji "raise ya da jam"a iner, limp neredeyse sıfır. Bir tık daha overfold'da fold da sıfıra iner. İstisna kalır: rakibin call aralığını domine eden yüksek-kartlı eller (orta Kx/Qx tipi) overfold'a karşı bile jam'lenmez, raise'lenir — jam onlardan yalnız daha iyisini call'da bırakır, domine ettiklerini katlatır; kazanç domine ettiğin ellerin call'ından gelir. Kural: BB'nin jam'e overfold'unu gördüğünde üç şeyi birlikte değiştir — jam aralığına orta suited'ları al, limp'i kapat, raise'i genişlet; domine eden yüksek-kartlıyı raise'de tut. Tek kademe okuma stratejiyi üçte iki değiştirir; bunu görmemek 22.1-EK'in "popülasyon sıkılaşır" tespitini paraya çevirememektir.

### 12.4-EK-3 Açılış/jam malzemesi — bloker mi oynanabilirlik mi: arkadakiler kısa/postflop nadir → bloker; derin/geniş savunan → suited

Kök hata: tek "açılış aralığı" ezberi (hep A5o'yu at T9s'i tut — ya da tersi). Mekanizma: ICM'de aralığın şekli, elin NEREDE bittiğine bağlı. Arkadakiler kısa ve primli (jam/fold'a mahkûm) → el nadiren flop görür, walk/jam/fold'la biter → bloker-ağır: A5o/A7o/K4o açılır, T9s/J9s/Q8s fold (bloker rakibin hem value hem blöf jam'ini inceltir). Arkadakiler derin ve BB primi seninkine yakın (geniş savunur, sık flop) → oynanabilir suited: J5s/Q4s/Q3s açılır, çıplak bloker offsuit düşer. Aynı ilke jam malzemesinde: cover eden lider yüksek-primli blind'lara jam'lerken "tek yüksek + tek düşük SUITED" (J5s/Q6s/K4s) jam — call aralığını (99+/ATs) bloklar, çağrılınca overcard + flush equity; T9s/98s ise RAISE — BB domine ettiğin ellerle öder. Ve BB'nin call'ı jam'e karşı: ATs > AQo — offsuit kombolar aynı eldir, suit'in çiftlere/Q-x'e karşı ek equity'si Q'nun ek dominasyonundan değerli *(kalibre et)*. Kısa BB'de (~8bb) tersi: çağrılacaksın → LİNEER jam (A9s dahil), call ~0 (K8s/87s/KTo bile fold — o SPR'de domine el stack-off'a mahkûm). Kural: "arkadakiler jam'ci mi caller mı?" → jam'ciyse bloker, caller'sa suited; kendin çağrılacaksan ham güç. 12.4 av haritası değişmez; bu satır "neyle" sütunu.

### 12.4-EK-4 Açılışı genişletip jam'e CALL'ını genişletmeyen lider rejam cennetidir — makas gözlemle açılır, sim'le değil

Kök hata: "lider beş puan daha geniş açıyor → biraz daha geniş rejam". Sim bunu doğrular ama küçük fark verir; asıl para başka yerde. Mekanizma: sim, açılışı genişletince jam'e call'ı DA genişletir (QJo/A7o'ya kadar) → rejam kazancı sınırlı, birkaç puan *(kalibre et)*. Gerçek popülasyon açılışı kolayca genişletir; A5o ile call'ı genişletmez — kolay olan raise, zor olan call. Geniş açılış + sim-dar call = dev raise-fold dilimi → rejam neredeyse any-two'ya açılır (kabaca iki-üç kat *(kalibre et)*); arkadaki HER pozisyon — 20bb'lik HJ dahil — rejam'i sertçe genişletir. **Kural:** lidere karşı rejam genişliğini açılış yüzdesinden değil, "hafif bir call GÖRDÜM mü?" sorusundan kur. Geniş açıyor + hiç hafif call görülmedi → rejam aralığını dramatik aç (suited Ax/Kx, broadway, tüm çiftler); bir hafif call görüldü → sim'e dön, standart. Bant: 12.1-EK'in lisansı geçerli — ~25bb altı; üstünde ağaç non-all-in 3-bet'e kayar, "makas" argümanı geniş jam satın almaz. Ters koltuk: lider olarak açılışı genişletiyorsan jam'e call'ını da genişlet; yoksa makası sen açarsın ve HJ'ın 27 puanlık *(kalibre et)* rejam'ini sen finanse edersin.

### 12.4-EK-5 Sığ BvB, düşük prim — SB'nin küçük 3-bet'e birkaç puan fazla fold'u BB'nin blöf 3-bet'ini patlatır; exploit'ler aşırı hassas, emin değilsen uçlardan kaç

Kök hata: SB ~%30 açıp BB'nin küçük (3x) 3-bet'ine "ICM, daral" refleksiyle J9o/74s/Q3s'i katlamak. Mekanizma: düşük primde (kısa BB'ye karşı SB primi tek hane *(kalibre et)*) küçük 3-bet SB'ye dev fiyat verir; teorik SB devamı çok geniştir — orta suited/offsuit bağlantılılar CALL, Q3s/QTo tipi jam, raise-fold dilimi küçük. SB fold'u iki-üç puan artınca (offsuit 9x + zayıf suited'lar fold'a) BB'nin 3-bet blöf dilimi katlanır — value aynı kalır, blöf tek haneden kırka *(kalibre et)*. Meta-ders: bu sınıftaki her exploit bir-iki puanlık ayarla "çok pasif ↔ çok agresif" arasında zıplar. Sinyal net değilse teoriye yakın dur; netse teoriye sadakat değil kâr — rakip açık hata yaparken denge oynamak da bir leak'tir. **Kural:** sığ BvB'de düşük primle SB'ysen küçük 3-bet'e fold'u dar tut (jam + call, raise-fold azınlık — çift yerine bağlantılı el bile call); BB'ysen SB'nin küçük 3-bet'e fold'unu gözle — bir kez fazla fold gördüysen blöf 3-bet'i sertçe aç, value'yu değiştirme.

### 12.5 Kısa stack ICM istisnası — DİKKAT

⚠️ **"ICM'de daralt" HER ZAMAN doğru değil.** Herkes kilitliyken kısa stack'in doğru oyunu GENİŞLETMEKtir — kimse seni ödemek istemez. Bu bandda "genel daralt" refleksi aktif olarak yanlış tavsiyedir.

**<15bb jam kartı** *(kalibre et — ≤6 satır: yalnız BTN/SB/BB + "ilk giren"; chipEV jam aralığı + ICM düzeltme sütunu; tam Nash tablosu yazılmaz, "molada bakılır" karakteri korunur)*.

**B0 c.13:** *ICM'de marjinal call = kök hatanın turnuva-hayatı sürümü.*

### 12.5-EK Küçük prim jam'i RAISE'e çevirir — 10–15bb'de jam-or-fold ezberi primle raise/limp/flat dokusuna döner

Kök hata: kısa yığında "chipEV'de jam-or-fold'dum, ICM'de de öyle" diye devam etmek. Jam tüm yığını riske atar, tam primi öder; min-raise iki blind riske atar, neredeyse sıfır prim öder. Aynı anda rakiplerin jam'e call aralığı primle daralır — jam daha az kazanır, raise daha az kaybeder. Sonuç iki puanlık primle bile belirgin: erken pozisyon jam payı düşer, min-raise payı belirgin yükselir *(kalibre et)*; büyük çiftler ~15bb'de bile non-all-in 3-bet'e döner; BvB'de chipEV'nin limp/jam ikilisine küçük raise dilimi eklenir (tepe + jam'lenemeyen zayıf yüksek-kartlı eller raise-fold); hatta min-raise'e karşı 10–12bb'de birkaç flat açılır — hiçbir iyi eli katlatmayan ama iyi flop gören suited broadway, jam yerine call. Cover edilen taraf bunu bilir: bu bantta jam aralığının daralması, fold aralığının genişlemesi DEĞİLDİR — raise'e kayıştır. Kural: ≤15bb + prim ≥ birkaç puan → ağaca non-all-in raise'i ekle; jam'i "raise'e katlanamayacağım ama jam'e call bulamayacağım" ellere daralt, tepeyi raise-call'a, en zayıf yüksek-kartlıları raise-fold'a yaz *(sınırlar: kalibre et)*. 30.0'ın "4–12bb açış = jam ya da fold"u ICM-siz baseline'dır; 30.0-EK'in cover-eden istisnası burada cover-edilen için de açılır *(çoğunlukla)*.

### 12.5-EK-2 Ölü para jam genişliğini ölçekler — büyük ante jam'i açar, küçük ante/az oyuncu jam'i raise'e döndürür

Kök hata: aynı stack + aynı primle her yapıda aynı jam aralığı. Mekanizma: jam'in fold-EV'si potun ölü parasıyla orantılı, riski stack'inle sabit. Hyper/turbo'da büyük ante (potta ~1.25bb ölü) jam'i ~%29'a açar; aynı spot normal ante'yle (~0.6bb) ~%21'e iner *(kalibre et)* — T9o/97s pure jam'den fold'a, A2o jam'den raise'e kayar. Ters uç: mini-saha bubble'da küçük ante + iki blind de sana karşı primsiz → cover eden 45bb'nin jam dilimi SIFIR, yalnız raise (~%40; kalibre et). Ve 4-handed'da potta yalnız 0.5bb ekstra → jam'e call fiyatı kötüleşir, marjinal call (A4o) düşer. Kural: jam aralığını üç şeyle ölçekle — ölü para (ante boyu + oyuncu sayısı), rakibin primi (yüksekse jam), kendi primin (düşükse jam). Üçü de küçükse jam yok, raise. 22.10'un tam-BB ante notu bunun blind-geometrisi yüzü; 12.5 jam kartına "ante sütunu" olarak okunur.

### 12.5-EK-3 RFI dokusu BB'nin SAVUNMA genişliğine göre — kimse savunmuyorsa bloker-ağırlıklı (A5o açar, JTs fold), geniş savunan lider BB'ye suited-ağırlıklı (T8s açar, A8o fold); EP'den open-jam sıfır; offsuit Ax "U"su

Kök hata: FT'de tek RFI chart'ı; "suited connector iyi el, açarım". Mekanizma, üç parça. (1) Doku: arkadaki blind'lar kısa/kilitliyse flop neredeyse hiç görülmez, oyun "raise → jam ya da fold"tur; A/K blokeri arkadakilerin jam kombolarını siler ve blöflerini azaltır → A5o/A7o/K9o açılır, JTs/T9s/Q8s katlanır. Arkada seni cover eden ve geniş savunan lider BB varsa flop sık görülür → suited/bağlantılı eller (T8s/Q8s/98s) açılır, A8o/QTo/A5o katlanır. Aynı koltuk, iki zıt aralık — belirleyen BB'nin savunma genişliği. (2) EP'den open-jam: prim ortayken (%11–12 *(kalibre et)*) ve arkada çok covering stack varken orta eller (KTs/AQs) jam'leyemez — çağrılınca ezilir; orta jam'leyemiyorsa tepe de jam'lemez (AQ jam'i AJ'yi katlatır, çiftler öder — min-raise aynı işi yapar ve blöf-jam indükler) → open-jam %0, aralık dar ve bloker-ağırlıklı (suited Ax, offsuit broadway, A9o; 66/T9s yok). Open-jam geri gelir: sen orta stack, kısalar prim taşıyor, lider de sana karşı prim taşıyorken ("bana karşı geniş ödeyemezler") → 55+/suited broadway/KJo jam. (3) Offsuit Ax "U"su: AJ+ jam'ler (ara sıra kötüsünden ödeme alır) ve A5o- jam'ler (A6–A9 gibi iyisini katlatır); A8–ATo JAM'LEMEZ — daha iyisini katlatmaz, kötüsünden ödeme almaz → raise: BB'ye karşı raise-call, SB'nin jam'ine raise-fold. Kural: RFI'ı açmadan önce arkaya bak: "flop görecek miyim?" Hayır → bloker, suited connector fold; Evet → suited, orta offsuit Ax fold. Open-jam'i orta ellerin jam'leyebilmesi lisanslar; offsuit Ax'te ortası raise, uçları jam.

### 12.6 FT derinliğinde postflop para defteri — tepe CALL'a geçer, raise orta-kırılganın işi; raise'i potla ölçekle

B12 preflop defteri verir; 20-40bb FT derinliğinde postflop defter de döner. Derin stack'te check-raise value'su en güçlülerden kurulur; düşük SPR'de para iki sokakta zaten girer ve rakip river'a kadar ince value basar → set/en güçlü eller çoğunlukla CALL defterine (trap) geçer, check-raise malzemesi güçlü-ama-kırılgandır (iyi top pair tipi): senden bir per aşağıdaki dilim (orta çift, zayıf per) turn'de pasifleşir, ondan parayı ancak raise koparır — senden iyisi seni zaten stack'ler, o kayıp sabittir. Rakibin bet'i küçüldükçe (SPR fiilen yükseldikçe) tepe raise'e geri girer *(sınır: kalibre et)*. Ve raise'i bet'in katıyla değil POTLA ölçekle: ICM masasında moda olan 1bb'lik minik c-bet'e "bet'in 3 katı" raise fiilen bedava fiyat verir — küçük bete karşı raise pot cinsinden anlamlı olmalı. Havuz aynası: saha tam tersini oynar — tepesini heyecanla raise'ler, ortayı flat'ler — yani düşük-SPR'de GELEN flop raise'i dengeden value-ağırdır → bir kademe kat. *(ICM primi bu eşiklerin üstüne ayrıca biner — B21; bu satır defterin bileşimini verir, eşiğini değil.)*

**Kural:** Kısa derinlikte en güçlü el raise etmek zorunda değildir — para zaten girer; raise, altındaki dilimden para koparan kırılgan value'nun işidir ve boyu bet'e değil pota göre kurulur.

---

## Bölüm 13 — Multiway Pot Doktrini

*★ v5. B7 kök hatayı "şişmiş VEYA MULTIWAY potta yanlış sınıflandırma" diye tanımlar ama gövdede tek multiway postflop kuralı yoktu. Bu bölüm o borcu öder. Main (€5.3K) rec-ağırlıklı: geniş açılış + çok coldcall = potların çoğu multiway. 4 event içinde en uzun süre geçireceğin doku.*

### 13.0 Çekirdek

> **Her ek oyuncu blöfün fiyatını KATLAR, value'nun barını YÜKSELTİR, nut'un değerini ARTIRIR.**

Sebep bileşik olasılık: rakip sayısı arttıkça birinin iki-per+/set olma ihtimali katlanır. Bu yüzden multiway şişmiş pot, tek per'i HU şişmiş pottan bile daha net bluff-catcher yapar.

### 13.0-EK Çok-yollu para yığılınca eşik nut + redraw'a iner — flop'a çoğunlukla tek bet girer
Herkesin sık vurduğu bağlantılı board'da multiway normu şudur: flop'a çoğunlukla tam bir bet girer, üstüne gelen her agresif aksiyon devam kümesini sert daraltır. İki agresyon üst üste bindiğinde (raise + jam ya da raise + call + baskı) devam eşiği "güçlü el"den "nut + redraw"a atlar: redraw'suz ikinci nut bile sınırda fold'dur, overpair ve çıplak top-two raise-sonra-fold sınıfına düşer. Bu, 13.0'ın "nut'un değeri artar" cümlesinin icra hâlidir — değeri artan şey senin bir kademe altın değil, gerçek nut ve yanındaki redraw'dır.

**Kural:** Multiway'de ikinci agresyondan sonra stack-off sorusu "elim kaç puan" değil "nut mu, redraw'ı var mı"dır — ikisi de hayırsa kaçıncı nut olduğunun önemi yoktur.

### 13.1 HU → 3+ yollu geçiş

| Durum | Heads-up | 3+ yollu |
|---|---|---|
| **C-bet frekansı** | Yüksek | Çöker — sadece güçlü value + gerçek nut-draw |
| **Top pair** | Value | Bir sınıf düşer → check / pot kontrol |
| **Overpair** | Büyük pot adayı | İki sokak + kontrol; SPR'yi say (B11) |
| **Blöf** | Üç kriter (B1) | Neredeyse yok — sadece nut-bloker semi-bluff |
| **Nut FD** | Bet | Bet kalır (fiyat iyi, tamamlanınca çok ödenir) |
| **Non-nut FD / gutshot** | Duruma göre | Check'e döner / ölür |

### 13.1-EK Multiway'de agresyon lisansını el değil KOLTUK verir
Aynı elle iki zıt karar, tek eksenden çıkar: aksiyonu kapatıyor musun? Arkanda henüz konuşmamış oyuncu varken bir bet'e (hatta bet+raise'e) karşı en güçlü ellerin bile çoğunlukla sadece call eder — turn'ü ucuza görürsün, pozisyonun/bilginin değerini taşırsın ve aralığını bölerek arkadakine bilgi vermezsin; iki-per ve open-ender yoğun bir devam aralığı bile bu düğümde tümüyle call'a döner. Aksiyonu kapatan oyuncu ise tam tersini yapar: en iyi ellerini hemen raise'ler, çünkü bir kişiyi bile katlatmak equity'sini ciddi büyütür ve "ucuza turn görmek isteyen" marjinal eli azdır. Sınır: herkesin sık vurduğu çok bağlantılı board'da nut bile kabaca %70, set %60 equity'ye düşer *(kalibre et)* — orada kapatan oyuncu da pasifleşir, kartın vereceği bilgiyi bekler.

**Kural:** Multiway'de raise'e uzanmadan önce koltuğunu say: kapatıyorsan tepeyi hızlı oyna, arkanda oyuncu varsa en güçlü elin bile çoğunlukla call — istisna, nut'un bile eridiği aşırı bağlantılı board.

### 13.1-EK-2 Tuzağın şartı "kalan rakip senin yerine bet atacak agresör"dür — araya call girince tuzak biter
En zayıf aralıkla agresöre karşı HEADS-UP kaldıysan tepenin saf slowplay'i baskındır: agresör senin zayıf aralığına turn/river'da parayı kendisi yığar, raise'leyerek onun blöflerini kovmuş olursun. Ama araya bir caller girdiği anda bu hesap bozulur — agresör artık ince value kesemez, tuzağın ödemesi düşer — ve aynı iki-per/iyi top pair sınıfı hızlı oyuna döner. Yani multiway'de "trap mi fast-play mi" sorusunun cevabı elinde değil, masada kalan kombinasyondadır.

**Kural:** Tuzak yalnız "kalan tek rakip = bet atacak agresör" düğümünde çalışır; pota bir caller karıştıysa tepeni hızlı oyna.

### 13.1-EK-3 Savunma eşiğini sınıf adı değil out sayısı çizer
13.1 bet tarafını verir; savunma tarafında eşik İYİLEŞME out'una bakar. "Küçük bete pair fold edilmez" HU refleksi multiway'de kırılır: board altı cep çifti 2 out'luk bir eldir — set dışı hiçbir turn'de value alamaz ve her blöfün ona karşı canlı equity'si vardır; 5 out'lu bottom pair ondan net iyidir, backdoor'lu bottom pair rahat devam eder. Kötü uçtan düz kuran gutshot da düşer: multiway'de non-nut düzü tamamlamak kazandırmaz, stack kaybettirir — üst ucu tutan kombolar rakip aralıklarında fazladır.

**Kural:** Multiway savunmada eli out sayısı + out'ların NUT'luğuyla tart; 2 out'luk cep çifti, 5 out'luk bottom pair'in altındadır.

### 13.2 Kimden korkuyorum

Preflop caller'ların hepsi değil — **flop'ta hâlâ DURAN en sıkı aralık.** Birinin bet'ine aradaki call'dan sonra gelen raise = neredeyse her zaman nut; tek perle devam yok.

### 13.2-EK "Aradaki call'dan sonra raise = nut" kuralının sınırı: gutshot-yoğun board
13.2'nin nut okuması, raiser'ın doğal semi-bluff malzemesinin OLMADIĞI dokularda en güçlüdür. Üç-gap tipi, gutshot'ı bol ama open-ender'ı olmayan statik board'da en zayıf aralığın squeeze check-raise'i zorunlu olarak blöf taşır: value komboları (birkaç set + suited iki-per) o kadar azdır ki aralık yalnız nut'tan kurulamaz, gutshot ve alt-per+backdoor'dan düşük frekansla blöf almak zorundadır. Bu yüzden böyle board'da iyi top pair teoride fold edilmez — raiser'ın polar ama blöf-içeren aralığına karşı savunma bölgesindesin. Havuz gerçeği ayrı katmandır: rakip bu blöfleri bulmuyorsa 13.2'nin fold'u exploit olarak geri gelir.

**Kural:** Raise'in "nut" damgası board'un blöf stoğuna bakılarak basılır: doğal semi-bluff'ı bol board'da iyi top pair'i teoride savun, blöf bulamayan havuza karşı katla.

### 13.2-EK-2 Devam eşiğini el değil ARALIK + koltuk koyar — flatter'ın top pair'i açıcının top pair'i değildir
Aynı elle aynı check-raise'e karşı iki farklı doğru vardır: açıcı, güçlü aralığının şemsiyesi (bol overpair/set) ve pozisyonuyla marjinal ellerini rahat taşır; en zayıf devam aralığına sahip flatter ise aynı top pair'i sınırda fold eder — eli aynıdır, aralığı ve koltuğu farklıdır. Zayıf aralıkta orta-güç el iki kez cezalıdır: şemsiyesi yoktur ve raiser bunu bilir — kapaklı flatter'a barrel, güçlü açıcıya barrel'dan belirgin daha sık gelir *(kalibre et)*. Saldırı yüzü aynı yasa: multiway check-raise'inden sonra basacağın kişi, arkada kalan güçlü aralık değil, kapaklı flatter'dır.

**Kural:** "Devam edebilir miyim" sorusunu elinle değil aralığınla cevapla: şemsiyesiz aralıkta her sınıf bir kademe iner — ve barrel'ını da şemsiyesiz aralığa bas.

### 13.2-EK-3 Multiway check-raise'e karşı bloker süzgeci: raiser'ın blöf sınıfını tutan el fold'a düşer
Devam seçiminde ham güç sıralaması yanıltır; süzgeç, elinin raiser'ın HANGİ aralığından kombo sildiğidir. Orta cep çiftleri (board'un altındaki TT–88 tipi) en kötü sınıftır: raiser'ın gutshot blöflerini bloklar, nut'a neredeyse dönmez, set çevirdiğinde bile sık domine yaşar — çoğunlukla saf fold. Alt per + düşük backdoor da benzer tuzaktır: o kombo raiser'ın KENDİ blöf sınıfıdır — hem blöflerini bloklarsın hem aynı ele çarptığında dominesindir, flush'ın da nut değildir. Kalan devamlar nut'a dönebilen uçtur: üst kicker'lı per ve backdoor'un NUT olan sürümü — backdoor flush'ın değeri varlığıyla değil, raiser'ın per+backdoor kümesine karşı nut'luğuyla ölçülür.

**Kural:** Check-raise'e karşı elini "kaç puan" diye değil "kimin aralığından kombo siliyor, tamamlanınca nut mu" diye süz; raiser'ın blöf sınıfını taşıyan eller katlanır.

### 13.2-EK-4 Arkada oyuncu varken pot odds'u düzelt
Multiway'de bir bete karşı fiyatını yalnız potla değil, arkada söz hakkı olan oyuncunun raise frekansıyla oku: o frekans kabaca p ise gerçek call fiyatın "fiyat ÷ (1−p)"dir — raise frekansı kabaca üçte birse 25 birimlik call fiilen ~37 öder, çünkü raise geldiğinde o parayı yakıp katlanacaksın. Test cümlesi: "Bu devam aynı bete karşı HU'da net kazanıyor mu — ve fazladan ödediğim farkı geri getirecek kadar mı?" İki oyuncuya bet atan bir aralığa karşı sınırda görünen call'ların çoğu bu düzeltmeyle fold'a döner. Arkadaki oyuncunun raise etmediğini biliyorsan (havuz overcall sever) sınırdaki eller geri gelir — en çok da out taşıyanlar *(kalibre et)*.

**Kural:** Arkada raise edebilecek oyuncu varken call fiyatını (1 − raise frekansı)'na böl; HU eşiğinin üstüne bir bar koy.

### 13.2-EK-5 Multiway'de boy tarihini river'a taşı
Multiway potlar HU'dan kat kat az tekrar eder — aynı üç-yollu düğüme kariyer boyunca çok az rastlarsın, havuz da bu düğümleri az çalışmıştır; sonuç, gerçek insan davranışının HU'ya göre daha dengesiz ve dürüst kaldığı boylardır. Bu yüzden multiway'de tek bir sokağın boyuna değil, ELİN O ANA KADAR GÖSTERDİĞİ TÜM boy dizisine güven — aynı rakip aynı elde flop'ta büyük atıp turn'de minik'e düşüyorsa, bu genelde iki ayrı sınıf değil TEK bir hattaki niyet değişimidir (koruma bitti, şimdi pot kontrolü/ince değer ya da vazgeçiş). Büyük bir river kararına gelmeden önce elin başından itibaren her boyu tek tek geri çağır — yalnız son karta bakıp "call mı fold mu" diye tünel görüşe girme.

**Kural:** Havuz multiway'i az çalıştığı için boylar dengesiz ve dürüsttür — river kararından önce elin o ana kadarki TÜM boy dizisini geri çağır, tek bir sokağın boyuna ya da tek elin içindeki boy değişimine sınıf ayrımı diye bakma.

### 13.3 Multiway'de blöf — dördüncü kriter

B1'in üç kriteri (bloker/bağlantı/board sahipliği) tek rakibe kurgulandı. Multiway'de dördüncü değişken: **rakip sayısı = blöfün geçmesi gereken kapı sayısı.** Tek station bile blöfü öldürür.

| Rakip sayısı | Blöf modu |
|---|---|
| **HU** | Üç kriter (B1) |
| **3 yollu** | Sadece nut-bloker semi-bluff |
| **4+ yollu** | Yok |

B1.4 "kime blöf yapılmaz" listesine eklenir: **Multiway pot (kim olursa olsun).**

### 13.3-EK Multiway check-raise'i value SAYIN çıpalar — blöfü komboyla değil frekansla yönet
Multiway check-raise aralığının tavanını elindeki value kombosu sayısı koyar: value payın aralığının küçük bir dilimiyse toplam raise frekansın onun katına zincirlenir; gutshot'ın aralıkta ne kadar bol olduğu seni ilgilendirmez *(value payı ve çarpan: kalibre et)*. Bu, 3-yollu check-RAISE düğümünün teori katmanıdır; 13.3'ün "sadece nut-bloker semi-bluff / 4+ yollu blöf yok" tablosu blöf bulamayan havuza ve 4+ yollu potlara karşı geçerli kalır. O düğümde doğru inşa "en iyi blöf kombosunu seçmek" değil, ÇOK sınıftan (gutshot, alt per + backdoor, ikinci per + kicker-bağlantısı) düşük frekansla azar azar çekmektir; alt per, sezgiye aykırı biçimde gutshot'a yakın sıklıkta raise'ler. Tüm blöfünü tek sınıftan (yalnız gutshot'lar) çekersen iki bedel ödersin: aralığın okunur olur ve o sınıf river'a vardığında ya hepsi pes etmiştir ya da hiç blöfün kalmamıştır.

**Kural:** Value sayısı frekansı, çeşitlilik komboyu yönetir: 3-yollu check-raise düğümünde raise blöfünü tek doğal sınıftan değil, birçok sınıftan düşük frekansla topla — 4+ yollu potta ve blöf bulamayan havuza karşı 13.3'ün tablosu geçerli kalır.

### 13.4 Multiway PLO

Canlı PLO'nun varsayılan hâli multiway (limp/çoklu-call normu). "İkinci en iyi el pahalıdır" kuralı multiway'de "ikinci en iyi el stack'ini kaybettirir"e döner. Non-nut flush draw multiway'de ödeme makinesidir; nut-uçlu wrap değeri artar (tamamlanınca çok yönlü ödenir). Sadece NUT'a oyna. (Ayrıntı B15.)

**B0 c.14:** *Multiway'de tek per, HU'dakinden bir sınıf aşağıdır.*

### 13.5 3-yollu dengeyi kim taşıyor — gerilim noktasını bul, exploit'i oradan yap
Üç aralıklı bir flop'ta denge tek bir eksende kurulur: agresörün bet frekansı ile İKİNCİ-güçlü aralığın check-raise frekansı birbirini sınırlar; en zayıf aralık bu oyunun oyuncusu değildir — stratejisi basit, pasif ve kaçınılmazdır. Bunun exploit haritası nettir: açıcı fazla c-bet ediyorsa cevap ikinci-güçlü koltuktan gelir (karışık kombolarını saf raise'e çevir), en zayıf koltuktan gelmez — orada çevirecek kol yoktur. Açıcıysan da korkun caller değil, polislik yapan aralıktır: onun raise'i azsa marjinallerini bet'e ekle, çoksa bet aralığını raise'e dayanıklı ellere daralt.

**Kural:** Multiway flop'ta önce "dengeyi kim taşıyor" diye sor; sapmayı da düzeltmeyi de o iki koltuk yapar — en zayıf aralık seyircidir.

### 13.5-EK Statik board'da devam = raise; orta el diye bir şey kalmaz
3 yollu potta equity çıpası 33'tür; %50 equity HU'daki gibi yazı-tura değil, çok güçlü eldir. Sonuç: bet + call görmüş statik board'da açıcının aralığı ikiye yarılır — raise'e rahat yeten güçlüler ve hiçbir şey; showdown'a sürünecek orta el kalmadığı için devamların neredeyse tamamı raise olur *(çoğunlukla — kalibre et)*. Genel ilke de bu: aralığında showdown'a sürünen orta el kalmadıysa devamlarını agresyona çevirmek doğrulaşır. Sınır: FD'li board eşitlikleri sıkıştırır — yapılmış elin taşıyabileceği blöf oranı düşer, draw'lı devamlar çoğalır → call aralığı geri gelir, "hepsi raise" sadeliği bozulur.

**Kural:** Statik multiway düğümde devam çoğunlukla raise'dir; board dinamikleştikçe call aralığı geri gelir.

### 13.6 Multiway şeffaflık serbestisi
HU'da güçlü elle ara sıra check etmen gerekir ki check aralığın savunmasız kalmasın; multiway'de bu ihtiyaç düşer. İki rakibin varken her düğümde güç saklayabilen BİRİ vardır — sen her elle en doğal hattı oynasan bile kimse "aralarında güçlü el yok" varsayımıyla saldıramaz; seni rakiplerin varlığı korur. Value bet'ini at, orta elini kontrol et, aralık-koruma check'lerini HU potlara sakla.

**Kural:** Multiway'de doğal olanı yap — deception bütçesi HU içindir, burada diğer oyuncular aralığını senin yerine korur.

### 13.7 Multiway'de lead, en zayıf aralığa kesilen vergidir — ve açıcıyla fiili işbirliğidir
Dinamik orta board'da coldcaller'ın lead'i "board bana vurdu" okuması değildir; asıl işi, en zayıf aralığın bedava kart görüp ucuza realize etmesini engellemektir. Bu verginin bir kısmı açıcıya da akar: sen lead atınca check aralığın zayıflar, açıcı iki check gördüğünde çok daha sık bet atabilir hâle gelir — lead atan ile açıcı, üçüncü oyuncuyu birlikte sıkıştırır. İki yan ürün: (1) check'te tuttuğun set, lead sayesinde canlanan c-bet'in üstüne check-raise ile kazanır; (2) 3-yollu potta atlanan lead otomatik senin kazancın değildir — lead'siz bıraktığın EV neredeyse tamamen EN ZAYIF aralığa gider (bedava realizasyon); açıcı da lisanslı c-bet'ini kaybettiği için bundan kazanmaz.

**Kural:** Multiway lead'in pusulası "board kimin?" değil "en zayıf aralığın bedava kartını kim vergilendirecek?" sorusudur — ve 3-yolluda lead'siz bırakılan EV'nin adresi çoğunlukla en zayıf aralıktır, otomatik sen değilsin.

### 13.8 Raiser'ı ödedikten sonra turn lead haritası: overcard'lar CALL'cunun kartıdır
Flop check-raise'ini call'ladıysan turn'de roller sezgiye ters dağılır: raiser'ın aralığı board-per'i ve gutshot ağırlıklıdır, senin aralığın ise broadway top-pair'lerle doludur — A ve K turn'leri bu yüzden SENİN kartlarındır ve OOP'tan raiser'a lead açılır *(frekans: kalibre et)*; düşük ve board'u bağlayan turn'lerde lead ölür, saf check'e dönersin. "Korkunç overcard geldi, check-fold moduna geç" refleksi burada tam ters çalışır: o kart raiser'ın semi-bluff'larının hiçbirini iyileştirmemiştir. Bu, 19.12'deki c-bet'çiye-karşı haritanın (orta-düşük kartlar lead'cinindir) ayna tersidir — düğüm değişince harita da tersine döner.

**Kural:** Check-raiser'a karşı turn lead'ini overcard'larda ara, bağlayan kartlarda unut: kimin kartı olduğunu rank değil iki aralığın kompozisyon farkı söyler.

### 13.9 Fold bir karttır
Multiway flop'ta pasifliğe mecbur kalan uncapped savunucu, oyunculardan biri fold edince yeniden fiyatlanır: durum değişti — artık HU'sun, aralığın uncapped ve pasiflik zorunluluğun kalktı. İyi turn beklemeden bile küçük koruma-value lead'i açılır: rakibin hava kütlesinden anında fold toplar, bedava kartın maliyetini keser. Bazı kartlarda top pair value ile geometrik büyük lead bile oynanır — rakip aralığı hava-ağırsa river jam'ini kuran boy sınırda ama gerçektir *(kalibre et)*; havuz bunu neredeyse hiç yapmaz, yapana karşı savunmak da zordur.

**Kural:** Bir oyuncunun fold'unu iyi bir turn kartı gibi oku — kapanan aksiyon lead hakkını geri verir.

### 13.10 Offsuit kombo tekeli — düz turn'ünde bomba lead
Preflop'ta offsuit bağlantılıları yalnız savunucu oynar; diğer oyuncular o elleri ya 3-bet etti ya attı. Flop aksiyonu aralıkları sıktıkça bu tekel büyür: düzü tamamlayan turn'de savunucunun aralığının dev bir dilimi tek el sınıfına, o düze çöker *(pay: kalibre et)*. O kartta check etme, bombala: diğer oyuncuların aralıkları showdown-bound'dur — kimse senin yerine bet atmaz, check trap değil bedava kart olur. Sayım tersine de işler: rakiplerin suited kombolarıyla paylaştığın düz kartları (tekelin olmayanlar) aynı lead'i vermez.

**Kural:** Savunucunun offsuit tekelindeki düz tamamlanınca lead zorunludur — multiway'de o potu senin yerine kimse büyütmez.

### 13.10-EK Turn'ü kombo sayarak oku — flop rengi ve kicker bağı aralığını şekillendirir
Multiway savunma aralığın sandığın gibi dağılmaz. Bir: offsuit eller yalnız kicker'ı board kartına bağlıyken devam eder, suited üst per'lerin bir kısmı preflop 3-bet'e gitti — bu yüzden turn'e ikinci per, top per'den KALABALIK gelebilir; hangi board-pair'in sana yaradığını bu sayım söyler. İki: bir per sınıfını yalnız backdoor FD şartıyla devam ettiriyorsan, o rengin eşleşme turn'ü kendi trips kombolarını öldürür — rainbow flop'ta board-pair turn'de trips'in bolken, iki-renk flopun aynı kartı neredeyse boş gelir *(kalibre et)*. "OOP board pair'de hep küçük lead" ezberi bu yüzden kırılır; o ezberle her board-pair'e lead atan rakibe karşı over-fold etme, semi-bluff raise'lerini aç.

**Kural:** Hangi turn'ün kime yaradığını doku ezberi değil kendi devam kombolarının sayımı söyler.

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

### 14.1-EK Köprü bandında 3-bet'in postflop tehdidi
Bu bantta 3-bet'in commit'e yaklaşması preflop'ta kalmaz: 40bb civarı 3-bet potunda flop SPR ≲2'dir, flop call çoğunlukla fiilen stack-off'tur ve flop bet + turn jam tehdidi caller'ın çekilişlerini kayıtsız bırakabilir. 100bb'de bu tehdit ortadan kalkmaz, gecikir: turn jam overbet olur (turn SPR ≳1.5) ve caller çekilişini flop'ta commit olmadan taşıyabilir. Aynı dinamik yüksek board'da (J-T-x tipi) 40bb büyük boy bu yüzdendir, 100bb'de pot-boy; üç-broadway'de ise caller'ın yoğun iki-per/düz payı (ince nut avantajı) boyu her derinlikte küçüğe iter *(kalibre et)* (bkz. B32.3, B32.5). 3-bet edeceğin el postflop'ta jam/check ağacını taşıyabilmeli.

### 14.1-EK-2 40bb squeeze-jam: bloker HANGİ aralığı kesiyor — ve polar squeeze'e karşı 4-bet

Squeeze-jam'in EV'si iki kaynaktan gelir: fold ettirilen eller + ödenince equity. **A/K bloker** ödeyen aralığı (AA/AK/AQ/KK) inceltir → fold equity yükselir, ödenince suited Ax canlı — iyi çalışır. **J/T bloker** rakiplerin ZATEN katlayacağı elleri (JTs/QJs/KJs) siler → kalan aralıkta ödeyen payı büyür, fold equity düşer; ödenince AK/AQ/JJ+ domine eder. Aynı As iki zıt karar üretir: suited düşük Ax jam, offsuit AJ sınırda/karışık — A-blokeri jam'e iter, J-blokeri frenler; pozisyon ve açıcı aralığına göre *(kalibre et)*. Omurga orta-yüksek çiftler + AK/AQ, blöf tarafı suited düşük Ax; A/K-yüksek suited broadway (AKs/AQs/KQs) jam'e girer, J/T'li suited broadway (KJs/QJs/JTs) bu bantta çoğunlukla jam değil call/fold; suited düşük Kx sınırda *(kalibre et)*. Test: "kartım rakibin CALL aralığından mı, FOLD aralığından mı kombo siliyor?" Call'dan siliyorsa jam.

**Açıcı olarak polar squeeze'e karşı:** 40bb'de squeezer koyduğu paraya göre jam'e iyi fiyat alır (kabaca 2:1'e yakın — kendi boyunla hesapla) → fiyattan geniş öder: 99+/AQ/AJs/KQs tipi *(kalibre et)*; o ödeyen aralığa karşı TT–JJ favori DEĞİL, kabaca coinflip/hafif altında *(kalibre et)*; jam'i çoğunlukla +EV yapan, ödenince önde olmak değil, polar squeeze'in blöf yarısının fold'u + potta biriken ölü paradır — sınırda, kalibre et. "Yalnız senden iyiler öder, yendiğin blöfler katlanır" 100bb mantığıdır, bu banda taşıma. Call daha çok orta çiftler (88–99 tipi) ve sınırda TT için *(kalibre et)* — squeeze blind'lerden geldiyse (squeezer'a IP) ve sandviç caller'ın overcall olasılığı düşükse; sandviç caller hâlâ arkada olduğundan call aksiyonu hiçbir senaryoda kapatmaz, geç pozisyon squeeze'ine karşı OOP'sen jam/fold ağırlığı artar. A-blokerli suited Ax ve AK jam. Küçük çiftler karışık.

**Boy:** sandviç caller aksiyonu kapatır ama 40bb'de squeeze boyu stack'e göre büyük ve aralığı kapaklı; call, SPR≈1–2 çok-yönlü pot bırakır → çoğunlukla fold/jam'e düşer, flat nadir → onu fiyattan mahrum etmek için büyümene gerek yok; açıcıya göre orta boy *(kalibre et)*. B4.2'nin "her coldcaller +1 boy" kuralı 100bb+ içindir, 40bb'de gevşer.

### 14.1-EK-4 Squeeze-jam'i el değil BB'nin STACK'İ ve derinlik fiyatlar (30–45bb; loose açıcı + geniş flatter)

14.1-EK bloker testini verdi; ikinci eksen arkadaki stack. HJ geniş açıyor (loose açıcı; *çizgiler: kalibre et*), BTN geniş flat, sen SB:

- **BB seni cover ediyor mu?** BB seni cover etmiyorsa jam aralığı belirgin genişler; cover ediyorsa sert daralır *(eşikler: kalibre et)* — spekülatif suited Ax/düşük bağlantılılar cover eden BB'ye karşı EV kaybeder, yalnız premium çekirdek her koşulda kârlı kalır *(sınır eller: kalibre et)*. Cover edilmeyen stack'e karşı spekülatifler yaşar, cover edene karşı ölür (12.4 asimetrisinin jam yüzü).
- **Herkes derin mi?** Derinlik arttıkça jam aralığı daralır; çağıranların premium çift + en güçlü broadway'e sıkışması daralmayı kısmen telafi eder — 30bb'deki kadar geniş değil, yine de oynanabilir *(kalibre et)*.
- **Malzeme:** suited broadway omurga (QTs/KTs/KJs/T9s), suited Ax/Kx gövde — K7s'in K'sı AK/KK call kombolarını azaltır; küçük çift 77'den kötü değil.
- **Gambler freni:** rakip JTs/QTs ile call'lıyorsa çizgi hızla daralır; en loose'a saldır — nit flatter'a karşı bile jam frekansı sanıldığından yüksek kalır *(kalibre et)*.

**14.1-EK ile sınır:** orada standart açıcı + bloker analizi J/T'li suited broadway'i jam'den çıkarır; burada loose açıcı + geniş flatter (ölü para büyük, çağıranlar göreli sıkı) onları omurga yapar — koşul farkı, çelişki değil *(sınırda — kalibre et)*.

### 14.1-EK-3 Bloker testinin iki uzantısı: capped cold-caller'a 60bb jam (T9s) — ve reshove'da çiftin blokeri yoktur

**Capped cold-caller.** Havuz CO'da premium'u %100 3-bet'ler (4.6-EK) → call aralığı 22–99 + suited broadway; 60bb jam'e yalnız 99/AQs civarıyla öder → SB'den T9s/J9s/JTs jam'i +EV *(kalibre et)*. T9s en iyi aday: ödeyen 99'u bloklar, katlanan KQ/KJ/QJ/Axs fold'larını unblock eder — T'nin JTs/QTs/KTs fold'larını kesmesi küçük bir eksi, net yine artı. Bloker kuralı burada 14.1-EK'in tersine döner: J/T blokeri frenler — domine-eden broadway'i ödeyen aralıkta bırakırsa; iter — ödeyen aralık çiftlerden ibaretse. Kartın hangi aralıktan kombo sildiği cold-caller'ın kompozisyonuna bağlıdır. İki şart: cold-caller premium'larının bir kısmını slow-play'lemeye başlayınca pencere hızla kapanır — eşik frekans *(kalibre et)*; açıcı da premium dışını jam'e katlıyorsa pencere açık *(devamı: kalibre et)*, geniş ödüyorsa jam düşer. Sıkı açıcı + sıkı cold-caller'a K6s/K5s, K8s'ten iyi (8x onlarda). BB, raise+call+SB over-call sonrası daha geniş jam'ler — over-call ölü paradır.

**Reshove'da orta çift ≈ küçük çift.** Sıkı EP açıcı (77+/AJs+/AK) reshove'a TT+/AK/AQs ile öder; o aralığa karşı 99 ile 55 aynı equity — 55 raise-fold'dan (77/88/AJs) hiçbir kombo silmez, 99 yalnız açıcının katlanan 99'unu siler (küçük bir eksi). A5s ise AK/AA'yı bloklar, ödendiğinde canlı → çiftlerin üstüne çıkar *(sıralama: kalibre et)*. Reshove aralığı çift-ağır değil bloker-ağır: 99/TT sınırda, 55–88 çoğunlukla fold.

### 14.1-EK-5 4-bet'in OOP-cezalandırma değeri derinlik eşiklidir
Derin alanlarda (100bb+) OOP rakibi 4-bet potuna hapsetmenin değeri postflop'ta gerçekleşir — rakip büyük pota pozisyonsuz girer, SPR≈1.5–2'de bir-iki sokak boyunca zorlanır, sen equity'ni gerçek manevrayla realize edersin. Köprü bandına inildikçe bu mekanizma söner: SPR küçüldüğü için rakip 4-bet'e postflop manevrayla değil doğrudan JJ+/AK gibi tepe aralığıyla jam'le cevap verir — call ya da fold'a mecbur kalırsın, peşinde olduğun postflop-edge hiç sahneye çıkmaz. Yani "rakip buna OOP dayanamaz" gerekçesi 100bb'de gerçek bir kazanç kaynağıyken, köprü bandı ve altında aynı gerekçe boştur. Value aralığı bu köprüde DARALMAZ, GENİŞLER — commit eşiği yaklaştıkça QQ (ve 40bb'ye doğru JJ/AQs) de commit-value'ya girer (bkz. 14.1-EK-2) *(kalibre et)*; kalan gerekçe rakibin JJ+/AK gibi geniş bir jam aralığına karşı bu genişlemiş value'nun kendisi ve blokerli az bir blöftür (bkz. 14.1-EK).

**Kural:** OOP-postflop-cezalandırma gerekçesiyle 4-bet ediyorsan önce derinliğin buna izin verip vermediğini sor — rakip postflop yerine doğrudan jam'e dönüyorsa (köprü bandı ve altı) o gerekçe boştur, geriye derinlik düştükçe genişleyen value + blokerli az bir blöf kalır.

### 14.2 60bb → 40bb geçiş işaretleri

Banttan düşerken tablodan ilk çıkanlar: suited connector'la 3-bet blöfü, küçük çiftle spekülatif flat, offsuit broadway coldcall. B0 c.7'nin uyarısı (B4.7'de de tekrarlanır) burada somutlaşır: **"45bb'de 130bb aralığı oynamak en pahalı alışkanlık."**

*Kök hata bağı: mod-önce-aralık omurgasını (B0 c.7) iki uç band arasında tamamlar; yanlış-mod-aralığı, şişmiş pot üretiminin bir numaralı kaynağıdır.*

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

### 16.3-EK Otopside üçüncü kategori — doğru kavram, yanlış kombo
B16.3'ün otopsi ikilisi — (1) karar anında kural neydi, (2) kurala uydum mu — masadan getirdiğin bir exploit fikrini sonradan sim'le doğrururken üçüncü bir ayrıma ihtiyaç duyar: kavram mı yanlıştı, yoksa kavram doğruydu da kombo seçimi mi yanlıştı? Örnek: "bu düğümde blöf-lead var" tespiti doğruysa ama elindeki spesifik kombo yerine range'in başka bir dilimi blöflemeliydi — kombo hatası, blöf adayları arasında kaydığın sürece küçüktür ve fikri panikle terk etmeyi gerektirmez; ama showdown değeri olan bir eli blöfe çevirdiysen ya da rakibin fold range'ini bloklayan komboyla blöflediysen kayıp kavram hatası kadar büyük olabilir. Kavramın kendisi yanlışsa (o düğümde hiç blöf yoktu) kayıp daha büyüktür ve gerçek bir düzeltme ister. Otopside önce kavramı sınıfla, sonra kombo seçimini — ikisine aynı ciddiyeti verme.

**Kural:** Sim'e karşı otopside "kavram mı, kombo mu yanlış" diye ayır — doğru kavramda blöf adayları arasında kayan kombo küçük bir düzeltmedir; showdown değerini ya da rakibin fold'unu bloklayan bir komboyu blöflediysen kayıp kavram hatası kadar büyük olabilir.

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

### 16.5 Büyük kayıp sonrası 5-el kuralı

Otopsi #4'ün (AQs bust, B7 Vaka 8) asıl bulgusu zamanlama: yaklaşık 34K chip kaybeden 88 elinden İKİ DAKİKA sonra, seansta ilk kez stack'in %70'iyle preflop call-off geldi. Ondan önceki seksen elde benzer spot yok. Aynı kalıp cash serisinde de görünür: altı dakikada üç büyük pot, birkaç bin dolar. Mekanizma aynı — büyük kayıptan hemen sonra karar kalitesi düşer ve düşüş en pahalı elde gerçekleşir.

**Kural:** Büyük bir pot kaybettikten sonraki 5 el: yalnız premium (QQ+, AK) ile preflop all-in; 4-bet yapılmış her el 5-bet'e fold edilir. "Büyük pot" turnuvada = stack'in %25'i, cash'te = 100bb. Bu, 16.2 tilt kartının el-sayacı somutlaması: tilt'i hissetmeyi beklemez, kayıptan sonra otomatik devreye girer — hikâye-bazlı "telafi" kararını (B25) doğmadan keser.

### 16.6 Büyük-spot hazırlığı: haftayı EV'ye geriye planla, Day 3 / FT öncesi bir saatlik protokol

Turnuva EV'si saatlere eşit dağılmaz: derin run'ın son iki masası ve FT, serinin EV'sinin büyük kısmını birkaç geç-gece saatine sıkıştırır. 16.4'ün seri planına üç sütun: **en pahalı saat dilimi → uyku penceresi** (kritik günden önceki gece, bitiş saatinden geriye sayarak geç yat / geç kalk — 03:00'te "sabah" tazeliği *(kronotipine kalibre et)*) **→ gece-öncesi lojistik ✔** (yiyecek/su/kıyafet hazır, sosyal takvim serinin dışına ÖNCEDEN taşınmış). Çalışma malzemesi seans içinde işaretlenen 20–25 el (9.3).

**Bir saatlik protokol** (Day 3 / son 2–3 masa / FT öncesi, yazılı):
1. Lobiyi stack ve bb olarak yaz; dağılımı yorumla — çok kısa + küçük ara basamaklar = hızlı başlangıç → ilk 30–60 dk sıkı; derin dağılım → chipEV'ye yakın.
2. Her rakip için iki satır: ben onu nasıl görüyorum + **o beni nasıl görüyor** (blöf gösterdim → beni blöfe yatkın görür, bana daha hafif bluff-catch yapar → ona daha az blöf, daha ince value; ICM'i bildiğimi biliyor → baskı satar). En pahalı satır budur.
3. Çalışma saatini P(bu rakiple büyük pot) ile ağırlıklandır: büyük stack'lere saat, kısalara dakika.
4. Gördüğün showdown'lardan varsayımsal aralık kur, birkaç stack senaryosunda reshove eşiklerini önceden çıkar.
5. Ödeme merdivenini RAKİP için oku: basamağın onun bankroll'una göre büyüklüğü kimin taş kesileceğini söyler (12.3).

### 16.7 Varyans okuryazarlığı ve maruz-kalma planı — 16.1'in limiti buradan türer

Seri sonucu beceri ölçüsü değildir; plansız tam maruz-kalma da plan değildir. Seri öncesi üç satır:

1. **Yatırım hedefi → toplam limit.** "İstikrarlı akış" düşük varyans ister (küçük saha, yüksek hacim, kısmi satış); "büyük vuruş" yüksek (büyük saha, tam maruz-kalma). ICM'in bankroll sürümü: hayattaki stack rolün stratejini seçer. ROI'yi kötümser tahmin et — tahminin yarısıyla planla.
2. **Varyansı say** (kendi parametrelerinle bir varyans hesaplayıcısında): ~800 kişilik sahada %10 ROI, yılda 5000 turnuva → kayıp yıl ~%20, kayıp ay ~%40+, kayıp oturum ~%70; %20 ROI kayıp yılı ~%2'ye indirir ama kayıp oturumu neredeyse değiştirmez *(temsili — kalibre et)*. İstikrar isteyene: edge'i değil hacmi/saha boyutunu ayarla.
3. **Event başına dilim.** ABI'nin ~10 katı buy-in'de yılda 200 turnuva, %20 ROI'de bile hatırı sayılır bir olasılıkla *(temsilî: ~⅓ — kalibre et)* küçük-buy-in kârını siler. %20 ROI'li bilet nominalin ~1.2 katı değerdedir → 1.1 mark-up'la yarısını satmak swing'i (standart sapmayı) yarılar, prim yaratır; swap çoğunlukla kötü. Dik ödeme + büyük saha = en yüksek varyans → kısmi maruz-kalma.

Otopsi (16.3) "kurala uydum mu"dur: %20 ROI'de bile bir serinin kayıpla bitmesi ÇOĞUNLUKLA olağandır; kalibrasyonu sonuç değil kural ihlali değiştirir. Batmanın alt-sınırı vardır: kanıtlanmış geçmişle sermaye bulunur.

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

### 17.3-EK "SB raise-only" bu turnuvanın bağlam şartıdır, BvB doktrini değil

17.3'ün "SB %35 (raise-only), limp yok, 3x aç" satırı ~50bb online sahaya özeldir: BB limp'e seyrek/pasif iso yapıyorsa tuzak (limp-reraise) payı düşer ama marjinal ellerin ucuz flop görme değeri artar — bu rejim raise-only'yi haklı çıkarmaz; BB limp'e yüksek oranda iso/jam yapıyorsa zayıf limp'ler kesilir ama premium'un limp-reraise payı büyür — o sahada da raise-only EV bırakır. Raise-only ancak BB raise'e belirgin over-fold ediyorsa (raise'in fold-equity'si limp'in ucuz-flop değerini aşar, *kalibre et*) ya da oyuncu limp ağacını yönetemiyorsa kabul edilebilir bir sadeleştirmedir. Genel BvB'de aynı derinlik derin/orta katman sınırındadır ve SB'nin limp payı hangi motorun çalıştığına (SPR kapanı / polarize iso / jam) göre değişir — premium'un limp-reraise dilimi dahil. Hangi rejimin çalıştığını tablo etiketine değil BB'nin iso/jam davranışına göre seç (bkz. B33.1, B33.7).

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

### 17.4-EK-2 Offsuit blöf 3-bet'in tabanı en düşük value çiftine eşlenir — önce derinlik kapısı: 56bb'de 17.4'ün blöfü SUITED kalır
**Derinlik kapısı (önce bu):** bu taban kuralı yalnız offsuit blöf 3-bet'in gerçekten devrede olduğu düğümler içindir — sığ non-all-in 3-bet'e cevabın jam-ya-fold'a düştüğü, oynanabilirliğin sıfırlanıp yalnız bloker'ın sayıldığı bant (B31.13, kabaca 25bb — HU kökenli, ama mekanizma derinliktir: cevabın jam-ya-fold'a düşmesi) ve ICM'de cover EDEN BB koltuğu (B12.2-EK-2: "blöf en DİPTEKİ offsuit'ten"). 17.4'ün kendi düğümü (~56bb) o bant DEĞİLDİR: 17.4 blöf tarafını açıkça "iyi bloker + **oynanabilirlik**" diye tanımlar ve tablonun blöf sütunu baştan sona suited'tır (A5s–A2s, K9s–KTs, QTs, J9s, T9s, 87s). Yön kitapta sabit: derinde suited, sığda aynı rütbelerin offsuit'i (B31.13; aynı yönde B4.7/B14.2 — banttan düşerken tablodan ilk çıkan suited connector 3-bet blöfüdür). Aradaki bantta yerine offsuit çöp GİRMEZ, blöf dilimi daralır: B14.1 40–60bb satırı blöf 3-bet için "neredeyse kes" der, 17.8 Mod B de "bluff 3-bet düşer, value artar". Kural 17.4'e birebir uygulanırsa en düşük value çifti CO/BTN'e karşı **99**, MP/HJ'e karşı **TT** olduğu için taban 9x/Tx'e iner ve K9o/Q9o/J9o blöf 3-bet'i meşrulaşır — oysa 17.11 aynı offsuit çöpü (Q9o, J9o) BTN **OPEN**'ından bile attırıyor. Yani 56bb'de bu madde blöf malzemesi seçmez, yalnız adres verir.

Bandın içindeyken (sığ jam-ya-fold düğümü / cover eden BB) inşa çıpası: aralığındaki en düşük value 3-bet çiftini bul, offsuit çöp o kartın rütbesinde durur — value JJ'de bitiyorsa offsuit blöf Jx'te biter, T9o/T8o listeye girmez. Üstüne merdiven ilkesi: As'lı komboyu K'lıdan, K'lıyı Q'ludan biraz daha sık kullan — value tarafın (AA/AK/AQs) zaten As-ağır olduğu için blöf tarafı da aynı kartlara yaslanınca rakip 4-bet value'suna hiç "temiz" kombo bulamaz *(istisna: cover EDEN BB koltuğunda A-blokeri sınırdadır — A hem fold aralığını hem jam aralığını keser, B12.2-EK-2)*. Bire bir tutmaz ama masada ezberlenebilir tek çıpadır *(sapmalar: kalibre et)*.

**Kural:** Offsuit blöf 3-bet'in alt sınırı, en düşük value çiftinin rütbesidir; As > K > Q merdiveniyle dağıt *(kabaca; cover eden BB koltuğunda A-blokeri sınırdadır)* — ama YALNIZ offsuit blöfün devrede olduğu bantta (sığ jam-ya-fold 3-bet düğümü / ICM'de cover eden BB). ~56bb'de 17.4'ün blöf tarafı suited kalır: taban 99/TT'ye inmez, K9o/Q9o/J9o açılmaz.

### 17.4-EK-3 3-bet blöfü — arkadaki canlı oyunculara da blokla + basitleştirme serbestliği
Çok-elli masada (arkanda henüz act etmemiş çok oyuncu varken) blöf 3-bet seçerken tek ölçüt açıcının foldu değildir — seçtiğin elin açıcının yanı sıra arkadaki oyuncuların olası 4-bet/jam menüsünü de (KK, AK gibi) bloklaması değeri katlar; salt "iyi bloker" değil "birden çok gelecekteki aktörü bloklayan bloker" ara. İkinci nokta: kombo bazında hiper-hassas karışımları (hangi tek suited-Ax kombosu tam pür, hangisi değil gibi) ezberlemeye çalışmak marjinal kazanç için orantısız efor ister — birkaç temiz kombo seçip pür oynamak neredeyse aynı sonucu verir. Tek istisna: aynı rakiplerle tekrar tekrar oynuyorsan ya da kayıt altındaysan (yayın/final masası), o zaman frekansı daha sıkı koru.

**Kural:** Erken pozisyon blöf 3-bet'inde bloker seçimini "arkada kaç canlı oyuncu var, onların 4-bet menüsünü de bloklıyor muyum" sorusuyla genişlet; kombo-düzeyi hassasiyeti basitleştirmek ucuzdur — tekrar eden rakip/kayıt altı hariç.

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

### 17.7-EK Blöfün ayna testi — katlatacağın liste kısaysa blöf yok
17.7 river value'yu tek soruyla test eder ("benden kötü hangi el öder?"); blöfün ayna sorusu kitapta eksik: büyük river blöfünden/jam'inden önce "benden İYİ olup KATLANACAK eller" listesini yüksek sesle yaz. Liste bir-iki el sınıfından ibaretse (örn. yalnız QJ/QT tipi bir avuç kombo) blöf pas geçilir — riskin karşılığında satın aldığın fold kütlesi yok demektir. Yan not — eksik olan taraf ADAY tarafıdır, fold tarafı değil: preflop agresyonu düşük (nit) aralık river'a doğal hava/busted aday getirmediği için blöfü mecburen aralığının daha "yukarısından" gelir (pahalı — showdown değeri olan eli blöfe çevirmek zorunda kalırsın). Katlanacaklar listesi ise nit imajıyla KISALMAZ, tersine uzar: sıkı bilinen oyuncunun büyük river betine kredi verilir, rakip iyi ellerini de katlar *(kalibre et)* — rakip tarafında aynı yön kitapta zaten var, preflop çok sıkı savunmuş aralık river'da over-fold'a yatkındır (B29.5 delayed-stab gerekçesi). Senin normal aralığında ise hemen her runout'ta daha iyi doğal aday vardır — aday bulamıyorsan bu, hattın değil aralığının mesajıdır.

**Kural:** Value testi "kötü kim öder" ise blöf testi "iyi kim katlanır"dır — katlanacaklar listesi bir-iki el sınıfını geçmiyorsa blöfü pas geç.

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

### 17.10-EK Anlatı korkuluğu — "çatışmasız biriktirme" ve "ya double ya kapı" aynı hatanın iki yüzü
İki anlatı da karar kalitesini önden ipotekler. "Büyük çatışmalardan uzak durup biriktiriyorum" anlatısı seni her sınır kararda pasif tarafa iter — oysa bir sonraki elin dev bir pot olup olmayacağını seçemezsin; doğru oyun bazen büyük blöf, bazen büyük call'dur ve o anlatıyla masaya oturan ikisine de kapalıdır. "20bb'yim, double lazım" anlatısı ise stack'ini ciddiye almayı bıraktırır — turnuvalar birkaç bb'den kazanılır, bir ayağı kapıda oyuncu 15–30bb'yi hassas oynamaz. Üçüncü tuzak referans noktasıdır: başlangıç stack'i de zirve stack'i de skor tablosu değildir; elindeki stack neyse oyun o stack'in en iyi kararıdır.

**Kural:** Anlatı değil el oyna: bir turnuva günü ~yüzlerce karardır ve yalnız önündeki tanesi senindir — stack skor tablosu değil, karar tablosudur.

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

### 17.13-EK Kişisel sapma pusulası — sınır kararı alışkanlığının tersine kır
Drill'lerde yanlışların formunu değil YÖNÜNÜ logla: hep 3-bet blöfünü mü atlıyorsun, hep fazla mı jam'liyorsun, hep bir sokak erken mi bırakıyorsun? Masada sınırda kalan her karar için pusula tek sorudur: "ben bu spotta tipik olarak hangi yöne kaçırırım?" — ve berabereyi o yönün TERSİNE boz. EV'si zaten yakın kararlarda bu, sistematik leak'i sıfır maliyetle törpüler; seni tanıyan reg'ler sapmanı çoktan fiyatladığı için ara sıra bilinçli ters oynamak imajını da tazeler.

**Kural:** Sınır kararlarda berabere kendi bilinen sapmanın tersine bozulur.

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

### 17.11-EK-2 Koç notlarının genel hâlleri: "bubble'da KK+" → 12.2-EK-2; "%60 open" → 12.4-EK; Mod D direkt jam → 12.1-EK-3
17.11'in üç satırı bu turnuvaya özel yazıldı; genel doktrin sonradan B12/B21'e girdi, çapraz oku:

- **"Bubble'da cover'a karşı tüm stack için KK+"** — FT/orta-stack genelleştirmesi 12.2-EK-2: cover EDİLEN orta BB'nin value 3-bet'i fiilen KK+ (AK sınırda), QQ–TT/AQ ise fold değil PREMİUM FLAT — aralığı koruyan flat; blöf dilimi neredeyse kapalı. Cover EDEN BB'de tersi: value tepe dar, blöf offsuit dipten.
- **"Sen cover'ken 15–25bb BB'sine %60'a kadar open"** — boy ve malzeme katmanı 12.4-EK: cevabı boya inelastik (salt jam-or-fold oynayan) kısa BB'ye boy küçük kalır (~min-raise *(kalibre et)*) — büyük boy fold'u artırmaz, jam yediğinde fazladan kaybettirir; 2.5–3x ancak BB min-raise'e fiyatla CALL edebiliyorken anlam kazanır, ucuz call'ı keser (12.2-EK-5). Malzemeyi arkadakilerin cevabı seçer (bloker offsuit vs suited). Kilitli orta stack'lere baskı ise BOYLA değil FREKANSLA satılır (21.7-EK) — geniş açılışın boyu küçük kalabilir *(kalibre et)*. 23.14'ün "havuz BB'si kısa bantta fazla jam'ler" gerilimi aynen geçerli.
- **17.8 Mod D "açılışın bir kısmı direkt jam"** — ≥20bb'de arkadakiler seni cover ediyorsa open-jam aralığı kapanır, raise-call + raise-fold kalır (12.1-EK-3); direkt jam yalnız cover-eden / ante-büyük bağlamda.

B17 modülü değişmez; bu ek yalnız adres verir.

### 17.11-EK-3 Kendi timing'ini yönet — snap aksiyon bedava bilgi dağıtır
17.11-EK rakibin timing+sizing zincirini OKUmayı verdi; madalyonun öbür yüzü kendi zincirini kapatmaktır. Snap-check "value'm yok, raise menüm boş" itirafıdır; yarım duraksayıp check ise "düşündü ve vazgeçti" okunur — karar belliyken bile sabit tempo al ve o süreyi eli baştan oynatarak harca (sokak sokak boylar, rakibin tempoları). Kolay fold'unu da aynı temposla ver; tempo yalnız zor ellerde uzuyorsa zor ellerin kendini ele verir.

**Kural:** Her aksiyonun tek temposu olsun — bilgi frekans ve boydan önce tempo VARYANSINLA sızar.

### 17.11-EK-4 Bubble kaygısı masa dışı hatanın faturasıdır — masada ödeme
Bubble'da min-cash'in seni gerçekten rahatlatacağını fark ediyorsan hata masada değil kayıtta: fazla büyük oynadın ya da kendinden fazla pay tuttun — bu mental oyun sorunu değil profesyonellik sorunudur ve el ortasında çözülmez. Protokol: sinyali not et, kenara koy, önündeki tek karara dön; buy-in/pay politikasını turnuva SONRASI düzelt. Aynı çerçeve "aptal görünme" korkusuna: doğru bulduğun agresif hattı izleyen var diye kesiyorsan bu, o spotu yeterince bilmediğinin sinyalidir — masada fold gerekçesi değil, eve dönünce çalışma listesine madde.

**Kural:** Kaygı bir sinyaldir, karar girdisi değil: not et, park et, en yüksek EV'li oyuna dön; kökünü turnuva dışında kes.

### 17.15 FT arifesi — uyku beklentisi değil, uyku hijyeni + zihinsel çıkış
Final table öncesi gece "mükemmel uyku almalıyım" beklentisi kendi başına kaygı üretir ve genelde tutmaz — beklenti yerine hijyene odaklan: ekranı bırak, geç saatte uyarıcı/ağır alkol yok, uyumayı zorlamak yerine zihni turnuvadan ÇIKARACAK bir aktivite seç (daha önce izlenmiş/tanıdık bir dizi, sesli kitap, poker bilmeyen biriyle sohbet, elektroniksiz kısa yürüyüş). Amaç önce turnuva hakkında düşünmeyi durdurmak, sonra uykuyu zorlamadan gelmesine izin vermek.

**Kural:** Uykuyu hedefleme, hijyeni ve zihinsel çıkışı hedefle — "mükemmel uyku" beklentisinin kendisi kaygı kaynağıdır.

### 17.15-EK FT arifesi — yakınlara toplu "meşgulüm" sınırı, önceden kur
Final table öncesi/sırası saatlerde iyi dilek mesajlarına tek tek anlık cevap vermek zaman ve dikkat kaybıdır; hazırlık ve dinlenme zamanını buna harcama. Herkese (yakın ya da uzak) geçerli tek bir toplu mesaj/beklenti kur — "şu an final table'a hazırlanıyorum, sonra dönerim" — ve bunu ÖNCEDEN, ilk final table'dan önce alışkanlık haline getir; çevren bir kere bu ritmi öğrenince gerekçe sunmana bile gerek kalmaz.

**Kural:** Final table penceresinde (hazırlık + oyun) mesajlaşmayı toplu ve gecikmeli cevapla — sınırı önceden kur, o an açıklama yapma ihtiyacı duyma.

### 17.15-EK-2 FT arifesinde yeni kavram YOK — tek istisna: masana özel nadir stack dağılımı
Final table'dan önceki saatlerde/gece yeni bir kavram, yeni bir c-bet boyu, yeni bir BvB fikri öğrenmeye çalışmak seni o an daha iyi yapmaz — sadece gürültü ve kaygı ekler; amaç mevcut yeteneğini en iyi icra etmek, o gece kendini geliştirmek değil. Tek istisna: ertesi günün masasında gerçekten nadir/alışılmadık bir stack dağılımıyla karşılaşacağını biliyorsan (ör. iki büyük stack masanın geri kalanını aşırı cover ediyor, ya da masada aşırı kısa 1-2 stack varken geri kalanı çok derin) — bu spesifik, bilinen dağılımı önceden birkaç kez gözden geçirmek değerlidir, çünkü ilk birkaç orbit'te tam o spota gireceksin.

**Kural:** FT arifesinde genel çalışma yasak, yalnız icra tazeleme (hafif, tanıdık tekrar) yap; istisna yalnız ertesi gün kesin karşılaşacağın nadir stack-dağılımı spotudur.

### 17.15-EK-3 Kamera/heyecan — bastırma, coşkuya çevir, herkes aynı gemide
Final table baskısı, kamera ve yükselen nabız normal bir tepkidir; bastırmaya çalışmak ya da "hiç etkilenmemeliyim" beklentisi tepkinin kartopu gibi büyümesine yol açar. Reframe et: heyecan verici bir şey olarak çerçevele, korku olarak değil — ve tecrübeli oyuncuların bile aynı şeyi hissettiğini, bunun deneyimsizlik göstergesi olmadığını hatırla.

**Kural:** FT nabzını bastırma, "heyecan" diye yeniden adlandır; herkes hissediyor, bu bir zayıflık işareti değil.

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

### 18.0-EK-2 3-bet potu istisnası: caller küçük bete over-fold eder
"Rec sahada fold equity düşük, station atmaz" tek-raise'li potun kuralıdır. 3-bet potunda teori küçük bete karşı geniş savunma ister (ucuz fiyat); ama sahada caller'ın dar, orta-güçte aralığı flop'u ıskalayınca ÇOĞUNLUKLA fazla atar *(kalibre et)* — bu bir popülasyon sapmasıdır, teori değil. Hava-c-bet kısıtlamasının 3-bet potunda gevşemesinin teorik gerekçesi ise aralık avantajı + düşük SPR'dir (düşük SPR'de küçük bet bile stack-off baskısı kurar ve caller'ın raise'le cezalandırması commit anlamına geldiği için zorlaşır); tam-aralık küçük bet'in koşulları B32.3'te (bkz. B32.0, B32.3).

### 18.0-EK-3 Geniş aralığın DİBİNE karşı küçük bet: frekans GTO'nun ÜSTÜNE çıkar
18.0 "rec sahada frekans GTO'nun altında" der; 18.0-EK-2 3-bet potunda caller'ın küçük bete over-fold ettiğini ekledi. Tek-raise'li potun da aynı sapması var ve 18.0'ı sınırlar. Station'ın yapışkanlığı çiftlerde ve Ax'te yaşar, aralığın dibinde değil. Geniş savunma aralığının dibi — backdoor'suz suited K9/Q9/J9, renk-dışı suited çöp, KJo/QTo tipi offsuit — küçük bete teoride sık devam etmelidir; havuz bunu yapmaz, katlar *(kalibre et)*. Dip katlanınca "bet mi check mi" farkı zaten küçük olan her elin (backdoor'lu hava, zayıf Ax, orta cep) bet EV'si yükselir → küçük-bet frekansı teorik karışımın üstüne çıkar, düşük/orta BAĞLANTISIZ (kuru) board'da neredeyse range-bet. Bağlantılı düşük board hariç: orada geniş aralık board'u ıskalamaz, vurur (konektör, küçük çift) → 18.0 geçerli kalır, check artar.

Koşul üçlü: (a) rakibin aralığı GENİŞ — tek-raise'li potta blind savunması (BTN/CO açışına BB'nin flat'i, blind savaşında SB-vs-BB); 3-bet potu bu maddenin konusu değil, o 18.0-EK-2'de; (b) board rakibin kütlesini ıskalamış (düşük/orta BAĞLANTISIZ, düşük mono, eşleşmiş); (c) boy KÜÇÜK. Üçü yoksa 18.0 döner: dar EP-vs-BTN flat aralığının dibi çift ve suited Ax'tir, katlanan yoktur.

> **Aralık genişledikçe küçük-bet frekansı teorinin üstüne, daraldıkça altına. 18.0'ın "GTO altı"sı dar/yapılı aralığa ve dinamik board'a karşı doğrudur; statik/eşleşmiş/mono board'da geniş aralığın dibine karşı yanlıştır.**

### 18.1 İki neden — c-bet neden atılır

| Neden | Ne zaman geçerli | Rec sahada |
|---|---|---|
| **Value** | Senden zayıf el ödeyecek | Güçlü — station öder, ince value bile alınır |
| **Fold equity** | Daha iyi el atar / draw call'ı bırakır | ZAYIF — station atmaz |

Rec sahada c-bet'in ağırlık merkezi value'ya kayar. "Fold equity için" c-bet'i yalnız gerçek katlanabilir eller (agresör reg, kuru board, sıkı BB) için sakla.

### 18.1-EK İnşa sırası: boyu value seçer — ve koruma paradoksu

Aralığı hep aynı sırayla kur: önce hangi eller value'lar, sonra o value'nun istediği boy, sonra coverage, EN SON blöfler — blöfler value'nun seçtiği boya biner, boyu asla blöfler seçmez. 18.1'in iki-neden tablosuna sokulmaya çalışılan üçüncü sahte nedeni de bu sıra süzer: "koruma için bet". Koruma betleyebilen her eli betlersen korumasız kalan aralık CHECK aralığındır — kök hata orada doğar.

### 18.1-EK-2 "Koruma sahte nedendir"in sınırı + alt-çift pusulası
Koruma paradoksu yüksek SPR'de (tek-raise'li pot, commit uzak) geçerlidir; nut avantajı bu sınırın ekseni değildir — sığ 3-bet potunda sınırı SPR çizer. 3-bettor'ın ARALIK (overpair) avantajlı ama nut'u çoğunlukla CALLER'da olan (set/iki-per) kırılgan overpair kütlesinde — düşük kopuk board'da 77-JJ tipi — koruma-value gerçek nedendir: nut avantajından değil, sığ SPR'de erimeden önce paranın girmesinden; adı "erimeden önce alınan value"dur (bkz. B32.4). Boyu ise kırılganlık değil SPR büyütür: bu kütle merged'dır, 100bb'de boy küçülür, frekans büyür; sığda büyüklük geometrik/commit boyundan gelir *(kalibre et)*. "Boyu value seçer" cümlesinin 3-bet-pot uygulaması da buradadır: alt çiftler boyun TAVANINI koyar, tabanını değil — alt çift bet istiyorsa lineer küçük, istemiyorsa polar büyük + alt çift check; pusula boyu seçer, frekansı aralık avantajı seçer (bkz. B32.2).

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

### 18.2-EK-2 3-bet potunda A-high ve monotone satırları
B18.2 tablosu tek-raise'li pot içindir. 3-bet potunda A-high tek kova değildir: kopuk A-high tam-aralık küçük, A + ikinci broadway alt-çift pusulasıyla büyük/küçük ayrımı, wheel-bağlantılı A-high'da 100bb'de check payı artar, küçük-bet sıklığı düşer *(kalibre et)* — caller'ın wheel/set payı derinlikte değerlenir (bkz. B32.3). Monotone satırı ("belirsiz / küçük-check") 3-bet potunda (3-bettor OOP) üç kovaya açılır ve ayırıcı NUT-flush sahipliğidir: A + iki düşük mono check ağırlıklı / küçük karışık *(kalibre et)*; A-yok kopuk orta mono, 3-bettor'da A♠x nut-flush/fd payı var → çoğunlukla küçük; caller'ın yapılı non-nut flush + düz/kombo-çekiliş yoğunluğunun arttığı (T-9-8 tipi bağlantılı orta; A♠x nut-fd payı yine sende) → check ağırlıklı, sınırda küçük dürtme; K-high mono'da nut-fd/nut-flush payı sende kalır, caller'ın non-nut flush yoğunluğu + overpair'in değer kaybı yine check ağırlıklı tutar *(kalibre et)* (bkz. B32.3).

### 18.2-EK-3 Derinlik ↔ boy: yön dokuya bağlıdır
18.2 tablosunun boyları 60bb+ / IP-vs-BB için okunur; derinlik değişince boy dokuya göre TERS yönlere gider. Mekanizma rakibin raise kapasitesidir.

- **Kuru/eşleşmiş (8-8-3 r tipi):** derinde BB'nin devamı raise-ağırlıklıdır (backdoor'lu çöp bile raise'ler) → küçük bet + yüksek check. Sığlaştıkça raise-fold adayı azalır, kalan raise çoğunlukla jam'e döner → orta/büyük boy çoğunlukla güvenlidir, zayıf Ax/Kx'ten ince value alınır *(kalibre et)*. Tablonun "1/3"ü derin içindir.
- **Islak/bağlantılı (9-8-6 r tipi):** derinde yarım-pot civarı polar bet check-raise yese bile turn jam'i çoğunlukla pot-üstü overbet ister — nadirdir. 40bb'de aynı boy + check-raise → turn SPR≈1 → BB açık kent/overcard-draw'ını jam'ler, sen equity'li ellerini katlarsın → boyu KÜÇÜLT ki check-raise de küçük gelsin, turn'de jam değil üçte-bir bet yesin. Tablonun "2/3 polar"ı 30–60bb baseline'ında ters çalışabilir; 40bb'de küçük *(kalibre et)*.

Test cümlesi iki koşullu: *"Rakibin equity taşıyan raise'i SIK mı — ve raise sonrası turn'de jam geliyor mu?"* — ikisi de evetse flop boyunu düşür (ıslak doku); raise adayı zaten azsa (kuru/eşleşmiş, sığ) test tetiklenmez (18.4'ün "boyut = river planının fiyatı" satırı derinlikle okunur).

> **Çoğunlukla: kuru/eşleşmiş → sığlaştıkça boy BÜYÜR; ıslak/bağlantılı → sığlaştıkça boy KÜÇÜLÜR. İkisini tek "kuru küçük / ıslak büyük" satırına sıkıştırma.**

### 18.2-EK-4 Büyük boyun evi dar tanımlıdır: üst kart Q'nun altında + BB'de flop düzü yok
18.2-EK madde 2 "rainbow = büyük boy evi"ni geniş-aralıklı potla sınırladı; sınır pot tipi değil board'dur, BTN/CO-vs-BB'de de açılır *(kalibre et)*. İki koşul: (1) üst kart Q'nun ALTINDA *(kalibre et; sınır J/T arasında oynar)* (T-7-3 / J-8-4 / 9-6-2 r tipi) → QQ-AA overpair kütlesi tam ağırlıkta ama kırılgan, top pair da üç sokak taşımaz → ikisi de parayı şimdi ister. K-yüksek board'da (K-8-4 tipi) tek overpair AA, Q-yüksek'te AA-KK'dır — overpair kütlesi ince, top pair üç sokak taşır → küçük range-bet kalır. (2) BB bu board'a düz floplayamıyor; T-9-7'de offsuit düzler BB'de → boy büyümez, check büyür.

İkinci mekanizma temizleme: büyük flop bet Q-J / K-J tipi iki-overcard'ı katlatır → J turn'ünde senin J-8 tipi blöfün top pair olur VE rakibin J'si azalmıştır; küçük flop bet aynı turn'de aralığı check'e iter. Bu yüzden büyük-boy blöfü iki-overcard broadway değil, tek overcard + backdoor'dur (A-5s / K-7s tipi): K-Q'nun Q-8'den call alması iyidir → küçük boy; A-5s'nin A-8 / Q-8'i katlatması gerekir → büyük boy. Küçük aralıkta Q-T / J-T top pair kalır ki raise yiyince devam edebilsin.

> **Büyük boy = "üst kart < Q *(kalibre et; sınır J/T arasında oynar)*, BB'de flop düzü yok"; blöfünü tek-overcard+backdoor'dan ver. Havuzda boyu hedef sınıfı katlatan en küçük boy seçer *(kalibre et)*.**

### 18.2-EK-5 Düşük board'da boyu doku değil KÜTLE seçer: rainbow büyük, iki-renk küçük
18.2 düşük-bağlantılı board'u "BB board'u → check" der; bu BB'ye karşı IP içindir. OOP PFR'ken ve caller BTN'yken (aralığı BB'den dar ve yapılı) boy şu soruyla seçilir: **rakibin hangi kütlesi zaten katlanıyor, hangisi kayıtsızlık fiyatı istiyor?**

- **İki-renkli düşük (6-4-2 fd tipi):** caller'ın renk-dışı suited'ları ve backdoor'suz offsuit'leri her boya katlanır → küçük boy; frekans ise rainbow'a göre DÜŞER — fd kütlesi caller'ın equity'sini artırır, "geniş" olan yalnız bet'lenen ellerin dağılımıdır *(kalibre et)*. Büyük bet bedava fold'u pahalı satın alır.
- **Rainbow düşük (6-4-2 r tipi):** caller'ın neredeyse her eli backdoor fd + iki overcard taşır; küçük bet hiçbirini kayıtsızlaştırmaz → pot-boy civarı *(kalibre et)*. "Kuru → 1/3" ezberinin en pahalı kör noktası; 18.2-EK-4'ün ikinci sebebi.
- **Hedefi rakibin en kalabalık offsuit overcard bloğu seçer:** hedef o bloktaki en zayıf kombolardır; blok ne kadar geniş ve kayıtsızlığa yakınsa boy o kadar büyür — Ax bloğu kalabalıksa pot civarı, Ax-hafif dokuda Kx/Qx bloğu hedefse daha küçük (2/3) yeter *(kalibre et)*.
- **Top pair'in senin aralığında olması boyu değil FREKANSI yükseltir:** 7-x-x'te HJ/CO'nun 7x'i (77, 76s, 87s, 97s, A7s) var → frekans yükselir; 4-x-x'te (4-3-2 tipi) 4x neredeyse yok (44, 54s, A4s dışı) → çöker.
- **Check-raise value'yu yemez:** düşük rainbow'da overpair'i check'e koymak value kaybettirmez — BTN'nin orta çiftleri check'ine stab eder; value'yu x/r'la al *(kalibre et)*.

> **Otomatik-fold kütlesi büyükse küçük, backdoor/gutshot kütlesi büyükse pot-boy. Rainbow düşük board ÇOĞUNLUKLA büyük boyun evi; iki-renk düşük çoğunlukla küçüğün *(kalibre et)*.**

### 18.2-EK-6 Orta board'da bağlantı boyu tersine çevirir: 9-8-7 küçük-sık, 9-5-2 büyük-seyrek
18.2'nin "ıslak bağlantılı (9-8-7) → 2/3 polar" satırı IP-vs-BB içindir ve board'un BB'nin geniş aralığına yaradığı varsayımına dayanır. Nut'un PAYLAŞILDIĞI yapılı-aralık düğümünde (OOP PFR vs BTN flat; 3-bet potunda B32.3'ün "tam bağlantılı → check/küçük" satırı) ayrım "ıslak mı" değil **"nut paylaşılıyor mu"**dur:

- **Orta-bağlantılı (9-8-7 / T-9-8 tipi):** set, düz, iki-per iki aralıkta da var; overpair'in kendisi büyük pot istemez, en yüksek EV'si küçük bettedir *(kalibre et)*. Board'a herhangi bir bağı olan her el (gutshot'lı broadway, backdoor'lu overcard, per, overpair) küçük bet → rakip az katlanır ama kıl payı equity üstünlüğünü paraya çevirirsin. Bağsız overcard check-fold. 8-7-6'ya inince offsuit broadway'in bağı düşer → frekans da düşer, AA bile check'e kayar.
- **Orta-kopuk (9-5-2 / 9-4-2 / T-5-2 tipi):** overpair'ler nut-benzeri, rakibin devamı overcard + backdoor → büyük bet ya da check; küçük yok. Boy, backdoor'suz offsuit broadway'i (KQo/KJo/AJo tipi) katlatan boydur *(kalibre et)*; blöf 9x'i saran Tx/8x tipi.

> **Küçük avantaj + paylaşılan nut = küçük bet, yüksek frekans. Büyük avantaj + sende yoğun nut = büyük bet, düşük frekans. Refleks bunun tersidir; tersini yapan bağlantılı orta board'da overpair'ini kendi eliyle bluff-catcher'a çevirir (B11).**

### 18.2-EK-7 Üç-broadway / A + iki broadway (tek-raise'li): küçük boy hiçbir şey katlatmaz
18.2'nin "kuru yüksek → 1/3" satırı A-7-2 / K-8-3 tipi tek-broadway içindir. K-Q-J fd tipi üç-broadway board'da BB'nin devamı Q-x / J-x per'leri ve T-x / A-x çekilişleridir (KQJ'de T-x OESD, A-x'in TÜMÜ gutshot'lı); küçük bete hiçbiri katlanmaz. Boy Q-x'i kayıtsızlığa iten boydur — pot civarı; 2/3 sadeleştirmesi EV kaybetmez *(kalibre et)*. Pot-boya karşı T-x (OESD) sınırda devam eder, kicker'sız Q-x sınırda, A-x (gutshot) sınırda; ilk katlanan blok offsuit 8-x / 7-x'tir (9-x, T'ye gutshot'la devam eder). A-Q-J ayrı okunur: A-x top per (düşmez), K-x per değil gutshot, T-x yalnız gutshot (katlanır), ilk katlanan blok 9-x / 8-x.

Rakip bu boya fazla call ediyorsa flop boyunu değil TURN planını değiştir: aralığın büyük kısmıyla pot-boy turn — K-x kayıtsız, kalan Q-x/T-x/gutshot düşer; fazla flop call'ı turn'de kârdır. Blöf inşası: 6-6 / 7-7 tipi orta cep kötü blöf (daha iyiyi katlatmaz, kötüden call almaz); iki-sokaklı düşük eller (5-4s / 6-4s tipi) daha iyi — BB'nin ilk katlanan bloğu offsuit 8-x / 7-x'tir, onları bloklamaz. 40bb'de "büyük" bir kademe düşer (BB Q-T / kombo çekilişi fast-play'e başlar) ama küçük yine açılmaz; 15bb'de check büyür (KQJ'de K-x = nut, jam'ler; bkz. 18.10).

> **Tek-raise'li yüksek-broadway board'da küçük boy yok; Q-x'i kayıtsız bırakan tek boy + turn'de pot. B32.5'in "üç-broadway her derinlikte KÜÇÜK" satırıyla çelişmez — 3-bet potunda nut avantajı ince; tek-raise'li potta BB nut uçta capped değildir (nut-düz T9/KT komboları BB'de bile fazladır), ama devamı küçüğe katlanmayan per/çekilişte yoğun → bet frekansı düşer, boy büyür.**

### 18.2-EK-8 A-yüksek board'da boyu ikinci kart seçer
Tüm A-high board'ları "A-7-2 → 1/3" kovasına atma; soru **"BB'nin alt per'inin YANINDA bir şey var mı?"**

- **Tekerlek-A (A-4-2 / A-3-2 tipi):** BB'nin alt per'i per + gutshot'tır, wheel düzleri ve 2-2/3-3 setleri BB'de → büyük bet alt per'i katlatmaz, BB turn'de düz/per çevirip aralığını blöfe döndürerek equity'sini yüksek realize eder → küçük boy, hedef otomatik fold'lar.
- **Orta-A (A-9-4 / A-8-5 tipi):** BB'nin alt per'inin yanında hiçbir şey yok — ama alt per küçük bete zaten kayıtsızdır → çoğunlukla küçük/aralık-bet; büyük boy, IP'nin KK-TT/AQ+ yoğunluğu yüksek ve BB'nin 9x/8x orta-per kalabalığı belirginken karışıma girer *(kalibre et)*.
- **A-K-x:** büyük boy, ama K-x ve Q-Q/J-J tipi alt çift CHECK — bet'lerse yalnız daha iyi el öder, katlanan zaten geride. Büyük boy A-x + J-T / Q-T tipi gutshot blöflere kalır (zayıf-kicker K-x ve Q-x'i flop'ta, K-Q / K-J'yi ancak turn-river baskısıyla katlatır). A-K'nin check-back payı tuzak değil aralık aritmetiğidir: rakibin blöfe dönecek çekilişlerini bloklamaz, check-check river'da yakalar.

Turn ters sezgilidir: büyük flop bet call yedikten sonra turn'de KÜÇÜK boy — hedef orta per ve zayıf A-x'ten ince value + K/Q-high'a ucuz baskı; "büyük attım, büyük devam" refleksi otomatik değil, blank turn'de büyük devam da karışımda *(kalibre et; B11.1)*.

> **A-high'da ikinci kart soruyu sorar: BB'nin alt per'inin yanında bir şey var mı? Var (tekerlek/bağlantı) → küçük ve daha seyrek; yok (orta-A) → aralık-bet küçük; ikinci kart broadway (A-K / A-Q / A-J) → büyük. 3-bet-pot sürümü 18.2-EK-2 / B32.3.**

### 18.2-EK-9 Mono flop: tek küçük boy; frekansı "board rakibin flush'ını yaktı mı" seçer
18.2 "Monotone → belirsiz, küçük/check" tek kovadır; 18.2-EK-2 3-bet potunda kovayı nut-flush sahipliğiyle açtı. Tek-raise'li potta iki ayırıcı var:

- **Boy (IP vs BB):** BB'nin cevabını renk kartı böler — renksiz overcard/gutshot/zayıf per katlanır; renk kartlılar ve renksiz top pair çoğunlukla call. Büyük boya gerek yok (katlanacaklar küçüğe de katlanıyor), derinde kimse AA/set'le pot büyütmek istemez (ikinci-nut sık) → tek küçük boy, neredeyse tam aralık; boyu "renksiz hava/zayıf per'in katlandığı en küçük boy" seçer *(kalibre et)*. Havuz BB'si renksiz elini teoriden sık atar → frekans GTO'nun üstüne (18.0-EK-3).
- **Frekans (OOP PFR vs BTN):** kural sayımdır — board, rakibin yüksek suited kombinasyonlarından (broadway + Ax-suit) kaçını KENDİSİ yaktı? Çoğu per'e dönüştüyse flush sayısı az → yüksek frekans küçük bet, raise az (K-T-8 mono: KT/K8/T8-suit artık per); hiçbiri yanmadıysa (düşük mono) → check-ağırlıklı *(kalibre et)*. Sayım tek başına yetmez: düşük suited connector'lar yanmaz ve bağlantılı mono'da hem flush hem düz/iki-per olarak ağırlıkları artar → bağlantılı orta mono en check-ağır uçtur; bet edersen yine küçük, renk kartı taşıyan AK/AQ karışıma girer *(kalibre et)*.

Derinlik: derinleştikçe BB yüksek renk kartını fast-play'e başlar → check payın artar; kısa stack'te renksiz A-x de check'e kayar *(eşikler: kalibre et)*. Turn (dördüncü renk / brick) B11.1'de.

> **Mono flop'ta ilk soru "kimde nut flush" değil (3-bet potunun sorusu), "board rakibin yüksek suited'ını (broadway + Ax) yaktı mı?" — yaktıysa bet, yakmadıysa check; boy her hâlde küçük-tek.**

### 18.2-EK-10 Trips board: rakibin nut'u board tarafından seyreltilmiştir
18.2'nin "kuru eşleşmiş → 1/3" satırı çift board içindir; trips board'da mekanizma değişir: board üç kicker'ı kendisi silmiştir — eşleşen her kicker boat'tır, rakibin boat payı düşüktür ve kicker seyreltmesi yüzünden aralık avantajı nut avantajına dönüşmez *(kalibre et)*. Boyu "savunanın katlanmayan kütlesi Ax mi, broadway mi?" sorusu seçer.

- **IP, BB'ye karşı:** güçlü eller ve overpair'ler küçük ister; overcard'ları katlatmak isteyen hava daha büyük ister ama iki boyun EV farkı ihmal edilebilir → çoğunlukla tek orta-küçük boy. Boy ailesi yalnız büyük tarafı gerçekten büyükse açılır; "biraz daha büyük" istiyorsa boyu küçült, aileyi açma (18.4-EK). Yüksek trips (K-K-K tipi) düşük trips'ten iyi range-bet evidir: rakibin Kx komboları (AK/KQ/KJ dahil) board'a yandı; Ax ise katlanmayan üst kicker katmanıdır, fold payı artışı alt kicker'larda ve bağlantısız kombolarda *(kalibre et)*. Rec sahada orta kicker / suited bağlantılı eller küçük bete teoriden çok katlanır → tam-aralık küçük.
- **OOP, sıkı BTN flat aralığına karşı, düşük trips (7-7-7 tipi):** BTN'nin kütlesi offsuit broadway'dir; Ax katlanmaz → hedef Ax dışını kayıtsız kılmak → büyük eğilimli boy (2/3 civarı, *kalibre et*). Yüksek trips'te yine küçük: board rakibin broadway kütlesinin bir bacağını kendisi bloklar, hedef katman küçüğe zaten katlanır. Bu düğümde OOP'nin EV'si çoğunlukla IP'den yüksektir — tek-raise'li potta nadir bir tersine dönüş *(kalibre et)*.

Savunma tarafı (kicker canlılığı eşiği) B26.1'de.

> **Trips board'da boy çoğunlukla küçülür, frekans yükselir. Tek istisna sıkı-aralık OOP düşük trips — orada offsuit broadway kütlesini kayıtsızlaştıran büyük eğilimli boy *(kalibre et)*.**

### 18.2-EK-11 A-high board'da OOP AÇICI (tek-raise'li, ~30bb): Ax avantajı var, realizasyonu yok — A-düşük check, A+broadway tam-aralık küçük, A-orta+fd 2/3
Üç koltuk, üç cevap — 18.2 IP PFR, 32.3 3-bettor, bu madde OOP açıcı vs IP caller *(frekanslar: kalibre et)*. "A-high, açıcının board'u → bet" refleksi koltuğu karıştırır.

- **A-düşük (A-5-2 / A-6-2 r):** açıcının Ax dışı aralığı ölüdür — KTo/QJo/JTo'nun ne peri ne çekilişi var; caller'ın cep-yoğun aralığı 2'yi 6'yı bağlar, 44/55/66 bete katlanmaz. Bet edecek el az, katlatacak el az → check-ağırlık (kabaca üçte iki). Check'ine karşı caller'ın stab'i ve cevabın 19.4-EK-2'de.
- **A + broadway (A-J-6 / A-T-8):** her şey döner — açıcının bütün aralığı per ya da gutshot alır, caller'ın cep-yoğun aralığı ölür (77'nin EV'si sıfıra yakın) → tam-aralığa yakın küçük bet.
- **A-orta + fd (A-8-6 fd):** boy 2/3'e çıkar — küçük bet backdoor-fd kombolarını (Q9♣/J9♣ tipi) her zaman içeride tutar, 2/3 kayıtsızlığa iter; A-6-2 rainbow'da o kombolar zaten katlanır, küçük yeter. Orta kart caller'ın suited bloğunu eşliyorsa (A-8-6'da 8x) boy büyür; A-7-6 daha pasif.

> **Soru "A bende mi?" değil, "Ax'siz aralığım bu board'da ne yapıyor?"**

### 18.2-EK-12 Yoğun aralık kuru board'da küçük bete katlanmaz

18.2-EK-4'ün "rainbow → pot-boy, iki-renk → küçük" kuralı düşük board içindi; motor aynıdır ve rakibin aralığı yoğunsa (cep + suited, otomatik katlanan çöpü yok) Q/J/T-high'a da taşınır — ICM'de kapsanan sıkı açıcı vs cover eden geniş-flat SB, ya da cover eden geniş açıcı vs kapsanan dar-flat SB, ikisi de bu aralık yapısını üretir:

- **Rainbow/kuru (Q-7-3 r, J-3-3, J-6-2, T-7-2, Q-6-4 r):** küçük bet kimseyi kayıtsızlaştırmaz — her suited el backdoor, her cep per. Yarım pot ya da ¾ pot ve check; küçük boy yok *(kalibre et)*. Eşleşmiş J-J-7 bile istisna değil.
- **Renk-çekilişli (Q-7-4 fd, Q-J-2, 7-6-5 fd):** renk-dışı kombolar ve backdoor'suz offsuit'ler her boya katlanır → küçük yeter, aralık geniş.
- **Test:** "Küçük bet kimi katlatıyor?" Yalnız çöpü → boyu büyüt ya da check. Hedefin backdoor'lu suited kütle ise ancak yarım pot onları kayıtsız kılar.

> **Yoğun aralığın kuru board'da otomatik fold'u yoktur; küçük bet orada hedefsizdir. Rainbow/kuru → yarım pot-ya-check, renk-çekilişli → küçük. Board'un yüksekliği değil rakibin katlanan kütlesi boyu seçer.**

### 18.3 Hangi elle c-bet — dört sınıf

| El sınıfı | Kuru board | Islak board |
|---|---|---|
| **Value (top pair+, overpair, set, iki per)** | Bet (1/3, ince value dahil) | Bet (2/3, potu şişirmek istediğin el) |
| **Gerçek/nut draw (nut FD, OESD+overcard)** | Bet (semi-bluff, 1/3) | Bet (2/3, tamamlanınca çok ödenir) |
| **Hava + backdoor/bloker** | Küçük range-bet (aralığın parçası) | BIRAK — check-fold; board rakibe yaradı |
| **Marjinal showdown (2. per, zayıf top pair)** | Öderse küçük bet, yoksa check-back | Check-back — pot kontrol |

Islak board'a havayla barrel = kök hatanın flop tohumu. Board rakibin aralığına yaradıysa, senin havanın fold equity'si yoktur; küçük value + gerçek draw dışında check.

### 18.3-EK İnce value eşiği rakip-aralıktan türetilir — sınıf adına değil dağılımına bak

İnce value kararı his değil geriye-sarımdır: boyunun dayattığı devam-yüzdesini yaz, son çağıran aralığın yarısından iyisini yenmen gerektiğini kabul et, bunu turn eşiğine geri çevir *(kalibre et)*. Ve sınıf İÇİNDE say: tipik aralıklar AXs'i her kicker'la oynadığından rakip aralığındaki flush sınıfının üst ucu kombinatorik olarak kalabalıktır — A-high kombolar düşük flush'lardan belirgin fazladır — rakip "her flush'la öder" olsa bile ortalamasını yenemeyebilirsin. Kök hata burada doğar: sınıf adına bakıp bet'lersin, sınıf-içi dağılıma bakıp check etmeliydin.

### 18.3-EK-2 Rakibin devamı raise ise bet "anti-koruma"dır: yüksek eşleşmiş board'da ham-equity eller check-back
18.3'ün "kuru board → hava küçük range-bet" sütunu, rakibin devamının CALL-ağırlıklı olduğunu varsayar. K-K-x / Q-Q-x / K-5-5 tipi yüksek-kartlı eşleşmiş board'da BB'nin doğal call'ı kıttır (board'a çarpan az el, kalanı ya çöp ya trips) → devam aralığı ağırlıkla RAISE'dir *(kalibre et)*. Raise-ağırlıklı düğüme orta elle küçük bet attığında iki neden birden ölür: ince value yok (senden kötü el call etmiyor, katlıyor ya da raise'liyor), koruma yok (raise'i yiyince en iyi eli sen bırakıyorsun). Orta elle bet, çipi ortaya koyup çaldırmaktır.

Devam = raise ise bet POLARLAŞIR: raise'e devam edebilen değer + raise yiyince ucuza pes eden hava — sıfır showdown'lu el küçük bet'le sık fold alır, raise yerse yalnız küçük bet'i kaybeder. Kesilen yalnız orta/ham-equity eldir: Q-J / A-high / alt cep check-back'e gider, turn'de rakibin küçük bet'ine call'la realize eder. Pozisyonla ölçeklenir: BB, EP açıcısına karşı check-raise'i dar tutar, BTN açıcısına karşı top pair'le stack-off'a hazırdır → BTN'den alt cep/orta el check payı artar. Sıkı check-raiser'a karşı cep çiftlerinle raise'e call ETME — nit'e ödeme bu düğümün klasik sızıntısıdır. 18.2'nin "K-K-4 → 1/3" satırı boyu doğru verir; bu -EK frekansın hangi elden kesileceğini söyler.

> **Bet'in sebebi rakibin devam ARALIĞININ ŞEKLİNDEN türetilir; devam = raise ise bet polarlaşır — raise'e devam edebilen değer + ucuza pes eden hava, orta el check-back. Düşük eşleşmiş (3-3-2 tipi) ve A'lı eşleşmiş (A-Q-Q tipi — BB'nin Ax'i top-per call bloğudur) board'da call bloğu vardır, orada range-bet kalır — "eşleşmiş" tek kova değildir.**

### 18.3-EK-3 Islak orta board'da bet lisansı kicker değil YAN-EQUITY'dir
18.3'ün "marjinal showdown → öderse küçük bet" satırı kuru board için durur. Islak orta board'da (8-6-5 fd tipi) "top pair = bet" ezberi K-8/Q-8 ile bet'leyip check-raise yiyince ne fold ne call rahat — iki-sokak bluff-catcher olmaktır. Doğru ayırıcı el gücü değil **"raise'e devam edebilir miyim"** sorusudur: 7-8/9-8 tipi top pair + düz çekilişi (OESD/gutshot) raise'e call eder (turn'ün orta kartları onu iyileştirir, yüksek kartlar rakibi iyileştirmez) → bet; Q-8/K-8'in check-raise'e karşı yapacak bir şeyi yok → check-back, bedava turn. Aynı süzgeç yüksek kartlara da işler: A-K/K-Q tipi hava yenildiği ellerden call/raise yer, katlattığı eller zaten geçtiği ellerdir → bet'in blöf değeri yok, check.

Overpair'de derinliğe bağlı dönüş: 100bb'de AA/KK bet-raise düğümünde value'ya karşı ölü, blöfe karşı sınırda; 9-9/T-T ise koruma ister ve value'yu bloklar (9-9 ayrıca 7'ye gutshot + 9x blocker taşır); check-raise'e karşı o da AA/KK gibi sınırdadır — fark devam rahatlığı değil koruma ihtiyacı → orta cep bet, en büyük çift tuzak/check payı taşır *(kalibre et)*; 40bb ve altında AA/KK stack-off'a razı olduğu için bet'e döner (18.2-EK-3).

> **Islak orta board'da bet aralığını "raise gelirse devam eden" elden kur; top pair'in kicker'ı değil ekstra equity'si karar verir. Rakip agresifse zayıf çekilişleri check'e, nut-fd/güçlü top pair'i bet'e; rakip pasifse zayıf çekilişleri de bet'e ekle.**

### 18.3-EK-4 Düşük board'da blöf adayı "en iyi hava" değil, "daha iyi havayı katlatan hava"dır
5-4-2 r tipi düşük board'da K-Q / K-J / A-J ile "iki güçlü overcard" diye c-bet: bu eller bet'lediğinde katlanan yalnız zaten çöptür; A-high ve daha iyi K-x devam eder → daha iyi eli katlatmadığın, daha kötüden ödeme almadığın bet. K-6 / K-7 / Q-8 tipi orta-yüksek kartlar ise bet'ler: kendinden İYİ havayı katlatır (K-6/K-7 → K-9/K-T'yi, Q-8 → Q-J/Q-T'yi), board'a karşı canlı equity taşır, alt kartlarla rakibin devam aralığını hafif bloklar. Piramit ters kurulur: en güçlü hava check'te realize eder (turn'de per/A gelince value'ya döner), orta hava bet'ler *(çoğunlukla — kalibre et)*.

Havuz notu: BB geç açılışa K-Qo/K-Jo tipi elleri dengeden az 3-bet'ler → bu eller BB aralığında teoriden fazladır → orta-yüksek kart blöfün katlattığı blok teoriden büyüktür *(kalibre et)*. B1'in "blöfü kime, hangi elle" sorusunun flop c-bet sürümü budur; B1.5'in "dipten seç" ilkesiyle aynı yönde.

> **Düşük board'da c-bet blöfünü "hangi daha iyi havayı katlatıyorum?" sorusuyla seç; cevap "hiçbirini" ise en güçlü overcard'larla check.**

### 18.3-EK-5 Bet/blöf kombosu seçiminde ikinci süzgeç — rakibin check-raise malzemesini blokla
Value/blöf kombosu seçerken yalnız "rakibin foldunu bloklamıyor mu" diye bakma — kartın rakibin en doğal CHECK-RAISE malzemesini (peri tamamlayan kart, güçlü kombo çekilişi) bloklayıp bloklamadığına da bak. İki eşdeğer görünen aday arasında (örn. iki farklı overcard+backdoor kombosu), rakibin check-raise'ini besleyen kartı taşıyan kombo daha güvenli bet'tir — raise riskini indirir; öbürü aynı foldu üretse de raise'e daha açık kalır.

**Kural:** Rakibin foldlarını bloklamama testi tek başına yetmez; eşdeğer iki blöf adayı arasında rakibin check-raise malzemesini bloklayan kombo öncelik alır.

### 18.4 Boyut mantığı — 1/3, 2/3, check-back

- **1/3 (küçük):** kuru board range-bet; ucuz fold equity + ince value; **river'da check-fold lüksünü korur** (B11: potu her büyüttüğünde bu lüksü satın alma gücün azalır — bu B11 kuralı flop'ta başlar).
- **2/3+ (büyük):** ıslak board polarize; yalnız potu şişirmek İSTEDİĞİN eller — güçlü value + nut-draw.
- **Check-back:** marjinal showdown value; ıslak/multiway board; pot kontrol + bedava kart hakkı.

> **Boyut = river planının fiyatı. Flop'ta 2/3 attıysan turn'de ikinci fıçının ve river'ın SPR'ını daralttın; havayla o yola girme (B11.1).**

### 18.4-EK Boy ailesi eklemenin gizli maliyeti

Boy ailesi eklemek bedava değildir: en güçlü ellerini overbet hattına taşıdığında küçük bet'in korumasız kalır — rakip ince value ve blöf raise'ini o hatta açar, ince value EV'in oradan sızar. Tek-boy sadeleştirmesinin gizli faydası budur: her sınıf aynı hatta durduğu için raise caydırılmıştır. 18.2-EK'in overbet ailesini açacaksan maliyetiyle aç *(kalibre et)* — kazandığın polar EV, küçük bete kestiğin korumadan büyük olmalı.

### 18.4-EK-2 Polar büyük bet aksiyonu dondurur — rakip raise'lemiyorsa polar'ı bırak, boyu büyüt
18.4'ün "2/3+ yalnız potu şişirmek istediğin eller" satırının iki yüzü var. Polar büyük bet'e karşı rakibin reopen'ı kârsızdır: raise'i nut'a çarpar, blöf raise'i equity'li blöfe çarpar → call/fold'a sıkışır, top pair'iyle bile yavaşlar. Sıkı IP caller için de aynı: büyük c-bet'e raise aralığı teoride neredeyse boştur (çekilişi call için yeterli equity taşır, set/iki-per fıçına karşı yavaş oynar) → büyük bete gelen raise value-yoğun, overpair'le devam sınırda *(kalibre et)*; küçük bete gelen raise'de B19.11 mantığı döner.

Orta eller de içeri girince (88 / A-J tipi ile "büyük range-bet") aralık polar olmaktan çıkar → rakibin en iyi cevabı call'ı büyük ölçüde kısıp raise'i çoğaltmaktır (çoğunlukla); 18.4-EK'in "boy ailesi maliyeti"nin ikizi. Saldırı yüzü: rakip büyük bet'e HİÇ raise'lemiyorsa (havuzun çoğu) check-back'in sebebi kalkar — 88 / A-J'nin check'i raise korkusundandı, call aralığına karşı bet'leri daha yüksek EV'lidir → her şeyi bet'le; AA/KK ise boyu büyütür — rakip senin yerine para koymayacaksa parayı sen koy, overbet sınıfı açılır *(kalibre et; B23.11 ile aynı yön)*.

> **Büyük boy polar kalır (orta eller check); rakip raise'lemiyorsa polar'ı bırak, tümüyle bet'le ve boyu nut'larla yükselt (orta eller küçük/orta boy). Büyük c-bet'e gelen raise = çoğunlukla value.**

### 18.4-EK-3 Boyut seçimi kendi okuma kenarına da bağlıdır — ıslak value+nut-draw'ı bu kalibrasyonun dışında tut
Flop boyunu yalnız rakip aralığına göre değil, kendi postflop okuma/uyarlama kenarına göre de kalibre et — ama bu kalibrasyon 18.4'ün ıslak-board polarize (2/3+) evine dokunmaz: o boy zaten güçlü value + nut-draw'ı şişirmek İÇİN var, okuma kenarın bu kararı geçersiz kılmaz — küçültmek value'yu ucuza satar ve canlı çekilişe ucuz kart verir. Kalibrasyonun evi kuru/statik board ve marjinal-showdown sınıfıdır: orada rakip okuma kenarın güçlüyse solver boyu yerine SPR'ı canlı tutacak şekilde küçük tarafta kal — kalan sokaklarda o kenarı kullanmanı sağlar, zaten bu sınıfta büyük boyun getirisi düşüktür. Okuma geçmişin yoksa ama rakip zayıfsa (rekreasyonel, ileri sokaklarda sık hata yapan) aynı kuru/marjinal sınıfta SPR'ı yine yüksek tut — postflop kenarın tam da böyle bir rakibe karşı en büyüktür, erken küçültmek onun hatalarından gelen EV'yi masada bırakır. Yalnız tanımadığın GÜÇLÜ rakibe/sahaya karşı (ne okuma ne beceri kenarı var) solver boyunu (kuru board 1/3, ıslak polarize 2/3+) birebir uygulayıp basitleştirmek daha güvenlidir çünkü zaten kararların ileri sokaklarda incelikli okumaya dayanmıyor.

**Kural:** Islak board'da value + nut-draw'ı solver boyunda (2/3+) tut — okuma kenarı bu kararı değiştirmez. Kuru/statik board'da ve marjinal-showdown sınıfında kenarın okumaya dayanıyorsa ya da rakip zayıfsa boyu küçült ve SPR'ı yüksek tut; yalnız tanımadığın güçlü rakibe karşı solver boyunu (kuru 1/3, ıslak 2/3+) birebir uygula.

### 18.5 IP vs OOP

| Durum | IP (pozisyon sende) | OOP (pozisyon rakipte) |
|---|---|---|
| **C-bet serbestliği** | Daha serbest — kontrol + equity realize | Daha seçici |
| **Tercih hattı** | Kuru board range-bet, ıslak board polarize | Check-call / check-raise'i tercih et; OOP havayla range-bet TUZAK |
| **Kök hata riski** | Düşük | Yüksek — OOP şişmiş pot en kötü bluff-catcher noktası |

OOP c-bet, station'a value keser ama agresöre kapıyı kapatmaz; marjinal ellerle check-call, güçlülerle check-raise daha sağlamdır. OOP havayla c-bet, seni pozisyonsuz şişmiş pota sokar — kök hatanın ta kendisi.

### 18.5-EK OOP range-bet tuzağının sınırı: 3-bet potunda 3-bettor
"OOP havayla range-bet TUZAK" satırı tek-raise'li potta PFR OOP içindir. 3-bet potunda aralık avantajlı OOP 3-bettor kopuk A-high'da tam-aralık küçük bet atar — orada tuzak değil, baseline'dır; A-yok kopuk orta mono board'da ÇOĞUNLUKLA küçük bet (bağlantı arttıkça, caller'ın flush yoğunluğu (non-nut dahil) büyüdükçe check payı büyür — nut-flush payı Axs ile çoğunlukla sende kalır — *kalibre et*). Ayna yüzü de geçerlidir: düşük bağlantılı board'da (7-6-5) OOP 3-bettor çoğunlukla check eder (overpair'lerin bir kısmı hâlâ bet), IP caller'ın nut avantajı olduğu için stab frekansı yükselir (bkz. B32.5).

### 18.5-EK-2 OOP c-bet'in gizli değişkeni: caller BTN ise açıcı kim?
18.5 tablosu OOP'yi tek satırda "daha seçici" der; 18.2-EK "kimin aralığı board lehine" diye sorar ama açıcı pozisyonunu saymaz. BTN'ye karşı OOP PFR'ken bu değişken frekansı ters çevirir:

- **BTN'nin flat aralığı BB'ninki değildir.** 30bb civarı BTN, EP açışına karşı neredeyse hiç 3-bet blöfü bulmaz; çiftleri, suited broadway'i, AJo tipi elleri flat'ler — dar ve yapılı. "8-2s, J-3o" kütlesi yok → "geniş-zayıf aralığa range-bet" mantığı çalışmaz (18.0-EK-3'ün (a) koşulu düşer). B5.2'nin "flat yok"u SENİN reçetendir; rakip flat'lediğinde bu -EK.
- **EP açıcı:** sıkı yüksek-kart aralığı bu flat aralığına karşı equity'de öndedir, OOP olmasına rağmen realize kaybı küçüktür *(kalibre et)* → yüksek/broadway board'larda sık c-bet, gerektiğinde 2/3; düşük/orta board'da 18.2-EK-5/6.
- **CO açıcı:** geniş aralık, daha geniş ama yine yapılı bir flat aralığına karşı equity'de geride; OOP realize belirgin düşer *(kalibre et)*. Lisans board'a göre bölünür: kuru A/K-high board'da nut avantajı yine CO'da (BTN premium'ları 3-bet'lenmişti) → sık küçük c-bet; bağlantılı broadway/orta board'da (K-Q-J / Q-J-T / J-T-9 tipi) BTN'nin flat aralığı daha iyi vurur → check-ağırlıklı, iyi bir check aralığı kurup check-call/check-raise oynamak sıkı-aralık numarası yapan c-bet'ten iyidir. Düşük board'larda ikisi de check-ağırlıklı — CO'nun 7x/6x'i orada frekansı biraz geri alır.

> **OOP c-bet lisansı board'dan önce "açış aralığım BTN'nin flat aralığından güçlü mü?" sorusuyla verilir. EP: çoğunlukla evet. CO: çoğunlukla hayır → check-ağırlıklı — ama equity geride olsa da nut avantajı kuru yüksek board'da lisans verir; bağlantılı board'da aralığı check kolonunda koru.**

### 18.5-EK-3 OOP c-bet frekansını board değil kendi aralığındaki TOZ oranı seçer — EP range-bet eder, CO check eder
18.5'in "OOP havayla range-bet TUZAK" satırı CO/BTN açıcısı için kalır; EP için "tozsuz aralık" şartıyla kalkar. 18.5-EK-2 açıcı pozisyonunu sordu; mekanizması budur *(oranlar: kalibre et)*. 30bb tek-raise'li, açıcı OOP, BTN caller, K-J-8 / K-T-7 tipi yüksek board:

- **EP:** aralıkta toz yok — 66/77 bile backdoor'la yaşar, kalan her şey board'a bağlanır; BTN'nin EP'ye karşı call aralığı KTo/QTo/JTo taşımaz (3-bet'e ya da fold'a gitti), suited Ax + alt cep yoğun → küçük bete belirgin katlanır → EP tam-aralık 1/3, realizasyon belirgin yükselir. Overpair T-9-x'te 2/3'le para yığar. Range-bet'in evi kuru yüksek board'dur (K-8-3 / A-J-4 tipi); K-T-9 / Q-J-9 gibi bağlantılı board'da BTN'nin aralığı da sert bağlanır (kancalar, suited bağlantılılar, set/iki-per) → EP bile check karıştırır, boyu böler.
- **CO:** aralık toz dolu — A7o/A5o, 65s/54s, K4s/Q6s; BTN'nin CO'ya karşı aralığında offsuit broadway tam frekans → aynı bete az katlanır, orta katmanı call eder → CO ağırlıkla CHECK, aralığı check kolonunda korur. Overpair'i de check'e koyar: BTN zayıf aralığa sık stab atar, overpair EV'sini x/r'dan alır.

Test cümlesi: *"Aralığımın kaçta kaçı toz — bet atmak istemeyen, katlanınca üzülmeyen el?"* Toz oranı yüksekse aralık kendi zayıflarını taşıyamaz, frekans çöker. 18.2-EK'in "kuru board BB-lehine → check" satırının aralık-kompozisyon yüzü.

### 18.6 Multiway istisnası

3+ yollu potta bu bölüm askıya alınır: **flop c-bet frekansı ÇÖKER** (B13.1). Range-bet multiway yok; yalnız güçlü value + gerçek nut-draw. Ayrıntı Bölüm 13.

### 18.6-EK Multiway çöküş kuralının sınırı: iki KAPAKLI blind'e karşı açıcı kuru yüksek board'da range-bet'e yaklaşır
18.6'nın "multiway'de c-bet çöker" kuralı en sert hâlini aralığı kapaksız coldcaller'lara karşı alır. Açıcıya karşı iki BLIND flat'lediyse tablo değişir: ikisinin de en iyi elleri preflop 3-bet'e gittiği için flat aralıkları tepeden kapaklıdır. A-yüksek kuru board'da as'ı BULURLAR — 4.8 BB savunmasına "tüm Ax"i koyar, iki blind varken birinin Ax tutması nadir değil — ama TEPESİ yok: AA/AK/AQ preflop 3-bet'e gitti, kalan Ax zayıf kicker'lıdır ve ikinci bareli taşıyamaz (4.10: "A-high flopta düşük kicker'lı Ax çoğunlukla küçük bet/check ve pot-control elidir"). Hedef bu yüzden fold değil FİYAT: açıcı burada 3-yollu olmasına rağmen küçük boyla çok yüksek frekans bet atar *(kalibre et)* — ve turn planı "as yok" varsayımına değil "as var, kicker yok" varsayımına kurulur (bkz. 18.2-EK-8'in turn satırı). Board bağlandıkça (bağlantılı broadway/orta dokular) çöküş kuralı geri gelir — dördüncü oyuncu girerse de geri gelir: kapaklılık rakip sayısını iptal etmez (13.3). Aynı düğümün ikinci sürprizi: düşük SPR'de set'ler bet'e mecbur değildir — iki sokak yettiği ve iki rakip de zayıf olduğu için set check'e karışır.

**Kural:** Rakip sayısı SABİTKEN (3-yollu) çöküşü tetikleyen rakip aralıklarının kapaklılığıdır: iki kapaklı blind + kuru yüksek board = küçük boy, yüksek frekans (as'ları var, kicker'ları yok — bir sokak öderler); kapaksız coldcaller = çöküş. Sayı birincil değişken olmayı sürdürür (13.3): 4+ yollu'da kapaklı olsalar bile çöküş geri gelir.

### 18.6-EK-2 Multiway c-bet'in üçüncü nedeni — en zayıf aralığa bedava kart yok
18.6'nın "frekans çöker" kuralı blöf ucu için doğru kalır; ama pot 3-YOLLU, board açıcıya yarıyor ve potta TEK geniş overcaller (en zayıf aralık) varsa frekans yine çöker — değişen ŞEKİL'dir: polar bet HU lüksüdür, bu düğümde ÇÖKMÜŞ bet aralığı polar değil merged'dır — merged'in alt sınırı "orta kuvvet" değil, **zayıf aralığın CALL aralığını yenen eller**dir; altındaki orta-kuvvet 13.1'de kalır, check eder. Sınır bu kadar dardır çünkü en zayıf aralığın ucuz realize'ı gerçek bir maliyettir (18.1-EK'in "koruma sahte nedendir" kuralı sınırsız değildir — 18.1-EK-2 o sınırı SPR'yle çizer; buradaki denial de aynı sınırın multiway yüzüdür, sahte değildir). İki agresör fiilen iş bölümü yapar: sen check edersen IP senin yerine betler — bu check'in maliyetini düşürür ve bet frekansını iki zıt yönde çeker; net sonuç merged bir orta yol, ne range-bet ne tam check. Kapsam burada biter: dördüncü oyuncu girerse 13.1 istisnasız döner — top pair bir sınıf düşer, check/pot kontrol; 4+ yollu'da bet'in call'lanma olasılığı denial kazancını yer, iş bölümü de dağılır. Blöf ucu yine ölüdür: sıfır-equity hava multiway'de bet'lenmez (13.3).

**Kural:** Multiway'de c-bet nedeni üçe çıkar — value, fold equity, en zayıf aralığa bedava kart vermemek. Frekans her hâlde 13.1'e göre çöker; 3-yollu + tek geniş overcaller'da değişen ŞEKİL'dir — çökmüş aralık polar değil merged, alt sınırı "zayıf aralığın CALL aralığını yenen el". 4+ yollu'da 13.1 istisnasız döner: orta kuvvet de check. Hava her hâlde yok.

### 18.7 Kalibrasyon

*(kalibre et: son 20 elini üç board dokusuna ayır — kuru/orta/ıslak — ve her dokuda kendi c-bet frekansını çıkar. Rec-ağırlıklı masada hedef board sınıfına ve rakip aralığına göre iki yönlüdür: dinamik board'da ve dar/yapılı aralığa karşı GTO baseline'ının ~%10–15 altı (fold equity düşük); statik/eşleşmiş/düşük-mono board'da geniş aralığın dibine karşı küçük boyla baseline'ın ÜSTÜ — bkz. 18.0-EK-3.)*

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

### 18.10 Sığ bant (15–25bb) IP c-bet: bet ancak jam'e devam edebilen elle
Bu bölümün tabloları 30bb+ içindir. 15–25bb'de BB'nin cevabı yığınla jam'dir (havuz Qx, çekiliş, per+çekilişle küçük bete de orta bete de jam'ler; teori çoğunu call'da tutar) → bet lisansın "jam'e devam edebilir miyim"e iner. B3'ün jam/fold doktrini açıcı için ≤12bb'de kesindir; 15bb BTN min-raise ağacı yaşar *(kalibre et)*. B19.1-EK ve B30.7'nin IP aynası.

**Check frekansı iki yöne gider; yönü orta katmanın jam'e karşı durumu belirler.**
- **Düşük board (5-4-2 r tipi):** A-x offsuit bile jam'e call eder (per'e karşı iki overcard + backdoor ≈ sınırda) → derinde check eden A-x sığda bet'e girer → check DÜŞER.
- **Orta/yüksek dinamik board (T-8-3 / 9-8-6 / K-Q-J fd tipi):** BB top pair'ini ve çekilişini jam'ler; senin Q-x / A-high / zayıf çekilişin jam'e ne call ne fold ister → check YÜKSELİR; 40bb'de range-bet olan board 15bb'de yarı-check olur *(kalibre et)*.

**Dinamik board'da üç kova (Q-7-6 iki-renk tipi):** bet-fold'dan gocunmayan eller (backdoor'lu hava, zayıf per) küçük; bet-call eller (top pair, güçlü çekiliş) orta; A-high / alt cep / JJ tipi alt-overpair check-back — AK/AJ küçük bete jam yiyince call belirgin eksi, bet-fold da pahalı. Top pair'in boyu KÜÇÜLÜR: parayı rakip koyar; rakip Qx ile flat'liyorsa büyük boy geri gelir — boyu rakibin raise sıklığı seçer. Çekiliş-değer dönüşü: derinde çekilişi bet'le, top pair'i yavaş oyna; sığda tersi — top pair "nut", fast-play; çekiliş jam'e call edemiyorsa check. Havuz sığda jam'i teoriden sık bulur → check payını bir kademe daha artır *(kalibre et)*.

> **Sığda bet ancak jam'e devam edebilen elle. Orta katmanın rakibin jam aralığına karşı sınırda-önde ise (düşük board) check azalır; geride ise (dinamik orta/yüksek board) check artar. Bu üçlü 30bb+'ya taşınmaz — orada 18.3 aynen durur.**

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

### 19.1-EK Sığ istisna (≤15bb): yüksek board'da KÜÇÜK donk, düşük board'da JAM

19.1 varsayılanı 30bb+ içindir. ≤15bb BB'de (rakip daha derin açtı) iki şey değişir:

- **Yüksek-kart KURU board'da donk VAR, jam DEĞİL.** K-9-4 rainbow tipi board'da top-pair'in kırılgan değildir; koruma değil VALUE ister. Sorun IP'nin cevabı: rakip sığda ikinci per, alt per, alt cep ve A-high'la check-back ağırlıklıysa bu senin K-x'ine ödeyecek katmandır ve check ettiğinde bedava turn görür — jam o katmanı katlatır, yalnız seni geçen kalır; küçük-orta lead katmanı içeride tutar. Rakip sığda küçük range-bet atıyorsa lead gereksiz: check-call / check-jam *(kalibre et)*. Kombo: ödeyecek katmanı (9-x, orta cepler, A-high) BLOKLAMAYAN zayıf-kicker K-x lead, o katmanı bloklayan K-9/K-4 tipi check-tuzak *(kalibre et)*. Bağlantılı K-Q-9'da koruma ihtiyacı geri döner — bu satır oraya taşınmaz.
- **Düşük/orta board'da lead çoğunlukla JAM ya da CHECK,** küçük lead sınırda *(kalibre et)* — mekanizma 30.7'de.

19.1'in "tek per ile büyük donk = kök hata" satırı 30bb+'da aynen durur; sığda düşük/orta board'da orta per'in (sınırda alt per'in) jam'i kök hatanın anti-tezidir. Stack eşiği açıkça yazılı ki 30–60bb'ye sızmasın.

### 19.1-EK-2 20–30bb bandı: düşük-bağlantılı board'da lead aralık-genişliğine yaklaşır — boyu ikinci kartın geleceği seçer

19.1 varsayılanı 30bb+ ve yüksek board içindir; 19.1-EK ≤15bb'yi jam/check'e bağladı. Aradaki bant — baseline'ın altı — kendi kuralını taşır:

- **Board:** 7-high ve altı, üç düşük kart yakın (6-5-4, 7-6-5, 7-6-4). BB aralığı kent/iki-per/set/düşük per yığını; EP/HJ'ninki offsuit broadway + cep çift. 8/9-high'da frekans hızla erir, A/K-high'da sıfıra yakın *(kalibre et)*.
- **Ne kadar:** 20bb'de ağırlıkla küçük boyla tam aralığa yakın (kombo top pair tabloya göre büyük/jam'e ayrılır); 30bb'de kabaca üçte-iki; 60bb'de yarının altı *(kalibre et)*. Lead'in parası rakibin fold'undan değil kötü fiyata devamından gelir; frekansı en çok IP'nin overcard-Ax blöf-raise'i düşürür — havuz onu atmaz, eğri düzleşir. Raise yersen 20bb'de per+gutshot kombosu (ve daha iyisi) devam — salt gutshot ve zayıf tek per raise'e atılır; 30bb'de zayıf top pair bet-fold.
- **Boy:** 19.1'in "tek per büyük donk = kök hata"sı 30bb+'da durur; burada top pair ikiye ayrılır *(kalibre et)*:

| Top pair | Boy | Neden |
|---|---|---|
| Per + ikinci kart çalışıyor (7-6, 8-6, 6-3) | Büyük, sınırda jam | Gelişince aksiyon ölür ya da kente yenilir — para ŞİMDİ |
| Per + yüksek kicker (K-6, Q-6) | Küçük | KQ/KJ'yi içeride tut, turn'de per yapsın — cooler parası |

BTN'e karşı boy büyür (offsuit 9x/Tx/zayıf Ax bloğu). 60bb'de tablo kapanır: 7x "üç sokak küçük-orta" elidir.

### 19.1-EK-3 Lead call yedi, turn: boyu kartın yüksekliği TERS seçer — river geometrisi asıl seçici (20–30bb)

Hedef hep aynı: IP'nin flop'ta devam eden offsuit broadway bloğu. Boy, o bloğun turn'de ne yaptığına göre:

- **Yüksek turn (Q/K/J):** bloğun bir kısmı eşleşti (ödeyen sınıf), kalanı (eşleşmeyen broadway'ler; örn. Q turn'de KT/JT) küçük bete de katlanır → KÜÇÜK verimli. Havuz "korkutucu kart, range-check" yapar — sen yarıdan fazla FREKANSLA (küçük boyla) bet et *(kalibre et)*.
- **Düşük/eşleşen turn (6/4/2):** blok eşleşmedi ama overcard'larıyla küçüğe devam eder → BÜYÜK, üçte-iki civarı *(kalibre et)*. Blöf: bloğu bloklamayan düşük kartlar (9-2/5-2 tipi); K/Q taşıyan blöf onun fold'unu bloklar, T taşıyan KT/JT'yi keser — o da aday değil.
- Flop'ta büyük lead attıysan blok zaten düştü → yüksek turn'de bile bet.

**River geometrisi:** düşük turn + büyük bet → SPR ~1, hemen her river'da 7x/6x'in çoğuyla pot-jam, çoğunlukla tek boy. Yüksek turn + küçük bet → river'a çok orta el taşınır, value-jam sınıfı erir, boy üçe bölünür. Turn boyunu "river'da kaç value-jam'im olacak?" seçer. 11.1 tablosu elin sınıfına, bu madde rakibin bloğuna göre seçer — lead-call sonrası ikisi de okunur.

**Sınır:** küçük-küçük-jam sığda çalışır; ~50bb+'da rakibin overfold'unu sağmak river'da büyük bet'i kaybettirir → derinde flop/turn'ü geometriye göre büyüt *(kalibre et)*. Aynı kural IP c-bet'e de taşınır.

### 19.1-EK-4 İkinci tetikleyici: rakibin c-bet İSTEKSİZLİĞİ — dinamik orta board'da overpair en sık lead eli

19.1 lead'i board sahipliğine bağlar. Bağımsız ikinci tetikleyici: doku IP'nin aralığının büyük kısmını bet'ten caydırıyorsa (orta-bağlantılı iki renkli 8-7-5 / 9-7-5: Ax/KQ/KJ bet edince katlattığı az, check-raise'e açık; zayıf per ve orta Qx bet istemez) check'in bedeli bedava turn'dür — ona da sana da. Soru "board benim mi" değil "rakip bu dokuda bet ister mi".

- **Aralık:** neredeyse tam. Overpair EN SIK lead eli *(kalibre et)* — check-call'a taşımak en zayıf kullanım: rakip check-back'le 9x/5x'ini bedava realize eder. Top pair koruma için biraz büyük, zayıf per küçük, T9/J9 overcard'ları equity'yle. Bu nut avantajı iddiası değil, rakibin bet istememesidir (19.12 ayrımı korunur).
- **Turn (overcard K):** ~%40 boyla devam *(kalibre et)*; overpair'i çoğunlukla bet et — K, IP'nin KQ/KJ devamlarını güçlendirdiğinden bir kısmı check-call'a kayar — 5x/7x check'e çekilir → aralık polarlaşır. IP'nin A-high'ı teoride bile fold — havuz call eder, senin value'n.
- **River (nötr-kötü Q):** overpair CHECK — rakibin blöf adaylarını unblock ediyorsan onu blöfe bırak (11.1-EK-2); value-jam Kx/kent'te.
- **IP dersi:** dinamik board'da bet-bet'e A-high'la turn call kötü — river'da blöf kapısı yok, A river'ında lead'ci zaten check eder.

Sığ-orta stack (~25–35bb) örneği; derinlikte mekanizma aynı, frekans düşer *(kalibre et)*.

### 19.2 Gecikmiş c-bet — PFR flop check, turn bet

Gecikmiş c-bet: PFR'sın, flop'u check-back ettin (pot kontrol / bıraktın / tuzak), turn'de bet. Bu, B18'in otomatik c-bet refleksinin DİSİPLİNLİ zıddıdır: geniş flop c-bet'i atlayıp turn'de bir SEBEP çıkınca bet edersin.

| Turn'de bet et — sebep | Bet etme |
|---|---|
| Turn'de geliştin (per/draw yakaladın) | Sebepsiz — flop give-up'ını turn'de bloat'a çevirme |
| Villain ikinci kez check etti (zayıflık) | Villain turn'de lead/check-raise eğilimli |
| Turn kartı senin aralığına yaradı | Equity yok + fold equity yok |

Marjinal yapılı elle: flop check → turn ince value bet (sana check gelirse). Küçük boyut.

### 19.2-EK "İkinci check = zayıflık" yalnız LEAD ATAN rakipte — lead aralığı olmayanın check'i tüm aralığıdır (AA ile bile check-back)

19.3 "PFR flop'u check-back ettiyse capped" der — doğru, güçlü elleri flop'ta bet ederdi. Aynı mantık OOP'nin turn check'ine otomatik taşınmaz: havuzun çoğunun turn lead aralığı YOKTUR. 19.2 tablosunun "villain ikinci kez check etti" hücresi bu şarta bağlıdır.

- **Lead atan reg** (19.12'yi oynayan): K-7-3-7'de 7x/güçlü Kx/kent draw'la lead eder → check'i capped → 19.2: ince value + blöf.
- **Lead aralığı olmayan havuz:** check'i tüm aralığı — 7x, Kx, 54/65 semi-blöf, QT/T8 ıskalaması. PFR IP'nin cevabı neredeyse tam aralık CHECK-BACK, AA dahil *(kalibre et)*. Neden: (a) flop küçük bet offsuit broadway bloğunu zaten katlattı, kalan aralık board'a yoğun; (b) 9x/QJ ile bet 7x'ten VE semi-blöften check-raise yer; (c) check-back'in EV'si river'da doğar — QT/65 blöfler, zayıf Kx blok-bet atar → raise'lersin. 9-7-3-7'de biraz bet açılır (TT/JJ tipi orta cep perleri hedef).

**Exploit:** havuz IP bu turn'de ince bet + fazla blöf yapar → orta-kart-eşleşen turn'de OOP check-raise ve river blöf hacmini aç. 11.1 "board eşleşti → overpair check" satırının mekanizması budur.

### 19.2-EK-3 Kapalı aralığa karşı boyu büyüt
19.2'nin "marjinal yapılı elle küçük boyut" kuralı ince value içindir; rakibin devam aralığı beklenenden dar ve orta-güce sıkışmışsa (örn. havuzun top pair'i hep bahis ettiğini biliyorsan, rakibin flop check'i — check-BACK değil, bu düğümde ilk checker rakiptir — zaten üst-güç kesimden arınmış demektir), value+blöf karışımı taşıyan gecikmiş c-bet'in boyu yarım pota değil pota yakın bir aralığa çıkar *(kalibre et)* — küçük boy herkese "ucuz yan-call" fiyatı verirken hedeflenen boy rakibin "bazen ödemek zorunda ama her el değil" hissettiği noktadır. Şart: kendi check-back aralığın capped OLMAMALI — turn'de gelişen ya da tuzak için tutulan güçlü ellerin payını taşımalısın, yoksa büyük boy raise'e açık kalır. Aralık river'a kadar iyice daralıp kendi elinin aralığı da nut-ya-hava'ya (polar) yakınsadıysa aynı mantık gerçek bir overbet blöfünü de meşrulaştırır — küçük boyun aksine.

**Kural:** Rakibin devam aralığı beklenenden dar ve orta-güce sıkışmışsa (kendi aralığın capped değilse) boyu küçültme büyüt — küçük boy herkese ucuz yan-call verir; aralık river'a kadar daralıp kendi elin de polarize olduysa overbet meşrudur.

### 19.2-EK-4 İyi rakibin art arda iki check'i
19.2-EK reg'in TEK flop check-back'ini "kapalı" diye okur; iyi/düşünen bir rakip flop VE turn'ü üst üste check ederse (board dokusu yeni bir bahis sebebi vermediyse) bu çift-check aralığı capped'dir — güçlü el kalmadı — ve içinde bol GIVE-UP hava taşır: gerçek oyuncular, iyileri dahil, checked aralıklara teoriden fazla hava eklerler (bırakma refleksi dengeden ağır basar, eksik değil fazla). Bu kümeye karşı büyük/polarize river bet'i sık fold alır — çünkü aralık üst güçten arınmış VE hava payı bol; küçük-orta çift, zayıf Ax, zayıf broadway high-card tipi "showdown'u var ama barrel'a güvenmiyor" eller de kümede ama bunlar bet'i genelde ÇAĞIRIR, over-bluff'ın kazancı onlardan değil boldalan havadan gelir (gutshot'lı broadway ayrı kümedir: turn'de zaten neredeyse showdown-değersizdir, river'da ya value'ya ya da havaya döner — bu orta-güç kümesine girmez). Sinyal rakibin GERÇEK davranışından gelmeli: rakibin çift-check sonrası river'da fold ettiğini gördüysen over-bluff et; sırf "iyi oyuncu" etiketiyle frekansı artırma — bilinen iyi bir reg river'ı defend/hero-call etmeye en yatkın rakiptir, exploit'in tetiği rakibin sızıntısıdır, unvanı değil. Sinyal net değilse (rakip havuz-tipi, teşhissiz) 19.2-EK'in genel havuz okumasına dön.

**Kural:** Rakibin çift-check sonrası river'da fold ettiğini GÖRDÜYSEN büyük/polarize boyutla over-bluff et; sırf "iyi oyuncu" olduğu için frekansı artırma — teşhissiz rakipte genel havuz kuralına dön.

### 19.3 Probe bet — flop check-check sonrası OOP bet

Probe: flop check-check gitti (OOP'sun, PFR flop'u check-back etti = zayıflık, aralığı capped). Turn'de (ya da river'da) sen bet atarsın.

> **PFR flop'u bıraktıysa güçlü ellerin çoğu flop'ta bet ederdi → aralığı capped. Turn'de bu capped aralığa OOP bet ile inisiyatifi al.**

| Probe AÇIK | KAPALI (→ check) |
|---|---|
| PFR check-back'i zayıflık (rec norm) | PFR güçlüyle tuzak için check-back (nadir, kurnaz reg) |
| Turn kartı senin aralığına yaradı | Turn kötü, aralığını ıskaladı |
| Elin showdown value'suz (bet en iyi kullanım) | Marjinal yapılı el → check-call ile realize et |

Boyut: küçük-orta. "Flop check-check → turn/river çalınır mı" sorusunun cevabı: evet, capped aralığa karşı.

### 19.3-EK Probe boyu: turn'ün SANA verdiği sınıf + rakibin c-bet frekansı seçer — "küçük-orta" yalnız geniş-zayıf check-back içindir

**Kovalar** *(kalibre et)*:

| Turn sana ne verdi | Örnek | Boy |
|---|---|---|
| Orta-value yığını (offsuit Qx'in tamamı sende; 6-6-3-Q'da trips'ten kat kat fazla) | 6-6-3-Q, 8-5-2-Q | Küçük merged (~üçte-bir): A/K-high öder, raise'e açılmaz; river'da büyür |
| Ara: overcard bloğu hedef | 7-6-4-9 | Yarım pot — "AQ hangi boya katlanır?" |
| Nut + hava (value ~nut; blöf adayı bol: offsuit Ax, 5x, gutshot, FD) | 7-6-4-4, T-9-3-6, K-Q-5-2 | Büyük polar 1.2–1.5×: küçüğe katlanmayan orta katman büyüğe katlanır (7644/T936'da hedef AK/AQ/cep çift; KQ52'de A-high + cep çift — AK/AQ orada per) |
| Nut ona geçti | 7-6-4-A | Aralık check |

26.6'nın yüksek-SPR akrabası: orada büyük kova jam, burada overbet. River onun aralığını eşliyorsa (K-J-7-3-T) 2/3–pot'a in.

**Rakibin c-bet frekansı.** Aralık-bet'i bilmeyen IP birinci/ikinci katmanı bet eder, üçüncüyü (A-high, K-high, underpair, zayıf Jx) "bet'in ne işi var" diye check eder → düşük c-bet frekansı tuzak değil "üçüncü katman check-back"idir; o katman büyüğe katlanır, küçüğe öder → probe BÜYÜK ve tam aralığa yakın *(kalibre et)*. Yüksek-frekanslı reg'in nadir check-back'i ayrı hayvandır → tabloya dön. 23.10'un over-bluff uyarısı IP-barrel içindir; bu madde OOP probe — ama düşük-c-bet etiketi olmadan probe'u büyütmek tam o over-bluff'tur.

### 19.3-EK-2 River probe (x/c flop, x/x turn): güçlü sınıf 2× pot, jam sınırda — sıkı aralığa tek boy, genişe blok + 2×

19.3'ün "(ya da river'da)" parantezi. BB vs EP 60bb, 6-5-3'e küçük c-bet call, turn T check-check, river 6 (SPR ~4–5). IP'nin turn boyları bu düğümde pot ve üstü (polar) → check-back'i overpair'siz, güçlü Tx'siz, set'siz gelir; kalan A-high catcher'lar (AK/AQ/AJ), 77–99, birkaç zayıf Tx. Zayıf ama boş değil — "fiyata göre öder" aralığı.

- **Boy:** 6x trips / 7-4 / boat için **2× pot** *(kalibre et)*: Tx ve çiftler öder, iyi A-high catcher'lar (A5/A3) call. **Jam (5× pot) sınırda:** ona A5/A3 de 88 de katlanır, ödeyen yalnız 6x — fazladan kazanç yok, kaybedilen catcher var. 11.2'nin "overbet" satırı 5× potu kapsamaz; catcher yüzünde 2×'e iyi catcher call, 5×'e fold. Blöf 2×'te: 6x'i (A6 kicker'ını) bloklayan adaylar listenin BAŞINDA — rakibin call'larını azaltır; K7-suited tipi 7x de iyi (77 catcher'ını bloklar); rakibin fold ettiği A-high'ları bloklayanlar listenin sonunda.
- **Rakip pozisyonu:** EP'ye tek boy (ince value ödeyeni yok, blok'un hedefi yok); CO'ya iki boy — 3x/5x/Tx ile küçük blok + zayıf 6x dahil 6x/74/boat ile 2× *(kalibre et)*.
- **Dipnot:** turn'de IP polar büyük bet atar → check-call aralığına boş river'ı savunacak çift bırak. Havuz hipotezi: bu düğümde havuz over-call eder → value'ya yaslan, blöfü kıs *(showdown'la doğrula)*.

### 19.3-EK-3 Probe düğümünde nüt'le varsayılan yine bet — indüksiyon yalnız okumaya dayalı, kuru turn'de istisna
Flop check-check sonrası turn'de set/iki-per gibi gerçek nüt elindeyken varsayılan hat yine BET'tir: 19.3'ün kurduğu gibi PFR'ın flop check-back'i onu capped bırakır, capped aralık nüt'e karşı bol call verir. İkinci kez check ("indüksiyon") bu varsayılanın üstüne binen, okumaya dayalı bir İSTİSNADIR — genel kural değil. Yalnız IP'nin ikinci check'e karşı stab frekansı gerçekten yüksekse (havuzda IP iki check gördükten sonra senin capped olduğunu varsayıp orta değerini bile serbestçe bet'lemeye başlıyorsa) ikinci check + turn check-raise/jam, doğrudan bet'in tek başına çekeceğinden daha fazlasını alır — parayı rakibin kendisi koyar. Bu okuma yoksa doğrudan bet kal; IP'nin "orta değeri" zaten probe'a call verecek ellerdir, check'in kazancı ancak bu okumayla gerçek bir kazanca döner. Mekanizma 32.6-EK-2'nin "koruma değil indüksiyon" ilkesiyle aynıdır, yalnız düğüm farklıdır: orada 3-bet potu IP 3-bettor'ı, burada tek-raise'li probe düğümü OOP'yi konu alır. Doku filtresi de şart: indüksiyon yalnız kuru/statik turn'de düşünülür — draw-ağırlıklı (ıslak) turn'de nüt'ü check etmek, IP check-back yaparsa bedava kart verip flush/düz çekilişinin equity realize etmesine izin verir; bu düğümde nüt'le check'in en pahalı hata modudur, ıslak turn'de doğrudan bet (koruma + değer) kalır.

**Kural:** Probe düğümünde nüt elin varsa varsayılan yine doğrudan bettir (capped aralık call verir); ikinci check + check-raise/jam SADECE kuru/statik turn'de VE IP'nin ikinci check'e karşı stab frekansı yüksek olduğunu GÖRDÜYSEN — okuma yoksa ya da turn ıslaksa doğrudan bet.

### 19.4 Stab — IP, check gelince potu al

Stab: IP'sin, herkes sana check etti (flop ya da turn). Kimsenin istemediği potu küçük bet ile al. En temel, en düşük riskli inisiyatif aracı — sana check geldiyse herkes zaten zayıflık gösterdi.

| Stab AÇIK | KAPALI |
|---|---|
| HU, sana check geldi, herhangi equity/fold equity | Multiway (biri tuzakta) |
| Checker'ların ıskaladığı board | Checker'ların aralığına çarpan board |
| Boyut küçük | Check-raise eğilimli villain / SD value'lu el bedava showdown istiyor |

### 19.4-EK Stab tablosuna 3-bet-pot satırı
3-bet potunda iki stab hattı vardır. (1) Caller IP, düşük board (7-6-5 / 6-5-4), 3-bettor check etti: küçük stab neredeyse tam-aralık — 3-bettor'ın broadway'leri hiçtir; sınır sorusu "3-bettor'ın overcard/broadway kesimi düz çekilişi alıyor mu?" (8-7-6 / 9-8-7 ve iki üst kartı ardışık 9-8-2 / 8-7-3 tipi — 9-8-2'de JT/QJ, 8-7-3'te T9/JT çekiliş alır — evet → seçici; 9-5-2 / 8-4-2 tipi gerçek kopuk hayır → serbest; *kalibre et*). (2) Yüksek-kart bağlantılı (K-Q-x tipi) board'da OOP check'ine karşı KÜÇÜK stab verimsizdir — check aralığının çoğunu (cep çiftleri, gutshot'lı broadway'ler) katlatmaz, yalnız zaten en zayıf eller düşer; yarım pot civarı + A taşımayan düşük suited bağlantılı / gutshot blöfler (düşük Ax katlanan A-high bloğunu bloklar, listenin sonunda) (bkz. B32.5). Tablonun "boyut küçük" hücresi ikinci hatta geçerli değildir *(kalibre et)*.

### 19.4-EK-3 3-bet potunda IP stab'ın ikinci sokağı: flop küçük, turn ÇOK küçük — jam bu hattın parçası değil
19.4-EK ve 32.5 flop stab'ı verdi; hat orada bitmez. OOP 3-bettor'ın range-bet etmesi gereken orta-düşük board'u (9-6-4 tipi) check ettiği düğümde *(kalibre et)*:

- **Flop küçük stab** — hedef, range-bet'i atlayan orta-zayıf eller (KJ/KT/A5 tipi, value görmeyen AJ/AQ). OOP'nin cevabı ikiye ayrılır: çiftler ve overpair'ler x/r; A-high (AK/AQ/AJ, backdoor'lu KQ) check-call.
- **Turn brick, yine check → ÇOK küçük (min'e yakın) bet** *(boy: kalibre et)*. Check-call bloğu A-high'dır; küçük bete teoride kısmen, havuzda büyük ölçüde katlanır. "SPR ~1, jam doğal" refleksi aynı bloğu daha pahalı katlatır ve x/r'a gitmeyip check-call'da kalmış çiftlere karşı riski büyütür.
- **Flop'ta x/r yedin → per, fold.** Rakibin x/r aralığı per-ağır; stab'ın per'siz blöfleri (QJ/T8s/87s tipi backdoor+gutter) burada biter, T9/86s tipi ince value/protection stab'ları da bet-fold olur.
- **Derinlik:** 40bb'de çalışır, derinde daha kârlı — turn küçük bet'in ardından river'da hâlâ fold equity kalır.

OOP tarafı (hangi 3-bet aralığıyla check yerine küçük range-bet) 32.5-EK-2'de.

### 19.4-EK-2 A-düşük board'da OOP check'ine IP tam-frekans stab — OOP'nin cevabı ince VALUE x/r, bluff-catch değil (tek-raise'li, 30bb)

Havuz iki koltukta da teoriden pasiftir ve her pasiflik ayrı exploit açar. A-5-2 / A-6-2 rainbow'da OOP açıcı check etti (Ax'siz aralığı ölü — c-bet yüzü B18'de):

- **IP (caller):** "onun board'u" diye check-back etme. Teoride OOP'nin check aralığı küçük stab'e çoğunlukla ~%25–30 katlanır *(kalibre et)*; havuz J9/Q9/K8s/98s tipi her şeyi katlar → %40+ *(kalibre et)*. Her karışık blöf adayı (J9s/T8s/K9s/Q9s) tam frekansa çıkar; tablonun "boyut küçük" hücresi burada aynen geçerli.
- **OOP (açıcı):** stab'e karşı "bluff-catch aralığımı koruyayım" diye AQ/AJ'yi call'da tutma. Teori x/r'ı dar tutar çünkü zayıf call'ları (J9/Q9) korumak ister; havuzda o call'lar zaten yok ve IP'nin stab'i teoriden az blöf, çok equity taşır → en yüksek EV cevap AQ/AJ/AK/set ile İNCE value x/r; bluff-catch genişletmek değil.
- **A-K-x rainbow:** havuz alt ceplerini (22–99) fazla katlar → onları bloklamayan QT/JT tam-frekans blöf; Kx'i daha az bet — kötüler zaten katlanıyor, ince value/koruma EV'si düşer (üstelik K'n rakibin ödeyen Kx'lerini bloklar).

23.8 cheat kartına "A-düşük OOP-check düğümü" satırı adayı.

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

### 19.10-EK Cover eden SB'nin lead haritası: üç rejim, ve lead flat lisansının parçasıdır

19.10 yönü verdi: cover ediyorsan lead açılır. Harita şudur — prim ~sıfır büyük-stack SB, geniş flat; kapsanan sıkı açıcı, prim yüksek. Toplam lead payı %40'a yaklaşır *(kalibre et)*; lead'siz oynarsan flat aralığının alt yarısı kaybeder. **Lead geniş flat'in lisansıdır, süsü değil.**

| Board | Rejim | Mekanizma |
|---|---|---|
| **A-low rainbow** (A-4-3) | Yarım pot polar, orta frekans | Düşük set/iki-per sende, açıcıda yok; blöf düşük kartlar; açıcı orta cep + broadway katlar |
| **A-low fd** | Daha sık, orta boy | Yüksek-equity çekilişler sende |
| **A+broadway** | Lead yok (A-T-x hafif) | Açıcının aralığı çok güçlü |
| **Monotone** (A-Q-3) | Yarım pot, yüksek frekans | Board açıcının suited broadway renklerini yaktı; renk sayısı sende; çıplak Ax katlanır |
| **K-high** | Yok (mono, K-5-4 hariç) | Açıcının board'u |
| **Q-low** (Q-3-2) | Büyük polar + **out temizleme** | 33/22 value; A7s/K8s blöfü daha iyi Ax/Kx'i katlatır, senin overcard out'un canlanır |
| **J-low / J-orta** | J-4-3 büyük; J-8-7 küçük-sık | Set sende / eşleşmemiş yüksek kartı geniş value'yla hedefle |
| **T-high** | Kopuk check; bağlantılı küçük range-lead; T-9-8 fd büyük | Nut avantajı boyu büyütür |
| **Düşük eşleşmemiş** | Küçük range-lead | Per avantajı; açıcı az katlanır ama her turn küçük devam |
| **Eşleşmiş / kuru 9-4-2 r** | Check | Value küçük / 9 açıcının aralığında |

- **Turn'den sonra:** düşük kart küçük range-bet, yüksek kart polar-büyük; board eşleşen düşük turn check.
- **Harita flat aralığının fonksiyonudur:** bubble-yakını CO-vs-SB'de Q-high lead SIFIR (flat'te offsuit Qx yok), J-high %70 *(kalibre et)* (AJo var), K-low küçük-sık lineer. Kendi flat aralığının hangi board'da set/top-pair taşıdığını bil; harita oradan çıkar.
- **Havuz:** açıcı K9s/A5s tipi teorik call'ları katlar → lead frekansını teorinin üstüne çek.
- **Ayna:** SB lead etmesi gereken board'da etmiyorsa açıcı range-check-back eder.

> **Cover eden SB'nin lead'i üç rejimdir: A-low / Q-low / J-low büyük-polar (düşük set + out temizleme), düşük ve bağlantılı orta board küçük range-lead, A+broadway / K-high yok. Lead'siz geniş flat kaybeder — lead flat lisansının kendisidir.**

### 19.11 Flop-3-bet düğümü (c-bet raise yediğinde)

Kitap flop'ta c-bet → raise → **3-bet** düğümünü hiç işlemedi; iki yönlü para taşır:

- **Saldırıda:** rakibin c-bet'ine flop-raise atmak ucuzdur çünkü havuz flop-3-bet'i neredeyse hiç bulamaz — 3-bet yemeden turn görürsün, blöflerin equity'sinden koparılmaz (raise ucuza realize eder); raise frekansın teoriden birkaç kat yüksek olabilir *(kalibre et)*.
- **Savunmada:** kendi c-bet'in raise yediğinde senin de bir flop-3-bet aralığın olmalı, yoksa aynı exploit'i sen yersin. Aralık: güçlü value + düşük-frekans düşük-equity blöfler; offsuit eller 12 kombo taşıdığı için düşük frekansta bile yük taşır — tam kompozisyon *(kalibre et)*.

> **C-bet'ine raise yiyince "call veya fold" ikilisi eksiktir — flop-3-bet üçüncü seçenektir: havuz onu neredeyse hiç ATMADIĞI için hem rakibin c-bet'ine raise atmak hem de raise yediğinde kendi flop-3-bet aralığını kurmak kârlıdır. Ama havuzdan NADİREN gelen flop-3-bet aşırı value-ağırlıktır → ona karşı overfold et.**

### 19.11-EK Düğümün iki sınırı: büyük c-bet'e IP raise teoride çoğunlukla YOK (gelirse value) — raise-happy rakibe küçük boy + flop-3-bet
19.11'in "raise ucuz" satırı rakibin KÜÇÜK bet'ine karşıdır; iki uç onu sınırlar *(kalibre et)*.

**Büyük polar c-bet'e reopen kârsız.** Sıkı IP caller'ın büyük bete raise aralığı teoride neredeyse boştur — çoğunlukla call'a çöker: çekilişi call için yeterli equity taşır, jam'lenmek istemez; set/iki-per fıçına karşı yavaş oynar; raise-fold edecek eli yok. Raise yalnız küçük bete açılır (per+gutshot, backdoor'lu Ax, AA/KK hızlı). → Büyük c-bet'ine gelen raise value-yoğun, overpair'le devam sınırda; küçük bete gelende 26.2 döner. Turn/river devamı 11.1-EK-3 ve 26.4-EK'te; saldırı yüzü 18.4-EK-2.

**Raise-happy rakip (B23 etiketi):** küçük bete deli gibi raise'leyene "büyük bas" değil, raise'leyeceği düğümü VER — AA/QQ/AQ'yu küçük boya taşı, rakip potu kursun, sonra flop-3-bet/jam (≤40bb standart; derinde non-all-in, aynı yön). Teşhis ikiye ayrılır: (a) ince value'yu da (Q-9 tipi top pair) gutshot'ları da raise'liyorsa → alt cep/A-high bet-fold da bet-call da istemez → check artar, bet küçük-only; (b) yalnız blöf/gutshot raise'liyor, ince value'yu call'da tutuyorsa → tam-aralık küçük bet + per/gutshot/top pair'le 3-bet jam — raise-call'a mecbur el bulamaz. Turn — (a) profili: ince value'yu flop raise'ine harcadığı için call aralığı turn'de capped → büyük turn bet aralığın çoğuyla; (b) profilinde call aralığı ince/güçlü value içerir — capped varsayma. 19.11'in "havuz flop-3-bet bulmaz"ının ters profili: bu rakibe flop-3-bet'i SEN bul.

### 19.12 Turn lead (flop'ta bet-call SONRASI): avantajın TÜRÜ boyu seçer

19.3 probe'dan farkı: flop'ta rakip BET attı, sen call ettin, turn'de OOP lead düşünüyorsun. **Equity avantajı** ile **nut avantajı** farklı boy ister.

Flop'ta büyük bet'e call ettin → aralığının altı katlandı, rakip hâlâ blöflerini taşıyor. Orta-düşük turn (BB aralığının yoğunlaştığı bölge) orta-düşük kartla dolu aralığına yeni per/draw ekler (board eşleşirse trips/iki-per), onun overcard-blöflerine değil → equity sana kayar *(kalibre et)*; ama nut ONDA: overpair/set'leri aralığında bozulmadan duruyor, senin en güçlü ellerinin bir KISMI flop'ta x/r'a gitti — aralığın kısmen kapaklı, onunki değil. Büyük bet yanlış — havası katlanır, ödeyen seni geçer. Araç: ÇOK küçük lead *(kalibre et)*, GENİŞ aralık (orta per, zayıf top-pair, iyileşen draw). Test: rakip "küçük bete hiç katlanmam" dese memnun musun? Evet → küçük lead. "Her şeyle all-in olsak" dese? Hayır → büyük bet yok.

**Lead aralığın = flop'ta RAISE'lemediklerin.** Büyük flop bet → call-ağırlıklı savunma → sınıfı bozulmamış geniş aralık → küçük-geniş lead alanı geniş. Küçük flop bet → çok raise'ledin (top-pair, kent draw, alt-per koruması) → elenmiş aralık → lead daralır; kent tamamlansa bile çoğunlukla lead vermez, kent draw'larının büyük kısmı flop'ta raise'e gitmişti *(kalibre et)*. Kalan lead yeri: raise'lemediğin ama turn'de NUT'a dönen sınıf — tipik olarak board'un alt/orta kartının eşleşmesi → daha büyük boy, daha dar aralık *(kalibre et)*. İkisi de yoksa check. Exploit: havuz küçük lead'e overcard-çöpünü katlar, nadiren raise eder.

### 19.12-EK Nudge bir hat değil üç şartın buluşmasıdır — 3-bet potunun caller'ı, SB flat'i ve multiway de nudge'lar

19.12 mekanizmayı BB-vs-geç-pozisyon örneğiyle verdi. Üç şart; sağlanan her düğüm nudge evidir:

1. **Senin aralığın "güçlü-zayıf"** — çok orta per, çok draw, az hava.
2. **Rakibin aralığı uçlu** — hem daha çok hava hem daha çok nut → equity sende, nut onda → küçük boy.
3. **Rakibin turn-raise güdüsü sıfıra yakın** — lead'in maliyeti yok.

| Ev | Neden | Lead |
|---|---|---|
| BB vs CO/BTN, flop bet-call | Klasik (19.12) | ~%10–15 |
| 3-bet potu, OOP caller (T-4-2 / K-Q-x, küçük c-bet'e x/c, boş turn) | 3-bettor'ın overpair'i raise'e muhtaç değil, AK/KQ'su raise'le kimseyi katlatamaz; check-back'i A/K-high yığını | ~%20 *(kalibre et)*: A/K-high'dan ödeme, Ax'in büyük boyunu keser; raise gelirse ucuz bilgi |
| SB flat → BTN range-bet'e x/c → boş turn | Aralığın cep+per+draw; onun K/A-high check-back'i bol | Küçük: ıskalayan KJ'yi katlatır |
| Multiway, range-bet'çiye x/c, flush-ağırlıklı aralık | Check-call'da flush/per/set, hava yok | Küçük; blöf-raise riski sıfır |

Havuz tepkisi ortak: pasif ve dürüst — AT/KJ ile call, raise'i yalnız nut'la; solver'ın karışık lead'i rakibin raise'i kısıtlanınca tam aralığa yaklaşır *(kalibre et)*. Nudge sonrası kötü river: 11.1-EK-2.

### 19.13 Lead'e karşı IP: boyu oku, sonra aralığının DİBİNE karşı oyna

19.12 lead ATAN tarafı verdi; lead YİYEN taraf üç düğümdür ve tek soruyla açılır: lead'in boyu ne diyor?

1. **Küçük lead (~%10–15) = check gibi.** 40bb CO vs BB, T-6-4'e büyük c-bet call, turn 5, BB küçük lead: equity onda, nut sende. Solver'da IP'nin bu lead'e cevabı check'e cevabıyla kombo-kombo örtüşür *(kalibre et)*: check'e barrel'layacağın QJ/KQs → raise; check-back edeceğin K-high/zayıf 6x → call; fold birkaç saf çöp. Havuz IP sersemler — raise'i keser, broadway'i katlar, "kent olabilir" diye orta eli pasif oynar. Lead'cinin çoğu eli tek per ya da draw: dibine karşı oyna, tepesine değil.
2. **Üçte-bir lead = gerçek bet.** Doğru oynayan BB üçte-biri polar atar (kent/güçlü Tx/iki-per/seçili blöf) → offsuit broadway ve zayıf A-high fold'a döner *(kalibre et)*. Burada "check gibi" oynamak kök hatadır.
3. **Üçte-biri TÜM aralıkla atan = jam düğümü.** Lead'i öğrenmiş, boyu öğrenmemiş rakip 4x/5x/zayıf Tx/draw'ı da üçte-bire sokar → tüm Tx, 7x+overcard, A8 tipiyle JAM — per+draw'ı bu SPR'de bet-fold edemez; QJ/AQ orta eller fold. Etiketi not et.

**Sen lead atarken aynı yasa:** aralık-lead'in boyu gerçekten küçük olmalı; üçte-bir polar lead'in boyudur.

### 19.14 Probe'a karşı IP: check-back kapak değil, raise düğümü — büyük polar'a raise yok, küçük-orta'ya ~%15–20 raise

Flop'u check-back ettin, OOP turn'de probe attı. Havuz IP "kapaklandım, o biliyor" korkusuyla neredeyse hiç raise etmez. Düğüm probe'un BOYUNA göre ikiye ayrılır (19.3-EK'in aynası):

- **Büyük polar probe (pot+ / 1.2–1.5×) → raise ~%0–5.** 7-6-4-4, T-9-3-6, K-Q-5-2'de rakip nut+hava ile potu kendisi kurdu; check-back'teki AA'n onun value'sunu (4x/7x, Kx) yenmiyor, blöfünü koparmak için raise gerekmez → call/fold *(kalibre et)*.
- **Küçük-orta probe → check-back aralığının ~%15–20'siyle raise** *(kalibre et)*: rakip ince value'suyla potu büyütmedi VE sende onu yenen el var.

| Board | Value raise | Blöf raise |
|---|---|---|
| 7-6-4-9 (yarım) | A9 %100, K9 %50, Q9 %25; T8 | KT/QT/JT: overcard+gutshot, out'u temiz |
| T-9-3-Q (küçük) | Qx üstü iki-per, güçlü Qx | Kx: KQ/KJ'yi bloklar, kent out'u |
| 6-6-3-Q (küçük) | iki-per/trips — DAR (onun AA/KK'sı raise'ini bekler) | 8-7 sınırda |
| 7-6-4-A (küçük) | güçlü Ax, iki-per | flop'ta bet-fold'a girmemiş 5x/8x/J5 |

Raise boyu küçük (~2.5× bet); frekans merdiveni %100/%50/%25 — sırayı tut. OOP yüzü: küçük probe'a nut raise etmez, senin blöf-raise'ini ister → küçük probe'u yığın-ağırlıklı at.

### 19.15 Bet-check-bet: blöf blokeri board nütünü değil hayatta kalanı hedefler
Flop bet + turn check + river bet hattında (bet-check-bet) turn'ün check'i HERO'nun kendi aralığını kapatır — hero board'un GERÇEK nüt'ünü (örn. kent) elinde tutsaydı turn'de bahis atardı, atmadıysa hero'nun elinde değildir. Ama blöf blokerinin hedefi RAKİBİN call aralığıdır: nüt'ü o aralıktan silen şey hero'nun check'i değil, hero check'i geçince RAKİBİN de turn'ü check-back etmesidir — statik/kuru board'da bu genelde nüt frekansını sıfırlamaz, ciddi biçimde düşürür (denge aralıkları nüt'ün bir kısmını koruma/tuzak amaçlı check'ler). River'da blöf blokerini board'un mutlak tepesine göre değil, rakibin turn check-back'inden SAĞ ÇIKAN gerçek üst katmana (belirli bir per/kicker) göre seç; board nütünü bloklamak ağırlığı zaten düşmüş bir eli avlamaktır.

**Kural:** Bet-check-bet river'ında blöf blokerini "rakibin turn check-back'inden sonra hâlâ ağırlıklı olan tepe"ye göre seç, board'un mutlak nüt kartına göre değil.

### 19.15-EK Bet-check-bet river'ında boy blöfün hikaye testidir
Bu hatta gerçek blöf çoğunlukla turn'ü check'leyip bedava kart alan, showdown değeri OLMAYAN elden gelir (patlamış çekiliş, boş overcard) — bu eller flop'ta zaten bir sokak parayı yakmıştı, turn'de check'leyip river'a ücretsiz gelir, sonra ikinci fıçıyı dener. Showdown-değerli zayıf bir çift ise genelde river'ı da check'leyip showdown'a gider; yapılmış bir eli blöfe çevirip raise riskine girmek istisnai bir seçimdir. Böyle bir blöf inandırıcı olmak için yine güçlü el TEMSİL ETMEK zorundadır — o yüzden büyük atılır. Küçük ya da "tembel" (düşünülmeden basılan varsayılan buton) bir boy bu düğümde blöften çok VALUE işaretidir; value'lu el hikayeye uyan, özenle seçilmiş bir boyu değil, varsayılan butonu kullanır.

**Kural:** Bet-check-bet river'ında büyük boy showdown'suz havadan gelen çift-blöf ihtimalini açık tutar; küçük/tembel boyda value'ya yasla.

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

### 20.1-EK Bubble factor'ü tek bölmeyle eşiğe çevir
BF = kaybedersen giden $EV ÷ kazanırsan gelen $EV. Gereken ham equity ≈ BF/(BF+1): BF 1.5 → kabaca %60, BF 2 → kabaca %67; risk primi bunun %50'yi aşan kısmıdır. BF çoğunlukla 1-nokta-bir-şeydir; 2'nin üstü ancak uç dağılımlarda görülür. Masada BF'yi kademeyle tahmin et, tek bölmeyle eşiğe çevir, sonra pot odds ve ölü parayla AŞAĞI düzelt — jam'e call gerçek hayatta hiçbir zaman 1:1 değildir, blind ve ante hep içeridedir.

**Kural:** Gereken equity ≈ BF/(BF+1); önce çevir, sonra ölü parayla indir.

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

### 20.3-EK Prim sıfır olmaz — ilk elden itibaren küçüktür ve tuttuğun başlangıç-yığını sayısıyla katlanır

Kök hata: "Para uzak, prim sıfır, chipEV oynuyorum." Havuz tek kişiye ödenmediği için her eleme, hayatta kalan HERKESİN yığın-dolarını bir tık yükseltir; sen birini elediğinde o ölen yığının değerinin bir dilimi masadaki ve öbür masalardaki herkese dağılır — double-up yığın-dolarını asla tam ikiye katlamaz. Aradaki fark primdir ve turnuvanın ilk elinde bile vardır: bir başlangıç-yığını için yaklaşık bir puan *(kalibre et)*. Prim, riske attığın yığınla ölçeklenir: iki başlangıç-yığını tutan oyuncu tek yığınlılara karşı iki katına yakın prim taşır, kendisi kadar büyük bir yığına karşı ise dört yığın riske atıyormuş gibi — erken fazda dahi iki büyük yığının çarpışması orta kademe prim üretir *(kabaca beş puan civarı; kalibre et)*, tek yığınlılar hâlâ bir puan civarındayken. Kural: erken fazda prim küçük ama sıfır değil; asıl uyanıklık iki büyük yığın karşı karşıya gelince — orada stack-off eşiğini chipEV'nin bir tık üstüne koy, tek yığınlılara karşı chipEV'ye yakın kal. 20.7 kartının "chipEV / para uzak ~0" satırı "küçük, yığın-sayısıyla büyüyen" diye okunur.

### 20.3-EK-2 Primin üçüncü sürücüsü ödeme yapısıdır — DÜZ ödeme primi yükseltir, tepe-ağır ödeme düşürür; dip derinliğini bubble→FT mesafesi belirler

Kök hata: primi yalnızca "bubble yakın mı + cover ediliyor muyum" ile okumak. Aynı yığın dağılımı, aynı kalan oyuncu: son ödenen sıranın birinciye oranı büyüdükçe (düz merdiven) hayatta kalmak kazanmaya göre daha çok dolar eder, prim yükselir; birinci ile üçüncü arası açıldıkça (tepe-ağır) chipEV'ye yaklaşır — fark birkaç puanı bulur *(kalibre et)*. İkinci sonuç 22.1'in "bubble patladı → dip" satırına sınır koyar: dipin derinliği bubble ile FT arasındaki mesafeyle ölçeklenir — bubble yüzlerce oyuncudayken patlayınca prim başlangıç seviyesine iner, on beş kişide patlayınca FT ödemeleri hemen arkada olduğu için neredeyse hiç düşmez. Kural: oturmadan yapı sayfasından iki sayı oku — (1) son ödenen ÷ birinci (düzlük), (2) bubble→FT mesafesi. Düz + küçük saha = prim hiç dip yapmaz, 22.2'nin "gaz" fazı fiilen yoktur; tepe-ağır + büyük saha = bubble sonrası gerçek chipEV penceresi.

### 20.3-EK-3 Ödeme eğrisinin ŞEKLİ primi ikiye katlar — aynı stack'ler, lineer ödeme → prim iki kat

Kök hata: primi yalnız stack haritasından ve "para yakın mı"dan okumak; ödeme tablosunun eğrisine bakmamak. Mekanizma: aynı stack dağılımı, aynı koltuk, aynı el — birinci sıra kalan havuzun büyük payını alıyorsa (tepe-ağırlıklı) her basamak küçüktür, bust'un fiyatı düşük, prim düşük; havuz basamaklara yayılmışsa (lineer — üçüncü birincinin yarısından fazlasını alıyor) her eleme büyük para, prim kabaca iki katına çıkar *(kalibre et)*. Aynı masa iki farklı turnuvadır. İkinci kol: masa kısaldıkça prim DÜŞER — rakip sayısı azalınca alınacak basamak sayısı azalır, HU'da prim sıfırdır *(kademe: kalibre et)*; 3-handed'da tek kısa stack'in yarattığı prim, 6-handed'da aynı kısanın yarattığından belirgin küçüktür. Kural: **prim tahmininin ilk iki girdisi ödeme eğrisi ve kalan oyuncu sayısı; stack haritası bu ikisinin ÜSTÜNE gelir.** Lobiye bakmadan "FT = prim yüksek" deme: tepe-ağırlıklı ödeme + 3-handed = prim ortadır, lineer ödeme + 7-handed = tavandır — çoğunlukla.

### 20.3-EK-4 Canlı yapı primi iki koldan düşürür — tepesi ağır ödeme (paradoks) ve tam-BB ante

Kök hata: "canlı = büyük para = daha çok ICM". Tersi. Mekanizma (1) — ödeme eğrisi: risk primi para SIÇRAMALARININ görece büyüklüğünden doğar. Tepesi ağır eğride (birinci, üçüncünün iki katından fazlasını alır *(kalibre et)*) alt basamaklar toplam havuzun küçük dilimidir → her basamağın değeri düşer → prim düşer. Lineer eğride (birinci, üçüncünün iki katından azını alır) basamaklar eşit ağırdır → prim tavan. Aynı stack, aynı spot: lineer→tepesi ağır geçişte kapsanan orta stack'in primi belirgin düşer (birkaç puan *(kalibre et)*), liderinki zaten düşük olduğundan az değişir → asimetri KAPANIR: liderin jam'i daralır, kapsananın call'ı genişler (orta çift+ → küçük-orta çift + suited broadway → daha da geniş kademeleri *(kalibre et)*); kapsanan orta stack'in 3-bet value tepesi "yalnız AA"dan KK/AK'ya iner, boy büyür, blöf dilimi açılır — 12.2-EK-2'nin "KK+" satırı ödeme eğrisine göre okunur. Eğri ölçümü molada: beşinci/birinci ve üçüncü/birinci oranı — formül yok, alışkanlık. Mekanizma (2) — tam-BB ante: kısa masada (5-6 kişi) tam ante, kesirli ante'ye göre potu kabaca üçte bir büyütür → SB'nin open-jam dilimi birkaç kat açılır (offsuit Ax, broadway, çift), limp dilimi DARALIR — güçlü eller jam'e gidince limp'i koruyacak el kalmaz; jam'siz spot'ta sıfırdan jam doğar. Düşük prim + tam ante birleşince limp geri gelir: güçlü elle limp-raise lisansı → zayıf limp de genişler, toplam fold belirgin düşer *(kalibre et)*. **Kural:** canlıda aynı stack'le online ezberinden bir kademe GEVŞEK — geniş call, geniş jam, geniş 3-bet value; ama önce lobiden eğriyi oku, her canlı yapı tepesi ağır değildir. 12.0'ın "dik ödeme" ifadesi basamaklar-arası farkı anlatıyorsa doğru, tepesi-ağırlığı anlatıyorsa ters.

### 20.4 Masada nasıl kullanılır

1. chipEV'de kaç equity gerekiyordu? (pot odds)
2. Üstüne risk primini ekle (cover mu? bubble mı? → yüksek).
3. Elim bu ICM eşiğini geçiyor mu? Geçmiyorsa fold.

> **JAM atmak primden daha az etkilenir — fold equity'n var. Bu yüzden jam aralığın KALIR, call aralığın DARALIR (B17 asimetrisi). Risk premium bu asimetrinin sayısal temelidir.**

### 20.4-EK Prim, potta riske attığın yığın ORANIYLA çalışır — RFI neredeyse değişmez, 3-bet'e cevap sert değişir

Kök hata: "Primim %5, öyleyse her aralığımı %5 daraltayım." Prim, tüm yığın masadayken geçerli olan sayıdır; iki blind'lık açılışta yığının küçük bir dilimi riske girer, prim hemen hiç ısırmaz — açılış aralıkları bir-iki kombinasyon dışında chipEV'den ayrılmaz. 3-bet'e savunma yığının onda birini masaya koyar: aynı primle fold belirgin artar, flat yarılanır. Jam ya da jam'e call tam primi öder. Bu, 20.4'ün "jam primden az etkilenir — fold equity" satırından ayrı, onu tamamlayan ikinci mekanizmadır: orada fold equity jam'i korur, burada yatırım oranı düğümü seçer. Kural: primi elinin gücüne değil karar ağacının derinliğine uygula — açılış ≈ chipEV, 3-bet'e cevap ≈ prim'in yarısı, all-in ≈ tam prim; erken/orta fazda masada en çok değişmesi gereken düğüm 3-bet'e cevaptır, açılış değil *(kademeler: kalibre et)*.

### 20.4-EK-2 3 yönlü all-in'i side-pot + ana pot olarak ayrı hesapla
Üçüncü sıradan bir 3-yönlü all-in kararında tek pota değil iki ayrı pota bak: side pot'ta genelde flip'e yakınsındır — ama flip chipEV'de nötr, ICM'de NEGATİFTİR (prim > 0 iken $EV kaybettirir, üstelik hızlı elenirsin), yani flip'in prim maliyetini ana pot eşiğinin ÜSTÜNE ekle; asıl karar ANA pot'un gereken equity'sidir — ana pota koyduğun dilimi (= en kısa yığın kadar) ana potun tamamına böl, toplam call'ını değil. Ayrıca çok-yönlü all-in'de risk primi heads-up hesaplanandan bir tık YÜKSEKTİR: aynı kazanç için daha büyük ve daha kayıp-olasılıklı bir pota giriyorsun, azalan getiri iki kez çalışır.

**Kural:** masada 30-60 saniyede karar gerekiyorsa side pot'u "chipEV'de nötr, ICM'de negatif" diye ayır (primini eşiğe ekle), ana pota gereken equity'yi ana pota koyduğun dilim ÷ ana pot ile hesapla, sonra iki canlı aralığa göre topla.

### 20.4-EK-3 Aynı açılış yüzdesi farklı mutlak derinlikte zıt iki kuvvetten gelebilir
Aynı stack-oranlarına (herkesin ortalamaya göre payı aynı) sahip sığ ve derin bir final table'da açılış YÜZDESİ şaşırtıcı derecede benzer çıkabilir ama aynı mekanizmadan gelmez. Sığda arkadakiler flat EDEMEZ (açılışı genişletir) ama ucuza çağrılırsın, eşikleri düşüktür (daraltır); derinde arkadakiler flat EDEBİLİR (daraltır) ama eşikleri yüksektir, seni pasif karşılarlar (genişletir) — yüzdede birbirini götürürler.

**Kural:** iki çıktı aynı yüzdeyi verince "aynı spot" deme; mutlak derinliği ayrı kontrol et, el seçimini ona göre ayarla (bkz. 12.4-EK-3), yüzdenin aynı kalması seni yanıltmasın.

### 20.4-EK-4 Eş-chip iki hat ICM'de eş değildir
Prim POZİTİFken (seni cover eden biri varken) iki boy aynı chip kazancını üretiyorsa ICM'de küçüğü üstündür: aynı geliri daha küçük ortalama potla elde eden hat, elde olmayan oyunculara daha az freeroll verir ve kazanılan her ek chip'in azalan getirisini daha az öder. Büyük boy ancak belirgin biçimde fazla chip kazandırıyorsa savunulabilir. Kural koşulsuz DEĞİLDİR: prim ~0/negatife düştüğünde — cover eden lider, elemeye giden pot (20.7'nin "Cover ETMEYEN kısa jam → ~0 / negatif" satırı) — bu üstünlük kaybolur ve 21.0/24.3'ün "cover ediyorsan bir kademe YUKARI / agresif" yönü devreye girer: orada chipEV'de eşit iki hattan büyük/daha varyanslı olan savunulabilir, hatta tercih edilir *(kalibre et)*.

**Kural:** Prim pozitifken (cover ediliyorken) chipEV'de "eşit" görünen iki boydan daha az chip'i riske atanı seç; prim ~0/negatifken (cover eden lider) kural tersine döner — 20.7 ve 21.0.

### 20.4-EK-5 "%2 daha büyük bet, %1 daha fazla fold" takası ICM'de yoktur
ChipEV'de bet'i biraz büyütüp biraz daha ÇOK fold almak kârlı bir takas olabilir — kazanç kalemi ek fold frekansı, maliyet kalemi call'landığında riske giren fazla chip. Elenme riskin gerçekken bu takas kabaca hiç kârlı değildir, çünkü pota koyduğun her ilave chip bir öncekinden pahalıdır — aynı nominal boy, ICM'de efektif olarak daha büyük bir bet'tir. 21.1-EK-2'deki "jam yerine büyük bet" kuralının arkasındaki mantık budur: çok düşük SPR'da bile *(eşik: kalibre et)* all-in olmayan en büyük boy çoğunlukla tercih edilir, çünkü polar hattın blöfleri stack'in son birkaç bb'lik diliminden hiçbir şey kazanmaz, value'nun kazancı da chip'in artan fiyatını ödemez.

**Kural:** Elenme riski gerçekken bet'e eklediğin son dilimi fold-frekans kazancıyla değil, chip'in artan fiyat etiketiyle tart.

### 20.4-EK-6 Prim birkaç puan artınca call aralığı blok hâlinde kapanır
El equity'leri sürekli bir merdiven değil, kovalıdır: geniş bir jam aralığına karşı benzer equity'de koca bir el bloğu durur ve eşiğin birkaç puan üstüne çıkmak kombinatorik olarak çok zordur — AA'dan KK'ya, KK'dan QQ'ya düşüşler büyüktür, arası boştur. Bu yüzden prim eşiği bir kovanın üstüne çıktığında aralık kademeli değil blok hâlinde kapanır ve benzer görünen iki spotun call tabloları "kavramsal olarak bambaşka" görünür — değildir; aynı mantığın kovası değişmiştir.

**Kural:** Prim eşiği bir equity kovasını aştıysa sınırdaki elleri tek tek tartma — blok topluca düşmüştür.

### 20.4-EK-7 Kendi primin value'yu genişletir/daraltır, rakibin primi blöfü seçer
Preflop 3-bet'i ICM altında kurarken iki prim ayrı iş görür ama biri diğerini SIFIRLAMAZ. SENİN primin value aralığının genişliğini belirler — 4-bet jam'e hangi elle devam edebileceğini, çünkü stack-off riskini sen taşırsın — ve aynı primin bir de TAVANI vardır: prim yükseldikçe (cover ediliyorsun, bubble yakın) ICM faydasının konkavlığı yüzünden tutmayan bir blöfün maliyeti kazanılan çipten ağır basar, ilk kısılan dilim ince blöflerdir, value değil. RAKİBİN primi ise blöf-value oranının BİRİNCİL sürücüsüdür: rakip ne kadar sık katlanmak zorunda kalıyorsa (RP'si ne kadar yüksekse) blöf payın o kadar büyür. "Chip liderim, kendi primim düşük, öyleyse bol blöfleyebilirim" kök hatası kısmen doğrudur — düşük kendi-primin blöf tavanını gerçekten yükseltir — ama asıl motor yine rakibin primidir: aynı düşük kendi-primle biri yüksek biri düşük RP taşıyan iki farklı rakibe karşı value aralığın çok daha az oynarken (rakibin jam aralığının kompozisyonu değiştiği için call eşiğin ikincil olarak kayar) blöf oranın büyük ölçüde değişmelidir.

**Kural:** Blöf oranının birincil sürücüsü rakibin primi, tavanı senin primin — kendi primin value aralığının genişliğini ve blöf tavanını belirler, rakibin primi blöf-value oranını sürer.

### 20.5 İki yönlü leak (kök hata bağı)

- **Cover edilmeyeni cover edilen sanmak** = olmayan primi eklemek = **fazla fold** (B12.4 drill'deki A9s/KTo leak'i).
- **Cover edeni cover edilmeyen sanmak** = primi atlamak = **fazla call → bust.**

### 20.6 Kalibrasyon

*(kalibre et: kesin risk primini ICMIZER/HRC verir — stack dağılımı, payout, kalan oyuncuya göre. App'te bu slot solver pipeline ICM modundan dolar; masada "yüksek/orta/düşük prim" üç kademeyle tahmin et, tam sayıyı molada doğrula.)*

### 20.6-EK Prim tahmini üç adım — yığın sayısı × faz katsayısı, sonra dağılım ve ödenen-yüzde düzeltmesi

Kök hata: 20.6'nın "üç kademe tahmin et"ini masada hissiyatla doldurmak. Mekanik bir merdiven var: (1) Kaç başlangıç-yığını tutuyorsun × faz katsayısı — turnuva başında yığın başına yaklaşık bir puan, geç kayıt kapanırken iki puan civarı, bubble yaklaştıkça katlanır *(kalibre et)*; bu sayı seni cover edenlere karşıdır, senin yarın kadar yığına karşı kabaca yarısı. (2) Dağılım düzeltmesi: chip'ler tek devde toplanmış ve masalar kısalarla doluysa senin double'ın neredeyse kesin para demektir → prim tahmininin belirgin üstüne çıkar *(orta yığında kabaca iki katı; kalibre et)*; dağılım düzse (lider bile birkaç yığın) prim tahminin altında kalır. (3) Ödenen yüzde: sahanın onda biri ödeniyorsa kalan oyuncu yüzdesi seni yanıltır — üçte biri kalmışken bile bubble uzaktır, prim düşüktür; sahanın beşte biri ödeniyorsa aynı yüzdede prim yüksektir. Kural: her ICM kararından önce bu üç adımı sesli söyle, sonra hesaplayıcıyla molada doğrula — hata payın azaldıkça 20.4'ün eşik toplamı (pot odds + prim) masada kullanılabilir hâle gelir.

### 20.6-EK-2 Prim masada tahmin edilir — başlangıç-stack kuralı ve dört düzeltici; post-bubble'da kural kopar

Kök hata: "prim yüksek/orta/düşük" deyip KAÇ olduğunu tahmin edememek; ya da "6 başlangıç stack'im var, prim sabittir" sanmak. Mekanizma: bubble yaklaşırken prim, stack'inin BAŞLANGIÇ STACK cinsinden büyüklüğüyle kabaca doğrusal ölçeklenir — erken fazda başlangıç-stack başına küçük bir yüzde, bubble'a yaklaştıkça iki katına yakın *(katsayılar: kalibre et)*; 6 başlangıç stack + para yakını ≈ orta-yüksek prim. Dört düzeltici: (1) **Min-cash boyu** — buy-in'in 2x+ üstü min-cash primi yukarı iter, 1-1.5x aşağı. (2) **Ödeme eğrisi** — lineer ödeme (min-cash birincinin ~%15'i, 5. sıra birincinin yarısı) primi belirgin yukarı, tepe-ağır (birinciye havuzun büyük payı, 5. sıra birincinin üçte biri altı) aşağı; aynı başlangıç-stack sayısıyla iki yapıda prim üçte bir oynayabilir *(kalibre et)*. (3) **Ani basamak** — min-cash'in hemen ardından FT-tipi basamaklar başlıyorsa küçük min-cash bile primi bubble seviyesine çeker; lobide "min-cash'ten sonraki iki basamak" okunur. (4) **Cover marjı** — sana karşı prim, rakibin seni ne kadar cover ettiğiyle düşer: aynı blind'lara karşı çok derin cover eden, az cover edenden belirgin düşük prim taşır. Post-bubble dev sahada kural KOPAR: 40 başlangıç stack %40 prim üretmez; orada ölçü "bir sonraki büyük basamağa uzaklık + ortalamaya göre stack + masadaki stack dağılımı". Kural: molada değil masada — başlangıç-stack say, faz katsayısıyla çarp, dört düzelticiyle ayarla, 20.4'ün eşiğine ekle. Sonra elini "gerçekçi" jam aralığına karşı ölç; parlak tarafa (domine ettiklerin) değil seni domine eden dilime bak — gereken equity %58'e çıktıysa ATo hiçbir gerçekçi aralığa karşı oraya varamaz, tartışma biter. 20.6'nın "üç kademe tahmin et"i bu yöntemle sayıya bağlanır; 20.2 örneği değişmez.

### 20.6-EK-3 Risk primini elle tutulur birime çevir
Ham risk primi yüzdesi masada bir şey ifade etmez; iki pratik çeviri var. Pot-katı: chipEV'de bir jam belli bir kat potu riske atıyorsa, yüksek primli spotta aynı jam GERÇEKTE daha fazla katı riske atıyormuş gibi hisset — jam'in gerçek maliyeti nominal stack büyüklüğünden ağırdır. Nakit-stake: kalan oyuncu sayısı ve ödül havuzundan ortalama yığının kaba dolar karşılığını çıkar (azalan getiriyi hesaba kat), EV farkını masada anlam taşıyan bir birime bağla.

**Kural:** prim yüzdesini soyut bırakma — pot-katı ya da nakit-stake'e çevirdiğinde hatanın büyüklüğünü daha doğru hissedersin.

### 20.6-EK-4 Masa-hesaplanabilir ICM $EV kısayolu
Molada hesap makinesi yokken ICM-EV'ni kabaca çıkarmanın elle yapılabilir bir yolu var: garanti min-cash'e, kendi chip payının (kendi chip ÷ turnuvada kalan TÜM oyuncuların toplam chip'i — bu yalnız final table'da masadaki toplam chip'e eşitlenir) kalan ödül havuzuna (toplam ödül havuzu − o ana kadar kilitlenmiş/kilitlenecek tüm min-cash'lerin toplamı) çarpımını ekle. Bu toplam, stack ortalamanın kabaca ±%50'si içindeki yığınlarda ICM hesaplayıcının verdiği sayıya yakın çıkar; bu bandın dışında (belirgin büyük ya da belirgin küçük yığın) sapma bir ödeme basamağını aşabilir ve sayı güvenilmez olur. Formül yalnız $EV SEVİYESİNİ (basamak büyüklüğünü) kabaca verir — call/shove eşiğini vermez: risk primi yine masada 20.6'nın üç-kademe tahmininden, molada ICMIZER/HRC'den gelir.

**Kural:** Masada hesap makinesi yokken ICM-EV'ni min-cash + (chip payı × kalan ödül) formülüyle tahmin et — chip payını turnuvadaki TÜM kalan oyunculara göre al, yalnız ortalamaya yakın stack'lerde güven; call/shove kararını bu sayıyla değil 20.6'nın risk-primi tahminiyle ver.

### 20.6-EK-5 Bubble'a kadarki blind baskısını ICM'e mekanik girdi değil, sızıntı uyarısı olarak taşı
Saf/temel ICM hesaplayıcı yalnız o anki STATİK chip sayını değerlendirir, bubble patlayana kadar geçecek elde blind+ante'nin ne kadar chip yiyeceğini göremez *(HRC/ICMIZER gibi bazı ICM hesaplayıcılarında gelecekteki blind/ante maliyetini otomatik modelleyen ayrı bir hesap modu vardır — elindeyse onu çalıştır, saf modu elle düzeltmeye çalışma)*. Ortalama-altı bir yığınla hesaba girmeden önce şunu sor: "bubble'a kadar hiç pot kazanmasam kaç bb'ye inerim?" — bu bir TAVAN senaryosudur, gerçek beklenen kayıp değil, çünkü kısa yığının işi zaten blind çalmaktır ve chipEV kabaca sıfır toplamlıdır (körü ödersin, steal/jam'le geri alırsın). Bu tavan sayıyı hesaplayıcıya ham chip yerine mekanik girdi yapma — yaparsan $EV'i sistematik olarak olduğundan düşük gösterir ve risk primini yanlış tarafa kaydırırsın; ayrıca yalnız kendi stack'ini kırpıp rakiplerinkini olduğu gibi bırakmak ICM'in göreli-pay matematiğini bozar (blind+ante her oyuncuya aynı mutlak maliyeti yükler, o chip'ler masadan silinmez, potu kazanana gider). Tavan sayıyı ham chip hesabının yanına koy, ikisi arasındaki farkı "gerçek $EV muhtemelen ortadadır" uyarısı olarak oku — fark küçük yığında ve bubble'a hâlâ birkaç orbit olan büyük sahada büyür.

**Kural:** Ortalama-altı yığında ICM'i ham chip'le hesapla, yanına "hiç pot kazanmazsam" tavan senaryosunu koy — tavanı mekanik girdi yapma, farkı sızıntı uyarısı olarak kullan; blind+ante maliyetini orbit başına SB+BB+ante × bubble'a kalan tahmini orbit sayısıyla hesapla, BB/100 gibi cash-game birimiyle karıştırma.

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

### 21.0-EK ICM'de cover farkı flop c-bet/lead düğümünde yaşar — sonrası yakınsar, fark yalnız stack'i bağlayan düğümde geri gelir (28.19'un ICM aynası)

Kök hata: "prim her sokakta birikir" cümlesini turn/river'da her boyu ve frekansı yeniden küçültmek olarak okumak. Mekanizma: aynı aralık, yalnız cover yönü farklı — IP kapsananken flop c-bet check-back'i yaklaşık üç kat (onda birden üçte bire *(kalibre et)*), boy yalnız küçük; cover ederken aralık-bet, yer yer yarım pot. Check-back malzemesi ince/marjinal değil "baskı yemek istemeyen orta showdown": A-high board'da JJ-KK ve Kx, K-high'da QQ/JJ/TT ve ikinci çift. BB'nin c-bet'e cevabı iki yönde neredeyse aynıdır (fold üçte bir, check-raise onda bir civarı *(kalibre et)*); cover eden BB yalnız blöf-raise'i bir tık açar — düşük prim, blöf için daha az equity ister. Flop bet-call'dan sonra turn/river frekans, boy ve devam eşiği iki yönde neredeyse özdeştir — aralıklar flop'ta ayarlandı, gerisi standart ağaç. Fark yalnız (a) stack'i bağlayan düğümde (jam mı ¾ pot mu; K-flush jam mı call mı — 21.1-EK-2) ve (b) river ince value tepesinde (kapsanan AK check, cover eden bet) geri gelir.

**Kural:** ICM postflop ayarının ağırlığını flop c-bet/lead düğümüne yükle; bet-call'dan sonra standart ağaçla oyna, cover'ı yalnız stack'i bağlayan düğümde yeniden sor. Kapsanan olarak turn/river'ı da "bir kademe" küçültmek, aralığın zaten ödediği primi ikinci kez ödemektir *(çoğunlukla)*.

### 21.1 Neden call-off en çok ICM-vergili aksiyon

Postflop'ta chip'i en çok riske atan hat, büyük bir bet'e ya da raise'e call/hero-call'dur — potun şiştiği ve kaybın bust'a yaklaştığı yer. Prim en çok burayı vurur:

- **Bet/barrel'ın fold equity'si vardır** → prim onu daha az cezalandırır (B20.4 asimetrisi postflop'ta da geçer).
- **Call-off'un fold equity'si yoktur** → tüm chip'i showdown'a bağlarsın, ICM cezası tam gelir.

Sonuç: ICM baskısında blöf-yakalama aralığın DARALIR (fazla per'i bırak), ama değer için bet'lemen aynı kalır. "Tek per = bluff-catcher" kuralı (B11.2) ICM'de daha da fold-eğilimlidir.

### 21.1-EK Call-off malzemesi: value dar tanımlıysa bloker rütbeyi geçer

21.1 call-off'u en ICM-vergili aksiyon ilan etti; kalan soru "hangi elle?" ICM polar bet'in value'su dar ve iyi tanımlıdır (set, iki-per, belirli top-pair sınıfı). O zaman elin rütbesi değil üç sorunun cevabı seçer:

1. **Rakibin value'sunu bloklıyor muyum?** A-J-3 hattında KJ, AK'dan iyi call — JJ/AJ'yi bloklar. A-6-4 pot'a 6x, Ax'ten iyi; A-5-4 büyük lead'e K5, A9'dan iyi (5 üç value sınıfını bloklar, A tek kombo).
2. **Rakibin blöfünü bloklıyor muyum?** KK, AT'den iyi call — blöfleri bloklamaz, temiz out'u var. 3x-pot flop jam'ine karşı KT katlanır (KQ/KJ blöflerini bloklar), Q9/J9/QT/JT call eder *(kalibre et)*.
3. **Out'um var mı?** T-7-3 büyük stab'e check-jam "blöfü" AK/AQ'dur — iki overcard, KT/KK'yı bloklar, blöfleri bloklamaz; Q3 (5 out, blöf bloklar) katlanır. 9-7-5'te K5 fold, AT jam.

Ayna: kendi blöfünü de aynı testten geçir — 21.2-EK-4'ün "unblock" kuralı bunun blöf yüzüdür.

> **ICM'de polar bete karşı "daha güçlü el daha iyi call" değildir. Value dar tanımlıysa en iyi call, rakibin value'sunu bloklayıp blöfünü bloklamayan ve out taşıyan eldir — KJ > AK, 66 > Ax, Q9 > KT.**

### 21.1-EK-2 Derin-yüksek-primde stack-off eşiği "nut + bloker" — set CALL, top set CHECK, K-high flush jam YOK; kapsananın river'ı jam yerine büyük bet

Kök hata: chipEV el-gücü ezberi (set = raise, K-high flush = jam, AK top pair = river value). Mekanizma: derin (50bb+) ve karşılıklı yüksek prim (on-yirmi puan *(kalibre et)*) → kaybedilen chip kazanılandan pahalı; stack'i bağlayan düğümde value eşiği nut'a yaklaşır. Kademeler *(hepsi kalibre et)*: (a) river büyük bet'e (¾ pot) karşı alt/orta set CALL, raise yalnız top set/straight; (b) top set çoğunlukla CHECK-back — rakibin ödeyen aralığını (üst per kombinasyonları) blokluyor, ödendiğinde straight'e çarpıyor → düşük iki per top set'ten iyi raise malzemesi (ödeyeni bloklamaz). Cover eden rakip daha geniş bluff-catch ettiği için bloklama önemi düşer; kapsanınca en sert; (c) flush river: K-high flush jam etmez, call'lar — jam'de yalnız A-high flush öder; flush olmayan iki per bet'lemez; (d) kuru river'da bile tek per (AK) check-back — "para girdikçe tek per kötüleşir", en temiz runout'ta bile; (e) kapsanan IP river'da value JAM yerine büyük bet: blöf-jam'ler çağrılınca çok pahalı, jam dilimi blöf koruması olmadan ayakta duramaz; cover eden aynı elle jam'ler.

**Kural:** yüksek primde son sokakta el gücünü sormadan önce "ödeyen aralığı blokluyor muyum, ödenmezsem ne kaybediyorum?" sor; set'le call, nut + iyi bloker'la raise/jam. 21.2 "raise→call" satırının derin-band kalibrasyonu; 21.1'in "call-off en vergili" tezinin value-tarafı yüzü.

### 21.1-EK-3 Blöf stoğu erken sokakta tükenir — catch kararı flop'a bakar

Bluff-catch aralığını kombinatorik kadar rakibin ERKEN sokak disiplini kurar: river blöfü, flop'ta tutulan float'lardan doğar. Rakip flop'ta doğru float'ları (backdoor'lu yüksek kartlar, zayıf çekilişler) bulamayıp erken katlıyorsa river agresyonunun blöf stoğu fiziksel olarak yoktur — en şık bloker'lı catcher bile bırakılır; erken sokakları yapışkan oynayan tipte stok doludur, catch defteri açılır. ICM bunu ikiye katlar: call-off zaten en vergili aksiyonken (21.1) stoksuz rakibe hero-call, primli intihardır. Aynı test check-raise hattında da çalışır — koltuk ters (rakip call'layan değil raise'leyen taraftır), okuma yönü aynı: x/r aralığında blöf tutup (backdoor çöpü, koruma raise'leri) check-raise'lediği flop'u turn'de neredeyse hiç bırakmayan tip o blöfleri olduğu gibi turn'e taşır — devamı blöf-zengindir, catch defteri açık kalır. Value okuması turn'de SIK bırakan tipe aittir: aralığı yoğunlaştığı için turn'e taşıdığı devam value'ya arınır.

**Kural:** "Blöfü var mı"yı river'da sorma — flop'ta hangi blöf hammaddesini TUTTUĞUNU sor; erken katlayan (ve x/r'ından sonra sık vazgeçen) tipin geç agresyonu çoğunlukla value'dur, hiçbir şey bırakmayanınki blöf taşır.

### 21.2 Bir kademe indir — kural tablosu

| chipEV hattı | ICM baskısında (cover ediliyorken) |
|---|---|
| **Thin value bet** | Check-back (ince değeri kesme) |
| **2. fıçı (barrel) blöf** | Tek fıçı / vazgeç |
| **Büyük boyut** | Küçük boyut |
| **Raise (value)** | Call (potu şişirme) |
| **Hero-call / bluff-catch** | Fold |
| **Check-raise blöf** | Düz call ya da fold |

Her satır aynı yönü söyler: potu küçült, chip'i showdown'a bağlama, marjinali kes. Kademe = risk primi. Bu tablo ICM içindir; PKO kelle katmanı için bkz. 21.3-EK.

### 21.2-EK "Bir kademe indir" MARJİNAL bölgenin kuralıdır — iki istisna

B21.2 tablosu güçlü bir varsayılan ama iki durumda boy-küçültme YANLIŞ olur; ikisi de aynı sebeple: kademe-indirme ince/marjinal aralığın kuralıdır, güçlü-yoğun aralığın değil.

1. **Nut-yoğun river:** cover edilen kısa stack bile river value'su nut'a yoğunlaştığında (full-house + nut-flush) büyük boy/overbet jam KALIR — teoride doğrudur. "ICM'de her şeyi küçült" tünel-görüşü burada başlı başına sızıntıdır. Test: bu boyun value aralığı marjinal mi yoksa nut-polarize mi? Nut-polarize ise kademe uygulanmaz.
2. **Hafif-ICM ilk dokunuşu:** geç kayıt yeni kapanmış, para hâlâ uzakken ICM'nin postflop'a İLK etkisi ince value bet'lerin çekilmesidir — kalan bet aralığı güçlendiği için boy KÜÇÜLMEZ, hatta büyüyebilir. B21.2'nin küçültme satırı COVER-baskısı içindir; hafif-ICM'de yanlış küçültme.

> **Kademe-indirme marjinali kırpar, nut'u değil. "Cover ediliyorum → küçült" ancak boyun value aralığı marjinalse geçerli; nut-yoğun bir aralıkla küçük atmak parayı masada bırakır.**

### 21.2-EK-2 A-high board: ICM'de küçük boyun evi değil, pot-boyun evi

21.2'nin "büyük → küçük" satırı marjinal aralık içindir (21.2-EK). A-high board ICM'de o satırın dışına düşer, sebebi aralık yapısıdır: ICM'de herkes bloker-ağırlıklı açar, A-x-x'te rakibin aralığı rastgele Ax ve orta ceple doludur. Küçük bet bu kütleden hiçbir şey katlatmaz; pot-boy ise zayıf Ax'i anında kayıtsız kılar, cepleri komple katlatır *(kalibre et)*.

- **Value nut-polar:** set, düşük iki-per, en güçlü Ax'in bir dilimi. Orta Ax bet etmez — check'e gider, zaten bluff-catcher.
- **Blöf en düşük kartlar:** katlanan kütle broadway/orta cep → onları bloklamayan alt bağlantılılar ve alt cepler. A5 tipi "gutshot'lı Ax" ana blöfleri bloklar, listede yoktur.
- **Cover yönü frekansı oynatır, boyu değil:** cover ediliyorken seyrek, cover ederken sık *(kalibre et)*; her iki koltukta da pot ya da check.
- **Turn:** polar başladıysan polar devam; A turn'de boyu BÜYÜT — value kombosu azaldı, büyük boy daha çok blöfe izin verir. Brick'te yarım-pot civarı orta boy, yüksek frekans.
- **Aralık-bağımlı istisna:** A-6-6 tipi eşleşmiş A-low — kapsanan IP'nin suited 6x'i yoktur → check; cover eden IP'nin vardır → pot-boy, value 6x. Aynı board, koltuğa göre iki strateji.
- **Küçük boy kalan yerler:** eşleşmiş A-high, monotone, üç-broadway (A-K-J) — yüksek frekans, küçük.

> **ICM'de A-high board küçük bet'in evi değildir: rakibin Ax+cep kütlesini yalnız pot-boy katlatır. Pot ya da check; orta Ax check, blöf en düşük kart. Boy koltuğa göre değişmez, frekans değişir.**

### 21.2-EK-3 Yoğun caller'a karşı OOP açıcı: check-first, tek kombo frekansı çevirir

18.5 OOP c-bet'i "daha seçici" der; ICM'de orta-stack açıcı yoğun bir flat aralığına karşı seçici değil, neredeyse tamamen check'tir *(kalibre et)*. Caller'ın aralığı cep + suited broadway'dir, 3-bet'e gitmeyen premium'lar da içindedir; senin aralığın bloker-ağırlıklı ve geniş. Eşleşmemiş kütlen bet edecek el bulamaz, eşleşen kütlen bet etmek istemez.

- **Bet edilen tek yer:** eşleşmiş A/K board (A-9-9, A-K-K) ve A/K + iki düşük kart rainbow — küçük, seyrek. Onları da atlamak serbest.
- **Hassasiyet:** A-K-8 bet, A-K-7 range-check — fark yalnız A8o'nun aralıkta olması. Turn'de caller'ı set/iki-per'e taşıyan kartta (7/T/J) %50+ equity'yle bile check. Bu düzeyde bir farkı masada tutamazsın → range-check.
- **Karşı taraf:** IP bu yüzden çok sık stab'ler *(kalibre et)*; A-high polar-büyük (21.2-EK-2), K-high küçük yarı-frekans, Q-high ve altı range-stab.
- **Ayna kural:** OOP teoride sık lead/bet etmesi gereken bir board'da check ediyorsa IP range-check-back eder — nut hâlâ onun aralığında. "Zayıflık gösterdi → stab" (19.4) burada geçmez.

> **Yoğun caller'a karşı orta-stack OOP açıcı ICM'de check-first'tür. Bet/check EV farkı tek kombonun varlığına bağlıysa ezberlenemez — check'e sadeleştir, kayıp sıfır. OOP bet etmesi gereken yerde etmiyorsa IP de bet etmez.**

### 21.2-EK-4 ICM'de blöf malzemesi: çekilişi realize et, çöple ve en düşük kartla blöfle

B1'in blöf hiyerarşisi chipEV içindir. ICM'de polar bet'in blöfü iki testi geçmelidir: bet-fold'a rahat oturuyor mu, bet-call'a rahat oturuyor mu? Çekiliş ikisini de geçemez — check-jam yediğinde katlanamaz, katlanınca equity'sini yakar. O yüzden:

- **Çekiliş check'le realize eder.** OESD/renk çekilişi turn'de check-back'i sever; bet eden renk çekilişi ya bet-call'a mutlu olan (K-high fd) ya da tam çöp olandır (62s). Orta çekilişler (Q-high fd, gutshot+bdfd) check.
- **Blöf 1 — sıfır-showdown backdoor çöpü:** Q3/J4/T3 + backdoor renk. Bet-fold'u acıtmaz, turn'de overpair ya da backdoor'a dönebilir.
- **Blöf 2 — en düşük kartlar:** broadway board'da (A-T-4, K-J-8) rakibin katladığı her el K/Q/J taşır; 3-2/4-2/6-5 hiçbirini bloklamaz → en iyi blöf, brick turn'lerde de en iyi barrel. KQ/QJ/KJ gutshot'ları burada KÖTÜ blöftür: showdown'u var, fold'u bloklar.
- **Rakibi geliştiren turn'de** (T/J) düşük kartlar yerine Q8/Q9 sınıfı — equity + rakibin nut'unu bloklar.
- **IP turn stab kuralı** (rakip flop'ta call, turn'de check): bir şey yakaladın (per/çekiliş) → check; hiçbir şey → bet. Kart değişince malzeme yer değiştirir, kural değişmez.

> **ICM'de polar blöf sıfır-equity + unblock'tur: backdoor çöpü ve en düşük kartlar. Çekiliş bet-fold'u da bet-call'ı da sevmez — check'le realize et. Broadway gutshot broadway board'da blöf değildir.**

### 21.2-EK-5 Kapsananın check-raise'i: bir sokaklık koruma, sonra fren

21.2 "raise → call, x/r blöf → call/fold" der; 19.10 kapsananın x/r'ını nut value'ya sıkıştırır. İkisi de stack-off NİYETİ içindir. Cover eden IP geniş ve polar stab'lerken (21.3-EK-3) kapsananın check-raise'i kapanmaz, şekil değiştirir:

- **Ne için:** koruma + bir sokak value. Küçük stab'e KQ/KJ x/r (ceplerden value alır), pot stab'e A-9-3'te AK/A9/99 ve AQ/AJ/AT — IP'nin polar aralığına karşı AK ile AQ aynı eldir (value'su iki-per+). SB'nin A-6-4 büyük lead'ine A9–AJ raise: 76/65/54'ün equity'sini reddet; öldüysen öldün.
- **Sonrası — asıl fark:** x/r'dan sonra turn check ya da ≤ yarım pot; jam yok, stack-off yok, SPR büyük kalır. chipEV'de x/r barrel'ın başlangıcıdır, ICM'de tek sokaklık araçtır. Pot stab'e x/r-call sonrası OOP turn'ü range-check eder, küçük bete check-jam ya da check-fold.
- **Blöf:** stab'lemediğin backdoor çöpü (96 + backdoor renk, T6) ve "call'a yetmeyen ama fold'a yazık" eller. Her backdoor çöpü stab'lersen x/r blöfün kalmaz — check aralığına bilinçli çöp bırak (31.3'ün aynası).
- **Ters koltuk:** OOP büyük stack, IP kapsanan → pot stab'e x/r SIFIR. Koruma ihtiyacı yok, kapsanan IP zaten dar stab'ler. Raise'i kapsanan atar, cover eden call'lar — sezgiye ters, mekanizmaya uygun.

> **Kapsananın check-raise'i agresyon değil korumadır: cover edenin geniş stab'ine karşı bir sokak value/koruma, sonra fren. x/r'dan sonra barrel chipEV refleksidir; ICM'de turn check ya da küçük, stack-off yok.**

### 21.2-EK-6 River'ı yeniden açma eşiği: call aralığını yen, aralığı değil

21.2 ince value'yu check-back'e gönderir; river'da ölçek başkadır. ICM'de büyük bir river bet'i rakibin tek-per'ini komple katlatır — prim onu fold'a iter. O zaman bet ancak seni yenen elden ödeme alır: value-cut.

- **Eşik equity değil, call aralığıdır.** A-Q-6-2-5 hattında AK check; zayıf iki-per bile ~%78 equity'yle bet etmez *(kalibre et)* — katlanan her el yendiğin, ödeyen her el seni yenen.
- **IP, OOP'dan SIKI bet eder.** Check-back opsiyonu var; OOP'nin bet'i aynı zamanda deny'dir. A-K-8 hattında OOP AQ value bet eder, IP AK jam etmez (AA/A8/K8 öder). 21.7'nin "cover ediyorsan ince value al" satırı OOP'ye ve küçük boya yakışır, IP'nin river jam'ine değil.
- **Renk tamamlandı, elinde renk:** küçük bet, korunmuş kal — rakibin renk sayısı seninkinden fazla olabilir.
- **SPR lisans değildir.** 0.4 SPR'de bile K river'da top-pair Tx check, Q river'da K8/KT check *(kalibre et)*. "Nasılsa içerideyim" refleksi ICM'de yok.
- **Kapsanan IP:** turn boyu düşer (yarım pot, pot yok), river'da tek-per büyük boyla asla; küçük boyla yalnız en iyi Kx.

> **River'ı yeniden açan el rakibin CALL aralığını yenmelidir, aralığını değil. IP'nin eşiği OOP'dan bir kademe sıkı (check-back var); %75+ equity bile büyük boyla value değil; sığ SPR lisans vermez.**

### 21.2-EK-7 Turn boyu: düşük kart lineer-küçük, yüksek kart polar-büyük — geometri değil

ICM'de turn boyu sokak başına seçilir; "¾-¾ geometrik" planı burada ikinci sıradadır. Rejimi turn kartının yüksekliği ve top-pair'in koruma ihtiyacı belirler:

- **Düşük turn (board'un üst kartının altı):** küçük-lineer. Range-bet sonrası 88/99/A5/J2 gibi per'i olmayan ya da orta per'li eller value bet eder — rakibin eşleşmemiş kütlesi hâlâ katlanır, koruma satın alırsın. Blöf geniş: çekilişler + overcard'lı hava. Prim yüksek + SPR büyükken polarize etme.
- **Yüksek turn (board'un üstünde / üst kartı eşleyen):** polar-büyük. En iyi Ax/Kx + en düşük kartlar (21.2-EK-4); orta per'ler check. Pot-boy meşru — river SPR ~0.36 kalır, sorun değil *(kalibre et)*.
- **Koruma ölçüsü:** K-5-4'te K zor geçilir → turn hemen polar; T-7-4'te T her broadway'e geçilir → düşük turn'de küçük-lineer, yüksek turn'de polar.
- **Board eşleşen düşük turn** (7-3-2'de 2/3): check — value küçülür, blöfler gelişmez. Blöfü geliştiren düşük turn (9) bet.
- **Küçük turn'den sonra river:** yarım pot, jam yok; jam'i rakibe bırak — küçük turn attıysan stack-off'u kendin açma.

> **ICM'de turn boyu kartın yüksekliğiyle döner: düşük kart lineer-küçük (per'siz eller de value), yüksek kart polar-büyük. Sokak başına doğru boy; river SPR'ı umursama. Küçük turn → river yarım pot, jam rakibin.**

### 21.2-EK-8 Nut avantajlı lead'ci yüksek primde küçük-küçük-küçük — nut'lar potu şişirmek için değil, ince value'yu KORUMAK için

Kök hata: nut avantajı + cover ediyorum → büyük/overbet ile "stack'ini al". Mekanizma: yüksek primde kapsanan IP stack-off eşiğini nut'a çeker; büyük boy/jam gelince tek per, iki per, hatta alt set katlanır → nut'un (straight/üst set) ÖDENME değeri düşer. Aynı anda lead'cinin aralığında ince value çoktur (6x, 8x, Kx, düşük iki per) ve her sokakta küçük boyla (potun onda biri–üçte biri *(kalibre et)*) ödenir. Nut'ların doğru işi küçük-bet aralığını korumaktır: IP küçük bet'e Kx/iki per/set'le raise'lediğinde set/straight'le yeniden aç (jam). Turn'de bir dilim nut büyük boya gidince IP raise'e cesaret bulur; yalnız küçük boy varsa IP raise'siz kalır — bu da tam istediğin şey. Overbet neredeyse hiç *(kalibre et)*.

**Kural:** nut dilimi aralığın AZINLIĞI + ince value geniş → üç sokak küçük, overbet yok, raise gelince reopen. Sınır: nut dilimi aralığın ÇOĞUNLUĞUysa 21.2-EK (büyük kalır) — bu -EK 21.2-EK'in ayna sınırıdır, çelişki değil: soru "boyun value aralığı marjinal mi nut-polarize mi" aynı soru, cevabı burada "marjinal-geniş".

### 21.2-EK-9 Çöpün yoksa blöf TEPEDEN gelir — dar range istisnası

"Blöfü çöple ve en düşük kartla seç" kuralı, range'inde çöp OLDUĞUNU varsayar. ICM'in daralttığı range çoğunlukla yalnız çift + yüksek karttan oluşur: kaçırılmış suited connector'ların yoktur, bu yüzden blöf malzemesi zorunlu olarak yukarıdan — A-high, hatta chip'te delilik sayılacak K-high'dan — gelir. Aynı daralma orta çiftlerini value'ya terfi ettirir ve rakibin bluff-catch eşiğini çökertir: iyi removal'lı AQ/AJ tipi eller küçük bete karşı bile sınıra iner. Pasif sokaklar geçtikçe bu etki büyür, çünkü iki tarafın da tepesi incelmiştir.

**Kural:** Blöfü ezber listenden değil range'inden seç — çöp dilimi yoksa blöf ile value aynı mahalleden çıkar ve fold'u da yukarıdan bulmak zorundasın.

### 21.3 İki koltuk — cover asimetrisi

Yön mutlak değil; cover haritasının işaretine bağlıdır. Aynı spot iki oyuncuya zıt talimat verir:

| Sen | Prim | Postflop yön |
|---|---|---|
| **Cover EDİLİYORsun** (kaybedince bust) | Yüksek | Bir kademe İNDİR — check, call, küçük, fold |
| **Cover EDİYORsun** (chip lider, kaybetsen de yaşarsın) | Düşük/negatif | Bir kademe YUKARI — barrel, baskı, büyük |

Bu B20.3 tablosunun postflop yüzüdür. Chip lider baskıyı satar (rakip için her pot bust riski); kısa/orta stack baskıyı yer (daralır). **Başlık "bir kademe indir" cover EDİLENin kuralı; cover EDEN tersini yapar.**

### 21.3-EK PKO ≠ ICM: kapsananın indirimi korku değil, fold equity kaybı

21.2/21.7 satırları ICM içindir. PKO'da kapsanınca aynı refleksi (ince value → check-back, boy küçült) uygulamak yanlış: PKO'da kapsananın pozitif risk primi yoktur *(ICM bileşeni ayrı — kalibre et)*. Onu "pasif" yapan bust korkusu değil, karşısındaki cover edenin KELLE için geniş ödemesidir. Geniş ödeyen rakibe karşı blöf ölür, value yaşar — ince value daha çok ödenir; kapsananın value aralığı iki yönde de kabaca aynı, blöfü daha az *(çoğunlukla)*.

**Kural:** kapsanınca blöf/barrel kademesini indir, value kademesini indirme; semi-blöfleri fold equity beklemeden equity'yle fiyatla. "Cover ediliyorum → thin value check-back" ICM kuralıdır, kelle kuralı değil. FT'de ikisi birlikteyse iki indirimi ayrı hesapla: ICM primi ince value'yu keser, kelle indirimi blöfü keser — tek "bir kademe indir"e çevirme. Cover eden tarafın flop'u için 28.20; kapsanan IP için 28.21.

### 21.3-EK-2 Cover eden BB %90-100 savunur — rakibin primi senin realizasyonun; lider river'da boy kaldıracı kullanır

Derin BB'de "ICM → daralt" refleksiyle marjinal suited/bağlantılı elleri min-raise'e katlamak yanlış koltuğun kuralıdır. Seni cover ETMEYEN açıcının her postflop chip'i bust riski taşır → büyük flop boyu, agresif barrel, hero-call yapamaz. chipEV'de büyük boyla ezilen alt-per/backdoor eller burada equity'lerini FAZLASIYLA realize eder; üstüne flop lead gibi chipEV'de kapalı araçlar açılır. Sonuç: cover edilirken daralan savunma, cover ederken genişler — derinde %90-100'e yaklaşır *(kalibre et)*; 3-bet value dilimi ise dar kalır (12.2-EK-2). İkinci kol — boy kaldıracı: rakip ICM'le kilitliyse (over-fold'a mahkûm) lider chipEV'ye yakın oynar ve river'da chipEV'de saçma görünen aşırı boyları (potun katları *(kalibre et)*) kullanır — kaybettiği dilim stack'ine göre küçük, rakip için bust. 21.3'ün "bir kademe yukarı"sı iki somut kola iner: preflop savunma genişliği + river boy kaldıracı; 21.7 kartı bu iki satırla okunur. Sınır: iki büyük stack birbirine karşı — kaldıraç kapanır, prim karşılıklı (22.4).

### 21.3-EK-3 Cover eden IP'nin stab'i: frekans ve boy birlikte büyür

21.3-EK-2 cover edenin iki kolunu verdi (preflop savunma genişliği, river boy kaldıracı); üçüncü kol flop stab'idir. Kapsanan açıcı check ettiğinde cover eden IP'nin stab'i chipEV'deki gibi "küçük ve seyrek" değildir:

- **Neden:** kapsananın eşleşmemiş aralığı — AK/AQ/KQ dahil — küçük bir stab'e bile katlanmak zorundadır; risk primi onu kayıtsızlaştırır. J-high, T-high ve düşük board'larda küçük-orta boy kapsanan aralığın büyük bir dilimini siler *(kalibre et)* → **range-stab.** Aynı IP kapsananken bu board'larda yarı frekansla ve küçük atar.
- **Boy haritası:** düşük/J/T-high → tek boy, ⅓–%40 pot, tam aralık (solver iki boy karıştırır; birleştir). K-high → yarım-pot, value iki-per+ etrafında; K-Q-x / K-J-x'te check payı kalır. A-high → pot-ya-check (21.2-EK-2).
- **Turn barrel:** ¾ pot civarı orta boy, yarıya yakın frekans; doğal blöf yetmez → rastgele broadway'ler de blöfe girer (prim izin verir). Rakibi geliştiren turn'de (T/J) blöf düşük karttan Q8/Q9 sınıfına kayar — equity + rakibin nut'unu bloklar.
- **Kapsananın cevabı:** artık check-raise VAR — 21.2-EK-5 ve 21.4-EK. Range-stab'i "fold yağar" diye değil "eşleşmemiş kütle katlanır, per'ler ve x/r kalır" diye oyna.

> **Cover eden IP'nin stab'i chipEV'nin iki katı sıklıkta ve bir boy büyüktür: düşük/J/T board range-stab, K-high yarım-pot, A-high pot-ya-check. Kapsananın eşleşmemiş aralığı bunu ödeyemez.**

### 21.3-EK-4 Cover eden BB'nin flop lead haritası — nut avantajı DEĞİL, ikinci/üçüncü çift avantajı; kapsanan BB lead'lemez

Kök hata: lead'i "nut'um varsa" aracı sanmak ya da hiç kullanmamak. Mekanizma: aynı aralık, yalnız cover yönü değişince (kapsanan BB → cover eden BB; birkaç puanlık prim farkı *(kalibre et)*) BB'nin lead frekansı sıfırdan global beşte bire çıkar. Sebep: kapsanan IP yüksek primle lead'e raise edemez (ölü giremez) → geniş call'a mahkûm; OOP'nin küçük bet'i cezasızdır. Harita iki tip: (a) düşük-bağlantılı (865/776/544 tipi) — nut avantajı, neredeyse aralık lead, küçük; (b) SEZGİSEL OLMAYAN tip: Q76 / J54 / T64 / 732 / T75 — BB equity DEZAVANTAJINDA bile *(kalibre et)* 6x/7x/4x'i çok, IP'nin yok → yarı frekans küçük lead; 7 ve 6, Q kadar lead'ler. Blöf backdoor ya da doğrudan equity ister; tam çöp check. Turn: düşük kart → devam, küçük; A/K → aralık-check (IP'ye çarpar), IP polar büyük bet'ler, BB 6x/7x'i katlar. Kapsanan BB: lead sıfıra sadeleştir — teoride üç board'da düşük-frekans karışım var, hiçbir el check'ten çok lead'lemiyor.

**Kural:** cover ediyorsan lead'i "ORTA çiftler kimde?" sorusuyla aç; kapsanıyorsan kapat. Bu 21.3'ün "bir kademe yukarı"sının somut flop aracıdır; 21.3-EK-2'nin "flop lead açılır" cümlesinin haritası.

### 21.3-EK-5 Kapsanan dar OOP açıcı neredeyse hiç c-bet etmez — yalnız AK/KK-avantajlı board'da; cover eden IP dar açıcıya GENİŞ flat + stab

Kök hata: "UTG dar açtım → board'ların çoğu bana iyi → c-bet". Mekanizma: cover eden derin IP, dar-kapsanan açıcıya karşı çok geniş flat'ler (bağlantılı/gapper suited'lar, JTo/QTo; beşte birin üstü *(kalibre et)*) — squeeze yemez (blind'ları cover ediyor), postflop rakip check-fold'a mahkûm → over-realizasyon. Kapsanan OOP'nin global c-bet'i tek hane *(kalibre et)*, yalnız küçük boy; istisna board'lar AK'nın nut olduğu yerlerdir — QJT, AKx, K8x tipi (IP KK/AK'yı 3-bet'lemiş, KK/AK avantajı OOP'de). QJT'de OOP küçük c-bet çoğunluk, IP üçte bir fold + AK/set raise. A-K-x'te pot boy polar (AK/A3s/33). Turn: A gelirse aralık-check (IP'nin flop call'ı Ax ağırlıklı); K + flush-draw turn'ünde Ax'in TÜMÜ jam — freeroll için (yalnız suited-Ax jam'lense IP katlanır, freeroll kaçar); flush tamamlanan river: aralık-check, AK bile check-fold (IP'de flush aralığın altıda biri, OOP'de yok *(kalibre et)*). Mesaj: büyük stack'in aralığı — açıcı da olsa caller da olsa — daha geniş ve zayıftır; kapsananın aralığı yüksek-kart yoğun.

**Kural:** kapsanan dar OOP açıcı olarak "aralığımın tepesi neyi tek başına tutuyor?" board'ları dışında check; cover eden IP olarak dar açıcıya geniş flat, check'e stab. 22.8-EK "kapsanırken OOP flat yok" kapsanan İÇİN doğru — cover eden IP'nin geniş flat'i bunun tersi değil, tamamlayıcısı; 28.21 (kapsanan IP) bu -EK'in ayna koltuğu.

### 21.3-EK-6 Lider OOP — kapsananın YOĞUN aralığının tepesini bloklayan blöf + A-düşük / düşük-eşleşmiş board'da POT boy; K-high board lidere kötü, küçük ve geniş value

Kök hata: lider OOP olarak blöfü equity'yle (FD/OESD) seçmek ve board'u pozisyon ezberiyle okumak ("erken pozisyonum, K-high benim board'um"). Mekanizma: ICM'de büyük stack'in açılış aralığı geniş/zayıftır (offsuit Ax, suited Kx, tüm çiftler); kapsanan caller yüksek-kart yoğun (KK/QQ/AK flat, yalnız AA 3-bet). Bu doku board haritasını ters çevirir. A+düşük (A42/A72), düşük-eşleşmiş (332/544), Q42/T64 lidere çalışır — equity DEZAVANTAJINDA bile *(kalibre et)* set / A-düşük iki per avantajı → POT boy polar (aralığın dörtte biri *(kalibre et)*): value AA/set/A-düşük iki per; blöf = kapsananın TEPESİNİ bloklayan el — suited Kx (AK'yı bloklar; equity umursanmaz, KTo bile pot), 33x'te KQ/KJ (KK/QQ'yu bloklar + iki over), küçük çiftler (JJ/TT'yi katlatır, set out'u temiz). Pot'tan sonra kapsananın Ax'i kayıtsız kalır, turn'de A-high'lar katlanır, K river'da neredeyse aralık jam. K-high board LİDERE KÖTÜ (offsuit Ax çok, Kx az): flop yarı check, küçük; turn yalnız küçük ve GENİŞ value (Kx, QQ, JJ) — kapsananın flop call'ı çift + A-high, turn küçük bet'ine katlanır ("kim 88'le T turn'ünü öder?"). QJT lider için aralık-check (en kötü board — kapsananın nut'u); A+broadway yarım pot/check, ikinci çift Kx çok-sokak blöf malzemesi (K'yı bloklar). Turn kuralı: flop'ta büyük polar attıysan düşük turn'de büyük-polar devam, yüksek turn'de küçüğe in (yeni per'i value'lamak için); flop'ta küçük attıysan turn'de de küçük ve geniş.

**Kural:** lider OOP'de iki soru — "kapsananın tepesi ne, onu ne bloklar?" ve "hangi board'da benim çöp aralığımın nut'u var?" — pozisyon adı değil, aralık yüzdesi. 21.3-EK-2'nin "river boy kaldıracı"na flop/turn kolu; 28.22'nin ICM ikizi.

### 21.3-EK-7 Fold etmiş mikro stack'ler potdaki HERKESİN primini büyütür

Cover asimetrisi tablosu yalnız eldeki iki oyuncuya bakarsa yanıltır: kenarda 3 mikro stack ladder beklerken, birbirine yakın iki büyük stack İKİ YÖNLÜ yüksek prim taşır — 1bb'lik cover, lider kırbacı vermez. Sonuç kooperatif pasifliktir: OOP açıcı çoğu board'da neredeyse global check'e döner *(kalibre et)*, IP küçük boyla bet'ler ve iki taraf da potu küçük tutar. Bonus: IP'nin küçük bet'leri chipEV'den FAZLA realize eder, çünkü karşısındaki check-raise'ler hem daha seyrek hem daha küçük gelir.

**Kural:** Prim hesabına yalnız eldekileri değil, kenarda pay atlaması bekleyen fold etmiş kısaları da yaz — onlar potdaki herkesin frenidir.

### 21.3-EK-8 Limp-check potu ICM'in ana sahnesidir — 3bb diye bırakma

Yüksek primli BvB'nin en sık düğümü limp-check potudur ve kimse bu potlar için yeterince savaşmaz. Süper geniş aralıkla yüksek equity board'da bile bolca check edersin — A-yüksek board'da Ax üstünlüğün olsa da destenin çoğu elinde diye c-bet lisansın yok; bet'i 1bb yapan zaten herkes. Farkı yaratan üç şey: minik bet'e karşı yalnız en dip çöpünü fold'lamak *(kalibre et)*, value'yla MİNİK check-raise bulmak, ve blöf-raise'i board'a dokunan yüksek-düşük kombolarla sahte draw kartlarından seçmek — draw'lar gelince blöfün olsun diye.

**Kural:** Limp potunda küçük bet herkesin hamlesi; kazanç geniş continue + minik check-raise'dedir.

### 21.3-EK-9 Wide-vs-wide potta imbalance "raise hiçbir şey başarmadı" sınıfından okunur

Limp-check potunda aralıklar el el değil SINIF olarak izlenir: iso ya da raise etmenin hiçbir şey başarmadığı orta offsuit sınıf (kabaca offsuit 7x-9x ve T9/J9 tipi bağlantılılar — raise'e yalnız daha iyisi devam eder, kötüsü zaten fold'lardı) her iki tarafta da check hattında birikir. Board bu sınıfa dokunuyorsa (8-7-x gibi) pot pasif oynanır ve küçük bet fold üretmez — bet'leyeceksen boyu büyük seç; dokunmuyorsa yüksek kart sınıfını hedefleyen küçük boylar işler.

**Kural:** Limp potunda board'u "orta offsuit sınıfına değdi mi?" diye tara — değdiyse küçük bet üretken değildir.

### 21.4 MDF ICM'de çöker

Minimum savunma frekansı (MDF) bir **chipEV** kavramıdır — cash'te ve ICM-baskısız MTT spotlarında geçerli; ama para sıçraması yakınken çöker. Chip kaybı kazançtan pahalı olduğu için, MDF'in söylediği savunma oranının ALTINDA suçsuzca fold edersin.

- **chipEV:** villain ⅔ pot bet'lerse MDF ~%60 → aralığının %60'ını savun (yoksa blöfe açıksın).
- **Cover edildiğin ICM spotu:** aynı bet'e savunma oranın çok daha düşük olabilir; over-fold burada exploit değil, doğru oyundur.

Yani "MDF altında fold = leak" kuralı ICM'de tersine döner: para sıçraması yakınken MDF'in altında fold etmek doğrudur. Villain'in blöf çalması senin ICM primini geri ödemez.

### 21.4-EK MDF çöküşünün sınırı: küçük range-bete karşı kapsanan hiçbir şey katlamaz

21.4 "ICM'de MDF altı fold doğru" der — polar büyük bete ve rakibin aralığının vurduğu board'a karşı doğrudur. Sınırı: cover eden, check etmesi gereken board'da küçük range-bet'lerse (33.10'un check-ağır board'ları; A-high/J-high/K-low yoğun aralığa karşı) aralığı çöple dolar, seninki per ve backdoor'la:

- **Cevap:** fold SIFIR, call ~%80, raise ~%20 *(kalibre et)*. Pasif ol: o bet'iyle kendi kendine kaybeder. Yüksek x/r frekansı icat etme — raise gelen yerde de %13–20 yeter.
- **Raise malzemesi ters:** marjinal devamın backdoor'SUZ versiyonu raise (J3/Q4 renksiz, 98 renk-kartsız), backdoor'lu versiyonu call. Value: top-pair; J-high'da (J-4-3) AJ/KJ ile BÜYÜK raise — set'in yok, koruma gerek; lider AQ/cepleri katlar.
- **Turn:** lider tüm aralığıyla gelir, çok check eder → hiçbir şeyi olmayan elle stab (21.2-EK-4), bir şey yakaladıysan check. River'da ¾ pota IP'nin yarısı katlanır *(kalibre et)*.
- **Doğru bet'e karşı normal:** doğru board'da doğru boyla (8-3-2'de ~%40) bet gelirse kapsanan yine az katlanır (~%15), az raise eder — aralık polar, orta el raise'i anlamsız.
- **Not:** bu, 22.8-EK'in "lidere OOP flat yok"unu bozmaz — konuşulan, ZATEN dar flat'lediğin yoğun aralıkla postflop.

> **MDF çöküşü büyük polar bete karşıdır. Lider senin board'unda küçük range-bet'liyorsa kapsanan hiçbir şey katlamaz: call geniş, raise seyrek ve backdoor'suz marjinallerle, turn'de zorunlu check'ine stab. Fold refleksi burada hediyedir.**

### 21.5 Önce korunma + kısa stack flop-jam

- **Protection-first:** ICM'de ince değeri bırakırsın (check-back), ama gerçek equity'ni korumak için bet aynı kalır. İnce ≠ kırılgan: ince = zaten önde, kart umursamaz → check; kırılgan = önde ama board tehdit ediyor → bet (ucuz kart vermemek için, showdown'u bağlamak için değil).
- **Kısa stack flop-jam:** sığ SPR'de (kalan stack ≤ pot) blöf-yakala/float yok; ya flop'ta jam ya fold. Ara boyut chip'i bağlar, fold equity'yi öldürür. ICM'de sığken hat ikiye iner: jam ya bırak.

### 21.5-EK Kırılgan value ICM'de her zaman bet değildir: rakip x/r edebiliyorsa güvenli turn'ü bekle

21.5 "kırılgan = bet (koruma)" der; bu OOP'nin lead/c-bet'i ve kuru board içindir. Cover ediliyorken IP stab'inde ikinci bir maliyet devreye girer: potu büyüttüğün board, seni birçok runout'ta öldüren ve check-raise'e en kötü oturduğun board ise koruma bet'i kendi potunu şişirir.

- **Statik yüksek board (K-6-3 r):** 66/AK/KQ üç sokak güçlü kalır → yüksek frekans küçük stab, hemen her el karışık bet/check, backdoor renk fark etmez.
- **Bağlantılı yüksek board (K-T-9 / Q-9-8):** equity daha YÜKSEK olsa da stab daha SEYREK *(kalibre et)*. Kx, KQ, hatta set'ler renk/J/Q runout'larında equity'lerini kaybeder ve x/r'a dayanamaz → flop check, brick turn'de bet. Bir tek "saf bet" eli neredeyse yoktur.
- **Turn'de kilit el check:** TT/99 (set, ~kilit) turn'de check-back eder — çağrılacak her eli (Tx/9x) bloklar, çekilişler zaten bet eder, koruma gerekmez. KJ bet eder: Tx/9x öder, A5o'dan koruma ister. "Zayıf el bet, güçlü el check" burada ters değil doğrudur.
- **Rakibin tarafı (OOP):** o yalnız equity'ye göre bet eder (backdoor renkli JT bet, renksiz check); IP renk umursamaz. Bu asimetri IP'nin "ne zaman check" sorusunu boarda, OOP'nunkini ele bağlar.

> **Risk primi yüksekken lisans equity değil dayanıklılıktır. Bağlantılı yüksek board'da güçlü-ama-kırılgan el flop'ta check, güvenli turn'de bet; kilit el çağrıyı bloklıyorsa turn'de de check. 21.5'in koruma bet'i statik board içindir.**

### 21.5-EK-2 Kırılgan-güçlü el + dinamik board → kapsanan kısanın BÜYÜK flop/turn jam'i — "bir kademe indir"in tek büyük istisnası

Kök hata: kapsanan kısa (~20bb) IP ya da kapsanan OOP açıcı olarak A-high board'da AK/AQ ile "prim yüksek, küçük bet/check" — ince-value refleksini kırılgan-güçlü ele uygulamak. Mekanizma: yüksek primde equity değil equity REALİZASYONU fiyatlanır. A-düşük-düşük + flush-draw board'unda AQ flop'ta çok önde *(kalibre et)*; flush/straight turn'ünde rakibin lead'ine karşı equity hâlâ yarıdan fazlayken FOLD — realizasyon çöker, çünkü ödeyen aralık nut'a kaymıştır ve prim call'ı yasaklar. Çözüm: parayı ŞİMDİ, hâlâ öndeyken koy — potun birkaç katı flop jam *(kalibre et)*. Şart: rakibin aralığında çift+flush-draw ya da çift+straight-draw kombinasyonu bol olmalı (A63ss / AJ3ss: dip çift + FD; 985 rainbow: 9x/8x + OESD) — jam bunlarla ödenir, çıplak draw'lar katlanır: hem ödeme hem fold equity. Rakipte alt çift+draw yoksa (A-high FD board, AJ5) jam yok, yarım pot. Malzeme: value = AK/AQ/AJ draw kartı OLMADAN (korunma isteyen); blöf = rakibin EN İYİ Ax'ini bloklayan çöp (AJ3'te JT/TT/99, A54'te KJ/QJ) — FD değil, FD zaten equity'siyle call'da yaşar. "Straight'i vardır" kaygısı yanlış: varsa zaten kaybediyorsun; jam, sonra kaybedeceğin runout'ların bedelini rakibe ödetir. OOP versiyonu: kapsanan dar açıcı A-K-x pot bet sonrası çift-flush-draw turn'ünde aralığın çoğuyla jam — AK yarım destede check-fold'a mahkûm olacağı için.

**Kural:** ince/statik el → kademe indir (21.2); kırılgan-güçlü el + rakipte çift+draw bolluğu + kötü runout çokluğu → kademe YUKARI, jam. Sınır: yalnız kısa-orta stack (bahis öncesi SPR ≤ ~5 *(kalibre et)*) ve yalnız bu board sınıflarında; rakibin set/iki per avantajı olan K54 tipi düşük board'da tersine yüksek check-back. Poker-sanity notu: bu, kapsananın "blöf VE ince value iner" kuralının ihlali değil — inen ince value, inmeyen KIRILGAN value (21.5 zaten ayırır); burada o ayrımın uç hâli yazılıyor.

### 21.5-EK-3 "Bluff-catcher'a dönüşme" lead'i — rakibin ana boyu büyük/overbet ise orta-güçlü elle turn/river'da KÜÇÜK lead, check-call değil

Kök hata: iki per ya da güçlü tek per ile OOP check edip büyük bet karşısında "call mı fold mu" ikilemine düşmek. Mekanizma: IP'nin river boyu polar-büyük (overbet *(kalibre et)*) ise check'ten sonra iki per bile bluff-catcher'a döner — güçlü eli bluff-catcher yapmak değer yakar, yüksek primde iki kez yakar (call-off vergisi, 21.1). Küçük lead (potun onda biri–üçte biri) IP'nin check-back edeceği tüm tek per'lerinden (7x, 9x-QQ, zayıf Kx) ödeme toplar ve büyük bet'i engeller; raise gelirse nut dilimi (straight/set) reopen eder, iki per katlanabilir. Blöf ihtiyacı düşük — kaçırılmış kombo draw'lar yeter. Nerede: K/T turn'de Kx iki per, A river'da Ax, brick 9-turn'de A-high'lar; cover eden BB'de en geniş, kapsanan BB'de yalnız güçlü dilimle *(kalibre et)*.

**Kural:** "check edersem büyük bet yiyip bluff-catcher olurum" → küçük lead; "check edersem küçük bet yerim" → check-call. 21.2'nin "büyük→küçük" satırı burada rakibin boyu için değil, senin elini korumak için okunur; 21.5 protection-first'ün OOP turn/river uzantısı.

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

### 21.7-EK "Boyut: büyük/polarize" satırının sınırı — kilitli rakibe baskı BOYLA değil FREKANSLA satılır
21.7'nin lider sütunundaki "boyut büyük/polarize" rakibin fiyat okuduğunu varsayar. ICM'le kilitli rakip fiyat okumaz: offsuit 8x/3x'ini, zayıf per'ini boydan bağımsız katlar → fold oranı boydan bağımsızsa aynı fold'u en ucuz boy alır — küçük c-bet, küçük lead, küçük ICM squeeze/3-bet (22.8-EK'in "küçük ICM 3-bet ucuz fold-equity satın alır" satırının lider tarafı). Baskı, boyu değil FREKANSI yükselterek satılır: daha çok el aç, daha sık bet, her biri küçük *(sapma: kalibre et — sınırda)*. İstisna iki yönlü: (a) jam-or-fold bandındaki kısa BB min-raise'e fiyatla call ediyorsa boy o call'ı kesmek için BÜYÜR (12.4-EK, 12.2-EK-5); (b) kilitli değil fiyat okuyan reg'e karşı 21.7 aynen — value'yu büyük boyla al. İlke: rec'e / kilitliye karşı boyu ELİNLE seç (rakip fiyat okumuyorsa elin ne istiyorsa o), reg'e karşı ARALIĞINLA (27.12, 23.6-EK). Kilitli hedefi 12.4 seçer, bu satır fiyatını.

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

### 22.1-EK-3 Bubble-factor eğrisi: balon zirve → ITM çöküş → FT BAŞI en yüksek; ilk faz liderin hasat penceresidir
22.1'in dört fazı yönü verir; eğrinin ŞEKLİ üç sonuç ekler *(hepsi kalibre et)*. Prim balonda zirve yapar, ITM'de çöker, FT'nin başında döngünün EN yüksek noktasına çıkar — balondan bile yüksek: her basamak stack'e göre büyük, herkes birbirini cover ediyor.

1. **Hasat penceresi.** FT'nin ilk fazında (ilk eleme ya da ilk kısa bust'lara kadar; süresi masaya göre) herkes sıkı → lider cezasız soyar; pencere ilk bust'la daralır, her elemeyle prim bir tık düşer (22.1 madde 4). Kısa/orta için aynı faz en dar fazdır — 22.2-EK aynen.
2. **ICM sim'i future-game'i görmez.** Lider olarak sınırda genişlemeyi suited-yakın, oynanabilir ellerle yap; offsuit broadway'le değil — sim'in eşit gördüğü iki elden postflop realize eden kazanır (22.10'un lider hâli).
3. **Pasif sahada squeeze yok → geniş flat.** Masa squeeze bulmuyorsa liderin IP flat'i cezasızdır (12.4-EK "masayı dondur"); squeeze bulan reg masasında tersi.

28.6-EK'in "FT'deyim, sık" refleksinin ters yüzü: FT başı liderin en geniş, kapsananın en dar fazıdır.

### 22.1-EK Bubble tek faz değil, eleme-başına kademedir — jam'ci alt katmanı keser, cover eden caller sabit kalır; liderin silahı call değil baskı

"23 kaldı, 20 ödeniyor → bubble'dayım" da, "daha 3 kişi var → chipEV" de yanlış; prim eleme-başına birikir. Üç parça: (1) Jam'ci (cover edilen) — ödeme sınırına yaklaşan her elemede marjinal jam'lerin EV'si belirgin düşer *(miktar: kalibre et)*; tepe (AK/QQ) neredeyse etkilenmez, silinen hep alt katmandır (küçük-orta çift, offsuit A-yüksek, orta suited broadway) — 22.1'in faz priminin eleme-başına okunuşu; cover eden jam'cide katman bu kadar silinmez. Pure bubble'da o katman büyük ölçüde fold'a döner. (2) Cover eden caller — kaybetse de paraya fold'layabilen stack'in call aralığı bubble yaklaşırken NEREDEYSE değişmez (orta çift + A-yüksek çekirdek *(kalibre et)*; cover edenin primi ~0 — B20); alt sınır bir çift oynar, "6'lı çiftler / KQs girer" çoğunlukla olmaz. (3) Pure bubble'da lider — masanın GÖRELİ en geniş call'ı yine herkesi cover eden stack'tedir (kaybetse de paraya girer); ama düz ICM'de gereken call equity'si balona yaklaşırken hafif YÜKSELİR ve jam'cinin aralığı da daraldığı için liderin mutlak eşiği bile bir tık DARALIR *(kalibre et)* — "pure bubble'da lider açar" ezberi yanlış; liderin bubble avantajı call tarafında değil, call edemeyen stack'lere jam/raise ederek baskı tarafındadır. Kural: kaç kişi kaldığını değil, "ben mi elemeyi bekliyorum, beni mi bekliyorlar"ı güncelle — jam'ciysen alt katmanı her elemede kes, cover eden caller'san aralığı sabit tut (pure bubble'da sınırda bir tık daralt), baskıyı call'la değil jam/raise'le sat. 22.2 tablosu değişmez.

### 22.1-EK-2 Yumuşak bubble testi — "bu stack'le paraya fold'layabilir miyim?" ve saha büyüklüğü

Kalan/ödenen ORANINA bakıp her sahada aynı bubble aralığını oynamak iki şeyi kaçırır. (1) Saha büyüklüğü: küçük-orta sahalar (birkaç yüz kişiye kadar) benzer call aralığı verir; saha bir eşiği geçince *(kalibre et)* pure-bubble call aralığı belirgin sıkılaşır — kalan masalarda başkalarının hata hacmi büyür, edge primi (B24) kalınlaşır. FT'de küçük stack-EV'yle alınan spot, dev saha bubble'ında stack'e göre büyük bir kazanç *(kalibre et)* ister; 24.2-EK'in saha çarpanı budur. (2) Yumuşak bubble: paradan ~%20 uzakta küçük sahada call aralığı pure-bubble'a göre çok geniştir (chipEV'nin bir kademe altı); büyük sahada aynı yüzde daha da GENİŞ gelir — 15bb o kadar elemeyi fold'layarak bekleyemez. Test: "paraya fold'layabilir miyim?" HAYIR → yumuşak bubble gamble fazıdır: hard bubble'a stack'le gelmek (30bb ile bubble'ı ezmek) küçük call'ları pas geçmekten değerlidir. EVET → pas geç; aynı rakip sonra geniş açacak, rejam'in daha değerli olacak (22.2-EK-2). Eşiği iki soruyla kur: saha kaç masa, stack'im fold'la paraya yetiyor mu. 12.0 tablosu değişmez; "saha karakteri" sütunu bu sıkılıkla okunur.

### 22.1-EK-4 Saha büyüklüğü stone bubble asimetrisini ÇEVİRİR — dev sahada cover eden gevşer, kısa kilitlenir

Kök hata: kalan/ödenen oranıyla oynamak ("64/63 = 10/9 = 489/488, hepsi stone bubble"). Mekanizma: aynı stack'ler, aynı SB-BB, üç saha: **küçük saha** (lineer ödeme, FT görünür) → iki tarafın primi de yüksek ve SİMETRİK (kısa ≈ cover eden, ikisi de çift hanenin üstü — *kalibre et*); lider bile sıfır değil, FT'yi gördüğü için birkaç puan taşır. **Orta-büyük saha** → iki prim de düşer, lider chipEV'ye iner, kısa herkese aynı primi taşır (rekabet yok). **Dev saha** (onlarca masa) → makas AÇILIR: cover edenin primi düşer (kaybetse de biri başka masada bust olur, paraya girer), kısanın primi YÜKSELİR (fold'layarak paraya girer). Sonuç: dev-saha stone bubble'da kısa SB'nin jam'i yarıya iner ve limp'e döner; cover eden BB'nin call'ı GENİŞLER — küçük sahada net fold olan A9o/K-yüksek suited call'a döner *(kalibre et)*.

**Kural:** stone bubble'da ilk soru "kaç masa kaldı": bir-iki masa → simetrik tavan, kısa any-two jam, cover eden çok dar call; onlarca masa → tek yönlü baskı, kısa jam'i keser, cover eden geniş öder. 12.0 "saha karakteri" sütunu bu satırla okunur.

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

### 22.2-EK-2 Prim ≠ double'ın gelecek-oyun değeri — varış rolü: "kazanırsam KİM oluyorum?"

22.2-EK "kısa için double en çok şeyi değiştirir" der — ham PRİM (call eşiği) için doğru. Double'ın GELECEK-OYUN değeri başka ölçüyle ölçülür: vardığın rol. 30bb'den 60'a giden masayı domine eder (herkesi cover eder, bubble avcısı olur); 20bb'den 40'a giden hâlâ cover edilen bir orta stack'tir. Hesap iki katmanlı: ICM primi orta-derin'i kısadan daha çok frenler (cover edilenin primi yüksek, kaybedecek $EV'si fazla); double'ın gelecek-oyun değeri bu farkı DARALTIR — ICM'e duyarsız masalarda tersine çevirebilir *(kalibre et)*. Kısa yalnızca masada daha kısalar varsa min-cash'e sıkışır. Popülasyon hatası: kısa fazla iter, orta-derin gelecek-oyun değerini prime katmayı unutur; cover eden büyük ise kısaya karşı sabit aralıkla öder (22.1-EK). Üç uygulama: (1) 3-handed'da double edince LİDER olacak stack (hangi koltukta olursa olsun), shove'a call/rejam aralığını double edince hâlâ cover edilecek stack'e göre belirgin genişletir — kazanınca baskı koltuğu; (2) bu değer büyük stack'i iyi oynadığına inanıyorsan artar, rakipler ICM'e duyarsızsa azalır (B24 edge primi); (3) kısa için 8→16bb "yaşayan stack" (bir double daha = kazanma şansı), 3→6 "ölü stack" — ilk double'ı geniş al, blind-out sonrası double işe yaramaz. 24.2'ye beşinci soru: "kazanırsam KİM oluyorum?" (24.2-EK).

### 22.2-EK-3 ITM sonrası "gaz" fazı, herkes gaz veriyorsa büyük stack için FREN fazıdır

22.2'nin "bubble patladı → gaz, biriktir" satırı masadan bağımsız değildir; popülasyonun DA gaz vermediğini varsayar. Faz primi düşüktür, doğru; ama sahanın yarısı 20bb altındayken ve herkes aynı dersi bilip patlarken, cover eden derin stack'in en yüksek EV'si ÇARPIŞMAYI beklemektir: her el birkaç kişi bust olur, sıradaki basamak sana yaklaşır, chip'ini riske atmadan ladder'larsın (22.11'in ITM uygulaması). Fren "nit" değil: pozisyonda ve amatöre karşı her dağıtılan el +EV kalır (over-realize, 21.3-EK-2) — kesilen, agresif reg'lere karşı marjinal 3-bet/flip'tir. Test: "masada benim yerime birbirini elemeye hazır iki+ oyuncu var mı?" EVET → fren, seçici; HAYIR (masa pasif/homojen) → 22.2 gaz aynen. Gün sonuna yakınsa ikinci kat: ertesi güne derin gelmek, gece patlayan sahanın ürettiği basamakları bedava alır. Faz tablosu değişmez; bu satır "gaz"ın masa-koşullu istisnasıdır — kısa ve orta stack için gaz satırı olduğu gibi kalır.

### 22.2-EK-4 Stone bubble'da kısa stack'in primi bb'ye değil SIRAYA bağlı — "altımda kaç kişi bust bekliyor?"

Kök hata: "10bb'yim, kaybedecek bir şeyim yok → prim düşük" ya da tersi "kısayım → prim her zaman en yüksek". Mekanizma: stone bubble'da kısa stack'in en iyi senaryosu min-cash'tir; sahada ondan da kısa stack'ler varsa fold'layarak paraya girer → primi ORTA stack'in ÜSTÜNE çıkar (aynı masada 10bb'lik stack 30bb'likten yüksek prim taşır; 7bb'lik stack'ler 22bb'nin bir buçuk katı — *kalibre et*). Orta stack için double'ın gelecek değeri büyüktür, bubble'lamak "ayıp"tır ama felaket değil → primi düşük kalır. Tersine, kısa stack'in ALTINDA kimse yoksa (sahanın en kısası, açık chip lideri karşısında) primi çöker: aynı 8bb iki turnuvada %1 ve %10 taşıyabilir *(kalibre et)* — bb sayısı değil, ortalamaya oran + altındaki bust adayı sayısı. Mini sahada altında İKİ kısa varsa orta stack'in primi de sıçrar; tek kısa varken hâlâ savaşmak zorundadır.

**Kural:** prim sorusu "kaç bb'yim" değil, "fold'layarak paraya girebilir miyim, altımda kaç bust adayı var". EVET/çok → prim tavan: jam'i kes, call'ı yalnız aralığa karşı equity'yle aç (12.2-EK-6). HAYIR/sıfır → prim düşük, double'ın değeri yüksek, gamble serbest. 22.2 tablosu değişmez.

### 22.2-EK-5 Post-bubble düşük prim (%3-7) açılış tablosunu değil AĞACI değiştirir — open-jam kaybolur, OOP 3-bet'e call kaybolur

Kök hata: "ITM, prim düşük → chipEV aynen" (jam ve call dahil) ya da tersi "3 masa kaldı → sık". Mekanizma: üç masa kala, FT uzakta: prim %3-7, RFI aralığı chipEV'nin ~%1 darı (yalnız dip kombolar düşer) — açılış tablosu neredeyse aynı. Ama küçük prim iki düğümü siler: (1) **OPEN-JAM** — 14bb HJ'in chipEV jam'i ~%11'den ~%2'ye iner *(kalibre et)*: min-raise aynı işi görür (arkadakiler primle pasif), tüm stack'i riske atmaz; 25bb efektif, blind'lar kısa olsa bile open-jam sıfır → 3-bet-call/3-bet-fold; "iyi el indükler": AQ 3-bet-call, jam'den belirgin kârlı — rakibin QTs/A5s jam'lerini içeride tutar. (2) **OOP 3-BET'E CALL** — %5 primle bile 3-bet'e OOP call neredeyse sıfır: çiftler jam, gerisi fold; yalnız AJs/JTs sınırda call. Kısa jam'e call ise chipEV'ye yakın kalır (prim simetrik, her iki yönde ~%4). BB'nin rejam'i chipEV ile aynı ellerde; fark 3-bet-call'ın (JJ/QQ) genişlemesi ve blöf 3-bet'in bloker-ağır olması (A2o/K3o/K5o). Bloker seçimi sığda YÜKSEK kart (KJo/KQo/ATo 3-bet: rakip çift + suited broadway jam'ler, onları blokla), derinde/dar aralıkta düşük suited Ax.

**Kural:** post-bubble "gaz" = RFI ve BB rejam chipEV; open-jam → min-raise; OOP call → jam/fold. 22.2 faz tablosu değişmez; 22.2-EK-3'ün "fren"i büyük stack içindir, bu satır herkes için ağaç seçimi.

### 22.2-EK-6 Prim bb sayısıyla değil, toplam chip'teki PAYINLA ölçülür — 5bb'yle %20+ prim, 8bb'yle ~%3

Kök hata: "5bb'yim, kaybedecek şeyim yok, prim sıfır" refleksi. Mekanizma: prim, bust'un basamak maliyetidir; o maliyet stack'inin masadaki toplam chip'e ORANIYLA ve senden kısa stack'lerin varlığıyla belirlenir, blind cinsinden büyüklüğüyle değil. Senden kısa iki stack varsa (2bb ve 4bb) 5bb'lik stack bile "onları geçip basamak almak" pozisyonundadır → prim tavana yakın *(kalibre et)*; aynı 5bb, herkes 20bb+ iken ve sen açık ara en kısayken prim ~0. Aynı yasa yukarıda: toplam chip'in %8'ini tutarken prim orta, %18'ini tutarken (cover edilen ikinci stack) çok daha yüksek *(kalibre et)* — chip biriktikçe kaybedecek şey büyür.

**Kural:** "kaç bb'yim" değil "chip'in ne kadarı bende ve benden kısa kim var" — iki soruya bak, bb sayısını unut. 12.2 rol matrisinin "benden kısa VAR/YOK" sütunu bu yasanın ta kendisidir; matris değişmez, bu satır sayısal gerekçesidir.

### 22.2-EK-7 Varış rolünün ikinci yarısı: kaybedersem KİM oluyorum?
"Kazanırsam kim oluyorum" testinin aynası da çalışır: bu potu kaybedersem masada KİMİN altına düşüyorum? Yarım stack'ini riske atıp kaybettiğinde hâlâ mikro stack'in kat kat üstündeysen, o mikroya rağmen chipEV'e yakın oynayabilirsin — çarpışmadan en çok o kârlı görünse de senin göreli konumun sarsılmıyor. Ama kayıp seni benzer boydaki stack'lerin arasına ya da altına düşürüyorsa boyları küçült: roller netleşmeden chip biriktirmenin değeri düşüktür, göreli konumu korumak öndedir. Masadaki üçüncü stack'in etkisi bu yüzden lineer değildir.

**Kural:** Bet boyunu belirlerken "kaybedersem sıralamam ne olur" diye sor — cevap "değişmez" ise chipEV'e yaklaş, "düşerim" ise bir boy küçül.

### 22.2-EK-8 Post-bubble'da popülasyon saatlerce eski modda kalır
Bubble patladıktan sonra ilk bir-iki saat *(süresi sahaya ve seviye uzunluğuna göre — kalibre et)* sahanın büyük kısmı hâlâ yüksek-prim refleksleriyle oynar: bazıları value elle bile call-off'a aşırı sıkı kalır (iyi bir eli gereksiz fold eder), bazıları hâlâ bubble baskısını satmaya devam eder (aşırı geniş open/agresyon). İki mod ZIT sapma ister: aşırı katlanan post-bubble nit'e karşı genişleyen taraf fold equity'li olandır (steal, blöf-jam, 3-bet blöfü) — ince value'nu KES, çünkü fold yer ve sana ödeyen aralık daha güçlüdür (23.1: nit → pot'larını çal; "value ile ceza" 23.15/23.8-EK'te fazla ÖDEYEN sahaya bağlanır, fazla katlanana değil); baskı satmaya devam edene karşı genişleyen taraf call/3-bet'tir. Teşhis tuzağı: küçük 4-bet ("click" — 3-bet'e karşı AÇICININ küçük 4-bet'i, bkz. 12.2-EK-11) tek başına "hâlâ bubble modunda" sinyali DEĞİLDİR; 12.2-EK-11'de click'in malzemesi value QQ+/AK + offsuit Ax blöf, yani yapı gereği value-ağırlıklı polar bir hattır ve varlık koşulu yüksek prim değil, rakibin 5-bet blöf-jam BULUYOR olmasıdır — click'i "mod artığı, value değil" diye okumak gerçek QQ+/AK'ya fazla devam ettirir.

**Kural:** post-bubble ilk elleri "kim hâlâ eski modda" teşhisi için kullan — aşırı sıkı fold edene blöf/steal/jam genişlet (ince value'yu kes), hâlâ baskı satana call/3-bet genişlet; click'i mod delili sayma, önce "bu rakip 5-bet blöf-jam buluyor mu" diye sor.

### 22.3 Laddering nedir

Laddering, her eleme bir para sıçramasıyken sırf hayatta kalarak üst basamağa tırmanmaktır. Bir **orta-stack disiplinidir**: lider için prim düşük (özgür, baskı satar), orta stack cover ediliyor (ladder equity'si en yüksek). İki leak:

- **Over-ladder:** sağlıklı bir stack'i sırf ladder için nitlemek — chip biriktirme fırsatını kaçır, blind'lere eri.
- **Under-ladder:** ladder'ı hiç saymayıp seni cover eden mega ile gereksiz flip — cover edilirken bust.

### 22.4 Stack-tarama: kime baskı, kime saygı

- **Cover ETMEYEN bir alt stack'e saldır, lidere değil.** Senden kısa seni cover etmiyor → ona baskı ucuz (prim ~0). Lider seni cover ediyor → prim yüksek, saygı.
- **Short stack: CALL'ı daralır, JAM'i KALIR (B17).** Kısa olmak "her şeyi at" değil ama nit de olmak değil: cover baskısında sert daralan şey CALL aralığındır; unopened JAM aralığın fold equity sayesinde geniş kalır, cover edenlere karşı yalnız bir tık sıkılır. "Paraya fold'la girme" (jam'i kesme) yalnızca uç spotta doğrudur: başka bir mikro tam da bust olmak üzereyken (doğrudan ladder) *(kalibre et)*.
- **Outlier ICM'i keskinleştirir ve asimetri yaratır** (mega kimi ezer, mikro kime ladder belli). **Homojen stack'lerde asimetri kaybolur ama prim kaybolmaz:** herkes herkesi cover ettiği için çatışma primi karşılıklı yüksektir → homojen bubble masası herkes için sıkı oynanır (klasik eşit-stack "AA bile fold" satellite spotu).

### 22.4-EK Doğrudan rekabet — küçük sahada prim KİŞİYE göre değişir: kısa, kendine yakın stack'e karşı düşük, lidere karşı yüksek

Kök hata: her cover edeni aynı kefeye koymak ("cover ediliyorum → prim aynı"). Mekanizma: dev sahada kime kaybettiğin ya da kimden double ettiğin fark etmez — biri yüzlerce masada zaten bust olur, prim herkese karşı eşittir. Saha küçüldükçe (iki-üç masa, FT görünür) bubble için DOĞRUDAN rakipler belirir: kısa stack'in primi kendine yakın stack'e karşı, chip liderine karşı olandan birkaç puan düşüktür *(kalibre et)* — ondan double edince onu bubble adayı yapar; liderden double etmek liderin hayatını değiştirmez. Aynı motor iki kısa stack'i birbirine karşı neredeyse chipEV'de savaştırır (birbirine karşı tek hane, büyüklere karşı çift hane — *kalibre et*).

**Kural:** küçük sahada hedef seçimi iki katmanlı — (1) 22.4: cover etmeyene saldır; (2) cover edenler arasında kendine EN YAKIN olanı seç, lider en son. Aynanın öbür yüzü: orta stack'sen kısalar sana, lidere ittiklerinden GENİŞ iter — cover ettiğin kısaya karşı call defterini bu genişliğe göre aç (12.1-EK-2), liderin sana vurmasını beklemeyi sürdür. Zaman ekseni: post-bubble 3 masa kala rekabet kaybolur (prim simetrik, cover farkı küçük — 22.2-EK-5); pre-FT 16-10'da yeniden açılır.

### 22.4-EK-2 Cover eden iki rakip aynı primi vermez — double'ın rakibi NE HALE getirdiği primi belirler ("uydu" masası)

Kök hata: primi tek eksenli okumak ("cover ediyor → yüksek, etmiyor → düşük"). Mekanizma: ikisi de seni cover eden iki rakibe karşı primin farklıdır — onlardan double etmenin ONLARA ne yaptığına göre. Uzak liderden double almak onu hâlâ lider bırakır → sana basamak kazandırmaz → ona karşı prim tavan; sana yakın orta stack'ten double almak onu kapıya koyar → basamak sana yazılır → aynı cover edilme, çok daha düşük prim *(kalibre et)*. Uç hâli "uydu" masası: bir kaçak lider + birkaç benzer kısa/orta → kısalar birbirine karşı neredeyse chipEV (prim ~sıfır, birbirini bust etmek zorundalar — heads-up'a çıkmanın tek yolu), lidere karşı tavan; lider ise herkese karşı chipEV oynar (kimse onu bust edemez). Tersi de doğru: benzer büyüklükte ÇOK kısa varsa (3–4 tane 10bb) birbirlerine karşı prim yükselir — herkes bir başkasının bust'ını beklemeyi tercih eder.

**Kural:** her rakip için ayrı prim: "bu adamdan double alırsam KİM oluyor?" — kapıya koyuyorsam prim düşük, hiçbir şey değişmiyorsa tavan. Bu yüzden aynı elde SB'ye karşı chipEV, BB'ye karşı taş kesilirsin — aynı el, üç rakip, üç prim.

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

### 22.8-EK-2 FT'de orta-vs-orta ~30bb: flat TUZAĞI çöker — TT/99 flat değil, jam değil, FOLD
22.8-EK "OOP marjinalle flat yok" dedi; bu madde IP flat'in de çöktüğü düğümü verir ve 12.1'in "FT: jam iki kademe daralt" satırına flat sütunu ekler. ChipEV'de açılışa CO/HJ'den TT/99/AQs/KQs flat'in yarısı tuzaktır: arkadan reshove gelince rahat call. FT'de orta stack'ler birbirini cover ederken jam'e call'ın primi büyür → TT/99 "reshove'a katlanacak flat"e döner; jam'lemek ise 22.11'in çarpışma primini öder ve açıcının tepesiz-olmayan aralığına karşı flip'tir → sonuç FOLD. Flat aralığı JJ/QQ/AQs/AKs/KQs'e iner *(eşikler: kalibre et — stack dağılımına bağlı)*; iki seçenek kalır: "reshove'a call edebilecek kadar güçlü mü?" evet → flat/3-bet; hayır → fold. ~50bb'de aynı el biraz daha geç pozisyondan pure call'a döner — reshove primi düştüğü için tuzak yeniden çalışır. Yan etki: dar flat arkadakilere "saldırılmaz düğüm" sinyali verir. 5.2'nin "EP açılışına TT+ jam"i ICM-kapalı içindir; 12.2-EK-3'ün "orta çift call defterinde yaşar"ı cover EDİLMEYEN düğümdür — burada cover karşılıklı, defter kapanır.

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

### 22.10-EK Kısa jam'e karşı derin (≥~22bb) stack: varsayılan CALL, rejam değil — overcall hijyeni daralır; SB tek istisna

6-12bb'lik jam'e karşı 25-35bb ile "ya jam ya fold" oynamak A9o/77 tipi eli katlatır — yanlış. Kısanın jam aralığı zayıf Ax/küçük çift/suited Kx yoğundur; orta çift ve A-yüksek onu domine eder → CALL +EV. REJAM ise stack'ini arkadaki aralıklara karşı riske atar; arkadakiler küçük çiftle ödemez, overpair'le katlanmaz → çağrıldığında ezilirsin. Call ağacı, rejam-only ağacına göre devam aralığını belirgin GENİŞLETİR *(kabaca beşte bir — kalibre et)* ve arkadan jam gelince alt katmanı bırakma opsiyonu verir: yalnız güçlü dilimle devam. Arkada oyuncu azaldıkça (BTN) call bir kademe genişler. Tek istisna SB: arkasındaki BB rejam'e katlanabilecek kadar derinse (fold equity VAR) jam-only — flat call BB'ye pozisyonlu ucuz overcall/squeeze verir; committed kısa BB'ye karşı call ve rejam eşdeğerdir. İkinci katman: derin rejam arkadaki call aralıklarını daraltır → CO/BTN rejam'i biraz genişler *(A9s/ATo — kalibre et)*, yalnız arkadakiler gerçekten dar öderken. **22.10 overcall satırı daralır:** ≥~22bb'de *(kalibre et)* belirsizlikte varsayılan CALL, arkadan jam'e dar devam; "bilmiyorsan jam" yalnız SB'de, arkadaki BB fold edebilecek kadar derinken. "Yanlış overcall dev torch" gerekçesi korunur. Ayna kural: kısa blind'lardan YENİ geçti (UTG/erken pozisyon) → jam'i dar → ona karşı geniş aç; kısa CO/BTN'de blind'lara giriyor → marjinalle iter → arkanda böyle bir kısa varken daha DAR aç.

### 22.10-EK-2 Mikro stack'in jam'ine bir tık GENİŞ call — bust edince herkesin primi düşer; ama jam + CALL'a karşı en kısa BB TT/JJ bile katlar

Kök hata: mikronun jam'ine tek-el ICM eşiğiyle call, ya da "kısayım, her şeye öderim". Mekanizma, iki yön. (1) ICM tek-el resimdir; masadaki 4–5bb stack varken senin lidere karşı primin yüksektir (onu geçmek zorundasın) ve her kararda kelepçelisin. O mikro bust olunca primin düşer (kabaca birkaç puan *(kalibre et)*) ve orta stack'lere karşı cover eden olursun → mikronun jam'ine call eşiğini bir tık (bir-iki kombo, K9o/86s sınıfı) genişlet; sim'in verdiği aralık o kazancı görmez. Ayrıca mikro'ya karşı primin zaten ~0 (kaybetsen de kalırsın) → A2o call, K9o fold gibi "A canlı, K domine" ayrımı sim'den; genişleme onun üstüne. (2) Ters yüz: sen en kısa BB'sin, BTN geniş jam'ledi ve SB CALL etti — artık iki aralığa karşısın ve fold'layınca basamak sana sık geliyor (biri bust olacak) → TT/JJ bile FOLD *(kalibre et)*; aynı jam'e SB katlansaydı 45% call ederdin *(kalibre et)*.

**Kural:** mikro jam'ledi ve arkada call yoksa → bir tık geniş öde (onu yollamak kelepçeyi çözer); jam + call gördüysen ve en kısaysan → basamak bedava, orta çifti bile at. 22.10'un "kısanın blind'i yaklaşıyorsa sıkış" satırıyla aynı motor, iki yeni yüz.

### 22.10-EK-3 Mikro zorunlu blind'e yaklaşırken cover eden jam'ci GENİŞLER — bekleme teşviki caller'ın, genişleme jam'cinin

Kök hata: 22.10'u tek yönlü okumak. "Kısa rakibin blind'i yaklaşıyorsa sıkış" yalnız CALL'cı için yazıldı; jam'ci koltuğu boş. Mekanizma: masada bir-iki el içinde zorunlu all-in'e girecek mikro varken orta stack'lerin call'ı yalnız mikroya karşı değil, HERKESE karşı daralır — double'ın üst tarafı küçük (hâlâ kısa kalır, yine her eli katlar), fold'un gizli EV'si büyük (mikro bedavaya bust olur, basamak yazılır). Call'lar daralınca cover edenin jam'i genişler: aynı rakip, aynı el, tek-el ICM resminin verdiğinden bir kademe daha geniş jam — tepe ve dip jam'e, orta dilim raise'de kalır *(kalibre et)*. Ölçek kuralı: düzeltmenin büyüklüğü önümüzdeki birkaç elde ZORUNLU all-in olasılığıyla ölçeklenir. 2-4bb'lik mikro varsa büyük (orta stack'in call aralığı kabaca dörtte bir kısalır *(kalibre et)*); herkes 12bb+ ise bir puan civarı, yani yok; derin masada gelecek-oyun düzeltmesi sıfıra yakındır, tek-el resim yeter.

**Kural:** masada mikro varken iki soru — (1) bekleyen BEN miyim → call'ı daralt (22.10); (2) bekleyen RAKİP mi → ona jam'i genişlet, çünkü onun call'ı benim için daralmış durumda. Sınır: genişleme marjinal dilimde yaşar; gelecek-oyun hiçbir zaman "KK fold" tipi dev sapmayı satın almaz — 22.10'un ruhu korunur.

### 22.10-EK-4 Modelin göremediği — başka masadaki kısa stack'in blind'e yakınlığı
ICM modeli tüm kısa stack'leri konumlarına bakmaksızın eşit sayar; gerçekte aynı bb'deki bir kısa stack blind'e YAKINSA (kendi masanızda ya da çoklu-masa görünümünde başka bir masada), önümüzdeki birkaç elde zorunlu all-in'e girme ve bust olma olasılığı daha yüksektir. Bu bilgi elinizdeyse (online çoklu masa ekranı, ya da masanızdaki sıradaki pozisyon), marjinal bir call'u fold'a çevirmek laddering'i modelin göstermediği bir bedelsizlikle artırır.

**Kural:** başka bir masadaki kısa stack'in blind'e ne kadar yakın olduğunu bilebiliyorsan, o bilgiyi 22.10'un blind-geometrisi düzeltmesine üçüncü taraf olarak ekle — modelin görmediği laddering değerini sen hesapla.

### 22.11 Çarpışma etkisi: fold'un gizli EV'si açılışın EV'sini geçer

Bağlam: FT/para yakını, ICM açık. "ChipEV'de kârlı açılış → açarım" arkanda kalan oyuncuların BİRBİRİYLE çarpışma olasılığını fiyatlamaz. Pota girersen çarpışma ya olmaz (geç pozisyondan blind'lar çoğunlukla sana fold eder) ya da seni içine alır; fold edersen arkadakiler birbirine kalır — en net hâli BvB: SB kısa/agresifse BB'ye geniş jam'ler, BB geniş öder, biri bust olur — basamak sana yazılır. Fold'un EV'si ≈ P(arkada çarpışma) × P(bust) × sıradaki basamağın değeri (BTN'den: P(SB jam) × P(BB call) × P(bust)); çarpım büyükse marjinal açılışın küçük EV'si altında kalır. Yalnız marjinal ellerde karar değişir. Etki her açık pozisyonda var ve büyüklüğü arkanda kalan oyuncu SAYISI ve profiliyle ölçeklenir: en yüksek erken pozisyondan (arkada çarpışabilecek çok oyuncu, çok yol), BTN'den tek yol kalır — doğrudan SB-BB savaşı — ama SB kısa/agresifken o tek yol kalındır; SB'den sıfır (BB'ye karşı tek başınasın, çarpışacak üçüncü yok). Üç soru: fold'lasam arkadakiler (geç pozisyonda: SB) itiyor mu? Ödeyen (BB) var mı? Basamak stack'ime göre büyük mü? Üçü evetse sınır elleri AÇMA *(eşikler: kalibre et)*.

**Harita kısa stack değil, savunma genişliğidir.** Geniş savunup flop'ta çift/draw'la stack-off eden BB herkesle çarpışır → önünde marjinal açılışı kes; fold-fold-fold BB'nin önünde sınır elle bile aç (23.1: station = yüksek, nit = düşük çarpışma). Chip liderine marjinal 3-bet de aynı haritaya tabi — arkada aynı fırsatı gören 4-5 oyuncu varsa çarpışmayı onlara bırak.

**Kaçış kapısı:** çarpışma masasında 3-bet'çinin aralığı da sıkışır → 3-bet'e devam eşiğini bir kademe yukarı *(sınırda)*. Orta-kısa stack'te *(≈15–25bb, kalibre et)*, raise stack'in küçük bir dilimi kalacak kadar küçükken, arkanda iki agresif/kısa oyuncu varken AK tipi güçlü-ama-nut-olmayan elle open-jam yerine fold opsiyonu satın alan RAISE: biri itip öbürü yeniden ittiğinde katlanıp basamağı alırsın (12.4, 22.10). Jam/fold bandında (≈≤12bb) bu kapı kapalı — AK'yı it ya da at.

### 22.11-EK Aynı prim oranı, farklı MUTLAK derinlikte farklı çarpışma sıklığı verir
İki masada stack ORANLARI (dolayısıyla risk primleri) neredeyse aynı olsa bile, masanın MUTLAK ortalama derinliği farklıysa çarpışma olasılığı da farklı çıkar. Ortalama derinlik SIĞSA (herkes düşük bb) oyuncular birbirine daha sık girer, kısa stack'in etrafında bust'lar daha sık olur — fold'un gizli EV'si yükselir. Ama bu bekleme bedava değildir: oranlar sabitken sığ masada senin bb'n de düşüktür, zorunlu blind erimen en hızlı çalışır ve jam'inin fold equity'si en çabuk ölür — yani mutlak derinlik çarpışma SIKLIĞINI verir, kendi bb'n bekleme BÜTÇESİNİ (22.10 madde 1: yaklaşan kendi blind'in "bekle" opsiyonunu öldürür, o elde genişlersin; 22.4: cover baskısında CALL daralır ama JAM KALIR). Ortalama derinlik DAHA DERİNSE (aynı oranlar, daha yüksek bb) diğer stack'ler birbirini daha rahat fold'layabilir, çarpışma seyrekleşir — kısa stack "birkaç orbit var, bir şey olur" diye rahat hissedebilir ama kimse çarpışmayabilir ve sessizce blind'e erir.

**Kural:** iki değişkeni ayrı sor — masanın MUTLAK ortalama derinliği çarpışma SIKLIĞINI, "kaç bb'yim" bekleme BÜTÇESİNİ verir. Sığ masada yalnız jam'in hâlâ fold equity taşıdığı sürece fold'layıp çarpışmayı bekle (kendi blind'in yaklaştığı elde 22.10 uyarınca genişle); derin masada çarpışma seyrek olduğu için eli kendin yaratman gerekebilir.

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

### 23.1-EK Balina limp'ine karşı karışık stack: üç soru — "Whale: value-ağırlıklı"nın preflop icrası

"Balinaya karşı ne olsa raise/jam" refleksi iso aralığını lineer-geniş kurup arkadaki üç oyuncunun jam/3-bet'ine açık bırakır. Limp'e cevap üç soruyla *(eşikler: kalibre et)*:

1. **Stack'im jam'e sığıyor mu (≤20bb)?** Balina raise'e domine ellerle CALL eder, jam'e etmez → KTs/QTs/A9s–AQ RAISE (jam'lersen domine call'ı atarsın), 75s/85s tipi JAM — 23.14'ün "oynanabilir el call, equity-reddi jam" ilkesinin limp aynası. SB 15bb: tepeyi raise, 77–TT ve suited Ax'ı BvB'ye göre daha çok jam.
2. **Arkada jam'leyebilen kaç kişi var?** CO 18bb: 3× iso (3.5× değil) TT+/AJs+ value; iso blöfü suited connector değil bloker offsuit (KTo/QTo/JTo) — arkada jam'leyen varsa fold equity bloker ister. BTN over-call ediyorsa blind'lar T8s tipiyle jam'ler — over-call ölü paradır.
3. **Arkadakilerle derin miyim?** BTN ~50bb vs limp + 18bb iso: 45bb jam'in kazanımı yok → commit eden non-all-in 3-bet tüm aralıkla (99 dahil); balinanın nadir tuzağına ve arkadaki 15–20bb'lere karşı jam yalnız kaybettirir.

**Sıkı balina (~%12 raise):** 18–20bb'de 55–22/A2s fold; BTN 40bb'de K5s–K8s fold, AKo bile flat (dar aralığa 3-bet edilmez); BB savunması sert daralır — "her suited el defend" leak. 33.6 karışık-stack mantığının limp düğümü.

### 23.1-EK-2 Balinaya karşı çift merdiveni — agresyonun değeri domine edilen call'lardan gelir

Pasif balinanın açılışına çiftlerin cevabı tek değil merdivendir: orta-üst çift (99 sınıfı) commit eden non-all-in 3-bet (jam yalnız stack ≤20bb olup raise'e boy kalmadığında) — değeri korumadan değil balinanın DOMİNE edilen call'larından gelir (88/77 öder; jam'lersen tam o call'ları atarsın, 23.1-EK); alt çift (22-66) call — flip'ten fold ettirmek chip biriktirme fazında az kazandırır, asıl kâr postflop'ta o elini sana anlatırken; AJs sınıfı 3-bet-call — devam aralığını domine eder. İnce ek: "As gördüm → jam ya da fold" oynayan rec'e karşı orta çift 3-bet'i sana A-high board'ların komutasını da verir — A'sız board'ları fast-play'ler, A'lı board'da eli bellidir.

**Kural:** Balinaya agresyonu domine ettiğin call'lar ödüyorsa bas — ama boyu all-in OLMAYAN tut, jam tam o domine call'ları atar; ödemiyorsa alt çiftle call'la ve postflop dinle.

### 23.1-EK-3 Geniş açıp flop'ta da stab eden ama baskıya çözülen tip — check-raise blöfü LAG istisnası

B23.1'in LAG kuralı ("blöfüne fold etme, bluff-catch aç") her geniş/agresif görünen oyuncu için geçerli değildir. Bir alt tip var: preflop geniş açar, flop'ta da sık stab eder — ama SENİN karşı-agresyonuna (check-raise, 3-bet) geldiğinde çözülür, ödemeyi bulamaz. İşareti: geniş açılış + yüksek c-bet frekansı + karşı-agresyona düşük devam. Bu tipe karşı varsayılan "LAG'e bluff-catch aç, blöf yapma" kuralı tersine döner — marjinal/orta güçte bir elle check-raise BLÖFÜ tam da onun geniş-ama-foldlanabilir aralığını hedefler. Tek elle etiketleme; karşı-agresyona verdiği yanıtı gözlemleyip karar ver.

**Kural:** LAG'i tek tip sanma — "geniş açar + sık stab" ile "baskıya dayanır mı" ayrı eksenlerdir; ikinci eksende zayıfsa check-raise blöfü ekle, standart LAG kuralını burada uygulama.

### 23.1-EK-4 Az raise-hacimli rakipte river raise abartılı bir iddia gibi okunur

Rakip tipi (Nit/Station/LAG/TAG/Whale) yatay bir eksendir; deneyim kökeni ayrı, dikey bir eksendir ve herhangi bir tiple birleşir. Çoğunlukla canlıda oynamış, HU/online river-raise hacmi düşük bir rakip river check-raise'ini normal bir taktik adımı değil aşırı bir iddia gibi okur — bu iki yönde para bırakır: (1) senin river raise'ine karşı normalden fazla foldlar; bu ince value raise'ini DEĞİL blöf raise'ini büyütür — foldlayan bir aralığa ince value ödenmez, o yüzden blöf/leverage raise'inin frekansını artır ve ince value'yu raise yerine value-bet/call ile al; (2) kendi river raise'i de aynı nedenle neredeyse hep value'dur — ondan gelen nadir river raise'e büyük saygı göster, blöf ihtimalini standarttan düşük tut. İşaret: raise sayısının azlığı, HU/final-masası tecrübesizliği belli eden yorumlar *(kalibre et)*.

**Kural:** Deneyim eksenini tipten ayrı oku — az river-raise-hacimli rakip senin raise'ine fazla foldlar (bu blöf raise'ini büyütür, ince value'yu değil — ince value'yu bet/call ile al), kendi nadir raise'i neredeyse hep value'dur; ikisini birden fiyatla.

### 23.1-EK-5 Blöf adayını rakibin artık ne kadar ödediğine göre seç

Blöf malzemesi seçerken standart soru "bu el fold ettirir mi"dir; eksik olan ikinci soru şudur: bu el çağrıldığında karşımdaki aralığa karşı gerçekte ne kadar kazanıyor? Sıkı/nit bir rakibe karşı orta-güçlü bir showdown eli onun çağıran aralığına karşı zaten çok az kazanıyorsa, o eli bluff-catcher'a saklamanın maliyeti düşüktür — blöfe çevirmek neredeyse bedavadır, çünkü elde tuttuğun gerçek equity zaten az. Aynı sınıftaki el gevşek/yapışkan bir rakibe karşı hâlâ gerçek showdown değeri taşıyorsa (çağıran aralığı geniş ve zayıf), onu blöfe çevirmek pahalıdır — showdown'da kazanacağın parayı terk edersin.

**Kural:** Blöf adayını "iyi/kötü el" diye değil "bu rakibe karşı showdown'da ne kadar kazanıyor" diye seç — sıkı/nit rakibe karşı nominal-iyi bir el bile ucuz blöf olabilir, çünkü zaten onun çağıran aralığına karşı az kazanır.

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

### 23.3-EK Yarım-ICM profili — preflop'u chipEV, postflop'u kilitli oyuncu

23.3 "ICM'i hissediyor mu?"yu ikili sorar; sahada en kârlı tip üçüncüsüdür: baskıyı YARIM hisseden oyuncu. Profil: para yaklaşırken 15-20bb ile hâlâ min-raise ile girer, flop görür, sonra kilitlenir — BB'yi savunup check-fold'lar, açıp c-bet'e katlanır. Exploit iki uçludur: preflop girişine saygı yok (aralığı chipEV genişliğinde), postflop baskı tam gaz — para onun flop-fold'undan gelir; open'ına 3-bet de çalışır çünkü kilit raise-fold'unda da devreye girer. Simetrisi: kısa DOĞRU daralmışsa (bubble açılışı %10'lara inmişse *(kalibre et)*) tersini yap — onun open'ı duruma-bağlı nit aralığıdır, 23.1'in nit satırı uygulanır: 3-bet/light call kes, saygı göster.

**Kural:** ICM-hissini tek soruyla değil sokak sokak oku — preflop'ta görmediğin kilidi flop'ta bulursan baskıyı oraya taşı, preflop'ta gördüğün kilide karşı da aralığına saygıyı oraya taşı.

### 23.3-EK-2 Rakibin ICM hissini oturmadan oku — yatırım profili

"Villain ICM'i hissediyor mu?" sorusunun cevabı çoğunlukla el görmeden hazırdır. Sonuç geçmişi: küçük buy-in ağırlıklı kayıtla büyük turnuvaya oturan min-cash'e kilitlenir; kaydı hep min-cash olan cash'e oynar — bubble'da ez; hiç min-cash'i olmayan, hep derin koşan tip bubble umursamaz. Puan/leaderboard kovalayan high-roller düşük buy-in'de chipEV oynar — ona ICM baskısı satılmaz. Masada: bubble'da stall'layan ya da kalkıp bubble'ı uzakta geçiren oyuncu ICM-duyarlı etiketini kendisi verir — not al, sonraki fazların baskı hedefi. Sözlü beyan tersinden okunur: "bubble umurumda değil" DİYEN çoğunlukla tam tersidir; kendiliğinden sızan vibe ise çoğunlukla doğrudur.

**Kural:** ICM-hissi etiketini el beklemeden yapıştır: sonuç profili + bubble davranışı + (tersinden) sözlü beyan.

### 23.3-EK-3 ICM-farkında ama c-bet'e aşırı foldlayan popülasyona karşı — bazen değeri CHECK ile al

B23.3'ün "ICM-körü rakibe baskı satma, value al" kuralı ICM'i hiç HİSSETMEYEN rakip içindir. Ayrı bir popülasyon var: ICM'i hissediyor (o yüzden zaten aşırı foldluyor) ama tam da bu yüzden bir c-bet'e karşı fazla kolay pes ediyor — bu durumda direkt value bet çoğu zaman anında fold alır, hiçbir şey kazandırmaz. Böyle bir sahada premium elini bazen ÇEKEREK (check-back) oyna: rakip check'i zayıflık/inisiyatifsizlik olarak okuyup sonraki sokakta kendi blöfünü/ince value'sunu masaya koyabilir — bet'in alamayacağı bir aksiyonu check davet eder.

**Kural:** "ICM-körü rakibe → value al" kuralı ICM'i hiç hissetmeyene özeldir; ICM'i hissedip c-bet'e fazla foldlayan popülasyona karşı bazen check ile bekle, rakibin senin yerine bahis koymasını sağla.

### 23.4 Havuz-okuması sapması (showdown-first)

Havuzun çoğunluğu showdown'a fazla gider (merak + fold-etmeme). Bu da bir okumadır — havuz seviyesinde; reg payı arttıkça dengeye döner (bkz 23.6). Sapma: blöf frekansını düşür (çağırırlar); ince value'yu artır (kötü ellerle öderler). Low/mid stakes rec-havuzunun tek en kârlı sapması *(kalibre et — havuza göre)*.

### 23.4-EK Blöf malzemesi zayıf havuza karşı bloker'dan değil EQUITY'den

23.4 blöf frekansını düşürttü; kalan blöflerin SEÇİMİ de değişir. Bloker blöfü (rakibin fold aralığıyla kart çakışmasını en aza indiren, düşük bağlantılı el) değerini rakibin disiplinli fold'undan alır; showdown-first havuz o fold'u vermez → aynı hatta equity'si yüksek adayı geçir: gerçek out taşıyan eller (küçük çift, canlı gutshot) "temiz" ama out'suz kombolardan çoğunlukla iyidir, çünkü kazanma yolun fold ettirmek değil elini tutturmaktır. Bloker seçimi reg'e karşı geri gelir — fold disiplini GÖRDÜĞÜN rakipte yine öne geçer *(kalibre et)*.

**Kural:** Foldlamayan sahada blöfü "kimi bloke ediyorum"la değil "çağrılınca kaç out'um var"la seç — bloker blöfü, fold disiplinli rakibin lüksüdür.

### 23.4-EK-2 Showdown'da eli geri sar — boy repertuvarı çıkar, aykırılığı kalın kalemle yaz

Showdown tek kartlık bilgi değil, elin TÜM sokaklarının cevap anahtarıdır: kartlar açıldığı an eli baştan sar ve her boyu board tipiyle eşle — aynı üçte-bir boyu her dokuda mı kullanıyor (tek-boy repertuar = elini değil ezberini boyluyor), yoksa doku büyük boy isterken mi büyüdü (elini boyluyor: boy-tell canlı)? Küçük 3-bet'in de iki zıt okuması buradan ayrışır: eski-usul/rec küçük boyla premium'u içeride tutar, düşünen agresör küçük boyla sağındaki zayıf oyuncuyu ucuza izole eder — hangisi olduğunu boy değil bağlam söyler (kimden kime, masada bariz hedef var mı). Ve en değerli satır: popülasyon tell'ine UYAN gözlem teyittir, AYKIRI gözlem kategori değiştirir — hızlı-call'cı sandığın adam savaş hero-call'u gösterdiyse, ilk BB 3-bet blöfünü gördüğün an — tek gözlemle "trickster/savaşçı" rafına taşı.

**Kural:** Her showdown'da eli geri sarıp boyları board'la eşle; popülasyon tell'ini kıran tek gözlem, ona uyan on gözlemden değerlidir.

### 23.5 Station playbook

- **Blöf yok, sıfır** (blöf station'a para vermektir).
- **İnce value ez:** normalde check'leyeceğin ellerle bet al.
- **Boyut:** güçlü value BÜYÜK/overbet (station boyuta duyarsız, call'ı sıkmaz); yalnız en ince value'da küçült.
- **Pasif river ayrımı:** station'ın river RAISE'i ≈ nuts → ince value'nu fold et. Ama river LEAD boyuta bağlı: küçük lead'e iyi top pair çoğu zaman call (station merged/zayıf donk'lar); büyük/tuhaf lead'e daral.

### 23.5-EK İnelastiklik oyuncu değil BOARD özelliği de olur — "şu an potta ne kadar para isterdim?" boyu seçer

23.5 "station boyuta duyarsız → büyük" der; aynı duyarsızlık dengeli rakipte de belirli boardlarda doğar. K-high kuru boardda rakibin devam aralığı çiftlerden kuruludur ve küçük bete de büyük bete de kabaca aynı listeyle devam eder *(kalibre et)* → value'yu BÜYÜK al: parayı, katlanamazken şimdi koydur — sonra board değişir ya da o durur, pencere kapanır. Board elastikleştikçe (araya orta kartlar/draw'lar girip devam aralığı boya duyarlı hale geldikçe) küçük boya dön. Masa sorusu: "elimin sınıfı adına potta ŞU AN sihirle ne kadar para olsun isterdim?" — cevap küçük betten büyükse ve rakip o boardda inelastikse, büyüğü bas.

**Kural:** Boyu el gücün değil rakibin fold eğrisi seçer: devam aralığı boydan bağımsızsa büyük, boyla eriyorsa küçük — ve bu bazen oyuncunun değil board'un özelliğidir.

### 23.6 Reg / TAG'e karşı

Denge burada kalkan: reg dengesizliğini cezalandırır. Dengeli aralıkla oyna, ICM baskısını ONA sat (o hisseder), ince exploitleri sakla. Reg payı arttıkça (yüksek stake) exploit azalır, GTO-yakını artar.

### 23.6-EK Reg-yoğun FT'de küçük-boylu agresyonu düşür, check-call/check-raise'i artır

23.6 "dengeye dön" der; reg-yoğun masada denge YÖN de verir. Herkes yapışkan ve küçük bete raise/float, lead'e raise sıktır → küçük c-bet ve BB lead'in gizli EV'si (rakibin overfold'u) çöker: küçük-boylu agresyonu (küçük c-bet, küçük lead, probe) DÜŞÜR; check-call ve check-raise payını artır — rakibin agresyonuna karşı realize et, ona küçük bete raise lisansı verme. 23.11'in pasif-havuz üçlüsünün ters yüzü: orada değerini büyük ve erken alırsın, burada rakibin bet'ini bekleyip raise'lersin *(kalibre et)*. Boy ilkesi: rec'e karşı boyu elinle, reg'e karşı aralığınla seç (27.12).

### 23.6-EK-2 Bir kez görülen "gelişmiş" hamle tek örneklem değil — eşik aşımının işareti

Bir rakibin beklemediğin türden gelişmiş/agresif bir hamle yaptığını (ör. kısa-orta stackten seyrek görülen bir blöf 3-bet) gördüğünde bunu "tek örneklem, çok şey söylemez" diye geçme. Bu tarz hamleler genelde rastgele değil bir EŞİK AŞIMININ işaretidir — oyuncu bu hamleyi biliyor ve tekrar arayacaktır; ondan sonraki tüm okumanı bu bilgiye göre kalıcı şekilde yukarı çek. Ters yönde de geçerli: bir rakip beklemediğin bir yerde sert bir fold ya da disiplinli bir hat gösterdiyse, "stüdyeli" ihtimalini de kalıcı olarak yukarı taşı.

**Kural:** Tek bir gelişmiş/disiplinli hamle rastgele veri noktası değildir — rakibin o kapıyı "gördüğünün" kanıtıdır; okumanı o andan itibaren kalıcı güncelle, örneklem küçük diye görmezden gelme.

### 23.7 Kalibrasyon

*(kalibre et: her tipin tam sapma miktarı (blöf %, value eşiği, value boyutu) havuza ve stake'e bağlıdır. App'te tip etiketi + not alanı bu sapmayı taşır; masada üç kademeyle (çok gevşek/dengeli/çok sıkı) etiketle. Solver default'u verir, exploit sapmayı sen eklersin.)*

### 23.7-EK İlk tepkin bir kalibrasyon aletidir — "saçma" sana karşı çalışır, "harika" senin sızıntındır

Bir rakip hattı gördüğünde ilk tepkin iki yönde de veri üretir. "Bu ne saçma bet böyle?" diyorsan dur: o hat büyük ihtimalle tam da senin gibi düşünenlere karşı çalışıyor — küçümseme refleksi, çalışılmamış düğümün kokusudur; molada o düğümü sor. Tersine bir yaratıcı hatta anında âşık olduysan ("evet, burada herkes bunu katlar!") büyük ihtimalle o hattı fazla kullanıyorsun — ve fark etmediğin şey, bu hevesin masada tempo ve tavır olarak sızdığıdır: sürekli spot gören oyuncunun agresyonu, dikkatli rakip için kendi başına bir tell'dir. İki tepki de karara değil çalışma listesine yazılır.

**Kural:** Rakibin hattı sana saçma görünüyorsa muhtemelen sana karşı kârlıdır; kendi hattın sana anında mükemmel görünüyorsa muhtemelen aşırı frekanstasın — ikisini de not et, ikisine de masada karar yaslama.

### 23.15 ICM'i bilmeyen sahaya karşı ateşe ateşle değil — sıkılaş, fast-play, blöf değil VALUE ile ceza

Kök hata: rakipler erken/orta fazın primini görmeyip chipEV genişliğinde savunuyor, squeeze'liyor, stack-off ediyorsa "ben de genişlerim" demek. Onların fazla parası senin equity realizasyonunu düşürür (arkadan squeeze, geniş stack-off) → doğru cevap ters yöndedir: açılışı bir tık daralt; flat'i neredeyse kapat (squeeze yiyeceksin); 3-bet'i artır ama VALUE'yla; trap'i bırak — büyük çiftleri non-all-in 3-bet yerine doğrudan jam'le, çünkü geniş stack-off gelen yerde indüksiyona gerek yok; orta blöf-jam'leri (orta suited broadway) kes, çağrılacaklar. Onların 3-bet'ine karşı da daral: chipEV 3-bet aralığı primli aralıktan daha LİNEER (suited bağlantılı dolu, offsuit bloker az) → senin orta çiftin ve suited ellerin ona karşı kötü realize eder — flat düşer, 4-bet lineer value'yla artar. Ayna: rakip 3-bet'ine gereğinden az katlanıyorsa 3-bet blöfünü lineerleştir (playable eller, dip Ax değil) ve flat'e geri dön — polar blöf fold bulamaz. Son kat: chipEV oynayan rakibin jam'i ICM jam'inden GÜÇLÜDÜR (orta ellerini jam yerine flat'liyor) → 3-bet'ten sonra jam gelince bir kademe daha kat.

**Kural:** karşı taraf primi ödemiyorsa sen iki kere ödeme — fold daha çok, call daha az, güçlü elle daha hızlı; kazanç blöften değil, onların fazla parasını value ile toplamaktan gelir.

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

### 23.10-EK Range-bet öğrenilmiş, check-raise savunması öğrenilmemiş — flop x/r blöfünü aç, turn'de fren

Orta/düşük sahanın tipik profili küçük aralık-c-bet'ini ezberlemiştir (bazen range-bet olmayan board'da bile) ama o bet'in check-raise'e devam ayağını hiç çalışmamıştır — x/r karşısında olması gerekenden çok dar devam eder *(kalibre et)*. Exploit iki parçalı ve bilinçli DENGESİZ: x/r blöfünü draw/backdoor'lu ellerle genişlet, iyi kart gelmezse turn'de fren (fold'unu floptan aldın, ısrar etme); value x/r'ını ise DAR tut — bu profil ince x/r'ına zaten kötüsüyle devam etmez, orta top-pair'le x/r yapmak kendi kendine value bet etmektir. Aynı okumanın turn ayağı: bu sahada x/r tehdidi düşükken "kırılgan elim var, bet'lersem koparılırım" kaygısı da gevşer — koruma/draw bet'leri teorideki payından daha serbest açılır *(kalibre et)*.

**Kural:** Otomatik küçük bet'e karşı x/r blöfü geniş + turn'de fren, x/r value dar — fold'u öğrenilmemiş savunmadan al, ödemeyi bekleme.

### 23.10-EK-2 Kesintisiz üç sokak, havuzun en az savunduğu düğüm

23.10'un taksonomisi kesilen agresyonu (bet-sonra-check, reg'de under-bluff→over-fold) ve gecikmiş agresyonu (check-back sonra iki barrel, over-bluff) ayırır; üçüncü, ayrı bir düğüm var: baştan sona kesintisiz üç sokak (flop-turn-river hep bet). Reg-yoğun havuz burada neredeyse hep value zanneder ve ağır over-fold eder — mekanizma: havuz kendi flop stratejisini (range-bet yok, yalnız güçlüyle bet) hero'ya yansıtır, hero'nun flop bet'ini dar/value sanır, bu yüzden üçüncü barrel'da da over-fold eder *(kalibre et)*. Kesintisiz üç barrel atabilen bir aralık kurduysan (flop ve turn'de doğru şekilde geniş başladıysan) bu düğüm reg-yoğun havuzda en az savunulan düğümdür. 23.10'un üçüncü satırı istisnayı zaten verir: rec-yoğun sahada fold penceresi RIVER'da değil TURN'dedir — orada bu düğümü tam frekans blöflemek tam da tabloda yasaklanan hattır (blöfü river'a yığmak); rec-yoğun Main'de hacmi flop-turn'e kaydır, üçüncü barrel'ı büyük ölçüde kes.

**Kural:** Kesintisiz üç sokak (bet-bet-bet) reg-yoğun havuzda en az savunulan düğümdür — kesilen/gecikmiş agresyondan ayrı bir kova, tam frekans blöfle. Rec-yoğun Main'de bu düğümün fold penceresi TURN'dedir: hacmi flop-turn'e yığ, river'da üçüncü barrel'ı büyük ölçüde kes.

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

### 23.12-EK Board sahipliğini boşaltılan preflop dilimi belirler — kısa stack'te jam'ler yüksek board'u da el değiştirtir

23.12 ICM'in düşük kartları silmesini verdi; kısa derinlikte aynı işi JAM'ler yapar ve yön board sınıfına göre değişir. ~20bb'de (kısa bant, 23.14) BB geç açılışa karşı küçük çiftlerini ve ZAYIF suited Ax'ini preflop'ta jam'lediği, AQs/AKs'i de value jam/3-bet'e ayırdığı için savunması bu dilimlerden arınır → A-high board ezici biçimde AÇANINDIR: sık ve büyük bet; BB'nin check-raise'i neredeyse kapanır (tepesi preflop'ta gitti), savunması kalan en iyi Ax'i (ATs/AJs — 23.14'e göre call'da duran sınıf) check-call'da tutmaya iner *(kalibre et)*. ~30bb'de aynı işi jam değil, boşaltılan non-all-in 3-bet dilimi yapar (o bantta doğru agresyon küçük 3-bet'tir, jam değil) — yön aynı, dilim daha ince. SB flat'i tersini yapar: çiftler jam'de, iyi Ax 3-bet/jam'de — kalan flat offsuit broadway/orta suited'a yoğunlaşır → broadway board'lar (KQ8/AQJ tipi) görünüşe rağmen FLATTER'ındır, üç düşük kartlı board açanın malıdır; EP açana karşı aynı SB flat'i çift-ağır kaldığından tablo yine döner (düşük board flatter'ın, yüksek board açanın). Masadaki soru pozisyon etiketi değil: "bu derinlikte bu koltuk preflop'ta HANGİ dilimi boşalttı?"

**Kural:** Board'un sahibini etiket değil boşaltılan preflop dilimi söyler — boşaltılan (jam'lenen ya da 3-bet'lenen) el sınıfının board'u, o dilimi boşaltanın aleyhine döner.

### 23.12-EK-2 Board sahipliğinin ikinci sürücüsü — derinlik değil saygı

23.12-EK board sahipliğini boşaltılan preflop dilimine bağladı; sürücü yalnız derinlik/ICM değildir — saygı da aynı dilimi boşaltabilir, ama boşaltma aynı mekanizmayla olmalı: 23.12-EK'nin jam/3-bet örnekleri hep elin aralıktan TAMAMEN ÇIKMASIYLA (fold ya da all-in) çalışır, yalnız 3-bet'ten kaçınıp CALL'a düşmesiyle değil — çünkü 3-bet'lenmeyen bir el flat aralığına düşerse o aralığı zayıflatmaz, ZENGİNLEŞTİRİR. Kendini senden zayıf gören bir rakipte doğru okunacak refleks budur: seninle büyük pota OOP girmemek için preflop'ta çiftlerini/orta suited ellerini yalnız 3-bet'lemekten değil, açılışına devam etmekten de kaçınır — flat de o büyük potun kapısını aralar, bu yüzden saygı bu elleri çoğunlukla FOLD'a iter, call'a değil. Sonuç: senin normalde "caller'ın malı" saydığın düşük-bağlantılı board (7-5-3 tipi), rakibin kalan aralığından da bu dilim tamamen eksilmişse fiilen SENİNDİR — hem boşalan dilimden hem rakibin postflop'ta seninle büyük pota girmekten çekinen refleksinden (23.22'nin "check=capped" mekanizması) çift kat besleniyor. İşareti: rakip sana karşı normalden dar 3-bet'liyor VE normalden dar call'luyor VE düşük board'larda nadiren agresif devam ediyor — üçü birlikte görüldüyse saldır. Bu sürücü B18.2'nin ICM-derinlik sürücüsünden AYRIDIR (chipEV'de bile çalışabilir) ama onun yerine geçmez: B18.2 hâlâ default'u verir (chipEV'de düşük-bağlantılı = caller'ın board'u, ICM derinliğinde açanın); saygı sinyali görüldüğünde bu default'u o rakibe özel iptal eder, genel kuralı değiştirmez.

**Kural:** Board sahipliğini yalnız derinlik/ICM boşluğuna bağlama — kendini senden zayıf gören rakip SAYGIdan bu dilimi FOLD ederek (yalnız 3-bet'ten kaçınarak değil) boşaltabilir; dar 3-bet + dar call + düşük-board'da nadiren agresyon üçlüsünü gördüğünde chipEV'de bile düşük board'u senin bil — bu, B18.2'nin ICM-derinlik istisnasının yerine geçmez, ona ek bir sürücüdür.

### 23.13 Havuzun 3-bet açığı: geç açılışı GENİŞLET, 4-bet-jam blöfünü KAPAT

Blind'lar geç açılışa dengeden belirgin az 3-bet eder *(oran: kalibre et; sığ bantta jam'ler farkı kapatır, derinde açılır)* — eksik olan hep mix'li kombolardır, "düşük frekans = sıfır" kısayolu. Solver'ın 3-bet frekansını rakibin de oynadığını varsayan iki hata: geç pozisyondan solver aralığını açmak ve 3-bet yiyince solver'ın 4-bet-jam blöflerini basmak.

Üç sonuç: (1) BTN/CO açılışını solver'ın üstüne genişlet — blind'lar cezalandırmıyor, üstüne flop/turn'de overfold ediyor, sınır eller çoğunlukla postflop'ta EV toplar (havuz sapması yeterince büyükse) (B17.11 "BTN %40 open" ve B4.1 canlı düzeltmesinin mekanizması). (2) 3-bet yediğinde aralık nut-ağırlıklıdır → 4-bet-jam blöfünün (A5s tipi) fold equity'si çöker, blokerli suited Ax jam'i dengeden ağır kaybeder *(kalibre et)*; zayıf suited Kx/Qx ile 3-bet'e call da kötü. **Geniş aç, 3-bet'e DAR devam** — B4.5'in "4-bet blöf çok seyrek" satırı buradan. (3) Sen 3-bet ederken aynı kısayolu YAPMA — mix'li komboları 27.12'ye göre sabitle, sıfırlama.

Sapma notu: havuz ortalamasıdır; agresif 3-bettor okuması varsa baseline'a dön. Stake yükseldikçe fark daralır. 22.11'in çarpışma filtresi ICM açıkken bu genişlemenin üstüne biner.

### 23.13-EK Squeeze çift açığı — havuz hem az squeeze'ler hem squeeze'e karşı az direnir

23.13'ün 3-bet açığının squeeze'de iki katlı sürümü vardır: havuz open+call görünce squeeze'i dengeden belirgin az bulur, VE squeeze yediğinde savunma (özellikle orta derinlikte rejam, suited broadway/çift sınıfıyla) dengeden belirgin eksiktir *(oranlar: kalibre et)*. İki açık aynı anda senin lehine çalışır: squeeze ve squeeze-jam'lerini tam frekans oyna — comfy suited broadway'i "postflop oynarım" diye flat'e kaçırmak bu geliri bırakmaktır; ve sen squeeze yediğinde rejam'i DAR ve value-ağırlıklı tut: az squeeze'leyen havuzun fiilen bastığı squeeze nut-ağırlıklıdır, rejam blöfünün fold equity'si yoktur (23.13'ün "3-bet yediğinde aralık nut-ağırlıklı → dar devam" mekanizması) — korunacak disiplin frekans değil, value rejam'ini kaçırmamaktır. Üçüncü sonuç dolaylıdır: BB'nin squeeze'i eksikse SB'DEN flat'in (BTN/CO açılışına karşı) genişler — arkanda cezalandıracak squeeze'leyen BB yoksa over-realize edersin; squeeze'lendiğini gördüğün an bu genişlemeyi geri sar.

**Kural:** Open+call gördüğünde varsayılan soru "squeeze var mı?" olsun, "flat comfy mi?" değil — havuzun iki taraflı squeeze açığında pas geçilen her squeeze bırakılan paradır; sen squeeze yediğinde ise rejam'in dar ve value'dur, blöf değil.

### 23.14 BB'nin iki bant hatası: kısa bantta fazla JAM, orta bantta fazla PASİF

Kök hata: BB'den geç açılışa "iyi el = jam" ezberi. İlke tek: **oynanabilir el CALL eder, equity'yi fold ettirmek isteyen el JAM'ler.** Kısa bantta *(kabaca 15–25bb; bant sınırı: kalibre et)* jam'lenince yalnız domine ettiğini katlatıp yalnız seni yenenden ödeme alan yüksek-kart eller — güçlü suited broadway: ATs/AJs, KQs/KJs tipi (AQs/AKs hariç — onlar daha kötüden ödeme aldığı için çoğunlukla value jam/3-bet) — çoğunlukla CALL'ı tercih eder: domine ettiği elleri potta tutar, flop'a küçük bete devam eder, yüksek-kart runout'ta rakibin blöfünü yakalar → equity'yi jam'den fazla realize eder. Zayıf suited Ax ve küçük çiftler ise çoğunlukla JAM: bloker + equity-reddi, ödenince canlı *(eşik: kalibre et)*. Bandın alt ucunda (≤~17bb, OOP düşük SPR) ATs/AJs/KQs tipi eller de çoğunlukla jam'e kayar; call tercihi ~20bb'den itibaren belirginleşir *(kalibre et)*. Orta bantta *(kabaca 25–30bb)* jam, birkaç bb'lik pot için tüm stack'i riske atmaktır — doğru agresyon küçük, all-in OLMAYAN 3-bet; orta suited connector burada agresyon değil CALL elidir (equity'yi en iyi realize eden sınıf), 3-bet malzemesi suited düşük Kx / offsuit broadway tipi blokerli eller *(kalibre et)*.

**Havuz okuması (hipotez — showdown'la doğrula, kalibre et):** havuz BB'si kısa bantta call'ı tercih etmesi gereken yüksek-kart elleri jam'ler (fazla jam), orta bantta non-all-in 3-bet'i bulamaz (fazla pasif). Sen BB'deyken kısa bantta call'ı, orta bantta non-all-in 3-bet aralığını genişlet. Rakip BB'nin jam'ine karşı ezber yok: gördüğün showdown'lardan kalibre et.

**Kapsam (B17.11):** "sen cover'ken 15–25bb BB'sine %60'a kadar open" bu okumayla gerilimli — havuz BB'si kısa bantta call yerine jam'i fazla buluyorsa geniş açılışın jam'lenme sıklığı beklenenden yüksek olur; BB'nin fold sıklığı (senin fold equity'n) değişmez, değişen şey açanın pozisyonla flop oynayıp equity realize etme şansının düşmesi ve raise-fold maliyetinin artmasıdır → sınır elleri raise-fold'a göre fiyatla: re-jam'e katlanacağın elleri daralt, re-jam'i ödeyebileceğin ellerle genişle; genişliği orta (pasif) banda kaydırmak daha güvenli, kısa bandı showdown'la kalibre et.

### 23.14-EK "Oynanabilir el CALL, equity-reddi JAM"ın motoru: jam katmanı açıcının pozisyonuyla bir kademe kayar; call/jam'i domine ettiğin kütle seçer
20bb BB'de tek jam listesiyle her açılışa aynı cevap kök hatadır. Jam'in EV'si "katlattığım daha iyi el" + "call aldığım daha kötü el"den gelir. Açıcı ERKEN pozisyondaysa aralığı dar ve güçlü → jam'e K-Qo / A-To katlanır → suited T-x / J-x tipi yüksek-suited eller jam'de değerlenir; açıcı GEÇ pozisyondaysa aynı eller artık katlanmıyor → jam bir kademe aşağı iner (suited 9-x, sonra 8-x), üst katman call'a geçer *(kademe: kalibre et)*. Aynı motor "A-Js call / A-7s jam" paradoksunu çözer: A-Js jam'lediğinde A-Q hiç katlanmaz, A-T hiç call etmez; call'da ise K-J / Q-J / zayıf A-x'i domine eder, flop'ta küçük bete devam eder → call daha çok kazanır. A-7s'nin domine ettiği kütle yok, jam'de A-8/A-9/A-T'yi katlatır → jam. Soru "iyi el mi?" değil: **"domine ettiğim kütle call'da mı, jam'de mi para öder?"** Havuz suited broadway'i jam'lemekte tutuktur → geç açılışın bu jam'e çarpma riski teoriden az, açılış bir kademe genişler *(kalibre et)*. 5.3'ün call tablosu değişmez; bu madde BB'nin jam listesine pozisyon kademesi ekler.

### 23.16 Aşırı-c-bet'çiye ceza raise değil YAPIŞKANLIK — float hattı river'ı satın alır

Havuzun büyük dilimi IP'de "açan/3-bet'çi benim" diye neredeyse her boardı küçük boyla range-bet'ler; bu c-bet aralığını dengedekinden zayıflatır, ama cezası check-raise'i şişirmek değildir — aynı oyuncu turn'de düşük-equity barrel'ı da bulamaz. Doğru hat FLOAT: küçük bete dengeden de yapışkan devam et (backdoor'lu yüksek kartlar, per + geri kapı), turn sık check'lenir, river blöfünü ve ince value'yu sen alırsın; kuru boardda check-call hattına bilerek birkaç sınır el koy, yoksa o hatta river blöfün hiç olmaz. Check-raise iki yerden geri teper: güçlüsüne çarparsın ve zayıfını erken katlarsın — float ise elini sana bildirme sırasını ona verir *(çoğunlukla)*. Sınır: hedef ABC range-bet'çisidir; river'da foldlamayan rec'e karşı blöf kolunu kıs, ince value kolunu tut (23.10); reg-yoğun masada okuma kapanır, 23.6-EK'ye dön.

**Kural:** Range-bet'leyip turn'de vazgeçen rakibe para check-raise'de değil float'tadır — flop'ta yapış, kazancı turn/river check'inden sonra tahsil et.

### 23.17 Rakibin hatasını onun için tamir etme — pot'u küçük tutana agresyon, hatanın EV'sini geri verir

Kök refleks: "dev avantajlı boardında küçücük bet attı → zayıftır, check-raise'le ez." Ama hatası zayıflık değil pot'u BÜYÜTMEMEK olabilir: aralığının ezici olduğu boardda dengede büyük bet ister; minik atıyorsa seni ucuza bırakıyordur — check-raise basarsan pot'u onun value'su için sen büyütür, hatasını bedavaya tamir edersin. Doğru cevap geniş ama PASİF savunma: fiyatı al, iyi ellerini de check-call hattında tut ki turn baskısına dayanabilesin; agresyonu, hatası "fazla fold" ya da "fazla blöf" olan rakibe sakla. Sapmanın pusulası: rakibin hatasının bıraktığı parayı TOPLAYAN hat hangisiyse o — hatayı nötrleyen değil.

**Kural:** Sapmadan önce hatanın adını koy: rakip pot'u küçük tutuyorsa pasif kal ve ucuz gör; fazla katlanıyorsa ya da fazla saldırıyorsa agresyonu aç.

### 23.18 3-bet potunda yapışkanlık, board'un rakibin BLÖF dokusuyla kesişimine bağlı

"3-bet potunda çiftle küçük bete hep devam" ezberi board-kördür. Rakibin preflop blöf malzemesini yaz — blind 3-bet blöfleri çoğunlukla Ax ve yüksek broadway'dir *(kalibre et)* — ve blöflerinin PER yaptığı boardda savunmanı sertçe darALT: A-high VE K-high boardda onun "blöfü" artık top pair'dir (K-high'da üstelik KK/AK value'suyla da örtüşür), senin orta çiftin ve zayıf backdoor'ların değer kaybeder. Blöflerinin gerçekten ıskaladığı boardda (orta/düşük bağlantısız: 9-7-2, 8-6-3 tipi) aynı çiftler ve backdoor'lar yapışkan devam eder, float da genişler — bet aralığının hava dilimi büyümüştür. Soru her sokakta aynı: "bu kart onun value'sunu mu büyüttü, blöfünü mü per yaptı, havasını mı çoğalttı?"

**Kural:** Savunma eşiğini board'a değil şu soruya bağla: rakibin preflop blöfleri bu board'da per mi yaptı — bağlandıysa daral, ıskaladıysa yapış.

### 23.19 Yarı sıklık → kabaca yarı devam — exploit'i ölçekleme kısayolu

Bir rakip belirli bir agresyon düğümünde (check-raise, 3-bet vb.) dengenin kabaca YARISI sıklıkla oynuyorsa (value kısmı sabit kalırken sadece blöf/marjinal kısmı eksikse), senin o düğüme karşı devam (call) aralığın kabaca YARIYA inmelidir; rakip dengenin kabaca İKİ KATI sıklıkla oynuyorsa devam aralığın kabaca İKİYE KATLANIR. Çarpanı fold oranına bağlama: 3-bet gibi düğümlerde dengedeki fold zaten %55-65 civarıdır, "iki katı fold" tanımsızdır — ölçeklenebilir ve her zaman icra edilebilir büyüklük devam/call oranıdır (blöf dilimi yarıya inince devam eden bluff-catcher sayısı yarıya iner, fold tavana dayanır). Bu, masada tam yüzdeleri hesaplayamadığın anlarda "biraz daha sık/seyrek fold edeyim" belirsizliğini somut bir çarpana bağlar — kesin katsayı popülasyona göre değişir, ama yön ve kaba ölçek sağlam bir başlangıç noktasıdır.

**Kural:** Rakibin bir düğümdeki sıklığını dengeye göre kabaca tahmin et (yarım mı, iki katı mı); cevap DEVAM (call) oranını aynı yönde ve kabaca aynı ölçüde ayarla — fold oranını değil, o tavana dayanır.

### 23.20 Düşünmeden gelen hızlı fold, o düğümde SİSTEMİK overfold sinyalidir

Bir rakip belirli bir düğümde (ör. min-raise'e karşı BB savunması) tereddüt etmeden hızlıca fold ediyorsa, bu yalnızca o elin bir kerelik kararı değildir — o düğümü genel olarak dar oynadığının kanıtıdır. Aynı düğüme tekrar geldiğinde (aynı rakip, benzer spot), solver'ın söylediğinden daha agresif davranmak (daha küçük boyla açmak, daha geniş iso yapmak, daha sık c-bet atmak) çoğunlukla kârlıdır — tereddütlü/uzun düşünülen fold'lar aynı sinyali TAŞIMAZ, o yalnızca o elin kararıdır.

**Kural:** Rakibin karar HIZINI ve tereddüdünü izle — hızlı, düşünmeden gelen fold bir düğüm-leak'idir, genele uygula; yavaş/tereddütlü fold yalnız o ele özeldir, genelleme.

### 23.21 Oturmadan önce profil — sonuç listesini desen olarak oku, toplam olarak değil

Rakip daha ilk eli oynamadan sonuç geçmişi (turnuva CV'si, online client profili) bir agresyon haritası verir — yeter ki toplamı değil deseni oku. Tek dev skor + etrafında küçük hiçbir şey = büyük ihtimalle rec, o skor örneklem değil piyango. Çok sayıda min-cash, hiç derin koşu yok = cash-odaklı, sınırda hep fold tarafına düşecek profil; bubble'da baskıya en açık müşteri. Küçük sahalardan birincilikler = chip-toplayıcı agresyon. Uzun yıllara yayılmış orta toplam = hacimle açıklanan vasat. Yüksek online hacim işareti ise "canlı görünümü ne olursa olsun temel refleksleri var" demektir. Bu etiketler ilk showdown'a kadar hipotezdir — güncellemeye hazır tut.

**Kural:** Sonuç listesinde toplam para değil bitirme deseni okunur: min-cash yığını pasifin, küçük-saha birincilikleri agresörün imzasıdır — hepsi showdown'la revize edilecek ilk hipotez.

### 23.22 Dominant agresör dinamiği — seni pasif sanan crusher sana tuzak kurmaz

Her eşleşmenin bir "agresör hiyerarşisi" vardır ve güçlü oyuncu seni pasif okuyorsa stratejisi buna göre eğilir: parayı senin koymanı beklemez, bu yüzden sana karşı güçlü elini neredeyse hiç check'lemez/slowplay'lemez — check'i gerçekten capped'dir *(çoğunlukla)* ve ince value bet'ine gelen raise'e karşı "benden iyisini check etmezdi" diyerek bet-call disiplinle açılabilir. Aynı sebepten SB limp'i dipten gelir (limp-reraise dilimi incelmiştir; senin geniş iso yapacağını fiyatlamaz) — limp'ine hem çöple hem hafif value'yla normalden geniş iso bas. Ayna: masanın "crusher"ı sensen aynı yasa sana döner — pasif rakip senin yerine pot büyütmez; ince value'yu kendin, büyük ve erken al, blöf indüksiyonu planlarını çöpe at.

**Kural:** Rakip seni pasif okuyorsa check'i capped, limp'i dipten, value'su hep kendi elindendir — ince value bet-call ve limp'e geniş iso açılır; rol tersse aynı okumayı kendine uygula.

### 23.23 Canlı tempo seti — tank nabzı, hazırlanmış laf, büyük pot sonrası dürüstlük penceresi

Üç canlı okuma, üçü de tek veriye değil tekrar eden desene komite olmak şartıyla: (1) Büyük river kararında tank'ı bilinçli uzat ve nabzı/nefesi izle — value tutan rakibin gerginliği yarım dakika civarında söner *(kalibre et)* (heyecan zirvesi geçer), blöfçününki tank bitene kadar sürer, çoğu zaman artar: karar hâlâ açık çünkü. (2) Tam karar anında hevesle, önceden hazırlanmış hissi veren laf/iğneleme çoğunlukla blöf tarafından gelir — value tutan zihin sonraki sokağı planlamakla meşguldür, gösteriyle değil. (3) Büyük pot biter bitmez insanlar en dürüst hâlindedir: dökülen el analizi ("AA ya da hiçbir şeydi") rakibin karar çerçevesini ele verir — iki-kutulu düşünene karşı orta value ve ara blöf sınıfları görünmezdir. Korkuluk: bu okumaları kendinden tecrübelisine uygulamaya kalkma — o katta yakalanma ihtimalin okuma ihtimalinden yüksek.

**Kural:** Tank'ta sönen gerginlik value, süren/artan gerginlik blöf lehinedir *(desene komite ol)*; karar anındaki hazır laf blöfe, büyük pot sonrası konuşma dürüstlüğe eğilir — ve tell okuma hiyerarşide yukarı doğru çalışmaz.

### 23.23-EK Kendi temponu canlıda da yönet — pota rakipten önce girmek "raise düşünmedim" der

17.11-EK-3 online'da kendi zincirini (snap-check/snap-bet) kapatmayı verdi — kural TÜM aksiyonlar için TEK tempo ister, yalnız call için değil; canlıda aynı mantık aynı genişlikte işler. Rakibinin bet'ini tamamlamasıyla eş zamanlı ya da ondan önce çip uzatmak — pota rakipten önce girmek — "bu eli hiç raise etmeyi düşünmedim" itirafıdır, karar %100 net olsa bile; ama tempoyu yalnız call'da sabitleyip fold'u ve raise'i hızlı bırakmak leak'i kapatmaz, yerini değiştirir — bu kez "duraklama = call, snap = fold/raise" yeni bir zamanlama tell'i doğar. Bu hem o anki bilgini sızdırır hem de tek seferlik değildir: aynı davranış (hızlı sözlü call, hızlı çip hareketi — ya da hızlı fold, hızlı raise) tekrarlandıkça kalıcı bir etikete döner ve 23.6-EK-2'nin kalıcı-güncelleme mantığıyla rakip tarafından işlenir.

**Kural:** Karar ne kadar net olursa olsun her aksiyondan (call, raise VE fold dahil) önce aynı sabit duraklamayı al — pota rakipten önce/eşzamanlı girmek "raise'i hiç düşünmedim" der ve kalıcı bir okuma bırakır; sadece call'da duraklamak tell'i kapatmaz, yerini değiştirir.

### 23.24 Boyut-tell'i hipotez döngüsüyle işle — tuhaf orta boy nadiren nuts

Canlıda boyut-tell tek data-point'le değil hipotezle işlenir. Çoğu oyuncu farkında olmadan boy böler ama iki zıt yönde: kimi value'suna büyür, kimi "overcard'ını katla" derken büyür ve eliyle küçük oynar — yönü ancak İKİNCİ örnek söyler: aynı oyuncu küçük boyla nut gösterdiyse okuma TERS yöne sabitlenir (onda küçük = güç, büyük = koruma/blöf), büyük boyla gösterdiyse ilk yön onaylanır — iki durumda da bölünme okuması o andan sonra para basar. Okumayı autopilot'a çeviren tek şey birbirini tutmayan karışık örneklerdir: aynı boyda hem nut hem hava. River'da güvenilir bir havuz deseni: nut'lu el ya BLOK atar ya BASAR — tuhaf orta boylu raise nut'un EN seyrek olduğu boydur *(kalibre et; station'ın river raise'i istisna, 23.5 durur)*.

**Kural:** Boyut okuması ikinci örnekle YÖN kazanır (küçük boyla nut = ters yön, boyları çöp değil), yalnız karışık örnekle çöpe gider; yön netleşene kadar hipotezdir — ve river'ın tuhaf orta boyundan nut'tan az kork, bloktan ve bombadan çok.

### 23.24-EK Flop min-bet kendi sınıfı — küçük c-bet'in küçüğü değil, savunma niyetinin imzası

Canlıda ıslak/dinamik bir flop'ta rakibin min-bet'i (tanım gereği minimum yasal bahis, ~1 BB — raise'li pot'ta bu kabaca pot'un %4'ü, ama limp'li/multiway pot'ta %25-33'e çıkar *(kalibre et)*) ile standart küçük c-bet'i (%25-40 *(kalibre et)*) raise'li pot'ta her zaman aynı "küçük = zayıf" kovasına atılmamalı — hipotez olarak farklı popülasyon imzası taşıyabilirler. %25-40 *(kalibre et)* c-bet çoğunlukla MERGED bir aralık taşır — koruma + ince value + bir miktar hava, ucuz stab'la geniş aralığı ucuza devam ettirme planı; min-bet tam tersi bir plan anlatır — rakip elinin showdown value'su olduğunu düşünür ama korumayı önemsemez, niyeti senin agresyonuna karşı ucuza devam etmektir, fold satın almak değil. Limp'li/multiway pot'ta bu ayrım çöker: orada min-bet zaten %25-33 bandındadır, tam da "ayrı sınıf" dediğimiz küçük c-bet aralığının içine düşer — o pot tipinde boyut değil oyuncu tipi ayırır. Raise'li pot'ta ayrım tutsa bile 23.24'ün kendi kuralı geçerlidir: bu bir hipotezdir, yön İKİNCİ örnekle sabitlenir — aynı oyuncu min-bet'iyle nut gösterdiyse yön TERS döner (onda min = güç), karışık örnekte okuma çöpe gider. Doğru cevap villain capped-ama-yapışkan (fold etmiyor) tanımlandıysa elden bağımsız değil, elle koşulludur: büyük raise'i VALUE ile bas (fold equity zaten yok, katlanmayan rakibe blöf raise'i en kötü kaldıraçtır); ince value/orta gücü flat'leyip sonraki sokaklarda agresyona sen devam et; blöf raise'i ancak min-bet'ini raise'e karşı katlayan alt-tipte kullan.

**Kural:** Raise'li pot'ta flop min-bet'i (~1 BB) ile %25-40 *(kalibre et)* c-bet'i otomatik aynı zayıflık kovasına atma — limp'li pot'ta min-bet zaten %25-33'tür, orada ayrım çöker. İlk min-bet hipotezdir, yön ikinci örnekle gelir. Villain capped-ama-yapışkansa büyük raise'i VALUE ile yap; blöf raise'i yalnız min-bet'ini katlayan alt-tipte kullan, aksi halde flat'le ve agresyonu sonraki sokağa taşı.

### 23.25 Bubble zorbası profili — otomatik açan lider dirençte teslim olur

Altıncı tip: her eli açan bubble lideri. Açışı hata değildir — hatası varsayımındadır: "herkes kilitli, direnç gelirse kaçarım" → 3-bet'e over-fold eder, teorinin bol 4-bet blöfünü sahada neredeyse hiç bulmaz *(kalibre et)*. Kanıt birikince (üst üste açıyor + ilk dirençte bırakıyor) counter, kitabın "cover'a bluff 3-bet yok" varsayılanının OKUMA-kapılı istisnasıdır: küçük, all-in OLMAYAN 3-bet — stack'inin küçük bir dilimini riske atar, showdown'suz toplar. Planı önceden yaz: 4-bet gelirse varsayılan bırakmaktır (4-bet'i value-ağırdır); 3-bet→5-bet ancak "4-bet'i de refleksle basıyor" kanıtıyla.

**Kural:** Bubble zorbasına silah call değil önceden planlanmış küçük 3-bet'tir — 4-bet'ine kanıtsız savaşma.

### 23.26 Ezilen rec preflop patlar — sosyal iklim exploit'in parametresidir

Bullied hisseden duygusal rec patlamayı postflop değil PREFLOP yaşar: postflop blöf cesaret ister, preflop jam sadece zar atmaktır — malzemesi de bellidir: çiftler (44'ü bile jam'ler), offsuit broadway değil. Onu ezdiğin bir seride TT sınıfı elle 3-bet'i bir boy büyüt: cepleri toplayan patlamayı davet edersin. Call kararını kendi equity'sinden değil "kaybedersem KAÇ kalır"dan verir — stack'inin kabaca yarısı kalıyorsa öder *(eşik: kalibre et)*. Pencereyi sosyal iklim açıp kapatır: seninle tatlı sohbette olan rakip 44'ü jam'lemez ("seni büstlemek istemem") — patlama istiyorsan barışma, marjinallerine sükûnet istiyorsan sohbet et.

**Kural:** Duygusal rec'in blöfü preflop jam'dir ve malzemesi çifttir — patlamayı istiyorsan value'nla 3-bet'i büyüt, istemiyorsan masayı yumuşat.

### 23.27 İmaj gecikmeli fiyatlanır — nit'in laneti ve hasat penceresi

Kendi imajın da bir okumadır ve GECİKMELİ fiyatlanır. Nit imajı (ya da gerçekten overfold'lu geçmiş sokaklar): blöflerin bir süre fazla üretir — river'da K-high'larını saf blöfe çevir, normalde blöf olmayacak üst katmandan da blöfle; ayna yüzü lanettir: check-raise'in yalnız value + bariz çekilişse, çekilişin girdiği an ödenmezsin ve büyük fold'lar alırsın — panzehir zor bulunan blöfleri (backdoor "üç kart" elleri) ÖNCEDEN repertuara koymaktır, yoksa value'n ölür. Agresif/zorba imaj ters çalışır: vites düşürdüğünde rakip eski imajını okumaya devam eder — birkaç orbit blöf mix'lerini kapat, value fazladan ödenir. Karışım düğümünde kararsızsan son orbitlerin imajı seçsin: agresif göründüysen call/value tarafı, pasif göründüysen blöf/raise tarafı.

**Kural:** Rakip senin ŞU ANKİ stratejini değil SON imajını oynar — blöf ve catch frekansını imaj gecikmesine göre kaydır.

### 23.28 Etiketler faza aittir — bubble patlayınca herkesi yeniden etiketle

Bubble'daki nit gerçek nit olmayabilir — durum nit'iydi. Bubble patlar patlamaz etiketleri sıfırla ve geçiş sinyallerini izle: duruş gevşedi mi, kartlarına bakışı ve timing'i değişti mi? Asıl av "geçmişte kalanlar"dır: prim düşmüşken hâlâ bubble hattı oynayan (chipEV düğümünde küçük ICM 3-bet'i, açılışa aşırı saygı, hâlâ kilitli call defteri) oyuncu geçişi kaçırmıştır — fark kapanana kadar üstüne git. Meta-edge şudur: prim rejimi turnuva boyunca defalarca değişir; para, rejime herkesten hızlı geçenindir.

**Kural:** Her faz değişiminde iki liste güncelle — kim durum-nit'iydi, kim hâlâ eski fazı oynuyor; ikincisi ana hedefindir.

### 23.29 Sınır preflop devamının fiyatı postflop senaryoda saklı

Chart'ın sınır defend'i, solver'ın postflop ağacını SENİN oynayacağını varsayar; iki düzeltme gerekir. (1) Kendi kapasiten: river'ı hava ile asla basmayacaksan sınır defend'lerin eksiye döner — ya blöfleri gerçekten repertuara koy ya da chart'tan dar oyna. (2) Rakibin fıçı profili: sürekli büyük basan tipe karşı marjinal el preflop'ta jam/fold'la çözülür (postflop'u ona verme); elini anlatan, küçük atan, tek-fıçı tipe karşı aynı el call'a döner — ucuz sokak ve net bilgi, realizasyonu taşır. Test cümlesi dar tutulmalı — brick turn'de katlanacağını bilmek tek başına diskalifiye değildir (kârlı sınır defend'lerin çoğunda brick'te fold zaten DOĞRU hattır; B11.1 "river planımı ŞİMDİ söyleyebiliyor muyum?" testinde "şu boya call / şu boya fold" meşru cevaptır). Doğru cümle: "bu eli sadece nut'u tutturursam devam ettirebiliyorum — brick'te de, bana YARAYAN turn'lerde de katlanacağım; hiçbir runout'ta blöf ya da bluff-catch planım yok" → o el preflop fold'du.

**Kural:** Marjinal devamı elin değil postflop filmi fiyatlar — kendi blöf kapasiten + rakibin fıçı profili; film kötüyse potu preflop bitir ya da hiç girme.

### 23.30 Barrel eksikçisi aynı check-raise foldcusudur — zincirleme tuzak

Flop check-raise'e aşırı fold eden oyuncu tipiyle turn/river'da equity taşımayan barrel'ı bulamayan tip çoğunlukla AYNI kişidir — ikisi de agresyon karşısında/agresyon üretirken çözülmenin iki yüzüdür, ama parayı ayrı hatlardan öderler: check-raise'in gerçek EV'si teorinin üstündedir çünkü onu doğrudan aşırı-fold besler; barrel eksikliği ise check-raise'i değil PASİF/check-call hattını besler (23.16'nın verdiği aynı mekanizma — rakip turn'de barrel bulamıyorsa para check-raise'de değil flop'ta yapışıp check/river'ı bekleyen hatta çıkar, equity realizasyonunu yükseltir). Zincirleme bir tuzak da taşır: rakip o check-raise'e fold ETMEDİYSE (call ya da re-raise ile devam ettiyse), kalan aralığını "bu adam aşırı foldlar" etiketiyle okumaya devam etmek hatadır — zayıf kısmı zaten flop'ta gitti, kalan aralık süzülmüş ve göreceli güçlüdür. Turn ayağı burada 23.10-EK'nin verdiği aynı disipline tabidir: varsayılan FREN — fold'unu floptan aldın, ısrar etme. Turn kartı equity ya da yeni bir görüntü verdiyse barrel'ı sürdür, ama value hedeflerini daralt ve blöfleri süzülmüş aralığın hâlâ foldladığı kısma göre yeniden seç; kart yardım etmediyse rakibin genel aşırı-fold eğilimi tek bir continue'yla sıfırlanmasa da bu düğümdeki zayıf kısım zaten flop'ta gitti — ısrar etmenin gerekçesi kalmadı.

**Kural:** Check-raise'e aşırı foldu olan rakip genelde barrel'ı da eksik atar — check-raise'in yükselen EV'si aşırı-fold'dan gelir, barrel eksikliği ise pasif/check-call hattını besler. Bir kez check-raise'ine devam ettiyse kalan aralığını süzülmüş-güçlü oku; turn'de varsayılan FREN'dir (23.10-EK'yle aynı disiplin) — yalnız iyi kart/equity geldiğinde sürdür, sürdürürsen value'yu daralt ve blöfleri aralığın hâlâ foldladığı kısma göre seç.

### 23.31 Rakip beceri ekseni SPR'ı yönetir

B23'ün üç sorusu (tip + ICM-hissi + hata yönü) dördüncü bir eksene ihtiyaç duyar: bu ELİ karşımdaki benden daha mı iyi oynuyor? Cevap evetse, zaten mikslediğin standart bir aracı (3-bet, check-raise gibi belli frekansta oynanması gereken bir kombo) sırf "rakip usta" diye pas geçip büyük-SPR'lı, çok sokaklı pasif bir hatta kaçmak YANLIŞ yöndür — pas geçmek SPR'ı küçültmez, BÜYÜTÜR ve arkada kalan düğüm sayısını artırır, yani karşındakinin postflop beceri avantajının yayılacağı sahayı genişletir. Doğru yön tersidir: mikslediğin agresyon aracını çoğunlukla TAM frekansında uygula, çünkü agresyon SPR'ı küçültür ve SPR küçüldükçe kalan düğüm sayısı azalır, saha daralır. Cevap hayırsa (rakip zayıf), tersini yap: postflop düğüm sayısını ARTIR — check-call gibi çok sokaklı, pasif hatlarla agresyonu geciktir, rakibin kendi bet'lerine izin ver; zayıf rakip genelde bir sokakta boyutuyla ya da sıradaki hareketiyle elini kendiliğinden ele verir, hızlı biten basit bir hat o bilgiyi hiç üretmez. Check-raise bu listede DEĞİL: check-raise rakibin inisiyatifini keser ve zayıf ellerini erken fold'a zorlar (bkz. 23.16) — tam da "rakip kendi elini versin" amacının tersini üretir; SPR-küçültücü agresyon aracı olarak yalnız güçlü-rakip tarafında kalır. Rakip BİLİNMİYORSA zayıf muamelesi çekme: bilinmez rakip pekâlâ senden iyi olabilir — baseline oyna, hattı uzatmayı ancak zayıflık okuması eline geçtikten sonra aç. Bu ayar TEK ele özeldir, sahaya değil: soft bir sahada tek bir tough rakiple karşılaşman, o elin dışında masanın geri kalanına karşı tavrını değiştirmez — sıradaki el başka bir rakiple normale döner.

**Kural:** Rakip senden iyiyse mikslediğin agresyonu çoğunlukla tam frekansında uygula (agresyon SPR'ı küçültür, düğüm azalır, rakibin beceri sahası daralır); rakip senden zayıfsa hattı uzat (check-call gibi pasif, çok sokaklı hatlarla düğüm çoğalt, elini kendi versin) — check-raise bu listede değildir, o zaten SPR-küçültücü bir agresyon aracıdır. Rakip bilinmiyorsa zayıf sayma, baseline oyna. Ayar yalnız o rakiple sürdüğün ele bağlıdır, sahaya değil.

### 23.32 Masa geometrisi bir EV varlığıdır

Sınırda bir spotun EV'si tek başına karar vermez; masadaki stack-dağılımı da bir varlıktır. Zayıf/exploitable bir oyuncuyu sağında tutuyorsan (yani sen onun solunda oturuyorsun — elleri ondan SONRA konuşarak pozisyonlu görebiliyorsun) ya da onu cover ediyorsan, bu düzeni sonraki birkaç düzine elde de KORUMAK kendi başına bir EV kaynağıdır — o oyuncudan çıkaracağın toplam EV, elindeki chip'e ve göreceli konumuna bağlıdır; marjinal-yakın bir spotta stack'ini riske atıp bu düzeni bozmak (büyük bir flip'e girip cover'ı kaybetmek, zayıfın sağından soluna düşmesi — yani pozisyon avantajını kaybetmen) o birikimli EV'yi keser. Sınırda bir kararda ("call mı fold mu, jam mı pas mı" net değilken) soruya bunu ekle: kazanırsam masadaki geometri ne kadar iyileşir, kaybedersem ne kadar bozulur — cevap "çok şey kaybederim" ise marjinali pas geç.

**Kural:** Marjinal-yakın bir kararda yalnız o elin EV'sini değil, masadaki stack-dağılımının (kimi cover ediyorsun, kim sağında oturuyor — yani sen onun solunda, ondan sonra konuşuyorsun) sağladığı süregelen edge'i de tart; bu edge'i riske atan marjinal spotu çoğunlukla pas geç.

### 23.33 Zor masa + öngörülen kırılma → sabır satın al

Masan alışılmadık derecede zor VE saha/yapı hesabına göre yakında kırılıp dağılacaksa (konsolidasyon, masa sayısı düşüşü), bu tek başına bir karardır: sınırda/kayıtsıza-yakın noktalarda düşük-varyans tarafını seç, küçük bir chip-EV bedeli göze al. Mantık gelecek-oyun'un (22.10) stack-değeri ekseninden farklıdır — burada satın alınan şey daha büyük stack değil daha ZAYIF bir masadır: kırıldıktan sonra oturacağın masa, istatistiksel olarak bu masadan daha kolaydır; o yüzden şimdi zor rakiplere karşı marjinal gamble'ı atla. Masa kırılma beklentisi yoksa (bu senin son/sabit masan) madde geçersizdir.

**Kural:** Zor masa + yakın zamanda kırılma beklentisi ikisi birden varsa sınırdaki kararı düşük-varyansa boz — bedeli küçük chip-EV, karşılığı bir sonraki (muhtemelen daha zayıf) masaya dolu stack'le oturmak.

## Bölüm 24 — Edge Premium: Ne Zaman Gamble ETME (ve Ne Zaman Mecbursun)

*★ v6. B20/B22 risk primini verdi — ICM'in primi. Bu bölüm ikinci bir prim ekler: edge premium (beceri primi). Edge'in varsa marjinal variance'tan kaçın; edge'in yoksa ICM-ayarlı +EV gamble'ı al. Risk premium kaybı, edge premium sonraki kazancı tartar.*

### 24.0 Tez

> **Marjinal bir gamble'da (flip, ince +EV) iki prim çalışır. Risk premium: kaybedersem ICM'de ne kaybederim. Edge premium: bu chip'leri riske atmasam edge'imle sonra daha fazlasını kazanır mıyım? Edge'in büyükse (soft saha, derin, yavaş yapı) marjinal flip'i PAS geç. Edge'in yoksa (tough saha, sığ, hızlı yapı) ICM-ayarlı +EV gamble'ı AL — beklemek işe yaramaz. -EV asla; edge primi yalnız +EV/marjinal spotları filtreler.**

### 24.1 Edge premium nedir

Soft bir sahada beceri edge'in büyükse, her elde otomatik olarak para kazanıyorsun demektir. Marjinal bir coin-flip bu edge'i variance'a çevirir: %50 kaybedip masayı terk edersin, oysa oynamaya devam etsen edge'in daha güvenli EV üretecekti. Bu yüzden edge'li oyuncu marjinal flip'i pas geçer — sonra daha iyi spot gelir. Tersi de doğru: edge'in yoksa (underdog'sun, ör. dünyanın en iyileriyle) beklemenin değeri yok; +EV (risk primi düşüldükten sonra, yani ICM-ayarlı $EV) her spotu, flip dahil, al — zaman senin aleyhine.

### 24.1-EK Edge büyükken postflop'ta da düşük varyanslı hattı seç
Edge premium yalnız preflop flip kararlarını değil, EV'de eşit iki postflop hattı (check-raise/barrel-off ile float/call) arasındaki seçimi de kapsar. Soft sahada, re-entry kapalıyken ya da edge'in büyükken, iki hat teoride eşit EV'liyse DÜŞÜK varyanslı olanı (call/float) tercih etmek mantıklıdır — bu hat ekstra bilgi kazandırır (rakip turn'de check-back verirse çoğunlukla no-equity blöf atmayı bilmiyordur, river'da da hatalı fold/call yapacaktır) ve seni büyük bir potta erken bust riskinde tutmaz. Tough sahada ya da edge yoksa bu ayrım kaybolur — orada EV'de eşit hatlar arasında fark etmez, dengeli oyna.

**Kural:** Soft saha + büyük edge + iki hat EV'de eşitse: büyük pota/erken bust riskine giden agresif hattı değil, bilgi toplayan düşük-varyanslı hattı seç — kazanç sonraki sokaklarda rakibin zayıflığını sömürmekten gelir, ilk sokağın kendisinden değil.

### 24.2 4-soru filtresi

Marjinal bir gamble'dan önce dört soru:

1. **Stack derinliği:** Derin misin? Derin = outplay edecek alan = edge realize olur = PAS. Sığ = alan yok = AL.
2. **Yapı hızı:** Yapı yavaş mı? Yavaş = edge zamana yayılır = PAS. Hızlı/turbo = edge erir = AL.
3. **Senin edge'in:** Saha soft mu? Soft = büyük edge = marjinali PAS. Tough (underdog) = edge yok = +EV AL.
4. **Cover haritası (ICM):** Cover mı ediliyorsun (B20/B22)? Evet = risk primi de PAS der (istisna: kimseyi cover etmeyen EN kısa stack'te prim ~0). Cover ediyorsan = agresif.

### 24.2-EK Beşinci soru: "kazanırsam KİM oluyorum?" — ve saha çarpanı

24.2'nin dört sorusu gamble'ın FİYATINI tartar; iki ek ölçü VARIŞ noktasını ve edge kademesini tartar.

**5. Varış rolü:** aynı double iki stack'e farklı şey verir — 30→60bb masayı domine eden lider, 20→40bb hâlâ cover edilen orta stack (22.2-EK-2). "Kazanırsam kim oluyorum?" cevabı "herkesi cover eden" ise marjinal gamble AL'a bir kademe yaklaşır; "yine orta" ise PAS'a. Bu kademe büyük stack'i iyi oynadığına inanıyorsan büyür, rakipler ICM'e duyarsızsa (baskı satılamıyorsa) küçülür — edge priminin varış hâli.

**Saha çarpanı (24.6 kalibrasyonuna):** edge kademesi saha büyüklüğüyle kalınlaşır. Küçük saha / FT'de ICM düşüldükten SONRA yüzde birkaç $EV kalan spot alınır; dev saha bubble'ında kalan masalarda başkalarının hata hacmi büyüdüğü için aynı spot stack'e göre belirgin büyük kazanç *(kalibre et)* ister — pure-bubble call aralığı orada sıkılaşır (22.1-EK-2). Tough küçük saha (SHR) ↔ soft dev saha (Main) zıt uçlar: 24.5'in sidebar'ı bu çarpanla okunur. Filtre tablosu değişmez; iki satır -EK olarak okunur.

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

### 26.0-EK Eşik neden sağlam — ve drill'i buna göre puanla

26.0'ın "frekans değil eşik" emrinin gerekçesi şudur: sim'de aralığı ve stack'i oynat — kombolar raise'le call arasında savrulur, devam çizgisi az kıpırdar. Karşılaştığın boy büyüdükçe eşik pot-odds gereği daralır *(kalibre et)*, ama raise-mi-call-mı ondan çok daha gürültülüdür. Öğrenilecek sağlam nesne ÇİZGİDİR, aksiyon-etiketi değil. B9 drill'ini de böyle puanla: doğru tarafta devam = doğru; aksiyon ıskasına üzülmek, hata bütçeni gürültüye harcamaktır.

### 26.1 Eşik, KENDİ aralık kompozisyonunla kalibre olur

"Her per call, her draw devam" ezberi bağlantılı board'da otomatik over-defense üretir — ve sebep yalnız rakibin güçlenmesi değil, SENİN devam edebilir kombolarının çoğalmasıdır. Bağlantı arttıkça eşik yükselir çünkü kendi draw sayın artar; eşik kalibrasyonunun yarısı rakip, yarısı kendi kompozisyonun.

### 26.1-EK Trips board'da devam eşiği: per değil KİCKER canlılığı + backdoor
6-6-6 / Q-Q-Q tipi board'da "her per call" ezberi ters çalışır: eşleşen her kicker boat'tır ve rakibin boat payı düşüktür *(kalibre et)* → eşiği per değil kicker'ın canlılığı + backdoor çizer. İki overcard + backdoor fd taşıyan düşük suited (J2s tipi) offsuit broadway'den (JTo tipi) daha iyi call'dır: JTo'nun tek canlı kartını rakip daha sık tutar; J2s'nin düşük kicker'ı daha sık gelir ve geldiğinde çoğunlukla öndesin. 26.1'in "eşik kendi kompozisyonunla kalibre olur" kuralının somut hâli: trips board'da devam edebilir komboların per'lerden değil kicker'lardan sayılır. Aralık koşulu: sıkı EP aralığına karşı eşik sertleşir — backdoor'lu iki overcard bile sınırda, suited çöp çoğunlukla fold; BTN/BB geniş aralığına karşı tersi, düşük suited'ler geniş call. Saldırı tarafı (boy küçük, frekans yüksek; sıkı-aralık OOP düşük trips 2/3) 18.2-EK-10'da.

### 26.2 Check-raise adayı: net-kararlı runout ara

Check-raise büyük pot kurar; büyük pot net-kararlı runout ister:

- Domine EDEN draw'lar (üstten çift + FD tipleri) call'da kalır — pahalı pot kurmadan realize eder.
- Per yakalayınca no-man's land'e düşecek marjinal adaylar raise'lenmez.
- Dezavantaj board'unda hiçbir el value-raise'e hevesli değilse raise düğümünü komple kapat (rakip fark edip uyum yapana dek) — B18-tarafındaki "boyu ağaçtan at"ın savunma yüzü.

### 26.2-EK Raise düğümünün üç kuralı: call kıtlığı, raise-sonrası, bloker kilidi

**Call kıtlığı yasası.** Call edecek el bulamadığın board'da çıktıyı yanlış okuma: hem hedefin ÜSTÜNDE fold edersin (savunman MDF hedefinin altında kalır) hem geniş raise'lersin — ikisi aynı yasanın iki yüzüdür. Doğal call kıtsa savunma frekansı raise'den toplanır: value tanımını orta per sınıflarına kadar indir, blöfü o genişliğe oranla ekle *(oranı kalibre et)*. Tersi de yasadır: büyük boya karşı value-raise aralığın daraldıkça blöf-raise sayın onunla birlikte düşer. Value bütçesine bakmadan blöf-raise eklemek, over-bluff'un savunma-tarafı kök hatasıdır.

**Raise'i seçtiysen raise-SONRASINI da çalış.** Raise'in call yediği düğümü ileri oynat: turn value eşiğini oku, sonra check kolonuna bak — en güçlü sınıflarının önemli bir payının orada durduğunu gör *(payı kalibre et)*. "Geniş raise elimi açık eder" korkusu bu kolonda ölür: check aralığın korunmuşsa küçük betlere per sınıflarınla devam edersin, kimse seni cezalandıramaz. Korunmamışsa raise aralığını değil check aralığını onar.

**Bloker kilit-testi.** Hiçbir bloker kuralı test edilmeden ezbere alınmaz; soru tek: rakip value çekirdeğini senin kilit-kartından arındırabilir mi? Çekirdeği yapısal olarak o karttan geçiyorsa kural kilitlidir — ezberle ve uygula. Arındırabiliyorsa raf ömrü kısadır: blokere değil sınıf-yüzdesine yaslan (26.4), read'i onun üstüne koy.

### 26.2-EK-2 Bloker kilit-testine 3-bet-pot örneği: yan kart
40bb efektifte (3-bet potunda SPR ≲2, sığ) J-T-x'te 3-bettor'ın jam'ine karşı caller'ın ikinci peri (QT/KT) yan kartıyla karar verir — ama iki yönde: Q yan kart QQ'yu (value) ve AQ/KQ'yu (semi-blöf) keser; K yan kart KK'yı (value) ve KQ/AK'yı (semi-blöf) keser; iki etki çekişir. Bloker kilit-testi burada call'u "rahat" değil "sınırda" yapar; hangi yönün ağır bastığını kombo sayarak belirle, 3-bettor'ın jam aralığı değişince yeniden say *(kalibre et)*. J8 bu gruba girmez: top pair'dir, 8'in bloker etkisi ihmal edilebilir düzeydedir (yalnız ender 98 tipi 3-bet-blöf kombolarına dokunur), karar yan karttan değil el gücünden gelir. Kilit-testini B26.2-EK'in sorusuyla, dokuyu B32.3 ile kontrol et (bkz. B32.3).

### 26.2-EK-4 Raise düğümünün üç havuz katmanı: büyük range-bet'e call yok · value-kıt board'da x/r polar-büyük, blöf-raise UNBLOCK'tan · çekiliş-ağır turn bet'ine "yapıştırma" küçük x/r
26.2 teori-baseline'dır; üç rakip-etiketli katman yanına gelir *(hepsi kalibre et)*.

1. **Büyük range-bet'e karşı call yok — raise ya da fold.** Polar büyük bete reopen kârsızdır (nut'a çarpar); ama rakip büyük boyla ORTA elleri de bet'liyorsa (showdown'da 88 / A-Q) aralık polar değildir → call aralığını min-raise aralığına dönüştür: showdown'u olanla koruma-raise, blöfle equity-raise; boy 26.5-EK-2'nin ≈2×'i. 19.11'in "raise ucuz"u küçük bete karşıdır; büyük bete raise'i bu etiket açar (18.4-EK-2, 23.11).
2. **Value kıtsa slowplay yok.** A-T-2 tipi board'da BB'nin value'su kıt (en iyi A-x, alt set, alt iki-per) → x/r aralığını beslemek için tuzak lüksü yok: value tam frekans, boy büyük, ince x/r yok. Blöf-raise'i rakibin BET-FOLD bloğunu (9-x/8-x/7-x) tutmayan elden seç — T-2s, T-6s'den iyi raise-blöfüdür. Havuz BB'si bu x/r'ı bulmaz; sen her alt per'le x/r. 26.5'in "1/3 → x/r geniş" hücresi "value-kıt → tam-frekans polar" okunur.
3. **Yapıştırma raise'i — yalnız yapışkan profil.** Havuz turn'de ikinci flush draw açılınca tüm çekilişlerini büyük bet'ler, top pair'ini turn'e taşımaz → turn bet aralığı çekiliş-ağır. Buna karşı KÜÇÜK x/r: orta per+çekiliş, gutshot, non-nut fd raise'i öder; büyük raise/jam onları katlatır. Raise aralığı domine eden sınıf (top pair, nut fd, board'a bağlı orta cep); blöf x/r yok. Fold-eğilimli rakibe 26.2 aynen.

### 26.2-EK-3 Raise'in gerekçesi EV'dir — nut büyük polar bete CALL eder ("koruma" değil), draw'ın jam'i domine EDENİ katlatıyorsa jam

**Nut'un call'ı.** 80–100bb, OOP açıcı check → IP büyük polar bet (alt cepler + gutshot'lı broadway blöfleri + yüksek value). AA'nın call EV'si raise'inkinden yüksek: call, 55/66/JT'nin turn'de de barrel'lamasına izin verir; raise onları katlar, yalnız seni yeneni tutar. "Aralık koruma" sonuçtur, sebep değil — 29.3'ün "set slowplay = range koruması" cümlesi sonucu anlatır, sebep EV'dir. Turn'de büyük bete yine call. Raise düğümü combo draw'a aittir (K♦9♦ tipi: Ax'i ve alt cepleri katlatır). River düşük SPR'de bluff-catch sıralaması bloker kilit-testiyle (26.4): A tek başına AQ/AJ/A4'ü keser → call; KQ hem value'yu hem blöfü keser → sınırda; QJ blöfü (JT) bloklar → fold.

**Draw'ın jam'i (IP, 3-bet/squeeze potu, 100bb+ — baseline dışı).** J-9-7 fd'ye squeezer yarım pot: 8-6ss (OESD+FD) saf CALL — jam'in katlattığı hiçbir el onu domine etmez, ödeyenler overpair/üst draw. KTss/QTss JAM — KQ♥/KJ♥ tipi domine eden per+draw'ları katlatır. Test: "jam'im çağrılmayan elleri katlatıyor, onlar beni domine ediyor muydu?" Evet → jam; hayır → call (EV yakın). Derin squeeze potunda yarım pota AQ♠♠/A8♥♥ çoğunlukla fold — over-defense yok. 26.2 "domine EDEN draw call'da kalır"ın IP aynası; 6.3'e çapraz.

### 26.3 Notları board'a göre değil YÜZLEŞİLEN BOYA göre tut

Farklı c-bet boylarına karşı savunmalar birbiriyle kıyaslanamaz; desen ancak aynı boya karşı board'lar yan yana konunca çıkar. Flop'ta yüzleşilen boy turn eşiklerini belirlediğinden, notlar sokak değil HAT bazlı tutulur: "flop-1/3 → turn-2/3" ayrı bir kutu, "flop-2/3 → turn-jam" ayrı.

### 26.4 River savunması: frekans-önce, kombo-sonra

River'da devam kararı iki eksenlidir; B11.2 yalnız fiyat eksenini verdi, ikincisi eksikti:

1. **Fiyat ekseni (B11.2):** boyut → gereken devam %'si.
2. **Frekans ekseni (yeni):** gereken %'yi kendi aralığındaki sınıf-yüzdelerine eşle — "top-pair+ elimin yarısıysa hepsiyle call; üçte-ikisiyse bir sınıf buda." Frekansı sınıf-%'yle tuttur; sınıf İÇİ seçimi bloker kuralı belirler (value-bloke → call, blöf-bloke → fold), read ancak bunun üstüne gelir.

> **River'da fiyat "ne kadar savunmam gerek"i, frekans "elimin neresinden keseceğim"i söyler. B11.2'nin eksik yarısı ikincisidir.**

### 26.4-EK Bloker kuralının üç catcher örneği: unblock catcher > bloker catcher · K9 > KK · mono turn'de AA/KK call, TT/JJ fold
26.4 "value-bloke → call, blöf-bloke → fold" dedi; üç düğüm kuralı somutlar *(kalibre et)*.

1. **Yüksek board river all-in'ine karşı (A-Q-J-x-x tipi):** K-Q, Q-T'den iyi catcher'dır — K rakibin K-x blöfünü bloklar. A-x ise ikisinden de iyidir: rakibin T-x blöflerini UNBLOCK eder; catcher'ı bloker değil unblock seçer. Saldırı yüzü 11.1-EK-3 (blöf K-x'ten).
2. **Büyük c-bet'e raise sonrası river (9-8-5 tipi, sıkı IP caller):** "büyük çift" sırası yanlış. KK rakibin hiçbir blöfünü ve value'sunu bloklamaz (caller'da AK yok); K9/Q9 tipi orta per set ve iki-per'i bloklar → K9 call, KK fold. Value-bloke kuralı yüksek çifti geçer (19.11-EK).
3. **Mono board'da turn polar bet'e karşı (3-bet potu, sen IP overpair):** rakibin bet'i flush + set + düz-çekilişi blöfleri (65s/JT/QT tipi) → renk kartsız TT/JJ/QQ fold, renk kartlı call; AA/KK CALL — rakibin blöf kombolarını bloklamaz, TT/JJ bloklar. "Overpair" tek sınıf değil, bloker sınıfıdır (32.3-EK-2).

Ortak ders: catcher'ı elin rütbesi değil, rakibin blöf listesine dokunup dokunmadığı seçer; bloker kilit-testi (26.2-EK) üçünde de geçer — rakip value'sunu o karttan arındıramaz.

### 26.6 Raise-sonrası turn (x/r + call): kilitli nut → DOWNBET, akışkan nut → JAM, orta boy çoğunlukla yok

26.2-EK "raise-sonrasını çalış" dedi; mekanik budur. 11.1 tablosu IP PFR'ın value turn'üdür; bu bölüm OOP x/r'cının turn'ü. Flop x/r + call sonrası SPR düşüktür; turn ağacı iki boya iner: KÜÇÜK (potun küçük dilimi *(kalibre et)*) ya da JAM. Tek soru seçer: **x/r aralığımın nut sınıfı bu turn'de KİLİTLİ mi?**

- **Kilitli** (river'ın geçmesi zor VE nut hâlâ sende: kent tamamlandı, flush draw yok ve x/r aralığın o kenti taşıyor — flop'ta OESD/gutshot semi-blöf x/r'ı vardıysa; yoksa kent call edene kaymıştır, kilitli değilsin → check ağırlıklı; alt kart eşleşti ve x/r'da alt per'ler vardı; A-x-x düşük board'a wheel'i TAMAMLAMAYAN düşük turn — tamamlıyorsa kent kuralı geçerli, x/r aralığın wheel-draw taşımıyorsa kilitli değilsin) → koruma isteyen de jam isteyen de yok → TÜM aralık downbet: overcard'lar, alt per'ler, tek-kart draw'lar ucuza ödemeye devam eder; ince value + blöf aynı boyda.
- **Akışkan** (iki flush draw açıldı; orta-bağlantılı board'a bağlantılı turn; üst per kırılgan) → güçlü eller parayı river değişmeden koymak ister → jam ağırlığı artar; semi-blöf jam de buradan — ama SPR düştükçe fold equity düşer: seni domine eden draw düşük SPR'de fiyatını alıp çoğunlukla öder, jam'in hedefi zayıf per/overcard/zayıf draw'ları katlatıp equity reddetmektir, ödenince out'un vardır; domine eden draw'ı katlatmak ancak SPR yeterince yüksekken / yeterli fold equity varken mümkündür *(sınırda — kalibre et)*.

Kilit FLOP x/r kompozisyonuna bağlıdır: alt kartla koruma-x/r'ı bulmuyorsan alt kart eşleşince kilitli değilsin. x/r aralığına alt-per/backdoor koruması eklemek turn kilidini satın alır. Kilitli → downbet ağırlıklı, jam nadir (SPR yükseldikçe orta boy açılır, kalibre et); değil → güçlü value + en iyi semi-blöfler jam, ortası check *(sınıf listesi: kalibre et)*.

### 26.7 Turn kartını üç katmanda oku — ve kart KİMİ kilitledi

**Üç katman:** (1) kart ne tamamladı; (2) board'da hâlâ canlı draw var mı; (3) tamamlanan draw rakibin aralığında da var mı. Kent tamamlayan düşük turn RAINBOW board'da saf downbet'e yakın. Aynı kart flop'ta canlı flush draw varsa kilidi açık bırakır: kent/iki-per/set river'da flush'a yenilir → jam payı görünür artar *(oran: kalibre et)*. Flush TAMAMLANDI, x/r aralığında flush'lar var ve x/r'ı CALL eden aralıkta da flush draw'lar vardı (flop'ta FD ile call standart) → iki taraf da kilitli; kilitliye kilitli jam ölü paradır (ödeyen yalnız flush) → aralık downbet'e döner, jam çok dar sınıfa *(kalibre et)*.

**Kart rakibi kilitlediyse bet düğümü kapanır.** BB x/r aralığın A-x'ten görece fakirdir — güçlü A-x 3-bet'e, orta A-x flop call'a gitti, kalan A-x çoğunlukla gutshot/backdoor blöfü; açıcınınki A-x/K-x'le dolu. As turn'ü senin değil RAKİBİN aralığını kilitler: downbet'in ödeyeceği katman artık seni geçer. Üst kartı eşleyen turn'de de aynı: açıcının top-pair'i trips oldu, kimse küçük bete katlanmaz. Bu turn'lerde aralık çoğunlukla check/kontrol; As turn'ünde dar güçlü sınıf (set/iki-per) A-x top pair'den değer için büyük bet — downbet ancak MERGED kurulursa (nut + koruma isteyen orta el + az blöf), tek başına dar sınıfla değil *(kalibre et)*; üst-kart eşleşmesinde ise dar sınıf (boat/quads) trips'ten değer için büyük bet/jam — downbet oraya değer bırakır *(kalibre et)*. Alt kartı eşleyen turn tersidir — x/r'daki alt per trips, alt iki-per boat, alt set quads olur, kilit sende: o sınıf bet.

**x/r'ın EV'si turn'de yaşar:** turn planı olmayan x/r, 11.0-EK "plansız şişirme"nin savunma yüzüdür — eşiği bilmediğin board'da x/r frekansını düşür. Exploit: havuz downbet'e overfold eder ve turn raise'i bulamaz → downbet ile check arasında kaldıysan downbet; rakip raise bulmuyorsa boyu ihtiyaç seçer — koruma isteyen el jam, orta el downbet.

### 26.5 Kalibrasyon + Cheat kartı

*(kalibre et: üç eşik — devam / value-raise / blöf-raise — board-boy hattına göre solver'dan çıkar; kullandığın solver'da caller (savunan taraf) düğümünü locate et.)*

| Yüzleşilen boy | Oku | Not tutumu |
|---|---|---|
| **Flop 1/3 (range-bet)** | Geniş devam eşiği; check-raise SIK/geniş (rakip aralığı geniş-zayıf) | Kendi draw sayınla kalibre |
| **Flop 2/3 (polarize)** | Dar devam; check-raise dar/polarize; value-raise eşiği net | Hat bazlı ("2/3 → turn ?") |
| **River (herhangi)** | Fiyat + frekans iki eksen | Sınıf-% eşleme |
| **Dezavantaj board** | Raise düğümünü kapat | Bilinçli maliyet notu |

### 26.5-EK Mono flop'ta küçük bete karşı (3-bet potu)
3-bet potunda mono flop'ta 3-bettor'ın küçük bet'ini yedin: flush kartı TAŞIYAN per call sınıfı; overpair / top pair flush kartı olmasa da küçük bete call (turn'de dördüncü flush kartı gelince yeniden değerlendir); flush kartsız düşük/orta çift ve overcard'lar çoğunlukla fold. Raise adayı flopun rengindeki yüksek kartı (K/Q) taşıyan draw + bloker ellerdir; flush kartsız suited connector raise DEĞİL — 3-bettor'ın aralığında nut flush/nut fd PAYI yüksektir (toplam flush sayısı değil, nut oranı — caller aralığı çoğu kovada daha çok flush taşır) *(kalibre et)*. Önce hangi mono kovasında olduğunu oku (A + düşük / A-yok kopuk orta / caller'ın yapılı flush+düz kütlesi büyük) — 3-bettor'ın nut-flush payı ve caller'ın yapılı-el kütlesi kovaya göre değişir (bkz. B32.3).

### 26.5-EK-2 Büyük polar c-bet'e check-raise boyu MİN-RAISE — hedef onun HAVA bloğu; havuz o bloğu katladığı an saf x/r

26.5'in "flop 2/3 → x/r dar/polarize" satırı teori (~%9–13); bu EK boy + havuz katmanı. Büyük polar bet aralığı iki bloktur: value (overpair/top pair — hiçbir boya katlanmaz) ve hava (K8s/Q5s/backdoor — HER boya katlanır). Boyu büyütmek value bloğundan bir şey satın almaz, havanın fold'unu pahalıya alır. ≈50bb, CO vs BB, 9-7-4 / 8-6-3 tipi kopuk board, IP %75: çözücü ≈2× seçer — hava en ucuza katlanır, 3-bet'i de kapanır *(kalibre et)*.

**Kompozisyon:** value = üst-kicker top pair (A9/K9; zayıf 9x x/r'lanmaz — polar aralığa karşı "çağıracak daha kötü" yok); 9-7 iki-per slow-play (onun overpair'i turn'de kendi barrel'lar); JTs nut-gutshot+overcard jam; alt-per koruması (43s/76s) x/r — bloker seçimi "rakibin BET-FOLD aralığıyla etkileşmeyen kart": 4/3 dokunmaz, J onun JT/QJ bet-fold'unu keser → 43s > J9.

**Exploit:** havuz min x/r'a offsuit K/Q-high'ını ve K6s/Q8s'i katlar (teoride ~%33 fold → gerçekte %45–50) → K2s/J6/55/K8'de x/r EV'si call'ın çok üstünde → aralığın tamamıyla x/r *(sapma ölçüsü: kalibre et)*. 2.2× "misclick" görüntüsünü siler. Rakip boyu ikiye bölüyorsa küçük boya da x/r. 19.11 "havuz flop-3-bet bulamaz" ile aynı yön.

### 26.5-EK-3 SB flat sonrası kuru yüksek board: havuzun %100 c-bet'ine check-raise, blöf suited Ax (40bb, tek-raise'li)

SB'den geç açılışa 40bb'de flat'ledin (offsuit broadway, suited Kx/Qx, 77+, suited Ax — 3-bet'e gitmeyen gövde; 4.2-EK). Flop Q-6-2 / K-5-3 rainbow, IP küçük c-bet. Teoride her şey karışıktır — Qx'in yarısı raise, suited Ax'in yarısı raise; ezber yok *(kalibre et)*. Havuz iki yerde sapar ve ikisi çarpışır: (1) IP aralık-bet'ler — denge K-5-3'te ~%44 check verir; (2) IP check-raise'e overfold eder — zayıf Qx/Jx/backdoor'suz suited'ı %100 katlar. Fold equity dengenin çok üstünde.

- **Value:** Qx/Kx üstü (KQ, QJs, set).
- **Blöf: suited Ax** — overcard; 6'nın/5'in etrafında turn'de kent/flush draw (K-7s 6'ya kent çeviremez → K-suited aday değil); rakibin katlayacağı Q-J-T-9-8-7 sınıfını bloklamaz. Raise'e devam eden 7x/8x/Jx bet-call'ları — SB flat'te seyrek, onun fold'u temiz.
- **Küçük çift (44/55):** turn'de kent açabildiği için sınırda raise; 77–99 çoğunlukla call.

**Ayna (sen IP'yken):** K-5-3'te ~%44 check — 9-7s, suited Ax, cep 4/2'yi check-back et; "SB flat = zayıf" diye range-bet'leyen olma. BB over-call ederse 13'e dön. 23.12'ye dördüncü carve-out adayı.

---

## Bölüm 27 — Solver'ı Çalışmak: B9 Drill'ini ve B16.3 Otopsiyi Solvere Bağlamak

*B9 "beni hazırla" drill'ini ve B16.3 otopsiyi verdi; bu bölüm o iki iskeleti solver çalışmasına bağlar. Amaç solver'ı KOPYALAMAK değil — kendi solver çıktından sınır-koşullu kural çıkarmak. (Ayrıntılı okuma-protokolü kendi solver export'undan gelir; burada yalnız genel çalışma çerçevesi.)*

### 27.0 Temel duruş: solver öğrenme aracı, kopya-kaynağı değil

Pokerde geri-bildirim zayıftır — yanlış bir varsayımla yıllarca EV kanatıp hiç fark etmeyebilirsin. Bu yüzden solver'ın bir şeyi NEDEN yaptığını anlamadan çıktıyı taşıma (mekanizma çıkar, ezber değil). Bu, B16.3 otopsinin solver-tarafıdır.

### 27.1 Board'ları tek tek değil KOVA halinde çalış

İzole board yerine doku-kovaları kur (paired / monotone / bağlantılı / kuru-yüksek) ve bir kovaya tek strateji ata; yalnız gerçekten farklı davranan alt-sınıfı ayır. Bu, B9 drill'ini board-verimli yapar — her board'u sıfırdan düşünmezsin.

### 27.2 Blöf sayımı = düz aritmetik (kendi elinle yap)

River'da value kombolarını say, boyun gerektirdiği value:blöf oranına kadar blöf ekle — bu aritmetiktir, ezber değil. Value'lanabilir sınıf daraldıkça (yalnız güçlü eller kaldıkça) boy büyür; bunu kendi elinle sayarak gör, başkasının hazır tablosundan değil.

### 27.2-EK Çok boylu river'da blöf adayını hedef boya karşı rakibin devam aralığına göre seç
27.2'nin blöf sayımı tek boy için düz aritmetiktir; river'da iki farklı boy kullanıyorsan her boy rakipte farklı bir DEVAM (call) aralığı doğurur — büyük boya karşı rakip çoğunlukla daha dar/nütlü bir aralıkla kalır, küçük boya karşı daha geniş/orta-güçte bir aralıkla kalır. Blöf adayını seçerken kendi elinin hangi value sınıfını taşıdığına bakma — rakip senin kartlarını görmez, kendi value'unu bloke etmenin EV'e doğrudan katkısı yoktur. Bunun yerine adayın hedef boya KARŞI rakibin call aralığını bloke edip fold aralığını serbest bıraktığına bak: büyük boya rakibin dar/nütlü call'larını bloke eden aday, küçük boya rakibin geniş/orta-güç call'larını bloke eden aday yazılır. Bu eşleşme atlanırsa rakip savunmasını değiştirmez (combo seçimini göremediği için aynı sıklıkta savunur); bedeli sen ödersin — blöf o boya karşı rakibin call'larını değil fold'larını bloke etmiş olur, fold equity düşer ve blöf hedeflediği boyda işini yapmaz.

**Kural:** Çok boylu river blöfünde bloker adayını, hedef boya karşı rakibin call aralığını bloke edip fold aralığını serbest bıraktığına göre seç — kendi value bileşimine göre değil.

### 27.3 Node-lock ile sadeleştirmeyi SINA

Node-locking bilinen bir solver özelliğidir: bir boyu/aksiyonu kilitleyip EV kaybını ölç. Basit bir sadeleştirme (tek boy) az EV kaybediyorsa masaya taşınabilir; çok kaybediyorsa taşınmaz. Sonucu KENDİ çalıştırmanda gör *(kalibre et)* — başkasının "aralık kovaya yakınsar" iddiasını olgu gibi alma.

### 27.3-EK Node-lock'un 3-bet-pot uygulaması
Sığ SPR 3-bet potunda "ara boyları at, jam/check'e indir" ve 100bb'de "iki boy (küçük + büyük)" sadeleştirmeleri bu prosedürün somut uygulamasıdır: ara boyu kilitle, EV kaybını ölç, ~sıfırsa masaya taşı (bkz. B32.1). Başkasının "EV kaybı sıfır" iddiasını olgu gibi alma.

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

### 27.9 Çıktıyı okuma protokolü: eşik önce, check kolonu önce

Solver çıktısını ilk okuyuşta frekans OKUMA — eşik oku. Her boy için tek soru: bu boyla value'lanabilen en zayıf el ne; bete karşı: fold etmeyen en zayıf el ne? Mix yüzdeleri dengede eş-EV'dir, ezberi taşımaz — eşik taşır; eşiğin üstü "yapabilir"dir, sıklığı sonra sınıf seviyesinde kalibre edersin *(kalibre et)*.

Agresör flop çıktısında sıra da bellidir: bet kolonundan değil CHECK kolonundan başla. En çok check isteyen sınıfı bul — o bile bet'e mix ediyorsa o sınıf için check ve bet eş-EV'dir, kalan sınıflar bet'i zaten tercih eder: tam aralığı tek küçük boyla bet etmek flop'ta EV kaybettirmez ama bedava değildir — tam-aralık bet de turn'e borç yazar (27.13); istisna turn range-bet'idir, turn planını buna göre kur. Bet frekansının düştüğü yerde sınırı tek okunabilir kart özelliğine bağla — "en düşük kart şu rankın üstündeyse bet, altındaysa check" *(rankı kalibre et)*. Çizginin keyfî olması kusur değil özelliktir: sınır elleri zaten eş-EV ve keyfî çizgi masada icra edilir.

> **Frekans ezberi taşınmaz; eşik taşınır. Okumaya check kolonundan başla, sınırı tek kart-özelliğine bağla.**

### 27.9-EK İnşa sırasına sokak eki: coverage adımının ağırlığı sokağa göre değişir, river'da sıfırdır
18.1-EK aralık inşa sırasını verdi: önce value, sonra value'nun istediği boy, sonra coverage, en son blöfler. Bu sıra sabittir ama coverage adımının AĞIRLIĞI sokağa göre sabit değildir: flop'ta önünde iki sokak daha olduğu için coverage en ağır adımdır, turn'de tek sokak kaldığı için hafifler, river'da hiç sokak kalmadığı için coverage adımı TAMAMEN düşer — o node'da yalnız value, value'yu tamamlayan blöf ve check bıraktığın range'i koruma kalır. River'da coverage arayarak harcanan çalışma zamanı boşa gider.

**Kural:** Range inşa sırası (18.1-EK) sabit kalır; coverage adımının ağırlığı flop'ta en yüksek, turn'de düşük, river'da sıfırdır — river'da coverage adımını atla.

### 27.10 Aralık aritmetiği: kombodan yüzdeye, sokak katlanması, river'dan geri sarım

Kombodan yüzdeye üç adım: sınıfın kombo sayısını yaz, 1326'ya böl, rakibin aralık-genişliğinin tersiyle çarp (%20 aralıkta ×5). Sokak ilerledikçe yeniden say: aralığın zayıf yarısı düşüyor ve güçlü sınıf hep kalıyorsa, o sınıfın payı sokak başına kabaca ikiye katlanır *(kalibre et)*. Dar aralıkta bu yüzdeler board'dan board'a savrulur, geniş aralıkta stabildir — ezber bütçeni dar-aralık düğümlerine harca. Solver ezberi seni yalnız gördüğün board'da taşır; bu aritmetik her board'da.

Çalışmaya river'dan başla ve geriye sar: river'da neyin value'landığı turn aralığını, turn flop'u belirler. River eşiği aritmetiktir: pot betine rakip yaklaşık yarısını savunur → value bet için aralığının ÇOĞUNU geçmen gerekir; raise ihtimali ve bloker payı eşiği yukarı iter *(kalibre et)*. Katlanma kuralı: her pot-bet call'u aralığı yarılar, seni yenen payın oranı kabaca İKİYE katlanır — iki büyük sokak value istiyorsan turn'de yenilme payın buna göre küçük olmalı *(kalibre et)*.

*Kök hata bağı: şişmiş potta tek per'in neden bluff-catcher'a düştüğünün aritmetiği bu katlanmadır — sokak başına ikiye katlanan yenilme payını saymayan el, potu kendi büyütür.*

### 27.11 Strateji değil ARALIK ezberle — ve kendi-aralık imkânsızlık testi

Strateji ezberleme; ARALIK ezberle. Doku ailesi başına rakip aralığındaki draw, set, iki-per paylarını ballpark çıkar ve ezberle *(kalibre et: kendi sim'lerinden)*; masada her call'da haritayı kabaca yarıla, fold/raise'e giden sınıfları düş. Dar aralıklarda paylar sert oynar, geniş aralıklarda az — sıkı pozisyonlar için ayrı harita tut. 27.10'un eşik aritmetiği bu haritayla çalışır; haritasız eşik, pusulasız harita gibidir.

Aynı haritayı kendi aralığına da tut — imkânsızlık testi (27.5 teşvik testinin aritmetik hali): elinden iyisi aralığının kabaca yarısındaysa ve büyük boy atıyorsan, blöf payıyla toplam bet frekansın aralığının büyük kısmına dayanır — rakibin daha kötü elle CALL teşviki ölür (eşikteki "value" betlerini yalnız senden iyiler öder, yani value değildir), böyle bir çıktı dengede yoktur. Kural: rakibin bet opsiyonu olan düğümde aralığının yarıdan fazlasıyla büyük boy atıyorsan value eşiğin düşüktür — yükselt *(kalibre et)*.

### 27.12 Karışık strateji: mix = kayıtsızlık = bedava karar

Solver bir eli karıştırıyorsa o iki aksiyon arasında kayıtsızdır; karışım ancak EV farkı sıfıra yakınken meşrudur. Masa çevirisi: mix'li el BEDAVA karardır — tek tarafa sabitle; hangi tarafa, read'in söyler, read yoksa EV-kaynağı filtresi (27.8). Sabitlemeni node-lock ile sına (27.3): mix'i tek tarafa kilitle, EV kaybını ölç *(kalibre et)* — küçükse masaya taşınır, kural budur.

Karıştırmanın kapısı rakip kalitesidir: frekansını saymayan rec'e karşı saf oyna, exploit'i al. Denge yalnız seni izleyen iyi rakibe karşı gerekir — ve orada seyrek doz yeter: pasif hattında ara sıra güçlü el göster ki karşı-uyum kapısı kapansın. Canlıda araca dikkat: saate yalnız sınır elde bakıyorsan, saat elini anons eder — karıştırman gerekiyorsa kart-özelliği kuralı kullan ("bugünün agresif rengi") ve kuralı gün başına değiştir.

> **Mix ancak eş-EV'de meşrudur; eş-EV karar bedavadır. Rec'e karşı sabitle ve exploit'i al; dengeyi yalnız sayana sakla.**

### 27.12-EK Sabitleme aralık ölçeğinde NÖTR olmalı — 60bb 3-bet düğümünde mix'i tek tarafa çekmek 4-bet-jam kapısını açar

27.12'nin "mix = bedava karar, sabitle" kuralı kompozisyonu değiştirmeyen düğümler içindir (postflop tek el; aralık ölçeğinde nötr sabitleme). Sınır: 60bb 3-bet düğümünde sınır komboları (KJs/QJs/QTs/JTs/ATo/A9s) %100 3-bet'e çekersen 3-bet aralığının ortalama gücü düşer, call-off aralığın (AQ+/77+ civarı) sabit kalır → BTN'nin 60bb 4-bet-jam'i hemen her iki kartla kârlı olur, 3-bet'in kendisi eksiye döner. Aynı kompozisyon 100bb'de sorun değildir (4-bet-jam pahalı, BTN non-all-in 4-bet'e mahkûm). Kural: 60bb'de sınır komboları mix'te TUT ya da sabitlerken toplamı koru — birini 3-bet'e çekiyorsan başkasını flat/fold'a it (14.1'in 60–70bb satırına not).

60bb "frekansta derin, boyda sığ"dır: check sıklığı, realizasyon ve c-bet frekansı 100bb'ye yakın; boy repertuarı 40bb'ye — yarım pot / %60 sık, pot-boy yalnız iki-yüksek-bağlantılı fd board'da *(kalibre et)*. Yan sonuç: 60bb'de SB flat'i AJ/KJ/QJ tipiyle biraz genişler (BB squeeze'ine kalkan); 100bb'de bu eller value 3-bet'e kayar *(sınırda)*. T-9-x'te 60bb flop jam sınıfı AK/AQ değil top pair (AT/KT/QT) + broadway'i unblock eden T8s; AA/KK daha küçük gider *(kalibre et)*.

### 27.13 Sokak-bazlı prosedür: turn kovaları ve sadeleştirme borç-defteri

Turn'ü board olarak değil GELEN KART olarak çalış (27.1'in sokak hali): dört kova — flush-tamamlayan, blank, board-eşleyen, straight/üst-kart — artı en fazla BİR özel kart. Aykırı görünen kartı ayırmadan önce test et: kovanın tek boyuna zorla ve check-frekansını kovayla kıyasla; yakınsıyorsa yut, farkı bilinçli maliyet olarak yaz *(EV farkını kalibre et)*. Ve ezberle: flop'ta var olan tam-aralık lüksü turn'de istisnadır — varsayılan bölünmedir; aralığı sert kayıran nadir turn'ler dışında turn aralığı böler, çalışman da bölünmüş aralığın eşiğini aramakla başlar.

Sadeleştirme bedava değildir; faturası bir sonraki sokakta kesilir — her kısayolun yanına borcunu yaz. Tam-aralık check'e indirdiğin doku, turn'de solver'dan güçlü bir check aralığı bırakır: probe'a fazladan savunma borçlusun. Tam-aralık bet'e indirdiğin doku da borç yazar: turn bet aralığın solver'ınkinden sulanmış olduğundan barrel eşiğini sıkılaştırman gerekir; bu borç yalnızca solver'ın zaten neredeyse tam bet ettiği dokularda ihmal edilebilir *(frekans eşiğini kalibre et)*. Borcu yazılmayan sadeleştirme, iki sokak sonra kaynağı unutulmuş bir kaçak olur — kök hatanın çalışma-masası versiyonu.

> **Turn'de tam-aralık bet istisnadır; ve her sadeleştirme sonraki sokağa borç yazar — borcu defterine işle.**

### 27.14 Çalışma iş-akışı: teşhis merdiveni, kontrast çifti, kuluçka, zorluk ayarı

Anlaşılmayan çıktıya bakmayı bırak, merdivene gir: **Bir** — aksiyonu stratejiden ÇIKAR: hangi aralık hangi runout'ta çıplak kalıyor? **İki** — aynı hattı komşu board'da aç: strateji tutuyorsa mekanizma board'dan bağımsızdır; değişiyorsa neden, iki board arasındaki avantaj farkıdır. **Üç** — bu boy kimin gücünü kaldıraçlıyor, kimin boşluğunu hedefliyor? **Dört** — teşvik testi (27.5).

Kural çekerken tek node'a bakma — asgari-kontrast çifti kur: TEK değişken değiştir (aynı board farklı hat / aynı hat farklı board / aynı boy farklı düğüm), deltayı oku. "Neden"i sana düğüm değil, iki düğüm arasındaki fark söyler; kontrastın öbür yarısı 27.4'ün üçüncü satırını — sınır koşulunu — doldurur.

Anlamadığın node'a tavan koy *(kalibre et — dakika)*; tavan dolunca bırak. Bırakmak pes değil kuluçkadır: birkaç gün sonra dön, çoğu kilit kendiliğinden açılır. Ölçeri oku: karışıklık arada olur; SIK oluyorsa eksik node'da değil temelindedir — yalnız çalışmayı bırak, düğümü bir ortakla çöz. İlerleme mükemmellikten önce gelir.

Seans hedefini beceri seviyene ayarla (27.6'ya ek): ne rutin kadar kolay, ne ilk-kez-görülen kadar ağır — çok kolay dalgınlık, çok zor donma üretir. Ve iki-seçenek kuralı: bu iş ya da hiçbir şey — boş oturmak serbesttir, üçüncü seçenek yoktur. Kaçacak kapı bulamayan dikkat derinleşir.

### 27.15 Cheat kartı

*(kalibre et: seans süresi, node-lock EV-kayıp eşiği, karışım frekansları, eşik yüzdeleri — hepsi kendi çalıştırmandan.)*

| İlke | Kural |
|---|---|
| **Duruş** | Mekanizma çıkar, kopyalama; her kural = desen + neden + SINIR KOŞULU — sınırsız heuristic yanlış genellenir |
| **Kova** | Board'ları doku-kovasıyla çalış (paired / monotone / bağlantılı / kuru-yüksek); kovaya TEK strateji, yalnız farklı davranan alt-sınıfı ayır |
| **Blöf sayımı** | River'da value kombolarını say, boyun oranına kadar blöf ekle — düz aritmetik, kendi elinle; hazır tablodan değil |
| **Node-lock** | Sadeleştirmeyi EV kaybıyla SINA *(kalibre et)*: az kayıp → masaya, çok kayıp → taşınmaz; başkasının iddiasını olgu alma |
| **Öz-denetim** | "Buna karşı rakibin en kârlı cevabı ne?" — cevap dejenereyse strateji yanlış; teşvikle test, MDF ezberiyle değil |
| **Seans** | Kısa, zaman-kutulu, TEK önceden tanımlı hedef; oyun günü seans öncesi yoğun solver YASAK — yalnız oynanmayan günün sabahına |
| **Otopsi** | Tek kombo mix'li node'da yanıltır — üçüncü soru: "SINIFIM ne yapıyordu?" Ders sınıf seviyesinden |
| **Okuma** *(27.9)* | Eşik oku, frekans değil; agresör-flopta CHECK kolonundan başla, sınırı tek kart-özelliğine bağla |
| **Aritmetik** *(27.10)* | Kombo/1326 × aralık-genişliği tersi; sokak başına yenilme payı ~ikiye katlanır; river'dan geri sar |
| **Aralık haritası** *(27.11)* | Strateji değil ARALIK ezberle (doku başına draw/set/iki-per payı); yarıdan fazlasıyla büyük-bet = value değil |
| **Karışık** *(27.12)* | Mix = eş-EV = bedava karar → rec'e karşı sabitle+exploit; dengeyi yalnız sayana sakla; canlıda araç tell'dir |
| **Sokak** *(27.13)* | Turn'de tam-aralık bet istisna (dört-kova çalış); her sadeleştirme sonraki sokağa BORÇ yazar |
| **İş-akışı** *(27.14)* | Anlamadığına teşhis merdiveni + asgari-kontrast çifti; konfüzyon bütçesi/kuluçka; iki-seçenek kuralı |

Dört filtre (27.8): **EV-kaynağı** ("sim'de izinli" ≠ iyi — EV'nin geldiği rakip-cevap düğümü senin havuzunda var mı?) · **Kaçınılmazlık** (beni ezen el her hatta zaten stack'liyorsa o dal düşer → çoğu kez raise) · **3-bet kimliği** (flat varsa polar-BÜYÜK, flat kapalıysa lineer-KÜÇÜK) · **Stack-bandı** (edge'in yaşadığı derinlik bandını yakın kararda fold'la garanti et).

## Bölüm 28 — PKO / Bounty: Ödülü Çipe Çevir, Aralığı Koru

*Kitap klasik NLH/ICM ekseninde; bounty (PKO) katmanı yoktu. PKO'da ikinci bir para birimi vardır — kelle — ve o birim her preflop kararı değiştirir. Sayısal her slot \`(kalibre et)\`.*

### 28.0 Çekirdek: kelleyi HER kararda çipe çevir

Her elde kellenin o anki çip-değerini yeniden hesapla, bir elde yapıp diğerinde unutma — PKO'da ROI'yi en ucuz artıran şey preflop'a daha çok zaman ayırmaktır. Çipe çevrilmiş kelle, cover ettiğin oyuncuya karşı **negatif risk primi** üretir (B12'nin tersi): onu elemek çip + kelle kazandırır, o yüzden ona karşı call/agresyon eşiğin DÜŞER.

> **PKO'da cover ettiğin oyuncu senin için NEGATİF prim taşır: onu elemeye chipEV'den daha gevşek oynarsın. ICM'in aynası — orada busta kaybını, burada kelle-kazancını fiyatlarsın.**

### 28.1 Cover eden VPIP'i genişler — ama solver'ın uç flat'lerini alma

Bounty-farkındalı solver'lar kelleyi prim gibi modeller ve popülasyonun çok üstünde gevşek flat'ler (normalde flat edilmeyecek çok zayıf suited eller) verir. Prensibi al (genişle), spesifik gevşek kombo'yu alma — canlı saha o gevşekliği ödüllendirmez.

### 28.1-EK Cover eden SB OOP'ta genişlemez, SERTLEŞİR — flat → lineer 3-bet

Kök hata: 28.1'in "cover eden VPIP'i genişler" satırını OOP'ye taşıyıp cover eden SB olarak butona karşı zayıf suited / offsuit Kx'le flat'lemek. Mekanizma: buton, kendisini cover eden SB'ye karşı daha dar açar (kapsanan refleksi, 28.8); aralık-vs-aralık fringe suited ellerin equity'si düşer ve orta-derin stack'te OOP fringe flat kimseyi stack'lemez — kelle "büyük el yapıp tahsil" ister, fringe flat onu üretmez. Ne değişir: flat payı düşer, 3-bet payı yükselir (kalibre et); 3-bet dokusu LİNEER — chipEV'nin düşük suited polar blöfleri PKO'da yok, çünkü buton pozisyonda geniş çağırır ve fold'a düşen çöple pot şişirmek kelle vermez. Ayna: kapsanan SB aynı spotta limp yığını ve az 3-bet oynar (28.25/28.26) — iki SB'nin dokusu cover yönüyle yer değiştirir. Boy notu kelleden bağımsızdır (B29/B32): orta derinlikte büyük 3-bet + iki-sokak planı; çok derinde OOP 3-bet küçülür, önce offsuit auto-fold'ları al.

**Kural:** cover eden SB OOP'ta VPIP'i değil agresyonu genişlet — fringe flat kes, lineer 3-bet aç; "cover ediyorum → daha çok el" refleksi pozisyona bağlıdır.

### 28.2 Geniş flat/limp aralığını NUT'la koru — "dead money olma"

Arkanda reopen/squeeze edebilen varsa, geniş VPIP aralığına AA/KK/AK gibi nut'lar koy ki squeeze seni cezalandıramasın. Bu, B4.4 "3-bet ya da fold" refleksine PKO istisnasıdır: kelle avlamak için geniş girersin ama aralık korunmuş olmalı.

### 28.2-EK Nut-koruma cover-şartlıdır — arkadakini kapsıyorsan AK FLAT, kapsanıyorsan 3-bet

Kök hata: 28.2'yi "geniş flat'i her zaman nut'la koru" ya da "geniş açan lidere karşı AK'yı 3-bet'le, domine ediyorum" diye okumak. Üç parça. (1) Pozisyonda geniş açan cover edene karşı geniş flat (kalibre et) doğrudur — mesele kelle değil, aralık-vs-aralık; geniş açana karşı senin flat'in hâlâ sıkı taraftır. (2) O flat aralığı ARKADAKİ blind'ı sen kapsıyorsan AK/AQs/QQ+ ile korunur: blind geniş-açılış + geniş-flat gördüğünde lineer jam'ler; aralığında güçlü el yoksa neredeyse value-jam'e döner ve sen hep katlanırsın. Güçlü eller varsa rüya spot: blind jam'ler, açıcı katlanır, kelleyi sen alırsın. Arkadakiler seni kapsıyorsa rüya yok → AK 3-bet'e döner, flat aralığı daralır (kalibre et). (3) AK'yı geniş açıcıya 3-bet'lemek "equity itmek" değildir: onun genişlemesi suited çöptedir, domine ettiğin offsuit Ax 3-bet'e katlanır — kaçmasını istemediğin tam o eller kaçar. Flat, o offsuit çöpü potta tutar. Fren: nut'la korunmuş aralık bile iki jam'e karşı çoğunlukla katlanır — "üç kelle var" diye suited bağlantılıyla gamble yok.

**Kural:** geniş flat'i nut'la koru (28.2) AMA rüya yalnız arkadakini kapsıyorsan; kapsanıyorsan AK'yı 3-bet'e taşı.

### 28.3 Cover ediyorsan LIMP-ağırlıklı VPIP

Limp daha az çip riske atar → daha çok el oyna → daha çok kelle avla. Raise yalnız fold equity üretiyorsa mantıklı; çok kısa/kelleli stack arkandayken raise fold equity üretmez (çok kısa stack'ler jam'le çok sık reopen eder — kalibre et), o yüzden limp baskın. Kellesiz ICM'de liderin limp/iso'su ayrı motordur — orta stack'in limp'ini suited bağlantılıyla iso'la, offsuit çöple değil (12.2-EK-4). Limp aralığı geniş ama korunmuş (28.2). Bant: orta-derin stack ve kelleli-kısa-arkada; sığ HU-BvB'de tersi — limp değil jam (28.3-EK).

### 28.3-EK Sığ HU-BvB'de kelle limp-tuzağını siler — cover eden SB limp'lemez, jam'ler

Kök hata: ICM'in sığ BvB "limp-ağırlıklı" dokusunu PKO'ya taşımak — ya da 28.3'ü "cover ediyorsan her derinlikte limp" diye okumak. Mekanizma: ICM'de sığ SB limp'ler, çünkü jam'lediği ellerin equity'si yetmez ve tepeyi limp-call-all-in tuzağıyla korur. PKO'da cover eden SB için kelle o equity açığını kapatır: BB'nin standart call aralığına karşı ham equity + kelle jam'i öder → "oynanmaya değer" her el jam'e gider, tuzak dilimi gereksizleşir. Tuzak yoksa dip de limp'leyemez (korumasız limp her iso'ya katlanır) → limp çöker, aralık SIKI ama JAM-ağırlıklı: kellesizden daha az el, daha çok all-in (kabaca 12–20bb bandı, kalibre et). Ters sezgi ama yön nettir. İki ek: (a) domine eden yüksek suited / Kx-Qx tepeyi jam'leme — non-all-in raise, BB'nin domine ettiğin call'ları potta kalsın (28.7); (b) havuz "limp'e kimse jam'lemez" sanıp dipten genişler — o limp yığını küçük iso'ya (kalibre et) katlanır, bedava paradır. Bant: 28.3'ün limp rejimi daha derin ve kelleli-kısa-arkada bandındadır; sığ HU-BvB'de tersi çalışır.

### 28.4 "Kellesi ≈ kendi stack'i" çok kısa stack = ekstrem izolasyon dinamiği

Herkes planını onu izole etmek üzere kurar. Kısa stack'in POZİSYONU stratejini belirler:

- **BB'deyse** (aksiyonu kapatır, reopen ihtimali en düşük) → önündekiler daha çok 3-bet edebilir.
- **SB/erken pozisyondaysa** (jam'le reopen eder) → önündekiler flat aralığını nut'la korur.

İzolasyon boyu kendi derinliğine bağlı: derinsen "first-raise" (kısa reopen edemesin diye gereği kadar büyük — reopen'ı reddet); sığsan min-raise (kısanın jam'le reopen'ına izin ver, çek).

### 28.4-EK Arkada karışık stack'ler → jam kârlı olsa bile raise üstündür

Arkası tek tip mikro-kısaysa bas jam'i — en dipteki çöp hariç her şey gider (kalibre et). Ama arkada kısa ile orta karışıksa "jam kârlı" diye jam'leme; raise'le. Kısalar itince zaten ödüyorsun; orta stack uyandığında çöpünü bedavaya atar, güçlünle postflop oynarsın. Kök hata, tek rakam ezberleyip masadaki stack dağılımını okumamak.

**Kural:** open tipini el değil arkadaki stack dokusu seçer — tek tip mikro-kısa arkada jam, kısa+orta karışıkken raise: kısaların jam'ine zaten ödersin, orta stack'e çöpünü bedavaya attırma.

### 28.5 Mystery bounty = preflop oyunu / sandbox

Devasa varyans (büyük roll şart), popülasyon postflop clueless. Ana edge: IP geniş limp + korunmuş aralık; insanlar limp düğümünü kötü oynar. Kelle değeri ITM boyunca DEĞİŞİR (büyük kelleler çekildikçe düşer); kaba hesap = canlı kelle toplamı / kalan oyuncu.

### 28.6 Net prim: iki primi tek sayıya indir

Kök hata, ICM'i ve kelleyi iki ayrı ders gibi öğrenip masada ayrı ayrı "hissetmek". Tek sayı tut: net prim = ICM-primi − kelle indirimi; indirimi ölçmek için hedefin kellesini güncel çevrimle BB'ye çevir ve efektif stack'le kıyasla (kalibre et). Kelle stack'e yaklaştıysa net prim derin negatiftir, herhangi-iki bölgesindesin; kelle birkaç BB'ye eridiyse (kalibre et) el kellesiz ICM'dir, standart matrisin aynen geçerli. İşareti de doğru oku: negatif prim ÇAĞRI primidir, blöf primi değil — indirim yalnız cover edende olur: kelleli kısaya 3-bet-fold yoktur çünkü jam'ine karşı kelle oddsuyla sen hep ödersin, ama blöf fold equity'n yalnız SENİ cover eden rakiplere karşı düşer. Cover ettiğinde genişlemeni lineer ve call'la yap; blöf-jam'i kellesiz turnuvaya sakla.

### 28.6-EK Yapısal PKO indirimi: prim HERKES için düşer — derin FT'de matris chipEV'ye yaklaşır

28.6'nın kelle indirimi yalnız cover edende. İkinci, yapıdan gelen bir indirim daha var: havuzun bir kısmı kelle havuzudur ve ICM'le dağıtılmaz; bust'ın toplam $ maliyeti kelle equity'sini de içerir, ama chipEV üstü PRİM yalnız ICM'lenen havuz payından doğar — kelle payı kabaca chip-lineer olduğundan prim eklemez → aynı stack dağılımında prim kellesiz turnuvaya göre belirgin düşer — KAPSANAN için de, kimseyi elemese bile *(kabaca yarıya; kelle payına bağlı, kalibre et)*. Yön korunur: kapsanan hâlâ prim öder, daha az; cover eden iki indirimi üst üste alır. Net prim = (ICM primi × yapısal çarpan) − kelle indirimi.

**Derin PKO FT'de sonuç:** preflop aralık şekilleri çoğunlukla chipEV'ye yakın kalır — 3-bet/flat/limp-raise dokusu dahil *(şekil ve bb bandı: kalibre et)*; "FT'deyim, sık" refleksi yok. Sapma yalnız kısa ve kelleli yığın çevresinde açılır; kendi kellen stack'ine yaklaştığında ICM refleksini aç. Seni cover eden blind 3-bet yerine flat'liyorsa açılışı genişlet — kapsananın tightlığının sebebi 3-bet baskısıdır.

**Gelecek-oyun iki yönde:** solver double-up sonrası cover kazancını saymaz → sınırdaki cover-eden call'larda bir tık gevşek *(sınırda)*; ama masada şişkin kelleli kısa varken kaybedince cover'ını söndürecek marjinal gamble'dan pas (28.11) — "kazansam kimi cover ediyorum, kaybetsem kimi edemiyorum, bekleyen kelle var mı?" (B24.2'ye beşinci soru).

### 28.7 Cover yönü preflop malzemesini seçer

Kök hata, her all-in'e aynı el listesiyle gitmek: jam yelpazesinin dokusu cover yönüne göre tersine döner. Kapsanıyorsan rakip kellen için zaten ödeyecek — jam'i doğrusallaştır: geniş call menzilini domine eden yüksek kartı it; flip satın alan suited connector'ı ve kimseyi katlatmayan blocker-jam'i çöpe at. Cover edensen ayna döner: kısa senin kelleni kazanamaz, o yüzden dar öder — yüksek kartla gelir, iyi suited'larını katlar; şimdi suited-bağlantılı jam altındır: dar call menzilinin yüksek kartları suited-bağlantılıyı domine edemez, çağrıldığında equity'n canlı kalır; arkandaki çöp ise katlanıp ölü para bırakır — jam'in tam o ölü parayı toplar. 3-bet'te boyutu yalnız derinliğe değil cover yönüne de bağla: seni cover eden açıcıya küçük boyut bedava kârdır, büyük git; sen cover ediyorsan küçük-lineer kur (kalibre et) — lineer ama alt ucu kaymış: value orta çiftlere iner, merge dilimi (KQ/AJ/suited Ax) 3-bet yerine flat'e gider (28.8-EK). Kompozisyon da yön ister: jam'e karşı katlayacağın eli hiç 3-bet'leme — suited asları call defterine geçir, 3-bet'i kısa ittiğinde tereddütsüz ödeyeceğin ellerden kur.

### 28.8 Kapsananın çöken ağacı: ya jam ya call

Kök hata: kapsanan kısanın "baskım düşük, geniş jam'lerim" demesi — yön ters. Kellen rakiplerin ödeme eşiğini düşürür; fold equity çökünce jam aralığın kellesiz bubble'dakinden bile DAR olmalı (kalibre et). Makasın öbür ağzı lehine işler: biri sana jam'lediğinde ödediğin ICM-primi normalin altındadır — stack-off eşiğin GENİŞ; kelle elinden jam'i alır, karşılığında çağrıyı verir. Ağaç da ikiye iner: kapsananın küçük 3-bet'i normal genişlikte açan cover edene karşı blöf değil bağıştır (ultra-geniş açan lider istisnası: 28.8-EK) — kimse kelleni masada bırakıp katlanmaz — ve arkadan squeeze gelecek masada canavarla tuzak kurmak kök hatanın kendisidir. Tepeni doğrusal jam'le, kalanını call defterine yaz; kapsananın lüksü yok, tahsilatı var.

### 28.8-EK Cover edenin 3-bet'i aşağı genişler → 4-bet jam eşiğin iner; istisna: ultra-geniş lidere küçük POLAR 3-bet

İki parça. **(A)** Kelleli kısa olarak açıp 3-bet yiyince "3-bet = QQ+/AK + polar blöf" okuması PKO'da yanlıştır. Seni cover eden 3-bet'çi kelle için value'sunu aşağı çeker: orta çiftler (88/99) ve AJs sınıfı artık value 3-bet'tir, jam'ine kelle oddsuyla ödemeye hazırdır (kalibre et); kellesizde merge 3-bet'lenen KQ/AJ/suited Ax flat'e kayar. Sonuç: value-ağırlıklı ama ince 3-bet aralığı — JJ/TT senin için 4-bet jam'dir, katlanacak el değil; 99'dan çağrı bulman fiyatın parçası. **(B)** 28.8'in "küçük 3-bet bağıştır"ı normal genişlikte açan cover eden içindir. Bağış, rakibin kellen için ÖDEYEBİLECEĞİ ele sahip olmasını gerektirir; açılışın büyük kısmıyla (kabaca %70+, kalibre et) giren lider aralığının çoğuyla 3-bet'e otomatik katlanır, 4-bet jam'i dar ve tahmin edilebilirdir. Orta-iyi stack'le jam de bozuk: kazanç birkaç bb, risk tüm stack ve pozisyon. Küçük polar 3-bet (~2x, kalibre et) onu iki hataya zorlar — ya çok katlanır ya çok 4-bet blöfler. Malzeme: fold'a düşen A-blocker'lı offsuit çöp (A7o/A5o tipi) — merge el değil; jam gelince katlan. Şart üçlü: ultra-geniş açan + dar 4-bet jam + jam'i pahalı kılan stack.

### 28.9 Kelle sabit değil: enflasyon, saha, çevrim

Kök hata: kelleyi çipe bir kez çevirip turnuva boyunca sabit taşımak. Kelle havuzu sahadan yavaş erir; aynı kelle geç fazda erken fazdan daha çok chip eder (kalibre et) — çevrimi her büyük kararda tazele, çünkü havuz dağıldıkça chip'in doları düşer. Saha büyüklüğü iki primin hakemidir: dev sahada geç aşamada en şişkin kelle bile birkaç BB'dir (kalibre et) — terimi sil, kellesiz ICM oyna; küçük sahada kelle ortalama stack'in ciddi parçasıdır — net prim aşağı iner, kelle konuşur. Kısa jam'e karşı eşik ayrıca kayar: aynı kelle daha az riskle alınır, oran lehine döner — call eşiğini düz-ortalama hesabın söylediğinden de aşağı çek (kalibre et). Oturmadan önce tek kontrol: en büyük kelle kaç BB ve ortalama stack'in ne kadarı?

### 28.10 Balon paradoksu: kellen fold equity'ni eritir

Kök hata: "risk primim düşük, öyleyse balonda geniş jam" çıkarımı. Primi düşüren mekanizmanın kendisi — kafandaki kelle — rakiplerin call aralığını genişletir; fold equity'n erir, seni her zamankinden çok öderler. Sonuç paradoks ama net: balonda kelleli kısa stack, kellesiz turnuvadakinden DAHA SIKI jam'ler (kalibre et). Marjinal spotu ancak double-up sonrası ekstra oyuncuları cover edecek olman haklı çıkarır.

### 28.11 Cover'ın kalitesi: pozisyon çarpanı, kırılgan statü

Kök hata: cover'ı skaler sanmak — kaç kişinin kapsadığını saymak. Cover çarpı pozisyondur: arkanda pozisyonlu tek coverer açılış aralığını kısar (kalibre et); blind'lardaki iki coverer neredeyse hiç kısmaz, flop'u pozisyonda oynarsın. İkinci kalite testi kalınlık: masayı kıl payı kapsıyorsan cover kaybedilebilir bir statüdür — tek all-in'de söner ve prim ödeyen tarafa düşersin; solver future-game'i görmez diye sen de görmezlik etme. Marjinal cover'da en ince jam'leri kes, tam genişliği kalın cover'a sakla (kalibre et); kelleler stack'lere göre sığken bu tartışma zaten kapanır.

### 28.11-EK Cover kaybını ağırlıklandır — tiebreaker'dır, karar değil

Kök hata: 28.11'in "kırılgan cover" uyarısını her karara sabit ağırlıkla sokmak — "bu call'ı kaybedersem X'i kapsamam" diye net +EV spotu atmak ya da kaybedince kapsamayı bırakacağın oyuncuyu hiç saymamak. Mekanizma: cover kaybının değeri, o oyuncuyla gerçekten stack-off olma olasılığıyla çarpılır. Kelleli rakip orta stack'teyse ve masa doluysa o all-in seyrek gelir → ağırlık düşük; rakip jam bandına inmişse jam'i her orbit gelir → ağırlık yüksek (kalibre et). İkinci kural: ağırlık yalnız SINIRDAKİ kararda işler — eş-EV'ye yakın turn call/fold'da "call edersem dört kişiyi kapsamayı bırakıyorum" fold'a devirir; net +EV spotta cover kaybı fold gerekçesi değildir. Prosedür: (1) karar sınırda mı? değilse cover'ı unut; (2) sınırdaysa kaybedince kapsamayı bırakacağın oyuncuları say; (3) her birini onunla stack-off olasılığıyla ağırlıkla — kısa ve kelleli sayılır, derin sayılmaz. 28.6-EK'nin beşinci sorusunun kalibrasyonu budur.

### 28.12 Cold-call kapısı ve kelepçeli squeeze

Kök hata: 3-bet'li potta karara elinden başlamak — önce stack'lere bak. Cold-call kapısı: açanı ya da 3-bet'çiyi, en az birini cover etmiyorsan girme; kimsenin kellesini alamıyorsan aynı el fold'dur, kapı açıksa el konuşur. Flat kararında arka zinciri oku: açıcı arkandaki muhtemel squeezer'ı cover ediyorsa squeezer kelepçelidir — squeeze gelmez, flop'u ucuza görürsün, flat aralığın genişler (kalibre et). Blöf malzemesi de buradan çıkar: seni cover eden rakip geniş call verir, fold gelmeyecek — blocker'lı offsuit çöple değil, flop'ta bir şeye dönüşen suited-bağlantılı ellerle blöfle; polar blöf refleksini fold equity'nin öldüğü yere taşıma.

### 28.12-EK Re-jam kapısı: kısanın jam'ine karşı genişliği kısa değil, aradaki flat'çi seçer

Kök hata: "açtım, biri flat'ledi, kısa jam'ledi → kısaya karşı elim yeter mi?" diye kısaya bakmak. Re-jam'in kısayı değil flat'çiyi çağırır; karar seninle flat'çi arasındaki cover ilişkisine bağlıdır. Flat'çi seni cover ediyorsa senin kellen için geniş over-call eder (çiftleri, broadway'i bırakmaz) — re-jam'in tüm stack'ini iki yelpazeye karşı bağlar. Sen flat'çiyi cover ediyorsan o dar öder ya da katlanır; jam'in çoğunlukla kısaya karşı HU kalır ve kısanın kellesi zaten ölü paradır. Aynı düğümde yön çevrilince aralık uçtan uca değişir: kapsanıyorsan re-jam çift + suited broadway'e sıkışır (kalibre et) — düşük suited Ax en kötü malzeme: kısanın lineer jam yelpazesi Ax doludur, flat'çinin çiftleri onu ezer; suited broadway hem çiftle hem Ax'le flip eder. Kapsıyorsan re-jam açılış aralığının büyük kısmına yaklaşır (kalibre et) — flat'çi çağırırsa onu da kelle oddsuyla oynarsın.

**Kural:** kısa ittiğinde önce "flat'çi beni mi kapsıyor, ben mi onu?" — kapsanıyorsan çift/suited broadway ile re-jam, suited Ax fold; kapsıyorsan geniş re-jam, çünkü riskin kısanın stack'idir, flat'çinin değil.

### 28.13 Kelle ölü antedir: limp rejimi

Kök hata: primi stack'inin katlarına varmış kısayı büyük raise'le "izole etmeye" çalışmak — o kelle ölü antedir, hangi boyutu seçersen seç yarım düzgün el tutan herkes fiyat alır. Rejimi değiştir: bütün oynanabilir aralığını limp'le, multiway'i kucakla, kısa ittiğinde sürüyle üstüne çök; senden sonra limp'ler yığıldıkça value-jam aralığını genişlet (kalibre et). Kendi kellen için ayna eşik var: prim stack'inin küçük parçasıyken limp yaşar, prim stack'e yaklaştıkça limp her seferinde jam yer — kes; eşitlendiği an saf jam-ya-fold (kalibre et), geç pozisyonda cover altındayken de raise jam mıknatısıdır — limp'le ya da direkt it. Tek monoton bant: prim stack'e yaklaştıkça limp azalır, hat jam-ya-fold'a gider; prim stack'i belirgin AŞIP stack de kısaysa aynı mıknatıs istenen şeye döner, hat min-raise'e kayar — limp küçük iso çeker ve flat'ler 1bb'yle ucuz kalır, min-raise izolatörü jam'e zorlar ve katlanan flat'lerin ölü parasını büyütür; raise-fold iki bantta da yok, geçiş sınırı kalibre et (28.23). Masanın öbür yanındaysan panzehiri bil: limp yelpazesi çöp değil, suited ve yapışkandır — küçük iso kimseyi katlatmaz, cezalandıracaksan büyük bas (kalibre et); rakipler limp'lere küçük iso basıyorsa limp senin için bedava paradır, frekansı aç.

### 28.14 Multiway all-in: önce kelleleri pota yaz

Kök hata: multiway all-in'de oranı sadece çiplerle kurmak. Prosedür: yalnız SENİN cover ettiğin jam'lerin kellesini güncel çevrimle BB'ye çevir — seni cover eden yığının kellesini kazanamazsın, o hesaba girmez (kalibre et); kazanabildiğin kelleleri ölü para olarak pota yaz, oranı ondan sonra hesapla — "öde-kazan" sandığın yer "öde, artı senin alabileceğin kelleler kazan"dır ve o fark orta suited elleri fold'dan call'a taşır. El seçiminde soru "elim güçlü mü" değil, "kaç yelpazeye karşıyım": tek yelpazeye karşı yüksek kart öder, suited connector atarsın; birden çok yelpazeye karşı tersine döner — offsuit yüksek kart ve zayıf Ax sürekli domine edilir, suited broadway/çift ve suited-bağlantılılar nefes alır — düşük suited Ax en kötü sınıftır (kalibre et). Tek istisna ezber: mikro yığınların üstüne bir dev cover jam'i geldiyse mikroların yalnız YELPAZELERİNİ equity hesabından çıkar (elini devin yelpazesine karşı fiyatla) — ama çiplerini ve kazanabileceğin kellelerini ölü para olarak potta tut, hepsini yenersen o kelleler senindir; equity'de yine yüksek kart kazanır.

### 28.14-EK Multiway all-in yön kuralı: her ek KAPSANAN jam over-call'ı genişletir, seni kapsayan daraltır — ICM kesintisi sırayla katlanır

Kök hata: "üçüncü all-in geldi, spot ağırlaştı, daralayım" refleksi. Yön kapsama ilişkisine bağlı: ikinci ve üçüncü jam'ci senden kısaysa over-call aralığın GENİŞLER — kısanın equity eşiği düşük, yelpazesi zayıf, kellesi ve stack'i pota ölü para; 28.14'ün "kaç yelpazeye karşıyım" sorusu lehine çalışır (sınırda geniş, kalibre et). Aynı jam seni kapsıyorsa tersi: over-call belirgin daralır — kelle almadığın bir yelpazeye stack'ini bağlarsın. Ortadaki oyuncu için ayna: kısanın jam'i üstüne re-jam'lediğinde arkanda seni cover eden açıcıya senin + kısanın kellesini TEK pota koyarsın — call eşiği iki kelleyle çöker, fold equity'n silinir; kapsanan orta stack olarak re-jam yerine call/fold ekseninde kal (kalibre et). İkinci katman ICM: aynı spotta ilk jam'cinin aralığı neredeyse değişmez (fold equity'si var), kapsanan re-jam'ci biraz daralır, over-call'cı en çok daralır (kalibre et) — paradan uzakta bile.

**Kural:** multiway all-in'de önce yönü say (kapsanan ek jam = genişle, kapsayan ek jam = daral), sonra rolünü: jam'ci ICM'i en az öder, over-call'cı en çok — over-call'da chipEV aralığını bir kademe kırp.

### 28.15 Mikronun fold opsiyonu senin jam hakkını çevirir

Kök hata: "masada mikro var, herkes basamağa sıkıştı, ben jam'lerim" ezberi. Mikro zorunlu all-in'se basamak herkese bedavadır ve orta stack'ler seni rahat öder — jam'i kes, aralığını daralt. Mikro hâlâ katlanabiliyorsa (kalibre et) denge döner: seni ödeyecek oyuncu kaybederse basamağı mikroya kaptıracağı için daha dar ödemeye iter — ama bu "dar ödeme" mutlak değil; ancak basamak/ICM riski senin kelle-primini aştığında geçerli. Seni kaplayan oyuncu kelleni de kazanacağından jam hakkın kellenin büyüklüğüyle TERS orantılıdır — kellen ne kadar büyükse seni o kadar geniş öderler. Karar ağacının ilk sorusu yine de stack değil, opsiyon: mikro katlanabiliyor mu?

### 28.16 Mystery'yi yapı sayfası fiyatlar

Kök hata: her mystery'yi aynı agresyonla oynamak — zarfın fiyatı çekilişte değil, yapı sayfasında belirlenir. Üç kalemi oku: faz ne zaman başlıyor, havuzun ne kadarı kelleye gidiyor, overlay var mı — aynı buy-in'de ortalama zarfı katlara varan farkla oynatırlar (kalibre et); faz başlamadan zarf yoktur, eleme hiçbir şey ödemez — faz öncesini normal turnuva gibi oyna, kelle agresyonunu faz kapısında aç. Sonra çekiliş rejimini oku: zarflar sonda açılıyorsa beklenen kelle DOLAR olarak bitişe kadar sabittir — çip karşılığı değil: havuz ödendikçe çipin doları düşer, çevrimi tazele (28.24); canlı açılıyorsa panoya bak — büyük zarflar çekildikçe kalan ortalama düşer, küçükler süpürüldükçe yükselir, hiç çekiliş yoksa yerinden oynamaz. Geç kayıt da aynı fiyat okumasıdır: normal kelleli turnuvada erimiş havuza tam fiyat ödersin — saha belirli ölçüde eridiyse oturma (kalibre et); mystery'de zarf fazı başlamadıysa havuz tamdır, ceza büyük ölçüde silinir.

### 28.17 Mystery aralıkları: oranı kim taşıyor

Kök hata: "kelle var, genişle" ezberi — genişleyen taraf, oranın lehine döndüğü taraftır, sen değil. Kelle kural değil soru verir: kimin kellesi, kimin yığınına göre büyük? Kellen kendi yığınına yaklaştıysa fold equity'n öldü, herkes seni geniş öder: jam'i daralt, yüksek-kart ağırlıklı kur — masadaki oran ne derse desin any-two jam yok. Çok yönlü spotta da denklemi sadeleştir: parası gerçekten sayılan tek rakibi bul, spotu ona indirge, aralığını ona karşı fiyatla.

### 28.19 Kelle etkisi flop'ta yaşar; turn/river'da yalnız stack bağlanmıyorsa söner

Kök hata: derin pot'ta cover haritasını her sokakta yeniden uygulamak — kapsanınca her fıçıyı kesmek, cover edince her fıçıyı büyütmek. Mekanizma: cover eden flop'u daha geniş devam eder (draw kovalar, nut peşindedir), bu yüzden turn'e daha çok otomatik-fold'la gelir; kapsanan, blöf isteksizliğine rağmen o fold'ların hesabıyla normal frekansta barrel'lar. Ayna da işler: cover edenin barrel iştahı yüksek ama kapsanan flop'u dar devam etti, turn aralığı yoğun → bulacak fold yok. İki kuvvet birbirini siler — ama yalnız bahis sonrası SPR'ın hâlâ yüksek kaldığı (~2+, kalibre et), stack'i BAĞLAMAYAN turn/river barrel'larında: orada bet frekansı, boyu ve bluff-catch eşiği iki yönde neredeyse aynıdır *(sapma birkaç puan — kalibre et)*. Kitabın 30–60bb baseline'ında flop bet-call sonrası turn barrel'ı çoğunlukla SPR'ı ~1 civarına ya da altına (60bb'de ~1.5) çeker (kalibre et) — yani turn bahsi fiilen stack'i bağlayan düğümdür ve orada sönme yok: kelle pot-odds'a girmeye devam eder, SPR düştükçe ağırlığı büyür — cover eden kapsananın jam'ine bir kademe geniş bluff-catch eder, kapsanan blöf-jam'ini bir kademe kısar, value-jam'i standart ya da bir kademe ince (geniş ödendiği için) *(kalibre et)*.

**Kural:** PKO postflop ayarının tamamını flop c-bet / flop savunma düğümüne yükle (28.20–28.22); bahis sonrası SPR yüksek kalıyorsa (derin pot) turn ve river'ı kellesiz standardınla oyna — cover haritasını orada "yeniden uygulama", aralıklara zaten gömülü. Turn/river'da kalan fark stack'i bağlayan düğümlerdedir (30–60bb'de flop bet-call sonrası turn çoğunlukla budur): cover eden temiz runout'ta value-jam'i bir kademe inceltir ve kapsananın jam'ini geniş öder; kapsanan blöf-jam'ini kısar, value-jam'ini standart ya da bir kademe ince tutar *(kalibre et)* — cover edenin jam'ine kelle için değil el için katlanır. Postflop kelle çözücüsü yok; bunlar sınır koşullu prensiplerdir, solver kuralı değil.

### 28.19-EK PKO'da polar river boyu: JAM ya da check — ve cover edenin çökük river aralığına value'yu küçült

Kök hata: kellesiz turnuvanın polar river dokusunu (büyük non-all-in + bloklu küçük + "birkaç bb geride bırak") PKO'ya taşımak. Üç mekanizma. (1) Kapsanan olarak polar river'da büyük boy çoğunlukla JAM'dir — value'n (kelle için geniş ödendiğinden per+ dahil) jam'e gider, blöfün de fold equity için jam'e gitmek zorundadır; havuz PKO'da jam'e karşı call dengesini kuramaz. Eşik derinlik: orta stack'e kadar jam, üstünde büyük non-all-in (kalibre et); kelle ne kadar ilgiliyse eşik o kadar yukarı. (2) "Son birkaç bb'yi geride bırak" hilesi teoride bluff-catcher'a kötü fiyat verir, ama PKO'da rakibin kelle oddsu değişir ve havuz tepkisi rastgeleleşir — jam'le; blöf frekansını kelleye göre ayarla, boyu değil (sınırda). (3) Cover eden flop'u kelle için geniş c-bet eder (28.20) → check-check'le river'a gelen aralığı kellesizden ZAYIFTIR; kapsanan olarak nut'unla jam standart, güçlü-ama-nut-olmayan value'yla bir boy küçük — o zayıf aralıktan daha geniş çağrı alırsın (kalibre et).

**Kural:** kapsanan river polar → jam-ya-check, boy oyunu yok; value boyunu yalnız cover edenin çökük river aralığına karşı küçült.

### 28.20 Cover eden flop'u: IP'de aralık-bet (blöf değil), OOP'de nut-potansiyeli devam

**IP:** negatif prim "equity'ni pota daha çok it" demektir; check-back'ler aralık-bet'e, küçük boy orta boya, equity avantajı belirginse büyük boya kayar *(kademeler: kalibre et)*. Bu blöf artışı DEĞİL: kapsanan rakibin aralığı kelle teşviksizdir, normal katlanır; artan şey aralık-bet frekansı ve daha kalın value'dur — kellesizde check-back edilen elle üç sokak ince value. Soru "check-back mi" değil "hangi boy"; orta boy varsayılan, kuru yüksek-kart board'da bile *(kalibre et)*. Check-raise gelince ağaç bet-call/fold: geniş yüksek-kart+backdoor devamlarını koruyan yol call'dır, 3-bet değil — 3-bet'i nut'a sakla.

**OOP (BB):** eklenen devamlar per değil, nut'a dönüşebilen çizgilerdir — gutshot, backdoor flush/straight, bunları taşıyan per'siz yüksek kartlar. Kelle ancak rakibi stack-off'a sokan bir el yaparsan tahsil edilir: daha az katla, daha çok check-raise, güçlü/kombo draw'la daha çok jam (kellesizde check-call'lanan combo draw burada stack'e gider *(eşik: kalibre et)*), yavaş oyunu azalt. Filtre: "nut yapabilir mi?" — kelleyi çekilişi olan ele bağla, bluff-catcher'a değil. Kapsanan taraf için 28.21.

### 28.21 Kapsanan IP: nut avantajı equity avantajını ezer — aralık-bet çoğunlukla yok, bet-fold'u kabul et

Kök hata: kapsanan olarak dar açtığın için equity avantajını hissedip düşük eşleşmiş / düşük bağlantılı board'da aralık-bet basmak. Cover eden OOP bu board'larda çok geniş check-raise eder — backdoor'lu suited eller, iki yüksek kart + backdoor, orta çiftler — çünkü kelleye giden yol oradan geçer; kapsanan IP ise o check-raise'e karşı aralığının büyük kısmıyla bet-fold'a düşer, daha dar check-raise'e bile daha çok katlanır *(fold oranı farkı: kalibre et)*. Equity avantajı büyük olsa da bet frekansı çoğunlukla DÜŞER.

**Kural:** kapsanan IP olarak "nut kimde" sorusunu equity'den önce sor; nut rakipteyse check-back oranını yükselt *(kalibre et)*, bet'i polar tut, küçük aralık-bet'i çoğunlukla bırak, sınırda tut *(kalibre et)*; yüksek/kuru board'da (A/K-high, nut dar aralığında sende) aralık-bet'i geri getir, orta/bağlantılı board'da check-back'i koru. Check-raise yiyince bet-fold'u kabul et, offsuit broadway'i bet-call'a zorlama. Kesilen blöftür, value değil (21.3-EK): blöf hacmini düşür, value'yu koru, semi-blöfü equity'yle fiyatla. Cover eden OOP olarak aynı board'larda check-raise frekansını aç — hedefini bil: kapsanan IP katlanır, cover eden IP katlanmaz.

### 28.21-EK Kapsananın blöfü ölmez, adres değiştirir — hero-fold'a değil auto-fold'a

Kök hata: 21.3-EK/28.21'i "kapsanıyorum → blöf yok" diye okumak. Mekanizma: cover edenin kelle için geniş ödemesi ELİ olduğunda çalışır; eli yoksa kelle onu ödetmez. Çok geniş açan cover eden kilitli düşük-orta board'da (A74 kuru tipi) aralık-bet basıyorsa aralığının büyük kısmı otomatik-fold'dur — kelle motivasyonu K9o'yu check-raise'e karşı tutamaz; hero-fold beklemezsin, auto-fold alırsın. Kapsanan BB olarak orada küçük check-raise'i (min-raise'in biraz üstü, kalibre et) geniş kurabilirsin; malzeme, rakibin katlanacak ellerini BLOKE ETMEYEN çöp (board kartlarını ve Kx/Qx'i tutmayan). Aynı hat bağlantılı board'da (T96, 985 tipi) ölür — geniş aralık orada per/draw'la devam eder, kelle motivasyonu devreye girer, 28.21 aynen geçerli. Ters yüz: seni izole edip kelleni almak isteyen rakip senden agresyon beklemez — kısa stack'in check-raise'ini gerçek okur.

**Kural:** kapsanan olarak blöf hacmini düşür (21.3-EK) ama sıfırlama; kalan blöfü rakibin aralığının ele sahip OLMADIĞI board'lara taşı — izni cover haritası değil, board dokusu verir.

### 28.22 Aralık dokusu cover yönünü ezer — kim nereyi bet'ler

"Cover eden daha çok bet'ler" ezberini board'dan bağımsız uygulama. Cover ayarı preflop'ta aralığı yeniden biçimlendirir: kapsanan dar ve yüksek-kart ağırlıklı açar, cover eden geniş ve suited-bağlantılı ağırlıklı açar; cover eden derin caller "BB gibi" geniş flat'ler. Bu doku flop'ta cover yönünü tersine çevirebilir:

- **A/K-yüksek board** dar-kapsanan aralığa daha iyi → kapsanan orada küçük boy aralık-bet; nut avantajı derinse frekansı düşürüp boyu büyüt (polar), blöf payını kapsanan olduğun için (ICM/PKO kesimi) kıs — polar boyun kendi blöf oranı değil, senin risk konumun kısıyor; cover edenin suited-bağlantılıları bricklemiştir → check artar.
- **Düşük/orta-bağlantılı board** tam tersi: cover edenin geniş aralığı bağlanır → aralık-bet, kırılgan çift ve backdoor'lu yüksek kartla flop-jam'e kadar gider (kısa kapsanan caller'ın yüksek-kart/suited-A çöpünü katlatır); dar-kapsanan aynı board'da check'e yakın.
- **Stab:** cover eden geniş caller polar-büyük, kapsanan yoğun caller sık-küçük *(kalibre et)*.

**Kural:** iki soru sırayla — (1) aralığım bu board'a nasıl çarptı, (2) cover yönü. (1) frekansın ana sürücüsüdür; (2) boyu ve frekansı ikinci derecede ayarlar — blöf payını kapsananda kısar, cover edende (PKO) açar. "Cover ediyorum" bet hakkı vermez; aralığın verir. Aralıklar cover'a göre değiştiyse doku baskındır; aynı tutulduysa cover etkisi saftır (28.20).

### 28.23 Kelle stack'ini aştıysa jam değil MIN-RAISE — ve BB'de bu kısanın jam'ine Ax'i geniş öde

**Kısa olarak (kapsanan, kellen stack'ini aşmış):** "herkes beni öder → jam" refleksi potu çok yönlü yapar — herkes kelle oddsuyla re-jam/over-call eder, equity'n bölünür. Min-raise aynı parayı riske atar — raise-fold çoğunlukla yok, hemen hiçbir elle katlanmazsın — ama zinciri değiştirir: arkadan flat'ler gelir, biri jam'ler, flat'ler katlanır; o para pota ölü kalır, sen daha az rakibe karşı daha büyük pota oynarsın. Aralık çoğunlukla min-raise; solver karışımı bir dilimi jam'de bırakabilir — çok yönlü potta iyi tutan çiftler jam'e, izolasyon isteyen Ax/yüksek-kart min-raise'e eğilimli *(hangi el sınıfları / bölüm: kalibre et)*. İki parametre BİRLİKTE gerekir: kelle > stack VE kısa stack *(kaç kat / üst bant: kalibre et)*. Tek monoton bant (28.13): prim stack'e yaklaştıkça limp azalır, hat jam-ya-fold'a gider; prim stack'i belirgin AŞIP stack de kısaysa hat min-raise'e kayar — raise-fold iki bantta da yok, geçiş sınırı kalibre et; stack kısa değilse normal open (raise-fold var), jam değil. ICM'de bu rejim yok: kelle oddsu olmadığından çok yönlü over-call problemi doğmaz, kısa için jam (fold equity) varsayılan kalır; yalnız izolasyon dinamiği benzer (büyük izole eder, orta basamak korkusuyla çekilir). 28.13'ün "limp jam yer → kes; raise jam mıknatısıdır" satırıyla aynı rejim: limp küçük iso çeker ve flat'ler 1bb'yle ucuz kalır, min-raise izolatörü jam'e zorlar ve katlanan flat'lerin ölü parasını büyütür — mıknatıs burada tam istediğin şeydir; kelle > stack VE kısa bandında 28.13'ün jam-ya-fold satırının yerini bu min-raise alır, EV farkı küçük ama tutarlı *(kalibre et)*. 28.8'in kapsanan için "ya jam ya call" ağacına tek istisna budur: bu bantta kapsanan kısanın min-raise'i raise-fold değil, jam'in zincir-değiştiren varyantıdır — fold dalı yine yok; 28.8'in "küçük 3-bet bağıştır" satırı aynen durur (bu bir OPEN'dır).

**BB olarak (cover ederken):** Ax'i ne kadar geniş ödeyeceğin kısanın JAM DOKUSUNA bağlıdır — önce dokuyu gözle. Kısa, aralığını yukarıdaki gibi bölüyorsa (oynanabilir Ax min-raise'e gitmiş, jam orta çift + seçili suited'a sıkışmış) zayıf Ax o jam'e karşı domine değildir: çifte karşı kicker çiftin üstündeyse ~flip, altındaysa belirgin geride *(kalibre et)*; suited'a önde; kelle pota ekli → Ax'i normalden geniş öde — HU'da kelle oddsu kicker'ı büyük ölçüde ezer; kicker'a göre bölme ancak pot çok yönlüyken (arkada over-caller varken) ya da kelle stack'e yakın-ama-küçükken *(kalibre et)*. "Ax'siz jam" showdown'da GÖRÜLMEDEN ezberi bozma: kısa jam'ine her Ax'i basıyorsa (dar-ama-Ax'li jam) standart savunma aynen durur *(sınırda — solver doğrulaması ister)*.

### 28.24 Zarfın çip fiyatı sahayla katlanır — dolar sabit olsa bile

Kök hata: kellenin dolar değerini bulup çip değerini de sabit sanmak. Havuz her elemeyle ödenip küçülür, oyundaki çip sabit kalır → bir çipin doları düşer → sabit dolarlı kelle daha çok çip eder. Sürücü kalan oyuncu sayısı değil, kalan saha YÜZDESİDİR: saha her yarılandığında zarfın çip-değeri bir basamak sıçrar (tek çipin doları düşer) *(basamak eşikleri ve çarpanları: kalibre et)*; canlı çekilişte büyük zarfların çekilmesi yavaşlatır, küçüklerin süpürülmesi hızlandırır. Büyük sahada aynı yüzde FT'den uzaktır → FT'ye gelindiğinde zarf daha çok başlangıç stack'i eder *(kalibre et)* — başlangıç-stack cinsinden; BB cinsinden ayrı soru: blind'lar hızlı büyüyorsa 28.9'un "birkaç BB" uyarısı geçerli kalır *(kalibre et)*.

**Prosedür (molada, dört adım):** (1) kelle $ = kalan kelle havuzu ÷ kalan oyuncu (canlı çekilişte çekilenleri düş); (2) kalan toplam ödül = kalan normal havuz + kalan kelle havuzu; (3) çip $ = kalan toplam ÷ oyundaki toplam çip; (4) kelle çip = (1) ÷ (3), BB'ye böl. Masada yaklaşık: "saha yüzde kaç kaldı?" → kendi yapıların için önceden çıkardığın başlangıç-stack tablosundan oku *(kalibre et)*. 28.16'nın "hesabı bir kez yap"ı DOLAR içindir; 28.9'un "geç fazda daha çok chip" prensibinin mekanizması budur. PKO'da aynı etki var, büyüyen kellede daha silik.

### 28.25 Limp pompası: kapsananın limp-reraise'i tuzak değil, pompadır

Kök hata: 28.8'in "tuzak kök hatadır" satırını limp'e de uygulamak — ya da B33.5'in "value limp-reraise'i daralt" havuz kuralını seni cover eden agresif rakibe karşı sürdürmek. Mekanizma: seni cover eden agresif rakip limp'ine limp-behind yapmaz, izole eder — HU kalıp SPR'yi düşürmek ve kelleni kovalamak için; iso aralığı lineer ve geniştir (suited eller, çiftler, offsuit As, broadway). Büyük limp-reraise'ine (SPR'yi bir-iki sokağa indiren boy, kalibre et) kelle motivasyonu onu geniş ÇAĞIRTIR: orta suited bağlantılı, AJ/ATs sınıfı, orta çift katlanmaz. Sonuç: raise-call-call'lı küçük multiway pot yerine domine ettiğin aralığa karşı düşük-SPR HU pot. Malzeme aralığının tepesi — TT+/AQ+ sınıfı, çoğu limp-reraise; chipEV'deki "premium'un bir dilimi" değil (kalibre et). Bant geniştir, kabaca 15bb'den derin stack'e (kalibre et), pozisyondan bağımsız. Tetik zorunlu: rakip agresif ETİKETLİ ve seni kapsıyor. Limp-behind yapan sakin cover edene karşı limp yalnız ucuz floptur, pompa değil — iso gelmiyorsa hattı kapat. B33'ün chipEV BvB'sinde kelle yoktur (33.6); bu, o katmanın PKO kolu.

**Kural:** kapsanan olarak agresif cover edene karşı tepeyi raise değil limp-reraise'le oyna — kellen, rakibin iso'sunu ve call'ını senin için genişletir.

### 28.26 Kapsanan SB'de B33 katmanları kayar: cover eden BB jam'lemez, iso eder

Kök hata: B33.2/33.3'ün chipEV katmanlarını kelle yönü değişince aynen taşımak. Dört kayma. (1) Seni cover eden derin BB raise'ine 3-bet-jam'lemez — pozisyonda flat'ler, büyük el yapıp kelleni almak ister; 3-bet'i yalnız tepe + çöp blöftür. Raise-fold korkusu düşer → güçlü suited (KQs/QJs/JTs sınıfı) çoğunlukla RAISE. (2) BB'nin iso'su kelle için genişler: kellesizde check edilen zayıf Ax izole eder → offsuit güçlü As (AJ/AQ/AK) ve çiftlerin limp-jam'i B33.2'nin blocker yarı-blöfü olmaktan çıkıp yarı-VALUE olur — domine ettiğin Ax'ten çağrı bulur; limp-jam ayrıca tüm limp aralığını iso'dan korur. (3) Non-all-in limp-reraise dilimi semi-value'dur (A9o/Q8s tipi): kötüden çağrı alır, iyiyi katlatmaz — B33.3'ün blocker-blöf kapağı değil. (4) Tepe (AA–JJ) raise, boy chipEV'den BÜYÜK (kalibre et): BB pozisyonda geniş öder, kellen masada — fiyatı sen kesersin. Zayıf offsuit broadway limp-call; equity itmez, raise değil.

**Kural:** kapsanan SB'de "kim jam'ler, kim iso eder" sorusunu kelle yönüyle yeniden sor — suited güçlüyü raise'e, offsuit güçlüyü limp-jam'e, tepeyi büyük raise'e yaz.

### 28.18 Cheat kartı

*(kalibre et: kelle→BB çevrimini her büyük kararda tazele; tüm eşikler kendi sahandan.)*

| Durum | Kural |
|---|---|
| **Net prim** | Tek sayı: ICM primi − kelle indirimi; indirim yalnız cover edende. Negatif prim ÇAĞRI primidir, blöf primi değil — genişlemeyi lineer + call'la yap |
| **Cover ediyorsan** | Eşik DÜŞER: limp-ağırlıklı geniş VPIP, aralığı NUT'la koru (AA/KK/AK); kısaya karşı suited-bağlantılı jam altın — dar call onu domine edemez |
| **Kapsanıyorsan** | Ağaç ikiye iner: ya jam ya call. Jam DAR (fold equity çökük), stack-off eşiği GENİŞ; küçük 3-bet bağıştır (ultra-geniş lidere polar istisna: 28.8-EK), trap kök hatadır — ama agresif cover edene karşı tepe limp-reraise'le pompa (28.25) |
| **Kelle sabit değil** | Aynı kelle geç fazda daha çok chip eder — çevrimi tazele. Dev sahada geç faz: kelle birkaç BB → terimi sil, kellesiz ICM oyna |
| **Balon paradoksu** | Kellen rakiplerin call'ını genişletir → fold equity erir: balonda kelleli kısa, kellesizden DAHA SIKI jam'ler *(kalibre et)* |
| **Cover kalitesi** | Cover × pozisyon: arkada pozisyonlu tek coverer aralığı kısar, blind'daki iki coverer kısmaz. Kıl-payı cover kırılgan — ince jam'leri kes |
| **Cold-call kapısı** | Açanı ya da 3-bet'çiyi cover etmiyorsan girme. Açıcı squeezer'ı cover ediyorsa squeeze kelepçeli → flat genişler |
| **Ölü-ante limp** | Kellesi şişmiş kısayı raise'le izole ETME — herkes fiyat alır. Limp'le, multiway'i kucakla, kısa ittiğinde sürüyle çök; kendi primin stack'ine yaklaştıkça limp azalır, eşitlenince saf jam-ya-fold; prim stack'i belirgin AŞIP stack de kısaysa hat min-raise'e kayar (mıknatıs istenen) — raise-fold iki bantta da yok, geçiş sınırı kalibre et (28.13/28.23) |
| **Multiway all-in** | Yalnız SENİN cover ettiğin kelleleri ölü para olarak pota yaz. Çok yelpazeye karşı suited broadway/çift ve suited-bağlantılı nefes alır, offsuit yüksek kart ve düşük suited Ax boğulur; her ek KAPSANAN jam over-call'ı genişletir, kapsayan daraltır (28.14-EK) |
| **Mikro fold-opsiyonu** | İlk soru stack değil opsiyon: mikro katlanabiliyor mu? Zorunlu all-in'se basamak herkese bedava → jam'i kes; jam hakkın kellenle TERS orantılı |
| **Mystery** | Zarfı yapı sayfası fiyatlar (faz başlangıcı / kelle payı / overlay); faz öncesi normal turnuva oyna. Kellen stack'ine yaklaştıysa any-two jam yok — yüksek-kart ağırlıklı daralt |

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

Pair+FD, combo draw — ince tek-pair'den DEĞİL (deep'te üç sokak value alamaz). Set'leri slowplay = numaradan değil, aralığın bir kısmı turn baskısını kaldıramadığı için range-koruması — ama koruma SONUÇTUR, sebep EV: bet'i ödeyecek el gitmiş ve rakip check'e blöf atacaksa check daha çok kazanır (32.6-EK-2, 26.2-EK-3); check'e blöf atmayan station'a karşı bet geri gelir.

### 29.4 Deep two-pair savunması: seni cep çifti değil, temiz iki-per korur

Derinde seni bluff-catcher pocket pair değil, düz tamamlamayan / cooler'lanmayan iki-per savunur. Turn/river'da "bu iki-per temiz mi?" diye sor — bağlantısız, kart-vermeyen bir yapı mı *(kalibre et)*.

### 29.5 Deep exploit: float → turn check-through → river stab

Zayıf/nitty deep rakibin flop c-bet'ini call'la (float); turn check-check geldiğinde ve rakip preflop çok sıkı savunmuşsa (orta-el check-call'ları yok → river'da overfold'a yatkın) river'da küçük IP stab (delayed stab) kötü-kurulmuş savunmaya over-perform eder. *(kalibre et — genel prensip; spesifik el kopyalanmaz.)*

### 29.6 Cheat kartı

*(kalibre et: hangi el hangi hatta pure/mix, orta-cep bandı, "temiz iki-per" tanımı — kendi solver'ından.)*

| Konu | Kural |
|---|---|
| **Preflop** | Aralık GENİŞLEMEZ, KARIŞIR — flat yine en geniş; güçlü eller flat/3-bet mix'e, implied-odds spekülatifleri sınırlı ekler *(kalibre et)* |
| **3-bet kurulumu** | Orta CEP'leri karışıma koy — düşük board kapsaman yoksa rakip seni lead'le soyar; preflop boşluk postflop'a cascade eder |
| **Tek per / boy** | SPR>8: top pair/overpair = pot-kontrol, stack-off DEĞİL. Overbet yalnız nut avantajında — geometrik overbet deep'in ANA silahı |
| **C-bet** | İyi rakibe AZ (aralığın ortasını polar check-raise'e sokma); zayıf rakibe ÇOK (deep check-raise bulamaz) |
| **Check-raise** | Equity-güdümlü ellerden: pair+FD, combo draw — ince tek-pair'den değil; set slowplay = range koruması, numara değil |
| **Savunma** | Seni cep çifti değil TEMİZ iki-per korur — turn/river sorusu: "bu iki-per temiz mi?" *(kalibre et)* |
| **Exploit** | Nitty deep rakibe: flop c-bet'ini float et → turn check-check → river küçük IP stab (overfold'a over-perform eder) |

*Kök hata bağı: derin oyun kök hatanın en pahalı sürümüdür — yüksek SPR'de tek perle stack-off, en çok chip'i en yanlış yere bağlar. Guard: SPR>8'de top per/overpair varsayılanı pot-kontrol.*

---

## Bölüm 30 — Micro Stack 4-12bb: Jam/Fold İnceltmeleri ve Eşitsiz-Masa Overlay

*B3 <15bb jam/fold'u verir; bu bölüm 4-12bb bandını ve EŞİTSİZ masada (biri seni cover, biri senden kısa) ortaya çıkan overlay dinamiğini inceltir. Doktrin B3'ün kendisi: bu bantta açış = jam ya da fold, flat-call ağaca girmez.*

### 30.0 4-12bb açış = JAM ya da fold (küçük-RFI yok)

Bu derinlikte ince-boy açış tablosu yoktur — açtığında ya jam'lersin ya fold. Küçük çiftler (22-66) bu bandın EN DERİN yaşayan JAM'lerindendir *(derinliği kalibre et)*, DEFEND edilmez. Fold-equity + çağrılınca canlı equity ikisi de gerçek; jam'i "polarize spew" sanmak MTT refleksi hatasıdır.

### 30.0-EK "Küçük-RFI yok" cover-edilen-masa varsayımıdır — arkadakiler senden kısaysa ~12bb raise-fold sınırda yaşar

30.0'ın "4–12bb açış = jam ya da fold" kuralı masanın seni cover ettiği varsayımıyla yazıldı. Arkandakiler belirgin KISA ise (sen cover ediyorsan) ~12bb'de küçük raise-fold ve AJs/AQs sınıfıyla raise (jam değil) sınırda tutar *(kalibre et)*: kısanın jam'i tüm stack'idir ve karşısında geniş call bulur (kalan stack'inle çoğu jam'i ödersin) → fold-equity düşük → rejam daralır, küçük raise-fold nefes alır. Arkandakiler derinse tersi: rejam onlara yalnız efektif ~12bb'ye mal olur, reshove genişler — jam-or-fold daha da sertleşir; ~20bb'deki "derin masa call'ı tercih eder" alanı (B33.6) burada kapanır, call seçeneği yoktur. İstisna bandın üst ucuna özgüdür; 4–8bb'de doktrin aynen. Cover eden rahat rejam'ler, cover edilen primli — B33.6'nın efektif-stack mekanizmasıyla aynı yön.

### 30.0-EK-2 Dipnot: ICM'de derin rakipler kısa açıcıya rejam'i kendi aralarındaki prim yüzünden biraz kısabilir — sınırda
30.0-EK "arkadakiler derinse reshove genişler → jam-or-fold sertleşir" der; solver-türevi, korunur. Canlı sezgi tersini fısıldar: "15bb ile açıyorum, solumdaki iki agresif derin stack bana rahat rejam edemez — kendi aralarındaki risk primi 3-bet-call'larını sıkar → geniş açarım; herkes 15bb olsaydı kaldıraç onlarda olurdu." ICM'de bunun bir payı var: derin rakip rejam'i sana değil, arkasındaki öbür derine karşı riske atar (22.11'in çarpışma primi onun için de çalışır) → rejam bir tık dar gelebilir *(sınırda — kalibre et; gözlemle, ezberleme)*. Ama chipEV'de ve ante büyükken 30.0-EK ağır basar: rejam onlara efektif ~12bb'ye mal olur, ucuz. Kural: derin masada kısa açıcı olarak varsayılan jam-or-fold; küçük raise-fold'u yalnız ICM açık + arkadakiler birbirini cover ediyor + rejam'in seyrek olduğunu GÖRDÜN şartıyla dene. Derin tarafın kuralı (kısa jam'e ≥~22bb ile call, rejam değil) 22.10-EK'te; 30.3 köprüsü orada.

### 30.1 Raise+ ile karşılaşınca: jam-or-fold, flat DEĞİL

Fringe eller (Q9s/J9s/QTo tipi orta-broadway/zayıf-suited sınır elleri) bu derinlikte CALL değil **jam-or-fold**'dur — ~10-12bb'de re-jam min-raise üstünde gerçek fold-equity taşır; 4-8bb'de jam canlı equity + ölü parayla çalışır, fold-equity beklenmez. Micro stack'in büyük bir kısmını "flop görmek için" fringe'le call etmek, jam/fold doktrininin tam önlediği klasik hatadır.

> **Micro stack'te "her şeye committed"sin ama bu "flop görmek için call et" demek değil — commit'ini JAM olarak al: fold-equity + canlı equity birlikte çalışır; flat-call fold-equity'yi tamamen bırakır, canlı equity'ni ise kısa stack'le kötü realize eder.**

### 30.1-EK Fold-equity sıfırsa (rakip fiyatla mecbur) jam değil FLAT — vurması gereken el vurmadan kazanamaz; tek jam'e katlanma, iki jam'e katlan

Kök hata: "kısa SB, açılış geldi → jam ya da fold" refleksi ~7bb'de. Mekanizma: ~7bb SB, HJ açtı: jam'lersen potta ~11bb, rakip ~5 öder → hiçbir el katlamaz, fold-equity SIFIR (10bb'de vardır — orada call yok, jam). FE yokken QJs/98s/K-x s gibi "vurması gereken" ellerle jam'lemek yalnız açıcının aralığına karşı flip'e koşar; flat ise (a) aynı equity'yi daha ucuza alır, (b) BB'yi domine ettiğin overcall'larla pota çeker — vurduğunda ikisinden de kazanırsın. Ağaç: jam = tepe + çiftler (canlı equity, FE gerekmez); flat = küçük çift, suited connector/Kx, jam kadar geniş *(kalibre et)*; BB tek jam'lerse hemen hiç katlanma (A7o sınırda), BB jam + HJ call gelirse çiftler dışında her şey fold (iki aralığa karşı ölü). Aynı motor ~5bb SB'de erken-pozisyon açılışına karşı: JTs/Q9s flat (açıcı asla katlanmaz), BB domine overcall eder, sen vurunca iki taraftan alırsın.

**Kural:** "committed'im → jam" değil, "rakip katlanabilir mi?" — hayırsa flat + iki-jam'e-fold kuralı; evetse (≥~10bb) 30.1 aynen. 30.6'nın BB kuralına dokunmaz — orası aksiyonu kapatan koltuk.

### 30.2 Bu bantta BB min-raise'e karşı geniş savunur — ama savunma = jam/fold kararı

Deep ters-implied cezası olmadığından BB fiyatı iyidir; ama "savunma" burada da jam-ya-fold ekseninde okunur (uygun elle re-jam, gerisi fold), sokak sokak flat-call postflop değil. *(kalibre et — eşik sizing'e bağlı.)*

### 30.2-EK Kısa BB, derin açıcının min-raise'ine karşı — fiyat refleksi tuzak: açıcının JAM'i olduğu için min-raise'i polar-güçlüdür

Kök hata: "10bb'yim, min-raise'e fiyat iyi, SPR düşük, geniş savunurum." Derin BTN'nin karşısında kısa BB varken min-raise'i chipEV'deki gibi geniş-merged değildir: açıcının jam aralığı vardır (orta bloğu alır), min-raise'e ise tepe (büyük çiftler, iyi Ax) + jam'lenemeyecek en güçlü eller kalır — prim bu bölünmeyi sertleştirir. O aralığa karşı orta-zayıf elle flop görmek iki kere kaybettirir: blöflerine domine olursun, flop'ta tuttuğun tek per overpair'lerine ölüdür. Sonuç: call dilimi dar *(kalibre et)* — güçlü top pair yapabilen yüksek-kartlılar ve gerçek suited bağlantılılar; gerisi jam ya da fold. Jam malzemesi: her As (value'yu bloklar, açıcının raise-fold'larını bloklamaz — düşük kicker burada avantajdır, orta kicker rakibin raise-fold'larını bloklar), tüm çiftler, zayıf suited broadway (domine eden broadway'leri katlatır, çiftlere flip), orta offsuit Kx (KQ tipi domine ettiği çok olduğu için trap/call'a daha yakın).

**Kural:** min-raise'e savunmadan önce "bu açıcının jam aralığı var mı?" — varsa min-raise'i polar oku, 30.2'nin "geniş savunur"unu kapat; savunma dar call + As-bloker jam.

### 30.3 Eşitsiz stack: tek-aralığa-karşı-büyük-pot etkisi

Jam et, biri call diğerleri fold → tek aralığa karşı büyük pot. Caller arkadaki reopen/squeeze tehdidiyle daha sıkı call ettiği için jam aralığın GENİŞLER; etki derinlik arttıkça büyür (genel ICM/multiway baskı mantığı). Derin tarafın hâli — kısa jam'e karşı ≥~22bb ile varsayılan CALL, rejam değil; SB tek istisna — 22.10-EK'te.

### 30.4 Bu bantta flat/trap YOK

4-12bb'de flat-call ağaca girmediği için flat>3-bet trap'i de yoktur (trap/flat hatları 30bb+ derin oyuna aittir; B5'in 25-30bb bandı da jam/fold'dur). Arkanda kısa bir jam-happy stack olsa bile plan jam-or-fold'dur; "yem yutulsun diye" flat'lemek kök-hatanın micro sürümüdür (fold-equity'siz çip bağlama).

### 30.6 ≤5bb BB, jam'e karşı: neredeyse her iki kart CALL

Kök hata: 5bb'de BB'den jam'e "elim yok" diye fold — hele hızlı yapıda. Üç mekanizma üst üste biner:

1. **Pot-odds:** BB + ante zaten pottadır, kalan stack'in küçük; gereken equity = kalan ÷ (2×(kalan + BB) + SB + ante) — rakip toplam stack'ini eşler, SB ve ante ölü para; jam'ci SB ise SB'nin 0.5bb'si eşlemenin içindedir, ayrıca ekleme — payda 2×(kalan + BB) + ante olur; kendi elinle hesapla.
2. **Jam aralığı çoğunlukla tepesizdir (sınırda — bonus, taşıyıcı bacak değil):** jam'cinin arkasında hâlâ fold'a zorlanacak oyuncu varken (CO/BTN jam'i) raise opsiyonu olan stack *(kabaca 12–20bb, kalibre et)* en güçlü ellerini çoğunlukla non-all-in açar (QQ+ *(kalibre et)*); jam aralığı küçük çift + suited Ax + offsuit yüksek kart + bazı suited Kx/Qx → küçük suited connector/gapper ve bağlantılı offsuit'ler nadiren domine edilir, büyük çifte seyrek çarpar; küçük çifte karşı equity'leri canlı kalır *(kalibre et)* — tepenin non-all-in açılması fiyatını sınırda daha da iyileştirir. SB→BB ya da tek-rakip jam'inde bacak düşer: sen zaten her şeyle ödüyorsan jam'cinin primini jam dışında tutmasının maliyeti yok, aralık tepelidir; çok kısa jam'ciye (raise opsiyonu yok) karşı da düşer — karar 1 ve 3'e yaslanır.
3. **Gelecek-oyun (22.10):** fold edersen sıradaki SB + ante seni 3bb altına iter, oradan double bile ölü stack üretir; call edip kazanırsan diri stack'e çıkarsın. Kazanç/kayıp oranı bandın üst ucunda kabaca 2–2.5:1, ~3.5bb ve altında 3:1'i geçer *(ante yapısına göre, bacak 1'in formülünden türet — kalibre et)*; gelecek-oyun ağırlığı bunu daha da yukarı iter, gereken equity daha da iner.

**Kural:** ≤5bb BB'de jam'e varsayılan CALL; fold'u yalnız ölü offsuit çöpe sakla, önce "sıradaki BB'ye kaç bb'yle giriyorum?" diye sor. Min-raise'e karşı kalan stack'in pot-odds'unun çöktüğü bant — kabaca 3–4bb *(kalibre et)* — fold yok, jam. Bir bant üstte (~7bb) call aralığı sert daralır *(kırılma: kalibre et)*. Havuz bu bantta çok sıkı öder — jam tarafında bunu bil, BB'deyken kopyalama. 30.2'nin sayısal ucu.

### 30.7 Postflop ≤15bb BB (bandın üst ucu): düşük board'da lead = JAM ya da CHECK

≤15bb, rakip daha derin açtı, BB'de flat'ledin. Kök hata: 40–60bb refleksiyle alt/orta per'i check-call'a taşımak. Sığda flop potu stack'e göre o kadar büyüktür ki hesabı iki şey ele geçirir: equity'ni bedava kart vermeden KORUMAK ve rakibin equity'sini FOLD ETTİRMEK; alt per bile çoğunlukla stack-off sınıfına girer (10bb civarı), 15bb'de sınırda. Jam'in fold equity kaynağı: bare overcard'lar (kabaca çeyrek equity) ve gutshot / tek-overcard'lı zayıf draw'lar katlanır; overcard'lı üst kent draw'ları (çoğu per'e karşı önde) ödeyecektir — onlara karşı jam'in değeri fold değil, bedava kart vermeyip equity'yi anında realize etmektir. Flop jam aralığın YOKSA IP her eliyle bedava turn'e geçer — sığda ilk parayı koyan olmak pozisyondan değerlidir *(kalibre et)*.

**Ağaç en fazla üç düğüm: jam / küçük / check.** BTN açıcıya karşı düşük-orta bağlantılı board: jam sınıfı = top/orta per, overcard'lı kent draw, gutshot+overcard. **Tuzak sığda:** iki per, kent, set, güçlü top-pair'in bir kısmı CHECK'te — jam aralığı zaten kırılgan ellerle dolu, nut'u eklersen check aralığın çıplak kalır; test: "bu el kötü turn kartından korkuyor mu?" — korkuyorsa jam. **10→15bb:** jam frekansı bir miktar düşer, küçük/check-jam pay alır; asıl değişim sınıfın kayması — dinamik dokuda alt per check'e, overcard'lı draw'lar jam'e *(kalibre et)*. **EP açıcı (dar aralık):** overpair-yoğun dar aralık düşük board'u ISKALAMAZ — equity avantajı overpair'lerle EP'de kalır; BB'nin avantajı NUT'tur (iki per/kent/alt set — EP'de yok). Overpair'ler katlanmaz (az fold equity) → küçük/sık lead değil, KONTROL: aralık çoğunlukla check, jam yalnız nut/nut'a yakın sınıf + en iyi kent draw'larına (semi-blöf) saklanır; küçük lead ancak nut-ağırlıklı ve seyrek *(kalibre et)*. Yüksek board için 19.1-EK.

### 30.5 Cheat kartı

*(kalibre et: küçük-çift jam derinliği, BB re-jam eşiği — sizing'e bağlı.)*

| Durum | Kural |
|---|---|
| **Açış** | JAM ya da fold — bu bantta küçük-RFI tablosu YOK |
| **Küçük çiftler (22-66)** | Bandın en derin yaşayan JAM'lerinden *(kalibre et)*; DEFEND edilmez |
| **Raise+'a karşı fringe** | Jam-or-fold, flat DEĞİL: yeterli derinlikte re-jam gerçek fold-equity taşır, çok kısada jam canlı equity + ölü parayla çalışır *(bant sınırları: kalibre et)* |
| **BB savunması** | Min-raise'e geniş savun: sığ uçta re-jam/fold ekseni; derin uçta (min-raise'e kapatan) preflop flat izinli — ama flatleyip postflop sokak-sokak oynama *(kalibre et)* |
| **Eşitsiz masa** | Arkadaki reopen/squeeze tehdidi caller'ı sıkar → jam aralığın GENİŞLER; etki derinlikle büyür |
| **Trap-flat** | YOK — jam-happy kısaya karşı bile premium'u "yem" diye flat'leme: jam aralığın zaten geniş, premium jam'le ödenir; flat, jam gelmezse şişmiş/çok-yönlü pota döner (kök hatanın micro sürümü). BB'nin min-raise'e kapatan flat'i ayrı — o savunma |
| **Asıl leak** | Fazla stack-off değil fazla FOLD + fringe flat-call; fringe-JAM doktrindir, spew değil |

*Kök hata bağı: micro bantta tehlike fazla stack-off değil, fazla FOLD (jam/re-jam yeterince geniş değil) ve fringe'le flat-call. Fringe-JAM standart jam/fold doktrinidir, leak değil — leak flat-call/limp hatlarıdır.*

---

## Bölüm 31 — BB-Ante Heads-Up ve HU-vs-GTO

*Kitapta HU/3-handed sıfır satır — oysa her turnuvanın en pahalı iki-üç saati (HU + short-handed FT) bu dinamiktir; SHR/HR final'lerinin doğrudan parası.*

### 31.0 BB-ante HU'da BTN %100 VPIP

Ölü ante sayesinde yarım BB'yle ~3BB'lik pota IP giriyorsun — pokerin en iyi fiyatlarından; hiçbir el fold edilmez. Rakibin bir BTN fold'u görmek başlı başına tell: çöpü aralığından çıkmış + HU tecrübesizliğini ilan etmiş demektir.

### 31.1 Derinlik-orantılı limp/raise — orta-sığ derinliğin üstünde IP jam kaybolur

HU BTN stratejisi derinlikle kayar: derinleştikçe raise payı büyür (çok derin ~raise-only), sığlaştıkça limp ağırlıklaşır *(kalibre et)*. Kritik sürpriz: orta-sığ derinliğin üstünde IP jam kaybolur, limp öne geçer *(eşiği kalibre et; ~15-16bb civarı)*; çok sığda bile polar limp aralığı var — trap + çöp *(derinliği kalibre et)*. Pasif rakibe karşı dengeyi bırak: çöpü limp'le, iyiyi raise'le.

### 31.1-EK Pozisyon aynası: "derinleştikçe raise" yönü BvB SB'de de geçerlidir — aynalanan eğri değil, pozisyon ve motor

31.1'in derinlik eğrisi IP limp içindir: HU-BTN limp'ini OOP rakip iso eder. 8-max BvB'de SB limp'i OOP'dir, iso IP'den (BB) gelir ve IP iso derinlikle çoğunlukla büyür — eğri BvB'de çoğunlukla tersine dönmez, aynı yönde kalır: derin uçta SB de limp payını küçültüp raise-first'e kayar, sığlaştıkça (kabaca 12–15bb'ye kadar) limp ağırlıklaşır; daha altında limp yerini open-jam'e bırakır *(kalibre et)*. Fark limp-reraise'in varlığı değil eğrinin seviyesi ve limp'in dokusu: raise-fold'un preflop maliyeti iki tarafta aynıdır, fark raise'in çağrıldığı dalda çıkar — OOP raise'i çağrılınca büyümüş potta pozisyon dışı kaldığı için SB aynı derinlikte HU-BTN'den çoğunlukla daha fazla limp'ler; fazlalık raise-fold'dan kaçan orta ellerdir, derin uçta SB'nin limp dilimi HU-BTN'e göre daha geniş ve daha merged'dir; limp-reraise dilimi korunur (premium'un bir kısmı + birkaç blocker) ama oransal payı büyük değildir, sınırda *(kalibre et)* — derin kolda limp sıfıra inmez, eğri çoğunlukla düzleşir. B33.1'in "U"su frekans değil içerik eğrisidir (limp'in limp-reraise/limp-jam dilimi: derinde premium tuzağı, sığda blocker yarı-blöfü). Değişen yön değil, motor ve seviye: IP'de "ucuz flop görme", OOP'ta "raise'in çağrılma dalından kaçınma + SPR kapanı". HU için bu satır, BvB için bkz. B33.1 (pozisyon aynası kutusu).

### 31.1-EK2 Tuzak testi ve üç kova: limp'in EV'si "limp'e para koyup raise'e koymayacak el"den gelir

Tuzak testi: limp'ime saldıran küme, raise'ime saldıran kümeden farklı mı? Küme derinlikle tek yönlü değişmez — orta derinlikte kaybolur, sığ uçta açılır, en sığ uçta yeniden kapanır *(kalibre et)*. Sığ uçta (kabaca 15bb, *kalibre et*) gerçekten farklıdır: A'lar/K'lar zaten raise'e de jam'ler (yıkanmış), asıl kâr iki düşük kartla non-all-in iso edenden gelir — QQ küçük SPR'de ödenir. Orta uçta (kabaca 25bb, *kalibre et*) küme kaybolur: raise'e call edecek eller limp'e check'ler, limp'e jam'leyen ≈ raise'e jam'leyen → limp EV üretmez, raise'in çağrılma gelirini (kabaca ¾ çağrılır, *kalibre et*) bırakır. Çok sığda (kabaca 12–13bb, *kalibre et*) BTN limp'inde tuzak dilimi çoğunlukla sıfıra yakındır — BB'nin limp'e jam aralığı raise'e jam aralığından dar. Kural: limp'e ekstra aksiyon veren elin adını koyamıyorsan en yüksek-EV elini RAISE'le; "raise'de daha az kazanan" orta broadway'ler limp gövdesine iner *(hangileri: kalibre et)*.

Üç kova — 31.1'in "sığlaştıkça limp" düşüşü her ele orantılı dağılmaz; kova eli değil, elin limp'e gelen ekstra aksiyona vereceği cevabı ayırır (B33.2'nin kova inşası): (a) iki düşük offsuit kart (82o tipi) her derinlikte saf limp — raise-EV'si sıfıra yakın, yüksek-kart raise'lerini sulandırır; (b) iyi suited / suited broadway (JTs tipi) raise-fold edemez, tuzak için zayıf → limp-call gövdesi; (c) yüksek-kart offsuit (K5o tipi) raise-fold'un doğal malzemesi — jam yiyince katlanmak acıtmaz, blocker taşır *(sınırlar: kalibre et)*. Sığlaştıkça yalnız (c) limp'e iner; derinleştikçe (c) raise-fold'a geri çıkar, (a) ve (b) yerinde kalır *(kalibre et)*. Rakip tepeden çok jam'liyorsa (b)'yi genişlet, (c)'yi kıs; pasifse tersi. B33.2 kova iskeletinin HU-IP hâli: (b) BvB-SB'den geniş, (c) daha dar.

### 31.2 Capped kalmanın gerçek maliyeti

Trips/nut'un bir kısmını check-call'da bırakma sebebi over-bluff korkusu DEĞİL: capped olduğunu bilen rakip value HACMİNİ ve BOYUNU büyütür (ince value'yla overbet/jam açılır) + o hacme eşlik eden blöfleri ekler → EV iki kanaldan birden akmayı keser. Uncapped check-call her iki kapıyı kapatır.

> **Capped kalmanın cezası "blöf yerim" değil, "rakip hem daha çok hem daha büyük value bet'ler + yanına blöf ekler"dir. Uncapped aralık iki kapıyı birden kapatır.**

### 31.3 Check-back inşası: gecikmiş blöf zorunluluğu

HU'da flop check-back MTT'den kat kat sık; check-back aralığına bilinçli sıfır-showdown aday koymazsan river'a hep A-high/per taşırsın → aralığın value-oriented olur, rakip sana blöf atmayı KESER (blöf iştahı aralığının şeklinin fonksiyonu) ve kendi value'n ödeme bulamaz. Gecikmiş blöfü rakibin fold'larını unblock eden ellerden seç — HU'da blöf çoğunlukla bloker'ı değil unblock'u seçer (aralık geniş, çöp çok: T6o'nun KT'yi bloklaması küçük kazanç, suited Tx fold'larını bloklaması daha büyük kayıp); gizli tuzak: run-out'a düşen orta kart (9 gibi) rakibin A9/K9 check-back sınıfına sessiz per verebilir — o board'larda blöfü kıs; ama elinde 9 varsa tam tersine o kombolar bloke olur (rakibin A9/K9'u azalır), blöf adayın güçlenir.

### 31.4 HU'da lead/donk YOK — asimetri ölçüsü (B19.1'in HU teyidi)

MTT'de lead'i doğuran aralık ASİMETRİSİdir; HU'da iki taraf aynı geniş aralıkla oynar → düşük/bağlantılı board "senin" değildir, lead aralığı varsayılan olarak kurulamaz. Ana kapı *(çoğunlukla)*: IP küçük c-bet attı, sen geniş call ettin, turn board'u eşledi ya da düşük geldi — asimetri o düğümde BB'ye geçer (31.4-EK); aynı mantık küçük turn bet'ini geniş call'ladıktan sonra river'da da geçerlidir. Preflop yüzü: HU BTN limp'ine iso ≠ BvB SB-limp'ine iso'nun aynası (pozisyonlar ters); OOP iso lineer dilimde daha dar, polar büyük-boy diliminde ve sığda geniştir (31.9, 31.12). B19'un ICM-lead istisnaları ring içindir; HU'ya taşınmaz."senin" değildir, lead aralığı kurulamaz. Preflop yüzü: HU BTN limp'ine iso ≠ BvB SB-limp'ine iso'nun aynası (pozisyonlar ters, OOP iso daha güçlü el ister). B19'un ICM-lead istisnaları ring içindir; HU'ya taşınmaz.

### 31.4-EK Lead'in başlıca kapısı: küçük c-bet'e geniş call + eşleşen/düşük turn

31.4'ün gerekçesi aralık simetrisidir; simetriyi bozan şey flop'taki KÜÇÜK c-bet + geniş call'dır. J-7-7 rainbow'da BTN ~⅓ atar, BB neredeyse tüm Q/K-high'ı ve her çekilişi savunur *(sınır: kalibre et)* — call aralığı per + zayıf A-high + çekiliş etrafında yoğunlaşır. Turn J: BB'nin Jx'i jacks-full (en üst), 7x'i (flop'ta check-raise etmeyenler) sevens-full — Jx'in altında ama IP'nin çöpünü ezer —, düşük Ax'i board two pair + A kicker'la bet'in havasına karşı önde; IP'nin aralığı flop'u range-bet ettiği için hâlâ 8-high çöpü taşır. Asimetri artık BB'dedir → lead: Jx, kalan 7x, ZAYIF Ax (A6 tipi ince value/deny; A9/AT daha çok check, *kalibre et*), showdown'sız çekilişler. Flop c-bet'i büyük olsaydı IP'nin aralığı polar/güçlü kalır, BB'nin call aralığı capped olurdu (7x'in bir kısmı flop'ta zaten check-raise ederdi) → turn lead payı çoğunlukla AZALIR *(kalibre et)*. Aynı mekanizma turn düşük kartı eşlediğinde de çalışır: küçük/büyük lead karışımı — büyük lead'i tek başına yapma, küçük flop bet'i üst kart per'ini de kapsar. Küçük turn lead'ine IP'nin fold oranı çok düşük olmalı *(kalibre et)*; havuz iki canlı kartla da fazla katlanır. Kapı KAPALI: IP polar/büyük başladıysa ve turn IP'nin aralığını kuran orta/yüksek kartsa lead yok; düşük-kopuk dokuda düşük turn'de açılır. Kural: HU'da lead varsayılan değil; lead'i B19'un asimetrisi doğurur, asimetriyi HU'da IP'nin küçük c-bet'i üretir.

### 31.5 Rainbow = büyük boy evi (B18.2 istisna kutusu — HU)

Büyük c-bet boyları en çok RAINBOW/statik board'da toplanır, flush-draw'lu board'da değil. Geniş-aralıklı HU/blind-savaşı potlarında overpair/en-iyi-Tx avantajın büyükse kuru board'da büyük-polar boy doğru — B18.2'nin "kuru=1/3" ezberi burada equity-edge'i masada bırakır. (B18.2-EK ile aynı düzeltmenin HU uygulaması.)

### 31.5-EK Büyük boyun frekansı ve küçük check-raise cevabı

31.5'in "rainbow = büyük boy evi"ni range-bet'e çevirme. Derin HU'da (kabaca 100bb, *kalibre et*) düşük, kopuk, rainbow board'da büyük boy doğrudur — bağlantılı ve monotone dokular hariç *(kalibre et)* — ama büyük boy aralığın YARISINDAN AZI içindir (kabaca %40 bet / %60 check, *kalibre et*): orta overpair'ler, iyi kicker'lı top pair ve overcard-çekilişleri büyük atar, gerisi check *(hangi kombolar: kalibre et)*. Havuz her şeyi "bet" der; range-bet + büyük boy = kendi şişirdiğin potta seyrelmiş (ortalaması zayıf) aralıkla check-raise'e karşı MDF'yi karşılayamamak. Karşı yüz: büyük polar c-bet'e cevap ya check-call ya 3x+ check-raise değil. Polar büyük bet'in gövdesi az value + ÇOK hava kombosudur → KÜÇÜK check-raise (bet'in ~2.2 katı, *kalibre et*) o yığına savunulamaz fiyat açar; havuzun 3x+ polar raise'i fazla para koyar, çoğunlukla saf call'dan kötüdür. Solver'ına küçük raise boyu vermezsen bu düğüm görünmez (B27.3'ün boy-kısıtlama hatası). Sığ aynası (sığ limp-check potu, *kalibre et*): IP'nin yarım-pot c-bet'ine, bet aralığındaki alt-kart havayı hedefleyen overcard + backdoor tipi zayıf elle MİN check-raise — bet aralığı üst/orta kart per'lerini + alt-kart havayı taşır, min-raise tam o havayı hedefler *(kalibre et)*. Kural: büyük boy = seyrek + geniş check; büyük polar bete küçük raise; raise boyu rakibin bet aralığındaki hava oranıyla küçülür.

### 31.6 Hızlandırılmış tell/meta döngüsü

VPIP ~%100 olduğu için eğilimler birkaç elde açığa çıkar; TEK data-point'ten agresif projeksiyon meşru. Teller üç kategoride okunur — timing (snap vs tank), sizing (küçük/orta/büyük), hat (hangi sokakta pasif/agresif) — her birinden bir okuma: derin stack'te bir çifti düşünmeden flat'leyen pot-kontrol ilan etmiştir (timing); A-high ince value'yu check eden rakibin OOP aralığı olması gerekenden güçlüdür, kendi ince value'nu kıs (hat); river'da seni pota iten snap-call "raise menümde yok" itirafıdır, OOP ince value boyunu büyüt (timing+sizing). Üst kural: MTT eliti bile HU'da göreli acemi; ama senin basitleştirmelerini de senden tecrübeli biri aynı şekilde avlar.

### 31.7 Küçük çift jam derinde yaşar + orta boy yasağı

BB'den open'a karşı küçük çiftler HU'da beklenenden derin stack'lerde jam adayı kalır — rejam-vs-open hesabında şaşırtıcı derinliğe kadar +EV kalabilir *(çıpa kabaca ~40bb civarı: hangi çift hangi derinliğe kadar, kendi solver'ında kalibre et; 31.7-EK)*; ama tam stratejide çıpanın üstünde jam yerine call/non-all-in 3-bet çoğunlukla daha yüksek EV'dir — jam aşağı bantta ağır basar, yukarıda sınırda seçenek olarak kalır *(kalibre et)*. Yine de MTT refleksiyle "bu derinlikte çiftle jam mi?" şaşkınlığı HU push/fold bandında leak. "Kabiliyetli ama ileri olmayan" oyuncunun sık görülen bir teli polar spot'ta makul-orta boy (yarım-pot): ya minik (geniş zayıf-value) ya büyük/polar (nut+blöf) — ortası iki işlevi de öldürür. HU river'ı istisnadır: aralık o kadar geniştir ki tek 2x-pot polar boy yetmez, ince value (eşleşmiş board'da zayıf-kicker'lı top pair tipi) ikinci, orta bir value boyu ister — "ince value'yu feda et, tek boy oyna" MTT sadeleştirmesidir, HU'da çalışmaz *(sınırda, kalibre et)*."bu derinlikte çiftle jam mi?" şaşkınlığı HU push/fold bandında leak. "Kabiliyetli ama ileri olmayan" oyuncunun sık görülen bir teli makul-orta boy (yarım-pot): ya minik (geniş zayıf-value) ya büyük/polar (nut+blöf) — ortası iki işlevi de öldürür.

### 31.7-EK Jam'in amacı testi: çift ve offsuit Ax derinlikle döner

Aynı eli her derinlikte aynı hatla oynama; her jam'i üç soru fiyatlar — daha iyi eli katlatıyor mu, katlattığının equity'si var mı, çağrılınca ne oluyor. (1) Offsuit ATo/A9o 3-bet-jam'i ~40bb'de "daha iyi öder, hiçbir şey katlatmaz" → call ya da non-all-in; ~30bb'de jam'e döner, T8s/T9o tipi canlı equity katlanır *(kalibre et)*. (2) Küçük çift BB'den raise'e: derin uçta (kabaca 50bb) CALL (overpair'e 4-bet-jam yemek istemez), çıpa civarında (kabaca 40bb) jam ağır basar — 31.7'nin çıpası *(kalibre et)*. (3) BTN'de ~50bb non-all-in 3-bet yedin: küçük çiftle 4-bet-jam YOK — öden aralık ya overpair (ezer) ya AK/AQ tipi (coinflip); 50bb riske ikisi de fold-equity'yi karşılamaz → flat; 4-bet-jam orta çiftler, premium çift + en güçlü suited As non-all-in *(sınırlar: kalibre et)*. (4) ~25bb'de dengeli polar non-all-in 3-bet'e (equity'siz offsuit blöf + orta-yüksek çift / iyi Ax karışımı): premium çiftler slow-play — polar aralık zaten parayı koyar; en küçük çiftler 4-bet-jam (oynanabilirlik yok, fold-equity var); orta çiftler slow — jam'in katlattığı el aynı, fark call alternatifinin değerinde: call edip blöf yakalar, düşük board'da overpair kalır; yüksek çiftler jam (equity denial) *(bant sınırları: kalibre et)*. 5.2-EK'nin havuz koşulunda (3-bet'te premium eksik, 8-max BvB) orta çiftler de jam'e döner. (5) ~40bb 3-bet-JAM yedin: jam aralığının tepesi yoktur, TT+ non-all-in 3-bet'tedir (B30.6'nın "jam tepesiz" mekanizması) → yüksek-kart suited, orta suited connector, küçük çift ve zayıf suited Ax sınıfı call'a döner *(kalibre et)*; havuz bunları katlar → BB'yken jam adaylarını tam frekansla jam'le. Kural: jam'in gerekçesi "elim güçlü" değil "katlattığımın adı"dır.

### 31.9 BB'nin limp'e iso'su iki boydur: lineer küçük + polar büyük

Derin-orta HU'da (kabaca 50–60bb, *kalibre et*) BTN'nin limp gövdesi tam olarak "küçük iso'ya rahat call eden orta eller"dir (J7s/T5s, Q9o/K7o/A7o tipi). Tek küçük iso *(~3–4x, kalibre et)* o gövdeyi cezalandırmaz, sadece pot kurar. İkinci, çok daha büyük boy *(kalibre et)* gövdeyi katlatır ve iki dilim açar: (a) check-back EV'si düşük dip suited çöp (62s/73s/92s) blöf olarak raise edilir — her biri kendi üst-kartının offsuit bloğunu katlatır (73s, 7x offsuit'i düşürür; check-back'te aynı ellere domine olacaktın); (b) sokak sokak eriyen orta-premium (JJ/AQ/AK) büyük boyla 88/99/AQ sınıfını jam'e zorlar — kart açıldıkça değer kaybedecek eli preflop'ta çözer. Küçük boy lineer kalır: oynanabilir suited gövde, çiftler, en güçlü broadway — "çağrılırsam sorun değil" sınıfı. Tek küçük iso'yla dip çöp raise edilemez (fold-equity'si gövdeyi katlatmaya yetmez, seni domine eden limp-caller'lar call eder ve sen ödersin), JJ/AQ erir. Havuz büyük boya teoriden çok jam'ler ve teoriden çok katlanır — iki sapma da boyun lehine. Aynası BTN'de: J9s tipi "limp-reraise için zayıf, tuzak için güçlü" el saf raise'dir; premium'un bir dilimi büyük iso'ya limp-reraise için limp'lenir — 31.1'in polar limp'inin derin-orta uygulaması.

### 31.10 Raise-only rakip: BB'nin any-two jam penceresi

HU'da %100 VPIP'in şartı limp'tir; hiç limp'lemeyen BTN çoğunlukla ya çok açıp (kabaca %80, *kalibre et*) jam'e teoriden çok dar call eder, ya da açışını daraltıp dip aralığı bedava bırakır — ama üçüncü ihtimal de var: geniş açıp jam'e teorik genişlikte (hatta gördükçe daha geniş) call etmek; pencere yalnız ilk hâlde açılır, o yüzden gözlem şarttır. Raise-only + jam'e dar call gözlemi varsa 30–40bb'de BB'den raise'e her iki kart jam çoğunlukla +EV'dir *(kendi solver'ında geniş open / dar call modeliyle doğrula)*. Protokol: (1) ilk birkaç button'u izle (31.6: HU'da tek data-point yeter; *pencereyi kalibre et*) — limp yoksa raise-only varsay. (2) Sonra raise'e jam — aralığın tamamı; kill-switch limp gövdesi değil, jam'in call yeme oranıdır: call oranı eşiği geçerse ya da rakip jam'e genişlerse any-two'yu bırak, jam aralığını daralt *(eşik: kalibre et)*, limp'i bekleme. (3) Rakip non-all-in 3-bet'e de fazla katlanıyorsa en düşük-EV jam'leri (T2s/J6o sınıfı) non-all-in 3-bet blöfüne çevir. (4) Raise'ini karıştırmayan (JTs/98s'i hep raise'leyen) rakibe non-all-in 3-bet zayıftır — çağrılır ya da jam yer; all-in ise aralığının yarısını katlatır. Rakip "3-bet yedim → jam" refleksine dönerse daha iyi: inşa edilmiş stratejiye karşı daha çok kaybeder. Amaç onu limp'lemeye zorlamak değil; limp gövdesi gelince chart'a dön. Ölçüm çıpası: BB'de plain call ≈ sıfır noktası; jam'i ona karşı fiyatla, "fold'dan iyi" yetmez. Sınır: 50bb+'ta jam'in risk/ödülü bozulur — polar non-all-in 3-bet + DAR jam kovası (rakibin jam-call aralığına karşı equity'si iyi ama postflop oynaması kötü eller: orta çift, suited As sınıfı; derinlik arttıkça küçülür) + gerisi call planı öne geçer *(kalibre et)*.

### 31.11 Polar iso'ya IP'den küçük limp-reraise — jam'in giremediği boşluk

Orta stack'te (kabaca 30bb, *kalibre et*) limp'ledin, BB iso etti; elinde ne tuzak ne jam malzemesi var → limp-fold ya da isteksiz limp-call. Teknik, BB'nin limp'e cevabının gerçekten POLAR olduğu düğüm içindir: tepe (çift/Ax/orta suited connector) iso-jam'de, non-all-in iso'nun gövdesi 82s/T4s/Q8o tipi çöp, orta suited'ler check'te (B33.3'ün aynası). Cevabı merged'se — non-all-in iso'da çift/Ax/broadway de varsa — öncül düşer, teknik çalışmaz; o zaman düğüm iso'nun gerçekten jam-ağırlıklı olduğu daha sığ banda kayar *(kalibre et)*. Polar aralığa limp-jam gereksiz pahalıdır: çöp gövde küçük reraise'e de katlanır, tuzak her iki boya da parayı koyar — jam aynı katlamayı bütün stack'i riske ederek alır; üstelik bu derinlikte limp-jam zaten overbet'tir, sığ katmana aittir (B33.3). KÜÇÜK non-all-in limp-reraise *(kalibre et)* ise çöp gövdesini katlatır: iso'nun büyük çoğunluğu OOP'de küçük reraise'e bile devam etmek istemez. Malzeme: en düşük-EV limp-call'lar (K5o/T7o/97o sınıfı — zaten isteksiz devam edenler); kapak olarak premium'un limp'lenen dilimi (AA/KK/JJ) az EV kaybeder, polar tepe yine parayı koyar. Çoğu çözümde bu düğüm seçenek olarak yoktur; OOP call bulamayan rakibe karşı yapısaldır. Doz: aşırı kullanırsan BB iso'sunu merged'e çevirip üstüne jam'ler — kapağı ve göstergeyi (küçük reraise'e call bulmaya başladı mı) koru. Aynası (sen BB'sin, havuz erken limp-reraise etti): şüpheli — havuz bunu çoğunlukla tuzakla yapar (B33.5'in notu HU'da da geçerli); devam edeceksen "az şey ters gidebilecek" ellerle (54s/66), domine olabilen suited Kx/offsuit Ax'le değil.

### 31.12 Sığ BB: As jam'ler, Papaz raise'ler — limp-call potu A'sızdır

~15bb HU'da *(kalibre et)* BB'nin limp'e "iyi el jam, orta el check" ikilisi OOP pasifliğidir; sığ OOP iso'su dar değil GENİŞtir. (a) Kart ayrımı: Ax bu derinlikte ya BTN'nin open-jam/limp-jam'i ya BB'nin iso-jam'idir — limp-call potuna A neredeyse girmez. KQs/KJs/KTs tipi suited Kx ise NON-ALL-IN iso'dur ve raise-call'a yeter; K8o tipi offsuit Kx de iso'dur ama raise-FOLD olarak *(kalibre et)* — ikisi de limp-call eden A'sız orta aralığı postflop kicker'la domine eder, EV fold'dan değil limp-call potundan gelir. Sonuç: iso aralığında suited Ax az, Kx çok; hemen her offsuit el bir şey yapar *(kalibre et)*. (b) Pasifliğin çift bedeli: BTN'nin dip limp'i bedava realize eder, check hattın çöple dolar → limp potunda IP üç sokak bet eder. Aynası (sen BTN'sin, limp'ledin, iso-jam geldi): jam aralığı Ax/çift/blocker ağırlıklı, Kx/broadway non-all-in'de → orta suited bağlantılılar ve zayıf-kicker'lı suited Kx/Qx limp-CALL'dır; domine olmayan bağlantılı, domine olan suited broadway'den (ör. 98s vs QTs) bazen daha iyi call'dır *(kalibre et)*. Havuz teoriden çok limp-fold eder ve Ax'ini open-jam'lediği için limp-call aralığı korumasız → BB'den limp'e jam daha iyi çalışır; BTN'de limp-call eşiğini teorinin altına çek. Havuz jam'e sıkı call ediyorsa en güçlü suited broadway'leri jam yerine raise'e, orta suited bağlantılıları jam'e kaydır — toplam jam frekansı yaklaşık sabit kalır, içerik kayar *(hangi eller: kalibre et)*.

### 31.13 3-bet blöfünün derinlik anahtarı: derinde suited, sığda aynı rütbelerin offsuit'i

BB'den 3-bet blöfünü her derinlikte aynı elden seçme. Derinde (kabaca 50bb) 3-bet çoğunlukla ÇAĞRILIR *(kalibre et)* → oynanabilirlik ve board coverage para eder → K2s/Q2s/J4s/64s sınıfı; düşük-frekans offsuit blöfleri (J9o/K7o) at — edge'in varsa varyansı düşürür, ROI kaybı küçük. Sığda (kabaca 25bb) non-all-in 3-bet'e cevap çoğunlukla ya jam ya fold'dur (az miktarda call) → oynanabilirlik neredeyse sıfır, yalnız blocker + fold sayılır → aynı rütbelerin OFFSUIT'i (K2o–K4o, Q2o–Q4o, J2o–J6o, *kalibre et*); suited'ler artık limp-call/flat olarak fazla değerlidir, blöfe yakılmaz. Geçiş bandında (~40bb) ikisi karışır. İkinci ölçü: blöf domine EDENİ katlatır — 64s'nin 3-bet'i 86o/K6o/Q4o'yu düşürür; HU'da per-vs-per domine olmak en pahalı kayıptır, blöfün asıl geliri bu fold'lardır. 4-bet blöfünde de K2/K3, K7/Q8'den iyidir ama gerekçe kicker'dadır: rakibin derin 3-bet blöfleri orta-kicker'lı Kx/Qx ve 7'li/8'li suited connector ağırlıklıdır — K7/Q8 tam o blöfleri bloklar (katlanmasını istediğin elleri eksiltir), 2'li kombolar blöf aralığında neredeyse yoktur → K2 blöfe dokunmaz, yalnız KK/AK'yı bloklar. Value tarafında ATo/KQo/KJo derinde yüksek-EV 3-bet-FOLD'dur: EV'si 4-bet-jam'e call'dan değil, çağrılıp domine ettiği ellerden gelir *(kalibre et)*. B4'ün "45bb'de suited connector'la 3-bet blöfü zarar" satırı ring içindir — HU'da aynı el derinde en iyi blöf, sığda offsuit'e devrolur.

### 31.14 Open boyu = rakibin cevabı

HU'da tek open boyu yok. Open'ın maliyeti 3-bet/jam sıklığıyla, geliri call sıklığıyla çarpılır; HU BB'nin call oranı 3-bet oranından çok büyüktür *(kalibre et)* → boyun asıl işi J4o'yu savunmaya çalışan aralığı ŞARJ etmektir, 3-bet'ten kaçmak değil. Yön doktrindir, sayılar değil: derinde daha büyük, orta bantta küçülür, jam tehdidi başlayınca min — boylar ve eşikler *(kalibre et)*. Limp'lediğin oranda raise aralığın 3-bet'e daha az açıktır → biraz büyük boy taşınır. Havuz sapması boyu iki yönde kaydırır: orta bantta havuz teoriden AZ jam'ler (teorinin jam'lediği zayıf suited / blocker-ağırlıklı elleri bulmaz, *kalibre et*) → orta boy yaşar; sığ bantta teoriden ÇOK jam'ler ("blocker var, jam") → min. BB open'a overfold ediyorsa (Q5o/düşük suited'i katlıyorsa) → min-raise %100, karmaşıklaştırma. Her derinlikte aynı ilke: cevap "az call, çok 3-bet"e kayarsa küçült; "çok call, az 3-bet"e kayarsa büyüt — postflop edge'in varsa büyük boy pot payını da büyütür. Derin-underdog notu: "dar aralık + büyük boy" fikri boyu rakip cevabına göre seçmenin yerini tutmaz (31.15).

### 31.15 Underdog ve edge: sıkı olabilirsin, pasif olamazsın

Derin HU'da (kabaca 100bb) senden iyi rakibe karşı "potu küçük tut, rahat derinliğe inene kadar bekle" diye 3-bet'i kısmak yanlış kapıdır. 3-bet, HU aralığının büyük bir dilimidir (100bb'de kabaca ¼, *kalibre et*); onu üçte birine çekmenin EV maliyeti büyüktür ve BTN'yi %100 VPIP'le bastırmaya bırakırsın — "rahat derinliğe" geride inersin, orada edge olmaz. Meşru sıkılık: biraz daha open-fold, biraz daha check-fold. Meşru olmayan: agresyon dilimini (3-bet, iso, barrel) satmak. Derin fazda pahalı pot yoksa okuma da yok — B33.7'nin "tester"i HU'da 3-bet'le atılır. Sığ ucun aynası (kabaca 6–8bb): "büyük edge'im var, iyi elle yakalarım" refleksi iflas eder — sokak yok, edge yok, kalan tek edge jam'in fold-equity'sidir. Havuz bu bantta jam'e teoriden dar call eder (J7o/86s/T6s'i katlar, *kalibre et*) → her ince jam'i al; BB'de de dip %10'u katlama (Q2s/98s/J8o ~8bb'de call, *kalibre et*), yoksa rakibe any-two jam hediye edersin — B30.6'nın ≤5bb kuralının 6–8bb uzantısı. Ortak kural: derinde de sığda da HU edge'i agresyondan gelir; pasiflik edge'i değil varyansı satın alır.

### 31.8 Cheat kartı

*(kalibre et: limp/raise geçiş derinlikleri, küçük-çift jam eşiği — kendi solver'ından.)*

| Konu | Kural |
|---|---|
| **BTN preflop** | %100 VPIP — hiçbir el fold yok; derinleştikçe raise, sığlaştıkça limp, ~15-16bb üstü IP jam kaybolur *(kalibre et)*. Rakibin BTN fold'u başlı başına tell |
| **Pasife karşı** | Dengeyi bırak: çöpü limp'le, iyiyi raise'le |
| **Capped kalma** | Ceza çift kanal: rakip value hacmini VE boyunu büyütür + yanına blöf ekler → trips/nut'un bir kısmı check-call'da (uncapped kal) |
| **Check-back** | Bilinçli sıfır-showdown aday koy — yoksa rakip sana blöfü keser, value'n ödeme bulamaz; gecikmiş blöfü rakibin fold'larını unblock eden ellerden seç |
| **Lead/donk** | Varsayılan YOK — aralıklar simetrik, "senin board'un" kurulamaz; başlıca kapı *(çoğunlukla)*: küçük c-bet'e geniş call + düşük kartı eşleyen/düşük turn (eşli board'da üst kartı eşleyen turn de açar — 31.4-EK); ICM-lead istisnaları ring içindir, HU'ya taşınmaz |"senin board'un" kurulamaz; ICM-lead istisnaları ring içindir, HU'ya taşınmaz |
| **Boy** | Rainbow/statik board = büyük-polar boy evi; "kuru=1/3" ezberi HU'da equity-edge'i masada bırakır |
| **Tell döngüsü** | Tek data-point'ten projeksiyon meşru: timing / sizing / hat üçlüsünü oku; makul-orta boy (yarım-pot) polar spot'ta acemi telidir — boylar ya minik ya büyük/polar; HU river'da ince value ikinci (orta) boyu ister *(sınırda)* |
| **Küçük çift** | BB'den open'a karşı rejam şaşırtıcı derinliğe kadar +EV — çıpa ~40bb civarı *(kalibre et)*: altında jam ağır basar, üstünde call/raise'e kayar; jam'in gerekçesi "katlattığımın adı" (31.7-EK) |
| **BB iso (limp'e)** | İki boy: lineer küçük (gövde) + polar büyük (eriyen premium + dip suited çöp) *(kalibre et)*; sığda en güçlü yüksek-kart bloklu eller jam, bir kademe altı non-all-in raise *(hangi rütbe hangi kovaya: kalibre et)* — sığ OOP iso geniş |
| **Raise-only rakip** | Hiç limp'lemeyen rakibe karşı orta derinlikte jam aralığını belirgin genişlet — şart: jam'e dar call gözlemi; kill-switch jam'in call yeme oranı; derinleştikçe jam'in değeri düşer; sıfır noktası plain call *(eşikler ve gözlem penceresi: kalibre et)* |
| **Polar iso'ya (IP)** | KÜÇÜK non-all-in limp-reraise (en düşük-EV limp-call'lar + premium kapak); limp-jam aynı fold'u tüm stack'i riske ederek alır |
| **Tuzak testi** | Limp'e ekstra aksiyon veren elin adı yoksa RAISE; orta derinlikte tuzak ölü, sığ uçta iki-düşük-kart iso'sundan yaşar, en sığda yeniden kapanır *(derinlikler: kalibre et)* |
| **Üç kova** | Kova eli değil, elin limp'e gelen ekstra aksiyona vereceği cevabı ayırır (fold/call/raise — B33.2): iki-düşük offsuit saf limp · iyi suited/broadway limp-call · yüksek-kart offsuit raise-fold *(sınırlar: kalibre et)*; sığlaştıkça yalnız üçüncüsü limp'e iner, derinleştikçe raise-fold'a döner |
| **3-bet blöfü** | Derinde suited (K2s/64s), sığda aynı rütbelerin offsuit'i (K2o/Q3o); blöf domine EDENİ katlatır |
| **Open boyu** | Az call/çok 3-bet → küçült; çok call/az 3-bet → büyüt; overfold → min %100 |
| **Underdog** | Sıkı evet (open-fold/check-fold), pasif hayır (3-bet/iso/barrel satılmaz); 6–8bb'de tek edge jam |
| **Büyük c-bet** | Seyrek (aralığın yarısından azı) + geniş check; büyük polar bete KÜÇÜK check-raise (~2.2x, *kalibre et*) |
| **Katman geçişi (HU-BTN)** | Default'u bb, exploit'i rakibin ilk jam'i/iso'su tetikler — kırılmadıysa tamir etme (33.7-EK) |

*Kök hata bağı: HU/short-handed FT kitabın en büyük yapısal boşluğuydu; komple yeni bölüm. Kök hata omurgası burada da geçerli (capped kalma + tek per disiplini), yalnız aralıklar HU-geniş.*

---

## Bölüm 32 — 3-bet Pot Postflop: Boyu Board Değil, El Sınıfı ve Iskalayan Blok Seçer

*B4 3-bet aralığını, B11 şişmiş potun icrasını, B18 tek-raise'li flop'u, B26 caller tarafını verdi; 3-bet EDENİN postflop hatları yoktu. Baseline: HU, 3-bettor OOP (SB/BB), caller IP (BTN); ante'li 8-max, ICM yok. İki kolon: SPR ≲2 (30-45bb) ve SPR ~3-4 (~55-70bb); metindeki "100bb" örnekleri ikinci ağacın derin ucudur — 100bb'de SPR ≳4-5, ağaç değişir (32.1) *(kalibre et)*. Sen caller'san B26/B11 geçerli; buradaki hatlar şişirenindir (32.5 stab hariç).*

### 32.0 Tek cümlelik tez

> **3-bet potunda boyu board dokusu tek başına değil; dokunun hangi bloğu ıskalattığı + el sınıfı seçer. Kök hata (şişmiş potta tek per) şişirenin — 3-bettor'ın — hatasıdır: aralık + nut avantajı ona sığ SPR'de jam, derin SPR'de polar boy lisansı verir; lisansı SPR'ye ve dokuya bakmadan kullanmak (100bb'de nut avantajının eridiği bağlantılı dokuda tek perle stack-off) kök hatanın ta kendisidir. Capped caller'ın tek peri zaten bluff-catcher'dır (B26).**

"3-bet eden = Ax'i bol" eksiktir: 3-bettor'ın Ax'i oran olarak yoğun ama sınıf olarak dar ve uç-ağırlıklıdır (AA/AK/AQ + suited tekerlek blöfleri), caller'ınki orta-sınıf, geniş ve dominedir (AJ/AT/A9s tipi) — suited Ax'in çoğu ve offsuit AT-AJ caller'da kalır (AQo çoğunlukla 3-bettor'da, derin stack'te kısmen caller'da — *kalibre et*). Offsuit broadway kesiminin (KQ/KJ/QJ) büyük payı da caller'dadır; KT/QT/JT derin stack'te ya da küçük 3-bet'e karşı gelir, 30-40bb'de çoğunlukla fold *(kompozisyon: B4, kalibre et)*. İki sonuç: (1) hedeflediğin iki fold bloğu var — offsuit broadway ve suited Kx/Qx/Ax çöp; her flop'ta soru "hangi blok ıskaladı, hangi boy onu katlatır?" (2) A-high board'da caller'ın Ax'ini azımsama: küçük bet ucuz olduğu için verimlidir; büyük bet caller'ın Ax'ini yine katlatmaz, yalnız blöflerin fiyatını artırır ve senin dar/uç Ax'ini polar (nut vs hava) bir ağaca zorlar — A-high'da büyük boy çoğunlukla gereksiz *(kalibre et)*.

### 32.1 Sığ SPR ağacı: jam ya da check

40bb civarı, orta-bağlantılı board (T-9-x / J-9-x): iki aralık da neredeyse ıskalamaz. Caller'da orta/alt per + düz çekilişi; sende top pair + overpair + iki-overcard-çekiliş. Caller'ın "bir şeyi" seninkinden zayıftır ama katlanamayacak kadar equity taşır. Flop jam'i bunu paraya çevirir: kendi equity'ni tamamen realize edersin, geride-ama-equity'li elleri (suited Kx/Qx, offsuit broadway, düşük per) katlatırsın, çekilişleri geride call ettirirsin.

Ağaç iki dallı: **jam** (top pair, overpair, iki-overcard + düz/backdoor-flush, güçlü draw) / **check** (para koymak istemeyen alt per ve zayıf Ax; çekilişsiz AK — check-call/check-jam; tuzak — top set). Ara boylar aynı elleri düşük frekansta oynatan kopyalardır; atıldığında EV kaybı ~sıfır *(node-lock — B27.3)*. A-high + fd + iki broadway'de (A-Q-T fd) de aynı ağaç: flush kartsız AK/AT hızlı oynar. **Sınır:** SPR ~3-4 ve üstünde (100bb'de ≳4-5) flop jam çoğunlukla hiçbir board'da sınıf olarak kalmaz — jam potun 3-4 katıdır; yerini iki-boy (küçük + büyük) alır. Jam'e en yakın doku, overcard'larının (AK/AQ) nut-gutshot aldığı en bağlantılı yüksek board'lardır (J-T-x tipi): büyük boy + turn stack-off ağırlığı, sınırda *(hangi board'lar, hangi frekans: kalibre et; 32.3)*. B11.0'ın "SPR 1-4: tek per bluff-catcher" satırı capped caller için SPR ≳2'de geçerlidir (SPR ≲1.5'te onun top pair'i de çoğunlukla call-off'a iner — potu başlatmaz ama jam'e katlamaz; 11.0-EK-2); nut avantajlı 3-bettor'da SPR ≲2'de top pair/overpair çoğunlukla jam sınıfıdır *(frekans: kalibre et)*, 100bb'de satır 3-bettor'a da geri döner (32.2).

### 32.2 Mekanizma: derinlik ve alt-çift pusulası

**Derinlik top pair'in sokak sayısını belirler.** 40bb'de Ax top pair hemen her runout'ta stack-off eder → flop'ta bet. 100bb'de üç sokak, stack'i river'da tek perle içeri sokmaktır; çoğu river'da (B11.4 kataloğu üç sokak boyunca çalışır) jam value değildir. Ama atlanan sokak flop değildir: Ax top pair flop'ta çoğunlukla bet ile devam eder (boyu alt-çift pusulası seçer, aşağıda), atlanan sokak river — bazen turn; zayıf kicker turn/river'da daha çok kontrol eder *(kalibre et)*. 100bb A-high potunda Ax top pair çoğunlukla "iki sokak + river kontrol" elidir; "bet-bet-jam" 40bb refleksidir.

**Alt-çift pusulası.** Boyu value'nun en KIRILGAN katmanı seçer. Flop'ta sor: "alt çiftlerim (TT-QQ) bet istiyor mu?"

- **A-K-x:** istemez — caller'ın Kx'i geçmiş, katlattığı zaten geride, çağırdığı daha iyi per → alt çift check; Ax/Kx + gutshot blöfler polar → büyük boy, frekans yine yüksek (aralık avantajı burada tepe yapar — yalnız alt çift katmanı düşer).
- **A-J-x:** ister — Kx/Qx persiz overcard, küçük bete katlanır ya da geride call eder → alt çift küçük value, aralık eşlik eder → tek küçük boy, tam-aralık.
- **A-J-x + fd:** bu kez istemez (A-K-x gibi) — turn'de blöf atabilecek çekiliş artar *(kalibre et)*.

Kural: alt çift bet istiyorsa lineer küçük; istemiyorsa polar büyük + alt çift check — pusula boyu seçer, frekansı aralık avantajı seçer; alt çift boyun TAVANINI koyar, tabanını SPR koyar. B18.1-EK "boyu value seçer"in 3-bet-pot uygulaması.

### 32.3 Board sınıfları

*(boylar/frekanslar kalibre et; yön sabit)*

Sınıfları ezberleme, üç sürücüden türet: **(a) nut avantajı kimde?** — aralık avantajı çoğu board'da 3-bettor'da, nut avantajı yalnız yüksek kartlı / A-high dokularda; nut caller'daysa boy küçülür ya da check artar. **(b) SPR** — ≲2'de jam/check ağacı; ~3-4'te iki-boy ağacı, flop jam çoğunlukla yok; 100bb'de SPR ≳4-5, ağaç değişir (32.1). **(c) Turn-jam tehdidi** — doku-koşulludur: sığda dinamik dokuda (J-T-x tipi) turn-jam tehdidi flop boyunun işini yapar, çıplak çekilişi kayıtsız bırakır → büyük boy / jam ağacı çalışır; derinde tehdit yalnız pot-boy flop'la korunur → J-T-x tipinde pot-boy; ince-nut dokuda (üç-broadway) her derinlikte küçük, gerisi turn'e (32.5). Aynı SPR'de iki dokuyu (c) değil (a) ayırır. Altı doku ailesi bu üç sürücünün işlenmiş örnekleridir:

| Aile | SPR ≲2 (30-45bb) | SPR ~3-4 (baseline ~55-70bb; 100bb'de SPR ≳4-5, ağaç değişir — 32.1) | Sürücü / neden |
|---|---|---|---|
| **A-high kopuk** (A-6-2 r tipi) | Tam-aralık küçük | Tam-aralık küçük | (a) Nut + aralık sende; caller'ın broadway/suited Kx bloğu tutunmaz, alt cep ince value. Wheel-bağlantılı A-high (A-3-2 tipi) sınır: caller'da 22/33 + A5s-A4s/54s tipi wheel/set VAR; 100bb'de derinlik caller'ın nut payını değerli kılar → check payı artar, küçük-bet sıklığı düşer; sığda düşük SPR + aralık avantajı bunu bastırır → tam-aralık küçük *(kalibre et)* |
| **A + broadway** (A-J-x, A-K-x tipi) | Alt-çift pusulası (32.2): A-K-x'te Ax polar büyük, alt çift check; A-J-x'te lineer küçük | Aynı; Ax'in bir kısmı check *(kalibre et)* | (a) Kx/Qx pere döndü → hedef katman değişti; A-K-x'te QQ/JJ/TT tipi alt cebin bir kısmı büyük BLÖF adayı (caller'ın KJ/QJ/JT'sini bloklar), 99 ve altı bloklamaz → check. Sticky rakipte tüm Ax büyük |
| **İki yüksek bağlantılı kart / üç broadway** (K-Q-x, J-T-x, K-Q-T tipi) | Jam/check; J-T-x tipi dinamikte büyük — (c) turn jam çıplak çekilişi kayıtsız bırakır; üç-broadway'de (K-Q-T) küçük — (a) nut avantajı ince, büyük boy caller'ın iki-per/düz kesimine commit olmaktır *(kalibre et)* | Pot-boy polar (32.4). Flop jam yok; jam'e en yakın doku overcard'ların nut-gutshot aldığı J-T-x tipi: büyük boy + turn stack-off ağırlığı, sınırda *(kalibre et)*. Üç-broadway'de (K-Q-T) küçük — (a) caller'da AJ/JT/iki-per/set yoğun, nut avantajı ince *(kalibre et)* | (a) Nut avantajı ince: üst overpair'ler sende, caller'ın iki-per/düz kombinasyonları yoğun, overpair'i az (QQ hariç capped). İkinci-per yığını yarım pota tam call eder; domine ikinci per (QJ tipi) check |
| **Orta bağlantılı** (T-9-x, J-9-x, 9-8-7 tipi) | Jam/check (32.1) | Pot-boy; 9-8-7 tipi tam bağlantılıda check/küçük | (b) İki aralık da ıskalamaz. Overcard'ların gutshot'ı yok, düz kartı (Q) caller'ın KJ'sini tamamlar → dikkat. 9-8-7'de caller'da düz/iki-per/set BOL; TT/JJ büyük bete yalnız kendini yenen elden call alır (koruma satın alınamaz) |
| **Düşük kopuk** (6-5-2, 7-6-5 tipi) | Büyük / geometrik — SPR zaten commit ettirir, overpair erimeden value | Overpair kütlesi merged → küçük-orta, yüksek frekans; kırılgan overpair bir kademe büyük *(kalibre et)* | (a) Aralık/overpair avantajı sende, nut (set/iki-per: 22/55/66) CALLER'da → nut avantajı yok. Blöf: 99-JJ'yi bloklayan T9/J9 tipi. Bağlantılı düşükte (7-6-5) OOP çoğunlukla check, IP stab (32.5) |
| **Eşleşmiş ve mono** — "trips/flush kimde?" | Caller'da trips olası eşleşmiş (9-7-7 tipi): jam/check. Yüksek tek kartı senin aralığında eşleşmiş (A-J-J tipi): küçük. Mono (3-bettor OOP): A + iki düşük check ağırlıklı / küçük karışık; A-yok kopuk orta (T-6-5 tipi; A♠x nut-fd payı sende) çoğunlukla küçük; caller'ın yapılı non-nut flush + düz/kombo-çekiliş yoğunluğunun arttığı (T-9-8 tipi; A♠x nut-fd payı yine sende) check ağırlıklı, sınırda küçük dürtme; K-high mono'da nut-fd payı sende kalır ama caller'ın non-nut flush yoğunluğu + overpair'in değer kaybı yine check ağırlıklı tutar *(kalibre et)* | Trips-olası eşleşmişte yarım pot civarı *(kalibre et)*; gerisi aynı | Kayıtsızlık fiyatı (32.4): orta katman küçüğe tam call eder / hedef katman küçüğe zaten katlanır. Mono'da ayırıcı nut-flush sahipliği: A + iki düşükte senin flush'ın az, caller'ın suited Kx-Tx'i flush; A-yok kopukta suited Ax'lerin nut flush/fd; caller'ın yapılı flush/düz kütlesi büyüdüğünde (suited non-nut flush + düz/kombo-çekilişleri yoğun; A♠x nut-fd payı sende kalsa da) yalnız overpair equity avantajı kalır → potu büyütme. Yüksek broadway mono (A-Q-T tipi) sınırda *(kalibre et)* |

### 32.3-EK-2 Mono satırının IP 3-bettor sürümü: overpair check-back, blöf renk-kartlı overcard — ve üç-broadway'de caller BB ise yarım pot sınırda
32.3'ün mono satırı OOP 3-bettor içindir. IP 3-bettor (BTN'den 3-bet, erken açıcı call, derin) 9-8-4 mono tipi orta board'da üç şey değişir *(kalibre et)*:

- **Overpair'ler ağırlıkla check-back.** Caller'ın aralığı suited-ağır (Ax/Kx suit, çiftler), offsuit broadway'i az → mono'da ya flush'ı var ya hava. Overpair'le para koyunca ödeyen çoğunlukla flush, katlanan zaten hava. Alt-overpair ve set bile yarı yarıya check'te — set top pair call'larını bloklar (32.6-EK-2).
- **Blöf adayı JT değil A♠x / K♠x:** rakibin ceplerine overcard taşır, nut/ikinci-nut fd ile kendisi realize eder. JT ne overcard ne renk → check.
- **Turn'de caller'ın bet'i polar ve büyük** (flush + set + düz-çekilişi blöfleri; 9x check'te): overpair'i rütbe değil bloker ayırır — 26.4-EK madde 3. River: rakip range-check ediyorsa value boyun büyür, block-bet atıyorsa küçülür (32.6 kart-eşleme).

**Üç-broadway notu (32.3 hücresine):** "her derinlikte küçük" SB-vs-BTN içindir; 40bb SB-vs-BB'de caller BB ve aralığı suited Kx/Qx/Jx çöpü taşıyorsa tek boy olarak yarım pot sınırda — küçük o çöpü (K5s tipi) katlatmaz, yarım pot katlatır *(kalibre et)*. Derinde ve BTN'ye karşı küçük aynen.

### 32.3-EK 100bb sütunu: OOP 3-bettor'ın check payı ikiden fazla katlanır — A-düşük ve düşük board "tam-aralık küçük" olmaktan çıkar

32.3 tablosunun "A-high kopuk: tam-aralık küçük" ve "Düşük kopuk: merged → küçük-orta, yüksek frekans" hücreleri SPR ~3–4 (55–70bb) içindir; 100bb'de (SB vs BTN) ikisi de "kova check"e döner *(kendi sim'inde kalibre et)*:

- **İki asimetri.** (1) Sığda OOP'nin realizasyonu flop jam'lerinden gelir; 100bb'de jam sınıfı yok olunca ham equity biraz artsa da realizasyon belirgin düşer, IP'ninki yükselir — pozisyonun değeri SPR'yle büyür. (2) IP 100bb'de A-düşük board'da AQ/AJ ile slow-play yerine raise bulur (sığda para zaten girer, derinde büyütmesi gerekir) → A-düşük'e raise sıklığı katlanır; diğer dokularda c-bet'e raise sıklığı derinlikle çoğunlukla DEĞİŞMEZ — "IP derinde her yerde agresif" ezberi yanlış.
- **Sonuç:** A-düşük kopukta check payı ~sıfırdan üçte bire; düşük board kovasında üçte ikiye yaklaşır (kopuk-düşük ile bağlantılı-düşüğü ayrı kalibre et); üç-broadway ve A+broadway'de fark küçük. Kuru eşleşmişte (T-7-7 / 9-4-3) yarım pot, yüksek-eşleşmişte (A-A-x) küçük kalır.
- **İcra:** check aralığını KK/QQ/JJ + zayıf Ax'le kur (polar bet, orta katman check); IP'nin A-düşük raise'ine karşı orta Ax ile bet-fold değil check-call planla. Tam-aralık küçük 40–60bb'nin lisansıdır.

32.7'ye ölçüm: 100bb A-düşük check payı ve IP raise sıklığı. 29.2 ile aynı yön.

### 32.4 Boyut: kayıtsızlık fiyatı, polar/lineer, kırılgan value

**Boyu hedef katmanın kayıtsızlık fiyatı seçer.** Önce "hangi sınıfı katlatmak istiyorum?", sonra "o sınıf hangi boyda kayıtsız?" Caller'da trips olası eşleşmiş board'da (9-7-7 tipi) caller'ın orta katmanı (offsuit broadway, backdoor Kx/Qx, gutshot, alt cep) küçüğe çoğunlukla call eder, yarım pot civarında kayıtsızlığa yaklaşır; yüksek tek kartı senin aralığında olan eşleşmiş board'da (A-J-J tipi) küçüğe zaten katlanır. B11.3-EK'in flop ikizi *(kalibre et)*.

**İki-yüksek-kart board'da pot-boy polar — blöf ALT PERden gelir.** K-Q-6'da yarım pot orta çiftleri ve alt cepleri çoğunlukla içeride tutar; pot-boy alt cepleri katlatır, Qx'i sınıra iter *(kalibre et)*. **Value** = güçlü-kicker top pair + overpair; **blöf** = alt per + yüksek gutshot (AT/AJ) + fd; **check** = ikinci per ve alt cep — pot-boyla yalnız daha iyi ele izole olurlar. Alt per blöfü asız 6x'tir (65s/64s tipi, aralıkta varsa): 66/Q6/K6'yı bloklar, katlatmak istediğin 7-J ceplerini ve Ax'i bloklamaz. A6s ise katlanan Ax'i de devam eden AQ/AK'yi de bloklar — net etki sınırda. A-K-x aynı kova. Bet frekansını value sayısı tavanlar; fazla blöf adayı frekansı değil hangi blöfün seçildiğini değiştirir (en iyi blokerli) — A-K-6 ile A-K-4 farkı marjinaldir *(kalibre et)*.

**Kırılgan overpair kütlesi: boyu SPR ve erime seçer, nut kıtlığı değil.** 6-5-2'de 77-JJ'ye karşı caller iki-overcard + backdoor ile call eder, her overcard turn'ü tehdittir. Caller'ın nut'u mutlak sayıda az ama seninkinden fazla — setler (22/55/66) onda; sende aralık/overpair avantajı var, nut avantajı yok. Sığda boyun büyüklüğü SPR'nin zaten commit ettirmesinden + erimeden önce alınan value'dan gelir; suited Tx/9x'i pot-boyla katlatırsın. 100bb'de aynı kütle merged'dır → boy küçülür, frekans büyür; kırılganlık boyu bir kademe yukarı iter, AA/KK'yı değil — korunma ihtiyacına göre böl *(kalibre et)*. B18.1-EK "koruma sahte nedendir" burada sınır bulur: bu kütlede koruma "erimeden önce alınan value"dur — boyun tabanını SPR koyar, tavanını alt çift (32.2).

**Turn SPR:** pot-boy sonrası SPR <1 → turn jam/check; yarım pot sonrası SPR ~1.5 → turn yarım pot, river jam.

### 32.5 IP/OOP ve check-node hatları

**OOP 3-bettor'ın tam-aralık küçük bet'i meşrudur.** B18.5 "OOP havayla range-bet TUZAK" tek-raise'li PFR OOP içindir; aralık avantajlı 3-bettor kopuk A-high'da tam-aralık küçük atar; A-yok kopuk orta mono'da ÇOĞUNLUKLA küçük (bağlantı arttıkça, caller'ın flush yoğunluğu (non-nut dahil) büyüdükçe check payı büyür — nut-flush payı Axs ile çoğunlukla sende kalır — *kalibre et*).

**Turn-jam tehdidi.** Çekilişi kayıtsız bırakan flop boyu değil turn JAM tehdididir. Dinamik dokuda (J-T-x tipi) 40bb'de flop bet + turn jam çıplak fd / tek gutshot'ı sınırda call-off'a zorlar → büyük boy çalışır. 100bb'de tehdit ortadan kalkmaz, gecikir: turn jam overbet olur (turn SPR ≳1.5), caller çekilişini flop'ta commit olmadan taşır → tehdit yalnız pot-boy flop'la korunur; J-T-x tipinde pot-boy bunu yapar. Üç-broadway'de (K-Q-T) ise her derinlikte KÜÇÜK: nut avantajı ince (32.3 a), büyük boy caller'ın iki-per/düz kesimine commit olmaktır — otomatik-fold bloğunu ucuza topla, gerisini turn'e taşı *(kalibre et)*.

**Yüksek-kart bağlantılı board'da IP check-node: küçük stab az şey katlatır.** OOP 3-bettor'ın check aralığı nut'lar + korunmuş orta katman (ikinci per, orta cep çiftleri, gutshot'lı broadway) + give-up'lardır; küçük bet bu aralığın çoğunu katlatmaz, yalnız zaten en zayıf eller düşer. Boyu büyüt — yarım pot civarı *(kalibre et)*. Value = top pair; blöf adayı = orta perleri bloklamayan VE rakibin katlanan A-high bloğunu bloklamayan eller — A taşımayan düşük suited bağlantılı / gutshot; düşük Ax stab listesinin sonundadır (katlanan Ax'i bloklar; A runout'unda value-jam'e dönüşebilir ama A'nın düz tamamladığı iki-broadway dokuda (K-Q-x'e A → JT, Q-J-T'ye A) bu kapasite de düşer, *kalibre et*). Yüksek-equity açık çekiliş fold equity'ye muhtaç değildir: bedava realize eder, check-raise jam'e karşı kırılgandır → çoğunlukla check-back *(kalibre et)*.

**Düşük board'da IP stab (sen caller'san).** 7-6-5 / 6-5-4'te 3-bettor'ın offsuit broadway'i hiç, 9x/8x az, overpair üç sokak istemez → çoğunlukla check eder ve check aralığı zayıftır (overpair'lerin bir kısmı hâlâ bet). "Tuzak" diye check-back etme; küçük stab neredeyse tam-aralık — pratikte 3-bettor bu elleri teoriden de sık atar *(kalibre et)*. Sınır sorusu: **3-bettor'ın overcard/broadway kesimi bu dokuda düz çekilişi alıyor mu?** 8-7-6 / 9-8-7 (ve 9-8-2 / 8-7-3 gibi iki üst kartı ardışık olanlar — 9-8-2'de JT/QJ, 8-7-3'te T9/JT çekiliş alır) evet → seçici; 9-5-2 / 8-4-2 tipi gerçek kopuk hayır → serbest *(sınır board'ları kalibre et)*. B19.4'ün 3-bet-pot satırı, B18.5'in aynası: DÜŞÜK/bağlantılı board'da OOP 3-bettor çoğunlukla check eder, IP stab eder (A-high kopuk'ta tam-aralık, A-yok kopuk mono'da çoğunlukla küçük bet kalır).

### 32.5-EK-2 Düşük board'da OOP 3-bettor'ın hattını board değil 3-bet aralığının BLÖF kompozisyonu seçer — orta suited bağlantılı varsa küçük range-bet, yoksa check
32.5'in "düşük bağlantılı board'da OOP çoğunlukla check, IP stab" satırı SB'nin BTN'ye karşı dar, broadway-ağır 3-bet aralığı içindir. BB'nin BTN'ye karşı 3-bet aralığı blöfünü orta suited bağlantılıdan (98s/T8s/T7s tipi) + orta çiftlerden alır; o aralıkla 7-6-5 / 6-5-4 SENİN board'undur *(kalibre et)*:

- **Küçük tam-aralık bet, yüksek frekans:** iki-per/düz/set + overpair kütlesi sende; caller'ın offsuit broadway'i (KQo/KJo/JTo) otomatik katlanır, havuz backdoor'suz K9s/Q9s'ini de atar. Büyük boy gereksiz — katlanan zaten katlanıyor, kalan aralık güçlü; 99/TT'nin büyük bet EV'si küçüğe yakın.
- **Aralığında orta suited bağlantılı YOKSA** (SB-vs-BTN, premium-ağır BB 3-bet'i): 32.5 aynen — check, IP stab'a bırak.
- **Sınır kartı:** 8-7-6 / 9-8-7'de caller'ın Tx/JT gutshot'ı açılır → frekans düşer (32.5'in "overcard kesimi çekiliş alıyor mu" sorusunun aynası).

32.9 Drill 5'in cevabı ("7-6-5 küçük stab") SB-vs-BTN için doğru kalır; BB-vs-BTN'de OOP daha seyrek check ettiği için stab düğümü daha az açılır — drill'e "3-bettor kim?" sorusu. IP stab'ın turn devamı 19.4-EK-3'te.

### 32.5-EK IP 3-bettor ağacı (BTN 3-bet vs CO, 50–60bb): düşük board'da range-bet YOK — yüksek-equity orta broadway CHECK, bet = güçlü + düşük-equity blöf

IP 3-bettor'ken "agresörüm, 6-5-2'de küçük range-bet" refleksi kök hatadır. Düşük board'da OOP caller'ın aralığı (60bb'de bol suited connector/küçük çift) check-raise için doğal value (overpair, 54/65, 77–TT, set) + doğal blöf (K8/A7 backdoor) taşır. KQ/AJ/AT bet'lenince daha kötü el katlanmıyor, daha iyi el ödüyor, blöf-raise'e katlanıyor — bet-fold ettiğin el rakibi yeniyordu. Check-back edilince turn K/Q/J'de kicker tavanı sende → cooler'ı sen kurarsın. Bet: güçlü eller + JT tipi düşük-equity blöf (raise yerse kayıp küçük, KJ/QJ'yi katlatır).

- **A-düşük (A-5-2):** KK/QQ/KQs check-back — 6x/Ax katlanmaz, KJ/KT katlanır; check-back payı beşte bir civarı *(kalibre et)*.
- **Orta (9-8-3):** 8x ve çekilişsiz AK/AQ'nun bir kısmı check-back — raise yiyince pure call'a, turn'de OOP jam'ine mahkûm.
- **Yüksek board:** tersine küçük ve sık — ölçü "küçük boy suited Ax'i katlatıyor mu?" (J-9-7'de A5s backdoor katlanır, 9-7-3'te katlanmaz). K-Q-T'de nut turn'de değişir → flop küçük, para turn'de. Mono'da overcard'ın değeri "check-check sonrası rakip blöfler mi?"ye bağlı *(sınırda)*.

**Karşı-exploit (sen OOP caller'san):** havuz IP A-x-x düşükte range-bet'e yatkındır → küçük (~2.3×) check-raise'i 5x/Ax koruma + 8-7/8-6 wrap'lerle GENİŞ kullan; K8s/Q9s/T7s backdoor'ları katlanır *(kalibre et)* — 26.5 "flop 1/3 → x/r sık" satırının 3-bet-pot uygulaması.

### 32.6 Turn/river: polarlaşma ve kart-eşleme

Küçük flop bet'i call yedikten sonra turn çoğu kartta polarlaşır (büyük boy, orta katman check); düz/orta-per ekleyen turn'de lineer küçüğe döner *(kalibre et)*. **Blöf seçimi = bugünkü fold equity + yarınki value-jam kapasitesi** — orta perleri bloklamayan düşük Ax tipi unblocker öne çıkar; yüksek-equity çekiliş fold equity'ye muhtaç değildir, bedava realize eder. River: OOP, blöfü Ax-ağırlıklı IP'ye karşı AQ'yu FOLD, QJ'yi CALL eder — AQ blöfleri bloklar (B26.4).

**River overbet blöfünde kart-eşleme.** Blokeri yalnız "nut'u bloklar mı" diye seçme. Rakip bluff-catch kararını senin VALUE aralığınla eşleşen kartlara göre verir: flush GELEN board'da value'n orta kart + flush kartı taşıyorsa, o kartı tutan bluff-catcher (Ax + flush kartı) "eşleştirdim" diye CALL eder, tutmayan FOLD. Blöf adayının kritik özelliği rakibin premium bluff-catcher'ının kartını senin de taşımandır — "eşleşen" call sınıfını azaltır, kalanın katlanma payı çoğunlukla yükselir (fold equity artar, garanti değil). Alt cep + flush kartı bu yüzden flush gelen mono board'da doğal overbet blöfüdür; kaçan flush'ta flush kartı taşıyan blöfler çoğunlukla listenin sonundadır — rakibin zaten katlanacak ıskalamış çekilişini bloklarsın; bloklamayan aday varsa onu seç. Value iki boy: en üst Ax rakipteyse zayıf-orta Ax küçük, flush+ büyük. B11.2-EK'in saldırı yüzü *(kalibre et)*.

### 32.6-EK-2 En güçlü elin turn check'i: aralık koruması değil, blöf İNDÜKSİYONU — station'a karşı bet geri gelir
32.6 küçük flop bet call'landıktan sonra turn'ün polarlaştığını söyledi; tepenin neden check'te durduğunu söylemedi. Sebep koruma değildir:

- **Bet-bet-bet'in muhatabı gitti.** Küçük flop bet caller'ın havasını katlattı; kalan aralık per/çekiliş-ağır. Zayıf per'i (6x/5x) bet-bet-bet'e iyi fiyata rağmen katlanır — havuz "flop'ta top pair'dim" diye bile bırakır. Güçlü per'i (9x) check'ine kendisi bet eder — value kaçmaz. Havası/gutshot'ı (T8/Q8/K8 tipi) check'ine büyük blöf atar — AA hiçbirini bloklamaz. Üçü toplanınca AA'nın check EV'si bet EV'sini geçer *(kalibre et)*.
- **Mono board'da top set aynı kova** (IP 3-bettor, 9-8-4 mono): 99 rakibin top pair call'larını bloklar, bet'e ödeyecek el az; check-back rakibin polar düz-çekilişi blöflerini ve orta flush'larını indükler (32.3-EK-2).
- **Sınır:** rakip check'e blöf atmıyorsa (rec station) indüksiyon yok → bet geri gelir. Rakip river'da range-check ediyorsa river value boyun büyür; block-bet atıyorsa küçülür.

Gerekçe sınırı belirler: "koruma" rakipten bağımsız hep check der, "indüksiyon" station'a karşı bet'i geri getirir. 29.3'ün "set slowplay = range koruması" cümlesi mekanizmanın adını yanlış koyar — 26.2-EK-3 ile aynı köprü: koruma sonuçtur, sebep EV.

### 32.6-EK IP 3-bettor turn boyu kart yüksekliğiyle TERS — düşük/blank turn BÜYÜK, yüksek turn KÜÇÜK; blöf, "üç river'da value bet" elinden

32.6 "çoğu kartta polarlaşır" dedi; IP 3-bettor'da yön kartla ters çalışır. Küçük flop bet (J-9-7 / 9-8-3 / 6-5-2) call yedi:

- **Düşük/blank turn (3, 4, T):** rakibin devam aralığı suited-Ax backdoor, KQ/KJ, alt cep, gutshot — bu katman ~%65 pot ve üstüne katlanır, küçüğe katlanmaz; küçük boy onu bedava river'a taşır → BÜYÜK, efektif stack'in üçte biri civarı *(kalibre et)*. "Blank turn → küçük devam beti" ezberi burada yanlış.
- **Yüksek turn (K/Q):** senin aralığın o kartla yoğun (KQ/KJ/AK/QT/JT) → "neredeyse her şey" küçük ve sık; rakibin AQo/AJo ve alt cepleri küçüğe katlanır, per'ler zaten katlanmaz.
- **Blöf seçimi** — 32.6'nın "yarınki value-jam kapasitesi" ilkesi: K7/K6/K5 tipi (KQ/KJ'yi katlatır, K river'ında value), Q9 (QJ/KQ/AQ'yu katlatır); T7/98 gibi "gelince bile value beti şüpheli" eller turn'ü bet'lemez. Ölçü: "bu blöf en az üç river'da value bet'e dönüşüyor mu?" *(kalibre et)*. Havuz tersini yapar: JT'yi bet'ler, KJo/KTo'yu bet'lemez — 3-bet potunda en pahalı el-seçim hatası.
- **River jam blöfünde** ikinci liste: rakibin senin blöf sınıfın SANDIĞI eller — gerçek blöfü onun dışından seç (1.6); kart-eşlemeyle (32.6) birlikte okunur.

### 32.7 Kalibrasyon

*(kalibre et: kendi solver'ında 3-bettor düğümü — jam frekansı ve check sınıfı (40bb T-9-x); 100bb J-T-x'te büyük boy / turn stack-off payı; alt-çift bet/check EV farkı (A-K-x vs A-J-x); kayıtsızlık boyu (9-7-7); iki-boya indirmenin EV kaybı (B27.3); 100bb A-high top pair turn/river kontrol oranı; düşük kopuk board'da 100bb overpair boyu; IP check-node boyu. Saha: son 30 3-bet potunda caller'ın küçük bete fold oranı.)*

### 32.8 Cheat kartı

| Konu | Kural |
|---|---|
| **Tez + aralık** | Boyu doku tek başına değil, ıskalayan blok + el sınıfı seçer; 3-bettor'ın Ax'i oran olarak yoğun ama sınıf olarak dar/uç-ağırlıklı, caller'ınki orta-sınıf, geniş ve domine; iki fold bloğu: offsuit broadway + suited Kx/Qx/Ax çöp. Kök hata şişirenindir: lisans SPR + dokuya bağlı |
| **Jam ağacı** | SPR ≲2 (30-45bb) orta-bağlantılı: jam ya da check, ara boy yok. SPR ~3-4 ve üstünde (100bb'de ≳4-5) flop jam yok; en bağlantılı yüksek board'larda (overcard'lar nut-gutshot alıyorsa) büyük boy + turn stack-off ağırlığı, bir kademe altı çoğunlukla pot-boy *(hangileri: kalibre et)* |
| **100bb A-high** | Top pair çoğunlukla 2 sokak + river kontrol (atlanan sokak flop değil); wheel A-high'da check payı artar, küçük-bet sıklığı düşer — caller'ın wheel/set payı derinlikte değerlenir *(kalibre et)* |
| **Alt-çift pusulası** | TT-QQ bet istiyorsa lineer küçük; istemiyorsa polar büyük + alt çift check (frekans yüksek kalır — pusula boyu, aralık avantajı frekansı seçer) — alt çift tavanı, SPR tabanı koyar |
| **İki yüksek kart** | Çoğunlukla pot-boy polar *(kalibre et)*: value ≈ TPTK + overpair; blöf adayı ≈ alt per (showdown zayıf, cepleri bloklamaz) + yüksek gutshot; ikinci per / alt cep ağırlıkla check |
| **Düşük kopuk** | Aralık/overpair avantajı sende, nut caller'da; sığda büyük (commit + erime), 100bb'de merged → küçük-orta, kırılgan overpair bir kademe büyük *(kalibre et)*; 9-8-7 tipi check/küçük |
| **Eşleşmiş / mono** | Caller'da trips olası (9-7-7) → yarım pot civarı — nut onda ama orta katmanı küçüğe tam call eder, kayıtsızlık fiyatı (32.4); yüksek tek kart sende (A-J-J) → küçük, hedef katman küçüğe zaten katlanır; mono'da "nut flush kimde?" — A+düşük check ağırlıklı/küçük karışık, A-yok kopuk orta çoğunlukla küçük, caller'ın yapılı flush/düz kütlesi büyüdüyse (T-9-8 tipi; nut-fd payı yine sende) check ağırlıklı |
| **Üç broadway** | Her derinlikte küçük (nut avantajı ince — caller'da iki-per/düz yoğun, büyük boy onların kesimine commit olmaktır; kalibre et). Büyük boy / jam ağacı dinamik yüksek dokunun (J-T-x tipi): sığda flop bet + turn jam çıplak çekilişi kayıtsız bırakır, 100bb'de pot-boy |
| **IP check-node** | Yüksek/broadway board'da küçük stab verimsiz; yarım pot civarı, blöf adayı A taşımayan düşük suited bağlantılı / gutshot (rakibin katlanan A-high bloğunu bloklamaz); düşük Ax stab listesinin sonunda *(kalibre et)* |
| **Düşük board stab** | Bağlantılı düşükte (7-6-5 tipi) 3-bettor'ın ıskalayan broadway bloğu + overpair'in bir kısmı check eder → check-node'da küçük stab; kopuk düşükte (6-5-2) varsayılan c-bet (Düşük kopuk satırı). "Overcard kesimi düz çekilişi alıyor mu?" evetse seçici |
| **River overbet blöf** | Rakibin premium bluff-catcher'ının kartını taşı; alt cep — flush kartı yalnız flush GELEN river'da (kaçan flush'ta flush kartlı blöf listenin sonunda) |

### 32.9 Drill (5 soru)

1. 40bb, SB 3-bet, BTN call, flop T♠9♦4♣, elin A♠T♦. Hat?
   → **Jam.** Sığ SPR + orta-bağlantılı board + aralık avantajı: geride-ama-equity'li elleri katlatırsın; ara boy kopya (32.1).
2. Aynı el, aynı board, 100bb. Ne değişti?
   → **Jam yok; pot-boy/check.** 100bb'de flop jam çoğunlukla sınıf değil (SPR ≳4-5; ~3-4'te de iki-boy ağacı). T-9-x'te AK/AQ'nun nut-gutshot'ı yok, Q'da caller'ın KJ'si düz → pot-boy. Büyük boya en yakın doku, overcard'ların nut-gutshot aldığı J-T-x tipi board'dur *(kalibre et)* (32.3).
3. 100bb, A-K-4 rainbow'da TT: bet mi check mi? A-J-4'te?
   → **A-K-4 check, A-J-4 küçük bet.** Kx seni geçmiş → alt çift check, aralık polar; A-J-x'te Kx/Qx persiz overcard → lineer küçük (32.2).
4. 100bb, K-Q-6 rainbow, elin 7♥6♥. Blöf mü, hangi boy?
   → **Pot-boy blöf adayı.** Asız 6x: 6, 66/K6/Q6'yı bloklar; katlatmak istediğin 88-JJ ceplerini bloklamaz (7, 77'yi yarı-bloklar — ihmal edilebilir); Qx check'te kalır (32.4).
5. 3-bet'e call ettin, 100bb, flop 7-6-5 r, 3-bettor check, elin K♣J♦. Stab? 8-7-6 olsa?
   → **7-6-5 küçük stab; 8-7-6 seçici.** 7-6-5'te 3-bettor'ın check aralığı zayıf; 8-7-6'da overcard/Tx kesimi düz çekilişi alır (32.5).

*Kök hata bağı: B4 hatanın frekansını düşürür, B18 tek-raise'li flop'u, B11 şişmiş potun icrasını verir; B32 şişmiş potu KURANIN hatlarını verir. Kök hata değişmez ve şişirenindir: lisans sığ SPR + nut avantajlı dokuyla sınırlıdır, derinde, nut avantajının eridiği dokuda tek perle dokudan bağımsız stack-off eden 3-bettor kök hatayı yapar; capped caller'ın tek peri zaten bluff-catcher'dır. Guard: boyu board etiketine değil "hangi blok ıskaladı + alt çiftim bet istiyor mu + top pair'im kaç sokak taşıyor"a sor.*

---

## Bölüm 33 — Blind-vs-Blind: Limp, Raise ve Jam'in Derinlik Katmanları

*Kitapta BvB satırı yoktu: B4.3, B5.1 ve B23.12 kenarlarına dokunur, SB limp'inin mekanizmasını hiçbiri vermez. Baseline: ante'li 8-max, 30–60bb, ICM yok. B28.13'ün limp rejimi kelle motoruyla çalışır; buradaki limp SPR ve polarizasyon motoruyla — "limp = kelle avı" ezberini BvB'ye taşıma.*

### 33.0 Tez

> **BvB masanın en geniş aralıklı ve derinlikle en çok şekil değiştiren düğümüdür. SB OOP, BB pozisyonda. Ezber "limp = zayıf, raise = güçlü" değil, "hangi motor çalışıyor"dur.**

SB'nin limp'i derinlikle tek yönlü değişmez: ham limp payı HU'daki gibi jam/fold eşiğine kadar sığlaştıkça büyür, kabaca 12–15bb altında jam'e devrilerek küçülür *(kalibre et)*; limp'in İÇİ — limp-reraise/limp-jam dilimi — çoğunlukla U çizer *(kalibre et)*: derinde premium'un bir diliminin limp-reraise tuzağı, ortada incelir (ince premium kapağı + blocker blöfü), sığda blocker limp-jam'i. İki kolun içeriği farklıdır, her kolun motoru ayrıdır. HU-BTN'nin (B31.1) pozisyon-aynasıdır: orada limp IP'den yapılır, burada OOP'tan — oradaki "limp = ucuz flop görme" motoru burada çoğunlukla "OOP raise'in çağrılma dalından kaçınma + SPR kapanı" motoruna dönüşür. Gerekçe değişir ve eğri de kayar: yön aynıdır ama aynı derinlikte OOP SB, IP HU-BTN'den çoğunlukla daha fazla limp'ler. Raise-fold'un preflop maliyeti iki tarafta aynıdır; fark raise'in çağrıldığı ya da 3-bet yediği dalda çıkar: BTN raise'le pozisyonunu parayla büyütür (çağrılınca IP oynar), SB'nin raise'i çağrılınca büyümüş potta OOP kalır, 3-bet yediğinde fold pahalı, call pozisyon dışıdır — limp ise OOP'ye ucuz flop ve limp-reraise'le SPR kapanı verir. Fark derinde açılır, sığda kapanır *(kalibre et)*.

### 33.1 Derinlik katmanları — U eğrisi ve üç motor

| Katman *(kalibre et)* | Motor | SB premium | SB limp'in içeriği |
|---|---|---|---|
| **Derin** (kabaca 50–60bb üstü; 45–60bb orta→derin geçiş bandı) | SPR: limp-reraise kapanı premium'un bir dilimi için; gövde raise-first'te *(kalibre et)* | Karışık: çoğunlukla RAISE-first (aralık capped kalmaz), bir dilimi LIMP → iso'ya büyük reraise *(kalibre et)* | Derinleştikçe daralır ama sıfıra inmez; HU-BTN'e göre daha geniş ve merged (raise-fold'dan kaçan orta eller); limp-reraise dilimi korunur: premium'un bir kısmı + birkaç blocker blöfü *(kalibre et)* |
| **Orta** (kabaca 30–50bb) | BB iso'su polarize → limp-reraise hedefi dar | Çoğunlukla RAISE; ince limp-reraise kapağı | Limp-call gövdesi (suited/bağlı/küçük çift/zayıf Ax — iso'ya karşı fiyatla devam) + limp-fold kuyruğu (çöp) + küçük limp-reraise dilimi (ince premium kapağı + blocker blöfü, non-all-in); tuzak dilimi dipte |
| **Sığ** (kabaca 20–30bb) | BB'nin raise üstü jam'i ucuz → raise-fold pahalı | Büyük çift RAISE (yine); AK sınırda | Limp-call gövdesi (suited/bağlı/küçük çift/zayıf Ax — iso'ya karşı fiyatla devam) + limp-fold kuyruğu (çöp) + limp-jam dilimi (blocker Ax/Kx + küçük çift) buraya döner — derin kolun premium tuzağı değil, yarı-blöf; limp payı en kalın |

Katmanı efektif bb/SPR seçer; üç soru katmanın İÇİNDEKİ eşikleri kaydırır ve geçiş bandında (45–60bb) hangi tarafta oynayacağını belirler: "BB limp-reraise'ime suited elle call eder mi?" (derin) · "BB limp'ime çöple mi, suited elle mi iso ediyor?" (orta) · "BB raise'ime jam'ler mi?" (sığ). Derinleştikçe SB limp payını küçültür, raise-first'e kayar — premium'un gövdesi raise-first'te kalır, aralık capped olmaz; kalan limp'in içinde limp-reraise payı büyür — OOP derin potu hem raise'le hem kapanla büyütür, kapan payı derinlikle artar *(kalibre et)*. Sığlaştıkça limp kalınlaşır: iyi el raise-ve-al (blind+ante stack'e oranla büyük ödül), gerisi limp / limp-jam. Dördüncü katman — çok sığ (kabaca ≤15bb): raise-fold yok, 3-bet = jam, premium raise-call/jam, limp = limp-jam ağırlıklı, çöp fold — B3/B30'un jam-fold doktrinidir, bu bölümün dışında kalır *(kalibre et)*.

> **Pozisyon aynası (B31.1 ↔ B33.1).** Aynalanan pozisyondur, eğri değil. HU-BTN limp'i IP'dir, iso'yu OOP rakip yapar; BvB SB limp'i OOP'dir, iso'yu IP rakip (BB) yapar ve IP iso derinlikle çoğunlukla büyür. "Derinleştikçe raise, sığlaştıkça limp" yönü iki yerde de aynıdır; seviye ve içerik kayar: OOP raise'i çağrılınca büyümüş potta pozisyon dışı kaldığı için SB aynı derinlikte HU-BTN'den çoğunlukla daha fazla limp'ler — fazlalık raise-fold'dan kaçan orta ellerdir, limp dilimi daha geniş ve daha merged olur; limp-reraise dilimi korunur (premium'un bir kısmı + birkaç blocker), oransal payı HU-BTN'e göre sınırda *(kalibre et)* → eğri çoğunlukla düzleşir, derin kolda limp sıfıra inmez. Ters dönen yön değil; değişen motor ve eğrinin seviyesidir. HU için B31.1, BvB için burası.

### 33.1-EK 10bb BvB push/call cep ezberi — dördüncü katmanın cebe sığan hâli

SB push *(kalibre et)*: offsuit'te her Kx ve her Qx (Q2o ≈ sıfır ama havuz fazla katlar → push); Q'dan J'ye BÜYÜK düşüş: J7o+, sonra paralel T7o/97o/87o; 6x offsuit ve altı fold. Suited'te bir yüksek kart taşıyan her suited (T2s+, 92s sınırda); düşük suited'lerde bağlantı şart (74s/64s/65s push, kopuk en düşük suited fold). BB call *(kalibre et)*: her Ax, her Kx; K'den Q'ya büyük düşüş: Q8o+, J9o+, orta suited broadway. Ezber çıpası: push eşiği Q→J'de, call eşiği K→Q'da kırılır; ikisini karıştırma. Sınırdaki call çoğunlukla +EV — koşul havuzun limp-tuzaklamasıdır: havuzun jam aralığı dengeden daha az premium içerir (AA/KK'yı ara sıra limp'ler) → chart'tan az tepelidir, sınır call'ı "yumruk tokuşturma" olur, fold görece büyük hata; premium'unu da jam'leyen rakibe karşı aynı call sınıra/−EV'ye döner. Havuz kendi tarafında chart'ın sınırındaki call'ları (orta Qx-o / Jx-o ve zayıf suited broadway) çoğunlukla katlar → SB'nin en ince push'ları geçer; sen de at *(kendi havuz verinle kalibre et)*. HU chart'ını buraya taşıma: HU-BTN 10bb'de limp'i olduğu için open-jam'i dardır (B31.1), BvB SB OOP olduğu için jam iştahı yüksektir — iki jam aralığı da, call eşiği de ayrı ezberlenir. Bant altı: 8bb'de gamble belirgin genişler, 5→7bb geçişi en büyük sıçrama, ≤3bb her iki kart (B30.6).

### 33.2 SB'nin eli: derinde limp-reraise, sığda limp-jam

**Derin: premium'un bir dilimi limp'ler.** Gövde raise-first'te kalır (aralık capped olmaz); tuzağa giden dilimi kalibre et. Mekanizma: SB raise + BB call, flopa yüksek SPR'yle gider; BB'nin orta suited connector'ı üstüne vuran flopta tek per yakalar, kolayca uzaklaşır. Limp ise BB'yi raise'e çoğunlukla 3-bet etmeyen ama limp'i çoğunlukla izole eden **orta bant**la (orta suited connector, offsuit broadway) pozisyona davet eder; büyük limp-reraise *(kalibre et)* SPR'yi birkaç kat düşürür, aynı flopta aynı tek per çoğunlukla stack-off'a gider. EV çöpü katlatmaktan değil, o banttan gelir. Reraise'i value-ağırlıklı tut: hedef bant yapışkandır, yapışkanlık value'ya öder, blöfe değil.

**Kova inşası.** Her eli limp sonrası iso'ya vereceği cevaba göre koy: limp-fold (en zayıf offsuit, en düşük suited) · limp-call (iso'ya rahat devam eden QT/QJ tipi, suited orta broadway) · tepe (limp-reraise ya da raise). Kovaya sığmayan grup — orta Qx/Jx offsuit, boşluklu orta suited — **raise-fold'un doğal malzemesi**dir. Limp aşağıdan yukarı kurulur: önce raise-EV'si en düşük offsuit'ler, sonra "oynanabilir ama 3-bet yemek istemeyen" kalkan katmanı (düşük suited Kx/Qx, boşluklu düşük suited). Kural: **suited limp'ledinse tek iso'ya çoğunlukla fold yok** — en düşük suited istisnadır *(kalibre et)*; onun dışında fold edeceksen raise-fold et. İki sınır eli 50/50 karıştırma: iyisi raise, zayıfı limp. OOP olduğun için kalkan katmanı HU-BTN'den kalın olmalı *(kalibre et)*.

**Sığ: büyük çift raise'de kalır** *(kalibre et)*. BB limp'e sık ve küçük iso eder; limp-jam'i call ettiği aralık, raise'ime jam'lediği aralıktan dardır. Raise, BB'nin limp-jam'i call etmeyeceği elleri de jam'e getirir (jam aralığı > call aralığı) — büyük çift limp-jam'lerse o geniş çağrıyı kaybeder. AK sınırdadır: raise de olur, iso-üstü jam de (aşağıda). Limp-jam malzemesi en zayıf offsuit Ax (tekerlek kicker'lı), alt-orta offsuit Kx ve küçük çift *(sınırlar: kalibre et)*: iso'nun çöpünü katlatır, BB'nin call aralığını bloke eder, çağrılınca canlı equity taşır.

**İso üstü jam.** Soru "elim güçlü mü" değil, "kim call eder, onu domine ediyor muyum". Büyük offsuit As (AJ/AQ; AK sınırda, iki yön de olur) altındır: iso'daki orta suited As / güçlü broadway sınıfı hem iso eder hem call eder, postflop oynanabilirliği düşük. Suited orta broadway (KTs/KQs) tersi: jam'lersen sadece üstün öder, domine ettiğin Kx katlanır → limp-call (ortada zaten raise, 33.3) *(sınırlar: kalibre et)*. Havuz iso'ya/reraise'e teoriden çok jam'ler *(kalibre et)* → jam'e katlayacağın orta elle non-all-in reraise yapma.

### 33.2-EK SB'nin en dip dilimi — sıradaki el ucuz/kârlı bir koltuğa taşıyorsa bir tık ÇEK
22.10'un "kendi blind'in yaklaşıyorsa GENİŞLE" kuralı, yaklaşan bir MALİYETİ (blind ödemek) fiyatlar. Aynı motorun aynası SB'de çalışır: SB'den sonraki el BTN'dir — kör ödemeyen, masanın en kârlı koltuğu. SB'nin en dip marjinal dilimini (en marjinal jam/call/limp kombinasyonları) seçerken bust riski yalnız o elin kendi EV'sini değil, bir sonraki elde BTN'e "bedava" taşınma değerini de riske atar — bu yalnız SB'nin en dip dilimini ilgilendirir, gövde aralığı etkilenmez. *(sınırda, gelecek-oyun EV'si — edge/ICM tadında, saf chipEV'nin dışında; ICM'de gelecek-elin ağırlığı 22.2-EK-2'nin "varış rolü" ile birlikte okunmalı; kalibre et.)*

**Kural:** SB'nin en dip marjinal dilimini seçmeden önce sor: "sıradaki elde nereye taşınıyorum?" Pahalı bir koltuğa (kendi blind'in) taşınıyorsan dilimi GENİŞLET (22.10); ucuz/kârlı bir koltuğa (BTN) taşınıyorsan aynı dip dilimi bir tık ÇEK — ikisi aynı gelecek-el mantığının ayna yüzüdür.

### 33.3 Orta stack: BB'nin iso'su polarize olur — premium limp hedefi daralır, gövde raise'e kayar ("trap için fazla derin, reraise için fazla sığ")

Derinde BB limp'e depolarize iso eder; büyük çoğunluğu limp-reraise'e call eder. Orta derinlikte aynı BB aralığı ikiye böler: en güçlüleri reraise üstüne JAM'ler, offsuit çöpü iso-fold eder, **ortadaki suited elleri iso etmeyip check eder**. Limp-reraise'in hedefi daralır — reraise'e çoğunlukla ya jam gelir ya fold; limp-call ise potu premium için çok küçük bırakır. Aynı sebeple KQs/QJs/QTs ortada çoğunlukla RAISE'e kayar: raise'e fold etmeyen ama limp'i iso etmeyen o "check eden suited orta" banda karşı para koymak zorundasın; limp'lersen bedava flop görür. Ortada limp-reraise dilimi küçülür ama value+blöf karışık kalır: birkaç non-all-in blocker Ax/Kx blöfüne kapak olarak ince bir premium dilimi (en büyük çiftlerin bir kısmı) limp-reraise'de kalır — aksi halde BB'nin reraise üstü jam'i sınırsızlaşır; premium'un gövdesi raise'e kayar *(kalibre et)*. Limp-jam bu derinlikte overbet olur, sığ katmana aittir (33.2). Offsuit büyük As fast-play; daha zayıf suited broadway/bağlantılı (QTs altı: JTs, J9s, T9s tipi) oynanabilirlik hattında — sınır karışık *(kalibre et)*.

### 33.4 BB'nin limp'e yanıtı: iso, iso-jam — ve SB'nin jam'e call'ı

**İso.** Her elle aynı boyla refleks iso etme. En pahalı grup offsuit broadway'lerdir (KJo/QTo): iso etmek doğal gelir ama limp-reraise'in hedefi tam bu banttır. Düşük suited eller ucuz iso'dur: reraise'e katlanır, iso tutarsa pozisyonla oynar. Rakibin limp-reraise sıklığı boyu ve genişliği seçer: az ve küçük reraise eden havuza DAHA KÜÇÜK ve DAHA GENİŞ iso *(kalibre et)*; yetkin limp-reraiser'a offsuit broadway iso'larını kırp. Ante potu şişirdikçe hem limp hem iso ucuzlar — iso genişliği ante'siz ezberden geniştir *(kalibre et)*. IP-BB iso'su HU-OOP iso'sundan (B31.4) belirgin geniştir; iki ezberi karıştırma.

**İso-jam** *(~30bb, kalibre et)*. Malzeme 33.2'nin aynası: K5o/K6o tipi blocker (domine EDEN Kx'leri katlatır, çağrılınca yaşar) ve orta suited connector (non-all-in iso'ya limp-jam yemek istemez → direkt jam). Suited orta broadway jam'lenmez. Jam preflop all-in olduğu için pozisyondan bağımsızdır; non-all-in iso genişliği pozisyona bağlıdır.

**SB'nin call'ı — limp'e jam geldi.** All-in'de yalnız aralığa karşı ham equity + pot oranı sayar; "domine" sezgisi ham equity'yi yenmez. BB'nin jam dokusu Ax/çift ağırlıklı ve dar (value-yoğun) ise canlı orta suited connector (98s tipi), domine edilebilen zayıf suited Ax / offsuit broadway'den daha iyi call adayıdır; doku broadway ve connector'la genişse yüksek kart equity'si öne geçer, zayıf Ax / offsuit broadway sınırda call'a döner — eşik pot-oddsa ve derinliğe bağlı *(kalibre et)*. Havuz jam'i zayıf offsuit Ax'ten başlar, suited connector'a geç gelir *(kalibre et)* → havuza karşı connector call'ı görece iyi, offsuit broadway call'ı görece kötü; dar value-yoğun jam'e karşı iki sınıf da çoğunlukla fold. Limp-call tuzağı yalnız jam aralığını DOMİNE eden elle: K7s civarı ve üstü olabilir *(kalibre et)*, K2s olamaz — "gitmesi sorun değil ama domine etmiyor" elleri kendin jam'le. Call eşiği her bb sığlaştıkça yaklaşık bir kademe genişler *(kalibre et)* — tek referans ezberle, kaydır.

### 33.4-EK Cover eden BB'nin kısa SB limp'ine cevabı — 0 jam, POLAR iso (tepe + saf çöp + düşük offsuit Ax), ORTA KART YOK; benzer stack'te tersi: iso LİNEER

Kök hata: limp'e karşı chipEV BB iso ezberini (33.4) her stack ilişkisine uygulamak, ya da "büyük stack'im, limp'e jam'lerim". Mekanizma, iki ayrı dünya. (A) Sen lider BB, SB kısa ve tavan primli (limp aralığı dar: suited Kx/Ax + 7x/8x/9x connector + tuzak): jam SIFIR — min-raise jam gibi çalışır (SB KJo/Q9s/98s'i raise'e de katlar; raise'e devam eden ama jam'e katlanan el yok denecek kadar az), üstelik daha ucuz ve daha çok blöf taşır. İso POLAR: tepe (99+/AJ+) + saf çöp (62o/72o/T2o — pure *(kalibre et)*) + düşük offsuit Ax (A3o: A AA/AK'yı bloklar, 3 SB'nin limp gövdesine dokunmaz). Orta kartlı eller (7x/8x/9x, K5o) YOK — bunlar SB'nin limp-fold ettiği kartlar, onları tutmak fold'u bloklamaktır. SB'nin limp aralığı ne kadar sıkıysa value iso o kadar dar (TT/99 check-back!): AJ raise'lersen katlanan hep domine ettiğin, devam eden hep seni domine eden. (B) Benzer büyük stack'ler, prim düşük-orta (~%9 *(kalibre et)*): SB limp-reraise/limp-jam'i neredeyse hiç yok (prim o hattı kapatır) → BB iso'su LİNEER genişler: A9o/ATo/KQo/JTs/65s/76s gibi orta-değerli eller iso eder çünkü flop'u neredeyse hep görür, agresyon yemez; polar çöp dilimi de durur (73o/83o). Prim yükseldikçe (%9→%14→%15 *(kalibre et)*) iso frekansı kademeli düşer ve polarlaşır.

**Kural:** limp'e iso'nun dokusu SB'nin devam aralığıyla belirlenir: SB kısa-sıkı → polar iso, orta kart yok, jam yok; SB benzer-gevşek → lineer iso, orta suited eller içeride. 33.4 chipEV-BvB baseline'ıdır; FT'de iki uç bunlardır.

### 33.5 Popülasyon sapması — üç exploit

Havuz derinde limp'e teorinin çok altında iso eder ve SB raise'ine boydan bağımsız aynı oranda katlanır *(kalibre et)* — fiyat okumuyor, "bu eli oynarım/oynamam" diyor. Üç sonuç:

1. **SB'den derinde fold yok** — dip aralık cezalandırılmıyorsa her el oynanır.
2. **Limp sonrası OOP en zor oynanan dip çöp küçük raise-fold'a döner** *(kalibre et)* — fold oranı boydan bağımsızsa pahalı blöfün anlamı yok; aynı sapma value raise'ini büyütmeyi de öder. Yalnız bilinmeyen/pasif rakibe; iyi oyuncuya kova mantığı aynen.
3. **Value limp-reraise'i DARALT** — havuz güçlü elleri teoriden sık, zayıfları seyrek iso eder → limp-reraise'in karşısındaki devam aralığı da güçlü → yalnız premium (kabaca QQ+/AK, kalibre et) reraise-value. KQs/AJo/ATs sınıfı bu aralığa domine olur, reraise value değil ince blöf olur → limp'ten çıkar, açılış raise'ine taşı (limp seyrek iso yediği için tuzak da çalışmaz); limp'lendiyse limp-call kalır, reraise değil. Koşul: havuz limp'e seyrek iso ediyorsa; seni kapsayan AGRESİF iso'cuya karşı PKO'da tersine döner — TT+/AQ+ limp-reraise genişler (28.25). Kalibrasyon notu: havuz BB'si SB raise'ine 40–60bb'de teorinin kabaca yarısı kadar 3-bet eder; derin/orta katman sınırı havuzda ~45bb'ye iner — 60bb'yi derin gibi oyna *(kalibre et)*.

BB aynası: havuz derinde pasif → küçük potları sen kap, image'i orada kur; büyük pot geldiğinde ödeme o image'den gelir.

### 33.5-EK Sığ havuz (15–20bb): limp'e çok jam, az iso

33.5'in derin sapmasını (az iso) sığa taşıma. 15–20bb BvB'de havuz SB limp'ine teorinin birkaç katı jam'ler ve teorinin yarısı kadar non-all-in iso eder *(kalibre et)* — jam'i "iyi el"den seçer, iso'yu neredeyse hiçbir şeyden. Sonuç kitabın satırlarına şöyle iner:

**33.5'in "derinde SB'den fold yok" satırı sığa da geçer.** Cezalandırılmayan limp ekstra realize eder → 20bb'de en zayıf offsuit eller bile fold değil, limp.

**33.3'ün "orta suited raise'e kayar" satırı burada tersine döner.** Orta suited broadway iki yönde sıkışır — raise'e fazla jam gelir, limp'e az non-all-in iso gelir (jam gelirse yalnız 1bb'lik limp'i kaybedersin) → LİMP: postflop OK, tuzak payı var, güçlü iso aralığı zayıf limp-call'ını ezmez çünkü iso etmiyor.

**33.2'nin "limp-jam malzemesi küçük çift" satırının havuz düzeltmesi.** Küçük çiftin limp-jam EV'si iso'nun fold'undan gelir; iso gelmiyorsa en küçük çiftler OPEN-JAM'e döner (fold + canlı equity), orta çiftler limp'te kalır *(sınır: kalibre et)*.

**Jam ve raise setleri** *(sınırlar: kalibre et)*. Jam: offsuit Ax, en küçük çiftler, düşük/orta suited bağlantılılar — çağrılınca yüksek karta karşı canlı, domine edenleri katlatır. Non-all-in raise: tepe (havuz suited Ax'e geniş jam'ler, raise-call kârlı) ve yüksek-kart offsuit blocker sınıfı raise-fold; suited blöfler ve orta suited bağlantılılar sınırda — raise-fold ya da limp. Büyük çiftler limp-tuzak değil raise: 20bb'de dip aralığı katlatmak için jam'lemenin anlamı yok (B31.1-EK2).

**33.4'ün "her bb bir kademe" kuralına havuz indirimi.** Havuz limp'e teoriden GENİŞ jam'liyor → havuz jam'ine call aralığın da teoriden geniş olur, eşik aşağı iner *(kalibre et)*.

### 33.6 Asimetrik ve karışık stack

ChipEV/efektif-stack mekanizması; kelle yoktur, B28 cover mantığı buraya taşınmaz. Ortak ilke: rejam efektif stack'le fiyatlanır — derinin rejam'i ne ucuzlar ne pahalanır, kısanın rejam'i tüm stack'idir. Spotlar açıcı-vs-arka içindir; BvB yansıması: efektif stack kısanınkidir — kısa SB 20bb chart'ıyla, derin BB ona karşı aynı derinlik mantığıyla oynar; derin SB kısa BB'ye küçük open yerine open-jam düşünür.

**Kısa açıcıya karşı derin IP, arkada derin blind'lar → call DARALIR, çoğunlukla küçük commit-3-bet.** Kısa (~10–15bb, kalibre et) açtı, elin orta-iyi. Call'ı iki şey daraltır: kısayı commit eden 3-bet çok ucuz olduğu için flat'i domine eder; derin blind'lar ise non-all-in squeeze ile flat'i ezer ve kısaya karşı equity payını paylaşır. Kısanın aralığı polarizedir (nuts + raise-fold çöpü); onu commit eden küçük 3-bet *(kalibre et)* çöpü katlatır, value'suna karşı suited As/suited broadway'in equity'si yeter. Kısanın cevabı çoğunlukla fold, suited As'la jam, call neredeyse yok. Pozisyonda sınırda eller call kalır *(kalibre et)*. Hipotez: havuz burada çoğunlukla over-call eder *(showdown'la doğrula, kalibre et)* — over-call ediyorsa sapma senin lehine.

**Kısa sensen, masa derin → RFI'ı sınırda GENİŞLET.** ~20bb *(kalibre et)* açıyorsun, arkadakiler derin. Rejam onlara yalnız efektif ~20bb'ye mal olur — ICM yokken derinin rejam'i ne ucuzlar ne pahalanır; iştahı düşüren, derinin pozisyonda call'ı ve postflop'u tercih etmesi + birden çok derin arkadayken rejam'cinin cold-4-bet/call tehdidiyle sıkışmasıdır *(kalibre et)*. Call'a kayan masa küçük çift, küçük suited connector, orta suited Kx/Qx'e realize alanı açar → open olarak EV kazanır. Masa derinken (ör. turnuva başı) sık düşer. Efektif ~12bb'ye inince call seçeneği kalkar, derinin efektif-stack fiyatlı reshove'u küçük raise-fold'u yaşatmaz → jam-or-fold (B30.0-EK).

**Derin sensen, arkada kısalar → open daralt, open-JAM ekle.** Küçük open kısanın jam'ine açık → düşük suited Kx, boşluklu suited, zayıf offsuit broadway düşer; orta/küçük çift, suited Ax, suited broadway sınıfı open-jam olur *(sınırlar: kalibre et)* — open-jam kısanın fold-equity'li rejam'ini siler, raise-fold'u ortadan kaldırır; bedeli domine rejam'lerin value'sunu bilerek feda etmektir. O yüzden aralığın tepesi (büyük çift, büyük offsuit As) hâlâ min-raise-call oynar: domine rejam'i (domine offsuit broadway, orta Ax) katlatmak değil, indüklemek ister. Domine olabilen offsuit broadway min-raise'de kalır — kısa jam'lerse fold, call ederse pozisyonda oynanır *(kalibre et)*. Havuz kısa olarak açışa karşı call'ı neredeyse hiç, rejam'i tek hat olarak kullanır *(kalibre et)*.

**Derin blind'lar + kısa açıcı → call rejimi ve küçük 3-bet-fold geri gelir.** BTN/SB/BB birbirine derin (~35–45bb), açıcı kısa (~20bb) *(kalibre et)*. Kısayı commit eden 3-bet artık pahalı (açıcı ~20bb → commit boyu flat'i domine etmez) ve blind'lar BTN'nin call'ı üstüne ucuza jam'leyemez → BTN call aralığı genişler; jam "domine çağrı bulan" ellere (büyük offsuit As, güçlü suited broadway) + ORTA çiftlere iner *(kalibre et)* — küçük çift jam'ini arkadaki her büyük çift öder. Non-all-in 3-bet KÜÇÜK boy ister *(kalibre et)*: büyük boy kısaya bedava 4-bet-jam fiyatı verir. 3-bet-fold = domine olabilen offsuit eller; 3-bet-call = suited As ve equity'si yeten suited broadway *(sınırlar: kalibre et)*. SB kısa açıcıya 20bb chart'ıyla değil, BB'ye karşı 40bb mantığıyla oynar. SB call ettikten sonra BB'nin squeeze boyu kısanın kalan stack'ine göre seçilir: kısayı fiilen commit eden bir boy (yaklaşık BB stack'inin yarısı, *kalibre et*) 4-bet-jam fold-equity'sini kaldırır ve SB'yi tuzağı olmayan call aralığıyla jam-ya-fold'a zorlar. Kısa için call fiilen stack-off'tur: küçük çift fold, orta çift sınırda; stack-off eşiği büyük çift + AK, güçlü suited broadway sınırda *(eşikler: kalibre et)*.

### 33.6-EK Çapraz harita: kelle katmanı B28'de, balina-limp düğümü 23.1-EK'te
33.6'nın "kelle yoktur, B28 cover mantığı buraya taşınmaz" kuralı gövdede durur; eksik olan adres tablosudur. Aynı koltuklar kelle girince yön değiştirir — chipEV'de "efektif stack kısanınki" olan mekanizma PKO'da "kim kimi kapsıyor + kelle kimde" olur:

- **Kapsanan SB** (cover eden agresif BB'ye karşı): B33.2/33.3 katmanları kayar — cover eden BB raise'e jam'lemez, flat'ler ve iso eder; suited güçlü RAISE, offsuit güçlü As + çift LİMP-JAM (yarı-value), tepe büyük raise (28.26); tepenin limp-reraise'i tuzak değil pompa (28.25).
- **Cover eden SB, sığ HU-BvB (12–20bb):** ICM'in limp-ağırlıklı dokusu tersine döner — kelle equity açığını kapatır, tuzak gereksizleşir → limp çöker, aralık sıkı ama JAM-ağırlıklı (28.3-EK).
- **Cover eden SB, derin OOP:** VPIP değil agresyon genişler — fringe flat kesilir, lineer 3-bet açılır (28.1-EK).
- **Balina limp'i, karışık stack (kellesiz):** 33.6'nın "kısa açıcıya derin IP" mantığının limp düğümü 23.1-EK'te — stack'im jam'e sığıyor mu, arkada jam'leyen kaç kişi, arkadakilerle derin miyim.

Kural: BvB'de önce "kelle var mı?" — yoksa 33.6, varsa yukarıdaki adresler; kelle teşviki yalnız cover EDENDE, kapsananın kesilen şeyi blöftür.

### 33.6-EK-2 Simetrik-yüksek prim BvB'de ağaç rakibin iki düğmesine kilitli — jam'e call genişliği + limp'e iso sıklığı

Kök hata: "stone bubble → any-two jam" ya da "ICM → raise-only" ezberi. Mekanizma: iki taraf da ~%20 primle (küçük saha, lineer ödeme, tek kişi kala) teoride SB any-two jam'ler, BB yalnız 88+/AJs/AQo öder. BB bir pip geniş öderse (77/AJo/ATs — *kalibre et*) any-two jam neredeyse sıfır jam'e iner, ağaç LİMP'e döner (jam ~%13, limp gövde). BB limp'e teoriden çok iso ederse (QQ/JJ/AQ'yu check etmez — insanlar etmez) limp EV'si düşer, orta eller (orta suited Kx/Qx, küçük çift) jam'e GERİ döner, limp daralır, fold biraz artar. Raise dilimi yalnız AA/AKs + birkaç çöp: raise'e rejam gelince %20 primle stack-off yok. Limp'lenen güçlüler: KK/AK/suited Ax limp-jam, AA limp-raise, QQ bile limp-CALL — 99 ile stone bubble stack-off'u yok. Cover eden SB, kendi primi anlamlıyken (~%9) ve rakibinki ondan çok yüksek değilken de limp-ağırlıklıdır (limp %40+ — *kalibre et*): raise-call'a yetmeyen ama raise-fold'a yazık suited eller (KQs/QTs/K9s) limp'e; jam = "domine edenleri katlatan" 98/T8/J9 + offsuit Ax + küçük çift; raise = tepe + K9/K8/Q8 (T9/98 gibi worse öder, top pair'i daha iyi) + "tek yüksek + tek düşük". Q9/K9 jam'lenmez (yalnız bir üst kombo katlanır) → raise.

**Kural:** yüksek simetrik primde SB üç düğüm izler — BB jam'e ne kadar geniş ödüyor (jam genişliği), limp'e ne sıklıkta iso ediyor (limp/jam dengesi), raise neredeyse kapalı. B33'ün chipEV motoru yön olarak aynı; buradaki motor prim.

### 33.6-EK-3 FT BvB kısa SB (cover ediliyor, prim %20+): min-raise SIFIR, ağaç jam-veya-limp; QQ/AK/TT open-jam; limp-jam neredeyse yok

Kök hata: chipEV BvB katmanını (33.1–33.2) FT'ye taşımak — "17bb SB: raise/limp/limp-jam karışımı". Mekanizma: kısa SB'nin cover eden BB'ye karşı primi tavana yakınken (%20+ *(kalibre et)*) üç şey kırılır. (1) Min-raise ölür: BB geniş öder, flop'ta over-realize eder, SB hiçbir şeyi realize edemez → raise-first %0. (2) İndüksiyon ölür: %25 prim demek "limp → BB jam → A gösterdi → QQ fold" demektir; o yüzden QQ/JJ/TT/AK/AQ bile OPEN-JAM — tepeyi jam'leyince A4o/J9o gibi zayıfları da jam'e katabilirsin; KK/AA limp'te kalır (limp-jam/limp-click). (3) Limp-jam neredeyse yok: küçük çift limp-jam'lemez — 33 BB'nin blöflerini bloklar, BB kendini call aralığıyla bulur; offsuit Ax limp-jam'lemez — A8o LİMP-FOLD, A9o limp-raise; limp-raise dilimi premium + birkaç offsuit Ax blöfü. Toplam VPIP küçük (kabaca beşte bir *(kalibre et)*), limp gövdesi: en iyi suited connector, suited Kx/Ax, offsuit broadway; Q8o/K8o fold. Derinleştikçe (16→19bb) jam azalır, limp gövdesi genişler (limp'i koruyan AK/JJ limp'e döner). BB'nin iso'suna karşı: suited Kx/9x'ler call, offsuit KTo/QJo fold, çiftler limp-fold (!) — yalnız TT+/AK/KQ limp-jam. Prim ORTA ise (SB en kısa ama fark küçük, ~%9 vs %3 *(kalibre et)*) her şey geri gelir: limp %0'a iner, jam + raise (K6o raise), limp-call geniş.

**Kural:** kısa SB'nin ağacı primle üç moddur: prim tavan → jam-veya-limp (raise 0, limp-jam 0); prim orta → jam-veya-raise (limp 0); prim düşük/benzer stack → limp-ağırlıklı (33.1). 33.2 "limp-jam malzemesi küçük çift + zayıf offsuit Ax" chipEV/düşük primdir; tavan primde o dilim limp-fold/open-jam'e dağılır.

### 33.7 Kalibrasyon

Stratejiyi SEGMENT'lerde tut: derin / orta / sığ blok. Blok içinde her bb değişimine tepki verme; katman geçişini efektif bb/SPR tetiklesin (raise-fold/limp-fold'un stack'e maliyeti rakibin daha önce jam'lemiş olmasına bağlı değil), gözlem katman İÇİ eşikleri kaydırsın (limp-jam alt sınırı, jam'e call genişliği, iso boyu) — chart etiketini de gözlemi de bekleme (çoğunlukla). Havuz derinde çok az 3-bet, orta-sığda çok az jam eder *(kalibre et)* — iki katmanı neredeyse aynı oynar. Derin fazda küçük-potlu agresyon ucuzdur → ilk ellerde tester at (raise'e 3-bet geliyor mu, iso'ya hep fold mu), okumayı buradan al, parayı sığ fazın jam kararlarında kullan. Rakip erken fazda agresif/yapışkansa sığ fazda limp-jam ve jam-üstü call eşiklerini ona göre kaydır.

| Slot | *(kalibre et)* |
|---|---|
| Katman eşikleri | derin / orta / sığ bb sınırları — kendi solver'ında |
| Limp-reraise ve iso boyu | derinde SPR'yi kaç kat düşürüyor; az-reraise havuza küçük+geniş iso |
| Limp-jam / iso-jam / jam'e call | blocker Ax/Kx alt sınırı, küçük çift eşiği, referans bb + kademe/bb kaydırma |
| Commit-3-bet, kısayı commit eden squeeze boyu (33.6'nın çok-yönlü spotu; saf BvB'de squeeze yok) | kısa açıcının stack'ine oran |

### 33.7-EK HU-BTN için katman geçişi: default'u bb seçer, exploit'i rakibin ilk jam'i/iso'su

33.7'nin "katman geçişini efektif bb tetiklesin, gözlemi bekleme" kuralı BvB default'u içindir ve HU'da da default'u seçer. HU-BTN'de üstüne bir exploit katmanı biner; onun tetiği bb değil rakibin cevabıdır: 40→30bb'ye indin, chart limp'e geçmeni söylüyor, ama rakip raise'ine hâlâ jam'lemiyor ve limp'ine saldırmıyorsa raise stratejisini koru — "kırılmadıysa tamir etme". Asıl kırılma noktası rakibin cevabının değiştiği yerdir: raise'e ilk jam gelince limp payını chart seviyesine çek; limp'e ilk iso-jam gelince limp-fold payını kırp ve limp-call aralığını chart seviyesine — çoğunlukla daha geniş olana — çek (31.12), çünkü genişleyen jam aralığı daha çok elle call'ı fiyatlar. 31.6'nın tek-data-point kuralı burada geçerli: bir jam yeter, ikincisini bekleme. Sınır: exploit katmanı default'un altına inemez — rakip pasif diye 20bb'de raise-only oynamak, jam gelmeye başladığında raise-fold'u pahalı bırakır (33.1'in sığ motoru). Okuma yoksa (yeni rakip, ilk birkaç el) default katman; okuma gelince exploit; okuma bozulunca (rakip limp'lemeye/jam'lemeye başladı) tekrar default. B33.7 BvB için, bu satır HU-BTN için.

### 33.10 ICM katmanı (1): Lider SB'nin c-bet haritası — "lider = her board bet" en yaygın hata

B33 ICM'siz oynar. FT/bubble yakını BvB'de SB lider olarak açıp kısa BB call ettiğinde, postflop'u "prim farkı bende → range-bet" diye oynamak kitabın 21.3 "bir kademe yukarı"sını yanlış okumaktır. Yukarı kademe frekansı değil BOARD SEÇİMİNİ değiştirir:

- **Range-bet board'ları:** en az iki düşük kart, broadway yok (A-3-2, 8-3-2, 7-6-4, 6-4-3). Sebep: polar RFI aralığın offsuit 3x/6x/2x çöpü taşır, BB o elleri katlamıştır → ikinci/üçüncü per sende. Boy küçük değil ~%40 pot *(kalibre et)* — JTo/J9o'yu kayıtsız kılmak için. Bağlantılı düşük board'da küçük + jam bölünür (33.11).
- **Check-ağır board'lar:** orta-bağlantılı (J-T-7, T-8-6 — ~%90 check, jam-ya-check), broadway (K-T-6, K-J-8, Q-9-5), T-5-2 (BB'nin tüm suited Tx'i var). **A-K-9 aldatıcı:** AK sende ama 74o/J3o çöpün equity'yi çeker, BB'nin Kx/9x'i daha çok — equity'n en düşük buradadır *(kalibre et)*; bet edersen büyük-polar (Ax/Kx value + sıfır-equity backdoor blöf).
- **Orta board'lar** (9-7-5, J-9-4, Q-8-4, J-6-2): orta frekans; kuru → küçük, bağlantılı → büyük.
- **Eşit stack'te** harita aynı: düşük board küçük range-bet, limp'lediğin Tx yüzünden T-T-8 / J-T-7 / 9-8-8 range-check, broadway B70/check.
- **Havuz sapması:** kuru-kopuk board'da (T-7-3, J-6-2) küçük range-bet lehine sap — ICM havuzu J5s/K8o/Q9o'yu katlar. Bağlantılı board'da sapma yok, devamlar doğal.

> **Birkaç puan prim farkı her board'u satın almaz. Lider SB range-bet'i düşük broadway'siz board'a saklar (~%40 boy); orta-bağlantılı ve broadway board'lar — A-K-9 dahil — check-ağırdır. BB o board'larda ikinci per ve top-pair kütlesini taşır.**

### 33.11 ICM katmanı (2): SB'nin flop-jam'i — eriyen value, tek-yüksek-kart blöfü, katlanan renk çekilişi

21.5 sığ SPR'de kısa stack'in flop-jam'ini verdi; BvB-ICM'de jam'i LİDER ya da eşit stack atar ve boy 3x pota kadar çıkar *(kalibre et)*. Bağlantılı düşük/orta board'da (7-6-4, T-9-5, 8-7-5, T-9-5) sebep ikidir: value'n sokak sokak erir, ve korkutucu river'da zaten ödenmezsin.

- **Value:** koruma isteyen orta el — 99–QQ, 7x, AT/JJ, KT/QT. Renk kartı taşıyan overpair check (elinde renk-out var, acele yok), taşımayan jam.
- **Blöf çekiliş değil:** renk çekilişi jam'lenmez (21.2-EK-4). Blöf tek yüksek kart + doğru renk kartı mantığı: AJ/AQ'yu renk kartı OLMADAN — BB'nin A-high renk çekilişi call'unu domine et, o kart rakipte olsun; A2'yi renk kartıyla — o kart rakipte olmasın; K8/Q8/J8 renk-kartlı gutshot. Düşük board'da overcard'lı düz çekilişleri (T3/J3/Q3) ekle.
- **BB'nin cevabı (aynı hattın öbür koltuğu):** top-pair call; backup'sız ikinci/üçüncü per fold; ÇIPLAK renk çekilişi fold — A-high olanlar dahil *(kalibre et)*; kombo-çekiliş ve iki-overcard + renk çekilişi call. Düz çekilişli K4-fd call, çıplak K3-fd fold. Bloker satırı 21.1-EK'te: KT fold, Q9 call.
- **Karşılık:** SB küçük boyla da bet ediyorsa BB o küçük bete raise'i az, call'ı geniş oynar — küçük aralık ya nut ya çöp (jam orta eli aldı), raise hedefsiz.

> **BvB-ICM'de flop-jam koruma satın alır: value eriyen orta el, blöf tek yüksek kart + renk-kartı mantığı (AQ renk kartsız, A2 renk kartlı). BB olarak çıplak renk çekilişini jam'e katla; kombo ve iki-overcard call.**

### 33.12 Iso-raise potunda BB'nin en iyi equity kovası yüksek karttır
SB limp / BB iso-raise potunda SB'nin call aralığı hem tepesiz (premium SB'de kalmaz, raise-first'e gider) hem de dipten arınmıştır (33.2'nin kova inşası: en zayıf offsuit/suited limp-fold'a düşer) — saf orta-bant, CAPPED bir aralıktır. BB'nin iso-raise aralığı ise tam tersine tepe ağırlıklıdır: Ax/Kx ve broadway yoğunluğu, üst çiftler (bkz. 33.4). Bu yapı sezgiyi doğrular: A-yüksek/K-yüksek board'da BB'nin Ax/Kx/broadway yoğunluğu boarda tam oturur, SB'nin capped orta-bant aralığı (76s/54s/33 tipi) o board'u sık KOMPLE ıskalar — capped olmak yüksek kartlarla eşleşme garantisi vermez, kicker tek başına equity üretmez. Bu yüzden A-yüksek/K-yüksek board BB için EN YÜKSEK equity kovasıdır. BB'nin en DÜŞÜK equity kovası tam tersine düşük/dağınık board'lardır: SB'nin orta-bant aralığı (küçük per, connector) orayı sık vurur, BB'nin Ax/broadway ağırlıklı aralığı orada whiff eder.

**Kural:** iso-raise potunda board equity'sini "kimin aralığı dipsiz/tepesiz" sorusuyla değil "kimin aralığı o boarda daha yoğun" sorusuyla oku — BB'nin tepe ağırlıklı iso-raise aralığı yüksek-kart board'da en güçlü, SB'nin capped orta-bant aralığının vurduğu düşük-dağınık board'da en zayıf kovadır.

### 33.8 Cheat kartı

| Konu | Kural |
|---|---|
| **Katman seçimi** | Efektif bb/SPR seçer; üç soru katman-içi eşikleri ve geçiş bandını (45–60bb) ayarlar: reraise'ime suited call var mı (derin) / limp'ime kim iso ediyor (orta) / raise'ime jam var mı (sığ) |
| **Derin premium** | Çoğunlukla RAISE-first (aralık capped kalmaz); bir dilimi LIMP → iso'ya büyük reraise tuzağı *(kalibre et)*; küçük raise potu/SPR'yi yüksek bırakır, büyük reraise SPR'yi düşürür → reraise value-ağırlıklı |
| **Orta premium + KQs/QJs** | Çoğunlukla RAISE — BB iso'su polarize, limp-reraise hedefi dar; ince premium kapağı + blocker blöfü limp-reraise'de kalır *(kalibre et)*; limp-jam sığ katmana ait |
| **Sığ premium / limp-jam** | Büyük çift RAISE (jam aralığı > limp-jam'e call aralığı); AK sınırda — raise ya da iso-üstü jam; limp-jam malzemesi en zayıf offsuit Ax/Kx + küçük çift *(kalibre et)* |
| **Suited limp** | Tek iso'ya çoğunlukla fold YOK (en düşük suited istisna, kalibre et) — fold edeceksen raise-fold et |
| **Raise-fold / limp-fold malzemesi** | Kovaya sığmayan orta Qx/Jx offsuit, boşluklu suited → raise-fold; sınırdaki iki elden iyisi raise, zayıfı limp — karıştırma yok |
| **BB iso** | Offsuit broadway pahalı, düşük suited ucuz; az-reraise havuza küçük+geniş; ante genişletir; HU-OOP iso'dan geniş |
| **İso üstü jam** | Domine çağrı bulan (büyük offsuit As); suited orta broadway jam'lenmez |
| **Limp'e jam geldi** | Ham equity + pot oranı karar verir *(kalibre et)*: Ax/çift-ağırlıklı dar (value-yoğun) jam'e canlı orta suited connector iyi, domine zayıf Ax / offsuit broadway kötü; geniş jam'e yüksek kart öne geçer; tuzak yalnız jam aralığını domine eden el |
| **Havuz** | Derinde SB fold yok; dip çöp küçük raise-fold; value limp-reraise'i DARALT (yalnız premium), KQs/AJo/ATs açılış raise'ine |
| **Kısa açıcı, sen derin IP** | Call DARALIR — çoğunlukla küçük commit-3-bet ya da fold; pozisyonda sınırda eller call kalır |
| **Derin blind'lar + kısa açıcı** | Call rejimi + küçük 3-bet-fold; kısayı commit eden squeeze boyu (≈BB stack'inin yarısı, kalibre et) SB'yi jam-ya-fold'a zorlar, kısa için call = stack-off |

### 33.9 Drill (5 soru)

1. **BV1.** Derin BvB *(kalibre et; kabaca 70bb+)*, SB'de AA. Gövde raise-first'te kalırken hangi dilim limp-reraise tuzağına gider, neden aralık capped kalmamalı? BB'nin hangi bandı raise'e call, limp'e iso eder — EV oradan nasıl gelir?
2. **BV2.** ~40bb, SB'de KQs. Limp mi raise mi? BB'nin iso aralığı bu derinlikte nasıl bölünür ve bu neden kararı belirler?
3. **BV3.** ~25bb, SB'de A3o. Limp-call/limp-fold mu, limp-jam mi, raise-fold mu — fold masada yok? AA olsaydı hangi hatlar açık kalır; A3o'nun limp-jam'i neden sınırda bir hattır ve ağırlıkla fold-equity'ye yaslanır (çağrılınca yalnız canlı equity), raise-fold'u BB'nin jam sıklığı nasıl fiyatlar?
4. **BV4.** SB'den limp'ledin, BB ~15–20bb ile jam'ledi *(kalibre et)*. 98s ve KTo — jam dokusu Ax/çift-ağırlıklı dar (value-yoğun) bir aralıksa hangisi call; doku broadway'le genişlerse karar nasıl döner? Ham equity + pot oranından çık.
5. **BV5.** SB ~12bb min-raise açtı, sen BB'de derinsin, elinde ATs. Call mı jam mı? Kısanın polar aralığına (nuts + raise-fold çöpü) karşı jam çöpü katlatıp value'suna equity taşır; call açıcıyı her flopta commit bırakır — hangi hat, neden? (33.6'nın derin-IP mantığının BvB yansıması.)

*Kök hata bağı: BvB'de kök hata preflop'ta doğar — derinde premium'u raise edip OOP şişmiş potta tek per'le stack-off etmek (raise'in kendisi değil, per'e yapışmak hatadır), ya da sığda "limp = zayıf" ezberiyle raise-fold'u BB'nin jam'ine hediye etmek. B31.1'in pozisyon-aynası, B5.1 ve B17.3'ün şartlandırması; postflop yapışkanlık B23.12'ye bağlanır.*
`;function K(e){return e.replace(/\*\*(.+?)\*\*/g,"$1").replace(/`(.+?)`/g,"$1").replace(/\*(.+?)\*/g,"$1").trim()}function Za(e){const i=l=>l.trim().replace(/^\|/,"").replace(/\|$/,"").split("|").map(t=>K(t)),r=i(e[0]),n=e.slice(2).map(i);return{headers:r,rows:n}}function va(){const e=[];for(const i of ha.split(`
`)){if(!i.startsWith("## ")||i.startsWith("### "))continue;const r=i.slice(3).trim().match(/^Bölüm\s+(\d+)\s*(?:[—-]\s*(.*))?$/);if(!r)continue;const n=K(r[2]||"");let l=n.split(":")[0].trim()||`Bölüm ${r[1]}`;l.length>44&&(l=l.slice(0,41).trimEnd()+"…"),e.push({n:Number(r[1]),title:n,short:l})}return e.sort((i,r)=>i.n-r.n)}function g(e){const i=ha.split(`
`),r=[];let n=!1;for(const l of i){if(l.startsWith("## ")&&!l.startsWith("### ")){if(l.slice(3).trim().startsWith(e)){n=!0;continue}if(n)break}n&&r.push(l)}return r.join(`
`)}function We(){const e=g("Bölüm 0"),i=[];let r=null;for(const n of e.split(`
`)){const l=n.match(/^\s*(\d+)\.\s+\*\*(.+?)\*\*\s*$/);l?(r&&i.push(r),r={n:Number(l[1]),rule:K(l[2]),context:""}):r&&n.trim()&&!n.trim().startsWith("#")&&!n.trim().startsWith("*")&&(r.context=(r.context+" "+K(n.trim())).trim())}return r&&i.push(r),i.filter(n=>n.n>=1&&n.n<=15)}function za(e){const i=e.split(`
`),r=[];let n=null;for(const l of i)l.startsWith("### ")?(n&&r.push({title:n.title,body:n.body.join(`
`)}),n={title:l.slice(4).trim(),body:[]}):n&&n.body.push(l);return n&&r.push({title:n.title,body:n.body.join(`
`)}),r}function f(e,i){const r=za(e).find(n=>n.title.startsWith(i));return r?r.body:""}function T(e){const i=e.split(`
`),r=[];for(const n of i)if(n.trim().startsWith("|"))r.push(n);else if(r.length)break;return r.length>=2?Za(r):null}function C(e,i){const r=i?/^\s*\d+\.\s+(.*)$/:/^\s*[-*]\s+(.*)$/;return e.split(`
`).map(n=>n.match(r)).filter(n=>!!n).map(n=>K(n[1]))}function Xe(){const e=g("Bölüm 4"),r=f(e,"4.3").split(`
`),n=[];let l=null;const t=()=>{var o,u,y,p,v;if(!l)return;const k=l.buf.join(`
`);let d=T(k),s=[];if(d)s=l.buf.filter(A=>/^\*\*[^*]*flat/i.test(A.trim())).map(A=>K(A));else{const A=(o=k.match(/VALUE:\*\*\s*(.+)/i))==null?void 0:o[1],c=(u=k.match(/BL[ÖO]F:\*\*\s*(.+)/i))==null?void 0:u[1];if(A||c){const P=((p=(y=/yaln[ıi]z\s+(BB|SB|BTN|CO)/i.exec(l.label))==null?void 0:y[1])==null?void 0:p.toUpperCase())||"BB";d={headers:["Pozisyon","VALUE","BLÖF"],rows:[[P,K(A||""),K(c||"")]]};const O=(v=k.match(/Flat:\*\*\s*(.+)/i))==null?void 0:v[1];O&&(s=[`${P} flat: ${K(O)}`])}}d&&n.push({opener:$a(l.label),label:l.label,table:d,flats:s}),l=null};for(const k of r){const d=k.trim().match(/^\*\*(.+?açılışına karşı.*?)\*\*$/);d?(t(),l={label:d[1],buf:[]}):l&&l.buf.push(k)}return t(),n}function $a(e){return e.split("açılışına")[0].trim().replace(/\s*\/\s*/g,"/")}function ai(){const e=g("Hızlı Referans");return{decisionOrder:C(f(e,"Karar sırası"),!0),sizes:T(f(e,"Boyutlar")),band2530:T(f(e,"25")),postflop:T(f(e,"Postflop")),icm:T(f(e,"ICM")),multiway:T(f(e,"Multiway")),tilt:T(f(e,"Tilt")),redFlags:C(f(e,"Kırmızı bayraklar"),!1)}}function ei(){const e=g("Bölüm 10");return za(e).map(i=>({title:i.title,questions:C(i.body,!0)})).filter(i=>i.questions.length>0)}function B(e,i){const r=g(e),n=i?f(r,i):r;return T(n)}function ii(){const e=B("Bölüm 5","5.1");return e?e.rows.map(i=>({position:i[0],range:i[1]})):[]}function ri(){const e=B("Bölüm 5","5.2");return e?e.rows.map(i=>({vs:i[0],range:i[1]})):[]}function ni(){const i=f(g("Bölüm 5"),"5.3").match(/geldiyse:\s*([^.]+)\./);return i?K(i[1]):""}function li(){const e=B("Bölüm 4","4.5");if(!e)return null;const i=o=>{const u=e.rows.find(y=>y[0].toLowerCase().startsWith(o));return u?u[1]:""},r=o=>o.split(/[—;:]/)[0].trim(),n=r(i("4-bet value")),l=r(i("4-bet karışım")),t=r(i("4-bet blöf")),k=r(i("flat")),d=i("fold"),s=l?l.split(",").map(o=>`${o.trim()} (karışım)`).join(", "):"";return{value:s?`${n}, ${s}`:n,blof:t,flat:k,foldNote:d}}function ki(){const e=f(g("Bölüm 4"),"4.6"),i=e.match(/VALUE:\*\*\s*(.+)/i),r=e.match(/BLÖF:\*\*\s*(.+)/i);return!i&&!r?null:{value:i?K(i[1]):"",blof:r?K(r[1]):""}}function ti(){return B("Bölüm 4","4.7")}function di(){return B("Bölüm 14","14.1")}function si(){const i=f(g("Bölüm 14"),"14.1").match(/\*\*Kural:\*\*\s*(.+)/);return i?K(i[1]):""}function oi(){return B("Bölüm 11","11.1")}function bi(){return B("Bölüm 6","6.2")}function ui(){return B("Bölüm 11","11.2")}function yi(){return B("Bölüm 11","11.3")}function mi(){return C(f(g("Bölüm 11"),"11.4"),!1)}function ci(){return B("Bölüm 13","13.1")}function pi(){return B("Bölüm 4","4.9")}function fi(){return B("Bölüm 4","4.10")}function J(e,i){const r=new RegExp(`\\*\\*${i}[^*]*\\*\\*\\s*([^\\n]+)`),n=e.match(r);return n?K(n[1]):""}function hi(){return J(f(g("Bölüm 4"),"4.10"),"Raise karşısında")}function vi(){return J(f(g("Bölüm 4"),"4.10"),"Kısa kural")}function zi(){return J(f(g("Bölüm 4"),"4.9"),"Neden offsuit çok daha sert")}function gi(){return J(f(g("Bölüm 4"),"4.9"),"Postflop")}function Ai(){return C(f(g("Bölüm 4"),"4.11"),!1)}function Ki(){return J(f(g("Bölüm 4"),"4.11"),"Açılış")}const ea=va().map(e=>({n:e.n,short:e.short}));function Wa(e){var i;return((i=va().find(r=>r.n===e))==null?void 0:i.title)||""}function Xa(e){const i=e.split(`
`),r=[];let n=[];const l=()=>{const k=n.join(" ").trim();k&&r.push({k:"p",text:k}),n=[]};let t=0;for(;t<i.length;){const k=i[t].trim();if(k===""||k==="---")l(),t++;else if(k.startsWith("### "))l(),r.push({k:"h3",text:k.slice(4).trim()}),t++;else if(k.startsWith("|")){l();const d=[];for(;t<i.length&&i[t].trim().startsWith("|");)d.push(i[t++].trim());const s=o=>o.replace(/^\|/,"").replace(/\|$/,"").split("|").map(u=>K(u));r.push({k:"table",headers:s(d[0]),rows:d.slice(2).map(s)})}else if(k.startsWith("> "))l(),r.push({k:"quote",text:k.slice(2).trim()}),t++;else if(/^([-*]|\d+\.)\s/.test(k)){l();const d=[];for(;t<i.length&&/^([-*]|\d+\.)\s/.test(i[t].trim());)d.push(i[t++].trim().replace(/^([-*]|\d+\.)\s/,""));r.push({k:"list",items:d})}else n.push(k),t++}return l(),r}function Q({text:e}){const i=e.split(/(\*\*[^*]+?\*\*|\*[^*]+?\*)/g).filter(Boolean);return a.jsx(a.Fragment,{children:i.map((r,n)=>r.startsWith("**")&&r.endsWith("**")?a.jsx("b",{children:r.slice(2,-2)},n):r.startsWith("*")&&r.endsWith("*")?a.jsx("i",{className:"text-neutral-400",children:r.slice(1,-1)},n):a.jsx("span",{children:r},n))})}function ae({title:e,onDone:i}){const r=b.useMemo(()=>Xa(g(e)),[e]),n=b.useMemo(()=>Wa(Number(e.replace(/\D+/g,""))),[e]),l=b.useRef(null),t=b.useMemo(()=>r.map((d,s)=>d.k==="h3"?{i:s,text:d.text}:null).filter(Boolean),[r]),k=d=>{var s,o;return(o=(s=l.current)==null?void 0:s.querySelector(`#sec-${d}`))==null?void 0:o.scrollIntoView({block:"start",behavior:"smooth"})};return r.length===0?a.jsxs("div",{className:"flex flex-col gap-3 p-4",children:[a.jsx("button",{onClick:i,className:"text-left text-sm text-neutral-400",children:"← Bölümler"}),a.jsxs("p",{className:"text-[13px] text-neutral-300",children:["Bölüm bulunamadı: ",e]})]}):a.jsxs("div",{ref:l,className:"flex flex-col gap-3 p-4",children:[a.jsxs("div",{className:"sticky top-0 -mx-4 -mt-4 flex items-center justify-between bg-surface-0 px-4 py-3 text-sm",children:[a.jsx("button",{onClick:i,className:"text-neutral-400",children:"← Bölümler"}),a.jsx("span",{className:"font-semibold text-neutral-100",children:"📖 Kitap"}),a.jsx("span",{className:"w-16"})]}),a.jsxs("h1",{className:"text-base font-semibold leading-snug text-neutral-100",children:[e,n&&a.jsx("span",{className:"block text-[13px] font-normal text-neutral-400",children:n})]}),t.length>=4&&a.jsxs("details",{className:"card p-3",children:[a.jsxs("summary",{className:"cursor-pointer text-[13px] font-semibold text-neutral-200",children:["İçindekiler (",t.length," başlık)"]}),a.jsx("ul",{className:"mt-2 space-y-1",children:t.map(d=>a.jsx("li",{children:a.jsx("button",{onClick:()=>k(d.i),className:"text-left text-[12px] leading-snug text-accent",children:d.text})},d.i))})]}),r.map((d,s)=>d.k==="h3"?a.jsx("h2",{id:`sec-${s}`,className:"mt-2 scroll-mt-14 text-sm font-semibold text-accent",children:d.text},s):d.k==="quote"?a.jsx("blockquote",{className:"border-l-2 border-accent bg-accent-soft px-3 py-2 text-[13px] font-medium leading-relaxed text-accent",children:a.jsx(Q,{text:d.text})},s):d.k==="list"?a.jsx("ul",{className:"ml-1 space-y-1",children:d.items.map((o,u)=>a.jsxs("li",{className:"flex gap-2 text-[13px] leading-snug text-neutral-200",children:[a.jsx("span",{className:"shrink-0 text-accent",children:"•"}),a.jsx("span",{children:a.jsx(Q,{text:o})})]},u))},s):d.k==="table"?a.jsx("div",{className:"-mx-1 overflow-x-auto px-1",children:a.jsxs("table",{className:`border-collapse text-[12px] ${d.headers.length>=4?"min-w-[640px]":"w-full"}`,children:[a.jsx("thead",{children:a.jsx("tr",{children:d.headers.map((o,u)=>a.jsx("th",{className:"border border-surface-3 bg-surface-2 px-2 py-1 text-left font-semibold text-neutral-300",children:o},u))})}),a.jsx("tbody",{children:d.rows.map((o,u)=>a.jsx("tr",{children:o.map((y,p)=>a.jsx("td",{className:`border border-surface-3 px-2 py-1 align-top text-neutral-200 ${p===0&&d.headers.length>=4?"whitespace-nowrap":""}`,children:a.jsx(Q,{text:y})},p))},u))})]})},s):a.jsx("p",{className:"text-[13px] leading-relaxed text-neutral-300",children:a.jsx(Q,{text:d.text})},s))]})}const ga="leakcard:date";function ee(){var i;const e=((i=qa()[0])==null?void 0:i.kavram)||"";return/icm|cover/i.test(e)?"cover":"pot"}function Aa(){return new Date().toISOString().slice(0,10)}function ie(){return x(ga,"")===Aa()}function ia(){const e=Math.random()<.45,i=4+Math.floor(Math.random()*60),r=8+Math.floor(Math.random()*90),n=i/(i+r),l=e||n>=.4;return{potBb:i,behindBb:r,threeBet:e,bloated:l}}function re(){const[e,i]=b.useState(ie()?"hidden":"card"),[r]=b.useState(()=>ee()),n=b.useRef(null);if(b.useEffect(()=>{var t,k;e!=="hidden"&&((k=(t=n.current)==null?void 0:t.querySelector("button"))==null||k.focus())},[e]),e==="hidden")return null;const l=()=>{E(ga,Aa()),F(),i("hidden")};return a.jsx("div",{ref:n,role:"dialog","aria-modal":"true","aria-label":"Günün kartı",onKeyDown:t=>{var o;if(t.key!=="Tab")return;const k=(o=n.current)==null?void 0:o.querySelectorAll("button, input, textarea, a[href]");if(!k||k.length===0)return;const d=k[0],s=k[k.length-1];t.shiftKey&&document.activeElement===d?(t.preventDefault(),s.focus()):!t.shiftKey&&document.activeElement===s&&(t.preventDefault(),d.focus())},className:"fixed inset-0 z-50 flex flex-col bg-surface-0/95 backdrop-blur",children:a.jsx("div",{className:"mx-auto flex h-full w-full max-w-md flex-col",children:e==="card"?r==="cover"?a.jsx(le,{onDrill:()=>i("drill"),onDone:l}):a.jsx(ne,{onDrill:()=>i("drill"),onDone:l}):r==="cover"?a.jsx(ke,{onDone:l}):a.jsx(te,{onDone:l})})})}function ne({onDrill:e,onDone:i}){return a.jsxs("div",{className:"flex flex-1 flex-col justify-center gap-6 p-6",children:[a.jsx("div",{className:"text-center text-xs uppercase tracking-[0.2em] text-accent",children:"Günün kartı"}),a.jsx("div",{className:"card border-l-4 border-accent p-6",children:a.jsxs("p",{className:"text-lg leading-relaxed",children:[a.jsx("b",{className:"text-accent",children:"EĞER"})," pot şişmiş (3-bet+ pot ya da stack'imin ~%40'ı ortada)"," ",a.jsx("b",{className:"text-accent",children:"VE"})," elimde tek per var,",a.jsx("br",{}),a.jsx("b",{className:"text-accent",children:"O ZAMAN"})," içimden ",a.jsx("b",{children:'"bluff-catcher"'})," derim: check/call ya da fold —"," ",a.jsx("b",{children:"asla value raise."})]})}),a.jsx("p",{className:"text-center text-[11px] text-neutral-600",children:"Kitabın tanımı: şişmiş = 3-bet+ pot. “~%40 stack ortada” pratik bir sezgi (kitap dışı)."}),a.jsx("p",{className:"text-center text-sm text-neutral-500",children:"Yüksek sesle bir kez oku. Masada bu cümle otomatik ateşlenecek."}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("button",{onClick:i,className:"btn-accent w-full py-3 text-base",children:"Prova ettim ✓"}),a.jsx("button",{onClick:e,className:"btn-ghost w-full py-3",children:"⏱ 90sn cue drill →"})]})]})}function le({onDrill:e,onDone:i}){return a.jsxs("div",{className:"flex flex-1 flex-col justify-center gap-6 p-6",children:[a.jsx("div",{className:"text-center text-xs uppercase tracking-[0.2em] text-accent",children:"Günün kartı"}),a.jsx("div",{className:"card border-l-4 border-accent p-6",children:a.jsxs("p",{className:"text-lg leading-relaxed",children:[a.jsx("b",{className:"text-accent",children:"EĞER"})," jam'e fold basmak üzereysem,",a.jsx("br",{}),a.jsx("b",{className:"text-accent",children:"O ZAMAN"})," önce sınıflarım: ",a.jsx("b",{children:"seni cover eden mi, senin cover ettiğin mi?"})," Cover edilmiyorsam → ",a.jsx("b",{children:"call çok daha geniş."})]})}),a.jsx("p",{className:"text-center text-[11px] text-neutral-600",children:"Kitap (B12): cover'sız aralık cover'lıdan asla sıkı olamaz — kaybetsen de bust olmazsın."}),a.jsx("p",{className:"text-center text-sm text-neutral-500",children:"Yüksek sesle bir kez oku. Masada bu cümle otomatik ateşlenecek."}),a.jsxs("div",{className:"flex flex-col gap-2",children:[a.jsx("button",{onClick:i,className:"btn-accent w-full py-3 text-base",children:"Prova ettim ✓"}),a.jsx("button",{onClick:e,className:"btn-ghost w-full py-3",children:"⏱ 90sn cue drill →"})]})]})}const j=12;function ra(){const e=12+Math.floor(Math.random()*60),i=3+Math.floor(Math.random()*40),r=Math.random()<.5?e+i:Math.max(3,e-i);return{heroBb:e,jammerBb:r,covered:r>=e}}function ke({onDone:e}){const[i,r]=b.useState(0),[n,l]=b.useState(()=>ra()),[t,k]=b.useState(null),[d,s]=b.useState(0),o=t===n.covered,u=i>=j;function y(v){k(v),v===n.covered&&s(A=>A+1)}function p(){if(i+1>=j){r(j);return}r(v=>v+1),l(ra()),k(null)}return u?a.jsxs("div",{className:"flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center",children:[a.jsx("div",{className:"text-5xl",children:"🎯"}),a.jsxs("p",{className:"text-lg text-neutral-100",children:[d,"/",j," doğru"]}),a.jsx("p",{className:"text-sm text-neutral-500",children:"Jam'e fold basmadan önce: cover ediliyor muyum? Hayır → call çok daha geniş."}),a.jsx("button",{onClick:e,className:"btn-accent px-6 py-3",children:"Bitir ✓"})]}):a.jsxs("div",{className:"flex flex-1 flex-col gap-5 p-6",children:[a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("span",{className:"text-neutral-500",children:"Cue drill"}),a.jsxs("span",{className:"text-neutral-400",children:[i+1," / ",j]})]}),a.jsxs("div",{className:"card p-5",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("span",{className:"rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent",children:["Sende ",n.heroBb,"bb"]}),a.jsxs("span",{className:"text-sm text-neutral-400",children:["jam atan ",n.jammerBb,"bb"]})]}),a.jsx("div",{className:"mt-3 text-sm text-neutral-400",children:"Bubble. Jam sana geldi."})]}),t===null?a.jsxs("div",{children:[a.jsx("div",{className:"mb-2 text-center text-[15px] font-medium",children:"Sınıfla: bu jam…"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("button",{onClick:()=>y(!0),className:"btn-ghost py-4 text-base",children:"Beni cover ediyor"}),a.jsx("button",{onClick:()=>y(!1),className:"btn-ghost py-4 text-base",children:"Ben cover ediyorum"})]})]}):a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsx("div",{className:"rounded-xl px-4 py-3 text-sm font-medium "+(o?"bg-emerald-500/15 text-emerald-300":"bg-red-500/15 text-red-300"),children:n.covered?"Cover ediliyorsun — kaybedersen bust. Call sert daralır.":"Cover edilmiyorsun — kaybetsen de bust olmazsın. Call sandığından çok daha geniş."}),a.jsx("button",{onClick:p,className:"btn-accent py-3 text-base",children:i+1>=j?"Bitir":"Sonraki →"})]}),a.jsx("button",{onClick:e,className:"btn-ghost mt-auto w-full py-3",children:"atla"})]})}function te({onDone:e}){const[i,r]=b.useState(0),[n,l]=b.useState(()=>ia()),[t,k]=b.useState("pot"),[d,s]=b.useState(null),[o,u]=b.useState(null),[y,p]=b.useState(0),v=d===n.bloated,A=o===n.bloated,c=v&&A,P=i>=j;function O(N){s(N),k("class")}function _(N){u(N),v&&N===n.bloated&&p(ja=>ja+1),k("fb")}function Ba(){if(i+1>=j){r(j);return}r(N=>N+1),l(ia()),s(null),u(null),k("pot")}return P?a.jsxs("div",{className:"flex flex-1 flex-col items-center justify-center gap-4 p-8 text-center",children:[a.jsx("div",{className:"text-5xl",children:"🎯"}),a.jsxs("p",{className:"text-lg text-neutral-100",children:[y,"/",j," doğru"]}),a.jsx("p",{className:"text-sm text-neutral-500",children:"Şişmiş potta tek per = bluff-catcher. Bu refleksi masaya götür."}),a.jsx("button",{onClick:e,className:"btn-accent px-6 py-3",children:"Bitir ✓"})]}):a.jsxs("div",{className:"flex flex-1 flex-col gap-5 p-6",children:[a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("span",{className:"text-neutral-500",children:"Cue drill"}),a.jsxs("span",{className:"text-neutral-400",children:[i+1," / ",j]})]}),a.jsxs("div",{className:"card p-5",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("span",{className:"rounded-full bg-accent-soft px-3 py-1 text-sm font-semibold text-accent",children:["Pot ",n.potBb,"bb"]}),a.jsxs("span",{className:"text-sm text-neutral-400",children:["arkanda ",n.behindBb,"bb"]})]}),n.threeBet&&a.jsx("div",{className:"mt-2 inline-block rounded-full bg-red-500/15 px-2 py-0.5 text-xs text-red-300",children:"3-bet'li pot"}),a.jsx("div",{className:"mt-3 text-sm text-neutral-400",children:"Elin: tek per (overpair)"})]}),t==="pot"&&a.jsxs("div",{children:[a.jsx("div",{className:"mb-2 text-center text-[15px] font-medium",children:"Pot şişmiş mi?"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("button",{onClick:()=>O(!0),className:"btn-ghost py-4 text-base",children:"Evet, şişmiş"}),a.jsx("button",{onClick:()=>O(!1),className:"btn-ghost py-4 text-base",children:"Hayır"})]})]}),t==="class"&&a.jsxs("div",{children:[a.jsx("div",{className:"mb-2 text-center text-[15px] font-medium",children:"Tek per'in sınıfı?"}),a.jsxs("div",{className:"grid grid-cols-2 gap-2",children:[a.jsx("button",{onClick:()=>_(!0),className:"btn-ghost py-4 text-base",children:"Bluff-catcher"}),a.jsx("button",{onClick:()=>_(!1),className:"btn-ghost py-4 text-base",children:"Value"})]})]}),t==="fb"&&a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("div",{className:"rounded-xl px-4 py-3 text-sm font-medium "+(c?"bg-emerald-500/15 text-emerald-300":"bg-red-500/15 text-red-300"),children:[a.jsx("div",{children:n.bloated?"Şişmiş pot → tek per BLUFF-CATCHER.":"Şişmemiş → tek per hâlâ value/showdown."}),!c&&a.jsx("div",{className:"mt-1 font-normal opacity-90",children:v?`Pot okuman doğru, sınıflama yanlış: ${n.bloated?"bluff-catcher":"value/showdown"}.`:A?"Sınıflaman doğru, pot okuması yanlıştı.":"Pot okuması da sınıflama da yanlıştı."})]}),a.jsx("button",{onClick:Ba,className:"btn-accent py-3 text-base",children:i+1>=j?"Bitir":"Sonraki →"})]}),a.jsx("button",{onClick:e,className:"btn-ghost mt-auto w-full py-3",children:"atla"})]})}const de={A:14,K:13,Q:12,J:11,T:10,9:9,8:8,7:7,6:6,5:5,4:4,3:3,2:2},na={s:"♠",h:"♥",d:"♦",c:"♣"};function se(e){const i=e.trim().split(/[\s,]+/).map(o=>o.match(/^([AKQJT2-9])([shdc])$/i)).filter(Boolean).map(o=>({r:de[o[1].toUpperCase()],s:o[2].toLowerCase()}));if(i.length<3)return[];const r=[],n={};for(const o of i)n[o.s]=(n[o.s]||0)+1;const[l,t]=Object.entries(n).sort((o,u)=>u[1]-o[1])[0];t>=3?r.push({label:`üç ${na[l]} — flush board`,wet:!0}):t===2?r.push({label:`iki ${na[l]} — flush draw'lı`,wet:!0}):r.push({label:"rainbow",wet:!1});const k={};for(const o of i)k[o.r]=(k[o.r]||0)+1;Object.values(k).some(o=>o>=2)&&r.push({label:"eşli",wet:!1});const d=[...new Set(i.map(o=>o.r))].sort((o,u)=>o-u),s=d[d.length-1]-d[0];return s<=4?r.push({label:"bağlantılı — kent'li",wet:!0}):s>=7&&r.push({label:"kuru",wet:!1}),r}const la=new Set(["A","K","Q","J","T","9","8","7","6","5","4","3","2"]),ka={s:{sym:"♠",color:"#141414"},h:{sym:"♥",color:"#e5484d"},d:{sym:"♦",color:"#2f6df6"},c:{sym:"♣",color:"#1f9d55"}},Ka={sm:{w:34,r:12,big:18},md:{w:46,r:15,big:26},lg:{w:64,r:20,big:38}};function Y({rank:e,suit:i,size:r="md"}){const n=ka[i]||ka.s,l=Ka[r],t=n.color;return a.jsxs("div",{className:"relative inline-flex shrink-0 flex-col items-center justify-center rounded-lg bg-white shadow-md",style:{width:l.w,height:Math.round(l.w*1.4)},children:[a.jsx("span",{className:"absolute left-1 top-0.5 font-bold leading-none",style:{fontSize:l.r,color:t},children:e}),a.jsx("span",{style:{fontSize:l.big,color:t,lineHeight:1},children:n.sym})]})}function oe({size:e="md"}){const i=Ka[e];return a.jsx("div",{className:"inline-flex shrink-0 items-center justify-center rounded-lg border border-surface-3 bg-surface-2 text-neutral-500",style:{width:i.w,height:Math.round(i.w*1.4),fontSize:i.r},title:"kitapta belirtilmemiş",children:"?"})}function be(e){return e.length>=3&&e[2]==="s"?["s","s"]:e.length>=3&&e[2]==="o"?["s","h"]:["s","h"]}function ue({code:e,size:i="md"}){const r=e.trim(),[n,l]=[r[0],r[1]],[t,k]=be(r),d=r[2]==="s",s=r[2]==="o";return a.jsxs("span",{className:"inline-flex items-end gap-1.5",children:[a.jsxs("span",{className:"flex gap-1",children:[a.jsx(Y,{rank:n,suit:t,size:i}),a.jsx(Y,{rank:l,suit:k,size:i})]}),(d||s)&&a.jsx("span",{className:"mb-1 rounded px-1.5 py-0.5 text-[10px] font-semibold "+(d?"bg-emerald-500/20 text-emerald-300":"bg-neutral-500/20 text-neutral-300"),children:d?"suited":"offsuit"})]})}function ta({spec:e,size:i="md",label:r,texture:n}){const l=e.trim().split(/[\s,]+/).filter(Boolean),t=n?se(e):[];return a.jsxs("div",{children:[r&&a.jsx("div",{className:"mb-1 text-xs uppercase tracking-wide text-neutral-500",children:r}),a.jsx("div",{className:"flex flex-wrap items-end gap-1.5",children:l.map((k,d)=>{if(k==="??"||k==="?")return a.jsx(oe,{size:i},d);if(k.length>=2&&la.has(k[0])&&la.has(k[1]))return a.jsx(ue,{code:k,size:i},d);const s=k.match(/^([AKQJT2-9])([shdc])$/i);return s?a.jsx(Y,{rank:s[1].toUpperCase(),suit:s[2].toLowerCase(),size:i},d):a.jsx("span",{className:"text-sm text-neutral-500",children:k},d)})}),t.length>0&&a.jsx("div",{className:"mt-1.5 flex flex-wrap gap-1.5",children:t.map((k,d)=>a.jsx("span",{className:"rounded-full px-2 py-0.5 text-[11px] "+(k.wet?"bg-accent-soft text-accent":"bg-surface-2 text-neutral-400"),children:k.label},d))})]})}const I=[{id:"vaka1",title:"Vaka 1 — A4s river call",setup:"$50K High Roller. Board bölüşmeye açık — chop mekaniği masada. River'da rakip all-in geldi. Elin A4s.",hero:"A4s",board:"",options:["Hero-call","Fold"],correct:1,rule:"Chop'lar jam atmaz: rakip all-in geldiyse bölüşen eli aralığından çıkarmıştır — jam seni geçen eldir. Bir mekaniği görmek yetmez; rakibin hamlesi o mekanikle uyumlu mu diye sor. 📌 Chop varken jam = seni geçmiş el.",selfExplain:"Chop mekaniğini doğru gördün — peki hangi filtreyi atladın?",concept:"kök-hata"},{id:"vaka2",title:"Vaka 2 — KTo top pair",setup:"$10K 6-max. Islak board, top pair (KT) flopladın. OOP'sun, rakip cbet attı. Sıra sende.",hero:"KTo",board:"",options:["Check-raise all-in","Check-call, sonra değerlendir"],correct:1,rule:"Tek per stack-off yakıtı değil. Islak boardda top pair büyük pot başlatıcı değildir; stack'i sen başlatınca seni ödeyen aralık senden iyi. Şişmiş pota giden yol elini bluff-catcher'a çevirir. 📌 Top pair islak boardda: check-call, başlatma.",selfExplain:"Top pair güçlü göründü — pot büyüyünce elinin sınıfı ne oldu?",concept:"kök-hata"},{id:"vaka3",title:"Vaka 3 — AA river jam",setup:"Board 2-4-5, flop+turn value bet (ikisi de doğruydu). River 6 geldi — senden zayıf hiçbir el artık ödemez. Elin AA. Rakip check etti.",hero:"AA",board:"2c 4d 5s ?? 6h",options:["Kalan stack'i jam","Check"],correct:1,rule:"River'da senden zayıf el ödemeyecekse jam value değildir. O river'da 3'lü/kent/set seni geçmiş, tek per pas — value target yok. Kötü river'da overpair: küçük pota check-call, büyük pota check-fold. 📌 Ödeyecek zayıf el yoksa jam yok.",selfExplain:"Flop+turn value doğruydu — river 6'da tam olarak ne değişti?",concept:"kök-hata"},{id:"vaka4",title:"Vaka 4 — Senin elin (dün)",setup:"6-max. BB'de T6s, BTN min-raise, call. Flop A-T-3, BTN 1/3 pot, call (çift 10). Turn 5, check-check. River T → board A-T-3-5-T, sende trip 10 ama kicker 6. Check ettin, BTN thin bet. Sıra sende.",hero:"Th 6h",board:"Ac Ts 3d 5c Td",options:["Check-raise all-in","Check-call — bluff-catcher"],correct:1,rule:"Senden zayıf hiçbir el all-in'i ödemez: her 10 senin 6 kicker'ını geçer, boat'lar zaten önde. Bu runout'ta trip'in bluff-catcher — check-call, blöfleri içeride tut. Check-raise all-in blöfleri fold ettirir, seni yalnız geçen el öder. 📌 Ödeyecek zayıf el yoksa raise yok (cümle 2 = Vaka 2).",selfExplain:"Trip 10 güçlü hissettirdi — o board'da kaç el senin 6 kicker'ını GEÇİYOR, kaçı GERİDE kalıp öder?",concept:"kök-hata",beyondBook:!0}];function ye({onBack:e}){const[i,r]=b.useState(0),[n,l]=b.useState(null),[t]=b.useState(()=>x("autopsy:done",!1)),k=I[i],d=n!==null,s=i>=I.length;function o(y){if(d||(l(y),t))return;const p=y===k.correct;F(),pa({kavram:k.concept,soru_ozeti:`Otopsi: ${k.title}`,sonuc:p?"correct":"wrong",not:k.rule,severity:"tournament_life"})}function u(){l(null),i+1>=I.length&&!t&&E("autopsy:done",!0),r(y=>y+1)}return s?a.jsxs("div",{className:"flex flex-col items-center gap-4 p-8 text-center",children:[a.jsx("div",{className:"text-5xl",children:"🔬"}),a.jsx("p",{className:"text-neutral-200",children:"Vakalar işlendi. Kök hata hep aynıydı."}),a.jsx("p",{className:"text-sm text-neutral-500",children:"Tek per'in şişmiş/multiway potta yanlış sınıflandırılması. Masaya bu refleksi götür."}),a.jsx("button",{onClick:e,className:"btn-accent px-6 py-3",children:"← Derse dön"})]}):a.jsxs("div",{className:"flex min-h-full flex-col gap-4 p-4",children:[a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("button",{onClick:e,className:"text-neutral-400",children:"← Ders"}),a.jsxs("span",{className:"text-neutral-500",children:[i+1," / ",I.length]})]}),t&&a.jsx("div",{className:"rounded-lg bg-surface-2 px-3 py-2 text-xs text-neutral-400",children:"Tekrar oynatım — puanlanmaz; kendine açıklamaya odaklan."}),a.jsxs("div",{className:"flex flex-wrap items-center gap-2",children:[a.jsx("h1",{className:"text-xl font-bold",children:k.title}),k.beyondBook?a.jsx("span",{className:"rounded border border-dashed border-accent/50 bg-accent-soft px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent",children:"Kitap dışı · senin elin"}):a.jsx("span",{className:"rounded bg-emerald-500/15 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-300",children:"Kitaptan · Bölüm 7"})]}),a.jsxs("div",{className:"card p-4",children:[a.jsx("div",{className:"flex items-center justify-between gap-3",children:a.jsx(ta,{spec:k.hero,size:"md",label:"Elin"})}),k.board&&a.jsx("div",{className:"mt-3",children:a.jsx(ta,{spec:k.board,size:"sm",label:"Board",texture:!0})}),a.jsx("p",{className:"mt-3 text-[15px] leading-relaxed text-neutral-200",children:k.setup})]}),d?a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"rounded-xl px-4 py-3 text-sm font-medium "+(n===k.correct?"bg-emerald-500/15 text-emerald-300":"bg-red-500/15 text-red-300"),children:[n===k.correct?"✓ Doğru — ":"✗ ","Doğru hat: ",a.jsx("b",{children:k.options[k.correct]})]}),a.jsx("div",{className:"rounded-xl border-l-4 border-accent bg-accent-soft px-4 py-3 text-sm leading-relaxed",children:k.rule}),a.jsxs("div",{className:"card p-3",children:[a.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:"Kendine açıkla"}),a.jsx("p",{className:"mt-1 text-sm text-neutral-300",children:k.selfExplain}),a.jsx("textarea",{rows:2,placeholder:"Sesli ya da yazılı — hangi ipucunu kaçırdın?",className:"mt-2 w-full resize-none rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"})]}),a.jsx(ce,{hand:k},k.id),a.jsx("button",{onClick:u,className:"btn-accent py-3 text-base",children:i+1>=I.length?"Bitir":"Sonraki vaka →"})]}):a.jsxs(a.Fragment,{children:[a.jsx("div",{className:"text-center text-sm text-neutral-500",children:"Önce SEN karar ver:"}),a.jsx("div",{className:"grid grid-cols-1 gap-2",children:k.options.map((y,p)=>a.jsx("button",{onClick:()=>o(p),className:"btn-ghost py-3 text-[15px]",children:y},p))})]})]})}function me(e){return e<1?0:e<=4?1:e<=8?2:3}function ce({hand:e}){const[i,r]=b.useState(""),[n,l]=b.useState(""),[t,k]=b.useState(()=>{const u=x("spr-kalibrasyon",[]).find(y=>y.id===e.id);return u?u.spr:null}),d=b.useMemo(()=>B("Bölüm 11","11.0"),[]);function s(){const u=Number(i),y=Number(n);if(!isFinite(u)||u<=0||!isFinite(y)||y<0)return;const p=Math.round(y/u*10)/10;k(p);const v=x("spr-kalibrasyon",[]).filter(A=>A.id!==e.id);E("spr-kalibrasyon",[...v,{id:e.id,pot:u,stack:y,spr:p}]),pa({kavram:"spr-kalibrasyon",soru_ozeti:`SPR biç: ${e.title}`,sonuc:"correct",not:`flop pot ${u}bb, kalan stack ${y}bb → SPR ${p}`})}const o=t!==null&&d?d.rows[me(t)]:null;return a.jsxs("div",{className:"card p-3",children:[a.jsx("div",{className:"text-xs uppercase tracking-wide text-neutral-500",children:"SPR biç (B11.0 · isteğe bağlı)"}),a.jsx("p",{className:"mt-1 text-xs text-neutral-500",children:"Hafızandan gir: floptaki pot ve arkanda kalan stack (bb). Hatırlamıyorsan boş bırak — sayı uydurma."}),a.jsxs("div",{className:"mt-2 flex items-center gap-2",children:[a.jsx("input",{value:i,onChange:u=>r(u.target.value),inputMode:"decimal",placeholder:"flop pot (bb)",className:"w-full min-w-0 rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),a.jsx("input",{value:n,onChange:u=>l(u.target.value),inputMode:"decimal",placeholder:"kalan stack (bb)",className:"w-full min-w-0 rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),a.jsx("button",{onClick:s,className:"btn-ghost shrink-0 px-3 py-2 text-sm",children:"Hesapla"})]}),t!==null&&a.jsxs("div",{className:"mt-3 text-sm",children:[a.jsxs("div",{className:"font-semibold text-accent",children:["SPR ≈ ",t]}),o?a.jsxs("div",{className:"mt-1 rounded-lg bg-surface-2 px-3 py-2 text-xs leading-relaxed text-neutral-300",children:[a.jsx("b",{children:o[0]})," · ",o[1]," → ",o[2]]}):a.jsx("p",{className:"mt-1 text-xs text-neutral-500",children:"Bant tablosu yüklenemedi (B11.0)."})]})]})}const da="journal",pe=[{v:.6,label:"%60"},{v:.8,label:"%80"},{v:.95,label:"%95"}];function fe({onDone:e}){const[i,r]=b.useState(()=>x(da,[])),[n,l]=b.useState(""),[t,k]=b.useState(""),[d,s]=b.useState(""),[o,u]=b.useState(.8),[y,p]=b.useState(null),v=i.filter(c=>c.day===h(-1)).length;function A(){if(!n.trim()||!t.trim()){p({ok:!1,text:"El ve Aksiyon zorunlu — ikisini de doldur."});return}const c=[{day:h(0),el:n,aksiyon:t,gerekce:d,guven:o},...i];r(c),E(da,c),F(),l(""),k(""),s(""),p({ok:!0,text:"Kaydedildi ✓"})}return a.jsxs("div",{className:"flex flex-col gap-4 p-4",children:[a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("button",{onClick:e,className:"text-neutral-400",children:"← İlerleme"}),a.jsx("span",{className:"font-semibold text-neutral-100",children:"🗒 Karar günlüğü"}),a.jsx("span",{className:"w-12"})]}),Ga()&&a.jsx("div",{className:"rounded-xl border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent",children:"🥊 Cornerman modu açık. Taper: hacmi düşür, yoğunluğu koru. Gece geç çalışma yok — uyku tilt'i büyütür."}),a.jsx("p",{className:"text-sm text-neutral-500",children:"Sonucu bilmeden yaz. İyi karar kötü sonuç = doğru. Ertesi gün süreç puanlanır, sonuç değil."}),v>0&&a.jsxs("a",{href:"#/drill",className:"rounded-xl border border-accent/40 bg-accent-soft px-4 py-2.5 text-sm text-accent",children:["Dün masadan ",v," el getirdin → Drill'de puanla"]}),a.jsxs("div",{className:"card space-y-2 p-4",children:[a.jsx("input",{value:n,onChange:c=>l(c.target.value),placeholder:"El / spot (ör. 42bb CO KQo, HJ açtı)",className:"w-full rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),a.jsx("input",{value:t,onChange:c=>k(c.target.value),placeholder:"Aksiyon (fold / 3-bet 9bb / check-call…)",className:"w-full rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),a.jsx("textarea",{value:d,onChange:c=>s(c.target.value),rows:2,placeholder:"Gerekçe (neden?)",className:"w-full resize-none rounded-xl border border-surface-3 bg-surface-1 px-3 py-2 text-sm outline-none focus:border-accent"}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsx("span",{className:"text-xs text-neutral-500",children:"Güven:"}),pe.map(c=>a.jsx("button",{onClick:()=>u(c.v),className:"rounded-full px-2.5 py-1 text-xs "+(o===c.v?"bg-accent text-black font-semibold":"bg-surface-2 text-neutral-400"),children:c.label},c.v)),a.jsx("button",{onClick:A,className:"btn-accent ml-auto px-4 py-2 text-sm",children:"Kaydet"})]}),y&&a.jsx("div",{className:"text-xs "+(y.ok?"text-emerald-400":"text-red-400"),children:y.text})]}),i.length===0?a.jsx("p",{className:"text-center text-sm text-neutral-600",children:"Henüz kayıt yok."}):a.jsx("div",{className:"space-y-2",children:i.map((c,P)=>a.jsxs("div",{className:"card p-3 text-sm",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsx("span",{className:"font-semibold text-neutral-100",children:c.el}),a.jsx("span",{className:"text-xs text-neutral-500",children:c.day})]}),a.jsxs("div",{className:"text-accent",children:[c.aksiyon," · %",Math.round(c.guven*100)]}),c.gerekce&&a.jsx("div",{className:"mt-1 text-neutral-400",children:c.gerekce})]},P))})]})}const he=b.lazy(()=>z(()=>import("./LessonList-CK0fmWjR.js"),__vite__mapDeps([0,1,2,3,4])).then(e=>({default:e.LessonList}))),ve=b.lazy(()=>z(()=>import("./LessonPlayer-DKBODJnc.js"),__vite__mapDeps([5,2,1,6,7,8,3,4])).then(e=>({default:e.LessonPlayer}))),ze=b.lazy(()=>z(()=>import("./Quiz-Cp2g9oxl.js"),__vite__mapDeps([9,2,10,8,4])).then(e=>({default:e.Quiz}))),ge=b.lazy(()=>z(()=>import("./Drill-BD4PzR82.js"),__vite__mapDeps([11,2,12])).then(e=>({default:e.Drill}))),Ae=b.lazy(()=>z(()=>import("./DepthContrast-roS9cGjY.js"),__vite__mapDeps([13,2])).then(e=>({default:e.DepthContrast}))),Ke=b.lazy(()=>z(()=>import("./Simulator-C9pgEJrM.js"),__vite__mapDeps([14,2,12])).then(e=>({default:e.Simulator}))),Be=b.lazy(()=>z(()=>import("./Progress-D7aNMpj8.js"),__vite__mapDeps([15,2,1,4,6])).then(e=>({default:e.Progress}))),je=b.lazy(()=>z(()=>import("./QuickReference-DrEu1Nzd.js"),__vite__mapDeps([16,2,7])).then(e=>({default:e.QuickReference}))),Ee=b.lazy(()=>z(()=>import("./Sentences-CS5daga6.js"),__vite__mapDeps([17,2])).then(e=>({default:e.Sentences}))),xe=b.lazy(()=>z(()=>import("./RangeAtlas-DBcDrU_F.js"),__vite__mapDeps([18,2,10,8,7])).then(e=>({default:e.RangeAtlas}))),Te=b.lazy(()=>z(()=>import("./SqueezeCard-EwfVYbJT.js"),__vite__mapDeps([19,2])).then(e=>({default:e.SqueezeCard}))),Se=b.lazy(()=>z(()=>import("./HandClasses-BRJqCS_B.js"),__vite__mapDeps([20,2])).then(e=>({default:e.HandClasses}))),Pe=b.lazy(()=>z(()=>import("./EquityIntuition-fPRyxwEm.js"),__vite__mapDeps([21,2])).then(e=>({default:e.EquityIntuition}))),Ne=b.lazy(()=>z(()=>import("./BetTypes-DPLqrx73.js"),__vite__mapDeps([22,2])).then(e=>({default:e.BetTypes}))),Oe=b.lazy(()=>z(()=>import("./QuestionBank-BZcY2vF2.js"),__vite__mapDeps([23,2])).then(e=>({default:e.QuestionBank}))),Ie=b.lazy(()=>z(()=>import("./IcmCard-C-Fk5wB4.js"),__vite__mapDeps([24,2])).then(e=>({default:e.IcmCard})));function Re(){const[e,i]=b.useState(()=>window.location.hash);return b.useEffect(()=>{const r=()=>i(window.location.hash);return window.addEventListener("hashchange",r),()=>window.removeEventListener("hashchange",r)},[]),e}function m(e){window.location.hash=e}const Ce=[{id:"ders",label:"Ders",icon:"📚"},{id:"quiz",label:"Quiz",icon:"🎯"},{id:"drill",label:"Drill",icon:"🃏"},{id:"ilerleme",label:"İlerleme",icon:"📊"},{id:"referans",label:"Referans",icon:"⚡"}];function Me(){return a.jsx("div",{className:"flex h-full items-center justify-center text-sm text-neutral-500",children:"Yükleniyor…"})}function Je(){const i=Re().replace(/^#\/?/,"").split("/").filter(Boolean),n=new Set(["ders","quiz","drill","ilerleme","referans"]).has(i[0])?i[0]:"ders",l=i[1],t=b.useRef(null),[k,d]=b.useState(!1);return b.useEffect(()=>{var s;(s=t.current)==null||s.scrollTo(0,0)},[i[0],i[1],i[2]]),b.useEffect(()=>{const s=()=>d(!0);return window.addEventListener("ept:storage-fail",s,{once:!0}),()=>window.removeEventListener("ept:storage-fail",s)},[]),a.jsxs("div",{className:"mx-auto flex h-[100dvh] max-w-md flex-col bg-surface-0 pt-[env(safe-area-inset-top)]",children:[a.jsx(re,{}),k&&a.jsxs("div",{className:"flex items-center justify-between gap-3 bg-red-900/80 px-4 py-2 text-[13px] text-red-100",children:[a.jsx("span",{children:"Kayıt yapılamıyor — depolama dolu/kısıtlı"}),a.jsx("button",{"aria-label":"Kapat",className:"px-1 font-semibold",onClick:()=>d(!1),children:"✕"})]}),a.jsx("main",{ref:t,className:"flex-1 overflow-y-auto",children:a.jsxs(b.Suspense,{fallback:a.jsx(Me,{}),children:[n==="ders"&&(l==="otopsi"?a.jsx(ye,{onBack:()=>m("#/ders")}):l?a.jsx(ve,{moduleId:l,onBack:()=>m("#/ders")}):a.jsx(he,{onOpen:s=>m("#/ders/"+s)})),n==="quiz"&&a.jsx(ze,{}),n==="drill"&&a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"flex gap-2 px-4 pt-4",children:[a.jsx("button",{onClick:()=>m("#/drill"),className:"btn px-3 py-2 text-sm "+(i[1]!=="masa"&&i[1]!=="derinlik"?"bg-accent-soft text-accent border border-accent":"bg-surface-2 text-neutral-400 border border-surface-3"),children:"🃏 Soru drill"}),a.jsx("button",{onClick:()=>m("#/drill/masa"),className:"btn px-3 py-2 text-sm "+(i[1]==="masa"?"bg-accent-soft text-accent border border-accent":"bg-surface-2 text-neutral-400 border border-surface-3"),children:"🎲 Masa (el sim)"}),a.jsx("button",{onClick:()=>m("#/drill/derinlik"),className:"btn px-3 py-2 text-sm "+(i[1]==="derinlik"?"bg-accent-soft text-accent border border-accent":"bg-surface-2 text-neutral-400 border border-surface-3"),children:"🪜 Derinlik"})]}),i[1]==="masa"?a.jsx(Ke,{}):i[1]==="derinlik"?a.jsx(Ae,{}):a.jsx(ge,{})]}),n==="ilerleme"&&(i[1]==="tekrar"?a.jsx(_a,{onDone:()=>m("#/ilerleme")}):i[1]==="gunluk"?a.jsx(fe,{onDone:()=>m("#/ilerleme")}):a.jsx(Be,{onReview:()=>m("#/ilerleme/tekrar"),onJournal:()=>m("#/ilerleme/gunluk")})),n==="referans"&&(i[1]==="cumleler"?a.jsx(Ee,{onDone:()=>m("#/referans")}):i[1]==="araliklar"?a.jsx(xe,{onDone:()=>m("#/referans")}):i[1]==="squeeze"?a.jsx(Te,{onDone:()=>m("#/referans")}):i[1]==="eller"?a.jsx(Se,{onDone:()=>m("#/referans")}):i[1]==="equity"?a.jsx(Pe,{onDone:()=>m("#/referans")}):i[1]==="bahis"?a.jsx(Ne,{onDone:()=>m("#/referans")}):i[1]==="sorubankasi"?a.jsx(Oe,{onDone:()=>m("#/referans")}):i[1]==="icmkart"?a.jsx(Ie,{onDone:()=>m("#/referans")}):i[1]==="bolum"&&i[2]?a.jsx(ae,{title:"Bölüm "+i[2],onDone:()=>m("#/referans/bolum")}):i[1]==="bolum"?a.jsxs("div",{className:"flex flex-col gap-3 p-4",children:[a.jsxs("div",{className:"flex items-center justify-between text-sm",children:[a.jsx("button",{onClick:()=>m("#/referans"),className:"text-neutral-400",children:"← Referans"}),a.jsx("span",{className:"font-semibold text-neutral-100",children:"📖 Kitap bölümleri"}),a.jsx("span",{className:"w-16"})]}),a.jsx("p",{className:"text-[13px] leading-relaxed text-neutral-400",children:"Kitabın tamamı — doğrudan MD kaynağından. Molada telefondan tabloya bak."}),ea.map(s=>a.jsxs("button",{onClick:()=>m("#/referans/bolum/"+s.n),className:"card flex items-center justify-between p-3 text-left",children:[a.jsxs("span",{className:"text-[14px] text-neutral-100",children:[a.jsxs("span",{className:"font-mono text-neutral-500",children:["B",s.n]})," · ",s.short]}),a.jsx("span",{className:"text-accent",children:"→"})]},s.n))]}):a.jsxs(a.Fragment,{children:[a.jsxs("div",{className:"grid grid-cols-2 gap-2 p-4 pb-0",children:[a.jsx("button",{onClick:()=>m("#/referans/araliklar"),className:"btn-accent py-2.5",children:"🗂️ Aralık Rehberi →"}),a.jsx("button",{onClick:()=>m("#/referans/eller"),className:"btn-accent py-2.5",children:"🃏 El Sınıfı Danışmanı →"}),a.jsx("button",{onClick:()=>m("#/referans/squeeze"),className:"btn-accent py-2.5",children:"🗜️ Squeeze Kartı →"}),a.jsx("button",{onClick:()=>m("#/referans/cumleler"),className:"btn-ghost py-2.5",children:"🧠 15 Cümle ezber →"}),a.jsx("button",{onClick:()=>m("#/referans/equity"),className:"btn-ghost col-span-2 py-2.5",children:"📐 Equity Sezgisi (bonus · kitap dışı) →"}),a.jsx("button",{onClick:()=>m("#/referans/bahis"),className:"btn-ghost col-span-2 py-2.5",children:"🎯 Bahis Tipleri (value/bluff/thin/overbet) →"}),a.jsx("button",{onClick:()=>m("#/referans/sorubankasi"),className:"btn-ghost col-span-2 py-2.5",children:"📝 Soru Bankası (Bölüm 10 · 37 soru) →"}),a.jsx("button",{onClick:()=>m("#/referans/icmkart"),className:"btn-ghost col-span-2 py-2.5",children:"🧮 ICM Kartım (ladder + <15bb jam · Bölüm 12) →"}),a.jsxs("button",{onClick:()=>m("#/referans/bolum"),className:"btn-accent col-span-2 py-2.5",children:["📖 Kitap bölümleri (",ea.length," bölüm) →"]})]}),a.jsx(je,{})]}))]})}),a.jsx("nav",{"aria-label":"Ana sekmeler",className:"grid grid-cols-5 border-t border-surface-3 bg-surface-1 pb-[env(safe-area-inset-bottom)]",children:Ce.map(s=>{const o=s.id===n;return a.jsxs("button",{"aria-current":o?"page":void 0,onClick:()=>m("#/"+s.id),className:"flex flex-col items-center gap-0.5 py-2.5 text-xs transition "+(o?"text-accent":"text-neutral-500"),children:[a.jsx("span",{className:"text-lg",children:s.icon}),s.label]},s.id)})})]})}class Qe extends sa.Component{constructor(){super(...arguments);Z(this,"state",{hasError:!1})}static getDerivedStateFromError(){return{hasError:!0}}componentDidCatch(r){console.error("EPT ErrorBoundary:",r)}async resetData(){const r=Object.keys(localStorage).filter(l=>l.startsWith("ept:")),n=Object.fromEntries(r.map(l=>[l,localStorage.getItem(l)]));try{await navigator.clipboard.writeText(JSON.stringify(n,null,2))}catch{}r.forEach(l=>localStorage.removeItem(l)),location.reload()}render(){return this.state.hasError?a.jsxs("div",{className:"mx-auto flex h-[100dvh] max-w-md flex-col items-center justify-center gap-4 bg-surface-0 p-6 text-center",children:[a.jsx("p",{className:"text-lg font-semibold text-neutral-100",children:"Bir şeyler ters gitti."}),a.jsx("button",{className:"btn-accent",onClick:()=>location.reload(),children:"Yeniden yükle"}),a.jsx("button",{className:"btn-ghost text-sm",onClick:()=>this.resetData(),children:"Verileri sıfırla (önce JSON kopyala)"})]}):this.props.children}}H.createRoot(document.getElementById("root")).render(a.jsx(sa.StrictMode,{children:a.jsx(Qe,{children:a.jsx(Je,{})})}));"serviceWorker"in navigator&&window.addEventListener("load",()=>{navigator.serviceWorker.register("/ept-trainer/sw.js").catch(()=>{})});export{Ge as A,Ue as B,ta as C,F as D,ua as E,De as F,Ye as G,ue as H,Ya as I,He as J,qe as K,Ve as L,Fe as M,ai as N,We as O,ti as P,di as Q,si as R,pi as S,fi as T,Ai as U,hi as V,Ki as W,zi as X,gi as Y,vi as Z,ei as _,Ze as a,Ga as b,qa as c,fa as d,ma as e,_e as f,$e as g,pa as h,li as i,a as j,ki as k,x as l,ri as m,ya as n,ni as o,ii as p,oi as q,Xe as r,E as s,B as t,bi as u,ui as v,yi as w,mi as x,ci as y,S as z};
