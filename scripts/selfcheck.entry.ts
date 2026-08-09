// İçerik selfcheck (assertions) — kitabı parse eden GERÇEK modülleri çalıştırır ve
// quiz cevaplarının poker_cep_kitabi_v4.md ile tutarlılığını doğrular. Parser
// regresyonlarına karşı kapı. Hiçbir mantık kopyalanmaz; kaynak kodun kendisi test edilir.
import { rangeGroups, questionBank } from "../src/content/curriculum";
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
  check("Soru Bankası 3 alt-bölüm", qb.length === 3, qb.map((s) => s.questions.length).join("+"));
  check("Soru Bankası 24 soru", total === 24, String(total));
}

console.log(out.join("\n"));
console.log(`\nRESULT: ${failed === 0 ? "ALL PASS" : failed + " FAIL"}`);
if (failed) process.exit(1);
