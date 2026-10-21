"use client";

import { projects } from "@/content/projects";
import { useT } from "@/i18n/LanguageProvider";
import { SectionHeading } from "./SectionHeading";

export function Projects() {
  const t = useT();

  return (
    <section className="projects" id="projects">
      <SectionHeading first={t("projects.title1")} second={t("projects.title2")} />
      <p className="projects__intro">{t("projects.intro")}</p>
      <div className="projects__grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            <p className="project-card__type">{t(project.typeKey)}</p>
            <h3 className="project-card__title">{t(project.titleKey)}</h3>
            <p className="project-card__desc">{t(project.descKey)}</p>
            <ul className="project-card__tags">
              {project.tags.map((tag) => (
                <li key={tag}>{tag}</li>
              ))}
            </ul>
          </article>
        ))}
      </div>
      <p className="projects__note">{t("projects.note")}</p>
    </section>
  );
}
