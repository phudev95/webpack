var path = require('path');
//var webpack = require('webpack');
//var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');
var webpack = require('webpack');
var commonsPlugin = new webpack.optimize.CommonsChunkPlugin('shared.js');

module.exports = {
    // Set path folder of JS
    context: path.resolve('js'),
    entry: {
		about: './about_page.js',
		home: './home_page.js',
		contact: './contact_page.js'
	},

    output : {
        path: path.resolve('build/js/'),
        publicPath: '/public/assets/js/',
        filename: "[name].js"
    },

    // Plugins
    plugins: [commonsPlugin],

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