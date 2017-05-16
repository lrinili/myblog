var mongoose = require('mongoose');
var db = require('./index.js')
var ArticleSchema = new mongoose.Schema({
	article:{type:[],default:[{'time':Date.now()}]},
	created:{type:Date,default:Date.now()}
})
var ArticleModel = mongoose.model('article',ArticleSchema)
module.exports = ArticleModel