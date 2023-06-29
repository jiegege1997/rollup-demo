export default {
  input: "src/main.js",
  output: {
    file: "dist/bundle.cjs.js",
    // amd cjs system es iife umd
    format: "es",
    name: "bundleName",
  },
  external: ["axios"],
};
