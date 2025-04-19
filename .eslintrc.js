module.exports = {
  root: true,
  parser: "@typescript-eslint/parser",
  plugins: ["@typescript-eslint", "react", "react-hooks", "prettier"],
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended",
    "plugin:react/recommended",
    "plugin:react-hooks/recommended",
    "next/core-web-vitals",
    "plugin:prettier/recommended",
  ],
  rules: {
    "prettier/prettier": ["error", { "endOfLine": "auto" }],
    // Enforcing good practices for variables and unused imports
    "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "no-duplicate-imports": "error", // Ensures that you don't import the same thing twice

    // React-specific rules
    "react/react-in-jsx-scope": "off", // Next.js handles this automatically
    "react/prop-types": "off", // Since you're using TypeScript, you don't need PropTypes validation

    // Hooks-specific rules
    "react-hooks/rules-of-hooks": "error", // Enforce rules of hooks
    "react-hooks/exhaustive-deps": "warn", // Warn if dependencies are missing in hooks

    // TypeScript-specific rules
    "@typescript-eslint/no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
    "@typescript-eslint/explicit-module-boundary-types": "off", // Disable requiring return types for functions, useful with React
    "@typescript-eslint/no-explicit-any": "off",
    // No trailing commas for JSX (prettier will handle it)
    "react/jsx-tag-spacing": ["error", { beforeSelfClosing: "always" }],

    // Misc rules to improve code quality and readability
    eqeqeq: ["error", "smart"], // Enforce the use of === and !==, but allows == for certain cases (e.g., null/undefined)
    "no-console": ["warn", { allow: ["warn", "error"] }], // Allow console.warn and console.error, but warn on console.log
  },
};
