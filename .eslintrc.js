module.exports = {
    env: {
        browser: true,
        es2021: true
    },
    extends: [
        "airbnb",
        "eslint:recommended",
        "plugin:prettier/recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended",
        "next/core-web-vitals"
    ],
    overrides: [],
    parser: "@typescript-eslint/parser",
    parserOptions: {
        ecmaVersion: "latest",
        sourceType: "module"
    },
    plugins: ["react", "spellcheck", "@typescript-eslint"],
    rules: {
        "linebreak-style": ["error", "unix"],
        quotes: ["error", "double"],
        semi: ["error", "always"],
        "react/jsx-filename-extension": ["off"],
        "import/extensions": ["off"],
        "import/no-extraneous-dependencies": ["off"],
        "global-require": ["off"],
        "lines-between-class-members": ["off"],
        "no-param-reassign": ["off"]
    }
};
