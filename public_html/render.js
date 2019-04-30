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
let q1;
let q2;
let q3;
let q4;
let q5;
let dropButton;
let storedData;
let storage;
let drop;
let comeHome;
let check;
// let comeBack;
// let futchure;

var loc = []

let answers;

function hashCode(s){

  return s.split("").reduce(function(a,b){a=((a<<5)-a)+b.charCodeAt(0);return a&a},0);

}

function setup() {
$('.searchingText').hide();
$('.foundText').hide();
$('.dropText').hide();
$('.welcomeHomeText').hide();
$('.yourDropText').hide();

$('#intro-btn').on('click', function(){
  name = $('#name').val();
      $('.intro').hide();
})

$('#q1-btn').on('click', function(){
  q1 = $('#question1').val();
          $('.q1').hide();
})

$('#q2-btn').on('click', function(){
  q2 = $('#question2').val();
                $('.q2').hide();
})
$('#q3-btn').on('click', function(){
  q3 = $('#question3').val();
          $('.q3').hide();
})

$('#awesome-btn').on('click', function(){
  q4 = $('#dystopia').val() + $('#utopia').val()
                $('.q4').hide();
})
$('#q5-btn').on('click', function(){
  q5 = $('#question5').val();
          $('.q5').hide();
})

$('#compile-btn').on('click', function(){
  answers = hashCode(name + "") + hashCode(q1 + "") + hashCode(q2 + "") + hashCode(q3 + "") + hashCode(q4 + "") + hashCode(q5 + "")

  console.log(answers)

  futch.update(answers)

  $('.exit').hide();
})


  futch = new futchure( 0 );



// answer1 = random(10,10000);
// answer2 = random(10,10000);
// answer3 = random(10,10000);
// answer4 = random(10,10000);
// answer5 = random(10,10000);
// answer6 = random(10,10000);

  var canvas = createCanvas(displayWidth, displayHeight, WEBGL);
  background(255);

  let fr = 12;

  intervalCurrentPosition(positionPing, 5000);

$( ".comeHome" ).hide();


  // let futchSeed = hashCode(""+answer1) + hashCode(""+answer2) + hashCode(""+answer3) + hashCode(""+answer4)+ hashCode(""+answer5) + hashCode(""+answer6);
  //build a blob with the futchSeed as it's random seed / unique I
}


function draw() {
  background(255);
  orbitControl();
  futch.render();
}


////drop button / function


// function dropMe(){
//
//
//
//
// }//close button operation
//


function positionPing(position){

  // console.log(position.latitude);

  socket.emit('recallData', function(storage){

    storage.find(function(storedData) {
      var distance = calcGeoDistance(position.latitude, position.longitude, storedData.lat, storedData.lon, 'mi')
        if (distance <= 0.0019999 && answers !== storedData.hash){

              $('.searchingText').hide();
              $('.dropText').hide();
              $('.yourDropText').hide();
              $('.foundText').show();

              print("found!" + distance);
              futch.update(storedData.hash);
              print(storedData.hash);



}else if(distance <= 0.0019999 && answers == storedData.hash){
  $('.searchingText').hide();
  $('.dropText').hide();
  $('.foundText').hide();
  $('.yourDropText').show();

}else if(distance >= 0.0019999){

  $('.searchingText').show();
    $('.yourDropText').hide();
  $('.foundText').hide();
  futch.update(answers)
  print("it left!"+ distance)

}else{
            $('.searchingText').show();
            $('.foundText').hide();
              $('.yourDropText').hide();
            print("searching....." + distance)

}

});//close storage.find
});//close recall data


}//close positionPing


function dropMe(){
// $('#drop-btn').on('click', function(){

$('.searchingText').hide();
$('.foundText').hide();
$('.welcomeHomeText').hide();
$('.dropText').show();


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


$( ".comeHome" ).show();
$( ".drop" ).hide();

} // close drop function

function comeBack(){
  $('.searchingText').hide();
  $('.foundText').hide();
  $('.welcomeHomeText').show();
  $('.dropText').hide();
// $('#comeHome-btn').on('click', function(){
  thisHash = answers;

  console.log(thisHash);

  socket.emit('removeData', thisHash);
$( ".drop" ).show();
$( ".comeHome" ).hide();

//
// })//close button
} //close comeHome function


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
