const buildEslintCommand = 'eslint --fix'

export default {
  '**/*.{ts,tsx}': [buildEslintCommand],
}
