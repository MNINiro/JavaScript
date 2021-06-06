function display()
{
    document.write("It's a function");
    document.write("<br>")
}

display(); //calling function normally
show(); // calling function before the function

function show()
{
    document.write("It's inside a function");
}