
var express = require('express');
var router  = express.Router();
// router.use('/',function(req,res,next){
//   console.log( Date.now())
//   next()
// })

router.get('/login',function(req,res){
  res.send('login')
})
