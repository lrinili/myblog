var express = require('express');
var router = express.Router();
var querystring = require('querystring');
var mongoose = require('mongoose')
var jwt = require('jsonwebtoken')
require('../db/user.js')
var user = mongoose.model('User')
var createToken = require('../middle/createToken.js')
router.post('/login', function(req, res) {
  
    var name = req.body.name
    console.log('req', req.body)
    user.findOne({ 'name': name }, function(err, person) {
        if (err) return
        console.log('person',person)

        if (person) {
            if (person.password !== req.body.password) {
                res.send(200, {
                    result: false,
                    data: null,
                    msg: '密码错误'
                })
            } else {
                if (req.session.userName) {

                    console.log('第N次了', req.session.userName)
                } else {
                    req.session.userName = person;
                    console.log('第1次了')
                }






                var token = createToken(person)
                res.send(200, {
                        result: true,
                        data: person,
                        token: token,
                        msg: ''
                    })
                    // var decoded = jwt.verify(token, '121');
                    //  console.log('decoded',decoded)


            }
        } else {
            res.send(200, '用户未注册')
        }

    });

})
module.exports = router
