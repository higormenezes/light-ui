// This configuration only applies to the package manager root.
/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve("@light/config/eslint/next")],
  ignorePatterns: ["*.config.*"],
}
