// İçerik selfcheck (assertions) — kitabı parse eden GERÇEK modülleri çalıştırır ve
// quiz cevaplarının poker_cep_kitabi_v5.md ile tutarlılığını doğrular. Parser
// regresyonlarına karşı kapı. Hiçbir mantık kopyalanmaz; kaynak kodun kendisi test edilir.
import {
  rangeGroups,
  questionBank,
  sectionBlock,
  tenSentences,
  turnBarrelMatrix,
  drawTurnMatrix,
  riverBluffCatch,
  riverThinValue,
  badRiverCatalog,
  openRanges,
  jamRanges,
  jamCallRange,
  fourBetRanges,
  squeezeRange,
  quickReference,
  bridgeBand,
  multiwayMatrix,
  ploStackOff,
  ploModes,
} from "../src/content/curriculum";
import { chapterTitles, tableFromSection, rawMarkdown } from "../src/content/curriculum";
import { modules } from "../src/data/modules";
import { hashKey, sentencesOf } from "../src/lib/speech";
import { readFileSync } from "node:fs";
import { parseRange } from "../src/lib/handgrid";
import { buildPools } from "../src/modes/quiz/quizEngine";
import { postflopQuestion, betType } from "../src/modes/quiz/postflopEngine";
import { SCENARIOS, optionOrder } from "../src/modes/quiz/scenarios";
import { WHY_WRONG } from "../src/modes/quiz/whyWrong";
import { KARNE_SEED } from "../src/data/karne_seed";
import { computeDue, capDue, migrate, computeMastery } from "../src/lib/karne";
import { localIsoDay } from "../src/lib/date";

// D4-43: motorun KENDİ havuz kurulumunu kullan (mantık kopyalanmaz — kopya motor değişince
// eski davranışı sessizce test ederdi). buildPools quizEngine.nextQuestion ile aynı fonksiyon.
function poolsFor(opener: string, position: string) {
  const p = buildPools(opener, position);
  return {
    ft: p?.ft ?? "",
    cells: p?.flatCells ?? new Set<string>(),
    flatWide: p?.flatWide ?? false,
    poolFold: p?.poolFold ?? [],
  };
}

const out: string[] = [];
let failed = 0;
function check(name: string, cond: boolean, extra = "") {
  if (!cond) failed++;
  out.push(`${cond ? "PASS" : "FAIL"}  ${name}${extra ? "  — " + extra : ""}`);
}

// Kitap parse edilebiliyor mu
const groups = rangeGroups();
check("rangeGroups() 5 açılış grubu (UTG/LJHJ/CO/BTN/SB)", groups.length === 5, groups.map((g) => g.opener).join("|"));

// SB/BB satırlarına IP flat sızmıyor (kitap: blind'den flat = kayıp / prose)
for (const g of groups) {
  for (const row of g.table.rows) {
    if (row[0] === "SB" || row[0] === "BB") {
      const { cells } = poolsFor(g.opener, row[0]);
      check(`${g.opener}→${row[0]}: IP-flat cell sızmıyor`, cells.size === 0, [...cells].join(","));
    }
  }
}

// BB-vs-BTN geniş prose flat → fold sorusu üretilmez; SB-vs-BTN "neredeyse yok" → fold geçerli
check("BTN→BB flatWide (fold üretme)", poolsFor("BTN", "BB").flatWide === true);
check("BTN→SB fold geçerli", poolsFor("BTN", "SB").flatWide === false);

// Cümle-devamı ile düşen baz flatlar kurtarıldı; 150bb+ koşullular sızmıyor
{
  const co = poolsFor("UTG/UTG+1", "CO").cells;
  check("UTG→CO flat: 98s kurtarıldı", co.has("98s"));
  check("UTG→CO flat: 76s (150bb+) sızmıyor", !co.has("76s"));
  const btn = poolsFor("CO", "BTN").cells;
  check("CO→BTN flat: JTs kurtarıldı", btn.has("JTs"));
  // 65s+ suited connector prose flat → fold havuzu bastırılır (T9s/98s/87s/76s/65s yanlış fold notlanmaz)
  check("CO→BTN flatWide (65s+ connector prose → fold bastırıldı)", poolsFor("CO", "BTN").flatWide === true);
}

