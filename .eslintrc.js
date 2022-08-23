module.exports = {
  root: true,
  extends: "@react-native-community",
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint"],
  overrides: [
    {
      files: ["*.ts", "*.tsx", "*.js"],
      rules: {
        quotes: [2, "double", {avoidEscape: true, allowTemplateLiterals: true}],
        "@typescript-eslint/no-shadow": ["error"],
        "no-shadow": "off",
        "no-undef": "off",
        "react/react-in-jsx-scope": "off",
      },
    },
  ],
};
