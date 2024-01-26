/** @type {import("eslint").Linter.Config} */
module.exports = {
  extends: [
    require.resolve("./base"),
    require.resolve("@vercel/style-guide/eslint/react"),
  ],
}
