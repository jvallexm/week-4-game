const fredRogers = $(	`<div class="col-md-3">
									<div id="rogers" class="friendly character">
						    	 		<p>Fred Rogers</p>
						     			<img class="smol">
						    	 		<p>180</p>
						   	 		</div>
						 		</div>  	 `);

var gameOn = false;

const characters = [{ name: "twilight",
					  div:  $(	`<div class="col-md-3">
									<div id="twilight" class="friendly character">
						    	 		<p>Twilight Sparkle</p>
						     			<img class="smol">
						    	 		<p id="twilight-hp">180</p>
						   	 		</div>
						 		</div>  	 `)
					},
					{ name: "ross",
					  div:  $(	`<div class="col-md-3">
									<div id="ross" class="friendly character">
						    	 		<p>Bob Ross</p>
						     			<img class="smol">
						    	 		<p id="ross-hp">180</p>
						   	 		</div>
						 		</div>  	 `)
					},
					{ name: "garnet",
					  div:  $(	`<div class="col-md-3">
									<div id="garnet" class="friendly character">
						    	 		<p>Garnet</p>
						     			<img class="smol">
						    	 		<p id="garnet-hp">180</p>
						   	 		</div>
						 		</div>  	 `)
					},
					{ name: "rogers",
					  div:  $(	`<div class="col-md-3">
									<div id="rogers" class="friendly character">
						    	 		<p>Fred Rogers</p>
						     			<img class="smol">
						    	 		<p id="rogers-hp">180</p>
						   	 		</div>
						 		</div>  	 `)}];

$(document).ready(function(){
	console.log("whoomp");

	var newCharacters = characters;
	var enemies = [];
	var you;

	// Lets you choose a character

	function getCharater(name){

		for(let i = 0; i < newCharacters.length;i++){
			if(characters[i].name == name)
			{
				console.log(newCharacters[i]);
				you = newCharacters[i];
				return;
			}	
		}
	}

	function getEnemies(){

		for(let i = 0 ; i < newCharacters.length ; i++) {
			if(newCharacters[i].name != you.name){
				enemies.push(newCharacters[i]);
			}
		}
		$('#your-character').empty();
		for(let i = 0 ; i < newCharacters.length ; i++) {
			if(newCharacters[i].name == you.name)
				$(you.div).appendTo('#your-character');
			else
				$(`<div class="col-md-3"></div>`).appendTo('#your-character');
		}
		gameOn = true;

	}

	function gameStart(){
		for(let i = 0 ; i<characters.length ; i++){
			newCharacters[i].div.appendTo("#your-character");
		}
	}


	gameStart();

	$(".friendly").on("click",function(){
		if(!gameOn) {
			getCharater(this.id);
			getEnemies();
		}
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