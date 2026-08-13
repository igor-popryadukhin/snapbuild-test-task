const baseURL = process.env.NUXT_APP_BASE_URL || '/'

export default defineNuxtConfig({
  compatibilityDate: '2025-07-15',
  devtools: { enabled: true },
  modules: ['@nuxt/eslint'],
  css: ['~/assets/scss/main.scss'],
  ssr: true,
  app: {
    baseURL,
    head: {
      htmlAttrs: { lang: 'ru' },
      title: 'Снэпбилд — это платформа для создания маркетинговых материалов на основе дизайн-системы',
      meta: [
        { name: 'description', content: 'Подключите дизайн-систему к Снэпбилду, чтобы каждый участник команды мог создавать профессиональные материалы в фирменном стиле за минуты, а не дни.' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'theme-color', content: '#f2f2f4' },
      ],
      link: [
        { rel: 'icon', href: `${baseURL}assets/images/favicon.png` },
      ],
    },
  },
  nitro: { preset: 'github_pages' },
  typescript: { typeCheck: true },
})
