import React from "react";
import { Link } from "react-router-dom";
import { Fade } from "../../components/reveal/Reveal";
import { researchInterests } from "../../portfolio.js";
import { getResearchArticleBySlug } from "../../content/research/researchContent.js";
import { researchArticleUrl } from "../../content/research/researchRoutes.js";
import { getProjectBySlug } from "../../content/projects/projectsContent.js";
import { projectUrl } from "../../content/projects/projectsRoutes.js";
import "./ResearchInterests.css";

const KIND_LABEL = { article: "Article", project: "Project" };

/** Resolve a theme link to an in-site URL, or null if its target is gone. */
function resolve(link) {
  if (link.kind === "article" && getResearchArticleBySlug(link.slug)) {
    return researchArticleUrl(link.slug);
  }
  if (link.kind === "project" && getProjectBySlug(link.slug)) {
    return projectUrl(link.slug);
  }
  return null;
}

/** Themes of the research, each linking to the articles and projects on it. */
export default function ResearchInterests({ theme }) {
  const { title, intro, themes } = researchInterests;
  return (
    <section
      className="research-interests"
      aria-labelledby="research-interests-title"
    >
      <div className="research-interests-heading">
        <h2 id="research-interests-title" style={{ color: theme.text }}>
          {title}
        </h2>
        <p>{intro}</p>
      </div>
      <div className="research-interests-grid">
        {themes.map((t) => {
          const links = t.links
            .map((l) => ({ ...l, to: resolve(l) }))
            .filter((l) => l.to);
          return (
            <Fade key={t.key} bottom duration={900} distance="20px">
              <article
                className={`research-interest research-interest-${t.key}`}
              >
                <div className="research-interest-head">
                  <span className="research-interest-glyph" aria-hidden="true">
                    {t.glyph}
                  </span>
                  <h3 style={{ color: theme.text }}>{t.title}</h3>
                </div>
                <p className="research-interest-text">{t.text}</p>
                {links.length > 0 && (
                  <ul className="research-interest-links">
                    {links.map((l) => (
                      <li key={`${l.kind}-${l.slug}`}>
                        <Link to={l.to}>
                          <span className="research-interest-kind">
                            {KIND_LABEL[l.kind]}
                          </span>
                          {l.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </article>
            </Fade>
          );
        })}
      </div>
    </section>
  );
}
