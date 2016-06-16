// IMPORTANT
// ---------
// This is an auto generated file with React CDK.
// Do not modify this file.
// Use `.storybook/user/modify_webpack_config.js instead`.

const path = require('path');
/*
const updateConfig = require('./user/modify_webpack_config');

const config = {
  module: {
    loaders: [
      {
        test: /\.css?$/,
        loaders: ['style', 'raw'],
        include: path.resolve(__dirname, '../'),
      },
    ],
  },
};

updateConfig(config);
console.log(config);
module.exports = config;
*/

// .storybook/webpack.config.js

// Export a function. Accept the base config as the only param.
module.exports = (storybookBaseConfig, configType) => {
  // configType has a value of 'DEVELOPMENT' or 'PRODUCTION'
  // You can change the configuration based on that.
  // 'PRODUCTION' is used when building the static version of storybook.

  // Make whatever fine-grained changes you need
  // storybookBaseConfig.module = { ... }
  storybookBaseConfig.entry.preview.push('bootstrap-loader');
  storybookBaseConfig.module.loaders.push(
      {test: /\.(woff|woff2)(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/font-woff'}
  );
  storybookBaseConfig.module.loaders.push(
      {test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=application/octet-stream'}
  );
  storybookBaseConfig.module.loaders.push(
      {test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: 'file'}
  );
  storybookBaseConfig.module.loaders.push(
      {test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: 'url?limit=10000&mimetype=image/svg+xml'}
  );
  // Return the altered config
  return storybookBaseConfig;
};
