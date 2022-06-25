module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  plugins: ['prettier'],
  extends: ['eslint:recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  rules: {
    'prettier/prettier': 'error',
    'no-useless-escape': 'off',
  },
  overrides: [
    {
      files: ['test/**/*.js'],
      globals: {
        describe: true,
        it: true,
      },
    },
    {
      files: ['demo/**/*.js'],
      env: {
        browser: true,
      },
    },
  ],
};
