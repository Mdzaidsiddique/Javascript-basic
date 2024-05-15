// definition
// through constructor:: singleton
const object = Object.create
const obj1 = new Object();

const mysymbol = Symbol("key1")

const obj2 = {     // object literals
    name: "zaid",
    "fullName": "md zaid siddique",
    age: 18,
    location: "deoria",
    email: "z@gmail.com",
    isLogIn: false,
    lastLogInDays: ["Monday", "Saturday"],
    [mysymbol] : "mysim1" // way to declare sumbol (with type) as a key 
} 

// access
console.log(obj2.fullName); // dot notation
console.log(obj2["fullName"]); // square notation
console.log(obj2[mysymbol]); // way to access symbol type key

obj2.email = "zaid@mindfire.com"
obj2["isLogIn"] = true;

// Object.freeze(obj2) // lock the object for changes: no error but value will not propogate

obj2.email = "zaid@yahoo.com"

// console.log(obj2);

let o1 = {
    "id" : 1,
    greetings: function () {
        console.log("greeting...");
    } 
}
// console.log(o1.greetings())

let o2 = {
    id : 1,
    user: {
        userId : 11,
        userName : "alif",
        userAddress: {
            locality: "lucknow",
            state: "U.P",
            nationality: function () {
                console.log(`I am ${o2.user.userName} from India`);
            }
        }
    }
}
console.log(o2.user.userAddress.nationality());

// check object properties
console.log("id" in o2);


// check ibject is empty or not 
let ob = {}
if(Object.keys(ob).length === 0) console.log("empty object");