// Minimal offline service worker. Uygulama kabuğunu ve varlıklarını önbelleğe alır.
// API (/api) ve TTS asla cache'lenmez (proxy'ye gider).
const CACHE = "ept-v2";
const SHELL = ["./", "./index.html", "./manifest.webmanifest"];

self.addEventListener("install", (e) => {
  // Kabuk önceden cache'lensin → taze kurulumda offline ilk açılış çalışsın
  e.waitUntil(caches.open(CACHE).then((cache) => cache.addAll(SHELL)));
  self.skipWaiting();
});

self.addEventListener("activate", (e) =>
  e.waitUntil(
    caches
      .keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  ),
);

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
      // Sayfa gezinmesi: önce ağ (yeni varlık referansları için), olmazsa cache/kabuk
      if (req.mode === "navigate")
        return (
          (await network) || cached || (await cache.match("./")) || (await cache.match("./index.html"))
        );
      // Varlıklar: stale-while-revalidate (önce cache, arka planda ağdan tazele)
      return cached || (await network) || Response.error();
    })(),
  );
});
