//JavaScript follows Bottom-Top traversal method.
//In JS inheritance occurs from Prototype only. Not from Class or Function or Constructor

//Super Class
var Mobile = function(model){
    this.model = model
}

//Super class's prototype method. Inherited from here
Mobile.prototype.getModel = function(){
    return this.model;
}

//Sub Class
var Samsung = function(model,price){
    Mobile.call(this,model)             //It is just calling to access to the Super Class, not inheritance
    this.price = price;    
}

//Prototype Inheritance (to connect Sub class prototype with super class prototype)
Samsung.prototype = Object.create(Mobile.prototype);    //Sub class prototype has been linked with Super class's prototype
Samsung.prototype.constructor = Samsung;                //creating constructor of the sub class's prototype

var s = new Samsung('Galaxy',50000);      //Object of the Sub Class
document.write('Model from Super class: ',s.getModel(),'<br>'); //Sub class passes value to the getModel function of the Super Class
console.log(s.getModel());
console.log(s.model);
console.log(s.price)
document.write("The Price is ",s.price)
