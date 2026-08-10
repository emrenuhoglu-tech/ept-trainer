// Minimal offline service worker. Uygulama kabuğunu ve varlıklarını önbelleğe alır.
// API (/api) ve TTS asla cache'lenmez (proxy'ye gider).
const CACHE = "ept-v1";

self.addEventListener("install", () => self.skipWaiting());
self.addEventListener("activate", (e) => e.waitUntil(self.clients.claim()));

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin || url.pathname.startsWith("/api")) return;

  e.respondWith(
    (async () => {
      const cache = await caches.open(CACHE);
      const cached = await cache.match(req);
      const network = fetch(req)
        .then((res) => {
          if (res && res.ok) cache.put(req, res.clone());
          return res;
        })
        .catch(() => null);
      // Sayfa gezinmesi: önce ağ (yeni varlık referansları için), olmazsa cache
      if (req.mode === "navigate") return (await network) || cached || cache.match("./index.html");
      // Varlıklar: cache-first
      return cached || (await network) || Response.error();
    })(),
  );
});
