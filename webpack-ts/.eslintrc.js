const path = require('path')

const eslintrc = {
  parser: '@typescript-eslint/parser',
  extends: [
    'airbnb',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
  ],
  plugins: [
    '@typescript-eslint',
    'babel',
    'react',
    'react-hooks',
    'jsx-a11y'
  ],
  env: {
    browser: true,
    node: true,
    es6: true
  },
  // 自动发现React的版本，从而进行规范react代码
  settings: {
    'react': {
      'pragma': 'React',
      'version': 'detect'
    },
    'import/extensions': ['.js', '.jsx', '.ts', '.tsx'],
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts', '.tsx']
    },
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  parserOptions: {
    project: './tsconfig.eslint.json',
    ecmaVersion: 2019, // Allows for the parsing of modern ECMAScript features
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
      experimentalObjectRestSpread: true
    }
  },
  rules: {
    // 'prettier/prettier': 'error',

    // react-hooks
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': 'warn',

    // https://github.com/typescript-eslint/typescript-eslint/blob/master/packages/eslint-plugin/docs/rules
    '@typescript-eslint/consistent-type-definitions': 0,
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/generic-type-naming': 0,
    '@typescript-eslint/indent': 0,
    '@typescript-eslint/member-ordering': 0,
    '@typescript-eslint/no-explicit-any': 0,
    '@typescript-eslint/no-extra-parens': 0,
    '@typescript-eslint/no-magic-numbers': 0,
    '@typescript-eslint/no-parameter-properties': 0,
    '@typescript-eslint/no-type-alias': 0,
    '@typescript-eslint/no-use-before-define': 0,
    '@typescript-eslint/prefer-for-of': 1,
    '@typescript-eslint/prefer-interface': 0,
    '@typescript-eslint/interface-name-prefix': [0, { prefixWithI: 'always' }], // 接口名称首字母 I
    '@typescript-eslint/member-delimiter-style': [0, { delimiter: 'none' }], // 成员分隔符
    'default-case': 0,
    'guard-for-in': 0,

    // https://github.com/benmosher/eslint-plugin-import
    'import/no-extraneous-dependencies': [
      'error',
      { devDependencies: ['**/*.stubs.ts', '**/*.test.*'] },
    ],
    'import/first': 0,
    'import/no-unresolved': 0,
    'import/prefer-default-export': 0,
    'import/extensions': ['error', 'ignorePackages', {
      'ts': 'never',
      'tsx': 'never',
      'js': 'never',
      'jsx': 'never',
      'mjs': 'never'
    }],

    // https://github.com/yannickcr/eslint-plugin-react/tree/master/docs/rules
    'react/jsx-filename-extension': ['error', { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }],
    'react/jsx-indent': ['error', 2],
    'react/jsx-indent-props': ['error', 2],
    'react/jsx-props-no-spreading': ['off'],
    'react/prop-types': 'off',
    'react/jsx-first-prop-new-line': ['error', 'multiline'],
    'react/jsx-max-props-per-line': ['error', { 'maximum': 2, 'when': 'always' }],
    // 'react/no-multi-comp': ['off'],
    // 'react/sort-comp': 'off',
    // 'react/jsx-filename-extension': ['warn', {
    //     extensions: ['.js', '.jsx', '.md']
    // }],
    // 'react/no-danger': 'off',
    // 'react/require-extension': 'off',

    // 'import/extensions': 'off',
    // 'import/no-unresolved': 'off',
    // 'import/no-extraneous-dependencies': 'off',

    // 'jsx-a11y/no-static-element-interactions': 'off',
    // 'jsx-a11y/anchor-has-content': 'off',
    // 'jsx-a11y/click-events-have-key-events': 'off',
    // 'jsx-a11y/anchor-is-valid': 'off',

    'semi': ['error', 'never'],
    'indent': ['error', 2],
    // 'global-require': 'off',
    // 'linebreak-style': ['error', 'unix'],
    // 'no-param-reassign': ['off'],
    // 'camelcase': ['off'],
    // 'no-debugger': ['off'],
    // 'space-before-function-paren': ['error', 'always'],
    // 'func-names': 'off',
    // 'arrow-body-style': 'off',
    // 'prefer-destructuring': 'off',
    // 'no-param-reassign': 'off',
    // 'no-return-assign': 'off',
    // 'max-len': 'off',
    // 'consistent-return': 'off',
    // 'no-redeclare': 'off',
    // 'comma-dangle': ['error', 'always-multiline'],
    // 'function-paren-newline': 'off',
    // 'object-curly-newline': 'off',
    // 'no-restricted-globals': 'off',
    'no-console': 0,
    'no-continue': 0,
    'no-empty-function': 0,
    'no-restricted-syntax': 0,
    'no-param-reassign': 0,
    'no-return-await': 0,
    'no-shadow': 0,
    'no-undef': 0,
    'no-useless-constructor': 0,
  },
  'root': true,
}
module.exports = eslintrc
