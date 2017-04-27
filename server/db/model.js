var mongoose = require('mongoose')

var db = require('./index.js')

 var UserSchame = new mongoose.Schema({
	name:String,
	password:String,
	remember:String
})

 var User =  mongoose.model('User',UserSchame)
 var user = new User({
 	name:'李元义'
 })

 user.save()