// The old Starlite service worker lived here. Remove it so this address always shows the moved page.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', e => e.waitUntil(self.registration.unregister()));
