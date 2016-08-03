$(document).ready(function() {
//each block needs to "know" its color


	//Player needs to choose the right color. (on/click)


	$('#yellow').on('click', function(event) {
    $(this).append('<span>"YOU WERE RIGHT!"</span>');
		console.log("hi");
	});


	$('#red').on('click', function(event) {
		$(this).append('<span>"YOU WERE WRONG!"</span>');
		$(this).append('<button>Play Again</button>')
		console.log("it works");
	});


	$('#blue').on('click', function(event) {
		$(this).append('<span>"YOU WERE WRONG!"</span>');
		$(this).append('<button>Play Again</button>')
		console.log("it works");
	});

	$('#green').on('click', function(event) {
		$(this).append('<span>"YOU WERE WRONG!"</span>');
		$(this).append('<button>Play Again</button>')
		console.log("it works");
	});

	//If the player chooses correctly: message that.




	//If the player chooses incorrectly: message that.



	//After they have chosen the game needs to loop.



















});
