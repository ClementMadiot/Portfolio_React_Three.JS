module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:react/jsx-runtime",
    "plugin:react-hooks/recommended",
  ],
    "dependencies": {
        "next": "12",
        "react": "17.0.2",
        "react-dom": "17.0.2"
      },
      "devDependencies": {
        "eslint": "^8.23.0",
        "eslint-config-next": "^12.2.5"
      },
  ignorePatterns: ["dist", ".eslintrc.cjs"],
  parserOptions: { ecmaVersion: "latest", sourceType: "module" },
  settings: { react: { version: "18.2" } },
  plugins: ["react-refresh"],
  rules: {
    "react/jsx-uses-react": "error",  
    "react/jsx-uses-vars": "error",
    "react/prop-types": "off",
    "react/jsx-no-target-blank": "off",
    "react-refresh/only-export-components": [
      "warn",
      { allowConstantExport: true },
    ],
    "react/no-unknown-property": ["error", { ignore: ["jsx"] }], 
    
  },
};
