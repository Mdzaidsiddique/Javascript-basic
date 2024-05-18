// function definition
function functionName(parameter1, parameter2) {
    console.log();
}

// function call
functionName(argument1, argument2);  

// function calculateCartPrice(...price) {
    function calculateCartPrice(p1, p2, ...price) { //... rest operator: multiple parameter as a collection
    // [price1, price2...] 
    return price
}
let result = calculateCartPrice(200, 400, 500, 600);
console.log(calculateCartPrice(200, 400, 500, 600));

// function expression
let fun = function () { }

// closure : the ability of accessing paranet function variables inside child function in a nested function scenerio
 
/*  :: types of function
    1. arrow function or lambda function 
    2. callback function or argument function or anonymous function
    3. immideatly invocked function
*/


// (function aff() { }) //function expression
// //immideatly invoke fn:: on function expression only
//     (function aff() { })()
