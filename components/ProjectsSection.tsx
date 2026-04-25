import Image from "next/image";
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
          {projects.map((project) => (
            <li
              key={project.id}
              className="overflow-hidden rounded-2xl border border-line bg-raised shadow-sm"
            >
              <div className="relative aspect-video w-full bg-card-img-bg">
                <Image
                  src={publicAsset(project.imageSrc)}
                  alt={`Captura del proyecto ${project.id}`}
                  fill
                  sizes="(min-width: 640px) 45vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="border-t border-line p-4">
                <p className="text-sm leading-relaxed text-ink-muted">
                  {project.description}
                </p>
                <div className="mt-4 flex flex-wrap gap-3 text-sm font-medium">
                  <a
                    href={project.gitHubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full bg-accent px-3 py-1.5 text-[#010000] transition hover:opacity-90"
                  >
                    GitHub
                  </a>
                  <a
                    href={project.deployLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-full border border-line px-3 py-1.5 text-ink transition hover:bg-subtle dark:hover:bg-raised"
                  >
                    {visitSiteLabel}
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
