//Primitive numbers
var a = 10;
var b = 10.50;
var c = 5e3;
var d = 34e-5
document.write(a,'<br>');
document.write(b,'<br>');
document.write(c,'<br>');
document.write(d,'<br>');
document.write(typeof(d),'<br>','<br>');

//Constructor
var x = new Number(10);         //converted into an object
var y = new Number(10.45);
var z = new Number(5e3);
document.write(x,'<br>');
document.write(y,'<br>');
document.write(z,'<br>');
document.write(typeof(x),'<br>','<br>');

//parseInt and parseFloat
var i = '10';
var j = '10.50';
document.write('Result is: ',parseInt(i)+parseFloat(j),'<br>')

//Number to toExponential() Method
var num = 212.13456;
document.write('Exponential value: ',num.toExponential(),'<br>');
document.write('Exponential value: ',num.toExponential(4),'<br>');

//NaN - Not a Number
var a = 20;
var i = '5'
var x = 'Hello'
document.write('NaN: ',a/i,'<br>'); // 'a' is a number but 'i' is a string. JS converts this 'i' into integer
document.write('NaN: ',a/x,'<br>'); // 'a' is a number but 'x' is also a string but JS can't converts this word into integer.

//NaN is not equal to anything
document.write('isNaN: ',isNaN(x),'<br>'); 
document.write('isNaN: ',isNaN(i),'<br>'); 
document.write('isNaN: ',isNaN(a),'<br>'); 

if(x == NaN){
    document.write("Equal",'<br>');
}
else {
    document.write("Not equal",'<br>');  
} 





