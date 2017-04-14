var mongoose = require('mongoose')
//var db = mongoose.connect('mongodb://127.0.0.1/myblog')
var db = mongoose.connect('mongodb://localhost/myblog');
// db.once('open',()=>{
//     console.log('we are connected to the database');
// });

db.connection.on('open', function () { 
console.log('—数据库连接成功！——')
});



 module.exports = db