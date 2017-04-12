
var express = require('express');
var router  = express.Router();
// router.use('/',function(req,res,next){
//   console.log( Date.now())
//   next()
// })

router.post('/login',function(req,res){
  console.log('req',req)
  res.send('dadad')
})
module.exports=router
