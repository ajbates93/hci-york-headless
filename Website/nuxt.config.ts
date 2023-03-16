import googleFonts from '@nuxtjs/google-fonts'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', '@nuxtjs/color-mode', 'nuxt-icon', '@nuxtjs/google-fonts'],
  colorMode: {
    classSuffix: ''
  },
  tailwindcss: {
    cssPath: '~/assets/css/tailwind.css',
    configPath: 'tailwind.config.js',
    exposeConfig: false,
    injectPosition: 0,
    viewer: true
  },
  googleFonts: {
    families: {
      Raleway: true
    }
  },
})
