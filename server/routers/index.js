// module.exports=function(app){
//   app.use('/api',require('./login.js'))
// }
module.exports = function (app){

  app.use('/api',require('./login.js'));
  console.log('app',app)
  //  app.use('/api',function(req,res){
  //    res.send('1111')
  //  })
}
