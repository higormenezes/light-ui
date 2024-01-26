/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    require.resolve("./react"),
    require.resolve("@vercel/style-guide/eslint/next"),
  ],
}
