//JavaScript follows Bottom-Top traversal method.
//In JS inheritance occurs from Prototype only. Not from Class or Function or Constructor

//Super Class
var Mobile = function(){
    this.CostPrice = 10;
}
//Super class's prototype
Mobile.prototype.profit = 5;

//Sub Class
var Samsung = function(){
    Mobile.call(this);      //calling(linking) Super Class Mobile into Samsung sub class so, we can access to Super class's properties 
    this.SellPrice = 15;
}

//Prototype Inheritance (to connect Sub class prototype with super class prototype)
Samsung.prototype = Object.create(Mobile.prototype);    //Sub class prototype has been linked with Super class's prototype
Samsung.prototype.constructor = Samsung;                //creating constructor of the sub class's prototype

//Creating & giving a value to the Sub class's prototype (N.B. discuss after property inheritance)
Samsung.prototype.quantity = 100;

//for Sub class============================================
var s = new Samsung();      //Object of the Sub Class
document.write('Cost Price from Super class: ',s.CostPrice,'<br>');
document.write('Selling Price from Sub class: ',s.SellPrice,'<br>');

//it will show "undefined" unless we create "Prototype Inheritance"
document.write('Profit from Super class prototype : ',s.profit,'<br>'); //importing value from it's Super class

document.write('Showing value from Sub class prototype:', s.quantity,'<br>'); //Newly created Sub class prototype
document.write('<br>')

//for Super class=============================================
var m = new Mobile();      //Object of the Super Class
document.write('Cost Price from Super class: ',m.CostPrice,'<br>');     //It is accessible since it is its own property
document.write('Profit from Super class prototype : ',m.profit,'<br>'); //It is accessible since it is its own prototype

//it will show "undefined"
document.write('Selling Price from Sub class: ',m.SellPrice,'<br>');    //It is not accessible since, Super class can't access to Sub class
document.write('<br>')

//Claculation before overwriting value
document.write('Before overwrite, Total Profit: ',m.profit * s.quantity,'<br>','<br>')

//Overwriting Super class's prototype value
Mobile.prototype.profit = 50;
document.write('Overwritten Profit from Super class prototype : ',m.profit,'<br>'); 

//Overwriting Sub class's prototype value
Samsung.prototype.quantity = 500;
document.write('Overwritten value of Sub class prototype:', s.quantity,'<br>');
document.write('<br>')

//Claculation after overwritten value
document.write('After overwrite, Total Profit: ',m.profit * s.quantity)

