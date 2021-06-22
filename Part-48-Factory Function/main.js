//Ex-1-The following function will behave like a class
function mobile()
{
    return{
        model : 'Galaxy',
        ram : '4GB',
        price : function()
        {
            return("Price:30000");
        }
    }

}
var Samsung = mobile(); //new instance has been created

//accessing to the function(class) using instance
document.write(Samsung.model,' ',Samsung.ram,' ',Samsung.price(),'<br>','<br>');


//Ex-2-with parameter
function CellPhone(Model,Ram,Price)
{
    return{
        model : Model,
        ram : Ram,
        price : function()
        {
            return(Price);
        }
    }

}
var Samsung = CellPhone("Galaxy",'8GB',65000); //new instance has been created
var LG = CellPhone("Flex","6GB",50000);      // another instance

//accessing to the function(class) using instance
document.write(Samsung.model,' ',Samsung.ram,' ',Samsung.price(),'<br>');
document.write(LG.model,' ',LG.ram,' ',LG.price(),'<br>','<br>');


//Ex-3-parameter with promt
function CellPhone(Model,Ram,Price)
{
    return{
        model : Model,
        ram : Ram,
        price : function()
        {
            return(Price);
        }
    }

}
var NewModel = prompt("Enter Model:");
var NewRAM = prompt("Enter RAM:");
var NewPrice = prompt("Enter Price:");

var MobileSet = CellPhone(NewModel,NewRAM,NewPrice); //new instance has been created

//accessing to the function(class) using instance
document.write(MobileSet.model,' ',MobileSet.ram+'GB',' ',MobileSet.price(),'<br>');
