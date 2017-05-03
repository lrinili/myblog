var mongoose = require('mongoose')
var db = require('./index.js')
var UserSchema = new mongoose.Schema({
  name:{
  	type:String,
  	default:'new name',
  	trim:true,
  	set:function(name){
  		if(!name) return 
  		 if(0!==name.indexof('lly')){
  		 	name = 'lly'+'new name'
  		 }
  		 return name 
  	},
  	get:function(name){
  		if(!name) return 
  			if(name!=='lly'){
  				name = 'seuic'+name
  			}else{
  				name='seuic'
  			}
  			return name 
  	}
  },
  age:Number,
  login:{type:Date,default:Date.now}
})
UserSchema.virtual('fullName').get(function(){
	return this.name+this.login
})
var User = mongoose.model('user',UserSchema)
// var user = new User({
//     name : 'T'                 //用户账号
// });
//  user.save()
module.exports = User
