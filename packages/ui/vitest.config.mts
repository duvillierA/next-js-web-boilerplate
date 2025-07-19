import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [tsconfigPaths(), react()],
  test: {
    env: loadEnv('', process.cwd(), ''),
    globals: true,
    coverage: {
      provider: 'v8',
      include: ['src/**/*'],
      exclude: [
        'src/**/*.d.ts',
        'src/**/*.stories.*',
        'src/**/*.test.*',
        'src/**/index.ts',
        'src/styles/**/*',
      ],
      thresholds: {
        global: {
          branches: 80,
          functions: 80,
          lines: 80,
          statements: 80,
        },
      },
      reporter: ['text', 'json', 'html'],
    },
    projects: [
      {
        extends: true,
        test: {
          name: 'node',
          include: ['**/*.test.ts'],
          environment: 'node',
          setupFiles: [],
        },
      },
      {
        extends: true,
        test: {
          name: 'dom',
          include: ['**/*.test.tsx', '**/*.dom.test.tsx'],
          browser: {
            enabled: true,
            headless: true,
            provider: 'playwright',
            instances: [{ browser: 'chromium' }],
            screenshotDirectory: 'test/__screenshots__',
          },
          globals: true,
          setupFiles: ['test/setup-browser.ts'],
        },
      },
    ],
    // Performance optimizations
    pool: 'forks',
    poolOptions: {
      forks: {
        singleFork: true,
      },
    },
    // Better error reporting
    reporters: ['verbose'],
    // Timeout configuration
    testTimeout: 10000,
    hookTimeout: 10000,
  },
})
