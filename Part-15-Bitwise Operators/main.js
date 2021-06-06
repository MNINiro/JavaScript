// Bitwise AND
var x = 5       //0101
var y = 6       //0110
var c = x & y   //0100
document.write("Bitwise AND:" + (c)) // will display output
document.write("<br>")

// Bitwise OR
var x = 5       //0101
var y = 6       //0110
var c = x | y   //0111
document.write("Bitwise OR:" + (c)) // will display output
document.write("<br>")

// XOR
var x = 5       //0101
var y = 6       //0110
var c = x ^ y   //0011
document.write("Bitwise XOR:" + (c)) // will display output
document.write("<br>")

//Inversion
var x = 5       //0101
// after inversion: 1010 (-8+2=-6)
document.write("Left shift:" + (~x)) // will display output
document.write("<br>")

//Left shift
/* The left shift operator moves all the bits in its first operand 
to the left by the number of places specified in the second operand. 
New bits are filled with zeros.Shifting a value left by one position 
is equivalent to multiplying it by 2, shifting two positions is 
equivalent to multiplying by 4, and so on.*/

var a = 2;  // Bit presentation 0010
var b = 2;  // Bit presentation 0010
            // Result is 1000 = 8

document.write("(a << b) => ");
result = (a << b);
document.write(result); // will display output
document.write("<br>")

//Right shift
var a = 8;  // Bit presentation 1000
var b = 2;  // Bit presentation 0010
            // Result is 0010 = 2

document.write("(a >> b) => ");
result =(a >> b);
document.write(result); // will display output