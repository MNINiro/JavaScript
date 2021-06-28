//Composition or Mixing function
function mixin(target,...sources){  //...sources is a rest parameter that can hold n number of arguments
    Object.assign(target,...sources); //It's a mixin function
}

var eating = {
    eat: function(){
        return "I can eat.";
    }
};

var walking = {
    walk: function(){
        return "I can walk.";
    }
};

var talking = {
    talk: function(){
        return "I can talk.";
    }
};

//New class constructor
var Human = function(){    
}

var Robot = function(){    
}

//Creating class prototype along with sources (characteristics)
mixin(Human.prototype,eating,walking,talking)
mixin(Robot.prototype,walking,talking); //sources

//Creating Object
var X = new Human()
document.write(X.eat(),'<br>');
document.write(X.talk(),'<br>');
document.write(X.walk(),'<br>');

//Creating Object
var R = new Robot
document.write(R.talk(),'<br>');
document.write(R.walk(),'<br>');
