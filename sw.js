const CACHE_NAME = 'side-step-trainer';
const assets = [
    '/',
    '/index.html',
    '/icon-192x192.png',
    '/icon-512x512.png'
];

// Install service worker
self.addEventListener('install', evt => {
    evt.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => cache.addAll(assets))
    );
});

// Activate service worker
self.addEventListener('activate', evt => {
    evt.waitUntil(
        caches.keys().then(keys => {
            return Promise.all(keys
                .filter(key => key !== CACHE_NAME)
                .map(key => caches.delete(key))
            );
        })
    );
});

// Fetch event
self.addEventListener('fetch', evt => {
    evt.respondWith(
        caches.match(evt.request)
            .then(cacheRes => {
                return cacheRes || fetch(evt.request);
            })
    );
});