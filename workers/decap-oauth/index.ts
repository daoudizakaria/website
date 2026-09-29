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

/** OAuth App credentials, set with `wrangler secret put` (.dev.vars locally). */
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
    // Decap's login popup opens /auth; redirect to GitHub.
    case '/auth':
      return redirectToAuthFlow(env);

    // GitHub returns here with ?code; exchange it and post the token back
    // to the admin window.
    case '/callback':
      return fetchAccessToken(searchParams, env);

    default:
      return new Response('Not found', { status: 404 });
  }
}

/** Exchange the OAuth code for a token and hand it to Decap's login script. */
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
