//Ex-1
var sales1 = ["Sony","4K",150000];
var sales2 = ["Samsung","UHD",140000];
var sales3 = ["LG","OLED",250000];

//Ex-1
newJoin1 = sales1.join("/");        //joining values of an array with any symbol 
document.write(newJoin1,'<br>')

//Ex-2
newArr2 = sales1.concat(sales2);    //Concating one array with another array. 

newJoin2 = newArr2.join("-");       //joining values of an array with any symbol 
document.write(newJoin2,'<br>')

//Ex-3
newJoin3 = newArr2.join(" - ").concat(sales3.join(" / ")); //Concat and join on multiple arrays
document.write(newJoin3,'<br>');
document.write('Type : ', typeof(newJoin3),'<br>')

//Ex-4
newJoin4 = (sales1.join(" - ").concat(sales2.join(" | ")).concat(sales3.join(" - "))); //Applying join on each array then concate
document.write(newJoin4,'<br>');

//Ex-5
s1 = sales1.join(" - ");
s2 = sales2.join(" | ");
s3 = sales3.join(" - "); 
newJoin5 = s1.concat(s2,s3)
document.write(newJoin5);