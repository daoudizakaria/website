import React from "react";
import { Link } from "react-router-dom";
import "./ArticlesCard.css";
import { Fade } from "react-reveal";
import { researchArticleUrl } from "../../content/research/researchContent.js";

export default function ArticlesCard({ pub, theme }) {
  const dateLabel = pub.createdAt.split("T")[0];

  return (
    <div
      className="articles-card-div"
      style={{ backgroundColor: theme.highlight }}
    >
      <Fade bottom duration={2000} distance="40px">
        <Link
          to={researchArticleUrl(pub.id)}
          className="articles-card-link"
          aria-label={`Read article: ${pub.name}`}
        >
          <time
            className="articles-card-date"
            dateTime={pub.createdAt}
            style={{ color: theme.secondaryText }}
          >
            {dateLabel}
          </time>
          <h2 className="articles-card-title" style={{ color: theme.text }}>
            {pub.name}
          </h2>
          <p
            className="articles-abstract-label"
            style={{ color: theme.secondaryText }}
          >
            Abstract
          </p>
          <p className="articles-description" style={{ color: theme.text }}>
            {pub.description}
          </p>
          <span
            className="articles-read-cta"
            style={{ color: theme.imageHighlight }}
          >
            Read article →
          </span>
        </Link>
      </Fade>
    </div>
  );
}
