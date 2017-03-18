var cacheTimestamp = '1489858316405';
var cacheName = 'andy-dev-shell-v' + cacheTimestamp;
var dataCacheName = 'andy-dev-data-v' + cacheTimestamp;
var filesToCache = [
 '/',
 '/about/index.html',
 '/resume/index.html',
 '/work/index.html',
 '/contact/index.html',
 '/manifest.json',
 '/static/css/app.e06b8f34d140eba1dd227d0884f11607.css',
 '/static/js/app.5b26060b584df86880c4.js',
 '/static/js/manifest.fbf91d5b4a6b752251f3.js',
 '/static/js/vendor.c7bd05f5026881ae3ff2.js',
];

self.addEventListener('install', function(e) {
	console.log('[Service Worker] Install');
	e.waitUntil(
		caches.open(cacheName).then(function(cache) {
			console.log('[Service Worker] Caching app shell');
			return cache.addAll(filesToCache);
		})
	);
});

self.addEventListener('activate', function(e) {
	console.log('[Service Worker] Activate');
	e.waitUntil(
		caches.keys().then(function(keyList) {
			return Promise.all(keyList.map(function(key) {
				if (key !== cacheName && key !== dataCacheName) {
					console.log('[Service Worker] Removing old cache', key);
					return caches.delete(key);
				}
			}));
		})
	);
	return self.clients.claim();
});

self.addEventListener('push', function(event) {  
  console.log('Received a push message', event);

  var notificationOptions = {
    body: 'Click Here to Check it Out - Modular Scale in responsive Design',
    icon: './static/images/afw-logo-black.png',
    tag: 'simple-push-demo-notification'
  };
  notification.onclick = function(event) {
  event.preventDefault(); // prevent the browser from focusing the Notification's tab
  window.open('https://tympanus.net/codrops/', '_blank');
  }

  return self.registration.showNotification('I just added a blog post!', notificationOptions);
});

self.addEventListener('fetch', function(e) {
	console.log('[Service Worker] Fetch', e.request.url);
	var dataUrl = '/wp-json/wp/v2';
	if (e.request.url.indexOf(dataUrl) >- 1) {
		e.respondWith(
			caches.open(dataCacheName).then(function(cache) {
				return fetch(e.request).then(function(response) {
					cache.put(e.request.url, response.clone());
					return response;
				});
			})
		);
	} else {
		e.respondWith(
			caches.match(e.request).then(function(response) {
				return response || fetch(e.request);
			})
		);
	}
});
