/*//Ex-1-Here following function will behave like a class
function Mobile(model_no)
{
    this.model = model_no;        //'this' keyword refers the instance
    this.memory = 4;     
}

var Samsung = new Mobile(); //new instance(Samsung) and new constructor(new Mobile) have been created
var Nokia = new Mobile("Lumia");

if(typeof Samsung.model != 'undefined'){
    document.write("Available",'<br>');
} else{
    document.write("Does not exits",'<br>');
}

if(typeof Nokia.memory != 'undefined'){
    document.write("Available",'<br>');
} else{
    document.write("Does not exits",'<br>');
}
*/
/*
//Ex-2
function Mobile(model_no)
{
   // this.model = model_no;        //made it unavailable
    this.memory = 4;     
}

var Samsung = new Mobile(); //new instance(Samsung) and new constructor(new Mobile) have been created
var Nokia = new Mobile("Lumia");

if('model' in Samsung){
    document.write("Available",'<br>');
} else{
    document.write("Does not exits",'<br>');
}

if('memory' in Nokia){
    document.write("Available");
} else{
    document.write("Does not exits");
}
*/


//Ex-3
function Mobile(model_no)
{
    this.model = model_no;        
    this.color = 'White';     
}

var Samsung = new Mobile('Galaxy'); 

if(Samsung.hasOwnProperty('color')){
    document.write(Samsung.color, " color Available",'<br>');
} else{
    document.write("Does not exits",'<br>');
}
