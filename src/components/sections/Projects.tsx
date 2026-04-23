import { useState } from "react";
import type { CSSProperties } from "react";
import { projects } from "../../data/projects";
import type { Project } from "../../types/portfolio";
import SectionHeader from "../ui/SectionHeader";

function Projects() {
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  return (
    <div className="projects-wrap">
      <SectionHeader
        eyebrow="Browse My Recent"
        title="Projects"
        description="A mix of production-focused and portfolio projects that reflect my frontend development direction."
        align="center"
      />

      <div className="projects-grid">
        {projects.map((project, index) => (
          <article
            key={project.slug}
            className="project-card reveal"
            style={{ "--delay": `${0.05 + index * 0.1}s` } as CSSProperties}
          >
            {project.image ? (
              <img src={project.image} alt={project.title} loading="lazy" />
            ) : (
              <div className="project-placeholder">
                <p>{project.status ?? "Project Snapshot Coming Soon"}</p>
              </div>
            )}

            <div className="project-body">
              <h3>{project.title}</h3>
              <p>{project.headline}</p>
              <div className="project-links">
                {project.github ? (
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                ) : (
                  <span className="disabled-link">GitHub Unavailable</span>
                )}
                {project.liveDemo ? (
                  <a href={project.liveDemo} target="_blank" rel="noreferrer">
                    Live Demo
                  </a>
                ) : (
                  <span className="disabled-link">No Live Demo</span>
                )}
                <button type="button" onClick={() => setActiveProject(project)}>
                  Details
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      {activeProject ? (
        <div className="modal-backdrop" onClick={() => setActiveProject(null)} role="presentation">
          <section
            className="project-modal"
            aria-labelledby="project-modal-title"
            aria-modal="true"
            role="dialog"
            onClick={(event) => event.stopPropagation()}
          >
            <button
              aria-label="Close project details"
              className="modal-close"
              onClick={() => setActiveProject(null)}
              type="button"
            >
              Close
            </button>
            <p className="modal-eyebrow">Project Details</p>
            <h3 id="project-modal-title">{activeProject.title}</h3>
            <p>{activeProject.description}</p>
            <div className="modal-stack">
              {activeProject.techStack.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </section>
        </div>
      ) : null}
    </div>
  );
}

export default Projects;
