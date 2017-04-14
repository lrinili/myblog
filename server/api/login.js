
var express = require('express');
var router  = express.Router();
// router.use('/',function(req,res,next){
//   console.log( Date.now())
//   next()
// })
var User = require('../db/user.js')
var userEntity = new User({name:'lly',password:'123456'})
userEntity.save()
router.post('/login',function(req,res){
   // var querName= User.find({name:'lly'})
  
  User.find({'name':'lly'},function(err,person){
      //如果err==null，则person就能取到数据
      console.log('person',person)
      res.send(person)
    });
     
})
module.exports=router
