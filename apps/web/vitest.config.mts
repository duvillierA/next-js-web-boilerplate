import { createBaseConfig } from '@boilerplate/testconfig/vitest-base'

export default createBaseConfig({
  coverageThreshold: 70,
  coverageExclude: ['src/app/layout.tsx', 'src/app/page.tsx'],
  setupDomFile: '@boilerplate/testconfig/vitest-setup-dom',
})
