self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open('AddToDesktopShell').then(function(cache) {
      return cache.addAll([
        '/shell.html',
        '/js/shell.js',
        '/images/shell192x192.png',
        '/images/shell512x512.png'
      ]);
    })
  );
});
