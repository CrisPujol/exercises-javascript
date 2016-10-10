

//Randomizes three numbers in range (0.. 100) and prints the largest one.


function largestNum (){
		var number1 = Math.round(Math.random()*100);
		var number2 = Math.round(Math.random()*100);
		var number3 = Math.round(Math.random()*100);

		console.log(number1);
		console.log(number2);
		console.log(number3);

		if(number1 > number2 || number1 > number3){
			return number1;
		}

		else if(number2 > number1 || number2 > number3){
			return number2;
		}

		else {
			return number3;
		}
}