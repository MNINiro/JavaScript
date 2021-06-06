//Ex-1
var i = 10;
function OuterFun()
{
   var j = 20;
   document.write(j + "<br>");
   document.write(i + "<br>"); //it's a closure
   //document.write(k + "<br>"); //it's not possible since k is in the inner function
   function InnerFun()
   {
      var k = 25;
      document.write(k + "<br>");
      document.write(i + "<br>"); //it's a closure
      document.write(j + "<br>"); // It's a closure      
   }
   InnerFun()
   // document.write(k + "<br>"); //Not allowed
}
OuterFun()