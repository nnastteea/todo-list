import babelParser from "@babel/eslint-parser";
import reactPlugin from "eslint-plugin-react";
import prettierPlugin from "eslint-plugin-prettier";
import importPlugin from "eslint-plugin-import";
import simpleImportSortPlugin from "eslint-plugin-simple-import-sort";

export default [
  {
    files: ["**/*.js", "**/*.jsx", "**/*.ts", "**/*.tsx"],
    languageOptions: {
      parser: babelParser,
      ecmaVersion: "latest",
      sourceType: "module",
      globals: {
        browser: true,
        es2021: true,
      },
    },
    plugins: {
      react: reactPlugin,
      prettier: prettierPlugin,
      import: importPlugin,
      "simple-import-sort": simpleImportSortPlugin,
    },
    rules: {
      "prettier/prettier": "error",
      "import/no-duplicates": "warn",
      "simple-import-sort/imports": "error",
      "linebreak-style": ["error", "unix"],
      "simple-import-sort/exports": "error",
    },
  },
];
