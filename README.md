# zakariadaoudi.com — portfolio website

Personal portfolio of **Zakaria Daoudi** — physicist, data scientist, and
scientific writer. React single-page app deployed to GitHub Pages.

- **Live site:** https://zakariadaoudi.com (the old address, daoudizakaria.github.io/website, redirects here)
- **Sandbox repo:** [`website-test`](https://github.com/daoudizakaria/website-test) —
  all restructuring/experiments land there first; the live repo only receives
  reviewed changes.

## Stack

Create React App 5 (via CRACO) · React 18 · React Router 5 ·
styled-components (theming) · Decap CMS (research articles) ·
KaTeX + react-markdown (article rendering).

## Where things live

| Path                                                 | What it is                                                                                                                                              |
| ---------------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `src/data/`                                          | **All site content**, one file per section (seo, greeting, skills, education, experience, projects, contact…). Edit these to change what the site says. |
| `src/portfolio.js`                                   | Barrel that re-exports `src/data/*` — kept so old imports keep working. Don't add content here.                                                         |
| `src/content/projects/*.md`                          | Projects — one Markdown file per project page (same front-matter pattern as articles, plus `category`, `repo`, `paper`, `featured`).                    |
| `src/content/research/articles/*.md`                 | Research articles — **single source of truth**. One markdown file per article (frontmatter: `slug`, `title`, `date`, `summary`, `resume`, `tags`).      |
| `src/content/research/researchContent.js`            | Article façade: parses the markdown, exposes list/lookup + legacy URL redirects.                                                                        |
| `src/pages/` · `src/containers/` · `src/components/` | Routed pages, their section blocks, and shared UI.                                                                                                      |
| `src/theme.js`                                       | Color themes; `chosenTheme` picks the active one.                                                                                                       |
| `public/admin/`                                      | Decap CMS admin (see below).                                                                                                                            |

## Build notes

- Markdown front matter is parsed at **build time** by
  `scripts/markdown-frontmatter-loader.js`; the browser never ships a YAML
  parser. Edit the `.md` files and rebuild.
- The splash scene is chosen in `src/data/settings.js` (`splashScene`).
- Light/dark palettes: tokens in `src/index.css` (`:root` and
  `:root[data-theme="light"]`) plus `blueTheme` / `lightTheme` in
  `src/theme.js`.

## Develop

Requires Node 20 (`nvm use 20`).

```bash
npm ci        # install
npm start     # dev server → http://localhost:3000/
npm run build # production build into build/ (not committed)
```

## Writing research articles

Option A — edit markdown directly in `src/content/research/articles/`
(copy `article-template.md.example`).

Option B — local CMS editor (no GitHub login needed):

```bash
npm run cms:dev   # terminal 1 — local git proxy on :8081
npm start         # terminal 2
```

then open http://localhost:3000/admin/ — on localhost the admin
automatically uses the local backend and saves straight to your working
tree. Review with `git diff`, then commit.

> The production admin's GitHub OAuth proxy is currently broken/unreachable
> (see `public/admin/DECAP_CMS_SETUP.md` for how to deploy a replacement).

## Deploy

Pushing to `main` of the **live repo** triggers
`.github/workflows/deploy-pages.yml`, which builds and publishes to GitHub
Pages automatically. Do not use `npm run deploy` (legacy gh-pages path).
On `website-test` the deploy workflow is disabled; `build-check.yml`
verifies every push instead.

## Known state / gotchas

- `www.zakariadaoudi.com` has no DNS records yet — the site is only
  reachable at the github.io URL. `public/404.html` is configured for the
  `/website/` project path (`pathSegmentsToKeep = 1`); if the custom domain
  ever goes live at the root, set it back to `0`.
- The site is served under `/website/` in both dev and production
  (`homepage` in package.json); router `basename` follows `PUBLIC_URL`.
