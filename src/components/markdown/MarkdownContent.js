import React, { useCallback } from "react";
import { useHistory } from "react-router-dom";
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
  const history = useHistory();
  // Links to other pages of the site (e.g. "Section 4.5" in another
  // chapter) navigate inside the app instead of reloading it.
  const onClick = useCallback(
    (e) => {
      const a = e.target.closest && e.target.closest("a[href^='/']");
      if (
        !a ||
        // files (PDFs, images under /uploads) are not app pages
        /\.[a-z0-9]+(?:[?#]|$)/i.test(a.getAttribute("href")) ||
        !history ||
        a.target ||
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }
      e.preventDefault();
      history.push(a.getAttribute("href"));
    },
    [history]
  );
  return (
    <div
      className={`markdown-content ${className}`.trim()}
      onClick={onClick}
      dangerouslySetInnerHTML={{ __html: html || "" }}
    />
  );
}

// Re-render only when the text changes, not when the page around it updates
// (e.g. the TOC's active heading while scrolling).
export default React.memo(MarkdownContent);
