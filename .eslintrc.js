module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint-config-airbnb-base',
  ],
  rules: {
    'import/extensions': [
      'error', 'ignorePackages',
    ],
  },
};
