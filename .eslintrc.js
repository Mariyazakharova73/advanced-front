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
  plugins: ['@typescript-eslint', 'react'],
  rules: {
    'no-var': 'error',
    'react/react-in-jsx-scope': 'off',
    // где использовать let, где const
    'prefer-const': 'warn',
    'no-console': ['error', { allow: ['warn', 'info', 'error'] }],
    'react/jsx-props-no-spreading': 'warn',

    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        jsxSingleQuote: false,
      },
    ],
  },
};
