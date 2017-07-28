//webpack.config.js名字是默认的 就叫这个名字
//写webpack最重要的要有 入口和出口，配置可以采用node的写法
let path = require('path');// 专门解决路径问题的
let HtmlWebpackPlugin = require('html-webpack-plugin');
// console.log(path.resolve('dist'));
module.exports = {
    entry:'./src/main.js',
    output:{ //出口要求打包到哪个路径下，打包文件的名字
        path:path.resolve('dist'),//输出的路径必须是绝对路径
        filename:'bundle.js'
    },
    //给js文件配一个翻译官，翻译将es6-> es5 / es7->es5
    //babel 将代码转译 babel-core babel-loader
    //use使用某个翻译官 （加载器）
    //要排除掉node_modules 文件
    module:{
        rules:[
            {test:/\.js$/,use:'babel-loader',exclude:/node_modules/},
            //从右往左写，先执行css-loader 在执行style-loader
            {test:/\.css$/,use:['style-loader','css-loader'],exclude:/node_modules/},
            {test:/\.less$/,use:['style-loader','css-loader','less-loader']},
            //如果图片大小是8192之内的转化成base64 否则原图输出
            {test:/\.(jpg|png|gif)$/,use:'url-loader?limit=8192'}
        ]
    },
    plugins:[ //配置的是webpack插件
        new HtmlWebpackPlugin({
            template:'./src/index.html'
        })
    ]
};