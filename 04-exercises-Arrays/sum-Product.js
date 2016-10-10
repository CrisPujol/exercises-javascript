



function sumAndMultiply(numbers){


	var resultSum = 0;

	 	for(var i=0; i<numbers.length; i++){
	 		resultSum += numbers[i];
	 	}
 	
		
    var resultMultiply = 1;

 		for(var i=0; i<numbers.length; i++){
 		resultMultiply *= numbers[i];
 	}
	
 	return ("Sum is " + resultSum + " / " + "Multiply is " + resultMultiply)
}


 sumAndMultiply([1,2,3,5,7])





//Other way


function sumAndMultiply(numbers){


	var resultSum = numbers.reduce(function (acc,elem){
		return acc + elem
	});

	 console.log(resultSum)	
	
 		var resultMul = numbers.reduce(function (acc,elem){
		return acc * elem
	});

	 console.log(resultMul)	
}


 sumAndMultiply([1,2,3,5,7])
