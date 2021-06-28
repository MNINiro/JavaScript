// Initializing a constructor function
//function Zero(name, level) { //following is the alternet way
var Zero = function(name,level){
    this.name = name;
    this.level = level;
}

// Adding a method to the constructor
Zero.prototype.greet = function() {
    return `${this.name} says hello.`;
}

//Object creation
const zero1 = new Zero('MNI', 10);
document.write('From function.js','<br>')
document.write('==== Parent Class =====','<br>')
console.log(zero1)
document.write(zero1.name,'<br>')
document.write(zero1.level,'<br>')
document.write(zero1.greet(),'<br>','<br>')

// Creating a new constructor from the parent
//function Gage(name, level, spell) { //following is the alternet way
var Gage = function(name, level, spell) {
    // Chain constructor with call
    Zero.call(this, name, level);
    this.spell = spell;
}

const zero2 = new Gage('Niro', 20, 'Black Flag');

document.write('==== Child Class =====')
console.log(zero2)
document.write('<br>')
document.write(zero2.level,'<br>')
document.write(zero2.spell,'<br>')
document.write(zero1.name,'<br>') //from super class
document.write(zero2.name,'<br>','<br>')
