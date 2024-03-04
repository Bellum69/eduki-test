module.exports = {
  extends: ['@react-native-community'],
  parser: '@typescript-eslint/parser',
  plugins: ['@typescript-eslint', 'simple-import-sort', 'prettier'],
  rules: {
    quotes: ['error', 'single', { avoidEscape: true }],
    'max-len': ['error', { code: 120, ignoreUrls: true, ignoreStrings: true }],
    'no-unused-vars': 0,
    'prettier/prettier': 2,
    'react-native/no-inline-styles': 1,
    'react-hooks/exhaustive-deps': 0,
    'react/no-unstable-nested-components': 'off',
    '@typescript-eslint/no-shadow': [0, { ignoreTypeValueShadow: true }],
    'simple-import-sort/exports': 'error',
    'simple-import-sort/imports': 'error',
    'react/react-in-jsx-scope': 'off',
  },
};
