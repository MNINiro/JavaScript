var str1 = 'Hello';
var str2 = "world";
/* 
//following multiple line codes are not allowed
var str3 = 'Hellow 
World'
var str4 = "Hello 
World"
*/

//back-tic support multiple line entry
//Ex-1
var str3 = `Hello World`;

//Ex-2
var str4 = `Hello 
World`;
console.log(str4);

//Ex-3
var str5 = `International
Centre
for
Integrated 
Studies
InCIS`;
console.log(str5);

//Assigning variable in {} with ``
//Ex-4
document.write(`${str1}`,' welcome to our new',` ${str2}`,'<br>');

//Ex-5
document.write('Calculation: ',`${2*5} in word, Ten`,'<br>');

//Ex-6
a=4;
b=6;
document.write('Calculation: ',`${a+b} in word, Ten`,'<br>');

//Ex-7
function test(x){
    return x;
}
document.write('Calculation: ',`${test(10)} in word, Ten`,'<br>')

//Ex-8
arr = ['Apple','Asus','Dell','HP'];

for(i=0; i<4; i++){
    document.write('Brand: ',`${arr[i]} PC`,'<br>')
}

