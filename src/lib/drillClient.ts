// Drill proxy istemcisi. /api/drill'e POST atar, modelin JSON çıktısını ayrıştırır.
// Model düz metin dönerse çökmez: {ok:false, raw} döner, UI "tekrar dene" gösterir.
import { KITAP } from "../data/kitap_summary";
import { coerceConcept } from "../data/kavramlar";

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
  offline?: boolean; // proxy erişilemiyor → çevrimdışı Aralık Quiz öner
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
      signal: AbortSignal.timeout(60000), // asılı kalan çağrı UI'yi süresiz kilitlemesin
    });
    const j = await r.json();
    if (!r.ok || j.error) {
      return { ok: false, error: j.error || `HTTP ${r.status}`, raw: j.text };
    }
    const text: string = j.text ?? "";
    try {
      const data = JSON.parse(extractJson(text)) as DrillJson;
      data.concept = coerceConcept(data.concept); // D4-42: bilinmeyen slug'ı güvenli kovaya indir
      return { ok: true, data, model: j.model };
    } catch {
      return { ok: false, raw: text, model: j.model, error: "JSON ayrıştırılamadı" };
    }
  } catch (e) {
    // D5-49: zaman aşımı = model yavaş demek, sunucu kapalı demek değil — offline'a sayma.
    const name = (e as DOMException | null)?.name;
    if (name === "TimeoutError" || name === "AbortError") {
      return { ok: false, error: "Model yavaş kaldı — tekrar dene." };
    }
    // Bağlantı yok → proxy kapalı. Çevrimdışı, kitaptan türeyen quiz'e yönlendir.
    return { ok: false, offline: true, error: "Sunucu kapalı — çevrimdışı Aralık Quiz'i kitaptan çalışır." };
  }
}
