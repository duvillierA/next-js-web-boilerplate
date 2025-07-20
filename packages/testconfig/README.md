# @boilerplate/testconfig

Shared testing configurations for the boilerplate monorepo.

## Exports

### Vitest Configurations

- `./vitest-base` - Base Vitest configuration
- `./vitest-dom` - Vitest configuration for DOM testing
- `./vitest-node` - Vitest configuration for Node.js testing
- `./setup-dom` - DOM setup utilities

### Playwright Configuration

- `./playwright-base` - Base Playwright configuration

## Usage

### Vitest

```javascript
// vitest.config.mjs
import { defineConfig } from 'vitest/config'
import { vitestBaseConfig } from '@boilerplate/testconfig/vitest-base'

export default defineConfig({
  ...vitestBaseConfig,
  // Your app-specific overrides
})
```

### Playwright

```typescript
// playwright.config.ts
import { nextjsPlaywrightConfig } from '@boilerplate/testconfig/playwright-base'

export default nextjsPlaywrightConfig
```

For custom configurations, you can use the `createPlaywrightConfig` function:

```typescript
// playwright.config.ts
import { createPlaywrightConfig } from '@boilerplate/testconfig/playwright-base'

export default createPlaywrightConfig({
  port: 3001,
  testDir: './e2e',
  // Other custom options
})
```

## Configuration Options

### Playwright

The `createPlaywrightConfig` function accepts the following options:

- `port` - Server port (default: `process.env.PORT || 3000`)
- `testDir` - Test directory (default: `'./test'`)
- `testMatch` - Test file pattern (default: `'*.@(spec|e2e).?(c|m)[jt]s?(x)'`)
- `timeout` - Test timeout (default: `30000`)
- `expectTimeout` - Expect timeout (default: `10000`)
- `webServerCommand` - Command to start the web server
- `webServerTimeout` - Web server startup timeout (default: `120000`)
- `baseURL` - Base URL for tests (default: `http://localhost:${port}`) 