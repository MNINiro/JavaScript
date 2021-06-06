//Ex-1-Var

var x = 10;
let y = 15;
const z = 100;

document.write("Var x :", x,"<br>");
document.write("Let y :", y,"<br>");
document.write("Const z:",z,"<br>");
document.write("<br>");

//Ex-2
x  = 20; //value change possible
y = 30; //value change possible
//z = 200; // value change not possible

document.write("Var x :", x,"<br>");
document.write("Let y :", y,"<br>");
document.write("Const z:",z,"<br>","<br>")

//Ex-3
document.write("Var keyword:","<br>");
function myVar()
{
    var a = 10;
    if(true){
        var a = 20;
        document.write("a :",a,"<br>");
    }
    document.write("a :",a,"<br>"); //value of "a" has already been changed
}
myVar()
document.write("<br>");
document.write("Let keyword:","<br>");

//Ex-4
function myLet()
{
    let b = 10;
    if(true){
        let b = 20;
        document.write("b :",b,"<br>");
    }                               //Let ends here
    document.write("b :",b,"<br>","<br>"); //value of "b" will not change
}
myLet()

//Ex-5-Var loop
document.write("Loop with Var","<br>")
for (var i=0; i<5; i++){
    document.write(i,"<br>");
}
document.write(i,"<br>","<br>") //value of i is still carrying

//Ex-6-Let loop
document.write("Loop with Let","<br>")
for (let j=0; j<5; j++){
    document.write(j,"<br>");
}
document.write(j) //value of j will not carry
