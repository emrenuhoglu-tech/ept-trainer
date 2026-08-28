// Kitap -> app kapsama raporu. "Kitaba girdi ama app'e girmedi" boslugunu yakalar.
// Kapi DEGIL, rapordur: boru hattinin ortasinda bosluk olmasi normaldir.
//   npm run gapcheck
import { readFileSync, existsSync } from "node:fs";

const book = readFileSync("content/poker_cep_kitabi_v5.md", "utf8");
const mods = readFileSync("src/data/modules.ts", "utf8");
const scen = readFileSync("src/modes/quiz/scenarios.ts", "utf8");

// Modul dosyasi hem `title:` hem `"title":` bicimini tasiyor (patch script'leri tirnakli yaziyor).
const all = (re) => [...mods.matchAll(re)].map((m) => m[1]);

const chapters = [...new Set([...book.matchAll(/^## Bölüm (\d+)/gm)].map((m) => Number(m[1])))].sort((a, b) => a - b);
const subs = [...book.matchAll(/^### ([0-9]+\.[0-9A-Za-z-]+)/gm)].map((m) => m[1]);
const eks = subs.filter((s) => /-EK/.test(s));

const modChapters = new Set();
for (const c of all(/"?chapter"?:\s*"([^"]+)"/g)) for (const m of c.matchAll(/Bölüm (\d+)/g)) modChapters.add(Number(m[1]));
const slideCount = (mods.match(/"?narration"?:/g) || []).length;
const ekSlides = (mods.match(/"?title"?:\s*"EK:/g) || []).length;

const scenChapters = new Set();
for (const m of scen.matchAll(/source:\s*"([^"]*)"/g)) {
  const b = /B[öo]l[üu]m\s*(\d+)/i.exec(m[1]);
  if (b) scenChapters.add(Number(b[1]));
}
const scenCount = (scen.match(/kavram:\s*"/g) || []).length;

const rows = [];
const gap = (label, value, detail) => rows.push({ label, value, detail });

gap("Kitap", `${chapters.length} bölüm / ${subs.length} alt bölüm`, `${eks.length} tanesi -EK`);
gap("Modüller", `${slideCount} slayt`, `${ekSlides} EK slaydı`);
gap("Quiz", `${scenCount} senaryo`, "");

// B9 (Antrenman Protokolü) ve B10 (Soru Bankası) poker içeriği değil, kitabın kullanım
// kılavuzu. B10 zaten quiz'in kaynağı (QuestionBank.tsx), B9'u drill/tekrar motoru uyguluyor.
// Modül/senaryo beklemek yanlış sinyal üretir → muaf.
const META = new Set([9, 10]);
const noModule = chapters.filter((c) => !modChapters.has(c) && !META.has(c));
const noScen = chapters.filter((c) => !scenChapters.has(c) && !META.has(c));
// -EK yogun ama EK slaydi olmayan bolumler: kitaba girdi, anlatima girmedi.
const ekByCh = {};
for (const e of eks) ekByCh[Number(e.split(".")[0])] = (ekByCh[Number(e.split(".")[0])] || 0) + 1;

console.log("\n=== KAPSAMA RAPORU ===");
for (const r of rows) console.log(`  ${r.label.padEnd(10)} ${r.value}${r.detail ? "  (" + r.detail + ")" : ""}`);

console.log("\n--- Boşluklar ---");
console.log(`  Modülsüz bölüm : ${noModule.length ? noModule.join(", ") : "yok"}`);
console.log(`  Senaryosuz bölüm: ${noScen.length ? noScen.join(", ") : "yok"}`);

const ekTop = Object.entries(ekByCh).sort((a, b) => b[1] - a[1]).slice(0, 8);
console.log(`  -EK yoğunluğu  : ${ekTop.map(([c, n]) => "B" + c + ":" + n).join("  ")}`);
console.log(`     └ toplam ${eks.length} addendum alt bölümüne karşılık ${ekSlides} EK slaydı var.`);

if (existsSync("public/tts/manifest.json")) {
  const man = JSON.parse(readFileSync("public/tts/manifest.json", "utf8"));
  const clips = Array.isArray(man) ? man.length : Object.keys(man.clips || man).length;
  console.log(`  TTS            : ${clips} klip bake'li`);
}
console.log("");
