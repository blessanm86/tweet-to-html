module.exports = {
  env: {
    commonjs: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended'],
  parserOptions: {
    ecmaVersion: 'latest',
  },
  rules: {
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
