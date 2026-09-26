import React from "react";
import { Link } from "react-router-dom";
import "./HomeHighlights.css";
import { Fade } from "../../components/reveal/Reveal";
import ProjectsnewCard from "../../components/projectsnewCard/ProjectsnewCard";
import ArticlesCard from "../../components/articlesCard/ArticlesCard";
import { getResearchArticleList } from "../../content/research/researchContent.js";
import { RESEARCH_BASE_PATH } from "../../content/research/researchRoutes.js";
import { getFeaturedProjects } from "../../content/projects/projectsContent.js";

const LATEST_ARTICLE_COUNT = 3;

function SectionHeading({ title, linkTo, linkLabel, theme }) {
  return (
    <div className="home-highlights-heading">
      <h2 className="home-highlights-title" style={{ color: theme.text }}>
        {title}
      </h2>
      <Link
        to={linkTo}
        className="home-highlights-view-all"
        style={{ color: theme.imageHighlight }}
      >
        {linkLabel} <span aria-hidden="true">→</span>
      </Link>
    </div>
  );
}

export default function HomeHighlights({ theme }) {
  const featuredProjects = getFeaturedProjects();
  const latestArticles = getResearchArticleList().slice(
    0,
    LATEST_ARTICLE_COUNT
  );

  return (
    <div className="home-highlights-main">
      {featuredProjects.length > 0 && (
        <section className="home-highlights-section">
          <Fade bottom duration={1000} distance="20px">
            <SectionHeading
              title="Featured work"
              linkTo="/projects"
              linkLabel="View all projects"
              theme={theme}
            />
          </Fade>
          <div className="home-highlights-grid">
            {featuredProjects.map((pub) => (
              <ProjectsnewCard key={pub.id} pub={pub} theme={theme} />
            ))}
          </div>
        </section>
      )}
      {latestArticles.length > 0 && (
        <section className="home-highlights-section">
          <Fade bottom duration={1000} distance="20px">
            <SectionHeading
              title="Latest research"
              linkTo={RESEARCH_BASE_PATH}
              linkLabel="View all research"
              theme={theme}
            />
          </Fade>
          <div className="home-highlights-grid">
            {latestArticles.map((article) => (
              <ArticlesCard key={article.id} pub={article} theme={theme} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
