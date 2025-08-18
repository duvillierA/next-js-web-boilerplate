import { createBaseConfig } from '@boilerplate/testconfig/vitest-base'

export default createBaseConfig({
  coverageThreshold: 80,
  coverageExclude: [],
  setupDomFile: '@boilerplate/testconfig/vitest-setup-dom',
})
