// Ses adapter'i. Faz 1: yalnizca Web Speech (tr-TR).
// ElevenLabs Faz 3'te server/proxy.mjs uzerinden eklenecek (anahtar istemciye sizmasin).
//
// Sorun: Turkce TTS motoru "3-bet", "bluff-catcher" gibi Ingilizce terimleri bozuk okur.
// Cozum: seslendirmeden ONCE terimleri Turkce fonetik karsiliklariyla degistiriyoruz.
// Ekrandaki YAZI degismiyor — sadece sese giden metin.

// Sira onemli: bilesik terimler once (3-bet < bet, stack-off < stack, check-raise < raise).
const PRON: [RegExp, string][] = [
  [/\bcheck-?raise\b/gi, "çek reyz"],
  [/\bcheck-?call\b/gi, "çek kol"],
  [/\bcheck-?fold\b/gi, "çek fold"],
  [/\bstack-?off\b/gi, "stek of"],
  [/\bsemi-?bluff\b/gi, "semi blaf"],
  [/\bbluff-?catcher\b/gi, "blaf keçır"],
  [/\bcoldcall\b/gi, "kold kol"],
  [/\bcbet\b/gi, "si bet"],
  [/\b5-?bet\b/gi, "beş bet"],
  [/\b4-?bet\b/gi, "dört bet"],
  [/\b3-?bet\b/gi, "üç bet"],
  [/(\d)\s?bb\b/gi, "$1 big blaynd"],
  [/\bOOP\b/g, "o o pi"],
  [/\bIP\b/g, "ay pi"],
  [/\bICM\b/g, "ay si em"],
  [/\bPLO\b/g, "pi el o"],
  [/\bNLH\b/g, "en el eyç"],
  [/\bBB\b/g, "big blaynd"],
  [/\bSB\b/g, "smol blaynd"],
  [/\bBTN\b/g, "batın"],
  [/\bUTG\b/g, "yu ti ci"],
  [/\bbluff\b/gi, "blaf"],
  [/\bvalue\b/gi, "velyu"],
  [/\bboard\b/gi, "bord"],
  [/\bflat\b/gi, "flet"],
  [/\bflop\b/gi, "flop"],
  [/\briver\b/gi, "rivır"],
  [/\bturn\b/gi, "törn"],
  [/\bcall\b/gi, "kol"],
  [/\braise\b/gi, "reyz"],
  [/\bsqueeze\b/gi, "skuiz"],
  [/\bgutshot\b/gi, "gatşat"],
  [/\brakeback\b/gi, "reykbek"],
  [/\bstack\b/gi, "stek"],
  [/\bbubble\b/gi, "babıl"],
  [/\bnut\b/gi, "nat"],
  [/\bkicker\b/gi, "kikır"],
  [/\brundown\b/gi, "randaun"],
  [/\bdangler\b/gi, "denglır"],
  [/\bwrap\b/gi, "rep"],
  [/\bstation\b/gi, "steyşın"],
  [/\bshowdown\b/gi, "şovdaun"],
  [/\bequity\b/gi, "ekvıti"],
];

function forSpeech(text: string): string {
  let out = text;
  for (const [re, sub] of PRON) out = out.replace(re, sub);
  return out;
}

export interface Speaker {
  readonly supported: boolean;
  speak(text: string, rate?: number): Promise<void>;
  stop(): void;
}

class WebSpeaker implements Speaker {
  readonly supported =
    typeof window !== "undefined" && "speechSynthesis" in window;
  private voice: SpeechSynthesisVoice | null = null;

  constructor() {
    if (this.supported) {
      this.pickVoice();
      // Bazi tarayicilarda sesler asenkron yuklenir.
      window.speechSynthesis.onvoiceschanged = () => this.pickVoice();
    }
  }

  private pickVoice() {
    const voices = window.speechSynthesis.getVoices();
    this.voice =
      voices.find((v) => v.lang === "tr-TR") ||
      voices.find((v) => v.lang.startsWith("tr")) ||
      null;
  }

  speak(text: string, rate = 1.0): Promise<void> {
    if (!this.supported) return Promise.resolve();
    window.speechSynthesis.cancel();
    return new Promise((resolve) => {
      const u = new SpeechSynthesisUtterance(forSpeech(text));
      u.lang = "tr-TR";
      if (this.voice) u.voice = this.voice;
      u.rate = rate;
      u.pitch = 1.0;
      u.onend = () => resolve();
      u.onerror = () => resolve();
      window.speechSynthesis.speak(u);
    });
  }

  stop() {
    if (this.supported) window.speechSynthesis.cancel();
  }
}

