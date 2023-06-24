import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    proxy: {
      '/api/products': 'https://my-json-server.typicode.com/z80b/pizza/products',
      '^/api/product/.*': {
        target: 'https://my-json-server.typicode.com/z80b/pizza/products',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api\/product\//, ''),
      },
    },
  },
})
