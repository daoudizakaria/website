/**
 * Decap CMS preview — mirrors live Research article presentation.
 * Marked + KaTeX only in the CMS preview iframe (not the public React app).
 */
(function () {
  if (typeof CMS === "undefined" || typeof createClass === "undefined") {
    console.error("[preview] Decap CMS is not available.");
    return;
  }

  var adminBase = (function () {
    var scripts = document.getElementsByTagName("script");
    for (var i = scripts.length - 1; i >= 0; i--) {
      var src = scripts[i].src || "";
      if (src.indexOf("preview.js") !== -1) {
        return src.replace(/preview\.js(?:\?.*)?$/, "");
      }
    }
    return "./";
  })();

  function escapeHtml(str) {
    return String(str)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function formatPublishDate(value) {
    if (!value) return "";
    var d = value instanceof Date ? value : new Date(value);
    if (isNaN(d.getTime())) return String(value);
    return d.toISOString().slice(0, 10);
  }

  function renderMarkdownWithMath(markdown) {
    if (
      !markdown ||
      typeof marked === "undefined" ||
      typeof katex === "undefined"
    ) {
      return "";
    }

    var placeholders = [];
    var index = 0;
    var text = markdown;

    text = text.replace(/\$\$([\s\S]+?)\$\$/g, function (_, tex) {
      var key = "%%MATHD" + index++ + "%%";
      try {
        placeholders.push({
          key: key,
          html: katex.renderToString(tex.trim(), {
            displayMode: true,
            throwOnError: false,
            strict: false,
          }),
        });
      } catch (e) {
        placeholders.push({
          key: key,
          html: "<pre>" + escapeHtml(tex) + "</pre>",
        });
      }
      return key;
    });

    text = text.replace(/\$([^$\n]+?)\$/g, function (_, tex) {
      var key = "%%MATHI" + index++ + "%%";
      try {
        placeholders.push({
          key: key,
          html: katex.renderToString(tex.trim(), {
            displayMode: false,
            throwOnError: false,
            strict: false,
          }),
        });
      } catch (e) {
        placeholders.push({ key: key, html: escapeHtml(tex) });
      }
      return key;
    });

    var html = marked.parse(text, { gfm: true, breaks: false });
    placeholders.forEach(function (item) {
      html = html.split(item.key).join(item.html);
    });
    return html;
  }

  CMS.registerPreviewStyle(
    "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
  );
  CMS.registerPreviewStyle(adminBase + "preview.css");

  var ResearchPreview = createClass({
    render: function () {
      var entry = this.props.entry;
      var title = entry.getIn(["data", "title"]) || "";
      var summary = entry.getIn(["data", "summary"]) || "";
      var date = entry.getIn(["data", "date"]);
      var resume = entry.getIn(["data", "resume"]);
      var body = entry.getIn(["data", "body"]) || "";

      var titleTrim = String(title).trim();
      var summaryTrim = String(summary).trim();
      var bodyTrim = String(body).trim();
      var hasWriting =
        titleTrim.length > 0 || summaryTrim.length > 0 || bodyTrim.length > 0;

      if (!hasWriting) {
        return h(
          "div",
          { className: "research-cms-preview cms-preview-empty" },
          h("p", { className: "cms-preview-empty-kicker" }, "Preview"),
          h(
            "p",
            { className: "cms-preview-empty-copy" },
            "Your article preview will appear here as you begin writing."
          )
        );
      }

      var html = renderMarkdownWithMath(body);
      var published = formatPublishDate(date);

      var children = [
        titleTrim
          ? h("h1", { className: "cms-article-title" }, titleTrim)
          : null,
        published
          ? h(
              "p",
              { className: "cms-article-meta" },
              "Published on " + published
            )
          : null,
        summaryTrim
          ? h("p", { className: "cms-article-summary" }, summaryTrim)
          : null,
        bodyTrim
          ? h("div", {
              className: "cms-article-body markdown-content",
              dangerouslySetInnerHTML: { __html: html },
            })
          : null,
      ];

      if (resume && String(resume).trim() !== "") {
        children.push(
          h(
            "p",
            { className: "cms-download-wrap" },
            h(
              "a",
              {
                className: "cms-download-btn",
                href: resume,
                target: "_blank",
                rel: "noopener noreferrer",
              },
              "View Resume"
            )
          )
        );
      }

      return h("div", { className: "research-cms-preview" }, children);
    },
  });

  CMS.registerPreviewTemplate("research_articles", ResearchPreview);

  /* Editor components: display and inline maths, rule, table. */
  CMS.registerEditorComponent({
    id: "math-display",
    label: "Math (display)",
    fields: [
      {
        name: "formula",
        label: "LaTeX",
        widget: "text",
        default: "E = mc^2",
      },
    ],
    pattern: /^\$\$\n?([\s\S]+?)\n?\$\$$/,
    fromBlock: function (match) {
      return { formula: (match[1] || "").trim() };
    },
    toBlock: function (data) {
      return "$$\n" + (data.formula || "").trim() + "\n$$";
    },
    toPreview: function (data) {
      var tex = (data.formula || "").trim();
      if (typeof katex === "undefined") {
        return "$$" + tex + "$$";
      }
      try {
        return katex.renderToString(tex, {
          displayMode: true,
          throwOnError: false,
          strict: false,
        });
      } catch (e) {
        return "<pre>" + escapeHtml(tex) + "</pre>";
      }
    },
  });

  CMS.registerEditorComponent({
    id: "math-inline",
    label: "Math (inline)",
    fields: [
      {
        name: "formula",
        label: "LaTeX",
        widget: "string",
        default: "a^2 + b^2 = c^2",
      },
    ],
    pattern: /^\$([^$\n]+)\$$/,
    fromBlock: function (match) {
      return { formula: (match[1] || "").trim() };
    },
    toBlock: function (data) {
      return "$" + (data.formula || "").trim() + "$";
    },
    toPreview: function (data) {
      var tex = (data.formula || "").trim();
      if (typeof katex === "undefined") {
        return "$" + tex + "$";
      }
      try {
        return katex.renderToString(tex, {
          displayMode: false,
          throwOnError: false,
          strict: false,
        });
      } catch (e) {
        return escapeHtml(tex);
      }
    },
  });

  CMS.registerEditorComponent({
    id: "horizontal-rule",
    label: "Horizontal rule",
    fields: [
      {
        name: "hr",
        label: "Rule",
        widget: "hidden",
        default: "true",
      },
    ],
    pattern: /^---$/,
    fromBlock: function () {
      return { hr: "true" };
    },
    toBlock: function () {
      return "\n---\n";
    },
    toPreview: function () {
      return "<hr />";
    },
  });

  CMS.registerEditorComponent({
    id: "simple-table",
    label: "Table",
    fields: [
      {
        name: "markdown",
        label: "GFM table",
        widget: "text",
        default: "| Column A | Column B |\n| --- | --- |\n| Cell | Cell |",
      },
    ],
    pattern: /^\|(.+)\|[\r\n]+\|[-:| ]+\|[\r\n]+((?:\|.*\|[\r\n]*)+)$/,
    fromBlock: function (match) {
      return { markdown: match[0] };
    },
    toBlock: function (data) {
      return (data.markdown || "").trim();
    },
    toPreview: function (data) {
      if (typeof marked === "undefined") {
        return "<pre>" + escapeHtml(data.markdown || "") + "</pre>";
      }
      return marked.parse(data.markdown || "", { gfm: true });
    },
  });
})();
