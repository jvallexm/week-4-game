// Has the game started yet

let gameOn = false;

// Default character settings

const characters = [
	{
		id: "twilight",
		hp: 100,
		ap: 10,
		cp: 15
	},
	{
		id: "ross",
		hp: 120,
		ap: 15,
		cp: 20
	},
	{
		id: "garnet",
		hp: 150,
		ap: 20,
		cp: 25
	},
	{	
		id: "rogers",
		hp: 180,
		ap: 25,
		cp: 30
	}
];

$(document).ready(function(){

	// Copy of default characters 

	let chars = characters;

	// Stores the object of player's chosen character

	let you;

	// Stores the index of the character the player is currently fighting
	let vs = -1;

	// Resets defaults;

	function doOver(){

		chars = characters;
		you   = undefined;
		vs    = -1;
		for(let i = 0 ; i < chars.length ; i++) {
			$("#" + chars[i].id).removeClass("in-conflict").appendTo("#" + (i+1).toString());
		}
		gameOn = false;
	}

	//Returns the index of a character by their id

	function getChar(name) {
		for(let i = 0 ; i< chars.length ;i++) {
			if(chars[i].id === name)
			{
				return i;
			}
		}
	}

	// Moves the non-player characters to the enemies box. Starts the game.

	function gameStart() { 

		console.log("game start");
		for(let i = 0 ; i < chars.length; i++) {
			if(chars[i].id !== you.id)
			{
				$("#" + chars[i].id).addClass("in-conflict").appendTo("#2" + (i+1).toString());
			}
		}
		gameOn = true;

	}

	$(".character").on("click", function(){

		// If the game hasn't started, allows the player to choose a character 

		if(!gameOn) {

			you = chars[getChar(this.id)];
			console.log("you are now " + you.id);
			gameStart();

		} else { 

		// If it has, it allows them to choose an opponent

			if(this.id !== you.name && vs == -1)
			{
				$("#" + this.id).appendTo("#vs");
				vs = getChar(this.id);
			}

		}
	});

	$("#resolve").on("click",function(){

		if(vs !== -1 )
		{
			$("#" + chars[vs].id).appendTo("#hidden");
			vs = -1;
		}	

	});

	$("#do-over").on("click",function(){
		doOver();
	});
});
