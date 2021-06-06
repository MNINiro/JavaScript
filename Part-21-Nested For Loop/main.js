//Ex-1
for(i=0; i<5; i++)
{
    document.write("<strong> Outer loop </strong>")
    document.write(i);
    document.write("<br>");
    for(j=0; j<3; j++)
    {
        document.write("Inner loop")
        document.write(j);
        document.write("<br>");
    }
} 
/*
//Ex-2; Alternate presentation
for(i=0; i<5; i++)
{
    document.write("<strong> Outer loop </strong>" + i + "<br>")
    for(j=0; j<3; j++)
    {
        document.write("Inner loop" + j + "<br>")        
    }
} 
*/
