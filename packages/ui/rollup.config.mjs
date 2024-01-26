import { defineConfig } from "rollup"
import dts from "rollup-plugin-dts"
import resolve from "@rollup/plugin-node-resolve"
import postcss from "rollup-plugin-postcss"
import swc from "@rollup/plugin-swc"

const input = "src/index.ts"
const external = ["react", "react-dom", "react/jsx-runtime", "@light/core"]
const globals = {
  react: "React",
  "react-dom": "ReactDOM",
  "react/jsx-runtime": "jsxRuntime",
  "@light/core": "core",
}

export default defineConfig([
  {
    input,
    output: [
      {
        file: "dist/cjs/index.cjs",
        format: "cjs",
        globals,
        sourcemap: true,
      },
      {
        file: "dist/mjs/index.mjs",
        format: "es",
        globals,
        sourcemap: true,
      },
      {
        name: "@light/ui",
        file: "dist/umd/index.js",
        format: "umd",
        globals,
        sourcemap: true,
      },
    ],
    external,
    plugins: [
      resolve({ extensions: [".ts", ".tsx", ".js"] }),
      postcss({
        modules: {
          generateScopedName: "light-ui_[name]_[local]_[hash:base64:5]",
        },
      }),
      swc({
        swc: {
          // minify: true,
          jsc: {
            parser: {
              syntax: "typescript",
              tsx: true,
            },
            transform: {
              react: {
                runtime: "automatic",
              },
            },
            // minify: {
            //   compress: {
            //     unused: true,
            //   },
            //   mangle: true,
            // },
          },
        },
      }),
    ],
  },

  {
    input,
    output: [
      { format: "cjs", file: "dist/cjs/types.d.cts" },
      { format: "es", file: "dist/mjs/types.d.mts" },
    ],
    external,
    plugins: [dts()],
  },
])
