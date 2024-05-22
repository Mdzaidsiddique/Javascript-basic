// cloning an array multiple ways

let arr = [1,23,45]

let arr1 = [...arr]

let arr2 = Array.from(arr)

let arr3 = []
for(i of arr){
    arr3.push(i)
}

// let arr4 = arr.splice(0)
let arr5 = arr.slice(0)

// console.log(arr5, arr);

//merge two arrays multiple ways
let a1 = [1,2,3]
let a2 = [4,5,6]

let mergedArray1 = [...a1, ...a2]

let mergedArray2 = a1.concat(a2)

a1.push(a2)
let mergedArray3 = a1.flat()

// console.log(mergedArray3);

//print duplicate character count
let input = "This is a samlple line";

let obj = {}
for(char of input){
    if(obj[char] == undefined){
        obj[char] = 1
    }else{
        obj[char]++
    }
}

for(key in obj){
    if(obj[key] > 1){
        // console.log(key +" : "+obj[key]);
    }
}

// console.log(obj);

// sample code to demonstrate scope of let, var and const

let score1 = 500
var score2 = 100
const score3 = 200

{
    let score1 = 5; // block scope
    var score2 = 10; // function or global scope
    const score3 = 20; // block scope
}

// console.log(score1, score2, score3);

function addAllNumbers(num1, ...num2){
    let sum = num1;
    for(num of num2){
        sum+=num
    }
    return sum;
}

function addAllNumbersWithReduce(num1, ...num2){
    return num2.reduce((acc, curr)=>{
       return acc+curr
    }, num1)
}

// console.log(addAllNumbersWithReduce(2,3,4,5,6));

let inputArray = [1, "Hello", 2, 5, "Wor", 14, 2000, "ld", 2, "!"]
let numSum = 0;
let strConcat = "";
for(value of inputArray){
    if(typeof(value) == (typeof 1)){
        numSum +=value
    }else{
        strConcat += value;
    }
}

// console.log(strConcat+numSum);

// Q. write a function which will take 2 numbers(start and end) and return a random number in between.

let start = 10;
let end = 20;

let randomNumber = Math.random() * ((end - start)+1) + start

// console.log(randomNumber);

let map1 = new Map()
map1.set("name","iphone13")
map1.set("price", 45000)

let map2 = new Map()
map2.set("name","iphone12")
map2.set("price", 40000)


let map3 = new Map()
map3.set("name","iphone15")
map3.set("price", 70000)

let arrayOfMaps = [map1, map2, map3]

let totalPrice = arrayOfMaps.reduce((acc, curr)=>{
    let price = curr.get("price")
    return acc+price
},0)

let obj1 = {name: 'iphone12', price : 40000}
let obj2 = {name: 'iphone13', price : 45000}
let obj3 = {name: 'iphone15', price : 70000}

let arrayOfObj = [obj1, obj2, obj3]

let totalPriceObj = arrayOfObj.reduce((acc, curr)=>{
    return acc + curr.price;
}, 0)
// console.log(totalPriceObj)

let object = {name:"zaid", age : 12}

object["exp"] = "12 years"

console.log(object);

Object.defineProperty(object, "exp", {
    enumerable : false
})

console.log(object)

let oo = {
    name : "azad",
    name : "zaid",
    age : 56
}

console.log("this is the object", oo, Object.keys(oo).length);