import React, { useEffect, useMemo, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import ProjectsnewCard from "../../components/projectsnewCard/ProjectsnewCard";
import TopButton from "../../components/topButton/TopButton";
import { Fade } from "../../components/reveal/Reveal";
import { greeting, projectsnewHeader, projectAreas } from "../../portfolio.js";
import {
  PROJECT_CATEGORIES,
  CATEGORY_LABELS,
  CATEGORY_SHORT_LABELS,
  getProjectList,
} from "../../content/projects/projectsContent.js";
import "./Projectsnew.css";
import NeuralPlayground from "../../components/neuralPlayground/NeuralPlayground";

const ALL = "all";

/** Narrow screens show the playground after the list, so projects come first. */
const NARROW_QUERY = "(max-width: 900px)";

function useMediaQuery(query) {
  const get = () =>
    typeof window !== "undefined" && window.matchMedia
      ? window.matchMedia(query).matches
      : false;
  const [matches, setMatches] = useState(get);
  useEffect(() => {
    if (!window.matchMedia) return undefined;
    const mq = window.matchMedia(query);
    const onChange = () => setMatches(mq.matches);
    onChange();
    if (mq.addEventListener) mq.addEventListener("change", onChange);
    else mq.addListener(onChange);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener("change", onChange);
      else mq.removeListener(onChange);
    };
  }, [query]);
  return matches;
}

/** Read the area filter from `?area=`; anything unknown means "all". */
function areaFromSearch(search) {
  const area = new URLSearchParams(search).get("area");
  return PROJECT_CATEGORIES.includes(area) ? area : ALL;
}

function FilterBar({ area, counts, onSelect }) {
  const options = [
    { key: ALL, label: "All", count: counts.all },
    ...PROJECT_CATEGORIES.map((c) => ({
      key: c,
      label: CATEGORY_SHORT_LABELS[c],
      count: counts[c],
    })),
  ];
  return (
    <div
      className="projects-filter"
      role="group"
      aria-label="Filter projects by area"
    >
      {options.map((o) => (
        <button
          key={o.key}
          type="button"
          className={`projects-filter-chip${
            area === o.key ? " is-active" : ""
          }`}
          aria-pressed={area === o.key}
          onClick={() => onSelect(o.key)}
          disabled={o.count === 0}
        >
          {o.label}
          <span className="projects-filter-count">{o.count}</span>
        </button>
      ))}
    </div>
  );
}

function Projectsnew({ theme, onToggle }) {
  const location = useLocation();
  const history = useHistory();
  const area = areaFromSearch(location.search);
  const narrow = useMediaQuery(NARROW_QUERY);
  const projects = useMemo(() => getProjectList(), []);

  const counts = useMemo(() => {
    const c = { all: projects.length };
    PROJECT_CATEGORIES.forEach((k) => {
      c[k] = projects.filter((p) => p.category === k).length;
    });
    return c;
  }, [projects]);

  const selectArea = (key) => {
    const params = new URLSearchParams(location.search);
    if (key === ALL) params.delete("area");
    else params.set("area", key);
    const search = params.toString();
    history.replace({
      pathname: location.pathname,
      search: search ? `?${search}` : "",
    });
  };

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);
  const inArea = projects.filter((p) => p.category === area);

  return (
    <div className="projectsnew-main">
      <Header theme={theme} pageTitle="Projects" />
      <div className="basic-projectsnew">
        <Fade bottom duration={1200} distance="30px">
          <div className="projectsnew-heading-div">
            <div className="projectsnew-heading-text-div">
              <h1
                className="projectsnew-heading-text projectsnew-hero-title"
                style={{ color: theme.text }}
              >
                {projectsnewHeader.title}
              </h1>
              <p
                className="projectsnew-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {projectsnewHeader.description}
              </p>
              <FilterBar area={area} counts={counts} onSelect={selectArea} />
            </div>
            {!narrow && (
              <div className="projectsnew-heading-img-div">
                <NeuralPlayground />
              </div>
            )}
          </div>
        </Fade>
      </div>

      <div className="projects-listing" aria-live="polite">
        {area === ALL ? (
          <>
            {featured.length > 0 && (
              <section
                className="projects-section"
                aria-labelledby="projects-selected"
              >
                <div className="projects-section-heading">
                  <h2 id="projects-selected" style={{ color: theme.text }}>
                    Selected work
                  </h2>
                  <p>{projectsnewHeader.selectedBlurb}</p>
                </div>
                <div className="projects-grid projects-grid-featured">
                  {featured.map((p) => (
                    <ProjectsnewCard
                      key={p.id}
                      pub={p}
                      theme={theme}
                      size="large"
                    />
                  ))}
                </div>
              </section>
            )}
            {rest.length > 0 && (
              <section
                className="projects-section"
                aria-labelledby="projects-more"
              >
                <div className="projects-section-heading">
                  <h2 id="projects-more" style={{ color: theme.text }}>
                    More projects
                  </h2>
                </div>
                <div className="projects-grid">
                  {rest.map((p) => (
                    <ProjectsnewCard key={p.id} pub={p} theme={theme} />
                  ))}
                </div>
              </section>
            )}
          </>
        ) : (
          <section
            className="projects-section"
            aria-labelledby={`projects-area-${area}`}
          >
            <div className="projects-section-heading">
              <h2 id={`projects-area-${area}`} style={{ color: theme.text }}>
                {CATEGORY_LABELS[area]}
              </h2>
              <p>{projectAreas[area]}</p>
            </div>
            <div className="projects-grid">
              {inArea.map((p) => (
                <ProjectsnewCard key={p.id} pub={p} theme={theme} />
              ))}
            </div>
          </section>
        )}

        {narrow && (
          <div className="projectsnew-heading-img-div projects-playground-footer">
            <NeuralPlayground />
          </div>
        )}

        <p className="projects-more-link">
          <a
            href={greeting.githubProfile}
            target="_blank"
            rel="noopener noreferrer"
          >
            More code on GitHub <span aria-hidden="true">→</span>
          </a>
        </p>
      </div>

      <Footer theme={theme} onToggle={onToggle} />
      <TopButton theme={theme} />
    </div>
  );
}

export default Projectsnew;
