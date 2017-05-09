var jwt = require('jsonwebtoken')
var secret = '121'
module.exports=function(obj){
   var token = jwt.sign({
   	 user:obj
   },secret,{
   	expiresIn:60
   })

   return token 
}