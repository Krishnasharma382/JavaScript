// conversion and operations on revision numbers
let  number = "10arghj";
console.log(typeof number);
console.log(typeof (number));

let convertedNumber = Number(number);

console.log(typeof convertedNumber); // number
console.log(convertedNumber);// NaN (Not a Number)

let loggedin = "Krishna";
let bolleanValue = Boolean(loggedin); // converts to true if loggedin is not empty
console.log( bolleanValue); // boolean


let number1 = 10;
let stringnumber = String(number1);
console.log(typeof stringnumber); // string
console.log(stringnumber); // "10"