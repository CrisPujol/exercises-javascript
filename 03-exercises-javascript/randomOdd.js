/*Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. 
If the number was smaller than 40 nothing should be printed */


function oddNumbers (){

	var number = Math.round(Math.random()*100);
	console.log(number);
	var currentNumber = "";

	  for(var i=40; i<number; i++){

		  	if(i%2!==0){
		  		currentNumber += i + " ";	
		  	}
	  }
	  
	  return currentNumber;
}

