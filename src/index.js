import { createFilter, dataToEsm } from "@rollup/pluginutils";
import { parseStringPromise } from "xml2js";

export default function xml(options = {}) {
  const filter = createFilter(options.include, options.exclude);

  return {
    name: "xml",

    async transform(code, id) {
      if (id.slice(-5) !== ".xml" || !filter(id)) return null;
      const indent = "indent" in options ? options.indent : "\t";

      try {
        const parsed = await parseStringPromise(code, options.parser);
        return {
          code: dataToEsm(parsed, {
            preferConst: options.preferConst,
            compact: options.compact,
            namedExports: options.namedExports,
            indent,
          }),
          map: { mappings: "" },
        };
      } catch (err) {
        const message = "Could not parse XML file";
        const position = parseInt(/[\d]/.exec(err.message)[0], 10);
        this.warn({ message, id, position });
        return null;
      }
    },
  };
}
