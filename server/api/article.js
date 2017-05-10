
var express = require('express');
var router  = express.Router();
var querystring = require('querystring');
var mongoose = require('mongoose')

 require('../db/article.js')
var ArticleModel = mongoose.model('article')
var checkToken = require('../middle/checkToken.js')
router.get('/index',checkToken,function(req,res){

      var ArticleEntity = new ArticleModel()
      ArticleEntity.save()
      res.send('req.Authorization')
      // 检查 session 中的 isVisit 字段
      // 如果存在则增加一次，否则为 session 设置 isVisit 字段，并初始化为 1。


})
module.exports=router
