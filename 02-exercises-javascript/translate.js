
/*Write a function translate() that will translate a text into "rövarspråket". That is, double every consonant and place an occurrence of "o" in between. 
For example, translate("this is fun") should return the string "tothohisos isos fofunon".*/

var text = "";

function translate(text){
	text="rövarspråket";
	return text;
}




var text_2 = "this is fun";


function translateText() {
	var frase=text_2.split("");
	console.log(frase);

		for(var i=0; i<text_2.length; i++){
			if("aeiou".indexOf(text_2) == -1){
				console.log(text_2[i] + "o" + text_2[i]);
				}
			else{
				console.log(text_2[i]);
			}	
		}

	frase.join("");	
	
}



function translateText(string) {

	var frase=string.split("");
	console.log(string);
	var newText=[];

		for(var i=0; i<string.length; i++){

			if(frase[i] !== "a" || frase[i] !== "e" || frase[i] !== "i" || frase[i] !== "o" || frase[i] !== "u"){
				console.log(frase[i] + "o" + frase[i]);
				}
			else{
				console.log(frase[i]);
			}	
		}

	var text = var newText=[];.join("");	
	console.log(text);
}




function translateText(string) {

		var currentLetter = "";
		var translatedText = "";

		function isVowel(letter){
			return ("aeiou".indexOf(letter) != -1)
		}

		for(var i=0; i<string.length; i++){

			var currentLetter = string[i];

			if ( isVowel(currentLetter) ){
				translatedText += currentLetter;
				}
			else{
				translatedText += currentLetter + "o" + currentLetter;
			}	
		}

		return translatedText;

}