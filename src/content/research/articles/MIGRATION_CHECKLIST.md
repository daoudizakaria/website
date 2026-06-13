# Legacy research articles → Markdown migration checklist

Use this when moving a post from `src/portfolio.js` (`articles.data`) into
`src/content/research/articles/*.md`. **Migrate one article at a time.**

---

## 1. Inventory (current `articles.data` — do not bulk delete)

| `id` (slug / URL segment)       | `name` (title)                    | `createdAt`            | `description` (list teaser)                                                        | `resume` |
| ------------------------------- | --------------------------------- | ---------------------- | ---------------------------------------------------------------------------------- | -------- |
| `string-theory-quantum-gravity` | String Theory and Quantum Gravity | `2023-07-02T00:00:00Z` | An introduction to string theory and its implications for quantum gravity.         | `""`     |
| `foundations-quantum-mechanics` | Foundations of Quantum Mechanics  | `2023-09-19T00:00:00Z` | A deep dive into the principles underlying quantum theory and its interpretations. | `""`     |
| `gre-math-worksheets`           | GRE Math Worksheets               | `2023-10-12T00:00:00Z` | Practice problems and solutions for the GRE mathematics section.                   | `""`     |

**`content` today:** multi-line **placeholder** prose in each entry (plain text with newlines; not yet full Markdown). **`articlesHeader`** (list page title/description) stays in `portfolio.js` until you choose to move it elsewhere.

---

## 2. Per-article checklist (copy for each migration)

- [ ] **Choose one** `id` from the table above (only one per PR/session recommended).
- [ ] Copy `article-template.md.example` → **`{id}.md`** (filename should mirror `slug` for clarity, e.g. `string-theory-quantum-gravity.md`).
- [ ] Set frontmatter:
  - [ ] **`slug`:** must **exactly equal** the legacy `id` (keeps `/research/{slug}` and old links working).
  - [ ] **`title`:** same as legacy `name`.
  - [ ] **`date`:** same calendar day as legacy `createdAt` (YYYY-MM-DD is fine).
  - [ ] **`summary`:** same meaning as legacy `description` (card text on `/research`).
  - [ ] **`tags`:** YAML list; optional but useful for your own notes.
  - [ ] **`resume`:** same as legacy `resume` (optional URL string, or `""`).
- [ ] Move body text from legacy `content` into the Markdown body; convert formatting to proper Markdown (`##` headings, lists, math delimiters, etc.).
- [ ] **`researchContent.js`:** add `import ... from "./articles/{id}.md"` and append `{ label: "{id}.md", raw: ... }` to **`MARKDOWN_RAW_FILES`**.
- [ ] Run **`npm start`** (with **Node 18 or 20** if your toolchain requires it).
- [ ] **Verify:** `/research` shows one Markdown-backed card; `/research/{slug}` renders body + math if any.
- [ ] **Optional:** compare side-by-side with staging / backup before removing legacy row.
- [ ] **Only when happy:** remove **that single object** from `articles.data` in `portfolio.js` (so the Markdown article is the only source; list deduping already hides legacy if slug collides, but removing avoids confusion).

---

## 3. Safety rules

1. **Never change `slug`** for a live URL unless you intentionally add redirects (out of scope here).
2. **Markdown wins** over `portfolio.js` when `slug` matches an existing `id` — migrate one article, register `.md`, then remove the legacy row so you do not rely on “hidden” duplicates.
3. **`markdown-katex-sample.md`** is a demo; keep it or delete it and its `MARKDOWN_RAW_FILES` entry when you no longer need it.
4. Do not edit `Main.js`, `Header.js`, or card CSS as part of migration unless you are fixing a bug.

---

## 4. Files involved

| File                                      | Role                                             |
| ----------------------------------------- | ------------------------------------------------ |
| `src/portfolio.js`                        | Legacy `articles.data` until each row is removed |
| `src/content/research/articles/*.md`      | Source of truth after migration                  |
| `src/content/research/researchContent.js` | Imports `.md` bundles + merge with legacy        |
| `article-template.md.example`             | Starting point for new `.md` files               |

---

## 5. After all articles are migrated

- Remove the empty `articles.data` array (or leave one stub) and any dead `articles` export usage — optional cleanup pass.
- Consider renaming list copy in `articlesHeader` in `portfolio.js` if “Blog Articles” should read “Research” everywhere (content change, not routing).
