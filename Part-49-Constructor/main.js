/*//Ex-1-Here following function will behave like a class
function Mobile()
{
    this.model = '3310';        //'this' keyword refers the instance
    this.price = function()
    {
        document.write(this.model,' ',"price is 10000",'<br>');
    }

}
var Samsung = new Mobile(); //new instance(Samsung) and new constructor(new Mobile) have been created

//accessing to the function(class) using instance
Samsung.price(); //using the price function
document.write('Model is ',Samsung.model,'<br>');
*/

//Ex-2-With Parameter
function Mobile(model,price)
{
    this.model = model;        //'this' keyword refers the instance
    this.price = function()
    {
        document.write(this.model,' ',"price is ",price,'<br>');
    }

}
var Samsung = new Mobile('Galaxy',30000);   //new instance(Samsung) and new constructor(new Mobile) have been created
var Nokia = new Mobile('Lumia',50000);      //Another instance and constructor

//accessing to the function(class) using instance
Samsung.price(); //using the price function
document.write('Model is ',Samsung.model,'<br>');

Nokia.price();
document.write('Model is ',Nokia.model,'<br>');

