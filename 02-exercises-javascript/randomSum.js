
/*Randomizes a number (range 1000 .. 9999 ) and calculate the sum of its digits.
 For instance, if the randomized number was 1049, program should print 14 */


function sum (){

     var number = Math.round(Math.random() * (9999 - 1000) + 1000);
     console.log(number);

     var listNumbers = (""+number).split("");

     var currentNumber;
     var sumNumbers=0 ;
    

	     for(var i=0; i<listNumbers.length; i++){
	     	currentNumber = parseInt(listNumbers[i]);
	     	sumNumbers += currentNumber;
	     	
	 	  }

	 return sumNumbers;    

     }

  