const webpack = require("webpack");

/** Lets Create React App import `.md` files as UTF-8 strings (Webpack 5 `asset/source`). */
module.exports = {
  webpack: {
    configure: (webpackConfig) => {
      // gray-matter uses Node's Buffer; Webpack 5 no longer polyfills it in the browser.
      webpackConfig.resolve.fallback = {
        ...webpackConfig.resolve.fallback,
        buffer: require.resolve("buffer/"),
      };
      webpackConfig.plugins.push(
        new webpack.ProvidePlugin({
          Buffer: ["buffer", "Buffer"],
        })
      );

      webpackConfig.module.rules.push({
        test: /\.md$/i,
        type: "asset/source",
      });
      return webpackConfig;
    },
  },
};
