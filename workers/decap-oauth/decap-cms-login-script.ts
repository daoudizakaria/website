/**
 * HTML/JS returned by GET /callback after a successful token exchange.
 *
 * Decap CMS opens /auth in a popup and listens for postMessage events. This script
 * completes the handshake:
 *   1. Listens for a message from the opener (Decap admin).
 *   2. Sends "authorizing:github" to start the handshake.
 *   3. On receive, posts "authorization:github:success:{...}" with the token back
 *      to window.opener so Decap can store it and talk to the GitHub API.
 *
 * Original pattern:
 * https://github.com/vencax/netlify-cms-github-oauth-provider/blob/master/login_script.js
 */
export default function decapCMSLoginScript(token: string): string {
  return `<!DOCTYPE html>
<html>
<head><meta charset="utf-8"><title>Decap CMS — GitHub login</title></head>
<body>
<script>
(function() {
  function receiveMessage(e) {
    window.opener.postMessage(
      'authorization:github:success:' + JSON.stringify({
        provider: 'github',
        token: ${JSON.stringify(token)},
      }),
      e.origin
    );
  }
  window.addEventListener('message', receiveMessage, false);
  window.opener.postMessage('authorizing:github', '*');
})();
</script>
</body>
</html>`;
}
