var mongoose = require('mongoose')
//var db = mongoose.connect('mongodb://127.0.0.1/myblog')
var db = mongoose.connect('mongodb://localhost/myblog');
// db.once('open',()=>{
//     console.log('we are connected to the database');
// });

db.connection.on('open', function () {
console.log('—数据库连接成功！——')
});
/**
 * 连接异常
 */
db.connection.on('error',function (err) {
    console.log('Mongoose connection error: ' + err);
})
/**
 * 连接断开
 */
mongoose.connection.on('disconnected', function () {
    console.log('Mongoose connection disconnected');
});


 module.exports = db
