// Has the game started yet

let gameOn = false;

// Default character settings

const characters = [
	{
		id: "twilight",
		hp: 100,
		ap: 6,
		cp: 6
	},
	{
		id: "ross",
		hp: 120,
		ap: 12,
		cp: 12
	},
	{
		id: "garnet",
		hp: 150,
		ap: 18,
		cp: 28
	},
	{	
		id: "rogers",
		hp: 180,
		ap: 24,
		cp: 24
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
			chars[vs].hp -= you.ap;
			you.hp -= chars[vs].cp;
			you.ap += 6;
			$("#" + you.id + "-hp").text(you.hp);
			$("#" + chars[vs].id + "-hp").text(chars[vs].hp);
			if( you.hp <= 0 ) {

			} else if ( chars[vs].hp <= 0) {
				
				$("#" + chars[vs].id).appendTo("#hidden");
				vs = -1;

			}
		}	

	});

	$("#do-over").on("click",function(){
		doOver();
	});
});
