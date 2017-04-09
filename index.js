 var express = require('express')
 var app = express()
 var router = express.Router()

 var birds = require('./router/index.js');
 var fs =  require('fs')
 var readable = fs.createReadStream('./public/index.html')
 app.use(express.static('public'))
 // var mongoose = require('mongoose');
//   var db = mongoose.connect('mongodb://localhost/part9');
//
//
//     var PersonSchema = new mongoose.Schema({
//     	name:String
//     })
//
//      var PersonModel = db.model('test2',PersonSchema);
//      var PersonEntity = new PersonModel({name:'Krouky'});
//      PersonEntity.save(function(error,doc){
//   if(error){
//      console.log("error :" + error);
//   }else{
//      console.log(doc);
//   }
// });
   //console.log(mongoose)show


// var TestSchema = new mongoose.Schema({
//     name : { type:String },
//     age  : { type:Number, default:0 },
//     email: { type:String },
//     time : { type:Date, default:Date.now }
// });
// var TestModel = db.model("test1", TestSchema );

// var TestEntity = new TestModel({
//     name : "helloworld",
//     age  : 28,
//     email: "helloworld@qq.com"
// });
// TestEntity.save()
// TestEntity.save(function(error,doc){
//   if(error){
//      console.log("error :" + error);
//   }else{
//      console.log(doc);
//   }
// });

 app.get('/',function(req,res){
   //res.send('hello word')
    //readable.pipe(res)
    res.sendFile('./public/index.html')
 })

//  app.use('/api',function(req,res,next){
//  	//res.send('api+1')
//  	// console.log('1')
//   //      router.get('/login',function(request,response){
//   //      	console.log('2')
//   //      	response.send('login success')
//   //      })
// router.use(function timeLog(req, res, next) {
//   console.log('Time: ', Date.now());
//   next();
// });


//console.log(birds)

//  })
//app.use('/birds', birds);
app.listen(5000)
// var express = require('express');
// var app = express();
//
// app.get('/', function(req, res) {
//   res.send('hello, express');
// });
//
// app.listen(3000);
