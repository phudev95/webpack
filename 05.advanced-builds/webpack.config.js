var path = require('path');

module.exports = {
    // Set path folder of JS
    context: path.resolve('js'),
    entry: ['./utils.js', './app.es6'],

    output : {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "bundle-05.js"
    },

    // Set root folder is public (http://localhost:8080/webpack-dev-server/)
    devServer: {
        contentBase: 'public'
    },

    module: {
        // Pre-loaders
        preLoaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "jshint-loader"
            }
        ],

        // Loaders
        loaders: [
            {
                test: /\.es6$/,
                exclude: /node_modules/,
                loader: "babel-loader"
            }
        ]
    },

    resolve: {
        extensions: ['', '.js', '.es6']
    }
};