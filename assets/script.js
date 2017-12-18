let gameOn = false;

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

	let chars = characters;
	let you;
	let vs;

	console.log("whoomp");

	function getChar(name) {
		for(let i = 0 ; i< chars.length ;i++) {
			if(chars[i].id === name)
			{
				return i;
			}
		}
	}

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

	$(".friendly").on("click", function(){
		if(!gameOn) {
			you = chars[getChar(this.id)];
			console.log("you are now " + you.id);
			gameStart();
		}
	});

	$(".in-conflict").on("click", function(){
		console.log("hot poppers");
	});
});

// Choose your fighter 
	//Map all the fighters  


// Make enemies

// Doin a fight
	// Fight time
	// Fight reslove
	// Doin an animate

//Restart function