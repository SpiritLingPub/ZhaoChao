var express = require('express');
var app = express();
var sign_up = require('./sign_up');
var log_in = require('./log_in');
var private=require('./private')
var path = require('path');
var bodyparser = require('body-parser');
var jwt = require('jwt-simple');
app.set('jwtTokenSecret', 'zhang_chao_di_yi');
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname,'public')))
app.all('*', function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild');
    res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, DELETE, OPTIONS');
    if (req.method == 'OPTIONS') {
        res.sendStatus(200);
    }
    else {
        next();
    }
});
app.use('/log_in', log_in);
app.use('/private',private);
app.use('/sign_up', sign_up);
app.listen(3001, () => {
    console.log('服务器启动...')
})