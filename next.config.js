const withPlugins = require("next-compose-plugins");
const withSvgr = require("next-svgr");

module.exports = withPlugins([
  withSvgr
  // your other plugins here
]);


//const TerserPlugin = require('terser-webpack-plugin')
//
//
//module.exports = {
//  webpack(config) {
//    config.module.rules.push({
//      test: /\.svg$/,
//      use: ["@svgr/webpack"]
//    });
//
//    config.optimization = {
//      ...config.optimization,
//      minimize: true,
//      minimizer: [
//        new TerserPlugin({
//          terserOptions: {
//            keep_classnames: true,
//            keep_fnames: true
//          }
//        })
//      ]
//    }
//
//    return config;
//  }
//};
