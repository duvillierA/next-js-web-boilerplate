import eslintConfigReactLibrary from '@boilerplate/eslintconfig/react-library'

export default [
  ...eslintConfigReactLibrary,
  {
    files: ['src/**/*.{ts,tsx}'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
]
