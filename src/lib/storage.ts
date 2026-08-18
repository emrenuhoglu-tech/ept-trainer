// Basit localStorage sarmalayici. Auth yok, tek kullanici.
const PREFIX = "ept:";

let storageFailed = false;

export function load<T>(key: string, fallback: T): T {
  try {
    const raw = localStorage.getItem(PREFIX + key);
    return raw ? (JSON.parse(raw) as T) : fallback;
  } catch {
    return fallback;
  }
}

// Ham (parse edilmemiş) değeri döndürür — yok ise null. loadKarne bozuk/yarım yazılmış
// veriyi seed ile ezmeden yedekleyebilmek için ham stringe ihtiyaç duyar.
export function peek(key: string): string | null {
  try {
    return localStorage.getItem(PREFIX + key);
  } catch {
    return null;
  }
}

export function save<T>(key: string, value: T): void {
  try {
    localStorage.setItem(PREFIX + key, JSON.stringify(value));
  } catch (e) {
    // Kota dolabilir (Safari private mode ~0). SESSİZ yutma: bir kez UI'a sinyal ver,
    // yoksa kullanıcı "kaydedildi" sanır ama karne bomboş kalır.
    console.warn("ept: localStorage.setItem başarısız — kayıt yapılamadı", e);
    if (!storageFailed) {
      storageFailed = true;
      if (typeof window !== "undefined") {
        window.dispatchEvent(new CustomEvent("ept:storage-fail"));
      }
    }
  }
}

// Tüm 'ept:' anahtarlarını tek JSON'a serialize eder (Yedek indir).
export function exportAll(): string {
  const out: Record<string, unknown> = {};
  for (let i = 0; i < localStorage.length; i++) {
    const k = localStorage.key(i);
    if (k && k.startsWith(PREFIX)) {
      try {
        out[k] = JSON.parse(localStorage.getItem(k) as string);
      } catch {
        out[k] = localStorage.getItem(k);
      }
    }
  }
  return JSON.stringify(out, null, 2);
}

// Yedeği geri yazar (Yedek yükle). 'ept:' önekli anahtarları geçerli sayar.
export function importAll(json: string): { ok: boolean; count: number } {
  try {
    const parsed = JSON.parse(json) as Record<string, unknown>;
    let count = 0;
    for (const [k, v] of Object.entries(parsed)) {
      if (!k.startsWith(PREFIX)) continue;
      localStorage.setItem(k, typeof v === "string" ? v : JSON.stringify(v));
      count++;
    }
    return { ok: count > 0, count };
  } catch {
    return { ok: false, count: 0 };
  }
}
