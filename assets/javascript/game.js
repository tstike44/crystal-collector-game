//game start

//generate random number between (19-120)

//crystals can be clicked with a value
//crystal value is random between (1-12)

//score = crystal clicked value added

//win/loss contingency
//if the crystal added value = random number then user wins
//if the crystal value is higher than the random number then the   user loses



//globals
var wins = 0;
//losses aren't adding  
var losses = 0;
var score = 0;
var gem1 = Math.floor(Math.random() * 12) + 1;
var gem2 = Math.floor(Math.random() * 12) + 1;
var gem3 = Math.floor(Math.random() * 12) + 1;
var gem4 = Math.floor(Math.random() * 12) + 1;
var randomNumber = $("#randomNum");
randomNumber = Math.floor(Math.random() * 120) + 19;
//displaying wins on screen
$('#wins').html('wins: ' + wins);
$('#loss').html('losses: ' + losses);

$(document).ready(function () {
	//function to reset the scores
	function reset() {

		randomNumber = Math.floor(Math.random() * 120) + 19;
		$('#randomNum').html(randomNumber);
		score = 0;

		gem1 = Math.floor(Math.random() * 12) + 1;
		gem2 = Math.floor(Math.random() * 12) + 1;
		gem3 = Math.floor(Math.random() * 12) + 1;
		gem4 = Math.floor(Math.random() * 12) + 1;
		$('#score').html(score)
	}

	//not generating new number on reset
	

	$('#gem1').click(function () {
		console.log('gem1: ' + gem1);
		var totalScore = score += gem1;

		//displaying the random # in the console
		console.log('Total Score: ' + totalScore)

		$('#score').html(totalScore)

		if (totalScore === randomNumber) {
			wins++;
			$('#wins').html('wins: ' + wins);
			reset();
		} 
		
		if (totalScore > randomNumber) {
			losses += losses;
			console.log("losses: " + losses)

			$('#loss').html('losses: ' + losses);
			reset();
		}
	})


	$('#gem2').click(function () {
		var totalScore = score += gem2;

		//displaying the random # in the console
		console.log('gem2: ' + gem2);

		$('#score').html(totalScore)
		console.log('Total Score: ' + totalScore)

		if (totalScore === randomNumber) {
			wins++;
			$('#wins').html('wins: ' + wins);
			reset();
		} 
		
		if (totalScore > randomNumber) {
			losses += losses;
			console.log("losses: " + losses)

			$('#loss').html('losses: ' + losses);
			reset();
		}
	})

	$('#gem3').click(function () {
		var totalScore = score += gem3;

		//displaying the random # in the console\
		console.log('gem3: ' + gem3);
		console.log('Total Score: ' + totalScore)

		$('#score').html(totalScore)

		if (totalScore === randomNumber) {
			wins += wins;
			$('#wins').html('wins: ' + wins);
			reset();
		} 
		
		if (totalScore > randomNumber) {
			losses += losses;
			console.log("losses: " + losses)

			$('#loss').html('losses: ' + losses);
			reset();
		}
	})

	$('#gem4').click(function () {
		var totalScore = score += gem4;

		//displaying the random # in the console
		console.log('gem4: ' + gem4);

		$('#score').html(totalScore)
		console.log('Total Score: ' + totalScore)

		if (totalScore === randomNumber) {
			wins += wins;
			$('#wins').html('wins: ' + wins);
			reset();
		} 
		
		if (totalScore > randomNumber) {
			losses += losses;
			$('#loss').html('losses: ' + losses);

			console.log("losses: " + losses)
			reset();
		}
	})

	$('#randomNum').text(randomNumber);
	//checking to see if the wins/loss is being added correctly in the console
	// console.log("wins: " + wins)
	// console.log("losses: " + losses)
}); 
