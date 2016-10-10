


function unique_char(text)  {  


 var uniqueChar=""; 

 	for (var i=0; i < text.length; i++) {  
  
 		if(uniqueChar.indexOf(text[i]) === -1) {  
  			uniqueChar += text[i];    
  		 }  
 	 }  

 return uniqueChar;    
}    




