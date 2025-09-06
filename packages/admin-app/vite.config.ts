import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      'common-ui': fileURLToPath(new URL('../common-ui/src', import.meta.url))
    }
  },
  server: {
    port: 3001, // Admin app on port 3001
  },
  build: {
    outDir: '../../dist/admin-app', // Output to dist/admin-app relative to root
  },
})