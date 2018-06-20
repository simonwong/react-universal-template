const eslintrc = {
    parser: 'babel-eslint',
    extends: [
        'airbnb',
        // 'plugin:react/recommended',
    ],
    plugins: [
        'babel',
        'react',
        // 'jsx-a11y'
    ],
    env: {
        browser: true,
        node: true,
        es6: true
    },
    parserOptions: {
        ecmaFeatures: {
            experimentalObjectRestSpread: true
        }
    },
    rules: {
        'semi': [0],
        'indent': ['error', 4],
        'react/jsx-indent': ['error', 4],
        'react/jsx-indent-props': ['error', 4],
        'linebreak-style': ['error', 'windows'],
        'react/no-multi-comp': [0],
        'no-param-reassign': [0],
        'camelcase': [0],
        'no-debugger': [0],

        'func-names': 0,
        'arrow-body-style': 0,
        'react/sort-comp': 0,
        'react/prop-types': 0,
        'react/jsx-first-prop-new-line': 0,
        'react/jsx-filename-extension': [1, {
            extensions: ['.js', '.jsx', '.md']
        }],
        'import/extensions': 0,
        'import/no-unresolved': 0,
        'import/no-extraneous-dependencies': 0,
        'prefer-destructuring': 0,
        'no-param-reassign': 0,
        'no-return-assign': 0,
        'max-len': 0,
        'consistent-return': 0,
        'no-redeclare': 0,
        'react/require-extension': 0,
        'jsx-a11y/no-static-element-interactions': 0,
        'jsx-a11y/anchor-has-content': 0,
        'jsx-a11y/click-events-have-key-events': 0,
        'jsx-a11y/anchor-is-valid': 0,
        'react/no-danger': 0,
        'comma-dangle': ['error', 'always-multiline'],
        'function-paren-newline': 0,
        'object-curly-newline': 0,
        'no-restricted-globals': 0,
    },
    // settings: {
    //     polyfills: ['fetch', 'promises']
    // }
}
module.exports = eslintrc
