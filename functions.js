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
let fun = function(){}
 
/*  :: types of function
    1. arrow function
    2. callback function
    3. immideatly invocked function
    4. anonymous function
    5. lambda function 
*/


// (function aff() { }) //function expression
// //immideatly invoke fn:: on function expression only
//     (function aff() { })()
