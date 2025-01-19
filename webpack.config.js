const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    module: {
        rules: [
            {
                test: /\.html$/,
                use: [ { loader: 'html-loader' } ]
            },
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader, 'css-loader'
                ]
            },
            {
                test: /\.(?:js|ts)$/,
                exclude: /node_modules/,
                use: [ { loader: 'babel-loader' } ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: { loader: 'ts-loader', },
            },
        ]
    },
    resolve: {
        extensions: [
            '.tsx', '.ts', '.js'
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            filename: './index.html',
        }),
        new MiniCssExtractPlugin()
    ],
};