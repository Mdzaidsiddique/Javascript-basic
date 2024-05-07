//string : String is a primitive data type in js. i.e. it is use stack memory not heap
let name = "Khan"
let nationality = "India"

//string creation
let strTemp = `welcome  Mr ${name} to ${nationality}`
console.log(typeof strTemp);
// template litrals and String interpolation
console.log(`My Name is ${name} and i am from ${nationality}`);

let str = new String("zaid"); //Object DataType (non-primitive or reference)
let str1 = "alif"    //string (premitive) data type

// string concatination
let string1 = str + str1; 
console.log(str.concat(str1));

let num = 240000;
let numString = num.toString()
console.log(numString, typeof (numString));

//toLocaleString() : Language Sensitive
console.log(num.toLocaleString("en-IN"), typeof(num.toLocaleString()));

const firstName = "Zaid"
// toUpperCase() & toLowerCase()
console.log(firstName.toUpperCase())
console.log(firstName.toLowerCase());

//charAt();
console.log(firstName.charAt(0));
// indexOf()
console.log(firstName.indexOf('a'))

const lastName = "Siddique";
console.log(lastName.lastIndexOf("d")); //last index od provided character
console.log(lastName.indexOf("d")); //first index of given character

// slice()
console.log(lastName.slice(0, 3)); //return string first and last index excluded

//charCodeAt()
console.log(lastName.charCodeAt(1)); //return unicode value

//split()
const fullName = "Md Zaid Siddique"
console.log(fullName.split(" ")) //split basic of given parameter and return Array object 

let string2 = "   string  "
console.log(string2.trim()); //remove whitespaces from both ends & '\n' character
console.log(string2.trimStart()); //remove leading whitespaces & line terminator character
console.log(string2.trimEnd()); //remove tailing whitespaces & line terminator character

//substring(start, ends) : end => excluded
let string3 = new String("zaid alif")
console.log(string3.substring(2, 5)); //return substring from start to end-1

//substr(start, length)
console.log(string3.substr(2, 5)); //return substring from start ot length

console.log(string3.valueOf()) //return primitive value of the specified object

const fullNamew = "Md Zaid Siddique"

// replace(pattern, replacement)
let replacedString = fullNamew.replace("d", "-") //find 1st occurance and replce
console.log(replacedString); //in case of "" add to start