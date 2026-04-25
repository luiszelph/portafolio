"use client";

import { useCallback, useState } from "react";
import { ThemeToggle } from "@/components/ThemeToggle";
import type { NavLink, PortafolioData } from "@/lib/portafolio-types";

type PortafolioNavProps = {
  navLinks: NavLink[];
  labels: PortafolioData["labels"];
  language: PortafolioData["lang"];
  onLanguageChange: (language: PortafolioData["lang"]) => void;
};

export function PortafolioNav({
  navLinks,
  labels,
  language,
  onLanguageChange,
}: PortafolioNavProps) {
  const [open, setOpen] = useState(false);

  const close = useCallback(() => setOpen(false), []);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-nav-bg backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 md:gap-4 md:px-6">
        <a
          href="#inicio"
          className="text-sm font-semibold tracking-tight text-ink"
          onClick={close}
        >
          Luis Zelph
        </a>

        <div className="flex flex-1 items-center justify-end gap-2 md:gap-4">
          <nav
            className="hidden flex-1 items-center justify-center gap-8 md:flex"
            aria-label={labels.mainNav}
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-ink-muted transition-colors hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <label className="sr-only" htmlFor="language-select">
            {labels.language}
          </label>
          <select
            id="language-select"
            value={language}
            onChange={(event) =>
              onLanguageChange(event.target.value as PortafolioData["lang"])
            }
            className="h-8 rounded-md border border-line bg-page px-2 text-sm text-ink focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
            aria-label={labels.language}
          >
            <option value="es">Español</option>
            <option value="en">English</option>
          </select>

          <ThemeToggle language={language} />

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md border border-line p-2 text-ink transition hover:bg-subtle md:hidden dark:hover:bg-raised"
            aria-expanded={open}
            aria-controls="portafolio-mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">
              {open ? labels.closeMenu : labels.openMenu}
            </span>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden
            >
              {open ? (
                <>
                  <path d="M18 6 6 18" />
                  <path d="m6 6 12 12" />
                </>
              ) : (
                <>
                  <path d="M4 7h16" />
                  <path d="M4 12h16" />
                  <path d="M4 17h16" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <div
          id="portafolio-mobile-menu"
          className="border-t border-line bg-page px-4 py-3 md:hidden"
        >
          <nav className="flex flex-col gap-2" aria-label={labels.mobileNav}>
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-md px-2 py-2 text-sm font-medium text-ink-muted transition hover:bg-subtle hover:text-ink dark:hover:bg-raised"
                onClick={close}
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      ) : null}
    </header>
  );
}
