import React, { useMemo } from "react";
import { Redirect, useParams } from "react-router-dom";
import ContentDetail from "../../components/contentDetail/ContentDetail";
import useMarkdownBody from "../../components/markdown/useMarkdownBody";
import {
  SeriesBreadcrumb,
  SeriesGuide,
  seriesPartLabel,
} from "../../components/researchOverview/ResearchOverview";
import {
  CATEGORY_LABELS,
  TYPE_LABELS,
  getProjectBySlug,
  getProjectList,
  getProjectPart,
  getProjectParts,
  getProjectRedirect,
} from "../../content/projects/projectsContent.js";
import {
  projectPartUrl,
  projectUrl,
} from "../../content/projects/projectsRoutes.js";
import "./ProjectDetail.css";

/** External-link label matched to where the project actually lives. */
function actionLabel(url) {
  if (/github\.com/i.test(url)) return "View repository →";
  if (/arxiv\.org/i.test(url)) return "Read the paper on arXiv →";
  if (/drive\.google\.com/i.test(url)) return "Open the resources →";
  return "Open resource →";
}

const GLANCE_ROWS = [
  ["problem", "Problem"],
  ["approach", "Approach"],
  ["result", "Result"],
  ["tools", "Tools"],
];

/** Short summary block for readers who decide in a few seconds. */
function AtAGlance({ glance, actions }) {
  if (!glance) return null;
  return (
    <section className="project-glance" aria-labelledby="project-glance-title">
      <h2 id="project-glance-title" className="project-glance-title">
        At a glance
      </h2>
      <dl className="project-glance-list">
        {GLANCE_ROWS.filter(([k]) => glance[k]).map(([k, label]) => (
          <div key={k} className={`project-glance-row project-glance-${k}`}>
            <dt>{label}</dt>
            <dd>{glance[k]}</dd>
          </div>
        ))}
      </dl>
      {actions.length > 0 && (
        <p className="project-glance-actions">
          {actions.map((a) => (
            <a
              key={a.href}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {a.shortLabel}
            </a>
          ))}
        </p>
      )}
    </section>
  );
}

/**
 * Project page (layout: ContentDetail).
 *   /projects/:slug        the project, with the contents of its text if the
 *                          text is split into pages
 *   /projects/:slug/:part  one page (section) of that text
 */
function ProjectDetail(props) {
  const { slug, part } = useParams();
  const theme = props.theme;
  const project = getProjectBySlug(slug);
  const parts = useMemo(() => getProjectParts(slug), [slug]);
  const page = part ? getProjectPart(slug, part) : project;
  const { html, toc, loading } = useMarkdownBody(page);

  const pager = useMemo(() => {
    if (!project) return null;
    if (part) {
      const idx = parts.findIndex((p) => p.part === part);
      if (idx < 0) return null;
      const toPart = (p) =>
        p
          ? { to: projectPartUrl(slug, p.part), title: seriesPartLabel(p) }
          : null;
      return {
        prev:
          idx > 0
            ? toPart(parts[idx - 1])
            : { to: projectUrl(slug), title: "Overview" },
        next: idx < parts.length - 1 ? toPart(parts[idx + 1]) : null,
        prevLabel: "← Previous",
        nextLabel: "Next →",
        ariaLabel: "Sections",
      };
    }
    const list = getProjectList();
    const idx = list.findIndex((p) => p.id === project.id);
    const toEntry = (p) => (p ? { to: projectUrl(p.id), title: p.name } : null);
    return {
      prev: idx > 0 ? toEntry(list[idx - 1]) : null,
      next: idx >= 0 && idx < list.length - 1 ? toEntry(list[idx + 1]) : null,
      prevLabel: "← Previous project",
      nextLabel: "Next project →",
      ariaLabel: "More projects",
    };
  }, [project, part, parts, slug]);

  if (!project && !part) {
    const redirect = getProjectRedirect(slug);
    if (redirect) {
      return (
        <Redirect
          to={redirect.slug ? projectUrl(redirect.slug) : redirect.path}
        />
      );
    }
  }
  if (!project || !page) {
    return (
      <ContentDetail
        theme={theme}
        pageTitle="Project not found"
        title="Project not found"
        html=""
        emptyNote={
          <p>
            This project does not exist. Add a Markdown file under{" "}
            <code>src/content/projects/</code>.
          </p>
        }
      />
    );
  }

  const repo = (project.repo || "").trim();
  const paper = (project.paper || "").trim();
  const actions = [];
  if (repo) {
    actions.push({
      href: repo,
      label: actionLabel(repo),
      shortLabel: /github\.com/i.test(repo) ? "Code on GitHub" : "Resources",
    });
  }
  if (paper) {
    actions.push({
      href: paper.startsWith("/")
        ? `${process.env.PUBLIC_URL || ""}${paper}`
        : paper,
      label: "📄 Read the companion paper (PDF)",
      shortLabel: "PDF",
    });
  }

  const loadingNote = loading ? (
    <p className="content-detail-loading">Loading…</p>
  ) : null;

  if (part) {
    const idx = parts.findIndex((p) => p.id === page.id);
    return (
      <ContentDetail
        theme={theme}
        pageTitle={`${seriesPartLabel(page)} · ${project.name}`}
        title={page.name}
        badge={CATEGORY_LABELS[project.category]}
        lead={
          <SeriesBreadcrumb
            parent={project}
            parentUrl={projectUrl(slug)}
            part={page}
            index={idx}
            total={parts.length}
          />
        }
        html={html}
        toc={toc}
        emptyNote={loadingNote}
        actions={actions}
        pager={pager}
      />
    );
  }

  const subtitle = [
    project.year,
    TYPE_LABELS[project.type],
    project.hasCaseStudy && parts.length === 0
      ? `${project.readingMinutes} min read`
      : "",
  ]
    .filter(Boolean)
    .join(" · ");

  return (
    <ContentDetail
      theme={theme}
      pageTitle={project.name}
      title={project.name}
      subtitle={subtitle || `Last updated ${project.createdAt.split("T")[0]}`}
      badge={CATEGORY_LABELS[project.category]}
      lead={
        <>
          <AtAGlance glance={project.glance} actions={actions} />
          <SeriesGuide
            parts={parts}
            urlFor={(p) => projectPartUrl(slug, p.part)}
          />
        </>
      }
      html={html}
      toc={toc}
      emptyNote={loadingNote}
      actions={actions}
      pager={pager}
    />
  );
}

export default ProjectDetail;
