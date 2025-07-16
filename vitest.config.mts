import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    env: loadEnv('', process.cwd(), ''),
    coverage: {
      include: ['src/**/*'],
      exclude: ['src/**/*.d.ts'],
    },
    projects: [
      {
        extends: true,
        test: {
          name: 'unit',
          include: ['**/*.test.ts'],
          environment: 'node',
        },
      },
      {
        extends: true,
        test: {
          name: 'ui',
          setupFiles: ['.test/setup-browser.ts'],
          include: ['**/*.test.tsx'],
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }],
            screenshotDirectory: './test/__screenshots__',
          },
          globals: true,
        },
      },
    ],
  },
})
