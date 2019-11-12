const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const basePath = __dirname;
const distPath = 'docs';

const indextInput = './src/index.html';
const indexOutput = 'index.html';

const webpackInitConfig = {
    mode: 'development',
    resolve: {
        extensions: ['.js']
    },
    entry: {
        app: ['./src/index.js'],
    },
    output: {
        path: path.join(basePath, distPath),
        filename: 'index.js'
    },
    plugins: [
        new HTMLWebpackPlugin({
            filename: indexOutput,
            template: indextInput,
        }),
        new CopyPlugin([
            { from: './src/styles', to: './styles' },
            { from: './src/images', to: './images' },
        ]),
    ]
};
module.exports = webpackInitConfig;