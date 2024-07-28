import globals from "globals";
import pluginJs from "@eslint/js";
import pluginUnicorn from "eslint-plugin-unicorn";
import configPrettier from "eslint-config-prettier";

export default [
  {
    languageOptions: {
      globals: {
        ...globals.node,
      },
    },
  },
  pluginJs.configs.recommended,
  pluginUnicorn.configs["flat/recommended"],
  {
    files: ["browser.js"],
    languageOptions: {
      globals: globals.browser,
    },
  },
  configPrettier,
];
