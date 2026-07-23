/**
 * SCIENTIFIC PROBE — no CMS source edits.
 * Binary-search custom admin assets; full Bold click lifecycle trace.
 * Temporarily enables local_backend for the probe only, then restores.
 */
const puppeteer = require("puppeteer-core");
const fs = require("fs");
const path = require("path");

const ROOT = path.resolve(__dirname, "..");
const CONFIG = path.join(ROOT, "public/admin/config.yml");
const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function setLB(on) {
  const s = fs.readFileSync(CONFIG, "utf8");
  fs.writeFileSync(
    CONFIG,
    on
      ? s.replace(/^# local_backend: true/m, "local_backend: true")
      : s.replace(/^local_backend: true/m, "# local_backend: true")
  );
}

const BLOCKABLE = [
  "cms-ui.js",
  "cms.css",
  "preview.js",
  "preview.css",
  "cms-widgets.js",
];

async function openWithBlocks(browser, blockSet, { rewriteWidgets } = {}) {
  const page = await browser.newPage();
  const consoleMsgs = [];
  const pageErrors = [];
  page.on("console", (msg) => {
    consoleMsgs.push({ type: msg.type(), text: msg.text() });
  });
  page.on("pageerror", (e) => pageErrors.push(String(e)));

  await page.setRequestInterception(true);
  page.on("request", (req) => {
    const u = req.url();
    for (const name of blockSet) {
      if (u.includes(name)) {
        return req.abort();
      }
    }
    // When cms-widgets is blocked, config widgets cms-string/cms-text break.
    // Rewrite those to stock string/text so stock Decap can still mount.
    if (
      rewriteWidgets &&
      (u.includes("config.yml") || u.includes("config.git-gateway.yml"))
    ) {
      return req.respond({
        status: 200,
        contentType: "text/yaml",
        body: fs
          .readFileSync(CONFIG, "utf8")
          .replace(/widget:\s*cms-string/g, "widget: string")
          .replace(/widget:\s*cms-text/g, "widget: text"),
      });
    }
    return req.continue();
  });

  await page.setCacheEnabled(false);
  await page.goto("http://localhost:3000/website/admin/?probe=" + Date.now(), {
    waitUntil: "domcontentloaded",
    timeout: 90000,
  });

  // If CMS_MANUAL_INIT and cms-widgets aborted, init may still run from index.
  await page.waitForFunction(
    () =>
      !!document.querySelector(
        '[class*="LoginButton"], button[class*="Login"], [class*="AuthenticationPage"]'
      ) || !!document.querySelector('[class*="AppHeader"]'),
    { timeout: 45000 }
  );

  const loginBtn = await page.$('[class*="LoginButton"]');
  if (loginBtn) {
    await loginBtn.click();
  } else {
    await page.evaluate(() => {
      const b = [...document.querySelectorAll("button")].find((x) =>
        /login|github|continue/i.test(x.textContent || "")
      );
      b && b.click();
    });
  }

  await page.waitForSelector('a[href*="/entries/"]', { timeout: 60000 });
  await page.$eval('a[href*="/entries/"]', (a) => a.click());
  await page.waitForSelector('button[title="Bold"]', { timeout: 90000 });
  await sleep(900);

  return { page, consoleMsgs, pageErrors };
}

async function inspectBoldButton(page) {
  return page.evaluate(() => {
    const btn = document.querySelector('button[title="Bold"]');
    if (!btn) return { error: "no Bold button" };
    const cs = getComputedStyle(btn);
    const r = btn.getBoundingClientRect();
    const cx = r.left + r.width / 2;
    const cy = r.top + r.height / 2;
    const top = document.elementFromPoint(cx, cy);
    const chain = [];
    let n = top;
    for (let i = 0; i < 10 && n; i++) {
      chain.push({
        tag: n.tagName,
        id: n.id || null,
        title: n.title || null,
        cls: n.className ? String(n.className).slice(0, 100) : null,
        pe: n.nodeType === 1 ? getComputedStyle(n).pointerEvents : null,
      });
      n = n.parentElement;
    }

    // React props
    const pk = Object.keys(btn).find((k) => k.startsWith("__reactProps"));
    const props = pk ? btn[pk] : null;
    const onKeys = props
      ? Object.keys(props).filter((k) => k.startsWith("on"))
      : [];

    // getEventListeners is Chrome DevTools only — approximate via proto
    return {
      disabled: btn.disabled,
      ariaDisabled: btn.getAttribute("aria-disabled"),
      tabIndex: btn.tabIndex,
      pointerEvents: cs.pointerEvents,
      cursor: cs.cursor,
      opacity: cs.opacity,
      zIndex: cs.zIndex,
      display: cs.display,
      visibility: cs.visibility,
      rect: { x: r.x, y: r.y, w: r.width, h: r.height },
      topIsInsideButton: !!(top && (top === btn || btn.contains(top))),
      topTag: top && top.tagName,
      chain,
      reactOnKeys: onKeys,
      hasOnClick: !!(props && typeof props.onClick === "function"),
      hasOnMouseDown: !!(props && typeof props.onMouseDown === "function"),
      modeRaw: !!document.querySelector('[class*="RawEditorContainer"]'),
      slate: !!document.querySelector('[data-slate-editor="true"]'),
    };
  });
}

async function getEditorHandle(page) {
  return page.evaluate(() => {
    const el = document.querySelector('[data-slate-editor="true"]');
    if (!el) return { error: "no slate" };
    let fiber = el[Object.keys(el).find((k) => k.startsWith("__reactFiber"))];
    let editor;
    for (let i = 0; i < 150 && fiber; i++) {
      const p = fiber.memoizedProps || fiber.pendingProps;
      if (p && p.editor && p.editor.addMark) {
        editor = p.editor;
        break;
      }
      fiber = fiber.return;
    }
    if (!editor) return { error: "no editor on fiber" };
    window.__PROBE_ED = editor;
    window.__PROBE_EL = el;
    return {
      ok: true,
      childCount: editor.children.length,
      sel: editor.selection ? JSON.stringify(editor.selection) : null,
      opsLen: (editor.operations || []).length,
    };
  });
}

async function selectVisibleText(page) {
  return page.evaluate(() => {
    const el = window.__PROBE_EL;
    el.focus();
    const w = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let n;
    while ((n = w.nextNode())) {
      const t = n.textContent || "";
      if (t.trim().length < 8 || /https?:/.test(t)) continue;
      const start = t.search(/\S/);
      const range = document.createRange();
      range.setStart(n, start);
      range.setEnd(n, Math.min(t.length, start + 10));
      const rects = [...range.getClientRects()].filter(
        (r) => r.width > 2 && r.top > 40 && r.bottom < innerHeight - 40
      );
      if (!rects.length) continue;
      const a = rects[0];
      const b = rects[rects.length - 1];
      return {
        text: t.slice(start, start + 10),
        x1: a.left + 2,
        y1: a.top + a.height / 2,
        x2: b.right - 2,
        y2: b.top + b.height / 2,
      };
    }
    return { error: "no visible text" };
  });
}

async function instrumentAndClickBold(page, drag) {
  await page.evaluate(() => {
    window.__LIFE = {
      events: [],
      pd: [],
      sp: [],
      reactClicks: 0,
      addMark: [],
      removeMark: [],
      apply: [],
      onChange: [],
      errors: [],
    };

    const oPD = Event.prototype.preventDefault;
    Event.prototype.preventDefault = function () {
      if (/mouse|click/.test(this.type)) {
        window.__LIFE.pd.push({
          type: this.type,
          stack: new Error().stack
            .split("\n")
            .slice(2, 12)
            .map((s) => s.trim()),
        });
      }
      return oPD.apply(this, arguments);
    };
    window.__restorePD = oPD;

    const oSP = Event.prototype.stopPropagation;
    Event.prototype.stopPropagation = function () {
      if (/mouse|click/.test(this.type)) {
        window.__LIFE.sp.push({
          type: this.type,
          stack: new Error().stack
            .split("\n")
            .slice(2, 10)
            .map((s) => s.trim()),
        });
      }
      return oSP.apply(this, arguments);
    };
    window.__restoreSP = oSP;

    ["mousedown", "mouseup", "click"].forEach((type) => {
      document.addEventListener(
        type,
        (e) => {
          if (!e.target || !e.target.closest) return;
          if (!e.target.closest('button[title="Bold"]')) return;
          window.__LIFE.events.push({
            type,
            phase: "capture",
            tag: e.target.tagName,
            dp: e.defaultPrevented,
          });
        },
        true
      );
      document.addEventListener(type, (e) => {
        if (!e.target || !e.target.closest) return;
        if (!e.target.closest('button[title="Bold"]')) return;
        window.__LIFE.events.push({
          type,
          phase: "bubble",
          tag: e.target.tagName,
          dp: e.defaultPrevented,
        });
      });
    });

    const ed = window.__PROBE_ED;
    const oa = ed.addMark.bind(ed);
    ed.addMark = function (...args) {
      window.__LIFE.addMark.push({
        args: args.map(String),
        sel: ed.selection ? JSON.stringify(ed.selection) : null,
      });
      return oa(...args);
    };
    if (ed.removeMark) {
      const or = ed.removeMark.bind(ed);
      ed.removeMark = function (...args) {
        window.__LIFE.removeMark.push({ args: args.map(String) });
        return or(...args);
      };
    }
    if (ed.apply) {
      const oApply = ed.apply.bind(ed);
      ed.apply = function (op) {
        window.__LIFE.apply.push(op && op.type ? op.type : String(op));
        return oApply(op);
      };
    }

    const btn = document.querySelector('button[title="Bold"]');
    const pk = Object.keys(btn).find((k) => k.startsWith("__reactProps"));
    if (pk && btn[pk] && btn[pk].onClick) {
      const oc = btn[pk].onClick;
      btn[pk].onClick = function (...a) {
        window.__LIFE.reactClicks++;
        window.__LIFE.selAtClick = ed.selection
          ? JSON.stringify(ed.selection)
          : null;
        try {
          return oc.apply(this, a);
        } catch (err) {
          window.__LIFE.errors.push(String(err));
          throw err;
        }
      };
    }

    window.__boldBefore = {
      bold: (JSON.stringify(ed.children).match(/"bold":true/g) || []).length,
      strong: document.querySelectorAll('[data-slate-editor="true"] strong')
        .length,
      mdHint: null,
    };
  });

  // Real mouse select then Bold
  if (drag && !drag.error) {
    await page.mouse.move(drag.x1, drag.y1);
    await page.mouse.down();
    await page.mouse.move(drag.x2, drag.y2, { steps: 8 });
    await page.mouse.up();
    await sleep(120);
  }

  const beforeSel = await page.evaluate(() => ({
    domSel: window.getSelection() && window.getSelection().toString(),
    slateSel: window.__PROBE_ED.selection
      ? JSON.stringify(window.__PROBE_ED.selection)
      : null,
  }));

  const box = await page.$eval('button[title="Bold"]', (b) => {
    const r = b.getBoundingClientRect();
    return { x: r.left + r.width / 2, y: r.top + r.height / 2 };
  });

  // Clear prior event log after select (select may have clicked elsewhere)
  await page.evaluate(() => {
    window.__LIFE.events = [];
    window.__LIFE.pd = [];
    window.__LIFE.sp = [];
    window.__LIFE.reactClicks = 0;
    window.__LIFE.addMark = [];
    window.__LIFE.removeMark = [];
    window.__LIFE.apply = [];
    window.__LIFE.errors = [];
  });

  await page.mouse.click(box.x, box.y);
  await sleep(400);

  const after = await page.evaluate(() => {
    const ed = window.__PROBE_ED;
    const j = JSON.stringify(ed.children);
    // Try to read markdown from React form value if present
    let bodyValue = null;
    try {
      const textareas = [...document.querySelectorAll("textarea")];
      // raw mode only; rich text may not have textarea
      bodyValue = textareas.map((t) => t.value.slice(0, 80));
    } catch (_) {}
    return {
      life: window.__LIFE,
      boldAfter: (j.match(/"bold":true/g) || []).length,
      strongAfter: document.querySelectorAll(
        '[data-slate-editor="true"] strong'
      ).length,
      selAfter: ed.selection ? JSON.stringify(ed.selection) : null,
      opsAfter: (ed.operations || []).map((o) => o.type),
      bodyValue,
      previewHasStrong: !!document.querySelector(
        '[class*="PreviewPane"] strong, iframe'
      ),
    };
  });

  await page.evaluate(() => {
    Event.prototype.preventDefault = window.__restorePD;
    Event.prototype.stopPropagation = window.__restoreSP;
  });

  return { beforeSel, box, after };
}

async function runSuite(label, blockSet, opts = {}) {
  const browser = await puppeteer.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
    defaultViewport: { width: 1500, height: 1000 },
  });

  const out = { label, blockSet, opts };
  try {
    const { page, consoleMsgs, pageErrors } = await openWithBlocks(
      browser,
      blockSet,
      opts
    );
    out.button = await inspectBoldButton(page);
    out.editor = await getEditorHandle(page);
    const drag = await selectVisibleText(page);
    out.drag = drag;
    out.trace = await instrumentAndClickBold(page, drag);

    // Derive chain break
    const life = out.trace.after.life;
    let breakAt = "UNKNOWN";
    if (!life.events.some((e) => e.type === "mousedown"))
      breakAt = "1_MOUSEDOWN_NEVER_REACHED_DOM";
    else if (!life.events.some((e) => e.type === "click"))
      breakAt = "2_CLICK_NEVER_FIRED (mousedown preventDefault?)";
    else if (life.reactClicks === 0) breakAt = "3_REACT_ONCLICK_NEVER_RAN";
    else if (!life.addMark.length && !life.removeMark.length)
      breakAt = "4_ONCLICK_RAN_BUT_NO_ADDMARK_REMOVEMARK";
    else if (
      out.trace.after.boldAfter === 0 &&
      out.trace.after.strongAfter === 0
    )
      breakAt = "5_ADDMARK_RAN_BUT_NO_VISIBLE_STATE_CHANGE";
    else breakAt = "OK_CHAIN_COMPLETE";

    out.breakAt = breakAt;
    out.boldWorks =
      out.trace.after.boldAfter > 0 || out.trace.after.strongAfter > 0;
    out.pageErrors = pageErrors;
    out.consoleErrors = consoleMsgs.filter(
      (m) => m.type === "error" || m.type === "warning"
    );
    await page.close();
  } catch (e) {
    out.error = String(e);
    out.stack = e.stack;
  }
  await browser.close();
  return out;
}

