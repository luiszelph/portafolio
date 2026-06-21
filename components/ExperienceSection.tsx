"use client";

import Image from "next/image";
import { useEffect, useId, useRef, useState } from "react";
import { publicAsset } from "@/lib/public-asset";
import type { Experience } from "@/lib/portafolio-types";

type ExperienceSectionProps = {
  title: string;
  description: string;
  experiences: Experience[];
  ui: {
    hint: string;
    currentBadge: string;
  };
};

function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 20 20"
      fill="currentColor"
      className={`mt-1 h-5 w-5 shrink-0 text-ink-muted transition-transform duration-200 ${open ? "rotate-180" : ""}`}
    >
      <path
        fillRule="evenodd"
        d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.25a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
        clipRule="evenodd"
      />
    </svg>
  );
}

type ExperienceItemProps = {
  job: Experience;
  index: number;
  sectionId: string;
  currentBadge: string;
  isFirst: boolean;
};

function ExperienceItem({
  job,
  index,
  sectionId,
  currentBadge,
  isFirst,
}: ExperienceItemProps) {
  const itemRef = useRef<HTMLLIElement>(null);
  const [isVisible, setIsVisible] = useState(isFirst);
  const [isOpen, setIsOpen] = useState(isFirst);

  useEffect(() => {
    if (isFirst) return;

    const element = itemRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -5% 0px" },
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [isFirst]);

  const toggleJob = () => {
    if (!isVisible) return;
    setIsOpen((current) => !current);
  };

  const panelId = `${sectionId}-${job.id}-panel`;

  return (
    <li
      ref={itemRef}
      className={`relative pl-8 transition-all duration-500 ease-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-6 opacity-0"
      }`}
    >
      <span
        aria-hidden
        className={`absolute top-[1.35rem] left-0 z-10 h-2.5 w-2.5 -translate-x-1/2 rounded-full ring-4 ring-subtle transition-colors duration-500 ${
          isVisible ? "bg-accent" : "bg-line"
        }`}
      />

      <article className="overflow-hidden rounded-2xl border border-line bg-raised shadow-sm transition-shadow hover:shadow-md">
        <button
          type="button"
          id={`${sectionId}-${job.id}-trigger`}
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={toggleJob}
          className="flex w-full items-start gap-3 p-4 text-left transition-colors hover:bg-subtle/60 md:gap-4 md:p-5"
        >
          <div className="relative mt-0.5 h-10 w-10 shrink-0 overflow-hidden rounded-lg border border-line bg-card-img-bg md:h-11 md:w-11">
            <Image
              src={publicAsset(job.imageSrc)}
              alt={`Logo de ${job.name}`}
              width={44}
              height={44}
              className="h-full w-full object-contain p-1.5"
            />
          </div>

          <div className="min-w-0 flex-1">
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
              <span className="text-xs font-semibold tabular-nums text-ink-muted">
                {index + 1}.
              </span>
              <h3 className="text-base font-semibold text-ink">{job.name}</h3>
              {job.isCurrent ? (
                <span className="rounded-full bg-accent/20 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-accent ring-1 ring-accent/30">
                  {currentBadge}
                </span>
              ) : null}
            </div>
            <p className="mt-0.5 text-sm font-medium text-ink-muted">
              {job.role}
            </p>
            <p className="mt-0.5 text-xs tracking-wide text-ink-muted/90">
              {job.period}
              {job.sector ? ` · ${job.sector}` : ""}
            </p>
          </div>

          <ChevronIcon open={isOpen} />
        </button>

        <div
          id={panelId}
          role="region"
          aria-labelledby={`${sectionId}-${job.id}-trigger`}
          className={`grid transition-[grid-template-rows] duration-300 ease-out ${isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
        >
          <div className="overflow-hidden">
            <div className="border-t border-line px-4 pb-5 pt-4 md:px-5 md:pb-6 md:pl-[4.25rem]">
              <ul className="list-disc space-y-2 pl-5 text-sm leading-relaxed text-ink-muted">
                {job.highlights.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
              <p className="mt-4 text-sm font-medium leading-relaxed text-ink">
                {job.impact}
              </p>
              {job.technologies && job.technologies.length > 0 ? (
                <div className="mt-4 flex flex-wrap gap-2">
                  {job.technologies.map((technology) => (
                    <span
                      key={technology}
                      className="rounded-full bg-accent/15 px-2.5 py-1 text-xs font-medium text-accent ring-1 ring-accent/25"
                    >
                      {technology}
                    </span>
                  ))}
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </article>
    </li>
  );
}

export function ExperienceSection({
  title,
  description,
  experiences,
  ui,
}: ExperienceSectionProps) {
  const sectionId = useId();

  return (
    <section
      id="experiencia"
      className="scroll-mt-24 border-y border-line bg-subtle py-16 md:py-20"
      aria-labelledby="experiencia-heading"
    >
      <div className="mx-auto max-w-3xl px-4 md:px-6">
        <h2
          id="experiencia-heading"
          className="text-2xl font-semibold tracking-tight text-ink"
        >
          {title}
        </h2>
        <p className="mt-2 max-w-2xl text-sm text-ink-muted">{description}</p>
        <p className="mt-1 text-xs text-ink-muted/90">{ui.hint}</p>

        <ol className="relative mt-10 space-y-3 before:absolute before:top-3 before:bottom-3 before:left-[7px] before:w-px before:bg-line">
          {experiences.map((job, index) => (
            <ExperienceItem
              key={job.id}
              job={job}
              index={index}
              sectionId={sectionId}
              currentBadge={ui.currentBadge}
              isFirst={index === 0}
            />
          ))}
        </ol>
      </div>
    </section>
  );
}
