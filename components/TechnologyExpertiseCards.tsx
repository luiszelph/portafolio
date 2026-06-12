import type { TechnologyExpertise } from "@/lib/portafolio-types";

type TechnologyExpertiseCardsProps = {
  items: TechnologyExpertise[];
};

export function TechnologyExpertiseCards({
  items,
}: TechnologyExpertiseCardsProps) {
  return (
    <div className="mt-10 grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <article
          key={item.title}
          className="rounded-2xl border border-line bg-raised p-5 shadow-sm"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
            <h3 className="text-base font-semibold text-ink">{item.title}</h3>
            <span className="w-fit rounded-full border border-line bg-subtle px-3 py-1 text-xs font-medium text-ink-muted">
              {item.level}
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            {item.technologies.map((technology) => (
              <span
                key={technology}
                className="rounded-full bg-accent/15 px-3 py-1 text-xs font-medium text-accent ring-1 ring-accent/25"
              >
                {technology}
              </span>
            ))}
          </div>
          <p className="mt-4 text-sm leading-relaxed text-ink-muted">
            {item.description}
          </p>
        </article>
      ))}
    </div>
  );
}
