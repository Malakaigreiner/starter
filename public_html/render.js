let socket = io.connect();

let futch;
let futchSeed;
let backa;
let backb;
let backc;
let position;
let locationData;
let x;
let y;

var answer1 = "gmail";
var answer2 = "gmail";
var answer3 = "gmail";
var answer4 = "gmail";
var answer5 = "gmail";
var answer6 = "gmail";
let dropButton;
let storedLat;
let storage;
// let futchure;

var loc = []

function hashCode(s){

  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);

}

function setup() {

  var canvas = createCanvas(displayWidth, displayHeight, WEBGL);
  backa = random(0,255);
  backb = random(0,255);
  backc = random(0,255);
  let fr = 12;

  intervalCurrentPosition(positionPing, 5000);


  let futchSeed = hashCode(answer1) + hashCode(answer2) + hashCode(answer3) + hashCode(answer5) + hashCode(answer5)+ hashCode(answer6);
  //build a blob with the futchSeed as it's random seed / unique ID
  futch = new futchure( futchSeed );


}


function draw() {
  background(backa+mouseY,backb,backc);
  orbitControl();
  futch.render();
  // drop.getData();
}



////drop button / function

function dropMe(){

  getCurrentPosition(function(position){

    let futchSeed = hashCode(answer1) + hashCode(answer2) + hashCode(answer3) + hashCode(answer5) + hashCode(answer5) + hashCode(answer6);

    //prep the data as a json object to store on the server
    let packedData = {
      "hash": hashCode(answer1) + hashCode(answer2) + hashCode(answer3) + hashCode(answer5) + hashCode(answer5) + hashCode(answer6),
      "lat": position.latitude,
      "lon": position.longitude

    } //close initial pack

  console.log(packedData);

  //use socket.io to send the packed data to the server
  socket.emit('storeData', packedData)

}) //close packing function


}//close button operation

//
// function searchLand(){

function positionPing(position){

  // console.log(position.latitude);

  socket.emit('recallData', function(storage){

      function lookFor(storedLat) {

          if (storedLat.lat === position.latitude){
            return "nice";
          } else {
            return false;
          }

      }
  console.log(storage.find(lookFor));

  });
}


  // {
  //   function positionPing(position){
  //     print(position.latitude);
  //     var found =
  //     storage.find(function(lat,lon){
  //       return lat = position.latitude;
  //       return lon = position.longitude;

  // console.log(found);
  // console.log(storage);
// }

  //this is the only way you can get the storeage:
  // you will want to do this not on a mouse click, but on an interval, and inside of this callback function you'll want to loop ovoer the storage and then cehck it against the users current position for each stored futch. check the distancce and decide which futhc to show?
  // function positionPing(position){
  //   print(position.latitude);
  //   socket.emit('recallData',function(storage){
  //
  //     var found =
  //       storage.find(function(lat,lon){
  //         return lat = position.latitude;
  //         return lon = position.longitude;
  //       })
  //     console.log(found);
      // storage.includes(position.latitude && position.longitude) === true {
      //   get the blob
      // } else {
      //   allow drop
      // }
      // var distance = calcGeoDistance(position.latitude, position.longitude, storage.lat, this.storedData.lon, 'mi')
      // if distance is
      // render a futch of that same set of data
      // console.log(storage);
      // intervalCurrentPosition(positionPing, 5000);
      // check if storage contains
//   })
//   print("lat: " + position.latitude);
//   print("long: " + position.longitude);
// }
