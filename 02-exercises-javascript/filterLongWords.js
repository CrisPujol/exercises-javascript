//Write a function filterLongWords() that takes an array of words and an integer 
//i and returns the array of words that are longer than i.




function filterLongWords(words, x){

	var wordsInArray = "";

    for(var i=0; i<words.length; i++){

    	if(words[i].length>x){
    		wordsInArray += words[i] + " " ;
    	}
    
	}
	return wordsInArray;
}

