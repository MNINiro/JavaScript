var items = ['Sony','Samsung','Apple','Sony','HP'];

//Ex-1
var pos = items.indexOf("Apple");
document.write(items[pos],' found at position: ', pos,'<br>');

//Ex-2
var pos = items.indexOf("HP");
document.write(items[pos],' found at position: ', pos,'<br>');

//Ex-3
var pos = items.indexOf("Sony");
document.write(items[pos],' found at position: ', pos,'<br>'); //It stops searching after getting the first value

//Ex-4
var pos = items.indexOf("Dell");
document.write(items[pos],' Item found at position: ', pos,'<br>');

//Ex-5
var pos = items.indexOf("Sony");
document.write(items[pos],' Item found at position: ', pos,' and ',2,'<br>'); //here, 2 refers new starting point to restart search in the remaining items 
