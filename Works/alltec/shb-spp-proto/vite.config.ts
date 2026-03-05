import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from "vite-plugin-svgr";
// import { dirname } from "node:path"
// import { fileURLToPath } from "node:url"

// https://vite.dev/config/
export default defineConfig({
  // // const root = dirname(fileURLToPath(import.meta.url));
  // plugins: [react()],
  plugins: [react(), tsconfigPaths(), svgr()],
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
