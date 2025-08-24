const buildEslintCommand = `eslint --fix`
const buildTestCommand = 'vitest related --run'

module.exports = {
  '**/*.{ts,tsx}': [buildEslintCommand, buildTestCommand],
}
