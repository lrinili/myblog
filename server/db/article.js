var mongoose = require('mongoose');
var db = require('./index.js')
var ArticleSchema = new mongoose.Schema({
	id:ObjectId,
	article:{type:[],default:[{Date.now()}]},
	created:{type:Date,default:Date.now()}
})
var ArticleModel = mongoose.model.('article',ArticleSchema)
module.exports = ArticleModel