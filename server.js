const express = require('express');
//make express available
const io = require('socket.io');
// make socket.io available
const app = express();
//turn on express
const server = require('https').Server( app );
//make a server to handle tcp connections, and use the app (our express instance) to handle end points & requests

//serve out files in our public_html folder
app.use(express.static('public_html'));

//turn on our server so it can recieve requests

let port = process.env.PORT || 3000;

server.listen(port, function(){
  console.log('app is listening on port 3000!')
})
