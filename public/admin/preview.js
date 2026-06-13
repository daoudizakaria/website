/**
 * Decap CMS preview for research articles — Markdown (marked) + KaTeX math.
 * Loaded after decap-cms.js; polls until CMS globals are available.
 */
(function () {
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
        placeholders.push({ key: key, html: "<pre>" + tex + "</pre>" });
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
        placeholders.push({ key: key, html: tex });
      }
      return key;
    });

    var html = marked.parse(text, { gfm: true, breaks: false });
    placeholders.forEach(function (item) {
      html = html.split(item.key).join(item.html);
    });
    return html;
  }

  function registerResearchPreview() {
    if (typeof CMS === "undefined" || typeof createClass === "undefined") {
      return false;
    }

    CMS.registerPreviewStyle(
      "https://cdn.jsdelivr.net/npm/katex@0.16.11/dist/katex.min.css"
    );
    CMS.registerPreviewStyle("/admin/preview.css");

    var ResearchPreview = createClass({
      render: function () {
        var entry = this.props.entry;
        var title = entry.getIn(["data", "title"]);
        var summary = entry.getIn(["data", "summary"]);
        var body = entry.getIn(["data", "body"]) || "";
        var html = renderMarkdownWithMath(body);

        return h(
          "div",
          { className: "research-cms-preview" },
          h("h1", {}, title),
          summary ? h("p", { className: "cms-summary" }, summary) : null,
          h("div", {
            className: "cms-body markdown-content",
            dangerouslySetInnerHTML: { __html: html },
          })
        );
      },
    });

    CMS.registerPreviewTemplate("research_articles", ResearchPreview);
    return true;
  }

  function waitForCms() {
    if (registerResearchPreview()) {
      return;
    }
    setTimeout(waitForCms, 20);
  }

  waitForCms();
})();
