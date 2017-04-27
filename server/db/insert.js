var mongoose = require('mongoose')
 require('./model.js')
var User = mongoose.model('user')
var name = new User()
name.save(function(err){
	if(err){
		console.log(err);
		return
	}
	console.log(name.name);
})
 