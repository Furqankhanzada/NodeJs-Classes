var express = require('express');
var path = require('path');

var app = express();

app.listen(9000);

app.set('view engine', require('ejs'));
app.set('views', __dirname + "/views");
app.use(express.static(__dirname + '/public'));
app.use(require('body-parser').urlencoded({extended: true}));

var students = [];
app.get('/', function(req, res){
    var filterStudents = [];
    if(req.query.search){
        filterStudents = students.filter(function(student){
            for(var prop in student){
                if(student[prop].indexOf(req.query.search) != -1){
                    return student;
                }
            }
        });
    }
    res.render('index.ejs', {students: filterStudents.length || req.query.search ? filterStudents : students});
});

app.post('/', function(req, res){
    if(req.body){
        students.push(req.body);
    }
    res.render('index.ejs', {students: students});
});

app.get('/register', function(req, res){
    res.render('register.ejs');
});