import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import TopButton from "../topButton/TopButton";
import MarkdownContent from "../markdown/MarkdownContent";
import { extractToc } from "../markdown/markdownToc.js";
import "./ContentDetail.css";

/*
 * Shared publication-style detail layout used by research articles and
 * project pages: sticky scroll-spied table of contents, serif justified
 * reading column, an optional action link (PDF download / repository),
 * and previous/next navigation.
 */

/** Highlight the TOC entry for the heading currently in the reading zone. */
function useActiveHeading(contentKey, headingCount) {
  const [activeId, setActiveId] = useState(null);
  useEffect(() => {
    if (headingCount === 0) return undefined;
    const headings = document.querySelectorAll(
      ".article-body h2[id], .article-body h3[id], .article-body h4[id]"
    );
    if (headings.length === 0) return undefined;
    setActiveId(headings[0].id);
    if (typeof IntersectionObserver === "undefined") return undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
          }
        }
      },
      // Fire when a heading crosses the upper third of the viewport.
      { rootMargin: "-96px 0px -66% 0px" }
    );
    headings.forEach((h) => observer.observe(h));
    return () => observer.disconnect();
  }, [contentKey, headingCount]);
  return activeId;
}

/**
 * @param {object} props
 * @param {object} props.theme
 * @param {string} props.pageTitle — browser-tab title (via Header/SeoHeader)
 * @param {string} props.title — page heading
 * @param {string} [props.subtitle] — line under the title (date etc.)
 * @param {string} [props.badge] — small label chip next to the subtitle
 * @param {string} props.markdown — body content ("" allowed)
 * @param {React.ReactNode} [props.emptyNote] — shown when markdown is empty
 * @param {Array<{href: string, label: string}>} [props.actions] — link buttons
 * @param {{prev: ?{to: string, title: string}, next: ?{to: string, title: string}, prevLabel: string, nextLabel: string, ariaLabel: string}} [props.pager]
 */
export default function ContentDetail({
  theme,
  pageTitle,
  title,
  subtitle,
  badge,
  markdown,
  emptyNote,
  actions,
  pager,
}) {
  const links = (actions || []).filter((a) => a && a.href);
  const hasBody = markdown && String(markdown).trim().length > 0;
  const toc = useMemo(() => (hasBody ? extractToc(markdown) : []), [
    hasBody,
    markdown,
  ]);
  const activeId = useActiveHeading(title, toc.length);
  const showToc = toc.length >= 2;
  const prev = pager && pager.prev;
  const next = pager && pager.next;

  return (
    <div className="article-detail-main">
      <Header theme={theme} pageTitle={pageTitle} />
      <div
        className={`article-detail-content ${
          showToc ? "article-detail-grid" : ""
        }`}
      >
        {showToc && (
          <aside className="article-toc" aria-label="Table of contents">
            <p
              className="article-toc-title"
              style={{ color: theme.secondaryText }}
            >
              Contents
            </p>
            <nav className="article-toc-nav">
              {toc.map((h) => (
                <a
                  key={h.id}
                  href={`#${h.id}`}
                  className={`article-toc-link article-toc-level-${h.level}`}
                  style={{
                    color:
                      activeId === h.id
                        ? theme.imageHighlight
                        : theme.secondaryText,
                    borderLeftColor:
                      activeId === h.id ? theme.imageHighlight : "transparent",
                  }}
                >
                  {h.text}
                </a>
              ))}
            </nav>
          </aside>
        )}
        <div className="article-main-col">
          <h1 style={{ color: theme.text }}>{title}</h1>
          {(subtitle || badge) && (
            <p className="subTitle" style={{ color: theme.secondaryText }}>
              {subtitle}
              {badge && (
                <span
                  className="content-detail-badge"
                  style={{
                    color: theme.imageHighlight,
                    borderColor: theme.headerColor,
                  }}
                >
                  {badge}
                </span>
              )}
            </p>
          )}
          <div className="article-body" style={{ color: theme.text }}>
            {hasBody ? <MarkdownContent markdown={markdown} /> : emptyNote}
          </div>
          {links.length > 0 && (
            <p className="content-detail-actions">
              {links.map((a) => (
                <a
                  key={a.href}
                  href={a.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {a.label}
                </a>
              ))}
            </p>
          )}
          {(prev || next) && (
            <nav className="article-pager" aria-label={pager.ariaLabel}>
              {prev ? (
                <Link
                  to={prev.to}
                  className="article-pager-card article-pager-prev"
                  style={{ borderColor: theme.headerColor }}
                >
                  <span
                    className="article-pager-label"
                    style={{ color: theme.secondaryText }}
                  >
                    {pager.prevLabel}
                  </span>
                  <span
                    className="article-pager-title"
                    style={{ color: theme.text }}
                  >
                    {prev.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  to={next.to}
                  className="article-pager-card article-pager-next"
                  style={{ borderColor: theme.headerColor }}
                >
                  <span
                    className="article-pager-label"
                    style={{ color: theme.secondaryText }}
                  >
                    {pager.nextLabel}
                  </span>
                  <span
                    className="article-pager-title"
                    style={{ color: theme.text }}
                  >
                    {next.title}
                  </span>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          )}
        </div>
      </div>
      <Footer theme={theme} />
      <TopButton theme={theme} />
    </div>
  );
}
