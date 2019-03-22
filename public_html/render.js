let size = 3;
let scale = 30;
let futch;
let backa;
let backb;
let backc;
let futchSeed;

var loc = []

function hashCode(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}

function setup() {
  createCanvas(500, 400, WEBGL);

  let futchSeed = hashCode('ok') + hashCode('ok') + hashCode('ok');
   backa = random(0,255);
   backb = random(0,255);
   backc = random(0,255);
  // let generateSeed = hashCode('9') + hashCode('greiner') + hashCode('rules')


  // what we need for the server ultimately is a json object:
  //generate this when the 'drop' their object
  // let dataToStore = {
  //   'lat': 93.930384234,
  //   'lon': -192.9342038424,
  //   'seed': -1335396314
  // }

  console.log(futchSeed);

  futch = new blob( futchSeed );

}

function place(position){

  //json object
  let futchSeed = hashCode('what') + hashCode('thebeat') + hashCode('around');
  let storedFutch = {
    lat: position.latitude,
    lon: position.longitude,
    seed: futchSeed
  }

  loc.push(storedFutch);
  print(loc);
  text(position.latitude,100,100);
  text(position.longitude,100,200);
  text(futchSeed, 100, 300);
  //when this button is clicked, store the lat and long you're currently at in an array
}

function doubleClicked(){

  getCurrentPosition(place);



  // console.log(loc.includes(position.latitude, position.longitude));
  //   distance = calcGeoDistance(locationData.latitude, locationData.longitude, this.objectLong, this.objectLat, 'mi')
  // // check your lat/long every couple seconds for distance to one of a places
  // // if yes, show a green circle
  // // if no, show a red circle
  // print(distace);
}

function draw() {
  background(backa,backb,backc,30);
  orbitControl();
  futch.render();
}
