let futch;
let futchSeed;
let backa;
let backb;
let backc;
let getrid;
let position;
let locationData;
let x;
let y;
var answer1 = "h2345234523452354234ey";
var answer2 = "ish23452342435234h";
var answer3 = "ta24352345234sdfhe";
var answer4 = "cos1223143545t";
var answer5 = "dufs23452345234523452dhio";


var loc = []

function hashCode(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  backa = random(0,255);
  backb = random(0,255);
  backc = random(0,255);

  intervalCurrentPosition(positionPing, );
  //fill these answers w/ audience input to create unique hashcode

  //create futchSeed with audience input

let futchSeed = hashCode(answer1) + hashCode(answer2) + hashCode(answer3) + hashCode(answer5) + hashCode(answer5);
  //build a blob with the futchSeed as it's random seed / unique ID
futch = new futchure( futchSeed );

  // what we need for the server ultimately is a json object:
  //generate this when the 'drop' their object
  // let dataToStore = {
  //   'lat': 93.930384234,
  //   'lon': -192.9342038424,
  //   'seed': -1335396314
  // }

}

// function place(position){
//
//   // var answer1 = ""
//   // var answer2 = ""
//   // var answer3 = ""
//   // var answer4 = ""
//   // var answer5 = ""
//   //
//   // let futchSeed = hashCode(answer1) + hashCode(answer2) + hashCode(answer3) + hashCode(answer5) + hashCode(answer5);
//
// // //json object
// // let storedFutch = {
// //     lat: position.latitude,
// //     lon: position.longitude,
// //     seed: futchSeed
// //   }
// //
// //   loc.push(storedFutch);
// //   print(loc);
// //   text(position.latitude,100,100);
// //   text(position.longitude,100,200);
// //   text(futchSeed, 100, 300);
// //   //when this button is clicked, store the lat and long you're currently at in an array
//
// }


function draw() {
  background(backa,backb,backc,30);
  orbitControl();
  futch.render();
  // drop.getData();
}

function positionPing(position){
  let futchSeed = hashCode(answer1) + hashCode(answer2) + hashCode(answer3) + hashCode(answer5) + hashCode(answer5);
  getrid = new Drop(position.latitude,position.longitude,futchSeed );
  console.log(getrid);
  // console.log(loc.includes(place.latitude, place.longitude, futchSeed));
  // distance = calcGeoDistance(locationData.latitude, locationData.longitude, this.objectLong, this.objectLat, 'mi')
  // // check your lat/long every couple seconds for distance to one of a places
  // // if yes, show a green circle
  // // if no, show a red circle
  // print(distace);
}
