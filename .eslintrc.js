const disabledRules = {
  "react/prop-types": "off",
  "react/react-in-jsx-scope": "off",
  "no-use-before-define": "off",
  "jsx-a11y/no-onchange": "off",
};

module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "next/core-web-vitals",
    "plugin:@next/next/recommended",
    "plugin:@tanstack/eslint-plugin-query/recommended",
    "./eslint/next",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: "latest",
    sourceType: "module",
  },
  settings: {
    "import/resolver": {
      node: {
        paths: ["src"],
        extensions: [".js", ".jsx", ".ts", ".tsx"],
      },
    },
  },
  overrides: [
    {
      files: ["eslint/rules/**"],
      rules: {
        "sort-keys": "error",
      },
    },
  ],
};
