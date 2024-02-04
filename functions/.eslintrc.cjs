module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: 'airbnb-base',
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
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['import'],
  rules: {
    'import/order': ['error', { 'newlines-between': 'always' }],
    'import/extensions': ['error', 'always', { ignorePackages: true }],
    'linebreak-style': 'off',
    'prettier/prettier': 'off',
    'object-curly-newline': 'off',
    'max-len': 'off',
    'consistent-return': 'off',
    'simple-import-sort/imports': 'off',
    'comma-dangle': 'off',
  },
};
