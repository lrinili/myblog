var express = require('express')
    routes = require ('./router/login.js')
var app = express()
    routes(app)
app.listen(3000,function(){
  console.log('listening on port 3000')
})
