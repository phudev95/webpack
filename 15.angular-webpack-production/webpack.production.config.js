var WebpackStrip = require('strip-loader');
var devConfig = require('./webpack.config');

// Push stripLoader to loaders
// With this loader, it will clean all comments of console objects
var stripLoader = {
    test: [/\.js$/, /\.es6$/],
    exclude: /node_modules/,
    loader: WebpackStrip.loader('console.*')
};
devConfig.module.loaders.push(stripLoader);

module.exports = devConfig;