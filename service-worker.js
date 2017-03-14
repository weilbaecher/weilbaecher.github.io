var cacheTimestamp = '1489467528749';
var cacheName = 'thien-notes-shell-v' + cacheTimestamp;
var dataCacheName = 'thien-notes-data-v' + cacheTimestamp;
var filesToCache = [
 '/',
 '/about/index.html',
 '/resume/index.html',
 '/work/index.html',
 '/contact/index.html',
 '/manifest.json',
 '/static/css/app.c7094ccce2c923aeb2d9733a2c794dd5.css',
 '/static/js/app.06b3633461b10e54d03d.js',
 '/static/js/manifest.f1700fb188f564a608c1.js',
 '/static/js/vendor.d3d6dab2727663ee7e45.js',
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
					console.log('[Service Workder] Removing old cache', key);
					return caches.delete(key);
				}
			}));
		})
	);
	return self.clients.claim();
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
