import { useEffect, useState } from "react";

/** Bodies already fetched, by page: navigating back does not refetch. */
const cache = new Map();

/**
 * Load the Markdown body of an article or project on demand.
 *
 * @param {{id: string, loadBody?: () => Promise<string>} | undefined} item
 * @returns {{ body: string, loading: boolean }}
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
    item.loadBody().then((text) => {
      const t = typeof text === "string" ? text.trim() : "";
      cache.set(item.id, t);
      if (alive) setBody(t);
    });
    return () => {
      alive = false;
    };
  }, [item]);

  return {
    body: body || "",
    loading: Boolean(item && item.loadBody) && body === null,
  };
}
