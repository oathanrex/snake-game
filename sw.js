// Minimal service worker.
// Its only job is to satisfy PWA "installability" checks (Add to Home Screen).
// It intentionally does NOT cache or intercept any requests, so it can never
// serve stale content or break updates to the game.

self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(self.clients.claim());
});
