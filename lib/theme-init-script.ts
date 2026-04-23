import { PREFERS_COLOR_SCHEME_DARK_MEDIA } from "@/lib/browser-color-scheme";

/**
 * Se inyecta con `next/script` (beforeInteractive) para aplicar `light`/`dark`
 * antes del primer paint. Si `localStorage.theme` es `system` o no existe,
 * usa la misma media query que `ThemeProvider` (`prefers-color-scheme` del navegador).
 */
export const THEME_INIT_SCRIPT = `(function(){try{var k=${JSON.stringify("theme")};var s=localStorage.getItem(k);var m;var q=${JSON.stringify(PREFERS_COLOR_SCHEME_DARK_MEDIA)};if(!s||s==="system"){m=window.matchMedia(q).matches?"dark":"light"}else{m=s==="dark"?"dark":"light"}var d=document.documentElement;d.classList.remove("light","dark");d.classList.add(m);d.style.colorScheme=m}catch(e){}})();`;
