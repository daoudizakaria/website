import { useEffect, useState } from "react";

/** Bodies already fetched, by page: navigating back does not refetch. */
const cache = new Map();

/**
 * KaTeX faces used by most equations, fetched together with the text so
 * that a long article is laid out once rather than once per font. Rarer
 * faces load on first use.
 */
const MATH_FONTS = [
  "1em KaTeX_Main",
  "italic 1em KaTeX_Main",
  "bold 1em KaTeX_Main",
  "italic 1em KaTeX_Math",
  "1em KaTeX_Size1",
  "1em KaTeX_Size2",
  "1em KaTeX_AMS",
];
const FONT_WAIT_MS = 1500;
let mathFonts = null;

function loadMathFonts() {
  if (!mathFonts) {
    mathFonts =
      typeof document !== "undefined" && document.fonts && document.fonts.load
        ? Promise.all(
            MATH_FONTS.map((f) => document.fonts.load(f).catch(() => null))
          )
        : Promise.resolve();
  }
  // Never hold the text back for long on a slow connection.
  return Promise.race([
    mathFonts,
    new Promise((r) => setTimeout(r, FONT_WAIT_MS)),
  ]);
}

/**
 * Load the pre-rendered body of an article or project on demand.
 *
 * @param {{id: string, loadBody?: () => Promise<{html: string, toc: Array}>} | undefined} item
 * @returns {{ html: string, toc: Array, loading: boolean }}
 */
export default function useMarkdownBody(item) {
  const key = item ? item.id : null;
  const [body, setBody] = useState(() =>
    key && cache.has(key) ? cache.get(key) : null
  );

  useEffect(() => {
    if (!item || !item.loadBody) return undefined;
    if (cache.has(item.id)) {
      setBody(cache.get(item.id));
      return undefined;
    }
    let alive = true;
    setBody(null);
    const fonts = loadMathFonts();
    item
      .loadBody()
      .then((b) => {
        const value = { html: (b && b.html) || "", toc: (b && b.toc) || [] };
        return value.html.includes('class="katex"')
          ? fonts.then(() => value)
          : value;
      })
      .then((value) => {
        cache.set(item.id, value);
        if (alive) setBody(value);
      });
    return () => {
      alive = false;
    };
  }, [item]);

  return {
    html: body ? body.html : "",
    toc: body ? body.toc : [],
    loading: Boolean(item && item.loadBody) && body === null,
  };
}
