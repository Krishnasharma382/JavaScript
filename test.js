"use strict"; // it is used to enforce stricter parsing and error handling in your JavaScript code, and follows new ECMAScript standards.

const greeting = "Hello, Krishna!"; //cannot be changed
const account_Id = 12345;
let account_email = "abc@gmail.com"; //can be changed
var account_Pass = "12345";
console.table([greeting, account_Id, account_email, account_Pass]); // will print in table format for all the variables.

/*prefer not to use var, use let or const instead because var is function 
scoped and can lead to unexpected behavior in larger codebases.*/

/* 
number 
big int 
string
boolean => true or false value.
null => standalone value that represents the intentional absence of any object value.
undefined => a variable that has been declared but has not yet been assigned a value.
symbol => a unique and immutable primitive value that can be used as an identifier for object properties.

object => a collection of key-value pairs, where keys are strings (or Symbols) and values can be any type, including other objects.
*/

console.log(typeof greeting); // string