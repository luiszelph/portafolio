"use client";

import { useCallback, useEffect, useState } from "react";
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
  const [activeHref, setActiveHref] = useState(navLinks[0]?.href ?? "#inicio");

  const close = useCallback(() => setOpen(false), []);
  const getDesktopLinkClassName = (href: string) =>
    `rounded-full px-2.5 py-1 text-sm font-medium transition-colors hover:text-accent ${
      activeHref === href
        ? "bg-accent/15 text-accent ring-1 ring-accent/30"
        : "text-ink-muted"
    }`;
  const getMobileLinkClassName = (href: string) =>
    `rounded-md px-2 py-2 text-sm font-medium transition hover:bg-subtle dark:hover:bg-raised ${
      activeHref === href
        ? "bg-accent/15 text-accent ring-1 ring-accent/30"
        : "text-ink-muted hover:text-ink"
    }`;
  const handleNavClick = useCallback((href: string) => {
    setActiveHref(href);
    close();
  }, [close]);

  useEffect(() => {
    const sectionIds = navLinks
      .map((link) => link.href)
      .filter((href) => href.startsWith("#"))
      .map((href) => href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((section): section is HTMLElement => Boolean(section));

    if (!sections.length) {
      return;
    }

    let animationFrameId: number | null = null;
    const knownHrefs = new Set(sectionIds.map((id) => `#${id}`));

    const updateActiveSection = () => {
      const navHeight = document.querySelector("header")?.clientHeight ?? 64;
      const activationPoint = navHeight + 24;
      const bottomOffset = window.scrollY + window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      let currentSection = sections[0];

      for (const section of sections) {
        const rect = section.getBoundingClientRect();

        if (rect.top <= activationPoint && rect.bottom > activationPoint) {
          currentSection = section;
          break;
        }

        if (rect.top <= activationPoint) {
          currentSection = section;
        }
      }

      if (bottomOffset >= documentHeight - 8) {
        currentSection = sections[sections.length - 1];
      }

      setActiveHref(`#${currentSection.id}`);
    };

    const updateActiveHash = () => {
      const hash = window.location.hash;

      if (knownHrefs.has(hash)) {
        setActiveHref(hash);
      }

      scheduleUpdate();
    };

    const scheduleUpdate = () => {
      if (animationFrameId !== null) {
        return;
      }

      animationFrameId = window.requestAnimationFrame(() => {
        animationFrameId = null;
        updateActiveSection();
      });
    };

    updateActiveSection();
    updateActiveHash();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);
    window.addEventListener("hashchange", updateActiveHash);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);
      window.removeEventListener("hashchange", updateActiveHash);

      if (animationFrameId !== null) {
        window.cancelAnimationFrame(animationFrameId);
      }
    };
  }, [navLinks]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-nav-bg backdrop-blur-md">
      <div className="mx-auto flex max-w-5xl items-center justify-between gap-3 px-4 py-3 md:gap-4 md:px-6">
        <a
          href="#inicio"
          className="text-sm font-semibold tracking-tight text-ink"
          onClick={() => handleNavClick("#inicio")}
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
                className={getDesktopLinkClassName(link.href)}
                aria-current={activeHref === link.href ? "page" : undefined}
                onClick={() => handleNavClick(link.href)}
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
            <option value="en">English</option>
            <option value="es">Español</option>
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
                className={getMobileLinkClassName(link.href)}
                aria-current={activeHref === link.href ? "page" : undefined}
                onClick={() => handleNavClick(link.href)}
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
