var express = require('express');
var app = module.exports = express();
app.set('view engine', 'ejs');

app.use('/js', express.static('js'));
app.use('/dist', express.static('dist'));
app.use('/pages', express.static('pages'));
app.use('/bower_components', express.static('bower_components'));

app.get('/', function (req, res) {
  res.render(__dirname + '/pages/index.ejs');
});

app.get('/tramites', function (req, res) {
  res.render(__dirname + '/pages/tramites.ejs');
});

app.get('/tramite', function (req, res) {
  res.render(__dirname + '/pages/tramite.ejs');
});

app.get('/documentos', function (req, res) {
  res.render(__dirname + '/pages/documentos.ejs');
});

app.get('/login', function (req, res) {
  res.render(__dirname + '/pages/login.ejs');
});

//start
var port = process.argv[2];
if (port == null) { port = 80;}
app.listen(port, function () { console.log('Listening on port ' + port); });
