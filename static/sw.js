importScripts('/_nuxt/workbox.4c4f5ca6.js')



workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/04e5696f4aeb1b63ba66.js",
    "revision": "590394a94d5c8868432d0805f86e9f43"
  },
  {
    "url": "/_nuxt/0a3ae7e4dc3edbb2e45e.js",
    "revision": "04eaba81033537c6f1a8c29e35e91b43"
  },
  {
    "url": "/_nuxt/6e3df4b0c4e28abf6b6f.js",
    "revision": "2b48dc1a441adaf4c38ee5310b86c25d"
  },
  {
    "url": "/_nuxt/72e0ba935ad30926b4d0.js",
    "revision": "e1c346efff769c3aa4b66960041666a4"
  },
  {
    "url": "/_nuxt/ad4f6614b38b3705a5c7.js",
    "revision": "72b1486bf126cc53889defc162ff90fe"
  },
  {
    "url": "/_nuxt/c41540fc21afb15b4797.js",
    "revision": "2751af577a17b327a69c5ac2d91978aa"
  },
  {
    "url": "/_nuxt/cc392ebee8e39c07fa7e.js",
    "revision": "fd3e433ddda4d5325386114b6b14730e"
  }
], {
  "cacheId": "kammaco",
  "directoryIndex": "/",
  "cleanUrls": false
})



workbox.clientsClaim()
workbox.skipWaiting()


workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')





