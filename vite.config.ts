import path from 'path'
import { defineConfig } from 'vite'

export default defineConfig({
  resolve: {
    alias: {
      // utils: '/lib/utils'
    }
  },
  build: {
    lib: {
      entry: path.resolve(__dirname, 'lib/main.js'),
      name: '@useless/store',
      fileName: format => `store.${format}.js`
    },
    rollupOptions: {
      external: [],
      output: {
        globals: {}
      }
    }
  }
})
