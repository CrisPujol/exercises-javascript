describe("function rockPaperScissors", function() {


  it("should exist", function() {
     expect(game.rockPaperScissors).toBeDefined();
  });


  it("should return a string", function() {
     expect(typeof game.rockPaperScissors()).toBe("string");
  });


  it("should return an error when the parameters are not defined", function() {
     expect( game.rockPaperScissors() ).toBe("Error");
  });

  
  it("should return it's a tie when the parameters are the same", function() {
     expect( game.rockPaperScissors("aa","aa") ).toBe("It's a tie");
  });

  it("should return'paper wins' when player1 choose paper and player2 choose rock", function() {
     expect( game.rockPaperScissors("paper","rock") ).toBe("PAPER wins");
  });

  it("should return'scissors wins' when player1 choose paper and player2 choose scissors", function() {
     expect( game.rockPaperScissors("paper","scissors") ).toBe("SCISSORS wins!");
  });

   it("should return'paper wins' when player1 choose rock and player2 choose paper", function() {
     expect( game.rockPaperScissors("rock","paper") ).toBe("PAPER wins");
  });
 

  it("should return'rock wins' when player1 choose scissors and player2 choose rock", function() {
     expect( game.rockPaperScissors("scissors","rock") ).toBe("ROCK wins");
  });

  it("should return'scissors wins' when player1 choose scissors and player2 choose paper", function() {
     expect( game.rockPaperScissors("scissors","paper") ).toBe("SCISSORS wins");
  });


   
});
