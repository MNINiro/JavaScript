//Ex-1
console.log(Object.prototype);

//Ex-2
var b1 = {};
console.log(Object.getPrototypeOf(b1)) // b1 is associated with Object.prototype. So both of them will show same result

//Ex-3
var b2 = new Object();
console.log(Object.getPrototypeOf(b2));//Same as previous one

//Ex-4
var b3 = new Object();
console.log(Object.getPrototypeOf(Object.prototype)); // it is inheriting NULL object

//Ex-5
var b2 = new Array();
console.log(Object.getPrototypeOf(b2));

//Ex-6
var b2 = new Array();
console.log(Object.getPrototypeOf(Array.prototype));
console.log(Object.getPrototypeOf(Object.prototype)); // it is inheriting NULL object


//Ex-7
var b3 = new String();
console.log(Object.getPrototypeOf(b3));

//Ex-8
var b3  = new String();
console.log(Object.getPrototypeOf(String.prototype));
console.log(Object.getPrototypeOf(Object.prototype)); // it is inheriting NULL object
