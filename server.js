var express = require('express'),
  fs = require('fs');

var app = express();

app.configure(function(){
  app.use(express.bodyParser());
});

app.use(express.favicon(__dirname + '/public/favicon.ico'));
app.use(express.static(__dirname + '/public'));

app.listen(3000);
console.log('Listening on port 3000...');

