//Randomizes a number (range 0..100), then prints all the even numbers from 0 to the randomized.


function evenNumbers (){

	var number = Math.round(Math.random()*100);
	console.log(number);
	var currentNumber = "";

	  for(var i=0; i<number; i++){

		  	if(i%2===0){
		  		currentNumber += i + " ";	
		  	}
	  }
	  
	  return currentNumber;
}

