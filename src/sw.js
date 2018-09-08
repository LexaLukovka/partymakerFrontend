/* eslint-disable */
import ServiceWorker from './sw/ServiceWorker'

const version = 'v1::'
const serviceWorker = new ServiceWorker(self)

serviceWorker.on('install', event => {
  console.log('WORKER: install event in progress.')
  event.waitUntil(caches.open(version + 'fundamentals')
    .then(cache => cache.addAll(['/', '/styles.css', '/app.js']))
    .then(() => console.log('WORKER: install completed')),
  )
})

serviceWorker.on('activate', event => {
  console.log('WORKER: activate event in progress.')
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.filter(key => !key.startsWith(version)).map(key => caches.delete(key))))
      .then(() => console.log('WORKER: activate completed.')),
  )
})

serviceWorker.on('fetch', event => {
  console.log('WORKER: fetch event in progress.')
  if (event.request.method !== 'GET') {
    return
  }

  event.respondWith(caches.match(event.request)
    .then((cached) => {
      console.log('WORKER: from cache.', event.url)
      const networked = fetch(event.request)
        .then(fetchedFromNetwork, unableToResolve)
        .catch(unableToResolve)

      return cached || networked

      function fetchedFromNetwork(response) {
        if(!(event.request.url.indexOf('http') === 0)){
          return response
        }
        const cacheCopy = response.clone()

        console.log('WORKER: from network.', event.request.url)

        caches.open(version + 'pages')
          .then(cache => cache.put(event.request, cacheCopy))

        return response
      }

      function unableToResolve() {
        console.log('WORKER: fetch request failed in both cache and network.')
        return new Response('<h1>Service Unavailable</h1>', {
          status: 503,
          statusText: 'Service Unavailable',
          headers: new Headers({
            'Content-Type': 'text/html',
          }),
        })
      }
    }),
  )
})
