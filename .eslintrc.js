module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  extends: 'kensho',
  globals: {
    Atomics: 'readonly',
    SharedArrayBuffer: 'readonly',
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: [
    'react',
  ],
  rules: {
    "jsx-a11y/anchor-is-valid": "off",
    "react/react-in-jsx-scope": "off",
    "react/destructuring-assignment": "off"
  },
};
