// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-02-18',
  devtools: { enabled: true },
  css: ['./assets/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
})
