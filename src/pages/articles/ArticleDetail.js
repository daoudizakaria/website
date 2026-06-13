import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import TopButton from "../../components/topButton/TopButton";
import MarkdownContent from "../../components/markdown/MarkdownContent";
import { getResearchArticleBySlug } from "../../content/research/researchContent.js";
import "./ArticleDetail.css";

/*
 * ArticleDetail page
 *
 * Renders one research article for `/research/:slug`. The URL segment is the
 * article slug (today the same string as `id` in `portfolio.js`; see
 * `getResearchArticleBySlug` in `content/research/researchContent.js`).
 */
function ArticleDetail(props) {
  const { slug } = useParams();
  const theme = props.theme;
  const article = getResearchArticleBySlug(slug);
  const hasMarkdownBody =
    article && article.content && String(article.content).trim().length > 0;

  if (!article) {
    return (
      <div className="article-detail-main">
        <Header theme={theme} />
        <div className="article-detail-content">
          <h1 style={{ color: theme.text }}>Article not found</h1>
        </div>
        <Footer theme={theme} />
        <TopButton theme={theme} />
      </div>
    );
  }

  return (
    <div className="article-detail-main">
      <Header theme={theme} />
      <div className="article-detail-content">
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
              under <code>src/content/research/articles/</code> or update the{" "}
              <code>content</code> field in <code>src/portfolio.js</code>.
            </p>
          )}
        </div>
        {/* Optional resume/CV link */}
        {article.resume && article.resume.trim() !== "" && (
          <p>
            <a
              href={article.resume}
              target="_blank"
              rel="noopener noreferrer"
              style={{ color: theme.imageHighlight }}
            >
              View Resume
            </a>
          </p>
        )}
      </div>
      <Footer theme={theme} onToggle={props.onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}

export default ArticleDetail;
