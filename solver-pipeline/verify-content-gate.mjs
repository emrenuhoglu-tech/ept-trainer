// İÇERİK KAPISI (content verify gate) — Claude Code Workflow tool ile çalışır:
//   Workflow({ scriptPath: ".../solver-pipeline/verify-content-gate.mjs",
//              args: [ { id, draft, groundTruth? }, ... ] })
//
// Amaç: kitaba/app'e girecek HER poker içeriğini ship ETMEDEN önce 3 bağımsız lens'ten
// geçirmek. Kaynak (GTO Wizard/RIO/PokerCoaching/Upswing vb.) bir kavramı beslediğinde,
// içeriğin "genel bilgiyi kendi doktrinimizde özgün ifade" olduğunu — bir kaynağın
// reword edilmiş kopyası OLMADIĞINI — otomatik denetler. KİTAP>GTO doktrini eki.
//
// args: { id, draft, groundTruth? }[]  (groundTruth = ilgili kitap explain'i, varsa)
// döner: yalnız issues_found lens verdict'leri (temizler elenerek), en ağır önce değil —
//         çağıran fold eder. Model: fable (verify hep fable; drafting main-loop Opus).

export const meta = {
  name: 'verify-content-gate',
  description: '3-lens content gate (poker-sanity + copyright/branded + originality/attribution) for any book/app poker content before it ships. KİTAP>GTO guardrail.',
  phases: [{ title: 'Gate' }],
};

const LENS_SCHEMA = {
  type: 'object',
  additionalProperties: false,
  required: ['id', 'lens', 'verdict', 'issues'],
  properties: {
    id: { type: 'string' },
    lens: { type: 'string' },
    verdict: { type: 'string', enum: ['clean', 'issues_found'] },
    issues: {
      type: 'array',
      items: {
        type: 'object',
        additionalProperties: false,
        required: ['severity', 'claim', 'fix'],
        properties: {
          severity: { type: 'string', enum: ['low', 'medium', 'high'] },
          claim: { type: 'string' },
          fix: { type: 'string' },
        },
      },
    },
  },
};

const LENSES = {
  copyright: `You screen drafted poker training content for a personal app whose SINGLE source of truth is the user's own private book.
Flag ONLY verbatim use of branded/trademarked product names or coined proprietary terms from commercial poker sources — e.g. "GTO Wizard", "Run It Once"/"RIO", "PokerCoaching", "Upswing", "Dara O'Kearney", and coined framework terms "G-Bucks", "BRAIN", "Bounty Factor", "ICM Dial", "Toy Games".
Internal refs (MW.x, Bölüm/Chapter N), generic poker terms (SPR, ICM, MDF, bluff-catcher, overpair, range, blocker, Nash), and the user's own coinages (kök-hata) are FINE.
For each hit give a same-meaning replacement in generic language. Default clean; only flag real hits.`,

  originality: `You screen drafted poker content for ORIGINALITY. The content must be GENERAL poker knowledge re-expressed in the user's own doctrine — never a reworded reproduction of one commercial source. Re-wording does NOT cure these three; flag them:
1. PROPRIETARY NUMBERS: a specific frequency / bet-size / range / equity that reads like a solver output or a paid course's chart, rather than (a) plain arithmetic, (b) a number already in the book/ground-truth, or (c) a value routed to "(kalibre et)"/the user's own solver. Fix = route to (kalibre et) or generalize.
2. COINED TERMINOLOGY: a term unique to one commercial source used as if it were standard. Fix = rename to a generic description.
3. SELECTION / ARRANGEMENT: content that reproduces a specific source's curation — a "top-N leaks/mistakes" list in a recognizable order, or a named multi-step framework copied in sequence. Widely-taught general principles are FINE; a specific source's compiled list/sequence is NOT. Fix = restructure around the book's own spine (kök-hata etc.).
Rule of thumb: "is this general poker knowledge many sources teach, or THIS source's specific number/term/curation?" General → clean. Specific-to-one-source → flag. Default clean; only flag genuine risks.`,

  poker_sanity: `You are an adversarial poker reviewer. Flag genuine poker errors in the draft: reversed logic, wrong direction (e.g. "fold equity" vs "no fold equity"), a factually false claim, or — if GROUND TRUTH is provided — any statement inconsistent with it. Do not nitpick style or wording. Default clean; give a concrete one-line fix per issue.`,
};

const items = Array.isArray(args) ? args : (args && args.items) || [];
if (!items.length) {
  log('verify-content-gate: args boş — [{ id, draft, groundTruth? }] bekleniyor.');
  return [];
}

const results = await parallel(
  items.flatMap((it) =>
    Object.entries(LENSES).map(([lens, guard]) => () =>
      agent(
        `${guard}\n\nid: ${it.id}\n${it.groundTruth ? 'GROUND TRUTH (book explain):\n' + it.groundTruth + '\n\n' : ''}DRAFT:\n${it.draft}`,
        { label: `${lens}:${it.id}`, phase: 'Gate', model: 'fable', schema: LENS_SCHEMA },
      ).then((v) => (v ? { ...v, id: it.id, lens } : null)),
    ),
  ),
);

// Yalnız sorunlu lens'leri döndür — temizler elenir, çağıran fold eder.
return results.filter(Boolean).filter((r) => r.verdict === 'issues_found');
