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

  // export config --- don't remove
  // assetPrefix: './',
  // exportPathMap: async function (
  //   defaultPathMap,
  //   { dev, dir, outDir, distDir, buildId },
  // ) {
  //   return {
  //     '/': { page: '/' },
  //     '/bath-room': { page: '/about' },
  //     '/customer-story': { page: '/customer-story' },
  //     '/design-galley': { page: '/design-galley' },
  //     '/home-office': { page: '/home-office' },
  //     '/space-saving': { page: '/space-saving' },
  //     '/wardrobes': { page: '/wardrobes' },
  //     '/modular-kitchen': { page: '/modular-kitchen' },
  //   };
  // },
};

if (prod) {
  console.log({ prod });
  // nextConfig.assetPrefix = './';
  nextConfig.exportPathMap = async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId },
  ) {
    // only export tokenomic
    return {
      '/index': { page: '/' },
      '/privacy': { page: '/privacy' },
      '/contact': { page: '/contact' },
      '/about-us': { page: '/about-us' },
      '/tokenomic': { page: '/tokenomic' },
      '/tokenomic/invest-now-pay-later': { page: '/tokenomic/invest-now-pay-later' },
    };
  };
}

module.exports = prod
  ? withSentryConfig(nextConfig, sentryWebpackPluginOptions)
  : nextConfig;
