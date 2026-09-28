import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import ContentDetail from "../../components/contentDetail/ContentDetail";
import useMarkdownBody from "../../components/markdown/useMarkdownBody";
import {
  Overview,
  SeriesBreadcrumb,
  SeriesGuide,
} from "../../components/researchOverview/ResearchOverview";
import {
  getResearchArticleBySlug,
  getResearchArticleList,
  getSeriesPart,
  getSeriesParts,
} from "../../content/research/researchContent.js";
import {
  researchArticleUrl,
  researchPartUrl,
} from "../../content/research/researchRoutes.js";

/** "Chapter 3: Quantization…", but just "Bibliography" or "Introduction". */
function partLabel(p) {
  return /^(Chapter|Appendix)\b/.test(p.kicker)
    ? `${p.kicker}: ${p.name}`
    : p.name;
}

function pdfAction(resume) {
  const r = (resume || "").trim();
  if (!r) return null;
  return {
    href: r.startsWith("/") ? `${process.env.PUBLIC_URL || ""}${r}` : r,
    label: r.toLowerCase().endsWith(".pdf")
      ? "📄 Download the paper (PDF)"
      : "View Resume",
  };
}

/**
 * Research article page.
 *   /research/:slug        an article, or the overview page of a long work
 *   /research/:slug/:part  one page (chapter) of a long work
 */
function ArticleDetail(props) {
  const { slug, part } = useParams();
  const theme = props.theme;
  const parent = getResearchArticleBySlug(slug);
  const parts = useMemo(() => getSeriesParts(slug), [slug]);
  const article = part ? getSeriesPart(slug, part) : parent;
  const { html, toc, loading } = useMarkdownBody(article);

  const pager = useMemo(() => {
    if (!article) return null;
    if (part) {
      const idx = parts.findIndex((p) => p.id === article.id);
      const toPart = (p) =>
        p
          ? {
              to: researchPartUrl(slug, p.part),
              title: partLabel(p),
            }
          : null;
      return {
        prev:
          idx > 0
            ? toPart(parts[idx - 1])
            : { to: researchArticleUrl(slug), title: "Overview" },
        next: idx < parts.length - 1 ? toPart(parts[idx + 1]) : null,
        prevLabel: "← Previous",
        nextLabel: "Next →",
        ariaLabel: "Chapters",
      };
    }
    if (parts.length > 0) {
      return {
        prev: null,
        next: {
          to: researchPartUrl(slug, parts[0].part),
          title: partLabel(parts[0]),
        },
        prevLabel: "",
        nextLabel: "Start reading →",
        ariaLabel: "Chapters",
      };
    }
    const list = getResearchArticleList();
    const idx = list.findIndex((a) => a.id === article.id);
    const toEntry = (a) =>
      a ? { to: researchArticleUrl(a.id), title: a.name } : null;
    return {
      prev: idx > 0 ? toEntry(list[idx - 1]) : null,
      next: idx >= 0 && idx < list.length - 1 ? toEntry(list[idx + 1]) : null,
      prevLabel: "← Newer",
      nextLabel: "Older →",
      ariaLabel: "More research articles",
    };
  }, [article, part, parts, slug]);

  if (!article || (part && !parent)) {
    return (
      <ContentDetail
        theme={theme}
        pageTitle="Article not found"
        title="Article not found"
        html=""
        emptyNote={
          <p>
            This article does not exist. Add a Markdown file under{" "}
            <code>src/content/research/articles/</code>.
          </p>
        }
      />
    );
  }

  const loadingNote = loading ? (
    <p className="content-detail-loading">Loading…</p>
  ) : null;

  if (part) {
    const idx = parts.findIndex((p) => p.id === article.id);
    const action = pdfAction(parent.resume);
    return (
      <ContentDetail
        theme={theme}
        pageTitle={`${partLabel(article)} · ${parent.name}`}
        title={article.name}
        lead={
          <SeriesBreadcrumb
            parent={parent}
            parentUrl={researchArticleUrl(slug)}
            part={article}
            index={idx}
            total={parts.length}
          />
        }
        html={html}
        toc={toc}
        emptyNote={loadingNote}
        actions={action ? [action] : []}
        pager={pager}
      />
    );
  }

  const action = pdfAction(article.resume);
  const lead =
    article.overview || parts.length > 0 ? (
      <Overview overview={article.overview}>
        <SeriesGuide
          parts={parts}
          urlFor={(p) => researchPartUrl(slug, p.part)}
        />
      </Overview>
    ) : null;

  return (
    <ContentDetail
      theme={theme}
      pageTitle={article.name}
      title={article.name}
      subtitle={`Published on ${article.createdAt.split("T")[0]}${
        parts.length === 0 ? ` · ${article.readingMinutes} min read` : ""
      }`}
      lead={lead}
      html={html}
      toc={toc}
      emptyNote={loadingNote}
      actions={action ? [action] : []}
      pager={pager}
    />
  );
}

export default ArticleDetail;
