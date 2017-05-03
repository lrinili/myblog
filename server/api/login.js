
var express = require('express');
var router  = express.Router();
var querystring = require('querystring');
var mongoose = require('mongoose')
// router.use('/',function(req,res,next){
//   console.log( Date.now())
//   next()
// })
 require('../db/user.js')
// var userEntity = new User()
// userEntity.save()
var user = mongoose.model('User')

router.post('/login',function(req,res){

      var name = req.body.name

     user.find({'name':name},function(err,person){
      //如果err==null，则person就能取到数据


     if(person.length>0){
     	res.send(person)
     }else{
     	res.send(200,'没有此用户请注册')
     }
      
    });

})
module.exports=router
