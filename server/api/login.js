
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
      // 检查 session 中的 isVisit 字段
      // 如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。
    console.log(req.session.user)

     user.findOne({'name':name},{'password':1},function(err,person){
      //如果err==null，则person就能取到数据
         if(err) return
     console.log(person)

     if(person){
       if(person.password!==req.body.password){
          res.send(200,{
            result:false,
            data:null,
            msg:'密码错误'
          })
       }else{

           req.session.user = 'lly';
           console.log(req.session)

         res.send(200,{
           result:true,
           data:person,
           msg:''
         })
       }

     }else{
     	res.send(200,'用户未注册')
     }

    });

})

router.get('/index',function(req,res){

   console.log('article',req.session)
             res.send(200,{
            result:false,
            data:null,
            msg:'密码错误'
          })
      // 检查 session 中的 isVisit 字段
      // 如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。


})





module.exports=router
