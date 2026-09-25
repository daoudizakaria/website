/**
 * Research article content façade.
 *
 * Single source of truth: Markdown files in `articles/*.md` — parsed with
 * `gray-matter` (`slug`, `title`, `date`, `summary`, `tags`, `resume` + body).
 * Imported as raw strings via CRACO + Webpack `asset/source`. Add or edit
 * articles by editing those files (by hand or through the Decap CMS admin).
 */

import matter from "gray-matter";
import { articlesHeader } from "../../portfolio.js";

/** Auto-import published research `.md` files (excludes docs/templates). */
const articleModules = require.context("./articles", false, /\.md$/);
const MARKDOWN_EXCLUDED = /^(MIGRATION_CHECKLIST|article-template|markdown-katex-sample)/i;

const MARKDOWN_RAW_FILES = articleModules
  .keys()
  .filter((key) => !MARKDOWN_EXCLUDED.test(key.replace(/^\.\//, "")))
  .map((key) => ({
    label: key.replace(/^\.\//, ""),
    raw: articleModules(key),
  }));

export {
  RESEARCH_BASE_PATH,
  researchArticleUrl,
  LEGACY_ARTICLE_REDIRECTS,
} from "./researchRoutes.js";

export { articlesHeader };

/**
 * Normalize frontmatter `date` to an ISO string (ArticleDetail uses `.split("T")[0]`).
 * @param {string | Date | undefined} value
 */
function toIsoDate(value) {
  if (value == null || value === "") {
    return new Date(0).toISOString();
  }
  const d = value instanceof Date ? value : new Date(value);
  if (Number.isNaN(d.getTime())) {
    return new Date(0).toISOString();
  }
  return d.toISOString();
}

/**
 * @param {string} raw — full file text including `---` frontmatter
 * @param {string} label — filename for warnings
 * @returns {object | null}
 */
function parseMarkdownArticle(raw, label) {
  const { data, content } = matter(raw);
  const slug = data.slug;
  if (!slug || String(slug).trim() === "") {
    console.warn(`[research] Skipping Markdown (missing slug): ${label}`);
    return null;
  }
  const body = typeof content === "string" ? content.trim() : "";
  return {
    id: String(slug),
    name: data.title != null ? String(data.title) : String(slug),
    description: data.summary != null ? String(data.summary) : "",
    createdAt: toIsoDate(data.date),
    content: body,
    resume: data.resume != null ? String(data.resume) : "",
    tags: Array.isArray(data.tags) ? data.tags.map((t) => String(t)) : [],
    contentSource: "markdown",
  };
}

const markdownArticles = MARKDOWN_RAW_FILES.map(({ label, raw }) =>
  parseMarkdownArticle(raw, label)
)
  .filter(Boolean)
  .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

/** @type {Map<string, object>} */
const markdownBySlug = new Map(
  markdownArticles.map((article) => [article.id, article])
);

export function getResearchArticleList() {
  return [...markdownArticles];
}

/**
 * @param {string | undefined} slug — from React Router `/research/:slug`
 */
export function getResearchArticleBySlug(slug) {
  if (slug == null || slug === "") return undefined;
  return markdownBySlug.get(slug);
}
