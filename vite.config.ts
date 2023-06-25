import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => ({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: [
      { find: '~', replacement: resolve(__dirname, './src/') },
    ],
  },
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
}));
