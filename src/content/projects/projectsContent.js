/**
 * Project content façade — mirrors researchContent.js.
 *
 * Single source of truth: Markdown files in this folder, parsed with
 * `gray-matter` (`slug`, `title`, `date`, `summary`, `category`, `repo`,
 * `featured`, `tags` + body). Edit or add projects by editing those files
 * (by hand or through the Decap CMS admin).
 */

import matter from "gray-matter";

const projectModules = require.context("./", false, /\.md$/);

export const PROJECT_CATEGORIES = ["ml", "physics", "math"];

function toIsoDate(value) {
  if (value == null || value === "") return new Date(0).toISOString();
  const d = value instanceof Date ? value : new Date(value);
  return Number.isNaN(d.getTime()) ? new Date(0).toISOString() : d.toISOString();
}

/** The stub note counts as "no real content" so pages can adapt. */
const STUB_RE = /^\*A full case study for this project is in preparation\.\*$/;

function parseProject(raw, label) {
  const { data, content } = matter(raw);
  const slug = data.slug;
  if (!slug || String(slug).trim() === "") {
    console.warn(`[projects] Skipping Markdown (missing slug): ${label}`);
    return null;
  }
  const body = typeof content === "string" ? content.trim() : "";
  return {
    id: String(slug),
    name: data.title != null ? String(data.title) : String(slug),
    description: data.summary != null ? String(data.summary) : "",
    createdAt: toIsoDate(data.date),
    content: body,
    hasCaseStudy: body !== "" && !STUB_RE.test(body),
    category: PROJECT_CATEGORIES.includes(data.category)
      ? data.category
      : "physics",
    repo: data.repo != null ? String(data.repo) : "",
    featured: data.featured === true,
    tags: Array.isArray(data.tags) ? data.tags.map((t) => String(t)) : [],
  };
}

const projects = projectModules
  .keys()
  .filter((key) => !/projectsContent|projectsRoutes/.test(key))
  .map((key) => parseProject(projectModules(key), key))
  .filter(Boolean)
  .sort((a, b) => (a.createdAt < b.createdAt ? 1 : -1));

const projectBySlug = new Map(projects.map((p) => [p.id, p]));

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
