import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import serve from "rollup-plugin-serve";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.cjs.js",
    // iife cjs amd umd system es
    format: "es",
    name: "bundleName",
  },
  plugins: [
    nodeResolve({
      browser: true,
    }),
    commonjs(),
    json(),
    serve({
      open: true,
      port: 8888,
      contentBase: "",
    }),
  ],
  // external: ["lodash"],
};
