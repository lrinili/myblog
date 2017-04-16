
var express = require('express');
var router  = express.Router();
var querystring = require('querystring');
// router.use('/',function(req,res,next){
//   console.log( Date.now())
//   next()
// })
var User = require('../db/user.js')
var userEntity = new User()
userEntity.save()
router.post('/login',function(req,res){
   // var querName= User.find({name:'lly'})
   // var post = ''
   // req.on('data',function(chunk){
   // 	post+=chunk
   // }) 
   // req.on('end',function(){
   // 	console.log('before', post)
   // 	post = querystring.parse(post)
   // 	console.log('after', post)
   // })
      
      var name = req.body.username
      console.log('请求body',name)
  User.find({'name':name},function(err,person){
      //如果err==null，则person就能取到数据
      console.log('person',person.length)

     if(person.length>0){
     	res.send(person)
     }else{
     	res.send(400,'没有此用户请注册')
     }




      
    });
     
})
module.exports=router
