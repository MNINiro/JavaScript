//Ex-1-Rest Parameter
function display(a,...args) //it will behave like an array
{
   console.log("a :" + a)
    console.log(args);     //Check O/P in console of the dev tools of EDGE
}
display(10,20,30);     // It will pass 1st one to a and rest of the parameters will go to ..args 


//Ex-2-Argument object
function show(a) //it will behave like an array
{
    console.log("a :" + a)
    console.log(arguments); // it will display all of the parameters
    
}
show(11,22,33,44,55);     // It will pass all of the parameters in the argument a 


