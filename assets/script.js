// Has the game started yet

let gameOn = false;

// Default character settings

const characters = () => {

		return [
		{
			id: "twilight",
			hp: 100,
			ap: 8,
			cp: 4
		},
		{
			id: "ross",
			hp: 120,
			ap: 14,
			cp: 8
		},
		{
			id: "garnet",
			hp: 150,
			ap: 20,
			cp: 12
		},
		{	
			id: "rogers",
			hp: 180,
			ap: 25,
			cp: 20
		}
	];

};

$(document).ready(function(){

	// Copy of default characters 

	let chars = characters();

	// Stores the object of player's chosen character

	let you;

	// Stores the index of the character the player is currently fighting
	let vs = -1;

	// Resets defaults;

	function doOver(){

		chars = characters();
		you   = undefined;
		vs    = -1;
		for(let i = 0 ; i < chars.length ; i++) {
			$("#" + chars[i].id).removeClass("in-conflict").appendTo("#" + (i+1).toString());
			$("#" + chars[i].id + "-hp").text(chars[i].hp);
		}
		gameOn = false;
		$("#vs-row").css("visibility","hidden");

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
		$("#vs-row").css("visibility","visible");

	}

	$(".character").on("click", function(){

		
		if(!gameOn) {

			// If the game hasn't started, allows the player to choose a character 

			you = chars[getChar(this.id)];
			gameStart();

		} else { 

			// if it has, it allows them to choose an opponent

			if(this.id !== you.id && vs == -1)
			{
				$("#" + this.id).appendTo("#vs");
				vs = getChar(this.id);
			}

		}
	});

	$("#resolve").on("click",function(){

		if(vs !== -1 && you.hp > 0)
		{	

			// Makes the attack

			chars[vs].hp -= you.ap;
			you.hp       -= chars[vs].cp;
			you.ap       += 6;

			// Changes the corresponding numbers

			$("#" + you.id + "-hp").text(you.hp);
			$("#" + chars[vs].id + "-hp").text(chars[vs].hp);


			if( you.hp <= 0 ) {


			} else if ( chars[vs].hp <= 0) {

				// If your opponent is dead
				
				$("#" + chars[vs].id).appendTo("#hidden");
				vs = -1;

			}
		}	
		else if (vs !== -1){
			doOver();
		}

	});

});

// Add middle text to vs row
// Add text to the spot where text goes
// Change the button text when you lose
// Find a good background or something
// Ger rid of the do over button

