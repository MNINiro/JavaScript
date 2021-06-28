function extended(child,parent){
    child.prototype = Object.create(parent.prototype);      //Sub class prototype has been linked with Super class's prototype
    child.prototype.constructor = child;                    //creating constructor of the sub class's prototype
}

//Super Class
var Mobile = function(){
}

//Prototype Member of the Super class
Mobile.prototype.show = function(){
    return "Super class method";
}

//Sub Class
var Samsung = function(){
}

//Inheritance using extended function
extended(Samsung,Mobile);

//Prototype Member of the Sub class. It must be declared after inheritance
Samsung.prototype.show = function(){    //This Sub-class "show" function is overriding the Super-Class "show" function
    return "Sub class method";
}

//Creating object of the Sub class
var s = new Samsung();

//Accessing to the Super Class property using Sub class object due to inheritance
document.write(s.show(),'<br>');

/*//direct access to the Super Class prototype. it is not overriding.
var m = new Mobile();
document.write(m.show());
*/