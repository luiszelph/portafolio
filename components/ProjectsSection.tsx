"use client";

import Image from "next/image";
import { useState } from "react";
import { publicAsset } from "@/lib/public-asset";
import type { Project } from "@/lib/portafolio-types";

type ProjectsSectionProps = {
  title: string;
  description: string;
  visitSiteLabel: string;
  projects: Project[];
};

export function ProjectsSection({
  title,
  description,
  visitSiteLabel,
  projects,
}: ProjectsSectionProps) {
  const [currentImageByProject, setCurrentImageByProject] = useState<
    Record<string, number>
  >({});

  const moveProjectImage = (
    projectId: string,
    total: number,
    direction: "prev" | "next",
  ) => {
    setCurrentImageByProject((prev) => {
      const current = prev[projectId] ?? 0;
      const delta = direction === "next" ? 1 : -1;
      const nextIndex = (current + delta + total) % total;
      return { ...prev, [projectId]: nextIndex };
    });
  };

  return (
    <section
      id="proyectos"
      className="scroll-mt-24 border-t border-line bg-subtle py-16 md:py-20"
      aria-labelledby="proyectos-heading"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2
          id="proyectos-heading"
          className="text-2xl font-semibold tracking-tight text-ink"
        >
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-muted">
          {description}
        </p>
        <ul className="mt-10 grid gap-6 sm:grid-cols-2">
          {projects.map((project) => {
            const gallery =
              project.imageGallery && project.imageGallery.length > 0
                ? project.imageGallery
                : [project.imageSrc];
            const activeIndex = currentImageByProject[project.id] ?? 0;
            const currentImage =
              gallery[activeIndex] ?? gallery[0] ?? project.imageSrc;

            return (
              <li
                key={project.id}
                className="overflow-hidden rounded-2xl border border-line bg-raised shadow-sm"
              >
                <div className="relative aspect-video w-full bg-card-img-bg">
                  <Image
                    src={publicAsset(currentImage)}
                    alt={`Captura del proyecto ${project.title}`}
                    fill
                    sizes="(min-width: 640px) 45vw, 100vw"
                    className="object-cover"
                  />
                  {gallery.length > 1 ? (
                    <div className="absolute inset-x-0 bottom-2 flex items-center justify-between px-2">
                      <button
                        type="button"
                        aria-label="Imagen anterior"
                        onClick={() =>
                          moveProjectImage(project.id, gallery.length, "prev")
                        }
                        className="rounded-full border border-line bg-nav-bg px-2.5 py-1 text-sm text-ink transition hover:bg-subtle dark:hover:bg-raised"
                      >
                        ‹
                      </button>
                      <span className="rounded-full border border-line bg-nav-bg px-2.5 py-1 text-xs text-ink-muted">
                        {activeIndex + 1}/{gallery.length}
                      </span>
                      <button
                        type="button"
                        aria-label="Imagen siguiente"
                        onClick={() =>
                          moveProjectImage(project.id, gallery.length, "next")
                        }
                        className="rounded-full border border-line bg-nav-bg px-2.5 py-1 text-sm text-ink transition hover:bg-subtle dark:hover:bg-raised"
                      >
                        ›
                      </button>
                    </div>
                  ) : null}
                </div>
                <div className="border-t border-line p-4">
                  <h3 className="text-base font-semibold text-ink">
                    {project.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-ink-muted">
                    {project.description}
                  </p>
                  {project.details ? (
                    <dl className="mt-4 space-y-3">
                      {project.details.map((detail) => (
                        <div key={detail.label}>
                          <dt className="text-xs font-semibold uppercase tracking-wide text-ink">
                            {detail.label}
                          </dt>
                          <dd className="mt-1 text-sm leading-relaxed text-ink-muted">
                            {detail.content}
                          </dd>
                        </div>
                      ))}
                    </dl>
                  ) : null}
                  {project.gitHubLink || project.deployLink ? (
                    <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
                      {project.gitHubLink ? (
                        <a
                          href={project.gitHubLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full bg-accent px-3 py-1.5 text-[#010000] transition hover:opacity-90"
                        >
                          GitHub
                        </a>
                      ) : null}
                      {project.deployLink ? (
                        <a
                          href={project.deployLink}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="rounded-full border border-line px-3 py-1.5 text-ink transition hover:bg-subtle dark:hover:bg-raised"
                        >
                          {visitSiteLabel}
                        </a>
                      ) : null}
                    </div>
                  ) : null}
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
