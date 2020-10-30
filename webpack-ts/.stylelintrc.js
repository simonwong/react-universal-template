module.exports = {
  extends: [require.resolve('@yueqing/lint/lib/stylelint')],
  rules: {
    'at-rule-no-unknown': [true, {
      'ignoreAtRules': ['function', 'if', 'each', 'include', 'extend', 'mixin']
    }]
  },
};
