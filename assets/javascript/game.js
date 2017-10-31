$(document).ready(function() {
	   console.log( "ready!" );
});

    var randomNumber = "19-120";
	var diamondClick = "1-12";
	var playersScoreCounter = " ";
	var wins = 0;
	var losses = 0;
	var solved = false;

	function reset() {
		randomNumber = [];
		crystalClicks = [];
		playersScoreCounter = [];

	}
	
	$("#random-button").on("click", function() {
        var random = Math.floor(Math.random() * 1000) + 1;

        $("#random-number").text(randy);
		
		console.log ("randomNumber");

	});

	document.getElementById (randomNumber).innerHTML;
	document.getElementById (diamondClick).innerHTML;
	document.getElementById (playersScoreCounter).innerHTML;



// Take number from diamond clicked and run series of code to it
	function checkNumbers (){




// Main Process

document.onKeyup = function (event) {
	var diamondClick = String from randomNumber (event.keyCode)
	alert ("diamondClick")
}