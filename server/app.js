//后端入口
var express = require('express')
var app = express()
//var router = express.Router()

var cookieParser = require('cookie-parser')
var bodyParser = require('body-parser')
var session = require('express-session');
var FileStore = require('session-file-store')(session);

//app.use(express.static('../'))

app.use(express.static('../'))


app.use(cookieParser('sessiontest'));

app.use(bodyParser.urlencoded({ extended: false }))

// app.use(session({
//   secret: 'recommand 128 bytes random string', // 建议使用 128 个字符的随机字符串
//   cookie: { maxAge: 60 * 1000 * 30}
// }));
    name:'lly'

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.all("*",(req,res,next)=>{

  // res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  //res.header("Access-Control-Allow-Credentials", "true");
   res.header("Access-Control-Allow-Origin", "http://localhost:5001");
  res.header("Access-Control-Max-Age", "3600");
  next();
});

var routers = require('./routers/index.js')
  //console.log('当前文件夹',process.pwd())
  res.sendFile('../index.html')
})
  routers(app)
app.listen(3009,function(){
  console.log('listening on port 3009')
})
