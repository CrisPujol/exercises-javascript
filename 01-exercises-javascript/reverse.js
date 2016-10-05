//Define a function reverse() that computes the reversal of a string. 
//For example, reverse("jag testar") should return the string "ratset gaj".





function reverse (string) {

  var arrayText = string.split ("");

  arrayText.reverse();
  console.log (arrayText);

  var textReverse = arrayText.join("");
  return textReverse;
}

