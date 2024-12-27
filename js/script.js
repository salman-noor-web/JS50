//ex1//
function textshow(){
	document.getElementById('st').innerHTML="Hello World!";
} 

//ex2//
function showDate(){
	document.getElementById('sd').innerHTML=Date();
}

//ex3//
function changeText(){
   document.getElementById('ct').innerHTML="Bye";
}

//ex4//
function changeColor(){
	document.getElementById('color').style.color="red";
}

//ex5//
function bulbOn(){
   document.getElementById('boo').src="images/on.gif";
}

function bulbOff(){
   document.getElementById('boo').src="images/off.gif";
   
}
//ex6//
function showMath(){
   document.getElementById('mc').innerHTML=4+5;
}

//ex7//
function printPage(){
   window.print()
   
}
//ex8//

let numbr1=8; 
let numbr2=4;

let result= numbr1>numbr2;

function showTrue(){
   document.getElementById('tf').innerHTML=result;
}

//ex9//

function winDow(){
   document.getElementById('ww').innerHTML = window.alert(0+1);
   
}
//ex10//

let x = 10;
let y = 20;

function numBers(){
   document.getElementById('nr').innerHTML = x + "<br>" +  y;
   
}