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
var randomNumber = Math.floor(Math.random()*120) + 19;


$(document).ready(function() {
    
function reset() {
    
randomNumber = Math.floor(Math.random()*120) + 19;
$('#randomNum').html(randomNumber);


score = 0;

 gem1 = Math.floor(Math.random()*12) + 1;
 gem2 = Math.floor(Math.random()*12) + 1;
 gem3 = Math.floor(Math.random()*12) + 1;
 gem4 = Math.floor(Math.random()*12) + 1;
$('#score').html('score: ' + score)


} //end of reset


//not generating new number on reset
//not adding wins/losses
//
$('#gem1').click(function () {
    console.log('gem1: ' + gem1);
    var newScore = score+= gem1;
    console.log('New Score: ' + newScore)
    $('#score').html('score: ' + newScore)

    if (newScore === randomNumber) {
        wins++;
        $('#wins').html('wins: ' + wins)
        reset();
       } else if (newScore > randomNumber){
           losses++;
           $('#loss').html('losses: ' + losses);
           reset();
       }
}) 
    
    
 $('#gem2').click(function () {
    var newScore = score+= gem2;
    console.log('gem2: ' + gem2);
    $('#score').html('score: ' + newScore)

    if (newScore === randomNumber) {
        wins++;
        $('#wins').html('wins: ' + wins)
        reset();
       } else if (newScore > randomNumber){
           losses++;
           $('#loss').html('losses: ' + losses);
           reset();
       }

   
})

$('#gem3').click(function () {
    var newScore = score+= gem3;
    console.log('gem3: ' + gem3);
    $('#score').html('score: ' + newScore)
    
    if (newScore === randomNumber) {
        wins++;
        $('#wins').html('wins: ' + wins)
        reset();
       } else if (newScore > randomNumber){
           losses++;
           $('#loss').html('losses: ' + losses);
           reset();
       }

    
})

$('#gem4').click(function () {
    var newScore = score+= gem4;
    console.log('gem4: ' + gem4);
    $('#score').html('score: ' + newScore)
    
    if (newScore === randomNumber) {
        wins++;
        $('#wins').html('wins: ' + wins)
        reset();
       } else if (newScore > randomNumber){
           losses++;
           $('#loss').html('losses: ' + losses);
           reset();
       }
   
})



 $('#randomNum').text(randomNumber);

}); //end of everything

