import { FlatCompat } from '@eslint/eslintrc'
import vitest from '@vitest/eslint-plugin'
import eslintConfigPrettier from 'eslint-config-prettier/flat'
import jsxA11y from 'eslint-plugin-jsx-a11y'
import eslintPluginPrettierRecommended from 'eslint-plugin-prettier/recommended'

const compat = new FlatCompat({
  baseDirectory: import.meta.dirname,
})

const eslintConfig = [
  ...compat.config({
    extends: ['next/core-web-vitals', 'next/typescript'],
    ignorePatterns: ['.next', '.husky', '.vscode', 'coverage'],
  }),
  eslintConfigPrettier, // disable conflicts with prettier
  eslintPluginPrettierRecommended, // enable prettier
  {
    ...jsxA11y.flatConfigs.recommended,
    files: ['**/*.tsx'],
    plugins: {
      'jsx-a11y': jsxA11y,
    },
  },
  {
    ...vitest.configs.recommended,
    files: ['**/*.test.ts', '**/*.test.tsx'],
  },
]

export default eslintConfig
