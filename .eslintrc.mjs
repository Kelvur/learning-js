export default {
    env: {
        'es2021': true,
        'node': true,
    },
    extends: 'eslint:recommended',
    parserOptions: {
        'ecmaVersion': 'latest',
        'sourceType': 'module',
    },
    rules: {
        // Posible Errors
        'no-console': [ 'error', { 'allow': [ 'log', 'info', 'warn', 'error' ] } ],
        'no-dupe-args': 'error',
        'no-dupe-else-if': 'error',
        'no-dupe-keys': 'error',
        'no-duplicate-case': 'error',
        'no-empty-character-class': 'error',
        'no-extra-boolean-cast': 'error',
        'no-extra-semi': 'error',
        'no-import-assign': 'error',
        'no-inner-declarations': 'error',
        'no-invalid-regexp': 'error',
        'no-irregular-whitespace': 'error',
        'no-obj-calls': 'error',
        'no-regex-spaces': 'error',
        'no-sparse-arrays': 'error',
        'no-unexpected-multiline': 'error',
        'no-unreachable': 'error',
        'no-unsafe-finally': 'error',
        'no-unsafe-negation': 'error',
        'use-isnan': 'error',
        'valid-typeof': 'error',
        // Best Practises
        'dot-notation': 'error',
        'eqeqeq': 'error',
        'no-constructor-return': 'error',
        'no-else-return': 'error',
        'no-eval': 'error',
        'no-fallthrough': 'error',
        'no-floating-decimal': 'error',
        'no-global-assign': 'error',
        'no-implicit-globals': 'error',
        'no-invalid-this': 'error',
        'no-lone-blocks': 'error',
        'no-multi-spaces': 'error',
        'no-param-reassign': 'error',
        'no-redeclare': 'error',
        'no-script-url': 'error',
        'no-self-assign': 'error',
        'no-self-compare': 'error',
        'no-throw-literal': 'error',
        'no-useless-call': 'error',
        'no-useless-catch': 'error',
        'no-useless-concat': 'error',
        'no-useless-escape': 'error',
        'no-useless-return': 'error',
        'require-await': 'error',
        'yoda': 'error',
        // Variables
        'no-delete-var': 'error',
        'no-shadow-restricted-names': 'error',
        'no-undef': 'error',
        'no-unused-vars': 'error',
        // Style
        'array-bracket-spacing': [ 'error', 'always', { 'singleValue': false } ],
        'block-spacing': 'error',
        'brace-style': [ 'error', '1tbs', { 'allowSingleLine': true } ],
        'comma-dangle': [ 'error', 'always-multiline' ],
        'comma-spacing': [ 'error', { 'before': false, 'after': true } ],
        'eol-last': [ 'error', 'always' ],
        'indent': [ 'error', 4 ],
        'key-spacing': 'error',
        'keyword-spacing': 'error',
        'linebreak-style': [ 'error', 'unix' ],
        'no-mixed-spaces-and-tabs': 'error',
        'no-multi-assign': 'error',
        'no-trailing-spaces': 'error',
        'no-unneeded-ternary': 'error',
        'quotes': [ 'error', 'single' ],
        'semi': 'error',
        'semi-spacing': 'error',
        'semi-style': 'error',
        'space-infix-ops': 'error',
        'spaced-comment': [ 'error', 'always', { 'exceptions': ['-+'] } ],
        'switch-colon-spacing': [ 'error', { 'after': true, 'before': false } ],
        // ES6
        'arrow-spacing': 'error',
        'no-const-assign': 'error',
        'no-dupe-class-members': 'error',
        'no-duplicate-imports': 'error',
        'no-this-before-super': 'error',
        'no-useless-computed-key': 'error',
        'no-var': 'error',
        'prefer-const': 'error',
        'require-yield': 'error',
    },
};
