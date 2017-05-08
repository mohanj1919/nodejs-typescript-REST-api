var express = require('express');
var app = express();
var feature = require('./feature.ts');
app.get('/', function (req, res) {
    res.send('Hello World!');
});
app.get('/feature/', function (req, res) {
    res.send(feature.testFunc());
});
app.listen(3000, function () {
    console.log('Example app listening on port 3000!');
});
