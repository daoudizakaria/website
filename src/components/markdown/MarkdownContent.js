import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeSanitize, { defaultSchema } from "rehype-sanitize";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import "./MarkdownContent.css";
import { slugifyHeading, childrenToText } from "./markdownToc.js";

/** Heading renderer that adds a stable anchor id (matches the TOC sidebar). */
function anchoredHeading(Tag) {
  return function AnchoredHeading({ children, ...props }) {
    const id = slugifyHeading(childrenToText(children));
    return (
      <Tag {...props} id={id || undefined}>
        {children}
      </Tag>
    );
  };
}

/**
 * Allow trusted raw HTML from CMS-authored Markdown while still blocking
 * scripts, iframes, event handlers, and other XSS vectors from defaultSchema.
 *
 * `math` / `math-inline` / `math-display` class tokens must survive sanitize so
 * rehype-katex (which runs after) can still find remark-math nodes.
 */
const cmsSanitizeSchema = {
  ...defaultSchema,
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

const remarkPlugins = [remarkGfm, remarkMath];
const rehypePlugins = [
  rehypeRaw,
  [rehypeSanitize, cmsSanitizeSchema],
  [
    rehypeKatex,
    {
      errorColor: "#cc0000",
      strict: false,
      throwOnError: false,
    },
  ],
];

function isProbablyExternalHref(href) {
  return href && /^https?:\/\//i.test(href);
}

/**
 * CRA sets PUBLIC_URL from package.json "homepage" (e.g. "/website" on GitHub Pages).
 * Markdown authored with site-root paths like /uploads/... must be remapped so assets
 * resolve under that basename locally and in production.
 */
function withPublicUrl(path) {
  if (!path || typeof path !== "string") {
    return path;
  }
  if (!path.startsWith("/uploads")) {
    return path;
  }
  const publicUrl = (process.env.PUBLIC_URL || "").replace(/\/$/, "");
  if (!publicUrl || path === publicUrl || path.startsWith(`${publicUrl}/`)) {
    return path;
  }
  return `${publicUrl}${path}`;
}

/**
 * Renders Markdown with GitHub-flavored Markdown (tables, strikethrough, etc.),
 * KaTeX for `$inline$` / `$$display$$`, and trusted raw HTML via rehype-raw +
 * rehype-sanitize.
 *
 * @param {string} markdown — raw Markdown string (e.g. from portfolio or future .md files)
 * @param {string} [className] — optional extra class on the wrapper
 */
export default function MarkdownContent({ markdown, className = "" }) {
  return (
    <div className={`markdown-content ${className}`.trim()}>
      <ReactMarkdown
        remarkPlugins={remarkPlugins}
        rehypePlugins={rehypePlugins}
        components={{
          h2: anchoredHeading("h2"),
          h3: anchoredHeading("h3"),
          h4: anchoredHeading("h4"),
          img: ({ src, alt, title, ...props }) => (
            <span className="markdown-image">
              <img
                {...props}
                src={withPublicUrl(src)}
                alt={alt || ""}
                title={title}
              />
              {title ? (
                <em className="markdown-image-caption">{title}</em>
              ) : null}
            </span>
          ),
          a: ({ children, ...props }) =>
            isProbablyExternalHref(props.href) ? (
              <a {...props} target="_blank" rel="noopener noreferrer">
                {children}
              </a>
            ) : (
              <a {...props}>{children}</a>
            ),
        }}
      >
        {markdown}
      </ReactMarkdown>
    </div>
  );
}
