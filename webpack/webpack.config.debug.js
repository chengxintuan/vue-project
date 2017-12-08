const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.join(__dirname);
const srcPath = path.join(rootPath, '../src');
const entryPath = path.join(srcPath, 'main.js');

const outPath = path.join(rootPath, '../dist');

const config = {
    entry: entryPath,
    output: {
        path: outPath,
        filename: 'bundle.js',
        publicPath: ''
    },
    devtool: "inline-source-map",
    devServer: {
        host: 'localhost',
        port: 4000,
        contentBase: './dist'
    },
    resolve: {
        extensions: ['.js', '.ts', '.css', '.less', '.png', '.svg']
    },
    module: {
        rules: [{
            test: /\.less/,
            use: ['style-loader', 'css-loader', 'less-loader'],
            exclude: /(node_modules)/,
            include: srcPath
        },{
            test: /\.hbs/,
            use: [{
                loader: "handlebars-loader"
            }]
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['dist']),
        new HtmlWebpackPlugin({
            title: 'hello vue',
            template: 'index.hbs',
            filename: 'app.html'
        })
    ]
}

module.exports = config;