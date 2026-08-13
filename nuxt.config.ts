export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint', '@nuxtjs/google-fonts'],
  css: ['~/assets/css/main.css'],
  ssr: true,
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/',
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Снэпбилд — маркетинг в рамках бренда',
      meta: [
        { name: 'description', content: 'Тестовое задание: развитие продуктового лендинга Снэпбилд.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      ],
    },
  },
  nitro: { preset: 'github_pages' },
  googleFonts: {
    families: { Manrope: [400, 500, 600, 700] },
    display: 'swap',
  },
  typescript: { typeCheck: true },
})
