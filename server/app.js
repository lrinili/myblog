//后端入口
var express = require('express')
var app = express()
//var router = express.Router()
var routers = require('./routers/index.js')
app.use(express.static('../'))




app.get('/',function(req,res){
  console.log('当前文件夹',process.pwd())
  res.sendFile('../index.html')
})
  routers(app)
app.listen(3009,function(){
  console.log('listening on port 3009')
})
