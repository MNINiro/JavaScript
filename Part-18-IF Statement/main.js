/*
//IF Statement
var a = prompt("Enter 1st data:");
var b = prompt("Enter 2nd data:");
if(a==b)
    document.write(parseInt(a)+parseInt(b));
document.write("<br>");

//multi-conditional IF statement
var x = prompt("Enter 1st value:");
var y = prompt("Enter 2nd value:");
var z = prompt("Enter 3rd value:")
if((x==y) && (y==z))
    document.write("They all are equal");
document.write("<br>");

//IF..ELSE statement
var a = prompt("Enter 1st data:");
var b = prompt("Enter 2nd data:");
if(a==b)
    document.write(parseInt(a)+parseInt(b));
else
    document.write("Not matched")
document.write("<br>");
*/

//IF..ELSE IF
var a = prompt("Enter 1st data:");
var b = prompt("Enter 2nd data:");
var c = prompt("Enter 3rd data:");
if((a>b) && (a>c))
    document.write("A is the highest");
else if((b>a) && (b>c))
    document.write("B is the highest");
else
    document.write("C is the highest")

document.write("<br>");
