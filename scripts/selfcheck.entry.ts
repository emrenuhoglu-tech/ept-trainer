// İçerik selfcheck (assertions) — kitabı parse eden GERÇEK modülleri çalıştırır ve
// quiz cevaplarının poker_cep_kitabi_v5.md ile tutarlılığını doğrular. Parser
// regresyonlarına karşı kapı. Hiçbir mantık kopyalanmaz; kaynak kodun kendisi test edilir.
import { rangeGroups, questionBank, sectionBlock, tenSentences } from "../src/content/curriculum";
import { parseRange } from "../src/lib/handgrid";
import { flatText, flatScope } from "../src/modes/quiz/quizEngine";

function poolsFor(opener: string, position: string) {
  const g = rangeGroups().find((x) => x.opener === opener)!;
  const applicable = g.flats.filter((fl) => flatScope(fl).includes(position));
  const ft = flatText(applicable);
  const cells = parseRange(ft).cells;
  const flatWide = cells.size === 0 && /geniş|tüm|çoğu/i.test(ft);
  return { ft, cells, flatWide };
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
for (const n of [11, 12, 13, 14, 15, 16]) {
  const body = sectionBlock("Bölüm " + n);
  check(`B${n} sectionBlock dolu`, body.trim().length > 0, String(body.length));
  check(`B${n} en az bir tablo içeriyor`, body.includes("|"));
}

console.log(out.join("\n"));
console.log(`\nRESULT: ${failed === 0 ? "ALL PASS" : failed + " FAIL"}`);
if (failed) process.exit(1);
