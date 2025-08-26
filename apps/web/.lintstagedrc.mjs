const buildEslintCommand = `eslint --fix`
const buildTestCommand = 'vitest related --run'

const config = {  
  '**/*.{ts,tsx,mjs,mts}': [buildEslintCommand, buildTestCommand],
}

export default config