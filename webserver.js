// Import required pckages
var express = require('express');
var app = express();

const port = process.env.port || process.env.PORT || 3000;

app.use(express.static(__dirname + '/public'));
app.get('/api', function (req, res) {
    res.send('Hello World from api!')
  })

app.listen(port);
console.log('Express File server is up in port ',port);