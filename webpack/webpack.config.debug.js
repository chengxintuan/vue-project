const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const rootPath = path.join(__dirname);
const srcPath = path.join(rootPath, '../src');
const entryPath = path.join(srcPath, 'page/home/home.tsx');

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
        port: 8000,
        contentBase: './dist'
    },
    resolve: {
        extensions: ['.js', '.ts', '.css', '.less', '.png', '.svg', '.vue', '.tsx']
    },
    externals: {
        "vue": "Vue"
    },
    module: {
        rules: [
            // {
            //     test: /\.vue$/,
            //     loader: 'vue-loader'
            // },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'awesome-typescript-loader',
                    options: {
                        useBabel: true
                    }
                }
            }, {
                test: /\.less$/,
                use: ['style-loader', 'css-loader', 'less-loader'],
                exclude: /(node_modules)/,
                include: srcPath
            }, {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }, {
                test: /\.hbs$/,
                loader: "handlebars-loader"
            }
        ]
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