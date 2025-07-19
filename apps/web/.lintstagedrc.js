/* eslint-disable @typescript-eslint/no-require-imports */
const path = require('node:path')

const buildEslintCommand = (filenames) =>
  `next lint --fix --file ${filenames.map((f) => path.relative(process.cwd(), f)).join(' --file ')}`

const buildTestCommand = 'vitest related --run'

module.exports = {
  '**/*.{ts,tsx}': [buildEslintCommand, buildTestCommand],
}
