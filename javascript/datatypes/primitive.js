/**
 * primitive data 
 *      data will be stored on the stack
 * if you assign primitive data type to a variable, new copy gets created and assigned to that variable
 * changes to the new variable will not effects the original value
 * primitive data types - number,biginit,boolean,string,null,undefined and symbol
 * primitive types are immutable - means once the data has been created and stored in the memory
 *  it cannot be changed later but still has the access in mememory
 */
var num1 = 10;
var num2 = num1;
num2 = 50;
console.log(num1); //10
console.log(num2); //50

// function arguments
function add(num){
    return ++num;
}

var num3 = 25;

console.log(add(num3)); //26
console.log(num3); //25