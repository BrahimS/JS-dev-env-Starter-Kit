// Webpack configuration
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var path = require('path');

var isProd = process.env.NODE_ENV === 'production'; // true or false
var cssDev = ['style-loader', 'css-loader', 'sass-loader'];
var cssProd = ExtractTextPlugin.extract({
    fallback: 'style-loader',
    use: ['css-loader', 'sass-loader'],
    publicPath: '/build'
})
var cssConfig = isProd ? cssProd : cssDev;

module.exports = {
    devtool: "source-map",
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    module: {
        rules: [{
                test: /\.sass$/,
                use: cssConfig
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            {
                test: /\.(jpe?g|svg|png|gif)$/i,
                use:
                    [
                        'file-loader?name=[name].[ext]&outputPath=img/',
                        //'image-webpack-loader'
                    ]
            }
        ]
    },
    /*devServer: {
        contentBase: path.join(__dirname, "build"),
        compress: true,
        hot: true,
        stats: 'errors-only',
        open: true
    },*/
    plugins: [
        new HtmlWebpackPlugin(),
        new ExtractTextPlugin({
            filename: 'css/index.css',
            disable: !isProd,
            allChunks: true,
            loader: 'css?sourceMap!sass?sourceMap'
        }),
        // enable HMR globally
        new webpack.HotModuleReplacementPlugin(),
        // prints more readable module names in the browser console on HMR updates
        new webpack.NamedModulesPlugin()
    ]
}
