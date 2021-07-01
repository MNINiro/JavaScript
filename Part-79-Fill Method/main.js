var Items = ['Sony','Samsung','Apple','Sony','HP'];

//Ex-1
Items.fill('PC') //Start filling with the word 'PC' from index 0 to end
document.write(Items,'<br>');

//Ex-2
Items.fill('Laptop',1,3) //Start filling with the word 'Laptop' from index 1 to 3
document.write(Items,'<br>');

//Ex-3
var arr = new Array(3).fill('Empty');
document.write(arr,'<br>')
arr.fill('Computer',1,3);
document.write(arr);




