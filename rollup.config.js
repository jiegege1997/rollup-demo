import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";

export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.cjs.js",
    // amd cjs system es iife umd
    format: "es",
    name: "bundleName",
  },
  plugins: [resolve(), commonjs()],
  // external: ["axios"],
};
