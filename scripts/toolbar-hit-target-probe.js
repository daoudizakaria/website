/**
 * Layout / hit-target probe: where is Bold visually vs where do clicks land?
 * No CMS source edits.
 */
const puppeteer = require("puppeteer-core");
const fs = require("fs");
const CONFIG = "public/admin/config.yml";
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

(async () => {
  setLB(true);
  const browser = await puppeteer.launch({
    executablePath:
      "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    headless: true,
    args: ["--no-sandbox", "--disable-dev-shm-usage"],
    defaultViewport: { width: 1500, height: 1000 },
  });
  const page = await browser.newPage();
  const pageErrors = [];
  page.on("pageerror", (e) => pageErrors.push(String(e)));
  await page.setCacheEnabled(false);
  await page.goto("http://localhost:3000/website/admin/?hit=" + Date.now(), {
    waitUntil: "domcontentloaded",
    timeout: 90000,
  });
  await page.click('[class*="LoginButton"]');
  await page.waitForSelector('a[href*="/entries/"]', { timeout: 60000 });
  await page.$eval('a[href*="/entries/"]', (a) => a.click());
  await page.waitForSelector('button[title="Bold"]', { timeout: 90000 });
  await sleep(1000);

  const layout = await page.evaluate(() => {
    const bolds = [...document.querySelectorAll('button[title="Bold"]')].map(
      (b, i) => {
        const r = b.getBoundingClientRect();
        const cs = getComputedStyle(b);
        return {
          i,
          disabled: b.disabled,
          r: {
            top: r.top,
            left: r.left,
            bottom: r.bottom,
            width: r.width,
            height: r.height,
          },
          pe: cs.pointerEvents,
          pos: cs.position,
          z: cs.zIndex,
          opacity: cs.opacity,
          visibility: cs.visibility,
          display: cs.display,
          inBar: !!(
            b.closest('[class*="EditorControlBar"]') &&
            b.closest('[class*="EditorControlBar"]').className
          ),
          barCls: b.closest('[class*="EditorControlBar"]')
            ? String(b.closest('[class*="EditorControlBar"]').className).slice(
                0,
                80
              )
            : null,
        };
      }
    );

    const bars = [
      ...document.querySelectorAll('[class*="EditorControlBar"]'),
    ].map((bar) => {
      const r = bar.getBoundingClientRect();
      const cs = getComputedStyle(bar);
      return {
        r: {
          top: r.top,
          left: r.left,
          bottom: r.bottom,
          height: r.height,
          width: r.width,
        },
        pos: cs.position,
        z: cs.zIndex,
        pe: cs.pointerEvents,
        sticky: cs.position,
        titles: [...bar.querySelectorAll("button")].map((b) => b.title),
      };
    });

    // Sample elementFromPoint across typical "toolbar" Y band and Bold center
    const samples = [];
    const ys = [60, 80, 100, 120, 140, 200, 400, 600, 650, 700];
    for (const y of ys) {
      const x = 48;
      const el = document.elementFromPoint(x, y);
      samples.push({
        x,
        y,
        tag: el && el.tagName,
        title: el && el.title,
        cls: el && el.className ? String(el.className).slice(0, 90) : null,
        isBold: !!(el && el.closest && el.closest('button[title="Bold"]')),
        pe: el && el.nodeType === 1 ? getComputedStyle(el).pointerEvents : null,
      });
    }

    // Overlays covering first Bold button center
    const btn = document.querySelector('button[title="Bold"]');
    const br = btn.getBoundingClientRect();
    const cx = br.left + br.width / 2;
    const cy = br.top + br.height / 2;
    const top = document.elementFromPoint(cx, cy);

    // Find elements with high z-index overlapping toolbar band
    const highZ = [];
    document.querySelectorAll("body *").forEach((el) => {
      const cs = getComputedStyle(el);
      const z = parseInt(cs.zIndex, 10);
      if (!z || z < 50) return;
      const r = el.getBoundingClientRect();
      if (r.width < 2 || r.height < 2) return;
      // overlaps y=80..160 band
      if (r.top < 160 && r.bottom > 70 && r.left < 400) {
        highZ.push({
          tag: el.tagName,
          z,
          pe: cs.pointerEvents,
          pos: cs.position,
          cls: String(el.className).slice(0, 80),
          r: { top: r.top, left: r.left, bottom: r.bottom, width: r.width },
        });
      }
    });

    return {
      scrollY: window.scrollY,
      innerHeight: window.innerHeight,
      bolds,
      bars,
      samples,
      boldCenter: {
        cx,
        cy,
        topTag: top && top.tagName,
        topTitle: top && top.title,
        hitsBold: !!(top && top.closest && top.closest('button[title="Bold"]')),
      },
      highZ: highZ.slice(0, 25),
      modeRaw: !!document.querySelector('[class*="RawEditorContainer"]'),
      richToggle: [
        ...document.querySelectorAll('[class*="ToolbarToggleLabel"]'),
      ].map((l) => ({
        text: l.textContent.trim(),
        fw: getComputedStyle(l).fontWeight,
        cls: String(l.className).slice(0, 100),
      })),
    };
  });

  console.log(JSON.stringify(layout, null, 2));
  console.log("PAGE_ERRORS", JSON.stringify(pageErrors));

  // Click at y=100 (where users often aim for a top toolbar) vs actual Bold center
  const results = {};
  for (const [name, y] of [
    ["click_y100", 100],
    ["click_bold_center", layout.boldCenter.cy],
  ]) {
    await page.evaluate(() => {
      window.__hits = [];
      document.addEventListener(
        "click",
        (e) => {
          window.__hits.push({
            tag: e.target.tagName,
            title: e.target.title || null,
            bold: !!(
              e.target.closest && e.target.closest('button[title="Bold"]')
            ),
          });
        },
        true
      );
    });
    await page.mouse.click(48, y);
    await sleep(200);
    results[name] = await page.evaluate(() => window.__hits);
  }
  console.log("CLICK_COMPARE", JSON.stringify(results, null, 2));

  await browser.close();
})()
  .catch((e) => {
    console.error(e);
    process.exitCode = 1;
  })
  .finally(() => setLB(false));
