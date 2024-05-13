/* to avoid global scope pollution we use immideatealy invoked function expression (IIFE)
    wrap function inside the () then call ()  then ; is must, sometimes it works without ;
    IIFE: (fucntion definition)();
*/

// :: Named IIFE
(function sayHi() {
    console.log("Hi, Greetings of the day...");
})();

// :: Named IIFE with paramenter
(function sayHi(name) {
    console.log(`Hi ${name}, Greetings of the day...`);
})("Zaid");

// :: Unnamed IIFE with arrow function

((name) => {
    console.log(`Hi ${name} how are you...?`)
})("zaid");

