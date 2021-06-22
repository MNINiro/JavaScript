//Ex-1-Object literal-for single object
var fees = {};
fees['Hafiz'] = 200; //to use same data 'Hafiz' in another object, we have create another object


//Ex-2-Object literal declare and initial
var MonthlyFees = {Ayman:250};


//Ex-3-Object Constructor
var amount = new Object();


//Ex-4-Factory function - we can create multiple objects
function mobile()
{
    return{model:'Galaxy'} //same data is avilable for all objects
}
var Samsung = mobile();
var LG = mobile();


//Ex-5-Constructor function - we can create multiple objects
function Mobile(){
    this.model = 'Galaxy';    
}
var samsung = new Mobile();
var lg = new Mobile();

