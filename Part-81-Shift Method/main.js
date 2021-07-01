var Items = ['Sony','Samsung','Apple','HP','Dell'];

Items.sort();                   //Arranging Items
document.write(Items,'<br>');   //Default array
document.write('No of Items: ',Items.length,'<br>','<br>'); //Default size of the array

//Ex-1
var Item_removed = Items.shift()   //Each item will be removed from the beginning of the array
document.write('Removed item: ',Item_removed,'<br>'); //Showing removed item
document.write('Updated Array: ',Items,'<br>');
document.write('No of Items: ',Items.length,'<br>','<br>');

//Ex-2
l = Items.length
for (i=0; i<l; i++){
    var Item_removed = Items.shift()
    document.write('Removed item: ',Item_removed,'<br>'); //Showing removed item
    document.write('Updated Array: ',Items,'<br>');
    document.write('No of Items: ',Items.length,'<br>','<br>');    
}