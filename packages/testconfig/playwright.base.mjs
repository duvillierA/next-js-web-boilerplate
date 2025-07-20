import { defineConfig, devices } from '@playwright/test'

/**
 * Base Playwright configuration for the boilerplate monorepo.
 * This configuration can be extended by individual apps.
 */
export function createPlaywrightConfig({
  baseURL = 'http://localhost:3000',
  testDir = './test',
  testMatch = '*.@(spec|e2e).?(c|m)[jt]s?(x)',
  timeout = 30 * 1000,
  expectTimeout = 10 * 1000,
  webServerCommand = 'npm run start',
  webServerTimeout = 2 * 60 * 1000,
  isCI = false,
}) {
  return defineConfig({
    testDir,
    testMatch,
    timeout,
    forbidOnly: isCI,
    reporter: isCI ? 'github' : 'list',

    expect: {
      timeout: expectTimeout,
    },

    webServer: {
      command: webServerCommand,
      url: baseURL,
      timeout: webServerTimeout,
      reuseExistingServer: !isCI,
    },

    use: {
      baseURL,
      trace: isCI ? 'on' : 'retain-on-failure',
      video: isCI ? 'retain-on-failure' : undefined,
      screenshot: isCI ? 'only-on-failure' : undefined,
    },

    projects: [
      {
        name: 'chromium',
        use: { ...devices['Desktop Chrome'] },
      },
      ...(isCI
        ? [
            {
              name: 'iphone',
              use: { ...devices['iPhone 14'] },
            },
          ]
        : []),
    ],
  })
}
