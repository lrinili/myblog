
var express = require('express');
var router  = express.Router();
var querystring = require('querystring');
var mongoose = require('mongoose')

 require('../db/user.js')
var user = mongoose.model('User')
router.get('/index',function(req,res){

      var id = req.body.id
      console.log(req.session)
      // 检查 session 中的 isVisit 字段
      // 如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。


})
module.exports=router
