var webpack = require('webpack')
var path = require('path')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin  = require('clean-webpack-plugin')
var HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
    entry:{
        app:'./main.js',
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        publicPath:'../dist/', // 配置按需加载或静态资源（如js、图片、css）等的公共路径
        filename:'[name].bundle.js',
        chunkFilename:'[name].chunk.js'
    },
    devServer:{
        port:9001,
        inline:true,
        historyApiFallback:true,
        hot:true,
        proxy:{
            '/text':{
                target:'https://www.toutiao.com/2/wap/search/extra/pc_hot_search/',
                secure:false
            }
        }
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: {//编译后应该使用什么插件来处理css文件
                      loader: 'style-loader'
                    },
                    use:[
                      {//用什么插件来编译css文件
                        loader: 'css-loader'
                      }
                    ]
                  }),
                  exclude:/node_modules/
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    {
                    loader:'url-loader',
                    options:{
                        limit:'15000',
                        name:'img/[hash:8].[ext]'
                    }
                    }
                ]
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackPlugin({
            filename:'[name].min.css'
        }),
        //删掉之前打包的文件
        new CleanWebpackPlugin('./dist'),

        new HtmlWebpackPlugin({
            title: "处理静态资源",
            hash:true,
            template: './index.html',
        })
    ]
}