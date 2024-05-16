// in js code run line by line that means until line 1 will not executed completely line 2 wont execute : blocked code 
// async : do other work siumulteniousaly till then line one is executed
// setTimeOut(), setInterval(), clearInterval() --> global (window object) methods

async function sayHi(){
    console.log("Hi, this is zaid");
    setTimeout(()=>{
        console.log("Hi, after 1 sec");
    }, 1000)

    console.log("I will sayt hi again, wait");
}

sayHi()