
/*Represent a small bilingual lexicon as a Javascript object in the following fashion
 {"merry":"god", "christmas":"jul", "and":"och", "happy":gott", "new":"nytt", "year":"år"}
  and use it to translate your Christmas cards from English into Swedish.*/




        

 function translate(string){

    var textArray = string.split(" ");

    var translateText = {
                merry:"god",
                christmas:"jul",
                and:"och",
                happy:"gott",
                new:"nytt",
                year:"år"};

    var textTraducedArray = [];   
    var stringTraducedArray  = [];       

     for ( var word in translateText ) {
        textTraducedArray.push(translateText[word]);
       } 

     for (var i=0; i<textArray.length; i++){
       stringTraducedArray.push(textTraducedArray[i]);  
     }  

       var textTraduced =  stringTraducedArray.join(" ");
      
       return textTraduced;
}

       

       
