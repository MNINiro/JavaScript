//Ex-1
function display(a,b)
{
    c = a+b
    document.write("Result is: " + c);
    document.write("<br>")
}
/*
display(10,20); //calling function normally

//Ex-2
var x = prompt("Enter 1st data: ");
var y = prompt("Enter 2nd data: ");
show(x,y); // calling function before it was created

function show(x,y)
{
    z = x*y
    document.write("Showing result:" + z);
}

//Ex-3
function showName(fn,ln)
{
    document.write("Full Name is:" + fn +' '+ln);
    document.write("<br>")
}

var fname = prompt("Enter first name: ");
var lname = prompt("Enter second name: ");
showName(fname,lname); // calling function before it was created

showName("Hello","World!")

//Ex-4 Undefined
function display(a,b,x)
{
    c = a+b
    document.write("Result is: " + c);
    document.write("<br>")
    document.write(x) // it will be undefined since no value has been passed
    document.write("<br>")
}

display(10,20); //calling function normally
*/