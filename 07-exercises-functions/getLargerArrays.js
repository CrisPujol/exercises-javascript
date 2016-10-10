


function getLargerArrays(myArray, n){

	var largerElements = myArray.filter( function (elem){

		if(elem.length > n){
			return true
		}
	})

return largerElements;
}


