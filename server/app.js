//后端入口
var express = require('express')
var app = express()
//var router = express.Router()

var bodyParser = require('body-parser')
var cookieParser = require('cookie-parser');
var session = require('express-session');
var FileStore = require('session-file-store')(session);
//app.use(express.static('../'))

app.use(express.static('../'))

app.use(cookieParser('sessiontest'));
app.use(session({
    secret: 'sessiontest',//与cookieParser中的一致
    resave: true,
    saveUninitialized:true,
    name:'lly'
}));

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.all("*",(req,res,next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With');
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  next();
});

var routers = require('./routers/index.js')
  routers(app)
app.listen(3009,function(){
  console.log('listening on port 3009')
})
