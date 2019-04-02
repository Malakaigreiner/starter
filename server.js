const express = require('express');
//make express available
const io = require('socket.io');
// make socket.io available
const app = express();
//turn on express
const server = require('http').Server( app );
//make a server to handle tcp connections, and use the app (our express instance) to handle end points & requests

const fs = require('fs'); // make the file system available



//serve out files in our public_html folder
app.use(express.static('public_html'));

//turn on our server so it can recieve requests


//let us store and recall from the storage


//recall some data

function recallData(){
  fs.readFile('storage.js', (err, data) => {
    if (err) throw err;
    // console.log(data);
    return data;

  });
}

recallData();


//store some new data



let port = process.env.PORT || 3000;

server.listen(port, function(){
  console.log('app is listening on port 3000!')
})
