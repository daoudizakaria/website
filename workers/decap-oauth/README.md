# Decap CMS GitHub OAuth Worker

Cloudflare Worker that proxies GitHub OAuth for [Decap CMS](https://decapcms.org/) on static hosting (GitHub Pages). The CMS admin runs in the browser; this Worker keeps the OAuth client secret off the client.

Based on [ottmartens/decap-cms-github-oauth-provider-cloudflare](https://github.com/ottmartens/decap-cms-github-oauth-provider-cloudflare).

## Routes

| Route           | Purpose                                                                                                                |
| --------------- | ---------------------------------------------------------------------------------------------------------------------- |
| `GET /auth`     | Decap opens this in a popup; redirects to GitHub authorization.                                                        |
| `GET /callback` | GitHub redirects here with `?code=`; exchanges code for token and returns HTML that `postMessage`s the token to Decap. |

## Secrets (not in repo)

Credentials are read from the Worker `env` bindings (`env.CLIENT_ID`, `env.CLIENT_SECRET` in `index.ts`). Set them after deploy — never commit values:

```bash
wrangler secret put CLIENT_ID      # GitHub OAuth App Client ID
wrangler secret put CLIENT_SECRET  # GitHub OAuth App Client Secret
```

For local development only, you may use a `.dev.vars` file (gitignored). Wrangler injects these into `env` automatically:

```
CLIENT_ID=...
CLIENT_SECRET=...
```

## GitHub OAuth App

Create an OAuth App (not a GitHub App) with:

- **Authorization callback URL:** `https://<worker-host>/callback`
  - Dev: `http://localhost:8787/callback` when using `wrangler dev`
  - Prod: your `*.workers.dev` URL or custom domain + `/callback`

## CMS configuration

In `public/admin/config.yml`, set:

```yaml
backend:
  name: github
  repo: daoudizakaria/website
  base_url: https://<worker-host>
  auth_endpoint: auth
```

## Local development

```bash
cd workers/decap-oauth
npm install
npm run dev
```

## Deploy

1. Set `account_id` in `wrangler.toml`.
2. `wrangler login`
3. Set secrets (`CLIENT_ID`, `CLIENT_SECRET`).
4. `npm run deploy`
