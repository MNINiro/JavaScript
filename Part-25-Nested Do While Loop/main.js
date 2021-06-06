//Ex-1 Nested Repeat-until loop
var i=0;
do
{
    document.write("<strong> Outer loop </strong>")
    document.write(i);
    i++;
    document.write("<br>");

    var j=0;
    do
    {
        document.write("inner loop")
        document.write(j);
        j++;
        document.write("<br>");
    } while(j<3)
} while(i<5)
/*
//Ex-2
var i=0;
do
{
    document.write("<strong> Outer loop </strong>" + i + "<br>")
    i++;
    
    var j=0;
    do
    {
        document.write("inner loop:" + j + "<br>")
        j++;        
    } while(j<3)
} while(i<5)
*/