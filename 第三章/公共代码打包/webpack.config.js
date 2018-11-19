var webpack = require('webpack')
var path = require('path')


module.exports = {
    entry:{
        'pageA':'./src/pageA.js',
        'pageB':'./src/pageB.js',
        'vendor':['lodash'] //第三方引入包
    },
    output:{
        path:path.resolve(__dirname,'./dist'),
        filename:'[name].bundle.js',    
        chunkFilename:'[name].chunk.js'
    },
    plugins:[
        // vendor第三方引入包生成代码,manifest是webpack生成代码
        new webpack.optimize.CommonsChunkPlugin({
            names:['vendor','manifest'],
            minChunks:Infinity
        }),
        //业务公用代码
        new webpack.optimize.CommonsChunkPlugin({
            name:'common',
            chunks:['pageA','pageB'],
            minChunks:2
        }),
    ]
}