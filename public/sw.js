// Service Worker for Enhanced Performance and Security
const CACHE_NAME = 'ethicbizz-v1.0.0';
const urlsToCache = [
  '/',
  '/static/js/bundle.js',
  '/static/css/main.css',
  '/manifest.json'
];

// Install event
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Return cached version or fetch from network
        return response || fetch(event.request);
      }
    )
  );
});

// Security headers
self.addEventListener('fetch', function(event) {
  if (event.request.destination === 'document') {
    event.respondWith(
      fetch(event.request).then(function(response) {
        const newHeaders = new Headers(response.headers);
        newHeaders.set('X-Frame-Options', 'DENY');
        newHeaders.set('X-Content-Type-Options', 'nosniff');
        newHeaders.set('X-XSS-Protection', '1; mode=block');
        
        return new Response(response.body, {
          status: response.status,
          statusText: response.statusText,
          headers: newHeaders
        });
      })
    );
  }
});