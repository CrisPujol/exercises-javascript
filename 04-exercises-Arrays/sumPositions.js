
Sample array : 
    array1 = [1,0,2,3,4];
    array2 = [3,5,6,7,8,13];
    Expected Output : 
    [4, 5, 8, 10, 12, 13] 


function sumPositions(myArray1, myArray2){

 var result = [];


	 for( var i = 0; i<myArray1.length; i++){
	 	result.push(myArray1[i] + myArray2[i])
	 }

return result;
	
}


sumPositions([1,0,2,3,4],[3,5,6,7,8,13])