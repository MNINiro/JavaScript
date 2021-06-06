function display(arg1,arg2)
{
    document.write(arg1); //first argument
    document.write("<br>")
    document.write(arg2); //second argument
    document.write("<br>")
    document.write(arguments[2]); //accesing to 3rd argument directly
}
display(10,20,30)