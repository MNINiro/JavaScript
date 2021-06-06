//Immidiately invoked function
// it will call itself. Variable declared within IIFE can't be accessed from outside

//Ex-1
(function(){document.write("Hello World!")}) ();
document.write("<br>");

//Ex-2
(function(){
   var a = 10;
   document.write(a);
}) (); 
document.write("<br>");

//Ex-3
(function(a,b){
   var a = 10;
   document.write(a," ",b);
}) (11,22); 