var cacheTimestamp = '1490210834883';
var cacheName = 'andy-dev-shell-v' + cacheTimestamp;
var dataCacheName = 'andy-dev-data-v' + cacheTimestamp;
var filesToCache = [
 '/',
 '/about/index.html',
 '/resume/index.html',
 '/work/index.html',
 '/contact/index.html',
 '/manifest.json',
 '/static/css/app.3b93d54270ea09ad67f6f9e263ee5f63.css',
 '/static/js/app.abeff9cdc7ce25ad261a.js',
 '/static/js/manifest.2acb07922c177c7467bd.js',
 '/static/js/vendor.ddc9bf5ab6e66ebc2731.js',
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
    body: 'Modular Scale in Responsive Web Design - Click here to check it out',
    icon: './static/images/new-post.jpg',
    tag: 'simple-push-demo-notification'
  };

  return self.registration.showNotification('Check Out My New Blog Post!', notificationOptions);
});

self.addEventListener('notificationclick', function(event) {
  console.log('[Service Worker] Notification click Received.');

  event.notification.close();

  event.waitUntil(
    clients.openWindow('https://blog.tatthien.com/post/development-tool')
  );
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
