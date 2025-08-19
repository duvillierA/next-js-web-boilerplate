import eslintConfigReactLibrary from '@boilerplate/eslintconfig/react-library'

export default [
  ...eslintConfigReactLibrary,
  {
    files: ['src/**/*.{ts,tsx}', '.storybook/**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
]
