var path = require('path')

module.exports = {
    entry:{
        app:'./src/app.js'
    },

    output:{
        path:path.resolve(__dirname,'./dist'),
        publicPath:'./dist/',
        filename:'[name].bundle.js'
    },

    module:{
        rules: [
            { 
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
                ] 
            }
        ]
    }
}