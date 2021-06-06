//Followin example is the alternate to the previous lesson

//Ex-1-Object Constructor
var fees = new Object();
    fees['Ayman'] = 100;
    fees.Fuad = 120;
    fees['Shabab Ahmed'] = 150;
    fees.total = fees.Ayman + fees.Fuad + fees['Shabab Ahmed'];                         //Direct calculation
    fees.subtotal = function(){return(fees.Ayman + fees.Fuad + fees['Shabab Ahmed']);}; //Calculation using function


document.write(fees['Ayman'],'<br>');
document.write(fees.Fuad,'<br>');
document.write(fees['Shabab Ahmed'],'<br>');
document.write('Total :',fees.total,'<br>');            //Direct access to an object
document.write('Sub Total :',fees.subtotal(),'<br>')    // Access to a function or method
document.write('Sub Total :',fees["subtotal"]());       // Access to a function or method

console.log(fees);
