# Decap CMS

Research articles and projects can be added and edited at **`/admin`**. Saved files are written to `src/content/research/articles/*.md` and `src/content/projects/*.md` and are picked up on the next build.

## Research article fields

| Editor label  | Front matter | Purpose                                            |
| ------------- | ------------ | -------------------------------------------------- |
| Title         | `title`      | Article headline                                   |
| URL           | `slug`       | Public path `/research/<slug>`                     |
| Publish date  | `date`       | Publication date (defaults to today)               |
| Short summary | `summary`    | Card text on `/research`                           |
| Article       | body         | Markdown with KaTeX (`$…$`, `$$…$$`) and images    |
| Overview      | `overview`   | Optional summary, key results and figure           |
| Paper PDF     | `resume`     | Optional PDF; a download link is shown on the page |
| Tags          | `tags`       | Optional topic list (not displayed at present)     |

Project fields are listed in `config.yml` (`projects` collection); they include the category, type, year, card thumbnail, "At a glance" rows and up to four headline numbers.

## Local editing

```bash
npm run cms:dev    # terminal 1: local Git proxy on :8081
npm start          # terminal 2: open http://localhost:3000/admin
```

On localhost, `admin/index.html` enables `local_backend` automatically, so no GitHub login is needed.

## Production login

The site uses the GitHub backend. GitHub OAuth needs a small proxy because the admin runs in the browser; the worker in `workers/decap-oauth/` provides it.

1. Create a [GitHub OAuth App](https://github.com/settings/developers) with homepage `https://www.zakariadaoudi.com` and callback `https://<oauth-proxy>/callback`.
2. Deploy the proxy and set `base_url` and `auth_endpoint` under `backend` in `config.yml`.
3. The GitHub account used to log in needs write access to `daoudizakaria/website`.

## Publishing

The CMS commits Markdown files to `main`; each push to `main` triggers the GitHub Pages deployment workflow.

## Maths in the editor preview

The admin preview uses Marked and KaTeX with the same delimiters as the site: `$inline$` and `$$display$$`.
