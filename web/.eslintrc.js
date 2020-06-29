module.exports = {
  env: {
    browser: true,
    es2020: true,
  },
  extends: ["plugin:react/recommended", "airbnb", "prettier", "prettier/react"],
  parser: "babel-eslint",
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 11,
    sourceType: "module",
  },
  plugins: [
    'react',
    'prettier',
    'eslint-plugin-import-helpers',
    'react-hooks',
    'import',
  ],
  rules: {
    "react/jsx-props-no-spreading": 'off',
    'prettier/prettier': 'error',
    'react/jsx-filename-extension': [
      'warn',
      { extensions: ['.jsx', '.js'] }
    ],
    'import/prefer-default-export': 'off',
    'import-helpers/order-imports': [
      'warn',
      {
        newlinesBetween: 'always',
        groups: [
          'module',
          '/^@shared/',
          ['parent', 'sibling', 'index', '/^~/'],
        ],
        alphabetize: { order: 'asc', ignoreCase: true },
      },
    ],
    "react/state-in-constructor": ['off', 'always'],
    "react/static-property-placement": 'off',
    "no-param-reassign": 'off',
    "no-console": ["error", { allow: ["tron"] }],
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',
  },
};
