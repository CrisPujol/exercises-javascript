
game = {
  player1: 0,
  player2: 0,
 
  winner: function() {
  		if(game.player1 > game.player2){
  			return "Player1 WIN!"
  		}
  		else {
  			return "Player2 WIN!"
  		}

  		},


	rockPaperScissors: function( player1, player2 ){

	if(player1 === undefined && player2 === undefined){
		return "Error";
	}


	if(player2 === undefined){
		player2 = Math.random();
			if (player2 < 0.34) {
			player2 = "rock";
			} else if(player2 <= 0.67) {
				player2 = "paper";
			} else {
				player2 = "scissors";
			} ;
	}

	if( player1 === player2){
		return "It's a tie";
	}


	if( player1 === "paper" ){
		if(player2 === "scissors"){return "SCISSORS wins!";}
		else{ return "PAPER wins"}	
	}

	
	else if( player1 == "rock" ){
		if(player2=="paper"){ return "PAPER wins";}
		else{ return "ROCK wins";}
		}


    else if(player1=="scissors"){
		if(player2=="paper"){ return "SCISSORS wins";}
		else{ return "ROCK wins";}
		}

}



}


