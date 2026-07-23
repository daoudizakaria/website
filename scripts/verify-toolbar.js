const puppeteer = require("puppeteer-core");
const fs = require("fs");

const CONFIG = "/Users/apple/work/website/public/admin/config.yml";
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function setLocalBackend(on) {
  const s = fs.readFileSync(CONFIG, "utf8");
  if (on) {
    fs.writeFileSync(
      CONFIG,
      s.replace(/^# local_backend: true/m, "local_backend: true")
    );
  } else {
    fs.writeFileSync(
      CONFIG,
      s.replace(/^local_backend: true/m, "# local_backend: true")
    );
  }
}

(async () => {
  setLocalBackend(true);
  const browser = await puppeteer.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
    defaultViewport: { width: 1500, height: 1000 },
  });
  const page = await browser.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(String(e)));
  await page.setCacheEnabled(false);
  await page.goto("http://localhost:3000/website/admin/?t=" + Date.now(), {
    waitUntil: "domcontentloaded",
    timeout: 90000,
  });
  await page.waitForFunction(
    () => {
      return [...document.querySelectorAll("button")].some((b) =>
        /login|github/i.test(b.textContent || "")
      );
    },
    { timeout: 45000 }
  );
  await page.evaluate(() => {
    const b = [...document.querySelectorAll("button")].find((x) =>
      /login|github/i.test(x.textContent || "")
    );
    b && b.click();
  });
  await page.waitForSelector('a[href*="/entries/"]', { timeout: 60000 });
  const entryHref = await page.$eval('a[href*="/entries/"]', (a) =>
    a.getAttribute("href")
  );
  await Promise.all([
    page.waitForSelector('button[title="Bold"]', { timeout: 90000 }),
    page.goto(new URL(entryHref, page.url()).href, {
      waitUntil: "domcontentloaded",
      timeout: 90000,
    }),
  ]);
  await sleep(1500);

  const assets = await page.evaluate(() => ({
    scripts: [...document.scripts].map((s) => s.src).filter(Boolean),
    titles: [
      ...document.querySelectorAll('[class*="EditorControlBar"] button'),
    ].map((b) => b.title),
  }));

  await page.evaluate(() => {
    const el = document.querySelector('[data-slate-editor="true"]');
    let f = el[Object.keys(el).find((k) => k.startsWith("__reactFiber"))];
    let ed;
    for (let i = 0; i < 150 && f; i++) {
      const p = f.memoizedProps || f.pendingProps;
      if (p && p.editor && p.editor.addMark) {
        ed = p.editor;
        break;
      }
      f = f.return;
    }
    window.__ED = ed;
    window.__MARKS = [];
    const oa = ed.addMark.bind(ed);
    ed.addMark = function (...a) {
      window.__MARKS.push(a.map(String));
      return oa(...a);
    };
    function lastText(nodes, path) {
      path = path || [];
      const i = nodes.length - 1;
      const n = nodes[i];
      if (n.text !== undefined) return { path: path.concat(i), text: n.text };
      return lastText(n.children, path.concat(i));
    }
    const lt = lastText(ed.children);
    ed.selection = {
      anchor: { path: lt.path, offset: lt.text.length },
      focus: { path: lt.path, offset: lt.text.length },
    };
    ed.insertText("\nVERIFYTOOLBAR " + Date.now().toString(36));
  });
  await sleep(300);

  async function selectMarker() {
    await page.evaluate(() => {
      const ed = window.__ED;
      document.querySelector('[data-slate-editor="true"]').focus();
      function find(nodes, path) {
        path = path || [];
        for (let i = 0; i < nodes.length; i++) {
          const n = nodes[i];
          const p = path.concat(i);
          if (n.text !== undefined && /VERIFYTOOLBAR/.test(n.text)) {
            const s = n.text.indexOf("VERIFYTOOLBAR");
            return {
              anchor: { path: p, offset: s },
              focus: { path: p, offset: s + 12 },
            };
          }
          if (n.children) {
            const r = find(n.children, p);
            if (r) return r;
          }
        }
        return null;
      }
      const r = find(ed.children);
      if (r) ed.selection = r;
    });
  }

  async function clickTitle(title) {
    await page.click(`button[title="${title}"]`, { delay: 40 });
    await sleep(300);
  }

  async function snap() {
    return page.evaluate(() => {
      const j = JSON.stringify(window.__ED.children);
      let md = null;
      let f = document.querySelector('[data-slate-editor="true"]');
      f = f[Object.keys(f).find((k) => k.startsWith("__reactFiber"))];
      for (let i = 0; i < 200 && f; i++) {
        const p = f.memoizedProps || f.pendingProps;
        if (typeof p?.value === "string" && p.value.length > 20) {
          md = p.value;
          if (md.includes("**") || md.includes("VERIFY")) break;
        }
        f = f.return;
      }
      return {
        addMark: window.__MARKS.slice(),
        bold: (j.match(/"bold":true/g) || []).length,
        italic: (j.match(/"italic":true/g) || []).length,
        quote: (j.match(/"type":"quote"/g) || []).length,
        bullet: (j.match(/"type":"bulleted-list"/g) || []).length,
        numbered: (j.match(/"type":"numbered-list"/g) || []).length,
        strong: document.querySelectorAll('[data-slate-editor="true"] strong')
          .length,
        em: document.querySelectorAll('[data-slate-editor="true"] em').length,
        mdHasStars: md ? md.includes("**") : null,
        mdSnippet: md
          ? md.slice(
              Math.max(0, md.indexOf("VERIFY") - 5),
              md.indexOf("VERIFY") + 30
            )
          : null,
      };
    });
  }

  const results = {};
  await selectMarker();
  await page.evaluate(() => {
    window.__MARKS = [];
  });
  await clickTitle("Bold");
  results.bold = await snap();

  await selectMarker();
  await page.evaluate(() => {
    window.__MARKS = [];
  });
  await clickTitle("Italic");
  results.italic = await snap();

  await page.evaluate(() =>
    document.querySelector('[data-slate-editor="true"]').focus()
  );
  await clickTitle("Quote");
  results.quote = await snap();

  await page.evaluate(() =>
    document.querySelector('[data-slate-editor="true"]').focus()
  );
  await clickTitle("Bulleted List");
  results.bullet = await snap();

  await page.evaluate(() =>
    document.querySelector('[data-slate-editor="true"]').focus()
  );
  await clickTitle("Numbered List");
  results.numbered = await snap();

  await clickTitle("Add Component");
  await sleep(400);
  results.addComponent = await page.evaluate(() => {
    const items = [...document.querySelectorAll("button, [role=menuitem]")]
      .map((el) => (el.textContent || "").trim())
      .filter((t) => /Image|Code|Component|Upload|Table|Math/i.test(t));
    return { open: items.length > 0, sample: [...new Set(items)].slice(0, 10) };
  });

  // Real mouse path for Bold: mousedown -> mouseup -> click
  await selectMarker();
  await page.evaluate(() => {
    window.__MARKS = [];
  });
  const boldBox = await page.$('button[title="Bold"]');
  const box = await boldBox.boundingBox();
  const cx = box.x + box.width / 2;
  const cy = box.y + box.height / 2;
  await page.mouse.move(cx, cy);
  await page.mouse.down();
  await page.mouse.up();
  await sleep(300);
  results.boldMousePath = await snap();

  console.log(JSON.stringify({ assets, results, errors }, null, 2));
  await browser.close();
})()
  .catch((e) => {
    console.error(String(e));
    process.exitCode = 1;
  })
  .finally(() => {
    try {
      setLocalBackend(false);
    } catch (_) {}
  });
