import fg from 'fast-glob'
import { fileURLToPath } from 'node:url'

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
  },
  hooks: {
    async 'nitro:config'(nitroConfig) {
      const dirs = await fg('content/blog/**/.meta/imgs/**', {
        dot: true,
        onlyDirectories: true
      })

      for (const dir of dirs) {
        nitroConfig.publicAssets?.push({
          baseURL: '/',
          dir: fileURLToPath(new URL(dir, import.meta.url)),
          maxAge: 60 * 60 * 24 * 7
        })
      }
    }
  }
})
