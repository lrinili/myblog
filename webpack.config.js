var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports={
	devtool:'eval-source-map',//便于调试
	entry: __dirname +"/public/main.js",   //入口
	output:{
		path:__dirname+'/dist',  //输出 文件夹
		filename:'bundle.js'
	},
	//生成本地服务器
	devServer:{
		historyApiFallback:true, //不跳转
		inline:true,
		port:'5001',
		 proxy:{
		 	'/api':{
		 		tartget:'http://localhost:3009/api',
		 		secure:false,
		 		changeOrigin:true,
		 		pathRewrite:{'^/api':''}
		 	}
		 }
	},
	module:{
		rules:[
			{test:/\.(html|tpl)$/,use:'html-loader'},
			{test:/\.js$/,use:'babel-loader', exclude: /node_modules/},
			{test:/\.vue$/,use:'vue-loader'},
			{test:/\.css$/,loader: 'style-loader!css-loader'},
			{test:/\.(eot|svg|ttf|woff|woff2)(\?\S*)?$/,use:'file-loader'},
			{test:/\.(png|jpe?g|gif|svg)(\?\S*)?$/,use:'file-loader'}

		]
	},
	resolve: {
		extensions: ['.js','.vue']
},
plugins: [
	new HtmlWebpackPlugin({
		template:  "./index.html",
		inject: 'body'
	}),
	//new webpack.HotModuleReplacementPlugin()//热加载插件
],
resolve: {
  alias: {
    'vue$': 'vue/dist/vue.common.js'
  }
}
}
