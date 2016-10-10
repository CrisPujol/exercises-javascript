

function sortItems(myArray){

	var sortItemsArray = myArray.sort( function(elem,index){

		return elem - index

	})

	return sortItemsArray;
}