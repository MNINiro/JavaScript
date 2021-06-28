function extended(child,parent){
    child.prototype = Object.create(parent.prototype);      //Sub class prototype has been linked with Super class's prototype
    child.prototype.constructor = child;                    //creating constructor of the sub class's prototype
}

//Super Class
var Mobile = function(){
    this.A = 10;
}

//Prototype Member of the Super class
Mobile.prototype.Z = 30;

//Sub Class
var Samsung = function(){
    Mobile.call(this);
    this.B = 20;
}

//Sub Sub class
var Galaxy = function(){
    Samsung.call(this);
    this.C = 100;
}

//Inheritance for Sub class
extended(Samsung,Mobile);

//Inheritance for Sub Sub class
extended(Galaxy,Samsung);

var m = new Mobile();
var s = new Samsung();
var g = new Galaxy();

document.write("Galaxy's object can access",'<br>');
document.write("Mobile A:",g.A,'<br>');
document.write("Samsung B:",g.B,'<br>');
document.write("Galaxy C:  ",g.C,'<br>');
document.write("Mobile Prototype Z:",g.Z,'<br>');
document.write('<br>');

document.write("Samsung's object can access",'<br>');
document.write("Mobile A:",s.A,'<br>');
document.write("Samsung B:",s.B,'<br>');
document.write("Galaxy C:  ",s.C,'<br>'); //Not accessible since it is a sub class of Samsung
document.write("Mobile Prototype Z:",s.Z,'<br>');
document.write('<br>');

document.write("Mobile's object can access",'<br>');
document.write("Mobile A:",m.A,'<br>');
document.write("Samsung B:",m.B,'<br>');//Not accessible since it is a sub class of Mobile
document.write("Galaxy C:  ",m.C,'<br>'); //Not accessible since it is a sub class of Samsung (sub sub class of Mobile)
document.write("Mobile Prototype Z:",m.Z,'<br>');
