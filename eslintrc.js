module.exports = {
  extends: ["airbnb"],
  plugins: ["react", "prettier"],
  parser: "babel-eslint",
  rules: {
    "comma-dangle": ["error", "always-multiline"],
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/jsx-one-expression-per-line": "off",
    "import/prefer-default-export": "off",
    "no-extra-parens": ["error", "all", { ignoreJSX: "multi-line" }],
  },
  settings: {
    "import/resolver": {
      "babel-module": {},
      node: {
        paths: ["src"],
      },
    },
  },
};
