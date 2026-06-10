const CACHE = 'dnd-sheet-v2';
const FILES = [
  './character_sheet.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png'
];

// Install: cache all files
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(FILES)).then(() => self.skipWaiting())
  );
});

// Activate: delete old caches
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: serve from cache, update in background (stale-while-revalidate)
self.addEventListener('fetch', e => {
  e.respondWith(
    caches.open(CACHE).then(cache =>
      cache.match(e.request).then(cached => {
        const fetchPromise = fetch(e.request).then(response => {
          if(response && response.status === 200)
            cache.put(e.request, response.clone());
          return response;
        }).catch(() => null);
        return cached || fetchPromise;
      })
    )
  );
});
