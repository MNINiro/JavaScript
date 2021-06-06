//Ex-1
var i = 10;
var myFun = function OuterFun() //function expression
{
   var j = 20;
   document.write(j + "<br>");
   document.write(i + "<br>"); //it's a closure
   //document.write(k + "<br>"); //it's not possible since k is in the inner function
}
myFun();
