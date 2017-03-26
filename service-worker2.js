var cacheTimestamp = '1490563552889';
var cacheName = 'andy-dev-shell-v' + cacheTimestamp;
var dataCacheName = 'andy-dev-data-v' + cacheTimestamp;
var filesToCache = [
 '/',
 '/about/index.html',
 '/resume/index.html',
 '/work/index.html',
 '/contact/index.html',
 '/manifest.json',
 '/static/css/app.988aab5d5ababe5df07c335220597ad6.css',
 '/static/js/app.9f02c68f33e333b11d95.js',
 '/static/js/manifest.201a8ea1a9c8b83ae58d.js',
 '/static/js/vendor.6d91f589af8647cc85de.js',
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