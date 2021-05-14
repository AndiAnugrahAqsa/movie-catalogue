self.addEventListener('install', (event) => {
    console.log('Installing servis worker...')

    // TODO: Caching app shell resource
});

self.addEventListener('activate', (event) => {
    console.log('Activating servis worker ...');


    // TODO: DELETE old cache
});

self.addEventListener('fetch', event => {
    console.log(event.request);

    event.respondWith(fetch(event.request));

    // TODO: Add/get fetch request from/to caches
})