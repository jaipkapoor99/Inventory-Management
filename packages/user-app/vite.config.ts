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
    port: 3000, // User app on port 3000
  },
  build: {
    outDir: '../../dist/user-app', // Output to dist/user-app relative to root
  },
})