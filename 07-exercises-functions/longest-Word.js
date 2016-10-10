



function longestWord(text){

	var textArray = text.split(" ");
	console.log(textArray);


	var longestWord = "";

	    for(var i=0; i<textArray.length; i++){
	    	
	    	if(longestWord.length<textArray[i].length){
	    		longestWord = textArray[i];
	    	}
	    }

	    return longestWord;

	}





