/**
 * Projects, one Markdown file each in this folder. Front matter is parsed at
 * build time by scripts/markdown-frontmatter-loader.js; the body loads on
 * demand.
 */

// Project pages, plus the pages of long texts split into chapters
// (`<slug>/NN-<part>.md`, one folder level).
const projectModules = require.context(
  "./",
  true,
  /^\.\/(?:[^/]+\/)?[^/]+\.md$/
);

export const PROJECT_CATEGORIES = ["ml", "physics", "math"];

/** Areas, in the order of the filter chips on the Projects page. */
export const CATEGORY_LABELS = {
  ml: "Machine Learning & Data Science",
  physics: "Physics & Engineering",
  math: "Mathematics & Teaching",
};

/** Short chip labels for the filter bar. */
export const CATEGORY_SHORT_LABELS = {
  ml: "Machine Learning & Data",
  physics: "Physics & Engineering",
  math: "Maths & Teaching",
};

/** What kind of work a project is; shown as a label on cards and pages. */
export const TYPE_LABELS = {
  client: "Client work",
  "case-study": "Data science case study",
  research: "Research project",
  notes: "Notes & simulations",
  tool: "Open-source tool",
  teaching: "Teaching materials",
};

/** Old project URLs that no longer have their own page. */
const REMOVED_PROJECT_REDIRECTS = {
  "machine-learning-projects": "/projects?area=ml",
};

function toIsoDate(value) {
  if (value == null || value === "") return new Date(0).toISOString();
  const d = value instanceof Date ? value : new Date(value);
  return Number.isNaN(d.getTime()) ? new Date(0).toISOString() : d.toISOString();
}

function parseGlance(glance) {
  if (!glance || typeof glance !== "object") return null;
  const pick = (k) => (glance[k] != null ? String(glance[k]) : "");
  const g = {
    problem: pick("problem"),
    approach: pick("approach"),
    result: pick("result"),
    tools: pick("tools"),
  };
  return Object.values(g).some(Boolean) ? g : null;
}

/** Keep "1,544 ± 10" on one line. */
const keepTogether = (t) => t.replace(/ ± /g, "\u00a0±\u00a0");

/** Headline numbers: [{ value, unit?, label, note? }], at most four. */
function parseMetrics(metrics) {
  if (!Array.isArray(metrics)) return [];
  return metrics
    .filter((m) => m && m.value != null && m.label != null)
    .slice(0, 4)
    .map((m) => ({
      value: keepTogether(String(m.value)),
      unit: m.unit != null ? String(m.unit) : "",
      label: String(m.label),
      note: m.note != null ? keepTogether(String(m.note)) : "",
    }));
}

function parseProject(parsed, label) {
  const { data, meta } = parsed;
  const slug = data.slug;
  if (!slug || String(slug).trim() === "") {
    console.warn(`[projects] Skipping Markdown (missing slug): ${label}`);
    return null;
  }
  const rank = Number(data.rank);
  return {
    id: String(slug),
    name: data.title != null ? String(data.title) : String(slug),
    description: data.summary != null ? String(data.summary) : "",
    createdAt: toIsoDate(data.date),
    // The body is loaded on demand (see scripts/markdown-frontmatter-loader.js).
    loadBody: parsed.load,
    hasCaseStudy: Boolean(meta && meta.hasBody),
    category: PROJECT_CATEGORIES.includes(data.category)
      ? data.category
      : "physics",
    repo: data.repo != null ? String(data.repo) : "",
    paper: data.paper != null ? String(data.paper) : "",
    featured: data.featured === true,
    tags: Array.isArray(data.tags) ? data.tags.map((t) => String(t)) : [],
    year: data.year != null ? String(data.year) : "",
    type: TYPE_LABELS[data.type] ? String(data.type) : "",
    rank: Number.isFinite(rank) ? rank : Infinity,
    image: data.image != null ? String(data.image) : "",
    glance: parseGlance(data.glance),
    metrics: parseMetrics(data.metrics),
    aliases: Array.isArray(data.aliases)
      ? data.aliases.map((a) => String(a))
      : [],
    readingMinutes: meta ? meta.readingMinutes : 1,
    // A page of a long text names its `series` (the project slug), its URL
    // segment `part`, its `order` and a `kicker` ("Section 3").
    series: data.series != null ? String(data.series) : "",
    part: data.part != null ? String(data.part) : "",
    order: Number.isFinite(Number(data.order)) ? Number(data.order) : 0,
    kicker: data.kicker != null ? String(data.kicker) : "",
  };
}

/** Curated order: `rank` first, then the most recent. */
function byRankThenDate(a, b) {
  if (a.rank !== b.rank) return a.rank - b.rank;
  return a.createdAt < b.createdAt ? 1 : -1;
}

const allEntries = projectModules
  .keys()
  .filter((key) => !/projectsContent|projectsRoutes/.test(key))
  .map((key) => parseProject(projectModules(key), key))
  .filter(Boolean);

// Chapters are reached from their project page, never listed as projects.
const projects = allEntries.filter((p) => !p.series).sort(byRankThenDate);
const projectParts = allEntries.filter((p) => p.series);

const projectBySlug = new Map(projects.map((p) => [p.id, p]));

const aliasTarget = new Map();
projects.forEach((p) => p.aliases.forEach((a) => aliasTarget.set(a, p.id)));

export function getProjectList() {
  return [...projects];
}

export function getProjectsByCategory(category) {
  return projects.filter((p) => p.category === category);
}

export function getFeaturedProjects() {
  const featured = projects.filter((p) => p.featured);
  return featured.length > 0 ? featured : projects.slice(0, 3);
}

export function getProjectBySlug(slug) {
  if (slug == null || slug === "") return undefined;
  return projectBySlug.get(slug);
}

/**
 * Where an old project URL should now point: the slug of the project that
 * absorbed it (`aliases`), or a site path for a project that was removed.
 * Returns `{ slug }`, `{ path }` or null.
 */
export function getProjectRedirect(slug) {
  if (aliasTarget.has(slug)) return { slug: aliasTarget.get(slug) };
  if (REMOVED_PROJECT_REDIRECTS[slug]) {
    return { path: REMOVED_PROJECT_REDIRECTS[slug] };
  }
  return null;
}

/** The pages of a project's text, in reading order. */
export function getProjectParts(slug) {
  return projectParts
    .filter((p) => p.series === slug)
    .sort((a, b) => a.order - b.order);
}

/** One page of a project's text, by its URL segment. */
export function getProjectPart(slug, part) {
  return getProjectParts(slug).find((p) => p.part === part);
}
