const webpack = require('webpack'); //访问内置的插件
const path = require('path');
var htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        app : './src/app.js'
    },
    output: {
        path : path.resolve(__dirname, './dist'),
        filename: 'js/[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: path.resolve(__dirname, './node_modules/'),
                include: path.resolve(__dirname, ',/src/'),
                query: {
                    presets: ["@babel/preset-env"]
                }
            },
            {
                test: /\.html$/,
                loaders: 'html-loader'
            },
            {
                test: /\.tpl$/,
                loaders: 'ejs-loader'
            },
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    //解决 @import css 问题
                    { loader: 'css-loader', options: { importLoaders: 1 } },
                    {
                        loader: 'postcss-loader',
                        options: {
                            ident: 'postcss',
                            plugins:[
                                require('autoprefixer')({
                                    overrideBrowserslist: 'last 5 version'
                                })
                            ]
                        }
                    }
                ]
            },
            {
                test: /\.less$/,
                use: [
                    {
                        loader: 'style-loader', // creates style nodes from JS strings
                    },
                    {
                        loader: 'css-loader', // translates CSS into CommonJS
                        options: {
                            importLoaders: 1
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            plugins : [
                                require('autoprefixer')({
                                    overrideBrowserslist: 'last 5 version'
                                })
                            ]
                        }
                    },
                    {
                        loader: 'less-loader', // compiles Less to CSS
                    }
                ],
            }
        ]
    },
    plugins: [
        new htmlWebpackPlugin({
            filename: 'index.html',
            template: 'index.html',
            inject: 'body',
            title: 'this is a loader'
        })
    ]
}