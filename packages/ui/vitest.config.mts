import { createBaseConfig } from '@boilerplate/testconfig/vitest-base'

export default createBaseConfig({
  coverageThreshold: 80,
  coverageExclude: ['src/styles/**/*'],
  setupDomFile: '@boilerplate/testconfig/setup-dom',
})
