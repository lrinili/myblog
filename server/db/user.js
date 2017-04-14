var mongoose = require('mongoose')
var db = require('./index.js')
var UserSchame = new mongoose.Schema({
	name:String,
	password:String,
	remember:String
})
UserSchame.methods.getUser = function(query,cb){
	this.model('User').findOne(query,cb)
}
var UserModel = db.model('User',UserSchame)
module.exports=UserModel
