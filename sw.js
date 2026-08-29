// Service worker senp — obligatwa pou notifikasyon mache sou Android/Chrome
self.addEventListener('install', ()=>{ self.skipWaiting(); });
self.addEventListener('activate', (e)=>{ e.waitUntil(self.clients.claim()); });
