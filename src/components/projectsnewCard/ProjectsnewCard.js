import React from "react";
import { Link } from "react-router-dom";
import "./ProjectsnewCard.css";
import { Fade } from "../reveal/Reveal";
import { projectUrl } from "../../content/projects/projectsRoutes.js";

/**
 * Project card. Always navigates to the project's own page on this site
 * (`/projects/:slug`); any external repository/resource link is offered
 * there, not from the card.
 */
export default function ProjectsnewCard({ pub, theme }) {
  const dateLabel = pub.createdAt.split("T")[0];

  return (
    <div
      className="projectsnew-card-div is-clickable"
      style={{ backgroundColor: theme.highlight }}
    >
      <Fade bottom duration={2000} distance="40px">
        <Link
          className="projectsnew-card-body"
          to={projectUrl(pub.id)}
          aria-label={`Open project page: ${pub.name}`}
        >
          <div className="projectsnew-name-div">
            <p className="projectsnew-name" style={{ color: theme.text }}>
              {pub.name}
            </p>
          </div>
          {pub.description ? (
            <p
              className="projectsnew-description"
              style={{ color: theme.text }}
            >
              {pub.description}
            </p>
          ) : null}
          <div className="projectsnew-details">
            <time
              className="projectsnew-creation-date subTitle"
              dateTime={pub.createdAt}
              style={{ color: theme.secondaryText }}
            >
              Last updated {dateLabel}
            </time>
          </div>
          <div className="projectsnew-card-footer">
            <span
              className="projectsnew-link-hint"
              style={{ color: theme.imageHighlight }}
            >
              Read more
              <span className="projectsnew-link-hint-arrow" aria-hidden="true">
                →
              </span>
            </span>
          </div>
        </Link>
      </Fade>
    </div>
  );
}
