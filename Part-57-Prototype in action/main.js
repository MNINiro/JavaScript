//When a function is created, a constructor and a prototype also been created by default.
//an Object is required to access to this function or the constructor or to the prototype.
function Mobile(){

}

document.write(Mobile);             //Accessing to function constructor
document.write('<br>');
document.write(Mobile.prototype);   //Accessing to function's prototype
document.write('<br>');

console.log(Mobile);                //Accessing to function constructor
console.log(Mobile.prototype);      //Accessing to function's prototype

var LG = new Mobile();
console.log(LG.__proto__);          //It will access to the Mobile.prototype
//verifying
console.log(Mobile.prototype === LG.__proto__); // It will return "true". They are same
document.write(Mobile.prototype === LG.__proto__); // It will return "true". They are same

console.log(Mobile === LG.__proto__.constructor); // It will also return "true". They are same
console.log(Mobile === Mobile.prototype.constructor); // It will also return "true". They are same


//Ex-1==================
function TV(){

}
TV.prototype.price = 50000;

var Samsung = new TV();
console.log(Samsung.x); // it will show 'undefined' since there is no property named 'x' in either the constructor not in the prototype
console.log(Samsung.price); //since there is a value named price in the prototype, it will show the result.


//Ex-2==================
function Radio(){
    this.price = 3500;  //property
}
Radio.prototype.price = 5000;

var Sony = new Radio();
//It will show the result from the constructor, Not from from the protype since object access to the constructor before prototype
console.log(Sony.price); 


//Ex-3==================
function PC(){
    
}
PC.prototype.price = 5000;

var Asus = new PC();
//It will show the result from the prototype, since there is no property in the constructor named price.
console.log(Asus.price); 
