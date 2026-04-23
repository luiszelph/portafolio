import type { AboutData } from "@/lib/portfolio-types";

type AboutSectionProps = {
  about: AboutData;
  title: string;
};

export function AboutSection({ about, title }: AboutSectionProps) {
  return (
    <section
      id="sobre-mi"
      className="scroll-mt-24 py-16 md:py-20"
      aria-labelledby="sobre-mi-heading"
    >
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h2
          id="sobre-mi-heading"
          className="text-2xl font-semibold tracking-tight text-ink"
        >
          {title}
        </h2>
        <div className="mt-8 rounded-2xl bg-panel px-6 py-8 shadow-sm md:px-10 md:py-10">
          <div className="space-y-6 text-pretty text-base leading-relaxed text-panel-ink/95 md:text-lg">
            <p>
              {about.body}
              <br />
              {about.body2}
            </p>
            <p>{about.body3}</p>
            <p>{about.body4}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
