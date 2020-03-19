import typescript from "@rollup/plugin-typescript";
// import babel from "rollup-plugin-babel";

export default {
  input: "src/index.js",
  output: { format: "cjs", file: "dist/index.js", sourcemap: true },
  plugins: [
    typescript()
    // babel({ exclude: "node_modules/**" })
  ]
};
