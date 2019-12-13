//webpack.config.js
var webpack = require('webpack');//引入Webpack模块供我们调用，这里只能使用ES5语法，使用ES6语法会报错
const path = require('path');

function resolve (dir) {
    let a =  path.resolve(__dirname, '..', dir)
    console.log("--", dir ,a);
    return a;

}

module.exports = {
    mode: "production",
    devtool: 'source-map',
    target: "node",

    entry: {
        index: resolve('./entry/index.js')
    },
    output: {//输出目录
        path:  path.resolve( './dist'),
        filename: '[name].js',
        publicPath: path.resolve("/"),
        libraryTarget: 'commonjs2'
    },
    externals: {

    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                use: 'babel-loader'//loader的名称（必须）
            }
        ]
    },

    plugins: [
        new webpack.HotModuleReplacementPlugin(),
    ]
};