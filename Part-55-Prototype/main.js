//Ex-1
var Mobile = function(modelNo){
    //Instance members
    this.model = modelNo;
    this.price = 30000;
}

//instances have been created
var Samsung = new Mobile('Galaxy'); 
var Nokia = new Mobile('Lumia');

/*
//creating additional property in the class for specific (i.e. Samsung) object
Samsung.color = 'Black'; //Additional property
document.write(Samsung.color);
console.log(Samsung);

//But if we use another object (i.e. Nokia), it will not create any property in the class
document.write('<br>');
document.write(Nokia.color); //There is no property names color for Nokia object
console.log(Nokia);
*/

//Ex-2
// to overcome above problem, we can introduce "Prototype" method, 
// wich will add properties under prototype member not under instance member
Mobile.prototype.color = 'White';   //Prototype member
document.write('<br>');
document.write(Nokia.color);
console.log(Nokia);

document.write('<br>');
document.write(Samsung.color);
console.log(Samsung);

//Ex-3-Accessing by Object.keys
document.write('<br>');
document.write(Object.keys(Samsung)) //Accessing to instance members

document.write('<br>');
for (i in Samsung){
    document.write(i);  //Accessing to both instance and prototype members
}

