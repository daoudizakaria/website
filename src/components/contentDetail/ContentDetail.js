import React, { useEffect, useMemo, useRef, useState } from "react";
import { Link, useHistory, useLocation } from "react-router-dom";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import TopButton from "../topButton/TopButton";
import MarkdownContent from "../markdown/MarkdownContent";
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
 * Following a link to another page (e.g. the next chapter) starts at its top,
 * or at the section named in the URL (#…) once the text has loaded. Back and
 * forward are left to the browser, which restores the reading position.
 */
let firstPageOfVisit = true;

function usePageScroll(html) {
  const { pathname, hash } = useLocation();
  const history = useHistory();
  const actionRef = useRef(history.action);
  actionRef.current = history.action;
  // Read, not watched: a jump within the page (#…) is the browser's job.
  const hashRef = useRef(hash);
  hashRef.current = hash;
  useEffect(() => {
    if (actionRef.current !== "POP" && !hashRef.current) {
      window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }
  }, [pathname]);
  useEffect(() => {
    if (!html) return;
    // A shared link (#…) opened directly also counts as "POP".
    const direct = firstPageOfVisit;
    firstPageOfVisit = false;
    const h = hashRef.current;
    if (!h || (actionRef.current === "POP" && !direct)) return;
    const el = document.getElementById(decodeURIComponent(h.slice(1)));
    if (el) el.scrollIntoView({ behavior: "instant", block: "start" });
  }, [pathname, html]);
}

/** Contents longer than this show subsections only for the current section. */
const TOC_COLLAPSE_AT = 24;

/**
 * Thin bar at the top of the screen showing how far the reader is through
 * the text. Updated directly on scroll (once per frame), not through React.
 */
function ReadingProgress({ active }) {
  const barRef = useRef(null);
  useEffect(() => {
    if (!active) return undefined;
    let queued = false;
    const update = () => {
      queued = false;
      const body = document.querySelector(".article-body");
      const bar = barRef.current;
      if (!body || !bar) return;
      const rect = body.getBoundingClientRect();
      const total = rect.height - window.innerHeight * 0.6;
      const done = Math.min(
        1,
        Math.max(0, (window.innerHeight * 0.4 - rect.top) / Math.max(total, 1))
      );
      bar.style.transform = `scaleX(${done})`;
    };
    const onScroll = () => {
      if (!queued) {
        queued = true;
        requestAnimationFrame(update);
      }
    };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, [active]);
  if (!active) return null;
  return (
    <div className="reading-progress" aria-hidden="true">
      <div ref={barRef} className="reading-progress-bar" />
    </div>
  );
}

/**
 * @param {object} props
 * @param {object} props.theme
 * @param {string} props.pageTitle - browser-tab title (via Header/SeoHeader)
 * @param {string} props.title - page heading
 * @param {string} [props.subtitle] - line under the title (date etc.)
 * @param {string} [props.badge] - small label chip next to the subtitle
 * @param {string} props.html - pre-rendered body ("" allowed)
 * @param {Array<{level: number, text: string, id: string}>} [props.toc] - headings of the body
 * @param {React.ReactNode} [props.emptyNote] - shown when there is no body
 * @param {React.ReactNode} [props.lead] - block shown between the heading and the body
 * @param {Array<{href: string, label: string}>} [props.actions] - link buttons
 * @param {{prev: ?{to: string, title: string}, next: ?{to: string, title: string}, prevLabel: string, nextLabel: string, ariaLabel: string}} [props.pager]
 */
export default function ContentDetail({
  theme,
  pageTitle,
  title,
  subtitle,
  badge,
  html,
  toc: tocProp,
  emptyNote,
  lead,
  actions,
  pager,
}) {
  const links = (actions || []).filter((a) => a && a.href);
  const hasBody = Boolean(html && html.length > 0);
  usePageScroll(html);
  const toc = useMemo(() => (hasBody && tocProp ? tocProp : []), [
    hasBody,
    tocProp,
  ]);
  const activeId = useActiveHeading(
    `${title}\n${html ? html.length : 0}`,
    toc.length
  );
  const showToc = toc.length >= 2;
  // Long contents: always show the top-level entries, and the subsections of
  // the section being read.
  const tocGroups = useMemo(() => {
    let group = -1;
    return toc.map((h, i) => {
      if (h.level === 2) group = i;
      return group;
    });
  }, [toc]);
  const collapseToc = toc.length > TOC_COLLAPSE_AT;
  const activeIndex = toc.findIndex((h) => h.id === activeId);
  const activeGroup = activeIndex >= 0 ? tocGroups[activeIndex] : -1;
  // About 2,000 words of prose or more (equations make the HTML longer).
  const longText = hasBody && html.length > 60000;
  const prev = pager && pager.prev;
  const next = pager && pager.next;

  return (
    <div className="article-detail-main">
      <Header theme={theme} pageTitle={pageTitle} />
      <ReadingProgress active={longText} />
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
              {toc.map((h, i) =>
                collapseToc &&
                h.level !== 2 &&
                tocGroups[i] !== activeGroup ? null : (
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
                        activeId === h.id
                          ? theme.imageHighlight
                          : "transparent",
                    }}
                  >
                    {h.text}
                  </a>
                )
              )}
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
          {lead}
          <div className="article-body" style={{ color: theme.text }}>
            {hasBody ? <MarkdownContent html={html} /> : emptyNote}
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
