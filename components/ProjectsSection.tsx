"use client";

import Image from "next/image";
import { useState } from "react";
import { publicAsset } from "@/lib/public-asset";
import type { Project, ProjectGroup } from "@/lib/portafolio-types";

type ProjectsUi = {
  groups: {
    production: string;
    demo: string;
    experiment: string;
  };
  viewCaseStudy: string;
  hideCaseStudy: string;
  tryDemo: string;
  viewOnGitHub: string;
  previousImage: string;
  nextImage: string;
};

type ProjectsSectionProps = {
  title: string;
  description: string;
  visitSiteLabel: string;
  projects: Project[];
  ui: ProjectsUi;
};

type ProjectGalleryProps = {
  project: Project;
  ui: ProjectsUi;
  aspectClass?: string;
};

function ProjectGallery({
  project,
  ui,
  aspectClass = "aspect-video",
}: ProjectGalleryProps) {
  const gallery =
    project.imageGallery && project.imageGallery.length > 0
      ? project.imageGallery
      : [project.imageSrc];
  const [activeIndex, setActiveIndex] = useState(0);
  const currentImage = gallery[activeIndex] ?? gallery[0] ?? project.imageSrc;

  const goTo = (index: number) => {
    setActiveIndex((index + gallery.length) % gallery.length);
  };

  return (
    <div
      className={`group/image relative ${aspectClass} w-full overflow-hidden bg-card-img-bg`}
    >
      <Image
        src={publicAsset(currentImage)}
        alt={`Captura del proyecto ${project.title}`}
        fill
        sizes="(min-width: 1024px) 560px, 100vw"
        className="object-cover transition duration-300 group-hover/image:scale-[1.02]"
      />
      {gallery.length > 1 ? (
        <>
          <div className="absolute inset-x-0 bottom-0 flex justify-center gap-1.5 bg-gradient-to-t from-black/40 to-transparent px-3 pb-3 pt-8">
            {gallery.map((_, index) => (
              <button
                key={`${project.id}-dot-${index}`}
                type="button"
                aria-label={`Imagen ${index + 1} de ${gallery.length}`}
                aria-current={index === activeIndex}
                onClick={() => goTo(index)}
                className={`h-2 rounded-full transition-all ${
                  index === activeIndex
                    ? "w-5 bg-accent"
                    : "w-2 bg-white/70 hover:bg-white"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            aria-label={ui.previousImage}
            onClick={() => goTo(activeIndex - 1)}
            className="absolute top-1/2 left-2 -translate-y-1/2 rounded-full border border-line/60 bg-nav-bg/90 px-2 py-1 text-sm text-ink opacity-0 transition group-hover/image:opacity-100 hover:bg-subtle"
          >
            ‹
          </button>
          <button
            type="button"
            aria-label={ui.nextImage}
            onClick={() => goTo(activeIndex + 1)}
            className="absolute top-1/2 right-2 -translate-y-1/2 rounded-full border border-line/60 bg-nav-bg/90 px-2 py-1 text-sm text-ink opacity-0 transition group-hover/image:opacity-100 hover:bg-subtle"
          >
            ›
          </button>
        </>
      ) : null}
    </div>
  );
}

function ProjectMetrics({ metrics }: { metrics: readonly string[] }) {
  return (
    <p className="mt-3 text-xs font-medium text-ink-muted">
      {metrics.join(" · ")}
    </p>
  );
}

function TechChips({ technologies }: { technologies: readonly string[] }) {
  return (
    <div className="mt-4 flex flex-wrap gap-2">
      {technologies.map((technology) => (
        <span
          key={technology}
          className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent ring-1 ring-accent/25"
        >
          {technology}
        </span>
      ))}
    </div>
  );
}

function ProjectActions({
  project,
  ui,
  visitSiteLabel,
  caseStudyOpen,
  onToggleCaseStudy,
}: {
  project: Project;
  ui: ProjectsUi;
  visitSiteLabel: string;
  caseStudyOpen?: boolean;
  onToggleCaseStudy?: () => void;
}) {
  const hasActions =
    project.details?.length ||
    project.deployLink ||
    project.gitHubLink ||
    onToggleCaseStudy;

  if (!hasActions) return null;

  return (
    <div className="mt-5 flex flex-wrap gap-2">
      {project.details?.length && onToggleCaseStudy ? (
        <button
          type="button"
          onClick={onToggleCaseStudy}
          aria-expanded={caseStudyOpen}
          className="rounded-full bg-accent px-3.5 py-1.5 text-sm font-semibold text-accent-foreground transition hover:opacity-90"
        >
          {caseStudyOpen ? ui.hideCaseStudy : ui.viewCaseStudy}
        </button>
      ) : null}
      {project.deployLink ? (
        <a
          href={project.deployLink}
          target="_blank"
          rel="noopener noreferrer"
          className={`rounded-full px-3.5 py-1.5 text-sm font-semibold transition ${
            project.details?.length
              ? "border border-line text-ink hover:bg-subtle dark:hover:bg-raised"
              : "bg-accent text-accent-foreground hover:opacity-90"
          }`}
        >
          {project.group === "demo" || project.group === "experiment"
            ? ui.tryDemo
            : visitSiteLabel}
        </a>
      ) : null}
      {project.gitHubLink ? (
        <a
          href={project.gitHubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-line px-3.5 py-1.5 text-sm font-semibold text-ink transition hover:bg-subtle dark:hover:bg-raised"
        >
          {ui.viewOnGitHub}
        </a>
      ) : null}
    </div>
  );
}

function CaseStudyPanel({
  details,
  open,
}: {
  details: NonNullable<Project["details"]>;
  open: boolean;
}) {
  return (
    <div
      className={`grid transition-[grid-template-rows] duration-200 ease-out ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
    >
      <div className="overflow-hidden">
        <dl className="mt-4 space-y-3 border-t border-line pt-4">
          {details.map((detail) => (
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
      </div>
    </div>
  );
}

function ProjectCardContent({
  project,
  ui,
  visitSiteLabel,
}: {
  project: Project;
  ui: ProjectsUi;
  visitSiteLabel: string;
}) {
  const [caseStudyOpen, setCaseStudyOpen] = useState(false);

  return (
    <>
      <span className="text-xs font-semibold uppercase tracking-wide text-accent">
        {project.category}
      </span>
      <h3 className="mt-2 text-lg font-semibold text-ink">{project.title}</h3>
      <p className="mt-2 text-sm leading-relaxed text-ink-muted">
        {project.description}
      </p>
      {project.metrics?.length ? (
        <ProjectMetrics metrics={project.metrics} />
      ) : null}
      <TechChips technologies={project.technologies} />
      <ProjectActions
        project={project}
        ui={ui}
        visitSiteLabel={visitSiteLabel}
        caseStudyOpen={caseStudyOpen}
        onToggleCaseStudy={
          project.details?.length
            ? () => setCaseStudyOpen((value) => !value)
            : undefined
        }
      />
      {project.details?.length ? (
        <CaseStudyPanel details={project.details} open={caseStudyOpen} />
      ) : null}
    </>
  );
}

function FeaturedProjectCard({
  project,
  ui,
  visitSiteLabel,
}: {
  project: Project;
  ui: ProjectsUi;
  visitSiteLabel: string;
}) {
  return (
    <article className="overflow-hidden rounded-2xl border border-line bg-raised shadow-sm transition-shadow hover:shadow-md">
      <div className="grid lg:grid-cols-2 lg:items-start">
        <ProjectGallery
          project={project}
          ui={ui}
          aspectClass="aspect-video lg:aspect-auto lg:h-[320px] lg:max-h-[320px] lg:shrink-0"
        />
        <div className="border-t border-line p-5 lg:border-t-0 lg:border-l lg:p-6">
          <ProjectCardContent
            project={project}
            ui={ui}
            visitSiteLabel={visitSiteLabel}
          />
        </div>
      </div>
    </article>
  );
}

function CompactProjectCard({
  project,
  ui,
  visitSiteLabel,
}: {
  project: Project;
  ui: ProjectsUi;
  visitSiteLabel: string;
}) {
  return (
    <article className="overflow-hidden rounded-xl border border-line bg-raised shadow-sm transition-shadow hover:shadow-md">
      <div className="flex flex-col sm:flex-row">
        <div className="relative h-36 w-full shrink-0 bg-card-img-bg sm:h-auto sm:w-36">
          <Image
            src={publicAsset(project.imageSrc)}
            alt={`Captura del proyecto ${project.title}`}
            fill
            sizes="144px"
            className="object-cover transition duration-300 hover:scale-[1.02]"
          />
        </div>
        <div className="flex flex-1 flex-col p-4">
          <span className="text-[10px] font-semibold uppercase tracking-wide text-accent">
            {project.category}
          </span>
          <h3 className="mt-1 text-sm font-semibold text-ink">{project.title}</h3>
          <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-ink-muted">
            {project.description}
          </p>
          <div className="mt-2 flex flex-wrap gap-1.5">
            {project.technologies.slice(0, 3).map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-accent/15 px-2 py-0.5 text-[10px] font-medium text-accent ring-1 ring-accent/25"
              >
                {technology}
              </span>
            ))}
          </div>
          <ProjectActions
            project={project}
            ui={ui}
            visitSiteLabel={visitSiteLabel}
          />
        </div>
      </div>
    </article>
  );
}

function ProjectGroupSection({
  groupKey,
  label,
  projects,
  ui,
  visitSiteLabel,
}: {
  groupKey: ProjectGroup;
  label: string;
  projects: Project[];
  ui: ProjectsUi;
  visitSiteLabel: string;
}) {
  if (projects.length === 0) return null;

  const useFeaturedLayout = groupKey === "production" || groupKey === "demo";

  return (
    <div className="mt-10 first:mt-10">
      <h3 className="text-sm font-semibold uppercase tracking-wide text-ink-muted">
        {label}
      </h3>

      <div className="mt-4 space-y-4">
        {useFeaturedLayout
          ? projects.map((project) => (
              <FeaturedProjectCard
                key={project.id}
                project={project}
                ui={ui}
                visitSiteLabel={visitSiteLabel}
              />
            ))
          : null}

        {!useFeaturedLayout ? (
          <ul className="grid gap-3 sm:grid-cols-2">
            {projects.map((project) => (
              <li key={project.id}>
                <CompactProjectCard
                  project={project}
                  ui={ui}
                  visitSiteLabel={visitSiteLabel}
                />
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}

const GROUP_ORDER: ProjectGroup[] = ["production", "demo", "experiment"];

export function ProjectsSection({
  title,
  description,
  visitSiteLabel,
  projects,
  ui,
}: ProjectsSectionProps) {
  const grouped = GROUP_ORDER.reduce(
    (acc, group) => {
      acc[group] = projects.filter((project) => project.group === group);
      return acc;
    },
    {} as Record<ProjectGroup, Project[]>,
  );

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
        <p className="mt-2 max-w-2xl text-sm text-ink-muted">{description}</p>

        {GROUP_ORDER.map((group) => (
          <ProjectGroupSection
            key={group}
            groupKey={group}
            label={ui.groups[group]}
            projects={grouped[group]}
            ui={ui}
            visitSiteLabel={visitSiteLabel}
          />
        ))}
      </div>
    </section>
  );
}
