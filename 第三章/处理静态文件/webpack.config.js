var webpack = require('webpack')
var path = require('path')
var ExtractTextWebpackPlugin = require('extract-text-webpack-plugin')
var CleanWebpackPlugin  = require('clean-webpack-plugin')
module.exports = {
    entry:{
        app:'./main.js',
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        publicPath:'./dist/', // 配置按需加载或静态资源（如js、图片、css）等的公共路径
        filename:'[name].bundle.js',
        chunkFilename:'[name].chunk.js'
    },
    module:{
        rules:[
            {
                test:/\.css$/,
                use: ExtractTextWebpackPlugin.extract({
                    fallback: {
                      loader: 'style-loader'
                    },
                    use:[
                      {
                        loader: 'css-loader'
                      }
                    ]
                  })
            },
            {
                test:/\.(png|jpg|jpeg|gif)$/,
                use:[
                    {
                    loader:'url-loader',
                    options:{
                        limit:'15000',
                        name:'./dist/img/[hash:8].[ext]'
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
        new CleanWebpackPlugin('./dist')
    ]
}