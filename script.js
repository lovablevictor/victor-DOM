document.write ("from javascript.js <br>")

 document.write("<br>")

var a = 2;
var b = -4;
var c = -2;
 var x1 = ((-b) + Math.pow(b,2 - 4 * a * c)) / (2 * a);
 document.write (x1);

 document.write("<br>")

 var weatherCondition = "raining";

 if (weatherCondition == "raining") { 
 	document.write ("take an umbrella");

 }
else{
 		document.write("take a face cap") 	
 	}

	var pie = 3.142;
	var radius = 7;
area ();
 function area () {
 	
	document.write (pie * Math.pow(radius,2));
 }
 document.write("<br>")
 
perimeter ();
 function perimeter () {
 	var l = 15
	document.write (4*l)
 }
 document.write("<br>")

 var num1 = 10;
 var num2 = 7
 document.write(num1 % num2)

 	for (var i = 1; i<=200; i++) {
 		if (i % 2 == 0) {
 		//document.write (i +);
 		}
 	}
 	
 	function divide (number1, number2) {
 		document.write(pie * radius *radius)
 	}

 	function bio( name, age, position) {
 		document.write(name + age + position)
 	}

 	bio ("Donald Truno", 74, "President")

document.write("<br>")

 	bio ("Victor",  "White",  "Beans");

 	bio ("rice", "egusi", "ice");

 	function firstName(lastName, age) {
 		age()
 		lastName()
 		document.write ("Donald <br>");
 	}

 	function lastName (){
 		document.write ("Trump <br>");
 	}

 	function age (){
 		document.write (74 + "<br>");
 	}

 	firstName (lastName, age);

 	var number = 5
 	function num (){
 		var number = 10
 		document.write (number + "<br>");
 		var number = 12
 	}

 	num ();

 	function banks () {
 		var banks = ["firns bank", "access bank"]
 		for (var i =0; i < banks.length; i++)
 			console.log (banks[i])
 	}

 	banks ();

 	var hospitals = [
 		{
 			"name" : "Bolu"
 			"level" : 100,
 			"course" : "computer engineering" 
 		}
 		{
 			"name" : "vic"
 			"level" : 300,
 			"course" : "computer"


 		}
 		{

 			"name" : "sam"
 			"level" : 500,
 			"course" : "engineering" 

 		}
 	];
 		
 		console.log( hospitals[0]. level)