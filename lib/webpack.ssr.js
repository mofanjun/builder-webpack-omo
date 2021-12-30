const merge = require('webpack-merge');
const baseConfig = require('./webpack.base');

const ssrConfig = {
    mode: 'production',
    output: {
        libraryTarget: 'uma',
    },
};

module.exports = merge(baseConfig, ssrConfig);
