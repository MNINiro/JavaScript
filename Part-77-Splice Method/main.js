//Ex-1
const months = ['Jan', 'March', 'April', 'June','August','October'];

months.splice(1, 0, 'Feb'); //It will insert 'Feb' after 'Jan', No(0) replacement
document.write(months,'<br>');

months.splice(4, 1, 'May'); // replaces 1 element at index 4
document.write(months,'<br>');

months.splice(5, 2, 'June','July'); // replaces 2 element starting from index 5
document.write(months,'<br>');

months.splice(2,1)                 //(2,1) refers Index Index 2 then number of elements 
document.write(months,'<br>');    // it will remove only index 2 value (March)

months.splice(2)
document.write(months,'<br>');    // it will remove all elements except first 2 values

