import eslintConfigNext from '@boilerplate/eslintconfig/nextjs'

const config = [
  ...eslintConfigNext,
  {
    ignores: ['next-env.d.ts'],
  },
]

export default config
