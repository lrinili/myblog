var mongoose = require('mongoose')
var db = require('./index.js')
var UserSchema = new mongoose.Schema({
  name:String,
  age:Number,
  login:{type:Date,default:new Date()}
})

var User = mongoose.model('user',UserSchema)
// var user = new User({
//     name : 'T'                 //用户账号
// });
//  user.save()
module.exports = user
