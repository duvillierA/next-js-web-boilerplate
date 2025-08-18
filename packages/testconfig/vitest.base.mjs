import react from '@vitejs/plugin-react'
import { loadEnv } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import { defineConfig } from 'vitest/config'

/**
 * Base Vitest configuration that can be extended by apps and packages
 * @param {Object} options - Configuration options
 * @param {number} options.coverageThreshold - Coverage threshold (70 or 80)
 * @param {string[]} options.coverageExclude - Additional files to exclude from coverage
 * @param {string} options.setupDomFile - Path to setup file for DOM tests
 * @returns {Object} Vitest configuration
 */
export function createBaseConfig({
  coverageThreshold = 70,
  coverageExclude = [],
  setupDomFile,
} = {}) {
  return defineConfig({
    plugins: [tsconfigPaths(), react()],
    test: {
      env: loadEnv('', process.cwd(), ''),
      globals: true,
      server: {
        deps: {
          inline: ['next-intl'],
        },
      },
      coverage: {
        provider: 'v8',
        include: ['src/**/*'],
        exclude: [
          'src/**/*.d.ts',
          'src/**/*.stories.*',
          'src/**/*.test.*',
          'src/**/index.ts',
          'src/styles/**/*',
          ...coverageExclude,
        ],
        thresholds: {
          global: {
            branches: coverageThreshold,
            functions: coverageThreshold,
            lines: coverageThreshold,
            statements: coverageThreshold,
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
            setupFiles: [setupDomFile],
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
}
