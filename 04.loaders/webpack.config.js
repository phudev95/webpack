module.exports = {
    entry: ['./utils.js', './app.js'],

    output : {
        "filename": "bundle-04.js"
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