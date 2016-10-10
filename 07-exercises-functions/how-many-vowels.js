


function howManyVowels (text){

	var counter = 0;

	var textArray = text.split("")

	var counterVowels = textArray.forEach(function (elem){
		if(elem === "a" || elem === "e" || elem === "i" || elem === "o" || elem === "u"){
			counter++
		}
	});
	
	return counter

}

