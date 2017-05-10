var jwt = require('jsonwebtoken')

module.exports = function(req, res, next) {
   if(req.headers['authorization']){
    var token = req.headers['authorization'].split(' ')[1]

       var decoded = jwt.decode(token,'121') // 解密token
       if(decoded.exp<Date.now()/1000){
        res.send(401,{
          result:false,
          data:[],
          msg:'token 过期'
        })
       }    
     }else{
       res.send(400,{
          result:false,
          data:[],
          msg:'无权限'
        })    
     }


     next()
}
