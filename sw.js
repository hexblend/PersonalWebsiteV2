var CACHE_NAME = 'vladb.uk.cache';
var urlsToCache = [
    'css/main.css',
    'js/main.js',
    'js/jquery.sticky.js',
    'img/main-bg.jpg',
    'img/portfolio_project1_preview.jpg'
];

self.addEventListener('install', function (event) {
    // Perform install steps
    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(function (cache) {
            console.log('Opened cache');
            return cache.addAll(urlsToCache);
        })
    );
});

self.addEventListener("fetch", function (event) {
    event.respondWith(
        caches.match(event.request).then(function (response) { // Initial request
            // Cache hit - return response
            if (response) { // If in cache server from cache
                return response;
            }

            var fetchRequest = event.request.clone();

            return fetch(fetchRequest).then(function (response) { // Inital request when not in cache
                // Check if we received a valid response
                if (!response || response.status !== 200 || response.type !== "basic") {
                    // Return errored Response
                    return response;
                }

                var responseToCache = response.clone();
                // Clone Response

                // Add to cache
                if (fetchRequest["method"] !== "POST") {
                    caches.open(CACHE_NAME).then(function (cache) {
                        cache.put(event.request, responseToCache);
                    });
                }
                return response;
            });
        })
    );
});
