var express = require('express');

var server = express();

server.listen(9000);

server.set('view engine', require('ejs'));
server.set('views', __dirname + "/views");
server.use(require('body-parser').urlencoded({extended: true}));

server.get('/', function(req, res){
    console.log('root url');
    res.send('Root url');
});

server.get('/home', function(req, res){
    res.render('index.ejs', {title: "<h1>This is my first project </h1>"});
});

server.get('/studentRegister', function(req, res){
    res.render('register.ejs', {title: "<h1>This is my first project </h1>"});
});

server.post('/result', function(req, res){
    console.log(req.body);
    res.render('result.ejs', req.body);
});
