/** Routing constants for projects — no heavy imports (see researchRoutes.js). */

export const PROJECTS_BASE_PATH = "/projects";

/** Build the in-app URL for one project page. */
export function projectUrl(slug) {
  return `${PROJECTS_BASE_PATH}/${encodeURIComponent(slug)}`;
}
