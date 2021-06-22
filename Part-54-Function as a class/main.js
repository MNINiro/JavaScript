/*//Ex-1-using Public properties
var Mobile = function(modelNo,sPrice){
    this.model = modelNo;       //"this" refers public property
    this.color = 'White';
    this.price = 3000;
    this.sp = sPrice;
    this.SellingPrice = function(){
        return (this.price + this.sp);
    };
    this.display = function(){
        document.write("Model No: ",this.model," Price is: ",this.SellingPrice());
    }
};

var Samsung = new Mobile("Galaxy",2000);
var Nokia = new Mobile("Lumia",1000);

document.write(Samsung.display()()); //two "()" for two functions, display and SellingPrice 
*/

//Ex-1-using private properties
var Mobile = function(modelNo,sPrice){
    var model = modelNo;        //Private property
    this.color = 'White';       //Public property
    var price = 3000;           //Private property
    this.sp = sPrice;

    this.SellingPrice = function(){
        return (price+sPrice);         //Accessing private property "price" using public function
    };    
    
    this.display = function(){
        document.write("Model No: ",model," Price is: ",this.SellingPrice()); //accessing to private "model" & public "SellingPrice"
    }

};

var Samsung = new Mobile("Galaxy",2000);
var Nokia = new Mobile("Lumia",1000);

document.write('Selling Price: ',Nokia.SellingPrice(),'<br>'); //Displaying O/P
document.write('Selling Price: ',Samsung.price,'<br>'); //inaccessible property "price" since it is private
document.write(Samsung.display()());
