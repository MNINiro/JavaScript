//Ex-1
var Students = ['Ayman','Fuad','Shabab'];

document.write('The data structure is ',typeof(Students),'<br>','<br>');
document.write(Students,'<br>');
document.write(Students[2],'<br>','<br>') //Showing specific location's data

/*
//Ex-2-Replacing any value of the array
Students[2]='Marzuk'    //Replacing any specific value of the array
for (var i in Students){   
    document.write(Students[i],'<br>');
}
document.write('<br>');

//Ex-3-Conditional replacement
for (var i in Students){   
    if (Students[i] == 'Marzuk')
               (Students[i] = 'Shabab');               
}
Temp = Students;             //Assigning an Array to a variable that will also convert into an array
document.write(Temp,'<br>');    
document.write(Temp[2],'<br>');    

//Ex-4-Input data to an array
var Products = [];  //Empty array
var x = prompt("How many products do you want to add?")

for(let i=0; i<x; i++){
    pro = prompt("Enter Product Name: ");
    Products[i] = pro;    
} 

document.write('Items in the array: ',Products,'<br>')

for (let i in Products){   
    document.write(Products[i],'<br>');
}


//Ex-5-Variable to an array
var a = 10, b = 15, c = 20;     //Assigning values in variable
var arr = [a,b,c];              //Creating an array using variables

for (var i in arr){   
    document.write(arr[i],'<br>');
}


//Ex-6-Declaration and Initialization of Array
var elements = new Array(101,202,'AAA',404); // It's an array constructor
//The above line is as same as: var elements = [101,202,'AAA',404]
//var elements = new Array() //Alternate way to create empty array
document.write(elements)


//Ex-7-Array length-NOT effective
var x = new Array(5) // Here, 5 is the length of the array but it does not work
var a = 5;
document.write('Initial Length of the array: ',x.length,'<br>');

for (var i=0; i<10; i++){   
    x[i] = a+i
    document.write(x[i],'<br>');
}
document.write('New Length of the array: ',x.length);


//Ex-8-Removing an element from an array
var numbers = [11,22,33,44,55];
delete numbers[0];              //delete will remove the element, not the position. So, it will show presceding ','
document.write(numbers,'<br>');  
document.write(numbers[0]);     // Now it will show undefined since length remain as it is
*/

