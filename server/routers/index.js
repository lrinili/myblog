// module.exports=function(app){
//   app.use('/api',require('./login.js'))
// }
//var checkToken = require('../middle/createToken.js')
module.exports = function (app){

  app.use('/api',require('../api/login.js'));
   app.use('/api',require('../api/article.js'));
  //  app.use('/api',function(req,res){
  //    res.send('1111')
  //  })
}
