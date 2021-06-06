//Break
var i=0
var n = prompt("Enter range");
for(; ; i++)
{
    if (i==n)
    {
        break;
    }
    document.write(i + "<br>");    
} 
document.write("<br>");

//Continue
for(i=0; i<5; i++)
{
    if (i==3)
    {
        continue; //IF condition matches then that value will be skipped 
    }
    document.write(i + "<br>");    
} 
