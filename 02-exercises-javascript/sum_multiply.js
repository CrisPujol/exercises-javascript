


// Define a function sum() and a function multiply() that sums and multiplies (respectively) 
// all the numbers in an array of numbers.





function sum( numbers ){
 	var result = 0;
 	for(var i=0; i<numbers.length; i++){
 		result += numbers[i];
 		console.log(numbers[i]);
 	}
	
 	return result;
}



function multiply( numbers ){
 	var result = 1;
 	for(var i=0; i<numbers.length; i++){
 		result *= numbers[i];
 		console.log(numbers[i]);
 	}
	
 	return result;
}