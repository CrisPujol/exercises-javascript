/* 
Write a JavaScript function to get the last element of an array. 
Passing a parameter 'n' will return the last 'n' elements of the array.
*/

function last(myArray, num){

	if(num===undefined){
		return array[0];
	}

	var reverseArray = myArray.reverse();
	var newArray = reverseArray.filter(function(element, index){

		if(index<num){
			return true;
		}
		else{
			return false;
		}
	})

return newArray;
	
}