// --- Faz 3: proxy TTS (OpenAI/ElevenLabs) + IndexedDB önbellek ---
// Mod localStorage'da: "hd" (varsayılan, proxy /api/tts) | "web" (Web Speech).
// Varsayılan HD: bu makinede Türkçe Web Speech sesi yok, HD daha net. Proxy kapalıysa
// HybridSpeaker zaten Web'e düşer.
export type TtsMode = "web" | "hd";
export function getTtsMode(): TtsMode {
  return (localStorage.getItem("ept:tts:mode") as TtsMode) || "hd";
}
export function setTtsMode(m: TtsMode): void {
  localStorage.setItem("ept:tts:mode", m);
}

function hashKey(s: string): string {
  let h = 5381;
  for (let i = 0; i < s.length; i++) h = (h * 33) ^ s.charCodeAt(i);
  return "a" + (h >>> 0).toString(36);
}

function idb(): Promise<IDBDatabase> {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open("ept-tts", 1);
    req.onupgradeneeded = () => req.result.createObjectStore("audio");
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}
async function cacheGet(key: string): Promise<Blob | null> {
  try {
    const db = await idb();
    return await new Promise((res) => {
      const r = db.transaction("audio").objectStore("audio").get(key);
      r.onsuccess = () => res((r.result as Blob) || null);
      r.onerror = () => res(null);
    });
  } catch {
    return null;
  }
}
async function cachePut(key: string, blob: Blob): Promise<void> {
  try {
    const db = await idb();
    db.transaction("audio", "readwrite").objectStore("audio").put(blob, key);
  } catch {
    /* önbellek best-effort */
  }
}

class HybridSpeaker implements Speaker {
  private web = new WebSpeaker();
  private audio: HTMLAudioElement | null = null;
  get supported() {
    return this.web.supported || getTtsMode() === "hd";
  }
  private stopAudio() {
    if (this.audio) {
      this.audio.pause();
      this.audio.src = "";
      this.audio = null;
    }
  }
  async speak(text: string, rate = 1.0): Promise<void> {
    if (getTtsMode() !== "hd") return this.web.speak(text, rate);
    // Proxy modu: metni forSpeech'ten GEÇİRME (gerçek TTS terimleri düzgün okur).
    const key = hashKey("v1|" + text);
    try {
      let blob = await cacheGet(key);
      if (!blob) {
        const r = await fetch("/api/tts", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ text }),
        });
        if (!r.ok) throw new Error(`tts ${r.status}`);
        blob = await r.blob();
        void cachePut(key, blob);
      }
      await new Promise<void>((resolve) => {
        this.stopAudio();
        const a = new Audio(URL.createObjectURL(blob!));
        a.playbackRate = rate;
        a.onended = () => resolve();
        a.onerror = () => resolve();
        this.audio = a;
        void a.play().catch(() => resolve());
      });
    } catch {
      // Proxy/anahtar yoksa Web Speech'e düş
      return this.web.speak(text, rate);
    }
  }
  stop() {
    this.stopAudio();
    this.web.stop();
  }
}

let instance: Speaker | null = null;
export function getSpeaker(): Speaker {
  if (!instance) instance = new HybridSpeaker();
  return instance;
}

// Anlatımı cümlelere böl (lookbehind YOK — geniş uyum). Poker terimlerindeki
// tire/rakamlar cümle sonu değil; yalnız . ! ? böler. Oynatma (LessonPlayer) ve
// prefetch (Progress) AYNI bölücüyü kullanmalı → önbellek anahtarları birebir eşleşir.
export function sentencesOf(text: string): string[] {
  return (text.match(/[^.!?]+[.!?]*/g) || [text]).map((s) => s.trim()).filter(Boolean);
}

// Tüm anlatımları HD sese çevirip IndexedDB'ye önbelle (çevrimdışı Ders için).
// speak() ile aynı anahtarı kullanır → sonra oynatırken API'ye gitmez.
export async function prefetchHd(
  texts: string[],
  onProgress?: (done: number, total: number) => void,
): Promise<{ ok: number; fail: number }> {
  let ok = 0;
  let fail = 0;
  const total = texts.length;
  for (let i = 0; i < texts.length; i++) {
    const text = texts[i];
    const key = hashKey("v1|" + text);
    try {
      if (!(await cacheGet(key))) {
        const r = await fetch("/api/tts", {
          method: "POST",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ text }),
        });
        if (!r.ok) throw new Error(`tts ${r.status}`);
        await cachePut(key, await r.blob());
      }
      ok++;
    } catch {
      fail++;
    }
    onProgress?.(i + 1, total);
  }
  return { ok, fail };
}
