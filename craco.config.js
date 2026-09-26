/**
 * Markdown articles and projects are imported as pre-parsed `{ data, content }`
 * objects: front matter is read at build time by
 * scripts/markdown-frontmatter-loader.js rather than in the browser.
 */
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      const mdRule = {
        test: /\.md$/i,
        type: "javascript/auto",
        use: [require.resolve("./scripts/markdown-frontmatter-loader.js")],
      };
      // Put it inside CRA's `oneOf` so the catch-all asset rule at the end of
      // that list never claims .md files.
      const oneOf = webpackConfig.module.rules.find((r) =>
        Array.isArray(r.oneOf)
      );
      if (oneOf) oneOf.oneOf.unshift(mdRule);
      else webpackConfig.module.rules.push(mdRule);
      return webpackConfig;
    },
  },
};
