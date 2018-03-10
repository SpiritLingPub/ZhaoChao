
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

router.all('*', (req, res, next) => {
    var token = (req.body && req.body.access_token) || (req.query && req.query.access_token) || req.headers['x-access-token'];
    if (token) {
        try {
            var decoded = jwt.decode(token.substring(1,token.length-1),'zhang_chao_di_yi');
            if (decoded.exp <= Date.now()) {
                res.end('Access token has expired', 400);
            }
            else {
                console.log('解析成功')
                next()
            }
        } catch (err) {
            res.end('解析出现异常', 400)
        }
    } else {
        res.end('你还没有登录！！！', 404)
    }
})

router.post('/person', (req, res) => {
    console.log(req.body)
})

router.get('/freelancer',(req,res)=>{
    connection.query('select * from upwork_list',(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.end(JSON.stringify(result))
        }
    })
})

router.get('/echarts',(req,res)=>{
    connection.query('select main_services name,count(1) value from upwork_list group by main_services order by main_services',(err,result)=>{
        if(err){
            console.log(err)
        }else{
            res.json({
                result:result
            })
        }
    })
})
module.exports = router;
