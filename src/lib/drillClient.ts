// Drill proxy istemcisi. /api/drill'e POST atar, modelin JSON çıktısını ayrıştırır.
// Model düz metin dönerse çökmez: {ok:false, raw} döner, UI "tekrar dene" gösterir.
import { KITAP } from "../data/kitap_summary";

export interface DrillJson {
  evaluation: "correct" | "half" | "wrong" | null;
  severity?: "minor" | "major" | "tournament_life" | null;
  lesson: string;
  concept: string;
  next_question: string | null;
  session_summary: string | null;
}

export interface DrillResult {
  ok: boolean;
  data?: DrillJson;
  raw?: string;
  model?: string;
  error?: string;
}

export interface ChatMsg {
  role: "user" | "assistant";
  content: string;
}

// Modelin JSON'u kod bloğu veya fazladan metinle sarması ihtimaline karşı,
// ilk { ile son } arasını al.
function extractJson(text: string): string {
  const a = text.indexOf("{");
  const b = text.lastIndexOf("}");
  return a >= 0 && b > a ? text.slice(a, b + 1) : text;
}

export async function drillTurn(
  messages: ChatMsg[],
  karne: string,
): Promise<DrillResult> {
  try {
    const r = await fetch("/api/drill", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify({ messages, karne, kitap: KITAP }),
    });
    const j = await r.json();
    if (!r.ok || j.error) {
      return { ok: false, error: j.error || `HTTP ${r.status}`, raw: j.text };
    }
    const text: string = j.text ?? "";
    try {
      const data = JSON.parse(extractJson(text)) as DrillJson;
      return { ok: true, data, model: j.model };
    } catch {
      return { ok: false, raw: text, model: j.model, error: "JSON ayrıştırılamadı" };
    }
  } catch (e) {
    return { ok: false, error: String(e) };
  }
}
