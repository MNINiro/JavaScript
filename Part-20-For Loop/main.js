/*//Ex-1
for(i=0; i<5; i++)
{
    document.write(i);
    document.write("<br>");
} 

//Ex-2
n = prompt("Enter range");
for(i=0; i<n; i++)
{
    document.write(i + "<br>"); // alternate way to break   
} 
document.write("<br>");

//Ex-3
i=0
n = prompt("Enter range");
for(; i<n;)
{
    i++  //it increases the value of i initially before printing; will print i=1 
    document.write(i + "<br>"); 
} 
document.write("<br>");

//Ex-4
var i=0
var n = prompt("Enter range");
for(; i<n;)
{
    document.write(i + "<br>"); 
    i++  //it increases the value of i after printing; i=0 
} 
document.write("<br>");
*/
//Ex-4
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