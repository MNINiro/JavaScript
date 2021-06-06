//Ex-1-Declaration and creation of Object
var fees = {Ayman:200, Fuad:250,['Shabab Ahmed']:300,total:function(){return(100+200+300)}};
document.write(fees['Ayman'],'<br>');
document.write(fees.Fuad,'<br>');
document.write(fees['Shabab Ahmed'],'<br>');
document.write(fees.total(),'<br>','<br>');


//Ex-2-Calculation in declaration
var fees = {Ayman:200, Fuad:250,['Shabab Ahmed']:300,total:function(){return(fees.Ayman+fees.Fuad+fees['Shabab Ahmed'])}};
document.write(fees['Ayman'],'<br>');
document.write(fees.Fuad,'<br>');
document.write(fees['Shabab Ahmed'],'<br>');
document.write('Total is:',fees.total(),'<br>','<br>');

document.write(fees['Ayman'],'<br>',fees.Fuad,'<br>'); //Output multiple object values