/**
 * Created by user on 2016/12/30.
 */
//webpack.config.js
var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin=require('html-webpack-plugin');

module.exports = {
    devtool:'cheap-eval-source-map',
    entry:['./src/index'],//入口文件
    output:{
        path:path.join(__dirname,'dist'),
        filename:'bundle.js'
    },
    plugins:[//webpack插件
        /*new webpack.optimize.UglifyJsPlugin({//压缩插件
            compressor:{
                warnings:false
            }
        }),*/
        new webpack.optimize.OccurenceOrderPlugin(),
        new HtmlWebpackPlugin({//生成HTML页面插件
            template:'./src/index.html'
        })
    ],
    module:{//装载器
        loaders:[
            {
                test:/\.css$/,
                loaders:['style','css']
            },
            {
                test:/\.js$/,
                loaders:['babel'],
                exclude:/node_modules/
            }]
    },
    devServer:{
        contentBase:'./dist',
        hot:true
    }
};