/**
 * Webpack loader: parse a Markdown file at *build* time.
 *
 * A plain import of `file.md` gives the front matter and a few numbers
 * derived from the body:
 *
 *   { data, meta: { words, readingMinutes, hasBody }, load }
 *
 * The body itself is not in that module. `load()` fetches `file.md?body`, a
 * separate chunk, only when a page opens it. That chunk holds the body
 * already rendered to HTML ({ html, toc }): Markdown parsing and KaTeX
 * typesetting happen once, at build time.
 *
 * gray-matter runs only here (it pulls in js-yaml and a Buffer polyfill).
 * Dates serialise to ISO strings.
 */
const fs = require("fs");
const path = require("path");
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

// ---- heading ids and table of contents (the page reads both) --------------
function slugifyHeading(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

function childrenToText(node) {
  if (node == null) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(childrenToText).join("");
  if (typeof node === "object" && node.props && node.props.children) {
    return childrenToText(node.props.children);
  }
  return "";
}

function extractToc(markdown) {
  const toc = [];
  let inFence = false;
  for (const line of String(markdown).split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = line.match(/^\s{0,3}(#{2,4})\s+(.+?)\s*#*\s*$/);
    if (!m) continue;
    const text = m[2]
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .trim();
    if (!text) continue;
    toc.push({ level: m[1].length, text, id: slugifyHeading(text) });
  }
  return toc;
}

function withPublicUrl(path) {
  if (!path || typeof path !== "string" || !path.startsWith("/uploads"))
    return path;
  const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
  if (!publicUrl || path === publicUrl || path.startsWith(`${publicUrl}/`))
    return path;
  return `${publicUrl}${path}`;
}

/**
 * Pixel size of a PNG or WebP under public/, read from its header, so the
 * page can reserve the figure's space before it loads (no text jumping down
 * as figures arrive, and links to a section land on it). null if unknown.
 */
function imageSize(src) {
  if (!src || !/^\/uploads\/.+\.(png|webp)$/i.test(src)) return null;
  let b;
  try {
    b = fs.readFileSync(path.join(__dirname, "..", "public", src));
  } catch (e) {
    return null;
  }
  if (b.length > 24 && b.toString("ascii", 1, 4) === "PNG") {
    return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
  }
  if (b.length > 30 && b.toString("ascii", 0, 4) === "RIFF") {
    const kind = b.toString("ascii", 12, 16);
    if (kind === "VP8 ") {
      return {
        width: b.readUInt16LE(26) & 0x3fff,
        height: b.readUInt16LE(28) & 0x3fff,
      };
    }
    if (kind === "VP8L") {
      const bits = b.readUInt32LE(21);
      return {
        width: (bits & 0x3fff) + 1,
        height: ((bits >> 14) & 0x3fff) + 1,
      };
    }
    if (kind === "VP8X") {
      return {
        width: b.readUIntLE(24, 3) + 1,
        height: b.readUIntLE(27, 3) + 1,
      };
    }
  }
  return null;
}

let rendererPromise = null;

/** Build the renderer once (the unified ecosystem is ESM-only). */
function getRenderer() {
  if (!rendererPromise) {
    rendererPromise = (async () => {
      const React = require("react");
      const { renderToStaticMarkup } = require("react-dom/server");
      const [
        { default: ReactMarkdown },
        { default: remarkGfm },
        { default: remarkMath },
        { default: rehypeRaw },
        sanitize,
        { default: rehypeKatex },
      ] = await Promise.all([
        import("react-markdown"),
        import("remark-gfm"),
        import("remark-math"),
        import("rehype-raw"),
        import("rehype-sanitize"),
        import("rehype-katex"),
      ]);
      const { default: rehypeSanitize, defaultSchema } = sanitize;
      const schema = {
        ...defaultSchema,
        // remark-rehype already prefixes footnote ids and their links with
        // "user-content-"; a second prefix here would break the links.
        clobberPrefix: "",
        attributes: {
          ...defaultSchema.attributes,
          div: [
            ...(defaultSchema.attributes.div || []),
            ["className", "math", "math-display"],
          ],
          span: [
            ...(defaultSchema.attributes.span || []),
            ["className", "math", "math-inline", "math-display"],
          ],
          code: [...(defaultSchema.attributes.code || []), "className"],
        },
      };
      const h = React.createElement;
      const heading = (Tag) =>
        function AnchoredHeading({ children, node, level, ...props }) {
          const id = slugifyHeading(childrenToText(children));
          return h(Tag, { ...props, id: id || undefined }, children);
        };
      const components = {
        h2: heading("h2"),
        h3: heading("h3"),
        h4: heading("h4"),
        img: ({ src, alt, title, node, ...props }) =>
          h(
            "span",
            { className: "markdown-image" },
            h("img", {
              loading: "lazy",
              decoding: "async",
              ...imageSize(src),
              ...props,
              src: withPublicUrl(src),
              alt: alt || "",
              title,
            }),
            title
              ? h("em", { className: "markdown-image-caption" }, title)
              : null
          ),
        a: ({ children, node, ...props }) =>
          /^https?:\/\//i.test(props.href || "")
            ? h(
                "a",
                { ...props, target: "_blank", rel: "noopener noreferrer" },
                children
              )
            : h("a", props, children),
      };
      const options = {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [
          rehypeRaw,
          [rehypeSanitize, schema],
          [
            rehypeKatex,
            { errorColor: "#cc0000", strict: false, throwOnError: false },
          ],
        ],
        components,
      };
      return (markdown) =>
        renderToStaticMarkup(h(ReactMarkdown, options, markdown));
    })();
  }
  return rendererPromise;
}

module.exports = function markdownFrontmatterLoader(source) {
  if (this.cacheable) this.cacheable();
  const { data, content } = matter(source);

  if (/(^|[?&])body(&|$)/.test((this.resourceQuery || "").replace(/^\?/, ""))) {
    const callback = this.async();
    getRenderer()
      .then((render) => {
        const html = render(content);
        callback(
          null,
          `module.exports = ${JSON.stringify({
            html,
            toc: extractToc(content),
          })};`
        );
      })
      .catch(callback);
    return undefined;
  }

  const body = content.trim();
  const words = countWords(body);
  const meta = {
    words,
    readingMinutes: Math.max(1, Math.round(words / WORDS_PER_MINUTE)),
    hasBody: body !== "" && !STUB_RE.test(body),
  };
  const request = JSON.stringify(this.resourcePath + "?body");
  const emit = () =>
    `module.exports = ${JSON.stringify({ data, meta })};\n` +
    `module.exports.load = function () {\n` +
    // No chunk name: each file's text becomes its own chunk.
    `  return import(${request}).then(function (m) {\n` +
    `    return m && m.default !== undefined ? m.default : m;\n` +
    `  });\n` +
    `};\n`;

  // Key results of a research overview are Markdown with inline maths:
  // render them here too, so the page needs no Markdown code at all.
  const results =
    data.overview && Array.isArray(data.overview.results)
      ? data.overview.results
      : [];
  if (results.length === 0) return emit();
  const callback = this.async();
  getRenderer()
    .then((render) => {
      meta.overviewResultsHtml = render(
        results.map((r) => `- ${r}`).join("\n")
      );
      callback(null, emit());
    })
    .catch(callback);
  return undefined;
};
