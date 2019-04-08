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

var answer1 = "maasdfadfd";
var answer2 = "rasdfasadfadffddfadtke";
var answer3 = "mafsdfadsfakes";
var answer4 = "reaafsdadsfaadfasdfadsfasddsl";
var answer5 = "mesadsfasfdadsfadfsy";
var answer6 = "rop3q4523452345234es";
let dropButton;


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
function searchLand(){

  //this is the only way you can get the storeage:
  // you will want to do this not on a mouse click, but on an interval, and inside of this callback function you'll want to loop ovoer the storage and then cehck it against the users current position for each stored futch. check the distancce and decide which futhc to show?
  function positionPing(position){
    socket.emit('recallData',function(storage){
      console.log(storage);
      intervalCurrentPosition(positionPing, 5000);
      // check if storage contains
  })
  print("lat: " + position.latitude);
  print("long: " + position.longitude);
}
  var distance = calcGeoDistance(locationData.latitude, locationData.longitude, this.storedData.lat, this.storedData.lon, 'mi')
  // check your lat/long every couple seconds for distance to one of a places
  // if yes, show a green circle
  // if no, show a red circle
  // if (distance =< 15 feet  ) {
  //  futch.render(the seed at current lat/lon);
  // }
//
}
