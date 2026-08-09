// Drill proxy — Anthropic Messages API'yi istemciden gizler.
// Model: her şey için claude-fable-5; refusal/hata olursa claude-opus-4-8'e düşer
// (Emre: "her şey için fable 5, yoksa opus 5"). Anahtar SADECE burada, .env'den.
//
// Çalıştırma: npm run server  (Node 24: --env-file=.env otomatik yüklenir)
import express from "express";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import Anthropic from "@anthropic-ai/sdk";

// Node 24: .env'i yükle (script zaten --env-file veriyor; bu yedek).
try {
  process.loadEnvFile?.();
} catch {
  /* .env yoksa geç */
}

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dir, "..");
const SYSTEM = readFileSync(join(ROOT, "src/prompts/drill_system.md"), "utf8");
const SIM_SYSTEM = readFileSync(join(ROOT, "src/prompts/sim_system.md"), "utf8");

const PRIMARY = process.env.ANTHROPIC_MODEL || "claude-fable-5";
const FALLBACK = process.env.ANTHROPIC_FALLBACK_MODEL || "claude-opus-4-8";
const MAX_TOKENS = Number(process.env.ANTHROPIC_MAX_TOKENS || 3000);
const PORT = Number(process.env.PORT || 8787);

if (!process.env.ANTHROPIC_API_KEY) {
  console.warn("[proxy] UYARI: ANTHROPIC_API_KEY yok — /api/drill 500 dönecek.");
}

const client = new Anthropic(); // ANTHROPIC_API_KEY env'den

const app = express();
app.use(express.json({ limit: "1mb" }));

app.get("/api/health", (_req, res) =>
  res.json({ ok: true, primary: PRIMARY, fallback: FALLBACK }),
);

// Ortak koç çağrısı: KITAP primer'ı (cache_control ile) + fallback zinciri.
async function runCoach(res, system, { messages = [], karne = "", kitap = "" }, primerNote) {
  const primer = [
    { type: "text", text: kitap, cache_control: { type: "ephemeral" } },
    {
      type: "text",
      text:
        `KARNE (due olanlar öncelikli; aynı kavramı FARKLI kılıkta sor, ` +
        `hangi eski soruyu test ettiğini önceden söyleme):\n${karne}\n\n${primerNote}`,
    },
  ];
  const finalMessages = [{ role: "user", content: primer }, ...messages];
  const base = {
    max_tokens: MAX_TOKENS,
    system,
    messages: finalMessages,
    output_config: { effort: "low" },
  };
  async function call(model) {
    const resp = await client.messages.create({ ...base, model });
    if (resp.stop_reason === "refusal") {
      throw new Error(`refusal (${resp.stop_details?.category || "?"})`);
    }
    const text = (resp.content || [])
      .filter((b) => b.type === "text")
      .map((b) => b.text)
      .join("")
      .trim();
    return { text, model: resp.model || model };
  }
  try {
    return res.json(await call(PRIMARY));
  } catch (ePrimary) {
    console.warn(`[proxy] ${PRIMARY} başarısız (${ePrimary.message}) → ${FALLBACK}`);
    try {
      return res.json(await call(FALLBACK));
    } catch (eFallback) {
      console.error("[proxy] fallback da başarısız:", eFallback);
      return res.status(502).json({ error: `Model hatası: ${eFallback.message || eFallback}` });
    }
  }
}

app.post("/api/drill", (req, res) =>
  runCoach(res, SYSTEM, req.body || {}, "Yukarıdaki KITAP müfredatına göre drill yürüt. Yalnızca geçerli JSON döndür."),
);

app.post("/api/sim", (req, res) =>
  runCoach(res, SIM_SYSTEM, req.body || {}, "Yukarıdaki KITAP müfredatına göre eli sokak sokak oynat. Yalnızca geçerli JSON döndür."),
);

// --- Faz 3: TTS (OpenAI veya ElevenLabs). Anahtar yoksa 501 → istemci Web Speech'e düşer.
const TTS_PROVIDER = process.env.TTS_PROVIDER || "web";
const OPENAI_VOICE = process.env.OPENAI_TTS_VOICE || "alloy";
// gpt-4o-mini-tts'e dil/ton yönergesi: Türkçe eğitmen, İngilizce poker terimlerini doğal harmanla.
const OPENAI_INSTRUCTIONS =
  process.env.OPENAI_TTS_INSTRUCTIONS ||
  "Speak entirely in Turkish, as a calm and clear poker coach explaining to a student. " +
    "Unhurried, warm, confident pace. Pronounce embedded English poker terms " +
    "(bluff-catcher, value, all-in, board) clearly but blended naturally into the Turkish speech.";
const ELEVEN_VOICE = process.env.ELEVENLABS_VOICE_ID || "";

app.post("/api/tts", async (req, res) => {
  const { text = "", provider = TTS_PROVIDER } = req.body || {};
  if (!text.trim()) return res.status(400).json({ error: "boş metin" });

  try {
    if (provider === "openai") {
      if (!process.env.OPENAI_API_KEY)
        return res.status(501).json({ error: "OPENAI_API_KEY yok" });
      const r = await fetch("https://api.openai.com/v1/audio/speech", {
        method: "POST",
        headers: {
          authorization: `Bearer ${process.env.OPENAI_API_KEY}`,
          "content-type": "application/json",
        },
        body: JSON.stringify({
          model: process.env.OPENAI_TTS_MODEL || "gpt-4o-mini-tts",
          voice: OPENAI_VOICE,
          input: text,
          instructions: OPENAI_INSTRUCTIONS,
          response_format: "mp3",
        }),
      });
      if (!r.ok) return res.status(502).json({ error: `openai ${r.status}` });
      res.setHeader("content-type", "audio/mpeg");
      return res.send(Buffer.from(await r.arrayBuffer()));
    }
    if (provider === "elevenlabs") {
      if (!process.env.ELEVENLABS_API_KEY || !ELEVEN_VOICE)
        return res.status(501).json({ error: "ELEVENLABS anahtarı/voice yok" });
      const r = await fetch(
        `https://api.elevenlabs.io/v1/text-to-speech/${ELEVEN_VOICE}`,
        {
          method: "POST",
          headers: {
            "xi-api-key": process.env.ELEVENLABS_API_KEY,
            "content-type": "application/json",
            accept: "audio/mpeg",
          },
          body: JSON.stringify({
            text,
            model_id: process.env.ELEVENLABS_MODEL || "eleven_multilingual_v2",
          }),
        },
      );
      if (!r.ok) return res.status(502).json({ error: `elevenlabs ${r.status}` });
      res.setHeader("content-type", "audio/mpeg");
      return res.send(Buffer.from(await r.arrayBuffer()));
    }
    return res.status(501).json({ error: "TTS sağlayıcı 'web' (proxy ses yok)" });
  } catch (e) {
    return res.status(502).json({ error: String(e?.message || e) });
  }
});

app.listen(PORT, () =>
  console.log(`[proxy] http://localhost:${PORT}  (${PRIMARY} → ${FALLBACK}, tts=${TTS_PROVIDER})`),
);
