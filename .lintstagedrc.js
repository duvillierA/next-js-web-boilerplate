const buildEslintCommand = 'eslint --fix'

module.exports = {
  '*.{ts,tsx,mjs}': [buildEslintCommand],
  '**/*.{ts,tsx,mjs}': [buildEslintCommand],
}
