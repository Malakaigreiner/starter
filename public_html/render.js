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
let answer1;
let answer2;
let answer3;
let answer4;
let answer5;
let answer6;
let dropButton;
let storedData;
let storage;
// let comeBack;
// let futchure;

var loc = []

let answers;

function hashCode(s){

  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);

}

function setup() {


  $('#submit-btn').on('click', function(){

    let q1 = $('#question1').val();
    let q2 = $('#question2').val();

    answers = hashCode(q1) + q2

    console.log(answers)

    futch.update(answers)

    $('.survey').hide();



  })

  futch = new futchure( 0 );



// answer1 = random(10,10000);
// answer2 = random(10,10000);
// answer3 = random(10,10000);
// answer4 = random(10,10000);
// answer5 = random(10,10000);
// answer6 = random(10,10000);

  var canvas = createCanvas(displayWidth, displayHeight, WEBGL);
  backa = random(0,255);
  backb = random(0,255);
  backc = random(0,255);
  let fr = 12;

  intervalCurrentPosition(positionPing, 5000);


  // let futchSeed = hashCode(""+answer1) + hashCode(""+answer2) + hashCode(""+answer3) + hashCode(""+answer4)+ hashCode(""+answer5) + hashCode(""+answer6);
  //build a blob with the futchSeed as it's random seed / unique I
}


function draw() {
  background(backa+mouseY,backb,backc);
  orbitControl();
  futch.render();
}


////drop button / function

$('#drop-btn').on('click', function(){


  getCurrentPosition(function(position){

    // let futchSeed = hashCode(""+answer1) + hashCode(""+answer2) + hashCode(""+answer3) + hashCode(""+answer4) + hashCode(""+answer5) + hashCode(""+answer6);
    // let answers = hashCode(q1)+q2
    //prep the data as a json object to store on the server
    let packedData = {
      "hash": answers,
      "lat": position.latitude,
      "lon": position.longitude

    } //close initial pack

  console.log(packedData);

  //use socket.io to send the packed data to the server
  socket.emit('storeData', packedData)

  }) //close packing function

})


// function dropMe(){
//
//
//
// 
// }//close button operation
//


function positionPing(position){
}
  // console.log(position.latitude);


    //"bring it home" remove
    //"mathematically" inverse
    //if new one is found in array, only render the new one

        // var found = storage.find(
        //   function(storedData){
        //
        //     return storedData.lat == position.latitude
        //     return storedData.lon == position.longitude
        //     return storedData.hash == hashCode(""+answer1) + hashCode(""+answer2) + hashCode(""+answer3) + hashCode(""+answer4) + hashCode(""+answer5) + hashCode(""+answer6);
        //
        //   }
        //   function checkDistance(){
        //
        //   }
        // );

  // });


   // if (storedData.lat == position.latitude){
   //   storedFutch = new futchure(storedData.hash)
   //   storedFutch.render();
   // } else {
   //   futch.render();
   // }

// function comeBack(){
//
//   let thisHash = hashCode(""+answer1) + hashCode(""+answer2) + hashCode(""+answer3) + hashCode(""+answer4)+ hashCode(""+answer5) + hashCode(""+answer6);
//
//   console.log(thisHash);
//
//   socket.emit('removeData', thisHash);
//
// }

$('#comeHome-btn').on('click', function(){

  thisHash = answers

  console.log(thisHash);

  socket.emit('removeData', thisHash);


})

// function checkDistance(){
//
//   var distance = calcGeoDistance(position.latitude, position.longitude, storedLat.lat, storedLat.lon, 'mi')
//   	print(distance);
//
// }


  //this is the only way you can get the storeage:
  // you will want to do this not on a mouse click, but on an interval, and inside of this callback function you'll want to loop ovoer the storage and then cehck it against the users current position for each stored futch. check the distancce and decide which futhc to show?
  // function positionPing(position){
  //   print(position.latitude);
  //   socket.emit('recallData',function(storage){

      // storage.includes(position.latitude && position.longitude) === true {
      //   get the blob
      // } else {
      //   allow drop
      // }
      // var distance = calcGeoDistance(position.latitude, position.longitude, storage.lat, this.storedData.lon, 'mi')
      // if distance is
      // render a futch of that same set of data

//   })
