//Ex-1
function display(...args) //it will behave like an array
{
    document.write(args); 
    document.write("<br>");    
}
display(10,20,30);     // It will pass all of the parameters in ..args 
document.write("<br>");

//Ex-2
function display1(a,...args) //first argument for 1st parameter and rest for args
{
    document.write(a); 
    document.write("<br>");
    document.write(args); 
    document.write("<br>");    
    
}
display1(11,22,33,44,55);     // It will pass all of the parameters in ..args 
document.write("<br>");
//Ex-3
function display2(a,...args) //first argument for 1st parameter and rest for args
{
    document.write("A:"+a); 
    document.write("<br>");
      
    for(i=0;i<4;i++)
    {   
        document.write("i: "+args[i]); 
        document.write("<br>");
    }
    
}
display2(11,22,33,44,55);     // It will pass all of the parameters in ..args 