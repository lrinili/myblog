const webpack = require('webpack')
module.exports={
	entry:{
		entry:'./index.js'
	},
	output:{
		path:__dirname+'/dist',
		filename:'bundle.js'
	}

}