// BB-vs-SB "alanın en kârlı 3-bet spotu" yüzeyde (bullet grup)
{
  const sb = groups.find((g) => g.opener === "SB");
  check("SB grubu yüzeyde", !!sb);
  if (sb) {
    const bb = sb.table.rows.find((r) => r[0] === "BB");
    check("SB→BB VALUE 88 cell", !!bb && parseRange(bb[1]).cells.has("88"));
    check("SB→BB flatWide (fold üretme)", poolsFor("SB", "BB").flatWide === true);
  }
}

// Bölüm 10 soru bankası tam parse ediliyor
{
  const qb = questionBank();
  const total = qb.reduce((n, s) => n + s.questions.length, 0);
  check("Soru Bankası 4 alt-bölüm", qb.length === 4, qb.map((s) => s.questions.length).join("+"));
  check("Soru Bankası 37 soru", total === 37, String(total));
}

// B0 v5'te 15 cümleye çıktı (12–15 B11/B12/B13/B16'dan işlendi). Sentences modu + karne
// bağlamı bu parse'a bağlı; sayı düşerse (parser/filtre kırılması) build'i durdur.
{
  const s = tenSentences();
  check("B0 15 cümle parse", s.length === 15, String(s.length));
  check("B0 c.15 tilt cümlesi var", s.some((x) => x.n === 15 && /tilt/i.test(x.rule)));
}

// v5 yeni bölümleri (B11–B16) ChapterView tarafından sectionBlock ile render edilir.
// Boş dönerse veya tablo kaybolursa yeni Referans görünümü sessizce boşalır → build'i durdur.
for (const n of [11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25]) {
  const body = sectionBlock("Bölüm " + n);
  check(`B${n} sectionBlock dolu`, body.trim().length > 0, String(body.length));
  check(`B${n} en az bir tablo içeriyor`, body.includes("|"));
}

// Postflop drill (B6/B11 turn+river tabloları) — sadakat kapısı: drill edilen tablolar parse
// olmalı, bilinen bir net hücre kitabın yönünü taşımalı ve motor her street için soru üretmeli.
{
  const tb = turnBarrelMatrix();
  check("B11.1 turn matrisi 4 satır", !!tb && tb.rows.length === 4, tb ? String(tb.rows.length) : "null");
  const dr = drawTurnMatrix();
  check("B6.2 draw matrisi 4 satır", !!dr && dr.rows.length === 4, dr ? String(dr.rows.length) : "null");
  const rv = riverBluffCatch();
  check("B11.2 river matrisi 3 satır", !!rv && rv.rows.length === 3, rv ? String(rv.rows.length) : "null");
  const tv = riverThinValue();
  check("B11.3 thin-value matrisi 3 satır", !!tv && tv.rows.length === 3, tv ? String(tv.rows.length) : "null");
  const cat = badRiverCatalog();
  check("B11.4 kötü river kataloğu 4 madde", cat.length === 4, String(cat.length));
  // TPGK vs bana-overcard turn → kitap hücresi "Check-call" (kolon 2). Kayarsa grader yanlış
  // yön öğretir — build'i durdur.
  if (tb) {
    const tpgk = tb.rows.find((r) => /good kicker|iyi kicker/i.test(r[0]));
    check("B11.1 TPGK×overcard = check-call", !!tpgk && /check-call/i.test(tpgk[2] || ""), tpgk?.[2]);
    // value/blöf ayrımı hava+bloker satırının varlığına bağlı (→ blöf barrel).
    check("B11.1 hava+bloker satırı var", tb.rows.some((r) => /air|hava|blocker|bloker/i.test(r[0])));
  }
  // 11.3 rec kolonu value bet (river'da VALUE bahsinin evi).
  check("B11.3 rec kolonu = value bet", !!tv && /value bet/i.test(tv.rows[0]?.[1] || ""), tv?.rows[0]?.[1]);
  // value/blöf etiketi: per elleri VALUE bet'ler, yalnız hava+bloker blöf barrel'dir. (Regresyon kapısı:
  // çıplak /air/ regex'i "Overpair"/"Top pair"i blöf etiketledi — her value bet yanlış grade oldu.)
  check("betType Overpair = value", betType("Overpair") === "betvalue");
  check("betType Top pair iyi kicker = value", betType("Top pair iyi kicker") === "betvalue");
  check("betType Hava + bloker = blöf", betType("Hava + bloker") === "betbluff");
  check("postflop turn Q üretiliyor", !!postflopQuestion("turn"));
  check("postflop river Q üretiliyor", !!postflopQuestion("river"));
}

