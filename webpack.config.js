const path = require('path');
const Dotenv = require('dotenv-webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    entry: './src/app.js',
    mode: 'development',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'public'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.(jpg|png|gif|svg)$/,
                loader: 'image-webpack-loader',
                enforce: 'pre'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpg)$/,
                loader: 'url-loader',

            }
        ]
    },
    plugins: [
        new Dotenv(),
        new ExtractTextPlugin('style.css')
    ]
};