module.exports = {
  plugins: [
    require("postcss-utilities"),
    require("postcss-short"),
    require("postcss-preset-env")({
      features: {
        "nesting-rules": false,
        "media-query-ranges": true,
        "custom-media-queries": true,
      },
    }),
    require("autoprefixer"),
    require("cssnano"),
  ],
};
