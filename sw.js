importScripts('/_nuxt/workbox.4c4f5ca6.js')

workbox.precaching.precacheAndRoute([
  {
    "url": "/_nuxt/227ccd3de2e583eceb68.js",
    "revision": "f471b0e3fcdaee56b3e15765e77fb138"
  },
  {
    "url": "/_nuxt/27d1186a8df368f511c6.js",
    "revision": "7f84badf3423e756f3bd35c703d8b117"
  },
  {
    "url": "/_nuxt/409fc6427993e9e30f88.js",
    "revision": "8872bba74889635168b6514b6d23d989"
  },
  {
    "url": "/_nuxt/5ea4a020794906be88a0.js",
    "revision": "6491f2e4e38844ce147670cacb774d88"
  },
  {
    "url": "/_nuxt/6e75de4be51764bc97c0.js",
    "revision": "619b88fe5c217752c58494cd5ad55f3e"
  },
  {
    "url": "/_nuxt/cf0b4cbcee1f30e0ef61.js",
    "revision": "931e0ec5f1f54b786df1de1447c17243"
  }
], {
  "cacheId": "test",
  "directoryIndex": "/",
  "cleanUrls": false
})

workbox.clientsClaim()
workbox.skipWaiting()

workbox.routing.registerRoute(new RegExp('/_nuxt/.*'), workbox.strategies.cacheFirst({}), 'GET')

workbox.routing.registerRoute(new RegExp('/.*'), workbox.strategies.networkFirst({}), 'GET')
