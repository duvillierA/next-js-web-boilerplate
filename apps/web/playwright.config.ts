import { config } from '@/config'
import { createPlaywrightConfig } from '@boilerplate/testconfig/playwright-base'
/**
 * Playwright configuration for the web app.
 * Extends the base configuration from @boilerplate/testconfig.
 */
export default createPlaywrightConfig({
  baseURL: `http://localhost:${config.PORT}`,
  webServerCommand: 'npm run start',
  isCI: !!config.CI,
  timeout: 10000,
})
