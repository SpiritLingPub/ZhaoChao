var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var async = require('async');
var multer = require("multer");
var fs = require('fs')
var upload = multer({
    dest: './uploads'
});
var connection = mysql.createConnection({
    host: 'localhost',
    user: 'superchao',
    password: 'Zz11136036',
    port: '3306',
    database: 'test'
})
connection.connect();


router.post('/upload', upload.single('avatar'), function (req, res, next) {
    fs.rename(req.file.path, '../my_app/src/img/' + req.file.originalname, function (err) {
        if (err) {
            throw err;
        }
    })
    res.end(JSON.stringify(req.file) + JSON.stringify(req.body));
})

router.get('/', (req, res) => {
    console.log('123')
})
router.post('/upload_file', upload.single('avatar'), function (req, res, next) {
    fs.rename(req.file.path, '../my_app/src/file/' + req.file.originalname, function (err) {
        if (err) {
            throw err;
        }
    })
    res.end(JSON.stringify(req.file) + JSON.stringify(req.body));
})

router.post('/cin', (req, res) => {
    var insertsql = JSON.parse(req.body.cin);
    connection.query('INSERT INTO upwork_list(firstname,lastname,country,username,judge,send_me,agree_service,main_services,main_services_type,offer_clients,experience_level,professional_title,professional,english_proficiency,hourly_rate,hours_week,months_long,address_one,address_two,city,postal_code,phone_number,imgurl,job_success) values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)'
        , [insertsql.firstname, insertsql.lastname, insertsql.country, insertsql.username, insertsql.judge, insertsql.send_me, insertsql.agree_service, insertsql.main_services, insertsql.main_services_type, insertsql.offer_clients, insertsql.experience_level, insertsql.professional_title, insertsql.professional, insertsql.english_proficiency, insertsql.hourly_rate, insertsql.hours_week, insertsql.months_long, insertsql.address_one, insertsql.address_two, insertsql.city, insertsql.postal_code, insertsql.phone_number, insertsql.imgurl, insertsql.job_success]
        , (err, result) => {
            if (!err) {
                res.end()
            } else {
                console.log(err)
            }
        })
})

router.get('/get_list', (req, res) => {
    connection.query('select * from upwork_list where main_services = "' + req.query.cin.replace(/%26/g, "&") + '"'
        , (err, result) => {
            if (err) {
                res.end()
                console.log(err)
            }
            else {
                res.send(JSON.stringify(result))
            }
        })
})

router.get('/all_types', (req, res) => {
    let selectsql = JSON.parse(req.query.cin)
    console.log(selectsql)
    let if_have = false;
    let judge_page_count = false;
    if (selectsql.page_count) {
        judge_page_count = true
    }
    let judge_where = function () {
        if (selectsql.job_success == 'Any job success' && selectsql.main_services == 'Any category' && selectsql.hourly_rate == 'Any hourly rate') {
            return ' '
        }
        else {
            return ' where '
        }
    }
    let judge_main_services = function () {
        if (selectsql.main_services == 'Any category') {
            return ''
        } else {
            if_have = true
            return ' main_services =  "' + selectsql.main_services.replace(/%26/g, "&") + '"'
        }
    }
    let judge_job_success = function () {
        if (selectsql.job_success == 'Any job success') {
            return ''
        } else {
            if (if_have) {
                return ' and job_success >= "' + selectsql.job_success + '"'
            } else {
                if_have = true
                return ' job_success >=  "' + selectsql.job_success + '"'
            }
        }
    }
    let judge_hourly_rate = function () {
        if (selectsql.hourly_rate == 'Any hourly rate') {
            return ''
        } else {
            if (if_have) {
                return ' and (hourly_rate>= ' + (parseInt(selectsql.hourly_rate) - 10) + ' and hourly_rate<= ' + (parseInt(selectsql.hourly_rate) + 10) + ') '
            } else {
                return ' (hourly_rate>= ' + (parseInt(selectsql.hourly_rate) - 10) + ' and hourly_rate<= ' + (parseInt(selectsql.hourly_rate) + 10) + ') '
            }
        }
    }
    if (!judge_page_count) {
        connection.query('select * from upwork_list' + judge_where() + judge_main_services() + judge_job_success() + judge_hourly_rate() + ' limit ' + (selectsql.pagenum - 1) * 10 + ',' + selectsql.pagenum * 10
            , (err, result) => {
                if (err) {
                    console.log(err)
                }
                else {
                    res.send(JSON.stringify(result))

                }
            })
    } else {
        connection.query('select count(*) from upwork_list' + judge_where() + judge_main_services() + judge_job_success() + judge_hourly_rate()
            , (err, result) => {
                if (err) {
                    console.log(err)
                } else {
                    res.send(JSON.stringify(result))
                }
            })
    }
})

module.exports = router;
