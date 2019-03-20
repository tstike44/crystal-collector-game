//game start

//generate random number between (19-120)

//crystals can be clicked with a value
    //crystal value is random between (1-12)

//score = crystal clicked value added

//win/loss contingency
    //if the crystal added value = random number then user wins
    //if the crystal value is higher than the random number then the   user loses



    
var wins = 0;
var losses = 0;
var score = 0;
var gem1 = Math.floor(Math.random()*12) + 1;
var gem2 = Math.floor(Math.random()*12) + 1;
var gem3 = Math.floor(Math.random()*12) + 1;
var gem4 = Math.floor(Math.random()*12) + 1;
var randomGem = Math.floor(Math.random()*12) + 1;
var randomNumber = Math.floor(Math.random()*120) + 19;

$(document).ready(function reset() {
    //buttons work
    $('#gem1').click(function () {

        console.log(gem1);
        return gem1;
    })

     $('#gem2').click(function () {
        console.log(gem2);
        return gem2;
    })
    $('#gem3').click(function () {
        console.log(gem3);
        return gem3;
    })
    $('#gem4').click(function () {
        console.log(gem4);
        return gem4;

    })

 //adding numbers together
      

  
  
  
  //note, you must ensure event handlers are unbound:
  $('#reset').unbind('click').bind('click',reset);//<-- call main callback
});

$('#randomNum').text(randomNumber);