import React, { useEffect, useMemo, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import MarkdownContent from "../../components/markdown/MarkdownContent";
import {
  getResearchArticleBySlug,
  getResearchArticleList,
} from "../../content/research/researchContent.js";
import { researchArticleUrl } from "../../content/research/researchRoutes.js";
import { extractToc } from "../../components/markdown/markdownToc.js";
import "./ArticleDetail.css";

/*
 * ArticleDetail page
 *
 * Renders one research article for `/research/:slug` with a sticky
 * table-of-contents sidebar (built from the markdown headings, scroll-spied
 * via IntersectionObserver) and previous/next article navigation.
 */

/** Highlight the TOC entry for the heading currently in the reading zone. */
function useActiveHeading(slug, headingCount) {
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
  }, [slug, headingCount]);
  return activeId;
}

function ArticleDetail(props) {
  const { slug } = useParams();
  const theme = props.theme;
  const article = getResearchArticleBySlug(slug);
  const hasMarkdownBody =
    article && article.content && String(article.content).trim().length > 0;

  const toc = useMemo(
    () => (hasMarkdownBody ? extractToc(article.content) : []),
    [hasMarkdownBody, article]
  );
  const activeId = useActiveHeading(slug, toc.length);

  const { prev, next } = useMemo(() => {
    if (!article) return { prev: null, next: null };
    const list = getResearchArticleList();
    const idx = list.findIndex((a) => a.id === article.id);
    // List is newest-first: "previous" reads as the newer piece.
    return {
      prev: idx > 0 ? list[idx - 1] : null,
      next: idx >= 0 && idx < list.length - 1 ? list[idx + 1] : null,
    };
  }, [article]);

  if (!article) {
    return (
      <div className="article-detail-main">
        <Header theme={theme} pageTitle="Article not found" />
        <div className="article-detail-content">
          <h1 style={{ color: theme.text }}>Article not found</h1>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }

  const showToc = toc.length >= 2;

  return (
    <div className="article-detail-main">
      <Header theme={theme} pageTitle={article.name} />
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
          <h1 style={{ color: theme.text }}>{article.name}</h1>
          <p className="subTitle" style={{ color: theme.secondaryText }}>
            Published on {article.createdAt.split("T")[0]}
          </p>
          <div className="article-body" style={{ color: theme.text }}>
            {/* Markdown + KaTeX: **bold**, tables, $inline$, $$display$$ — see MarkdownContent */}
            {hasMarkdownBody ? (
              <MarkdownContent markdown={article.content} />
            ) : (
              <p>
                This article does not have any content yet. Add a Markdown file
                under <code>src/content/research/articles/</code>.
              </p>
            )}
          </div>
          {article.resume && article.resume.trim() !== "" && (
            <p>
              <a
                href={
                  article.resume.startsWith("/")
                    ? `${process.env.PUBLIC_URL || ""}${article.resume}`
                    : article.resume
                }
                target="_blank"
                rel="noopener noreferrer"
                style={{ color: theme.imageHighlight }}
              >
                {article.resume.toLowerCase().endsWith(".pdf")
                  ? "📄 Download the paper (PDF)"
                  : "View Resume"}
              </a>
            </p>
          )}
          {(prev || next) && (
            <nav className="article-pager" aria-label="More research articles">
              {prev ? (
                <Link
                  to={researchArticleUrl(prev.id)}
                  className="article-pager-card article-pager-prev"
                  style={{ borderColor: theme.headerColor }}
                >
                  <span
                    className="article-pager-label"
                    style={{ color: theme.secondaryText }}
                  >
                    ← Newer
                  </span>
                  <span
                    className="article-pager-title"
                    style={{ color: theme.text }}
                  >
                    {prev.name}
                  </span>
                </Link>
              ) : (
                <span />
              )}
              {next ? (
                <Link
                  to={researchArticleUrl(next.id)}
                  className="article-pager-card article-pager-next"
                  style={{ borderColor: theme.headerColor }}
                >
                  <span
                    className="article-pager-label"
                    style={{ color: theme.secondaryText }}
                  >
                    Older →
                  </span>
                  <span
                    className="article-pager-title"
                    style={{ color: theme.text }}
                  >
                    {next.name}
                  </span>
                </Link>
              ) : (
                <span />
              )}
            </nav>
          )}
        </div>
      </div>
      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}

export default ArticleDetail;
