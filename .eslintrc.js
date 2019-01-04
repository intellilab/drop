module.exports = {
  root: true,
  extends: [
    require.resolve('webpack-util/eslint'),
    require.resolve('./scripts/eslint/jsx'),
  ],
  parserOptions: {
    ecmaFeatures: {
      legacyDecorators: true,
    },
  },
  rules: {
    'react/button-has-type': 'off',
  },
};
