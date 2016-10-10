
function fizzBuzz(){


var counter = 0;
var myArray = Array(100)
myArray.fill(0)

var fizzArray = myArray.map( function(elem){
    return counter++
})


for(var i=0; i<100; i++){


	if((fizzArray[i])%3===0 && (fizzArray[i])%5===0){
		fizzArray[i] = "FizzBuzz";
	}

	else if((fizzArray[i])%3===0){
		fizzArray[i] = "Fizz";
	}

	else if((fizzArray[i])%5===0){
		fizzArray[i] = "Buzz";
	}

	else{
		fizzArray[i]=fizzArray[i]
	}

}

return fizzArray;

}

