//JavaScript follows Bottom-Top traversal method.
//In JS inheritance occurs from Prototype only. Not from Class or Function or Constructor

function extended(child,parent){
    child.prototype = Object.create(parent.prototype);      //Sub class prototype has been linked with Super class's prototype
    child.prototype.constructor = child;                    //creating constructor of the sub class's prototype
}

//Super Class
var Mobile = function(){
}

//Super class's prototype method
Mobile.prototype.getModel = function(){
    return this.model;
}

//Sub Class
var Samsung = function(model, price){
    this.model = model;
    this.price = price;
}

//Sub Class
var Nokia = function(model){
    this.model = model;    
}

//Inheritance using extended function
extended(Samsung,Mobile);
extended(Nokia,Mobile)

//Creating & giving a value to the Sub class's prototype 
Samsung.prototype.getPrice = function(){
    return this.price
}

//for Samsung Sub class============================================
var s = new Samsung('Galaxy',30000);      //Object of the Sub Class
document.write('Model from Super class: ',s.getModel(),'<br>'); //Sub class passes value to the getModel function of the Super Class
//console.log(s.getModel()); // to see the same result in the consol mode
document.write('Model from Super class: ',s.getPrice(),'<br>'); //Sub class passes value to the getModel function of the Super Class

//for Nokia Sub class============================================
var n = new Nokia('Lumia',50000);      //Object of the Sub Class
document.write('Model from Super class: ',n.getModel(),'<br>'); //Sub class passes value to the getModel function of the Super Class
document.write('Model from Super class: ',n.getPrice(),'<br>'); //No output since there is no property named price in Nokia Sub class

