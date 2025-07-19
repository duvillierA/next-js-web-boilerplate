import { FlatCompat } from '@eslint/eslintrc'
import baseConfig from './base.mjs'

const compat = new FlatCompat({})

const eslintNextjsConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    ignorePatterns: ['.next', '.husky', '.vscode', 'coverage'],
  }),
  ...baseConfig,
]

export default eslintNextjsConfig