(async () => {
  setLB(true);

  const cases = [
    {
      label: "STOCK_DECAP",
      block: BLOCKABLE.slice(),
      opts: { rewriteWidgets: true },
    },
    { label: "PLUS_CMS_CSS", block: BLOCKABLE.filter((x) => x !== "cms.css") },
    {
      label: "PLUS_CMS_UI",
      block: BLOCKABLE.filter((x) => x !== "cms-ui.js"),
      opts: { rewriteWidgets: true },
    },
    {
      label: "PLUS_PREVIEW_JS",
      block: BLOCKABLE.filter((x) => x !== "preview.js"),
      opts: { rewriteWidgets: true },
    },
    {
      label: "PLUS_WIDGETS",
      block: BLOCKABLE.filter((x) => x !== "cms-widgets.js"),
    },
    {
      label: "PLUS_PREVIEW_CSS",
      block: BLOCKABLE.filter((x) => x !== "preview.css"),
      opts: { rewriteWidgets: true },
    },
    { label: "FULL_STACK", block: [] },
  ];

  // Binary search style: first stock, then each alone vs stock
  const alone = [
    {
      label: "ONLY_CMS_UI",
      block: BLOCKABLE.filter((x) => x !== "cms-ui.js"),
      opts: { rewriteWidgets: true },
    },
    {
      label: "ONLY_CMS_CSS",
      block: BLOCKABLE.filter((x) => x !== "cms.css"),
      opts: { rewriteWidgets: true },
    },
    {
      label: "ONLY_PREVIEW_JS",
      block: BLOCKABLE.filter((x) => x !== "preview.js"),
      opts: { rewriteWidgets: true },
    },
    {
      label: "ONLY_WIDGETS",
      block: BLOCKABLE.filter((x) => x !== "cms-widgets.js"),
    },
  ];

  const results = [];
  for (const c of [
    ...cases.slice(0, 1),
    ...alone,
    { label: "FULL_STACK", block: [], opts: {} },
  ]) {
    console.log("\n========== RUNNING", c.label, "==========");
    const r = await runSuite(c.label, c.block, c.opts || {});
    results.push(r);
    console.log(
      JSON.stringify(
        {
          label: r.label,
          boldWorks: r.boldWorks,
          breakAt: r.breakAt,
          error: r.error || null,
          button: r.button && {
            disabled: r.button.disabled,
            pe: r.button.pointerEvents,
            topIsInside: r.button.topIsInsideButton,
            hasOnClick: r.button.hasOnClick,
            modeRaw: r.button.modeRaw,
            rect: r.button.rect,
          },
          reactClicks: r.trace && r.trace.after.life.reactClicks,
          addMark: r.trace && r.trace.after.life.addMark,
          events: r.trace && r.trace.after.life.events,
          pd: r.trace && r.trace.after.life.pd,
          boldAfter: r.trace && r.trace.after.boldAfter,
          strongAfter: r.trace && r.trace.after.strongAfter,
          beforeSel: r.trace && r.trace.beforeSel,
          pageErrors: r.pageErrors,
          consoleErrors: (r.consoleErrors || []).slice(0, 15),
        },
        null,
        2
      )
    );
  }

  fs.writeFileSync(
    "/tmp/toolbar-probe-full.json",
    JSON.stringify(results, null, 2)
  );
  console.log("\nWROTE /tmp/toolbar-probe-full.json");

  // Summary table
  console.log("\n===== SUMMARY =====");
  for (const r of results) {
    console.log(
      r.label.padEnd(18),
      "works=",
      r.boldWorks,
      "break=",
      r.breakAt,
      r.error ? "ERR=" + r.error.slice(0, 80) : ""
    );
  }
})()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => setLB(false));
