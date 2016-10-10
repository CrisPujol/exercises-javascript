




	function swapCase (text){

	var result = "";

	var textArray = text.toUpperCase().split("");
	
	for (var i = 0; i<textArray.length; i++){

		textArray[0]= textArray[0].toLocaleLowerCase();

		result += textArray[i];

		if(textArray[i]===" "){
			textArray[i + 1] = textArray[i + 1].toLocaleLowerCase();
		}

	}

	return result;
}


swapCase("The Quick Brown Fox");