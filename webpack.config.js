'use strict';
require('babel-core/register');

const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = [{
    mode: 'none',
    entry: path.join(__dirname, '/assets/js/index.js'),
    output: {
        path: path.join(__dirname, '/build/js'),
        filename: 'index.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
            },
        ]
    },
    devServer: {
        contentBase: path.join(__dirname, "/assets"),
        port: 3000,
    },
    // resolve: {
    //     extensions: ['.jsx', '.js']
    // },
    plugins: [],
},
{
    entry: {
        style: path.join(__dirname + "/assets/css/style.scss"),
    },
    output: {
        path: __dirname + '/build/css',
        filename: '[name].css'
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                loader: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new ExtractTextPlugin('[name].css'),
    ],
},
{
    entry: {
        style: path.join(__dirname + "/index.pug"),
    },
    output: {
        path: __dirname + '/build/',
        filename: 'index.html'
    },
    module: {
        rules: [
            {
                test: /\.pug$/,
                loader: 'pug-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './index.pug'
        })
    ],
}];
