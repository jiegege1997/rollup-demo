import nodeResolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import json from "@rollup/plugin-json";
import serve from "rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";

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
    // 不需要刷新浏览器，热更新
    livereload(),
    serve({
      open: true,
      port: 8888,
      contentBase: "",
    }),
  ],
  // external: ["lodash"],
};
