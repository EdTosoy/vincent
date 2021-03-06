module.exports = {
  // other next config
  images: {
    domains: ["raw.githubusercontent.com"],
  },
  i18n: {
    locales: ["en", "ms"],
    defaultLocale: "en",
  },
  webpack: (config, options) => {
    config.node = {
      // Some libraries import Node modules but don't use them in the browser.
      // Tell Webpack to provide empty mocks for them so importing them works.
      ...config.node,
      fs: "empty",
      child_process: "empty",
      net: "empty",
      tls: "empty",
    };

    return config;
  },
};