// D1-1: BB'nin ayrı flat listesi olmayan açılışında fold havuzu üretilmez (JJ/TT/AQs 'fold' notlanmasın).
check("D1-1 UTG→BB fold havuzu boş (BB flat geniş)", poolsFor("UTG/UTG+1", "BB").poolFold.length === 0);

// D4-41: buildPools geçersiz grup/pozisyonda null; her gerçek satır en az bir kategori havuzu üretir.
check("D4-41 buildPools geçersiz grupta null", buildPools("YOK", "XX") === null);
for (const g of groups) {
  for (const row of g.table.rows) {
    const p = buildPools(g.opener, row[0]);
    check(
      `D4-41 ${g.opener}→${row[0]} havuz üretiyor`,
      !!p && (p.set3.size > 0 || p.setFlat.size > 0 || p.poolFold.length > 0),
    );
  }
}

// D4-37: Aralık Rehberi / RangeRecall parser'ları — kitap ifadesi değişirse sessizce boşalmasın.
check("D4-37 openRanges dolu", openRanges().length > 0);
check("D4-37 jamRanges dolu", jamRanges().length > 0);
{
  const jc = jamCallRange();
  check("D4-37 jamCallRange dolu + el token", jc !== "" && parseRange(jc).cells.size > 0, jc);
}
check("D4-37 fourBetRanges parse", fourBetRanges() !== null);
check("D4-37 squeezeRange parse", squeezeRange() !== null);
{
  const qr = quickReference();
  check(
    "D4-37 quickRef 4 baz alan dolu",
    qr.decisionOrder.length > 0 && !!qr.sizes && !!qr.band2530 && qr.redFlags.length > 0,
  );
  // D6-55: v5 Hızlı Referans'ın 8 kartından eksik 4'ü (Postflop/ICM/Multiway/Tilt) yüzeyde.
  check("D6-55 quickRef Postflop kartı", !!qr.postflop && qr.postflop.rows.length > 0);
  check("D6-55 quickRef ICM kartı", !!qr.icm && qr.icm.rows.length > 0);
  check("D6-55 quickRef Multiway kartı", !!qr.multiway && qr.multiway.rows.length > 0);
  check("D6-55 quickRef Tilt kartı", !!qr.tilt && qr.tilt.rows.length > 0);
}

// D1-9 / D1-7 / D6-63: yeni postflop/PLO/köprü tabloları parse ediliyor ve motor soru üretiyor.
check("D1-9 bridgeBand (B14.1) parse", !!bridgeBand() && bridgeBand()!.rows.length > 0);
check("D1-7 multiwayMatrix (B13.1) parse", !!multiwayMatrix() && multiwayMatrix()!.rows.length > 0);
check("D1-7 postflop multiway Q üretiliyor", !!postflopQuestion("multiway"));
check("D6-63 ploStackOff (B15.2) parse", !!ploStackOff() && ploStackOff()!.rows.length > 0);
check("D6-63 ploModes (B15.1) parse", !!ploModes() && ploModes()!.rows.length > 0);
check("D6-63 postflop PLO Q üretiliyor", !!postflopQuestion("plo"));

