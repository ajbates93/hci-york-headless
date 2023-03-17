// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/strapi',
    '@nuxtjs/tailwindcss', 
    '@nuxtjs/color-mode', 
    'nuxt-icon', 
    '@nuxtjs/google-fonts',
    '@vueuse/nuxt'
  ],
  strapi: {
    url: process.env.API_BASE,
  },
  runtimeConfig: {
    public: {
      apiBase: process.env.API_BASE
      // apiBase: "http://localhost:1337/api"
    }
  },
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
