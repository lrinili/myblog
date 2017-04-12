//后端入口
var express = require('express')
var app = express()
//var router = express.Router()
var routers = require('./routers/index.js')
app.use(express.static('../'))

app.all("*",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});


app.get('/',function(req,res){
  console.log('当前文件夹',process.pwd())
  res.sendFile('../index.html')
})
  routers(app)
app.listen(3009,function(){
  console.log('listening on port 3009')
})
