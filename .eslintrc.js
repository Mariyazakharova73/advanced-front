module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:promise/recommended',
    'plugin:i18next/recommended',
    'plugin:storybook/recommended',
  ],
  overrides: [
    {
      env: {
        node: true,
      },
      files: ['.eslintrc.{js,cjs}'],
      parserOptions: {
        sourceType: 'script',
      },
    },
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['@typescript-eslint', 'react', 'i18next'],
  rules: {
    'no-var': 'error',
    'react/react-in-jsx-scope': 'off',
    // где использовать let, где const
    'prefer-const': 'warn',
    'no-console': ['warn', { allow: ['warn', 'info', 'error'] }],
    // 'react/jsx-props-no-spreading': 'warn',
    // отсутствие переводов только в jsx
    'i18next/no-literal-string': ['warn', { markupOnly: true, ignoreAttribute: ['to'] }],
    'max-len': ['error', { ignoreComments: true, code: 90 }],

    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        jsxSingleQuote: false,
      },
    ],
  },
};
