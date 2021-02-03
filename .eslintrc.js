module.exports = {
  parser: "babel-eslint",
  parserOptions: {
    sourceType: "module"
  },
  env: {
    browser: true,
    jest: true
  },
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
  ],
  globals: {
    process: true
  },
  plugins: ["prettier"],
  settings: {
    react: {
      version: "detect"
    }
  },
  rules: {
    "lines-between-class-members": "error",

    "import/first": "error",
    "import/newline-after-import": "error",
    "import/order": "error",

    "prettier/prettier": "error",

    "react/prefer-stateless-function": "error"
  }
}
