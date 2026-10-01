/**
 * Prerender every page of the built site to static HTML.
 *
 * The site is a client-side React app, so its HTML is an empty shell until
 * JavaScript runs. Readers that do not run JavaScript (link previews, many
 * crawlers and AI assistants) therefore saw nothing, and every address other
 * than "/" returned 404 on GitHub Pages. This script loads each page of
 * build/ in headless Chrome and writes the rendered markup to
 * build/<route>.html and build/<route>/index.html, plus sitemap.xml.
 *
 * The copy sits in <div data-prerendered> inside #root. With JavaScript, an
 * inline rule in index.html hides it and src/index.js removes it before the
 * app renders, so visitors see exactly what they saw before.
 *
 * Runs after `npm run build` (postbuild). Needs Chrome or Chromium (set
 * CHROME_PATH to override); without one it skips with a warning.
 */
import { spawn, execFileSync } from "node:child_process";
import { createServer } from "node:http";
import {
  mkdtempSync,
  mkdirSync,
  readFileSync,
  readdirSync,
  rmSync,
  statSync,
  writeFileSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { dirname, extname, join, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const BUILD = join(ROOT, "build");
const CONTENT = join(ROOT, "src", "content");
const SITE_URL = "https://zakariadaoudi.com";
const STATIC_ROUTES = [
  "/home",
  "/education",
  "/experience",
  "/projects",
  "/research",
  "/field-notes",
  "/contact",
];

function findChrome() {
  if (process.env.CHROME_PATH) return process.env.CHROME_PATH;
  for (const name of [
    "google-chrome",
    "google-chrome-stable",
    "chromium",
    "chromium-browser",
  ]) {
    try {
      return execFileSync("which", [name], { encoding: "utf8" }).trim();
    } catch {
      /* try the next one */
    }
  }
  return null;
}

/** Slugs from the front matter of the Markdown files of one content folder. */
function slugs(dir) {
  const out = [];
  const walk = (d) => {
    for (const name of readdirSync(d)) {
      const p = join(d, name);
      if (statSync(p).isDirectory()) walk(p);
      else if (name.endsWith(".md")) {
        const m = readFileSync(p, "utf8").match(
          /^---\n[\s\S]*?^slug:\s*["']?([^"'\n]+?)["']?\s*$/m
        );
        if (m) out.push(m[1]);
      }
    }
  };
  walk(dir);
  return out.sort();
}

function routes() {
  return [
    ...STATIC_ROUTES,
    ...slugs(join(CONTENT, "projects")).map((s) => `/projects/${s}`),
    ...slugs(join(CONTENT, "research", "articles")).map(
      (s) => `/research/${s}`
    ),
  ];
}

const TYPES = {
  ".html": "text/html",
  ".js": "text/javascript",
  ".css": "text/css",
  ".json": "application/json",
  ".png": "image/png",
  ".webp": "image/webp",
  ".jpg": "image/jpeg",
  ".svg": "image/svg+xml",
  ".woff2": "font/woff2",
  ".woff": "font/woff",
  ".ttf": "font/ttf",
  ".ico": "image/x-icon",
  ".pdf": "application/pdf",
};

/** Static server for build/, answering every unknown path with the app shell. */
function serve(shell) {
  const server = createServer((req, res) => {
    const path = normalize(decodeURIComponent(req.url.split("?")[0])).replace(
      /^(\.\.[/\\])+/,
      ""
    );
    const file = join(BUILD, path);
    try {
      if (statSync(file).isFile()) {
        res.writeHead(200, {
          "content-type": TYPES[extname(file)] || "application/octet-stream",
        });
        res.end(readFileSync(file));
        return;
      }
    } catch {
      /* not a file: fall through to the shell */
    }
    res.writeHead(200, { "content-type": "text/html" });
    res.end(shell);
  });
  return new Promise((resolve) =>
    server.listen(0, "127.0.0.1", () => resolve(server))
  );
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function openBrowser(chromePath) {
  const port = 9300 + Math.floor(Math.random() * 600);
  const profile = mkdtempSync(join(tmpdir(), "prerender-"));
  const chrome = spawn(
    chromePath,
    [
      "--headless=new",
      "--no-sandbox",
      "--disable-gpu",
      "--hide-scrollbars",
      `--remote-debugging-port=${port}`,
      `--user-data-dir=${profile}`,
      "--window-size=1280,900",
      "about:blank",
    ],
    { stdio: "ignore" }
  );
  let ws;
  for (let i = 0; i < 100 && !ws; i++) {
    try {
      const list = await (
        await fetch(`http://127.0.0.1:${port}/json/list`)
      ).json();
      const page = list.find((t) => t.type === "page");
      if (page) ws = new WebSocket(page.webSocketDebuggerUrl);
    } catch {
      await sleep(200);
    }
  }
  if (!ws) throw new Error("could not connect to Chrome");
  await new Promise((r) => (ws.onopen = r));
  let id = 0;
  const pending = new Map();
  const errors = [];
  ws.onmessage = (e) => {
    const m = JSON.parse(e.data);
    if (m.id && pending.has(m.id)) {
      pending.get(m.id)(m);
      pending.delete(m.id);
    } else if (m.method === "Runtime.exceptionThrown") {
      const d = m.params.exceptionDetails;
      errors.push((d.exception && d.exception.description) || d.text);
    }
  };
  const send = (method, params = {}) =>
    new Promise((resolve) => {
      const i = ++id;
      pending.set(i, resolve);
      ws.send(JSON.stringify({ id: i, method, params }));
    });
  const evaluate = async (expression) =>
    (
      await send("Runtime.evaluate", {
        expression,
        awaitPromise: true,
        returnByValue: true,
      })
    ).result?.result?.value;
  await send("Page.enable");
  await send("Runtime.enable");
  // No splash, no entrance animations: capture the content as it settles.
  await send("Page.addScriptToEvaluateOnNewDocument", {
    source:
      "try{sessionStorage.setItem('splashShown','1');localStorage.setItem('splashShown','1')}catch(e){}",
  });
  await send("Emulation.setEmulatedMedia", {
    features: [{ name: "prefers-reduced-motion", value: "reduce" }],
  });
  return {
    errors,
    send,
    evaluate,
    close: () => {
      chrome.kill();
      try {
        rmSync(profile, { recursive: true, force: true });
      } catch {
        /* best effort */
      }
    },
  };
}

const READY = `(() => {
  const root = document.getElementById("root");
  return Boolean(root && root.querySelector("header.header") &&
    !document.querySelector(".content-detail-loading") &&
    document.fonts.status === "loaded");
})()`;

// Maths: KaTeX writes each formula twice, as MathML and as styled spans for
// its own layout. The static copy keeps only the MathML (rendered natively
// by browsers, and carrying the TeX source), which makes long chapters
// several times smaller. The class is renamed so KaTeX's CSS does not hide it.
const CAPTURE = `(() => {
  const root = document.getElementById("root").cloneNode(true);
  root.querySelectorAll(".katex-html").forEach((e) => e.remove());
  root.querySelectorAll(".katex-mathml").forEach((e) => (e.className = "katex-static"));
  root.querySelectorAll("canvas").forEach((e) => e.remove());
  return {
    title: document.title,
    head: [...document.head.querySelectorAll("[data-rh]")].map((e) => e.outerHTML).join("\\n    "),
    html: root.innerHTML,
    h1: (document.querySelector("h1") || {}).textContent || "",
  };
})()`;

async function render(browser, base, route) {
  browser.errors.length = 0;
  await browser.send("Page.navigate", { url: base + route });
  const t0 = Date.now();
  while (Date.now() - t0 < 20000) {
    await sleep(150);
    if (await browser.evaluate(READY)) break;
  }
  await sleep(400);
  const page = await browser.evaluate(CAPTURE);
  if (!page || !page.html) throw new Error("nothing rendered");
  if (/not found/i.test(page.h1)) throw new Error(`rendered as "${page.h1}"`);
  if (browser.errors.length) throw new Error(browser.errors[0].split("\n")[0]);
  return page;
}

const escapeHtml = (s) =>
  s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

/** The app shell with the page's head tags and content filled in. */
function fill(shell, page) {
  return shell
    .replace(
      /\s*<meta (?:name="description"|property="og:(?:title|description|url|type)")[^>]*>/g,
      ""
    )
    .replace(
      /<title>[^<]*<\/title>/,
      `<title>${escapeHtml(page.title)}</title>\n    ${page.head}`
    )
    .replace(
      '<div id="root"></div>',
      `<div id="root"><div data-prerendered>${page.html}</div></div>`
    );
}

function write(route, html) {
  const rel = route.replace(/^\/+/, "");
  mkdirSync(join(BUILD, dirname(rel)), { recursive: true });
  writeFileSync(join(BUILD, `${rel}.html`), html);
  mkdirSync(join(BUILD, rel), { recursive: true });
  writeFileSync(join(BUILD, rel, "index.html"), html);
}

async function main() {
  const chromePath = findChrome();
  if (!chromePath) {
    console.warn(
      "prerender: no Chrome or Chromium found; skipping (set CHROME_PATH to enable)."
    );
    return;
  }
  if (typeof WebSocket === "undefined") {
    throw new Error(
      "prerender needs Node 22, or Node 20 with --experimental-websocket"
    );
  }
  const shell = readFileSync(join(BUILD, "index.html"), "utf8");
  if (!shell.includes('<div id="root"></div>')) {
    throw new Error(
      "build/index.html is already prerendered; run `npm run build` again"
    );
  }
  const server = await serve(shell);
  const base = `http://127.0.0.1:${server.address().port}`;
  const browser = await openBrowser(chromePath);
  const list = routes();
  const failed = [];
  let bytes = 0;
  try {
    for (const route of list) {
      let page;
      for (let attempt = 1; attempt <= 2 && !page; attempt++) {
        try {
          page = await render(browser, base, route);
        } catch (e) {
          if (attempt === 2) failed.push(`${route}: ${e.message}`);
        }
      }
      if (!page) continue;
      const html = fill(shell, page);
      write(route, html);
      if (route === "/home") writeFileSync(join(BUILD, "index.html"), html);
      bytes += html.length;
    }
  } finally {
    browser.close();
    server.close();
  }
  const urls = [
    SITE_URL + "/",
    ...list.filter((r) => r !== "/home").map((r) => SITE_URL + r),
  ];
  writeFileSync(
    join(BUILD, "sitemap.xml"),
    '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
      urls.map((u) => `  <url><loc>${u}</loc></url>`).join("\n") +
      "\n</urlset>\n"
  );
  console.log(
    `prerender: ${list.length - failed.length}/${list.length} pages, ${(
      bytes / 1e6
    ).toFixed(1)} MB of HTML, sitemap with ${urls.length} URLs`
  );
  if (failed.length) {
    console.error("prerender: failed pages:\n  " + failed.join("\n  "));
    process.exitCode = 1;
  }
}

main().catch((e) => {
  console.error("prerender:", e.message);
  process.exitCode = 1;
});
