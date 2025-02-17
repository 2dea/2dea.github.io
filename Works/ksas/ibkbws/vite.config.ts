import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tsconfigPaths from 'vite-tsconfig-paths';
import { sassMigratorQuasar } from 'rollup-plugin-sass-migrator';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), sassMigratorQuasar()],
  server: {
    port: 3000,
  },

  css: {
    devSourcemap: true,
    preprocessorOptions: {
      scss: {
        api: 'modern',
        silenceDeprecations: ['import'],
      },
    },
  },
});
