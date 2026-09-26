import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import ContentDetail from "../../components/contentDetail/ContentDetail";
import {
  getResearchArticleBySlug,
  getResearchArticleList,
} from "../../content/research/researchContent.js";
import { researchArticleUrl } from "../../content/research/researchRoutes.js";

/** Research article page for `/research/:slug` (layout: ContentDetail). */
function ArticleDetail(props) {
  const { slug } = useParams();
  const theme = props.theme;
  const article = getResearchArticleBySlug(slug);

  const pager = useMemo(() => {
    if (!article) return null;
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
  }, [article]);

  if (!article) {
    return (
      <ContentDetail
        theme={theme}
        pageTitle="Article not found"
        title="Article not found"
        markdown=""
        emptyNote={
          <p>
            This article does not exist. Add a Markdown file under{" "}
            <code>src/content/research/articles/</code>.
          </p>
        }
      />
    );
  }

  const resume = (article.resume || "").trim();
  const action = resume
    ? {
        href: resume.startsWith("/")
          ? `${process.env.PUBLIC_URL || ""}${resume}`
          : resume,
        label: resume.toLowerCase().endsWith(".pdf")
          ? "📄 Download the paper (PDF)"
          : "View Resume",
      }
    : null;

  return (
    <ContentDetail
      theme={theme}
      pageTitle={article.name}
      title={article.name}
      subtitle={`Published on ${article.createdAt.split("T")[0]}`}
      markdown={article.content}
      actions={action ? [action] : []}
      pager={pager}
    />
  );
}

export default ArticleDetail;
