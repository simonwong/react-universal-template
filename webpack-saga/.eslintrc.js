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
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'react/no-multi-comp': ['off'],
        'react/sort-comp': 'off',
        'react/prop-types': 'off',
        'react/jsx-first-prop-new-line': 'off',
        'react/jsx-filename-extension': ['warn', {
            extensions: ['.js', '.jsx', '.md']
        }],
        'react/no-danger': 'off',
        'react/require-extension': 'off',

        'import/extensions': 'off',
        'import/no-unresolved': 'off',
        'import/no-extraneous-dependencies': 'off',

        'jsx-a11y/no-static-element-interactions': 'off',
        'jsx-a11y/anchor-has-content': 'off',
        'jsx-a11y/click-events-have-key-events': 'off',
        'jsx-a11y/anchor-is-valid': 'off',

        'global-require': 'off',
        'semi': ['error', 'never'],
        'indent': ['error', 4],
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
        'max-len': 'off',
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
