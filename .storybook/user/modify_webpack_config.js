const path = require('path');

module.exports = function (config) {
  // This is the default webpack config defined in the `../webpack.config.js`
  // modify as you need.
  config.entry = [
    'bootstrap-loader',
    path.resolve(__dirname, '../../'),
  ];
  config.resolveLoader = {
    root: path.resolve(__dirname, '../../'),
    modulesDirectories: [
      path.resolve(__dirname, '../../'),
      path.resolve(__dirname, '../../node_modules/'),
      path.resolve(__dirname, '../../node_modules/@kadira/storybook/')
    ],
  };
  config.module.loaders.push(
    {
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass'],
      include: path.resolve(__dirname, '../../'),
    }
  );
};
