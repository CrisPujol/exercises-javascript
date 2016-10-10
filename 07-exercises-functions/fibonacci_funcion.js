
// FUNCIONES RECURSIVAS

// Fibonacci

 function fibonacci (n){
 		if (n===0) return 0;
 		if (n===1) return 1;
 		return fibonacci(n-1) + fibonacci(n-2);
 }


 /*

0, 1, 1, 2, 3, 5, 8, 13, ..

fibonacci (0)  ==> 0 
fibonacci (1)  ==> 1 
                        1               0
fibonacci (2)  ==> fibonacci (1) +  fibonacci (0) => 1

                        1               1
fibonacci (3)  ==> fibonacci (2) +  fibonacci (1) => 2

                        2               1
fibonacci (4)  ==> fibonacci (3) +  fibonacci (2) => 3

                        3               2
fibonacci (5)  ==> fibonacci (4) +  fibonacci (3) => 5

                        5               3
fibonacci (6)  ==> fibonacci (5) +  fibonacci (4) => 8

 */





// Factorial

function factorial(n) {

	if (n===1) return 1;
	var factNminus1 = factorial(n-1);
	var tempResult = n*factNminus1;

	console.log("---------------------------")
	console.log("n => " + n)
	console.log("n-1 => " + (n-1) )
	console.log("factorial(" + (n-1) + ") => " + factNminus1)
	console.log("n*factorial(" + (n-1) + ") => " + tempResult)

	return tempResult

}

> factorial(4)
---------------------------
n => 2
n-1 => 1
factorial(1) => 1
n*factorial(1) => 2
---------------------------
n => 3
n-1 => 2
factorial(2) => 2
n*factorial(2) => 6
---------------------------
n => 4
n-1 => 3
factorial(3) => 6
n*factorial(3) => 24

24
 

  