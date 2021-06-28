//Differences between JavaScript constructor functions 
//and ES6 classes. Both classes and constructors imitate 
//an object-oriented inheritance model to JavaScript, 
//which is a prototype-based inheritance language.

// Initializing a class definition
class Parents {
    constructor(name, level) { // to initialize an object
        this.name = name;
        this.level = level;
        this.point = function(){
            return "Instance Member"
        }
    }
    // Adding a property to the constructor
    info() {
        return `${this.name} in level ${this.level}`;
    }
}

// Adding a method to the constructor
Parents.prototype.greet = function() {
    return `${this.name} Prototype Member`;
}

//Object creation
const hero1 = new Parents('Varg', 1);

document.write('From class.js','<br>')
document.write('==== Parent Class =====','<br>')
console.log(hero1)
document.write(hero1.info(),'<br>') //calling property of the parent class
document.write('Name: ',hero1.name,'<br>')
document.write('Level: ',hero1.level,'<br>')
document.write('Points: ',hero1.point(),'<br>')
document.write(hero1.greet(),'<br>','<br>') //calling prototype


//============ Creating a new Child class from the parent class ===========
class Child extends Parents {
    constructor(name, level, spell) {
        // Chain constructor with super
        super(name, level); //to call & initialize  Parents class. Must use before 'this'
        // Adding a new property in the Child class
        this.spell = spell;
    }
    // Adding a property to the constructor
    Chinfo() {
        return `${this.spell}`;
    }
}

// Adding a method to the Child constructor
Child.prototype.Chgreet = function() {
    return `${this.spell} has a Prototype Member`;
}

const hero2 = new Child('Lejon', 2, 'Magic Missile');

document.write('==== Child Class =====')
console.log(hero1)
document.write('<br>')
document.write('Level: ',hero2.level,'<br>')
document.write('Spell: ',hero2.spell,'<br>')
document.write('Parent class name: ',hero1.name,'<br>') //from super class
document.write('Child class name: ',hero2.name,'<br>')
document.write('Child class method: ',hero2.Chinfo(),'<br>')
document.write('Child class Prototype: ',hero2.Chgreet(),'<br>')
document.write('Parents class Prototype: ',hero2.greet(),'<br>')//from Super class

//Method Overriding in JS
class GrandChild extends Child {
    //this GrandChild's Chinfo method will override Child Class's Chinfo method
    Chinfo(){
        return "Grand Child class method"
    }
}

var gc = new GrandChild();
document.write(gc.Chinfo());
