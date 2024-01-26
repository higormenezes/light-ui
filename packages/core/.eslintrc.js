/** @type {import("eslint").Linter.Config} */
module.exports = {
  root: true,
  extends: [require.resolve("@light/config/eslint/react")],
  ignorePatterns: ["*.config.*"],
}
