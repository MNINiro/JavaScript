var x = 'Hello World'

document.write('Length: ',x.length,'<br>')
document.write('Character: ',x[1],'<br>')
document.write('Character at position: ',x.charAt(6),'<br>')
document.write('Unicode: ',x.charCodeAt(1),'<br>');
document.write('ASCII: ',x.codePointAt(0),'<br>','<br>');

//Slice method
let str = "Apple, Banana, Kiwi";
document.write('Slice: ',str.slice(7, 13),'<br>')               // Returns Banana. start and end character
document.write('Slice: ',str.slice(-12, -6),'<br>')             // Returns Banana
document.write('Slice: ',str.slice(7),'<br>')                   // Returns Banana,Kiwi

//substring method
document.write('Substring: ',str.substring(7,13),'<br>')        // Returns Banana
document.write('Substr: ',str.substr(7,6),'<br>')               // Returns Banana. similar to slice. Start char to number of char.
document.write('Substr: ',str.substr(-4),'<br>','<br>')         // Reverse. Last 4 char

//Replace method
let text = "Please visit us!";
let newText = text.replace("us", "InCIS");
document.write('Replacement: ',newText,'<br>','<br>')   

//To replace case insensitive, use a regular expression with an /i flag (insensitive):
let text1 = "Please visit Microsoft!";
let newText1 = text1.replace(/MICROSOFT/i, "Apple");
document.write('Replacement: ',newText1,'<br>','<br>')

//To replace all matches, use a regular expression with a /g flag (global match):

let text2 = "Please visit Microsoft and enjoy Microsoft services";
let newText2 = text2.replace(/Microsoft/g, "InCIS");
document.write('Replacement: ',newText2,'<br>','<br>')

//Convert to Upper case
let text3 = "Hello World!";                         // String
let text4 = text3.toUpperCase();                    // text4 is text3 converted to upper
document.write('To upper case: ',text4,'<br>')

text5 = text4.toLowerCase();
document.write('To lower case: ',text5,'<br>','<br>')

//Concate method
let txt1 = "Hello";
let txt2 = "World";
let txt3 = txt1.concat(" ", txt2);
document.write('Concate: ',txt3,'<br>','<br>');

//trim method
let txt = "       Hello World!        ";
document.write(txt.trim(),'<br>','<br>');    // Returns "Hello World!"

//String Padding
let tx = "5";
document.write(tx.padStart(4,0),'<br>')     // Returns 0005
document.write(tx.padEnd(4,0),'<br>')       // Returns 0005
document.write('<br>')

//Split Method
y = "Lorem ipsum dolor sit amet consectetur adipisicing elit."
document.write(y.split(" "))  //One sentence has been converted into multiple strings stores in an array.
console.log(y.split(" "));
document.write('<br>','<br>')

//indexOf method
var strn = "Sony is one of the best entertainment companies";
document.write(strn.indexOf("i"),'<br>');   // returns first occurance
document.write(strn.indexOf("of"),'<br>');
document.write(strn.indexOf("i",10),'<br>'); // returns first occurance after 10th position 
document.write('<br>')

//search method
document.write(strn.search("companies"),'<br>'); //returns position where matches
document.write(strn.indexOf("of"),'<br>');


