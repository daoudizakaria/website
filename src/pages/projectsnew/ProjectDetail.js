import React, { useMemo } from "react";
import { useParams } from "react-router-dom";
import ContentDetail from "../../components/contentDetail/ContentDetail";
import {
  getProjectBySlug,
  getProjectList,
} from "../../content/projects/projectsContent.js";
import { projectUrl } from "../../content/projects/projectsRoutes.js";

const CATEGORY_LABELS = {
  ml: "Machine Learning & Data Science",
  physics: "Physics & Engineering",
  math: "Mathematics",
};

/** External-link label matched to where the project actually lives. */
function actionLabel(url) {
  if (/github\.com/i.test(url)) return "View repository →";
  if (/arxiv\.org/i.test(url)) return "Read the paper on arXiv →";
  if (/drive\.google\.com/i.test(url)) return "Open the resources →";
  return "Open resource →";
}

/** Project page for `/projects/:slug` (layout: ContentDetail). */
function ProjectDetail(props) {
  const { slug } = useParams();
  const theme = props.theme;
  const project = getProjectBySlug(slug);

  const pager = useMemo(() => {
    if (!project) return null;
    const list = getProjectList();
    const idx = list.findIndex((p) => p.id === project.id);
    const toEntry = (p) => (p ? { to: projectUrl(p.id), title: p.name } : null);
    return {
      prev: idx > 0 ? toEntry(list[idx - 1]) : null,
      next: idx >= 0 && idx < list.length - 1 ? toEntry(list[idx + 1]) : null,
      prevLabel: "← Newer",
      nextLabel: "Older →",
      ariaLabel: "More projects",
    };
  }, [project]);

  if (!project) {
    return (
      <ContentDetail
        theme={theme}
        pageTitle="Project not found"
        title="Project not found"
        markdown=""
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
  if (repo) actions.push({ href: repo, label: actionLabel(repo) });
  if (paper) {
    actions.push({
      href: paper.startsWith("/")
        ? `${process.env.PUBLIC_URL || ""}${paper}`
        : paper,
      label: "📄 Read the companion paper (PDF)",
    });
  }

  return (
    <ContentDetail
      theme={theme}
      pageTitle={project.name}
      title={project.name}
      subtitle={`Last updated ${project.createdAt.split("T")[0]}`}
      badge={CATEGORY_LABELS[project.category]}
      markdown={project.content}
      actions={actions}
      pager={pager}
    />
  );
}

export default ProjectDetail;
