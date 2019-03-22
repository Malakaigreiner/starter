let size = 3;
let scale = 30;
let threedeeblob;



function hashCode(s){
  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);
}

function setup() {
  createCanvas(500, 400, WEBGL);

  // let generateSeed = hashCode('9') + hashCode('greiner') + hashCode('rules')
  let generateSeed = hashCode('ben') + hashCode('moren') + hashCode('teacher')


  // what we need for the server ultimately is a json object:
  //generate this when the 'drop' their object
  // let dataToStore = {
  //   'lat': 93.930384234,
  //   'lon': -192.9342038424,
  //   'seed': -1335396314
  // }

  console.log(generateSeed);

  threedeeblob = new blob( generateSeed );

}

function draw() {
  background(220);
  orbitControl();
  threedeeblob.render();
}
