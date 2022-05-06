import xml from "..";

export default {
  input: "src/index.js",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [
    xml({
      include: "node_modules/**",
      exclude: ["node_modules/foo/**", "node_modules/bar/**"],
      preferConst: true,
      indent: "  ",
      compact: true,
      namedExports: true,
      parser: { trim: true },
    }),
  ],
};
