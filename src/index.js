import { createFilter } from "@rollup/pluginutils";

export default function xml(options = {}) {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: "xml",

    transform(code, id) {
      if (id.slice(-5) !== ".xml" || !filter(id)) return null;
    },
  };
}
