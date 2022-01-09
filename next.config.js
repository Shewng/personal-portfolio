module.exports = {
  reactStrictMode: true,

  module: {
    rules: [{ test: /\.pdf$/, use: [{ loader: "file-loader" }] }],
  },
};
