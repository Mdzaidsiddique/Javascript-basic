// variable :: Variables are used to store data in JavaScript. assign with (=) 

var number = 5; //since start, function & global scoped, can be redeclared, mutable

let email = "z@gmail.com"; // ES6, blocked scoped, mutable

const name = "alif" // ES6, blocked scoped, immutable (constant)\

age = 34; // bad practice

let motherName; // undefined

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([number, email, name, age, motherName]);