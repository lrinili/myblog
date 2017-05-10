var jwt = require('jsonwebtoken')
var secret = '121'
module.exports=function(obj){
	var expiry = new Date()
    expiry.setHours(expiry.getHours()+1);//有效期设置为1h
   var token = jwt.sign({
   	 user:obj,
   	 exp: parseInt(expiry.getTime()/1000)
   },secret)

   return token 
}