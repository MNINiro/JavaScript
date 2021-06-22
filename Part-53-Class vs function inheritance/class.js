//Differences between JavaScript constructor functions 
//and ES6 classes. Both classes and constructors imitate 
//an object-oriented inheritance model to JavaScript, 
//which is a prototype-based inheritance language.

// Initializing a class definition
class Hero {
    constructor(name, level) {
        this.name = name;
        this.level = level;
    }

    // Adding a method to the constructor
    greet() {
        return `${this.name} says hello.`;
    }
}

// Adding a method to the constructor
Hero.prototype.greet = function() {
    return `${this.name} says hello.`;
}

const hero1 = new Hero('Varg', 1);

console.log(hero1)
document.write(hero1.name,'<br>')
document.write(hero1.level,'<br>')
document.write(hero1.greet())


// Creating a new class from the parent
class Mage extends Hero {
    constructor(name, level, spell) {
        // Chain constructor with super
        super(name, level);

        // Add a new property
        this.spell = spell;
    }
}
const hero2 = new Mage('Lejon', 2, 'Magic Missile');

console.log(hero1)
document.write('<br>')
document.write(hero2.level,'<br>')
document.write(hero2.spell,'<br>')
document.write(hero1.name,'<br>') //from super class
document.write(hero2.name)

