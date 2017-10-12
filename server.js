//Task 5.6 

var express = require('express');
var app = express();

app.set('view engine', 'pug');
app.set('views','./views');

app.use('/', function(req, res, next){
    console.log('Rendering login page from pug...');
    next();
});
app.all('/login', function(req, res){
  res.render('firstLogin');
});
app.all('/auth/google', function(req, res){
  res.render('afterLogin');
});
app.use(function (req, res, next) {
    res.status(404).send('Sorry wrong request...')
});
app.listen(3000);