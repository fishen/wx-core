const path = require('path');
const nodeExternals = require('webpack-node-externals');

module.exports = {
    mode: 'production',
    entry: './src/index.ts',
    devtool: "source-map",
    externals: [nodeExternals()],
    module: {
        rules: [{ test: /\.tsx?$/, loader: "ts-loader" }]
    },
    resolve: {
        extensions: ['.ts']
    },
    output: {
        filename: 'index.js',
        path: path.resolve(__dirname),
        libraryTarget: 'commonjs'
    }
};