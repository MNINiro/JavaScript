var fees = new Object();
    fees['Ayman'] = 100;
    

document.write(fees['Ayman'],'<br>');

delete fees.Ayman   //Deleting a property
console.log(fees);
document.write(fees['Ayman'],'<br>'); //Will show undefined


