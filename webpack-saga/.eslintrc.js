const eslintrc = {
  parser: 'babel-eslint',
  extends: [
    'airbnb',
    'plugin:react/recommended',
  ],
  plugins: [
    'babel',
    'react',
    'jsx-a11y'
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  parserOptions: {
    ecmaVersion: 2017,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/no-multi-comp': ['off'],
    'react/sort-comp': 'off',
    'react/prop-types': 'off',
    'react/jsx-first-prop-new-line': 'off',
    'react/jsx-filename-extension': ['warn', {
      extensions: ['.js', '.jsx', '.md']
    }],
    'react/jsx-max-props-per-line': ['error', {
      maximum: 1,
      when: 'multiline'
    }], // 多个属性时，每行显示一个。多行时多个个时error。单行多个时通过
    'react/jsx-closing-bracket-location': ['error', {
      'nonEmpty': 'tag-aligned',
      'selfClosing': 'tag-aligned'
    }], // 闭合的尖括号位置，跟 tag 对齐
    'react/no-danger': 'off',
    'react/require-extension': 'off',
    'react/jsx-props-no-spreading': 'off',
    'react/state-in-constructor': 'off',

    // https://github.com/benmosher/eslint-plugin-import
    'import/extensions': 'off',
    'import/no-unresolved': 'off',
    'import/no-extraneous-dependencies': 'off',

    'jsx-a11y/no-static-element-interactions': 'off',
    'jsx-a11y/anchor-has-content': 'off',
    'jsx-a11y/click-events-have-key-events': 'off',
    'jsx-a11y/anchor-is-valid': 'off',

    'global-require': 'off',
    'semi': ['error', 'never'],
    'indent': ['error', 2],
    'linebreak-style': ['error', 'unix'],
    'no-param-reassign': ['off'],
    'camelcase': ['off'],
    'no-debugger': ['off'],
    'space-before-function-paren': ['error', 'always'],
    'func-names': 'off',
    'arrow-body-style': 'off',
    'prefer-destructuring': 'off',
    'no-param-reassign': 'off',
    'no-return-assign': 'off',
    // 'max-len': 'off',
    'consistent-return': 'off',
    'no-redeclare': 'off',
    'comma-dangle': ['error', 'always-multiline'],
    'function-paren-newline': 'off',
    'object-curly-newline': 'off',
    'no-restricted-globals': 'off',
  },
  // settings: {
  //     polyfills: ['fetch', 'promises']
  // }
}
module.exports = eslintrc
