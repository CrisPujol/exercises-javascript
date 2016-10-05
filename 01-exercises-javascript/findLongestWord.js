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