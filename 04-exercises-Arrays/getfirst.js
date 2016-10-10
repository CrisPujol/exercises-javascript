/*Write a JavaScript function to get the first element of an array. 
Passing a parameter 'n' will return the first 'n' elements of the array.*/




function first (myArray, numElements){

	var newArray = [];


	if(numElements===undefined){
		return myArray[0];
	}

	else{
		for(var i=0; i===numElements; i++){
			console.log(myArray[i]);
		}
	}
	return newArray;

}

first ([1,2,3,4], 2);


var array = [1,2,3,4];



function first(array, num){

	if(num===undefined){
		return array[0];
	}

	var newArray = array.filter(function(element, index){

		if(index<num){
			return true;
		}
		else{
			return false;
		}
	})

	return newArray;
}

