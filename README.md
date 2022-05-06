# rollup-plugin-xml

🍣 A Rollup plugin which Converts .xml files to ES6 modules.

## Install

Using npm:

```console
npm install git+https://github.com/wmadfaa/rollup-plugin-xml.git#v1.0.0 --save-dev
# or
yarn add -D git+https://github.com/wmadfaa/rollup-plugin-xml.git#v1.0.0
```

## Usage

Create a `rollup.config.js` [configuration file](https://www.rollupjs.org/guide/en/#configuration-files) and import the plugin:

```js
import xml from "rollup-plugin-xml";

export default {
  input: "src/index.js",
  output: {
    dir: "output",
    format: "cjs",
  },
  plugins: [xml()],
};
```

Then call `rollup` either via the [CLI](https://www.rollupjs.org/guide/en/#command-line-reference) or the [API](https://www.rollupjs.org/guide/en/#javascript-api).

With an accompanying file `src/index.js`, the local `package.json` file would now be importable as seen below:

```js
// src/index.js
import data from "./demo.xml";
console.log(`running version ${data.version}`);
```

## Options

### `compact`

Type: `Boolean`<br>
Default: `false`

If `true`, instructs the plugin to ignore `indent` and generates the smallest code.

### `exclude`

Type: `String` | `Array[...String]`<br>
Default: `null`

A [minimatch pattern](https://github.com/isaacs/minimatch), or array of patterns, which specifies the files in the build the plugin should _ignore_. By default no files are ignored.

### `include`

Type: `String` | `Array[...String]`<br>
Default: `null`

A [minimatch pattern](https://github.com/isaacs/minimatch), or array of patterns, which specifies the files in the build the plugin should operate on. By default all files are targeted.

### `indent`

Type: `String`<br>
Default: `'\t'`

Specifies the indentation for the generated default export.

### `namedExports`

Type: `Boolean`<br>
Default: `true`

If `true`, instructs the plugin to generate a named export for every node of the XML tree.

### `preferConst`

Type: `Boolean`<br>
Default: `false`

If `true`, instructs the plugin to declare properties as variables, using either `var` or `const`. This pertains to tree-shaking.

### `parser`

Type: `ParserOptions`<br>
Default: `{}`

[node-xml2js](https://github.com/Leonidas-from-XIV/node-xml2js#options) parser options.

## Meta

[LICENSE (MIT)](/LICENSE)
