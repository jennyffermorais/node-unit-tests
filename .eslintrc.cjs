 {
    env: {
        browser: true,
        es2021: true,
    },
    "extends": [
        "eslint:recommended"
    ],
    parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
    },
    rules: {
        'import/extensions': 0,
        'prefer-destructuring': 0,
        'no-underscore-dangle': 0,
        "indent": [
            "error",
            4
        ],
        "linebreak-style": [
            "error",
            "unix"
        ]
    },
    overrides: [
        {
            files: [
                '*.test.js',
            ],
            env: {
                jest: true,
            },
        },
    ],
};
