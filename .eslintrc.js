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
  ],
};
