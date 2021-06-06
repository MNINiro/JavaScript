/*//Ex-1
var i=0;
while(i<5)
{
    document.write("<strong> Outer loop </strong>")
    document.write(i);
    i++;
    document.write("<br>");

    var j=0;
    while(j<3)
    {
        document.write("inner loop")
        document.write(j);
        j++;
        document.write("<br>");
    }
}
*/
//Ex-2
var i=0;
while(i<5)
{
    document.write("<strong> Outer loop </strong>" + i + "<br>")
    i++;
    
    var j=0;
    while(j<3)
    {
        document.write("inner loop:" + j + "<br>")
        j++;        
    }
}
