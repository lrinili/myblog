var mongoose = require('mongoose')
var db = require('./index.js')
var UserSchame = new mongoose.Schema({
	name:String,
	password:String,
	remember:String,
	create:{type:Date,default:Date.now()},
	article:{type:String,default:'11111'}
})
UserSchame.methods.getUser = function(cb){
	this.model('User').findOne({name:this.name},cb)
}
UserSchame.virtual('fullName').get(function(){
	return this.name+' '+this.password
})
UserSchame.statics.getUser = function(query,cb){
	this.findOne({name:query},cb)
}
var UserModel = db.model('User',UserSchame)
module.exports=UserModel
