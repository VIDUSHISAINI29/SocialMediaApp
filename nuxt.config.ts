// https://nuxt.com/docs/api/configuration/nuxt-config
import { defineNuxtConfig } from 'nuxt/config'
import tailwindcss from "@tailwindcss/vite";
export default defineNuxtConfig({
  compatibilityDate: '2025-02-25',
  pages: true,
  devtools: { enabled: true },
  css: ['./assets/main.css'],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  features: {
    devLogs: false
    // or 'silent' to allow you to handle yourself with `dev:ssr-logs` hook
  },
  runtimeConfig: {
    jwtAccessSecret : process.env.JWT_ACCESS_TOKEN_SECRET,
    jwtRefreshSecret : process.env.JWT_REFRESH_TOKEN_SECRET
  }
})
