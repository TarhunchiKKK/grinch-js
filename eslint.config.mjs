import eslint from "@eslint/js";
import globals from "globals";
import tseslint from "typescript-eslint";

export default tseslint.config(
    {
        files: ["src/**/*.ts", "tests/**/*.ts"],
        ignores: ["node_modules", "dist"],
        languageOptions: {
            parserOptions: {
                projectService: true,
                tsconfigRootDir: import.meta.dirname
            },
            globals: globals.node
        },
        rules: {
            "@typescript-eslint/no-explicit-any": "error",
            "@typescript-eslint/no-floating-promises": "warn",
            "@typescript-eslint/no-unsafe-argument": "error",
            "@typescript-eslint/no-unsafe-return": "error",
            "@typescript-eslint/no-unused-vars": "error"
        }
    },
    tseslint.configs.recommended,
    eslint.configs.recommended,
    tseslint.configs.recommendedTypeChecked
);
