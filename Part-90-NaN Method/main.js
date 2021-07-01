//NaN - Not a Number
var a = 20;
var i = '5'
var x = 'Hello'
document.write('NaN: ',a/i,'<br>'); // 'a' is a number but 'i' is a string. JS converts this 'i' into integer
document.write('NaN: ',a/x,'<br>'); // 'a' is a number but 'x' is also a string but JS can't converts this word into integer.

//NaN is not equal to anything
document.write('a: ',isNaN(x),'<br>'); 
document.write('i: ',isNaN(i),'<br>'); 
document.write('x: ',isNaN(a),'<br>'); 

if(x == NaN){
    document.write("Equal",'<br>');
}
else {
    document.write("Not equal",'<br>');  
} 

//Example
document.write('isNaN: ',isNaN(a),'<br>'); 
if(isNaN(a)){
    document.write("Not a number",'<br>');
}
else {
    document.write("Its a number",'<br>');  
} 



