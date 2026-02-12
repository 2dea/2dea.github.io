import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3030,
  },

  // build: {
  //   lib: {
  //     entry: '/src/assets/style/public.scss',
  //     formats: ['es'],
  //     fileName: 'my-styles',
  //     cssFileName: 'style' // dist/style.css로 출력
  //   }
  // },

  // publicDir: 'public',
  // build: {
  //   outDir: 'dist',
  //   assetsDir: 'assets',
  // },
})
