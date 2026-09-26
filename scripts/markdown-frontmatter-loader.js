/**
 * Webpack loader: parse a Markdown file's YAML front matter at *build* time.
 *
 * Emits `{ data, content }` as plain JSON, so the browser never ships
 * gray-matter or what it drags in (js-yaml, the esprima JavaScript parser
 * and a Buffer polyfill — roughly 200 KB of minified code whose only job
 * was to read a few lines of YAML). Dates serialise to ISO strings, which
 * the content façades already normalise.
 */
const matter = require("gray-matter");

module.exports = function markdownFrontmatterLoader(source) {
  if (this.cacheable) this.cacheable();
  const { data, content } = matter(source);
  return `module.exports = ${JSON.stringify({ data, content })};`;
};
