import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import App from './App.vue'

import router from './router'
import './registerServiceWorker'
import 'bootstrap/dist/css/bootstrap.css'
import '@/assets/style.css'
import '@/assets/flatIcon/flaticon.css'

Vue.config.productionTip = false
Vue.use(BootstrapVue)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

const LATEST_VERSION = 'v1.5'
self.addEventListener('activate', (event) => {
  console.log(`%c ${LATEST_VERSION} `, 'background: #ddd; color: #0000ff')
  if (caches) {
    caches.keys().then((arr) => {
      arr.forEach((key) => {
        if (key.indexOf('d4-precache') < -1) {
          caches.delete(key).then(() => console.log(`%c Cleared ${key}`, 'background: #333; color: #ff0000'))
        } else {
          caches.open(key).then((cache) => {
            cache.match('version').then((res) => {
              if (!res) {
                cache.put('version', new Response(LATEST_VERSION, { status: 200, statusText: LATEST_VERSION }))
              } else if (res.statusText !== LATEST_VERSION) {
                caches.delete(key).then(() => console.log(`%c Cleared Cache ${LATEST_VERSION}`, 'background: #333; color: #ff0000'))
              } else console.log(`%c Great you have the latest version ${LATEST_VERSION}`, 'background: #333; color: #00ff00')
            })
          })
        }
      })
    })
  }
})

/*
self.importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js')

console.log(`Yay!regfzrg`)

if (workbox != undefined) {
  console.log(`Yay! Workbox is loaded 🎉`)

  workbox.setConfig({
    debug: false
  })

  workbox.precaching.precacheAndRoute([]);

  workbox.routing.registerRoute(
    /\.(?:png|gif|jpg|jpeg|svg)$/,
    workbox.strategies.staleWhileRevalidate({
      cacheName: 'images',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 60,
          maxAgeSeconds: 30 * 24 * 60 * 60 // 30 jours
        })
      ]
    })
  )

  workbox.routing.registerRoute(
    new RegExp('https://some-fancy-api.com'),
    workbox.strategies.networkFirst({
      cacheName: 'api'
    })
  )

  workbox.routing.registerRoute(
    new RegExp('https://fonts.(?:googleapis|gstatic).com/(.*)'),
    workbox.strategies.cacheFirst({
      cacheName: 'googleapis',
      plugins: [
        new workbox.expiration.Plugin({
          maxEntries: 30
        })
      ]
    })
  )

} else {
  console.log(`Boo! Workbox didn't load 😬`)
} */
