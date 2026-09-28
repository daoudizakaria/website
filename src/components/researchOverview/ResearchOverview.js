import React from "react";
import { Link } from "react-router-dom";
import MarkdownContent from "../markdown/MarkdownContent";
import "./ResearchOverview.css";

function withPublicUrl(path) {
  if (!path || !path.startsWith("/")) return path;
  return `${process.env.PUBLIC_URL || ""}${path}`;
}

/**
 * Overview of a long research text: what it is, its key results and one
 * figure, for readers who decide in a minute. Results are Markdown (they may
 * contain inline maths).
 */
export function Overview({ overview, children }) {
  if (!overview) return null;
  const results = overview.resultsHtml;
  return (
    <section
      className="research-overview"
      aria-labelledby="research-overview-title"
    >
      <h2 id="research-overview-title" className="research-overview-title">
        Overview
      </h2>
      <div className="research-overview-grid">
        <div className="research-overview-text">
          {overview.summary && (
            <p className="research-overview-summary">{overview.summary}</p>
          )}
          {results && (
            <>
              <h3 className="research-overview-subtitle">Key results</h3>
              <MarkdownContent
                html={results}
                className="research-overview-results"
              />
            </>
          )}
        </div>
        {overview.figure && (
          <figure className="research-overview-figure">
            <img
              src={withPublicUrl(overview.figure)}
              alt={overview.figureCaption || ""}
              loading="lazy"
              decoding="async"
            />
            {overview.figureCaption && (
              <figcaption>{overview.figureCaption}</figcaption>
            )}
          </figure>
        )}
      </div>
      {children}
    </section>
  );
}

/** Contents of a text split into pages (e.g. the chapters of a thesis). */
export function SeriesGuide({ parts, urlFor }) {
  if (!parts || parts.length === 0) return null;
  return (
    <nav className="series-guide" aria-labelledby="series-guide-title">
      <h2 id="series-guide-title" className="series-guide-title">
        Read online, chapter by chapter
      </h2>
      <ol className="series-guide-list">
        {parts.map((p) => (
          <li key={p.id}>
            <Link to={urlFor(p)} className="series-guide-item">
              <span className="series-guide-kicker">{p.kicker}</span>
              <span className="series-guide-name">{p.name}</span>
              <span className="series-guide-desc">{p.description}</span>
              <span className="series-guide-time">
                {p.readingMinutes} min read
              </span>
            </Link>
          </li>
        ))}
      </ol>
    </nav>
  );
}

/** Top bar of one page of a series: where it belongs and where it sits. */
export function SeriesBreadcrumb({ parent, parentUrl, part, index, total }) {
  return (
    <p className="series-breadcrumb">
      <Link to={parentUrl}>← {parent.name}</Link>
      <span className="series-breadcrumb-pos">
        {part.kicker} · page {index + 1} of {total} · {part.readingMinutes} min
        read
      </span>
    </p>
  );
}
