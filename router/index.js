// import express from 'express'
// var app = express()
// app.use('/login',function(req,res,next){
// 	console.log('login')
// })
var express = require('express');
var router = express.Router();
var login = require('./login.js')

// 该路由使用的中间件
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});
// 定义网站主页的路由
router.get('/', function(req, res) {
  res.send('Birds home page');
});
// 定义 about 页面的路由
// router.get('/about', function(req, res) {
//   res.send('About birds');
// });
router.use('/login',login)
module.exports = router;