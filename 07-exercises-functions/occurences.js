


function occurences(text){

 var occurencesText = {};

 	for(var i = 0 ; i<text.length; i++){

 		if(occurencesText[text[i]] == undefined){
 			occurencesText[text[i]] = 1;
 		}

 		else{
 			occurencesText[text[i]]++
 		}
 	}

 	return occurencesText
}

