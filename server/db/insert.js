var mongoose = require('mongoose')
 require('./model.js')
var User = mongoose.model('user')
var name = new User({
  name:'kkk'
})
name.save()
