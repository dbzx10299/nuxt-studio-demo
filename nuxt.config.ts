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
      api: 'https://nuxt-studio-demo.netlify.app/'
    }
  }
})
