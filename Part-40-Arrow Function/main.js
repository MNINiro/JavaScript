//Ex-1
var myFun = () => {  //exact structure must be followed
   document.write("Arrow Function")
   document.write("<br>");
};

myFun();

//Ex-2-with parameter, and rest parameter
var myFun = (a,b,c=50,...args) => 
{  //exact structure must be followed
   document.write(a," ",b," ",c," ",args)
   document.write("<br>");
};

myFun(10);
myFun(11,22)
myFun(11,22,55,66,77,88,99)

//Ex-3-without ()
var myFun = a => {  //exact structure must be followed
   document.write(a)
   document.write("<br>");
};

myFun(101);

//Ex-4-shortest example-1
var myArr = c => c;  // same as {return c;};
document.write("Shortest way: ",myArr(212) + "<br>");

 
