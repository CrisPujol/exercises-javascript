


function sum(text){

	var textArray = text.split("")

 	var result = 0;

 	var newArray = textArray.filter( function (elem){
		return elem !== ",";
	})


	for (var i =0; i<newArray.length; i++){
		result += Number(newArray[i]);
	}


	return result;

}

