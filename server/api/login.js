var express = require('express');
var router = express.Router();
var querystring = require('querystring');
var mongoose = require('mongoose')
var jwt = require('jsonwebtoken')
require('../db/user.js')
var user = mongoose.model('User')
var createToken = require('../middle/createToken.js')
router.post('/login', function(req, res) {
  
    var name = req.body.name
    console.log('req', req.body)
    user.findOne({ 'name': name }, function(err, person) {
        if (err) return
        console.log('person',person)

        if (person) {
            if (person.password !== req.body.password) {
                res.send(200, {
                    result: false,
                    data: null,
                    msg: '密码错误'
                })
            } else {
                if (req.session.userName) {

                    console.log('第N次了', req.session.userName)
                } else {
                    req.session.userName = person;
                    console.log('第1次了')
                }


      var name = req.body.name
      // 检查 session 中的 isVisit 字段
      // 如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。
    console.log(req.session.user)

     user.findOne({'name':name},{'password':1},function(err,person){
      //如果err==null，则person就能取到数据
         if(err) return
     console.log(person)

           req.session.user = 'lly';
           console.log(req.session)

                var token = createToken(person)
                res.send(200, {
                        result: true,
                        data: person,
                        token: token,
                        msg: ''
                    })
                    // var decoded = jwt.verify(token, '121');
                    //  console.log('decoded',decoded)



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


