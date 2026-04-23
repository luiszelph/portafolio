"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react";
import { PREFERS_COLOR_SCHEME_DARK_MEDIA } from "@/lib/browser-color-scheme";

const STORAGE_KEY = "theme";

type Theme = "light" | "dark" | "system";

type ThemeContextValue = {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  /** `undefined` hasta sincronizar con `localStorage` en el cliente. */
  resolvedTheme: "light" | "dark" | undefined;
};

const ThemeContext = createContext<ThemeContextValue | null>(null);

/** Tema que el navegador indica con `prefers-color-scheme` (ajuste del sistema o del navegador). */
function getBrowserPreferredColorScheme(): "light" | "dark" {
  return window.matchMedia(PREFERS_COLOR_SCHEME_DARK_MEDIA).matches
    ? "dark"
    : "light";
}

function resolveTheme(theme: Theme): "light" | "dark" {
  return theme === "system" ? getBrowserPreferredColorScheme() : theme;
}

function applyResolved(resolved: "light" | "dark") {
  const root = document.documentElement;
  root.classList.remove("light", "dark");
  root.classList.add(resolved);
  root.style.colorScheme = resolved;
}

type ThemeProviderProps = {
  children: React.ReactNode;
};

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setThemeState] = useState<Theme>("system");
  const [resolvedTheme, setResolvedTheme] = useState<
    "light" | "dark" | undefined
  >(undefined);

  const persistAndApply = useCallback((next: Theme) => {
    const resolved = resolveTheme(next);
    applyResolved(resolved);
    setResolvedTheme(resolved);
    setThemeState(next);
    try {
      localStorage.setItem(STORAGE_KEY, next);
    } catch {
      /* private mode u otro bloqueo */
    }
  }, []);

  useEffect(() => {
    queueMicrotask(() => {
      let stored: Theme = "system";
      try {
        const raw = localStorage.getItem(STORAGE_KEY);
        if (raw === "light" || raw === "dark" || raw === "system") {
          stored = raw;
        }
      } catch {
        /* ignore */
      }
      const resolved = resolveTheme(stored);
      applyResolved(resolved);
      setThemeState(stored);
      setResolvedTheme(resolved);
    });
  }, []);

  useEffect(() => {
    if (theme !== "system") return;
    const mq = window.matchMedia(PREFERS_COLOR_SCHEME_DARK_MEDIA);
    const onChange = () => {
      const resolved = getBrowserPreferredColorScheme();
      applyResolved(resolved);
      setResolvedTheme(resolved);
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [theme]);

  const setTheme = useCallback(
    (next: Theme) => {
      persistAndApply(next);
    },
    [persistAndApply],
  );

  const value = useMemo(
    () => ({ theme, setTheme, resolvedTheme }),
    [theme, setTheme, resolvedTheme],
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

/** Compatible con el patrón de `next-themes` usado en el portafolio. */
export function useTheme(): {
  theme?: Theme;
  setTheme: (theme: string) => void;
  resolvedTheme?: "light" | "dark";
} {
  const ctx = useContext(ThemeContext);
  if (!ctx) {
    return { setTheme: () => {} };
  }
  return {
    theme: ctx.theme,
    setTheme: (t: string) => {
      if (t === "light" || t === "dark" || t === "system") {
        ctx.setTheme(t);
      }
    },
    resolvedTheme: ctx.resolvedTheme,
  };
}
