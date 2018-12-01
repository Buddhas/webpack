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
        // publicPath:'/dist/', // 配置按需加载或静态资源（如js、图片、css）等的公共路径
        filename:'js/[name].bundle.js',
        chunkFilename:'js/[name].chunk.js'
    },
    devServer:{
        // contentBase: path.join(__dirname, "./dist"),
        port:9001,
        inline:true,
        historyApiFallback:true,
        proxy:{
            '/api': {
                target: 'http://localhost:8087',    
                pathRewrite: { '^/api': '' },
                changeOrigin: true,
                secure: false, // 接受 运行在 https 上的服务
              },
              '/toutiao': {
                target: 'https://www.toutiao.com/api/pc/focus/',    
                pathRewrite: { '^/toutiao': '' },
                changeOrigin: true,//本地会虚拟一个服务端接收你的请求并代你发送该请求
                secure: false, // 接受 运行在 https 上的服务
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
                        name:'img/[hash:8].[ext]',
                        publicPath:'../'
                    }
                    }
                ]
            }
        ]
    },
    plugins:[
        new ExtractTextWebpackPlugin({
            filename:'css/[name].min.css'
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