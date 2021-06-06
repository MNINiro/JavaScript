//Ex-1
function display(name1,name2)
{ /*
    document.write(arguments[0]); //name1 in the first argument
    document.write(arguments[1]); //name2 in the second argument
    document.write("<br>")
   
    document.write(arguments[0] + arguments[1]);
    document.write("<br>")
   
    document.write("Length of one argument:" + arguments[0].length)
    document.write("<br>")
   
    document.write("Number of arguments:" + arguments.length)
    document.write("<br>")
*/
    //Example
    var l = arguments.length //Number of arguments not parameter
    document.write(l)
    document.write("<br>")

    for(i=0; i<l; i++)
    {
        document.write(arguments[i])
        document.write("<br>")
        //document.write(arguments.callee) //It will display properties of each argument       
    }
}
display("InCIS","Ltd","BD")
