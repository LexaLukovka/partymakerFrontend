module.exports = {
  'extends': ['standard', 'standard-react'],
  'parser': 'babel-eslint',
  'rules': {
    'space-before-function-paren': ['error', {
      'anonymous': 'never',
      'named': 'never',
      'asyncArrow': 'always',
    }],
    'jsx-quotes': ['error', 'prefer-double'],
    'comma-dangle': 0,
    'newline-before-return': ['error'],
  },
  'settings': {},
  'env': {
    'jasmine': true,
    'jest': true,
    'browser': true,
    'node': true,
  },
}
