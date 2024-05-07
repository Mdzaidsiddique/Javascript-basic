//Scope
//Local scope, Global scope and function scope

//Global scope
let a = 100;
const b = 2000;
if (true) {
    //local scope
    let a = 0;
    const b = 10;
    var s = 0.5;
}

//local scope have a access to global scope but viceversa is not true

console.log(a);
console.log(b);
console.log(s);

