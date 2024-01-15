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
    'react-hooks/rules-of-hooks': 'error', // Checks rules of Hooks
    'react-hooks/exhaustive-deps': 'warn', // Checks effect dependencies
    'prettier/prettier': [
      'warn',
      {
        endOfLine: 'auto',
        jsxSingleQuote: false,
      },
    ],
    //  для тестов и stories:
    overrides: [
      {
        files: ['**/src/**/*.{test,stories}.{ts,tsx}'],
        rules: {
          // отменяем предупреждения о переводах
          'i18next/no-literal-string': 'off',
          // отменяем максимальную длину строки
          'max-len': 'off',
        },
      },
    ],
  },
};
