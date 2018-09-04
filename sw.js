self.addEventListener('install', function(e) {
  e.waitUntil(
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
