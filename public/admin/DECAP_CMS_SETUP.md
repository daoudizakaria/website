# Decap CMS — Research articles

Zakaria can add and edit research articles at **`/admin`** without touching code. Saved files land in `src/content/research/articles/*.md` and are picked up automatically on the next site build.

## Editor fields (logical order)

| Editor label  | Frontmatter | Purpose                                               |
| ------------- | ----------- | ----------------------------------------------------- |
| Title         | `title`     | Article headline                                      |
| URL           | `slug`      | Public path `/research/<slug>`                        |
| Publish date  | `date`      | Publication date (defaults to today)                  |
| Short summary | `summary`   | Card text on `/research`                              |
| Article       | body        | Markdown + KaTeX (`$…$`, `$$…$$`) + images            |
| Paper PDF     | `resume`    | Optional PDF upload / URL — download link on the page |
| Tags          | `tags`      | Optional topic list                                   |

New articles start with today’s date and a short Markdown outline in **Article**.

## Local editing (no GitHub login)

```bash
npm run cms:dev    # Terminal 1 — local Git proxy on :8081
npm start          # Terminal 2 — open http://localhost:3000/admin
```

Uncomment `local_backend: true` in `config.yml` while using `decap-server` on localhost.

## Production — GitHub login (GitHub Pages)

The site uses the **GitHub backend** (not Git Gateway). GitHub OAuth requires a small proxy because the admin runs in the browser.

1. Create a [GitHub OAuth App](https://github.com/settings/developers):

   - **Homepage URL:** `https://www.zakariadaoudi.com`
   - **Callback URL:** `https://<your-oauth-proxy>/callback` (from your proxy’s docs)

2. Deploy an OAuth proxy (pick one):

   - [decap-cms-github-oauth-provider-cloudflare](https://github.com/ottmartens/decap-cms-github-oauth-provider-cloudflare) (Cloudflare Worker)
   - [netlify-cms-github-oauth-provider](https://github.com/vencax/netlify-cms-github-oauth-provider) (Node / Vercel)

3. In `public/admin/config.yml`, set:

   ```yaml
   backend:
     name: github
     repo: daoudizakaria/website
     branch: main
     base_url: https://your-oauth-proxy.example.com
     auth_endpoint: auth
   ```

4. Rebuild and deploy. Open `https://www.zakariadaoudi.com/admin` and click **Login with GitHub**.

Zakaria’s GitHub account needs **write access** to `daoudizakaria/website`.

## Tags

`tags` are parsed into article data in `researchContent.js` but **are not rendered** on Research cards, article pages, search, or SEO today. Keep the field for future filtering/search — remove from the editor only if you are sure you will not need them.

- Images: use the **image** control in the Article editor, or Media in the sidebar. Formats: PNG, JPG, WebP, GIF (stored under `/uploads/research`).
- PDFs: use **Paper PDF**. When set, the article page shows a download control automatically.

## After publishing in the CMS

CMS commits `.md` files to the repo. Trigger a new GitHub Pages deploy (`npm run deploy` or CI) so the live site shows the new article.

## Math in the editor preview

The admin preview uses Marked + KaTeX (same delimiters as the public site). Use `$inline$` and `$$display$$` in the Article field.