// D4-38: 57 senaryonun yapısal bütünlüğü — correct sınırda, source dolu, kavram dolu, sayı sabit.
// ---- D-audit kapıları: modül tablo referansları, bölüm kapsaması, başlık bütünlüğü, TTS ----
// Bunlar canlıda "Tablo yüklenemedi." / sessiz slayt / kayıp bölüm olarak görünüyordu, kapısızdı.
{
  const broken: string[] = [];
  for (const m of modules)
    for (const sl of m.slides as { title: string; table?: { section: string; sub: string } }[])
      if (sl.table && !tableFromSection(sl.table.section, sl.table.sub))
        broken.push(`${m.id}/${sl.title.slice(0, 20)} → ${sl.table.section} ${sl.table.sub}`);
  check("D-audit modül tablo referansları çözülüyor", broken.length === 0, broken.join(" | "));

  // NEW_CHAPTERS artık chapterTitles()'tan türüyor → burada kaynağın kendisini doğrula.
  const chapters = chapterTitles();
  const h2 = rawMarkdown.split("\n").filter((l) => /^## Bölüm \d+/.test(l)).length;
  check("D-audit chapterTitles tüm bölüm başlıklarını yakalıyor", chapters.length === h2, `${chapters.length}/${h2}`);
  check("D-audit her bölümün kısa etiketi dolu", chapters.every((c) => c.short.trim().length > 0));
  check("D-audit her bölüm sectionBlock dolu", chapters.every((c) => sectionBlock("Bölüm " + c.n).trim().length > 0));

  const seen = new Set<string>();
  const dupes: string[] = [];
  for (const line of rawMarkdown.split("\n")) {
    const mm = line.match(/^### (\d+\.\d+(?:-EK(?:-\d+)?)?)\s/);
    if (!mm) continue;
    if (seen.has(mm[1])) dupes.push(mm[1]);
    seen.add(mm[1]);
  }
  check("D-audit çift alt-bölüm numarası yok", dupes.length === 0, dupes.join(","));

  // TTS kapsaması: bake edilmemiş cümle = sessiz slayt. manifest yoksa kapı atlanır (ilk kurulum).
  let manifest: string[] | null = null;
  try {
    manifest = JSON.parse(readFileSync("public/tts/manifest.json", "utf8"));
  } catch {
    manifest = null;
  }
  if (manifest) {
    const have = new Set(manifest);
    const silent: string[] = [];
    for (const m of modules)
      for (const sl of m.slides as { title: string; narration?: string }[])
        for (const s of sentencesOf(sl.narration || ""))
          if (!have.has(hashKey("v1|" + s))) silent.push(`${m.id}/${sl.title.slice(0, 18)}`);
    check("D-audit tüm slayt anlatımları bake'li (sessiz slayt yok)", silent.length === 0, [...new Set(silent)].slice(0, 6).join(" | "));
  }
}

// Senaryo "tell" kapısı: doğru şık sürekli en uzun ya da hep aynı indekste olursa quiz
// pokerden değil biçimden çözülür (D-audit).
{
  // Gösterilen sıra optionOrder ile karışıyor → kapı VERİYİ değil EKRANI ölçer.
  const shown = SCENARIOS.map((s) => optionOrder(s.q, s.options.length).indexOf(s.correct));
  const twoOpt = SCENARIOS.filter((s) => s.options.length === 2);
  const atOne = SCENARIOS.filter((s, i) => s.options.length === 2 && shown[i] === 1).length;
  const longest = SCENARIOS.filter(
    (s) => s.options[s.correct].length === Math.max(...s.options.map((o) => o.length)),
  ).length;
  check(
    "D-audit 2-şıklıda gösterilen doğru-cevap indeks dengesi (≤%75)",
    twoOpt.length === 0 || atOne / twoOpt.length <= 0.75,
    `${atOne}/${twoOpt.length}`,
  );
  check(
    "D-audit doğru şık 'en uzun' oranı (≤%75)",
    longest / SCENARIOS.length <= 0.75,
    `${longest}/${SCENARIOS.length}`,
  );
}

{
  const badCorrect = SCENARIOS.filter((s) => !(s.correct >= 0 && s.correct < s.options.length));
  const badSource = SCENARIOS.filter((s) => !s.source || !s.source.trim());
  const badKavram = SCENARIOS.filter((s) => typeof s.kavram !== "string" || !s.kavram);
  check("D4-38 senaryo sayısı 139 (TR; EN paritesi bekliyor)", SCENARIOS.length === 139, String(SCENARIOS.length));
  check("D4-38 tüm correct options sınırında", badCorrect.length === 0, badCorrect.map((s) => s.q.slice(0, 24)).join("|"));
  check("D4-38 tüm source dolu", badSource.length === 0, String(badSource.length));
  check("D4-38 tüm kavram dolu", badKavram.length === 0, String(badKavram.length));
}

// WHY_WRONG çeldirici gerekçeleri: anahtar gerçek bir senaryo q'su olmalı ve dizi options ile
// hizalı (doğru şık "" boş, tüm yanlış şıklar dolu). Anahtar yazım hatası gerekçeyi sessizce
// yutar; hizasızlık yanlış şıkka gerekçe basar → build kapısı.
{
  const qSet = new Set(SCENARIOS.map((s) => s.q));
  const badKey = Object.keys(WHY_WRONG).filter((q) => !qSet.has(q));
  check("WHY_WRONG anahtarları senaryoya bağlı", badKey.length === 0, badKey.map((q) => q.slice(0, 24)).join("|"));
  const misaligned: string[] = [];
  for (const [q, arr] of Object.entries(WHY_WRONG)) {
    const sc = SCENARIOS.find((s) => s.q === q);
    if (!sc) continue;
    const okLen = arr.length === sc.options.length;
    const okCorrectEmpty = arr[sc.correct] === "";
    const okWrongFilled = arr.every((v, i) => i === sc.correct || (typeof v === "string" && v.trim().length > 0));
    if (!(okLen && okCorrectEmpty && okWrongFilled)) misaligned.push(q.slice(0, 24));
  }
  check("WHY_WRONG dizileri options ile hizalı", misaligned.length === 0, misaligned.join("|"));
}

// D7-73: karne veri katmanının saf fonksiyonları (DUE_CAP tam bu boşluktan sessizce geçmişti).
check("D7-73 P0: correct cevabın due'su geçmişte değil", computeDue("correct", 1) >= localIsoDay(0), computeDue("correct", 1));
check("D7-73 capDue geçmiş tarihi ileri itmez", capDue("2000-01-01") === "2000-01-01");
check("D7-73 capDue farFuture <= farFuture", capDue(localIsoDay(365)) <= localIsoDay(365));
check("D7-73 mastery: 3 streak + 3 gün = saglam", computeMastery(3, ["a", "b", "c"]) === "saglam");
check("D7-73 mastery: 2 streak + 2 gün = yetkin", computeMastery(2, ["a", "b"]) === "yetkin");
check("D7-73 mastery: 1 streak = asina", computeMastery(1, ["a"]) === "asina");
check("D7-73 mastery: 0 = gorundu", computeMastery(0, []) === "gorundu");
{
  const mig = migrate([{ kavram: "x", due: "2030-01-01" }, { kavram: "x" }, { kavram: "y" }]);
  const x = mig.find((e) => e.kavram === "x");
  check("D7-73 migrate v1 çok-satır → konsolide (x reps=2)", mig.length === 2 && x?.reps === 2, String(mig.length));
  check("D7-73 migrate malformed alan çökmez (correctDays dizi)", Array.isArray(x?.correctDays));
}

// KARNE_SEED slug'ları da yapısal kontrol (drift göstergesi).
check("KARNE_SEED slug'ları dolu", KARNE_SEED.every((k) => typeof k.kavram === "string" && k.kavram.length > 0));

console.log(out.join("\n"));
console.log(`\nRESULT: ${failed === 0 ? "ALL PASS" : failed + " FAIL"}`);
if (failed) process.exit(1);
