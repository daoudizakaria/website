/**
 * Research article content façade.
 *
 * Single source of truth: Markdown files in `articles/*.md` (`slug`, `title`,
 * `date`, `summary`, `tags`, `resume` + body). Front matter is parsed at build
 * time (scripts/markdown-frontmatter-loader.js); each import gives the front
 * matter, and its `load()` fetches the body on demand. Add or edit articles by editing those files (by
 * hand or through the Decap CMS admin).
 */

import { articlesHeader } from "../../portfolio.js";

/** Auto-import published research `.md` files. The KaTeX sample is a test
 *  fixture, excluded here so it is not even bundled. */
const articleModules = require.context(
  "./articles",
  true,
  /^\.\/(?!markdown-katex-sample)(?:[^/]+\/)?[^/]+\.md$/
);
const MARKDOWN_EXCLUDED = /^(MIGRATION_CHECKLIST|article-template|markdown-katex-sample)/i;

const MARKDOWN_RAW_FILES = articleModules
  .keys()
  .filter((key) => !MARKDOWN_EXCLUDED.test(key.replace(/^.*\//, "")))
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

/** Overview block: a short summary, key results and an optional figure. */
function parseOverview(o, meta) {
  if (!o || typeof o !== "object") return null;
  return {
    // key results pre-rendered to HTML at build time (maths included)
    resultsHtml: (meta && meta.overviewResultsHtml) || "",
    summary: o.summary != null ? String(o.summary) : "",
    results: Array.isArray(o.results) ? o.results.map((r) => String(r)) : [],
    figure: o.figure != null ? String(o.figure) : "",
    figureCaption: o.figureCaption != null ? String(o.figureCaption) : "",
  };
}

/**
 * @param {{data: object, meta: object, load: function}} parsed — build-time parsed file
 * @param {string} label — filename for warnings
 * @returns {object | null}
 */
function parseMarkdownArticle(parsed, label) {
  const { data, meta } = parsed;
  const slug = data.slug;
  if (!slug || String(slug).trim() === "") {
    console.warn(`[research] Skipping Markdown (missing slug): ${label}`);
    return null;
  }
  return {
    id: String(slug),
    name: data.title != null ? String(data.title) : String(slug),
    description: data.summary != null ? String(data.summary) : "",
    createdAt: toIsoDate(data.date),
    // The body is loaded on demand (see scripts/markdown-frontmatter-loader.js).
    loadBody: parsed.load,
    readingMinutes: meta ? meta.readingMinutes : 1,
    resume: data.resume != null ? String(data.resume) : "",
    tags: Array.isArray(data.tags) ? data.tags.map((t) => String(t)) : [],
    contentSource: "markdown",
    overview: parseOverview(data.overview, meta),
    // Long works split into pages: a part names its `series` (the slug of
    // the overview page), its URL segment `part`, and its `order`.
    series: data.series != null ? String(data.series) : "",
    part: data.part != null ? String(data.part) : "",
    order: Number.isFinite(Number(data.order)) ? Number(data.order) : 0,
    kicker: data.kicker != null ? String(data.kicker) : "",
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

/** Articles for the research list (parts of a series are not listed). */
export function getResearchArticleList() {
  return markdownArticles.filter((a) => !a.series);
}

/** The pages of a series, in reading order. */
export function getSeriesParts(seriesSlug) {
  return markdownArticles
    .filter((a) => a.series === seriesSlug)
    .sort((a, b) => a.order - b.order);
}

/** One page of a series, by its URL segment. */
export function getSeriesPart(seriesSlug, part) {
  return getSeriesParts(seriesSlug).find((a) => a.part === part);
}

/**
 * @param {string | undefined} slug — from React Router `/research/:slug`
 */
export function getResearchArticleBySlug(slug) {
  if (slug == null || slug === "") return undefined;
  return markdownBySlug.get(slug);
}
