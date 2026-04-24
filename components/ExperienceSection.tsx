import Image from "next/image";
import { publicAsset } from "@/lib/public-asset";
import type { Experience } from "@/lib/portfolio-types";

type ExperienceSectionProps = {
  title: string;
  description: string;
  experiences: Experience[];
};

export function ExperienceSection({
  title,
  description,
  experiences,
}: ExperienceSectionProps) {
  return (
    <section
      id="experiencia"
      className="scroll-mt-24 border-y border-line bg-subtle py-16 md:py-20"
      aria-labelledby="experiencia-heading"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2
          id="experiencia-heading"
          className="text-2xl font-semibold tracking-tight text-ink"
        >
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-muted">
          {description}
        </p>
        <ul className="mt-10 grid gap-6 md:grid-cols-2">
          {experiences.map((job) => (
            <li
              key={job.id}
              className="group relative overflow-hidden rounded-2xl border border-line bg-raised shadow-sm"
            >
              <div className="flex h-full flex-col sm:flex-row">
                <div className="relative h-44 w-full bg-card-img-bg sm:h-auto sm:w-44 sm:min-w-44">
                  <Image
                    src={publicAsset(job.imageSrc)}
                    alt={`Logo o imagen de ${job.name}`}
                    fill
                    sizes="(min-width: 768px) 176px, 100vw"
                    className="object-contain p-6 transition duration-300 group-hover:scale-[1.02]"
                  />
              </div>
                <div className="border-t border-line p-4 sm:flex-1 sm:border-l sm:border-t-0 sm:p-5">
                  <h3 className="text-base font-semibold text-ink">{job.name}</h3>
                  <p className="mt-1 text-sm font-medium text-ink-muted">{job.role}</p>
                  <p className="mt-1 text-xs font-medium tracking-wide text-ink-muted/90">
                    {job.period}
                  </p>
                  <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted">
                    {job.highlights.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <p className="mt-4 text-sm font-medium leading-relaxed text-ink">
                    {job.impact}
                  </p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
