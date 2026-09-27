import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsnewCard.css";
import { Fade } from "../reveal/Reveal";
import { projectUrl } from "../../content/projects/projectsRoutes.js";
import { TYPE_LABELS } from "../../content/projects/projectsContent.js";

const MAX_TAGS = 3;

/** Placeholder glyph per area, for projects without a thumbnail. */
const AREA_GLYPH = { ml: "ƒ(x)", physics: "ψ", math: "∫" };

function withPublicUrl(path) {
  if (!path || !path.startsWith("/")) return path;
  return `${process.env.PUBLIC_URL || ""}${path}`;
}

function tagLabel(tag) {
  return tag.replace(/-/g, " ");
}

/**
 * Project card. Always navigates to the project's own page on this site
 * (`/projects/:slug`); any external repository/resource link is offered
 * there, not from the card. `size="large"` is used for the selected-work row.
 */
export default function ProjectsnewCard({ pub, theme, size = "regular" }) {
  const typeLabel = TYPE_LABELS[pub.type];
  const tags = (pub.tags || []).slice(0, MAX_TAGS);
  const hasCode = /github\.com/i.test(pub.repo || "");
  const hasPdf = Boolean(pub.paper);

  return (
    <div
      className={`projectsnew-card-div is-clickable projectsnew-card-${size}`}
      style={{ backgroundColor: theme.highlight }}
    >
      <Fade bottom duration={1200} distance="30px">
        <Link
          className="projectsnew-card-body"
          to={projectUrl(pub.id)}
          aria-label={`Open project page: ${pub.name}`}
        >
          <div
            className={`projectsnew-thumb projectsnew-thumb-${pub.category}${
              pub.image ? "" : " is-empty"
            }`}
            aria-hidden="true"
          >
            {pub.image ? (
              <img
                src={withPublicUrl(pub.image)}
                alt=""
                loading="lazy"
                decoding="async"
              />
            ) : (
              <span className="projectsnew-thumb-glyph">
                {AREA_GLYPH[pub.category] || "∑"}
              </span>
            )}
          </div>

          <div className="projectsnew-card-content">
            {(typeLabel || pub.year) && (
              <p className="projectsnew-meta">
                {typeLabel && (
                  <span
                    className={`projectsnew-type projectsnew-type-${pub.type}`}
                  >
                    {typeLabel}
                  </span>
                )}
                {pub.year && (
                  <span className="projectsnew-year">{pub.year}</span>
                )}
              </p>
            )}

            <h3 className="projectsnew-name" style={{ color: theme.text }}>
              {pub.name}
            </h3>

            {pub.description ? (
              <p className="projectsnew-description">{pub.description}</p>
            ) : null}

            {tags.length > 0 && (
              <ul className="projectsnew-tags" aria-label="Topics">
                {tags.map((t) => (
                  <li key={t}>{tagLabel(t)}</li>
                ))}
              </ul>
            )}

            <div className="projectsnew-card-footer">
              <span className="projectsnew-facts">
                {pub.hasCaseStudy && <span>{pub.readingMinutes} min read</span>}
                {hasCode && <span className="projectsnew-fact-chip">Code</span>}
                {hasPdf && <span className="projectsnew-fact-chip">PDF</span>}
              </span>
              <span className="projectsnew-link-hint">
                Read more
                <span
                  className="projectsnew-link-hint-arrow"
                  aria-hidden="true"
                >
                  →
                </span>
              </span>
            </div>
          </div>
        </Link>
      </Fade>
    </div>
  );
}
