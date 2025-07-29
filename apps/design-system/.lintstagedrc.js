const buildEslintCommand = 'eslint --fix'

module.exports = {
  '**/*.{ts,tsx}': [buildEslintCommand],
}
