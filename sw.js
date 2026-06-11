const CACHE = 'dnd-sheet-v3';
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

// Activate: delete old caches, take control immediately
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: network-first for HTML, cache-first for everything else
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);
  const isHTML = url.pathname.endsWith('.html') || url.pathname.endsWith('/');

  if (isHTML) {
    // Always try network first for the main page
    e.respondWith(
      fetch(e.request).then(response => {
        if (response && response.status === 200) {
          caches.open(CACHE).then(c => c.put(e.request, response.clone()));
        }
        return response;
      }).catch(() =>
        // Offline fallback
        caches.match(e.request)
      )
    );
  } else {
    // Cache-first for icons, manifest etc
    e.respondWith(
      caches.open(CACHE).then(cache =>
        cache.match(e.request).then(cached => {
          const fetchPromise = fetch(e.request).then(response => {
            if (response && response.status === 200)
              cache.put(e.request, response.clone());
            return response;
          }).catch(() => null);
          return cached || fetchPromise;
        })
      )
    );
  }
});
