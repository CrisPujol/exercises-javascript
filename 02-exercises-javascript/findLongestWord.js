//Write a function findLongestWord() that takes an array of words and returns the length of the longest one.






function findLongestWord(words){

	var longestWord = "";

    for(var i=0; i<words.length; i++){
    	
    	if(longestWord.length<words[i].length){
    		longestWord = words[i];
    	}
    }

    return longestWord.length;
}



 //Otra forma que funciona (juanma)

function findLongestWord(listWords){
    
    var currentWord;
    var longestWord = "";

    for(var i=0; i<listWords.length; i++){
        
        currentWord = listWords[i];
        
        if(currentWord.length>longestWord.length){
            longestWord = currentWord;
        }
    }
    
    return longestWord;
}

findLongestWord(["barcelona", "roma", "london", "berlin" , "Estocolmocity"])