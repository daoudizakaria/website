/**
 * Routing constants for the research section — deliberately free of heavy
 * imports (gray-matter, markdown files) so the router and cards can use
 * them without pulling article parsing into the entry chunk.
 */

/** Canonical list URL — use everywhere (nav, redirects, links) to avoid drift. */
export const RESEARCH_BASE_PATH = "/research";

/**
 * Build the in-app URL for one article.
 * @param {string} slug — URL segment; equals `id` for legacy posts
 */
export function researchArticleUrl(slug) {
  return `${RESEARCH_BASE_PATH}/${encodeURIComponent(slug)}`;
}

/** URL of one page of a series, e.g. a thesis chapter. */
export function researchPartUrl(seriesSlug, part) {
  return `${researchArticleUrl(seriesSlug)}/${encodeURIComponent(part)}`;
}

/**
 * Old article URLs that must keep working (linked/indexed before the slug
 * changed or the article moved). Maps legacy slug → current slug, or `null`
 * to send visitors to the research index. Consumed by the router.
 */
export const LEGACY_ARTICLE_REDIRECTS = {
  "string-theory-quantum-gravity": null,
  "quantum-computing-cryptography": null,
  "neural-networks-physics": null,
  // slug shortened when the article moved from portfolio.js to Markdown
  "literature-review-credit-market-and-statistical-physics":
    "literature-review-credit-market-statistical-physics",
  // placeholder page replaced by the full review (2024)
  "hawking-radiation-and-universe-expansion": "hawking-radiation-review",
};
