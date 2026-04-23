import Image from "next/image";
import type { Technology } from "@/lib/portfolio-types";

type TechnologiesSectionProps = {
  title: string;
  description: string;
  technologies: Technology[];
};

export function TechnologiesSection({
  title,
  description,
  technologies,
}: TechnologiesSectionProps) {
  const loopedTechnologies = [...technologies, ...technologies];

  return (
    <section
      id="tecnologias"
      className="scroll-mt-24 py-16 md:py-20"
      aria-labelledby="tecnologias-heading"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2
          id="tecnologias-heading"
          className="text-2xl font-semibold tracking-tight text-ink"
        >
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-muted">
          {description}
        </p>
        <div className="mt-10 rounded-2xl bg-panel px-4 py-10 md:px-6 md:py-12">
          <div className="tech-carousel-fade mx-auto max-w-4xl overflow-hidden">
            <ul className="tech-carousel-track flex w-max items-center gap-6 md:gap-8">
              {loopedTechnologies.map((tech, index) => (
              <li
                key={`${tech.name}-${index}`}
                className="flex min-w-[7rem] flex-col items-center gap-2 text-center"
              >
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-page p-3 shadow-sm ring-1 ring-line/50 transition-transform duration-300 ease-out hover:scale-[1.15]">
                  <Image
                    src={tech.imageSrc}
                    alt={`Icono de ${tech.name}`}
                    width={64}
                    height={64}
                    className="h-14 w-14 object-contain"
                  />
                </div>
                <span className="text-xs font-medium text-panel-ink/90">
                  {tech.name}
                </span>
              </li>
            ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
