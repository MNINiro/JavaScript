//Ex-1
// Input array contain some elements
var A = [ 'Ram', 'Z', 'k', 101, 'geeksforgeeks' ];
  
// Here array.values() function is called.
var iterator = A.values();

// All the elements of the array is being printed.

for (i=0; i<5; i++){
    document.write(iterator.next().value,'<br>');
}

//Ex-2
// Input array contain some elements.
var arr = [ 'a', 'BBB', 'c', 505, true ];
  
// Here array.values() function is called.
var iterator = arr.values();

// Here all the elements of the array is being printed.
document.write('<br>');
for (let elements of iterator) {
    document.write(elements);
    console.log(elements);
}
