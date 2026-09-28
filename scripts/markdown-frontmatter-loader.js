/**
 * Webpack loader: parse a Markdown file's YAML front matter at *build* time.
 *
 * A plain import of `file.md` gives the front matter and a few numbers
 * derived from the body:
 *
 *   { data, meta: { words, readingMinutes, hasBody }, load }
 *
 * The body itself is not in that module. `load()` fetches it on demand from
 * `file.md?body` (a separate chunk that only contains the text), so the long
 * articles are downloaded when someone opens them, not with every page.
 *
 * gray-matter runs here, never in the browser (it drags in js-yaml, esprima
 * and a Buffer polyfill). Dates serialise to ISO strings, which the content
 * façades already normalise.
 */
const matter = require("gray-matter");

const WORDS_PER_MINUTE = 200;
/** The stub note counts as "no real content" so pages can adapt. */
const STUB_RE = /^\*A full case study for this project is in preparation\.\*$/;

/** Words of prose, ignoring display maths, code and image syntax. */
function countWords(markdown) {
  const text = markdown
    .replace(/\$\$[\s\S]*?\$\$/g, " ")
    .replace(/```[\s\S]*?```/g, " ")
    .replace(/!\[[^\]]*\]\([^)]*\)/g, " ");
  return text.split(/\s+/).filter(Boolean).length;
}

module.exports = function markdownFrontmatterLoader(source) {
  if (this.cacheable) this.cacheable();
  const { data, content } = matter(source);

  if (/(^|[?&])body(&|$)/.test((this.resourceQuery || "").replace(/^\?/, ""))) {
    return `module.exports = ${JSON.stringify(content)};`;
  }

  const body = content.trim();
  const words = countWords(body);
  const meta = {
    words,
    readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    hasBody: body !== "" && !STUB_RE.test(body),
  };
  const request = JSON.stringify(this.resourcePath + "?body");
  return (
    `module.exports = ${JSON.stringify({ data, meta })};\n` +
    `module.exports.load = function () {\n` +
    // No chunk name: each file's text becomes its own chunk.
    `  return import(${request}).then(function (m) {\n` +
    `    return m && m.default !== undefined ? m.default : m;\n` +
    `  });\n` +
    `};\n`
  );
};
