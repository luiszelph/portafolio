"use client";

import { useTheme } from "@/components/ThemeProvider";

type ThemeToggleProps = {
  language: "es" | "en";
};

export function ThemeToggle({ language }: ThemeToggleProps) {
  const { resolvedTheme, setTheme } = useTheme();
  const ready = resolvedTheme !== undefined;
  const isDark = resolvedTheme === "dark";
  const texts =
    language === "en"
      ? {
          switchToLight: "Switch to light mode",
          switchToDark: "Switch to dark mode",
          loading: "Loading theme switch",
          darkActive: "Dark mode active",
          lightActive: "Light mode active",
          themeSwitcher: "Theme switcher",
        }
      : {
          switchToLight: "Cambiar a modo claro",
          switchToDark: "Cambiar a modo oscuro",
          loading: "Cargando selector de tema",
          darkActive: "Modo oscuro activo",
          lightActive: "Modo claro activo",
          themeSwitcher: "Selector de tema",
        };

  return (
    <button
      type="button"
      role="switch"
      aria-checked={isDark}
      aria-label={
        ready
          ? isDark
            ? texts.switchToLight
            : texts.switchToDark
          : texts.loading
      }
      disabled={!ready}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="relative inline-flex h-8 w-[3.25rem] shrink-0 items-center rounded-full border border-line bg-subtle p-px transition hover:border-line-strong focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent disabled:cursor-wait disabled:opacity-50 dark:bg-raised"
    >
      <span
        className={`pointer-events-none absolute top-px flex h-[1.875rem] w-[1.875rem] items-center justify-center rounded-full bg-page shadow-sm ring-1 ring-line transition-[left] duration-200 ease-out ${
          isDark ? "left-[calc(100%-1.9375rem)]" : "left-0.5"
        }`}
        aria-hidden
      >
        {ready && isDark ? (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-accent"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
          </svg>
        ) : (
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            className="text-accent"
          >
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M6.34 17.66l-1.41 1.41M19.07 4.93l-1.41 1.41" />
          </svg>
        )}
      </span>
      <span className="sr-only">
        {ready
          ? isDark
            ? texts.darkActive
            : texts.lightActive
          : texts.themeSwitcher}
      </span>
    </button>
  );
}
