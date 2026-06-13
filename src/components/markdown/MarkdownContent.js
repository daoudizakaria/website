import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import "./MarkdownContent.css";

const remarkPlugins = [remarkGfm, remarkMath];
const rehypePlugins = [
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
 * Renders Markdown with GitHub-flavored Markdown (tables, strikethrough, etc.),
 * plus KaTeX for `$inline$` and `$$display$$` math via remark-math + rehype-katex.
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
