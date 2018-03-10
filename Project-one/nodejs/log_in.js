
var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var moment = require('moment')
var jwt = require('jwt-simple');
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'superchao',
    password: 'Zz11136036',
    port: '3306',
    database: 'test'
})
connection.connect();

router.post('/log_in', (req, res) => {
    var selectsql=JSON.parse(req.body.cin)
    var username = selectsql.username
    var password = selectsql.password
    console.log(username)
    console.log(password)
    connection.query('select ID from upwork_list where username = ? and password=?'
        , [username, password]
        , (err, result) => {
            if (err) {
                console.log(err)
            } else {
                var ID = result[0].ID
                var expires = moment().add(7, 'days').valueOf();
                var token = jwt.encode({
                    iss: ID,
                    exp: expires
                }, 'zhang_chao_di_yi');
                console.log(token)
                res.json({
                    token: token,
                    expires: expires,
                    user: result
                })
            }
        })
})


module.exports = router;
