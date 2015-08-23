'use strict';

var NODE_ENV = JSON.stringify(process.env.NODE_ENV) || '"development"';
var webpack = require('webpack');

module.exports = {
    entry: {
        'main': './lib/client.js'
    },

    resolve: {
        extensions: ['', '.js', '.jsx']
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'babel?' + JSON.stringify({
                        optional: [
                            'es7.objectRestSpread',
                            'runtime'
                        ]
                    })
                ]
            }
        ]
    },

    output: {
        filename: '[name].js',
        publicPath: ''
    },

    plugins: [
        new webpack.DefinePlugin({
            process: {
                env: {
                    NODE_ENV: NODE_ENV
                }
            }
        })
    ]
};
