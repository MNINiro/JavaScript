//Ex-1
function Mobile(model_no)
{
    this.model = model_no;        
    this.color = 'white';
    this.ram = 4;
    this.price = function(){
                return(10000);
                }
}
var Samsung = new Mobile('Galaxy'); //new instance(Samsung) and new constructor(new Mobile) have been created
var Nokia = new Mobile('Lumia')

//for..In loop can access in both properties and functions
for (var i in Nokia){   
    document.write(Nokia[i],'<br>');            //It will not show the value of the function 
}
document.write('<br>');

//to control showing function's value
for (var i in Nokia){
    if(typeof Nokia[i] != 'function'){
        document.write(i,': ',Nokia[i],'<br>');    
    }else{
        document.write(i,': ',Nokia[i]());       //It will show the value of the function
    }    
}

//To show objects
document.write('<br>','<br>');
document.write(Object.keys(Nokia));


