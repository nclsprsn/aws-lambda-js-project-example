const merge = require('webpack-merge');
const common = require('./webpack.common.js');

const WebpackCleanupPlugin = require('webpack-cleanup-plugin');

module.exports = merge(common, {
  // aws-sdk is already available in the Node.js Lambda environment
  // so it should not be included in function bundles
  externals: [
    'aws-sdk'
  ],
  mode: "production",
  plugins: [
    new WebpackCleanupPlugin()
],
});