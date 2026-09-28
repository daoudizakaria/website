import React from "react";
import "katex/dist/katex.min.css";
import "./MarkdownContent.css";

/**
 * Shows an article or project body that was rendered to HTML at build time
 * by scripts/markdown-frontmatter-loader.js (GitHub-flavored Markdown, KaTeX
 * maths, sanitized raw HTML, heading anchors, image captions). The browser
 * does no Markdown parsing or maths typesetting.
 *
 * The HTML is trusted: it comes from this repository's Markdown files and was
 * sanitized (rehype-sanitize) when it was built.
 *
 * @param {string} html — pre-rendered body
 * @param {string} [className] — optional extra class on the wrapper
 */
function MarkdownContent({ html, className = "" }) {
  return (
    <div
      className={`markdown-content ${className}`.trim()}
      dangerouslySetInnerHTML={{ __html: html || "" }}
    />
  );
}

// Re-render only when the text changes, not when the page around it updates
// (e.g. the TOC's active heading while scrolling).
export default React.memo(MarkdownContent);
