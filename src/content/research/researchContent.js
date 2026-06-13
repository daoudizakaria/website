/**
 * Research article content façade.
 *
 * Sources (merged):
 * 1. Markdown files in `articles/*.md` — parsed with `gray-matter` (`slug`, `title`,
 *    `date`, `summary`, `tags`, `resume` + body). Imported as raw strings via CRACO +
 *    Webpack `asset/source`.
 * 2. Legacy `articles.data` in `src/portfolio.js` — used when no Markdown article
 *    claims the same `slug` / `id`.
 *
 * Resolution order for `getResearchArticleBySlug`: Markdown **first**, then portfolio.
 * List order: Markdown articles first, then legacy entries whose `id` is not shadowed.
 */

import matter from "gray-matter";
import { articles, articlesHeader } from "../../portfolio.js";

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

/** Canonical list URL — use everywhere (nav, redirects, links) to avoid drift. */
export const RESEARCH_BASE_PATH = "/research";

/**
 * Build the in-app URL for one article.
 * @param {string} slug — URL segment; equals `id` for legacy posts
 */
export function researchArticleUrl(slug) {
  return `${RESEARCH_BASE_PATH}/${encodeURIComponent(slug)}`;
}

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
).filter(Boolean);

/** @type {Map<string, object>} */
const markdownBySlug = new Map(
  markdownArticles.map((article) => [article.id, article])
);

/**
 * @param {typeof articles['data'][number]} item
 */
function withLegacyMeta(item) {
  return {
    ...item,
    tags: Array.isArray(item.tags) ? item.tags : [],
    contentSource: "portfolio",
  };
}

export function getResearchArticleList() {
  const legacyVisible = articles.data
    .filter((item) => !markdownBySlug.has(item.id))
    .map(withLegacyMeta);
  return [...markdownArticles, ...legacyVisible];
}

/**
 * @param {string | undefined} slug — from React Router `/research/:slug`
 */
export function getResearchArticleBySlug(slug) {
  if (slug == null || slug === "") return undefined;
  if (markdownBySlug.has(slug)) {
    return markdownBySlug.get(slug);
  }
  const legacy = articles.data.find((item) => item.id === slug);
  return legacy ? withLegacyMeta(legacy) : undefined;
}
