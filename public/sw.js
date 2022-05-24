const CACHE_STATIC_NAME = 'static-v29';
const CACHE_DYNAMIC_NAME = 'dynamic-v5';

const STATIC_FILES = [
    "/",
    "/index.html",
]

// Cache the assets
self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(CACHE_STATIC_NAME).then(cache => {
            cache.addAll(STATIC_FILES)
        })
    )
})


self.addEventListener('fetch', function(event) {
  // event.respondWith(
  //   caches.match(event.request)
  //     .then(function(response) {
  //       if (response) {
  //         return response;
  //       } else {
  //         return fetch(event.request)
  //           .then(function(res) {
  //             return caches.open(CACHE_DYNAMIC_NAME)
  //               .then(function(cache) {
  //                 cache.put(event.request.url, res.clone());
  //                 return res;
  //               })
  //           })
  //           .catch(function(err) {
  //
  //           });
  //       }
  //     })
  // );
});

self.addEventListener('activate', function (event) {
    console.log('[Service Worker] Activating Service Worker ....', event);
    event.waitUntil(
        caches.keys()
            .then(function (keyList) {
                return Promise.all(keyList.map(function (key) {
                    if (key !== CACHE_STATIC_NAME && key !== CACHE_DYNAMIC_NAME) {
                        console.log('[Service Worker] Removing old cache.', key);
                        return caches.delete(key);
                    }
                }));
            })
    );
    return self.clients.claim();
});

self.addEventListener('notificationclick', function (event) {
    const notification = event.notification;
    const action = event.action

    console.log(notification)

    if(action == 'confirm') {
        console.log('Confirm clicked');
        notification.close();
    } else {
        console.log(action);
        notification.close();
    }
})

self.addEventListener('notificationclose', function (event) {
    console.log('Notification was closed', event)
})
