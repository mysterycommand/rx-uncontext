'use strict';

var config = require('./base');

config.devServer = {
    contentBase: './static',
    stats: {
        colors: true
    }
};
config.devtool = 'eval-source-map';
config.module.loaders[0].loaders.unshift('react-hot');

module.exports = config;
