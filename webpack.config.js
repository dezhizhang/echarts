const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry:'./src/index.js',
    context:process.cwd(),
    mode:'development',
    output:{
        path:path.resolve(__dirname,'dist'),
        filename:'main.js',
        libraryTarget:'umd',
        library:'css',
    },
    devServer:{
        port:9999,
        open:true,
        contentBase:path.resolve(__dirname,'dist')
    },
    module:{
        rules:[
           {
               test:/\.less$/,
               use:['style-loader','css-loader','less-loader']
           },
           {
               test:/\.(png|jpg|jpeg)$/,
               use:['url-loader']
           }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            inject:'body'
        })
    ]
   
}