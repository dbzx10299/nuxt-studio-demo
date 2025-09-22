// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: false },
  modules: ['@nuxt/content'],
  routeRules: {
    '/': { prerender: true },
    '/foo': { prerender: true },
    '/blog': { prerender: true }
  },
  content: {
    preview: {
      api: 'https://api.nuxt.studio',
      gitInfo: {
        name: 'nuxt-studio-demo',
        owner: 'dbzx10299',
        url: 'https://github.com/dbzx10299/nuxt-studio-demo'
      }
    }
  },
  nitro: {
    preset: 'netlify'
  }
})
