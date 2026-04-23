import Image from "next/image";
import type { HeroData } from "@/lib/portfolio-types";

type HeroProfileProps = {
  hero: HeroData;
};

export function HeroProfile({ hero }: HeroProfileProps) {
  return (
    <section
      id="inicio"
      className="scroll-mt-24 border-b border-line bg-subtle py-16"
    >
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-10 px-4 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="max-w-xl text-center md:text-left">
          <p className="text-sm font-medium uppercase tracking-wide text-ink-muted">
            {hero.kicker}
          </p>
          <h1 className="mt-3 text-balance text-3xl font-semibold leading-tight text-ink md:text-4xl">
            {hero.headline}
          </h1>
        </div>
        <div className="relative shrink-0">
          <div className="absolute -inset-1 rounded-3xl bg-gradient-to-tr from-hero-glow-from to-hero-glow-to opacity-70 blur dark:opacity-90" />
          <Image
            src={hero.imageSrc}
            alt={hero.imageAlt}
            width={320}
            height={320}
            priority
            className="relative h-[280px] w-[280px] rounded-3xl object-cover shadow-lg ring-1 ring-line/40 md:h-[320px] md:w-[320px] dark:ring-line/60"
          />
        </div>
      </div>
    </section>
  );
}
