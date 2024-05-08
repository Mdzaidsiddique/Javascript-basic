let target = 10, arr = [], j = 0;

let obj = {
    "name": "alif",
    "age" : 24
}

console.log("for loop");
// for loop
for (let i = 0; i < target; i++){
    if (target % i == 0) {
        console.log(i);
    }
}

console.log("while loop");

// while loop
let i = 0;
while (target>i) {
    console.log(i+=2);
}

console.log("do while loop");

// do while loop : execute atleast one
// flow of execution: statement -> condition

do {
    arr.push(j); //statements
    j += 3;
} while (target > j) { //condition 
    console.log("Welcome to do while loop");
}

console.log(arr);

console.log("for in loop");

/* :: for in loop :: 
=> mainly return keys or indexes
=> Use the for-in loop to iterate over non-array objects. Even though we can use a for-in loop for an array, it is generally not recommended. Instead, use a for loop for looping over an array.
*/
for (let index in arr) { //not recommonded
    console.log(`element present in array ${arr[index]} at index ${index}`);
}

for (let key in obj) { 
    console.log(key+" "+obj[key]);
}

const string = "zaidalif";   //not recommonded
for (let index in string) {
    console.log(index+" "+string[index]);
}


console.log("for of loop");

/* :: for of loop :: 
=> return values not keys/index
=> iterate over itarable objects such as arrays, strings, maps, sets, etc
*/
for (index of arr) {
    console.log(index);
}

for (index of string) {
    console.log(index);
}

// for (key of obj) { } // Error 