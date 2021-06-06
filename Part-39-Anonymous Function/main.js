/*//Ex-1
var i = 10;
var myFun = function() //anonymous function
{
   var j = 20;
   document.write(j + "<br>");
   document.write(i + "<br>");
}
myFun();


//Ex-2-Passing anonymous function
function disp(myVar)
{
   //return myVar; // it will show function details
   return myVar(); // It will show the actual result. Now myVar is behaving like a function
}

document.write(disp(function()
   {
      return "InCIS";
   }));
*/
//Ex-3-Returning anonymous function
function show(a)
{
   return function(b)
   {
      return(a+b);
   }
}
document.write(show(100)); // it will show function details
document.write("<br>")

// to view the actual calculation
var x = show(100); //must be assigned in a variable
document.write("result is:" + x(25)); //display O/P by passing parameter for b