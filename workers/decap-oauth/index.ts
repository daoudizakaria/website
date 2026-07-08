/**
 * Decap CMS GitHub OAuth proxy (Cloudflare Worker)
 *
 * Adapted from:
 * https://github.com/ottmartens/decap-cms-github-oauth-provider-cloudflare
 *
 * Decap CMS cannot complete GitHub OAuth from a static GitHub Pages site because
 * the OAuth client secret must stay server-side. This Worker exposes two routes
 * that bridge the browser login flow and GitHub's OAuth API.
 */

import decapCMSLoginScript from './decap-cms-login-script';

/**
 * Runtime bindings for this Worker.
 *
 * CLIENT_ID and CLIENT_SECRET are NOT stored in this repository. They are
 * injected by Cloudflare on each request via the `env` parameter:
 *
 *   Production: wrangler secret put CLIENT_ID
 *               wrangler secret put CLIENT_SECRET
 *
 *   Local dev:  .dev.vars file (gitignored) with the same variable names.
 *
 * CLIENT_ID     — GitHub OAuth App Client ID (used in /auth redirect).
 * CLIENT_SECRET — GitHub OAuth App Client Secret (used only server-side in
 *                 /callback when exchanging the authorization code for a token).
 */
export interface Env {
  CLIENT_ID: string;
  CLIENT_SECRET: string;
}

export default {
  async fetch(request: Request, env: Env): Promise<Response> {
    return handle(request, env);
  },
};

async function handle(request: Request, env: Env): Promise<Response> {
  const { pathname, searchParams } = new URL(request.url);

  switch (pathname) {
    /**
     * GET /auth
     *
     * Entry point for Decap CMS "Login with GitHub". Decap opens a popup to:
     *   {base_url}/auth   (auth_endpoint defaults to "auth" in config.yml)
     *
     * This route redirects the browser to GitHub's authorization page. After the
     * user approves, GitHub redirects back to the OAuth App callback URL, which
     * must point at this Worker's /callback route.
     */
    case '/auth':
      return redirectToAuthFlow(env);

    /**
     * GET /callback?code=...
     *
     * GitHub redirects here after the user authorizes the OAuth App. This route:
     *   1. Reads the short-lived `code` query parameter from GitHub.
     *   2. Exchanges it for an access token (see fetchAccessToken below).
     *   3. Returns a small HTML page whose script postMessage's the token back
     *      to the Decap CMS admin window that opened the popup.
     */
    case '/callback':
      return fetchAccessToken(searchParams, env);

    default:
      return new Response('Not found', { status: 404 });
  }
}

/**
 * Exchanges the GitHub authorization code for an OAuth access token.
 *
 * Token exchange happens here via POST to GitHub's token endpoint:
 *   https://github.com/login/oauth/access_token
 *
 * The request body includes env.CLIENT_ID, env.CLIENT_SECRET, and the one-time
 * `code` from the /callback query string. GitHub returns JSON with access_token,
 * which is passed to the Decap login script (never logged or stored by this Worker).
 */
async function fetchAccessToken(
  requestParams: URLSearchParams,
  env: Env
): Promise<Response> {
  try {
    const code = requestParams.get('code');

    if (!code) {
      return new Response('Missing authorization code', { status: 400 });
    }

    const response = await fetch('https://github.com/login/oauth/access_token', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'user-agent': 'decap-cms-github-oauth-api-cloudflare',
        accept: 'application/json',
      },
      body: JSON.stringify({
        client_id: env.CLIENT_ID,
        client_secret: env.CLIENT_SECRET,
        code,
      }),
    }).then((res) => res.json());

    const loginResponse = decapCMSLoginScript(response.access_token);

    return new Response(loginResponse, {
      status: 201,
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
      },
    });
  } catch (err) {
    const message = err instanceof Error ? err.message : 'OAuth token exchange failed';
    console.error(err);
    return new Response(message, { status: 500 });
  }
}

/** Redirects the popup to GitHub's OAuth authorize URL (scope: repo + user). */
function redirectToAuthFlow(env: Env): Response {
  return Response.redirect(
    `https://github.com/login/oauth/authorize?client_id=${env.CLIENT_ID}&scope=repo,user`,
    302
  );
}
