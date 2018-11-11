var express = require('express');
var app = express();

var server = app.listen(process.env.PORT || 5000, listen);
function listen() {
    debugger;
    var host = server.address().address;
    var port = server.address().port;
    console.log('Example app listening at http://' + host + ':' + port);
  }
  
  app.use(express.static('public'));

  var io = require('socket.io')(server);
  
io.sockets.on('connection',
  function (socket) {
  
    console.log("We have a new client: " + socket.id);
  
  }
);