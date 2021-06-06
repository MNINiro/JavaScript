/*//Ex-1-Global Variable
var i = "It's a global variable"
function GlobalVar()
{
   document.write(i + "<br>");    
}
GlobalVar();     
document.write("<br>");

//Ex-2-Local Variable
function LocalVar()
{
   var j = "It's a local variable"
   document.write(j + "<br>") 
   document.write(i + "<br>") 
}
LocalVar();     
document.write(i + "<br>")
*/
//Ex-3-Global Variable
var i = 50
/*function GlobalVar()
{
   document.write("Global O/P: " + i + "<br>");    
}
GlobalVar();     
document.write("<br>");
*/
//Ex-4-Local Variable
function LocalVar(j)
{
   document.write("Local O/P: " + j + "<br>"); 
   document.write("Global + Local O/P:" + (parseInt(i) + parseInt(j)) + "<br>");
   return j;
}
/*LocalVar(25);   
document.write("<br>");

document.write("Global + Local O/P:" + (parseInt(i) + LocalVar(35)) + "<br>") //It will not show any result until return
document.write("<br>");
*/
//Ex-5-using local variable of one function to another function
/*function disp()
{
   var x = prompt("Enter value");
   document.write("Multiple functions: " + (parseInt(x)+LocalVar(10))+"<br>");
   document.write("<br>");

   var y = prompt("Enter New value");
   y = parseInt(y)
   document.write("Multiple functions with Global variable: " +(parseInt(i)+(parseInt(x)+LocalVar(y))));
}
disp()
*/

//Ex-6-Nested Function
function OuterFun() 
{
   var a = 10;
   document.write("Local var of outer function : " + a);
   document.write("<br>");
   //document.write("Local var of inner function: " + b); // Outer can't display inner value

   function InnerFun() //Nested function
   {
      var b = 20;
      document.write("Local var of inner function: " + b);
      document.write("<br>");
      document.write("Local var of outer function : " + a); // O/P will be displayed since it's a nested function
      document.write("<br>");
      document.write("Addition:" + (parseFloat(a) + parseFloat(b)));
   }
   InnerFun();   
}
OuterFun();

