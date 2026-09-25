/**
 * Decap CMS UI polish helpers (editor-only).
 * Structured entry cards + search layout — no schema changes.
 * Login page welcome chrome is visual-only (no auth/routing changes).
 */
(function () {
  /**
   * Avatar placeholder uses a user icon by default (fixed circle).
   * To swap in a photo later without layout changes, add the image under
   * public/admin/ and set before this script loads, e.g. in index.html:
   *   window.CMS_LOGIN_AVATAR = "./avatar.jpg";
   */
  var LOGIN_WELCOME = {
    name: "Zakaria Daoudi",
    greeting: "Welcome back,",
    subtitle: "Manage your research articles.",
    buttonLabel: "Continue with GitHub",
    avatarUrl: (typeof window !== "undefined" && window.CMS_LOGIN_AVATAR) || "",
  };

  var USER_ICON_SVG =
    '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">' +
    '<path fill="currentColor" d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v1.2c0 .7.5 1.2 1.2 1.2h16.8c.7 0 1.2-.5 1.2-1.2v-1.2c0-3.2-6.4-4.8-9.6-4.8z"/>' +
    "</svg>";

  function polishLoginPage(root) {
    var scope = root || document;
    var pages = scope.querySelectorAll
      ? scope.querySelectorAll('[class*="StyledAuthenticationPage"]')
      : [];
    if (
      !pages.length &&
      scope.className &&
      String(scope.className).indexOf("StyledAuthenticationPage") !== -1
    ) {
      pages = [scope];
    }

    pages.forEach(function (page) {
      if (!page.querySelector("[data-cms-login-welcome]")) {
        injectLoginWelcome(page);
      }
      // Move the real Decap LoginButton into the glass panel (no clone).
      placeLoginButtonInPanel(page);
      relabelLoginButton(page);
    });
  }

  function injectLoginWelcome(page) {
    var panel = document.createElement("div");
    panel.className = "cms-login-panel";
    panel.setAttribute("data-cms-login-welcome", "1");
    if (!document.documentElement.hasAttribute("data-cms-login-animated")) {
      panel.classList.add("cms-login-panel--animate");
      document.documentElement.setAttribute("data-cms-login-animated", "1");
    }

    var avatar = document.createElement("div");
    avatar.className = "cms-login-avatar";
    avatar.setAttribute("aria-hidden", "true");

    var fallback = document.createElement("span");
    fallback.className = "cms-login-avatar__fallback";
    fallback.innerHTML = USER_ICON_SVG;
    avatar.appendChild(fallback);

    if (LOGIN_WELCOME.avatarUrl) {
      var img = document.createElement("img");
      img.className = "cms-login-avatar__img";
      img.alt = "";
      img.decoding = "async";
      img.hidden = true;
      img.addEventListener("load", function () {
        img.hidden = false;
        avatar.classList.add("cms-login-avatar--has-image");
      });
      img.addEventListener("error", function () {
        img.hidden = true;
        avatar.classList.remove("cms-login-avatar--has-image");
        if (img.parentNode) img.parentNode.removeChild(img);
      });
      img.src = LOGIN_WELCOME.avatarUrl;
      avatar.appendChild(img);
    }

    var greeting = document.createElement("p");
    greeting.className = "cms-login-greeting";
    greeting.textContent = LOGIN_WELCOME.greeting;

    var title = document.createElement("h1");
    title.className = "cms-login-title";
    title.textContent = LOGIN_WELCOME.name;

    var subtitle = document.createElement("p");
    subtitle.className = "cms-login-subtitle";
    subtitle.textContent = LOGIN_WELCOME.subtitle;

    panel.appendChild(avatar);
    panel.appendChild(greeting);
    panel.appendChild(title);
    panel.appendChild(subtitle);

    var first = page.firstChild;
    if (first) {
      page.insertBefore(panel, first);
    } else {
      page.appendChild(panel);
    }
  }

  /** Native Decap auth CTA only — never LoginButtonIcon / IconWrapper. */
  function findLoginButtons(scope) {
    return (scope || document).querySelectorAll('button[class*="LoginButton"]');
  }

  /**
   * Relocate Decap's native LoginButton into the welcome panel.
   * Preserves the same DOM node (and click/auth handlers). No clones.
   */
  function placeLoginButtonInPanel(page) {
    var panel = page.querySelector("[data-cms-login-welcome]");
    if (!panel) return;

    var buttons = findLoginButtons(page);
    if (!buttons.length) return;

    // Prefer a button still outside the panel (React may re-append it).
    var btn = null;
    var i;
    for (i = 0; i < buttons.length; i++) {
      if (!panel.contains(buttons[i])) {
        btn = buttons[i];
        break;
      }
    }
    if (!btn) btn = buttons[0];

    if (panel.contains(btn) && btn.parentNode === panel) {
      // Ensure it sits after the subtitle as the last content control.
      if (panel.lastElementChild !== btn) {
        panel.appendChild(btn);
      }
      return;
    }

    // Prefer the live React node; remove any stale duplicate only if it
    // is already inside our non-React panel (never delete outside).
    for (i = 0; i < buttons.length; i++) {
      if (buttons[i] !== btn && buttons[i].parentNode === panel) {
        panel.removeChild(buttons[i]);
      }
    }

    panel.appendChild(btn);
  }

  function relabelLoginButton(page) {
    var btn =
      page.querySelector(
        '[data-cms-login-welcome] > button[class*="LoginButton"]'
      ) || page.querySelector('button[class*="LoginButton"]');
    if (!btn) return;

    var current = (btn.textContent || "").replace(/\s+/g, " ").trim();
    if (/logging in/i.test(current)) return;
    if (current.indexOf(LOGIN_WELCOME.buttonLabel) !== -1) return;
    if (!/Login with GitHub/i.test(current)) return;

    var walker = document.createTreeWalker(btn, NodeFilter.SHOW_TEXT);
    var node;
    while ((node = walker.nextNode())) {
      if (node.nodeValue && /Login with GitHub/i.test(node.nodeValue)) {
        node.nodeValue = node.nodeValue.replace(
          /Login with GitHub/gi,
          LOGIN_WELCOME.buttonLabel
        );
      }
    }
  }

  function isEmptySummary(text) {
    if (!text) return true;
    var t = String(text).trim();
    return !t || /^no summary yet\.?$/i.test(t) || /^invalid date$/i.test(t);
  }

  function parseCardLines(raw) {
    var lines = String(raw || "")
      .split(/\n+/)
      .map(function (l) {
        return l.trim();
      })
      .filter(Boolean);

    if (lines.length === 0) {
      return { title: "Untitled", date: "", summary: "", empty: true };
    }

    var title = lines[0];
    var date = "";
    var summaryStart = 1;
    if (
      lines[1] &&
      (/[A-Za-z]+ \d{4}/.test(lines[1]) || /invalid date/i.test(lines[1]))
    ) {
      date = /invalid date/i.test(lines[1]) ? "" : lines[1];
      summaryStart = 2;
    }
    var summary = lines.slice(summaryStart).join(" ");
    return {
      title: title,
      date: date,
      summary: summary,
      empty: isEmptySummary(summary),
    };
  }

  function parseCardParts(raw) {
    var text = String(raw || "")
      .replace(/\s+/g, " ")
      .trim();
    if (!text) {
      return { title: "Untitled", date: "", summary: "", empty: true };
    }

    if (text.indexOf("···") !== -1) {
      var bits = text.split("···").map(function (s) {
        return s.trim();
      });
      return {
        title: bits[0] || "Untitled",
        date: bits[1] || "",
        summary: bits.slice(2).join(" ··· "),
        empty: isEmptySummary(bits.slice(2).join(" ")),
      };
    }

    if (String(raw || "").indexOf("\n") !== -1) {
      return parseCardLines(raw);
    }

    return { title: text, date: "", summary: "", empty: true };
  }

  function enhanceEntryCards(root) {
    var scope = root || document;
    var links = scope.querySelectorAll('a[href*="/entries/"]');
    links.forEach(function (link) {
      var li = link.closest("li");
      if (li) {
        li.setAttribute("data-cms-entry-card", "1");
        li.style.height = "auto";
        li.style.maxHeight = "none";
        li.style.overflow = "visible";
      }

      var body = link.querySelector('[class*="CardBody"]');
      if (body) {
        body.style.height = "auto";
        body.style.maxHeight = "none";
        body.style.overflow = "visible";
        body.style.background = "transparent";
        body.style.border = "none";
        body.style.boxShadow = "none";
      }

      if (link.dataset.cmsCardEnhanced === "1") return;

      var heading = link.querySelector(
        "h2, [class*='CardHeading'], [class*='ListCardTitle']"
      );
      if (!heading) return;

      var raw = heading.innerText || heading.textContent || "";
      var parts = parseCardParts(raw);

      var wrap = document.createElement("div");
      wrap.className = "cms-entry-card";

      var titleEl = document.createElement("p");
      titleEl.className = "cms-entry-card-title";
      titleEl.textContent = parts.title;
      wrap.appendChild(titleEl);

      if (parts.date && !/^invalid date$/i.test(parts.date)) {
        var dateEl = document.createElement("p");
        dateEl.className = "cms-entry-card-date";
        dateEl.textContent = parts.date;
        wrap.appendChild(dateEl);
      }

      var sumEl = document.createElement("p");
      sumEl.className =
        "cms-entry-card-summary" + (parts.empty ? " is-empty" : "");
      sumEl.textContent = parts.empty ? "No summary yet." : parts.summary;
      wrap.appendChild(sumEl);

      heading.replaceWith(wrap);
      link.dataset.cmsCardEnhanced = "1";
    });
  }

  function removeSectionChrome(root) {
    var scope = root || document;
    scope.querySelectorAll(".cms-section").forEach(function (el) {
      el.remove();
    });
  }

  function annotateSearch(root) {
    var scope = root || document;
    var inputs = scope.querySelectorAll("input");
    inputs.forEach(function (input) {
      var ph = (input.placeholder || "").toLowerCase();
      if (ph.indexOf("search") === -1) return;

      var parent = input.parentElement;
      if (!parent) return;
      parent.setAttribute("data-cms-search", "1");
      input.setAttribute("data-cms-search-input", "1");

      parent.style.position = "relative";
      parent.style.display = "flex";
      parent.style.alignItems = "center";
      parent.style.height = "42px";
      parent.style.width = "100%";

      var shell = parent.closest('[class*="SearchContainer"]');
      if (shell) {
        shell.style.height = "auto";
        shell.style.minHeight = "42px";
        shell.style.overflow = "visible";
        shell.style.zIndex = "40";
      }

      input.style.boxSizing = "border-box";
      input.style.height = "42px";
      input.style.paddingLeft = "3.25rem";
      input.style.paddingRight = "1rem";
      input.style.lineHeight = "42px";
      input.style.fontFamily =
        'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';

      var icon =
        parent.querySelector('[class*="SearchIcon"]') ||
        (parent.querySelector("svg") &&
          parent
            .querySelector("svg")
            .closest('[class*="SearchIcon"], span, div'));
      if (icon) {
        icon.style.position = "absolute";
        icon.style.left = "1.05rem";
        icon.style.top = "50%";
        icon.style.transform = "translateY(-50%)";
        icon.style.width = "1rem";
        icon.style.height = "1rem";
        icon.style.pointerEvents = "none";
        icon.style.zIndex = "2";
      }
    });
  }

  function annotateDateControls(root) {
    var nodes = (root || document).querySelectorAll(
      '[class*="DateTimeControl"]'
    );
    nodes.forEach(function (node) {
      node.setAttribute("data-cms-datetime", "1");
      node.querySelectorAll("input, select, button").forEach(function (el) {
        el.style.fontFamily =
          'BlinkMacSystemFont, -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif';
      });
    });
  }

  /** Entry editor routes — do not rewrite DOM while Slate is mounted. */
  function isEditorRoute() {
    return /\/(?:entries|new)(?:\/|$)/.test(location.hash || "");
  }

  function refresh(root) {
    try {
      // Always polish auth UI — may appear on any hash (logout / deep link).
      polishLoginPage(root);
      // Skip collection/search/card rewrites on editor routes only (Slate).
      if (isEditorRoute()) return;
      removeSectionChrome(root);
      annotateSearch(root);
      enhanceEntryCards(root);
      annotateDateControls(root);
    } catch (e) {
      /* never break CMS */
    }
  }

  function start() {
    refresh(document);
    var scheduled = false;
    var mo = new MutationObserver(function () {
      if (scheduled) return;
      scheduled = true;
      window.requestAnimationFrame(function () {
        scheduled = false;
        refresh(document);
      });
    });
    mo.observe(document.body, { childList: true, subtree: true });
    window.addEventListener("hashchange", function () {
      refresh(document);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
