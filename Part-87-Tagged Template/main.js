var Items = 15;
var PurchasedItem = 5;
var Price = 100;
var Discount = 50;

//Ex-1-Directly accessing using variables
document.write(`There are ${Items} items in the shop. Each item's price is ${Price} taka. 
If you purchase ${PurchasedItem} items then you will get ${Discount} taka discount`);
document.write('<br>','<br>');


//Ex-2-Using function with parameters
function template(Text,Item,cost,pItem,disc){
    if(pItem < 5){
       disc = 0;
       return `${Text[0]} ${Item} ${Text[1]} ${cost} ${Text[2]} ${pItem} ${Text[3]} ${disc} ${Text[4]}`; //to check the array, we can write Text[0]
    }
    else{
        return `${Text[0]} ${Item} ${Text[1]} ${cost} ${Text[2]} ${pItem} ${Text[3]} ${disc} ${Text[4]}`; 
    }   
}

//Ex-3-Function with rest parameter
function template1(Text, ...rest){ //...rest will pass all others values serially
    if(rest[2] < 5){
       rest[3] = 0;
       return `${Text[0]} ${rest[0]} ${Text[1]} ${rest[1]} ${Text[2]} ${rest[2]} ${Text[3]} ${rest[3]} ${Text[4]}`; //to check the array, we can write Text[0]
    }
    else{        
        return `${Text[0]} ${rest[0]} ${Text[1]} ${rest[1]} ${Text[2]} ${rest[2]} ${Text[3]} ${rest[3]} ${Text[4]}`; 
    }   
}

//following each string will be saved in an array
//Calling the function template
/*console.log(template `There are ${Items} items in the shop. Each item's price is ${Price} taka. 
If you purchase more than ${PurchasedItem} items then you will get ${Discount} taka discount`);*/

document.write(template `There are ${Items} items in the shop. Each item's price is ${Price} taka. 
If you purchase ${PurchasedItem} items then you will get ${Discount} taka discount`);
document.write('<br>','<br>');

//for rest parameter
pItm = prompt('Enter number of items:');
document.write(template1 `There are ${Items} items in the shop. Each item's price is ${Price} taka. 
If you purchase ${pItm} items then you will get ${Discount} taka discount`);
