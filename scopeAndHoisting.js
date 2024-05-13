//Scope

{
    "this is called scope"
}

// Local/block scope, Global scope and function scope

// Global scope
let a = 100;
const b = 2000;
if (true) {
    // block scope
    let a = 0;
    const b = 10;
    var s = 0.5;
}

function multiply (a, b) {
    var result = a * b;  // function scope
    return result
}

//local scope have a access to global scope but viceversa is not true

console.log(a);
console.log(b);
console.log(s);

/* var variables are 'function scope. ' What does this mean? It means they are only available inside the function they're created in, or if not created inside a function, they are 'globally scoped. */


/* 
Hoisting :: Hoisting entails moving all declarations to the top of the scope before executing the code

Hoisting is the default behavior in JavaScript where declarations of variables and functions are moved to the top of their respective scopes during the compilation phase. 

*/

const x = 1;
{
//   console.log(x); // ReferenceError
  const x = 2;
}

// Hoisting
function codeHoist() {
    aa = 10;
    let bb = 50;
}
codeHoist();

console.log(aa); // 10
// console.log(bb); // ReferenceError : bb is not defined

console.log(name);
{
    var name = "zaid" //undefined not reference error
}

//let example(global)
console.log(nameLet);
{
    let nameLet = 'zaid'; // ReferenceError: name is not defined
}


// https://www.geeksforgeeks.org/javascript-hoisting/