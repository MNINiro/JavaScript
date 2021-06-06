//Ex-1
var fees = {};                //fees is an object declaration
    fees['x'] = 100;
    fees['y'] = 120;
    fees['z'] = 150;
    fees['MNI Niro'] = 500;

    document.write(fees['x'],'<br>');
    document.write(fees['y'],'<br>');
    document.write(fees['z'],'<br>');
    document.write(fees['MNI Niro'],'<br>'); // It is accessible
    document.write('<br>')

//Ex-2-alternate way
var fees = {};                //fees is an object
    fees.x = 101;
    fees.y = 202;
    fees.z = 303;
    //fees.MNI Niro = 500; //It will generate error since there is a space in the identifier


    document.write(fees.x,'<br>');
    document.write(fees.y,'<br>');
    document.write(fees.z,'<br>');
    //document.write(fees.MNI Niro,'<br>'); // Inaccessible

//Ex-3-creating methods and access to it using object
var fees = {};
fees['total'] = function() {return(100+200);}; //It's a method
fees.subtotal = function() {return(200+200);}; //It's an alternate method declaration

//to access into this method
document.write('<br>')
document.write(fees.total());

document.write('<br>')
document.write(fees['total']());    //alternate way to access to the method

document.write('<br>')
document.write(fees['subtotal']());    //alternate way to access to the method


