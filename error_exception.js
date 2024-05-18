// exception :: a wat to handle errors in js using throw new Error() or try-catch and finally block

function devide(num1, num2){
    if(num2==0){
        throw new Error("devision from zero is not allowed")
    }
    return num1/num2;
}

console.log(devide(4, 2));

// console.log(devide(2, "fd")); // NaN

// try-catch-finally 

try {
    let result = devide(10, 0)
    console.log(result);
} catch (error) {
    console.log("Can't devide from zero")
} finally{
    console.log("always run");
}
