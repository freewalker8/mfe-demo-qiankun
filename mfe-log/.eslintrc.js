module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/airbnb'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'prefer-destructuring': 'off',
    'semi': 'off',
    'comma-dangle': 'off',
    'no-undef': 'off',
    'camelcase': 'off',
    'object-curly-spacing': 'off',
    'no-trailing-spaces': 'off',
    'import/no-unresolved': 'off',
    'import/extensions': 'off',
    'no-unused-expressions': 'off',
    "import/extensions": 'off',
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
