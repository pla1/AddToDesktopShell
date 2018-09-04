self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('AddToDesktopShell').then(function(cache) {
      return cache.addAll([
        '/AddToDesktopShell/',
        '/AddToDesktopShell/shell.html',
        '/AddToDesktopShell/js/shell.js',
        '/AddToDesktopShell/images/shell192x192.png',
        '/AddToDesktopShell/images/shell512x512.png'
      ]);
    })
  );
});
