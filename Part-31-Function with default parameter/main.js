//Ex-1
function display(arg1,arg2,arg3=55)
{
    document.write(arg1); //first argument
    document.write("<br>");
    document.write(arg2); //second argument
    document.write("<br>");
    /*document.write(arguments[2]); //accesing to 3rd argument directly
    document.write("<br>");
    */
    document.write(arg3); //calling default argument
    document.write("<br>");
    document.write("<br>");
}
display(10,20);     // Now arg3 will show defaul value
display(11,22,33);  // Default value of arg3 will be replaced by passed argument

//Ex-2
function show(a,b,c=null)
{
    document.write("A: " + a +" ");
    document.write("B: " + b +" ");
    document.write("C: " + c +" ");
}

show(111);
document.write("<br>");
show(101,202);
document.write("<br>");
show(111,222,333);

//Ex-3
function showArr(a=[101]) //Array as parameter
{
    document.write("A: " + a[0] +" ");
}
document.write("<br>");
document.write("<br>");
showArr();
document.write("<br>");
showArr([10]);
document.write("<br>");
showArr(10);

//Ex-4
function showArr1(arg, a=["InCIS","Ltd"]) //Array as parameter
{
    document.write(arg + " "+"A: " + a[0] +" "+a[1]);
}
document.write("<br>");
document.write("<br>");
showArr1();
document.write("<br>");

showArr1(101,[10]);
document.write("<br>");

showArr1(10,[11,22]);