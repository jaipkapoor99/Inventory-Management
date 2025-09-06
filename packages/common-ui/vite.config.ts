import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'), // Entry point for the library
      name: 'CommonUI',
      fileName: (format) => `common-ui.${format}.js`,
    },
    rollupOptions: {
      // Make sure to exclude dependencies from the bundle
      external: ['vue'],
      output: {
        // Global variables to use in the UMD build for externalized deps
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})