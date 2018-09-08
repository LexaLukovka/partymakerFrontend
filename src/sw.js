/* eslint-disable */
import ServiceWorker from './sw/ServiceWorker'

const version = 'v2::'
const serviceWorker = new ServiceWorker(self)
const CACHE = [
  '/',
  '/styles.css',
  '/app.js',
  '/index.css',
  '/images/Gec.jpg',
  '/images/summer.jpg',
  '/images/parties.jpg',
  '/favicons/android-chrome-512x512.png',
  '/favicons/apple-touch-icon.png',
  '/favicons/favicon-16x16.png',
  '/favicons/favicon-32x32.png',
  '/favicons/logo_big.png',
  '/favicons/mstile-150x150.png',
  '/favicons/safari-pinned-tab.svg',
  '/favicons/android-chrome-192x192.png',
  '/favicon.ico',
]
serviceWorker.on('install', event => {
  console.log('WORKER: install event in progress.')
  event.waitUntil(caches.open(version + 'fundamentals')
    .then(cache => cache.addAll(CACHE))
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
      if (cached) console.info('WORKER: from cache:', cached.url)

      const networked = fetch(event.request)
        .then(fetchedFromNetwork, unableToResolve)
        .catch(unableToResolve)

      return cached || networked

      function fetchedFromNetwork(response) {
        const cacheCopy = response.clone()

        console.info('WORKER: from network:', event.request.url)

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
