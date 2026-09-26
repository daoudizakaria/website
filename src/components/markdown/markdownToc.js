/**
 * Table-of-contents helpers shared by MarkdownContent (heading anchor ids)
 * and ArticleDetail (sidebar). Keeping both on the same slugify function is
 * what makes the sidebar links land on the right headings.
 */

/** "2.3 Entropy & the Maximum-Entropy Principle" -> "23-entropy-the-maximum-entropy-principle" */
export function slugifyHeading(text) {
  return String(text)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-")
    .replace(/^-|-$/g, "");
}

/** Flatten react-markdown heading children (strings/elements) to plain text. */
export function childrenToText(node) {
  if (node == null) return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(childrenToText).join("");
  if (typeof node === "object" && node.props && node.props.children) {
    return childrenToText(node.props.children);
  }
  return "";
}

/**
 * Extract h2–h4 headings from raw markdown (fenced code blocks skipped).
 * @returns {Array<{level: number, text: string, id: string}>}
 */
export function extractToc(markdown) {
  if (!markdown) return [];
  const toc = [];
  let inFence = false;
  for (const line of String(markdown).split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;
    const m = line.match(/^\s{0,3}(#{2,4})\s+(.+?)\s*#*\s*$/);
    if (!m) continue;
    const text = m[2]
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .trim();
    if (!text) continue;
    toc.push({ level: m[1].length, text, id: slugifyHeading(text) });
  }
  return toc;
}
