import React from "react";
import "./ProjectsnewCard.css";
import { Fade } from "react-reveal";

/** Only treat absolute http(s) URLs as openable (avoids blank tabs / bogus hrefs). */
function getOpenableProjectUrl(raw) {
  const s = (raw || "").trim();
  if (!s) return null;
  return /^https?:\/\//i.test(s) ? s : null;
}

export default function ProjectsnewCard({ pub, theme }) {
  const openableUrl = getOpenableProjectUrl(pub.url);
  const hasLink = Boolean(openableUrl);
  const dateLabel = pub.createdAt.split("T")[0];

  const body = (
    <>
      <div className="projectsnew-name-div">
        <p className="projectsnew-name" style={{ color: theme.text }}>
          {pub.name}
        </p>
      </div>
      {pub.description ? (
        <p className="projectsnew-description" style={{ color: theme.text }}>
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
        {hasLink ? (
          <span
            className="projectsnew-link-hint"
            style={{ color: theme.imageHighlight }}
          >
            Open resource →
          </span>
        ) : (
          <span
            className="projectsnew-no-link-hint subTitle"
            style={{ color: theme.secondaryText }}
          >
            No public link
          </span>
        )}
      </div>
    </>
  );

  return (
    <div
      className={`projectsnew-card-div ${
        hasLink ? "is-clickable" : "is-static"
      }`}
      style={{ backgroundColor: theme.highlight }}
    >
      <Fade bottom duration={2000} distance="40px">
        {hasLink ? (
          <a
            className="projectsnew-card-body"
            href={openableUrl}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`Open project: ${pub.name}`}
          >
            {body}
          </a>
        ) : (
          <div className="projectsnew-card-body">{body}</div>
        )}
      </Fade>
    </div>
  );
}
