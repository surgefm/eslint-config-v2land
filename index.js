const eslintConfigGoogle = require('eslint-config-google');

module.exports = {
  rules: {
    ...eslintConfigGoogle.rules,
    "switch-colon-spacing": 0,
    "valid-jsdoc": 0,
    "max-len": 0,
    "no-console": 0,
    "no-undef": 0,
    "object-curly-spacing": [
      "error",
      "always"
    ],
    "prefer-const": ["error", {
      "destructuring": "all",
      "ignoreReadBeforeAssign": true
    }],
    "indent": [
      "error",
      2
    ]
  }
}
