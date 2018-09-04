self.addEventListener('install', function(e) {
  console.log("Service worker. " + JSON.stringify(e));
  e.waitUntil(
    caches.open('v2').then(function(cache) {
      return cache.addAll([
        '/AddToDesktopShell/shell.html',
        '/AddToDesktopShell/js/shell.js',
        '/AddToDesktopShell/images/shell192x192.png',
        '/AddToDesktopShell/images/shell512x512.png'
      ]);
    })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
    .then(function(response) {
      if (response) {
        return response;
      }
      return fetch(event.request);
    })
  );
});
