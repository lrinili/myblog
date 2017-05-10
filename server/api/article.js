
var express = require('express');
var router  = express.Router();
var querystring = require('querystring');
var mongoose = require('mongoose')

<<<<<<< HEAD
 require('../db/user.js')
var user = mongoose.model('User')
router.get('/index',function(req,res){


   console.log('article',req.session)
   res.send(req.session.userName)
=======
 require('../db/article.js')
var ArticleModel = mongoose.model('article')
var checkToken = require('../middle/checkToken.js')
router.get('/index',checkToken,function(req,res){

      var ArticleEntity = new ArticleModel()
      ArticleEntity.save()
      res.send('req.Authorization')
>>>>>>> 42e819f438049833327ed08795ad2e66cf5a07d4
      // 检查 session 中的 isVisit 字段
      // 如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。


})
module.exports=router
