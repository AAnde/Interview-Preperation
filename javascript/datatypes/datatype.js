let int1 = 123;
let dec1 = 123.234;
let neg1 = -1234;

let bgInt1 = BigInt("123456789");
let bgInt2 = 123456789n;

let str1 = "ashok";
let bool1 = true;
let und = undefined;
let nul = null;
let smb = Symbol("test value");

let obj = {};
let arr = ["1","2"];
let date = new Date();
let regExp = new RegExp("");
let map = new Map();
let set = new Set();
 
class Employee {
    name;
    id;
}
function add(){

}

console.log(typeof(int1)); //number
console.log(typeof(dec1)); //number
console.log(typeof(neg1)); //number
console.log(typeof(bgInt1)); //bigint
console.log(typeof(bgInt2)); //bigint
console.log(typeof(str1)); //string
console.log(typeof(bool1)); //boolean
console.log(typeof(und)); //undefined
console.log(typeof(nul)); //object -- Javascript bug
console.log(typeof(smb)); //symbol
console.log(typeof(obj)); //object
console.log(typeof(arr)); //object
console.log(typeof(date)); //object
console.log(typeof(map)); //object
console.log(typeof(set)); //object
console.log(typeof(regExp)); //object
console.log(typeof(Employee)); //function
console.log(typeof(add)); //function
console.log(typeof(Date)); //function
console.log(typeof(RegExp)); //function
console.log(typeof(Map)); //function
console.log(typeof(Set)); //function
// console.log("==========");
// console.log(undefined == null);
// console.log(undefined === null);


