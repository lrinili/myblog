
var express = require('express');
var router  = express.Router();
var querystring = require('querystring');
// router.use('/',function(req,res,next){
//   console.log( Date.now())
//   next()
// })
var User = require('../db/user.js')
router.post('/login',function(req,res){

      var name = req.body.name
      console.log('请求body',name)
  User.findOne({'name':name},function(err,person){
      //如果err==null，则person就能取到数据
      console.log('person',person)

     if(person.length>0){
     	res.send(person)
     }else{
     	res.send(400,'没有此用户请注册')
     }





    });

})
module.exports=router
