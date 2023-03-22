/** @type {import('next').NextConfig} */
const path = require('path');
const { withSentryConfig } = require('@sentry/nextjs');

// const withBundleAnalyzer = require("@next/bundle-analyzer")({
//   enabled: process.env.ANALYZE === "true",
// });
// This file sets a custom webpack configuration to use your Next.js app
// with Sentry.
// https://nextjs.org/docs/api-reference/next.config.js/introduction
// https://docs.sentry.io/platforms/javascript/guides/nextjs/

const prod = process.env.NODE_ENV === 'production';

const sentryWebpackPluginOptions = prod
  ? {
      // Additional config options for the Sentry Webpack plugin. Keep in mind that
      // the following options are set automatically, and overriding them is not
      // recommended:
      //   release, url, org, project, authToken, configFile, stripPrefix,
      //   urlPrefix, include, ignore
      silent: false, // Logging when deploying to check if there is any problem
      validate: true,
      // For all available options, see:
      // https://github.com/getsentry/sentry-webpack-plugin#options.
    }
  : {
      silent: true, // Suppresses all logs
      dryRun: false,
    };

const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'src/assets/styles')],
  },
  sentry: {
    // Use `hidden-source-map` rather than `source-map` as the Webpack `devtool`
    // for client-side builds. (This will be the default starting in
    // `@sentry/nextjs` version 8.0.0.) See
    // https://webpack.js.org/configuration/devtool/ and
    // https://docs.sentry.io/platforms/javascript/guides/nextjs/manual-setup/#use-hidden-source-map
    // for more information.
    hideSourceMaps: true,
    disableServerWebpackPlugin: true,
  },
};

module.exports = {
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
};

module.exports = prod
  ? withSentryConfig(nextConfig, sentryWebpackPluginOptions)
  : nextConfig;
