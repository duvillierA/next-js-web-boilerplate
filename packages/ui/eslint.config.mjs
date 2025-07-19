import eslintConfigReactLibrary from '@boilerplate/eslintconfig/react-library'

export default [
  ...eslintConfigReactLibrary,
  {
    files: ['src/**/*.tsx'],
    rules: {
      'react-refresh/only-export-components': 'off',
    },
  },
]
