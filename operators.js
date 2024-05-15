/*
Expression: c = a + b
            a, b and c are operands
            + and = are operators
            */

// Assignment operator (=)

// Arithmetic operators [+,-,*,/,%,**]
let a = 10, b = 5;

console.log("add = ", a + b);
console.log("sub = ", a - b);
console.log("mul = ", a * b);
console.log("dev = ", a / b);
console.log("modulo = ", a % b);
console.log("exponential = ", 2 ** 3);

// Comparision operator [>,<,>=,<=,==,===,!=,!==]
console.log(a < b, a<=b);
console.log(a > b, a>=b);
console.log(a == b, a===b);
console.log(a != b, a !== b);

// logical operator (&&, ||, &, |)


// boolean operator (true, false)

// nullish Coalescing Operator (??) : (null, undefined)
// assign first truthy value
let val;

val = 5 ?? 10;

val = null ?? 10;

val = undefined ?? 10;

val = null ?? undefined ?? 10 ?? 50

// console.log(val);

// terniary operator : condition ? true : false 
