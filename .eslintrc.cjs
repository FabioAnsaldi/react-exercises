module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'standard'
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true
    },
    ecmaVersion: 12,
    sourceType: 'module'
  },
  plugins: [
    'react'
  ],
  rules: {
    "no-use-before-define": "off",
    "padded-blocks": ["error", "always", { allowSingleLineBlocks: true }],
    "padded-blocks": ["error", { "classes": "always" }],
    "no-trailing-spaces": ["error", { "skipBlankLines": true }],
    "space-before-function-paren": ["error", {"anonymous": "always", "named": "never", "asyncArrow": "always"}],
    "indent": [ 'error', "tab" ],
    "eol-last": 0,
    "no-tabs": 0
  }
}
