import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      vue: path.resolve(`./node_modules/vue`)
    }
  },
  build: {
    outDir: '../dist'
  },
  server: {
    port: 8080,
    hot: true
  },
  plugins: [vue()],
})
