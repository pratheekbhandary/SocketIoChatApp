var express = require('express');
var app = express();
var server = app.listen(process.env.PORT || 5000, listen);
var io = require('socket.io')(server);
const Person=require('./server/person');

function listen() {
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://' + host + ':' + port);
  }
  
  app.use(express.static('public'));

  app.get('/prat',(req,res)=>{
    res.send({hi:'there'})
  });

  io.on('connection', function (client) {
    console.log("We have a new client: " + client.id);
  }
);