function gradeBook(a,b,c){


var average = ((a+b+c)/3)

if(a>100 || b>100 || c>100) return "X"


 if (average>=90) return "A"
 if (average>= 80) return "B"
 if (average>= 70)	return "C"
 if (average>= 60)	return "D"

 return "F"
 

}
	



