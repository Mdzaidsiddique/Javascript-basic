console.log(typeof NaN); //number

console.log(undefined); // undefined

console.log(undefined == null); // true

console.log(typeof null); // object

console.log(isNaN(NaN)) // true

console.log(isNaN("hello")) // true

console.log("100" + 24) //10024

console.log('100' / 20) // 5 : apart from + every arithmic operator will convert "" to number implicitly amd perform calculation

console.log(100 + null); // 100

console.log(100 + undefined); // NaN
 
console.log(100 + NaN); // NaN
console.log(0==false, 0===false); // true false

console.log(typeof true);

console.log(Number.isNaN("Hello")); // false

console.log(Number.isNaN(NaN)); // true

console.log(undefined && null); // first falsy value

console.log(undefined || null); // last falsy value or first truthy value