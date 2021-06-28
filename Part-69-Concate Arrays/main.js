//Ex-1
var sales1 = ["Sony","4K",150000];
var sales2 = ["Samsung","UHD",140000];
var sales3 = ["LG","OLED",250000];

newArr1 = sales1.concat("Samsung","UHD",140000); //concating values with one array 
document.write(newArr1,'<br>')

newArr2 = sales1.concat(sales2); //Concating one array with another array. 
document.write(newArr2,'<br>');

newArr3 = sales1.concat(sales2,sales3); //Concating one array with more than one arraya. 
document.write(newArr3,'<br>');
document.write('<br>')

for(i=0; i<9; i++){
    document.write(newArr3[i],' | ')
}
