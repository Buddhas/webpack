var path = require('path')
var HtmlWebpackPlugin  = require('html-webpack-plugin')
var ExtractTextPlugin  = require('extract-text-webpack-plugin')

module.exports = {
    entry:{
        app:'./src/app.js'
    },

    output:{
        path:path.resolve(__dirname,'dist'),
        publicPath:'../dist/',
        filename:'[name].bundle.js'
    },

    module:{
        rules: [
            { 
                //css-loader: 加载.css文件   style-loader:使用<style>将css-loader内部样式注入到我们的HTML页面
                test: /\.(css|less)$/,   
                use: [
                    {
                        loader:'style-loader',
                        options:{
                           
                            singleton:true
                        }
                    },
                    {
                        loader:'css-loader',
                        options:{
                            minimize:true,
                            module:true,
                        }
                    }
                    //顺序不能变，webpack是自下而上解析的
                ] 
            }
        ]
    },

    plugins:[
        //生成创建html入口文件
        new HtmlWebpackPlugin({
            inject:true
        }),
        
        //将css单独打包
        new ExtractTextPlugin({
            filename: '[name].min.css',
        })
    ]
}