import { Plugin } from "rollup";
import { FilterPattern } from "@rollup/pluginutils";
import { ParserOptions } from "xml2js";

export interface RollupXMLOptions {
  /**
   * All XML files will be parsed by default,
   * but you can also specifically include files
   */
  include?: FilterPattern;
  /**
   * All XML files will be parsed by default,
   * but you can also specifically exclude files
   */
  exclude?: FilterPattern;
  /**
   * For tree-shaking, properties will be declared as variables, using
   * either `var` or `const`.
   * @default false
   */
  preferConst?: boolean;
  /**
   * Specify indentation for the generated default export
   * @default '\t'
   */
  indent?: string;
  /**
   * Ignores indent and generates the smallest code
   * @default false
   */
  compact?: boolean;
  /**
   * Generate a named export for every node of the XML tree
   * @default true
   */
  namedExports?: boolean;
  /**
   * node-xml2js parser options.
   * https://github.com/Leonidas-from-XIV/node-xml2js#options
   * @default {}
   */
  parser?: ParserOptions;
}

/**
 * Convert .xml files to ES6 modules
 */
export default function xml(options?: RollupXMLOptions): Plugin;
