const buildEslintCommand = 'eslint --fix'
const buildTestCommand = 'vitest related --run'

export default {
  '**/*.{ts,tsx}': [buildEslintCommand, buildTestCommand],
}
