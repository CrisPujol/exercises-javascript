/*
Write a JavaScript program which accept a number as input and insert dashes (-) 
between each two even numbers. For example if you accept 025468 the output should be 0-254-6-8.
*/


function separateEven(num){
    var numbers = num.toString().split("")
    var onlyEven = ""
    for(i=0; i<numbers.length; i++){
        if((numbers[i]%2)===0 && (numbers[i+1]%2===0)){
            onlyEven += numbers[i] + "-"
        }else{
            onlyEven += numbers[i]
        }
    }
    return onlyEven
}
separateEven(184238491)