


	function uppercaseFirstLetter (text){

	var result = "";

	var textArray = text.split("");
	
	for (var i = 0; i<textArray.length; i++){

		textArray[0]= textArray[0].toUpperCase();

		result += textArray[i];

		if(textArray[i]===" "){
			textArray[i + 1] = textArray[i + 1].toUpperCase()
		}

	}

	return result;
}



