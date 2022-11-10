module.exports = {
    extends: [
        "next/core-web-vitals",
        "eslint:recommended",
        "plugin:import/recommended",
        "plugin:import/typescript",
        "plugin:@typescript-eslint/recommended",
        "plugin:storybook/recommended",
        "plugin:prettier/recommended",
    ],
    parser: "@typescript-eslint/parser",
    rules: {
        "prettier/prettier": "warn",
        "no-debugger": "error",
        "@typescript-eslint/ban-ts-comment": 2,
        "@typescript-eslint/no-non-null-assertion": 1,
        "no-console": [
            "warn",
            {
                allow: ["warn", "error"],
            },
        ],
        "import/order": [
            "warn",
            {
                groups: ["builtin", "external", ["parent", "sibling"], "index"],
                "newlines-between": "always",
                alphabetize: {
                    order: "asc",
                    caseInsensitive: true,
                },
            },
        ],
    },
};
