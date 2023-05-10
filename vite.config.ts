import { InlineConfig, UserConfig, defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

interface VitestConfigExport extends UserConfig {
  test: InlineConfig;
}

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './src/tests/setup.ts',
  },

} as VitestConfigExport);


