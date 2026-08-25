#!/usr/bin/env node
// HRC v4 export -> SolvedSpot converter + validator (İSKELET).
//
// Alan eşlemesi (mapHrcSpot) örnek export gelince kesinleşecek — HRC'nin gerçek
// JSON anahtarları elimizde yok. Aşağıda beklenen şekil TAHMİN; TODO'lar örnekle
// doğrulanacak. Validator ise ŞİMDİDEN çalışır (schema.json'daki required + enum).
//
// Kullanım:
//   node convert-hrc.mjs <hrc-export.json> --id rfi_btn_40_chipev
//   node convert-hrc.mjs --self-test        # örnek SolvedSpot üretip validate eder

import { readFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const HERE = dirname(fileURLToPath(import.meta.url));
const SCHEMA = JSON.parse(readFileSync(join(HERE, "schema.json"), "utf8"));
const GOLDEN = JSON.parse(readFileSync(join(HERE, "golden-spots.json"), "utf8"));

// ---- HRC raw -> SolvedSpot -------------------------------------------------
// hrcRaw: HRC "official export" JSON. golden: golden-spots.json'daki spot kaydı.
export function mapHrcSpot(hrcRaw, golden, calculatedAt) {
  // TODO(örnek export): aşağıdaki path'ler HRC'nin gerçek anahtarlarıyla değişecek.
  //   Muhtemel: hrcRaw.ranges[hero], hrcRaw.actions, hrcRaw.ev, hrcRaw.tree
  const strategy = {};
  const rawHands = hrcRaw?.hands ?? hrcRaw?.ranges ?? {}; // TODO: gerçek anahtar
  for (const [hand, cell] of Object.entries(rawHands)) {
    strategy[hand] = {
      freq: cell.freq ?? cell.actions ?? {}, // TODO: {"raise":1,"call":0,"fold":0}
      ev: cell.ev ?? {},                     // TODO: {"raise":0.42,...}
    };
  }
  return {
    id: golden.id,
    provenance: {
      engine: "HRC",
      version: hrcRaw?.version ?? "4.x",
      calculatedAt, // ISO date, dışarıdan verilir (script içinde Date.now yok)
      format: GOLDEN.meta.format,
      mode: golden.icm === "chipEV" ? "chipEV" : "ICM",
      icmContext: golden.icm,
      effectiveStackBB: golden.stackBB,
      treeConfigId: hrcRaw?.treeId ?? `mtt${golden.stackBB}_v1`,
      validation: { status: "pending" },
    },
    spot: { seat: golden.seat, action: golden.action, ...(golden.vs ? { vs: golden.vs } : {}) },
    solver: {
      strategy,
      sizings: hrcRaw?.sizings ?? {}, // TODO: action -> bb/pot fraction
    },
    doctrine: { bookSlot: golden.bookSlot }, // taughtRange/exploitNote elle eklenir
  };
}

// ---- Minimal validator (schema.json: required + enum + tip) ----------------
// ajv yok; hafif ama gerçek. Full JSON-Schema gerekirse ajv eklenir.
export function validate(obj, schema = SCHEMA, path = "") {
  const errs = [];
  const t = schema.type;
  if (t === "object") {
    if (typeof obj !== "object" || obj === null || Array.isArray(obj))
      return [`${path || "root"}: object bekleniyor`];
    for (const req of schema.required ?? [])
      if (!(req in obj)) errs.push(`${path}${req}: eksik (required)`);
    if (schema.additionalProperties === false)
      for (const k of Object.keys(obj))
        if (!(k in (schema.properties ?? {}))) errs.push(`${path}${k}: bilinmeyen alan`);
    for (const [k, sub] of Object.entries(schema.properties ?? {}))
      if (k in obj) errs.push(...validate(obj[k], sub, `${path}${k}.`));
    if (schema.additionalProperties && typeof schema.additionalProperties === "object")
      for (const [k, v] of Object.entries(obj))
        errs.push(...validate(v, schema.additionalProperties, `${path}${k}.`));
  } else if (schema.enum) {
    if (!schema.enum.includes(obj)) errs.push(`${path.slice(0, -1)}: "${obj}" ∉ [${schema.enum.join("|")}]`);
  } else if (t === "number") {
    if (typeof obj !== "number") errs.push(`${path.slice(0, -1)}: number bekleniyor`);
    else if (schema.exclusiveMinimum != null && obj <= schema.exclusiveMinimum) errs.push(`${path.slice(0, -1)}: > ${schema.exclusiveMinimum} olmalı`);
    else if (schema.minimum != null && obj < schema.minimum) errs.push(`${path.slice(0, -1)}: >= ${schema.minimum}`);
    else if (schema.maximum != null && obj > schema.maximum) errs.push(`${path.slice(0, -1)}: <= ${schema.maximum}`);
  } else if (t === "string") {
    if (typeof obj !== "string") errs.push(`${path.slice(0, -1)}: string bekleniyor`);
    else if (schema.pattern && !new RegExp(schema.pattern).test(obj)) errs.push(`${path.slice(0, -1)}: pattern /${schema.pattern}/ eşleşmiyor`);
  }
  return errs;
}

// ---- CLI -------------------------------------------------------------------
const args = process.argv.slice(2);
if (args[0] === "--self-test") {
  // Örnek SolvedSpot (elle) — validator'ın çalıştığını gösterir.
  const sample = {
    id: "rfi_btn_40_chipev",
    provenance: {
      engine: "HRC", version: "4.x", calculatedAt: "2026-09-05",
      format: "NLHE_MTT_8MAX_BB_ANTE", mode: "chipEV", icmContext: "chipEV",
      effectiveStackBB: 40, treeConfigId: "mtt40_v1",
      validation: { crossCheckedWith: "GTO Wizard", status: "passed" },
    },
    spot: { seat: "BTN", action: "RFI" },
    solver: {
      strategy: { AKs: { freq: { raise: 1 }, ev: { raise: 0.9 } }, "72o": { freq: { fold: 1 }, ev: { fold: 0 } } },
      sizings: { open: 2.2 },
    },
    doctrine: { bookSlot: "B3", taughtRange: "22+, A2s+, ...", exploitNote: "rec sahada offsuit broadway kesilir" },
  };
  const errs = validate(sample);
  console.log(errs.length ? "FAIL:\n" + errs.join("\n") : "self-test PASS — örnek SolvedSpot şemaya uygun.");
  console.log(`golden-spots: ${GOLDEN.spots.length} spot yüklendi.`);
  process.exit(errs.length ? 1 : 0);
}
if (!args[0]) {
  console.log("kullanım: node convert-hrc.mjs <hrc-export.json> --id <spotId>  |  --self-test");
  process.exit(0);
}
const idFlag = args.indexOf("--id");
const spotId = idFlag >= 0 ? args[idFlag + 1] : null;
const golden = GOLDEN.spots.find((s) => s.id === spotId);
if (!golden) { console.error(`golden-spot bulunamadı: ${spotId}`); process.exit(1); }
const hrcRaw = JSON.parse(readFileSync(args[0], "utf8"));
const spot = mapHrcSpot(hrcRaw, golden, "2026-09-05"); // TODO: tarihi CLI'dan al
const errs = validate(spot);
if (errs.length) { console.error("VALIDATION FAIL:\n" + errs.join("\n")); process.exit(1); }
console.log(JSON.stringify(spot, null, 2));
