



function palindrome(text){


	var textArray = text.split("");

	var textArrayReverse = textArray.reverse().toString("");

	
	

	if(textArray === textArrayReverse){
		return "It's a palindrome"
	}

	else{

		return "It's not a palindrome"
	}

}




function palindrome(text){


	var textArray = text.split("").reverse().join("");
	console.log(text)
	console.log (textArray)

	if(textArray === textArray){
		return "It's a palindrome"
	}

	else{

		return "It's not a palindrome"

}

	}



	function palindrome(text){

		var textArray = text.split("");
	

		var textArrayReverse = textArray.map(function(elem){
			return elem
		}).reverse().join("");

		var textArrayJoin = textArray.join("")

		if(textArrayReverse === textArrayJoin){
			return true
		}

		else{
			return false
		}

	}