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
let name;

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
$('.help-btn').hide();
$('.help-info').hide();
$( '.back-btn8' ).hide();

$('#intro-btn').on('click', function(){
      $('.intro').hide();
})

$('#pg2-btn').on('click', function(){
  name = $('#name').val();
      $('.pg2').hide();
})

$('#q1-btn').on('click', function(){


  if ($('#1').is(':checked')){

          q1 = "The future already happened (we missed it)"

} else if($('#2').is(':checked')){

          q1 = "The future is happening right now (we're living in it)"

} else if($('#3').is(':checked')){

          q1 = "The future will happen later (we'll never get there)"

}
          $('.q1').hide();
})

$('#q2-btn').on('click', function(){

  if ($('#nature').is(':checked')){

          q2 = "nature"

} else if($('#mountain').is(':checked')){

          q2 = "mountain"

} else if($('#cyborg').is(':checked')){

          q2 = "cyborg"

} else if($('#radial').is(':checked')){

          q2 = "radial"
}
          $('.q2').hide();

})

$('#q3-btn').on('click', function(){
  if ($('#mobile-and-disparate').is(':checked')){

          q3 = "mobile and disparate (internet)"

} else if($('#peripatetic').is(':checked')){

          q3 = "peripatetic (a chorus line)"

} else if($('#adaptive').is(':checked')){

          q3 = "adaptive (bacteria)"

} else if($('#communal').is(':checked')){

          q3 = "communal (flock of birds)"
}
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
$('#back-btn').on('click', function(){
      $('.intro').show();
})
$('#back-btn2').on('click', function(){
      $('.pg2').show();
})
$('#back-btn3').on('click', function(){
      $('.q1').show();
})
$('#back-btn4').on('click', function(){
      $('.q2').show();
})
$('#back-btn5').on('click', function(){
      $('.q3').show();
})
$('#back-btn6').on('click', function(){
      $('.q4').show();
})

$('#back-btn7').on('click', function(){
      $('.q5').show();
})

$('#compile-btn').on('click', function(){
 intervalCurrentPosition(positionPing, 5000);
})
  futch = new futchure( 0 );



// answer1 = random(10,10000);
// answer2 = random(10,10000);
// answer3 = random(10,10000);
// answer4 = random(10,10000);
// answer5 = random(10,10000);
// answer6 = random(10,10000);

  var canvas = createCanvas(displayWidth, displayHeight/1.7, WEBGL);
  background(255);

  let fr = 12;


$( ".comeHome" ).hide();



  // let futchSeed = hashCode(""+answer1) + hashCode(""+answer2) + hashCode(""+answer3) + hashCode(""+answer4)+ hashCode(""+answer5) + hashCode(""+answer6);
  //build a blob with the futchSeed as it's random seed / unique I
}


function draw() {
  background(255);
  orbitControl();
  futch.render();
  $('.help-btn').show();
  $('#help-btn').on('click', function(){
        $( '.help-info' ).show();
        $( '.help-info' ).html("your futch code is:"+answers);
        $('.back-btn8').show();
  })

$('#back-btn8').on('click', function(){
      $( '.help-info' ).hide();
      $('.back-btn8').hide();
  })

}


////drop button / function


// function dropMe(){
//
//
//
//
// }//close button operation
//
// function help(){
//
// }

function positionPing(position){

  // console.log(position.latitude);

  socket.emit('recallData', function(storage){

    storage.find(function(storedData) {
      var distance = calcGeoDistance(position.latitude, position.longitude, storedData.lat, storedData.lon, 'mi')
        if (distance <= 0.00378788 && answers !== storedData.hash){


              futch.update(storedData.hash);

              $('.searchingText').hide();
              $('.dropText').hide();
              $('.yourDropText').hide();
              $('.welcomeHomeText').hide();
              $( '.foundText' ).empty();
              $('.foundText').show();
              $( '.foundText' ).html( "you've found "+storedData.name+"'s futch" );
              print("found!" + distance);
              print(storedData.hash);



}else if(distance <= 0.00378788 && answers == storedData.hash){
  $('.searchingText').hide();
  $('.dropText').hide();
  $('.welcomeHomeText').hide();
  $('.foundText').hide();
  $('.yourDropText').show();

}else if(distance >= 0.00378789){

  $('.searchingText').show();
  $('.yourDropText').hide();
  $('.foundText').hide();
  $('.welcomeHomeText').hide();
  $('.dropText').hide();
  futch.update(answers)
  print("it left!" + distance)

}else{
            $('.searchingText').show();
            $('.foundText').hide();
            $('.yourDropText').hide();
            $('.welcomeHomeText').hide();
            $('.dropText').hide();
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
$('.yourDropText').hide();
$('.dropText').show();


  getCurrentPosition(function(position){

    // let futchSeed = hashCode(""+answer1) + hashCode(""+answer2) + hashCode(""+answer3) + hashCode(""+answer4) + hashCode(""+answer5) + hashCode(""+answer6);
    // let answers = hashCode(q1)+q2
    //prep the data as a json object to store on the server
    let packedData = {
      "hash": answers,
      "lat": position.latitude,
      "lon": position.longitude,
      "name": name

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
  $('.yourDropText').hide();
  $('.dropText').hide();
  $('.welcomeHomeText').show();
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
