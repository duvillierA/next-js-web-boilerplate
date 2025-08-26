const buildEslintCommand = 'eslint --fix'

export default {
  '*.{ts,tsx,mjs}': [buildEslintCommand],
  '**/*.{ts,tsx,mjs}': [buildEslintCommand],
}
