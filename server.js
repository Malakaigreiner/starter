// make express available
const express = require('express');
//turn on express
const app = express();
// make a server to handle TCP connections and use the app (our express instance) to handle endpoints (/) and requests
const server = require('http').Server( app )

// make socket io available
const io = require('socket.io')(server);

const fs = require('fs'); // make the file system available

let storage = [
  {
    "lat": 0,
    "lon": 0,
    "hash": 0,
  },

]

//serve out files in our public_html folder
app.use(express.static('public_html'));

//when app starts, populate the storage variable with it's history

// fs.readFile('array.txt', (err, data) => {
//   if (err) throw err;
//   console.log(data);
//   let storage = data
// });
//
//
// save the storage every minute incase the server crashes
// setInterval(function(){
//
//   var file = fs.createWriteStream('array.txt');
//   file.on('error', function(err) { /* error handling */ });
//   storage.forEach(function(v) { file.write(v.join(', ') + '\n'); });
//   file.end();
//
// }, 60 * 1000)


io.on('connection', function(socket){

  //log out the unique identifier for this connection
  console.log(socket.id);

  //let the clinet store some things in the list
  socket.on('storeData', function(dataToStore){

    storage.push(dataToStore)

    console.log(storage)
  })

  socket.on('removeData', function(hashRemoval){

    console.log("before: ", storage)

    storage = storage.filter(checkforHash)

    function checkforHash(hashValue){

      if(hashValue != hashRemoval){
        return true;
      }else{
        return false;
      }


    }
    console.log("after: ", storage)

  })


  //give the storage list back to the clinet
  socket.on('recallData', function(cb){
    cb(storage);
  })

})





//turn on our server so it can recieve requests

let port = process.env.PORT || 3000;

server.listen(port, function(){
  console.log('app is listening on port ' + port)
})
