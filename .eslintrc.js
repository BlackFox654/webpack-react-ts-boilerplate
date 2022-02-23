module.exports = {
  root: true,
  parserOptions: {
    project: './tsconfig.json',
  },
  extends: ['airbnb', 'airbnb-typescript', 'plugin:prettier/recommended'],
  rules: {
    'react/prop-types': 0,
    'react/function-component-definition': 0,
    'import/order': [
      1,
      {
        groups: [['builtin', 'external'], ['internal']],
        'newlines-between': 'always',
      },
    ],
  },
  settings: {
    'import/resolver': {
      node: {
        moduleDirectory: ['node_modules', __dirname],
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
};
