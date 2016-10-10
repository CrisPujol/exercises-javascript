/* 

Randomizes a number (range 0..100), then prints all the odd numbers from 40 to that one. 
If the number was smaller than 40, print all the numbers down to the randomized one 
(i.e. if the result was 37, you should print: 40, 39, 38, 37)
*/



function oddNumbers (){

	var number = Math.round(Math.random()*100);
	console.log(number);
	var currentNumber = "";	
	var currentNumberDown= "";

		if(number<=40){

			for(var j=40; j>=number; j--){
				currentNumberDown += j + " ";	
			}
		}
	   
	    for(var i=40; i<number; i++){

			  	if(i%2!==0){
			  		currentNumber += i + " ";	
			  	}
		  }
	  
	  return currentNumberDown;
	  return currentNumber;  
}

