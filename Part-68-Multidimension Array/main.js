/*//Ex-1
var sales = [["Sony","4K",150000],["Samsung","UHD",140000]];

//It will display the value of the array directly
for (let value of sales){
    document.write(value,'<br>');
}
document.write('<br>')

//It will display according to row and column
document.write('Brand |','Type |','Price','<br>')
for (let i=0; i<3; i++){
    for (let j=0; j<3; j++){
        document.write(sales[i][j],' | ')
    }
    document.write('<br>')
}

document.write('<br>')

//Ex-2-It will display a simple 2D Array
for (let x=0; x<3; x++){
    for (let y=0; y<3; y++){
        document.write(x,y,' | ')
    }
    document.write('<br>')
}
*/
//Ex-3-Creating empty 2D array
var rows = 4;
var col = 3;
var arr = new Array(rows);

for (var i=0; i < rows; i++){
    arr[i] = new Array(col);
}

for (let x=0; x<rows; x++){         //row
    for (let y=0; y<col; y++){      //column
        document.write(arr[x][y] = x,y,' | ')
        //document.write(arr[x][y] = prompt("Enter data: "))
    }
    document.write('<br>')    
}



